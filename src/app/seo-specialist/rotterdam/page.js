import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CursorArrowRaysIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const pageUrl = 'https://niblah.com/seo-specialist/rotterdam';

const heroBullets = [
  'SEO-strategie voor Rotterdamse bedrijven die meer aanvragen willen',
  'Techniek, content, autoriteit en conversie in een groeiplan',
  'Direct contact met specialisten die uitvoering en rapportage combineren',
];

const proofStats = [
  { value: 'Tot 300%', label: 'meer organisch verkeer bij klanten' },
  { value: '100+', label: 'bedrijven geholpen met online groei' },
  { value: '30+ jaar', label: 'gebundelde marketingervaring in het team' },
];

const caseStudies = [
  {
    label: 'Lokale SEO',
    year: '2026',
    title: 'SEO fundament gebouwd voor meer aanvragen uit Rotterdam',
    description:
      'Een lokale dienstverlener kreeg een heldere SEO-structuur met technische fixes, servicepagina\'s en betere meetpunten voor aanvragen.',
    image: '/downloads/rankings.png',
    background: '#D8ECFF',
    accent: '#1995FF',
    metrics: [
      { value: '+142%', label: 'groei in organische sessies' },
      { value: '38%', label: 'meer offerte aanvragen' },
      { value: '24', label: 'nieuwe lokale zoekwoorden' },
      { value: '3.1x', label: 'meer zichtbaarheid' },
    ],
  },
  {
    label: 'Content en techniek',
    year: '2026',
    title: 'Van losse pagina\'s naar een schaalbaar SEO systeem',
    description:
      'We brachten content, interne links, technische SEO en conversie samen in een structuur die maandelijks verder uitgebouwd kan worden.',
    image: '/downloads/organic results.png',
    background: '#A9FFB0',
    accent: '#37C66A',
    metrics: [
      { value: '+86%', label: 'meer non-branded verkeer' },
      { value: '19', label: 'pagina\'s geoptimaliseerd' },
      { value: '+51%', label: 'hogere CTR uit Google' },
      { value: '0', label: 'kritieke indexatie issues' },
    ],
  },
  {
    label: 'SEO en conversie',
    year: '2026',
    title: 'Technische basis gekoppeld aan betere landingspagina\'s',
    description:
      'We maakten de website sneller, duidelijker en beter meetbaar zodat SEO-verkeer sneller richting contact, offerte of afspraak beweegt.',
    image: '/downloads/technical seo.png',
    background: '#FFE7A6',
    accent: '#F5A53D',
    metrics: [
      { value: '+64%', label: 'meer klikken uit Google' },
      { value: '2.4x', label: 'meer formulierstarts' },
      { value: '31%', label: 'lagere bounce rate' },
      { value: '17', label: 'technische fixes live' },
    ],
  },
];

const trustCards = [
  {
    label: 'Bedrijven geholpen',
    value: '100+',
    description:
      'Ondernemers geholpen met SEO, websites, Google Ads en marketing systemen die meer aanvragen moeten opleveren.',
    background: '#FFF4E3',
    offsetClass: 'md:mt-0',
    overlapClass: '',
  },
  {
    label: 'Gebundelde ervaring',
    value: '30+',
    suffix: 'jaar',
    description:
      'Marketingervaring in een klein team dat strategie, uitvoering en optimalisatie onder een dak houdt.',
    background: '#EAFDDE',
    offsetClass: 'md:mt-10',
    overlapClass: 'md:-ml-6',
  },
  {
    label: 'Organische groei',
    value: '300%',
    description:
      'Tot 300% meer organisch verkeer bij klanten door techniek, content, autoriteit en conversie samen te verbeteren.',
    background: '#D8ECFF',
    offsetClass: 'md:mt-16',
    overlapClass: 'md:-ml-6',
    decorated: true,
  },
  {
    label: 'Direct contact',
    value: '1',
    suffix: 'team',
    description:
      'Een vast aanspreekpunt dat je bedrijf begrijpt en niet iedere optimalisatie door losse lagen laat lopen.',
    background: '#FBE4F5',
    offsetClass: 'md:mt-24',
    overlapClass: 'md:-ml-6',
  },
];

