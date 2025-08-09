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

export default function MarketingAchterhoek() {
  // Lokale Achterhoek reviews
  const dutchReviews = [
    { name: 'Restaurant De Achterhoek', rating: 5, text: 'Sinds we werken met Albin zijn we de best vindbare horecazaak van de Achterhoek. Gasten uit heel Gelderland!' },
    { name: 'Garage Winterswijk', rating: 5, text: 'De marketingstrategie brengt constant klanten uit de hele Achterhoek. Google Ads presteert fantastisch.' },
    { name: 'Kapsalon Groenlo', rating: 5, text: 'Na de website update krijgen we boekingen uit de hele Achterhoek. Top positie voor kapper Achterhoek.' },
    { name: 'Fysiotherapie Doetinchem', rating: 5, text: 'Onze praktijk wordt dagelijks gevonden door patiënten uit de Achterhoek. Wachtlijst groeit gestaag.' },
    { name: 'Installatiebedrijf Achterhoek', rating: 5, text: 'Lokale SEO zorgt voor projecten uit heel de Achterhoek. Van Winterswijk tot Doetinchem.' },
    { name: 'Tandarts Lichtenvoorde', rating: 4.5, text: 'Meer patiënten uit de hele Achterhoek, betere zichtbaarheid en meer doorverwijzingen. Top!' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Achterhoek', rating: 5, text: 'Onze projecten komen uit heel de Achterhoek binnen. Top positie voor "aannemer Achterhoek".' },
    { name: 'Tuincentrum Doetinchem', rating: 5, text: 'Door slimme marketing komen klanten uit heel de Achterhoek. Omzet flink gestegen.' },
    { name: 'Fietsenwinkel Winterswijk', rating: 4.5, text: 'Onze service wordt nu gevonden door fietsers uit de hele Achterhoek.' },
    { name: 'Accountant Groenlo', rating: 5, text: 'Google Ads levert ondernemers op uit heel de Achterhoek. Van Aalten tot Zelhem.' },
    { name: 'Schildersbedrijf Achterhoek', rating: 5, text: 'Onze diensten zijn zichtbaar voor klanten uit heel de Achterhoek.' },
    { name: 'Dierenkliniek Achterhoek', rating: 4.5, text: 'Nummer 1 voor "dierenarts Achterhoek" en patiënten uit heel de regio.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Achterhoek | Marketing Bureau & Online Marketing Achterhoek</title>
        <meta
          name="description"
          content="SEO Specialist Achterhoek inschakelen? Kies voor hét marketing bureau in de Achterhoek. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/achterhoek" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Van Doetinchem tot Winterswijk: heel de Achterhoek digitaal bereiken</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">445.000 Achterhoekers + Duitse grensregio wachten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>De Achterhoek: 1.200km² ondernemerschap, natuur en grensoverschrijdende kansen.</strong><br />
              Met 53 kernen, van grootstad Doetinchem (58.000 inw.) tot pittoresk Bronkhorst (150 inw.), plus de Duitse grens van Bocholt tot Vreden, biedt de Achterhoek unieke mogelijkheden. Als <b>SEO specialist Achterhoek</b> ken ik elke gemeente: van de maakindustrie in Ulft tot toerisme in Winterswijk, van agrarisch Lichtenvoorde tot hightech in Doetinchem.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Achterhoek: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit de Achterhoek</li>
              <li>✓ Speciaal voor bedrijven in heel de Achterhoek</li>
              <li>✓ <b>SEO Achterhoek</b> met meetbaar resultaat</li>
              <li>✓ Websites die bezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek regionale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in heel de Achterhoek</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Achterhoek - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Achterhoek" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in de Achterhoek met regionale marketing"
          subtitle="Lokale vindbaarheid en conversie door heel de regio"
          features={[
            {
              badge: "SEO Achterhoek",
              title: "SEO Specialist Achterhoek",
              description: "Wil je echt groeien in de Achterhoek? Ik zorg dat je regionaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit heel de regio.",
              visualTitle: "Regionaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Achterhoek",
              description: "Direct aanvragen van inwoners en bedrijven uit de hele Achterhoek. Je adverteert regionaal gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Achterhoek",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit de hele Achterhoek. Volledig geoptimaliseerd voor de regionale markt.",
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
          title="De Achterhoek groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in de <span className="bg-[#F7D8FA] px-2 rounded italic">Achterhoek</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale dienstverlener tot regionale onderneming – ik help je bedrijf online groeien in de hele Achterhoek.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Achterhoek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Achterhoek</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke regionale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in de Achterhoek.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Achterhoek</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Achterhoek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in de Achterhoek
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Achterhoek</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor de hele Achterhoek.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Regionale advertenties & campagnes</li>
                  <li>✓ Focus op hele Achterhoek</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Resultaat dat telt</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, regionale campagnes en een strategie die werkt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Achterhoek</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke regionale zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Achterhoek</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de Achterhoek – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in de hele Achterhoek</h3>
              <p className="text-gray-600">
                Doetinchem • Winterswijk • Groenlo • Aalten • Lichtenvoorde • Zelhem • Bronkhorst • Vorden • Lochem
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}