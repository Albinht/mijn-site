import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { sitemapUrl } = await request.json();

    if (!sitemapUrl?.trim()) {
      return NextResponse.json({ 
        success: false,
        error: 'Sitemap URL is verplicht' 
      }, { status: 400 });
    }

    // Fetch sitemap
    const response = await fetch(sitemapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SitemapChecker/1.0)',
      },
    });

    if (!response.ok) {
      return NextResponse.json({ 
        success: false,
        error: `Kon sitemap niet laden: ${response.status} ${response.statusText}` 
      }, { status: 400 });
    }

    const sitemapContent = await response.text();

    // Basic XML validation
    if (!sitemapContent.includes('<urlset') && !sitemapContent.includes('<sitemapindex')) {
      return NextResponse.json({ 
        success: false,
        error: 'Geen geldige XML sitemap gevonden' 
      }, { status: 400 });
    }

    // Count URLs
    const urlMatches = sitemapContent.match(/<loc>/g);
    const totalUrls = urlMatches ? urlMatches.length : 0;

    // Check for common issues
    const issues = [];

    if (totalUrls === 0) {
      issues.push({
        type: 'Geen URLs',
        message: 'Sitemap bevat geen URLs',
        severity: 'error'
      });
    }

    if (totalUrls > 50000) {
      issues.push({
        type: 'Te veel URLs',
        message: 'Sitemap bevat meer dan 50.000 URLs (Google limiet)',
        severity: 'warning'
      });
    }

    // Check file size
    const fileSizeBytes = new TextEncoder().encode(sitemapContent).length;
    const fileSizeMB = fileSizeBytes / (1024 * 1024);
    
    if (fileSizeMB > 50) {
      issues.push({
        type: 'Bestand te groot',
        message: 'Sitemap is groter dan 50MB (Google limiet)',
        severity: 'warning'
      });
    }

    // Check for lastmod dates
    if (!sitemapContent.includes('<lastmod>')) {
      issues.push({
        type: 'Lastmod ontbreekt',
        message: 'Overweeg lastmod dates toe te voegen voor betere crawl efficiency',
        severity: 'info'
      });
    }

    return NextResponse.json({
      success: true,
      totalUrls,
      validUrls: totalUrls,
      fileSize: `${fileSizeMB.toFixed(2)} MB`,
      issues,
      hasLastMod: sitemapContent.includes('<lastmod>'),
      hasPriority: sitemapContent.includes('<priority>'),
      hasChangeFreq: sitemapContent.includes('<changefreq>'),
    });

  } catch (error) {
    console.error('Sitemap check error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Kon sitemap niet analyseren. Controleer of de URL correct is.' 
    }, { status: 500 });
  }
}
