'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import ecomSeoFrameworkImage from '../../../assets/E-com SEO framework.png';

const post = {
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
        <li><strong>Competitor Analysis:</strong> Identify keyword gaps and opportunities</li>
      </ul>

      <h3>Phase 3: On-Page & Content Strategy (Weeks 7-12)</h3>
      <p>Content is king, even in e-commerce:</p>
      <ul>
        <li><strong>Category Page Optimization:</strong> Write unique content for category pages</li>
        <li><strong>Product Page Optimization:</strong> Use the framework from my other video</li>
        <li><strong>Blog Content:</strong> Top-of-funnel content to attract new customers</li>
        <li><strong>Buying Guides:</strong> Help customers make informed decisions</li>
      </ul>

      <h3>Phase 4: Content Marketing & Promotion (Ongoing)</h3>
      <p>Create content assets that attract links and customers:</p>
      <ul>
        <li><strong>Calculators & Tools:</strong> Interactive tools related to your products</li>
        <li><strong>In-depth Guides:</strong> Become the go-to resource in your niche</li>
        <li><strong>FAQ Pages:</strong> Answer common customer questions</li>
        <li><strong>User-Generated Content:</strong> Reviews, Q&A, and customer photos</li>
      </ul>

      <h3>Phase 5: Link Building & Authority (Ongoing)</h3>
      <p>Build domain authority through strategic link acquisition:</p>
      <ul>
        <li><strong>Digital PR:</strong> Newsworthy campaigns and studies</li>
        <li><strong>Resource Page Links:</strong> Get listed on industry resource pages</li>
        <li><strong>Guest Posting:</strong> Contribute to relevant blogs in your industry</li>
        <li><strong>Broken Link Building:</strong> Find broken links and suggest your content as a replacement</li>
      </ul>

      <h2>Key Metrics to Track</h2>
      <p>Measure your success with these KPIs:</p>
      <ul>
        <li><strong>Organic Traffic:</strong> Overall and to key pages</li>
        <li><strong>Keyword Rankings:</strong> For commercial and informational terms</li>
        <li><strong>Conversion Rate:</strong> From organic traffic</li>
        <li><strong>Backlink Profile:</strong> Number and quality of referring domains</li>
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
    publishDate: "2025-01-15",
    readTime: "12 min read",
    category: "Google Ads",
    thumbnail: ecomSeoFrameworkImage,
    tags: ["Google Ads", "PPC", "ROI", "Optimization"]
};

const TableOfContents = ({ content }) => {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const headingElements = Array.from(tempDiv.querySelectorAll('h2, h3'));
        
        const foundHeadings = headingElements.map(h => ({
            level: parseInt(h.tagName.substring(1), 10),
            text: h.innerText,
            id: h.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        }));

        setHeadings(foundHeadings);
    }, [content]);

    if (headings.length === 0) return null;

    return (
        <ul className="space-y-2">
            {headings.map(heading => (
                <li key={heading.id} className={`${heading.level === 3 ? 'ml-4' : ''}`}>
                    <a href={`#${heading.id}`} className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                        {heading.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default function BlogPostPage() {
    const [updatedContent, setUpdatedContent] = useState('');

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content;
        const headings = Array.from(tempDiv.querySelectorAll('h2, h3'));
        headings.forEach(h => {
            const id = h.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            h.id = id;
        });
        setUpdatedContent(tempDiv.innerHTML);
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
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                        
                        {/* Blog Content */}
                        <div className="prose prose-lg max-w-none text-gray-800 mb-12 blog-content" dangerouslySetInnerHTML={{ __html: updatedContent }} />
                        
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
                            <TableOfContents content={updatedContent} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
