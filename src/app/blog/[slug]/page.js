import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import avatarImage from '../../../assets/avatar.png'
import TableOfContents from './TableOfContents'
import ArticleContent from './ArticleContent'

// Helper function to calculate reading time
function calculateReadingTime(content) {
  const wordsPerMinute = 200
  const words = content?.split(/\s+/).length || 0
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  
  try {
    const article = await prisma.article.findUnique({
      where: { 
        slug,
        status: 'PUBLISHED'
      }
    })
    
    if (!article) {
      return {
        title: 'Artikel Niet Gevonden | Niblah',
        description: 'Dit artikel kon niet worden gevonden.'
      }
    }
    
    const excerpt = article.content?.substring(0, 160) || ''
    
    return {
      title: `${article.title} | Niblah Blog`,
      description: excerpt,
      openGraph: {
        title: article.title,
        description: excerpt,
        type: 'article',
        publishedTime: article.publishedAt || article.createdAt,
      }
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Niblah Blog',
      description: 'SEO en Marketing Tips'
    }
  }
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params
  
  let article, recentArticles
  try {
    article = await prisma.article.findUnique({
      where: { 
        slug,
        status: 'PUBLISHED'
      }
    })
    
    if (!article) {
      return notFound()
    }
    
    // Get recent articles for "Lees verder" and "Blijf leren" sections
    recentArticles = await prisma.article.findMany({
      where: {
        status: 'PUBLISHED',
        NOT: {
          id: article.id
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 9,
      select: {
        id: true,
        title: true,
        slug: true,
        topic: true,
        content: true,
        createdAt: true
      }
    })
    
    prisma.article.update({
      where: { id: article.id },
      data: { views: { increment: 1 } }
    }).catch(err => console.error('Error updating views:', err))
    
  } catch (error) {
    console.error('Error fetching article:', error)
    return notFound()
  }
  
  const publishDate = new Date(article.createdAt).toLocaleDateString('nl-NL', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
  
  const readingTime = calculateReadingTime(article.content)
  
  const leesVerderArticles = recentArticles.slice(0, 3)
  const blijfLerenArticles = recentArticles.slice(0, 6)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#1795FF] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back to Blog */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar blog
          </Link>
          
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-white/20 rounded">
              {article.topic?.toUpperCase() || 'ARTIKEL'}
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {article.title}
          </h1>
          
          {/* Author & Meta */}
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                <Image 
                  src={avatarImage}
                  alt="Albin Hot"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-medium">By Albin Hot</span>
            </div>
            <span>•</span>
            <span>{publishDate}</span>
            <span>•</span>
            <span>{readingTime} min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main Content Section - 3 Columns */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Table of Contents (20%) */}
            <aside className="lg:col-span-2 hidden lg:block">
              <TableOfContents content={article.content} />
            </aside>

            {/* Middle Column - Content (60%) */}
            <article className="lg:col-span-7">
              <ArticleContent content={article.content} />

              {/* Lees Verder Section */}
              {leesVerderArticles.length > 0 && (
                <div className="mt-16 pt-12 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Lees verder</h2>
                  <div className="space-y-6">
                    {leesVerderArticles.map((relatedArticle) => (
                      <Link 
                        key={relatedArticle.id}
                        href={`/blog/${relatedArticle.slug}`}
                        className="block group"
                      >
                        <div className="border-l-4 border-[#1795FF] pl-4 hover:border-[#0f7dd4] transition-colors">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1795FF] mb-2">
                            {relatedArticle.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {relatedArticle.content?.substring(0, 150)}...
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Box */}
              <div className="mt-12 bg-gray-50 rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image 
                      src={avatarImage}
                      alt="Albin Hot"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Albin Hot</h3>
                    <p className="text-gray-600 mb-4">
                      Albin Hot is Senior SEO Specialist bij Niblah, een toonaangevend marketing platform voor zoekmachines, AI en meer. 
                      Hij werkt al meer dan 5 jaar in SEO en specialiseert zich in omzetgedreven strategieën in nauwe samenwerking 
                      met multidisciplinaire teams.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/albin-hot-7a44a41b6/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1795FF] hover:text-[#0f7dd4] font-semibold"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Connect op LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Right Column - Sidebar (20%) */}
            <aside className="lg:col-span-3 space-y-8">
              {/* Author Bio - Sticky */}
              <div className="sticky top-8 space-y-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                      <Image 
                        src={avatarImage}
                        alt="Albin Hot"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">Albin Hot</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Senior SEO Specialist bij Niblah met 5+ jaar ervaring in omzetgedreven SEO strategieën.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/albin-hot-7a44a41b6/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1795FF] hover:text-[#0f7dd4] font-semibold"
                    >
                      Volg op LinkedIn →
                    </a>
                  </div>
                </div>

                {/* Banner Placeholder */}
                <div className="bg-gradient-to-br from-[#1795FF] to-[#0f7dd4] rounded-xl p-6 text-center text-white">
                  <div className="aspect-square flex items-center justify-center">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Banner Space</h3>
                      <p className="text-sm opacity-90">Image placeholder</p>
                    </div>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-[#1795FF] rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Blijf op de hoogte</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Ontvang de nieuwste marketing tips en trends in je inbox
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email"
                      placeholder="je@email.com"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button 
                      type="submit"
                      className="w-full bg-white text-[#1795FF] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Aanmelden
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Blijf Leren Section - Full Width */}
      {blijfLerenArticles.length > 0 && (
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Blijf leren</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blijfLerenArticles.map((relatedArticle) => {
                const articleDate = new Date(relatedArticle.createdAt).toLocaleDateString('nl-NL', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })
                return (
                  <Link 
                    key={relatedArticle.id}
                    href={`/blog/${relatedArticle.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#1795FF] transition-all hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-[#1795FF] bg-blue-50 rounded">
                          {relatedArticle.topic?.toUpperCase() || 'ARTIKEL'}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1795FF] mb-2 line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {relatedArticle.content?.substring(0, 100)}...
                      </p>
                      <p className="text-xs text-gray-500">{articleDate}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export async function generateStaticParams() {
  try {
    const articles = await prisma.article.findMany({
      where: { status: 'PUBLISHED' },
      select: { slug: true }
    })
    
    return articles.map((article) => ({
      slug: article.slug
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
