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

export default function MarketingAsperen() {
  // Lokale Asperen reviews - Vestingstad West-Betuwe
  const dutchReviews = [
    { name: 'Restaurant De Linge', rating: 5, text: 'Als waterfront restaurant trekken we nu veel meer dagjesmensen uit Gorinchem en Leerdam. De lokale SEO werkt fantastisch!' },
    { name: 'Vestingmuseum Asperen', rating: 5, text: 'Toeristen die de Nieuwe Hollandse Waterlinie bezoeken vinden ons nu makkelijk. Bezoekersaantallen zijn verdubbeld!' },
    { name: 'Jachthaven Asperen', rating: 5, text: 'Watersporters op de Linge boeken vooraf een ligplaats. De online vindbaarheid voor "haven Linge" is top!' },
    { name: 'Fruitbedrijf De Betuwe', rating: 5, text: 'Onze streekproducten verkopen we nu aan heel West-Betuwe. Van Leerdam tot Geldermalsen, overal bekend!' },
    { name: 'Aannemersbedrijf Vestingstad', rating: 5, text: 'Monumentale panden renoveren we nu in heel rivierengebied. Van Buren tot Culemborg krijgen we opdrachten.' },
    { name: 'B&B De Vesting', rating: 4.5, text: 'Fietstoeristen op de Lingerou te boeken vooraf. We zitten vol tijdens het seizoen dankzij goede marketing!' },
  ]
  const dutchMoreReviews = [
    { name: 'Fietsverhuur Linge', rating: 5, text: 'E-bikes voor de Lingeroute verhuren we aan toeristen uit heel Nederland. Online reserveren werkt perfect.' },
    { name: 'Hoveniersbedrijf Rivierenland', rating: 5, text: 'Grote tuinprojecten langs de Linge. Van Acquoy tot Heukelum worden we gevonden voor oeverbeplanting.' },
    { name: 'Kano & SUP Verhuur', rating: 4.5, text: 'Waterrecreatie op de Linge loopt geweldig. Families uit Utrecht en Den Bosch reserveren vooraf.' },
    { name: 'Streekwinkel Asperen', rating: 5, text: 'Lokale producten verkopen we nu ook aan toeristen. De combinatie met vestingbezoek werkt uitstekend.' },
    { name: 'Dakdekker West-Betuwe', rating: 5, text: 'Historische panden in vestingsteden zijn onze specialiteit. Van Leerdam tot Buren worden we gevonden.' },
    { name: 'Event Locatie De Vesting', rating: 4.5, text: 'Bruiloften en bedrijfsfeesten in historische setting. De doelgroep uit Gorinchem-Utrecht vindt ons nu.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Marketing Bureau Asperen (West-Betuwe) | Vestingstad & Linge Marketing</title>
        <meta
          name="description"
          content="Marketing specialist Asperen vestingstad. Expert in toerisme marketing, watersport promotie en lokale SEO voor West-Betuwe en het Lingegebied."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/asperen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau voor historisch Asperen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Vestingstad aan de Linge</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Profiteer van de ligging aan de Linge en de vestinggeschiedenis</strong><br />
              Als marketing specialist voor <b>Asperen in West-Betuwe</b> help ik ondernemers optimaal profiteren van het historische karakter, de waterrecreatie en de centrale ligging tussen Gorinchem, Leerdam en Geldermalsen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Vestingstad & erfgoed marketing</li>
              <li>✓ Watersport & Linge recreatie promotie</li>
              <li>✓ Nieuwe Hollandse Waterlinie toerisme</li>
              <li>✓ Bereik van Gorinchem tot Geldermalsen</li>
              <li>✓ Fruitstreek & streekproducten marketing</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Betuwe cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in vestingstad marketing & Linge toerisme</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Bureau Asperen Vestingstad - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist West-Betuwe" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing voor vestingstad aan de Linge"
          subtitle="Trek cultuurliefhebbers, watersporters en dagjesmensen"
          features={[
            {
              badge: "Erfgoed SEO",
              title: "Vestingstad & Waterlinie Marketing",
              description: "Bereik bezoekers van de Nieuwe Hollandse Waterlinie. Van Fort Asperen tot andere vestingsteden, maak geschiedenis zichtbaar online.",
              visualTitle: "Erfgoed toerisme",
              visualSubtitle: "Waterlinie route",
              image: masterSeoImage
            },
            {
              badge: "Water Recreatie",
              title: "Linge & Watersport Promotie",
              description: "Trek watersporters, fietsers langs de Lingeroute en natuurliefhebbers. Perfect voor horeca, jachthavens en verhuur langs de rivier.",
              visualTitle: "Linge recreatie",
              visualSubtitle: "45km vaarwater",
              image: keywordResearchImage
            },
            {
              badge: "Streek Marketing",
              title: "Betuwe Fruit & Streekproducten",
              description: "Promoot lokale producten uit de fruitstreek. Van boerenlandwinkels tot restaurants met streekgerechten - bereik de bewuste consument.",
              visualTitle: "Fruitstreek",
              visualSubtitle: "Betuwe producten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers in <span class='bg-[#F7D8FA] px-2 rounded italic'>vestingstad Asperen</span> groeien online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                West-Betuwe Marketing Specialist <span className="bg-[#F7D8FA] px-2 rounded italic">Asperen-Linge</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van vestingmuseum tot jachthaven, van streekwinkel tot restaurant – groei in het hart van de Betuwe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Toerisme & Erfgoed */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Erfgoed & Toerisme</h3>
                <p className="text-gray-600 mb-6">
                  Musea, monumenten en cultuurhistorie. Trek bezoekers naar de vestingwerken en historische bezienswaardigheden van Asperen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Vestingstad promotie</li>
                  <li>✓ Waterlinie marketing</li>
                  <li>✓ Cultuurtoerisme SEO</li>
                  <li>✓ Evenementen promotie</li>
                </ul>
              </div>
              {/* Water & Recreatie */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Asperen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Linge Recreatie Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jachthavens, kanoverhuur en waterhoreca. Optimaal vindbaar voor recreanten op en langs de langste rivier van Nederland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Watersport marketing</li>
                  <li>✓ Fietsroute promotie</li>
                  <li>✓ Jachthaven SEO</li>
                  <li>✓ Dagrecreatie targeting</li>
                </ul>
              </div>
              {/* Lokale Bedrijven */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Streek & Lokaal</h3>
                <p className="text-gray-600 mb-6">
                  Fruitbedrijven, streekwinkels en lokale dienstverleners. Bereik klanten uit West-Betuwe en omliggende steden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Streekproducten SEO</li>
                  <li>✓ Agrarische marketing</li>
                  <li>✓ B2B fruit sector</li>
                  <li>✓ Lokale diensten promotie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Groei in <span className="bg-[#F7D8FA] px-2 rounded italic">vestingstad Asperen</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Laten we bespreken hoe jouw bedrijf profiteert van de unieke combinatie van historie, water en fruitstreek.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Meer weten? Bel vrijblijvend voor een gratis strategiegesprek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel schakelen? Stuur direct een WhatsApp voor snel contact.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied West-Betuwe & Rivierenland</h3>
              <p className="text-gray-600">
                <strong>Lingestreek:</strong> Leerdam • Acquoy • Heukelum • Spijk • Vuren<br />
                <strong>West-Betuwe:</strong> Geldermalsen • Beesd • Buren • Culemborg<br />
                <strong>Rivierengebied:</strong> Gorinchem • Leerdam • Vianen • Nieuwegein
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}