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

export default function MarketingSoesterberg() {
  // Lokale Soesterberg reviews - militair dorp met rijke geschiedenis
  const dutchReviews = [
    { name: 'Restaurant De Vliegbasis', rating: 5, text: 'Onze restaurant in het hart van Soesterberg krijgt nu reserveringen van heel de omgeving dankzij sterke lokale SEO. Prachtig resultaat!' },
    { name: 'Nationaal Militair Museum Café', rating: 5, text: 'Als catering bij het museum profiteren we van de toeristen. De online marketing heeft ons bereik enorm vergroot.' },
    { name: 'Fysiotherapie Soesterberg Centrum', rating: 4.5, text: 'Voor onze praktijk aan de Rademarkt was lokale vindbaarheid essentieel. Nu vinden patiënten uit heel Soesterberg en omgeving ons moeiteloos.' },
    { name: 'Garage Van der Berg', rating: 5, text: 'Onze autogarage langs de Kamp profiteert van klanten uit heel Soesterberg en Soest. De investering in SEO betaalt zich dubbel uit.' },
    { name: 'Bakkerij Soesterberg', rating: 5, text: 'Onze traditionele bakkerij wordt nu gevonden door zowel locals als bezoekers van het militaire museum. Geweldige groei!' },
    { name: 'Kapsalon De Basis', rating: 4.5, text: 'In een klein dorp als Soesterberg is goede vindbaarheid cruciaal. Nu krijgen we klanten uit Amersfoort en Zeist.' },
  ]
  const dutchMoreReviews = [
    { name: 'Advocatenkantoor Militair Recht', rating: 5, text: 'Ons gespecialiseerde kantoor in Soesterberg bereikt nu defensiepersoneel door heel Nederland. Strategische keuze geweest.' },
    { name: 'Bed & Breakfast De Vleugel', rating: 5, text: 'Dankzij sterke online marketing krijgen we gasten die het Militair Museum bezoeken. Boekingen lopen perfect.' },
    { name: 'Fietsenzaak Soesterberg', rating: 4.5, text: 'Voor onze winkel nabij de basis was lokale SEO perfect. Veel militairen en toeristen vinden ons nu gemakkelijk.' },
    { name: 'Restaurant Brasserie Kamp', rating: 5, text: 'Als restaurant met militaire historie profiteren we van bezoekers en locals. De marketing heeft ons echt geholpen.' },
    { name: 'Kinderdagverblijf De Basis', rating: 4.5, text: 'Voor militaire gezinnen in Soesterberg waren we moeilijk vindbaar. Nu staan we bovenaan bij kinderopvang zoektermen.' },
    { name: 'Installatiebedrijf Soesterberg', rating: 5, text: 'Werkzaam voor particulieren en bedrijven rond de basis. De online zichtbaarheid heeft ons klantenbestand enorm uitgebreid.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Soesterberg | Marketing Bureau & Online Marketing Soesterberg</title>
        <meta
          name="description"
          content="SEO Specialist Soesterberg inschakelen? Kies voor hét marketing bureau in Soesterberg. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/soesterberg" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Soesterberg: Militaire Precisie in Online Groei</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van vliegbasis tot ondernemersparadijs</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Soesterberg: waar militaire geschiedenis en ondernemerschap elkaar ontmoeten.</strong><br />
              Met 13.000+ inwoners, het iconische Nationaal Militair Museum, historische vliegbasis Soesterberg en strategische ligging tussen Amersfoort en Utrecht biedt dit bijzondere dorp ongekende kansen. Als <b>SEO specialist Soesterberg</b> help ik lokale ondernemers profiteren van zowel de lokale gemeenschap als het toerisme rond militair erfgoed.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Soesterberg: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Soesterberg</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Soesterberg</li>
              <li>✓ <b>SEO Soesterberg</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Soesterberg & regio Utrecht</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Soesterberg - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Soesterberg" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Soesterberg met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Soesterberg",
              title: "SEO Specialist Soesterberg",
              description: "Wil je echt groeien in Soesterberg? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Soesterberg",
              description: "Direct aanvragen van inwoners en bezoekers uit Soesterberg. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Soesterberg",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Soesterberg. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Soesterberg groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Soesterberg</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale dienstverlener tot museumcafé – ik help je bedrijf online groeien in Soesterberg.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Soesterberg */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Soesterberg</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Soesterberg.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Soesterberg</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Soesterberg */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Soesterbergse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Soesterberg</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Soesterberg.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Soesterberg en omliggende dorpen</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Resultaat dat telt</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Soesterberg</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke lokale zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Soesterberg</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Waarom lokale SEO in Soesterberg?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Soesterberg heeft een unieke positie met militaire geschiedenis, toerisme en lokale gemeenschap. Lokale SEO zorgt dat je wordt gevonden door inwoners, defensiepersoneel én musumebezoekers. Perfect voor restaurants, B&B's, winkels en dienstverleners.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Wat kost SEO voor een bedrijf in Soesterberg?</summary>
                <div className="mt-4 text-gray-600">
                  <p>SEO projecten starten vanaf €800 per maand. Voor Soesterbergse ondernemers bied ik maatwerk: van kleine lokale bedrijven tot horeca die profiteert van museumtoerisme. Altijd eerst een gratis strategiegesprek.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe lang duurt het voor ik resultaat zie?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Eerste verbeteringen zie je binnen 4-8 weken. Voor een dorp als Soesterberg werkt lokale SEO vaak sneller omdat de concurrentie beperkt is. Google Ads leveren direct resultaat vanaf dag 1.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Werk je met alle type bedrijven in Soesterberg?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Ja, van lokale kappers tot restaurants, van B&B's tot installatiebedrijven. Soesterberg's mix van locals en toeristen biedt kansen voor veel sectoren. Ik pas de strategie aan op jouw specifieke doelgroep.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe werkt Google Ads voor Soesterberg?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Google Ads zijn perfect voor Soesterberg. Je kunt adverteren naar locals, defensiepersoneel en toeristen. Budgets kunnen klein starten (€300-500/maand) omdat de lokale markt overzichtelijk is.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Krijg ik ook klanten uit omliggende plaatsen?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Absoluut! Dankzij de centrale ligging trek je klanten uit Amersfoort, Soest, Zeist en Utrecht. Veel mensen bezoeken het militair museum en ontdekken lokale bedrijven. Perfect voor je bereik.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Soesterberg</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Soesterberg – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Soesterberg - Online Marketing Soesterberg & Omgeving</h3>
              <p className="text-gray-600">
                Centrum Soesterberg • Rademarkt • De Kamp • Vliegbasis • Militair Museum gebied • En natuurlijk ook actief in: Soest • Amersfoort • Zeist • Utrecht • Austerlitz • Bosch en Duin
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}