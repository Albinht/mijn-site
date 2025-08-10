import { cache } from '@/lib/cache/redis';
import { monitoring } from '@/lib/monitoring/sentry';

// Rate limit configurations
const RATE_LIMITS = {
  // API endpoints
  api: {
    default: { limit: 100, window: 60 }, // 100 requests per minute
    auth: { limit: 5, window: 60 }, // 5 auth attempts per minute
    login: { limit: 3, window: 300 }, // 3 login attempts per 5 minutes
    register: { limit: 2, window: 3600 }, // 2 registrations per hour
    passwordReset: { limit: 3, window: 3600 }, // 3 reset requests per hour
    write: { limit: 30, window: 60 }, // 30 write operations per minute
    read: { limit: 200, window: 60 }, // 200 read operations per minute
    upload: { limit: 10, window: 300 }, // 10 uploads per 5 minutes
    export: { limit: 5, window: 300 }, // 5 exports per 5 minutes
  },
  // Global limits
  global: {
    ip: { limit: 1000, window: 3600 }, // 1000 requests per hour per IP
    user: { limit: 5000, window: 3600 }, // 5000 requests per hour per user
  },
  // Special limits
  burst: {
    enabled: true,
    multiplier: 2, // Allow 2x the limit for burst
    recovery: 10, // Recover 10% of limit per window
  },
};

class RateLimiter {
  constructor() {
    this.limits = RATE_LIMITS;
  }
  
  // Generate rate limit key
  generateKey(identifier, type = 'default') {
    return `ratelimit:${type}:${identifier}`;
  }
  
  // Check rate limit
  async checkLimit(identifier, type = 'default', customLimit = null) {
    const config = customLimit || this.limits.api[type] || this.limits.api.default;
    const { limit, window } = config;
    
    const key = this.generateKey(identifier, type);
    const result = await cache.checkRateLimit(key, limit, window);
    
    // Track rate limit hit
    if (!result.allowed) {
      monitoring.trackEvent('rate_limit_exceeded', {
        identifier,
        type,
        limit,
        current: result.current,
      });
    }
    
    return result;
  }
  
  // Check multiple limits
  async checkMultipleLimits(checks) {
    const results = await Promise.all(
      checks.map(({ identifier, type, customLimit }) =>
        this.checkLimit(identifier, type, customLimit)
      )
    );
    
    // Return the most restrictive result
    return results.reduce((mostRestrictive, current) => {
      if (!current.allowed) return current;
      if (!mostRestrictive.allowed) return mostRestrictive;
      return current.remaining < mostRestrictive.remaining ? current : mostRestrictive;
    });
  }
  
  // Apply burst protection
  async checkWithBurst(identifier, type = 'default') {
    if (!this.limits.burst.enabled) {
      return this.checkLimit(identifier, type);
    }
    
    const config = this.limits.api[type] || this.limits.api.default;
    const burstLimit = config.limit * this.limits.burst.multiplier;
    const burstWindow = config.window;
    
    // Check burst limit
    const burstKey = this.generateKey(identifier, `burst:${type}`);
    const burstResult = await cache.checkRateLimit(burstKey, burstLimit, burstWindow);
    
    if (!burstResult.allowed) {
      // Check recovery
      const recoveryKey = this.generateKey(identifier, `recovery:${type}`);
      const recoveryLimit = Math.floor(config.limit * this.limits.burst.recovery / 100);
      const recoveryResult = await cache.checkRateLimit(recoveryKey, recoveryLimit, config.window);
      
      return {
        ...burstResult,
        allowed: recoveryResult.allowed,
        recovery: true,
      };
    }
    
    return burstResult;
  }
  
  // Reset rate limit for identifier
  async reset(identifier, type = 'default') {
    const key = this.generateKey(identifier, type);
    await cache.del(key);
    
    // Also reset burst and recovery if applicable
    if (this.limits.burst.enabled) {
      await cache.del(this.generateKey(identifier, `burst:${type}`));
      await cache.del(this.generateKey(identifier, `recovery:${type}`));
    }
  }
  
  // Get remaining limit
  async getRemaining(identifier, type = 'default') {
    const config = this.limits.api[type] || this.limits.api.default;
    const key = this.generateKey(identifier, type);
    
    const current = await cache.get(key) || 0;
    const remaining = Math.max(0, config.limit - current);
    const resetIn = await cache.ttl(key);
    
    return {
      limit: config.limit,
      remaining,
      resetIn: resetIn > 0 ? resetIn : config.window,
      current,
    };
  }
  
