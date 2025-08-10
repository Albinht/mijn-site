import { NextResponse } from 'next/server';
import { getQueueStats, getQueueHealth } from '@/lib/queue/dashboard';
import { formatResponse, formatError } from '@/lib/utils';
import { verifySession } from '@/lib/auth-db';

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
    
    const [stats, health] = await Promise.all([
      getQueueStats(),
      getQueueHealth()
    ]);
    
    return NextResponse.json(formatResponse({
      stats,
      health
    }));
  } catch (error) {
    console.error('Error fetching queue stats:', error);
    return NextResponse.json(
      formatError('Failed to fetch queue statistics'),
      { status: 500 }
    );
  }
}