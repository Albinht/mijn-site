"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import klaviyoImage from '../../../assets/klaviyo.png';

// CodeBlock component with copy functionality
function CodeBlock({ children, title }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gray-900 rounded-lg p-4 my-6 relative">
            {title && <div className="text-gray-300 text-sm mb-2 font-medium">{title}</div>}
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
            <pre className="text-green-400 text-sm overflow-x-auto pr-16">
                <code>{children}</code>
            </pre>
        </div>
    );
}

// Table of Contents component
function TableOfContents() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('h2[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { id: 'why-instant-deliverables-matter', title: 'Why Instant Deliverables Matter' },
        { id: 'setting-up-klaviyo-signup-forms', title: 'Setting Up Klaviyo Signup Forms' },
        { id: 'automating-the-first-email', title: 'Automating the First Email' },
        { id: 'best-practices', title: 'Best Practices' },
        { id: 'conclusion', title: 'Conclusion' }
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border sticky top-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
            <nav>
                <ul className="space-y-2">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className={`text-sm hover:text-blue-600 transition-colors block py-1 ${
                                    activeSection === section.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                                }`}
                            >
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

// Blog content component
function BlogContent() {
    return (
        <>
            <p>Building trust with new subscribers starts the moment they sign up. When someone gives you their email address, they expect immediate value in return. In this comprehensive guide, you'll learn how to set up Klaviyo signup forms that automatically deliver your lead magnets, creating an instant positive experience that builds trust and engagement.</p>

            <h2 id="why-instant-deliverables-matter">Why Instant Deliverables Matter</h2>
            <p>When new subscribers sign up for your email list, timing is everything. Studies show that the first few minutes after signup are crucial for establishing trust and setting expectations. Here's why instant delivery matters:</p>
            
            <ul>
                <li><strong>Builds immediate trust:</strong> Delivering on your promise right away shows reliability</li>
                <li><strong>Reduces buyer's remorse:</strong> Quick fulfillment prevents second-guessing</li>
                <li><strong>Increases engagement:</strong> Subscribers are most engaged right after signing up</li>
                <li><strong>Sets clear expectations:</strong> Shows what kind of communication they can expect</li>
            </ul>

            <p>When you deliver value instantly, new subscribers are more likely to:</p>
            <ul>
                <li>Open future emails</li>
                <li>Engage with your content</li>
                <li>Trust your brand</li>
                <li>Eventually make a purchase</li>
            </ul>

            <h2 id="setting-up-klaviyo-signup-forms">Setting Up Klaviyo Signup Forms</h2>
            <p>Klaviyo offers embedded forms and pop-ups. Choose the style that fits your brand and collect the information you need.</p>

            <h3>1. Create the Form</h3>
            <p>Navigate to <strong>Signup Forms</strong> inside Klaviyo and design a form that matches your store. Make the call to action clear.</p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-blue-700">
                            <strong>Pro Tip:</strong> Keep your form simple. Only ask for essential information like email address and first name to maximize conversion rates.
                        </p>
                    </div>
                </div>
            </div>

            <h3>2. Connect to a List</h3>
            <p>Each form should add subscribers to its own list. This makes triggering automated emails simple and allows for better segmentation.</p>

            <h3>3. Design for Mobile</h3>
            <p>Ensure your signup forms look great on mobile devices, as many users will be signing up from their phones.</p>

            <h2 id="automating-the-first-email">Automating the First Email</h2>
            <p>Use Klaviyo Flows to send your deliverable immediately after signup. This could be a PDF, discount code, or onboarding guide.</p>

            <h3>1. Build the Flow</h3>
            <p>Start with a <strong>List Trigger</strong>, then add an Email step linking to your download. Here's the step-by-step process:</p>
            
            <ol>
                <li>Go to <strong>Flows</strong> in your Klaviyo dashboard</li>
                <li>Click <strong>Create Flow</strong></li>
                <li>Choose <strong>List Triggered</strong> as your trigger</li>
                <li>Select the list connected to your signup form</li>
                <li>Add an <strong>Email</strong> action immediately after the trigger</li>
                <li>Design your welcome email with the promised deliverable</li>
            </ol>

            <h3>2. Email Content Best Practices</h3>
            <p>Your instant delivery email should include:</p>
            <ul>
                <li>A warm welcome message</li>
                <li>Clear delivery of the promised content</li>
                <li>Instructions on how to access or use the deliverable</li>
                <li>What to expect next from your emails</li>
                <li>Your contact information for support</li>
            </ul>

            <h3>3. Test Everything</h3>
            <p>Always test the flow yourself to ensure the email arrives instantly and links work properly. Use a test email address to go through the entire signup process.</p>

            <h2 id="best-practices">Best Practices for Instant Deliverables</h2>
            
            <h3>Timing is Critical</h3>
            <p>Set your flow to trigger immediately (0 minutes delay) after someone joins your list. Any delay reduces the impact of instant gratification.</p>

            <h3>Make It Mobile-Friendly</h3>
            <p>Ensure your deliverable (PDF, video, etc.) is easily accessible on mobile devices since many people check email on their phones.</p>

            <h3>Set Clear Expectations</h3>
            <p>In your signup form, clearly state what they'll receive and when. For example: "Get instant access to our free guide" rather than just "Subscribe to our newsletter."</p>

            <h3>Follow Up Strategically</h3>
            <p>After the instant delivery, plan a sequence of follow-up emails that provide additional value and guide subscribers toward your main offerings.</p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            <strong>Warning:</strong> Avoid overwhelming new subscribers with too many emails too quickly. Space out your follow-up sequence appropriately.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="conclusion">Conclusion</h2>
            <p>Setting up instant deliverables through Klaviyo signup forms is one of the most effective ways to build trust with new subscribers and increase long-term engagement. By delivering value immediately, you set the tone for a positive relationship that can lead to higher open rates, better engagement, and ultimately more sales.</p>

            <p>Remember to keep testing and optimizing your signup forms and delivery emails based on your audience's response. What works for one business might need tweaking for another, so pay attention to your metrics and adjust accordingly.</p>

            <p>Start implementing these strategies today, and watch your email engagement rates improve as you build stronger relationships with your subscribers from the very first interaction.</p>
        </>
    );
}

const post = {
    id: 8,
    title: "Klaviyo Signup Forms + Email Automation — Send Deliverables Instantly",
    description: "Learn how to set up Klaviyo signup forms and automate instant delivery of lead magnets. Complete guide to building trust and engagement with new subscribers through automated email sequences.",
    videoId: "QV6Xt8f8d2w",
    publishDate: "2025-07-27",
    readTime: "12 min read",
    category: "Email Marketing",
    thumbnail: klaviyoImage,
    tags: ["Klaviyo", "Email Automation", "Lead Generation", "Marketing", "Signup Forms"]
};

// Page-level SEO metadata for Next.js App Router
export const metadata = {
    title: `${post.title} | YouTube Tutorial`,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.publishDate,
        tags: post.tags,
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
    }
};

