'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LinkIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function BulkLinkChecker() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = async () => {
    const urlList = urls.split('\n').filter(u => u.trim());
    setIsChecking(true);
    
    try {
      const response = await fetch('/api/tools/bulk-link-checker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: urlList }),
      });
      const data = await response.json();
      if (data.success) setResults(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <LinkIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bulk Link Checker</h1>
          <p className="text-xl text-gray-600">Check honderden URLs tegelijk op broken links en 404 errors. Bulk link availability checker voor SEO.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <textarea
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
            placeholder="https://example.com/page1&#10;https://example.com/page2"
            className="w-full h-48 p-4 border rounded-lg mb-4"
          />
          <button onClick={handleCheck} disabled={isChecking} className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
            {isChecking ? 'Checking...' : 'Check Links'}
          </button>
        </div>

        {results.length > 0 && (
          <div className="space-y-3 mb-8">
            {results.map((r, i) => (
              <div key={i} className={`p-4 rounded-lg ${r.status === 200 ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex items-center gap-3">
                  {r.status === 200 ? <CheckCircleIcon className="h-6 w-6 text-green-600" /> : <XCircleIcon className="h-6 w-6 text-red-600" />}
                  <div className="flex-1">
                    <div className="font-mono text-sm">{r.url}</div>
                    <div className="text-xs text-gray-600">Status: {r.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Bulk Link Checker: Broken Links Detecteren op Schaal</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>Een bulk link checker test honderden URLs simultaan op availability—essentieel voor grote websites waar manual checking onpraktisch is. Broken links (404 errors) schaden SEO omdat Google ze ziet als poor user experience en mogelijk sign van neglected site. Deze bulk link availability checker crawls je URL list en rapporteert exact welke links broken zijn, zodat je targeted fixes kunt maken. Voor sites met 1000+ pages is dit de enige scalable manier om link health te monitoren.</p>

            <p>Waarom zijn broken links zo schadelijk? User perspective: klikken op link, krijgen 404, frustratie, verlaten site. Google perspective: broken links waste crawl budget, kunnen indicate outdated content, en signal dat site niet goed maintained wordt. External broken links (naar andere sites) zijn minder erg dan internal broken links (binnen je eigen site). Maar beide schaden trust. Regular bulk link checking—monthly minimum—voorkomt dat broken links accumuleren unnoticed.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Types Broken Links Deze Tool Detecteert</h3>
            
            <p>404 Not Found is most common—page existed, nu deleted of moved zonder redirect. 500 Server Error betekent technisch probleem op destination server. 403 Forbidden is access denied—page bestaat maar je mag het niet zien. DNS errors (couldn't resolve domain) betekenen domain expired of DNS misconfigured. Connection timeouts suggereren server is down of extremely slow. Deze bulk checker identificeert alle types, zodat je weet of probleem bij jou ligt (internal link naar non-existent page) of bij external site (their server down).</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Internal vs External Broken Link Impact</h4>
            
            <p>Internal broken links (linking binnen je eigen site naar non-existent pages) zijn HIGH priority. Ze're fully within je controle en direct fixable. Common oorzaak: pagina deleted zonder redirect setup, URL structure changed zonder updating internal links, typos in hrefs. External broken links (naar andere websites) zijn MEDIUM priority. Je hebt geen controle over external sites—they kunnen pages verwijderen anytime. Best practice: check external links quarterly, replace broken external links met alternatives or remove ze. Don't waste link equity op dead destinations.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Bulk Link Checking Workflow</h4>
            
            <p>Export all URLs from je CMS or sitemap. For WordPress use plugin zoals "Export All URLs", for Shopify use app, or scrape sitemap.xml. Paste URLs in deze bulk checker tool—support voor 100-1000+ URLs depending on tool limits. Run check, wait for results. Export results als CSV voor record keeping. Fix broken links: setup 301 redirects voor important pages, update internal links, remove or replace external dead links. Recheck after fixes om verify alles resolved. Automation: schedule monthly checks, compare results over time to catch new broken links early.</p>

            <p>Combine met <Link href="/tools/bulk-redirect-checker" className="text-blue-600 hover:underline">redirect checker</Link> en <Link href="/tools/sitemap-checker" className="text-blue-600 hover:underline">sitemap validator</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Link Availability Checker: SEO Impact van Broken Links</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>Google's crawlers follow links om je site te discoveren en indexeren. Broken internal links create "dead ends" waar crawler can't proceed—portions van je site become inaccessible. Dit is vooral problematic voor deep pages (3+ clicks from homepage). Als die pages alleen reachable via now-broken links, Google misschien never finds them again. Result: de-indexing van valuable content. Regular bulk link checking prevents dit scenario—ensure every important page is reachable via working links.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Crawl Budget Waste</h3>
            
            <p>Large sites (10k+ pages) hebben limited crawl budget—Google only crawls X pages per day. Als significant portion van die budget goes to broken links, minder budget available voor valid pages. Dit delays indexing van new content. Example: site heeft 5% broken internal links. Dat's 5% crawl budget wasted monthly. Over jaar accumulates to significant lost indexing opportunities. Bulk link checker helpt identify en fix broken links quickly, optimizing crawl budget allocation naar productive pages only.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">User Experience en Bounce Rate</h4>
            
            <p>User clicks internal link expecting content, lands on 404 page—instant frustration. Many users direct bounce back to search results, trying competitor site instead. High bounce rate from broken links signals to Google dat je site doesn't satisfy user intent, potentially impacting rankings. Plus, broken links in navigation or critical conversion paths directly reduce conversions. E-commerce example: broken "Add to Cart" link = lost sales. Bulk checking ensures all critical user paths remain functional.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Link Equity Loss</h4>
            
            <p>Internal links pass "link equity" (ranking power) through je site. Strategic internal linking distributes equity naar important pages. Maar broken internal links waste dat equity—it flows into void instead of strengthening target pages. External broken links mean je're linking out (passing equity) to non-existent pages—total waste. Better to remove broken external links or replace with working alternatives, keeping equity internal or directing it naar working resources.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Bulk Link Checker vs Manual Checking</h3>
            
            <p>Manual checking: visit elke page, click every link, verify destination works. For 100-page site dat's hours. For 1000-page site it's days. Bulk checker: paste 1000 URLs, get results in minutes. Time savings zijn dramatic. Plus, automation eliminates human error—je miss geen links. Bulk tools also provide structured reports (CSV export) making het easy to prioritize fixes. Sort by status code, identify all 404s, fix those first. Then tackle 500 errors, timeouts, etc.</p>

            <p>Optimize met <Link href="/tools/html-validator" className="text-blue-600 hover:underline">HTML validation</Link> en <Link href="/tools/interne-links-checker" className="text-blue-600 hover:underline">internal link structure</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Advanced Bulk Link Checking Strategies</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>Beyond basic broken link detection, advanced strategies maximize value from bulk checking. Competitive monitoring: check concurrent links monthly—when they get broken links, you identify content gap opportunities. If major competitor has broken resource page, you create similar (working) resource en outreach to sites linking naar their broken version. This is "broken link building"—proven link acquisition tactic. Bulk checker lets you monitor dozens competitors efficiently.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Post-Migration Link Validation</h3>
            
            <p>Website migrations (new CMS, URL structure changes, domain changes) are HIGH RISK for creating broken links. Pre-migration: export all current URLs with bulk tool. Post-migration: check all old URLs to verify redirects working properly. Then check all new URLs to ensure nothing broken. Comprehensive post-migration link audit with bulk checker catches issues before users or Google do. Always run bulk check immediately after going live with migration—catch and fix issues within hours, not weeks.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Scheduled Monitoring en Alerts</h4>
            
            <p>Setup automated monthly bulk link checks. Store results in spreadsheet, compare month-over-month. When new broken links appear, investigate immediately—was page deleted intentionally? Redirect needed? Content merged elsewhere? Proactive monitoring prevents broken link accumulation. Some enterprise tools offer alerting—email notification when X% links become broken. For manual approach: calendar reminder monthly, run bulk check, review CSV, fix any new issues.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Link Checker voor E-commerce</h4>
            
            <p>E-commerce sites especially need regular bulk link checking. Products get discontinued, categories reorganized, seasonal pages archived. Zonder proper redirects, deze become broken links. Customer clicks on link van old email campaign, lands on 404, loses trust en potential sale. Bulk check all product URLs weekly during high-change periods (inventory updates, seasonal transitions). Ensure every discontinued product redirects naar similar active product or category page—never show 404 to customers.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">External Link Hygiene</h3>
            
            <p>External links age poorly—sites go offline, pages get deleted, domains expire. Annual bulk check van all external links is minimum. Replace broken external links: find working alternative source, or remove link entirely if no good replacement. Special attention to: resource pages (often link-heavy), bibliography/citations (academic content), partner/vendor listings (businesses close). Keeping external links fresh shows je site is actively maintained, which users and Google both appreciate.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoe vaak moet ik bulk link checking doen?</h3>
              <p className="text-gray-700">Monthly minimum voor active sites. Weekly voor e-commerce tijdens high-change periods. Quarterly acceptable voor static sites met little changes. Always check immediately after: site migrations, CMS updates, bulk content changes, URL structure modifications. Set calendar reminders so checking becomes routine, not ad-hoc response to problems.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik alle broken external links fixen?</h3>
              <p className="text-gray-700">Not all have equal priority. High-priority: links in main content body (readers expect them to work). Medium: sidebar/footer links (nice to have working). Low: very old blog comments with broken links (negligible impact). Fix high-priority first, then medium if time allows. For low-priority, only fix if easy. Don't waste hours chasing down replacement for obscure external link in 5-year-old blog comment.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Wat is beter: 301 redirect of link verwijderen?</h3>
              <p className="text-gray-700">For internal broken links: 301 redirect is usually better—preserves link equity and maintains user experience. Remove link only if target content no longer relevant. For external broken links: replace with working alternative if available, otherwise remove. Don't redirect external broken links to your homepage—that's confusing and looks spammy. Be surgical: fix what's fixable, remove what's not.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Kunnen te veel redirects ook probleem zijn?</h3>
              <p className="text-gray-700">Yes—redirect chains (A→B→C→D) waste crawl budget and slow page load. After fixing broken links with redirects, audit for chains. Ideally: one-hop redirects only (A→B). When you find chains, update to point directly to final destination. Also watch redirect bloat: sites with thousands of redirects can have performance issues. Periodically review redirect list, remove outdated redirects (e.g., 301s more than 2 years old to long-dead pages).</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