const trustTools = [
  'Shopify',
  'WordPress',
  'Google Ads',
  'Search Console',
  'GA4',
  'Klaviyo',
  'WooCommerce',
  'Looker Studio',
];

const seoScaleCards = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Technische SEO',
    description:
      'Verbeter crawlbaarheid, indexatie, snelheid en structuur zodat Google je belangrijkste pagina\'s beter begrijpt.',
    background: '#F4FAFF',
    accent: '#1995FF',
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'Contentstrategie',
    description:
      'Bouw pagina\'s rond zoekintentie, diensten en lokale vragen die klanten in Barneveld echt stellen.',
    background: '#FBF2FF',
    accent: '#8D6BFF',
  },
  {
    icon: MapPinIcon,
    title: 'Lokale vindbaarheid',
    description:
      'Vergroot je zichtbaarheid in Barneveld, de regio Foodvalley en omliggende plaatsen waar klanten zoeken.',
    background: '#F3FDED',
    accent: '#65C971',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Autoriteit opbouwen',
    description:
      'Versterk je domein met relevante interne links, lokale signalen en autoriteit die rankings kan dragen.',
    background: '#FFF2EF',
    accent: '#F57B73',
  },
  {
    icon: CursorArrowRaysIcon,
    title: 'Conversie optimalisatie',
    description:
      'Maak van SEO-verkeer aanvragen met sterke CTA\'s, snelle pagina\'s, duidelijke formulieren en betere meetpunten.',
    background: '#FFF8EE',
    accent: '#F5A53D',
  },
  {
    icon: PresentationChartLineIcon,
    title: 'Rapportage en groei',
    description:
      'Zie welke posities bewegen, welke pagina\'s leads opleveren en waar de volgende SEO-kansen liggen.',
    background: '#F3F1FF',
    accent: '#7B61FF',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'SEO audit',
    description:
      'We bekijken techniek, content, concurrenten, zoekwoorden, lokale signalen en conversiepunten. Daarna weet je waar groei lekt.',
  },
  {
    step: '02',
    title: 'Roadmap',
    description:
      'We prioriteren acties op impact: welke pagina\'s, verbeteringen en campagnes leveren het snelst meer relevante bezoekers op.',
  },
  {
    step: '03',
    title: 'Uitvoering',
    description:
      'We schrijven, optimaliseren, bouwen en verbeteren. Alles wordt gekoppeld aan het doel: meer vindbaarheid en betere aanvragen.',
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description:
      'SEO stopt niet na publicatie. We meten rankings, leads, gedrag en omzetkansen en sturen de strategie maandelijks bij.',
  },
];

const localTargets = [
  'SEO voor dienstverleners in Rotterdam',
  'Lokale vindbaarheid voor B2B-bedrijven',
  'Contentclusters voor groei buiten de stad',
  'Google Business Profile en lokale landingspagina\'s',
  'SEO in combinatie met Google Ads en websites',
  'Meetbare leads in plaats van losse posities',
];

const faqs = [
  {
    question: 'Wat doet een SEO specialist in Rotterdam precies?',
    answer:
      'Een SEO specialist in Rotterdam helpt je website beter vindbaar worden voor relevante zoekopdrachten in Google. Bij Niblah combineren we technische SEO, content, lokale SEO, autoriteit en conversie zodat meer bezoekers ook echte aanvragen kunnen worden.',
  },
  {
    question: 'Is lokale SEO anders dan landelijke SEO?',
    answer:
      'Ja. Lokale SEO richt zich sterker op zoekopdrachten met plaatsnamen, Google Business Profile, lokale pagina\'s, reviews, interne links en regionale relevantie. Voor Rotterdam kijken we ook naar omliggende plaatsen en wijken wanneer dat commercieel logisch is.',
  },
  {
    question: 'Wanneer zie ik resultaat van SEO?',
    answer:
      'SEO is meestal geen kanaal voor morgen, maar voor structurele groei. Technische verbeteringen kunnen snel effect hebben, terwijl content en autoriteit vaak meerdere maanden nodig hebben. Daarom koppelen we SEO waar nodig aan Google Ads of conversieverbeteringen.',
  },
  {
    question: 'Kan Niblah ook SEO content schrijven?',
    answer:
      'Ja. We maken servicepagina\'s, lokale landingspagina\'s, kennisartikelen en contentclusters. De inhoud wordt geschreven op zoekintentie, betrouwbaarheid en conversie, niet alleen om een keyword te herhalen.',
  },
  {
    question: 'Past SEO bij elk bedrijf in Rotterdam?',
    answer:
      'Niet altijd op dezelfde manier. SEO past vooral wanneer mensen actief zoeken naar je dienst, product of probleem. Tijdens een consult bepalen we of SEO, Google Ads, website optimalisatie of marketing automation de beste eerste stap is.',
  },
];

