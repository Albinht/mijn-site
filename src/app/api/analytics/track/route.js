import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { trackAnalyticsSchema } from '@/lib/validations';
import { formatResponse, formatError, getClientIp, getUserAgent, detectDeviceType } from '@/lib/utils';


// POST /api/analytics/track - Track page view
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = trackAnalyticsSchema.parse(body);
    
    // Get additional data from request
    const ipAddress = getClientIp(request);
    const userAgent = validatedData.userAgent || getUserAgent(request);
    const deviceType = validatedData.deviceType || detectDeviceType(userAgent);
    
    // Generate visitor ID if not provided
    const visitorId = validatedData.visitorId || `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const sessionId = validatedData.sessionId || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Create analytics entry
    const analytics = await prisma.analytics.create({
      data: {
        pagePath: validatedData.pagePath,
        visitorId,
        sessionId,
        referrer: validatedData.referrer || request.headers.get('referer') || '',
        userAgent,
        deviceType,
        country: validatedData.country || '',
        city: validatedData.city || '',
        duration: validatedData.duration || 0,
        timestamp: new Date()
      }
    });
    
    // Update page view count if it's a tracked page
    const page = await prisma.page.findFirst({
      where: {
        OR: [
          { slug: validatedData.pagePath },
          { slug: validatedData.pagePath.replace(/^\//, '') }
        ]
      }
    });
    
    if (page) {
      await prisma.page.update({
        where: { id: page.id },
        data: { views: { increment: 1 } }
      });
    }
    
    // Check for articles as well
    const article = await prisma.article.findFirst({
      where: {
        OR: [
          { slug: validatedData.pagePath },
          { slug: validatedData.pagePath.replace(/^\//, '') }
        ]
      }
    });
    
    if (article) {
      await prisma.article.update({
        where: { id: article.id },
        data: { views: { increment: 1 } }
      });
    }
    
    return NextResponse.json(formatResponse({
      tracked: true,
      visitorId,
      sessionId
    }));
  } catch (error) {
    console.error('Error tracking analytics:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid tracking data', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to track analytics'),
      { status: 500 }
    );
  }
}