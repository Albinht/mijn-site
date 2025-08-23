import Link from 'next/link'
import Image from 'next/image'
import Button from '../../components/Button'
import avatarImage from '../../assets/avatar.png'
import productDescriptionsImage from '../../assets/Product descriptions.png'
import ecomSeoFrameworkImage from '../../assets/E-com SEO framework.png'
import translateVideoImage from '../../assets/translate video.png'
import n8nEmailImage from '../../assets/n8n-email-automation.png'
import n8nWhatsAppImage from '../../assets/n8n-whatsapp-chatbot.png'
import apiGuideWhatsAppImage from '../../assets/API guide whatsapp.webp'
import n8nOpenRouterImage from '../../assets/n8n open router.webp'
import klaviyoImage from '../../assets/klaviyo.png'
import apifyVideoImage from '../../assets/Apify video.jpg'
import shopifyTranslateAiImage from '../../assets/SCR-20250806-pnlp.png'
import gscAutoIndexerImage from '../../assets/indexing.png'
import credentialsImage from '../../assets/credentials.jpeg'
import shopifyMultilanguageImage from '../../assets/SCR-20250806-pnlp.png'

// Blog posts data - easily add new posts here (sorted newest to oldest)
const blogPosts = [
  {
    id: 13,
    slug: "automate-shopify-multi-language-for-free-no-translation-apps",
    title: "UPDATED: Automate Shopify Multi Language for Free - no need for Shopify translation apps",
    excerpt: "Discover how to automate multi-language support for your Shopify store without expensive translation apps. Learn advanced automation techniques using n8n, AI translation, and smart workflows to scale internationally with minimal manual work.",
    publishDate: "2025-08-23",
    readTime: "25 min read",
    category: "Shopify Automation",
    thumbnail: shopifyMultilanguageImage,
    tags: ["Shopify", "Automation", "Translation", "n8n", "AI", "International", "E-commerce", "SEO"]
  },
  {
    id: 12,
    slug: "google-api-credentials-setup",
    title: "How to Set Up Google API Credentials for N8N Automation - Complete Guide",
    excerpt: "Learn the complete process of setting up Google API credentials for automation workflows. From Google Cloud Console configuration to OAuth setup, consent screen management, and N8N integration - everything you need for secure, reliable API access.",
    publishDate: "2025-08-10",
    readTime: "18 min read",
    category: "API Setup",
    thumbnail: credentialsImage,
    tags: ["Google API", "OAuth", "N8N", "Automation", "Google Cloud", "API Credentials", "Setup", "Tutorial"]
  },
  {
    id: 11,
    slug: "google-search-console-auto-indexer",
    title: "Automate Google Search Console Indexing with n8n - Complete Tutorial",
    excerpt: "Learn how to build a complete automated indexing system for Google Search Console using n8n workflow automation. Stop manually submitting URLs and let automation handle the indexing process with smart conditional logic, error handling, and performance optimization.",
    publishDate: "2025-08-10",
    readTime: "25 min read",
    category: "SEO Automation",
    thumbnail: gscAutoIndexerImage,
    tags: ["N8N", "Google Search Console", "SEO", "Automation", "Indexing", "Workflow", "API", "OAuth"]
  },
  {
    id: 10,
    slug: "translate-your-shopify-store-automatically-with-ai-n8n-google-sheets",
    title: "Translate Your Shopify Store Automatically with AI + n8n & Google Sheets (No Manual Work!)",
    excerpt: "If you're scaling internationally with Shopify, you know the pain of manually translating every product, blog, and page. It's slow, error-prone, and definitely not scalable. Learn how to build a fully automated translation workflow using Google Sheets, n8n, and OpenRouter AI for high-quality, SEO-friendly outputs with no manual work.",
    publishDate: "2025-08-06",
    readTime: "22 min read",
    category: "Shopify Automation",
    thumbnail: shopifyTranslateAiImage,
    tags: ["Shopify", "AI", "N8N", "Google Sheets", "Translation", "OpenRouter", "Automation", "SEO", "International"]
  },
  {
    id: 9,
    slug: "automated-lead-scraping-with-apify-and-n8n-google-maps-to-sheets",
    title: "Automated Lead Scraping with Apify and N8N: Google Maps to Sheets",
    excerpt: "Learn how to build a fully automated system to scrape leads from Google Maps using Apify, enrich them with AI, and store them in Google Sheets using N8N. Complete with personalized cold outreach generation.",
    publishDate: "2025-07-29",
    readTime: "15 min read",
    category: "Lead Generation",
    thumbnail: apifyVideoImage,
    tags: ["N8N", "Apify", "Lead Generation", "Google Maps", "AI", "Automation", "Google Sheets"]
  },
  {
    id: 8,
    slug: "klaviyo-signup-forms-email-automation-send-deliverables-instantly",
    title: "Klaviyo Signup Forms + Email Automation — Send Deliverables Instantly",
    excerpt: "Learn how to set up Klaviyo signup forms and automate instant delivery of lead magnets. Complete guide to building trust and engagement with new subscribers through automated email sequences.",
    publishDate: "2025-07-27",
    readTime: "12 min read",
    category: "Email Marketing",
    thumbnail: klaviyoImage,
    tags: ["Klaviyo", "Email Marketing", "Automation", "Lead Magnets", "Signup Forms", "E-commerce"]
  },
  {
    id: 5,
    slug: "build-your-own-whatsapp-chatbot-with-n8n-no-code-guide",
    title: "Build Your Own WhatsApp Chatbot with N8N (No-Code Guide)",
    excerpt: "Learn how to create a powerful AI-powered WhatsApp chatbot using N8N without any coding. Complete tutorial with OpenRouter integration and WhatsApp Business API setup.",
    publishDate: "2025-07-28",
    readTime: "25 min read",
    category: "Chatbot Automation",
    thumbnail: n8nWhatsAppImage,
    tags: ["N8N", "WhatsApp", "Chatbot", "AI", "OpenRouter", "No-Code", "Automation"]
  },
  {
    id: 6,
    slug: "how-to-connect-open-router-to-n8n",
    title: "How to Connect Open Router to N8N",
    excerpt: "Complete step-by-step guide to integrate OpenRouter API with N8N for AI-powered workflows. Access 100+ AI models including GPT-4, Claude, and Llama through one unified API.",
    publishDate: "2025-07-28",
    readTime: "15 min read",
    category: "AI Integration",
    thumbnail: n8nOpenRouterImage,
    tags: ["OpenRouter", "N8N", "AI", "API", "GPT-4", "Claude", "Integration"]
  },
  {
    id: 7,
    slug: "how-to-connect-whatsapp-business-cloud-credentials-to-n8n",
    title: "How to Connect WhatsApp Business Cloud Credentials to N8N",
    excerpt: "Complete step-by-step guide to integrate WhatsApp Business Cloud API with N8N. Learn how to set up webhooks, send messages, and handle incoming communications for automated customer service.",
    publishDate: "2025-07-28",
    readTime: "20 min read",
    category: "WhatsApp Integration",
    thumbnail: apiGuideWhatsAppImage,
    tags: ["WhatsApp", "N8N", "Business API", "Webhook", "Meta", "Customer Service", "Automation"]
  },
  {
    id: 4,
    slug: "cold-email-automation-in-n8n-step-by-step-with-free-template",
    title: "Cold Email Automation in N8N – Step-by-Step with FREE Template",
    excerpt: "Master cold email automation with N8N! Learn how to pull leads from Google Sheets, randomize content, personalize emails, and automate bulk sending with proper delays to avoid spam filters.",
    publishDate: "2025-01-25",
    readTime: "20 min read",
    category: "Email Marketing",
    thumbnail: n8nEmailImage,
    tags: ["N8N", "Email Automation", "Cold Email", "JavaScript", "Google Sheets"]
  },
  {
    id: 1,
    slug: "how-to-write-product-descriptions-that-rank-on-google",
    title: "How to Write Product Descriptions That Rank on Google",
    excerpt: "Master the art of writing product descriptions that not only convert customers but also rank high on Google. Learn the exact framework I use to optimize product pages for both users and search engines.",
    publishDate: "2025-01-20",
    readTime: "12 min read",
    category: "E-commerce SEO",
    thumbnail: productDescriptionsImage,
    tags: ["SEO", "E-commerce", "Product Descriptions", "Copywriting"]
  },
  {
    id: 2,
    slug: "real-ecommerce-seo-my-framework-for-long-term-organic-growth",
    title: "Real Ecommerce SEO: My Framework for Long-Term Organic Growth",
    excerpt: "Discover my proven e-commerce SEO framework that drives sustainable organic growth. From technical optimization to content strategy, learn the complete system I use to scale online stores.",
    publishDate: "2025-01-15",
    readTime: "18 min read",
    category: "E-commerce SEO",
    thumbnail: ecomSeoFrameworkImage,
    tags: ["SEO", "E-commerce", "Framework", "Organic Growth"]
  },
  {
    id: 3,
    slug: "shopify-translate-and-adapt-add-unlimited-languages-bulk-translation-hack",
    title: "Shopify Translate & Adapt: Add Unlimited Languages – Bulk Translation Hack",
    excerpt: "Unlock global markets with this Shopify translation hack! Learn how to add unlimited languages to your store using Translate & Adapt, plus my bulk translation method to save hours of work.",
    publishDate: "2025-01-10",
    readTime: "15 min read",
    category: "Shopify Tutorial",
    thumbnail: translateVideoImage,
    tags: ["Shopify", "Translation", "International", "Tutorial"]
  }
];