const relatedLinks = [
  { href: '/marketing/rotterdam/', label: 'Marketing bureau Rotterdam' },
  { href: '/website-laten-maken/rotterdam/', label: 'Website laten maken Rotterdam' },
  { href: '/services/seo', label: 'SEO services' },
  { href: '/services/sea/google-ads', label: 'Google Ads uitbesteden' },
];

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Niblah - SEO Specialist Rotterdam',
  url: pageUrl,
  telephone: '+31648728828',
  email: 'albin@niblah.com',
  areaServed: [
    { '@type': 'City', name: 'Rotterdam' },
    { '@type': 'City', name: 'Schiedam' },
    { '@type': 'City', name: 'Vlaardingen' },
    { '@type': 'City', name: 'Capelle aan den IJssel' },
    { '@type': 'City', name: 'Barendrecht' },
  ],
  serviceType: 'SEO specialist Rotterdam',
  sameAs: [
    'https://x.com/Niblahistaken',
    'https://www.youtube.com/channel/UCvy37Ft-33KdCaYVCDHA35Q/',
  ],
};

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
};

export const metadata = {
  title: 'SEO Specialist Rotterdam | Niblah',
  description:
    'SEO specialist Rotterdam nodig? Niblah helpt bedrijven met technische SEO, content, lokale vindbaarheid en meer aanvragen uit Google.',
  keywords: [
    'seo specialist rotterdam',
    'seo rotterdam',
    'seo bureau rotterdam',
    'lokale seo rotterdam',
    'seo expert rotterdam',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'SEO Specialist Rotterdam | Niblah',
    description:
      'Meer organische vindbaarheid in Rotterdam met technische SEO, content, lokale SEO en conversie optimalisatie.',
    url: pageUrl,
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Niblah',
    images: [
      {
        url: '/home-hero-growth.webp',
        width: 1920,
        height: 1493,
        alt: 'SEO specialist Rotterdam groeigrafiek',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Specialist Rotterdam | Niblah',
    description:
      'SEO specialist Rotterdam voor bedrijven die structureel beter gevonden willen worden in Google.',
    images: ['/home-hero-growth.webp'],
  },
};

function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const isCentered = align === 'center';

  return (
    <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
          <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
          {eyebrow}
        </div>
      ) : null}
      <h2
        className="font-bold text-[#101828]"
        style={{
          fontSize: 'clamp(1.35rem, 2vw, 1.85rem)',
          lineHeight: '1.18',
        }}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={`mt-5 leading-relaxed text-[#101828]/66 ${isCentered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
          style={{ fontSize: '0.95rem' }}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

function PrimaryButton({ href, children, invert = false }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF] ${
        invert
          ? 'bg-white text-[#331300] shadow-[0_14px_34px_rgba(0,0,0,0.16)]'
          : 'bg-[#331300] text-white shadow-[0_14px_34px_rgba(51,19,0,0.18)]'
      }`}
    >
      <span>{children}</span>
      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

function SecondaryButton({ href, children, invert = false }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF] ${
        invert
          ? 'border-white/18 text-white hover:border-[#1995FF] hover:text-[#1995FF]'
          : 'border-[#331300]/16 text-[#331300] hover:border-[#1995FF] hover:text-[#1995FF]'
      }`}
    >
      {children}
    </Link>
  );
}

function GeometricHeroButton({ href, children, variant = 'primary' }) {
  const isPrimary = variant === 'primary';

  return (
    <Link
      href={href}
      prefetch={false}
      className={`inline-flex h-[3.25rem] items-center justify-center gap-3 rounded-[0.35rem] px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.02em] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF] ${
        isPrimary
          ? 'bg-white text-[#331300] shadow-[0_16px_36px_rgba(0,0,0,0.18)]'
          : 'border border-white/14 bg-white/12 text-white backdrop-blur hover:border-[#1995FF]/70 hover:text-white'
      }`}
    >
      <span>{children}</span>
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-[0.25rem] ${
          isPrimary ? 'bg-[#331300] text-white' : 'bg-white text-[#331300]'
        }`}
      >
        <ArrowRightIcon className="h-4 w-4 -rotate-45" aria-hidden="true" />
      </span>
    </Link>
  );
}

