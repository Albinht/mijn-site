import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    
    // Performance Monitoring
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    
    // General settings
    environment: process.env.NODE_ENV,
    
    // Edge-specific configuration
    // Note: Some features are not available in Edge runtime
    
    // Ignore certain errors
    ignoreErrors: [
      'Invalid token',
      'Unauthorized',
    ],
    
    // Filter transactions
    beforeTransaction(event) {
      // Don't send middleware check transactions
      if (event.transaction === 'middleware') {
        return null;
      }
      return event;
    },
    
    // Add context
    beforeSend(event, hint) {
      // Add edge runtime context
      event.contexts = {
        ...event.contexts,
        runtime: {
          name: 'edge',
        },
      };
      
      // Filter out sensitive headers
      if (event.request?.headers) {
        delete event.request.headers.authorization;
        delete event.request.headers.cookie;
      }
      
      return event;
    },
  });
}