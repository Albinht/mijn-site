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

export default function MarketingMaastricht() {
  // Lokale Maastricht reviews - Europese Hoofdstad van Limburg
  const dutchReviews = [
    { name: 'Restaurant Vrijthof', rating: 5, text: 'Op het iconische Vrijthof krijgen we nu internationale toeristen en locals. De historische setting en online marketing werken perfect samen!' },
    { name: 'Advocaat Maastricht Centrum', rating: 5, text: 'Ons kantoor in de binnenstad bedient nu cliënten uit heel de Euregio. De internationale uitstraling van Maastricht helpt enorm.' },
    { name: 'Tandarts Wyck', rating: 5, text: 'In de chique wijk Wyck hebben we veel internationale patiënten. Door SEO worden we gevonden door expats en lokale families.' },
    { name: 'Luxe Hotel Sint Pietersberg', rating: 4.5, text: 'Bij de grotten en kastelen krijgen we nu meer boekingen van cultuurliefhebbers uit heel Europa. Google Ads werkt internationaal!' },
    { name: 'IT Consultancy Ceramique', rating: 5, text: 'In de moderne wijk Ceramique bedienen we multinationals. Onze B2B SEO trekt klanten uit Nederland, België en Duitsland.' },
    { name: 'Bouwbedrijf Amby', rating: 5, text: 'Amby groeit snel met veel nieuwbouw. We staan bovenaan voor "aannemer Maastricht" en krijgen opdrachten uit heel Limburg!' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Brusselsestraat', rating: 5, text: 'In het hart van de Brusselsestraat veel shoppers en toeristen. Onze salon profiteert perfect van de drukte en online zichtbaarheid.' },
    { name: 'Fysiotherapie Malberg', rating: 4.5, text: 'Malberg is een groene woonwijk. Onze praktijk wordt nu gevonden door patiënten die kwaliteitszorg zoeken in Zuid-Limburg.' },
    { name: 'Makelaar Daalhof', rating: 5, text: 'Daalhof heeft veel karakteristieke woningen. Door marketing zijn onze verkopen gestegen - internationale kopers vinden ons nu!' },
    { name: 'Autogarage Limmel', rating: 5, text: 'Limmel ligt strategisch bij de snelwegen. We trekken nu klanten uit Nederland, België en Duitsland voor specialistische services.' },
    { name: 'Schoonheidssalon Heugem', rating: 4.5, text: 'Heugem heeft een dorps karakter binnen de stad. Onze luxe behandelingen worden nu gevonden door klanten uit heel de regio.' },
    { name: 'Installatiebedrijf Borgharen', rating: 5, text: 'Borgharen aan de Maas heeft veel monumenten. Door SEO krijgen we opdrachten voor restauratie en duurzame renovaties.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Maastricht | Marketing Bureau & Online Marketing Maastricht</title>
        <meta
          name="description"
          content="SEO Specialist Maastricht inschakelen? Kies voor hét marketing bureau in Maastricht. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/maastricht" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Maastricht: Europese Poort van Nederland</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">120.000 Maastrichtenaren wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Maastricht: waar Nederlandse charme en Europese grandeur samenvloeien.</strong><br />
              Van het majestueuze Vrijthof met de Sint-Servaasbasiliek tot de moderne wijk Ceramique, van de historische Wyck tot internationale hotspots - Maastricht ademt cultuur, luxury en internationale verbinding. Met 120.000+ inwoners als Europese hoofdstad van Limburg biedt Maastricht ondernemers unieke kansen in een kosmopolitische omgeving. Als <b>SEO specialist Maastricht</b> help ik ambitieuze bedrijven de digitale mogelijkheden van deze bijzondere Europese stad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Maastricht: zichtbaar in de Euregio</li>
              <li>✓ Google Ads: internationaal bereik naar 120.000+ inwoners</li>
              <li>✓ Speciaal voor ambitieuze bedrijven in Zuid-Limburg</li>
              <li>✓ <b>SEO Maastricht</b> met focus op Europese markt</li>
              <li>✓ Websites die passen bij Maastricht's internationale allure</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Maastricht cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Maastricht & de Euregio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Maastricht - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Maastricht" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Maastricht met doelgerichte marketing"
          subtitle="Digitale groei voor de Europese hoofdstad van Limburg"
          features={[
            {
              badge: "SEO Maastricht",
              title: "SEO Specialist Maastricht",
              description: "Maastricht heeft internationale uitstraling en een unieke positie in de Euregio. Ik zorg dat jouw bedrijf opvalt tussen lokale en internationale concurrentie door strategisch bovenaan te staan en klanten aan te trekken uit Nederland, België en Duitsland.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Internationaal zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Maastricht",
              description: "Direct zichtbaar voor 120.000+ Maastrichtenaren plus internationale bezoekers en expats. Adverteer gericht in alle wijken van centrum tot Ceramique en zie direct resultaat in je internationale agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Europees bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Maastricht",
              description: "Luxueuze, professionele websites die passen bij Maastricht's Europese niveau en internationale karakter. Volledig geoptimaliseerd voor de Euregio markt met meertalige mogelijkheden.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Internationale uitstraling",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Maastricht groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Maastricht</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van startende ondernemers tot internationale bedrijven – ik help ambitieuze ondernemers online groeien in de Europese hoofdstad van Limburg.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Maastricht */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Maastricht</h3>
                <p className="text-gray-600 mb-6">
                  In een internationale stad als Maastricht is strategische zichtbaarheid essentieel. Word gevonden door lokale klanten én internationale bezoekers in alle delen van de Euregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Maastricht</li>
                  <li>✓ Internationale SEO strategie</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews in meerdere talen</li>
                </ul>
              </div>
              {/* Google Ads Maastricht */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor internationale bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Maastricht</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 120.000+ Maastrichtenaren plus internationale bezoekers en expats uit België en Duitsland met strategisch gerichte campagnes.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Meertalige advertentiecampagnes</li>
                  <li>✓ Focus op internationale concurrentie</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Europees bereik & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Luxueuze, professionele websites die passen bij Maastricht's internationale niveau en zorgen voor meer conversies uit de hele Euregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Premium design voor internationale markt</li>
                  <li>✓ Meertalige mogelijkheden</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Euregio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Maastricht</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Maastricht?</h3>
                <p className="text-gray-600">
                  Maastricht heeft internationale uitstraling met toerisme, expats en grensverkeer. Met 120.000+ inwoners plus internationale bezoekers is zichtbaarheid cruciaal. Van het historische Vrijthof tot moderne Ceramique - mensen zoeken lokaal maar denken internationaal. Goede SEO vangt beide markten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Maastricht van andere steden?</h3>
                <p className="text-gray-600">
                  Maastricht is uniek door haar Europese karakter, luxe uitstraling, en internationale gemeenschap. De stad trekt cultuurliefhebbers, zakenreizigers en expats. Marketing moet daarom premium zijn, internationaal aantrekkelijk, en rekening houden met meertaligheid - een balans tussen lokale authenticiteit en internationale uitstraling.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Maastricht zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Vrijthof, Markt) voor luxe retail en horeca, Wyck voor exclusieve diensten, Ceramique voor moderne bedrijvigheid, Brusselsestraat voor shopping, Sint Pietersberg voor toerisme, en bedrijventerreinen voor B2B. Elke wijk heeft eigen internationale en lokale karakteristieken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Maastricht?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €900-1500 per maand, afhankelijk van internationale ambities. Google Ads beheer vanaf €500 per maand plus advertentiebudget. Websiteprojecten vanaf €3500. Maastricht heeft premium koopkracht en internationale klanten, waardoor investeringen in marketing excellent renderen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook internationale klanten?</h3>
                <p className="text-gray-600">
                  Zeker! Maastricht ligt in de Euregio en trekt bezoekers uit België, Duitsland en heel Europa. Veel bedrijven bedienen de hele regio (Luik, Aken, Hasselt) en internationale markten. SEO kan worden geoptimaliseerd voor meertalige zoekopdrachten en grensoverschrijdende dienstverlening.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Maastricht?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-3 maanden, significante verbetering binnen 4-6 maanden. Google Ads geven directe internationale zichtbaarheid. Maastricht heeft premium concurrentie maar ook hoge koopkracht en internationale vraag, waardoor goede SEO zeer winstgevend kan zijn.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Maastricht?</h3>
                <p className="text-gray-600">
                  Luxe horeca en hotels, cultuur en toerisme, internationale zakelijke dienstverlening, gezondheidszorg en wellness, onderwijs en training, kunst en antiek, en premium retail. Maastricht's internationale karakter en koopkracht bieden kansen voor hoogwaardige diensten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Maastricht?</h3>
                <p className="text-gray-600">
                  Basis social media kun je zelf doen, maar Maastricht's internationale markt vereist expertise in meertalige SEO, internationale concurrentieanalyse, en premium branding. Voor echte groei in deze unieke markt heb je professionele begeleiding nodig die de lokale én internationale dynamiek begrijpt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Maastricht</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de Europese hoofdstad van Limburg – altijd eerlijk advies en internationale expertise.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Maastricht - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Maastricht Centrum • Vrijthof • Wyck • Ceramique • Brusselsestraat • Malberg • Daalhof • Amby • Limmel • Heugem • Borgharen • Sint Pietersberg • Heerlen • Sittard • Valkenburg • Aken • Luik • Hasselt
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}