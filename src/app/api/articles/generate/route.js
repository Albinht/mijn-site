import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { createArticleSchema } from '@/lib/validations';
import { generateSlug, formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';


// POST /api/articles/generate - Generate new article with webhook
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
    if (user.userId && user.userId) {
      articleData.authorId = user.userId;
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
      userId: user.userId
    };
    
    // Get webhook URL from settings or use default
    let webhookUrl = process.env.WEBHOOK_URL || 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650';
    
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
      // Add timeout of 120 seconds for n8n webhook processing
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 120000); // 120 seconds timeout
      
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(webhookPayload),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
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
      
      if (webhookResponse.ok) {
        // Parse the response and update article with generated content
        try {
          const responseData = JSON.parse(webhookResult);
          const generatedContent = responseData.Blogpost || responseData.content || webhookResult;
          
          // Update article with generated content and set status to PUBLISHED
          await prisma.article.update({
            where: { id: article.id },
            data: { 
              content: generatedContent,
              status: 'PUBLISHED'
            }
          });
        } catch (parseError) {
          console.log('Could not parse webhook response, using as plain text');
          // If response is not JSON, use it as plain text
          await prisma.article.update({
            where: { id: article.id },
            data: { 
              content: webhookResult,
              status: 'PUBLISHED'
            }
          });
        }
      } else {
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
    if (user.userId && user.userId) {
      await prisma.activityLog.create({
        data: {
          userId: user.userId,
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