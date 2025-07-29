'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import apifyVideoImage from '../../../assets/Apify video.jpg';

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

// Content component with CodeBlocks
function BlogContent() {
    return (
        <>
            <h2>🚀 Introduction</h2>
            <p>In this blog, I'll show you exactly how I built a fully automated system to scrape leads from Google Maps using Apify, enrich the results with AI, and store them neatly in Google Sheets — all within n8n, a no-code workflow platform.</p>
            <p>It even includes personalized cold outreach message generation using GPT-4.</p>
            <p>👉 Want to try Apify? Use my referral link here: <a href="https://apify.com?fpr=rmgssw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">https://apify.com?fpr=rmgssw</a></p>

            <h2>🧠 What this automation does</h2>
            
            <h3>🔍 Part 1: Scrape Local Leads with Apify</h3>
            <ul>
                <li>A webhook triggers the workflow (manual or scheduled)</li>
                <li>An AI Agent generates a business search query like "clothing stores in Ede"</li>
                <li>Apify scrapes Google Maps using that query</li>
                <li>The scraped data is appended into Google Sheets</li>
            </ul>

            <h3>🧠 Part 2: Enrich Leads with AI</h3>
            <ul>
                <li>The sheet is read row by row</li>
                <li>A second AI Agent fills in a personalized cold email using the person's name, job title, and company</li>
                <li>Everything is updated back into the sheet, ready to send or export to your CRM</li>
            </ul>

            <h2>⚙️ Tools Used</h2>
            <ul>
                <li><strong>n8n</strong> – No-code workflow automation</li>
                <li><strong>Apify</strong> – Google Maps Scraper Actor</li>
                <li><strong>Google Sheets</strong> – Lead storage & tracking</li>
                <li><strong>OpenRouter</strong> – ChatGPT/GPT-4 API provider</li>
                <li>Webhooks, AI Agents, HTTP Requests, and Code nodes inside n8n</li>
            </ul>

            <h2>📋 Copyables from the video</h2>
            
            <h3>🔗 Sheet copy</h3>
            <CodeBlock title="Sheet ID Reference">
{`{{ $('Copy file').item.json.id }}`}
            </CodeBlock>

            <h3>✉️ AI Agent2 prompt (Cold Outreach)</h3>
            <CodeBlock title="Cold Outreach AI Prompt">
{`First name: {{ $('Get row(s) in sheet').item.json['First Name'] }}
Job title: {{ $json['Job Title'] }}
Company name: {{ $json.Company }}

You are an expert in cold email outreach. You will be given a person's first name, their job title and company, and some research about them and the company. Your task is to complete the provided template given this information. 

Some information about me: [ENTER YOUR INFORMATION]

Template:
Hi [First Name] – really enjoyed [something unique, cool or impressive]. Wanted to reach out!

I [what you/your company does i.e. scale customer acquisition]. We [tangible accomplishment i.e. just landed 20 new clients in the last month for...]

Bottom line: [what it is you're offering i.e. we build cold email systems that find high-quality prospects]

I'm confident enough in this system that I wouldn't charge you unless I generate [$ amount or # of leads] in the first month.

Would you be open to hopping on a quick 15-minute call? How's [time #1] or [time #2] work?  
Say yes and I'll send the invite.

– [Your Name]`}
            </CodeBlock>

            <h2>💡 Why this workflow matters</h2>
            <ul>
                <li><strong>Saves hours</strong> of manual scraping and research</li>
                <li><strong>Hyper-personalized messages</strong> with zero typing</li>
                <li><strong>All built in a modular and scalable way</strong></li>
                <li><strong>Easy to duplicate</strong> for different niches or countries</li>
            </ul>

            <h2>🎯 Key Benefits of This Automation</h2>
            <p>This automated lead generation system transforms how you approach local business outreach:</p>
            <ul>
                <li><strong>Scalable Lead Generation:</strong> Generate hundreds of qualified leads in minutes</li>
                <li><strong>AI-Powered Personalization:</strong> Each outreach message is uniquely crafted</li>
                <li><strong>Complete Automation:</strong> From scraping to personalized messaging in one workflow</li>
                <li><strong>Cost-Effective:</strong> No expensive lead generation tools needed</li>
                <li><strong>Data Organization:</strong> Everything stored neatly in Google Sheets for easy management</li>
            </ul>

            <h2>🔧 Technical Implementation Details</h2>
            <p>The workflow leverages several powerful integrations:</p>
            <ul>
                <li><strong>Apify Google Maps Scraper:</strong> Extracts business information including contact details, reviews, and location data</li>
                <li><strong>OpenRouter API:</strong> Provides access to GPT-4 for intelligent message generation</li>
                <li><strong>Google Sheets API:</strong> Seamless data storage and retrieval</li>
                <li><strong>N8N Workflow Engine:</strong> Orchestrates the entire automation process</li>
            </ul>

            <h2>📈 Best Practices for Lead Scraping</h2>
            <p>To maximize your success with this automation:</p>
            <ul>
                <li><strong>Target Specific Niches:</strong> Focus on specific business types for better personalization</li>
                <li><strong>Respect Rate Limits:</strong> Use appropriate delays to avoid being blocked</li>
                <li><strong>Quality Over Quantity:</strong> Filter results for businesses that match your ideal customer profile</li>
                <li><strong>Compliance:</strong> Always follow local data protection regulations</li>
                <li><strong>Test Your Messages:</strong> A/B test different outreach templates for better response rates</li>
            </ul>

            <h2>📼 Watch the Full Walkthrough</h2>
            <p>I recorded the entire workflow in this video — including how I built it, how it works, and how to customize it for your own agency or product.</p>
            <p>The video covers every step in detail, from setting up your Apify account to deploying the complete automation in n8n.</p>
        </>
    );
}

const post = {
    id: 5,
    title: "Automated Lead Scraping with Apify and N8N: Google Maps to Sheets",
    description: "Learn how to build a fully automated system to scrape leads from Google Maps using Apify, enrich them with AI, and store them in Google Sheets using N8N.",
    videoId: "fWoMKTx9X38",
    publishDate: "2025-07-29",
    readTime: "15 min read",
    category: "Lead Generation",
    thumbnail: apifyVideoImage,
    tags: ["N8N", "Apify", "Lead Generation", "Google Maps", "AI", "Automation", "Google Sheets"]
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
        { id: 'introduction', title: '🚀 Introduction', level: 2 },
        { id: 'what-this-automation-does', title: '🧠 What this automation does', level: 2 },
        { id: 'part-1-scrape-local-leads-with-apify', title: '🔍 Part 1: Scrape Local Leads', level: 3 },
        { id: 'part-2-enrich-leads-with-ai', title: '🧠 Part 2: Enrich Leads with AI', level: 3 },
        { id: 'tools-used', title: '⚙️ Tools Used', level: 2 },
        { id: 'copyables-from-the-video', title: '📋 Copyables from the video', level: 2 },
        { id: 'why-this-workflow-matters', title: '💡 Why this workflow matters', level: 2 },
        { id: 'key-benefits-of-this-automation', title: '🎯 Key Benefits', level: 2 },
        { id: 'technical-implementation-details', title: '🔧 Technical Implementation', level: 2 },
        { id: 'best-practices-for-lead-scraping', title: '📈 Best Practices', level: 2 },
        { id: 'watch-the-full-walkthrough', title: '📼 Watch the Full Walkthrough', level: 2 }
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
