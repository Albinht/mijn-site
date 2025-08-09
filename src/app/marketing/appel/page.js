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

export default function MarketingAppel() {
  // Lokale Appel reviews - klein dorp tussen Nijmegen en Tiel
  const dutchReviews = [
    { name: 'Fruitkwekerij Van Appel', rating: 5, text: 'De naam zegt het al! Sinds de SEO campagne vinden mensen uit heel Gelderland onze appelboomgaard. De directe verkoop is verdrievoudigd.' },
    { name: 'Manege De Waalruiters', rating: 5, text: 'We trekken nu veel ruiters uit Nijmegen-West die de drukte van de stad willen ontvluchten. De Google Ads voor "paardrijden bij Nijmegen" werken perfect.' },
    { name: 'Loonbedrijf Maas & Waal', rating: 5, text: 'Als agrarisch dienstverlener worden we nu gevonden door boeren uit Druten, Beuningen en Wijchen. De regionale SEO strategie werkt uitstekend.' },
    { name: 'Camping De Appelgaard', rating: 5, text: 'Kampeerders op doorreis tussen Nijmegen en Den Bosch vinden ons nu als perfecte tussenstop. De A73 ligging wordt eindelijk online benut.' },
    { name: 'Klusservice Appel-Druten', rating: 5, text: 'Sinds we ook Druten (7 km) in onze SEO meenemen, is het aantal opdrachten verdubbeld. Klein dorp, maar groot werkgebied!' },
    { name: 'Hoveniersbedrijf De Waalhoeve', rating: 4.5, text: 'Villabezitters uit Nijmegen-Dukenburg vinden ons nu voor grote tuinprojecten. De focus op premium tuinen werkt geweldig.' },
  ]
  const dutchMoreReviews = [
    { name: 'Transportbedrijf A73 Logistics', rating: 5, text: 'Onze ligging vlak bij afrit 3 (Beuningen) wordt nu perfect uitgebuit. Bedrijven uit de regio Nijmegen vinden ons voor last-mile delivery.' },
    { name: 'Autobedrijf Appel-Druten', rating: 5, text: 'We trekken nu klanten uit Beuningen, Druten en Wijchen. De regionale Google Ads voor occasions werken veel beter dan Marktplaats.' },
    { name: 'Dakdekker Maas en Waal', rating: 4.5, text: 'Specialisatie in agrarische bebouwing wordt nu gevonden door boeren uit het hele Land van Maas en Waal. Top investering!' },
    { name: 'Catering De Fruitstreek', rating: 5, text: 'Bedrijven in Nijmegen-West boeken ons nu voor lunches. De korte reistijd (15 min) en lagere prijzen dan stad-cateraars werken in ons voordeel.' },
    { name: 'Schildersbedrijf Appel', rating: 5, text: 'De nieuwe website toont perfect ons werk in de monumentale boerderijen. Opdrachten uit Beuningen en Wijchen stromen binnen.' },
    { name: 'Paardenarts Waalgebied', rating: 4.5, text: 'Als specialist word ik nu gevonden door alle maneges tussen Nijmegen en Tiel. De niche-SEO op paardengezondheid werkt regionaal.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Marketing Appel (bij Nijmegen) | SEO Maas & Waal | Bereik Druten-Beuningen</title>
        <meta
          name="description"
          content="Marketing bureau Appel helpt ondernemers tussen Nijmegen en Tiel. Bereik 150.000+ inwoners Maas & Waal. Profiteer van A73 ligging. SEO specialist kleine dorpen."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/appel" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Strategisch gelegen tussen Nijmegen en Tiel</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing voor Appel ondernemers aan de A73</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>700 inwoners, maar 150.000+ klanten binnen 15 minuten</strong><br />
              Als <b>marketing specialist Maas en Waal</b> positioneer ik jouw Appel bedrijf perfect tussen de stedelijke markten van Nijmegen (170.000 inw.) en de agrarische kracht van het Land van Maas en Waal.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik Nijmegen-West en Dukenburg (40.000+ inwoners)</li>
              <li>✓ Trek klanten uit Druten (19.000), Beuningen (26.000)</li>
              <li>✓ Profiteer van A73 afrit 3 - perfecte bereikbaarheid</li>
              <li>✓ <b>Google Ads Nijmegen-rand</b> voor stedelijke klanten</li>
              <li>✓ Specialisatie in agrarische en logistieke marketing</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist Maas & Waal regio - van Nijmegen tot Tiel</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Appel - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Appel" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Appel met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Appel",
              title: "Regionale SEO Maas & Waal",
              description: "Vanuit Appel bereik je Nijmegen-West, Druten, Beuningen en Wijchen. Ik positioneer je perfect voor deze 150.000+ potentiële klanten.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Nijmegen-Rand",
              description: "Trek stedelijke klanten die zoeken naar diensten 'bij Nijmegen' of 'buiten de stad'. Lagere kosten dan Nijmegen centrum, betere conversie.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "A73 Corridor Marketing",
              description: "Websites die je strategische ligging langs de A73 benutten. Perfect voor transport, agrarisch en B2B dienstverlening aan Nijmegen bedrijven.",
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
          title="Appel groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benut de kracht van je <span className="bg-[#F7D8FA] px-2 rounded italic">A73 locatie</span> optimaal
              </h2>
              <p className="text-xl text-gray-600">
                Van agrarisch bedrijf tot logistiek dienstverlener – ik help Appel ondernemers de regio Nijmegen te veroveren.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Appel */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Maas & Waal Regio</h3>
                <p className="text-gray-600 mb-6">
                  Positioneer je bedrijf voor zoektermen als "bij Nijmegen", "Maas en Waal" en "A73 corridor".
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Optimalisatie voor Nijmegen-rand zoektermen</li>
                  <li>✓ Focus op Druten, Beuningen, Wijchen</li>
                  <li>✓ A73 bereikbaarheid als USP</li>
                  <li>✓ Agrarische sector specialisatie</li>
                </ul>
              </div>
              {/* Google Ads Appel */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Appel
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Appel</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Appel.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Appel en omliggende dorpen</li>
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
                  <li>✓ Website op maat voor Appel</li>
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Appel</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Appel – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Appel & Regio</h3>
              <p className="text-gray-600">
                Doetinchem • Winterswijk • Zelhem • Gaanderen • Wehl • Didam • Montferland • Oude IJsselstreek
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
