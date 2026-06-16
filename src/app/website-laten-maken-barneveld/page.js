import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRightIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ShoppingBagIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

const pageUrl = 'https://niblah.com/website-laten-maken-barneveld'

const benefits = [
  'Website laten maken Barneveld met een duidelijke lokale SEO-basis',
  'Structuur, copy en techniek gericht op aanvragen uit de regio',
  'WordPress, Shopify of maatwerk wanneer dat beter past bij je bedrijf',
]

const services = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'WordPress website',
    description:
      'Een zakelijke WordPress website die je zelf kunt beheren, met een nette paginastructuur, snelle laadtijden en ruimte voor lokale landingspagina\'s.',
  },
  {
    icon: ShoppingBagIcon,
    title: 'Shopify webshop',
    description:
      'Voor winkels en merken rond Barneveld die online willen verkopen met een stabiele webshop, duidelijke productpagina\'s en conversiegerichte checkout.',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'SEO vanaf de basis',
    description:
      'Geen website die pas na livegang over SEO nadenkt. We nemen headings, metadata, interne links, indexeerbaarheid en lokale zoekintentie direct mee.',
  },
  {
    icon: ChartBarSquareIcon,
    title: 'Conversie en meetbaarheid',
    description:
      'De site wordt ingericht op contactaanvragen, telefoontjes en offertegesprekken. Tracking en formulieren worden praktisch opgezet.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Strategie en structuur',
    description:
      'We bepalen welke diensten, regio\'s en zoektermen belangrijk zijn. Voor Barneveld kijken we ook naar omliggende plaatsen zoals Voorthuizen, Harselaar, Nijkerk en Ede.',
  },
  {
    step: '02',
    title: 'Copy en ontwerp',
    description:
      'De belangrijkste pagina\'s krijgen duidelijke verkoopcopy, lokale context en een ontwerp dat professioneel voelt zonder de gebruiker te overladen.',
  },
  {
    step: '03',
    title: 'Build en SEO checks',
    description:
      'We bouwen de website responsive, snel en crawlbaar. Voor livegang controleren we metadata, headings, interne links, formulieren en basis performance.',
  },
  {
    step: '04',
    title: 'Livegang en groei',
    description:
      'Na livegang kan Niblah helpen met onderhoud, lokale SEO, Google Ads en doorlopende optimalisatie op basis van gedrag en aanvragen.',
  },
]

const faqs = [
  {
    question: 'Wat kost een website laten maken in Barneveld?',
    answer:
      'Dat hangt af van het aantal pagina\'s, het gewenste design, de hoeveelheid copy, koppelingen en eventuele webshopfunctionaliteit. Een compacte bedrijfswebsite is een ander project dan een maatwerk platform of Shopify webshop. Daarom start Niblah met een korte intake en een voorstel dat past bij je doelen.',
  },
  {
    question: 'Bouwen jullie websites voor bedrijven in Barneveld zelf?',
    answer:
      'Ja. Niblah werkt voor bedrijven in Barneveld en de regio, waaronder Voorthuizen, Harselaar, Kootwijkerbroek, Garderen, Nijkerk, Ede en Amersfoort. De samenwerking kan op afstand, maar de website wordt wel opgezet met lokale vindbaarheid in gedachten.',
  },
  {
    question: 'Is WordPress altijd de beste keuze?',
    answer:
      'Niet altijd. WordPress is vaak sterk voor mkb-websites omdat je pagina\'s en content makkelijk beheert. Voor e-commerce kan Shopify logischer zijn. Voor processen met veel maatwerk kan een custom build beter passen.',
  },
  {
    question: 'Kan de website ook ranken op lokale zoekwoorden?',
    answer:
      'Ja, mits de basis klopt. Een goede lokale pagina gebruikt een logische URL, sterke title en H1, inhoud die de zoekintentie beantwoordt, interne links, snelle techniek en duidelijke contactinformatie. Deze pagina is precies voor die aanpak ingericht.',
  },
  {
    question: 'Kunnen jullie ook onderhoud en marketing doen na oplevering?',
    answer:
      'Ja. Niblah kan helpen met technisch onderhoud, content, lokale SEO, conversieoptimalisatie en campagnes. Zo blijft de website niet alleen online, maar wordt hij ook beter in het binnenhalen van aanvragen.',
  },
]

