'use client'

import Head from 'next/head'
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

export default function MarketingKootwijk() {
  // Lokale Kootwijk reviews
  const dutchReviews = [
    { name: 'Radiomuseum Kootwijk', rating: 5, text: 'Sinds Albin onze SEO doet, hebben we veel meer bezoekers – ook van buiten het dorp. Echte lokale zichtbaarheid!' },
    { name: 'Garage Kootwijk Service', rating: 5, text: 'Elke week nieuwe klanten via Google. Ads én SEO leveren echt op. Heel tevreden!' },
    { name: 'Restaurant De Kootwijkse Hoeve', rating: 5, text: 'Drie keer zoveel reserveringen, betere reviews, en een site waar gasten enthousiast van worden.' },
    { name: 'Kapsalon Kootwijkse Stijl', rating: 5, text: 'We staan nu bovenaan bij “kapper Kootwijk” – Google werkt echt als je het slim inzet.' },
    { name: 'Installatiebedrijf Kootwijk Tech', rating: 5, text: 'Meer leads uit de regio, betere vindbaarheid én meetbare resultaten. Super samenwerking.' },
    { name: 'Tandartspraktijk Kootwijk', rating: 4.5, text: 'Zichtbaarheid en nieuwe aanwas van patiënten – we zien het elke maand terug.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Kootwijk BV', rating: 5, text: 'Van pagina 3 naar #1 in Google – binnen 4 maanden. Echte impact voor lokale bouwbedrijven.' },
    { name: 'Schoonheidssalon Kootwijk', rating: 5, text: 'Meer boekingen, meer reviews en nieuwe klanten uit heel de omgeving.' },
    { name: 'Fietsenwinkel Kootwijkse Wielen', rating: 4.5, text: 'Klanten uit Barneveld, Voorthuizen en Kootwijk weten ons nu wél te vinden.' },
    { name: 'Advocatenkantoor Kootwijk', rating: 5, text: 'Top vindbaarheid, top samenwerking. Maandelijks nieuwe cliënten erbij.' },
    { name: 'Tuincentrum Kootwijkse Groen', rating: 5, text: 'In het voorjaar pieken we echt dankzij slimme Google Ads.' },
    { name: 'Dierenarts Kootwijk', rating: 4.5, text: '#1 op Google als dierenarts, meer vertrouwen én meer aanvragen uit de buurt.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Kootwijk | Marketing Bureau & Online Marketing Kootwijk</title>
        <meta
          name="description"
          content="SEO Specialist Kootwijk nodig? Meer lokale klanten met bewezen SEO, slimme Google Ads & websites die scoren. Hét marketing bureau voor bedrijven uit Kootwijk."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-kootwijk" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Meer klanten uit Kootwijk?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Lokale marketing die werkt</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je lokaal bovenaan in Google?</strong><br />
              Als <b>SEO specialist in Kootwijk</b> help ik je aan meer online aanvragen, reserveringen of winkelbezoek – met aanpak die direct werkt.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor Kootwijk & omgeving</li>
              <li>✓ Google Ads campagnes gericht op resultaat</li>
              <li>✓ Websites die klanten opleveren, geen visitekaartjes</li>
              <li>✓ Meer aanvragen & omzet uit jouw eigen regio</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis advies <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk resultaten
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Voor lokale ondernemers, zzp’ers en familiebedrijven in Kootwijk</p>
            <p className="mt-2 text-xs text-green-600">📞 Snel schakelen? Bel: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Kootwijk - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Kootwijk" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP / FEATURE SECTION */}
        <FeatureSection
          title="Marketing & SEO die lokaal werkt"
          subtitle="Pak jouw voorsprong in Kootwijk"
          features={[
            {
              badge: "SEO Kootwijk",
              title: "SEO & Google Maps: word gevonden",
              description: "Zorg dat klanten uit Kootwijk jou als eerste zien in Google. Van zoekresultaten tot Google Maps – lokaal dominant aanwezig.",
              visualTitle: "SEO Resultaten",
              visualSubtitle: "Kootwijk & regio",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads: direct meer aanvragen",
              description: "Laat Google Ads voor je werken – geen weggegooid budget, maar gericht op echte klanten in jouw regio.",
              visualTitle: "Online advertenties",
              visualSubtitle: "Meetbaar resultaat",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Website die omzet oplevert",
              description: "Geen saaie website, maar conversiegericht ontwerp – gericht op meer afspraken, reserveringen en verkopen uit Kootwijk.",
              visualTitle: "Webdesign",
              visualSubtitle: "Voor lokale bedrijven",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Wat zeggen bedrijven uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Kootwijk</span>?"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau voor <span className="bg-[#F7D8FA] px-2 rounded italic">Kootwijk</span>
              </h2>
              <p className="text-lg text-gray-600">
                Meer omzet, aanvragen en een professionele online uitstraling voor bedrijven in Kootwijk.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lokale SEO Kootwijk */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Kootwijk</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf structureel bovenaan in Google. Met lokale SEO ben je zichtbaar voor iedereen in én rond Kootwijk.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Slimme lokale zoekwoorden</li>
                  <li>✓ Online reviews management</li>
                  <li>✓ Lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Kootwijk */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Kootwijk
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Kootwijk</h3>
                <p className="text-gray-600 mb-6">
                  Direct resultaat zien? Met Google Ads ben je direct zichtbaar in Kootwijk en omgeving, zonder te verspillen aan onnodige kliks.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale targeting & campagnes</li>
                  <li>✓ Focus op conversie</li>
                  <li>✓ Rapportages & inzicht</li>
                  <li>✓ Geen verspilling van budget</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Een website die werkt – modern, snel en conversiegericht. Meer aanvragen uit Kootwijk gegarandeerd.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Uniek ontwerp</li>
                  <li>✓ Lokale focus</li>
                  <li>✓ Snel & mobielvriendelijk</li>
                  <li>✓ Gericht op aanvragen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Kootwijk</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Vragen of direct starten? Bel of WhatsApp vrijblijvend voor een groeigesprek.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Klaar om te groeien? Bel gerust, ik help je direct verder.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Liever appen? Geen probleem, stuur gerust je vraag!</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Kootwijk & regio</h3>
              <p className="text-gray-600">
                Barneveld • Voorthuizen • Kootwijkerbroek • Garderen • Ede • Amersfoort • Leusden • Bennekom
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
