import ServicePageTemplate from '../../../../components/templates/ServicePageTemplate'
import SEOReviewSlider from '../../../../components/SEOReviewSlider'
import SEOConsultSection from '../../../../components/SEOConsultSection'
import Link from 'next/link'

export const metadata = {
  title: 'Technische SEO | Website Optimalisatie voor Betere Rankings | Niblah',
  description: 'Technische SEO optimalisatie die werkt. Verbeter crawlbaarheid, snelheid en Core Web Vitals voor hogere rankings in Google. Meer traffic en betere conversies.',
}

export default function TechnicalSEOPage() {
  const heroData = {
    badge: 'Een website die technisch perfect is én converteert',
    title: 'Technische SEO',
    description: 'Wil je een website die technisch vlekkeloos functioneert én bijdraagt aan hogere rankings in Google? Onze technische SEO specialisten optimaliseren crawlbaarheid, snelheid en Core Web Vitals voor maximale vindbaarheid. Het resultaat: meer organisch traffic, betere gebruikerservaring en hogere conversies.',
    ctaText: 'Plan gratis kennismaking',
    ctaLink: '/contact',
    note: '* 78% van websites heeft technische SEO issues die rankings beperken',
    image: '/development-hero.png',
    imageAlt: 'Technical SEO dashboard'
  }

  return (
    <ServicePageTemplate 
      hero={heroData}
    >
      {/* Waarom technische SEO belangrijk is */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">technische SEO</span> de basis is voor online succes
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Een visueel aantrekkelijke website met kwalitatieve content is mooi, maar zonder solide technische foundation bereik je nooit je volledige potentieel in Google. Technische SEO vormt het fundament waarop alle andere optimalisaties bouwen: zonder correcte indexatie, geen rankings; zonder snelheid, geen goede gebruikerservaring.
            </p>
            <p>
              Moderne zoekmachines beoordelen websites op steeds meer technische factoren. Google's Core Web Vitals, mobile-first indexing en page experience updates maken één ding duidelijk: technische excellentie is geen nice-to-have meer, maar een must-have voor competitieve rankings. Websites die technisch achterlopen verliezen terrein aan concurrenten.
            </p>
            <p className="font-semibold">
              Technische SEO optimalisatie heeft directe impact op cruciale performance metrics:
            </p>
            <div className="space-y-3 ml-6">
              <p className="text-gray-700">
                Crawling en indexering: Google kan alleen ranken wat ze kunnen vinden en begrijpen. Technische blokkades zorgen dat waardevolle content nooit in de index belandt.
              </p>
              <p className="text-gray-700">
                Pagina snelheid en Core Web Vitals: Snelheid is een directe ranking factor en beïnvloedt bounce rates drastisch. Een seconde vertraging kan 7% conversie verlies betekenen.
              </p>
              <p className="text-gray-700">
                Quality Score in advertenties: Technische prestaties beïnvloeden je Google Ads Quality Score en daarmee je kosten per click in betaalde campagnes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <SEOReviewSlider />

      {/* Waarom Niblah voor technische SEO */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Waarom <span className="bg-[#1795FF] text-white px-2 rounded">technische SEO</span> uitbesteden aan Niblah?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Bij Niblah combineren we diepgaande technische kennis met marketing expertise voor optimalisaties die écht impact maken.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Holistische technische expertise */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                ⚙️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Holistische technische expertise</h3>
              <p className="text-gray-600 mb-4">
                Onze specialisten combineren development kennis met SEO-expertise. We begrijpen niet alleen wat Google wil zien, maar ook hoe we dat technisch realiseren binnen jouw specifieke platform. Van crawl budget optimalisatie tot JavaScript rendering en schema markup implementatie.
              </p>
            </div>

            {/* Data-gedreven diagnostiek */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-gedreven diagnostiek</h3>
              <p className="text-gray-600 mb-4">
                We baseren diagnoses op real user data uit Google Search Console en Chrome User Experience Report, niet op geautomatiseerde tool outputs. Elke aanbeveling wordt onderbouwd met harde data en business impact analyse, zodat je prioriteert op ROI.
              </p>
            </div>

            {/* Developer-friendly implementatie */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl mb-4">
                💻
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Developer-friendly implementatie</h3>
              <p className="text-gray-600 mb-4">
                Onze technische audits worden geleverd met concrete, gedetailleerde implementatie instructies die developers direct kunnen uitvoeren. We spreken hun taal en denken mee over de technische haalbaarheid binnen jouw tech stack en resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Twee trajecten */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Technische SEO voor <span className="bg-[#FFE500] px-2 rounded">nieuwe én bestaande websites</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Of je nu een nieuwe website bouwt of een bestaande wilt optimaliseren - wij hebben de juiste aanpak.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nieuwe website */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1795FF] border-2 border-black rounded-full flex items-center justify-center text-white text-2xl">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nieuwe website begeleiding</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Bij nieuwe websites is preventie beter dan genezen. We begeleiden je development team vanaf dag één om technische SEO correct te implementeren. Dit voorkomt kostbare hersteloperaties na launch.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-[#1795FF] pl-4">
                  <p className="font-semibold text-gray-900 mb-1">Pre-launch SEO audit</p>
                  <p className="text-sm text-gray-600">We reviewen architectuur, URL structuur en technische implementatie vóór de website live gaat.</p>
                </div>
                <div className="border-l-4 border-[#1795FF] pl-4">
                  <p className="font-semibold text-gray-900 mb-1">Developer consultancy</p>
                  <p className="text-sm text-gray-600">Direct overleg met je development team over best practices voor crawlbaarheid en indexatie.</p>
                </div>
                <div className="border-l-4 border-[#1795FF] pl-4">
                  <p className="font-semibold text-gray-900 mb-1">Launch validation</p>
                  <p className="text-sm text-gray-600">Post-launch monitoring om te garanderen dat alle technische elementen correct functioneren.</p>
                </div>
              </div>
            </div>

            {/* Bestaande website */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[6px_6px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFE500] border-2 border-black rounded-full flex items-center justify-center text-2xl">
                  🔧
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Bestaande website optimalisatie</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Voor bestaande websites voeren we een complete technische audit uit om alle optimalisatiekansen te identificeren. We prioriteren issues op basis van impact en implementatie effort.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-[#FFE500] pl-4">
                  <p className="font-semibold text-gray-900 mb-1">Diepgaande technical audit</p>
                  <p className="text-sm text-gray-600">Comprehensive analyse van crawling, indexatie, site structure, performance en Core Web Vitals.</p>
                </div>
                <div className="border-l-4 border-[#FFE500] pl-4">
                  <p className="font-semibold text-gray-900 mb-1">Prioritized roadmap</p>
                  <p className="text-sm text-gray-600">Duidelijk actieplan met impact-scores en geschatte ROI per optimalisatie.</p>
                </div>
                <div className="border-l-4 border-[#FFE500] pl-4">
                  <p className="font-semibold text-gray-900 mb-1">Implementation support</p>
                  <p className="text-sm text-gray-600">Hands-on begeleiding tijdens implementatie en validatie van alle technische fixes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 onderdelen technische audit */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            De 5 pijlers van <span className="bg-[#1795FF] text-white px-2 rounded">technische SEO auditing</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Onze technische audits analyseren systematisch deze vijf kritieke gebieden voor complete website gezondheid.
          </p>

          <div className="space-y-6">
            {/* Pijler 1 */}
            <div className="bg-[#F5F5F5] border-2 border-black rounded-xl p-8 shadow-[4px_4px_0_0_#000]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  01
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Crawling & Indexatie Optimalisatie</h3>
                  <p className="text-gray-700 mb-4">
                    Google's crawlers moeten je website efficient kunnen verkennen. We analyseren crawl budget allocatie, identificeren orphan pages die niet ontdekt worden, en elimineren crawl traps die resources verspillen. Daarnaast valideren we of alle strategische pagina's correct worden geïndexeerd en niet geblokkeerd worden door robots.txt, noindex tags of canonicals.
                  </p>
                  <p className="text-gray-700">
                    Ook onderzoeken we XML sitemap configuratie, pagination implementatie en faceted navigation structuren die vaak indexatie problemen veroorzaken. Het doel: garanderen dat Google zijn crawl budget besteedt aan jouw meest waardevolle content.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Site Architectuur & URL Structuur</h3>
                  <p className="text-gray-700 mb-4">
                    Een logische site structuur verbetert zowel user experience als SEO performance. We evalueren je information architecture, internal linking patterns en URL hiërarchie. Belangrijke content moet binnen 3 clicks bereikbaar zijn vanaf de homepage voor optimale link equity distributie.
                  </p>
                  <p className="text-gray-700">
                    We identificeren redirect chains die crawl efficiency verminderen, broken links die autoriteit verspillen en duplication issues die rankings verdunnen. Een geoptimaliseerde architectuur zorgt dat PageRank effectief door je site flows naar conversie-kritieke pagina's.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Web Vitals & Page Experience</h3>
                  <p className="text-gray-700 mb-4">
                    Google's Core Web Vitals zijn directe ranking factoren: Largest Contentful Paint (loading), First Input Delay (interactivity) en Cumulative Layout Shift (visual stability). We analyseren real user metrics via Chrome UX Report en identificeren exact welke elementen performance bottlenecks veroorzaken.
                  </p>
                  <p className="text-gray-700">
                    Veelvoorkomende issues: ongeoptimaliseerde images, render-blocking JavaScript, inefficient CSS delivery en third-party scripts. We leveren concrete technische fixes met gemeten impact op Core Web Vitals scores voor betere rankings en lagere bounce rates.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Server & Hosting Configuratie</h3>
                  <p className="text-gray-700 mb-4">
                    Server-side performance is vaak overlooked maar cruciaal voor SEO. We evalueren Time To First Byte (TTFB), HTTP/2 of HTTP/3 support, compression (Gzip/Brotli), browser caching configuratie en CDN implementation. Een trage server saboteert alle front-end optimalisaties.
                  </p>
                  <p className="text-gray-700">
                    Ook analyseren we security headers (HTTPS, HSTS), mobile serving setup (responsive vs adaptive) en geo-targeting configuratie voor internationale sites. Correcte server setup is fundamenteel voor zowel rankings als gebruikerservaring.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Structured Data & Rich Results</h3>
                  <p className="text-gray-700 mb-4">
                    Schema markup helpt Google je content beter begrijpen en kan leiden tot rich results in search - een major competitive advantage. We implementeren relevante schema types: Product, FAQ, HowTo, Recipe, Review, Article, Organization en meer.
                  </p>
                  <p className="text-gray-700">
                    Correct geïmplementeerde structured data verhoogt click-through rates substantieel door enhanced SERP features. We valideren alle markup tegen Google's richtlijnen om penalties te vermijden en maximaliseren rich result eligibility voor jouw belangrijkste landing pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Deze klanten <span className="bg-[#1795FF] text-white px-2 rounded">gingen je voor</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Concrete resultaten van technische SEO optimalisaties
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#FFE500] border-2 border-black rounded-xl flex items-center justify-center font-bold text-2xl">
                  DW
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">DigitalWorks</h3>
                  <p className="text-sm text-gray-600">Technical SEO | Core Web Vitals</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Complete technische overhaul verbeterde performance én rankings drastisch
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">342%</div>
                  <div className="text-sm text-gray-600">meer organisch traffic</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">68%</div>
                  <div className="text-sm text-gray-600">snellere laadtijd</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">89%</div>
                  <div className="text-sm text-gray-600">Core Web Vitals pass</div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white border-2 border-black rounded-xl p-8 shadow-[8px_8px_0_0_#000]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#1795FF] border-2 border-black rounded-xl flex items-center justify-center font-bold text-white text-2xl">
                  EH
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">EcoHome Solutions</h3>
                  <p className="text-sm text-gray-600">Crawl Optimalisatie | Indexatie</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Crawl budget optimalisatie ontsloeg 1000+ nieuwe pagina's voor indexatie
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">847%</div>
                  <div className="text-sm text-gray-600">meer geïndexeerde pagina's</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">4.7x</div>
                  <div className="text-sm text-gray-600">betere crawl efficiency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1795FF]">267%</div>
                  <div className="text-sm text-gray-600">keyword visibility groei</div>
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
            Dit is wat <span className="bg-[#FFE500] px-2 rounded">onze klanten zeggen</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Resultaten die spreken voor zich.
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
                "De technische audit van Niblah was ongekend grondig. Ze vonden issues die onze developers nooit hadden ontdekt. Rankings schoten omhoog na implementatie!"
              </p>
              <p className="font-bold text-gray-900">Pieter Klaassen</p>
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
                "Core Web Vitals waren onze achilleshiel. Niblah loste het systematisch op. Nu scoren we groen op alle metrics en zien we het terug in traffic!"
              </p>
              <p className="font-bold text-gray-900">Daan Mulder</p>
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
                "Eindelijk technical SEO experts die developers taal spreken. Hun implementatie instructies waren perfect gedocumenteerd en direct uitvoerbaar!"
              </p>
              <p className="font-bold text-gray-900">Sarah Bakker</p>
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
      <section className="py-16 md:py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde <span className="bg-[#FFE500] px-2 rounded">vragen</span>
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe weet ik of mijn website technisch verbeterd moet worden?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Signalen dat technische SEO aandacht nodig heeft: dalende rankings zonder content wijzigingen, trage pagina snelheid, rode scores in Google PageSpeed Insights, weinig geïndexeerde pagina's t.o.v. totaal aantal pagina's, of crawl errors in Google Search Console. Een gratis audit geeft direct inzicht in de status van je technical health.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat wordt er vanuit mijn kant verwacht bij technische SEO?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Minimaal heb je toegang nodig tot Google Search Console en Google Analytics. Voor implementatie werken we samen met jouw development team of CMS beheerder. We leveren gedetailleerde instructies die zij direct kunnen uitvoeren. Technische kennis aan jouw kant is niet vereist - wij bridgen de gap tussen SEO en development.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Waarom gebruiken jullie zo weinig tools bij technische SEO?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Automated tools geven superficial diagnostics zonder context. Ze genereren lange lijsten met issues, maar missen vaak de root cause. Wij gebruiken tools voor data gathering, maar onze expertise zit in interpretatie en prioritization. We analyseren de specifieke situatie van jouw website en tech stack om aanbevelingen te doen die écht ROI opleveren.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Wat levert technische SEO optimalisatie op?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Directe benefits: betere rankings door verbeterde crawlbaarheid en indexatie, hogere traffic via snellere load times en betere Core Web Vitals, lagere bounce rates en hogere conversies door verbeterde UX. Technical SEO is een force multiplier - het versterkt alle andere SEO en marketing efforts.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Hoe snel zie ik resultaat van technische SEO wijzigingen?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Performance verbeteringen (snelheid, Core Web Vitals) zijn onmiddellijk zichtbaar. Ranking impact hangt af van crawl frequency - voor frequently crawled sites binnen dagen tot weken, voor kleinere sites kan het enkele weken duren. We monitoren Google Search Console nauwkeurig om impact te meten en bij te sturen waar nodig.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="bg-white border-2 border-black rounded-xl p-6 shadow-[4px_4px_0_0_#000]">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer">
                Kan elk website platform technisch geoptimaliseerd worden?
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Vrijwel elk platform kan worden geoptimaliseerd, maar de mate van controle varieert. Custom builds en platforms zoals WordPress, Shopify Plus en headless CMS systemen bieden maximale flexibiliteit. Hosted platforms zoals Squarespace of Wix hebben meer beperkingen. We analyseren altijd eerst je platform om realistische verwachtingen te schetsen over wat technisch haalbaar is.
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
