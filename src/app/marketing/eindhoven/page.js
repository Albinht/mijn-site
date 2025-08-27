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

export default function MarketingEindhoven() {
  // Lokale Eindhoven reviews
  const dutchReviews = [
    { name: 'High Tech Systems B.V.', rating: 5, text: 'Door de digitale marketing expertise zijn we nu marktleider in de Brainport regio. Onze innovatieve oplossingen worden gevonden door klanten in heel Europa.' },
    { name: 'Restaurant Dijk9 Eindhoven', rating: 5, text: 'Dankzij lokale SEO krijgen we nu reserveringen uit heel de Tech-regio. Van PSV-wedstrijden tot zakelijke diners - ons restaurant zit altijd vol.' },
    { name: 'TechStart Eindhoven', rating: 5, text: 'Als startup in Strijp-S hadden we moeite met online zichtbaarheid. Nu domineren we de zoekresultaten en trekken we investeerders uit heel Europa.' },
    { name: 'Installatiebedrijf Brainport', rating: 4.5, text: 'Voor slimme woningen in Meerhoven, Woensel en het centrum - we worden nu gevonden door klanten uit Veldhoven, Best en Son en Breugel.' },
    { name: 'Tandartspraktijk High Tech Campus', rating: 5, text: 'Expats en tech-professionals uit de hele regio kiezen nu voor onze praktijk. De online agenda wordt vol geboekt door internationale patiënten.' },
    { name: 'Event Center Strijp-S', rating: 5, text: 'Ons industriële event center trekt nu bedrijfsevenementen van ASML, Philips en andere tech-giants. Online marketing heeft onze boekingen verdrievoudigd.' },
  ]
  const dutchMoreReviews = [
    { name: 'Design Agency Eindhoven', rating: 5, text: 'Als DDW-deelnemer hadden we internationale exposure nodig. Nu werken we voor klanten wereldwijd dankzij de sterke online aanwezigheid.' },
    { name: 'Bike Rental Tech Campus', rating: 4.5, text: 'Studenten en professionals van de High Tech Campus boeken nu online onze e-bikes. De verhuur loopt via de website automatisch.' },
    { name: 'Hotel Eindhoven Centrum', rating: 5, text: 'Zakenreizigers naar Philips, ASML en andere tech-bedrijven boeken nu direct via onze geoptimaliseerde website. Bezetting is gestegen met 75%.' },
    { name: 'Innovation Consultant Brainport', rating: 4.5, text: 'Internationale tech-bedrijven vinden ons nu voor innovatie-advies. Van Silicon Valley tot Shenzhen - onze expertise wordt wereldwijd gezocht.' },
    { name: 'Automotive Supplier Eindhoven', rating: 5, text: 'Voor VDL, DAF en andere automotive partners in de regio zijn we nu de go-to leverancier. Online marketing heeft onze B2B-leads vervijfvoudigd.' },
    { name: 'Catering Philips Stadium', rating: 5, text: 'Van PSV-wedstrijden tot bedrijfsevents - ons catering bedrijf wordt nu geboekt door organisatoren uit heel Noord-Brabant dankzij online vindbaarheid.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Digital Marketing Bureau Eindhoven | SEO Specialist Brainport Tech-regio</title>
        <meta
          name="description"
          content="Marketing specialist in Eindhoven, City of Light. Expert in tech-sector marketing, High Tech Campus, Philips Stadium en innovatie ecosysteem. Brainport focus."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/eindhoven" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Eindhoven</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Brainport Tech Ecosysteem Expert</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van High Tech Campus tot PSV Stadium - Eindhoven als digitale motor</strong><br />
              Als marketing specialist in Nederland's vijfde stad (235.000 inwoners) begrijp ik de unieke dynamiek van Eindhoven. Deze techno-hoofdstad met Philips-erfgoed, Brainport-innovatie en Design-DNA biedt ongekende kansen. Ik help tech-bedrijven, startups en scale-ups domineren in dit competitieve ecosysteem.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Dominantie in tech-sector en B2B zoektermen Brainport</li>
              <li>✓ Expertise in expat marketing en internationale targeting</li>
              <li>✓ Specialisatie in High Tech Campus en Strijp-S bedrijven</li>
              <li>✓ Kennis van regio: Veldhoven, Best, Son en Breugel, Waalre</li>
              <li>✓ Focus op innovatie en design-driven marketing</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei in Eindhoven <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Tech Cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Eindhoven, Brainport Tech Regio & internationale marketing</p>
            <p className="mt-2 text-xs text-green-600">📍 Lokaal aanwezig in City of Light, wereldwijd actief</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Resultaten Eindhoven Tech Sector" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Eindhoven Tech" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Eindhoven tech-marketing die de concurrentie overtreft"
          subtitle="Van High Tech Campus tot PSV Stadium - jouw digitale dominantie in de Brainport"
          features={[
            {
              badge: "Brainport SEO",
              title: "Tech-Sector SEO Dominantie",
              description: "In een ecosysteem waar ASML, Philips en duizenden tech-bedrijven concurreren, positioneer ik jouw organisatie als dé autoriteit. Perfect voor B2B tech, startups en scale-ups die internationale klanten willen bereiken.",
              visualTitle: "Tech Leadership",
              visualSubtitle: "Brainport dominantie",
              image: masterSeoImage
            },
            {
              badge: "Global Tech Ads",
              title: "Internationale B2B Campaigns",
              description: "Target internationale tech-professionals, investors en partners wereldwijd. Van Silicon Valley tot Shenzhen - bereik de juiste beslissers die naar Eindhoven innovatie zoeken.",
              visualTitle: "Global Reach",
              visualSubtitle: "International B2B",
              image: keywordResearchImage
            },
            {
              badge: "Design DNA",
              title: "Innovation-Driven Websites",
              description: "Websites die Eindhoven's design-DNA uitstralen. Van startup pitch-decks tot enterprise B2B portals - ik vertaal technische innovatie naar overtuigende digitale ervaringen.",
              visualTitle: "Design & Tech",
              visualSubtitle: "Innovation focus",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Tech-ondernemers uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Eindhoven & Brainport</span> domineren online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor <span className="bg-[#F7D8FA] px-2 rounded italic">Eindhoven</span> tech-ondernemers
              </h2>
              <p className="text-xl text-gray-600">
                Van High Tech Campus startup tot multinational - ik ken de uitdagingen van ondernemen in Nederland's techno-hoofdstad
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tech SEO Eindhoven */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Tech SEO Brainport</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten voor tech-termen, B2B-keywords en internationale queries. Perfect voor bedrijven die klanten willen bereiken van Silicon Valley tot Shenzhen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ B2B tech keyword dominantie internationaal</li>
                  <li>✓ High Tech Campus en Strijp-S local SEO</li>
                  <li>✓ Meertalige SEO (EN/DE/FR/NL/CN)</li>
                  <li>✓ Tech-sector authoriteit opbouw</li>
                </ul>
              </div>
              {/* Global Tech Ads */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  International B2B Focus
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Tech & Innovation</h3>
                <p className="text-gray-600 mb-6">
                  Bereik tech-professionals wereldwijd die naar Eindhoven innovatie zoeken. Van investors tot partners - jouw advertenties verschijnen waar de deals gemaakt worden.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ International B2B tech targeting</li>
                  <li>✓ LinkedIn en Google Ads integration</li>
                  <li>✓ Tech conference en event marketing</li>
                  <li>✓ Lead generation voor enterprise sales</li>
                </ul>
              </div>
              {/* Innovation Websites */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Innovation Websites</h3>
                <p className="text-gray-600 mb-6">
                  Websites die Eindhoven's innovatie-DNA uitstralen. Van startup pitch-platforms tot enterprise B2B portals - technische excellentie gecombineerd met design-thinking.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ B2B SaaS en tech platform design</li>
                  <li>✓ Investor en funding pitch integration</li>
                  <li>✓ Multi-language enterprise portals</li>
                  <li>✓ Design-thinking en innovation showcase</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom kiezen voor een <span className="bg-[#F7D8FA] px-2 rounded italic">marketing specialist</span> die Eindhoven's tech-ecosysteem kent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tech-sector & innovatie expertise</h3>
                <p className="text-gray-600">
                  Eindhoven is uniek door de concentratie van tech-giants (ASML, Philips, NXP), de High Tech Campus als Europa's slimste vierkante kilometer, en het Strijp-S startup-ecosysteem. Met DDW, PSV en een sterke internationale gemeenschap heeft de stad een eigen dynamiek. Ik weet precies hoe je deze unieke positie online optimaliseert voor B2B-success.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Internationale & Brainport kennis</h3>
                <p className="text-gray-600">
                  Van Meerhoven's expat-community tot Best's automotive cluster - ik ken de demografische en economische karakteristieken van de Brainport-regio. Of je nu internationale tech-partners, lokale B2B-klanten of design-minded consumenten wilt bereiken, ik ontwikkel de strategie die past bij jouw doelgroep en ambities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">marketing in Eindhoven</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is B2B marketing anders voor tech-bedrijven in Eindhoven?</summary>
                <p className="mt-4 text-gray-600">
                  Eindhoven concurreert internationaal met Silicon Valley, Shenzhen en Tel Aviv. Tech-bedrijven hier verkopen niet lokaal, maar aan Fortune 500 bedrijven wereldwijd. Daarom focus ik op internationale SEO, LinkedIn advertising en content die tech-decision makers overtuigt. Van ASML tot kleine deeptech startups - iedereen moet opvallen in een global marketplace.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke bedrijven in Eindhoven hebben het meest baat bij digitale marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Tech-startups op High Tech Campus, B2B-dienstverleners rond multinationals, en bedrijven die internationale klanten bedienen profiteren het meest. Ook expat-services, premium horeca rond tech-hubs en design-agencies voor DDW. De hoge koopkracht en internationale oriëntatie maken premium marketing-investeringen zeer winstgevend.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost B2B tech marketing voor bedrijven in Eindhoven?</summary>
                <p className="mt-4 text-gray-600">
                  Voor B2B tech-bedrijven in Eindhoven start marketing vanaf €1200 per maand vanwege internationale concurrentie en complexe buyer journeys. Dit is inclusief LinkedIn ads, tech-SEO en internationale content. Enterprise B2B-bedrijven investeren €2500-€5000 per maand. ROI is vaak binnen 3-6 maanden positief door hoge deal values in tech-sector.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe verschilt marketing voor Eindhovense bedrijven van andere steden?</summary>
                <p className="mt-4 text-gray-600">
                  Eindhoven marketing vereist internationale focus, meertalige content en B2B-expertise. We targeten niet alleen Nederland, maar Silicon Valley investeerders, Chinese manufacturers en Duitse engineering partners. Content moet technische diepgang combineren met business-impact. Local SEO richt zich op High Tech Campus en expat-keywords.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Kunnen jullie ook websites maken die passen bij Eindhoven's innovatie-imago?</summary>
                <p className="mt-4 text-gray-600">
                  Absoluut! We specialiseren in tech-websites die innovatie uitstralen. Denk aan interactive demos voor deeptech, investor pitch-integraties, en design-thinking principes uit DDW. Alles geoptimaliseerd voor international B2B-conversies en gebouwd om te schalen met jouw growth ambities.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Helpen jullie ook met internationale expansion voor Eindhovense tech-bedrijven?</summary>
                <p className="mt-4 text-gray-600">
                  Ja, dat is onze specialty! We helpen Eindhovense tech-bedrijven expanderen naar VS, Azië en andere EU-markten. Met geo-targeted campaigns, cultureel aangepaste content en internationale SEO-strategieën. Perfect voor bedrijven die hun Brainport-succes willen repliceren in global markets.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Werken jullie samen met High Tech Campus en startup-accelerators?</summary>
                <p className="mt-4 text-gray-600">
                  We werken regelmatig samen met startups van High Tech Campus, HighTechXL en andere accelerators in de regio. Van pre-seed marketing strategy tot scale-up growth hacking - we begrijpen de unique challenges van tech-entrepreneurship in het Brainport-ecosysteem.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Eindhoven & wereldwijd</span> te domineren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van High Tech Campus tot Silicon Valley - ik help je groeien in het internationale tech-ecosysteem
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Liever direct schakelen? Bel voor een gratis strategiegesprek over jouw groei in de tech-sector.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Marketing Bureau Eindhoven - Online Marketing Brainport & Omgeving</h3>
              <p className="text-gray-600">
                Eindhoven • Veldhoven • Best • Son en Breugel • Waalre • Nuenen • Geldrop-Mierlo • Eersel • Oirschot • Bergeijk • High Tech Campus • Strijp-S • Meerhoven • Woensel • Stratum • Tongelre • Gestel
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}