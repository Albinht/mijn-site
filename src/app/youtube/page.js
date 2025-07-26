import Link from 'next/link'
import Image from 'next/image'
import Button from '../../components/Button'
import avatarImage from '../../assets/avatar.png'
import productDescriptionsImage from '../../assets/Product descriptions.png'
import ecomSeoFrameworkImage from '../../assets/E-com SEO framework.png'
import translateVideoImage from '../../assets/translate video.png'
import n8nEmailImage from '../../assets/n8n-email-automation.png'

// Blog posts data - easily add new posts here (sorted newest to oldest)
const blogPosts = [
  {
    id: 5,
    slug: "klaviyo-signup-forms-email-automation-send-deliverables-instantly",
    title: "Klaviyo Signup Forms + Email Automation — Send Deliverables Instantly",
    excerpt: "Learn how to build Klaviyo signup forms that instantly send your lead magnet or welcome offer.",
    publishDate: "2025-01-30",
    readTime: "10 min read",
    category: "Email Marketing",
    thumbnail: n8nEmailImage,
    tags: ["Klaviyo", "Email Automation", "Lead Generation"]
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
            {blogPosts.map((post) => (
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
