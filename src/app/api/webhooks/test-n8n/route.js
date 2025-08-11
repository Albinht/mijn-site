import { NextResponse } from 'next/server';

// POST /api/webhooks/test-n8n - Test n8n webhook synchronously
export async function POST(request) {
  try {
    const body = await request.json();
    const topic = body.topic || 'Test Topic';
    
    const webhookUrl = 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650';
    
    const payload = {
      topic: topic,
      articleId: 'test-' + Date.now(),
      timestamp: new Date().toISOString(),
      test: true
    };
    
    console.log('Testing n8n webhook...');
    console.log('URL:', webhookUrl);
    console.log('Payload:', JSON.stringify(payload, null, 2));
    
    const startTime = Date.now();
    
    try {
      // Wait for response with 10 second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'MijnSite/1.0'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      
      let responseBody = '';
      try {
        responseBody = await response.text();
      } catch (e) {
        responseBody = 'Could not read response body';
      }
      
      console.log('Response received in', responseTime, 'ms');
      console.log('Status:', response.status);
      console.log('Body:', responseBody);
      
      return NextResponse.json({
        success: response.ok,
        status: response.status,
        responseTime: responseTime + 'ms',
        responseBody: responseBody,
        payload: payload,
        message: response.ok ? 'Webhook received data successfully' : `Webhook returned status ${response.status}`
      });
      
    } catch (error) {
      const responseTime = Date.now() - startTime;
      console.error('Webhook test error:', error);
      
      let errorMessage = 'Unknown error';
      if (error.name === 'AbortError') {
        errorMessage = 'Webhook timeout after 10 seconds - n8n is not responding';
      } else if (error.message.includes('fetch failed')) {
        errorMessage = 'Could not connect to webhook URL';
      } else {
        errorMessage = error.message;
      }
      
      return NextResponse.json({
        success: false,
        error: errorMessage,
        errorType: error.name,
        responseTime: responseTime + 'ms',
        payload: payload,
        message: `Webhook test failed: ${errorMessage}`
      });
    }
    
  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'Test endpoint error'
    });
  }
}