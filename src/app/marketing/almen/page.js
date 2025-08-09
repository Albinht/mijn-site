'use client'

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

export default function MarketingAlmen() {
  // Authentieke Achterhoek reviews - focus op landgoederen, toerisme en maakindustrie
  const dutchReviews = [
    { name: 'Landgoed De Ehze', rating: 5, text: 'Onze trouwlocatie wordt nu gevonden door bruidsparen uit heel Oost-Nederland. De romantische Achterhoek positionering werkt perfect. Agenda staat vol tot 2026!' },
    { name: 'Achterhoek Metaalbewerking', rating: 5, text: 'Als toeleverancier voor de maakindustrie krijgen we nu opdrachten uit Lochem, Zutphen én Deventer. De B2B marketing is spot on voor technische bedrijven.' },
    { name: 'Streekwinkel Berkel & Slinge', rating: 5, text: 'Toeristen op de fiets vinden ons nu via Google Maps. De combinatie van lokale SEO en seizoenscampagnes voor het Pieterpad werkt geweldig.' },
    { name: 'Camping De IJsselhoeve', rating: 5, text: 'Duitse kampeerders boeken nu massaal bij ons. De tweetalige website en gerichte campagnes op "Achterhoek camping" doen wonderen.' },
    { name: 'Bouwbedrijf Oude IJssel', rating: 5, text: 'Woonboerderij verbouwingen zijn onze specialiteit. We worden nu gevonden van Laren tot Borculo. De lokale expertise positionering werkt.' },
    { name: 'Fysiotherapie Berkel', rating: 4.5, text: 'Patiënten uit Almen, Harfsen en Laren vinden ons nu direct online. De nieuwe afsprakentool bespaart ons uren per week.' },
  ]
  const dutchMoreReviews = [
    { name: 'Restaurant Havezate Almen', rating: 5, text: 'Onze historische setting trekt nu gasten uit Apeldoorn en Arnhem. De "culinair genieten in de Achterhoek" campagne is een schot in de roos.' },
    { name: 'E-bike Verhuur Berkelland', rating: 5, text: 'Toeristen die het Pieterpad fietsen boeken nu vooraf online. De route-marketing en dagtochten packages lopen geweldig.' },
    { name: 'Technisch Bureau Lochem', rating: 4.5, text: 'Engineering opdrachten komen nu uit de hele stedendriehoek. De technische SEO voor de maakindustrie levert constant nieuwe leads op.' },
    { name: 'Notariskantoor Graafschap', rating: 5, text: 'Voor landgoed transacties en agrarisch vastgoed zijn we nu marktleider in de regio. Google Ads voor specifieke niches werkt uitstekend.' },
    { name: 'Achterhoek Installateurs', rating: 5, text: 'Warmtepompen in oude boerderijen is onze expertise. We domineren nu de zoekresultaten van Lochem tot Ruurlo.' },
    { name: 'Dierenkliniek Berkelstreek', rating: 4.5, text: 'Veehouders en paardenhouders uit de hele gemeente Lochem weten ons te vinden. De 24/7 bereikbaarheid online is essentieel.' },
  ]

  return (
    <>
      {/* SEO Meta tags worden via layout.js geregeld */}

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Achterhoek bedrijven groeien met authentieke kracht</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Landgoed marketing met karakter</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Benut de rijke historie en groene charme van Almen</strong><br />
              Als marketing specialist voor <b>Almen en de Berkelstreek</b> verbind ik de kracht van landgoederen, het Pieterpad en de sterke maakindustrie. Van havezate tot hightech - ik positioneer jullie uniek in de Achterhoek.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik toeristen via Pieterpad & kastelen routes</li>
              <li>✓ B2B marketing voor Lochem maakindustrie</li>
              <li>✓ Duitse toeristen via grensregio campagnes</li>
              <li>✓ <b>Achterhoek SEO</b> voor landgoederen & horeca</li>
              <li>✓ Stedendriehoek bereik: Apeldoorn-Deventer-Zutphen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Achterhoek cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Marketing expert voor ondernemers in gemeente Lochem</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Achterhoek - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Expert Achterhoek" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing tussen landgoederen en maakindustrie"
          subtitle="Authentieke Achterhoek meets moderne business"
          features={[
            {
              badge: "Landgoed Marketing",
              title: "Toerisme & Recreatie Expert",
              description: "Havezate de Ehze, kasteel Huis Almen - de rijke historie trekt bezoekers. Ik positioneer jullie als dé bestemming voor quality time in de Achterhoek, van trouwerijen tot Pieterpad wandelaars.",
              visualTitle: "Kastelen Route",
              visualSubtitle: "8 Landgoederen bereik",
              image: masterSeoImage
            },
            {
              badge: "Maakindustrie B2B",
              title: "Technische Sector Specialist",
              description: "Lochem staat bekend om metaalbewerking en techniek. Met gerichte B2B campagnes bereik je opdrachtgevers in de hele stedendriehoek. Van prototype tot serieproductie - worden gevonden door de juiste beslissers.",
              visualTitle: "Stedendriehoek",
              visualSubtitle: "50.000+ bedrijven",
              image: keywordResearchImage
            },
            {
              badge: "Duitse Markt",
              title: "Grensregio Toerisme",
              description: "Duitse toeristen waarderen de rust en authenticiteit van de Achterhoek. Met tweetalige SEO en campagnes trek je kampeerders, fietsers en wandelaars uit Münsterland en het Ruhrgebied.",
              visualTitle: "100km Duitse Grens",
              visualSubtitle: "5 miljoen inwoners",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Achterhoek ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>authentieke marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Van Berkel tot IJssel: <span className="bg-[#F7D8FA] px-2 rounded italic">Achterhoek Marketing</span>
              </h2>
              <p className="text-xl text-gray-600">
                Landgoederen, maakindustrie, toerisme of lokale diensten - profiteer van de unieke positie tussen natuur en stedelijke centra.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Achterhoek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Berkelstreek</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten in Lochem, Zutphen en Deventer. Specialistische SEO voor toerisme, techniek en landelijk wonen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Pieterpad & wandelroutes SEO</li>
                  <li>✓ Technische B2B vindbaarheid</li>
                  <li>✓ Landgoed & evenementen marketing</li>
                  <li>✓ Duitse zoektermen optimalisatie</li>
                </ul>
              </div>
              {/* Google Ads Lochem */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Stedendriehoek Expert
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Achterhoek</h3>
                <p className="text-gray-600 mb-6">
                  Trek bezoekers uit Apeldoorn, Deventer en Arnhem. Seizoensgerichte campagnes voor toerisme en B2B voor industrie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Toerisme hoogseizoen campagnes</li>
                  <li>✓ B2B maakindustrie targeting</li>
                  <li>✓ Event & trouwlocatie promotie</li>
                  <li>✓ Duitse toeristencampagnes</li>
                </ul>
              </div>
              {/* Achterhoek Website */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Landelijk Website Design</h3>
                <p className="text-gray-600 mb-6">
                  Websites die de Achterhoek sfeer ademen. Perfect voor landgoederen, B&B's, technische bedrijven en streekproducenten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Sfeervolle landelijke uitstraling</li>
                  <li>✓ Meertalig voor Duitse gasten</li>
                  <li>✓ B2B portals voor industrie</li>
                  <li>✓ Boekingsmodules voor recreatie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">Achterhoek marketing</span>
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is Almen interessant voor marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Almen combineert het beste van de Achterhoek: historische landgoederen zoals de Ehze, het beroemde Pieterpad, én nabijheid tot de sterke maakindustrie van Lochem. Deze mix trekt zowel toeristen (wandelaars, trouwlocaties) als zakelijke klanten (techniek, logistiek). Met de juiste marketing tap je beide markten aan.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe bereik ik Duitse toeristen vanuit Almen?</summary>
                <p className="mt-4 text-gray-600">
                  Duitse toeristen uit Münsterland en het Ruhrgebied zoeken rust, natuur en authenticiteit - precies wat de Achterhoek biedt. Ik creëer Duitse landingspagina's, optimaliseer voor zoektermen zoals "Urlaub Achterhoek" en "Radfahren Holland", en adverteer gericht in Duitse grensregio's. Vooral kampeerders en fietsers zijn een goudmijn.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke sectoren floreren in gemeente Lochem?</summary>
                <p className="mt-4 text-gray-600">
                  De maakindustrie (metaalbewerking, techniek) is sterk vertegenwoordigd. Toerisme groeit dankzij landgoederen en wandelroutes. Agrarische bedrijven met nevenactiviteiten (camping, streekproducten) doen het uitstekend. Trouwlocaties en evenemententerreinen profiteren van de romantische setting. Met gerichte marketing bereik je precies jouw doelgroep.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost marketing voor een Achterhoek bedrijf?</summary>
                <p className="mt-4 text-gray-600">
                  Voor toeristische ondernemingen start SEO vanaf €700 per maand, inclusief Duitse optimalisatie. B2B bedrijven in de maakindustrie investeren gemiddeld €900 in SEO plus €600 voor LinkedIn campagnes. Google Ads werkt vanaf €500 budget voor lokaal, €800+ voor stedendriehoek bereik. Websites variëren van €2.500 (basis) tot €7.500 (meertalig met boekingssysteem).
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe concurreer ik met grote steden zoals Zutphen?</summary>
                <p className="mt-4 text-gray-600">
                  Niet concurreren maar complementeren! Waar Zutphen stedelijk is, bied jij rust en ruimte. Positioneer je als "5 minuten van Zutphen, werelden van verschil". Benadruk gratis parkeren, persoonlijke service, authentieke beleving. Veel stedelingen zoeken juist de kleinschaligheid en gastvrijheid die Almen biedt. Dat is je kracht.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Werkt online marketing voor B2B in de Achterhoek?</summary>
                <p className="mt-4 text-gray-600">
                  Absoluut! De maakindustrie in Lochem is sterk maar vaak onzichtbaar online. Met technische SEO, LinkedIn targeting en Google Ads bereik je decision makers in Apeldoorn, Deventer en Enschede. Toon je specialisme, certificeringen en lokale cases. B2B kopers waarderen de no-nonsense Achterhoek mentaliteit en korte lijnen.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om heel <span className="bg-[#F7D8FA] px-2 rounded italic">gemeente Lochem te domineren</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van landgoed tot fabriek, van Pieterpad tot stedendriehoek - laat je Achterhoek bedrijf groeien met authentieke marketing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek de kansen voor jouw Achterhoek onderneming.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel sparren over toerisme of B2B strategie? App me!</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Specialist Achterhoek & Stedendriehoek</h3>
              <p className="text-gray-600">
                Lochem • Zutphen • Deventer • Borculo • Ruurlo • Vorden • Warnsveld • Gorssel • Harfsen • Laren • Barchem • Eefde
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}