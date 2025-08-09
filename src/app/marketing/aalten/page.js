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

export default function MarketingAalten() {
  // Authentieke Aalten reviews met grensregio context
  const dutchReviews = [
    { name: 'Metaalbedrijf ’t Broek', rating: 5, text: 'Op bedrijventerrein ’t Broek (150+ bedrijven) vallen we nu op. Duitse klanten uit Bocholt en Isselburg vinden ons perfect. Omzet +30%!' },
    { name: 'Antiquariaat Bredevoort', rating: 5, text: 'In boekenstad Bredevoort (30+ boekwinkels) zijn we nu dé specialist. Bibliofiele toeristen uit heel Europa boeken online!' },
    { name: 'Restaurant Marktplein Aalten', rating: 5, text: 'Bij de Oude Helenakerk in het centrum trekken we nu gasten uit Dinxperlo, Dale én Duitse dagjesmensen. Vol elk weekend!' },
    { name: 'Agrarisch Bedrijf Lintelo', rating: 5, text: 'In buurtschap Lintelo bereiken we nu boeren uit heel Oost-Gelderland. Ook Duitse afnemers via grensoverschrijdende SEO.' },
    { name: 'Sportcentrum De Haart', rating: 5, text: 'Als grootste sportcomplex van Aalten perfect vindbaar. Ook sporters uit Varsseveld en Lichtenvoorde komen nu trainen.' },
    { name: 'Medisch Centrum Dinxperlo', rating: 4.5, text: 'Op de grens met Duitsland ontvangen we nu patiënten uit Suderwick (DE) en heel gemeente Aalten. Tweetalige website werkt!' },
  ]
  const dutchMoreReviews = [
    { name: 'Transportbedrijf A18', rating: 5, text: 'Strategisch bij N318/A18 richting Duitsland gevestigd. Via Google bereiken we nu verladers tot in het Ruhrgebied. Internationale groei!' },
    { name: 'VVV Bredevoort', rating: 5, text: 'Vestingstad Bredevoort (450 inwoners, 100.000+ toeristen/jaar) is nu perfect vindbaar. Boekenfestival en evenementen lopen vol!' },
    { name: 'Winkelcentrum Hofstraat', rating: 4.5, text: 'In het kernwinkelgebied Aalten-centrum domineren we online. Ook Duitse shoppers uit Bocholt (15.000 inw.) komen nu.' },
    { name: 'Camping IJzerlo', rating: 5, text: 'In natuurgebied bij buurtschap IJzerlo ontvangen we nu kampeerders uit Nederland én Duitsland. Website in 2 talen loont!' },
    { name: 'Technisch Bedrijf Dale', rating: 5, text: 'Vanuit Dale (bij station Aalten) bedienen we nu de hele regio. Van Winterswijk tot Doetinchem worden we gevonden.' },
    { name: 'Horecaplein Bredevoort', rating: 4.5, text: 'Bij de vestingwallen van Bredevoort trekken we nu meer toeristen. Perfect voor onze terrasomzet in het boekenstadje!' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Aalten | Marketing Bureau & Online Marketing Aalten</title>
        <meta
          name="description"
          content="SEO Specialist Aalten inschakelen? Kies voor hét marketing bureau in Aalten. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en een moderne website."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/aalten" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Van Dale tot Bredevoort: heel gemeente Aalten digitaal vooruit</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">27.000 Aaltenaren + Duitse grensregio bereiken</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Aalten: waar Achterhoekse nuchterheid en grensoverschrijdend ondernemen samenkomen.</strong><br />
              Met kernen Aalten, Bredevoort (boekenstad!), Dinxperlo en de Duitse grens op 2km biedt deze gemeente unieke kansen. Als <b>SEO specialist Aalten</b> ken ik de lokale economie: van de maakindustrie op bedrijventerrein ’t Broek tot toerisme in vestingstad Bredevoort met 30+ antiquariaten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik 27.000 inwoners + 15.000 Duitse grensbezoekers</li>
              <li>✓ Focus op maakindustrie, agrarisch, toerisme (Bredevoort)</li>
              <li>✓ Tweetalig bereik: Nederlandse én Duitse klanten (Bocholt 5km)</li>
              <li>✓ <b>SEO Aalten</b> met kennis van grenseconomie</li>
              <li>✓ Van bedrijventerrein ’t Broek tot boekenstad Bredevoort</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor Aalten, Bredevoort, Dinxperlo & Duitse grensregio</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Aalten - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Aalten" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Van maakindustrie tot boekenstad: heel Aalten online sterk"
          subtitle="27.000 Nederlanders + 15.000 Duitse grensbezoekers = jouw markt"
          features={[
            {
              badge: "Grensregio specialist",
              title: "SEO Aalten & Kreis Borken",
              description: "Van bedrijventerrein ’t Broek (150 bedrijven) tot vestingstad Bredevoort (100.000 toeristen) - ik positioneer je in beide landen. Met Bocholt op 5km is tweetalige SEO cruciaal.",
              visualTitle: "Lokaal bovenaan",
              visualSubtitle: "Altijd zichtbaar",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Aalten",
              description: "Direct aanvragen van inwoners en bedrijven uit Aalten en omgeving. Je adverteert gericht en ziet direct resultaat in je agenda.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Maximaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Aalten",
              description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Aalten. Volledig geoptimaliseerd voor de Achterhoekse markt.",
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
          title="Aalten groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Aalten</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van lokale dienstverlener tot Achterhoekse onderneming – ik help je bedrijf online groeien in Aalten.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Aalten */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Aalten</h3>
                <p className="text-gray-600 mb-6">
                  Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Aalten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                  <li>✓ Zoekwoordenonderzoek voor Aalten</li>
                  <li>✓ Content, autoriteit & linkbuilding</li>
                  <li>✓ Klantbeoordelingen stimuleren</li>
                </ul>
              </div>
              {/* Google Ads Aalten */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair in de Achterhoek
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Aalten</h3>
                <p className="text-gray-600 mb-6">
                  Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Aalten en omgeving.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokale advertenties & campagnes</li>
                  <li>✓ Focus op Aalten en Achterhoek</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Resultaat dat telt</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Website op maat voor Aalten</li>
                  <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Sterke lokale zichtbaarheid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Aalten</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in Aalten – altijd eerlijk advies en snelle reactie.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Aalten & Achterhoek</h3>
              <p className="text-gray-600">
                Aalten • Winterswijk • Groenlo • Lichtenvoorde • Dinxperlo • Bredevoort • Dale • Lintelo
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}