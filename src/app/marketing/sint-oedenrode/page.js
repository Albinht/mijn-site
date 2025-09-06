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

export default function MarketingSintOedenrode() {
  // Lokale Sint-Oedenrode reviews - historisch stadje in Noord-Brabant
  const dutchReviews = [
    { name: 'Café De Sint', rating: 5, text: 'Ons café in het historische centrum van Sint-Oedenrode wordt nu gevonden door bezoekers uit heel Noord-Brabant. Perfecte sfeer, perfecte SEO!' },
    { name: 'Bakkerij Oedenrode', rating: 5, text: 'Onze traditionele bakkerij trekt nu klanten uit omliggende dorpen. Lokale specialiteiten zijn online een hit geworden.' },
    { name: 'Huisartsenpraktijk Sint-Oedenrode', rating: 4.5, text: 'Voor medische zorg in Sint-Oedenrode staan we bovenaan. Patiënten uit de hele gemeente vinden ons nu gemakkelijk.' },
    { name: 'Fietsenmaker Sint-Oedenrode', rating: 5, text: 'Voor fietsreparaties en nieuwe fietsen in het centrum zijn we nu eerste keuze. Veel klanten uit het buitengebied!' },
    { name: 'Restaurant De Markt', rating: 4.5, text: 'Ons restaurant aan de markt krijgt nu reserveringen van bezoekers die de historische binnenstad verkennen. Geweldig seizoen gehad.' },
    { name: 'Kapsalon Sint-Oedenrode', rating: 5, text: 'Voor knippen en styling in Sint-Oedenrode waren we lokaal onvindbaar. Nu boeken klanten uit heel de gemeente online afspraken.' },
  ]
  const dutchMoreReviews = [
    { name: 'Boekhandel Oedenrode', rating: 4.5, text: 'Als dorpsboekhandel kregen we concurrentie van online shops. Nu trekken we juist lezers aan die lokaal willen kopen!' },
    { name: 'Installateur Sint-Oedenrode', rating: 5, text: 'Voor loodgieterswerk en installaties in Sint-Oedenrode en omgeving staan we nu regionaal bovenaan. Perfect voor ons familiebedrijf.' },
    { name: 'Fysiotherapie Sint-Oedenrode', rating: 4.5, text: 'Onze praktijk behandelt nu patiënten uit heel de gemeente. De lokale focus in SEO heeft ons bereik enorm vergroot.' },
    { name: 'Autogarage Sint-Oedenrode', rating: 5, text: 'Voor autoreparaties en APK keuringen zijn we nu eerste resultaat. Veel klanten uit omliggende dorpen kiezen voor ons.' },
    { name: 'Bloemenwinkel De Roos', rating: 4.5, text: 'Voor bloemen en planten in Sint-Oedenrode krijgen we nu bestellingen uit de hele regio. Online bestellen werkt perfect!' },
    { name: 'Schilder Sint-Oedenrode', rating: 5, text: 'Voor schilderwerk aan historische panden en moderne woningen worden we nu regionaal gevonden. Vakmanschap dat opvalt.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Sint-Oedenrode | Marketing Bureau & Online Marketing Sint-Oedenrode</title>
        <meta
          name="description"
          content="SEO Specialist Sint-Oedenrode inschakelen? Kies voor hét marketing bureau in Sint-Oedenrode. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/sint-oedenrode" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Sint-Oedenrode: Klein Maar Fijn Online</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Historisch hart van Noord-Brabant</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Sint-Oedenrode: waar Brabantse gezelligheid en historie samenkomen in een hechte gemeenschap.</strong><br />
              Met 18.000+ inwoners, rijke geschiedenis, centrale ligging tussen Eindhoven en 's-Hertogenbosch en sterke lokale economie biedt Sint-Oedenrode uitstekende kansen voor lokale ondernemers. Als <b>SEO specialist Sint-Oedenrode</b> help ik bedrijven groeien in deze warme Brabantse gemeente waar iedereen elkaar kent.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Sint-Oedenrode: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Sint-Oedenrode</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Sint-Oedenrode</li>
              <li>✓ <b>SEO Sint-Oedenrode</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Sint-Oedenrode & omgeving</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Sint-Oedenrode - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Sint-Oedenrode" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Sint-Oedenrode met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Sint-Oedenrode",
              title: "SEO Specialist Sint-Oedenrode",
              description: "Wil je echt groeien in Sint-Oedenrode? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Sint-Oedenrode",
              description: "Direct aanvragen van inwoners uit Sint-Oedenrode. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Sint-Oedenrode",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Sint-Oedenrode. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Sint-Oedenrode groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Sint-Oedenrode</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Sint-Oedenrode – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Sint-Oedenrode - Online Marketing Sint-Oedenrode & Omgeving</h3>
              <p className="text-gray-600">
                Sint-Oedenrode Centrum • Markt • En natuurlijk ook actief in: Schijndel • Veghel • Best • Son en Breugel • Eindhoven • 's-Hertogenbosch
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}