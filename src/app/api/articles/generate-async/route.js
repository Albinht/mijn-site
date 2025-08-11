import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { createArticleSchema } from '@/lib/validations';
import { generateSlug, formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';

// POST /api/articles/generate-async - Generate article with async webhook
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
      content: 'Article is being generated. This may take a few minutes. Please refresh the page to see the updated content.',
      status: 'PROCESSING',
      slug: generateSlug(validatedData.title || validatedData.topic),
      views: 0,
      source: body.source || 'shipsquared'
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
    
    // Get webhook URL
    const webhookUrl = body.webhook || process.env.WEBHOOK_URL || 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650';
    
    console.log('=== ASYNC WEBHOOK ===');
    console.log('Article created:', article.id);
    console.log('Webhook URL:', webhookUrl);
    
    // Send webhook asynchronously (don't wait for response)
    const webhookPayload = {
      articleId: article.id,
      topic: article.topic,
      timestamp: new Date().toISOString(),
      source: body.source || 'shipsquared',
      userId: user.userId,
      async: true
    };
    
    // Fire and forget - send webhook in background
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'ArticleGenerator/1.0'
      },
      body: JSON.stringify(webhookPayload)
    })
    .then(async (response) => {
      const responseText = await response.text();
      console.log('Async webhook response:', response.status, responseText?.substring(0, 200));
      
      // Log the webhook attempt
      await prisma.webhookLog.create({
        data: {
          url: webhookUrl,
          payload: webhookPayload,
          response: { text: responseText?.substring(0, 1000) || 'No response' },
          statusCode: response.status,
          success: response.ok
        }
      });
      
      // If we got a good response, update the article
      if (response.ok && responseText) {
        let content = responseText;
        
        try {
          const json = JSON.parse(responseText);
          content = json.Blogpost || json.blogpost || json.content || json.article || json.text || json.output || responseText;
        } catch (e) {
          // Use as plain text
        }
        
        if (content && content.length > 10) {
          await prisma.article.update({
            where: { id: article.id },
            data: { 
              content,
              status: 'PUBLISHED'
            }
          });
          console.log('Article updated with async content');
        }
      } else {
        // Mark as DRAFT if webhook failed
        await prisma.article.update({
          where: { id: article.id },
          data: { 
            status: 'DRAFT',
            content: `Webhook failed with status ${response.status}. Check webhook logs for details.`
          }
        });
      }
    })
    .catch(async (error) => {
      console.error('Async webhook error:', error);
      
      // Log the error
      await prisma.webhookLog.create({
        data: {
          url: webhookUrl,
          payload: webhookPayload,
          response: { error: error.message },
          statusCode: 0,
          success: false
        }
      }).catch(console.error);
      
      // Update article to DRAFT
      await prisma.article.update({
        where: { id: article.id },
        data: { 
          status: 'DRAFT',
          content: `Webhook error: ${error.message}`
        }
      }).catch(console.error);
    });
    
    // Return immediately without waiting for webhook
    return NextResponse.json(formatResponse({
      article: {
        id: article.id,
        title: article.title,
        slug: article.slug,
        status: 'PROCESSING'
      },
      message: 'Article generation started. The article will be updated when the webhook responds.',
      async: true
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