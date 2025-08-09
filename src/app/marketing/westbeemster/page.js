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

export default function MarketingWestbeemster() {
  // Lokale Westbeemster reviews - authentiek voor UNESCO werelderfgoed gebied
  const dutchReviews = [
    { name: 'Restaurant De Beemster Eend', rating: 5, text: 'Dankzij de lokale SEO trekken we nu veel fietstoeristen die de polder bezoeken. Vooral in het weekend zien we een enorme toename van gasten uit Amsterdam en Purmerend.' },
    { name: 'Kaasboerderij Van der Molen', rating: 5, text: 'Met Google Ads bereiken we perfect de toeristen die het UNESCO erfgoed komen bekijken. Onze rondleidingen zitten sinds de samenwerking met Albin altijd vol.' },
    { name: 'Fietsverhuur Poldertocht', rating: 5, text: 'We staan nu bovenaan voor "fietsen huren Beemster" en "polder fietstocht". Het aantal verhuren is verdriedubbeld, vooral bij dagjesmensen uit de Randstad.' },
    { name: 'B&B De Stolpboerderij', rating: 5, text: 'Onze historische stolp wordt nu perfect gevonden door mensen die overnachten in de Beemster. De bezettingsgraad is gestegen van 40% naar 75%.' },
    { name: 'Agrarisch Museum Westbeemster', rating: 5, text: 'De nieuwe website trekt veel meer bezoekers naar ons museum over de droogmakerij geschiedenis. Vooral schoolklassen weten ons nu te vinden.' },
    { name: 'Hoveniersbedrijf Polderzicht', rating: 4.5, text: 'We krijgen nu aanvragen uit heel Noord-Holland voor authentieke poldertuin aanleg. De lokale SEO werkt ook regionaal uitstekend.' },
  ]
  const dutchMoreReviews = [
    { name: 'Monumentenzorg Adviseurs', rating: 5, text: 'Als specialist in stolpboerderijen krijgen we nu veel meer opdrachten voor restauraties. We worden gevonden door eigenaren van monumentale panden in heel de Beemster.' },
    { name: 'Melkveehouderij De Lange Wei', rating: 5, text: 'Onze boerderijwinkel wordt nu ook gevonden door mensen uit Volendam en Edam. De verkoop van streekproducten is met 60% gestegen.' },
    { name: 'Poldersport Westbeemster', rating: 4.5, text: 'De kanoroutes door de polder trekken veel meer bezoekers sinds we online zichtbaar zijn. Vooral gezinnen uit Amsterdam boeken nu bij ons.' },
    { name: 'Beemster Notariskantoor', rating: 5, text: 'Voor agrarische transacties en erfgoed vastgoed worden we nu regionaal gevonden. De specialistische SEO op polderrecht werkt uitstekend.' },
    { name: 'Café Het Wapen van Westbeemster', rating: 5, text: 'We zijn het startpunt geworden voor veel fiets- en wandelroutes door het UNESCO gebied. De lunch omzet is verdubbeld.' },
    { name: 'Dierenarts De Beemster', rating: 4.5, text: 'Naast huisdieren behandelen we veel vee. Door de juiste SEO vinden boeren uit de hele polder ons nu voor spoedhulp.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">UNESCO Werelderfgoed verdient de beste marketing</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist voor Westbeemster ondernemers</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Profiteer van de unieke ligging in de Beemster polder</strong><br />
            Als <b>marketing bureau Westbeemster</b> help ik lokale ondernemers om optimaal te profiteren van het historische karakter, de toeristische aantrekkingskracht en de sterke gemeenschapszin van dit bijzondere dorp.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Trek toeristen aan die het UNESCO erfgoed bezoeken</li>
            <li>✓ Bereik de 9.000+ inwoners van de hele Beemster gemeente</li>
            <li>✓ Profiteer van bezoekers uit Purmerend (15 min rijden)</li>
            <li>✓ <b>Google Ads Westbeemster</b> voor directe zichtbaarheid</li>
            <li>✓ Lokale SEO strategie voor duurzame groei in de polder</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Ontdek lokale cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in alle Beemster kernen sinds 2019</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Westbeemster - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Westbeemster" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Westbeemster met slimme marketing"
        subtitle="Lokale vindbaarheid en conversie, zonder poespas"
        features={[
          {
            badge: "SEO Westbeemster",
            title: "SEO Specialist Westbeemster",
            description: "Wil je echt groeien in Westbeemster en de Beemster polder? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit de regio.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Westbeemster",
            description: "Direct aanvragen van inwoners en bedrijven uit Westbeemster en omliggende dorpen. Je adverteert gericht en ziet direct resultaat in je agenda.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Westbeemster",
            description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Westbeemster. Volledig geoptimaliseerd voor de lokale markt in de Beemster.",
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
        title="Westbeemster groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN WESTBEEMSTER */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom is marketing cruciaal in het <span className="bg-[#F7D8FA] px-2 rounded italic">UNESCO Werelderfgoed</span>?
            </h2>
            <p className="text-xl text-gray-600">
              De Beemster polder trekt jaarlijks 150.000+ bezoekers. Met de juiste marketing tap je deze goudmijn aan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">17e-eeuwse droogmakerij</h3>
              <p className="text-gray-600">
                De Beemster is sinds 1612 een meesterwerk van waterbeheer. Dit unieke verhaal trekt cultuurtoeristen, geschiedenisliefhebbers en dagjesmensen die authentieke ervaringen zoeken.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategische ligging</h3>
              <p className="text-gray-600">
                Tussen Amsterdam (25 min), Purmerend (15 min) en de kust bij Volendam. Perfect bereikbaar via N244 en N247, ideaal voor dagtoerisme en zakelijke bezoekers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vier seizoenen kansen</h3>
              <p className="text-gray-600">
                Tulpenroutes in het voorjaar, fietstochten in de zomer, oogstfeesten in de herfst, schaatsen op de ringvaart in de winter. Elk seizoen biedt nieuwe marketingkansen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOKALE MARKETING DIENSTEN */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Westbeemster</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlener tot retailer – ik help je bedrijf online groeien in Westbeemster en de Beemster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Westbeemster */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Westbeemster</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Westbeemster.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek voor Westbeemster</li>
                <li>✓ Content, autoriteit & linkbuilding</li>
                <li>✓ Klantbeoordelingen stimuleren</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
              </ul>
            </div>
            {/* Google Ads Westbeemster */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Westbeemster ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Westbeemster</h3>
              <p className="text-gray-600 mb-6">
                Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Westbeemster en de Beemster.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale advertenties & campagnes</li>
                <li>✓ Focus op Westbeemster en omliggende dorpen</li>
                <li>✓ Continu geoptimaliseerd voor ROAS</li>
                <li>✓ Landing pages die converteren</li>
                <li>✓ Transparante rapportages</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Jouw bedrijf groeit online met een converterende website, lokale campagnes en een strategie die werkt.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Website op maat voor Westbeemster</li>
                <li>✓ Altijd snel, mobielvriendelijk & veilig</li>
                <li>✓ Gericht op conversie & groei</li>
                <li>✓ Sterke lokale zichtbaarheid</li>
                <li>✓ Social media integratie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VEELGESTELDE VRAGEN */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Westbeemster</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Westbeemster.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe profiteer ik van het UNESCO werelderfgoed status?</h3>
              <p className="text-gray-600">
                De Beemster polder staat sinds 1999 op de UNESCO werelderfgoedlijst. Dit trekt jaarlijks 150.000+ bezoekers voor het unieke polderlandschap, de stolpboerderijen en het geometrische verkavelingspatroon uit 1612. Met de juiste SEO strategie positioneer je jouw bedrijf als dé lokale expert voor deze cultuurtoeristen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke zoektermen zijn belangrijk voor Westbeemster bedrijven?</h3>
              <p className="text-gray-600">
                Naast "Westbeemster + dienst" scoren termen als "Beemster polder bezoeken", "UNESCO werelderfgoed Nederland", "stolpboerderij overnachten" en "fietsen Beemster" hoog. Voor de agrarische sector zijn "streekproducten Beemster" en "kaasboerderij bezoeken" goudmijnen. Ik analyseer precies welke termen voor jouw bedrijf het meest waardevol zijn.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bereik ik ook mensen uit Purmerend en Amsterdam?</h3>
              <p className="text-gray-600">
                Absoluut! Westbeemster ligt op slechts 15 minuten van Purmerend (80.000+ inwoners) en 25 minuten van Amsterdam. Veel stedelingen zoeken naar authentieke polder-ervaringen, verse streekproducten en rustgevende dagjes uit. Met regionale SEO tap je deze enorme markt aan, vooral in het weekend en vakanties.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor een Beemster ondernemer?</h3>
              <p className="text-gray-600">
                Voor horeca en toeristische bedrijven start lokale SEO vanaf €750/maand vanwege de hoge concurrentie en het seizoensgebonden karakter. Voor lokale dienstverleners (aannemers, kappers) vanaf €500/maand. Google Ads campagnes starten vanaf €500 advertentiebudget + €250 beheerkosten. Het rendement? Meestal 300-500% ROI binnen 12 maanden.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe onderscheid ik me van andere Beemster bedrijven?</h3>
              <p className="text-gray-600">
                Door het unieke verhaal van de 400 jaar oude droogmakerij te verbinden met jouw bedrijf. Of je nu een restaurant hebt (Beemster kaas gerechten), een B&B (overnachten in een stolpboerderij) of een fietsverhuur (poldertochten langs molens) - ik help je het UNESCO verhaal authentiek te vertellen en commercieel te benutten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER WESTBEEMSTER SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marketing expertise voor het <span className="bg-[#F7D8FA] px-2 rounded italic">hart van de Beemster polder</span>
            </h2>
            <p className="text-xl text-gray-600">
              Waar 17e-eeuwse geschiedenis moderne ondernemers ontmoet - dat is Westbeemster anno 2025.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">De economische motor van de Beemster</h3>
              <p className="text-gray-600 mb-4">
                Westbeemster is met 3.500 inwoners het grootste dorp in de Beemster polder. Het geometrische stratenpatroon uit 1612, de monumentale Keyserkerk en meer dan 50 rijksmonumenten maken dit tot een unieke locatie voor ondernemers die authenticiteit en kwaliteit bieden.
              </p>
              <p className="text-gray-600 mb-6">
                De combinatie van agrarisch erfgoed (Beemster kaas wereldberoemd!), groeiend toerisme (150.000+ bezoekers/jaar) en de nabijheid van Purmerend en Amsterdam creëert ongekende kansen. Als marketing specialist help ik je deze kansen optimaal te benutten.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 3.500 koopkrachtige inwoners + 9.000 in totale gemeente</li>
                <li>✓ 150.000+ toeristen per jaar (groeiend met 8% jaarlijks)</li>
                <li>✓ 15 min van Purmerend, 25 min van Amsterdam</li>
                <li>✓ Fietsroute knooppunt voor Waterland regio</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Succesvolle Beemster ondernemers die ik help groeien:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Stolpboerderij B&B's & hotels</div>
                <div>• Kaasboerderijen & streekwinkels</div>
                <div>• Restaurants met Beemster specialiteiten</div>
                <div>• Fietsverhuur & poldertochten</div>
                <div>• Agrarische bedrijven & melkveehouders</div>
                <div>• Monumentenzorg & restaurateurs</div>
                <div>• Museums & cultuur attracties</div>
                <div>• Watersport & kanoverhuur</div>
                <div>• Biologische boerderijen</div>
                <div>• Ambachtelijke bedrijven</div>
                <div>• Lokale dienstverleners</div>
                <div>• Toeristische ondernemers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Westbeemster</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Westbeemster – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Westbeemster & de Beemster</h3>
            <p className="text-gray-600">
              Westbeemster (hoofdkern) • Middenbeemster (2 km) • Zuidoostbeemster (4 km) • Noordbeemster (5 km) • Purmerend (15 min) • Oosthuizen • Edam-Volendam • Amsterdam Noord (25 min)
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}