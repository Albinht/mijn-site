'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import shopifyTranslateAiImage from '../../../assets/SCR-20250806-pnlp.png';

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
            <h2>🌍 The International Scaling Problem</h2>
            <p>If you're scaling internationally with Shopify, you know the pain of manually translating every product, blog, and page. It's slow, error-prone, and definitely not scalable.</p>
            <p>That's why I built a fully automated translation workflow using:</p>
            <ul>
                <li><strong>Google Sheets</strong> to structure your export</li>
                <li><strong>n8n</strong> to orchestrate the process</li>
                <li><strong>OpenRouter AI</strong> (e.g. Gemini or GPT) to translate with high-quality, SEO-friendly outputs</li>
            </ul>
            <p><strong>No more copy-pasting. No more human delay.</strong></p>

            <h2>🎯 What This Workflow Accomplishes</h2>
            <p>In this video tutorial, I walk you through:</p>
            <ul>
                <li>Exporting untranslated Shopify content</li>
                <li>Preparing and cleaning your sheet</li>
                <li>Configuring your translation prompts</li>
                <li>Avoiding mistakes with meta fields and product images</li>
                <li>Verifying translations with smart formulas</li>
                <li>And syncing it all with your Shopify store</li>
            </ul>
            
            <p>This solution now powers all multilingual sites at <a href="https://niblah.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Niblah.com</a> and saves dozens of hours per week.</p>

            <h2>⚙️ Core Tools in the Workflow</h2>
            <ul>
                <li><strong>n8n</strong> – Workflow automation platform</li>
                <li><strong>Google Sheets</strong> – Data organization and processing</li>
                <li><strong>OpenRouter</strong> – AI translation provider (GPT-4, Gemini, Claude)</li>
                <li><strong>Shopify Admin API</strong> – Store content management</li>
                <li><strong>Custom AI Prompts</strong> – SEO-optimized translation instructions</li>
            </ul>

            <h2>🚀 Key Benefits of Automated Translation</h2>
            <ul>
                <li><strong>Massive Time Savings:</strong> Dozens of hours saved per week</li>
                <li><strong>Consistent Quality:</strong> AI ensures consistent tone and terminology</li>
                <li><strong>SEO Optimization:</strong> Translations are optimized for search engines</li>
                <li><strong>Scalable Process:</strong> Handle hundreds of products at once</li>
                <li><strong>Error Reduction:</strong> Eliminate manual copy-paste mistakes</li>
                <li><strong>Cost Effective:</strong> Fraction of the cost of human translators</li>
            </ul>

            <h2>🔧 Technical Implementation Highlights</h2>
            <h3>Google Sheets Structure</h3>
            <p>The Google Sheet acts as your translation workspace with columns for:</p>
            <ul>
                <li>Original content (product titles, descriptions, meta fields)</li>
                <li>Translated content output</li>
                <li>Verification formulas</li>
                <li>Shopify product IDs for syncing</li>
            </ul>

            <h3>N8N Workflow Orchestration</h3>
            <p>The n8n workflow handles:</p>
            <ul>
                <li>Reading data from Google Sheets</li>
                <li>Sending content to OpenRouter AI for translation</li>
                <li>Processing AI responses and formatting</li>
                <li>Writing translated content back to sheets</li>
                <li>Syncing with Shopify via API</li>
            </ul>

            <h3>AI Translation Prompts</h3>
            <p>Custom prompts ensure:</p>
            <ul>
                <li>SEO-friendly translations</li>
                <li>Brand voice consistency</li>
                <li>Cultural adaptation, not just literal translation</li>
                <li>Proper handling of product specifications</li>
            </ul>

            <h2>⚠️ Important Considerations</h2>
            <h3>Meta Fields & Product Images</h3>
            <p>The video covers crucial details about:</p>
            <ul>
                <li>Handling Shopify meta fields properly</li>
                <li>Preserving product image associations</li>
                <li>Managing variant translations</li>
                <li>Avoiding data corruption during bulk updates</li>
            </ul>

            <h3>Quality Control</h3>
            <p>Built-in verification includes:</p>
            <ul>
                <li>Smart formulas to check translation completeness</li>
                <li>Length validation for meta descriptions</li>
                <li>Character encoding verification</li>
                <li>Duplicate detection</li>
            </ul>

            <h2>📈 Real-World Results</h2>
            <p>This automated translation system has enabled:</p>
            <ul>
                <li><strong>Multi-market expansion:</strong> Launch in new countries faster</li>
                <li><strong>Operational efficiency:</strong> Redirect human resources to strategy</li>
                <li><strong>Consistent brand voice:</strong> Across all international markets</li>
                <li><strong>SEO performance:</strong> Better rankings in local search results</li>
            </ul>

            <h2>🎁 Get the Complete Setup</h2>
            <p>📥 <strong>Download the full Google Sheet template + n8n workflow</strong></p>
            <p>📞 <strong>Want this implemented for your brand? Book a free consult</strong></p>

            <h2>📺 Watch the Complete Tutorial</h2>
            <p>The video provides a step-by-step walkthrough of the entire setup process, from initial configuration to your first automated translation batch.</p>
            <p>You'll see exactly how to avoid common pitfalls and ensure your translations maintain both quality and SEO value.</p>
        </>
    );
}

const post = {
    id: 10,
    title: "Translate Your Shopify Store Automatically with AI + n8n & Google Sheets (No Manual Work!)",
    description: "If you're scaling internationally with Shopify, you know the pain of manually translating every product, blog, and page. It's slow, error-prone, and definitely not scalable. Learn how to build a fully automated translation workflow using Google Sheets, n8n, and OpenRouter AI for high-quality, SEO-friendly outputs with no manual work.",
    videoId: "x913ZsKXpSA",
    publishDate: "2025-08-06",
    readTime: "22 min read",
    category: "Shopify Automation",
    thumbnail: shopifyTranslateAiImage,
    tags: ["Shopify", "AI", "N8N", "Google Sheets", "Translation", "OpenRouter", "Automation", "SEO", "International"]
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
        { id: 'the-international-scaling-problem', title: '🌍 The International Scaling Problem', level: 2 },
        { id: 'what-this-workflow-accomplishes', title: '🎯 What This Workflow Accomplishes', level: 2 },
        { id: 'core-tools-in-the-workflow', title: '⚙️ Core Tools in the Workflow', level: 2 },
        { id: 'key-benefits-of-automated-translation', title: '🚀 Key Benefits', level: 2 },
        { id: 'technical-implementation-highlights', title: '🔧 Technical Implementation', level: 2 },
        { id: 'google-sheets-structure', title: 'Google Sheets Structure', level: 3 },
        { id: 'n8n-workflow-orchestration', title: 'N8N Workflow Orchestration', level: 3 },
        { id: 'ai-translation-prompts', title: 'AI Translation Prompts', level: 3 },
        { id: 'important-considerations', title: '⚠️ Important Considerations', level: 2 },
        { id: 'meta-fields---product-images', title: 'Meta Fields & Product Images', level: 3 },
        { id: 'quality-control', title: 'Quality Control', level: 3 },
        { id: 'real-world-results', title: '📈 Real-World Results', level: 2 },
        { id: 'get-the-complete-setup', title: '🎁 Get the Complete Setup', level: 2 },
        { id: 'watch-the-complete-tutorial', title: '📺 Watch the Complete Tutorial', level: 2 }
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
                                src={`https://www.youtube.com/embed/${post.videoId}?si=G-cfEOIL86OkYbN0`}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
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