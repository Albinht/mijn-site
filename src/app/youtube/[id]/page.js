'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import Button from '../../../components/Button';
import avatarImage from '../../../assets/avatar.png';
import productDescriptionsImage from '../../../assets/Product descriptions.png';
import ecomSeoFrameworkImage from '../../../assets/E-com SEO framework.png';
import translateVideoImage from '../../../assets/translate video.png';

// Blog posts data - same as main page (in real app, this would come from a CMS or database)
const blogPosts = [
  {
    id: 1,
    title: "How to Write Product Descriptions That Rank on Google",
    excerpt: "Master the art of writing product descriptions that not only convert customers but also rank high on Google. Learn the exact framework I use to optimize product pages for both users and search engines.",
    content: `
      <h2>Why Product Descriptions Matter for SEO</h2>
      <p>Most e-commerce stores treat product descriptions as an afterthought. This is a huge mistake. Well-optimized product descriptions can:</p>
      <ul>
        <li>Rank for high-intent commercial keywords</li>
        <li>Increase conversion rates by 30-50%</li>
        <li>Reduce bounce rates and improve user engagement</li>
        <li>Build topical authority for your brand</li>
      </ul>

      <h2>My Product Description Framework</h2>
      <p>I use a proven 5-step framework for writing product descriptions that rank and convert:</p>
      
      <h3>1. Keyword Research & Intent Analysis</h3>
      <p>Before writing a single word, I research:</p>
      <ul>
        <li>Primary commercial keywords (product name + modifiers)</li>
        <li>Secondary keywords (features, benefits, use cases)</li>
        <li>Long-tail keywords (questions customers ask)</li>
        <li>Competitor analysis to find content gaps</li>
      </ul>

      <h3>2. Structure for Scanability</h3>
      <p>Online shoppers scan, they don't read. Structure your descriptions with:</p>
      <ul>
        <li>Compelling headline with primary keyword</li>
        <li>Bullet points for key features</li>
        <li>Short paragraphs (2-3 sentences max)</li>
        <li>Bold text for important benefits</li>
      </ul>

      <h3>3. Benefits Over Features</h3>
      <p>Don't just list what the product has, explain what it does for the customer:</p>
      <ul>
        <li>Feature: "Waterproof material"</li>
        <li>Benefit: "Stay dry and comfortable in any weather"</li>
      </ul>

      <h3>4. Social Proof Integration</h3>
      <p>Weave social proof naturally into descriptions:</p>
      <ul>
        <li>"Trusted by 10,000+ customers"</li>
        <li>"#1 bestseller in category"</li>
        <li>"Featured in [publication]"</li>
      </ul>

      <h3>5. Technical SEO Optimization</h3>
      <p>Don't forget the technical aspects:</p>
      <ul>
        <li>Include primary keyword in first 100 words</li>
        <li>Use semantic keywords naturally</li>
        <li>Optimize meta descriptions</li>
        <li>Add structured data markup</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ol>
        <li>Copying manufacturer descriptions</li>
        <li>Keyword stuffing</li>
        <li>Focusing only on features</li>
        <li>Making descriptions too short or too long</li>
        <li>Ignoring mobile users</li>
      </ol>

      <h2>Results You Can Expect</h2>
      <p>When you implement this framework correctly:</p>
      <ul>
        <li>30-50% increase in organic traffic to product pages</li>
        <li>20-40% improvement in conversion rates</li>
        <li>Better rankings for commercial keywords</li>
        <li>Reduced bounce rates and increased time on page</li>
      </ul>
    `,
    videoId: "k2-w1UWjBEU",
    publishDate: "2024-01-20",
    readTime: "12 min read",
    category: "E-commerce SEO",
    thumbnail: productDescriptionsImage,
    tags: ["SEO", "E-commerce", "Product Descriptions", "Copywriting"]
  },
  {
    id: 2,
    title: "Real Ecommerce SEO: My Framework for Long-Term Organic Growth",
    excerpt: "Discover my proven e-commerce SEO framework that drives sustainable organic growth. From technical optimization to content strategy, learn the complete system I use to scale online stores.",
    content: `
      <h2>Why Most E-commerce SEO Fails</h2>
      <p>Most e-commerce stores approach SEO as a one-time project. They optimize a few product pages, write some blog posts, and expect results. This approach fails because e-commerce SEO requires a systematic, long-term framework.</p>

      <h2>My 5-Phase E-commerce SEO Framework</h2>
      <p>After scaling dozens of online stores, I've developed a proven framework that delivers sustainable organic growth. Here's the complete system:</p>

      <h3>Phase 1: Technical Foundation (Weeks 1-4)</h3>
      <p>Before anything else, your technical foundation must be solid:</p>
      <ul>
        <li><strong>Site Speed Optimization:</strong> Target under 3 seconds load time</li>
        <li><strong>Mobile Optimization:</strong> Ensure perfect mobile experience</li>
        <li><strong>URL Structure:</strong> Clean, keyword-rich URLs for all pages</li>
        <li><strong>Internal Linking:</strong> Strategic linking between products and categories</li>
        <li><strong>Schema Markup:</strong> Product, review, and breadcrumb schema</li>
      </ul>

      <h3>Phase 2: Keyword Research & Strategy (Weeks 5-6)</h3>
      <p>E-commerce keyword research is different from blog SEO:</p>
      <ul>
        <li><strong>Commercial Keywords:</strong> Product names, categories, and buying terms</li>
        <li><strong>Long-tail Opportunities:</strong> Specific product variations and questions</li>
        <li><strong>Competitor Gap Analysis:</strong> Find keywords competitors are missing</li>
      </ul>

      <h3>Phase 3: On-Page Optimization (Weeks 7-10)</h3>
      <p>Optimize every page type for maximum impact:</p>
      <ul>
        <li><strong>Product Pages:</strong> Unique descriptions, optimized titles, rich media</li>
        <li><strong>Category Pages:</strong> Comprehensive guides with filtering options</li>
        <li><strong>Collection Pages:</strong> Curated product groupings with SEO focus</li>
        <li><strong>Blog Content:</strong> Educational content that drives traffic and links</li>
      </ul>

      <h3>Phase 4: Content Strategy (Weeks 11-16)</h3>
      <p>Content is what separates winners from losers in e-commerce SEO:</p>
      <ul>
        <li><strong>Buying Guides:</strong> Comprehensive guides for product categories</li>
        <li><strong>Comparison Content:</strong> "X vs Y" articles for competitive terms</li>
        <li><strong>FAQ Pages:</strong> Answer common customer questions</li>
        <li><strong>User-Generated Content:</strong> Reviews, Q&A, and customer photos</li>
      </ul>

      <h3>Phase 5: Link Building & Authority (Ongoing)</h3>
      <p>Build domain authority through strategic link acquisition:</p>
      <ul>
        <li><strong>Digital PR:</strong> Newsworthy campaigns and studies</li>
        <li><strong>Resource Page Links:</strong> Get listed on industry resource pages</li>
        <li><strong>Broken Link Building:</strong> Replace broken links with your content</li>
        <li><strong>Partnership Links:</strong> Strategic partnerships with complementary brands</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Track these KPIs to measure your e-commerce SEO success:</p>
      <ul>
        <li><strong>Organic Revenue:</strong> Revenue directly from organic search</li>
        <li><strong>Organic Traffic Growth:</strong> Month-over-month traffic increases</li>
        <li><strong>Keyword Rankings:</strong> Rankings for target commercial keywords</li>
        <li><strong>Conversion Rate:</strong> Organic traffic conversion performance</li>
        <li><strong>Page Load Speed:</strong> Technical performance metrics</li>
      </ul>

      <h2>Timeline & Expectations</h2>
      <p>Here's what you can expect when following this framework:</p>
      <ul>
        <li><strong>Months 1-3:</strong> Technical improvements, foundation building</li>
        <li><strong>Months 4-6:</strong> Initial ranking improvements, traffic growth</li>
        <li><strong>Months 7-12:</strong> Significant traffic and revenue increases</li>
        <li><strong>Year 2+:</strong> Compound growth and market dominance</li>
      </ul>
    `,
    videoId: "7cshITRgi10&t",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    category: "Google Ads",
    thumbnail: "/api/placeholder/600/400",
    tags: ["Google Ads", "PPC", "ROI", "Optimization"]
  },
  {
    id: 3,
    title: "Shopify Translate & Adapt: Add Unlimited Languages – Bulk Translation Hack",
    excerpt: "Unlock global markets with this Shopify translation hack! Learn how to add unlimited languages to your store using Translate & Adapt, plus my bulk translation method to save hours of work.",
    content: `
      <h2>Why Shopify Translate & Adapt is a Game Changer</h2>
      <p>Shopify's Translate & Adapt app is completely free and allows you to add unlimited languages to your store. Most store owners don't realize how powerful this tool is for international expansion.</p>

      <h2>Setting Up Translate & Adapt</h2>
      <p>First, let's get the app installed and configured:</p>

      <h3>Step 1: Install the App</h3>
      <p>Go to the Shopify App Store and search for "Translate & Adapt". Install it for free - no monthly fees, no limits on languages.</p>

      <h3>Step 2: Choose Your Languages</h3>
      <p>Select the languages you want to add to your store. I recommend starting with:</p>
      <ul>
        <li>Spanish (550M+ speakers worldwide)</li>
        <li>French (280M+ speakers)</li>
        <li>German (100M+ speakers, high purchasing power)</li>
        <li>Portuguese (260M+ speakers)</li>
      </ul>

      <h3>Step 3: Configure Language Settings</h3>
      <p>Set up your language switcher and URL structure:</p>
      <ul>
        <li>Choose subdirectory structure (/es/, /fr/, /de/)</li>
        <li>Enable automatic language detection</li>
        <li>Configure currency settings for each market</li>
      </ul>

      <h2>My Bulk Translation Hack</h2>
      <p>Here's where most people waste hours manually translating. Instead, use this bulk method:</p>

      <h3>Method 1: CSV Export/Import</h3>
      <p>Export your products to CSV, translate in bulk, then re-import:</p>
      <ol>
        <li>Export products from Shopify admin</li>
        <li>Use Google Translate or DeepL for bulk translation</li>
        <li>Clean up translations for accuracy</li>
        <li>Import back into Translate & Adapt</li>
      </ol>

      <h3>Method 2: API Integration</h3>
      <p>For advanced users, connect translation APIs:</p>
      <ul>
        <li>Google Translate API for cost-effective translations</li>
        <li>DeepL API for higher quality translations</li>
        <li>Azure Translator for enterprise-level accuracy</li>
      </ul>

      <h2>Optimizing Translations for SEO</h2>
      <p>Don't just translate - optimize for local search:</p>
      <ul>
        <li><strong>Local Keywords:</strong> Research keywords in each language</li>
        <li><strong>Cultural Adaptation:</strong> Adapt content for local culture</li>
        <li><strong>Local Currency:</strong> Show prices in local currency</li>
        <li><strong>Local Shipping:</strong> Configure shipping for each region</li>
      </ul>

      <h2>Advanced Tips</h2>
      <ol>
        <li><strong>Use Metafields:</strong> Translate custom metafields for rich content</li>
        <li><strong>Translate Images:</strong> Use alt text in local languages</li>
        <li><strong>Local Payment Methods:</strong> Add region-specific payment options</li>
        <li><strong>Customer Support:</strong> Prepare support in multiple languages</li>
      </ol>

      <h2>Results You Can Expect</h2>
      <p>When you properly implement multi-language stores:</p>
      <ul>
        <li>30-50% increase in international traffic</li>
        <li>20-40% improvement in conversion rates for international visitors</li>
        <li>Access to billions of non-English speaking customers</li>
        <li>Competitive advantage in global markets</li>
      </ul>
    `,
    videoId: "1bWKz69cBIU",
    publishDate: "2024-01-10",
    readTime: "15 min read",
    category: "Shopify Tutorial",
    thumbnail: translateVideoImage,
    tags: ["Shopify", "Translation", "International", "Tutorial"]
  },
  {
    id: 4,
    title: "Real Ecommerce SEO: My Framework for Long-Term Organic Growth",
    excerpt: "Discover my proven e-commerce SEO framework that drives sustainable organic growth. From technical optimization to content strategy, learn the complete system I use to scale online stores.",
    content: `
      <h2>Why Most E-commerce SEO Fails</h2>
      <p>Most e-commerce stores approach SEO wrong. They focus on quick wins instead of building a sustainable foundation. This leads to:</p>
      <ul>
        <li>Temporary rankings that disappear with algorithm updates</li>
        <li>High bounce rates and poor user experience</li>
        <li>Wasted resources on low-impact activities</li>
        <li>Inconsistent organic growth</li>
      </ul>

      <h2>My E-commerce SEO Framework</h2>
      <p>I've developed a systematic approach that focuses on long-term, sustainable growth. Here's the complete framework:</p>
      
      <h3>Phase 1: Technical Foundation (Weeks 1-4)</h3>
      <p>Before anything else, we need a solid technical foundation:</p>
      <ul>
        <li><strong>Site Speed Optimization:</strong> Target under 3 seconds load time</li>
        <li><strong>Mobile-First Design:</strong> Ensure perfect mobile experience</li>
        <li><strong>URL Structure:</strong> Clean, descriptive URLs with proper hierarchy</li>
        <li><strong>Internal Linking:</strong> Strategic link architecture for authority flow</li>
        <li><strong>Schema Markup:</strong> Product, review, and breadcrumb schemas</li>
      </ul>

      <h3>Phase 2: Keyword Research & Strategy (Weeks 5-6)</h3>
      <p>Strategic keyword research is the backbone of e-commerce SEO:</p>
      <ul>
        <li><strong>Commercial Keywords:</strong> Product and category-focused terms</li>
        <li><strong>Informational Keywords:</strong> "How to" and educational content</li>
        <li><strong>Long-tail Opportunities:</strong> Specific product variations and questions</li>
        <li><strong>Competitor Gap Analysis:</strong> Find keywords competitors are missing</li>
      </ul>

      <h3>Phase 3: On-Page Optimization (Weeks 7-10)</h3>
      <p>Optimize every page type for maximum impact:</p>
      <ul>
        <li><strong>Product Pages:</strong> Unique descriptions, optimized titles, rich media</li>
        <li><strong>Category Pages:</strong> Comprehensive guides with filtering options</li>
        <li><strong>Collection Pages:</strong> Curated product groupings with SEO focus</li>
        <li><strong>Blog Content:</strong> Educational content that drives traffic and links</li>
      </ul>

      <h3>Phase 4: Content Strategy (Weeks 11-16)</h3>
      <p>Content is what separates winners from losers in e-commerce SEO:</p>
      <ul>
        <li><strong>Buying Guides:</strong> Comprehensive guides for product categories</li>
        <li><strong>Comparison Content:</strong> "X vs Y" articles for competitive terms</li>
        <li><strong>FAQ Pages:</strong> Answer common customer questions</li>
        <li><strong>User-Generated Content:</strong> Reviews, Q&A, and customer photos</li>
      </ul>

      <h3>Phase 5: Link Building & Authority (Ongoing)</h3>
      <p>Build domain authority through strategic link acquisition:</p>
      <ul>
        <li><strong>Digital PR:</strong> Newsworthy campaigns and studies</li>
        <li><strong>Resource Page Links:</strong> Get listed on industry resource pages</li>
        <li><strong>Broken Link Building:</strong> Replace broken links with your content</li>
        <li><strong>Partnership Links:</strong> Strategic partnerships with complementary brands</li>
      </ul>

      <h2>Measuring Success</h2>
      <p>Track these KPIs to measure your e-commerce SEO success:</p>
      <ul>
        <li><strong>Organic Revenue:</strong> Revenue directly from organic search</li>
        <li><strong>Organic Traffic Growth:</strong> Month-over-month traffic increases</li>
        <li><strong>Keyword Rankings:</strong> Rankings for target commercial keywords</li>
        <li><strong>Conversion Rate:</strong> Organic traffic conversion performance</li>
        <li><strong>Page Load Speed:</strong> Technical performance metrics</li>
      </ul>

      <h2>Timeline & Expectations</h2>
      <p>Here's what you can expect when following this framework:</p>
      <ul>
        <li><strong>Months 1-3:</strong> Technical improvements, foundation building</li>
        <li><strong>Months 4-6:</strong> Initial ranking improvements, traffic growth</li>
        <li><strong>Months 7-12:</strong> Significant traffic and revenue increases</li>
        <li><strong>Year 2+:</strong> Compound growth and market dominance</li>
      </ul>
    `,
    videoId: "7cshITRgi10",
    publishDate: "2024-01-15",
    readTime: "18 min read",
    category: "E-commerce SEO",
    thumbnail: ecomSeoFrameworkImage,
    tags: ["SEO", "E-commerce", "Framework", "Organic Growth"]
  },
  {
    id: 5,
    title: "Shopify Translate & Adapt: Add Unlimited Languages – Bulk Translation Hack",
    excerpt: "Unlock global markets with this Shopify translation hack! Learn how to add unlimited languages to your store using Translate & Adapt, plus my bulk translation method to save hours of work.",
    content: `
      <h2>Why International Expansion Matters</h2>
      <p>Most Shopify store owners are missing out on 70% of potential customers by only selling in one language. International expansion can:</p>
      <ul>
        <li>Increase revenue by 200-500% within 12 months</li>
        <li>Reduce dependency on single markets</li>
        <li>Access lower competition in international markets</li>
        <li>Build a truly global brand presence</li>
      </ul>

      <h2>The Shopify Translate & Adapt Solution</h2>
      <p>Shopify's native Translate & Adapt app is a game-changer for international expansion. Here's why it's better than third-party solutions:</p>
      
      <h3>Advantages of Native Translation</h3>
      <ul>
        <li><strong>No Monthly Fees:</strong> Unlike apps that charge per language</li>
        <li><strong>Better SEO:</strong> Native URL structure (/en/, /fr/, etc.)</li>
        <li><strong>Faster Loading:</strong> No external scripts slowing down your site</li>
        <li><strong>Complete Control:</strong> Edit any translation manually</li>
        <li><strong>Unlimited Languages:</strong> Add as many languages as you want</li>
      </ul>

      <h2>My Bulk Translation Hack</h2>
      <p>Here's my step-by-step process to translate your entire store in hours, not weeks:</p>
      
      <h3>Step 1: Export Your Content</h3>
      <p>Use Shopify's bulk export feature to get all your content in CSV format:</p>
      <ul>
        <li>Export products with all variants and descriptions</li>
        <li>Export collections and their descriptions</li>
        <li>Export pages and blog posts</li>
        <li>Export navigation menus and policies</li>
      </ul>

      <h3>Step 2: Bulk Translation with AI</h3>
      <p>Use AI tools for initial translation (I recommend Claude or ChatGPT):</p>
      <ul>
        <li>Create translation prompts for each content type</li>
        <li>Include context about your brand and target market</li>
        <li>Specify tone of voice and technical terminology</li>
        <li>Process in batches to maintain consistency</li>
      </ul>

      <h3>Step 3: Quality Control Process</h3>
      <p>Never publish AI translations without review:</p>
      <ul>
        <li>Use native speakers for final review</li>
        <li>Check cultural appropriateness</li>
        <li>Verify technical terms and measurements</li>
        <li>Test checkout process in each language</li>
      </ul>

      <h3>Step 4: SEO Optimization</h3>
      <p>Optimize translated content for local search:</p>
      <ul>
        <li>Research keywords in target language</li>
        <li>Adapt meta titles and descriptions</li>
        <li>Localize currency and pricing</li>
        <li>Add hreflang tags for proper indexing</li>
      </ul>

      <h2>Advanced Tips for Success</h2>
      <ul>
        <li><strong>Start with High-Value Markets:</strong> Focus on countries with strong purchasing power</li>
        <li><strong>Localize Payment Methods:</strong> Add popular local payment options</li>
        <li><strong>Cultural Adaptation:</strong> Adjust images and messaging for local culture</li>
        <li><strong>Legal Compliance:</strong> Update policies for local regulations</li>
        <li><strong>Customer Support:</strong> Provide support in local languages</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ol>
        <li>Using automatic translation without human review</li>
        <li>Ignoring cultural differences in marketing</li>
        <li>Not localizing pricing and shipping</li>
        <li>Forgetting to translate checkout and error messages</li>
        <li>Not setting up proper analytics tracking</li>
      </ol>

      <h2>Results Timeline</h2>
      <p>Here's what you can expect when implementing this strategy:</p>
      <ul>
        <li><strong>Week 1:</strong> Set up Translate & Adapt, export content</li>
        <li><strong>Week 2-3:</strong> Bulk translation and quality review</li>
        <li><strong>Week 4:</strong> SEO optimization and testing</li>
        <li><strong>Month 2-3:</strong> Initial international traffic and sales</li>
        <li><strong>Month 4-6:</strong> Significant revenue from new markets</li>
      </ul>

      <h2>Pro Tips for Maximum Impact</h2>
      <ul>
        <li>Start with 2-3 languages max to test the waters</li>
        <li>Use Google Analytics to identify your top international visitors</li>
        <li>Create language-specific social media accounts</li>
        <li>Partner with local influencers for marketing</li>
        <li>Monitor exchange rates and adjust pricing accordingly</li>
      </ul>
    `,
    videoId: "1bWKz69cBIU",
    publishDate: "2024-01-10",
    readTime: "15 min read",
    category: "Shopify Tutorial",
    thumbnail: translateVideoImage,
    tags: ["Shopify", "Translation", "International", "Tutorial"]
  }
];

