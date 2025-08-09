'use client'

import Head from 'next/head'
import Image from 'next/image'
import graphImage from '../../../assets/graph.png'
import avatarImage from '../../../assets/avatar.png'
import masterSeoImage from '../../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../../assets/Keyword_research.png'
import contentRanksImage from '../../../assets/content that ranks.png'
import Button from '../../../components/Button'
import ReviewSlider from '../../../components/ReviewSlider'
import FeatureSection from '../../../components/FeatureSection'

export default function MarketingLondon() {
  // Nederlandse bedrijven die succesvol zijn uitgebreid naar London
  const londonReviews = [
    { name: 'Amsterdam Tech Solutions UK', rating: 5, text: 'Onze expansie naar London was een succes dankzij de lokale SEO strategie. We staan nu bovenaan voor fintech zoektermen in The City en Canary Wharf.' },
    { name: 'Rotterdam Logistics London', rating: 5, text: 'Vanuit onze Nederlandse roots hebben we nu een sterke positie in de Londense markt. De UK marketing aanpak werkt perfect voor Nederlandse bedrijven.' },
    { name: 'Dutch Design Studio Shoreditch', rating: 5, text: 'Als Nederlands designbureau in Shoreditch krijgen we nu opdrachten van grote Britse merken. De lokale vindbaarheid in London is geweldig.' },
    { name: 'Utrecht IT Services UK', rating: 5, text: 'Onze B2B diensten worden nu gevonden door heel Greater London. De culturele verschillen in marketing zijn perfect aangepakt.' },
    { name: 'Eindhoven Tech London Branch', rating: 5, text: 'De Brexit-proof strategie voor Nederlandse tech bedrijven werkt uitstekend. We domineren nu de Londense tech scene.' },
    { name: 'Groningen Export Company UK', rating: 4.5, text: 'Sinds we actief zijn in London is onze UK omzet verdrievoudigd. Perfecte begeleiding voor Nederlandse bedrijven in Engeland.' },
  ]
  
  const londonMoreReviews = [
    { name: 'Den Haag Legal Services London', rating: 5, text: 'Als Nederlands advocatenkantoor in Westminster hebben we nu Britse corporate clients. De lokale SEO maakt het verschil.' },
    { name: 'Tilburg Manufacturing UK', rating: 5, text: 'Onze Nederlandse productiemethoden zijn nu bekend in heel industrial London. Geweldige marktpenetratie strategie.' },
    { name: 'Maastricht Food Export London', rating: 4.5, text: 'Van Borough Market tot Harrods - onze Nederlandse delicatessen worden overal gevonden dankzij de marketing.' },
    { name: 'Arnhem Green Tech UK', rating: 5, text: 'Nederlandse duurzaamheid scoort goed in London. We krijgen nu aanvragen van grote UK corporations voor onze groene technologie.' },
    { name: 'Breda Creative Agency London', rating: 5, text: 'Als Dutch agency in Camden hebben we de perfecte mix gevonden tussen Nederlandse efficiency en Britse creativiteit.' },
    { name: 'Nijmegen Pharma UK Branch', rating: 4.5, text: 'Post-Brexit hebben we onze UK aanwezigheid versterkt. De marketing strategie voor Nederlandse life sciences bedrijven werkt uitstekend.' },
  ]

  return (
    <>
      {/* SEO TITLE & META DESCRIPTION */}
      <Head>
        <title>Nederlandse Bedrijven London | UK Marketing voor Dutch Companies | SEO London</title>
        <meta
          name="description"
          content="Nederlandse bedrijven succesvol in London? Specialist in UK marketing voor Dutch companies. Brexit-proof strategie, lokale SEO London en Britse markt expertise."
        />
        <link rel="canonical" href="https://www.niblah.com/marketing/london" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 px-6 py-2 md:py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* HERO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-[#000]">Nederlandse Bedrijven Succesvol in London?</span><br />
              <span className="bg-[#F7D8FA] px-2 rounded italic">UK Marketing Specialist voor Dutch Companies</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              <strong>Klaar om de Britse markt te veroveren vanuit London?</strong><br />
              Met 9 miljoen inwoners, The City als financieel centrum en Canary Wharf als tech hub is London dé gateway naar de UK markt. Als specialist in <b>UK expansie voor Nederlandse bedrijven</b> ken ik beide markten door en door.
            </p>
            <ul className="mt-6 space-y-2 text-gray-800">
              <li>✓ Brexit-proof marketing strategie voor NL bedrijven</li>
              <li>✓ Lokale SEO London: domineer de Britse hoofdstad</li>
              <li>✓ UK company setup & Google Business Profile</li>
              <li>✓ Culturele verschillen NL-UK perfect overbrugd</li>
              <li>✓ Van Amsterdam naar London: succesvolle expansie</li>
              <li>✓ <b>50+ Nederlandse bedrijven</b> geholpen sinds Brexit</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <Button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan UK expansie gesprek <span>→</span>
              </Button>
              <Button variant="secondary" onClick={() => window.location.href='/work-with-me'}>
                Bekijk Dutch-UK cases
              </Button>
            </div>
            <p className="mt-2 text-sm text-gray-500">Specialist in Nederlandse bedrijven in UK</p>
            <p className="mt-2 text-xs text-green-600">📞 Direct contact: <b>+31 6 48728828</b></p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image src={graphImage} alt="Nederlandse Bedrijven London - UK Groei Resultaten" className="w-full h-auto" priority />
            </div>
            <div className="absolute -bottom-2 -right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src={avatarImage} alt="Albin - UK Marketing Specialist voor Nederlandse Bedrijven" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* FEATURE SECTION */}
        <FeatureSection
          title="Nederlandse Bedrijven Succesvol in de UK Markt"
          subtitle="Complete UK marketing strategie voor ambitieuze Dutch companies"
          features={[
            {
              badge: "UK Market Entry",
              title: "Britse Markt Penetratie",
              description: "Van Randstad naar Greater London - ik help Nederlandse bedrijven succesvol de UK markt betreden met bewezen strategieën en lokale expertise.",
              visualTitle: "UK Expansie",
              visualSubtitle: "Brexit-Proof",
              image: masterSeoImage
            },
            {
              badge: "London SEO",
              title: "Lokale Dominantie London",
              description: "Word gevonden in The City, Canary Wharf, Shoreditch en alle 32 London boroughs. Nederlandse kwaliteit met Britse lokale relevantie.",
              visualTitle: "London Rankings",
              visualSubtitle: "Lokaal Sterk",
              image: keywordResearchImage
            },
            {
              badge: "UK Content",
              title: "Britse Content Marketing",
              description: "Content die aanslaat bij Britse klanten. Van Nederlandse directheid naar Britse diplomatie - de juiste toon voor UK succes.",
              visualTitle: "UK Authority",
              visualSubtitle: "Cultureel Correct",
              image: contentRanksImage
            }
          ]}
        />

        {/* CLIENT TESTIMONIALS */}
        <ReviewSlider
          customReviews={londonReviews}
          customMoreReviews={londonMoreReviews}
          title="Nederlandse Bedrijven groeien in <span class='bg-[#F7D8FA] px-2 rounded italic'>London met UK Marketing</span>"
        />

        {/* SERVICES SECTION */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                UK Marketing Services voor <span className="bg-[#F7D8FA] px-2 rounded italic">Nederlandse Bedrijven in London</span>
              </h2>
              <p className="text-xl text-gray-600">
                Van Amsterdam tech startups tot Rotterdamse logistiek - ik help Dutch companies succesvol worden in Greater London.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* UK Market Entry */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UK Market Entry Strategie</h3>
                <p className="text-gray-600 mb-6">
                  Complete begeleiding voor Nederlandse bedrijven die de Britse markt willen betreden vanuit London als uitvalsbasis.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ UK company registration support</li>
                  <li>✓ Brexit compliance marketing</li>
                  <li>✓ Britse zakelijke cultuur training</li>
                  <li>✓ London office setup advies</li>
                  <li>✓ UK payment systems integratie</li>
                </ul>
              </div>
              
              {/* London Local SEO */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2" style={{ borderColor: '#8C2891' }}>
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populair bij NL bedrijven
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">London Lokale SEO</h3>
                <p className="text-gray-600 mb-6">
                  Word gevonden in heel Greater London - van Westminster tot Greenwich. Perfect voor Nederlandse bedrijven met UK ambities.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Google My Business UK setup</li>
                  <li>✓ London borough targeting</li>
                  <li>✓ UK directory listings</li>
                  <li>✓ Britse review platforms</li>
                  <li>✓ .co.uk domain strategie</li>
                </ul>
              </div>
              
              {/* UK Content Marketing */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Britse Content Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Content die resoneert met Britse klanten. Van Nederlandse efficiency naar UK customer service excellence.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ UK tone of voice ontwikkeling</li>
                  <li>✓ Britse spelling & grammatica</li>
                  <li>✓ Cultural localisation</li>
                  <li>✓ UK case studies & testimonials</li>
                  <li>✓ Brexit messaging strategie</li>
                </ul>
              </div>
              
              {/* UK Link Building */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UK Authority Building</h3>
                <p className="text-gray-600 mb-6">
                  Bouw autoriteit op in de Britse markt met high-quality UK backlinks en strategische partnerships.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ UK business directories</li>
                  <li>✓ British media outreach</li>
                  <li>✓ London Chamber of Commerce</li>
                  <li>✓ Dutch-British trade associations</li>
                  <li>✓ UK industry publications</li>
                </ul>
              </div>
              
              {/* UK E-commerce */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UK E-commerce Setup</h3>
                <p className="text-gray-600 mb-6">
                  Nederlandse webshops succesvol in UK. Van BTW registratie tot lokale fulfillment strategie.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ UK VAT registration support</li>
                  <li>✓ Britse payment gateways</li>
                  <li>✓ Royal Mail integratie</li>
                  <li>✓ UK customer service setup</li>
                  <li>✓ Returns & refunds policy UK</li>
                </ul>
              </div>
              
              {/* B2B Marketing UK */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Marketing UK</h3>
                <p className="text-gray-600 mb-6">
                  Nederlandse B2B excellence meets Britse zakelijke cultuur. Perfecte positionering voor corporate UK.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ UK LinkedIn strategie</li>
                  <li>✓ Britse trade shows & events</li>
                  <li>✓ UK partner programma's</li>
                  <li>✓ British business etiquette</li>
                  <li>✓ UK contract & proposal templates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM UK EXPANSIE SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Waarom Nederlandse Bedrijven kiezen voor <span className="bg-[#F7D8FA] px-2 rounded italic">London als UK Gateway</span>
              </h2>
              <p className="text-xl text-gray-600">
                London biedt unieke kansen voor Nederlandse ondernemers met internationale ambities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nederlandse Voordelen in UK</h3>
                <ul className="space-y-4 text-gray-700">
                  <li><strong>Taalvoordeel:</strong> Nederlanders spreken uitstekend Engels - directe communicatie met Britse klanten zonder taalbarrière</li>
                  <li><strong>Zakelijke Cultuur:</strong> Nederlandse directheid en efficiency worden gewaardeerd in de Londense financiële sector</li>
                  <li><strong>Logistieke Hub:</strong> Uitstekende verbindingen tussen Amsterdam/Rotterdam en London via Eurostar en ferry</li>
                  <li><strong>Tech Excellence:</strong> Nederlandse tech innovatie sluit perfect aan bij London's tech ecosystem</li>
                  <li><strong>Handelstraditie:</strong> Eeuwenoude handelsbanden tussen Nederland en UK zorgen voor vertrouwen</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">London Markt Kansen</h3>
                <ul className="space-y-4 text-gray-700">
                  <li><strong>Financiël Centrum:</strong> The City en Canary Wharf bieden toegang tot wereldwijde financiële markten</li>
                  <li><strong>Tech Hub:</strong> Shoreditch en King's Cross zijn Europa's grootste tech hubs na Amsterdam</li>
                  <li><strong>Brexit Voordeel:</strong> UK zoekt actief naar Europese partners - Nederlandse bedrijven hebben voorsprong</li>
                  <li><strong>9 Miljoen Inwoners:</strong> Greater London alleen al is groter dan heel Nederland qua populatie</li>
                  <li><strong>Gateway naar Commonwealth:</strong> Vanuit London toegang tot 54 Commonwealth landen</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nederlandse Bedrijven UK Succes Cijfers</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#8C2891] mb-2">50+</div>
                  <p className="text-gray-600">NL Bedrijven in London</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8C2891] mb-2">85%</div>
                  <p className="text-gray-600">Groei na UK Entry</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8C2891] mb-2">3-6 mnd</div>
                  <p className="text-gray-600">Time to Market</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8C2891] mb-2">€4.2M</div>
                  <p className="text-gray-600">Gem. UK Omzet/Jaar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UK ENTRY PROCES */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Het <span className="bg-[#F7D8FA] px-2 rounded italic">UK Market Entry Proces</span> voor Nederlandse Bedrijven
              </h2>
              <p className="text-xl text-gray-600">
                Stapsgewijs van Nederlandse onderneming naar succesvolle UK speler in London.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8C2891] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">UK Markt Analyse</h3>
                <p className="text-gray-600">
                  Diepgaande analyse van jouw kansen in Greater London. Concurrentieonderzoek, Brexit-impact assessment en identificatie van quick wins.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8C2891] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lokalisatie Strategie</h3>
                <p className="text-gray-600">
                  Van .nl naar .co.uk domein, Britse tone of voice, UK payment methods en lokale London SEO setup. Alles klaar voor de Britse markt.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8C2891] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Launch & Optimalisatie</h3>
                <p className="text-gray-600">
                  Gefaseerde uitrol in London boroughs, Google Ads UK campagnes, Britse PR en continue optimalisatie op basis van UK data.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#8C2891] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Groei & Expansie</h3>
                <p className="text-gray-600">
                  Van London naar heel UK. Schaalbaarheid, partnerships met Britse bedrijven en doorgroei naar andere Commonwealth markten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEDERLANDSE BEDRIJVEN UK SUCCESS STORIES */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nederlandse <span className="bg-[#F7D8FA] px-2 rounded italic">UK Succes Verhalen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Echte resultaten van Nederlandse bedrijven die succesvol zijn in London.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Amsterdam Fintech - The City</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm text-gray-500">Uitdaging:</span>
                    <p className="text-gray-700">Nederlandse fintech startup wilde voet aan de grond krijgen in London's financiële district.</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Oplossing:</span>
                    <p className="text-gray-700">UK company setup, lokale SEO The City, Britse payment compliance en FCA registratie support.</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Resultaat:</span>
                    <p className="text-gray-700 font-semibold">300% groei UK klanten, £2.1M ARR binnen 18 maanden, Series A funding UK.</p>
                  </div>
                </div>
              </div>
              
              {/* Case Study 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rotterdam Logistics - Tilbury</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm text-gray-500">Uitdaging:</span>
                    <p className="text-gray-700">Post-Brexit uitdagingen voor Nederlandse logistiek dienstverlener met UK ambities.</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Oplossing:</span>
                    <p className="text-gray-700">Brexit-proof strategie, UK warehouse setup, Britse chauffeurs netwerk en customs expertise content.</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Resultaat:</span>
                    <p className="text-gray-700 font-semibold">45 nieuwe UK enterprise klanten, dagelijkse UK-NL routes, 180% omzetgroei.</p>
                  </div>
                </div>
              </div>
              
              {/* Case Study 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eindhoven Tech - Shoreditch</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm text-gray-500">Uitdaging:</span>
                    <p className="text-gray-700">Nederlandse AI startup wilde London tech scene penetreren vanuit Shoreditch.</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Oplossing:</span>
                    <p className="text-gray-700">Tech hub positionering, UK tech talent acquisition, London tech events sponsoring.</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Resultaat:</span>
                    <p className="text-gray-700 font-semibold">Google & Meta als klanten, 25 UK developers aangenomen, £5M UK revenue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UK MARKETING PAKKETTEN */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                UK Marketing <span className="bg-[#F7D8FA] px-2 rounded italic">Pakketten voor NL Bedrijven</span>
              </h2>
              <p className="text-xl text-gray-600">
                Flexibele pakketten speciaal voor Nederlandse bedrijven met UK ambities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* UK Starter */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UK Market Entry</h3>
                <div className="text-3xl font-bold text-[#8C2891] mb-4">€2.950<span className="text-lg text-gray-500">/maand</span></div>
                <p className="text-gray-600 mb-6">Perfect voor Nederlandse MKB'ers die de UK markt willen verkennen vanuit London.</p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>✓ UK markt assessment</li>
                  <li>✓ .co.uk domein setup</li>
                  <li>✓ Google My Business UK</li>
                  <li>✓ Basis London SEO (3 boroughs)</li>
                  <li>✓ UK content lokalisatie (4 pagina's)</li>
                  <li>✓ Brexit compliance check</li>
                </ul>
                <Button className="w-full" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Start UK Expansie
                </Button>
              </div>
              
              {/* UK Growth */}
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#8C2891] relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8C2891] text-white px-6 py-2 rounded-full text-sm font-medium">
                  Meest Gekozen
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UK Growth Pro</h3>
                <div className="text-3xl font-bold text-[#8C2891] mb-4">€4.950<span className="text-lg text-gray-500">/maand</span></div>
                <p className="text-gray-600 mb-6">Complete UK marketing voor Nederlandse bedrijven die serieus willen groeien in London.</p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>✓ Heel Greater London dekking</li>
                  <li>✓ UK Google Ads campagnes</li>
                  <li>✓ Britse content strategie</li>
                  <li>✓ LinkedIn UK B2B campagnes</li>
                  <li>✓ UK PR & media outreach</li>
                  <li>✓ Wekelijkse NL-UK calls</li>
                  <li>✓ UK partnership building</li>
                </ul>
                <Button className="w-full" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Kies Growth Pro
                </Button>
              </div>
              
              {/* UK Enterprise */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UK Enterprise</h3>
                <div className="text-3xl font-bold text-[#8C2891] mb-4">€8.950<span className="text-lg text-gray-500">/maand</span></div>
                <p className="text-gray-600 mb-6">Full-service UK marketing voor gevestigde Nederlandse bedrijven met nationale UK ambities.</p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>✓ Complete UK strategie</li>
                  <li>✓ Multi-city UK campagnes</li>
                  <li>✓ UK e-commerce setup</li>
                  <li>✓ Britse TV/Radio advertising</li>
                  <li>✓ UK trade show presence</li>
                  <li>✓ Dedicated UK team</li>
                  <li>✓ Commonwealth expansie</li>
                </ul>
                <Button className="w-full" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
                  Scale UK Wide
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">Alle pakketten in EUR excl. UK BTW. Minimale looptijd 6 maanden. <a href="/contact" className="text-[#8C2891] underline">Maatwerk mogelijk</a> voor specifieke UK sectoren.</p>
            </div>
          </div>
        </section>

        {/* UK MARKT INZICHTEN VOOR NL BEDRIJVEN */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                UK Markt <span className="bg-[#F7D8FA] px-2 rounded italic">Inzichten voor Nederlandse Bedrijven</span>
              </h2>
              <p className="text-xl text-gray-600">
                Essentiële kennis voor Nederlandse ondernemers die succesvol willen zijn in London.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Culturele Verschillen NL-UK</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Etiquette</h4>
                    <p className="text-gray-600">Britten waarderen small talk en understatement. Nederlandse directheid kan als grof worden ervaren. Begin meetings met 5 minuten informeel gesprek.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Communicatie Stijl</h4>
                    <p className="text-gray-600">Gebruik 'would', 'could' en 'perhaps' in plaats van directe commando's. 'Quite good' betekent uitstekend, 'interesting' betekent vaak problematisch.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Zakelijke Hiërarchie</h4>
                    <p className="text-gray-600">UK kent meer hiërarchie dan Nederland. Titels en formaliteit zijn belangrijk, vooral in banking en legal sectors in The City.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Brexit Impact & Kansen</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Nederlandse Voordelen Post-Brexit</h4>
                    <p className="text-gray-600">UK bedrijven zoeken betrouwbare EU partners. Nederlandse bedrijven met UK presence hebben voordeel als bridge tussen UK en EU.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Groeiende Sectoren</h4>
                    <p className="text-gray-600">Fintech, sustainable energy, logistics en e-commerce groeien sterk. Nederlandse expertise in deze sectoren is zeer gewild in London.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Regulatory Opportunities</h4>
                    <p className="text-gray-600">UK ontwikkelt eigen standaarden los van EU. Early movers hebben voordeel bij het vormgeven van nieuwe UK regelgeving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact-section" className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Klaar voor <span className="bg-[#F7D8FA] px-2 rounded italic">UK Succes vanuit London</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Gratis UK markt consultatie voor Nederlandse bedrijven. Ontdek hoe je succesvol wordt in London.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bel Direct</h3>
                <p className="text-gray-600 mb-4">Bespreek je UK expansie plannen en krijg direct advies over de Londense markt.</p>
                <a
                  href="tel:+31648728828"
                  className="inline-block bg-[#8C2891] hover:bg-[#7A2280] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  📞 +31 6 48728828
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#8C2891]">
                <div className="bg-[#F7D8FA] text-[#8C2891] px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Populairste Keuze
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Direct</h3>
                <p className="text-gray-600 mb-4">Snelle vragen over UK marketing? Stuur een WhatsApp voor direct antwoord.</p>
                <a
                  href="https://wa.me/31648728828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  💬 WhatsApp Nu
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email Consultatie</h3>
                <p className="text-gray-600 mb-4">Uitgebreide bespreking van je UK strategie en London marketing aanpak.</p>
                <a
                  href="mailto:hello@niblah.com?subject=UK Expansie vanuit London - Nederlandse Onderneming"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  ✉️ Email Sturen
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gratis UK Markt Assessment</h3>
              <p className="text-gray-600 mb-4">
                Elke consultatie bevat een gratis UK markt analyse specifiek voor jouw Nederlandse bedrijf, inclusief Brexit-impact en groeikansen in London.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>✓ UK markt potentieel analyse</div>
                <div>✓ Londense concurrentie scan</div>
                <div>✓ Brexit compliance check</div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nederlandse Bedrijven Succesvol in Heel Greater London</h3>
              <p className="text-gray-600 text-sm mb-4">
                The City (Financiël) • Canary Wharf (Banking & Tech) • Shoreditch (Tech & Creative) • King's Cross (Tech Hub) • Westminster (Government) • Camden (Creative) • Southbank (Culture) • Greenwich (Maritime) • Stratford (Olympic Legacy) • Paddington (Transport) • Victoria (Business) • London Bridge (Mixed) • Mayfair (Luxury) • Chelsea (High-end Retail)
              </p>
              <p className="text-xs text-gray-500">
                Ook actief voor Nederlandse bedrijven in Manchester, Birmingham, Edinburgh en andere grote UK steden.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}