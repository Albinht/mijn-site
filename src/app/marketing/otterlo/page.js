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

export default function MarketingOtterlo() {
  // Lokale Otterlo reviews - Focus op kunst, cultuur en natuur
  const dutchReviews = [
    { name: 'Hotel De Sterrenberg', rating: 5, text: 'Sinds onze samenwerking met het marketing bureau trekken we veel meer museumbezoekers. Perfect getarget op "hotel nabij Kröller-Müller"!' },
    { name: 'Restaurant De Waldhoorn', rating: 5, text: 'Onze ligging bij de Hoge Veluwe wordt nu optimaal benut. Dagtoeristen vinden ons restaurant makkelijk na hun parkbezoek.' },
    { name: 'Fietsverhuur De Witte Fietsen', rating: 5, text: 'Marketing gericht op Hoge Veluwe bezoekers werkt geweldig. Onze witte fietsen worden massaal online geboekt!' },
    { name: 'Kunstgalerie Otterlo', rating: 5, text: 'Dankzij slimme SEO vinden kunstliefhebbers die het Kröller-Müller bezoeken ook onze galerie. Verkoop gestegen met 60%.' },
    { name: 'B&B Het Jachthuis', rating: 5, text: 'We zijn nu dé overnachtingsplek voor museumbezoekers. Google Ads campagne tijdens Van Gogh tentoonstellingen werkt perfect.' },
    { name: 'Natuurcamping Otterlo', rating: 4.5, text: 'Marketing strategie focust perfect op natuurliefhebbers en kunstminnaars. Bezetting hele seizoen uitstekend.' },
  ]
  const dutchMoreReviews = [
    { name: 'Pannenkoekenhuis De Koperen Kop', rating: 5, text: 'Als uitvalsbasis voor Hoge Veluwe worden we nu perfect gevonden. Families met kinderen boeken vooraf een tafel.' },
    { name: 'E-bike Verhuur Otterlo', rating: 5, text: 'Targeting op "e-bike Hoge Veluwe" levert dagelijks reserveringen op. Vooral 50+ doelgroep vindt ons nu makkelijk.' },
    { name: 'Beeldentuin Atelier', rating: 4.5, text: 'Kunstroute marketing trekt bezoekers van Kröller-Müller naar ons atelier. Workshops zitten altijd vol.' },
    { name: 'Wildrestaurant De Houtzagerij', rating: 5, text: 'SEO op "wild eten Otterlo" en "restaurant Hoge Veluwe" werkt uitstekend. Reserveringen 40% gestegen.' },
    { name: 'Groepsaccommodatie Otterlo', rating: 5, text: 'Schoolklassen en kunstgroepen vinden ons nu via Google. Perfect voor museumarrangementen.' },
    { name: 'VVV Otterlo Info', rating: 4.5, text: 'Online vindbaarheid voor toeristische info verbeterd. Meer bezoekers komen eerst langs voor tips.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>Marketing Bureau Otterlo | SEO Specialist Kröller-Müller & Hoge Veluwe</title>
        <meta
          name="description"
          content="Marketing bureau Otterlo voor horeca, recreatie en cultuur. Specialist in toeristische marketing rond Kröller-Müller Museum en Nationaal Park Hoge Veluwe. Meer bezoekers gegarandeerd!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/otterlo" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau Otterlo bij Kröller-Müller Museum</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Kunst, Cultuur & Natuur Marketing</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Profiteer van 600.000 jaarlijkse bezoekers aan Kröller-Müller en Hoge Veluwe!</strong><br />
              Als <b>marketing specialist in Otterlo</b> verbind ik jouw bedrijf met kunst- en natuurliefhebbers. Van hotel tot restaurant, van galerie tot fietsverhuur - ik zorg dat de miljoen bezoekers van het Nationale Park en museum jouw onderneming vinden.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Specialisatie: kunst-, cultuur- en natuurtoerisme marketing</li>
              <li>✓ SEO focus: "Kröller-Müller", "Hoge Veluwe", "Van Gogh Otterlo"</li>
              <li>✓ Targeting museumbezoekers & natuurliefhebbers (25-65 jaar)</li>
              <li>✓ Seizoenscampagnes gekoppeld aan tentoonstellingen</li>
              <li>✓ Samenwerking met culturele en toeristische partners</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button as="a" href="tel:+31648728828">
                Plan voor museumseizoen <span>→</span>
              </Button>
              <Button variant="secondary" as="a" href="https://wa.me/31648728828" target="_blank" rel="noopener noreferrer">
                WhatsApp Direct
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mt-2 sm:mt-0">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Direct beschikbaar
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Partner van ondernemers rond Kröller-Müller & Hoge Veluwe</p>
            <p className="mt-4 text-sm text-green-700">Urgent? WhatsApp: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="Marketing resultaten Otterlo - Kröller-Müller bezoekers"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Cultureel Toerisme Marketing voor Otterlo"
          subtitle="Van Van Gogh liefhebbers tot natuurwandelaars - bereik ze allemaal"
          features={[
            {
              badge: "Museum Marketing",
              title: "Kröller-Müller Bezoekers Targeting",
              description: "Bereik 300.000+ jaarlijkse museumbezoekers met gerichte SEO op 'hotel Kröller-Müller', 'restaurant bij Van Gogh museum' en 'overnachten Otterlo'. Koppel je aanbod aan tentoonstellingen en kunstroutes voor maximaal effect.",
              visualTitle: "300K+ bezoekers",
              visualSubtitle: "Museum targeting",
              image: masterSeoImage
            },
            {
              badge: "Natuur Toerisme",
              title: "Hoge Veluwe Park Marketing",
              description: "Target natuurliefhebbers, fietsers en wandelaars die het Nationale Park bezoeken. Smart campaigns voor 'witte fietsen verhuur', 'restaurant Hoge Veluwe' en 'wildspotten Otterlo'. Seizoensgebonden promotie voor herfst- en voorjaarsactiviteiten.",
              visualTitle: "600K parkbezoekers",
              visualSubtitle: "Jaarlijks bereik",
              image: keywordResearchImage
            },
            {
              badge: "Arrangement Marketing",
              title: "Cultuur & Natuur Packages",
              description: "Ontwikkel en promoot arrangementen die kunst en natuur combineren. Van 'Museum & Lunch' tot 'E-bike & Entree' packages. Complete online boekingssystemen met upsell mogelijkheden voor extra diensten.",
              visualTitle: "€50+ per gast",
              visualSubtitle: "Arrangement waarde",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS SECTIE */}
        <ReviewSlider 
          reviews={dutchReviews} 
          moreReviews={dutchMoreReviews}
          title="Otterlo ondernemers profiteren van <span class='bg-[#F7D8FA] px-2 rounded italic'>Cultuur & Natuur Marketing</span>"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Strategie voor <span className="bg-[#F7D8FA] px-2 rounded italic">Otterlo</span> Ondernemers
              </h2>
              <p className="text-lg text-gray-600">
                Unieke positie tussen wereldberoemd museum en nationaal park vraagt om specialistische marketing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Museum Bezoekers Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Museum Bezoekers Bereiken</h3>
                <p className="text-gray-600 mb-6">
                  Target kunstliefhebbers die specifiek voor Van Gogh en moderne kunst naar Otterlo komen. Cultuurmarketing die werkt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ SEO op kunstgerelateerde zoektermen</li>
                  <li>✓ Tentoonstellingsgebonden campagnes</li>
                  <li>✓ Partnership met culturele platforms</li>
                  <li>✓ Instagram marketing voor kunstpubliek</li>
                </ul>
              </div>
              {/* Natuurtoerisme Campagnes */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Otterlo
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hoge Veluwe Targeting</h3>
                <p className="text-gray-600 mb-6">
                  Bereik natuurliefhebbers, fietsers en wandelaars die het park bezoeken. Seizoensgerichte natuurcampagnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Witte fietsen route promotie</li>
                  <li>✓ Wild spotten arrangementen</li>
                  <li>✓ Paddenstoelenseizoen marketing</li>
                  <li>✓ E-bike verhuur campagnes</li>
                </ul>
              </div>
              {/* Arrangement Development */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Arrangementen</h3>
                <p className="text-gray-600 mb-6">
                  Ontwikkel en promoot totaalpakketten die Otterlo's unieke positie benutten. Kunst + Natuur + Culinair.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Museum-diner combinaties</li>
                  <li>✓ Overnachting & entree deals</li>
                  <li>✓ Groepsarrangementen scholen</li>
                  <li>✓ VIP kunst experiences</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Veelgestelde Vragen Marketing <span className="bg-[#F7D8FA] px-2 rounded italic">Otterlo</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik meer Kröller-Müller bezoekers naar mijn bedrijf?</h3>
                <p className="text-gray-600">
                  Door strategische SEO op termen als "lunch na Kröller-Müller" en "hotel dichtbij Van Gogh museum". Ik ontwikkel content rond tentoonstellingen, plaats advertenties op kunstplatforms en creëer partnerships met het museum. Gemiddeld 35% meer kunstpubliek binnen 3 maanden.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een horecabedrijf in Otterlo?</h3>
                <p className="text-gray-600">
                  Een compleet marketingpakket voor horeca in Otterlo start vanaf €950 per maand. Dit omvat lokale SEO, Google Ads tijdens piekperiodes, social media management en arrangement-promotie. ROI gemiddeld 400% door de hoge bezoekersaantallen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik internationale toeristen die Otterlo bezoeken?</h3>
                <p className="text-gray-600">
                  Met meertalige SEO (Engels, Duits, Frans) en internationale kunst-keywords. Ik optimaliseer voor "Van Gogh museum Netherlands" en plaats advertenties op TripAdvisor. Duitse markt is vooral sterk - 40% van de museumbezoekers komt uit Duitsland.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wanneer zijn de beste marketingmomenten voor Otterlo?</h3>
                <p className="text-gray-600">
                  Piekperiodes zijn april-oktober voor algemeen toerisme, maar slimme marketing richt zich op: nieuwe tentoonstellingen Kröller-Müller (4x per jaar), paddenstoelenseizoen (september-oktober), bronst edelherten (september), en witte fietsen seizoen (maart-november). Start campagnes 6-8 weken vooraf.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe combineer ik kunst- en natuurmarketing effectief?</h3>
                <p className="text-gray-600">
                  Door unieke "Kunst & Natuur" arrangementen te ontwikkelen. Denk aan: Van Gogh ontbijt + e-bike tour, sculptuur wandeling + high tea, of fotografie workshop in het park. Deze combinaties trekken hogere prijzen (€75-150 pp) en worden uitstekend gewaardeerd (4.8+ reviews).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om te Profiteren van <span className="bg-[#F7D8FA] px-2 rounded italic">600.000 Bezoekers</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Laten we bespreken hoe jouw Otterlo bedrijf kan groeien met kunst- en natuurtoerisme marketing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek jouw marketingstrategie voor het nieuwe museumseizoen. Gratis advies voor Otterlo ondernemers.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Direct</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht voor quick wins in cultuur- en natuurtoerisme marketing.</p>
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
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Specialist Kunst & Natuur Corridor</h3>
              <p className="text-gray-600">
                Otterlo • Hoenderloo • Schaarsbergen • Ede • Harskamp • Bennekom • Arnhem • Wageningen
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Partner van ondernemers rond Kröller-Müller Museum, Nationaal Park Hoge Veluwe & Jachthuis Sint Hubertus
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}