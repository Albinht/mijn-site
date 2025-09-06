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

export default function MarketingHouten() {
  // Lokale Houten reviews
  const dutchReviews = [
    { name: 'FietsXpert Houten', rating: 5, text: 'Fietsliefhebbers uit heel Houten vinden ons nu makkelijk online. Van Oude Dorp tot Loerik - deze fietsstad kent onze service!' },
    { name: 'Gezinsrestaurant Hart van Houten', rating: 5, text: 'Families uit alle wijken reserveren nu online tafels. Houten\'s gezinsvriendelijke karakter past perfect bij ons concept!' },
    { name: 'Kinderdagverblijf Houten Noord', rating: 4.5, text: 'Ouders uit Loerik, Oude Dorp en Vinex wijken vinden ons voor kinderopvang. Deze planstad waardeert kwaliteit en veiligheid!' },
    { name: 'Wellness Studio Houten', rating: 5, text: 'Actieve bewoners uit heel Houten boeken online behandelingen. Een stad die gezond leeft heeft onze diensten nodig!' },
    { name: 'Bouwbedrijf Moderne Woningen', rating: 5, text: 'Verbouwingen in Vinex wijken en klassieke buurten lopen storm. Houten groeit en wij groeien mee!' },
    { name: 'Autorijschool Houten Centrum', rating: 5, text: 'Jongeren uit alle wijken kiezen voor onze praktijklessen. Houten\'s moderne infrastructuur is ideaal om te leren rijden!' },
  ]
  const dutchMoreReviews = [
    { name: 'Accountantskantoor Houten MKB', rating: 5, text: 'Ondernemers uit Houten en omgeving vertrouwen op onze financiële expertise. Deze ondernemende stad groeit snel!' },
    { name: 'Huisartsenpraktijk Houten Gezond', rating: 4.5, text: 'Patiënten uit Loerik, Oud Houten en nieuwe wijken maken online afspraken. Een moderne stad verdient moderne zorg!' },
    { name: 'Thuiszorgservice Houten Zorg', rating: 5, text: 'Ouderen en families uit heel Houten waarderen onze persoonlijke aanpak. Zorg op maat voor een zorgzame gemeente!' },
    { name: 'Hondenuitlaatservice Houten Actief', rating: 5, text: 'Drukke gezinnen uit alle wijken boeken onze diensten. Houten\'s groene karakter en hondenliefde gaan hand in hand!' },
    { name: 'IT Support Houten Zakelijk', rating: 4.5, text: 'MKB bedrijven uit Houten en regio kiezen voor onze IT-oplossingen. Deze moderne stad begrijpt het belang van technologie!' },
    { name: 'Muziekschool Harmonie Houten', rating: 5, text: 'Kinderen en volwassenen uit alle hoeken van Houten volgen hier muzieklessen. Cultuur en creativiteit bloeien in deze planstad!' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* HERO */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#000]">SEO Specialist Houten: de fiets- en gezinsvriendelijke planstad</span><br />
            <span className="bg-[#F7D8FA] px-2 rounded italic">50.000 inwoners + groei naar Utrecht</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <strong>Houten: waar doordachte planning resulteert in levenskwaliteit en ondernemerskansen.</strong><br />
            Deze moderne planstad combineert fietsparadijs, gezinsvriendelijkheid en groene leefomgeving met sterke economische groei en nabijheid van Utrecht. Als <b>SEO specialist Houten</b> help ik bedrijven profiteren van de unieke kenmerken: actieve gezinnen, milieubewuste consumenten en een bloeiende lokale economie.
          </p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>✓ Lokale SEO Houten: bereik alle wijken en het Oude Dorp</li>
            <li>✓ Google Ads: target gezinnen, fietsers en bewuste consumenten</li>
            <li>✓ Speciaal voor diensten rond families en duurzaamheid</li>
            <li>✓ <b>Marketing bureau Houten</b> met focus op unieke identiteit</li>
            <li>✓ Websites die Houtense waarden uitstralen</li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Plan gratis strategiegesprek <span>→</span>
            </Button>
            <Button variant="secondary" as={Link} href="/work-with-me">
              Ontdek planstad cases
            </Button>
          </div>
          <p className="mt-2 text-sm text-gray-500">Actief in Houten & Utrechtse regio</p>
          <p className="mt-2 text-xs text-green-600">📞 Direct contact? Bel <b>+31 6 48728828</b></p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src={graphImage} alt="SEO Specialist Houten - Marketing Resultaten" className="w-full h-auto" priority />
          </div>
          <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src={avatarImage} alt="Albin SEO Specialist Houten" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>

      {/* USP & FEATURE SECTION */}
      <FeatureSection
        title="Meer klanten in Houten met planmatige marketing"
        subtitle="Van Oude Dorp tot Loerik - overal zichtbaar"
        features={[
          {
            badge: "SEO Houten",
            title: "SEO Specialist Houten",
            description: "Wil je groeien in het unieke Houten? Ik zorg dat je wordt gevonden door bewuste gezinnen, fietsliefhebbers en milieubewuste consumenten in deze bijzondere planstad bij Utrecht.",
            visualTitle: "Lokaal bovenaan",
            visualSubtitle: "Alle wijken",
            image: masterSeoImage
          },
          {
            badge: "Google Ads",
            title: "Google Ads Houten",
            description: "Bereik direct actieve gezinnen, fietsers en bewuste consumenten. Perfect targeting voor deze groene, gezinsvriendelijke gemeenschap met sterke lokale identiteit.",
            visualTitle: "Direct resultaat",
            visualSubtitle: "Fiets- & gezinsstad",
            image: keywordResearchImage
          },
          {
            badge: "Webdesign & Online Marketing",
            title: "Marketing Bureau Houten",
            description: "Moderne websites die Houten's waarden uitstralen. Geoptimaliseerd voor bewuste consumenten en de unieke gezins- en fietscultuur van deze planstad.",
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
        title="Houten groeit met <span class='bg-[#F7D8FA] px-2 rounded italic'>SEO & Marketing</span> door Albin"
      />

      {/* WAAROM KIEZEN VOOR LOKALE SEO IN HOUTEN */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Waarom kiezen bedrijven in <span className="bg-[#F7D8FA] px-2 rounded italic">Houten</span> voor lokale SEO?
            </h2>
            <p className="text-xl text-gray-600">
              Houten combineert doordachte planning met sterke gemeenschapszin en bewuste consumptiekeuzes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚴‍♂️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fietsparadijs Nederland</h3>
              <p className="text-gray-600">
                Houten staat bekend als dé fietsstad van Nederland met unieke infrastructuur. Fietsers vormen een loyale, actieve doelgroep die lokale bedrijven waardeert.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gezinsvriendelijke gemeenschap</h3>
              <p className="text-gray-600">
                Jonge gezinnen met kinderen vormen de grootste groep. Deze bewuste consumenten investeren in kwaliteit, veiligheid en duurzame diensten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bewuste consument</h3>
              <p className="text-gray-600">
                Houtenaars kiezen bewust voor duurzaamheid, lokale bedrijven en kwaliteit. Ze waarderen transparantie en persoonlijke service.
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
              Marketing Bureau & SEO Specialist in <span className="bg-[#F7D8FA] px-2 rounded italic">Houten</span>
            </h2>
            <p className="text-xl text-gray-600">
              Van lokale fietswinkel tot regionale dienstverlener – ik help je bedrijf groeien in uniek Houten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Houten */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Specialist Houten</h3>
              <p className="text-gray-600 mb-6">
                Met gerichte lokale SEO bereik je actieve gezinnen, fietsers en bewuste consumenten in alle wijken van Houten en omliggende dorpen.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Google Bedrijfsprofiel voor alle wijken</li>
                <li>✓ Zoekwoorden fiets- en gezinsgericht</li>
                <li>✓ Vinex wijken en Oude Dorp targeting</li>
                <li>✓ Reviews van tevreden Houtenaars</li>
                <li>✓ Regio Utrecht + omliggende dorpen</li>
              </ul>
            </div>
            {/* Google Ads Houten */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
              <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Perfect voor Houten doelgroepen
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Ads Houten</h3>
              <p className="text-gray-600 mb-6">
                Bereik direct gezinnen, fietsliefhebbers en bewuste consumenten met campagnes die aansluiten bij Houten's unieke karakter.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Gezin- en kindgerichte targeting</li>
                <li>✓ Fiets- en sportgerelateerde zoekwoorden</li>
                <li>✓ Duurzaamheid en lokaal focus</li>
                <li>✓ Wijkspecifieke campagnes</li>
                <li>✓ Utrecht regio uitbreiding</li>
              </ul>
            </div>
            {/* Website & Online Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website & Online Marketing</h3>
              <p className="text-gray-600 mb-6">
                Websites die Houten's waarden uitstralen: duurzaamheid, gezinsvriendelijkheid en kwaliteit. Perfect voor bewuste Houtenaars.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✓ Groen en duurzaam design</li>
                <li>✓ Gezinsvriendelijke gebruikerservaring</li>
                <li>✓ Mobiel-first voor actieve gebruikers</li>
                <li>✓ Lokale waarden en identiteit</li>
                <li>✓ Milieubewuste beeldtaal</li>
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
              Veelgestelde vragen over <span className="bg-[#F7D8FA] px-2 rounded italic">SEO in Houten</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten over lokale SEO en marketing in de unieke planstad Houten.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Waarom werkt lokale SEO zo goed in Houten?</h3>
              <p className="text-gray-600">
                Houtenaars zijn zeer lokaal gericht en waarderen persoonlijke service. Met 50.000 inwoners en sterke gemeenschapszin zoeken ze bewust lokale bedrijven op. SEO helpt je opvallen in deze hechte gemeenschap.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welke bedrijven floreren in Houten?</h3>
              <p className="text-gray-600">
                Fietswinkels, gezinsgerichte diensten (kinderopvang, sport, onderwijs), duurzame bedrijven, horeca gericht op families, wellness en gezondheid. Ook B2B diensten profiteren van de nabijheid tot Utrecht.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe benader ik Houten's unieke fiets- en gezinscultuur?</h3>
              <p className="text-gray-600">
                Focus op duurzaamheid, veiligheid en gezinswaarden. Gebruik beeldmateriaal van fietsen, gezinnen en groene omgevingen. Houten houdt van lokale verhalen en persoonlijke aanpak.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wat zijn realistische kosten voor SEO in Houten?</h3>
              <p className="text-gray-600">
                Lokale SEO pakketten starten vanaf €750 per maand. Door Houten's hechte gemeenschap en bewuste consumentenkeuzes is de conversie vaak hoger dan gemiddeld.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kan ik klanten trekken uit Utrecht en omliggende dorpen?</h3>
              <p className="text-gray-600">
                Zeker! Houten ligt strategisch tussen Utrecht en de Utrechtse Heuvelrug. Veel mensen pendelen tussen deze gebieden. We kunnen je bereik uitbreiden naar Nieuwegein, Bunnik en zelfs Utrecht.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereik ik verschillende wijken in Houten?</h3>
              <p className="text-gray-600">
                Houten heeft het Oude Dorp (historisch), Loerik (modern), en verschillende Vinex wijken. Elke wijk heeft eigen karakteristieken. We ontwikkelen strategieën die alle wijken effectief bereiken.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wanneer zie ik eerste resultaten van lokale SEO?</h3>
              <p className="text-gray-600">
                In Houten zie je vaak binnen 6-10 weken eerste resultaten. De sterke lokale oriëntatie en actieve online community maken dat verbeteringen snel zichtbaar worden in zoekresultaten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVER HOUTEN SECTIE */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online marketing in <span className="bg-[#F7D8FA] px-2 rounded italic">Houten</span> & regio
            </h2>
            <p className="text-xl text-gray-600">
              Houten combineert unieke stedenbouwkunde met sterke gemeenschapszin en bewuste keuzes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Planstad vol karakter en kansen</h3>
              <p className="text-gray-600 mb-4">
                Houten is Nederland's bekendste fietsstad en voorbeeld van doordachte stedenbouw. Deze planstad van 50.000 inwoners combineert moderne woonwijken met het historische Oude Dorp, verbonden door een uniek fietstunnelsysteem.
              </p>
              <p className="text-gray-600 mb-6">
                Als SEO specialist Houten help ik bedrijven om deze unieke kenmerken te benutten: bereik bewuste gezinnen, profiteer van de sterke lokale identiteit en tap in op de fiets- en milieuvriendelijke cultuur.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 50.000 inwoners met sterke lokale binding</li>
                <li>✓ Bekendste fietsstad van Nederland</li>
                <li>✓ Jonge gezinnen en bewuste consumenten</li>
                <li>✓ Unieke tunnelstructuur en planning</li>
                <li>✓ Groeiende economie en bedrijvigheid</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedrijfstypes die ik help in Houten:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div>• Fietswinkels & reparatie</div>
                <div>• Kinderopvang & onderwijs</div>
                <div>• Gezinssport & fitness</div>
                <div>• Duurzame dienstverleners</div>
                <div>• Horeca familie-gericht</div>
                <div>• Wellness & gezondheid</div>
                <div>• Groen & tuinbouw</div>
                <div>• Bouw & verduurzaming</div>
                <div>• Lokale retail & services</div>
                <div>• Zorgverleners (huis/tand)</div>
                <div>• Creatieve diensten</div>
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
            Gratis kennismaken met jouw <span className="bg-[#F7D8FA] px-2 rounded italic">SEO Specialist Houten</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ontdek hoe ik jouw bedrijf kan laten groeien in de unieke fiets- en gezinsstad Houten – altijd eerlijk advies en snelle reactie.
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO Specialist Houten - Online Marketing Utrechtse Regio</h3>
            <p className="text-gray-600">
              Houten • Utrecht • Nieuwegein • Bunnik • Culemborg • Woerden • Utrechtse Heuvelrug
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}