'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '../../../components/Button'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

// Shopify specific reviews
const shopifyReviews = [
  {
    name: 'Mark van der Berg',
    company: 'CEO FashionHub',
    rating: 5,
    text: 'Niblah heeft onze oude WooCommerce shop getransformeerd naar Shopify Plus. De resultaten zijn fenomenaal - 185% meer omzet in het eerste jaar!'
  },
  {
    name: 'Sarah Jansen',
    company: 'Founder BioBoutique',
    rating: 5,
    text: 'De expertise van Niblah in Shopify development is ongeëvenaard. Ze denken mee, komen met creatieve oplossingen en leveren altijd op tijd.'
  },
  {
    name: 'Lisa Bakker',
    company: 'E-commerce Manager',
    rating: 5,
    text: 'Van concept tot lancering in 6 weken. Niblah heeft onze visie perfect vertaald naar een converterende Shopify webshop. Absolute aanrader!'
  },
  {
    name: 'Thomas de Vries',
    company: 'Tech Startup',
    rating: 5,
    text: 'Niblah\'s custom app development heeft onze workflow volledig getransformeerd. De integraties werken perfect en onze efficiency is verdubbeld.'
  },
  {
    name: 'Emma Verhoeven',
    company: 'Fashion Retailer',
    rating: 5,
    text: 'Conversieratio van 1.8% naar 5.2% na de Shopify optimalisatie door Niblah. Hun focus op gebruikerservaring maakt echt het verschil.'
  },
  {
    name: 'Jan Willem Peters',
    company: 'B2B Wholesale',
    rating: 5,
    text: 'De Shopify Plus B2B functionaliteiten die Niblah heeft geïmplementeerd hebben onze wholesale operatie gestroomlijnd. Topservice!'
  }
];

