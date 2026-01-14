'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GlobeAltIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import useLocale from '@/hooks/useLocale';
import { getHreflangTesterCopy } from '@/i18n/tools/hreflang-tester';

export default function HreflangTester() {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const { locale } = useLocale();
  const copy = getHreflangTesterCopy(locale);

  const handleCheck = async () => {
    setIsChecking(true);
    try {
      const res = await fetch('/api/tools/hreflang-tester', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.success) setResults(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <GlobeAltIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">{copy.hero.title}</h1>
          <p className="text-xl text-gray-600">{copy.hero.subtitle}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={copy.form.placeholder}
            className="w-full p-3 border rounded mb-4"
          />
          <button onClick={handleCheck} disabled={isChecking} className="w-full bg-green-600 text-white py-3 rounded">
            {isChecking ? copy.form.button.loading : copy.form.button.idle}
          </button>
        </div>

        {results && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">{copy.results.title}</h2>
            {results.hreflangTags?.map((tag, i) => (
              <div key={i} className="p-3 mb-2 border rounded flex items-center gap-3">
                {tag.valid ? <CheckCircleIcon className="h-5 w-5 text-green-600" /> : <XCircleIcon className="h-5 w-5 text-red-600" />}
                <div>
                  <div className="font-mono text-sm">
                    {tag.hreflang}: {tag.href}
                  </div>
                  {!tag.valid && <div className="text-xs text-red-600">{tag.error}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">{copy.sections.essentials.title}</h2>
          <div className="prose max-w-none space-y-4">
            {copy.sections.essentials.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <h3 className="text-xl font-bold mt-6 mb-4">{copy.sections.essentials.headings.commonErrors}</h3>
            <p>{copy.sections.essentials.details.commonErrors}</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">{copy.sections.essentials.headings.validationProcess}</h4>
            <p>{copy.sections.essentials.details.validationProcess}</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">{copy.sections.essentials.headings.sitemapsVsHtml}</h4>
            <p>{copy.sections.essentials.details.sitemapsVsHtml}</p>

            <p>
              {copy.sections.essentials.links.prefix}{' '}
              <Link href="/tools/sitemap-checker" className="text-blue-600 hover:underline">
                {copy.sections.essentials.links.sitemap}
              </Link>{' '}
              {copy.sections.essentials.links.between}{' '}
              <Link href="/tools/html-validator" className="text-blue-600 hover:underline">
                {copy.sections.essentials.links.html}
              </Link>
              {copy.sections.essentials.links.suffix}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">{copy.sections.strategy.title}</h2>
          <div className="prose max-w-none space-y-4">
            <p>{copy.sections.strategy.intro}</p>

            <h3 className="text-xl font-bold mt-6 mb-4">{copy.sections.strategy.headings.multiRegional}</h3>
            <p>{copy.sections.strategy.details.multiRegional}</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">{copy.sections.strategy.headings.ecommerce}</h4>
            <p>{copy.sections.strategy.details.ecommerce}</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">{copy.sections.strategy.headings.syndication}</h4>
            <p>{copy.sections.strategy.details.syndication}</p>

            <h3 className="text-xl font-bold mt-6 mb-4">{copy.sections.strategy.headings.monitoring}</h3>
            <p>{copy.sections.strategy.details.monitoring}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">{copy.sections.faq.title}</h2>
          <div className="space-y-6">
            {copy.sections.faq.items.map((item) => (
              <div key={item.question} className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
