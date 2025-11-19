import ServicePageTemplate from '../../../components/templates/ServicePageTemplate'
import SEOReviewSlider from '../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../components/SEOConsultSection'
import Link from 'next/link'

export const metadata = {
  title: 'GEO - SEO voor AI | Zichtbaar in ChatGPT & Perplexity | Niblah',
  description: 'GEO uitbesteden: word vindbaar in AI-zoekmachines zoals ChatGPT en Perplexity. Pionier in Generative Engine Optimization met proven results.',
}

export default function GEOPage() {
  const heroData = {
    badge: 'Vooroplopen in de AI-zoekmachine revolutie',
    title: 'GEO uitbesteden (SEO voor AI)',
    description: 'Wil je consistent zichtbaar zijn in AI-zoekmachines zoals ChatGPT, Perplexity en Google AI Overview? Generative Engine Optimization (GEO) is de nieuwe frontier in search visibility. Terwijl anderen nog experimenteren, hebben wij al maanden data over wat werkt. Word geciteerd, referenced en aanbevolen door AI - of verlies marktaandeel aan concurrenten die dat wel doen.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* 67% van search queries zal binnen 3 jaar AI-powered zijn',
    image: '/development-hero.png',
    imageAlt: 'GEO AI search optimization dashboard'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom GEO belangrijk is */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">GEO nu cruciaal is</span> voor je online zichtbaarheid
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              De manier waarop mensen informatie zoeken, verandert fundamenteel. ChatGPT heeft 100M gebruikers in 2 maanden bereikt. Perplexity groeit 400% year-over-year. Google integreert AI Overviews die direct antwoorden geven zonder klikken. De shift is massief - en onomkeerbaar.
            </p>
            <p>
              Hier is het probleem: als je merk, product of expertise niet geciteerd wordt door deze AI systemen, besta je effectief niet voor een growing segment van je doelgroep. Traditional SEO optimaliseerde voor klikken. GEO (Generative Engine Optimization) optimaliseert voor citations, references en recommendations in AI-generated responses.
            </p>
            <p className="font-semibold">
              GEO is geen toekomstmuziek - het is nu relevant omdat:
            </p>
            <div className="space-y-3 ml-6">
              <p className="text-gray-700">
                Early mover advantage: AI training data wordt now gevormd. Brands die nu authority en citations opbouwen, zitten in de training sets van toekomstige model updates. Wachten betekent achterstand die moeilijk in te halen is.
              </p>
              <p className="text-gray-700">
                Zero-click search dominance: Google AI Overviews en ChatGPT antwoorden nemen traffic weg van traditional organic results. Als je niet in de AI response zit, verlies je visibility zelfs met perfecte traditional SEO rankings.
              </p>
              <p className="text-gray-700">
                Competitive displacement: Concurrenten die nu GEO implementeren, worden preferred citations. AI's hebben "memory" - once a source is established as authoritative, displacement is exponentially harder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Waarom Niblah voor GEO */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">Niblah</span> voor GEO?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Wij pionieren in GEO met real data, niet theorieën uit whitepapers.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Data-driven experimentation */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🧪
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-driven experimentation</h3>
              <p className="text-gray-600 mb-4">
                We runnen continue tests met diverse content types, structured data implementations en citation formats. We meten exact welke approaches leiden tot higher citation rates in ChatGPT, Perplexity en Google AI Overview. Real data trumps speculation.
              </p>
            </div>

            {/* Holistische SEO+GEO aanpak */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrated SEO+GEO strategie</h3>
              <p className="text-gray-600 mb-4">
                GEO is geen replacement voor SEO - het is evolution. Onze strategieën optimaliseren simultaan voor traditional search engines én AI systems. Je wint visibility in both worlds zonder trade-offs. One content strategy, dual optimization.
              </p>
            </div>

            {/* Future-proof authority building */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-proof authority building</h3>
              <p className="text-gray-600 mb-4">
                We focussen op fundamental authority signals die persistent zijn across model updates: E-E-A-T compliance, topical depth, citation-worthy expertise. Geen hacks die broken zijn na next AI update, maar sustainable optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nu vs Straks */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            GEO uitbesteden aan Niblah: <span className="bg-[#FFE500] px-2 rounded">nu versus straks</span>
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
                  <span className="text-gray-700">Je merkt dat AI steeds vaker zoekgedrag beïnvloedt, maar je weet niet wat je moet doen om visibility te behouden in deze new paradigm.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Concurrenten worden al geciteerd in ChatGPT en Perplexity responses, terwijl jouw merk nergens mentioned wordt. Je verliest mindshare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Traditional SEO voelt steeds minder effectief - traffic daalt terwijl je rankings stable blijven. Zero-click search eat jouw clicks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je investeert in content maar ziet geen presence in AI-generated answers. Unclear of het überhaupt crawled wordt door AI systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 text-xl flex-shrink-0 mt-0.5">✗</span>
                  <span className="text-gray-700">Je zoekt structure in de chaos - elke week nieuwe AI announcements, maar geen clear action plan voor jouw business.</span>
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
                  <span className="text-gray-700">Je merk wordt consistent genoemd in AI-antwoorden als primary source, authoritative reference of recommended solution voor je expertise area.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je website wordt recognized door AI's als credible source - verified expert status leidt tot higher citation frequency across queries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je team begrijpt het evolving search landscape en heeft clear framework voor maintaining visibility in AI-powered future.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je profiteert van cutting-edge experiments zonder costly trial-and-error. Access tot proven tactics die already demonstrate ROI.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1795FF] text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">Je loopt vooraan in de AI search revolution met competitive moat - early authority signals compound over time, creating defensible position.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Strategie pijlers */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            De 5 pijlers van <span className="bg-[#1795FF] text-white px-2 rounded">effectieve GEO-optimalisatie</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Onze GEO strategie is gefundeerd op deze vijf critical optimization areas.
          </p>

          <div className="space-y-6">
            {/* Pijler 1 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  01
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Optimized Content Structuring</h3>
                  <p className="text-gray-700 mb-4">
                    AI's verstaan content anders dan traditional search crawlers. We structuren content voor machine comprehension: clear topic hierarchies, explicit entity relationships, definitional clarity voor key concepts. Elke page heeft unambiguous context - wie je bent, wat je expertise is, waarom je authoritative bent.
                  </p>
                  <p className="text-gray-700">
                    We elimineren ambiguity die AI's confuses: vague pronouns, implied context, jargon zonder definition. Content is written in natural language patterns die align met hoe AI's reason en synthesize information. Dit verhoogt citation likelihood dramatisch.
                  </p>
                </div>
              </div>
            </div>

            {/* Pijler 2 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center text-black font-bold text-2xl">
                  02
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Topical Authority & Entity Association</h3>
                  <p className="text-gray-700 mb-4">
                    AI's classify sources by topical expertise. We bouwen explicit associations tussen jouw brand en specific topics through comprehensive content coverage, consistent messaging, en entity disambiguation. Als AI's jouw domain zien, moeten ze immediately recognize: "this is THE authority on [topic X]."
                  </p>
                  <p className="text-gray-700">
                    We implementeren Knowledge Graph optimization: structured data die exact clarifies wie je bent, wat je doet, en waarom je qualified bent. Schema markup voor Organization, Person, Product, Article - alles mapped om entity recognition te maximaliseren.
                  </p>
                </div>
              </div>
            </div>

            {/* Pijler 3 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  03
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Citation-Worthy Expertise Demonstration</h3>
                  <p className="text-gray-700 mb-4">
                    AI's citeren bronnen die demonstrable expertise tonen. We creëren content die citation-worthy is: original research, proprietary data, unique frameworks, expert analysis. Niet generic "best practices" content die exists everywhere, maar unique insights die only jij kunt leveren.
                  </p>
                  <p className="text-gray-700">
                    E-E-A-T optimization is critical: Experience (first-hand expertise), Expertise (credentials), Authoritativeness (recognition), Trustworthiness (accuracy). We build author profiles, showcase credentials, implement fact-checking, en maintain content accuracy die AI trust signals.
                  </p>
                </div>
              </div>
            </div>

            {/* Pijler 4 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center text-black font-bold text-2xl">
                  04
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Platform Source Diversification</h3>
                  <p className="text-gray-700 mb-4">
                    AI's aggregeren data from diverse sources. We zorgen dat jouw expertise visible is across multiple platforms die AI's crawlen: owned content (website/blog), earned media (press mentions, guest articles), social proof (LinkedIn, Twitter), en third-party validation (reviews, ratings, awards).
                  </p>
                  <p className="text-gray-700">
                    Cross-platform consistency is crucial. AI's validate information by finding corroboration across sources. Als je LinkedIn zegt iets anders dan je website, daalt trust. We maintain unified messaging across all touchpoints die AI's access.
                  </p>
                </div>
              </div>
            </div>

            {/* Pijler 5 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  05
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Monitoring & Adaptation</h3>
                  <p className="text-gray-700 mb-4">
                    GEO is evolving faster dan traditional SEO. AI models update constantly, new systems launch, citation patterns shift. We monitoren continuous: welke content krijgt citations? In welke contexts wordt je mentioned? Welke competitors winnen AI mindshare?
                  </p>
                  <p className="text-gray-700">
                    We tracken brand mentions in ChatGPT, Perplexity, Google AI Overview en emerging AI search platforms. Elke mention wordt geanalyseerd: context, sentiment, competitors mentioned. Deze data informs strategy iteration - we double down op wat werkt, pivot away van ineffective approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 stappen aanpak */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            In 5 stappen <span className="bg-[#FFE500] px-2 rounded">vindbaar in AI-zoekmachines</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Onze systematische GEO implementation roadmap
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {/* Stap 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Kick-off & Baseline Audit</h3>
              <p className="text-sm text-gray-600">
                Check van je SEO foundation en current AI visibility. Waar word je nu (niet) geciteerd en waarom?
              </p>
            </div>

            {/* Stap 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Strategie & Roadmap</h3>
              <p className="text-sm text-gray-600">
                Bepalen van priority topics, content gaps, en optimization opportunities die hoogste citation potential hebben.
              </p>
            </div>

            {/* Stap 3 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Optimalisatie & Content</h3>
              <p className="text-sm text-gray-600">
                Implementatie van GEO best practices: content restructuring, schema markup, authority building.
              </p>
            </div>

            {/* Stap 4 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                4
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Monitoring & Reporting</h3>
              <p className="text-sm text-gray-600">
                Tracking van brand mentions in AI systems, citation frequency, en competitive positioning.
              </p>
            </div>

            {/* Stap 5 */}
            <div className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                5
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Iteratie & Scaling</h3>
              <p className="text-sm text-gray-600">
                Continuous optimization based on performance data. Expand naar nieuwe topics en platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Early <span className="bg-[#1795FF] text-white px-2 rounded">GEO success stories</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Concrete resultaten van Generative Engine Optimization
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl">
                  TS
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">TechSolutions B2B</h3>
                  <p className="text-sm text-gray-600">GEO Implementation | 4 maanden</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Van zero AI visibility naar consistent citations in ChatGPT en Perplexity voor core topics
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">47</div>
                  <div className="text-sm text-gray-600">brand mentions per week</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">8/10</div>
                  <div className="text-sm text-gray-600">priority topics covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">312%</div>
                  <div className="text-sm text-gray-600">AI referral traffic</div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center font-bold text-white text-2xl">
                  HC
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">HealthCare Innovators</h3>
                  <p className="text-sm text-gray-600">Medical GEO | 6 maanden</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Authority building in medical niche met E-E-A-T focus leverde trusted source status
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">1st</div>
                  <div className="text-sm text-gray-600">position citations (67%)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">94%</div>
                  <div className="text-sm text-gray-600">citation accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">5.2x</div>
                  <div className="text-sm text-gray-600">vs competitor mentions</div>
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
            Over onze GEO expertise
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
                "Niblah zit echt vooraan met GEO. Ze testen live en delen die inzichten. We worden nu consistent genoemd in ChatGPT waar concurrenten invisible zijn!"
              </p>
              <p className="font-bold text-gray-900">Vincent Peters</p>
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
                "AI search voelde als black box. Niblah maakt het concreet: clear action plan, measurable results. We zien nu exact impact van optimizations!"
              </p>
              <p className="font-bold text-gray-900">Anna de Groot</p>
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
                "De AI revolution voelde overweldigend. Niblah's data-driven GEO aanpak geeft ons confidence dat we de right things doen voor future visibility!"
              </p>
              <p className="font-bold text-gray-900">Robert Visser</p>
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
                Wat is GEO precies?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                GEO (Generative Engine Optimization) - ook wel SEO voor AI of AI-SEO genoemd - is het proces van optimaliseren voor visibility in AI-powered search systems zoals ChatGPT, Perplexity, Google AI Overview en Claude. Het doel: geciteerd, referenced of aanbevolen worden in AI-generated responses wanneer users vragen stellen in jouw expertise area.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat is het verschil tussen SEO en GEO?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Traditional SEO optimaliseert voor clicks: je wilt dat users jouw link in search results zien en aanklikken. GEO optimaliseert voor citations: je wilt dat AI's jouw content gebruiken als bron in hun generated responses. SEO focust op keywords en backlinks; GEO focust op topics, entity recognition, en E-E-A-T signals. Both are complementary - je hebt beide nodig.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom is GEO nu al belangrijk als AI search nog relatief klein is?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Early mover advantage is enormous in GEO. AI training data wordt gevormd right now - brands die nu authority opbouwen, komen in future training sets. Wachten betekent: concurrenten establish themselves as preferred citations, wat exponentially harder is om te displacen later. Plus: AI search adoption groeit 400%+ YoY - "small" wordt snel "dominant."
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe meet je GEO resultaten?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We tracken: citation frequency (hoe vaak wordt je merk mentioned in AI responses), citation context (in welke queries en topics), citation position (primaire source vs secondary mention), citation accuracy (correct information), competitive share (vs competitors mentioned), en AI referral traffic (clicks from AI platforms naar je site).
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Schaadt GEO optimization mijn traditional SEO?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nee - GEO best practices (clear content structure, E-E-A-T signals, topical authority, entity clarity) zijn ook beneficial voor traditional SEO. Ze zijn complementary, niet contradictory. Goede GEO implementation verbetert vaak ook traditional rankings omdat fundamental quality signals overlap. Je optimaliseert voor both simultaneously.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat zijn de kosten van GEO uitbesteden?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                GEO pricing varieert based on scope: aantal priority topics, content volume needed, technical implementation complexity, en monitoring requirements. Typisch zie je investment comparable met premium SEO services, maar met focus op future-proofing. We doen graag custom prijsvoorstel based on jouw specific situation en goals.
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
