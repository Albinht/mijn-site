'use client'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingWestervoort() {
  // Authentieke Westervoort reviews met industriële en lokale context
  const dutchReviews = [
    { name: 'Metaalbedrijf IJssel', rating: 5, text: 'Vanuit ons bedrijf op industrieterrein Rivierweg krijgen we nu opdrachten uit heel Oost-Nederland. De B2B marketing werkt uitstekend!' },
    { name: 'Restaurant Zalencentrum', rating: 5, text: 'Ons restaurant aan de Dorpstraat trekt nu gasten uit Arnhem, Duiven en Zevenaar. Vooral voor feesten en partijen worden we perfect gevonden.' },
    { name: 'Transportbedrijf Westervoort', rating: 4.5, text: 'Met onze ligging tussen A12 en N336 zijn we ideaal voor logistiek. De SEO strategie levert wekelijks nieuwe zakelijke klanten op.' },
    { name: 'Kapper Emmastraat', rating: 5, text: 'Klanten uit heel Westervoort en zelfs uit Arnhem-Zuid komen nu naar onze salon. De Instagram koppeling werkt vooral goed voor jonge klanten.' },
    { name: 'Bouwmarkt De Pals', rating: 5, text: 'Online bestellingen vanuit de hele Liemers regio. Van doe-het-zelvers tot aannemers - iedereen vindt ons nu makkelijk.' },
    { name: 'Fysiotherapie Westervoort Zuid', rating: 4.5, text: 'Patiënten uit Westervoort, Duiven en Arnhem-Zuid vullen onze agenda. Top ranking voor "fysiotherapeut Westervoort" helpt enorm.' },
  ]
  const dutchMoreReviews = [
    { name: 'Autogarage Rijksweg', rating: 5, text: 'Strategische locatie aan de N336 betekent veel passanten. De Google Ads campagne voor APK en onderhoud werkt perfect.' },
    { name: 'Tandartspraktijk Het Dorpsplein', rating: 5, text: 'Van jong tot oud uit heel Westervoort en omgeving. De online afspraken module heeft onze praktijk echt efficiënter gemaakt.' },
    { name: 'Makelaardij De Liemers', rating: 4.5, text: 'Huizen in Westervoort, Duiven en Zevenaar verkopen we nu sneller. De lokale SEO strategie maakt het verschil in deze markt.' },
    { name: 'Sportschool RiverFit', rating: 5, text: 'Leden uit Westervoort én forenzen die werken op de industrieterreinen. De bedrijfsfitness campagne is een groot succes.' },
    { name: 'Elektriciën IJsselstreek', rating: 5, text: 'Van particuliere klussen in Westervoort tot grote projecten in Arnhem Business Park. We worden voor alles gevonden.' },
    { name: 'Bloemenwinkel Naeff', rating: 4.5, text: 'Online bestellingen uit heel de Liemers voor boeketten en rouwstukken. De website met bezorgservice werkt geweldig.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Westervoort | Marketing Bureau Liemers | Online Groei</title>
        <meta
          name="description"
          content="SEO Specialist Westervoort zorgt voor meer klanten uit de Liemers regio. Profiteer van de strategische ligging tussen Arnhem en Duiven. Groei online!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/westervoort" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Westervoort: industriële kracht aan de IJssel</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Waar Arnhem en Liemers elkaar ontmoeten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Met 15.000 inwoners en een strategische ligging tussen Arnhem en de Liemers is Westervoort dé verbindende schakel in de regio.</strong><br />
              Deze Gelderse gemeente aan de IJssel combineert wonen, werken en industrie op een unieke manier. Met industrieterreinen langs de Rivierweg en Veerweg, directe toegang tot de A12 en N336, plus de nabijheid van Arnhem (5km) biedt Westervoort volop kansen. Als <b>SEO specialist Westervoort</b> ken ik de lokale dynamiek: van industriële bedrijven tot dorpse middenstanders, van logistieke dienstverleners tot lokale horeca. Ik zorg dat jouw bedrijf opvalt in deze groeiende gemeente.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik 15.000 inwoners plus 400.000+ uit regio Arnhem-Liemers</li>
              <li>✓ Profiteer van industrieterreinen met 200+ bedrijven</li>
              <li>✓ Strategische ligging A12, N336 en spoorlijn Arnhem-Doetinchem</li>
              <li>✓ <b>Marketing bureau Westervoort</b> met kennis van B2B en B2C</li>
              <li>✓ Specialist in industrie, logistiek én lokale dienstverlening</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Ontdek jouw groeipotentieel <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Liemers successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in: Westervoort centrum • Industriegebied • Wijken Noord & Zuid</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Westervoort - Groeigrafieken" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Expert Westervoort" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van IJssel tot industrie: Westervoort digitaal dominant"
          subtitle="15.000 inwoners, 200+ bedrijven, strategische ligging in de Liemers"
          features={[
            {
              badge: "Industriële focus",
              title: "B2B SEO voor bedrijventerreinen",
              description: "Westervoort heeft uitgebreide industrieterreinen langs de Rivierweg en Veerweg met 200+ bedrijven. Ik positioneer jouw B2B diensten perfect voor deze industriële markt. Van metaalbewerking tot logistiek, van groothandel tot zakelijke dienstverlening - word gevonden door de bedrijven die jouw expertise nodig hebben.",
              visualTitle: "B2B dominantie",
              visualSubtitle: "Industrieel bereik",
              image: masterSeoImage
            },
            {
              badge: "Liemers connectie",
              title: "Google Ads voor regio targeting",
              description: "Target slim: 15.000 Westervoorters voor lokale diensten, 160.000 Arnhemmers op 5km afstand, plus heel de Liemers (Duiven, Zevenaar, Didam). Met de A12 en N336 voor de deur bereik je ook forenzen en passanten. Perfect voor retail, horeca en dienstverlening.",
              visualTitle: "Regionaal bereik",
              visualSubtitle: "400.000+ potentie",
              image: keywordResearchImage
            },
            {
              badge: "IJsselfront ontwikkeling",
              title: "Moderne websites voor groei",
              description: "Westervoort transformeert met nieuwe woonwijken aan het IJsselfront en modernisering van het centrum. Je website moet meegroeien met deze ontwikkeling. Ik creëer sites die de industriële kracht combineren met de groeiende woonkwaliteit - aantrekkelijk voor zowel zakelijke als particuliere klanten.",
              visualTitle: "Toekomstgericht",
              visualSubtitle: "Groei mee met Westervoort",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Westervoortse bedrijven groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>strategische marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor ondernemend <span className="bg-[#F7D8FA] px-2 rounded italic">Westervoort</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van industriële bedrijven aan de Rivierweg tot winkels in het centrum, 
                van logistieke dienstverleners tot lokale horeca - maatwerk voor elke ondernemer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Westervoort */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Liemers</h3>
                <p className="text-gray-600 mb-6">
                  Domineer in Westervoort én de hele Liemers regio. Van Arnhem-Zuid 
                  tot Doetinchem - word overal gevonden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top rankings "bedrijf Westervoort"</li>
                  <li>✓ B2B industrieterrein SEO</li>
                  <li>✓ Lokale diensten optimalisatie</li>
                  <li>✓ Regionale Liemers strategie</li>
                </ul>
              </div>
              {/* Google Ads Westervoort */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Westervoort
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Arnhem-Liemers</h3>
                <p className="text-gray-600 mb-6">
                  Target 15.000 locals, 400.000+ regiobewoners en duizenden 
                  forenzen via A12 met slimme campagnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ B2B campagnes industrie</li>
                  <li>✓ Lokale diensten targeting</li>
                  <li>✓ Geo-targeting A12 corridor</li>
                  <li>✓ Shopping ads centrum</li>
                </ul>
              </div>
              {/* Website & Branding */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Design Westervoort</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites die de industriële kracht en groeiende 
                  woonkwaliteit van Westervoort perfect weergeven.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ B2B geoptimaliseerd design</li>
                  <li>✓ Mobiel vriendelijke sites</li>
                  <li>✓ Snelle laadtijden</li>
                  <li>✓ Lokale Gelderse identiteit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om Westervoort te veroveren met <span className="bg-[#F7D8FA] px-2 rounded italic">effectieve marketing</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van industrieterrein tot dorpscentrum - ik help je groeien waar het telt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel voor advies</h3>
                <p className="text-gray-600 mb-4">Bespreek vrijblijvend jouw groeimogelijkheden in de Liemers.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Snel een vraag stellen of afspraak plannen via WhatsApp.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied vanuit Westervoort</h3>
              <p className="text-gray-600">
                <strong>Gemeente Westervoort:</strong> Centrum • Noord • Zuid • Industriegebied Rivierweg • Veerweg<br/>
                <strong>Directe regio:</strong> Duiven • Zevenaar • Arnhem-Zuid • Velp • Rheden<br/>
                <strong>Liemers:</strong> Didam • Lobith • Pannerden • Herwen • Tolkamer<br/>
                <strong>Stedelijk bereik:</strong> Arnhem (5km) • Doetinchem (20km) • Nijmegen (25km)
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}