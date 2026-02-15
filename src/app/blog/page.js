import Link from 'next/link'
import Image from 'next/image'
import { headers } from 'next/headers'
import prisma from '@/lib/prisma'
import avatarImage from '../../assets/avatar.png'
import LeadForm from '@/components/LeadForm'

const supportedLocales = ['en', 'de', 'sv', 'da', 'fr', 'it', 'nl']
const defaultLocale = 'en'
const localeCookieName = 'niblah-locale'

const localeAliases = {
  'en-us': 'en',
  'en_us': 'en',
  'en-gb': 'en',
  'de-de': 'de',
  'sv-se': 'sv',
  'da-dk': 'da',
  'fr-fr': 'fr',
  'it-it': 'it',
  'nl-nl': 'nl',
}

export const metadata = {
  title: 'De Niblah Blog - SEO en Marketing Tips | Niblah',
  description: 'Vergroot je SEO en marketing kennis met gedetailleerde tutorials en praktijkvoorbeelden van de Niblah experts.',
}

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

function normalizeLocale(value) {
  if (!value) return null
  const normalized = value.toLowerCase().replace('_', '-')
  if (supportedLocales.includes(normalized)) return normalized
  return localeAliases[normalized] || normalized.split('-')[0]
}

function parseAcceptLanguage(value) {
  if (!value) return []
  return value
    .split(',')
    .map((entry) => {
      const [lang, qValue] = entry.trim().split(';q=')
      return { lang: normalizeLocale(lang), q: qValue ? Number(qValue) : 1 }
    })
    .filter((item) => item.lang)
    .sort((a, b) => b.q - a.q)
    .map((item) => item.lang)
}

function pickPreferredLocale({ cookieLocale, acceptLanguage }) {
  if (cookieLocale && supportedLocales.includes(cookieLocale)) return cookieLocale
  const accepted = parseAcceptLanguage(acceptLanguage)
  const match = accepted.find((locale) => supportedLocales.includes(locale))
  return match || defaultLocale
}

function getLocaleFromCookies(cookieHeader) {
  if (!cookieHeader) return null
  const cookies = Object.fromEntries(cookieHeader.split('; ').map((cookie) => cookie.split('=')))
  return normalizeLocale(cookies[localeCookieName])
}

function localeToDateLocale(locale) {
  const normalized = normalizeLocale(locale) || defaultLocale
  if (normalized === 'en') return 'en-US'
  if (normalized === 'nl') return 'nl-NL'
  if (normalized === 'de') return 'de-DE'
  if (normalized === 'sv') return 'sv-SE'
  if (normalized === 'da') return 'da-DK'
  if (normalized === 'fr') return 'fr-FR'
  if (normalized === 'it') return 'it-IT'
  return normalized
}

function pickTranslatedString(fallback, value) {
  if (typeof value !== 'string') return fallback
  const trimmed = value.trim()
  return trimmed.length > 0 ? value : fallback
}

function getLocalizedArticle(article, locale) {
  const normalized = normalizeLocale(locale) || defaultLocale
  const translations = article?.translations && typeof article.translations === 'object' ? article.translations : null
  const entry = translations?.[normalized] && typeof translations[normalized] === 'object' ? translations[normalized] : null

  return {
    title: pickTranslatedString(article.title, entry?.title),
    topic: pickTranslatedString(article.topic, entry?.topic),
    content: pickTranslatedString(article.content, entry?.content),
    metaTitle: pickTranslatedString(null, entry?.metaTitle),
    metaDescription: pickTranslatedString(null, entry?.metaDescription),
  }
}

