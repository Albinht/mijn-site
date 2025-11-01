'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowsPointingOutIcon, SparklesIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

const EXPANSION_MODES = {
  detailed: { name: 'Gedetailleerd', description: 'Voeg meer details en voorbeelden toe' },
  contextual: { name: 'Context', description: 'Breid uit met achtergrond en context' },
  examples: { name: 'Voorbeelden', description: 'Voeg praktische voorbeelden toe' },
  technical: { name: 'Technisch', description: 'Voeg technische diepgang toe' },
};

export default function AIContentExpansion() {
  const [inputText, setInputText] = useState('');
  const [expandedText, setExpandedText] = useState('');
  const [expansionMode, setExpansionMode] = useState('detailed');
  const [isExpanding, setIsExpanding] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const inputWordCount = inputText.trim().split(/\s+/).filter(w => w).length;
  const outputWordCount = expandedText.trim().split(/\s+/).filter(w => w).length;

  const handleExpand = async () => {
    if (!inputText.trim()) {
      setError('Voer tekst in om uit te breiden');
      return;
    }

    if (inputWordCount < 20) {
      setError('Voer minimaal 20 woorden in voor betere resultaten');
      return;
    }

    setIsExpanding(true);
    setError('');
    setExpandedText('');

    try {
      const response = await fetch('/api/tools/ai-content-expansion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText, mode: expansionMode }),
      });

      const data = await response.json();

      if (data.success) {
        setExpandedText(data.expandedText);
      } else {
        setError(data.error || 'Kon tekst niet uitbreiden');
      }
    } catch (error) {
      setError('Er ging iets fout. Probeer het later opnieuw.');
    } finally {
      setIsExpanding(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(expandedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ArrowsPointingOutIcon className="h-12 w-12 text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Content Expansion Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Breid korte teksten uit met AI. Voeg automatisch details, context, voorbeelden en diepgang toe aan je content.
          </p>
        </div>

        {/* Main Tool */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          
          {/* Expansion Mode Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Uitbreid Modus:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(EXPANSION_MODES).map(([key, mode]) => (
                <button
                  key={key}
                  onClick={() => setExpansionMode(key)}
                  className={`p-3 rounded-lg border-2 text-sm transition-all ${
                    expansionMode === key
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="font-semibold">{mode.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{mode.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Korte Tekst (Invoer):
              </label>
              <span className="text-sm text-gray-500">{inputWordCount} woorden</span>
            </div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Plak hier je korte tekst die je wilt uitbreiden..."
              className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
            />
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleExpand}
              disabled={isExpanding || !inputText.trim()}
              className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold transition-colors"
            >
              {isExpanding ? (
                <>
                  <SparklesIcon className="h-5 w-5 animate-pulse" />
                  Uitbreiden...
                </>
              ) : (
                <>
                  <ArrowsPointingOutIcon className="h-5 w-5" />
                  Breid Tekst Uit
                </>
              )}
            </button>
            <button
              onClick={() => { setInputText(''); setExpandedText(''); setError(''); }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Wissen
            </button>
          </div>
        </div>

        {/* Output */}
        {expandedText && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Uitgebreide Tekst</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {outputWordCount} woorden (+{outputWordCount - inputWordCount} woorden toegevoegd)
                </p>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
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
                {expandedText}
              </p>
            </div>
          </div>
        )}

        {/* SEO Content Section 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Content Expansion: Tekst Uitbreiden Voor SEO</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Deze AI content expansion tool helpt je korte teksten uitbreiden met relevante details, context en diepgang. Content uitbreiden is essentieel voor SEO omdat Google uitgebreide, waardevolle content prefereert boven dunne pagina's. Gebruik deze tekst uitbreiden tool om productbeschrijvingen, blog intros, of korte artikelen te verlengen zonder de originele boodschap te verliezen.
            </p>

            <p>
              De content expansion functie analyseert je tekst en voegt automatisch relevante informatie toe. Kies "Gedetailleerd" om meer specificaties en details toe te voegen. "Context" geeft achtergrondinformatie. "Voorbeelden" voegt praktische use cases toe. "Technisch" verhoogt de vakkundigheid met diepere uitleg. Perfect voor wanneer je minimale content hebt die je wilt transformeren naar uitgebreide artikelen.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Waarom Content Uitbreiden Belangrijk Is</h3>
            
            <p>
              Google's algoritme waardeert comprehensive content. Een pagina met 1500 woorden rankt gemiddeld beter dan 300 woorden, mits de extra content waardevol is. Deze AI tool om tekst uit te breiden zorgt dat je niet simpelweg woorden toevoegt maar betekenisvolle informatie. Het verschil tussen dunne content opvullen en intelligente content expansion is dat de AI context begrijpt en relevante details toevoegt.
            </p>

            <p>
              Gebruik deze tekst verlengen tool strategisch. Neem je short-form content—social posts, email snippets, korte productbeschrijvingen—en transformeer ze naar long-form blog posts of uitgebreide landingspagina's. De tool behoudt je originele tone en voegt consistent extra lagen informatie toe. Ideaal voor content marketing teams die snel volume moeten produceren zonder kwaliteit te verliezen.
            </p>

            <p>
              Combineer met onze <Link href="/tools/tekst-herschrijver" className="text-blue-600 hover:underline">tekst herschrijver</Link> en <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword suggestion tool</Link> voor complete content optimalisatie.
            </p>
          </div>
        </div>

        {/* SEO Content Section 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Expansion Tool: Best Practices</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Effectieve content expansion vereist strategie. Start met solide korte content—je basis moet kloppen voordat je uitbreidt. Deze AI content uitbreiden tool kan een zwakke intro niet redden, maar een goede korte tekst transformeren naar excellent long-form content. Geef minimaal 50-100 woorden input voor beste resultaten.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Vier Content Expansion Modi</h3>
            
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-3">Gedetailleerd Uitbreiden</h4>
            <p>
              De "Gedetailleerd" modus voegt specificaties, cijfers, en granulaire details toe. Perfect voor product pages, technische artikelen, of how-to guides waar lezers concrete informatie zoeken. Als je input "Deze tool helpt met SEO" is, breidt de AI dit uit met specifieke SEO benefits, metrics, en implementatie details.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-3">Contextuele Uitbreiding</h4>
            <p>
              "Context" modus geeft achtergrondinformatie. Leg uit waarom iets belangrijk is, de geschiedenis, of het grotere plaatje. Handig voor educational content of wanneer je assumpties van je doelgroep niet kunt maken. De tool voegt context toe die begrip verdiept zonder redundant te zijn.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-3">Voorbeelden Toevoegen</h4>
            <p>
              De "Voorbeelden" modus is krachtig voor engagement. Abstracte concepten worden concreet met real-world examples. Als je schrijft over link building, voegt de tool specifieke outreach scenarios, email templates, of case study voorbeelden toe. Dit maakt content actionable en relateerbaar.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-3">Technische Diepgang</h4>
            <p>
              "Technisch" modus is voor expert audiences. Voegt vakjargon, geavanceerde concepten, en diepere analyse toe. Gebruik dit wanneer je content voor professionals schrijft die gedetailleerde uitleg waarderen. De AI verhoogt het expertise niveau zonder de tekst onleesbaar te maken.
            </p>

            <p>
              Optimaliseer verder met <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta descriptions</Link> en <Link href="/tools/page-title-enhancer" className="text-blue-600 hover:underline">page titles</Link>.
            </p>
          </div>
        </div>

        {/* SEO Content Section 3 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tekst Uitbreiden: Praktische Toepassingen</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Deze content verlengen tool heeft talloze use cases. E-commerce sites gebruiken het om korte productbeschrijvingen (50 woorden) uit te breiden naar SEO-vriendelijke pagina's (500+ woorden). Bloggers transformeren social media posts naar volledige artikelen. Agencies schalen content productie door outlines te laten uitbreiden naar complete drafts.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Van Kort naar Lang: Content Scaling</h3>
            
            <p>
              Het probleem met content at scale is tijd. Schrijven kost uren per artikel. Deze AI content expansion tool verkort dat proces drastisch. Schrijf een 200-woord kern, laat de AI uitbreiden naar 1000 woorden, edit voor je brand voice—klaar in fractie van de tijd. Teams die 2 artikelen per week produceerden schalen op naar 10+ zonder extra schrijvers.
            </p>

            <p>
              Let op: AI expansion is een tool, geen vervanging voor origineel denken. Gebruik het voor eerste draft, routine content, of om writer's block te overwinnen. Review altijd de output. De AI is sterk maar menselijke oversight blijft cruciaal voor kwaliteit en factchecking. Voeg je eigen expertise, anecdotes, en unieke inzichten toe aan de uitgebreide versie.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Content Thin naar Content Rich</h3>
            
            <p>
              Heb je pagina's met thin content die slecht ranken? Gebruik deze tool om ze te verrijken. Upload je bestaande 300-woord pagina's, laat ze uitbreiden naar 1200+ woorden, optimaliseer met keywords, en republish. Google herwaardeert de pagina's wanneer je dunne content transformeert naar comprehensive resources. Perfect voor oude site content die een refresh nodig heeft.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is de uitgebreide content uniek genoeg voor SEO?</h3>
              <p className="text-gray-700">
                Ja, de AI genereert originele formuleringen en voegt nieuwe informatie toe die niet in je input staat. Het is geen copy-paste maar echte content expansion met unieke zinnen. Review altijd de output en voeg je eigen touch toe voor maximale uniciteit. Google waardeert de uitgebreide, waardevolle content positief.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoeveel kan de tool mijn tekst uitbreiden?</h3>
              <p className="text-gray-700">
                Gemiddeld breidt de tool content 3-5x uit. Een input van 200 woorden wordt 600-1000 woorden. Dit varieert per expansie modus—"Gedetailleerd" en "Voorbeelden" breiden het meest uit, "Context" iets gematigder. Voor beste resultaten, geef minimaal 100 woorden input voor substantiële uitbreiding.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welke expansie modus moet ik kiezen?</h3>
              <p className="text-gray-700">
                Hangt af van je content type en doelgroep. "Gedetailleerd" voor product pages en technische content. "Context" voor educational artikelen waar lezers background nodig hebben. "Voorbeelden" voor how-to guides en tutorials. "Technisch" voor expert audiences in je vakgebied. Test verschillende modi om te zien wat het beste past.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik hele blogs in één keer uitbreiden?</h3>
              <p className="text-gray-700">
                Voor beste resultaten, breid in secties uit. Split een artikel in 3-4 secties van 100-200 woorden elk, expandeer ze apart, en combineer de resultaten. Dit geeft je meer controle en betere flow dan het hele stuk tegelijk uitbreiden. De tool werkt het best met focused paragrafen versus complete lange teksten.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoe voorkom ik dat uitgebreide content rammelt?</h3>
              <p className="text-gray-700">
                Start met sterke, goed geschreven korte content. De AI kan zwakke tekst niet magisch fixen—het amplifies what's there. Na expansie, edit voor flow en transitie tussen oude en nieuwe content. Verwijder redundante zinnen, merge overlappende punten, en zorg dat het natuurlijk leest. Goede input + editing na expansion = excellent output.
              </p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tips voor Effectieve Content Expansion
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p>• <strong>Start met kwaliteit:</strong> Goede korte content wordt excellent lang</p>
              <p>• <strong>Kies juiste modus:</strong> Match expansie type met content doel</p>
              <p>• <strong>Review output:</strong> Controleer feiten en flow altijd</p>
              <p>• <strong>Voeg persoonlijkheid toe:</strong> Edit voor je unieke voice</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Expand in secties:</strong> Betere resultaten dan alles tegelijk</p>
              <p>• <strong>Mix met origineel:</strong> Combine AI + je eigen expertise</p>
              <p>• <strong>Optimize na expansion:</strong> Voeg keywords en links toe</p>
              <p>• <strong>Test verschillende modi:</strong> Zie wat het beste werkt</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