// Table of Contents Component
function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Extract headings from content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const h2Elements = tempDiv.querySelectorAll('h2');
    const h3Elements = tempDiv.querySelectorAll('h3');
    
    const allHeadings = [];
    
    h2Elements.forEach((h2, index) => {
      const id = `heading-h2-${index}`;
      allHeadings.push({
        id,
        text: h2.textContent,
        level: 2
      });
    });
    
    h3Elements.forEach((h3, index) => {
      const id = `heading-h3-${index}`;
      allHeadings.push({
        id,
        text: h3.textContent,
        level: 3
      });
    });
    
    setHeadings(allHeadings);
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(heading => 
        document.getElementById(heading.id)
      ).filter(Boolean);
      
      const scrollPosition = window.scrollY + 100;
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(element.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 bg-white rounded-lg shadow-sm border p-6 max-h-96 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4 text-black">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`text-left w-full text-sm hover:text-gray-900 transition-colors ${
                  heading.level === 3 ? 'pl-4' : ''
                } ${
                  activeId === heading.id 
                    ? 'font-semibold text-black' 
                    : 'text-gray-600'
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default function BlogPost({ params }) {
  const resolvedParams = use(params);
  const postId = parseInt(resolvedParams.id);
  const post = blogPosts.find(p => p.id === postId);

  // Add IDs to headings in content
  const processedContent = post ? post.content.replace(
    /<h2>/g, (match, offset, string) => {
      const h2Index = (string.substring(0, offset).match(/<h2>/g) || []).length;
      return `<h2 id="heading-h2-${h2Index}">`;
    }
  ).replace(
    /<h3>/g, (match, offset, string) => {
      const h3Index = (string.substring(0, offset).match(/<h3>/g) || []).length;
      return `<h3 id="heading-h3-${h3Index}">`;
    }
  ) : '';

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/youtube" className="text-purple-600 hover:text-purple-700 font-medium">
            ← Back to YouTube Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">


      {/* Blog Content with Video and Table of Contents */}
      <article className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* YouTube Video Embed */}
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${post.videoId}`}
                  title={post.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Date and Read Time */}
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                <time>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              {/* Article Content */}
              <div className="blog-content font-poppins leading-relaxed" style={{ color: 'rgb(0, 0, 0)' }}>
                <div 
                  dangerouslySetInnerHTML={{ __html: processedContent }} 
                  className="[&>h2]:text-3xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:leading-tight
                             [&>h3]:text-xl [&>h3]:font-medium [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:leading-snug
                             [&>p]:text-lg [&>p]:leading-relaxed [&>p]:my-4
                             [&>ul]:my-4 [&>ul]:pl-6 [&>ul>li]:text-lg [&>ul>li]:leading-relaxed [&>ul>li]:my-2 [&>ul>li]:list-disc
                             [&>ol]:my-4 [&>ol]:pl-6 [&>ol>li]:text-lg [&>ol>li]:leading-relaxed [&>ol>li]:my-2 [&>ol>li]:list-decimal
                             [&>ul>li>strong]:font-semibold [&>ol>li>strong]:font-semibold [&>p>strong]:font-semibold"
                  style={{
                    '--tw-prose-body': 'rgb(0, 0, 0)',
                    '--tw-prose-headings': 'rgb(0, 0, 0)',
                    '--tw-prose-lead': 'rgb(0, 0, 0)',
                    '--tw-prose-links': 'rgb(0, 0, 0)',
                    '--tw-prose-bold': 'rgb(0, 0, 0)',
                    '--tw-prose-counters': 'rgb(0, 0, 0)',
                    '--tw-prose-bullets': 'rgb(0, 0, 0)',
                    color: 'rgb(0, 0, 0)'
                  }}
                />
              </div>
              
              {/* Author Bio Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={avatarImage}
                      alt="Albin Hot"
                      fill
                      className="rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-black">
                      About the Author
                    </h3>
                    <h4 className="text-xl font-medium mb-4 text-gray-800">
                      Albin Hot
                    </h4>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                      I am a 23 year old entrepreneur with multiple successful online ecommerce stores built through SEO. 
                      I am now helping others achieve the same success through my digital marketing expertise and proven strategies.
                    </p>
                    <div className="flex gap-4">
                      <Button as={Link} href="/work-with-me">
                        Work with me
                      </Button>
                      <Button as={Link} href="/youtube" variant="secondary">
                        More Articles
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Table of Contents - Desktop Only */}
            <div className="hidden lg:block w-80">
              <TableOfContents content={processedContent} />
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to <span className="bg-[#F7D8FA] px-2 rounded italic">scale</span> your business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get my proven blueprints and start seeing results in 30 days
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as={Link} href="/blueprints/seo">
              Get SEO Blueprint <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Work with me
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Videos & Tutorials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/youtube/${relatedPost.id}`}>
                  <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={relatedPost.thumbnail}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
