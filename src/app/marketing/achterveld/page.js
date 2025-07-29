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

export default function MarketingAchterveld() {
  // Lokale Achterveld reviews
  const dutchReviews = [
    { name: 'Boerderij Achterveldse Hoeve', rating: 5, text: 'Sinds Albin onze online zichtbaarheid regelt, krijgen we meer boekingen dan ooit. We zijn echt vindbaar voor mensen uit de regio!' },
    { name: 'Garage Achterveld Service', rating: 5, text: 'Onze garage groeit dankzij slimme Google Ads. Elke week nieuwe klanten uit Achterveld en omliggende dorpen.' },
    { name: 'Restaurant De Achterveldse Kamer', rating: 5, text: 'Na de website en lokale SEO van Albin zijn onze tafels vaker volgeboekt. Aanrader voor elk Achtervelds bedrijf!' },
    { name: 'Kapsalon Achterveldse Stijl', rating: 5, text: 'Sinds we bovenaan staan op “kapper Achterveld” hebben we een volle agenda. Eenvoudig, snel geregeld en zichtbaar resultaat.' },
    { name: 'Installatiebedrijf Achterveld Tech', rating: 5, text: 'Onze Google Ads leveren nu echt goede aanvragen op. Albin denkt mee, stuurt bij en zorgt dat we groeien.' },
    { name: 'Tandartspraktijk Achterveld', rating: 4.5, text: 'We zijn eindelijk online zichtbaar in Achterveld en hebben meer nieuwe patiënten uit de regio.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Achterveld BV', rating: 5, text: 'We gingen in een paar maanden van “onvindbaar” naar #1 in Google voor onze bouwdiensten. Krachtige lokale SEO!' },
    { name: 'Schoonheidssalon Achterveld', rating: 5, text: 'Na optimalisatie krijgen we meer afspraken én mooie Google reviews van lokale klanten.' },
    { name: 'Fietsenwinkel Achterveldse Wielen', rating: 4.5, text: 'Klanten uit Leusden en Amersfoort weten ons nu online te vinden. Slimme lokale strategie.' },
    { name: 'Advocatenkantoor Achterveld', rating: 5, text: 'Elke maand nieuwe cliënten uit Achterveld dankzij sterke lokale zichtbaarheid.' },
    { name: 'Tuincentrum Achterveldse Groen', rating: 5, text: 'Onze Google Ads campagne levert vooral in het voorjaar extra drukte en omzet.' },
    { name: 'Dierenarts Achterveld', rating: 4.5, text: 'Sinds wij #1 zijn in Google komen er meer nieuwe baasjes bij ons. Albin levert resultaat!' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Achterveld | Marketing Bureau & Online Marketing Achterveld</title>
        <meta
          name="description"
          content="SEO Specialist Achterveld nodig? Het lokale marketing bureau voor Achterveld en omgeving. Groei met slimme SEO, Google Ads en online strategie voor bedrijven uit Achterveld."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/achterveld" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Lokaal groeien in Achterveld?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">SEO & Marketing voor kleine ondernemers</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je meer klanten of boekingen uit Achterveld en omstreken?</strong><br />
              Als <b>SEO specialist in Achterveld</b> zorg ik dat lokale bedrijven — groot én klein — gevonden worden door de juiste mensen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Zichtbaar in Google & Maps: gevonden in je dorp</li>
              <li>✓ Direct meer aanvragen met Google Ads</li>
              <li>✓ Professionele, conversiegerichte website</li>
              <li>✓ Strategie op maat voor Achterveld en regio</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis kennismaken <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Voorbeelden & Resultaten
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Ook voor zzp’ers, familiebedrijven en lokale winkels</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel of app: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Achterveld - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Achterveld" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP / FEATURE SECTION */}
        <FeatureSection
          title="Wat kan slimme marketing voor jouw Achterveldse bedrijf doen?"
          subtitle="Groei lokaal, trek klanten uit de regio aan"
          features={[
            {
              badge: "SEO Achterveld",
              title: "Lokale SEO: Word gevonden in je dorp",
              description: "Met sterke SEO word je zichtbaar in Google en Maps voor iedereen die in Achterveld zoekt naar jouw dienst. Meer lokale klanten, meer vertrouwen.",
              visualTitle: "SEO & Google Maps",
              visualSubtitle: "Bovenaan in Achterveld",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads: Snel zichtbaar voor je doelgroep",
              description: "Direct meer aanvragen via lokaal ingestelde Google Ads. Ideaal voor bedrijven die nú klanten willen aantrekken.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Lokale aanvragen",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Website die wél voor je werkt",
              description: "Een conversiegerichte site die jouw verhaal vertelt én klanten overtuigt. Snel, mobiel, persoonlijk en lokaal vindbaar.",
              visualTitle: "Webdesign",
              visualSubtitle: "Voor kleine bedrijven",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Lokale ondernemers in <span class='bg-[#F7D8FA] px-2 rounded italic'>Achterveld</span> over Albin"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau voor <span className="bg-[#F7D8FA] px-2 rounded italic">Achterveld</span>
              </h2>
              <p className="text-lg text-gray-600">
                Van zzp’er tot dorpscafé: ik help je groeien in Google én lokaal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lokale SEO Achterveld */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Achterveld</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf bovenaan in Google als mensen zoeken op ‘[jouw branche] Achterveld’. Meer zichtbaarheid = meer klanten!
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Lokale zoekwoorden en content</li>
                  <li>✓ Reviews verzamelen & beheren</li>
                  <li>✓ Lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Achterveld */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij ondernemers uit Achterveld
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Achterveld</h3>
                <p className="text-gray-600 mb-6">
                  Met slimme Google Ads campagne krijg je direct meer aanvragen, zonder dure verspilling. Gericht op jouw buurt en regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale campagne opzetten</li>
                  <li>✓ Gericht op Achterveld & omgeving</li>
                  <li>✓ Conversie optimalisatie</li>
                  <li>✓ Maandelijkse updates en rapportage</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Geen standaard template, maar een website die vertrouwen wekt én klanten oplevert. Makkelijk zelf aan te passen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Uniek ontwerp voor je zaak</li>
                  <li>✓ Mobiel en snel</li>
                  <li>✓ Gericht op aanvragen & verkoop</li>
                  <li>✓ Lokale vindbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Direct kennis maken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Achterveld</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe jouw Achterveldse bedrijf online kan groeien. Eén gesprek is gratis en zonder verplichtingen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Vragen of meteen starten? Bel voor advies zonder verplichting.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stuur je vraag via WhatsApp. Snel en persoonlijk antwoord!</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Achterveld & Regio</h3>
              <p className="text-gray-600">
                Achterveld • Leusden • Amersfoort • Hoevelaken • Nijkerk • Barneveld • Ede • Bennekom • Lunteren
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
