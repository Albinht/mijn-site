import Link from 'next/link'
import Image from 'next/image'
import prisma from '@/lib/prisma'
import avatarImage from '../../../../assets/niblah-headshot.webp'

export const metadata = {
  title: 'Data & Onderzoek - Marketing Studies | Niblah',
  description: 'Ontdek onze marketing studies, data analyses en research rapporten.',
}

async function getDataStudies() {
  try {
    // Haal data & onderzoek artikelen op
    const articles = await prisma.article.findMany({
      where: {
        status: 'PUBLISHED',
        topic: 'SEO' // Data onderzoeken zijn momenteel onder SEO topic
      },
      orderBy: {
        publishedAt: 'desc'
      },
      take: 20
    })
    
    // Filter alleen onderzoek artikelen
    const studies = articles.filter(article => 
      article.title.toLowerCase().includes('onderzoek') ||
      article.title.toLowerCase().includes('data') ||
      article.title.toLowerCase().includes('studie')
    )
    
    return studies.map(article => {
      const excerpt = article.content?.substring(0, 200).replace(/\n/g, ' ') || 'Lees meer...'
      const date = new Date(article.publishedAt || article.createdAt).toLocaleDateString('nl-NL', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
      const wordCount = article.content?.split(/\s+/).length || 0
      const readingTime = Math.ceil(wordCount / 200) // 200 woorden per minuut
      
      return {
        id: article.id,
        title: article.title,
        excerpt: excerpt,
        slug: article.slug,
        category: 'DATA & ONDERZOEK',
        categoryColor: 'bg-[#331300]',
        author: 'Albin Hot',
        date: date,
        readingTime: readingTime
      }
    })
  } catch (error) {
    console.error('Error fetching data studies:', error)
    return []
  }
}

export default async function DataOnderzoekPage() {
  const studies = await getDataStudies()
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1795FF] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Data & Onderzoek
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Marketing studies en data-gedreven onderzoek.
          </p>
        </div>
      </section>

      {/* Studies Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {studies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Geen studies gevonden. Check back soon!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {studies.map((study) => (
                  <article key={study.id} className="border-t-2 border-gray-200 pt-6">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold text-white ${study.categoryColor} rounded`}>
                        {study.category}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${study.slug}`}>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#1795FF] transition-colors">
                        {study.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {study.excerpt}...
                    </p>

                    {/* Author, Date & Reading Time */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden relative">
                          <Image 
                            src={avatarImage}
                            alt={study.author}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{study.author}</p>
                          <p className="text-sm text-gray-500">{study.date}</p>
                        </div>
                      </div>
                      {study.readingTime && (
                        <div className="text-sm text-gray-500">
                          {study.readingTime} min leestijd
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

    </main>
  )
}
