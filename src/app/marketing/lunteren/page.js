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

export default function MarketingLunteren() {
  // Unieke lokale reviews Lunteren
  const dutchReviews = [
    { name: 'Brasserie Het Hart van Lunteren', rating: 5, text: 'Na de samenwerking met Albin staan we nu helemaal bovenaan voor "lunch Lunteren". Onze tafels zijn vrijwel altijd volgeboekt!' },
    { name: 'Autoservice Lunteren', rating: 5, text: 'Onze vindbaarheid is enorm gegroeid. Klanten uit Lunteren en omgeving weten ons nu veel beter te vinden via Google.' },
    { name: 'Kapsalon De Kniphoek', rating: 5, text: 'Sinds de lokale SEO optimalisatie hebben we een vaste stroom aan nieuwe klanten. De website en Google Ads werken perfect samen.' },
    { name: 'Praktijk FysioFit Lunteren', rating: 5, text: 'We stonden altijd laag in Google. Door slimme SEO-technieken zijn we nu hét adres voor fysiotherapie in Lunteren.' },
    { name: 'Installatiebedrijf Mulder', rating: 5, text: 'Lokale marketing heeft onze naamsbekendheid vergroot. We krijgen wekelijks nieuwe offerte-aanvragen.' },
    { name: 'Tandartspraktijk Lunteren', rating: 4.5, text: 'Onze praktijk wordt nu goed gevonden in de regio. Meer zichtbaarheid én meer afspraken. Prettige samenwerking.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Verkerk', rating: 5, text: 'Binnen vier maanden van plek 7 naar plek 1 in Google. Lokale SEO werkt écht voor ons als aannemer in Lunteren.' },
    { name: 'Schoonheidssalon Glow', rating: 5, text: 'Sinds de website optimalisatie krijgen we veel meer afspraken van mensen uit Lunteren en nabije dorpen.' },
    { name: 'Fietsenwinkel De Trappert', rating: 4.5, text: 'Nieuwe klanten weten ons nu snel te vinden dankzij sterke online marketing. Aanrader voor elk lokaal bedrijf.' },
    { name: 'Advocatenkantoor Oost', rating: 5, text: 'Professioneel advies en uitstekende resultaten. We ontvangen maandelijks meer aanvragen uit Lunteren.' },
    { name: 'Tuincentrum Buitenleven', rating: 5, text: 'Google Ads en lokale SEO hebben voor ons het verschil gemaakt, vooral in het voorjaar.' },
    { name: 'Dierenartspraktijk Dorpsplein', rating: 4.5, text: 'Sinds we inzetten op lokale zichtbaarheid, krijgen we veel nieuwe klanten uit heel Lunteren.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Lunteren | Marketing Bureau & Online Marketing Lunteren</title>
        <meta
          name="description"
          content="SEO Specialist Lunteren inschakelen? Kies voor hét marketing bureau van Lunteren en omgeving. Meer klanten, betere vindbaarheid en resultaat met SEO, Google Ads en moderne websites."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/lunteren" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Op zoek naar een</span> <br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing Bureau / SEO specialist in Lunteren</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je lokaal groeien in Lunteren?</strong><br />
              Als <b>SEO specialist in Lunteren</b> help ik je bedrijf aan een hogere positie in Google, meer aanvragen en meer omzet met moderne marketing.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor topposities in Lunteren</li>
              <li>✓ Succesvolle Google Ads campagnes</li>
              <li>✓ Strategieën voor echte lokale groei</li>
              <li>✓ <b>SEO Lunteren</b> voor ZZP, MKB & familiebedrijven</li>
              <li>✓ Websites die converteren en klanten aantrekken</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis Adviesgesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Meer over SEO in Lunteren
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam als marketing bureau in Lunteren en directe omgeving</p>
            <p className="mt-2 text-xs text-green-600">📞 Advies nodig? Bel: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Lunteren - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Lunteren" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing Lunteren: Groei lokaal met de juiste specialist"
          subtitle="Jouw succes begint bij de juiste online strategie"
          features={[
            {
              badge: "SEO Lunteren",
              title: "Lokale SEO Specialist Lunteren",
              description: "Met een slimme SEO aanpak sta je bovenaan in Google als jouw klanten zoeken naar diensten in Lunteren. Meer bereik, meer klanten én meer omzet.",
              visualTitle: "Lokale topposities",
              visualSubtitle: "Altijd gevonden worden",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Lunteren",
              description: "Bereik potentiële klanten in Lunteren via effectieve Google Ads. Haal het maximale uit elk advertentiebudget met slimme lokale campagnes.",
              visualTitle: "Direct zichtbaar",
              visualSubtitle: "Klaar voor groei",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Lunteren",
              description: "Laat je bedrijf opvallen met een professionele website die echt converteert. Wij helpen je met een complete online strategie gericht op Lunteren.",
              visualTitle: "Lokale groei",
              visualSubtitle: "Meer aanvragen & omzet",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Lunteren kiest voor <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Lunteren</span>
              </h2>
              <p className="text-xl text-gray-600">
                Complete online marketing voor ondernemers, winkels en bedrijven in Lunteren.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Lunteren */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Lunteren</h3>
                <p className="text-gray-600 mb-6">
                  Met lokale SEO sta je bovenaan als jouw klanten zoeken op “Lunteren”. Zo krijg je meer aanvragen uit je eigen regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Optimalisatie Google Bedrijfsprofiel</li>
                  <li>✓ Zoekwoorden onderzoek voor Lunteren</li>
                  <li>✓ Lokale linkbuilding & autoriteit</li>
                  <li>✓ Reviews en zichtbaarheid verhogen</li>
                </ul>
              </div>
              {/* Google Ads Lunteren */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest gekozen dienst
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Lunteren</h3>
                <p className="text-gray-600 mb-6">
                  Snel meer lokale klanten? Google Ads in Lunteren levert direct bezoekers en aanvragen op.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertentiecampagnes</li>
                  <li>✓ Gericht op regio Lunteren</li>
                  <li>✓ Resultaatgericht en meetbaar</li>
                  <li>✓ Maandelijkse optimalisatie</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Zet je bedrijf online écht op de kaart in Lunteren met een moderne website en slimme online campagnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat</li>
                  <li>✓ Mobielvriendelijk & snel</li>
                  <li>✓ Lokaal geoptimaliseerd</li>
                  <li>✓ Focus op conversie en groei</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vrijblijvend kennismaken met dé <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Lunteren</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf in Lunteren kan helpen aan meer zichtbaarheid en groei.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel direct</h3>
                <p className="text-gray-600 mb-4">Snel in contact met een lokale specialist? Bel voor een gratis advies.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Liever appen? Stuur gerust een bericht voor snelle hulp.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Lunteren & Regio</h3>
              <p className="text-gray-600">
                Lunteren • Ede • Barneveld • Bennekom • Voorthuizen • Kootwijkerbroek • Renswoude • Scherpenzeel
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
