'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../assets/graph.png'
import avatarImage from '../../assets/avatar.png'
import masterSeoImage from '../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../assets/Keyword_research.png'
import contentRanksImage from '../../assets/content that ranks.png'
import Button from '../../components/Button'
import ReviewSlider from '../../components/ReviewSlider'
import FeatureSection from '../../components/FeatureSection'

export default function MarketingNijkerk() {
  // Lokale Nijkerk reviews
  const dutchReviews = [
    { name: 'Lunchcafé Havenzicht', rating: 5, text: 'Door Albin zijn we nu uitstekend vindbaar op "lunch Nijkerk". Onze reserveringen zijn flink gestegen.' },
    { name: 'Autobedrijf Veenstra', rating: 5, text: 'Onze website en Google Ads leveren elke week nieuwe klanten uit Nijkerk op. De samenwerking is snel en effectief.' },
    { name: 'Kapsalon Knip & Zo', rating: 5, text: 'Sinds de optimalisatie zijn we zichtbaar voor heel Nijkerk. We ontvangen continu nieuwe afspraken.' },
    { name: 'Fysiotherapie De Brink', rating: 5, text: 'We staan stabiel bovenaan in Google en krijgen meer aanmeldingen dan ooit tevoren.' },
    { name: 'Loodgietersbedrijf NijTech', rating: 5, text: 'Lokale marketing levert kwalitatieve aanvragen uit de regio op. Elke euro in online marketing wordt terugverdiend.' },
    { name: 'Tandartsenpraktijk Watergoor', rating: 4.5, text: 'Sinds onze samenwerking krijgen we structureel meer aanvragen en zijn we lokaal toonaangevend.' },
  ]
  const dutchMoreReviews = [
    { name: 'Aannemersbedrijf van der Meer', rating: 5, text: 'Van plek 6 naar de absolute top in Google. Onze opdrachten uit Nijkerk zijn verdubbeld.' },
    { name: 'Schoonheidssalon Belle', rating: 5, text: 'Sinds de website is geoptimaliseerd komen er veel meer afspraken binnen, vooral uit Nijkerk en Hoevelaken.' },
    { name: 'Fietswinkel Op de Trap', rating: 4.5, text: 'Online zichtbaarheid betekent nu echt meer klanten uit Nijkerk. Zeer tevreden over de strategie.' },
    { name: 'Advocatenkantoor Stede', rating: 5, text: 'Betrouwbaar advies en snelle resultaten. Wij worden nu lokaal veel beter gevonden.' },
    { name: 'Tuincentrum Groenrijk', rating: 5, text: 'Met Google Ads en lokale SEO bereiken we nu de juiste mensen, vooral in het tuinseizoen.' },
    { name: 'Dierenkliniek Nijkerk', rating: 4.5, text: 'Onze online zichtbaarheid in de regio is sterk toegenomen. Het verschil merken we dagelijks.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Nijkerk | Marketing Bureau & Online Marketing Nijkerk</title>
        <meta
          name="description"
          content="SEO Specialist Nijkerk inschakelen? Kies voor hét marketing bureau van Nijkerk. Meer aanvragen, zichtbaarheid en klanten met lokale SEO, Google Ads en professionele websites."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-nijkerk" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Op zoek naar een</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing Bureau of SEO Specialist in Nijkerk?</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Meer lokale klanten bereiken in Nijkerk?</strong><br />
              Als <b>SEO specialist in Nijkerk</b> zorg ik ervoor dat jouw bedrijf bovenaan staat in Google en écht gevonden wordt. Van slimme marketing tot conversiegerichte websites, alles gericht op groei.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Nijkerk: hoger in Google</li>
              <li>✓ Google Ads: directe aanvragen uit Nijkerk</li>
              <li>✓ Maatwerk strategie voor ondernemers in Nijkerk</li>
              <li>✓ <b>SEO Nijkerk</b> voor zzp, mkb en familiebedrijven</li>
              <li>✓ Websites die bezoekers omzetten in klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis Adviesgesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Meer over SEO in Nijkerk
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief als marketing bureau in Nijkerk & regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Vragen? Bel direct: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Nijkerk - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Nijkerk" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Nijkerk laten groeien met lokale marketing"
          subtitle="Jouw zichtbaarheid en succes begint lokaal"
          features={[
            {
              badge: "SEO Nijkerk",
              title: "SEO Specialist Nijkerk",
              description: "Met slimme lokale SEO staat jouw bedrijf bovenaan als klanten zoeken naar jouw diensten in Nijkerk. Meer vindbaarheid betekent meer klanten en omzet.",
              visualTitle: "Lokale topposities",
              visualSubtitle: "Altijd zichtbaar in Nijkerk",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Nijkerk",
              description: "Direct resultaat met Google Ads. Bereik inwoners van Nijkerk op het juiste moment en krijg concrete aanvragen in je mailbox.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal rendement",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Nijkerk",
              description: "Een professionele website en online strategie die echt werkt voor bedrijven in Nijkerk. Gericht op conversie en lokale groei.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer leads & klanten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Nijkerk kiest voor <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> van Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Nijkerk</span>
              </h2>
              <p className="text-xl text-gray-600">
                Effectieve online marketing voor ondernemers en bedrijven uit Nijkerk.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Nijkerk */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Nijkerk</h3>
                <p className="text-gray-600 mb-6">
                  Wil je écht gevonden worden? Met lokale SEO in Nijkerk zorg je dat je bovenaan staat als men zoekt op jouw dienst + Nijkerk.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoorden onderzoek voor Nijkerk</li>
                  <li>✓ Content, linkbuilding & autoriteit</li>
                  <li>✓ Reviews en zichtbaarheid stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Nijkerk */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Nijkerk
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Nijkerk</h3>
                <p className="text-gray-600 mb-6">
                  Snel meer klanten en aanvragen? Met Google Ads ben je direct zichtbaar in Nijkerk en omgeving.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertentiecampagnes</li>
                  <li>✓ Gericht op inwoners van Nijkerk</li>
                  <li>✓ Resultaat dat je terugziet</li>
                  <li>✓ Maandelijkse optimalisatie & rapportage</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Laat je bedrijf in Nijkerk groeien met een moderne website, slimme campagnes en een strategie die je echt verder helpt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Maatwerk website voor lokale markt</li>
                  <li>✓ Snel, mobielvriendelijk en veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Lokaal vindbaar & relevant</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ontdek jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Nijkerk</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Wil je weten wat ik als marketing bureau voor jouw bedrijf in Nijkerk kan betekenen? Neem gerust contact op.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel direct</h3>
                <p className="text-gray-600 mb-4">Snel schakelen? Bel voor een gratis adviesgesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Liever WhatsApp? Stuur gerust een appje voor snel contact.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Nijkerk & Regio</h3>
              <p className="text-gray-600">
                Nijkerk • Hoevelaken • Amersfoort • Barneveld • Bunschoten • Putten • Leusden • Voorthuizen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
