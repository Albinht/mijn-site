'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { SparklesIcon, VideoCameraIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';
import useLocale from '@/hooks/useLocale';
import { buildLocalizedPath } from '@/lib/i18n';
import { getYouTubeNameGeneratorCopy } from '@/i18n/tools/youtube-name-generator';

export default function YouTubeNameGenerator() {
  const { locale } = useLocale();
  const copy = useMemo(() => getYouTubeNameGeneratorCopy(locale), [locale]);

  const [topic, setTopic] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [limitInfo, setLimitInfo] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError(copy.errors.missingTopic);
      return;
    }

    setIsLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await fetch('/api/tools/youtube-name-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });

      const data = await response.json();
      if (!data?.success || !Array.isArray(data?.results)) {
        if (typeof data?.limit === 'number') {
          setLimitInfo({
            limit: data.limit,
            remaining: typeof data.remaining === 'number' ? data.remaining : null,
            current: typeof data.current === 'number' ? data.current : null,
          });
        }
        setError(data?.error || copy.errors.failed);
        return;
      }

      setLimitInfo({
        limit: typeof data.limit === 'number' ? data.limit : 3,
        remaining: typeof data.remaining === 'number' ? data.remaining : null,
        current: typeof data.current === 'number' ? data.current : null,
      });
      setResults(data.results);
    } catch (e) {
      setError(copy.errors.failed);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1400);
    } catch (e) {
      // no-op
    }
  };

  const availabilityBadge = (availability) => {
    if (availability === 'available') return 'bg-green-100 text-green-800 border-green-200';
    if (availability === 'taken') return 'bg-red-100 text-red-800 border-red-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const availabilityLabel = (availability) => {
    if (availability === 'available') return copy.results.availability.available;
    if (availability === 'taken') return copy.results.availability.taken;
    return copy.results.availability.unknown;
  };

  const contactHref = buildLocalizedPath('/work-with-me', locale);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <VideoCameraIcon className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{copy.hero.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.hero.subtitle}</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-100">
          <label className="block text-sm font-semibold text-gray-700 mb-2">{copy.form.label}</label>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder={copy.form.placeholder}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={handleGenerate}
              disabled={isLoading || !topic.trim()}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  {copy.form.button.loading}
                </>
              ) : (
                <>
                  <SparklesIcon className="h-5 w-5" />
                  {copy.form.button.idle}
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">{copy.form.helper}</p>
          {limitInfo && typeof limitInfo.limit === 'number' && (
            <p className="text-xs text-gray-500 mt-2">
              Remaining generations: {typeof limitInfo.remaining === 'number' ? limitInfo.remaining : '?'} /{' '}
              {limitInfo.limit}
            </p>
          )}

          {error && (
            <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">{error}</p>
            </div>
          )}
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10 border border-gray-100">
            <div className="flex items-start justify-between gap-6 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{copy.results.title}</h2>
                <p className="text-gray-600 mt-1">{copy.results.subtitle}</p>
              </div>
              <button
                onClick={handleGenerate}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold text-gray-800"
              >
                <SparklesIcon className="h-4 w-4" />
                {copy.results.actions.tryAgain}
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600 border-b">
                    <th className="py-3 pr-4">{copy.results.columns.name}</th>
                    <th className="py-3 pr-4">{copy.results.columns.handle}</th>
                    <th className="py-3 pr-4">{copy.results.columns.availability}</th>
                    <th className="py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item, index) => {
                    const nameKey = `name-${index}`;
                    const handleKey = `handle-${index}`;
                    return (
                      <tr key={`${item.name}-${item.handle}-${index}`} className="border-b last:border-b-0">
                        <td className="py-4 pr-4">
                          <button
                            type="button"
                            onClick={() => copyToClipboard(item.name, nameKey)}
                            className="text-gray-900 font-semibold hover:underline"
                            title={copy.results.actions.copy}
                          >
                            {item.name}
                          </button>
                        </td>
                        <td className="py-4 pr-4">
                          <div className="flex items-center gap-2">
                            <code className="text-gray-800 bg-gray-50 px-2 py-1 rounded border border-gray-200">
                              @{item.handle}
                            </code>
                            {item.url && (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs text-gray-500 hover:text-gray-800 underline"
                              >
                                YouTube
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="py-4 pr-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold ${availabilityBadge(
                              item.availability
                            )}`}
                          >
                            {availabilityLabel(item.availability)}
                          </span>
                        </td>
                        <td className="py-4 text-right whitespace-nowrap">
                          <div className="inline-flex gap-2">
                            <button
                              type="button"
                              onClick={() => copyToClipboard(item.name, nameKey)}
                              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                              title={copy.results.actions.copy}
                            >
                              {copiedKey === nameKey ? (
                                <CheckIcon className="h-4 w-4 text-green-600" />
                              ) : (
                                <ClipboardIcon className="h-4 w-4 text-gray-700" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => copyToClipboard(`@${item.handle}`, handleKey)}
                              className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                              title={copy.results.actions.copy}
                            >
                              {copiedKey === handleKey ? (
                                <CheckIcon className="h-4 w-4 text-green-600" />
                              ) : (
                                <ClipboardIcon className="h-4 w-4 text-gray-700" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mt-4">{copy.results.availability.hint}</p>

            <div className="mt-6 md:hidden">
              <button
                onClick={handleGenerate}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm font-semibold text-gray-800"
              >
                <SparklesIcon className="h-4 w-4" />
                {copy.results.actions.tryAgain}
              </button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{copy.sections.whatIs.title}</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            {copy.sections.whatIs.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{copy.sections.why.title}</h2>
            <ul className="space-y-3 text-gray-700">
              {copy.sections.why.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-600 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{copy.sections.checks.title}</h2>
            <ul className="space-y-3 text-gray-700">
              {copy.sections.checks.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-rose-600 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{copy.sections.howWorks.title}</h2>
          <ol className="space-y-3 text-gray-700 list-decimal pl-5">
            {copy.sections.howWorks.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{copy.sections.tips.title}</h2>
          <ul className="space-y-3 text-gray-700">
            {copy.sections.tips.bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gray-900 flex-shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{copy.sections.faq.title}</h2>
          <div className="space-y-6">
            {copy.sections.faq.items.map((item) => (
              <div key={item.question} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">{copy.sections.cta.title}</h2>
              <p className="text-gray-300 mt-2">{copy.sections.cta.subtitle}</p>
            </div>
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {copy.sections.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
