import Link from 'next/link'
import { getServerLocale } from '@/lib/locale'
import { buildLocalizedPath } from '@/lib/i18n'

const copyByLocale = {
  nl: {
    metadata: {
      title: 'Services | SEO, Websites, Ads en Automation | Niblah',
      description:
        'Bekijk de belangrijkste services van Niblah: SEO, websites, Google Ads, e-mailmarketing, CRO en automation.',
    },
    hero: {
      title: 'Services die groei, zichtbaarheid en conversie ondersteunen',
      description:
        'Van zakelijke websites tot SEO, paid ads en automation: kies de service die het beste past bij je groeifase.',
    },
    cards: [
      { href: '/website-laten-maken', title: 'Website laten maken', description: 'Zakelijke websites voor mkb, vaak in WordPress en altijd gericht op resultaat.' },
      { href: '/services/seo', title: 'SEO services', description: 'Meer organische zichtbaarheid, technische verbeteringen en content die beter rankt.' },
      { href: '/services/sea/google-ads', title: 'Google Ads', description: 'Campagnes die strakker zijn opgezet en beter sturen op rendement.' },
      { href: '/services/paid-ads', title: 'Paid ads', description: 'Breder advertentiebeheer voor bedrijven die gecontroleerd willen opschalen.' },
      { href: '/services/email-marketing', title: 'Email marketing', description: 'Flows, campagnes en automatiseringen die omzet terughalen uit je lijst.' },
      { href: '/services/cro', title: 'CRO', description: 'Verbeter je website en funnels zodat meer bezoekers converteren.' },
      { href: '/services/web-development', title: 'Web development', description: 'Technische development support voor websites, platformen en maatwerk.' },
      { href: '/resources/automation', title: 'Automation', description: 'Praktische automatiseringen voor marketing, opvolging en interne processen.' },
    ],
  },
  en: {
    metadata: {
      title: 'Services | SEO, Websites, Ads and Automation | Niblah',
      description:
        'Explore Niblah services for SEO, business websites, Google Ads, email marketing, CRO, and automation.',
    },
    hero: {
      title: 'Services built to support growth, visibility, and conversions',
      description:
        'From business websites to SEO, paid ads, and automation, choose the service that best fits your current growth stage.',
    },
    cards: [
      { href: '/website-laten-maken', title: 'Website build services', description: 'Business websites for growing companies, often in WordPress and always built for results.' },
      { href: '/services/seo', title: 'SEO services', description: 'More organic visibility through technical improvements and better ranking content.' },
      { href: '/services/sea/google-ads', title: 'Google Ads', description: 'Campaign management with tighter structure and stronger return focus.' },
      { href: '/services/paid-ads', title: 'Paid ads', description: 'Broader advertising support for companies that want to scale with control.' },
      { href: '/services/email-marketing', title: 'Email marketing', description: 'Campaigns, flows, and automations that turn your list into repeat revenue.' },
      { href: '/services/cro', title: 'CRO', description: 'Improve your website and funnels so more visitors convert.' },
      { href: '/services/web-development', title: 'Web development', description: 'Technical development support for websites, platforms, and custom builds.' },
      { href: '/resources/automation', title: 'Automation', description: 'Practical automation for marketing, follow-up, and internal processes.' },
    ],
  },
}

function getCopy(locale) {
  return copyByLocale[locale] || copyByLocale.en
}

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getCopy(locale)
  const path = buildLocalizedPath('/services', locale)

  return {
    ...copy.metadata,
    alternates: {
      canonical: `https://niblah.com${path}`,
    },
  }
}

export default async function ServicesOverviewPage() {
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
