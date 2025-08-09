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

export default function MarketingScherpenzeel() {
  // Unieke Scherpenzeel reviews - grensdorp Gelderland/Utrecht
  const dutchReviews = [
    { name: 'Landbouwmechanisatie Scherpenzeel', rating: 5, text: 'Perfect vindbaar voor agrarische klanten uit de hele Gelderse Vallei. Onze machines worden nu beter gevonden online.' },
    { name: 'Café De Witte Holevoet', rating: 5, text: 'Als dorpscafé aan de Marktstraat trekken we nu ook jongeren uit Woudenberg en Renswoude. Top marketing strategie!' },
    { name: 'Bouwbedrijf Van den Top', rating: 5, text: 'Vanuit Scherpenzeel bouwen we nu in heel de regio. Google Ads zorgt voor constante stroom nieuwe projecten.' },
    { name: 'Huisartsenpraktijk Akkerwinde', rating: 5, text: 'Nieuwe patiënten uit de groeiende wijk Akkerwinde vinden ons nu direct. Praktijk zit weer vol dankzij online vindbaarheid.' },
    { name: 'Supermarkt Dorpsplein', rating: 5, text: 'Als lokale supermarkt concurreren we nu effectief met de ketens. Meer klanten uit heel Scherpenzeel centrum.' },
    { name: 'Sportcentrum De Bree', rating: 4.5, text: 'Onze sportfaciliteiten worden nu gevonden door heel Scherpenzeel en omstreken. Ledenaantal groeit weer!' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Beauty & Style', rating: 5, text: 'Sinds de marketing komen klanten uit Scherpenzeel-Zuid én de nieuwe wijken. Agenda zit helemaal vol.' },
    { name: 'Autoschadeherstel Vallei', rating: 5, text: 'Door onze ligging op de grens Gelderland-Utrecht krijgen we nu klanten uit beide provincies. SEO werkt perfect!' },
    { name: 'Restaurant De Luxe', rating: 4.5, text: 'Als restaurant aan de Stationsweg profiteren we nu van forensen. Lunch omzet verdubbeld in 3 maanden.' },
    { name: 'Makelaardij Scherpenzeel Woningmakelaars', rating: 5, text: 'Voor woningen in Scherpenzeel worden we nu als eerste gevonden. Meer opdrachten uit eigen gemeente.' },
    { name: 'Dierenspeciaalzaak Het Huisdier', rating: 5, text: 'Klanten uit de agrarische omgeving vinden ons nu voor voer en benodigdheden. Omzet flink gestegen.' },
    { name: 'Fysiotherapie De Markt', rating: 4.5, text: 'Centrale ligging aan de Markt wordt nu online perfect uitgespeeld. Veel nieuwe cliënten uit dorpskern.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Scherpenzeel | Marketing Bureau Gelderse Vallei | Online Groei</title>
        <meta
          name="description"
          content="SEO Specialist Scherpenzeel voor meer klanten uit de Gelderse Vallei. Bereik 10.000+ inwoners op de grens van Gelderland en Utrecht. Lokale marketing die werkt."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/scherpenzeel" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Groeien in de Gelderse Vallei?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">SEO & Marketing Scherpenzeel</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Scherpenzeel: strategisch grensdorp met 10.000 inwoners tussen Gelderland en Utrecht.</strong><br />
              Met zijn agrarische karakter, groeiende wijk Akkerwinde en centrale ligging in de Gelderse Vallei biedt Scherpenzeel unieke kansen. Als <b>SEO specialist in Scherpenzeel</b> ken ik de lokale dynamiek van dit grensdorp. Van het historische centrum rond de Grote Kerk tot moderne bedrijventerrein Oosteinde - ik zorg dat uw bedrijf optimaal gevonden wordt.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik 10.000+ inwoners van Scherpenzeel</li>
              <li>✓ Zichtbaar in hele Gelderse Vallei regio</li>
              <li>✓ Trek klanten uit Woudenberg & Renswoude</li>
              <li>✓ <b>Marketing Scherpenzeel</b> voor agrarisch & MKB</li>
              <li>✓ Profiteer van groei nieuwbouwwijk Akkerwinde</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Gratis Scherpenzeel Analyse <span>→</span>
              </Button>
              <Button variant="secondary">
                Bekijk Vallei Successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Marketing specialist voor Scherpenzeel & Gelderse Vallei</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct bereikbaar: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Scherpenzeel - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Scherpenzeel" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing Bureau Scherpenzeel: Grenzeloos Groeien"
          subtitle="Optimaal bereik in de Gelderse Vallei"
          features={[
            {
              badge: "Vallei SEO",
              title: "Scherpenzeel Dominantie",
              description: "Word gevonden door inwoners van Scherpenzeel én de hele Gelderse Vallei. Perfect voor bedrijven die willen groeien over provinciegrenzen heen.",
              visualTitle: "#1 in Scherpenzeel",
              visualSubtitle: "Vallei bereik",
              image: masterSeoImage
            },
            {
              badge: "Grensregio Ads",
              title: "Google Ads Gelderland-Utrecht",
              description: "Unieke positie op provinciegrens optimaal benutten. Target klanten uit Scherpenzeel, Woudenberg, Renswoude en Barneveld tegelijk.",
              visualTitle: "2 Provincies",
              visualSubtitle: "Dubbel bereik",
              image: keywordResearchImage
            },
            {
              badge: "Lokaal & Modern",
              title: "Scherpenzeel Websites",
              description: "Websites die passen bij het karakter van Scherpenzeel: agrarische roots met moderne ambities. Perfect voor lokale binding én regionale groei.",
              visualTitle: "Vallei Design",
              visualSubtitle: "Lokaal succes",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Scherpenzeel ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme vallei marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Online Marketing voor <span className="bg-[#F7D8FA] px-2 rounded italic">Scherpenzeel & Gelderse Vallei</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van historisch centrum tot bedrijventerrein Oosteinde - bereik heel Scherpenzeel online.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Scherpenzeel */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Scherpenzeel Expert</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten in Scherpenzeel en de Gelderse Vallei. Perfect voor lokale bedrijven met regionale ambities.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top rankings "bedrijf Scherpenzeel"</li>
                  <li>✓ Gelderse Vallei zichtbaarheid</li>
                  <li>✓ Google Mijn Bedrijf optimaal</li>
                  <li>✓ Lokale Scherpenzeel reviews</li>
                </ul>
              </div>
              {/* Google Ads */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in de Vallei
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Gelderse Vallei</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct klanten uit Scherpenzeel en omliggende gemeenten. Optimaal profiteren van grenspositie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Postcode 3925 targeting</li>
                  <li>✓ Gelderland-Utrecht bereik</li>
                  <li>✓ Agrarische sector focus</li>
                  <li>✓ Akkerwinde wijk campagnes</li>
                </ul>
              </div>
              {/* Websites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites Scherpenzeel</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites met Scherpenzeel DNA. Perfect voor bedrijven die lokaal én regionaal willen groeien.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Scherpenzeel identiteit</li>
                  <li>✓ Vallei ondernemers focus</li>
                  <li>✓ Mobiel voor agrarisch</li>
                  <li>✓ Snelle conversie sites</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start vandaag met groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Scherpenzeel</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Of u nu gevestigd bent in het centrum, op bedrijventerrein Oosteinde of in wijk Akkerwinde - ik help u succesvol worden in de hele Gelderse Vallei.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek uw Scherpenzeel marketing strategie vandaag nog.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht voor snel advies over groeien in de Vallei.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Scherpenzeel & Regio</h3>
              <p className="text-gray-600">
                Scherpenzeel • Woudenberg • Renswoude • Barneveld • Veenendaal • Leusden • Maarsbergen • Ede • Amersfoort
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}