'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowPathRoundedSquareIcon, SparklesIcon, ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

const CONTENT_FORMATS = {
  'social-post': { name: 'Social Media Post', icon: '📱', description: 'LinkedIn, Twitter, Facebook post' },
  'email': { name: 'Email Newsletter', icon: '📧', description: 'Email campagne versie' },
  'video-script': { name: 'Video Script', icon: '🎬', description: 'YouTube of TikTok script' },
  'infographic': { name: 'Infographic Text', icon: '📊', description: 'Tekst voor infographic' },
  'tweet-thread': { name: 'Twitter Thread', icon: '🧵', description: 'Multi-tweet thread' },
  'linkedin-article': { name: 'LinkedIn Artikel', icon: '💼', description: 'Long-form LinkedIn post' },
};

export default function ContentRepurposing() {
  const [originalContent, setOriginalContent] = useState('');
  const [selectedFormats, setSelectedFormats] = useState(['social-post']);
  const [repurposedContent, setRepurposedContent] = useState({});
  const [isRepurposing, setIsRepurposing] = useState(false);
  const [copiedFormat, setCopiedFormat] = useState(null);
  const [error, setError] = useState('');

  const wordCount = originalContent.trim().split(/\s+/).filter(w => w).length;

  const toggleFormat = (format) => {
    setSelectedFormats(prev => 
      prev.includes(format) 
        ? prev.filter(f => f !== format)
        : [...prev, format]
    );
  };

  const handleRepurpose = async () => {
    if (!originalContent.trim()) {
      setError('Voer content in om te hergebruiken');
      return;
    }

    if (wordCount < 100) {
      setError('Voer minimaal 100 woorden in voor betere resultaten');
      return;
    }

    if (selectedFormats.length === 0) {
      setError('Selecteer minimaal één content formaat');
      return;
    }

    setIsRepurposing(true);
    setError('');
    setRepurposedContent({});

    try {
      const response = await fetch('/api/tools/content-repurposing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          content: originalContent,
          formats: selectedFormats 
        }),
      });

      const data = await response.json();

      if (data.success) {
        setRepurposedContent(data.repurposedContent);
      } else {
        setError(data.error || 'Kon content niet hergebruiken');
      }
    } catch (error) {
      setError('Er ging iets fout. Probeer het later opnieuw.');
    } finally {
      setIsRepurposing(false);
    }
  };

  const copyToClipboard = (format, text) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ArrowPathRoundedSquareIcon className="h-12 w-12 text-violet-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Content Repurposing Tool
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hergebruik content slim met AI. Transform één blog artikel naar social posts, emails, video scripts en meer. Maximale reach met minimale effort.
          </p>
        </div>

        {/* Main Tool */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          
          {/* Input */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-gray-700">
                Originele Content (Blog, Artikel, etc.):
              </label>
              <span className="text-sm text-gray-500">{wordCount} woorden</span>
            </div>
            <textarea
              value={originalContent}
              onChange={(e) => setOriginalContent(e.target.value)}
              placeholder="Plak hier je blog artikel of content die je wilt hergebruiken voor andere kanalen..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Format Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Selecteer Content Formaten (meerdere mogelijk):
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(CONTENT_FORMATS).map(([key, format]) => (
                <button
                  key={key}
                  onClick={() => toggleFormat(key)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedFormats.includes(key)
                      ? 'border-violet-600 bg-violet-50'
                      : 'border-gray-200 hover:border-violet-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{format.icon}</span>
                    <span className="font-semibold text-sm">{format.name}</span>
                  </div>
                  <div className="text-xs text-gray-500">{format.description}</div>
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleRepurpose}
              disabled={isRepurposing || !originalContent.trim() || selectedFormats.length === 0}
              className="flex-1 bg-violet-600 text-white py-3 px-6 rounded-lg hover:bg-violet-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold transition-colors"
            >
              {isRepurposing ? (
                <>
                  <SparklesIcon className="h-5 w-5 animate-pulse" />
                  Content Hergebruiken...
                </>
              ) : (
                <>
                  <ArrowPathRoundedSquareIcon className="h-5 w-5" />
                  Hergebruik Content
                </>
              )}
            </button>
            <button
              onClick={() => { setOriginalContent(''); setRepurposedContent({}); setError(''); }}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Wissen
            </button>
          </div>
        </div>

        {/* Output */}
        {Object.keys(repurposedContent).length > 0 && (
          <div className="space-y-6 mb-8">
            {Object.entries(repurposedContent).map(([format, content]) => (
              <div key={format} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{CONTENT_FORMATS[format]?.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {CONTENT_FORMATS[format]?.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {content.split(/\s+/).length} woorden
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(format, content)}
                    className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    {copiedFormat === format ? (
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
                  <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SEO Content Section 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Repurposing: Maximale ROI uit Je Content</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Content repurposing is het hergebruiken van bestaande content in nieuwe formaten om je bereik te maximaliseren zonder constant nieuwe content te creëren. Deze content hergebruiken tool transformeert automatisch je blog artikelen naar social media posts, email newsletters, video scripts en meer. Het is dé strategie om je content ROI te verhogen—investeer eenmaal in creatie, profiteer meerdere keren.
            </p>

            <p>
              Waarom is content repurposing zo krachtig? Je hebt waarschijnlijk al honderden blog posts, whitepapers, of artikelen gepubliceerd. Die content heeft tijd en geld gekost. Maar een blog post bereikt alleen mensen die je site bezoeken. Hergebruik diezelfde content als LinkedIn post en je bereikt je netwerk. Als video script en je tikt YouTube aan. Als email en je hits subscribers' inbox. Eén kernboodschap, vijf kanalen, vijf keer de exposure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Van Blog naar Multi-Channel Content Strategie</h3>
            
            <p>
              De content repurposing tool hierboven maakt dit proces triviaal. Plak je 1500-woord artikel, selecteer welke formaten je wilt, en krijg binnen seconden aangepaste versies. De AI begrijpt de nuances van elk platform. LinkedIn posts zijn professioneler en langer. Twitter threads zijn punchy met hooks per tweet. Video scripts hebben een conversational tone met duidelijke scenes. Email newsletters hebben subject lines en CTAs. Elk formaat is geoptimaliseerd voor het platform, niet een slappe copy-paste.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Social Media Content Hergebruiken</h4>
            
            <p>
              Neem een guide over "SEO voor beginners". Je hebt 3000 woorden geschreven vol actionable tips. Dat is één blog post. Met content repurposing extract je 10 LinkedIn posts (één tip per post), een Twitter thread van 15 tweets met de kerntakeaways, 5 Instagram carousel posts met visuele highlights, en een TikTok script dat de top 3 mistakes behandelt. Van één asset naar 30+ social posts. Dat vult je contentkalender voor een maand zonder extra research of schrijfwerk.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Email Marketing en Content Hergebruik</h4>
            
            <p>
              Email subscribers verwachten regelmatige updates. In plaats van elke week nieuwe content te bedenken, hergebruik je blog content. Deze tool genereert email-friendly versies: pakkende subject line, korte intro die urgentie creëert, highlights van je artikel, en een CTA die terug linkt naar de volledige blog voor traffic. Subscribers krijgen waarde, jij krijgt website bezoek, en je hoeft niet constant nieuw te schrijven.
            </p>

            <p>
              Koppel content repurposing aan je <Link href="/tools/tekst-herschrijver" className="text-blue-600 hover:underline">tekst herschrijver</Link> voor variaties en <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta description generator</Link> voor social snippets.
            </p>
          </div>
        </div>

        {/* SEO Content Section 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Hergebruiken: Platform-Specifieke Strategieën</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Elk platform heeft eigen content verwachtingen. LinkedIn waardeert long-form thought leadership—2000 karakters met persoonlijke stories en insights. Twitter eist brevity—280 karakters per tweet met harde line breaks voor readability. YouTube video's moeten visual zijn met scene descriptions. Instagram carousel posts hebben design elementen nodig. Content repurposing is niet copy-pasten, het is aanpassen per medium.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">LinkedIn Content Repurposing</h3>
            
            <p>
              LinkedIn is het professionele netwerk waar diepte wordt gewaardeerd. Wanneer je een blog hebt over "B2B lead generation tactieken", hergebruik je dit als een LinkedIn artikel van 1500 woorden met personal anecdotes. Start met een hook—een contrarian statement of interessante vraag. Deel je expertise, back het up met data, en eindig met een call-to-action voor comments. De repurposing tool extraheert de meest LinkedIn-vriendelijke delen van je blog en formats ze met deze best practices in mind.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Twitter Thread Strategie</h4>
            
            <p>
              Twitter threads zijn krachtig voor thought leadership in bite-sized chunks. Een thread van 10-15 tweets kan viral gaan waar een blog post dat nooit zou doen. De content hergebruiken tool structureert je blog als thread: tweet 1 is de hook (pakkende statement + promise van value), tweets 2-13 zijn individuele tips/insights, tweet 14 is de conclusie, tweet 15 de CTA met link naar volledige blog. Elk tweet staat op zichzelf maar samen vormen ze een cohesive narrative.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Video Script Creatie</h4>
            
            <p>
              Video is koning op YouTube en TikTok maar scripts schrijven is tijdrovend. Content repurposing lost dit op. Upload je geschreven content en krijg een conversational video script. De tool breekt je artikel in scenes: opening hook (5 seconden), intro (15 seconden), hoofdinhoud (3-5 main points), conclusie en CTA. Elk scene heeft suggesties voor b-roll of visual elements. Wat als blog 10 minuten leestijd was, wordt 3-5 minuut video script perfect voor social video.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Infographics en Visuele Content</h3>
            
            <p>
              Infographics presteren excellent op Pinterest en Instagram. Maar je bent geen designer. Deze tool extraheert de meest visual-friendly data uit je content—statistieken, lijstjes, voor/na vergelijkingen, step-by-step processes. Het geeft tekst die je designer kan gebruiken voor een infographic. Bijvoorbeeld, een artikel over "10 SEO mistakes" wordt omgezet naar 10 infographic text blocks met title, short description, en een one-liner takeaway. Geef dit aan Canva of je designer en je hebt viral-ready visual content.
            </p>

            <p>
              Optimaliseer verder met <Link href="/tools/ai-content-expansion" className="text-blue-600 hover:underline">content expansion</Link> en <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword research</Link>.
            </p>
          </div>
        </div>

        {/* SEO Content Section 3 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Repurposing Workflow: Van Idee naar Omnipresence</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Succesvolle content repurposing is systematisch. Start met je "pillar content"—comprehensive guides, case studies, whitepapers. Dit is je foundation. Dan gebruik je repurposing om dit te atomiceren naar micro-content voor alle kanalen. Denk aan het als een pyramid: één pillar post bovenaan, 50+ repurposed assets eronder die allemaal terug linken naar de pillar. Dit is hoe je omnipresent wordt zonder burnout.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">De Content Atomization Methode</h3>
            
            <p>
              Content atomization betekent: big content → many small pieces. Een 3000-woord ultimate guide bevat tientallen quotable insights. Extract ze. Elke insight wordt een standalone social post. Elke section een video. Elke tip een Instagram reel. De repurposing tool identificeert deze atomizable moments automatisch. Het vindt je quotable zinnen, actionable tips, interessante stats—alles dat standalone value heeft—en creëert er dedicated content van.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Weekly Content Repurposing Routine</h4>
            
            <p>
              Implementeer dit als wekelijkse routine: Maandag schrijf je één uitgebreid artikel (2-3 uur). Dinsdag gebruik je deze tool om het te repurposen naar 20+ assets (30 minuten). Woensdag-Vrijdag schedule je de repurposed content across platforms (1 uur total). Dat is 5 uur per week voor omnipresence op LinkedIn, Twitter, YouTube, Instagram, email. Zonder repurposing zou je 20+ uur nodig hebben om al die content origineel te schrijven.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Repurposing voor Evergreen Content</h4>
            
            <p>
              Evergreen content—tutorials, how-to guides, fundamentals—kan je hergebruiken met een twist: tijd-based updates. Heb je een artikel over "SEO basics" uit 2023? Hergebruik het in 2024 met "SEO basics [Updated for 2024]". De core content blijft hetzelfde, je voegt een intro over wat er changed is, en boom—nieuwe content. Deze tool kan je oude artikelen herformatteren met fresh angles. "10 SEO tips" wordt "10 SEO tips that still work in 2024" of "10 SEO tips your competitors ignore".
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Measuring Repurposing ROI</h3>
            
            <p>
              Track welke repurposed formats het beste presteren. LinkedIn posts kunnen meer engagement krijgen dan de originele blog. Video scripts kunnen viral gaan. Twitter threads kunnen thought leadership vestigen. Gebruik analytics om te zien welke kanalen je audience prefereert, en double down op die formaten. Misschien hoef je geen blogs meer te schrijven—je repurposes Twitter threads terug naar blogs want je audience leeft op Twitter. Content repurposing is bidirectioneel.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Cross-Platform Content Strategy</h4>
            
            <p>
              Ultieme strategie: één content pillar → repurpose naar alle platforms → zie welk format/platform beste resultaten geeft → maak van dat format je nieuwe primary content → hergebruik die content voor andere platforms. Bijvoorbeeld: je blog presteert matig, maar je LinkedIn versie blowt up. Schrijf dan primair voor LinkedIn, en repurpose die posts terug naar blogs. Of je video scripts krijgen meeste views—start dan met video, repurpose transcript naar blog. Laat data je content-first platform bepalen.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen over Content Repurposing</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is repurposed content niet gewoon duplicate content?</h3>
              <p className="text-gray-700">
                Nee, want je publiceert op verschillende platforms. Duplicate content is alleen een issue wanneer je identieke content op meerdere URLs van je eigen website hebt. Een blog op je site en een LinkedIn post zijn totaal verschillende platforms—Google penaliseert dit niet. Plus, deze tool herschrijft content per platform dus het is niet eens identiek. Elk format is aangepast voor het medium.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoe vaak kan ik dezelfde content hergebruiken?</h3>
              <p className="text-gray-700">
                Onbeperkt, zolang je value toevoegt. Hergebruik een artikel als social posts deze maand. Over 6 maanden, hergebruik het opnieuw met "2024 update" angle. Een jaar later, combineer het met nieuw artikel voor "ultimate guide". Voeg nieuwe data, updates, of perspectives toe telkens. Evergreen topics blijven relevant—blijf ze repurposen met fresh angles. Je audience volgt je niet op alle platforms, dus cross-platform repurposing bereikt telkens nieuwe mensen.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welk content type werkt het beste voor repurposing?</h3>
              <p className="text-gray-700">
                Long-form content (1500+ woorden) is ideaal. Ultimate guides, case studies, research articles, tutorials—dit zijn content goldmines vol repurposable insights. Korte blogs (300 woorden) hebben te weinig substance om te atomiceren. Maar een 3000-woord artikel? Dat kun je slicen naar 50+ pieces. Listicles zijn ook excellent—"10 tips" wordt automatisch 10 social posts, één per tip. Interview transcripts, podcast notes, webinar recordings—alles met depth repurposes goed.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moet ik repurposed content bewerken of kan het direct live?</h3>
              <p className="text-gray-700">
                Altijd reviewen voordat je publiceert. De AI is sterk maar check op brand voice, juiste tone per platform, en accuracy. Voeg persoonlijke touches toe—een anecdote, current event reference, of platform-specific hashtags/mentions. Repurposed content is een first draft, geen finished product. Budget 10-15 minuten editing per piece. Het blijft 10x sneller dan from-scratch schrijven met betere results want je core message is battle-tested.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik ook visuele content repurposen met deze tool?</h3>
              <p className="text-gray-700">
                Deze tool genereert text content die je kunt gebruiken voor visuele assets. De "Infographic Text" output geeft je structured text die perfect werkt voor Canva templates. Video scripts bevatten scene suggestions. LinkedIn posts kun je omzetten naar carousel slides. Neem de output, combineer met stock images of je eigen visuals, en je hebt complete visual content. Voor pure design repurposing (logo variations, color palettes) heb je design tools nodig—dit is focused op text-to-text en text-to-visual-text conversie.
              </p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Content Repurposing Tips voor Maximum Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p>• <strong>Start met evergreen:</strong> Repurpose content dat niet veroudert</p>
              <p>• <strong>Optimize per platform:</strong> Niet copy-paste, aanpassen</p>
              <p>• <strong>Track performance:</strong> Zie welke formats het beste werken</p>
              <p>• <strong>Add fresh angles:</strong> Update met nieuwe perspectives</p>
              <p>• <strong>Cross-link:</strong> Link repurposed content naar origineel</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Batch je workflow:</strong> Repurpose wekelijks, niet ad-hoc</p>
              <p>• <strong>Build content pyramids:</strong> Pillar → atomized pieces</p>
              <p>• <strong>Test different formats:</strong> Experimenteer met variaties</p>
              <p>• <strong>Repurpose backwards:</strong> Social → blog ook mogelijk</p>
              <p>• <strong>Schedule smartly:</strong> Spread repurposed content over tijd</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