const BlogCard = ({ post }) => (
  <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-48 bg-gray-100">
      <Image
        src={post.thumbnail}
        alt={post.title}
        fill
        className="object-cover"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <time>{new Date(post.publishDate).toLocaleDateString('nl-NL', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</time>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      
      <Link href={`/youtube/${post.slug}`}>
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer">
          {post.title}
        </h2>
      </Link>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span 
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <Link href={`/youtube/${post.slug}`}>
        <Button className="w-full">
          Watch Video & Read More <span>→</span>
        </Button>
      </Link>
    </div>
  </article>
);

export default function YouTubePage() {
  // Sort blog posts by publish date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-4 md:py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              YouTube <span className="bg-[#F7D8FA] px-2 rounded italic">Video</span> Blog
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Practical SEO and marketing tutorials, case studies and tips. 
              Everything you need to grow your online business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href="https://www.youtube.com/channel/UCvy37Ft-33KdCaYVCDHA35Q" target="_blank" rel="noopener noreferrer">
                Subscribe on YouTube <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Work with me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest <span className="bg-[#F7D8FA] px-2 rounded italic">Videos</span> & Tutorials
            </h2>
            <p className="text-lg text-gray-600">
              Practical marketing content you can apply immediately
            </p>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don&apos;t miss new <span className="bg-[#F7D8FA] px-2 rounded italic">videos</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Weekly practical marketing tips and case studies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as="a" href="https://youtube.com/@albinhot" target="_blank" rel="noopener noreferrer">
              Subscribe on YouTube <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/blueprints/seo">
              View SEO Blueprint
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
