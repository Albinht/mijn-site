import Image from 'next/image'
import Link from 'next/link'
import Button from '../../../components/Button'
import authorImage from '../../../assets/author.png'
import { getServerLocale } from '@/lib/locale'
import PermanentShopifyAdminApiKeyArticle, {
  getPermanentShopifyAdminApiKeyMeta,
} from '@/components/articles/PermanentShopifyAdminApiKeyArticle'

const resource = {
  slug: 'permanent-shopify-admin-api-key',
  category: 'Shopify API',
  thumbnail: '/shopify-api-integraties.jpeg',
  videoId: 'kDXRcev9d34',
}

export async function generateMetadata() {
  const locale = await getServerLocale()
  const meta = getPermanentShopifyAdminApiKeyMeta(locale)

  return {
    title: `${meta.title} | Resources | Niblah`,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [resource.thumbnail],
    },
  }
}

export default async function ResourceArticlePage() {
  const locale = await getServerLocale()
  const isNl = locale === 'nl'
  const meta = getPermanentShopifyAdminApiKeyMeta(locale)

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 lg:w-2/3">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <Link href="/resources" className="hover:text-blue-600 transition-colors">
                  {isNl ? 'Resources' : 'Resources'}
                </Link>
                <span>•</span>
                <Link href="/resources/ecommerce" className="hover:text-blue-600 transition-colors">
                  {isNl ? 'E-commerce' : 'E-commerce'}
                </Link>
                <span>•</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                  {resource.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">{meta.title}</h1>

              <div className="mb-8 relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${resource.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  title={meta.title}
                />
              </div>
            </div>

            <PermanentShopifyAdminApiKeyArticle locale={locale} />

            <div className="mt-12 p-6 bg-gray-50 rounded-lg flex items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={authorImage} alt="Albin Hot" width={80} height={80} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {isNl ? 'Wil je hulp met implementatie?' : 'Need help implementing this?'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {isNl
                    ? 'Als je Shopify API’s wil koppelen aan je tools of workflows, kan ik je helpen met setup en automatisering.'
                    : 'If you want to connect Shopify APIs to your tools or workflows, I can help with setup and automation.'}
                </p>
                <div className="flex gap-3">
                  <Button as={Link} href="/work-with-me" className="text-sm">
                    {isNl ? 'Plan een gesprek' : 'Work with me'}
                  </Button>
                  <Button as={Link} href="/youtube/permanent-shopify-admin-api-key" variant="secondary" className="text-sm">
                    {isNl ? 'Ook op YouTube' : 'Also on YouTube'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-1/3">
            <div className="sticky top-8 space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {isNl ? 'Bekijk ook' : 'Also see'}
                </h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <Link href="/resources/automation" className="text-blue-600 hover:text-blue-800">
                      {isNl ? 'Automation resources' : 'Automation resources'}
                    </Link>
                  </li>
                  <li>
                    <Link href="/youtube" className="text-blue-600 hover:text-blue-800">
                      {isNl ? 'YouTube tutorials' : 'YouTube tutorials'}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                      {isNl ? 'Blog artikelen' : 'Blog articles'}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
