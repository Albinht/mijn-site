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

export default function MarketingEssen() {
  // Lokale Essen reviews - Focus op agrarische sector en lokale MKB
  const dutchReviews = [
    { name: 'Melkveehouderij Essen', rating: 5, text: 'Onze boerderijwinkel wordt nu veel beter gevonden online. Stedelingen uit Amersfoort vinden ons voor verse zuivel!' },
    { name: 'Landbouwmechanisatie Essen', rating: 5, text: 'Google Ads voor tractoronderhoud werkt perfect. Boeren uit de hele Gelderse Vallei bellen nu voor service.' },
    { name: 'Hoveniersbedrijf De Essenaar', rating: 5, text: 'Dankzij lokale SEO krijgen we opdrachten voor villa-tuinen in Voorthuizen en Barneveld. Website ziet er top uit!' },
    { name: 'Paardenpensioen Essenveld', rating: 5, text: 'Marketing gericht op paardenliefhebbers uit de regio werkt geweldig. Stallen zijn nu voor 95% bezet.' },
    { name: 'Boomkwekerij Essen', rating: 5, text: 'Onze laanbomen worden gevonden door gemeentes en aannemers. SEO voor B2B werkt echt voor ons.' },
    { name: 'Loonbedrijf Van Essen', rating: 4.5, text: 'Meer aanvragen voor maaiwerk en grondverzet. Online marketing brengt nieuwe klanten uit heel de vallei.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kippenboerderij De Scharrel', rating: 5, text: 'Onze eieren verkopen nu via de website aan restaurants in Ede. Direct contact met afnemers is goud waard!' },
    { name: 'Akkerbouwbedrijf Essen', rating: 5, text: 'Website voor onze graanverkoop trekt groothandels aan. Professionele uitstraling maakt het verschil.' },
    { name: 'Manege Essense Ruiters', rating: 4.5, text: 'Paardrijlessen worden nu online geboekt. Vooral kinderen uit Barneveld vinden ons makkelijk.' },
    { name: 'Boerencamping Essen', rating: 5, text: 'Kampeerders die rust zoeken vinden onze mini-camping perfect. Google reviews helpen enorm.' },
    { name: 'Transportbedrijf Essen', rating: 5, text: 'Agrarisch transport advertenties leveren wekelijks nieuwe opdrachten op. ROI is uitstekend.' },
    { name: 'Veearts Praktijk Essen', rating: 4.5, text: 'Spoed-oproepen komen nu sneller binnen via Google. Boeren weten ons 24/7 te vinden.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>Marketing Bureau Essen (GLD) | SEO Specialist Agrarische Sector</title>
        <meta
          name="description"
          content="Marketing bureau Essen voor agrarische bedrijven en lokale MKB. Specialist in online marketing voor boerderijen, loonwerk en groene sector. Meer klanten uit de Gelderse Vallei!"
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/essen" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Marketing Bureau Essen voor Agrarisch & MKB</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Groei in de Gelderse Vallei</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van boerderij tot boomkwekerij - online vindbaar in Essen!</strong><br />
              Als <b>marketing specialist in Essen</b> help ik agrarische bedrijven en lokale ondernemers groeien. Met kennis van de groene sector zorg ik dat boeren, loonwerkers en MKB'ers uit de Gelderse Vallei jouw bedrijf vinden.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Specialisatie: agrarische marketing & plattelandsondernemers</li>
              <li>✓ B2B & B2C strategie voor boerenbedrijven</li>
              <li>✓ Lokale SEO voor "Essen", "Gelderse Vallei", "Food Valley"</li>
              <li>✓ Seizoensgebonden campagnes (oogst, plantseizoen)</li>
              <li>✓ Directe verkoop & korteketenmarketing</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button as="a" href="tel:+31648728828">
                Bespreek groeiplannen <span>→</span>
              </Button>
              <Button variant="secondary" as="a" href="https://wa.me/31648728828" target="_blank" rel="noopener noreferrer">
                WhatsApp Direct
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mt-2 sm:mt-0">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Direct beschikbaar
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">Partner van agrarische ondernemers in Essen, Barneveld & Ede</p>
            <p className="mt-4 text-sm text-green-700">Ook in het veld bereikbaar: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="Marketing resultaten Essen - Agrarische sector"
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Specialist Essen" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP / FEATURE SECTION */}
        <FeatureSection
          title="Agrarische Marketing met Kennis van Zaken"
          subtitle="Van akker tot markt - digitaal verbonden met jouw klanten"
          features={[
            {
              badge: "Agro Marketing",
              title: "Agrarische SEO Specialist",
              description: "Zichtbaar voor 'loonwerk Essen', 'boerderijwinkel Barneveld' of 'tractorservice Gelderse Vallei'. Ik ken de zoektermen van boeren én burgers. Optimalisatie voor seizoenswerk, oogstperiodes en lokale agrarische diensten.",
              visualTitle: "Top 3 positie",
              visualSubtitle: "Agro zoekwoorden",
              image: masterSeoImage
            },
            {
              badge: "B2B Campagnes",
              title: "Zakelijke Landbouw Marketing",
              description: "Bereik groothandels, veehouders en aannemers met gerichte B2B campagnes. LinkedIn marketing voor agrarische netwerken, Google Ads voor loonwerk en transport. Gemiddeld 25% meer zakelijke opdrachten.",
              visualTitle: "500+ leads",
              visualSubtitle: "Per seizoen",
              image: keywordResearchImage
            },
            {
              badge: "Directe Verkoop",
              title: "Boerderijwinkel Online",
              description: "Van streekproduct tot online verkoop. Websites met webshop voor verse producten, click & collect systemen, en route-marketing naar boerderijwinkels. Stedelingen uit Amersfoort en Utrecht vinden jouw producten.",
              visualTitle: "€50K+ omzet",
              visualSubtitle: "Online verkoop",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Agrarisch <span class='bg-[#F7D8FA] px-2 rounded italic'>Essen</span> groeit online"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Oplossingen voor <span className="bg-[#F7D8FA] px-2 rounded italic">Essen</span>
              </h2>
              <p className="text-lg text-gray-600">
                Specialistische marketing voor de groene sector en plattelandsondernemers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Agrarische SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Agrarische SEO</h3>
                <p className="text-gray-600 mb-6">
                  Wordt gevonden door boeren, burgers en bedrijven. SEO speciaal voor de agrarische sector in Essen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Loonwerk & mechanisatie SEO</li>
                  <li>✓ Boerderijwinkel vindbaarheid</li>
                  <li>✓ B2B agro zoekwoorden</li>
                  <li>✓ Seizoensgebonden content</li>
                </ul>
              </div>
              {/* Food Valley Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in Food Valley
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Food Valley Bereik</h3>
                <p className="text-gray-600 mb-6">
                  Profiteer van de Food Valley regio. Marketing gericht op innovatie, duurzaamheid en korte ketens.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Streekproducten promotie</li>
                  <li>✓ Duurzaamheid marketing</li>
                  <li>✓ Innovatie in landbouw</li>
                  <li>✓ Netwerk Food Valley</li>
                </ul>
              </div>
              {/* Directe Verkoop */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Directe Verkoop Online</h3>
                <p className="text-gray-600 mb-6">
                  Van akker naar klant. Online systemen voor directe verkoop van verse producten aan consumenten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Webshop verse producten</li>
                  <li>✓ Abonnement boxen</li>
                  <li>✓ Click & collect systeem</li>
                  <li>✓ Route naar boerderij</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Veelgestelde Vragen Agrarische Marketing <span className="bg-[#F7D8FA] px-2 rounded italic">Essen</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt online marketing voor mijn loonbedrijf in Essen?</h3>
                <p className="text-gray-600">
                  Absoluut! Boeren googelen tegenwoordig voor alles: van 'mais hakselen Essen' tot 'mestinjectie Barneveld'. Met goede SEO sta je bovenaan wanneer ze je nodig hebben. Gemiddeld 30% meer opdrachten in het eerste jaar. Vooral in piekperiodes (oogst, bemesting) essentieel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een boerderijwinkel?</h3>
                <p className="text-gray-600">
                  Een compleet pakket voor boerderijwinkels start vanaf €750 per maand. Dit omvat lokale SEO, Google Mijn Bedrijf optimalisatie, social media voor seizoensproducten en een basis webshop. ROI ligt gemiddeld op 500% door hogere marges op directe verkoop.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik stedelingen voor mijn streekproducten?</h3>
                <p className="text-gray-600">
                  Met targeting op 'biologisch Amersfoort', 'boerderijwinkel Utrecht' en 'vers van de boer'. Instagram marketing met mooie landfoto's, Google Ads voor weekendshoppers, en samenwerkingen met lokale restaurants. Stedelingen betalen graag 20-30% meer voor vers en lokaal.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wanneer moet ik starten met seizoensmarketing?</h3>
                <p className="text-gray-600">
                  Start 2-3 maanden voor het seizoen. Voor asperges begin je in februari, voor pompoenen in augustus. Kerstbomen marketing start in oktober. Timing is cruciaal in de agrarische sector - te laat betekent gemiste omzet.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe word ik zichtbaar voor andere boeren (B2B)?</h3>
                <p className="text-gray-600">
                  Via Google Ads op specifieke landbouwtermen, LinkedIn voor agrarische netwerken, en aanwezigheid op platforms zoals Boerenbusiness. Ook belangrijk: reviews van collega-boeren en case studies van succesvolle projecten. B2B in agro draait om vertrouwen en bewezen resultaat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Laten we Jouw <span className="bg-[#F7D8FA] px-2 rounded italic">Agrarisch Bedrijf</span> Laten Groeien
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van melkveehouder tot moestuin - ik ken de sector en spreek de taal. Gratis adviesgesprek over jouw online groeikansen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Ook tijdens werkzaamheden op het land bereikbaar. Bel voor praktisch advies.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stuur een bericht - ook 's avonds en in het weekend bereikbaar.</p>
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
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Specialist Gelderse Vallei</h3>
              <p className="text-gray-600">
                Essen • Barneveld • Ede • Voorthuizen • Lunteren • Scherpenzeel • Renswoude • Veenendaal • Leusden
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Trotse partner van Food Valley bedrijven - van familiebedrijf tot agro-innovator
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}