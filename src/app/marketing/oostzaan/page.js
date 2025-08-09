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

export default function MarketingOostzaan() {
  // Lokale Oostzaan reviews - waterrijk dorp nabij Amsterdam
  const dutchReviews = [
    { name: 'Watersportwinkel De Zaan', rating: 5, text: 'Onze watersportwinkel aan de Kerkbuurt wordt nu perfect gevonden door bootliefhebbers uit heel Noord-Holland. Fantastische lokale SEO resultaten!' },
    { name: 'Restaurant Het Wapen van Oostzaan', rating: 5, text: 'Sinds de samenwerking krijgen we veel meer Amsterdammers die ons historische restaurant bezoeken. Top posities voor "restaurant Oostzaan"!' },
    { name: 'Aannemersbedrijf Van Dijk', rating: 5, text: 'Als lokaal bouwbedrijf in Oostzaan krijgen we nu opdrachten uit heel Zaanstreek-Waterland. De Google Ads campagne werkt uitstekend.' },
    { name: 'Kapsalon Zuideinde', rating: 4.5, text: 'Onze salon aan het Zuideinde heeft dankzij de marketing een vaste klantenkring opgebouwd. Ook veel nieuwe klanten uit Landsmeer!' },
    { name: 'Fietsenmaker Oostzaan Noord', rating: 5, text: 'Perfect bereik in het hele dorp en omliggende plaatsen. We staan nu bovenaan voor "fietsenmaker Oostzaan" en "fietsreparatie Zaandam Noord".' },
    { name: 'Zeilschool De Twiske', rating: 5, text: 'Onze zeilschool bij recreatiegebied Het Twiske trekt nu cursisten uit heel Amsterdam-Noord. De online vindbaarheid is geweldig verbeterd!' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Tuincentrum De Groene Polder', rating: 5, text: 'Als tuincentrum tussen Oostzaan en Oostzaanerveld bereiken we nu klanten uit de hele regio. Structurele groei in bezoekers!' },
    { name: 'Dierenarts Kolkweg', rating: 4.5, text: 'Onze praktijk aan de Kolkweg krijgt nu aanmeldingen uit Oostzaan, Landsmeer en Amsterdam-Noord. Perfect lokaal bereik!' },
    { name: 'Bakkerij De Oude Kerk', rating: 5, text: 'Sinds we online beter vindbaar zijn, komen klanten uit heel Waterland voor ons ambachtelijk brood. Game changer voor onze bakkerij!' },
    { name: 'Sportschool Fit Oostzaan', rating: 5, text: 'Met onze ligging vlakbij de A10 trekken we nu ook sporters uit Amsterdam. De marketing heeft ons bereik enorm vergroot.' },
    { name: 'Installateur Waterland Service', rating: 4.5, text: 'Voor spoedklussen in Oostzaan en omgeving worden we nu als eerste gevonden. Agenda zit vol dankzij goede online vindbaarheid!' },
    { name: 'Kinderdagverblijf De Speeltuin', rating: 5, text: 'Ons kinderdagverblijf heeft nu een wachtlijst! Ouders uit Oostzaan en Amsterdam-Noord vinden ons perfect online.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Oostzaan | Marketing Bureau Oostzaan | Waterland</title>
        <meta
          name="description"
          content="SEO Specialist Oostzaan ✓ Lokale vindbaarheid in Oostzaan, Zaanstreek-Waterland ✓ Meer klanten uit Amsterdam-Noord ✓ Google Ads & websites ✓ Bel direct!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/oostzaan" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Waterrijk Oostzaan: waar Noord-Holland onderneemt aan de Zaan</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">10.000 inwoners, grenzeloze mogelijkheden</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Oostzaan: authentiek waterdorp op steenworp afstand van Amsterdam.</strong><br />
              Met zijn strategische ligging tussen Amsterdam-Noord (10 minuten), Zaandam (5 minuten) en recreatiegebied Het Twiske, biedt Oostzaan het beste van twee werelden. Dit historische lint dorp langs de Zaan - met kernen als Kerkbuurt, Zuideinde en Oostzaanerveld - combineert landelijke rust met stedelijke kansen. Als <b>SEO specialist Oostzaan</b> positioneer ik jouw bedrijf perfect tussen de 500+ lokale ondernemers die profiteren van de nabijheid tot Amsterdam.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Oostzaan: dominant in Zaanstreek-Waterland</li>
              <li>✓ Google Ads: bereik Amsterdam-Noord en Zaanstad</li>
              <li>✓ Profiteer van bezoekers recreatiegebied Het Twiske</li>
              <li>✓ <b>Marketing bureau Oostzaan</b> met lokale expertise</li>
              <li>✓ Websites die Oostzaners en Amsterdammers converteren</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start groei in Oostzaan <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk lokale successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Oostzaan, Landsmeer & Amsterdam-Noord</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct advies? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Oostzaan - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Oostzaan" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Online groeien in Oostzaan met bewezen strategieën"
          subtitle="Van Kerkbuurt tot Zuideinde, overal vindbaar"
          features={[
            {
              badge: "SEO Oostzaan",
              title: "Lokale SEO Dominantie",
              description: "Met slimme SEO word je gevonden door inwoners van Oostzaan, bezoekers van Het Twiske én Amsterdammers die het rustiger zoeken.",
              visualTitle: "Zaanstreek-Waterland",
              visualSubtitle: "Top posities",
              image: masterSeoImage
            },
            {
              badge: "Google Ads Waterland",
              title: "Gerichte Advertenties",
              description: "Bereik klanten uit Oostzaan, Landsmeer, Amsterdam-Noord en heel Zaanstad. Jouw advertenties op het juiste moment bij de juiste doelgroep.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Meetbare groei",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Websites die Verkopen",
              description: "Een moderne website die de landelijke charme van Oostzaan combineert met professionele uitstraling. Perfect voor lokale én regionale klanten.",
              visualTitle: "Meer omzet",
              visualSubtitle: "Oostzaan online",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Oostzaanse ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Oostzaan</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van watersportbedrijf tot lokale dienstverlener – ik help je groeien in Zaanstreek-Waterland.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Oostzaan */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Oostzaan</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden door inwoners van Oostzaan, recreanten bij Het Twiske en Amsterdammers die de rust zoeken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top posities in Oostzaan & Waterland</li>
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Lokale zoekwoorden Kerkbuurt & Zuideinde</li>
                  <li>✓ Reviews van echte Oostzaners</li>
                </ul>
              </div>
              {/* Google Ads Oostzaan */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Zaanstreek
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Waterland</h3>
                <p className="text-gray-600 mb-6">
                  Adverteer slim in Oostzaan, Landsmeer, Amsterdam-Noord en heel Zaanstad voor maximaal bereik.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Bereik Amsterdam-Noord (200.000+ inwoners)</li>
                  <li>✓ Target bezoekers Het Twiske</li>
                  <li>✓ Lokale campagnes Zaanstreek</li>
                  <li>✓ Direct meetbare resultaten</li>
                </ul>
              </div>
              {/* Website & Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Van website tot social media - alles voor jouw online succes in Oostzaan en omgeving.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Moderne, snelle websites</li>
                  <li>✓ Social media voor Waterland</li>
                  <li>✓ E-mail marketing campagnes</li>
                  <li>✓ Complete online strategie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om te groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Oostzaan</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Laat je bedrijf opvallen tussen Amsterdam en Zaandam – gratis adviesgesprek binnen 24 uur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek direct jouw groeikansen in Oostzaan en omgeving.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Stuur een berichtje voor snel antwoord op jouw vragen.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Oostzaan & Zaanstreek-Waterland</h3>
              <p className="text-gray-600">
                Kerkbuurt • Zuideinde • Oostzaanerveld • De Heul • De Haal • Achterdichting • Plus bereik in: Landsmeer • Amsterdam-Noord • Zaandam-Noord • Het Twiske • Watergang • Broek in Waterland • Ilpendam • Purmerend
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}