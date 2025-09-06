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

export default function MarketingLansingerland() {
  // Lokale Lansingerland reviews
  const dutchReviews = [
    { name: 'Restaurant De Lansingh Zoetermeer', rating: 5, text: 'Dankzij lokale SEO krijgen we gasten uit heel Lansingerland. Reserveringen uit Bleiswijk en Bergschenhoek!' },
    { name: 'Tandartspraktijk Smile Bleiswijk', rating: 5, text: 'Top positie voor "tandarts Bleiswijk" en "tandarts Lansingerland". Patiënten uit alle kernen vinden ons.' },
    { name: 'Autogarage Motors Bergschenhoek', rating: 4.5, text: 'Google Ads campagne werkt perfect. Klanten uit Zoetermeer, Bleiswijk en heel Lansingerland.' },
    { name: 'Kapsalon Beauty Zoetermeer', rating: 5, text: 'Lokale zichtbaarheid heeft ons klantenbestand enorm uitgebreid. Online boekingen uit alle kernen!' },
    { name: 'Fysiotherapie Actief Bleiswijk', rating: 5, text: 'Onze praktijk zit vol dankzij lokale SEO. Patiënten uit heel Lansingerland boeken online.' },
    { name: 'Installatiebedrijf Service Lansingerland', rating: 4.5, text: 'Meer opdrachten dan ooit uit alle kernen van Lansingerland dankzij slimme marketing.' },
  ]
  const dutchMoreReviews = [
    { name: 'Tuincentrum Groen Bergschenhoek', rating: 5, text: 'Seizoensgebonden marketing werkt perfect. Klanten uit Den Haag en Rotterdam komen naar ons.' },
    { name: 'Schoonheidssalon Pure Zoetermeer', rating: 4.5, text: 'Online agenda staat vol dankzij lokale SEO. Klanten uit Bleiswijk, Bergschenhoek en omgeving.' },
    { name: 'Accountantskantoor Finance Lansingerland', rating: 5, text: 'Uitstekende zakelijke marketing. ZZPers en bedrijven uit alle kernen kiezen voor ons.' },
    { name: 'Dierenartspraktijk Animal Care Bleiswijk', rating: 5, text: 'Google My Business werkt fantastisch. Huisdiereigenaren uit hele gemeente vinden ons snel.' },
    { name: 'Sportschool Fit Lansingerland', rating: 4.5, text: 'Meer leden uit Zoetermeer, Bergschenhoek en Bleiswijk dankzij lokale SEO en advertenties.' },
    { name: 'Makelaarskantoor Wonen Lansingerland', rating: 5, text: 'Veel meer woningzoekers dankzij sterke lokale SEO voor alle kernen van Lansingerland.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Lansingerland: Groei in de groene randgemeente</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">63.000 inwoners + strategische Randstad ligging</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Lansingerland: waar moderne woonkwaliteit en ondernemerskansen samenkomen.</strong><br />
            Van het bruisende deel bij Zoetermeer tot het groene Bleiswijk en Bergschenhoek - Lansingerland biedt unieke kansen. Als <b>SEO specialist Lansingerland</b> help ik bedrijven groeien tussen Den Haag en Rotterdam, met sterke lokale gemeenschappen en strategische bereikbaarheid.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO alle kernen: Zoetermeer-deel, Bleiswijk, Bergschenhoek</li>
            <li>✓ Google Ads: bereik 63K inwoners + Randstad</li>
            <li>✓ Specialisatie in lokale diensten en gezinsbedrijven</li>
            <li>✓ <b>SEO Lansingerland</b> met bewezen groeiresultaten</li>
            <li>✓ Websites die bezoekers omzetten naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Bekijk Randstad cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in heel Lansingerland & omliggende gemeenten</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Lansingerland - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Lansingerland" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Lansingerland met gerichte marketing"
        subtitle="Van Zoetermeer-deel tot Bleiswijk: alle kernen, maximale groei"
        features={[
          {
            badge: "SEO Lansingerland",
            title: "SEO Specialist Lansingerland",
            description: "Domineer de lokale zoekresultaten in alle kernen van Lansingerland. Van Zoetermeer-deel tot Bergschenhoek - ik zorg dat je bedrijf wordt gevonden door klanten uit de hele gemeente.",
            visualTitle: "Alle kernen",
            visualSubtitle: "63K bereik",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Lansingerland",
            description: "Bereik 63.000 inwoners en pendelfuncties naar Den Haag/Rotterdam met slimme advertenties. Focus op gezinnen, professionals en lokale ondernemers - altijd rendabel.",
            visualTitle: "63K+ pendel",
            visualSubtitle: "Randstad hub",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Marketing",
            title: "Marketing Bureau Lansingerland",
            description: "Complete online marketing voor Lansingerland bedrijven. Van gezinsgerichte diensten tot B2B - websites en campagnes die perfect aansluiten bij jouw doelgroep.",
            visualTitle: "Gezins gericht",
            visualSubtitle: "Lokaal sterk",
            image: contentRanksImage
          }
        ]}
      />

      {/* LOKALE KLANTREVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Lansingerland groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Lansingerland</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Lansingerland combineert woonkwaliteit met zakelijke kansen in het hart van de Randstad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gezinsgemeente</h3>
              <p className="text-gray-600">
                Lansingerland staat bekend om hoge woonkwaliteit en vele jonge gezinnen. Bedrijven die zich richten op gezinnen en kinderen vinden hier een ideale, welvarende doelgroep.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategische ligging</h3>
              <p className="text-gray-600">
                Tussen Den Haag en Rotterdam gelegen met uitstekende bereikbaarheid (A12/A13). Dit trekt klanten uit de hele regio en creëert kansen voor regionale dienstverlening.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Groeiende gemeente</h3>
              <p className="text-gray-600">
                Lansingerland groeit snel met nieuwe woonwijken en bedrijventerreinen. Lokale SEO helpt je vroeg inspelen op deze groei en nieuwe klanten te bereiken.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Lansingerland</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlening tot gezinsbedrijven - ik help je bedrijf groeien in alle kernen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Lansingerland */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Lansingerland</h3>
              <p className="text-gray-600 mb-6">
                Domineer de zoekresultaten in alle kernen van Lansingerland. Van "bedrijf Bleiswijk" tot "dienst Bergschenhoek" - topposities in alle kernen.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Multi-kern SEO strategie</li>
                <li>✓ Google Bedrijfsprofiel alle locaties</li>
                <li>✓ Gezinsgerichte SEO optimalisatie</li>
                <li>✓ Lokale citaties & partnerships</li>
                <li>✓ Review management alle kernen</li>
              </ul>
            </div>
            {/* Google Ads Lansingerland */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Lansingerland ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Lansingerland</h3>
              <p className="text-gray-600 mb-6">
                Bereik klanten in alle kernen plus pendelfunctie naar Den Haag/Rotterdam met slimme advertenties. Gezinsgericht en lokaal effectief.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Multi-kern geo-targeting</li>
                <li>✓ Gezinsgerichte campagnes</li>
                <li>✓ Lokale diensten advertenties</li>
                <li>✓ Shopping ads gezinswinkels</li>
                <li>✓ Transparante ROI alle kernen</li>
              </ul>
            </div>
            {/* Website & Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Professionele websites voor Lansingerland bedrijven. Van gezinsgerichte diensten tot lokale winkels - altijd gericht op conversie en groei.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Responsive design alle apparaten</li>
                <li>✓ Online afsprakensystemen</li>
                <li>✓ E-commerce voor lokale winkels</li>
                <li>✓ Multi-locatie website integraties</li>
                <li>✓ Gezinsgerichte UX design</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Lansingerland</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Lansingerland.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe werkt SEO voor alle kernen van Lansingerland?</h3>
              <p className="text-gray-600">
                We optimaliseren voor alle kernen tegelijk: Bleiswijk, Bergschenhoek en het deel van Zoetermeer. We creëren content en landingspaginas voor elke kern, zodat je bedrijf wordt gevonden bij "dienst Bleiswijk", "bedrijf Bergschenhoek" én "specialist Lansingerland" zoekopdrachten.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt lokale marketing voor gezinsgerichte bedrijven?</h3>
              <p className="text-gray-600">
                Absoluut! Lansingerland heeft veel jonge gezinnen met goede koopkracht. Kinderopvang, sportclubs, gezinsrestaurants, speelgoedbedrijven en andere gezinsgerichte diensten profiteren enorm van gerichte lokale SEO en advertenties.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Lansingerland zie je binnen 1-3 maanden eerste verbeteringen per kern. Google Ads leveren direct resultaat op. Voor optimale multi-kern resultaten duurt het 6-9 maanden om in alle kernen dominant aanwezig te zijn.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook klanten uit Den Haag en Rotterdam bereiken?</h3>
              <p className="text-gray-600">
                Zeker! Door de strategische ligging tussen beide steden kun je met slimme SEO en geo-targeting ook klanten uit Den Haag-Zuid, Zoetermeer, Delft en Rotterdam-Noord bereiken. Perfect voor regionale dienstverlening.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor alle kernen van Lansingerland?</h3>
              <p className="text-gray-600">
                Multi-kern SEO voor Lansingerland start vanaf €700 per maand. Voor bedrijven die ook de omliggende Randstad-gemeenten willen bereiken is dit €850-1300 per maand. Je bereikt hiermee alle gezinnen in drie kernen - zeer rendabel.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voor welke bedrijven werkt lokale SEO het beste?</h3>
              <p className="text-gray-600">
                Lokale SEO werkt uitstekend voor gezinsgerichte diensten (kinderopvang, sportclubs), zorgverleners, horeca, lokale winkels, automotive, schoonheidszorg, bouw & installatie en alle bedrijven die gezinnen en professionals in Lansingerland bedienen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER LANSINGERLAND SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Lansingerland</span> & omgeving
            </h2>
            <p className="text-xl text-gray-600">
              Lansingerland: waar moderne woonkwaliteit en zakelijke kansen elkaar versterken.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect voor groeiende bedrijven</h3>
              <p className="text-gray-600 mb-4">
                Lansingerland combineert drie sterke kernen (Bleiswijk, Bergschenhoek en deel Zoetermeer) met uitstekende bereikbaarheid en hoge woonkwaliteit. De gemeente groeit snel met jonge gezinnen en heeft strategische ligging tussen Den Haag en Rotterdam.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Lansingerland help ik bedrijven profiteren van alle kernen, welvarende gezinsdoelgroep, strategische Randstad-ligging en uitstekende bereikbaarheid via A12/A13 voor maximale groei en bereik.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 63.000 inwoners in snelle groei</li>
                <li>✓ Welvarende gezinsgemeente</li>
                <li>✓ Strategische Randstad-ligging</li>
                <li>✓ Uitstekende bereikbaarheid</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Lansingerland:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Kinderopvang & onderwijs</div>
                <div>• Zorg & welzijn</div>
                <div>• Horeca & restaurants</div>
                <div>• Detailhandel & winkels</div>
                <div>• Sportscholen & wellness</div>
                <div>• Automotive sector</div>
                <div>• Schoonheidszorg</div>
                <div>• Bouw & installatie</div>
                <div>• Zakelijke dienstverlening</div>
                <div>• Makelaarskantoren</div>
                <div>• Tuincentra & hobby</div>
                <div>• En veel meer...</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-section" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Klaar voor groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Lansingerland</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in alle kernen van Lansingerland - altijd eerlijk advies.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Lansingerland - Alle kernen & omgeving</h3>
            <p className="text-gray-600">
              Bleiswijk • Bergschenhoek • Zoetermeer-deel • + omliggende gemeenten: Den Haag • Zoetermeer • Delft • Rotterdam
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}