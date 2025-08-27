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

export default function MarketingSchijndel() {
  // Lokale Schijndel reviews - gemeente in de Meierij met sterke industrie
  const dutchReviews = [
    { name: 'Industriebedrijf De Maashorst', rating: 5, text: 'Dankzij lokale SEO krijgen we nu aanvragen van heel de Meierij-regio. Topresultaten voor "machinebewerking Schijndel"!' },
    { name: 'Restaurant De Herberg', rating: 5, text: 'Ons restaurant in het centrum van Schijndel zit nu elke week vol. De Google Ads campagne trekt bezoekers van Den Bosch tot Eindhoven.' },
    { name: 'Garage Meierijweg', rating: 5, text: 'Voor APK en autoreparaties worden we nu gevonden door heel Schijndel en omgeving. Perfecte lokale marketing!' },
    { name: 'Fysiotherapie Centrum Meierij', rating: 4.5, text: 'Onze praktijk aan de Hoofdstraat krijgt nu patiënten van Veghel tot Sint-Oedenrode. De investering in SEO loont!' },
    { name: 'Kapsalon De Wilhelmina', rating: 5, text: 'In de Wilhelminastraat is concurrentie groot, maar we staan nu bovenaan bij "kapper Schijndel". Agenda zit vol!' },
    { name: 'Bouwbedrijf Brabant Noord', rating: 5, text: 'Vanuit Schijndel bedienen we heel de Meierij-regio. Online marketing heeft ons bedrijf naar een hoger niveau getild.' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor De Ronde Venen', rating: 5, text: 'Voor MKB-ondersteuning in Schijndel en omgeving trekken we nu structureel nieuwe klanten via onze website.' },
    { name: 'Installatiebedrijf Thermo Brabant', rating: 4.5, text: 'Voor CV en sanitair in Schijndel worden we als eerste gevonden. Game changer voor ons familiebedrijf!' },
    { name: 'Sportschool Fit4Life Schijndel', rating: 5, text: 'Onze fitness in het centrum krijgt nu leden van heel de regio. Perfect resultaat van de online strategie.' },
    { name: 'Juridisch Adviesbureau Meierij', rating: 5, text: 'Voor rechtshulp in Schijndel bereiken we nu de hele gemeenschap. Uitstekende ROI op SEO investering.' },
    { name: 'Tuincentrum De Groene Meierij', rating: 4.5, text: 'Ons tuincentrum aan de rand van Schijndel trekt nu bezoekers van Veghel tot Boxtel. Sterke online groei!' },
    { name: 'IT-Bedrijf TechMeierij', rating: 5, text: 'Voor zakelijke IT-diensten in Schijndel en omgeving hebben we nu een sterke online positie. Constant nieuwe klanten!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Schijndel | Marketing Bureau & Online Marketing Schijndel</title>
        <meta
          name="description"
          content="SEO Specialist Schijndel inschakelen? Kies voor hét marketing bureau in Noord-Brabant. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/schijndel" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Schijndel</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Hart van de Meierij online bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Schijndel: industriestad in het hart van de Meierij waar traditie en innovatie samenkomen.</strong><br />
              Met 24.000 inwoners en strategisch gelegen tussen Den Bosch, Eindhoven en Veghel biedt Schijndel uitstekende zakelijke kansen. Van industrie en MKB tot detailhandel en dienstverlening - als <b>SEO specialist Schijndel</b> help ik bedrijven in heel de Meierij-regio groeien door sterke online zichtbaarheid en gerichte marketing.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Schijndel: bovenaan in de Meierij</li>
              <li>✓ Google Ads: direct aanvragen uit Noord-Brabant</li>
              <li>✓ Speciaal voor MKB en industrie in Schijndel</li>
              <li>✓ <b>SEO Schijndel</b> met regionale strategie</li>
              <li>✓ Websites die bezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek Brabant-cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam in Schijndel & hele Meierij-regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Schijndel - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Schijndel" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in de Meierij met slimme marketing"
          subtitle="Van industrie tot detailhandel, zonder poespas"
          features={[
            {
              badge: "SEO Schijndel",
              title: "SEO Specialist Schijndel",
              description: "Wil je echt groeien in Schijndel? Ik zorg dat je lokaal en regionaal wordt gevonden door bedrijven en particulieren die jouw diensten nodig hebben in de Meierij.",
              visualTitle: "Meierij bovenaan",
              visualSubtitle: "Regionaal zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Schijndel",
              description: "Direct aanvragen van bedrijven en inwoners uit Schijndel en de hele Meierij-regio. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Meierij-breed bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Marketing",
              title: "Marketing Bureau Schijndel",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen uit de hele regio. Volledig geoptimaliseerd voor de Brabantse zakelijke markt.",
              visualTitle: "Website & Groei",
              visualSubtitle: "Meer regionale klanten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Schijndel groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Schijndel</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van industrie tot detailhandel – ik help jouw bedrijf online groeien in Schijndel.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Schijndel */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Schijndel</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Schijndel en de Meierij.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Schijndel</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Regionale zichtbaarheidsstrategie</li>
                </ul>
              </div>
              {/* Google Ads Schijndel */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij Brabantse ondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Schijndel</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor de Meierij-regio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Schijndel en Meierij-regio</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbaar Brabants resultaat</li>
                </ul>
              </div>
              {/* Website & Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, regionale campagnes en een strategie die werkt in Noord-Brabant.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Schijndel</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke regionale zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Schijndel</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Schijndel – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Schijndel - Online Marketing Bureau Meierij</h3>
              <p className="text-gray-600">
                Actief in heel Schijndel & Meierij-regio • Veghel • Sint-Oedenrode • Sint-Michielsgestel • Boxtel • Vught • Den Bosch • Rosmalen • Oss • Uden • Haaren • Berlicum • Heeswijk-Dinther • Bernheze
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}