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

export default function MarketingDeGlind() {
  // Lokale De Glind reviews
  const dutchReviews = [
    { name: 'Boerderij De Glindse Hoeve', rating: 5, text: 'Sinds de samenwerking met Albin krijgen we structureel meer gasten uit de regio. We worden eindelijk online gevonden!' },
    { name: 'Garage De Glind Service', rating: 5, text: 'Onze Google Ads leveren elke week nieuwe opdrachten uit De Glind en omgeving. Persoonlijke aanpak en snelle resultaten.' },
    { name: 'Restaurant De Glindse Kamer', rating: 5, text: 'Met een nieuwe website en betere vindbaarheid zitten we regelmatig vol. Lokaal succes begint online.' },
    { name: 'Kapsalon De Glindse Stijl', rating: 5, text: 'We staan nu bovenaan bij “kapper De Glind” en de afspraken lopen binnen. Aanrader voor kleine ondernemers.' },
    { name: 'Installatiebedrijf De Glind Tech', rating: 5, text: 'De investering in marketing heeft zich ruimschoots terugverdiend. Kwalitatieve leads uit de hele regio.' },
    { name: 'Tandartspraktijk De Glind', rating: 4.5, text: 'Professioneel, doelgericht en altijd bereikbaar. We zijn echt zichtbaar in De Glind en trekken nieuwe patiënten.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf De Glind BV', rating: 5, text: 'Binnen een paar maanden gestegen naar #1 in Google. Meer aanvragen dan ooit voor lokale bouwprojecten.' },
    { name: 'Schoonheidssalon De Glind', rating: 5, text: 'Na de optimalisatie krijgen we meer nieuwe klanten en positieve reviews uit het dorp.' },
    { name: 'Fietsenwinkel De Glindse Wielen', rating: 4.5, text: 'We trekken nu ook klanten uit Barneveld en Ede. Lokale SEO werkt écht.' },
    { name: 'Advocatenkantoor De Glind', rating: 5, text: 'Onze online aanwezigheid levert maandelijks nieuwe cliënten op. Super tevreden!' },
    { name: 'Tuincentrum De Glindse Groen', rating: 5, text: 'De Google Ads campagne draait top, vooral in het voorjaar. Meer mensen weten ons te vinden.' },
    { name: 'Dierenarts De Glind', rating: 4.5, text: 'We zijn nu de best vindbare dierenarts van De Glind. Lokale SEO maakt het verschil.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist De Glind | Marketing Bureau & Online Marketing De Glind</title>
        <meta
          name="description"
          content="SEO Specialist De Glind nodig? Lokale marketing voor ondernemers in De Glind. Ontdek hoe jouw bedrijf meer klanten krijgt met SEO, Google Ads en slimme online strategieën."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing-de-glind" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Meer klanten uit De Glind?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Lokale SEO & marketing die wérkt</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je als ondernemer in De Glind écht online zichtbaar worden?</strong><br />
              Ik help lokale bedrijven — van boerenbedrijf tot schoonheidssalon — aan meer aanvragen en boekingen via internet.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Vindbaar in Google & Maps: lokaal bovenaan</li>
              <li>✓ Direct aanvragen met slimme Google Ads</li>
              <li>✓ Website die klanten oplevert</li>
              <li>✓ Strategie op maat voor De Glind en omliggende dorpen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis kennismaken <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Resultaten & Cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkt voor lokale ondernemers, zzp’ers en familiebedrijven</p>
            <p className="mt-2 text-xs text-green-600">📞 Vragen? Bel of app: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten De Glind - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist De Glind" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP / FEATURE SECTION */}
        <FeatureSection
          title="Lokaal succes met slimme marketing in De Glind"
          subtitle="Voor ondernemers die willen groeien in het dorp en de regio"
          features={[
            {
              badge: "SEO De Glind",
              title: "SEO & Google Maps: zichtbaar voor iedereen",
              description: "Sta bovenaan als mensen zoeken naar jouw dienst in De Glind. Met lokale SEO trek je meer klanten uit je eigen dorp.",
              visualTitle: "SEO & Maps",
              visualSubtitle: "Lokaal resultaat",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads: vandaag gevonden, morgen klanten",
              description: "Met gerichte Google Ads bereik je direct mensen uit De Glind en omgeving die nu op zoek zijn naar jouw aanbod.",
              visualTitle: "Direct aanvragen",
              visualSubtitle: "Regionaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Website die klanten trekt",
              description: "Geen standaard site, maar een website die jouw lokale karakter laat zien én klanten over de streep trekt. Snel, betrouwbaar en goed vindbaar.",
              visualTitle: "Webdesign",
              visualSubtitle: "Voor dorpsbedrijven",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers uit <span class='bg-[#F7D8FA] px-2 rounded italic'>De Glind</span> over Albin"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau voor <span className="bg-[#F7D8FA] px-2 rounded italic">De Glind</span>
              </h2>
              <p className="text-lg text-gray-600">
                Van boer tot kapper, ik help De Glind digitaal groeien.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lokale SEO De Glind */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO De Glind</h3>
                <p className="text-gray-600 mb-6">
                  Scoor in Google als mensen zoeken naar ‘[jouw branche] De Glind’. Meer aanvragen = meer klanten!
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfspagina optimalisatie</li>
                  <li>✓ Lokale zoekwoorden en content</li>
                  <li>✓ Reviews verzamelen & beheren</li>
                  <li>✓ Lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads De Glind */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in De Glind
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads De Glind</h3>
                <p className="text-gray-600 mb-6">
                  Met slimme Google Ads campagne ben je direct zichtbaar in het dorp. Nieuwe klanten zonder verspilling van budget.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale campagnes</li>
                  <li>✓ Gericht op De Glind & regio</li>
                  <li>✓ Conversiegericht</li>
                  <li>✓ Maandelijkse rapportages</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Websites die vertrouwen opwekken én klanten opleveren. Altijd mobielvriendelijk en gericht op resultaat.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Uniek ontwerp</li>
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
              Kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist De Glind</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe jouw bedrijf uit De Glind lokaal kan groeien. Het eerste gesprek is gratis en vrijblijvend.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Sparren over online marketing? Bel zonder verplichting.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stuur je vraag via WhatsApp — snel en persoonlijk antwoord!</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied De Glind & omgeving</h3>
              <p className="text-gray-600">
                De Glind • Barneveld • Ede • Bennekom • Lunteren • Amersfoort • Leusden • Nijkerk • Voorthuizen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
