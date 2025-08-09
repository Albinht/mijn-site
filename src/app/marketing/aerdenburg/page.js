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

export default function MarketingAerdenburg() {
  // Lokale Aerdenburg reviews
  const dutchReviews = [
    { name: 'Restaurant De Kaai', rating: 5, text: 'Sinds de nieuwe marketing trekken we gasten uit Brugge, Gent én Nederland. De grensligging wordt nu optimaal benut!' },
    { name: 'Bouwbedrijf Zeeuws-Vlaanderen', rating: 5, text: 'Renovatieprojecten in historisch Aerdenburg lopen binnen. Ook Belgische klanten weten ons nu te vinden.' },
    { name: 'Fietsverhuur De Grens', rating: 5, text: 'Toeristen op de fietsroute Brugge-Sluis boeken nu online. De tweetalige website werkt perfect.' },
    { name: 'Garage Aerdenburg Service', rating: 5, text: 'Belgische klanten rijden graag naar ons voor onderhoud. Google Ads in twee landen brengt dubbel resultaat.' },
    { name: 'Camping Romeinse Stad', rating: 5, text: 'Vol in het seizoen dankzij sterke SEO. Gasten uit heel Vlaanderen en Nederland vinden onze camping.' },
    { name: 'Antiekhandel Sint-Baafs', rating: 4.5, text: 'Verzamelaars uit België en Nederland vinden onze collectie. Online verkoop naar heel Europa loopt goed!' },
  ]
  const dutchMoreReviews = [
    { name: 'Hotelletje Aerdenburg', rating: 5, text: 'Perfecte stop tussen Brugge en Middelburg. De lokale SEO zorgt voor jaar-rond bezetting.' },
    { name: 'Supermarkt De Twee Landen', rating: 5, text: 'Belgische klanten komen voor Nederlandse producten. Marketing in beide talen werkt uitstekend.' },
    { name: 'Kapsalon Beauty Border', rating: 4.5, text: 'Klanten uit Maldegem, Eeklo en Sluis. De grensregio marketing pakt perfect uit.' },
    { name: 'Transportbedrijf Scheldemond', rating: 5, text: 'Logistiek tussen Vlaamse havens en Nederland. B2B marketing brengt internationale opdrachten.' },
    { name: 'Bakkerij De Oude Stad', rating: 5, text: 'Belgische klanten komen speciaal voor onze stroopwafels. Online bestellingen tot in Brugge!' },
    { name: 'Elektricien Grenzeloos', rating: 4.5, text: 'Werken in twee landen vraagt slimme marketing. Nu krijgen we opdrachten van beide kanten van de grens.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Aerdenburg | Marketing Bureau Zeeuws-Vlaanderen Grensregio</title>
        <meta
          name="description"
          content="SEO Specialist in Aerdenburg, Zeeuws-Vlaanderen. Grensoverschrijdende marketing voor Nederlandse én Belgische klanten. Tweetalige SEO & Google Ads specialist."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/aerdenburg" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Grensoverschrijdende marketing in historisch Aerdenburg</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Bereik Nederland én Vlaanderen</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van Romeinse stad tot moderne grensplaats - twee landen, dubbele kansen</strong><br />
              Als marketing specialist in de grensregio ken ik de unieke positie van Aerdenburg. Op slechts 2 km van België, tussen Sluis en Maldegem, met Brugge op 20 minuten rijden. Deze historische stad met Romeinse wortels heeft nu moderne marketing nodig om beide markten optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Tweetalige SEO: Nederlands & Vlaams</li>
              <li>✓ Grensoverschrijdende Google Ads campagnes</li>
              <li>✓ Bereik van Brugge tot Middelburg</li>
              <li>✓ Specialist in grensregio dynamiek</li>
              <li>✓ BTW & wetgeving kennis voor beide landen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start grensregio groei <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Zeeuws-Vlaanderen cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Aerdenburg, Sluis, Maldegem & heel Zeeuws-Vlaanderen</p>
            <p className="mt-2 text-xs text-green-600">🇳🇱🇧🇪 Specialist in Nederlands-Belgische markt</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Resultaten Aerdenburg Grensregio" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Grensregio" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Grensregio marketing die twee markten verenigt"
          subtitle="Van Zeeuwse nuchterheid tot Vlaamse ondernemingszin"
          features={[
            {
              badge: "Grens SEO",
              title: "Tweetalige Vindbaarheid",
              description: "Domineer zoekresultaten in Nederland én België. Perfect voor bedrijven die profiteren van prijsverschillen, culturele verschillen en grensverkeer.",
              visualTitle: "2 landen #1",
              visualSubtitle: "Dubbel bereik",
              image: masterSeoImage
            },
            {
              badge: "Cross-Border Ads",
              title: "Grensoverschrijdende Campagnes",
              description: "Target Belgische dagjestoeristen én Nederlandse klanten. Slimme campagnes voor tankstations, horeca en retail die inspelen op grensvoordelen.",
              visualTitle: "BE + NL",
              visualSubtitle: "Optimaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Historisch & Modern",
              title: "Erfgoed Marketing",
              description: "Combineer de rijke Romeinse historie met moderne dienstverlening. Trek cultuurtoeristen uit Brugge, Gent en heel Vlaanderen.",
              visualTitle: "2000 jaar historie",
              visualSubtitle: "Modern bereik",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers in <span class='bg-[#F7D8FA] px-2 rounded italic'>Aerdenburg & grensregio</span> groeien internationaal"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing voor de <span className="bg-[#F7D8FA] px-2 rounded italic">Nederlands-Belgische</span> grensregio
              </h2>
              <p className="text-xl text-gray-600">
                Van historisch erfgoed tot moderne grenshandel - ik ken beide markten en culturen
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Grensregio */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tweetalige SEO Specialist</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden in Nederland én Vlaanderen. Optimalisatie voor Google.nl en Google.be met de juiste culturele nuances.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Nederlandse & Vlaamse zoektermen</li>
                  <li>✓ Google Mijn Bedrijf in beide landen</li>
                  <li>✓ Lokale backlinks uit beide markten</li>
                  <li>✓ Reviews van NL & BE klanten</li>
                </ul>
              </div>
              {/* Google Ads Grens */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Grensregio Expert
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cross-Border Google Ads</h3>
                <p className="text-gray-600 mb-6">
                  Slimme campagnes die inspelen op prijsverschillen, accijnzen en culturele voorkeuren tussen beide landen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Targeting Brugge-Sluis-Middelburg as</li>
                  <li>✓ Belgische kooptoeristen bereiken</li>
                  <li>✓ Nederlandse dagjestoeristen targeten</li>
                  <li>✓ BTW-voordeel campagnes</li>
                </ul>
              </div>
              {/* Erfgoed Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Erfgoed & Toerisme Sites</h3>
                <p className="text-gray-600 mb-6">
                  Websites die de rijke historie van Aerdenburg combineren met moderne functionaliteit voor internationale bezoekers.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Meertalige websites (NL/FR/EN/DE)</li>
                  <li>✓ Cultureel erfgoed storytelling</li>
                  <li>✓ Toeristische route integraties</li>
                  <li>✓ Internationale betaalsystemen</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom een <span className="bg-[#F7D8FA] px-2 rounded italic">grensregio specialist</span> kiezen?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Oudste stad van Zeeland</h3>
                <p className="text-gray-600">
                  Aerdenburg, gesticht door de Romeinen als Rodanum, is de oudste stad van Zeeland. Met monumentale kerken, archeologische vondsten en een rijk verleden trek je cultuurtoeristen. De ligging op 2 km van België, tussen Sluis (8 km) en Maldegem (6 km), met Brugge op slechts 25 km, maakt dit dé plek voor grensoverschrijdend ondernemen.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Grenseconomie expertise</h3>
                <p className="text-gray-600">
                  Van Belgische tanktoeristen tot Nederlandse koopjesjagers - ik ken de grenseconomie. Verschillen in BTW, accijnzen en prijzen creëren unieke kansen. Marketing die inspeelt op Vlaamse feestdagen, Nederlandse vakanties en de charme van beide culturen. Geen standaard aanpak maar strategie die twee markten optimaal bedient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">grensregio marketing</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe trek ik zowel Nederlandse als Belgische klanten?</summary>
                <p className="mt-4 text-gray-600">
                  Tweetalige content is essentieel, maar let op culturele nuances. Belgen zoeken anders dan Nederlanders. Gebruik Vlaamse terminologie voor Belgische klanten. Speel in op prijsverschillen (tanken, boodschappen) en culturele events (Belgische feestdagen). Google Ads campagnes split je best per land met aangepaste boodschappen. Reviews van beide nationaliteiten versterken vertrouwen.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke sectoren profiteren het meest van de grensligging?</summary>
                <p className="mt-4 text-gray-600">
                  Tankstations (accijnsverschillen), supermarkten (prijsverschillen), horeca (culinair toerisme), bouwmarkten (BTW-voordelen), antiek/curiosa (verschillende markten), transport/logistiek (internationale handel), en toerisme (historisch erfgoed). Ook dienstverleners zoals kappers, garages en aannemers trekken klanten uit beide landen.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost grensoverschrijdende marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Tweetalige SEO start vanaf €697 per maand voor basis optimalisatie in beide landen. Uitgebreide grensregio campagnes (SEO + Google Ads NL/BE) kosten €1500-€2500 per maand. De ROI is vaak hoger dan bij single-market campagnes omdat je twee markten bedient. Veel bedrijven zien 30-50% omzetgroei door Belgische klanten.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe ga ik om met verschillende BTW-tarieven en wetgeving?</summary>
                <p className="mt-4 text-gray-600">
                  Communiceer helder over prijzen inclusief/exclusief BTW. Voor B2B: toon beide prijzen. Vermeld duidelijk levervoorwaarden per land. Ik help met het correct weergeven van fiscale voordelen zonder juridische problemen. Werk samen met een grensregio boekhouder voor fiscale optimalisatie. Marketing mag inspelen op prijsvoordelen maar moet altijd compliant zijn.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Moet ik ook in het Frans adverteren voor Belgische klanten?</summary>
                <p className="mt-4 text-gray-600">
                  Voor Aerdenburg focus je op Nederlands/Vlaams, aangezien je vooral Vlamingen uit West- en Oost-Vlaanderen trekt. Frans is minder relevant hier. Wel waardevol: basis Engels voor internationale toeristen en Duits voor Duitse dagjestoeristen die via België komen. Focus eerst op perfecte Nederlands/Vlaamse content, dan pas andere talen.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">twee landen</span> te veroveren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Romeinse historie tot moderne grenshandel - ik help je groeien in Nederland én België
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek je grensoverschrijdende ambities. Gratis advies over tweetalige marketing.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Snel advies over grensregio marketing? Stuur een WhatsApp voor direct antwoord.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in heel Zeeuws-Vlaanderen & West-Vlaanderen</h3>
              <p className="text-gray-600">
                Aerdenburg • Sluis • Sint-Anna-ter-Muiden • Retranchement • Cadzand • Oostburg • IJzendijke • Schoondijke • Breskens • Maldegem • Eeklo • Sint-Laureins • Assenede • Brugge • Damme • Knokke-Heist
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}