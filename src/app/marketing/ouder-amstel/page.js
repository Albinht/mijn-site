'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingOuderAmstel() {
  // Lokale Ouder-Amstel reviews
  const dutchReviews = [
    { name: 'Villa Interieur Duivendrecht', rating: 5, text: 'Fantastische SEO resultaten! We domineren nu de zoekresultaten voor luxe interieur in Ouder-Amstel en Amsterdam Zuidoost. De investering heeft zich binnen 3 maanden terugverdiend.' },
    { name: 'Amstel Business Park', rating: 5, text: 'Onze kantoorruimtes zijn constant bezet dankzij de lokale marketing strategie. We trekken nu ondernemers uit heel Amsterdam en Diemen aan.' },
    { name: 'Restaurant Aan de Amstel', rating: 5, text: 'Van onzichtbaar naar volledig volgeboekt! Vooral de rijke inwoners van Ouderkerk weten ons nu te vinden voor exclusieve diners.' },
    { name: 'Duivendrecht Tandartsen', rating: 5, text: 'Google Ads campagne presteert uitstekend. We krijgen hoogwaardige patiënten uit Ouder-Amstel, Bijlmer en Amstelveen. ROI van 400%!' },
    { name: 'Makelaardij Ouderkerk Premium', rating: 5, text: 'In deze competitieve markt is online zichtbaarheid cruciaal. We staan nu #1 voor "makelaar Ouder-Amstel" en verkopen huizen sneller dan ooit.' },
    { name: 'Wellness Center Amstelzijde', rating: 4.5, text: 'Professionele aanpak die werkt! Onze spa trekt nu welgestelde klanten uit het hele Amstel-gebied. Omzet met 65% gestegen.' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Ouder-Amstel Bouwadvies', rating: 5, text: 'Voor een gemeente met zoveel villa projecten is goede online marketing essentieel. We krijgen nu aanvragen voor miljoenenprojecten binnen.' },
    { name: 'Exclusive Cars Duivendrecht', rating: 5, text: 'Onze showroom voor luxe auto\'s wordt perfect gevonden door de juiste doelgroep. Marketing strategie sluit naadloos aan op onze premium klanten.' },
    { name: 'Golfclub Ouderkerk', rating: 5, text: 'Ledenaantal significant gegroeid dankzij gerichte campagnes. We bereiken nu de zakelijke elite uit Amsterdam Zuidoost en Amstelveen.' },
    { name: 'Privékliniek Ouder-Amstel', rating: 5, text: 'Discrete en effectieve marketing voor onze exclusieve medische diensten. Perfecte targeting op welgestelde inwoners van de gemeente.' },
    { name: 'Amstel Marina Services', rating: 4.5, text: 'Bootbezitters uit heel Noord-Holland vinden ons nu makkelijk. De lokale SEO heeft onze jachthaven op de kaart gezet.' },
    { name: 'Ouderkerk Antiek & Kunst', rating: 5, text: 'Internationale collectors vinden onze galerie nu via Google. Verkopen zijn verdrievoudigd sinds de website optimalisatie.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Ouder-Amstel | Premium Marketing Bureau voor Duivendrecht & Ouderkerk</title>
        <meta
          name="description"
          content="Exclusieve marketing specialist voor Ouder-Amstel bedrijven. Bereik welgestelde klanten in Duivendrecht, Ouderkerk aan de Amstel en Amsterdam Zuidoost. ✓ Luxe markt expertise ✓ Premium resultaten"
        />
        <link rel="canonical" href="https://wwww.samautomation.nl/marketing/ouder-amstel" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Specialist Ouder-Amstel</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Premium Online Strategie</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Bereik de welgestelde markt van Ouder-Amstel, Duivendrecht en Ouderkerk aan de Amstel.</strong><br />
              Met 8.500 inwoners en een gemiddeld inkomen ver boven het landelijk gemiddelde, vraagt Ouder-Amstel om een <b>premium marketing aanpak</b>. Als specialist in deze exclusieve gemeente verbind ik jouw bedrijf met de juiste klanten - van de villa's in Ouderkerk tot de bedrijven op de Amstel Business Corridor.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Expertise in luxury marketing voor welgestelde doelgroepen</li>
              <li>✓ Lokale kennis van Duivendrecht, Ouderkerk en de Amstelscheg</li>
              <li>✓ Strategische positionering tussen Amsterdam Zuidoost en Amstelveen</li>
              <li>✓ Bewezen resultaten in de premium segment markt</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button as="a" href="tel:+31648728828" className="text-sm px-4 py-2">
                Start Premium Campagne <span>→</span>
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Beschikbaar voor intake
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Specialist in marketing voor welgestelde gemeenten in Noord-Holland</p>
            <p className="mt-4 text-sm text-red-600">Direct contact? WhatsApp naar +31 6 48728828</p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="Marketing resultaten Ouder-Amstel - Premium strategie"
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
                Premium Marketing voor <span className="bg-[#F7D8FA] px-2 rounded italic">Ouder-Amstel</span>
              </h2>
              <p className="text-lg text-gray-600">
                Exclusieve marketing diensten afgestemd op de welgestelde gemeente Ouder-Amstel
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Luxury Brand Positioning */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Brand Positioning</h3>
                <p className="text-gray-600 mb-6">
                  Positioneer jouw merk in de premium markt van Ouder-Amstel. Perfect voor bedrijven die de villa-eigenaren van Ouderkerk en zakelijke elite van Duivendrecht willen bereiken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ High-end website design & branding</li>
                  <li>✓ Targeting welgestelde postcodes 1191-1184</li>
                  <li>✓ Premium Google Ads met hoge conversie</li>
                  <li>✓ Exclusieve content strategie</li>
                </ul>
              </div>
              {/* Lokale Dominantie Amstel-gebied */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest effectief voor Ouder-Amstel
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale Dominantie Strategie</h3>
                <p className="text-gray-600 mb-6">
                  Domineer de zoekresultaten in Ouder-Amstel, van de Amstel Business Corridor tot het historische Ouderkerk. Bereik klanten uit Amsterdam Zuidoost, Diemen en Amstelveen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ #1 rankings voor Duivendrecht & Ouderkerk</li>
                  <li>✓ Google My Business optimalisatie Amstel-zone</li>
                  <li>✓ Geo-targeting Amsterdam Zuidoost rijke wijken</li>
                  <li>✓ Reviews van premium klanten</li>
                </ul>
              </div>
              {/* B2B Marketing Amstel Business */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Amstel Business Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Bereik de 1000+ bedrijven in de Amstel Business Corridor en Arena gebied. Ideaal voor B2B dienstverleners die de zakelijke markt van Ouder-Amstel willen penetreren.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ LinkedIn campagnes voor decision makers</li>
                  <li>✓ Targeting bedrijventerreinen Duivendrecht</li>
                  <li>✓ Corporate website ontwikkeling</li>
                  <li>✓ Lead generation voor high-ticket services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE EXPERTISE SECTIE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Waarom Ouder-Amstel Unieke Marketing Vereist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Demografische Kenmerken</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>8.500 inwoners</b> met hoogste inkomensniveau regio Amsterdam</li>
                  <li>• <b>3 kernen:</b> Duivendrecht (zakelijk), Ouderkerk (residentieel), De Driemond (groen)</li>
                  <li>• <b>Amstel Business Corridor:</b> 100+ internationale bedrijven</li>
                  <li>• <b>Villa's & landgoederen:</b> Gemiddelde WOZ-waarde €850.000+</li>
                  <li>• <b>Strategische ligging:</b> Tussen Amsterdam, Amstelveen en Diemen</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Kansen</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>Luxury services:</b> Grote vraag naar premium dienstverlening</li>
                  <li>• <b>B2B potentieel:</b> Nabijheid Arena, AMC en Bijlmer station</li>
                  <li>• <b>Waterrecreatie:</b> Amstel rivier trekt welgestelde bootbezitters</li>
                  <li>• <b>Historisch toerisme:</b> Ouderkerk aan de Amstel monumenten</li>
                  <li>• <b>Zakelijke events:</b> Johan Cruijff Arena & Ziggo Dome nearby</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start Premium Marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Ouder-Amstel</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Klaar om de welgestelde markt van Duivendrecht en Ouderkerk aan de Amstel te bereiken? 
              Laten we jouw premium merk de positie geven die het verdient.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Adviesgesprek</h3>
                <p className="text-gray-600 mb-4">Bespreek jouw ambities voor de Ouder-Amstel markt rechtstreeks met onze specialist.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Contact</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht voor snelle vragen over premium marketing strategieën.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Geheel Ouder-Amstel & Omstreken</h3>
              <p className="text-gray-600">
                Duivendrecht • Ouderkerk aan de Amstel • De Driemond • Amsterdam Zuidoost • Diemen • Amstelveen • Weesp • Abcoude
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}