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

export default function MarketingAlem() {
  // Authentieke Bommelerwaard reviews - focus op fruitteelt, watersport en logistiek
  const dutchReviews = [
    { name: 'Fruitbedrijf De Maasgaard', rating: 5, text: 'Door de lokale SEO vinden klanten uit heel de Bommelerwaard ons voor verse appels en peren. De webshop draait beter dan ooit, vooral tijdens het plukseizoen!' },
    { name: 'Jachthaven Alem Marina', rating: 5, text: 'Bootbezitters van Waal en Maas vinden ons nu perfect. De Google Ads voor winterstalling leveren elk najaar volle bezetting op. Top marketing voor de watersportsector!' },
    { name: 'Transport & Logistiek Bommelerwaard', rating: 5, text: 'Als logistiek bedrijf tussen Den Bosch en Geldermalsen zijn we nu marktleider. Duitse verladers vinden ons via de A2 corridor marketing.' },
    { name: 'Dijkcafé Het Veerhuis', rating: 5, text: 'Fietsers op de Maasroute stoppen nu massaal bij ons. De lokale vindbaarheid voor "restaurant aan de Maas" is geweldig. Terras zit vol!' },
    { name: 'Bommelerwaard Bouw & Renovatie', rating: 5, text: 'Dijkwoningen renoveren is ons specialisme. Nu worden we gevonden van Zaltbommel tot Kerkdriel. De opdrachten stromen binnen.' },
    { name: 'Huisartsenpraktijk Maasdorpen', rating: 4.5, text: 'Patiënten uit Alem, Rossum en Kerkwijk vinden ons nu gemakkelijk online. De nieuwe website met online afspraken module werkt perfect.' },
  ]
  const dutchMoreReviews = [
    { name: 'Aspergekwekerij Bommelerwaard', rating: 5, text: 'In het aspergeseizoen verdubbelt onze omzet dankzij de seizoensgerichte campagnes. Klanten uit Utrecht en Den Bosch komen speciaal naar Alem.' },
    { name: 'Watersportservice Maas & Waal', rating: 5, text: 'Bootonderhoud en winterstalling lopen storm. We bedienen nu de hele regio tussen Heusden en Tiel. Perfecte positionering!' },
    { name: 'Bommelerwaard Vers', rating: 4.5, text: 'Onze boerenlandwinkel trekt nu klanten uit de hele streek. De combinatie van SEO en sociale media marketing werkt fantastisch.' },
    { name: 'Notariskantoor Maasuiterwaarden', rating: 5, text: 'Voor agrarische transacties en dijkwoningen zijn we nu de go-to notaris. Google Ads voor specifieke doelgroepen werkt uitstekend.' },
    { name: 'Installatiebedrijf Rivierenland', rating: 5, text: 'Van warmtepompen tot zonnepanelen op dijkwoningen - we worden overal voor gevonden. De technische SEO is perfect afgestemd.' },
    { name: 'Dierenarts Bommelerwaard', rating: 4.5, text: 'Veehouders en huisdiereigenaren uit de hele Bommelerwaard weten ons te vinden. De 24/7 bereikbaarheid via de website is goud waard.' },
  ]

  return (
    <>
      {/* SEO Meta tags worden via layout.js geregeld */}

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Bommelerwaard bedrijven domineren tussen Maas en Waal</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">Fruitstreek marketing met impact</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Benut de kracht van jullie positie in het hart van de Bommelerwaard</strong><br />
              Als specialist voor <b>Alem en de Maasdorpen</b> ken ik de unieke dynamiek van fruitteelt, watersport en dijkrecreatie. Van aspergeseizoen tot appelpluktijd - ik zorg dat klanten jullie vinden wanneer het telt.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Bereik klanten uit Zaltbommel, Rossum en Kerkdriel</li>
              <li>✓ Seizoensmarketing voor fruit- en aspergeteelt</li>
              <li>✓ Watersport & recreatie langs Maas en Waal</li>
              <li>✓ <b>Bommelerwaard SEO</b> voor agrarische bedrijven</li>
              <li>✓ A2 corridor zichtbaarheid voor transport & logistiek</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan gratis strategiegesprek <span>→</span>
              </Button>
              <Button variant="secondary" as={Link} href="/work-with-me">
                Bekijk Bommelerwaard cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Marketing expert voor ondernemers tussen Maas en Waal</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Marketing Bommelerwaard - Groeiresultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin Marketing Expert Bommelerwaard" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* USP & FEATURE SECTION */}
        <FeatureSection
          title="Marketing die de seizoenen van de Bommelerwaard begrijpt"
          subtitle="Van aspergetime tot fruitoogst - altijd de juiste klanten"
          features={[
            {
              badge: "Agrarische SEO",
              title: "Fruitstreek Marketing Expert",
              description: "Specialistische kennis van de Bommelerwaard economie. Van fruittelers tot aspergekwekers, van dijkcafés tot jachthavens - ik ken jullie seizoenen en doelgroepen perfect.",
              visualTitle: "Bommelerwaard Bereik",
              visualSubtitle: "Maas tot Waal",
              image: masterSeoImage
            },
            {
              badge: "Seizoenscampagnes",
              title: "Google Ads Rivierenland",
              description: "Piek in aspergetijd? Vol tijdens de fruitpluk? Storm na een dijkdoorbraak documentaire? Ik zorg dat je precies op het juiste moment zichtbaar bent voor koopkrachtige klanten.",
              visualTitle: "A2 & N322 Traffic",
              visualSubtitle: "Utrecht-Den Bosch as",
              image: keywordResearchImage
            },
            {
              badge: "Watersport Marketing",
              title: "Maas & Waal Specialist",
              description: "Jachthavens, bootonderhoud, waterrecreatie - de Bommelerwaard leeft van het water. Met gerichte campagnes bereik je watersporters uit heel Nederland die de rustige Maas waarderen.",
              visualTitle: "2 Rivieren Strategie",
              visualSubtitle: "Maas & Waal bereik",
              image: contentRanksImage
            }
          ]}
        />

        {/* LOKALE KLANTREVIEWS */}
        <ReviewSlider
          customReviews={dutchReviews}
          customMoreReviews={dutchMoreReviews}
          title="Bommelerwaard ondernemers plukken de vruchten van <span class='bg-[#F7D8FA] px-2 rounded italic'>slimme marketing</span>"
        />

        {/* LOKALE MARKETING DIENSTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Van Maasdijk tot Waaldijk: <span className="bg-[#F7D8FA] px-2 rounded italic">Bommelerwaard Marketing</span>
              </h2>
              <p className="text-xl text-gray-600">
                Fruithandel, watersport, horeca of logistiek - profiteer van de centrale ligging tussen Utrecht, Den Bosch en Nijmegen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO Bommelerwaard */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Bommelerwaard</h3>
                <p className="text-gray-600 mb-6">
                  Domineer Google in Zaltbommel, Rossum, Kerkdriel en alle Maasdorpen. Seizoensgerichte SEO die meebeweegt met oogst en recreatie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Fruitteelt & agrarische SEO</li>
                  <li>✓ Watersport & recreatie vindbaarheid</li>
                  <li>✓ Lokale dienstverleners positionering</li>
                  <li>✓ Seizoensgebonden optimalisatie</li>
                </ul>
              </div>
              {/* Google Ads Rivierenland */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  A2 Corridor Expert
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Maas & Waal</h3>
                <p className="text-gray-600 mb-6">
                  Trek koopkrachtige klanten uit Utrecht en Den Bosch. Perfect getimede campagnes voor asperges, fruit en waterrecreatie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Seizoenspieken benutten</li>
                  <li>✓ Stedelijke doelgroepen bereiken</li>
                  <li>✓ Transport & logistiek leads</li>
                  <li>✓ Agrarische B2B campagnes</li>
                </ul>
              </div>
              {/* Bommelerwaard Website */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Rivierenland Website Expert</h3>
                <p className="text-gray-600 mb-6">
                  Websites die de sfeer van de Bommelerwaard ademen. Perfect voor fruitbedrijven, jachthavens en authentieke streekproducenten.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Seizoensmodules & campagnes</li>
                  <li>✓ Agrarische webshops</li>
                  <li>✓ Watersport boekingssystemen</li>
                  <li>✓ Streekproduct presentatie</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTIE */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">Bommelerwaard marketing</span>
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Waarom is seizoensmarketing zo belangrijk in de Bommelerwaard?</summary>
                <p className="mt-4 text-gray-600">
                  De Bommelerwaard economie draait op seizoenen. Aspergetijd (april-juni), fruitpluk (augustus-oktober), winterstalling voor boten (oktober-maart) - elk seizoen vraagt andere marketing. Ik zorg dat je precies op de piekmoment zichtbaar bent met aangepaste campagnes, zodat je maximaal profiteert van de seizoensdrukte.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe trek ik klanten uit de grote steden naar Alem?</summary>
                <p className="mt-4 text-gray-600">
                  Alem ligt perfect tussen Utrecht (35 min) en Den Bosch (20 min) via de A2. Stedelingen zoeken authentieke streekproducten, rust aan het water, en échte boerderijbeleving. Met gerichte Google Ads op "dagje uit Bommelerwaard", "verse asperges Utrecht" of "bootje huren Maas" trek je precies deze doelgroep. De combinatie van rust, ruimte en authenticiteit is jullie USP.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Welke bedrijven doen het goed in de Bommelerwaard?</summary>
                <p className="mt-4 text-gray-600">
                  Fruitteeltbedrijven en aspergekwekerijen floreren met directe verkoop. Jachthavens langs de Maas draaien uitstekend. Logistieke bedrijven profiteren van de A2 ligging. Horeca aan de dijken trekt fietsers en watersporters. Agrarische dienstverleners bedienen de hele streek. Met de juiste online strategie bereik je jouw specifieke doelgroep perfect.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Wat kost marketing voor een Bommelerwaard bedrijf?</summary>
                <p className="mt-4 text-gray-600">
                  Voor agrarische bedrijven start SEO vanaf €650 per maand, met focus op seizoenszoektermen. Google Ads tijdens piekseizoen (asperge/fruit) werkt al vanaf €400 advertentiebudget plus €350 beheer. Een professionele agrarische webshop kost €3.000-€6.000. De investering verdien je meestal in één goed seizoen terug door hogere marges op directe verkoop.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Hoe onderscheid ik me van Betuwe fruittelers?</summary>
                <p className="mt-4 text-gray-600">
                  De Bommelerwaard heeft een eigen identiteit: kleinschaliger, authentieker, direct aan het water. Waar de Betuwe grootschalig is, ben jij persoonlijk. De ligging tussen twee rivieren, de historische dijkdorpen, de combinatie met waterrecreatie - dat maakt de Bommelerwaard uniek. Ik positioneer je als "exclusive Bommelerwaard kwaliteit" in plaats van te concurreren op volume.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-bold text-lg cursor-pointer">Werkt online marketing voor kleine dorpen zoals Alem?</summary>
                <p className="mt-4 text-gray-600">
                  Juist voor kleine dorpen! Alem profiteert van de regionale bekendheid van de Bommelerwaard. We targeten niet alleen op "Alem" maar ook op "Bommelerwaard", "Maas", "tussen Zaltbommel en Kerkdriel". Mensen zoeken naar de streek, niet per se het specifieke dorp. Door slim te positioneren als "hart van de Bommelerwaard" trek je klanten uit een straal van 50km.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar om de hele <span className="bg-[#F7D8FA] px-2 rounded italic">Bommelerwaard te veroveren</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Van Maas tot Waal, van aspergetijd tot fruitoogst - laat je bedrijf groeien met seizoensgerichte marketing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct bellen</h3>
                <p className="text-gray-600 mb-4">Bespreek jouw groeikansen in de Bommelerwaard regio.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp direct</h3>
                <p className="text-gray-600 mb-4">Snel overleggen over seizoenscampagnes? App direct!</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Specialist Bommelerwaard & Rivierenland</h3>
              <p className="text-gray-600">
                Zaltbommel • Rossum • Kerkdriel • Ammerzoden • Hedel • Wellseind • Kerkwijk • Bruchem • Gameren • Nieuwaal • Zuilichem • Brakel
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}