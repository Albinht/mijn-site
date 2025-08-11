import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { updateSettingsSchema } from '@/lib/validations';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';


// GET /api/settings - Get all settings
export async function GET(request) {
  try {
    // Verify authentication (skip in development for testing)
    if (process.env.NODE_ENV === 'production') {
      const user = await verifyAuth(request);
      if (!user) {
        return NextResponse.json(
          formatError('Unauthorized', 401),
          { status: 401 }
        );
      }
    }
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    // Build filter
    const where = category ? { category } : {};
    
    // Get settings
    const settings = await prisma.setting.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      },
      orderBy: [
        { category: 'asc' },
        { key: 'asc' }
      ]
    });
    
    // Group settings by category
    const groupedSettings = {};
    settings.forEach(setting => {
      if (!groupedSettings[setting.category]) {
        groupedSettings[setting.category] = {};
      }
      groupedSettings[setting.category][setting.key] = {
        value: setting.value,
        updatedAt: setting.updatedAt,
        updatedBy: setting.user
      };
    });
    
    return NextResponse.json(formatResponse({
      settings: groupedSettings,
      total: settings.length
    }));
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      formatError('Failed to fetch settings'),
      { status: 500 }
    );
  }
}

// PUT /api/settings - Update settings
export async function PUT(request) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      console.error('Settings update: No user authenticated');
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    const body = await request.json();
    console.log('Settings update request:', { userId: user.userId, settingsCount: body.settings?.length });
    
    // Validate input
    const validatedData = updateSettingsSchema.parse(body);
    const { settings } = validatedData;
    
    // Update settings in a transaction
    const updatedSettings = await prisma.$transaction(async (tx) => {
      const results = [];
      
      for (const setting of settings) {
        // Check if setting exists
        const existing = await tx.setting.findUnique({
          where: { key: setting.key }
        });
        
        if (existing) {
          // Update existing setting
          const updated = await tx.setting.update({
            where: { key: setting.key },
            data: {
              value: setting.value,
              category: setting.category,
              updatedBy: user.userId && user.userId !== 'hardcoded-user-id' ? user.userId : null,
              updatedAt: new Date()
            }
          });
          results.push(updated);
        } else {
          // Create new setting
          const created = await tx.setting.create({
            data: {
              key: setting.key,
              value: setting.value,
              category: setting.category,
              updatedBy: user.userId && user.userId !== 'hardcoded-user-id' ? user.userId : null
            }
          });
          results.push(created);
        }
      }
      
      // Log activity (only if we have a valid user in database)
      if (user.userId && user.userId !== 'hardcoded-user-id') {
        await tx.activityLog.create({
          data: {
            userId: user.userId,
            action: 'UPDATE_SETTINGS',
            entity: 'settings',
            entityId: 'batch',
            metadata: { 
              count: settings.length,
              keys: settings.map(s => s.key)
            },
            ipAddress: request.headers.get('x-forwarded-for') || 'unknown'
          }
        });
      }
      
      return results;
    });
    
    return NextResponse.json(formatResponse({
      message: 'Settings updated successfully',
      updated: updatedSettings.length
    }));
  } catch (error) {
    console.error('Error updating settings:', error);
    if (error.name === 'ZodError') {
      console.error('Validation error:', error.errors);
      return NextResponse.json(
        formatError(`Invalid settings data: ${error.errors.map(e => e.message).join(', ')}`, 400),
        { status: 400 }
      );
    }
    if (error.code === 'P2002') {
      return NextResponse.json(
        formatError('Duplicate setting key', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError(`Failed to update settings: ${error.message}`),
      { status: 500 }
    );
  }
}