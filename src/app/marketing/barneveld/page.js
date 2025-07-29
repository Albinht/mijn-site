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

export default function MarketingBarneveld() {
  // Lokale Barneveld reviews
  const dutchReviews = [
    { name: 'Bakkerij van der Berg', rating: 5, text: 'Dankzij Albin staan we nu #1 in Google voor "bakkerij Barneveld". Veel meer klanten sinds de lokale SEO optimalisatie!' },
    { name: 'Garage Hendriks', rating: 5, text: 'Onze Google Ads campagne draait perfect. We krijgen elke week nieuwe klanten uit Barneveld en omgeving. Top service!' },
    { name: 'Restaurant De Gouden Leeuw', rating: 5, text: 'Sinds we met Albin werken hebben we 3x zoveel reserveringen. Onze nieuwe website ziet er professioneel uit en converteert goed.' },
    { name: 'Kapsalon Mooi Haar', rating: 5, text: 'Lokale SEO heeft ons bedrijf getransformeerd. We staan nu bovenaan bij "kapper Barneveld" en hebben een volle agenda.' },
    { name: 'Installatiebedrijf Jansen', rating: 5, text: 'Google Ads campagne loopt fantastisch. We krijgen kwalitatieve leads uit heel de regio. Investering heeft zich al terugverdiend.' },
    { name: 'Tandartspraktijk Smile', rating: 4.5, text: 'Professionele aanpak en snelle resultaten. Onze online zichtbaarheid in Barneveld is enorm verbeterd.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Sterk', rating: 5, text: 'Van pagina 3 naar positie #1 in 4 maanden tijd. De lokale SEO strategie werkt echt voor bouwbedrijven in Barneveld.' },
    { name: 'Schoonheidssalon Pure', rating: 5, text: 'Onze omzet is verdubbeld sinds de website optimalisatie. Veel meer boekingen via Google uit de hele regio.' },
    { name: 'Fietsenwinkel Snel', rating: 4.5, text: 'Dankzij de lokale marketing strategie hebben we veel meer klanten uit Ede, Amersfoort en omgeving.' },
    { name: 'Advocatenkantoor Recht', rating: 5, text: 'Excellente service en resultaten. We krijgen nu regelmatig nieuwe cliënten via onze verbeterde online aanwezigheid.' },
    { name: 'Tuincentrum Groen', rating: 5, text: 'Google Ads voor tuinartikelen loopt perfect. Vooral in het voorjaar veel extra klanten uit heel Barneveld.' },
    { name: 'Dierenarts Zorgzaam', rating: 4.5, text: 'Lokale SEO heeft ons geholpen om de #1 dierenarts van Barneveld te worden op Google. Zeer tevreden!' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Barneveld | Marketing Bureau & Online Marketing Barneveld</title>
        <meta
          name="description"
          content="SEO Specialist Barneveld nodig? Hét marketing bureau voor Barneveld. Krijg meer klanten met lokale SEO, Google Ads & professionele marketing voor bedrijven uit Barneveld."
        />
        <link rel="canonical" href="https://wwww.niblah.com/marketing/barneveld" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">SEO Specialist Barneveld</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing Barneveld</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Op zoek naar het beste marketing bureau in Barneveld?</strong><br />
              Als <b>SEO specialist in Barneveld</b> help ik bedrijven aan meer lokale klanten met bewezen SEO & marketing strategieën.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Barneveld: #1 in Google</li>
              <li>✓ Google Ads Barneveld: direct meer aanvragen</li>
              <li>✓ Marketing strategie speciaal voor Barneveld</li>
              <li>✓ <b>SEO Barneveld</b> voor MKB, ZZP & lokale bedrijven</li>
              <li>✓ Conversiegerichte websites</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis SEO Consult <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Meer over SEO in Barneveld
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief als marketing bureau in Barneveld en omgeving</p>
            <p className="mt-2 text-xs text-green-600">📞 Snel schakelen? Bel: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Barneveld - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Barneveld" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Jouw Marketing Bureau & SEO Specialist in Barneveld"
          subtitle="Lokaal gevonden worden? Meer klanten in Barneveld?"
          features={[
            {
              badge: "SEO Barneveld",
              title: "Lokale SEO Specialist Barneveld",
              description: "Als SEO specialist help ik je Barnevelder bedrijf met lokale topposities in Google. Jouw bedrijf structureel bovenaan voor belangrijke zoektermen zoals ‘[jouw dienst] Barneveld’.",
              visualTitle: "SEO Strategie",
              visualSubtitle: "Lokale topposities",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Barneveld",
              description: "Snel meer klanten uit Barneveld en omgeving? Met Google Ads Barneveld bereik je lokaal relevante klanten precies op het juiste moment.",
              visualTitle: "Direct Resultaat",
              visualSubtitle: "Meer aanvragen",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Marketing Bureau Barneveld",
              description: "Wij bouwen websites die Barneveld overtuigen. Conversiegerichte, snelle websites waarmee je direct een voorsprong hebt in de lokale markt.",
              visualTitle: "Website Ontwerp",
              visualSubtitle: "Meer omzet",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Barneveld kiest voor <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Barneveld</span>
              </h2>
              <p className="text-xl text-gray-600">
                Complete marketing oplossingen voor lokale bedrijven, zzp’ers & mkb in Barneveld.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Barneveld */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Barneveld</h3>
                <p className="text-gray-600 mb-6">
                  Scoor topposities in Google met lokale SEO. Word gevonden door nieuwe klanten uit Barneveld & omstreken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Lokale zoekwoorden research</li>
                  <li>✓ Content & linkbuilding</li>
                  <li>✓ Review management</li>
                </ul>
              </div>
              {/* Google Ads Barneveld */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest gekozen door Barneveld
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Barneveld</h3>
                <p className="text-gray-600 mb-6">
                  Snel meer klanten uit Barneveld? Met Google Ads bereik je direct lokale aanvragen en leads.
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
                  Moderne websites & online marketing die conversiegericht zijn voor de Barneveldse markt.
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Barneveld</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek wat mijn marketing bureau voor jouw bedrijf in Barneveld kan doen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Bellen</h3>
                <p className="text-gray-600 mb-4">Klaar om te starten? Bel mij als Barneveld SEO specialist voor een gratis gesprek.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Barneveld &amp; Regio</h3>
              <p className="text-gray-600">
                Ede • Amersfoort • Leusden • Nijkerk • Bennekom • Lunteren • Voorthuizen • Kootwijkerbroek
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
