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

export default function MarketingZaanstad() {
  // Lokale Zaanstad reviews - Industriestad van Noord-Holland
  const dutchReviews = [
    { name: 'Industriebedrijf Zaandam', rating: 5, text: 'In het hart van de Zaanse industrie gevestigd. Door B2B SEO bereiken we nu klanten in heel Europa - export is verdubbeld!' },
    { name: 'Kapsalon Zaandam Centrum', rating: 5, text: 'Vlak bij het iconische Zaandam station. Lokale SEO zorgt ervoor dat we klanten uit alle Zaanse wijken aantrekken.' },
    { name: 'Restaurant Zaanse Schans', rating: 5, text: 'Bij de wereldberoemde molens gevestigd. Dankzij SEO vinden toeristen uit de hele wereld ons restaurant!' },
    { name: 'Fysiotherapie Krommenie', rating: 4.5, text: 'In de groeiende wijk Krommenie. Google Ads campagne levert wekelijks nieuwe patiënten op uit heel Zaanstad.' },
    { name: 'Bouwbedrijf Wormerveer', rating: 5, text: 'Wormerveer heeft veel historische panden. Onze restauratie- en renovatieprojecten worden nu veel beter gevonden.' },
    { name: 'Tandarts Assendelft', rating: 5, text: 'Assendelft groeit snel met jonge gezinnen. Onze moderne praktijk trekt nu patiënten uit heel Noord-Holland.' },
  ]
  const dutchMoreReviews = [
    { name: 'Sportschool Zaandam Noord', rating: 5, text: 'In het moderne deel van Zaandam. We staan nu bovenaan voor "sportschool Zaanstad" en ledenaantal groeit explosief!' },
    { name: 'Autogarage Zaandijk', rating: 4.5, text: 'Zaandijk ligt strategisch tussen Amsterdam en Alkmaar. Voor autoservice worden we nu als eerste gevonden!' },
    { name: 'IT Bedrijf Industrieterrein', rating: 5, text: 'Op het grote industrieterrein gevestigd. Door online marketing bedienen we nu tech-bedrijven in heel de Randstad.' },
    { name: 'Makelaar Westzaan', rating: 5, text: 'Westzaan biedt rust nabij Amsterdam. Onze woningverkopen zijn verdrievoudigd door betere online zichtbaarheid.' },
    { name: 'Schoonmaakbedrijf Oostzaan', rating: 4.5, text: 'Oostzaan heeft veel bedrijven. Door lokale SEO krijgen we nu contracten uit heel het Zaanse bedrijfsleven.' },
    { name: 'Installateur Koog aan de Zaan', rating: 5, text: 'Koog aan de Zaan is industrieel gebied. Perfect voor ons bedrijf - nu vinden bedrijven ons makkelijk online.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Zaanstad | Marketing Bureau & Online Marketing Zaanstad</title>
        <meta
          name="description"
          content="SEO Specialist Zaanstad inschakelen? Kies voor hét marketing bureau in Zaanstad. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/zaanstad" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Zaanstad: industriestad met karakter</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">156.000 Zaankanters wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Zaanstad: waar industriële kracht en innovatie samenkomen.</strong><br />
              Van de iconische Zaanse Schans met zijn historische molens tot moderne industrieterreinen, van het bruisende Zaandam tot groene dorpen zoals Westzaan en Assendelft - Zaanstad combineert rijke traditie met moderne bedrijvigheid. Met 156.000+ inwoners en een strategische ligging nabij Amsterdam is Zaanstad het industriële hart van Noord-Holland. Als <b>SEO specialist Zaanstad</b> help ik ondernemers de digitale kansen van deze veelzijdige stad te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Zaanstad: zichtbaar in heel de regio</li>
              <li>✓ Google Ads: direct bereik naar 156.000+ Zaankanters</li>
              <li>✓ B2B marketing voor industriële bedrijven</li>
              <li>✓ <b>SEO Zaanstad</b> met focus op industrie én toerisme</li>
              <li>✓ Websites voor zakelijke én toeristische markt</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Zaanstad cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Zaanstad & Noord-Holland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Zaanstad - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Zaanstad" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Zaanstad met gerichte marketing"
          subtitle="Digitale groei voor de industriestad van Noord-Holland"
          features={[
            {
              badge: "SEO Zaanstad",
              title: "SEO Specialist Zaanstad",
              description: "Zaanstad heeft een unieke mix van industrie, toerisme en lokale gemeenschappen. Ik zorg dat jouw bedrijf opvalt door strategisch bovenaan te staan op relevante zoektermen voor zowel B2B als B2C markten.",
              visualTitle: "Industrieel dominant",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Zaanstad",
              description: "Direct zichtbaar voor 156.000+ Zaankanters, internationale toeristen bij de Zaanse Schans, en zakelijke klanten uit heel Nederland. Adverteer gericht per doelgroep en locatie.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "B2B & B2C bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Zaanstad",
              description: "Professionele websites die geschikt zijn voor zowel industriële bedrijven als toeristische ondernemingen. Volledig geoptimaliseerd voor de diverse Zaanse markt.",
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
          title="Zaanstad groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Zaanstad</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de industriestad van Noord-Holland – altijd eerlijk advies en bewezen resultaten.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Zaanstad - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Zaandam • Krommenie • Wormerveer • Assendelft • Zaandijk • Westzaan • Oostzaan • Koog aan de Zaan • Zaanse Schans • Amsterdam Noord • Purmerend • Alkmaar
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}