const relatedLinks = [
  { href: '/website-laten-maken', label: 'Website laten maken' },
  { href: '/marketing/barneveld', label: 'Online marketing Barneveld' },
  { href: '/services/shopify-developer-barneveld', label: 'Shopify developer Barneveld' },
  { href: '/wordpress/maatwerk', label: 'WordPress maatwerk' },
]

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Niblah',
  url: pageUrl,
  telephone: '+31648728828',
  email: 'albin@niblah.com',
  serviceType: 'Website laten maken Barneveld',
  areaServed: [
    { '@type': 'City', name: 'Barneveld' },
    { '@type': 'City', name: 'Voorthuizen' },
    { '@type': 'City', name: 'Nijkerk' },
    { '@type': 'City', name: 'Ede' },
    { '@type': 'City', name: 'Amersfoort' },
  ],
  sameAs: [
    'https://x.com/Niblahistaken',
    'https://www.youtube.com/channel/UCvy37Ft-33KdCaYVCDHA35Q/',
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export const metadata = {
  title: 'Website Laten Maken Barneveld | Niblah',
  description:
    'Website laten maken in Barneveld? Niblah bouwt professionele WordPress websites, Shopify webshops en SEO-gerichte sites voor bedrijven in de regio.',
  keywords: [
    'website laten maken barneveld',
    'website bouwen barneveld',
    'webdesign barneveld',
    'wordpress website barneveld',
    'shopify webshop barneveld',
    'webbureau barneveld',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Website Laten Maken Barneveld | Niblah',
    description:
      'Professionele websites en webshops voor bedrijven in Barneveld, gebouwd met SEO, snelheid en conversie als basis.',
    url: pageUrl,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Niblah',
    images: [
      {
        url: '/website-laten-maken.png',
        width: 1344,
        height: 704,
        alt: 'Website laten maken Barneveld door Niblah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Laten Maken Barneveld | Niblah',
    description:
      'Laat een professionele, SEO-gerichte website maken voor je bedrijf in Barneveld en omgeving.',
    images: ['/website-laten-maken.png'],
  },
}

export default function WebsiteLatenMakenBarneveldPage() {
  return (
    <main className="min-h-screen bg-[#F7F8F6] text-[#163328]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B9C1BC] bg-white px-4 py-2 text-sm font-semibold text-[#2F7D57]">
              <MapPinIcon className="h-4 w-4" aria-hidden="true" />
              Website laten maken in Barneveld en omgeving
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#163328] md:text-5xl lg:text-6xl">
              Website laten maken Barneveld
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#1E1E1E] md:text-xl">
              Wil je een website laten maken in Barneveld die professioneel oogt, snel werkt en
              gevonden kan worden door lokale klanten? Niblah bouwt zakelijke websites, WordPress
              sites en Shopify webshops met een sterke basis voor SEO en conversie.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-base text-[#1E1E1E]">
                  <CheckCircleIcon className="mt-0.5 h-6 w-6 flex-none text-[#2F7D57]" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#163328] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2F7D57]"
              >
                Vraag een website voorstel aan
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+31648728828"
                className="inline-flex items-center justify-center rounded-[14px] border border-[#B9C1BC] bg-white px-6 py-3 text-sm font-bold text-[#163328] transition hover:border-[#2F7D57]"
              >
                Bel 06 48728828
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[8px] border border-[#B9C1BC] bg-white shadow-[0_24px_80px_rgba(22,51,40,0.16)]">
              <Image
                src="/website-laten-maken.png"
                alt="Voorbeeld van een professionele website voor bedrijven in Barneveld"
                width={1344}
                height={704}
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-[8px] border border-[#DDE7E1] bg-white p-5 shadow-[0_18px_50px_rgba(22,51,40,0.14)]">
              <p className="text-sm font-semibold text-[#163328]">
                Voor ondernemers in Centrum, Harselaar, De Burgt, Veller, Voorthuizen en de
                omliggende regio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2F7D57]">
              Lokale vindbaarheid
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#163328] md:text-4xl">
              Een website die past bij hoe mensen in Barneveld zoeken
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1E1E1E]">
              Veel websites zien er redelijk uit, maar missen de basis om lokaal gevonden te
              worden. Denk aan een rommelige URL-structuur, dunne servicepagina's, trage beelden,
              ontbrekende metadata of copy die niet uitlegt waarom iemand juist jouw bedrijf moet
              bellen.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="rounded-[8px] border border-[#DDE7E1] bg-[#F7F8F6] p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#DDE7E1] text-[#163328]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#163328]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-[#1E1E1E]">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2F7D57]">
              Aanpak
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#163328] md:text-4xl">
              Zo maakt Niblah een website voor jouw bedrijf in Barneveld
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#1E1E1E]">
              Een sterke website begint niet bij kleuren of templates. Eerst moet duidelijk zijn
              welke klanten je wilt aantrekken, welke diensten geld opleveren en welke lokale
              zoekvragen prioriteit hebben.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-[8px] border border-[#DDE7E1] bg-white p-6">
                <span className="text-sm font-bold text-[#2F7D57]">{item.step}</span>
                <h3 className="mt-4 text-xl font-bold text-[#163328]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#1E1E1E]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#163328] px-6 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#DDE7E1]">
              Waarom lokaal maatwerk
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Barneveld vraagt om meer dan een algemene bedrijfswebsite
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#DDE7E1]">
            <p>
              Een bedrijf op Harselaar heeft vaak een andere klantreis dan een dienstverlener in
              Barneveld-Centrum of een winkel in Voorthuizen. Daarom schrijven en structureren we
              de pagina's rond echte zoekintentie: diensten, regio, bewijs, bezwaren en de volgende
              stap.
            </p>
            <p>
              Dat maakt de website sterker voor bezoekers en duidelijker voor zoekmachines. Je
              krijgt geen brochure online, maar een commerciele basis waarop lokale SEO, Google Ads
              en content verder kunnen bouwen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2F7D57]">
              Veelgestelde vragen
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#163328] md:text-4xl">
              Praktische vragen over website laten maken in Barneveld
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[8px] border border-[#DDE7E1] bg-[#F7F8F6] p-5">
                <summary className="cursor-pointer list-none text-lg font-bold text-[#163328]">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-[#2F7D57] group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-[#1E1E1E]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[8px] bg-[#DDE7E1] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-[#163328] md:text-4xl">
                Wil je een website laten maken voor je bedrijf in Barneveld?
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#1E1E1E]">
                Stuur kort wat je doet, welke website je nu hebt en wat de site moet opleveren.
                Dan denkt Niblah mee over de slimste opzet voor techniek, content en lokale
                vindbaarheid.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#163328] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2F7D57]"
              >
                Plan een vrijblijvend gesprek
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="https://wa.link/zhg1bl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[14px] border border-[#B9C1BC] bg-white px-6 py-3 text-sm font-bold text-[#163328] transition hover:border-[#2F7D57]"
              >
                WhatsApp Niblah
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-[#B9C1BC] pt-8">
            <h2 className="text-xl font-bold text-[#163328]">Verder lezen</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-[#B9C1BC] bg-white px-4 py-2 text-sm font-semibold text-[#163328] transition hover:border-[#2F7D57]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
