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

export default function MarketingZuidoostbeemster() {
  // Lokale Zuidoostbeemster reviews - grensgebied Purmerend
  const dutchReviews = [
    { name: 'Sportschool FitZuid', rating: 5, text: 'We trekken nu veel leden uit Purmerend-Zuid dankzij onze zichtbaarheid. De Google Ads voor "sportschool bij Purmerend" werken perfect. 40% meer aanmeldingen!' },
    { name: 'Kinderopvang Het Polderhart', rating: 5, text: 'Ouders uit de nieuwbouwwijken vinden ons nu makkelijk. Vooral jonge gezinnen die van Amsterdam naar de Beemster verhuizen boeken bij ons.' },
    { name: 'Aannemersbedrijf Zuidoost', rating: 5, text: 'We krijgen nu veel renovatieopdrachten uit de oude kern. De SEO op "verbouwen Beemster" en "aannemer Purmerend-Zuid" levert gouden leads op.' },
    { name: 'Huisartsenpraktijk De Purmer', rating: 5, text: 'Sinds de praktijk uitbreiding worden we gevonden door de 2000+ nieuwe inwoners. De wachttijden zijn nu goed gecommuniceerd online.' },
    { name: 'Brasserie De Beemsterpoort', rating: 5, text: 'Als uitvalsbasis voor poldertochten trekken we nu veel fietsers uit Purmerend. De terrasomzet is verdubbeld sinds we online zichtbaar zijn.' },
    { name: 'Autoservice Zuidoost', rating: 4.5, text: 'APK klanten uit heel Purmerend-Zuid komen nu naar ons. De lokale SEO werkt veel beter dan onze oude krantenadvertenties.' },
  ]
  const dutchMoreReviews = [
    { name: 'Makelaardij Polder & Stad', rating: 5, text: 'We verkopen nu 60% meer woningen aan Amsterdammers die de rust zoeken. De content over "wonen aan de rand van Purmerend" scoort uitstekend.' },
    { name: 'Dierenarts Beemster-Zuid', rating: 5, text: 'De spoedlijn wordt nu gevonden door heel Purmerend-Zuid en Kwadijk. Vooral in het weekend merken we een enorme toename.' },
    { name: 'Supermarkt Zuidplein', rating: 4.5, text: 'De online folder bereikt nu ook de nieuwbouwwijken. Onze Click & Collect service voor Purmerenders loopt geweldig.' },
    { name: 'Rijschool Route 7', rating: 5, text: 'Jongeren uit Purmerend kiezen voor ons vanwege de rustige oefenroutes in de polder. De Instagram campagne werkt perfect voor deze doelgroep.' },
    { name: 'Kapper Trendy Zuid', rating: 5, text: 'We trekken nu veel klanten uit Purmerend Overwhere. De online booking tool en lokale SEO maken het verschil.' },
    { name: 'Pizzeria Bella Vista', rating: 4.5, text: 'Onze bezorgservice naar Purmerend-Zuid loopt storm sinds we online zichtbaar zijn. 80% meer bestellingen in 6 maanden.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Grenzeloos groeien tussen Purmerend en de polder</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">Marketing bureau voor Zuidoostbeemster ondernemers</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Profiteer van 80.000+ Purmerenders op 5 minuten afstand</strong><br />
            Als <b>SEO specialist Zuidoostbeemster</b> positioneer ik jouw bedrijf perfect tussen de stedelijke vraag uit Purmerend en het authentieke polder aanbod. De ideale combinatie voor explosieve groei.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Bereik Purmerend-Zuid: 25.000+ inwoners op fietsafstand</li>
            <li>✓ Trek nieuwbouwbewoners: 2.000+ jonge gezinnen sinds 2020</li>
            <li>✓ <b>Google Ads Beemster-Purmerend</b> voor directe resultaten</li>
            <li>✓ Profiteer van N244: 15.000 passanten per dag</li>
            <li>✓ Lokale SEO strategie voor stad én polder publiek</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Ontdek lokale cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Specialist in Purmerend-Beemster grensgebied marketing</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Zuidoostbeemster - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Zuidoostbeemster" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Zuidoostbeemster met slimme marketing"
        subtitle="Lokale vindbaarheid en conversie, zonder poespas"
        features={[
          {
            badge: "SEO Zuidoostbeemster",
            title: "SEO Specialist Zuidoostbeemster",
            description: "Wil je echt groeien in Zuidoostbeemster en de Beemster polder? Ik zorg dat je lokaal wordt gevonden op relevante zoektermen en structureel nieuwe klanten aantrekt uit de regio.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Altijd zichtbaar",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Zuidoostbeemster",
            description: "Direct aanvragen van inwoners en bedrijven uit Zuidoostbeemster en omliggende dorpen. Je adverteert gericht en ziet direct resultaat in je agenda.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Maximaal bereik",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Zuidoostbeemster",
            description: "Professionele, snelle websites die zorgen voor meer aanvragen en omzet uit Zuidoostbeemster. Volledig geoptimaliseerd voor de lokale markt in de Beemster.",
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
        title="Zuidoostbeemster groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN ZUIDOOSTBEEMSTER */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom is <span className="bg-[#F7D8FA] px-2 rounded italic">Zuidoostbeemster</span> een goudmijn voor ondernemers?
            </h2>
            <p className="text-xl text-gray-600">
              Direct grenzend aan Purmerend, midden in UNESCO werelderfgoed - de perfecte locatie voor groei.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Explosieve nieuwbouw</h3>
              <p className="text-gray-600">
                Met 500+ nieuwe woningen sinds 2020 en nog eens 800 gepland tot 2030, groeit Zuidoostbeemster als kool. Jonge gezinnen uit Amsterdam kiezen massaal voor ruimte en groen, op steenworp afstand van de stad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Purmerend connectie</h3>
              <p className="text-gray-600">
                Ligging direct aan Purmerend-Zuid betekent toegang tot 80.000+ inwoners. Veel Purmerenders zoeken naar diensten "net buiten de stad" voor betere prijzen en persoonlijke service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">N244 verkeersader</h3>
              <p className="text-gray-600">
                15.000 voertuigen per dag passeren via de N244. Perfect voor zichtbaarheid, makkelijk bereikbaar voor klanten uit Purmerend, Edam-Volendam en heel Noord-Holland.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Zuidoostbeemster</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlener tot retailer – ik help je bedrijf online groeien in Zuidoostbeemster en de Beemster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Zuidoostbeemster */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Zuidoostbeemster</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij op de juiste plekken bovenaan. Word gevonden door mensen die nú zoeken in Zuidoostbeemster.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Zoekwoordenonderzoek voor Zuidoostbeemster</li>
                <li>✓ Content, autoriteit & linkbuilding</li>
                <li>✓ Klantbeoordelingen stimuleren</li>
                <li>✓ Lokale citaties & NAP consistentie</li>
              </ul>
            </div>
            {/* Google Ads Zuidoostbeemster */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Zuidoostbeemster ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Zuidoostbeemster</h3>
              <p className="text-gray-600 mb-6">
                Altijd zichtbaar bij de juiste doelgroep met winstgevende Google Ads campagnes voor Zuidoostbeemster en de Beemster.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale advertenties & campagnes</li>
                <li>✓ Focus op Zuidoostbeemster en omliggende dorpen</li>
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
                <li>✓ Website op maat voor Zuidoostbeemster</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Zuidoostbeemster</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Zuidoostbeemster.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom is de ligging naast Purmerend zo waardevol?</h3>
              <p className="text-gray-600">
                Zuidoostbeemster grenst direct aan Purmerend-Zuid (25.000+ inwoners) en ligt op slechts 5-10 minuten van het stadscentrum. Je combineert het beste van twee werelden: de rust en ruimte van de polder met de koopkracht van een middelgrote stad. Veel Purmerenders zoeken bewust naar diensten "net buiten de stad" voor betere parkeren, lagere prijzen en persoonlijker contact.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik de nieuwe inwoners in de nieuwbouwwijken?</h3>
              <p className="text-gray-600">
                De 2.000+ nieuwe gezinnen sinds 2020 zoeken actief online naar lokale diensten. Ze gebruiken termen als "bij Purmerend", "Beemster nieuwbouw" en "Zuidoostbeemster voorzieningen". Met gerichte SEO en social media advertenties (vooral Instagram en Facebook groepen zoals "Nieuwbouw Beemster") bereik je deze koopkrachtige doelgroep perfect.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke zoektermen gebruiken klanten uit Purmerend?</h3>
              <p className="text-gray-600">
                Purmerenders zoeken vaak naar "[dienst] bij Purmerend", "[dienst] Purmerend-Zuid" of "[dienst] buiten Purmerend". Ook "Beemster + dienst" scoort hoog vanwege de bekendheid van het UNESCO gebied. Door op beide gebieden te optimaliseren (Zuidoostbeemster én Purmerend-Zuid) maximaliseer je je bereik.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost marketing voor de Purmerend-Beemster markt?</h3>
              <p className="text-gray-600">
                Voor deze strategische locatie adviseer ik een tweesporenbeleid: lokale SEO (€750/maand) voor duurzame groei plus Google Ads (€500-1000 advertentiebudget) voor directe resultaten uit Purmerend. De hogere investering betaalt zich terug door toegang tot 80.000+ Purmerenders. ROI meestal 400-600% binnen een jaar.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe onderscheid ik me van Purmerendse concurrenten?</h3>
              <p className="text-gray-600">
                Jouw troeven: gratis parkeren, persoonlijke service, poldersfeer, lagere overhead (dus scherpere prijzen), flexibelere openingstijden. Ik help je deze voordelen online uit te dragen. Plus: veel Purmerenders rijden liever 5 minuten extra voor een authentieke, lokale ondernemer dan naar een keten in het centrum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER ZUIDOOSTBEEMSTER SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              De strategische <span className="bg-[#F7D8FA] px-2 rounded italic">poort tussen Purmerend en de polder</span>
            </h2>
            <p className="text-xl text-gray-600">
              Waar stedelijke vraag en landelijk aanbod elkaar perfect ontmoeten voor ondernemers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Demografische goudmijn voor ondernemers</h3>
              <p className="text-gray-600 mb-4">
                Zuidoostbeemster transformeert van agrarisch dorp naar moderne forensengemeenschap. De mix van oorspronkelijke Beemster families, jonge gezinnen uit Amsterdam (gemiddeld inkomen €52.000) en Purmerendse stedelingen die de polder opzoeken creëert een unieke marktkans.
              </p>
              <p className="text-gray-600 mb-6">
                De N244 brengt dagelijks 15.000 potentiële klanten langs je deur. De Purmerenderweg is dé slagader tussen stad en polder. Met de juiste online strategie tap je beide markten aan: de 2.500 lokale inwoners én de 80.000 Purmerenders op 5 minuten afstand.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 2.500 inwoners + 2.000 nieuwe gezinnen erbij tot 2030</li>
                <li>✓ Direct grenzend aan Purmerend-Zuid (25.000 inwoners)</li>
                <li>✓ 15.000 passanten dagelijks via N244</li>
                <li>✓ 30% hogere koopkracht dan landelijk gemiddelde</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Succesvolle Zuidoostbeemster ondernemers die groeien:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Sportscholen & yoga (Purmerend publiek)</div>
                <div>• Kinderopvang (nieuwbouw gezinnen)</div>
                <div>• Makelaars (woningmarkt boom)</div>
                <div>• Aannemers & klusbedrijven</div>
                <div>• Autoreparatie & APK stations</div>
                <div>• Supermarkten & versspeciaalzaken</div>
                <div>• Medische praktijken</div>
                <div>• Horecazaken met parkeren</div>
                <div>• Tuincentra & hoveniers</div>
                <div>• Rijscholen (jonge gezinnen)</div>
                <div>• Bezorgdiensten & catering</div>
                <div>• Beautysalons & wellness</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Zuidoostbeemster</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in Zuidoostbeemster – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Actief in Zuidoostbeemster & de Beemster</h3>
            <p className="text-gray-600">
              Zuidoostbeemster (hoofdlocatie) • Purmerend-Zuid (5 min) • Purmerend Centrum (10 min) • Westbeemster (4 km) • Middenbeemster (3 km) • Kwadijk • Oosthuizen • Volendam (15 min)
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}