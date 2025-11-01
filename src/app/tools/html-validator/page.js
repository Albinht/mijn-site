'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function HTMLValidator() {
  const [inputMethod, setInputMethod] = useState('html'); // 'html' or 'url'
  const [htmlContent, setHtmlContent] = useState('');
  const [url, setUrl] = useState('');
  const [validationResults, setValidationResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleValidate = async () => {
    if (inputMethod === 'html' && !htmlContent.trim()) return;
    if (inputMethod === 'url' && !url.trim()) return;

    setIsLoading(true);
    setValidationResults(null);

    try {
      const response = await fetch('/api/tools/html-validator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: inputMethod,
          content: inputMethod === 'html' ? htmlContent : url
        }),
      });

      const data = await response.json();
      setValidationResults(data);
    } catch (error) {
      console.error('Error validating HTML:', error);
      setValidationResults({
        success: false,
        error: 'Failed to validate HTML. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (type) => {
    switch (type) {
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500 flex-shrink-0" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 flex-shrink-0" />;
      case 'info':
        return <InformationCircleIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />;
      default:
        return <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />;
    }
  };

  const getStatusColor = (type) => {
    switch (type) {
      case 'error':
        return 'border-red-200 bg-red-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'info':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-green-200 bg-green-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            HTML Validator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Validate your HTML markup for errors, warnings, and compliance with web standards. 
            Ensure your code follows best practices for SEO and accessibility.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Validate HTML</h2>
          
          {/* Input Method Selector */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setInputMethod('html')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                inputMethod === 'html'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              HTML Code
            </button>
            <button
              onClick={() => setInputMethod('url')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                inputMethod === 'url'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              URL
            </button>
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            {inputMethod === 'html' ? (
              <div>
                <label htmlFor="htmlContent" className="block text-sm font-medium text-gray-700 mb-2">
                  HTML Content
                </label>
                <textarea
                  id="htmlContent"
                  rows={12}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  placeholder={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}
                  value={htmlContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL
                </label>
                <input
                  id="url"
                  type="url"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            )}
            
            <button
              onClick={handleValidate}
              disabled={isLoading || (inputMethod === 'html' && !htmlContent.trim()) || (inputMethod === 'url' && !url.trim())}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Validating...
                </>
              ) : (
                'Validate HTML'
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {validationResults && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Validation Results</h2>
            
            {validationResults.success ? (
              <div>
                {/* Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{validationResults.summary?.errors || 0}</div>
                    <div className="text-sm text-red-700">Errors</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{validationResults.summary?.warnings || 0}</div>
                    <div className="text-sm text-yellow-700">Warnings</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{validationResults.summary?.info || 0}</div>
                    <div className="text-sm text-blue-700">Info</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {validationResults.summary?.score || 0}%
                    </div>
                    <div className="text-sm text-green-700">Score</div>
                  </div>
                </div>

                {/* Issues */}
                {validationResults.issues && validationResults.issues.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Issues Found</h3>
                    {validationResults.issues.map((issue, index) => (
                      <div key={index} className={`border rounded-lg p-4 ${getStatusColor(issue.type)}`}>
                        <div className="flex items-start space-x-3">
                          {getStatusIcon(issue.type)}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-gray-900">{issue.message}</h4>
                              {issue.line && (
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                                  Line {issue.line}
                                </span>
                              )}
                            </div>
                            {issue.description && (
                              <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
                            )}
                            {issue.code && (
                              <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                                <code>{issue.code}</code>
                              </pre>
                            )}
                            {issue.suggestion && (
                              <div className="mt-2 text-sm text-gray-700">
                                <strong>Suggestion:</strong> {issue.suggestion}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      🎉 Valid HTML!
                    </h3>
                    <p className="text-gray-600">
                      Your HTML code is valid and follows web standards.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <XCircleIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Validation Failed
                </h3>
                <p className="text-red-600">{validationResults.error}</p>
              </div>
            )}
          </div>
        )}

        {/* SEO Content Sections - Dutch */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Waarom HTML Validatie Belangrijk Is voor SEO</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Een HTML validator checkt je code op fouten die de functionaliteit van je site kunnen breken, je zoek rankings kunnen beschadigen en bezoekers kunnen frustreren. Hoewel Google's crawlers wat ongeldige HTML aankunnen, laadt schone code sneller, rendert consistenter in browsers en signaleert professionaliteit naar zoekmachines en bezoekers.
            </p>

            <p>
              Als je regelmatig HTML code controleert, vang je problemen op voordat ze zich opstapelen. Een ontbrekende sluit-tag lijkt misschien niet kritiek, maar het kan je pagina-layout breken in bepaalde browsers of ervoor zorgen dat je schema markup niet valideert. Een HTML checker gebruiken in je workflow voorkomt dat deze problemen naar productie gaan.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Veelgemaakte HTML Fouten Die SEO Schaden</h3>
            
            <p>
              De HTML code checker hierboven identificeert fouten die direct impact hebben op SEO. Dubbele IDs verwarren screen readers en kunnen JavaScript functionaliteit breken. Ontbrekende alt attributes op afbeeldingen betekenen gemiste kansen voor afbeeldingenzoekverkeer. Verkeerd geneste heading tags (springen van H1 naar H3) verwarren Google's begrip van je content hiërarchie.
            </p>

            <p>
              Een van de meest voorkomende fouten die we zien wanneer mensen HTML validiteit checken zijn niet-gesloten tags. Als je een div opent maar niet sluit, moet de browser raden waar het eindigt. Dit leidt tot inconsistent renderen en kan ervoor zorgen dat content in bepaalde situaties niet verschijnt. Een HTML check tool vangt deze onmiddellijk op.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">HTML Checker Gebruiken in je Workflow</h3>
            
            <p>
              Wacht niet tot de lancering om je HTML te checken. Draai je code door een HTML validator tijdens development, vooral na grote wijzigingen. Als je een CMS of page builder gebruikt, kan het ongeldige HTML genereren zonder dat je het weet. Regelmatige HTML checks helpen identificeren wanneer plugins of themes fouten introduceren.
            </p>

            <p>
              Voor de beste resultaten gebruik je meerdere validatie methoden. Onze HTML checker geeft snelle feedback, maar draai je code ook door de W3C validator voor uitgebreide testing. Check zowel je HTML als je gerenderde DOM, want JavaScript kan soms validatie issues introduceren na page load.
            </p>

            <p>
              Test ook je <Link href="/tools/rich-snippet-validator" className="text-blue-600 hover:underline">schema markup</Link> en <Link href="/tools/responsive-design-checker" className="text-blue-600 hover:underline">responsive design</Link> voor complete website kwaliteit.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelvoorkomende HTML Validatie Fouten Oplossen</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Wanneer je HTML code checker fouten rapporteert, prioriteer fixes op basis van impact. Start met fouten die functionaliteit of SEO elementen breken. Fix ontbrekende alt attributes, niet-gesloten tags en dubbele IDs eerst. Waarschuwingen over deprecated elementen kunnen wachten tenzij ze user experience beïnvloeden.
            </p>

            <p>
              Ongeldige HTML komt vaak van het kopiëren van code uit meerdere bronnen zonder compatibiliteit te checken. Draai gekopieerde code altijd door een HTML validator voordat je het in je site integreert. Third-party widgets en embed codes zijn veelvoorkomende boosdoeners voor validatie fouten.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">HTML Validatie voor Toegankelijkheid</h3>
            
            <p>
              Een HTML check doet meer dan SEO verbeteren—het is essentieel voor toegankelijkheid. Screen readers vertrouwen op geldige HTML om pagina content goed te interpreteren. Ontbrekende form labels, verkeerde heading structuur en ongeldige ARIA attributes creëren allemaal barrières voor gebruikers met beperkingen.
            </p>

            <p>
              Wanneer je HTML code checkt voor toegankelijkheid, zoek naar semantische elementen. Gebruik button elementen voor buttons, geen gestylede divs. Structureer content met goede heading levels. Voeg landmark roles toe waar gepast. Deze best practices verbeteren zowel toegankelijkheid als SEO tegelijk.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">HTML Validatie Automatiseren</h3>
            
            <p>
              Stel geautomatiseerde HTML checking in je deployment pipeline in. Configureer je build process om te falen als validatie fouten een bepaalde drempel overschrijden. Dit voorkomt dat ongeldige HTML naar productie gaat. Gebruik linting tools tijdens development om fouten voor commit te vangen.
            </p>

            <p>
              Voor bestaande sites, schedule regelmatige HTML checks om te identificeren wanneer updates of plugin wijzigingen validatie fouten introduceren. Creëer een baseline validatie rapport, vergelijk dan volgende checks ermee. Dit helpt je snel identificeren welke wijzigingen nieuwe fouten veroorzaakten.
            </p>

            <p>
              Optimaliseer ook je <Link href="/tools/ttfb-checker" className="text-blue-600 hover:underline">website snelheid</Link> en <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta descriptions</Link> naast je HTML kwaliteit.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does invalid HTML affect my Google rankings?</h3>
              <p className="text-gray-700">
                Google can crawl sites with invalid HTML, but validation errors may prevent proper indexing of content or cause schema markup failures. Clean, valid HTML helps Google understand your content better and can indirectly improve rankings through better user experience signals like lower bounce rates and faster load times.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between errors and warnings?</h3>
              <p className="text-gray-700">
                Errors violate HTML specifications and should be fixed—they can break functionality or rendering. Warnings indicate deprecated practices or potential issues that might cause problems in some browsers but won't immediately break your site. When you check HTML code, prioritize fixing errors first.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I validate my HTML?</h3>
              <p className="text-gray-700">
                Run an HTML checker after any code changes, plugin updates, or theme modifications. For active sites, monthly validation checks help catch issues from dynamic content or CMS updates. Automated HTML validation in your deployment process ensures you never publish invalid code.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use this HTML validator for any website?</h3>
              <p className="text-gray-700">
                Yes, you can check HTML for any publicly accessible website by entering the URL, or validate code snippets by pasting HTML directly. The tool checks both static HTML and dynamically generated content, making it suitable for any web technology stack.
              </p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            HTML Validation Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div className="space-y-2">
              <p>• <strong>DOCTYPE Declaration:</strong> Always include &lt;!DOCTYPE html&gt;</p>
              <p>• <strong>Semantic HTML:</strong> Use appropriate HTML elements for content</p>
              <p>• <strong>Alt Attributes:</strong> Include alt text for all images</p>
              <p>• <strong>Form Labels:</strong> Associate labels with form controls</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Nested Elements:</strong> Properly nest and close all HTML tags</p>
              <p>• <strong>Character Encoding:</strong> Specify UTF-8 character encoding</p>
              <p>• <strong>Language Attribute:</strong> Set lang attribute on html element</p>
              <p>• <strong>Valid CSS/JS:</strong> Ensure linked stylesheets and scripts are valid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}