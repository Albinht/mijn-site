import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { generateSlug, formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';

// POST /api/articles/create-manual - Create article manually without webhook
export async function POST(request) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    const body = await request.json();
    
    // Validate required fields
    if (!body.topic || !body.content) {
      return NextResponse.json(
        formatError('Topic and content are required', 400),
        { status: 400 }
      );
    }
    
    // Create article in database
    const articleData = {
      topic: body.topic,
      title: body.title || `Article: ${body.topic}`,
      content: body.content,
      status: body.status || 'PUBLISHED',
      slug: generateSlug(body.title || body.topic),
      views: 0,
      source: body.source || 'manual'
    };
    
    // Only add authorId if we have a valid session with userId
    if (user.userId && user.userId !== 'hardcoded-user-id') {
      const userExists = await prisma.user.findUnique({
        where: { id: user.userId }
      });
      if (userExists) {
        articleData.authorId = user.userId;
      }
    }
    
    const article = await prisma.article.create({
      data: articleData
    });
    
    // Log activity
    if (user.userId && user.userId !== 'hardcoded-user-id') {
      await prisma.activityLog.create({
        data: {
          userId: user.userId,
          action: 'CREATE_ARTICLE_MANUAL',
          entity: 'article',
          entityId: article.id,
          metadata: { topic: article.topic, source: 'manual' },
          ipAddress: request.headers.get('x-forwarded-for') || 'unknown'
        }
      }).catch(console.error);
    }
    
    return NextResponse.json(formatResponse({
      article,
      message: 'Article created successfully'
    }), { status: 201 });
    
  } catch (error) {
    console.error('Error creating manual article:', error);
    return NextResponse.json(
      formatError('Failed to create article'),
      { status: 500 }
    );
  }
}