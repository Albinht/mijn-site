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

export default function MarketingSchinOpGeul() {
  // Lokale Schin op Geul reviews - pittoresk kasteelidorp in Zuid-Limburg heuvelland
  const dutchReviews = [
    { name: 'Kasteel Restaurant Schin op Geul', rating: 5, text: 'Ons kasteel-restaurant wordt nu gevonden door gasten van heel Nederland. Perfect voor bruiloften en events dankzij sterke SEO!' },
    { name: 'Pension De Geulhof', rating: 5, text: 'Als landelijk pension in het Limburgse heuvelland krijgen we nu boekingen van Amsterdam tot Maastricht. Geweldige online zichtbaarheid!' },
    { name: 'Wandelgids Zuid-Limburg Tours', rating: 4.5, text: 'Voor wandeltochten door het Geuldal worden we nu als eerste gevonden. De Google Ads campagne trekt wandelaars uit heel het land.' },
    { name: 'Antiekzaak Het Kasteel', rating: 5, text: 'Onze antiekwinkel in het dorp krijgt nu bezoekers van over heel Zuid-Limburg. Perfecte lokale marketing strategie!' },
    { name: 'B&B Geulzicht', rating: 5, text: 'Ons bed & breakfast met uitzicht op het Geuldal boekt nu het hele jaar door vol. Uitstekende return op SEO investering!' },
    { name: 'Fietsverhuur Kastelen Route', rating: 4.5, text: 'Voor fietsentochten langs de kastelen in Zuid-Limburg krijgen we nu klanten van heel de regio. Perfect seizoensresultaat!' },
  ]
  const dutchMoreReviews = [
    { name: 'Landgoed Evenementen Schin', rating: 5, text: 'Voor exclusieve evenementen op ons landgoed krijgen we nu aanvragen van heel Nederland. Sterke online positionering!' },
    { name: 'Streekrestaurant De Burcht', rating: 5, text: 'Ons Limburgse streekrestaurant wordt nu gevonden door fijnproevers uit heel de regio. Geweldige reserveringsgroei!' },
    { name: 'Kunstgalerie Heuvelland', rating: 4.5, text: 'Onze galerie met regionale kunst trekt nu bezoekers van Valkenburg tot Vaals. Perfecte culturele marketing!' },
    { name: 'Therapeutische Praktijk Kasteel', rating: 5, text: 'Voor wellness in het Geuldal trekken we nu gasten van heel Zuid-Nederland. Rustige omgeving, sterke online aanwezigheid!' },
    { name: 'Cateringservice Kastelen', rating: 5, text: 'Voor exclusieve catering bij kastelen en landgoederen hebben we nu klanten in heel Limburg. Uitstekende groei!' },
    { name: 'Trouwfotograaf Zuid-Limburg', rating: 4.5, text: 'Voor kasteel-fotografie in Schin op Geul krijgen we nu boekingen van heel Nederland. Perfecte nichemarkt!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Schin op Geul | Marketing Bureau & Online Marketing Schin op Geul</title>
        <meta
          name="description"
          content="SEO Specialist Schin op Geul inschakelen? Kies voor hét marketing bureau in Zuid-Limburg. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/schin-op-geul" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Schin op Geul</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Kastelen en heuvels online bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Schin op Geul: pittoresk kasteelidorp in het Zuid-Limburgse heuvelland waar geschiedenis en toerisme samenkomen.</strong><br />
              Dit kleinschalige dorp in gemeente Valkenburg aan de Geul, gelegen aan de rivier de Geul, biedt unieke kansen voor toeristische en culturele ondernemingen. Van kasteel-restaurants tot wandelgidsen - als <b>SEO specialist Schin op Geul</b> help ik bedrijven in het Limburgse heuvelland hun unieke charme online te vertalen naar meer bezoekers en klanten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Schin op Geul: bovenaan bij heuvellandzoeken</li>
              <li>✓ Google Ads: direct boekingen uit heel Nederland</li>
              <li>✓ Speciaal voor toerisme en cultuur in Zuid-Limburg</li>
              <li>✓ <b>SEO Schin op Geul</b> met kastelenroute-focus</li>
              <li>✓ Websites die bezoekers omzetten naar gasten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek heuvelland-cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Schin op Geul & Zuid-Limburg heuvelland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Schin op Geul - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Schin op Geul" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer heuvellandklanten met slimme marketing"
          subtitle="Van kasteel tot cultuur, zonder poespas"
          features={[
            {
              badge: "SEO Schin op Geul",
              title: "SEO Specialist Schin op Geul",
              description: "Wil je echt groeien in Schin op Geul? Ik zorg dat je wordt gevonden door toeristen die het Zuid-Limburgse heuvelland en de kastelenroute ontdekken.",
              visualTitle: "Heuvelland bovenaan",
              visualSubtitle: "Kastelenroute zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Schin op Geul",
              description: "Direct boekingen van toeristen uit heel Nederland die Zuid-Limburg bezoeken. Je adverteert gericht op kasteel- en heuvellandtourisme.",
              visualTitle: "Direct kasteelboekingen",
              visualSubtitle: "Nationaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Toerisme Marketing",
              title: "Marketing Bureau Schin op Geul",
              description: "Professionele, sfeervolle websites die de charme van het Limburgse heuvelland uitstralen en toeristen omzetten naar gasten.",
              visualTitle: "Website & Heuvellandgroei",
              visualSubtitle: "Meer toeristische klanten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Schin op Geul groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Schin op Geul</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van kasteel-restaurant tot wandelgids – ik help jouw bedrijf online groeien in Schin op Geul.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Schin op Geul */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Schin op Geul</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke heuvelland-SEO sta jij bovenaan bij toeristen die Zuid-Limburg ontdekken. Word gevonden door mensen die kastelen en cultuur zoeken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor kastelentoerisme</li>
                  <li>✓ Content voor heuvellandtoeristm</li>
                  <li>✓ Seizoensgebonden toerismestrategie</li>
                </ul>
              </div>
              {/* Google Ads Schin op Geul */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Limburgse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Schin op Geul</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij toeristen met winstgevende Google Ads campagnes voor Zuid-Limburg en de kastelenroute.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Toerisme-gerichte advertenties</li>
                  <li>✓ Focus op kastelen en heuvelland</li>
                  <li>✓ Seizoensoptimalisatie</li>
                  <li>✓ Meetbaar toeristisch resultaat</li>
                </ul>
              </div>
              {/* Website & Toerisme Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Toerisme Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een sfeervolle website, toeristische campagnes en een strategie die het Limburgse karakter uitstraalt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Schin op Geul</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op toeristische conversie</li>
                  <li>✓ Sterke heuvelland-zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Schin op Geul</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Schin op Geul – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Schin op Geul - Online Marketing Bureau Zuid-Limburg</h3>
              <p className="text-gray-600">
                Actief in heel Schin op Geul & Zuid-Limburg heuvelland • Valkenburg aan de Geul • Gulpen • Wittem • Mechelen • Epen • Vaals • Berg en Terblijt • Houthem-Sint Gerlach • Kastelenroute • Geuldal • Mergelland
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}