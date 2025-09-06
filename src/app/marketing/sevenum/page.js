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

export default function MarketingSevenum() {
  // Lokale Sevenum reviews - klein dorp in Limburg
  const dutchReviews = [
    { name: 'Café De Dorpspomp', rating: 5, text: 'Ons café in het centrum van Sevenum wordt nu gevonden door bezoekers uit heel Noord-Limburg. Limburgse gastvrijheid trekt altijd!' },
    { name: 'Huisartsenpraktijk Sevenum', rating: 4.5, text: 'Voor medische zorg in Sevenum en omgeving staan we bovenaan. Patiënten uit heel de gemeente vinden ons nu moeiteloos.' },
    { name: 'Bakkerij Sevenum', rating: 5, text: 'Onze traditionele bakkerij trekt klanten uit omliggende dorpen. Limburgse specialiteiten zijn online een groot succes geworden!' },
    { name: 'Installateur Sevenum', rating: 4.5, text: 'Voor loodgieterswerk en installaties in Sevenum en omgeving staan we nu regionaal bovenaan. Perfect voor ons familiebedrijf.' },
    { name: 'Kapsalon Sevenum', rating: 5, text: 'Voor knippen en styling waren we in ons kleine dorp moeilijk vindbaar. Nu boeken klanten uit de hele regio online afspraken!' },
    { name: 'Fysiotherapie Sevenum', rating: 4.5, text: 'Onze praktijk behandelt nu patiënten uit heel Noord-Limburg. De landelijke setting wordt gewaardeerd door onze cliënten.' },
  ]
  const dutchMoreReviews = [
    { name: 'Autogarage Sevenum', rating: 5, text: 'Voor autoreparaties en APK keuringen in Sevenum zijn we eerste resultaat. Klanten uit heel de gemeente kiezen voor onze betrouwbare service.' },
    { name: 'Fietsenwinkel Sevenum', rating: 4.5, text: 'Voor fietsreparaties en nieuwe fietsen zijn we nu de eerste keuze. Veel recreatieve fietsers uit de regio vinden ons voor service.' },
    { name: 'Schilder Sevenum', rating: 5, text: 'Voor schilderwerk aan woningen en bedrijfspanden worden we nu uit heel Noord-Limburg gevraagd. Vakmanschap dat opvalt!' },
    { name: 'Dierenarts Sevenum', rating: 4.5, text: 'Voor veterinaire zorg aan gezelschapsdieren en landbouwhuisdieren zijn we nu het eerste resultaat. Perfect voor onze landelijke praktijk.' },
    { name: 'Tuincentrum Sevenum', rating: 5, text: 'Voor planten en tuinartikelen krijgen we klanten uit heel de regio. De groene omgeving van Sevenum trekt tuinliefhebbers aan.' },
    { name: 'Tandartspraktijk Sevenum', rating: 4.5, text: 'Onze moderne praktijk trekt nu patiënten uit heel Noord-Limburg. Goede zorg in een rustige omgeving wordt gewaardeerd.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Sevenum | Marketing Bureau & Online Marketing Sevenum</title>
        <meta
          name="description"
          content="SEO Specialist Sevenum inschakelen? Kies voor hét marketing bureau in Sevenum. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/sevenum" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Sevenum: Klein Dorp, Grote Dromen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Limburgse charme ontmoet digitale innovatie</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Sevenum: waar Limburgse gastvrijheid en ondernemerschap elkaar versterken in een hechte gemeenschap.</strong><br />
              Met 7.500+ inwoners, landelijke charme, sterke lokale economie en strategische ligging in Noord-Limburg nabij Venlo biedt Sevenum uitstekende kansen voor lokale ondernemers. Als <b>SEO specialist Sevenum</b> help ik bedrijven groeien in dit authentieke Limburgse dorp waar kwaliteit en persoonlijke service voorop staan.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Sevenum: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Sevenum</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Sevenum</li>
              <li>✓ <b>SEO Sevenum</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Sevenum & Noord-Limburg</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Sevenum - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Sevenum" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Sevenum met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Sevenum",
              title: "SEO Specialist Sevenum",
              description: "Wil je echt groeien in Sevenum? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Sevenum",
              description: "Direct aanvragen van inwoners uit Sevenum. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Sevenum",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Sevenum. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Sevenum groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Sevenum</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Sevenum – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Sevenum - Online Marketing Sevenum & Omgeving</h3>
              <p className="text-gray-600">
                Sevenum Centrum • Landelijk gebied • En natuurlijk ook actief in: Horst • Venlo • Venray • Grubbenvorst • Beesel • Noord-Limburg regio
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}