import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { createArticleSchema } from '@/lib/validations';
import { generateSlug, formatResponse, formatError } from '@/lib/utils';
import { verifySession } from '@/lib/auth-db';


// POST /api/articles/generate - Generate new article with webhook
export async function POST(request) {
  try {
    // Verify authentication (skip in development for testing)
    let session = { userId: 'dev-user' }; // Default for development
    if (process.env.NODE_ENV === 'production') {
      session = await verifySession(request);
      if (!session) {
        return NextResponse.json(
          formatError('Unauthorized', 401),
          { status: 401 }
        );
      }
    }
    
    const body = await request.json();
    
    // Validate input
    const validatedData = createArticleSchema.parse(body);
    
    // Create article in database with PROCESSING status
    const articleData = {
      topic: validatedData.topic,
      title: validatedData.title || `Article: ${validatedData.topic}`,
      content: validatedData.content || '',
      status: 'PROCESSING',
      slug: generateSlug(validatedData.title || validatedData.topic),
      views: 0
    };
    
    // Only add authorId if we have a valid session with userId
    if (session.userId && session.userId !== 'dev-user') {
      articleData.authorId = session.userId;
    }
    
    const article = await prisma.article.create({
      data: articleData
    });
    
    // Prepare webhook payload
    const webhookPayload = {
      articleId: article.id,
      topic: article.topic,
      timestamp: new Date().toISOString(),
      source: 'admin_dashboard',
      userId: session.userId
    };
    
    // Get webhook URL from settings or use default
    let webhookUrl = process.env.WEBHOOK_URL || 'https://n8n-n8n.42giwj.easypanel.host/webhook-test/2f67b999-ee19-471a-9911-054d76177650';
    
    try {
      const webhookSetting = await prisma.setting.findUnique({
        where: { key: 'webhookUrl' }
      });
      if (webhookSetting?.value) {
        webhookUrl = webhookSetting.value;
      }
    } catch (error) {
      console.log('Using default webhook URL');
    }
    
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(webhookPayload)
      });
      
      const webhookResult = await webhookResponse.text();
      
      // Log webhook attempt
      await prisma.webhookLog.create({
        data: {
          url: webhookUrl,
          payload: webhookPayload,
          response: { text: webhookResult },
          statusCode: webhookResponse.status,
          success: webhookResponse.ok
        }
      });
      
      if (!webhookResponse.ok) {
        // Update article status to DRAFT if webhook fails
        await prisma.article.update({
          where: { id: article.id },
          data: { status: 'DRAFT' }
        });
      }
    } catch (webhookError) {
      console.error('Webhook error:', webhookError);
      
      // Log failed webhook
      await prisma.webhookLog.create({
        data: {
          url: webhookUrl,
          payload: webhookPayload,
          response: { error: webhookError.message },
          statusCode: 0,
          success: false
        }
      });
      
      // Update article status to DRAFT
      await prisma.article.update({
        where: { id: article.id },
        data: { status: 'DRAFT' }
      });
    }
    
    // Log activity (only if we have a valid user)
    if (session.userId && session.userId !== 'dev-user') {
      await prisma.activityLog.create({
        data: {
          userId: session.userId,
          action: 'GENERATE_ARTICLE',
          entity: 'article',
          entityId: article.id,
          metadata: { topic: article.topic },
          ipAddress: request.headers.get('x-forwarded-for') || 'unknown'
        }
      });
    }
    
    return NextResponse.json(formatResponse({
      article,
      jobId: article.id,
      message: 'Article generation started'
    }), { status: 201 });
  } catch (error) {
    console.error('Error generating article:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid input data', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to generate article'),
      { status: 500 }
    );
  }
}