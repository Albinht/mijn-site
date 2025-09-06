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

export default function MarketingSintAnthonis() {
  // Lokale Sint-Anthonis reviews - landelijke gemeente in Noord-Brabant
  const dutchReviews = [
    { name: 'Agrarisch Bedrijf Sint-Anthonis', rating: 5, text: 'Ons familiebedrijf in de landbouw bereikt nu klanten uit heel Noord-Brabant. B2B marketing voor agrarische diensten werkt perfect!' },
    { name: 'Café De Peel', rating: 5, text: 'Ons café in het centrum van Sint-Anthonis wordt nu gevonden door bezoekers uit de hele regio. Brabantse gezelligheid trekt altijd!' },
    { name: 'Huisartsenpraktijk Sint-Anthonis', rating: 4.5, text: 'Voor medische zorg in Sint-Anthonis staan we bovenaan. Patiënten uit heel de landelijke gemeente vinden ons nu.' },
    { name: 'Installateur Sint-Anthonis', rating: 5, text: 'Voor technische installaties in landbouwbedrijven en woningen zijn we nu eerste keuze. Veel klanten uit het buitengebied!' },
    { name: 'Garage Sint-Anthonis', rating: 4.5, text: 'Voor onderhoud van tractoren, bedrijfsauto\'s en personenwagens staan we regionaal bovenaan. Agrarische sector waardeert onze service.' },
    { name: 'Dierenarts Sint-Anthonis', rating: 5, text: 'Voor veterinaire zorg aan landbouwhuisdieren en gezelschapsdieren zijn we nu het eerste resultaat. Perfecte combinatie!' },
  ]
  const dutchMoreReviews = [
    { name: 'Loonbedrijf Sint-Anthonis', rating: 5, text: 'Voor agrarische dienstverlening bereiken we nu boeren uit heel Noord-Brabant en Limburg. Seizoenswerk loopt perfect!' },
    { name: 'Bakkerij Sint-Anthonis', rating: 4.5, text: 'Onze dorpsbakkerij trekt klanten uit omliggende dorpen. Verse producten en lokale specialiteiten zijn online een hit!' },
    { name: 'Fysiotherapie Sint-Anthonis', rating: 4.5, text: 'Onze praktijk behandelt veel mensen uit de agrarische sector. Werkgerelateerde klachten vereisen specialistische zorg.' },
    { name: 'Accountant Sint-Anthonis', rating: 5, text: 'Voor financiële diensten aan agrarische bedrijven staan we nu regionaal bovenaan. Specialisatie in landbouw loont!' },
    { name: 'Bouwbedrijf Sint-Anthonis', rating: 4.5, text: 'Voor nieuwbouw en verbouw van agrarische gebouwen worden we nu uit heel de regio gevraagd. Vakmanschap in de landbouw.' },
    { name: 'Tuincentrum Sint-Anthonis', rating: 5, text: 'Voor planten, tuinartikelen en landbouwbenodigdheden krijgen we klanten uit heel de agrarische regio. Perfect assortiment!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Sint-Anthonis | Marketing Bureau & Online Marketing Sint-Anthonis</title>
        <meta
          name="description"
          content="SEO Specialist Sint-Anthonis inschakelen? Kies voor hét marketing bureau in Sint-Anthonis. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/sint-anthonis" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Sint-Anthonis: Landelijk Leven, Digitale Groei</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van de Peel naar de digitale wereld</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Sint-Anthonis: waar agrarische traditie en moderne ondernemersgeest hand in hand gaan.</strong><br />
              Met 11.600+ inwoners, sterke agrarische basis, landelijke charme en strategische ligging nabij Limburg biedt Sint-Anthonis unieke kansen voor lokale dienstverleners en agrarische bedrijven. Als <b>SEO specialist Sint-Anthonis</b> help ik ondernemers groeien in deze authentieke Brabantse gemeente.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Sint-Anthonis: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Sint-Anthonis</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Sint-Anthonis</li>
              <li>✓ <b>SEO Sint-Anthonis</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Sint-Anthonis & Peel regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Sint-Anthonis - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Sint-Anthonis" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Sint-Anthonis met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Sint-Anthonis",
              title: "SEO Specialist Sint-Anthonis",
              description: "Wil je echt groeien in Sint-Anthonis? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Sint-Anthonis",
              description: "Direct aanvragen van inwoners en bedrijven uit Sint-Anthonis. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Sint-Anthonis",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Sint-Anthonis. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Sint-Anthonis groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Sint-Anthonis</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Sint-Anthonis – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Sint-Anthonis - Online Marketing Sint-Anthonis & Omgeving</h3>
              <p className="text-gray-600">
                Sint-Anthonis Centrum • Landelijk gebied • En natuurlijk ook actief in: Mill • Boxmeer • Cuijk • Venray • Gennep • Peel regio
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}