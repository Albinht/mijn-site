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

export default function MarketingGulpenWittem() {
  // Authentieke Gulpen-Wittem reviews met Heuvelland context
  const dutchReviews = [
    { name: 'Hotel Restaurant Slenaken', rating: 5, text: 'Ons hotel in Slenaken ontvangt nu wandelaars uit heel Nederland en België. De meertalige SEO strategie werkt perfect voor het Drielandenpunt!' },
    { name: 'Gulpener Bierbrouwerij Tours', rating: 5, text: 'Online boekingen voor rondleidingen zijn verviervoudigd! We trekken nu bierliefhebbers uit heel Europa naar onze brouwerij.' },
    { name: 'Camping Mechelen', rating: 4.5, text: 'Van kleine camping tot hotspot voor fietsers en wandelaars. Duitse en Belgische gasten vinden ons nu perfect via Google.' },
    { name: 'Restaurant Eys', rating: 5, text: 'Ons terras met uitzicht op het Heuvelland is nu altijd volgeboekt. Gasten uit Maastricht, Aken en Luik reserveren online.' },
    { name: 'Fietsverhuur Gulpen', rating: 5, text: 'E-bike verhuur explodeert dankzij top rankings voor "fietsen Heuvelland". Van dagtochten tot meerdaagse arrangementen.' },
    { name: 'B&B Wijlre', rating: 5, text: 'Ons kasteel B&B in Wijlre wordt nu gevonden door internationale gasten. De Instagram koppeling brengt veel romantische weekendjes.' },
  ]
  const dutchMoreReviews = [
    { name: 'Wijnboerderij Fromberg', rating: 5, text: 'Onze Limburgse wijnen verkopen we nu landelijk online. Proeverijen zijn maanden vooruit volgeboekt via de website.' },
    { name: 'Bouwbedrijf Heuvelland', rating: 4.5, text: 'Restauraties van vakwerkhuizen en nieuwbouw in heel Zuid-Limburg. De portfolio op de website doet wonderen.' },
    { name: 'Tandarts Gulpen Centrum', rating: 5, text: 'Patiënten uit alle 11 kerkdorpen plus grensstreek België. De meertalige website (NL/DE/FR) is een schot in de roos.' },
    { name: 'Supermarkt Wittem', rating: 5, text: 'Online boodschappen bezorgen in heel de gemeente plus kampeerders. De seizoenscampagnes werken uitstekend.' },
    { name: 'Klooster Wittem Events', rating: 4.5, text: 'Van pelgrimages tot zakelijke events - het historische klooster wordt nu breed gevonden. Vooral de Duitse markt groeit.' },
    { name: 'Rijschool Heuvelland', rating: 5, text: 'Leerlingen uit Gulpen-Wittem, Vaals en zelfs Maastricht. De online theorie-module is een groot succes.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Gulpen-Wittem | Marketing Heuvelland | Gulpener Regio</title>
        <meta
          name="description"
          content="SEO Specialist Gulpen-Wittem maakt jouw bedrijf zichtbaar in het Heuvelland. Profiteer van toerisme, Gulpener brouwerij en Drielandenpunt. Groei internationaal!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/gulpen-wittem" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Gulpen-Wittem: parel van het Limburgse Heuvelland</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van Gulpener brouwerij tot Drielandenpunt</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Met 14.000 inwoners verspreid over 11 pittoreske kerkdorpen is Gulpen-Wittem het kloppend hart van het Zuid-Limburgse Heuvelland.</strong><br />
              Deze gemeente combineert wereldberoemde attracties zoals de Gulpener Bierbrouwerij met authentieke dorpjes als Slenaken, Eys, Mechelen en Wijlre. Het glooiende landschap, de nabijheid van het Drielandenpunt en de rijke historie trekken jaarlijks honderdduizenden toeristen. Als <b>SEO specialist Gulpen-Wittem</b> weet ik hoe je profiteert van deze toeristische goudmijn én de lokale gemeenschap bedient. Van horeca tot recreatie, van ambacht tot retail - ik positioneer je bedrijf in deze unieke regio.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik 500.000+ toeristen per jaar in het Heuvelland</li>
              <li>✓ Profiteer van Gulpener Brouwerij met 100.000+ bezoekers</li>
              <li>✓ Drielandenpunt strategie: target Nederland, België én Duitsland</li>
              <li>✓ <b>Marketing bureau Gulpen-Wittem</b> met internationale expertise</li>
              <li>✓ Specialist in toerisme, horeca én lokale dienstverlening</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei in het Heuvelland <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk toeristische successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in alle 11 kernen: Gulpen • Wittem • Slenaken • Eys • Mechelen • Wijlre • Wahlwiller • Partij • Reijmerstok • Ingber • Beertsenhoven</p>
            <p className="mt-2 text-xs text-green-600">📞 Gratis advies? <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Gulpen-Wittem - Marketing Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Heuvelland" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van brouwerij tot Drielandenpunt: heel Gulpen-Wittem online"
          subtitle="14.000 inwoners, 500.000+ toeristen, grenzeloze mogelijkheden"
          features={[
            {
              badge: "Heuvelland toerisme",
              title: "SEO voor recreatie & horeca",
              description: "Het Heuvelland trekt wandelaars, fietsers en natuurliefhebbers uit binnen- en buitenland. Met de Gulpener Brouwerij, talloze kastelen en het Drielandenpunt heeft Gulpen-Wittem gouden troeven. Ik positioneer hotels, restaurants, B&B's en activiteiten perfect voor deze internationale toeristenstroom - in Nederlands, Duits én Frans.",
              visualTitle: "Toeristische toppositie",
              visualSubtitle: "3-talig bereik",
              image: masterSeoImage
            },
            {
              badge: "Gulpener marketing",
              title: "Google Ads voor lokaal & regionaal",
              description: "Target slim: 14.000 locals voor dagelijkse diensten, 500.000+ jaarlijkse toeristen voor horeca en recreatie, plus de hele grensregio. Met Maastricht op 15km, Aken op 20km en Luik op 30km bereik je een enorm internationaal publiek. Perfect voor elke ondernemer die wil groeien.",
              visualTitle: "Grensoverschrijdend",
              visualSubtitle: "BE-NL-DE bereik",
              image: keywordResearchImage
            },
            {
              badge: "Authentiek Limburgs",
              title: "Websites met Heuvelland charme",
              description: "Vakwerkhuizen, glooiende heuvels, Limburgse gastvrijheid - Gulpen-Wittem heeft een unieke identiteit. Je website moet die authentieke sfeer uitstralen terwijl het internationaal aanspreekt. Ik creëer sites die het verhaal van het Heuvelland vertellen en perfect converteren voor toeristen én locals.",
              visualTitle: "Lokaal authentiek",
              visualSubtitle: "Internationaal appeal",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Gulpen-Wittem ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>Heuvelland marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing op maat voor <span className="bg-[#F7D8FA] px-2 rounded italic">Gulpen-Wittem</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van Gulpener Brouwerij partners tot dorpswinkels, van luxe hotels tot camping - 
                elke ondernemer in het Heuvelland krijgt een strategie die werkt.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Gulpen-Wittem */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Heuvelland</h3>
                <p className="text-gray-600 mb-6">
                  Domineer in heel Zuid-Limburg. Van Gulpen tot Vaals, 
                  van Maastricht tot over de grens - word overal gevonden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top rankings 11 kerkdorpen</li>
                  <li>✓ Gulpener & toerisme SEO</li>
                  <li>✓ Meertalige optimalisatie (NL/DE/FR)</li>
                  <li>✓ Seizoensgebonden strategie</li>
                </ul>
              </div>
              {/* Google Ads Gulpen-Wittem */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Gulpen-Wittem
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Drielandenpunt</h3>
                <p className="text-gray-600 mb-6">
                  Target 500.000+ toeristen, 14.000 locals en internationale 
                  bezoekers uit België en Duitsland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Toerisme campagnes (apr-okt)</li>
                  <li>✓ Grensregio targeting (BE/DE)</li>
                  <li>✓ Gulpener gerelateerde ads</li>
                  <li>✓ Wandel/fiets route marketing</li>
                </ul>
              </div>
              {/* Website & Branding */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Limburgse Website Design</h3>
                <p className="text-gray-600 mb-6">
                  Authentieke Heuvelland websites die warmte uitstralen 
                  en internationaal aanspreken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ 3-talig design (NL/DE/FR)</li>
                  <li>✓ Toerisme booking integratie</li>
                  <li>✓ Foto's Heuvelland landschap</li>
                  <li>✓ Limburgse gastvrijheid online</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Laat je bedrijf bloeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Gulpen-Wittem</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Gulpener Brouwerij tot Drielandenpunt - groei waar het Heuvelland bruist.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Ontdek jouw groeikansen in het Heuvelland tijdens een gratis adviesgesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Stel je vraag of plan een afspraak voor Heuvelland marketing advies.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied vanuit Gulpen-Wittem</h3>
              <p className="text-gray-600">
                <strong>Gemeente kernen:</strong> Gulpen • Wittem • Slenaken • Eys • Mechelen • Wijlre • Wahlwiller • Partij • Reijmerstok<br/>
                <strong>Directe regio:</strong> Vaals • Simpelveld • Margraten • Noorbeek • Meerssen<br/>
                <strong>Steden bereik:</strong> Maastricht (15km) • Aken/DE (20km) • Luik/BE (30km) • Heerlen (15km)<br/>
                <strong>Toerisme:</strong> Drielandenpunt • Gulpener Brouwerij • Heuvelland • Mergelland Route
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}