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

export default function MarketingVaals() {
  // Lokale Vaals reviews - drielandenpunt gemeente
  const dutchReviews = [
    { name: 'Hotel Drielandenpunt', rating: 5, text: 'Ons hotel bij het Drielandenpunt ontvangt nu boekingen uit heel Europa. Perfecte SEO voor "hotel Drielandenpunt Nederland"!' },
    { name: 'Restaurant Vijlenerberg', rating: 5, text: 'Sinds de marketing komen Duitse en Belgische gasten speciaal voor onze Limburgse keuken. Top vindbaar in 3 landen!' },
    { name: 'Fietsenverhuur Vaals', rating: 4.5, text: 'Onze fietsverhuur profiteert enorm van de Amstel Gold Race route. De Google Ads brengen het hele jaar door wielrenners.' },
    { name: 'Wellness De Cauberg', rating: 5, text: 'Ons wellness center trekt nu gasten uit Aken, Luik én Maastricht. Internationale SEO die echt werkt!' },
    { name: 'Camping Cottesserhoeve', rating: 5, text: 'Onze camping is nu het hele seizoen volgeboekt met toeristen uit Nederland, België en Duitsland. Geweldige online strategie!' },
    { name: 'Souvenirwinkel Viergrenzenweg', rating: 5, text: 'Bij het hoogste punt van Nederland verkopen we nu 3x meer. Toeristen vinden ons perfect online!' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Pannenkoekenhuis Vaals', rating: 5, text: 'Wandelaars van de GR5 route vinden ons restaurant nu moeiteloos. De lokale SEO heeft onze omzet verdubbeld!' },
    { name: 'Taxi Service Euregio', rating: 4.5, text: 'Als grensoverschrijdende taxidienst worden we nu gevonden in 3 landen. Perfect voor ritten naar Aken en Luik!' },
    { name: 'Vakantiewoningen Lemiers', rating: 5, text: 'Onze vakantiehuizen in Lemiers zijn het hele jaar door bezet. Duitse en Belgische gasten boeken maanden vooruit!' },
    { name: 'Golfbaan Het Rijk van Margraten', rating: 5, text: 'Golfers uit de hele Euregio vinden onze baan nu online. Structurele groei in internationale greenfee spelers!' },
    { name: 'Bakkerij Holset', rating: 5, text: 'Onze Limburgse vlaai wordt nu zelfs in Aken besteld. De grensoverschrijdende marketing werkt fantastisch!' },
    { name: 'Outdoor Activiteiten Vaals', rating: 4.5, text: 'Van mountainbiken tot paragliden - internationale sporters vinden ons nu perfect. Agenda staat vol met activiteiten!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Vaals | Marketing Bureau Drielandenpunt | Limburg</title>
        <meta
          name="description"
          content="SEO Specialist Vaals ✓ Grensoverschrijdende marketing Nederland-België-Duitsland ✓ Drielandenpunt toerisme ✓ Bereik 10.000 inwoners + Euregio ✓ Bel nu!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/vaals" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Vaals: waar drie landen samenkomen en kansen groeien</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">10.000 inwoners, grenzeloze mogelijkheden</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Vaals: het zuidelijkste puntje van Nederland op het Drielandenpunt.</strong><br />
              Uniek gelegen waar Nederland, België en Duitsland elkaar ontmoeten, op slechts 5 km van Aken (Duitsland) en 25 km van Maastricht. Met het beroemde Drielandenpunt (322 meter, hoogste punt van Nederland), de Vaalserberg en jaarlijks 1 miljoen bezoekers, biedt Vaals ongekende internationale kansen. Als <b>SEO specialist Vaals</b> help ik de 600+ lokale ondernemers profiteren van deze unieke drielandenpositie in de Euregio Maas-Rijn.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Internationale SEO: Nederland, België & Duitsland</li>
              <li>✓ Google Ads in 3 landen tegelijk</li>
              <li>✓ Profiteer van 1 miljoen Drielandenpunt bezoekers</li>
              <li>✓ <b>Marketing bureau Vaals</b> met Euregio expertise</li>
              <li>✓ Meertalige websites (NL/DE/FR) voor maximaal bereik</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei internationaal vanuit Vaals <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Euregio successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Vaals, Aken, Luik & Euregio Maas-Rijn</p>
            <p className="mt-2 text-xs text-green-600">📞 Grenzenloos bereikbaar: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Vaals - Internationale Groei" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Expert Vaals" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Drielandenmarketing vanuit Vaals"
          subtitle="Van Vaalserberg tot Aken, overal succesvol"
          features={[
            {
              badge: "Internationale SEO",
              title: "Drielandenpunt SEO Strategie",
              description: "Word gevonden in Nederland, België én Duitsland. Unieke SEO aanpak voor de Euregio met focus op toerisme en grensoverschrijdende business.",
              visualTitle: "3 landen bereik",
              visualSubtitle: "1 miljoen bezoekers",
              image: masterSeoImage
            },
            {
              badge: "Google Ads Euregio",
              title: "Grensoverschrijdende Campagnes",
              description: "Target toeristen bij het Drielandenpunt, inwoners van Aken (250.000) en Luik (200.000). Maximaal rendement uit internationale advertenties.",
              visualTitle: "Aken + Luik",
              visualSubtitle: "450K+ mensen",
              image: keywordResearchImage
            },
            {
              badge: "Meertalige Websites",
              title: "International Web Presence",
              description: "Professionele websites in Nederlands, Duits en Frans. Perfect voor het bedienen van de hele Euregio Maas-Rijn vanuit Vaals.",
              visualTitle: "3 talen",
              visualSubtitle: "1 strategie",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Vaalse ondernemers groeien <span class='bg-[#F7D8FA] px-2 rounded italic'>grensoverschrijdend</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Internationale Marketing vanuit <span className="bg-[#F7D8FA] px-2 rounded italic">Vaals</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale horeca tot internationale toerisme – groei mee in de Euregio Maas-Rijn.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Vaals */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Vaals</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten in Vaals, Lemiers, Vijlen én grensoverschrijdend in Aken en Luik.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top voor "Drielandenpunt"</li>
                  <li>✓ Duitse SEO voor Aken markt</li>
                  <li>✓ Belgische SEO voor Luik</li>
                  <li>✓ Google Mijn Bedrijf 3 landen</li>
                </ul>
              </div>
              {/* Google Ads Euregio */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Euregio specialist
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Internationale Google Ads</h3>
                <p className="text-gray-600 mb-6">
                  Adverteer in Nederland, Duitsland en België tegelijk. Bereik miljoenen in de Euregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Drielandenpunt toeristen</li>
                  <li>✓ Aken shopping publiek</li>
                  <li>✓ Amstel Gold Race fans</li>
                  <li>✓ Wellness & recreatie</li>
                </ul>
              </div>
              {/* Complete Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">360° Euregio Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Complete grensoverschrijdende strategie voor maximale groei in drie landen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Meertalige websites (NL/DE/FR)</li>
                  <li>✓ Internationale social media</li>
                  <li>✓ Cross-border e-mail flows</li>
                  <li>✓ Euregio content strategie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar voor grenzeloze groei vanuit <span className="bg-[#F7D8FA] px-2 rounded italic">Vaals</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Op het Drielandenpunt waar kansen samenkomen – start jouw internationale succes vandaag.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direkter Kontakt</h3>
                <p className="text-gray-600 mb-4">Bespreek jouw internationale groeikansen in de Euregio.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp International</h3>
                <p className="text-gray-600 mb-4">Contact in Nederlands, Deutsch of English – wie du willst!</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Vaals & Euregio Maas-Rijn</h3>
              <p className="text-gray-600">
                Vaals-centrum • Lemiers • Vijlen • Holset • Cottessen • Raren • Plus internationaal bereik: Aken (DE) • Kelmis (BE) • Plombières (BE) • Gulpen-Wittem • Mechelen • Eys • Simpelveld • Bocholtz • Maastricht • Heerlen • Kerkrade
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}