function HeroHeadshot({ className = '' }) {
  return (
    <div
      className={`h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_18px_50px_rgba(25,149,255,0.25),0_14px_36px_rgba(0,0,0,0.22)] ${className}`}
    >
      <div className="relative h-full w-full">
        <Image
          src="/niblah-headshot.webp"
          alt="Albin van Niblah"
          fill
          priority
          quality={95}
          sizes="(max-width: 768px) 80px, (max-width: 1279px) 96px, 144px"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/40"
      />
    </div>
  );
}

function PositioningStatement() {
  return (
    <section className="bg-white px-6 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1180px] text-center">
        <div className="mb-9 inline-flex items-center justify-center gap-3 text-sm font-semibold text-[#331300]/72">
          <span aria-hidden="true" className="flex items-center gap-1">
            <span className="h-5 w-1.5 rotate-[-18deg] rounded-full bg-[#1995FF]" />
            <span className="h-3 w-1.5 rotate-[-18deg] rounded-full bg-[#331300]/70" />
          </span>
          <span>SEO specialist Barneveld</span>
          <span aria-hidden="true" className="flex items-center gap-1">
            <span className="h-3 w-1.5 rotate-[18deg] rounded-full bg-[#331300]/70" />
            <span className="h-5 w-1.5 rotate-[18deg] rounded-full bg-[#1995FF]" />
          </span>
        </div>

        <h2
          className="mx-auto max-w-[820px] font-medium tracking-[-0.005em] text-[#10201D]"
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            fontSize: 'clamp(1.35rem, 2.45vw, 2.15rem)',
            lineHeight: '1.22',
            textWrap: 'balance',
          }}
        >
          Niblah helpt ambitieuze bedrijven in Barneveld groeien met SEO-systemen
          die vindbaarheid, content en conversie vertalen naar meetbare aanvragen.
        </h2>
      </div>
    </section>
  );
}

