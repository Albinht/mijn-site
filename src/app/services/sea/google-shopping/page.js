import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import SEOReviewSlider from '@/components/SEOReviewSlider'
import SEOConsultSection from '@/components/SEOConsultSection'

export const metadata = {
  title: 'Google Shopping Uitbesteden | Niblah',
  description: 'Google Shopping uitbesteden aan specialisten? Jouw producten bovenaan in de zoekresultaten met optimale feed en biedstrategie. Meer verkoop en rendement.',
}

export default function GoogleShoppingPage() {
  const heroData = {
    badge: 'Jouw producten bovenaan in Google',
    title: 'Google Shopping uitbesteden',
    description: 'Wil je jouw producten een podium geven bovenaan in de zoekresultaten van Google? Bij Niblah optimaliseren we je productfeed, biedstrategie en advertenties zodat je profiteert van meetbaar meer verkoop, omzet en rendement. We focussen op winst, niet alleen op verkeer.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* Gemiddeld 127% ROAS verbetering binnen 4 maanden',
    image: '/development-hero.png',
    imageAlt: 'Google Shopping dashboard met productprestaties'
  }

  const optimizationSteps = [
    {
      number: '01',
      title: 'Productfeed optimaliseren',
      description: 'Goede producttitels, juiste categorieën en accurate prijzen. Je feed bepaalt voor 80% je succes in Google Shopping.',
      icon: '📝'
    },
    {
      number: '02',
      title: 'Biedstrategie toepassen',
      description: 'Slim bieden in het veilingmodel van Google. Niet te veel betalen, maar wel hoog genoeg om zichtbaar te zijn.',
      icon: '💰'
    },
    {
      number: '03',
      title: 'Advertentie aantrekkelijk maken',
      description: 'Mooie productfoto\'s, scherpe prijzen en uitgebreide beschrijvingen zorgen voor hogere click-through rates.',
      icon: '✨'
    },
    {
      number: '04',
      title: 'Monitoren en optimaliseren',
      description: 'Continue verbetering van feed, biedingen en productprestaties. E-commerce ontwikkelt snel, blijf optimaliseren.',
      icon: '📊'
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
            Wat kun je verwachten bij <span className="bg-[#1795FF] text-white px-2 rounded">Google Shopping uitbesteden</span>?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Meer dan alleen je producten online zetten
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Meetbaar meer omzet */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                📈
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meetbaar meer omzet</h3>
              <p className="text-gray-600">
                Google Shopping uitbesteden levert meetbaar meer omzet op. Je hebt 24/7 toegang tot het dashboard met resultaten en ontvangt maandelijks een uitgebreide rapportage.
              </p>
            </div>

            {/* Strategisch partner */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategisch partner aan je zijde</h3>
              <p className="text-gray-600">
                Niet zomaar een specialist die aan knoppen draait, maar een team dat je strategisch adviseert. Welke koers vaar je het beste en welke stappen zijn daarvoor nodig?
              </p>
            </div>

            {/* Groei op korte én lange termijn */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Groei op korte én lange termijn</h3>
              <p className="text-gray-600">
                Vliegen je producten als warme broodjes over de toonbank? Voor ons geen reden om achterover te leunen. We zoeken continu naar mogelijkheden voor nóg meer groei.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Google Shopping uitbesteden */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#FFE500] px-2 rounded">Google Shopping uitbesteden</span>?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Je betaalt pas voor je advertentie als iemand erop klikt. Weinig te verliezen dus, zou je denken. Maar eerlijk is eerlijk: ben je onzichtbaar, dan heb je ook helemaal niks te winnen. Het is superfrustrerend als je tijd en moeite steekt in het samenstellen van een productfeed, terwijl het je uiteindelijk niks oplevert.
            </p>
            <p>
              Precies dát is de reden dat veel ondernemers kiezen voor Google Shopping uitbesteden aan een specialist. Een Google Shopping specialist weet precies met welke strategie en productfeed jouw advertentie wél bovenaan komt te staan. En hoe de geïnvesteerde tijd en moeite je daadwerkelijk extra verkoop en omzet oplevert.
            </p>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">De juiste keuze maken</h3>
              <p className="text-gray-700 mb-4">
                Kies je voor een reguliere Shopping Ad met Performance Max, een mix of alleen voor Performance Max? Alle keuzes worden bij ons zorgvuldig afgewogen op basis van jouw specifieke situatie, doelen en budget.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                  <span>Gebaseerd op productcategorie en concurrentie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                  <span>Afgestemd op beschikbaar budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                  <span>Optimaal voor jouw bedrijfsdoelen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is Google Shopping */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Wat is <span className="bg-[#1795FF] text-white px-2 rounded">Google Shopping</span> precies?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Kort gezegd is Google Shopping hét verkoop- en vergelijkingsplatform van Google. Met Google Shopping heb je de mogelijkheid je product met foto en prijs bovenaan in de zoekresultaten te plaatsen als iemand zoekt op een relevante zoekterm.
            </p>
            <p>
              Ter illustratie: googelt iemand bijvoorbeeld op 'witte sneakers', dan kun je ervoor zorgen dat jouw product direct boven in beeld verschijnt. En/of dat hij in het productoverzicht staat als iemand bovenin (onder de zoekbalk) op 'Shopping' klikt.
            </p>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Waarom Google Shopping werkt</h3>
              <p className="text-gray-700 mb-4">
                Met Google Shopping kun je jouw conversiepercentage en omzet fiks verhogen. Mensen oriënteren zich steeds sneller en doen graag zo min mogelijk moeite. Zichtbaar zijn op de juiste plek en op het goede moment is belangrijker dan ooit!
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-2xl flex-shrink-0">👁️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Maximale zichtbaarheid</p>
                    <p className="text-sm text-gray-600">Bovenaan met product én prijs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FFE500] text-2xl flex-shrink-0">🎯</span>
                  <div>
                    <p className="font-semibold text-gray-900">Hoge intentie</p>
                    <p className="text-sm text-gray-600">Mensen die actief op zoek zijn</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-2xl flex-shrink-0">💰</span>
                  <div>
                    <p className="font-semibold text-gray-900">Betaal per klik</p>
                    <p className="text-sm text-gray-600">Alleen kosten bij daadwerkelijke interesse</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FFE500] text-2xl flex-shrink-0">📊</span>
                  <div>
                    <p className="font-semibold text-gray-900">Meetbare resultaten</p>
                    <p className="text-sm text-gray-600">Direct inzicht in ROI en conversies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Hoe product bovenaan komt - 4 stappen */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Dit is hoe jouw product <span className="bg-[#FFE500] px-2 rounded">bovenaan</span> komt te staan
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            De concurrentie is moordend. Waarom zou precies jouw product bovenaan komen? De kunst van scoren met Google Shopping zit hem in een samenspel van:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {optimizationSteps.map((step, index) => (
              <div key={index} className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#1795FF] mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Het houdt niet op na livegang
            </h3>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              Je doet er goed aan je productfeed en biedingen constant in het vizier te houden en te verbeteren. De wereld van e-commerce ontwikkelt zich razendsnel. Alleen door continue optimalisatie blijf je op langere termijn profiteren van goede resultaten.
            </p>
          </div>
        </div>
      </section>

      {/* Wat het oplevert - Horizontal Slider */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Wat Google Shopping uitbesteden <span className="bg-[#FFE500] px-2 rounded">concreet</span> oplevert
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Google Shopping uitbesteden in plaats van het zelf proberen?
          </p>

          <div className="relative">
            {/* Horizontal scroll container */}
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      📈
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Hoger rendement</h3>
                      <p className="text-gray-700">
                        Laat je Google Shopping beheren door een specialist, dan weet je zeker dat je geïnvesteerde euros zorgen voor betere zichtbaarheid. Je behaalt een hoger rendement omdat elke euro slim wordt ingezet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      🛠️
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Beste tools en meest recente kennis</h3>
                      <p className="text-gray-700">
                        Een Google Shopping specialist houdt online ontwikkelingen en Google updates nauwlettend in de gaten én beschikt over de beste tools. Hierdoor blijft jouw productfeed altijd up-to-date en optimaal presteren.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      ⏰
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Tijds- en moeitebesparing</h3>
                      <p className="text-gray-700">
                        Door Google Shopping uit te besteden houd jij tijd over voor de werkzaamheden waar jij écht energie van krijgt. En waar het bedrijf jou het hardste nodig heeft. Focus op waar je goed in bent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      💰
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Focus op marge in plaats van omzet</h3>
                      <p className="text-gray-700">
                        Wij adverteren op producten met de hoogste marges, niet alleen op de duurste producten. Zo maximaliseer je je winst in plaats van alleen je omzet. Slimmer adverteren betekent meer overhouden.
                      </p>
                    </div>
                  </div>
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

      {/* Performance Max vs reguliere Shopping */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Google Shopping of <span className="bg-[#1795FF] text-white px-2 rounded">Performance Max</span> campagnes?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Met Performance Max advertenties heeft Google responsieve advertenties naar een hoger niveau getild. Performance Max is de vervanger van Smart Shopping en we zien positieve resultaten uit dit campagnetype. Met de benodigde input kunnen diverse type campagnes (Shopping, Video, Tekst en Display) in één campagne worden geplaatst.
            </p>
            <p>
              Waar de SEA specialist verantwoordelijk is voor het maken van advertenties, is Google verantwoordelijk voor het beheren van de campagnes. Dit gebeurt op basis van prestaties en jouw doelen, met als doel optimale resultaten te behalen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Reguliere Shopping */}
              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reguliere Shopping</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF] mt-1">✓</span>
                    <span className="text-gray-700">Meer controle over biedingen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF] mt-1">✓</span>
                    <span className="text-gray-700">Inzicht in zoekwoorden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF] mt-1">✓</span>
                    <span className="text-gray-700">Productgroep segmentatie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF] mt-1">✓</span>
                    <span className="text-gray-700">Transparante rapportage</span>
                  </li>
                </ul>
              </div>

              {/* Performance Max */}
              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Max</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span className="text-gray-700">Volledig geautomatiseerd</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span className="text-gray-700">Alle Google kanalen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span className="text-gray-700">AI-gestuurd optimaliseren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span className="text-gray-700">Breder bereik mogelijk</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1795FF] text-white border-2 border-black rounded-xl p-8 mt-8 shadow-[6px_6px_0_0_#000]">
              <p className="text-lg font-semibold text-center">
                Een Performance Max campagne werkt volledig geautomatiseerd aan het behalen van jouw belangrijkste doelstellingen. Het zorgt voor minder controle, maar door de juiste instellingen en optimalisatie kán Performance Max je campagnes naar een hoger niveau tillen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat maakt Niblah uniek */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Niblah als jouw partner: <span className="bg-[#FFE500] px-2 rounded">dit maakt ons uniek</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-[#1795FF] text-2xl">🤝</span>
                Een strategisch partner
              </h3>
              <p className="text-gray-700">
                Je kunt ons zien als een partner die met je meedenkt op strategisch niveau. We doen meer dan Shopping campagnes lanceren. Wat is jouw uiteindelijke doel? En met welke middelen en activiteiten kom je daar? We helpen je bij het uitstippelen van de route naar succes.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-[#FFE500] text-2xl">🎯</span>
                De overkoepelende strategie
              </h3>
              <p className="text-gray-700">
                Besteed je ook andere SEA campagnes, SEO of social ads uit aan ons? Bij ons vind je alle specialismes onder één dak. We stellen een overkoepelende strategie op voor al je online marketing. Door alle uitingen naadloos op elkaar af te stemmen ben je zichtbaar en relevant in iedere fase van de klantreis.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-[#1795FF] text-2xl">🚀</span>
                De focus op langetermijnresultaat
              </h3>
              <p className="text-gray-700">
                Wij kijken verder dan de kansen die voor het grijpen liggen en investeren graag in resultaat op de lange termijn. Door continu een kritische blik te werpen op jouw Google Shopping campagnes én deze te optimaliseren, blijf je ook in de toekomst profiteren van bedrijfsgroei.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="text-[#FFE500] text-2xl">💰</span>
                Focus op winstgevendheid
              </h3>
              <p className="text-gray-700">
                We adverteren op producten met de hoogste marge, niet alleen op de duurste producten. Door te focussen op winstgevendheid in plaats van alleen omzet, maximaliseer je wat je overhoudt. Slimmer adverteren betekent meer verdienen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde <span className="bg-[#FFE500] px-2 rounded">vragen</span>
          </h2>

          <div className="space-y-4">
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat kost Google Shopping uitbesteden?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Wat Google Shopping uitbesteden kost, hangt af van factoren als het aantal uren dat een specialist in jouw campagne investeert en de kosten per klik van jouw advertenties. Het precieze bedrag is moeilijk van tevoren in te schatten. Belangrijk om te beseffen is dat je je investering dubbel en dwars terugverdient door betere resultaten en hoger rendement.
              </p>
            </details>

            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat is het verschil tussen Google Shopping en Google Ads?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Waar Google Shopping echt alleen gaat over adverteren op het Shopping gedeelte van Google, is Google Ads breder dan dat. Google Ads is de overkoepelende term van adverteren op alle kanalen van Google. Dit kan ook gaan over tekstadvertenties in de zoekresultaten van Google of over adverteren op Gmail of YouTube. Google Shopping is dus een onderdeel van Google Ads.
              </p>
            </details>

            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom zou ik Google Shopping inzetten?
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed space-y-3">
                <p>Google Shopping inzetten voor jouw bedrijf laat je profiteren van:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF]">•</span>
                    <span><strong>Betere zichtbaarheid:</strong> Jouw advertentie wordt direct bovenaan in de zoekresultaten getoond als iemand op een relevante zoekterm zoekt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF]">•</span>
                    <span><strong>Meer klikken:</strong> Doordat je zo goed zichtbaar bent, klikken meer mensen door naar jouw website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF]">•</span>
                    <span><strong>Meer verkoop en omzet:</strong> Meer websitebezoekers betekent meer verkoop en natuurlijk meer omzet</span>
                  </li>
                </ul>
              </div>
            </details>

            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe werkt Google Shopping?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Google Shopping kun je zien als een grote online marktplaats. Bedrijven met een webshop uploaden hun assortiment in het Google Merchant Center, en consumenten kunnen Google Shopping gebruiken om eenvoudig producten en verkopers te vergelijken. Google Shopping advertenties kosten geld als een gebruiker erop klikt. Er zijn tegenwoordig ook organische resultaten zichtbaar in het Shopping tabblad waar je niet voor hoeft te betalen. Hoe je daarin gaat ranken? Voortdurende optimalisatie van je productfeed.
              </p>
            </details>

            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Moet ik kiezen voor Performance Max of reguliere Shopping?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Dit hangt af van jouw specifieke situatie. Performance Max biedt meer automatisering en bereik over alle Google kanalen, maar geeft minder controle. Reguliere Shopping geeft meer inzicht en controle over biedingen en zoekwoorden. We adviseren vaak om te starten met reguliere Shopping om data te verzamelen, en daarna Performance Max toe te voegen voor extra schaal. De beste aanpak bepalen we samen op basis van jouw doelen en budget.
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
