import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import SEOServicesSection from '../../../components/SEOServicesSection'
import SEOReviewSlider from '../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../components/SEOConsultSection'
import SEOBenefitsSlider from '../../../components/SEOBenefitsSlider'

export const metadata = {
  title: 'SEO Uitbesteden | Top Rankings & Meer Traffic | Niblah',
  description: 'SEO uitbesteden aan specialisten die écht resultaat leveren. Topposities in Google, meetbaar resultaat en flexibele samenwerking. Start vandaag nog je gratis groeiscan.',
  keywords: 'seo uitbesteden, zoekmachineoptimalisatie, seo specialist, linkbuilding, contentmarketing, conversieoptimalisatie',
  openGraph: {
    title: 'SEO Uitbesteden | Niblah',
    description: 'Topposities in Google met meetbaar resultaat. Flexibele samenwerking met SEO-specialisten die écht kennis van zaken hebben.',
    images: ['/avatar.png'],
  },
}

export default function SEOPage() {
  const heroData = {
    badge: 'SEO UITBESTEDEN',
    title: 'Haal meer uit Google met professionele zoekmachineoptimalisatie',
    description: 'Wil jij eindelijk structureel bovenaan verschijnen in Google? Door SEO uit te besteden aan experts krijg je toegang tot actuele kennis, bewezen strategieën en meetbare resultaten. Bereik hogere posities, trek meer bezoekers en vergroot je omzet!',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* De meeste bedrijven missen cruciale SEO-kansen online',
    image: '/development-hero.png',
    imageAlt: 'SEO dashboard showing rankings and traffic growth'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Maximaal rendement section */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">SEO uitbesteden</span> slim is voor jouw bedrijf
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Als ondernemer of marketing professional wil je groeien via Google. Je begrijpt het belang van zoekmachineoptimalisatie, maar die felbegeerde top 3 positie blijft net buiten bereik. Het lijkt eenvoudig, maar in de praktijk vereist SEO constante aandacht en expertise.
            </p>
            <p>
              De SEO-wereld verandert razendsnel. Algoritmes worden aangepast, nieuwe technieken ontstaan en wat vorige maand werkte, kan nu achterhaald zijn. Daarnaast vraagt het veel tijd om zelf alles bij te houden terwijl je eigenlijk wilt focussen op je kernactiviteiten.
            </p>
            <p className="font-semibold">
              Daarom kiezen slimme ondernemers ervoor om SEO uit te besteden. Met professionele begeleiding profiteer je van:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                <span>Bewezen methodes die daadwerkelijk zorgen voor hogere rankings en meer organisch verkeer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                <span>Efficiënte inzet van je budget - geen geld verspillen aan experimenten die niet werken</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">✓</span>
                <span>Meer tijd voor jouw expertise, terwijl SEO-specialisten zich focussen op jouw online groei</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Waarom Niblah section - Slider */}
      <SEOBenefitsSlider />

      {/* SEO Services */}
      <SEOServicesSection />

      {/* De 3 pijlers van SEO */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            De 3 fundamenten van <span className="bg-[#1795FF] text-white px-2 rounded">effectieve zoekmachineoptimalisatie</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wanneer je SEO uitbesteedt aan Niblah, focussen we op drie cruciale aspecten die samen bepalen waar je eindigt in Google: website techniek, waardevolle content en online autoriteit.
          </p>

          <div className="space-y-8">
            {/* Pijler 1: Techniek */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    01
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Techniek</h3>
                  <p className="text-gray-600 mb-4">
                    Een solide technische basis is essentieel voor SEO-succes. Zonder degelijke website-techniek maak je geen schijn van kans op die top 3 positie. Trage laadtijden, kapotte links of een chaotische structuur frustreren niet alleen Google's crawlers, maar ook jouw bezoekers.
                  </p>
                  <p className="text-gray-600">
                    Onze technical SEO experts bij Niblah beheersen alle aspecten van technische optimalisatie. Ze zorgen voor optimale website-snelheid en hebben diepgaande kennis van Core Web Vitals - de metrics die Google gebruikt om je gebruikerservaring te beoordelen.
                  </p>
                </div>
              </div>
            </div>

            {/* Pijler 2: Content */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center text-black font-bold text-2xl">
                    02
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Content</h3>
                  <p className="text-gray-600 mb-4">
                    Zonder kwalitatieve content kun je geen organisch verkeer genereren. Wil je echt succesvol zijn met zoekmachineoptimalisatie? Dan moet je investeren in content die niet alleen Google aanspreekt, maar ook daadwerkelijk waardevol is voor je bezoekers.
                  </p>
                  <p className="text-gray-600">
                    Bij Niblah werken content- en SEO-specialisten hand in hand. We creëren overtuigende teksten die perfect zijn geoptimaliseerd voor relevante zoekwoorden. Onze content voldoet aan de nieuwste Google-richtlijnen, is echt nuttig (helpful content) en sluit naadloos aan bij wat jouw doelgroep zoekt en hoe ze zich gedragen online.
                  </p>
                </div>
              </div>
            </div>

            {/* Pijler 3: Autoriteit */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    03
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Autoriteit</h3>
                  <p className="text-gray-600 mb-4">
                    Zelfs met perfecte techniek en uitstekende content ben je er nog niet. Die felbegeerde nummer 1 positie bereik je alleen wanneer Google jouw website als autoritair beschouwt. Met andere woorden: wanneer je wordt gezien als een betrouwbare, relevante bron in jouw vakgebied.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Online autoriteit bouw je primair op via backlinks - verwijzingen vanaf andere websites naar jouw content. Bij Niblah kiezen we altijd de strategie die het beste past bij jouw situatie: focus op kwantiteit, kwaliteit of een strategische mix van beide.
                  </p>
                  <p className="text-gray-600">
                    In de meeste gevallen geven we prioriteit aan kwaliteit boven kwantiteit. De reden? Een enkele kwalitatieve link van een gezaghebbende website in jouw sector levert veel meer op bij Google dan tientallen willekeurige links van forums of directories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            SEO uitbesteden aan Niblah: <span className="bg-[#FFE500] px-2 rounded">voor wie is het interessant?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Geschikt voor */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000] h-full flex flex-col">
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-black">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    SEO uitbesteden aan Niblah is <span className="text-[#1795FF]">geschikt</span> voor:
                  </h3>
                </div>
              </div>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Ambitieuze ondernemers die streven naar de absolute top in Google. Bedrijven die niet tevreden zijn met middelmatigheid, maar echt online marktleider willen worden met substantieel meer klanten en hogere omzet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Organisaties die zoeken naar een betrouwbare SEO-partner met focus op meetbare resultaten en strategische groei, niet alleen mooie praatjes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Bedrijven met een langetermijnvisie die begrijpen dat duurzaam SEO-succes geen quick fix is, maar een investering in blijvende online groei.</span>
                </li>
              </ul>
            </div>

            {/* Niet geschikt voor */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000] h-full flex flex-col">
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-bold text-2xl border-2 border-black">
                  ✗
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    SEO uitbesteden aan Niblah is <span className="text-gray-500">niet geschikt</span> voor:
                  </h3>
                </div>
              </div>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Organisaties die tevreden zijn met een middenpositie in de zoekresultaten en geen echte ambitie hebben om de concurrentie voor te blijven.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Bedrijven die verwachten dat zoekmachineoptimalisatie volledig automatisch gaat en geen enkele betrokkenheid of input van hun kant vereist.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Ondernemers die puur op zoek zijn naar korte termijn trucjes en niet willen investeren in structurele, duurzame SEO-groei.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe ziet jouw weg naar de top eruit */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Hoe jouw weg naar de <span className="bg-[#FFE500] px-2 rounded">top eruitziet</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wat zich precies afspeelt tussen ons eerste contactmoment en het behalen van die toppositie in Google? In een notendop zijn dat de onderstaande vijf stappen.
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Stap 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Kennismaking</h3>
              <p className="text-sm text-gray-600">
                We leren je bedrijf, doelgroep en ambities kennen. Wat zijn je doelen en hoe kunnen we die bereiken?
              </p>
            </div>

            {/* Stap 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Analyse</h3>
              <p className="text-sm text-gray-600">
                Diepgaande audit van je huidige SEO-situatie. Waar staan we nu en waar liggen de grootste kansen?
              </p>
            </div>

            {/* Stap 3 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Strategie</h3>
              <p className="text-sm text-gray-600">
                We maken een SEO-roadmap op maat. Welke keywords, welke content en welke technische optimalisaties?
              </p>
            </div>

            {/* Stap 4 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                4
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Uitvoering</h3>
              <p className="text-sm text-gray-600">
                We rollen de mouwen op en gaan aan de slag. Techniek, content en linkbuilding - alles wordt geoptimaliseerd.
              </p>
            </div>

            {/* Stap 5 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                5
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Rapportage</h3>
              <p className="text-sm text-gray-600">
                Maandelijkse updates met heldere cijfers. Je ziet precies wat je investering oplevert en welke vooruitgang we boeken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Dit zeggen onze <span className="bg-[#1795FF] text-white px-2 rounded">klanten</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl font-bold">
                  VB
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">VanBergen Meubels</h3>
                  <p className="text-sm text-gray-600">Zoekmachineoptimalisatie</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Door een slimme SEO-strategie over meerdere kanalen hebben we binnen korte tijd spectaculaire groei gerealiseerd in zowel verkeer als merkbekendheid.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1795FF] mb-1">91%</div>
                  <div className="text-xs text-gray-600">Hogere omzet via online</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1795FF] mb-1">35%</div>
                  <div className="text-xs text-gray-600">Toename organische bezoekers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1795FF] mb-1">84%</div>
                  <div className="text-xs text-gray-600">Meer merknaam zoekopdrachten</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  TM
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">TechMedia Solutions</h3>
                  <p className="text-sm text-gray-600">Complete SEO-migratie</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Een technisch complexe website-migratie waarbij we rankings behielden én verbeterden. Het resultaat: explosieve groei in korte tijd.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1795FF] mb-1">638%</div>
                  <div className="text-xs text-gray-600">Groei in website traffic</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1795FF] mb-1">1143%</div>
                  <div className="text-xs text-gray-600">Verbetering in vindbaarheid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overige online marketing */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Je overige online marketing <span className="bg-[#FFE500] px-2 rounded">uitbesteden?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ook dan ben je bij Niblah aan het juiste adres! Niet alleen lopen er heel wat SEO-marketeers rond bij ons. Ook SEA-, social media marketing– en conversieoptimalisatie-experts vind je onder ons dak.
          </p>

          <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 mb-8">
            <h3 className="font-bold text-xl text-gray-900 mb-4">
              Hoe verschillende onlinemarketingkanalen elkaar versterken
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Doordat al onze specialisten intensief met elkaar samenwerken, profiteer je van een holistische onlinestrategie. We duiken de statistieken in, steken de koppen bij elkaar en stemmen de campagnes van de verschillende onlinemarketingkanalen naadloos op elkaar af.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Op die manier zorgen we ervoor dat je maximaal resultaat bereikt én dat je zichtbaar bent in elke fase van de customer journey. Waar je je met SEO bijvoorbeeld richt op mensen die naar jou op zoek zijn, neem je met social media ads zélf het heft in handen.
            </p>
          </div>

          <p className="text-lg text-gray-900 font-semibold mb-6">
            De verschillende onlinemarketingkanalen versterken elkaar. En pas écht voor winst ga je als je <span className="bg-[#1795FF] text-white px-2 rounded">overál zichtbaar bent</span>.
          </p>
        </div>
      </section>

      {/* Kosten sectie */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Wat zijn de <span className="bg-[#FFE500] px-2 rounded">kosten van SEO uitbesteden?</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              De vraag wat SEO uitbesteden precies kost, dat is niet zo 1, 2, 3 te beantwoorden. Dit is namelijk afhankelijk van nogal wat factoren:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">•</span>
                <span>Welke SEO-werkzaamheden wil je precies aan ons overlaten?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">•</span>
                <span>Is er ooit al iets aan SEO gedaan of beginnen we bij 0?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">•</span>
                <span>Welk marketingbudget heb jij te besteden als bedrijf?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1795FF] text-xl flex-shrink-0">•</span>
                <span>Hoe competitief is jouw branche en voor welke zoekwoorden wil je ranken?</span>
              </li>
            </ul>

            <div className="bg-white border-2 border-black rounded-xl p-6 mt-8 shadow-[4px_4px_0_0_#000]">
              <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Een leuke meevaller
              </h3>
              <p className="text-gray-700">
                De eerste stap naar goede SEO is bij ons gratis. Ons gratis groeiscan biedt je inzicht in de speerpunten van SEO en in hoe jouw website hierop scoort. Dat is handig, want zo weet je direct waar er nog werk aan de winkel is en wat al goed gaat.
              </p>
            </div>

            <p className="text-center font-semibold text-gray-900 pt-6">
              We geven je graag – telefonisch, online of in real life – een uitgebreid overzicht van de kosten die je kunt verwachten.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde <span className="bg-[#FFE500] px-2 rounded">vragen</span>
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat is SEO en hoe werkt het?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                SEO (Search Engine Optimization) is het proces van het optimaliseren van je website zodat deze beter vindbaar is in zoekmachines zoals Google. Het werkt door je website technisch te verbeteren, relevante content te creëren en autoriteit op te bouwen via backlinks. Wanneer iemand zoekt naar een product of dienst die jij aanbiedt, wil je dat jouw website bovenaan verschijnt in de zoekresultaten.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wanneer is SEO rendabel?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                SEO is rendabel wanneer de kosten van je SEO-investering lager zijn dan de opbrengsten die het genereert. Dit hangt af van factoren zoals je gemiddelde orderwaarde, conversieratio en de waarde van een klant. Voor de meeste bedrijven begint SEO binnen 3-6 maanden rendement op te leveren, met het hoogste ROI na 12-18 maanden. SEO is een langetermijninvestering die blijft renderen.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat is een SEO-tekst?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Een SEO-tekst is een tekst die geschreven is met het doel om goed te ranken in zoekmachines, terwijl deze tegelijkertijd waardevol en leesbaar blijft voor bezoekers. Een goede SEO-tekst bevat relevante zoekwoorden, heeft een logische structuur met koppen, beantwoordt de vragen van de lezer, en is technisch goed geoptimaliseerd (titel, meta beschrijving, alt-teksten, etc.).
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat levert investeren in SEO je op?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Investeren in SEO levert je meer organisch verkeer op, wat resulteert in meer leads en klanten zonder dat je per klik hoeft te betalen. Het verhoogt je merkbekendheid, bouwt autoriteit op in je vakgebied, en zorgt voor een betere gebruikerservaring. Daarnaast is SEO kosteneffectiever op de lange termijn dan betaalde advertenties, omdat de resultaten blijven bestaan zolang je je SEO-inspanningen voortzet.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Welke kennis heeft een SEO-specialist in huis?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Een goede SEO-specialist heeft kennis van technische SEO (Core Web Vitals, site speed, crawlbaarheid), content optimalisatie (zoekwoordonderzoek, content strategie), linkbuilding strategieën, en data-analyse. Ook begrijpen ze hoe zoekmachine algoritmes werken, blijven ze op de hoogte van de laatste Google updates, en kunnen ze SEO-tools zoals Google Search Console, Ahrefs en Screaming Frog gebruiken.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe verbeter je SEO?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Je verbetert SEO door te focussen op drie pijlers: 1) Techniek - zorg voor een snelle, mobiel-vriendelijke website zonder technische fouten. 2) Content - creëer waardevolle, relevante content die aansluit bij wat je doelgroep zoekt. 3) Autoriteit - bouw kwalitatieve backlinks op van relevante websites in jouw branche. Start met een SEO-audit om te zien waar je nu staat en waar de grootste verbetermogelijkheden liggen.
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
