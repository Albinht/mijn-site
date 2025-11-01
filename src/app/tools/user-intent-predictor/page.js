'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, LightBulbIcon, ShoppingCartIcon, MapIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const INTENT_TYPES = {
  informational: { icon: QuestionMarkCircleIcon, color: 'blue', label: 'Informationeel', desc: 'Zoeker wil informatie/antwoorden' },
  navigational: { icon: MapIcon, color: 'purple', label: 'Navigatie', desc: 'Zoeker zoekt specifieke website/pagina' },
  transactional: { icon: ShoppingCartIcon, color: 'green', label: 'Transactioneel', desc: 'Zoeker wil kopen/actie ondernemen' },
  commercial: { icon: LightBulbIcon, color: 'orange', label: 'Commercieel', desc: 'Zoeker onderzoekt voor aankoop' },
};

export default function UserIntentPredictor() {
  const [keywords, setKeywords] = useState('');
  const [results, setResults] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    const keywordList = keywords.split('\n').filter(k => k.trim());
    
    if (keywordList.length === 0) {
      setError('Voer minimaal één keyword in');
      return;
    }

    setIsAnalyzing(true);
    setError('');
    setResults([]);

    try {
      const response = await fetch('/api/tools/user-intent-predictor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keywords: keywordList }),
      });

      const data = await response.json();
      if (data.success) {
        setResults(data.predictions);
      } else {
        setError(data.error || 'Kon intent niet voorspellen');
      }
    } catch (error) {
      setError('Er ging iets fout. Probeer het later opnieuw.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MagnifyingGlassIcon className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            User Intent Predictor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Voorspel automatisch de zoekintentie van keywords. Analyseer of gebruikers informatie zoeken, willen kopen, of navigeren. Search intent tool voor SEO.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Voer Keywords In (één per regel):
            </label>
            <textarea
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="beste laptop 2024&#10;hoe werkt SEO&#10;Nike website&#10;WordPress hosting vergelijken"
              className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none font-mono text-sm"
            />
            <p className="text-xs text-gray-500 mt-2">Tip: Voer meerdere keywords in om batch analyse te doen</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !keywords.trim()}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold transition-colors"
          >
            {isAnalyzing ? 'Analyseren...' : 'Analyseer Search Intent'}
          </button>
        </div>

        {results.length > 0 && (
          <div className="space-y-4 mb-8">
            {results.map((result, index) => {
              const config = INTENT_TYPES[result.intent];
              const Icon = config.icon;
              return (
                <div key={index} className={`bg-white rounded-lg shadow-md p-6 border-l-4 border-${config.color}-600`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`h-6 w-6 text-${config.color}-600`} />
                        <h3 className="text-lg font-bold text-gray-900">{result.keyword}</h3>
                      </div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${config.color}-100 text-${config.color}-700 rounded-full text-sm font-semibold mb-3`}>
                        {config.label}
                      </div>
                      <p className="text-gray-600 mb-3">{result.explanation}</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Content Aanbeveling:</p>
                        <p className="text-sm text-gray-600">{result.contentRecommendation}</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className={`text-3xl font-bold text-${config.color}-600`}>
                        {result.confidence}%
                      </div>
                      <div className="text-xs text-gray-500">Zekerheid</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SEO Content Section 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Intent: Waarom Zoekintentie Belangrijker Is Dan Keywords</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              User intent—ook wel search intent of zoekintentie—is de reden waarom iemand iets googlet. Het is niet genoeg om voor keywords te ranken; je moet de juiste intent matchen. Als iemand zoekt "iPhone 15", kan intent zijn: informatie over specs (informationeel), Apple's website vinden (navigational), of de phone kopen (transactioneel). Google's algoritme voorspelt intent en rankt content accordingly. Deze user intent prediction tool helpt je begrijpen welke intent jouw target keywords hebben, zodat je de juiste content type maakt.
            </p>

            <p>
              Waarom is intent zo cruciaal? Mismatch tussen content en intent = hoge bounce rate. Als iemand met transactional intent ("koop iPhone 15") landt op je informational article ("iPhone 15 review"), converteren ze niet. Ze bounces terug naar Google, wat je rankings schaadt. Omgekeerd, iemand met informational intent op je productpagina—ze zijn nog niet klaar om te kopen, ook bounce. Intent matching is essentieel: informational queries → blog content, transactional queries → product/service pages.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Vier Types Search Intent</h3>
            
            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">1. Informationeel Intent</h4>
            <p>
              User wil leren, begrijpen, of antwoorden vinden. Keywords zoals "hoe werkt...", "wat is...", "waarom...", "tips voor...". Bijvoorbeeld: "hoe maak je een website", "wat is SEO", "WordPress tips". Content type: blog posts, tutorials, guides, how-to articles, FAQ pages. Deze queries domineren search volume—70% van searches zijn informational. Maar conversion rates zijn laag want users zijn nog in awareness/consideration fase, niet ready to buy.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">2. Navigational Intent</h4>
            <p>
              User zoekt een specifieke website of pagina. Keywords bevatten brand names of specifieke site names: "Facebook login", "YouTube", "Niblah contact". Users weten al waar ze willen zijn, ze gebruiken Google als navigatie. Als je die website/pagina bent, moet je #1 ranken for your brand terms (obvieus). Als je niet die website bent, is het moeilijk om traffic te hijacken—users willen expliciet die destination, niet alternatieven.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">3. Transactional Intent</h4>
            <p>
              User is klaar om actie te ondernemen—kopen, downloaden, aanmelden. Keywords: "koop...", "download...", "bestel...", "[product] prijs", "[service] abonnement". Bijvoorbeeld: "MacBook Pro kopen", "Shopify aanmelden", "iPhone 15 bestellen". Content type: product pages, pricing pages, signup forms, e-commerce pages. Transactional keywords hebben hoogste commercial value—conversion rates zijn 5-10x hoger dan informational. Competition is fierce.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">4. Commercial Investigation Intent</h4>
            <p>
              User onderzoekt opties before kopen—vergelijkt, leest reviews, zoekt "beste" options. Keywords: "beste...", "[product] review", "[product] vs [competitor]", "top 10...". Bijvoorbeeld: "beste laptops 2024", "Shopify vs WooCommerce", "iPhone 15 review". Content type: comparison articles, review posts, "best of" lists, buyer's guides. Commercial intent is sweet spot—users zijn further in funnel dan informational maar nog open voor persuasion. Conversie rates zijn mid-range maar volume is good.
            </p>

            <p>
              Gebruik <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword research</Link> en <Link href="/tools/topic-cluster-builder" className="text-blue-600 hover:underline">topic clusters</Link> per intent type.
            </p>
          </div>
        </div>

        {/* SEO Content Section 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Intent Optimization: Content Strategy Per Intent Type</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Zodra je intent begrijpt, moet je content format matchen. Dit is waar meeste SEOs falen—ze target high-volume keywords zonder te checken intent. Result: content ranks maar converteert niet, of ranks niet omdat format mismatch. Deze zoekintentie analyzer tool voorspelt intent, dan moet jij correct content type maken. Laten we per intent type de optimal content strategy bespreken.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Content voor Informationeel Intent</h3>
            
            <p>
              Informational queries vereisen comprehensive, educational content. Format: long-form blog posts (1500-3000 woorden), tutorials met screenshots, video guides, FAQ sections. Structure is key: gebruik clear H2/H3 headings die questions beantwoorden. Bijvoorbeeld keyword "how to start a blog"—je article moet cover: platform keuze, domain registratie, hosting setup, design, first post, promoting. Thoroughness beats brevity voor informational intent.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">SERP Features voor Informational Queries</h4>
            <p>
              Informational queries trigger featured snippets, People Also Ask boxes, video carousels. Optimize voor deze features: answer specific questions concisely (for snippets), gebruik question-format H2s (for PAA), embed video (for video carousel). Als je keyword "what is SEO", structure je intro als direct answer: "SEO (Search Engine Optimization) is..." in 40-60 woorden. Dit snippet-friendly format verhoogt je featured snippet chances, wat massive CTR boost geeft.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Content voor Transactional Intent</h3>
            
            <p>
              Transactional queries need frictionless conversion paths. Format: product pages met clear pricing, "Add to Cart" buttons, trust signals (reviews, garanties), en minimal distractions. Bijvoorbeeld "WordPress hosting kopen"—je page moet show plans/pricing immediately, geen 2000-woord essay over wat hosting is. Users met transactional intent zijn decision-ready; give them wat ze need om nu te kopen. Optimize load speed, mobile UX, checkout flow.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Commercial Investigation Content Strategy</h4>
            <p>
              Commercial queries zijn gold—users zijn interested maar need convincing. Format: comparison tables, pros/cons lists, detailed reviews, "best of" roundups. Include affiliate links, CTAs, maar ook genuinely helpful content. Keyword "best email marketing software"—rank meerdere options (Mailchimp, ConvertKit, ActiveCampaign), objective comparison, dan subtle recommendation naar je affiliate choice. Balance helpfulness met monetization.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Mixed Intent Keywords</h3>
            
            <p>
              Sommige keywords hebben mixed intent. "iPhone 15" kan zijn informational (specs), navigational (Apple website), of transactional (kopen). Google shows mixed SERPs—Apple's site, review articles, shopping results. Als je target mixed intent keyword, maak comprehensive page die multiple intents serves: specs section (informational), comparison met older models (commercial investigation), buy buttons (transactional). Of, make meerdere pages targeting each intent separately en interlink them.
            </p>

            <p>
              Optimize verder met <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta descriptions</Link> per intent en <Link href="/tools/content-repurposing" className="text-blue-600 hover:underline">content repurposing</Link>.
            </p>
          </div>
        </div>

        {/* SEO Content Section 3 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">User Intent Analysis: SERP Reverse Engineering</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Best manier om intent te verifiëren? Analyseer current top 10 results. Google heeft al intent determined—kijk wat they rank. Als top 10 voor "project management software" allemaal comparison articles zijn, is intent commercial investigation, niet direct transactional. Als top results product pages zijn, intent is transactional. This SERP analysis methode is 95% accurate want Google's algorithms zijn trained on billions van queries—they know intent better than we guess.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Intent Shifts Over Time</h3>
            
            <p>
              Search intent evolves. "iPhone" 10 years ago was mainly informational (wat is dat?). Nu is het navigational (Apple's site) or transactional (kopen). Seasonal shifts ook: "Christmas gifts" in July is informational (planning), in December is transactional (buying now). Monitor je target keywords' intent quarterly. If intent shifts van informational naar commercial, update je content accordingly—add comparison elements, affiliate links, CTAs. Don't blijf informational as market goes commercial.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Intent-Based Content Calendar</h4>
            <p>
              Plan je content strategie per intent. Nieuwe sites: start met informational content (easier to rank, builds traffic). As je authority grows, add commercial investigation content (affiliate revenue). Finally, create transactional pages (direct sales). This funnel approach matches user journey: awareness (informational) → consideration (commercial) → decision (transactional). Each stage feeds the next—informational posts attract visitors, commercial content nurtures them, transactional pages convert.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Intent Mismatch Diagnosis</h4>
            <p>
              Als je content ranks maar heeft poor conversion/high bounce rate, suspect intent mismatch. Check: wat is je content type, wat is actual user intent? Use deze tool om je keywords re-analyze. Misschien assumed informational maar intent is transactional—explains waarom people bounce (they want to buy, je geeft how-to). Solution: create new page matching correct intent, or repurpose existing content. Intent alignment fixes most "ranks maar converts niet" problems.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Voice Search en Intent</h3>
            
            <p>
              Voice queries often have different intent than typed queries. Typed: "restaurants near me" (navigational/commercial). Voice: "where can I eat dinner tonight" (conversational, still navigational but phrased differently). Voice searches skew informational—people ask questions natuurlijk. Optimize for voice by targeting question keywords, using natural language, providing direct answers. Featured snippets are crucial for voice—Google reads snippet as voice answer.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Local Intent Signals</h4>
            <p>
              "Near me" queries, city names, "in [location]" indicate local intent—user wants nearby results. Even zonder explicit location, Google detects local intent for queries like "pizza", "dentist", "gym". For local businesses, intent is usually transactional (find en visit/buy). Optimize with local SEO: Google Business Profile, NAP consistency, location pages, local schema markup. Intent voor local differs from national—user is ready to act, needs direction en hours, not lengthy educational content.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoe weet Google wat de zoekintentie is?</h3>
              <p className="text-gray-700">
                Google analyseert billions searches en user behavior. Als 90% van users die "best laptops 2024" zoeken clicken op comparison articles (not direct product pages), leert Google dat deze query commercial investigation intent heeft. Combine dat met NLP analysis van query structure—"best" is commercial signal, "how to" is informational, "buy" is transactional. Plus, Google tracks clicks, dwell time, bounces per result type. Over tijd, algoritme voorspelt intent accurately en ranks content accordingly.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan één pagina multiple intents targeten?</h3>
              <p className="text-gray-700">
                Ja maar moeilijk. Best practice is dedicated pages per intent. Bijvoorbeeld: informational blog "Email Marketing Guide", commercial comparison "Best Email Tools 2024", transactional "Buy Mailchimp". Als je moet combine (limited resources), structure één page in sections: top = direct answer (informational), middle = comparison (commercial), bottom = buy (transactional). Maar dedicated pages meestal rank beter want ze're focused on één intent thoroughly.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verandert intent per land of taal?</h3>
              <p className="text-gray-700">
                Ja, cultural en market differences affect intent. In US, "iPhone" is heavily transactional (mature market). In emerging markets, "iPhone" kan meer informational zijn (wat is het, waarom kopen). Ook: "solicitor" (UK) vs "lawyer" (US)—same profession maar different search patterns. Voor internationale SEO, analyze intent per market separately. Don't assume English keyword intent translates directly naar Nederlandse equivalent—cultural buying behaviors differ.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is er verschil tussen desktop en mobile intent?</h3>
              <p className="text-gray-700">
                Subtle verschillen. Mobile skews meer navigational/transactional—users on-the-go want quick answers or need iets nu. Desktop has meer informational queries—people researching at werk/thuis. "Restaurant menu" on mobile = transactional (I'm here, wat order ik). Same query desktop = informational (researching for later). Optimize mobile pages voor speed en easy conversion; desktop kan handle more content/details. But differences aren't huge—intent is more query-dependent than device-dependent.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moet ik alle intent types targeten voor balanced strategy?</h3>
              <p className="text-gray-700">
                Ideaal ja—funnel coverage. Informational content brings top-funnel traffic (awareness), commercial investigation nurtures (consideration), transactional converts (decision). New sites start informational (easier rankings, builds authority). Medium sites add commercial (monetization). Mature sites layer in transactional (direct revenue). Diversification protects tegen algorithm changes—if transactional queries get competitive, je still hebt informational traffic. Balanced portfolio = sustainable SEO.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Search Intent Optimization Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p>• <strong>Analyze SERP:</strong> Check top 10 results voor intent clues</p>
              <p>• <strong>Match content type:</strong> Format moet intent matchen</p>
              <p>• <strong>Monitor bounce rate:</strong> High bounces = mogelijk mismatch</p>
              <p>• <strong>Check conversions:</strong> Low conversions kunnen intent issue zijn</p>
              <p>• <strong>Use modifiers:</strong> "Best", "how to", "buy" signal intent</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Quarterly reviews:</strong> Intent kan shiften over tijd</p>
              <p>• <strong>Cover funnel:</strong> Balance info/commercial/transactional</p>
              <p>• <strong>Local signals:</strong> Watch voor location intent indicators</p>
              <p>• <strong>Voice optimize:</strong> Questions voor voice search intent</p>
              <p>• <strong>Track rankings:</strong> Intent mismatch schaadt rankings</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
