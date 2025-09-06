import Head from 'next/head'
import HeroSection from '../../../components/HeroSection'
import FeatureSection from '../../../components/FeatureSection'
import ReviewSlider from '../../../components/ReviewSlider'

export default function SchiedamPage() {
  const dutchReviews = [
    {
      name: "Mark van der Haven",
      company: "Maritiem Service Schiedam",
      rating: 5,
      text: "Uitstekende SEO voor onze maritieme dienstverlening. We krijgen nu opdrachten van rederijen uit heel Rotterdam. Kennis van de haven industrie is top."
    },
    {
      name: "Linda Borst",
      company: "Tandartspraktijk Schiedam Centrum",
      rating: 5,
      text: "Geweldige lokale SEO resultaten. Nieuwe patiënten vinden ons nu makkelijk online, zelfs vanuit Vlaardingen en Maassluis."
    },
    {
      name: "Rob Ketting",
      company: "Installatiebedrijf Maasvlakte",
      rating: 5,
      text: "Professionele aanpak voor onze technische dienstverlening. Online zichtbaarheid enorm verbeterd in de hele havenregio."
    },
    {
      name: "Sandra Mulder",
      company: "Advocatenkantoor Schiedam",
      rating: 5,
      text: "Perfecte SEO strategie voor juridische diensten. We trekken nu gekwalificeerde cliënten aan uit Midden-Holland."
    },
    {
      name: "Michel Dekker",
      company: "Restaurant Haven Terras",
      rating: 5,
      text: "Lokale vindbaarheid fantastisch verbeterd. Zowel locals als toeristen vinden ons nu gemakkelijk. Reserveringen zijn gestegen."
    },
    {
      name: "Petra Visser",
      company: "Kapsalon Modern Style",
      rating: 5,
      text: "SEO expertise die werkt! Google rankings omhooggeschoten en veel meer online boekingen van klanten uit de regio."
    }
  ];

  const dutchMoreReviews = [
    {
      name: "Hans Baggerman",
      company: "Bouwbedrijf Schiedam",
      rating: 5,
      text: "Geweldige resultaten voor onze bouwprojecten. Website trekt klanten aan uit Rotterdam, Delft en omgeving."
    },
    {
      name: "Carla Schipper",
      company: "Boekhouder Maasvlakte",
      rating: 5,
      text: "Lokale expertise in de havenregio. Nieuwe zakelijke klanten uit de logistiek sector vinden ons nu via Google."
    },
    {
      name: "Peter van Wijk",
      company: "Garage Schiedam Service",
      rating: 5,
      text: "Website staat bovenaan voor autogarage Schiedam. Krijgen klanten uit hele Midden-Holland."
    },
    {
      name: "Nicole Groen",
      company: "Fysiotherapie Praktijk",
      rating: 5,
      text: "Uitstekende lokale SEO. Patiënten uit Schiedam, Vlaardingen en Maassluis vinden ons nu veel makkelijker."
    },
    {
      name: "Tom Scheepmaker",
      company: "IT Support Haven",
      rating: 5,
      text: "Perfect begrip van B2B in de havenregio. Onze IT diensten worden gevonden door logistieke bedrijven."
    },
    {
      name: "Anita Kade",
      company: "Webshop Maritime Products",
      rating: 5,
      text: "E-commerce SEO die resultaat levert! Online verkoop van scheepvaart producten groeit internationaal."
    }
  ];

  return (
    <>
      <Head>
        <title>SEO Specialist Schiedam | Online Marketing Bureau Schiedam</title>
        <meta name="description" content="SEO specialist in Schiedam voor hogere Google rankings. Lokale expertise in Midden-Holland. Meer klanten via professionele SEO strategieën." />
        <meta name="keywords" content="SEO specialist Schiedam, online marketing Schiedam, Google Ads Schiedam, website optimalisatie Maasvlakte, digital marketing Rotterdam" />
        <link rel="canonical" href="https://niblah.com/marketing/schiedam" />
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SEO Specialist Schiedam - Niblah",
          "description": "Professionele SEO diensten in Schiedam voor meer online zichtbaarheid",
          "url": "https://niblah.com/marketing/schiedam",
          "telephone": "+31-85-1234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Centrum",
            "addressLocality": "Schiedam",
            "addressRegion": "Zuid-Holland",
            "postalCode": "3111",
            "addressCountry": "NL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.9200,
            "longitude": 4.3997
          }
        })}
        </script>
      </Head>

      <HeroSection
        title="SEO Specialist Schiedam"
        subtitle="Digital Marketing Agency Schiedam"
        description="Schiedam, met 75.000 inwoners gelegen tussen Rotterdam en de Maasvlakte, is een bruisende havenstad met rijke maritieme traditie. Van het historische centrum met zijn iconische molens tot de moderne haven- en industriegebieden - deze strategische ligging biedt unieke kansen voor lokale ondernemers. Wij helpen bedrijven in Schiedam om online te groeien, van maritieme dienstverlening tot lokale retail en horeca."
        ctaText="Vraag SEO Advies Aan"
        ctaLink="/contact"
        imageSrc="/assets/hero-seo.jpg"
        imageAlt="SEO Specialist Schiedam - Online Marketing"
      />

      <FeatureSection
        title="Waarom Kiezen Voor SEO in Schiedam?"
        features={[
          {
            title: "Haven & Maritiem Expertise",
            description: "Gespecialiseerd in SEO voor maritieme bedrijven, logistiek en haven-gerelateerde dienstverlening. We begrijpen de dynamiek van de Rotterdamse havenregio.",
            icon: "⚓"
          },
          {
            title: "Strategische Ligging",
            description: "Schiedam's unieke positie tussen Rotterdam, Delft en de Maasvlakte biedt kansen om klanten uit de hele regio te bereiken. Wij weten hoe we deze geografische voordelen benutten.",
            icon: "🌍"
          },
          {
            title: "Lokale & Industriële Focus",
            description: "Ervaring met zowel lokale dienstverlening als industriële B2B marketing. Van familie bedrijven tot internationale logistieke spelers.",
            icon: "🏭"
          }
        ]}
      />

      <ReviewSlider reviews={[...dutchReviews, ...dutchMoreReviews]} />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Onze SEO Services in Schiedam</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Lokale SEO Schiedam</h3>
                <p className="text-gray-600 mb-4">
                  Optimaliseer uw vindbaarheid in Schiedam, Vlaardingen, Maassluis en de bredere Midden-Holland regio.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Google My Business optimalisatie</li>
                  <li>• Lokale keyword targeting</li>
                  <li>• Citations en online recensies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Maritieme & Logistiek SEO</h3>
                <p className="text-gray-600 mb-4">
                  Speciaal voor haven-gerelateerde bedrijven, scheepvaart en logistieke dienstverlening. Bereik nationale en internationale klanten.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Industriële keyword targeting</li>
                  <li>• B2B content marketing</li>
                  <li>• Internationale SEO strategieën</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">E-commerce SEO</h3>
                <p className="text-gray-600 mb-4">
                  Verhoog de online verkoop van uw webshop. Perfect voor bedrijven die profiteren van de centrale ligging.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Productpagina optimalisatie</li>
                  <li>• Technische SEO audit</li>
                  <li>• Conversie optimalisatie</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Professionele Diensten</h3>
                <p className="text-gray-600 mb-4">
                  Voor advocaten, tandartsen, consultants en andere professionals die cliënten zoeken in Midden-Holland.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Expertise content marketing</li>
                  <li>• Vertrouwen opbouwende SEO</li>
                  <li>• Lead generation focus</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Veelgestelde Vragen - SEO Schiedam</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Wat kosten SEO diensten in Schiedam?</h4>
                  <p className="text-gray-600">SEO prijzen variëren tussen €650-1800 per maand. Voor maritieme/logistieke bedrijven €1000-1600, lokale dienstverleners €650-1100, afhankelijk van concurrentie en doelstellingen.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe lang duurt het om resultaat te zien van SEO?</h4>
                  <p className="text-gray-600">Eerste verbeteringen zijn meestal zichtbaar binnen 2-3 maanden. Voor industriële B2B sectoren kan het 4-6 maanden duren voor significante resultaten in competitieve markten.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Welke bedrijven in Schiedam profiteren het meest van SEO?</h4>
                  <p className="text-gray-600">Maritieme dienstverleners, logistieke bedrijven, lokale professionals (tandartsen, advocaten), retailers, horeca en technische dienstverlening profiteren het meest van gerichte SEO.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Kan ik klanten uit Rotterdam en Delft aantrekken?</h4>
                  <p className="text-gray-600">Absoluut! Schiedam's centrale ligging maakt het ideaal om klanten uit de hele Midden-Holland regio te bereiken. We optimaliseren voor regionale zoekacties.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Werkt SEO voor maritieme en haven bedrijven?</h4>
                  <p className="text-gray-600">Ja, zeker! Maritieme SEO vereist specifieke kennis van de industrie, internationale targeting en B2B strategieën. We hebben ervaring met deze niche markt.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Hoe verbeter ik mijn lokale vindbaarheid in Schiedam?</h4>
                  <p className="text-gray-600">Focus op Google My Business, lokale content over Schiedamse activiteiten en historie, en bouw partnerships met lokale bedrijven. Klantrecensies zijn cruciaal.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Kan SEO helpen bij internationale klanten in de haven?</h4>
                  <p className="text-gray-600">Ja! Met internationale SEO strategieën, meertalige content en gerichte targeting bereiken we internationale rederijen en logistieke partners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar Om Te Groeien in Schiedam?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Profiteer van Schiedam's strategische ligging in de havenregio. 
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