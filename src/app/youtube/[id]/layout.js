import productDescriptionsImage from '../../../assets/Product descriptions.png'
import ecomSeoFrameworkImage from '../../../assets/E-com SEO framework.png'
import translateVideoImage from '../../../assets/translate video.png'

// Blog posts data for metadata generation
const blogPosts = [
  {
    id: 1,
    title: "How to Write Product Descriptions That Rank on Google",
    excerpt: "Master the art of writing product descriptions that not only convert customers but also rank high on Google. Learn the exact framework I use to optimize product pages for both users and search engines.",
    tags: ["SEO", "E-commerce", "Product Descriptions", "Copywriting"],
    publishDate: "2024-01-20"
  },
  {
    id: 2,
    title: "Real Ecommerce SEO: My Framework for Long-Term Organic Growth",
    excerpt: "Discover my proven e-commerce SEO framework that drives sustainable organic growth. From technical optimization to content strategy, learn the complete system I use to scale online stores.",
    tags: ["SEO", "E-commerce", "Framework", "Organic Growth"],
    publishDate: "2024-01-15"
  },
  {
    id: 3,
    title: "Shopify Translate & Adapt: Add Unlimited Languages – Bulk Translation Hack",
    excerpt: "Unlock global markets with this Shopify translation hack! Learn how to add unlimited languages to your store using Translate & Adapt, plus my bulk translation method to save hours of work.",
    tags: ["Shopify", "Translation", "International", "Tutorial"],
    publishDate: "2024-01-10"
  }
];

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Niblah',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | Niblah Digital Marketing Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', ') + ', digital marketing, SEO, marketing tips',
    openGraph: {
      title: `${post.title} | Niblah`,
      description: post.excerpt,
      images: ['/avatar.png'],
      type: 'article',
      publishedTime: post.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Niblah`,
      description: post.excerpt,
      images: ['/avatar.png'],
    },
  };
}

export default function BlogPostLayout({ children }) {
  return children;
}
