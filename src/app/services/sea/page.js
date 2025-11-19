import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import SEOReviewSlider from '../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../components/SEOConsultSection'
import Link from 'next/link'

export const metadata = {
  title: 'SEA Uitbesteden | Google Ads & Bing Ads Specialist | Niblah',
  description: 'SEA uitbesteden aan specialisten die advertentiebudget strategisch inzetten. Campagnes afgestemd op je bedrijfsdoelen, niet op maximale ad spend.',
}

export default function SEAPage() {
  const heroData = {
    badge: 'Advertenties die meetellen voor je bedrijf',
    title: 'SEA uitbesteden',
    description: 'Wil je SEA campagnes die intelligent worden afgestemd op wat er speelt in je bedrijf? Bij Niblah stoppen we advertenties als het rendement daalt, verschuiven we budget naar kanalen die op dat moment meer opleveren, en stemmen we campagnes af op voorraad en capaciteit. Dit is SEA uitbesteden die verder gaat dan alleen campagnes draaien - het versterkt je complete bedrijfsstrategie.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* Advertentiebudget dat slim wordt ingezet waar het het meeste oplevert',
    image: '/development-hero.png',
    imageAlt: 'SEA dashboard showing campaign performance'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* SEA als onderdeel van complete strategie */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-[#1795FF] text-white px-2 rounded">SEA uitbesteden</span> als onderdeel van je complete groeistrategie
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Niblah is de SEA-specialist voor bedrijven die adverteren willen inzetten voor échte groei. Voor ondernemers die twijfelen of hun huidige campagnes nog wel passen bij de bedrijfsdoelen. En voor wie het gevoel heeft dat het advertentiebudget slimmer ingezet kan worden.
            </p>
            <p>
              Bij ons weet je zeker dat SEA uitbesteden betekent dat advertenties niet als losstaand kanaal worden gezien, maar als strategisch onderdeel van je complete marketing mix. We onderzoeken bij welke kanalen jouw euros het meeste rendement opleveren. En je krijgt een aanpak die hierop is afgestemd.
            </p>
            <p className="font-semibold">
              In de praktijk betekent SEA uitbesteden aan Niblah:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                <span>Dat jouw SEA-budget soms verschuift naar andere kanalen, omdat dit op dat moment leidt tot een hogere ROI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                <span>Dat jouw campagnes tijdelijk worden gepauzeerd als je operatie overbelast raakt of SEA niet het meest winstgevende kanaal is</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                <span>Dat je via SEA juist extra inzet op producten die snel verkocht moeten worden, afgestemd op voorraad en prioriteiten</span>
              </li>
            </ul>
            <div className="bg-white border-2 border-black rounded-xl p-6 mt-8 shadow-[4px_4px_0_0_#000]">
              <p className="text-gray-700 font-semibold mb-2">SEA uitbesteden: Het wat, hoe en waarom</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Hoe?</strong> Elke 90 dagen evalueren we: draagt SEA optimaal bij aan je bedrijfsdoelen? Hier stemmen we de initiatieven van het komende kwartaal op af.</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Wat?</strong> SEA wordt niet gezien als losstaand kanaal, maar als onderdeel van je complete groeistrategie.</p>
              <p className="text-gray-700 text-sm"><strong>Waarom?</strong> Je weet zo zeker dat jouw SEA-investeringen altijd logisch passen binnen jouw bedrijfsvoering, in plaats van ertegen in te werken.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Wat kun je verwachten */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Wat kun je verwachten bij <span className="bg-[#1795FF] text-white px-2 rounded">SEA uitbesteden</span> aan Niblah?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Euro's besteden waar het het meeste oplevert */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Euros besteden waar het het meeste oplevert</h3>
              <p className="text-gray-600 mb-4">
                Adverteren om het adverteren? Daar hoef je bij ons niet bang voor te zijn. Waar andere bureaus vaak steeds meer willen adverteren, worden jouw campagnes bij ons soms juist tijdelijk stopgezet. Waarom? Omdat je dan soms profiteert van een hogere ROI - bijvoorbeeld wanneer SEA niet het meest winstgevende kanaal is, of omdat diezelfde euros je méér opleveren als je ze investeert in een ander kanaal of CRO.
              </p>
            </div>

            {/* Aangepast aan operationele realiteit */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aangepast aan operationele realiteit</h3>
              <p className="text-gray-600 mb-4">
                Andere bureaus focussen zich met name op het optimaliseren van SEA-campagnes. Bij ons wordt SEA uitbesteden betekent dat advertenties worden aangepast op wat er speelt in je bedrijf. Wil je bepaalde voorraad snel weg hebben? Dan draaien we campagnes op die producten. Salesteam overbelast? Leadcampagnes worden tijdelijk getemperd. Seizoensproducten? Dan wordt de budgetplanning daarop aangepast.
              </p>
            </div>

            {/* Partnerschap */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnerschap, gaat verder dan campagnes</h3>
              <p className="text-gray-600 mb-4">
                Bij ons krijg je meer dan campagnemanagement. Je hebt een partner die met je meedenkt als onderdeel van je team. Dat betekent bijvoorbeeld dat je advies krijgt over prijsstelling als dat SEA-performance beïnvloedt. Maar ook dat er met je wordt meegedacht over productlanceringen en voorraadplanning. Je krijgt een partner die betrokken is bij je gehele bedrijf, niet alleen bij je campagnes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nu vs Straks */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            SEA uitbesteden aan Niblah: <span className="bg-[#FFE500] px-2 rounded">nu versus straks</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nu */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 border-2 border-black rounded-full flex items-center justify-center text-gray-400 text-2xl">
                  ✗
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nu</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je hebt SEA campagnes draaien maar weet niet zeker of deze nog passen bij actuele bedrijfsdoelen. De strategie voelt verouderd en campagnes lopen op hun eigen momentum.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je investeert in advertenties maar soms lijkt het alsof ze tegen bedrijfsvoering in werken. Te veel leads overbelasten je salesteam, of verkeer gaat naar uitverkochte producten.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je huidige SEA bureau denkt niet mee over operationele uitdagingen zoals voorraad, seizoenen of teamcapaciteit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">SEA leidt zijn eigen leven als geïsoleerde silo, in plaats van logisch geïntegreerd met de rest van je bedrijf en marketing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je hebt het gevoel dat je advertentiebudget efficiënter ingezet zou kunnen worden, maar krijgt alleen het advies om meer te adverteren.</span>
                </li>
              </ul>
            </div>

            {/* Straks */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Straks</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je SEA campagnes passen altijd perfect bij wat er gebeurt in je bedrijf. De strategie evolueert mee met je bedrijfsprioriteiten.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je advertentiebudget wordt dynamisch verschoven naar waar het op dat moment de meeste impact heeft, soms betekent dit SEA tijdelijk pauzeren.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je hebt een SEA partner die soms zegt: stop die campagne en investeer het geld liever in een ander kanaal dat op dit moment meer oplevert.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je SEA strategie wordt elk kwartaal geëvalueerd en afgestemd op je actuele bedrijfsdoelen. Continue verbetering in plaats van eenmalig instellen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je weet zeker dat elke advertentie-euro optimaal bijdraagt aan je actuele doelen met meetbaar rendement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEA Expertise - 4 diensten */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Onze <span className="bg-[#1795FF] text-white px-2 rounded">SEA-expertise</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Compleet Google Ads en Bing Ads beheer met focus op winstgevende groei.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Google Shopping */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                🛒
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Google Shopping</h3>
              <p className="text-gray-600 mb-4">
                Met een doelgerichte strategie zorgen wij ervoor dat jouw shopping-advertentie bovenaan wordt vertoond in de shopping-resultaten van Google. We optimaliseren je productfeed (titels, beschrijvingen, afbeeldingen, prijzen) en segmenteren campagnes op winstgevendheid.
              </p>
              <p className="text-gray-600">
                Feed-optimalisatie is cruciaal: betere productdata zorgt voor hogere Quality Scores, lagere kosten per klik en betere advertentieposities. Ideaal voor webshops om producten onder de aandacht te brengen.
              </p>
            </div>

            {/* Google Search */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Google Search</h3>
              <p className="text-gray-600 mb-4">
                Bovenaan in de zoekresultaten van Google? Wij helpen je hierbij met onze jarenlange ervaring. We bouwen gedetailleerde campagnestructuren, schrijven overtuigende advertentieteksten en implementeren conversiegerichte landingspagina strategieën.
              </p>
              <p className="text-gray-600">
                Negatieve zoekwoorden beheren we continu om irrelevant verkeer uit te sluiten. Het doel is niet maximale vertoningen, maar het hoogste conversiepercentage. Zo ben je zichtbaar op de zoekwoorden die jij wilt of die passen bij jouw bedrijf.
              </p>
            </div>

            {/* Display & Remarketing */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                📱
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Display Advertising</h3>
              <p className="text-gray-600 mb-4">
                We zorgen ervoor dat jouw advertenties worden vertoond op diverse websites. Display ads bouwen merkbekendheid op en maken remarketing mogelijk. We segmenteren doelgroepen strategisch: winkelwagenverlaters krijgen gerichte remarketing, websitebezoekers zien merkbewustzijnsboodschappen.
              </p>
              <p className="text-gray-600">
                We testen continue verschillende advertentievarianten. Display heeft meestal een lagere directe conversie maar speelt een cruciale rol in de klantreis. Dit is een goede manier om te retargeten en je naamsbekendheid te verhogen.
              </p>
            </div>

            {/* Feed Optimization */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Feed-optimalisatie</h3>
              <p className="text-gray-600 mb-4">
                Wij optimaliseren jouw productfeed zodanig, dat je maximaal resultaat haalt met je SEA-campagnes. We optimaliseren titels voor zoekwoordrelevantie, verbeteren beschrijvingen met unieke verkoopargumenten, comprimeren afbeeldingen voor snelle laadtijden en implementeren dynamische prijsregels.
              </p>
              <p className="text-gray-600">
                Denk aan het optimaliseren van producttitels, beschrijvingen, afbeeldingen en prijzen. Een betere feed betekent betere resultaten tegen lagere kosten. We maken gebruik van geavanceerde technieken voor strategisch bieden en voorraadgebaseerde biedaanpassingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 stappen aanpak */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            In 5 stappen naar <span className="bg-[#FFE500] px-2 rounded">bedrijfsgroei met SEA</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Meer weten over SEA uitbesteden aan Niblah? De eerste stap is om een vrijblijvende groeiscan aan te vragen.
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Stap 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Analyse & Audit</h3>
              <p className="text-sm text-gray-600">
                Diepgaande analyse van je huidige campagnes: wat werkt, wat verspilt budget, waar liggen de snelle winsten?
              </p>
            </div>

            {/* Stap 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Strategie & Afstemming</h3>
              <p className="text-sm text-gray-600">
                Campagnestrategie afstemmen op je bedrijfsdoelen, operationele mogelijkheden en gewenste resultaten.
              </p>
            </div>

            {/* Stap 3 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Implementatie & Optimalisatie</h3>
              <p className="text-sm text-gray-600">
                Campagnes opnieuw opbouwen volgens best practices, tracking implementeren en continue optimalisatie starten.
              </p>
            </div>

            {/* Stap 4 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                4
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Monitoring & Rapportage</h3>
              <p className="text-sm text-gray-600">
                Dagelijkse performance controles, wekelijkse optimalisaties en maandelijkse strategische evaluaties.
              </p>
            </div>

            {/* Stap 5 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                5
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Kwartaalevaluatie</h3>
              <p className="text-sm text-gray-600">
                Elke 90 dagen evalueren we of de strategie past bij je actuele bedrijfsprioriteiten en marktomstandigheden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Concrete <span className="bg-[#1795FF] text-white px-2 rounded">SEA resultaten</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Hoe strategisch SEA beheer jouw omzet transformeert
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl">
                  OH
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">OnlineHardware</h3>
                  <p className="text-sm text-gray-600">E-commerce SEA | 6 maanden</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Shopping feed optimalisatie en strategisch bieden verdubbelde ROAS zonder verkeersverlies
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">127%</div>
                  <div className="text-sm text-gray-600">ROAS verbetering</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">-43%</div>
                  <div className="text-sm text-gray-600">kosten per conversie</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">€89K</div>
                  <div className="text-sm text-gray-600">extra maandelijkse winst</div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center font-bold text-white text-2xl">
                  BS
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">BizSolutions B2B</h3>
                  <p className="text-sm text-gray-600">Lead Gen SEA | 4 maanden</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Campagne herstructurering en focus op leadkwaliteit verbeterde conversie drastisch
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">94%</div>
                  <div className="text-sm text-gray-600">meer gekwalificeerde leads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">-38%</div>
                  <div className="text-sm text-gray-600">kosten per SQL</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">3.8x</div>
                  <div className="text-sm text-gray-600">lead-to-conversie ratio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews sectie */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Dit zeggen <span className="bg-[#FFE500] px-2 rounded">onze klanten</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Over onze SEA expertise
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                Niblah denkt écht mee met business priorities. Ze pauzeerden campagnes toen ons salesteam vol zat - previous agency zou dat nooit doen!
              </p>
              <p className="font-bold text-gray-900">Jeroen Smit</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                ROAS verdubbeld in 4 maanden. Hun feed optimization was game-changing - details matter enormously in Shopping campaigns!
              </p>
              <p className="font-bold text-gray-900">Marieke Jansen</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                Eindelijk een SEA partner die niet altijd adviseert om meer te adverteren. Ze optimaliseren voor onze winst, niet voor hun eigen inkomsten. Verfrissend eerlijk!
              </p>
              <p className="font-bold text-gray-900">Tom Visser</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-black rounded-full px-6 py-3 shadow-[4px_4px_0_0_#000]">
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-gray-900">Wij krijgen een 4.9 op Google uit 143 beoordelingen</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde <span className="bg-[#FFE500] px-2 rounded">vragen</span>
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wanneer is SEA rendabel?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                SEA is rendabel wanneer de levenslange waarde van verworven klanten hoger is dan de totale acquisitiekosten, binnen een acceptabele terugverdientijd. Simpel gezegd: als 1 euro advertentiebudget leidt tot 3+ euro winst, dan is het rendabel. Maar je moet ook kijken naar alternatieve investeringen: levert diezelfde euro geïnvesteerd in SEO of CRO misschien meer op? Wij optimaliseren voor de hoogste ROI per kanaal.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat betekent SEA in marketing?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                SEA (Search Engine Advertising) is betaalde advertentieruimte in zoekmachines zoals Google en Bing. Dit omvat: zoekadvertenties (tekstadvertenties in zoekresultaten), shopping advertenties (productweergaven), display advertenties (banners op websites), YouTube advertenties en Gmail advertenties. Het verschil met SEO: bij SEA betaal je per klik, bij SEO is het organisch verkeer zonder directe betaling per bezoeker.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom SEA uitbesteden vs in-house management?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                In-house SEA vereist: een gecertificeerde specialist (€50-70K salaris), testbudget om te leren, abonnementen op tools en continue training. Totale kosten: minimaal €80-100K per jaar. Uitbesteden geeft je direct toegang tot experts, bewezen werkwijzen en kennis uit meerdere projecten, zonder aanwervingsrisico. Voor de meeste bedrijven met minder dan €50K maandelijks advertentiebudget is uitbesteden kosteneffectiever.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat zijn de kosten van SEA uitbesteden?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                SEA managementkosten variëren meestal tussen 10-20% van je advertentiebudget, met minimale maandelijkse kosten tussen €500-1500. Onze prijzen zijn transparant en afgestemd op jouw budget en complexiteit. Belangrijk: kijk niet alleen naar de managementkosten, maar naar de netto ROI. Een bureau dat 15% rekent maar 50% betere ROAS levert is veel voordeliger dan een bureau met 10% kosten en middelmatige resultaten.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe snel zie ik resultaten van SEA optimization?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Snelle winsten zoals het elimineren van verspilling en voor de hand liggende optimalisaties leveren resultaat binnen 2-4 weken. Substantiële verbeteringen via test en leercycli duren 2-3 maanden. SEA is sneller dan SEO (waar 6+ maanden gebruikelijk is) omdat je direct verkeer inkoopt. Maar duurzame optimalisatie vereist continue verfijning, niet eenmalige instelling.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Moet ik zowel SEO als SEA doen?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Idealiter wel, ze zijn complementair en niet concurrerend. SEO bouwt organisch verkeer op lange termijn op (trage start, groeiende resultaten). SEA levert direct verkeer (meteen aan, stopt als budget stopt). De optimale mix hangt af van: bedrijfsvolwassenheid, cashflow, concurrentie en marges. Begin stadium: SEA voor directe omzet. Gevestigd: forse SEO investering, SEA voor strategische hiaten.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Gratis Groeiscan */}
      <SEOConsultSection />
    </ServicePageTemplate>
  )
}
