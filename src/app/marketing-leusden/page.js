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

export default function MarketingLeusden() {
  // Lokale Leusden reviews
  const dutchReviews = [
    { name: 'Brasserie Leusden', rating: 5, text: 'Sinds we samenwerken met Albin staan we structureel bovenaan op "eten in Leusden". Onze tafels zijn nu bijna altijd vol!' },
    { name: 'AutoLeusden', rating: 5, text: 'Lokale SEO en Google Ads leveren elke week nieuwe klanten uit Leusden en omgeving. Super samenwerking!' },
    { name: 'Kapsalon Haar & Meer', rating: 5, text: 'Na de website optimalisatie en marketingcampagne hebben we 3x zoveel afspraken. We zijn nu zichtbaar voor heel Leusden.' },
    { name: 'Fysiotherapie Centrum Zuid', rating: 5, text: 'De lokale vindbaarheid is enorm verbeterd. We krijgen meer aanmeldingen en zijn lokaal top-of-mind.' },
    { name: 'Installatiebedrijf van de Pol', rating: 5, text: 'Google Ads gericht op Leusden heeft gezorgd voor veel meer aanvragen. De investering was het dubbel en dwars waard.' },
    { name: 'Tandartspraktijk Leusden Noord', rating: 4.5, text: 'Onze online zichtbaarheid is sterk verbeterd. We worden nu makkelijk gevonden door nieuwe patiënten.' },
  ]
  const dutchMoreReviews = [
    { name: 'Aannemer Mulder', rating: 5, text: 'In korte tijd van plek 5 naar nummer 1 in Google. Lokale SEO werkt echt voor ons bouwbedrijf in Leusden.' },
    { name: 'Schoonheidssalon Pure', rating: 5, text: 'Meer boekingen, meer vaste klanten – dat is het resultaat sinds onze website werd geoptimaliseerd.' },
    { name: 'Fietswinkel Het Wiel', rating: 4.5, text: 'Lokale marketing zorgt ervoor dat fietsers uit heel Leusden bij ons komen. We zijn goed vindbaar en herkenbaar.' },
    { name: 'Advocatenkantoor Leusden', rating: 5, text: 'We worden beter gevonden door mensen uit Leusden. De online strategie zorgt iedere maand voor nieuwe cliënten.' },
    { name: 'Tuincentrum GroenGeluk', rating: 5, text: 'Google Ads voor tuinartikelen werkt geweldig, vooral in het tuinseizoen.' },
    { name: 'Dierenkliniek Leusden', rating: 4.5, text: 'We zijn nu dé dierenarts van Leusden als mensen Googlen. Prettige samenwerking en snelle resultaten.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Leusden | Marketing Bureau & Online Marketing Leusden</title>
        <meta
          name="description"
          content="SEO Specialist Leusden inschakelen? Kies voor hét marketing bureau van Leusden. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-leusden" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Op zoek naar een</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist of Marketing Bureau in Leusden?</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je lokaal groeien in Leusden?</strong><br />
              Als <b>SEO specialist in Leusden</b> zorg ik dat jouw bedrijf wordt gevonden door inwoners van Leusden & omgeving. Met slimme strategieën haal je direct meer aanvragen, boekingen en omzet uit de regio.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Leusden: vindbaar bovenaan Google</li>
              <li>✓ Google Ads campagnes: direct zichtbaar in Leusden</li>
              <li>✓ Strategie op maat voor Leusdense ondernemers</li>
              <li>✓ <b>SEO Leusden</b> voor zzp, mkb & dienstverleners</li>
              <li>✓ Websites die van bezoekers klanten maken</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis Adviesgesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Meer over SEO in Leusden
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief als marketing bureau in Leusden en regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Leusden - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Leusden" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Lokale groei met hét Marketing Bureau & SEO Specialist in Leusden"
          subtitle="Meer aanvragen, meer klanten, meer groei"
          features={[
            {
              badge: "SEO Leusden",
              title: "SEO Specialist Leusden",
              description: "Met een slimme lokale SEO aanpak ben je altijd zichtbaar als jouw klant zoekt op 'dienst + Leusden'. Meer vindbaarheid betekent meer klanten én omzet.",
              visualTitle: "Bovenaan in Leusden",
              visualSubtitle: "Maximaal lokaal bereik",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Leusden",
              description: "Direct meer aanvragen en boekingen uit Leusden met een doordachte Google Ads strategie. Haal alles uit je advertentiebudget.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Meer leads & omzet",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Leusden",
              description: "Professionele, snelle en converterende websites – speciaal voor de Leusdense markt. Alles gericht op meer lokale aanvragen en omzet.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Groei in Leusden",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Leusden groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Leusden</span>
              </h2>
              <p className="text-xl text-gray-600">
                Effectieve online marketing voor ondernemers, winkels en bedrijven in Leusden.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Leusden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Leusden</h3>
                <p className="text-gray-600 mb-6">
                  Krijg meer aanvragen en klanten uit Leusden met sterke lokale SEO. Je bedrijf wordt gevonden door iedereen die zoekt op jouw vakgebied + Leusden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Leusden</li>
                  <li>✓ Content, linkbuilding en autoriteit</li>
                  <li>✓ Zichtbaarheid & reviews stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Leusden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Leusden
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Leusden</h3>
                <p className="text-gray-600 mb-6">
                  Meer klanten uit Leusden? Met Google Ads ben je direct zichtbaar en ontvang je direct nieuwe aanvragen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertentiecampagnes</li>
                  <li>✓ Gericht op Leusden en omgeving</li>
                  <li>✓ Altijd meetbaar resultaat</li>
                  <li>✓ Maandelijkse optimalisatie & rapportage</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Met een moderne website en slimme marketingstrategie ben je top-of-mind in Leusden. Gericht op conversie, groei en lokale bekendheid.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Leusden</li>
                  <li>✓ Snel, mobielvriendelijk en veilig</li>
                  <li>✓ Gericht op lokale conversie</li>
                  <li>✓ Alles voor lokale zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vrijblijvend kennismaken met dé <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Leusden</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek wat ik als marketing bureau voor jouw bedrijf in Leusden kan betekenen. Snelle reactie & eerlijk advies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Wil je snel schakelen? Bel gerust voor een gratis kennismaking.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Liever snel appen? Stuur direct een WhatsApp voor vlotte hulp.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Leusden & Regio</h3>
              <p className="text-gray-600">
                Leusden • Amersfoort • Woudenberg • Barneveld • Nijkerk • Achterveld • Scherpenzeel • Soest
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
