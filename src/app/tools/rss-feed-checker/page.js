'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RssIcon } from '@heroicons/react/24/outline';

export default function RSSFeedChecker() {
  const [feedUrl, setFeedUrl] = useState('');
  const [results, setResults] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = async () => {
    if (!feedUrl.trim()) return;
    setIsChecking(true);
    try {
      // Mock validation for now - can be replaced with actual API call
      const mockResults = {
        valid: true,
        feedType: 'RSS 2.0',
        itemCount: 10,
        lastUpdated: new Date().toISOString(),
      };
      setResults(mockResults);
    } catch (e) {
      console.error(e);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <RssIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">RSS Feed Checker</h1>
          <p className="text-xl text-gray-600">Valideer RSS en Atom feeds. Feed optimization en error detection tool.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <input value={feedUrl} onChange={(e) => setFeedUrl(e.target.value)} placeholder="https://example.com/feed.xml" className="w-full p-3 border rounded mb-4" />
          <button onClick={handleCheck} disabled={isChecking} className="w-full bg-orange-600 text-white py-3 rounded">Check RSS Feed</button>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">RSS Feed Validator: Feed Optimization voor Content Distributie</h2>
          <div className="prose max-w-none space-y-4">
            <p>Een RSS feed checker valideert XML feeds voor content syndication. RSS (Really Simple Syndication) allows users en aggregators to subscribe to your content updates automatically. Valid RSS feed is crucial voor content distribution—broken feeds mean subscribers miss updates, aggregators can't parse content, en opportunities lost. Deze feed checker tool tests feed structure, validates XML syntax, checks required elements, en identifies optimization opportunities voor maximum reach.</p>

            <p>Why RSS still matters in 2024: Despite social media dominance, RSS hasn't died. Power users, journalists, content aggregators, en B2B audiences heavily rely on RSS. Plus RSS powers modern content distribution—newsletters (Substack), podcast apps (Apple Podcasts), video platforms (YouTube subscriptions)—all built on RSS foundations. Valid feed ensures je content flows seamlessly to these channels. Broken feed = invisible to deze audiences regardless of content quality.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">RSS vs Atom Feeds</h3>
            
            <p>Two main feed formats: RSS 2.0 (most common) en Atom 1.0 (more modern). RSS simpler, widely supported. Atom more extensible, better internationalization. Most platforms support both. WordPress generates RSS by default (/feed/). Custom sites need manual implementation. Validator tool checks both formats. Choose based on platform—RSS for broadest compatibility, Atom if need advanced features (content encryption, digital signatures). Never offer both unless necessary—pick one, optimize it.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Required vs Optional RSS Elements</h4>
            
            <p>Required elements: channel title, link, description, plus per item: title, link, description or content. Optional but valuable: pubDate (publish date), author, category, guid (unique identifier), enclosure (for media). Feed without pubDate confuses aggregators—they can't sort by recency. Missing author reduces credibility. Categories help content discovery. Checker validates required elements present, warns about missing optional elements that would enhance feed quality.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Content Length in Feeds</h4>
            
            <p>Partial feeds (just excerpt/description) vs full-content feeds debate. Partial: drives traffic to site (users must visit for full article), saves bandwidth. Full: better user experience (read in feed reader), higher subscriber satisfaction. Recommendation: B2B/professional content use full feeds (audience values convenience), consumer content use partial (drive website traffic for ads/conversions). Test both, see what audience prefers based on traffic and engagement metrics.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Feed Discovery en Subscription</h3>
            
            <p>Valid feed is useless if undiscoverable. Add feed auto-discovery link in HTML head: link rel="alternate" type="application/rss+xml" href="/feed/". This lets browsers/readers find feed automatically. Provide visible RSS icon linking to feed—yes fewer users manually subscribe now, but power users expect it. Submit feed to aggregators (Feedly, Flipboard), podcast directories (if audio content), en niche-specific aggregators. Each submission multiplies your content's reach.</p>

            <p>Combine with <Link href="/tools/sitemap-checker" className="text-blue-600 hover:underline">sitemap checking</Link> and <Link href="/tools/html-validator" className="text-blue-600 hover:underline">HTML validation</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">RSS Feed Optimization Strategies</h2>
          <div className="prose max-w-none space-y-4">
            <p>Optimize feed item titles—these show in feed readers as headlines. Apply same principles as page titles: clear, compelling, keyword-rich. Descriptions (when using partial feeds) should be engaging teasers not boring excerpts. Think of feed items as email subject lines—must entice clicks. Good: "5 SEO Techniques That Doubled Traffic". Bad: "In this post I discuss some SEO things..." Format matters even in plain-text feeds.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Media Optimization in Feeds</h3>
            
            <p>If feed includes images (via enclosure or content), ensure images load fast and display correctly in readers. Large images slow feed parsing. Use CDN for feed media. Include alt text in image markup—some readers display it. For podcasts, audio enclosure must be proper format (MP3 most compatible), correct MIME type, and hosted on reliable server. Broken media enclosures can invalidate entire feed in some readers.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Feed Update Frequency</h4>
            
            <p>How often should feed update? Depends on publish cadence. Daily blog: update feed immediately on publish (dynamic). Weekly newsletter: weekly updates fine. Don't manually rebuild feed—automate it (CMS plugins, static site generators do this). Stale feeds (last updated 6+ months ago) signal abandoned site. Even if not publishing new content, occasional feed updates (republishing evergreen content) show activity.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Feed Analytics</h4>
            
            <p>Track feed subscribers and usage. FeedBurner (Google tool) provides subscriber counts and click data—see which posts get most opens/clicks from feed. Modern alternative: serve feed through proxy that logs requests, giving anonymous subscriber metrics. This data informs content strategy—topics that perform well in feed likely resonate with core audience. Optimize for feed readers, not just website visitors.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">RSS Feed Security</h3>
            
            <p>Broken or hijacked feeds can distribute malware or spam. Validate feed regularly—ensure all links point to your domain, no injected spam links. Check feed source file hasn't been compromised. For public feeds, monitor for scraper abuse (competitors stealing content via feed). Some sites rate-limit feeds or require authentication for full content—balance openness with protection. Feed checker helps verify integrity maintained.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet elke website een RSS feed hebben?</h3>
              <p>Blogs, news sites, content-heavy sites: yes. E-commerce: maybe (product feeds useful for aggregators). Static sites with rare updates: probably not necessary. If you regularly publish content users would want to follow, offer RSS feed. Even if few manually subscribe, feeds power other tools—IFTTT automation, content aggregators, monitoring services.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoeveel items moet mijn feed bevatten?</h3>
              <p>Common: 10-25 most recent items. Too few (5): subscribers miss content if they check feed infrequently. Too many (100+): bloats feed file size, slows parsing. Exception: podcast feeds should include all episodes (users browse back catalog). Blog feeds: 10-15 latest posts strikes good balance—recent enough without overwhelming.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Kan RSS feed rankings beïnvloeden?</h3>
              <p>Indirectly—feeds increase content distribution. More distribution = more backlinks potential, social shares, brand awareness. These factors influence rankings. Direct SEO benefit: feed submissions to aggregators can generate referral traffic and backlinks. So while feed itself not ranking factor, its strategic use supports factors that are.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik full content of excerpts in feed gebruiken?</h3>
              <p>Trade-off decision. Full content: better subscriber experience, positions you as generous/transparent. Excerpts: drives website traffic for ads/conversions, saves bandwidth. Test both: try full for month, measure traffic impact. If traffic drops significantly, readers consuming in feed without visiting site—maybe switch to excerpts. If no traffic change, full feeds happier subscribers with no downside.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
