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

export default function MarketingSluis() {
  // Lokale Sluis reviews - historische vestingstad aan Belgische grens
  const dutchReviews = [
    { name: 'Restaurant De Oude Vesting', rating: 5, text: 'Ons restaurant in de historische binnenstad krijgt nu gasten uit België én Nederland. Grenstoerisme zorgt voor constant nieuwe klanten!' },
    { name: 'Hotel Sluis', rating: 5, text: 'Onze boutique hotel profiteert van zowel Nederlandse als Belgische gasten. Online marketing heeft onze bezetting sterk verhoogd.' },
    { name: 'Apotheek Sluis Centrum', rating: 4.5, text: 'Voor onze apotheek aan de Grote Kerk was lokale SEO perfect. Klanten uit heel Zeeuws-Vlaanderen vinden ons nu moeiteloos.' },
    { name: 'Fietsverhuur Vestingstad', rating: 5, text: 'Met toeristen die de vestingwerken verkennen hebben we constant verhuur. De online zichtbaarheid trekt klanten uit beide landen.' },
    { name: 'Cadeauwinkel Sluis', rating: 5, text: 'Onze winkel voor souvenirs en lokale producten wordt nu gevonden door alle bezoekers van het historische Sluis.' },
    { name: 'Advocaat Sluis', rating: 4.5, text: 'Voor juridische zaken in grensregio Zeeuws-Vlaanderen bereiken we nu klanten uit heel de regio. Perfecte uitbreiding van ons bereik.' },
  ]
  const dutchMoreReviews = [
    { name: 'Museum Sluis Shop', rating: 5, text: 'Als museumwinkel profiteren we van cultuurtoeristen die de vestinggeschiedenis komen ontdekken. Verkoop is flink gestegen.' },
    { name: 'Garage Sluis', rating: 4.5, text: 'Voor autoreparatie in Sluis en omgeving staan we nu bovenaan. Klanten uit België en Nederland vinden ons gemakkelijk.' },
    { name: 'Bed & Breakfast Vestingzicht', rating: 5, text: 'Ons B&B met uitzicht op de vestingwerken wordt geboekt door geschiedenisliefhebbers en fietsers. Geweldig seizoen gehad!' },
    { name: 'Bloemist Sluis', rating: 4.5, text: 'Voor bloemen en planten in Sluis waren we moeilijk vindbaar. Nu krijgen we bestellingen uit heel Zeeuws-Vlaanderen.' },
    { name: 'Installateur Sluis', rating: 5, text: 'Voor technische installaties in historische panden van Sluis zijn we gespecialiseerd. SEO brengt de juiste klanten.' },
    { name: 'Kapsalon Vestingpoort', rating: 4.5, text: 'Onze salon nabij de historische poorten krijgt klanten uit Nederland en België. Perfecte locatie, nu ook online vindbaar.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Sluis | Marketing Bureau & Online Marketing Sluis</title>
        <meta
          name="description"
          content="SEO Specialist Sluis inschakelen? Kies voor hét marketing bureau in Sluis. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/sluis" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Sluis: Vestingwerk in Online Marketing</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Historische grensstad, moderne mogelijkheden</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Sluis: waar geschiedenis en moderne ondernemersgeest elkaar ontmoeten aan de Belgische grens.</strong><br />
              Met 2.300+ inwoners, eeuwenoude vestingwerken, unieke grensligging en rijk cultuurtoerisme biedt dit historische stadje bijzondere kansen. Als <b>SEO specialist Sluis</b> help ik lokale ondernemers profiteren van zowel Nederlandse als Belgische klanten in deze unieke grensregio van Zeeuws-Vlaanderen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Sluis: topresultaten in Google</li>
              <li>✓ Google Ads: direct aanvragen uit Sluis</li>
              <li>✓ Speciaal voor bedrijven, winkels en zzp'ers in Sluis</li>
              <li>✓ <b>SEO Sluis</b> met meetbaar resultaat</li>
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
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Sluis & Zeeuws-Vlaanderen</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Sluis - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Sluis" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Sluis met slimme marketing"
          subtitle="Lokale vindbaarheid en conversie, zonder poespas"
          features={[
            {
              badge: "SEO Sluis",
              title: "SEO Specialist Sluis",
              description: "Wil je echt groeien in Sluis? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Sluis",
              description: "Direct aanvragen van inwoners en toeristen uit Sluis. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Sluis",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Sluis. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Sluis groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Sluis</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van horeca tot cultuurtoerisme – ik help je bedrijf online groeien in Sluis.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Sluis */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Sluis</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Sluis.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Sluis</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Sluis */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Sluise ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Sluis</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Sluis.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Sluis en grensstreek</li>
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
                  <li>✓ Website op maat voor Sluis</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Sluis</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Waarom lokale SEO in Sluis?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Sluis heeft een unieke positie als historische vestingstad aan de Belgische grens. Lokale SEO zorgt dat je wordt gevonden door zowel Nederlandse als Belgische bezoekers en locals. Perfect voor horeca, toerisme en grenshandel.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Wat kost SEO voor een bedrijf in Sluis?</summary>
                <div className="mt-4 text-gray-600">
                  <p>SEO projecten starten vanaf €800 per maand. Voor Sluise ondernemers pas ik de strategie aan op grenshandel en toerisme. De unieke ligging biedt extra kansen. Eerste gesprek altijd gratis.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Bereik ik ook Belgische klanten?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Absoluut! Sluis' grensligging maakt het perfect voor internationale SEO. Veel Belgen bezoeken Sluis voor shopping, cultuur en geschiedenis. We optimaliseren voor beide markten.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Werk je met toeristische bedrijven?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Ja, Sluis' rijke geschiedenis trekt veel cultuurtoeristen. Van hotels tot restaurants, van musea tot rondleidingen. Ik help je profiteren van bezoekers die de vestingwerken en geschiedenis komen ontdekken.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe werkt Google Ads voor Sluis?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Google Ads zijn effectief voor Sluis' seizoensgebonden toerisme. Je kunt adverteren naar cultuurtoeristen, dagjesmenpen en grensshoppers. Budgets vanaf €300-500/maand, perfect voor kleine ondernemers.</p>
                </div>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="text-xl font-semibold cursor-pointer">Hoe lang duurt het voor ik resultaat zie?</summary>
                <div className="mt-4 text-gray-600">
                  <p>Voor Sluis zie je vaak sneller resultaat door de beperkte concurrentie. Binnen 4-6 weken eerste verbeteringen, volledige resultaten binnen 3-6 maanden. Google Ads werken direct vanaf dag 1.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Sluis</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Sluis – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Sluis - Online Marketing Sluis & Omgeving</h3>
              <p className="text-gray-600">
                Sluis Centrum • Grote Kerk • Vestingwerken • Grensgebied • En natuurlijk ook actief in: Zeeuws-Vlaanderen • Cadzand • Breskens • Oostburg • Terneuzen • Knokke-Heist (België)
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}