function SeoScaleSection() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1180px] px-6 text-center">
        <h2
          className="mx-auto max-w-[680px] font-medium tracking-[-0.005em] text-[#10201D]"
          style={{
            fontFamily: 'var(--font-poppins), sans-serif',
            fontSize: 'clamp(1.4rem, 2.45vw, 2.15rem)',
            lineHeight: '1.18',
            textWrap: 'balance',
          }}
        >
          Alles wat je nodig hebt om te groeien met SEO
        </h2>
      </div>

      <div className="mt-12 overflow-x-auto overscroll-x-contain px-6 [scrollbar-width:none] md:mt-16 [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max min-w-full snap-x snap-mandatory gap-4 pb-3 md:gap-5">
          {seoScaleCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="flex min-h-[24rem] w-[16.5rem] shrink-0 snap-center flex-col justify-between rounded-[0.4rem] px-6 py-7 text-center md:min-h-[27rem] md:w-[19rem]"
                style={{ backgroundColor: card.background }}
              >
                <h3
                  className="text-[0.8rem] font-semibold uppercase tracking-[0.03em] text-[#10201D] md:text-sm"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {card.title}
                </h3>

                <div className="relative mx-auto flex h-36 w-36 items-center justify-center md:h-44 md:w-44">
                  <div
                    aria-hidden="true"
                    className="absolute inset-4 rounded-[1rem] opacity-45"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(16,32,29,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,32,29,0.12) 1px, transparent 1px)',
                      backgroundSize: '10px 10px',
                      transform: 'rotate(-8deg)',
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute h-24 w-24 rounded-[0.65rem] opacity-20 md:h-32 md:w-32"
                    style={{
                      backgroundColor: card.accent,
                      transform: 'translate(14px, 12px) rotate(8deg)',
                    }}
                  />
                  <Icon
                    className="relative h-16 w-16 md:h-24 md:w-24"
                    aria-hidden="true"
                    style={{
                      color: card.accent,
                      filter: 'drop-shadow(10px 14px 0 rgba(16,32,29,0.10))',
                      strokeWidth: 1.35,
                    }}
                  />
                </div>

                <p
                  className="mx-auto max-w-[14rem] text-[0.86rem] leading-relaxed text-[#10201D]/76 md:max-w-[15.5rem] md:text-[0.94rem]"
                  style={{ textWrap: 'pretty' }}
                >
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }) {
  return (
    <article className="grid overflow-hidden rounded-[0.45rem] border border-white/10 bg-white text-[#10201D] shadow-[0_22px_60px_rgba(0,0,0,0.22)] lg:grid-cols-[0.95fr_1.05fr]">
      <div
        className="flex min-h-0 flex-col p-6 md:min-h-[24rem] md:p-8 lg:min-h-[27rem]"
        style={{ backgroundColor: study.background }}
      >
        <div className="flex items-start justify-between gap-5">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#10201D]">
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-[0.25rem] text-white"
              style={{ backgroundColor: study.accent }}
            >
              N
            </span>
            {study.label}
          </div>
          <div className="rounded-[0.25rem] bg-white/46 px-3 py-1 text-sm font-medium text-[#10201D]/70">
            {study.year}
          </div>
        </div>

        <div className="mt-10 max-w-[31rem]">
          <h3
            className="font-medium tracking-[-0.005em]"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(1.35rem, 2.3vw, 2.05rem)',
              lineHeight: '1.12',
              textWrap: 'balance',
            }}
          >
            {study.title}
          </h3>
          <p className="mt-5 max-w-[29rem] text-[0.95rem] leading-relaxed text-[#10201D]/70">
            {study.description}
          </p>
        </div>

        <dl className="mt-auto grid gap-x-6 gap-y-6 pt-9 sm:grid-cols-2 md:pt-12">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="border-l border-[#10201D]/12 pl-4">
              <dt className="text-sm leading-relaxed text-[#10201D]/62">{metric.label}</dt>
              <dd
                className="mt-2 font-medium text-[#10201D]"
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontSize: 'clamp(1.35rem, 2vw, 1.85rem)',
                  lineHeight: '1.05',
                }}
              >
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative min-h-[17rem] overflow-hidden bg-[#F7F8F6] p-5 md:min-h-[24rem] md:p-8 lg:min-h-[27rem]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(25,149,255,0.18)_1px,transparent_1px)] bg-[size:10px_10px] opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute right-8 top-10 h-32 w-32 rounded-[1.25rem] opacity-20 blur-2xl"
          style={{ backgroundColor: study.accent }}
        />
        <div className="relative ml-auto flex h-full max-w-[32rem] items-center">
          <div className="relative h-[14rem] w-full rotate-[-2deg] overflow-hidden rounded-[0.4rem] border border-[#331300]/12 bg-white shadow-[0_18px_50px_rgba(16,24,40,0.16)] md:h-[20rem] lg:h-[22rem]">
            <Image
              src={study.image}
              alt={`${study.label} case preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-contain p-5"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function LatestWorkSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#331300] px-6 py-16 text-white md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#1995FF]/14 blur-3xl"
      />

      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
              <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
              Recente cases
            </div>
            <h2
              className="font-medium tracking-[-0.005em] text-white"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(1.45rem, 2.4vw, 2.1rem)',
                lineHeight: '1.14',
              }}
            >
              Laatste SEO werk dat groei meetbaar maakt
            </h2>
            <p className="mt-4 max-w-[35rem] text-[0.95rem] leading-relaxed text-white/64">
              Bekijk hoe we SEO niet als losse optimalisatie inzetten, maar als
              systeem voor vindbaarheid, betere pagina's en meer aanvragen.
            </p>
          </div>

          <GeometricHeroButton href="/contact" variant="secondary">
            Bespreek jouw case
          </GeometricHeroButton>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-start">
          <h2
            className="max-w-[42rem] font-medium tracking-[-0.005em] text-[#10201D]"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(1.55rem, 3vw, 2.6rem)',
              lineHeight: '1.08',
              textWrap: 'balance',
            }}
          >
            Waarom bedrijven Niblah vertrouwen
          </h2>
          <p className="max-w-[31rem] text-[0.95rem] leading-relaxed text-[#10201D]/70 md:pt-2">
            We bouwen SEO-systemen die vindbaarheid, content, techniek en conversie
            aan elkaar koppelen zodat groei niet afhankelijk blijft van losse acties.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 md:flex md:items-end md:gap-0">
          {trustCards.map((card) => (
            <article
              key={card.label}
              className={`relative flex min-h-[19rem] flex-col overflow-hidden rounded-[0.35rem] p-6 md:min-h-[25.5rem] md:flex-1 md:p-7 ${card.offsetClass} ${card.overlapClass}`}
              style={{ backgroundColor: card.background }}
            >
              {card.decorated ? (
                <>
                  <span className="absolute left-10 top-0 h-16 w-8 bg-[#1995FF]/18" aria-hidden="true" />
                  <span className="absolute bottom-0 right-12 h-12 w-8 bg-[#1995FF]/20" aria-hidden="true" />
                  <span className="absolute bottom-0 right-0 h-24 w-16 bg-[#1995FF]/16" aria-hidden="true" />
                </>
              ) : null}

              <div className="relative z-10 text-[0.82rem] font-semibold uppercase tracking-[0.02em] text-[#10201D]">
                {card.label}
              </div>

              <div
                className="relative z-10 mt-8 flex items-baseline gap-2 font-medium tracking-[-0.015em] text-[#10201D] md:mt-10"
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
                  lineHeight: '0.95',
                }}
              >
                <span>{card.value}</span>
                {card.suffix ? (
                  <span className="text-[0.32em] font-semibold tracking-[-0.005em]">
                    {card.suffix}
                  </span>
                ) : null}
              </div>

              <p className="relative z-10 mt-auto max-w-[19rem] pt-10 text-[0.92rem] leading-relaxed text-[#10201D]/76">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-[#331300]/10 pt-8 md:grid-cols-[0.55fr_1.45fr] md:items-center">
          <p className="max-w-[23rem] text-[0.95rem] leading-relaxed text-[#10201D]/72">
            Gebouwd met tooling die ondernemers en marketingteams al kennen.
          </p>
          <div className="overflow-hidden">
            <div className="flex min-w-max flex-wrap gap-x-7 gap-y-3 text-sm font-bold uppercase tracking-[0.03em] text-[#10201D]/55 md:justify-end">
              {trustTools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SEOSpecialistRotterdamPage() {
  return (
    <main className="min-h-screen bg-[#F7F8F6] text-[#101828]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative isolate overflow-hidden bg-[#331300] px-6 py-20 text-white md:py-24 lg:min-h-[650px] lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_52%,rgba(25,149,255,0.18),transparent_34%),radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:auto,16px_16px] opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:54px_54px] opacity-20"
        />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          <span className="absolute left-[5.5%] top-0 h-20 w-3 bg-[#E7DEFF]" />
          <span className="absolute left-[6.5%] top-[7rem] h-48 w-10 bg-[#E7DEFF]" />
          <span className="absolute left-[9.5%] top-[18.2rem] h-24 w-24 bg-[#D8ECFF]" />
          <span className="absolute left-[5.5%] bottom-[8.5rem] h-32 w-3 bg-[#A9FFB0]" />
          <span className="absolute left-[18%] top-0 h-36 w-8 bg-[#A9FFB0]" />
          <span className="absolute left-[18%] bottom-[2.8rem] h-56 w-8 bg-[#FFE7A6]" />
          <span className="absolute left-[6.5%] bottom-[4.5rem] h-20 w-10 bg-[#D8ECFF]" />

          <span className="absolute right-[9%] top-0 h-36 w-24 bg-[#E7DEFF]" />
          <span className="absolute right-[15%] top-[3rem] h-44 w-9 bg-[#A9FFB0]" />
          <span className="absolute right-[4.5%] top-[13.2rem] h-44 w-11 bg-[#D8ECFF]" />
          <span className="absolute right-[9%] top-[22.8rem] h-24 w-24 bg-[#FFE7A6]" />
          <span className="absolute right-[18%] bottom-[7rem] h-20 w-9 bg-[#D8ECFF]" />
          <span className="absolute right-[6.5%] bottom-[2.5rem] h-24 w-8 bg-[#D8ECFF]" />
          <span className="absolute right-[5%] bottom-0 h-20 w-3 bg-[#A9FFB0]" />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 md:hidden">
          <span className="absolute -left-3 top-20 h-24 w-8 bg-[#E7DEFF]" />
          <span className="absolute right-5 top-10 h-20 w-5 bg-[#A9FFB0]" />
          <span className="absolute -right-5 top-44 h-24 w-10 bg-[#D8ECFF]" />
          <span className="absolute left-6 bottom-8 h-16 w-8 bg-[#FFE7A6]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[34rem] w-full max-w-[1180px] items-center justify-center text-center lg:min-h-[28rem]">
          <HeroHeadshot className="absolute right-4 top-[8.8rem] z-20 hidden h-32 w-32 rotate-[4deg] xl:block 2xl:right-0 2xl:h-36 2xl:w-36" />

          <div className="mx-auto max-w-5xl xl:max-w-[940px]">
            <div className="mx-auto mb-8 flex w-full max-w-[23rem] items-center justify-between gap-4 text-left xl:mb-7 xl:block xl:max-w-none xl:text-center">
              <div className="inline-flex items-center gap-2 whitespace-nowrap text-[0.82rem] font-semibold text-white/78 sm:text-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.65)] motion-safe:animate-pulse" />
                Momenteel accepteren we klanten
              </div>

              <HeroHeadshot className="relative xl:hidden" />
            </div>

            <h1
              className="mx-auto max-w-[900px] font-bold tracking-[-0.005em] text-white"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(1.9rem, 4vw, 3.35rem)',
                lineHeight: '1.04',
              }}
            >
              SEO specialist Rotterdam voor structurele groei in Google
            </h1>

            <div
              className="mx-auto mt-7 max-w-2xl leading-relaxed text-white/72"
              style={{ fontSize: 'clamp(0.95rem, 1.25vw, 1.03rem)' }}
            >
              We bouwen een SEO-systeem waarin techniek, content, lokale vindbaarheid
              en conversie samen meer relevante aanvragen opleveren voor bedrijven in
              Rotterdam.
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <GeometricHeroButton href="/contact">Plan gratis consult</GeometricHeroButton>
              <GeometricHeroButton href="/services/seo" variant="secondary">
                Bekijk SEO aanpak
              </GeometricHeroButton>
            </div>

            <ul className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center gap-3 text-xs font-medium text-white/54 sm:flex-row sm:flex-wrap">
              {heroBullets.map((benefit) => (
                <li key={benefit} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1995FF]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PositioningStatement />

      <section className="bg-[#331300] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-3">
          {proofStats.map((stat) => (
            <div key={stat.value} className="border-l border-white/18 pl-5">
              <div
                className="font-bold"
                style={{
                  fontFamily: 'var(--font-merriweather), Georgia, serif',
                  fontSize: 'clamp(1.45rem, 2.25vw, 1.95rem)',
                  lineHeight: '1.05',
                }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/62">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <SeoScaleSection />

      <LatestWorkSection />

      <TrustSection />

      <section className="bg-white px-6 py-16 md:py-22">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            align="left"
            eyebrow="Aanpak"
            title="Van audit naar een SEO systeem dat blijft verbeteren"
            description="We maken de route concreet voordat er content of techniek wordt aangepast. Daardoor weet je welke acties prioriteit hebben en waarom."
          />

          <div className="grid gap-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="grid gap-4 rounded-lg border border-[#331300]/10 bg-[#F7F8F6] p-5 sm:grid-cols-[4rem_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1995FF] text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3
                    className="font-bold text-[#101828]"
                    style={{
                      fontFamily: 'var(--font-merriweather), Georgia, serif',
                      fontSize: '1.1rem',
                      lineHeight: '1.2',
                    }}
                  >
                    {item.title}
                  </h3>
                  <div className="mt-2 text-sm leading-relaxed text-[#101828]/64">
                    {item.description}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#331300] px-6 py-16 text-white md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-65"
        />
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
              <SparklesIcon className="h-4 w-4" aria-hidden="true" />
              Rotterdam en omgeving
            </div>
            <h2
              className="font-bold text-white"
              style={{
                fontSize: 'clamp(1.35rem, 2vw, 1.85rem)',
                lineHeight: '1.18',
              }}
            >
              Lokale zichtbaarheid zonder losse marketingacties
            </h2>
            <div className="mt-5 max-w-2xl leading-relaxed text-white/68">
              Voor bedrijven in Rotterdam werkt SEO het best wanneer je dienstpagina's,
              lokale signalen, Google Ads data, tracking en websiteconversie op elkaar
              aansluiten. Zo bouw je niet alleen posities, maar ook een voorspelbare
              stroom aan relevante aanvragen.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact" invert>
                Bespreek je SEO kansen
              </PrimaryButton>
              <SecondaryButton href="/marketing/rotterdam/" invert>
                Marketing bureau Rotterdam
              </SecondaryButton>
            </div>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/8 p-5 backdrop-blur">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#331300]">
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="text-sm font-semibold text-white">Waar we op sturen</div>
            </div>
            <ul className="grid gap-3">
              {localTargets.map((target) => (
                <li key={target} className="flex items-start gap-3 text-sm leading-relaxed text-white/72">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-[#1995FF]" aria-hidden="true" />
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-22">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Veelgestelde vragen"
            title="Vragen over SEO specialist Rotterdam"
            description="Deze vragen gebruiken we bewust als inhoudelijke informatie voor bezoekers. De keywords staan erin waar ze natuurlijk horen, niet als checklist."
          />

          <div className="mx-auto mt-10 grid max-w-4xl gap-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-[#331300]/10 bg-white p-5 shadow-[0_14px_40px_rgba(16,24,40,0.04)]"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-[0.95rem] font-semibold text-[#101828]">{faq.question}</span>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#F7F8F6] text-[#331300] transition-colors group-open:bg-[#331300] group-open:text-white">
                    +
                  </span>
                </summary>
                <div className="mt-4 max-w-3xl text-sm leading-relaxed text-[#101828]/64">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-[1180px] rounded-lg border border-[#331300]/10 bg-[#F7F8F6] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
                <ChartBarSquareIcon className="h-4 w-4" aria-hidden="true" />
                Volgende pagina's
              </div>
              <h2
                className="font-bold text-[#101828]"
                style={{
                  fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
                  lineHeight: '1.18',
                }}
              >
                Bouw deze structuur door voor elke stad en dienst
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className="group flex items-center justify-between rounded-lg border border-[#331300]/10 bg-white px-4 py-4 text-sm font-semibold text-[#101828] transition-colors hover:border-[#1995FF] hover:text-[#1995FF]"
                >
                  <span>{link.label}</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[1180px] rounded-lg bg-[#331300] p-7 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
                <RocketLaunchIcon className="h-4 w-4" aria-hidden="true" />
                Gratis strategiesessie
              </div>
              <h2
                className="font-bold text-white"
                style={{
                  fontSize: 'clamp(1.45rem, 2.35vw, 2rem)',
                  lineHeight: '1.16',
                }}
              >
                Wil je weten waar je SEO kansen in Rotterdam liggen?
              </h2>
              <div className="mt-4 max-w-2xl leading-relaxed text-white/68">
                Plan een gratis consult. We kijken naar je huidige vindbaarheid, je
                belangrijkste diensten en welke SEO acties voor jouw bedrijf de meeste
                impact kunnen hebben.
              </div>
            </div>
            <PrimaryButton href="/contact" invert>
              Plan gratis consult
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
