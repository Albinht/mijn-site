'use client'

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

export default function MarketingZeist() {
  // Lokale Zeist reviews
  const dutchReviews = [
    { name: 'Restaurant Heuvelrug Zeist', rating: 5, text: 'Natuurliefhebbers en locals dineren nu regelmatig bij ons. Zeist waardeert kwaliteit en groene gastvrijheid!' },
    { name: 'Wellness Center Zeist', rating: 5, text: 'Welvarende bewoners uit Zeist en Utrechtse Heuvelrug boeken wellness behandelingen. De groene rust trekt perfekte klanten!' },
    { name: 'Tandartspraktijk Zeist Centrum', rating: 4.5, text: 'Patiënten uit hele Zeist en omliggende natuurgebieden vinden ons voor moderne tandheelkunde. Kwaliteit wordt hier gewaardeerd!' },
    { name: 'Kapsalon Stijl Zeist', rating: 5, text: 'Trendbewuste klanten uit Zeist en heuvelrug kiezen voor onze service. Natuur en stijl gaan hier hand in hand!' },
    { name: 'Tuincentrum Zeist', rating: 5, text: 'Tuinliefhebbers uit Zeist en regio vinden ons voor kwaliteitsplanten. Groene passie levert trouwe klanten!' },
    { name: 'Fysiotherapie VitalZeist', rating: 5, text: 'Actieve wandelaars en sporters van de heuvelrug komen voor behandeling. Zeist beweegt graag in de natuur!' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor Heuvelrug', rating: 5, text: 'Welvarende ondernemers uit Zeist kiezen voor persoonlijke service. Het groene ondernemersklimaat florereert!' },
    { name: 'IT-consultancy Zeist', rating: 4.5, text: 'Moderne bedrijven uit Zeist en regio komen voor IT-advies. Tussen de bossen floreert ook digitale business!' },
    { name: 'Antiekzaak Zeist', rating: 5, text: 'Liefhebbers van kwaliteit uit Zeist en Utrecht vinden bijzondere stukken. Goede smaak wordt hier gewaardeerd!' },
    { name: 'Rijschool Natuur Zeist', rating: 5, text: 'Jongeren uit Zeist en omgeving leren rijden tussen de mooiste routes. Rijles in groene omgeving!' },
    { name: 'Notariskantoor Zeist', rating: 4.5, text: 'Particulieren en bedrijven uit welvarende regio kiezen voor onze juridische expertise. Zeist vertrouwt op kwaliteit!' },
    { name: 'Dierenkliniek Bos & Berg', rating: 5, text: 'Huisdiereigenaren uit natuurrijke omgeving waarderen onze zorg. Van stadshonden tot boerderijdieren!' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Groene Zeist: waar natuur en welvaart bloeien</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">64.000 inwoners + hart Utrechtse Heuvelrug</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Zeist: waar groene leefkwaliteit ontmoet welvarende ondernemers.</strong><br />
            Met Utrechtse Heuvelrug, Slot Zeist, sterke koopkracht en natuurminnende bewoners biedt Zeist unieke marktkansen. Als <b>SEO specialist Zeist</b> help ik je profiteren van de welvarende groene gemeenschap, kwaliteitsgerichte doelgroep en de prachtige ligging tussen natuur en stad.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Zeist: zichtbaar in groene welvaart</li>
            <li>✓ Google Ads: doelgroep natuur en kwaliteitsliefhebbers</li>
            <li>✓ Speciaal voor bedrijven in Zeist en heuvelrug</li>
            <li>✓ <b>SEO Zeist</b> met focus op groene kwaliteit</li>
            <li>✓ Websites die natuurbewuste klanten overtuigen</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Ontdek groene cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Zeist & Utrechtse Heuvelrug</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Zeist - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Zeist" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Zeist met groene marketing"
        subtitle="Van centrum tot heuvelrug - kwaliteit vindbaar"
        features={[
          {
            badge: "SEO Zeist",
            title: "SEO Specialist Zeist",
            description: "Wil je groeien in welvarend Zeist? Ik zorg dat je wordt gevonden door kwaliteitsgerichte bewoners die het beste zoeken voor hun groene levensstijl tussen natuur en comfort.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Groene kwaliteit",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Zeist",
            description: "Direct bereik van welvarende natuurliefhebbers en kwaliteitsbewuste professionals. Perfect targeting voor deze unieke groene en welvarende gemeenschap.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Natuur & welvaart",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Zeist",
            description: "Kwaliteitsvolle websites voor Zeist bedrijven. Geoptimaliseerd voor de natuurbewuste en welvarende doelgroep die waarde hecht aan duurzaamheid en kwaliteit.",
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
        title="Zeist groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN ZEIST */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Zeist</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Zeist combineert natuurlijke schoonheid met welvaart en kwaliteitsbewustzijn - uniek in Nederland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌲</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natuurlijke omgeving</h3>
              <p className="text-gray-600">
                Utrechtse Heuvelrug, bossen en landgoederen trekken natuurbewuste bewoners. Deze doelgroep investeert graag in duurzame en kwaliteitsvolle producten en diensten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sterke welvaart</h3>
              <p className="text-gray-600">
                Zeist heeft bovengemiddelde inkomens en koopkracht. Bewoners zijn bereid te investeren in kwaliteit, service en duurzaamheid - ideaal voor premium positioning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Culturele rijkdom</h3>
              <p className="text-gray-600">
                Slot Zeist, landgoederen en culturele tradities maken Zeist bijzonder. Deze unieke identiteit helpt lokale bedrijven zich te onderscheiden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Zeist</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in groene welvaart van Zeist – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Zeist - Online Marketing Utrechtse Heuvelrug</h3>
            <p className="text-gray-600">
              Zeist • Driebergen • Doorn • Austerlitz • De Bilt • Bunnik • Utrechtse Heuvelrug
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}