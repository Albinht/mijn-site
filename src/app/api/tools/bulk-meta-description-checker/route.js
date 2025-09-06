import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(request) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'Invalid URLs provided' }, { status: 400 });
    }

    const results = await Promise.all(
      urls.map(async (url) => {
        try {
          // Ensure URL has protocol
          const normalizedUrl = url.startsWith('http') ? url : `https://${url}`;
          
          const response = await fetch(normalizedUrl, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (compatible; SEO-Tool/1.0; +https://niblah.com)'
            },
            timeout: 10000
          });

          if (!response.ok) {
            return {
              url: normalizedUrl,
              metaDescription: null,
              length: 0,
              status: 'error',
              recommendation: `HTTP ${response.status}: Could not fetch page`
            };
          }

          const html = await response.text();
          const $ = cheerio.load(html);
          
          // Extract meta description
          const metaDescription = $('meta[name="description"]').attr('content') || 
                                 $('meta[property="og:description"]').attr('content') || 
                                 null;

          if (!metaDescription) {
            return {
              url: normalizedUrl,
              metaDescription: null,
              length: 0,
              status: 'error',
              recommendation: 'No meta description found. Add a meta description tag to improve SEO.'
            };
          }

          const length = metaDescription.length;
          let status, recommendation;

          if (length >= 150 && length <= 160) {
            status = 'optimal';
            recommendation = 'Perfect length! Meta description is within the optimal range.';
          } else if (length >= 120 && length <= 170) {
            status = 'warning';
            if (length < 150) {
              recommendation = 'Consider expanding your meta description to utilize more space and provide more detail.';
            } else {
              recommendation = 'Meta description may be truncated in search results. Consider shortening it.';
            }
          } else {
            status = 'error';
            if (length < 120) {
              recommendation = 'Meta description is too short. Expand it to 150-160 characters for better SEO.';
            } else {
              recommendation = 'Meta description is too long and will be truncated. Shorten to 150-160 characters.';
            }
          }

          return {
            url: normalizedUrl,
            metaDescription,
            length,
            status,
            recommendation
          };

        } catch (error) {
          return {
            url: url,
            metaDescription: null,
            length: 0,
            status: 'error',
            recommendation: `Error: ${error.message}`
          };
        }
      })
    );

    return NextResponse.json({ results });

  } catch (error) {
    console.error('Bulk meta description check error:', error);
    return NextResponse.json(
      { error: 'Failed to check meta descriptions' },
      { status: 500 }
    );
  }
}