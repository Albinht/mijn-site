import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(request) {
  try {
    const { url } = await request.json();

    if (!url?.trim()) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Ensure URL has protocol
    const normalizedUrl = url.startsWith('http') ? url : `https://${url}`;
    
    try {
      const response = await fetch(normalizedUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Social-Meta-Validator/1.0; +https://niblah.com)'
        },
        timeout: 10000
      });

      if (!response.ok) {
        return NextResponse.json({
          success: false,
          error: `HTTP ${response.status}: Could not fetch page`
        });
      }

      const html = await response.text();
      const $ = cheerio.load(html);

      // Validate Open Graph tags
      const openGraphResults = validateOpenGraph($);
      
      // Validate Twitter Card tags
      const twitterResults = validateTwitterCard($);

      // Calculate summary
      const summary = calculateSummary(openGraphResults, twitterResults);

      return NextResponse.json({
        success: true,
        url: normalizedUrl,
        openGraph: openGraphResults,
        twitter: twitterResults,
        summary
      });

    } catch (error) {
      return NextResponse.json({
        success: false,
        error: `Failed to fetch URL: ${error.message}`
      });
    }

  } catch (error) {
    console.error('Social media meta validation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to validate meta tags' },
      { status: 500 }
    );
  }
}

function validateOpenGraph($) {
  const tags = {
    title: {
      property: 'og:title',
      description: 'Page title for social sharing',
      isPresent: false,
      isValid: false,
      value: null
    },
    description: {
      property: 'og:description',
      description: 'Page description for social sharing',
      isPresent: false,
      isValid: false,
      value: null
    },
    image: {
      property: 'og:image',
      description: 'Image displayed when shared',
      isPresent: false,
      isValid: false,
      value: null
    },
    url: {
      property: 'og:url',
      description: 'Canonical URL of the page',
      isPresent: false,
      isValid: false,
      value: null
    },
    type: {
      property: 'og:type',
      description: 'Type of content (website, article, etc.)',
      isPresent: false,
      isValid: false,
      value: null
    },
    siteName: {
      property: 'og:site_name',
      description: 'Name of your website',
      isPresent: false,
      isValid: false,
      value: null
    }
  };

  // Check og:title
  const ogTitle = $('meta[property="og:title"]').attr('content');
  if (ogTitle) {
    tags.title.isPresent = true;
    tags.title.value = ogTitle;
    tags.title.isValid = ogTitle.trim().length > 0 && ogTitle.length <= 60;
  }

  // Check og:description
  const ogDescription = $('meta[property="og:description"]').attr('content');
  if (ogDescription) {
    tags.description.isPresent = true;
    tags.description.value = ogDescription;
    tags.description.isValid = ogDescription.trim().length > 0 && ogDescription.length <= 155;
  }

  // Check og:image
  const ogImage = $('meta[property="og:image"]').attr('content');
  if (ogImage) {
    tags.image.isPresent = true;
    tags.image.value = ogImage;
    tags.image.isValid = isValidUrl(ogImage);
  }

  // Check og:url
  const ogUrl = $('meta[property="og:url"]').attr('content');
  if (ogUrl) {
    tags.url.isPresent = true;
    tags.url.value = ogUrl;
    tags.url.isValid = isValidUrl(ogUrl);
  }

  // Check og:type
  const ogType = $('meta[property="og:type"]').attr('content');
  if (ogType) {
    tags.type.isPresent = true;
    tags.type.value = ogType;
    tags.type.isValid = ['website', 'article', 'book', 'profile', 'music', 'video'].includes(ogType);
  }

  // Check og:site_name
  const ogSiteName = $('meta[property="og:site_name"]').attr('content');
  if (ogSiteName) {
    tags.siteName.isPresent = true;
    tags.siteName.value = ogSiteName;
    tags.siteName.isValid = ogSiteName.trim().length > 0;
  }

  // Create preview
  const preview = {
    title: ogTitle || $('title').text() || 'No title',
    description: ogDescription || $('meta[name="description"]').attr('content') || 'No description',
    image: ogImage,
    siteName: ogSiteName
  };

  return { tags, preview };
}

function validateTwitterCard($) {
  const tags = {
    card: {
      property: 'twitter:card',
      description: 'Type of Twitter Card',
      isPresent: false,
      isValid: false,
      value: null
    },
    title: {
      property: 'twitter:title',
      description: 'Title for Twitter sharing',
      isPresent: false,
      isValid: false,
      value: null
    },
    description: {
      property: 'twitter:description',
      description: 'Description for Twitter sharing',
      isPresent: false,
      isValid: false,
      value: null
    },
    image: {
      property: 'twitter:image',
      description: 'Image for Twitter sharing',
      isPresent: false,
      isValid: false,
      value: null
    },
    site: {
      property: 'twitter:site',
      description: 'Twitter handle of your site',
      isPresent: false,
      isValid: false,
      value: null
    }
  };

  // Check twitter:card
  const twitterCard = $('meta[name="twitter:card"]').attr('content');
  if (twitterCard) {
    tags.card.isPresent = true;
    tags.card.value = twitterCard;
    tags.card.isValid = ['summary', 'summary_large_image', 'app', 'player'].includes(twitterCard);
  }

  // Check twitter:title
  const twitterTitle = $('meta[name="twitter:title"]').attr('content');
  if (twitterTitle) {
    tags.title.isPresent = true;
    tags.title.value = twitterTitle;
    tags.title.isValid = twitterTitle.trim().length > 0 && twitterTitle.length <= 70;
  }

  // Check twitter:description
  const twitterDescription = $('meta[name="twitter:description"]').attr('content');
  if (twitterDescription) {
    tags.description.isPresent = true;
    tags.description.value = twitterDescription;
    tags.description.isValid = twitterDescription.trim().length > 0 && twitterDescription.length <= 200;
  }

  // Check twitter:image
  const twitterImage = $('meta[name="twitter:image"]').attr('content');
  if (twitterImage) {
    tags.image.isPresent = true;
    tags.image.value = twitterImage;
    tags.image.isValid = isValidUrl(twitterImage);
  }

  // Check twitter:site
  const twitterSite = $('meta[name="twitter:site"]').attr('content');
  if (twitterSite) {
    tags.site.isPresent = true;
    tags.site.value = twitterSite;
    tags.site.isValid = twitterSite.startsWith('@') && twitterSite.length > 1;
  }

  // Create preview - fallback to Open Graph if Twitter tags missing
  const preview = {
    title: twitterTitle || $('meta[property="og:title"]').attr('content') || $('title').text() || 'No title',
    description: twitterDescription || $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || 'No description',
    image: twitterImage || $('meta[property="og:image"]').attr('content')
  };

  return { tags, preview };
}

function calculateSummary(openGraphResults, twitterResults) {
  let valid = 0;
  let warnings = 0;
  let missing = 0;

  // Count Open Graph
  Object.values(openGraphResults.tags).forEach(tag => {
    if (tag.isValid) valid++;
    else if (tag.isPresent) warnings++;
    else missing++;
  });

  // Count Twitter
  Object.values(twitterResults.tags).forEach(tag => {
    if (tag.isValid) valid++;
    else if (tag.isPresent) warnings++;
    else missing++;
  });

  const total = valid + warnings + missing;
  const score = total > 0 ? Math.round((valid / total) * 100) : 0;

  return { valid, warnings, missing, score };
}

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}