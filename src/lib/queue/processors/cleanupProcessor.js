import prisma from '@/lib/prisma';
import { cleanupQueue } from '../config';

// Process session cleanup
cleanupQueue.process('cleanup-sessions', async (job) => {
  const now = new Date();
  
  // Delete expired sessions
  const deleted = await prisma.session.deleteMany({
    where: {
      expiresAt: { lt: now }
    }
  });
  
  console.log(`Cleaned up ${deleted.count} expired sessions`);
  
  // Log cleanup activity
  await prisma.activityLog.create({
    data: {
      action: 'SESSION_CLEANUP',
      entity: 'system',
      metadata: { deletedCount: deleted.count },
      createdAt: new Date()
    }
  });
  
  return { deletedSessions: deleted.count };
});

// Process login attempts cleanup
cleanupQueue.process('cleanup-login-attempts', async (job) => {
  const { daysToKeep = 7 } = job.data;
  
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
  
  const deleted = await prisma.loginAttempt.deleteMany({
    where: {
      attemptedAt: { lt: cutoffDate }
    }
  });
  
  console.log(`Cleaned up ${deleted.count} old login attempts`);
  return { deletedAttempts: deleted.count };
});

// Process activity logs cleanup
cleanupQueue.process('cleanup-activity-logs', async (job) => {
  const { daysToKeep = 30 } = job.data;
  
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
  
  // Keep important activities longer
  const deleted = await prisma.activityLog.deleteMany({
    where: {
      createdAt: { lt: cutoffDate },
      action: {
        notIn: ['CREATE_PAGE', 'DELETE_PAGE', 'CREATE_ARTICLE', 'DELETE_ARTICLE', 'UPDATE_SETTINGS']
      }
    }
  });
  
  console.log(`Cleaned up ${deleted.count} old activity logs`);
  return { deletedLogs: deleted.count };
});

// Process webhook logs cleanup
cleanupQueue.process('cleanup-webhook-logs', async (job) => {
  const { daysToKeep = 14 } = job.data;
  
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
  
  // Keep failed webhooks longer for debugging
  const deleted = await prisma.webhookLog.deleteMany({
    where: {
      createdAt: { lt: cutoffDate },
      success: true
    }
  });
  
  console.log(`Cleaned up ${deleted.count} old webhook logs`);
  return { deletedWebhooks: deleted.count };
});

// Process orphaned data cleanup
cleanupQueue.process('cleanup-orphaned-data', async (job) => {
  // Clean up articles without authors
  const orphanedArticles = await prisma.article.findMany({
    where: {
      authorId: null
    }
  });
  
  // Clean up analytics for non-existent pages
  const pages = await prisma.page.findMany({
    select: { slug: true }
  });
  
  const articles = await prisma.article.findMany({
    select: { slug: true }
  });
  
  const validPaths = [
    ...pages.map(p => `/${p.slug}`),
    ...articles.map(a => `/articles/${a.slug}`),
    '/admin/dashboard',
    '/admin/login'
  ];
  
  const deletedAnalytics = await prisma.analytics.deleteMany({
    where: {
      pagePath: {
        notIn: validPaths
      }
    }
  });
  
  return {
    orphanedArticles: orphanedArticles.length,
    deletedAnalytics: deletedAnalytics.count
  };
});

export default cleanupQueue;