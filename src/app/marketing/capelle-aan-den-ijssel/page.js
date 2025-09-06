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

export default function MarketingCapelleAanDenIJssel() {
  // Lokale Capelle aan den IJssel reviews
  const dutchReviews = [
    { name: 'Restaurant Aan de IJssel Capelle', rating: 5, text: 'Dankzij lokale SEO krijgen we gasten uit heel Capelle en Rotterdam-Oost. Reserveringen stijgen continu!' },
    { name: 'Tandartspraktijk Smile Capelle', rating: 5, text: 'Top 1 positie voor "tandarts Capelle aan den IJssel". Patiënten uit de hele gemeente vinden ons perfect.' },
    { name: 'Autogarage IJssel Motors', rating: 4.5, text: 'Google Ads campagne werkt uitstekend. Meer klanten uit Capelle en Nieuwerkerk aan den IJssel.' },
    { name: 'Kapsalon Beauty Capelle', rating: 5, text: 'Lokale zichtbaarheid heeft ons klantenbestand enorm uitgebreid. Online boekingen zijn verdrievoudigd!' },
    { name: 'Fysiotherapie Actief Capelle', rating: 5, text: 'Onze praktijk zit bomvol dankzij lokale SEO. Patiënten boeken nu online vanuit heel Capelle.' },
    { name: 'Installatiebedrijf TechniekPlus Capelle', rating: 4.5, text: 'Meer opdrachten dan ooit uit Capelle en omliggende gemeenten dankzij slimme marketing.' },
  ]
  const dutchMoreReviews = [
    { name: 'Kantoorgebouw Business Center Capelle', rating: 5, text: 'B2B marketing werkt perfect voor ons kantoorcomplex. Bedrijven uit heel Capelle huren ruimtes.' },
    { name: 'Schoonheidssalon Pure Capelle', rating: 4.5, text: 'Online agenda staat altijd vol dankzij lokale SEO. Klanten komen vanuit heel Capelle en Rotterdam.' },
    { name: 'Accountantskantoor Finance Capelle', rating: 5, text: 'Uitstekende zakelijke marketing. ZZPers en bedrijven uit Capelle kiezen bewust voor ons kantoor.' },
    { name: 'Dierenartspraktijk Animal Care Capelle', rating: 5, text: 'Google My Business optimalisatie werkt fantastisch. Huisdiereigenaren vinden ons supersnel online.' },
    { name: 'Tuincentrum Groen Capelle', rating: 4.5, text: 'Seizoensgebonden campagnes brengen klanten uit Capelle, Krimpen en Nieuwerkerk naar ons toe.' },
    { name: 'Makelaarskantoor Wonen Capelle', rating: 5, text: 'Veel meer woningzoekers en verkopers dankzij sterke lokale SEO en Google Ads campagnes.' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Capelle aan den IJssel: Groei in de groene randgemeente</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">67.000 inwoners + sterke pendel Rotterdam</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Capelle aan den IJssel: waar wonen, werken en ondernemen in balans zijn.</strong><br />
            Van de groene woonwijken tot moderne bedrijventerreinen, van gezinnen tot professionals - Capelle biedt unieke kansen. Als <b>SEO specialist Capelle aan den IJssel</b> help ik bedrijven groeien in deze strategisch gelegen gemeente tussen Rotterdam, Gouda en Nieuwerkerk aan den IJssel.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Capelle: zichtbaar voor 67K inwoners</li>
            <li>✓ Google Ads: bereik gezinnen + professionals</li>
            <li>✓ Specialisatie in lokale diensten en B2B</li>
            <li>✓ <b>SEO Capelle aan den IJssel</b> met bewezen groei</li>
            <li>✓ Websites die bezoekers omzetten naar klanten</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Bekijk Rotterdam cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in Capelle aan den IJssel & omliggende gemeenten</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Capelle aan den IJssel - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Capelle aan den IJssel" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Capelle aan den IJssel met slimme marketing"
        subtitle="Van woonwijken tot bedrijventerreinen: lokaal zichtbaar, regionaal sterk"
        features={[
          {
            badge: "SEO Capelle",
            title: "SEO Specialist Capelle aan den IJssel",
            description: "Domineer de lokale zoekresultaten in heel Capelle aan den IJssel. Van Schollevaar tot Capelle-West - ik zorg dat je bedrijf wordt gevonden door klanten uit de hele gemeente.",
            visualTitle: "Hele gemeente",
            visualSubtitle: "67K bereik",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Capelle aan den IJssel",
            description: "Bereik 67.000 inwoners en duizenden bedrijven met gerichte advertenties. Focus op gezinnen, professionals of bedrijven - altijd maximale return on investment.",
            visualTitle: "67K+ bereik",
            visualSubtitle: "Rotterdam toegang",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Marketing",
            title: "Marketing Bureau Capelle aan den IJssel",
            description: "Complete online marketing voor Capelse bedrijven. Van lokale dienstverleners tot B2B kantoren - websites en campagnes die perfect aansluiten bij jouw doelgroep.",
            visualTitle: "Lokaal sterk",
            visualSubtitle: "Professioneel",
            image: contentRanksImage
          }
        ]}
      />

      {/* LOKALE KLANTREVIEWS */}
      <ReviewSlider
        customReviews={dutchReviews}
        customMoreReviews={dutchMoreReviews}
        title="Capelle aan den IJssel groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Capelle aan den IJssel</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Capelle aan den IJssel combineert woonkwaliteit met zakelijke mogelijkheden in de Rotterdamse regio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gezinsgemeente</h3>
              <p className="text-gray-600">
                Capelle staat bekend als gezinsgemeente met hoge koopkracht. Bedrijven die zich richten op gezinnen, kinderen en huishoudens vinden hier een ideale doelgroep.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pendel voordeel</h3>
              <p className="text-gray-600">
                Veel inwoners pendelen naar Rotterdam voor werk. Dit creëert vraag naar lokale diensten in Capelle: van garage-onderhoud tot avond- en weekenddiensten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">B2B kansen</h3>
              <p className="text-gray-600">
                Met moderne bedrijventerreinen en kantoorlocaties biedt Capelle ook uitstekende B2B mogelijkheden voor zakelijke dienstverlening en consultancy.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Capelle aan den IJssel</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlening tot zakelijke services - ik help je bedrijf groeien in Capelle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Capelle */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Capelle aan den IJssel</h3>
              <p className="text-gray-600 mb-6">
                Domineer de zoekresultaten in heel Capelle aan den IJssel. Van "bedrijf Capelle" tot "dienst Capelle aan den IJssel" - topposities gegarandeerd.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie</li>
                <li>✓ Wijk-specifieke SEO strategie</li>
                <li>✓ Lokale citaties & partnerships</li>
                <li>✓ Review management Capelle</li>
                <li>✓ Technische SEO & snelheid</li>
              </ul>
            </div>
            {/* Google Ads Capelle */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij Capelse ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Capelle aan den IJssel</h3>
              <p className="text-gray-600 mb-6">
                Bereik klanten in Capelle en omgeving met slimme advertenties. Van gezinnen tot professionals - altijd rendabel adverteren.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Lokale geo-targeting Capelle</li>
                <li>✓ Gezinsgerichte campagnes</li>
                <li>✓ B2B professional advertenties</li>
                <li>✓ Shopping ads lokale winkels</li>
                <li>✓ Transparante ROI rapportage</li>
              </ul>
            </div>
            {/* Website & Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Professionele websites voor Capelse bedrijven. Van gezinsgerichte diensten tot B2B kantoren - altijd gericht op conversie.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Responsive design alle apparaten</li>
                <li>✓ Online afsprakensystemen</li>
                <li>✓ E-commerce voor lokale retailers</li>
                <li>✓ B2B portals & intranets</li>
                <li>✓ Hosting & onderhoud Capelle</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Capelle aan den IJssel</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in Capelle aan den IJssel.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Capelle aan den IJssel?</h3>
              <p className="text-gray-600">
                Capelle aan den IJssel heeft 67.000 inwoners die bewust kiezen voor lokale diensten. Door te optimaliseren voor "bedrijf Capelle aan den IJssel" of "dienst Capelle" trek je specifiek klanten aan die in je gemeente zoeken. Dit levert hogere conversies op dan algemene SEO.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Capelle zie je vaak binnen 1-3 maanden eerste verbeteringen in Google rankings. Google Ads leveren direct resultaat op. Voor optimale SEO-resultaten duurt het 6-12 maanden, afhankelijk van je sector en concurrentie.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Werkt online marketing voor gezinsgerichte bedrijven?</h3>
              <p className="text-gray-600">
                Absoluut! Capelle staat bekend als gezinsgemeente met hoge koopkracht. Bedrijven die zich richten op gezinnen, kinderen en huishoudens (kinderopvang, naschoolse activiteiten, gezinsrestaurants) profiteren enorm van lokale SEO en gerichte advertenties.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik ook klanten uit Rotterdam bereiken?</h3>
              <p className="text-gray-600">
                Zeker! Door de nabijheid van Rotterdam kun je met slimme SEO ook klanten uit Rotterdam-Oost, Ridderkerk en andere omliggende gemeenten bereiken. We stemmen de strategie af op jouw gewenste servicegebied in de regio.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Capelle?</h3>
              <p className="text-gray-600">
                SEO tarieven in Capelle starten vanaf €650 per maand voor lokale SEO. Voor bedrijven die ook Rotterdam-regio willen bereiken is dit €800-1200 per maand. De investering betaalt zich snel terug door meer klanten uit de welvarende gemeente.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voor welke bedrijven werkt lokale SEO het beste in Capelle?</h3>
              <p className="text-gray-600">
                Lokale SEO werkt uitstekend voor gezinsgerichte diensten (kinderopvang, sportclubs, restaurants), zorgverleners (huisartsen, tandartsen, fysio), lokale winkels, horeca, automotive, schoonheidszorg en alle bedrijven die gezinnen in Capelle bedienen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER CAPELLE SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Capelle aan den IJssel</span> & omgeving
            </h2>
            <p className="text-xl text-gray-600">
              Capelle aan den IJssel: waar woonkwaliteit en zakelijke kansen elkaar versterken.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect voor lokale ondernemers</h3>
              <p className="text-gray-600 mb-4">
                Capelle aan den IJssel staat bekend om zijn hoge woonkwaliteit, goede bereikbaarheid en welvarende gezinnen. De gemeente combineert groene woonwijken met moderne bedrijventerreinen, waardoor zowel B2C als B2B bedrijven hier uitstekende kansen hebben.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Capelle aan den IJssel help ik bedrijven profiteren van de loyale lokale klantenkring, nabijheid van Rotterdam, hoogopgeleide bevolking en sterke koopkracht in de gemeente.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 67.000 inwoners met hoge koopkracht</li>
                <li>✓ Sterke gezinsgemeente</li>
                <li>✓ Nabijheid Rotterdam (15 min)</li>
                <li>✓ Moderne bedrijventerreinen</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Capelle aan den IJssel:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Kinderopvang & onderwijs</div>
                <div>• Zorg & welzijn</div>
                <div>• Horeca & restaurants</div>
                <div>• Detailhandel</div>
                <div>• Sportscholen & wellness</div>
                <div>• Automotive sector</div>
                <div>• Schoonheidszorg</div>
                <div>• Bouw & installatie</div>
                <div>• Zakelijke dienstverlening</div>
                <div>• Accountancy & administratie</div>
                <div>• Makelaarskantoren</div>
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
            Klaar voor groei in <span className="bg-[#F7D8FA] px-2 rounded italic">Capelle aan den IJssel</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in de groene randgemeente - altijd eerlijk advies en bewezen resultaten.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Capelle aan den IJssel - Gemeente & omgeving</h3>
            <p className="text-gray-600">
              Capelle aan den IJssel • + omliggende gemeenten: Rotterdam • Nieuwerkerk aan den IJssel • Krimpen aan den IJssel • Gouda
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}