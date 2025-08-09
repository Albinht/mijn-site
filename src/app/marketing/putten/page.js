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

export default function MarketingPutten() {
  // Lokale Putten reviews - historisch dorp op de Veluwe
  const dutchReviews = [
    { name: 'Restaurant Oude Kerk', rating: 5, text: 'Ons restaurant bij de historische Oude Kerk krijgt nu veel meer toeristen. Perfect voor onze locatie in het centrum van Putten!' },
    { name: 'Garage Strand Nulde', rating: 5, text: 'Door onze ligging bij recreatiegebied Strand Nulde krijgen we nu veel meer klanten. Google Ads werkt perfect voor seizoenswerk!' },
    { name: 'Kapsalon Putter Eng', rating: 5, text: 'In de wijk Putter Eng hebben we nu de beste online vindbaarheid. Agenda zit vol met klanten uit heel Putten.' },
    { name: 'Fysiotherapie Sportpark', rating: 5, text: 'Onze praktijk bij Sportpark Putter Eng wordt nu gevonden door sporters uit heel Noord-Veluwe. Top resultaten!' },
    { name: 'Installateur Husselerveld', rating: 5, text: 'Voor spoedklussen in Husselerveld en Bijsteren worden we nu als eerste gevonden. Investering betaalt zich dubbel terug.' },
    { name: 'Tandarts Centrum Putten', rating: 4.5, text: 'Onze praktijk aan de Voorthuizerstraat groeit gestaag. We krijgen nu ook patiënten uit Ermelo en Nijkerk.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Arler Eng', rating: 5, text: 'Vanuit bedrijventerrein Arler Eng bereiken we nu bouwprojecten in heel Noord-Veluwe. Perfecte B2B strategie!' },
    { name: 'Beauty Salon Waterfront', rating: 5, text: 'Bij de jachthaven Putten hebben we een unieke locatie. Nu worden we ook online perfect gevonden!' },
    { name: 'Fietsverhuur Veluwe Route', rating: 4.5, text: 'Als fietsverhuur langs de Veluwe fietsroutes krijgen we nu veel meer toeristen. Vooral in het weekend druk!' },
    { name: 'Notariskantoor Putten', rating: 5, text: 'Voor ons kantoor aan de Kerkstraat was professionele uitstraling online cruciaal. Nu structureel nieuwe cliënten.' },
    { name: 'Tuincentrum Sprielderweg', rating: 5, text: 'Langs de Sprielderweg richting Garderen trekken we nu klanten uit de hele regio. Seizoensacties lopen perfect!' },
    { name: 'Dierenarts Veluwe Noord', rating: 4.5, text: 'Onze kliniek wordt nu gevonden door heel Putten en omliggende dorpen. De lokale SEO werkt uitstekend!' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Putten | Marketing Bureau & Online Marketing Putten</title>
        <meta
          name="description"
          content="SEO Specialist Putten nodig? Hét marketing bureau voor Putten. Krijg meer klanten met lokale SEO, Google Ads & professionele marketing voor bedrijven uit Putten."
        />
        <link rel="canonical" href="https://wwww.niblah.com/marketing/putten" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">SEO Specialist Putten</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing Putten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Groei jouw bedrijf in het hart van de Veluwe!</strong><br />
              Met 25.000+ inwoners, gelegen tussen bossen en water, is Putten een perfecte mix van natuur, recreatie en ondernemerschap. Als <b>SEO specialist in Putten</b> ken ik de lokale markt - van toeristische bedrijven tot ambachtelijke ondernemers.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO voor bedrijven rond het centrum en Strand Nulde</li>
              <li>✓ Google Ads gericht op Putten, Ermelo & Nijkerk</li>
              <li>✓ Specialisatie in recreatie, toerisme & lokale dienstverleners</li>
              <li>✓ Bereik Veluwe toeristen en lokale inwoners</li>
              <li>✓ Bekend met de Puttense markt sinds 2020</li>
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
                alt="SEO resultaten Putten - Marketing bureau"
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
          title="Putten groeit online met <span class='bg-[#F7D8FA] px-2 rounded italic'>lokale marketing</span>"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau <span className="bg-[#F7D8FA] px-2 rounded italic">Putten</span>
              </h2>
              <p className="text-lg text-gray-600">
                Specialistische marketing diensten voor bedrijven in Putten
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lokale SEO Putten */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale SEO Putten</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden door klanten in Putten. Lokale SEO zorgt voor meer zichtbaarheid in Google.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google My Business optimalisatie</li>
                  <li>✓ Lokale zoekwoorden</li>
                  <li>✓ Online reviews management</li>
                  <li>✓ Lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Putten */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest gekozen door Putten
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Putten</h3>
                <p className="text-gray-600 mb-6">
                  Snel meer klanten uit Putten? Met Google Ads bereik je direct lokale aanvragen en leads.
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
                  Moderne websites & online marketing die conversiegericht zijn voor de Puttense markt.
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
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Putten</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek wat mijn marketing bureau voor jouw bedrijf in Putten kan doen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Bellen</h3>
                <p className="text-gray-600 mb-4">Klaar om te starten? Bel mij als Putten SEO specialist voor een gratis gesprek.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Putten &amp; Regio</h3>
              <p className="text-gray-600">
                Nijkerk • Zwartebroek • Barneveld • Amersfoort • Leusden • Ede • Bennekom • Lunteren
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
