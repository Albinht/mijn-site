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

export default function MarketingLelystad() {
  // Lokale Lelystad reviews - Hoofdstad van Flevoland
  const dutchReviews = [
    { name: 'Restaurant Centrum', rating: 5, text: 'Het moderne centrum van Lelystad trekt veel bezoekers uit heel Flevoland. Onze zaak staat nu bovenaan in Google en groeit explosief!' },
    { name: 'Tandarts Batavia Stad', rating: 5, text: 'Batavia Stad is het winkelhart van de regio. Door lokale SEO krijgen we patiënten uit heel Flevoland en zelfs vanuit Overijssel.' },
    { name: 'Bouwbedrijf Lelystad Haven', rating: 4.5, text: 'De haven groeit met logistiek en industrie. Via online marketing bereiken we nu opdrachtgevers uit heel Nederland voor havenprojecten.' },
    { name: 'IT Bedrijf Knardijk', rating: 5, text: 'Knardijk heeft veel bedrijvigheid. We staan nu #1 voor "IT diensten Lelystad" en ondersteunen bedrijven in heel Flevoland!' },
    { name: 'Sportschool Waterland', rating: 5, text: 'Waterland heeft veel sportieve bewoners. Dankzij Google Ads komen er leden uit Almere, Dronten en heel de regio naar onze gym.' },
    { name: 'Kapsalon Zuiderpark', rating: 5, text: 'Zuiderpark is een geliefde woonwijk. Door professionele marketing bereiken we nu klanten uit alle wijken van deze jonge stad.' },
  ]
  const dutchMoreReviews = [
    { name: 'Fysiotherapie Oostvaarders', rating: 5, text: 'Nabij de Oostvaardersplassen veel natuurliefhebbers. Door lokale zichtbaarheid krijgen we patiënten die actief leven en zorg waarderen.' },
    { name: 'Autogarage Flevoland', rating: 4.5, text: 'Lelystad is het verkeersknooppunt van Flevoland. Onze garage wordt nu gevonden door automobilisten uit de hele provincie.' },
    { name: 'Makelaar Warande', rating: 5, text: 'Warande is een populaire wijk. Via Google Ads bereiken we woningzoekers uit de Randstad die ruimte zoeken in Flevoland.' },
    { name: 'Accountant Centrum', rating: 5, text: 'Het centrum heeft veel ondernemers en overheidsdiensten. Door SEO vinden bedrijven ons voor fiscale diensten uit heel Flevoland.' },
    { name: 'Schoonmaakbedrijf Voorland', rating: 5, text: 'Voorland groeit met nieuwe bedrijven. Online marketing brengt ons opdrachten van kantoren en industrieën uit de hele regio.' },
    { name: 'Tuincentrum Natuurpark', rating: 4.5, text: 'Nabij het natuurpark veel tuinliefhebbers. Ons centrum wordt gevonden door mensen die van groen houden uit heel Flevoland.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Lelystad | Marketing Bureau & Online Marketing Lelystad</title>
        <meta
          name="description"
          content="SEO Specialist Lelystad voor ondernemende bedrijven. Meer klanten in Lelystad met gerichte SEO, Google Ads en professionele marketing in Flevoland."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/lelystad" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Lelystad: Hoofdstad van Flevoland</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">78.000 Lelystedelingen vinden jouw bedrijf</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Lelystad: waar Nederlandse poldergeest en moderne ondernemingszin elkaar versterken.</strong><br />
              Van het bruisende centrum tot Batavia Stad Fashion Outlet, van de groeiende haven tot de Oostvaardersplassen, van moderne woonwijken tot bedrijventerreinen - Lelystad combineert jonge energie met onbegrensde mogelijkheden. Met 78.000+ inwoners en als hoofdstad van de jongste provincie biedt Lelystad ondernemers de perfecte mix van ruimte, groei en bereikbaarheid. Als <b>SEO specialist Lelystad</b> help ik ambitieuze bedrijven de digitale kansen van deze dynamische polderstad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Lelystad: zichtbaar in Flevoland</li>
              <li>✓ Google Ads: direct bereik naar 78.000+ Lelystedelingen</li>
              <li>✓ Speciaal voor ondernemers in de jongste provincie</li>
              <li>✓ <b>SEO Lelystad</b> met focus op groei en innovatie</li>
              <li>✓ Websites die passen bij Lelystad's moderne karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Lelystad cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Lelystad & Flevoland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Lelystad - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Lelystad" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Lelystad met doelgerichte marketing"
          subtitle="Digitale groei voor Flevoland"
          features={[
            {
              badge: "SEO Lelystad",
              title: "SEO Specialist Lelystad",
              description: "Lelystad heeft unieke kansen als hoofdstad van de jongste provincie met ruimte voor groei. Ik zorg dat jouw bedrijf opvalt tussen de concurrentie door lokaal bovenaan te staan en nieuwe klanten aan te trekken uit heel Flevoland.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Lelystad",
              description: "Direct zichtbaar voor 78.000+ Lelystedelingen en bezoekers van Batavia Stad. Adverteer gericht in alle wijken van centrum tot haven en zie direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Lelystad",
              description: "Moderne, frisse websites die passen bij Lelystad's jonge energie en ondernemersgeest. Volledig geoptimaliseerd voor de lokale markt en zorgen voor meer aanvragen uit heel Flevoland.",
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
          title="Lelystad groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Lelystad</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van startende ondernemers tot gevestigde bedrijven – ik help ambitieuze organisaties online groeien in de hoofdstad van Flevoland.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Lelystad */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Lelystad</h3>
                <p className="text-gray-600 mb-6">
                  In een jonge, groeiende stad als Lelystad is lokale zichtbaarheid essentieel. Word gevonden door mensen die nú zoeken in alle wijken en bereik ook Flevoland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Lelystad</li>
                  <li>✓ Zoekwoordenonderzoek voor alle wijken</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews stimuleren in lokale markt</li>
                </ul>
              </div>
              {/* Google Ads Lelystad */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor groeiende bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Lelystad</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 78.000+ Lelystedelingen en Batavia Stad bezoekers met strategisch gerichte campagnes voor maximale impact in Flevoland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Advertenties voor alle wijken & Batavia Stad</li>
                  <li>✓ Focus op groei en ondernemerschap</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Frisse, moderne websites die passen bij Lelystad's jonge energie en vooruitstrevende mentaliteit, zorgen voor meer conversies uit heel Flevoland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Modern design voor jonge markt</li>
                  <li>✓ Snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Optimaal bereik Flevoland</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Lelystad</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Flevoland – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Lelystad - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Lelystad Centrum • Batavia Stad • Waterland • Zuiderpark • Knardijk • Haven • Warande • Almere • Dronten • Emmeloord • Urk
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}