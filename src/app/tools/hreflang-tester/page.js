'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GlobeAltIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function HreflangTester() {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

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
          <h1 className="text-4xl font-bold mb-4">Hreflang Tester</h1>
          <p className="text-xl text-gray-600">Valideer hreflang tags voor international SEO. Multi-language website checker.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com/page" className="w-full p-3 border rounded mb-4" />
          <button onClick={handleCheck} disabled={isChecking} className="w-full bg-green-600 text-white py-3 rounded">
            {isChecking ? 'Checking...' : 'Test Hreflang'}
          </button>
        </div>

        {results && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold mb-4">Hreflang Results</h2>
            {results.hreflangTags?.map((tag, i) => (
              <div key={i} className="p-3 mb-2 border rounded flex items-center gap-3">
                {tag.valid ? <CheckCircleIcon className="h-5 w-5 text-green-600" /> : <XCircleIcon className="h-5 w-5 text-red-600" />}
                <div>
                  <div className="font-mono text-sm">{tag.hreflang}: {tag.href}</div>
                  {!tag.valid && <div className="text-xs text-red-600">{tag.error}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Hreflang Tags: International SEO Essentials</h2>
          <div className="prose max-w-none space-y-4">
            <p>Hreflang tags zijn HTML attributes die Google vertellen welke taalversie van je content te tonen aan users in verschillende regio's. Without hreflang, Google might show English page to Dutch users or vice versa—poor UX. Deze hreflang tester valideert je implementation, ensuring Google correctly serves right language content to right audiences. Essential voor multi-language websites, international businesses, en content targeting different regions.</p>

            <p>Hreflang syntax: hreflang="en-US" (Engels voor US), hreflang="nl-NL" (Nederlands voor Nederland), hreflang="en-GB" (Engels voor UK). Format is language-region code (ISO 639-1 voor taal, ISO 3166-1 Alpha-2 voor land). Can omit region: hreflang="en" targets all English speakers regardless location. Include hreflang="x-default" voor fallback—shown when no language match found. Each page must reference all language versions including itself—reciprocal linking required.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Common Hreflang Implementation Errors</h3>
            
            <p>Missing return links—Page A links to Page B but B doesn't link back to A. Google ignores non-reciprocal hreflang. Incorrect language codes—"nl-BE" for Belgian Dutch, not "nl-NL". Wrong URL formatting—relative URLs instead of absolute. Linking to 404s or redirected pages. Mixing hreflang methods (HTTP headers + HTML tags + sitemap) inconsistently. This tester catches all these errors. Proper implementation is finnicky—small mistakes invalidate entire hreflang setup.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Hreflang Validation Process</h4>
            
            <p>Test every language version: run each through hreflang tester. Check that all versions reference each other correctly. Verify language codes accurate. Confirm URLs absolute (https://...) not relative (/page). Test x-default fallback exists. Use Google Search Console International Targeting report—shows hreflang errors Google detects. Fix errors immediately—invalid hreflang means Google might serve wrong language to users.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Hreflang in Sitemaps vs HTML</h4>
            
            <p>Three ways to implement hreflang: HTML link tags in head, HTTP headers, or XML sitemaps. HTML most common (easy to implement per page). Sitemap method better for large sites (thousands of pages)—central management. HTTP headers for non-HTML files (PDFs). Never mix methods inconsistently—pick one, use consistently. Tester validates HTML implementation; for sitemap hreflang check dedicated sitemap validator tools.</p>

            <p>Use with <Link href="/tools/sitemap-checker" className="text-blue-600 hover:underline">sitemap validator</Link> en <Link href="/tools/html-validator" className="text-blue-600 hover:underline">HTML checker</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Hreflang Strategy voor Different Scenarios</h2>
          <div className="prose max-w-none space-y-4">
            <p>Multi-language sites (same language different regions): Dutch for Netherlands vs Belgium—both "nl" but different regions targeting. Use hreflang="nl-NL" for Netherlands, hreflang="nl-BE" for Belgium. Differentiate content: pricing in EUR vs local currency, different contact info, region-specific examples. Hreflang ensures Belgian users see Belgian version, Dutch users see Netherlands version, even though both Dutch language.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Multi-Regional Same Language Content</h3>
            
            <p>English content for US vs UK vs Australia—same language, different audiences. Use hreflang="en-US", "en-GB", "en-AU". Adapt content: spelling (color vs colour), terminology (truck vs lorry), cultural references, pricing. Without hreflang, Google might show US version to UK users with wrong pricing/spelling. Proper hreflang targeting ensures localized experience even when language shared.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">E-commerce International Hreflang</h4>
            
            <p>E-commerce with international customers must have hreflang. Product page in English for US market, translated to Dutch for NL market, German for DE market—each version needs hreflang pointing to alternatives. Critical: keep product URLs consistent structure across languages. example.com/en/shoes/nike-123 and example.com/nl/schoenen/nike-123 both need hreflang linking them as language variants of same product. Helps prevent duplicate content issues.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Hreflang voor Content Syndication</h4>
            
            <p>If you publish same content on multiple domains (company.com and company.co.uk for different markets), use hreflang to connect them. Prevents duplicate content penalties—tells Google: "these are intentionally same content for different regions, not plagiarism". Each domain implements hreflang pointing to other domain's equivalent page. Requires coordination but essential for multi-domain international strategy.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Monitoring Hreflang Performance</h3>
            
            <p>Google Search Console shows if hreflang working: check International Targeting report for errors. Monitor organic traffic per language version—sharp drops might indicate hreflang issues (wrong language served). Review quarterly: are users in Netherlands getting Dutch version? Check analytics location vs language data. Mismatches suggest hreflang problems. Regular testing with this tool prevents issues from persisting unnoticed.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Is hreflang verplicht voor multi-language sites?</h3>
              <p>Not technically required but highly recommended. Without it, Google guesses which language version to show users—often gets it wrong. Poor UX when English speaker gets Japanese page. Plus duplicate content risk—Google might not understand pages are translations. Hreflang eliminates ambiguity, ensures optimal user experience, prevents duplicate content penalties.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik hreflang voor elke taal op elke pagina zetten?</h3>
              <p>Yes—every language version must reference all other language versions including itself. If you have EN, NL, DE, FR versions, English page needs 4 hreflang tags (pointing to EN, NL, DE, FR). Dutch page also needs same 4 tags. Tedious but required for proper function. Use templates or plugins to auto-generate—manual management error-prone for 100+ pages × multiple languages.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Wat is x-default hreflang?</h3>
              <p>x-default is fallback version shown when user's language/region not explicitly covered. If you have EN and NL versions plus x-default pointing to EN, German users (no DE version) get EN version. Without x-default, Google picks arbitrarily. Best practice: set x-default to your primary market version or a language selector page.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Kan hreflang rankings beïnvloeden?</h3>
              <p>Indirectly yes. Correct hreflang means better user experience (users get right language), lower bounce rates, higher engagement—all ranking signals. Also prevents duplicate content confusion. So while hreflang itself not ranking factor, proper implementation supports factors that are. Sites with good hreflang typically rank better internationally than those without.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
