import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { analyticsQuerySchema } from '@/lib/validations';
import { formatResponse, formatError } from '@/lib/utils';
import { verifySession } from '@/lib/auth-db';


// GET /api/analytics/sources - Get traffic sources analytics
export async function GET(request) {
  try {
    // Verify authentication
    const session = await verifySession(request);
    if (!session) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams);
    
    // Validate query parameters
    const validatedQuery = analyticsQuerySchema.parse(params);
    const { range } = validatedQuery;
    
    // Calculate date range
    let dateFilter = {};
    const now = new Date();
    
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
    
    // Get referrer statistics
    const referrerStats = await prisma.analytics.groupBy({
      by: ['referrer'],
      where: dateFilter,
      _count: { referrer: true },
      orderBy: {
        _count: {
          referrer: 'desc'
        }
      },
      take: 10
    });
    
    // Get location statistics
    const locationStats = await prisma.analytics.groupBy({
      by: ['country', 'city'],
      where: {
        ...dateFilter,
        country: { not: '' }
      },
      _count: true,
      orderBy: {
        _count: {
          country: 'desc'
        }
      },
      take: 10
    });
    
    // Get device and browser statistics
    const deviceStats = await prisma.analytics.groupBy({
      by: ['deviceType'],
      where: dateFilter,
      _count: { deviceType: true }
    });
    
    // Parse referrers to get source categories
    const sources = {
      direct: 0,
      search: 0,
      social: 0,
      referral: 0
    };
    
    const referrerDetails = [];
    
    referrerStats.forEach(stat => {
      const referrer = stat.referrer || '';
      const count = stat._count.referrer;
      
      if (!referrer || referrer === '') {
        sources.direct += count;
      } else if (referrer.includes('google') || referrer.includes('bing') || referrer.includes('yahoo') || referrer.includes('duckduckgo')) {
        sources.search += count;
      } else if (referrer.includes('facebook') || referrer.includes('twitter') || referrer.includes('linkedin') || referrer.includes('instagram')) {
        sources.social += count;
      } else {
        sources.referral += count;
      }
      
      // Extract domain from referrer
      let domain = 'Direct';
      if (referrer) {
        try {
          const url = new URL(referrer);
          domain = url.hostname;
        } catch {
          domain = referrer;
        }
      }
      
      referrerDetails.push({
        source: domain,
        visits: count,
        type: !referrer ? 'direct' : 
              (referrer.includes('google') || referrer.includes('bing')) ? 'search' :
              (referrer.includes('facebook') || referrer.includes('twitter')) ? 'social' : 
              'referral'
      });
    });
    
    // Format location data
    const locations = locationStats.map(stat => ({
      country: stat.country || 'Unknown',
      city: stat.city || 'Unknown',
      visits: stat._count
    }));
    
    // Format device data
    const devices = {};
    deviceStats.forEach(stat => {
      devices[stat.deviceType || 'unknown'] = stat._count.deviceType;
    });
    
    const sourcesData = {
      summary: sources,
      referrers: referrerDetails,
      locations,
      devices,
      dateRange: {
        range,
        from: dateFilter.timestamp?.gte || null
      }
    };
    
    return NextResponse.json(formatResponse(sourcesData));
  } catch (error) {
    console.error('Error fetching traffic sources:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid query parameters', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to fetch traffic sources'),
      { status: 500 }
    );
  }
}