import Link from 'next/link'
import Image from 'next/image'
import { getServerLocale } from '@/lib/locale'
import { getPermanentShopifyAdminApiKeyMeta } from '@/components/articles/PermanentShopifyAdminApiKeyArticle'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const isNl = locale === 'nl'

  return {
    title: isNl ? 'Resources | Niblah' : 'Resources | Niblah',
    description: isNl
      ? 'Handleidingen, tutorials en tools om je business te laten groeien.'
      : 'Guides, tutorials, and tools to grow your business.',
  }
}

export default async function ResourcesPage() {
  const locale = await getServerLocale()
  const isNl = locale === 'nl'
  const featured = getPermanentShopifyAdminApiKeyMeta(locale)

  const categories = [
    {
      href: '/resources/ecommerce',
      title: isNl ? 'E-commerce' : 'E-commerce',
      description: isNl ? 'Strategieën en handleidingen voor webshops' : 'Strategies and guides for online stores',
      icon: '🛒',
    },
    {
      href: '/resources/content',
      title: isNl ? 'Content' : 'Content',
      description: isNl ? 'Content creatie, SEO en copywriting' : 'Content creation, SEO, and copywriting',
      icon: '📝',
    },
    {
      href: '/resources/automation',
      title: isNl ? 'Automation' : 'Automation',
      description: isNl ? 'Automatiseer processen met tools en workflows' : 'Automate processes with tools and workflows',
      icon: '⚡',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#1795FF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isNl ? 'Resources' : 'Resources'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {isNl
              ? 'Alles om sneller te leren: tutorials, checklists en praktische guides.'
              : 'Everything to learn faster: tutorials, checklists, and practical guides.'}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{isNl ? 'Categorieën' : 'Categories'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="text-2xl mb-3">{category.icon}</div>
                <div className="text-lg font-semibold text-gray-900">{category.title}</div>
                <div className="text-sm text-gray-600 mt-2">{category.description}</div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <div className="flex items-center justify-between gap-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{isNl ? 'Uitgelicht' : 'Featured'}</h2>
              <div className="flex gap-3">
                <Link href="/youtube" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline">
                  {isNl ? 'YouTube' : 'YouTube'}
                </Link>
                <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline">
                  {isNl ? 'Blog' : 'Blog'}
                </Link>
              </div>
            </div>

            <Link
              href="/resources/permanent-shopify-admin-api-key"
              className="grid grid-cols-1 md:grid-cols-5 gap-6 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative md:col-span-2 h-56 md:h-auto bg-gray-100">
                <Image src="/shopify-api-integraties.jpeg" alt={featured.title} fill className="object-cover" />
              </div>
              <div className="md:col-span-3 p-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full px-3 py-1">
                  {isNl ? 'Shopify API' : 'Shopify API'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-4">{featured.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{featured.description}</p>
                <div className="mt-4 text-sm font-semibold text-[#1795FF]">
                  {isNl ? 'Lees de handleiding →' : 'Read the guide →'}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

