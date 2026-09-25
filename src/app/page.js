import Image from 'next/image'
import Link from 'next/link'
import GoogleReviewBar from '../components/GoogleReviewBar'
import { getHomeCopy } from '@/content/home'
import { ArrowRightIcon, ArrowTopRightOnSquareIcon, CalendarDaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export async function generateMetadata() {
  const copy = getHomeCopy()
  return copy.metadata
}

// Service reviews data
const serviceReviews = [
  {
    name: 'Sarah Chen',
    company: 'E-commerce Store Owner',
    rating: 5,
    text: 'Albin transformed our online store. Organic traffic increased 300% and revenue doubled in just 4 months. His SEO strategies are incredible!'
  },
  {
    name: 'Marcus Johnson',
    company: 'SaaS Startup',
    rating: 5,
    text: 'Our Google Ads were bleeding money until Albin optimized them. Now we have a 4x ROAS and consistent lead flow. Best investment we made.'
  },
  {
    name: 'Lisa Rodriguez',
    company: 'Local Business',
    rating: 5,
    text: 'From page 3 to #1 in Google in 6 months. Albin knows exactly what works and delivers results that speak for themselves.'
  },
  {
    name: 'David Park',
    company: 'Digital Agency',
    rating: 5,
    text: 'We hired Albin to scale our clients\' campaigns. His systematic approach and attention to detail is unmatched. Highly recommend!'
  },
  {
    name: 'Emma Thompson',
    company: 'Online Retailer',
    rating: 5,
    text: 'Conversion rate went from 1.2% to 4.8% after Albin optimized our landing pages and marketing funnels. ROI was immediate.'
  },
  {
    name: 'James Wilson',
    company: 'B2B Company',
    rating: 5,
    text: 'Albin helped us dominate our niche. Lead quality improved dramatically and our cost per acquisition dropped by 60%.'
  }
];

const moreServiceReviews = [
  {
    name: 'Rachel Green',
    company: 'Fashion Brand',
    rating: 5,
    text: 'Our brand visibility skyrocketed after working with Albin. His content strategy brought us from unknown to industry leader.'
  },
  {
    name: 'Tom Anderson',
    company: 'Tech Startup',
    rating: 5,
    text: 'Albin\'s Google Ads expertise saved our startup. We went from burning cash to profitable customer acquisition in weeks.'
  },
  {
    name: 'Sophie Miller',
    company: 'Service Business',
    rating: 5,
    text: 'Local SEO was a mystery until Albin explained it. Now we dominate local search and bookings increased 250%.'
  },
  {
    name: 'Alex Kumar',
    company: 'E-learning Platform',
    rating: 5,
    text: 'Organic traffic grew from 5K to 50K monthly visitors. Albin\'s SEO strategies are data-driven and incredibly effective.'
  },
  {
    name: 'Maria Santos',
    company: 'Consulting Firm',
    rating: 5,
    text: 'Our website finally converts! Albin optimized our entire funnel and our lead generation increased by 400%.'
  },
  {
    name: 'Chris Taylor',
    company: 'SaaS Company',
    rating: 5,
    text: 'Working with Albin was a game-changer. His strategic approach to digital marketing delivered results beyond our expectations.'
  }
];

const StarIcon = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-lg border-2 border-black p-6 flex-shrink-0 w-96 mx-3 shadow-[4px_4px_0_0_#000]">
    <div className="flex items-center gap-2 mb-4">
      {/* Google G Logo */}
      <div className="w-5 h-5 flex-shrink-0">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      {/* Stars */}
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>
    </div>
    <h3 className="font-bold text-lg mb-1">{review.name}</h3>
    <p className="text-sm text-gray-500 mb-3">{review.company}</p>
    <p className="text-gray-600 text-sm">{review.text}</p>
  </div>
);

const ServiceReviewSlider = () => {
  const duplicatedReviews = [...serviceReviews, ...serviceReviews];
  const duplicatedMoreReviews = [...moreServiceReviews, ...moreServiceReviews];

  return (
    <section className="bg-white py-16">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-900">Client <span className="bg-[#F7D8FA] px-2 rounded italic">Success</span> Stories</h2>
        
        {/* First slider - scrolling left */}
        <div className="relative w-full overflow-hidden mb-8">
            <div 
              className="flex"
              style={{
                animation: 'scroll 25s linear infinite',
                width: 'calc(200%)'
              }}
            >
                {duplicatedReviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
        
        {/* Second slider - scrolling right */}
        <div className="relative w-full overflow-hidden">
            <div 
              className="flex"
              style={{
                animation: 'scrollReverse 25s linear infinite',
                width: 'calc(200%)'
              }}
            >
                {duplicatedMoreReviews.map((review, index) => (
                    <ReviewCard key={`more-${index}`} review={review} />
                ))}
            </div>
        </div>
    </section>
  );
};

function getAvailabilityQuarter() {
  const amsterdamMonth = Number(
    new Intl.DateTimeFormat('nl-NL', {
      month: 'numeric',
      timeZone: 'Europe/Amsterdam',
    }).format(new Date())
  )
  const currentQuarter = Math.floor((amsterdamMonth - 1) / 3) + 1

  return currentQuarter === 4 ? 1 : currentQuarter + 1
}

const heroNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/seo', label: 'SEO' },
  { href: '/services', label: 'Diensten' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

function HomeEditorialHero({ availabilityQuarter }) {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#050708] px-5 pb-5 pt-5 text-white md:px-8 lg:h-[100svh] lg:px-12">
      <Image
        src="/home-hero-bloom-v2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[66%_center] md:object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,7,8,0.98)_0%,rgba(5,7,8,0.94)_25%,rgba(5,7,8,0.68)_48%,rgba(5,7,8,0.16)_86%,rgba(5,7,8,0.08)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.22] [background-image:radial-gradient(rgba(255,255,255,0.7)_0.5px,transparent_0.6px)] [background-size:3px_3px]"
      />

      <header className="relative z-10 flex flex-col gap-5 lg:grid lg:grid-cols-[1fr_minmax(30rem,42rem)_1fr] lg:items-start">
        <div className="flex items-start justify-between gap-4">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/niblah-logo-black.png"
              alt="Niblah"
              width={120}
              height={33}
              className="h-9 w-auto brightness-0 invert"
            />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/18 px-4 py-2 text-xs font-semibold uppercase text-white md:hidden"
          >
            Contact
          </Link>
        </div>

        <nav className="hidden md:block" aria-label="Hoofdnavigatie">
          <p className="mb-4 text-xs font-semibold uppercase text-white/42">{'//'} Navigatie</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-black uppercase text-white/50">
            {heroNavLinks.map((item, index) => (
              <li key={item.href} className="flex items-center gap-5">
                <Link
                  href={item.href}
                  className={index === 0 ? 'text-white transition-colors hover:text-[#FFE500]' : 'transition-colors hover:text-white'}
                >
                  {item.label}
                </Link>
                {index < heroNavLinks.length - 1 && (
                  <span className="text-white/28" aria-hidden="true">/</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden grid-cols-2 gap-10 justify-self-end text-right text-sm uppercase leading-relaxed text-white/52 lg:grid">
          <div>
            <p className="font-semibold text-white/42">{'//'} SEO studio</p>
            <p className="mt-4 text-lg text-white/70">Actief - kwartaal {availabilityQuarter}</p>
          </div>
          <div>
            <p className="font-semibold text-white/42">{'//'} Nederland</p>
            <p className="mt-4 text-lg text-white/70">Strategie + uitvoering</p>
          </div>
        </div>
      </header>

      <div className="relative z-10 grid min-h-[calc(100svh-6rem)] content-end gap-8 pt-24 md:pt-32 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[25rem_minmax(30rem,46rem)_1fr] lg:items-end lg:gap-9 lg:pt-20">
        <aside className="order-2 max-w-md lg:order-1 lg:pb-1">
          <div className="mb-7">
            <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase text-white/68">
              <span className="text-xl leading-none text-[#FFE500]" aria-hidden="true">★</span>
              Niblah proof
            </div>
            <p className="text-2xl font-black text-white">Tot 300% meer</p>
            <p className="mt-1 text-sm font-semibold text-white/64">organisch verkeer bij klanten</p>
            <div className="mt-4 flex gap-1.5" aria-hidden="true">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="flex h-5 w-5 items-center justify-center bg-[#1995FF] text-[10px] font-black text-white">
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/10 p-3 backdrop-blur-sm lg:max-w-[23.5rem]">
            <div className="flex -space-x-2">
              {['/niblah-headshot.webp', '/avatar.avif'].map((src) => (
                <span key={src} className="relative h-11 w-11 overflow-hidden bg-white/10">
                  <Image src={src} alt="" fill sizes="48px" className="object-cover" />
                </span>
              ))}
              <span className="flex h-11 w-11 items-center justify-center bg-[#FFE500] text-sm font-black text-[#331300]">
                N
              </span>
            </div>
            <p className="text-xs font-black uppercase leading-snug text-white/58">
              Klein team, direct contact en klaar om aan je SEO-systeem te werken.
            </p>
          </div>
        </aside>

        <div className="order-1 max-w-3xl lg:order-2 lg:pb-0">
          <h1
            className="max-w-3xl text-4xl font-black uppercase leading-[0.98] text-white/58 sm:text-5xl md:text-6xl lg:text-[3.65rem]"
            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
          >
            SEO specialist die <span className="text-white">groei</span> niet aan toeval overlaat.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/56 md:text-lg">
            Technische SEO, content, autoriteit en conversie in een systeem dat meer zichtbaarheid omzet in betere aanvragen.
          </p>
          <Link
            href="/contact"
            className="mt-7 grid max-w-[44rem] grid-cols-[4.5rem_1fr] overflow-hidden bg-[#FFE500] text-[#331300] shadow-[0_18px_60px_rgba(255,229,0,0.16)] transition-transform duration-200 hover:translate-y-0.5 md:grid-cols-[5.25rem_1fr]"
            aria-label="Plan gratis groeiscan"
          >
            <span className="flex min-h-16 items-center justify-center border-r-2 border-[#331300] bg-[#FFE500]">
              <ArrowRightIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="flex min-h-16 items-center justify-center px-5 text-center text-base font-black uppercase md:text-lg">
              Plan gratis groeiscan
            </span>
          </Link>
        </div>

        <aside className="order-3 hidden justify-self-end self-end pb-1 text-right text-xs font-semibold uppercase text-white/44 xl:block">
          Scroll down
        </aside>
      </div>
    </section>
  )
}

function FeaturedProjectsSection({ projects }) {
  return (
    <section id="projecten" aria-labelledby="featured-projects-title" className="bg-[#F7F8F6] px-6 py-16 md:py-24">
      <div className="w-full">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
              <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
              {projects.eyebrow}
            </div>
            <h2
              id="featured-projects-title"
              className="max-w-4xl text-3xl font-bold leading-tight text-gray-950 md:text-5xl"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
            >
              {projects.heading}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg lg:justify-self-end">
            {projects.description}
          </p>
        </div>

        <div className="space-y-8">
          {projects.featured.map((project, index) => (
            <article
              key={project.url}
              className="grid overflow-hidden rounded-xl border border-[#331300]/10 bg-white shadow-[0_18px_54px_rgba(51,19,0,0.08)] lg:grid-cols-2"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block aspect-[16/11] min-h-72 bg-[#331300]/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1995FF] lg:aspect-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                aria-label={`${projects.visitLabel}: ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.015]"
                />
                <span className="absolute bottom-4 left-4 rounded-md bg-white px-3 py-2 text-xs font-bold text-[#331300] shadow-sm">
                  Bekijk de website <ArrowTopRightOnSquareIcon className="ml-1 inline h-4 w-4" aria-hidden="true" />
                </span>
              </a>

              <div className="flex min-w-0 flex-col p-6 md:p-9 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#126AAE]">
                  Case {String(index + 1).padStart(2, '0')} / {project.type} / {project.location}
                </p>
                <h3
                  className="mt-4 text-3xl font-bold leading-tight text-gray-950 md:text-4xl"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {project.title}
                </h3>
                <dl className="mt-7 space-y-5 text-sm leading-relaxed text-gray-700 md:text-[15px]">
                  <div>
                    <dt className="font-bold text-gray-950">De vraag</dt>
                    <dd className="mt-1">{project.question}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-950">Onze uitwerking</dt>
                    <dd className="mt-1">{project.approach}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-gray-950">Wat er nu staat</dt>
                    <dd className="mt-1">{project.result}</dd>
                  </div>
                </dl>
                <ul className="mt-7 flex flex-wrap gap-2" aria-label="Projectonderdelen">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-full bg-[#1995FF]/10 px-3 py-1.5 text-xs font-semibold text-[#126AAE]">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-[#331300] underline decoration-[#1995FF] decoration-2 underline-offset-4 hover:text-[#126AAE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1995FF]"
                >
                  {projects.visitLabel}: {project.title}
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mb-6 mt-14 text-2xl font-bold text-gray-950 md:text-3xl" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
          {projects.moreHeading}
        </h3>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.cards.map((project) => (
            <article
              key={project.url}
              className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#331300]/12 bg-white shadow-[0_18px_54px_rgba(51,19,0,0.08)]"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[36/25] overflow-hidden bg-[#331300]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1995FF] focus-visible:ring-offset-2"
                aria-label={`${projects.visitLabel}: ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) calc(100vw - 3rem), 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/94 text-[#331300] shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </a>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#1995FF]/10 px-3 py-1 text-xs font-semibold text-[#126AAE]">
                    {project.type}
                  </span>
                  <span className="text-xs font-semibold uppercase text-[#331300]/42">
                    Live project
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold leading-tight text-gray-950"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 md:text-[15px]">
                  {project.description}
                </p>

                <ul className="mt-5 grid gap-2 border-t border-[#331300]/10 pt-5">
                  {project.services.map((service) => (
                    <li key={`${project.title}-${service}`} className="flex items-center gap-2 text-sm text-gray-800">
                      <CheckCircleIcon className="h-4 w-4 shrink-0 text-[#1995FF]" aria-hidden="true" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#331300] transition-colors hover:text-[#1995FF]"
                >
                  <span>{projects.visitLabel}</span>
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default async function Home() {
  const copy = getHomeCopy()
  const availabilityQuarter = getAvailabilityQuarter()

  return (
    <main className="min-h-screen">
      <HomeEditorialHero availabilityQuarter={availabilityQuarter} />

      {/* 4-Column Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 - Development & Websites */}
        <div className="bg-[#D4A574] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-3 md:mb-4" style={{ fontSize: '24px' }}>
            {copy.featureColumns[0].title}
          </h2>
          
          <div className="flex items-center justify-center py-4 md:py-5">
            <div className="flex h-24 w-full items-center justify-center p-3 md:h-28">
              <Image 
                src="/web dev services.png" 
                alt={copy.featureColumns[0].imageAlt}
                width={150}
                height={150}
                className="h-auto w-auto object-contain max-h-24 md:max-h-28"
              />
            </div>
          </div>
          
          <p className="text-black mb-5 md:mb-7 text-xs md:text-sm leading-relaxed">
            {copy.featureColumns[0].description}
          </p>
          
          <Link 
            href="/services/web-development"
            className="mt-auto inline-flex w-fit self-start items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-transparent transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
          >
            {copy.featureColumns[0].button}
          </Link>
        </div>

        {/* Column 2 - SEO Services */}
        <div className="bg-[#E8C88E] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-3 md:mb-4" style={{ fontSize: '24px' }}>
            {copy.featureColumns[1].title}
          </h2>
          
          <div className="flex items-center justify-center py-4 md:py-5">
            <div className="flex h-24 w-full items-center justify-center p-3 md:h-28">
              <Image 
                src="/SEO ICON.png" 
                alt={copy.featureColumns[1].imageAlt}
                width={150}
                height={150}
                className="h-auto w-auto object-contain max-h-24 md:max-h-28"
              />
            </div>
          </div>
          
          <p className="text-black mb-5 md:mb-7 text-xs md:text-sm leading-relaxed">
            {copy.featureColumns[1].description}
          </p>
          
          <Link 
            href="/services/seo"
            className="mt-auto inline-flex w-fit self-start items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-transparent transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
          >
            {copy.featureColumns[1].button}
          </Link>
        </div>

        {/* Column 3 - Google Ads (SEA) */}
        <div className="bg-[#B8C5D6] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-3 md:mb-4" style={{ fontSize: '24px' }}>
            {copy.featureColumns[2].title}
          </h2>
          
          <div className="flex items-center justify-center py-4 md:py-5">
            <div className="flex h-24 w-full items-center justify-center p-3 md:h-28">
              <Image 
                src="/SEA icon.png" 
                alt={copy.featureColumns[2].imageAlt}
                width={150}
                height={150}
                className="h-auto w-auto object-contain max-h-24 md:max-h-28"
              />
            </div>
          </div>
          
          <p className="text-black mb-5 md:mb-7 text-xs md:text-sm leading-relaxed">
            {copy.featureColumns[2].description}
          </p>
          
          <Link 
            href="/services/sea"
            className="mt-auto inline-flex w-fit self-start items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-transparent transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
          >
            {copy.featureColumns[2].button}
          </Link>
        </div>

        {/* Column 4 - Marketing Automation */}
        <div className="bg-[#E5E5E5] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-3 md:mb-4" style={{ fontSize: '24px' }}>
            {copy.featureColumns[3].title}
          </h2>
          
          <div className="flex items-center justify-center py-4 md:py-5">
            <div className="flex h-24 w-full items-center justify-center p-3 md:h-28">
              <Image 
                src="/marketing automation.png" 
                alt={copy.featureColumns[3].imageAlt}
                width={150}
                height={150}
                className="h-auto w-auto object-contain max-h-24 md:max-h-28"
              />
            </div>
          </div>
          
          <p className="text-black mb-5 md:mb-7 text-xs md:text-sm leading-relaxed">
            {copy.featureColumns[3].description}
          </p>
          
          <Link 
            href="/services/email-marketing"
            className="mt-auto inline-flex w-fit self-start items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-transparent transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
          >
            {copy.featureColumns[3].button}
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="w-full">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1795FF]">
                <span className="h-2 w-2 rounded-full bg-[#1795FF]" />
                {copy.services.eyebrow}
              </div>
              <h2
                className="max-w-4xl font-bold leading-tight text-gray-950"
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontSize: 'clamp(2rem, 4vw, 3.35rem)',
                }}
              >
                {copy.services.heading}
              </h2>
            </div>
            <div className="max-w-4xl lg:justify-self-end">
              <p
                className="leading-relaxed text-gray-700"
                style={{ fontSize: 'clamp(0.98rem, 1.2vw, 1.12rem)' }}
              >
                {copy.services.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Development & Websites */}
            <div className="flex flex-col">
              <div className="bg-[#D4A574] rounded-lg p-4 mb-5 h-32 flex items-center justify-center">
                <Image 
                  src="/web dev services.png" 
                  alt={copy.services.cards[0].imageAlt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: '1.35rem' }}>
                {copy.services.cards[0].title}
              </h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                {copy.services.cards[0].description}
              </p>
              <ul className="mb-6 space-y-3">
                {copy.services.cards[0].points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-snug text-gray-800">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1795FF]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/services/web-development"
                className="mt-auto inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>{copy.services.cards[0].linkLabel}</span>
                <span className="flex items-center justify-center w-7 h-7 bg-[#1795FF] rounded-full text-white group-hover:translate-x-2 transition-transform duration-200">
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>

            {/* Card 2 - SEO Services */}
            <div className="flex flex-col">
              <div className="bg-[#E8C88E] rounded-lg p-4 mb-5 h-32 flex items-center justify-center">
                <Image 
                  src="/SEO ICON.png" 
                  alt={copy.services.cards[1].imageAlt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: '1.35rem' }}>
                {copy.services.cards[1].title}
              </h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                {copy.services.cards[1].description}
              </p>
              <ul className="mb-6 space-y-3">
                {copy.services.cards[1].points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-snug text-gray-800">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1795FF]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/services/seo"
                className="mt-auto inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>{copy.services.cards[1].linkLabel}</span>
                <span className="flex items-center justify-center w-7 h-7 bg-[#1795FF] rounded-full text-white group-hover:translate-x-2 transition-transform duration-200">
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>

            {/* Card 3 - Google Ads */}
            <div className="flex flex-col">
              <div className="bg-[#B8C5D6] rounded-lg p-4 mb-5 h-32 flex items-center justify-center">
                <Image 
                  src="/SEA icon.png" 
                  alt={copy.services.cards[2].imageAlt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: '1.35rem' }}>
                {copy.services.cards[2].title}
              </h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                {copy.services.cards[2].description}
              </p>
              <ul className="mb-6 space-y-3">
                {copy.services.cards[2].points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-snug text-gray-800">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1795FF]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/services/sea"
                className="mt-auto inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>{copy.services.cards[2].linkLabel}</span>
                <span className="flex items-center justify-center w-7 h-7 bg-[#1795FF] rounded-full text-white group-hover:translate-x-2 transition-transform duration-200">
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>

            {/* Card 4 - Marketing Automation */}
            <div className="flex flex-col">
              <div className="bg-[#E5E5E5] rounded-lg p-4 mb-5 h-32 flex items-center justify-center">
                <Image 
                  src="/marketing automation.png" 
                  alt={copy.services.cards[3].imageAlt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: '1.35rem' }}>
                {copy.services.cards[3].title}
              </h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                {copy.services.cards[3].description}
              </p>
              <ul className="mb-6 space-y-3">
                {copy.services.cards[3].points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-snug text-gray-800">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1795FF]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/services/email-marketing"
                className="mt-auto inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>{copy.services.cards[3].linkLabel}</span>
                <span className="flex items-center justify-center w-7 h-7 bg-[#1795FF] rounded-full text-white group-hover:translate-x-2 transition-transform duration-200">
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjectsSection projects={copy.projects} />

      {/* Stats Section - Dark */}
      <section className="bg-[#331300] py-16 md:py-24 px-6">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Main Text */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">
                {copy.stats.heading}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {copy.stats.description}
              </p>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Stat 1 */}
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {copy.stats.items[0].value}
                </h3>
                <p className="text-sm text-gray-400">
                  {copy.stats.items[0].label}
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {copy.stats.items[1].value}
                </h3>
                <p className="text-sm text-gray-400">
                  {copy.stats.items[1].label}
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {copy.stats.items[2].value}
                </h3>
                <p className="text-sm text-gray-400">
                  {copy.stats.items[2].label}
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {copy.stats.items[3].value}
                </h3>
                <p className="text-sm text-gray-400">
                  {copy.stats.items[3].label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gratis Consult Section */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-12 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(51,19,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,19,0,0.055)_1px,transparent_1px)] bg-[size:34px_34px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_8%,rgba(25,149,255,0.11),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.82),rgba(255,255,255,0.96))]"
        />

        <div className="w-full">
          <div className="grid gap-7 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:gap-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
                <span className="h-2 w-2 rounded-full bg-[#1995FF] shadow-[0_0_14px_rgba(25,149,255,0.28)]" />
                {copy.consult.eyebrow}
              </div>
              <h2
                className="max-w-3xl font-bold leading-tight text-gray-950"
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontSize: 'clamp(1.85rem, 3.1vw, 2.85rem)',
                }}
              >
                {copy.consult.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-[17px]">
                {copy.consult.description}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {copy.consult.points.map((point) => (
                  <div key={point} className="flex items-start gap-2.5 text-sm leading-snug text-gray-800">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#1995FF]" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-[#331300]/12 bg-white/92 p-4 shadow-[0_16px_46px_rgba(51,19,0,0.09)] backdrop-blur-sm md:p-6 lg:justify-self-end">
              <div className="mb-6 hidden items-center justify-between gap-4 md:flex">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[#1995FF]/10">
                  <Image
                    src="/niblah-headshot.webp"
                    alt={copy.consult.imageAlt}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#331300] text-white shadow-[0_10px_28px_rgba(51,19,0,0.18)]">
                  <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <p
                className="text-sm font-semibold leading-tight text-gray-400 md:text-base"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                {copy.consult.cardTitle}
              </p>
              <h3
                className="mt-2 text-xl font-bold leading-tight text-gray-950 md:text-3xl"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
              >
                {copy.consult.cardSubtitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 md:mt-4 md:text-[15px]">
                {copy.consult.cardDescription}
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#331300] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(51,19,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1995FF] focus:ring-offset-2 md:mt-6 md:px-5 md:py-2.5"
              >
                <span>{copy.consult.linkLabel}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#331300] md:h-8 md:w-8">
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>

              <p className="mt-5 hidden border-t border-[#331300]/10 pt-4 text-xs font-medium leading-relaxed text-[#331300]/65 sm:block">
                {copy.consult.cardMeta}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <GoogleReviewBar />

      {/* FAQ Section */}
      <section className="bg-white px-6 py-12 md:py-16">
        <div className="w-full">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
                <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
                {copy.faq.eyebrow}
              </div>
              <h2
                className="max-w-3xl font-bold leading-tight text-gray-950"
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontSize: 'clamp(1.85rem, 3.1vw, 2.85rem)',
                }}
              >
                {copy.faq.heading}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-[17px]">
                {copy.faq.description}
              </p>
            </div>

            <div className="space-y-3">
              {copy.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-lg border border-[#331300]/12 bg-white p-4 shadow-sm open:bg-[#FAFBFC] md:p-5"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold leading-snug text-gray-950 marker:hidden">
                    <span>{item.question}</span>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#331300]/15 text-sm text-[#331300] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-[15px]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compact Proof Section */}
      <section className="border-y border-white/10 bg-[#331300] px-6 py-8 md:py-10 lg:py-12">
        <div className="w-full">
          <div className="grid gap-6 lg:grid-cols-[minmax(15rem,21rem)_minmax(0,1fr)] lg:items-center lg:gap-9">
            <div className="relative aspect-[4/3] max-h-[14rem] overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-[0_16px_44px_rgba(0,0,0,0.2)] sm:max-w-[24rem] md:max-h-[18rem] lg:max-w-none lg:aspect-[0.95/1]">
              <Image
                src={copy.caseStudy.image}
                alt={copy.caseStudy.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) calc(100vw - 3rem), 28vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(25,149,255,0.16),transparent_34%),linear-gradient(145deg,rgba(51,19,0,0.2),transparent_48%)]" />
            </div>

            <div className="min-w-0">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF]">
                <span className="h-2 w-2 rounded-full bg-[#1995FF]" />
                {copy.caseStudy.role}
              </div>
              <blockquote
                className="max-w-4xl font-bold leading-snug text-white"
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontSize: 'clamp(1.35rem, 2vw, 2rem)',
                }}
              >
                “{copy.caseStudy.quote}”
              </blockquote>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                {copy.caseStudy.person}
              </p>

              <div className="mt-6 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                {copy.caseStudy.metrics.map((metric) => (
                  <div key={metric.value} className="border-l border-white/12 pl-4">
                    <p className="text-2xl font-bold leading-none text-white md:text-3xl">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/50">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={copy.caseStudy.linkHref}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1995FF] transition-colors hover:text-white"
              >
                <span>{copy.caseStudy.linkLabel}</span>
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
