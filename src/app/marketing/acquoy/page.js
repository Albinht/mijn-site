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

export default function MarketingAcquoy() {
  // Lokale Acquoy reviews - klein Betuws dorp aan de Linge
  const dutchReviews = [
    { name: 'Fruitteeltbedrijf De Lingehof', rating: 5, text: 'Onze appel- en perenverkoop aan huis loopt storm sinds de lokale SEO. Mensen uit Leerdam, Geldermalsen en zelfs Tiel vinden ons nu perfect tijdens het fruitseizoen.' },
    { name: 'Camping De Lindeboom', rating: 5, text: 'We trekken nu veel meer gasten die de Linge per boot verkennen. De Google Ads voor "kamperen Betuwe" en "camping aan de Linge" werken geweldig.' },
    { name: 'Hoveniersbedrijf Acquoy Groen', rating: 5, text: 'Sinds we online zichtbaar zijn krijgen we opdrachten uit heel West-Betuwe. Vooral voor het onderhoud van boomgaarden worden we veel gevonden.' },
    { name: 'Pannenkoekenboerderij ’t Lingedal', rating: 5, text: 'Fietsers op de Lingeroute vinden ons nu makkelijk als rustpunt. De website met actuele openingstijden en het terrasreserveringssysteem werken perfect.' },
    { name: 'Klusbedrijf Van Dam', rating: 5, text: 'Als enige klusjesman in Acquoy word ik nu ook gevonden door mensen uit Asperen en Heukelum. De lokale SEO strategie werkt breder dan verwacht.' },
    { name: 'B&B Aan de Linge', rating: 4.5, text: 'We ontvangen nu veel wandelaars van het Lingepad. De content over de 6 Lingekastelen in de buurt trekt precies de juiste gasten.' },
  ]
  const dutchMoreReviews = [
    { name: 'Boomkwekerij Acquoy', rating: 5, text: 'Onze fruitbomen worden nu gevonden door particulieren uit de hele Betuwe. De online zichtbaarheid voor "fruitbomen kopen Gelderland" is top.' },
    { name: 'Melkveehouderij De Weide', rating: 5, text: 'De kaasverkoop aan huis is verdubbeld. Mensen uit Geldermalsen en Leerdam rijden graag om voor onze verse boerenkaas.' },
    { name: 'Fietsverhuur Lingestreek', rating: 4.5, text: 'We verhuren nu 3x meer e-bikes aan dagjesmensen. De samenwerking met hotels in Leerdam via online marketing werkt uitstekend.' },
    { name: 'Historische Vereniging Acquoy', rating: 5, text: 'Onze website over de geschiedenis van het kasteel trekt veel bezoekers. De rondleidingen zitten sinds de SEO verbetering altijd vol.' },
    { name: 'Viskwekerij De Linge', rating: 5, text: 'De forellen verkoop loopt geweldig sinds we online vindbaar zijn. Restaurants uit de hele streek bestellen nu bij ons.' },
    { name: 'Dakdekker Betuwe', rating: 4.5, text: 'Door de regionale SEO krijg ik nu ook opdrachten uit Beesd, Rhenoy en Rumpt. Perfect voor een specialist in rieten daken.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Marketing Acquoy (Linge) | SEO West-Betuwe | Bereik Leerdam & Geldermalsen</title>
        <meta
          name="description"
          content="Marketing bureau Acquoy helpt ondernemers aan de Linge. Bereik 50.000+ inwoners West-Betuwe, trek Linge-toeristen. SEO strategie voor kleine dorpen met groot bereik."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/acquoy" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Klein dorp aan de Linge, grote online kansen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing specialist voor Acquoy ondernemers</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>600 inwoners, maar bereik heel West-Betuwe online</strong><br />
              Als <b>marketing bureau voor Acquoy</b> help ik lokale ondernemers om gevonden te worden door de 50.000+ inwoners van West-Betuwe, toeristen op de Linge-route en dagrecreanten uit Leerdam en Geldermalsen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik Geldermalsen (10 min) en Leerdam (15 min)</li>
              <li>✓ Profiteer van 100.000+ Linge-route bezoekers per jaar</li>
              <li>✓ Trek klanten uit heel West-Betuwe (50.000+ inwoners)</li>
              <li>✓ <b>Google Ads Betuwe</b> voor directe zichtbaarheid</li>
              <li>✓ Specialisatie in agrarische en toeristische marketing</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in kleine dorpen marketing - groot bereik vanuit Acquoy</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Acquoy - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Acquoy" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Acquoy met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Acquoy",
              title: "Regionale SEO vanuit Acquoy",
              description: "Klein dorp, groot bereik. Ik positioneer jouw Acquoy bedrijf online zodat je gevonden wordt door heel West-Betuwe, Linge-toeristen en klanten uit Leerdam en Geldermalsen.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads West-Betuwe",
              description: "Bereik de 50.000+ inwoners van West-Betuwe, toeristen op de Lingeroute en klanten uit Leerdam en Geldermalsen met gerichte advertenties.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Agrarische & Toeristische Marketing",
              description: "Specialistische websites voor fruitteelt, campings en Linge-recreatie. Perfect afgestemd op de Betuwse markt en seizoensgebonden vraag.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer aanvragen",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Acquoy groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Klein dorp, <span className="bg-[#F7D8FA] px-2 rounded italic">groot bereik</span> - Marketing vanuit Acquoy
              </h2>
              <p className="text-xl text-gray-600">
                Van fruittelers tot Linge-recreatie – ik help Acquoyse ondernemers de hele West-Betuwe te bereiken.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Acquoy */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regionale SEO West-Betuwe</h3>
                <p className="text-gray-600 mb-6">
                  Positioneer je bedrijf voor de hele regio: van Leerdam tot Geldermalsen, van de Linge tot de A2.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Optimalisatie voor "Linge + dienst"</li>
                  <li>✓ Seizoensgebonden SEO (fruitseizoen, toerisme)</li>
                  <li>✓ Lokale citaties in West-Betuwe</li>
                  <li>✓ Content over kastelen & Linge-route</li>
                </ul>
              </div>
              {/* Google Ads Acquoy */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor seizoensbedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Linge-streek</h3>
                <p className="text-gray-600 mb-6">
                  Trek bezoekers uit Leerdam (27.000 inw.), Geldermalsen (28.000 inw.) en toeristen op de Lingeroute.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Campagnes voor fruitseizoen (apr-okt)</li>
                  <li>✓ Linge-toerisme advertenties</li>
                  <li>✓ Bereik vanuit Gorinchem tot Tiel</li>
                  <li>✓ Budget vanaf €300/maand effectief</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Agrarische & Recreatie Websites</h3>
                <p className="text-gray-600 mb-6">
                  Specialistische websites voor de typische Acquoyse ondernemers: fruittelers, campings en B&B's.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Seizoenskalender voor fruit/oogst</li>
                  <li>✓ Booking systemen voor recreatie</li>
                  <li>✓ Integratie met Linge-routes</li>
                  <li>✓ Meertalig voor buitenlandse toeristen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om heel <span className="bg-[#F7D8FA] px-2 rounded italic">West-Betuwe</span> te veroveren vanuit Acquoy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Klein dorp, grote ambities? Ik help je de 50.000+ inwoners van West-Betuwe te bereiken.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bereik vanuit Acquoy - Linge as marketing</h3>
              <p className="text-gray-600">
                Acquoy (600 inw.) • Asperen (3.000) • Heukelum (2.000) • Leerdam (21.000) • Geldermalsen (11.000) • Beesd (3.500) • Rhenoy (700) • Hele West-Betuwe (50.000+)
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}