import Image from 'next/image'
import Link from 'next/link'
import HeroButton from '../components/HeroButton'
import LeadForm from '../components/LeadForm'
import GoogleReviewBar from '../components/GoogleReviewBar'
import { getHomeCopy } from '@/content/home'
import { ArrowRightIcon, CalendarDaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Client <span className="bg-[#F7D8FA] px-2 rounded italic">Success</span> Stories</h2>
        
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

function HeroDashboardMockup({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden rounded-[1.35rem] border-2 border-[#331300]/70 bg-white/80 shadow-[0_24px_80px_rgba(25,149,255,0.22),0_14px_56px_rgba(51,19,0,0.16)] backdrop-blur-sm ${className}`}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_8%_0%,rgba(25,149,255,0.24),transparent_31%),radial-gradient(circle_at_92%_5%,rgba(51,19,0,0.18),transparent_30%),radial-gradient(circle_at_74%_92%,rgba(25,149,255,0.14),transparent_36%),linear-gradient(135deg,rgba(25,149,255,0.09),rgba(51,19,0,0.06)_52%,rgba(25,149,255,0.06))]" />
      <div className="absolute inset-0 z-0 bg-white/62" />
      <div className="relative z-10 flex h-16 items-center border-b border-[#331300]/10 px-5">
        <div className="h-3 w-3 rounded-full bg-[#ff6b3d]" />
        <div className="ml-3 h-4 w-24 rounded bg-[#101828]/12" />
        <div className="ml-auto h-4 w-4 rounded border border-[#101828]/20" />
      </div>
      <div className="relative z-10 grid min-w-[32rem] grid-cols-[0.82fr_1.18fr] gap-4 p-5">
        <div className="space-y-3">
          <div className="h-10 rounded-lg border border-[#101828]/10 bg-white shadow-sm" />
          <div className="h-11 rounded-lg bg-[#101828]/8" />
          <div className="h-9 rounded-lg bg-[#101828]/6" />
          <div className="h-9 rounded-lg bg-[#101828]/6" />
          <div className="pt-4">
            <div className="h-3 w-20 rounded bg-[#101828]/14" />
          </div>
          <div className="h-9 rounded-lg bg-[#101828]/6" />
          <div className="h-9 rounded-lg bg-[#101828]/6" />
        </div>
        <div className="space-y-4">
          <div className="h-12 rounded-xl bg-[#101828]/6" />
          <div className="grid grid-cols-2 gap-3">
            <div className="h-28 rounded-xl border border-[#101828]/10 bg-white shadow-sm" />
            <div className="h-28 rounded-xl border border-[#101828]/10 bg-white shadow-sm" />
          </div>
          <div className="h-36 rounded-xl border border-[#101828]/10 bg-white shadow-sm" />
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  const copy = getHomeCopy()
  const availabilityQuarter = getAvailabilityQuarter()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white px-6 pb-10 pt-10 md:py-28 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(16,24,40,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,24,40,0.07)_1px,transparent_1px)] bg-[size:34px_34px] opacity-70 md:inset-y-0 md:left-auto md:right-0 md:w-[58%] md:[mask-image:linear-gradient(to_left,black_54%,transparent)]"
        />
        <HeroDashboardMockup className="absolute right-14 top-24 -z-10 hidden h-[26rem] w-[28rem] lg:block xl:right-24" />
        <div className="relative w-full">
          <div className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
            <div className="relative left-1/2 mb-5 flex w-screen -translate-x-1/2 flex-nowrap items-center justify-center gap-2 whitespace-nowrap text-[13.6px] font-semibold text-gray-800 [text-wrap:nowrap] md:static md:inline-flex md:w-auto md:translate-x-0 md:justify-start">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.55)] motion-safe:animate-pulse"
              />
              <span className="shrink-0 text-center md:text-left">{copy.hero.availabilityPrefix} Kwartaal {availabilityQuarter}</span>
            </div>
            <h1
              className="mx-auto mb-6 max-w-3xl text-[2.55rem] font-bold leading-[0.98] text-gray-950 md:mx-0 md:text-[3.2rem] lg:text-[3.85rem]"
              style={{
                fontFamily: 'var(--font-poppins), sans-serif',
                fontSize: 'clamp(1.9rem, 7.85vw, 2.25rem)',
                lineHeight: '0.98',
              }}
            >
              {copy.hero.titleLine1}<br />{copy.hero.titleLine2}
            </h1>
            <p
              className="mx-auto mb-8 max-w-2xl text-[15.3px] leading-relaxed text-gray-700 md:mx-0 md:text-[17px]"
              style={{ fontSize: 'clamp(0.85rem, 3.5vw, 1rem)' }}
            >
              {copy.hero.subtitle}
            </p>
            <HeroButton href="/contact">
              {copy.hero.cta}
            </HeroButton>
            <HeroDashboardMockup className="relative mx-auto mt-14 h-[22rem] w-[calc(100vw-3rem)] max-w-[40rem] md:hidden" />
          </div>
        </div>
      </section>

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

      {/* Stats Section - Dark */}
      <section className="bg-[#331300] py-16 md:py-24 px-6">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Main Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {copy.stats.items[0].value}
                </h3>
                <p className="text-sm text-gray-400">
                  {copy.stats.items[0].label}
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {copy.stats.items[1].value}
                </h3>
                <p className="text-sm text-gray-400">
                  {copy.stats.items[1].label}
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {copy.stats.items[2].value}
                </h3>
                <p className="text-sm text-gray-400">
                  {copy.stats.items[2].label}
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
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
                    src="/avatar.png"
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

      {/* Lead Form Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="w-full">
          <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
            {/* Left - Text Content */}
            <div>
              {/* Top Pills */}
              <div className="flex items-center gap-0 mb-8">
                <button className="px-3 md:px-6 py-1.5 md:py-2.5 bg-[#241C15] text-white font-semibold rounded-l-full border-2 border-[#241C15] text-xs md:text-base whitespace-nowrap">
                  {copy.leadSection.pills.primary}
                </button>
                <button className="px-3 md:px-6 py-1.5 md:py-2.5 bg-white text-gray-900 font-normal rounded-r-full border-2 border-[#241C15] border-l-0 text-xs md:text-base">
                  <span className="font-semibold">{copy.leadSection.pills.secondaryBold}</span>{' '}
                  <span className="hidden sm:inline">{copy.leadSection.pills.secondaryRest}</span>
                  <span className="sm:hidden">{copy.leadSection.pills.secondaryShort}</span>
                </button>
              </div>

              {/* Title */}
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {copy.leadSection.title.prefix}{' '}
                <span className="relative inline-block">
                  {copy.leadSection.title.highlight}
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#FFD43B] -z-10"></span>
                </span>
                {copy.leadSection.title.suffix ? ` ${copy.leadSection.title.suffix}` : ''}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-900 mb-8 leading-relaxed">
                {copy.leadSection.description}
              </p>
              
              {/* Features Grid - 2 columns */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {/* Left Column */}
                <div className="space-y-4">
                  {copy.leadSection.featuresLeft.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-base text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {copy.leadSection.featuresRight.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-base text-gray-900">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ontdek onze diensten button */}
              <div className="flex items-center gap-3">
                <span className="text-lg font-normal text-gray-900">{copy.leadSection.ctaLabel}</span>
                <Link 
                  href="/services"
                  className="flex items-center justify-center w-10 h-10 bg-[#1795FF] rounded-full hover:bg-[#0f7dd4] transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right - Lead Form */}
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  )
}
