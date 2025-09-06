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

export default function MarketingHarderwijk() {
  // Lokale Harderwijk reviews - historische Hanzestad aan het Veluwemeer
  const dutchReviews = [
    { name: 'Jachthaven De Breekt', rating: 5, text: 'Onze marina aan het Veluwemeer krijgt nu veel meer bezoekers dankzij lokale SEO. Topposities voor "jachthaven Harderwijk" en "botenverhuur Veluwemeer"!' },
    { name: 'Restaurant Bottelier', rating: 5, text: 'Als restaurant in de historische binnenstad van Harderwijk zien we veel meer toeristen. De Google Ads voor "restaurant Harderwijk centrum" werken perfect.' },
    { name: 'Watersportwinkel Hierden', rating: 5, text: 'Vanuit onze locatie tussen Harderwijk en Hierden bereiken we nu watersporters van heel het Veluwemeer. Fantastische resultaten!' },
    { name: 'Hotel Van der Valk Harderwijk', rating: 4.5, text: 'Voor ons hotel nabij het Dolfinarium was lokale vindbaarheid essentieel. Nu boekingen uit heel de regio Veluwe-randmeren.' },
    { name: 'Fietsverhuur Strandoever', rating: 5, text: 'Onze verhuur aan de Harderwijk boulevard staat nu bovenaan. Vooral fietsroutes rond Veluwemeer worden veel gezocht!' },
    { name: 'Tandartspraktijk Waterfront', rating: 5, text: 'In het nieuwe woongebied Waterfront concurreren veel praktijken. Dankzij SEO krijgen we patiënten uit heel Harderwijk.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Flevoland', rating: 5, text: 'Vanuit Harderwijk bedienen we heel Flevoland en Gelderland. De online strategie heeft ons klantenbestand verdubbeld.' },
    { name: 'Kapperszaak Vischpoort', rating: 5, text: 'In het centrum bij de Vischpoort staan we nu bovenaan lokale zoekresultaten. Agenda zit vol met klanten uit Harderwijk en omgeving!' },
    { name: 'Camping Het Harderbroek', rating: 4.5, text: 'Onze camping tussen Harderwijk en Hierden krijgt nu veel meer online boekingen. Perfect bereik voor Veluwemeer toerisme.' },
    { name: 'Yogastudio Strandbad', rating: 5, text: 'Nabij het strandbad van Harderwijk concurreren veel studio\'s. Lokale SEO zorgt voor constante nieuwe cursisten.' },
    { name: 'Notariskantoor Hanzestraat', rating: 5, text: 'Voor zakelijke diensten in Harderwijk en Ermelo waren we moeilijk vindbaar. Nu structureel meer klanten via Google.' },
    { name: 'Schildersbedrijf Hierderweg', rating: 4.5, text: 'Tussen Harderwijk en Hierden gelegen, maar nu werk in hele Veluwe-regio. Marketing heeft ons bereik enorm vergroot!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Harderwijk | Marketing Bureau & Online Marketing Harderwijk</title>
        <meta
          name="description"
          content="SEO Specialist Harderwijk nodig? Kies voor hét marketing bureau aan het Veluwemeer. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website voor Harderwijk."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/harderwijk" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Harderwijk</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van Veluwemeer tot Veluwe: heel Harderwijk bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Harderwijk: waar Hanzestad-traditie en moderne watersport elkaar ontmoeten.</strong><br />
              Met 48.000 inwoners, gelegen aan het prachtige Veluwemeer tussen Flevoland en Gelderland, biedt Harderwijk unieke kansen. Van de historische binnenstad met Vischpoort en Sint-Catharina tot moderne wijken als Waterfront en het bruisende havengebied. Als <b>SEO specialist Harderwijk</b> positioneer ik je tussen de 3.200+ lokale bedrijven - van watersportonderneming aan de boulevard tot dienstverlener in het centrum.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Harderwijk: topresultaten aan het Veluwemeer</li>
              <li>✓ Google Ads: direct klanten uit Harderwijk en regio</li>
              <li>✓ Speciaal voor bedrijven, horeca en watersport in Harderwijk</li>
              <li>✓ <b>Marketing bureau Harderwijk</b> met meetbaar resultaat</li>
              <li>✓ Websites die bezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Harderwijk & Veluwe-randmeren</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Harderwijk - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Harderwijk" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Harderwijk met slimme marketing"
          subtitle="Van Hanzestad tot Veluwemeer - overal online vindbaar"
          features={[
            {
              badge: "SEO Harderwijk",
              title: "SEO Specialist Harderwijk",
              description: "Harderwijk heeft unieke zoekgedrag: van 'watersport Veluwemeer' tot 'restaurant historisch centrum'. Ik zorg dat je lokaal wordt gevonden bij alle relevante zoekopdrachten.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Veluwemeer zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Harderwijk",
              description: "Direct zichtbaar voor Harderwijkers en bezoekers van Dolfinarium, Veluwemeer en historisch centrum. Gerichte advertenties die werken voor lokale en toeristische markt.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Toeristen & lokaal",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Marketing",
              title: "Marketing Bureau Harderwijk",
              description: "Websites die de Harderwijk-sfeer uitstralen: van maritiem karakter tot historische charme. Volledig geoptimaliseerd voor zowel lokale klanten als Veluwemeer-toeristen.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer boekingen",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Harderwijk groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist aan het <span className="bg-[#F7D8FA] px-2 rounded italic">Veluwemeer</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van watersportbedrijf tot historische horeca – ik help je online groeien in Harderwijk.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Harderwijk */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Harderwijk</h3>
                <p className="text-gray-600 mb-6">
                  Harderwijk heeft uniek zoekgedrag: watersport, historie en toerisme. Ik zorg dat je bij alle relevante lokale zoekopdrachten bovenaan staat.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel voor Harderwijk</li>
                  <li>✓ Zoekwoorden: watersport + historie + lokaal</li>
                  <li>✓ Veluwemeer toerisme optimalisatie</li>
                  <li>✓ Reviews van Harderwijkse klanten</li>
                </ul>
              </div>
              {/* Google Ads Harderwijk */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor watersportseizoen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Harderwijk</h3>
                <p className="text-gray-600 mb-6">
                  Seizoensgebonden advertenties die inspelen op Veluwemeer-toerisme en lokale vraag naar diensten in Harderwijk.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale + toeristische doelgroepen</li>
                  <li>✓ Seizoen-optimalisatie Veluwemeer</li>
                  <li>✓ Focus op Harderwijk + omgeving</li>
                  <li>✓ ROI die telt voor je bedrijf</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Websites die de unieke Harderwijk-sfeer uitstralen: maritiem, historisch en gastvrij. Optimaal voor conversie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Harderwijk-design met local touch</li>
                  <li>✓ Snel, mobiel & gebruiksvriendelijk</li>
                  <li>✓ Conversie-geoptimaliseerd</li>
                  <li>✓ Veluwemeer SEO integratie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ HARDERWIJK */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Harderwijk</span>
              </h2>
              <p className="text-xl text-gray-600">
                Alles wat je wilt weten over online marketing voor bedrijven in Harderwijk.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Harderwijk?</h3>
                <p className="text-gray-600">
                  Harderwijk heeft een unieke mix van 48.000 lokale inwoners én duizenden Veluwemeer-bezoekers per jaar. Met lokale SEO word je gevonden door beide doelgroepen. Denk aan zoektermen als "restaurant Harderwijk centrum", "watersport Veluwemeer" of "hotel Dolfinarium". Ongeveer 78% van de lokale zoekopdrachten resulteert in een bezoek binnen 24 uur.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor een bedrijf in Harderwijk?</h3>
                <p className="text-gray-600">
                  SEO-pakketten voor Harderwijk starten vanaf €497 per maand. Dit is inclusief Google Bedrijfsprofiel optimalisatie, lokale contentcreatie en maandelijkse rapportages. Voor watersportbedrijven en horeca aan het Veluwemeer adviseer ik vaak uitgebreidere pakketten (€797-1.297/maand) vanwege seizoensfluctuaties en toeristische concurrentie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaat zie in Harderwijk?</h3>
                <p className="text-gray-600">
                  Voor lokale zoektermen zoals "tandarts Harderwijk" of "kapper Waterfront" zie je vaak binnen 2-3 maanden verbeteringen. Google Bedrijfsprofiel optimalisaties werken meestal sneller (2-6 weken). Voor competitieve termen rond het Veluwemeer ("watersport", "hotel", "restaurant") duurt het 4-6 maanden voor stabiele topposities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke bedrijven in Harderwijk hebben het meest baat bij SEO?</h3>
                <p className="text-gray-600">
                  Alle lokale dienstverleners profiteren, maar vooral: watersportbedrijven (jachthavens, verhuur, les), horeca in het centrum en aan de boulevard, hotels en B&B's nabij Dolfinarium, detailhandel in historisch centrum, en dienstverleners (tandarts, kapper, garage) die afhankelijk zijn van lokale klanten uit Harderwijk, Hierden en omgeving.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat zijn de populairste zoektermen voor Harderwijk?</h3>
                <p className="text-gray-600">
                  Lokaal: "restaurant Harderwijk", "hotel Harderwijk", "tandarts Harderwijk", "kapper Harderwijk centrum". 
                  Toerisme: "watersport Veluwemeer", "jachthaven Harderwijk", "hotel Dolfinarium", "restaurant Veluwemeer". 
                  Diensten: "garage Harderwijk", "schilder Harderwijk", "installateur Waterfront". Ik help je de juiste mix te vinden voor jouw bedrijf.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Werk je ook met bedrijven in Hierden, Ermelo en omgeving?</h3>
                <p className="text-gray-600">
                  Ja! Vanuit Harderwijk werk ik in heel de Veluwe-randmeren regio: Hierden, Ermelo, Putten, Nunspeet en Elburg. Veel bedrijven bedienen de hele regio rondom het Veluwemeer. Ik zorg ervoor dat je vindbaar bent in alle relevante plaatsen waar jouw klanten zoeken, met één gecoördineerde SEO-strategie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe werken Google Ads tijdens het watersportseizoen?</h3>
                <p className="text-gray-600">
                  Voor Harderwijk pas ik Google Ads aan op seizoenspatronen. Voorjaar/zomer focus op toeristen en watersport (€15-40 per klik), herfst/winter meer op lokale diensten (€3-12 per klik). Budget verdeling: 70% april-september, 30% oktober-maart. Ik monitor dagelijks en pas biedingen aan op basis van weer, evenementen en vakantieperiodes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Harderwijk</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien aan het Veluwemeer – altijd eerlijk advies en snelle reactie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Meer weten over SEO in Harderwijk? Bel vrijblijvend voor een gratis strategiegesprek.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Harderwijk - Online Marketing Bureau</h3>
              <p className="text-gray-600 mb-2">
                <strong>Actief in Harderwijk en Veluwe-randmeren:</strong>
              </p>
              <p className="text-gray-600">
                Harderwijk Centrum • Waterfront • Hierden • Ermelo • Putten • Nunspeet • Elburg • Veluwemeer • Dolfinarium omgeving • Boulevard • Historisch centrum • Vischpoort • Nieuwe wijk • Strandbad • Jachthaven • De Breekt • Harderbroek
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}