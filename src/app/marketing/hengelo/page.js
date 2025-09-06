import Head from 'next/head'
import HeroSection from '../../../components/HeroSection'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function HengeloPage() {
  const dutchReviews = [
    {
      name: "Jan Wielink",
      company: "Technisch Bureau Hengelo",
      rating: 5,
      text: "Uitstekende SEO resultaten voor ons technisch bureau. We krijgen nu kwalitatieve B2B leads van bedrijven in heel Twente. Kennis van de industriële markt is top."
    },
    {
      name: "Petra Oldenhuis",
      company: "Tandartspraktijk Centrum Hengelo",
      rating: 5,
      text: "Geweldige lokale SEO voor onze praktijk. Nieuwe patiënten vinden ons nu makkelijk online. Website staat bovenaan voor tandarts Hengelo."
    },
    {
      name: "Rob Terwisscha",
      company: "Installatiebedrijf Twente",
      rating: 5,
      text: "Professionele aanpak en meetbare resultaten. Online zichtbaarheid enorm verbeterd, klanten uit Enschede, Almelo en omgeving vinden ons nu."
    },
    {
      name: "Sandra Nijhuis",
      company: "Advocatenkantoor Hengelo",
      rating: 5,
      text: "Perfecte SEO strategie voor juridische dienstverlening. We trekken nu gekwalificeerde cliënten aan uit de hele regio Twente."
    },
    {
      name: "Michel Brinkhuis",
      company: "Restaurant De Twentse Tafel",
      rating: 5,
      text: "Lokale vindbaarheid fantastisch verbeterd. Zowel locals als bezoekers aan Hengelo vinden ons nu gemakkelijk. Reserveringen zijn gestegen."
    },
    {
      name: "Linda Scholten",
      company: "Kapsalon Modern Hair",
      rating: 5,
      text: "SEO expertise die echt werkt! Google rankings omhooggeschoten en veel meer online boekingen. Aanrader voor elke Hengelose ondernemer."
    }
  ];

  const dutchMoreReviews = [
    {
      name: "Hans Kamphuis",
      company: "Bouwbedrijf Twente",
      rating: 5,
      text: "Geweldige resultaten voor onze bouwprojecten. Website trekt nu klanten aan uit heel Overijssel. Professionele SEO aanpak."
    },
    {
      name: "Carla Drenthen",
      company: "Boekhouder Hengelo",
      rating: 5,
      text: "Lokale expertise die het verschil maakt. Nieuwe zakelijke klanten vinden ons nu via Google in plaats van alleen doorverwijzingen."
    },
    {
      name: "Peter van Laar",
      company: "Garage Twentse Service",
      rating: 5,
      text: "Website staat nu bovenaan voor autogarage Hengelo. Krijgen klanten uit de hele regio, van Enschede tot Almelo."
    },
    {
      name: "Nicole Wolbers",
      company: "Fysiotherapie Praktijk",
      rating: 5,
      text: "Uitstekende lokale SEO resultaten. Patiënten uit Hengelo en omliggende dorpen vinden ons nu veel makkelijker online."
    },
    {
      name: "Tom Rietman",
      company: "IT Support Twente",
      rating: 5,
      text: "Perfect begrip van B2B marketing in de techregio. Onze IT diensten worden nu gevonden door mkb-bedrijven in heel Twente."
    },
    {
      name: "Anita Kroeze",
      company: "Webshop Twentse Producten",
      rating: 5,
      text: "E-commerce SEO die resultaat levert! Online verkoop van streekproducten groeit maandelijks. Klanten uit heel Nederland bestellen nu."
    }
  ];

  return (
    <>
      <Head>
        <title>SEO Specialist Hengelo | Online Marketing Bureau Hengelo</title>
        <meta name="description" content="SEO specialist in Hengelo voor hogere Google rankings. Lokale expertise in Twente. Meer klanten via professionele SEO en online marketing." />
        <meta name="keywords" content="SEO specialist Hengelo, online marketing Hengelo, Google Ads Hengelo, website optimalisatie Twente, digital marketing Overijssel" />
        <link rel="canonical" href="https://niblah.com/marketing/hengelo" />
        <meta property="og:title" content="SEO Specialist Hengelo | Online Marketing Bureau" />
        <meta property="og:description" content="SEO specialist in Hengelo voor hogere Google rankings. Lokale expertise in Twente." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://niblah.com/marketing/hengelo" />
        <meta property="og:locale" content="nl_NL" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="SEO Specialist Hengelo | Online Marketing Bureau" />
        <meta name="twitter:description" content="SEO specialist in Hengelo voor hogere Google rankings. Lokale expertise in Twente." />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SEO Specialist Hengelo - Niblah",
          "description": "Professionele SEO diensten in Hengelo voor meer online zichtbaarheid",
          "url": "https://niblah.com/marketing/hengelo",
          "telephone": "+31-85-1234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Centrum",
            "addressLocality": "Hengelo",
            "addressRegion": "Overijssel",
            "postalCode": "7551",
            "addressCountry": "NL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.2667,
            "longitude": 6.7939
          },
          "openingHours": "Mo-Fr 09:00-17:00",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 52.2667,
              "longitude": 6.7939
            },
            "geoRadius": 25000
          }
        })}
        </script>
      </Head>

      <HeroSection
        title="SEO Specialist Hengelo"
        subtitle="Digital Marketing Agency Hengelo"
        description="Hengelo, met 81.000 inwoners het industriële hart van Twente, combineert technologische innovatie met ondernemingszin. Van het bruisende stadscentrum tot de moderne bedrijventerreinen rond de TU Twente - deze dynamische stad biedt uitstekende kansen voor lokale ondernemers. Wij helpen bedrijven in Hengelo om online te groeien, van traditionele industrie tot moderne dienstverlening en tech startups."
        ctaText="Vraag SEO Advies Aan"
        ctaLink="/contact"
        imageSrc="/assets/hero-seo.jpg"
        imageAlt="SEO Specialist Hengelo - Online Marketing"
      />

      <FeatureSection
        title="Waarom Kiezen Voor SEO in Hengelo?"
        features={[
          {
            title: "Tech & Industrie Expertise",
            description: "Gespecialiseerd in SEO voor technische bedrijven, industrie en innovatieve dienstverleners. We begrijpen de B2B dynamiek van Hengelose bedrijven en de connectie met de Universiteit Twente.",
            icon: "⚙️"
          },
          {
            title: "Twente Regio Kennis",
            description: "Diepgaande kennis van de Twentse markt en cultuur. Van Hengelo tot Enschede, Almelo en Oldenzaal - we weten hoe ondernemers in deze regio denken en zoeken.",
            icon: "🌍"
          },
          {
            title: "Innovatie & Traditie",
            description: "Expertise in zowel traditionele industriële bedrijven als innovatieve tech startups. Wij passen onze SEO strategie aan op uw specifieke sector en doelgroep.",
            icon: "🚀"
          }
        ]}
      />

      <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Onze SEO Services in Hengelo</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Lokale SEO Hengelo</h3>
                <p className="text-gray-600 mb-4">
                  Optimaliseer uw vindbaarheid in Hengelo, Enschede, Almelo en heel Twente. Perfect voor lokale dienstverleners en retail.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Google My Business optimalisatie</li>
                  <li>• Lokale keyword targeting</li>
                  <li>• Citations en online recensies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">B2B Technische SEO</h3>
                <p className="text-gray-600 mb-4">
                  Speciaal voor technische bedrijven, engineering bureaus en industriële dienstverlening. Bereik professionele inkopers en beslissers.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Technische content marketing</li>
                  <li>• Industriële keyword targeting</li>
                  <li>• B2B lead generation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">E-commerce SEO</h3>
                <p className="text-gray-600 mb-4">
                  Verhoog de online verkoop van uw webshop. Bereik klanten in Twente en daarbuiten met gerichte e-commerce optimalisatie.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Productpagina optimalisatie</li>
                  <li>• Technische SEO audit</li>
                  <li>• Conversie optimalisatie</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Startup & Innovatie SEO</h3>
                <p className="text-gray-600 mb-4">
                  Voor tech startups en innovatieve bedrijven die snel willen groeien. Bereik investeerders, partners en early adopters.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Growth hacking SEO</li>
                  <li>• Thought leadership content</li>
                  <li>• Investor & partner targeting</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Veelgestelde Vragen - SEO Hengelo</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Wat kosten SEO diensten in Hengelo?</h4>
                  <p className="text-gray-600">SEO prijzen in Hengelo variëren tussen €700-2200 per maand. Voor B2B technische bedrijven rekenen we €1000-1600, voor lokale dienstverleners €700-1200, afhankelijk van concurrentie en doelstellingen.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe lang duurt het om resultaten te zien van SEO?</h4>
                  <p className="text-gray-600">Eerste verbeteringen zijn meestal zichtbaar binnen 2-4 maanden. Voor technische B2B sectoren kan het 4-6 maanden duren voor significante resultaten. Lokale SEO toont vaak snellere resultaten.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Welke bedrijven in Hengelo hebben het meest baat bij SEO?</h4>
                  <p className="text-gray-600">Technische dienstverleners, engineering bureaus, industriële bedrijven, lokale mkb ondernemingen, gezondheidszorg professionals en innovative tech startups profiteren het meest van gerichte SEO.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe verhoog ik mijn lokale vindbaarheid in Twente?</h4>
                  <p className="text-gray-600">Focus op Google My Business optimalisatie, lokale content over Hengelose en Twentse onderwerpen, en bouw lokale partnerships. Zorg voor consistente bedrijfsgegevens online.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Werkt SEO ook voor technische B2B bedrijven?</h4>
                  <p className="text-gray-600">Ja, zeker! B2B SEO voor technische bedrijven vereist specifieke expertise in technische content, lange sales cycles en professionele beslissingsprocessen. We richten ons op gekwalificeerde leads.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Kan ik met SEO klanten uit heel Nederland bereiken?</h4>
                  <p className="text-gray-600">Absoluut. Met nationale SEO strategieën bereiken Hengelose bedrijven klanten in heel Nederland. Dit vereist andere keywords en content dan lokale SEO.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe meet ik ROI van SEO voor mijn technische bedrijf?</h4>
                  <p className="text-gray-600">Focus op gekwalificeerde leads, B2B inquiries, downloads van technische documenten, en uiteindelijk gesloten deals. We helpen bij het opzetten van correcte tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar Om Te Groeien in Hengelo?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Laat uw bedrijf opvallen in het dynamische Twente. 
            Onze lokale SEO expertise zorgt voor meer zichtbaarheid en gekwalificeerde leads.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Start Uw SEO Traject
          </a>
        </div>
      </section>
    </>
  )
}