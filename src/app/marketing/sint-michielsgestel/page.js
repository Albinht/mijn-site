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

export default function MarketingSintMichielsgestel() {
  // Lokale Sint-Michielsgestel reviews - kloosterstad in Noord-Brabant
  const dutchReviews = [
    { name: 'Restaurant Het Klooster', rating: 5, text: 'Ons restaurant nabij de historische kloostergebouwen krijgt nu gasten uit heel Brabant. De spirituele sfeer trekt veel bezoekers aan.' },
    { name: 'Bed & Breakfast Gestel', rating: 5, text: 'Onze B&B profiteert van toeristen die rust zoeken in Sint-Michielsgestel. Boekingen stromen binnen dankzij online zichtbaarheid.' },
    { name: 'Huisartsenpraktijk Sint-Michielsgestel', rating: 4.5, text: 'Voor medische zorg in Sint-Michielsgestel staan we bovenaan. Patiënten uit heel de gemeente vinden ons nu moeiteloos.' },
    { name: 'Kapsalon Gestel', rating: 5, text: 'Voor knippen en styling in het centrum waren we moeilijk vindbaar. Nu boeken klanten uit de hele regio online afspraken.' },
    { name: 'Fysiotherapie Sint-Michielsgestel', rating: 4.5, text: 'Onze praktijk behandelt nu patiënten uit heel de gemeente. Lokale SEO heeft ons patiëntenbestand flink uitgebreid.' },
    { name: 'Fietsenwinkel Gestel', rating: 5, text: 'Voor fietsreparaties en nieuwe fietsen zijn we nu de eerste keuze. Veel recreatieve fietsers vinden ons voor onderhoud.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bakkerij Sint-Michielsgestel', rating: 4.5, text: 'Onze traditionele bakkerij trekt nu klanten uit omliggende plaatsen. Brabantse specialiteiten zijn online een succes!' },
    { name: 'Installateur Sint-Michielsgestel', rating: 5, text: 'Voor loodgieterswerk en installaties staan we nu regionaal bovenaan. Perfect voor ons lokale familiebedrijf.' },
    { name: 'Autogarage Gestel', rating: 4.5, text: 'Voor autoreparaties en APK in Sint-Michielsgestel zijn we eerste resultaat. Klanten uit heel de gemeente kiezen voor onze service.' },
    { name: 'Tuincentrum Sint-Michielsgestel', rating: 5, text: 'Voor planten en tuinartikelen krijgen we nu klanten uit heel Noord-Brabant. De groene omgeving trekt tuinliefhebbers.' },
    { name: 'Schilder Gestel', rating: 4.5, text: 'Voor schilderwerk aan historische en moderne panden worden we nu regionaal gevonden. Vakmanschap dat gezien wordt.' },
    { name: 'Tandartspraktijk Sint-Michielsgestel', rating: 5, text: 'Onze praktijk trekt nu patiënten uit heel de regio. Moderne zorg in een historische omgeving.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Sint-Michielsgestel | Marketing Bureau & Online Marketing Sint-Michielsgestel</title>
        <meta
          name="description"
          content="SEO Specialist Sint-Michielsgestel inschakelen? Kies voor hét marketing bureau in Sint-Michielsgestel. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/sint-michielsgestel" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Sint-Michielsgestel: Kloosters en Kansen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Spirituele rust, zakelijke groei</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Sint-Michielsgestel: waar historie, spiritualiteit en moderne ondernemersgeest samenkomen.</strong><br />
              Met 29.000+ inwoners, rijke kloostergeschiedenis, groene omgeving en centrale ligging nabij 's-Hertogenbosch biedt Sint-Michielsgestel unieke kansen. Als <b>SEO specialist Sint-Michielsgestel</b> help ik ondernemers groeien in deze bijzondere Brabantse gemeente die rust en dynamiek perfect combineert.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Sint-Michielsgestel: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Sint-Michielsgestel</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Sint-Michielsgestel</li>
              <li>✓ <b>SEO Sint-Michielsgestel</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Sint-Michielsgestel & regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Sint-Michielsgestel - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Sint-Michielsgestel" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Sint-Michielsgestel met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Sint-Michielsgestel",
              title: "SEO Specialist Sint-Michielsgestel",
              description: "Wil je echt groeien in Sint-Michielsgestel? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Sint-Michielsgestel",
              description: "Direct aanvragen van inwoners uit Sint-Michielsgestel. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Sint-Michielsgestel",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Sint-Michielsgestel. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Sint-Michielsgestel groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Sint-Michielsgestel</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Sint-Michielsgestel – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Sint-Michielsgestel - Online Marketing Sint-Michielsgestel & Omgeving</h3>
              <p className="text-gray-600">
                Sint-Michielsgestel Centrum • Kloostergebied • Haaren • Vught • En natuurlijk ook actief in: 's-Hertogenbosch • Tilburg • Eindhoven • Oisterwijk
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}