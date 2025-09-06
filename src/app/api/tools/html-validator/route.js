import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(request) {
  try {
    const { method, content } = await request.json();

    if (!content?.trim()) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    let htmlContent;
    
    if (method === 'url') {
      try {
        const normalizedUrl = content.startsWith('http') ? content : `https://${content}`;
        const response = await fetch(normalizedUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; HTML-Validator/1.0; +https://niblah.com)'
          },
          timeout: 10000
        });

        if (!response.ok) {
          return NextResponse.json({
            success: false,
            error: `HTTP ${response.status}: Could not fetch page`
          });
        }

        htmlContent = await response.text();
      } catch (error) {
        return NextResponse.json({
          success: false,
          error: `Failed to fetch URL: ${error.message}`
        });
      }
    } else {
      htmlContent = content;
    }

    // Validate HTML
    const validationResult = validateHTML(htmlContent);
    
    return NextResponse.json({
      success: true,
      ...validationResult
    });

  } catch (error) {
    console.error('HTML validation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to validate HTML' },
      { status: 500 }
    );
  }
}

function validateHTML(html) {
  const issues = [];
  const summary = { errors: 0, warnings: 0, info: 0, score: 100 };

  try {
    // Load HTML with cheerio for parsing
    const $ = cheerio.load(html, { 
      xmlMode: false, 
      decodeEntities: false,
      lowerCaseAttributeNames: false 
    });

    // Check for DOCTYPE
    if (!html.trim().toLowerCase().startsWith('<!doctype')) {
      issues.push({
        type: 'error',
        message: 'Missing DOCTYPE declaration',
        description: 'HTML documents should start with <!DOCTYPE html>',
        suggestion: 'Add <!DOCTYPE html> at the beginning of your document',
        line: 1
      });
      summary.errors++;
    }

    // Check for html element with lang attribute
    const htmlElement = $('html');
    if (htmlElement.length === 0) {
      issues.push({
        type: 'error',
        message: 'Missing html element',
        description: 'Document should have an html root element',
        suggestion: 'Wrap your content in <html> tags'
      });
      summary.errors++;
    } else if (!htmlElement.attr('lang')) {
      issues.push({
        type: 'warning',
        message: 'Missing lang attribute on html element',
        description: 'The html element should specify the document language',
        suggestion: 'Add lang="en" or appropriate language code to <html> tag'
      });
      summary.warnings++;
    }

    // Check for meta charset
    const charset = $('meta[charset]');
    if (charset.length === 0) {
      issues.push({
        type: 'error',
        message: 'Missing character encoding',
        description: 'Document should specify character encoding',
        suggestion: 'Add <meta charset="UTF-8"> in the <head> section'
      });
      summary.errors++;
    }

    // Check for title element
    const title = $('title');
    if (title.length === 0) {
      issues.push({
        type: 'error',
        message: 'Missing title element',
        description: 'Document should have a title element',
        suggestion: 'Add <title>Page Title</title> in the <head> section'
      });
      summary.errors++;
    } else if (!title.text().trim()) {
      issues.push({
        type: 'warning',
        message: 'Empty title element',
        description: 'Title element should contain descriptive text',
        suggestion: 'Add meaningful text to your <title> element'
      });
      summary.warnings++;
    }

    // Check for images without alt attributes
    $('img').each((i, img) => {
      const $img = $(img);
      if (!$img.attr('alt')) {
        issues.push({
          type: 'error',
          message: 'Image missing alt attribute',
          description: 'All images should have alt text for accessibility',
          suggestion: 'Add alt="description" to your img tags',
          code: $.html($img)
        });
        summary.errors++;
      }
    });

    // Check for form inputs without labels
    $('input[type="text"], input[type="email"], input[type="password"], input[type="number"], textarea, select').each((i, input) => {
      const $input = $(input);
      const id = $input.attr('id');
      const name = $input.attr('name');
      
      if (id) {
        const label = $(`label[for="${id}"]`);
        if (label.length === 0) {
          issues.push({
            type: 'warning',
            message: 'Form input without associated label',
            description: 'Form inputs should have associated labels for accessibility',
            suggestion: `Add <label for="${id}">Label Text</label>`,
            code: $.html($input)
          });
          summary.warnings++;
        }
      } else {
        issues.push({
          type: 'info',
          message: 'Form input without id attribute',
          description: 'Consider adding id attributes to form inputs for better label association',
          suggestion: 'Add id attribute to enable label association',
          code: $.html($input)
        });
        summary.info++;
      }
    });

    // Check for empty heading tags
    $('h1, h2, h3, h4, h5, h6').each((i, heading) => {
      const $heading = $(heading);
      if (!$heading.text().trim()) {
        issues.push({
          type: 'warning',
          message: 'Empty heading element',
          description: 'Heading elements should contain descriptive text',
          suggestion: 'Add meaningful text to your heading elements',
          code: $.html($heading)
        });
        summary.warnings++;
      }
    });

    // Check for multiple h1 elements
    const h1Elements = $('h1');
    if (h1Elements.length > 1) {
      issues.push({
        type: 'warning',
        message: 'Multiple h1 elements found',
        description: 'Pages should typically have only one h1 element for better SEO',
        suggestion: 'Consider using h2-h6 for subheadings'
      });
      summary.warnings++;
    }

    // Check for deprecated elements
    const deprecatedElements = ['center', 'font', 'big', 'small', 'strike', 'tt'];
    deprecatedElements.forEach(element => {
      const found = $(element);
      if (found.length > 0) {
        issues.push({
          type: 'warning',
          message: `Deprecated element: ${element}`,
          description: `The <${element}> element is deprecated in HTML5`,
          suggestion: `Use CSS styling instead of <${element}> element`,
          code: $.html(found.first())
        });
        summary.warnings++;
      }
    });

    // Check for inline styles (not an error, but suggestion for best practices)
    $('[style]').each((i, element) => {
      if (i < 3) { // Only report first 3 to avoid spam
        issues.push({
          type: 'info',
          message: 'Inline styles detected',
          description: 'Consider using external CSS for better maintainability',
          suggestion: 'Move styles to external CSS file or <style> block',
          code: $.html($(element))
        });
        summary.info++;
      }
    });

    // Calculate score
    const totalIssues = summary.errors + summary.warnings + (summary.info * 0.5);
    summary.score = Math.max(0, Math.round(100 - (totalIssues * 5)));

    return {
      summary,
      issues,
      isValid: summary.errors === 0
    };

  } catch (error) {
    console.error('HTML parsing error:', error);
    return {
      summary: { errors: 1, warnings: 0, info: 0, score: 0 },
      issues: [{
        type: 'error',
        message: 'HTML parsing failed',
        description: 'Could not parse the provided HTML',
        suggestion: 'Check for malformed HTML syntax'
      }],
      isValid: false
    };
  }
}