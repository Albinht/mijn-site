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

export default function MarketingArnhem() {
  // Authentieke Arnhem reviews met wijkspecifieke context
  const dutchReviews = [
    { name: 'Modeboetiek Klarendal', rating: 5, text: 'Dankzij de lokale SEO-strategie trekken we nu klanten uit heel Arnhem naar onze winkel in de Klarendalseweg. Van Malburgen tot Alteveer weten mensen ons te vinden!' },
    { name: 'AutoService Kronenburg', rating: 5, text: 'Onze garage bij station Arnhem-Zuid krijgt nu aanvragen uit Rijkerswoerd, Elderveld én vanuit het centrum. Google Ads targetting op wijkniveau werkt perfect.' },
    { name: 'Kapsalon Velperplein', rating: 5, text: 'Sinds de nieuwe website boeken klanten uit Velperweg, Spijkerkwartier en zelfs vanuit Oosterbeek online. We zijn nu dé kapper voor Arnhem-Noord.' },
    { name: 'Fysio Praktijk Schuytgraaf', rating: 5, text: 'Onze praktijk in deze nieuwe wijk wordt nu gevonden door alle 15.000 bewoners. Ook vanuit De Laar en Elderveld komen er patiënten.' },
    { name: 'Elektra Service Presikhaaf', rating: 5, text: 'Van spoedklussen in Presikhaaf-West tot grote projecten in Arnhems Buiten - we worden overal voor gebeld sinds de SEO-campagne.' },
    { name: 'Tandarts Centrum Rijnstate', rating: 4.5, text: 'Strategische positie nabij ziekenhuis Rijnstate levert nu via Google meer patiënten op uit heel Arnhem-Zuid en Velp.' },
  ]
  const dutchMoreReviews = [
    { name: 'Aannemer Meinerswijk', rating: 5, text: 'Projecten in Park Meinerswijk, Stadsblokken en nieuwbouw Schuytgraaf stromen binnen via onze top-3 positie voor "bouwbedrijf Arnhem".' },
    { name: 'Groencentrum Rijkerswoerd', rating: 5, text: 'Vanuit onze locatie bij winkelcentrum Rijkerswoerd bedienen we nu heel Zuid-West Arnhem online. Omzet +40% dit seizoen.' },
    { name: 'Fietsenmaker Korenmarkt', rating: 4.5, text: 'Perfect vindbaar voor studenten HAN/ArtEZ, forenzen Arnhem Centraal en wielrenners richting Posbank. E-bike verkoop explodeert.' },
    { name: 'Administratiekantoor WTC Arnhem', rating: 5, text: 'Vanuit het World Trade Center targetten we nu succesvol ondernemers in Business Park Arnhem en IJsseloord 2.' },
    { name: 'Schilder Collectief Spijkerkwartier', rating: 5, text: 'Monumentale panden Spijkerkwartier, villa\'s Burgemeesterswijk tot flats Malburgen - overal worden we nu voor gevraagd.' },
    { name: 'Dierenkliniek Burgers\' Zoo', rating: 4.5, text: 'Strategische ligging nabij Burgers\' Zoo maakt ons nu dé dierenarts voor heel Arnhem-Noord en Velp. Top vindbaarheid!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Arnhem | Marketing Bureau & Online Marketing Arnhem</title>
        <meta
          name="description"
          content="SEO Specialist Arnhem inschakelen? Kies voor hét marketing bureau in Arnhem. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/arnhem" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Doorbraak voor ondernemers in Arnhem-Zuid tot Presikhaaf</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van Rijnkade tot Kronenburg groeit je business</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Als hoofdstad van Gelderland heeft Arnhem alles: 160.000+ inwoners, sterke economie en groeiende wijken.</strong><br />
              Van de bruisende binnenstad rond Korenmarkt tot het zakelijke Arnhems Buiten - ik ken de markt. Als <b>SEO specialist Arnhem</b> positioneer ik jouw bedrijf precies waar je klanten zoeken: of dat nu mode-liefhebbers in Klarendal zijn, zakelijke dienstverleners bij Business Park Arnhem of gezinnen in Schuytgraaf.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Focus op 23 Arnhemse wijken: van centrum tot Rijkerswoerd</li>
              <li>✓ Bereik 160.000+ inwoners plus 100.000+ regiobezoekers</li>
              <li>✓ Specialisme: mode (Modekwartier), zorg (Rijnstate), zakelijk (WTC)</li>
              <li>✓ <b>SEO Arnhem</b> met kennis van lokale economie & doelgroepen</li>
              <li>✓ Van student HAN/ArtEZ tot DGA in Business Park Arnhem</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor alle 23 wijken van Arnhem + regio Veluwezoom</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Arnhem - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Arnhem" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van Rijnkade tot Schuytgraaf: heel Arnhem bereiken"
          subtitle="160.000 inwoners, 8.000+ bedrijven, oneindig veel kansen in de Rijnstad"
          features={[
            {
              badge: "23 wijken bereiken",
              title: "SEO voor heel Arnhem",
              description: "Van trendy Klarendal tot zakelijk IJsseloord, van studentenwijk Alteveer tot villawijk Burgemeesterswijk - ik positioneer je precies waar jouw klanten zoeken. Met 8.000+ bedrijven in Arnhem is lokale zichtbaarheid cruciaal.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Rijnstad targetting",
              title: "Google Ads per wijk",
              description: "Target precies: gezinnen in Schuytgraaf, creatieven in Spijkerkwartier, ondernemers bij WTC Arnhem of shoppers op Korenmarkt. Met 40.000+ forenzen en Burgers' Zoo bezoekers pak je ook de regio.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Groene Hoofdstad",
              title: "Website & Branding Arnhem",
              description: "Als European Green Capital 2025 trekt Arnhem duurzame bedrijven. Met een moderne website positioneer je je tussen Fashion Quarter, creatieve broedplaatsen en het groeiende Arnhems Buiten.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer aanvragen",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Arnhem groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing voor alle sectoren in <span className="bg-[#F7D8FA] px-2 rounded italic">Arnhem</span>
              </h2>
              <p className="text-xl text-gray-600">
                Mode & design (Modekwartier), zorg (Rijnstate/Velp), zakelijke diensten (WTC/Business Park), 
                toerisme (Burgers' Zoo, Openluchtmuseum), bouw (Schuytgraaf) - elke sector vraagt eigen aanpak.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Arnhem */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Rijnstad</h3>
                <p className="text-gray-600 mb-6">
                  Arnhem telt 23 wijken, 160.000 inwoners en grenst aan Velp, Oosterbeek, Westervoort. 
                  Ik zorg dat je in élke wijk gevonden wordt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Wijkgerichte SEO (Centrum, Zuid, Noord)</li>
                  <li>✓ Fashion/design zoekwoorden (Modekwartier)</li>
                  <li>✓ B2B focus Business Park & IJsseloord</li>
                  <li>✓ Reviews Korenmarkt tot Kronenburg</li>
                </ul>
              </div>
              {/* Google Ads Arnhem */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Arnhem
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Veluwezoom</h3>
                <p className="text-gray-600 mb-6">
                  Target 160.000 Arnhemmers, 40.000 forenzen station Arnhem Centraal, 
                  1.5 miljoen Burgers' Zoo bezoekers. Precies de juiste mensen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Wijkcampagnes (Schuytgraaf, Presikhaaf)</li>
                  <li>✓ Event targeting (Vitesse, GelreDome)</li>
                  <li>✓ Student campagnes HAN & ArtEZ</li>
                  <li>✓ B2B WTC & Business Park focus</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing Arnhem</h3>
                <p className="text-gray-600 mb-6">
                  European Green Capital 2025, Modekwartier, Energy Made in Arnhem - 
                  jouw website sluit aan bij Arnhems ambities.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Duurzame tech & groene branding</li>
                  <li>✓ Fashion/creative industry focus</li>
                  <li>✓ Multi-language (DE grens 15km)</li>
                  <li>✓ Koppeling Visit Arnhem & partners</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Arnhem</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Arnhem – altijd eerlijk advies en snelle reactie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Meer weten? Bel vrijblijvend voor een gratis strategiegesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel schakelen? Stuur direct een WhatsApp voor snel contact.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Alle 23 wijken van Arnhem + directe regio</h3>
              <p className="text-gray-600">
                <strong>Noord:</strong> Presikhaaf • Spijkerkwartier • Geitenkamp • Monnikenhuizen<br/>
                <strong>Centrum:</strong> Binnenstad • Klarendal • Sint Marten • Burgemeesterswijk<br/>
                <strong>Zuid:</strong> Malburgen • Schuytgraaf • Elderveld • Rijkerswoerd • Kronenburg<br/>
                <strong>Regio:</strong> Velp • Oosterbeek • Westervoort • Duiven • Zevenaar • Rheden
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}