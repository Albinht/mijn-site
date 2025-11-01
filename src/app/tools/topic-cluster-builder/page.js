'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Square3Stack3DIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function TopicClusterBuilder() {
  const [mainTopic, setMainTopic] = useState('');
  const [industry, setIndustry] = useState('');
  const [clusterData, setClusterData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!mainTopic.trim()) {
      setError('Voer een hoofd topic in');
      return;
    }

    setIsGenerating(true);
    setError('');
    setClusterData(null);

    try {
      const response = await fetch('/api/tools/topic-cluster-builder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mainTopic, industry }),
      });

      const data = await response.json();
      if (data.success) {
        setClusterData(data.cluster);
      } else {
        setError(data.error || 'Kon cluster niet genereren');
      }
    } catch (error) {
      setError('Er ging iets fout. Probeer het later opnieuw.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Square3Stack3DIcon className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Topic Cluster Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bouw complete topic clusters automatisch met AI. Genereer pillar pages en cluster topics voor dominante SEO content strategie.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hoofd Topic (Pillar Page):
              </label>
              <input
                type="text"
                value={mainTopic}
                onChange={(e) => setMainTopic(e.target.value)}
                placeholder="Bijv: SEO voor kleine bedrijven"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry/Niche (optioneel):
              </label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="Bijv: E-commerce, SaaS, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !mainTopic.trim()}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold transition-colors"
          >
            {isGenerating ? (
              <>
                <SparklesIcon className="h-5 w-5 animate-pulse" />
                Topic Cluster Genereren...
              </>
            ) : (
              <>
                <Square3Stack3DIcon className="h-5 w-5" />
                Genereer Topic Cluster
              </>
            )}
          </button>
        </div>

        {clusterData && (
          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Square3Stack3DIcon className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Pillar Page</h2>
              </div>
              <h3 className="text-3xl font-bold mb-4">{clusterData.pillarPage.title}</h3>
              <p className="text-blue-100 mb-4">{clusterData.pillarPage.description}</p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Aanbevolen Keywords:</p>
                <div className="flex flex-wrap gap-2">
                  {clusterData.pillarPage.keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm">{kw}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusterData.clusterTopics.map((topic, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <div className="flex items-start gap-2 mb-3">
                    <ArrowRightIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <h4 className="font-bold text-lg text-gray-900">{topic.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{topic.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase">Target Keywords:</p>
                    {topic.keywords.map((kw, i) => (
                      <span key={i} className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs mr-2 mb-1">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEO Content Section 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Topic Clusters: De Ultieme SEO Content Strategie</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Een topic cluster is een content architectuur waarbij je één comprehensive "pillar page" hebt over een breed onderwerp, omringd door meerdere "cluster pages" die specifieke subtopics behandelen. Deze AI-driven topic cluster builder genereert automatisch deze structuur. Waarom zijn topic clusters zo krachtig? Ze tonen Google dat je autoriteit hebt over een heel onderwerp, niet slechts individuele keywords. Dit boost je rankings voor alle gerelateerde terms.
            </p>

            <p>
              De pillar page strategie werkt zo: stel je maakt een site over digital marketing. Je pillar page is "Complete Digital Marketing Gids"—een 5000-woord comprehensive resource. Je cluster pages zijn specifieke aspecten: "Email Marketing voor Beginners", "Social Media Advertising ROI", "SEO Content Optimalisatie", "PPC Campaign Management". Elk cluster article linkt terug naar de pillar, en de pillar linkt naar alle clusters. Dit web van interne links + topical relevantie = Google geeft je meer autoriteit.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Van Keyword Focus naar Topic Authority</h3>
            
            <p>
              Oude SEO was keyword-focused: rank voor "email marketing tips", "email marketing tools", "email marketing strategy"—drie separate articles, weinig connections. Topic cluster SEO is authority-focused: één pillar "Email Marketing Complete Gids" dat alle aspecten covers op high level, met 15 cluster pages die elk aspect deep-diven. Google's algoritme waardeert comprehensive coverage. Je rankt niet alleen voor je target keywords, maar voor honderden gerelateerde long-tail keywords waar je niet eens voor optimaliseerde.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Content Cluster Generator Gebruiken</h4>
            
            <p>
              Deze content cluster tool elimineert het manuele werk van cluster planning. Normaal zou je uren spenderen aan keyword research, subtopic brainstormen, en structuur bepalen. Nu voer je je main topic in, de AI analyseert het en genereert een complete cluster structure: één pillar met duidelijke scope, 8-12 cluster topics die elk een unieke angle dekken, plus keyword suggesties per piece. Het is je content roadmap—je weet precies welke artikelen te schrijven en hoe ze interconnecteren.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Pillar Page Best Practices</h4>
            
            <p>
              Je pillar page moet comprehensive maar niet overwhelming zijn. Aim voor 3000-5000 woorden die het topic op high level coveren. Gebruik veel H2/H3 subheadings—elk subheading wordt een cluster topic kandidaat. Include een table of contents bovenaan die linkt naar sections. Aan het einde van elke section, link naar het relevante cluster article voor "meer details". De pillar is het hub, clusters zijn spokes. Gebruikers kunnen de pillar skimmen en deep-diven in clusters die hen interesseren.
            </p>

            <p>
              Combineer met <Link href="/tools/keyword-suggestion-tool" className="text-blue-600 hover:underline">keyword research</Link> en <Link href="/tools/url-slug-generator" className="text-blue-600 hover:underline">URL slugs</Link> voor complete implementatie.
            </p>
          </div>
        </div>

        {/* SEO Content Section 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Clusters Bouwen: Step-by-Step Implementatie</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Een topic cluster implementeren is niet moeilijk maar vereist systematiek. Start met deze tool om je cluster te plannen. Dan volg je een structured rollout. Schrijf eerst de pillar—dit is je foundation. Zonder sterke pillar kunnen clusters niet succesvol zijn. De pillar moet standalone value hebben, geen vage overview. Daarna schrijf je clusters één voor één, met telkens internal links terug naar de pillar en naar gerelateerde clusters.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Fase 1: Cluster Planning met AI</h3>
            
            <p>
              Gebruik deze AI topic cluster builder als startpunt. Voer je main topic in—iets waar je expertise in hebt en waar search volume is. De tool genereert pillar + clusters. Review de output kritisch: Dekt de pillar het hele topic? Zijn clusters distinct genoeg (geen overlap)? Heb je expertise om over elk cluster te schrijven? Pas aan waar nodig. Misschien split je één cluster in twee, of merge je overlappende topics. AI geeft foundation, jij finaliseert strategie.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Fase 2: Pillar Content Creatie</h4>
            
            <p>
              Je pillar page is 3000-5000 woorden comprehensive content. Structuur is key: Open met een definitie van het topic + waarom het belangrijk is. Dan secties per main aspect—elk aspect wordt later een cluster. Bijv pillar "Content Marketing Strategie" heeft secties: "Content Planning", "Content Creatie", "Content Distributie", "Content Analytics". Elke sectie is 500-800 woorden—genoeg voor overzicht, niet genoeg voor complete coverage. Einde van sectie: "Learn more in our [detailed guide]" → link naar cluster.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Fase 3: Cluster Content Rollout</h4>
            
            <p>
              Nu schrijf je de cluster pages. Elk cluster is 1500-2500 woorden focused op dat specifieke subtopic. Gebruik de keywords die de tool suggereerde in je H1, URL, en throughout content. Cruciale elementen: (1) Intro die linkt naar pillar voor context, (2) Deep-dive content op dat aspect, (3) Outro die linkt naar related clusters. Bijv cluster "Email Subject Lines" linkt naar pillar "Email Marketing Gids" en naar clusters "Email Copywriting" en "Email A/B Testing". Dit web van links is het cluster's power.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Internal Linking Architecture</h3>
            
            <p>
              Internal linking maakt of breekt je cluster. Regels: (1) Pillar linkt naar alle clusters in relevante secties, (2) Elke cluster linkt terug naar pillar (meestal in intro + outro), (3) Clusters linken naar gerelateerde clusters waar relevant. Gebruik descriptive anchor text met je target keywords. "Click here" is slecht, "Learn about email segmentation strategies" is goed. Google's algoritme volgt deze links en begrijpt je topical relationships. Hoe meer connections, hoe sterker je authority signal.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Optimaliseren Na Launch</h4>
            
            <p>
              Clusters zijn niet set-and-forget. Monitor welke cluster pages het beste ranken. Vaak rank je voor keywords waar je niet op optimaliseerde—dit is het cluster effect. Update je pillar met links naar best-performing clusters prominent. Als bepaalde clusters weak presteren, revisit de content: voeg meer depth toe, optimize internal links, of merge met sterkere clusters. Expand je cluster door nieuwe subtopics toe te voegen—elke cluster addition versterkt je totale authority.
            </p>

            <p>
              Gebruik <Link href="/tools/anchor-text-generator" className="text-blue-600 hover:underline">anchor text variaties</Link> en <Link href="/tools/meta-description-generator" className="text-blue-600 hover:underline">meta descriptions</Link> per cluster page.
            </p>
          </div>
        </div>

        {/* SEO Content Section 3 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Topic Cluster Strategie voor Verschillende Niches</h2>
          
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Topic clusters werken in elke niche maar de structuur varieert. Een B2B SaaS company heeft andere cluster needs dan een lifestyle blog. De AI tool past zich aan jouw industry aan wanneer je die invult. Laten we verschillende niche-specifieke cluster strategieën verkennen zodat je begrijpt hoe je deze tool maximaal gebruikt.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">E-commerce Topic Clusters</h3>
            
            <p>
              Voor e-commerce, denk aan product category als pillar. Pillar: "Running Shoes Buying Guide". Clusters: "Best Running Shoes for Beginners", "Trail Running Shoe Reviews", "Running Shoe Sizing Guide", "How to Choose Running Shoes for Marathon Training", "Running Shoe Maintenance Tips". Elk cluster target transactional + informational keywords. De pillar ranks breed, clusters rank niche long-tail. Samen domineer je alle "running shoes" related searches.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">SaaS & B2B Clusters</h4>
            
            <p>
              B2B SaaS gebruikt clusters voor thought leadership + lead generation. Pillar: "CRM Implementation Guide". Clusters gaan dieper: "CRM Migration Best Practices", "CRM Adoption Strategies", "CRM ROI Calculation", "CRM Integration with Marketing Tools", "CRM Training Programs". Elk cluster bevat gated content offers (ebooks, webinars) for leads. Clusters attracteren verschillende buyer personas—sales teams, IT managers, executives—zodat je comprehensive lead funnel hebt via één topic cluster.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Service Business Clusters</h4>
            
            <p>
              Local service businesses (plumbers, accountants, lawyers) gebruiken clusters voor local SEO. Pillar: "Complete Tax Planning Guide [City Name]". Clusters: "Small Business Tax Deductions", "Self-Employed Tax Tips", "Tax Preparation Checklist", "IRS Audit Defense". Combineer topic authority met local relevance door city name te embedden in pillar + key clusters. Dit domineert local pack rankings want je hebt meer comprehensive content dan concurrent's single service pages.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Multi-Cluster Strategie</h3>
            
            <p>
              Advanced tactic: multiple clusters die interconnecteren. Als je site groot is, heb je meerdere pillar pages elk met eigen cluster. Belangrijke strategie: link tussen pillars waar relevant. Bijv pillar "Email Marketing" kan linken naar pillar "Content Marketing" in sectie over content distribution via email. Dit creëert een semantic web across je hele site. Google ziet je als authority niet slechts op één topic maar op meerdere interconnected topics.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-5 mb-3">Cluster Expansion Over Time</h4>
            
            <p>
              Start met één cluster (pillar + 8-10 articles). Wanneer die start ranken, expand. Voeg sub-clusters toe: een cluster page wordt zelf een mini-pillar met eigen sub-pages. Bijv cluster "Email Segmentation" groeit naar mini-cluster met "Behavioral Segmentation", "Demographic Segmentation", "Psychographic Segmentation" sub-pages. Dit is scalable SEO—continue expansion maintaining topical relevance. Grote authority sites hebben 50+ clusters interconnected in massive semantic network.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoeveel cluster topics moet ik per pillar hebben?</h3>
              <p className="text-gray-700">
                Minimum 6-8 clusters, maximum 15-20. Minder dan 6 en je cluster effect is zwak—niet genoeg topical coverage. Meer dan 20 en je pillar wordt te breed, moeilijk om comprehensive te blijven. Sweet spot is 10-12 clusters. Dat geeft voldoende coverage zonder je pillar te overweldigen. Start met 8, expand naar 12+ zodra je eerste batch content rankt en je ziet welke subtopics meer depth nodig hebben.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moet ik eerst alle clusters schrijven voordat ik publish?</h3>
              <p className="text-gray-700">
                Nee, staggered rollout is beter. Publish de pillar first—dit is je foundation. Dan release één cluster per week. Dit geeft voordelen: (1) Google ziet consistent nieuwe content op je site = activity signal, (2) Je kunt early rankings observeren en strategie aanpassen, (3) Je vermijdt burnout—12 artikelen tegelijk schrijven is overwhelming. Start met pillar + 3 strongest clusters, dan expand. Cluster effect groeit as you add meer interconnected content.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoe lang duurt het voordat een topic cluster rankt?</h3>
              <p className="text-gray-700">
                Verwacht 3-6 maanden voor significante results. Topic clusters zijn long-game SEO. Google moet jouw content crawlen, understand je topical relationships, en je authority evalueren versus competitors. First 2-3 maanden zie je kleine movement—cluster pages ranken voor long-tail terms. Month 4-6 start de pillar ranken voor competitive terms as Google recongniseert je comprehensive coverage. Consistent internal linking updates en nieuwe cluster additions accelerate dit proces.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik bestaande content omzetten naar een topic cluster?</h3>
              <p className="text-gray-700">
                Absoluut! Dit is vaak effectiever dan from-scratch starten. Audit je bestaande content—find articles rond hetzelfde broad topic. Designate één (of schrijf nieuw) als pillar, de rest worden clusters. Update elke piece met internal links naar de pillar en tussen clusters. Reoptimize titles/descriptions met cluster keywords. Update content om gaps te vullen—misschien heb je 5 clusters maar need 10 voor comprehensive coverage. Dit "clusteriseren" van existing content geeft snelle SEO boost.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Moet elke cluster exact even lang zijn?</h3>
              <p className="text-gray-700">
                Nee, cluster length varieert based on complexity. Simpel cluster "Email Subject Line Length" is 1200 woorden. Complex cluster "Email Deliverability Optimization" is 3000 woorden. Let pillar be 2-3x je average cluster length. Belangrijker dan length is depth—elk cluster moet comprehensive zijn op z'n specifieke subtopic. Avoid dunne content. Better 8 meaty clusters (2000 woorden each) dan 15 shallow clusters (800 woorden). Quality over quantity in cluster building.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Topic Cluster Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p>• <strong>Pillar scope:</strong> Broad maar focused op één main topic</p>
              <p>• <strong>Cluster distinctness:</strong> Elk cluster unieke angle, no overlap</p>
              <p>• <strong>Internal links:</strong> Pillar ↔ clusters, clusters ↔ clusters</p>
              <p>• <strong>Keyword mapping:</strong> Unieke keywords per piece</p>
              <p>• <strong>Content depth:</strong> Elk piece comprehensive op z'n level</p>
            </div>
            <div className="space-y-2">
              <p>• <strong>Descriptive anchors:</strong> Keyword-rich internal link text</p>
              <p>• <strong>User journey:</strong> Can users navigate cluster logically?</p>
              <p>• <strong>Mobile optimization:</strong> Clusters readable op mobile</p>
              <p>• <strong>Update cadence:</strong> Refresh clusters regelmatig</p>
              <p>• <strong>Performance tracking:</strong> Monitor which clusters rank best</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
