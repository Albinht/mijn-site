import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { updateArticleSchema } from '@/lib/validations';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';


// GET /api/articles/:id - Get article by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    const article = await prisma.article.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });
    
    if (!article) {
      return NextResponse.json(
        formatError('Article not found', 404),
        { status: 404 }
      );
    }
    
    // Increment view counter
    await prisma.article.update({
      where: { id },
      data: { views: { increment: 1 } }
    });
    
    return NextResponse.json(formatResponse(article));
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json(
      formatError('Failed to fetch article'),
      { status: 500 }
    );
  }
}

// PUT /api/articles/:id - Update article
export async function PUT(request, { params }) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    const { id } = params;
    const body = await request.json();
    
    // Validate input
    const validatedData = updateArticleSchema.parse(body);
    
    // Check if article exists
    const existingArticle = await prisma.article.findUnique({
      where: { id }
    });
    
    if (!existingArticle) {
      return NextResponse.json(
        formatError('Article not found', 404),
        { status: 404 }
      );
    }
    
    // Update article
    const updateData = {
      ...validatedData,
      updatedAt: new Date()
    };
    
    // If status changes to PUBLISHED, set publishedAt
    if (validatedData.status === 'PUBLISHED' && existingArticle.status !== 'PUBLISHED') {
      updateData.publishedAt = new Date();
    }
    
    const updatedArticle = await prisma.article.update({
      where: { id },
      data: updateData,
      include: {
        author: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });
    
    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.userId,
        action: 'UPDATE_ARTICLE',
        entityType: 'article',
        entityId: id,
        metadata: { changes: validatedData },
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        timestamp: new Date()
      }
    });
    
    return NextResponse.json(formatResponse(updatedArticle));
  } catch (error) {
    console.error('Error updating article:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid input data', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to update article'),
      { status: 500 }
    );
  }
}

// DELETE /api/articles/:id - Delete article
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
    
    const { id } = params;
    
    // Check if article exists
    const existingArticle = await prisma.article.findUnique({
      where: { id }
    });
    
    if (!existingArticle) {
      return NextResponse.json(
        formatError('Article not found', 404),
        { status: 404 }
      );
    }
    
    // Delete article
    await prisma.article.delete({
      where: { id }
    });
    
    // Log activity
    await prisma.activityLog.create({
      data: {
        userId: user.userId,
        action: 'DELETE_ARTICLE',
        entityType: 'article',
        entityId: id,
        metadata: { title: existingArticle.title, topic: existingArticle.topic },
        ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        timestamp: new Date()
      }
    });
    
    return NextResponse.json(formatResponse({ message: 'Article deleted successfully' }));
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      formatError('Failed to delete article'),
      { status: 500 }
    );
  }
}