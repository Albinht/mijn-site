'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import translateVideoImage from '../../../assets/translate video.png';

const post = {
    id: 3,
    title: "Shopify Translate & Adapt: Add Unlimited Languages – Bulk Translation Hack",
    excerpt: "Unlock global markets with this Shopify translation hack! Learn how to add unlimited languages to your store using Translate & Adapt, plus my bulk translation method to save hours of work.",
    content: `
      <h2>Why Shopify Translate & Adapt is a Game Changer</h2>
      <p>Shopify's free Translate & Adapt app is incredibly powerful for international SEO and sales. It allows you to:</p>
      <ul>
        <li>Add unlimited languages to your store</li>
        <li>Manually or automatically translate all your content (products, collections, blogs, etc.)</li>
        <li>Create unique URLs for each language (e.g., yourstore.com/fr)</li>
        <li>Localize content beyond just translation, like adapting for cultural nuances</li>
      </ul>

      <h2>My Bulk Translation Hack</h2>
      <p>Here's where most people waste hours manually translating. Instead, use this bulk method:</p>

      <h3>Method 1: CSV Export/Import</h3>
      <ol>
        <li>Go to Settings > Languages in your Shopify admin.</li>
        <li>Add your target language.</li>
        <li>Use the Translate & Adapt app to export your content as a CSV file.</li>
        <li>Open the CSV in Google Sheets or Excel. You'll see a column for the original language and an empty one for the new language.</li>
        <li>Use the <code>GOOGLETRANSLATE</code> formula in Sheets to instantly translate all content. For example: <code>=GOOGLETRANSLATE(A2, "en", "fr")</code></li>
        <li>Review and refine the translations. Pay attention to brand names and technical terms.</li>
        <li>Import the completed CSV back into Shopify.</li>
      </ol>

      <h3>Method 2: Using AI Tools (Advanced)</h3>
      <p>For higher quality, use an AI tool like DeepL or OpenAI's GPT-4:</p>
      <ol>
        <li>Export the CSV as above.</li>
        <li>Use the AI's API with a simple script (Python or JavaScript) to loop through the CSV and translate each row.</li>
        <li>This provides more natural-sounding translations than standard machine translation.</li>
      </ol>

      <h2>Implementation Timeline</h2>
      <p>Here’s a realistic timeline for launching a new language:</p>
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
    publishDate: "2025-01-10",
    readTime: "15 min read",
    category: "Shopify Tutorial",
    thumbnail: translateVideoImage,
    tags: ["Shopify", "Translation", "International", "Tutorial"]
};

function TableOfContents({ content }) {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        const foundHeadings = Array.from(tempDiv.querySelectorAll('h2, h3'))
            .map(h => ({
                level: parseInt(h.tagName.substring(1)),
                text: h.innerText,
                id: h.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            }));
        
        foundHeadings.forEach(h => {
            const elements = Array.from(tempDiv.querySelectorAll(`h${h.level}`));
            const element = elements.find(el => el.innerText === h.text);
            if (element) {
                element.id = h.id;
            }
        });

        setHeadings(foundHeadings);
    }, [content]);

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
                        <div className="prose prose-lg max-w-none text-gray-800 mb-12 blog-content" dangerouslySetInnerHTML={{ __html: processedContent }} />
                        
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
                            <TableOfContents content={processedContent} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
