'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowPathIcon, ClipboardIcon, CheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const REWRITE_STYLES = {
  standard: { name: 'Standaard', description: 'Behoud betekenis, andere woorden' },
  formal: { name: 'Formeel', description: 'Professionele, zakelijke toon' },
  casual: { name: 'Casual', description: 'Vriendelijk en toegankelijk' },
  creative: { name: 'Creatief', description: 'Originele formulering' },
  shorter: { name: 'Korter', description: 'Beknopte versie' },
  longer: { name: 'Uitgebreider', description: 'Meer details en context' },
};

export default function TekstHerschrijver() {
  const [inputText, setInputText] = useState('');
  const [rewrittenText, setRewrittenText] = useState('');
  const [rewriteStyle, setRewriteStyle] = useState('standard');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const wordCount = inputText.trim().split(/\s+/).filter(w => w).length;
  const charCount = inputText.length;

  const handleRewrite = async () => {
    if (!inputText.trim()) {
      setError('Voer tekst in om te herschrijven');
      return;
    }

    if (wordCount < 10) {
      setError('Voer minimaal 10 woorden in');
      return;
    }

    setIsLoading(true);
    setError('');
    setRewrittenText('');

    try {
      const response = await fetch('/api/tools/tekst-herschrijver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: inputText,
          style: rewriteStyle 
        }),
      });

      const data = await response.json();

      if (data.success) {
        setRewrittenText(data.rewrittenText);
      } else {
        setError(data.error || 'Kon tekst niet herschrijven. Probeer het opnieuw.');
      }
    } catch (error) {
      console.error('Rewrite error:', error);
      setError('Er ging iets fout. Probeer het later opnieuw.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInputText('');
    setRewrittenText('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ArrowPathIcon className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tekst Herschrijver
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herschrijf teksten automatisch met AI. Vermijd plagiaat, maak unieke content en optimaliseer je teksten voor SEO.
          </p>
        </div>

        {/* Main Tool */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Style Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Herschrijf Stijl:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {Object.entries(REWRITE_STYLES).map(([key, style]) => (
                <button
                  key={key}
                  onClick={() => setRewriteStyle(key)}
                  className={`p-3 rounded-lg border-2 text-sm transition-all ${
                    rewriteStyle === key
                      ? 'border-purple-600 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="font-semibold">{style.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{style.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Input Text Area */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Originele Tekst:
              </label>
              <span className="text-sm text-gray-500">
                {wordCount} woorden, {charCount} tekens
              </span>
            </div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Plak hier de tekst die je wilt herschrijven..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleRewrite}
              disabled={isLoading || !inputText.trim()}
              className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold transition-colors"
            >
              {isLoading ? (
                <>
                  <ArrowPathIcon className="h-5 w-5 animate-spin" />
                  Herschrijven...
                </>
              ) : (
                <>
                  <SparklesIcon className="h-5 w-5" />
                  Herschrijf Tekst
                </>
              )}
            </button>
            <button
              onClick={clearAll}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Wissen
            </button>
          </div>
        </div>

        {/* Output Section */}
        {rewrittenText && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Herschreven Tekst</h2>
              <button
                onClick={() => copyToClipboard(rewrittenText)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-5 w-5" />
                    Gekopieerd!
                  </>
                ) : (
                  <>
                    <ClipboardIcon className="h-5 w-5" />
                    Kopieer
                  </>
                )}
              </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                {rewrittenText}
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              {rewrittenText.split(/\s+/).filter(w => w).length} woorden, {rewrittenText.length} tekens
            </div>
          </div>
        )}

        {/* SEO Content - Dutch */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gratis Tekst Herschrijver Tool</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Deze gratis tekst herschrijver helpt je content uniek maken zonder de betekenis te veranderen. Een text rewriter is essentieel wanneer je plagiaat wilt vermijden, bestaande content wilt optimaliseren, of meerdere versies van dezelfde boodschap nodig hebt. De AI text spinner analyseert je tekst en herschrijft deze met andere woorden terwijl de kernboodschap behouden blijft.
            </p>

            <p>
              Gebruik deze tekst herformuleren tool voor diverse doeleinden: herschrijf productteksten voor je webshop, maak unieke versies van artikelen, vermijd duplicate content penalties, of optimaliseer teksten voor verschillende doelgroepen. De tekst parafraseren functie is zo krachtig dat de output vaak niet te onderscheiden is van handmatig geschreven content.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Tekst Herschrijven met AI</h3>
            
            <p>
              Deze AI text rewriter biedt 6 verschillende herschrijf stijlen. "Standaard" behoudt je originele toon maar gebruikt andere woorden—perfect voor algemene herschrijf taken. "Formeel" maakt je tekst professioneler voor zakelijke context. "Casual" maakt teksten toegankelijker en vriendelijker. "Creatief" gebruikt originele formuleringen voor marketing content. "Korter" condenseert je boodschap, terwijl "Uitgebreider" meer details en context toevoegt.
            </p>

            <p>
              De tekst spinner werkt in seconden: plak je tekst, kies een stijl, en klik op "Herschrijf Tekst". De AI analyseert structuur, betekenis en context om een natuurlijk leesbare herschreven versie te genereren. Anders dan simpele synoniemen replacers begrijpt deze tool context en zorgt dat zinnen vloeiend blijven.
            </p>

            <p>
              Gebruik ook onze <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword suggestion tool</Link> en <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta description generator</Link> voor complete content optimalisatie.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Text Rewriter voor SEO en Content Marketing</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              SEO vraagt om unieke content op elke pagina. Deze tekst herschrijver tool lost dat op wanneer je dezelfde informatie op meerdere pagina's moet presenteren. Bijvoorbeeld: je hebt 50 productpagina's met vergelijkbare specs. In plaats van duplicate content te hebben, gebruik je de text spinner om unieke variaties te maken die Google waardeert.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Plagiaat Vermijden met Tekst Parafraseren</h3>
            
            <p>
              Wanneer je inspiratie haalt uit bestaande content maar plagiaat wilt vermijden, is deze tekst herformuleren tool onmisbaar. Studenten gebruiken het om informatie uit bronnen te parafraseren. Contentmakers herschrijven concurrentie content om unieke versies te maken. Marketeers maken variaties van advertentieteksten voor A/B testing.
            </p>

            <p>
              Let op: een text rewriter is een hulpmiddel, geen vervanging voor originele content creatie. Gebruik het verstandig: herschrijf je eigen content voor variatie, parafraseeer bronnen correct met citatie, of optimaliseer bestaande teksten. Kopieer nooit 1-op-1 content van anderen—zelfs een tekst spinner maakt dat niet ethisch.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Best Practices voor Tekst Herschrijven</h3>
            
            <p>
              Review altijd de output van deze AI text spinner. Hoewel de tool krachtig is, moet je controleren of de betekenis intact is en de tekst natuurlijk leest. Pas details aan waar nodig. Combineer soms meerdere herschrijf stijlen: gebruik "Standaard" voor de basis, dan "Creatief" voor koppen, en "Formeel" voor de conclusie.
            </p>

            <p>
              Voor lange teksten, herschrijf in secties. Split een artikel van 2000 woorden in 4 stukken van 500 woorden en herschrijf elk stuk apart. Dit geeft betere resultaten dan het geheel in één keer door de text rewriter te halen. Edit de output licht om flow tussen secties te behouden.
            </p>

            <p>
              Optimaliseer verder met onze <Link href="/tools/page-title-enhancer" className="text-blue-600 hover:underline">page title enhancer</Link> en <Link href="/tools/url-slug-generator" className="text-blue-600 hover:underline">URL slug generator</Link>.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is deze tekst herschrijver echt gratis?</h3>
              <p className="text-gray-700">
                Ja, deze text rewriter is volledig gratis te gebruiken zonder limieten. Herschrijf zoveel teksten als je wilt zonder kosten of registratie. We gebruiken geavanceerde AI om natuurlijk klinkende herschreven teksten te genereren.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detecteert Google dat ik een tekst spinner heb gebruikt?</h3>
              <p className="text-gray-700">
                Deze AI text rewriter maakt natuurlijke, menselijk klinkende teksten die niet te onderscheiden zijn van handmatig geschreven content. Zolang je de output controleert en waar nodig aanpast, is er geen probleem. Gebruik het voor je eigen content, niet om content van anderen te dupliceren.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welke herschrijf stijl moet ik kiezen?</h3>
              <p className="text-gray-700">
                "Standaard" werkt voor de meeste doeleinden. Gebruik "Formeel" voor zakelijke content, "Casual" voor blogs en social media, "Creatief" voor marketing copy, "Korter" voor beknopte versies, en "Uitgebreider" wanneer je meer details wilt. Experimenteer om te zien wat het beste werkt voor jouw content.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik hele artikelen in één keer herschrijven?</h3>
              <p className="text-gray-700">
                Je kunt grote teksten herschrijven, maar voor beste resultaten raden we aan lange artikelen in secties op te splitsen. Herschrijf per sectie van 300-500 woorden voor de meest natuurlijke output. Dit geeft je ook meer controle over het eindresultaat.
              </p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Tips voor Effectief Tekst Herschrijven
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="space-y-2">
              <p>• <strong>Review altijd:</strong> Controleer de herschreven tekst op accuraatheid</p>
              <p>• <strong>Behoud feiten:</strong> Zorg dat cijfers en feiten correct blijven</p>
              <p>• <strong>Check flow:</strong> Lees hardop om natuurlijke flow te testen</p>
              <p>• <strong>Kies juiste stijl:</strong> Match de stijl met je doelgroep</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Split lange teksten:</strong> Herschrijf in behapbare secties</p>
              <p>• <strong>Gebruik ethisch:</strong> Alleen voor je eigen content</p>
              <p>• <strong>Voeg waarde toe:</strong> Edit output om het nog beter te maken</p>
              <p>• <strong>Test variaties:</strong> Probeer verschillende stijlen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
