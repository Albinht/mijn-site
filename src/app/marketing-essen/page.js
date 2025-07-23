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

export default function MarketingEssen() {
  // Lokale Essen reviews
  const dutchReviews = [
    { name: 'Boerderij Essense Hoeve', rating: 5, text: 'Sinds Albin onze marketing doet, vinden meer mensen onze boerderij. Online top vindbaar, offline meer bezoekers!' },
    { name: 'Garage Essen Service', rating: 5, text: 'Google Ads levert structureel nieuwe klanten op uit Essen en omgeving. Zeer tevreden over het persoonlijke contact.' },
    { name: 'Restaurant De Essense Kamer', rating: 5, text: 'Onze reserveringen zijn verdrievoudigd sinds de website en SEO upgrade. Albin denkt mee en levert resultaat.' },
    { name: 'Kapsalon Essense Stijl', rating: 5, text: 'Als kapper in Essen zijn we nu écht zichtbaar. Klanten vinden ons via Google en maken online direct afspraken.' },
    { name: 'Installatiebedrijf Essen Tech', rating: 5, text: 'Marketing heeft ons bedrijf laten groeien in de hele regio. Kwalitatieve leads en meer aanvragen.' },
    { name: 'Tandartspraktijk Essen', rating: 4.5, text: 'Snelle communicatie, heldere aanpak, en onze online zichtbaarheid in Essen is sterk gegroeid.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Essen BV', rating: 5, text: 'Dankzij de lokale SEO zijn we gestegen naar #1 in Google. Meer aanvragen dan ooit tevoren.' },
    { name: 'Schoonheidssalon Essen', rating: 5, text: 'Meer nieuwe klanten en positieve reviews. SEO werkt echt voor lokale dienstverleners.' },
    { name: 'Fietsenwinkel Essense Wielen', rating: 4.5, text: 'We trekken nu klanten uit Essen, Barneveld en Ede. Super resultaat!' },
    { name: 'Advocatenkantoor Essen', rating: 5, text: 'Online aanwezigheid brengt maandelijks nieuwe cliënten binnen. Top samenwerking!' },
    { name: 'Tuincentrum Essense Groen', rating: 5, text: 'Met slimme Google Ads groeit ons klantenbestand, vooral in het voorjaar.' },
    { name: 'Dierenarts Essen', rating: 4.5, text: 'We zijn nu de best vindbare dierenarts in Essen. Meer aanvragen, meer vertrouwen.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Essen | Marketing Bureau & Online Marketing Essen</title>
        <meta
          name="description"
          content="SEO Specialist Essen nodig? Krijg meer lokale klanten met bewezen SEO, Google Ads & webdesign. Hét marketing bureau voor bedrijven in Essen."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-essen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-8 md:py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Op zoek naar meer klanten uit Essen?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Online groei voor Essen & regio</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je lokaal bovenaan in Google?</strong><br />
              Als <b>SEO specialist in Essen</b> zorg ik dat jouw bedrijf écht wordt gevonden. Van Google tot Google Maps – meer zichtbaarheid, meer aanvragen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor Essen & omgeving</li>
              <li>✓ Google Ads campagnes die converteren</li>
              <li>✓ Professionele websites die klanten opleveren</li>
              <li>✓ Meer klanten, meer omzet uit Essen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis kennismaken <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk resultaten
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Voor bedrijven, zzp’ers & familiebedrijven in Essen</p>
            <p className="mt-2 text-xs text-green-600">📞 Bel of WhatsApp direct: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Essen - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Essen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP / FEATURE SECTION */}
        <FeatureSection
          title="Lokale marketing die werkt in Essen"
          subtitle="Jouw bedrijf lokaal op de kaart — letterlijk"
          features={[
            {
              badge: "SEO Essen",
              title: "SEO & Google Maps: altijd bovenaan",
              description: "Sta op #1 in Essen als mensen zoeken naar jouw diensten. Met slimme SEO en Google Bedrijfspagina blijf je top-of-mind.",
              visualTitle: "SEO & Maps",
              visualSubtitle: "Essen & regio",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads: direct meer aanvragen",
              description: "Snel klanten werven? Met Google Ads bereik je precies de juiste mensen in Essen en omliggende dorpen.",
              visualTitle: "Online advertenties",
              visualSubtitle: "Direct resultaat",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Website die converteert",
              description: "Van landingspagina tot complete website: alles gericht op meer aanvragen, meer omzet en een lokale uitstraling.",
              visualTitle: "Webdesign Essen",
              visualSubtitle: "Voor lokale ondernemers",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Bedrijven uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Essen</span> over Albin"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau voor <span className="bg-[#F7D8FA] px-2 rounded italic">Essen</span>
              </h2>
              <p className="text-lg text-gray-600">
                Meer aanvragen, meer klanten en een professionele uitstraling. Laat Essen niet om je heen scrollen!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lokale SEO Essen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Essen</h3>
                <p className="text-gray-600 mb-6">
                  Bovenaan komen bij ‘[jouw branche] Essen’? Met lokale SEO trek je gegarandeerd meer aanvragen uit de buurt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfspagina optimalisatie</li>
                  <li>✓ Lokale content & zoekwoorden</li>
                  <li>✓ Reviews verzamelen & inzetten</li>
                  <li>✓ Lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Essen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Essen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Essen</h3>
                <p className="text-gray-600 mb-6">
                  Met slimme Google Ads ben je direct zichtbaar. Nieuwe klanten in Essen, zonder verspilling van advertentiebudget.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale campagnes & targeting</li>
                  <li>✓ Gericht op Essen & omliggende dorpen</li>
                  <li>✓ Conversiegericht & meetbaar</li>
                  <li>✓ Maandelijkse rapportages</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Een website die jouw bedrijf uit Essen professioneel neerzet en online laat groeien. Altijd snel, mobiel & klantgericht.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Uniek ontwerp & uitstraling</li>
                  <li>✓ Lokale focus</li>
                  <li>✓ Snel & mobielvriendelijk</li>
                  <li>✓ Gericht op aanvragen & omzet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Essen</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Benieuwd wat er mogelijk is? Neem contact op voor een gratis, vrijblijvend adviesgesprek.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Vragen? Bel gerust voor persoonlijk advies.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stel je vraag via WhatsApp – snel en zonder gedoe.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Essen & omgeving</h3>
              <p className="text-gray-600">
                Essen • Barneveld • Ede • Bennekom • Lunteren • Amersfoort • Leusden • Nijkerk • Voorthuizen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
