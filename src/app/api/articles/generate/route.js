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
      views: 0,
      source: body.source || 'shipsquared' // Store the source of the article
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
      source: body.source || 'shipsquared',
      userId: user.userId
    };
    
    // Get webhook URL from request or settings or use default
    let webhookUrl = body.webhook || process.env.WEBHOOK_URL || 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650';
    
    console.log('=== WEBHOOK DEBUG ===');
    console.log('Source:', body.source || 'shipsquared');
    console.log('Webhook from request:', body.webhook ? 'YES' : 'NO');
    console.log('Webhook URL being used:', webhookUrl);
    console.log('Topic:', body.topic);
    
    // Only check settings if webhook not provided in request
    if (!body.webhook) {
      try {
        const webhookSetting = await prisma.setting.findUnique({
          where: { key: 'webhookUrl' }
        });
        if (webhookSetting?.value) {
          webhookUrl = webhookSetting.value;
          console.log('Using webhook from database settings');
        }
      } catch (error) {
        console.log('Using default webhook URL');
      }
    } else {
      console.log('Using webhook URL from request');
    }
    
    try {
      // Add timeout of 30 seconds for n8n webhook processing
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 seconds timeout
      
      console.log('Sending webhook to:', webhookUrl);
      console.log('Payload:', JSON.stringify(webhookPayload, null, 2));
      
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'ArticleGenerator/1.0'
        },
        body: JSON.stringify(webhookPayload),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      const webhookResult = await webhookResponse.text();
      
      console.log('Webhook response status:', webhookResponse.status);
      console.log('Webhook response:', webhookResult.substring(0, 500)); // First 500 chars
      
      // Log webhook attempt (don't wait for it)
      prisma.webhookLog.create({
        data: {
          url: webhookUrl,
          payload: webhookPayload,
          response: { text: webhookResult?.substring(0, 1000) || 'No response' },
          statusCode: webhookResponse.status,
          success: webhookResponse.ok
        }
      }).catch(err => console.error('Failed to log webhook:', err));
      
      if (webhookResponse.ok) {
        console.log('Webhook returned OK, processing response...');
        
        // Handle empty responses
        if (!webhookResult || webhookResult.trim() === '') {
          console.log('Empty webhook response, setting article as DRAFT');
          await prisma.article.update({
            where: { id: article.id },
            data: { 
              status: 'DRAFT',
              content: 'Webhook received but returned empty response. Please check n8n workflow.'
            }
          });
        } else {
          // Parse the response and update article with generated content
          let generatedContent = webhookResult;
          
          // Try to parse as JSON first
          try {
            const responseData = JSON.parse(webhookResult);
            // Check various possible field names
            generatedContent = responseData.Blogpost || 
                             responseData.blogpost || 
                             responseData.content || 
                             responseData.article || 
                             responseData.text ||
                             responseData.output ||
                             JSON.stringify(responseData); // If object but no known field
            
            console.log('Parsed JSON response, using content field');
          } catch (parseError) {
            console.log('Response is not JSON, using as plain text');
            // Response is plain text, use as is
          }
          
          // Only save if we have actual content (not just "OK" or similar)
          if (generatedContent && generatedContent.length > 10) {
            console.log('Updating article with generated content (length: ' + generatedContent.length + ')');
            await prisma.article.update({
              where: { id: article.id },
              data: { 
                content: generatedContent,
                status: 'PUBLISHED'
              }
            });
          } else {
            console.log('Response too short, marking as DRAFT');
            await prisma.article.update({
              where: { id: article.id },
              data: { 
                content: 'Webhook responded but did not return article content. Response: ' + webhookResult,
                status: 'DRAFT'
              }
            });
          }
        }
      } else {
        console.error(`Webhook failed with status ${webhookResponse.status}`);
        // Update article status to DRAFT if webhook fails
        await prisma.article.update({
          where: { id: article.id },
          data: { 
            status: 'DRAFT',
            content: `Webhook failed with status ${webhookResponse.status}. Response: ${webhookResult}`
          }
        });
      }
    } catch (webhookError) {
      console.error('Webhook error:', webhookError);
      console.error('Error name:', webhookError.name);
      console.error('Error message:', webhookError.message);
      
      let errorMessage = 'Unknown webhook error';
      if (webhookError.name === 'AbortError') {
        errorMessage = 'Webhook timeout - n8n did not respond within 30 seconds';
      } else if (webhookError.message.includes('fetch failed')) {
        errorMessage = 'Could not connect to webhook URL';
      } else {
        errorMessage = webhookError.message;
      }
      
      // Log failed webhook
      await prisma.webhookLog.create({
        data: {
          url: webhookUrl,
          payload: webhookPayload,
          response: { error: errorMessage, details: webhookError.message },
          statusCode: 0,
          success: false
        }
      });
      
      // Update article status to DRAFT with error message
      await prisma.article.update({
        where: { id: article.id },
        data: { 
          status: 'DRAFT',
          content: `Webhook error: ${errorMessage}`
        }
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