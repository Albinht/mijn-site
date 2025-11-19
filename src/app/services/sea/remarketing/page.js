import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import SEOReviewSlider from '@/components/SEOReviewSlider'
import SEOConsultSection from '@/components/SEOConsultSection'

export const metadata = {
  title: 'Remarketing Uitbesteden | Niblah',
  description: 'Remarketing uitbesteden aan specialisten? 70% hogere conversiekans door bezoekers opnieuw te bereiken. Gepersonaliseerde advertenties die converteren.',
}

export default function RemarketingPage() {
  const heroData = {
    badge: '70% hogere conversiekans',
    title: 'Remarketing uitbesteden',
    description: 'Wordt een consument geconfronteerd met remarketing? Dan is de kans 70% groter dat hij tot conversie overgaat! Remarketing is een manier van gepersonaliseerd adverteren die websitebezoekers terug de sales funnel in trekt. Bij Niblah zetten we slimme remarketing in die niet opdringerig is, maar wel effectief.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* Gemiddeld 2-3x hogere conversieratio met remarketing',
    image: '/development-hero.png',
    imageAlt: 'Remarketing dashboard met campagneresultaten'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Wat kun je verwachten */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Wat kun je verwachten bij <span className="bg-[#1795FF] text-white px-2 rounded">Remarketing uitbesteden</span>?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Je volgt bezoekers. Maar converteren ze ook?
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Meer winst */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meer winst uit je advertenties</h3>
              <p className="text-gray-600">
                Remarketing is dé manier om een hogere return on investment (ROI) te realiseren met je advertenties. Bereik bezoekers die al interesse toonden tegen lagere kosten.
              </p>
            </div>

            {/* Naamsbekendheid */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Naamsbekendheid</h3>
              <p className="text-gray-600">
                Met goed afgestemde advertenties zorg je ervoor dat je websitebezoekers jou niet zo snel zullen vergeten. Top of mind blijven bij je doelgroep.
              </p>
            </div>

            {/* Geen omkijken naar */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Geen omkijken naar</h3>
              <p className="text-gray-600">
                De specialisten van Niblah regelen de remarketing campagnes voor jou, terwijl jij doet waar jij goed in bent. Win-win situatie!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is remarketing */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Wat is <span className="bg-[#FFE500] px-2 rounded">remarketing</span>?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Remarketing (ook wel retargeting genoemd) is een manier van gericht adverteren waarmee je je bedrijf, producten of diensten nogmaals onder de aandacht brengt van mensen die er al interesse in hebben getoond.
            </p>
            <p>
              Een gebruiker die jouw website heeft bezocht, heeft hoogstwaarschijnlijk interesse in wat jij aanbiedt. Met een remarketing campagne breng je dat nogmaals bij hem onder de aandacht in de vorm van advertenties.
            </p>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Waarom remarketing?</h3>
              <p className="text-gray-700 mb-4">
                Slechts een fractie van de mensen gaat bij het eerste bezoek aan een website al over tot conversie. Dat kan aan een heleboel dingen liggen: misschien zijn ze nog aan het vergelijken tussen verschillende webshops, brandde het eten aan of sloeg er een stop door.
              </p>
              <p className="text-gray-700">
                Het resultaat is hetzelfde: het aankoopproces wordt onderbroken. Aan jou de taak om er weer een kickstart aan te geven, zodat de klant terugkeert naar jouw website. En dat doe je met remarketing.
              </p>
            </div>

            <p className="font-semibold text-gray-900">
              Remarketing is een perfecte marketingtechniek om die potentiële klanten terug de sales funnel in te trekken en je conversieratio op te krikken.
            </p>
            <p>
              De advertenties zijn doelgericht en gepersonaliseerd (maar niet té, anders worden consumenten er ongemakkelijk van) en triggeren de gebruiker daarom meer dan een reguliere advertentie. De consument wordt door zulke specifieke advertenties sneller geactiveerd. Het kan net dat beetje extra zijn om iemand over de streep te trekken!
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Remarketing in de praktijk */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Remarketing <span className="bg-[#1795FF] text-white px-2 rounded">in de praktijk</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Een praktijkvoorbeeld om het concreet te maken
          </p>

          <div className="space-y-8">
            {/* Scenario 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Het eerste bezoek</h3>
                  <p className="text-gray-700">
                    Je ziet je door gras overgroeide tuinpad amper meer en besluit dat het tijd is voor een grasmaaier. Je googelt op "grasmaaier" en komt terecht op een webwinkel. Na wat rondklikken weet je welk type je wilt. Dan staat de hond je verwachtingsvol aan te kijken voor een wandeling. Je sluit je browser af en staakt je zoekactie.
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-xl flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Een extra duwtje in de rug</h3>
                  <p className="text-gray-700">
                    Twee dagen later erger je je weer aan het lange gras. Je googelt weer op "grasmaaier kopen" en het eerste wat je ziet, is een advertentie van de website waar je vorige keer op terechtkwam. De advertentie prijst precies de grasmaaier aan die jij op het oog had. Dat doet een belletje rinkelen! Je klikt op de advertentie en 2 minuten later reken je af.
                  </p>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Was je vergeten dat je een grasmaaier nodig had?</h3>
                  <p className="text-gray-700">
                    Als je twee dagen later niet opnieuw aan het gras denkt, zie je misschien een banner advertentie op een andere website. Het bedrijf vertoont daar een remarketing advertentie met jouw favoriete grasmaaier. Zo word je eraan herinnerd dat je bezig was met een aankoop. De kans is groot dat je opnieuw naar de website navigeert en daar je grasmaaier aanschaft!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1795FF] text-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <p className="text-lg font-semibold text-center">
                Omdat je de website al bezocht had, wist het bedrijf dat je geïnteresseerd bent én in welk specifiek model. Met remarketing krijg je het perfecte duwtje in de rug om toch te kopen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt remarketing */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Hoe werkt <span className="bg-[#FFE500] px-2 rounded">remarketing</span>?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Remarketing werkt als volgt:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="text-4xl mb-3 text-center">👋</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Stap 1</h3>
                <p className="text-gray-700 text-center">
                  Iemand bezoekt jouw website, maar gaat weg voordat hij tot conversie overgaat
                </p>
              </div>

              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="text-4xl mb-3 text-center">🎯</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Stap 2</h3>
                <p className="text-gray-700 text-center">
                  Jij stuurt gericht advertenties naar die persoon op verschillende platforms
                </p>
              </div>

              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <div className="text-4xl mb-3 text-center">✅</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Stap 3</h3>
                <p className="text-gray-700 text-center">
                  In het ideale geval doet die persoon toch nog een aankoop bij jou
                </p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 mt-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wat zijn remarketing tags?</h3>
              <p className="text-gray-700 mb-4">
                Maar hoe onthouden je website en het advertentieplatform wie er op jouw website is langsgekomen? Met remarketing tags (ook wel remarketing pixels genoemd).
              </p>
              <p className="text-gray-700 mb-4">
                Een remarketing tag is een scriptje dat je op elke pagina van je website plaatst. Met dit scriptje worden de gegevens van je websitebezoekers geanonimiseerd opgeslagen in een remarketinglijst. Denk aan informatie zoals:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">•</span>
                  <span className="text-gray-700">Welke producten heeft iemand bekeken?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">•</span>
                  <span className="text-gray-700">Waar kwam hij vandaan?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1795FF] mt-1">•</span>
                  <span className="text-gray-700">Hoe lang hebben ze op jouw website rondgehangen?</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Met deze informatie kun je je vroegere bezoekers later nog eens gericht benaderen met een advertentie. Je kunt met segmentatie aan de slag om de advertenties zo effectief mogelijk te maken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamische remarketing */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Wat is <span className="bg-[#FFE500] px-2 rounded">dynamische remarketing</span>?
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Dynamische remarketing gaat nog een stapje verder dan reguliere remarketing. Met dynamische remarketing toon je namelijk exact díe producten waar een potentiële klant al interesse in heeft getoond.
            </p>
            <p>
              Met dynamische remarketing volg je precies wat bezoekers van je website doen en welke pagina's ze bekijken. Door deze informatie slim in te zetten, kun je heel specifieke advertenties laten zien aan deze potentiële klanten. Je stemt de advertentie precies af op de situatie van een geïnteresseerde consument.
            </p>

            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Voorbeeld: Online kledingzaak</h3>
              <p className="text-gray-700 mb-4">
                Run je bijvoorbeeld een online kledingzaak? Stel dat iemand enkel naar sportkleding heeft gekeken, of alleen naar een bepaald merk heeft gezocht. In zo'n situatie toon je met dynamische remarketing advertenties waarin sportkleding of dat bepaalde merk prominent aanwezig is.
              </p>
              <p className="text-gray-700">
                Zo trigger je een eerdere websitebezoeker om terug te keren naar jouw website en dit keer wel tot aankoop over te gaan. Veel effectiever dan algemene advertenties!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remarketing kanalen - Horizontal Slider */}
      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-[#1795FF] text-white px-2 rounded">Remarketing kanalen</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Er zijn verschillende kanalen waarop je remarketing advertenties kunt vertonen
          </p>

          <div className="relative">
            {/* Horizontal scroll container */}
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      🌐
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Google Display Network (GDN)</h3>
                      <p className="text-gray-700 text-sm">
                        Het GDN is een advertentienetwerk van meer dan 2 miljoen websites en honderdduizenden apps. Ook Gmail en YouTube zijn onderdeel van het GDN. Via je Google Ads account kun je remarketingcampagnes opzetten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      🔍
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">RLSA (Search Ads)</h3>
                      <p className="text-gray-700 text-sm">
                        RLSA staat voor Remarketing Lists for Search Ads. Deze remarketing advertenties verschijnen op dezelfde plek als normale zoekmachine advertenties, maar alleen voor mensen die je website al bezochten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Facebook & Instagram</h3>
                      <p className="text-gray-700 text-sm">
                        Met de Facebook Pixel op je website kun je remarketing inzetten om websitebezoekers te benaderen via Facebook en Instagram. Perfect voor social media advertising strategie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      💼
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">LinkedIn</h3>
                      <p className="text-gray-700 text-sm">
                        De Insight Tag van LinkedIn geeft je de mogelijkheid om remarketingadvertenties op LinkedIn te laten zien. Ideaal als je in de zakelijke branche werkt of B2B advertenties wilt inzetten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-96 snap-start">
                <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000] h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      📺
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">YouTube</h3>
                      <p className="text-gray-700 text-sm">
                        Via Google Ads kun je ook remarketing video advertenties tonen op YouTube. Bereik je websitebezoekers met visuele content terwijl ze video's kijken.
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

      {/* Tips voor sterke remarketing */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-[#FFE500] px-2 rounded">Tips</span> voor sterke remarketing
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Remarketing hoeft niet irritant te zijn. Zo doe je het goed:
          </p>

          <div className="space-y-6">
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                  ⏱️
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Stel een frequency cap in</h3>
                  <p className="text-gray-700">
                    Zorg dat iemand maar een maximaal aantal keer per dag of per week een remarketing advertentie ziet. Een nieuwe broek kan een impulsaankoop zijn, maar een auto kopen duurt langer. Stem de frequency af op je product en de beslissingsfase.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  ✅
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Sluit converters uit</h3>
                  <p className="text-gray-700">
                    Sluit mensen die al een conversie hebben gedaan uit van je remarketing campagnes. Niemand wil advertenties blijven zien voor producten die ze al gekocht hebben. Ook belangrijk: ga niet te lang door met remarketing advertenties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                  🎯
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Niet té gepersonaliseerd</h3>
                  <p className="text-gray-700">
                    Té gepersonaliseerd is niet goed. Vind de juiste balans tussen prettige personalisatie en het gevoel dat iemand 'per ongeluk' de juiste advertentie ziet. Heeft iemand alleen interesse getoond in sneakers van merk X? Toon dan ook truien van merk X of sneakers van merk Y.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  📊
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Test en optimaliseer</h3>
                  <p className="text-gray-700">
                    Test verschillende advertentievarianten, budgetten en targeting opties. Monitor de resultaten en optimaliseer continu. Wat werkt voor het ene product werkt niet altijd voor het andere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remarketing door Niblah */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Remarketing uitbesteden aan <span className="bg-[#FFE500] px-2 rounded">Niblah</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Wil je aan de slag met remarketing, maar weet je niet waar je moet beginnen? Bij Niblah helpen we je graag! Als online marketing bureau verhogen we je conversieratio en omzet door middel van effectieve remarketing die niet opdringerig is.
            </p>
            <p>
              Daarnaast helpen we je ook met andere facetten van je online marketing. We hebben SEO specialisten, SEA experts en CRO specialisten in huis en weten ook het fijne van social media marketing.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Strategische remarketing</h3>
                <p className="text-gray-700">
                  We zetten remarketing strategisch in als onderdeel van je complete SEA strategie. Niet als losstaand kanaal, maar geïntegreerd met je andere campagnes.
                </p>
              </div>

              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Data-gedreven aanpak</h3>
                <p className="text-gray-700">
                  We monitoren continu welke remarketing segmenten het beste presteren en optimaliseren op basis van concrete data en conversies.
                </p>
              </div>

              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎨 Creatieve variatie</h3>
                <p className="text-gray-700">
                  We testen verschillende advertentievarianten en boodschappen om te zien wat het beste werkt voor jouw doelgroep en product.
                </p>
              </div>

              <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">💰 ROI focus</h3>
                <p className="text-gray-700">
                  We focussen op conversies en ROI, niet op clicks. Remarketing moet winstgevend zijn, niet alleen bezoekers terugbrengen.
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
                Wat is remarketing?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Met remarketing vertoon je gerichte advertenties waarmee je jouw bedrijf, product of dienst nogmaals onder de aandacht brengt bij iemand die er al interesse in getoond heeft. Door websitebezoekers opnieuw te bereiken met relevante advertenties, vergroot je de kans op conversie aanzienlijk.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom zou je beginnen met remarketing?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Met remarketing verhoog je de conversieratio van je online business door mensen die uit het aankoopproces zijn gestapt, terug de sales funnel in te trekken. Als iemand met remarketingadvertenties geconfronteerd wordt, is de kans 70% hoger dat hij converteert! Dit maakt remarketing een van de meest effectieve vormen van online adverteren.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe werkt remarketing?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Remarketing werkt door het opnieuw benaderen van mensen die reeds je website bezochten. Dit gebeurt via een remarketing tag (ook wel pixel genoemd) die je op je website plaatst. Bezoekers worden in speciale segmenten bij elkaar gebracht op basis van hun gedrag. Vervolgens kun je die mensen opnieuw benaderen met een gerichte boodschap of aanbieding die aansluit bij hun eerdere interesse.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat is dynamische remarketing?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Dynamische remarketing gaat nog een stapje verder dan reguliere remarketing. Bij reguliere remarketing breng je alleen je bedrijf, merk of producten opnieuw onder de aandacht, maar bij dynamische remarketing vestig je opnieuw de aandacht op specifiek díe producten of diensten waarin een consument al interesse heeft getoond. Dit zorgt voor veel relevantere en effectievere advertenties met hogere conversiepercentages.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Op welke kanalen kun je remarketing inzetten?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Remarketing kun je op verschillende kanalen inzetten. Het Google Display Network (GDN) bestaat uit 2 miljoen websites, 650.000 apps, Gmail en YouTube. Ook kun je via Google Ads RLSA-remarketing inzetten voor zoekmachine advertenties. Daarnaast kun je remarketing uitvoeren via social media zoals Facebook, Instagram en LinkedIn. Elk kanaal heeft zijn eigen remarketing tag die je op je website moet plaatsen.
              </p>
            </details>

            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Is remarketing hetzelfde als retargeting?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Ja, tegenwoordig worden deze twee termen door elkaar heen gebruikt. Vroeger ging 'retargeting' vooral over gerichte advertenties en 'remarketing' over e-mailmarketing, maar sinds Google ook het woord 'remarketing' gebruikt voor retargeting-advertenties via Google Ads, betekenen de twee termen in principe hetzelfde. Beide verwijzen naar het opnieuw bereiken van websitebezoekers met advertenties.
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
