import Redis from 'ioredis';

class InMemoryRedis {
  constructor() {
    this.store = new Map();
  }

  on() {
    return this;
  }

  _isExpired(entry) {
    if (!entry) return true;
    if (!entry.expiresAt) return false;
    return entry.expiresAt <= Date.now();
  }

  _getEntry(key) {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (this._isExpired(entry)) {
      this.store.delete(key);
      return null;
    }
    return entry;
  }

  async get(key) {
    const entry = this._getEntry(key);
    return entry ? entry.value : null;
  }

  async set(key, value) {
    this.store.set(key, { value, expiresAt: null });
    return 'OK';
  }

  async setex(key, ttlSeconds, value) {
    const expiresAt = Date.now() + Number(ttlSeconds) * 1000;
    this.store.set(key, { value, expiresAt });
    return 'OK';
  }

  async del(...keys) {
    let removed = 0;
    keys.flat().forEach((key) => {
      if (this.store.delete(key)) removed += 1;
    });
    return removed;
  }

  async keys(pattern = '*') {
    const regex = new RegExp(`^${pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')}$`);
    const matches = [];
    for (const key of this.store.keys()) {
      if (regex.test(key) && this._getEntry(key)) matches.push(key);
    }
    return matches;
  }

  async exists(key) {
    return this._getEntry(key) ? 1 : 0;
  }

  async expire(key, ttlSeconds) {
    const entry = this._getEntry(key);
    if (!entry) return 0;
    entry.expiresAt = Date.now() + Number(ttlSeconds) * 1000;
    this.store.set(key, entry);
    return 1;
  }

  async incr(key) {
    const entry = this._getEntry(key);
    const current = entry ? Number(entry.value) : 0;
    const next = Number.isFinite(current) ? current + 1 : 1;
    const expiresAt = entry ? entry.expiresAt : null;
    this.store.set(key, { value: String(next), expiresAt });
    return next;
  }

  async ttl(key) {
    const entry = this._getEntry(key);
    if (!entry) return -2;
    if (!entry.expiresAt) return -1;
    return Math.max(0, Math.ceil((entry.expiresAt - Date.now()) / 1000));
  }

  async flushdb() {
    this.store.clear();
    return 'OK';
  }

  async info() {
    return 'in-memory';
  }

  async dbsize() {
    return this.store.size;
  }
}

const redisBaseOptions = {
  maxRetriesPerRequest: 3,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
};

const redisUrl = process.env.REDIS_URL;
const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379;
const redisPassword = process.env.REDIS_PASSWORD;
const hasRedisConfig = Boolean(redisUrl || redisHost || process.env.REDIS_PORT || redisPassword);
const shouldUseRedis = hasRedisConfig || process.env.NODE_ENV !== 'production';

// Create Redis client
const redis = shouldUseRedis
  ? (redisUrl
      ? new Redis(redisUrl, redisBaseOptions)
      : new Redis({
          host: redisHost || 'localhost',
          port: redisPort,
          password: redisPassword || undefined,
          ...redisBaseOptions,
        }))
  : new InMemoryRedis();

let redisErrorLogged = false;
redis.on('error', (error) => {
  if (redisErrorLogged) return;
  redisErrorLogged = true;
  console.error('Redis error:', error?.message || error);
});
redis.on('ready', () => {
  redisErrorLogged = false;
});

// Cache key prefixes
const CACHE_PREFIXES = {
  USER: 'user:',
  SESSION: 'session:',
  ARTICLE: 'article:',
  PAGE: 'page:',
  ANALYTICS: 'analytics:',
  SETTINGS: 'settings:',
  DASHBOARD: 'dashboard:',
  RATE_LIMIT: 'ratelimit:'
};

// Default TTL values (in seconds)
const TTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  DAY: 86400, // 24 hours
  WEEK: 604800 // 7 days
};

class CacheManager {
  constructor() {
    this.redis = redis;
    this.prefixes = CACHE_PREFIXES;
    this.ttl = TTL;
  }
  
  // Generate cache key
  generateKey(prefix, ...parts) {
    return `${prefix}${parts.join(':')}`;
  }
  
