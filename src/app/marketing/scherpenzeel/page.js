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
  // Lokale Scherpenzeel reviews - historisch dorp tussen Gelderland en Utrecht
  const dutchReviews = [
    { name: 'Restaurant De Holevoet', rating: 5, text: 'Als restaurant aan de Dorpsstraat krijgen we nu veel meer gasten uit de hele Gelderse Vallei. Perfect voor ons historische pand!' },
    { name: 'Installatiebedrijf Van Rootselaar', rating: 5, text: 'Vanuit Scherpenzeel bedienen we nu heel Woudenberg en Renswoude. De Google Ads campagne levert constant nieuwe klussen op.' },
    { name: 'Boerderijwinkel De Kleine Barneveldsestraat', rating: 5, text: 'Onze biologische producten worden nu gevonden door mensen uit Barneveld tot Veenendaal. Lokale SEO werkt echt!' },
    { name: 'Kapsalon Marktstraat', rating: 5, text: 'In het centrum van Scherpenzeel is concurrentie groot, maar we staan nu bovenaan. Agenda zit vol met klanten uit het dorp.' },
    { name: 'Fysiotherapie Glashorst', rating: 5, text: 'Voor onze praktijk nabij sportpark De Bree was lokale vindbaarheid cruciaal. Nu krijgen we sporters uit heel Scherpenzeel.' },
    { name: 'Tandartspraktijk Akkerwinde', rating: 4.5, text: 'Dankzij de marketing bereiken we nu ook gezinnen uit de nieuwbouwwijk Akkerwinde. Praktijk groeit gestaag!' },
  ]
  const dutchMoreReviews = [
    { name: 'Autobedrijf Oosteinde', rating: 5, text: 'Vanuit onze locatie aan het Oosteinde bereiken we nu klanten tot in Renswoude. De online strategie werkt perfect!' },
    { name: 'Schoonheidssalon Villa Scherpenzeel', rating: 5, text: 'Sinds de marketing zijn we dé salon voor de welgestelde wijken. Klanten komen zelfs uit Woudenberg naar ons toe.' },
    { name: 'Fietsenhandel De Markt', rating: 4.5, text: 'Als fietsenwinkel op de Markt hebben we nu veel meer aanloop. Vooral e-bikes lopen goed dankzij Google Ads.' },
    { name: 'Notariskantoor Scherpenzeel', rating: 5, text: 'Voor ons kantoor aan de Vijverlaan was professionele uitstraling online cruciaal. Nu krijgen we aanvragen uit de hele regio.' },
    { name: 'Tuinontwerp De Gelderse Vallei', rating: 5, text: 'We ontwerpen tuinen van Scherpenzeel tot Veenendaal. De lokale SEO strategie heeft ons bereik enorm vergroot.' },
    { name: 'Dierenarts Huize Scherpenzeel', rating: 4.5, text: 'Nabij het oude landgoed Huize Scherpenzeel zijn we nu de meest gevonden dierenarts. Perfecte lokale marketing!' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Scherpenzeel | Marketing Bureau & Online Marketing Scherpenzeel</title>
        <meta
          name="description"
          content="SEO Specialist Scherpenzeel nodig? Hét marketing bureau voor Scherpenzeel. Krijg meer klanten met lokale SEO, Google Ads & professionele marketing voor bedrijven uit Scherpenzeel."
        />
        <link rel="canonical" href="https://wwww.niblah.com/marketing/scherpenzeel" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">SEO Specialist Scherpenzeel</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing Scherpenzeel</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Groei jouw bedrijf in het hart van de Gelderse Vallei!</strong><br />
              Met 10.000+ inwoners, gelegen tussen Woudenberg en Barneveld, is Scherpenzeel een strategische locatie voor ondernemers. Als <b>SEO specialist in Scherpenzeel</b> ken ik de lokale markt en help ik bedrijven groeien met gerichte online marketing.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor bedrijven rond de Dorpsstraat en Markt</li>
              <li>✓ Google Ads gericht op Scherpenzeel, Woudenberg & Renswoude</li>
              <li>✓ Bereik klanten uit de Gelderse Vallei</li>
              <li>✓ Specialisatie in MKB, horeca & lokale dienstverleners</li>
              <li>✓ Bekend met de Scherpenzeelse markt sinds 2019</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button as="a" href="tel:+31648728828" className="text-sm px-4 py-2">
                Work with me <span>→</span>
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Available
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Trusted by 100+ businesses to drive their growth</p>
            <p className="mt-4 text-sm text-red-600">Urgent questions? Send me a WhatsApp on +31 6 48728828</p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Scherpenzeel - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* REVIEWS SECTIE */}
        <ReviewSlider 
          customReviews={dutchReviews} 
          customMoreReviews={dutchMoreReviews}
          title="Scherpenzeel groeit online met <span class='bg-[#F7D8FA] px-2 rounded italic'>lokale marketing</span>"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau <span className="bg-[#F7D8FA] px-2 rounded italic">Scherpenzeel</span>
              </h2>
              <p className="text-lg text-gray-600">
                Specialistische marketing diensten voor bedrijven in Scherpenzeel
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lokale SEO Scherpenzeel */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale SEO Scherpenzeel</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden door klanten in Scherpenzeel. Lokale SEO zorgt voor meer zichtbaarheid in Google.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google My Business optimalisatie</li>
                  <li>✓ Lokale zoekwoorden</li>
                  <li>✓ Online reviews management</li>
                  <li>✓ Lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Scherpenzeel */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest gekozen door Scherpenzeel
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Scherpenzeel</h3>
                <p className="text-gray-600 mb-6">
                  Snel meer klanten uit Scherpenzeel? Met Google Ads bereik je direct lokale aanvragen en leads.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale campagnes</li>
                  <li>✓ Geografische targeting</li>
                  <li>✓ Conversie optimalisatie</li>
                  <li>✓ Maandelijkse rapportages</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Moderne websites & online marketing die conversiegericht zijn voor de Scherpenzeelse markt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Professioneel ontwerp</li>
                  <li>✓ Lokale focus</li>
                  <li>✓ Snel & mobielvriendelijk</li>
                  <li>✓ Gericht op meer omzet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Scherpenzeel</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek wat mijn marketing bureau voor jouw bedrijf in Scherpenzeel kan doen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Bellen</h3>
                <p className="text-gray-600 mb-4">Klaar om te starten? Bel mij als Scherpenzeel SEO specialist voor een gratis gesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Direct</h3>
                <p className="text-gray-600 mb-4">Liever WhatsApp? Stuur direct een bericht – snel reactie.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in heel Scherpenzeel & Gelderse Vallei</h3>
              <p className="text-gray-600 mb-2">
                <strong>Scherpenzeel wijken:</strong> Centrum • Akkerwinde • Oosteinde • De Nieuwe Koepel • Glashorst
              </p>
              <p className="text-gray-600">
                <strong>Regio:</strong> Woudenberg • Renswoude • Barneveld • Veenendaal • Leusden • Maarsbergen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
