import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';


// GET /api/settings/:category - Get settings for specific category
export async function GET(request, { params }) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    const { category } = params;
    
    // Get settings for category
    const settings = await prisma.setting.findMany({
      where: { category },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      },
      orderBy: { key: 'asc' }
    });
    
    // Format as key-value pairs
    const settingsMap = {};
    settings.forEach(setting => {
      settingsMap[setting.key] = {
        value: setting.value,
        updatedAt: setting.updatedAt,
        updatedBy: setting.user
      };
    });
    
    return NextResponse.json(formatResponse({
      category,
      settings: settingsMap,
      total: settings.length
    }));
  } catch (error) {
    console.error('Error fetching category settings:', error);
    return NextResponse.json(
      formatError('Failed to fetch settings'),
      { status: 500 }
    );
  }
}

// DELETE /api/settings/:category - Delete all settings in a category
export async function DELETE(request, { params }) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { id: user.userId }
    });
    
    if (user.role !== 'ADMIN') {
      return NextResponse.json(
        formatError('Forbidden: Admin access required', 403),
        { status: 403 }
      );
    }
    
    const { category } = params;
    
    // Delete all settings in category
    const deleted = await prisma.setting.deleteMany({
      where: { category }
    });
    
    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.userId,
        action: 'DELETE_SETTINGS_CATEGORY',
        entityType: 'settings',
        entityId: category,
        metadata: { 
          category,
          deletedCount: deleted.count
        },
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        timestamp: new Date()
      }
    });
    
    return NextResponse.json(formatResponse({
      message: `Deleted ${deleted.count} settings from category: ${category}`,
      deleted: deleted.count
    }));
  } catch (error) {
    console.error('Error deleting category settings:', error);
    return NextResponse.json(
      formatError('Failed to delete settings'),
      { status: 500 }
    );
  }
}