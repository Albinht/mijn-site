'use client';

import { useState } from 'react';
import Link from 'next/link';
import { QuestionMarkCircleIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function FAQCreator() {
  const [faqs, setFaqs] = useState([{ q: '', a: '' }]);
  const [schema, setSchema] = useState('');

  const generateSchema = () => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.filter(f => f.q && f.a).map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };
    setSchema(JSON.stringify(faqSchema, null, 2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <QuestionMarkCircleIcon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">FAQ Creator & Schema Generator</h1>
          <p className="text-xl text-gray-600">Creëer veelgestelde vragen met automatische FAQ schema markup voor rich snippets.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {faqs.map((faq, i) => (
            <div key={i} className="mb-6 p-4 border rounded-lg">
              <input value={faq.q} onChange={(e) => { const n = [...faqs]; n[i].q = e.target.value; setFaqs(n); }} placeholder="Vraag" className="w-full p-3 border rounded mb-3" />
              <textarea value={faq.a} onChange={(e) => { const n = [...faqs]; n[i].a = e.target.value; setFaqs(n); }} placeholder="Antwoord" className="w-full p-3 border rounded h-24" />
            </div>
          ))}
          <button onClick={() => setFaqs([...faqs, { q: '', a: '' }])} className="bg-teal-600 text-white px-4 py-2 rounded mr-2">+ Vraag Toevoegen</button>
          <button onClick={generateSchema} className="bg-cyan-600 text-white px-4 py-2 rounded">Genereer Schema</button>
        </div>

        {schema && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><CodeBracketIcon className="h-6 w-6" /> FAQ Schema Markup</h2>
            <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">{schema}</pre>
          </div>
        )}

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">FAQ Schema Generator: Rich Snippets voor Veelgestelde Vragen</h2>
          <div className="prose max-w-none space-y-4">
            <p>Een FAQ creator met schema markup generator helpt je structured data maken voor veelgestelde vragen. FAQ schema (FAQPage schema.org type) signals to Google dat je pagina Q&A content bevat, qualifying voor FAQ rich snippets in search results. Deze snippets tonen questions expandable in SERPs—massive visibility boost. Users zien je FAQ directly in Google, vaak resulterend in higher CTR. Deze tool auto-generates valid FAQ schema eliminating manual JSON-LD coding.</p>

            <p>Waarom FAQ rich snippets zo powerful zijn: they occupy extra SERP real estate. Regular result is 2-3 lines (title + description). FAQ snippet can be 10+ lines when expanded, pushing competitors down page. More visibility = more clicks. Plus FAQ snippets position you as authority—Google trusts you enough to show answers directly. Not every FAQ page qualifies for rich snippets but proper schema dramatically increases chances.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">FAQ Schema Requirements</h3>
            
            <p>Google has specific criteria. Each question must be distinct (no near-duplicates). Answers must be concise yet complete—50-300 words ideal. Questions should be actual user queries niet "What makes us different?" (that's marketing). Use question format: start with "What", "How", "Why", "When". Answers can include HTML formatting (bullets, links) within schema. This tool ensures proper structure—"@type": "FAQPage" wrapper, each Q&A as "Question" entity with "acceptedAnswer".</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Best Practices voor FAQ Content</h4>
            
            <p>Research actual user questions. Use Google's "People Also Ask" boxes, Answer the Public, forum questions, customer service emails. Write FAQs addressing real pain points niet generic softball questions. Quality over quantity—5 thorough FAQs better than 20 shallow ones. Update FAQs regularly as new questions emerge or answers change. FAQ pages rank well long-term because they match specific user queries directly.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Where to Place FAQ Sections</h4>
            
            <p>Dedicated /faq page works but FAQ sections embedded in relevant pages often perform better. Product page FAQ addressing product-specific questions. Service page FAQ about that service. Blog post FAQ answering common questions on topic. Each FAQ section can have own schema markup. Tool supports multiple independent FAQ schemas per site. Don't duplicate same FAQs across pages—each FAQ should be unique to its context.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Testing FAQ Schema Implementation</h3>
            
            <p>After implementing schema, test with Google Rich Results Test tool. Paste URL or code, verify "FAQPage" detected with no errors. Common errors: missing required fields, invalid JSON syntax, questions not formatted correctly. This generator outputs valid schema but always test. Then monitor Search Console: "Enhancements" section shows FAQ rich snippet eligibility. If eligible but not showing, could be competition (Google picks best result) or content quality issues.</p>

            <p>Combine met <Link href="/tools/rich-snippet-validator" className="text-blue-600 hover:underline">rich snippet validator</Link> en <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">question keywords</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">FAQ Creator Strategies voor Maximum SEO Impact</h2>
          <div className="prose max-w-none space-y-4">
            <p>Strategic FAQ creation targets question-based keywords—huge opportunity since voice search and featured snippets favor Q&A format. Use keyword research tools filtering for question keywords: "how to...", "what is...", "why does...". Build FAQs around these. Each Q&A targets specific long-tail keyword. Accumulation of targeted FAQs creates comprehensive topical coverage attracting diverse question-based searches.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">FAQ Schema vs HowTo Schema</h3>
            
            <p>Don't confuse FAQ schema with HowTo schema. FAQ is Q&A format—question followed by answer. HowTo is step-by-step instructions—"Step 1: Do this, Step 2: Do that". Use FAQ schema for: troubleshooting, explanations, definitions, comparisons. Use HowTo schema for: tutorials, recipes, assembly instructions. Some content can have both—tutorial page has HowTo schema for main content, FAQ section at bottom with FAQ schema answering common questions about tutorial.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">FAQ Content Formatting</h4>
            
            <p>Within FAQ answers, use HTML markup for readability: bullet lists for multiple points, bold for emphasis, links to relevant pages. Schema supports HTML in answers (encode properly). Readable answers encourage engagement—users expand FAQ in SERP, read answer, might still click through voor more details. Poorly formatted walls of text discourage engagement. Tool allows HTML input—format answers nicely before generating schema.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">International FAQ Schema</h4>
            
            <p>For multilingual sites, create language-specific FAQs with separate schema. Don't machine-translate FAQs—cultural differences mean different questions matter in different markets. Research local user questions, write FAQs accordingly. Each language version gets own FAQ schema with appropriate hreflang tags. Google shows relevant language FAQ snippets to users in that locale. More work but significantly better relevance and click-through.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Monitoring FAQ Performance</h3>
            
            <p>Track which FAQs get rich snippets. Search Console shows impression data per rich result type. If certain FAQs never trigger snippets, either: questions not searched frequently, competition too strong, or content quality insufficient. Iterate: update underperforming FAQs with better answers, try different question phrasings, target different questions. FAQ optimization is ongoing—quarterly reviews recommended.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Hoeveel FAQs moet ik minimaal hebben?</h3>
              <p>Minimum 3 voor FAQ schema geldigheid, maar 5-10 is optimal voor rich snippet qualification. Te weinig (1-2) ziet Google as insufficient Q&A page. Te veel (50+) dilutes focus—break into multiple targeted FAQ sections on different pages. Sweet spot: 6-8 high-quality, specific FAQs per page.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Kunnen FAQ rich snippets rankings beïnvloeden?</h3>
              <p>Indirect yes. Schema itself isn't ranking factor but consequences are: FAQ snippets increase CTR, higher CTR signals relevance to Google, potentially boosting rankings. Plus FAQ content targets question keywords, expanding keyword coverage. Good FAQs also reduce bounce rate (users find answers quickly), another positive signal. So while schema doesn't directly rank, well-optimized FAQ pages do.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Wat als mijn FAQs geen rich snippets krijgen?</h3>
              <p>Multiple reasons possible: schema errors (test in Rich Results Test), questions not searched enough (do keyword research), strong competition (optimize better than competitors), new implementation (give Google time to index). Check Search Console Enhancements—if "eligible" but not showing, it's competition. If "errors", fix schema. If "valid" but not eligible, content quality issue.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Can ik FAQs gebruiken voor product pages?</h3>
              <p>Absolutely—product FAQ sections are highly effective. Address common buying objections: shipping questions, return policy, sizing, compatibility, warranty. Use FAQ schema on product page. Google might show product FAQs in product search results. E-commerce benefit: FAQ answers reduce customer service load by preemptively answering questions, and help conversions by addressing concerns before purchase.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
