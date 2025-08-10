import { monitoring } from './sentry';
import { cache } from '@/lib/cache/redis';

// Performance metrics collector
class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.thresholds = {
      api: {
        fast: 100,    // < 100ms
        normal: 500,  // < 500ms
        slow: 1000,   // < 1000ms
      },
      database: {
        fast: 50,     // < 50ms
        normal: 200,  // < 200ms
        slow: 500,    // < 500ms
      },
      cache: {
        fast: 10,     // < 10ms
        normal: 50,   // < 50ms
        slow: 100,    // < 100ms
      },
    };
  }
  
  // Start timing an operation
  startTimer(name, category = 'general') {
    const timer = {
      name,
      category,
      startTime: Date.now(),
      startHrTime: process.hrtime.bigint(),
    };
    
    this.metrics.set(name, timer);
    return timer;
  }
  
  // End timing and record metric
  endTimer(name, metadata = {}) {
    const timer = this.metrics.get(name);
    if (!timer) {
      console.warn(`Timer ${name} not found`);
      return null;
    }
    
    const endHrTime = process.hrtime.bigint();
    const duration = Number(endHrTime - timer.startHrTime) / 1000000; // Convert to ms
    
    const metric = {
      name: timer.name,
      category: timer.category,
      duration,
      timestamp: new Date(),
      ...metadata,
    };
    
    // Classify performance
    const thresholds = this.thresholds[timer.category] || this.thresholds.api;
    if (duration < thresholds.fast) {
      metric.performance = 'fast';
    } else if (duration < thresholds.normal) {
      metric.performance = 'normal';
    } else if (duration < thresholds.slow) {
      metric.performance = 'slow';
    } else {
      metric.performance = 'very_slow';
    }
    
    // Track in Sentry if slow
    if (metric.performance === 'slow' || metric.performance === 'very_slow') {
      monitoring.captureMessage(`Slow operation: ${name}`, 'warning', {
        tags: {
          performance: metric.performance,
          category: timer.category,
        },
        extra: {
          duration,
          metadata,
        },
      });
    }
    
    // Clean up
    this.metrics.delete(name);
    
    // Store metric
    this.storeMetric(metric);
    
    return metric;
  }
  
  // Store metric in cache for aggregation
  async storeMetric(metric) {
    const key = `metrics:${metric.category}:${metric.name}`;
    const hourKey = `metrics:hourly:${new Date().getHours()}`;
    
    try {
      // Store individual metric
      await cache.set(
        `${key}:${Date.now()}`,
        metric,
        3600 // Keep for 1 hour
      );
      
      // Update aggregates
      await this.updateAggregates(metric);
      
      // Add to hourly bucket
      const hourlyMetrics = await cache.get(hourKey) || [];
      hourlyMetrics.push(metric);
      await cache.set(hourKey, hourlyMetrics, 3600);
    } catch (error) {
      console.error('Failed to store metric:', error);
    }
  }
  
  // Update aggregate statistics
  async updateAggregates(metric) {
    const key = `metrics:aggregate:${metric.category}:${metric.name}`;
    const aggregate = await cache.get(key) || {
      count: 0,
      totalDuration: 0,
      minDuration: Infinity,
      maxDuration: 0,
      avgDuration: 0,
      p50: 0,
      p95: 0,
      p99: 0,
      durations: [],
    };
    
    aggregate.count++;
    aggregate.totalDuration += metric.duration;
    aggregate.minDuration = Math.min(aggregate.minDuration, metric.duration);
    aggregate.maxDuration = Math.max(aggregate.maxDuration, metric.duration);
    aggregate.avgDuration = aggregate.totalDuration / aggregate.count;
    
    // Keep last 1000 durations for percentile calculation
    aggregate.durations.push(metric.duration);
    if (aggregate.durations.length > 1000) {
      aggregate.durations.shift();
    }
    
    // Calculate percentiles
    const sorted = [...aggregate.durations].sort((a, b) => a - b);
    aggregate.p50 = sorted[Math.floor(sorted.length * 0.5)];
    aggregate.p95 = sorted[Math.floor(sorted.length * 0.95)];
    aggregate.p99 = sorted[Math.floor(sorted.length * 0.99)];
    
    await cache.set(key, aggregate, 86400); // Keep for 24 hours
  }
  
  // Get performance metrics
  async getMetrics(category = null, name = null) {
    const pattern = category 
      ? `metrics:aggregate:${category}:${name || '*'}`
      : 'metrics:aggregate:*';
    
    const keys = await cache.redis.keys(pattern);
    const metrics = {};
    
    for (const key of keys) {
      const data = await cache.get(key);
      if (data) {
        const parts = key.split(':');
        const metricCategory = parts[2];
        const metricName = parts[3];
        
        if (!metrics[metricCategory]) {
          metrics[metricCategory] = {};
        }
        
        metrics[metricCategory][metricName] = data;
      }
    }
    
    return metrics;
  }
  
  // Get hourly metrics
  async getHourlyMetrics(hour = new Date().getHours()) {
    const key = `metrics:hourly:${hour}`;
    return await cache.get(key) || [];
  }
  
  // Monitor API endpoint
  async monitorEndpoint(req, res, next) {
    const timer = performance.startTimer(
      `${req.method} ${req.path}`,
      'api'
    );
    
    // Override res.end to capture response
    const originalEnd = res.end;
    res.end = function(...args) {
      const metric = performance.endTimer(timer.name, {
        method: req.method,
        path: req.path,
        statusCode: res.statusCode,
        userAgent: req.headers['user-agent'],
      });
      
      // Add performance header
      if (metric) {
        res.setHeader('X-Response-Time', `${metric.duration}ms`);
      }
      
      originalEnd.apply(res, args);
    };
    
    next();
  }
  
  // Monitor database query
  async monitorQuery(queryName, queryFn) {
    const timer = this.startTimer(queryName, 'database');
    
    try {
      const result = await queryFn();
      const metric = this.endTimer(queryName, {
        success: true,
      });
      
      return { result, metric };
    } catch (error) {
      const metric = this.endTimer(queryName, {
        success: false,
        error: error.message,
      });
      
      throw error;
    }
  }
  
  // Monitor cache operation
  async monitorCache(operation, cacheFn) {
    const timer = this.startTimer(operation, 'cache');
    
    try {
      const result = await cacheFn();
      const metric = this.endTimer(operation, {
        hit: result !== null,
      });
      
      return { result, metric };
    } catch (error) {
      const metric = this.endTimer(operation, {
        error: error.message,
      });
      
      throw error;
    }
  }
  
  // Generate performance report
  async generateReport() {
    const metrics = await this.getMetrics();
    const report = {
      timestamp: new Date(),
      categories: {},
    };
    
    for (const [category, endpoints] of Object.entries(metrics)) {
      report.categories[category] = {
        endpoints: {},
        summary: {
          totalRequests: 0,
          avgDuration: 0,
          p95Duration: 0,
          p99Duration: 0,
        },
      };
      
      let totalCount = 0;
      let totalDuration = 0;
      let allP95 = [];
      let allP99 = [];
      
      for (const [endpoint, data] of Object.entries(endpoints)) {
        report.categories[category].endpoints[endpoint] = {
          count: data.count,
          avgDuration: data.avgDuration,
          minDuration: data.minDuration,
          maxDuration: data.maxDuration,
          p50: data.p50,
          p95: data.p95,
          p99: data.p99,
        };
        
        totalCount += data.count;
        totalDuration += data.totalDuration;
        allP95.push(data.p95);
        allP99.push(data.p99);
      }
      
      // Calculate category summary
      if (totalCount > 0) {
        report.categories[category].summary.totalRequests = totalCount;
        report.categories[category].summary.avgDuration = totalDuration / totalCount;
        report.categories[category].summary.p95Duration = 
          allP95.reduce((a, b) => a + b, 0) / allP95.length;
        report.categories[category].summary.p99Duration = 
          allP99.reduce((a, b) => a + b, 0) / allP99.length;
      }
    }
    
    return report;
  }
  
  // Clear old metrics
  async clearOldMetrics(hoursToKeep = 24) {
    const cutoff = Date.now() - (hoursToKeep * 3600 * 1000);
    const pattern = 'metrics:*';
    
    const keys = await cache.redis.keys(pattern);
    let deleted = 0;
    
    for (const key of keys) {
      // Skip aggregates
      if (key.includes('aggregate')) continue;
      
      // Check timestamp in key
      const parts = key.split(':');
      const timestamp = parseInt(parts[parts.length - 1]);
      
      if (!isNaN(timestamp) && timestamp < cutoff) {
        await cache.del(key);
        deleted++;
      }
    }
    
    return deleted;
  }
  
  // Health check
  async healthCheck() {
    const report = await this.generateReport();
    const health = {
      status: 'healthy',
      issues: [],
    };
    
    // Check API performance
    if (report.categories.api) {
      const apiSummary = report.categories.api.summary;
      if (apiSummary.p95Duration > 1000) {
        health.status = 'degraded';
        health.issues.push('API p95 response time > 1s');
      }
      if (apiSummary.p99Duration > 2000) {
        health.status = 'unhealthy';
        health.issues.push('API p99 response time > 2s');
      }
    }
    
    // Check database performance
    if (report.categories.database) {
      const dbSummary = report.categories.database.summary;
      if (dbSummary.p95Duration > 500) {
        health.status = 'degraded';
        health.issues.push('Database p95 query time > 500ms');
      }
      if (dbSummary.p99Duration > 1000) {
        health.status = 'unhealthy';
        health.issues.push('Database p99 query time > 1s');
      }
    }
    
    // Check cache performance
    if (report.categories.cache) {
      const cacheSummary = report.categories.cache.summary;
      if (cacheSummary.p95Duration > 100) {
        health.status = 'degraded';
        health.issues.push('Cache p95 operation time > 100ms');
      }
    }
    
    health.report = report;
    return health;
  }
}

