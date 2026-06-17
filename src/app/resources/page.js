import Link from 'next/link'
import Image from 'next/image'
import { getPermanentShopifyAdminApiKeyMeta } from '@/components/articles/PermanentShopifyAdminApiKeyArticle'

export async function generateMetadata() {

  return {
    title: 'Resources | Niblah',
    description: 'Handleidingen, tutorials en tools om je business te laten groeien.',
  }
}

export default async function ResourcesPage() {
  const featured = getPermanentShopifyAdminApiKeyMeta()

  const categories = [
    {
      href: '/resources/ecommerce',
      title: 'E-commerce',
      description: 'Strategieën en handleidingen voor webshops',
      icon: '🛒',
    },
    {
      href: '/resources/content',
      title: 'Content',
      description: 'Content creatie, SEO en copywriting',
      icon: '📝',
    },
    {
      href: '/resources/automation',
      title: 'Automation',
      description: 'Automatiseer processen met tools en workflows',
      icon: '⚡',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#1795FF] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {'Resources'}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {'Alles om sneller te leren: tutorials, checklists en praktische guides.'}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{'Categorieën'}</h2>
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
              <h2 className="text-2xl font-bold text-gray-900">{'Uitgelicht'}</h2>
              <div className="flex gap-3">
                <Link href="/youtube" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline">
                  {'YouTube'}
                </Link>
                <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline">
                  {'Blog'}
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
                  {'Shopify API'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-4">{featured.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{featured.description}</p>
                <div className="mt-4 text-sm font-semibold text-[#1795FF]">
                  {'Lees de handleiding →'}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

