'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import indexingImage from '../../../assets/indexing.png';

// CodeBlock component with copy functionality
function CodeBlock({ children, title }) {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden my-6">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
          <code>{children}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

// Content component
function BlogContent() {
  return (
    <>
      <h2>🎯 The Manual Indexing Problem</h2>
      <p>Getting your new pages indexed by Google can be frustrating and time-consuming. Manually submitting URLs through Google Search Console one by one is not only tedious but also doesn't scale when you're regularly publishing new content.</p>
      <p>That's where automation comes in. In this tutorial, I'll show you how to build a complete auto-indexing system using <Link href="/tools" className="text-blue-600 hover:text-blue-800">n8n workflow automation</Link> that:</p>
      <ul>
        <li><strong>Automatically detects new pages</strong> from your sitemap</li>
        <li><strong>Checks indexing status</strong> via Google Search Console API</li>
        <li><strong>Submits unindexed URLs</strong> for faster discovery</li>
        <li><strong>Runs on a schedule</strong> without manual intervention</li>
      </ul>

      <h2>🔧 Prerequisites</h2>
      <p>Before we dive into the workflow setup, make sure you have:</p>
      <ul>
        <li><strong>n8n instance</strong> (cloud or self-hosted)</li>
        <li><strong>Google Search Console</strong> property verified</li>
        <li><strong>Google Cloud Console</strong> project with API access</li>
        <li><strong>Website sitemap</strong> (XML format)</li>
      </ul>
      <p>This automation works best for sites that regularly publish new content and want to speed up the indexing process.</p>

      <h2>⚙️ Setting Up Google API Credentials</h2>
      <p>The first step is configuring proper API access for Google Search Console. This requires setting up OAuth credentials in Google Cloud Console.</p>
      
      <h3>Creating Google Cloud Project</h3>
      <p>Navigate to Google Cloud Console and create a new project specifically for this automation:</p>
      <ol>
        <li>Go to Google Cloud Console</li>
        <li>Create a new project or select existing</li>
        <li>Enable the Google Search Console API</li>
        <li>Configure OAuth consent screen</li>
        <li>Create OAuth 2.0 credentials</li>
      </ol>

      <h3>OAuth Configuration</h3>
      <p>The OAuth setup is crucial for secure API access. Here's what you need to configure:</p>
      <CodeBlock title="OAuth Scopes Required">
{`https://www.googleapis.com/auth/webmasters
https://www.googleapis.com/auth/webmasters.readonly`}
      </CodeBlock>
      
      <p>Make sure to add your domain to the authorized domains list and set the correct redirect URIs for n8n integration.</p>

      <h2>🔄 Building the N8N Workflow</h2>
      <p>The core workflow consists of several interconnected nodes that work together to automate the indexing process.</p>

      <h3>Schedule Trigger</h3>
      <p>Start with a schedule trigger to run the workflow automatically. I recommend running it:</p>
      <ul>
        <li><strong>Daily</strong> for high-frequency publishing sites</li>
        <li><strong>Weekly</strong> for slower content creation</li>
        <li><strong>Hourly</strong> for news sites or high-volume content</li>
      </ul>

      <h3>Sitemap Processing</h3>
      <p>The workflow fetches your XML sitemap and converts it to a workable JSON format:</p>
      <CodeBlock title="Sitemap Conversion Logic">
{`// Convert XML sitemap to JSON
const xml = $input.all()[0].json;
const urls = xml.urlset.url.map(item => ({
  loc: item.loc[0],
  lastmod: item.lastmod ? item.lastmod[0] : null
}));

return urls;`}
      </CodeBlock>

      <h3>Google Search Console Integration</h3>
      <p>This is where the magic happens. The workflow checks each URL's indexing status and submits unindexed pages.</p>

      <h2>📊 Conditional Logic for Smart Indexing</h2>
      <p>Not every URL needs to be submitted for indexing. The workflow includes smart conditional logic to:</p>
      <ul>
        <li><strong>Skip already indexed pages</strong> to avoid API quota waste</li>
        <li><strong>Prioritize new content</strong> based on last modified dates</li>
        <li><strong>Handle API rate limits</strong> with proper delays</li>
        <li><strong>Retry failed requests</strong> with exponential backoff</li>
      </ul>

      <h3>Indexing Status Check</h3>
      <p>Before submitting URLs, the workflow checks their current status:</p>
      <CodeBlock title="Status Check Implementation">
{`// Check URL indexing status
const url = $json.loc;
const response = await this.helpers.httpRequest({
  method: 'GET',
  url: 'https://searchconsole.googleapis.com/webmasters/v3/sites/' + 
       encodeURIComponent($node["Set Domain"].json.domain) + 
       '/urlCrawlErrorsCounts',
  headers: {
    'Authorization': 'Bearer ' + $node["Google OAuth2 API"].json.access_token
  }
});

return {
  url: url,
  indexed: response.totalErrorCount === 0
};`}
      </CodeBlock>

      <h2>🚀 Advanced Features</h2>
      <h3>Batch Processing</h3>
      <p>To handle large sitemaps efficiently, the workflow processes URLs in batches to respect API rate limits and avoid timeouts.</p>

      <h3>Error Handling</h3>
      <p>Robust error handling ensures the workflow continues running even if individual requests fail:</p>
      <ul>
        <li><strong>API quota exceeded</strong> - Pause and retry later</li>
        <li><strong>Network timeouts</strong> - Retry with exponential backoff</li>
        <li><strong>Invalid URLs</strong> - Log and skip problematic entries</li>
        <li><strong>Authentication issues</strong> - Refresh OAuth tokens automatically</li>
      </ul>

      <h3>Logging and Monitoring</h3>
      <p>The workflow includes comprehensive logging to track:</p>
      <ul>
        <li>URLs processed per run</li>
        <li>Successfully submitted URLs</li>
        <li>API errors and retries</li>
        <li>Processing time and performance metrics</li>
      </ul>

      <h2>📈 Optimizing for SEO Impact</h2>
      <p>This automation directly impacts your <Link href="/services/seo" className="text-blue-600 hover:text-blue-800">SEO performance</Link> by:</p>
      <ul>
        <li><strong>Faster Discovery:</strong> New content gets indexed quicker</li>
        <li><strong>Improved Crawl Efficiency:</strong> Google focuses on fresh content</li>
        <li><strong>Better Rankings:</strong> Faster indexing can lead to earlier ranking opportunities</li>
        <li><strong>Reduced Manual Work:</strong> More time for content creation and optimization</li>
      </ul>

      <h3>Integration with Content Strategy</h3>
      <p>Combine this automation with your broader <Link href="/blueprints/seo" className="text-blue-600 hover:text-blue-800">SEO strategy</Link> by:</p>
      <ul>
        <li>Prioritizing high-value pages for immediate submission</li>
        <li>Coordinating with content publishing schedules</li>
        <li>Monitoring indexing success rates for content optimization</li>
      </ul>

      <h2>🛠️ Troubleshooting Common Issues</h2>
      <h3>Authentication Problems</h3>
      <p>OAuth token issues are common. Here's how to resolve them:</p>
      <ul>
        <li>Ensure proper scopes are configured</li>
        <li>Check token expiration and refresh mechanisms</li>
        <li>Verify domain ownership in Search Console</li>
        <li>Confirm API is enabled in Google Cloud Console</li>
      </ul>

      <h3>API Rate Limits</h3>
      <p>Google Search Console API has strict rate limits. Best practices include:</p>
      <ul>
        <li>Implementing proper delays between requests</li>
        <li>Batching requests efficiently</li>
        <li>Monitoring quota usage</li>
        <li>Setting up retry logic with exponential backoff</li>
      </ul>

      <h3>Sitemap Processing Errors</h3>
      <p>Common sitemap issues and solutions:</p>
      <ul>
        <li><strong>Invalid XML:</strong> Validate sitemap format before processing</li>
        <li><strong>Large sitemaps:</strong> Implement pagination or splitting</li>
        <li><strong>Dynamic URLs:</strong> Filter out unwanted URL patterns</li>
        <li><strong>Encoding issues:</strong> Handle special characters properly</li>
      </ul>

      <h2>📊 Performance Monitoring</h2>
      <p>Track the effectiveness of your auto-indexing system:</p>
      <ul>
        <li><strong>Indexing Speed:</strong> Compare before/after implementation</li>
        <li><strong>Success Rates:</strong> Monitor percentage of successfully indexed URLs</li>
        <li><strong>API Usage:</strong> Track quota consumption and optimize</li>
        <li><strong>Error Patterns:</strong> Identify recurring issues for improvement</li>
      </ul>

      <h2>🔗 Integration with Other Tools</h2>
      <p>Enhance the workflow by connecting with other marketing tools:</p>
      <ul>
        <li><strong><Link href="/tools" className="text-blue-600 hover:text-blue-800">Analytics Tools</Link>:</strong> Track indexing impact on traffic</li>
        <li><strong>Content Management:</strong> Trigger indexing on new post publication</li>
        <li><strong>Slack/Discord:</strong> Get notifications of indexing status</li>
        <li><strong>Google Sheets:</strong> Log results for reporting and analysis</li>
      </ul>

      <h2>⚡ Advanced Workflow Enhancements</h2>
      <h3>Priority-Based Submission</h3>
      <p>Implement logic to prioritize certain URL types:</p>
      <CodeBlock title="Priority Logic Example">
{`// Priority-based URL submission
const url = $json.loc;
let priority = 1; // Default priority

// High priority for product pages
if (url.includes('/products/')) priority = 5;
// Medium priority for blog posts
if (url.includes('/blog/')) priority = 3;
// Low priority for static pages
if (url.includes('/about') || url.includes('/contact')) priority = 1;

return {
  url: url,
  priority: priority,
  shouldSubmit: priority >= 3
};`}
      </CodeBlock>

      <h3>Content Freshness Detection</h3>
      <p>Only submit URLs that have been recently updated or created:</p>
      <ul>
        <li>Compare lastmod dates from sitemap</li>
        <li>Set threshold for "fresh" content (e.g., 24-48 hours)</li>
        <li>Skip old content that's likely already indexed</li>
      </ul>

      <h2>📈 Measuring ROI and Impact</h2>
      <p>Quantify the benefits of your automated indexing system:</p>
      <ul>
        <li><strong>Time Saved:</strong> Calculate hours no longer spent on manual submission</li>
        <li><strong>Faster Rankings:</strong> Compare time-to-rank before and after automation</li>
        <li><strong>Increased Traffic:</strong> Monitor organic traffic improvements</li>
        <li><strong>Content Performance:</strong> Track how quickly new content starts performing</li>
      </ul>

      <h2>🔒 Security and Best Practices</h2>
      <p>Ensure your automation follows security best practices:</p>
      <ul>
        <li><strong>Secure Credential Storage:</strong> Use n8n's encrypted credential system</li>
        <li><strong>Token Rotation:</strong> Implement automatic OAuth token refresh</li>
        <li><strong>Access Logging:</strong> Monitor API access and usage patterns</li>
        <li><strong>Error Notifications:</strong> Set up alerts for authentication failures</li>
      </ul>

      <h2>🚀 Scaling Your Automation</h2>
      <p>As your site grows, scale your indexing automation:</p>
      <ul>
        <li><strong>Multiple Domains:</strong> Extend workflow to handle multiple properties</li>
        <li><strong>Regional Sitemaps:</strong> Process country-specific sitemaps separately</li>
        <li><strong>Content Type Segmentation:</strong> Different strategies for different content types</li>
        <li><strong>Performance Optimization:</strong> Parallel processing for large URL sets</li>
      </ul>

      <h2>🎁 Download the Complete Workflow</h2>
      <p>🔗 <strong>Get the ready-to-use n8n workflow template</strong></p>
      <p>📋 <strong>Includes step-by-step setup guide and configuration instructions</strong></p>
      <p>🔧 <strong>Customizable for your specific needs and site structure</strong></p>

      <h2>📺 Watch the Complete Tutorial</h2>
      <p>The video tutorial provides a comprehensive walkthrough of the entire setup process, including:</p>
      <ul>
        <li>Live Google Cloud Console configuration</li>
        <li>Step-by-step n8n workflow building</li>
        <li>Real-time testing and troubleshooting</li>
        <li>Advanced customization options</li>
      </ul>
      <p>You'll see exactly how to avoid common pitfalls and ensure your automation runs smoothly from day one.</p>

      <h2>🤝 Need Help with Implementation?</h2>
      <p>If you want this automation set up and customized for your specific site, I offer <Link href="/services" className="text-blue-600 hover:text-blue-800">implementation services</Link> that include:</p>
      <ul>
        <li>Complete workflow setup and configuration</li>
        <li>Custom integrations with your existing tools</li>
        <li>Performance optimization and monitoring setup</li>
        <li>Ongoing support and maintenance</li>
      </ul>
    </>
  );
}

const post = {
  id: 11,
  title: "Automate Google Search Console Indexing with n8n - Complete Tutorial",
  description: "Learn how to build a complete automated indexing system for Google Search Console using n8n workflow automation. Stop manually submitting URLs and let automation handle the indexing process with smart conditional logic, error handling, and performance optimization.",
  videoId: "rDOCbrQtTp8",
  publishDate: "2025-08-10",
  readTime: "25 min read",
  category: "SEO Automation",
  thumbnail: indexingImage,
  tags: ["N8N", "Google Search Console", "SEO", "Automation", "Indexing", "Workflow", "API", "OAuth"]
};

function TableOfContents() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'the-manual-indexing-problem', title: '🎯 The Manual Indexing Problem', level: 2 },
    { id: 'prerequisites', title: '🔧 Prerequisites', level: 2 },
    { id: 'setting-up-google-api-credentials', title: '⚙️ Setting Up Google API Credentials', level: 2 },
    { id: 'creating-google-cloud-project', title: 'Creating Google Cloud Project', level: 3 },
    { id: 'oauth-configuration', title: 'OAuth Configuration', level: 3 },
    { id: 'building-the-n8n-workflow', title: '🔄 Building the N8N Workflow', level: 2 },
    { id: 'schedule-trigger', title: 'Schedule Trigger', level: 3 },
    { id: 'sitemap-processing', title: 'Sitemap Processing', level: 3 },
    { id: 'google-search-console-integration', title: 'Google Search Console Integration', level: 3 },
    { id: 'conditional-logic-for-smart-indexing', title: '📊 Conditional Logic for Smart Indexing', level: 2 },
    { id: 'indexing-status-check', title: 'Indexing Status Check', level: 3 },
    { id: 'advanced-features', title: '🚀 Advanced Features', level: 2 },
    { id: 'batch-processing', title: 'Batch Processing', level: 3 },
    { id: 'error-handling', title: 'Error Handling', level: 3 },
    { id: 'logging-and-monitoring', title: 'Logging and Monitoring', level: 3 },
    { id: 'optimizing-for-seo-impact', title: '📈 Optimizing for SEO Impact', level: 2 },
    { id: 'integration-with-content-strategy', title: 'Integration with Content Strategy', level: 3 },
    { id: 'troubleshooting-common-issues', title: '🛠️ Troubleshooting Common Issues', level: 2 },
    { id: 'authentication-problems', title: 'Authentication Problems', level: 3 },
    { id: 'api-rate-limits', title: 'API Rate Limits', level: 3 },
    { id: 'sitemap-processing-errors', title: 'Sitemap Processing Errors', level: 3 },
    { id: 'performance-monitoring', title: '📊 Performance Monitoring', level: 2 },
    { id: 'integration-with-other-tools', title: '🔗 Integration with Other Tools', level: 2 },
    { id: 'advanced-workflow-enhancements', title: '⚡ Advanced Workflow Enhancements', level: 2 },
    { id: 'priority-based-submission', title: 'Priority-Based Submission', level: 3 },
    { id: 'content-freshness-detection', title: 'Content Freshness Detection', level: 3 },
    { id: 'measuring-roi-and-impact', title: '📈 Measuring ROI and Impact', level: 2 },
    { id: 'security-and-best-practices', title: '🔒 Security and Best Practices', level: 2 },
    { id: 'scaling-your-automation', title: '🚀 Scaling Your Automation', level: 2 },
    { id: 'download-the-complete-workflow', title: '🎁 Download the Complete Workflow', level: 2 },
    { id: 'watch-the-complete-tutorial', title: '📺 Watch the Complete Tutorial', level: 2 },
    { id: 'need-help-with-implementation', title: '🤝 Need Help with Implementation?', level: 2 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block text-sm transition-colors ${
              activeSection === section.id
                ? 'text-blue-600 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            } ${section.level === 3 ? 'ml-4' : ''}`}
          >
            {section.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 lg:w-2/3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <Link href="/youtube" className="hover:text-blue-600 transition-colors">
                  YouTube
                </Link>
                <span>•</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.publishDate}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* YouTube Video */}
            <div className="mb-8 relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src={`https://www.youtube.com/embed/${post.videoId}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                title="Automate Google Search Console Indexing with n8n - Complete Tutorial"
              ></iframe>
            </div>
            
            {/* Blog Content */}
            <div className="prose prose-lg max-w-none text-gray-800 mb-12 blog-content">
              <BlogContent />
            </div>
            
            <style jsx>{`
              .blog-content :global(h2) {
                font-size: 1.875rem !important;
                font-weight: 700 !important;
                color: #1f2937 !important;
                margin-top: 2.5rem !important;
                margin-bottom: 1.25rem !important;
                line-height: 1.2 !important;
                border-bottom: 2px solid #e5e7eb !important;
                padding-bottom: 0.5rem !important;
              }
              .blog-content :global(h3) {
                font-size: 1.5rem !important;
                font-weight: 600 !important;
                color: #374151 !important;
                margin-top: 2rem !important;
                margin-bottom: 1rem !important;
                line-height: 1.3 !important;
              }
              .blog-content :global(h2:first-of-type) {
                margin-top: 1rem !important;
              }
              .blog-content :global(a) {
                color: #2563eb !important;
                text-decoration: underline !important;
              }
              .blog-content :global(a:hover) {
                color: #1d4ed8 !important;
              }
            `}</style>
            
            {/* Author Bio */}
            <div className="p-6 bg-gray-50 rounded-lg flex items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={authorImage} alt="Albin Hot" width={80} height={80} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-black">About the Author</h3>
                <h4 className="text-lg font-medium mb-3 text-gray-800">Albin Hot</h4>
                <p className="text-gray-700 mb-4">
                  I am a 23 year old entrepreneur with multiple successful online ecommerce stores built through SEO. 
                  I am now helping others achieve the same success through my digital marketing expertise and proven strategies.
                </p>
                <div className="flex gap-3">
                  <Button as={Link} href="/work-with-me" className="text-sm">Work with me</Button>
                  <Button as={Link} href="/youtube" variant="secondary" className="text-sm">More Articles</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Table of Contents */}
          <div className="hidden lg:block w-1/3">
            <div className="sticky top-8">
              <TableOfContents />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}