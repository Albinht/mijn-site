import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST /api/webhooks/callback - Receive article content from n8n
export async function POST(request) {
  try {
    const body = await request.json();
    
    console.log('================== N8N CALLBACK ==================');
    console.log('Received callback from n8n');
    console.log('Body:', JSON.stringify(body, null, 2));
    console.log('==================================================');
    
    // Extract articleId and content from n8n response
    const articleId = body.articleId;
    const content = body.content || body.article || body.text || body.output;
    
    if (!articleId) {
      console.error('No articleId provided in callback');
      return NextResponse.json({
        success: false,
        error: 'articleId is required'
      }, { status: 400 });
    }
    
    if (!content) {
      console.error('No content provided in callback');
      return NextResponse.json({
        success: false,
        error: 'content is required'
      }, { status: 400 });
    }
    
    // Update the article with the content from n8n
    try {
      const article = await prisma.article.update({
        where: { id: articleId },
        data: {
          content: content,
          status: 'PUBLISHED'
        }
      });
      
      console.log('Article updated successfully:', articleId);
      
      return NextResponse.json({
        success: true,
        message: 'Article updated successfully',
        articleId: articleId
      });
      
    } catch (dbError) {
      console.error('Database error updating article:', dbError);
      return NextResponse.json({
        success: false,
        error: 'Failed to update article',
        details: dbError.message
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Callback endpoint error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

// GET /api/webhooks/callback - Health check for n8n
export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'Callback endpoint is ready',
    expectedPayload: {
      articleId: 'string (required)',
      content: 'string (required) - the generated article content'
    }
  });
}