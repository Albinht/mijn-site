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

export default function MarketingUitgeest() {
  // Lokale Uitgeest reviews - volledig uniek voor deze Noord-Hollandse gemeente
  const dutchReviews = [
    { name: 'Jachtwerf Uitgeest', rating: 5, text: 'Dankzij de lokale SEO strategie krijgen we nu veel meer aanvragen uit de regio Alkmaar-Zaanstreek. Perfect voor ons botenbedrijf!' },
    { name: 'Café De Ooievaar', rating: 5, text: 'Sinds we online zichtbaar zijn, komen er veel meer mensen uit Uitgeest en Heemskerk naar ons historische café aan de Langebuurt.' },
    { name: 'Fysiotherapie Station Uitgeest', rating: 5, text: 'Als praktijk vlakbij het NS-station worden we nu perfect gevonden door forensen. De lokale vindbaarheid is geweldig verbeterd.' },
    { name: 'Bloembinderij Zonneveld', rating: 5, text: 'We staan nu bovenaan voor "bloemist Uitgeest" en krijgen veel meer bestellingen uit het dorp en omliggende polders.' },
    { name: 'Aannemersbedrijf Van der Eng', rating: 5, text: 'De Google Ads campagne gericht op Uitgeest en Waterland levert constant nieuwe klussen op. Top investering!' },
    { name: 'Restaurant Fort aan de Dije', rating: 4.5, text: 'Onze ligging aan het Uitgeestermeer wordt nu perfect uitgespeeld online. Veel meer reserveringen uit de hele regio.' },
  ]
  const dutchMoreReviews = [
    { name: 'Uitgeester IJsclub', rating: 5, text: 'Met de nieuwe website en SEO bereiken we alle schaatsliefhebbers uit Uitgeest en omstreken. Ledengroei van 40%!' },
    { name: 'Kapsalon Hair & Beauty', rating: 5, text: 'We trekken nu klanten uit heel Uitgeest, zelfs uit de nieuwe wijken Waldijk en De Koog. Online marketing werkt echt.' },
    { name: 'Autobedrijf Uitgeest Service', rating: 4.5, text: 'Door de lokale campagnes krijgen we meer werkplaatsafspraken. Vooral uit het gebied tussen station en A9.' },
    { name: 'Tennisvereniging Uitgeest', rating: 5, text: 'De online zichtbaarheid heeft ons geholpen nieuwe leden te werven uit Uitgeest, Akersloot en Limmen.' },
    { name: 'Bakkerij De Oude Sluis', rating: 5, text: 'Sinds we beter vindbaar zijn, komen mensen speciaal uit Krommenie en Wormerveer voor ons ambachtelijke brood.' },
    { name: 'Makelaar Uitgeest Woningen', rating: 4.5, text: 'Perfect vindbaar voor iedereen die een huis zoekt in Uitgeest. We krijgen nu meer opdrachten uit eigen dorp.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Uitgeest | Marketing Bureau & Online Vindbaarheid</title>
        <meta
          name="description"
          content="SEO Specialist Uitgeest zorgt voor meer klanten uit uw regio. Lokale vindbaarheid tussen Alkmaar en Zaanstreek. Groei met slimme online marketing voor Uitgeest."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/uitgeest" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Groeien in Uitgeest met</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">SEO & Marketing dat werkt?</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Uitgeest telt ruim 12.000 inwoners en ligt strategisch tussen Alkmaar en Zaanstad.</strong><br />
              Met het NS-station als belangrijke OV-hub en de ligging aan het Uitgeestermeer heeft dit Noord-Hollandse dorp unieke troeven. Als <b>SEO specialist in Uitgeest</b> help ik lokale ondernemers om optimaal te profiteren van de groeiende forensenstroom en het actieve dorpsleven rond de Langebuurt en Middelweg.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Zichtbaar voor 12.000+ inwoners van Uitgeest</li>
              <li>✓ Bereik forensen via station Uitgeest (Alkmaar-Amsterdam)</li>
              <li>✓ Trek klanten uit Heemskerk, Krommenie en Castricum</li>
              <li>✓ <b>Marketing Uitgeest</b> voor horeca, retail & dienstverleners</li>
              <li>✓ Profiteer van bezoekers Uitgeestermeer en Fort aan de Dije</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis Uitgeest Strategie <span>→</span>
              </Button>
              <Button variant="secondary">
                Bekijk Successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Uitgeest, Waterland & Zaanstreek</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Uitgeest - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Uitgeest" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing Bureau Uitgeest: Van Station tot Uitgeestermeer"
          subtitle="Lokale groei tussen Alkmaar en Zaanstreek"
          features={[
            {
              badge: "Lokale SEO",
              title: "Uitgeest Vindbaarheid",
              description: "Word gevonden door inwoners van Uitgeest, forensen op het station en bezoekers van het Uitgeestermeer. Optimale zichtbaarheid in de driehoek Alkmaar-Zaanstad-Beverwijk.",
              visualTitle: "#1 in Uitgeest",
              visualSubtitle: "12.000+ bereik",
              image: masterSeoImage
            },
            {
              badge: "Google Ads Waterland",
              title: "Adverteren in Noord-Holland",
              description: "Bereik klanten uit Uitgeest, Akersloot, Limmen en de hele regio Waterland. Slimme campagnes gericht op forensenstromen en lokale koopkracht.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Regio Waterland",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Uitgeest Online Succes",
              description: "Een website die past bij de dynamiek van Uitgeest: toegankelijk voor dorpsbewoners én aantrekkelijk voor bezoekers uit de regio. Focus op lokale binding.",
              visualTitle: "Lokaal & Modern",
              visualSubtitle: "Uitgeest-proof",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Uitgeester ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Online Marketing voor <span className="bg-[#F7D8FA] px-2 rounded italic">Uitgeest & Waterland</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van de historische Langebuurt tot moderne wijken zoals Waldijk - bereik heel Uitgeest online.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Uitgeest */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Uitgeest Specialist</h3>
                <p className="text-gray-600 mb-6">
                  Domineer de zoekresultaten in Uitgeest en trek klanten uit het hele Waterland gebied. Perfect voor bedrijven bij het station of Uitgeestermeer.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top rankings "bedrijf + Uitgeest"</li>
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Lokale Uitgeest directories</li>
                  <li>✓ Reviews van dorpsbewoners</li>
                </ul>
              </div>
              {/* Google Ads */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Noord-Holland
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Waterland</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct klanten uit Uitgeest, Krommenie, Heemskerk en Castricum. Ideaal voor snelle groei in de regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Targeting op postcode 1911</li>
                  <li>✓ Forensen campagnes station</li>
                  <li>✓ Weekend traffic Uitgeestermeer</li>
                  <li>✓ A9 corridor bereik</li>
                </ul>
              </div>
              {/* Websites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites voor Uitgeest</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites die passen bij de mix van historisch dorpskarakter en moderne forensencultuur van Uitgeest.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale Uitgeest identiteit</li>
                  <li>✓ Mobiel voor forensen</li>
                  <li>✓ Integratie sociale media</li>
                  <li>✓ Snelle laadtijden A9 gebied</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start vandaag met groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Uitgeest</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Of u nu gevestigd bent aan de Langebuurt, bij het station of aan het Uitgeestermeer - ik help u online succesvol worden in Uitgeest en omstreken.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek uw Uitgeest marketing strategie direct met mij.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht voor snel advies over online groeien in Uitgeest.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Uitgeest & Regio</h3>
              <p className="text-gray-600">
                Uitgeest • Akersloot • Limmen • Heemskerk • Krommenie • Wormerveer • Castricum • Alkmaar • Zaanstad
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}