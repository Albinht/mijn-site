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

export default function MarketingRenswoude() {
  // Lokale Renswoude reviews - historisch dorp in het Groene Hart
  const dutchReviews = [
    { name: 'Kasteel Renswoude Events', rating: 5, text: 'Onze evenementenlocatie in het kasteel krijgt nu boekingen uit heel Utrecht en Gelderland. Perfecte SEO voor "trouwlocatie Gelderse Vallei"!' },
    { name: 'Boerderijwinkel De Grote Schuur', rating: 5, text: 'Sinds de online marketing komen mensen uit Veenendaal, Ede en Amersfoort speciaal voor onze streekproducten. Geweldige groei!' },
    { name: 'Aannemersbedrijf Van Renswoude', rating: 4.5, text: 'Als familiebedrijf met 3 generaties ervaring worden we nu gevonden in de hele Gelderse Vallei. De Google Ads werken uitstekend.' },
    { name: 'Restaurant De Herberg', rating: 5, text: 'Ons restaurant aan de Dorpsstraat zit elk weekend vol met gasten uit de regio. Top vindbaar voor "restaurant Renswoude"!' },
    { name: 'Fysiotherapie Oude Holleweg', rating: 5, text: 'Onze praktijk trekt nu patiënten uit Renswoude, Scherpenzeel en Woudenberg. De lokale SEO heeft ons bereik verdubbeld.' },
    { name: 'Hoveniersbedrijf De Groene Vallei', rating: 5, text: 'Met onze specialisatie in landgoederen krijgen we nu opdrachten van heel Utrechtse Heuvelrug. Marketing die echt werkt!' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Fietsenwinkel Taets van Amerongen', rating: 5, text: 'Onze historische fietsenzaak wordt nu gevonden door wielrenners uit de hele Gelderse Vallei. Structurele omzetgroei!' },
    { name: 'Kapsalon Beatrix', rating: 4.5, text: 'In ons kleine dorp is elke klant belangrijk. Nu komen ze ook uit Veenendaal en Ederveen. Perfect lokaal bereik!' },
    { name: 'Loonbedrijf Renswoude', rating: 5, text: 'Als agrarisch loonbedrijf bereiken we nu boeren in heel Oost-Utrecht. De online strategie heeft ons werk gebied vergroot.' },
    { name: 'Bakkerij Het Oude Brood', rating: 5, text: 'Mensen rijden nu vanuit Wageningen en Rhenen voor ons ambachtelijke brood. Game changer voor onze bakkerij!' },
    { name: 'Dierenarts De Vallei', rating: 5, text: 'Onze praktijk voor groot- en kleinvee wordt perfect gevonden in de agrarische sector. Agenda staat vol!' },
    { name: 'Bed & Breakfast Landgoed', rating: 4.5, text: 'Toeristen die de Gelderse Vallei bezoeken vinden ons nu makkelijk. De bezettingsgraad is met 40% gestegen!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Renswoude | Marketing Bureau Gelderse Vallei | Utrecht</title>
        <meta
          name="description"
          content="SEO Specialist Renswoude ✓ Online groeien in de Gelderse Vallei ✓ Bereik Veenendaal, Ede & Amersfoort ✓ Lokale marketing voor 5.000 inwoners ✓ Bel nu!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/renswoude" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Historisch Renswoude: waar traditie en innovatie samenkomen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">5.000 inwoners, kasteel van mogelijkheden</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Renswoude: authentiek dorp in het hart van de Gelderse Vallei.</strong><br />
              Gelegen tussen Veenendaal (10 km), Ede (15 km) en Amersfoort (20 km), is Renswoude een historische parel met het befaamde Kasteel Renswoude uit 1654. Dit agrarische dorp met zijn karakteristieke Dorpsstraat, monumentale boerderijen en sterke gemeenschapszin biedt ondernemers unieke kansen. Als <b>SEO specialist Renswoude</b> help ik de 250+ lokale bedrijven om te profiteren van de strategische ligging tussen drie provincies.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Renswoude: dominant in Gelderse Vallei</li>
              <li>✓ Google Ads: bereik Utrecht, Gelderland én Veluwe</li>
              <li>✓ Profiteer van kasteeltoerisme en fietsroutes</li>
              <li>✓ <b>Marketing bureau Renswoude</b> met regionale kennis</li>
              <li>✓ Websites die traditie en moderniteit verenigen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei mee met Renswoude <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk succesvoorbeelden
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Renswoude, Scherpenzeel & Gelderse Vallei</p>
            <p className="mt-2 text-xs text-green-600">📞 Directe hulp? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Renswoude - Marketing Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Expert Renswoude" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Digitaal groeien vanuit historisch Renswoude"
          subtitle="Van Dorpsstraat tot digitale snelweg"
          features={[
            {
              badge: "SEO Gelderse Vallei",
              title: "Regionale SEO Dominantie",
              description: "Word gevonden door inwoners van Renswoude, toeristen bij het kasteel én zakelijke klanten uit Veenendaal, Ede en Wageningen.",
              visualTitle: "3 provincies bereik",
              visualSubtitle: "Utrecht-Gelderland",
              image: masterSeoImage
            },
            {
              badge: "Google Ads Renswoude",
              title: "Slimme Advertentiecampagnes",
              description: "Target bezoekers van Kasteel Renswoude, fietstoeristen en regionale bedrijven. Maximaal rendement uit elke advertentie-euro.",
              visualTitle: "Direct zichtbaar",
              visualSubtitle: "Hele regio",
              image: keywordResearchImage
            },
            {
              badge: "Website & Branding",
              title: "Authentieke Online Presentatie",
              description: "Een website die de historische charme van Renswoude combineert met moderne functionaliteit. Perfect voor lokale én regionale groei.",
              visualTitle: "Meer klanten",
              visualSubtitle: "Professioneel",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Renswoudse ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme SEO</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO in <span className="bg-[#F7D8FA] px-2 rounded italic">Renswoude</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van agrarisch bedrijf tot toeristische trekpleister – samen groeien we in de Gelderse Vallei.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Renswoude */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Renswoude</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten in Renswoude, Scherpenzeel, Woudenberg en de hele Gelderse Vallei.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top posities "bedrijf Renswoude"</li>
                  <li>✓ Kasteel & toerisme keywords</li>
                  <li>✓ Agrarische sector SEO</li>
                  <li>✓ Google Mijn Bedrijf optimaal</li>
                </ul>
              </div>
              {/* Google Ads Gelderse Vallei */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in de Vallei
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Specialist</h3>
                <p className="text-gray-600 mb-6">
                  Bereik klanten in Veenendaal (67.000), Ede (118.000) en heel Oost-Utrecht met gerichte campagnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Regionale targeting 3 provincies</li>
                  <li>✓ Toerisme & recreatie campagnes</li>
                  <li>✓ B2B voor agrarische sector</li>
                  <li>✓ Meetbaar meer omzet</li>
                </ul>
              </div>
              {/* Complete Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">360° Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Complete online strategie voor groei vanuit historisch Renswoude naar de hele regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Professionele websites</li>
                  <li>✓ Social media management</li>
                  <li>✓ E-mail marketing flows</li>
                  <li>✓ Content voor Gelderse Vallei</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar voor groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Renswoude</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Kasteel tot Dorpsstraat – laat jouw bedrijf online excelleren in de Gelderse Vallei.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel voor advies</h3>
                <p className="text-gray-600 mb-4">Direct sparren over jouw groeimogelijkheden in Renswoude.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Snel een vraag? Stuur een WhatsApp voor direct antwoord.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Renswoude & Gelderse Vallei</h3>
              <p className="text-gray-600">
                Dorpsstraat • Kasteel Renswoude • Oude Holleweg • Taets van Amerongenweg • Beukenlaan • Plus bereik in: Scherpenzeel • Woudenberg • Ederveen • Veenendaal • Ede • Wageningen • Rhenen • Amerongen • Leersum • Maarn
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}