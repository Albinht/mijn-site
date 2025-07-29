'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingVoorthuizen() {
  // Lokale Voorthuizen reviews
  const dutchReviews = [
    { name: 'Bakkerij de Korenschoof', rating: 5, text: 'Dankzij Albin staan we nu #1 in Google voor "bakkerij Voorthuizen". Veel meer klanten sinds de lokale SEO optimalisatie!' },
    { name: 'Garage van der Meer', rating: 5, text: 'Onze Google Ads campagne draait perfect. We krijgen elke week nieuwe klanten uit Voorthuizen en omgeving. Top service!' },
    { name: 'Restaurant Het Boshuis', rating: 5, text: 'Sinds we met Albin werken hebben we 3x zoveel reserveringen. Onze nieuwe website ziet er professioneel uit en converteert goed.' },
    { name: 'Kapsalon Stijlvol', rating: 5, text: 'Lokale SEO heeft ons bedrijf getransformeerd. We staan nu bovenaan bij "kapper Voorthuizen" en hebben een volle agenda.' },
    { name: 'Installatiebedrijf Techniek', rating: 5, text: 'Google Ads campagne loopt fantastisch. We krijgen kwalitatieve leads uit heel de regio. Investering heeft zich al terugverdiend.' },
    { name: 'Tandartspraktijk Gezond', rating: 4.5, text: 'Professionele aanpak en snelle resultaten. Onze online zichtbaarheid in Voorthuizen is enorm verbeterd.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Solide', rating: 5, text: 'Van pagina 3 naar positie #1 in 4 maanden tijd. De lokale SEO strategie werkt echt voor bouwbedrijven in Voorthuizen.' },
    { name: 'Schoonheidssalon Wellness', rating: 5, text: 'Onze omzet is verdubbeld sinds de website optimalisatie. Veel meer boekingen via Google uit de hele regio.' },
    { name: 'Fietsenwinkel Rijwiel', rating: 4.5, text: 'Dankzij de lokale marketing strategie hebben we veel meer klanten uit Barneveld, Nijkerk en omgeving.' },
    { name: 'Advocatenkantoor Juridisch', rating: 5, text: 'Excellente service en resultaten. We krijgen nu regelmatig nieuwe cliënten via onze verbeterde online aanwezigheid.' },
    { name: 'Tuincentrum Natuur', rating: 5, text: 'Google Ads voor tuinartikelen loopt perfect. Vooral in het voorjaar veel extra klanten uit heel Voorthuizen.' },
    { name: 'Dierenarts Diervriendelijk', rating: 4.5, text: 'Lokale SEO heeft ons geholpen om de #1 dierenarts van Voorthuizen te worden op Google. Zeer tevreden!' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Voorthuizen | Marketing Bureau & Online Marketing Voorthuizen</title>
        <meta
          name="description"
          content="SEO Specialist Voorthuizen nodig? Hét marketing bureau voor Voorthuizen. Krijg meer klanten met lokale SEO, Google Ads & professionele marketing voor bedrijven uit Voorthuizen."
        />
        <link rel="canonical" href="https://wwww.niblah.com/marketing/voorthuizen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">SEO Specialist Voorthuizen</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing Voorthuizen</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Op zoek naar het beste marketing bureau in Voorthuizen?</strong><br />
              Als <b>SEO specialist in Voorthuizen</b> help ik bedrijven aan meer lokale klanten met bewezen SEO & marketing strategieën.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor Voorthuizen bedrijven</li>
              <li>✓ Google Ads campagnes die converteren</li>
              <li>✓ Professionele websites & online marketing</li>
              <li>✓ Meer klanten uit Voorthuizen en omgeving</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button as="a" href="tel:+31648728828">
                Bel direct: +31 6 48728828 <span>→</span>
              </Button>
              <Button variant="secondary" as="a" href="https://wa.me/31648728828" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">Gratis kennismakingsgesprek • Actief in Voorthuizen & regio</p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Voorthuizen - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* REVIEWS SECTIE */}
        <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau <span className="bg-[#F7D8FA] px-2 rounded italic">Voorthuizen</span>
              </h2>
              <p className="text-lg text-gray-600">
                Specialistische marketing diensten voor bedrijven in Voorthuizen
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lokale SEO Voorthuizen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale SEO Voorthuizen</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden door klanten in Voorthuizen. Lokale SEO zorgt voor meer zichtbaarheid in Google.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google My Business optimalisatie</li>
                  <li>✓ Lokale zoekwoorden</li>
                  <li>✓ Online reviews management</li>
                  <li>✓ Lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Voorthuizen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest gekozen door Voorthuizen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Voorthuizen</h3>
                <p className="text-gray-600 mb-6">
                  Snel meer klanten uit Voorthuizen? Met Google Ads bereik je direct lokale aanvragen en leads.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale campagnes</li>
                  <li>✓ Geografische targeting</li>
                  <li>✓ Conversie optimalisatie</li>
                  <li>✓ Maandelijkse rapportages</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites & online marketing die conversiegericht zijn voor de Voorthuizense markt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Professioneel ontwerp</li>
                  <li>✓ Lokale focus</li>
                  <li>✓ Snel & mobielvriendelijk</li>
                  <li>✓ Gericht op meer omzet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Voorthuizen</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek wat mijn marketing bureau voor jouw bedrijf in Voorthuizen kan doen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Bellen</h3>
                <p className="text-gray-600 mb-4">Klaar om te starten? Bel mij als Voorthuizen SEO specialist voor een gratis gesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Direct</h3>
                <p className="text-gray-600 mb-4">Liever WhatsApp? Stuur direct een bericht – snel reactie.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Voorthuizen &amp; Regio</h3>
              <p className="text-gray-600">
                Barneveld • Nijkerk • Ede • Amersfoort • Leusden • Bennekom • Lunteren • Kootwijkerbroek
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
