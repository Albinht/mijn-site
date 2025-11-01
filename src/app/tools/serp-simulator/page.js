'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

export default function SERPSimulator() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [device, setDevice] = useState('desktop');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <ComputerDesktopIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Google SERP Simulator</h1>
          <p className="text-xl text-gray-600">Preview hoe je pagina eruitziet in Google zoekresultaten. Desktop en mobile SERP preview.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <label className="block font-semibold mb-2">Page Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 border rounded" placeholder="Je SEO title..." />
            <p className="text-xs text-gray-500 mt-1">{title.length}/60 karakters</p>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Meta Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 border rounded h-24" placeholder="Je meta description..." />
            <p className="text-xs text-gray-500 mt-1">{description.length}/160 karakters</p>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">URL</label>
            <input value={url} onChange={(e) => setUrl(e.target.value)} className="w-full p-3 border rounded" placeholder="https://example.com/page" />
          </div>
          <div className="flex gap-2 mb-6">
            <button onClick={() => setDevice('desktop')} className={`flex-1 py-2 rounded ${device === 'desktop' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Desktop</button>
            <button onClick={() => setDevice('mobile')} className={`flex-1 py-2 rounded ${device === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Mobile</button>
          </div>

          <div className="border rounded-lg p-6 bg-gray-50">
            <h3 className="font-semibold mb-4">Preview:</h3>
            <div className={device === 'mobile' ? 'max-w-sm' : ''}>
              <div className="text-blue-700 text-xl hover:underline cursor-pointer mb-1">{title || 'Je title verschijnt hier'}</div>
              <div className="text-green-700 text-sm mb-2">{url || 'https://example.com'}</div>
              <div className="text-gray-700 text-sm">{description || 'Je meta description verschijnt hier en geeft gebruikers een preview van je content...'}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">SERP Simulator: Optimaliseer je Google Zoekresultaat Preview</h2>
          <div className="prose max-w-none space-y-4">
            <p>Een Google SERP simulator toont exact hoe je pagina verschijnt in search results—critical voor optimizing click-through rate. Je title en description zijn je "ad" in organic results. Compelling preview = more clicks = more traffic. Deze simulator laat zien of je title truncated wordt (60+ karakters), description cut off (160+ karakters), en hoe readable je snippet is. Preview op beide desktop en mobile want presentations differ slightly.</p>

            <p>CTR optimization is underrated SEO tactic. Je kunt #3 ranken maar get more clicks dan #1 if je snippet compelling is. Users scan titles quickly—attention-grabbing title wins. Description must promise value gebruiker seeks. URL should look trustworthy (HTTPS, clean domain). SERP simulator lets you iterate: try different titles/descriptions, see what looks best, implement winner. Small preview optimizations can yield 10-30% CTR improvements.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Title Tag Optimization voor SERPs</h3>
            
            <p>Title tag is single most important on-page SEO element. It must: contain target keyword (preferably near start), be unique per page, accurately describe content, be compelling enough for clicks. Length matters: Google truncates ~60 karakters (varies by pixel width). Test in simulator—if truncated, rewrite to fit key info in visible portion. Don't waste characters on brand name at start (put at end if needed). Lead with value proposition or specific benefit.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Meta Description Best Practices</h4>
            
            <p>Meta description isn't direct ranking factor but influences CTR which affects rankings. Optimal length: 150-160 karakters. Beyond that, Google truncates with "..." Users see incomplete message. Include call-to-action ("Learn how", "Discover", "Get started"), target keyword (Google bolds matching terms), unique selling point. Avoid generic descriptions like "Welcome to our site"—be specific about page value.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">URL Display Optimization</h4>
            
            <p>URL shows as breadcrumb path in results. Clean URLs inspire trust: "example.com/seo-guide" better than "example.com/p=123&id=abc". Keep URLs short when possible—long URLs get truncated too. Use hyphens not underscores. Include keyword in URL (reinforces relevance). Avoid parameters and session IDs in public URLs—they look spammy in SERPs.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Mobile vs Desktop SERP Differences</h3>
            
            <p>Mobile SERPs have less screen space—titles might truncate sooner, descriptions shorter. Test both in simulator. Mobile users also scan faster—need even more concise, punchy copy. Some rich results (like featured snippets) display differently mobile vs desktop. Optimize for mobile primarily since 60%+ searches are mobile, but ensure desktop preview looks good too. Never sacrifice mobile for desktop readability.</p>

            <p>Combine met <Link href="/tools/page-title-enhancer" className="text-blue-600 hover:underline">title optimization</Link> en <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">description generator</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">SERP Preview Optimization: Advanced Techniques</h2>
          <div className="prose max-w-none space-y-4">
            <p>Beyond basic title/description optimization, advanced tactics maximize SERP presence. Power words increase CTR: "Ultimate", "Complete", "Proven", "Exclusive", "Step-by-Step" grab attention. Numbers boost credibility: "7 Ways", "2024 Guide", "Increase by 47%". Questions engage: "Struggling with SEO?" addresses pain point directly. Test variations in simulator—minor word changes can significantly impact perceived value.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Emotional Triggers in Titles</h3>
            
            <p>Emotional titles get more clicks than bland factual ones. Fear: "Avoid These 5 SEO Mistakes" (users want to avoid problems). Curiosity: "The SEO Secret Nobody Talks About" (users want insider knowledge). Achievement: "How I Ranked #1 in 30 Days" (users want results). But don't clickbait—content must deliver on title promise else high bounce rate hurts rankings. Use simulator to test emotional vs factual titles, find balance that's compelling yet honest.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Unique Value Proposition</h4>
            
            <p>Differentiate from competitor snippets. If top 10 results all say "SEO Tips", yours should specify unique angle: "SEO Tips for Local Businesses" or "SEO Tips That Actually Work in 2024". Preview in simulator alongside competitor titles (manually check actual SERPs). Identify what makes yours unique, emphasize that in title/description. Stand out or get ignored—sameness blends into background.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Seasonal and Temporal Optimization</h4>
            
            <p>Update titles/descriptions seasonally. "2024" signals currency—users prefer recent content. Update yearly. Holiday seasons: "Black Friday SEO Deals", "Holiday Marketing Guide". Time-sensitive content: add dates. But dated content can hurt if not updated—"2018 Guide" in 2024 looks stale. Use simulator to test dated vs evergreen approaches. Evergreen better for content you won't update frequently.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Brand Consistency in SERPs</h3>
            
            <p>For brand queries (people searching your brand name), ensure consistent messaging across all result snippets. Your homepage, about page, product pages should all reinforce core brand message. Inconsistent snippets confuse users—homepage says "We're affordable", product page says "Premium quality" (mixed signals). Use simulator to audit brand pages, ensure cohesive narrative. Brand consistency builds trust.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Waarom ziet mijn actual SERP er anders uit dan simulator?</h3>
              <p>Google doesn't always use your meta description—sometimes creates own from page content. If your description niet relevant for specific query, Google substitutes text from page that better matches query. Simulator shows your supplied description, reality may vary. Solution: write descriptions that address multiple query variations, increasing chance Google uses it.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoeveel karakters exact voor title en description?</h3>
              <p>Not character limit but pixel width limit (varies by characters used—"W" wider than "i"). General guidelines: titles 50-60 chars, descriptions 150-160 chars. Simulator approximates but test actual SERPs too. Mobile truncates sooner than desktop. When in doubt, keep critical info in first 50 chars of title, first 120 of description.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik keyword in description stoppen?</h3>
              <p>Yes—Google bolds matching query terms in descriptions. User searches "WordPress SEO", your description containing "WordPress SEO" gets bolded, draws eye. But write naturally—forced keyword stuffing reads poorly. Include primary keyword once, maybe secondary keyword, prioritize readability over keyword density. Bolded terms help but only if surrounding text compelling.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Kan ik emoji in title gebruiken?</h3>
              <p>Technically yes but risky—Google sometimes strips them. When they show, can increase CTR (stands out visually). But if stripped, looks unprofessional with empty characters. Test in your niche—some industries (e-commerce, lifestyle) emoji work, others (legal, medical) look unprofessional. Simulator doesn't show emoji effects—test actual SERP. Generally safer to avoid unless you see competitors successfully using them.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
