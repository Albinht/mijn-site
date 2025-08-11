import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';

// GET /api/webhooks/logs - Get webhook logs
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
    
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit')) || 50;
    const offset = parseInt(searchParams.get('offset')) || 0;
    
    // Fetch webhook logs
    const logs = await prisma.webhookLog.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });
    
    // Get total count
    const total = await prisma.webhookLog.count();
    
    return NextResponse.json(formatResponse(logs));
  } catch (error) {
    console.error('Error fetching webhook logs:', error);
    return NextResponse.json(
      formatError('Failed to fetch webhook logs'),
      { status: 500 }
    );
  }
}