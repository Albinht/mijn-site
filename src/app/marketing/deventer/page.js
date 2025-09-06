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

export default function MarketingDeventer() {
  // Lokale Deventer reviews - Hanzestad aan de IJssel
  const dutchReviews = [
    { name: 'Restaurant Brink Deventer', rating: 5, text: 'Op de historische Brink in het hart van de Hanzestad krijgen we nu veel meer toeristen en locals. De omzet is flink gestegen!' },
    { name: 'Advocaat Lange Bisschopstraat', rating: 5, text: 'Ons kantoor in de winkelstraat bedient cliënten uit heel Oost-Nederland. De historische uitstraling werkt perfect voor ons imago.' },
    { name: 'Tandarts Vijfhoek', rating: 5, text: 'In de moderne wijk Vijfhoek veel jonge gezinnen. Door lokale SEO krijgen we continu nieuwe patiënten uit Deventer-Noord.' },
    { name: 'IT Bedrijf Rielerenk', rating: 4.5, text: 'Op het bedrijventerrein bedienen we mkb uit heel de regio. B2B SEO brengt ons klanten uit Apeldoorn, Zutphen en Zwolle!' },
    { name: 'Bouwbedrijf Borgele', rating: 5, text: 'Borgele groeit met veel nieuwbouw en renovaties. We staan bovenaan voor "aannemer Deventer" en krijgen opdrachten uit heel de Veluwe!' },
    { name: 'Autogarage Schalkhaar', rating: 5, text: 'Schalkhaar ligt strategisch aan de A1. We trekken nu klanten uit Deventer, Apeldoorn en heel Oost-Nederland.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kapsalon Keizerslanden', rating: 5, text: 'Keizerslanden is een moderne woonwijk. Onze salon wordt nu gevonden door klanten uit alle delen van Deventer.' },
    { name: 'Fysiotherapie Platvoet', rating: 4.5, text: 'In het historische Platvoet veel karakteristieke woningen. Onze praktijk wordt gevonden door patiënten die kwaliteit zoeken.' },
    { name: 'Makelaar Zandweteringen', rating: 5, text: 'Zandweteringen heeft rust en groen. Door marketing zijn onze woningverkopen gestegen - families vinden hier perfect wonen!' },
    { name: 'Schoonheidssalon Colmschate', rating: 5, text: 'Colmschate heeft een eigen gemeenschapsfeer. Onze salon wordt nu beter gevonden door klanten uit heel de regio.' },
    { name: 'Installatiebedrijf Bathmen', rating: 4.5, text: 'Bathmen is een pittoresk dorp bij Deventer. Door SEO krijgen we opdrachten van monumentenpanden en nieuwbouw.' },
    { name: 'Sportschool Worp', rating: 5, text: 'In deze actieve wijk hebben we leden uit heel Deventer. Lokale marketing en gemeenschapsgevoel werken perfect samen.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>SEO Specialist Deventer | Marketing Bureau & Online Marketing Deventer</title>
        <meta
          name="description"
          content="SEO Specialist Deventer inschakelen? Kies voor hét marketing bureau in Deventer. Meer klanten en zichtbaarheid met lokale SEO, Google Ads en professionele marketing."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/deventer" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Digital Marketing Agency Deventer: Hanzestad aan de IJssel</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">100.000 Deventenaren wachten op jouw diensten</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Deventer: waar Hanzetrots en moderne vooruitgang elkaar ontmoeten.</strong><br />
              Van de historische Brink met de imposante Grote- of Lebuïnuskerk tot moderne wijken zoals Vijfhoek, van de karakteristieke binnenstad tot bloeiende bedrijventerreinen aan de A1 - Deventer combineert eeuwenoude handelsgeest met eigentijdse ondernemingszin. Met 100.000+ inwoners als poort tussen de Randstad en het Oosten biedt Deventer ondernemers uitstekende kansen in een authentieke, welvarende gemeente. Als <b>SEO specialist Deventer</b> help ik ambitieuze bedrijven de digitale mogelijkheden van deze prachtige Hanzestad optimaal te benutten.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Lokale SEO Deventer: zichtbaar in de Hanzestad</li>
              <li>✓ Google Ads: regionaal bereik naar 100.000+ Deventenaren</li>
              <li>✓ Speciaal voor ambitieuze bedrijven in Oost-Nederland</li>
              <li>✓ <b>SEO Deventer</b> met focus op lokale dominantie</li>
              <li>✓ Websites die passen bij Deventer's ondernemende karakter</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Deventer cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Actief in heel Deventer & Oost-Nederland</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="SEO Specialist Deventer - Digitale Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin SEO Specialist Deventer" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Meer klanten in Deventer met doelgerichte marketing"
          subtitle="Digitale groei voor de Hanzestad aan de IJssel"
          features={[
            {
              badge: "SEO Deventer",
              title: "SEO Specialist Deventer",
              description: "Deventer heeft een rijke Hanzegeschiedenis en sterke lokale identiteit. Ik zorg dat jouw bedrijf opvalt in deze authentieke handelsstad door lokaal bovenaan te staan en structureel nieuwe klanten aan te trekken uit heel Oost-Nederland.",
              visualTitle: "Lokaal dominant",
              visualSubtitle: "Regionaal sterk",
              image: masterSeoImage
            },
            {
              badge: "Google Ads",
              title: "Google Ads Deventer",
              description: "Direct zichtbaar voor 100.000+ Deventenaren en bezoekers uit de Randstad en Oost-Nederland. Adverteer gericht in alle wijken van binnenstad tot bedrijventerreinen en zie direct resultaat.",
              visualTitle: "Direct resultaat",
              visualSubtitle: "Regionaal bereik",
              image: keywordResearchImage
            },
            {
              badge: "Webdesign & Online Marketing",
              title: "Marketing Bureau Deventer",
              description: "Authentieke, professionele websites die passen bij Deventer's Hanzekarakter en moderne ambities. Volledig geoptimaliseerd voor de lokale markt en regionale zakelijke gemeenschap.",
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
          title="Deventer groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Deventer</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van startende ondernemers tot gevestigde bedrijven – ik help ambitieuze ondernemers online groeien in de Hanzestad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Deventer */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Deventer</h3>
                <p className="text-gray-600 mb-6">
                  In een historische stad als Deventer is authentieke lokale zichtbaarheid cruciaal. Word gevonden door mensen die nú zoeken in alle wijken van de Hanzestad.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google Bedrijfsprofiel optimalisatie Deventer</li>
                  <li>✓ Hanzestad zoekwoordenstrategie</li>
                  <li>✓ Content strategie & linkbuilding</li>
                  <li>✓ Reviews in lokale gemeenschap</li>
                </ul>
              </div>
              {/* Google Ads Deventer */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Perfect voor groeiende bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Deventer</h3>
                <p className="text-gray-600 mb-6">
                  Bereik direct alle 100.000+ Deventenaren en zakelijke bezoekers uit de Randstad en Oost-Nederland met strategisch gerichte campagnes voor maximale impact.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Lokaal & regionaal gerichte advertenties</li>
                  <li>✓ Focus op zakelijke doelgroepen</li>
                  <li>✓ Continu geoptimaliseerd</li>
                  <li>✓ Meetbare groei & resultaten</li>
                </ul>
              </div>
              {/* Website & Online Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Professionele websites die passen bij Deventer's authentieke karakter en zorgen voor meer conversies uit heel Oost-Nederland.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Hanzegeïnspireerd modern design</li>
                  <li>✓ Regionaal geoptimaliseerd</li>
                  <li>✓ Gericht op conversie & groei</li>
                  <li>✓ Zakelijk én consument bereik</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Deventer</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is lokale SEO belangrijk voor bedrijven in Deventer?</h3>
                <p className="text-gray-600">
                  Deventer heeft een sterke Hanzetrots en lokale identiteit. Met 100.000+ inwoners plus zakelijke bezoekers is lokale zichtbaarheid essentieel. Van het historische centrum tot moderne wijken - Deventenaren waarderen betrouwbare, lokale bedrijven met een goede reputatie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe verschilt marketing in Deventer van andere steden?</h3>
                <p className="text-gray-600">
                  Deventer combineert Hanzegeschiedenis met moderne vooruitgang. De stad heeft een sterke lokale gemeenschap, goede bereikbaarheid, en zakelijke diversiteit. Marketing moet daarom authentiek, betrouwbaar en professioneel zijn - Deventenaren waarderen kwaliteit en lokale verbinding.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke wijken in Deventer zijn het interessantst voor bedrijven?</h3>
                <p className="text-gray-600">
                  Het centrum (Brink, Lange Bisschopstraat) voor retail en horeca, Vijfhoek voor moderne gezinnen, Borgele voor nieuwbouw, Keizerslanden voor families, bedrijventerreinen voor B2B, en Schalkhaar voor logistiek. Elke wijk heeft eigen karakter en doelgroepen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kosten SEO diensten in Deventer?</h3>
                <p className="text-gray-600">
                  SEO pakketten starten vanaf €750-1200 per maand, afhankelijk van je ambities. Google Ads beheer vanaf €450 per maand plus advertentiebudget. Websiteprojecten vanaf €2700. Deventer heeft stabiele economie en loyale klanten, waardoor marketing investeringen goed renderen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik je ook klanten buiten Deventer?</h3>
                <p className="text-gray-600">
                  Zeker! Deventer ligt strategisch tussen de Randstad en Oost-Nederland. Veel bedrijven bedienen Apeldoorn, Zutphen, Zwolle en de hele regio. De A1 brengt zakelijke bezoekers uit heel Nederland. SEO kan worden aangepast voor dit bredere regionale bereik.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe snel zie je resultaten met SEO in Deventer?</h3>
                <p className="text-gray-600">
                  Eerste resultaten zie je vaak binnen 2-3 maanden, significante verbetering binnen 4-6 maanden. Google Ads geven directe zichtbaarheid. Deventer heeft matige concurrentie maar sterke lokale loyaliteit, waardoor organische groei en mond-tot-mond reclame excellent werken.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welke branches doen het goed online in Deventer?</h3>
                <p className="text-gray-600">
                  Zakelijke dienstverlening, gezondheidszorg en wellness, bouw en renovatie, automotive en transport, retail en horeca, en technologie. Deventer's mix van historie, zakelijkheid en bereikbaarheid biedt kansen voor diverse professionele diensten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook zelf online marketing doen in Deventer?</h3>
                <p className="text-gray-600">
                  Basis social media en Google My Business kun je zelf doen. Maar voor echte groei in Deventer's zakelijke markt heb je expertise nodig in lokale SEO, regionale targeting, en professionele branding. Ik begeleid graag bij een hybride aanpak die past bij jouw bedrijf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Deventer</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe ik jouw bedrijf kan laten groeien in de Hanzestad – altijd eerlijk advies en regionale expertise.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Deventer - Online Marketing Bureau</h3>
              <p className="text-gray-600">
                Deventer Centrum • Brink • Vijfhoek • Borgele • Keizerslanden • Platvoet • Zandweteringen • Colmschate • Bathmen • Schalkhaar • Worp • Apeldoorn • Zutphen • Zwolle • Enschede
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}