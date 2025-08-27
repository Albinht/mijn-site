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

export default function MarketingSchoonhoven() {
  // Lokale Schoonhoven reviews - historische zilverstad in Zuid-Holland
  const dutchReviews = [
    { name: 'Zilversmederij Van der Berg', rating: 5, text: 'Voor ambachtelijk zilverwerk in Schoonhoven worden we nu gevonden door heel Nederland. Perfect voor onze Zilverstad-reputatie!' },
    { name: 'Hotel Restaurant De Rechter', rating: 5, text: 'Ons historische hotel in het centrum van Schoonhoven krijgt nu boekingen van heel de Randstad. Topresultaten voor "hotel Schoonhoven"!' },
    { name: 'Museum Zilverstad', rating: 4.5, text: 'Voor cultuurtoerisme in Schoonhoven krijgen we nu bezoekers van Amsterdam tot Rotterdam. De Google Ads campagne werkt uitstekend!' },
    { name: 'Antiekzaak Het Oude Raadhuis', rating: 5, text: 'Onze antiekwinkel bij de Grote Kerk wordt nu gevonden door verzamelaars uit heel Zuid-Holland. Geweldige online zichtbaarheid!' },
    { name: 'Restaurant De Vischmarkt', rating: 5, text: 'Voor fine dining in de Zilverstad zitten we nu elke week vol. Perfecte lokale marketing in historisch Schoonhoven!' },
    { name: 'Juwelier Zilverstad', rating: 4.5, text: 'Voor exclusieve sieraden in Schoonhoven hebben we klanten van heel de regio. Uitstekende return op SEO investering!' },
  ]
  const dutchMoreReviews = [
    { name: 'B&B Het Veerhuys', rating: 5, text: 'Ons bed & breakfast aan de Lek krijgt nu gasten die speciaal voor Schoonhoven komen. Sterke toeristische marketing!' },
    { name: 'Kunstgalerie De Zilversmid', rating: 5, text: 'Voor hedendaagse zilverkunst in Schoonhoven trekken we nu bezoekers van heel Nederland. Perfecte niche-marketing!' },
    { name: 'Historische Rondleidingen', rating: 4.5, text: 'Voor cultuurtoerisme in de Zilverstad krijgen we nu boekingen van groepen uit heel de Randstad. Geweldige groei!' },
    { name: 'Vaartocht Schoonhoven', rating: 5, text: 'Onze boottochten op de Lek en door Schoonhoven boeken nu het hele seizoen vol. Perfect toeristisch resultaat!' },
    { name: 'Fietsverhuur Zilverfiets', rating: 4.5, text: 'Voor fietsroutes door de Zilverstad en langs de Lek krijgen we nu klanten van Utrecht tot Rotterdam.' },
    { name: 'Eventlocatie Kasteel De Schaffelaar', rating: 5, text: 'Voor exclusieve events in Schoonhoven krijgen we nu aanvragen van heel Nederland. Uitstekende marketing ROI!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Schoonhoven | Marketing Bureau & Online Marketing Schoonhoven</title>
        <meta
          name="description"
          content="SEO Specialist Schoonhoven inschakelen? Kies voor hét marketing bureau in de Zilverstad. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/schoonhoven" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Schoonhoven</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Nederlandse Zilverstad online bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Schoonhoven: de historische Zilverstad aan de Lek waar ambacht en toerisme samenkomen.</strong><br />
              Met 12.000 inwoners en een rijke historie als centrum van zilversmeedkunst biedt Schoonhoven unieke kansen. Gelegen tussen Utrecht en Rotterdam, met de prachtige Lek en historische binnenstad, is dit een perfecte bestemming voor cultuurtoerisme en ambachtelijk ondernemerschap. Als <b>SEO specialist Schoonhoven</b> help ik bedrijven hun unieke Zilverstad-charme online te vertalen naar meer bezoekers en klanten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Schoonhoven: bovenaan als Zilverstad</li>
              <li>✓ Google Ads: direct bezoekers uit de Randstad</li>
              <li>✓ Speciaal voor ambacht, cultuur en toerisme</li>
              <li>✓ <b>SEO Schoonhoven</b> met historische focus</li>
              <li>✓ Websites die Zilverstad-charme uitstralen</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek Zilverstad-cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Schoonhoven & Zuidoost Zuid-Holland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Schoonhoven - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Schoonhoven" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer Zilverstad-klanten met slimme marketing"
          subtitle="Van ambacht tot toerisme, zonder poespas"
          features={[
            {
              badge: "SEO Schoonhoven",
              title: "SEO Specialist Schoonhoven",
              description: "Wil je echt groeien in Schoonhoven? Ik zorg dat je wordt gevonden door toeristen en klanten die de unieke Zilverstad-ervaring zoeken.",
              visualTitle: "Zilverstad bovenaan",
              visualSubtitle: "Landelijk zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Schoonhoven",
              description: "Direct bezoekers en klanten uit de hele Randstad die Schoonhoven ontdekken. Je adverteert gericht op cultuurtoerisme en ambachtelijke diensten.",
              visualTitle: "Direct Zilverstad-bezoekers",
              visualSubtitle: "Randstad bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Cultuur Marketing",
              title: "Marketing Bureau Schoonhoven",
              description: "Professionele, sfeervolle websites die de historische charme van Schoonhoven uitstralen en bezoekers omzetten naar klanten.",
              visualTitle: "Website & Zilvergroei",
              visualSubtitle: "Meer cultuurtoeristen",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Schoonhoven groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Schoonhoven</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van zilversmederij tot cultuurtoerisme – ik help jouw bedrijf online groeien in Schoonhoven.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Schoonhoven */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Schoonhoven</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke Zilverstad-SEO sta jij bovenaan bij toeristen en klanten. Word gevonden door mensen die de historische charme van Schoonhoven zoeken.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Zilverstad</li>
                  <li>✓ Content voor cultuurtoerisme</li>
                  <li>✓ Historische positioneringsstrategie</li>
                </ul>
              </div>
              {/* Google Ads Schoonhoven */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Zilverstad-ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Schoonhoven</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij cultuurtoeristen met winstgevende Google Ads campagnes voor de historische Zilverstad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Cultuurtoerisme advertenties</li>
                  <li>✓ Focus op Zilverstad-bezoekers</li>
                  <li>✓ Seizoensgebonden campagnes</li>
                  <li>✓ Meetbaar toeristisch resultaat</li>
                </ul>
              </div>
              {/* Website & Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Cultuur Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een sfeervolle website, cultuurtoeristische campagnes en een strategie die de Zilverstad-charme uitstraalt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Schoonhoven</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op toeristische conversie</li>
                  <li>✓ Sterke historische zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Schoonhoven</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Schoonhoven – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Schoonhoven - Online Marketing Bureau Zilverstad</h3>
              <p className="text-gray-600">
                Actief in heel Schoonhoven & regio • Gouda • Nieuwpoort • Haastrecht • Stolwijk • Vlist • Bergambacht • Ouderkerk aan de IJssel • Krimpenerwaard • Lek-corridor • Cultuurtoerisme • Zilverambacht
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}