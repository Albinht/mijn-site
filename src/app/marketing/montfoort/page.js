'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingMontfoort() {
  // Lokale Montfoort reviews
  const dutchReviews = [
    { name: 'Historisch Montfoort BV', rating: 5, text: 'Als organisatie voor stadspromotie hebben we geweldige resultaten geboekt. Toeristen vinden nu onze middeleeuwse stadswandelingen via Google!' },
    { name: 'Montfoort Installatiewerken', rating: 5, text: 'Google Ads campagne levert constant nieuwe klanten op uit Montfoort, Linschoten, Oudewater en IJsselstein. Investering meer dan waard!' },
    { name: 'Grand Café De Vaart', rating: 5, text: 'Ligging aan de Hollandse IJssel wordt nu perfect benut. Watersporters en fietsers vinden ons terras direct online. Omzet 60% gestegen!' },
    { name: 'Montfoortse Meubelmakerij', rating: 5, text: 'Van lokaal ambacht naar regionale speler. We krijgen nu custom opdrachten uit heel Utrecht dankzij de online zichtbaarheid.' },
    { name: 'Fysiotherapie Montfoort Centrum', rating: 5, text: 'Praktijk zit vol dankzij lokale SEO. Patiënten uit Montfoort, Linschoten en Blokland weten ons perfect te vinden.' },
    { name: 'Kaashandel Hollandse IJssel', rating: 4.5, text: 'Toeristen op weg naar Oudewater kaasmarkt stoppen nu ook bij ons. Marketing strategie heeft onze positie enorm versterkt.' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Montfoort Transport & Logistiek', rating: 5, text: 'Centrale ligging tussen Utrecht en Rotterdam optimaal benut met B2B marketing. Nieuwe contracten met grote bedrijven binnengehaald!' },
    { name: 'Sportschool FitMontfoort', rating: 5, text: 'Van 150 naar 400 leden in een jaar tijd. Lokale campagnes en social media strategie werken perfect samen.' },
    { name: 'Bloemenwinkel De IJsselroos', rating: 5, text: 'Online bestellingen zijn verdrievoudigd. We bezorgen nu in heel Montfoort, Linschoten en omliggende dorpen.' },
    { name: 'Montfoort Dakwerken', rating: 5, text: 'Als dakdekker in historische stad is specialisatie belangrijk. We worden nu gevonden voor monumentaal dakwerk in heel Utrecht.' },
    { name: 'Restaurant De Oude Sluis', rating: 4.5, text: 'Watertoeristen van de Hollandse IJssel reserveren nu vooraf online. Weekend volledig volgeboekt dankzij betere vindbaarheid.' },
    { name: 'Kinderdagverblijf IJsselkids', rating: 5, text: 'Wachtlijst is nu gevuld voor komende 2 jaar. Jonge gezinnen uit Montfoort en Linschoten vinden ons direct via Google.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Montfoort | Marketing Bureau Hollandse IJssel - Historische Stad Marketing</title>
        <meta
          name="description"
          content="Marketing specialist Montfoort met expertise in historische stadsmarketing. Bereik klanten langs de Hollandse IJssel van IJsselstein tot Oudewater. ✓ Lokale SEO ✓ Toerisme marketing ✓ MKB groei"
        />
        <link rel="canonical" href="https://wwww.samautomation.nl/marketing/montfoort" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau Montfoort</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">IJsselstreek Expert</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Versterk jouw positie in historisch Montfoort en de Hollandse IJssel regio.</strong><br />
              Met 14.000 inwoners, middeleeuwse stadsrechten sinds 1329, en een strategische ligging aan de Hollandse IJssel tussen Utrecht en Rotterdam, is Montfoort een unieke markt. Als <b>marketing specialist voor Montfoort</b> begrijp ik de perfecte mix van historisch karakter, waterrecreatie mogelijkheden en moderne ondernemerschap die deze stad kenmerkt.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Expert in historische stadsmarketing & erfgoed toerisme</li>
              <li>✓ Hollandse IJssel waterrecreatie marketing specialist</li>
              <li>✓ Bereik klanten van IJsselstein tot Oudewater</li>
              <li>✓ Linschoten & Blokland dorpskernen expertise</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button as="a" href="tel:+31648728828" className="text-sm px-4 py-2">
                Versterk Jouw Positie <span>→</span>
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Direct beschikbaar
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Specialist in marketing voor historische steden Utrecht provincie</p>
            <p className="mt-4 text-sm text-red-600">Urgente vragen? WhatsApp naar +31 6 48728828</p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="Marketing resultaten Montfoort - IJsselstreek strategie"
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
                Marketing Strategieën <span className="bg-[#F7D8FA] px-2 rounded italic">Montfoort & IJsselstreek</span>
              </h2>
              <p className="text-lg text-gray-600">
                Doelgerichte marketing voor historisch Montfoort en de Hollandse IJssel regio
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Historisch & Toerisme Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Historisch Toerisme Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Benut Montfoort's rijke geschiedenis sinds 1329. Trek cultuurtoeristen, waterrecreanten en fietsers langs de Hollandse IJssel naar jouw bedrijf.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Middeleeuwse stad positionering</li>
                  <li>✓ IJsselstreek watertoerisme targeting</li>
                  <li>✓ Historische wandelroute promotie</li>
                  <li>✓ Oudewater kaasmarkt connectie</li>
                </ul>
              </div>
              {/* Lokale Dominantie Montfoort */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Favoriet bij Montfoort MKB
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale IJsselstreek Dominantie</h3>
                <p className="text-gray-600 mb-6">
                  Domineer de markt van Montfoort tot Oudewater. Bereik klanten in Linschoten, Blokland, IJsselstein en heel de IJsselstreek effectief.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ #1 rankings "bedrijf Montfoort" zoektermen</li>
                  <li>✓ Google My Business IJsselstreek optimalisatie</li>
                  <li>✓ Linschoten & Blokland dorpsbereik</li>
                  <li>✓ Hollandse IJssel regio targeting</li>
                </ul>
              </div>
              {/* B2B & Logistiek Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B & Logistiek Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Montfoort's centrale ligging tussen Utrecht (20km) en Rotterdam (45km) is perfect voor transport en B2B diensten. Bereik het zakelijke hart van Nederland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Transport corridor A12/N228 marketing</li>
                  <li>✓ B2B LinkedIn campagnes Utrecht</li>
                  <li>✓ Logistieke diensten promotie</li>
                  <li>✓ Zakelijke netwerk IJsselstein-Montfoort</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE EXPERTISE SECTIE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Montfoort: Historische Stad met Moderne Kansen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Montfoort Kenmerken</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>14.000 inwoners</b> inclusief Linschoten & Blokland</li>
                  <li>• <b>Stadsrechten sinds 1329:</b> Rijke geschiedenis</li>
                  <li>• <b>Hollandse IJssel:</b> 30km vaarroute Utrecht-Rotterdam</li>
                  <li>• <b>3 kernen:</b> Montfoort stad, Linschoten, Blokland</li>
                  <li>• <b>Kasteel Montfoort:</b> Historische trekpleister</li>
                  <li>• <b>N228/N204 kruispunt:</b> Uitstekende bereikbaarheid</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Potentieel</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>Waterrecreatie:</b> Jachthavens, terrassen aan water</li>
                  <li>• <b>Historisch toerisme:</b> Stadswandelingen, monumenten</li>
                  <li>• <b>Linschoten Haven:</b> Authentiek dorpskarakter</li>
                  <li>• <b>Bedrijventerreinen:</b> Heeswijk, IJsselveld actief</li>
                  <li>• <b>Evenementen:</b> Paardenmarkt, Linschotense Dag</li>
                  <li>• <b>Groene buffer:</b> Tussen stedelijk gebied en Groene Hart</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategisch Bereik Vanuit Montfoort</h3>
              <p className="text-gray-700 mb-4">
                Montfoort ligt perfect gepositioneerd in het hart van de Randstad:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                <div>
                  <b>Directe kernen:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Montfoort centrum</li>
                    <li>• Linschoten (3 min)</li>
                    <li>• Blokland (5 min)</li>
                    <li>• Willeskop (7 min)</li>
                  </ul>
                </div>
                <div>
                  <b>IJsselstreek steden:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• IJsselstein (10 min)</li>
                    <li>• Oudewater (10 min)</li>
                    <li>• Lopik (15 min)</li>
                    <li>• Benschop (12 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Grote steden:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Utrecht (20 min)</li>
                    <li>• Woerden (15 min)</li>
                    <li>• Gouda (20 min)</li>
                    <li>• Nieuwegein (15 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Zakelijk bereik:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Amsterdam (35 min)</li>
                    <li>• Rotterdam (45 min)</li>
                    <li>• Den Haag (40 min)</li>
                    <li>• Schiphol (30 min)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Linschoten: Parel van Montfoort</h3>
              <p className="text-gray-700 mb-4">
                Het pittoreske Linschoten (4.000 inwoners) verdient speciale aandacht in marketing:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <b>Historische haven:</b> Perfecte horeca locatie aan het water</li>
                <li>• <b>Linschotense kaas:</b> Regionaal streekproduct met potentie</li>
                <li>• <b>Johannes de Doperkerk:</b> Monumentale trekpleister</li>
                <li>• <b>Linschotense Dag:</b> Jaarlijks 10.000+ bezoekers</li>
                <li>• <b>Authentiek dorpsgevoel:</b> Aantrekkelijk voor toerisme</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar voor Groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Montfoort & IJsselstreek?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Of je nu een historisch café aan de IJssel runt, een modern bedrijf op Heeswijk hebt, 
              of vanuit Linschoten opereert - laten we samen jouw online succes in de IJsselstreek bouwen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Adviesgesprek</h3>
                <p className="text-gray-600 mb-4">Bespreek jouw groeikansen in Montfoort en de IJsselstreek regio.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Contact</h3>
                <p className="text-gray-600 mb-4">Snelle vragen? Stuur een WhatsApp voor direct antwoord.</p>
                <a
                  href="https://wa.me/31648728828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  💬 WhatsApp Direct
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Montfoort & Omstreken</h3>
              <p className="text-gray-600">
                Montfoort • Linschoten • Blokland • IJsselstein • Oudewater • Lopik • Benschop • Woerden • Utrecht • Nieuwegein • Gouda
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}