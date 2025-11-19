import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import SEOReviewSlider from '../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../components/SEOConsultSection'
import Link from 'next/link'

export const metadata = {
  title: 'Conversieoptimalisatie (CRO) | Meer Omzet Zonder Extra Traffic | Niblah',
  description: 'CRO uitbesteden aan specialisten die focus leggen op bedrijfsbrede groei. Data-gedreven optimalisaties die conversies, orderwaarde en customer lifetime value verhogen.',
}

export default function CROPage() {
  const heroData = {
    badge: 'Meer omzet zonder extra advertentiebudget',
    title: 'Conversieoptimalisatie uitbesteden',
    description: 'Je betaalt voor traffic maar te weinig bezoekers converteren? Conversieoptimalisatie gaat verder dan A/B-testen. Bij Niblah optimaliseren we systematisch je complete funnel: van eerste klik tot repeat purchase. We focussen op de bottlenecks die échte business impact hebben, niet op incrementele button color tests.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* Gemiddeld verdubbelt conversieratio binnen 6 maanden bij strategische CRO',
    image: '/development-hero.png',
    imageAlt: 'CRO dashboard showing conversion improvements'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom CRO uitbesteden */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">conversieoptimalisatie uitbesteden</span> je ROI verveelvoudigt
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Je investeert maandelijks duizenden euro's in traffic: Google Ads, social advertising, SEO efforts. Maar wat als je conversierate 1.8% is terwijl benchmarks in jouw industrie 3.5% zijn? Dan laat je structureel 50%+ potentiële omzet liggen. Elke bezoeker die je website verlaat zonder te converteren, is verspild advertentiebudget.
            </p>
            <p>
              Conversieoptimalisatie is de meest ROI-positieve marketing discipline. Waarom? Omdat je verbeteringen implementeert op traffic die je al betaalt. Een 30% lift in conversieratio betekent 30% meer omzet zonder één euro extra traffic kosten. De economics zijn simpel: elke procentpunt conversie-verbetering flows direct naar bottom line.
            </p>
            <p className="font-semibold">
              Professionele CRO levert drie transformative voordelen:
            </p>
            <div className="space-y-3 ml-6">
              <p className="text-gray-700">
                Data-driven prioritization: In plaats van random A/B tests, identificeren we systematisch je grootste conversion leaks. We focussen effort op high-impact bottlenecks, niet op minor tweaks met marginale lifts.
              </p>
              <p className="text-gray-700">
                Full-funnel optimization: Consumer journey stopt niet bij checkout. We optimaliseren hele funnel: awareness → consideration → purchase → retention → advocacy. Higher customer lifetime value betekent higher acceptable CAC.
              </p>
              <p className="text-gray-700">
                Statistical rigor: DIY testing leidt vaak tot false positives door insufficient sample sizes of premature conclusions. Wij runnen statistically significant tests met proper methodology die reliable insights leveren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Waarom Niblah voor CRO */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">Niblah</span> voor conversieoptimalisatie?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wij zien CRO niet als losstaande tool, maar als strategisch growth lever binnen je complete marketing ecosystem.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Business-first aanpak */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business-first, niet test-first</h3>
              <p className="text-gray-600 mb-4">
                Andere bureaus focussen op test velocity: "we runnen 20 tests per maand!" Wij focussen op business impact. Liever 3 tests die 15% revenue lift genereren, dan 20 tests met 0.5% lifts. We prioriteren op expected value, niet op activity metrics.
              </p>
            </div>

            {/* V6 Growth Model */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full-funnel V6 optimization</h3>
              <p className="text-gray-600 mb-4">
                We optimaliseren zes growth drivers: Verkeer (traffic quality), Verkooppercentage (conversion rate), Verkoopwaarde (AOV), Vasthouden (retention), Via-Via (referrals) en Verdiensten (LTV). Small improvements across alle zes = exponential revenue growth.
              </p>
            </div>

            {/* Integrated expertise */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated marketing expertise</h3>
              <p className="text-gray-600 mb-4">
                CRO werkt niet in isolatie. Onze CRO specialists werken nauw samen met SEO, SEA en content teams. Als we conversion rate verhogen maar traffic quality daalt, is net effect negatief. We optimaliseren het complete system, niet silo's.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nu vs Straks */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            CRO uitbesteden aan Niblah: <span className="bg-[#FFE500] px-2 rounded">nu versus straks</span>
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
                  <span className="text-gray-700">Je betaalt voor verkeer maar conversiepercentages blijven achter bij industry benchmarks. Elke bezoeker die afhaakt is verspild budget.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je weet dat je website beter kan converteren, maar weet niet waar te beginnen. Welke pagina optimaliseer je eerst voor maximale impact?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je ziet in analytics dat bezoekers afhaken in checkout, maar begrijpt niet de root cause. Welk friction point veroorzaakt abandonment?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je wilt investeren in CRO maar mist tijd/expertise voor proper test design, statistical analysis en implementation coordination.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je zoekt partner die CRO strategisch inzet gekoppeld aan business KPI's, niet als doel op zich met vanity metrics.</span>
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
                  <span className="text-gray-700">Elk kwartaal weet je precies welke funnel stages geoptimaliseerd moeten worden voor maximale revenue impact. Crystal clear priorities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je website wordt systematisch beter op punten die belangrijk zijn voor jouw business model, niet random improvements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je CRO tests zijn altijd gekoppeld aan concrete business goals met forecasted ROI. Elke test heeft defined success metrics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je haalt meer omzet uit hetzelfde verkeer door slimme optimalisaties. Higher conversions + higher AOV = exponential revenue growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je hebt eindelijk grip op waarom bezoekers wel of niet converteren. Data-backed insights into customer psychology and friction points.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CRO Expertise - 3 pijlers */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Onze <span className="bg-[#1795FF] text-white px-2 rounded">CRO-expertise</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We combineren kwantitatieve data, kwalitatief gebruikersonderzoek en rigorous testing voor reliable optimization.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Data Analytics */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Data Analytics & Funnel Mapping</h3>
              <p className="text-gray-600 mb-4">
                We starten met diepgaande analytics audit: Google Analytics 4 event tracking, enhanced ecommerce data, custom funnel analysis. We identificeren exact waar users drop off en kwantificeren de revenue impact per bottleneck.
              </p>
              <p className="text-gray-600">
                Heatmaps (Hotjar/Microsoft Clarity) tonen ons waar users klikken, scrollen en frustreren. Session recordings onthullen usability issues die je nooit ziet in aggregate data. Gecombineerd met cohort analysis krijgen we complete picture.
              </p>
            </div>

            {/* Gebruikersonderzoek */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Kwalitatief Gebruikersonderzoek</h3>
              <p className="text-gray-600 mb-4">
                Data toont wat er gebeurt, maar niet waarom. User interviews, surveys en usability tests onthullen de psychologie achter conversie-beslissingen. Wat zijn de anxieties die purchase verhinderen? Welke informatie mist op critical decision points?
              </p>
              <p className="text-gray-600">
                We voeren exit-intent surveys uit om abandonment redenen te begrijpen, analyseren customer support tickets voor recurring objections, en doen competitor UX analysis om best practices te identificeren die we kunnen adopteren.
              </p>
            </div>

            {/* A/B Testing */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                🧪
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Rigorous A/B Testing</h3>
              <p className="text-gray-600 mb-4">
                We runnen statistically significant tests met proper methodology: minimum sample sizes calculated upfront, test duration based on traffic patterns, segmentation analysis om heterogeneous effects te detecteren.
              </p>
              <p className="text-gray-600">
                Tools: VWO, Convert, Google Optimize (RIP), of server-side testing frameworks. We testen niet alleen conversion rate, maar ook secondary metrics: AOV, repeat purchase rate, customer satisfaction scores. Winning test moet lift multiple KPI's.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 stappen aanpak */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Onze <span className="bg-[#FFE500] px-2 rounded">strategische CRO aanpak</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Van bottleneck discovery tot winning test implementation - zo optimaliseren we systematisch je complete funnel.
          </p>

          <div className="space-y-6">
            {/* Stap 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  01
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Bottleneck Discovery & Prioritization</h3>
                  <p className="text-gray-700 mb-4">
                    We beginnen met comprehensive conversion audit: analyse van je complete funnel van first touch tot repeat purchase. Waar lekt revenue? We identificeren de 3-5 biggest conversion bottlenecks en kwantificeren hun revenue impact. Een 5% improvement op een high-traffic page levert meer op dan 50% improvement op low-traffic page.
                  </p>
                  <p className="text-gray-700">
                    We gebruiken ICE framework (Impact × Confidence × Ease) om te prioriteren welke optimalisaties we eerst tackelen. Dit zorgt dat we focussen op quick wins met measurable business impact, niet op pet projects of minor tweaks.
                  </p>
                </div>
              </div>
            </div>

            {/* Stap 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center text-black font-bold text-2xl">
                  02
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Hypothesis Development & Research</h3>
                  <p className="text-gray-700 mb-4">
                    Voor elk bottleneck ontwikkelen we evidence-based hypotheses. "We believe that [changing X] will cause [Y effect] because [research insight Z]." Hypotheses zijn gefundeerd in: user research data, heatmap analysis, session recordings, customer feedback en conversion psychology principles.
                  </p>
                  <p className="text-gray-700">
                    We benchmarken ook tegen competitors en industry best practices. Als jouw checkout 5 steps heeft terwijl competitors 2 steps runnen met higher conversion, is dat strong signal dat simplification value kan leveren.
                  </p>
                </div>
              </div>
            </div>

            {/* Stap 3 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  03
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Test Design & Implementation</h3>
                  <p className="text-gray-700 mb-4">
                    We designen tests met statistical rigor: define primary and secondary metrics, calculate required sample size voor 95% confidence, determine test duration based on traffic patterns. We zorgen dat tests clean runnen: geen overlapping tests op same pages, proper randomization, QA testing op alle devices/browsers.
                  </p>
                  <p className="text-gray-700">
                    Implementation kan variëren van simple copy changes (via testing tool) tot complex redesigns (development team involvement). We coordinate met je tech team en zorgen voor smooth rollout zonder site breakage.
                  </p>
                </div>
              </div>
            </div>

            {/* Stap 4 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center text-black font-bold text-2xl">
                  04
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analysis & Insight Extraction</h3>
                  <p className="text-gray-700 mb-4">
                    Als test statistical significance bereikt, doen we deep-dive analysis. We kijken naar segmented results: werkt de variant beter voor mobile vs desktop? Voor nieuwe vs returning visitors? Voor traffic van paid vs organic? Often zijn er nuances die aggregate results verbergen.
                  </p>
                  <p className="text-gray-700">
                    We analyseren ook secondary effects: improved conversion rate maar lower AOV? Dat kan net effect negatief maken. We kijken altijd naar total revenue impact, niet alleen conversion rate in isolation.
                  </p>
                </div>
              </div>
            </div>

            {/* Stap 5 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  05
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Rollout & Continuous Optimization</h3>
                  <p className="text-gray-700 mb-4">
                    Winning variants worden volledig uitgerold naar 100% traffic. We monitoren post-rollout om te valideren dat lift persistent is (geen novelty effect). Learnings worden gedocumenteerd in centralized knowledge base die toekomstige test ideation informeert.
                  </p>
                  <p className="text-gray-700">
                    CRO is never "done" - elk kwartaal revisit we de funnel om nieuwe bottlenecks te identificeren. Als we checkout geoptimaliseerd hebben, verschuift focus misschien naar product pages of landing page optimization. Continuous improvement mindset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Concrete <span className="bg-[#1795FF] text-white px-2 rounded">CRO resultaten</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Hoe strategische conversieoptimalisatie revenue transformeert
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl">
                  FW
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">FashionWorld</h3>
                  <p className="text-sm text-gray-600">E-commerce CRO | 8 maanden</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Complete checkout optimization + product page redesign verdubbelde conversieratio
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">112%</div>
                  <div className="text-sm text-gray-600">conversion rate lift</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">€47K</div>
                  <div className="text-sm text-gray-600">extra monthly revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">23%</div>
                  <div className="text-sm text-gray-600">higher AOV</div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center font-bold text-white text-2xl">
                  TL
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">TechLease B2B</h3>
                  <p className="text-sm text-gray-600">Lead Gen CRO | 6 maanden</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Form optimization en lead qualification verbetering verhoogde SQL conversie drastisch
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">87%</div>
                  <div className="text-sm text-gray-600">meer leads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">142%</div>
                  <div className="text-sm text-gray-600">higher SQL rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">-38%</div>
                  <div className="text-sm text-gray-600">cost per SQL</div>
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
            Over onze CRO resultaten
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
                "Niblah's CRO aanpak is next level. Ze focussen op bottlenecks met échte business impact, niet random tests. Conversies stegen 94% in 5 maanden!"
              </p>
              <p className="font-bold text-gray-900">Tim Jansen</p>
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
                "Eindelijk een bureau dat data-driven werkt. Elke test heeft duidelijke business rationale. We halen nu veel meer uit hetzelfde traffic budget!"
              </p>
              <p className="font-bold text-gray-900">Laura Vermeulen</p>
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
                "Hun full-funnel aanpak werkt briljant. Ze optimaliseren niet alleen checkout, maar hele customer journey. Retention steeg ook significant!"
              </p>
              <p className="font-bold text-gray-900">Mark de Boer</p>
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
                Wat is conversieoptimalisatie precies?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Conversieoptimalisatie (CRO) is het systematische proces van het verhogen van het percentage website bezoekers dat een gewenste actie uitvoert - purchase, lead form submission, signup, etc. Dit gebeurt door data analysis, user research en controlled experimentation (A/B tests) om friction points te elimineren en persuasion te verbeteren.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom zou ik investeren in CRO als ik ook meer traffic kan kopen?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                CRO is cost-efficient: elke procentpunt conversie improvement levert revenue zonder extra traffic kosten. Als je 10K bezoekers per maand hebt met 2% conversie = 200 conversies. Verhoog naar 3% = 300 conversies met zero extra ad spend. Daarnaast: higher conversion rates verlagen je CAC, wat je competitive moat vergroot.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat doet een CRO-specialist precies?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Een CRO specialist analyseert je funnel om conversion bottlenecks te identificeren, voert kwalitatief en kwantitatief onderzoek uit om root causes te begrijpen, ontwikkelt evidence-based hypotheses, designed en runt A/B tests met statistical rigor, analyseert resultaten om insights te extracten, en implementeert winning variations. Het is mix van data science, psychology en UX expertise.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe snel zie ik resultaten van conversieoptimalisatie?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Quick wins kunnen binnen 4-8 weken zichtbaar zijn (denk: form optimization, trust signals toevoegen). Maar substantiële improvements nemen typisch 3-6 maanden omdat je multiple iterations nodig hebt: test → learn → refine → test again. Traffic volume bepaalt ook velocity - higher traffic = sneller statistical significance = sneller learnings.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom CRO uitbesteden vs in-house CRO team bouwen?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                In-house CRO vereist significant investment: senior CRO manager (€70-100K), designer, developer, plus tools (Hotjar, VWO, analytics platforms). Total cost: €150K+ per jaar. Outsourcen geeft je immediate access tot complete team met proven track record, zonder hiring risk of overhead. Plus: external perspective ziet blinde spots die internal teams missen.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat zijn typische conversie lifts die ik kan verwachten?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Dit varieert wildly based on baseline state. Sites die nooit CRO gedaan hebben kunnen 50-100%+ lifts zien in first year. Already-optimized sites zien 10-30% yearly improvements. Industry benchmark: good CRO programs leveren 15-25% annual conversion rate improvement. Maar focus moet zijn op absolute revenue impact, niet relative percentage lifts.
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
