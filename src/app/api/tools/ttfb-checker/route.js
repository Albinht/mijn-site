import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { url } = await request.json();

    if (!url?.trim()) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Ensure URL has protocol
    const normalizedUrl = url.startsWith('http') ? url : `https://${url}`;
    
    try {
      new URL(normalizedUrl); // Validate URL format
    } catch {
      return NextResponse.json({
        success: false,
        error: 'Invalid URL format'
      });
    }

    // Measure TTFB
    const startTime = Date.now();
    const timingStart = process.hrtime.bigint();
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

      const response = await fetch(normalizedUrl, {
        method: 'HEAD', // Use HEAD to minimize data transfer
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; TTFB-Checker/1.0; +https://niblah.com)',
          'Accept': '*/*',
          'Connection': 'close'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const endTime = Date.now();
      const timingEnd = process.hrtime.bigint();
      
      const ttfb = endTime - startTime;
      const preciseTime = Number(timingEnd - timingStart) / 1000000; // Convert nanoseconds to milliseconds

      // Simulate timing breakdown (in a real implementation, you'd use Node.js performance hooks)
      const estimatedDns = Math.max(0, Math.floor(ttfb * 0.1)); // ~10% for DNS
      const estimatedConnect = Math.max(0, Math.floor(ttfb * 0.2)); // ~20% for connection
      const estimatedServer = Math.max(0, ttfb - estimatedDns - estimatedConnect); // Rest is server processing
      const estimatedTransfer = 0; // HEAD request has minimal transfer

      const timing = {
        dns: estimatedDns,
        connect: estimatedConnect,
        server: estimatedServer,
        transfer: estimatedTransfer,
        total: ttfb
      };

      // Generate recommendations based on performance
      const recommendations = generateRecommendations(ttfb, response.status, response.headers);

      return NextResponse.json({
        success: true,
        url: normalizedUrl,
        ttfb: Math.round(preciseTime), // Use precise timing if available, fallback to basic timing
        timing,
        httpStatus: response.status,
        recommendations,
        timestamp: new Date().toISOString(),
        serverInfo: {
          server: response.headers.get('server'),
          contentType: response.headers.get('content-type'),
          cacheControl: response.headers.get('cache-control')
        }
      });

    } catch (error) {
      if (error.name === 'AbortError') {
        return NextResponse.json({
          success: false,
          error: 'Request timed out after 30 seconds'
        });
      }

      return NextResponse.json({
        success: false,
        error: `Connection failed: ${error.message}`
      });
    }

  } catch (error) {
    console.error('TTFB check error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to check TTFB' },
      { status: 500 }
    );
  }
}

function generateRecommendations(ttfb, httpStatus, headers) {
  const recommendations = [];

  // TTFB-based recommendations
  if (ttfb > 1000) {
    recommendations.push('TTFB is over 1 second. Consider upgrading your hosting plan or optimizing server performance.');
    recommendations.push('Review your database queries and implement caching to reduce server processing time.');
  } else if (ttfb > 500) {
    recommendations.push('TTFB is acceptable but could be improved with server optimization.');
    recommendations.push('Consider implementing server-side caching or using a CDN.');
  } else if (ttfb > 200) {
    recommendations.push('Good TTFB performance. Minor optimizations could still help.');
  } else {
    recommendations.push('Excellent TTFB performance! Your server is responding quickly.');
  }

  // HTTP status recommendations
  if (httpStatus >= 400) {
    recommendations.push(`HTTP ${httpStatus} error detected. Fix server errors to improve performance.`);
  } else if (httpStatus >= 300) {
    recommendations.push(`HTTP ${httpStatus} redirect detected. Minimize redirects to reduce TTFB.`);
  }

  // Header-based recommendations
  const server = headers.get('server');
  const cacheControl = headers.get('cache-control');
  
  if (server?.toLowerCase().includes('apache')) {
    recommendations.push('Consider using nginx or optimizing Apache configuration for better performance.');
  }

  if (!cacheControl || cacheControl.includes('no-cache')) {
    recommendations.push('Implement proper caching headers to improve repeat visit performance.');
  }

  if (!headers.get('content-encoding')) {
    recommendations.push('Enable GZIP/Brotli compression to reduce transfer times.');
  }

  // CDN recommendation for slow responses
  if (ttfb > 300) {
    recommendations.push('Consider using a Content Delivery Network (CDN) to improve global response times.');
  }

  // Generic performance tips
  if (ttfb > 200) {
    recommendations.push('Optimize your database queries and remove unnecessary plugins or scripts.');
    recommendations.push('Use performance monitoring tools to identify specific bottlenecks.');
  }

  return recommendations.slice(0, 5); // Limit to 5 recommendations
}