  // IP-based rate limiting
  async checkIP(ip, type = 'default') {
    // Check specific endpoint limit
    const endpointLimit = await this.checkLimit(`ip:${ip}`, type);
    
    // Check global IP limit
    const globalLimit = await this.checkLimit(
      `ip:${ip}`,
      'global',
      this.limits.global.ip
    );
    
    return {
      allowed: endpointLimit.allowed && globalLimit.allowed,
      endpoint: endpointLimit,
      global: globalLimit,
    };
  }
  
  // User-based rate limiting
  async checkUser(userId, type = 'default') {
    // Check specific endpoint limit
    const endpointLimit = await this.checkLimit(`user:${userId}`, type);
    
    // Check global user limit
    const globalLimit = await this.checkLimit(
      `user:${userId}`,
      'global',
      this.limits.global.user
    );
    
    return {
      allowed: endpointLimit.allowed && globalLimit.allowed,
      endpoint: endpointLimit,
      global: globalLimit,
    };
  }
  
  // Combined IP and User rate limiting
  async checkCombined(ip, userId, type = 'default') {
    const checks = [
      { identifier: `ip:${ip}`, type },
      { identifier: `ip:${ip}`, type: 'global', customLimit: this.limits.global.ip },
    ];
    
    if (userId) {
      checks.push(
        { identifier: `user:${userId}`, type },
        { identifier: `user:${userId}`, type: 'global', customLimit: this.limits.global.user }
      );
    }
    
    return this.checkMultipleLimits(checks);
  }
}

// Create singleton instance
const rateLimiter = new RateLimiter();

export { rateLimiter, RATE_LIMITS };

// Middleware for Express/Next.js API routes
export function rateLimitMiddleware(options = {}) {
  const {
    type = 'default',
    keyGenerator = (req) => req.ip || 'unknown',
    skipSuccessfulRequests = false,
    skipFailedRequests = false,
    handler = null,
    customLimit = null,
  } = options;
  
  return async (req, res, next) => {
    try {
      const identifier = typeof keyGenerator === 'function' ? keyGenerator(req) : keyGenerator;
      const result = await rateLimiter.checkLimit(identifier, type, customLimit);
      
      // Add rate limit headers
      res.setHeader('X-RateLimit-Limit', result.limit);
      res.setHeader('X-RateLimit-Remaining', result.remaining);
      res.setHeader('X-RateLimit-Reset', new Date(Date.now() + result.resetIn * 1000).toISOString());
      
      if (!result.allowed) {
        res.setHeader('Retry-After', result.resetIn);
        
        // Custom handler for rate limit exceeded
        if (handler) {
          return handler(req, res, result);
        }
        
        return res.status(429).json({
          error: 'Too many requests',
          message: `Rate limit exceeded. Please try again in ${result.resetIn} seconds.`,
          retryAfter: result.resetIn,
        });
      }
      
      // Track request for conditional skipping
      const originalEnd = res.end;
      res.end = function(...args) {
        const shouldSkip = 
          (skipSuccessfulRequests && res.statusCode < 400) ||
          (skipFailedRequests && res.statusCode >= 400);
        
        if (shouldSkip) {
          // Refund the rate limit
          rateLimiter.reset(identifier, type);
        }
        
        originalEnd.apply(res, args);
      };
      
      next();
    } catch (error) {
      monitoring.captureException(error, {
        tags: { middleware: 'rateLimit' },
      });
      
      // On error, allow the request to proceed
      next();
    }
  };
}

// Helper for Next.js API routes
export async function withRateLimit(request, options = {}) {
  const {
    type = 'default',
    identifier = null,
    useIP = true,
    useUser = false,
    customLimit = null,
  } = options;
  
  let key = identifier;
  
  if (!key) {
    // Extract IP from request
    if (useIP) {
      const forwarded = request.headers.get('x-forwarded-for');
      const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
      key = `ip:${ip}`;
    }
    
    // Extract user from auth token
    if (useUser) {
      try {
        const authToken = request.headers.get('authorization')?.replace('Bearer ', '');
        if (authToken) {
          const { tokenManager } = await import('@/lib/security/tokens');
          const payload = await tokenManager.verifyAccessToken(authToken);
          if (payload) {
            key = `user:${payload.userId}`;
          }
        }
      } catch (e) {
        // Ignore auth errors
      }
    }
  }
  
  if (!key) {
    key = 'anonymous';
  }
  
  const result = await rateLimiter.checkLimit(key, type, customLimit);
  
  return {
    allowed: result.allowed,
    limit: result.limit,
    remaining: result.remaining,
    resetIn: result.resetIn,
    headers: {
      'X-RateLimit-Limit': result.limit.toString(),
      'X-RateLimit-Remaining': result.remaining.toString(),
      'X-RateLimit-Reset': new Date(Date.now() + result.resetIn * 1000).toISOString(),
      ...(result.allowed ? {} : { 'Retry-After': result.resetIn.toString() }),
    },
  };
}