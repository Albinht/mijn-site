import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';

// GET /api/dashboard/stats - Get dashboard statistics
export async function GET(request) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    // Try to get real data from database, fallback to mock if database fails
    try {
      // Get various stats in parallel
      const [
        totalArticles,
        publishedArticles,
        totalPages,
        publishedPages,
        totalViews,
        todayViews,
        recentActivity,
        userCount,
        totalClients,
        activeClients
      ] = await Promise.all([
        // Total articles
        prisma.article.count().catch(() => 0),
        
        // Published articles
        prisma.article.count({ where: { status: 'PUBLISHED' } }).catch(() => 0),
        
        // Total pages
        prisma.page.count().catch(() => 0),
        
        // Published pages
        prisma.page.count({ where: { status: 'PUBLISHED' } }).catch(() => 0),
        
        // Total views (sum of all page and article views)
        Promise.all([
          prisma.article.aggregate({ _sum: { views: true } }),
          prisma.page.aggregate({ _sum: { views: true } })
        ]).then(([articles, pages]) => 
          (articles._sum.views || 0) + (pages._sum.views || 0)
        ).catch(() => 0),
        
        // Today's views (this is a simplification, you'd need proper analytics)
        Promise.resolve(0),
        
        // Recent activity
        prisma.activityLog.findMany({
          take: 10,
          orderBy: { createdAt: 'desc' },
          include: { user: { select: { username: true } } }
        }).catch(() => []),
        
        // User count
        prisma.user.count().catch(() => 1),
        
        // Total clients
        prisma.client.count().catch(() => 0),
        
        // Active clients
        prisma.client.count({ where: { status: 'ACTIVE' } }).catch(() => 0)
      ]);
      
      // Calculate this week's stats
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      const [articlesThisWeek, pagesThisWeek] = await Promise.all([
        prisma.article.count({
          where: {
            createdAt: { gte: sevenDaysAgo }
          }
        }).catch(() => 0),
        prisma.page.count({
          where: {
            createdAt: { gte: sevenDaysAgo }
          }
        }).catch(() => 0)
      ]);
      
      const stats = {
        content: {
          articles: {
            total: totalArticles,
            published: publishedArticles,
            draft: totalArticles - publishedArticles,
            thisWeek: articlesThisWeek
          },
          pages: {
            total: totalPages,
            published: publishedPages,
            draft: totalPages - publishedPages,
            thisWeek: pagesThisWeek
          }
        },
        analytics: {
          totalViews,
          todayViews,
          averageDaily: Math.round(totalViews / 30)
        },
        clients: {
          total: totalClients,
          active: activeClients
        },
        users: {
          total: userCount,
          active: recentActivity.filter((log, index, self) => 
            index === self.findIndex(l => l.userId === log.userId)
          ).length
        },
        recentActivity: recentActivity.map(activity => ({
          id: activity.id,
          action: activity.action,
          entity: activity.entity,
          entityId: activity.entityId,
          user: activity.user?.username || 'System',
          timestamp: activity.createdAt,
          metadata: activity.metadata
        }))
      };
      
      return NextResponse.json(formatResponse(stats));
      
    } catch (dbError) {
      console.error('Database error in dashboard stats:', dbError);
      
      // Return mock data if database fails
      return NextResponse.json(
        formatResponse({
          content: {
            articles: { total: 0, published: 0, thisWeek: 0 },
            pages: { total: 0, published: 0, thisWeek: 0 }
          },
          analytics: {
            totalViews: 0,
            todayViews: 0,
            uniqueVisitors: 0
          },
          clients: {
            total: 0,
            active: 0
          },
          activity: {
            recentCount: 0,
            todayCount: 0
          },
          users: {
            total: 1,
            active: 1
          }
        })
      );
    }
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json(
      formatError('Failed to load dashboard statistics'),
      { status: 500 }
    );
  }
}