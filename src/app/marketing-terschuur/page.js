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

export default function MarketingTerschuur() {
  // Lokale Terschuur reviews
  const dutchReviews = [
    { name: 'Boerderij Terschuurse Hoeve', rating: 5, text: 'Sinds de samenwerking met Albin krijgen we veel meer bezoekers, reserveringen en aanvragen van lokale klanten.' },
    { name: 'Garage Terschuur Service', rating: 5, text: 'Elke week nieuwe klanten uit Terschuur en omgeving. Google Ads levert écht meer omzet.' },
    { name: 'Restaurant De Terschuurse Kamer', rating: 5, text: 'Drie keer zoveel boekingen. Lokale vindbaarheid maakt direct verschil.' },
    { name: 'Kapsalon Terschuurse Stijl', rating: 5, text: 'We zijn nu de #1 kapper op Google. Je merkt het meteen in de agenda.' },
    { name: 'Installatiebedrijf Terschuur Tech', rating: 5, text: 'Kwalitatieve leads uit heel de regio – en onze investering was zo terugverdiend.' },
    { name: 'Tandartspraktijk Terschuur', rating: 4.5, text: 'Snelle resultaten en véél meer zichtbaarheid in Terschuur. Een aanrader voor iedere lokale ondernemer.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Terschuur BV', rating: 5, text: 'Binnen 4 maanden van pagina 3 naar #1. SEO voor bouwbedrijven werkt.' },
    { name: 'Schoonheidssalon Terschuur', rating: 5, text: 'Sinds onze nieuwe website en Google optimalisatie zijn de boekingen verdubbeld.' },
    { name: 'Fietsenwinkel Terschuurse Wielen', rating: 4.5, text: 'Meer klanten uit Amersfoort, Hoevelaken én Terschuur. Lokale marketing loont.' },
    { name: 'Advocatenkantoor Terschuur', rating: 5, text: 'Elke maand nieuwe cliënten. Duidelijke rapportages en altijd bereikbaar.' },
    { name: 'Tuincentrum Terschuurse Groen', rating: 5, text: 'In het voorjaar pieken we écht dankzij de Google Ads campagnes.' },
    { name: 'Dierenarts Terschuur', rating: 4.5, text: 'De #1 dierenarts op Google! Meer vertrouwen, nieuwe klanten en volle agenda.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Terschuur | Marketing Bureau & Online Marketing Terschuur</title>
        <meta
          name="description"
          content="Meer klanten uit Terschuur? Kies voor een lokaal marketing bureau dat jouw bedrijf vindbaar maakt met SEO, Google Ads en een website die werkt. Ontdek het verschil."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-terschuur" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Meer klanten in Terschuur?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Lokale marketing die werkt</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je ook bovenaan in Google bij jouw lokale doelgroep?</strong><br />
              Ik help bedrijven in Terschuur met online zichtbaarheid, nieuwe klanten en een sterke naam in de regio – met een aanpak waar je direct resultaat van ziet.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ SEO voor Terschuur en omgeving</li>
              <li>✓ Google Ads campagnes met bewezen conversie</li>
              <li>✓ Websites die aanvragen én omzet opleveren</li>
              <li>✓ Meer aanvragen, reserveringen en nieuwe klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis groeigesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk mijn werkwijze
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Voor lokale ondernemers, zzp’ers en familiebedrijven in Terschuur</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Terschuur - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Terschuur" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP / FEATURE SECTION */}
        <FeatureSection
          title="Meer lokale groei, meer zichtbaarheid"
          subtitle="Jouw voorsprong in Terschuur begint hier"
          features={[
            {
              badge: "SEO Terschuur",
              title: "SEO & Google Maps: lokaal bovenaan",
              description: "Zorg dat jouw bedrijf direct zichtbaar is bij klanten uit Terschuur en omgeving. Meer vertrouwen, meer aanvragen.",
              visualTitle: "SEO Resultaat",
              visualSubtitle: "Terschuur & regio",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads: direct aanvragen",
              description: "Geen verspilling – slimme campagnes met focus op lokale conversies en meetbaar resultaat.",
              visualTitle: "Online advertenties",
              visualSubtitle: "Meer aanvragen",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Website die klanten oplevert",
              description: "Van mooie website naar een site die écht omzet oplevert. Snel, mobiel en overtuigend.",
              visualTitle: "Webdesign",
              visualSubtitle: "Voor ondernemers uit Terschuur",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Hoe lokale bedrijven <span class='bg-[#F7D8FA] px-2 rounded italic'>Terschuur</span> groeien"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau voor <span className="bg-[#F7D8FA] px-2 rounded italic">Terschuur</span>
              </h2>
              <p className="text-lg text-gray-600">
                Meer aanvragen, meer omzet en een sterkere naam in Terschuur.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lokale SEO Terschuur */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Terschuur</h3>
                <p className="text-gray-600 mb-6">
                  Je bedrijf bovenaan in Google – zo win je het vertrouwen van klanten uit Terschuur.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Lokale zoekwoorden voor Terschuur</li>
                  <li>✓ Reviews verzamelen & beheren</li>
                  <li>✓ Lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Terschuur */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Terschuur
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Terschuur</h3>
                <p className="text-gray-600 mb-6">
                  Snel resultaat? Bereik direct mensen uit Terschuur die nú zoeken naar jouw diensten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale targeting</li>
                  <li>✓ Campagnes gericht op conversie</li>
                  <li>✓ Heldere maandrapportages</li>
                  <li>✓ Geen verspild advertentiebudget</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Meer aanvragen en klanten met een snelle, professionele en conversiegerichte website.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Modern ontwerp</li>
                  <li>✓ Lokale focus op Terschuur</li>
                  <li>✓ Mobielvriendelijk & snel</li>
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
              Kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Terschuur</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Vragen of starten? Bel of WhatsApp – je krijgt altijd direct antwoord.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Meer weten? Bel gerust – ik denk graag met je mee.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Liever appen? Stuur een bericht en je krijgt snel reactie.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Terschuur & regio</h3>
              <p className="text-gray-600">
                Amersfoort • Hoevelaken • Leusden • Nijkerk • Barneveld • Ede • Bennekom • Lunteren
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
