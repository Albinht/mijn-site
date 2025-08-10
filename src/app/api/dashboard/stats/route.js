import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifySession } from '@/lib/auth-db';

// GET /api/dashboard/stats - Get dashboard statistics
export async function GET(request) {
  try {
    // Verify authentication (skip in development for testing)
    if (process.env.NODE_ENV === 'production') {
      const session = await verifySession(request);
      if (!session) {
        return NextResponse.json(
          formatError('Unauthorized', 401),
          { status: 401 }
        );
      }
    }
    
    // Get various stats in parallel
    const [
      totalArticles,
      publishedArticles,
      totalPages,
      publishedPages,
      totalViews,
      todayViews,
      recentActivity,
      userCount
    ] = await Promise.all([
      // Total articles
      prisma.article.count(),
      
      // Published articles
      prisma.article.count({ where: { status: 'PUBLISHED' } }),
      
      // Total pages
      prisma.page.count(),
      
      // Published pages
      prisma.page.count({ where: { status: 'PUBLISHED' } }),
      
      // Total views (sum of all page and article views)
      Promise.all([
        prisma.article.aggregate({ _sum: { views: true } }),
        prisma.page.aggregate({ _sum: { views: true } })
      ]).then(([articles, pages]) => 
        (articles._sum.views || 0) + (pages._sum.views || 0)
      ),
      
      // Today's views
      prisma.analytics.count({
        where: {
          timestamp: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        }
      }),
      
      // Recent activity (last 10 actions)
      prisma.activityLog.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              username: true,
              email: true
            }
          }
        }
      }),
      
      // Total users
      prisma.user.count()
    ]);
    
    // Get content growth over last 7 days
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const [articlesThisWeek, pagesThisWeek] = await Promise.all([
      prisma.article.count({
        where: {
          createdAt: { gte: sevenDaysAgo }
        }
      }),
      prisma.page.count({
        where: {
          createdAt: { gte: sevenDaysAgo }
        }
      })
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
        averageDaily: Math.round(totalViews / 30) // Rough average
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
        entityType: activity.entityType,
        entityId: activity.entityId,
        user: activity.user?.username || 'System',
        timestamp: activity.createdAt,
        metadata: activity.metadata
      }))
    };
    
    return NextResponse.json(formatResponse(stats));
  } catch (error) {
    console.error('Error fetching dashboard stats:', error.message);
    console.error('Full error:', error);
    return NextResponse.json(
      formatError('Failed to fetch dashboard statistics: ' + error.message),
      { status: 500 }
    );
  }
}