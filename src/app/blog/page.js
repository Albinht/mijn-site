import prisma from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import avatarImage from '@/assets/niblah-headshot.webp';

export const metadata = {
  title: 'De Niblah Blog - SEO en Marketing Tips | Niblah',
  description: 'Vergroot je SEO en marketing kennis met gedetailleerde tutorials en praktijkvoorbeelden van de Niblah experts.',
};

// Category mapping based on topic and title
function getCategoryData(topic, title) {
  const topicLower = topic?.toLowerCase() || ''
  const titleLower = title?.toLowerCase() || ''
  
  // Check if it's a data/research article
  if (titleLower.includes('onderzoek') || titleLower.includes('data') || titleLower.includes('studie')) {
    return { category: 'DATA & ONDERZOEK', color: 'bg-[#331300]', textColor: 'text-white' }
  }
  
  if (topicLower.includes('seo') || topicLower.includes('search')) {
    return { category: 'SEO', color: 'bg-[#E8C88E]', textColor: 'text-gray-900' }
  }
  
  if (topicLower.includes('google ads') || topicLower.includes('ads') || topicLower.includes('sea')) {
    return { category: 'GOOGLE ADS', color: 'bg-[#B8C5D6]', textColor: 'text-gray-900' }
  }
  if (topicLower.includes('shopify') || topicLower.includes('wordpress') || topicLower.includes('web')) {
    return { category: 'DEVELOPMENT', color: 'bg-[#D4A574]', textColor: 'text-gray-900' }
  }
  if (topicLower.includes('marketing') || topicLower.includes('automation')) {
    return { category: 'MARKETING', color: 'bg-[#E5E5E5]', textColor: 'text-gray-900' }
  }
  
  return { category: 'GENERAL', color: 'bg-gray-200', textColor: 'text-gray-900' }
}

function dateLocale() {
  return 'nl-NL';
}

function getArticleContent(article) {
  if (!article) return null;

  return {
    title: article.title,
    content: article.content,
    topic: article.topic,
    metaTitle: article.metaTitle,
    metaDescription: article.metaDescription,
  };
}

// Add static posts
function getStaticPosts() {
  return [
    {
      id: 'static-customer-service-2026',
      title: 'De beste klantenservice-software in 2026',
      excerpt: 'Complete gids voor de beste tools voor klantenservice en hoe u de juiste keuze maakt.',
      slug: 'de-beste-klantenservice-software-in-2026',
      category: 'GUIDE',
      categoryColor: 'bg-[#FFD43B]',
      categoryTextColor: 'text-gray-900',
      author: 'Albin Hot',
      date: new Date().toLocaleDateString(dateLocale(), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  ];
}

async function getBlogPosts() {
  try {
    // Get dynamic posts from database
    const articles = await prisma.article.findMany({
      where: {
        status: 'PUBLISHED'
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 10
    });
    
    // Get dynamic posts
    const dynamicPosts = articles.map(article => {
      const articleContent = getArticleContent(article);
      const categoryData = getCategoryData(articleContent.topic, articleContent.title);
      const excerpt = articleContent.content?.substring(0, 200) || '';
      const date = new Date(article.createdAt).toLocaleDateString(dateLocale(), {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      return {
        id: article.id,
        title: articleContent.title,
        excerpt: excerpt,
        slug: article.slug,
        category: categoryData.category,
        categoryColor: categoryData.color,
        categoryTextColor: categoryData.textColor,
        author: 'Albin Hot',
        date: date
      };
    });

    // Combine static and dynamic posts
    return [...getStaticPosts(), ...dynamicPosts];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return getStaticPosts();
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
   
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1795FF] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            De Niblah Blog
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Vergroot je SEO en marketing kennis met gedetailleerde tutorials en praktijkvoorbeelden van de Niblah experts.
          </p>
        </div>
      </section> 

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Geen artikelen gevonden. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="border-t-2 border-gray-200 pt-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold ${post.categoryTextColor} ${post.categoryColor} rounded`}>
                      {post.category}
                    </span>
                  </div> 

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#1795FF] transition-colors">
                      {post.title}
                    </h2>
                  </Link> 

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p> 

                  {/* Author & Date */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                      <Image 
                        src={avatarImage}
                        alt={post.author}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
