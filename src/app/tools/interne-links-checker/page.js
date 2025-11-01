'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LinkIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function InterneLinksChecker() {
  const [siteUrl, setSiteUrl] = useState('');
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <LinkIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Interne Links Checker</h1>
          <p className="text-xl text-gray-600">Analyseer internal linking structure. Orphan page detection en site architecture optimization.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <input value={siteUrl} onChange={(e) => setSiteUrl(e.target.value)} placeholder="https://example.com" className="w-full p-3 border rounded mb-4" />
          <button className="w-full bg-purple-600 text-white py-3 rounded">Analyseer Interne Links</button>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Interne Links: De Meest Ondergewaardeerde SEO Factor</h2>
          <div className="prose max-w-none space-y-4">
            <p>Internal linking is hoe je pages op je site met elkaar verbindt via hyperlinks. Een interne links checker analyseert deze link structure—hoeveel links each page heeft, welke pages most/least linked zijn, orphan pages (geen inbound internal links), en link distribution patterns. Strong internal linking architecture is cruciaal: helps Google discover en index content, distributes ranking power (link equity) across site, guides users to relevant pages, establishes topical relationships.</p>

            <p>Most websites have terrible internal linking—homepage well-linked, category pages decent, individual blog posts/products barely linked. This creates power concentration at top-level pages while deep content starves for link equity. Consequence: valuable content doesn't rank despite quality because it lacks internal link support. Regular internal link audits with checker tools identify these gaps. Strategic internal linking can 2-3x je organic traffic without creating single piece of new content—just better connecting existing pages.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Orphan Pages: Hidden Content Problem</h3>
            
            <p>Orphan pages have zero inbound internal links—reachable only via URL directly typed or external links. Google's crawler primarily finds pages by following internal links from known pages (like homepage). Orphan pages may never be crawled/indexed, essentially invisible to Google. Common causes: content published but not added to navigation/menus, old pages unlinked after redesign, forgotten blog posts. Internal link checker identifies orphans—fix by adding relevant internal links from related high-authority pages.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Deep Page Accessibility</h4>
            
            <p>Page depth is clicks from homepage. Depth 1: direct from homepage. Depth 2: two clicks away. Google prefers shallow site architecture—important content max 3 clicks from homepage. Deep pages (4+ clicks) crawled less frequently, indexed slower, rank lower. Internal link checker calculates depth distribution. If critical pages buried at depth 5+, fix by adding direct links from higher-level pages or improving breadcrumb/navigation structure. Flatten architecture for better crawling.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Link Equity Distribution</h4>
            
            <p>Pages with many inbound internal links receive more link equity, helping them rank. Homepage typically has most equity (everyone links to it). Strategic internal linking distributes that equity to priority pages. Identify your money pages (products, services, conversion pages)—ensure they're well-linked from throughout site. Link checker shows which pages have most inbound links—verify important pages on that list. If unimportant pages dominate, rebalance links toward priority pages.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Anchor Text Optimization in Internal Links</h3>
            
            <p>Internal link anchor text tells Google what target page about. Generic anchors ("click here", "read more") waste opportunity. Descriptive anchors ("WordPress SEO guide", "email marketing tips") pass relevance signals. Internal link analysis tools check anchor text distribution. Over-optimized exact match anchors (50+ internal links all with "buy shoes") looks spammy. Varied, natural anchors better—mix exact match, partial match, branded, generic. This checker flags anchor text patterns.</p>

            <p>Combine with <Link href="/tools/anchor-text-generator" className="text-blue-600 hover:underline">anchor text strategies</Link> and <Link href="/tools/sitemap-checker" className="text-blue-600 hover:underline">sitemap structure</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Internal Linking Architecture Best Practices</h2>
          <div className="prose max-w-none space-y-4">
            <p>Optimal internal linking follows hierarchical structure: homepage links to main categories, categories link to subcategories and individual items, items link back up hierarchy and across to related items. This pyramid structure ensures every page reachable within 3 clicks, distributes equity logically (more important pages get more links), and creates clear topical relationships. Checker tool visualizes this structure—identifies architecture problems like isolated page clusters or excessively deep pages.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Contextual Internal Links</h3>
            
            <p>Links within content body (contextual links) are most valuable—they're editorial, relevant, and Google weighs them heavily. Navigation/footer links are standard (expected) but contextual links are earned. Within blog posts, link to 3-5 related articles using descriptive anchor text. Product descriptions link to complementary products. Service pages link to relevant case studies. Contextual linking requires manual curation—automated linking often produces irrelevant suggestions. Quality contextual links significantly boost SEO.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Silo Structure en Topic Clusters</h4>
            
            <p>Silo architecture groups related content with internal links keeping equity within topic. Example: "Digital Marketing" silo contains all digital marketing content heavily interlinked, minimal links to "Web Development" silo. Keeps topical authority concentrated. Topic clusters are similar—pillar page as hub, cluster pages as spokes, all interconnected. Internal link checker validates silo integrity: ensures within-silo linking strong, cross-silo linking minimal and strategic. Proper silos establish topical authority per subject area.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Link Velocity en Natural Growth</h4>
            
            <p>Internal links should grow organically as site expands. Sudden massive internal linking changes (going from 10 links per page to 100) can trigger Google scrutiny. Natural pattern: new page publishes with 3-5 contextual internal links to existing related pages, those existing pages add 1-2 links back to new page over time. Link checker tracking over months shows growth patterns. Spiky abnormal growth warrants audit—ensure not link spamming or automated-linking-gone-wild.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Monitoring Internal Link Health</h3>
            
            <p>Quarterly internal link audits catch degradation. As site evolves, links break (pages deleted), link relevance changes (linked page content shifts), or link distribution becomes unbalanced (new sections under-linked). Checker provides benchmarks: average links per page, orphan count, deepest page depth. Track these metrics quarterly. Degradation in any metric (more orphans, deeper depths) signals architecture problems needing attention before they impact rankings.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoeveel interne links moet een pagina hebben?</h3>
              <p>No hard limit but guidelines: min 2-3 (connect to site), max 100 (beyond that looks spammy). Average: 5-15 contextual links plus navigation/footer links. More important: links must be relevant. Ten highly relevant links better than 50 random links. Quality over quantity always.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik naar alle pagina's linken vanaf homepage?</h3>
              <p>No—homepage should link to top-level categories and key pages only (10-20 links max). Linking to all pages (100s) dilutes equity and overwhelms users. Use hierarchical structure: homepage→categories→items. Deep pages get equity through chain, not direct homepage links. Exception: priority pages (bestsellers, key services) can get direct homepage links.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Zijn footer links waardevol voor SEO?</h3>
              <p>Less valuable than contextual content links, but still contribute. Footer links help with site-wide navigation and equity distribution. Don't overdo it—keep footer concise (10-15 links). Don't stuff footer with keyword-rich anchors to manipulate rankings—Google discounts obvious footer optimization. Use footer for important utility pages: contact, privacy, sitemap.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Wat zijn related posts plugins goed?</h3>
              <p>Automated "related posts" can be helpful but quality varies. Good plugins use actual relevance algorithms (topic similarity, category matching). Bad plugins just show recent or random posts. Manually curated internal links always better—you know true relevance. If using plugin, verify suggestions make sense. Irrelevant auto-links hurt more than help—users click, find content not actually related, bounce.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
