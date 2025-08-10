import cron from 'node-cron';
import { analyticsQueue, cleanupQueue } from './config';

// Schedule daily analytics aggregation - runs at 2 AM every day
export const dailyAnalyticsJob = cron.schedule('0 2 * * *', async () => {
  console.log('Running daily analytics aggregation...');
  await analyticsQueue.add('daily-aggregation', {
    date: new Date().toISOString()
  });
}, {
  scheduled: false,
  timezone: 'Europe/Amsterdam'
});

// Schedule weekly report - runs every Monday at 3 AM
export const weeklyReportJob = cron.schedule('0 3 * * 1', async () => {
  console.log('Generating weekly analytics report...');
  await analyticsQueue.add('weekly-report', {
    date: new Date().toISOString()
  });
}, {
  scheduled: false,
  timezone: 'Europe/Amsterdam'
});

// Schedule session cleanup - runs every hour
export const sessionCleanupJob = cron.schedule('0 * * * *', async () => {
  console.log('Running session cleanup...');
  await cleanupQueue.add('cleanup-sessions', {});
}, {
  scheduled: false
});

// Schedule login attempts cleanup - runs daily at 3 AM
export const loginAttemptsCleanupJob = cron.schedule('0 3 * * *', async () => {
  console.log('Cleaning up old login attempts...');
  await cleanupQueue.add('cleanup-login-attempts', {
    daysToKeep: 7
  });
}, {
  scheduled: false
});

// Schedule activity logs cleanup - runs weekly on Sunday at 4 AM
export const activityLogsCleanupJob = cron.schedule('0 4 * * 0', async () => {
  console.log('Cleaning up old activity logs...');
  await cleanupQueue.add('cleanup-activity-logs', {
    daysToKeep: 30
  });
}, {
  scheduled: false
});

// Schedule webhook logs cleanup - runs every 3 days at 4 AM
export const webhookLogsCleanupJob = cron.schedule('0 4 */3 * *', async () => {
  console.log('Cleaning up old webhook logs...');
  await cleanupQueue.add('cleanup-webhook-logs', {
    daysToKeep: 14
  });
}, {
  scheduled: false
});

// Schedule old analytics cleanup - runs monthly on the 1st at 4 AM
export const analyticsCleanupJob = cron.schedule('0 4 1 * *', async () => {
  console.log('Cleaning up old analytics data...');
  await analyticsQueue.add('cleanup-old-analytics', {
    daysToKeep: 90
  });
}, {
  scheduled: false
});

// Start all scheduled jobs
export function startScheduledJobs() {
  dailyAnalyticsJob.start();
  weeklyReportJob.start();
  sessionCleanupJob.start();
  loginAttemptsCleanupJob.start();
  activityLogsCleanupJob.start();
  webhookLogsCleanupJob.start();
  analyticsCleanupJob.start();
  
  console.log('All scheduled jobs started');
}

// Stop all scheduled jobs
export function stopScheduledJobs() {
  dailyAnalyticsJob.stop();
  weeklyReportJob.stop();
  sessionCleanupJob.stop();
  loginAttemptsCleanupJob.stop();
  activityLogsCleanupJob.stop();
  webhookLogsCleanupJob.stop();
  analyticsCleanupJob.stop();
  
  console.log('All scheduled jobs stopped');
}

// Export all jobs
export const scheduledJobs = {
  dailyAnalyticsJob,
  weeklyReportJob,
  sessionCleanupJob,
  loginAttemptsCleanupJob,
  activityLogsCleanupJob,
  webhookLogsCleanupJob,
  analyticsCleanupJob
};