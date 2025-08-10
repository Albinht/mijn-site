import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { analyticsQuerySchema } from '@/lib/validations';
import { formatResponse, formatError } from '@/lib/utils';
import { verifySession } from '@/lib/auth-db';


// GET /api/analytics/overview - Get analytics overview
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
    
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams);
    
    // Validate query parameters
    const validatedQuery = analyticsQuerySchema.parse(params);
    const { range, startDate, endDate } = validatedQuery;
    
    // Calculate date range
    let dateFilter = {};
    const now = new Date();
    
    if (startDate && endDate) {
      dateFilter = {
        timestamp: {
          gte: new Date(startDate),
          lte: new Date(endDate)
        }
      };
    } else {
      switch (range) {
        case 'today':
          dateFilter = {
            timestamp: {
              gte: new Date(now.setHours(0, 0, 0, 0))
            }
          };
          break;
        case 'week':
          const weekAgo = new Date(now);
          weekAgo.setDate(weekAgo.getDate() - 7);
          dateFilter = {
            timestamp: { gte: weekAgo }
          };
          break;
        case 'month':
          const monthAgo = new Date(now);
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          dateFilter = {
            timestamp: { gte: monthAgo }
          };
          break;
        case 'year':
          const yearAgo = new Date(now);
          yearAgo.setFullYear(yearAgo.getFullYear() - 1);
          dateFilter = {
            timestamp: { gte: yearAgo }
          };
          break;
        default:
          // 'all' - no date filter
          break;
      }
    }
    
    // Get overview statistics
    const [
      totalViews,
      uniqueVisitors,
      totalSessions,
      avgDuration,
      deviceStats,
      recentViews
    ] = await Promise.all([
      // Total page views
      prisma.analytics.count({ where: dateFilter }),
      
      // Unique visitors
      prisma.analytics.groupBy({
        by: ['visitorId'],
        where: dateFilter,
        _count: true
      }).then(results => results.length),
      
      // Total sessions
      prisma.analytics.groupBy({
        by: ['sessionId'],
        where: dateFilter,
        _count: true
      }).then(results => results.length),
      
      // Average duration
      prisma.analytics.aggregate({
        where: dateFilter,
        _avg: { duration: true }
      }),
      
      // Device type breakdown
      prisma.analytics.groupBy({
        by: ['deviceType'],
        where: dateFilter,
        _count: { deviceType: true }
      }),
      
      // Recent page views (last 24 hours)
      prisma.analytics.findMany({
        where: {
          timestamp: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
          }
        },
        orderBy: { timestamp: 'desc' },
        take: 10,
        select: {
          pagePath: true,
          timestamp: true,
          deviceType: true,
          country: true,
          city: true
        }
      })
    ]);
    
    // Calculate bounce rate (sessions with only 1 page view)
    const sessionPageViews = await prisma.analytics.groupBy({
      by: ['sessionId'],
      where: dateFilter,
      _count: true
    });
    
    const singlePageSessions = sessionPageViews.filter(s => s._count === 1).length;
    const bounceRate = totalSessions > 0 
      ? ((singlePageSessions / totalSessions) * 100).toFixed(2)
      : 0;
    
    // Format device stats
    const devices = {
      desktop: 0,
      mobile: 0,
      tablet: 0,
      unknown: 0
    };
    
    deviceStats.forEach(stat => {
      const deviceType = stat.deviceType || 'unknown';
      devices[deviceType] = stat._count.deviceType;
    });
    
    // Get top pages
    const topPages = await prisma.analytics.groupBy({
      by: ['pagePath'],
      where: dateFilter,
      _count: { pagePath: true },
      orderBy: {
        _count: {
          pagePath: 'desc'
        }
      },
      take: 5
    });
    
    const overview = {
      metrics: {
        totalViews,
        uniqueVisitors,
        totalSessions,
        avgDuration: avgDuration._avg.duration || 0,
        bounceRate: parseFloat(bounceRate)
      },
      devices,
      topPages: topPages.map(page => ({
        path: page.pagePath,
        views: page._count.pagePath
      })),
      recentViews,
      dateRange: {
        range,
        startDate: dateFilter.timestamp?.gte || null,
        endDate: dateFilter.timestamp?.lte || null
      }
    };
    
    return NextResponse.json(formatResponse(overview));
  } catch (error) {
    console.error('Error fetching analytics overview:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid query parameters', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to fetch analytics'),
      { status: 500 }
    );
  }
}