import Link from 'next/link'

export async function generateMetadata() {

  return {
    title: 'Content Resources | Niblah',
    description: 'Resources over content, SEO en copywriting.',
  }
}

export default async function ContentResourcesPage() {

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-gray-600 mb-3">
            <Link href="/resources" className="hover:text-gray-900 hover:underline">
              {'Resources'}
            </Link>{' '}
            <span>•</span> <span>{'Content'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{'Content'}</h1>
          <p className="text-lg text-gray-600 mt-3">
            {'Alles over content die scoort: SEO, copy en structuur.'}
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto border border-gray-200 rounded-xl p-6 bg-white">
          <h2 className="text-xl font-semibold text-gray-900">{'Binnenkort meer'}</h2>
          <p className="text-gray-600 mt-2">
            {'We vullen deze categorie stap voor stap met nieuwe tutorials en templates.'}
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/blog" className="text-sm font-semibold text-[#1795FF] hover:underline">
              {'Ga naar de blog →'}
            </Link>
            <Link href="/youtube" className="text-sm font-semibold text-[#1795FF] hover:underline">
              {'Bekijk YouTube →'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

