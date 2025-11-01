'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DocumentTextIcon, CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function SitemapChecker() {
  const [sitemapUrl, setSitemapUrl] = useState('');
  const [results, setResults] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState('');

  const checkSitemap = async () => {
    if (!sitemapUrl.trim()) {
      setError('Voer een sitemap URL in');
      return;
    }

    setIsChecking(true);
    setError('');
    setResults(null);

    try {
      const response = await fetch('/api/tools/sitemap-checker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sitemapUrl }),
      });

      const data = await response.json();

      if (data.success) {
        setResults(data);
      } else {
        setError(data.error || 'Kon sitemap niet checken');
      }
    } catch (err) {
      setError('Er ging iets fout. Controleer de URL en probeer opnieuw.');
    } finally {
      setIsChecking(false);
    }
  };

  const getStatusIcon = (status) => {
    if (status === 'valid') return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    if (status === 'warning') return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
    return <XCircleIcon className="h-5 w-5 text-red-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <DocumentTextIcon className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sitemap Checker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Valideer je XML sitemap, controleer op errors en optimaliseer voor betere Google indexering.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Sitemap URL:
            </label>
            <div className="flex gap-3">
              <input
                type="url"
                value={sitemapUrl}
                onChange={(e) => setSitemapUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkSitemap()}
                placeholder="https://voorbeeld.nl/sitemap.xml"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={checkSitemap}
                disabled={isChecking || !sitemapUrl.trim()}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold transition-colors"
              >
                {isChecking ? 'Checken...' : 'Check Sitemap'}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          )}
        </div>

        {results && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sitemap Resultaten</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600 mb-2">{results.totalUrls || 0}</div>
                  <div className="text-sm text-gray-600">Totaal URLs</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{results.validUrls || 0}</div>
                  <div className="text-sm text-gray-600">Geldige URLs</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{results.issues?.length || 0}</div>
                  <div className="text-sm text-gray-600">Waarschuwingen</div>
                </div>
              </div>

              {results.issues && results.issues.length > 0 && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Gevonden Problemen:</h3>
                  <div className="space-y-3">
                    {results.issues.map((issue, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        {getStatusIcon(issue.severity)}
                        <div>
                          <div className="font-semibold text-gray-900">{issue.type}</div>
                          <div className="text-sm text-gray-600">{issue.message}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SEO Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">XML Sitemap Checker voor SEO</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Een sitemap checker helpt je XML sitemap errors te identificeren voordat ze je indexering beïnvloeden. Deze sitemap validator controleert of je sitemap.xml correct geformatteerd is, alle vereiste tags bevat, en geen broken links heeft. Een geldige sitemap is cruciaal omdat Google deze gebruikt om je site te crawlen en indexeren.
            </p>
            <p>
              Gebruik deze XML sitemap checker regelmatig, vooral na grote site updates. Check of alle belangrijke pagina's in je sitemap staan, of priority en changefreq correct zijn ingesteld, en of je de 50.000 URLs limiet niet overschrijdt. Een sitemap validator voorkomt indexering problemen die je rankings kunnen schaden.
            </p>
            <p>
              Optimaliseer ook je <Link href="/tools/html-validator" className="text-blue-600 hover:underline">HTML code</Link> en <Link href="/tools/rich-snippet-validator" className="text-blue-600 hover:underline">schema markup</Link> voor complete technische SEO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
