import Image from 'next/image'
import Link from 'next/link'
import avatarImage from '../assets/avatar.png'
import graphImage from '../assets/graph.png'
import Button from '../components/Button'
import HeroButton from '../components/HeroButton'
import ReviewSlider from '../components/ReviewSlider'
import LeadForm from '../components/LeadForm'
import ImageCarousel from '../components/ImageCarousel'
import ReviewPricing from '../components/ReviewPricing'
import GoogleReviewBar from '../components/GoogleReviewBar'

export const metadata = {
  title: 'Online marketing uitbesteden? 30+ jaar aan ervaring in een familie! | Niblah',
  description: 'Boutique marketing bureau met persoonlijke service. Direct contact met je specialist, geen lange wachttijden. Allround service: SEO, Google Ads, websites & marketing automation. Bespaar 25% t.o.v. grote bureaus.',
  keywords: 'online marketing uitbesteden, marketing bureau, SEO specialist, Google Ads specialist, website ontwikkeling, marketing automation, boutique marketing bureau, persoonlijke service',
  openGraph: {
    title: 'Online marketing uitbesteden? 30+ jaar ervaring in een familie | Niblah',
    description: 'Boutique marketing bureau met persoonlijke service. Direct contact met je specialist. Allround service: SEO, Google Ads, websites & marketing automation.',
    images: ['/avatar.png'],
  },
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
  <div className="bg-white rounded-lg border border-gray-200 p-6 flex-shrink-0 w-96 mx-3">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>
      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
            Online marketing uitbesteden?<br />30+ jaar aan ervaring gebundeld in een familie
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Wil je samenwerken met een klein team dat doelgericht aan de slag gaat om jouw wensen te realiseren? Klik dan op de knop hieronder en kijk of je bedrijf in aanmerking komt!
          </p>
          <HeroButton href="/contact">
            Start uw project
          </HeroButton>
        </div>
      </section>

      {/* 4-Column Feature Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 - Development & Websites */}
        <div className="bg-[#D4A574] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-4 md:mb-6" style={{ fontSize: '24px' }}>
            Development & Websites
          </h2>
          
          <div className="flex-grow flex items-center justify-center my-4 md:my-6">
            <div className="w-full h-48 md:h-56 flex items-center justify-center p-4">
              <Image 
                src="/web dev services.png" 
                alt="Website Development" 
                width={200}
                height={200}
                className="object-contain max-h-full"
              />
            </div>
          </div>
          
          <p className="text-black mb-4 md:mb-6 text-xs md:text-sm">
            Shopify & WordPress development, custom thema's, platform migraties, integraties en app ontwikkeling voor uw online succes.
          </p>
          
          <Link 
            href="/services/web-development"
            className="inline-flex items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent hover:bg-black/10 transition-all duration-200 border-2 border-black"
          >
            Bekijk development services
          </Link>
        </div>

        {/* Column 2 - SEO Services */}
        <div className="bg-[#E8C88E] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-4 md:mb-6" style={{ fontSize: '24px' }}>
            SEO Services
          </h2>
          
          <div className="flex-grow flex items-center justify-center my-4 md:my-6">
            <div className="w-full h-48 md:h-56 flex items-center justify-center p-4">
              <Image 
                src="/SEO ICON.png" 
                alt="SEO Services" 
                width={200}
                height={200}
                className="object-contain max-h-full"
              />
            </div>
          </div>
          
          <p className="text-black mb-4 md:mb-6 text-xs md:text-sm">
            Technische SEO, linkbuilding, content optimalisatie, local SEO en complete SEO audits voor hogere rankings en meer traffic.
          </p>
          
          <Link 
            href="/services/seo"
            className="inline-flex items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent hover:bg-black/10 transition-all duration-200 border-2 border-black"
          >
            Bekijk SEO services
          </Link>
        </div>

        {/* Column 3 - Google Ads (SEA) */}
        <div className="bg-[#B8C5D6] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-4 md:mb-6" style={{ fontSize: '24px' }}>
            Google Ads (SEA)
          </h2>
          
          <div className="flex-grow flex items-center justify-center my-4 md:my-6">
            <div className="w-full h-48 md:h-56 flex items-center justify-center p-4">
              <Image 
                src="/SEA icon.png" 
                alt="Google Ads (SEA)" 
                width={200}
                height={200}
                className="object-contain max-h-full"
              />
            </div>
          </div>
          
          <p className="text-black mb-4 md:mb-6 text-xs md:text-sm">
            Search campagnes, Shopping Ads, Display advertising, remarketing en campagne optimalisatie voor maximale ROI en conversies.
          </p>
          
          <Link 
            href="/services/google-ads"
            className="inline-flex items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent hover:bg-black/10 transition-all duration-200 border-2 border-black"
          >
            Bekijk Google Ads services
          </Link>
        </div>

        {/* Column 4 - Marketing Automation */}
        <div className="bg-[#E5E5E5] p-6 md:p-8 lg:p-10 flex flex-col">
          <h2 className="font-bold text-black mb-4 md:mb-6" style={{ fontSize: '24px' }}>
            Marketing Automation
          </h2>
          
          <div className="flex-grow flex items-center justify-center my-4 md:my-6">
            <div className="w-full h-48 md:h-56 flex items-center justify-center p-4">
              <Image 
                src="/marketing automation.png" 
                alt="Marketing Automation" 
                width={200}
                height={200}
                className="object-contain max-h-full"
              />
            </div>
          </div>
          
          <p className="text-black mb-4 md:mb-6 text-xs md:text-sm">
            Email marketing met Klaviyo, marketing automations, CRM integraties, analytics en rapportage voor slimme klantcommunicatie.
          </p>
          
          <Link 
            href="/services/email-marketing"
            className="inline-flex items-center justify-center gap-2 font-semibold text-black text-[10px] md:text-xs px-3 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent hover:bg-black/10 transition-all duration-200 border-2 border-black"
          >
            Bekijk automation services
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
                Ontdek waarom we de beste keuze zijn
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Het marketing bureau dat meer traffic, hogere conversies en meetbare resultaten levert voor jouw online succes.
              </p>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Stat 1 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Tot 300% meer
                </h3>
                <p className="text-sm text-gray-400">
                  organisch verkeer bij onze klanten
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  30+ jaar ervaring
                </h3>
                <p className="text-sm text-gray-400">
                  gebundeld in een familie
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  100+ bedrijven
                </h3>
                <p className="text-sm text-gray-400">
                  geholpen met online groei
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Persoonlijke aanpak
                </h3>
                <p className="text-sm text-gray-400">
                  klein team, grote resultaten
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
            Onze marketing services voor jouw online succes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Development & Websites */}
            <div className="flex flex-col">
              <div className="bg-[#D4A574] rounded-2xl p-4 mb-4 h-32 flex items-center justify-center">
                <Image 
                  src="/web dev services.png" 
                  alt="Website Development" 
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Is jouw website klaar voor meer conversies?
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                Een moderne, snelle website is de basis van online succes. Wij bouwen Shopify en WordPress websites die converteren en schalen met jouw groei.
              </p>
              <Link 
                href="/services/web-development"
                className="inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>Bekijk development</span>
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
                  alt="SEO Services" 
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Wil je hoger ranken in Google?
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                Met onze SEO diensten bereik je hogere rankings, meer organisch verkeer en nieuwe klanten. Technische SEO, linkbuilding en content optimalisatie.
              </p>
              <Link 
                href="/services/seo"
                className="inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>Ontdek SEO services</span>
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
                  alt="Google Ads" 
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Directe resultaten met Google Ads
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                Bereik je doelgroep op het juiste moment. Wij optimaliseren campagnes voor maximale ROI en conversies met Search, Shopping en Display Ads.
              </p>
              <Link 
                href="/services/google-ads"
                className="inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>Start met Google Ads</span>
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
                  alt="Marketing Automation" 
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Automatiseer je marketing en groei
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                Verstuur gepersonaliseerde campagnes via email met Klaviyo. Verhoog je omzet en klantloyaliteit met slimme marketing automations.
              </p>
              <Link 
                href="/services/email-marketing"
                className="inline-flex items-center gap-2 text-gray-900 text-sm font-semibold group hover:underline"
              >
                <span>Bekijk automation</span>
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
                alt="Gratis SEO Consult"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content - Second on mobile, left on desktop */}
            <div className="order-last md:order-first">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Boek een gratis consult en bekijk wat wij voor jou kunnen betekenen
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Een van onze specialisten helpt je graag verder om jouw online doelen te bereiken. We nemen de tijd om jouw situatie te bespreken en concrete stappen te bepalen.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-gray-900 text-base font-semibold group hover:underline"
              >
                <span>Plan je gratis consult</span>
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
                  Probeer het gratis
                </button>
                <button className="px-3 md:px-6 py-1.5 md:py-2.5 bg-white text-gray-900 font-normal rounded-r-full border-2 border-[#241C15] border-l-0 text-xs md:text-base">
                  <span className="font-semibold">Bespaar 25%</span> <span className="hidden sm:inline">t.o.v. grote bureaus</span><span className="sm:hidden">vs bureaus</span>
                </button>
              </div>

              {/* Title */}
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Maak gratis kennis met onze <span className="relative inline-block">
                  marketingdiensten
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-[#FFD43B] -z-10"></span>
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-900 mb-8 leading-relaxed">
                Kom erachter waarom klanten massaal hun marketingbureaus ontslaan en kiezen voor een boutique bureau dat in staat is allround service te bieden met een direct contactpersoon. Weet met wie je te maken hebt.
              </p>
              
              {/* Features Grid - 2 columns */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Direct contact met je specialist</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">30+ jaar ervaring in één team</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Allround service onder één dak</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Geen lange wachttijden</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Transparante rapportages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#1795FF] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-900">Persoonlijke aanpak</span>
                  </div>
                </div>
              </div>

              {/* Ontdek onze diensten button */}
              <div className="flex items-center gap-3">
                <span className="text-lg font-normal text-gray-900">Ontdek onze diensten</span>
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
