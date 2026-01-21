import Image from 'next/image'
import Link from 'next/link'
import Button from '../../../components/Button'
import authorImage from '../../../assets/author.png'
import { getServerLocale } from '@/lib/locale'
import PermanentShopifyAdminApiKeyArticle, {
  getPermanentShopifyAdminApiKeyMeta,
} from '@/components/articles/PermanentShopifyAdminApiKeyArticle'

const post = {
  slug: 'permanent-shopify-admin-api-key',
  category: 'Shopify API',
  publishDate: '2026-01-21',
  readTime: '10 min read',
  tags: ['Shopify', 'Admin API', 'OAuth', 'Access Token', 'Postman', 'webhook.site'],
  thumbnail: '/shopify-api-integraties.jpeg',
  videoId: 'kDXRcev9d34',
}

export async function generateMetadata() {
  const locale = await getServerLocale()
  const meta = getPermanentShopifyAdminApiKeyMeta(locale)

  return {
    title: `${meta.title} | Niblah`,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [post.thumbnail],
    },
  }
}

export default async function YouTubeArticlePage() {
  const locale = await getServerLocale()
  const meta = getPermanentShopifyAdminApiKeyMeta(locale)

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 lg:w-2/3">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <Link href="/youtube" className="hover:text-blue-600 transition-colors">
                  YouTube
                </Link>
                <span>•</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.publishDate}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {meta.title}
              </h1>

              <div className="relative h-56 w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <Image src={post.thumbnail} alt={meta.title} fill className="object-cover" />
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {post.videoId ? (
              <div className="mb-8 relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${post.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  title={meta.title}
                />
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8 text-sm text-gray-700">
                {locale === 'nl'
                  ? 'Geen video-ID ingesteld voor deze pagina. Voeg later een YouTube video toe als je wilt.'
                  : 'No video ID set for this page. You can add a YouTube video later if you want.'}
              </div>
            )}

            <PermanentShopifyAdminApiKeyArticle locale={locale} />

            <div className="mt-12 p-6 bg-gray-50 rounded-lg flex items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={authorImage} alt="Albin Hot" width={80} height={80} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {locale === 'nl' ? 'Over de auteur' : 'About the Author'}
                </h3>
                <h4 className="text-lg font-medium mb-3 text-gray-800">Albin Hot</h4>
                <p className="text-gray-700 mb-4">
                  {locale === 'nl'
                    ? 'Ik help e-commerce bedrijven groeien met SEO, automation en technische implementaties.'
                    : 'I help e-commerce businesses grow with SEO, automation, and technical implementations.'}
                </p>
                <div className="flex gap-3">
                  <Button as={Link} href="/work-with-me" className="text-sm">
                    {locale === 'nl' ? 'Werk met mij' : 'Work with me'}
                  </Button>
                  <Button as={Link} href="/youtube" variant="secondary" className="text-sm">
                    {locale === 'nl' ? 'Meer artikelen' : 'More Articles'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-1/3">
            <div className="sticky top-8 space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {locale === 'nl' ? 'Snel overzicht' : 'Quick overview'}
                </h3>
                <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li>
                    {locale === 'nl'
                      ? 'App aanmaken + scopes kiezen'
                      : 'Create app + pick scopes'}
                  </li>
                  <li>
                    {locale === 'nl'
                      ? 'Redirect URL op webhook.site zetten'
                      : 'Set redirect URL to webhook.site'}
                  </li>
                  <li>
                    {locale === 'nl'
                      ? 'Authorize URL openen → code kopiëren'
                      : 'Open authorize URL → copy code'}
                  </li>
                  <li>
                    {locale === 'nl'
                      ? 'Code omwisselen voor access token in Postman'
                      : 'Exchange code for access token in Postman'}
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {locale === 'nl' ? 'Ook handig' : 'Also useful'}
                </h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <Link href="/resources" className="text-blue-600 hover:text-blue-800">
                      {locale === 'nl' ? 'Resources' : 'Resources'}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                      {locale === 'nl' ? 'Blog' : 'Blog'}
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
