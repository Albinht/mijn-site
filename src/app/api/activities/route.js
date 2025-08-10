import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';

// POST /api/activities - Create new activity
export async function POST(request) {
  try {
    const body = await request.json();
    const { clientId, type, title, description, metadata } = body;
    
    if (!clientId || !type || !title) {
      return NextResponse.json(
        formatError('Missing required fields', 400),
        { status: 400 }
      );
    }
    
    const activity = await prisma.clientActivity.create({
      data: {
        clientId,
        type,
        title,
        description,
        metadata: metadata || {}
      }
    });
    
    return NextResponse.json(formatResponse(activity));
  } catch (error) {
    console.error('Error creating activity:', error);
    return NextResponse.json(
      formatError('Failed to create activity'),
      { status: 500 }
    );
  }
}