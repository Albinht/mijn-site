import prisma from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import avatarImage from '@/assets/avatar.png';
import LeadForm from '@/components/LeadForm';

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

      {/* Lead Form Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
            {/* Left - Text Content */}
            <div>
              {/* Top Pills */}
              <div className="flex items-center gap-0 mb-8">
                <button className="px-3 md:px-6 py-1.5 md:py-2.5 bg-[#241C15] text-white font-semibold rounded-l-full border-2 border-[#241C15] text-xs md:text-base whitespace-nowrap">
                  Probeer het gratis
                </button>
                <button className="px-3 md:px-6 py-1.5 md:py-2.5 bg-white text-gray-900 font-normal rounded-r-full border-2 border-[#241C15] border-l-0 text-xs md:text-base">
                  <span className="font-semibold">Bespaar 25%</span> <span className="hidden sm:inline">t.o.v. grote bureaus</span><span className="sm:hidden">vs bureaus</span>
                </button>
              </div>

              {/* Title */}
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Maak gratis kennis met onze <span className="relative inline-block">
                  marketingdiensten
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#FFD43B] -z-10"></span>
                </span>
              </h2> 

              {/* Description */}
              <p className="text-lg text-gray-900 mb-8 leading-relaxed">
                Kom erachter waarom klanten massaal hun marketingbureaus ontslaan en kiezen voor een boutique bureau dat in staat is allround service te bieden met een direct contactpersoon. Weet met wie je te maken hebt.
              </p>
              
              {/* Features Grid - 2 columns */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Direct contact met je specialist</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">30+ jaar ervaring in één team</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Allround service onder één dak</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Transparante rapportages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Snelle response tijd</span>
                  </div>
                </div>
              </div>

              {/* Ontdek onze diensten button */}
              <div className="flex items-center gap-3">
                <span className="text-lg font-normal text-gray-900">Ontdek onze diensten</span>
                <Link 
                  href="/services"
                  className="flex items-center justify-center w-10 h-10 bg-[#1795FF] rounded-full hover:bg-[#0f7dd4] transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right - Lead Form */}
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
