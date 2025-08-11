import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { generateSlug, formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';

// POST /api/articles/generate - Generate article with webhook
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
    
    // Simple payload - just the topic
    const webhookPayload = {
      topic: body.topic,
      articleId: article.id
    };
    
    console.log('Sending to webhook:', webhookUrl);
    console.log('Payload:', webhookPayload);
    
    // Send to webhook - fire and forget
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookPayload)
    })
    .then(async (response) => {
      const text = await response.text();
      console.log('Webhook response:', response.status, text);
      
      // Update article with response
      if (response.ok && text) {
        await prisma.article.update({
          where: { id: article.id },
          data: { 
            content: text,
            status: 'PUBLISHED'
          }
        });
      } else {
        await prisma.article.update({
          where: { id: article.id },
          data: { 
            status: 'DRAFT',
            content: `Webhook returned status ${response.status}`
          }
        });
      }
    })
    .catch(async (error) => {
      console.error('Webhook error:', error);
      await prisma.article.update({
        where: { id: article.id },
        data: { 
          status: 'DRAFT',
          content: `Webhook error: ${error.message}`
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