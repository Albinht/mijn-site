import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import SEOReviewSlider from '@/components/SEOReviewSlider'
import ProcessSlider from '@/components/ProcessSlider'
import SEOConsultSection from '@/components/SEOConsultSection'

export const metadata = {
  title: 'Google Ads Uitbesteden | Niblah',
  description: 'Google Ads uitbesteden aan specialisten? Lanceer campagnes die relevant zijn in elke fase van de klantreis. Genereer meer bezoekers, leads en winst.',
}

export default function GoogleAdsPage() {
  const heroData = {
    badge: 'Campagnes die écht aansturen op groei',
    title: 'Google Ads uitbesteden',
    description: 'Wil je Google Ads campagnes die winstgevend zijn en strategisch bijdragen aan je bedrijfsdoelen? Bij Niblah krijg je meer dan campagnebeheer: je krijgt een partner die meedenkt over je totaalstrategie, budget optimaliseert voor maximale winst en advertenties afstemt op elke fase van de klantreis.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* Gemiddeld 40% meer winst uit hetzelfde advertentiebudget',
    image: '/development-hero.png',
    imageAlt: 'Google Ads dashboard met campagneresultaten'
  }

  const processSteps = [
    {
      number: '01',
      title: 'Groeiscan & Analyse',
      description: 'We brengen je huidige situatie in kaart: welke resultaten behaal je nu, waar liggen gemiste kansen en wat is het potentieel?'
    },
    {
      number: '02',
      title: 'Kick-off & Strategie',
      description: 'In een kick-off vertel jij over je bedrijf en wensen. We doen zoekwoordenonderzoek en maken een plan van aanpak afgestemd op jouw doelen.'
    },
    {
      number: '03',
      title: 'Campagne-inrichting',
      description: 'We richten Google Ads campagnes in met exacte targeting, relevante zoekwoorden en advertenties voor elke fase van de klantreis.'
    },
    {
      number: '04',
      title: 'Optimalisatie & Testing',
      description: 'Maandelijks analyseren we resultaten, testen we varianten en optimaliseren we voor betere performance de volgende maand.'
    },
    {
      number: '05',
      title: 'Strategische Evaluatie',
      description: 'Elk kwartaal bespreken we je resultaten en ambities. Welke rol spelen Google Ads, SEO en CRO in je groeistrategie?'
    },
    {
      number: '06',
      title: 'Schalen & Groeien',
      description: 'Op basis van bewezen resultaten schalen we succesvolle campagnes op en breiden we uit naar nieuwe kansen.'
    }
  ]

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Wat kun je verwachten */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Wat kun je verwachten bij <span className="bg-[#1795FF] text-white px-2 rounded">Google Ads uitbesteden</span>?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Meer dan alleen campagnes draaien
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Strategisch advies */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                💡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategisch advies</h3>
              <p className="text-gray-600">
                Google Ads is voor ons meer dan het draaien aan knoppen. We denken strategisch mee over hoe advertenties je bedrijfsdoelen helpen behalen en passen ze aan op wat er speelt in je bedrijf.
              </p>
            </div>

            {/* Focus op winst */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                📈
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Focus op winst</h3>
              <p className="text-gray-600">
                We focussen op winst, niet alleen op omzet. Dat betekent dat we soms adverteren op laag geprijsde producten met hogere marges in plaats van dure producten met lage marges.
              </p>
            </div>

            {/* Flexibele samenwerking */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexibele samenwerking</h3>
              <p className="text-gray-600">
                Bij ons profiteer je van een flexibele samenwerking. Je blijft alleen als de samenwerking écht goed voelt en resultaten oplevert die je verwacht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads uitbesteden aan Niblah */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Google Ads uitbesteden aan <span className="bg-[#FFE500] px-2 rounded">Niblah</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Een campagne die superwinstgevend is. En waarbij je iedere geïnvesteerde euro dubbel en dwars terugverdient. Dat krijg je als je Google Ads aan ons uitbesteedt. Want waar je als marketingmanager of ondernemer misschien zelf ook wel snapt hoe je advertenties online plaatst, doen wij dat weloverwogen en met een strategisch plan.
            </p>
            <p>
              Wat dat in de praktijk inhoudt? We zoeken tot in de puntjes uit hoe je jouw POAS (winst op advertentiekosten) zo hoog mogelijk krijgt of jouw CPA zo laag mogelijk houdt. We stemmen advertenties af op de klantreis, zodat je altijd superrelevant bent. En als je ook andere online marketingdiensten bij ons afneemt, profiteer je van een overkoepelende en ijzersterke strategie.
            </p>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 mt-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Waarom een Google Ads specialist?</h3>
              <p className="text-gray-700 mb-4">
                Google Ads uitbesteden kost geld. Waarom zou je er niet voor kiezen om zelf aan de knoppen te zitten? Simpel antwoord: met een Google Ads specialist haal je meer winst uit je campagne. Ook al investeer je budget in zo'n specialist, onderaan de streep pluk je er de vruchten van.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                  <span>Is continu bezig met jouw Google Ads campagnes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                  <span>Kijkt naar kansen op andere kanalen voor meer rendement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                  <span>Is op de hoogte van ontwikkelingen in de markt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                  <span>Denkt strategisch mee als sparringpartner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Klanten werven via Google Ads */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Klanten werven via <span className="bg-[#1795FF] text-white px-2 rounded">Google Ads</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Iedere klant is anders en elk bedrijf heeft een andere aanpak nodig. Maar het doel van een Google Ads campagne is altijd hetzelfde: extra klanten en kwalitatieve leads werven voor jouw bedrijf én uiteindelijk je winst vergroten.
            </p>
            <p>
              Als specialisten met rijke kennis van het vak, hebben we dit doel al voor vele klanten behaald. Ons SEA team weet alles van:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Zoekgedrag & doelgroepen</h3>
                  <p className="text-gray-600 text-sm">
                    Het zoekgedrag van verschillende doelgroepen en hoe je hier effectief op inspringt met advertenties
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  🛤️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Customer journey</h3>
                  <p className="text-gray-600 text-sm">
                    De klantreis en hoe je in elke fase effectief kunt inspelen met relevante advertenties
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  ⚙️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Google algoritme</h3>
                  <p className="text-gray-600 text-sm">
                    Googles algoritme en hoe je die in jouw voordeel laat werken door accurate data te verstrekken
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  🚀
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Nieuwe functies & trends</h3>
                  <p className="text-gray-600 text-sm">
                    Nieuwe Google Ads functies en de laatste ontwikkelingen in online marketing
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  📊
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Conversieoptimalisatie</h3>
                  <p className="text-gray-600 text-sm">
                    CRO: hoe je ook op je website stuurt op conversie en leads optimaliseert
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  💰
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Winstoptimalisatie</h3>
                  <p className="text-gray-600 text-sm">
                    Focus op marges en winst in plaats van alleen omzet en verkeer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat maakt Niblah uniek */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Wat maakt <span className="bg-[#FFE500] px-2 rounded">Niblah</span> uniek?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Waarom specifiek kiezen voor Niblah als je Google Ads uitbesteedt?
          </p>

          <div className="space-y-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-[#1795FF] text-2xl">🎯</span>
                Holistische aanpak
              </h3>
              <p className="text-gray-700">
                Zet je ook SEO, social ads of conversieoptimalisatie in? Dan stemmen we alle activiteiten naadloos op elkaar af voor een ijzersterke, overkoepelende strategie die alle kanalen laat samenwerken.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-[#FFE500] text-2xl">🤝</span>
                Strategische partner
              </h3>
              <p className="text-gray-700">
                Je krijgt er direct een strategische partner bij. Naast vlijmscherpe campagnes denken we op strategisch vlak mee. We helpen je graag je ambities en bedrijfsdoelen te verwezenlijken.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-[#1795FF] text-2xl">💰</span>
                Winst boven omzet
              </h3>
              <p className="text-gray-700">
                De focus ligt bij ons op winst, niet op omzet. We adverteren op producten met de hoogste marge in plaats van blind te focussen op hoog geprijsde producten. Zo maximaliseer je je brutomarge.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-[#FFE500] text-2xl">🚀</span>
                Concurrentievoordeel
              </h3>
              <p className="text-gray-700">
                Onze Ads specialisten weten exact welke data Googles algoritme nodig heeft om je advertenties optimaal te tonen. Denk aan omzetgegevens, margedata, retourdata en variabele kosten per product.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-[#1795FF] text-2xl">🛤️</span>
                Relevant in de hele klantreis
              </h3>
              <p className="text-gray-700">
                Door diverse kanalen op elkaar af te stemmen, ben je relevant in de gehele klantreis. Je doelgroep ziet altijd de juiste boodschap op het juiste moment, afgestemd op hun fase in het koopproces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Stappen Process */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            In 6 stappen naar <span className="bg-[#FFE500] px-2 rounded">succesvolle Google Ads</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Zo werken we samen aan jouw groeistrategie
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="text-5xl font-bold text-[#1795FF] mb-4 opacity-20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom Google Ads */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">Google Ads</span> campagnes opzetten?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Waarom je er als bedrijf goed aan doet te adverteren via Google Ads? In de eerste plaats omdat je hiermee opvalt en écht in beeld komt bij je doelgroep. Googelt iemand op een zoekterm waarop jij adverteert, dan komt jouw advertentie boven de organische zoekresultaten te staan. Daar waar hij het allermeest opvalt.
            </p>
            <p>
              Maakt iemand vervolgens gebruik van een andere website of app van Google zoals YouTube of Gmail, dan stel je diegene wéér bloot aan jouw advertentie. Via Google Ads adverteer je namelijk op alle kanalen van Google. Dit is dé manier om vaak en opvallend in beeld te komen bij je doelgroep.
            </p>
            
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supergerichte campagnes</h3>
              <p className="text-gray-700 mb-4">
                Google Ads is een supergerichte methode van campagne voeren. Niet alleen kies je zelf de zoekwoorden waarop je adverteert, je target ook op een specifieke doelgroep:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2">
                  <span className="text-[#1795FF]">✓</span>
                  <span>Leeftijd en geslacht</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1795FF]">✓</span>
                  <span>Woonplaats en regio</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1795FF]">✓</span>
                  <span>Interesses en hobbys</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1795FF]">✓</span>
                  <span>Levensfase en werk</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1795FF]">✓</span>
                  <span>Websitegedrag</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1795FF]">✓</span>
                  <span>Eerdere bezoekers (remarketing)</span>
                </li>
              </ul>
            </div>

            <p>
              Het is ook mogelijk specifiek te targeten op websiteverlaters: mensen die jouw website al hebben bezocht, maar niet tot conversie zijn overgegaan. Door hen opnieuw bloot te stellen aan jouw advertentie, trek je ze vaak alsnog over de streep.
            </p>
          </div>
        </div>
      </section>

      {/* Werkzaamheden - Horizontal Scroller */}
      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Werkzaamheden van een <span className="bg-[#FFE500] px-2 rounded">Google Ads specialist</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Dit nemen we van je uit handen om je winstmarge te verhogen
          </p>

          <div className="relative">
            {/* Horizontal scroll container */}
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#1795FF] text-3xl flex-shrink-0">🔍</span>
                  <p className="text-gray-700">
                    De markt waarin jouw bedrijf zich bevindt grondig onderzoeken op zoekwoordgebruik en zoekgedrag
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#FFE500] text-3xl flex-shrink-0">💰</span>
                  <p className="text-gray-700">
                    Achterhalen op welke manier je budget het meest efficiënt kunt besteden voor maximaal rendement
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#1795FF] text-3xl flex-shrink-0">⭐</span>
                  <p className="text-gray-700">
                    De kwaliteit van advertenties bewaken: hoe hoger de kwaliteit, hoe lager de kosten per klik
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#FFE500] text-3xl flex-shrink-0">📊</span>
                  <p className="text-gray-700">
                    Google voorzien van accurate data (omzet, retour, marge, offertes) zodat het algoritme optimaal werkt
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#1795FF] text-3xl flex-shrink-0">🎯</span>
                  <p className="text-gray-700">
                    Campagnes lanceren afgestemd op elke fase van de klantreis voor maximale relevantie
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#FFE500] text-3xl flex-shrink-0">🔬</span>
                  <p className="text-gray-700">
                    Campagnes testen, resultaten analyseren en advertenties continu optimaliseren
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#1795FF] text-3xl flex-shrink-0">🚀</span>
                  <p className="text-gray-700">
                    Advies over conversieoptimalisatie (CRO) om je website conversiegerichter te maken
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#FFE500] text-3xl flex-shrink-0">🤝</span>
                  <p className="text-gray-700">
                    Samenwerking met andere kanalen (SEO, social) voor een vlijmscherpe totaalstrategie
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#1795FF] text-3xl flex-shrink-0">📈</span>
                  <p className="text-gray-700">
                    Maandelijkse rapportages over behaalde resultaten en inzichten
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 snap-start">
                <div className="flex items-start gap-4 bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <span className="text-[#FFE500] text-3xl flex-shrink-0">💡</span>
                  <p className="text-gray-700">
                    Periodieke strategiesessies om ambities, resultaten en bedrijfsdoelen te bespreken
                  </p>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="text-center mt-4 text-sm text-gray-500">
              ← Scroll voor meer →
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde <span className="bg-[#FFE500] px-2 rounded">vragen</span>
          </h2>

          <div className="space-y-4">
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat kost Google Ads?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Wat Google Ads precies kost, hangt af van meerdere factoren. Bijvoorbeeld van hoeveel budget je in advertenties wilt steken en wat je betaalt per klik. Google Ads werkt met een pay-per-click systeem: je betaalt pas als iemand op je advertentie klikt. De kosten per klik verschillen per advertentie. Adverteer je op een populaire zoekterm met veel concurrentie, dan kost het meer dan bij een zoekterm met weinig concurrentie. Ook betaal je vaak minder per klik als de kwaliteit van je advertentie hoger is.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat is Google Ads (voorheen Google AdWords)?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Google Ads, vroeger Google AdWords genaamd, is het advertentieplatform van Google. Dit platform maakt het mogelijk om op alle Google websites betaalde advertenties te plaatsen en deze te laten zien aan een selecte groep mensen die je zelf definieert. Doe je het goed, dan kun je met Google Ads je naamsbekendheid laten groeien, extra websitebezoekers genereren en je omzet en winst vergroten. De naam Google AdWords is sinds juli 2018 vervangen door Google Ads.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waar moet ik op letten als ik een Ads specialist zoek?
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed space-y-3">
                <p>
                  Wil je Google Ads uitbesteden en zoek je de perfecte partij? Let op deze punten:
                </p>
                <p>
                  <strong>Specialisme:</strong> Een specialist heeft een specialisme en blijft daarbij. Net zoals je voor een mooi boeket naar de bloemist gaat in plaats van de supermarkt. Een specialist focust zich op zijn expertisegebied.
                </p>
                <p>
                  <strong>Reviews:</strong> Wie kan je een betrouwbaarder beeld geven dan de klanten zelf? Lees reviews over bedrijven waarmee je overweegt samen te werken. Een hoge rating en enthousiaste klantervaringen komen van tevreden klanten.
                </p>
                <p>
                  <strong>Certificeringen & awards:</strong> Kijk of een bedrijf certificeringen, partnerships of nominaties heeft. Dit zijn onafhankelijke factoren waar een bedrijf weinig invloed op heeft, omdat het initiatief van externe partijen moet komen.
                </p>
              </div>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe snel zie ik resultaten van Google Ads?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Google Ads levert sneller resultaten dan bijvoorbeeld SEO. Zodra je campagnes live gaan, kun je direct verkeer en conversies genereren. De eerste 2-4 weken zijn vooral bedoeld voor data verzamelen en eerste optimalisaties. Na 1-2 maanden zie je substantiële verbeteringen als we testen, leren en optimaliseren. Voor maximale resultaten rekenen we op 3-6 maanden continue verfijning en schaalbare groei.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat is het verschil tussen SEO en Google Ads?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                SEO (Search Engine Optimization) richt zich op organische zoekresultaten en duurt langer (6+ maanden) maar bouwt langetermijn verkeer op zonder directe kosten per bezoeker. Google Ads (SEA) levert direct verkeer en conversies zodra je budget investeert, maar stopt zodra je stopt met adverteren. Idealiter combineer je beide: SEO voor langetermijn groei, Google Ads voor directe resultaten en strategische hiaten.
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
