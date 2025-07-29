'use client'

import Head from 'next/head'
import Image from 'next/image'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'
import graphImage from '../../../assets/graph.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'

export default function MarketingKootwijkerbroek() {
  // Lokale reviews Kootwijkerbroek
  const dutchReviews = [
    { name: 'Boerderij de Veluwe', rating: 5, text: 'Dankzij Albin staan we op #1 in Google voor "boerderij Kootwijkerbroek". Meer gasten en boekingen dan ooit.' },
    { name: 'Garage Veluwezoom', rating: 5, text: 'Sinds de Google Ads en lokale SEO is het elke week drukker in de werkplaats. Echt topservice!' },
    { name: 'Restaurant Het Veluwse Hof', rating: 5, text: 'De nieuwe website en online marketing leveren veel meer reserveringen op. Professioneel én effectief.' },
    { name: 'Kapsalon Natuurlijk', rating: 5, text: 'We worden nu gevonden op “kapper Kootwijkerbroek” en hebben een volle agenda. SEO werkt!' },
    { name: 'Installatiebedrijf Veluws', rating: 5, text: 'De investering in online marketing heeft zich snel terugverdiend. Meer kwalitatieve aanvragen uit de regio.' },
    { name: 'Tandartspraktijk Gezond Gebit', rating: 4.5, text: 'De zichtbaarheid van onze praktijk is enorm verbeterd. We krijgen nu meer nieuwe cliënten via Google.' },
  ]
  const dutchMoreReviews = [
    { name: 'Bouwbedrijf Stevig', rating: 5, text: 'Binnen vier maanden op positie 1 in Google. Lokale SEO doet echt zijn werk!' },
    { name: 'Schoonheidssalon Puur', rating: 5, text: 'Na de website optimalisatie zien we een duidelijke omzetgroei. Meer boekingen uit Kootwijkerbroek.' },
    { name: 'Fietsenwinkel Veluwse Wielen', rating: 4.5, text: 'De lokale marketing strategie brengt klanten uit Barneveld, Voorthuizen en omgeving.' },
    { name: 'Advocatenkantoor Rechtvaardig', rating: 5, text: 'Via onze verbeterde online aanwezigheid krijgen we structureel nieuwe cliënten.' },
    { name: 'Tuincentrum Veluwegroen', rating: 5, text: 'Onze producten zijn lokaal veel beter vindbaar geworden. Dat merken we in de winkel!' },
    { name: 'Dierenarts Veluwse Zorg', rating: 4.5, text: 'Wij zijn nu de best gevonden dierenarts van Kootwijkerbroek. SEO en Google Ads werken echt.' },
  ]

  return (
    <>
      {/* SEO TITEL & META BESCHRIJVING */}
      <Head>
        <title>SEO Specialist Kootwijkerbroek | Marketing Bureau & Online Marketing Kootwijkerbroek</title>
        <meta
          name="description"
          content="SEO specialist Kootwijkerbroek nodig? Jouw lokale marketing bureau voor SEO, Google Ads en website groei. Meer klanten uit Kootwijkerbroek met resultaatgerichte marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/kootwijkerbroek" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">SEO Specialist Kootwijkerbroek</span> &amp;<br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing bureau Kootwijkerbroek</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Wil je lokaal beter gevonden worden?</strong><br />
              Als <b>SEO specialist Kootwijkerbroek</b> en <b>marketing bedrijf Kootwijkerbroek</b> laat ik jouw bedrijf groeien met slimme SEO, conversiegerichte websites en Google Ads die écht werken.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ SEO Kootwijkerbroek: scoor lokaal op Google</li>
              <li>✓ Google Ads: direct meer klanten en aanvragen</li>
              <li>✓ Websites die bezoekers omzetten in omzet</li>
              <li>✓ Sterke lokale zichtbaarheid & meer vertrouwen</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button as="a" href="tel:+31648728828">
                Bel direct: +31 6 48728828 <span>→</span>
              </Button>
              <Button variant="secondary" as="a" href="https://wa.me/31648728828" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Button>
              <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mt-2 sm:mt-0">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Direct beschikbaar
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">100+ ondernemers uit Kootwijkerbroek en omgeving kozen voor resultaat</p>
            <p className="mt-4 text-sm text-green-700">WhatsApp direct: <b>+31 6 48728828</b></p>
          </div>

          {/* AFBEELDING */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={graphImage}
                alt="SEO resultaten Kootwijkerbroek - Marketing bureau"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing bedrijf Kootwijkerbroek: groei voor ondernemers"
          subtitle="Praktische aanpak, direct resultaat en blijvende online groei."
          features={[
            {
              badge: "SEO specialist Kootwijkerbroek",
              title: "Lokale SEO strategie",
              description: "Wij zorgen ervoor dat je bedrijf in Kootwijkerbroek zichtbaar is op de juiste zoekwoorden. Meetbare groei in Google en meer lokale aanvragen.",
              visualTitle: "SEO Plan Kootwijkerbroek",
              visualSubtitle: "Hoger scoren, meer klanten",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads campagnes",
              description: "Direct resultaat met slimme advertenties. Bereik jouw ideale klanten in Kootwijkerbroek en omgeving, met zichtbare impact.",
              visualTitle: "Google Ads Kootwijkerbroek",
              visualSubtitle: "Direct zichtbaar, direct resultaat",
              image: keywordResearchImage
            },
            {
              badge: "Website & Online Marketing",
              title: "Websites die converteren",
              description: "Wij bouwen websites die snel zijn, mobielvriendelijk én geoptimaliseerd voor conversie. Zet bezoekers om in aanvragen.",
              visualTitle: "Webdesign Kootwijkerbroek",
              visualSubtitle: "Meer aanvragen & omzet",
              image: contentRanksImage
            }
          ]}
        />

        {/* REVIEWS SECTIE */}
        <ReviewSlider
          reviews={dutchReviews}
          moreReviews={dutchMoreReviews}
          title="Waarom bedrijven uit <span class='bg-[#F7D8FA] px-2 rounded italic'>Kootwijkerbroek</span> kiezen voor onze marketing"
        />

        {/* DIENSTEN SECTIE */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing bedrijf in <span className="bg-[#F7D8FA] px-2 rounded italic">Kootwijkerbroek</span>
              </h2>
              <p className="text-lg text-gray-600">
                Het complete marketing bureau Kootwijkerbroek – lokaal gericht, direct resultaat.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* SEO Kootwijkerbroek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Kootwijkerbroek</h3>
                <p className="text-gray-600 mb-6">
                  Met lokale SEO scoor je hoger in Google en trek je klanten uit jouw directe omgeving. Wij optimaliseren jouw website en content voor maximaal resultaat.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale zoektermen & sterke content</li>
                  <li>✓ Google Mijn Bedrijf optimalisatie</li>
                  <li>✓ Reviews & autoriteit opbouwen</li>
                  <li>✓ Slimme lokale linkbuilding</li>
                </ul>
              </div>
              {/* Google Ads Kootwijkerbroek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Meest gekozen in Kootwijkerbroek
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Bureau Kootwijkerbroek</h3>
                <p className="text-gray-600 mb-6">
                  Wil je direct bovenaan staan bij jouw doelgroep? Met Google Ads bereik je mensen uit Kootwijkerbroek die klaar zijn om te kopen of boeken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokaal targeten op jouw klanten</li>
                  <li>✓ Slimme conversie optimalisatie</li>
                  <li>✓ Campagnes op maat</li>
                  <li>✓ Heldere rapportages</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw online visitekaartje én marketingmachine. Websites van onze specialisten zetten bezoekers om in klanten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Uniek webdesign voor Kootwijkerbroek</li>
                  <li>✓ Supersnel en mobielvriendelijk</li>
                  <li>✓ SEO en conversie in de basis</li>
                  <li>✓ Gericht op maximale omzetgroei</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO specialist Kootwijkerbroek</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Meer weten over SEO, Google Ads of een nieuwe website? Vraag nu een gratis en vrijblijvend gesprek aan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bel voor een gratis adviesgesprek over marketing in Kootwijkerbroek.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Stuur gerust een WhatsApp-bericht, vaak reactie binnen 10 minuten.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Kootwijkerbroek &amp; omgeving</h3>
              <p className="text-gray-600">
                Voorthuizen • Barneveld • Nijkerk • Ede • Amersfoort • Leusden • Bennekom • Lunteren
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
