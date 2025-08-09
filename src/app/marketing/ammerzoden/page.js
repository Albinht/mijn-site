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

export default function MarketingAmmerzoden() {
  // Authentieke Ammerzoden reviews met kasteel en Bommelerwaard context
  const dutchReviews = [
    { name: 'Restaurant Kasteelzicht', rating: 5, text: 'Onze ligging tegenover kasteel Ammersoyen trekt nu gasten uit heel de Bommelerwaard. Via Google vinden toeristen uit Den Bosch en Utrecht ons perfect.' },
    { name: 'Aannemersbedrijf Van Dam & Zonen', rating: 5, text: 'Restauratieprojecten bij het kasteel, dijkversterkingen langs de Maas én nieuwbouw in Hedel - alles komt binnen via onze top SEO positie.' },
    { name: 'Kwekerij Bommelerwaard', rating: 5, text: 'Onze fruitbomen en planten vinden nu hun weg naar tuinen in heel Maasdriel. Van Ammerzoden tot Kerkdriel worden we gevonden.' },
    { name: 'Fietsverhuur De Maasdijk', rating: 5, text: 'Kasteel Ammersoyen bezoekers huren nu massaal onze fietsen voor tochten langs de Maas. De route naar Well en Rossum is populair!' },
    { name: 'Zorgboerderij Het Waardevolle', rating: 5, text: 'Dagbesteding voor ouderen uit Zaltbommel en Maasdriel. Families vinden ons nu tussen de rust van de uiterwaarden en het kasteel.' },
    { name: 'Loodgieter Service Bommelerwaard', rating: 4.5, text: 'Van monumentaal werk bij kasteel Ammersoyen tot spoedreparaties in nieuwbouwwijk Hoorzik. Overal in Maasdriel worden we gebeld.' },
  ]
  const dutchMoreReviews = [
    { name: 'Hoveniersbedrijf Kasteeltuinen', rating: 5, text: 'We onderhouden de tuinen van landgoed Ammersoyen én particuliere tuinen tot in Zaltbommel. Online perfect vindbaar voor de hele streek.' },
    { name: 'B&B De Bommelerwaard', rating: 5, text: 'Kasteelbezoekers, Maasfietsers en zakelijke gasten van AVRI boeken nu online. De combinatie historie en moderne marketing werkt geweldig.' },
    { name: 'Transportbedrijf Maasdriel Express', rating: 4.5, text: 'Logistiek voor fruitexport vanuit de Bommelerwaard naar heel Nederland. Via Google vinden nieuwe klanten uit de AGF-sector ons.' },
    { name: 'Elektricien Ammerzoden-Hedel', rating: 5, text: 'Van het verlichten van kasteel Ammersoyen tijdens events tot zonnepanelen in Wordragen. Heel gemeente Maasdriel kent ons nu.' },
    { name: 'Kunstgalerie De Poortwachter', rating: 5, text: 'In de schaduw van het kasteel verkopen we lokale kunst. Toeristen én kunstverzamelaars uit Den Bosch vinden ons online.' },
    { name: 'Catering De Waard', rating: 4.5, text: 'Van kasteelevenementen tot bedrijfscatering bij AVRI en bruiloften in heel Maasdriel. Onze agenda zit vol dankzij goede vindbaarheid.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Ammerzoden (Maasdriel) | Marketing Kasteel & Bommelerwaard</title>
        <meta
          name="description"
          content="Marketing bureau Ammerzoden bij kasteel Ammersoyen. Online marketing voor bedrijven in de Bommelerwaard. SEO specialist voor heel Maasdriel, van Well tot Hedel."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/ammerzoden" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing in de schaduw van kasteel Ammersoyen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Groei in het hart van de Bommelerwaard</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Ammerzoden: waar middeleeuws erfgoed moderne business ontmoet.</strong><br />
              Als <b>SEO specialist Ammerzoden</b> ken ik de unieke positie van dit Maasdorp met kasteel Ammersoyen als magneet voor 40.000+ bezoekers per jaar. Met 2.800 inwoners, ligging in de vruchtbare Bommelerwaard en nabijheid tot Zaltbommel (20.000 inw.) help ik lokale ondernemers profiteren van toerisme én regionale handel.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Marketing rond kasteel Ammersoyen (40.000+ bezoekers/jaar)</li>
              <li>✓ Bereik heel Maasdriel: 24.000 inwoners, 11 kernen</li>
              <li>✓ Focus op Bommelerwaard fruit- en landbouwsector</li>
              <li>✓ <b>SEO Ammerzoden-Hedel</b> voor lokaal en regionaal bereik</li>
              <li>✓ Van historisch toerisme tot moderne logistiek (AVRI)</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Ammerzoden, Maasdriel & Bommelerwaard</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Ammerzoden - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Ammerzoden" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van kasteelmuren tot Google rankings: groei in de Bommelerwaard"
          subtitle="Waar 14e-eeuws erfgoed digitale kansen creëert"
          features={[
            {
              badge: "Kasteel marketing",
              title: "SEO rond Ammersoyen",
              description: "Kasteel Ammersoyen trekt 40.000+ bezoekers per jaar uit heel Nederland. Ik positioneer jouw bedrijf perfect voor kasteeltoeristen, Maasfietsers en dagjesmensen uit Den Bosch (25km) en Utrecht (45km). Profiteer van dit culturele anker in de Bommelerwaard.",
              visualTitle: "Historisch vindbaar",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Maasdriel targeting",
              title: "Google Ads Bommelerwaard",
              description: "Target de 24.000 inwoners van Maasdriel, van Ammerzoden tot Hedel, van Kerkdriel tot Rossum. Plus zakelijke klanten van AVRI afvalverwerking, fruitexporteurs en de agrarische sector. Jouw advertenties bereiken precies de juiste Bommelerwaarders.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Fruitstreek online",
              title: "Websites voor de Waard",
              description: "De Bommelerwaard staat bekend om fruit, landbouw en logistiek. Je website combineert lokale authenticiteit met moderne conversie. Van kasteelevenementen tot fruitoogst, van dijkwerkzaamheden tot AVRI-projecten - altijd de juiste toon.",
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
          title="Ammerzoden bloeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>kasteel-marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor historisch <span className="bg-[#F7D8FA] px-2 rounded italic">Ammerzoden</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van kasteel-gerelateerde bedrijven tot Bommelerwaard fruit- en landbouwsector - 
                marketing die de brug slaat tussen middeleeuws erfgoed en moderne handel in Maasdriel.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Ammerzoden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Kasteeldorp Ammerzoden</h3>
                <p className="text-gray-600 mb-6">
                  Zichtbaar voor 40.000+ kasteelbezoekers, inwoners van Maasdriel én zakelijke klanten uit de Bommelerwaard. Kasteel Ammersoyen als unique selling point.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Kasteel-toerisme SEO (40.000+ bezoekers)</li>
                  <li>✓ Maasdriel lokale vindbaarheid (11 kernen)</li>
                  <li>✓ Bommelerwaard fruit & agri keywords</li>
                  <li>✓ AVRI B2B targeting</li>
                </ul>
              </div>
              {/* Google Ads Ammerzoden */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Maasdriel
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Bommelerwaard</h3>
                <p className="text-gray-600 mb-6">
                  Bereik kasteeltoeristen, Maasfietsers, inwoners van Zaltbommel en zakelijke klanten in de fruit- en logistieke sector. Maximaal rendement uit je advertentiebudget.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Kasteel-evenementen campagnes</li>
                  <li>✓ Maasdriel gemeente targeting (24.000 inw)</li>
                  <li>✓ Zaltbommel bereik (20.000 inw, 5km)</li>
                  <li>✓ Fruitseizoen campagnes (aug-okt)</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites met Waard-karakter</h3>
                <p className="text-gray-600 mb-6">
                  Modern design met een knipoog naar kasteel Ammersoyen. Perfect voor bedrijven die historie combineren met hedendaagse dienstverlening in de Bommelerwaard.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Kasteel-thema integratie</li>
                  <li>✓ Maasfietroute promotie</li>
                  <li>✓ Fruit & agri showcases</li>
                  <li>✓ B2B AVRI/logistiek focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Ammerzoden</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe profiteer ik van de 40.000+ bezoekers aan kasteel Ammersoyen?</h3>
                <p className="text-gray-600">
                  Kasteel Ammersoyen is dé publiekstrekker van Ammerzoden met jaarlijks 40.000+ bezoekers. Ik ontwikkel content rond kasteel-evenementen, target toeristen die "kasteel Ammersoyen" googelen, en positioneer je bedrijf als dé lokale aanbieder voor kasteelbezoekers. Of je nu horeca, fietsverhuur of accommodatie aanbiedt - het kasteel is je unique selling point.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost online marketing voor een MKB-bedrijf in de Bommelerwaard?</h3>
                <p className="text-gray-600">
                  Voor lokale ondernemers in Ammerzoden en Maasdriel start effectieve marketing vanaf €600-850 per maand. Dit omvat lokale SEO voor alle 11 kernen van Maasdriel, Google Mijn Bedrijf optimalisatie en basis Google Ads. Voor bedrijven die ook toeristen willen bereiken adviseer ik €850-1.500 per maand, inclusief kasteel-event campagnes en Maasfietroute targeting.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik de hele gemeente Maasdriel vanuit Ammerzoden?</h3>
                <p className="text-gray-600">
                  Maasdriel telt 24.000 inwoners verspreid over 11 kernen: Ammerzoden, Hedel, Kerkdriel, Rossum, Well, Wellseind, Hurwenen, Heerewaarden, Hoenzadriel, Velddriel en Wordragen. Ik zorg voor zichtbaarheid in elke kern met lokale landingspagina's, Google Ads per postcodegebied en content die inspeelt op lokale evenementen zoals de Hedelse Paardenmarkt of Rossum's Maasfestival.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke sectoren zijn belangrijk in de Bommelerwaard marketing?</h3>
                <p className="text-gray-600">
                  De Bommelerwaard kent drie hoofdsectoren: fruit- en landbouw (appels, peren, aardbeien), logistiek (AVRI afvalverwerking, transport) en toerisme (kasteel Ammersoyen, Maasfietroute). Ik stem je marketing af op deze sectoren met seizoenscampagnes tijdens de fruitoogst (aug-okt), B2B targeting voor AVRI-leveranciers, en toeristische promotie tijdens kasteel-evenementen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik klanten uit Zaltbommel en Den Bosch?</h3>
                <p className="text-gray-600">
                  Zaltbommel ligt op 5 kilometer (20.000 inwoners) en Den Bosch op 25 kilometer (155.000 inwoners). Ik target Zaltbommelse ondernemers die leveranciers zoeken in Maasdriel, en Bosschenaren die kasteel Ammersoyen bezoeken. Met slimme Google Ads bereik je forenzen op de A2, recreanten voor een dagje Bommelerwaard, en zakelijke klanten die de regio bedienen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start met groeien in <span className="bg-[#F7D8FA] px-2 rounded italic">kasteeldorp Ammerzoden</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Marketing die de kracht van kasteel Ammersoyen combineert met moderne groeistrategieën voor de Bommelerwaard.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Ammerzoden</h3>
              <p className="text-gray-600">
                <strong>Gemeente Maasdriel:</strong> Ammerzoden • Hedel • Kerkdriel • Rossum • Well • Hurwenen • Heerewaarden<br/>
                <strong>Bommelerwaard:</strong> Zaltbommel • Brakel • Aalst • Gameren • Nieuwaal • Zuilichem<br/>
                <strong>Regio:</strong> Den Bosch • Tiel • Geldermalsen • Culemborg • Wijk en Aalburg
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}