import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import n8nWhatsAppImage from '../../../assets/n8n-whatsapp-chatbot.png';

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
            <p>Are you looking to build your own WhatsApp chatbot with AI memory and smart replies using n8n? In this guide, you'll learn how to set up a working WhatsApp agent from scratch using the WhatsApp Business Cloud API, OpenRouter AI models, and n8n's low-code automation platform.</p>
            
            <p>Whether you're aiming to respond to incoming messages, integrate tools like a calendar, or build a smart assistant with AI memory, this tutorial will walk you through it all.</p>

            <h2>What You'll Need Before Getting Started</h2>
            <p>Before we begin, make sure you've got the following:</p>
            <ul>
                <li>An n8n instance (self-hosted or cloud)</li>
                <li>Your WhatsApp Business Cloud credentials</li>
                <li>A verified Meta Developer Account</li>
                <li>An OpenRouter API key</li>
            </ul>

            <p>If you don't have your WhatsApp or OpenRouter credentials set up yet, check the links in the description or read our dedicated guides:</p>
            <ul>
                <li><Link href="/youtube/how-to-connect-whatsapp-business-cloud-credentials-to-n8n" className="text-blue-600 hover:text-blue-800 underline">Set up WhatsApp Business Cloud Credentials</Link></li>
                <li><Link href="/youtube/how-to-connect-open-router-to-n8n" className="text-blue-600 hover:text-blue-800 underline">Configure OpenRouter API Key for n8n</Link></li>
            </ul>

            <h2>Step 1 – Create the WhatsApp Trigger</h2>
            <p>Start your n8n workflow with a WhatsApp Trigger node. This listens for incoming messages.</p>
            <ul>
                <li>Select trigger type: <strong>message received</strong></li>
                <li>Add your WhatsApp credentials (link to setup guide is in the description)</li>
                <li>Rename the node to <strong>Chat Received</strong> for later compatibility with memory</li>
            </ul>

            <h2>Step 2 – Add the AI Agent</h2>
            <p>Next, drag in your AI Agent node and connect it to the WhatsApp trigger. This agent will handle incoming messages and reply based on prompts and memory settings.</p>
            
            <p>For now, set the basic system message like this:</p>
            <CodeBlock title="System Message Example">
{`Always reply kindly. Always end your messages with: "Greetings, Albin from Nibla."`}
            </CodeBlock>
            
            <p>You can tweak this to your brand voice or assistant tone.</p>

            <h2>Step 3 – Use OpenRouter Chat Model</h2>
            <p>Add the OpenRouter Chat Model node:</p>
            <ul>
                <li>Choose your model (e.g., gpt-3.5 or similar)</li>
                <li>Connect it to the AI Agent</li>
                <li>For memory, define it to remember 10 previous messages</li>
            </ul>
            
            <p>This will help the bot keep context for natural conversation.</p>

            <h2>Step 4 – Add Memory Configuration</h2>
            <p>In your AI agent's memory field, paste the following shortcode to ensure it stores the sender's number:</p>
            
            <CodeBlock title="Memory Shortcode for AI Agent">
{`{{ $('Chat Received').item.json.contacts[0].wa_id }}`}
            </CodeBlock>
            
            <p>Make sure your WhatsApp Trigger is named <strong>Chat Received</strong>. If it isn't, adjust the reference accordingly.</p>

            <h2>Step 5 – Send the AI's Reply Back</h2>
            <p>Now, add the Send Message & Wait for Response node. This will send the AI's reply back to the user via WhatsApp.</p>
            
            <p>Configure it as follows:</p>
            <ul>
                <li><strong>Operation:</strong> Send Message</li>
                <li><strong>Phone Number ID:</strong> Use your test number from WhatsApp</li>
                <li><strong>Recipient:</strong> The number used during testing</li>
                <li><strong>Message Text:</strong> Output from AI Agent</li>
            </ul>
            
            <p>You can leave the text field as an expression or dynamic reference. Then hit Save and Execute Workflow.</p>

            <h2>Step 6 – Test Your Agent</h2>
            <p>Try messaging "Hi" to your test WhatsApp number. Your workflow should:</p>
            <ol>
                <li>Trigger on your message</li>
                <li>Process it through the AI model</li>
                <li>Send back a response such as: "Hi there! How can I help you? Greetings, Albin from Nibla."</li>
            </ol>
            
            <p>You can also test queries like:</p>
            <ul>
                <li>What is the weather in Amsterdam?</li>
                <li>What are best practices for SEO?</li>
            </ul>
            
            <p>Even though the AI doesn't have real-time data access, it can provide helpful, context-aware responses.</p>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-green-700">
                            <strong>Success!</strong> You now have a working WhatsApp AI agent using n8n and OpenRouter. With a bit more customization, you can connect this to calendar tools, booking systems, CRMs, or customer support workflows.
                        </p>
                    </div>
                </div>
            </div>

            <h2>Final Thoughts</h2>
            <p>And that's it! You now have a working WhatsApp AI agent using n8n and OpenRouter. With a bit more customization, you can connect this to calendar tools, booking systems, CRMs, or customer support workflows.</p>
            
            <p>If you found this tutorial helpful, don't forget to check out our other automation guides.</p>
            
            <p>Got questions or ideas? Drop them below — I'd love to hear what you're building.</p>

            <h2>Helpful Links</h2>
            <ul>
                <li><Link href="/youtube/how-to-connect-whatsapp-business-cloud-credentials-to-n8n" className="text-blue-600 hover:text-blue-800 underline">WhatsApp Business Cloud Setup Guide</Link></li>
                <li><Link href="/youtube/how-to-connect-open-router-to-n8n" className="text-blue-600 hover:text-blue-800 underline">OpenRouter API Credential Setup</Link></li>
                <li><a href="https://docs.n8n.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">n8n Official Docs</a></li>
            </ul>

            <h2>Memory Shortcode Reference</h2>
            <p>For quick reference, here's the memory shortcode for your AI Agent:</p>
            
            <CodeBlock title="Memory Shortcode for AI Agent">
{`{{ $('Chat Received').item.json.contacts[0].wa_id }}`}
            </CodeBlock>
        </>
    );
}

const post = {
    id: 5,
    title: "How to Build a WhatsApp AI Agent in n8n (Step-by-Step Tutorial)",
    description: "Learn how to build your own WhatsApp chatbot with AI memory and smart replies using n8n. Complete step-by-step guide using WhatsApp Business Cloud API, OpenRouter AI models, and n8n's low-code automation platform.",
    videoId: "iMs_vGYUq8w",
    publishDate: "2025-07-28",
    readTime: "25 min read",
    category: "Chatbot Automation",
    thumbnail: n8nWhatsAppImage,
    tags: ["N8N", "WhatsApp", "Chatbot", "AI", "OpenRouter", "No-Code", "Automation"]
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
        "Why Build a WhatsApp Chatbot with N8N?",
        "What You'll Learn in This Tutorial", 
        "Prerequisites and Setup Requirements",
        "Essential N8N Workflow Components",
        "Advanced Features Implementation",
        "Deployment and Scaling",
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
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
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
