import Image from 'next/image';
import Link from 'next/link';
import SeoTestimonialsSlider from '@/components/SeoTestimonialsSlider';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CursorArrowRaysIcon,
  MapPinIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
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
    background: '#F4FAFF',
    accent: '#1995FF',
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
    label: 'Organische groei',
    value: '300',
    suffix: '%',
    description:
      'Tot 300% meer organisch verkeer bij klanten door techniek, content, autoriteit en conversie samen te verbeteren.',
    hoverDetail: 'SEO wordt gekoppeld aan meetbare aanvragen, niet alleen aan posities.',
    background: '#FFF4E3',
    accent: '#F5A53D',
    height: '27.8rem',
    offsetClass: 'md:mt-0',
    overlapClass: '',
  },
  {
    label: 'Bedrijven geholpen',
    value: '100',
    suffix: '+',
    description:
      'Ondernemers geholpen met SEO, websites, Google Ads en marketing systemen die meer aanvragen moeten opleveren.',
    hoverDetail: 'Van lokale dienstverleners tot e-commerce teams met groeiplannen.',
    background: '#F4FAFF',
    accent: '#1995FF',
    height: '25.6rem',
    offsetClass: 'md:mt-[2.2rem]',
    overlapClass: 'md:-ml-6',
  },
  {
    label: 'Gebundelde ervaring',
    value: '30',
    suffix: '+ jaar',
    description:
      'Marketingervaring in een klein team dat strategie, uitvoering en optimalisatie onder een dak houdt.',
    hoverDetail: 'Strategie, uitvoering en rapportage blijven in dezelfde korte lijn.',
    background: '#D8ECFF',
    accent: '#1995FF',
    height: '23.4rem',
    offsetClass: 'md:mt-[4.4rem]',
    overlapClass: 'md:-ml-6',
    decorated: true,
  },
  {
    label: 'Direct contact',
    value: '1',
    suffix: 'team',
    description:
      'Een vast aanspreekpunt dat je bedrijf begrijpt en niet iedere optimalisatie door losse lagen laat lopen.',
    hoverDetail: 'Je spreekt de mensen die aan je SEO, website en campagnes werken.',
    background: '#FBE4F5',
    accent: '#F08BE5',
    height: '21.2rem',
    offsetClass: 'md:mt-[6.6rem]',
    overlapClass: 'md:-ml-6',
  },
];

const trustLogos = [
  { name: 'Google', src: 'https://cdn.simpleicons.org/google' },
  { name: 'Google Search Console', src: 'https://cdn.simpleicons.org/googlesearchconsole' },
  { name: 'Google Analytics', src: 'https://cdn.simpleicons.org/googleanalytics' },
  { name: 'Shopify', src: 'https://cdn.simpleicons.org/shopify' },
  { name: 'WordPress', src: 'https://cdn.simpleicons.org/wordpress' },
  {
    name: 'Klaviyo',
    src: 'https://companieslogo.com/img/orig/KVYO-73fd140d.svg?t=1720244492&download=true',
  },
  { name: 'Looker Studio', src: 'https://cdn.simpleicons.org/looker' },
  { name: 'WooCommerce', src: 'https://cdn.simpleicons.org/woocommerce' },
];

