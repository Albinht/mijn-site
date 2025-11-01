'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DocumentMinusIcon, SparklesIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

const SUMMARY_LENGTHS = {
  short: { name: 'Kort (50-80 woorden)', description: 'Perfect voor snippets' },
  medium: { name: 'Gemiddeld (100-150 woorden)', description: 'Meta descriptions, previews' },
  long: { name: 'Lang (200-300 woorden)', description: 'Executive summaries' },
};

export default function ContentSummarizer() {
  const [text, setText] = useState('');
  const [summaryLength, setSummaryLength] = useState('medium');
  const [summary, setSummary] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const inputWordCount = text.trim().split(/\s+/).filter(w => w).length;
  const summaryWordCount = summary.trim().split(/\s+/).filter(w => w).length;

  const handleSummarize = async () => {
    if (!text.trim()) {
      setError('Voer tekst in om samen te vatten');
      return;
    }

    if (inputWordCount < 200) {
      setError('Voer minimaal 200 woorden in voor een goede samenvatting');
      return;
    }

    setIsGenerating(true);
    setError('');
    setSummary('');

    try {
      const response = await fetch('/api/tools/content-summarizer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, length: summaryLength }),
      });

      const data = await response.json();
      if (data.success) {
        setSummary(data.summary);
      } else {
        setError(data.error || 'Kon samenvatting niet genereren');
      }
    } catch (error) {
      setError('Er ging iets fout. Probeer het later opnieuw.');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <DocumentMinusIcon className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Content Summarizer Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vat lange teksten automatisch samen met AI. Perfect voor meta descriptions, snippets, previews en executive summaries.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Samenvatting Lengte:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {Object.entries(SUMMARY_LENGTHS).map(([key, length]) => (
                <button
                  key={key}
                  onClick={() => setSummaryLength(key)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    summaryLength === key
                      ? 'border-amber-600 bg-amber-50 text-amber-700'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="font-semibold text-sm mb-1">{length.name}</div>
                  <div className="text-xs text-gray-500">{length.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Lange Tekst (Invoer):
              </label>
              <span className="text-sm text-gray-500">{inputWordCount} woorden</span>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Plak hier je lange tekst (artikel, blog post, rapport, etc.) om samen te vatten..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
            />
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleSummarize}
              disabled={isGenerating || !text.trim()}
              className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold transition-colors"
            >
              {isGenerating ? (
                <>
                  <SparklesIcon className="h-5 w-5 animate-pulse" />
                  Samenvatten...
                </>
              ) : (
                <>
                  <DocumentMinusIcon className="h-5 w-5" />
                  Vat Samen
                </>
              )}
            </button>
            <button
              onClick={() => { setText(''); setSummary(''); setError(''); }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Wissen
            </button>
          </div>
        </div>

        {summary && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Samenvatting</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {summaryWordCount} woorden (van {inputWordCount} → {Math.round((1 - summaryWordCount/inputWordCount) * 100)}% korter)
                </p>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-5 w-5" />
                    Gekopieerd!
                  </>
                ) : (
                  <>
                    <ClipboardIcon className="h-5 w-5" />
                    Kopieer
                  </>
                )}
              </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-800 leading-relaxed">
                {summary}
              </p>
            </div>
          </div>
        )}

        {/* SEO Content Section 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tekst Samenvatten: Content Summarization voor SEO</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Een content summarizer vat lange teksten automatisch samen tot beknopte versies zonder essentiële informatie te verliezen. Deze AI-driven tekst samenvatten tool is onmisbaar voor SEO omdat Google snippets, meta descriptions, en featured snippets allemaal korte samenvattingen vereisen. In plaats van handmatig je 2000-woord artikel destilleren naar 155-karakter meta description, doet deze tool het in seconden—perfect geoptimaliseerd voor lengte én betekenis.
            </p>

            <p>
              Waarom is automatisch samenvatten zo waardevol? Tijd. Handmatig samenvatten van een complex artikel kost 15-30 minuten om alle key points te identificeren en concise te formuleren. Met deze content summarization tool doe je het in 10 seconden. Voor content teams die 50+ artikelen per maand publiceren, dat is een tijdsbesparing van 12-25 uur maandelijks. Plus, AI summarization is consistent—geen variatie in kwaliteit like met menselijk werk.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Drie Samenvatting Lengtes voor Verschillende Use Cases</h3>
            
            <p>
              De tool biedt drie lengtes omdat verschillende platforms verschillende summary requirements hebben. "Kort" (50-80 woorden) is perfect voor Google snippets en social media previews—je hebt seconds om attention te grabben. "Gemiddeld" (100-150 woorden) past in meta descriptions, email previews, en article introductions—genoeg ruimte voor context maar still concise. "Lang" (200-300 woorden) werkt voor executive summaries, research paper abstracts, en LinkedIn post previews—comprehensive overview zonder full article length.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">AI Summarization vs Manual Samenvatten</h4>
            
            <p>
              Menselijke summarizers lezen alles, bepalen wat important is, en herschrijven kernpunten—subjective process. AI extractive summarization identifies important sentences based on algorithms (term frequency, position, semantic similarity) en assembles them coherently. Abstractive AI summarization (zoals deze tool) gaat verder—het genereert nieuwe zinnen die meaning captureren, not just sentence extraction. Resultaat is natuurlijker, leesbaar, en often beter dan keyword-stuffed manual summaries.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Snippet Optimization met Summarization</h4>
            
            <p>
              Google featured snippets zijn kort—40-60 woorden typically. Als je artikel 3000 woorden is, which section krijgt featured? Vaak niet wat je zou willen. Oplossing: gebruik deze tool om een perfect 50-woord summary te genereren, plaats die bovenaan je artikel als TL;DR. Google ziet die concise summary, recognizes het als snippet-worthy, en—bam—featured snippet. Dit is strategische snippet optimization: control welke content Google extract door je beste summary prominent te plaatsen.
            </p>

            <p>
              Combineer met <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta description generator</Link> en <Link href="/tools/tekst-herschrijver" className="text-blue-600 hover:underline">content rewriting</Link>.
            </p>
          </div>
        </div>

        {/* SEO Content Section 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Summarizer: Meta Descriptions en Social Previews</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Meta descriptions zijn misschien het meest common use case voor content summarization. Elke webpage needs een compelling 155-160 karakter description die users convinces om te clicken. Probleem: manually schrijven van unique meta descriptions voor honderden pages is tedious. Deze summarizer tool genereert ze automatic. Paste je page content, kies "kort" of "gemiddeld", en krijg een meta-ready summary die je kernboodschap captures.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Social Media Previews Optimaliseren</h3>
            
            <p>
              Wanneer iemand je link deelt op LinkedIn, Twitter, of Facebook, verschijnt een preview met title + description. Dat description komt van je Open Graph tag (og:description) or meta description. Als die missing is, social platforms grab random text—often mid-sentence nonsense. Met deze content summarization tool genereer je compelling previews: paste article in tool, get punchy 100-woord summary, use dat in je og:description. Result: professional, clickable social previews instead of garbled text.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Email Newsletter Summaries</h4>
            
            <p>
              Email newsletters hebben attention span van seconds. Subject line gets de open, maar dan moet je preview text (first 40-60 characters visible in inbox) hook them om te lezen. Use deze tool om je full newsletter te summarizen naar een compelling 50-woord preview. Plaats die bovenaan je email. Subscribers zien instant wat de value is, verhoogt read rates. Voor digest emails met meerdere articles, summarize elk article naar 30 woorden—recipients krijgen quick overview en kunnen click door naar full pieces die hen interesseren.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Blog Post TL;DR Sections</h4>
            
            <p>
              "TL;DR" (Too Long; Didn't Read) sections zijn populair geworden omdat readers willen key takeaways without reading 2000 woorden. Plaats een AI-generated summary bovenaan je posts: "TL;DR: [50-woord summary]". Dit heeft drie benefits: (1) busy readers krijgen instant value, (2) Google kan die summary grab voor snippets, (3) engagement metrics improve want zelfs people who don't read full article krijgen value, reducing bounce rate. Het is win-win: catering naar skimmers without compromising depth voor deep-readers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Research Paper Abstracts</h3>
            
            <p>
              Academic en industry research papers vereisen abstracts—typically 150-250 woorden summarizing methode, findings, en conclusions. Schrijven van abstracts is skill; je moet technical accuracy behouden terwijl je accessible blijft. Deze tool helpt: paste je volledige paper (minus jargon-heavy sections), generate "lang" summary, dan edit for technical precision. De AI captures main points, jij refines terminology. Veel sneller dan from-scratch abstract writing, en often structureel beter want AI identifies key components systematically.
            </p>

            <p>
              Optimize verder met <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keywords</Link> en <Link href="/tools/page-title-enhancer" className="text-blue-600 hover:underline">title optimization</Link>.
            </p>
          </div>
        </div>

        {/* SEO Content Section 3 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tekst Samenvatten Tool: Geavanceerde Toepassingen</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Beyond basic summarization zijn er creative use cases die meeste mensen niet bedenken. Content repurposing bijvoorbeeld: summarize een 3000-woord thought leadership article naar 150 woorden, use dat als LinkedIn post met link naar full article. Of summarize customer case studies naar 80 woorden voor testimonial slides. Summarization is vaak eerste step in multi-format content creation—destilleer essence, dan adapt naar verschillende mediums.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Meeting Notes en Internal Documentation</h3>
            
            <p>
              Corporate use case: meeting notes en reports zijn vaak 5-10 pages van details. Executives need executive summaries—1-page or less with key decisions, action items, en outcomes. Use deze tool om verbose meeting transcripts te summarizen naar concise exec summaries. Paste transcript, generate "lang" summary (200-300 woorden), format met bullet points. Saves executives hours van reading time, en je establishes reputation als someone who communicates efficiently.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Competitor Content Analysis</h4>
            
            <p>
              Als je competitor analysis doet, moet je dozens concurrent articles lezen. Time-consuming. Use content summarizer om concurrent long-form content te distillen naar 100-woord summaries. Dan kun je quick scan 20 concurrent articles in time het zou kosten om 3 fully te lezen. Identify trends, gaps, unique angles zij nemen—all from summaries. Dit is research acceleration: maintain comprehensive competitive intelligence zonder drowning in content volume.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Podcast Show Notes</h4>
            
            <p>
              Podcasters need show notes—text descriptions van episode content. Manually transcriberen en summarizen van 60-minute episode is 2-3 uur work. Better workflow: use transcription service voor speech-to-text, paste transcript in deze tool, generate 150-woord summary capturing main discussion points. Edit for clarity, add timestamps voor key moments, publish als show notes. Wat 3 uur kostte is nu 30 minuten—10x productivity boost.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Content Audit en Metadata Updates</h3>
            
            <p>
              Grote sites hebben hundreds oude pages zonder meta descriptions or met outdated descriptions. Content audit nightmare. Solution: bulk export je page content, run each through summarizer tool, generate fresh meta descriptions. Yes, dit takes time but het is systematized—paste content, copy summary, update CMS, repeat. Met practice kun je 50+ pages per uur updaten. This metadata refresh improves CTR across je hele site. Google shows compelling, accurate descriptions instead van "..." truncated mess.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Multilingual Content Summarization</h4>
            
            <p>
              Deze tool werkt met Nederlandse en Engelse content (en andere languages met goede AI support). Handig voor international teams: summarize English articles voor Nederlandse audiences, of vice versa. De summary captures meaning regardless van input language. Dit is especially useful voor global companies—summarize HQ communications voor local teams, or local insights voor HQ. Summarization breekt language barriers: key points zijn begrijpelijk zelfs als full translation niet mogelijk is.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verliest een samenvatting belangrijke details?</h3>
              <p className="text-gray-700">
                Goede summarization behoudt alle kritieke informatie while removing redundancy, examples, en elaboration. Deze AI tool is trained op millions van text-summary pairs en leert wat "key information" is. Review altijd de output—vooral voor technical content waar specific details crucial zijn. In 95% van gevallen is de summary comprehensive enough voor intended use (meta descriptions, previews). Voor 100% accuracy-critical cases (legal, medical), manual review + editing is recommended.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welke samenvatting lengte moet ik kiezen?</h3>
              <p className="text-gray-700">
                Hangt af van use case. Meta descriptions: "kort" (50-80 woorden fits in 155 karakters meestal). Email previews en social shares: "gemiddeld" (100-150 woorden geeft enough context). Executive summaries en abstracts: "lang" (200-300 woorden comprehensive overview). Als unsure, start met "gemiddeld"—dat is versatile voor meeste purposes. Je kunt altijd regenerate met andere length als needed.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik technische of wetenschappelijke teksten samenvatten?</h3>
              <p className="text-gray-700">
                Ja, maar complexity matters. De AI handles moderately technical content well—IT articles, business reports, how-to guides. Voor highly specialized content (advanced physics, medical research, legal documents), de summary is goede start maar vereist expert review. AI kan jargon misinterpret of oversimplify nuanced concepts. Best practice: use tool voor initial summary, dan heb domain expert review en refine voor accuracy. Saves tijd versus starting from scratch.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoe lang moet mijn originele tekst zijn?</h3>
              <p className="text-gray-700">
                Minimum 200 woorden voor meaningful summarization. Kortere teksten hebben insufficient content om te "summarizen"—wat zou je cutnen? Optimal input is 500-5000 woorden. Extreem lange texts (10k+ woorden) kunnen ook maar consider summarizing in sections voor better results. Als je hele book wilt summarizen, doe het hoofdstuk per hoofdstuk, dan combine die summaries in master summary. Quality beats quantity in summarization input.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is de samenvatting uniek genoeg voor SEO?</h3>
              <p className="text-gray-700">
                Ja—de AI genereert originele phrasings, niet copy-paste van source text. Elke summary is unique combination van synthesized information. Google waardeert dit als original content. Echter, als je identical source text multiple keren summarized met same settings, krijg je similar (not identical) summaries. Voor absolute uniqueness, gebruik verschillende summary lengths of edit de output lightly. Summaries zijn SEO-safe voor meta descriptions, snippets, en previews.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Content Summarization Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p>• <strong>Input quality:</strong> Goed geschreven source = betere summary</p>
              <p>• <strong>Review output:</strong> Check altijd voor accuracy</p>
              <p>• <strong>Right length:</strong> Match summary length met use case</p>
              <p>• <strong>Add value:</strong> Edit summary voor extra context indien nodig</p>
              <p>• <strong>Test variations:</strong> Try different lengths voor best result</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Section summarizing:</strong> Long texts in parts summarizen</p>
              <p>• <strong>Preserve keywords:</strong> Check main keywords blijven in summary</p>
              <p>• <strong>Natural language:</strong> Summary moet vloeiend lezen</p>
              <p>• <strong>Consistent tone:</strong> Match summary tone met source</p>
              <p>• <strong>Update regularly:</strong> Refresh summaries als content updates</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
