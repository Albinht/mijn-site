'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function BulkRobotsValidator() {
  const [domains, setDomains] = useState('');
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <ShieldCheckIcon className="h-12 w-12 text-slate-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Bulk Robots.txt Validator</h1>
          <p className="text-xl text-gray-600">Check robots.txt files bulk. Validate crawl rules voor meerdere domeinen.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <textarea value={domains} onChange={(e) => setDomains(e.target.value)} placeholder="example1.com&#10;example2.com" className="w-full h-48 p-4 border rounded mb-4" />
          <button className="w-full bg-slate-600 text-white py-3 rounded">Validate Robots.txt</button>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Robots.txt Validator: Crawl Control voor SEO</h2>
          <div className="prose max-w-none space-y-4">
            <p>Robots.txt file instructs search engine crawlers which pages to crawl/ignore. Deze bulk robots.txt validator checks files voor syntax errors, validates directives, identifies crawl blocks that might hurt SEO. Misconfigured robots.txt can accidentally block entire site from Google—catastrophic error. Regular validation prevents such disasters. Voor agencies managing dozens client sites, bulk validation is only practical way to monitor all robots files consistently.</p>

            <p>Common robots.txt mistakes: Blocking important pages (Disallow: /products/), incorrect syntax (missing colons or slashes), conflicting rules, blocking CSS/JS files (hurts mobile ranking), no sitemap reference. Single character error can invalidate file or create unintended blocks. This validator parses robots.txt following Google's exact parsing rules, catching errors before they impact crawling. Test after any robots.txt changes immediately.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Robots.txt Best Practices</h3>
            
            <p>What to block: admin pages (/wp-admin/), private pages, duplicate content (parameter URLs, printer versions), infinite calendar pages, search result pages. What NOT to block: CSS/JavaScript files (Google needs these for rendering), important content pages, public-facing products/services. Include sitemap reference: "Sitemap: https://example.com/sitemap.xml". Use specific User-agent directives sparingly—"User-agent: *" covers all crawlers, sufficient for most sites. Overly complex robots.txt causes errors.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Crawl Budget Optimization</h4>
            
            <p>Large sites use robots.txt to optimize crawl budget—block low-value pages so Google spends budget on important content. Example: e-commerce site with 100k products but only 20k currently stocked—block out-of-stock product pages. This directs crawlers to available inventory. But be cautious: blocking too aggressively can hide valuable pages. Validate rules achieve intended blocks without collateral damage.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Testing Robots.txt Directives</h4>
            <p>After editing robots.txt, test specific URLs: is this URL blocked or allowed? Google Search Console has Robots Testing Tool doing exactly this. Bulk validator checks file validity; Search Console tool checks specific URL impacts. Use both: validator ensures syntax correct, Search Console ensures rules behave as intended. Test edge cases: does wildcard rule block what you expect? Does order of rules matter? (Yes—first matching rule wins.)</p>

            <p>Combine with <Link href="/tools/sitemap-checker" className="text-blue-600 hover:underline">sitemap validation</Link> and <Link href="/tools/bulk-noindex-checker" className="text-blue-600 hover:underline">meta robots checking</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Robots.txt Architecture voor Different Site Types</h2>
          <div className="prose max-w-none space-y-4">
            <p>Small sites (100-1000 pages): minimal robots.txt usually sufficient. Block admin, maybe search pages, include sitemap. Overcomplicating hurts more than helps. Medium sites (1k-10k): selective blocking valuable—parameters, filters, duplicate pagination. Large sites (10k+): aggressive crawl budget optimization necessary—block entire low-value sections, use wildcards extensively, multiple sitemap references for different sections. Validator ensures complexity doesn't introduce errors.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">E-commerce Robots.txt Strategy</h3>
            
            <p>E-commerce unique challenges: filter/sort URLs (millions of combinations), out-of-stock products, cart/checkout pages (sensitive). Block filter parameters: "Disallow: /*?filter=" prevents infinite filter combinations. Block search: "Disallow: /search?". Allow category pages, individual product pages. Reference product sitemap. Check that robots.txt doesn't accidentally block category pages—common error that hides entire product sections.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Noindex vs Robots.txt Blocking</h4>
            <p>Robots.txt blocks crawling—Google can't access page at all. Meta noindex allows crawling but prevents indexing—Google sees page but doesn't add to index. Use noindex for sensitive pages you want protected but might have internal links to. Use robots.txt for truly unnecessary pages (admin, duplicates). Never combine—if robots.txt blocks page, Google can't see noindex tag, leaving page potentially indexed with limited info. Choose one method per page.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Robots.txt for JavaScript Sites</h4>
            <p>SPAs (Single Page Applications) must never block JS/CSS files. Google renders JavaScript to understand content—blocked JS means blank page to Google. Historical mistake: blocking all .js files to save crawl budget. Modern rule: allow all .js and .css files. Block only unnecessary API endpoints or internal app routes. Validator specifically checks for JS/CSS blocks—common error with severe impact.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">International Robots.txt Considerations</h3>
            
            <p>Multi-language sites: one robots.txt per domain/subdomain. example.com/robots.txt for English, example.de/robots.txt for German. Can't have language-specific rules in one file. For subfolders (example.com/en/, example.com/de/), one robots.txt affects all—be careful not to accidentally block entire language subfolders. If using country domains (.nl, .de, .fr), each needs tailored robots.txt reflecting local SEO strategy and legal requirements.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Kan een fout in robots.txt mijn hele site de-indexen?</h3>
              <p>Yes—"Disallow: /" blocks everything. Typo like extra space can accidentally create this. Always test after editing. Keep backups. Make changes cautiously. For critical sites, test in staging environment first. One character error can hide site from Google—validation before deployment essential.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik robots.txt hebben?</h3>
              <p>Not required but recommended. Without it, crawlers crawl everything (sometimes not desired). Empty robots.txt (file exists but blank) vs no robots.txt (404) both mean "crawl everything" but empty file is cleaner. Include at minimum: sitemap reference. This aids discovery even if you're not blocking anything.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Respecteren alle crawlers robots.txt?</h3>
              <p>Legit crawlers (Google, Bing, reputable SEO tools) yes. Malicious bots, scrapers: often ignore robots.txt. It's polite request niet enforced security. For truly sensitive pages, use authentication/password protection, not robots.txt. For SEO purposes though, major search engines fully respect it—that's what matters.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoe test ik specifieke URLs tegen robots.txt?</h3>
              <p>Google Search Console → Robots Testing Tool. Enter URL, see if blocked. Shows which rule blocking it if applicable. Use this alongside validator: validator checks file syntax, Search Console tests real-world URL impacts. Both tools together give comprehensive robots.txt assurance.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
