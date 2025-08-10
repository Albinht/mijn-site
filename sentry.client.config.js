import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,
    
    // Performance Monitoring
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    
    // Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    
    // General settings
    environment: process.env.NODE_ENV,
    
    // Integrations
    integrations: [
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    
    // Ignore certain errors
    ignoreErrors: [
      // Browser extensions
      'top.GLOBALS',
      // Random network errors
      'NetworkError',
      'Network request failed',
      // Ignore benign errors
      'ResizeObserver loop limit exceeded',
      'Non-Error promise rejection captured',
    ],
    
    // Filter transactions
    beforeTransaction(event) {
      // Don't send transactions for static assets
      if (event.transaction?.includes('_next/static')) {
        return null;
      }
      return event;
    },
    
    // Add user context
    beforeSend(event, hint) {
      // Add user context if available
      if (typeof window !== 'undefined') {
        const user = window.localStorage.getItem('user');
        if (user) {
          try {
            const userData = JSON.parse(user);
            event.user = {
              id: userData.id,
              username: userData.username,
              email: userData.email,
            };
          } catch (e) {
            // Invalid user data
          }
        }
      }
      
      // Filter out sensitive data
      if (event.request?.cookies) {
        delete event.request.cookies;
      }
      
      return event;
    },
  });
}