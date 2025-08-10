import * as Sentry from '@sentry/nextjs';

// Custom error classes
export class APIError extends Error {
  constructor(message, statusCode, endpoint) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
    this.endpoint = endpoint;
  }
}

export class ValidationError extends Error {
  constructor(message, field, value) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    this.value = value;
  }
}

export class DatabaseError extends Error {
  constructor(message, query, code) {
    super(message);
    this.name = 'DatabaseError';
    this.query = query;
    this.code = code;
  }
}

export class AuthenticationError extends Error {
  constructor(message, userId, reason) {
    super(message);
    this.name = 'AuthenticationError';
    this.userId = userId;
    this.reason = reason;
  }
}

// Monitoring utilities
class MonitoringService {
  // Track custom events
  trackEvent(eventName, data = {}) {
    if (typeof window !== 'undefined') {
      Sentry.addBreadcrumb({
        message: eventName,
        category: 'custom',
        level: 'info',
        data,
      });
    }
  }
  
  // Track user actions
  trackUserAction(action, metadata = {}) {
    Sentry.addBreadcrumb({
      message: `User action: ${action}`,
      category: 'user',
      level: 'info',
      data: metadata,
    });
  }
  
  // Track API calls
  trackAPICall(method, endpoint, status, duration) {
    Sentry.addBreadcrumb({
      message: `${method} ${endpoint}`,
      category: 'api',
      level: status >= 400 ? 'error' : 'info',
      data: {
        status,
        duration,
      },
    });
  }
  
  // Track performance metrics
  trackPerformance(metric, value, unit = 'ms') {
    if (typeof window !== 'undefined' && window.performance) {
      Sentry.addBreadcrumb({
        message: `Performance: ${metric}`,
        category: 'performance',
        level: 'info',
        data: {
          value,
          unit,
        },
      });
    }
  }
  
  // Set user context
  setUser(user) {
    if (user) {
      Sentry.setUser({
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      });
    } else {
      Sentry.setUser(null);
    }
  }
  
  // Add custom context
  setContext(key, context) {
    Sentry.setContext(key, context);
  }
  
  // Add tags
  setTags(tags) {
    Sentry.setTags(tags);
  }
  
  // Capture exception with context
  captureException(error, context = {}) {
    Sentry.withScope((scope) => {
      // Add custom context
      if (context.tags) {
        scope.setTags(context.tags);
      }
      if (context.extra) {
        scope.setExtras(context.extra);
      }
      if (context.level) {
        scope.setLevel(context.level);
      }
      if (context.user) {
        scope.setUser(context.user);
      }
      
      // Add error-specific context
      if (error instanceof APIError) {
        scope.setTag('error.type', 'api');
        scope.setContext('api', {
          statusCode: error.statusCode,
          endpoint: error.endpoint,
        });
      } else if (error instanceof ValidationError) {
        scope.setTag('error.type', 'validation');
        scope.setContext('validation', {
          field: error.field,
          value: error.value,
        });
      } else if (error instanceof DatabaseError) {
        scope.setTag('error.type', 'database');
        scope.setContext('database', {
          query: error.query,
          code: error.code,
        });
      } else if (error instanceof AuthenticationError) {
        scope.setTag('error.type', 'authentication');
        scope.setContext('authentication', {
          userId: error.userId,
          reason: error.reason,
        });
      }
      
      Sentry.captureException(error);
    });
  }
  
  // Capture message
  captureMessage(message, level = 'info', context = {}) {
    Sentry.withScope((scope) => {
      scope.setLevel(level);
      if (context.tags) {
        scope.setTags(context.tags);
      }
      if (context.extra) {
        scope.setExtras(context.extra);
      }
      
      Sentry.captureMessage(message, level);
    });
  }
  
  // Start transaction
  startTransaction(name, op = 'navigation') {
    return Sentry.startTransaction({
      name,
      op,
    });
  }
  
  // Start span
  startSpan(transaction, description, op = 'task') {
    return transaction.startChild({
      description,
      op,
    });
  }
  
  // Profile function execution
  async profile(name, fn, metadata = {}) {
    const transaction = this.startTransaction(name, 'function');
    
    try {
      const startTime = Date.now();
      const result = await fn();
      const duration = Date.now() - startTime;
      
      transaction.setData('duration', duration);
      transaction.setData('success', true);
      Object.entries(metadata).forEach(([key, value]) => {
        transaction.setData(key, value);
      });
      
      transaction.finish();
      return result;
    } catch (error) {
      transaction.setData('success', false);
      transaction.setData('error', error.message);
      transaction.finish();
      throw error;
    }
  }
  
  // Monitor database query
  async monitorQuery(queryName, queryFn) {
    return this.profile(`db.${queryName}`, queryFn, {
      type: 'database',
    });
  }
  
  // Monitor API endpoint
  async monitorEndpoint(endpoint, method, handlerFn) {
    return this.profile(`api.${method}.${endpoint}`, handlerFn, {
      type: 'api',
      endpoint,
      method,
    });
  }
  
  // Check if Sentry is enabled
  isEnabled() {
    return !!process.env.NEXT_PUBLIC_SENTRY_DSN;
  }
  
  // Flush events (useful before app terminates)
  async flush(timeout = 2000) {
    await Sentry.flush(timeout);
  }
  
  // Close Sentry client
  async close(timeout = 2000) {
    await Sentry.close(timeout);
  }
}

// Create singleton instance
const monitoring = new MonitoringService();

export { monitoring };

// Helper function for API routes
export function withMonitoring(handler, options = {}) {
  return async (req, res) => {
    const { name = 'api-handler', skipLogging = false } = options;
    const transaction = monitoring.startTransaction(name, 'http.server');
    
    try {
      const startTime = Date.now();
      
      // Add request data
      transaction.setData('method', req.method);
      transaction.setData('url', req.url);
      
      // Execute handler
      const result = await handler(req, res);
      
      // Track success
      const duration = Date.now() - startTime;
      if (!skipLogging) {
        monitoring.trackAPICall(req.method, req.url, res.statusCode, duration);
      }
      
      transaction.setData('status', res.statusCode);
      transaction.setData('duration', duration);
      transaction.finish();
      
      return result;
    } catch (error) {
      // Track error
      monitoring.captureException(error, {
        tags: {
          handler: name,
        },
        extra: {
          method: req.method,
          url: req.url,
        },
      });
      
      transaction.setData('status', 500);
      transaction.setData('error', error.message);
      transaction.finish();
      
      throw error;
    }
  };
}

// React error boundary component
export function ErrorBoundary({ children, fallback }) {
  if (typeof window === 'undefined') {
    return children;
  }
  
  const ErrorBoundaryComponent = Sentry.ErrorBoundary;
  
  return (
    <ErrorBoundaryComponent
      fallback={fallback || <div>An error occurred</div>}
      showDialog={process.env.NODE_ENV === 'development'}
    >
      {children}
    </ErrorBoundaryComponent>
  );
}