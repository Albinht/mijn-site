'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PhotoIcon } from '@heroicons/react/24/outline';

export default function BulkAltChecker() {
  const [urls, setUrls] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <PhotoIcon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Bulk Alt Checker</h1>
          <p className="text-xl text-gray-600">Check alt tags bulk voor image SEO. Missing alt detection tool.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <textarea value={urls} onChange={(e) => setUrls(e.target.value)} placeholder="URLs to check" className="w-full h-48 p-4 border rounded mb-4" />
          <button className="w-full bg-pink-600 text-white py-3 rounded">Check Alt Tags</button>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Alt Tags: Image SEO Essentials</h2>
          <div className="prose max-w-none space-y-4">
            <p>Alt attributes (alt tags) describe images voor screen readers and search engines. Missing alt tags hurt accessibility (blind users can't understand images) and SEO (Google can't "see" images without text description). This bulk alt checker scans multiple pages simultaneously, identifying images missing alt tags, evaluating alt quality, and flagging optimization opportunities. For sites with hundreds/thousands of images, bulk checking is only practical audit method.</p>

            <p>Image SEO is underutilized—most sites ignore it despite significant traffic potential. Google Images drives 20-30% of search traffic for visual niches (fashion, recipes, design). Proper alt tags are foundation of image SEO: they describe image content, include relevant keywords naturally, and provide context. Sites with comprehensive alt tags rank images higher, capture image search traffic, and provide better UX. Bulk alt auditing ensures no images orphaned without descriptions.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Writing Quality Alt Text</h3>
            
            <p>Good alt text describes image specifically and concisely. Bad: "image123.jpg" or "photo". Better: "red Nike running shoes". Best: "Nike Air Zoom Pegasus 40 red running shoes on white background". Include relevant keywords naturally but don't stuff. Alt isn't invisible text field for keywords—it's functional description. Screen reader users hear every alt tag read aloud; make them meaningful. Length: 10-15 words optimal, max 125 characters before truncation risks.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Decorative vs Informative Images</h4>
            <p>Not all images need descriptive alt. Decorative images (design elements, spacers, purely aesthetic) should have empty alt (alt="") not missing alt. This tells screen readers to skip image—improves accessibility. Bulk checker distinguishes: missing alt (bad) vs empty alt (acceptable for decorative). Informative images (content, products, infographics) need descriptive alt. Check your results: are empty alts truly decorative or should they be descriptive?</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Product Image Alt Optimization</h4>
            <p>E-commerce sites with thousands product images need systematic alt strategy. Template approach: "[Brand] [Product Name] [Key Feature] [Color/Variant]". Example: "Apple iPhone 15 Pro smartphone titanium blue". Consistency aids bulk management. Avoid generic: "product image" on 500 products helps nobody. Include product attributes searched: color, size, material. Product images often rank in Google Images bringing qualified traffic—descriptive alts essential.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Alt Tags vs Image File Names</h3>
            
            <p>Both matter för image SEO. File name: nike-running-shoes-red.jpg (descriptive, keyword-rich, hyphens). Alt tag: "Nike Air Zoom running shoes in red for marathon training". File name indexed, alt tag displayed. Use both strategically—keywords in filename, descriptive context in alt. Checker validates alt presence; separately audit file names. Sites with IMG_1234.jpg file names miss SEO opportunity even with good alt tags.</p>

            <p>Combine with <Link href="/tools/html-validator" className="text-blue-600 hover:underline">HTML validation</Link> and <Link href="/tools/rich-snippet-validator" className="text-blue-600 hover:underline">schema markup</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Bulk Alt Tag Audit Workflow</h2>
          <div className="prose max-w-none space-y-4">
            <p>Step 1: Crawl site to inventory all images. Tools like Screaming Frog extract every image URL + current alt. Export to CSV. Step 2: Run through bulk alt checker for validation. Identifies: completely missing alts, empty alts, duplicated alts (same alt on multiple images), keyword-stuffed alts, too-long alts. Step 3: Prioritize fixes—homepage images first, then high-traffic pages, then deep pages. Step 4: Implement fixes in CMS. Step 5: Recheck to verify. Quarterly repeat for new images.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Common Alt Tag Mistakes</h3>
            
            <p>Mistake 1: Same alt for all images—"company logo" on every image is useless. Each image needs unique descriptive alt. Mistake 2: Keyword stuffing—alt="buy shoes buy running shoes best shoes cheap shoes" is spam. Mistake 3: Too verbose—alt="This is a photograph showing a pair of red running shoes manufactured by Nike in size 10 sitting on a white background table"—way too long. Mistake 4: Starting with "image of" or "picture of"—redundant (obviously an image). Checker flags these patterns.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Alt Tags for Complex Images</h4>
            <p>Charts, diagrams, infographics need longer alt text describing data shown. For very complex images, use alt for summary plus longdesc attribute or surrounding text for details. Example: graph showing "Annual revenue growth 2020-2024" as alt, caption below details specific numbers. Don't try cramming all graph data into alt—summarize visually, provide details in accessible format (table, text).</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">CMS Alt Tag Management</h4>
            <p>WordPress, Shopify, etc. have alt fields in media uploader. Fill them during upload, not retroactively. Bulk checker catches historical images uploaded without alts. For bulk fixing: export image list, generate alt text (manually or AI-assisted), bulk import back to CMS. Some platforms have bulk edit features—use them. Don't leave alts empty thinking "I'll add later"—later never comes. Alt on upload = best practice.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Image SEO Beyond Alt Tags</h3>
            
            <p>Alt tags are foundation but complete image SEO includes: descriptive file names, image sitemaps (for Google Images indexing), compression (fast load), responsive sizing (srcset), lazy loading (performance), structured data (Product, Article images). Bulk alt checking is step one. Follow with: file name audit, sitemap submission, compression audit. Multi-faceted approach maximizes image SEO value.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet elk image een alt tag hebben?</h3>
              <p>Yes, every image needs alt attribute. Informative images: descriptive alt text. Decorative images: empty alt (alt=""). Never omit alt entirely—that's accessibility violation and missed SEO. Bulk checker flags completely missing alts as high priority—fix these first.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Kunnen alt tags rankings verbeteren?</h3>
              <p>For image search: absolutely. Descriptive alts help images rank in Google Images. For web search: minor direct impact but contributes to overall page relevance. If page about "SEO tips", images with "SEO" in alts reinforce topical relevance. Plus accessibility improvements (from good alts) enhance UX metrics.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoeveel keywords in alt tag?</h3>
              <p>One primary keyword naturally integrated, maximum. Alt="best running shoes for marathon" = fine. Alt="running shoes best shoes marathon shoes athletic shoes buy shoes" = stuffing. Focus on accurate description that happens to include keyword, not keyword optimization disguised as description.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Wat als ik 1000s images moet updaten?</h3>
              <p>Prioritize: homepage images first (highest visibility), product images (commercial value), blog featured images (SEO value). Deep legacy images lower priority. Use AI tools to generate alt suggestions (describe image with AI, review/edit, bulk apply). Don't try perfect every alt—focus on important images first. 80% coverage better than 100% perfection delayed indefinitely.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
