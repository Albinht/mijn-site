import { NextResponse } from 'next/server';

// GET /api/webhooks/health - Check webhook health status
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const webhookUrl = searchParams.get('url') || 'https://n8n-n8n.42giwj.easypanel.host/webhook/2f67b999-ee19-471a-9911-054d76177650';
    
    console.log('=== WEBHOOK HEALTH CHECK ===');
    console.log('Checking URL:', webhookUrl);
    
    const healthPayload = {
      test: true,
      type: 'health_check',
      timestamp: new Date().toISOString()
    };
    
    try {
      const startTime = Date.now();
      
      // Try with a 10 second timeout for health check
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'ArticleGenerator/1.0 HealthCheck'
        },
        body: JSON.stringify(healthPayload),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      
      let responseText = '';
      try {
        responseText = await response.text();
      } catch (e) {
        console.error('Could not read response body:', e);
      }
      
      const isHealthy = response.ok || response.status < 500;
      
      return NextResponse.json({
        healthy: isHealthy,
        status: response.status,
        responseTime: responseTime,
        message: isHealthy 
          ? `Webhook is responding (${responseTime}ms)` 
          : `Webhook returned error status ${response.status}`,
        details: {
          url: webhookUrl,
          statusCode: response.status,
          responseTime: `${responseTime}ms`,
          responsePreview: responseText?.substring(0, 100)
        }
      });
      
    } catch (fetchError) {
      console.error('Health check error:', fetchError);
      
      let errorMessage = 'Webhook is not responding';
      if (fetchError.name === 'AbortError') {
        errorMessage = 'Webhook timeout - no response within 10 seconds';
      } else if (fetchError.message.includes('fetch failed')) {
        errorMessage = 'Cannot connect to webhook URL';
      }
      
      return NextResponse.json({
        healthy: false,
        status: 0,
        responseTime: 0,
        message: errorMessage,
        error: fetchError.message,
        details: {
          url: webhookUrl,
          error: fetchError.name,
          message: fetchError.message
        }
      });
    }
    
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json({
      healthy: false,
      status: 0,
      message: 'Health check failed',
      error: error.message
    });
  }
}