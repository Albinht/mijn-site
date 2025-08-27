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

export default function MarketingDokkum() {
  // Lokale Dokkum reviews
  const dutchReviews = [
    { name: 'Hotel Restaurant De Posthoorn', rating: 5, text: 'Onze boutique hotel in het historische centrum van Dokkum wordt nu perfect gevonden door toeristen. De bookings zijn met 60% gestegen dankzij de lokale SEO strategie.' },
    { name: 'Garage Faber Dokkum', rating: 5, text: 'Als autobedrijf aan de N356 bereiken we nu klanten uit heel Noord-Friesland. Van Leeuwarden tot Holwerd - overal worden we gevonden voor autoreparaties.' },
    { name: 'Bakkerij De Dokkumer Koekoek', rating: 5, text: 'Dankzij de online marketing komen er nu klanten van Metslawier, Ee en zelfs Kollum naar onze bakkerij. De speciale Friese gebakjes zijn een hit online.' },
    { name: 'Installatiebedrijf Frisia Dokkum', rating: 5, text: 'Voor zonnepanelen en warmtepompen worden we nu in heel de regio gevonden. Klanten uit Hallum, Birdaard en Wetsens weten ons te vinden.' },
    { name: 'Tandartspraktijk Dokkum Centrum', rating: 4.5, text: 'Patiënten uit de hele elfstedentocht regio bezoeken nu onze praktijk. De online agenda wordt vol geboekt door mensen uit Franeker, Sneek en Harlingen.' },
    { name: 'Restaurant Het Raadhuis', rating: 5, text: 'Toeristen die de Friese elf steden bezoeken reserveren nu online bij ons. De Dokkumer keuken trekt bezoekers van heel Nederland.' },
  ]
  const dutchMoreReviews = [
    { name: 'Makelaardij Noord-Friesland', rating: 5, text: 'Voor historische panden in Dokkum en omgeving zijn we dé makelaar geworden. Kopers zoeken nu specifiek naar ons voor authentieke Friese woningen.' },
    { name: 'Tuincentrum De Dokkumer Hof', rating: 4.5, text: 'Hoveniers uit Leeuwarden, Drachten en Dokkum halen hun planten bij ons. De webshop voor tuinartikelen loopt als een trein.' },
    { name: 'Boerderijwinkel Boerenhart', rating: 5, text: 'Onze biologische producten uit de Friese polders worden nu regionaal verkocht. Klanten rijden vanuit Groningen en Assen speciaal naar Dokkum.' },
    { name: 'Schildersbedrijf Dokkum & Omstreken', rating: 5, text: 'Voor monumentale panden in Noord-Friesland zijn we specialist. Opdrachtgevers uit Winsum, Baflo en Pieterburen weten ons te vinden.' },
    { name: 'Watersportverhuuring Waddenzee', rating: 4.5, text: 'Toeristen die naar het Waddenzee UNESCO gebied komen boeken nu online onze boten. Van Schiermonnikoog tot Lauwersoog - overal vandaan komen klanten.' },
    { name: 'Fysiopraktijk De Friese Kust', rating: 5, text: 'Sporters uit Dokkum, Holwerd en de kustdorpen vinden ons voor blessurebehandeling. De online afsprakenplanning werkt perfect voor de regio.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Dokkum (Friesland) | Marketing Bureau Noord-Friesland</title>
        <meta
          name="description"
          content="SEO Specialist in Dokkum, historische stad in Noord-Friesland. Lokale vindbaarheid voor toerisme, horeca en bedrijven. Actief in elfstedentocht regio."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/dokkum" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau in historisch Dokkum</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Domineer online in Noord-Friesland</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van vestingwallen tot Waddenzee - Dokkum als digitale basis</strong><br />
              Als marketing specialist in Noord-Friesland begrijp ik de unieke charme van Dokkum. Deze historische elfstedenstad (13.000 inwoners) met haar grachten, molens en vestingwallen biedt gouden kansen. Ik zorg dat bezoekers en bedrijven uit heel Friesland jouw onderneming weten te vinden.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Dominantie in toeristische zoekopdrachten Noord-Friesland</li>
              <li>✓ Bereik bezoekers van elfstedentocht route</li>
              <li>✓ Specialisatie in horeca, toerisme en lokale dienstverlening</li>
              <li>✓ Kennis van de regio: Metslawier, Ee, Holwerd, Hallum</li>
              <li>✓ Focus op UNESCO Waddenzee bezoekers</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start groei in Dokkum <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Friese cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Dokkum, Leeuwarden, Noord-Friesland & Waddenzee regio</p>
            <p className="mt-2 text-xs text-green-600">📍 Lokaal aanwezig, regionaal actief in Fryslan</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Resultaten Dokkum Noord-Friesland" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Noord-Friesland" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Noord-Friese marketing die de concurrentie overtreft"
          subtitle="Van historische binnenstad tot Waddenzee kust - jouw online succes"
          features={[
            {
              badge: "Elfsteden SEO",
              title: "Regionale SEO Dominantie",
              description: "In een gebied waar Leeuwarden, Franeker en Harlingen concurreren, positioneer ik jouw bedrijf als dé autoriteit. Perfect voor toeristische ondernemers en regionale dienstverleners.",
              visualTitle: "Noord-Friesland #1",
              visualSubtitle: "Elfsteden bereik",
              image: masterSeoImage
            },
            {
              badge: "Waddenzee Ads",
              title: "Google Ads Toerisme Focus",
              description: "Target UNESCO Waddenzee bezoekers en elfstedentocht toeristen. Ideaal voor hotels, restaurants en attracties die nationaal bezoekers willen trekken.",
              visualTitle: "Waddenzee bereik",
              visualSubtitle: "Nederland & Europa",
              image: keywordResearchImage
            },
            {
              badge: "Friese Identiteit",
              title: "Authentieke Dokkumer Websites",
              description: "Websites die de historische charme van Dokkum uitstralen. Van monumentale panden tot moderne dienstverlening - ik vertaal Friese authenticiteit naar conversie.",
              visualTitle: "Frysk & Modern",
              visualSubtitle: "Historisch karakter",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Dokkum & Noord-Friesland</span> groeien online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor <span className="bg-[#F7D8FA] px-2 rounded italic">Dokkum</span> ondernemers
              </h2>
              <p className="text-xl text-gray-600">
                Van historische horeca tot moderne dienstverlening - ik ken de uitdagingen van ondernemen in Noord-Friesland
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Dokkum */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale SEO Noord-Friesland</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten van Dokkum tot Leeuwarden. Perfect voor bedrijven die toeristen én lokale klanten willen bereiken in de elfstedentocht regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf optimalisatie Noord-Friesland</li>
                  <li>✓ Lokale backlinks uit toerisme sector</li>
                  <li>✓ Content strategie voor elfsteden bezoekers</li>
                  <li>✓ Reviews uit Dokkum, Metslawier, Ee, Holwerd</li>
                </ul>
              </div>
              {/* Google Ads Dokkum */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Waddenzee UNESCO Focus
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Toerisme & Lokaal</h3>
                <p className="text-gray-600 mb-6">
                  Bereik toeristen die UNESCO Waddenzee bezoeken én lokale klanten. Van Amsterdam tot Groningen - jouw advertenties verschijnen waar het telt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Geo-targeting toeristen Nederland & Europa</li>
                  <li>✓ Campagnes voor horeca & accommodatie</li>
                  <li>✓ Lokale dienstverlening advertising</li>
                  <li>✓ Seizoensgebonden toerisme focus</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Historische Dokkum Websites</h3>
                <p className="text-gray-600 mb-6">
                  Websites die de historische sfeer van Dokkum uitstralen. Authentiek Fries karakter gecombineerd met moderne functionaliteit en conversie optimalisatie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Responsive design voor alle apparaten</li>
                  <li>✓ Integratie met boekingssystemen</li>
                  <li>✓ Meertalige opties (NL/EN/DE/FR)</li>
                  <li>✓ Historische beeldtaal & moderne UX</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom kiezen voor een <span className="bg-[#F7D8FA] px-2 rounded italic">marketing specialist</span> die Dokkum & Noord-Friesland kent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Historische & toeristische expertise</h3>
                <p className="text-gray-600">
                  Dokkum is uniek door haar rijke historie als vestingstad, de ligging aan de elfstedentocht route en nabijheid van het UNESCO Waddenzee gebied. Met molens, grachten en authentieke binnenstad trekt de stad jaarlijks duizenden toeristen. Ik weet hoe je deze unieke positie online optimaal benut voor maximale zichtbaarheid.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Noord-Friese regio kennis</h3>
                <p className="text-gray-600">
                  Van dorpen zoals Metslawier en Ee tot de kustplaats Holwerd - ik ken de demografische en economische karakteristieken van Noord-Friesland. Of je nu toeristen, locals of bezoekers uit heel Nederland wilt bereiken, ik ontwikkel de juiste strategie voor jouw doelgroep en locatie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">marketing in Dokkum</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is lokale SEO belangrijk voor bedrijven in Dokkum?</summary>
                <p className="mt-4 text-gray-600">
                  Dokkum concurreert met grotere steden als Leeuwarden (100.000 inwoners) en Groningen (230.000 inwoners). Zonder sterke lokale SEO verdrinkt jouw bedrijf in de massa. Met de juiste strategie trek je zowel toeristen als locals uit de hele elfstedentocht regio - van Sneek tot Harlingen, van Franeker tot de Waddenzee kust.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke bedrijven in Dokkum hebben het meest baat bij online marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Hotels, restaurants, toeristische attracties en winkels in het historische centrum profiteren het meest. Ook lokale dienstverleners zoals tandartsen, kappers en installateurs die de regio bedienen. Door de UNESCO Waddenzee status en elfstedentocht geschiedenis is er enorm veel zoekvolume naar "Dokkum" en gerelateerde termen.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost SEO voor een bedrijf in Dokkum?</summary>
                <p className="mt-4 text-gray-600">
                  Voor lokale bedrijven in Dokkum start SEO vanaf €597 per maand vanwege de toeristische concurrentie. Dit is inclusief Google Mijn Bedrijf optimalisatie, toeristische linkbuilding en seizoensgebonden content. Hotels en restaurants die nationaal willen concurreren investeren tussen €900-€1800 per maand. ROI is meestal binnen 2-4 maanden positief door hoog zoekvolume.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe verschillen Google Ads voor Dokkum van andere plaatsen?</summary>
                <p className="mt-4 text-gray-600">
                  De strategie voor Dokkum focust op toeristische zoektermen en seizoenaliteit. We targeten niet alleen lokale zoekopdrachten maar vooral "elfstedentocht bezoeken", "Waddenzee UNESCO", "historische steden Friesland". Dit geeft toegang tot duizenden toeristen maandelijks tegen concurrerende kosten per klik.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Kunnen jullie ook websites maken die de historische sfeer van Dokkum uitstralen?</summary>
                <p className="mt-4 text-gray-600">
                  Absoluut! We specialiseren in websites voor historische locaties en toeristische bedrijven. Denk aan authentieke beeldtaal met molens en grachten, geïntegreerde boekingssystemen voor hotels/restaurants, en verhalen die de rijke geschiedenis van Dokkum vertellen. Alles in responsive design voor optimale gebruikerservaring.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Helpen jullie ook met seizoensgebonden marketing voor toeristische bedrijven?</summary>
                <p className="mt-4 text-gray-600">
                  Ja, dat is zelfs onze specialiteit in Dokkum! We ontwikkelen campagnes die inspelen op het elfstedentocht seizoen, zomervakanties naar het Waddenzee gebied, en historische evenementen. Met voorspellende analytics zorgen we dat je op de juiste momenten maximaal zichtbaar bent voor toeristen.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Dokkum & Noord-Friesland</span> te veroveren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van vestingwallen tot Waddenzee, van elfstedentocht tot UNESCO erfgoed - ik help je groeien in heel Noord-Friesland
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Liever direct schakelen? Bel voor een gratis strategiegesprek over jouw groei in Noord-Friesland.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Dokkum - Online Marketing Noord-Friesland & Omgeving</h3>
              <p className="text-gray-600">
                Dokkum • Metslawier • Ee • Holwerd • Hallum • Birdaard • Wetsens • Kollum • Anjum • Ternaard • Leeuwarden • Franeker • Harlingen • Sneek • Drachten • Heerenveen • Assen • Groningen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}