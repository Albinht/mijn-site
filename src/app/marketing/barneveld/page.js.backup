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

export default function MarketingBarneveld() {
  // Lokale Barneveld reviews - kippenstad en industrieel hart van de Gelderse Vallei
  const dutchReviews = [
    { name: 'Pluimveebedrijf Harselaar', rating: 5, text: 'Als pluimveehouder in Harselaar Zuid krijgen we nu veel meer B2B aanvragen. Perfect voor onze exportmarkt naar heel Europa!' },
    { name: 'Restaurant Aan de Brink', rating: 5, text: 'Ons restaurant aan de historische Brink is nu altijd vol. Toeristen vinden ons makkelijk dankzij de lokale SEO strategie.' },
    { name: 'Meubelzaak Voorthuizen', rating: 5, text: 'Vanuit onze showroom bij de A30 trekken we nu klanten uit heel Midden-Nederland. Google Ads werkt uitstekend voor ons!' },
    { name: 'Kapsalon Norschoten', rating: 5, text: 'In de wijk Norschoten is veel concurrentie, maar we staan nu bovenaan. Agenda zit vol met klanten uit heel Barneveld-Noord.' },
    { name: 'Installateur De Burgt', rating: 5, text: 'Voor spoedklussen in De Burgt en Veller worden we nu als eerste gevonden. De investering betaalt zich dubbel terug.' },
    { name: 'Tandarts Eilanden-Oost', rating: 4.5, text: 'Onze praktijk in de nieuwbouwwijk Eilanden-Oost groeit snel dankzij de online marketing. Veel jonge gezinnen als nieuwe patiënten!' },
  ]
  const dutchMoreReviews = [
    { name: 'Transportbedrijf A1 Corridor', rating: 5, text: 'Gelegen aan de A1 bereiken we nu logistieke klanten uit heel Nederland. De B2B marketing strategie werkt perfect!' },
    { name: 'Beauty Centrum Kallenbroek', rating: 5, text: 'In winkelcentrum Kallenbroek hebben we veel concurrentie, maar staan nu bovenaan. Omzet is verdubbeld!' },
    { name: 'Fietsspecialist Kootwijkerbroek', rating: 4.5, text: 'Vanuit onze vestiging in Kootwijkerbroek bereiken we nu heel Noord-Barneveld. Vooral e-bikes lopen goed.' },
    { name: 'Advocatenkantoor Vellerselaar', rating: 5, text: 'Voor ons kantoor in bedrijvenpark Harselaar was professionele uitstraling cruciaal. Nu structureel nieuwe zakelijke cliënten.' },
    { name: 'Tuincentrum De Glind', rating: 5, text: 'Nabij jeugddorp De Glind trekken we nu klanten uit de hele regio. Seizoensacties worden perfect gevonden via Google.' },
    { name: 'Dierenarts Garderen', rating: 4.5, text: 'Onze kliniek bij natuurgebied Garderen wordt nu gevonden door heel Barneveld-Oost. Top resultaten!' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Barneveld | Marketing Bureau & Online Marketing Barneveld</title>
        <meta
          name="description"
          content="SEO Specialist Barneveld nodig? Hét marketing bureau voor Barneveld. Krijg meer klanten met lokale SEO, Google Ads & professionele marketing voor bedrijven uit Barneveld."
        />
        <link rel="canonical" href="https://wwww.niblah.com/marketing/barneveld" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">SEO Specialist Barneveld</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing Barneveld</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Groei jouw bedrijf in de kippenstad van Nederland!</strong><br />
              Met 60.000+ inwoners, een bloeiende pluimveesector en strategische ligging aan de A1/A30 is Barneveld hét ondernemershart van de Gelderse Vallei. Als <b>SEO specialist in Barneveld</b> ken ik de lokale markt - van agrarische bedrijven tot moderne dienstverleners.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor bedrijven rond het centrum en bedrijvenpark Harselaar</li>
              <li>✓ Google Ads gericht op Barneveld, Voorthuizen & Kootwijkerbroek</li>
              <li>✓ Specialisatie in agrarische sector & B2B marketing</li>
              <li>✓ <b>SEO Barneveld</b> met kennis van de pluimveemarkt</li>
              <li>✓ Bereik klanten van Ede tot Amersfoort via de A1 corridor</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis SEO Consult <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Meer over SEO in Barneveld
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief als marketing bureau in Barneveld en omgeving</p>
            <p className="mt-2 text-xs text-green-600">📞 Snel schakelen? Bel: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Barneveld - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Barneveld" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Jouw Marketing Bureau & SEO Specialist in Barneveld"
          subtitle="Lokaal gevonden worden? Meer klanten in Barneveld?"
          features={[
            {
              badge: "SEO Barneveld",
              title: "Lokale SEO Specialist Barneveld",
              description: "Als SEO specialist help ik je Barnevelder bedrijf met lokale topposities in Google. Jouw bedrijf structureel bovenaan voor belangrijke zoektermen zoals ‘[jouw dienst] Barneveld’.",
              visualTitle: "SEO Strategie",
              visualSubtitle: "Lokale topposities",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Barneveld",
              description: "Snel meer klanten uit Barneveld en omgeving? Met Google Ads Barneveld bereik je lokaal relevante klanten precies op het juiste moment.",
              visualTitle: "Direct Resultaat",
              visualSubtitle: "Meer aanvragen",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Marketing Bureau Barneveld",
              description: "Wij bouwen websites die Barneveld overtuigen. Conversiegerichte, snelle websites waarmee je direct een voorsprong hebt in de lokale markt.",
              visualTitle: "Website Ontwerp",
              visualSubtitle: "Meer omzet",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Barneveld kiest voor <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Barneveld</span>
              </h2>
              <p className="text-xl text-gray-600">
                Complete marketing oplossingen voor lokale bedrijven, zzp’ers & mkb in Barneveld.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Barneveld */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Barneveld</h3>
                <p className="text-gray-600 mb-6">
                  Scoor topposities in Google met lokale SEO. Word gevonden door nieuwe klanten uit Barneveld & omstreken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Lokale zoekwoorden research</li>
                  <li>✓ Content & linkbuilding</li>
                  <li>✓ Review management</li>
                </ul>
              </div>
              {/* Google Ads Barneveld */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest gekozen door Barneveld
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Barneveld</h3>
                <p className="text-gray-600 mb-6">
                  Snel meer klanten uit Barneveld? Met Google Ads bereik je direct lokale aanvragen en leads.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale campagnes</li>
                  <li>✓ Geografische targeting</li>
                  <li>✓ Conversie optimalisatie</li>
                  <li>✓ Maandelijkse rapportages</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites & online marketing die conversiegericht zijn voor de Barneveldse markt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Professioneel ontwerp</li>
                  <li>✓ Lokale focus</li>
                  <li>✓ Snel & mobielvriendelijk</li>
                  <li>✓ Gericht op meer omzet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Barneveld</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek wat mijn marketing bureau voor jouw bedrijf in Barneveld kan doen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Bellen</h3>
                <p className="text-gray-600 mb-4">Klaar om te starten? Bel mij als Barneveld SEO specialist voor een gratis gesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Direct</h3>
                <p className="text-gray-600 mb-4">Liever WhatsApp? Stuur direct een bericht – snel reactie.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in heel Barneveld & Gelderse Vallei</h3>
              <p className="text-gray-600 mb-2">
                <strong>Barneveld wijken:</strong> Centrum • Norschoten • Veller • De Burgt • Eilanden • Oldenbarneveld • Kallenbroek
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Kernen:</strong> Voorthuizen • Kootwijkerbroek • Garderen • Stroe • Kootwijk • De Glind • Terschuur • Zwartebroek
              </p>
              <p className="text-gray-600">
                <strong>Regio:</strong> Ede • Nijkerk • Putten • Scherpenzeel • Lunteren • Otterlo • Harskamp
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
