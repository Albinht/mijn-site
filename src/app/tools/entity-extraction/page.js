'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserGroupIcon, MapPinIcon, BuildingOfficeIcon, CalendarIcon, TagIcon, SparklesIcon } from '@heroicons/react/24/outline';

const ENTITY_TYPES = {
  PERSON: { icon: UserGroupIcon, color: 'blue', label: 'Personen' },
  ORGANIZATION: { icon: BuildingOfficeIcon, color: 'purple', label: 'Organisaties' },
  LOCATION: { icon: MapPinIcon, color: 'green', label: 'Locaties' },
  DATE: { icon: CalendarIcon, color: 'orange', label: 'Datums' },
  OTHER: { icon: TagIcon, color: 'gray', label: 'Overig' },
};

export default function EntityExtraction() {
  const [text, setText] = useState('');
  const [entities, setEntities] = useState(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [error, setError] = useState('');

  const wordCount = text.trim().split(/\s+/).filter(w => w).length;

  const handleExtract = async () => {
    if (!text.trim()) {
      setError('Voer tekst in om entiteiten te extracten');
      return;
    }

    if (wordCount < 50) {
      setError('Voer minimaal 50 woorden in voor betere resultaten');
      return;
    }

    setIsExtracting(true);
    setError('');
    setEntities(null);

    try {
      const response = await fetch('/api/tools/entity-extraction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      if (data.success) {
        setEntities(data.entities);
      } else {
        setError(data.error || 'Kon entiteiten niet extracten');
      }
    } catch (error) {
      setError('Er ging iets fout. Probeer het later opnieuw.');
    } finally {
      setIsExtracting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TagIcon className="h-12 w-12 text-cyan-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entity Extraction Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Extract automatisch entiteiten uit tekst: mensen, organisaties, locaties, datums. Named Entity Recognition voor SEO optimalisatie en content analyse.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Voer je tekst in:
              </label>
              <span className="text-sm text-gray-500">{wordCount} woorden</span>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Plak hier je tekst om entiteiten te extracten (artikelen, press releases, website content, etc.)..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
            />
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleExtract}
              disabled={isExtracting || !text.trim()}
              className="flex-1 bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold transition-colors"
            >
              {isExtracting ? (
                <>
                  <SparklesIcon className="h-5 w-5 animate-pulse" />
                  Entiteiten Extracten...
                </>
              ) : (
                <>
                  <TagIcon className="h-5 w-5" />
                  Extract Entiteiten
                </>
              )}
            </button>
            <button
              onClick={() => { setText(''); setEntities(null); setError(''); }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Wissen
            </button>
          </div>
        </div>

        {entities && (
          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Geëxtraheerde Entiteiten</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {Object.entries(entities).map(([type, items]) => {
                  const config = ENTITY_TYPES[type];
                  const Icon = config.icon;
                  return (
                    <div key={type} className={`bg-${config.color}-50 rounded-lg p-4 text-center`}>
                      <Icon className={`h-8 w-8 text-${config.color}-600 mx-auto mb-2`} />
                      <div className={`text-2xl font-bold text-${config.color}-600`}>{items.length}</div>
                      <div className="text-sm text-gray-600">{config.label}</div>
                    </div>
                  );
                })}
              </div>

              {Object.entries(entities).map(([type, items]) => {
                if (items.length === 0) return null;
                const config = ENTITY_TYPES[type];
                const Icon = config.icon;
                return (
                  <div key={type} className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={`h-6 w-6 text-${config.color}-600`} />
                      <h3 className="text-lg font-semibold text-gray-900">{config.label}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((entity, i) => (
                        <span key={i} className={`px-3 py-1 bg-${config.color}-100 text-${config.color}-700 rounded-full text-sm font-medium`}>
                          {entity}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SEO Content Section 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Entity Extraction: Named Entity Recognition voor SEO</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Entity extraction, ook bekend als Named Entity Recognition (NER), is het proces van automatisch identificeren en classificeren van entiteiten in tekst—mensen, organisaties, locaties, datums, en andere specifieke items. Deze entity extraction tool gebruikt AI om deze entiteiten te herkennen en te categoriseren. Waarom is dit belangrijk voor SEO? Google's algoritme begrijpt entiteiten en gebruikt ze om content te interpreteren, relevantie te bepalen, en knowledge graphs te bouwen.
            </p>

            <p>
              Wanneer je content schrijft met duidelijke entiteiten—bijvoorbeeld "Elon Musk" (persoon), "Tesla" (organisatie), "California" (locatie)—helpt dat Google begrijpen waar je content over gaat. Dit is belangrijker dan ooit sinds Google's focus op E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Entiteiten linken je content aan Google's Knowledge Graph. Als je schrijft over "Apple iPhone 15 release" en je noemt consistent entiteiten zoals "Apple Inc", "Tim Cook", "Cupertino", rankt je content beter omdat Google de relaties begrijpt.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Hoe Named Entity Recognition Werkt</h3>
            
            <p>
              Deze NER tool analyseert je tekst en identificeert verschillende entity types. Personen—namen van individuen die in je content voorkomen. Organisaties—bedrijven, instituten, merken. Locaties—steden, landen, plaatsen. Datums—tijdsreferenties, events. En andere entiteiten zoals producten, events, of technologieën. Het algoritme gebruikt context om te bepalen wat een entity is versus reguliere woorden. "Apple" als bedrijf versus "apple" als fruit—de AI begrijpt het verschil.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Entity-Based SEO Strategie</h4>
            
            <p>
              Entity-based SEO is de evolutie van keyword SEO. Oude SEO: "beste smartphone 2024" keyword stuffing. Moderne SEO: schrijf over "Samsung Galaxy S24" (product entity), vergelijk met "iPhone 15 Pro" (concurrent entity), noem specs, citeer "MKBHD" (authority entity), reference "CES 2024" (event entity). Google's NLP begrijpt deze entity relationships en waardeert je content als authoritative omdat je de right entities noemt in meaningful context.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Entity Optimization in Content</h4>
            
            <p>
              Gebruik deze tool om je content te auditen. Extract entities uit je artikelen—zie je genoeg relevante entiteiten? Een artikel over "Digital Marketing Trends" zonder entities zoals "Google", "Meta", "TikTok", "Gary Vaynerchuk", "HubSpot" is weak. Die entiteiten signaleren aan Google dat je actual industry knowledge hebt. Maar don't force it—entities moeten natuurlijk passen. Irrelevante name-dropping is spam. De tool helpt je zien of je entity coverage adequate is.
            </p>

            <p>
              Combine met <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword research</Link> en <Link href="/tools/rich-snippet-validator" className="text-blue-600 hover:underline">schema markup</Link> voor entity SEO.
            </p>
          </div>
        </div>

        {/* SEO Content Section 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Entiteiten SEO: Google Knowledge Graph Optimalisatie</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Google's Knowledge Graph is een massive database van entiteiten en hun relaties. Wanneer je zoekt "Elon Musk", zie je rechts een knowledge panel met facts: geboren 1971, CEO van Tesla en SpaceX, etc. Dat is Knowledge Graph data. Als jouw content consistent accurate entities noemt, kan Google je gebruiken als bron voor die Knowledge Graph. Dit boost je E-E-A-T en rankings omdat Google je ziet als reliable information source.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Entity Disambiguation en Context</h3>
            
            <p>
              Entity extraction is niet triviaal omdat veel woorden multiple betekenissen hebben—disambiguation is key. "Apple" kan zijn: het bedrijf, de vrucht, Apple Records (Beatles label). "Washington" kan zijn: de staat, DC, George Washington. Named Entity Recognition tools gebruiken context om te disambigueren. Als je tekst heeft "Apple released iPhone" weet de tool dat het over het bedrijf gaat. "Washington apples are delicious" → de staat/fruit. Goede entity extraction captures deze nuance.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Co-Occurrence en Entity Relationships</h4>
            
            <p>
              Google analyseert niet alleen welke entities je noemt maar ook hoe ze samen voorkomen—co-occurrence patterns. Als je artikel noemt "Tesla", "electric vehicles", "Elon Musk", "Gigafactory", "Model 3", signaleert dat topical authority. Deze entities co-occur logisch in automotive content. Maar "Tesla", "cooking recipes", "knitting" co-occurrence is weird—Google zou je content suspicious vinden. Use entity extraction om te verifiëren dat je entity combinations logical zijn.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Structured Data en Entiteiten</h4>
            
            <p>
              Schema.org markup helpt Google entities in je content begrijpen. Als je schrijft over "Steve Jobs" kun je Person schema toevoegen met properties: name, jobTitle, affiliation (Apple), birthDate. Organization schema voor bedrijven. Place schema voor locaties. Deze structured data reinforces wat entity extraction algorithms detecteren. Het is dubbele confirmation: "deze tekst gaat over Steve Jobs (persoon) en Apple (organisatie)". Dit boost je visibility in rich results.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Local SEO Entity Optimization</h3>
            
            <p>
              Voor local businesses zijn location entities cruciaal. Als je een restaurant in Amsterdam runt, moet je content consistent noemen: "Amsterdam" (stad), "Netherlands" (land), nearby landmarks ("Vondelpark"), neighboring streets ("Leidseplein"). Deze location entity density helpt Google je local relevance begrijpen. Combine met NAP consistency (Name, Address, Phone) en je local rankings skyrocketen. Entity extraction tool helpt auditen of je genoeg location entities hebt.
            </p>

            <p>
              Optimize verder met <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta descriptions</Link> en <Link href="/tools/anchor-text-generator" className="text-blue-600 hover:underline">anchor text</Link> strategieën.
            </p>
          </div>
        </div>

        {/* SEO Content Section 3 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Named Entity Recognition: Praktische Toepassingen</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Entity extraction heeft talloze use cases beyond SEO. Content categorisatie—automatically tag articles based on entities. Sentiment analysis—zie hoe entities worden beschreven (positive/negative). Competitive intelligence—extract competitor names uit industry reports. Research—analyze welke experts het meest geciteerd worden in je niche. Deze tool democratiseert NER—wat vroeger enterprise AI was is nu accessible voor iedereen.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Content Gap Analysis met Entities</h3>
            
            <p>
              Smart tactic: extract entities uit top-ranking concurrent articles. Zie welke entities zij consistent noemen die jij niet noemt. Als alle top 10 results voor "AI tools 2024" mention "ChatGPT", "Midjourney", "Claude AI", maar jouw artikel noemt ze niet, is dat een content gap. Update je artikel om relevante entities te includen. Dit is data-driven content optimization—niet gissen, maar analyseren wat high-ranking content doet differently.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Author Authority Building</h4>
            
            <p>
              Google evalueert author expertise partially via entity associations. Als je consistent schrijft over "Python programming" en je noemt entities zoals "Guido van Rossum" (Python creator), "Django framework", "PEP 8", "PyPI", build je author entity graph. Over tijd associeert Google jouw name met Python domain. Dit is hoe je thought leadership vestigt—niet claiming expertise maar demonstrating it via entity knowledge en accurate entity usage in content.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">E-commerce Product Entity Optimization</h4>
            
            <p>
              E-commerce sites moeten product entities optimaliseren. Product name, brand, model number, specifications—allemaal entities. Consistent naming is key. Don't alternate between "iPhone 15 Pro Max" en "Apple iPhone 15 Pro Max 256GB" randomly. Pick één canonical entity name en use it consistent. Add schema markup met Product type. Link naar brand entity pages. This entity consistency helps Google understand je product catalog en rank je product pages voor branded + non-branded searches.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Entity-Based Content Briefs</h3>
            
            <p>
              Wanneer je content briefs maakt voor writers, include entity requirements. Instead of "write 1500 words over AI tools", specify: "Write 1500 words covering entities: ChatGPT, Midjourney, Claude AI, Stable Diffusion, Google Bard. Include expert entities: Sam Altman, Demis Hassabis. Mention events: ChatGPT launch November 2022, GPT-4 release." This entity-focused brief zorgt dat je content comprehensive is met all relevant entities die Google verwacht te zien in authoritative content.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Monitoring Entity Mentions</h4>
            
            <p>
              Track wanneer jouw brand of name als entity wordt genoemd in andere content. Use entity extraction om te scrapen industry blogs, news sites, forums—zie waar je entity appears. Hoge frequency van je entity in quality content = authority signal. Low mentions = je bent nog niet established entity in je niche. Work on getting mentioned: guest posts, interviews, case studies. Every mention strengthens je entity in Google's knowledge graph.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wat is het verschil tussen keywords en entities?</h3>
              <p className="text-gray-700">
                Keywords zijn search queries—"best running shoes", "how to bake bread". Entities zijn specifieke dingen in de wereld—"Nike" (merk), "New York" (plaats), "Barack Obama" (persoon). Google evolved van keyword matching naar entity understanding. Als iemand zoekt "Apple CEO", begrijpt Google dat het over "Tim Cook" (persoon entity) gaat, niet de fruit. Modern SEO optimizes voor beide: keywords voor findability, entities voor relevance en authority.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoeveel entities moet mijn content hebben?</h3>
              <p className="text-gray-700">
                Quality over quantity. Een 1000-woord artikel heeft typisch 10-20 betekenisvolle entities. Te weinig ({'<'}5) en je content is vague, generic. Te veel ({'>'}50) en je risk name-dropping zonder depth. Focus op relevant entities—als je schrijft over "WordPress SEO", mention "WordPress.org", "Yoast SEO", "Matt Mullenweg", "plugins" is natural. Random entities zoals "McDonald's", "Taylor Swift" without context is spam. Use entity extraction om je current entity density te checken.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moet ik entities altijd identiek spellen?</h3>
              <p className="text-gray-700">
                Consistency is belangrijk maar natural variation is ok. "Elon Musk", "Musk", "Tesla CEO Elon Musk" zijn allemaal acceptabel—Google's entity resolution algorithms begrijpen deze variaties verwijzen naar dezelfde entity. Wat je niet moet: "E. Musk", "Elon R. Musk", "Mr. Musk" random alterneren—dat confuseert. Eerste mention gebruik full name: "Elon Musk". Subsequent mentions kunnen shorter zijn: "Musk". Schema markup gebruik canonical name: "Elon Musk" in Person schema.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik nieuwe entities creëren met mijn content?</h3>
              <p className="text-gray-700">
                Ja! Als je een nieuwe product, methode, of concept introduceert, kan het een entity worden. Gebruik consistent naming, define het duidelijk, en add schema markup. Bijvoorbeeld: "The Niblah Method" met capital letters, definition, en consistent usage. Over tijd, als anderen je term adopteren, wordt het recognized entity in Google's knowledge graph. Dit is hoe nieuwe jargon, frameworks, en methodologies established worden. Brand names, proprietary concepts—allemaal starten as new entities.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Helpt entity extraction met fact-checking?</h3>
              <p className="text-gray-700">
                Indirect ja. Entity extraction identificeert claims over entities—"Steve Jobs founded Apple in 1976", "Paris is capital of France". Je kunt extracted entities + claims cross-reference met trusted sources (Wikipedia, official websites) om accuracy te verifiëren. Dit is vooral nuttig voor automated content moderation, plagiarism detection, en quality control. Als je tool extract "Bill Gates founded Apple"—red flag, factual error. Entity + relationship extraction catches deze inconsistencies.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Entity Optimization Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p>• <strong>Relevant entities:</strong> Noem belangrijke entities in je niche</p>
              <p>• <strong>Accurate spelling:</strong> Consistency in entity namen</p>
              <p>• <strong>Context:</strong> Entities moeten natuurlijk passen</p>
              <p>• <strong>Co-occurrence:</strong> Logische entity combinations</p>
              <p>• <strong>Schema markup:</strong> Structured data voor main entities</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Authority entities:</strong> Citeer experts en leaders</p>
              <p>• <strong>Update regularly:</strong> Add nieuwe relevante entities</p>
              <p>• <strong>Competitor analysis:</strong> Check their entity usage</p>
              <p>• <strong>Disambiguation:</strong> Zorg dat context duidelijk is</p>
              <p>• <strong>Brand consistency:</strong> Eigen brand als entity vestigen</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
