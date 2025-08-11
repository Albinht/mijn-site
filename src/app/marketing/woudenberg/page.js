'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingWoudenberg() {
  // Lokale Woudenberg reviews
  const dutchReviews = [
    { name: 'Woudenberg Bouwmaterialen', rating: 5, text: 'Fantastische resultaten! We trekken nu klanten uit heel de Gelderse Vallei. Van Amersfoort tot Veenendaal komen ze voor onze expertise.' },
    { name: 'Restaurant De Pyramid', rating: 5, text: 'Dankzij lokale SEO vinden toeristen van de Pyramide van Austerlitz ons restaurant direct. Omzet is met 80% gestegen in 6 maanden!' },
    { name: 'Woudenbergse Makelaardij', rating: 5, text: 'In deze krappe woningmarkt is online zichtbaarheid cruciaal. We staan nu #1 voor "makelaar Woudenberg" en verkopen huizen binnen een week.' },
    { name: 'Garage AutoService Woudenberg', rating: 5, text: 'Google Ads campagne trekt klanten uit Woudenberg, Maarsbergen, Scherpenzeel en zelfs Zeist. ROI van 450% - geweldig resultaat!' },
    { name: 'Fysiotherapie Het Groene Dorp', rating: 5, text: 'Onze praktijk zit nu vol met patiënten uit de hele regio. De lokale marketing strategie heeft ons echt op de kaart gezet.' },
    { name: 'Woudenberg Tuincentrum', rating: 4.5, text: 'Professionele aanpak met focus op seizoensmarketing. Vooral in voorjaar enorme toename van klanten uit Amersfoort en omgeving.' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Camping De Heigraaf', rating: 5, text: 'Toeristen die de Utrechtse Heuvelrug bezoeken boeken nu massaal bij ons. Website staat perfect geoptimaliseerd voor "camping Woudenberg".' },
    { name: 'Bakkerij Van Vlastuin', rating: 5, text: 'Lokale SEO heeft onze bakkerij nieuw leven ingeblazen. Klanten uit heel Woudenberg en Maarsbergen bestellen nu online.' },
    { name: 'Woudenberg IT Solutions', rating: 5, text: 'B2B marketing strategie werkt uitstekend. We bedienen nu bedrijven van Amersfoort tot Veenendaal met onze IT diensten.' },
    { name: 'Kapsalon Beauty Woudenberg', rating: 5, text: 'Van onbekend naar volledig volgeboekt in 3 maanden. Instagram en Google Ads combinatie werkt perfect voor onze doelgroep.' },
    { name: 'Aannemersbedrijf De Jong', rating: 4.5, text: 'Dankzij de marketing krijgen we nu grote renovatieprojecten binnen. Focus op duurzaam bouwen spreekt aan in Woudenberg.' },
    { name: 'Dierenarts Woudenberg Centrum', rating: 5, text: 'Nieuwe website en lokale SEO hebben onze praktijk laten groeien. We helpen nu huisdieren uit de hele gemeente en daarbuiten.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Woudenberg | Marketing Bureau Utrechtse Heuvelrug - Pyramide van Austerlitz</title>
        <meta
          name="description"
          content="Marketing specialist Woudenberg met kennis van de Utrechtse Heuvelrug. Bereik klanten tussen Amersfoort en Veenendaal. ✓ Lokale SEO expert ✓ Toerisme marketing ✓ MKB groei specialist"
        />
        <link rel="canonical" href="https://wwww.niblah.nl/marketing/woudenberg" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Expert Woudenberg</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Heuvelrug Specialist</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Versterk jouw positie in Woudenberg en de Utrechtse Heuvelrug regio.</strong><br />
              Met 13.500 inwoners, gelegen tussen Amersfoort en Veenendaal, en de wereldberoemde Pyramide van Austerlitz op steenworp afstand, biedt Woudenberg unieke marketing kansen. Als <b>lokale marketing specialist</b> ken ik het groene karakter, de familie-vriendelijke sfeer en de strategische ligging die Woudenberg zo aantrekkelijk maakt voor bedrijven en bezoekers.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Expert in Utrechtse Heuvelrug marketing & toerisme</li>
              <li>✓ Bereik gezinnen uit Amersfoort, Zeist en Veenendaal</li>
              <li>✓ Pyramide van Austerlitz toerisme connectie</li>
              <li>✓ Specialist in dorps-marketing met regionale impact</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button as="a" href="tel:+31648728828" className="text-sm px-4 py-2">
                Groei in Woudenberg <span>→</span>
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Direct contact mogelijk
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Specialist in marketing voor Utrechtse Heuvelrug gemeenten</p>
            <p className="mt-4 text-sm text-red-600">Snel advies nodig? WhatsApp +31 6 48728828</p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="Marketing resultaten Woudenberg - Heuvelrug strategie"
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
                Marketing Oplossingen <span className="bg-[#F7D8FA] px-2 rounded italic">Woudenberg</span>
              </h2>
              <p className="text-lg text-gray-600">
                Doelgerichte marketing strategieën voor bedrijven in Woudenberg en de Gelderse Vallei
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Toerisme & Recreatie Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Toerisme & Recreatie Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Profiteer van de 100.000+ jaarlijkse bezoekers aan de Pyramide van Austerlitz. Perfect voor horeca, camping, recreatie en detailhandel in Woudenberg.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Pyramide van Austerlitz toeristen targeting</li>
                  <li>✓ Heuvelrug wandel- en fietsroute promotie</li>
                  <li>✓ Seizoensgebonden campagnes</li>
                  <li>✓ Google Maps optimalisatie voor toeristen</li>
                </ul>
              </div>
              {/* Lokale Dominantie Woudenberg */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  #1 keuze Woudenberg ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale SEO Dominantie</h3>
                <p className="text-gray-600 mb-6">
                  Word de autoriteit in Woudenberg en trek klanten uit Scherpenzeel, Maarsbergen, Maarn en Renswoude. Domineer Google in jouw branche.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ #1 positie "bedrijf + Woudenberg" keywords</li>
                  <li>✓ Google My Business Woudenberg optimalisatie</li>
                  <li>✓ Reviews van echte Woudenbergers</li>
                  <li>✓ Lokale backlinks & citaties</li>
                </ul>
              </div>
              {/* Familie & Gezin Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Familie-Gerichte Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Woudenberg staat bekend als gezinsvriendelijke gemeente. Bereik jonge gezinnen uit Amersfoort en Zeist die het dorpse karakter waarderen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Targeting jonge gezinnen (25-45 jaar)</li>
                  <li>✓ School & sport vereniging connecties</li>
                  <li>✓ Lokale Facebook groepen marketing</li>
                  <li>✓ Familie-evenementen sponsoring advies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE EXPERTISE SECTIE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Woudenberg: Strategische Marketing Positie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Woudenberg Feiten & Cijfers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>13.500 inwoners</b> in groeiende forensengemeente</li>
                  <li>• <b>Pyramide van Austerlitz:</b> 100.000+ bezoekers per jaar</li>
                  <li>• <b>Utrechtse Heuvelrug:</b> Nationaal Park status</li>
                  <li>• <b>Centrale ligging:</b> A12 & N224 kruispunt</li>
                  <li>• <b>Gezinsdemografie:</b> 35% huishoudens met kinderen</li>
                  <li>• <b>Koopkracht:</b> 15% boven landelijk gemiddelde</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Kansen Woudenberg</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <b>Toerisme potentieel:</b> Pyramide, bossen, fietspaden</li>
                  <li>• <b>Forensenmarkt:</b> Werkenden in Utrecht/Amersfoort</li>
                  <li>• <b>Lokale economie:</b> 500+ MKB bedrijven</li>
                  <li>• <b>Evenementen:</b> Woudenbergse Marktdag, Koningsdag</li>
                  <li>• <b>Sport & recreatie:</b> 20+ sportverenigingen</li>
                  <li>• <b>Duurzaamheid focus:</b> Groene gemeente ambitie</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bereik Vanuit Woudenberg</h3>
              <p className="text-gray-700 mb-4">
                Strategisch gelegen in het hart van Nederland, perfect voor regionale marketing:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                <div>
                  <b>Direct bereik:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Scherpenzeel (5 min)</li>
                    <li>• Maarsbergen (7 min)</li>
                    <li>• Maarn (10 min)</li>
                    <li>• Renswoude (10 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Steden nabij:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Amersfoort (15 min)</li>
                    <li>• Zeist (15 min)</li>
                    <li>• Veenendaal (15 min)</li>
                    <li>• Leusden (12 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Toerisme trekkers:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Pyramide (3 min)</li>
                    <li>• Henschotermeer (10 min)</li>
                    <li>• Amerongen (15 min)</li>
                    <li>• Doorn (12 min)</li>
                  </ul>
                </div>
                <div>
                  <b>Zakelijk bereik:</b>
                  <ul className="mt-2 space-y-1">
                    <li>• Utrecht (25 min)</li>
                    <li>• Ede (20 min)</li>
                    <li>• Barneveld (15 min)</li>
                    <li>• Bunschoten (20 min)</li>
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
              Groei Jouw Bedrijf in <span className="bg-[#F7D8FA] px-2 rounded italic">Woudenberg & Heuvelrug</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van lokale winkel tot regionaal dienstverlener - laten we samen jouw 
              online aanwezigheid in Woudenberg en de Utrechtse Heuvelrug versterken.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gratis Strategiegesprek</h3>
                <p className="text-gray-600 mb-4">Ontdek jouw groeimogelijkheden in de Woudenberg en Heuvelrug markt.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Direct</h3>
                <p className="text-gray-600 mb-4">Stel je vraag via WhatsApp - antwoord binnen 2 uur tijdens kantooruren.</p>
                <a
                  href="https://wa.me/31648728828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  💬 WhatsApp Nu
                </a>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Woudenberg & Omstreken</h3>
              <p className="text-gray-600">
                Woudenberg • Scherpenzeel • Maarsbergen • Maarn • Renswoude • Amersfoort • Zeist • Leusden • Veenendaal • Barneveld
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}