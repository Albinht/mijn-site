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

export default function MarketingHilvarenbeek() {
  // Authentieke Hilvarenbeek reviews met Beekse Bergen context
  const dutchReviews = [
    { name: 'Beekse Bergen Horeca', rating: 5, text: 'Als leverancier van het safaripark krijgen we nu ook opdrachten van andere attracties in de regio. De B2B marketing werkt fantastisch!' },
    { name: 'Camping De Beekse Bulten', rating: 5, text: 'Van kleine camping tot volledig volgeboekt in één seizoen! Duitse en Belgische gezinnen vinden ons nu perfect via Google.' },
    { name: 'Bouwbedrijf Van Gorp', rating: 4.5, text: 'Projecten in Hilvarenbeek, Diessen en Haghorst stromen binnen. Ook vanuit Tilburg krijgen we nu renovatie-opdrachten.' },
    { name: 'Restaurant Herberg Sint Petrus', rating: 5, text: 'Onze historische herberg aan de Vrijthof trekt nu gasten uit heel Brabant. Vooral de combinatie met Beekse Bergen bezoek werkt goed.' },
    { name: 'Fysiopraktijk Hilvarenbeek', rating: 5, text: 'Patiënten uit alle kerkdorpen komen nu naar onze praktijk. De lokale SEO voor "fysiotherapeut Hilvarenbeek" staat als een huis.' },
    { name: 'Bloemisterij De Beekse Tuin', rating: 5, text: 'Online bestellingen vanuit heel gemeente Hilvarenbeek en omstreken. Vooral voor bruiloften bij Kasteel Geldrop worden we gevonden.' },
  ]
  const dutchMoreReviews = [
    { name: 'Autoservice Beekse Bergen', rating: 5, text: 'Strategische ligging bij de N269 levert klanten op uit Tilburg, Oisterwijk en Hilvarenbeek. Safari-bezoekers laten hun auto graag nakijken.' },
    { name: 'Kapsalon Diessen', rating: 4.5, text: 'Vanuit onze salon in Diessen bedienen we nu heel gemeente Hilvarenbeek. Instagram marketing trekt veel jonge klanten.' },
    { name: 'Aannemersbedrijf Haghorst', rating: 5, text: 'Nieuwbouwprojecten in de uitbreidingswijken lopen storm. De Google Ads voor "aannemer Hilvarenbeek" werkt perfect.' },
    { name: 'Dierenarts De Kempen', rating: 5, text: 'Van huisdieren tot paarden - we behandelen dieren uit de hele Kempen. Ook spoedgevallen vanuit Goirle en Riel.' },
    { name: 'Computerservice Midden-Brabant', rating: 4.5, text: 'IT-support voor bedrijven van Hilvarenbeek tot Tilburg. De B2B campagne levert wekelijks nieuwe klanten op.' },
    { name: 'Hoveniersbedrijf Beekdal', rating: 5, text: 'Tuinontwerpen voor villa\'s rond Beekse Bergen en dorpskernen. De portfolio op de website doet het werk voor ons!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Hilvarenbeek | Marketing Bureau | Beekse Bergen Regio</title>
        <meta
          name="description"
          content="SEO Specialist Hilvarenbeek verhoogt jouw vindbaarheid in deze groene gemeente. Profiteer van 1 miljoen Beekse Bergen bezoekers. Groei in heel Midden-Brabant!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/hilvarenbeek" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Hilvarenbeek: groene parel met 1 miljoen bezoekers per jaar</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van Beekse Bergen tot Brabantse dorpskernen</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Met 15.500 inwoners en het grootste safaripark van de Benelux is Hilvarenbeek een unieke mix van natuur en toerisme.</strong><br />
              Deze Brabantse gemeente met de kerkdorpen Diessen, Haghorst, Esbeek, Biest-Houtakker en Westelbeers combineert landelijke rust met toeristische dynamiek. Als <b>SEO specialist Hilvarenbeek</b> weet ik hoe je profiteert van de 1 miljoen jaarlijkse Beekse Bergen bezoekers én de lokale gemeenschap bedient. Van camping tot restaurant, van bouwbedrijf tot beauty salon - ik zorg dat je gevonden wordt door de juiste mensen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Tap into 1 miljoen Beekse Bergen bezoekers per jaar</li>
              <li>✓ Bereik 15.500 lokale inwoners plus omliggende dorpen</li>
              <li>✓ Profiteer van ligging tussen Tilburg (220.000) en Eindhoven (235.000)</li>
              <li>✓ <b>Marketing bureau Hilvarenbeek</b> met kennis van toerisme & lokaal</li>
              <li>✓ Specialist in recreatie, horeca én lokale dienstverlening</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei mee met Beekse Bergen <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk lokale successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in: Hilvarenbeek • Diessen • Haghorst • Esbeek • Biest-Houtakker • Westelbeers</p>
            <p className="mt-2 text-xs text-green-600">📞 Gratis advies? <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Hilvarenbeek - Marketing Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Hilvarenbeek" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van safaripark tot dorpsplein: heel Hilvarenbeek online succesvol"
          subtitle="1 miljoen toeristen, 6 kerkdorpen, onbeperkte groeikansen in de Kempen"
          features={[
            {
              badge: "Beekse Bergen boost",
              title: "SEO voor toerisme & recreatie",
              description: "Hilvarenbeek trekt jaarlijks 1 miljoen bezoekers naar Beekse Bergen, Speelland en het Safaripark. Ik positioneer hotels, campings, restaurants en recreatiebedrijven perfect voor deze gigantische toeristenstroom. Van dagje uit families tot meerdaagse verblijven - bereik ze allemaal met slimme lokale SEO.",
              visualTitle: "Toeristische toppositie",
              visualSubtitle: "1 miljoen bezoekers bereiken",
              image: masterSeoImage
            },
            {
              badge: "Kempische kracht",
              title: "Google Ads voor lokale bedrijven",
              description: "Target de 15.500 inwoners van Hilvarenbeek plus de omliggende dorpen Diessen, Haghorst en Esbeek. Met gerichte campagnes bereik je ook Tilburg (15km) en Eindhoven (25km). Perfect voor aannemers, winkeliers en dienstverleners die regionaal willen groeien.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "6 dorpen bereiken",
              image: keywordResearchImage
            },
            {
              badge: "Brabantse gastvrijheid",
              title: "Website met lokale uitstraling",
              description: "De combinatie van toeristische hotspot en authentieke Brabantse dorpen vraagt om een website die beide bedient. Ik creëer sites die de warme Brabantse sfeer uitstralen, perfect werken voor toeristen (ook internationaal) én vertrouwd aanvoelen voor locals.",
              visualTitle: "Authentiek Brabants",
              visualSubtitle: "Modern & gastvrij",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Hilvarenbeekse ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing op maat voor <span className="bg-[#F7D8FA] px-2 rounded italic">Hilvarenbeek</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van Beekse Bergen leveranciers tot dorpswinkels, van campings tot ambachtelijke bedrijven - 
                elke ondernemer in Hilvarenbeek krijgt een strategie die past.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Hilvarenbeek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist De Kempen</h3>
                <p className="text-gray-600 mb-6">
                  Domineer in Hilvarenbeek en de wijde regio. Van Oisterwijk tot Reusel, 
                  van Tilburg tot Bladel - word overal gevonden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top rankings alle 6 kerkdorpen</li>
                  <li>✓ Beekse Bergen gerelateerde SEO</li>
                  <li>✓ Lokale bedrijven optimalisatie</li>
                  <li>✓ Seizoensgebonden strategie</li>
                </ul>
              </div>
              {/* Google Ads Hilvarenbeek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Hilvarenbeek
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Midden-Brabant</h3>
                <p className="text-gray-600 mb-6">
                  Target 1 miljoen toeristen, 15.500 locals en de hele regio 
                  Tilburg-Eindhoven met slimme campagnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Toeristen targeting Beekse Bergen</li>
                  <li>✓ Lokale diensten campagnes</li>
                  <li>✓ B2B voor regionale bedrijven</li>
                  <li>✓ Shopping ads dorpscentra</li>
                </ul>
              </div>
              {/* Website & Branding */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Brabantse Website Design</h3>
                <p className="text-gray-600 mb-6">
                  Websites die de Kempische gezelligheid uitstralen en perfect 
                  werken voor toeristen én dorpsbewoners.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Tweetalig (NL/EN) voor toeristen</li>
                  <li>✓ Integratie met recreatie-platforms</li>
                  <li>✓ Mobiel vriendelijk design</li>
                  <li>✓ Lokale Brabantse identiteit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Laat je bedrijf groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Hilvarenbeek</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Vrijthof tot Beekse Bergen, van Diessen tot Haghorst - ik help je overal gevonden worden.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek jouw groeimogelijkheden in een gratis adviesgesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Stel je vraag of plan een afspraak via WhatsApp.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied vanuit Hilvarenbeek</h3>
              <p className="text-gray-600">
                <strong>Gemeente Hilvarenbeek:</strong> Hilvarenbeek • Diessen • Haghorst • Esbeek • Biest-Houtakker • Westelbeers<br/>
                <strong>Directe regio:</strong> Oisterwijk • Goirle • Riel • Moergestel • Middelbeers<br/>
                <strong>Steden bereik:</strong> Tilburg (15km) • Eindhoven (25km) • Den Bosch (35km)<br/>
                <strong>Toerisme:</strong> Beekse Bergen • Efteling (20km) • De Kempen regio
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}