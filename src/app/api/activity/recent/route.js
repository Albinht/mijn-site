import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth, isDatabaseConfigured } from '@/lib/auth-utils';


// GET /api/activity/recent - Get recent activity for dashboard
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
    
    // Try to get activities from database
    
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit')) || 10;
    
    // Get recent activity logs
    const activities = await prisma.activityLog.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            username: true,
            email: true
          }
        }
      }
    });
    
    // Format activities for dashboard display
    const formattedActivities = activities.map(activity => {
      let description = '';
      const username = activity.user?.username || 'System';
      
      switch (activity.action) {
        case 'LOGIN':
          description = `${username} logged in`;
          break;
        case 'LOGOUT':
          description = `${username} logged out`;
          break;
        case 'CREATE_PAGE':
          description = `${username} created page: ${activity.metadata?.title || activity.entityId}`;
          break;
        case 'UPDATE_PAGE':
          description = `${username} updated page: ${activity.entityId}`;
          break;
        case 'DELETE_PAGE':
          description = `${username} deleted page: ${activity.metadata?.title || activity.entityId}`;
          break;
        case 'CREATE_ARTICLE':
          description = `${username} created article: ${activity.metadata?.title || activity.entityId}`;
          break;
        case 'GENERATE_ARTICLE':
          description = `${username} generated article on: ${activity.metadata?.topic}`;
          break;
        case 'UPDATE_ARTICLE':
          description = `${username} updated article: ${activity.entityId}`;
          break;
        case 'DELETE_ARTICLE':
          description = `${username} deleted article: ${activity.metadata?.title || activity.entityId}`;
          break;
        case 'UPDATE_SETTINGS':
          description = `${username} updated ${activity.metadata?.count || 0} settings`;
          break;
        default:
          description = `${username} performed ${activity.action}`;
      }
      
      return {
        id: activity.id,
        description,
        action: activity.action,
        user: activity.user?.username || 'System',
        timestamp: activity.createdAt,
        metadata: activity.metadata
      };
    });
    
    return NextResponse.json(formatResponse(formattedActivities));
  } catch (error) {
    console.error('Error fetching recent activity:', error);
    return NextResponse.json(
      formatError('Failed to fetch recent activity'),
      { status: 500 }
    );
  }
}