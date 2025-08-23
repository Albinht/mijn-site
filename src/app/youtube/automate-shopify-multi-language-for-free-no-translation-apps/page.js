'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import EmailGatedDownload from '../../../components/EmailGatedDownload';
import authorImage from '../../../assets/author.png';
import shopifyTranslateImage from '../../../assets/SCR-20250806-pnlp.png';

const post = {
    id: 13,
    title: "UPDATED: Automate Shopify Multi Language for Free - no need for Shopify translation apps",
    excerpt: "Discover how to automate multi-language support for your Shopify store without expensive translation apps. Learn advanced automation techniques using n8n, AI translation, and smart workflows to scale internationally with minimal manual work.",
    content: `
      <h2>Why This Free Automation Method Beats Expensive Translation Apps</h2>
      <p>Most Shopify translation apps charge $20-50+ per month and lock you into their ecosystem. At <a href="https://niblah.com" target="_blank">Niblah</a>, we've discovered a completely free method that actually works better than most paid solutions. This approach gives you:</p>
      <ul>
        <li>Complete control over your translation workflow</li>
        <li>AI-powered translations that understand context and brand voice</li>
        <li>Automatic updates when you add new products or content</li>
        <li>Support for unlimited languages without monthly fees</li>
        <li>Custom logic for handling product variants, collections, and blog posts</li>
      </ul>

      <h2>The Complete Automation Setup</h2>
      <p>This method combines Shopify's native translation features with powerful automation tools to create a seamless multi-language experience. Here's exactly how it works:</p>

      <h3>Core Components You'll Need</h3>
      <ul>
        <li><strong>n8n (Free):</strong> For workflow automation</li>
        <li><strong>OpenRouter API:</strong> For high-quality AI translations ($0.01-0.10 per 1000 words)</li>
        <li><strong>Shopify Admin API:</strong> For reading and updating store content</li>
        <li><strong>Google Sheets (Optional):</strong> For translation review and bulk editing</li>
      </ul>

      <h3>Step 1: Setting Up Your Translation Workflow</h3>
      <p>First, we'll create an n8n workflow that monitors your Shopify store for new content and automatically triggers translations:</p>
      <ol>
        <li>Install n8n locally or use their cloud version</li>
        <li>Create a webhook that listens for Shopify product updates</li>
        <li>Set up Shopify Admin API credentials with proper permissions</li>
        <li>Configure OpenRouter API for AI translations (supports GPT-4, Claude, and other models)</li>
      </ol>

      <h3>Step 2: Building the Translation Logic</h3>
      <p>The magic happens in how we structure the translation workflow. Instead of basic machine translation, we use AI that understands:</p>
      <ul>
        <li>Your brand voice and tone</li>
        <li>Product-specific terminology</li>
        <li>SEO optimization for each target market</li>
        <li>Cultural adaptation beyond literal translation</li>
      </ul>

      <h2>Advanced Automation Features</h2>
      <p>This isn't just basic translation - we're building a complete international expansion system:</p>

      <h3>Smart Content Detection</h3>
      <p>The workflow automatically identifies when new content needs translation:</p>
      <ul>
        <li>New products added to your store</li>
        <li>Updated product descriptions or specifications</li>
        <li>New blog posts or pages</li>
        <li>Collection descriptions and metadata</li>
      </ul>

      <h3>Quality Control & Review Process</h3>
      <p>Rather than blindly pushing translations live, the system includes a review process:</p>
      <ol>
        <li>AI generates initial translations</li>
        <li>Content is saved to Google Sheets for review</li>
        <li>Conditional logic checks for specific keywords or phrases</li>
        <li>Approved translations are automatically published to Shopify</li>
        <li>Flagged content waits for manual review</li>
      </ol>

      <h2>SEO Optimization for International Markets</h2>
      <p>This method doesn't just translate - it optimizes for international SEO success:</p>

      <h3>Market-Specific Keyword Research</h3>
      <p>The AI considers local search behavior and terminology:</p>
      <ul>
        <li>Adapts product titles for local search patterns</li>
        <li>Optimizes meta descriptions for each market</li>
        <li>Includes region-specific keywords and phrases</li>
        <li>Adjusts content length based on local preferences</li>
      </ul>

      <h3>URL Structure & Hreflang Implementation</h3>
      <p>Proper technical SEO setup is crucial for international success. The automation handles:</p>
      <ul>
        <li>Creating clean, localized URL structures</li>
        <li>Setting up proper hreflang tags</li>
        <li>Managing canonical URLs across language versions</li>
        <li>Optimizing site structure for each market</li>
      </ul>

      <h2>Cost Comparison: Free vs Paid Solutions</h2>
      <p>Let's break down the real costs:</p>
      
      <h3>Typical Translation App Costs:</h3>
      <ul>
        <li>Basic plans: $20-30/month (limited languages/products)</li>
        <li>Professional plans: $50-100/month</li>
        <li>Enterprise plans: $200+/month</li>
        <li>Per-translation fees: $0.05-0.20 per word</li>
      </ul>

      <h3>Our Free Automation Method:</h3>
      <ul>
        <li>n8n: Free (self-hosted) or $20/month (cloud)</li>
        <li>OpenRouter API: ~$1-5/month for most stores</li>
        <li>Setup time: 4-8 hours initially</li>
        <li>Ongoing maintenance: Minimal</li>
      </ul>

      <h2>Implementation Timeline & Results</h2>
      <p>Based on our experience implementing this for multiple Shopify stores:</p>

      <h3>Week 1: Foundation Setup</h3>
      <ul>
        <li>Configure n8n workflow and API connections</li>
        <li>Test with a small product subset</li>
        <li>Set up quality control processes</li>
      </ul>

      <h3>Week 2-3: Full Implementation</h3>
      <ul>
        <li>Translate existing product catalog</li>
        <li>Set up automated triggers for new content</li>
        <li>Implement SEO optimizations</li>
      </ul>

      <h3>Month 1-2: Optimization & Growth</h3>
      <ul>
        <li>Fine-tune AI prompts for better translations</li>
        <li>Analyze performance in new markets</li>
        <li>Expand to additional languages</li>
      </ul>

      <h2>Advanced Tips for Maximum Success</h2>
      
      <h3>AI Prompt Engineering for Better Translations</h3>
      <p>The quality of your translations depends heavily on how you prompt the AI. Here are proven prompt templates:</p>
      <ul>
        <li>Include brand guidelines and tone of voice</li>
        <li>Provide context about your target audience</li>
        <li>Specify SEO requirements for each market</li>
        <li>Include examples of high-quality translations</li>
      </ul>

      <h3>Market Research Integration</h3>
      <p>Before translating, research each target market:</p>
      <ul>
        <li>Local competition and pricing strategies</li>
        <li>Cultural preferences and taboos</li>
        <li>Popular payment methods and shipping expectations</li>
        <li>Seasonal trends and shopping behavior</li>
      </ul>

      <h3>Performance Monitoring & Optimization</h3>
      <p>Set up tracking to measure success in each market:</p>
      <ul>
        <li>Traffic growth by language/region</li>
        <li>Conversion rates for translated pages</li>
        <li>Revenue attribution by market</li>
        <li>Customer feedback on translation quality</li>
      </ul>

      <h2>Troubleshooting Common Issues</h2>
      
      <h3>API Rate Limits</h3>
      <p>Shopify and translation APIs have rate limits. Handle these with:</p>
      <ul>
        <li>Built-in delays between API calls</li>
        <li>Retry logic for failed requests</li>
        <li>Batch processing for large catalogs</li>
      </ul>

      <h3>Translation Quality Control</h3>
      <p>Maintain high standards with automated checks:</p>
      <ul>
        <li>Character length validation for UI elements</li>
        <li>Brand name consistency checks</li>
        <li>Technical specification accuracy</li>
        <li>Cultural appropriateness verification</li>
      </ul>

      <h2>Scaling to Multiple Markets</h2>
      <p>Once your first market is successful, expanding becomes much easier:</p>

      <h3>Priority Market Selection</h3>
      <p>Use data to choose your next markets:</p>
      <ul>
        <li>Existing organic traffic by country</li>
        <li>Market size and competition analysis</li>
        <li>Shipping and logistics feasibility</li>
        <li>Legal and regulatory requirements</li>
      </ul>

      <h3>Automated Market Entry</h3>
      <p>With the foundation in place, new markets require minimal effort:</p>
      <ul>
        <li>Clone existing workflows for new languages</li>
        <li>Adjust AI prompts for cultural differences</li>
        <li>Set up market-specific tracking</li>
        <li>Launch with existing product catalog</li>
      </ul>

      <h2>Integration with Existing Marketing Stack</h2>
      <p>This automation method works seamlessly with your current tools:</p>

      <h3>Email Marketing Integration</h3>
      <p>Connect with platforms like <a href="/blueprints/klaviyo" target="_blank">Klaviyo</a> to:</p>
      <ul>
        <li>Automatically translate email templates</li>
        <li>Segment customers by language preference</li>
        <li>Personalize campaigns for each market</li>
      </ul>

      <h3>Paid Advertising Support</h3>
      <p>Use translated content for <a href="/services/google-ads" target="_blank">Google Ads</a> and <a href="/blueprints/meta" target="_blank">Meta advertising</a>:</p>
      <ul>
        <li>Generate ad copy in multiple languages</li>
        <li>Create market-specific landing pages</li>
        <li>Optimize for local search terms</li>
      </ul>

      <h2>Why This Matters for Your Business</h2>
      <p>International expansion isn't just about translation - it's about sustainable growth. This automated approach gives you:</p>
      <ul>
        <li><strong>Scalability:</strong> Add new markets without proportional cost increases</li>
        <li><strong>Consistency:</strong> Maintain brand voice across all languages</li>
        <li><strong>Speed:</strong> Launch in new markets in weeks, not months</li>
        <li><strong>Control:</strong> Own your translation process and data</li>
        <li><strong>ROI:</strong> Significantly lower costs than traditional methods</li>
      </ul>

      <p>At Niblah, we've used this exact method to help Shopify stores expand internationally with minimal overhead. The result? Most stores see their first international sales within 30 days and achieve 20-40% revenue growth within 6 months.</p>
    `,
    videoId: "n34TNM1Gu6o",
    publishDate: "2025-08-23",
    readTime: "25 min read",
    category: "Shopify Automation",
    thumbnail: shopifyTranslateImage,
    tags: ["Shopify", "Automation", "Translation", "n8n", "AI", "International", "E-commerce", "SEO"]
};

