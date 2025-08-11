import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { generateSlug, formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';

// POST /api/articles/generate - Generate article with webhook
export async function POST(request) {
  try {
    // Verify authentication with fallback for development
    const user = await verifyAuth(request) || { userId: 'hardcoded-user-id' };
    
    const body = await request.json();
    
    // Just need the topic
    if (!body.topic) {
      return NextResponse.json(
        formatError('Topic is required', 400),
        { status: 400 }
      );
    }
    
    // Create article in database with PROCESSING status
    const article = await prisma.article.create({
      data: {
        topic: body.topic,
        title: body.title || `Article: ${body.topic}`,
        content: 'Generating article...',
        status: 'PROCESSING',
        slug: generateSlug(body.title || body.topic),
        views: 0,
        source: body.source || 'shipsquared',
        authorId: user.userId !== 'hardcoded-user-id' ? user.userId : null
      }
    });
    
    // Hardcoded webhook URL
    const webhookUrl = 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650';
    
    // Payload with callback URL for n8n to send results back
    const callbackUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}/api/webhooks/callback`
      : 'https://mijn-site.vercel.app/api/webhooks/callback';
    
    const webhookPayload = {
      topic: body.topic,
      articleId: article.id,
      timestamp: new Date().toISOString(),
      callbackUrl: callbackUrl
    };
    
    console.log('================== WEBHOOK CALL ==================');
    console.log('Time:', new Date().toISOString());
    console.log('Webhook URL:', webhookUrl);
    console.log('Payload being sent:', JSON.stringify(webhookPayload, null, 2));
    console.log('Article ID:', article.id);
    console.log('Topic:', body.topic);
    console.log('==================================================');
    
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    // Send to webhook with timeout
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(webhookPayload),
      signal: controller.signal
    })
    .then(async (response) => {
      clearTimeout(timeoutId);
      const text = await response.text();
      console.log('================== WEBHOOK RESPONSE ==================');
      console.log('Status:', response.status);
      console.log('Response body:', text);
      console.log('=====================================================');
      
      // Update article with response
      if (response.ok && text) {
        await prisma.article.update({
          where: { id: article.id },
          data: { 
            content: text,
            status: 'PUBLISHED'
          }
        });
        console.log('Article updated successfully');
      } else {
        await prisma.article.update({
          where: { id: article.id },
          data: { 
            status: 'DRAFT',
            content: `Webhook returned status ${response.status}`
          }
        });
        console.log('Article marked as DRAFT due to webhook status:', response.status);
      }
    })
    .catch(async (error) => {
      clearTimeout(timeoutId);
      console.error('================== WEBHOOK ERROR ==================');
      console.error('Error type:', error.name);
      console.error('Error message:', error.message);
      console.error('Full error:', error);
      console.error('==================================================');
      
      let errorMessage = error.message;
      if (error.name === 'AbortError') {
        errorMessage = 'Webhook timeout after 5 seconds';
      }
      
      await prisma.article.update({
        where: { id: article.id },
        data: { 
          status: 'DRAFT',
          content: `Webhook error: ${errorMessage}`
        }
      }).catch(console.error);
    });
    
    // Return immediately
    return NextResponse.json(formatResponse({
      article: {
        id: article.id,
        title: article.title,
        slug: article.slug,
        status: 'PROCESSING'
      },
      message: 'Article generation started'
    }), { status: 201 });
    
  } catch (error) {
    console.error('Error generating article:', error);
    return NextResponse.json(
      formatError('Failed to generate article'),
      { status: 500 }
    );
  }
}