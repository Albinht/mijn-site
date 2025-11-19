import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import SEOReviewSlider from '@/components/SEOReviewSlider'
import SEOConsultSection from '@/components/SEOConsultSection'

export const metadata = {
  title: 'Bing Ads Uitbesteden | Niblah',
  description: 'Bing Ads uitbesteden aan specialisten? Lagere kosten, minder concurrentie en hoogwaardige clicks. Bereik 98% van alle zoekers met Bing + Google Ads.',
}

export default function BingAdsPage() {
  const heroData = {
    badge: 'Lagere kosten, hoogwaardige clicks',
    title: 'Bing Ads uitbesteden',
    description: 'Wil je adverteren met lagere kosten per klik en minder concurrentie? Bing Ads biedt toegang tot een waardevol publiek dat gemiddeld 32% meer uitgeeft bij online aankopen. Bij Niblah zetten we slimme Bing Ads campagnes op die perfect aansluiten bij je Google Ads strategie.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* Gemiddeld 30% lagere kosten per klik dan Google Ads',
    image: '/development-hero.png',
    imageAlt: 'Bing Ads dashboard met campagneresultaten'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Wat kun je verwachten */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Wat kun je verwachten bij <span className="bg-[#1795FF] text-white px-2 rounded">Bing Ads uitbesteden</span>?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Bing Ads is vaak bijvangst, maar benut jij het wel slim?
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Lage adverteerkosten */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lage adverteerkosten</h3>
              <p className="text-gray-600">
                Vind je adverteren via Google Ads te prijzig? Adverteer via Bing! Zoekers via Bing geven 32% meer uit bij online aankopen via desktop dan gemiddelde kopers via internet.
              </p>
            </div>

            {/* Snel meer bezoekers */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Snel meer bezoekers</h3>
              <p className="text-gray-600">
                Adverteren is dé manier om snel meer bezoekers naar je website te krijgen. Wil je effectief adverteren via Bing Ads? We helpen je graag bij je campagne!
              </p>
            </div>

            {/* Flexibele overeenkomsten */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🤝
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexibele samenwerking</h3>
              <p className="text-gray-600">
                Twijfel je over het uitbesteden van Bing Ads? Onze samenwerking is flexibel. Ben je niet tevreden, dan kun je maandelijks je overeenkomst opzeggen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt Bing Ads */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Hoe werkt <span className="bg-[#FFE500] px-2 rounded">Bing Ads</span>?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Als je op Bing Ads adverteert, kun je zelf kiezen bij welk publiek je je advertenties onder de aandacht wilt brengen. Dit doe je door zelf zoekwoorden te selecteren die relevant zijn voor jouw aanbod. Als een zoeker deze zoekwoorden gebruikt, krijgt hij jouw bijpassende advertentie te zien.
            </p>
            <p>
              Dit is dus een doelgerichte manier van adverteren: je toont je advertenties enkel aan publiek dat actief interesse toont in jouw product of dienst. De zoeker ziet jouw advertentie op precies het juiste moment, namelijk op het moment dat hij naar jouw product op zoek is.
            </p>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gericht adverteren op Bing, Yahoo en MSN</h3>
              <p className="text-gray-700 mb-4">
                Bij Bing Advertising worden je advertenties geplaatst boven of naast de zoekresultaten op Bing, Yahoo en MSN. Je kunt je advertenties zo instellen dat ze op bepaalde tijden van de dag of dagen van de week worden getoond.
              </p>
              <p className="text-gray-700">
                Daarnaast kun je je gewenste publiek selecteren aan de hand van bijvoorbeeld de geografische regio waarin de zoeker zich bevindt, of op basis van demografische gegevens zoals leeftijd en geslacht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Voordelen van Bing Ads - Horizontal Slider */}
      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Voordelen van <span className="bg-[#1795FF] text-white px-2 rounded">Bing Ads uitbesteden</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Meer leads en omzet binnenhalen met Bing Ads
          </p>

          <div className="relative">
            {/* Horizontal scroll container */}
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      💸
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Lagere kosten per klik</h3>
                      <p className="text-gray-700">
                        De kosten van Bing Ads liggen lager dan die van Google Ads, doordat Bing Ads minder gebruikers heeft en je dus met minder concurrentie te maken hebt. Gemiddeld 30% lagere CPC.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      💰
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Hoogwaardige kopers</h3>
                      <p className="text-gray-700">
                        Zoekers via Bing Network geven 32% meer uit aan online aankopen via hun computer dan de gemiddelde zoeker op internet. Kwalitatief publiek met koopkracht.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      🔗
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Koppeling met Google Ads</h3>
                      <p className="text-gray-700">
                        Bing Ads is te koppelen aan Google Ads. Zo is je bereik met één campagne groter, omdat je via beide platforms adverteert. Meer resultaat van je werk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      🌍
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">98% bereik samen</h3>
                      <p className="text-gray-700">
                        Als je Bing Ads koppelt aan Google Ads en via beide platforms adverteert, bereik je ongeveer 98% van het totale aantal zoekers. Maximaal online bereik.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Minder concurrentie</h3>
                      <p className="text-gray-700">
                        Doordat minder bedrijven op Bing adverteren, is er minder concurrentie. Dit betekent lagere kosten én betere posities voor jouw advertenties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      👔
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">B2B publiek</h3>
                      <p className="text-gray-700">
                        Bing wordt veel gebruikt door zakelijke gebruikers en beslissers. Ideaal voor B2B campagnes die professionals willen bereiken.
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

      {/* Waarom Bing Ads naast Google Ads */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#FFE500] px-2 rounded">Bing Ads</span> naast Google Ads?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Veel bedrijven focussen zich volledig op Google Ads en laten Bing Ads links liggen. Dat is een gemiste kans. Bing Ads biedt toegang tot een waardevol publiek tegen lagere kosten, en kan perfect worden geïntegreerd met je bestaande Google Ads strategie.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Kostenvoordeel */}
              <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#1795FF] text-2xl">💸</span>
                  Kostenvoordeel
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF] mt-1">✓</span>
                    <span>30% lagere kosten per klik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF] mt-1">✓</span>
                    <span>Minder concurrentie op zoekwoorden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF] mt-1">✓</span>
                    <span>Lagere minimumbiedingen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1795FF] mt-1">✓</span>
                    <span>Betere ROI mogelijk</span>
                  </li>
                </ul>
              </div>

              {/* Extra bereik */}
              <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-[#FFE500] text-2xl">🌐</span>
                  Extra bereik
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span>Bing, Yahoo en MSN netwerk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span>Bereik ouder en welvarender publiek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span>Zakelijke gebruikers en professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span>98% totaalbereik met Google Ads</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1795FF] text-white border-2 border-black rounded-xl p-8 mt-8 shadow-[6px_6px_0_0_#000]">
              <p className="text-lg font-semibold text-center">
                Door Bing Ads te combineren met Google Ads vergroot je niet alleen je bereik, maar profiteer je ook van diversificatie. Je bent niet afhankelijk van één platform en kunt je budget optimaal spreiden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bing Ads uitbesteden aan Niblah */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Bing Ads uitbesteden aan <span className="bg-[#FFE500] px-2 rounded">Niblah</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Bij Niblah zijn we niet alleen Google Ads specialisten, maar ook thuis in Bing Ads. Als gespecialiseerd SEA bureau maken we graag een succes van jouw campagne op Bing Ads. Onze SEA specialisten hebben een neus voor sterke strategieën en halen het maximum uit je budget.
            </p>

            <div className="space-y-6 mt-8">
              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-[#1795FF] text-2xl">🎯</span>
                  Strategische integratie
                </h3>
                <p className="text-gray-700">
                  We integreren Bing Ads naadloos met je Google Ads strategie. Door campagnes slim te koppelen en te synchroniseren, maximaliseer je je bereik zonder dubbel werk. Dezelfde keywords, advertenties en doelen, maar op meerdere platforms.
                </p>
              </div>

              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-[#FFE500] text-2xl">📊</span>
                  Data-gedreven optimalisatie
                </h3>
                <p className="text-gray-700">
                  We monitoren de prestaties van je Bing Ads campagnes continu en optimaliseren op basis van data. Welke zoekwoorden presteren beter op Bing dan op Google? We passen je strategie daarop aan voor maximaal rendement.
                </p>
              </div>

              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-[#1795FF] text-2xl">💰</span>
                  Budget efficiency
                </h3>
                <p className="text-gray-700">
                  Door slim budget te verdelen over Google Ads en Bing Ads, haal je meer uit je totale advertentiebudget. We zorgen ervoor dat elke euro optimaal wordt besteed, met focus op conversies en ROI in plaats van alleen verkeer.
                </p>
              </div>

              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-[#FFE500] text-2xl">🚀</span>
                  Flexibele samenwerking
                </h3>
                <p className="text-gray-700">
                  We bieden flexibele overeenkomsten. Twijfel je nog over Bing Ads? Start klein en schaal op als het resultaat oplevert. Niet tevreden? Dan kun je maandelijks opzeggen. Geen langdurige verplichtingen, alleen resultaatgerichte samenwerking.
                </p>
              </div>
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
                Hoe werkt Bing Ads en hoe kan ik mijn doelgroep bereiken?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Bij Bing Ads kun je zelf selecteren welk publiek je wilt bereiken door relevante zoekwoorden te kiezen. Als een zoeker deze zoekwoorden gebruikt, wordt jouw bijpassende advertentie getoond. Dit zorgt voor doelgericht adverteren, waarbij je jouw advertentie op het juiste moment aan potentiële klanten laat zien wanneer ze actief interesse tonen in jouw product of dienst. Je kunt ook targeten op locatie, tijd van de dag en demografische gegevens.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat zijn de voordelen van het uitbesteden van Bing Ads aan Niblah?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Het uitbesteden van Bing Ads aan Niblah heeft verschillende voordelen. De kosten van Bing Ads liggen gemiddeld 30% lager dan Google Ads door minder concurrentie. Zoekers via het Bing Network geven gemiddeld 32% meer uit aan online aankopen. Daarnaast integreren we Bing Ads naadloos met je Google Ads strategie, waardoor je met gecombineerde campagnes ongeveer 98% van alle zoekers kunt bereiken. We zorgen voor strategische afstemming, data-gedreven optimalisatie en maximale ROI.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Kan ik mijn Bing Ads campagne flexibel uitbesteden aan Niblah?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Ja, Niblah biedt flexibele overeenkomsten voor het uitbesteden van Bing Ads. Als je twijfelt over het uitbesteden, kun je maandelijks je overeenkomst opzeggen als je niet tevreden bent. Dit geeft je de vrijheid en flexibiliteit om de samenwerking aan te passen aan jouw behoeften en resultaten. We geloven in resultaten, niet in langdurige verplichtingen.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom zou ik Bing Ads naast Google Ads inzetten?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Bing Ads biedt toegang tot een waardevol publiek tegen lagere kosten. Door Bing Ads te combineren met Google Ads bereik je 98% van alle online zoekers, terwijl je profiteert van lagere kosten per klik op Bing. Bovendien zijn Bing gebruikers vaak ouder, welvarender en zakelijker, wat vooral voor B2B interessant is. Je diversifieert je advertentie-inspanning en bent niet afhankelijk van één platform.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe koppel je Bing Ads aan Google Ads?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Bing Ads biedt een import functie waarmee je bestaande Google Ads campagnes direct kunt importeren. Dit betekent dat je niet alles opnieuw hoeft in te stellen. We kunnen je zoekwoorden, advertenties, biedingen en targeting overnemen van Google Ads naar Bing Ads. Vervolgens optimaliseren we beide platforms afzonderlijk, omdat wat werkt op Google niet altijd hetzelfde presteert op Bing. Zo maximaliseer je resultaat op beide platforms met minimaal extra werk.
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
