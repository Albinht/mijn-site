import Link from 'next/link'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'

const copyByLocale = {
  nl: {
    metadata: {
      title: 'Blueprints | Marketing Templates en Strategieën | Niblah',
      description:
        'Bekijk de blueprint-pagina’s van Niblah voor SEO, Google Ads, Meta ads en Klaviyo.',
    },
    hero: {
      title: 'Blueprints voor de belangrijkste marketingkanalen',
      description:
        'Gebruik deze blueprint-pagina’s als startpunt voor je strategie, uitvoering en optimalisatie.',
    },
    cards: [
      { href: '/blueprints/seo', title: 'SEO Blueprint', description: 'Structuur, prioriteiten en groeikansen voor organische zichtbaarheid.' },
      { href: '/blueprints/google-ads', title: 'Google Ads Blueprint', description: 'Een scherper raamwerk voor campagnes, structuur en rendement.' },
      { href: '/blueprints/meta', title: 'Meta Blueprint', description: 'Advertenties en creatieve richting voor Meta campagnes.' },
      { href: '/blueprints/klaviyo', title: 'Klaviyo Blueprint', description: 'Flows, segmentatie en e-mailstructuur voor betere retentie.' },
    ],
  },
  en: {
    metadata: {
      title: 'Blueprints | Marketing Templates and Strategy Guides | Niblah',
      description:
        'Explore Niblah blueprints for SEO, Google Ads, Meta ads, and Klaviyo.',
    },
    hero: {
      title: 'Blueprints for the core marketing channels',
      description:
        'Use these blueprint pages as a starting point for strategy, execution, and optimization.',
    },
    cards: [
      { href: '/blueprints/seo', title: 'SEO Blueprint', description: 'Structure, priorities, and growth opportunities for organic visibility.' },
      { href: '/blueprints/google-ads', title: 'Google Ads Blueprint', description: 'A clearer framework for campaigns, structure, and return.' },
      { href: '/blueprints/meta', title: 'Meta Blueprint', description: 'Advertising direction and creative structure for Meta campaigns.' },
      { href: '/blueprints/klaviyo', title: 'Klaviyo Blueprint', description: 'Flows, segmentation, and email structure for better retention.' },
    ],
  },
}

function getCopy(locale) {
  return copyByLocale[locale] || copyByLocale.en
}

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getCopy(locale)
  const path = buildLocalizedPath('/blueprints', locale)

  return {
    ...copy.metadata,
    alternates: {
      canonical: `https://niblah.com${path}`,
    },
  }
}

export default async function BlueprintsOverviewPage() {
  const locale = await getServerLocale()
  const copy = getCopy(locale)

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{copy.hero.title}</h1>
          <p className="text-lg text-gray-600">{copy.hero.description}</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {copy.cards.map((card) => (
            <Link
              key={card.href}
              href={buildLocalizedPath(card.href, locale)}
              className="group bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_#000] transition-all duration-200"
            >
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1795FF] mb-3">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
