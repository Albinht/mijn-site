import ServicePageTemplate from '../../../../components/templates/ServicePageTemplate'
import SEOReviewSlider from '../../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../../components/SEOConsultSection'
import Link from 'next/link'

export const metadata = {
  title: 'Linkbuilding Uitbesteden | Hoogwaardige Backlinks voor Betere Rankings | Niblah',
  description: 'Linkbuilding uitbesteden aan experts die échte autoriteit bouwen. Kwalitatieve backlinks van relevante websites voor hogere Google rankings en meer organisch traffic.',
}

export default function LinkbuildingPage() {
  const heroData = {
    badge: 'Autoriteit opbouwen die Google niet kan negeren',
    title: 'Linkbuilding uitbesteden',
    description: 'Wil je een linkprofiel opbouwen dat Google overtuigt van jouw autoriteit? Linkbuilding is de meest impactvolle - maar ook meest risicovolle - SEO discipline. Onze specialisten focussen op white-hat strategieën die duurzame autoriteit opbouwen via kwalitatieve, relevante backlinks die daadwerkelijk rankings verbeteren.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* 73% van succesvolle SEO campaigns heeft linkbuilding als grootste ranking factor',
    image: '/development-hero.png',
    imageAlt: 'Linkbuilding dashboard'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom linkbuilding uitbesteden */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">linkbuilding uitbesteden</span> de slimste keuze is
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Linkbuilding is het meest krachtige onderdeel van SEO - maar ook het meest complexe en risicovol. Een sterke backlink van een autoritaire website in jouw niche kan maanden aan andere SEO-inspanningen evenaren. Maar één verkeerde link kan ook resulteren in een Google penalty die je rankings volledig vernietigt.
            </p>
            <p>
              Het verschil tussen succesvol en schadelijk linkbuilding zit in nuance: relevantie van de linking domain, natuurlijkheid van anchor text distributie, contextual fit van de link placement, en timing van link acquisition. Deze details maken het verschil tussen duurzame rankings en een catastrofale devaluatie.
            </p>
            <p className="font-semibold">
              Professionele linkbuilding levert drie cruciale voordelen:
            </p>
            <div className="space-y-3 ml-6">
              <p className="text-gray-700">
                Risk mitigation: Vermijden van penalty-triggers zoals unnatural link patterns, irrelevante linking domains of over-optimized anchor text. Eén verkeerde campagne kan jaren SEO-werk tenietdoen.
              </p>
              <p className="text-gray-700">
                Network access: Gevestigde linkbuilders hebben relaties met publishers in diverse niches. Dit betekent snellere plaatsingen, betere tarieven en hogere acceptance rates dan cold outreach.
              </p>
              <p className="text-gray-700">
                Strategic efficiency: In plaats van bulk links verzamelen, focussen we op high-leverage opportunities die maximale impact hebben op je target keywords met minimale links.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Waarom Niblah voor linkbuilding */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">Niblah</span> voor jouw linkbuilding?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Bij Niblah bouwen we aan autoriteit door kwaliteit boven kwantiteit te stellen, met volledige transparantie.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* White-hat only */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">White-hat strategieën alleen</h3>
              <p className="text-gray-600 mb-4">
                Wij gebruiken uitsluitend linkbuilding tactieken die Google expliciet goedkeurt. Geen PBN's, geen link farms, geen automated outreach spam. Elke link is editorial placement op een real website met real traffic en authority.
              </p>
            </div>

            {/* Relevantie eerst */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Relevantie boven metrics</h3>
              <p className="text-gray-600 mb-4">
                Een DR 40 website in jouw exacte niche is waardevoller dan een DR 70 website zonder topical relevance. We selecteren linking domains op thematic fit, niet alleen op authority metrics. Contextual relevance is de strongest ranking signal.
              </p>
            </div>

            {/* Volledige transparantie */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Volledige transparantie</h3>
              <p className="text-gray-600 mb-4">
                Je krijgt toegang tot elke link die we plaatsen: exact URL, anchor text, context, linking domain metrics. Geen black box - je ziet precies waar je investering naartoe gaat en welke impact elke link heeft op rankings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onze linkbuilding aanpak */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Onze <span className="bg-[#FFE500] px-2 rounded">strategische linkbuilding aanpak</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Van competitieve analyse tot link plaatsing - zo bouwen we systematisch aan jouw online autoriteit.
          </p>

          <div className="space-y-6">
            {/* Stap 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  01
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitieve Backlink Analyse</h3>
                  <p className="text-gray-700 mb-4">
                    We starten met een diepgaande analyse van de backlink profielen van je top 3-5 concurrenten die ranken voor jouw target keywords. Dit reverse-engineering proces onthult exact welk type links Google waardeert in jouw niche. We exporteren elke link, categoriseren op link type (guest posts, citations, editorial mentions, resource pages) en analyseren anchor text distributie.
                  </p>
                  <p className="text-gray-700">
                    Daarnaast identificeren we link gaps: websites die naar meerdere concurrenten linken maar nog niet naar jou. Deze "low-hanging fruit" opportunities leveren vaak snelle wins omdat deze sites al bewezen interesse hebben in jouw topic area.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Link Acquisition Strategie</h3>
                  <p className="text-gray-700 mb-4">
                    Gebaseerd op de competitive analysis bouwen we een prioritized link acquisition roadmap. We balanceren verschillende link types om een natuurlijk profiel te creëren: editorial links (highest value, moeilijkst te verkrijgen), resource page inclusions, niche directory listings, guest contributions en digital PR mentions.
                  </p>
                  <p className="text-gray-700">
                    Voor anchor text strategie volgen we natural distribution patterns: merendeel branded/URL anchors, minority exact-match, en LSI variations. Dit voorkomt over-optimization penalties terwijl we nog steeds keyword relevance signaleren naar Google.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prospect Outreach & Vetting</h3>
                  <p className="text-gray-700 mb-4">
                    We identificeren linkable assets op je website (of creëren deze indien nodig) en matchen deze met relevant prospects. Elke prospect wordt gevetted op traffic (organic visits via Ahrefs), topical relevance, spam score, existing outbound link patterns en editorial standards.
                  </p>
                  <p className="text-gray-700">
                    Outreach is gepersonaliseerd per prospect - geen mass email blasts. We demonstreren waarom onze content waarde toevoegt voor hun audience. Voor paid placements onderhandelen we tarieven en valideren dat de site geen excessive advertising heeft die link value dilutes.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Creation & Link Placement</h3>
                  <p className="text-gray-700 mb-4">
                    Voor guest posts en contributed content schrijven onze content specialists hoogwaardige artikelen die editorial standards halen. Content is genuinely informative - geen thin excuses om een link te droppen. Links worden natuurlijk geïntegreerd in context waar ze thematically fit.
                  </p>
                  <p className="text-gray-700">
                    We volgen publisher guidelines strict en respecteren hun editorial proces. Na publicatie documenteren we de exact URL, anchor text, surrounding context en initial rankings voor target keywords om link impact te meten.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoring & Link Maintenance</h3>
                  <p className="text-gray-700 mb-4">
                    Linkbuilding stopt niet bij plaatsing. We monitoren elke link monthly om te valideren dat deze live blijft, dofollow status behoudt, en niet geplaatst wordt op pagina's die later spam worden. Links die verdwijnen of devalueren worden proactief vervangen.
                  </p>
                  <p className="text-gray-700">
                    We tracken ook ranking impact: welke links correleren met ranking jumps voor target keywords? Deze data informeert onze strategie refinement - we double down op link types die proven ROI leveren en elimineren tactieken die underperformen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 redenen om uit te besteden */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            3 redenen om <span className="bg-[#1795FF] text-white px-2 rounded">linkbuilding uit te besteden</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Reden 1 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Penalty risico eliminatie</h3>
              <p className="text-gray-600 text-center">
                Google's link spam algoritmes worden steeds sophisticateder. Één verkeerde linkbuilding campaign kan in een manual action of algorithmic devaluation resulteren die maanden duurt om te recoveren. Experts kennen exact waar de boundaries liggen.
              </p>
            </div>

            {/* Reden 2 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center text-3xl mb-6 mx-auto">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Established publisher relaties</h3>
              <p className="text-gray-600 text-center">
                Cold outreach heeft 2-5% response rates. Gevestigde linkbuilders hebben bestaande relaties met editors en publishers, wat betekent: snellere placements, betere tarieven, en hogere acceptance rates voor contributed content.
              </p>
            </div>

            {/* Reden 3 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">ROI optimalisatie</h3>
              <p className="text-gray-600 text-center">
                Professionals weten welke links daadwerkelijk rankings bewegen. In plaats van budget verspillen aan low-impact links, focussen we op high-leverage opportunities die maximale ROI leveren per geïnvesteerde euro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Concrete <span className="bg-[#1795FF] text-white px-2 rounded">linkbuilding resultaten</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Hoe strategische linkbuilding rankings en traffic transformeert
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl">
                  NV
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">NatureVital</h3>
                  <p className="text-sm text-gray-600">Strategic Linkbuilding | 9 maanden</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Gefocuste linkbuilding campagne op 15 high-value keywords bracht doorbraak in competitive health niche
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">127</div>
                  <div className="text-sm text-gray-600">kwalitatieve backlinks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">468%</div>
                  <div className="text-sm text-gray-600">organisch traffic groei</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">12/15</div>
                  <div className="text-sm text-gray-600">keywords in top 3</div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center font-bold text-white text-2xl">
                  TP
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">TechPioneer SaaS</h3>
                  <p className="text-sm text-gray-600">Authority Building | 12 maanden</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Digital PR en editorial links bouwden brand authority in competitive B2B software space
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">89</div>
                  <div className="text-sm text-gray-600">high-DR editorial links</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">DA 47</div>
                  <div className="text-sm text-gray-600">naar DA 68</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">312%</div>
                  <div className="text-sm text-gray-600">branded search volume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews sectie */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Dit zeggen <span className="bg-[#FFE500] px-2 rounded">onze klanten</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Over onze linkbuilding resultaten
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Niblah's linkbuilding was een gamechanger. Ze focussen op kwaliteit - elke link die ze plaatsen is relevant en high-authority. Rankings stegen consistent!"
              </p>
              <p className="font-bold text-gray-900">Martijn Scholten</p>
            </div>

            {/* Review 2 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Volledige transparantie in welke links waar worden geplaatst. Ze begrijpen dat linkbuilding strategic moet zijn, niet quantity-focused. Top expertise!"
              </p>
              <p className="font-bold text-gray-900">Sofie Hendriks</p>
            </div>

            {/* Review 3 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <div className="flex mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-[#FFE500]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Na een penalty door slechte linkbuilding van vorig bureau, herstelde Niblah ons profiel en bouwde het correct opnieuw op. Professioneel en veilig!"
              </p>
              <p className="font-bold text-gray-900">Robin de Vries</p>
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

      {/* Link types we use */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Link types die we <span className="bg-[#1795FF] text-white px-2 rounded">strategisch inzetten</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Verschillende link types hebben verschillende functies - wij balanceren deze voor optimaal effect.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Editorial Links */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl">
                  ⭐
                </div>
                <h3 className="text-xl font-bold text-gray-900">Editorial & PR Links</h3>
              </div>
              <p className="text-gray-700 mb-3">
                De meest waardevolle link type. Editorial links worden naturally gegeven door publishers omdat jouw content genuinely valuable is. Denk: journalisten die naar je data linken, industry blogs die je research citeren.
              </p>
              <div className="bg-[#F5F5F5] rounded-lg p-4">
                <p className="text-sm text-gray-600"><strong>Impact:</strong> Highest authority transfer, strongest ranking signal</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Strategie:</strong> Digital PR campaigns, original research, data studies</p>
              </div>
            </div>

            {/* Guest Posts */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-xl">
                  ✍️
                </div>
                <h3 className="text-xl font-bold text-gray-900">Guest Contributions</h3>
              </div>
              <p className="text-gray-700 mb-3">
                High-quality contributed content op industry-relevante websites. Niet "guest post for SEO" maar genuinely informative artikelen die hun audience helpen. Links zijn natural byproduct.
              </p>
              <div className="bg-[#F5F5F5] rounded-lg p-4">
                <p className="text-sm text-gray-600"><strong>Impact:</strong> Strong relevance signal, targeted traffic</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Strategie:</strong> Relationship building met niche publishers</p>
              </div>
            </div>

            {/* Resource Links */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl">
                  📚
                </div>
                <h3 className="text-xl font-bold text-gray-900">Resource Page Inclusions</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Links van curated resource pages en "best of" lists in jouw niche. Deze pagina's bestaan om users te helpen quality resources vinden - als jouw content excellent is, verdien je inclusion.
              </p>
              <div className="bg-[#F5F5F5] rounded-lg p-4">
                <p className="text-sm text-gray-600"><strong>Impact:</strong> Consistent referral traffic, topical relevance</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Strategie:</strong> Content excellence, targeted outreach</p>
              </div>
            </div>

            {/* Citations */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-xl">
                  🏢
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business Citations & Directories</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Quality directories en niche-specific citations. We focussen op high-authority, editorially curated directories - niet elke random business listing. Vooral waardevol voor local SEO.
              </p>
              <div className="bg-[#F5F5F5] rounded-lg p-4">
                <p className="text-sm text-gray-600"><strong>Impact:</strong> Foundation links, local relevance signals</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Strategie:</strong> Selective high-quality directory inclusion</p>
              </div>
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
                Wat is linkbuilding en waarom is het belangrijk?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Linkbuilding is het proces van het verkrijgen van hyperlinks van andere websites naar jouw website. Google gebruikt deze backlinks als "votes of confidence" - websites met meer kwalitatieve backlinks worden als authoritatief beschouwd en ranken hoger. Het is één van de meest impactvolle ranking factors, maar vereist expertise om veilig en effectief uit te voeren.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoeveel backlinks heb ik nodig om te ranken?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Er is geen magic number - het hangt af van je niche competitiveness. In competitive niches kunnen concurrenten 500+ backlinks hebben, terwijl in niche markets 20-30 quality links al substantial impact hebben. Kwaliteit trumps kwantiteit altijd: één link van een high-authority, relevante site kan meer waard zijn dan 100 low-quality links.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat maakt een backlink kwalitatief?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Quality backlinks komen van websites met: 1) Hoge domain authority en traffic, 2) Topical relevance met jouw niche, 3) Editorial placement (niet sitewide footer/sidebar), 4) Natural anchor text, 5) Real human visitors, en 6) Clean backlink profile zonder spam. Een DR 35 link van een niche-relevante site is vaak waardevoller dan een DR 70 link van een irrelevante site.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Is linkbuilding niet risky? Kan ik een penalty krijgen?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Manipulative linkbuilding (paid links zonder disclosure, link farms, PBN's, exact-match anchor spam) kan inderdaad resulteren in penalties. Daarom gebruiken wij uitsluitend white-hat tactieken: editorial links, quality guest posts, resource inclusions en digital PR. Deze methods zijn Google-approved en penalty-safe. Het risico zit in DIY linkbuilding zonder expertise.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe lang duurt het voor ik resultaten zie van linkbuilding?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Linkbuilding is geen instant gratification - Google heeft tijd nodig om nieuwe links te crawlen, evalueren en in rankings te verwerken. Eerste movement zie je vaak na 4-8 weken, maar substantiële ranking improvements nemen typisch 3-6 maanden. Dit hangt ook af van je baseline authority en competitive landscape. Patience is key - maar de resultaten zijn duurzaam.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-[#F5F5F5] border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Kan ik linkbuilding zelf doen of moet ik uitbesteden?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Je kunt linkbuilding zelf doen, maar het vereist significant expertise, time investment en publisher relationships. Professionals hebben established contacts (snellere placements), kennen exact welke tactieken safe zijn (penalty avoidance), en weten welke link types actual ROI leveren. Voor most businesses is outsourcing cost-effective omdat experts 5-10x efficiënter zijn.
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
