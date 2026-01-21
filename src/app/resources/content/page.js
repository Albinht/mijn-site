import Link from 'next/link'
import { getServerLocale } from '@/lib/locale'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const isNl = locale === 'nl'

  return {
    title: isNl ? 'Content Resources | Niblah' : 'Content Resources | Niblah',
    description: isNl
      ? 'Resources over content, SEO en copywriting.'
      : 'Resources about content, SEO, and copywriting.',
  }
}

export default async function ContentResourcesPage() {
  const locale = await getServerLocale()
  const isNl = locale === 'nl'

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-gray-600 mb-3">
            <Link href="/resources" className="hover:text-gray-900 hover:underline">
              {isNl ? 'Resources' : 'Resources'}
            </Link>{' '}
            <span>•</span> <span>{isNl ? 'Content' : 'Content'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{isNl ? 'Content' : 'Content'}</h1>
          <p className="text-lg text-gray-600 mt-3">
            {isNl ? 'Alles over content die scoort: SEO, copy en structuur.' : 'Everything about content that performs: SEO, copy, and structure.'}
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto border border-gray-200 rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold text-gray-900">{isNl ? 'Binnenkort meer' : 'More coming soon'}</h2>
          <p className="text-gray-600 mt-2">
            {isNl
              ? 'We vullen deze categorie stap voor stap met nieuwe tutorials en templates.'
              : 'We’re gradually adding new tutorials and templates to this category.'}
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/blog" className="text-sm font-semibold text-[#1795FF] hover:underline">
              {isNl ? 'Ga naar de blog →' : 'Go to the blog →'}
            </Link>
            <Link href="/youtube" className="text-sm font-semibold text-[#1795FF] hover:underline">
              {isNl ? 'Bekijk YouTube →' : 'View YouTube →'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