async function getBlogPosts(locale) {
  try {
    // Get dynamic posts from database
    const articles = await prisma.article.findMany({
      where: {
        status: 'PUBLISHED'
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 10  // Reduced to make room for static posts
    })
    
    // Get dynamic posts
    const dynamicPosts = articles.map(article => {
      const localized = getLocalizedArticle(article, locale)
      const categoryData = getCategoryData(localized.topic, localized.title)
      const excerpt = localized.content?.substring(0, 200) || ''
      const date = new Date(article.createdAt).toLocaleDateString(localeToDateLocale(locale), { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
      
      return {
        id: article.id,
        title: localized.title,
        excerpt: excerpt,
        slug: article.slug,
        category: categoryData.category,
        categoryColor: categoryData.color,
        categoryTextColor: categoryData.textColor,
        author: 'Albin Hot',
        date: date
      }
    })

    // Add static posts
    const staticPosts = [
      {
        id: 'static-1',
        title: locale === 'nl' ? 'De beste klantenservice-software in 2026' : 
                locale === 'en' ? 'The Best Customer Service Software in 2026' :
                locale === 'de' ? 'Die beste Kundenservice-Software 2026' :
                locale === 'sv' ? 'Bästa kundservice mjukvaran 2026' :
                locale === 'da' ? 'Den bedste kundeservice-software i 2026' :
                locale === 'fr' ? 'Le meilleur logiciel de service client en 2026' :
                locale === 'it' ? 'Il miglior software di assistenza clienti del 2026' : 'De beste klantenservice-software in 2026',
        excerpt: locale === 'nl' ? 'Complete gids voor de beste tools voor klantenservice en hoe u de juiste keuze maakt.' :
                locale === 'en' ? 'Complete guide to the best tools for customer service and how to make the right choice.' :
                locale === 'de' ? 'Vollständiger Leitfaden für die besten Tools für Kundenservice und wie Sie die richtige Wahl treffen.' :
                locale === 'sv' ? 'Komplett guide för de bästa verktygen för kundservice och hur du gör rätt val.' :
                locale === 'da' ? 'Komplet guide til de bedste værktøjer til kundeservice og hvordan du træffer det rigtige valg.' :
                locale === 'fr' ? 'Guide complet des meilleurs outils pour le service client et comment faire le bon choix.' :
                locale === 'it' ? 'Guida completa ai migliori strumenti per l\'assistenza clienti e come fare la scelta giusta.' : 'Complete gids voor de beste tools voor klantenservice en hoe u de juiste keuze maakt.',
        slug: locale === 'nl' ? 'de-beste-klantenservice-software-in-2026' : 
                locale === 'en' ? 'the-best-customer-service-software-in-2026' :
                locale === 'de' ? 'die-beste-kundenservice-software-2026' :
                locale === 'sv' ? 'basta-kundservice-mjukvaran-2026' :
                locale === 'da' ? 'den-bedste-kundeservice-software-i-2026' :
                locale === 'fr' ? 'le-meilleur-logiciel-de-service-client-en-2026' :
                locale === 'it' ? 'il-miglior-software-di-assistenza-clienti-del-2026' : 'de-beste-klantenservice-software-in-2026',
        category: 'GUIDE',
        categoryColor: 'bg-[#FFD43B]',
        categoryTextColor: 'text-gray-900',
        author: 'Albin Hot',
        date: new Date().toLocaleDateString(localeToDateLocale(locale), { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      },
      {
        id: 'static-2',
        title: locale === 'nl' ? 'Marketing Automation Tools: Verhoog uw efficiëntie' : 
                locale === 'en' ? 'Marketing Automation Tools: Increase Your Efficiency' :
                locale === 'de' ? 'Marketing-Automatisierungs-Tools: Erhöhen Sie Ihre Effizienz' :
                locale === 'sv' ? 'Marketing Automatiseringsverktyg: Öka din effektivitet' :
                locale === 'da' ? 'Marketing Automatiseringsværktøjer: Øg din effektivitet' :
                locale === 'fr' ? 'Outils d\'automatisation marketing: Augmentez votre efficacité' :
                locale === 'it' ? 'Strumenti di automazione marketing: Aumenta la tua efficienza' : 'Marketing Automation Tools: Verhoog uw efficiëntie',
        excerpt: locale === 'nl' ? 'Ontdek de beste tools voor marketing automatisering om tijd te besparen en resultaten te verbeteren.' :
                locale === 'en' ? 'Discover the best tools for marketing automation to save time and improve results.' :
                locale === 'de' ? 'Entdecken Sie die besten Tools für Marketing-Automatisierung, um Zeit zu sparen und Ergebnisse zu verbessern.' :
                locale === 'sv' ? 'Upptäck de bästa verktygen för marknadsföringsautomatisering för att spara tid och förbättra resultat.' :
                locale === 'da' ? 'Opdag de bedste værktøjer til marketingautomatisering for at spare tid og forbedre resultater.' :
                locale === 'fr' ? 'Découvrez les meilleurs outils d\'automatisation marketing pour économiser du temps et améliorer les résultats.' :
                locale === 'it' ? 'Scopri i migliori strumenti per l\'automazione del marketing per risparmiare tempo e migliorare i risultati.' : 'Ontdek de beste tools voor marketing automatisering om tijd te besparen en resultaten te verbeteren.',
        slug: locale === 'nl' ? 'marketing-automation-tools' : 
                locale === 'en' ? 'marketing-automation-tools' :
                locale === 'de' ? 'marketing-automation-tools' :
                locale === 'sv' ? 'marketing-automation-tools' :
                locale === 'da' ? 'marketing-automation-tools' :
                locale === 'fr' ? 'marketing-automation-tools' :
                locale === 'it' ? 'marketing-automation-tools' : 'marketing-automation-tools',
        category: 'GUIDE',
        categoryColor: 'bg-[#E8C88E]',
        categoryTextColor: 'text-gray-900',
        author: 'Albin Hot',
        date: new Date(Date.now() - 86400000).toLocaleDateString(localeToDateLocale(locale), { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      }
    ]
    
    // Combine dynamic and static posts
    return [...staticPosts, ...dynamicPosts]
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const headerList = await headers()
  const locale = pickPreferredLocale({
    cookieLocale: getLocaleFromCookies(headerList.get('cookie')),
    acceptLanguage: headerList.get('accept-language'),
  })
  const blogPosts = await getBlogPosts(locale)
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1795FF] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            De Niblah Blog
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Vergroot je SEO en marketing kennis met gedetailleerde tutorials en praktijkvoorbeelden.
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
            <>
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

              {/* Load More Button */}
              {blogPosts.length >= 20 && (
                <div className="text-center mt-12">
                  <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#1795FF] text-white font-semibold rounded-full hover:bg-[#0f7dd4] transition-colors shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-y-0.5 border-2 border-black">
                    Laad meer artikelen
                  </button>
                </div>
              )}
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
