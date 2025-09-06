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

export default function MarketingVlaardingen() {
  // Lokale Vlaardingen reviews
  const dutchReviews = [
    { name: 'Restaurant De Vlaardings Haven', rating: 5, text: 'Dankzij lokale SEO krijgen we nu gasten uit heel Vlaardingen en Rotterdam. Onze omzet is met 35% gestegen!' },
    { name: 'Tandartspraktijk Smile Vlaardingen', rating: 5, text: 'Top 1 positie voor "tandarts Vlaardingen" behaald. Patiënten uit heel de stad vinden ons nu perfect online.' },
    { name: 'Autogarage Van der Meer Vlaardingen', rating: 4.5, text: 'Google Ads campagne werkt uitstekend. Meer klanten dan ooit uit Vlaardingen en de Rotterdamse haven.' },
    { name: 'Kapsalon Trendy Cuts Vlaardingen', rating: 5, text: 'Lokale zichtbaarheid heeft onze clientèle flink uitgebreid. Online boekingen zijn verdubbeld!' },
    { name: 'Fysiotherapie Actief Vlaardingen', rating: 5, text: 'Onze praktijk staat vol dankzij lokale SEO. Patiënten uit heel Vlaardingen boeken nu online afspraken.' },
    { name: 'Installatiebedrijf TechniekPlus Vlaardingen', rating: 4.5, text: 'Meer opdrachten uit Vlaardingen en omgeving dankzij slimme lokale marketing en SEO strategie.' },
  ]
  const dutchMoreReviews = [
    { name: 'Scheepvaartbedrijf Maritime Solutions', rating: 5, text: 'B2B marketing voor de maritime sector werkt perfect. Klanten uit heel de Rotterdamse haven nemen contact op.' },
    { name: 'Schoonheidssalon Pure Beauty Vlaardingen', rating: 4.5, text: 'Online agenda staat vol dankzij lokale SEO. Klanten uit heel Vlaardingen boeken behandelingen via Google.' },
    { name: 'Accountantskantoor Finance Vlaardingen', rating: 5, text: 'Uitstekende zakelijke marketing. ZZPers en bedrijven uit Vlaardingen kiezen nu bewust voor ons kantoor.' },
    { name: 'Dierenartspraktijk Animal Care Vlaardingen', rating: 5, text: 'Google My Business optimalisatie werkt fantastisch. Huisdiereigenaren vinden ons supersnel online.' },
    { name: 'Tuincentrum Groen & Meer Vlaardingen', rating: 4.5, text: 'Seizoensgebonden campagnes leveren veel klanten op uit Vlaardingen, Schiedam en Rotterdam West.' },
    { name: 'Notariskantoor Juridisch Vlaardingen', rating: 5, text: 'Professionele SEO heeft ons kantoor veel meer zichtbaarheid gegeven in de gehele Rotterdamse regio.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Vlaardingen: Groei in de maritieme havenstad</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">75.000 inwoners + sterke haven-industrie</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Vlaardingen: waar maritieme tradities en moderne industrie elkaar ontmoeten.</strong><br />
            Van de historische havenstad tot de moderne bedrijventerreinen, van visserij-erfgoed tot logistieke hubs - Vlaardingen biedt unieke kansen. Als <b>SEO specialist Vlaardingen</b> help ik bedrijven groeien tussen de Nieuwe Waterweg, sterke industriële basis en strategische ligging bij Rotterdam.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Vlaardingen: zichtbaar in hele havenstad</li>
            <li>✓ Google Ads: bereik 75K inwoners + Rotterdam regio</li>
            <li>✓ Specialisatie in maritiem, industrie en lokale diensten</li>
            <li>✓ <b>SEO Vlaardingen</b> met bewezen groeiresultaten</li>
            <li>✓ Websites die bezoekers omzetten naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Bekijk haven cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in Vlaardingen & Rotterdamse havengebied</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Vlaardingen - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Vlaardingen" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Vlaardingen met gerichte marketing"
        subtitle="Van haven tot woonwijken: lokaal zichtbaar, regionaal sterk"
        features={[
          {
            badge: "SEO Vlaardingen",
            title: "SEO Specialist Vlaardingen",
            description: "Domineer de lokale zoekresultaten in heel Vlaardingen. Van het stadscentrum tot de havengebieden - ik zorg dat je bedrijf wordt gevonden door klanten uit de hele stad en regio.",
            visualTitle: "Haven tot stad",
            visualSubtitle: "Volledig bereik",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Vlaardingen",
            description: "Bereik 75.000 inwoners en duizenden havenbedrijven met slimme advertenties. Focus op Vlaardingen stad, haven of hele Rotterdam-regio - altijd maximale ROAS.",
            visualTitle: "75K+ bereik",
            visualSubtitle: "Haven toegang",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Marketing",
            title: "Marketing Bureau Vlaardingen",
            description: "Complete online marketing voor havenstad bedrijven. Van maritieme diensten tot lokale winkels - websites en campagnes die perfect aansluiten bij jouw doelgroep in Vlaardingen.",
            visualTitle: "Maritiem sterk",
            visualSubtitle: "Lokaal gericht",
            image: contentRanksImage
          }
        ]}
      />

      {/* LOKALE KLANTREVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Vlaardingen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN VLAARDINGEN */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Vlaardingen</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Vlaardingen combineert maritieme traditie met moderne bedrijvigheid in een strategische ligging.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maritieme hub</h3>
              <p className="text-gray-600">
                Als onderdeel van het Rotterdamse havencomplex heeft Vlaardingen een sterke maritieme economie. B2B marketing voor scheepvaart, logistiek en industrie werkt hier uitstekend.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industriële kracht</h3>
              <p className="text-gray-600">
                Met sterke industriële bedrijventerreinen en toegang tot de Rotterdamse haven biedt Vlaardingen unieke kansen voor B2B bedrijven en industriële dienstverlening.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokale loyaliteit</h3>
              <p className="text-gray-600">
                Vaardingers hebben een sterke lokale identiteit en kiezen graag voor bedrijven uit hun eigen stad. Lokale SEO helpt je deze loyaliteit optimaal te benutten.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Vlaardingen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van maritieme diensten tot lokale winkels - ik help je bedrijf groeien in de havenstad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Vlaardingen */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Vlaardingen</h3>
              <p className="text-gray-600 mb-6">
                Domineer de zoekresultaten in heel Vlaardingen. Van "bedrijf Vlaardingen" tot specifieke maritime zoektermen - wij zorgen voor topposities.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Maritieme & industriële SEO</li>
                <li>✓ Lokale citaties & brancheverenigingen</li>
                <li>✓ Review management strategie</li>
                <li>✓ Technische SEO & snelheidsoptimalisatie</li>
              </ul>
            </div>
            {/* Google Ads Vlaardingen */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Vlaardings ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Vlaardingen</h3>
              <p className="text-gray-600 mb-6">
                Bereik klanten in Vlaardingen en de hele Rotterdamse haven met gerichte advertenties. Van B2C tot maritime B2B - altijd rendabel.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale geo-targeting Vlaardingen</li>
                <li>✓ B2B campagnes havengebied</li>
                <li>✓ Maritime sector advertenties</li>
                <li>✓ Mobiele advertenties shoppers</li>
                <li>✓ Transparante ROI rapportage</li>
              </ul>
            </div>
            {/* Website & Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Professionele websites voor havenstad bedrijven. Van maritime dienstverlening tot lokale retail - websites die converteren in Vlaardingen.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Responsive design alle apparaten</li>
                <li>✓ B2B portals & catalogi</li>
                <li>✓ E-commerce voor lokale winkels</li>
                <li>✓ Meertalige websites (NL/EN)</li>
                <li>✓ Hosting & onderhoud inclusief</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Vlaardingen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Vlaardingen.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt lokale SEO ook voor maritime bedrijven in Vlaardingen?</h3>
              <p className="text-gray-600">
                Absoluut! Vlaardingen heeft een sterke maritime sector en veel B2B bedrijven zoeken online naar "scheepvaartbedrijf Vlaardingen" of "maritime diensten Vlaardingen". We combineren lokale SEO met sector-specifieke optimalisatie voor maximaal resultaat in de havenbranche.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie in Vlaardingen?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Vlaardingen zie je vaak binnen 2-4 maanden eerste verbeteringen in de zoekresultaten. Google Ads leveren direct resultaat op. Door de concurrentie in de Rotterdamse regio duurt het 6-12 maanden voor optimale SEO-resultaten.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is online marketing geschikt voor industriële bedrijven?</h3>
              <p className="text-gray-600">
                Zeker! Vlaardingen heeft veel industriële bedrijven die profiteren van B2B marketing. Denk aan LinkedIn advertenties, Google Ads voor technische zoektermen en SEO voor industriële diensten. We hebben ervaring met logistiek, chemie, metaal en maritime sector.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Vlaardingen?</h3>
              <p className="text-gray-600">
                SEO tarieven in Vlaardingen starten vanaf €650 per maand voor lokale SEO. Voor B2B bedrijven of maritime sector is dit €950-1500 per maand. De investering betaalt zich snel terug door meer klanten uit Vlaardingen en de havensector.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit Rotterdam en andere havensteden?</h3>
              <p className="text-gray-600">
                Natuurlijk! Vanuit Vlaardingen kun je gemakkelijk klanten bereiken in Rotterdam, Schiedam, Maassluis en het hele havengebied. We stemmen de SEO-strategie af op jouw gewenste servicegebied en zorgen voor regionale zichtbaarheid.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe meet je het succes van SEO voor een havenbedrijf?</h3>
              <p className="text-gray-600">
                We meten succes via B2B gerichte KPI's: rankings voor maritime zoektermen, toename gekwalificeerde leads uit de havensector, meer aanvragen via contactformulieren en telefoontjes. Je ontvangt maandelijkse rapportages met sector-specifieke inzichten.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voor welke bedrijven in Vlaardingen werkt lokale SEO?</h3>
              <p className="text-gray-600">
                Lokale SEO werkt voor alle bedrijven: maritime dienstverlening, industriële toeleveranciers, horeca, detailhandel, zorg (tandarts, fysio), automotive, bouw, zakelijke dienstverlening en alle bedrijven die klanten uit Vlaardingen en omgeving bedienen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER VLAARDINGEN SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Vlaardingen</span> & havengebied
            </h2>
            <p className="text-xl text-gray-600">
              Vlaardingen: maritime traditie en moderne industrie in perfect evenwicht.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideaal voor groeiende bedrijven</h3>
              <p className="text-gray-600 mb-4">
                Vlaardingen combineert een rijke maritieme geschiedenis met moderne industriële voorzieningen. Als onderdeel van het Rotterdamse havencomplex biedt de stad unieke toegang tot internationale markten, terwijl de lokale gemeenschap zorgt voor sterke B2C mogelijkheden.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Vlaardingen help ik bedrijven profiteren van de strategische ligging aan de Nieuwe Waterweg, sterke industriële basis, goede bereikbaarheid via A4/A20 en loyale lokale klantenkring.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 75.000 inwoners met lokale loyaliteit</li>
                <li>✓ Toegang Rotterdamse haven</li>
                <li>✓ Sterke industriële basis</li>
                <li>✓ Maritime expertise centrum</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Vlaardingen:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Maritime dienstverlening</div>
                <div>• Scheepvaartbedrijven</div>
                <div>• Industriële toeleveranciers</div>
                <div>• Logistieke bedrijven</div>
                <div>• Havengerelateerde diensten</div>
                <div>• Technische bedrijven</div>
                <div>• Horeca & restaurants</div>
                <div>• Detailhandel</div>
                <div>• Zorg & welzijn</div>
                <div>• Automotive sector</div>
                <div>• Bouw & installatie</div>
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
            Klaar voor groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Vlaardingen</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in de havenstad - altijd eerlijk advies en bewezen resultaten.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Vlaardingen - Havenstad & omgeving</h3>
            <p className="text-gray-600">
              Vlaardingen • + omliggende gemeenten: Rotterdam • Schiedam • Maassluis • Delft • Den Haag
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}