export default function KlaviyoSignupFormsPage() {
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

                        {/* Video Embed */}
                        <div className="mb-8">
                            <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg overflow-hidden">
                                <iframe
                                    src={`https://www.youtube.com/embed/${post.videoId}`}
                                    title={post.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                    style={{ aspectRatio: '16/9' }}
                                ></iframe>
                            </div>
                        </div>

                        {/* Blog Content */}
                        <article className="prose prose-lg max-w-none">
                            <BlogContent />
                        </article>

                        {/* Author Bio */}
                        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg border">
                            <div className="flex items-start gap-4">
                                <Image
                                    src={authorImage}
                                    alt="Author"
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">About the Author</h3>
                                    <p className="text-gray-600 mb-4">
                                        Albin is a marketing automation specialist who helps businesses streamline their email marketing and lead generation processes. 
                                        With years of experience in Klaviyo, N8N, and various marketing tools, he creates practical tutorials that deliver real results.
                                    </p>
                                    <div className="flex gap-4">
                                        <Button href="/youtube" variant="outline" size="sm">
                                            More Tutorials
                                        </Button>
                                        <Button href="#" variant="primary" size="sm">
                                            Subscribe
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="hidden lg:block lg:w-1/3">
                        <TableOfContents />
                    </aside>
                </div>
            </div>
        </main>
    );
}
