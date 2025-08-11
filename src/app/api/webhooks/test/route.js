import { NextResponse } from 'next/server';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';

// POST /api/webhooks/test - Test webhook URL
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
    const { webhookUrl, source } = body;
    
    if (!webhookUrl) {
      return NextResponse.json(
        formatError('Webhook URL is required', 400),
        { status: 400 }
      );
    }
    
    // Validate URL format
    try {
      const url = new URL(webhookUrl);
      if (!url.protocol.startsWith('http')) {
        throw new Error('Invalid protocol');
      }
    } catch (error) {
      return NextResponse.json(
        formatError('Invalid webhook URL format', 400),
        { status: 400 }
      );
    }
    
    // Prepare test payload
    const testPayload = {
      test: true,
      articleId: 'test-' + Date.now(),
      topic: 'Test webhook connection',
      timestamp: new Date().toISOString(),
      source: source || 'test',
      userId: user.userId,
      message: 'This is a test webhook from the article generation system'
    };
    
    console.log('Testing webhook:', webhookUrl);
    console.log('Test payload:', testPayload);
    
    try {
      // Send test webhook with 30 second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);
      
      const startTime = Date.now();
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'ArticleGenerator/1.0'
        },
        body: JSON.stringify(testPayload),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      
      let responseData;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
      
      console.log('Webhook test response:', {
        status: response.status,
        responseTime,
        data: responseData
      });
      
      return NextResponse.json(formatResponse({
        success: response.ok,
        status: response.status,
        statusText: response.statusText,
        responseTime: responseTime + 'ms',
        response: responseData,
        message: response.ok 
          ? 'Webhook test successful! n8n received the test payload.' 
          : `Webhook test failed with status ${response.status}`
      }));
      
    } catch (fetchError) {
      console.error('Webhook test error:', fetchError);
      
      let errorMessage = 'Failed to connect to webhook';
      if (fetchError.name === 'AbortError') {
        errorMessage = 'Webhook test timeout (30 seconds)';
      } else if (fetchError.message.includes('fetch failed')) {
        errorMessage = 'Could not connect to webhook URL. Check if n8n is running and accessible.';
      }
      
      return NextResponse.json(formatResponse({
        success: false,
        error: errorMessage,
        details: fetchError.message,
        message: errorMessage
      }));
    }
    
  } catch (error) {
    console.error('Error testing webhook:', error);
    return NextResponse.json(
      formatError('Failed to test webhook: ' + error.message),
      { status: 500 }
    );
  }
}