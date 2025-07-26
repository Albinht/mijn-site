'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';

const post = {
  id: 5,
  title: 'Klaviyo Signup Forms + Email Automation \u2014 Send Deliverables Instantly',
  excerpt: 'Learn how to set up Klaviyo signup forms that trigger an immediate email with your promised download or offer.',
  content: `
    <h2>Why Instant Deliverables Matter</h2>
    <p>When new subscribers sign up, you want to keep momentum going. Sending your lead magnet right away builds trust and keeps engagement high.</p>

    <h2>Setting Up Klaviyo Signup Forms</h2>
    <p>Klaviyo offers embedded forms and pop-ups. Choose the style that fits your brand and collect the information you need.</p>

    <h3>1. Create the Form</h3>
    <p>Navigate to <strong>Signup Forms</strong> inside Klaviyo and design a form that matches your store. Make the call to action clear.</p>

    <h3>2. Connect to a List</h3>
    <p>Each form should add subscribers to its own list. This makes triggering automated emails simple.</p>

    <h2>Automating the First Email</h2>
    <p>Use Klaviyo Flows to send your deliverable immediately after signup. This could be a PDF, discount code, or onboarding guide.</p>

    <h3>1. Build the Flow</h3>
    <p>Start with a <em>List Trigger</em>, then add an Email step linking to your download.</p>

    <h3>2. Test Everything</h3>
    <p>Always test the flow yourself to ensure the email arrives instantly and links work properly.</p>
  `,
  videoId: 'QV6Xt8f8d2w',
  publishDate: '2025-01-30',
  readTime: '10 min read',
  category: 'Email Marketing',
  thumbnail: "https://schilderenopnummerwinkel.nl/wp-content/uploads/2025/07/SCR-20250727-btcn-scaled.png",
  tags: ['Klaviyo', 'Email Automation', 'Lead Generation']
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
};

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
