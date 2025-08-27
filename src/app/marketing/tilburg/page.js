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

export default function MarketingTilburg() {
  // Lokale Tilburg reviews
  const dutchReviews = [
    { name: 'Creative Studio Spoorpark', rating: 5, text: 'Als creatief bureau in het voormalige industriegebied Spoorpark bereiken we nu internationale klanten. Onze online aanwezigheid heeft ons van lokaal naar wereldwijd gebracht.' },
    { name: 'Restaurant De Houtloods', rating: 5, text: 'In het hartje van Tilburg centrum trekken we nu gasten uit heel Noord-Brabant. Van studenten tot zakenrelaties - iedereen vindt ons dankzij sterke lokale SEO.' },
    { name: 'TiU Innovation Lab', rating: 5, text: 'Als startup verbonden aan Tilburg University hadden we moeite studenten en investeerders te bereiken. Nu domineren we de zoekresultaten en krijgen we funding-aanvragen uit heel Europa.' },
    { name: 'Logistics Solutions Reeshof', rating: 4.5, text: 'Voor transport tussen de havens Rotterdam en Antwerpen zijn we het eerste resultaat. Bedrijven uit Waalwijk, Goirle en Berkel-Enschot kiezen voor onze diensten.' },
    { name: 'Textielmuseum Experience', rating: 5, text: 'Toeristen en cultuurliefhebbers uit Nederland, België en Duitsland boeken nu online onze workshops. Het industrieel erfgoed van Tilburg trekt bezoekers wereldwijd.' },
    { name: 'Student Housing Reeshof', rating: 5, text: 'Internationale studenten van Tilburg University vinden nu makkelijk onze studentenkamers. Van bachelor tot PhD - onze occupancy rate is 98% dankzij online marketing.' },
  ]
  const dutchMoreReviews = [
    { name: 'De Pont Museum Shop', rating: 5, text: 'Kunstliefhebbers wereldwijd bestellen nu onze limited edition prints online. Van New York tot Tokyo - Tilburg moderne kunst wordt internationaal gewaardeerd.' },
    { name: 'Fashion Boutique Dwaalgebied', rating: 4.5, text: 'In Tilburgs hippe wijk Dwaalgebied hadden we vooral lokale klanten. Nu verkopen we fashion aan trendy shoppers uit Eindhoven, Den Bosch en zelfs Amsterdam.' },
    { name: 'Conference Center 013', rating: 5, text: 'Bedrijfsevenementen en concerten worden nu geboekt door organisatoren uit heel Europa. Onze venue in voormalig industriegebied is een internationale hotspot geworden.' },
    { name: 'Tech Consultancy TiSEM', rating: 4.5, text: 'Alumni van Tilburg University en internationale consultancy-klanten vinden ons voor data science projecten. Van startups tot Fortune 500 - onze expertise wordt wereldwijd gezocht.' },
    { name: 'Brewery De Koningshoeven', rating: 5, text: 'Craft beer liefhebbers uit heel Europa bestellen nu onze Trappistenbieren online. Van Tilburg naar Tokio - onze brouwkunst wordt internationaal geëxporteerd.' },
    { name: 'Student Life Services TiU', rating: 5, text: 'Internationale studenten boeken via onze platform alles voor hun Tilburg ervaring: van huisvesting tot fietsreparatie. Digital student services zijn onze niche geworden.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Digital Marketing Bureau Tilburg | SEO Specialist Universitaire Textielstad</title>
        <meta
          name="description"
          content="Marketing specialist in Tilburg, creatieve textielstad met universitaire flair. Expert in student marketing, creative industries en industrieel erfgoed optimalisatie."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/tilburg" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Tilburg</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Universitaire Creatieve Hub Expert</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van Spoorpark tot University campus - Tilburg als creatieve motor</strong><br />
              Als marketing specialist in Nederland's zesde stad (220.000 inwoners) begrijp ik de unieke dynamiek van Tilburg. Deze voormalige textielstad combineert industrieel erfgoed met universitaire energie, creative industries en jonge demografie. Ik help bedrijven profiteren van deze diverse, internationale gemeenschap en culturele rijkdom.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Expertise in student & expat marketing Tilburg University</li>
              <li>✓ Specialisatie in creative industries en cultural marketing</li>
              <li>✓ Kennis van wijken: Reeshof, Centrum, Noord, Oud-Zuid</li>
              <li>✓ Focus op Waalwijk, Goirle, Berkel-Enschot omgeving</li>
              <li>✓ Industrieel erfgoed naar moderne business transformatie</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei in Tilburg <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Student Cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Tilburg, universitaire marketing & creative industries</p>
            <p className="mt-2 text-xs text-green-600">📍 Lokaal aanwezig in textielstad, internationaal actief</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Resultaten Tilburg Creative Industries" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Tilburg Universiteit" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Tilburg marketing die studenten en creatieven overtuigt"
          subtitle="Van University campus tot De Pont Museum - jouw digitale dominantie in textielstad"
          features={[
            {
              badge: "Student Marketing",
              title: "University & International Student SEO",
              description: "In een stad met 25.000+ studenten uit 100+ landen creëer ik campagnes die deze diverse gemeenschap bereikt. Perfect voor student services, huisvesting, en internationale bedrijven die young professionals willen aantrekken.",
              visualTitle: "Student Reach",
              visualSubtitle: "International focus",
              image: masterSeoImage
            },
            {
              badge: "Creative Industries",
              title: "Cultural & Creative Marketing",
              description: "Van De Pont Museum tot 013 venue - Tilburg bruist van creativiteit. Ik help cultural institutions, creative agencies en art-gerelateerde bedrijven hun unieke verhaal vertellen en internationale bezoekers aantrekken.",
              visualTitle: "Cultural Impact",
              visualSubtitle: "Creative reach",
              image: keywordResearchImage
            },
            {
              badge: "Heritage Business",
              title: "Industrial Heritage to Modern Business",
              description: "Spoorpark, Textielmuseum, voormalige fabrieken - Tilburg transformeert industrieel erfgoed naar moderne business hubs. Ik help deze transformatie online zichtbaar maken voor investeerders en bezoekers.",
              visualTitle: "Heritage Innovation",
              visualSubtitle: "Modern transformation",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Tilburg ondernemers domineren online in <span class='bg-[#F7D8FA] px-2 rounded italic'>universitaire textielstad</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor <span className="bg-[#F7D8FA] px-2 rounded italic">Tilburg</span> ondernemers
              </h2>
              <p className="text-xl text-gray-600">
                Van student startup tot cultural institution - ik ken de uitdagingen van ondernemen in universitaire textielstad
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Student & University SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Student & University Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Bereik 25.000+ studenten en internationale universitaire gemeenschap. Van student services tot young professional recruitment - domineer in deze lucratieve doelgroep.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ International student targeting (100+ landen)</li>
                  <li>✓ Campus-area local SEO optimalisatie</li>
                  <li>✓ Young professional recruitment campaigns</li>
                  <li>✓ Student housing & services dominantie</li>
                </ul>
              </div>
              {/* Creative Industries Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Cultural & Creative Focus
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Industries & Culture</h3>
                <p className="text-gray-600 mb-6">
                  Tilburg bruist van creativiteit met De Pont Museum, Textielmuseum en creatieve startups. Ik help cultural institutions en creative businesses hun verhaal internationaal vertellen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Museum & cultural institution marketing</li>
                  <li>✓ Creative agency online positioning</li>
                  <li>✓ Art & culture toerisme campaigns</li>
                  <li>✓ Creative startup investor attraction</li>
                </ul>
              </div>
              {/* Local Business & Heritage */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Business & Heritage Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Van centrum tot Reeshof, van Spoorpark tot industrieel erfgoed - ik ken elke wijk en haar kansen. Lokale businesses met internationale ambities vinden hier hun gouden combinatie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Hyperlocal SEO voor wijken en buurten</li>
                  <li>✓ Industrial heritage business transformation</li>
                  <li>✓ Reeshof, Centrum, Noord optimization</li>
                  <li>✓ Waalwijk, Goirle regional expansion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom kiezen voor een <span className="bg-[#F7D8FA] px-2 rounded italic">marketing specialist</span> die Tilburg's universitaire & creatieve ecosysteem kent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Student & University expertise</h3>
                <p className="text-gray-600">
                  Tilburg University brengt 25.000+ studenten uit 100+ landen naar de stad. Deze internationale, jonge demografe heeft unieke behoeften en koopgedrag. Van student housing tot young professional services - ik weet precies hoe je deze lucratieve doelgroep online bereikt en overtuigt voor lange-termijn klantrelaties.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Creative & Heritage kennis</h3>
                <p className="text-gray-600">
                  Van textiel-industrie naar creative hub - Tilburg transformeert industrieel erfgoed naar moderne business. De Pont Museum, Textielmuseum, 013 venue en Spoorpark trekken culturele toeristen en creatieve professionals. Ik help bedrijven profiteren van deze unieke mix van historie, creativiteit en moderne ondernemerschap.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">marketing in Tilburg</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is student marketing anders in Tilburg dan andere universiteitssteden?</summary>
                <p className="mt-4 text-gray-600">
                  Tilburg heeft een unieke mix: 25.000+ studenten uit 100+ landen, veel internationale business programs, en een sterke creative scene. Studenten blijven vaak na afstuderen voor work opportunities in logistics, finance en creative industries. Dit betekent lifetime value campagnes, niet alleen semester-based marketing zoals in andere universiteitssteden.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke bedrijven in Tilburg profiteren het meest van digitale marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Student services (housing, bikes, food), creative agencies in Spoorpark, cultural institutions, en businesses die profiteren van jong, internationaal publiek. Ook logistics bedrijven die willen groeien tussen Rotterdam-Antwerpen corridor. De hoge studentendichtheid en internationale orientatie maken premium marketing-investeringen zeer winstgevend.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost marketing voor bedrijven in universitaire omgeving Tilburg?</summary>
                <p className="mt-4 text-gray-600">
                  Student-gerichte bedrijven starten vanaf €800 per maand vanwege seizoenaliteit en internationale targeting. Creative industries en cultural marketing vanaf €1200 per maand. B2B services voor young professionals €1500-€3000 per maand. ROI is vaak hoog door loyale student-naar-alumni conversie en word-of-mouth in tight community.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe verschillen de wijken Reeshof, Centrum en Noord qua marketing kansen?</summary>
                <p className="mt-4 text-gray-600">
                  Reeshof: moderne wijk, veel studenten en young professionals - perfecte doelgroep voor tech en lifestyle services. Centrum: mix van cultuur, nightlife en business - ideaal voor horeca en retail. Noord: opkomende creatieve wijk met veel potentie voor innovative businesses en artistic ventures.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Helpen jullie ook met cultural marketing voor musea en creative venues?</summary>
                <p className="mt-4 text-gray-600">
                  Absoluut! We specialiseren in cultural institution marketing. Van De Pont Museum internationale bezoekers tot Textielmuseum educational programs. We ontwikkelen campaigns die cultural toerisme stimuleren en creative businesses helpen hun unique value proposition online uit te dragen naar international audience.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Kunnen jullie helpen met internationale student recruitment marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Ja, we hebben ervaring met international student marketing voor universities, housing providers en student services. Met geo-targeted campaigns naar key markets, cultureel aangepaste content en multi-language SEO. Perfect voor bedrijven die willen groeien met Tilburg University's international expansion.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Werken jullie met bedrijven in de industrieel erfgoed transformatie?</summary>
                <p className="mt-4 text-gray-600">
                  Zeker! Tilburg's transformation van textielstad naar creative hub creëert unique marketing opportunities. We helpen businesses in Spoorpark, voormalige fabrieksgebouwen en heritage sites hun verhaal vertellen. Van industrial real estate tot creative co-working - we positioneren transformed spaces voor modern entrepreneurs.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Tilburg & internationaal</span> te domineren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van University campus tot creative industries - ik help je groeien in universitaire textielstad
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Liever direct schakelen? Bel voor een gratis strategiegesprek over jouw groei in universitaire omgeving.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Tilburg - Online Marketing Universitaire Textielstad & Omgeving</h3>
              <p className="text-gray-600">
                Tilburg • Waalwijk • Goirle • Berkel-Enschot • Oisterwijk • Hilvarenbeek • Udenhout • Baarle-Nassau • Loon op Zand • Kaatsheuvel • Reeshof • Centrum • Noord • Oud-Zuid • Stokhasselt • Spoorpark • University Campus
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}