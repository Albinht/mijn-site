import Link from 'next/link'
import Image from 'next/image'
import { getServerLocale } from '@/lib/locale'
import { getPermanentShopifyAdminApiKeyMeta } from '@/components/articles/PermanentShopifyAdminApiKeyArticle'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const isNl = locale === 'nl'

  return {
    title: isNl ? 'E-commerce Resources | Niblah' : 'E-commerce Resources | Niblah',
    description: isNl
      ? 'Praktische guides en resources voor e-commerce groei.'
      : 'Practical guides and resources for e-commerce growth.',
  }
}

export default async function EcommerceResourcesPage() {
  const locale = await getServerLocale()
  const isNl = locale === 'nl'
  const featured = getPermanentShopifyAdminApiKeyMeta(locale)

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-gray-600 mb-3">
            <Link href="/resources" className="hover:text-gray-900 hover:underline">
              {isNl ? 'Resources' : 'Resources'}
            </Link>{' '}
            <span>•</span> <span>{isNl ? 'E-commerce' : 'E-commerce'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{isNl ? 'E-commerce' : 'E-commerce'}</h1>
          <p className="text-lg text-gray-600 mt-3">
            {isNl
              ? 'Handleidingen en tutorials om je webshop sneller te laten groeien.'
              : 'Guides and tutorials to grow your store faster.'}
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/resources/permanent-shopify-admin-api-key"
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white"
            >
              <div className="relative h-44 bg-gray-100">
                <Image src="/shopify-api-integraties.jpeg" alt={featured.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-purple-800 bg-purple-100 inline-flex px-2 py-1 rounded-full">
                  {isNl ? 'Shopify API' : 'Shopify API'}
                </div>
                <h2 className="text-lg font-bold text-gray-900 mt-3">{featured.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{featured.description}</p>
                <div className="mt-4 text-sm font-semibold text-[#1795FF]">
                  {isNl ? 'Open →' : 'Open →'}
                </div>
              </div>
            </Link>

            <Link
              href="/youtube"
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white"
            >
              <div className="text-xs font-semibold text-gray-700 bg-gray-100 inline-flex px-2 py-1 rounded-full">
                {isNl ? 'Video tutorials' : 'Video tutorials'}
              </div>
              <h2 className="text-lg font-bold text-gray-900 mt-3">
                {isNl ? 'YouTube tutorials' : 'YouTube tutorials'}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {isNl
                  ? 'Bekijk onze nieuwste marketing- en e-commerce tutorials.'
                  : 'Watch our latest marketing and e-commerce tutorials.'}
              </p>
              <div className="mt-4 text-sm font-semibold text-[#1795FF]">
                {isNl ? 'Bekijk →' : 'View →'}
              </div>
            </Link>

            <Link href="/blog" className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
              <div className="text-xs font-semibold text-gray-700 bg-gray-100 inline-flex px-2 py-1 rounded-full">
                {isNl ? 'Artikelen' : 'Articles'}
              </div>
              <h2 className="text-lg font-bold text-gray-900 mt-3">{isNl ? 'Blog' : 'Blog'}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {isNl ? 'Lees diepgaande artikelen over SEO en marketing.' : 'Read in-depth articles on SEO and marketing.'}
              </p>
              <div className="mt-4 text-sm font-semibold text-[#1795FF]">
                {isNl ? 'Lees →' : 'Read →'}
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

