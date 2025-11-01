'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EyeSlashIcon } from '@heroicons/react/24/outline';

export default function BulkNoindexChecker() {
  const [urls, setUrls] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <EyeSlashIcon className="h-12 w-12 text-gray-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Bulk Noindex Checker</h1>
          <p className="text-xl text-gray-600">Check noindex/nofollow tags bulk. Meta robots analyzer.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <textarea value={urls} onChange={(e) => setUrls(e.target.value)} placeholder="URL per regel" className="w-full h-48 p-4 border rounded mb-4" />
          <button className="w-full bg-gray-700 text-white py-3 rounded">Check Meta Robots</button>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Noindex Tags: Indexering Control voor SEO</h2>
          <div className="prose max-w-none space-y-4">
            <p>Meta robots tags control search engine indexing: noindex prevents page from appearing in search results, nofollow prevents passing link equity through page's outbound links. Bulk noindex checker scans multiple URLs detecting these tags—critical for preventing accidental noindex on important pages (surprisingly common error). For large sites, bulk auditing is necessary to ensure indexing strategy correctly implemented across thousands pages. One accidental noindex on homepage can tank entire site's visibility.</p>

            <p>When to use noindex: thank you pages (post-conversion), login/account pages (private), search result pages (thin content), parameter URLs (duplicates), staging sites (prevent indexing dev versions). When NOT to use: homepage, products, services, valuable content pages. Accidental noindex is disaster—page invisible to Google regardless of quality. Regular bulk checking prevents this. Especially critical after CMS updates or theme changes that might alter meta tags site-wide.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Noindex vs Robots.txt Blocking</h3>
            
            <p>Both hide pages from Google but mechanism differs. Robots.txt blocks crawling—Google never accesses page. Noindex allows crawling but prevents indexing—Google sees page but doesn't add to results. When to use each: robots.txt for sensitive pages (admin panels, private data), noindex for pages that should be accessible but not searchable (thank you pages, internal tools). Never combine—if robots.txt blocks page, Google can't see noindex tag, might index anyway based on external links.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Nofollow Links Strategy</h4>
            <p>Nofollow on link prevents equity passing through that link. Use for: paid links (required by Google), user-generated content (comments, forum posts), untrusted external links. Meta robots nofollow makes ALL links on page nofollow—rare use case. Typically apply nofollow per link, not page-wide. Bulk checker identifies pages with nofollow meta tag—verify intentional. Accidental page-wide nofollow waste all internal linking equity from that page.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Noindex Detection Methods</h4>
            <p>Noindex can appear in: meta tag (head), X-Robots-Tag HTTP header, robots.txt (outdated method). Bulk checker must test all methods. Most common: meta robots in HTML. Some platforms use HTTP headers (better for non-HTML files). Check both. Conflicting signals (meta says index, header says noindex) confuse Google—bulk audit catches these conflicts across site.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Indexeerbaarheid Audit Workflow</h3>
            
            <p>Export all site URLs from sitemap or crawl. Run bulk noindex check. Results show: pages with noindex (verify intended), pages without noindex that should have it (thin pages, duplicates), conflicting signals. Cross-reference with Search Console Index Coverage report—pages "Excluded" might have noindex tags you didn't intend. Fix immediately—removing accidental noindex often yields quick ranking restoration as Google re-indexes.</p>

            <p>Combine with <Link href="/tools/bulk-robots-validator" className="text-blue-600 hover:underline">robots.txt checking</Link> and <Link href="/tools/bulk-canonical-checker" className="text-blue-600 hover:underline">canonical validation</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Strategic Noindex Use Cases</h2>
          <div className="prose max-w-none space-y-4">
            <p>Thin content pages—if creating pages solely for navigation but no unique value (filter pages, tag archives with few posts), noindex prevents them competing with valuable pages. Duplicate content—if unavoidable duplicates exist (print versions, translated-by-machine pages), noindex duplicates, index originals. Temporary pages—event pages after event passed, seasonal offers after season, noindex instead of deleting (preserves internal link structure). Bulk checking ensures noindex applied consistently to entire category of pages.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Staging en Development Sites</h3>
            
            <p>Staging sites (staging.example.com) must be noindexed—prevent Google indexing development versions. Horror story: launch new site, forget to remove staging noindex from production, entire new site noindexed for weeks before noticed. Bulk checker in pre-launch checklist prevents this. Check staging has noindex, production doesn't. For sites with multiple environments (dev, staging, QA, production), bulk check each validates correct configuration.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Noindex for Thin Content</h4>
            <p>Pagination pages, search result pages, archive pages often thin (little unique content). Instead of deleting, noindex preserves UX while preventing index bloat. Example: blog with 100 posts creates 10 pagination pages. Page 1 indexed (unique content), pages 2-10 noindexed (mostly duplicate of page 1). Users can navigate all pages, Google only indexes valuable first page. This approach common for large sites managing crawl budget.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Temporary vs Permanent Noindex</h4>
            <p>Temporary noindex: pages you'll eventually index (upcoming products, under-construction content). Monitor these—when ready, remove noindex. Permanent noindex: pages never meant for search (login, cart, account dashboard). Bulk checker lets you tag results—separate temporary from permanent. Review temporary list quarterly: are any ready to be indexed? Forgotten temporary noindex means content never gets search visibility despite being ready.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Monitoring Indexation Status</h3>
            
            <p>Google Search Console shows indexed vs non-indexed pages. Cross-reference with noindex audit: are non-indexed pages intentionally noindexed or accidentally? Discrepancies need investigation. Also monitor for noindex injection—hacks sometimes add noindex to harm rankings. Regular bulk checking detects suspicious noindex additions. If pages suddenly have noindex you didn't add, security issue—clean and audit immediately.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Hurt noindex crawl budget?</h3>
              <p>No—noindexed pages still crawled (Google needs to see noindex tag). They just aren't added to index. If want to save crawl budget completely, use robots.txt to block crawling. Noindex useful when: want internal links to work (accessible to users) but page shouldn't appear in search.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Can noindex pages still rank?</h3>
              <p>No—that's the point. Noindex explicitly tells Google "don't show this in results". Even with great content and backlinks, noindexed pages won't rank. If page ranking mysteriously drops to invisibility, first check: does it have noindex? Common troubleshooting step.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik noindex en canonical combineren?</h3>
              <p>Generally no—send one signal. Canonical says "index different version", noindex says "don't index at all". Combining is contradictory. Exception: noindexed page canonical to indexed version explicitly signals "I know duplicate exists, don't index duplicate". But usually canonical alone sufficient—no need for both.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">How vaak moet ik noindex tags auditen?</h3>
              <p>Monthly for active sites. Immediately after: CMS updates, theme changes, plugin installations, developer work. Any change touching templates can accidentally add/remove noindex. Also after major content updates—verify new sections don't have inherited noindex from template. Proactive monthly checking catches issues before they accumulate.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
