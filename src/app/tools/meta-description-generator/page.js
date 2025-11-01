'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ClipboardIcon, CheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function MetaDescriptionGenerator() {
  const [pageTitle, setPageTitle] = useState('');
  const [pageContent, setPageContent] = useState('');
  const [targetKeywords, setTargetKeywords] = useState('');
  const [tone, setTone] = useState('professional');
  const [callToAction, setCallToAction] = useState('');
  const [generatedDescriptions, setGeneratedDescriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleGenerate = async () => {
    if (!pageTitle.trim()) return;

    setIsLoading(true);
    setGeneratedDescriptions([]);

    try {
      const response = await fetch('/api/tools/meta-description-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageTitle,
          pageContent,
          targetKeywords,
          tone,
          callToAction
        }),
      });

      const data = await response.json();
      if (data.descriptions) {
        setGeneratedDescriptions(data.descriptions);
      }
    } catch (error) {
      console.error('Error generating meta descriptions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const getCharacterCount = (text) => {
    return text.length;
  };

  const getStatusColor = (length) => {
    if (length >= 150 && length <= 160) return 'text-green-600';
    if (length >= 120 && length <= 170) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <SparklesIcon className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">
              AI Meta Description Generator
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate compelling, SEO-optimized meta descriptions that improve click-through rates 
            and search engine visibility using AI.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Page Information</h2>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="pageTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Page Title <span className="text-red-500">*</span>
              </label>
              <input
                id="pageTitle"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Digital Marketing Services for Small Businesses"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="pageContent" className="block text-sm font-medium text-gray-700 mb-2">
                Page Content Summary
              </label>
              <textarea
                id="pageContent"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of what the page is about, key benefits, services offered, etc."
                value={pageContent}
                onChange={(e) => setPageContent(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="targetKeywords" className="block text-sm font-medium text-gray-700 mb-2">
                Target Keywords
              </label>
              <input
                id="targetKeywords"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., digital marketing, SEO services, online advertising"
                value={targetKeywords}
                onChange={(e) => setTargetKeywords(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-2">
                  Tone of Voice
                </label>
                <select
                  id="tone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option value="professional">Professional</option>
                  <option value="friendly">Friendly</option>
                  <option value="authoritative">Authoritative</option>
                  <option value="conversational">Conversational</option>
                  <option value="urgent">Urgent</option>
                  <option value="creative">Creative</option>
                </select>
              </div>

              <div>
                <label htmlFor="callToAction" className="block text-sm font-medium text-gray-700 mb-2">
                  Call to Action
                </label>
                <input
                  id="callToAction"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Get started today, Learn more, Contact us"
                  value={callToAction}
                  onChange={(e) => setCallToAction(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isLoading || !pageTitle.trim()}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating...
                </>
              ) : (
                <>
                  <SparklesIcon className="h-5 w-5 mr-2" />
                  Generate Meta Descriptions
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {generatedDescriptions.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Generated Meta Descriptions</h2>
            
            <div className="space-y-4">
              {generatedDescriptions.map((description, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-gray-700">Option {index + 1}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getStatusColor(getCharacterCount(description))}`}>
                        {getCharacterCount(description)} chars
                      </span>
                      <button
                        onClick={() => copyToClipboard(description, index)}
                        className="text-gray-500 hover:text-gray-700 p-1"
                        title="Copy to clipboard"
                      >
                        {copiedIndex === index ? (
                          <CheckIcon className="h-4 w-4 text-green-500" />
                        ) : (
                          <ClipboardIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-900 leading-relaxed">{description}</p>
                  <div className="mt-2 text-xs text-gray-500">
                    {getCharacterCount(description) >= 150 && getCharacterCount(description) <= 160 && 
                      '✅ Optimal length'}
                    {getCharacterCount(description) >= 120 && getCharacterCount(description) < 150 && 
                      '⚠️ Could be longer'}
                    {getCharacterCount(description) > 160 && getCharacterCount(description) <= 170 && 
                      '⚠️ May be truncated'}
                    {getCharacterCount(description) < 120 && 
                      '❌ Too short'}
                    {getCharacterCount(description) > 170 && 
                      '❌ Too long'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEO Content Sections - Dutch */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Waarom een Meta Description Generator Gebruiken?</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Je meta description is de eerste indruk die bezoekers krijgen van je pagina in de zoekresultaten. Hoewel het niet direct je ranking beïnvloedt, kan een goed geschreven meta description je click-through rate flink verhogen. Zie het als je elevator pitch in Google's zoekresultaten.
            </p>
            
            <p>
              Met een meta description generator maak je snel meerdere variaties, maar je moet nog steeds begrijpen wat een beschrijving effectief maakt. Google toont normaal gesproken 150-160 karakters op desktop en iets minder op mobiel. Als je meta description lengte te lang is, wordt deze afgekort met puntjes, waardoor belangrijke informatie of je call-to-action verloren gaat.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Meta Description Lengte Controleren</h3>
            
            <p>
              Een meta description checker is essentieel voordat je een pagina publiceert. Het aantal karakters is belangrijk omdat Google te lange beschrijvingen afkapt. Je wilt de meta description length checker gebruiken om er zeker van te zijn dat je hele boodschap verschijnt in de zoekresultaten. Onze tool werkt als meta description generator én meta length checker, en toont precies hoeveel karakters je gebruikt.
            </p>

            <p>
              De meta description length checker functionaliteit zit ingebouwd in de tool hierboven. Wanneer je beschrijvingen genereert, zie je een real-time karaktertelling met kleurgecodeerde feedback. Groen betekent dat je in de optimale range zit (150-160 karakters), geel geeft aan dat het beter kan, en rood signaleert dat je buiten de aanbevolen lengte valt.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Meta Description Tool Effectief Gebruiken</h3>
            
            <p>
              Een goede meta description tool doet meer dan alleen karakters tellen. Het helpt je beschrijvingen te maken die daadwerkelijk clicks genereren. Dit zijn de belangrijkste punten waar je op moet letten bij het gebruik van een meta check tool:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Plaats je belangrijkste zoekwoord natuurlijk in de eerste 120 karakters</li>
              <li>Schrijf actief en spreek de lezer direct aan</li>
              <li>Benadruk wat jouw pagina uniek of waardevol maakt</li>
              <li>Voeg een duidelijke call-to-action toe</li>
              <li>Zorg dat de beschrijving echt past bij de pagina-inhoud</li>
            </ul>

            <p>
              Gebruik ook onze <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword suggestie tool</Link> om de beste zoekwoorden voor je meta descriptions te vinden, en test je <Link href="/tools/rich-snippet-validator" className="text-blue-600 hover:underline">rich snippets</Link> voor maximale zichtbaarheid in Google.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Veelgemaakte Meta Description Fouten</h3>
            
            <p>
              Zelfs met een meta description length checker maken mensen fouten. De meest voorkomende? Te generieke meta descriptions schrijven. Zinnen als "Welkom op onze website" of "Klik hier voor meer" verspillen kostbare karakters zonder bezoekers te vertellen waarom ze je pagina moeten bezoeken.
            </p>

            <p>
              Een andere fout is keyword stuffing. Ja, je wilt relevante zoekwoorden gebruiken, maar te veel keywords in je meta omschrijving lengte proppen maakt het onnatuurlijk. Google en gebruikers merken wanneer je keywords forceert, en dat schaadt je click-through rate.
            </p>

            <p>
              Vergeet niet elke meta description te checken voor publicatie. Gebruik een meta title checker naast je description checker om ervoor te zorgen dat beide elementen goed samenwerken. Je titel en beschrijving moeten elkaar aanvullen, niet dezelfde informatie herhalen.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meta Descriptions Schrijven Die Clicks Genereren</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Effectieve meta descriptions schrijven is deels kunst, deels wetenschap. Je moet SEO-vereisten balanceren met overtuigende copywriting. Begin met begrijpen wat je doelgroep zoekt en welk probleem je pagina oplost.
            </p>

            <p>
              Voor productpagina's moet je specifieke details opnemen zoals prijs, beschikbaarheid of unieke features. Bij blogposts geef je een voorproefje van het belangrijkste inzicht. Voor servicepagina's benadruk je wat jou onderscheidt van concurrenten. Elk type pagina vraagt om een andere aanpak voor de meta description.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Meta Descriptions Testen en Optimaliseren</h3>
            
            <p>
              Monitor na publicatie je click-through rates in Google Search Console. Als een pagina goed rankt maar een lage CTR heeft, kan je meta description het probleem zijn. Test het opnieuw met de meta description tool en probeer een andere aanpak. Soms maken kleine aanpassingen aan de call-to-action of de formulering al een groot verschil.
            </p>

            <p>
              Gebruik je meta description checker om je descriptions te vergelijken met concurrenten die ranken voor dezelfde zoekwoorden. Kijk wat bij hen werkt en vind manieren om op te vallen. Misschien gebruiken ze allemaal generieke beschrijvingen, wat jou de kans geeft om specifieker en overtuigender te zijn.
            </p>

            <p>
              Check ook regelmatig je <Link href="/tools/html-validator" className="text-blue-600 hover:underline">HTML validatie</Link> en optimaliseer je <Link href="/tools/url-slug-generator" className="text-blue-600 hover:underline">URL slugs</Link> voor complete on-page SEO.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the ideal meta description length?</h3>
              <p className="text-gray-700">
                The optimal meta description length is 150-160 characters. This ensures your entire description appears in Google search results without being cut off. Google displays slightly more on desktop than mobile, so aim for 155 characters to be safe. Use a meta length checker to verify your character count before publishing.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does my meta description affect SEO rankings?</h3>
              <p className="text-gray-700">
                Meta descriptions don't directly impact rankings, but they significantly affect click-through rates, which can indirectly improve your SEO. A compelling description that gets more clicks signals to Google that your result is relevant, potentially boosting your rankings over time.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use the same meta description on multiple pages?</h3>
              <p className="text-gray-700">
                No, every page should have a unique meta description. Duplicate descriptions confuse search engines about which page to show for specific queries and waste an opportunity to highlight each page's unique value. Use a meta description generator to create variations for similar pages.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if Google doesn't use my meta description?</h3>
              <p className="text-gray-700">
                Google sometimes rewrites meta descriptions based on the search query, pulling text from your page content instead. This happens when Google thinks it can create a more relevant description for that specific search. To minimize this, write descriptions that closely match your page content and include key terms users are likely to search for.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I update my meta descriptions?</h3>
              <p className="text-gray-700">
                Review your meta descriptions whenever you update page content or notice declining click-through rates. Use a meta check tool quarterly to identify pages with poor CTR in Google Search Console, then test new descriptions. Seasonal businesses should update descriptions to match current offers or trends.
              </p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Meta Description Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="space-y-2">
              <p>• <strong>Length:</strong> 150-160 characters for optimal display</p>
              <p>• <strong>Keywords:</strong> Include primary keywords naturally</p>
              <p>• <strong>Unique:</strong> Each page needs a unique description</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Compelling:</strong> Write to encourage clicks</p>
              <p>• <strong>Accurate:</strong> Reflect the page content truthfully</p>
              <p>• <strong>Action-oriented:</strong> Include clear calls-to-action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}