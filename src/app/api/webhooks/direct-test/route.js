import { NextResponse } from 'next/server';

// POST /api/webhooks/direct-test - Direct test without auth for debugging
export async function POST(request) {
  try {
    const body = await request.json();
    const webhookUrl = body.webhookUrl || 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650';
    
    console.log('=== DIRECT WEBHOOK TEST ===');
    console.log('Testing URL:', webhookUrl);
    
    const testPayload = {
      test: true,
      articleId: 'direct-test-' + Date.now(),
      topic: 'Direct test from API',
      timestamp: new Date().toISOString(),
      source: 'direct-test'
    };
    
    console.log('Payload:', JSON.stringify(testPayload, null, 2));
    
    try {
      const startTime = Date.now();
      
      // Try with a 5 second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'User-Agent': 'ArticleGenerator/1.0'
        },
        body: JSON.stringify(testPayload),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      
      console.log('Response status:', response.status);
      console.log('Response time:', responseTime + 'ms');
      console.log('Response headers:', Object.fromEntries(response.headers));
      
      let responseText = '';
      try {
        responseText = await response.text();
        console.log('Response body:', responseText);
      } catch (e) {
        console.error('Could not read response body:', e);
      }
      
      return NextResponse.json({
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        responseTime: responseTime + 'ms',
        headers: Object.fromEntries(response.headers),
        body: responseText,
        url: webhookUrl
      });
      
    } catch (fetchError) {
      console.error('Fetch error:', fetchError);
      console.error('Error type:', fetchError.name);
      console.error('Error message:', fetchError.message);
      console.error('Error stack:', fetchError.stack);
      
      let errorType = 'unknown';
      if (fetchError.name === 'AbortError') {
        errorType = 'timeout';
      } else if (fetchError.message.includes('fetch failed')) {
        errorType = 'connection_failed';
      }
      
      return NextResponse.json({
        success: false,
        error: fetchError.message,
        errorType: errorType,
        errorName: fetchError.name,
        url: webhookUrl
      });
    }
    
  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    });
  }
}