  // Get from cache
  async get(key) {
    try {
      const data = await this.redis.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }
  
  // Set in cache
  async set(key, value, ttl = TTL.MEDIUM) {
    try {
      const serialized = JSON.stringify(value);
      if (ttl) {
        await this.redis.setex(key, ttl, serialized);
      } else {
        await this.redis.set(key, serialized);
      }
      return true;
    } catch (error) {
      console.error('Cache set error:', error);
      return false;
    }
  }
  
  // Delete from cache
  async del(key) {
    try {
      await this.redis.del(key);
      return true;
    } catch (error) {
      console.error('Cache delete error:', error);
      return false;
    }
  }
  
  // Delete multiple keys by pattern
  async delPattern(pattern) {
    try {
      const keys = await this.redis.keys(pattern);
      if (keys.length > 0) {
        await this.redis.del(...keys);
      }
      return keys.length;
    } catch (error) {
      console.error('Cache delete pattern error:', error);
      return 0;
    }
  }
  
  // Check if key exists
  async exists(key) {
    try {
      const exists = await this.redis.exists(key);
      return exists === 1;
    } catch (error) {
      console.error('Cache exists error:', error);
      return false;
    }
  }
  
  // Set expiry on existing key
  async expire(key, ttl) {
    try {
      await this.redis.expire(key, ttl);
      return true;
    } catch (error) {
      console.error('Cache expire error:', error);
      return false;
    }
  }
  
  // Increment counter
  async incr(key, ttl = null) {
    try {
      const value = await this.redis.incr(key);
      if (ttl && value === 1) {
        await this.redis.expire(key, ttl);
      }
      return value;
    } catch (error) {
      console.error('Cache increment error:', error);
      return null;
    }
  }
  
  // Get remaining TTL
  async ttl(key) {
    try {
      const ttl = await this.redis.ttl(key);
      return ttl;
    } catch (error) {
      console.error('Cache TTL error:', error);
      return -1;
    }
  }
  
  // Cache wrapper function
  async cacheable(key, fetcher, ttl = TTL.MEDIUM) {
    // Try to get from cache
    const cached = await this.get(key);
    if (cached !== null) {
      return { data: cached, fromCache: true };
    }
    
    // Fetch fresh data
    const fresh = await fetcher();
    
    // Store in cache
    await this.set(key, fresh, ttl);
    
    return { data: fresh, fromCache: false };
  }
  
  // Invalidate related caches
  async invalidate(entity, id = null) {
    const patterns = {
      'user': id ? `${CACHE_PREFIXES.USER}${id}:*` : `${CACHE_PREFIXES.USER}*`,
      'article': id ? `${CACHE_PREFIXES.ARTICLE}${id}:*` : `${CACHE_PREFIXES.ARTICLE}*`,
      'page': id ? `${CACHE_PREFIXES.PAGE}${id}:*` : `${CACHE_PREFIXES.PAGE}*`,
      'settings': `${CACHE_PREFIXES.SETTINGS}*`,
      'dashboard': `${CACHE_PREFIXES.DASHBOARD}*`,
      'analytics': `${CACHE_PREFIXES.ANALYTICS}*`
    };
    
    const pattern = patterns[entity];
    if (pattern) {
      return await this.delPattern(pattern);
    }
    return 0;
  }
  
  // Cache user data
  async cacheUser(userId, userData, ttl = TTL.LONG) {
    const key = this.generateKey(CACHE_PREFIXES.USER, userId);
    return await this.set(key, userData, ttl);
  }
  
  async getCachedUser(userId) {
    const key = this.generateKey(CACHE_PREFIXES.USER, userId);
    return await this.get(key);
  }
  
  // Cache session
  async cacheSession(sessionId, sessionData, ttl = TTL.DAY) {
    const key = this.generateKey(CACHE_PREFIXES.SESSION, sessionId);
    return await this.set(key, sessionData, ttl);
  }
  
  async getCachedSession(sessionId) {
    const key = this.generateKey(CACHE_PREFIXES.SESSION, sessionId);
    return await this.get(key);
  }
  
  // Cache dashboard stats
  async cacheDashboardStats(stats, ttl = TTL.SHORT) {
    const key = this.generateKey(CACHE_PREFIXES.DASHBOARD, 'stats');
    return await this.set(key, stats, ttl);
  }
  
  async getCachedDashboardStats() {
    const key = this.generateKey(CACHE_PREFIXES.DASHBOARD, 'stats');
    return await this.get(key);
  }
  
  // Cache analytics data
  async cacheAnalytics(type, data, ttl = TTL.MEDIUM) {
    const key = this.generateKey(CACHE_PREFIXES.ANALYTICS, type);
    return await this.set(key, data, ttl);
  }
  
  async getCachedAnalytics(type) {
    const key = this.generateKey(CACHE_PREFIXES.ANALYTICS, type);
    return await this.get(key);
  }
  
  // Rate limiting
  async checkRateLimit(identifier, limit = 10, window = 60) {
    const key = this.generateKey(CACHE_PREFIXES.RATE_LIMIT, identifier);
    const current = await this.incr(key, window);
    
    return {
      allowed: current <= limit,
      current,
      limit,
      remaining: Math.max(0, limit - current),
      resetIn: await this.ttl(key)
    };
  }
  
  // Clear all cache
  async flush() {
    try {
      await this.redis.flushdb();
      return true;
    } catch (error) {
      console.error('Cache flush error:', error);
      return false;
    }
  }
  
  // Get cache statistics
  async getStats() {
    try {
      const info = await this.redis.info('stats');
      const dbSize = await this.redis.dbsize();
      
      return {
        size: dbSize,
        info: info
      };
    } catch (error) {
      console.error('Cache stats error:', error);
      return null;
    }
  }
}

// Create singleton instance
const cache = new CacheManager();

// Export cache instance and utilities
export { cache, CACHE_PREFIXES, TTL };

// Helper function for caching API responses
export async function cacheApiResponse(req, res, fetcher, options = {}) {
  const {
    ttl = TTL.MEDIUM,
    keyGenerator = () => req.url,
    shouldCache = () => true
  } = options;
  
  if (!shouldCache(req)) {
    return await fetcher();
  }
  
  const cacheKey = keyGenerator(req);
  const { data, fromCache } = await cache.cacheable(cacheKey, fetcher, ttl);
  
  // Add cache headers
  if (fromCache) {
    res.headers.set('X-Cache', 'HIT');
  } else {
    res.headers.set('X-Cache', 'MISS');
  }
  
  return data;
}
