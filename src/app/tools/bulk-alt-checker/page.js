'use client';

import { useMemo, useState } from 'react';
import { PhotoIcon, MagnifyingGlassIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

function statusBadgeClass(status) {
  if (status === 'missing') return 'bg-red-100 text-red-800 border-red-200';
  if (status === 'empty') return 'bg-amber-100 text-amber-800 border-amber-200';
  if (status === 'needs-improvement') return 'bg-blue-100 text-blue-800 border-blue-200';
  return 'bg-green-100 text-green-800 border-green-200';
}

function statusLabel(status) {
  if (status === 'missing') return 'Ontbreekt';
  if (status === 'empty') return 'Leeg';
  if (status === 'needs-improvement') return 'Optimaliseren';
  return 'Goed';
}

function issueLabel(issue) {
  switch (issue) {
    case 'missing-alt-attribute':
      return 'Geen alt attribuut';
    case 'empty-alt':
      return 'Lege alt tekst';
    case 'too-short':
      return 'Te kort';
    case 'too-long':
      return 'Te lang';
    case 'duplicate-alt':
      return 'Duplicaat';
    case 'generic-alt':
      return 'Te generiek';
    case 'keyword-stuffing-risk':
      return 'Keyword stuffing risico';
    default:
      return issue;
  }
}

export default function AltAttributeCheckerPage() {
  const [url, setUrl] = useState('http://example.com');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [copiedSrc, setCopiedSrc] = useState('');

  const orderedRows = useMemo(() => {
    if (!result?.images) return [];
    const weight = {
      missing: 0,
      empty: 1,
      'needs-improvement': 2,
      good: 3,
    };
    return [...result.images].sort((a, b) => (weight[a.status] || 9) - (weight[b.status] || 9));
  }, [result]);

  const handleCheck = async () => {
    const value = url.trim();
    if (!value) {
      setError('Vul een URL in om te controleren.');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/tools/bulk-alt-checker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: value }),
      });
      const data = await response.json();
      if (!response.ok || !data?.success) {
        setError(data?.error || 'Controle mislukt. Probeer het opnieuw.');
        return;
      }
      setResult(data);
    } catch {
      setError('Controle mislukt door een netwerkfout.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedSrc(value);
      window.setTimeout(() => setCopiedSrc(''), 1200);
    } catch {
      // no-op
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <PhotoIcon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Alt Attribute Checker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mijn alt attribute checker is een onmisbare tool om te controleren of afbeeldingen op je website goede
            alt-teksten hebben voor SEO en toegankelijkheid.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-100">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Enter URL:</label>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && handleCheck()}
              placeholder="http://example.com"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={handleCheck}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold transition-colors"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  Controleren...
                </>
              ) : (
                <>
                  <MagnifyingGlassIcon className="h-5 w-5" />
                  Check
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">{error}</p>
            </div>
          )}
        </div>

        {result && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-sm text-gray-500">Totaal afbeeldingen</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{result.summary.totalImages}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-sm text-gray-500">Met alt attribuut</p>
                <p className="text-3xl font-bold text-green-700 mt-1">{result.summary.withAlt}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-sm text-gray-500">Ontbrekend / leeg</p>
                <p className="text-3xl font-bold text-red-700 mt-1">
                  {result.summary.missingAlt + result.summary.emptyAlt}
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-sm text-gray-500">Duplicaten</p>
                <p className="text-3xl font-bold text-amber-700 mt-1">{result.summary.duplicateAlt}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Aanbevelingen voor optimalisatie</h2>
              <ul className="space-y-3 text-gray-700">
                {result.recommendations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-pink-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resultaten</h2>
              {result.truncated && (
                <p className="text-sm text-amber-700 mb-4">
                  Er zijn meer dan {result.summary.shownInTable} afbeeldingen gevonden. De tabel toont de eerste{' '}
                  {result.summary.shownInTable} resultaten voor performance.
                </p>
              )}
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-600 border-b">
                      <th className="py-3 pr-4">Afbeelding</th>
                      <th className="py-3 pr-4">Alt tekst</th>
                      <th className="py-3 pr-4">Status</th>
                      <th className="py-3 pr-4">Issues</th>
                      <th className="py-3 pr-4">Score</th>
                      <th className="py-3">Actie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderedRows.map((row) => (
                      <tr key={`${row.src}-${row.alt}`} className="border-b last:border-b-0 align-top">
                        <td className="py-4 pr-4 max-w-xs">
                          <a
                            href={row.src}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-700 hover:underline break-all"
                          >
                            {row.src}
                          </a>
                        </td>
                        <td className="py-4 pr-4 text-gray-800 max-w-sm">
                          {row.alt ? row.alt : <span className="text-gray-400">(leeg)</span>}
                        </td>
                        <td className="py-4 pr-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold ${statusBadgeClass(
                              row.status
                            )}`}
                          >
                            {statusLabel(row.status)}
                          </span>
                        </td>
                        <td className="py-4 pr-4">
                          {row.issues.length ? (
                            <div className="flex flex-wrap gap-2">
                              {row.issues.map((issue) => (
                                <span
                                  key={`${row.src}-${issue}`}
                                  className="inline-flex items-center px-2 py-1 rounded border border-gray-200 bg-gray-50 text-xs text-gray-700"
                                >
                                  {issueLabel(issue)}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-gray-500">Geen issues</span>
                          )}
                        </td>
                        <td className="py-4 pr-4 font-semibold text-gray-900">{row.qualityScore}/100</td>
                        <td className="py-4">
                          <button
                            type="button"
                            onClick={() => handleCopy(row.src)}
                            className="inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                            title="Kopieer afbeeldings-URL"
                          >
                            {copiedSrc === row.src ? (
                              <CheckIcon className="h-4 w-4 text-green-600" />
                            ) : (
                              <ClipboardIcon className="h-4 w-4 text-gray-700" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Gescand op: <code>{result.url}</code> op {new Date(result.checkedAt).toLocaleString('nl-NL')}.
              </p>
            </div>
          </>
        )}

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Wat is een alt-attribuut?</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Een alt-attribuut (alternatieve tekst) is een HTML-element dat een beschrijving van een afbeelding geeft.
              Het wordt gebruikt door zoekmachines om de inhoud van de afbeelding te begrijpen en door schermlezers om
              visueel gehandicapte gebruikers te helpen.
            </p>
            <p>
              Een goed geschreven alt-tekst kan de SEO en toegankelijkheid van je website aanzienlijk verbeteren.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Waarom een alt attribute checker gebruiken?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-pink-600 flex-shrink-0" />
                <span>Verbeter SEO: zoekmachines gebruiken alt-teksten om afbeeldingen beter te indexeren.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-pink-600 flex-shrink-0" />
                <span>Verhoog toegankelijkheid voor gebruikers met visuele beperkingen.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-pink-600 flex-shrink-0" />
                <span>Identificeer ontbrekende alt-teksten en los ze gericht op.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-pink-600 flex-shrink-0" />
                <span>Optimaliseer content met duidelijke en relevante beschrijvingen.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Waar checkt deze tool op?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-600 flex-shrink-0" />
                <span>Aanwezigheid van alt-attributen op alle afbeeldingen.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-600 flex-shrink-0" />
                <span>Kwaliteit van alt-teksten: beschrijvend, relevant en niet te generiek.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-600 flex-shrink-0" />
                <span>Lengte van alt-teksten: te kort of te lang wordt gemarkeerd.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-600 flex-shrink-0" />
                <span>Duplicatie van alt-teksten die de effectiviteit verminderen.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hoe werkt de alt attribute checker?</h2>
          <ol className="space-y-3 text-gray-700 list-decimal pl-5">
            <li>Voer de URL van de pagina in die je wilt controleren.</li>
            <li>De tool controleert alle afbeeldingen op aanwezigheid en kwaliteit van alt-attributen.</li>
            <li>Je krijgt een duidelijk overzicht met status, issues en aanbevelingen voor optimalisatie.</li>
          </ol>
          <p className="text-gray-700 mt-6">
            Door regelmatig je alt-attributen te controleren en te optimaliseren, verbeter je zowel toegankelijkheid als
            SEO-prestaties.
          </p>
        </div>
      </div>
    </div>
  );
}
