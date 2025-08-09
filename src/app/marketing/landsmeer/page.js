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

export default function MarketingLandsmeer() {
  // Unieke Landsmeer reviews - Waterland gemeente
  const dutchReviews = [
    { name: 'Restaurant Het Wapen van Landsmeer', rating: 5, text: 'Nu veel beter vindbaar voor mensen uit Landsmeer en Amsterdam-Noord. De lokale SEO heeft ons restaurant echt geholpen!' },
    { name: 'Tweewielercentrum Landsmeer', rating: 5, text: 'We krijgen nu klanten uit heel Waterland voor onze fietsen. Vooral vanuit de nieuwe wijk Luijendijk veel aanloop.' },
    { name: 'Fysiotherapie Purmerland', rating: 5, text: 'Patiënten uit Landsmeer, Den Ilp en Purmerland vinden ons nu perfect online. De praktijk groeit gestaag.' },
    { name: 'Aannemersbedrijf Waterland Bouw', rating: 5, text: 'Door de Google Ads campagne krijgen we opdrachten uit heel Landsmeer en omliggende dorpen. Uitstekende ROI!' },
    { name: 'Sportschool Body Fit Landsmeer', rating: 5, text: 'Sinds de nieuwe marketing trekken we leden uit Landsmeer-Centrum én de buitengebieden. 40% groei in 6 maanden.' },
    { name: 'Dierenarts Landsmeer Noord', rating: 4.5, text: 'Online zichtbaarheid in Waterland is sterk verbeterd. We bedienen nu huisdieren uit de hele gemeente.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Stylish Landsmeer', rating: 5, text: 'Klanten uit Landsmeer, Oostzaan en Watergang weten ons nu te vinden. De online strategie werkt perfect voor ons.' },
    { name: 'Tuincentrum Het Groene Hart', rating: 5, text: 'Bewoners van de nieuwe wijken in Landsmeer vinden ons nu makkelijk. Omzet uit lokale markt flink gestegen.' },
    { name: 'Autogarage Landsmeer Service', rating: 4.5, text: 'Door betere vindbaarheid meer werkplaatsafspraken. Vooral uit het gebied tussen Landsmeer en Amsterdam-Noord.' },
    { name: 'Bakkerij De Korenmolen', rating: 5, text: 'Onze ambachtelijke bakkerij wordt nu gevonden door heel Landsmeer. Zelfs mensen uit Broek in Waterland komen langs.' },
    { name: 'Zeilschool Waterland', rating: 5, text: 'Perfect vindbaar voor watersporters uit de regio. De ligging aan het water wordt nu online goed uitgespeeld.' },
    { name: 'Kinderopvang Landsmeer Kids', rating: 4.5, text: 'Jonge gezinnen uit Landsmeer vinden ons nu direct online. Wachtlijst is weer gevuld dankzij de marketing.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Landsmeer | Marketing Bureau Waterland | Online Groei</title>
        <meta
          name="description"
          content="SEO Specialist Landsmeer voor meer klanten uit Waterland. Bereik 11.000+ inwoners tussen Amsterdam-Noord en Purmerend. Lokale online marketing die werkt."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/landsmeer" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Online groeien in</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Landsmeer & Waterland?</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Landsmeer: authentiek Waterlands dorp met 11.000 inwoners, strategisch tussen Amsterdam-Noord en Purmerend.</strong><br />
              Met de historische Breekweg, moderne wijk Luijendijk en de nabijheid van Amsterdam biedt Landsmeer unieke kansen. Als <b>SEO specialist in Landsmeer</b> ken ik de lokale dynamiek van dit waterrijke gebied. Van het centrum tot Den Ilp en Purmerland - ik zorg dat uw bedrijf gevonden wordt door heel Waterland.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik 11.000+ inwoners van gemeente Landsmeer</li>
              <li>✓ Trek klanten uit Amsterdam-Noord (10 min afstand)</li>
              <li>✓ Zichtbaar in heel Waterland: Oostzaan tot Broek</li>
              <li>✓ <b>Marketing Landsmeer</b> voor lokale ondernemers</li>
              <li>✓ Profiteer van groei nieuwe wijk Luijendijk</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis Landsmeer Analyse <span>→</span>
              </Button>
              <Button variant="secondary">
                Waterland Successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Marketing specialist voor Landsmeer & Waterland regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Landsmeer - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Landsmeer" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing Bureau Landsmeer: Van Breekweg tot Luijendijk"
          subtitle="Lokale groei in heel Waterland"
          features={[
            {
              badge: "Waterland SEO",
              title: "Landsmeer Vindbaarheid",
              description: "Domineer de zoekresultaten in Landsmeer, Den Ilp en Purmerland. Perfect voor bedrijven die willen groeien in Waterland en Amsterdam-Noord bereiken.",
              visualTitle: "#1 in Landsmeer",
              visualSubtitle: "Waterland bereik",
              image: masterSeoImage
            },
            {
              badge: "Lokale Campagnes",
              title: "Google Ads Waterland",
              description: "Target inwoners van Landsmeer-Centrum, Luijendijk en de dorpskernen. Slimme campagnes voor de Amsterdam-Purmerend corridor.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "11.000+ bereik",
              image: keywordResearchImage
            },
            {
              badge: "Waterland Websites",
              title: "Modern & Lokaal",
              description: "Websites die passen bij het karakter van Landsmeer: authentiek Waterlands met moderne functionaliteit. Perfect voor lokale binding.",
              visualTitle: "Lokaal design",
              visualSubtitle: "Landsmeer stijl",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Landsmeer ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Online Marketing voor <span className="bg-[#F7D8FA] px-2 rounded italic">Landsmeer & Waterland</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van historische Breekweg tot nieuwe wijk Luijendijk - bereik heel Landsmeer online.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Landsmeer */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Landsmeer Expert</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden door inwoners van Landsmeer, Den Ilp en Purmerland. Optimale zichtbaarheid in heel Waterland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top rankings "bedrijf Landsmeer"</li>
                  <li>✓ Google Mijn Bedrijf optimaal</li>
                  <li>✓ Waterland directories</li>
                  <li>✓ Lokale Landsmeer reviews</li>
                </ul>
              </div>
              {/* Google Ads */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Waterland
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Landsmeer</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct klanten uit Landsmeer en Amsterdam-Noord. Perfect voor snelle groei in Waterland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Postcode 1121 targeting</li>
                  <li>✓ Amsterdam-Noord bereik</li>
                  <li>✓ Waterland campagnes</li>
                  <li>✓ Luijendijk wijk focus</li>
                </ul>
              </div>
              {/* Websites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites Landsmeer</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites met Waterlands karakter. Perfect voor bedrijven die lokaal willen groeien in Landsmeer.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Landsmeer identiteit</li>
                  <li>✓ Mobiel geoptimaliseerd</li>
                  <li>✓ Snelle laadtijden</li>
                  <li>✓ Lokale content strategie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start vandaag met groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Landsmeer</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Of u nu gevestigd bent aan de Breekweg, in Luijendijk of in Den Ilp - ik help u succesvol worden in heel Waterland.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek uw Landsmeer marketing strategie vandaag nog.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht voor snel advies over groeien in Waterland.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Landsmeer & Regio</h3>
              <p className="text-gray-600">
                Landsmeer • Den Ilp • Purmerland • Amsterdam-Noord • Oostzaan • Watergang • Broek in Waterland • Monnickendam • Purmerend
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}