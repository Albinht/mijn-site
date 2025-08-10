import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { analyticsQuerySchema } from '@/lib/validations';
import { formatResponse, formatError } from '@/lib/utils';
import { verifySession } from '@/lib/auth-db';


// GET /api/analytics/pages - Get page-specific analytics
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
    const { page, limit } = validatedQuery;
    
    // Get all pages with their view counts
    const [pages, articles] = await Promise.all([
      prisma.page.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          type: true,
          views: true,
          createdAt: true,
          updatedAt: true
        },
        orderBy: { views: 'desc' },
        take: limit,
        skip: (page - 1) * limit
      }),
      prisma.article.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          views: true,
          status: true,
          publishedAt: true,
          createdAt: true
        },
        where: {
          status: 'PUBLISHED'
        },
        orderBy: { views: 'desc' },
        take: limit,
        skip: (page - 1) * limit
      })
    ]);
    
    // Get detailed analytics for top pages
    const topPagePaths = [
      ...pages.map(p => `/${p.slug}`),
      ...articles.map(a => `/articles/${a.slug}`)
    ];
    
    const pageAnalytics = await prisma.analytics.groupBy({
      by: ['pagePath'],
      where: {
        pagePath: { in: topPagePaths }
      },
      _count: { pagePath: true },
      _avg: { duration: true }
    });
    
    // Map analytics to pages
    const pageStats = {};
    pageAnalytics.forEach(stat => {
      pageStats[stat.pagePath] = {
        views: stat._count.pagePath,
        avgDuration: stat._avg.duration || 0
      };
    });
    
    // Combine data
    const pageData = [
      ...pages.map(p => ({
        id: p.id,
        title: p.title,
        path: `/${p.slug}`,
        type: 'page',
        category: p.type,
        views: p.views,
        avgDuration: pageStats[`/${p.slug}`]?.avgDuration || 0,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt
      })),
      ...articles.map(a => ({
        id: a.id,
        title: a.title,
        path: `/articles/${a.slug}`,
        type: 'article',
        views: a.views,
        avgDuration: pageStats[`/articles/${a.slug}`]?.avgDuration || 0,
        publishedAt: a.publishedAt,
        createdAt: a.createdAt
      }))
    ].sort((a, b) => b.views - a.views);
    
    return NextResponse.json(formatResponse({
      pages: pageData,
      meta: {
        pagination: {
          page,
          limit,
          total: pageData.length
        }
      }
    }));
  } catch (error) {
    console.error('Error fetching page analytics:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid query parameters', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to fetch page analytics'),
      { status: 500 }
    );
  }
}