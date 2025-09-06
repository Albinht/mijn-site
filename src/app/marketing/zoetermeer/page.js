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

export default function MarketingZoetermeer() {
  // Lokale Zoetermeer reviews
  const dutchReviews = [
    { name: 'Restaurant Het Stadspark Zoetermeer', rating: 5, text: 'Dankzij lokale SEO krijgen we gasten uit heel Zoetermeer en omgeving. Reserveringen zijn met 50% gestegen!' },
    { name: 'Tandartspraktijk Smile Zoetermeer Centrum', rating: 5, text: 'Top 1 positie voor "tandarts Zoetermeer" behaald. Patiënten uit alle wijken vinden ons perfect online.' },
    { name: 'Autogarage Centrum Zoetermeer', rating: 4.5, text: 'Google Ads campagne werkt uitstekend. Meer klanten uit Zoetermeer, Lansingerland en Den Haag.' },
    { name: 'Kapsalon Beauty Zoetermeer Stadshart', rating: 5, text: 'Lokale zichtbaarheid heeft ons klantenbestand enorm uitgebreid. Online boekingen zijn verdubbeld!' },
    { name: 'Fysiotherapie Actief Zoetermeer', rating: 5, text: 'Onze praktijk zit bomvol dankzij lokale SEO. Patiënten uit heel Zoetermeer boeken online afspraken.' },
    { name: 'Installatiebedrijf TechniekPlus Zoetermeer', rating: 4.5, text: 'Meer opdrachten dan ooit uit Zoetermeer en omgeving dankzij slimme lokale marketing strategie.' },
  ]
  const dutchMoreReviews = [
    { name: 'Winkelcentrum Stadshart Business', rating: 5, text: 'B2B marketing voor ons winkelcentrum werkt perfect. Retailers uit heel Zoetermeer huren ruimtes.' },
    { name: 'Schoonheidssalon Pure Zoetermeer', rating: 4.5, text: 'Online agenda staat altijd vol dankzij lokale SEO. Klanten uit alle wijken van Zoetermeer komen.' },
    { name: 'Accountantskantoor Finance Zoetermeer', rating: 5, text: 'Uitstekende zakelijke marketing. ZZPers en bedrijven uit Zoetermeer kiezen bewust voor ons kantoor.' },
    { name: 'Dierenartspraktijk Animal Care Zoetermeer', rating: 5, text: 'Google My Business optimalisatie werkt fantastisch. Huisdiereigenaren uit alle wijken vinden ons.' },
    { name: 'Sportschool Fit Zoetermeer', rating: 4.5, text: 'Meer leden uit alle wijken dankzij lokale SEO. Van Zoetermeer-Centrum tot Buytenwegh.' },
    { name: 'Makelaarskantoor Wonen Zoetermeer', rating: 5, text: 'Veel meer woningzoekers en verkopers dankzij sterke lokale SEO voor heel Zoetermeer.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Zoetermeer: Groei in Nederlands grootste tuinstad</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">125.000 inwoners + sterke lokale economie</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Zoetermeer: waar moderne stedelijkheid en groene leefomgeving elkaar versterken.</strong><br />
            Van het bruisende Stadshart tot de groene woonwijken, van startups tot gevestigde bedrijven - Zoetermeer biedt unieke kansen. Als <b>SEO specialist Zoetermeer</b> help ik bedrijven groeien in Nederlands grootste tuinstad, strategisch gelegen tussen Den Haag, Rotterdam en Gouda.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Zoetermeer: zichtbaar voor 125K inwoners</li>
            <li>✓ Google Ads: bereik alle wijken + omliggende gemeenten</li>
            <li>✓ Specialisatie in retail, diensten en tech bedrijven</li>
            <li>✓ <b>SEO Zoetermeer</b> met bewezen groeiresultaten</li>
            <li>✓ Websites die bezoekers omzetten naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Bekijk Zoetermeer cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in heel Zoetermeer & omliggende gemeenten</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Zoetermeer - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Zoetermeer" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Zoetermeer met slimme marketing"
        subtitle="Van Stadshart tot alle wijken: lokaal zichtbaar, regionaal sterk"
        features={[
          {
            badge: "SEO Zoetermeer",
            title: "SEO Specialist Zoetermeer",
            description: "Domineer de lokale zoekresultaten in heel Zoetermeer. Van het Stadshart tot Buytenwegh en Rokkeveen - ik zorg dat je bedrijf wordt gevonden door klanten uit alle wijken van de tuinstad.",
            visualTitle: "Alle wijken",
            visualSubtitle: "125K bereik",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Zoetermeer",
            description: "Bereik 125.000 inwoners en duizenden bedrijven met gerichte advertenties. Focus op specifieke wijken, hele stad of regio - altijd maximale return on investment.",
            visualTitle: "125K+ bereik",
            visualSubtitle: "Grootste tuinstad",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Marketing",
            title: "Marketing Bureau Zoetermeer",
            description: "Complete online marketing voor Zoetermeerse bedrijven. Van retail in het Stadshart tot tech-startups - websites en campagnes die perfect aansluiten bij jouw doelgroep.",
            visualTitle: "Tuinstad sterk",
            visualSubtitle: "Modern & groen",
            image: contentRanksImage
          }
        ]}
      />

      {/* LOKALE KLANTREVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Zoetermeer groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN ZOETERMEER */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Zoetermeer</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Zoetermeer combineert de voordelen van een grote stad met sterke lokale gemeenschappen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grote lokale markt</h3>
              <p className="text-gray-600">
                Met 125.000 inwoners biedt Zoetermeer een grote lokale markt. Lokale SEO helpt je deze inwoners te bereiken voordat ze naar Den Haag of Rotterdam gaan winkelen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sterk winkelcentrum</h3>
              <p className="text-gray-600">
                Het Stadshart is een van de grootste winkelcentra van Nederland. Retailers en dienstverleners profiteren van de enorme voetgangersstromen en parkeervoorzieningen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tech & innovatie</h3>
              <p className="text-gray-600">
                Zoetermeer heeft een groeiende tech-sector en veel startups. B2B marketing en digitale dienstverlening vinden hier een technisch onderlegde doelgroep.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Zoetermeer</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van retail tot tech en van dienstverlening tot industrie - ik help je bedrijf groeien in de tuinstad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Zoetermeer */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Zoetermeer</h3>
              <p className="text-gray-600 mb-6">
                Domineer de zoekresultaten in heel Zoetermeer. Van "bedrijf Zoetermeer" tot wijk-specifieke zoektermen - topposities voor maximale zichtbaarheid.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Wijk-specifieke SEO strategie</li>
                <li>✓ Stadshart retail SEO</li>
                <li>✓ Tech & B2B optimalisatie</li>
                <li>✓ Review management Zoetermeer</li>
              </ul>
            </div>
            {/* Google Ads Zoetermeer */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Zoetermeerse ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Zoetermeer</h3>
              <p className="text-gray-600 mb-6">
                Bereik 125.000 inwoners plus omliggende gemeenten met slimme advertenties. Van shopping ads tot B2B campagnes - altijd rendabel.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Wijk-specifieke geo-targeting</li>
                <li>✓ Shopping ads Stadshart retailers</li>
                <li>✓ Tech & B2B campagnes</li>
                <li>✓ Lokale diensten advertenties</li>
                <li>✓ Transparante ROI rapportage</li>
              </ul>
            </div>
            {/* Website & Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Professionele websites voor Zoetermeerse bedrijven. Van e-commerce tot tech platforms - websites die converteren en groeien met je bedrijf.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Responsive design alle apparaten</li>
                <li>✓ E-commerce voor retailers</li>
                <li>✓ B2B portals & platforms</li>
                <li>✓ Snelle laadtijden & SEO</li>
                <li>✓ Hosting & onderhoud Zoetermeer</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Zoetermeer</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Zoetermeer.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Zoetermeer met 125.000 inwoners?</h3>
              <p className="text-gray-600">
                Juist omdat Zoetermeer groot is, zoeken inwoners lokaal! Ze zoeken "tandarts Zoetermeer", "restaurant Stadshart" of "garage Rokkeveen". Door lokale SEO sta je bovenaan bij deze zoekopdrachten en concurreer je niet met heel Nederland, maar alleen met lokale bedrijven.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt SEO ook voor winkels in het Stadshart?</h3>
              <p className="text-gray-600">
                Absoluut! Stadshart retailers profiteren enorm van lokale SEO gecombineerd met Google Shopping advertenties. Je kunt klanten aantrekken die online zoeken naar "winkel Stadshart" of specifieke producten, en hen naar je fysieke winkel leiden.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie in Zoetermeer?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Zoetermeer zie je binnen 2-4 maanden eerste verbeteringen. Door de concurrentie in een grote stad duurt het iets langer dan in kleinere plaatsen, maar de potentiële markt is ook veel groter. Google Ads leveren direct resultaat.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is online marketing geschikt voor tech-bedrijven in Zoetermeer?</h3>
              <p className="text-gray-600">
                Zeker! Zoetermeer heeft een groeiende tech-sector. B2B marketing via LinkedIn, Google Ads voor technische zoektermen en SEO voor software/IT-diensten werken hier uitstekend. We hebben ervaring met SaaS, development en tech consulting.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Zoetermeer?</h3>
              <p className="text-gray-600">
                SEO tarieven in Zoetermeer starten vanaf €750 per maand voor lokale SEO. Voor bedrijven die de hele regio willen bereiken of complexere campagnes is dit €1000-1800 per maand. De grote lokale markt maakt de investering zeer rendabel.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit omliggende gemeenten?</h3>
              <p className="text-gray-600">
                Absoluut! Vanuit Zoetermeer bereik je gemakkelijk klanten in Lansingerland, Den Haag, Delft, Gouda, Alphen aan den Rijn en andere omliggende gemeenten. We stemmen de SEO-strategie af op jouw gewenste servicegebied.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voor welke bedrijven werkt lokale SEO het beste in Zoetermeer?</h3>
              <p className="text-gray-600">
                Lokale SEO werkt voor alle bedrijven: retailers, horeca, zorgverleners, automotive, schoonheidszorg, fitness, tech-bedrijven, zakelijke dienstverlening en alle bedrijven die de 125.000 Zoetermeerders willen bereiken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER ZOETERMEER SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Zoetermeer</span> & regio
            </h2>
            <p className="text-xl text-gray-600">
              Zoetermeer: Nederlands grootste tuinstad waar business bloeit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect voor ambitieuze ondernemers</h3>
              <p className="text-gray-600 mb-4">
                Zoetermeer combineert de voordelen van een grote stad (125.000 inwoners) met de charme van een tuinstad. Het Stadshart is een van Nederlands grootste winkelcentra, er zijn diverse bedrijventerreinen en een groeiende tech-sector. De stad ligt strategisch tussen Den Haag, Rotterdam en Gouda.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Zoetermeer help ik bedrijven profiteren van de grote lokale markt, sterke koopkracht, uitstekende bereikbaarheid (RandstadRail, A12) en diverse economische sectoren voor maximale groei en bereik.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 125.000 inwoners met sterke koopkracht</li>
                <li>✓ Grootste winkelcentrum Nederland</li>
                <li>✓ Groeiende tech & business sector</li>
                <li>✓ Strategische Randstad-ligging</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Zoetermeer:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Retail & winkelcentra</div>
                <div>• Tech & software bedrijven</div>
                <div>• Horeca & restaurants</div>
                <div>• Zorg & welzijn</div>
                <div>• Automotive sector</div>
                <div>• Fitness & wellness</div>
                <div>• Schoonheidszorg</div>
                <div>• Zakelijke dienstverlening</div>
                <div>• Bouw & installatie</div>
                <div>• Financiële diensten</div>
                <div>• Onderwijs & training</div>
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
            Klaar voor groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Zoetermeer</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in de grootste tuinstad - altijd eerlijk advies en bewezen resultaten.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Zoetermeer - Tuinstad & omgeving</h3>
            <p className="text-gray-600">
              Zoetermeer • + omliggende gemeenten: Den Haag • Lansingerland • Delft • Gouda • Alphen aan den Rijn
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}