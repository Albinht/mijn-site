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

export default function MarketingGroningen() {
  // Lokale Groningen reviews
  const dutchReviews = [
    { name: 'Energiekoncern Noord-Nederland', rating: 5, text: 'Door gerichte B2B marketing domineren we nu de Noord-Nederlandse energiemarkt. Van gaswinning tot duurzame energie - onze expertise wordt erkend door gemeenten en bedrijven in heel de regio.' },
    { name: 'Restaurant Centrum Groningen', rating: 5, text: 'Dankzij lokale SEO krijgen we nu reserveringen van zowel studenten als families uit de wijde omtrek. Van Grote Markt tot Noorderplantsoen - ons restaurant zit elke avond vol.' },
    { name: 'TechStart Groningen RUG', rating: 5, text: 'Als spin-off van de Rijksuniversiteit hadden we wereldwijde ambities maar lokale zichtbaarheid nodig. Nu trekken we internationale partners en investeerders naar Noord-Nederland.' },
    { name: 'Zorgverlening Groningen Noord', rating: 4.5, text: 'Voor specialistische zorg in Paddepoel, Selwerd en omliggende dorpen worden we nu gevonden door patiënten uit Haren, Ten Boer, Bedum en zelfs Friesland.' },
    { name: 'Studentenhuisvesting Groningen', rating: 5, text: 'Met 60.000+ studenten is concurrentie fel. Nu domineren we zoekresultaten voor studentenkamers en worden we als eerste gevonden door internationale studenten en hun ouders.' },
    { name: 'Evenementenlocatie Martiniplaza', rating: 5, text: 'Onze evenementenhal trekt nu concerten, congressen en bedrijfsevenementen uit heel Noord-Nederland. Online marketing heeft onze boekingen verdubbeld sinds corona.' },
  ]
  const dutchMoreReviews = [
    { name: 'Agrarisch Bedrijf Groninger Ommelanden', rating: 5, text: 'Als familiebedrijf met internationale afzetmarkten zijn we nu online vindbaar voor klanten van Hamburg tot Stockholm. Onze biologische producten worden wereldwijd erkend.' },
    { name: 'Transport Groningen-Duitsland', rating: 4.5, text: 'Voor logistiek tussen Nederland en Duitsland via de A7 zijn we nu de go-to partner. B2B-leads uit Hamburg, Bremen en heel Noord-Duitsland stromen binnen.' },
    { name: 'Hotel Groningen Centrum', rating: 5, text: 'Zakelijke gasten naar de universiteit, toeristen voor Martini Tower en families voor attracties - onze bezetting is gestegen met 85% door gerichte online marketing.' },
    { name: 'Consultancy Energie Transitie', rating: 4.5, text: 'Met onze expertise in gaswinning en duurzame energie adviseren we nu gemeenten en bedrijven in heel Europa. Van lokale specialist naar internationale autoriteit.' },
    { name: 'Detailhandel Grote Markt', rating: 5, text: 'In het historische centrum concurreren we met online shopping. Nu trekken we klanten uit Assen, Emmen, Leeuwarden en heel Noord-Nederland naar onze fysieke winkel.' },
    { name: 'Fitness Groningen Universitair', rating: 5, text: 'Met student-populatie van 60k+ en veel internationals was online marketing cruciaal. Nu hebben we wachtlijsten en expanding naar Haren en Zernike campus.' },
    { name: 'Kunstacademie Minerva', rating: 4.5, text: 'Voor creatieve opleidingen concurreren we internationaal. Nu trekken we studenten uit Scandinavië, Duitsland en heel Europa naar onze Groningse kunsteducatie.' },
    { name: 'Tandartspraktijk Groningen Zuid', rating: 5, text: 'Voor specialistische tandheelkunde trekken we nu patiënten uit heel Noord-Nederland. Van Winsum tot Stadskanaal - onze expertise wordt breed erkend.' },
    { name: 'IT Dienstverlening RUG', rating: 4.5, text: 'Als IT-partner van de universiteit en lokale bedrijven groeiden we uit tot regionale speler. Nu bedienen we klanten van Delfzijl tot Hoogeveen met enterprise IT-oplossingen.' },
    { name: 'Cateringbedrijf Groningen Events', rating: 5, text: 'Van studentenfeesten tot universitaire gala\'s - ons cateringbedrijf werd de preferred partner door sterke online aanwezigheid en lokale SEO dominantie.' },
    { name: 'Reisbureau Groningen International', rating: 4.5, text: 'Specialisatie in studentenreizen, onderzoeksuitwisselingen en academische conferenties maakte ons marktleider. Online marketing opende deuren naar heel Noord-Europa.' },
    { name: 'Advocatenkantoor Groningen Centrum', rating: 5, text: 'Voor juridische expertise in energierecht, vastgoed en bedrijfsrecht zijn we nu de autoriteit in Noord-Nederland. Klanten uit Duitsland en Scandinavië zoeken ons op.' }
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Digital Marketing Bureau Groningen | SEO Specialist Noord-Nederland Universiteitstad</title>
        <meta
          name="description"
          content="Marketing specialist Groningen, hoofdstad van het Noorden. Expert in studentenmarketing, energie-sector, universitaire omgeving en Noord-Nederlandse bedrijfsvoering."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/groningen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Groningen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Hoofdstad van het Noorden Expert</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van Martini Tower tot Zernike Campus - Groningen als noordelijke digitale hub</strong><br />
              Als marketing specialist in Nederland's noordelijke hoofdstad (230.000 inwoners + 60.000 studenten) begrijp ik de unieke dynamiek van Groningen. Deze universiteitstad met jong publiek, energie-erfgoed en internationale oriëntatie biedt ongekende mogelijkheden. Ik help bedrijven domineren in deze diverse, kennisintensieve markt waar traditionele sectoren en innovatie samenkomen.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Dominantie in studentenmarketing en universitaire sector</li>
              <li>✓ Expertise in energie-sector en duurzame transitie marketing</li>
              <li>✓ Specialisatie in jong demografisch gebied (60k+ studenten)</li>
              <li>✓ Kennis van regio: Haren, Ten Boer, Bedum, Zuidhorn, Winsum</li>
              <li>✓ Focus op internationale universitaire gemeenschap</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei in Groningen <span>→</span>
              </Button>
              <Button variant="secondary" as="a" href="/work-with-me">
                Bekijk Noord Cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Groningen, Noord-Nederland & universitaire marketing</p>
            <p className="mt-2 text-xs text-green-600">📍 Lokaal aanwezig in Hoofdstad van het Noorden, regionaal actief</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Resultaten Groningen Noord-Nederland" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Groningen Noord" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Groningen marketing die Noord-Nederland overtreft"
          subtitle="Van Martini Tower tot energie-transitie - jouw digitale dominantie in het Noorden"
          features={[
            {
              badge: "Universitair SEO",
              title: "Studentenmarketing & Academische SEO",
              description: "In een stad met 60.000+ studenten uit 120 landen positioneer ik jouw bedrijf als dé autoriteit voor deze unieke doelgroep. Perfect voor studentenhuisvesting, horeca, retail en dienstverlening die internationale studenten en academici willen bereiken.",
              visualTitle: "Student Leadership",
              visualSubtitle: "Universitaire dominantie",
              image: masterSeoImage
            },
            {
              badge: "Energie Marketing",
              title: "Energie-sector & Duurzaamheid Campaigns",
              description: "Target bedrijven en consumenten in de energie-transitie van gas naar duurzaam. Van traditionele energiewinning tot innovatieve duurzame oplossingen - bereik beslissers in heel Noord-Nederland die naar Groningse expertise zoeken.",
              visualTitle: "Energy Transition",
              visualSubtitle: "Sector authority",
              image: keywordResearchImage
            },
            {
              badge: "Noord DNA",
              title: "Regionale Websites Noord-Nederland",
              description: "Websites die Groningen's unieke positie als noordelijke kennisstad uitstralen. Van startup pitch-platforms tot traditionele familiebedrijven - ik vertaal noordelijke nuchterheid naar overtuigende digitale ervaringen met internationale allure.",
              visualTitle: "Regional & Global",
              visualSubtitle: "Noord-Nederlandse focus",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Groningen & Noord-Nederland</span> domineren online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor <span className="bg-[#F7D8FA] px-2 rounded italic">Groningen</span> ondernemers
              </h2>
              <p className="text-xl text-gray-600">
                Van universiteitscampus tot energiebedrijven - ik ken de uitdagingen van ondernemen in Nederland's noordelijke hoofdstad
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Student & University SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Universitaire SEO Groningen</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten voor student-gerelateerde termen, universitaire diensten en internationale queries. Perfect voor bedrijven die 60.000+ studenten en academici willen bereiken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Studentenhuisvesting en campus-gerelateerde SEO</li>
                  <li>✓ Meertalige content voor internationale studenten</li>
                  <li>✓ Academische dienstverlening optimalisatie</li>
                  <li>✓ Seizoensgebonden campagnes (intro, tentamens)</li>
                </ul>
              </div>
              {/* Regional Business Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Regionale Focus Noord
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Noord-Nederland</h3>
                <p className="text-gray-600 mb-6">
                  Bereik klanten in heel Noord-Nederland en grensstreek Duitsland. Van Delfzijl tot Hoogeveen, van Leeuwarden tot Emmen - jouw advertenties verschijnen waar noordelijke klanten zoeken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Regionale targeting Noord-Nederland + Duitsland</li>
                  <li>✓ Seizoensgebonden campagnes (student-cycli)</li>
                  <li>✓ B2B targeting energiesector en agrarische bedrijven</li>
                  <li>✓ Toerisme en cultuur marketing (Noorderzon, etc.)</li>
                </ul>
              </div>
              {/* Energy Sector Websites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Energie-sector Websites</h3>
                <p className="text-gray-600 mb-6">
                  Websites die Groningen's unieke positie in de energietransitie benadrukken. Van traditionele gaswinning tot innovatieve duurzame oplossingen - technische expertise gecombineerd met toegankelijke communicatie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ B2B energie en duurzaamheid portals</li>
                  <li>✓ Overheids- en gemeentelijke tenders</li>
                  <li>✓ Technische content met SEO-focus</li>
                  <li>✓ Compliance en veiligheidsstandaarden</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom kiezen voor een <span className="bg-[#F7D8FA] px-2 rounded italic">marketing specialist</span> die Groningen's unieke positie kent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Universitaire omgeving & jong publiek expertise</h3>
                <p className="text-gray-600">
                  Groningen is uniek door de concentratie van 60.000+ studenten uit 120 landen, de Rijksuniversiteit als kennisinstituut, en een jong demografisch profiel. Met Zernike Campus, Noorderplantsoen en levendige uitgaansscene heeft de stad een eigen dynamiek. Ik weet precies hoe je deze unieke doelgroep online optimaliseert voor zowel B2C als B2B-success.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Regionale & energie-sector kennis</h3>
                <p className="text-gray-600">
                  Van Paddepoel's studentenwijken tot de Ommelanden's agrarische bedrijven - ik ken de demografische en economische karakteristieken van Noord-Nederland. Of je nu universitaire dienstverlening, energie-transitie bedrijven of toeristische attracties wilt promoten, ik ontwikkel de strategie die past bij jouw doelgroep en de noordelijke mentaliteit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">marketing in Groningen</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is studentenmarketing anders in Groningen dan andere steden?</summary>
                <p className="mt-4 text-gray-600">
                  Groningen heeft proportioneel de grootste studentenpopulatie van Nederland (60k+ op 230k inwoners). Deze studenten komen uit 120 landen, hebben hoge koopkracht en zijn 4-6 jaar aanwezig. Daarom focus ik op meertalige content, seizoensgebonden campagnes (intro, tentamens) en internationale targeting. Van huisvesting tot horeca - alles draait om deze unieke doelgroep.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke bedrijven in Groningen hebben het meest baat bij digitale marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Studentenhuisvesting, horeca rond campus, retail in binnenstad, en dienstverleners voor jong publiek profiteren het meest. Ook energie-gerelateerde bedrijven (transitie van gas naar duurzaam), toeristische attracties en regionale B2B-dienstverleners. De internationale oriëntatie en jonge demografie maken premium marketing-investeringen zeer rendabel.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost digitale marketing voor bedrijven in Groningen?</summary>
                <p className="mt-4 text-gray-600">
                  Voor studentgerichte bedrijven in Groningen start marketing vanaf €800 per maand vanwege seizoenspatronen en hoge concurrentie. Dit is inclusief Google Ads, social media en lokale SEO. B2B-bedrijven in energiesector investeren €1500-€3000 per maand. ROI is vaak binnen 2-4 maanden positief door hoge spending power studenten en zakelijke klanten.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe verschilt marketing voor Groningse bedrijven van andere universiteitssteden?</summary>
                <p className="mt-4 text-gray-600">
                  Groningen marketing vereist focus op internationale studenten (120 nationaliteiten), meertalige content en begrip van noordelijke mentaliteit. We targeten niet alleen Nederland, maar ook Duitse grensstreek en Scandinavische studenten. Content moet academisch niveau combineren met toegankelijkheid. Seizoenspatronen zijn extremer dan andere studentensteden.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Kunnen jullie ook helpen met marketing voor de energie-transitie sector?</summary>
                <p className="mt-4 text-gray-600">
                  Absoluut! Groningen staat centraal in Nederland's energietransitie van gas naar duurzaam. We specialiseren in B2B marketing voor energiebedrijven, overheidstenders en duurzaamheidsprojecten. Van traditionele gaswinning tot innovatieve groene oplossingen - we kennen de sector en regelgeving.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Helpen jullie ook met regionale marketing voor heel Noord-Nederland?</summary>
                <p className="mt-4 text-gray-600">
                  Ja, we richten ons op heel Noord-Nederland: van Delfzijl tot Hoogeveen, van Leeuwarden tot Emmen. Ook Duitse grensstreek (Leer, Papenburg) behoort tot ons werkgebied. Perfect voor bedrijven die vanuit Groningen de gehele noordelijke regio willen bedienen met regionale campaigns en lokale SEO-strategieën.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Werken jullie samen met de Rijksuniversiteit en onderwijsinstellingen?</summary>
                <p className="mt-4 text-gray-600">
                  We werken regelmatig samen met spin-offs van de RUG, Hanzehogeschool en onderwijsgerelateerde bedrijven. Van startup marketing tot alumni-netwerk activaties - we begrijpen de unique challenges van academische marketing en kennisoverdracht in de universitaire omgeving van Groningen.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Groningen & Noord-Nederland</span> te domineren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Martini Tower tot Zernike Campus - ik help je groeien in de noordelijke kenniseconomie
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Liever direct schakelen? Bel voor een gratis strategiegesprek over jouw groei in de noordelijke markt.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Snel een vraag? Stuur een WhatsApp en krijg binnen een uur antwoord.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Groningen - Online Marketing Noord-Nederland & Omgeving</h3>
              <p className="text-gray-600">
                Groningen • Haren • Ten Boer • Bedum • Zuidhorn • Winsum • Eelde • Hoogezand • Sappemeer • Delfzijl • Appingedam • Veendam • Stadskanaal • Assen • Emmen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}