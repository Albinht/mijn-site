'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import productDescriptionsImage from '../../../assets/Product descriptions.png';

const post = {
    id: 1,
    title: "How to Write Product Descriptions That Rank on Google",
    excerpt: "Master the art of writing product descriptions that not only convert customers but also rank high on Google. Learn the exact framework I use to optimize product pages for both users and search engines.",
    content: `
    <p>In the competitive world of e-commerce, a great product description is more than just a block of text. It's a sales tool, a brand ambassador, and a crucial piece of your SEO strategy. Many store owners underestimate the impact of well-crafted descriptions, but they can be the deciding factor between a bounce and a conversion. In this guide, I'll break down my exact framework for writing product descriptions that not only entice customers but also climb the ranks on Google.</p>
    
    <h2>Step 1: Define Your Target Audience</h2>
    <p>Before you write a single word, you need to know who you're writing for. Are you selling to tech-savvy millennials, budget-conscious parents, or luxury shoppers? Understanding your audience's pain points, desires, and language is key. Create a buyer persona to guide your writing. For example, if you're selling a high-tech gadget, you can use more technical language, but if you're selling a children's toy, your tone should be playful and focus on safety and fun.</p>
    
    <h2>Step 2: Keyword Research for Product Pages</h2>
    <p>SEO starts with keywords. You need to identify the terms your target audience is using to search for products like yours. Use tools like Ahrefs, SEMrush, or even Google's free Keyword Planner to find relevant keywords. Focus on long-tail keywords (e.g., \"eco-friendly yoga mat for sweaty hands\") as they often have higher conversion rates and less competition. Sprinkle these keywords naturally throughout your description, title, and meta tags.</p>
    
    <h3>Finding Primary and Secondary Keywords</h3>
    <p>Your primary keyword should be the most relevant term for your product. Secondary keywords are related terms that support your main keyword. For instance, if your primary keyword is \"organic dog food,\" secondary keywords could be \"grain-free dog food,\" \"natural pet food,\" or \"healthy dog meals.\"</p>

    <h2>Step 3: The AIDA Formula for Persuasive Copy</h2>
    <p>The AIDA model is a classic marketing framework that works wonders for product descriptions:</p>
    <ul>
        <li><strong>Attention:</strong> Grab the reader's attention with a compelling headline or opening sentence.</li>
        <li><strong>Interest:</strong> Build interest by highlighting the most exciting features and benefits. Use bullet points to make this information easy to scan.</li>
        <li><strong>Desire:</strong> Create desire by painting a picture of how the product will improve the customer's life. Tell a story or use sensory language.</li>
        <li><strong>Action:</strong> Encourage the customer to take action with a clear call-to-action (CTA), like \"Add to Cart\" or \"Buy Now.\"</li>
    </ul>

    <h2>Step 4: Focus on Benefits, Not Just Features</h2>
    <p>This is a golden rule of copywriting. Features are what a product <em>is</em> (e.g., \"10,000 mAh battery\"). Benefits are what a product <em>does</em> for the customer (e.g., \"stays powered for your entire weekend trip\"). Customers are more interested in how a product will solve their problems or improve their lives. Always translate features into tangible benefits.</p>

    <h2>Step 5: Optimize for Readability</h2>
    <p>No one wants to read a wall of text. Break up your description into short paragraphs, use subheadings, and incorporate bullet points. This makes the text scannable and easier to digest, especially for mobile users. A clean, well-organized layout improves user experience and can positively impact your SEO.</p>
    `,
    videoId: "k2-w1UWjBEU",
    publishDate: "2025-01-20",
    readTime: "12 min read",
    category: "E-commerce SEO",
    thumbnail: productDescriptionsImage,
    tags: ["SEO", "E-commerce", "Product Descriptions", "Copywriting"]
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
