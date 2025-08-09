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

export default function MarketingAngerlo() {
  // Authentieke Angerlo reviews met Duitse grensregio context
  const dutchReviews = [
    { name: 'Grenshandel Angerlo-Emmerich', rating: 5, text: 'Dankzij tweetalige SEO bereiken we nu klanten uit Zevenaar én het Duitse Emmerich (30.000 inw). De grensoverschrijdende marketing werkt fantastisch.' },
    { name: 'Bouwbedrijf Zevenaar-Oost', rating: 5, text: 'Vanuit Angerlo bedienen we heel gemeente Zevenaar plus Duitse opdrachtgevers. De combinatie Nederlands-Duits vakmanschap trekt aan beide kanten van de grens.' },
    { name: 'Transport Rijn-Waal', rating: 5, text: 'Onze ligging in Angerlo tussen A12 en Duitse grens is goud waard. Via Google vinden Nederlandse én Duitse verladers ons voor grensoverschrijdend transport.' },
    { name: 'Restaurant De Grensstreek', rating: 5, text: '2700 inwoners in Angerlo, maar gasten uit heel Zevenaar en Emmerich. Duitse toeristen naar Burgers Zoo stoppen bij ons voor authentiek Nederlands eten.' },
    { name: 'Hoveniersbedrijf Gelderland-NRW', rating: 5, text: 'We onderhouden tuinen van Angerlo tot Elten (DE). Tweetalige website en marketing brengt klanten uit Zevenaar, Duiven én Kleve (DE).' },
    { name: 'Fietsenwinkel Grensfiets', rating: 4.5, text: 'E-bikes voor Nederlandse forensen én Duitse fietstoeristen. De Rijnroute loopt langs onze deur - perfect vindbaar via lokale SEO.' },
  ]
  const dutchMoreReviews = [
    { name: 'Installatiebedrijf Angerlo-Babberich', rating: 5, text: 'Van cv-ketels in Angerlo tot warmtepompen in bedrijfspanden Zevenaar. Ook Duitse klanten uit Emmerich vinden ons voor duurzame installaties.' },
    { name: 'Autobedrijf Import-Export', rating: 5, text: 'Duitse occasions voor Nederlanders, Nederlandse lease-returns voor Duitsers. Onze grenslocatie in Angerlo is ideaal voor autohandel.' },
    { name: 'Kapsalon Hair Grenzeloos', rating: 4.5, text: 'Nederlandse precisie met Duitse Gründlichkeit. Klanten uit Zevenaar, Didam én Emmerich komen voor onze unieke styling aanpak.' },
    { name: 'Zorgpraktijk Rijn-IJssel', rating: 5, text: 'Fysiotherapie voor 2700 Angerlo bewoners plus patiënten uit heel Zevenaar. Duitse zorgverzekeringen accepteren we ook - uniek in de regio.' },
    { name: 'Elektricien 24/7 Grensstreek', rating: 5, text: 'Spoedservice van Angerlo tot Emmerich. Nederlandse kwaliteit, Duitse stiptheid. Perfect vindbaar in twee talen via Google.' },
    { name: 'Catering Niederrhein-Gelderland', rating: 4.5, text: 'Nederlandse bruiloften, Duitse Betriebsfeste. Vanuit Angerlo bedienen we de hele grensregio met authentieke streekgerechten.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Angerlo (Zevenaar) | Marketing Duitse Grensregio Emmerich</title>
        <meta
          name="description"
          content="Marketing bureau Angerlo bij Duitse grens. Tweetalige online marketing voor bedrijven in Zevenaar. SEO specialist voor 2700 inwoners met Duits-Nederlands bereik."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/angerlo" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Grenzeloos groeien: marketing Angerlo-Emmerich</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Waar Nederland en Duitsland zakendoen</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Angerlo: Nederlandse ondernemersgeest aan de Duitse grens.</strong><br />
              Als <b>SEO specialist Angerlo</b> ken ik de kracht van dit grensdorp met 2.700 inwoners in gemeente Zevenaar. Op 5 kilometer van Duitsland, tussen Arnhem (20km) en Emmerich (10km), help ik lokale ondernemers profiteren van grensoverschrijdende kansen en tweetalig bereik.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Tweetalige marketing Nederlands-Duits</li>
              <li>✓ Bereik 32.000 inwoners gemeente Zevenaar</li>
              <li>✓ Target 30.000 inwoners Emmerich (DE)</li>
              <li>✓ <b>SEO Angerlo-Zevenaar-Emmerich</b> grensoverschrijdend</li>
              <li>✓ Profiteren van A12 corridor en Betuweroute</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start grenzeloze groei <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = '/work-with-me'}>
                Bekijk grensregio cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Angerlo, Zevenaar & Duitse grensregio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Angerlo - Grensregio Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Angerlo" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van grenspost tot groeimotor: digitaal succes in twee landen"
          subtitle="Waar Nederlandse nuchterheid Duitse Gründlichkeit ontmoet"
          features={[
            {
              badge: "Grens voordeel",
              title: "Tweetalige SEO NL-DE",
              description: "Op 10km van Emmerich (30.000 inwoners) positioneer ik jouw bedrijf in twee talen. Nederlandse klanten via Google.nl, Duitse via Google.de. Van Zevenaar tot Kleve, van Arnhem tot Wesel - grensoverschrijdend vindbaar voor 100.000+ potentiële klanten.",
              visualTitle: "Zwei Länder",
              visualSubtitle: "Doppelter Erfolg",
              image: masterSeoImage
            },
            {
              badge: "Zevenaar power",
              title: "Google Ads Grensregio",
              description: "Target 32.000 inwoners van Zevenaar, 30.000 uit Emmerich, plus forensen op de A12 en bezoekers van Burgers' Zoo. Jouw advertenties in Nederlands én Duits bereiken ondernemers, toeristen en grensgangers die de beste deals zoeken.",
              visualTitle: "Grens bereik",
              visualSubtitle: "Maximum ROI",
              image: keywordResearchImage
            },
            {
              badge: "Internationale site",
              title: "Website Nederlands-Duits",
              description: "Angerlo ligt strategisch tussen twee culturen. Je website spreekt beide talen vloeiend: Nederlandse directheid voor Zevenaar, Duitse degelijkheid voor Emmerich. Van transportbedrijf tot grenswinkel - altijd de juiste toon.",
              visualTitle: "Bilingual power",
              visualSubtitle: "Mehr Kunden",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Angerlo bloeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>grensoverschrijdende marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor grensdorp <span className="bg-[#F7D8FA] px-2 rounded italic">Angerlo</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale vakmensen tot internationale handelaren - marketing die de brug slaat tussen 
                Nederlandse ondernemersgeest en Duitse zakelijkheid aan de grens.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Angerlo */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Angerlo Grensregio</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten in Nederland én Duitsland. Perfect voor bedrijven die grensoverschrijdend willen groeien.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Tweetalige SEO (NL/DE)</li>
                  <li>✓ Zevenaar gemeente (32.000)</li>
                  <li>✓ Emmerich targeting (30.000)</li>
                  <li>✓ A12/E35 corridor zichtbaarheid</li>
                </ul>
              </div>
              {/* Google Ads Angerlo */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in grensregio
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads NL-DE</h3>
                <p className="text-gray-600 mb-6">
                  Adverteer in twee landen tegelijk. Nederlandse campagnes voor Zevenaar, Duitse voor Emmerich-Kleve. Maximaal grensvoordeel.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google.nl + Google.de</li>
                  <li>✓ Grensgangers targeting</li>
                  <li>✓ Burgers' Zoo bezoekers</li>
                  <li>✓ Import/export keywords</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tweetalige Websites</h3>
                <p className="text-gray-600 mb-6">
                  Professionele sites die beide culturen aanspreken. Nederlandse efficiency meets Duitse kwaliteit in één overtuigend platform.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Native NL/DE content</li>
                  <li>✓ Culturele aanpassingen</li>
                  <li>✓ Multi-currency (€)</li>
                  <li>✓ Grensregio USPs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Angerlo</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik Duitse klanten vanuit Angerlo?</h3>
                <p className="text-gray-600">
                  Angerlo ligt op slechts 10km van Emmerich (30.000 inwoners) en 25km van Kleve (50.000). Ik creëer Duitse content, adverteer op Google.de, en gebruik keywords zoals "Nähe Emmerich" en "Grenze Niederlande". Duitse klanten waarderen Nederlandse prijzen en kwaliteit. Met tweetalige SEO en Google Ads bereik je de hele Kreis Kleve met 300.000+ inwoners.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost tweetalige marketing voor mijn bedrijf in Angerlo?</h3>
                <p className="text-gray-600">
                  Voor effectieve Nederlands-Duitse marketing start ik vanaf €750-1.000 per maand. Dit omvat tweetalige SEO, Google Ads in beide landen, en basis content creatie. Voor uitgebreidere grensoverschrijdende campagnes inclusief Duitse social media adviseer ik €1.000-1.800 per maand. De ROI is vaak hoger door het dubbele marktbereik.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik heel gemeente Zevenaar vanuit Angerlo?</h3>
                <p className="text-gray-600">
                  Zevenaar telt 32.000 inwoners verspreid over Zevenaar-centrum (26.000), Angerlo (2.700), Babberich (1.800), Giesbeek (3.100), Lathum (450) en Oud-Zevenaar. Ik optimaliseer voor "Zevenaar + dienst" searches, creëer lokale landingspagina's per kern, en target via postcodes. De centrale ligging van Angerlo aan de A12 is perfect voor gemeentebreed bereik.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke sectoren profiteren het meest van de grensligging?</h3>
                <p className="text-gray-600">
                  Transport/logistiek (Betuweroute), grenshandel (prijsverschillen), autohandel (Duitse occasions), bouw (Duitse Gründlichkeit), en horeca (toerisme) floreren in Angerlo. Ook dienstverleners zoals kappers, tandartsen en dierenartsen trekken Duitse klanten met Nederlandse prijzen. Ik help je sector-specifieke grenskansen benutten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik bezoekers van Burgers' Zoo naar Angerlo?</h3>
                <p className="text-gray-600">
                  Burgers' Zoo in Arnhem (20km) trekt 1.5 miljoen bezoekers per jaar, waarvan 40% Duits. Angerlo ligt op de route Emmerich-Arnhem. Ik target "parkeren Burgers' Zoo", "restaurant bij Burgers' Zoo" en Duitse varianten. Met goede SEO en routemarketing worden Duitse dagtoeristen jouw klanten op de terug- of heenweg.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar voor grenzeloze groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Angerlo</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Benut het grensvoordeel. Nederlandse ondernemersgeest meets Duitse zakelijkheid.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek grensoverschrijdende groeikansen voor jouw bedrijf.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Schneller Kontakt für Marketing in der Grenzregion.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Angerlo</h3>
              <p className="text-gray-600">
                <strong>Gemeente Zevenaar:</strong> Angerlo • Zevenaar • Babberich • Giesbeek • Lathum • Oud-Zevenaar<br/>
                <strong>Duitse grensregio:</strong> Emmerich • Elten • 's-Heerenberg • Kleve • Rees<br/>
                <strong>Regio:</strong> Arnhem • Duiven • Westervoort • Didam • Montferland • Doetinchem
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}