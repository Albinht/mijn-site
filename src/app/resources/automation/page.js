import Link from 'next/link'
import Image from 'next/image'
import { getPermanentShopifyAdminApiKeyMeta } from '@/components/articles/PermanentShopifyAdminApiKeyArticle'

export async function generateMetadata() {

  return {
    title: 'Automation Resources | Niblah',
    description: 'Automations, workflows en praktische handleidingen.',
  }
}

export default async function AutomationResourcesPage() {
  const featured = getPermanentShopifyAdminApiKeyMeta()

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-gray-600 mb-3">
            <Link href="/resources" className="hover:text-gray-900 hover:underline">
              {'Resources'}
            </Link>{' '}
            <span>•</span> <span>{'Automation'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{'Automation'}</h1>
          <p className="text-lg text-gray-600 mt-3">
            {'Workflows, API’s en tools om handmatig werk te automatiseren.'}
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
                  {'Shopify API'}
                </div>
                <h2 className="text-lg font-bold text-gray-900 mt-3">{featured.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{featured.description}</p>
                <div className="mt-4 text-sm font-semibold text-[#1795FF]">
                  {'Open →'}
                </div>
              </div>
            </Link>

            <Link
              href="/tools"
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white"
            >
              <div className="text-xs font-semibold text-gray-700 bg-gray-100 inline-flex px-2 py-1 rounded-full">
                {'Tools'}
              </div>
              <h2 className="text-lg font-bold text-gray-900 mt-3">{'Tools & calculators'}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {'Gebruik onze tools om sneller te analyseren en te beslissen.'}
              </p>
              <div className="mt-4 text-sm font-semibold text-[#1795FF]">
                {'Bekijk →'}
              </div>
            </Link>

            <Link
              href="/youtube"
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white"
            >
              <div className="text-xs font-semibold text-gray-700 bg-gray-100 inline-flex px-2 py-1 rounded-full">
                {'Video'}
              </div>
              <h2 className="text-lg font-bold text-gray-900 mt-3">{'YouTube tutorials'}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {'Praktische automations en integraties stap voor stap.'}
              </p>
              <div className="mt-4 text-sm font-semibold text-[#1795FF]">
                {'Bekijk →'}
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

