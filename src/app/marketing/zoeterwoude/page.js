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

export default function MarketingZoeterwoude() {
  // Lokale Zoeterwoude reviews - Heineken dorp nabij Leiden
  const dutchReviews = [
    { name: 'Heineken Experience Tours', rating: 5, text: 'Onze tours naar de Heineken brouwerij worden nu internationaal gevonden. Perfecte SEO voor "Heineken brewery tour Netherlands"!' },
    { name: 'Restaurant De Vink', rating: 5, text: 'Ons terras aan de Oude Rijn trekt nu gasten uit heel Zuid-Holland. We staan bovenaan voor "restaurant aan het water Leiden"!' },
    { name: 'Bouwbedrijf Zoeterwoude-Dorp', rating: 4.5, text: 'Als lokale aannemer krijgen we nu opdrachten uit Leiden, Alphen en Zoetermeer. De Google Ads campagne levert constant nieuwe projecten.' },
    { name: 'Jachthaven Zoeterwoude', rating: 5, text: 'Onze haven aan de Grecht wordt perfect gevonden door watersporters. Ligplaatsen zijn nu het hele seizoen volgeboekt!' },
    { name: 'Kwekerij Het Groene Hart', rating: 5, text: 'Sinds de online marketing komen tuincentra uit de hele Randstad bij ons inkopen. Fantastische groei in B2B verkoop!' },
    { name: 'Fysiotherapie Rijndijk', rating: 5, text: 'Onze praktijk in Zoeterwoude-Rijndijk bereikt nu patiënten uit beide dorpskernen plus Leiderdorp. Agenda zit vol!' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Transport Zoeterwoude', rating: 5, text: 'Met onze ligging bij de A4 en N11 zijn we nu dé logistieke partner voor heel Holland-Rijnland. Marketing die werkt!' },
    { name: 'Sportcomplex De Does', rating: 4.5, text: 'Onze voetbalclub trekt nu jeugdleden uit Zoeterwoude, Stompwijk en Leiden-Zuid. Perfect online bereik!' },
    { name: 'Bakkerij Van der Geest', rating: 5, text: 'Mensen uit Leiden komen speciaal voor onze Zoeterwoudse molenkoeken. De lokale SEO heeft onze omzet verdubbeld!' },
    { name: 'Installateur Weipoort', rating: 5, text: 'Voor spoedklussen in Weipoort en omgeving worden we direct gevonden. Game changer voor ons familiebedrijf!' },
    { name: 'Manege Zoeterwoude', rating: 4.5, text: 'Onze manege tussen de weilanden trekt nu ruiters uit de hele regio. De online vindbaarheid is geweldig verbeterd.' },
    { name: 'Camping De Oude Rijn', rating: 5, text: 'Toeristen die het Groene Hart bezoeken vinden ons perfect. Bezettingsgraad gestegen naar 85% in het seizoen!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Zoeterwoude | Marketing Bureau Groene Hart | Heineken</title>
        <meta
          name="description"
          content="SEO Specialist Zoeterwoude ✓ Online groeien nabij Leiden ✓ Profiteer van Heineken brouwerij bezoekers ✓ Bereik 8.500 inwoners + regio ✓ Bel direct!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/zoeterwoude" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Zoeterwoude: waar Heineken brouwt en ondernemers groeien</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">8.500 inwoners, wereldwijde bekendheid</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Zoeterwoude: strategisch gelegen tussen Leiden en het Groene Hart.</strong><br />
              Wereldberoemd door de Heineken brouwerij (sinds 1864) en gelegen op slechts 5 km van Leiden, biedt Zoeterwoude unieke zakelijke kansen. Met twee dorpskernen - Zoeterwoude-Dorp en Zoeterwoude-Rijndijk - langs de Oude Rijn, plus bedrijventerreinen Grote Polder en Oosthoutlaan, is dit dé plek waar traditie en moderne business samenkomen. Als <b>SEO specialist Zoeterwoude</b> help ik de 450+ lokale bedrijven profiteren van de 400.000 jaarlijkse Heineken bezoekers.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Zoeterwoude: top posities Zuid-Holland</li>
              <li>✓ Google Ads: bereik Leiden, Alphen & Zoetermeer</li>
              <li>✓ Profiteer van Heineken brouwerij toerisme</li>
              <li>✓ <b>Marketing bureau Zoeterwoude</b> met regionale expertise</li>
              <li>✓ Websites die lokaal én internationaal scoren</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start jouw groei in Zoeterwoude <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk succescases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Zoeterwoude, Leiden & Holland-Rijnland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Zoeterwoude - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Zoeterwoude" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Online excelleren vanuit Zoeterwoude"
          subtitle="Van Heineken tot Groene Hart, overal zichtbaar"
          features={[
            {
              badge: "SEO Zoeterwoude",
              title: "Lokale & Toeristische SEO",
              description: "Word gevonden door locals, Heineken bezoekers én zakelijke klanten uit Leiden en omstreken. Dubbel bereik, dubbele groei.",
              visualTitle: "Heineken effect",
              visualSubtitle: "400K bezoekers",
              image: masterSeoImage
            },
            {
              badge: "Google Ads Specialist",
              title: "Gerichte Regio Campagnes",
              description: "Target inwoners van Leiden (127.000), toeristen bij Heineken én bedrijven in Holland-Rijnland. Maximaal rendement gegarandeerd.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Hele regio",
              image: keywordResearchImage
            },
            {
              badge: "Website & Conversie",
              title: "Internationale Allure",
              description: "Een website die past bij Zoeterwoude: lokaal geworteld, internationaal georiënteerd. Perfect voor B2B én B2C succes.",
              visualTitle: "Meer business",
              visualSubtitle: "Wereldklasse",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Zoeterwoudse bedrijven groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Zoeterwoude</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale dienstverlener tot internationale speler – groei mee met Heineken's thuisbasis.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Zoeterwoude */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Zoeterwoude</h3>
                <p className="text-gray-600 mb-6">
                  Domineer Google in Zoeterwoude-Dorp, Rijndijk, Weipoort en heel Holland-Rijnland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top voor "bedrijf Zoeterwoude"</li>
                  <li>✓ Heineken gerelateerde zoekwoorden</li>
                  <li>✓ Oude Rijn recreatie SEO</li>
                  <li>✓ Google Mijn Bedrijf optimaal</li>
                </ul>
              </div>
              {/* Google Ads Holland-Rijnland */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in de regio
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Campagnes</h3>
                <p className="text-gray-600 mb-6">
                  Bereik Leiden, Leiderdorp, Alphen aan den Rijn en heel Zuid-Holland met slimme advertenties.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Target Heineken bezoekers</li>
                  <li>✓ B2B campagnes Grote Polder</li>
                  <li>✓ Recreatie & toerisme ads</li>
                  <li>✓ Meet elke conversie</li>
                </ul>
              </div>
              {/* Complete Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">360° Marketing Strategie</h3>
                <p className="text-gray-600 mb-6">
                  Complete online aanpak voor groei van Zoeterwoude naar (inter)nationaal niveau.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Moderne, snelle websites</li>
                  <li>✓ Social media management</li>
                  <li>✓ Content marketing strategie</li>
                  <li>✓ E-mail automatisering</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om te groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">Zoeterwoude</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Net als Heineken wereldwijd succesvol vanuit Zoeterwoude – start jouw online groei vandaag.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek jouw groeikansen in Zoeterwoude en regio Leiden.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Snel een vraag? App voor direct antwoord en advies.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Zoeterwoude & Holland-Rijnland</h3>
              <p className="text-gray-600">
                Zoeterwoude-Dorp • Zoeterwoude-Rijndijk • Weipoort • Gelderswoude • Grote Polder • Plus bereik in: Leiden • Leiderdorp • Stompwijk • Hoogmade • Alphen aan den Rijn • Hazerswoude • Koudekerk • Roelofarendsveen • Oude Wetering
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}