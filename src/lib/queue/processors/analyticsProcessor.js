import prisma from '@/lib/prisma';
import { analyticsQueue } from '../config';

// Process daily analytics aggregation
analyticsQueue.process('daily-aggregation', async (job) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  // Aggregate today's analytics
  const todayAnalytics = await prisma.analytics.aggregate({
    where: {
      timestamp: {
        gte: today,
        lt: tomorrow
      }
    },
    _count: true,
    _avg: {
      duration: true
    }
  });
  
  // Count unique visitors
  const uniqueVisitors = await prisma.analytics.groupBy({
    by: ['visitorId'],
    where: {
      timestamp: {
        gte: today,
        lt: tomorrow
      }
    },
    _count: true
  });
  
  // Top pages today
  const topPages = await prisma.analytics.groupBy({
    by: ['pagePath'],
    where: {
      timestamp: {
        gte: today,
        lt: tomorrow
      }
    },
    _count: true,
    orderBy: {
      _count: {
        pagePath: 'desc'
      }
    },
    take: 10
  });
  
  const report = {
    date: today.toISOString(),
    totalViews: todayAnalytics._count,
    uniqueVisitors: uniqueVisitors.length,
    avgDuration: todayAnalytics._avg.duration || 0,
    topPages: topPages.map(p => ({
      path: p.pagePath,
      views: p._count
    }))
  };
  
  // Store the report
  await prisma.setting.upsert({
    where: { key: `analytics_daily_${today.toISOString().split('T')[0]}` },
    update: { value: report },
    create: {
      key: `analytics_daily_${today.toISOString().split('T')[0]}`,
      value: report,
      category: 'analytics_reports'
    }
  });
  
  console.log('Daily analytics report generated:', report);
  return report;
});

// Process weekly analytics
analyticsQueue.process('weekly-report', async (job) => {
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  
  // Get week's statistics
  const [totalViews, uniqueVisitors, topContent] = await Promise.all([
    // Total views
    prisma.analytics.count({
      where: {
        timestamp: { gte: weekAgo }
      }
    }),
    
    // Unique visitors
    prisma.analytics.groupBy({
      by: ['visitorId'],
      where: {
        timestamp: { gte: weekAgo }
      },
      _count: true
    }),
    
    // Top content
    prisma.analytics.groupBy({
      by: ['pagePath'],
      where: {
        timestamp: { gte: weekAgo }
      },
      _count: true,
      orderBy: {
        _count: {
          pagePath: 'desc'
        }
      },
      take: 20
    })
  ]);
  
  const report = {
    week: `${weekAgo.toISOString().split('T')[0]} to ${now.toISOString().split('T')[0]}`,
    totalViews,
    uniqueVisitors: uniqueVisitors.length,
    topContent: topContent.map(c => ({
      path: c.pagePath,
      views: c._count
    }))
  };
  
  // Store weekly report
  await prisma.setting.upsert({
    where: { key: `analytics_weekly_${now.toISOString().split('T')[0]}` },
    update: { value: report },
    create: {
      key: `analytics_weekly_${now.toISOString().split('T')[0]}`,
      value: report,
      category: 'analytics_reports'
    }
  });
  
  return report;
});

// Process analytics cleanup (remove old data)
analyticsQueue.process('cleanup-old-analytics', async (job) => {
  const { daysToKeep = 90 } = job.data;
  
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
  
  const deleted = await prisma.analytics.deleteMany({
    where: {
      timestamp: { lt: cutoffDate }
    }
  });
  
  console.log(`Deleted ${deleted.count} old analytics records`);
  return { deleted: deleted.count };
});

export default analyticsQueue;