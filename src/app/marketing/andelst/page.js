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

export default function MarketingAndelst() {
  // Authentieke Andelst reviews met fruitstreek en Overbetuwe context
  const dutchReviews = [
    { name: 'Fruitbedrijf Van Andelst', rating: 5, text: 'Onze appels en peren uit de Overbetuwe vinden nu hun weg naar heel Nederland. Via Google bereiken we groothandels én particulieren die verse fruit uit Andelst zoeken.' },
    { name: 'Kwekerij De Betuwse Bloesem', rating: 5, text: 'Tijdens de bloesemperiode stromen de toeristen toe. Dankzij goede SEO vinden ze onze rondleidingen tussen Andelst en Zetten. Van Arnhem tot Nijmegen komen ze kijken!' },
    { name: 'Aannemersbedrijf Overbetuwe', rating: 5, text: 'Van fruitschuren renovaties tot nieuwbouw in Elst-Zuid. Als familiebedrijf uit Andelst bedienen we nu heel gemeente Overbetuwe met 48.000 inwoners.' },
    { name: 'Restaurant De Fruitgaard', rating: 5, text: '1600 inwoners in Andelst, maar onze gasten komen uit heel de regio. Fietsers op de Betuwe-route, zakenlunches uit Elst en families uit Arnhem vinden ons perfect.' },
    { name: 'Transportbedrijf Betuwe Express', rating: 5, text: 'Fruit transport vanuit Andelst naar de veilingen. Via online marketing bereiken we nu ook nieuwe telers uit Herveld, Oosterhout en Valburg.' },
    { name: 'Hoveniersbedrijf De Lingezegen', rating: 4.5, text: 'We onderhouden boomgaarden én particuliere tuinen. Van Andelst tot Huissen worden we gevonden. De combinatie fruit-expertise en tuinonderhoud is goud waard.' },
  ]
  const dutchMoreReviews = [
    { name: 'B&B Bloesemzicht Andelst', rating: 5, text: 'Toeristen voor de bloesemroute boeken maanden vooruit. Onze ligging tussen Arnhem (12km) en Nijmegen (15km) wordt perfect online gecommuniceerd.' },
    { name: 'Fietsverhuur De Betuwe', rating: 5, text: 'Elektrische fietsen voor de fruitroute Andelst-Zetten-Hemmen. Via Google Maps vinden toeristen uit het Rijk van Nijmegen ons startpunt.' },
    { name: 'Loonbedrijf Andelst-Herveld', rating: 4.5, text: 'Fruitoogst, snoeiwerk en grondbewerking voor heel Overbetuwe. Online vindbaarheid brengt nieuwe klanten uit Dodewaard en Opheusden.' },
    { name: 'Elektricien Service Betuwe', rating: 5, text: 'Van koelcellen voor fruit tot zonnepanelen op schuren. Heel agrarisch Overbetuwe kent ons nu dankzij goede lokale SEO.' },
    { name: 'Catering De Betuwse Tafel', rating: 5, text: 'Streekproducten uit Andelst voor events in heel Gelderland. Van bedrijfsfeesten in Elst tot bruiloften op landgoed Hemmen.' },
    { name: 'Boomchirurg Overbetuwe', rating: 4.5, text: 'Specialisten in fruitbomen onderhoud. Van hoogstam in Andelst tot sierbomen in villawijken Elst. Perfect vindbaar voor de hele regio.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Andelst (Overbetuwe) | Marketing Fruitstreek Tussen Arnhem-Nijmegen</title>
        <meta
          name="description"
          content="Marketing bureau Andelst in het hart van de Overbetuwe fruitstreek. Online marketing voor agrarische bedrijven en MKB tussen Arnhem en Nijmegen. 1600 inwoners, oneindig veel kansen."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/andelst" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Fruitige marketing successen plukken in Andelst</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Bloei tussen de bloesems van Overbetuwe</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Andelst: het kloppend hart van de Betuwse fruitstreek.</strong><br />
              Als <b>SEO specialist Andelst</b> ken ik de kracht van dit authentieke fruitdorp met 1.600 inwoners, gelegen in de vruchtbare Overbetuwe tussen Arnhem (12km) en Nijmegen (15km). Met duizenden hectares boomgaarden, de beroemde bloesemroute en ligging aan de Linge help ik lokale ondernemers groeien tussen de fruitbomen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Marketing voor de fruitstreek: van teler tot toerisme</li>
              <li>✓ Bereik 48.000 inwoners gemeente Overbetuwe</li>
              <li>✓ Bloesemroute promotie (100.000+ bezoekers/jaar)</li>
              <li>✓ <b>SEO Andelst-Elst-Zetten</b> voor maximaal bereik</li>
              <li>✓ Profiteren van ligging tussen twee studentensteden</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis fruitig gesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = '/work-with-me'}>
                Bekijk Betuwe cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Andelst, Overbetuwe & de hele fruitstreek</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Andelst - Marketing Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Andelst" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van boomgaard tot boardroom: digitale groei in de Overbetuwe"
          subtitle="Waar fruitbloesem en online marketing samenkomen"
          features={[
            {
              badge: "Bloesemroute marketing",
              title: "SEO voor fruitstreek toerisme",
              description: "De bloesemroute tussen Andelst, Zetten en Hemmen trekt jaarlijks 100.000+ bezoekers. Ik positioneer jouw bedrijf perfect voor bloesemtoeristen, fietsers uit Arnhem-Nijmegen en dagjesmensen. Van april-bloei tot september-pluk, altijd vindbaar voor de juiste doelgroep.",
              visualTitle: "Fruitig vindbaar",
              visualSubtitle: "Seizoen succes",
              image: masterSeoImage
            },
            {
              badge: "Overbetuwe targeting",
              title: "Google Ads Arnhem-Nijmegen",
              description: "Target de 48.000 inwoners van Overbetuwe, plus de 360.000 inwoners van Arnhem en Nijmegen op slechts 12-15km afstand. Van Elst tot Huissen, van Valburg tot Zetten - jouw advertenties bereiken ondernemers, toeristen én locals die de authenticiteit van Andelst zoeken.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Regionaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Betuwe websites",
              title: "Sites met fruitstreek DNA",
              description: "Andelst ademt fruit, traditie en gastvrijheid. Je website weerspiegelt deze Betuwse waarden met moderne conversie-optimalisatie. Van agrarische diensten tot bloesem-accommodaties, van streekproducten tot zakelijke dienstverlening - altijd de juiste toon voor jouw doelgroep.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer omzet",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Andelst plukt vruchten met <span class='bg-[#F7D8FA] px-2 rounded italic'>fruitige marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor fruitig <span className="bg-[#F7D8FA] px-2 rounded italic">Andelst</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van fruitbedrijven tot toeristische ondernemers - marketing die de essentie van de Overbetuwe 
                vangt. Groei tussen de boomgaarden met strategieën die werken.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Andelst */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Fruitdorp Andelst</h3>
                <p className="text-gray-600 mb-6">
                  Zichtbaar voor 100.000+ bloesemtoeristen, fruitliefhebbers en inwoners van Overbetuwe. Pluk de vruchten van lokale vindbaarheid.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Bloesemroute SEO (apr-mei piek)</li>
                  <li>✓ Fruitseizoen keywords (aug-okt)</li>
                  <li>✓ Overbetuwe lokale targeting</li>
                  <li>✓ Arnhem-Nijmegen bereik (360.000 inw)</li>
                </ul>
              </div>
              {/* Google Ads Andelst */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Overbetuwe
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Betuwe</h3>
                <p className="text-gray-600 mb-6">
                  Bereik bloesemtoeristen, fruitkopers en zakelijke klanten uit Arnhem-Nijmegen. Seizoensgebonden campagnes met maximaal rendement.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Bloesem-event campagnes</li>
                  <li>✓ Elst zakelijk centrum (15.000 inw)</li>
                  <li>✓ Student-steden targeting</li>
                  <li>✓ Agrarische B2B focus</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites met Betuwe-ziel</h3>
                <p className="text-gray-600 mb-6">
                  Authentiek design dat de fruitstreek-sfeer ademt. Perfect voor bedrijven die traditie en innovatie combineren in de Overbetuwe.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Bloesem-thema integratie</li>
                  <li>✓ Streekproducten showcase</li>
                  <li>✓ Route-informatie koppeling</li>
                  <li>✓ Seizoens-content updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Andelst</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe profiteer ik optimaal van de 100.000+ bloesemtoeristen?</h3>
                <p className="text-gray-600">
                  De bloesemroute tussen Andelst, Zetten en Hemmen is een goudmijn voor lokale ondernemers. Ik ontwikkel seizoenscampagnes die al in februari starten met 'bloesem Betuwe' content, target dagjesmensen uit Arnhem-Nijmegen via Google Ads, en zorg voor top-posities op 'bloesemroute Andelst'. Of je nu horeca, accommodatie of streekproducten aanbiedt - de bloesemperiode wordt jouw hoogseizoen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost online marketing voor een fruitbedrijf in Andelst?</h3>
                <p className="text-gray-600">
                  Voor agrarische bedrijven in de Overbetuwe start effectieve marketing vanaf €650-900 per maand. Dit omvat lokale SEO voor heel gemeente Overbetuwe (48.000 inwoners), seizoensgebonden content en basis Google Ads. Voor bedrijven die ook B2B klanten zoeken (groothandels, horeca) adviseer ik €900-1.500 per maand voor uitgebreidere campagnes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik klanten uit Arnhem en Nijmegen vanuit Andelst?</h3>
                <p className="text-gray-600">
                  Andelst ligt strategisch tussen Arnhem (12km, 160.000 inwoners) en Nijmegen (15km, 180.000 inwoners). Ik target stedelingen die authenticiteit zoeken, studenten voor seizoenswerk tijdens de fruitoogst, en gezinnen voor dagjes uit. Met geo-targeting bereik je forenzen op de A15/A325, fietsers op de Betuwe-routes en food-lovers die verse streekproducten waarderen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke lokale zoekwoorden werken het best voor Andelst?</h3>
                <p className="text-gray-600">
                  Effectieve keywords combineren 'Andelst' met je dienst, maar ook 'Overbetuwe', 'fruitstreek', 'bloesemroute' en 'Betuwe'. Voor regionaal bereik gebruik ik 'Elst' (15.000 inwoners), 'Zetten', 'Herveld' en 'Valburg'. Seizoensgebonden terms zoals 'appels plukken Andelst' (september) en 'bloesem kijken Betuwe' (april) scoren uitstekend tijdens piekperiodes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe onderscheid ik me van grote fruitbedrijven in de regio?</h3>
                <p className="text-gray-600">
                  Andelst heeft naast grote fruittelers vooral kansen voor nichespelers. Focus op authenticiteit: familiebedrijf sinds generaties, biologische teelt, oude fruitrassen, of beleving (pluktuinen, rondleidingen). Ik positioneer je als dé lokale specialist met persoonlijke service. Terwijl groothandels volume leveren, lever jij verhalen, kwaliteit en de échte Betuwe-ervaring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om te groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">fruitdorp Andelst</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Pluk de vruchten van professionele online marketing in het hart van de Overbetuwe fruitstreek.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bel voor een vrijblijvend gesprek over jouw groei in de fruitstreek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stuur een WhatsApp voor snel contact over marketing in Andelst.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Andelst</h3>
              <p className="text-gray-600">
                <strong>Gemeente Overbetuwe:</strong> Andelst • Elst • Zetten • Herveld • Valburg • Oosterhout • Driel • Heteren<br/>
                <strong>Fruitstreek:</strong> Hemmen • Randwijk • Indoornik • Slijk-Ewijk • Homoet<br/>
                <strong>Regio:</strong> Arnhem • Nijmegen • Huissen • Bemmel • Gendt • Angeren
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}