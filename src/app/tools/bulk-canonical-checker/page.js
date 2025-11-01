'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';

export default function BulkCanonicalChecker() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <DocumentDuplicateIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Bulk Canonical Checker</h1>
          <p className="text-xl text-gray-600">Check canonical tags bulk. Duplicate content detection tool.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <textarea value={urls} onChange={(e) => setUrls(e.target.value)} placeholder="URL per regel" className="w-full h-48 p-4 border rounded mb-4" />
          <button className="w-full bg-blue-600 text-white py-3 rounded">Check Canonical Tags</button>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Canonical Tags: Duplicate Content Prevention</h2>
          <div className="prose max-w-none space-y-4">
            <p>Canonical tag (rel="canonical") tells Google which version of page is "master" when multiple URLs have similar/identical content. Without canonicalization, Google might index all versions as separate pages—diluting ranking power across duplicates instead of concentrating it. This bulk canonical checker validates canonical tags across hundreds pages simultaneously, ensuring proper duplicate content management. Essential for e-commerce (product variations), filtered/sorted listings, and multi-language sites.</p>

            <p>Why duplicate content happens: URL parameters (example.com/products?sort=price vs ?sort=name), pagination (page 1, 2, 3 all with similar content), HTTPS/HTTP variants, www/non-www variants, print versions, mobile versions (if separate URLs), tracking parameters. Each variant is technically different URL but same content. Without canonical tags, this creates massive duplicate content—Google confused about which version to rank. Canonical solves this elegantly: tag all variants pointing to preferred version.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Self-Referencing Canonicals</h3>
            
            <p>Every page should have canonical tag, even if no duplicates—"self-referencing canonical". Page example.com/seo-guide has canonical to itself (example.com/seo-guide). Why? Prevents issues from parameters accidentally added to URLs (example.com/seo-guide?ref=twitter). That parameter URL automatically knows canonical is non-parameter version. Self-referencing = defensive canonicalization. Bulk checker verifies all pages have canonicals, flags missing ones.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Cross-Domain Canonicals</h4>
            <p>Can canonical point to different domain? Yes—useful for syndicated content. If you republish article on Medium, LinkedIn, etc., those platforms should canonical back to your original. Signals "this is duplicate but original lives here". Preserves your SEO while allowing content distribution. But canonical is suggestion not directive—Google might ignore if syndicated version has significantly more backlinks than original. Syndicate strategically.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Canonical Conflicts</h4>
            <p>Multiple canonical signals can conflict: canonical tag says A, sitemap includes B, hreflang references C. Google usually trusts canonical tag most but conflicts create confusion. Bulk checker identifies conflicting signals. Solution: ensure canonical, sitemap, hreflang all reference same preferred URL. Consistency across all signals gives Google clear direction.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">E-commerce Canonical Strategy</h3>
            
            <p>Product variants (colors, sizes) often have separate URLs for filtering but same core product. Use canonicals: example.com/shoes?color=red canonicals to example.com/shoes (main product). Sorted listings: /products?sort=price canonicals to /products. Filtered categories: /shoes?brand=nike canonicals to /shoes. This consolidates equity to main pages while allowing filtered views to exist for UX. Bulk checking hundreds product URLs ensures canonical strategy applied consistently.</p>

            <p>Use with <Link href="/tools/bulk-redirect-checker" className="text-blue-600 hover:underline">redirect checking</Link> and <Link href="/tools/sitemap-checker" className="text-blue-600 hover:underline">sitemap validation</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Advanced Canonical Tag Management</h2>
          <div className="prose max-w-none space-y-4">
            <p>Pagination canonicalization is tricky. Option 1: all paginated pages (page 2,3,4...) canonical to page 1. Consolidates equity but hides paginated content from index. Option 2: self-referencing canonicals (page 2 canonicals to itself). Allows all pages indexed but distributes equity. Option 3: rel="next"/rel="prev" tags (deprecated by Google but some use). Most sites: let paginated pages self-canonical, ensure valuable unique content per page. Category pages with just product links don't need deep pagination indexed.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Canonical Chains</h3>
            
            <p>Like redirect chains but with canonicals: Page A canonicals to B, B canonicals to C. Google might ignore chain, choosing own canonical. Always canonical directly to ultimate preferred version. Bulk checker should detect chains (complex parsing required). If found: update A to canonical directly to C, eliminating intermediate. Chains occur after migrations or URL structure changes—quarterly audit catches them.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Canonical vs Noindex</h4>
            <p>Canonical says "this page is duplicate, index other version instead". Noindex says "don't index this page at all". Don't combine—sends mixed signals. If page should never be indexed (login, cart, admin), use noindex. If page is duplicate of another you want indexed, use canonical. Never noindex a page that's canonical target for other pages—creates orphaned canonicals with nowhere to point.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Monitoring Canonical Effectiveness</h4>
            <p>Search Console shows canonical issues: pages with conflicting signals, canonicals Google ignored, unexpected canonicals. Monitor index coverage—if pages with canonical to themselves aren't indexed, might be excluded for other reasons. Check that traffic goes to canonical versions not duplicates. Analytics showing traffic to non-canonical variants suggests users finding old URLs—might need redirects in addition to canonicals.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Is canonical tag verplicht?</h3>
              <p>Not strictly required but highly recommended voor alle pages. Prevents accidental duplicate issues from parameters, protects against scraper copies, and helps Google understand preferred URLs. Minimal implementation effort for significant protection benefits.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet canonical absolute or relative zijn?</h3>
              <p>Always absolute (https://example.com/page) never relative (/page). Relative canonicals can break if page accessed via different domains or protocols. Absolute URLs eliminate ambiguity. All reputable bulk checkers flag relative canonicals as errors.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Kan canonical rankings beïnvloeden?</h3>
              <p>Proper canonicalization consolidates signals to preferred version, strengthening its rankings. Improper (missing or wrong canonicals) dilutes ranking power across duplicates, weakening all versions. So yes, significant ranking impact. Fixing canonical issues often yields quick ranking improvements as Google re-consolidates signals.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoe vaak moet ik canonical tags checken?</h3>
              <p>After site changes, monthly minimum. Post-migration immediately. When adding new content sections. Any time URL structure changes. Set up monitoring: if canonicals accidentally change (CMS updates, template changes), detect quickly via bulk checking. Proactive monitoring prevents issues from persisting.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
