import Link from 'next/link'
import Image from 'next/image'
import prisma from '@/lib/prisma'
import avatarImage from '../../../../assets/avatar.png'
import LeadForm from '@/components/LeadForm'

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
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Direct contact met je specialist</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">30+ jaar ervaring in één team</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Geen lange wachttijden</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Transparante rapportages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Persoonlijke aanpak</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right - Lead Form */}
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  )
}
