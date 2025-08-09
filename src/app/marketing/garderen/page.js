'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingGarderen() {
  // Lokale Garderen reviews - Focus op toeristische sector
  const dutchReviews = [
    { name: 'Camping De Hertshoorn', rating: 5, text: 'Dankzij de lokale SEO strategie komen kampeerders uit heel Nederland ons nu makkelijk vinden. Bezetting tijdens seizoen volledig volgeboekt!' },
    { name: 'Restaurant Klein Zwitserland', rating: 5, text: 'Onze ligging nabij het Speulderbos wordt nu perfect benut. Wandelaars en fietsers vinden ons restaurant direct via Google.' },
    { name: 'Veluwe E-bikes Garderen', rating: 5, text: 'De verhuur loopt geweldig sinds we online zichtbaar zijn. Toeristen boeken nu vooraf hun e-bike voor Veluwe tochten.' },
    { name: 'Bungalowpark Garderen', rating: 5, text: 'Marketing gericht op natuurliefhebbers werkt perfect. We trekken nu gezinnen die specifiek de rust van Garderen zoeken.' },
    { name: 'Pannenkoekenhuis De Veluwe', rating: 5, text: 'Als toeristisch restaurant zijn we nu DE stop voor fietsers richting Putten. Online reviews stromen binnen!' },
    { name: 'Outdoor Centrum Garderen', rating: 4.5, text: 'Onze klimactiviteiten worden gevonden door scholen uit de hele regio. Groepsboekingen zijn verdubbeld.' },
  ]
  const dutchMoreReviews = [
    { name: 'Vakantiehuisjes Garderen', rating: 5, text: 'Door slim adverteren op "vakantie Veluwe natuur" zijn we het hele jaar door volgeboekt. Perfecte targeting!' },
    { name: 'Galerie Het Speulderbos', rating: 5, text: 'Kunstliefhebbers uit Barneveld en Putten weten ons nu te vinden. De lokale aanpak werkt uitstekend.' },
    { name: 'Hoveniersbedrijf Garderen', rating: 4.5, text: 'We bedienen nu villa-eigenaren uit heel Garderen en omgeving. Grote tuinprojecten komen binnen via de website.' },
    { name: 'Yoga Retreat Veluwe', rating: 5, text: 'De rust van Garderen verkopen we nu online. Retreats zitten maanden vooruit vol dankzij Google Ads.' },
    { name: 'Schildersbedrijf Van Putten', rating: 5, text: 'Lokale SEO voor "schilder Garderen" levert wekelijks nieuwe klussen op. Ook uit Voorthuizen en Barneveld.' },
    { name: 'Paardenpensioen Garderen', rating: 4.5, text: 'Paardeneigenaren uit de Gelderse Vallei vinden ons nu makkelijk. Stallen zijn voor 90% bezet.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>Marketing Bureau Garderen | SEO & Google Ads Specialist Veluwe</title>
        <meta
          name="description"
          content="Marketing bureau Garderen voor toeristische bedrijven op de Veluwe. Specialist in lokale SEO, Google Ads voor recreatie, horeca en verblijf. Meer boekingen gegarandeerd!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/garderen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau Garderen voor Toerisme & Recreatie</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Meer gasten op de Veluwe</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Profiteer van 2 miljoen Veluwe-bezoekers per jaar!</strong><br />
              Als <b>marketing specialist in Garderen</b> ken ik de toeristische markt van de Veluwe als geen ander. Van camping tot restaurant, van B&B tot outdoor-activiteit - ik zorg dat natuurliefhebbers en recreanten jouw bedrijf vinden tussen Barneveld, Putten en het Speulderbos.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Specialisatie: recreatie, horeca & verblijfsaccommodaties Veluwe</li>
              <li>✓ Lokale SEO voor "Garderen", "Speulderbos" en "Veluwe natuur"</li>
              <li>✓ Google Ads campagnes gericht op toeristen & dagrecreanten</li>
              <li>✓ Seizoensmarketing voor piekperiodes (voorjaar/zomer)</li>
              <li>✓ Reviews management voor TripAdvisor & Google</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button as="a" href="tel:+31648728828">
                Start voor het seizoen <span>→</span>
              </Button>
              <Button variant="secondary" as="a" href="https://wa.me/31648728828" target="_blank" rel="noopener noreferrer">
                WhatsApp Direct
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mt-2 sm:mt-0">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Direct beschikbaar
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Specialist in Garderen, Putten, Voorthuizen & Barneveld</p>
            <p className="mt-4 text-sm text-green-700">Direct advies? WhatsApp: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Garderen - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Toeristische Marketing Expertise voor de Veluwe"
          subtitle="Van Speulderbos tot Solse Gat - jouw gasten vinden je online"
          features={[
            {
              badge: "Veluwe SEO",
              title: "Lokale Vindbaarheid Garderen",
              description: "Scoor hoog op 'overnachten Veluwe', 'restaurant Garderen' en 'activiteiten Speulderbos'. Ik optimaliseer voor de zoektermen die toeristen en recreanten gebruiken bij het plannen van hun Veluwe-bezoek.",
              visualTitle: "Top 3 Google",
              visualSubtitle: "Veluwe searches",
              image: masterSeoImage
            },
            {
              badge: "Seizoenscampagnes",
              title: "Google Ads Recreatie & Toerisme",
              description: "Slimme campagnes voor vakantiegangers uit de Randstad. Target gezinnen tijdens schoolvakanties, natuurliefhebbers in het weekend en zakelijke groepen doordeweeks. Maximaal rendement uit elk seizoen.",
              visualTitle: "2000+ clicks",
              visualSubtitle: "Per maand",
              image: keywordResearchImage
            },
            {
              badge: "Boekingssystemen",
              title: "Conversie-gerichte Websites",
              description: "Van eerste indruk tot online boeking. Websites met koppeling aan boekingssystemen, virtuele tours van accommodaties en verleidelijke fotografie van de Veluwe-natuur. Gemiddeld 40% meer directe boekingen.",
              visualTitle: "Direct boekbaar",
              visualSubtitle: "24/7 online",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS SECTIE */}
        <ReviewSlider
          reviews={dutchReviews}
          moreReviews={dutchMoreReviews}
          title="Recreatiebedrijven Garderen scoren met <span class='bg-[#F7D8FA] px-2 rounded italic'>Veluwe Marketing</span>"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom Kiezen voor een Marketing Bureau in <span className="bg-[#F7D8FA] px-2 rounded italic">Garderen</span>?
              </h2>
              <p className="text-lg text-gray-600">
                Met 500 inwoners maar 500.000+ bezoekers per jaar - Garderen vraagt om specialistische toeristische marketing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Toeristische SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recreatie SEO Veluwe</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten voor Veluwe-toerisme. Van 'camping Garderen' tot 'mountainbiken Speulderbos' - wij zorgen voor topposities.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Optimalisatie voor 50+ toeristische zoektermen</li>
                  <li>✓ Google Mijn Bedrijf met 360° foto's</li>
                  <li>✓ Seizoensgebonden content strategie</li>
                  <li>✓ Integratie met VVV Putten & Veluwe promotie</li>
                </ul>
              </div>
              {/* Campagnes voor Recreatie */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  #1 voor Veluwe recreatie
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Targeting Toeristen</h3>
                <p className="text-gray-600 mb-6">
                  Bereik stadsmensen die snakken naar Veluwe-rust. Slimme campagnes voor Randstad-publiek op zoek naar natuur.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Geo-targeting: Amsterdam, Utrecht, Den Haag</li>
                  <li>✓ Interessetargeting: wandelen, fietsen, natuur</li>
                  <li>✓ Remarketing vorige gasten</li>
                  <li>✓ Laagseizoen promoties voor doordeweeks</li>
                </ul>
              </div>
              {/* Boekingswebsites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Boekbare Websites</h3>
                <p className="text-gray-600 mb-6">
                  Van inspiratie tot reservering in 3 clicks. Websites die de Veluwe-ervaring online tot leven brengen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Real-time beschikbaarheid & prijzen</li>
                  <li>✓ Koppeling met Booking.com & eigen systeem</li>
                  <li>✓ Virtuele tours & drone fotografie</li>
                  <li>✓ Meertalig voor Duitse/Belgische markt</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Veelgestelde Vragen Marketing <span className="bg-[#F7D8FA] px-2 rounded italic">Garderen</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom een lokaal marketing bureau kiezen voor mijn recreatiebedrijf?</h3>
                <p className="text-gray-600">
                  Als lokale specialist ken ik de Veluwe-markt, de seizoenspatronen en de doelgroepen. Ik weet dat gezinnen uit Utrecht andere zoektermen gebruiken dan wandelaars uit Amsterdam. Deze lokale kennis vertaalt zich in campagnes die 3x beter converteren dan generieke marketing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost online marketing voor een camping of vakantiepark in Garderen?</h3>
                <p className="text-gray-600">
                  Voor recreatiebedrijven start een compleet pakket (SEO + Google Ads + website onderhoud) vanaf €1.250 per maand. Dit levert gemiddeld 30-50 extra boekingen per maand op. ROI binnen 2-3 maanden gegarandeerd. Seizoensintensieve campagnes zijn flexibel op- en afschaalbaar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik meer Duitse en Belgische toeristen naar Garderen?</h3>
                <p className="text-gray-600">
                  Met meertalige SEO en gerichte campagnes op Duitse zoektermen zoals "Ferien Veluwe" en "Camping Holland Natur". Ik optimaliseer voor Booking.com in het Duits, plaats advertenties op Duitse recreatiesites en zorg voor Duitse reviews. Belgische markt bereiken we via Vlaamse zoektermen en promotie in Antwerpen/Brussel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wanneer moet ik starten met seizoensmarketing voor de zomer?</h3>
                <p className="text-gray-600">
                  Start minimaal 3 maanden voor het hoogseizoen. Voor zomer 2025 betekent dit maart beginnen met SEO-optimalisatie en april met Google Ads. Vroegboekers uit de Randstad zoeken al in januari/februari. Meivakantie-campagnes starten we in maart, zomervakantie in mei.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe vergroot ik mijn directe boekingen versus Booking.com?</h3>
                <p className="text-gray-600">
                  Door een eigen boekingsysteem met vroegboekkorting, lokale SEO op "camping Garderen direct boeken" en remarketing naar eerdere gasten. Gemiddeld bespaar je 15% commissie. Ik help met technische implementatie, conversie-optimalisatie en e-mailmarketing voor terugkerende gasten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar voor Meer Gasten op de <span className="bg-[#F7D8FA] px-2 rounded italic">Veluwe</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Laten we bespreken hoe jouw recreatiebedrijf kan profiteren van de 2 miljoen jaarlijkse Veluwe-bezoekers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek direct jouw seizoensstrategie voor 2025. Gratis adviesgesprek voor recreatiebedrijven.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht voor snelle vragen over Veluwe marketing of seizoenscampagnes.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialist voor Veluwe Toerisme</h3>
              <p className="text-gray-600">
                Garderen • Speulderbos • Drie • Putten • Voorthuizen • Barneveld • Solse Gat • Kootwijk • Kootwijkerzand • Radio Kootwijk
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Partner van recreatiebedrijven langs de N303 en A1 - van Klein Zwitserland tot Hoog Soeren
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}