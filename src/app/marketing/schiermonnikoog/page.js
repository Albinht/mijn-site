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

export default function MarketingSchiermonnikoog() {
  // Lokale Schiermonnikoog reviews - uniek Waddeneiland met natuurtoerisme
  const dutchReviews = [
    { name: 'Hotel De Wadden Schiermonnikoog', rating: 5, text: 'Dankzij lokale SEO krijgen we nu boekingen van het hele land voor ons duurzame eilandhotel. Topresultaten voor "hotel Schiermonnikoog"!' },
    { name: 'Fietsverhuur Eiland Express', rating: 5, text: 'Onze fietsverhuur bij de haven profiteert enorm van Google Ads. Elke veerboot brengt nu nieuwe klanten dankzij onze online vindbaarheid.' },
    { name: 'Restaurant Het Wantij', rating: 5, text: 'Als restaurant in het dorp worden we nu gevonden door alle eilandbezoekers. De lokale marketing werkt perfect voor ons seizoensgebonden bedrijf.' },
    { name: 'Natuurgids Waddenzee Tours', rating: 4.5, text: 'Voor onze wadlooptochten en natuurexcursies is online vindbaarheid cruciaal. Nu krijgen we aanmeldingen van over heel Nederland.' },
    { name: 'Pension De Zeehond', rating: 5, text: 'Ons kleine pension boekt nu maanden van tevoren vol dankzij SEO. Perfecte strategie voor ons unieke eiland!' },
    { name: 'Kunstgalerie Eilandkunst', rating: 5, text: 'Onze galerie met lokale eilandkunst krijgt nu bezoekers van het vasteland. Geweldige ROI op onze marketing investering.' },
  ]
  const dutchMoreReviews = [
    { name: 'Eiland Apotheek Schiermonnikoog', rating: 5, text: 'Als enige apotheek op het eiland is goede vindbaarheid essentieel. Nu vinden bezoekers ons direct voor spoedeisende medicatie.' },
    { name: 'Watersport Centrum Wadden', rating: 4.5, text: 'Voor zeilcursussen en kajak verhuur trekken we nu klanten van heel Noord-Nederland. De online marketing werkt uitstekend!' },
    { name: 'Eiland Bakkerij De Kust', rating: 5, text: 'Onze ambachtelijke bakkerij wordt nu gevonden door alle toeristen. Dagelijks verse aanvoer voor de groeiende vraag!' },
    { name: 'Wellness Resort Waddenzee', rating: 5, text: 'Ons spa-resort op het eiland boekt nu ook in het laagseizoen vol. Uitstekende return op de SEO investering.' },
    { name: 'Eiland Taxi Service', rating: 4.5, text: 'Voor vervoer op het eiland worden we nu als eerste gevonden. Perfecte aanvulling op het openbaar vervoer.' },
    { name: 'Souvenirshop Het Kompas', rating: 5, text: 'Onze winkel met lokale producten krijgt nu klanten voordat ze naar het eiland komen. Online bestellen en afhalen werkt perfect!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Schiermonnikoog | Marketing Bureau & Online Marketing Schiermonnikoog</title>
        <meta
          name="description"
          content="SEO Specialist Schiermonnikoog inschakelen? Kies voor hét marketing bureau op het Waddeneiland. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/schiermonnikoog" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Bureau Schiermonnikoog</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Waddenzee-ondernemers online bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Schiermonnikoog: het meest oostelijke Waddeneiland waar natuur en ondernemerschap samenkomen.</strong><br />
              Met slechts 900 inwoners maar jaarlijks 300.000+ bezoekers biedt dit Nationaal Park unieke kansen. Van hotels en restaurants tot natuurgidsen en fietsverhuur - als <b>SEO specialist Schiermonnikoog</b> help ik eilandbedrijven het hele jaar door zichtbaar te blijven en bezoekers van het vasteland aan te trekken.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Schiermonnikoog: bovenaan bij eilandzoekopdrachten</li>
              <li>✓ Google Ads: direct boekingen van het vasteland</li>
              <li>✓ Speciaal voor toeristische bedrijven op het eiland</li>
              <li>✓ <b>SEO Schiermonnikoog</b> met seizoensgebonden strategie</li>
              <li>✓ Websites die vastelandbezoekers omzetten naar klanten</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Ontdek eiland-cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Werkzaam op Schiermonnikoog & Waddeneiland-regio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Schiermonnikoog - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Schiermonnikoog" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer eilandklanten met slimme marketing"
          subtitle="Van veerboot tot boeking, zonder poespas"
          features={[
            {
              badge: "SEO Schiermonnikoog",
              title: "SEO Specialist Schiermonnikoog",
              description: "Wil je echt groeien op Schiermonnikoog? Ik zorg dat je wordt gevonden door eilandbezoekers die vanaf het vasteland zoeken naar diensten op het Waddeneiland.",
              visualTitle: "Eiland bovenaan",
              visualSubtitle: "Waddenzee-breed zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Schiermonnikoog",
              description: "Direct boekingen van bezoekers vanaf het vasteland. Je adverteert gericht op Waddeneiland-zoekopdrachten en ziet direct resultaat in je reserveringen.",
              visualTitle: "Direct eilandboekingen",
              visualSubtitle: "Vasteland bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Eiland Marketing",
              title: "Marketing Bureau Schiermonnikoog",
              description: "Professionele, snelle websites die zorgen voor meer boekingen van vastelandbezoekers. Volledig geoptimaliseerd voor de toeristische eilandmarkt.",
              visualTitle: "Website & Eilandgroei",
              visualSubtitle: "Meer vastelandklanten",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Schiermonnikoog groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist op <span className="bg-[#F7D8FA] px-2 rounded italic">Schiermonnikoog</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van hotel tot natuurgids – ik help jouw eilandbedrijf online groeien op Schiermonnikoog.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Schiermonnikoog */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Schiermonnikoog</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke eiland-SEO sta jij bovenaan bij vastelandzoekers. Word gevonden door mensen die nú een Schiermonnikoog-trip plannen.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor eilandtoerisme</li>
                  <li>✓ Content voor Waddeneiland-bezoekers</li>
                  <li>✓ Seizoensgebonden SEO-strategie</li>
                </ul>
              </div>
              {/* Google Ads Schiermonnikoog */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij eilandondernemers
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Schiermonnikoog</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij vastelandbezoekers met winstgevende Google Ads campagnes voor Waddeneiland-toerisme.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Eiland-gerichte advertenties</li>
                  <li>✓ Focus op Waddeneiland-zoekers</li>
                  <li>✓ Seizoensoptimalisatie</li>
                  <li>✓ Meetbaar eilandresultaat</li>
                </ul>
              </div>
              {/* Website & Eiland Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Eiland Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw eilandbedrijf groeit online met een converterende website, toeristische campagnes en een strategie die het hele jaar werkt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Schiermonnikoog</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op eilandconversie</li>
                  <li>✓ Sterke Waddeneiland-zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Schiermonnikoog</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw eilandbedrijf kan laten groeien op Schiermonnikoog – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Schiermonnikoog - Online Marketing Bureau Waddeneiland</h3>
              <p className="text-gray-600">
                Actief op heel Schiermonnikoog • Waddeneiland-toerisme • Natuurgebied marketing • Seizoensgebonden strategieën • Vasteland-bereik • Ameland • Terschelling • Vlieland • Texel • Lauwersoog • Holwerd • Noordpolderzijl
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}