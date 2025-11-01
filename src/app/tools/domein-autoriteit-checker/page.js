'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheckIcon, ChartBarIcon, ArrowTrendingUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function DomeinAutoriteitChecker() {
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeDomain = () => {
    if (!domain.trim()) return;

    setIsAnalyzing(true);
    
    // Simulate analysis - in production, this would call an actual DA API
    setTimeout(() => {
      const cleanDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
      
      // Generate educational mock data
      const mockDA = Math.floor(Math.random() * 40) + 30; // 30-70
      const mockTrustScore = Math.floor(Math.random() * 30) + 40; // 40-70
      
      setResults({
        domain: cleanDomain,
        domainAuthority: mockDA,
        trustScore: mockTrustScore,
        estimatedBacklinks: Math.floor(Math.random() * 5000) + 1000,
        estimatedReferringDomains: Math.floor(Math.random() * 500) + 100,
        suggestions: generateSuggestions(mockDA),
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };

  const generateSuggestions = (da) => {
    if (da < 40) {
      return [
        'Focus op het verkrijgen van backlinks van hoogwaardige websites',
        'Creëer unieke, waardevolle content die natuurlijke links aantrekt',
        'Optimaliseer je on-page SEO fundamentals',
        'Bouw relaties met andere websites in je niche',
      ];
    } else if (da < 60) {
      return [
        'Blijf bouwen aan kwaliteitsvolle backlinks',
        'Verwijder of disavow toxische links',
        'Publiceer authoritative content regelmatig',
        'Werk aan je technische SEO',
      ];
    } else {
      return [
        'Behoud je huidige autoriteit door consistent te blijven',
        'Focus op het verdedigen van je rankings',
        'Continue content updates en optimalisatie',
        'Monitor je backlink profiel voor negatieve SEO',
      ];
    }
  };

  const getDAColor = (da) => {
    if (da < 30) return 'text-red-600';
    if (da < 50) return 'text-yellow-600';
    if (da < 70) return 'text-blue-600';
    return 'text-green-600';
  };

  const getDALabel = (da) => {
    if (da < 30) return 'Laag';
    if (da < 50) return 'Gemiddeld';
    if (da < 70) return 'Goed';
    return 'Excellent';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ShieldCheckIcon className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Domein Autoriteit Checker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check de domain authority (DA) van websites. Analyseer website autoriteit en krijg inzicht in de SEO kracht van domeinen.
          </p>
        </div>

        {/* Main Tool */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Voer een domeinnaam in:
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && analyzeDomain()}
                placeholder="voorbeeld: niblah.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={analyzeDomain}
                disabled={isAnalyzing || !domain.trim()}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2 font-semibold transition-colors"
              >
                {isAnalyzing ? (
                  <>
                    <ArrowTrendingUpIcon className="h-5 w-5 animate-pulse" />
                    Analyseren...
                  </>
                ) : (
                  <>
                    <MagnifyingGlassIcon className="h-5 w-5" />
                    Check DA
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Demo Modus:</strong> Deze tool toont educatieve demo data. Voor actuele domain authority scores, gebruik professionele tools zoals Moz, Ahrefs of SEMrush.
            </p>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="space-y-6">
            {/* DA Score Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{results.domain}</h2>
                <p className="text-gray-600">Domain Authority Score</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className={`text-5xl font-bold mb-2 ${getDAColor(results.domainAuthority)}`}>
                    {results.domainAuthority}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">
                    Domain Authority
                  </div>
                  <div className="text-sm text-gray-600">
                    Score: {getDALabel(results.domainAuthority)}
                  </div>
                  <div className="mt-4 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all"
                      style={{ width: `${results.domainAuthority}%` }}
                    />
                  </div>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-5xl font-bold mb-2 text-purple-600">
                    {results.trustScore}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">
                    Trust Score
                  </div>
                  <div className="text-sm text-gray-600">
                    Betrouwbaarheid
                  </div>
                  <div className="mt-4 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${results.trustScore}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Backlinks (schatting)</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {results.estimatedBacklinks.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Verwijzende Domeinen</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {results.estimatedReferringDomains.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ChartBarIcon className="h-6 w-6 text-blue-600" />
                Aanbevelingen voor Verbetering
              </h3>
              <ul className="space-y-3">
                {results.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* SEO Content - Dutch */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Domain Authority Checker: Wat is DA?</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Domain Authority (DA) is een SEO metric ontwikkeld door Moz die voorspelt hoe goed een website zal ranken in zoekmachines. Deze domein autoriteit checker helpt je de DA van websites te begrijpen. De DA score loopt van 1 tot 100, waarbij hogere scores betere ranking potentie betekenen. Een DA checker is essentieel voor link building omdat je wilt linken van hoge-autoriteit websites.
            </p>

            <p>
              Wanneer je een domain authority check doet, zie je niet alleen de DA score maar ook factoren die deze beïnvloeden: aantal backlinks, kwaliteit van verwijzende domeinen, en trust metrics. Een domein autoriteit checker toont deze data zodat je kunt bepalen of een website waardevol is voor je SEO strategie. Websites met DA boven 50 zijn over het algemeen gevestigde, gezaghebbende sites.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Hoe Verbeter je Domain Authority?</h3>
            
            <p>
              Deze DA checker tool geeft inzichten, maar verbetering vereist actie. Focus op het verkrijgen van backlinks van hoogwaardige websites met hoge DA. Eén link van een DA 70 site is waardevoller dan 10 links van DA 20 sites. Gebruik een domein autoriteit checker om potentiële link partners te evalueren voordat je outreach doet.
            </p>

            <p>
              Creëer content die natuurlijk links aantrekt—uitgebreide gidsen, origineel onderzoek, en bruikbare tools (zoals deze domain authority checker). Optimaliseer je on-page SEO, verbeter je website snelheid, en zorg voor een schone backlink profiel zonder spam links. Check regelmatig je DA met deze checker om vooruitgang te monitoren.
            </p>

            <p>
              Gebruik ook onze <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword suggestion tool</Link> en <Link href="/tools/rich-snippet-validator" className="text-blue-600 hover:underline">rich snippet validator</Link> voor complete SEO.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">DA Checker voor Link Building Strategy</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              In link building is een domein autoriteit checker je beste vriend. Voordat je tijd investeert in guest posting, broken link building, of andere outreach, check de DA van target websites. Sites met DA onder 20 zijn vaak te zwak om waarde toe te voegen. Focus op DA 30+ voor nieuwe sites, DA 50+ wanneer je budget hebt voor premium plaatsingen.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Interpretatie van DA Scores</h3>
            
            <p>
              Een domain authority check geeft je een nummer, maar wat betekent het? DA 1-20: nieuwe of zwakke sites met weinig backlinks. DA 20-40: groeiende sites met enige autoriteit, goed voor beginnende link building. DA 40-60: gevestigde sites met sterke autoriteit, waardevolle link partners. DA 60-80: zeer autoritaire sites, moeilijk links te krijgen maar extreem waardevol. DA 80-100: industry leaders zoals Wikipedia, grote nieuwssites—bijna onmogelijk om links te krijgen.
            </p>

            <p>
              Let op: DA is relatief binnen je niche. In competitieve industries (finance, health) is DA 40 gemiddeld. In niche markten kan DA 30 al zeer competitief zijn. Gebruik deze domein autoriteit checker om concurrenten te benchmarken en realistische targets te stellen. Vergelijk je DA met directe concurrenten, niet met Amazon of CNN.
            </p>

            <p>
              Optimaliseer verder met <Link href="/tools/anchor-text-generator" className="text-blue-600 hover:underline">anchor text variaties</Link> en <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta descriptions</Link>.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is deze DA checker accuraat?</h3>
              <p className="text-gray-700">
                Deze tool is bedoeld voor educatieve doeleinden en toont demo data. Voor accurate domain authority scores, gebruik professionele tools zoals Moz Link Explorer, Ahrefs Domain Rating, of SEMrush Authority Score. Deze betaalde tools crawlen het web continu en geven real-time DA metrics.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoe vaak moet ik mijn DA checken?</h3>
              <p className="text-gray-700">
                Check je domain authority maandelijks of na grote link building campagnes. DA verandert langzaam—wekelijkse checks zijn overkill. Gebruik een domein autoriteit checker om trends te zien over maanden, niet dagelijkse fluctuaties. Focus meer op ranking verbetering dan DA score alleen.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wat is een goede DA score?</h3>
              <p className="text-gray-700">
                "Goed" is relatief. Voor nieuwe sites is DA 20-30 binnen een jaar een solide prestatie. Gevestigde blogs bereiken DA 40-50. E-commerce sites met sterke link building kunnen DA 50-70 bereiken. Alles boven 70 is excellent en meestal gereserveerd voor grote merken en autoriteit websites.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik mijn DA snel verhogen?</h3>
              <p className="text-gray-700">
                Nee, domain authority groeit langzaam. Verdachte "snelle" methodes (link farms, PBNs) kunnen je DA tijdelijk boosten maar leiden tot Google penalties. Focus op duurzame groei: kwaliteit content, natuurlijke link building, technische SEO. Gebruik deze domain authority checker om vooruitgang te tracken, maar wees geduldig—DA groei duurt maanden tot jaren.
              </p>
            </div>
          </div>
        </div>

        {/* DA Scale Reference */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Domain Authority Score Betekenis
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-3 bg-white rounded">
              <span className="font-semibold">DA 1-20:</span>
              <span className="text-gray-600">Nieuwe/zwakke sites - begin hier</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded">
              <span className="font-semibold">DA 20-40:</span>
              <span className="text-gray-600">Groeiende autoriteit - goed voor link building</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded">
              <span className="font-semibold">DA 40-60:</span>
              <span className="text-gray-600">Sterke autoriteit - waardevolle links</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded">
              <span className="font-semibold">DA 60-80:</span>
              <span className="text-gray-600">Zeer autoritair - premium link sources</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded">
              <span className="font-semibold">DA 80-100:</span>
              <span className="text-gray-600">Industry leaders - Wikipedia, grote merken</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
