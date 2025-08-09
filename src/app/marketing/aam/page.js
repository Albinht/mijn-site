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

export default function MarketingAam() {
  // Lokale Aam reviews
  const dutchReviews = [
    { name: 'Recreatiepark De Kleine Vos', rating: 5, text: 'Sinds de nieuwe SEO strategie komen gasten uit heel Nederland naar ons park in Aam. De online boekingen zijn verdubbeld!' },
    { name: 'Hoveniersbedrijf Aam Groen', rating: 5, text: 'We worden nu gevonden door villa-eigenaren uit Elburg en vakantiegangers. Google Ads werkt perfect voor seizoenswerk.' },
    { name: 'Watersportcentrum Veluwemeer', rating: 5, text: 'Bootjesverhuur loopt storm dankzij lokale SEO. Toeristen vinden ons direct wanneer ze in Aam zijn.' },
    { name: 'Strandpaviljoen Aam Beach', rating: 5, text: 'Van verborgen parel naar hotspot aan het Veluwemeer. De marketing heeft ons restaurant op de kaart gezet.' },
    { name: 'Fietsverhuur Aam Routes', rating: 5, text: 'Recreanten uit de hele Noordwest-Veluwe huren nu bij ons. Online reserveringen lopen fantastisch.' },
    { name: 'Camping De Veluwe Oever', rating: 4.5, text: 'Meer kampeerders uit Duitsland en België dankzij meertalige SEO. Bezettingsgraad flink gestegen!' },
  ]
  const dutchMoreReviews = [
    { name: 'Vakantiehuizen Aam Meer', rating: 5, text: 'Complete bezetting in hoogseizoen door sterke online vindbaarheid. Top positie voor "vakantie Veluwemeer".' },
    { name: 'Jachthaven Aam Marina', rating: 5, text: 'Ligplaatsen zijn nu het hele jaar door bezet. Watersporters uit heel Flevoland vinden ons.' },
    { name: 'Restaurant De Veluwse Kust', rating: 4.5, text: 'Van lokaal restaurant naar regionale trekpleister. Google reviews stromen binnen van tevreden gasten.' },
    { name: 'Surfschool Aam Wind', rating: 5, text: 'Cursussen zitten vol dankzij Google Ads campagnes. Perfecte targeting op watersportliefhebbers.' },
    { name: 'Wellness Aam Spa', rating: 5, text: 'Gasten uit Harderwijk, Elburg en Nunspeet boeken nu bij ons. De lokale SEO strategie werkt uitstekend.' },
    { name: 'Visspeciaalzaak Het Meer', rating: 4.5, text: 'Sportvissers uit de hele regio weten ons te vinden. Online verkoop van vishengels loopt geweldig.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Aam (Elburg) | Marketing Bureau Veluwemeer Regio</title>
        <meta
          name="description"
          content="SEO Specialist in Aam aan het Veluwemeer. Boost je recreatiebedrijf met lokale SEO, Google Ads en websites. Specialist in toerisme marketing Noordwest-Veluwe."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/aam" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing specialist voor recreatie aan het Veluwemeer</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Trek toeristen naar Aam & omgeving</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Maak van Aam dé bestemming aan het Veluwemeer</strong><br />
              Als marketing expert voor recreatiebedrijven ken ik de unieke positie van Aam. Gelegen aan de oostkant van het Veluwemeer, tussen Elburg en Harderwijk, is dit de perfecte uitvalsbasis voor watersport en natuurrecreatie. Ik zorg dat toeristen en dagjesmensen jouw bedrijf als eerste vinden.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Specialist in recreatie & toerisme marketing</li>
              <li>✓ Bereik watersporters en natuurliefhebbers</li>
              <li>✓ Focus op Veluwemeer, Veluwe & IJsselmeergebied</li>
              <li>✓ Meertalige SEO voor Duitse en Belgische toeristen</li>
              <li>✓ Seizoensgerichte campagnes voor maximale bezetting</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Boost je recreatiebedrijf <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk toerisme cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Aam, Elburg, Nunspeet & Veluwemeer regio</p>
            <p className="mt-2 text-xs text-green-600">🏖️ Specialist in recreatie marketing sinds 2019</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Resultaten Recreatie Aam Veluwemeer" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Recreatie" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Recreatie marketing die toeristen naar het Veluwemeer trekt"
          subtitle="Van verborgen parel tot toeristische hotspot"
          features={[
            {
              badge: "Toerisme SEO",
              title: "Veluwemeer Vindbaarheid",
              description: "Domineer zoekresultaten voor watersport, strandvakanties en natuurrecreatie. Perfect voor campings, jachthavens en strandpaviljoens aan het meer.",
              visualTitle: "Recreatie #1",
              visualSubtitle: "Veluwemeer expert",
              image: masterSeoImage
            },
            {
              badge: "Seizoen Campagnes",
              title: "Google Ads Toerisme",
              description: "Target vakantiegangers uit heel Nederland, Duitsland en België. Slimme seizoenscampagnes voor zomer watersport en winter wellness.",
              visualTitle: "100% bezetting",
              visualSubtitle: "Jaar rond succes",
              image: keywordResearchImage
            },
            {
              badge: "Boekingsystemen",
              title: "Recreatie Websites",
              description: "Converterende websites met directe boekingsmogelijkheden. Integratie met Booking.com, eigen reserveringssystemen en betaalplatforms.",
              visualTitle: "Direct boekbaar",
              visualSubtitle: "24/7 omzet",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Recreatiebedrijven in <span class='bg-[#F7D8FA] px-2 rounded italic'>Aam & Veluwemeer</span> groeien online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing voor <span className="bg-[#F7D8FA] px-2 rounded italic">recreatie & toerisme</span> aan het Veluwemeer
              </h2>
              <p className="text-xl text-gray-600">
                Van camping tot jachthaven, van strandtent tot vakantiepark - ik ken de recreatiesector
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Recreatie */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recreatie SEO Veluwemeer</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden door vakantiegangers die zoeken naar watersport, stranden en natuur rond het Veluwemeer. Optimaal zichtbaar van voorjaar tot najaar.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf voor recreatie</li>
                  <li>✓ Seizoensgebonden content strategie</li>
                  <li>✓ Reviews van vakantiegangers stimuleren</li>
                  <li>✓ Meertalige SEO (NL/DE/EN)</li>
                </ul>
              </div>
              {/* Google Ads Toerisme */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Hoogseizoen Champion
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Vakantiegangers</h3>
                <p className="text-gray-600 mb-6">
                  Bereik toeristen op het moment dat ze hun vakantie plannen. Van last-minute tot vroegboekers - altijd de juiste timing.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Targeting op vakantiezoekers</li>
                  <li>✓ Geo-targeting Randstad & Duitsland</li>
                  <li>✓ Seizoensaanpassingen & events</li>
                  <li>✓ Remarketing voor terugkerende gasten</li>
                </ul>
              </div>
              {/* Boekingswebsites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recreatie Boekingswebsites</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die direct boekingen genereren. Van camping tot hotel - altijd gebruiksvriendelijk en conversiegericht.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Online reserveringssystemen</li>
                  <li>✓ Koppeling met Channel Managers</li>
                  <li>✓ Beschikbaarheidskalenders</li>
                  <li>✓ Veilige betaalmogelijkheden</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom kiezen voor een <span className="bg-[#F7D8FA] px-2 rounded italic">recreatie marketing specialist</span> die het Veluwemeer kent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Unieke ligging aan het Veluwemeer</h3>
                <p className="text-gray-600">
                  Aam ligt strategisch aan de oostkant van het Veluwemeer, tussen historisch Elburg (3 km) en bruisend Harderwijk (15 km). Met de Veluwe in de achtertuin en het water voor de deur is dit dé locatie voor watersport, strandvakanties en natuurbeleving. Ik weet precies hoe je deze unieke combinatie online uitbuit.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kennis van de recreatiesector</h3>
                <p className="text-gray-600">
                  Van seizoensfluctuaties tot last-minute boekingen, van familievakanties tot watersportevenementen - ik ken de dynamiek van recreatiebedrijven aan het water. Marketing die inspeelt op mooi weer, schoolvakanties en de trek naar buiten. Geen standaard aanpak maar strategie op maat van jouw recreatiebedrijf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">recreatie marketing in Aam</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe trek ik meer toeristen naar mijn recreatiebedrijf in Aam?</summary>
                <p className="mt-4 text-gray-600">
                  Focus op de unieke selling points van het Veluwemeer: watersport, rust, natuur en de nabijheid van historische stadjes. Zorg voor sterke seizoensgebonden SEO (zoektermen als "vakantie Veluwemeer", "watersport Veluwe"), meertalige content voor buitenlandse gasten, en gebruik Google Ads tijdens boekingspieken. Reviews van tevreden gasten zijn goud waard in deze sector.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wanneer moet ik starten met marketing voor het hoogseizoen?</summary>
                <p className="mt-4 text-gray-600">
                  Begin minimaal 3-4 maanden voor het hoogseizoen. Januari-februari voor de zomer, september voor de kerstvakantie. Vroegboekers zoeken vanaf januari naar zomervakanties. Google Ads campagnes intensiveer je 6-8 weken voor de vakantieperiodes. SEO is een doorlopend proces dat het hele jaar aandacht vraagt.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost online marketing voor een recreatiebedrijf?</summary>
                <p className="mt-4 text-gray-600">
                  Voor kleine recreatiebedrijven (5-20 accommodaties) start SEO vanaf €697 per maand. Middelgrote vakantieparken investeren €1500-€3000 per maand in SEO en Google Ads gecombineerd. De ROI is meestal uitstekend: één extra boeking per week dekt vaak al de kosten. In het hoogseizoen verdien je de investering binnen enkele weken terug.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe bereik ik Duitse en Belgische vakantiegangers?</summary>
                <p className="mt-4 text-gray-600">
                  Meertalige SEO is essentieel. Duitse zoektermen zoals "Urlaub Veluwemeer" en "Camping Holland Wasser". Aparte Duitse en Vlaamse landingspaginas met eigen content (geen Google Translate!). Target met Google Ads op postcodes in Noordrijn-Westfalen en Vlaanderen. Zorg voor Duitse reviews en vermeldingen op Duitse vakantiesiites.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Moet ik ook op Booking.com en andere platforms?</summary>
                <p className="mt-4 text-gray-600">
                  Een mix is ideaal. Booking.com brengt volume maar neemt hoge commissies (15-20%). Met goede SEO en een eigen boekingswebsite kun je directe boekingen stimuleren zonder commissie. Gebruik platforms voor vindbaarheid, maar bouw tegelijk aan je eigen online aanwezigheid. Ik help je de balans te vinden en directe boekingen te maximaliseren.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Aam & het Veluwemeer</span> te veroveren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van camping tot jachthaven, van strandtent tot vakantiepark - ik help je groeien aan het water
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek je plannen voor het nieuwe seizoen. Gratis adviesgesprek over recreatie marketing.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Snel een vraag over seizoensmarketing? Stuur een WhatsApp voor direct antwoord.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in heel Noordwest-Veluwe & IJsselmeergebied</h3>
              <p className="text-gray-600">
                Aam • Elburg • Doornspijk • Nunspeet • Harderwijk • Hierden • Hulshorst • Vierhouten • Biddinghuizen • Dronten • Kampen • Emmeloord • Urk • Lemmer
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}