const testimonialCases = [
  {
    quote:
      'We zagen eindelijk welke SEO-acties aanvragen opleveren en welke pagina\'s alleen maar verkeer trokken zonder resultaat.',
    attribution: 'Eigenaar, lokale dienstverlener in Rotterdam',
    background: '#D8ECFF',
    accent: '#1995FF',
    image: '/downloads/seo-testimonial-persona-1.png',
    imagePosition: 'center center',
  },
  {
    quote:
      'De combinatie van techniek, content en betere landingspagina\'s gaf ons binnen enkele weken meer grip op organische groei.',
    attribution: 'Marketing manager, B2B-team regio Rijnmond',
    background: '#FFF4C7',
    accent: '#F5A53D',
    image: '/downloads/seo-testimonial-persona-2.png',
    imagePosition: 'center center',
  },
  {
    quote:
      'Geen losse optimalisaties meer. We hebben nu een SEO-systeem met duidelijke prioriteiten, rapportage en opvolging.',
    attribution: 'Founder, e-commerce bedrijf in Zuid-Holland',
    background: '#FFF4E3',
    accent: '#F5A53D',
    image: '/downloads/seo-testimonial-persona-3.png',
    imagePosition: 'center center',
  },
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
    background: '#F4FAFF',
    accent: '#1995FF',
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
  {
    question: 'Hoe pakken jullie lokale SEO voor Rotterdam aan?',
    answer:
      'We kijken naar je diensten, concurrenten, wijken, omliggende plaatsen en lokale zoekintentie. Daarna bouwen we pagina\'s, interne links en signalen die logisch zijn voor klanten die in Rotterdam of de regio zoeken.',
  },
  {
    question: 'Kan SEO samen met Google Ads of een nieuwe website?',
    answer:
      'Ja. Vaak werkt SEO sterker wanneer Google Ads data, landingspagina\'s, tracking en website optimalisatie samenkomen. Zo zie je sneller welke zoekwoorden aanvragen opleveren en welke pagina\'s beter moeten converteren.',
  },
  {
    question: 'Hoe starten we met een SEO traject bij Niblah?',
    answer:
      'We starten met een korte strategiesessie. Daarin bespreken we je bedrijf, je huidige website, je belangrijkste diensten en je groeidoel. Daarna krijg je een concreet advies voor de beste eerste stap.',
  },
];

const beforeAfterPanels = [
  {
    theme: 'before',
    title: 'Voor SEO met Niblah',
    description:
      'Groei blijft hangen wanneer SEO bestaat uit losse acties, oude pagina\'s en rapportages zonder duidelijke prioriteit.',
    items: [
      {
        title: 'Losse optimalisaties',
        description: 'Pagina\'s worden aangepast zonder duidelijk plan voor zoekintentie, techniek en conversie.',
      },
      {
        title: 'Onduidelijke resultaten',
        description: 'Je ziet rankings bewegen, maar niet welke SEO-acties echte aanvragen opleveren.',
      },
      {
        title: 'Gemiste lokale kansen',
        description: 'Rotterdamse zoekopdrachten, wijken en omliggende plaatsen blijven buiten de structuur vallen.',
      },
    ],
  },
  {
    theme: 'after',
    title: 'Na SEO met Niblah',
    description:
      'SEO wordt een groeisysteem waarin techniek, content, lokale vindbaarheid en opvolging samen meer aanvragen opleveren.',
    items: [
      {
        title: 'Heldere SEO roadmap',
        description: 'Iedere actie heeft een reden, eigenaar en meetpunt zodat prioriteiten scherp blijven.',
      },
      {
        title: 'Betere landingspagina\'s',
        description: 'Content wordt gebouwd rond zoekintentie, vertrouwen en conversie naar contact of offerte.',
      },
      {
        title: 'Meetbare groei',
        description: 'Rapportage laat zien welke pagina\'s, zoekwoorden en optimalisaties bijdragen aan aanvragen.',
      },
    ],
  },
];

