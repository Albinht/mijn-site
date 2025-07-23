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

export default function MarketingBennekom() {
  // Unieke lokale reviews Bennekom
  const dutchReviews = [
    { name: 'Lunchroom De Dorpsbrink', rating: 5, text: 'Sinds Albin onze online vindbaarheid heeft aangepakt, worden wij gevonden op "lunch Bennekom". Onze reserveringen zijn flink gestegen!' },
    { name: 'Autobedrijf Bennekom', rating: 5, text: 'Lokale SEO en Google Ads leveren wekelijks nieuwe klanten op. Onze investeringen in online marketing betalen zich direct terug.' },
    { name: 'Kapsalon Fris', rating: 5, text: 'De website en marketingcampagnes zorgen continu voor nieuwe afspraken. Wij zijn nu zichtbaar voor heel Bennekom en omliggende dorpen.' },
    { name: 'Fysio Bennekom', rating: 5, text: 'Door een slimme SEO-strategie staan we stabiel bovenaan in Google. Onze agenda zit voller dan ooit.' },
    { name: 'Installatiebedrijf De Vries', rating: 5, text: 'Met Google Ads gericht op Bennekom krijgen we elke week goede leads uit de regio. De samenwerking verloopt soepel.' },
    { name: 'Tandartsenpraktijk Dorpsplein', rating: 4.5, text: 'Onze zichtbaarheid in Bennekom is fors toegenomen. Snelle communicatie en een professionele aanpak.' },
  ]
  const dutchMoreReviews = [
    { name: 'Aannemersbedrijf Verbeek', rating: 5, text: 'Onze ranking in Google is van pagina 4 naar positie 1 gegaan. Lokaal vindbaar zijn in Bennekom werkt écht.' },
    { name: 'Schoonheidssalon Mooi', rating: 5, text: 'Sinds de website-optimalisatie krijgen we meer klanten uit Bennekom en Wageningen. Het resultaat is direct zichtbaar.' },
    { name: 'Fietswinkel De Ketting', rating: 4.5, text: 'Dankzij lokale marketing weten fietsers uit heel Bennekom ons nu te vinden. Het verschil is groot.' },
    { name: 'Advocatenkantoor Rijn', rating: 5, text: 'Regelmatig nieuwe leads via Google en betere zichtbaarheid onder lokale cliënten. Zeer tevreden over de resultaten.' },
    { name: 'Tuincentrum Groenrijk', rating: 5, text: 'Met online campagnes bereiken we elk seizoen nieuwe tuinliefhebbers uit Bennekom.' },
    { name: 'Dierenartsenpraktijk Bennekom', rating: 4.5, text: 'Wij zijn nu de eerste keuze voor veel huisdiereigenaren in de regio. Online marketing heeft echt geholpen.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Bennekom | Marketing Bureau & Online Marketing Bennekom</title>
        <meta
          name="description"
          content="SEO Specialist Bennekom nodig? Kies voor het marketing bureau uit Bennekom. Meer klanten uit de regio met lokale SEO, effectieve Google Ads en een professionele website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-bennekom" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-8 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Op zoek naar een</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing Bureau / SEO Specialist in Bennekom?</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je meer lokale klanten aantrekken?</strong><br />
              Als <b>SEO specialist in Bennekom</b> help ik ondernemers, winkels en bedrijven uit Bennekom aan meer online zichtbaarheid, betere posities in Google én meer aanvragen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor Bennekom: bovenaan in Google</li>
              <li>✓ Winstgevende Google Ads campagnes</li>
              <li>✓ Marketing strategie voor groei in Bennekom</li>
              <li>✓ <b>SEO Bennekom</b> voor zzp, mkb en familiebedrijven</li>
              <li>✓ Websites die bezoekers omzetten in klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis Adviesgesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Meer over SEO in Bennekom
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief als marketing bureau in Bennekom & omgeving</p>
            <p className="mt-2 text-xs text-green-600">📞 Persoonlijk contact? Bel: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Bennekom - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Bennekom" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Lokaal groeien met hét Marketing Bureau & SEO Specialist in Bennekom"
          subtitle="Jouw online succes begint hier"
          features={[
            {
              badge: "SEO Bennekom",
              title: "SEO Specialist Bennekom",
              description: "Met slimme SEO groeit jouw bedrijf lokaal. Sta bovenaan voor zoektermen als 'Benekkom + jouw dienst' en haal meer klanten uit je eigen regio.",
              visualTitle: "Lokale topposities",
              visualSubtitle: "Zichtbaar voor Bennekom",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Bennekom",
              description: "Trek direct relevante klanten uit Bennekom aan met gerichte Google Ads campagnes. Maximale resultaten voor elk budget.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Meer aanvragen",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Bennekom",
              description: "Professionele websites & campagnes voor Bennekomse bedrijven. Snel, gebruiksvriendelijk en gericht op conversie.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer omzet & klanten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Bennekom groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Bennekom</span>
              </h2>
              <p className="text-xl text-gray-600">
                Digitale marketing voor ondernemers, dienstverleners & winkels in Bennekom.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Bennekom */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Bennekom</h3>
                <p className="text-gray-600 mb-6">
                  Met lokale SEO ben je zichtbaar voor iedereen die zoekt op “Bennekom”. Meer aanvragen en meer omzet uit je eigen omgeving.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale Google bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoorden onderzoek Bennekom</li>
                  <li>✓ Lokale linkbuilding & autoriteit</li>
                  <li>✓ Zichtbaarheid en reviews vergroten</li>
                </ul>
              </div>
              {/* Google Ads Bennekom */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Bennekom
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Bennekom</h3>
                <p className="text-gray-600 mb-6">
                  Snel meer klanten uit Bennekom? Google Ads levert direct verkeer én concrete aanvragen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertentiecampagnes</li>
                  <li>✓ Gericht op regio Bennekom</li>
                  <li>✓ Altijd meetbaar resultaat</li>
                  <li>✓ Maandelijkse bijsturing</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Een moderne website én een slimme online marketing strategie. Gericht op groei en conversie voor Bennekom.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat gebouwd</li>
                  <li>✓ Mobielvriendelijk & snel</li>
                  <li>✓ Lokaal gericht</li>
                  <li>✓ Meer conversie & resultaat</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vrijblijvend kennismaken met een <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Bennekom</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek wat ik als marketing bureau voor jouw onderneming in Bennekom kan doen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel direct</h3>
                <p className="text-gray-600 mb-4">Direct persoonlijk contact? Bel gerust voor gratis advies over SEO of online marketing.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Bellen niet handig? Stuur me gerust een appje – snel en persoonlijk contact.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Bennekom & Regio</h3>
              <p className="text-gray-600">
                Bennekom • Wageningen • Ede • Lunteren • Renkum • Rhenen • Harskamp • Veenendaal
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
