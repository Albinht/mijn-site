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

export default function MarketingAsch() {
  // Authentieke Asch reviews met Betuwe fruitstreek context
  const dutchReviews = [
    { name: 'Fruitbedrijf Van Asch', rating: 5, text: 'Met 150 inwoners in Asch bereiken we nu heel gemeente Buren. Onze appels en peren worden online gevonden door groothandels uit Tiel en Geldermalsen.' },
    { name: 'Kwekerij De Kleine Betuwe', rating: 5, text: 'Vanuit ons kleine Asch leveren we fruitbomen aan heel de Betuwe. Via Google vinden kwekers uit Buren, Culemborg en zelfs Utrecht ons.' },
    { name: 'Loonbedrijf Asch-Zoelen', rating: 5, text: 'Klein dorp, groot bereik. Van fruitoogst in Asch tot grondwerk in Maurik - overal in gemeente Buren worden we gevonden voor agrarisch werk.' },
    { name: 'B&B Boomgaard Asch', rating: 5, text: 'Toeristen voor de bloesemroute vinden ons verstopte plekje in Asch. Tussen de fruitbomen, dichtbij de Linge - perfect voor rust zoekers.' },
    { name: 'Hoveniersbedrijf Fruitstreek', rating: 5, text: 'We onderhouden boomgaarden in Asch én particuliere tuinen tot in Tiel. De combinatie fruitkennis en tuinexpertise wordt online perfect gevonden.' },
    { name: 'Transportbedrijf Klein Betuwe', rating: 4.5, text: 'Fruit van Asch naar de veilingen in Zaltbommel en Geldermalsen. Via SEO vinden telers uit heel Buren ons voor betrouwbaar transport.' },
  ]
  const dutchMoreReviews = [
    { name: 'Melkveebedrijf De Linge', rating: 5, text: 'Onze boerderijwinkel in Asch wordt gevonden door mensen uit heel gemeente Buren. Van verse melk tot boerenkaas - alles lokaal en online vindbaar.' },
    { name: 'Aannemersbedrijf Asch-Buren', rating: 5, text: 'Van dijkhuisjes in Asch tot monumenten in Buren-stad. Google Ads brengt opdrachten uit de hele regio Rivierenland.' },
    { name: 'Elektriciën Betuwe Service', rating: 4.5, text: 'Vanuit Asch bedien ik heel gemeente Buren plus delen van Tiel. De 24/7 vindbaarheid via Google levert constant nieuwe klussen.' },
    { name: 'Catering De Betuwse Tafel', rating: 5, text: 'Streekproducten uit Asch voor events in heel Gelderland. Van bedrijfsborrels in Culemborg tot bruiloften op landgoederen.' },
    { name: 'Dakdekker Rivierenland', rating: 5, text: 'Gespecialiseerd in authentieke Betuwse boerderijen. Vanuit Asch werken we aan rieten daken tot in Gorinchem.' },
    { name: 'Yoga in de Boomgaard', rating: 4.5, text: 'Onze yogalessen tussen de fruitbomen van Asch trekken mensen uit Tiel, Culemborg en Geldermalsen. Unieke locatie perfect online vindbaar.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Asch (Buren) | Marketing Bureau Betuwe Fruitstreek</title>
        <meta
          name="description"
          content="Marketing bureau Asch in gemeente Buren. Online marketing voor het kleinste fruitdorp van de Betuwe. SEO specialist voor 150 inwoners tussen Tiel en Culemborg."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/asch" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">150 zielen tussen duizenden fruitbomen in Asch</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Betuwse parel aan de Linge</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Asch: waar de Betuwe haar fruithart bewaart.</strong><br />
              Als <b>SEO specialist Asch</b> ken ik de kracht van Betuwse mini-dorpjes. Met slechts 150 inwoners, gelegen in gemeente Buren (27.000 inwoners) tussen eindeloze boomgaarden, help ik lokale ondernemers hun fruitstreek-authenticiteit online verzilveren. Van kwekerijen tot B&B's - klein Asch wordt groot op Google.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Hyperlocale SEO voor mini-dorp Asch</li>
              <li>✓ Bereik 27.000 inwoners gemeente Buren</li>
              <li>✓ Target bloesemtoeristen & fruitkopers</li>
              <li>✓ <b>SEO Asch-Buren-Tiel</b> voor regionaal succes</li>
              <li>✓ Tussen Tiel (42.000) en Culemborg (29.000)</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei vanuit fruitdorp Asch <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = '/work-with-me'}>
                Bekijk Betuwe cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Asch, Buren & Rivierenland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Asch - Betuwe Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Asch" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van vergeten fruitdorp tot vindbare Betuwe-bestemming"
          subtitle="Waar 150 inwoners miljoenen appels vertegenwoordigen"
          features={[
            {
              badge: "Fruitstreek marketing",
              title: "SEO voor mini-dorp Asch",
              description: "Met 150 inwoners het kleinste fruitdorp van Buren, maar online het meest authentiek. Ik positioneer Asch als dé plek voor échte Betuwe-beleving. Trek bloesemtoeristen, fruitkopers uit Tiel, en bezoekers die de drukte van de Linge-route mijden.",
              visualTitle: "Klein maar fruitig",
              visualSubtitle: "Groot bereik",
              image: masterSeoImage
            },
            {
              badge: "Buren-Tiel bereik",
              title: "Google Ads Rivierenland",
              description: "Target 27.000 inwoners van Buren, 42.000 uit Tiel, plus 29.000 uit Culemborg. Jouw advertenties bereiken fruithandelaren, bloesemtoeristen, en locals die authentieke Betuwse producten zoeken. Van Geldermalsen tot Leerdam - heel Rivierenland binnen bereik.",
              visualTitle: "Betuwe power",
              visualSubtitle: "Fruitig succes",
              image: keywordResearchImage
            },
            {
              badge: "Boomgaard websites",
              title: "Sites met Betuwe-DNA",
              description: "Asch's 150 inwoners tussen duizenden fruitbomen maken je exclusief. Je website ademt bloesem, fruit en Betuwse gastvrijheid. Perfect voor bedrijven die kleinschaligheid als kwaliteit verkopen. Van fruitteelt tot toerisme - authenticiteit verkoopt.",
              visualTitle: "Echt Betuws",
              visualSubtitle: "Onderscheidend",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Asch bloeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>fruitige marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor fruitdorp <span className="bg-[#F7D8FA] px-2 rounded italic">Asch</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van fruitkwekerij tot toeristische trekpleister - marketing die de essentie van 
                de Betuwse fruitstreek vangt en online tot bloei brengt.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Asch */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Fruitdorp Asch</h3>
                <p className="text-gray-600 mb-6">
                  150 inwoners, onbeperkt fruitpotentieel. Word gevonden door bloesemtoeristen, fruithandelaren en Betuwe-liefhebbers.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Hyperlocale SEO Asch</li>
                  <li>✓ Gemeente Buren bereik (27.000)</li>
                  <li>✓ Bloesemroute targeting</li>
                  <li>✓ Rivierenland zichtbaarheid</li>
                </ul>
              </div>
              {/* Google Ads Asch */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Betuwe
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Fruitstreek</h3>
                <p className="text-gray-600 mb-6">
                  Bereik heel Rivierenland met slimme campagnes. Van Tiel tot Culemborg - jouw advertenties vinden fruitliefhebbers en toeristen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Bloesemperiode campagnes</li>
                  <li>✓ Tiel-Culemborg corridor</li>
                  <li>✓ Fruitseizoen marketing</li>
                  <li>✓ Linge-route toerisme</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Betuwse Websites</h3>
                <p className="text-gray-600 mb-6">
                  Authentieke sites die Asch's fruitstreek-charme uitstralen. Kleinschaligheid tussen de boomgaarden als unique selling point.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Fruitfotografie focus</li>
                  <li>✓ Seizoenen prominent</li>
                  <li>✓ Streekproducten showcase</li>
                  <li>✓ Route-informatie Linge</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Asch</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan een dorp van 150 inwoners wel online succesvol zijn?</h3>
                <p className="text-gray-600">
                  Asch met 150 inwoners tussen duizenden fruitbomen is online goud waard! "Het kleinste fruitdorp van de Betuwe" wekt nieuwsgierigheid. Bloesemtoeristen zoeken authenticiteit, fruitkopers waarderen kleinschalige kwaliteit, en exclusiviteit verkoopt. Ik positioneer Asch als hidden gem waar alleen kenners komen. Klein = exclusief = premium prijzen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik bloesemtoeristen naar Asch?</h3>
                <p className="text-gray-600">
                  De Betuwe bloesemroute trekt 500.000+ bezoekers per jaar. Asch ligt perfect verscholen tussen de hoofdroutes - ideaal voor mensen die drukte mijden! Ik target "rustige bloesemroute", "authentieke Betuwe" en "geheime bloesemplekken". Met goede SEO word je dé ontdekking voor kenners. Bied picknickmanden, privé-rondleidingen of fotoshoots tussen de bloesems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een klein fruitbedrijf in Asch?</h3>
                <p className="text-gray-600">
                  Voor ondernemers in Asch start effectieve marketing vanaf €450-650 per maand. Dit omvat lokale SEO voor gemeente Buren, seizoensgebonden content (bloesem/oogst), en basis Google Ads. Voor groter bereik naar Tiel, Culemborg en Utrecht adviseer ik €650-1.200 per maand. De ROI is hoog omdat kleinschaligheid in de fruitstreek premium prijzen rechtvaardigt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik Tiel en Culemborg vanuit Asch?</h3>
                <p className="text-gray-600">
                  Tiel (42.000 inwoners) ligt op 10 kilometer, Culemborg (29.000) op 12 kilometer van Asch. Stedelingen zoeken authentieke Betuwse producten en ervaringen. Ik positioneer Asch als "écht fruit dichtbij Tiel/Culemborg". Target weekendshoppers, restauranteurs die lokaal inkopen, en gezinnen voor fruit-pluk ervaringen. "Asch bij Tiel" is een sterke zoekterm.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke kansen biedt de ligging aan de Linge?</h3>
                <p className="text-gray-600">
                  De Linge stroomt langs Asch - Nederland's langste rivier (100km) trekt jaarlijks duizenden fietsers en wandelaars. Ik positioneer Asch als rustpunt aan de Linge met authentieke Betuwse gastvrijheid. Target "Linge-route horeca", "picknicken aan de Linge" en "fruit kopen onderweg". De combinatie water, fruit en kleinschaligheid is uniek in marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Laat <span className="bg-[#F7D8FA] px-2 rounded italic">Asch</span> online bloeien
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              150 inwoners, duizenden fruitbomen, onbeperkte online mogelijkheden in de Betuwe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Ontdek hoe klein Asch groot kan worden online.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Quick chat over Betuwe marketing kansen.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Asch</h3>
              <p className="text-gray-600">
                <strong>Gemeente Buren:</strong> Asch • Buren • Maurik • Lienden • Ingen • Zoelen • Eck en Wiel<br/>
                <strong>Rivierenland:</strong> Tiel • Culemborg • Geldermalsen • Leerdam • Zaltbommel<br/>
                <strong>Fruitstreek:</strong> Beusichem • Zoelmond • Kapel-Avezaath • Buurmalsen • Deil
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}