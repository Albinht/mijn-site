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

export default function MarketingSchoonebeek() {
  // Lokale Schoonebeek reviews - industriedorp in Zuidoost-Drenthe met olie-industrie
  const dutchReviews = [
    { name: 'Industriebedrijf Oost-Drenthe', rating: 5, text: 'Voor machinebewerking en technische diensten in Schoonebeek krijgen we nu klanten van heel Drenthe en Overijssel. Topresultaten!' },
    { name: 'Restaurant De Peize', rating: 5, text: 'Ons restaurant in het centrum van Schoonebeek zit nu vol met gasten uit Emmen, Coevorden en omgeving. Perfecte lokale marketing!' },
    { name: 'Natuurgids Bargerveen', rating: 4.5, text: 'Voor natuurwandelingen in het Bargerveen en omgeving Schoonebeek krijgen we nu boekingen van heel Noord-Nederland.' },
    { name: 'Garage Zuidoost Drenthe', rating: 5, text: 'Voor APK en autoreparaties worden we nu gevonden door heel de regio. De Google Ads campagne werkt uitstekend!' },
    { name: 'Pension Het Veen', rating: 5, text: 'Ons kleine pension voor natuurliefhebbers boekt nu maanden vooruit vol dankzij sterke online zichtbaarheid.' },
    { name: 'Installatiebedrijf Drentse Energie', rating: 4.5, text: 'Voor duurzame energie-installaties in Schoonebeek en omgeving hebben we constant nieuwe aanvragen via onze website.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Veenland', rating: 5, text: 'Voor nieuwbouw en renovatie in Schoonebeek en de veenkoloniën trekken we nu klanten van heel Zuidoost-Drenthe.' },
    { name: 'Fysiotherapie Praktijk Emlichheim', rating: 4.5, text: 'Onze praktijk aan de Duitse grens krijgt nu patiënten van beide kanten van de grens. Geweldige grensoverschrijdende marketing!' },
    { name: 'Camping Bargerveen', rating: 5, text: 'Onze camping in de natuurrijke omgeving van Schoonebeek krijgt nu gasten van heel Nederland. Perfect seizoensresultaat!' },
    { name: 'Agrarisch Loonbedrijf Veen', rating: 5, text: 'Voor landbouwdiensten in de veenkoloniën worden we nu regionaal gevonden. Uitstekende return op marketing investering!' },
    { name: 'Kapsalon De Nieuwe Compagnie', rating: 4.5, text: 'In het centrum van Schoonebeek hebben we nu klanten van Emmen tot over de Duitse grens. Sterke lokale groei!' },
    { name: 'IT-Diensten Grensland', rating: 5, text: 'Voor zakelijke IT-ondersteuning in Schoonebeek en omgeving hebben we dankzij SEO een constante klantenstroom.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Schoonebeek | Marketing Bureau & Online Marketing Schoonebeek</title>
        <meta
          name="description"
          content="SEO Specialist Schoonebeek inschakelen? Kies voor hét marketing bureau in Drenthe. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/schoonebeek" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Schoonebeek</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Drentse grensstreek online bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Schoonebeek: industriestadje aan de Duitse grens waar energie, natuur en ondernemerschap samenkomen.</strong><br />
              Met 3.400 inwoners en gelegen in de gemeente Emmen, vlakbij Duitsland en het natuurgebied Bargerveen, biedt Schoonebeek unieke kansen. Van energie-industrie tot natuurtoerisme - als <b>SEO specialist Schoonebeek</b> help ik bedrijven in deze grensregio hun lokale en internationale potentieel te benutten met gerichte online marketing.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Schoonebeek: bovenaan in Zuidoost-Drenthe</li>
              <li>✓ Google Ads: direct aanvragen uit de grensregio</li>
              <li>✓ Speciaal voor industrie en natuurtoerisme</li>
              <li>✓ <b>SEO Schoonebeek</b> met grensoverschrijdende strategie</li>
              <li>✓ Websites die bezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek grensregio-cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Schoonebeek & grensregio Drenthe-Duitsland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Schoonebeek - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Schoonebeek" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer grensregio-klanten met slimme marketing"
          subtitle="Van industrie tot natuur, zonder poespas"
          features={[
            {
              badge: "SEO Schoonebeek",
              title: "SEO Specialist Schoonebeek",
              description: "Wil je echt groeien in Schoonebeek? Ik zorg dat je wordt gevonden door bedrijven en particulieren in de Drentse grensregio en zelfs over de Duitse grens.",
              visualTitle: "Grensregio bovenaan",
              visualSubtitle: "Drenthe-Duitsland zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Schoonebeek",
              description: "Direct aanvragen van klanten uit Schoonebeek, Emmen, Coevorden en zelfs Duitsland. Je adverteert gericht in deze unieke grensregio.",
              visualTitle: "Direct grensresultaat",
              visualSubtitle: "Internationaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Grens Marketing",
              title: "Marketing Bureau Schoonebeek",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen uit de hele grensregio. Geoptimaliseerd voor Nederlandse én Duitse bezoekers.",
              visualTitle: "Website & Grensgroei",
              visualSubtitle: "Meer regionale klanten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Schoonebeek groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Schoonebeek</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van industriebedrijf tot natuurgids – ik help jouw bedrijf online groeien in Schoonebeek.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Schoonebeek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Schoonebeek</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke regionale SEO sta jij bovenaan bij zoekers in Zuidoost-Drenthe. Word gevonden door mensen die zoeken naar jouw diensten in de grensregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Schoonebeek</li>
                  <li>✓ Content voor grensregio-marketing</li>
                  <li>✓ Nederlandse én Duitse zichtbaarheid</li>
                </ul>
              </div>
              {/* Google Ads Schoonebeek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Drentse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Schoonebeek</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor de Drentse grensregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Grensregionale advertenties</li>
                  <li>✓ Focus op Schoonebeek en omgeving</li>
                  <li>✓ Meertalige campagne-opties</li>
                  <li>✓ Meetbaar grensresultaat</li>
                </ul>
              </div>
              {/* Website & Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, grensregionale campagnes en een strategie die werkt in Drenthe en daarbuiten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Schoonebeek</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke grensregionale zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Schoonebeek</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Schoonebeek – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Schoonebeek - Online Marketing Bureau Drentse Grensregio</h3>
              <p className="text-gray-600">
                Actief in heel Schoonebeek & grensregio • Emmen • Coevorden • Hardenberg • Nieuw-Amsterdam • Klazienaveen • Erica • Weiteveen • Bargerveen • Zwartemeer • Emlichheim (DE) • Grensoverschrijdende marketing
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}