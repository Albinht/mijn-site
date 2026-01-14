import Button from '../../../components/Button'
import { getServerLocale } from '@/lib/locale'
import { getPaidAdsCopy } from '@/i18n/services/paid-ads-page'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getPaidAdsCopy(locale)
  return copy.metadata
}

export default async function PaidAds() {
  const locale = await getServerLocale()
  const copy = getPaidAdsCopy(locale)

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ fontFamily: 'var(--font-poppins)' }}>
          {copy.title}
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8" style={{ fontFamily: 'var(--font-poppins)' }}>
            {copy.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {copy.features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>{feature.title}</h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--font-poppins)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button>
              {copy.cta} <span>&#8594;</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
