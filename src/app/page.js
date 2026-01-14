import Image from 'next/image'
import Link from 'next/link'
import HeroButton from '../components/HeroButton'
import LeadForm from '../components/LeadForm'
import GoogleReviewBar from '../components/GoogleReviewBar'
import { getServerLocale } from '@/lib/locale'
import { getHomeCopy } from '@/i18n/home'

export async function generateMetadata() {
  const locale = await getServerLocale()
  const copy = getHomeCopy(locale)
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

export default async function Home() {
  const locale = await getServerLocale()
  const copy = getHomeCopy(locale)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
            {copy.hero.titleLine1}<br />{copy.hero.titleLine2}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            {copy.hero.subtitle}
          </p>
          <HeroButton href="/contact">
            {copy.hero.cta}
          </HeroButton>
        </div>
      </section>

      {/* 4-Column Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 - Development & Websites */}
        <div className="bg-[#D4A574] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-4 md:mb-6" style={{ fontSize: '24px' }}>
            {copy.featureColumns[0].title}
          </h2>
          
          <div className="flex-grow flex items-center justify-center my-4 md:my-6">
            <div className="w-full h-48 md:h-56 flex items-center justify-center p-4">
              <Image 
                src="/web dev services.png" 
                alt={copy.featureColumns[0].imageAlt}
                width={200}
                height={200}
                className="object-contain max-h-full"
              />
            </div>
          </div>
          
          <p className="text-black mb-4 md:mb-6 text-xs md:text-sm">
            {copy.featureColumns[0].description}
          </p>
          
          <Link 
            href="/services/web-development"
            className="inline-flex items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
          >
            {copy.featureColumns[0].button}
          </Link>
        </div>

        {/* Column 2 - SEO Services */}
        <div className="bg-[#E8C88E] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-4 md:mb-6" style={{ fontSize: '24px' }}>
            {copy.featureColumns[1].title}
          </h2>
          
          <div className="flex-grow flex items-center justify-center my-4 md:my-6">
            <div className="w-full h-48 md:h-56 flex items-center justify-center p-4">
              <Image 
                src="/SEO ICON.png" 
                alt={copy.featureColumns[1].imageAlt}
                width={200}
                height={200}
                className="object-contain max-h-full"
              />
            </div>
          </div>
          
          <p className="text-black mb-4 md:mb-6 text-xs md:text-sm">
            {copy.featureColumns[1].description}
          </p>
          
          <Link 
            href="/services/seo"
            className="inline-flex items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
          >
            {copy.featureColumns[1].button}
          </Link>
        </div>

        {/* Column 3 - Google Ads (SEA) */}
        <div className="bg-[#B8C5D6] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-4 md:mb-6" style={{ fontSize: '24px' }}>
            {copy.featureColumns[2].title}
          </h2>
          
          <div className="flex-grow flex items-center justify-center my-4 md:my-6">
            <div className="w-full h-48 md:h-56 flex items-center justify-center p-4">
              <Image 
                src="/SEA icon.png" 
                alt={copy.featureColumns[2].imageAlt}
                width={200}
                height={200}
                className="object-contain max-h-full"
              />
            </div>
          </div>
          
          <p className="text-black mb-4 md:mb-6 text-xs md:text-sm">
            {copy.featureColumns[2].description}
          </p>
          
          <Link 
            href="/services/sea"
            className="inline-flex items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
          >
            {copy.featureColumns[2].button}
          </Link>
        </div>

        {/* Column 4 - Marketing Automation */}
        <div className="bg-[#E5E5E5] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-4 md:mb-6" style={{ fontSize: '24px' }}>
            {copy.featureColumns[3].title}
          </h2>
          
          <div className="flex-grow flex items-center justify-center my-4 md:my-6">
            <div className="w-full h-48 md:h-56 flex items-center justify-center p-4">
              <Image 
                src="/marketing automation.png" 
                alt={copy.featureColumns[3].imageAlt}
                width={200}
                height={200}
                className="object-contain max-h-full"
              />
            </div>
          </div>
          
          <p className="text-black mb-4 md:mb-6 text-xs md:text-sm">
            {copy.featureColumns[3].description}
          </p>
          
          <Link 
            href="/services/email-marketing"
            className="inline-flex items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent transition-all duration-200 border-2 border-black hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#000] shadow-[0_4px_0_0_#000]"
          >
            {copy.featureColumns[3].button}
          </Link>
        </div>
      </section>

      {/* Stats Section - Dark */}
      <section className="bg-[#331300] py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
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

      {/* Services Section */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {copy.services.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Development & Websites */}
            <div className="flex flex-col">
              <div className="bg-[#D4A574] rounded-2xl p-4 mb-4 h-32 flex items-center justify-center">
                <Image 
                  src="/web dev services.png" 
                  alt={copy.services.cards[0].imageAlt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {copy.services.cards[0].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {copy.services.cards[0].description}
              </p>
              <Link 
                href="/services/web-development"
                className="inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>{copy.services.cards[0].linkLabel}</span>
                <span className="flex items-center justify-center w-7 h-7 bg-[#1795FF] rounded-full text-sm text-white group-hover:translate-x-2 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>

            {/* Card 2 - SEO Services */}
            <div className="flex flex-col">
              <div className="bg-[#E8C88E] rounded-2xl p-4 mb-4 h-32 flex items-center justify-center">
                <Image 
                  src="/SEO ICON.png" 
                  alt={copy.services.cards[1].imageAlt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {copy.services.cards[1].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {copy.services.cards[1].description}
              </p>
              <Link 
                href="/services/seo"
                className="inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>{copy.services.cards[1].linkLabel}</span>
                <span className="flex items-center justify-center w-7 h-7 bg-[#1795FF] rounded-full text-sm text-white group-hover:translate-x-2 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>

            {/* Card 3 - Google Ads */}
            <div className="flex flex-col">
              <div className="bg-[#B8C5D6] rounded-2xl p-4 mb-4 h-32 flex items-center justify-center">
                <Image 
                  src="/SEA icon.png" 
                  alt={copy.services.cards[2].imageAlt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {copy.services.cards[2].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {copy.services.cards[2].description}
              </p>
              <Link 
                href="/services/sea"
                className="inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>{copy.services.cards[2].linkLabel}</span>
                <span className="flex items-center justify-center w-7 h-7 bg-[#1795FF] rounded-full text-sm text-white group-hover:translate-x-2 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>

            {/* Card 4 - Marketing Automation */}
            <div className="flex flex-col">
              <div className="bg-[#E5E5E5] rounded-2xl p-4 mb-4 h-32 flex items-center justify-center">
                <Image 
                  src="/marketing automation.png" 
                  alt={copy.services.cards[3].imageAlt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {copy.services.cards[3].title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {copy.services.cards[3].description}
              </p>
              <Link 
                href="/services/email-marketing"
                className="inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>{copy.services.cards[3].linkLabel}</span>
                <span className="flex items-center justify-center w-7 h-7 bg-[#1795FF] rounded-full text-sm text-white group-hover:translate-x-2 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gratis Consult Section */}
      <section className="bg-white py-8 md:py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - First on mobile, right on desktop */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden order-first md:order-last mx-auto w-full max-w-md md:max-w-none">
              <Image 
                src="/gratis-consult.png"
                alt={copy.consult.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content - Second on mobile, left on desktop */}
            <div className="order-last md:order-first">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {copy.consult.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {copy.consult.description}
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-gray-900 text-base font-semibold group hover:underline"
              >
                <span>{copy.consult.linkLabel}</span>
                <span className="flex items-center justify-center w-8 h-8 bg-[#1795FF] rounded-full text-lg text-white group-hover:translate-x-2 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <GoogleReviewBar />

      {/* Lead Form Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
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
