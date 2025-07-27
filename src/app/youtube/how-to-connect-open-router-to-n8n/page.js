'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import n8nOpenRouterImage from '../../../assets/n8n open router.webp';

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
            <h2>Connecting OpenRouter in n8n</h2>
            <p>To enable OpenRouter functionality inside your n8n workflows, you will need to provide valid authentication credentials.</p>
            
            <p>This setup supports the following node:</p>
            <ul>
                <li><strong>Chat OpenRouter</strong></li>
            </ul>

            <h2>Before You Begin</h2>
            <p>Make sure you have an OpenRouter account. You will not be able to proceed without one.</p>
            
            <p>If you do not yet have an account, visit the <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">OpenRouter website</a> and complete the registration process.</p>

            <h2>Authentication Type</h2>
            <p>This integration relies on an API key for access.</p>

            <h2>How to Set Up Your API Key</h2>
            <p>To connect OpenRouter with n8n using an API key, follow the steps below:</p>
            
            <ol>
                <li>Sign in to your OpenRouter account</li>
                <li>Go to your <strong>API Keys</strong> section</li>
                <li>Click the option to create a new secret key</li>
                <li>Give the key a name if desired</li>
                <li>Copy the generated key</li>
                <li>Paste it into the corresponding <strong>API Key</strong> field when adding credentials in n8n</li>
            </ol>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-green-700">
                            <strong>Success!</strong> Once complete, your connection to OpenRouter will be ready to use within supported nodes.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Additional Resources</h2>
            <p>For additional setup instructions or advanced use cases, refer to OpenRouter&apos;s <a href="https://openrouter.ai/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">official documentation</a> and their <a href="https://openrouter.ai/docs/quick-start" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Quick Start guide</a>. These resources provide helpful information on managing requests, handling tokens, and exploring all supported endpoints.</p>

            <h2>Next Steps</h2>
            <p>Now that you have OpenRouter connected to n8n, you can:</p>
            <ul>
                <li>Build AI-powered chatbots and assistants</li>
                <li>Create content generation workflows</li>
                <li>Implement smart data processing pipelines</li>
                <li>Add AI capabilities to your existing automations</li>
            </ul>

            <p>Ready to build a WhatsApp chatbot? Check out our complete guide: <Link href="/youtube/build-your-own-whatsapp-chatbot-with-n8n-no-code-guide" className="text-blue-600 hover:text-blue-800 underline">Build Your Own WhatsApp Chatbot with N8N</Link></p>
        </>
    );
}

const post = {
    id: 6,
    title: "How to Connect Open Router to N8N",
    description: "Complete step-by-step guide to integrate OpenRouter API with N8N for AI-powered workflows. Access 100+ AI models including GPT-4, Claude, and Llama through one unified API.",
    videoId: "OPENROUTER_VIDEO_ID",
    publishDate: "2025-07-28",
    readTime: "15 min read",
    category: "AI Integration",
    thumbnail: n8nOpenRouterImage,
    tags: ["OpenRouter", "N8N", "AI", "API", "GPT-4", "Claude", "Integration"]
};

function TableOfContents() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('h2, h3');
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.offsetTop <= scrollPosition) {
                    setActiveSection(section.textContent);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        "Connecting OpenRouter in n8n",
        "Before You Begin",
        "Authentication Type",
        "How to Set Up Your API Key",
        "Additional Resources",
        "Next Steps"
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
            <nav>
                <ul className="space-y-2">
                    {sections.map((section, index) => (
                        <li key={index}>
                            <a 
                                href={`#${section.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className={`text-sm hover:text-blue-600 transition-colors block py-1 ${
                                    activeSection === section ? 'text-blue-600 font-medium' : 'text-gray-600'
                                }`}
                            >
                                {section}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default function BlogPostPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex gap-8">
                    {/* Main Content */}
                    <div className="flex-1 lg:w-2/3">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                                    {post.category}
                                </span>
                                <span>{post.publishDate}</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                {post.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
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
