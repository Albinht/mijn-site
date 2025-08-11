import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { updateContentSchema } from '@/lib/validations';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';


// GET /api/content/:id - Get single content item
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    
    const page = await prisma.page.findUnique({
      where: { id }
    });
    
    if (!page) {
      return NextResponse.json(
        formatError('Content not found', 404),
        { status: 404 }
      );
    }
    
    // Increment view counter
    await prisma.page.update({
      where: { id },
      data: { views: { increment: 1 } }
    });
    
    return NextResponse.json(formatResponse(page));
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      formatError('Failed to fetch content'),
      { status: 500 }
    );
  }
}

// PUT /api/content/:id - Update content
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    const body = await request.json();
    
    // Validate input
    const validatedData = updateContentSchema.parse(body);
    
    // Check if content exists
    const existingPage = await prisma.page.findUnique({
      where: { id }
    });
    
    if (!existingPage) {
      return NextResponse.json(
        formatError('Content not found', 404),
        { status: 404 }
      );
    }
    
    // Update page
    const updatedPage = await prisma.page.update({
      where: { id },
      data: {
        ...validatedData,
        updatedAt: new Date()
      }
    });
    
    // Log activity (only if we have a valid user)
    if (user.userId) {
      await prisma.activityLog.create({
        data: {
          userId: user.userId,
          action: 'UPDATE_PAGE',
          entity: 'page',
          entityId: id,
          metadata: { changes: validatedData },
          ipAddress: request.headers.get('x-forwarded-for') || 'unknown'
        }
      });
    }
    
    return NextResponse.json(formatResponse(updatedPage));
  } catch (error) {
    console.error('Error updating content:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid input data', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to update content'),
      { status: 500 }
    );
  }
}

// DELETE /api/content/:id - Delete content
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    // Check if content exists
    const existingPage = await prisma.page.findUnique({
      where: { id }
    });
    
    if (!existingPage) {
      return NextResponse.json(
        formatError('Content not found', 404),
        { status: 404 }
      );
    }
    
    // Actually delete the page
    await prisma.page.delete({
      where: { id }
    });
    
    // Log activity (only if we have a valid user)
    if (user.userId) {
      await prisma.activityLog.create({
        data: {
          userId: user.userId,
          action: 'DELETE_PAGE',
          entity: 'page',
          entityId: id,
          metadata: { title: existingPage.title },
          ipAddress: request.headers.get('x-forwarded-for') || 'unknown'
        }
      });
    }
    
    return NextResponse.json(formatResponse({ message: 'Content deleted successfully' }));
  } catch (error) {
    console.error('Error deleting content:', error);
    return NextResponse.json(
      formatError('Failed to delete content'),
      { status: 500 }
    );
  }
}