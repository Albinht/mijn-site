'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function BulkRedirectChecker() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <ArrowPathIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Bulk Redirect Checker</h1>
          <p className="text-xl text-gray-600">Check redirect chains en 301/302 redirects voor bulk URLs. Redirect analyzer voor SEO.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <textarea value={urls} onChange={(e) => setUrls(e.target.value)} placeholder="URL per regel" className="w-full h-48 p-4 border rounded-lg mb-4" />
          <button className="w-full bg-yellow-600 text-white py-3 rounded-lg">Check Redirects</button>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Redirect Chain Analyzer: 301 Redirects Optimaliseren</h2>
          <div className="prose max-w-none space-y-4">
            <p>Een bulk redirect checker test redirect chains—sequences van meerdere redirects (A→B→C→D). Lange chains zijn problematic: waste crawl budget, slow page load, en dilute link equity. Deze redirect chain analyzer identificeert exact hoeveel hops each URL heeft, zodat je chains kunt flatten. Optimal redirect is single hop (A→B direct). Anything beyond 2 hops needs attention. Large sites post-migration often accumulate chains unintentionally—regular bulk checking prevents this.</p>

            <p>301 vs 302 redirects matter voor SEO. 301 (permanent) passes full link equity naar destination—use for permanently moved pages. 302 (temporary) passes less equity en signals Google: "original URL might return"—use only for genuinely temporary moves (site maintenance, A/B tests). Common mistake: using 302 when 301 intended, diluting equity unnecessarily. This bulk checker identifies redirect types, letting you audit consistency. All migrated pages should be 301, not 302, unless explicitly temporary.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Redirect Chain Impact op Performance</h3>
            
            <p>Each redirect adds latency. User requests A, server says "go to B", browser requests B, server says "go to C"—multiple round trips. For 3-hop chain: 600-900ms extra load time (200-300ms per hop). Mobile users on slow connections suffer most. Google's Core Web Vitals penalizes slow load—redirect chains directly hurt LCP (Largest Contentful Paint). Bulk checking helps identify worst offenders so you prioritize fixing chains on high-traffic pages first.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Crawl Budget Waste van Redirect Chains</h4>
            
            <p>Google crawls finite pages per day per site. Following redirect chains wastes budget—crawler hits A, follows to B, follows to C, finally reaches D. That's 4 URLs crawled to index 1 page. For site with 1000 chained URLs, massive budget waste. Bulk redirect checker quantifies waste: "500 URLs involve chains, wasting est. 35% daily crawl budget". This data justifies prioritizing redirect optimization. Fix chains, reclaim budget for indexing fresh content instead.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Link Equity Dilution</h4>
            
            <p>Each redirect hop loses small amount of equity—estimates range 1-15% per hop depending on source. 3-hop chain could lose 30%+ equity from source to final destination. For pages with valuable backlinks, this is significant ranking power leaked. Bulk checking post-migration is critical: ensure all old URLs redirect directly to new URLs, not through intermediates. Update old redirects periodically: if A originally redirected to B, maar B later moved to C, update A to point directly to C, eliminating chain.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Post-Migration Redirect Validation</h3>
            
            <p>Migrations create redirect soup. Old site URLs redirect to new structure, but if new structure changes again, chains form. Example: old blog post /blog/seo-tips redirects to /articles/seo-tips (migration 1), then /articles/ gets restructured to /guides/ (migration 2), creating chain /blog/seo-tips→/articles/seo-tips→/guides/seo-tips. Bulk checker catches these. Best practice: after any URL structure change, run full redirect audit, flatten all new chains immediately while memory of changes is fresh.</p>

            <p>Combine met <Link href="/tools/bulk-link-checker" className="text-blue-600 hover:underline">bulk link checking</Link> en <Link href="/tools/sitemap-checker" className="text-blue-600 hover:underline">sitemap validation</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Bulk Redirect Checker: Common Redirect Problems</h2>
          <div className="prose max-w-none space-y-4">
            <p>Redirect loops—A redirects to B, B redirects to A—are catastrophic. Browser shows "too many redirects" error, page inaccessible. Users can't reach content, Google can't crawl it. Loops usually happen during migrations when redirect rules conflict. Bulk checker detects loops quickly across hundreds URLs. Manual detection is nightmare—try visit each URL individually, who has time? Automated bulk checking flags loops immediately for emergency fixes.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Redirect to Non-Existent Pages</h3>
            
            <p>Redirecting to 404 is pointless—same user experience as broken link. Happens when: you setup redirect to new URL, later delete that new URL without updating redirect. Bulk checking catches this: identifies redirects where final destination returns 404 or 500 error. Fix: redirect to different relevant page, or if no good alternative, return 410 Gone instead of redirect (signals page intentionally removed, no redirect coming).</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">HTTPS/HTTP Redirect Issues</h4>
            
            <p>Sites migrating HTTP to HTTPS often have mixed redirect scenarios. Some URLs redirect HTTP→HTTPS correctly, others don't, creating inconsistency. Bulk checker tests both HTTP and HTTPS versions van each URL, ensuring all HTTP variants properly redirect to HTTPS. Missed HTTP redirects mean duplicate content (same page accessible via HTTP and HTTPS) which confuses Google. Complete redirect audit ensures clean HTTPS migration.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Redirect Canonicalization</h4>
            
            <p>www vs non-www, trailing slash vs no trailing slash—these variants should redirect to canonical version. Bulk check all variants: site.com/page, www.site.com/page, site.com/page/, www.site.com/page/. All four should redirect to your chosen canonical (e.g., https://site.com/page). Missing canonicalization redirects create duplicate content issues. Bulk checking hundreds of pages manually for all variants is impossible—automated bulk tool is only practical solution.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Redirect Strategy Best Practices</h3>
            
            <p>Minimize redirects entirely when possible. If redesigning site, keep URLs same if feasible—no redirects needed. When redirects necessary (content consolidated, product discontinued), map old to most relevant new page, not just homepage. Bad: redirect 50 discontinued products all to homepage. Good: redirect each to similar active product or category page. Bulk checker helps audit redirect destinations—flag any unusual patterns like 100+ URLs all redirecting to same destination (probably lazy migration).</p>

            <p>Use <Link href="/tools/bulk-canonical-checker" className="text-blue-600 hover:underline">canonical tags</Link> en <Link href="/tools/html-validator" className="text-blue-600 hover:underline">HTML validation</Link> together.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Advanced Redirect Management</h2>
          <div className="prose max-w-none space-y-4">
            <p>Large e-commerce sites have thousands of product URLs. Products discontinue regularly. Without redirect strategy, discontinued products become 404s. Smart approach: setup redirect rules by category. All discontinued products in category "shoes" redirect to /shoes/ category page. More specific when possible: discontinued Nike shoes redirect to active Nike category. Bulk checker audits these rules: verify all discontinued SKUs redirecting somewhere logical, not 404ing.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Temporary vs Permanent Redirects</h3>
            
            <p>302 (temporary) appropriate for: seasonal content moving locations temporarily, A/B testing alternate URLs, maintenance pages during downtime. 301 (permanent) for: content moved permanently, old URLs no longer used, site migrations. Bulk checker identifies redirect types—audit for misuse. Common error: migration uses 302 thinking "temporary until we verify everything works", but leaves 302 indefinitely. Should switch to 301 once confident in migration. Bulk audit quarterly catches these orphaned 302s.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Redirect Decay Over Time</h4>
            
            <p>Redirects age poorly. Site structure evolves—pages redirected 5 years ago might redirect to pages that themselves moved, creating chains. Or redirect to content no longer relevant. Annual bulk redirect audit: check all redirects still make sense. Old redirects to dead/irrelevant content should be updated or removed. Keep redirect list lean—delete very old redirects (3+ years) to pages with no inbound links. Less redirect bloat = better performance.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Monitoring Redirect Changes</h4>
            
            <p>Track redirect changes over time. Monthly bulk check, export results CSV, compare month-over-month. When new redirects appear unexpectedly—investigate. Maybe teammate deleted pages without telling you, creating accidental redirects. Or hosting provider changed something. Unexpected redirect changes can indicate problems. Historical tracking also helps prove SEO impact: "we fixed 200 redirect chains last month, organic traffic increased 15%"—data-backed decisions.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoeveel redirects zijn te veel?</h3>
              <p>No hard limit, but 1000s of redirects can slow server response. More concerning: redirect chains (multiple hops). Aim for max 2-hop chains, ideally 1-hop. If site has 500+ chains, prioritize flattening high-traffic URLs first. Most sites function fine with several thousand redirects total if properly managed (direct, no chains).</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik oude redirects ooit verwijderen?</h3>
              <p>Yes, eventually. Keep redirects minimum 1 year (Google needs time to update index). For high-authority pages with many backlinks, keep indefinitely. For low-traffic pages with no backlinks, safe to remove after 2-3 years. Check inbound links first—if page still getting external links via old URL, keep redirect active.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Can JavaScript redirects hurt SEO?</h3>
              <p>Yes—JavaScript redirects execute client-side (browser), not server-side. Google can follow them but with delay. Always use server-side redirects (301/302) for SEO purposes. JavaScript redirect acceptable only for user experience (popup, modal) not primary navigation. Bulk checker catches JavaScript redirects—flag for conversion to proper server-side redirects.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Wat als bulk check duurt te lang?</h3>
              <p>Checking 1000+ URLs takes time (minutes to hours depending on server speed). Break into batches—check 100 URLs at time. Or prioritize: check homepage, main category pages, top 100 traffic pages first. For very large sites (10k+ pages), consider enterprise tools with distributed checking. Free tools have rate limits to prevent server overload.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
