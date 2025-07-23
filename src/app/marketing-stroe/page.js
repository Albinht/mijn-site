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

export default function MarketingStroe() {
  // Lokale Stroe reviews
  const dutchReviews = [
    { name: 'Camping de Stroese Heide', rating: 5, text: 'Onze camping in Stroe staat dankzij Albin nu bovenaan in Google. We ontvangen meer boekingen en zijn lokaal veel beter zichtbaar.' },
    { name: 'Garage Stroe Service', rating: 5, text: 'Sinds we samenwerken met Albin krijgen we meer klanten uit Stroe en omgeving. Google Ads werkt nu écht.' },
    { name: 'Restaurant De Stroese Hoeve', rating: 5, text: 'Na de website optimalisatie hebben we 3x zoveel reserveringen vanuit Stroe en omliggende dorpen.' },
    { name: 'Kapsalon Stroese Stijl', rating: 5, text: 'We worden eindelijk gevonden op “kapper Stroe”. Onze agenda zit nu vol met lokale klanten.' },
    { name: 'Installatiebedrijf Stroe Tech', rating: 5, text: 'De lokale vindbaarheid is flink gestegen. Investering in SEO en Google Ads was snel terugverdiend.' },
    { name: 'Tandartspraktijk Stroe', rating: 4.5, text: 'Door de professionele aanpak is onze online zichtbaarheid in Stroe enorm gegroeid.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Stroe BV', rating: 5, text: 'In korte tijd gestegen naar positie 1 in Google voor onze diensten. Lokale SEO werkt écht voor bedrijven in Stroe.' },
    { name: 'Schoonheidssalon Stroe', rating: 5, text: 'Meer afspraken, meer klanten uit Stroe en directe omgeving. Top samenwerking!' },
    { name: 'Fietsenwinkel Stroese Wielen', rating: 4.5, text: 'Met de juiste marketingstrategie trekken we nu ook klanten uit Barneveld en Garderen.' },
    { name: 'Advocatenkantoor Stroe', rating: 5, text: 'We worden regelmatig benaderd door nieuwe cliënten uit Stroe door betere online zichtbaarheid.' },
    { name: 'Tuincentrum Stroese Groen', rating: 5, text: 'Zichtbaar op alle lokale zoektermen. Onze omzet is flink gestegen door slimme online marketing.' },
    { name: 'Dierenarts Stroe', rating: 4.5, text: 'Lokale SEO maakte ons de best vindbare dierenarts in Stroe. Erg tevreden met het resultaat.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Stroe | Marketing Bureau Stroe | SEO & Marketing bedrijf</title>
        <meta
          name="description"
          content="Zoek je een SEO specialist in Stroe? Kies voor hét marketing bureau Stroe. Meer klanten uit Stroe dankzij slimme SEO, Google Ads en conversiegerichte websites. Vraag gratis advies aan!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-stroe" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">SEO Specialist Stroe</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing Bureau Stroe</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil jij meer lokale klanten in Stroe aantrekken?</strong><br />
              Als <b>SEO specialist Stroe</b> en <b>marketing bureau Stroe</b> help ik ondernemers en bedrijven aan topposities in Google, meer aanvragen én een sterke online reputatie.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ <b>SEO Stroe</b>: Snel hoger in Google</li>
              <li>✓ Google Ads & slimme campagnes voor Stroe</li>
              <li>✓ Websites die converteren voor jouw markt</li>
              <li>✓ Meer lokale zichtbaarheid en klanten uit Stroe</li>
            </ul>
            <div className="mt-8">
              <div className="flex flex-row items-center gap-4 mb-3">
                <Button as="a" href="tel:+31648728828" className="text-sm px-4 py-2">
                  Bel direct: +31 6 48728828 <span>→</span>
                </Button>
                <Button variant="secondary" as={Link} href="/work-with-me">
                  Gratis SEO advies Stroe
                </Button>
              </div>
              <div className="flex justify-center sm:justify-start">
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Direct beschikbaar
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Ruim 100+ bedrijven uit Stroe en omgeving gingen je voor</p>
            <p className="mt-4 text-sm text-green-700">WhatsApp? <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Stroe - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing bedrijf Stroe: lokaal, slim en resultaatgericht"
          subtitle="Meer zichtbaarheid, meer klanten, meer omzet."
          features={[
            {
              badge: "SEO specialist Stroe",
              title: "Lokale SEO voor bedrijven in Stroe",
              description: "Met een doordachte SEO strategie wordt jouw bedrijf in Stroe sneller gevonden. Ik zorg voor sterke posities op zoektermen als 'jouw dienst Stroe', meer bezoekers en concrete aanvragen.",
              visualTitle: "SEO Strategie Stroe",
              visualSubtitle: "Lokaal #1 in Google",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Direct resultaat met Google Ads",
              description: "Meer klanten uit Stroe en omgeving? Met Google Ads bereik je precies de juiste doelgroep voor jouw dienst of winkel. Ik zet campagnes op die écht converteren.",
              visualTitle: "Lokale Leads",
              visualSubtitle: "Meer omzet",
              image: keywordResearchImage
            },
            {
              badge: "Conversiegerichte websites",
              title: "Website & Online Marketing Stroe",
              description: "Ik bouw professionele websites voor ondernemers in Stroe. Snel, vindbaar, conversiegericht en altijd op maat voor jouw branche.",
              visualTitle: "Website Ontwerp Stroe",
              visualSubtitle: "Meer aanvragen",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS SECTIE */}
        <ReviewSlider
          reviews={dutchReviews}
          moreReviews={dutchMoreReviews}
          title="Stroe kiest voor <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> van Albin"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing bedrijf in <span className="bg-[#F7D8FA] px-2 rounded italic">Stroe</span>
              </h2>
              <p className="text-lg text-gray-600">
                Je complete marketing bureau Stroe – voor MKB, ZZP en ambitieuze lokale ondernemers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* SEO Stroe */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Stroe</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf structureel hoger in Google? Ik regel lokale SEO in Stroe – van Google Mijn Bedrijf tot on-page en content.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Zoekwoorden onderzoek voor Stroe</li>
                  <li>✓ Contentcreatie & lokale linkbuilding</li>
                  <li>✓ Review management en autoriteit</li>
                </ul>
              </div>
              {/* Google Ads Stroe */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest gekozen dienst in Stroe
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Bureau Stroe</h3>
                <p className="text-gray-600 mb-6">
                  Wil je direct meer aanvragen uit Stroe en regio? Met lokale campagnes in Google Ads bereik je direct nieuwe klanten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Campagnes op maat voor Stroe</li>
                  <li>✓ Lokale targeting en conversie optimalisatie</li>
                  <li>✓ Maandelijkse rapportages & bijsturen</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing Stroe</h3>
                <p className="text-gray-600 mb-6">
                  Van snelle websites tot slimme online marketing. Meer aanvragen, meer omzet, lokaal sterk aanwezig in Stroe.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website design op maat</li>
                  <li>✓ Snel, veilig & SEO-proof</li>
                  <li>✓ Volledige lokale focus op Stroe</li>
                  <li>✓ Gericht op maximale conversie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO specialist Stroe</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe mijn marketing bureau Stroe jouw bedrijf online kan laten groeien.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Snel schakelen? Bel mij als SEO specialist Stroe en ik help je direct verder.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Direct antwoord op je vraag? Stuur me een WhatsApp – snel reactie.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Stroe &amp; regio</h3>
              <p className="text-gray-600">
                Garderen • Voorthuizen • Kootwijkerbroek • Barneveld • Nijkerk • Ede • Amersfoort • Leusden
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
