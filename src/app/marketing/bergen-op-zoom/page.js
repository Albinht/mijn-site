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

export default function MarketingBergenOpZoom() {
  // Lokale Bergen op Zoom reviews
  const dutchReviews = [
    { name: 'Restaurant De Brabantse Kust Bergen op Zoom', rating: 5, text: 'Dankzij lokale SEO krijgen we gasten uit heel West-Brabant. Onze reserveringen zijn met 45% gestegen!' },
    { name: 'Tandartspraktijk Smile Bergen op Zoom', rating: 5, text: 'Top positie voor "tandarts Bergen op Zoom" behaald. Patiënten uit de hele regio vinden ons perfect.' },
    { name: 'Autogarage Centrum Bergen op Zoom', rating: 4.5, text: 'Google Ads campagne werkt uitstekend. Meer klanten dan ooit uit Bergen op Zoom en Roosendaal.' },
    { name: 'Kapsalon Trendy Bergen op Zoom', rating: 5, text: 'Lokale zichtbaarheid heeft ons klantenbestand enorm uitgebreid. Online boekingen zijn verdubbeld!' },
    { name: 'Fysiotherapie Actief Bergen op Zoom', rating: 5, text: 'Onze praktijk zit vol dankzij lokale SEO. Patiënten uit heel Bergen op Zoom boeken online.' },
    { name: 'Installatiebedrijf West-Brabant', rating: 4.5, text: 'Meer opdrachten uit Bergen op Zoom en omgeving dankzij slimme lokale marketing strategie.' },
  ]
  const dutchMoreReviews = [
    { name: 'Industrieel Bedrijf Chemie Bergen op Zoom', rating: 5, text: 'B2B marketing voor de chemische sector werkt perfect. Klanten uit hele Schelde-delta nemen contact op.' },
    { name: 'Schoonheidssalon Beauty Bergen op Zoom', rating: 4.5, text: 'Online agenda staat vol dankzij lokale SEO. Klanten uit heel Bergen op Zoom en Roosendaal komen.' },
    { name: 'Accountantskantoor Finance Bergen op Zoom', rating: 5, text: 'Uitstekende zakelijke marketing. ZZPers en bedrijven uit West-Brabant kiezen nu voor ons.' },
    { name: 'Dierenartspraktijk Animal Care', rating: 5, text: 'Google My Business optimalisatie werkt fantastisch. Huisdiereigenaren vinden ons supersnel.' },
    { name: 'Tuincentrum Groen Bergen op Zoom', rating: 4.5, text: 'Seizoensgebonden campagnes leveren klanten uit Bergen op Zoom, Roosendaal en Steenbergen.' },
    { name: 'Advocatenkantoor Juridisch Bergen op Zoom', rating: 5, text: 'Professionele SEO heeft ons veel meer zichtbaarheid gegeven in heel West-Brabant.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Bergen op Zoom: Groei in West-Brabant</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">67.000 inwoners + strategische grensligging</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Bergen op Zoom: waar Brabantse ondernemerszin en internationale connecties samenkomen.</strong><br />
            Van de historische Markiezenhof tot moderne bedrijventerreinen, van de chemische industrie tot toeristische attracties - Bergen op Zoom biedt unieke kansen. Als <b>SEO specialist Bergen op Zoom</b> help ik bedrijven groeien in deze strategisch gelegen grensgemeente van West-Brabant.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Bergen op Zoom: zichtbaar in heel West-Brabant</li>
            <li>✓ Google Ads: bereik 67K inwoners + grensregio België</li>
            <li>✓ Specialisatie in industrie, toerisme en lokale diensten</li>
            <li>✓ <b>SEO Bergen op Zoom</b> met bewezen groeiresultaten</li>
            <li>✓ Websites die bezoekers omzetten naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Bekijk Brabantse cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in Bergen op Zoom & West-Brabant</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Bergen op Zoom - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Bergen op Zoom" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Bergen op Zoom met slimme marketing"
        subtitle="Van centrum tot industriegebied: lokaal zichtbaar, regionaal sterk"
        features={[
          {
            badge: "SEO Bergen op Zoom",
            title: "SEO Specialist Bergen op Zoom",
            description: "Domineer de lokale zoekresultaten in heel Bergen op Zoom en West-Brabant. Van het historische centrum tot de moderne industrieterreinen - ik zorg dat je bedrijf wordt gevonden door de juiste klanten.",
            visualTitle: "West-Brabant",
            visualSubtitle: "Volledig bereik",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Bergen op Zoom",
            description: "Bereik 67.000 inwoners plus de grensregio met België. Focus op Bergen op Zoom stad, industriegebieden of hele West-Brabant - altijd maximale return on investment.",
            visualTitle: "67K+ bereik",
            visualSubtitle: "Grensregio",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Marketing",
            title: "Marketing Bureau Bergen op Zoom",
            description: "Complete online marketing voor West-Brabantse bedrijven. Van industrie en chemie tot toerisme en retail - websites en campagnes die perfect aansluiten bij jouw doelgroep.",
            visualTitle: "Brabants sterk",
            visualSubtitle: "Internationaal",
            image: contentRanksImage
          }
        ]}
      />

      {/* LOKALE KLANTREVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Bergen op Zoom groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Bergen op Zoom</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Bergen op Zoom combineert industrielle kracht met toeristische aantrekkingskracht in strategische grensligging.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industriële hub</h3>
              <p className="text-gray-600">
                Als belangrijk industriecentrum met chemische bedrijven en havenfaciliteiten biedt Bergen op Zoom uitstekende B2B kansen voor technische en industriële dienstverlening.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grensvoordeel</h3>
              <p className="text-gray-600">
                Door de ligging aan de Belgische grens kun je met lokale SEO ook Belgische klanten bereiken. Dit verdubbelt je potentiële markt aanzienlijk.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Toeristische aantrekkingskracht</h3>
              <p className="text-gray-600">
                Met historische bezienswaardigheden zoals het Markiezenhof trekt Bergen op Zoom veel toeristen. Perfect voor horeca, retail en toeristische diensten.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Bergen op Zoom</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van industrie tot toerisme - ik help je bedrijf groeien in de strategische grensgemeente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Bergen op Zoom */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Bergen op Zoom</h3>
              <p className="text-gray-600 mb-6">
                Domineer de zoekresultaten in heel Bergen op Zoom en West-Brabant. Van "bedrijf Bergen op Zoom" tot "industrie West-Brabant" - topposities gegarandeerd.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Industriële & B2B SEO</li>
                <li>✓ Toeristische sector optimalisatie</li>
                <li>✓ Grensoverschrijdende SEO strategie</li>
                <li>✓ Lokale citaties & partnerships</li>
              </ul>
            </div>
            {/* Google Ads Bergen op Zoom */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij West-Brabant ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Bergen op Zoom</h3>
              <p className="text-gray-600 mb-6">
                Bereik klanten in Bergen op Zoom, West-Brabant en België met slimme advertenties. Van B2C tot industriële B2B - altijd rendabel adverteren.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale geo-targeting Bergen op Zoom</li>
                <li>✓ Grensoverschrijdende campagnes</li>
                <li>✓ B2B industriële advertenties</li>
                <li>✓ Toeristische seizoenscampagnes</li>
                <li>✓ Meertalige advertenties (NL/FR)</li>
              </ul>
            </div>
            {/* Website & Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Professionele websites voor West-Brabantse bedrijven. Van industriële portals tot toeristische websites - altijd gericht op conversie en groei.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Responsive design alle apparaten</li>
                <li>✓ B2B portals & productcatalogi</li>
                <li>✓ E-commerce voor lokale retailers</li>
                <li>✓ Meertalige websites (NL/EN/FR)</li>
                <li>✓ Hosting & onderhoud West-Brabant</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Bergen op Zoom</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Bergen op Zoom.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik met SEO ook Belgische klanten bereiken vanuit Bergen op Zoom?</h3>
              <p className="text-gray-600">
                Zeker! Door de strategische grensligging kun je met slimme SEO en Google Ads ook klanten in België bereiken. We optimaliseren voor Nederlandse en Belgische zoektermen en gebruiken geo-targeting voor grensoverschrijdende campagnes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt online marketing voor industriële bedrijven in Bergen op Zoom?</h3>
              <p className="text-gray-600">
                Absoluut! Bergen op Zoom heeft veel industriële bedrijven, vooral in de chemische sector. B2B marketing werkt uitstekend: LinkedIn advertenties, Google Ads voor technische zoektermen en SEO voor industriële dienstverlening zijn zeer effectief.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Bergen op Zoom zie je binnen 2-3 maanden eerste verbeteringen. Google Ads leveren direct resultaat. Voor optimale SEO-resultaten duurt het 6-12 maanden, afhankelijk van je sector en concurrentie in West-Brabant.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is lokale SEO geschikt voor toeristische bedrijven?</h3>
              <p className="text-gray-600">
                Zeker! Bergen op Zoom trekt veel toeristen door historische attracties zoals het Markiezenhof. Hotels, restaurants, attracties en gidsdiensten profiteren enorm van lokale SEO gecombineerd met toeristische zoektermen en seizoenscampagnes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Bergen op Zoom?</h3>
              <p className="text-gray-600">
                SEO tarieven starten vanaf €650 per maand voor lokale SEO. Voor B2B bedrijven of grensoverschrijdende marketing is dit €900-1500 per maand. De investering betaalt zich snel terug door meer klanten uit West-Brabant en België.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke andere West-Brabantse gemeenten kunnen we bereiken?</h3>
              <p className="text-gray-600">
                Vanuit Bergen op Zoom bereiken we gemakkelijk Roosendaal, Etten-Leur, Steenbergen, Halderberge, Woensdrecht en delen van Zeeland. We stemmen de SEO-strategie af op jouw gewenste servicegebied in West-Brabant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER BERGEN OP ZOOM SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Bergen op Zoom</span> & West-Brabant
            </h2>
            <p className="text-xl text-gray-600">
              Bergen op Zoom: waar industriële kracht en historische charme elkaar versterken.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect voor ambitieuze ondernemers</h3>
              <p className="text-gray-600 mb-4">
                Bergen op Zoom combineert een rijke geschiedenis (Markiezenhof, vesting) met moderne industrie en strategische grensligging. De stad biedt toegang tot zowel Nederlandse als Belgische markten, een sterke chemische industrie en groeiend toerisme.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Bergen op Zoom help ik bedrijven profiteren van de unieke positie tussen Nederland en België, sterke industriële basis, toeristische aantrekkingskracht en de groeiende economie van West-Brabant.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 67.000 inwoners + grensvoordeel</li>
                <li>✓ Sterke industriële sector</li>
                <li>✓ Toeristische aantrekkingskracht</li>
                <li>✓ Strategische ligging A4/A58</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Bergen op Zoom:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Chemische industrie</div>
                <div>• Technische dienstverlening</div>
                <div>• Logistieke bedrijven</div>
                <div>• Hotels & toerisme</div>
                <div>• Horeca & restaurants</div>
                <div>• Detailhandel</div>
                <div>• Zorg & welzijn</div>
                <div>• Bouw & installatie</div>
                <div>• Automotive sector</div>
                <div>• Zakelijke dienstverlening</div>
                <div>• Maritieme diensten</div>
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
            Klaar voor groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Bergen op Zoom</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in West-Brabant - altijd eerlijk advies en bewezen resultaten.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Bergen op Zoom - West-Brabant & omgeving</h3>
            <p className="text-gray-600">
              Bergen op Zoom • + omliggende gemeenten: Roosendaal • Etten-Leur • Steenbergen • Halderberge • Woensdrecht
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}