function TableOfContents({ content }) {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const foundHeadings = Array.from(tempDiv.querySelectorAll('h2, h3'))
            .map(h => ({
                level: parseInt(h.tagName.substring(1)),
                text: h.innerText,
                id: h.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            }));
        
        foundHeadings.forEach(h => {
            const elements = Array.from(tempDiv.querySelectorAll(`h${h.level}`));
            const element = elements.find(el => el.innerText === h.text);
            if (element) {
                element.id = h.id;
            }
        });

        setHeadings(foundHeadings);
    }, [content]);

    if (headings.length === 0) return null;

    return (
        <div className="sticky top-24 p-6 bg-gray-50 rounded-lg border-l-4 border-purple-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Table of Contents</h3>
            <ul className="space-y-2">
                {headings.map(heading => (
                    <li key={heading.id} className={`${heading.level === 3 ? 'ml-4' : ''}`}>
                        <a href={`#${heading.id}`} className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function BlogPostPage() {
    const [processedContent, setProcessedContent] = useState('');

    useEffect(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content;
        const headings = Array.from(tempDiv.querySelectorAll('h2, h3'));
        headings.forEach(h => {
            const id = h.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            h.id = id;
        });
        setProcessedContent(tempDiv.innerHTML);
    }, []);

    return (
        <main className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area */}
                    <div className="w-full lg:w-2/3">
                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">{post.title}</h1>
                        
                        {/* YouTube Video */}
                        <div className="mb-8 relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe 
                                src={`https://www.youtube.com/embed/${post.videoId}`}
                                style={{ border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            ></iframe>
                        </div>

                        {/* Download Lead Magnet */}
                        <div className="mb-8">
                            <EmailGatedDownload
                                title="🎁 FREE: Complete Shopify Multi-Language Automation Guide"
                                description="Download our detailed guide with step-by-step plan, n8n templates and all the code you need for your Shopify store automation."
                                downloadEndpoint="/api/downloads/shopify-multilanguage"
                                downloadType="shopify-multilanguage-guide"
                                buttonText="Download Free Guide"
                                features={[
                                    "Complete n8n workflow templates",
                                    "AI translation prompts and setup",
                                    "Shopify API configuration steps",
                                    "Cost-saving strategies",
                                    "SEO optimization per language",
                                    "Bonus: Email marketing integration"
                                ]}
                            />
                        </div>
                        
                        {/* Blog Content */}
                        <div className="prose prose-lg max-w-none text-gray-800 mb-12 blog-content" dangerouslySetInnerHTML={{ __html: processedContent }} />
                        
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
                                color: #7c3aed !important;
                                text-decoration: underline !important;
                            }
                            .blog-content :global(a:hover) {
                                color: #5b21b6 !important;
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
                                    I am now helping others achieve the same success through my digital marketing expertise and proven strategies at Niblah.com.
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
                            <TableOfContents content={processedContent} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}