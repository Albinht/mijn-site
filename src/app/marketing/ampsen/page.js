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

export default function MarketingAmpsen() {
  // Authentieke Ampsen reviews met Achterhoek context
  const dutchReviews = [
    { name: 'Melkveehouderij Ampsen', rating: 5, text: 'Als kleine buurtschap tussen Lochem en Goor bereiken we nu klanten voor onze boerderijwinkel uit de hele regio. Van Diepenheim tot Laren komen ze voor verse zuivel.' },
    { name: 'Loonbedrijf Achterhoek-Twente', rating: 5, text: 'Vanuit Ampsen bedienen we boeren in heel Lochem en Hof van Twente. Via Google vinden agrarische bedrijven uit Markelo en Borculo ons perfect.' },
    { name: 'Hoveniersbedrijf De Berkel', rating: 5, text: 'We onderhouden landgoederen rond Ampsen zoals Huis Verwolde in Laren. Online worden we nu gevonden door villa-eigenaren uit heel de Achterhoek.' },
    { name: 'Timmerbedrijf Ampsen-Lochem', rating: 5, text: 'Restauratie van boerderijen in de buurtschap én nieuwbouw in Lochem-Zuid. De combinatie traditioneel vakmanschap en moderne marketing werkt uitstekend.' },
    { name: 'Paardenhouderij Klein Dochteren', rating: 5, text: 'Onze locatie tussen Lochem en Markelo trekt nu ruiters uit heel Hof van Twente. De manegelessen zitten vol dankzij goede online vindbaarheid.' },
    { name: 'Installateur Berkelstreek', rating: 4.5, text: 'Van oude boerderijen in Ampsen tot nieuwbouwprojecten in Lochem. Onze 24/7 service wordt gevonden door heel gemeente Lochem.' },
  ]
  const dutchMoreReviews = [
    { name: 'Camping De Achterhoekse Rust', rating: 5, text: 'Toeristen die de Achterhoek verkennen vinden ons plekje bij Ampsen nu online. Van fietsers naar kasteel Verwolde tot wandelaars van het Pieterpad.' },
    { name: 'Agrarisch Adviesbureau Oost', rating: 5, text: 'Vanuit onze basis in Ampsen adviseren we boeren van Lochem tot Hof van Twente. Google Ads voor specifieke landbouwdiensten werkt perfect.' },
    { name: 'Transportbedrijf Berkelland', rating: 4.5, text: 'Veetransport vanuit de kleine kernen naar veemarkten in Laren en Lochem. Via SEO vinden veehouders uit de hele streek ons.' },
    { name: 'Bouwbedrijf Traditioneel', rating: 5, text: 'Gespecialiseerd in karakteristieke Achterhoekse boerderijen. Van Ampsen tot Almen worden we gevonden voor authentieke restauraties.' },
    { name: 'Zorgboerderij Het Kleine Geluk', rating: 5, text: 'Dagbesteding voor ouderen uit Lochem en omgeving. Families uit Goor en Diepenheim vinden ons tussen de rust van het buitengebied.' },
    { name: 'Elektriciën Lochem-Oost', rating: 4.5, text: 'Van moderne stallen in Ampsen tot woonhuizen in Barchem. Heel oostelijk Lochem weet ons te vinden voor elektra werkzaamheden.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Ampsen (Lochem) | Marketing Bureau Achterhoek-Twente Grens</title>
        <meta
          name="description"
          content="Marketing bureau Ampsen bij Lochem. Online marketing voor agrarische bedrijven en MKB in de Achterhoek. SEO specialist voor het buitengebied tussen Lochem en Markelo."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/ampsen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing voor het authentieke buitengebied van Lochem</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Groei waar Achterhoek en Twente elkaar raken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Ampsen: klein maar krachtig in het hart van Oost-Nederland.</strong><br />
              Als <b>SEO specialist Ampsen</b> begrijp ik de dynamiek van deze buurtschap tussen Lochem (10.000 inw.) en Markelo (7.000 inw.). Met slechts 250 inwoners maar strategisch gelegen aan de grens van Achterhoek en Twente, help ik lokale ondernemers - vooral in de agrarische sector - hun reikwijdte te vergroten naar beide regio's.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Specialisme in agrarische marketing (melkvee, akkerbouw, loonwerk)</li>
              <li>✓ Bereik Lochem (10.000 inw.) én Hof van Twente (35.000 inw.)</li>
              <li>✓ Focus op buitengebied tussen Goor, Diepenheim en Laren</li>
              <li>✓ <b>SEO Ampsen-Lochem</b> voor landelijk ondernemers</li>
              <li>✓ Van kleine buurtschap naar regionale zichtbaarheid</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Ampsen, Lochem & Achterhoek-Twente grensgebied</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Ampsen - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Ampsen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van kleine buurtschap naar grote online aanwezigheid"
          subtitle="Waar 250 inwoners een reikwijdte van 50.000+ creëren"
          features={[
            {
              badge: "Agrarisch sterk",
              title: "SEO voor plattelandsondernemers",
              description: "Ampsen ligt in het hart van agrarisch Nederland tussen de Berkel en de Schipbeek. Ik positioneer jouw melkveehouderij, loonbedrijf of agrarische dienstverlening perfect voor boeren uit Lochem, Markelo, Goor en Diepenheim. Met kennis van seizoenen, veemarkten en landbouwtrends.",
              visualTitle: "Landelijk vindbaar",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Twee regio's bereiken",
              title: "Google Ads Achterhoek-Twente",
              description: "Target slim op de grens van twee provincies: Gelderland (Achterhoek) en Overijssel (Twente). Bereik de 10.000 inwoners van Lochem, 35.000 van Hof van Twente, plus het complete buitengebied. Van Laren GLD tot Markelo, van Barchem tot Diepenheim - jouw advertenties vinden de juiste doelgroep.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Authentiek online",
              title: "Websites met streekkarakter",
              description: "Het buitengebied vraagt om authenticiteit. Je website straalt de no-nonsense mentaliteit van de Achterhoek uit, gecombineerd met Twentse nuchterheid. Perfect voor agrarische bedrijven, ambachtelijke ondernemers en recreatie in het coulisselandschap tussen Lochem en Markelo.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer aanvragen",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ampsen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>landelijke marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing voor ondernemend <span className="bg-[#F7D8FA] px-2 rounded italic">Ampsen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van melkveehouderij tot loonbedrijf, van zorgboerderij tot recreatie - 
                marketing die past bij het karakter van het Achterhoeks-Twentse buitengebied.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Ampsen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Buurtschap Ampsen</h3>
                <p className="text-gray-600 mb-6">
                  Kleine kern, grote ambities. Zichtbaar worden voor heel Lochem, Hof van Twente én de agrarische sector in Oost-Nederland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Agrarische SEO (melkvee, akkerbouw)</li>
                  <li>✓ Lochem gemeente dekking (10.000 inw)</li>
                  <li>✓ Hof van Twente bereik (35.000 inw)</li>
                  <li>✓ Plattelandstoerisme keywords</li>
                </ul>
              </div>
              {/* Google Ads Ampsen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Lochem
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Berkelstreek</h3>
                <p className="text-gray-600 mb-6">
                  Bereik boeren tijdens het melkseizoen, toeristen op de fietsroutes en inwoners van Lochem tot Markelo. Seizoensgerichte campagnes met lokale focus.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Agrarische seizoenscampagnes</li>
                  <li>✓ Lochem-Markelo corridor (17.000 inw)</li>
                  <li>✓ Goor-Diepenheim bereik (20.000 inw)</li>
                  <li>✓ Landgoed Verwolde toerisme</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites met boerenverstand</h3>
                <p className="text-gray-600 mb-6">
                  No-nonsense design dat past bij de nuchtere mentaliteit van het Achterhoeks-Twentse platteland. Functioneel, betrouwbaar en resultaatgericht.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Agrarische portfolio's</li>
                  <li>✓ Seizoensgebonden content</li>
                  <li>✓ Route-integratie landgoederen</li>
                  <li>✓ B2B landbouwsector focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Ampsen</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe kan een kleine buurtschap als Ampsen online succesvol zijn?</h3>
                <p className="text-gray-600">
                  Ampsen heeft slechts 250 inwoners, maar ligt strategisch tussen Lochem (10.000 inw.) en Markelo (7.000 inw.). Door je te positioneren als specialist voor het complete buitengebied bereik je een veel grotere markt. Ik focus op de agrarische sector, plattelandstoerisme en authentieke streekproducten - markten waar kleinschaligheid juist een unique selling point is.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een agrarisch bedrijf in Ampsen?</h3>
                <p className="text-gray-600">
                  Voor agrarische ondernemers in het buitengebied start effectieve marketing vanaf €450-700 per maand. Dit omvat lokale SEO voor Lochem en Hof van Twente, Google Mijn Bedrijf voor landelijke vindbaarheid, en basis Google Ads. Voor melkveehouderijen met boerderijwinkels of zorgboerderijen adviseer ik €700-1.200 per maand voor complete online zichtbaarheid.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik zowel Achterhoek als Twente vanuit Ampsen?</h3>
                <p className="text-gray-600">
                  Ampsen ligt precies op de grens van Gelderland (Achterhoek) en Overijssel (Twente). Ik ontwikkel een twee-provincies strategie: content voor Achterhoekse tradities én Twentse cultuur, targeting op beide dialecten en regionale verschillen, en advertenties die inspelen op evenementen in beide regio's zoals de Zwarte Cross en FC Twente wedstrijden.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke lokale zoekwoorden werken voor het buitengebied?</h3>
                <p className="text-gray-600">
                  Effectieve keywords combineren 'Ampsen' met grotere plaatsen: 'loonwerk Lochem', 'melkveehouderij Markelo', 'boerderijwinkel Goor'. Ook streekgebonden termen scoren: 'Berkelstreek', 'Hof van Twente buitengebied', 'Achterhoek Oost'. Seizoenstermen zoals 'maïs hakselen Lochem' (september) of 'kerstbomen Ampsen' (december) genereren piekmomenten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik toeristen naar het kleine Ampsen?</h3>
                <p className="text-gray-600">
                  Ampsen ligt langs prachtige fietsroutes tussen kasteel Verwolde (Laren) en landgoed Weldam (Markelo). Ik positioneer je bedrijf als rustpunt voor fietsers en wandelaars op het Pieterpad. Met content over het coulisselandschap, de Berkel en authentiek boerenleven trek je dagjesmensen uit Zutphen (25km), Deventer (20km) en Hengelo (25km).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om te groeien vanuit <span className="bg-[#F7D8FA] px-2 rounded italic">buurtschap Ampsen</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Marketing die de kracht van het platteland combineert met moderne online strategieën voor Achterhoek en Twente.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Ampsen</h3>
              <p className="text-gray-600">
                <strong>Gemeente Lochem:</strong> Ampsen • Lochem • Laren • Barchem • Almen • Gorssel • Eefde<br/>
                <strong>Hof van Twente:</strong> Markelo • Goor • Diepenheim • Delden • Bentelo • Hengevelde<br/>
                <strong>Regio:</strong> Deventer • Zutphen • Rijssen • Holten • Borculo • Ruurlo
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}