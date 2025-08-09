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

export default function MarketingHarlingen() {
  // Authentieke Harlingen reviews met maritieme context
  const dutchReviews = [
    { name: 'Rederij Harlingen-Terschelling', rating: 5, text: 'Onze veerdienst naar de Waddeneilanden wordt nu perfect gevonden door toeristen uit heel Nederland. Online boekingen zijn met 65% gestegen!' },
    { name: 'Vishandel De Zuiderhaven', rating: 5, text: 'Van verse vis aan de haven tot online bestellingen door heel Friesland. De lokale SEO strategie heeft ons bedrijf echt laten groeien.' },
    { name: 'Hotel Hannemahuis', rating: 5, text: 'Ons monumentale hotel aan de Voorstraat ontvangt nu gasten uit binnen- en buitenland. De meertalige website werkt fantastisch voor Duitse waddentoeristen.' },
    { name: 'Scheepswerf Harlingen BV', rating: 4.5, text: 'B2B leads uit de hele maritieme sector stromen binnen. Van jachtbouw tot industriële scheepvaart - we worden overal voor gevonden.' },
    { name: 'Restaurant De Tjotter', rating: 5, text: 'Met uitzicht op de Waddenzee trekken we nu diners uit Leeuwarden, Franeker en zelfs Amsterdam. Top positie voor "restaurant Harlingen haven".' },
    { name: 'Watersportwinkel Noorderhaven', rating: 5, text: 'Online verkoop van zeilkleding en maritieme artikelen is verdrievoudigd. We bereiken nu de hele Nederlandse watersportmarkt vanuit Harlingen.' },
  ]
  const dutchMoreReviews = [
    { name: 'Fietsverhuur Waddenexpress', rating: 5, text: 'Toeristen boeken nu fietsen vooraf voor hun Waddeneiland avontuur. De Google Ads campagne tijdens het seizoen was een schot in de roos!' },
    { name: 'Kunstgalerie Voorstraat', rating: 4.5, text: 'Onze Friese maritieme kunst wordt nu landelijk verkocht. De SEO voor "Harlinger kunst" en "maritiem schilderij" werkt uitstekend.' },
    { name: 'Bakkerij De Harlinger', rating: 5, text: 'Van oranjekoek tot Friese specialiteiten - online bestellingen uit heel Noord-Nederland. De lokale vindbaarheid in Harlingen is perfect.' },
    { name: 'Jachthaven Service', rating: 5, text: 'Ligplaatsen worden nu geboekt door zeilers uit Duitsland, België en heel Nederland. De internationale SEO strategie werkt geweldig.' },
    { name: 'Administratiekantoor Frisia', rating: 4.5, text: 'We bedienen nu ondernemers van Harlingen tot Bolsward en Sneek. Vooral de visserij- en scheepvaartsector weet ons te vinden.' },
    { name: 'Zeilschool Waddenzee', rating: 5, text: 'Cursussen zijn het hele seizoen volgeboekt dankzij top rankings. Van beginners uit de regio tot gevorderden uit het hele land.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Harlingen | Marketing Bureau Harlingen | Maritieme Marketing</title>
        <meta
          name="description"
          content="SEO Specialist Harlingen maakt jouw bedrijf zichtbaar in deze historische havenstad. Van Waddentoerisme tot maritieme sector - groei met lokale expertise!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/harlingen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Harlingen: waar maritiem erfgoed moderne marketing ontmoet</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Poort naar de Wadden, hart van Friese handel</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Met 16.000 inwoners en 4 miljoen Waddenpassagiers per jaar is Harlingen dé maritieme hotspot van Noord-Nederland.</strong><br />
              Deze historische havenstad met haar monumentale binnenstad, twee zeehavens en directe verbinding naar Vlieland en Terschelling biedt ondernemers unieke kansen. Als <b>SEO specialist Harlingen</b> ken ik de dynamiek: van traditionele visserij tot moderne jachthavens, van authentieke Friese winkels tot internationale scheepvaart. Ik breng jouw bedrijf onder de aandacht bij toeristen, locals én de maritieme sector.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik 4 miljoen Waddentoeristen plus 16.000 lokale inwoners</li>
              <li>✓ Profiteer van 600+ monumenten in historische binnenstad</li>
              <li>✓ Target maritieme sector: visserij, scheepsbouw, watersport</li>
              <li>✓ <b>Marketing bureau Harlingen</b> met kennis van seizoenspatronen</li>
              <li>✓ Specialist in toeristische én B2B maritieme marketing</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Ontdek jouw groeikansen <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk maritieme cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Harlingen: Centrum • Havens • Industriegebied • Woonwijken</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct advies? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Harlingen - Groeistatistieken" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Expert Harlingen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van Zuiderhaven tot Willemshaven: heel Harlingen online zichtbaar"
          subtitle="4 miljoen toeristen, 500+ bedrijven, onbeperkte maritieme mogelijkheden"
          features={[
            {
              badge: "Wadden gateway",
              title: "SEO voor toerisme & horeca",
              description: "Harlingen is de toegangspoort naar Vlieland en Terschelling. Ik positioneer hotels, restaurants en winkels perfect voor de miljoenenstroom aan Waddentoeristen. Van dagjesmensen tot Duitse vakantiegangers - bereik ze allemaal met slimme SEO die inspeelt op seizoenen en veerbootschema's.",
              visualTitle: "Toeristische topposities",
              visualSubtitle: "Seizoen optimaal benutten",
              image: masterSeoImage
            },
            {
              badge: "Maritieme marketing",
              title: "Google Ads voor scheepvaart",
              description: "Met de Industriehaven, Nieuwe Willemshaven en talloze jachthavens is Harlingen een maritiem centrum. Target scheepseigenaren, vissers, watersporters en de offshore industrie. Van kleine jachtwerf tot grote rederij - ik zorg dat de juiste mensen je vinden.",
              visualTitle: "B2B maritiem bereik",
              visualSubtitle: "Havens & industrie",
              image: keywordResearchImage
            },
            {
              badge: "Historisch Harlingen",
              title: "Website met Friese identiteit",
              description: "600 monumenten, grachten, pakhuizen - Harlingen ademt geschiedenis. Je website moet die authentieke sfeer uitstralen terwijl het modern en snel is. Ik creëer sites die het verhaal van Harlingen vertellen en tegelijk perfect converteren voor moderne klanten.",
              visualTitle: "Authentiek & modern",
              visualSubtitle: "Friese kracht online",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Harlinger ondernemers varen wel bij <span class='bg-[#F7D8FA] px-2 rounded italic'>maritieme marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing voor elke sector in <span className="bg-[#F7D8FA] px-2 rounded italic">Harlingen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van Waddentoerisme tot visserij, van monumentale binnenstad tot moderne havens - 
                elke Harlinger ondernemer krijgt een strategie op maat.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Harlingen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Waddenregio</h3>
                <p className="text-gray-600 mb-6">
                  Domineer in Harlingen én de wijde regio. Van Franeker tot Bolsward, 
                  van Leeuwarden tot de eilanden - word overal gevonden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top rankings "Harlingen + branche"</li>
                  <li>✓ Waddeneilanden zoekwoorden</li>
                  <li>✓ Seizoensgebonden SEO strategie</li>
                  <li>✓ Maritieme sector optimalisatie</li>
                </ul>
              </div>
              {/* Google Ads Harlingen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Harlingen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Havenstad</h3>
                <p className="text-gray-600 mb-6">
                  Target 4 miljoen toeristen, duizenden watersporters en de complete 
                  maritieme industrie met gerichte campagnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Toeristen campagnes (apr-okt)</li>
                  <li>✓ B2B maritieme targeting</li>
                  <li>✓ Shopping ads binnenstad</li>
                  <li>✓ Remarketing veerdienst passagiers</li>
                </ul>
              </div>
              {/* Website & Branding */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Friese Website Design</h3>
                <p className="text-gray-600 mb-6">
                  Authentieke Harlinger websites die geschiedenis en moderniteit 
                  combineren. Perfect voor toerisme én zakelijke markt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Meertalig (NL/DE/EN) voor toeristen</li>
                  <li>✓ Integratie boekingssystemen</li>
                  <li>✓ Mobiel geoptimaliseerd design</li>
                  <li>✓ Lokale Friese uitstraling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zet Harlingen op de digitale kaart met <span className="bg-[#F7D8FA] px-2 rounded italic">maritieme marketing</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Zuiderhaven tot Noorderhaven, van Voorstraat tot industrieterrein - groei waar het telt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel direct</h3>
                <p className="text-gray-600 mb-4">Bespreek vrijblijvend jouw groeimogelijkheden in de Waddenregio.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Stel je vraag of plan direct een strategiegesprek via WhatsApp.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied vanuit Harlingen</h3>
              <p className="text-gray-600">
                <strong>Stad Harlingen:</strong> Centrum • Zuiderhaven • Willemshaven • Industriehaven • Trebol<br/>
                <strong>Waddeneilanden:</strong> Vlieland • Terschelling • verbindingen Texel & Ameland<br/>
                <strong>Regio Friesland:</strong> Franeker • Bolsward • Sneek • Leeuwarden • Sint Annaparochie<br/>
                <strong>Maritiem netwerk:</strong> Hele Nederlandse kust • Internationale scheepvaart • Offshore industrie
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}