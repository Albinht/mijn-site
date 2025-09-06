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
              titleTag: null,
              length: 0,
              status: 'error',
              recommendation: `HTTP ${response.status}: Could not fetch page`
            };
          }

          const html = await response.text();
          const $ = cheerio.load(html);
          
          // Extract title tag
          const titleTag = $('title').text().trim() || null;

          if (!titleTag) {
            return {
              url: normalizedUrl,
              titleTag: null,
              length: 0,
              status: 'error',
              recommendation: 'No title tag found. Add a title tag to improve SEO and user experience.'
            };
          }

          const length = titleTag.length;
          let status, recommendation;

          if (length >= 50 && length <= 60) {
            status = 'optimal';
            recommendation = 'Perfect length! Title tag is within the optimal range for search results.';
          } else if (length >= 40 && length <= 70) {
            status = 'warning';
            if (length < 50) {
              recommendation = 'Title tag could be longer. Consider adding more descriptive words or brand name.';
            } else {
              recommendation = 'Title tag may be truncated in search results. Consider shortening it slightly.';
            }
          } else {
            status = 'error';
            if (length < 40) {
              recommendation = 'Title tag is too short. Expand it to 50-60 characters for better SEO impact.';
            } else {
              recommendation = 'Title tag is too long and will be truncated. Shorten to 50-60 characters for optimal display.';
            }
          }

          return {
            url: normalizedUrl,
            titleTag,
            length,
            status,
            recommendation
          };

        } catch (error) {
          return {
            url: url,
            titleTag: null,
            length: 0,
            status: 'error',
            recommendation: `Error: ${error.message}`
          };
        }
      })
    );

    return NextResponse.json({ results });

  } catch (error) {
    console.error('Bulk title tag check error:', error);
    return NextResponse.json(
      { error: 'Failed to check title tags' },
      { status: 500 }
    );
  }
}