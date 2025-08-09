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

export default function MarketingAchterDrempt() {
  // Lokale Achter-Drempt reviews
  const dutchReviews = [
    { name: 'Metaalbedrijf Drempt Staal', rating: 5, text: 'Sinds de nieuwe SEO aanpak krijgen we opdrachten uit heel de Achterhoek. Van Doesburg tot Doetinchem, overal worden we gevonden.' },
    { name: 'Loonbedrijf Van den Berg', rating: 5, text: 'De agrarische sector in de streek weet ons nu te vinden. Google Ads tijdens het seizoen werkt perfect voor ons loonwerk.' },
    { name: 'Hoveniersbedrijf De Oude IJssel', rating: 5, text: 'Villabezitters uit Hummelo en Keppel bellen nu rechtstreeks. De lokale vindbaarheid is enorm verbeterd.' },
    { name: 'Garage Achterhoek Service', rating: 5, text: 'APK klanten uit Voor-Drempt, Hoog-Keppel en Hummelo vinden ons nu moeiteloos. De telefoon staat roodgloeiend.' },
    { name: 'Bouwbedrijf Drempt & Zonen', rating: 5, text: 'Renovatieprojecten in historische panden lopen binnen via Google. Specialisatie in monumentenzorg wordt nu gezien.' },
    { name: 'Café Restaurant De Remise', rating: 4.5, text: 'Fietsers en wandelaars op de Achterhoek routes vinden ons terras nu online. Omzet in weekend verdubbeld!' },
  ]
  const dutchMoreReviews = [
    { name: 'Transportbedrijf IJsselstreek', rating: 5, text: 'Logistieke opdrachten uit de driehoek Arnhem-Doetinchem-Zutphen. Perfecte positionering langs de N317.' },
    { name: 'Dakdekker Achterhoek Totaal', rating: 5, text: 'Monumentale panden in Bronckhorst gemeente zijn onze specialiteit. Nu worden we daarvoor ook gevonden.' },
    { name: 'Elektricien Drempt Techniek', rating: 4.5, text: 'Spoedklussen uit de hele gemeente Bronckhorst. De 24/7 service wordt nu ook 24/7 gevonden online.' },
    { name: 'Tuincentrum De Groene Achterhoek', rating: 5, text: 'Klanten uit Doesburg, Dieren en Velp rijden nu naar ons toe. De regionale campagnes werken uitstekend.' },
    { name: 'Schildersbedrijf Van Drempt', rating: 5, text: 'Kasteel Keppel, landhuizen in Hummelo - de mooiste projecten komen nu binnen via online marketing.' },
    { name: 'Fietsenmaker De Spoke', rating: 4.5, text: 'E-bike verhuur aan toeristen loopt storm. Perfecte timing met de groei van fietstoerisme in de Achterhoek.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Achter-Drempt | Marketing Bureau Achterhoek Bronckhorst</title>
        <meta
          name="description"
          content="SEO Specialist in Achter-Drempt, gemeente Bronckhorst. Lokale marketing voor Achterhoekse bedrijven. Bereik klanten van Doesburg tot Doetinchem met SEO & Google Ads."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/achter-drempt" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing in het hart van de groene Achterhoek</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Domineer online in Bronckhorst & omstreken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van coulisselandschap tot kasteeldorpen - maak de Achterhoek jouw markt</strong><br />
              Als marketing specialist in de Achterhoek ken ik de kracht van Achter-Drempt. Centraal gelegen in gemeente Bronckhorst, tussen de IJssel en de Oude IJssel, met Doesburg, Doetinchem en Zutphen op fietsafstand. Ik help authentieke Achterhoekse bedrijven groeien met nuchtere, resultaatgerichte marketing.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Specialist in Achterhoek mentaliteit & markt</li>
              <li>✓ Bereik heel Bronckhorst: van Zelhem tot Vorden</li>
              <li>✓ Focus op MKB, agrarisch & ambachtelijk</li>
              <li>✓ Kennis van Voor-Drempt, Hummelo, Keppel routes</li>
              <li>✓ Grensoverschrijdend: ook Duitsland bereik</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei in de Achterhoek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Bronckhorst cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Achter-Drempt, Doesburg, Bronckhorst & heel de Achterhoek</p>
            <p className="mt-2 text-xs text-green-600">🚜 Nuchter, eerlijk & resultaatgericht</p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Resultaten Achter-Drempt Achterhoek" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Achterhoek" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Achterhoek marketing met pit en karakter"
          subtitle="Van noaberschap tot ondernemerschap - wij snappen de regio"
          features={[
            {
              badge: "Achterhoek SEO",
              title: "Lokale SEO Bronckhorst",
              description: "In een regio waar iedereen elkaar kent, is reputatie alles. Ik positioneer je als dé specialist in jouw vakgebied, van Doesburg tot Zelhem, van Hengelo tot Steenderen.",
              visualTitle: "Bronckhorst #1",
              visualSubtitle: "Regionaal sterk",
              image: masterSeoImage
            },
            {
              badge: "Platteland Ads",
              title: "Google Ads Achterhoek",
              description: "Target de nuchtere Achterhoeker die kwaliteit waardeert. Slimme campagnes voor seizoenswerk, evenementen zoals Zwarte Cross, en de groeiende groep 'nieuwe' Achterhoekers.",
              visualTitle: "IJssel tot IJssel",
              visualSubtitle: "Heel Bronckhorst",
              image: keywordResearchImage
            },
            {
              badge: "Ambacht & MKB",
              title: "Achterhoekse Websites",
              description: "Websites die de Achterhoekse nuchterheid uitstralen maar wel modern presteren. Van loonwerker tot kasteel-eigenaar - ik spreek ieders taal.",
              visualTitle: "Echt Achterhoeks",
              visualSubtitle: "Modern & snel",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Ondernemers uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Achter-Drempt & Bronckhorst</span> groeien online"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing voor échte <span className="bg-[#F7D8FA] px-2 rounded italic">Achterhoekse</span> bedrijven
              </h2>
              <p className="text-xl text-gray-600">
                Van familiebedrijf tot startende ondernemer - ik help je groeien met de Achterhoekse mentaliteit: aanpakken!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Achterhoek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Bronckhorst</h3>
                <p className="text-gray-600 mb-6">
                  Word de autoriteit in gemeente Bronckhorst. Van Voor-Drempt tot Hoog-Keppel, van Hummelo tot Laag-Keppel - domineer je regio online.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Mijn Bedrijf Bronckhorst optimaal</li>
                  <li>✓ Lokale backlinks uit de Achterhoek</li>
                  <li>✓ Content over kastelen & coulissen</li>
                  <li>✓ Reviews uit alle kernen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Achterhoek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Achterhoek Champion
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Platteland</h3>
                <p className="text-gray-600 mb-6">
                  Bereik de Achterhoeker op het juiste moment. Van seizoenswerk tot evenementen - altijd de perfecte timing en targeting.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Geo-targeting dorpskernen & buitengebied</li>
                  <li>✓ Agrarische sector campagnes</li>
                  <li>✓ Evenementen: Kasteeltuinen, Kunst10daagse</li>
                  <li>✓ Duitse grensregio targeting</li>
                </ul>
              </div>
              {/* Website & Branding */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Achterhoekse Websites</h3>
                <p className="text-gray-600 mb-6">
                  Nuchtere websites die wel presteren. Geen poespas maar duidelijkheid - precies wat de Achterhoeker wil.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Snelle, praktische websites</li>
                  <li>✓ Achterhoeks dialect optie</li>
                  <li>✓ Integratie met lokale systemen</li>
                  <li>✓ Focus op mobiel (platteland 4G)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOKALE CONTEXT SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Waarom een <span className="bg-[#F7D8FA] px-2 rounded italic">marketing specialist</span> die de Achterhoek kent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hart van Bronckhorst</h3>
                <p className="text-gray-600">
                  Achter-Drempt ligt strategisch tussen Voor-Drempt, Hummelo en Hoog-Keppel. Met de N317 als belangrijke verbindingsweg tussen Doesburg (8 km) en Doetinchem (12 km). De ligging aan de Oude IJssel, in het coulisselandschap met zijn kastelen en landgoederen, maakt dit een unieke plek voor ondernemers die authenticiteit combineren met ambitie.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Achterhoekse mentaliteit</h3>
                <p className="text-gray-600">
                  "Niet lullen maar poetsen" - dat is de Achterhoek. Ik ken de nuchtere mentaliteit, het noaberschap, en de kracht van mond-tot-mond reclame in deze regio. Marketing die past bij de Achterhoeker: eerlijk, direct en met resultaat. Van agrarische bedrijven tot ambachtslieden, van horeca tot hightech - ik spreek jullie taal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">marketing in Achter-Drempt</span>
            </h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is lokale SEO belangrijk in een klein dorp als Achter-Drempt?</summary>
                <p className="mt-4 text-gray-600">
                  Achter-Drempt ligt centraal in Bronckhorst, de grootste plattelandsgemeente van Nederland. Klanten zoeken niet op "Achter-Drempt" maar op diensten "bij mij in de buurt". Met goede SEO word je gevonden door heel Bronckhorst (26.000 inwoners), plus Doesburg, Doetinchem en Zutphen. Dat is een verzorgingsgebied van 200.000+ mensen.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke bedrijven in de Achterhoek hebben het meest baat bij online marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Agrarische dienstverleners (loonwerk, mechanisatie), bouwbedrijven gespecialiseerd in monumenten en landhuizen, ambachtelijke bedrijven, horeca langs fietsroutes, en B2B dienstverleners. Ook bedrijven die inspelen op het groeiende toerisme (kastelen, evenementen) en de instroom van 'nieuwe Achterhoekers' uit de Randstad.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost SEO voor een MKB bedrijf in Bronckhorst?</summary>
                <p className="mt-4 text-gray-600">
                  Voor lokale bedrijven in Achter-Drempt en omgeving start SEO vanaf €497 per maand. Dit omvat lokale optimalisatie voor Bronckhorst, content creatie en linkbuilding. Regionale spelers die de hele Achterhoek willen bereiken investeren €800-€1500 per maand. De investering verdient zich meestal binnen 3-4 maanden terug door nieuwe klanten.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe bereik ik ook Duitse klanten over de grens?</summary>
                <p className="mt-4 text-gray-600">
                  De Achterhoek grenst aan Duitsland, met steden als Emmerich en Bocholt op 20-30 km. Duitse SEO en Google Ads in het Duits zijn zeer effectief. Focus op zoektermen zoals "Handwerker Holland" of "Gastronomie Achterhoek". Veel Duitsers waarderen Nederlandse diensten en producten. Ik help met tweetalige websites en grensoverschrijdende campagnes.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Werkt social media marketing ook op het platteland?</summary>
                <p className="mt-4 text-gray-600">
                  Zeker! Facebook is zeer populair in de Achterhoek voor lokale groepen en evenementen. Instagram werkt goed voor horeca, recreatie en ambachtelijke bedrijven. LinkedIn is effectief voor B2B in de agrarische en industriële sector. De sleutel is authentieke content die de Achterhoekse identiteit weerspiegelt - geen gladde stadse marketing.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">de Achterhoek</span> te veroveren?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van coulisselandschap tot kasteeldorp - ik help je groeien in heel Bronckhorst en de Achterhoek
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Liever gelijk aanpakken? Bel voor een gratis adviesgesprek over groei in de Achterhoek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Snel een vraag? App me en krijg binnen een uur antwoord - ook 's avonds.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in heel Bronckhorst & de Achterhoek</h3>
              <p className="text-gray-600">
                Achter-Drempt • Voor-Drempt • Hummelo • Hoog-Keppel • Laag-Keppel • Eldrik • Langerak • Doesburg • Dieren • Rheden • Velp • Doetinchem • Gaanderen • Terborg • Zelhem • Hengelo • Vorden • Steenderen • Baak • Wichmond • Bronkhorst
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}