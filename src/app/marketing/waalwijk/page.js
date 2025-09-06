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

export default function MarketingWaalwijk() {
  // Lokale Waalwijk reviews
  const dutchReviews = [
    { name: 'Van Oirschot Schoenen B.V.', rating: 5, text: 'Dankzij gerichte marketing bereiken we nu klanten in heel Europa met onze kwaliteitsschoenen. Online verkoop is gestegen met 300% sinds de campagne.' },
    { name: 'Logistiek Centrum Waalwijk', rating: 5, text: 'Door lokale SEO en B2B-targeting krijgen we nu aanvragen van internationale bedrijven voor onze distributiediensten. Perfecte ligging A59/N261.' },
    { name: 'Restaurant De Heerlijkheid', rating: 4.5, text: 'Met lokale marketing trekken we nu gasten uit Kaatsheuvel, Drunen en zelfs Den Bosch. Reserveringen via Google verdubbeld.' },
    { name: 'Waalwijk Manufacturing Solutions', rating: 5, text: 'Als B2B-producent hadden we internationale exposure nodig. Nu werken we voor klanten wereldwijd dankzij sterke online positioning.' },
    { name: 'Schoenmakerij Van der Berg', rating: 4.5, text: 'De traditionele schoenmakerij krijgt nu ook online klanten. Van reparaties tot maatwerk - de locals vinden ons via Google.' },
    { name: 'Hotel Waalwijk Business', rating: 5, text: 'Zakelijke gasten van bedrijven in industrieterrein boeken nu direct online. Bezetting gestegen met 80% door digitale marketing.' },
  ]
  const dutchMoreReviews = [
    { name: 'Transport Brabant Waalwijk', rating: 5, text: 'Door gerichte B2B-marketing vinden bedrijven ons nu voor europese transporten. Route A59 naar Rotterdam/Duitsland ideaal gelegen.' },
    { name: 'Kapsalon Beauty Waalwijk', rating: 4.5, text: 'Klanten uit Loon op Zand, Heusden en omgeving boeken nu online. De agenda loopt vol door lokale SEO-optimalisatie.' },
    { name: 'Bouwbedrijf Brabant Constructie', rating: 5, text: 'Projecten in de regio lopen binnen via onze website. Van nieuwbouw tot renovatie - Waalwijk en omgeving kent ons nu online.' },
    { name: 'Automatiseringsbedrijf Tech Solutions', rating: 4.5, text: 'MKB-bedrijven in de regio vinden ons nu voor IT-oplossingen. Google Ads campagne levert constant nieuwe B2B-klanten op.' },
    { name: 'Groothandel Schoenen Europa', rating: 5, text: 'Door internationale SEO bereiken we retailers in heel Europa vanuit Waalwijk. Heritage van schoenenindustrie gekoppeld aan moderne marketing.' },
    { name: 'Tandartspraktijk Centrum Waalwijk', rating: 5, text: 'Patiënten uit hele regio Heusden-Waalwijk boeken nu online afspraken. Wachtlijst door verhoogde online vindbaarheid.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Digital Marketing Bureau Waalwijk | SEO Specialist Noord-Brabant Logistiek</title>
        <meta
          name="description"
          content="Marketing specialist in Waalwijk, hart van logistiek Noord-Brabant. Expert in schoenenindustrie, manufacturing, B2B transport. A59/N261 corridor dominantie."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/waalwijk" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Waalwijk</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Logistiek & Manufacturing Expert</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van schoenenindustrie tot logistieke hub - Waalwijk als Noord-Brabantse motor</strong><br />
              Als marketing specialist in deze historische industriestad (48.000 inwoners) begrijp ik de unieke positie van Waalwijk. Strategisch gelegen tussen A59 en N261, met roots in de schoenenindustrie en nu een belangrijk logistiek centrum. Ik help manufacturing bedrijven, logistieke dienstverleners en B2B-ondernemers domineren in dit competitieve corridor.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Dominantie in logistiek en manufacturing B2B-zoektermen</li>
              <li>✓ Expertise in industrie-marketing en supply chain targeting</li>
              <li>✓ Specialisatie in A59/N261 corridor bedrijven</li>
              <li>✓ Kennis van regio: Kaatsheuvel, Drunen, Loon op Zand, Heusden</li>
              <li>✓ Focus op heritage-industrie en moderne logistiek</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei in Waalwijk <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk B2B Cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Waalwijk, Heusden regio & internationale B2B marketing</p>
            <p className="mt-2 text-xs text-green-600">📍 Lokaal aanwezig in hart van Noord-Brabant, wereldwijd actief</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Resultaten Waalwijk Logistiek Sector" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Waalwijk Industrie" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Waalwijk industrie-marketing die concurrenten overtreft"
          subtitle="Van schoenenindustrie heritage tot moderne logistiek - jouw digitale dominantie in Noord-Brabant"
          features={[
            {
              badge: "Logistiek SEO",
              title: "B2B Manufacturing Dominantie",
              description: "In een regio waar logistiek, manufacturing en distributie samenkomen, positioneer ik jouw bedrijf als dé autoriteit. Perfect voor B2B-industrie, transport en supply chain bedrijven die europese klanten willen bereiken.",
              visualTitle: "Industry Leadership",
              visualSubtitle: "Manufacturing dominantie",
              image: masterSeoImage
            },
            {
              badge: "Europa B2B Ads",
              title: "Internationale Supply Chain Campaigns",
              description: "Target europese bedrijven die logistieke partners zoeken in de A59/N261-corridor. Van Duitse automobielfabrieken tot Belgische retailers - bereik de juiste inkoopdirecteuren.",
              visualTitle: "European Reach",
              visualSubtitle: "Supply Chain B2B",
              image: keywordResearchImage
            },
            {
              badge: "Heritage Digital",
              title: "Industrie & Traditie Websites",
              description: "Websites die Waalwijk's industriële heritage combineren met moderne efficiency. Van familiebedrijven tot internationale distributeurs - ik vertaal traditie naar overtuigende digitale ervaringen.",
              visualTitle: "Heritage & Modern",
              visualSubtitle: "Industrial focus",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Waalwijk & Heusden regio</span> domineren online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor <span className="bg-[#F7D8FA] px-2 rounded italic">Waalwijk</span> industrie-ondernemers
              </h2>
              <p className="text-xl text-gray-600">
                Van traditionele schoenmakerij tot moderne logistiek - ik ken de uitdagingen van ondernemen in Noord-Brabant's industriële hart
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Manufacturing SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Manufacturing SEO</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten voor industriële termen, B2B-manufacturing en supply chain queries. Perfect voor bedrijven die klanten willen bereiken in de Benelux en Duitsland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ B2B industrie keyword dominantie Europa</li>
                  <li>✓ A59/N261 corridor local SEO</li>
                  <li>✓ Manufacturing SEO (NL/DE/FR/EN)</li>
                  <li>✓ Supply chain autoriteit opbouw</li>
                </ul>
              </div>
              {/* Logistiek Ads */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Logistiek B2B Focus
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Transport & Logistiek</h3>
                <p className="text-gray-600 mb-6">
                  Bereik bedrijven die logistieke partners zoeken in de strategische A59-corridor. Van warehousing tot internationale transporten - jouw advertenties waar de deals gemaakt worden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ International B2B transport targeting</li>
                  <li>✓ LinkedIn en Google Ads integration</li>
                  <li>✓ Supply chain event marketing</li>
                  <li>✓ Lead generation voor enterprise inkoop</li>
                </ul>
              </div>
              {/* Heritage Websites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Industriële Heritage Websites</h3>
                <p className="text-gray-600 mb-6">
                  Websites die Waalwijk's industriële tradities combineren met moderne efficiency. Van familiebedrijven tot internationale B2B-portals - traditie gecombineerd met digitale innovatie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ B2B manufacturing platform design</li>
                  <li>✓ Supply chain en logistics portals</li>
                  <li>✓ Multi-language B2B websites</li>
                  <li>✓ Heritage branding en moderne UX</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom kiezen voor een <span className="bg-[#F7D8FA] px-2 rounded italic">marketing specialist</span> die Waalwijk's industriële DNA kent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industriële & logistieke expertise</h3>
                <p className="text-gray-600">
                  Waalwijk is uniek door zijn rijke geschiedenis in de schoenenindustrie en huidige positie als logistiek centrum. De strategische ligging tussen A59 en N261 maakt het een belangrijke schakel in europese supply chains. Met industrieterreinen vol manufacturing en distributie heeft de stad een eigen B2B-dynamiek. Ik weet precis hoe je deze industriële kracht online optimaliseert voor business success.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Regionale & Heusden kennis</h3>
                <p className="text-gray-600">
                  Van de historische schoenenfabrieken tot moderne logistieke hubs - ik ken de economische karakteristieken van de Waalwijk-Heusden regio. Of je nu europese B2B-klanten, lokale MKB-partners of supply chain-professionals wilt bereiken, ik ontwikkel de strategie die past bij jouw industrie en groeiambities in Noord-Brabant's economische corridor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">marketing in Waalwijk</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is B2B marketing anders voor industriële bedrijven in Waalwijk?</summary>
                <p className="mt-4 text-gray-600">
                  Waalwijk concurreert niet lokaal maar in europese B2B-markten. Industriële bedrijven hier verkopen aan fabrieken in Duitsland, distributeurs in België en retailers in Frankrijk. Daarom focus ik op internationale SEO, LinkedIn targeting voor inkoopdirecteuren en content die industriële decision makers overtuigt. Van kleine familiebedrijven tot grote logistieke spelers - iedereen moet opvallen in international supply chains.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke bedrijven in Waalwijk hebben het meest baat bij digitale marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Manufacturing bedrijven op de industrieterreinen, logistieke dienstverleners rond A59/N261, en B2B-suppliers die internationale klanten bedienen profiteren het meest. Ook gespecialiseerde dienstverlening voor industrie, transport & logistiek consultants en bedrijven met heritage die moderniseren. De sterke B2B-focus maakt premium marketing-investeringen zeer winstgevend.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost B2B marketing voor industriële bedrijven in Waalwijk?</summary>
                <p className="mt-4 text-gray-600">
                  Voor B2B-industriële bedrijven in Waalwijk start marketing vanaf €800 per maand vanwege langere sales cycles maar hogere deal values. Dit is inclusief LinkedIn ads, industriële SEO en internationale content. Manufacturing bedrijven met europese ambities investeren €1500-€3000 per maand. ROI is vaak binnen 6-12 maanden positief door hoge contractwaarden in de sector.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe verschilt marketing voor Waalwijkse bedrijven van andere Noord-Brabantse steden?</summary>
                <p className="mt-4 text-gray-600">
                  Waalwijk marketing vereist industrie-focus, supply chain expertise en heritage-bewustzijn. We targeten niet consumenten maar B2B-inkoopdirecteuren, logistieke managers en internationale distributeurs. Content moet technische specificaties combineren met bedrijfswaarde. Local SEO richt zich op A59-corridor en industrieterrein-keywords voor maximum B2B-impact.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Kunnen jullie websites maken die industriële betrouwbaarheid uitstralen?</summary>
                <p className="mt-4 text-gray-600">
                  Absoluut! We specialiseren in B2B-websites die industriële kwaliteit en betrouwbaarheid communiceren. Denk aan productcatalogi voor manufacturing, supply chain-integraties, en certificatie-showcases. Alles geoptimaliseerd voor internationale B2B-conversies en gebouwd om te groeien met jouw bedrijf.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Helpen jullie met internationale expansion voor Waalwijkse industriële bedrijven?</summary>
                <p className="mt-4 text-gray-600">
                  Ja, dat is onze kracht! We helpen Waalwijkse bedrijven expanderen naar Duitsland, België en andere EU-markten. Met geo-targeted campaigns, industriële content en B2B-SEO strategieën. Perfect voor bedrijven die hun Noord-Brabantse productiekwaliteit willen uitrollen in europese supply chains.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Werken jullie samen met industrieterrein-verenigingen en logistieke clusters?</summary>
                <p className="mt-4 text-gray-600">
                  We werken regelmatig samen met bedrijven op de industrieterreinen en logistieke clusters in de A59-corridor. Van MKB-manufacturing tot internationale distributiecentra - we begrijpen de unique challenges van industrieel ondernemen in het Waalwijk-Heusden ecosysteem en helpen bij gezamenlijke marketing initiatieven.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Waalwijk & Europa</span> te domineren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van A59-corridor tot internationale supply chains - ik help je groeien in het B2B-ecosysteem
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Liever direct schakelen? Bel voor een gratis strategiegesprek over jouw groei in de industriële sector.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Snel een vraag? Stuur een WhatsApp en krijg binnen een uur antwoord.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Waalwijk - Online Marketing Bureau Noord-Brabant & Omgeving</h3>
              <p className="text-gray-600">
                Waalwijk • Kaatsheuvel • Drunen • Loon op Zand • Heusden • Vught • Oisterwijk • Tilburg • Den Bosch • A59 Corridor • N261 • Industrieterrein De Oude Dreef • Bedrijvenpark Hoogeind • Sprang-Capelle • Oosteind
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}