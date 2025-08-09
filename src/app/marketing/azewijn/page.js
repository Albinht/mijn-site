'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingAzewijn() {
  // Lokale Azewijn reviews - grensdorp bij Montferland
  const dutchReviews = [
    { name: 'Aannemersbedrijf Peters', rating: 5, text: 'Als bouwbedrijf vlakbij de Duitse grens krijgen we nu ook opdrachten uit Emmerich en Kleve. De tweetalige website werkt perfect!' },
    { name: 'Café-Restaurant De Grenspaal', rating: 5, text: 'Onze Duitse gasten vinden ons nu makkelijk online. Plus meer toeristen die het Montferland bezoeken stoppen bij ons.' },
    { name: 'Transport Achterhoek BV', rating: 5, text: 'Door de strategische ligging bij de A12 en grensovergang krijgen we nu meer logistieke opdrachten uit Duitsland.' },
    { name: 'Agrarisch Bedrijf Van Dijk', rating: 5, text: 'Website is perfect afgestemd op de landbouwsector in de Liemers. Meer aanvragen voor machineverhuur uit heel Montferland.' },
    { name: 'Hoveniersbedrijf Groenrijk', rating: 5, text: 'We bedienen nu klanten van \'s-Heerenberg tot Doetinchem. De lokale SEO strategie werkt uitstekend voor ons werkgebied.' },
    { name: 'Autobedrijf Grensstreek', rating: 4.5, text: 'Duitse klanten vinden ons voor APK en onderhoud. Plus meer verkoop aan mensen uit Didam en Zevenaar.' },
  ]
  const dutchMoreReviews = [
    { name: 'Installatiebedrijf Montferland', rating: 5, text: 'Dankzij Google Ads krijgen we spoedklussen uit heel gemeente Montferland, van Braamt tot Zeddam.' },
    { name: 'Kapsalon Hair & Beauty', rating: 5, text: 'Klanten uit \'s-Heerenberg en Beek weten ons nu te vinden. De online boekingsmodule werkt perfect.' },
    { name: 'Fietsenwinkel De Liemers', rating: 4.5, text: 'E-bike verkoop loopt geweldig door de goede vindbaarheid. Veel fietstoeristen richting Montferland.' },
    { name: 'Dakdekkersbedrijf Oost-Nederland', rating: 5, text: 'Van Ulft tot Lobith, overal worden we nu gevonden voor dakwerk. Perfecte regionale dekking.' },
    { name: 'Elektro Service Achterhoek', rating: 5, text: 'Spoedklussen komen nu uit heel de regio. Van Stokkum tot Kilder, we staan overal bovenaan.' },
    { name: 'Tuincentrum De Grens', rating: 4.5, text: 'Duitse klanten ontdekken ons voor goedkopere tuinplanten. Plus meer bezoekers uit Doetinchem en omgeving.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Marketing Bureau Azewijn (Montferland) | Grensoverschrijdend Bereik</title>
        <meta
          name="description"
          content="Marketing bureau in Azewijn bij de Duitse grens. Specialisten in tweetalige websites, grensoverschrijdende SEO en Google Ads voor Montferland en Achterhoek."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/azewijn" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau aan de Duitse grens in Azewijn</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Grensoverschrijdend ondernemen begint hier</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Profiteer van de strategische ligging bij de grensovergang Netterden</strong><br />
              Als marketing specialist in <b>Azewijn (gemeente Montferland)</b> help ik bedrijven met de unieke kansen van deze grensregio. Van tweetalige websites tot campagnes die zowel Nederlandse als Duitse klanten bereiken.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Tweetalige SEO: vindbaar in Nederland én Duitsland</li>
              <li>✓ Lokaal sterk van \'s-Heerenberg tot Doetinchem</li>
              <li>✓ Google Ads voor grensstreek Montferland-Emmerich</li>
              <li>✓ Specialisme: transport, logistiek en agrarische sector</li>
              <li>✓ Bereik klanten uit de hele Liemers en Achterhoek</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek grensregio cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Montferland, Oude IJsselstreek & Duitse grensregio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Azewijn - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Azewijn" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Grensoverschrijdende marketing vanuit Azewijn"
          subtitle="Benut de unieke positie tussen Achterhoek en Niederrhein"
          features={[
            {
              badge: "Grens-SEO",
              title: "Tweetalige SEO Strategie",
              description: "Met Azewijn\\'s ligging bij grensovergang Netterden bereik je zowel Nederlandse als Duitse klanten. Perfect voor transport, horeca en detailhandel die beide markten bedienen.",
              visualTitle: "NL + DE bereik",
              visualSubtitle: "Dubbele markt",
              image: masterSeoImage
            },
            {
              badge: "Regionale Ads",
              title: "Google Ads Montferland-Kleve",
              description: "Gerichte campagnes voor de A12-corridor en grensregio. Bereik ondernemers van Didam tot Emmerich, van Zevenaar tot \'s-Heerenberg met slimme targeting.",
              visualTitle: "Grensregio focus",
              visualSubtitle: "A12 corridor",
              image: keywordResearchImage
            },
            {
              badge: "Lokale Expertise",
              title: "Achterhoek Marketing Specialist",
              description: "Ken de regio, spreek de taal. Van agrarische bedrijven tot internationale transport - ik begrijp de ondernemers in Montferland en de Liemers.",
              visualTitle: "Regio kennis",
              visualSubtitle: "Lokaal netwerk",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers in Montferland kiezen voor <span class='bg-[#F7D8FA] px-2 rounded italic'>grensoverschrijdende groei</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Grensstreek Marketing vanuit <span className="bg-[#F7D8FA] px-2 rounded italic">Azewijn-Montferland</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van transportbedrijf aan de A12 tot agrarisch ondernemer in de Liemers – ik ken de regio en de kansen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Azewijn */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tweetalige SEO Grensregio</h3>
                <p className="text-gray-600 mb-6">
                  Benut je ligging bij de Duitse grens optimaal. Word gevonden door klanten uit Montferland, de Achterhoek én het Duitse Niederrhein.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Nederlandse & Duitse zoekwoorden</li>
                  <li>✓ Google My Business in beide landen</li>
                  <li>✓ Lokaal sterk van Braamt tot Beek</li>
                  <li>✓ Grensoverschrijdende linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Azewijn */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Azewijn
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads A12-Corridor</h3>
                <p className="text-gray-600 mb-6">
                  Bereik ondernemers langs de belangrijke A12/A3 route. Perfect voor transport, logistiek en zakelijke dienstverlening.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Targeting Zevenaar-Emmerich route</li>
                  <li>✓ Focus op Montferland & Oude IJsselstreek</li>
                  <li>✓ Duitse advertenties voor grensverkeer</li>
                  <li>✓ Transport & logistiek specialisme</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Achterhoek Business Websites</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites voor ondernemers in de grensstreek. Van agrarisch tot industrieel, altijd met regionale focus.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Tweetalige websites (NL/DE)</li>
                  <li>✓ Agrarische sector expertise</li>
                  <li>✓ Transport & logistiek oplossingen</li>
                  <li>✓ Lokale marktkennis Liemers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Grensoverschrijdend ondernemen vanuit <span className="bg-[#F7D8FA] px-2 rounded italic">Azewijn-Montferland</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Laten we bespreken hoe je de strategische ligging bij de Duitse grens optimaal benut voor groei in beide landen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Meer weten? Bel vrijblijvend voor een gratis strategiegesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel schakelen? Stuur direct een WhatsApp voor snel contact.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Grensregio Achterhoek-Niederrhein</h3>
              <p className="text-gray-600">
                <strong>Montferland:</strong> \'s-Heerenberg • Didam • Beek • Braamt • Zeddam • Kilder<br />
                <strong>Oude IJsselstreek:</strong> Ulft • Gendringen • Silvolde • Terborg<br />
                <strong>Duitse grensregio:</strong> Emmerich • Kleve • Elten • Netterden
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
