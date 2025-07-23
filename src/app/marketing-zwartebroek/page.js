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

export default function MarketingZwartebroek() {
  // Lokale Zwartebroek reviews
  const dutchReviews = [
    { name: 'Boerderij Zwartebroekse Hoeve', rating: 5, text: 'Meer bezoekers, meer reserveringen en een stevige lokale naamsbekendheid sinds onze samenwerking met Albin.' },
    { name: 'Garage Zwartebroek Service', rating: 5, text: 'Elke week nieuwe klanten uit Zwartebroek & omgeving. Google Ads levert nu écht op.' },
    { name: 'Restaurant De Zwartebroekse Kamer', rating: 5, text: 'Drie keer zoveel boekingen en lovende recensies. SEO in Zwartebroek werkt echt.' },
    { name: 'Kapsalon Zwartebroekse Stijl', rating: 5, text: 'We zijn nu de #1 kapper op Google in de regio. Resultaat zie je direct terug in de agenda.' },
    { name: 'Installatiebedrijf Zwartebroek Tech', rating: 5, text: 'Betere leads, meer aanvragen en een zichtbare groei in klanten uit de regio.' },
    { name: 'Tandartspraktijk Zwartebroek', rating: 4.5, text: 'Snelle resultaten en veel meer zichtbaarheid in Zwartebroek. Aanrader voor iedere lokale ondernemer.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Zwartebroek BV', rating: 5, text: 'Binnen 4 maanden van pagina 3 naar #1 in Google. Lokale SEO werkt écht.' },
    { name: 'Schoonheidssalon Zwartebroek', rating: 5, text: 'Sinds onze nieuwe site en Google optimalisatie zijn de boekingen verdubbeld.' },
    { name: 'Fietsenwinkel Zwartebroekse Wielen', rating: 4.5, text: 'Meer klanten uit Nijkerk, Putten én Zwartebroek. Google marketing loont.' },
    { name: 'Advocatenkantoor Zwartebroek', rating: 5, text: 'Maandelijks nieuwe cliënten erbij. Prettige samenwerking, heldere rapportages.' },
    { name: 'Tuincentrum Zwartebroekse Groen', rating: 5, text: 'In het voorjaar pieken we écht door de slimme inzet van Google Ads.' },
    { name: 'Dierenarts Zwartebroek', rating: 4.5, text: 'De #1 dierenarts op Google in Zwartebroek! Meer vertrouwen en nieuwe klanten.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Zwartebroek | Marketing Bureau & Online Marketing Zwartebroek</title>
        <meta
          name="description"
          content="SEO Specialist Zwartebroek nodig? Haal meer klanten uit jouw regio met slimme lokale SEO, effectieve Google Ads en websites die werken voor bedrijven in Zwartebroek."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-zwartebroek" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Groei in Zwartebroek?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing die werkt voor jouw bedrijf</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je bovenaan staan bij jouw lokale doelgroep?</strong><br />
              Ik help bedrijven in Zwartebroek met online zichtbaarheid, meer klanten en een sterke lokale reputatie – met een aanpak die je direct merkt in je resultaten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor Zwartebroek en omstreken</li>
              <li>✓ Google Ads campagnes gericht op resultaat</li>
              <li>✓ Websites die klanten opleveren (niet alleen een mooi plaatje)</li>
              <li>✓ Meer aanvragen, meer omzet, meer zichtbaarheid</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis advies <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk mijn aanpak
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Voor lokale ondernemers, zzp’ers en familiebedrijven in Zwartebroek</p>
            <p className="mt-2 text-xs text-green-600">📞 Snel schakelen? Bel: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Zwartebroek - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Zwartebroek" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP / FEATURE SECTION */}
        <FeatureSection
          title="Lokaal groeien met slimme marketing"
          subtitle="Pak jouw voorsprong in Zwartebroek"
          features={[
            {
              badge: "SEO Zwartebroek",
              title: "SEO & Google Maps: lokaal bovenaan",
              description: "Zorg dat jouw bedrijf in Zwartebroek als eerste verschijnt op Google en Maps. Lokaal vindbaar, voor meer klanten uit de buurt.",
              visualTitle: "SEO Resultaten",
              visualSubtitle: "Zwartebroek & regio",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads: direct zichtbaar",
              description: "Geen weggegooid geld: slimme campagnes voor directe aanvragen van klanten uit Zwartebroek en omgeving.",
              visualTitle: "Online advertenties",
              visualSubtitle: "Meetbaar resultaat",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Website die klanten oplevert",
              description: "Meer aanvragen, reserveringen of verkoop via een snelle en slimme site die converteert.",
              visualTitle: "Webdesign",
              visualSubtitle: "Voor ondernemers uit Zwartebroek",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Wat zeggen bedrijven uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Zwartebroek</span>?"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau voor <span className="bg-[#F7D8FA] px-2 rounded italic">Zwartebroek</span>
              </h2>
              <p className="text-lg text-gray-600">
                Meer omzet, aanvragen en een sterke lokale naam voor ondernemers in Zwartebroek.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lokale SEO Zwartebroek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Zwartebroek</h3>
                <p className="text-gray-600 mb-6">
                  Bovenaan in Google en gevonden door jouw doelgroep. Lokale SEO voor bedrijven die écht willen groeien.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Slimme zoekwoorden voor Zwartebroek</li>
                  <li>✓ Meer reviews, meer vertrouwen</li>
                  <li>✓ Lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Zwartebroek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Zwartebroek
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Zwartebroek</h3>
                <p className="text-gray-600 mb-6">
                  Direct resultaat? Met Google Ads bereik je jouw klanten precies wanneer ze zoeken naar jouw dienst.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale targeting & campagnes</li>
                  <li>✓ Focus op conversie</li>
                  <li>✓ Duidelijke rapportages</li>
                  <li>✓ Geen verspilling van budget</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Een website die niet alleen mooi is, maar ook klanten en omzet oplevert in Zwartebroek.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Modern ontwerp</li>
                  <li>✓ Lokale focus</li>
                  <li>✓ Razendsnel & mobielvriendelijk</li>
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
              Kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Zwartebroek</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Vragen of direct aan de slag? Bel of WhatsApp voor gratis advies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Klaar voor groei? Bel gerust, ik help je verder.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Liever appen? Stel je vraag en krijg snel reactie!</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Zwartebroek & regio</h3>
              <p className="text-gray-600">
                Nijkerk • Putten • Barneveld • Amersfoort • Leusden • Ede • Bennekom • Lunteren
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
