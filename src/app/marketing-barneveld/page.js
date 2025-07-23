'use client'

import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../assets/graph.png'
import avatarImage from '../../assets/avatar.png'
import masterSeoImage from '../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../assets/Keyword_research.png'
import contentRanksImage from '../../assets/content that ranks.png'
import Button from '../../components/Button'
import ReviewSlider from '../../components/ReviewSlider'
import FeatureSection from '../../components/FeatureSection'
import CurriculumSection from '../../components/CurriculumSection'

export default function MarketingBarneveld() {
  // Nederlandse reviews voor lokale marketing services
  const dutchReviews = [
    {
      name: 'Bakkerij van der Berg',
      rating: 5,
      text: 'Dankzij Albin staan we nu #1 in Google voor "bakkerij Barneveld". Veel meer klanten sinds de lokale SEO optimalisatie!',
    },
    {
      name: 'Garage Hendriks',
      rating: 5,
      text: 'Onze Google Ads campagne draait perfect. We krijgen elke week nieuwe klanten uit Barneveld en omgeving. Top service!',
    },
    {
      name: 'Restaurant De Gouden Leeuw',
      rating: 5,
      text: 'Sinds we met Albin werken hebben we 3x zoveel reserveringen. Onze nieuwe website ziet er professioneel uit en converteert goed.',
    },
    {
      name: 'Kapsalon Mooi Haar',
      rating: 5,
      text: 'Lokale SEO heeft ons bedrijf getransformeerd. We staan nu bovenaan bij "kapper Barneveld" en hebben een volle agenda.',
    },
    {
      name: 'Installatiebedrijf Jansen',
      rating: 5,
      text: 'Google Ads campagne loopt fantastisch. We krijgen kwalitatieve leads uit heel de regio. Investering heeft zich al terugverdiend.',
    },
    {
      name: 'Tandartspraktijk Smile',
      rating: 4.5,
      text: 'Professionele aanpak en snelle resultaten. Onze online zichtbaarheid in Barneveld is enorm verbeterd.',
    },
  ];

  const dutchMoreReviews = [
    {
      name: 'Bouwbedrijf Sterk',
      rating: 5,
      text: 'Van pagina 3 naar positie #1 in 4 maanden tijd. De lokale SEO strategie werkt echt voor bouwbedrijven in Barneveld.',
    },
    {
      name: 'Schoonheidssalon Pure',
      rating: 5,
      text: 'Onze omzet is verdubbeld sinds de website optimalisatie. Veel meer boekingen via Google uit de hele regio.',
    },
    {
      name: 'Fietsenwinkel Snel',
      rating: 4.5,
      text: 'Dankzij de lokale marketing strategie hebben we veel meer klanten uit Ede, Amersfoort en omgeving.',
    },
    {
      name: 'Advocatenkantoor Recht',
      rating: 5,
      text: 'Excellente service en resultaten. We krijgen nu regelmatig nieuwe cliënten via onze verbeterde online aanwezigheid.',
    },
    {
      name: 'Tuincentrum Groen',
      rating: 5,
      text: 'Google Ads voor tuinartikelen loopt perfect. Vooral in het voorjaar veel extra klanten uit heel Barneveld.',
    },
    {
      name: 'Dierenarts Zorgzaam',
      rating: 4.5,
      text: 'Lokale SEO heeft ons geholpen om de #1 dierenarts van Barneveld te worden op Google. Zeer tevreden!',
    },
  ];
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-8 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Barneveld</span><br />
            Domineer lokale zoekresultaten
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Klaar om de Barnevelder markt te domineren?</strong><br />
            Ik help lokale bedrijven in Barneveld om online gevonden te worden en meer klanten aan te trekken met bewezen digitale marketingstrategieën.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO optimalisatie voor Barnevelder bedrijven</li>
            <li>✓ Google Ads campagnes gericht op Barnevelder klanten</li>
            <li>✓ Bewezen strategieën die werken voor lokale markten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Vandaag <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Meer Info
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in Barneveld en omgeving</p>
          <p className="mt-2 text-xs text-green-600">📞 Klaar om je bedrijf te laten groeien? Bel me direct: +31 6 48728828</p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={graphImage}
              alt="Marketing groei in Barneveld"
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src={avatarImage}
              alt="Albin - Marketing Expert Barneveld"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* WAT IK KAN DOEN VOOR JE BARNEVELDER BEDRIJF */}
      <FeatureSection 
        title="Hoe Ik Barnevelder Bedrijven Help"
        subtitle="Lokale Marketing Diensten"
        features={[
          {
            badge: "Lokale SEO",
            title: "Domineer Lokale Zoekresultaten",
            description: "Zorg dat je Barnevelder bedrijf gevonden wordt wanneer lokale klanten naar je diensten zoeken. Ik optimaliseer je Google Mijn Bedrijf en website om #1 te staan voor lokale zoekopdrachten.",
            visualTitle: "Lokale Rankings",
            visualSubtitle: "Gevonden door locals",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Target Barnevelder Klanten",
            description: "Bereik potentiële klanten in Barneveld en omgeving met gerichte Google Ads campagnes. Betaal alleen wanneer locals op je advertenties klikken.",
            visualTitle: "Lokale Ads",
            visualSubtitle: "Target je gebied",
            image: keywordResearchImage
          },
          {
            badge: "Groei",
            title: "Complete Digitale Aanwezigheid",
            description: "Bouw een sterke online aanwezigheid die Barnevelder klanten aantrekt. Van website optimalisatie tot social media, ik help je lokale bedrijf groeien.",
            visualTitle: "Lokale Groei",
            visualSubtitle: "Domineer je markt",
            image: contentRanksImage
          }
        ]}
      />

      {/* REVIEW SLIDER */}
      <ReviewSlider 
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="De <span class='bg-[#F7D8FA] px-2 rounded italic'>reviews</span> liegen niet"
      />

      {/* LOKALE DIENSTEN SECTIE */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Diensten in <span className="bg-[#F7D8FA] px-2 rounded italic">Barneveld</span>
            </h2>
            <p className="text-xl text-gray-600">Uitgebreide digitale marketing voor lokale bedrijven</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Lokale SEO */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale SEO Barneveld</h3>
              <p className="text-gray-600 mb-6">
                Wordt gevonden wanneer locals naar je diensten zoeken. Domineer Google Maps en lokale zoekresultaten.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Mijn Bedrijf optimalisatie</li>
                <li>✓ Lokale zoekwoord targeting</li>
                <li>✓ Lokale directory vermeldingen</li>
                <li>✓ Klantreview management</li>
              </ul>
            </div>

            {/* Google Ads */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Meest Populair
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Barneveld</h3>
              <p className="text-gray-600 mb-6">
                Target klanten in Barneveld en omgeving met winstgevende Google Ads campagnes.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale campagne setup</li>
                <li>✓ Geografische targeting</li>
                <li>✓ Conversie tracking</li>
                <li>✓ Performance optimalisatie</li>
              </ul>
            </div>

            {/* Website Ontwerp */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Ontwerp</h3>
              <p className="text-gray-600 mb-6">
                Professionele websites die Barnevelder bezoekers omzetten naar klanten.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Mobiel-responsive ontwerp</li>
                <li>✓ Snelle laadtijden</li>
                <li>✓ Lokale bedrijfsfocus</li>
                <li>✓ Conversie optimalisatie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTIE */}
      <section id="contact-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Klaar om Barneveld te <span className="bg-[#F7D8FA] px-2 rounded italic">domineren</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Laten we bespreken hoe ik je Barnevelder bedrijf kan helpen meer lokale klanten aan te trekken
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bel Me Direct</h3>
              <p className="text-gray-600 mb-4">Klaar om te beginnen? Bel me voor een gratis consultatie.</p>
              <a 
                href="tel:+31648728828" 
                className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📞 +31 6 48728828
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Me</h3>
              <p className="text-gray-600 mb-4">Liever WhatsApp? Stuur me een bericht en ik reageer snel.</p>
              <a 
                href="https://wa.me/31648728828" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Barneveld & Omgeving</h3>
            <p className="text-gray-600">
              Ede • Amersfoort • Leusden • Nijkerk • Bennekom • Lunteren • Voorthuizen • Kootwijkerbroek
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
