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

export default function MarketingEemnes() {
  // Unieke Eemnes reviews - historisch polderdorp Utrecht
  const dutchReviews = [
    { name: 'Restaurant De Eemnes', rating: 5, text: 'Als restaurant in het historische centrum trekken we nu gasten uit heel Het Gooi. De lokale SEO heeft ons echt op de kaart gezet!' },
    { name: 'Boerderij De Vaart', rating: 5, text: 'Onze boerderijwinkel wordt nu gevonden door mensen uit Eemnes, Baarn en Blaricum. Verkoop van streekproducten flink gestegen.' },
    { name: 'Fysiotherapie Eemnes-Binnen', rating: 5, text: 'Patiënten uit zowel Eemnes-Binnen als Eemnes-Buiten vinden ons nu perfect. Ook veel aanloop uit Laren en Blaricum.' },
    { name: 'Aannemersbedrijf Polderwerk', rating: 5, text: 'Vanuit Eemnes bedienen we nu de hele regio. Google Ads campagne levert klussen op van Bunschoten tot Hilversum.' },
    { name: 'Manege Eemnesserpolder', rating: 5, text: 'Onze paardrijlessen worden nu gevonden door ruiters uit Het Gooi en Eemland. 50% meer nieuwe leden dit jaar!' },
    { name: 'Tandartspraktijk Wakkerendijk', rating: 4.5, text: 'Als praktijk aan de Wakkerendijk bereiken we nu heel Eemnes. Agenda zit vol met nieuwe patiënten uit het dorp.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Style Eemnes', rating: 5, text: 'Klanten uit het oude dorp én de nieuwe wijken weten ons te vinden. De online strategie werkt perfect voor ons.' },
    { name: 'Garage Eemnes Service', rating: 5, text: 'Door onze ligging tussen Baarn en Bunschoten krijgen we nu klanten uit beide richtingen. SEO heeft ons bereik vergroot.' },
    { name: 'Bakkerij Het Oude Dorp', rating: 4.5, text: 'Ons ambachtelijke brood wordt nu gevonden door heel Eemnes. Zelfs mensen uit Laren komen speciaal hierheen.' },
    { name: 'Schildersbedrijf De Polder', rating: 5, text: 'Vanuit Eemnes werken we nu in heel Eemland en Het Gooi. De marketing heeft ons werkgebied flink uitgebreid.' },
    { name: 'Kinderopvang Eemnes Kids', rating: 5, text: 'Jonge gezinnen uit de nieuwbouwwijken vinden ons nu direct online. Wachtlijst is weer gevuld dankzij de campagnes.' },
    { name: 'Dierenarts Eemnes-Buiten', rating: 4.5, text: 'We bedienen nu huisdieren uit heel Eemnes en omgeving. Vooral de boerderijen in de polder weten ons te vinden.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Eemnes | Marketing Bureau Eemland & Het Gooi | Online Groei</title>
        <meta
          name="description"
          content="SEO Specialist Eemnes voor meer klanten uit Eemland en Het Gooi. Bereik 9.000+ inwoners tussen polder en villa's. Lokale online marketing die werkt."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/eemnes" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Online groeien tussen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Polder & Het Gooi?</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Eemnes: uniek polderdorp met 9.000 inwoners op de grens van Utrecht en Noord-Holland.</strong><br />
              Met het historische karakter van Eemnes-Binnen en Eemnes-Buiten, de uitgestrekte polders en de nabijheid van Het Gooi biedt Eemnes een bijzondere mix. Als <b>SEO specialist in Eemnes</b> begrijp ik deze unieke positie tussen landelijk en welvarend. Van de Wakkerendijk tot de Laarderweg - ik zorg dat uw bedrijf gevonden wordt door zowel dorpsbewoners als de welgestelde regio eromheen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik 9.000+ inwoners van Eemnes</li>
              <li>✓ Zichtbaar voor elite uit Laren & Blaricum</li>
              <li>✓ Trek klanten uit Baarn & Bunschoten</li>
              <li>✓ <b>Marketing Eemnes</b> voor lokaal & regionaal</li>
              <li>✓ Profiteer van ligging tussen polder en Het Gooi</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis Eemnes Strategie <span>→</span>
              </Button>
              <Button variant="secondary">
                Eemland Successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Marketing specialist voor Eemnes, Eemland & Het Gooi</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Eemnes - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Eemnes" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing Bureau Eemnes: Van Polder tot Villa's"
          subtitle="Unieke positie tussen landelijk en luxe"
          features={[
            {
              badge: "Eemland SEO",
              title: "Eemnes Vindbaarheid",
              description: "Word gevonden door inwoners van Eemnes-Binnen, Eemnes-Buiten én de welgestelde dorpen eromheen. Perfect voor bedrijven met diverse doelgroepen.",
              visualTitle: "#1 in Eemnes",
              visualSubtitle: "Polder & Gooi",
              image: masterSeoImage
            },
            {
              badge: "Regio Campagnes",
              title: "Google Ads Eemland",
              description: "Target zowel de lokale bevolking als de koopkrachtige inwoners van Het Gooi. Slimme mix van landelijk en luxury marketing.",
              visualTitle: "Dubbel bereik",
              visualSubtitle: "9.000+ lokaal",
              image: keywordResearchImage
            },
            {
              badge: "Authentiek & Modern",
              title: "Eemnes Websites",
              description: "Websites die de authentieke polderidentiteit combineren met moderne functionaliteit. Aantrekkelijk voor zowel dorpsbewoners als Gooise clientèle.",
              visualTitle: "Lokaal karakter",
              visualSubtitle: "Regionaal bereik",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Eemnes ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>polder tot Gooi marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Online Marketing voor <span className="bg-[#F7D8FA] px-2 rounded italic">Eemnes & Eemland</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van historische Wakkerendijk tot moderne nieuwbouw - bereik heel Eemnes online.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Eemnes */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Eemnes Specialist</h3>
                <p className="text-gray-600 mb-6">
                  Domineer de zoekresultaten in Eemnes en trek klanten uit zowel de polder als Het Gooi. Unieke positie optimaal benutten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top rankings "bedrijf Eemnes"</li>
                  <li>✓ Eemland & Gooi bereik</li>
                  <li>✓ Google Mijn Bedrijf optimaal</li>
                  <li>✓ Lokale Eemnes reviews</li>
                </ul>
              </div>
              {/* Google Ads */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Eemland
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Eemnes</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct klanten uit Eemnes, Baarn, Laren en Blaricum. Perfect voor snelle groei in diverse markten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Postcode 3755 targeting</li>
                  <li>✓ Het Gooi luxury bereik</li>
                  <li>✓ Eemland polder focus</li>
                  <li>✓ Baarn-Bunschoten corridor</li>
                </ul>
              </div>
              {/* Websites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites Eemnes</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites die de unieke mix van polder en welvaart weerspiegelen. Perfect voor bedrijven in Eemnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Eemnes identiteit</li>
                  <li>✓ Polder tot villa's</li>
                  <li>✓ Mobiel geoptimaliseerd</li>
                  <li>✓ Lokaal & regionaal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start vandaag met groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Eemnes</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Of u nu gevestigd bent in Eemnes-Binnen, Eemnes-Buiten of aan de Wakkerendijk - ik help u succesvol worden in Eemland én Het Gooi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek uw Eemnes marketing strategie vandaag nog.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht voor snel advies over groeien in Eemnes.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Eemnes & Regio</h3>
              <p className="text-gray-600">
                Eemnes • Baarn • Laren • Blaricum • Bunschoten • Spakenburg • Soest • Hilversum • Huizen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}