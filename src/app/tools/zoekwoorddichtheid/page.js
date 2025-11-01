'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HashtagIcon } from '@heroicons/react/24/outline';

export default function Zoekwoorddichtheid() {
  const [text, setText] = useState('');
  const [targetKeyword, setTargetKeyword] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const analyze = () => {
    const words = text.toLowerCase().split(/\s+/);
    const totalWords = words.length;
    const keywordCount = words.filter(w => w.includes(targetKeyword.toLowerCase())).length;
    const density = ((keywordCount / totalWords) * 100).toFixed(2);
    
    const wordFreq = {};
    words.forEach(w => { if (w.length > 3) wordFreq[w] = (wordFreq[w] || 0) + 1; });
    const topWords = Object.entries(wordFreq).sort((a,b) => b[1] - a[1]).slice(0, 10);

    setAnalysis({ totalWords, keywordCount, density, topWords });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <HashtagIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Zoekwoorddichtheid Checker</h1>
          <p className="text-xl text-gray-600">Bereken keyword density en check voor over-optimization. Keyword frequency analyzer.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <input value={targetKeyword} onChange={(e) => setTargetKeyword(e.target.value)} placeholder="Target keyword" className="w-full p-3 border rounded mb-4" />
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Plak je content hier..." className="w-full h-64 p-4 border rounded mb-4" />
          <button onClick={analyze} className="w-full bg-yellow-600 text-white py-3 rounded">Analyseer Dichtheid</button>
        </div>

        {analysis && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-yellow-50 p-6 rounded text-center">
                <div className="text-3xl font-bold text-yellow-600">{analysis.totalWords}</div>
                <div className="text-sm text-gray-600">Totaal Woorden</div>
              </div>
              <div className="bg-amber-50 p-6 rounded text-center">
                <div className="text-3xl font-bold text-amber-600">{analysis.keywordCount}</div>
                <div className="text-sm text-gray-600">Keyword Mentions</div>
              </div>
              <div className="bg-orange-50 p-6 rounded text-center">
                <div className="text-3xl font-bold text-orange-600">{analysis.density}%</div>
                <div className="text-sm text-gray-600">Keyword Density</div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-3">Top 10 Meest Gebruikte Woorden:</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {analysis.topWords.map(([word, count], i) => (
                  <div key={i} className="bg-gray-100 p-2 rounded text-sm">
                    <div className="font-semibold">{word}</div>
                    <div className="text-xs text-gray-600">{count}x</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Keyword Density: Optimale Balance voor SEO</h2>
          <div className="prose max-w-none space-y-4">
            <p>Zoekwoorddichtheid (keyword density) is percentage van totale woorden dat je target keyword is. Als artikel 1000 woorden heeft en "SEO" 15 keer voorkomt, density is 1.5%. Deze metric was belangrijker in old-school SEO (2000s) toen keyword stuffing worked. Modern Google is smarter—focuses on semantic relevance over exact keyword frequency. But density still matters: too low (0.3%) means insufficient keyword presence for ranking, too high (5%+) triggers over-optimization penalties. Sweet spot: 1-2% voor primary keyword.</p>

            <p>Keyword density checker tool helpt find balance. Calculate density for je target keywords—primary keyword should be 1-2%, secondary keywords 0.5-1%. But don't obsess—natural writing trumps hitting exact percentages. If naturally mentioning keyword produces 0.8% density, dat's fine. Forcing it to 2% results in awkward, repetitive content. Google rewards natural, valuable content over perfectly optimized but robotic text. Use density as guide, not strict rule.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Keyword Stuffing Detection</h3>
            
            <p>Keyword stuffing—excessive keyword repetition—is black-hat SEO. Google penalizes it heavily. Signs: keyword density above 5%, unnatural phrasing to insert keywords, keyword list in footer/hidden text, same keyword repeated in every paragraph. This checker identifies suspicious patterns. If primary keyword density hits 4-5%, audit content: are mentions natural or forced? Read aloud—does it sound robotic? If yes, reduce keyword mentions, use synonyms and related terms instead.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">LSI Keywords en Semantic Relevance</h4>
            
            <p>LSI (Latent Semantic Indexing) keywords zijn terms related to your main keyword. For "SEO", LSI keywords: "rankings", "Google", "backlinks", "optimization", "organic traffic". Modern keyword density analysis includes LSI—not just exact keyword frequency but semantic field coverage. Top words list in checker shows your semantic terms. Healthy content has diverse vocabulary—primary keyword moderate density (1-2%) plus many related terms (0.5-1% each). This semantic richness signals comprehensiveness to Google.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Stop Words en Keyword Phrases</h4>
            
            <p>For phrase keywords like "digital marketing agency", calculate density of full phrase. If phrase appears 10 times in 1000 words, that's 1% (10/1000, not 30/1000 for three-word phrase). Also check constituent words: "digital" alone, "marketing" alone. This reveals if you're naturally discussing topic (all words well-distributed) or just repeating exact phrase (stuffing). Good content has healthy frequency of both full phrase and individual words in natural contexts.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Competitor Keyword Density Analysis</h3>
            
            <p>Analyze top-ranking competitor content. Extract their text, run through density checker, see their keyword usage patterns. If top 3 results all have 1.5-2% density for target keyword, that's data point suggesting optimal range for that query. But don't blindly copy—competitor might rank despite over-optimization (strong backlinks compensate) not because of it. Use as guide, apply judgment. Focus on content quality first, density optimization second.</p>

            <p>Use with <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword research</Link> and <Link href="/tools/tekens-tellen" className="text-blue-600 hover:underline">character counting</Link>.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Advanced Keyword Density Strategies</h2>
          <div className="prose max-w-none space-y-4">
            <p>Beyond simple density calculation, advanced analysis considers keyword placement—mentions in H1, H2, first 100 words, last 100 words weight more heavily. Calculator showing 1.5% density but all mentions buried mid-article is weaker than 1.5% with strategic placement (title, headings, intro, conclusion). Ideal distribution: keyword in H1, 1-2 H2s, first paragraph, conclusion, scattered naturally throughout body. Checker tools showing placement distribution provide deeper optimization insights.</p>

            <h3 className="text-xl font-bold mt-6 mb-4">Keyword Prominence vs Density</h3>
            
            <p>Prominence is where keyword appears (early = higher prominence). Density is how often. Both matter but prominence arguably more important. Keyword appearing 20 times (2% density) but never in first 300 words ranks weaker than appearing 10 times (1% density) with 3 mentions in first 100 words. Front-load important keywords—Google's algorithms give more weight to early content. Doesn't mean stuff opening paragraph; means work keyword naturally into intro when setting context.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Multi-Keyword Optimization</h4>
            
            <p>Rarely optimize for just one keyword. Typical page targets 3-5 keywords: one primary (1-2% density), 2-3 secondary (0.5-1% each), several long-tail variants (0.2-0.5% each). Run density check for each. Ensure no individual keyword over-optimized. Balanced multi-keyword approach captures more search variations without triggering stuffing penalties. Strategic content plans keyword density targets before writing, then validates with checker post-writing.</p>

            <h4 className="text-lg font-semibold mt-5 mb-3">Content Length Impact on Density</h4>
            
            <p>Longer content naturally allows lower densities while maintaining absolute keyword frequency. 1% density in 500-word article = 5 mentions. 1% in 2000-word article = 20 mentions. The 2000-word piece gives more semantic context around those 20 mentions—stronger relevance signal. Don't let density drive length—write comprehensively, then calculate density. If too low, add mentions in strategic places. If too high, expand content with related topics to dilute density naturally.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Wat is optimale keyword density in 2024?</h3>
              <p>1-2% for primary keyword remains solid guideline. But focus less on exact percentage, more on natural usage. Google's algorithms are sophisticated—they detect forced keyword insertion. Write naturally, then check density. If 0.8-2.5%, you're probably fine. Below 0.5% or above 3%, review for adjustment.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Moet ik synoniemen meetellen in density?</h3>
              <p>For strict keyword density: no, only exact matches count. But semantic density considers synonyms and related terms—gives fuller picture. Example: "automobile" content using "car", "vehicle", "auto" has low exact density but high semantic density. Modern SEO cares more about semantic than exact. Vary terminology naturally—it reads better and covers more search variations.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2">Kunnen hoge densities ooit goed zijn?</h3>
              <p>For highly technical content where terminology repetition unavoidable, higher density acceptable. Medical papers about "diabetes" naturally mention "diabetes" frequently—can hit 3-4% legitimately. But if you're hitting 5%+ on non-technical content, that's stuffing. Context matters—judge naturalness over strict numbers.</p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">Helpt keyword density checker met rankings?</h3>
              <p>Indirectly—it prevents over/under-optimization. But keyword density alone doesn't determine rankings. Content quality, backlinks, user signals, technical SEO all matter more. Use density checker as one tool in optimization toolkit, not sole focus. Perfect density with poor content doesn't rank. Good content with suboptimal density often still ranks well.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