// Create singleton instance
const performance = new PerformanceMonitor();

export { performance };

// Middleware for Next.js API routes
export function performanceMiddleware(options = {}) {
  const { category = 'api' } = options;
  
  return async (req, res, next) => {
    const path = req.url || req.path;
    const timer = performance.startTimer(
      `${req.method} ${path}`,
      category
    );
    
    // Override res.end to capture response
    const originalEnd = res.end;
    res.end = function(...args) {
      const metric = performance.endTimer(timer.name, {
        method: req.method,
        path,
        statusCode: res.statusCode,
        userAgent: req.headers['user-agent'],
        ip: req.ip || req.headers['x-forwarded-for'],
      });
      
      // Add performance header
      if (metric) {
        res.setHeader('X-Response-Time', `${metric.duration}ms`);
        res.setHeader('X-Performance', metric.performance);
      }
      
      originalEnd.apply(res, args);
    };
    
    next();
  };
}

// Helper for Next.js API routes
export async function withPerformance(handler, options = {}) {
  const { name, category = 'api' } = options;
  
  return async (req, res) => {
    const timerName = name || `${req.method} ${req.url}`;
    const timer = performance.startTimer(timerName, category);
    
    try {
      const result = await handler(req, res);
      
      const metric = performance.endTimer(timerName, {
        success: true,
        statusCode: res.statusCode,
      });
      
      // Add performance headers
      if (metric) {
        res.setHeader('X-Response-Time', `${metric.duration}ms`);
        res.setHeader('X-Performance', metric.performance);
      }
      
      return result;
    } catch (error) {
      performance.endTimer(timerName, {
        success: false,
        error: error.message,
      });
      
      throw error;
    }
  };
}