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

export default function MarketingAfferden() {
  // Authentieke reviews uit de Maasstreek - grensregio Gelderland/Limburg
  const dutchReviews = [
    { name: 'Maasfront Recreatie', rating: 5, text: 'Dankzij de lokale SEO strategie trekken we nu watersporters uit heel Noord-Limburg en de Gelderse grensstreek. Onze bootverhuurgboekingen zijn verdubbeld!' },
    { name: 'Grensstreek Transport BV', rating: 5, text: 'Als transportbedrijf tussen Gennep en Nijmegen zijn we nu perfect vindbaar. De Google Ads campagne levert wekelijks nieuwe Duitse en Nederlandse klanten op.' },
    { name: 'Hoeve De Blauwe Sluis', rating: 5, text: 'Onze minicamping aan de Maas krijgt nu het hele seizoen door boekingen. We ranken top 3 voor camping Gennep en recreatie Land van Cuijk.' },
    { name: 'Fysiotherapie Maasland', rating: 5, text: 'Patiënten uit Afferden, Heijen en Gennep weten ons nu moeiteloos te vinden. De online agenda zit steeds voller door de lokale vindbaarheid.' },
    { name: 'Aannemersbedrijf Limburg-Gelderland', rating: 5, text: 'We krijgen nu renovatieprojecten uit de hele grensstreek. Van Bergen tot Milsbeek, overal worden we gevonden voor verbouwingen.' },
    { name: 'Medisch Centrum Noord-Limburg', rating: 4.5, text: 'De nieuwe website en SEO aanpak zorgen voor een constante stroom nieuwe patiënten uit de driehoek Gennep-Boxmeer-Cuijk.' },
  ]
  const dutchMoreReviews = [
    { name: 'Agrarisch Bedrijf Maasvallei', rating: 5, text: 'Onze streekproducten verkopen nu ook online fantastisch. Klanten uit heel Noord-Limburg bestellen onze asperges en aardbeien.' },
    { name: 'Watersportcentrum De Kraaijenbergse Plassen', rating: 5, text: 'Door de gerichte campagnes bereiken we nu duikers en zeilers uit een straal van 50km. De cursussen zitten altijd vol.' },
    { name: 'Brasserie Aan de Maas', rating: 4.5, text: 'We trekken nu ook Duitse gasten uit Kranenburg en Kleve. De meertalige website en lokale SEO werken perfect samen.' },
    { name: 'Notariskantoor Land van Cuijk', rating: 5, text: 'Voor vastgoedtransacties in de grensregio worden we nu als eerste gevonden. De Google Ads leveren precies de juiste doelgroep.' },
    { name: 'Elektrotechniek Maasduinen', rating: 5, text: 'Van Siebengewald tot Ottersum, overal in de regio krijgen we nu spoedopdrachten binnen. De 24/7 vindbaarheid is goud waard.' },
    { name: 'Dierenkliniek Genneperhei', rating: 4.5, text: 'Huisdiereigenaren uit de hele gemeente Bergen vinden ons nu direct. De online afsprakenmodule werkt perfect.' },
  ]

  return (
    <>
      {/* SEO Meta tags worden via layout.js geregeld */}

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Ondernemers in de Maasstreek verdubbelen hun omzet</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Grensregio marketing die werkt</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Profiteer van de unieke ligging tussen Gelderland en Limburg</strong><br />
              Als marketing specialist voor de grensstreek rondom <b>Afferden, Gennep en Bergen</b> help ik ondernemers om klanten uit beide provincies én Duitsland aan te trekken. De Maas als verbinding, niet als grens.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik klanten uit Gennep, Bergen, Boxmeer én Nijmegen</li>
              <li>✓ Grensoverschrijdende marketing: ook Duitse klanten uit Kleve</li>
              <li>✓ Specialisatie in recreatie, transport en agrarische sector</li>
              <li>✓ <b>Maasstreek SEO</b> voor watersport en toerisme</li>
              <li>✓ Profiteer van A77 verbinding tussen Duitsland en Randstad</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Ontdek lokale cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist voor ondernemers in Land van Cuijk & Noord-Limburg</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Specialist Maasstreek - Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Expert Grensregio" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Grensregio marketing tussen Maas en Niers"
          subtitle="Bereik ondernemers en consumenten in drie landen tegelijk"
          features={[
            {
              badge: "Grensstreek SEO",
              title: "SEO Specialist Maasduinen",
              description: "Van de Kraaijenbergse Plassen tot aan de Duitse grens - ik zorg dat recreatiebedrijven, transporteurs en agrariërs gevonden worden door hun ideale klanten uit de hele Euregio.",
              visualTitle: "3 Provincies bereik",
              visualSubtitle: "Gelderland-Limburg-Duitsland",
              image: masterSeoImage
            },
            {
              badge: "Grensoverschrijdend",
              title: "Google Ads Gennep-Bergen",
              description: "Bereik Duitse toeristen via de A77, Nederlandse dagjesmensen én zakelijke klanten uit het Rijk van Nijmegen. Campagnes in meerdere talen voor maximaal bereik.",
              visualTitle: "A77 Corridor",
              visualSubtitle: "Duitsland-Nederland",
              image: keywordResearchImage
            },
            {
              badge: "Maasrecreatie",
              title: "Marketing Bureau Noord-Limburg",
              description: "Specialistische kennis van watersport, recreatie en toerisme langs de Maas. Van bootverhuurbedrijven tot campings - we kennen jullie doelgroep en seizoenspatronen.",
              visualTitle: "Maasvallei Expert",
              visualSubtitle: "Recreatie & Toerisme",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Maasstreek ondernemers groeien met <span class='bg-[#F7D8FA] px-2 rounded italic'>grensregio marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Drie provincies, één strategie: <span className="bg-[#F7D8FA] px-2 rounded italic">Maasstreek Marketing</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van watersportbedrijf tot transporteur, van camping tot agrarisch bedrijf – profiteer van de strategische ligging tussen Nijmegen, Venlo en de Duitse grens.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Grensstreek */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Grensstreek</h3>
                <p className="text-gray-600 mb-6">
                  Domineer zoekresultaten in Gennep, Bergen, Boxmeer én Duitse grensplaatsen. Multitaal SEO voor maximaal bereik langs de Maas.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Optimalisatie voor Maasrecreatie & watersport</li>
                  <li>✓ Duitse zoektermen voor grensverkeer</li>
                  <li>✓ Land van Cuijk positionering</li>
                  <li>✓ A77-corridor zichtbaarheid</li>
                </ul>
              </div>
              {/* Google Ads Euregio */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Grensoverschrijdend succes
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Euregio Maas-Rijn</h3>
                <p className="text-gray-600 mb-6">
                  Bereik Duitse toeristen, Nederlandse recreanten én zakelijke klanten. Meertalige campagnes voor de hele grensregio.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Nederlands & Duits adverteren</li>
                  <li>✓ Seizoensgerichte recreatiecampagnes</li>
                  <li>✓ Transport & logistiek targeting</li>
                  <li>✓ Agrarische sector bereik</li>
                </ul>
              </div>
              {/* Maasstreek Website */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Maasstreek Website Specialist</h3>
                <p className="text-gray-600 mb-6">
                  Websites die de unieke positie aan de Maas benutten. Perfect voor recreatiebedrijven, transporteurs en regionale dienstverleners.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Meertalige websites (NL/DE/EN)</li>
                  <li>✓ Integratie met boekingssystemen</li>
                  <li>✓ Route-planners naar jouw locatie</li>
                  <li>✓ Seizoensgebonden content strategie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">Maasstreek marketing</span>
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is de grensligging zo waardevol voor marketing?</summary>
                <p className="mt-4 text-gray-600">
                  De ligging tussen Gelderland, Limburg en Duitsland biedt unieke kansen. Via de A77 bereik je Duitse toeristen en zakelijke klanten. De Maas trekt watersporters en recreanten uit drie provincies. Transport- en logistieke bedrijven profiteren van de internationale corridor. Met de juiste marketing strategie tap je al deze markten aan.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke sectoren doen het goed in de Maasstreek?</summary>
                <p className="mt-4 text-gray-600">
                  Recreatie en toerisme floreren dankzij de Kraaijenbergse Plassen en Maasoevers. Transport- en logistieke bedrijven profiteren van de A77 verbinding. De agrarische sector (asperges, aardbeien, champignons) heeft een sterke positie. Watersportbedrijven, campings en horeca draaien uitstekend in het seizoen. Met gerichte marketing bereik je precies jouw doelgroep.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe bereik ik Duitse klanten vanuit Afferden?</summary>
                <p className="mt-4 text-gray-600">
                  Duitse klanten uit Kleve, Kranenburg en Goch zijn dichterbij dan je denkt - vaak binnen 20 minuten rijden. Ik zet Duitse Google Ads campagnes op, optimaliseer je website voor Duitse zoektermen en creëer Duitse landingspagina's. Vooral recreatiebedrijven en restaurants profiteren enorm van deze grensoverschrijdende aanpak.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost marketing voor de grensregio?</summary>
                <p className="mt-4 text-gray-600">
                  SEO trajecten starten vanaf €750 per maand, waarbij we focussen op zowel Nederlandse als Duitse zoektermen. Google Ads campagnes zijn al effectief vanaf €500 advertentiebudget, plus €395 beheerkosten. Voor een complete meertalige website reken op €2.500-€5.000. Het rendement? Meestal binnen 3-6 maanden terugverdiend door nieuwe klanten uit drie landen.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom niet gewoon een bureau uit Nijmegen of Venlo?</summary>
                <p className="mt-4 text-gray-600">
                  Grote stadsbureaus kennen de dynamiek van de grensstreek niet. Ze missen de kennis van seizoenspatronen in recreatie, de Duitse mentaliteit, en de specifieke kansen van de Maascorridor. Ik ken de regio, spreek de taal van ondernemers hier, en begrijp hoe je profiteert van de ligging tussen drie provincies. Dat maakt het verschil tussen "zomaar online marketing" en echt groeien.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om de hele <span className="bg-[#F7D8FA] px-2 rounded italic">Maasstreek te veroveren</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Benut de kracht van jullie ligging tussen drie provincies. Van Kraaijenbergse Plassen tot Duitse grens – ik ken de regio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek de groeikansen voor jouw bedrijf in de grensregio.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel een vraag? Stuur een WhatsApp voor direct antwoord.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialist Grensregio Gelderland-Limburg-Duitsland</h3>
              <p className="text-gray-600">
                Gennep • Bergen • Boxmeer • Cuijk • Heijen • Milsbeek • Ottersum • Siebengewald • Kleve • Kranenburg • Groesbeek • Mook
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}