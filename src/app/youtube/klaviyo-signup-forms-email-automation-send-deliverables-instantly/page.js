<<<<<<< HEAD
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import authorImage from '../../../assets/author.png';
import n8nEmailImage from '../../../assets/n8n-email-automation.png';

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
  thumbnail: n8nEmailImage,
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
=======
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
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Contents</h3>
            <ul className="space-y-2">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className={`text-sm transition-colors ${
                                activeSection === section.id
                                    ? 'text-blue-600 font-medium'
                                    : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Content component
function BlogContent() {
    return (
        <>
            <h2 id="why-instant-deliverables-matter">Why Instant Deliverables Matter</h2>
            <p>When new subscribers sign up, you want to keep momentum going. Sending your lead magnet right away builds trust and keeps engagement high.</p>
            
            <p>The faster you deliver value, the more likely subscribers are to:</p>
            <ul>
                <li>Open your future emails</li>
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
            <p>Each form should add subscribers to its own list. This makes triggering automated emails simple.</p>
            
            <p>Benefits of using dedicated lists:</p>
            <ul>
                <li>Easy segmentation</li>
                <li>Targeted messaging</li>
                <li>Better automation triggers</li>
                <li>Cleaner analytics</li>
            </ul>

            <h2 id="automating-the-first-email">Automating the First Email</h2>
            <p>Use Klaviyo Flows to send your deliverable immediately after signup. This could be a PDF, discount code, or onboarding guide.</p>

            <h3>1. Build the Flow</h3>
            <p>Start with a <strong>List Trigger</strong>, then add an <strong>Email step</strong> linking to your download.</p>
            
            <p>Essential flow components:</p>
            <ul>
                <li><strong>Trigger:</strong> Someone subscribribed to a list</li>
                <li><strong>Filter:</strong> (Optional) Additional conditions</li>
                <li><strong>Email:</strong> Welcome email with deliverable</li>
                <li><strong>Delay:</strong> Set to 0 minutes for instant delivery</li>
            </ul>

            <h3>2. Test Everything</h3>
            <p>Always test the flow yourself to ensure the email arrives instantly and links work properly.</p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            <strong>Testing Checklist:</strong> Use a test email address, check spam folders, verify download links, and test on mobile devices.
                        </p>
                    </div>
                </div>
            </div>

            <h2 id="best-practices">Best Practices</h2>
            <p>To maximize the effectiveness of your Klaviyo signup forms and automation:</p>
            
            <ul>
                <li><strong>Mobile Optimization:</strong> Ensure forms work perfectly on mobile devices</li>
                <li><strong>Clear Value Proposition:</strong> Make it obvious what subscribers will receive</li>
                <li><strong>Brand Consistency:</strong> Match your form design to your website</li>
                <li><strong>A/B Testing:</strong> Test different form designs and copy</li>
                <li><strong>Follow-up Sequence:</strong> Don't stop at one email - create a welcome series</li>
            </ul>

            <h2 id="conclusion">Conclusion</h2>
            <p>Setting up instant deliverables with Klaviyo signup forms is a powerful way to build trust and engagement with new subscribers. By automating the process, you ensure every new subscriber gets immediate value while freeing up your time to focus on other aspects of your business.</p>
            
            <p>The key is to keep the process simple, test thoroughly, and always deliver on your promises. When done right, this system will help you build a loyal email list that converts.</p>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <div className="flex">
                    <div className="ml-3">
                        <p className="text-sm text-green-700">
                            <strong>Next Steps:</strong> Start with one simple lead magnet and gradually expand your automated email sequences as you learn what works best for your audience.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

// Author bio component
function AuthorBio() {
    return (
        <div className="bg-gray-50 rounded-lg p-6 mt-12">
            <div className="flex items-start space-x-4">
                <Image
                    src={authorImage}
                    alt="Author"
                    width={64}
                    height={64}
                    className="rounded-full"
                />
                <div>
                    <h3 className="font-semibold text-gray-900">About the Author</h3>
                    <p className="text-gray-600 text-sm mt-1">
                        Digital marketing expert specializing in email automation and e-commerce growth strategies. 
                        Helping businesses build profitable email marketing systems that convert.
                    </p>
                </div>
            </div>
        </div>
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
    tags: ["Klaviyo", "Email Marketing", "Automation", "Lead Magnets", "Signup Forms", "E-commerce"]
};

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
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Header */}
                <header className="mb-8">
                    <div className="mb-4">
                        <Link href="/youtube" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            ← Back to YouTube Tutorials
                        </Link>
                    </div>
                    
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                        <span>Published {post.publishDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{post.category}</span>
                    </div>

                    <p className="text-xl text-gray-600 leading-relaxed">{post.description}</p>
                </header>

                {/* Video */}
                <div className="mb-8">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${post.videoId}`}
                            title={post.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <main className="lg:col-span-3">
                        <article className="prose prose-lg max-w-none">
                            <BlogContent />
                        </article>
                        
                        <AuthorBio />
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-8">
                            <TableOfContents />
                            
                            {/* Tags */}
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-4 text-gray-900">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
>>>>>>> 5115cba (Je commit message hier)
}
