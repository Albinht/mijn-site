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

export default function MarketingVelsen() {
  // Lokale Velsen reviews
  const dutchReviews = [
    { name: 'Restaurant De Haven IJmuiden', rating: 5, text: 'Sinds de website optimalisatie komen er veel meer gasten uit Velsen en IJmond. De zeevruchtenkaart trekt bezoekers van de hele kust!' },
    { name: 'Autogarage Zeehaven Velsen', rating: 5, text: 'APK en onderhoud boekingen uit Velsen-Noord en Zuid zijn explosief gestegen. De kustbewoners vinden ons perfect!' },
    { name: 'Tandartspraktijk IJmond Velsen', rating: 4.5, text: 'Patiënten uit Beverwijk, IJmuiden en Velsen kiezen nu bewust voor onze praktijk. Geweldige lokale groei!' },
    { name: 'Kapsalon Velsen Centrum', rating: 5, text: 'Online afspraken van locals uit beide Velsen delen. De kustbewoners waarderen vakmanschap en service.' },
    { name: 'Bouwbedrijf Kust Velsen', rating: 5, text: 'Verbouwingen in Velsen en IJmond stromen binnen. Zeeklimaat-expertise trekt veel klanten uit de regio.' },
    { name: 'Fysiotherapie SportVelsen', rating: 5, text: 'Sporters van ijshockey tot zeilen vinden ons nu makkelijk. Velsen kent ons als de sportpraktijk!' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor IJmond', rating: 5, text: 'Haven- en industriebedrijven uit Velsen en IJmuiden kiezen ons voor administratie. Unieke sector-expertise!' },
    { name: 'IT-bedrijf Velsen Tech', rating: 4.5, text: 'B2B klanten uit de haven en industrie vinden ons perfect voor IT-oplossingen. IJmond groeit digitaal!' },
    { name: 'Interieurzaak Zee & Strand', rating: 5, text: 'Kustbewoners uit Velsen en Beverwijk komen voor nautisch interieur. Showroom zit vol met bezoekers!' },
    { name: 'Rijschool Kust Velsen', rating: 5, text: 'Jongeren uit beide Velsen delen en IJmuiden schrijven massaal in. De kust vertrouwt op onze ervaring!' },
    { name: 'Advocatenkantoor Velsen', rating: 4.5, text: 'Maritiem en havenrecht trekt bedrijven uit hele IJmond. Onze specialisatie wordt goed gevonden online.' },
    { name: 'Dierenkliniek IJmond Velsen', rating: 5, text: 'Huisdiereigenaren uit kustgebied maken online afspraken. Van stad tot strand - iedereen vindt ons!' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">Maritiem Velsen: haven van online kansen</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">67.000 inwoners + IJmond poortwachter</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Velsen: waar industrie en kustleven samenkomen in zakelijk succes.</strong><br />
            Met IJmuiden haven, Tata Steel, Kennemer kust en sterke industrie biedt Velsen unieke marktkansen. Als <b>SEO specialist Velsen</b> help ik je profiteren van de maritieme economie, kusttoerisme en de strategische positie tussen Amsterdam en kust.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Velsen: zichtbaar in IJmond en kustgebied</li>
            <li>✓ Google Ads: doelgroep haven, industrie en toerisme</li>
            <li>✓ Speciaal voor bedrijven in Velsen-Noord en Velsen-Zuid</li>
            <li>✓ <b>SEO Velsen</b> met focus op maritieme sector</li>
            <li>✓ Websites die IJmond bezoekers converteren</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Ontdek IJmond cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Werkzaam in Velsen, IJmuiden & IJmond</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Velsen - Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Velsen" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Velsen met maritieme marketing"
        subtitle="IJmond vindbaarheid en kust conversie"
        features={[
          {
            badge: "SEO Velsen",
            title: "SEO Specialist Velsen",
            description: "Wil je groeien in maritiem Velsen en IJmond? Ik zorg dat je lokaal wordt gevonden door havenbedrijven, industrie én kusttoeristen in deze unieke economische regio tussen Amsterdam en zee.",
            visualTitle: "Maritiem bovenaan",
            visualSubtitle: "Kust tot haven",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Velsen",
            description: "Direct bereik van IJmond professionals, havenwerkers en kustbezoekers. Perfect targeting voor deze industriële en toeristische regio met diverse doelgroepen.",
            visualTitle: "IJmond resultaat",
            visualSubtitle: "Haven tot strand",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Velsen",
            description: "Robuuste websites voor Velsen bedrijven. Geoptimaliseerd voor de maritieme sector, industrie én kusttoerisme - van B2B tot leisure targeting.",
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
        title="Velsen groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN VELSEN */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Velsen</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Velsen combineert industrie, haven en kusttoerisme - een unieke mix die diverse marktkansen biedt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maritieme economie</h3>
              <p className="text-gray-600">
                IJmuiden haven, Tata Steel en maritieme dienstverlening maken Velsen economisch sterk. Lokale SEO helpt je deze B2B markt en industriële klanten te bereiken.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kusttoerisme</h3>
              <p className="text-gray-600">
                Strand, boulevard en kustrecreatie trekken bezoekers uit heel Nederland. Deze toeristische stroom biedt kansen voor horeca, retail en dienstverlening.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industriële kracht</h3>
              <p className="text-gray-600">
                Grote werkgevers en industriegebieden bieden stabiele B2B kansen. Lokale SEO helpt je deze zakelijke markt systematisch te ontwikkelen.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Velsen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale dienstverlener tot maritime speler – ik help je bedrijf online groeien in IJmond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Velsen */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Velsen</h3>
              <p className="text-gray-600 mb-6">
                Met sterke lokale SEO sta jij bovenaan bij zoekopdrachten in Velsen, IJmuiden en IJmond. Bereik zowel B2B als consumer doelgroepen effectief.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel optimalisatie Velsen</li>
                <li>✓ Zoekwoordenonderzoek maritieme sector</li>
                <li>✓ IJmond en kust SEO strategieën</li>
                <li>✓ Reviews stimuleren beide markten</li>
                <li>✓ Lokale citaties industrie + toerisme</li>
              </ul>
            </div>
            {/* Google Ads Velsen */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Populair bij IJmond ondernemers
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Velsen</h3>
              <p className="text-gray-600 mb-6">
                Bereik direct havenbedrijven, industrie én toeristen met gerichte Google Ads campagnes voor de diverse Velsen markt.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ B2B maritime en industrie campagnes</li>
                <li>✓ Toerisme en leisure targeting</li>
                <li>✓ Geografisch: Velsen tot IJmond</li>
                <li>✓ Seizoen en sector optimalisatie</li>
                <li>✓ ROI tracking per doelgroep</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Professionele websites die werken voor Velsen's unieke mix: van industriële B2B tot kusttoerisme conversie.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Dual-purpose design B2B + B2C</li>
                <li>✓ Maritieme sector optimalisatie</li>
                <li>✓ Kusttoerisme conversie focus</li>
                <li>✓ Mobile-first voor alle doelgroepen</li>
                <li>✓ Integration met booking systemen</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Velsen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en online marketing in maritiem Velsen.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom lokale SEO in Velsen?</h3>
              <p className="text-gray-600">
                Velsen combineert 67.000 inwoners, grootschalige industrie (Tata Steel), IJmuiden haven én kusttoerisme. Deze diverse economie biedt unieke kansen voor lokale bedrijven die beide markten willen bedienen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke bedrijven doen het goed in Velsen?</h3>
              <p className="text-gray-600">
                Maritime dienstverlening, industriële suppliers, horeca aan de kust, accommodaties, automotive (veel pendelaars), en toerisme-gerelateerde services. Ook B2B services voor de haven en Tata Steel.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe lang duurt het voordat ik resultaten zie?</h3>
              <p className="text-gray-600">
                Voor lokale SEO in Velsen zie je vaak binnen 2-3 maanden resultaten. De diverse economie betekent meerdere klantenstromen, wat stabielere groei geeft dan afhankelijkheid van één sector.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat kost SEO voor mijn bedrijf in Velsen?</h3>
              <p className="text-gray-600">
                Lokale SEO pakketten starten vanaf €700 per maand. Door Velsen's diverse economie (industrie + toerisme) kunnen we vaak meerdere markten tegelijk bedienen, wat de ROI verhoogt.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit heel IJmond?</h3>
              <p className="text-gray-600">
                Absoluut! Velsen, IJmuiden, Beverwijk en omgeving vormen één economische regio. We kunnen je strategie uitbreiden naar heel IJmond, inclusief Haarlem Noord en Zaanstreek.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe zit het met seizoensinvloeden?</h3>
              <p className="text-gray-600">
                Velsen's industrie draait jaar rond, maar toerisme piekt in zomer. We ontwikkelen strategieën die beide seizoenspatronen optimaal benutten voor stabiele jaaromzet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER VELSEN SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Velsen</span> & IJmond
            </h2>
            <p className="text-xl text-gray-600">
              Velsen combineert maritieme industrie met kusttoerisme - een unieke economische mix vol kansen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IJmond: waar industrie en zee samenkomen</h3>
              <p className="text-gray-600 mb-4">
                Velsen is verdeeld in Velsen-Noord (industrie, haven) en Velsen-Zuid (wonen, diensten), met IJmuiden als maritime hart. Deze strategische ligging aan zee en nabij Amsterdam maakt het een economische knooppunt.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Velsen help ik bedrijven om te profiteren van deze unieke positie: B2B kansen in industrie en haven, plus B2C mogelijkheden in toerisme en lokale dienstverlening.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 67.000 inwoners verdeeld over beide delen</li>
                <li>✓ IJmuiden haven (grootste visserijhaven)</li>
                <li>✓ Tata Steel (grootste werkgever)</li>
                <li>✓ Kusttoerisme en strandrecreatie</li>
                <li>✓ Strategische ligging bij Amsterdam</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Velsen:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Maritime dienstverlening</div>
                <div>• Industriële suppliers</div>
                <div>• Horeca & restaurants</div>
                <div>• Hotels & accommodaties</div>
                <div>• Automotive & transport</div>
                <div>• Bouw & onderhoud</div>
                <div>• Tandartsen & zorg</div>
                <div>• Toerisme & recreatie</div>
                <div>• IT & technologie</div>
                <div>• Accountants & advies</div>
                <div>• Wellness & sport</div>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Velsen</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in maritiem Velsen – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Velsen - Online Marketing IJmond & Omgeving</h3>
            <p className="text-gray-600">
              Velsen-Noord • Velsen-Zuid • IJmuiden • Beverwijk • Heemskerk • Castricum • IJmond
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}