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

export default function MarketingOudewater() {
  // Lokale Oudewater reviews - historische heksenstad
  const dutchReviews = [
    { name: 'Museum De Heksenwaag', rating: 5, text: 'Ons wereldberoemde heksenwaag museum krijgt nu 40% meer internationale bezoekers. Perfecte SEO voor "witch weighing house Netherlands"!' },
    { name: 'Kaashandel Oudewater', rating: 5, text: 'Sinds de marketing komen toeristen uit heel Europa voor onze Goudse kaas. We staan top voor "cheese shop Oudewater"!' },
    { name: 'Restaurant Marktplein', rating: 4.5, text: 'Ons restaurant aan het historische marktplein zit vol met dagjesmensen uit de Randstad. Geweldige lokale vindbaarheid!' },
    { name: 'B&B De Oude Stad', rating: 5, text: 'Onze B&B in de binnenstad is constant volgeboekt. Gasten vinden ons perfect via "overnachten historisch Oudewater".' },
    { name: 'Schildersbedrijf Lange Linschoten', rating: 5, text: 'Als specialist in monumentaal schilderwerk krijgen we nu opdrachten uit heel Midden-Nederland. Top marketing strategie!' },
    { name: 'Fietsverhuur De IJsselbode', rating: 5, text: 'Fietstoeristen op de Hollandse IJssel route vinden ons nu moeiteloos. De Google Ads werken perfect in het seizoen!' },
  ]
  
  const dutchMoreReviews = [
    { name: 'Antiquariaat Oudewater', rating: 5, text: 'Verzamelaars uit binnen- en buitenland vinden onze historische boeken nu online. Internationale SEO die echt werkt!' },
    { name: 'Kapper Leeuweringerstraat', rating: 4.5, text: 'Onze kapsalon in het centrum trekt nu klanten uit Montfoort, Lopik en Haastrecht. Perfect lokaal bereik!' },
    { name: 'Aannemersbedrijf Historisch Hart', rating: 5, text: 'Als specialist in monumentenrestauratie worden we nu gevonden door heel Utrecht. Game changer voor ons bedrijf!' },
    { name: 'Galerie De Markt', rating: 5, text: 'Kunstliefhebbers uit Amsterdam en Utrecht bezoeken nu onze galerie. De online strategie heeft onze verkoop verdubbeld!' },
    { name: 'Bakkerij Havenstraat', rating: 5, text: 'Mensen rijden vanuit Gouda en Woerden voor onze Oudewaterse kruidkoek. Structurele groei dankzij goede vindbaarheid!' },
    { name: 'Sportschool FysioFit', rating: 4.5, text: 'Onze sportschool aan de Waardsedijk trekt nu leden uit de hele Lopikerwaard. Marketing die meetbaar resultaat levert!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Oudewater | Marketing Bureau Heksenstad | Utrecht</title>
        <meta
          name="description"
          content="SEO Specialist Oudewater ✓ Online groeien in historische heksenstad ✓ Bereik 10.000 inwoners + toeristen ✓ Heksenwaag marketing ✓ Kaasstad SEO ✓ Bel nu!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/oudewater" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Oudewater: waar heksen gewogen werden en bedrijven groeien</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">10.000 inwoners, wereldwijde faam</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Oudewater: kleinste stad van Nederland met de grootste geschiedenis.</strong><br />
              Wereldberoemd door de Heksenwaag (sinds 1482), gelegen aan de Hollandse IJssel tussen Gouda (12 km) en Utrecht (20 km). Deze historische Hanzestad met zijn pittoreske marktplein, monumentale panden en sterke kaastradities trekt jaarlijks 100.000+ toeristen. Als <b>SEO specialist Oudewater</b> help ik de 400+ lokale ondernemers profiteren van deze unieke combinatie van historie, toerisme en centrale ligging in het Groene Hart.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Oudewater: dominant in Lopikerwaard</li>
              <li>✓ Google Ads: bereik toeristen & Groene Hart</li>
              <li>✓ Profiteer van 100.000+ Heksenwaag bezoekers</li>
              <li>✓ <b>Marketing bureau Oudewater</b> met historische expertise</li>
              <li>✓ Websites die traditie en moderniteit verbinden</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Start jouw groei in Oudewater <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk lokale successen
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in Oudewater, Montfoort & Lopikerwaard</p>
            <p className="mt-2 text-xs text-green-600">📞 Directe hulp? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Oudewater - Marketing Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Expert Oudewater" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Digitaal toveren vanuit historisch Oudewater"
          subtitle="Van Heksenwaag tot Google top, bewezen succes"
          features={[
            {
              badge: "SEO Oudewater",
              title: "Historische SEO Strategie",
              description: "Word gevonden door toeristen bij de Heksenwaag, kaasliefhebbers én lokale klanten uit het Groene Hart. Unieke content die scoort.",
              visualTitle: "100K+ toeristen",
              visualSubtitle: "Jaarlijks bereik",
              image: masterSeoImage
            },
            {
              badge: "Google Ads Specialist",
              title: "Toerisme & Lokale Campagnes",
              description: "Target Heksenwaag bezoekers, kaastoeristen en inwoners van Gouda, Woerden en Utrecht. Maximaal rendement uit elke euro.",
              visualTitle: "Groene Hart",
              visualSubtitle: "Breed bereik",
              image: keywordResearchImage
            },
            {
              badge: "Website & Branding",
              title: "Authentiek Online Presenteren",
              description: "Een website die de rijke historie van Oudewater combineert met moderne conversietechnieken. Perfect voor toerisme én lokale diensten.",
              visualTitle: "Meer omzet",
              visualSubtitle: "Historische charme",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Oudewaterse ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>magische marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing & SEO Expert in <span className="bg-[#F7D8FA] px-2 rounded italic">Oudewater</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van monumentaal pand tot moderne webshop – groei mee met de kleinste stad van Nederland.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Oudewater */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Oudewater</h3>
                <p className="text-gray-600 mb-6">
                  Domineer Google voor Oudewater, Heksenwaag, kaasstad en alle lokale zoekwoorden die tellen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Top voor "Heksenwaag bezoeken"</li>
                  <li>✓ Kaas & toerisme keywords</li>
                  <li>✓ Historisch centrum SEO</li>
                  <li>✓ Google Mijn Bedrijf optimaal</li>
                </ul>
              </div>
              {/* Google Ads Lopikerwaard */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Groene Hart
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Campagnes</h3>
                <p className="text-gray-600 mb-6">
                  Bereik toeristen, dagjesmensen uit de Randstad en lokale klanten met slimme advertenties.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Target Heksenwaag bezoekers</li>
                  <li>✓ Bereik Gouda & Woerden</li>
                  <li>✓ Kaastoerisme campagnes</li>
                  <li>✓ B2B Lopikerwaard</li>
                </ul>
              </div>
              {/* Complete Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">360° Marketing Strategie</h3>
                <p className="text-gray-600 mb-6">
                  Complete online aanpak voor groei van historisch Oudewater naar moderne toekomst.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Professionele websites</li>
                  <li>✓ Social media voor toerisme</li>
                  <li>✓ E-mail marketing flows</li>
                  <li>✓ Content over historie & nu</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar voor magische groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Oudewater</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Net als de Heksenwaag wereldfaam – laat jouw bedrijf online de hoofdrol spelen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek jouw groeikansen in historisch Oudewater.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp contact</h3>
                <p className="text-gray-600 mb-4">Snel antwoord op al je marketing vragen.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied Oudewater & Lopikerwaard</h3>
              <p className="text-gray-600">
                Marktplein • Leeuweringerstraat • Havenstraat • Waardsedijk • Kapellestraat • Noord-IJsselkade • Plus bereik in: Montfoort • Lopik • Haastrecht • Hekendorp • Papekop • Snelrewaard • Driebruggen • Gouda • Woerden • IJsselstein
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}