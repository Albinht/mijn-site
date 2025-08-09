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

export default function MarketingAalst() {
  // Lokale Aalst reviews
  const dutchReviews = [
    { name: 'Hoveniersbedrijf De Groene Betuwe', rating: 5, text: 'Dankzij de lokale SEO krijgen we nu wekelijks aanvragen uit Aalst, Poederoijen en Brakel. De investering verdiende zich binnen 3 maanden terug.' },
    { name: 'Autobedrijf Van Aalst', rating: 5, text: 'Onze werkplaats aan de Maasdijk wordt nu perfect gevonden. Google Ads zorgt voor een constante stroom klanten uit de hele Bommelerwaard.' },
    { name: 'Kapsalon Beauty & Hair', rating: 5, text: 'We trekken nu klanten uit heel West Betuwe. De nieuwe website en SEO strategie hebben ons salon naar een hoger niveau getild.' },
    { name: 'Aannemersbedrijf Aalst BV', rating: 5, text: 'Als bouwbedrijf in het rivierengebied is lokale vindbaarheid cruciaal. We staan nu bovenaan voor verbouwingen in de regio.' },
    { name: 'Fysiopraktijk Aalst', rating: 5, text: 'Patiënten uit Aalst, Nederhemert en omgeving vinden ons nu moeiteloos. De online agenda loopt vol dankzij de marketing.' },
    { name: 'Restaurant De Oude School', rating: 4.5, text: 'Meer reserveringen uit de regio Zaltbommel en Geldermalsen. De lokale campagnes werken uitstekend voor ons restaurant.' },
  ]
  const dutchMoreReviews = [
    { name: 'Transportbedrijf Aalst Logistics', rating: 5, text: 'Met onze ligging langs de A2 is regionale vindbaarheid essentieel. Nu krijgen we aanvragen uit heel Gelderland.' },
    { name: 'Dakdekkersbedrijf De Waal', rating: 5, text: 'Van Waalwijk tot Tiel, overal worden we gevonden voor dakwerkzaamheden. De ROI van Google Ads is fantastisch.' },
    { name: 'Bloemisterij Het Bommelerwaard Boeket', rating: 4.5, text: 'Online bestellingen zijn verdrievoudigd sinds de nieuwe website. Klanten uit de hele Bommelerwaard weten ons te vinden.' },
    { name: 'Installatiebedrijf Aalst Techniek', rating: 5, text: 'Als specialist in duurzame installaties worden we nu regionaal gevonden. Warmtepompen en zonnepanelen lopen storm.' },
    { name: 'Makelaar Aalst & Omstreken', rating: 5, text: 'Voor woningen in het rivierengebied zijn we nu dé partij. Top posities voor alle relevante zoektermen.' },
    { name: 'Dierenarts De Betuwe', rating: 4.5, text: 'Huisdiereigenaren uit Aalst, Gameren en Zuilichem vinden ons praktijk nu direct. Nieuwe klanten stromen binnen.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Aalst (Gelderland) | Marketing Bureau West Betuwe</title>
        <meta
          name="description"
          content="SEO Specialist in Aalst, gemeente West Betuwe. Lokale vindbaarheid in de Bommelerwaard met SEO, Google Ads en websites. Actief in heel rivierengebied Gelderland."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/aalst" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau in het hart van de Bommelerwaard</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Domineer online in Aalst & West Betuwe</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van Maasdijk tot dorpskern - maak Aalst jouw digitale thuisbasis</strong><br />
              Als marketing specialist in het rivierengebied ken ik de unieke dynamiek van Aalst. Gelegen tussen Zaltbommel en Geldermalsen, met de A2 als levensader, heeft jouw bedrijf hier gouden kansen. Ik zorg dat ondernemers uit de hele Bommelerwaard jou weten te vinden.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale dominantie in West Betuwe en Bommelerwaard</li>
              <li>✓ Bereik klanten van Waalwijk tot Tiel</li>
              <li>✓ Specialisatie in agrarische en MKB marketing</li>
              <li>✓ Kennis van de regio: Poederoijen, Brakel, Nederhemert</li>
              <li>✓ Focus op rivierengebied ondernemers</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start groei in West Betuwe <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Betuwe cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Aalst, Zaltbommel, Geldermalsen & omstreken</p>
            <p className="mt-2 text-xs text-green-600">📍 Lokaal aanwezig, regionaal actief</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Resultaten Aalst Bommelerwaard" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist West Betuwe" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Rivierengebied marketing die de concurrentie overspoelt"
          subtitle="Van polderdorp tot provinciehoofdstad - jouw online succes"
          features={[
            {
              badge: "Bommelerwaard SEO",
              title: "Regionale SEO Dominantie",
              description: "In een gebied waar Zaltbommel, Geldermalsen en Tiel om aandacht strijden, positioneer ik jouw bedrijf als dé autoriteit. Perfect voor bedrijven langs de A2 corridor.",
              visualTitle: "West Betuwe #1",
              visualSubtitle: "Regionaal sterk",
              image: masterSeoImage
            },
            {
              badge: "A2 Corridor Ads",
              title: "Google Ads Rivierengebied",
              description: "Target bezoekers en bedrijven in de driehoek Waalwijk-Tiel-Geldermalsen. Ideaal voor transport, logistiek en regionale dienstverleners.",
              visualTitle: "A2 bereik",
              visualSubtitle: "Utrecht tot Brabant",
              image: keywordResearchImage
            },
            {
              badge: "Agri & MKB Focus",
              title: "Betuwe Business Websites",
              description: "Websites die de nuchtere Betuwse ondernemer aanspreken. Van fruithandel tot transportbedrijf - ik spreek jullie taal en ken de markt.",
              visualTitle: "Betuws & Bold",
              visualSubtitle: "Conversie focus",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Aalst & Bommelerwaard</span> groeien online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor <span className="bg-[#F7D8FA] px-2 rounded italic">West Betuwe</span> ondernemers
              </h2>
              <p className="text-xl text-gray-600">
                Van agrarische bedrijven tot moderne dienstverleners - ik ken de uitdagingen van ondernemen in het rivierengebied
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Aalst */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokale SEO Bommelerwaard</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten van Aalst tot Zaltbommel. Perfect voor bedrijven die de hele Bommelerwaard willen bedienen vanuit hun Aalst locatie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf optimalisatie West Betuwe</li>
                  <li>✓ Lokale backlinks uit rivierengebied</li>
                  <li>✓ Content strategie voor polderdorpen</li>
                  <li>✓ Reviews uit Aalst, Poederoijen, Brakel</li>
                </ul>
              </div>
              {/* Google Ads Aalst */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  A2 Corridor Champion
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads A2 Regio</h3>
                <p className="text-gray-600 mb-6">
                  Bereik forensen en bedrijven langs de A2. Van Utrecht tot Den Bosch - jouw advertenties verschijnen waar het telt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Geo-targeting Gelderland & Brabant grens</li>
                  <li>✓ Campagnes voor transport & logistiek</li>
                  <li>✓ Agrarische sector advertising</li>
                  <li>✓ B2B focus rivierengebied</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Betuwe Business Websites</h3>
                <p className="text-gray-600 mb-6">
                  Nuchtere websites die converteren. Geen poespas, wel resultaat - precies wat de Betuwse ondernemer zoekt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Snelle, praktische websites</li>
                  <li>✓ Integratie met agrarische systemen</li>
                  <li>✓ B2B leadgeneratie focus</li>
                  <li>✓ Meertalig voor grensregio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom kiezen voor een <span className="bg-[#F7D8FA] px-2 rounded italic">marketing specialist</span> die de Bommelerwaard kent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kennis van de regio</h3>
                <p className="text-gray-600">
                  Aalst ligt strategisch tussen Zaltbommel (5 km) en Geldermalsen (12 km). Met de A2 op steenworp afstand is dit dé locatie voor bedrijven die zowel Utrecht als Den Bosch willen bedienen. Ik ken de economische dynamiek van deze polderregio en weet hoe je hier online succesvol wordt.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Agrarische & MKB expertise</h3>
                <p className="text-gray-600">
                  Van fruittelers tot transportbedrijven, van aannemers tot horecazaken aan de Maasdijk - ik spreek de taal van de Betuwse ondernemer. Geen fancy praatjes maar concrete resultaten. Marketing die past bij de nuchtere mentaliteit van West Betuwe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">marketing in Aalst</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is lokale SEO belangrijk voor bedrijven in Aalst?</summary>
                <p className="mt-4 text-gray-600">
                  Aalst ligt in het hart van de Bommelerwaard, omringd door grotere plaatsen zoals Zaltbommel, Geldermalsen en Tiel. Zonder goede lokale SEO word je overschaduwd door concurrenten uit deze steden. Met de juiste strategie trek je klanten uit de hele regio - van Poederoijen tot Nederhemert, van Brakel tot Gameren.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke bedrijven in Aalst hebben het meest baat bij online marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Transportbedrijven langs de A2, agrarische ondernemers, aannemers, en lokale dienstverleners. Ook horeca aan de Maasdijk en recreatiebedrijven profiteren enorm van online vindbaarheid. De ligging tussen grote steden maakt Aalst ideaal voor B2B dienstverleners die regionaal willen opereren.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost SEO voor een bedrijf in Aalst?</summary>
                <p className="mt-4 text-gray-600">
                  Voor lokale bedrijven in Aalst start SEO vanaf €497 per maand. Dit is inclusief Google Mijn Bedrijf optimalisatie, lokale linkbuilding en content creatie. Grotere regionale spelers die de hele Bommelerwaard willen domineren investeren tussen €800-€1500 per maand. De ROI is meestal binnen 3-6 maanden positief.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe verschillen Google Ads voor Aalst van andere plaatsen?</summary>
                <p className="mt-4 text-gray-600">
                  De strategie voor Aalst focust op de A2 corridor en het rivierengebied. We targeten niet alleen Aalst zelf (1.200 inwoners) maar de hele regio inclusief forensenverkeer. Campagnes richten zich op Zaltbommel, Geldermalsen, Tiel en zelfs Waalwijk. Dit geeft een veel groter bereik tegen lagere kosten per klik.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Kunnen jullie ook websites maken voor agrarische bedrijven?</summary>
                <p className="mt-4 text-gray-600">
                  Absoluut! We hebben ervaring met websites voor fruittelers, veehouders, loonwerkers en agrarische dienstverleners. We integreren met branche-specifieke systemen en zorgen voor praktische functionaliteiten zoals seizoensgebonden content, product catalogi en B2B portals. Alles in de nuchtere Betuwse stijl.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Aalst & de Bommelerwaard</span> te veroveren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Maasdijk tot dorpskern, van A2 tot polderwegen - ik help je groeien in het hele rivierengebied
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Liever direct schakelen? Bel voor een gratis strategiegesprek over jouw groei in West Betuwe.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in heel West Betuwe & Bommelerwaard</h3>
              <p className="text-gray-600">
                Aalst • Poederoijen • Brakel • Nederhemert • Zaltbommel • Gameren • Zuilichem • Nieuwaal • Geldermalsen • Beesd • Buren • Tiel • Waardenburg • Neerijnen • Ophemert • Varik
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}