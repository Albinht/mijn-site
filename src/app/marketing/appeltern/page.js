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

export default function MarketingAppeltern() {
  // Lokale Appeltern reviews
  const dutchReviews = [
    { name: 'Restaurant Appeltern', rating: 5, text: 'Sinds we werken met Albin zijn we de best vindbare horecazaak van Appeltern. Iedere week nieuwe gasten uit de regio\!' },
    { name: 'Garage Appeltern', rating: 5, text: 'De marketingstrategie zorgt voor een gestage stroom aan klanten uit Appeltern en omgeving. Google Ads werkt eindelijk optimaal.' },
    { name: 'Kapsalon Beauty Appeltern', rating: 5, text: 'Sinds de website is vernieuwd krijgen we veel meer boekingen. We staan hoog in Google voor kapper Appeltern.' },
    { name: 'Fysiotherapie Appeltern', rating: 5, text: 'Onze praktijk wordt nu dagelijks gevonden door inwoners van Appeltern. De wachtlijst groeit gestaag.' },
    { name: 'Installatiebedrijf Appeltern', rating: 5, text: 'Lokale SEO levert wekelijks spoedklussen en projecten uit Appeltern op. De telefoon staat niet meer stil.' },
    { name: 'Huisartsenpraktijk Appeltern', rating: 4.5, text: 'Meer patiënten, betere online zichtbaarheid en veel meer verwijzingen uit Appeltern. Heel tevreden\!' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Appeltern', rating: 5, text: 'Onze verbouwingsprojecten komen nu via Google binnen. Top 3 positie voor "aannemer Appeltern".' },
    { name: 'Tuincentrum Appeltern', rating: 5, text: 'Dankzij gerichte marketing bestellen klanten uit Appeltern nu online. Omzet is flink gestegen.' },
    { name: 'Fietsenmaker Appeltern', rating: 4.5, text: 'Onze reparatieservice wordt nu veel beter gevonden door fietsers in Appeltern.' },
    { name: 'Notaris Appeltern', rating: 5, text: 'De Google Ads campagnes leveren maandelijks nieuwe cliënten op uit Appeltern en directe omgeving.' },
    { name: 'Elektricien Appeltern', rating: 5, text: 'Onze spoedservice is nu veel zichtbaarder voor inwoners van Appeltern die elektrische problemen hebben.' },
    { name: 'Dierenarts Appeltern', rating: 4.5, text: 'Nummer 1 positie voor "dierenarts Appeltern" en een duidelijke toename in nieuwe patiënten.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Appeltern | Marketing Bureau & Online Marketing Appeltern</title>
        <meta
          name="description"
          content="SEO Specialist Appeltern inschakelen? Kies voor hét marketing bureau in Appeltern. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/appeltern" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Tuinen van Appeltern: 200.000+ bezoekers naar jouw bedrijf leiden</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Klein dorp, grote kansen door toerisme</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Appeltern: wereldberoemd door Europa's grootste tuineninspiratie park.</strong><br />
              Met slechts 800 inwoners maar De Tuinen van Appeltern die jaarlijks 200.000+ bezoekers trekken uit heel Nederland en België, biedt dit Maas en Waal dorp unieke kansen. Als <b>SEO specialist Appeltern</b> weet ik hoe je profiteert van deze toeristische stroom, de ligging aan de A50 en de nabijheid van Nijmegen (20km).
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Appeltern: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Appeltern</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Appeltern</li>
              <li>✓ <b>SEO Appeltern</b> met meetbaar resultaat</li>
              <li>✓ Websites die bezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Appeltern & regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Appeltern - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Appeltern" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Appeltern met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Appeltern",
              title: "SEO Specialist Appeltern",
              description: "Wil je echt groeien in Appeltern? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Appeltern",
              description: "Direct aanvragen van inwoners en bedrijven uit Appeltern. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Appeltern",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Appeltern. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Appeltern groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Appeltern</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale dienstverlener tot detailhandel – ik help je bedrijf online groeien in Appeltern.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Appeltern */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Appeltern</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Appeltern.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Appeltern</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Appeltern */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Appeltern
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Appeltern</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Appeltern.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Appeltern en omliggende dorpen</li>
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
                  <li>✓ Website op maat voor Appeltern</li>
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Appeltern</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Appeltern – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Appeltern & Regio</h3>
              <p className="text-gray-600">
                Nijmegen • Arnhem • Wijchen • Druten • Beuningen • Overbetuwe • Lingewaard • Renkum
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
