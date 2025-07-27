'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import apiGuideWhatsAppImage from '../../../assets/API guide whatsapp.webp';

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
            <h2>Setting Up WhatsApp Business Cloud Credentials in n8n</h2>
            <p>To connect WhatsApp Business Cloud features in n8n, you will need specific credentials that authorize two different node types:</p>
            
            <ul>
                <li><strong>WhatsApp Business Cloud node</strong></li>
                <li><strong>WhatsApp Trigger node</strong></li>
            </ul>

            <h2>What You'll Need Before Getting Started</h2>
            <p>To create these credentials, make sure you have access to the following Meta platforms and tools:</p>

            <h3>1. A Meta Developer Profile</h3>
            <p>This is needed to manage apps and link WhatsApp services.</p>
            
            <p><strong>How to create one:</strong></p>
            <ol>
                <li>Go to the <a href="https://developers.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Facebook Developers portal</a></li>
                <li>Click <strong>Getting Started</strong> in the top right corner. If it says <strong>My Apps</strong>, your developer account is already active</li>
                <li>Agree to the platform's terms</li>
                <li>Provide a valid phone number for account verification</li>
                <li>Choose your professional role or area of work</li>
            </ol>

            <h3>2. A Verified Meta Business Portfolio</h3>
            <p>WhatsApp tools require a business portfolio, previously called Business Manager. Depending on the interface, you may see either term.</p>
            
            <p><strong>To create one:</strong></p>
            <ol>
                <li>Head over to the <a href="https://business.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Facebook Business portal</a></li>
                <li>Click <strong>Create an account</strong></li>
                <li>If you already manage a business account but need an additional portfolio, open the left menu, choose the portfolio dropdown, and click <strong>Create a business portfolio</strong></li>
                <li>Provide a name, your full name, and a business email</li>
                <li>Submit the form to complete the setup</li>
            </ol>

            <h3>3. A Meta App Linked to WhatsApp</h3>
            <p>Once you've created your developer profile and business portfolio, the next step is to build a Meta app and attach WhatsApp to it.</p>
            
            <p><strong>Steps to follow:</strong></p>
            <ol>
                <li>Navigate to the Apps dashboard on the Meta for Developers site</li>
                <li>Click <strong>Create App</strong></li>
                <li>In the product list, find <strong>WhatsApp</strong> and click <strong>Set up</strong></li>
                <li>This takes you to the WhatsApp Quickstart page. Choose your business portfolio and continue</li>
                <li>Under <strong>App Settings</strong>, go to the <strong>Basic</strong> section</li>
                <li>Provide URLs for your privacy policy and terms of service</li>
                <li>Change the app mode from development to live</li>
            </ol>

            <h2>Authentication Options for WhatsApp Nodes</h2>
            <p>There are two ways to authenticate:</p>
            <ul>
                <li><strong>Option 1:</strong> API Key (for the WhatsApp Business Cloud node)</li>
                <li><strong>Option 2:</strong> OAuth2 (for the WhatsApp Trigger node)</li>
            </ul>

            <h3>Option 1 – Authenticating with API Key</h3>
            <p>To use this method, you'll need two things:</p>
            <ul>
                <li>An access token for the API</li>
                <li>A WhatsApp Business Account ID</li>
            </ul>
            
            <p><strong>Steps to generate these:</strong></p>
            <ol>
                <li>Go to the Meta Apps dashboard</li>
                <li>Choose your app</li>
                <li>In the left menu, select <strong>WhatsApp</strong>, then <strong>API Setup</strong></li>
                <li>Click <strong>Generate access token</strong>, accept the requested permissions</li>
                <li>Copy the token and paste it into the <strong>Access Token</strong> field in n8n</li>
                <li>Copy the <strong>Business Account ID</strong> and add it to the appropriate field in n8n</li>
            </ol>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            If you want to test sending messages via the API, refer to Meta's <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Test Business Messaging on WhatsApp</a>.
                        </p>
                    </div>
                </div>
            </div>
            
            <p>For a full app launch, additional setup is required. See Meta's Steps 5 and up under their guide for Tech Providers, and consult the App Review documentation to complete verification.</p>

            <h3>Option 2 – Authenticating with OAuth2</h3>
            <p>To use the WhatsApp Trigger node, set up OAuth2 credentials with the following details:</p>
            <ul>
                <li>Client ID</li>
                <li>Client Secret</li>
            </ul>
            
            <p><strong>How to get them:</strong></p>
            <ol>
                <li>Go to the Meta for Developers dashboard</li>
                <li>Open your app</li>
                <li>From the side menu, go to <strong>App Settings</strong>, then <strong>Basic</strong></li>
                <li>Copy the <strong>App ID</strong> and use it as the Client ID in n8n</li>
                <li>Copy the <strong>App Secret</strong> and enter it as the Client Secret in n8n</li>
            </ol>
            
            <p>Just like with the API method, a full app launch requires more steps. Make sure to read Meta's full documentation for Tech Providers and go through the official App Review process for final approval.</p>

            <h2>Additional Resources</h2>
            <p>If needed, you can always refer to the <a href="https://developers.facebook.com/docs/whatsapp/cloud-api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">WhatsApp Cloud API documentation</a> for technical reference, usage guidelines, and advanced configuration.</p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            <strong>Important:</strong> Meta identifies those building WhatsApp integrations as Tech Providers. Their <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Get Started for Tech Providers</a> section is a valuable resource if you plan to offer this as a service or solution to clients.
                        </p>
                    </div>
                </div>
            </div>



            <h2>Next Steps</h2>
            <p>Now that you have WhatsApp Business Cloud credentials set up in n8n, you can:</p>
            <ul>
                <li>Build automated customer service workflows</li>
                <li>Create order notification systems</li>
                <li>Implement marketing automation campaigns</li>
                <li>Integrate with your CRM and database systems</li>
            </ul>

            <p>Ready to build a complete chatbot? Check out our guide: <Link href="/youtube/build-your-own-whatsapp-chatbot-with-n8n-no-code-guide" className="text-blue-600 hover:text-blue-800 underline">Build Your Own WhatsApp Chatbot with N8N</Link></p>
        </>
    );
}

const post = {
    id: 7,
    title: "How to Connect WhatsApp Business Cloud Credentials to N8N",
    description: "Complete step-by-step guide to integrate WhatsApp Business Cloud API with N8N. Learn how to set up webhooks, send messages, and handle incoming communications for automated customer service.",
    videoId: "WHATSAPP_VIDEO_ID",
    publishDate: "2025-07-28",
    readTime: "20 min read",
    category: "WhatsApp Integration",
    thumbnail: apiGuideWhatsAppImage,
    tags: ["WhatsApp", "N8N", "Business API", "Webhook", "Meta", "Customer Service", "Automation"]
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
        "What is WhatsApp Business Cloud API?",
        "Step 1: Create a Meta Developer Account",
        "Step 2: Configure WhatsApp Business Settings",
        "Step 3: Set Up Webhook for Receiving Messages",
        "Step 4: Send Your First Message via N8N",
        "Step 5: Handle Incoming Messages",
        "Step 6: Advanced Message Types",
        "Step 7: Production Setup",
        "Step 8: Error Handling and Best Practices",
        "Common Issues and Solutions",
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
