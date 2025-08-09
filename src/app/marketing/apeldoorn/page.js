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

export default function MarketingApeldoorn() {
  // Apeldoorn reviews - Koninklijke stad op de Veluwe met 165.000 inwoners
  const dutchReviews = [
    { name: 'Hotel bij Paleis Het Loo', rating: 5, text: 'Sinds de SEO strategie boeken veel meer toeristen die Het Loo bezoeken bij ons. We staan nu bovenaan voor "hotel Apeldoorn centrum"!' },
    { name: 'Restaurant Caterplein', rating: 5, text: 'Ons terras aan het bruisende Caterplein zit nu altijd vol. De lokale marketing trekt gasten uit heel Apeldoorn-Centrum.' },
    { name: 'Apenheul Merchandise', rating: 5, text: 'Onze webshop wordt nu gevonden door bezoekers van Apenheul. Online verkoop van souvenirs is verdubbeld!' },
    { name: 'Bedrijf Stadhuisplein', rating: 5, text: 'Vanuit onze locatie bij het stadhuis bereiken we nu ondernemers uit heel groot-Apeldoorn. Perfecte B2B strategie.' },
    { name: 'Sportschool Zuid', rating: 5, text: 'Met vestigingen in Zuid en bij winkelcentrum Anklaar krijgen we nu leden uit alle wijken. Top marketing!' },
    { name: 'Bouwbedrijf Berg en Bos', rating: 4.5, text: 'Voor villa renovaties in Berg en Bos en Het Loo krijgen we nu premium opdrachten. Geweldige positionering!' },
  ]
  const dutchMoreReviews = [
    { name: 'Fietsenwinkel Veluwe', rating: 5, text: 'Als startpunt voor Veluwe tochten worden we perfect gevonden. Vooral e-bike verhuur loopt geweldig via Google.' },
    { name: 'Belastingadviseur Ugchelen', rating: 5, text: 'Vanuit Ugchelen bedienen we nu ondernemers uit heel Apeldoorn. De zakelijke SEO strategie werkt uitstekend.' },
    { name: 'Kapsalon Orden', rating: 4.5, text: 'Onze salon in de wijk Orden wordt nu gevonden door heel Apeldoorn-West. Agenda zit voller dan ooit!' },
    { name: 'Orthodontist Apeldoorn-Noord', rating: 5, text: 'Gezinnen uit Kerschoten en De Maten vinden ons nu makkelijk. Wachtlijst groeit gestaag dankzij online vindbaarheid.' },
    { name: 'Orpheus Theater Shop', rating: 5, text: 'Onze theatercafé bij het Orpheus wordt nu gevonden door alle theaterbezoeker. Omzet stijgt met 40%!' },
    { name: 'Julianatoren Camping', rating: 4.5, text: 'Families die Julianatoren bezoeken boeken nu vaker bij ons. "Camping bij Julianatoren" scoort perfect!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Apeldoorn | Marketing Bureau Koninklijke Stad | Veluwe Marketing</title>
        <meta
          name="description"
          content="SEO Specialist Apeldoorn voor bedrijven in de koninklijke stad. Van Paleis Het Loo tot Apenheul - lokale marketing die werkt. ✓ 165.000+ inwoners bereiken ✓ Veluwe specialist."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/apeldoorn" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau in Koninklijk Apeldoorn?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Van Paleis Het Loo tot Apenheul</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Groei in de groene stad op de Veluwe!</strong><br />
              Met 165.000 inwoners, Paleis Het Loo, Apenheul en het bruisende centrum is Apeldoorn dé Veluwestad. Als <b>SEO specialist Apeldoorn</b> ken ik de mix van koninklijke allure, natuur en moderne bedrijvigheid.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Vindbaar van Centrum tot Berg en Bos</li>
              <li>✓ Trek toeristen van Het Loo en Apenheul</li>
              <li>✓ Bereik alle wijken: Zuid, Orden, Ugchelen</li>
              <li>✓ <b>Veluwe marketing</b> met lokale expertise</li>
              <li>✓ Profileer je tussen 11.000+ bedrijven</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Apeldoorn strategie <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Veluwe successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Groot-Apeldoorn & Veluwe</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Apeldoorn - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Apeldoorn" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Apeldoorn met gerichte marketing"
          subtitle="Lokale vindbaarheid in de Veluwse stad, zonder poespas"
          features={[
            {
              badge: "SEO Apeldoorn",
              title: "SEO Specialist Apeldoorn",
              description: "Wil je echt groeien in Apeldoorn? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit de stad en regio.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Apeldoorn",
              description: "Direct aanvragen van inwoners en bedrijven uit Apeldoorn en omgeving. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Apeldoorn",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Apeldoorn. Volledig geoptimaliseerd voor de lokale markt.",
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
          title="Apeldoorn groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Apeldoorn</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale dienstverlener tot Veluwse onderneming – ik help je bedrijf online groeien in Apeldoorn.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Apeldoorn */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Apeldoorn</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Apeldoorn.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Apeldoorn</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Apeldoorn */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Apeldoorn
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Apeldoorn</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Apeldoorn en de Veluwe.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Apeldoorn en Veluwe</li>
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
                  <li>✓ Website op maat voor Apeldoorn</li>
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Apeldoorn</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Apeldoorn – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Apeldoorn & Veluwe</h3>
              <p className="text-gray-600">
                Apeldoorn • Vaassen • Beekbergen • Loenen • Hoenderloo • Uddel • Hoog Soeren • Ugchelen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}