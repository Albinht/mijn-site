'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function BulkExternalLinkChecker() {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <ArrowTopRightOnSquareIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Bulk External Link Checker</h1>
          <p className="text-xl text-gray-600">Check external outbound links bulk. Broken link detector voor meerdere pages.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <textarea value={urls} onChange={(e) => setUrls(e.target.value)} placeholder="URL per regel" className="w-full h-48 p-4 border rounded mb-4" />
          <button className="w-full bg-indigo-600 text-white py-3 rounded">Check External Links</button>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">External Links: Outbound Link Strategy voor SEO</h2>
          <div className="prose max-w-none space-y-4">
            <p>External links (outbound links) are hyperlinks from your site to other domains. Unlike internal links connecting your own pages, external links point users to outside resources. This bulk external link checker analyzes multiple pages simultaneously, detecting broken external links (404 errors), validating link destinations, checking response times, identifying potentially harmful outbound patterns. For large sites with hundreds pages linking to external sources, bulk validation prevents embarrassing broken links and ensures quality outbound profile.</p>

            <p>Why external links matter: They signal to Google your content is well-researched (citing authoritative sources), provide value to users (linking to helpful resources), contribute to overall content quality. But external links carry risks: linking to spam/low-quality sites hurts credibility, broken externals create poor UX, excessive externals without nofollow can leak authority, linking to competitors sends traffic away. Strategic external linking requires balance—enough to demonstrate thoroughness, not so many you hemorrhage traffic or appear spammy.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Broken External Link Detection</h3>
            
            <p>External sites change URLs, delete pages, or go offline—links that worked when published break over time. Broken external links hurt UX (users click, get 404, frustration) and signal outdated content to Google. Regular bulk checking identifies broken externals: check returns 404, 410, or timeout. Fix options: update to working URL if resource moved, remove link if resource gone, replace with alternative source, add archived version (Wayback Machine) if important historical reference. Quarterly broken link audits maintain site quality.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Authority and Trust Signals</h4>
            
            <p>Linking to high-authority domains (universities, government sites, established news outlets, industry leaders) signals credibility. Google's algorithms recognize authoritative citations—content linking to trustworthy sources gets credibility boost. Conversely, linking to known spam domains, link farms, or shady sites damages your trust score. Bulk external link analysis should identify destination domains: are you linking to .edu, .gov, major publications? Or sketchy domains with low trust scores? Audit your external link portfolio like investment portfolio—quality over quantity.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Nofollow for Untrusted External Links</h4>
            
            <p>When linking to sites you don't fully vouch for (user-submitted content, paid links, unknown sources), apply rel="nofollow" attribute. This tells Google "don't count this as endorsement". Protects your site from guilt-by-association with low-quality destinations. Bulk checker can identify external links missing nofollow that should have it: paid advertisement links (legally required nofollow), affiliate links, user-generated content links, links in comments. Regular audits ensure compliance with Google's link schemes policy.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">External Link Velocity and Pattern Analysis</h3>
            
            <p>Sudden spike in outbound links can signal hacking—injected spam links are common attack vector. Bulk external link checking over time shows patterns: typical page has 5-10 external links, suddenly has 50, investigate immediately. Also monitor for link rot accumulation: if broken external link percentage grows from 2% to 15% over six months, your content aging without maintenance. Set benchmarks: acceptable broken link rate (under 5%), average external links per page (5-15 for blog content), percentage linking to authority domains (aim for 50%+).</p>

            <p>Combine with <Link href="/tools/bulk-link-checker" className="text-blue-600 hover:underline">link status validation</Link> and <Link href="/tools/interne-links-checker" className="text-blue-600 hover:underline">internal link analysis</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Advanced External Link Management Strategies</h2>
          <div className="prose max-w-none space-y-4">
            <p>Content creators often overlook external link maintenance—publish article with external citations, never check them again. Years later, 30% of external links broken. Implement systematic external link hygiene: quarterly bulk checks of all content, prioritize high-traffic pages first, update or remove broken links within 30 days of detection. For news sites or time-sensitive content, monthly checks necessary. For evergreen content, quarterly sufficient. Automated monitoring with bulk checker makes this manageable even for thousands pages.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Link Attributes: Nofollow, Sponsored, UGC</h3>
            
            <p>Modern link attributes beyond nofollow: rel="sponsored" for paid links/advertisements (tells Google "this is commercial relationship"), rel="ugc" for user-generated content links (forum posts, comments), can combine multiple (rel="nofollow sponsored"). Proper attribute usage important for compliance and trust. Bulk external link checker should parse attributes: are affiliate links marked sponsored? Are comment links marked ugc? Misattributed links can violate Google guidelines—bulk auditing ensures compliant implementation across entire site.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">External Link Anchor Text Diversity</h4>
            
            <p>When linking externally, vary anchor text naturally. Linking to same destination repeatedly with identical anchor looks robotic. Example: five external links to "Wikipedia" all with anchor text "Wikipedia"—boring and potentially manipulative-looking. Better: "according to Wikipedia", "this Wikipedia article explains", "learn more", "comprehensive definition", "authoritative source". Natural variation in anchor text for external links signals editorial quality over programmatic linking.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Content Freshness Through External Link Updates</h4>
            
            <p>Updating external links signals to Google that content is maintained. Article published 2020 linking to 2019 research—updating with 2024 research shows content freshness. Bulk external link audit identifies outdated citations: check publication dates of linked content, flag links to old studies/statistics, recommend updated alternatives. Refreshing external citations is lightweight content update (versus full rewrite) that can boost freshness signals and potentially rankings.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">External Link Metrics and Benchmarking</h3>
            
            <p>Track external link metrics over time: average external links per page (benchmark: 5-15 for blog posts, 3-8 for commercial pages), broken link percentage (target: under 3%), percentage to authority domains (target: 40%+ from .edu, .gov, major publications), average age of linked resources (fresh content: links to resources published within 2 years). These metrics reveal content health. Degrading metrics (rising broken links, aging citations) signal need for content refresh campaigns.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Schaden external links mijn SEO?</h3>
              <p>Not inherently—external links to quality sources help SEO (signals well-researched content). But excessive external links (50+ per page), links to spam/low-quality sites, or dofollow links to untrusted sources can hurt. Strategic external linking (5-15 relevant, authoritative citations per page with appropriate nofollow attributes) benefits SEO and UX.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik naar concurrenten linken?</h3>
              <p>Generally avoid unless truly best resource for user. Linking to competitors sends traffic away—bad for business. Exception: comparison content, industry roundups, or citing competitor as example/source. If must link to competitor, ensure your content provides unique value they don't.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoe vaak moet ik external links checken?</h3>
              <p>Quarterly minimum for established content. Monthly for news/time-sensitive content. Immediately after major industry changes. Also check whenever republishing/updating old content—perfect opportunity to refresh citations. Set calendar reminder: first week of each quarter, bulk check all content.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Zijn external links in comments problematic?</h3>
              <p>Can be—comment spam often includes links to shady sites. Solution: automatically apply rel="ugc nofollow" to all comment links. Moderate comments before publishing—delete obvious spam. For legitimate comment links to quality resources, letting them through with ugc/nofollow is fine.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
