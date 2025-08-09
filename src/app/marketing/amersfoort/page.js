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

export default function MarketingAmersfoort() {
  // Lokale Amersfoort reviews - centrum van Utrecht met rijke historie
  const dutchReviews = [
    { name: 'Boutique Hotel Koppelpoort', rating: 5, text: 'Sinds onze samenwerking krijgen we veel meer internationale gasten die de historische binnenstad bezoeken. Topposities voor "hotel Amersfoort centrum"!' },
    { name: 'Restaurant De Hof', rating: 5, text: 'Als restaurant aan het Lieve Vrouwekerkhof hebben we nu constant nieuwe gasten. De lokale SEO werkt perfect voor ons historische pand.' },
    { name: 'Fietsenwinkel Soesterkwartier', rating: 5, text: 'Onze winkel in het Soesterkwartier wordt nu gevonden door heel Amersfoort-Noord. De Google Ads campagne levert wekelijks nieuwe klanten op.' },
    { name: 'Kantoor Eemplein', rating: 5, text: 'Vanuit ons kantoor bij het nieuwe Eemplein bereiken we nu de hele regio Eemland. Professionele aanpak met meetbaar resultaat.' },
    { name: 'Kapsalon Bergkwartier', rating: 5, text: 'In het trendy Bergkwartier is concurrentie groot, maar dankzij de marketing staan we bovenaan. Agenda zit vol!' },
    { name: 'Fysiotherapie Vathorst', rating: 4.5, text: 'Voor onze praktijk in Vathorst was lokale vindbaarheid cruciaal. Nu krijgen we aanmeldingen uit heel Amersfoort-Noord.' },
  ]
  const dutchMoreReviews = [
    { name: 'Advocatenkantoor Lichtenberg', rating: 5, text: 'Vanuit ons kantoor in Lichtenberg bereiken we nu de hele zakelijke markt van Amersfoort. Structurele groei in nieuwe cliënten.' },
    { name: 'Schoonheidssalon Nieuwland', rating: 5, text: 'In de wijk Nieuwland is veel concurrentie, maar we staan nu bovenaan. De investering in SEO betaalt zich dubbel terug.' },
    { name: 'Installateur Schothorst', rating: 4.5, text: 'Voor spoedklussen in Schothorst en Liendert worden we nu als eerste gevonden. Game changer voor ons bedrijf!' },
    { name: 'Dierenarts Kattenbroek', rating: 5, text: 'Onze praktijk in Kattenbroek krijgt nu aanmeldingen uit heel Amersfoort-Zuid. Perfect bereik dankzij lokale marketing.' },
    { name: 'Bouwbedrijf Hoogland', rating: 5, text: 'Vanuit Hoogland bedienen we heel groot-Amersfoort. De online strategie heeft ons bedrijf naar een hoger niveau getild.' },
    { name: 'Sportschool Randenbroek', rating: 4.5, text: 'Met 3 vestigingen in Amersfoort was goede online vindbaarheid essentieel. Nu constant nieuwe leden via Google.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Amersfoort | Marketing Bureau & Online Marketing Amersfoort</title>
        <meta
          name="description"
          content="SEO Specialist Amersfoort inschakelen? Kies voor hét marketing bureau in Amersfoort. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/amersfoort" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Van Koppelpoort tot Vathorst: heel Amersfoort online bereiken</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">160.000 Amersfoorters wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Amersfoort: waar middeleeuwse charme en moderne ambitie samenkomen.</strong><br />
              Met de historische binnenstad rond Onze Lieve Vrouwetoren, groeiwijken als Vathorst (25.000+ inwoners) en bedrijventerreinen De Wieken, Calveen en De Isselt biedt Amersfoort ongekende kansen. Als <b>SEO specialist Amersfoort</b> positioneer ik je tussen de 7.500+ bedrijven die hier gevestigd zijn - van startup in het Eemhuis tot corporate bij Business Park Podium.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Amersfoort: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Amersfoort</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp’ers in Amersfoort</li>
              <li>✓ <b>SEO Amersfoort</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Amersfoort & regio Eemland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Amersfoort - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Amersfoort" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Amersfoort met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Amersfoort",
              title: "SEO Specialist Amersfoort",
              description: "Wil je echt groeien in Amersfoort? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Amersfoort",
              description: "Direct aanvragen van inwoners en bedrijven uit Amersfoort. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Amersfoort",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Amersfoort. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Amersfoort groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Amersfoort</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale dienstverlener tot retailer – ik help je bedrijf online groeien in Amersfoort.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Amersfoort */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Amersfoort</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Amersfoort.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Amersfoort</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Amersfoort */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Amersfoortse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Amersfoort</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Amersfoort.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Amersfoort en omliggende dorpen</li>
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
                  <li>✓ Website op maat voor Amersfoort</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke lokale zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Amersfoort</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Amersfoort – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in heel Amersfoort & Regio Eemland</h3>
              <p className="text-gray-600">
                Centrum • Vathorst • Nieuwland • Kattenbroek • Schothorst • Liendert • Bergkwartier • Soesterkwartier • Hoogland • Hooglanderveen • Soest • Leusden • Nijkerk • Barneveld • Woudenberg • Bunschoten-Spakenburg
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
