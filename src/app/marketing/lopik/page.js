'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingLopik() {
  // Lokale Lopik reviews
  const dutchReviews = [
    { name: 'Agrarisch Bedrijf Lopikerwaard', rating: 5, text: 'Eindelijk gevonden worden door klanten uit heel Utrecht! Onze biologische zuivelproducten bereiken nu consumenten in IJsselstein, Montfoort en zelfs Utrecht stad.' },
    { name: 'Lopik Installatietechniek', rating: 5, text: 'Google Ads heeft ons bedrijf getransformeerd. We krijgen nu opdrachten uit het hele Groene Hart, van Schoonhoven tot Woerden. Geweldige ROI!' },
    { name: 'Zendmast Café Restaurant', rating: 5, text: 'Toeristen die de Gerbrandytoren bezoeken vinden ons nu direct online. Reserveringen zijn verdubbeld sinds de lokale SEO optimalisatie.' },
    { name: 'Bouwbedrijf Van der Wal Lopik', rating: 5, text: 'In de competitieve bouwmarkt van het Groene Hart is zichtbaarheid alles. We staan nu #1 voor "aannemer Lopik" en krijgen grote projecten binnen.' },
    { name: 'Kaasboerderij De Lopikse Weide', rating: 5, text: 'Onze webshop draait fantastisch dankzij de marketing strategie. Klanten uit heel Nederland bestellen nu onze streekproducten online.' },
    { name: 'Fysiotherapie Lopik Centrum', rating: 4.5, text: 'Professionele aanpak met meetbare resultaten. We trekken nu patiënten uit Lopik, Benschop, Polsbroek en omliggende dorpen.' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Lopik Transport & Logistiek', rating: 5, text: 'Als transportbedrijf in het hart van Nederland is online vindbaarheid cruciaal. De B2B campagnes leveren constant nieuwe klanten op.' },
    { name: 'Groene Hart Catering', rating: 5, text: 'Van lokale feesten tot grote bedrijfsevenementen - we worden nu gevonden voor alles. Marketing heeft onze reikwijdte enorm vergroot.' },
    { name: 'Autobedrijf Lopik', rating: 4.5, text: 'Klanten uit IJsselstein, Schoonhoven en Montfoort komen nu naar ons voor onderhoud. De lokale campagnes werken uitstekend.' },
    { name: 'Lopikse Streekwinkel', rating: 5, text: 'Toeristen die de Gerbrandytoren bezoeken vinden onze winkel nu online. Verkoop van streekproducten is met 150% gestegen!' },
    { name: 'Kinderdagverblijf Het Groene Hartje', rating: 5, text: 'Wachtlijst is nu vol dankzij betere online zichtbaarheid. Ouders uit heel Lopik en omgeving weten ons te vinden.' },
    { name: 'Lopik Hoveniers', rating: 5, text: 'We bedienen nu het hele Groene Hart gebied. Van kleine tuinen in Lopik tot grote projecten in Oudewater - de telefoon staat niet stil!' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Lopik | Marketing Bureau Groene Hart - IJsselstein & Montfoort Regio</title>
        <meta
          name="description"
          content="Marketing specialist Lopik met expertise in het Groene Hart. Bereik klanten van IJsselstein tot Schoonhoven. ✓ Lokale SEO ✓ Google Ads ✓ Agrarische & MKB marketing expertise"
        />
        <link rel="canonical" href="https://wwww.samautomation.nl/marketing/lopik" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau Lopik</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Groene Hart Specialist</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Domineer de online markt van Lopik en het hele Groene Hart gebied.</strong><br />
              Met ruim 14.000 inwoners en de iconische Gerbrandytoren als landmark, staat Lopik centraal in het Groene Hart van Nederland. Als <b>marketing specialist voor Lopik bedrijven</b> ken ik de unieke mix van agrarische ondernemingen, MKB-bedrijven en de groeiende toeristische sector. Van de polderwegen tot het centrum - ik zorg dat jouw bedrijf gevonden wordt.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Specialist in Groene Hart marketing (Utrecht provincie)</li>
              <li>✓ Expertise in agrarische & streekproduct promotie</li>
              <li>✓ Bereik klanten van IJsselstein tot Schoonhoven</li>
              <li>✓ Gerbrandytoren toerisme marketing mogelijkheden</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button as="a" href="tel:+31648728828" className="text-sm px-4 py-2">
                Start Groene Hart Campagne <span>→</span>
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Direct beschikbaar
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Expert in marketing voor Groene Hart gemeenten en agrarische sector</p>
            <p className="mt-4 text-sm text-red-600">Snelle vragen? WhatsApp naar +31 6 48728828</p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="Marketing resultaten Lopik - Groene Hart strategie"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* FEATURE SECTIE */}
        <FeatureSection />

        {/* REVIEWS SECTIE */}
        <ReviewSlider reviews={dutchReviews} moreReviews={dutchMoreReviews} />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Diensten <span className="bg-[#F7D8FA] px-2 rounded italic">Lopik & Groene Hart</span>
              </h2>
              <p className="text-lg text-gray-600">
                Specialistische marketing voor bedrijven in Lopik en het Groene Hart gebied
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Agrarische Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Agrarische & Streekmarketing</h3>
                <p className="text-gray-600 mb-6">
                  Specialist in marketing voor boerderijen, streekproducten en agrarische bedrijven in de Lopikerwaard. Bereik consumenten die waarde hechten aan lokale, authentieke producten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Webshops voor streekproducten & zuivel</li>
                  <li>✓ Agro-toerisme promotie</li>
                  <li>✓ B2B landbouw marketing</li>
                  <li>✓ Boerenmarkt & evenement promotie</li>
                </ul>
              </div>
              {/* Lokale Dominantie Lopik */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populairste keuze Lopik MKB
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Groene Hart SEO Dominantie</h3>
                <p className="text-gray-600 mb-6">
                  Word de autoriteit in Lopik en trek klanten uit IJsselstein, Montfoort, Oudewater en Schoonhoven. Perfect voor lokale dienstverleners en MKB-bedrijven.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ #1 rankings "bedrijf Lopik" keywords</li>
                  <li>✓ Google My Business Lopikerwaard optimalisatie</li>
                  <li>✓ Targeting dorpskernen: Benschop, Polsbroek, Jaarsveld</li>
                  <li>✓ Gerbrandytoren toerisme targeting</li>
                </ul>
              </div>
              {/* Regionale B2B Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Utrecht Provincie B2B Bereik</h3>
                <p className="text-gray-600 mb-6">
                  Vanuit Lopik heel Utrecht provincie bedienen? Met de centrale ligging tussen Utrecht, Rotterdam en Gouda is Lopik perfect gepositioneerd voor regionale B2B groei.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ LinkedIn B2B campagnes Utrecht</li>
                  <li>✓ Transport & logistiek marketing</li>
                  <li>✓ Zakelijke dienstverlening promotie</li>
                  <li>✓ Lead generation Groene Hart bedrijven</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE EXPERTISE SECTIE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Waarom Lopik Bedrijven Kiezen voor Lokale Marketing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lopik Kenmerken & Kansen</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>14.000+ inwoners</b> in gemeente met 8 dorpskernen</li>
                  <li>• <b>Gerbrandytoren:</b> 375m hoge zendmast trekt 50.000+ bezoekers/jaar</li>
                  <li>• <b>Groene Hart locatie:</b> Centraal tussen grote steden</li>
                  <li>• <b>Agrarisch karakter:</b> Melkveehouderij & kaasproductie</li>
                  <li>• <b>Lopikerwaard:</b> Uniek polderlandschap met toerisme potentie</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategische Voordelen</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>15 min van IJsselstein:</b> Toegang tot 34.000+ inwoners</li>
                  <li>• <b>20 min van Montfoort:</b> Extra 14.000 potentiële klanten</li>
                  <li>• <b>Streekproducten trend:</b> Groeiende vraag naar lokaal voedsel</li>
                  <li>• <b>Recreatie mogelijkheden:</b> Fietsen, wandelen, watersport op de Lek</li>
                  <li>• <b>Zakelijk potentieel:</b> Centrale ligging voor transport & logistiek</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dorpskernen Marketing Bereik</h3>
              <p className="text-gray-700 mb-4">
                Vanuit Lopik bereiken we effectief alle dorpskernen en buurgemeenten:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                <div>
                  <b>Gemeente Lopik:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Lopik centrum</li>
                    <li>• Benschop</li>
                    <li>• Polsbroek</li>
                    <li>• Jaarsveld</li>
                  </ul>
                </div>
                <div>
                  <b>Noordelijk bereik:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• IJsselstein (15 min)</li>
                    <li>• Montfoort (20 min)</li>
                    <li>• Oudewater (25 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Zuidelijk bereik:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Schoonhoven (15 min)</li>
                    <li>• Vianen (20 min)</li>
                    <li>• Nieuwegein (25 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Regionaal bereik:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Utrecht (35 min)</li>
                    <li>• Woerden (25 min)</li>
                    <li>• Gouda (30 min)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar voor Groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Lopik & Groene Hart?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Of je nu een agrarisch bedrijf, lokale dienstverlener of ambitieuze ondernemer bent - 
              laten we samen jouw online aanwezigheid in het Groene Hart versterken.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel voor Gratis Advies</h3>
                <p className="text-gray-600 mb-4">Bespreek direct jouw mogelijkheden in de Lopik en Groene Hart markt.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Contact</h3>
                <p className="text-gray-600 mb-4">Snel antwoord op jouw vragen over lokale marketing strategieën.</p>
                <a
                  href="https://wa.me/31648728828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  💬 Start WhatsApp Chat
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Vanuit Lopik</h3>
              <p className="text-gray-600">
                Lopik • Benschop • Polsbroek • Jaarsveld • IJsselstein • Montfoort • Oudewater • Schoonhoven • Vianen • Nieuwegein • Woerden
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}