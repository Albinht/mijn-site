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

export default function MarketingAerdt() {
  // Lokale Aerdt reviews
  const dutchReviews = [
    { name: 'Transportbedrijf Rijn-Waal', rating: 5, text: 'Onze internationale transporten naar Duitsland lopen nu veel beter. Duitse klanten vinden ons via Google.de!' },
    { name: 'Grenswinkel Aerdt', rating: 5, text: 'Duitse klanten uit Emmerich en Kleve komen speciaal voor Nederlandse producten. Tweetalige SEO werkt perfect.' },
    { name: 'Camping Am Rhein', rating: 5, text: 'Gasten uit het Ruhrgebied boeken nu direct online. De Duitse marketing campagnes zijn zeer succesvol.' },
    { name: 'Garage Niederrhein Service', rating: 5, text: 'Nederlandse prijzen voor Duitse kwaliteit - dat trekt klanten. We bedienen nu de hele grensstreek.' },
    { name: 'Restaurant Grenzhof', rating: 5, text: 'Van verborgen parel tot hotspot voor Duitsers én Nederlanders. De tweetalige aanpak werkt fantastisch.' },
    { name: 'Fietsverhuur Rheinradweg', rating: 4.5, text: 'Duitse fietstoeristen op de Rijnroute vinden ons nu moeiteloos. Online reserveringen verdubbeld!' },
  ]
  const dutchMoreReviews = [
    { name: 'Aannemersbedrijf Aerdt Bouw', rating: 5, text: 'Renovatieprojecten in Nederland én Duitsland. De grensoverschrijdende marketing opent nieuwe markten.' },
    { name: 'Tuincentrum De Liemers', rating: 5, text: 'Duitse klanten waarderen onze prijzen en kwaliteit. Weekend omzet significant gestegen.' },
    { name: 'Boerderijwinkel Rheinblick', rating: 4.5, text: 'Streekproducten vinden gretig aftrek over de grens. Duitse SEO brengt nieuwe klantgroepen.' },
    { name: 'Watersportcentrum Bijland', rating: 5, text: 'Duitse watersporters uit het Ruhrgebied ontdekken het Bijland. Marketing in zwei Sprachen funktioniert!' },
    { name: 'Kapsalon Hair Grenzen', rating: 5, text: 'Nederlandse prijzen voor Duitse klanten uit Emmerich. De mond-tot-mond reclame versterkt door online reviews.' },
    { name: 'Pannenkoekenhuis De Grens', rating: 4.5, text: 'Duitse gezinnen komen in het weekend massaal. Google Ads Deutschland brengt fantastische resultaten.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Aerdt | Marketing Bureau Liemers Duitse Grensregio</title>
        <meta
          name="description"
          content="SEO Specialist in Aerdt aan de Duitse grens. Tweetalige marketing voor Nederlandse én Duitse klanten. Specialist in grensoverschrijdende SEO & Google Ads."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/aerdt" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Grensoverschrijdende marketing aan de Niederrhein</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Verbind Nederland met Duitsland</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Waar de Rijn twee landen verbindt - daar liggen jouw kansen</strong><br />
              Als marketing specialist aan de Nederlands-Duitse grens ken ik de kracht van Aerdt. Direct aan de grens bij Emmerich, in de gemeente Zevenaar, met het Duitse Ruhrgebied op 30 minuten afstand. Deze strategische ligging in de Liemers biedt enorme kansen voor grensoverschrijdend ondernemen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Tweetalige SEO: Nederlands & Duits</li>
              <li>✓ Google.de én Google.nl dominantie</li>
              <li>✓ Bereik 50+ miljoen Duitsers in NRW</li>
              <li>✓ Specialist in Niederrhein marketing</li>
              <li>✓ Kennis van Duitse zakencultuur</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Ontsluit de Duitse markt <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk grensregio cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Aerdt, Zevenaar, Emmerich & Niederrhein regio</p>
            <p className="mt-2 text-xs text-green-600">🇳🇱🇩🇪 Zweisprachige Marketing seit 2019</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Resultaten Aerdt Duitse Grens" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Niederrhein" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Nederlands-Duitse marketing die grenzen overstijgt"
          subtitle="Van Liemers tot Ruhrgebied - twee economieën, één strategie"
          features={[
            {
              badge: "Niederrhein SEO",
              title: "Duits-Nederlandse SEO",
              description: "Domineer zoekresultaten van Arnhem tot Düsseldorf. Perfect voor bedrijven die profiteren van economische verschillen en grensverkeer.",
              visualTitle: "Ruhrgebiet bereik",
              visualSubtitle: "50M+ Duitsers",
              image: masterSeoImage
            },
            {
              badge: "Grenzverkehr Ads",
              title: "Google Ads Deutschland",
              description: "Target Duitse kooptoeristen en zakelijke klanten. Campagnes die inspelen op kwaliteit, service en Nederlandse efficiency.",
              visualTitle: "Deutsche Qualität",
              visualSubtitle: "NL prijzen",
              image: keywordResearchImage
            },
            {
              badge: "B2B Fokus",
              title: "Internationale B2B Sites",
              description: "Professionele websites voor grensoverschrijdende handel. Van transport tot productie - verbind twee sterke economieën.",
              visualTitle: "Export ready",
              visualSubtitle: "EU handel",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Bedrijven in <span class='bg-[#F7D8FA] px-2 rounded italic'>Aerdt & Liemers</span> groeien internationaal"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing voor de <span className="bg-[#F7D8FA] px-2 rounded italic">Nederlands-Duitse</span> grenseconomie
              </h2>
              <p className="text-xl text-gray-600">
                Van Liemers MKB tot internationale handel - ik spreek beide talen en ken beide markten
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Duitsland */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Duitse SEO Specialist</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden door 83 miljoen Duitsers. Focus op Noordrijn-Westfalen met steden als Düsseldorf, Köln en het Ruhrgebied.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google.de optimalisatie</li>
                  <li>✓ Duitse zoekwoorden onderzoek</li>
                  <li>✓ Lokale Duitse backlinks</li>
                  <li>✓ XING & Duitse platforms</li>
                </ul>
              </div>
              {/* Google Ads Grens */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Ruhrgebiet Expert
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Deutschland</h3>
                <p className="text-gray-600 mb-6">
                  Bereik koopkrachtige Duitsers uit het Ruhrgebied. Slimme campagnes voor retail, B2B en toerisme.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Targeting Emmerich-Kleve-Wesel</li>
                  <li>✓ Duitse shopping campagnes</li>
                  <li>✓ B2B lead generation NRW</li>
                  <li>✓ Seizoensgebonden campagnes</li>
                </ul>
              </div>
              {/* B2B Websites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Internationale B2B Sites</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die vertrouwen wekken in beide landen. Duitse Gründlichkeit meets Dutch efficiency.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Tweetalige websites (DE/NL/EN)</li>
                  <li>✓ Duitse kwaliteitscertificaten</li>
                  <li>✓ SEPA & internationale betaling</li>
                  <li>✓ GDPR/AVG compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom een <span className="bg-[#F7D8FA] px-2 rounded italic">Niederrhein specialist</span> kiezen?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Poort naar Duitsland</h3>
                <p className="text-gray-600">
                  Aerdt ligt letterlijk aan de Duitse grens, onderdeel van gemeente Zevenaar in de Liemers. Met Emmerich op 5 km, Kleve op 15 km en het hele Ruhrgebied binnen 45 minuten bereikbaar via de A3. Deze ligging aan de Rijn, waar het Pannerdens Kanaal en Bijlands Kanaal samenkomen, is ideaal voor internationale handel en toerisme.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Duitse markt expertise</h3>
                <p className="text-gray-600">
                  Duitsers waarderen kwaliteit, betrouwbaarheid en duidelijke communicatie. Ik ken de Duitse zakencultuur, van "Pünktlichkeit" tot "Gründlichkeit". Marketing die appelleert aan Duitse waarden maar Nederlandse voordelen benadrukt. Van Mittelstand tot multinationals - ik spreek hun taal, letterlijk en figuurlijk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">Nederlands-Duitse marketing</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe bereik ik Duitse klanten vanuit Aerdt?</summary>
                <p className="mt-4 text-gray-600">
                  Focus op het nabije Niederrhein gebied: Emmerich, Kleve, Wesel, Bocholt. Duitse SEO vereist perfecte taal - geen Google Translate! Gebruik Duitse domeinnaam (.de) of subfolder (/de/). Google My Business in Duitsland opstellen. Adverteer op Duitse platforms zoals XING naast LinkedIn. Duitse reviews zijn cruciaal voor vertrouwen.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke Duitse zoekwoorden moet ik gebruiken?</summary>
                <p className="mt-4 text-gray-600">
                  Duitsers zoeken anders. "Günstig" (goedkoop) is populairder dan "billig" (cheap). Gebruik regionale termen: "Niederrhein", "NRW", "Ruhrgebiet". Compound woorden zijn typisch Duits: "Grenzüberschreitendedienstleistungen". Focus op kwaliteit: "Qualität", "Zuverlässig", "Fachmann". Lokale SEO: "in der Nähe", "Umgebung Emmerich".
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost Duitse marketing voor een Nederlands bedrijf?</summary>
                <p className="mt-4 text-gray-600">
                  Duitse SEO start vanaf €797 per maand voor basis optimalisatie. Professionele Duitse content creatie kost meer dan Nederlandse (native speakers vereist). Google Ads Deutschland: budget vanaf €1000/maand voor effectieve campagnes. Complete Niederrhein strategie: €2000-€3500/maand. ROI is uitstekend: Duitse klanten hebben 20% hogere koopkracht dan Nederlandse.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe verschilt Duitse B2B marketing van Nederlandse?</summary>
                <p className="mt-4 text-gray-600">
                  Duitsers verwachten uitgebreide technische documentatie, certificaten en referenties. Persoonlijk contact via telefoon wordt gewaardeerd boven email. Lange termijn relaties zijn belangrijker dan snelle deals. Titels en formaliteit: gebruik "Herr/Frau" en academische titels. Kwaliteit en precisie wegen zwaarder dan prijs. Stiptheid in leveringen en communicatie is essentieel.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke sectoren profiteren het meest van de Duitse markt?</summary>
                <p className="mt-4 text-gray-600">
                  Transport/logistiek (Rijn corridor), technische dienstverlening (Duitse industrie), bouw/renovatie (Duitse tweede huizen), retail (prijsverschillen), agrarisch/food (Nederlandse versproducten), zakelijke dienstverlening (accounting, juridisch), toerisme/recreatie (Niederrhein tourism). B2B heeft grootste potentieel door sterke Duitse Mittelstand.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om de <span className="bg-[#F7D8FA] px-2 rounded italic">Duitse markt</span> te veroveren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Liemers tot Ruhrgebied - ik open deuren naar 83 miljoen Duitse consumenten
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek je Duitse marktambities. Gratis advies over Niederrhein marketing.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Schnelle Fragen? Direct antwoord via WhatsApp, ook in het Duits.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Liemers & Niederrhein</h3>
              <p className="text-gray-600">
                Aerdt • Zevenaar • Pannerden • Tolkamer • Spijk • Lobith • Emmerich • Kleve • Kalkar • Rees • Wesel • Bocholt • Isselburg • Anholt • Goch • Kranenburg
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}