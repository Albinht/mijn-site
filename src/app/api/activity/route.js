import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError, getPaginationParams } from '@/lib/utils';
import { verifySession } from '@/lib/auth-db';


// GET /api/activity - Get activity logs
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
    const { skip, limit, page } = getPaginationParams(searchParams);
    
    // Optional filters
    const userId = searchParams.get('userId');
    const action = searchParams.get('action');
    const entityType = searchParams.get('entityType');
    
    // Build filter
    const where = {};
    if (userId) where.userId = userId;
    if (action) where.action = action;
    if (entityType) where.entityType = entityType;
    
    // Get total count
    const total = await prisma.activityLog.count({ where });
    
    // Get activity logs
    const activities = await prisma.activityLog.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            role: true
          }
        }
      }
    });
    
    const totalPages = Math.ceil(total / limit);
    
    return NextResponse.json(formatResponse(activities, {
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore: page < totalPages
      }
    }));
  } catch (error) {
    console.error('Error fetching activity logs:', error);
    return NextResponse.json(
      formatError('Failed to fetch activity logs'),
      { status: 500 }
    );
  }
}