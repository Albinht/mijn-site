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

export default function MarketingAltforst() {
  // West Maas en Waal reviews - focus op glastuinbouw, logistiek en dijkdorpen
  const dutchReviews = [
    { name: 'Glastuinbouw Maas & Waal', rating: 5, text: 'Onze tomaten en komkommers vinden nu rechtstreeks hun weg naar consumenten. De B2C strategie voor glasgroenten werkt fantastisch. Online verkoop verdubbeld!' },
    { name: 'Transport Beneden-Waal', rating: 5, text: 'Als logistiek bedrijf tussen Tiel en Nijmegen worden we nu perfect gevonden. De A15 corridor positionering levert wekelijks nieuwe transportopdrachten op.' },
    { name: 'Dijkcafé De Waaier', rating: 5, text: 'Fietsers op de Maas- en Waaldijken stoppen nu massaal. De route-marketing voor dijktoerisme is goud waard. Terras altijd vol bij mooi weer!' },
    { name: 'Fruitpakhuis Altforst', rating: 5, text: 'Conference peren en Elstar appels verkopen als zoete broodjes online. De seizoenscampagnes tijdens de pluk zijn een schot in de roos.' },
    { name: 'Aannemersbedrijf Dijkverzwaring', rating: 5, text: 'Specialisten in waterbouw worden we genoemd. Van Druten tot Beneden-Leeuwen krijgen we nu alle dijkprojecten binnen.' },
    { name: 'Huisartsen Maas & Waal', rating: 4.5, text: 'Patiënten uit Altforst, Appeltern en Maasbommel vinden ons makkelijk. De online afsprakenmodule werkt perfect voor ons plattelandspraktijk.' },
  ]
  const dutchMoreReviews = [
    { name: 'Watersport Marina Waal', rating: 5, text: 'Bootbezitters uit het hele rivierengebied boeken nu winterstalling. De "veilige haven aan de Waal" campagne trekt nieuwe ligplaatshouders.' },
    { name: 'Kas & Co Groenten', rating: 5, text: 'Directe afzet naar restaurants in Nijmegen en Arnhem loopt geweldig. De B2B strategie voor verse kasgroenten is spot on.' },
    { name: 'Fietsverhuur Dijkenland', rating: 4.5, text: 'E-bikes voor dijkroutes worden massaal online geboekt. Duitse toeristen vinden ons nu ook via "Radfahren Waal".' },
    { name: 'Notaris West Maas en Waal', rating: 5, text: 'Voor agrarische transacties en dijkwoningen zijn we nu de specialist. Google Ads voor specifieke vastgoedniches werkt uitstekend.' },
    { name: 'Installateur Rivierenland', rating: 5, text: 'Warmtepompen voor kassen en dijkwoningen is onze expertise. We domineren de zoekresultaten van Druten tot Wamel.' },
    { name: 'Dierenarts Fruitstreek', rating: 4.5, text: 'Veehouders en huisdiereigenaren uit heel West Maas en Waal weten ons te vinden. 24/7 bereikbaarheid is essentieel hier.' },
  ]

  return (
    <>
      {/* SEO Meta tags worden via layout.js geregeld */}

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">West Maas en Waal ondernemers oogsten digitaal succes</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Glashelder in marketing</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Van kassencomplex tot dijkcafé - groei met de kracht van West Maas en Waal</strong><br />
              Als specialist voor <b>Altforst en omliggende dijkdorpen</b> ken ik de unieke mix van glastuinbouw, fruitteelt en logistiek. De A15 als levensader, de Waal als attractie - ik zet jullie digitaal op de kaart.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Directe afzet glasgroenten naar consumenten</li>
              <li>✓ A15 corridor zichtbaarheid voor transport</li>
              <li>✓ Dijktoerisme marketing langs Maas en Waal</li>
              <li>✓ <b>B2B campagnes</b> voor kassengebied</li>
              <li>✓ Bereik Nijmegen, Tiel én Den Bosch markt</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk glastuinbouw cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Marketing expert voor het kassengebied West Maas en Waal</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing West Maas en Waal - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Expert Rivierenland" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing voor glastuinbouw en dijkdorpen"
          subtitle="Van tomaat tot transport - digitaal groeien aan de Waal"
          features={[
            {
              badge: "Glastuinbouw Expert",
              title: "Kassencomplex Marketing",
              description: "West Maas en Waal is hét glastuinbouwgebied tussen de rivieren. Ik help telers met directe verkoop, B2B afzet naar groothandel en restaurants. Van tomaat tot komkommer - worden gevonden wanneer het vers moet zijn.",
              visualTitle: "500+ Hectare Glas",
              visualSubtitle: "Directe afzet groeit",
              image: masterSeoImage
            },
            {
              badge: "A15 Corridor",
              title: "Transport & Logistiek Focus",
              description: "De A15 verbindt Rotterdam met Duitsland - dwars door jullie achtertuin. Met gerichte campagnes trek je transportopdrachten, distributiecontracten en logistieke partners. Van vers transport tot containers.",
              visualTitle: "A15 Bereik",
              visualSubtitle: "Rotterdam-Ruhrgebied",
              image: keywordResearchImage
            },
            {
              badge: "Dijktoerisme",
              title: "Waal Recreatie Marketing",
              description: "Fietsers, wandelaars, watersporters - de dijken trekken recreanten. Met route-marketing en seizoenscampagnes zet ik dijkcafés, B&B's en verhuurpunten op de kaart. Duitse toeristen inclusief!",
              visualTitle: "40km Dijkroutes",
              visualSubtitle: "4 Seizoenen Actief",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="West Maas en Waal groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Van kas tot klant: <span className="bg-[#F7D8FA] px-2 rounded italic">Rivierenland Marketing</span>
              </h2>
              <p className="text-xl text-gray-600">
                Glastuinbouw, fruitteelt, transport of recreatie - profiteer van de centrale ligging tussen grote steden.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Glastuinbouw */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Glastuinbouw</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden voor verse groenten, directe verkoop en B2B levering. Domineer zoekresultaten in Nijmegen, Tiel en Oss.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ "Verse tomaten kopen" SEO</li>
                  <li>✓ B2B glasgroenten positionering</li>
                  <li>✓ Seizoensgroenten campagnes</li>
                  <li>✓ Lokale afzet optimalisatie</li>
                </ul>
              </div>
              {/* Google Ads Transport */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  A15 Specialist
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Transport Sector</h3>
                <p className="text-gray-600 mb-6">
                  Trek transportopdrachten via de A15 corridor. Van vers transport tot distributie - worden gevonden door verladers.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Transport & logistiek leads</li>
                  <li>✓ Vers transport campagnes</li>
                  <li>✓ Koeltransport targeting</li>
                  <li>✓ B2B verladers bereik</li>
                </ul>
              </div>
              {/* Dijkdorpen Website */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dijkdorpen Website Expert</h3>
                <p className="text-gray-600 mb-6">
                  Websites die de sfeer van West Maas en Waal ademen. Perfect voor tuinders, transporteurs en recreatiebedrijven.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Webshops voor versproducten</li>
                  <li>✓ Transport portals & tracking</li>
                  <li>✓ Recreatie boekingssystemen</li>
                  <li>✓ Meertalig voor Duitsers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">West Maas en Waal marketing</span>
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is West Maas en Waal interessant voor glastuinbouw marketing?</summary>
                <p className="mt-4 text-gray-600">
                  Met meer dan 500 hectare glas is dit één van de belangrijkste tuinbouwgebieden van Nederland. De ligging tussen Nijmegen (20 min), Tiel (15 min) en Den Bosch (30 min) is perfect voor directe afzet. Consumenten willen steeds vaker rechtstreeks bij de teler kopen. Met de juiste online strategie tap je deze groeiende markt aan.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe bereik ik transportbedrijven via de A15?</summary>
                <p className="mt-4 text-gray-600">
                  De A15 is dé oost-west verbinding voor vrachtverkeer. Met Google Ads target ik op "transport Nijmegen Rotterdam", "koeltransport A15" en "groentevervoer vers". LinkedIn campagnes richten zich op logistiek managers en inkoopafdeling. Jouw specialisme (vers, koel, bloemen) wordt benadrukt. Zo word je dé partner voor specifiek transport.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Werkt dijktoerisme marketing echt?</summary>
                <p className="mt-4 text-gray-600">
                  Absoluut! De Maas- en Waaldijken zijn populair bij fietsers uit heel Nederland én Duitsland. Met route-marketing ("Rondje Waal", "Dijkenroute"), seizoenscampagnes en Duitse SEO trek je duizenden recreanten. Dijkcafés, B&B's en fietsverhuur profiteren hier enorm van. De combinatie water, natuur en authenticiteit verkoopt zichzelf - als mensen je kunnen vinden.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost marketing voor een glastuinbouwbedrijf?</summary>
                <p className="mt-4 text-gray-600">
                  Voor glastuinders start SEO vanaf €750/maand, gericht op B2C (consumenten) of B2B (groothandel/restaurants). Een webshop voor directe verkoop kost €3.500-€6.000. Google Shopping campagnes voor versproducten werken vanaf €600 advertentiebudget. De investering verdien je terug door hogere marges op directe verkoop - vaak 40% meer dan via de veiling.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe onderscheid ik me van Westland tuinders?</summary>
                <p className="mt-4 text-gray-600">
                  Westland is massaproductie, jullie zijn kleinschalig en persoonlijk. Benadruk de korte lijnen, versheid ("vanochtend geplukt"), en regionale binding. Consumenten uit Nijmegen en Arnhem waarderen lokaal geproduceerd. "Geen Westland fabriek maar West Maas en Waal kwaliteit" is een sterke positionering. Authenticiteit wint het van schaalgrootte.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om heel <span className="bg-[#F7D8FA] px-2 rounded italic">West Maas en Waal te domineren</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van kassencomplex tot dijkcafé - laat je bedrijf groeien met gerichte rivierenland marketing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek de mogelijkheden voor jouw glastuinbouw of transport bedrijf.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel overleggen over versmarketing of A15 campagnes? App me!</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Specialist West Maas en Waal</h3>
              <p className="text-gray-600">
                Druten • Beneden-Leeuwen • Boven-Leeuwen • Wamel • Appeltern • Maasbommel • Alphen • Horssen • Bergharen • Leur • Puiflijk
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}