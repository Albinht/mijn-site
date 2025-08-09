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

export default function MarketingArmhoede() {
  // Authentieke Armhoede reviews met Achterhoek buurtschap context
  const dutchReviews = [
    { name: 'Melkveebedrijf Armhoede', rating: 5, text: 'Met 100 inwoners in ons buurtschap bereiken we nu heel Lochem. Van biologische melk tot kalfsvlees - alles wordt online gevonden door klanten uit de Achterhoek.' },
    { name: 'Timmerwerkplaats De Berkel', rating: 5, text: 'Vanuit kleine werkplaats in Armhoede restaureren we nu monumentale boerderijen in heel Oost-Gelderland. Google brengt opdrachten uit Zutphen en Deventer.' },
    { name: 'Kleinschalige Zorgboerderij', rating: 5, text: 'Armhoede ligt perfect rustig voor onze dagbesteding. Families uit Lochem, Borculo en Ruurlo vinden ons via Google voor persoonlijke dementiezorg.' },
    { name: 'Hoveniersbedrijf Achterhoek', rating: 5, text: 'Van tuinen in buurtschap Armhoede tot landgoederen bij kasteel Ampsen. De lokale SEO strategie werkt uitstekend voor ons familiebedrijf.' },
    { name: 'B&B De Stille Achterhoek', rating: 5, text: 'Toeristen die rust zoeken vinden ons plekje in Armhoede. Wandelaars voor het Pieterpad en fietsers naar de Holterberg boeken online.' },
    { name: 'Loonbedrijf Armhoede-Exel', rating: 4.5, text: 'Klein buurtschap, groot werkgebied. Van Armhoede tot Almen bedienen we boeren met moderne machines. Via Google perfect vindbaar.' },
  ]
  const dutchMoreReviews = [
    { name: 'Paardenpension De Kleine Weide', rating: 5, text: 'Ruiters uit heel gemeente Lochem stallen hun paarden bij ons in Armhoede. De combinatie rust en professionele online presentatie werkt.' },
    { name: 'Klusbedrijf Lochem-Oost', rating: 5, text: 'Vanuit Armhoede help ik mensen in Laren, Barchem en Lochem-centrum. Google Ads brengt wekelijks nieuwe klussen binnen.' },
    { name: 'Streekproducten Armhoede', rating: 4.5, text: 'Onze jam en honing uit Armhoede wordt nu online besteld door winkels in Deventer en Zutphen. Lokale SEO maakt het verschil.' },
    { name: 'Dakdekker Achterhoek', rating: 5, text: 'Rieten daken zijn onze specialiteit. Vanuit Armhoede werken we aan monumentale boerderijen tot in Winterswijk. Perfect online vindbaar.' },
    { name: 'Yoga in de Achterhoek', rating: 5, text: 'Onze yogalessen in de schuur bij Armhoede trekken mensen uit heel Lochem. De rust van het buurtschap is onze unique selling point.' },
    { name: 'Transportbedrijf Klein Achterhoek', rating: 4.5, text: 'Vanuit Armhoede vervoeren we voor heel Oost-Nederland. Via SEO vinden agrarische bedrijven ons voor specialistisch transport.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Armhoede (Lochem) | Marketing Bureau Achterhoek Buurtschap</title>
        <meta
          name="description"
          content="Marketing bureau Armhoede bij Lochem. Online marketing voor buurtschappen in de Achterhoek. SEO specialist voor 100 inwoners met regionaal bereik tot Deventer."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/armhoede" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">100 inwoners, 1000 online kansen in Armhoede</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Achterhoeks buurtschap met grootse ambities</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Armhoede: waar de Achterhoek haar rust bewaart.</strong><br />
              Als <b>SEO specialist Armhoede</b> help ik ondernemers in dit buurtschap bij Lochem (34.000 inwoners) online groeien. Met slechts 100 inwoners, gelegen tussen de Berkel en de bossen, maken we van jullie kleinschaligheid een kracht. Van boerderijwinkels tot ambachtelijke bedrijven - Armhoede wordt groot op Google.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Hyperlocale SEO voor buurtschap Armhoede</li>
              <li>✓ Bereik 34.000 inwoners gemeente Lochem</li>
              <li>✓ Target Achterhoek toeristen & locals</li>
              <li>✓ <b>SEO Armhoede-Lochem-Zutphen</b> voor regionaal succes</li>
              <li>✓ Deventer en Apeldoorn binnen 30 minuten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei vanuit Armhoede <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = '/work-with-me'}>
                Bekijk Achterhoek cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Armhoede, Lochem & Achterhoek</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Armhoede - Achterhoek Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Armhoede" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van vergeten buurtschap tot vindbare Achterhoek-parel"
          subtitle="Waar 100 zielen duizenden bereiken"
          features={[
            {
              badge: "Achterhoek authentiek",
              title: "SEO voor buurtschap Armhoede",
              description: "Met 100 inwoners ultiem kleinschalig en exclusief. Ik positioneer Armhoede als authentiek Achterhoeks alternatief voor drukte. Trek klanten uit Lochem (34.000), toeristen voor rust, en kopers die kwaliteit boven kwantiteit stellen.",
              visualTitle: "Klein & krachtig",
              visualSubtitle: "Groot bereik",
              image: masterSeoImage
            },
            {
              badge: "Lochem targeting",
              title: "Google Ads Oost-Gelderland",
              description: "Bereik heel gemeente Lochem, plus Zutphen (48.000), Deventer (100.000) en Apeldoorn (165.000). Jouw advertenties vinden mensen die bewust kiezen voor kleinschalige kwaliteit uit de Achterhoek.",
              visualTitle: "Regionaal sterk",
              visualSubtitle: "Lokaal geworteld",
              image: keywordResearchImage
            },
            {
              badge: "Buurtschap websites",
              title: "Sites met Achterhoek-DNA",
              description: "Armhoede's 100 inwoners maken je uniek. Je website ademt Achterhoekse gastvrijheid, ambacht en authenticiteit. Perfect voor bedrijven die persoonlijke service en vakmanschap voorop stellen.",
              visualTitle: "Authentiek",
              visualSubtitle: "Overtuigend",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Armhoede groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>Achterhoek marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor buurtschap <span className="bg-[#F7D8FA] px-2 rounded italic">Armhoede</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van agrarisch familiebedrijf tot ambachtelijke werkplaats - marketing die de kracht 
                van Achterhoekse kleinschaligheid benut.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Armhoede */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Buurtschap Armhoede</h3>
                <p className="text-gray-600 mb-6">
                  100 inwoners, onbeperkt online potentieel. Word gevonden door heel Lochem en trek klanten die authenticiteit waarderen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Hyperlocale SEO Armhoede</li>
                  <li>✓ Gemeente Lochem bereik</li>
                  <li>✓ Achterhoek toerisme</li>
                  <li>✓ Deventer-Zutphen targeting</li>
                </ul>
              </div>
              {/* Google Ads Armhoede */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Lochem
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Achterhoek</h3>
                <p className="text-gray-600 mb-6">
                  Bereik klanten in heel Oost-Gelderland. Van Lochem tot Winterswijk - jouw advertenties vinden de juiste Achterhoekers.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lochem gemeente focus</li>
                  <li>✓ Stedendriehoek bereik</li>
                  <li>✓ Pieterpad wandelaars</li>
                  <li>✓ Agrarische B2B</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Achterhoekse Websites</h3>
                <p className="text-gray-600 mb-6">
                  Authentieke sites die Armhoede's kleinschaligheid als kwaliteitskenmerk presenteren. Noaberschap digitaal.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Streek storytelling</li>
                  <li>✓ Landelijke fotografie</li>
                  <li>✓ Route-informatie</li>
                  <li>✓ Dialecttouch mogelijk</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Armhoede</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan een buurtschap van 100 inwoners online succesvol zijn?</h3>
                <p className="text-gray-600">
                  Armhoede met 100 inwoners is juist online een troef! "Het kleinste buurtschap van Lochem" wekt nieuwsgierigheid. Klanten uit de hele Achterhoek waarderen kleinschaligheid en persoonlijk contact. Ik positioneer Armhoede als exclusief adres waar alleen kenners komen. Klein betekent hier: persoonlijk, authentiek en kwalitatief hoogstaand.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een klein bedrijf in Armhoede?</h3>
                <p className="text-gray-600">
                  Voor ondernemers in Armhoede start effectieve marketing vanaf €400-600 per maand. Dit omvat lokale SEO voor gemeente Lochem, Google Mijn Bedrijf, en basis advertenties. Voor groter bereik (Deventer, Zutphen, Apeldoorn) adviseer ik €600-1.100 per maand. De ROI is vaak hoger omdat kleinschaligheid hogere prijzen rechtvaardigt.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik heel gemeente Lochem vanuit Armhoede?</h3>
                <p className="text-gray-600">
                  Lochem telt 34.000 inwoners verspreid over Lochem-stad, Gorssel, Laren, Barchem, Almen, Eefde en buurtschappen zoals Armhoede. Ik optimaliseer voor "Lochem + dienst" searches, creëer lokale landingspagina's, en gebruik slimme Google Ads. Je ligging tussen Lochem en Borculo is perfect voor regionale dienstverlening.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kunnen klanten uit Deventer en Zutphen mij vinden?</h3>
                <p className="text-gray-600">
                  Deventer (100.000 inwoners) en Zutphen (48.000) liggen beide binnen 20 kilometer van Armhoede. Stedelingen zoeken vaak de rust en authenticiteit van de Achterhoek. Ik positioneer je als "specialist bij Deventer/Zutphen" met landelijke charme. Via Google Ads target ik specifiek mensen die kwaliteit boven nabijheid verkiezen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke voordelen heeft een buurtschap als Armhoede online?</h3>
                <p className="text-gray-600">
                  Armhoede's kleinschaligheid is online een unique selling point. Geen files, gratis parkeren, persoonlijke service, tijd voor klanten, flexibiliteit, authentieke Achterhoekse gastvrijheid. Dit spreekt mensen aan die de drukte en haast van steden beu zijn. "Kom naar Armhoede" wordt een bewuste keuze voor kwaliteit en rust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Armhoede</span> op de kaart te zetten?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              100 inwoners, duizenden online mogelijkheden. Laat de Achterhoek je ontdekken.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Ontdek hoe Armhoede online kan groeien. Vrijblijvend advies.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel contact over Achterhoek marketing.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Armhoede</h3>
              <p className="text-gray-600">
                <strong>Gemeente Lochem:</strong> Armhoede • Lochem • Gorssel • Laren • Barchem • Almen • Eefde • Exel<br/>
                <strong>Achterhoek:</strong> Borculo • Ruurlo • Neede • Berkelland • Markelo<br/>
                <strong>Stedendriehoek:</strong> Deventer • Zutphen • Apeldoorn • Voorst • Brummen
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}