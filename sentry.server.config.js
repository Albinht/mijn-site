import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    
    // Performance Monitoring
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    
    // General settings
    environment: process.env.NODE_ENV,
    
    // Integrations
    integrations: [
      // Automatically instrument Node.js libraries and frameworks
      ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
    ],
    
    // Ignore certain errors
    ignoreErrors: [
      // Ignore expected errors
      'Invalid credentials',
      'Token expired',
      'Rate limit exceeded',
    ],
    
    // Filter transactions
    beforeTransaction(event) {
      // Don't send health check transactions
      if (event.transaction === 'GET /api/health') {
        return null;
      }
      // Don't send static file transactions
      if (event.transaction?.includes('_next/static')) {
        return null;
      }
      return event;
    },
    
    // Add context
    beforeSend(event, hint) {
      // Add server context
      event.contexts = {
        ...event.contexts,
        runtime: {
          name: 'node',
          version: process.version,
        },
      };
      
      // Filter out sensitive data
      if (event.request) {
        // Remove auth headers
        if (event.request.headers) {
          delete event.request.headers.authorization;
          delete event.request.headers.cookie;
        }
        // Remove sensitive body data
        if (event.request.data) {
          const sensitiveFields = ['password', 'passwordHash', 'token', 'secret', 'apiKey'];
          sensitiveFields.forEach(field => {
            if (event.request.data[field]) {
              event.request.data[field] = '[REDACTED]';
            }
          });
        }
      }
      
      return event;
    },
    
    // Profiling (requires tracing to be enabled)
    profilesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  });
}