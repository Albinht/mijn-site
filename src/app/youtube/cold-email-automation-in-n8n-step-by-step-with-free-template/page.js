'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import n8nEmailImage from '../../../assets/n8n-email-automation.png';

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
            <h2>Why N8N is Perfect for Cold Email Automation</h2>
            <p>N8N is a powerful, open-source workflow automation tool that&apos;s perfect for cold email campaigns. Unlike expensive tools like Zapier or HubSpot, N8N gives you:</p>
            <ul>
                <li>Complete control over your email automation</li>
                <li>Advanced JavaScript customization capabilities</li>
                <li>Cost-effective scaling for high-volume campaigns</li>
                <li>Integration with Google Sheets, Gmail, and SMTP servers</li>
                <li>Built-in delay and randomization features to avoid spam filters</li>
            </ul>

            <h2>What You&apos;ll Learn in This Tutorial</h2>
            <p>This comprehensive guide covers everything you need to build a professional cold email automation system:</p>
            <ul>
                <li>✅ How to pull leads and email templates directly from Google Sheets</li>
                <li>✅ How to use JavaScript to randomize and rotate your email content</li>
                <li>✅ How to personalize and send emails using Gmail or an SMTP server</li>
                <li>✅ How to log each email&apos;s send status and timestamp back into Sheets</li>
                <li>✅ How to reduce spam risk by adding delays between email sends</li>
                <li>✅ How to loop your workflow to send emails in bulk automatically</li>
            </ul>

            <h2>Essential JavaScript Code Snippets</h2>
            <p>Here are the key JavaScript snippets used in this automation workflow:</p>

            <h3>1. Pick a Random Template JavaScript</h3>
            <p>This script randomly selects an email template from your Google Sheets to avoid sending identical emails:</p>
            
            <CodeBlock title="Random Template Picker">
{`// Get templates from previous node
const templates = items.map(item => item.json);

// Check if templates exist
if (!templates || templates.length === 0) {
  throw new Error('No templates found');
}

// Pick a random template
const index = Math.floor(Math.random() * templates.length);
const template = templates[index];

// Convert body to HTML
const bodyHtml = template.Body.replace(/\\n/g, '<br>');

// Return in n8n-compatible format
return [
  {
    json: {
      subject: template.Subject,
      body: bodyHtml
    }
  }
];`}
            </CodeBlock>

            <h3>2. Personalize the Email</h3>
            <p>This snippet merges lead data (like name and company) into your email template:</p>
            
            <CodeBlock title="Email Personalization">
{`// Get lead and template data
const lead = items[0].json;
const template = items[1].json;

// Replace placeholders
let personalizedBody = template.body.replace(/{{firstName}}/g, lead.FirstName);
personalizedBody = personalizedBody.replace(/{{companyName}}/g, lead.Company);

// Return personalized content
return [
  {
    json: {
      ...lead,
      subject: template.subject,
      body: personalizedBody
    }
  }
];`}
            </CodeBlock>

            <h3>3. Log Send Status to Google Sheets</h3>
            <p>After sending an email, this script updates your Google Sheet with the send status and a timestamp:</p>
            
            <CodeBlock title="Send Status Logging">
{`// Get the lead data
const lead = items[0].json;

// Get current timestamp
const now = new Date();
const timestamp = now.toISOString();

// Prepare data for Google Sheets
return [
  {
    json: {
      'A': lead.Email, // Assuming email is in column A
      'D': 'Sent', // Assuming status is in column D
      'E': timestamp // Assuming timestamp is in column E
    }
  }
];`}
            </CodeBlock>

            <h2>Expected Results</h2>
            <p>By implementing this automated system, you can expect:</p>
            <ul>
                <li>Achieve 15-25% open rates with proper targeting</li>
                <li>Get 2-5% response rates on well-crafted campaigns</li>
                <li>Save 10+ hours per week on manual email tasks</li>
                <li>Scale your outreach without increasing costs</li>
            </ul>

            <h2>Get the FREE Template</h2>
            <p>Download the complete N8N workflow template and Google Sheets setup to get started immediately. The template includes all the JavaScript code, proper node configurations, and a sample lead database structure.</p>
        </>
    );
}

const post = {
    id: 4,
    title: "Cold Email Automation in N8N – Step-by-Step with FREE Template",
    excerpt: "Master cold email automation with N8N! Learn how to pull leads from Google Sheets, randomize content, personalize emails, and automate bulk sending with proper delays to avoid spam filters.",
    videoId: "4k7Zd4A0WzQ",
    publishDate: "2025-01-25",
    readTime: "20 min read",
    category: "Email Marketing",
    thumbnail: n8nEmailImage,
    tags: ["N8N", "Email Automation", "Cold Email", "JavaScript", "Google Sheets"]
};

function TableOfContents() {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        // Define the headings manually since we're using JSX components now
        const blogHeadings = [
            { level: 2, text: 'Why N8N is Perfect for Cold Email Automation', id: 'why-n8n-is-perfect-for-cold-email-automation' },
            { level: 2, text: "What You&apos;ll Learn in This Tutorial", id: 'what-youll-learn-in-this-tutorial' },
            { level: 2, text: 'Essential JavaScript Code Snippets', id: 'essential-javascript-code-snippets' },
            { level: 3, text: '1. Pick a Random Template JavaScript', id: '1-pick-a-random-template-javascript' },
            { level: 3, text: '2. Personalize the Email', id: '2-personalize-the-email' },
            { level: 3, text: '3. Log Send Status to Google Sheets', id: '3-log-send-status-to-google-sheets' },
            { level: 2, text: 'Expected Results', id: 'expected-results' },
            { level: 2, text: 'Get the FREE Template', id: 'get-the-free-template' }
        ];
        
        setHeadings(blogHeadings);
        
        // Add IDs to actual headings in the DOM
        setTimeout(() => {
            blogHeadings.forEach(h => {
                const element = document.querySelector(`h${h.level}`);
                if (element && element.innerText === h.text) {
                    element.id = h.id;
                }
            });
        }, 100);
    }, []);

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