const moreShopifyReviews = [
  {
    name: 'Rachel de Groot',
    company: 'Beauty Brand',
    rating: 5,
    text: 'Onze nieuwe Shopify store draait als een zonnetje. Niblah heeft alles perfect geoptimaliseerd voor snelheid en conversie. 4x snellere laadtijd!'
  },
  {
    name: 'Tom Hendricks',
    company: 'Sports Equipment',
    rating: 5,
    text: 'De migratie van Magento naar Shopify was naadloos. Niblah heeft alle data perfect overgezet en de nieuwe shop presteert veel beter.'
  },
  {
    name: 'Sophie van Dam',
    company: 'Home Decor Shop',
    rating: 5,
    text: 'Custom Shopify theme die perfect aansluit bij ons merk. De checkout flow is zo geoptimaliseerd dat cart abandonment met 40% is gedaald.'
  },
  {
    name: 'Alex Koning',
    company: 'Electronics Store',
    rating: 5,
    text: 'Van 10K naar 150K maandomzet in 8 maanden. Niblah\'s Shopify expertise en groeistrategie hebben onze business getransformeerd.'
  },
  {
    name: 'Maria van Leeuwen',
    company: 'Jewelry Business',
    rating: 5,
    text: 'De custom Shopify apps die Niblah heeft gebouwd voor onze personalisatie opties zijn geweldig. Klanten zijn enthousiast!'
  },
  {
    name: 'Chris Mulder',
    company: 'Food & Beverage',
    rating: 5,
    text: 'Shopify POS integratie met onze fysieke winkel werkt perfect. Niblah heeft alles naadloos gekoppeld. Inventory management is nu een makkie.'
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
  <div className="bg-white rounded-lg border border-gray-200 p-5 sm:p-6 flex-shrink-0 w-[85vw] max-w-[340px] sm:max-w-none sm:w-96 mx-3">
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

const ShopifyReviewSlider = ({ className = 'bg-white' }) => {
  const duplicatedReviews = [...shopifyReviews, ...shopifyReviews];
  const duplicatedMoreReviews = [...moreShopifyReviews, ...moreShopifyReviews];

  return (
    <section className={`${className} py-16`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Shopify <span className="bg-[#F7D8FA] px-2 rounded italic">Success</span> Stories</h2>
        
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

export default function ShopifyDeveloperBarneveld() {
  const [activeTab, setActiveTab] = useState('npm');
  const [openFaq, setOpenFaq] = useState(null);

  const reviews = {
    npm: {
      command: '$ npm install @shopify/success',
      review: {
        stars: '★★★★★ 5/5',
        name: 'Mark van der Berg',
        company: 'CEO FashionHub',
        text: '"Niblah heeft onze webshop getransformeerd. 185% meer omzet in het eerste jaar!"'
      }
    },
    yarn: {
      command: '$ yarn add @shopify/growth',
      review: {
        stars: '★★★★★ 5/5',
        name: 'Sarah Jansen',
        company: 'Founder BioBoutique',
        text: '"De expertise van Niblah is ongeëvenaard. Ze denken mee en leveren altijd op tijd."'
      }
    },
    pnpm: {
      command: '$ pnpm add @shopify/excellence',
      review: {
        stars: '★★★★★ 5/5',
        name: 'Lisa Bakker',
        company: 'E-commerce Manager',
        text: '"Van concept tot lancering in 6 weken. Perfect vertaald naar een converterende webshop!"'
      }
    }
  };

  return (
    <main className="min-h-screen">
      {/* SVG Icons */}
      <svg style={{ display: 'none' }}>
        <symbol id="ArrowRightMedium" viewBox="0 0 20 20">
          <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"/>
        </symbol>
      </svg>
      {/* Hero Section */}
      <section className="py-4 md:py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-10 md:gap-12 items-center">
          
          {/* TEXT SECTION */}
          <div>
            <h1 className="text-4xl md:text-4xl font-bold leading-tight text-gray-900">
              Opzoek naar een <br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Shopify Ontwikkelaar</span> <br />
              in Barneveld?
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Dan bent u hier aan het juiste adres!</strong><br />
              Met meer dan 5+ jaar full-time ervaring in programmeren in Shopify, meerdere apps en vele tevreden klanten helpen we u graag op weg met het realiseren van uw opdrachten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ 200+ succesvolle Shopify projecten opgeleverd</li>
              <li>✓ Shopify app ontwikkeling & integraties</li>
              <li>✓ Geen vaste contracten - maandelijks opzegbaar</li>
              <li>✓ Transparante werkwijze met meetbare resultaten</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button 
                as="a" 
                href="#contact-form" 
                variant="cta"
                className="!text-base !px-5 md:!px-6 !py-2.5 md:!py-3"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Gratis kennis maken
              </Button>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0D94D1] bg-white/80 px-3 py-1 shadow-sm text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 142.8"
                  className="h-6 w-auto"
                  aria-hidden="true"
                >
                  <path
                    d="M107.4 27.1c-.1-.7-.7-1.1-1.2-1.1s-10.4-.2-10.4-.2-8.3-8-9.1-8.9c-.8-.8-2.4-.6-3-.4 0 0-1.6.5-4.2 1.3-.4-1.4-1.1-3.1-2-4.9-2.9-5.6-7.3-8.6-12.5-8.6-.4 0-.7 0-1.1.1-.2-.2-.3-.4-.5-.5C61.1 1.5 58.2.3 54.7.4 48 .6 41.3 5.5 35.8 14.1c-3.8 6.1-6.7 13.7-7.6 19.6-7.7 2.4-13.1 4.1-13.3 4.1-3.9 1.2-4 1.3-4.5 5C10.2 45.6 0 124.5 0 124.5l85.6 14.8 37.1-9.2c-.1 0-15.2-102.3-15.3-103zm-32.2-7.9c-2 .6-4.2 1.3-6.6 2.1 0-3.4-.5-8.2-2-12.2 5.1.8 7.6 6.6 8.6 10.1zm-11.1 3.4c-4.5 1.4-9.4 2.9-14.3 4.4 1.4-5.3 4-10.5 7.2-14 1.2-1.3 2.9-2.7 4.8-3.5 2 3.9 2.4 9.4 2.3 13.1zM54.9 4.9c1.6 0 2.9.3 4 1.1-1.8.9-3.6 2.3-5.2 4.1-4.3 4.6-7.6 11.7-8.9 18.6-4.1 1.3-8.1 2.5-11.7 3.6C35.5 21.4 44.6 5.2 54.9 4.9z"
                    fill="#95bf47"
                  />
                  <path
                    d="M106.2 26c-.5 0-10.4-.2-10.4-.2s-8.3-8-9.1-8.9c-.3-.3-.7-.5-1.1-.5v122.9l37.1-9.2s-15.1-102.3-15.2-103c-.2-.7-.8-1.1-1.3-1.1z"
                    fill="#5e8e3e"
                  />
                  <path
                    d="m65 45.1-4.3 16.1s-4.8-2.2-10.5-1.8c-8.4.5-8.4 5.8-8.4 7.1.5 7.2 19.4 8.8 20.5 25.7.8 13.3-7 22.4-18.4 23.1-13.6.7-21.1-7.3-21.1-7.3l2.9-12.3s7.6 5.7 13.6 5.3c3.9-.2 5.4-3.5 5.2-5.7-.6-9.4-16-8.8-17-24.3-.8-13 7.7-26.1 26.5-27.3 7.3-.5 11 1.4 11 1.4z"
                    fill="#fff"
                  />
                  <path
                    d="M172.9 79.4c-4.3-2.3-6.5-4.3-6.5-7 0-3.4 3.1-5.6 7.9-5.6 5.6 0 10.6 2.3 10.6 2.3l3.9-12s-3.6-2.8-14.2-2.8c-14.8 0-25.1 8.5-25.1 20.4 0 6.8 4.8 11.9 11.2 15.6 5.2 2.9 7 5 7 8.1 0 3.2-2.6 5.8-7.4 5.8-7.1 0-13.9-3.7-13.9-3.7l-4.2 12s6.2 4.2 16.7 4.2c15.2 0 26.2-7.5 26.2-21-.1-7.3-5.6-12.5-12.2-16.3zm60.6-25.3c-7.5 0-13.4 3.6-17.9 9l-.2-.1 6.5-34H205l-16.5 86.6h16.9L211 86c2.2-11.2 8-18.1 13.4-18.1 3.8 0 5.3 2.6 5.3 6.3 0 2.3-.2 5.2-.7 7.5l-6.4 33.9h16.9l6.6-35c.7-3.7 1.2-8.1 1.2-11.1.1-9.6-4.9-15.4-13.8-15.4zm52.2 0c-20.4 0-33.9 18.4-33.9 38.9 0 13.1 8.1 23.7 23.3 23.7 20 0 33.5-17.9 33.5-38.9.1-12.1-7-23.7-22.9-23.7zm-8.3 49.7c-5.8 0-8.2-4.9-8.2-11.1 0-9.7 5-25.5 14.2-25.5 6 0 8 5.2 8 10.2 0 10.4-5.1 26.4-14 26.4zm74.6-49.7c-11.4 0-17.9 10.1-17.9 10.1h-.2l1-9.1h-15c-.7 6.1-2.1 15.5-3.4 22.5l-11.8 62h16.9l4.7-25.1h.4s3.5 2.2 9.9 2.2c19.9 0 32.9-20.4 32.9-41 0-11.4-5.1-21.6-17.5-21.6zM335.8 104c-4.4 0-7-2.5-7-2.5l2.8-15.8c2-10.6 7.5-17.6 13.4-17.6 5.2 0 6.8 4.8 6.8 9.3 0 11-6.5 26.6-16 26.6zm57.9-74.2c-5.4 0-9.7 4.3-9.7 9.8 0 5 3.2 8.5 8 8.5h.2c5.3 0 9.8-3.6 9.9-9.8 0-4.9-3.3-8.5-8.4-8.5zM370 115.5h16.9l11.5-60h-17zM441.5 55.4h-11.8l.6-2.8c1-5.8 4.4-10.9 10.1-10.9 3 0 5.4.9 5.4.9l3.3-13.3s-2.9-1.5-9.2-1.5c-6 0-12 1.7-16.6 5.6-5.8 4.9-8.5 12-9.8 19.2l-.5 2.8h-7.9l-2.5 12.8h7.9l-9 47.4h16.9l9-47.4h11.7l2.4-12.8zM482.3 55.5S471.7 82.2 467 96.8h-.2c-.3-4.7-4.2-41.3-4.2-41.3h-17.8l10.2 55.1c.2 1.2.1 2-.4 2.8-2 3.8-5.3 7.5-9.2 10.2-3.2 2.3-6.8 3.8-9.6 4.8l4.7 14.4c3.4-.7 10.6-3.6 16.6-9.2 7.7-7.2 14.9-18.4 22.2-33.6L500 55.5h-17.7z"
                    fill="#000"
                  />
                </svg>
                <span className="font-semibold text-gray-900"> partner</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-red-600"> 🚨 Spoedeisend? Neem contact op en we gaan vandaag al van start!</p>
          </div>

          {/* IMAGE SECTION */}
          <div>
            <div className="relative">
              <div
                className="absolute top-0 bottom-0 left-1/2 w-screen h-full -translate-x-1/2 rounded-none md:top-[-1.5rem] md:bottom-6 md:left-[-1.5rem] md:right-6 md:w-auto md:h-auto md:translate-x-0 md:rounded-[15px] animated-gradient z-0"
                aria-hidden="true"
              ></div>
              <div className="relative z-10 flex justify-center md:justify-end items-end p-4 md:p-6 rounded-[5px]">
                <div className="rounded-tl-[15px] rounded-tr-[15px] md:rounded-tr-[0px] md:rounded-tl-[15px] rounded-br-[0px] rounded-bl-[0px] overflow-hidden shadow-lg bg-transparent w-full max-w-xs sm:max-w-sm md:max-w-full translate-y-4 md:translate-y-0">
                  <Image
                    src="/downloads/shopify-developer.png"
                    alt="Shopify developer portret"
                    className="w-full h-auto"
                    width={800}
                    height={600}
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHAT I CAN DEVELOP FOR YOU SECTION */}
      <FeatureSection 
        title="Shopify developers in Barneveld"
        subtitle="Wat wij voor jou kunnen betekenen als ontwikkelaars in Barneveld"
        features={[
          {
            badge: "Website ontwikkelen",
            title: "Shopify Website laten maken in Barneveld?",
            description: "Van concept tot lancering - complete Shopify webshop ontwikkeling. Custom themes, unieke functionaliteiten en optimale performance. Shopify website laten bouwen in Barneveld door experts.",
            visualTitle: "Webshop Development",
            visualSubtitle: "Volledig op maat",
            image: "/shopify-website-laten-maken.webp"
          },
          {
            badge: "API Integraties",
            title: "Applicaties integreren met jouw Shopify website?",
            description: "Maak je processen automatisch met koppelingen met uw webshop, hierdoor bespaart u tijd en moeite!",
            visualTitle: "App Development",
            visualSubtitle: "Custom solutions",
            image: "/shopify-api-integraties.jpeg"
          },
          {
            badge: "Migratie",
            title: "Overstappen naar Shopify?",
            description: "Bekend om de gebruiksvriendelijke interface, snelle laadtijden en e-commerce applicaties, is Shopify het platform als u uw e-commerce project duurzaam en winstgevend wilt opschalen. Nog niet op Shopify? Laat uw Shopify migratie in Barneveld verzorgen door Niblah.",
            visualTitle: "System Integraties",
            visualSubtitle: "Alles connected",
            image: "/shopify-migratie.webp"
          }
        ]}
        backgroundClass="bg-transparent"
        sectionClassName="rounded-[5px]"
      />

      {/* FAQ & Reviews Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: FAQ */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Veelgestelde vragen
              </h2>
              <p className="text-gray-600 mb-8">
                Hier vind je antwoorden op de meest gestelde vragen over Shopify development in Barneveld.
              </p>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Waarom werk ik graag als Shopify developer voor bedrijven in Barneveld?
                    </h3>
                    <span className="text-2xl text-gray-400">{openFaq === 1 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 1 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Ik werk graag als Shopify developer voor bedrijven in Barneveld, omdat de gemeente een bloeiende bedrijvigheid heeft met veel groeikansen. Barneveld ligt centraal in de Gelderse Vallei en kenmerkt zich door innovatieve ondernemers. De gemeente groeit enorm en ontwikkelt voortdurend nieuwe bedrijventerreinen met oog voor duurzaamheid. De grootste groei vindt plaats in Zakelijke Dienstverlening, Bouwnijverheid en Detailhandel - sectoren waar e-commerce essentieel is.
                    </p>
                  )}
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Hoe begint een Shopify developer in Barneveld een project?
                    </h3>
                    <span className="text-2xl text-gray-400">{openFaq === 2 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 2 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Een goed Shopify project begint met jou en je onderneming leren kennen. Wat zijn jouw doelstellingen en kansen? Wat is je doelgroep? De klant begrijpen is fundamenteel voor succes. Op basis van deze bevindingen ontwikkel ik een strategie en creëer ik een webshop die aansluit bij je bedrijf. Bij het bouwen houd ik rekening met conversie-optimalisatie, gebruiksvriendelijkheid en schaalbaarheid voor toekomstige groei.
                    </p>
                  )}
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Wat zijn de voordelen van Shopify development uitbesteden?
                    </h3>
                    <span className="text-2xl text-gray-400">{openFaq === 3 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 3 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Shopify development uitbesteden betekent werken met een expert die beschikt over de juiste kennis, ervaring en professionele tools. Als Shopify partner ben ik op de hoogte van alle ontwikkelingen en best practices. Je digitale webshop is essentieel voor je omzet - alleen met de juiste expertise behaal je optimale resultaten. Van design tot koppelingen, technische optimalisatie en conversie: alles wordt professioneel aangepakt binnen de richtlijnen van Shopify.
                    </p>
                  )}
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Kun je als bedrijf uit Barneveld concurreren met grotere bedrijven?
                    </h3>
                    <span className="text-2xl text-gray-400">{openFaq === 4 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 4 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Absoluut! Met een professionele Shopify webshop kun je als bedrijf uit Barneveld zeker concurreren met grotere bedrijven. Shopify biedt dezelfde mogelijkheden aan kleine als grote ondernemingen. Door slimme strategie, goede UX/UI, conversie-optimalisatie en de juiste marketing tools trek je kwalitatieve bezoekers die op zoek zijn naar jouw producten. Door op het juiste moment aanwezig te zijn met het juiste aanbod, kun je succesvol concurreren ongeacht je bedrijfsgrootte.
                    </p>
                  )}
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Hoelang duurt het voordat ik resultaat zie?
                    </h3>
                    <span className="text-2xl text-gray-400">{openFaq === 5 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 5 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      De tijd tot je resultaat ziet varieert per project en is afhankelijk van: de complexiteit van je webshop, gewenste functionaliteiten, aantal integraties, beschikbaarheid van content en beeldmateriaal, en je eigen input tijdens het proces. Een basis webshop is binnen 4-6 weken live en direct operationeel. Voor conversie-optimalisatie en groei adviseer ik enkele weken na lancering te evalueren en verder te optimaliseren op basis van data.
                    </p>
                  )}
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Hoe weet je of een Shopify developer in Barneveld goed werk levert?
                    </h3>
                    <span className="text-2xl text-gray-400">{openFaq === 6 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 6 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Check het portfolio en ervaringen van eerdere klanten. Maak een kennismakingsgesprek en stel kritische vragen over specialismen, werkwijze en de USP's. Een goede developer heeft ervaring binnen jouw niche, werkt volgens best practices en kan voorbeelden tonen van eerder werk. Let ook op communicatie en transparantie - dit zijn belangrijke factoren voor een succesvol project.
                    </p>
                  )}
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Wat houdt Shopify development uitbesteden in Barneveld in?
                    </h3>
                    <span className="text-2xl text-gray-400">{openFaq === 7 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 7 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Shopify development uitbesteden betekent werken met een expert die beschikt over professionele tools, ervaring en up-to-date kennis. Er wordt eerst tijd genomen voor een passende strategie - dit is altijd maatwerk. We analyseren jouw doelgroep, doelstellingen, sterke en zwakke punten van je huidige situatie en bekijken concurrenten. Pas daarna wordt een strategie uitgestippeld en geïmplementeerd.
                    </p>
                  )}
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 8 ? null : 8)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Hoe onderscheid je jezelf van de lokale concurrent in Barneveld?
                    </h3>
                    <span className="text-2xl text-gray-400">{openFaq === 8 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 8 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Door waardevolle content te creëren die aansluit bij je doelgroep, een gebruiksvriendelijke website met snelle laadtijden, lokale SEO optimalisatie, en unieke branding. Daarnaast help ik met conversie-optimalisatie, slimme marketingtools en integraties die jouw bedrijf onderscheiden. Door op het juiste moment aanwezig te zijn met het juiste aanbod en een superieure gebruikerservaring kun je lokaal uitblinken.
                    </p>
                  )}
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === 9 ? null : 9)}
                    className="w-full text-left flex items-center justify-between group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Werk je voor concurrerende bedrijven uit Barneveld?
                    </h3>
                    <span className="text-2xl text-gray-400">{openFaq === 9 ? '−' : '+'}</span>
                  </button>
                  {openFaq === 9 && (
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      Nee, ik voer geen werkzaamheden uit voor concurrerende bedrijven uit Barneveld wanneer je klant bent bij mij. Dit voorkomt belangenconflicten en zorgt ervoor dat ik volledig gefocust kan zijn op jouw succes. Ethisch en eerlijk werken staat voorop bij mijn aanpak.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Review Terminal */}
            <div>
              <div className="rounded-lg overflow-hidden" style={{ backgroundColor: '#2d3748' }}>
                <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#1a202c' }}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-4">Reviews van klanten</span>
                </div>
                
                <div className="px-4 py-3 border-b border-gray-700">
                  <div className="flex gap-4 text-sm">
                    <button 
                      onClick={() => setActiveTab('npm')}
                      className={`px-3 py-1 rounded transition-colors ${activeTab === 'npm' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      npm
                    </button>
                    <button 
                      onClick={() => setActiveTab('yarn')}
                      className={`px-3 py-1 rounded transition-colors ${activeTab === 'yarn' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      yarn
                    </button>
                    <button 
                      onClick={() => setActiveTab('pnpm')}
                      className={`px-3 py-1 rounded transition-colors ${activeTab === 'pnpm' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      pnpm
                    </button>
                  </div>
                </div>
                
                <div className="p-6 text-sm font-mono">
                  <div className="text-green-400 mb-4">{reviews[activeTab].command}</div>
                  <div className="text-gray-300 space-y-4">
                    <div>
                      <div className="text-yellow-400 mb-2">{reviews[activeTab].review.stars}</div>
                      <div className="text-white font-bold mb-1">{reviews[activeTab].review.name}</div>
                      <div className="text-gray-400 mb-2">{reviews[activeTab].review.company}</div>
                      <div className="text-gray-300">
                        {reviews[activeTab].review.text}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Samenwerken met een <span className="bg-[#D9EDFF] px-2 rounded italic">Shopify Developer</span> in Barneveld
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Door samen te werken met een Shopify developer in Barneveld heeft uw bedrijf het voordeel dat uw webshop niet alleen gebruiksvriendelijker wordt, maar ook optimaal presteert en groeit.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Webshop Development */}
            <div className="rounded-[5px] px-10 py-8 flex flex-col" style={{ backgroundColor: '#ECEEF7' }}>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#0060B8' }}>Shopify website laten maken</h3>
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                Als officiële Shopify-partner bouw ik snelle, gebruiksvriendelijke webshops die volledig geoptimaliseerd zijn voor conversie en groei. Van ontwerp tot koppelingen met betaalproviders en marketingtools - alles onder één dak. Jouw digitale salesmachine die naadloos meegroeit met je bedrijf.
              </p>
              <a 
                href="#contact-form"
                className="inline-flex items-center gap-2 px-4 mb-6 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all"
                style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8', paddingTop: '6px', paddingBottom: '10px' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Bestel uw webshop
                <svg width="20" height="20" role="img"><use href="#ArrowRightMedium"></use></svg>
              </a>
              <div className="w-full h-40 rounded-[5px] flex items-center justify-center">
                <Image
                  src="/website-laten-maken.png"
                  alt="Webshop Development"
                  width={400}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Growth & Marketing */}
            <div className="rounded-[5px] px-10 py-8 flex flex-col" style={{ backgroundColor: '#F6F1F9' }}>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#AB3AD0' }}>Migratie naar Shopify</h3>
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                Overstappen naar Shopify geeft jouw webshop een enorme boost in gebruiksvriendelijkheid en snelheid. Wij zorgen voor een soepele migratie: veilig overzetten van producten en klantgegevens, behoud van SEO-waarde en minimale downtime. Jij focust op je business, wij regelen de overstap.
              </p>
              <a 
                href="#contact-form"
                className="inline-flex items-center gap-2 px-4 mb-6 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all"
                style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8', paddingTop: '6px', paddingBottom: '10px' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Start uw migratie
                <svg width="20" height="20" role="img"><use href="#ArrowRightMedium"></use></svg>
              </a>
              <div className="w-full h-40 rounded-[5px] flex items-center justify-center">
                <Image
                  src="/migratie.png"
                  alt="Growth & Marketing"
                  width={400}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Migratie & Integraties */}
            <div className="rounded-[5px] px-10 py-8 flex flex-col" style={{ backgroundColor: '#ECECF7' }}>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#6055FF' }}>Shopify Koppelingen</h3>
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                Automatiseer jouw processen met slimme Shopify koppelingen: leveranciers, boekhoudsystemen, marketingtools en logistieke partners volledig geïntegreerd. Minimaliseer fouten door automatische synchronisatie en laat je webshop efficiënt meegroeien. Wij installeren de juiste koppelingen voor je.
              </p>
              <a 
                href="#contact-form"
                className="inline-flex items-center gap-2 px-4 mb-6 bg-white border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all"
                style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8', paddingTop: '6px', paddingBottom: '10px' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Koppel uw systemen
                <svg width="20" height="20" role="img"><use href="#ArrowRightMedium"></use></svg>
              </a>
              <div className="w-full h-40 rounded-[5px] flex items-center justify-center">
                <Image
                  src="/koppeling.png"
                  alt="Migratie & Integraties"
                  width={400}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 max-w-3xl mx-auto">
            Als Shopify developer in Barneveld werk ik niet alleen voor bedrijven in Barneveld, maar ook in nabijgelegen steden als Amersfoort, Ede, Veenendaal, Wageningen en Nijkerk. Daarnaast verzorg ik regelmatig Shopify projecten in steden als Amsterdam, Rotterdam, Utrecht en Den Haag.
          </p>
        </div>
      </section>

      {/* Community Resources Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sluit je aan bij de tevreden klanten */}
            <div className="bg-[#EEF0F8] rounded-lg p-6 flex flex-col">
              <div className="mb-4">
                <Image
                  src="/samen-sta-je-sterker.png"
                  alt="Sluit je aan bij de tevreden klanten"
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900">
                Sluit je aan bij de tevreden klanten
              </h3>
            </div>

            {/* Chat met Niblah */}
            <a
              href="https://wa.link/zhg1bl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-gray-400 hover:bg-gray-50 transition-all flex flex-col"
              style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8' }}
            >
              <div className="mb-4">
                <Image
                  src="/chat-met-niblah.png"
                  alt="Chat met Niblah"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Chat met Niblah →
              </h3>
              <p className="text-sm text-gray-600">
                Start een WhatsApp gesprek voor directe hulp
              </p>
            </a>

            {/* Volg mij op Twitter */}
            <a
              href="https://x.com/niblahistaken"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-gray-400 hover:bg-gray-50 transition-all flex flex-col"
              style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8' }}
            >
              <div className="mb-4">
                <Image
                  src="/volg-op-twitta.png"
                  alt="Volg op Twitter"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Volg mij op Twitter →
              </h3>
              <p className="text-sm text-gray-600">
                Blijf op de hoogte van onze laatste projecten
              </p>
            </a>

            {/* Andere diensten */}
            <a
              href="https://www.niblah.com/marketing/barneveld"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-gray-400 hover:bg-gray-50 transition-all flex flex-col"
              style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8' }}
            >
              <div className="mb-4">
                <Image
                  src="/andere-diensten.png"
                  alt="Andere diensten"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Andere diensten die ik aanbied →
              </h3>
              <p className="text-sm text-gray-600">
                Bekijk alle services van website tot marketing
              </p>
            </a>

            {/* YouTube kanaal */}
            <a
              href="/youtube"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-gray-400 hover:bg-gray-50 transition-all flex flex-col"
              style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8' }}
            >
              <div className="mb-4">
                <Image
                  src="/youtube-kanaal.png"
                  alt="YouTube kanaal"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Bekijk het YouTube kanaal voor gratis tips →
              </h3>
              <p className="text-sm text-gray-600">
                Video tutorials over development en automation
              </p>
            </a>

            {/* Boek een gratis consult */}
            <a
              href="#contact-form"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-gray-400 hover:bg-gray-50 transition-all flex flex-col"
              style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8' }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              <div className="mb-4">
                <Image
                  src="/gratis-consult.png"
                  alt="Gratis consult"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Boek een gratis consult gesprek →
              </h3>
              <p className="text-sm text-gray-600">
                Plan een vrijblijvend kennismakingsgesprek
              </p>
            </a>

            {/* Blog */}
            <a
              href="/youtube"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-gray-400 hover:bg-gray-50 transition-all flex flex-col"
              style={{ boxShadow: 'inset 0 -3px 0 0 #C7C8C8' }}
            >
              <div className="mb-4">
                <Image
                  src="/blog.png"
                  alt="Blog"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                Bekijk onze blog voor gratis tips →
              </h3>
              <p className="text-sm text-gray-600">
                Marketing blueprints en expert guides
              </p>
            </a>
          </div>
        </div>
      </section>


      <style jsx>{`
        .animated-gradient {
          background: linear-gradient(135deg, #8C2891, #5E60CE, #4ECDC4, #8C2891);
          background-size: 300% 300%;
          animation: gradientShift 4s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          33% {
            background-position: 50% 0%;
          }
          66% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  )
}