const seoPackages = [
  {
    label: 'Fundament',
    title: 'Techniek en groeiroadmap',
    description:
      'Voor bedrijven die eerst helder willen krijgen waar groei lekt en welke SEO acties prioriteit verdienen.',
    accent: '#1995FF',
    background: '#F4FAFF',
    cta: 'Kies fundament',
    featuresLabel: 'Fundament bevat:',
    features: [
      'Technische analyse',
      'Zoekwoorden en concurrentieanalyse',
      'Tracking en indexatie check',
      'Prioriteitenroadmap',
      'Quick wins voor je belangrijkste pagina\'s',
    ],
  },
  {
    label: 'Groei',
    title: 'Maandelijkse SEO uitvoering',
    description:
      'Voor teams die structureel willen bouwen aan content, techniek, lokale zichtbaarheid en betere aanvragen.',
    accent: '#8D6BFF',
    background: '#F3EEFF',
    cta: 'Kies groei',
    featuresLabel: 'Groei bevat:',
    features: [
      'Maandelijkse optimalisaties',
      'Contentplanning en productie',
      'Lokale SEO voor Rotterdam',
      'Conversieverbeteringen',
      'Rapportage en groeioverleg',
    ],
  },
  {
    label: 'Maatwerk',
    title: 'SEO systeem voor schaal',
    description:
      'Voor bedrijven met meerdere diensten, locaties of contentclusters die SEO als serieus groeikanaal willen inzetten.',
    accent: '#F5A53D',
    background: '#FFF4E3',
    cta: 'Vraag maatwerk aan',
    featuresLabel: 'Maatwerk bevat:',
    features: [
      'Strategische SEO workshops',
      'Meerdere locatiepagina\'s',
      'Contentclusters en interne links',
      'Dashboards op leadniveau',
      'SEO gecombineerd met Ads data',
      'Vaste specialist als aanspreekpunt',
    ],
  },
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
      <style>
        {`
          .trust-stat-card {
            --card-accent: #1995ff;
            position: relative;
            min-block-size: 21rem;
            translate: 0 0;
            scale: 1;
            contain: layout paint;
            transition:
              translate 320ms ease,
              scale 320ms ease,
              box-shadow 320ms ease;
          }

          .trust-stat-card::before,
          .trust-stat-card::after {
            content: "";
            position: absolute;
            pointer-events: none;
            background: var(--card-accent);
            opacity: 0;
            transition:
              opacity 320ms ease,
              translate 320ms ease;
          }

          .trust-stat-card::before {
            inline-size: 3.15rem;
            block-size: 4.9rem;
            inset-block-start: 0;
            inset-inline-end: 4.4rem;
            translate: 0 -0.9rem;
          }

          .trust-stat-card::after {
            inline-size: 7.6rem;
            block-size: 2.3rem;
            inset-block-end: 0;
            inset-inline-end: 1.8rem;
            translate: 0 1rem;
          }

          .trust-stat-card:hover,
          .trust-stat-card:focus-visible {
            translate: 0 0;
            scale: 1;
            box-shadow: 0 1.35rem 2.9rem rgba(16, 32, 29, 0.08);
            z-index: 20;
          }

          .trust-stat-card:focus-visible {
            outline: 2px solid var(--card-accent);
            outline-offset: 3px;
          }

          .trust-stat-card:hover::before,
          .trust-stat-card:hover::after,
          .trust-stat-card:focus-visible::before,
          .trust-stat-card:focus-visible::after {
            opacity: 0.48;
            translate: 0 0;
          }

          .trust-card-reveal {
            position: absolute;
            inset: 0;
            opacity: 0;
            translate: 0 0.35rem;
            color: rgba(16, 32, 29, 0.9);
            pointer-events: none;
            transition:
              opacity 320ms ease,
              translate 320ms ease;
          }

          .trust-card-description {
            opacity: 1;
            transition: opacity 240ms ease, translate 320ms ease;
            translate: 0 0;
          }

          .trust-stat-card:hover .trust-card-description,
          .trust-stat-card:focus-visible .trust-card-description {
            opacity: 0;
            translate: 0 -0.2rem;
          }

          .trust-stat-card:hover .trust-card-reveal,
          .trust-stat-card:focus-visible .trust-card-reveal {
            opacity: 1;
            translate: 0 0;
          }

          .trust-logo-item {
            inline-size: 8.25rem;
            block-size: 3.4rem;
            display: grid;
            place-items: center;
            flex: 0 0 auto;
            border: 1px solid rgba(16, 32, 29, 0.08);
            background: rgba(255, 255, 255, 0.72);
          }

          .trust-logo-item img {
            display: block;
            max-inline-size: 6.9rem;
            max-block-size: 2.1rem;
            object-fit: contain;
            filter: grayscale(1) saturate(0.15);
            opacity: 0.86;
          }

          .trust-logo-track {
            animation: trust-logo-marquee 30s linear infinite;
          }

          .trust-logo-mask {
            mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          }

          @keyframes trust-logo-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @media (min-width: 768px) {
            .trust-stat-card {
              block-size: var(--card-height);
              min-block-size: var(--card-height);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .trust-stat-card,
            .trust-stat-card::before,
            .trust-stat-card::after,
            .trust-card-reveal,
            .trust-logo-track {
              transition: none;
              animation: none;
            }
          }
        `}
      </style>
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-start">
          <h2
            className="max-w-[52rem] font-medium tracking-[-0.005em] text-[#10201D]"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(1.55rem, 2.65vw, 2.45rem)',
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
              tabIndex={0}
              role="group"
              aria-label={`${card.label}: ${card.value}${card.suffix || ''}`}
              className={`trust-stat-card flex flex-col overflow-hidden p-6 outline-none md:flex-1 md:p-7 ${card.offsetClass} ${card.overlapClass}`}
              style={{
                backgroundColor: card.background,
                '--card-height': card.height,
                '--card-accent': card.accent,
              }}
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

              <div className="relative z-10 mt-auto max-w-[19rem] pt-10">
                <p className="trust-card-description text-[0.92rem] leading-relaxed text-[#10201D]/76">
                  {card.description}
                </p>
                <div className="trust-card-reveal text-[0.9rem] font-semibold leading-snug text-[#10201D]">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[var(--card-accent)]" aria-hidden="true" />
                  {card.hoverDetail}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 pt-8 md:grid-cols-[0.55fr_1.45fr] md:items-center">
          <p className="max-w-[23rem] text-[0.95rem] leading-relaxed text-[#10201D]/72">
            Gebouwd met tooling die ondernemers en marketingteams al kennen.
          </p>
          <div className="trust-logo-mask overflow-hidden">
            <div className="trust-logo-track flex w-max items-center gap-5 pr-5">
              {[...trustLogos, ...trustLogos].map((logo, index) => (
                <span
                  key={`${logo.name}-${index}`}
                  className="trust-logo-item"
                  aria-hidden={index >= trustLogos.length ? true : undefined}
                >
                  <img
                    src={logo.src}
                    alt={index >= trustLogos.length ? '' : logo.name}
                    loading="lazy"
                    decoding="async"
                    width="132"
                    height="54"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#331300] px-6 py-16 text-white md:py-20">
      <style>
        {`
          .seo-testimonial-rail {
            scroll-snap-type: x mandatory;
            overscroll-behavior-inline: contain;
            scrollbar-width: none;
          }

          .seo-testimonial-rail::-webkit-scrollbar {
            display: none;
          }

          .seo-testimonial-card {
            scroll-snap-align: center;
            contain: layout paint;
          }

          .seo-testimonial-card::before,
          .seo-testimonial-card::after {
            content: "";
            position: absolute;
            pointer-events: none;
            background: var(--testimonial-accent);
            opacity: 0.28;
          }

          .seo-testimonial-card::before {
            inline-size: 10.5rem;
            block-size: 2.6rem;
            inset-block-start: 0;
            inset-inline-start: 0;
          }

          .seo-testimonial-card::after {
            inline-size: 10.5rem;
            block-size: 2.6rem;
            inset-block-end: 0;
            inset-inline-end: 0;
          }

          @media (max-width: 767px) {
            .seo-testimonial-card::before,
            .seo-testimonial-card::after {
              inline-size: 6.5rem;
              block-size: 2rem;
            }
          }
        `}
      </style>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6rem] top-[-8rem] -z-10 h-80 w-80 rounded-full bg-[#1995FF]/14 blur-3xl"
      />

      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
              <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
              Ervaringen
            </div>
            <h2
              className="font-medium tracking-[-0.005em] text-white"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(1.55rem, 2.55vw, 2.35rem)',
                lineHeight: '1.1',
              }}
            >
              Wat ondernemers merken zodra SEO een systeem wordt
            </h2>
            <p className="mt-4 max-w-[42rem] text-[0.95rem] leading-relaxed text-white/66">
              Geanonimiseerde klantcases uit trajecten waarin techniek, content,
              lokale vindbaarheid en conversie samen zijn opgepakt.
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#seo-testimonial-1"
              className="grid h-12 w-12 place-items-center rounded-[0.35rem] bg-white/10 text-xl text-white/72 transition hover:bg-white hover:text-[#331300]"
              aria-label="Ga naar eerste testimonial"
            >
              ←
            </a>
            <a
              href="#seo-testimonial-3"
              className="grid h-12 w-12 place-items-center rounded-[0.35rem] bg-white/10 text-xl text-white transition hover:bg-white hover:text-[#331300]"
              aria-label="Ga naar laatste testimonial"
            >
              →
            </a>
          </div>
        </div>

        <div className="-mx-6 mt-10 overflow-hidden md:mt-12">
          <div className="seo-testimonial-rail flex gap-5 overflow-x-auto px-6 pb-2">
            {testimonialCases.map((item, index) => (
              <article
                key={item.attribution}
                id={`seo-testimonial-${index + 1}`}
                className="seo-testimonial-card relative grid min-h-[28rem] w-[86vw] max-w-[58rem] flex-none overflow-hidden md:w-[78vw] md:grid-cols-[0.42fr_0.58fr] lg:w-[64rem]"
                style={{
                  backgroundColor: item.background,
                  '--testimonial-accent': item.accent,
                }}
              >
                <div className="relative min-h-[17rem] overflow-hidden md:min-h-0">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 86vw, 420px"
                    className="object-cover object-[var(--testimonial-image-position)]"
                    style={{ '--testimonial-image-position': item.imagePosition }}
                    loading="lazy"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(16,32,29,0.12)] to-transparent"
                  />
                </div>

                <div className="relative z-10 flex min-h-[23rem] flex-col justify-between p-6 text-[#10201D] md:p-8 lg:p-10">
                  <blockquote
                    className="max-w-[37rem] font-medium tracking-[-0.01em]"
                    style={{
                      fontFamily: 'var(--font-poppins), sans-serif',
                      fontSize: 'clamp(1.35rem, 2.45vw, 2.45rem)',
                      lineHeight: '1.14',
                      textWrap: 'balance',
                    }}
                  >
                    “{item.quote}”
                  </blockquote>

                  <div className="mt-10 flex flex-col gap-3 border-t border-[#10201D]/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[0.95rem] font-semibold text-[#10201D]">
                        Geanonimiseerde klantcase
                      </p>
                      <p className="mt-1 text-[0.9rem] leading-relaxed text-[#10201D]/62">
                        {item.attribution}
                      </p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/55 px-3 py-1.5 text-xs font-semibold text-[#10201D]/72">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.accent }} />
                      SEO traject
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#331300] px-6 py-16 text-white md:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10rem] top-1/2 -z-10 hidden -translate-y-1/2 text-[7rem] font-semibold tracking-[-0.04em] text-white/[0.025] lg:block"
      >
        Voor
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-7rem] top-1/2 -z-10 hidden -translate-y-1/2 text-[7rem] font-semibold tracking-[-0.04em] text-white/[0.025] lg:block"
      >
        Na
      </div>

      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-9 max-w-2xl text-center md:mb-11">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
            <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
            Before en after
          </div>
          <h2
            className="font-medium tracking-[-0.005em] text-white"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(1.45rem, 2.25vw, 2.15rem)',
              lineHeight: '1.12',
              textWrap: 'balance',
            }}
          >
            Van losse SEO-acties naar een systeem dat aanvragen blijft opbouwen
          </h2>
        </div>

        <div className="mx-auto grid max-w-[760px] gap-5 lg:max-w-[820px] lg:grid-cols-2">
          {beforeAfterPanels.map((panel) => {
            const isAfter = panel.theme === 'after';

            return (
              <article
                key={panel.title}
                className={`relative overflow-hidden rounded-[0.35rem] border p-6 md:p-7 ${
                  isAfter
                    ? 'border-[#1995FF]/22 bg-[#D8ECFF] text-[#10201D] shadow-[0_24px_70px_rgba(25,149,255,0.14)]'
                    : 'border-white/12 bg-white/[0.025] text-white'
                }`}
              >
                {isAfter ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-16 w-16 bg-[#1995FF]/82"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute right-0 top-0 h-2.5 w-16 bg-[#1995FF]/82"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-16 right-0 h-24 w-4 bg-[#1995FF]/82"
                    />
                  </>
                ) : null}

                <h3
                  className={`relative z-10 font-medium tracking-[-0.005em] ${
                    isAfter ? 'text-[#10201D]' : 'text-white'
                  }`}
                  style={{
                    fontFamily: 'var(--font-poppins), sans-serif',
                    fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                    lineHeight: '1.18',
                  }}
                >
                  {panel.title}
                </h3>
                <p
                  className={`relative z-10 mt-4 max-w-[30rem] text-[0.92rem] leading-relaxed ${
                    isAfter ? 'text-[#10201D]/72' : 'text-white/62'
                  }`}
                >
                  {panel.description}
                </p>

                <div
                  className={`relative z-10 my-7 h-px ${
                    isAfter ? 'bg-[#10201D]/10' : 'bg-white/10'
                  }`}
                />

                <ul className="relative z-10 grid gap-5">
                  {panel.items.map((item) => (
                    <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg ${
                          isAfter
                            ? 'border-[#10201D]/10 bg-white/30 text-[#10201D]'
                            : 'border-white/10 bg-white/[0.03] text-white/82'
                        }`}
                        aria-hidden="true"
                      >
                        {isAfter ? '✓' : '×'}
                      </span>
                      <span>
                        <span
                          className={`block text-[0.98rem] font-semibold ${
                            isAfter ? 'text-[#10201D]' : 'text-white/88'
                          }`}
                        >
                          {item.title}
                        </span>
                        <span
                          className={`mt-1 block text-[0.88rem] leading-relaxed ${
                            isAfter ? 'text-[#10201D]/66' : 'text-white/48'
                          }`}
                        >
                          {item.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PackageFeature({ children }) {
  return (
    <li className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-[#10201D]/74">
      <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-none text-[#10201D]" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

function SeoPackagesSection() {
  return (
    <section className="bg-[#F7F8F6] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
            <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
            SEO trajecten
          </div>
          <h2
            className="font-medium tracking-[-0.005em] text-[#10201D]"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(1.45rem, 2.35vw, 2.2rem)',
              lineHeight: '1.12',
              textWrap: 'balance',
            }}
          >
            Kies de SEO-aanpak die past bij je groeifase
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#10201D]/64">
            Geen standaard pakket om een pakket te verkopen. We starten met de route die
            het best past bij je website, markt en huidige vindbaarheid in Rotterdam.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {seoPackages.map((item, index) => {
            const isWide = index === seoPackages.length - 1;

            return (
              <article
                key={item.label}
                className={`overflow-hidden rounded-[0.35rem] border bg-white ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
                style={{ borderColor: item.accent }}
              >
                <div
                  className="flex items-center justify-between px-5 py-3 text-[0.96rem] font-semibold text-[#10201D]"
                  style={{ backgroundColor: item.background }}
                >
                  <span>{item.label}</span>
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.accent }}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={`grid gap-7 p-6 md:p-7 ${
                    isWide ? 'lg:grid-cols-[0.95fr_1.05fr]' : 'sm:grid-cols-[0.86fr_1fr]'
                  }`}
                >
                  <div className="flex flex-col">
                    <h3
                      className="font-medium tracking-[-0.005em] text-[#10201D]"
                      style={{
                        fontFamily: 'var(--font-poppins), sans-serif',
                        fontSize: isWide
                          ? 'clamp(1.45rem, 2.2vw, 2rem)'
                          : 'clamp(1.25rem, 1.9vw, 1.65rem)',
                        lineHeight: '1.12',
                        textWrap: 'balance',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-[31rem] text-[0.92rem] leading-relaxed text-[#10201D]/68">
                      {item.description}
                    </p>
                    <Link
                      href="/contact"
                      prefetch={false}
                      className="mt-8 inline-flex h-12 w-fit items-center justify-center gap-3 rounded-[0.25rem] bg-[#10201D] px-4 text-[0.82rem] font-semibold uppercase tracking-[0.02em] text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
                    >
                      <span>{item.cta}</span>
                      <span className="grid h-8 w-8 place-items-center rounded-[0.18rem] bg-white text-[#10201D]">
                        <ArrowRightIcon className="h-4 w-4 -rotate-45" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>

                  <div className="border-t border-[#10201D]/8 pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                    <p className="mb-5 text-[0.82rem] font-semibold uppercase tracking-[0.04em] text-[#10201D]/42">
                      {item.featuresLabel}
                    </p>
                    <ul className={`grid gap-4 ${isWide ? 'sm:grid-cols-2' : ''}`}>
                      {item.features.map((feature) => (
                        <PackageFeature key={feature}>{feature}</PackageFeature>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#F7F3EF] px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.66fr_1.34fr] lg:gap-12">
        <div className="flex flex-col">
          <div>
            <h2
              className="max-w-[24rem] font-medium tracking-[-0.005em] text-[#10201D]"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(1.45rem, 2.35vw, 2.15rem)',
                lineHeight: '1.12',
                textWrap: 'balance',
              }}
            >
              Antwoorden op je SEO vragen
            </h2>
            <p className="mt-4 max-w-[25rem] text-[0.92rem] leading-relaxed text-[#10201D]/66">
              Heldere antwoorden over hoe we SEO, lokale vindbaarheid, content en
              conversie inzetten voor bedrijven in Rotterdam.
            </p>
          </div>

          <Link
            href="/contact"
            prefetch={false}
            className="group mt-8 grid max-w-[23rem] grid-cols-[3.75rem_1fr_2rem] items-center gap-3 rounded-[0.35rem] border border-[#331300]/8 bg-white p-2.5 shadow-[0_14px_36px_rgba(51,19,0,0.055)] transition-transform hover:-translate-y-0.5 lg:mt-auto"
          >
            <span className="relative h-14 w-14 overflow-hidden rounded-[0.28rem] bg-[#D8ECFF]">
              <Image
                src="/niblah-headshot.webp"
                alt="Albin van Niblah"
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block text-[0.94rem] font-medium text-[#10201D]">
                Nog vragen?
              </span>
              <span className="mt-0.5 block text-[0.82rem] leading-relaxed text-[#10201D]/66">
                Plan een gratis SEO consult.
              </span>
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-[0.22rem] bg-[#F7F3EF] text-[#331300] transition-colors group-hover:bg-[#331300] group-hover:text-white">
              <ArrowRightIcon className="h-3.5 w-3.5 -rotate-45" aria-hidden="true" />
            </span>
          </Link>
        </div>

        <div className="border-t border-[#331300]/10">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              name="seo-rotterdam-faq"
              className="group border-b border-[#331300]/10 py-4 md:py-5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                <span
                  className="max-w-[40rem] font-medium tracking-normal text-[#10201D]"
                  style={{
                    fontFamily: 'var(--font-poppins), sans-serif',
                    fontSize: 'clamp(1.02rem, 1.25vw, 1.2rem)',
                    lineHeight: '1.32',
                    textWrap: 'balance',
                  }}
                >
                  {faq.question}
                </span>
                <span
                  className="relative mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full text-[#331300]"
                  aria-hidden="true"
                >
                  <span className="text-xl leading-none group-open:hidden">+</span>
                  <span className="hidden text-xl leading-none group-open:block">−</span>
                </span>
              </summary>
              <p className="mt-3 max-w-[40rem] text-[0.92rem] leading-relaxed text-[#10201D]/70">
                {faq.answer}
              </p>
            </details>
          ))}
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
          <span className="absolute left-[5.5%] bottom-[8.5rem] h-32 w-3 bg-[#1995FF]" />
          <span className="absolute left-[18%] top-0 h-36 w-8 bg-[#1995FF]" />
          <span className="absolute left-[18%] bottom-[2.8rem] h-56 w-8 bg-[#FFE7A6]" />
          <span className="absolute left-[6.5%] bottom-[4.5rem] h-20 w-10 bg-[#D8ECFF]" />

          <span className="absolute right-[9%] top-0 h-36 w-24 bg-[#E7DEFF]" />
          <span className="absolute right-[15%] top-[3rem] h-44 w-9 bg-[#1995FF]" />
          <span className="absolute right-[4.5%] top-[13.2rem] h-44 w-11 bg-[#D8ECFF]" />
          <span className="absolute right-[9%] top-[22.8rem] h-24 w-24 bg-[#FFE7A6]" />
          <span className="absolute right-[18%] bottom-[7rem] h-20 w-9 bg-[#D8ECFF]" />
          <span className="absolute right-[6.5%] bottom-[2.5rem] h-24 w-8 bg-[#D8ECFF]" />
          <span className="absolute right-[5%] bottom-0 h-20 w-3 bg-[#1995FF]" />
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 md:hidden">
          <span className="absolute -left-3 top-20 h-24 w-8 bg-[#E7DEFF]" />
          <span className="absolute right-5 top-10 h-20 w-5 bg-[#1995FF]" />
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

      <SeoTestimonialsSlider testimonials={testimonialCases} />

      <BeforeAfterSection />

      <SeoPackagesSection />

      <FaqSection />
    </main>
  );
}
