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

export default function MarketingAppen() {
  // Authentieke Appen reviews met Waterland en Edam context
  const dutchReviews = [
    { name: 'Boerderij De Waterländer', rating: 5, text: 'Met 200 inwoners in Appen bereiken we nu heel Waterland. Van Edam tot Purmerend vinden klanten onze kaasmakerij via Google.' },
    { name: 'Klusbedrijf Appen-Middelie', rating: 5, text: 'Klein dorp, groot bereik! Vanuit Appen bedienen we nu Edam, Volendam én Hoorn. De lokale SEO strategie werkt perfect voor ons tweemansbedrijf.' },
    { name: 'B&B Het Stille Water', rating: 5, text: 'Toeristen die rust zoeken bij Edam vinden ons plekje in Appen. Via Google bereiken we gasten die de drukte van Volendam willen ontvluchten.' },
    { name: 'Melkveehouderij Appen', rating: 5, text: 'Onze boerderijwinkel in Appen wordt nu gevonden door mensen uit heel Noord-Holland. Van verse melk tot boerenkaas - alles online vindbaar.' },
    { name: 'Watersportbedrijf IJsselmeer', rating: 5, text: 'Vanuit kleine haven Appen bereiken we zeilers op het Markermeer. Duitse en Belgische watersporters vinden ons via tweetalige SEO.' },
    { name: 'Timmerwerk Waterland', rating: 4.5, text: 'Authentieke Waterlandse boerderijen restaureren vanuit Appen. Via Google vinden eigenaren uit Amsterdam-Noord ons voor specialistisch werk.' },
  ]
  const dutchMoreReviews = [
    { name: 'Fietsverhuur Appen-Edam', rating: 5, text: 'Toeristen uit Edam fietsen graag het stille Waterland in. Onze e-bikes in Appen worden perfect gevonden voor poldertochten.' },
    { name: 'Aannemersbedrijf Klein Waterland', rating: 5, text: 'Van dijkhuisjes in Appen tot monumenten in Edam. Google Ads brengt opdrachten uit heel gemeente Edam-Volendam.' },
    { name: 'Kaasboerderij De Kleine Stolp', rating: 4.5, text: 'Appen ligt perfect tussen Edam en Hoorn. Onze boerenkaas wordt nu online besteld door restaurants uit beide steden.' },
    { name: 'Poldercamping Appen', rating: 5, text: '200 inwoners, maar duizenden kampeerders per jaar. Via SEO vinden Amsterdammers ons rustige plekje op 20 minuten van de stad.' },
    { name: 'Zorgboerderij Waterland', rating: 5, text: 'Dagbesteding in de rust van Appen. Families uit Purmerend en Edam vinden ons via Google voor kleinschalige dementiezorg.' },
    { name: 'Elektricien Appen-Kwadijk', rating: 4.5, text: 'Klein dorp, grote regio. Van Appen tot Oosthuizen, van Middelie tot Hobrede - overal worden we gevonden voor elektrawerk.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Appen (Waterland) | Marketing Bureau Edam Omgeving</title>
        <meta
          name="description"
          content="Marketing bureau Appen in Waterland bij Edam. Online marketing voor het kleinste dorp met de grootste kansen. SEO specialist voor 200 inwoners met regionaal bereik."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/appen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">200 zielen, oneindig online potentieel in Appen</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Waterlands pareltje bij wereldberoemd Edam</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Appen: waar Waterland zijn rust bewaart.</strong><br />
              Als <b>SEO specialist Appen</b> ken ik de kracht van Noord-Hollands kleinste dorpjes. Met slechts 200 inwoners, gelegen tussen Edam (7.500 inw) en het IJsselmeer, help ik lokale ondernemers hun Waterlandse authenticiteit verzilveren. Van kaasboeren tot B&B's - klein Appen wordt groot online.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Hyperlocale SEO voor mini-dorp Appen</li>
              <li>✓ Bereik 36.000 inwoners Edam-Volendam</li>
              <li>✓ Target toeristen voor Waterland & kaasmarkt</li>
              <li>✓ <b>SEO Appen-Edam-Hoorn</b> voor regionaal succes</li>
              <li>✓ Amsterdam op slechts 20 minuten afstand</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Groei mee vanuit Appen <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = '/work-with-me'}>
                Bekijk Waterland cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Appen, Waterland & Noord-Holland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Appen - Waterland Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Appen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van poldergeheim tot online powerhouse"
          subtitle="Waar 200 inwoners miljoenen bereiken"
          features={[
            {
              badge: "Waterland troef",
              title: "SEO voor mini-dorp Appen",
              description: "Met 200 inwoners het kleinste, maar online het sterkste. Ik positioneer Appen als authentiek Waterlands alternatief voor druk Edam-Volendam. Trek toeristen die rust zoeken, Amsterdammers op 20 minuten afstand, en kaasliefhebbers wereldwijd.",
              visualTitle: "Klein dorp",
              visualSubtitle: "Grote impact",
              image: masterSeoImage
            },
            {
              badge: "Edam-Volendam bereik",
              title: "Google Ads Waterland",
              description: "Target 36.000 inwoners van Edam-Volendam, 130.000 uit Purmerend, plus miljoenen toeristen per jaar. Jouw advertenties bereiken kaasmarkt-bezoekers, Marker- en IJsselmeer zeilers, en dagjesmensen uit Amsterdam die authentiek Noord-Holland zoeken.",
              visualTitle: "Waterlands bereik",
              visualSubtitle: "Maximum toerisme",
              image: keywordResearchImage
            },
            {
              badge: "Polder websites",
              title: "Sites met Waterland-DNA",
              description: "Appen's 200 inwoners maken jullie exclusief. Je website ademt polderlust, Waterlandse tradities en ongerepte natuur. Perfect voor bedrijven die kleinschaligheid als luxe verkopen. Van boerderijwinkels tot exclusieve B&B's.",
              visualTitle: "Authentiek",
              visualSubtitle: "Onderscheidend",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Appen bloeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>Waterland marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing oplossingen voor pittoresk <span className="bg-[#F7D8FA] px-2 rounded italic">Appen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van melkveehouderij tot toeristische trekpleister - marketing die de stilte van 
                Waterland tot unique selling point maakt.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Appen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Mini-dorp Appen</h3>
                <p className="text-gray-600 mb-6">
                  200 inwoners, onbeperkt potentieel. Word gevonden door toeristen, Edammers en Amsterdammers die authenticiteit zoeken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Hyperlocale SEO Appen</li>
                  <li>✓ Edam-Volendam bereik (36.000)</li>
                  <li>✓ Amsterdam targeting (20 min)</li>
                  <li>✓ Waterland toerisme focus</li>
                </ul>
              </div>
              {/* Google Ads Appen */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Waterland
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Polder Power</h3>
                <p className="text-gray-600 mb-6">
                  Bereik kaasmarkt-bezoekers, watersporters en stedelingen. Slimme campagnes die Appen's rust als luxe positioneren.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Kaasmarkt Edam campaigns</li>
                  <li>✓ Purmerend bereik (130.000)</li>
                  <li>✓ Markermeer watersport</li>
                  <li>✓ Amsterdam daytrippers</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Waterland Websites</h3>
                <p className="text-gray-600 mb-6">
                  Exclusieve sites die Appen's 200 inwoners tot selling point maken. Kleinschaligheid als luxe, stilte als service.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Storytelling focus</li>
                  <li>✓ Polderfotografie</li>
                  <li>✓ Route vanaf Amsterdam</li>
                  <li>✓ Waterland heritage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Appen</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan een dorp van 200 inwoners wel online succesvol zijn?</h3>
                <p className="text-gray-600">
                  Appen met 200 inwoners is juist online een unique selling point! "Het kleinste dorp bij Edam" trekt nieuwsgierige toeristen, Amsterdammers die rust zoeken zijn in 20 minuten bij je, en exclusiviteit verkoopt. Ik positioneer Appen als hidden gem van Waterland waar alleen insiders komen. Kleinschaligheid = exclusiviteit = hogere prijzen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe trek ik toeristen van de Edammer kaasmarkt naar Appen?</h3>
                <p className="text-gray-600">
                  Edam trekt 1 miljoen+ toeristen per jaar voor de kaasmarkt. Appen ligt op 5 minuten fietsen! Ik target "rustig alternatief Edam", "authentiek Waterland" en "ontsnap aan Volendam drukte". Met goede SEO en Google Ads worden kaasmarkt-bezoekers jouw klanten. Bied fietsverhuur, picknicks, of rondleidingen - alles wat de massa in Edam mist.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een microbedrijf in Appen?</h3>
                <p className="text-gray-600">
                  Voor kleine ondernemers in Appen start marketing vanaf €400-600 per maand. Dit omvat lokale SEO voor Waterland, Google Mijn Bedrijf voor toeristen, en basis advertenties in Edam-Volendam. Voor ambitieuzere plannen (Amsterdam bereik, internationale toeristen) adviseer ik €600-1.200 per maand. De ROI is hoog door Appen's exclusiviteit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik Amsterdam vanuit klein Appen?</h3>
                <p className="text-gray-600">
                  Amsterdam ligt op slechts 20 minuten van Appen - dichterbij dan Schiphol! Met 900.000 inwoners is het een gigantische markt. Ik positioneer Appen als "dichtste landelijke escape bij Amsterdam". Target Noord, Waterland-bewoners die hun roots zoeken, en expats die authentiek Nederland willen ervaren. "Appen bij Amsterdam" is goud waard.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke sectoren floreren in een dorp als Appen?</h3>
                <p className="text-gray-600">
                  In Appen excelleren exclusieve B&B's (weinig kamers = hoge prijzen), boerderijwinkels (verse producten voor Edam/Amsterdam), dagrecreatie (fietsverhuur, kano's, picknicks), en ambachtelijke bedrijven (restauratie, kunst). Ook zorgboerderijen en paardenpensions doen het uitstekend. Kleinschaligheid en authenticiteit zijn je grootste troeven online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om <span className="bg-[#F7D8FA] px-2 rounded italic">Appen</span> wereldberoemd te maken?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              200 inwoners, onbeperkte online mogelijkheden. Laat Waterland je ontdekken.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Ontdek hoe klein Appen groot kan worden online.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Quick chat over Waterland marketing mogelijkheden.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Werkgebied rondom Appen</h3>
              <p className="text-gray-600">
                <strong>Waterland dorpen:</strong> Appen • Middelie • Kwadijk • Hobrede • Oosthuizen • Schardam • Warder<br/>
                <strong>Steden:</strong> Edam • Volendam • Purmerend • Hoorn • Monnickendam<br/>
                <strong>Groot bereik:</strong> Amsterdam-Noord • Zaandam • Alkmaar • Markermeer regio
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}