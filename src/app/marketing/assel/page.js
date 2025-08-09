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

export default function MarketingAssel() {
  // Lokale Assel reviews - Veluwe dorp bij Apeldoorn
  const dutchReviews = [
    { name: 'Vakantiepark Heideheuvel', rating: 5, text: 'Als recreatiepark tussen Assel en Beekbergen trekken we nu veel meer gezinnen. De online zichtbaarheid is enorm verbeterd!' },
    { name: 'Manege Assel', rating: 5, text: 'Paardrijlessen en buitenritten lopen geweldig. We krijgen ruiters uit heel Apeldoorn en toeristen van de Veluwe.' },
    { name: 'Restaurant De Veluwe Poort', rating: 5, text: 'Gelegen aan de doorgaande weg naar Hoenderloo krijgen we nu veel meer passanten. Google Reviews management werkt top!' },
    { name: 'Camping De Groene Heuvel', rating: 5, text: 'Vol geboekt het hele seizoen! Vooral mountainbikers en wandelaars die het Nationaal Park bezoeken vinden ons.' },
    { name: 'Bouwbedrijf Assel-Beekbergen', rating: 5, text: 'Renovatieprojecten in heel noordwest Apeldoorn. Van Ugchelen tot Hoenderloo, overal worden we gevonden.' },
    { name: 'Hoveniersbedrijf Veluwe Groen', rating: 4.5, text: 'Grote tuinprojecten bij villa\'s rond Berg en Bos. De targeting op welgestelde wijken werkt uitstekend.' },
  ]
  const dutchMoreReviews = [
    { name: 'E-bike Verhuur Assel', rating: 5, text: 'Toeristen voor Kröller-Müller en Paleis Het Loo huren bij ons. Perfect bereik dankzij lokale SEO.' },
    { name: 'Bed & Breakfast De Wildbaan', rating: 5, text: 'Gasten die rust zoeken tussen Apeldoorn en de Veluwe boeken bij ons. Reviews en foto\'s doen de rest.' },
    { name: 'Klussenbedrijf Noord-Apeldoorn', rating: 4.5, text: 'Van kleine klusjes in Assel tot grote verbouwingen in Hoog Soeren. De regio marketing werkt.' },
    { name: 'Dierenarts Beekbergen-Assel', rating: 5, text: 'Paardeneigenaren uit de hele regio komen naar onze kliniek. Specialistische SEO voor paardensport werkt perfect.' },
    { name: 'Tuincentrum Veluwerand', rating: 5, text: 'Klanten uit Apeldoorn-Noord en recreanten onderweg naar Hoenderloo stoppen bij ons. Geweldige groei!' },
    { name: 'Autogarage De Veluwe', rating: 4.5, text: 'APK en onderhoud voor heel noordwest Apeldoorn. Van Ugchelen tot Radio Kootwijk, overal vindbaar.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Marketing Bureau Assel (Apeldoorn) | Veluwe Toerisme & Recreatie SEO</title>
        <meta
          name="description"
          content="Marketing specialist Assel bij Beekbergen. Expert in Veluwe toerisme, outdoor recreatie en lokale SEO voor noordwest Apeldoorn en Nationaal Park gebied."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/assel" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau tussen Apeldoorn en de Veluwe</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Assel: poort naar natuurgebieden</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Profiteer van de strategische ligging tussen stad en natuur</strong><br />
              Als marketing specialist voor <b>Assel en Beekbergen</b> help ik bedrijven optimaal profiteren van de unieke positie tussen Apeldoorn en de Veluwe. Van outdoor recreatie tot lokale dienstverlening - bereik de juiste doelgroep.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Toerisme marketing Veluwe & Kröller-Müller</li>
              <li>✓ Lokaal sterk in noordwest Apeldoorn</li>
              <li>✓ Outdoor & recreatie specialisatie</li>
              <li>✓ Bereik van Hoenderloo tot Ugchelen</li>
              <li>✓ Focus op natuurliefhebbers & actieve recreanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Veluwe cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Veluwe toerisme & outdoor marketing</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Bureau Assel-Beekbergen - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Veluwe" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing voor de toegangspoort tot de Veluwe"
          subtitle="Trek natuurliefhebbers, sporters en toeristen naar jouw bedrijf"
          features={[
            {
              badge: "Outdoor SEO",
              title: "Veluwe & Outdoor Marketing",
              description: "Perfect vindbaar voor mountainbikers, wandelaars en natuurliefhebbers die de Veluwe bezoeken. Van Posbank tot Kröller-Müller, jouw bedrijf wordt gezien.",
              visualTitle: "Outdoor focus",
              visualSubtitle: "MTB & Wandelen",
              image: masterSeoImage
            },
            {
              badge: "Toerisme Ads",
              title: "Google Ads Recreatie",
              description: "Bereik bezoekers van Paleis Het Loo, Apenheul en Julianatoren. Slimme campagnes voor accommodaties en horeca tussen Apeldoorn en Hoenderloo.",
              visualTitle: "Attractie bezoekers",
              visualSubtitle: "1M+ per jaar",
              image: keywordResearchImage
            },
            {
              badge: "Lokale Expertise",
              title: "Apeldoorn-Noord Marketing",
              description: "Ken de wijken Berg en Bos, Ugchelen en Beekbergen. Bereik welgestelde bewoners en natuurliefhebbers met gerichte lokale campagnes.",
              visualTitle: "Premium wijken",
              visualSubtitle: "Hoog koopkracht",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers in <span class='bg-[#F7D8FA] px-2 rounded italic'>Assel-Beekbergen</span> groeien online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Veluwe Marketing Specialist <span className="bg-[#F7D8FA] px-2 rounded italic">Assel-Apeldoorn</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van vakantiepark tot manege, van restaurant tot outdoor bedrijf – groei in de groene long van Nederland.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Recreatie & Toerisme */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recreatie & Verblijf</h3>
                <p className="text-gray-600 mb-6">
                  Vakantieparken, campings en B&B\'s tussen Apeldoorn en de Veluwe. Optimaal vindbaar voor natuurzoekers en actieve families.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Camping & bungalowpark SEO</li>
                  <li>✓ Seizoensmarketing outdoor</li>
                  <li>✓ MTB & wandelroute promotie</li>
                  <li>✓ Kröller-Müller bezoekers</li>
                </ul>
              </div>
              {/* Outdoor & Sport */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Assel
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdoor & Sportmarketing</h3>
                <p className="text-gray-600 mb-6">
                  Maneges, fietsverhuur en outdoor bedrijven. Bereik sportievelingen die de Veluwe verkennen vanaf Assel-Beekbergen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Paardensport marketing</li>
                  <li>✓ E-bike verhuur promotie</li>
                  <li>✓ Outdoor activiteiten SEO</li>
                  <li>✓ Sportieve doelgroepen</li>
                </ul>
              </div>
              {/* Lokale Bedrijven */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale Diensten Apeldoorn-Noord</h3>
                <p className="text-gray-600 mb-6">
                  Bouwbedrijven, hoveniers en dienstverleners voor de welgestelde wijken Berg en Bos, Ugchelen en omgeving.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Villa & tuin marketing</li>
                  <li>✓ Premium dienstverlening</li>
                  <li>✓ Welgestelde doelgroep</li>
                  <li>✓ Apeldoorn-Noord focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Groei tussen <span className="bg-[#F7D8FA] px-2 rounded italic">Apeldoorn en de Veluwe</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Laten we bespreken hoe jouw bedrijf optimaal profiteert van de unieke ligging bij Assel.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Veluwe & Apeldoorn-Noord</h3>
              <p className="text-gray-600">
                <strong>Apeldoorn:</strong> Beekbergen • Ugchelen • Berg en Bos • Hoog Soeren • Hoenderloo<br />
                <strong>Veluwe:</strong> Loenen • Eerbeek • Radio Kootwijk • Otterlo • Kootwijk<br />
                <strong>Attracties:</strong> Kröller-Müller • Paleis Het Loo • Apenheul • Julianatoren
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}