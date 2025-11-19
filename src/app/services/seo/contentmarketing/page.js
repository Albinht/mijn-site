import ServicePageTemplate from '../../../../components/templates/ServicePageTemplate'
import SEOReviewSlider from '../../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../../components/SEOConsultSection'
import ProcessSlider from '../../../../components/ProcessSlider'
import Link from 'next/link'

export const metadata = {
  title: 'Content Marketing Uitbesteden | Meer Traffic & Autoriteit | Niblah',
  description: 'Content marketing uitbesteden aan experts die strategische content creëren. Bouw online autoriteit, genereer traffic en vergroot je conversies met waardevolle content die écht werkt.',
}

export default function ContentMarketingPage() {
  const heroData = {
    badge: 'Strategische content die autoriteit bouwt en traffic genereert',
    title: 'Content marketing uitbesteden',
    description: 'Wil je online autoriteit opbouwen en structureel meer bezoekers trekken? Door content marketing uit te besteden aan specialisten investeer je in strategische content die jouw doelgroep bereikt, overtuigt en tot actie aanzet. Het resultaat: meer websitebezoekers, hogere conversies en meetbare groei.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* 87% van bedrijven ziet onbenutte kansen in hun contentstrategie',
    image: '/development-hero.png',
    imageAlt: 'Content marketing dashboard'
  }

  const contentMarketingProcess = [
    {
      number: '01',
      title: 'Strategische contentanalyse',
      description: 'We starten met het in kaart brengen van jouw business doelstellingen en doelgroep. Welke content heeft jouw target nodig in verschillende fases van hun klantreis? We analyseren concurrentie, identificeren content gaps en bepalen welke contentformaten de beste ROI opleveren voor jouw specifieke situatie.',
      showNext: true
    },
    {
      number: '02',
      title: 'Merkpositionering en tone of voice',
      description: 'Jouw merkidentiteit vormt de basis voor alle content. We definiëren samen hoe je communiceert: formeel of toegankelijk, informatief of inspirerend. Deze tone of voice, gecombineerd met jouw unieke waardepropositie, zorgt ervoor dat alle content herkenbaar Niblah is en resoneert met je ideale klant.',
      showNext: true
    },
    {
      number: '03',
      title: 'Content creatie en productie',
      description: 'Nu begint het echte werk. Onze content creators produceren teksten, visuals en multimedia die perfect aansluiten bij jouw strategie. Elke contentpiece is geoptimaliseerd voor SEO, afgestemd op de juiste buyer persona en voorzien van duidelijke call-to-actions die conversie stimuleren.',
      showNext: true
    },
    {
      number: '04',
      title: 'Review en iteratie',
      description: 'Jouw input is cruciaal. We presenteren concepten voor goedkeuring en verwerken feedback efficiënt. Door korte feedback loops garanderen we dat de content perfect aansluit bij jouw verwachtingen en merkrichtlijnen.',
      showNext: true
    },
    {
      number: '05',
      title: 'Publicatie en performance tracking',
      description: 'Content gaat live volgens een strategische publicatieplanning. We monitoren performance metrics: traffic, engagement, conversies en ROI. Deze data-inzichten gebruiken we om de contentstrategie continu te optimaliseren en toekomstige content nog effectiever te maken.',
      showNext: false
    }
  ]

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom content marketing uitbesteden */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">content marketing uitbesteden</span> de slimme keuze is
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Content creëren kan iedereen - een blog schrijven, een social post maken of een video produceren. Maar strategische content die daadwerkelijk bijdraagt aan business groei? Dat vereist expertise, tijd en een doordachte aanpak die de meeste bedrijven intern niet kunnen realiseren.
            </p>
            <p>
              Effectieve content marketing combineert meerdere disciplines: SEO-kennis voor vindbaarheid, copywriting voor overtuigingskracht, design voor visuele impact en data-analyse voor optimalisatie. Daarnaast moet je content perfect aansluiten bij elke fase van de customer journey én consistent zijn met je merkidentiteit.
            </p>
            <p className="font-semibold">
              Organisaties die hun content marketing uitbesteden aan professionals realiseren concrete voordelen:
            </p>
            <div className="space-y-3 ml-6">
              <p className="text-gray-700">
                Strategische content die online autoriteit opbouwt en jouw merk positioneert als thought leader in je sector
              </p>
              <p className="text-gray-700">
                Consistente content productie zonder interne resource druk - professionele creators leveren kwaliteit op schema
              </p>
              <p className="text-gray-700">
                Meetbare resultaten: meer organisch traffic, hogere engagement en verbeterde conversieratio's door geoptimaliseerde content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Waarom Niblah voor content marketing */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">content marketing uitbesteden</span> aan Niblah?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Bij Niblah krijg je geen standaard contentproductie, maar strategische content die écht bijdraagt aan je business doelstellingen.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Data-gedreven content strategie */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-gedreven content strategie</h3>
              <p className="text-gray-600 mb-4">
                We baseren content beslissingen op harde data, niet op aannames. Door grondig keyword research, concurrent analyse en doelgroep insights te combineren, creëren we content die écht gevonden wordt en converteert. Elk contentpiece heeft een meetbaar doel en draagt bij aan je KPI's.
              </p>
            </div>

            {/* Multidisciplinair content team */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multidisciplinair content team</h3>
              <p className="text-gray-600 mb-4">
                Onze content creators werken nauw samen met SEO-specialisten, designers en strategen. Deze holistische aanpak garandeert dat content niet alleen mooi is, maar ook technisch geoptimaliseerd, strategisch relevant en visueel aantrekkelijk. Alle expertise onder één dak voor maximale content effectiviteit.
              </p>
            </div>

            {/* Full-funnel content aanpak */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full-funnel content aanpak</h3>
              <p className="text-gray-600 mb-4">
                We creëren content voor elke fase van de customer journey: awareness content om nieuwe prospects te bereiken, consideration content om vertrouwen op te bouwen en decision content die conversie stimuleert. Deze geïntegreerde aanpak maximaliseert de waarde van elk contentpiece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is content marketing */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Wat is <span className="bg-[#FFE500] px-2 rounded">content marketing</span> precies?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg mb-4">
              Content marketing is een strategische marketingaanpak gericht op het creëren en distribueren van waardevolle, relevante content om een specifieke doelgroep aan te trekken en te behouden. Het verschil met traditionele marketing? Je verkoopt niet direct, maar bouwt eerst autoriteit en vertrouwen op.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Effectieve content marketing vereist begrip van jouw doelgroep op diepgaand niveau: welke uitdagingen hebben ze, welke informatie zoeken ze en hoe kunnen jouw producten of diensten hun problemen oplossen? Door consistent waardevolle content te delen, positioneer je jouw merk als expert en bouw je een loyale community op.
            </p>
            <p className="text-gray-700 text-lg">
              Bij Niblah ontwikkelen we holistische content strategieën die alle touchpoints dekken: van SEO-geoptimaliseerde blog artikelen en whitepapers tot engaging social media content en educational video's. Elke contentvorm wordt ingezet waar deze het meeste impact heeft in de customer journey.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Deze klanten <span className="bg-[#1795FF] text-white px-2 rounded">gingen je voor</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Concrete resultaten van organisaties die hun content marketing uitbesteden
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl">
                  GC
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">GreenConnect</h3>
                  <p className="text-sm text-gray-600">Content Marketing | SEO | Social</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Structurele content productie transformeerde blog naar leadgeneratie machine
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">287%</div>
                  <div className="text-sm text-gray-600">meer organisch traffic</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">5.2x</div>
                  <div className="text-sm text-gray-600">meer downloads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">194%</div>
                  <div className="text-sm text-gray-600">groei in leads</div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center font-bold text-white text-2xl">
                  IP
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">InnovatePro</h3>
                  <p className="text-sm text-gray-600">Content Strategie | Thought Leadership</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Strategische thought leadership content bouwde sector autoriteit op
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">156%</div>
                  <div className="text-sm text-gray-600">hogere engagement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">3.7x</div>
                  <div className="text-sm text-gray-600">meer backlinks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">218%</div>
                  <div className="text-sm text-gray-600">brand awareness groei</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat levert content marketing op */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Content marketing uitbesteden: <span className="bg-[#FFE500] px-2 rounded">dit is wat het je oplevert</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Waarom kiezen organisaties ervoor om content marketing uit te besteden aan professionals? De return on investment spreekt voor zich:
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-[#F5F5F5] border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000]">
              <p className="text-gray-700">
                <span className="font-bold">Superieure online vindbaarheid en duurzaam traffic.</span> Strategische content die SEO-geoptimaliseerd is trekt maandelijks duizenden nieuwe bezoekers die actief zoeken naar jouw oplossingen. Dit organische traffic blijft groeien zonder extra advertentiebudget.
              </p>
            </div>

            <div className="p-6 bg-[#F5F5F5] border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000]">
              <p className="text-gray-700">
                <span className="font-bold">Opgebouwde thought leadership en merkautoriteit.</span> Content die diepgaand ingaat op challenges van jouw doelgroep positioneert je als industry expert. Prospects vertrouwen je expertise en kiezen eerder voor jouw oplossing boven concurrenten.
              </p>
            </div>

            <div className="p-6 bg-[#F5F5F5] border-2 border-black rounded-xl shadow-[4px_4px_0_0_#000]">
              <p className="text-gray-700">
                <span className="font-bold">Verhoogde conversies door educated prospects.</span> Content marketing educeert je doelgroep al voordat ze contact opnemen. Ze begrijpen hun probleem beter en zien jouw oplossing als de logische keuze, resulterend in kortere sales cycles en hogere conversieratio's.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* De werkwijze - Process Slider */}
      <ProcessSlider 
        title="De werkwijze voor <highlight>content marketing</highlight>"
        subtitle="Hoe creëren we strategische content die écht resultaat oplevert? Ons bewezen proces in vijf stappen:"
        steps={contentMarketingProcess}
        bgColor="bg-[#F5F5F5]"
        titleHighlight="bg-[#1795FF] text-white"
      />

      {/* Reviews sectie */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Dit is wat <span className="bg-[#FFE500] px-2 rounded">onze klanten zeggen</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Langdurige partnerships gebaseerd op vertrouwen en meetbaar resultaat.
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
                "Onze blog is getransformeerd van stoffig archief naar leadgeneratie machine. De content van Niblah trekt exact de juiste prospects en converteert consistent!"
              </p>
              <p className="font-bold text-gray-900">Emma de Vries</p>
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
                "Eindelijk een partner die strategisch denkt én uitvoert. Content marketing uitbesteden aan Niblah was onze beste marketing beslissing dit jaar!"
              </p>
              <p className="font-bold text-gray-900">Thomas Hendriks</p>
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
                "De strategische content die Niblah produceert heeft ons gepositioneerd als thought leader. We zien direct impact op inbound leads!"
              </p>
              <p className="font-bold text-gray-900">Jasper Visser</p>
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

      {/* Content types */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Content marketing uitbesteden: <span className="bg-[#FFE500] px-2 rounded">deze content creëren we</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Van strategische SEO-content tot engaging multimedia: we dekken alle contentformaten die jouw marketing strategie nodig heeft.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SEO-content & blogs */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl">
                  📝
                </div>
                <h3 className="text-xl font-bold text-gray-900">SEO-content & blogs</h3>
              </div>
              <p className="text-gray-700">
                Blog artikelen en pillar pages die organisch traffic genereren en autoriteit opbouwen. Onze SEO-specialisten identificeren high-value keywords en content creators produceren diepgaande artikelen die zowel Google als je doelgroep waarderen. Elke blog is strategisch ontworpen om rankings te verbeteren én bezoekers te converteren naar leads.
              </p>
            </div>

            {/* Website content */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-xl">
                  🌐
                </div>
                <h3 className="text-xl font-bold text-gray-900">Website content</h3>
              </div>
              <p className="text-gray-700">
                Homepage, about, service en product pagina's die je merkidentiteit communiceren en conversie stimuleren. We schrijven heldere, overtuigende website copy die jouw unique value proposition perfect vertaalt en bezoekers door een logische flow leidt naar gewenste acties. Elke pagina is geoptimaliseerd voor zowel gebruikservaring als SEO.
              </p>
            </div>

            {/* Video & multimedia */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl">
                  🎥
                </div>
                <h3 className="text-xl font-bold text-gray-900">Video & multimedia content</h3>
              </div>
              <p className="text-gray-700">
                Explainer videos, tutorials en social media content die engagement maximaliseren. Video content genereert 1200% meer shares dan tekst en afbeeldingen gecombineerd. We produceren professionele video's met scripts die resoneren, visuals die boeien en calls-to-action die converteren - geoptimaliseerd voor elk platform.
              </p>
            </div>

            {/* Email marketing content */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-xl">
                  ✉️
                </div>
                <h3 className="text-xl font-bold text-gray-900">Email marketing content</h3>
              </div>
              <p className="text-gray-700">
                Newsletters, nurture sequences en promotional emails die openen en conversie genereren. Email marketing levert gemiddeld €40 ROI per geïnvesteerde euro. Onze copywriters creëren compelling subject lines, engaging body copy en duidelijke CTAs die subscribers transformeren naar betalende klanten door strategische automation flows.
              </p>
            </div>

            {/* Whitepapers & ebooks */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-xl">
                  📚
                </div>
                <h3 className="text-xl font-bold text-gray-900">Whitepapers & ebooks</h3>
              </div>
              <p className="text-gray-700">
                Diepgaande gated content voor leadgeneratie en thought leadership. Whitepapers positioneren je als industry expert en zijn het meest effectieve format voor B2B leadgeneratie. We ontwikkelen research-backed documenten met professioneel design die prospects overtuigen hun contactgegevens te delen en je sales funnel te betreden.
              </p>
            </div>

            {/* Social media content */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-xl">
                  📱
                </div>
                <h3 className="text-xl font-bold text-gray-900">Social media content</h3>
              </div>
              <p className="text-gray-700">
                Platform-specifieke content die engagement en community growth stimuleert. Van LinkedIn thought leadership posts tot Instagram carousels en video content - we creëren sociale content die past bij elk platform's algoritme en user behavior. Inclusief caption copy, hashtag strategie en community management richtlijnen voor maximale reach.
              </p>
            </div>
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
                Wat zijn de voordelen van content marketing uitbesteden?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Door content marketing uit te besteden krijg je toegang tot gespecialiseerde expertise zonder interne resources op te bouwen. Professionals leveren consistente, hoogwaardige content die strategisch is afgestemd op je business doelen. Je bespaart tijd, realiseert betere SEO-resultaten en profiteert van bewezen content frameworks die conversie stimuleren.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat kost het om content marketing uit te besteden?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Kosten variëren afhankelijk van content volume, complexiteit en gewenste formaten. Een strategische blog kost anders dan video productie of whitepaper development. We bieden transparante projectprijzen en retainer modellen voor doorlopende content productie. Plan een vrijblijvend gesprek en we maken een custom offerte gebaseerd op jouw specifieke content behoeften.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe meet ik het succes van de uitbestede content?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We tracken concrete KPI's: organisch traffic growth, keyword rankings, engagement metrics (time on page, bounce rate), social shares, lead generation en conversion rates. Maandelijkse rapportages tonen exact welke content pieces de beste performance leveren. Deze data-inzichten gebruiken we om de strategie continu te optimaliseren voor maximale ROI.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat doet een content marketing bureau precies?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Een content marketing bureau ontwikkelt holistische content strategieën gebaseerd op jouw business doelen en doelgroep insights. We hanteren een data-driven aanpak: keyword research, competitor analyse en customer journey mapping informeren alle content beslissingen. Vervolgens produceren we diverse content formaten, optimaliseren voor SEO en distribueren via relevante kanalen.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom content marketing uitbesteden aan Niblah?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Bij Niblah werk je met een multidisciplinair team waar content creators nauw samenwerken met SEO-experts, designers en data-analisten. Deze geïntegreerde aanpak garandeert dat content niet alleen mooi is, maar ook technisch perfect, strategisch relevant en data-geoptimaliseerd. We leveren content die meetbaar bijdraagt aan je business groei.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoeveel content heb ik nodig voor resultaat?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Content marketing is een long-term investment. Minimaal hebben bedrijven baat bij 2-4 strategische blog posts per maand, gecombineerd met website optimalisatie en social content. Voor snellere resultaten adviseren we een intensievere content productie van 8-12 pieces per maand over diverse formaten. We stemmen volume altijd af op je budget en groeidoelstellingen.
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
