import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'Technical SEO | Website Optimization for Better Rankings | Niblah',
      description:
        'Technical SEO optimization that works. Improve crawlability, speed, and Core Web Vitals for higher rankings in Google. More traffic and better conversions.',
      keywords: 'technical seo, website optimization, core web vitals, crawlability, site speed',
      openGraph: {
        title: 'Technical SEO | Niblah',
        description: 'Technical SEO improvements that increase rankings and conversions.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'A website that is technically perfect and converts',
      title: 'Technical SEO',
      description:
        'Want a website that works flawlessly and contributes to higher rankings in Google? Our technical SEO specialists optimize crawlability, speed, and Core Web Vitals for maximum visibility. The result: more organic traffic, better user experience, and higher conversions.',
      ctaText: 'Schedule a free intro',
      ctaLink: '/contact',
      note: '* 78% of websites have technical SEO issues that limit rankings',
      image: '/development-hero.png',
      imageAlt: 'Technical SEO dashboard',
    },
    why: {
      title: {
        prefix: 'Why',
        highlight: 'technical SEO',
        suffix: 'is the foundation for online success',
      },
      paragraphs: [
        'A visually attractive website with great content is nice, but without a solid technical foundation you will never reach full potential in Google. Technical SEO is the base for every other optimization: without correct indexation, no rankings; without speed, no good user experience.',
        'Modern search engines evaluate more technical factors. Google Core Web Vitals, mobile first indexing, and page experience updates make one thing clear: technical excellence is no longer a nice to have, but a must for competitive rankings. Websites that lag behind lose ground to competitors.',
      ],
      lead: 'Technical SEO optimization directly impacts key performance metrics:',
      bullets: [
        'Crawling and indexing: Google can only rank what it can find and understand. Technical blockers keep valuable content out of the index.',
        'Page speed and Core Web Vitals: Speed is a direct ranking factor and heavily affects bounce rates. A one second delay can mean 7% conversion loss.',
        'Quality Score in ads: Technical performance influences your Google Ads Quality Score and therefore your cost per click in paid campaigns.',
      ],
    },
    niblah: {
      title: {
        prefix: 'Why outsource',
        highlight: 'technical SEO',
        suffix: 'to Niblah?',
      },
      subtitle:
        'At Niblah we combine deep technical knowledge with marketing expertise for optimizations that make real impact.',
      cards: [
        {
          title: 'Holistic technical expertise',
          description:
            'Our specialists combine development knowledge with SEO expertise. We understand not only what Google wants to see, but also how to implement it in your platform. From crawl budget optimization to JavaScript rendering and schema markup.',
        },
        {
          title: 'Data driven diagnostics',
          description:
            'We base diagnoses on real user data from Google Search Console and Chrome User Experience Report, not on automated tool output. Each recommendation is backed by hard data and business impact so you prioritize on ROI.',
        },
        {
          title: 'Developer friendly implementation',
          description:
            'Our technical audits come with concrete, detailed implementation instructions developers can execute immediately. We speak their language and think about technical feasibility within your tech stack and resources.',
        },
      ],
    },
    tracks: {
      title: {
        prefix: 'Technical SEO for',
        highlight: 'new and existing websites',
        suffix: '',
      },
      subtitle:
        'Whether you are building a new website or optimizing an existing one - we have the right approach.',
      items: [
        {
          title: 'New website guidance',
          description:
            'For new websites, prevention is better than cure. We guide your development team from day one so technical SEO is implemented correctly. This prevents expensive fixes after launch.',
          items: [
            {
              title: 'Pre launch SEO audit',
              description:
                'We review architecture, URL structure, and technical implementation before the site goes live.',
            },
            {
              title: 'Developer consultancy',
              description:
                'Direct collaboration with your dev team on best practices for crawlability and indexation.',
            },
            {
              title: 'Launch validation',
              description:
                'Post launch monitoring to ensure all technical elements work as intended.',
            },
          ],
        },
        {
          title: 'Existing website optimization',
          description:
            'For existing websites we run a complete technical audit to identify all optimization opportunities. We prioritize issues based on impact and implementation effort.',
          items: [
            {
              title: 'Deep technical audit',
              description:
                'Comprehensive analysis of crawling, indexation, site structure, performance, and Core Web Vitals.',
            },
            {
              title: 'Prioritized roadmap',
              description:
                'Clear action plan with impact scores and estimated ROI for each optimization.',
            },
            {
              title: 'Implementation support',
              description:
                'Hands on guidance during implementation and validation of all technical fixes.',
            },
          ],
        },
      ],
    },
    pillars: {
      title: {
        prefix: 'The 5 pillars of',
        highlight: 'technical SEO auditing',
        suffix: '',
      },
      subtitle:
        'Our technical audits systematically analyze these five critical areas for complete website health.',
      items: [
        {
          number: '01',
          title: 'Crawling & Indexation Optimization',
          paragraphs: [
            'Google crawlers must be able to explore your website efficiently. We analyze crawl budget allocation, identify orphan pages that are not discovered, and remove crawl traps that waste resources. We also validate that all strategic pages are properly indexed and not blocked by robots.txt, noindex tags, or canonicals.',
            'We also review XML sitemap configuration, pagination implementation, and faceted navigation structures that often cause indexation issues. The goal: ensure Google spends crawl budget on your most valuable content.',
          ],
        },
        {
          number: '02',
          title: 'Site Architecture & URL Structure',
          paragraphs: [
            'A logical site structure improves user experience and SEO performance. We evaluate your information architecture, internal linking patterns, and URL hierarchy. Important content should be reachable within three clicks from the homepage for optimal link equity distribution.',
            'We identify redirect chains that reduce crawl efficiency, broken links that waste authority, and duplication issues that dilute rankings. An optimized architecture ensures PageRank flows to conversion critical pages.',
          ],
        },
        {
          number: '03',
          title: 'Core Web Vitals & Page Experience',
          paragraphs: [
            'Google Core Web Vitals are direct ranking factors: Largest Contentful Paint (loading), First Input Delay (interactivity), and Cumulative Layout Shift (visual stability). We analyze real user metrics via Chrome UX Report and pinpoint elements that cause performance bottlenecks.',
            'Common issues include unoptimized images, render blocking JavaScript, inefficient CSS delivery, and heavy third party scripts. We deliver concrete technical fixes with measured impact on Core Web Vitals scores for better rankings and lower bounce rates.',
          ],
        },
        {
          number: '04',
          title: 'Server & Hosting Configuration',
          paragraphs: [
            'Server side performance is often overlooked but critical for SEO. We evaluate Time To First Byte (TTFB), HTTP/2 or HTTP/3 support, compression (Gzip/Brotli), browser caching configuration, and CDN implementation. A slow server sabotages all front end optimizations.',
            'We also analyze security headers (HTTPS, HSTS), mobile serving setup (responsive vs adaptive), and geo targeting configuration for international sites. Correct server setup is fundamental for rankings and user experience.',
          ],
        },
        {
          number: '05',
          title: 'Structured Data & Rich Results',
          paragraphs: [
            'Schema markup helps Google understand your content and can lead to rich results in search - a major competitive advantage. We implement relevant schema types: Product, FAQ, HowTo, Recipe, Review, Article, Organization, and more.',
            'Correct structured data increases click through rates through enhanced SERP features. We validate all markup against Google guidelines to avoid penalties and maximize rich result eligibility for your key landing pages.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'These clients',
        highlight: 'went before you',
        suffix: '',
      },
      subtitle: 'Concrete results from technical SEO optimizations',
      items: [
        {
          initials: 'DW',
          company: 'DigitalWorks',
          label: 'Technical SEO | Core Web Vitals',
          description: 'Complete technical overhaul improved performance and rankings drastically',
          stats: [
            { value: '342%', label: 'more organic traffic' },
            { value: '68%', label: 'faster load time' },
            { value: '89%', label: 'Core Web Vitals pass' },
          ],
        },
        {
          initials: 'EH',
          company: 'EcoHome Solutions',
          label: 'Crawl Optimization | Indexation',
          description: 'Crawl budget optimization unlocked 1000+ new pages for indexation',
          stats: [
            { value: '847%', label: 'more indexed pages' },
            { value: '4.7x', label: 'better crawl efficiency' },
            { value: '267%', label: 'keyword visibility growth' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'This is what',
        highlight: 'our clients say',
        suffix: '',
      },
      subtitle: 'Results that speak for themselves.',
      items: [
        {
          quote:
            'Niblah technical audit was incredibly thorough. They found issues our developers never discovered. Rankings jumped after implementation.',
          name: 'Pieter Klaassen',
        },
        {
          quote:
            'Core Web Vitals were our Achilles heel. Niblah solved it systematically. Now we score green on all metrics and see the impact in traffic.',
          name: 'Daan Mulder',
        },
        {
          quote:
            'Finally technical SEO experts who speak developer language. Their implementation instructions were perfectly documented and immediately actionable.',
          name: 'Sarah Bakker',
        },
      ],
      ratingLabel: 'We score 4.9 on Google from 143 reviews',
    },
    faq: {
      title: {
        prefix: 'Frequently asked',
        highlight: 'questions',
        suffix: '',
      },
      items: [
        {
          question: 'How do I know if my website needs technical improvements?',
          answer:
            'Signals that technical SEO needs attention: declining rankings without content changes, slow page speed, red scores in Google PageSpeed Insights, few indexed pages compared to total pages, or crawl errors in Search Console. A free audit gives direct insight into your technical health.',
        },
        {
          question: 'What is expected from my side for technical SEO?',
          answer:
            'At minimum you need access to Google Search Console and Google Analytics. For implementation we work with your development team or CMS owner. We provide detailed instructions they can execute. Technical knowledge on your side is not required - we bridge the gap between SEO and development.',
        },
        {
          question: 'Why do you use so few tools in technical SEO?',
          answer:
            'Automated tools provide superficial diagnostics without context. They generate long lists of issues but often miss root causes. We use tools for data gathering, but our expertise is in interpretation and prioritization. We analyze your specific site and stack to deliver recommendations that truly drive ROI.',
        },
        {
          question: 'What does technical SEO optimization deliver?',
          answer:
            'Direct benefits: better rankings through improved crawlability and indexation, higher traffic from faster load times and better Core Web Vitals, lower bounce rates and higher conversions from improved UX. Technical SEO is a force multiplier - it strengthens every other SEO and marketing effort.',
        },
        {
          question: 'How fast will I see results from technical SEO changes?',
          answer:
            'Performance improvements (speed, Core Web Vitals) are visible immediately. Ranking impact depends on crawl frequency - for frequently crawled sites within days to weeks, for smaller sites it can take several weeks. We monitor Search Console closely to measure impact and adjust where needed.',
        },
        {
          question: 'Can every website platform be technically optimized?',
          answer:
            'Almost every platform can be optimized, but the level of control varies. Custom builds and platforms like WordPress, Shopify Plus, and headless CMS offer maximum flexibility. Hosted platforms like Squarespace or Wix have more limits. We always analyze your platform first to set realistic expectations for what is technically possible.',
        },
      ],
    },
  },
  nl: {
    metadata: {
      title: 'Technische SEO | Website Optimalisatie voor Betere Rankings | Niblah',
      description:
        'Technische SEO optimalisatie die werkt. Verbeter crawlbaarheid, snelheid en Core Web Vitals voor hogere rankings in Google. Meer traffic en betere conversies.',
      keywords: 'technische seo, website optimalisatie, core web vitals, crawlbaarheid, site snelheid',
      openGraph: {
        title: 'Technische SEO | Niblah',
        description: 'Technische SEO verbeteringen die rankings en conversies verhogen.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Een website die technisch perfect is en converteert',
      title: 'Technische SEO',
      description:
        'Wil je een website die technisch vlekkeloos functioneert en bijdraagt aan hogere rankings in Google? Onze technische SEO specialisten optimaliseren crawlbaarheid, snelheid en Core Web Vitals voor maximale vindbaarheid. Het resultaat: meer organisch traffic, betere gebruikerservaring en hogere conversies.',
      ctaText: 'Plan gratis kennismaking',
      ctaLink: '/contact',
      note: '* 78% van websites heeft technische SEO issues die rankings beperken',
      image: '/development-hero.png',
      imageAlt: 'Technical SEO dashboard',
    },
    why: {
      title: {
        prefix: 'Waarom',
        highlight: 'technische SEO',
        suffix: 'de basis is voor online succes',
      },
      paragraphs: [
        'Een visueel aantrekkelijke website met kwalitatieve content is mooi, maar zonder solide technische foundation bereik je nooit je volledige potentieel in Google. Technische SEO vormt het fundament waarop alle andere optimalisaties bouwen: zonder correcte indexatie geen rankings, zonder snelheid geen goede gebruikerservaring.',
        'Moderne zoekmachines beoordelen websites op steeds meer technische factoren. Google Core Web Vitals, mobile first indexing en page experience updates maken een ding duidelijk: technische excellentie is geen nice to have meer, maar een must have voor competitieve rankings. Websites die technisch achterlopen verliezen terrein aan concurrenten.',
      ],
      lead: 'Technische SEO optimalisatie heeft directe impact op cruciale performance metrics:',
      bullets: [
        'Crawling en indexering: Google kan alleen ranken wat ze kunnen vinden en begrijpen. Technische blokkades zorgen dat waardevolle content nooit in de index belandt.',
        'Pagina snelheid en Core Web Vitals: Snelheid is een directe ranking factor en beinvloedt bounce rates drastisch. Een seconde vertraging kan 7% conversie verlies betekenen.',
        'Quality Score in advertenties: Technische prestaties beinvloeden je Google Ads Quality Score en daarmee je kosten per click in betaalde campagnes.',
      ],
    },
    niblah: {
      title: {
        prefix: 'Waarom',
        highlight: 'technische SEO',
        suffix: 'uitbesteden aan Niblah?',
      },
      subtitle:
        'Bij Niblah combineren we diepgaande technische kennis met marketing expertise voor optimalisaties die echt impact maken.',
      cards: [
        {
          title: 'Holistische technische expertise',
          description:
            'Onze specialisten combineren development kennis met SEO expertise. We begrijpen niet alleen wat Google wil zien, maar ook hoe we dat technisch realiseren binnen jouw platform. Van crawl budget optimalisatie tot JavaScript rendering en schema markup implementatie.',
        },
        {
          title: 'Data gedreven diagnostiek',
          description:
            'We baseren diagnoses op real user data uit Google Search Console en Chrome User Experience Report, niet op geautomatiseerde tool outputs. Elke aanbeveling wordt onderbouwd met harde data en business impact analyse zodat je prioriteert op ROI.',
        },
        {
          title: 'Developer friendly implementatie',
          description:
            'Onze technische audits worden geleverd met concrete, gedetailleerde implementatie instructies die developers direct kunnen uitvoeren. We spreken hun taal en denken mee over de technische haalbaarheid binnen jouw tech stack en resources.',
        },
      ],
    },
    tracks: {
      title: {
        prefix: 'Technische SEO voor',
        highlight: 'nieuwe en bestaande websites',
        suffix: '',
      },
      subtitle:
        'Of je nu een nieuwe website bouwt of een bestaande wilt optimaliseren - wij hebben de juiste aanpak.',
      items: [
        {
          title: 'Nieuwe website begeleiding',
          description:
            'Bij nieuwe websites is preventie beter dan genezen. We begeleiden je development team vanaf dag een om technische SEO correct te implementeren. Dit voorkomt kostbare hersteloperaties na launch.',
          items: [
            {
              title: 'Pre launch SEO audit',
              description:
                'We reviewen architectuur, URL structuur en technische implementatie voordat de website live gaat.',
            },
            {
              title: 'Developer consultancy',
              description:
                'Direct overleg met je development team over best practices voor crawlbaarheid en indexatie.',
            },
            {
              title: 'Launch validation',
              description:
                'Post launch monitoring om te garanderen dat alle technische elementen correct functioneren.',
            },
          ],
        },
        {
          title: 'Bestaande website optimalisatie',
          description:
            'Voor bestaande websites voeren we een complete technische audit uit om alle optimalisatiekansen te identificeren. We prioriteren issues op basis van impact en implementatie effort.',
          items: [
            {
              title: 'Diepgaande technical audit',
              description:
                'Comprehensive analyse van crawling, indexatie, site structure, performance en Core Web Vitals.',
            },
            {
              title: 'Prioritized roadmap',
              description:
                'Duidelijk actieplan met impact scores en geschatte ROI per optimalisatie.',
            },
            {
              title: 'Implementation support',
              description:
                'Hands on begeleiding tijdens implementatie en validatie van alle technische fixes.',
            },
          ],
        },
      ],
    },
    pillars: {
      title: {
        prefix: 'De 5 pijlers van',
        highlight: 'technische SEO auditing',
        suffix: '',
      },
      subtitle:
        'Onze technische audits analyseren systematisch deze vijf kritieke gebieden voor complete website gezondheid.',
      items: [
        {
          number: '01',
          title: 'Crawling en Indexatie Optimalisatie',
          paragraphs: [
            'Google crawlers moeten je website efficient kunnen verkennen. We analyseren crawl budget allocatie, identificeren orphan pages die niet ontdekt worden en elimineren crawl traps die resources verspillen. Daarnaast valideren we of alle strategische paginas correct worden geindexeerd en niet geblokkeerd worden door robots.txt, noindex tags of canonicals.',
            'Ook onderzoeken we XML sitemap configuratie, pagination implementatie en faceted navigation structuren die vaak indexatie problemen veroorzaken. Het doel: garanderen dat Google zijn crawl budget besteedt aan jouw meest waardevolle content.',
          ],
        },
        {
          number: '02',
          title: 'Site Architectuur en URL Structuur',
          paragraphs: [
            'Een logische site structuur verbetert zowel user experience als SEO performance. We evalueren je information architecture, internal linking patterns en URL hierarchie. Belangrijke content moet binnen 3 clicks bereikbaar zijn vanaf de homepage voor optimale link equity distributie.',
            'We identificeren redirect chains die crawl efficiency verminderen, broken links die autoriteit verspillen en duplication issues die rankings verdunnen. Een geoptimaliseerde architectuur zorgt dat PageRank effectief door je site flowt naar conversie kritieke paginas.',
          ],
        },
        {
          number: '03',
          title: 'Core Web Vitals en Page Experience',
          paragraphs: [
            'Google Core Web Vitals zijn directe ranking factoren: Largest Contentful Paint (loading), First Input Delay (interactivity) en Cumulative Layout Shift (visual stability). We analyseren real user metrics via Chrome UX Report en identificeren exact welke elementen performance bottlenecks veroorzaken.',
            'Veelvoorkomende issues: ongeoptimaliseerde images, render blocking JavaScript, inefficient CSS delivery en third party scripts. We leveren concrete technische fixes met gemeten impact op Core Web Vitals scores voor betere rankings en lagere bounce rates.',
          ],
        },
        {
          number: '04',
          title: 'Server en Hosting Configuratie',
          paragraphs: [
            'Server side performance is vaak overlooked maar cruciaal voor SEO. We evalueren Time To First Byte (TTFB), HTTP/2 of HTTP/3 support, compression (Gzip/Brotli), browser caching configuratie en CDN implementatie. Een trage server saboteert alle front end optimalisaties.',
            'Ook analyseren we security headers (HTTPS, HSTS), mobile serving setup (responsive vs adaptive) en geo targeting configuratie voor internationale sites. Correcte server setup is fundamenteel voor rankings en gebruikerservaring.',
          ],
        },
        {
          number: '05',
          title: 'Structured Data en Rich Results',
          paragraphs: [
            'Schema markup helpt Google je content beter begrijpen en kan leiden tot rich results in search - een major competitive advantage. We implementeren relevante schema types: Product, FAQ, HowTo, Recipe, Review, Article, Organization en meer.',
            'Correct geimplementeerde structured data verhoogt click through rates door enhanced SERP features. We valideren alle markup tegen Google richtlijnen om penalties te vermijden en maximaliseren rich result eligibility voor jouw belangrijkste landing pages.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Deze klanten',
        highlight: 'gingen je voor',
        suffix: '',
      },
      subtitle: 'Concrete resultaten van technische SEO optimalisaties',
      items: [
        {
          initials: 'DW',
          company: 'DigitalWorks',
          label: 'Technical SEO | Core Web Vitals',
          description: 'Complete technische overhaul verbeterde performance en rankings drastisch',
          stats: [
            { value: '342%', label: 'meer organisch traffic' },
            { value: '68%', label: 'snellere laadtijd' },
            { value: '89%', label: 'Core Web Vitals pass' },
          ],
        },
        {
          initials: 'EH',
          company: 'EcoHome Solutions',
          label: 'Crawl Optimalisatie | Indexatie',
          description: 'Crawl budget optimalisatie ontsloeg 1000+ nieuwe paginas voor indexatie',
          stats: [
            { value: '847%', label: 'meer geindexeerde paginas' },
            { value: '4.7x', label: 'betere crawl efficiency' },
            { value: '267%', label: 'keyword visibility groei' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Dit is wat',
        highlight: 'onze klanten zeggen',
        suffix: '',
      },
      subtitle: 'Resultaten die spreken voor zich.',
      items: [
        {
          quote:
            'De technische audit van Niblah was ongekend grondig. Ze vonden issues die onze developers nooit hadden ontdekt. Rankings schoten omhoog na implementatie.',
          name: 'Pieter Klaassen',
        },
        {
          quote:
            'Core Web Vitals waren onze achilleshiel. Niblah loste het systematisch op. Nu scoren we groen op alle metrics en zien we het terug in traffic.',
          name: 'Daan Mulder',
        },
        {
          quote:
            'Eindelijk technical SEO experts die developers taal spreken. Hun implementatie instructies waren perfect gedocumenteerd en direct uitvoerbaar.',
          name: 'Sarah Bakker',
        },
      ],
      ratingLabel: 'Wij krijgen een 4.9 op Google uit 143 beoordelingen',
    },
    faq: {
      title: {
        prefix: 'Veelgestelde',
        highlight: 'vragen',
        suffix: '',
      },
      items: [
        {
          question: 'Hoe weet ik of mijn website technisch verbeterd moet worden?',
          answer:
            'Signalen dat technische SEO aandacht nodig heeft: dalende rankings zonder content wijzigingen, trage pagina snelheid, rode scores in Google PageSpeed Insights, weinig geindexeerde paginas tov totaal aantal paginas of crawl errors in Search Console. Een gratis audit geeft direct inzicht in de status van je technical health.',
        },
        {
          question: 'Wat wordt er vanuit mijn kant verwacht bij technische SEO?',
          answer:
            'Minimaal heb je toegang nodig tot Google Search Console en Google Analytics. Voor implementatie werken we samen met jouw development team of CMS beheerder. We leveren gedetailleerde instructies die zij direct kunnen uitvoeren. Technische kennis aan jouw kant is niet vereist - wij bridgen de gap tussen SEO en development.',
        },
        {
          question: 'Waarom gebruiken jullie zo weinig tools bij technische SEO?',
          answer:
            'Automated tools geven superficial diagnostics zonder context. Ze genereren lange lijsten met issues, maar missen vaak de root cause. Wij gebruiken tools voor data gathering, maar onze expertise zit in interpretatie en prioritization. We analyseren de specifieke situatie van jouw website en tech stack om aanbevelingen te doen die echt ROI opleveren.',
        },
        {
          question: 'Wat levert technische SEO optimalisatie op?',
          answer:
            'Directe benefits: betere rankings door verbeterde crawlbaarheid en indexatie, hogere traffic via snellere load times en betere Core Web Vitals, lagere bounce rates en hogere conversies door verbeterde UX. Technical SEO is een force multiplier - het versterkt alle andere SEO en marketing efforts.',
        },
        {
          question: 'Hoe snel zie ik resultaat van technische SEO wijzigingen?',
          answer:
            'Performance verbeteringen (snelheid, Core Web Vitals) zijn onmiddellijk zichtbaar. Ranking impact hangt af van crawl frequency - voor frequently crawled sites binnen dagen tot weken, voor kleinere sites kan het enkele weken duren. We monitoren Search Console nauwkeurig om impact te meten en bij te sturen waar nodig.',
        },
        {
          question: 'Kan elk website platform technisch geoptimaliseerd worden?',
          answer:
            'Vrijwel elk platform kan worden geoptimaliseerd, maar de mate van controle varieert. Custom builds en platforms zoals WordPress, Shopify Plus en headless CMS systemen bieden maximale flexibiliteit. Hosted platforms zoals Squarespace of Wix hebben meer beperkingen. We analyseren altijd eerst je platform om realistische verwachtingen te schetsen over wat technisch haalbaar is.',
        },
      ],
    },
  },
  de: {
    metadata: {
      title: 'Technisches SEO | Website Optimierung fuer bessere Rankings | Niblah',
      description:
        'Technisches SEO das funktioniert. Verbessere Crawlability, Geschwindigkeit und Core Web Vitals fuer hoehere Rankings in Google. Mehr Traffic und bessere Conversions.',
      keywords: 'technisches seo, website optimierung, core web vitals, crawlability, site speed',
      openGraph: {
        title: 'Technisches SEO | Niblah',
        description: 'Technische SEO Optimierung fuer bessere Rankings und Conversions.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Eine Website die technisch perfekt ist und konvertiert',
      title: 'Technisches SEO',
      description:
        'Willst du eine Website die technisch einwandfrei laeuft und hoehere Rankings in Google erzielt? Unsere Spezialisten optimieren Crawlability, Geschwindigkeit und Core Web Vitals fuer maximale Sichtbarkeit. Ergebnis: mehr organischer Traffic, bessere Nutzererfahrung und hoehere Conversions.',
      ctaText: 'Kostenloses Kennenlernen',
      ctaLink: '/contact',
      note: '* 78% der Websites haben technische SEO Probleme die Rankings begrenzen',
      image: '/development-hero.png',
      imageAlt: 'Technical SEO dashboard',
    },
    why: {
      title: {
        prefix: 'Warum',
        highlight: 'technisches SEO',
        suffix: 'die Grundlage fuer Erfolg ist',
      },
      paragraphs: [
        'Eine visuell attraktive Website mit gutem Content ist schoen, aber ohne solide technische Basis erreichst du nie dein volles Potenzial in Google. Technisches SEO ist das Fundament: ohne Indexation keine Rankings, ohne Speed keine gute User Experience.',
        'Moderne Suchmaschinen bewerten Websites nach immer mehr technischen Faktoren. Google Core Web Vitals, mobile first indexing und page experience Updates zeigen klar: technische Exzellenz ist kein nice to have mehr, sondern Pflicht fuer kompetitive Rankings. Wer technisch hinterherhaengt verliert an Wettbewerber.',
      ],
      lead: 'Technisches SEO wirkt direkt auf wichtige Performance Metriken:',
      bullets: [
        'Crawling und Indexierung: Google kann nur ranken was es findet und versteht. Technische Blocker verhindern Indexierung wertvoller Inhalte.',
        'Page Speed und Core Web Vitals: Geschwindigkeit ist ein direkter Ranking Faktor und beeinflusst Bounce Rates stark. Eine Sekunde Delay kann 7% Conversion Verlust bedeuten.',
        'Quality Score in Ads: Technische Performance beeinflusst Google Ads Quality Score und damit den CPC in bezahlten Kampagnen.',
      ],
    },
    niblah: {
      title: {
        prefix: 'Warum',
        highlight: 'technisches SEO',
        suffix: 'an Niblah auslagern?',
      },
      subtitle:
        'Bei Niblah verbinden wir tiefes technisches Wissen mit Marketing Expertise fuer Optimierungen die wirklich wirken.',
      cards: [
        {
          title: 'Holistische technische Expertise',
          description:
            'Unsere Spezialisten kombinieren Development Wissen mit SEO Expertise. Wir wissen nicht nur was Google sehen will, sondern wie wir es technisch umsetzen. Von Crawl Budget Optimierung bis JavaScript Rendering und Schema Markup.',
        },
        {
          title: 'Datengetriebene Diagnostik',
          description:
            'Wir basieren Diagnosen auf echten User Daten aus Search Console und Chrome UX Report, nicht nur auf Tool Output. Jede Empfehlung ist mit Daten und Business Impact hinterlegt, damit du nach ROI priorisierst.',
        },
        {
          title: 'Developer friendly Implementierung',
          description:
            'Unsere Audits liefern konkrete Implementierungsanweisungen die Developer sofort umsetzen koennen. Wir sprechen ihre Sprache und denken ueber technische Machbarkeit im Stack und Ressourcen nach.',
        },
      ],
    },
    tracks: {
      title: {
        prefix: 'Technisches SEO fuer',
        highlight: 'neue und bestehende Websites',
        suffix: '',
      },
      subtitle:
        'Ob neue Website oder bestehende Optimierung - wir haben den passenden Ansatz.',
      items: [
        {
          title: 'Neue Website Begleitung',
          description:
            'Bei neuen Websites ist Praevention besser als Reparatur. Wir begleiten dein Team von Tag eins, damit technisches SEO korrekt umgesetzt wird und teure Fixes nach Launch vermieden werden.',
          items: [
            {
              title: 'Pre launch SEO Audit',
              description:
                'Review von Architektur, URL Struktur und technischer Implementierung vor dem Go Live.',
            },
            {
              title: 'Developer Beratung',
              description:
                'Direkter Austausch mit deinem Dev Team zu Best Practices fuer Crawlability und Indexierung.',
            },
            {
              title: 'Launch Validation',
              description:
                'Post launch Monitoring um sicherzustellen dass alle technischen Elemente korrekt laufen.',
            },
          ],
        },
        {
          title: 'Bestehende Website Optimierung',
          description:
            'Fuer bestehende Websites fuehren wir einen kompletten technischen Audit durch und priorisieren Issues nach Impact und Aufwand.',
          items: [
            {
              title: 'Tiefgehender Technical Audit',
              description:
                'Umfassende Analyse von Crawling, Indexierung, Site Structure, Performance und Core Web Vitals.',
            },
            {
              title: 'Priorisierte Roadmap',
              description:
                'Klarer Aktionsplan mit Impact Scores und geschaetztem ROI je Optimierung.',
            },
            {
              title: 'Implementation Support',
              description:
                'Hands on Begleitung bei Umsetzung und Validierung der Fixes.',
            },
          ],
        },
      ],
    },
    pillars: {
      title: {
        prefix: 'Die 5 Saeulen der',
        highlight: 'technischen SEO Audits',
        suffix: '',
      },
      subtitle:
        'Unsere Audits analysieren systematisch diese fuenf kritischen Bereiche fuer Website Health.',
      items: [
        {
          number: '01',
          title: 'Crawling und Indexierung',
          paragraphs: [
            'Google Crawler muessen deine Website effizient erkunden koennen. Wir analysieren Crawl Budget, identifizieren Orphan Pages und entfernen Crawl Traps. Wir pruefen ob strategische Seiten korrekt indexiert sind und nicht durch robots.txt, noindex Tags oder Canonicals blockiert werden.',
            'Wir pruefen XML Sitemaps, Pagination und Faceted Navigation die oft Indexierungsprobleme verursachen. Ziel: Google soll sein Crawl Budget auf deine wichtigsten Inhalte verwenden.',
          ],
        },
        {
          number: '02',
          title: 'Site Architektur und URL Struktur',
          paragraphs: [
            'Eine logische Struktur verbessert UX und SEO. Wir bewerten Information Architecture, interne Links und URL Hierarchie. Wichtige Inhalte sollten innerhalb von drei Klicks erreichbar sein.',
            'Wir identifizieren Redirect Chains, Broken Links und Duplicate Issues. Eine optimierte Architektur sorgt dafuer dass PageRank zu conversion kritischen Seiten fliesst.',
          ],
        },
        {
          number: '03',
          title: 'Core Web Vitals und Page Experience',
          paragraphs: [
            'Google Core Web Vitals sind direkte Ranking Faktoren: LCP, FID und CLS. Wir analysieren echte User Metriken und finden die Ursachen fuer Performance Bottlenecks.',
            'Haefige Probleme: unoptimierte Images, render blocking JavaScript, ineffizientes CSS und third party Scripts. Wir liefern konkrete Fixes mit messbarem Impact auf Core Web Vitals.',
          ],
        },
        {
          number: '04',
          title: 'Server und Hosting Konfiguration',
          paragraphs: [
            'Server Performance wird oft ueberschaut ist aber kritisch. Wir evaluieren TTFB, HTTP/2 oder HTTP/3, Compression (Gzip/Brotli), Browser Caching und CDN Implementierung. Ein langsamer Server sabotiert Front End Optimierungen.',
            'Wir pruefen Security Header, mobile serving Setup und Geo Targeting fuer internationale Sites. Korrekte Server Konfiguration ist Grundlage fuer Rankings und UX.',
          ],
        },
        {
          number: '05',
          title: 'Structured Data und Rich Results',
          paragraphs: [
            'Schema Markup hilft Google Inhalte zu verstehen und kann rich results ausloesen. Wir implementieren passende Schema Typen wie Product, FAQ, HowTo, Review, Article und Organization.',
            'Korrekte Structured Data erhoeht CTR durch erweiterte SERP Features. Wir validieren alles nach Google Guidelines und maximieren Rich Result Eligibility fuer wichtige Landing Pages.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Diese Kunden',
        highlight: 'gingen voran',
        suffix: '',
      },
      subtitle: 'Konkrete Ergebnisse von technischen SEO Optimierungen',
      items: [
        {
          initials: 'DW',
          company: 'DigitalWorks',
          label: 'Technical SEO | Core Web Vitals',
          description: 'Kompletter technischer Overhaul verbesserte Performance und Rankings drastisch',
          stats: [
            { value: '342%', label: 'mehr organischer Traffic' },
            { value: '68%', label: 'schnellere Ladezeit' },
            { value: '89%', label: 'Core Web Vitals pass' },
          ],
        },
        {
          initials: 'EH',
          company: 'EcoHome Solutions',
          label: 'Crawl Optimierung | Indexierung',
          description: 'Crawl Budget Optimierung brachte 1000+ neue Seiten in die Indexierung',
          stats: [
            { value: '847%', label: 'mehr indexierte Seiten' },
            { value: '4.7x', label: 'bessere Crawl Effizienz' },
            { value: '267%', label: 'Keyword Visibility Wachstum' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Das sagen',
        highlight: 'unsere Kunden',
        suffix: '',
      },
      subtitle: 'Ergebnisse die fuer sich sprechen.',
      items: [
        {
          quote:
            'Der technische Audit von Niblah war extrem gruendlich. Sie fanden Issues die unsere Developer nie entdeckt hatten. Rankings stiegen nach der Umsetzung.',
          name: 'Pieter Klaassen',
        },
        {
          quote:
            'Core Web Vitals waren unser Achilles heel. Niblah loeste es systematisch. Jetzt sind wir gruen in allen Metriken und sehen es im Traffic.',
          name: 'Daan Mulder',
        },
        {
          quote:
            'Endlich technische SEO Experten die Developer Sprache sprechen. Ihre Implementierungsanweisungen waren perfekt dokumentiert und sofort umsetzbar.',
          name: 'Sarah Bakker',
        },
      ],
      ratingLabel: 'Wir erhalten 4.9 auf Google aus 143 Bewertungen',
    },
    faq: {
      title: {
        prefix: 'Haeufige',
        highlight: 'Fragen',
        suffix: '',
      },
      items: [
        {
          question: 'Wie weiss ich ob meine Website technisch verbessert werden muss?',
          answer:
            'Signale fuer technischen Bedarf: fallende Rankings ohne Content Aenderung, langsame Page Speed, rote Scores in PageSpeed Insights, wenige indexierte Seiten im Vergleich zur Gesamtzahl oder Crawl Errors in Search Console. Ein kostenloser Audit zeigt den Status der technischen Health.',
        },
        {
          question: 'Was wird von meiner Seite erwartet?',
          answer:
            'Mindestens brauchst du Zugriff auf Search Console und Google Analytics. Fuer die Umsetzung arbeiten wir mit deinem Dev Team oder CMS Owner. Wir liefern detaillierte Anweisungen die direkt umgesetzt werden koennen. Technisches Wissen auf deiner Seite ist nicht erforderlich.',
        },
        {
          question: 'Warum nutzt ihr so wenige Tools?',
          answer:
            'Automated Tools liefern oberflaechliche Diagnosen ohne Kontext. Sie erzeugen lange Issue Listen, verfehlen aber oft Root Causes. Wir nutzen Tools fuer Daten, aber unsere Expertise liegt in Interpretation und Priorisierung. Wir analysieren deine konkrete Website und deinen Stack fuer echte ROI Empfehlungen.',
        },
        {
          question: 'Was bringt technisches SEO?',
          answer:
            'Direkte Vorteile: bessere Rankings durch Crawlability und Indexierung, mehr Traffic durch schnellere Ladezeit und bessere Core Web Vitals, geringere Bounce Rates und hoehere Conversions durch bessere UX. Technisches SEO ist ein Force Multiplier und staerkt alle anderen Massnahmen.',
        },
        {
          question: 'Wie schnell sehe ich Ergebnisse?',
          answer:
            'Performance Verbesserungen sind sofort sichtbar. Ranking Impact haengt von Crawl Frequency ab - bei haeufig gecrawlten Sites innerhalb von Tagen bis Wochen, bei kleineren Sites einige Wochen. Wir monitoren Search Console eng und passen bei Bedarf an.',
        },
        {
          question: 'Kann jede Plattform technisch optimiert werden?',
          answer:
            'Fast jede Plattform kann optimiert werden, aber der Grad an Kontrolle variiert. Custom Builds und Plattformen wie WordPress, Shopify Plus und headless CMS bieten maximale Flexibilitaet. Hosted Plattformen wie Squarespace oder Wix haben mehr Limits. Wir analysieren zuerst deine Plattform um realistische Erwartungen zu setzen.',
        },
      ],
    },
  },
  sv: {
    metadata: {
      title: 'Teknisk SEO | Weboptimering for battre ranking | Niblah',
      description:
        'Teknisk SEO som fungerar. Forbattra crawlbarhet, hastighet och Core Web Vitals for hogre ranking i Google. Mer trafik och battre konvertering.',
      keywords: 'teknisk seo, weboptimering, core web vitals, crawlbarhet, site speed',
      openGraph: {
        title: 'Teknisk SEO | Niblah',
        description: 'Teknisk SEO som ger ranking och konvertering.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'En webbplats som ar tekniskt perfekt och konverterar',
      title: 'Teknisk SEO',
      description:
        'Vill du ha en webbplats som fungerar felfritt och ger hogre ranking i Google? Vara tekniska SEO specialister optimerar crawlbarhet, hastighet och Core Web Vitals for maximal synlighet. Resultat: mer organisk trafik, battre UX och hogre konverteringar.',
      ctaText: 'Boka gratis intro',
      ctaLink: '/contact',
      note: '* 78% av webbplatser har tekniska SEO problem som begransar ranking',
      image: '/development-hero.png',
      imageAlt: 'Technical SEO dashboard',
    },
    why: {
      title: {
        prefix: 'Varfor',
        highlight: 'teknisk SEO',
        suffix: 'ar grunden for online framgang',
      },
      paragraphs: [
        'En snygg webbplats med bra content ar fint, men utan solid teknisk grund nar du inte din fulla potential i Google. Teknisk SEO ar basen for alla andra optimeringar: utan korrekt indexering inga rankings, utan hastighet ingen bra UX.',
        'Moderna sokmotorer utvarderar fler tekniska faktorer. Google Core Web Vitals, mobile first indexing och page experience updates gor en sak tydlig: teknisk excellens ar inte nice to have utan must have for competitiva rankings. Sajter som halkar efter tappar mark.',
      ],
      lead: 'Teknisk SEO har direkt effekt pa viktiga metrics:',
      bullets: [
        'Crawling och indexering: Google kan bara ranka det som kan hittas och forstas. Tekniska blockeringar hindrar viktig content fran index.',
        'Page speed och Core Web Vitals: Hastighet ar en direkt ranking factor och paverkar bounce rate. En sekunds forsening kan ge 7% konverteringsforlust.',
        'Quality Score i ads: Teknisk prestanda paverkar Google Ads Quality Score och darfor CPC i betalda kampanjer.',
      ],
    },
    niblah: {
      title: {
        prefix: 'Varfor outsourca',
        highlight: 'teknisk SEO',
        suffix: 'till Niblah?',
      },
      subtitle:
        'Hos Niblah kombinerar vi djup teknisk kunskap med marketing expertise for optimeringar som ger effekt.',
      cards: [
        {
          title: 'Holistisk teknisk expertis',
          description:
            'Vara specialister kombinerar development kunskap med SEO. Vi forstar inte bara vad Google vill se utan hur det implementeras i ditt platform. Fran crawl budget optimering till JavaScript rendering och schema markup.',
        },
        {
          title: 'Datadriven diagnostik',
          description:
            'Vi baserar diagnoser pa real user data fran Search Console och Chrome UX Report, inte pa automatiska verktyg. Varje rekommendation backas av data och business impact for att prioritera ROI.',
        },
        {
          title: 'Developer friendly implementation',
          description:
            'Vara tekniska audits levereras med konkreta instruktioner som developers kan implementera direkt. Vi pratar deras sprak och tar hansyn till teknisk feasibility i din stack.',
        },
      ],
    },
    tracks: {
      title: {
        prefix: 'Teknisk SEO for',
        highlight: 'nya och befintliga webbplatser',
        suffix: '',
      },
      subtitle:
        'Oavsett om du bygger nytt eller optimerar befintligt - vi har ratt upplagg.',
      items: [
        {
          title: 'Ny webbplats guidning',
          description:
            'Vid nya webbplatser ar prevention battre an reparation. Vi guidar ditt team fran dag ett sa teknisk SEO implementeras korrekt och dyra fixar undviks efter launch.',
          items: [
            {
              title: 'Pre launch SEO audit',
              description:
                'Vi granskar arkitektur, URL struktur och teknisk implementering innan lansering.',
            },
            {
              title: 'Developer consultancy',
              description:
                'Direkt samarbete med dev team om best practices for crawlbarhet och indexering.',
            },
            {
              title: 'Launch validation',
              description:
                'Post launch monitoring for att sakerstalla att tekniska delar fungerar.',
            },
          ],
        },
        {
          title: 'Befintlig webbplats optimering',
          description:
            'For befintliga webbplatser gor vi en komplett teknisk audit for att hitta alla optimeringsmojligheter och prioritera efter impact och effort.',
          items: [
            {
              title: 'Djup teknisk audit',
              description:
                'Omfattande analys av crawling, indexering, site structure, performance och Core Web Vitals.',
            },
            {
              title: 'Prioriterad roadmap',
              description:
                'Tydlig plan med impact scores och uppskattad ROI per optimering.',
            },
            {
              title: 'Implementation support',
              description:
                'Hands on stott vid implementering och validering av fixes.',
            },
          ],
        },
      ],
    },
    pillars: {
      title: {
        prefix: 'De 5 pelarna for',
        highlight: 'teknisk SEO audit',
        suffix: '',
      },
      subtitle:
        'Vara audits analyserar systematiskt dessa fem kritiska omraden for webbhalsa.',
      items: [
        {
          number: '01',
          title: 'Crawling och indexering',
          paragraphs: [
            'Google crawlers maste kunna utforska sajten effektivt. Vi analyserar crawl budget, hittar orphan pages och tar bort crawl traps. Vi verifierar att viktiga sidor indexeras och inte blockeras av robots.txt, noindex eller canonicals.',
            'Vi granskar XML sitemaps, pagination och faceted navigation som ofta orsakar indexeringsproblem. Mal: att Google lagger crawl budget pa din viktigaste content.',
          ],
        },
        {
          number: '02',
          title: 'Site arkitektur och URL struktur',
          paragraphs: [
            'En logisk struktur forbattrar UX och SEO. Vi utvarderar information architecture, intern lanking och URL hierarki. Viktigt content ska nas inom tre klick fran homepage.',
            'Vi identifierar redirect chains, broken links och duplication issues. En optimerad arkitektur ser till att PageRank flodar till konverteringskritiska sidor.',
          ],
        },
        {
          number: '03',
          title: 'Core Web Vitals och Page Experience',
          paragraphs: [
            'Core Web Vitals ar direkta ranking faktorer: LCP, FID och CLS. Vi analyserar real user metrics och hittar exakta bottlenecks.',
            'Vanliga issues: ooptimerade images, render blocking JavaScript, ineffektiv CSS och third party scripts. Vi levererar konkreta fixes med matbar impact pa Core Web Vitals.',
          ],
        },
        {
          number: '04',
          title: 'Server och hosting konfiguration',
          paragraphs: [
            'Server performance overses ofta men ar kritisk. Vi utvarderar TTFB, HTTP/2 eller HTTP/3, compression, browser caching och CDN. En lang server saboterar front end optimeringar.',
            'Vi analyserar security headers, mobile serving setup och geo targeting for internationella sajter. Korrekt server setup ar fundamentalt for ranking och UX.',
          ],
        },
        {
          number: '05',
          title: 'Structured Data och Rich Results',
          paragraphs: [
            'Schema markup hjalper Google forsta innehall och kan ge rich results. Vi implementerar relevanta schema typer som Product, FAQ, HowTo, Review och Organization.',
            'Korrekt structured data okar CTR via SERP features. Vi validerar markup mot Google guidelines och maximerar rich result eligibility.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Dessa kunder',
        highlight: 'gick fore',
        suffix: '',
      },
      subtitle: 'Konkreta resultat fran teknisk SEO',
      items: [
        {
          initials: 'DW',
          company: 'DigitalWorks',
          label: 'Technical SEO | Core Web Vitals',
          description: 'Komplett teknisk overhaul forbedrade performance och ranking',
          stats: [
            { value: '342%', label: 'mer organisk trafik' },
            { value: '68%', label: 'snabbare laddtid' },
            { value: '89%', label: 'Core Web Vitals pass' },
          ],
        },
        {
          initials: 'EH',
          company: 'EcoHome Solutions',
          label: 'Crawl Optimering | Indexering',
          description: 'Crawl budget optimering frigjorde 1000+ nya sidor for indexering',
          stats: [
            { value: '847%', label: 'fler indexerade sidor' },
            { value: '4.7x', label: 'battre crawl efficiency' },
            { value: '267%', label: 'keyword visibility tillvaxt' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Detta sager',
        highlight: 'vara kunder',
        suffix: '',
      },
      subtitle: 'Resultat som talar for sig sjalva.',
      items: [
        {
          quote:
            'Niblah tekniska audit var otroligt grundlig. De hittade issues som var dev team aldrig sett. Rankings skot i hojden efter implementering.',
          name: 'Pieter Klaassen',
        },
        {
          quote:
            'Core Web Vitals var var svaga punkt. Niblah loste det systematiskt. Nu ar vi grona pa alla metrics och ser det i trafiken.',
          name: 'Daan Mulder',
        },
        {
          quote:
            'Antligen teknisk SEO experter som pratar developers sprak. Instruktionerna var tydliga och direkt genomforbara.',
          name: 'Sarah Bakker',
        },
      ],
      ratingLabel: 'Vi far 4.9 pa Google av 143 omdomen',
    },
    faq: {
      title: {
        prefix: 'Vanliga',
        highlight: 'fragor',
        suffix: '',
      },
      items: [
        {
          question: 'Hur vet jag om min webbplats behovs teknisk SEO?',
          answer:
            'Signaler: dalande ranking utan content andring, langsam page speed, roda scores i PageSpeed Insights, fa indexerade sidor jamfort med totalen, eller crawl errors i Search Console. En gratis audit ger snabbt insikt i technical health.',
        },
        {
          question: 'Vad forvantas fran min sida?',
          answer:
            'Minst behovs access till Search Console och Google Analytics. For implementering arbetar vi med ditt dev team eller CMS ansvarig. Vi levererar tydliga instruktioner. Ingen teknisk kunskap kravs pa din sida.',
        },
        {
          question: 'Varfor anvander ni sa fa tools?',
          answer:
            'Automatiska tools ger ytliga diagnostics utan kontext. De listar issues men missar root cause. Vi anvander tools for data men var styrka ar tolkning och prioritering. Vi analyserar din specifika site och stack for rekommendationer som ger ROI.',
        },
        {
          question: 'Vad ger teknisk SEO optimering?',
          answer:
            'Direkta fordelar: battre rankings genom crawlbarhet och indexering, hogre trafik genom snabbare laddning och battre Core Web Vitals, lagre bounce rates och hogre konverteringar via battre UX. Teknisk SEO ar en force multiplier som forstarker alla andra insatser.',
        },
        {
          question: 'Hur snabbt ser jag resultat?',
          answer:
            'Performance forbattringar syns direkt. Ranking impact beror pa crawl frequency - for ofta crawled sites inom dagar till veckor, for mindre sites kan det ta veckor. Vi overvakar Search Console noga och justerar vid behov.',
        },
        {
          question: 'Kan alla plattformar optimeras tekniskt?',
          answer:
            'Naesten alla plattformar kan optimeras, men graden av kontroll varierar. Custom builds och plattformar som WordPress, Shopify Plus och headless CMS ger maximal flexibilitet. Hosted plattformar som Squarespace eller Wix har fler begransningar. Vi analyserar alltid din plattform for att satta realistiska forvantningar.',
        },
      ],
    },
  },
  da: {
    metadata: {
      title: 'Teknisk SEO | Website optimering for bedre ranking | Niblah',
      description:
        'Teknisk SEO der virker. Forbedr crawlbarhed, hastighed og Core Web Vitals for hoejere ranking i Google. Mere trafik og bedre konvertering.',
      keywords: 'teknisk seo, website optimering, core web vitals, crawlbarhed, site speed',
      openGraph: {
        title: 'Teknisk SEO | Niblah',
        description: 'Teknisk SEO der giver ranking og konvertering.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Et website der er teknisk perfekt og konverterer',
      title: 'Teknisk SEO',
      description:
        'Vil du have et website der fungerer fejlfrit og giver hoejere ranking i Google? Vores tekniske SEO specialister optimerer crawlbarhed, hastighed og Core Web Vitals for maksimal synlighed. Resultat: mere organisk trafik, bedre UX og hoejere konverteringer.',
      ctaText: 'Planlaeg gratis intro',
      ctaLink: '/contact',
      note: '* 78% af websites har tekniske SEO problemer der begranser ranking',
      image: '/development-hero.png',
      imageAlt: 'Technical SEO dashboard',
    },
    why: {
      title: {
        prefix: 'Hvorfor',
        highlight: 'teknisk SEO',
        suffix: 'er fundamentet for online succes',
      },
      paragraphs: [
        'Et flot website med godt content er fint, men uden solid teknisk base nar du ikke dit fulde potentiale i Google. Teknisk SEO er fundamentet: uden korrekt indexering ingen rankings, uden hastighed ingen god UX.',
        'Moderne soegemaskiner vurderer flere tekniske faktorer. Google Core Web Vitals, mobile first indexing og page experience updates viser tydeligt: teknisk excellens er ikke nice to have men must have for competitiv ranking. Websites der halter bagefter taber terraen.',
      ],
      lead: 'Teknisk SEO har direkte effekt pa vigtige metrics:',
      bullets: [
        'Crawling og indexering: Google kan kun ranke det som kan findes og forstaas. Tekniske blokeringer holder vaerdifuld content ude af index.',
        'Page speed og Core Web Vitals: Hastighed er en direkte ranking faktor og paverker bounce rate. Et sekunds forsinkelse kan betyde 7% konverteringstab.',
        'Quality Score i ads: Teknisk performance paavirker Google Ads Quality Score og dermed CPC i betalte kampagner.',
      ],
    },
    niblah: {
      title: {
        prefix: 'Hvorfor outsource',
        highlight: 'teknisk SEO',
        suffix: 'til Niblah?',
      },
      subtitle:
        'Hos Niblah kombinerer vi dyb teknisk viden med marketing expertise for optimeringer der giver reel effekt.',
      cards: [
        {
          title: 'Holistisk teknisk ekspertise',
          description:
            'Vores specialister kombinerer development viden med SEO. Vi forstar ikke kun hvad Google vil se men hvordan det implementeres. Fra crawl budget optimering til JavaScript rendering og schema markup.',
        },
        {
          title: 'Data drevet diagnostik',
          description:
            'Vi baserer diagnoser pa real user data fra Search Console og Chrome UX Report, ikke kun tool output. Hver anbefaling er dokumenteret med data og business impact for at prioritere ROI.',
        },
        {
          title: 'Developer friendly implementering',
          description:
            'Vores audits leveres med konkrete instruktioner som developers kan implementere. Vi taler deres sprog og tager hensyn til teknisk feasibility i dit stack.',
        },
      ],
    },
    tracks: {
      title: {
        prefix: 'Teknisk SEO for',
        highlight: 'nye og eksisterende websites',
        suffix: '',
      },
      subtitle:
        'Uanset om du bygger nyt eller optimerer eksisterende - vi har den rette tilgang.',
      items: [
        {
          title: 'Ny website begeleiding',
          description:
            'Ved nye websites er prevention bedre end reparation. Vi guider dit team fra dag et sa teknisk SEO implementeres korrekt og dyre fixes undgaes efter launch.',
          items: [
            {
              title: 'Pre launch SEO audit',
              description:
                'Vi gennemgar arkitektur, URL struktur og teknisk implementering for lancering.',
            },
            {
              title: 'Developer consultancy',
              description:
                'Direkte samarbejde med dev team om best practices for crawlbarhed og indexering.',
            },
            {
              title: 'Launch validation',
              description:
                'Post launch monitoring for at sikre at tekniske elementer fungerer.',
            },
          ],
        },
        {
          title: 'Eksisterende website optimering',
          description:
            'For eksisterende websites laver vi en komplet teknisk audit og prioriterer issues efter impact og effort.',
          items: [
            {
              title: 'Dyb teknisk audit',
              description:
                'Omfattende analyse af crawling, indexering, site structure, performance og Core Web Vitals.',
            },
            {
              title: 'Prioriteret roadmap',
              description:
                'Klar plan med impact scores og estimeret ROI per optimering.',
            },
            {
              title: 'Implementation support',
              description:
                'Hands on support under implementering og validering af fixes.',
            },
          ],
        },
      ],
    },
    pillars: {
      title: {
        prefix: 'De 5 soejler i',
        highlight: 'teknisk SEO audit',
        suffix: '',
      },
      subtitle:
        'Vores audits analyserer systematisk disse fem kritiske omrader for website health.',
      items: [
        {
          number: '01',
          title: 'Crawling og indexering',
          paragraphs: [
            'Google crawlers skal kunne udforske dit site effektivt. Vi analyserer crawl budget, finder orphan pages og fjerner crawl traps. Vi sikrer at vigtige sider indexeres og ikke blokeres af robots.txt, noindex eller canonicals.',
            'Vi gennemgar XML sitemaps, pagination og faceted navigation som ofte skaber indexeringsproblemer. Mal: Google bruger crawl budget pa din vigtigste content.',
          ],
        },
        {
          number: '02',
          title: 'Site arkitektur og URL struktur',
          paragraphs: [
            'En logisk struktur forbedrer UX og SEO. Vi evaluerer information architecture, interne links og URL hierarki. Vigtigt content skal kunne nas inden tre klik fra homepage.',
            'Vi identificerer redirect chains, broken links og duplication issues. En optimeret arkitektur sikrer at PageRank flyder til konverteringskritiske sider.',
          ],
        },
        {
          number: '03',
          title: 'Core Web Vitals og Page Experience',
          paragraphs: [
            'Core Web Vitals er direkte ranking faktorer: LCP, FID og CLS. Vi analyserer real user metrics og finder performance bottlenecks.',
            'Typiske issues: uoptimerede images, render blocking JavaScript, ineffektiv CSS og third party scripts. Vi leverer konkrete fixes med maelbar impact pa Core Web Vitals.',
          ],
        },
        {
          number: '04',
          title: 'Server og hosting konfiguration',
          paragraphs: [
            'Server performance overses ofte men er kritisk. Vi evaluerer TTFB, HTTP/2 eller HTTP/3, compression, browser caching og CDN. En langsom server saboterer front end optimeringer.',
            'Vi analyserer security headers, mobile serving setup og geo targeting for internationale sites. Korrekt server setup er grundlaget for ranking og UX.',
          ],
        },
        {
          number: '05',
          title: 'Structured Data og Rich Results',
          paragraphs: [
            'Schema markup hjalper Google med at forsta indhold og kan give rich results. Vi implementerer relevante schema typer som Product, FAQ, HowTo, Review og Organization.',
            'Korrekt structured data oeger CTR via SERP features. Vi validerer markup mod Google guidelines og maksimerer rich result eligibility.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Disse kunder',
        highlight: 'gik forrest',
        suffix: '',
      },
      subtitle: 'Konkrete resultater fra teknisk SEO',
      items: [
        {
          initials: 'DW',
          company: 'DigitalWorks',
          label: 'Technical SEO | Core Web Vitals',
          description: 'Komplet teknisk overhaul forbedrede performance og ranking',
          stats: [
            { value: '342%', label: 'mere organisk trafik' },
            { value: '68%', label: 'hurtigere loadtid' },
            { value: '89%', label: 'Core Web Vitals pass' },
          ],
        },
        {
          initials: 'EH',
          company: 'EcoHome Solutions',
          label: 'Crawl Optimering | Indexering',
          description: 'Crawl budget optimering frigjorde 1000+ nye sider til indexering',
          stats: [
            { value: '847%', label: 'flere indexerede sider' },
            { value: '4.7x', label: 'bedre crawl efficiency' },
            { value: '267%', label: 'keyword visibility vaekst' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Det siger',
        highlight: 'vores kunder',
        suffix: '',
      },
      subtitle: 'Resultater der taler for sig selv.',
      items: [
        {
          quote:
            'Niblah tekniske audit var ekstremt grundig. De fandt issues vores developers aldrig havde opdaget. Rankings steg markant efter implementering.',
          name: 'Pieter Klaassen',
        },
        {
          quote:
            'Core Web Vitals var vores svage punkt. Niblah loste det systematisk. Nu scorer vi gront pa alle metrics og ser det i trafikken.',
          name: 'Daan Mulder',
        },
        {
          quote:
            'Endelig tekniske SEO eksperter der taler developers sprog. Instruktionerne var perfekte og direkte implementerbare.',
          name: 'Sarah Bakker',
        },
      ],
      ratingLabel: 'Vi far 4.9 pa Google ud fra 143 anmeldelser',
    },
    faq: {
      title: {
        prefix: 'Ofte stillede',
        highlight: 'sporgsmal',
        suffix: '',
      },
      items: [
        {
          question: 'Hvordan ved jeg om min website har brug for tekniske forbedringer?',
          answer:
            'Signaler: faldende ranking uden content aendringer, langsom page speed, rode scores i PageSpeed Insights, fa indexerede sider i forhold til total, eller crawl errors i Search Console. En gratis audit giver hurtigt indblik i technical health.',
        },
        {
          question: 'Hvad forventes fra min side?',
          answer:
            'Som minimum adgang til Search Console og Google Analytics. For implementering samarbejder vi med dit dev team eller CMS ansvarlig. Vi leverer detaljerede instruktioner de kan udfore. Teknisk viden fra din side er ikke paakraevet.',
        },
        {
          question: 'Hvorfor bruger I sa fa tools?',
          answer:
            'Automated tools giver overfladiske diagnostics uden kontext. De laver lange issue lister men missser root cause. Vi bruger tools for data men vores styrke er tolkning og prioritering. Vi analyserer din site og stack for anbefalinger med reel ROI.',
        },
        {
          question: 'Hvad giver teknisk SEO optimering?',
          answer:
            'Direkte benefits: bedre ranking gennem forbedret crawlbarhed og indexering, mere trafik via hurtigere load times og bedre Core Web Vitals, lavere bounce rate og hoejere konverteringer gennem bedre UX. Teknisk SEO er en force multiplier der styrker alle andre indsatser.',
        },
        {
          question: 'Hvor hurtigt ser jeg resultater?',
          answer:
            'Performance forbedringer ses straks. Ranking impact afhaenger af crawl frequency - for ofte crawlede sites inden for dage til uger, for mindre sites kan det tage uger. Vi monitorerer Search Console og justerer ved behov.',
        },
        {
          question: 'Kan alle platforme optimeres teknisk?',
          answer:
            'Naesten alle platforme kan optimeres, men graden af kontrol varierer. Custom builds og platforme som WordPress, Shopify Plus og headless CMS giver maksimal fleksibilitet. Hosted platforme som Squarespace eller Wix har flere begraensninger. Vi analyserer din platform for at saette realistiske forventninger.',
        },
      ],
    },
  },
  fr: {
    metadata: {
      title: 'SEO technique | Optimisation site pour meilleurs rankings | Niblah',
      description:
        'SEO technique qui fonctionne. Ameliorez crawlabilite, vitesse et Core Web Vitals pour de meilleurs rankings Google. Plus de trafic et meilleures conversions.',
      keywords: 'seo technique, optimisation site, core web vitals, crawlabilite, site speed',
      openGraph: {
        title: 'SEO technique | Niblah',
        description: 'SEO technique pour rankings et conversions.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Un site techniquement parfait qui convertit',
      title: 'SEO technique',
      description:
        'Vous voulez un site qui fonctionne parfaitement et qui augmente vos rankings Google? Nos specialistes optimisent crawlabilite, vitesse et Core Web Vitals pour une visibilite maximale. Resultat: plus de trafic organique, meilleure UX et plus de conversions.',
      ctaText: 'Planifier un appel gratuit',
      ctaLink: '/contact',
      note: '* 78% des sites ont des problemes SEO techniques qui limitent les rankings',
      image: '/development-hero.png',
      imageAlt: 'Technical SEO dashboard',
    },
    why: {
      title: {
        prefix: 'Pourquoi',
        highlight: 'le SEO technique',
        suffix: 'est la base du succes',
      },
      paragraphs: [
        'Un site beau avec du bon contenu est utile, mais sans base technique solide vous n atteignez pas votre potentiel sur Google. Le SEO technique est le socle: sans indexation correcte pas de rankings, sans vitesse pas de bonne UX.',
        'Les moteurs modernes evaluent de plus en plus de facteurs techniques. Core Web Vitals, mobile first indexing et page experience updates montrent une chose: l excellence technique est obligatoire pour des rankings competitifs. Les sites en retard perdent du terrain.',
      ],
      lead: 'Le SEO technique impacte directement les metrics cles:',
      bullets: [
        'Crawling et indexation: Google ne peut ranker que ce qu il trouve et comprend. Les blocages techniques gardent le contenu hors de l index.',
        'Page speed et Core Web Vitals: la vitesse est un facteur de ranking et influence fortement le bounce rate. Une seconde de delai peut faire perdre 7% de conversion.',
        'Quality Score en ads: la performance technique influence le Quality Score Google Ads et donc le CPC.',
      ],
    },
    niblah: {
      title: {
        prefix: 'Pourquoi externaliser',
        highlight: 'le SEO technique',
        suffix: 'a Niblah?',
      },
      subtitle:
        'Chez Niblah nous combinons expertise technique et marketing pour des optimisations qui ont un impact reel.',
      cards: [
        {
          title: 'Expertise technique holistique',
          description:
            'Nos specialistes combinent developpement et SEO. Nous savons ce que Google veut voir et comment l implementer sur votre platforme. Du crawl budget a JavaScript rendering et schema markup.',
        },
        {
          title: 'Diagnostic base sur les data',
          description:
            'Nous basons nos diagnostics sur des data utilisateurs de Search Console et Chrome UX Report, pas sur des outils automatiques. Chaque recommandation est soutenue par des data et un impact business.',
        },
        {
          title: 'Implementation developer friendly',
          description:
            'Nos audits livrent des instructions concretes que les developers peuvent executer. Nous parlons leur langage et prenons en compte la faisabilite technique.',
        },
      ],
    },
    tracks: {
      title: {
        prefix: 'SEO technique pour',
        highlight: 'nouveaux et anciens sites',
        suffix: '',
      },
      subtitle:
        'Que vous construisiez un nouveau site ou optimisiez un site existant - nous avons la bonne approche.',
      items: [
        {
          title: 'Accompagnement nouveau site',
          description:
            'Pour un nouveau site, la prevention vaut mieux que la reparation. Nous guidons votre equipe des le debut pour une implementation correcte du SEO technique.',
          items: [
            {
              title: 'Pre launch SEO audit',
              description:
                'Nous auditons architecture, structure URL et implementation technique avant le lancement.',
            },
            {
              title: 'Developer consultancy',
              description:
                'Collaboration directe avec votre equipe dev sur les best practices de crawlabilite et indexation.',
            },
            {
              title: 'Launch validation',
              description:
                'Monitoring post launch pour verifier que tout fonctionne.',
            },
          ],
        },
        {
          title: 'Optimisation site existant',
          description:
            'Pour un site existant, nous realisons un audit complet et priorisons les issues par impact et effort.',
          items: [
            {
              title: 'Audit technique profond',
              description:
                'Analyse complete du crawling, indexation, structure, performance et Core Web Vitals.',
            },
            {
              title: 'Roadmap priorisee',
              description:
                'Plan d action clair avec impact scores et ROI estime.',
            },
            {
              title: 'Support implementation',
              description:
                'Accompagnement pendant l implementation et validation des fixes.',
            },
          ],
        },
      ],
    },
    pillars: {
      title: {
        prefix: 'Les 5 piliers du',
        highlight: 'SEO technique',
        suffix: '',
      },
      subtitle:
        'Nos audits analysent systematiquement ces cinq zones critiques.',
      items: [
        {
          number: '01',
          title: 'Crawling et indexation',
          paragraphs: [
            'Les crawlers Google doivent explorer votre site efficacement. Nous analysons crawl budget, identifions orphan pages et eliminons crawl traps. Nous verifions que les pages strategiques sont indexees et non bloquees par robots.txt, noindex ou canonicals.',
            'Nous analysons XML sitemaps, pagination et faceted navigation qui creent souvent des problemes. Objectif: que Google depense son budget sur votre contenu prioritaire.',
          ],
        },
        {
          number: '02',
          title: 'Architecture du site et structure URL',
          paragraphs: [
            'Une structure logique ameliore UX et SEO. Nous evaluons information architecture, liens internes et hierarchie URL. Le contenu important doit etre accessible en 3 clics.',
            'Nous identifions redirect chains, broken links et duplication issues. Une architecture optimisee fait circuler le PageRank vers les pages de conversion.',
          ],
        },
        {
          number: '03',
          title: 'Core Web Vitals et Page Experience',
          paragraphs: [
            'Core Web Vitals sont des facteurs directs: LCP, FID, CLS. Nous analysons les metrics utilisateurs et identifions les bottlenecks.',
            'Problemes courants: images non optimisees, JS bloquant, CSS inefficace et scripts tiers. Nous livrons des fixes concrets avec impact mesure.',
          ],
        },
        {
          number: '04',
          title: 'Configuration server et hosting',
          paragraphs: [
            'La performance server est souvent oubliee mais critique. Nous evaluons TTFB, HTTP/2 ou HTTP/3, compression, caching et CDN. Un server lent ruine les optimisations front end.',
            'Nous analysons security headers, mobile serving setup et geo targeting pour sites internationaux. Une configuration correcte est essentielle pour ranking et UX.',
          ],
        },
        {
          number: '05',
          title: 'Structured Data et Rich Results',
          paragraphs: [
            'Schema markup aide Google a comprendre votre contenu et peut activer rich results. Nous implementons des schema types pertinents: Product, FAQ, HowTo, Review, Article, Organization.',
            'Structured data correcte augmente le CTR via SERP features. Nous validons contre les guidelines Google et maximisons l eligibility.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Ces clients',
        highlight: 'nous ont fait confiance',
        suffix: '',
      },
      subtitle: 'Resultats concrets de SEO technique',
      items: [
        {
          initials: 'DW',
          company: 'DigitalWorks',
          label: 'Technical SEO | Core Web Vitals',
          description: 'Overhaul technique complet pour performance et rankings',
          stats: [
            { value: '342%', label: 'plus de trafic organique' },
            { value: '68%', label: 'temps de chargement plus rapide' },
            { value: '89%', label: 'Core Web Vitals pass' },
          ],
        },
        {
          initials: 'EH',
          company: 'EcoHome Solutions',
          label: 'Crawl Optimisation | Indexation',
          description: 'Optimisation du crawl budget pour 1000+ nouvelles pages indexees',
          stats: [
            { value: '847%', label: 'plus de pages indexees' },
            { value: '4.7x', label: 'meilleure crawl efficiency' },
            { value: '267%', label: 'growth visibility keywords' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Ce que disent',
        highlight: 'nos clients',
        suffix: '',
      },
      subtitle: 'Des resultats qui parlent.',
      items: [
        {
          quote:
            'L audit technique de Niblah etait tres approfondi. Ils ont trouve des issues que nos devs n avaient jamais vus. Les rankings ont bondi apres implementation.',
          name: 'Pieter Klaassen',
        },
        {
          quote:
            'Core Web Vitals etait notre point faible. Niblah l a regle de maniere methodique. Maintenant nous sommes verts sur toutes les metrics.',
          name: 'Daan Mulder',
        },
        {
          quote:
            'Enfin des experts SEO techniques qui parlent le langage dev. Leurs instructions etaient claires et actionnables.',
          name: 'Sarah Bakker',
        },
      ],
      ratingLabel: 'Nous avons 4.9 sur Google avec 143 avis',
    },
    faq: {
      title: {
        prefix: 'Questions',
        highlight: 'frequentes',
        suffix: '',
      },
      items: [
        {
          question: 'Comment savoir si mon site a besoin d ameliorations techniques?',
          answer:
            'Signaux: baisse de rankings sans changements de contenu, page speed lente, scores rouges dans PageSpeed Insights, peu de pages indexees, ou crawl errors dans Search Console. Un audit gratuit donne une vision claire de la sante technique.',
        },
        {
          question: 'Qu est ce qui est attendu de mon cote?',
          answer:
            'Au minimum acces a Search Console et Google Analytics. Pour l implementation nous travaillons avec votre equipe dev ou CMS owner. Nous fournissons des instructions detaillees. Aucune connaissance technique requise de votre cote.',
        },
        {
          question: 'Pourquoi utilisez vous si peu d outils?',
          answer:
            'Les outils automatiques donnent des diagnostics superficiels sans contexte. Ils listent des issues mais manquent la root cause. Nous utilisons les outils pour les data, mais notre expertise est dans l interpretation et la priorisation.',
        },
        {
          question: 'Que rapporte l optimisation SEO technique?',
          answer:
            'Benefices directs: meilleurs rankings via crawlability et indexation, plus de trafic via vitesse et Core Web Vitals, baisse du bounce rate et meilleures conversions via UX. Le SEO technique renforce toutes les autres actions.',
        },
        {
          question: 'Quand verrai je les resultats?',
          answer:
            'Les gains de performance sont immediats. L impact ranking depend du crawl frequency - quelques jours a semaines pour les sites souvent crawles, plus longtemps pour les petits. Nous monitorons Search Console en continu.',
        },
        {
          question: 'Toutes les plateformes peuvent elles etre optimisees?',
          answer:
            'Presque toutes, mais le niveau de controle varie. Custom builds et plateformes comme WordPress, Shopify Plus ou headless CMS offrent plus de flexibilite. Squarespace ou Wix ont plus de limites. Nous analysons d abord votre plateforme pour des attentes realistes.',
        },
      ],
    },
  },
  it: {
    metadata: {
      title: 'SEO tecnico | Ottimizzazione sito per migliori ranking | Niblah',
      description:
        'SEO tecnico che funziona. Migliora crawlabilita, velocita e Core Web Vitals per ranking migliori su Google. Piu traffico e migliori conversioni.',
      keywords: 'seo tecnico, ottimizzazione sito, core web vitals, crawlabilita, site speed',
      openGraph: {
        title: 'SEO tecnico | Niblah',
        description: 'SEO tecnico per ranking e conversioni migliori.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Un sito tecnicamente perfetto che converte',
      title: 'SEO tecnico',
      description:
        'Vuoi un sito che funziona perfettamente e migliora i ranking su Google? I nostri specialisti ottimizzano crawlabilita, velocita e Core Web Vitals per massima visibilita. Risultato: piu traffico organico, migliore UX e conversioni piu alte.',
      ctaText: 'Prenota una intro gratuita',
      ctaLink: '/contact',
      note: '* Il 78% dei siti ha problemi tecnici SEO che limitano i ranking',
      image: '/development-hero.png',
      imageAlt: 'Technical SEO dashboard',
    },
    why: {
      title: {
        prefix: 'Perche',
        highlight: 'SEO tecnico',
        suffix: 'e la base del successo online',
      },
      paragraphs: [
        'Un sito bello con contenuti di qualita e utile, ma senza una base tecnica solida non raggiungi il pieno potenziale su Google. Il SEO tecnico e il fondamento: senza indicizzazione corretta niente ranking, senza velocita niente UX.',
        'I motori moderni valutano sempre piu fattori tecnici. Core Web Vitals, mobile first indexing e page experience updates dicono una cosa: l eccellenza tecnica e un must per ranking competitivi. I siti che restano indietro perdono terreno.',
      ],
      lead: 'Il SEO tecnico impatta direttamente metriche chiave:',
      bullets: [
        'Crawling e indexazione: Google puo rankare solo cio che trova e capisce. Blocchi tecnici impediscono l indicizzazione di contenuti importanti.',
        'Page speed e Core Web Vitals: la velocita e un fattore diretto di ranking e influisce sul bounce rate. Un secondo di ritardo puo significare 7% di perdita conversioni.',
        'Quality Score nelle ads: la performance tecnica influisce sul Quality Score di Google Ads e quindi sul CPC.',
      ],
    },
    niblah: {
      title: {
        prefix: 'Perche outsourcing',
        highlight: 'SEO tecnico',
        suffix: 'a Niblah?',
      },
      subtitle:
        'Con Niblah uniamo competenze tecniche profonde e marketing per ottimizzazioni con impatto reale.',
      cards: [
        {
          title: 'Expertise tecnica olistica',
          description:
            'I nostri specialisti combinano development e SEO. Sappiamo cosa vuole Google e come implementarlo nel tuo platform. Da crawl budget a JavaScript rendering e schema markup.',
        },
        {
          title: 'Diagnostica data driven',
          description:
            'Basiamo le diagnosi su real user data da Search Console e Chrome UX Report, non su tool automatici. Ogni raccomandazione e supportata da dati e impatto business.',
        },
        {
          title: 'Implementazione developer friendly',
          description:
            'I nostri audit includono istruzioni dettagliate che i developer possono eseguire subito. Parliamo la loro lingua e consideriamo la fattibilita tecnica.',
        },
      ],
    },
    tracks: {
      title: {
        prefix: 'SEO tecnico per',
        highlight: 'nuovi ed esistenti siti',
        suffix: '',
      },
      subtitle:
        'Che tu stia costruendo un nuovo sito o ottimizzando un sito esistente - abbiamo l approccio giusto.',
      items: [
        {
          title: 'Guida nuovo sito',
          description:
            'Per i nuovi siti, prevenire e meglio che correggere. Guidiamo il team fin dal primo giorno per implementare il SEO tecnico correttamente.',
          items: [
            {
              title: 'Pre launch SEO audit',
              description:
                'Revisioniamo architettura, struttura URL e implementazione tecnica prima del lancio.',
            },
            {
              title: 'Developer consultancy',
              description:
                'Collaborazione diretta con il team dev su best practices di crawlabilita e indexazione.',
            },
            {
              title: 'Launch validation',
              description:
                'Monitoring post launch per garantire che tutto funzioni.',
            },
          ],
        },
        {
          title: 'Ottimizzazione sito esistente',
          description:
            'Per siti esistenti facciamo un audit completo e priorizziamo gli issues per impatto ed effort.',
          items: [
            {
              title: 'Audit tecnico approfondito',
              description:
                'Analisi completa di crawling, indexazione, site structure, performance e Core Web Vitals.',
            },
            {
              title: 'Roadmap prioritaria',
              description:
                'Piano chiaro con impact scores e ROI stimato per ogni ottimizzazione.',
            },
            {
              title: 'Implementation support',
              description:
                'Supporto hands on durante implementazione e validazione dei fix.',
            },
          ],
        },
      ],
    },
    pillars: {
      title: {
        prefix: 'I 5 pilastri del',
        highlight: 'SEO tecnico',
        suffix: '',
      },
      subtitle:
        'I nostri audit analizzano sistematicamente queste cinque aree critiche.',
      items: [
        {
          number: '01',
          title: 'Crawling e indexazione',
          paragraphs: [
            'I crawler di Google devono esplorare il sito in modo efficiente. Analizziamo crawl budget, identifichiamo orphan pages ed eliminiamo crawl traps. Verifichiamo che le pagine strategiche siano indicizzate e non bloccate da robots.txt, noindex o canonicals.',
            'Analizziamo XML sitemaps, pagination e faceted navigation che spesso causano problemi di indexazione. Obiettivo: Google spende il crawl budget sui contenuti piu importanti.',
          ],
        },
        {
          number: '02',
          title: 'Architettura del sito e struttura URL',
          paragraphs: [
            'Una struttura logica migliora UX e SEO. Valutiamo information architecture, internal linking e URL hierarchy. Il contenuto importante deve essere raggiungibile entro 3 click dalla homepage.',
            'Identifichiamo redirect chains, broken links e duplication issues. Una architettura ottimizzata fa fluire il PageRank verso le pagine di conversione.',
          ],
        },
        {
          number: '03',
          title: 'Core Web Vitals e Page Experience',
          paragraphs: [
            'Core Web Vitals sono fattori di ranking diretti: LCP, FID e CLS. Analizziamo real user metrics e troviamo i bottlenecks.',
            'Problemi comuni: immagini non ottimizzate, render blocking JavaScript, CSS inefficiente e third party scripts. Forniamo fix concreti con impatto misurabile.',
          ],
        },
        {
          number: '04',
          title: 'Configurazione server e hosting',
          paragraphs: [
            'La performance server e spesso trascurata ma critica. Valutiamo TTFB, HTTP/2 o HTTP/3, compression, browser caching e CDN. Un server lento sabota le ottimizzazioni front end.',
            'Analizziamo security headers, mobile serving setup e geo targeting per siti internazionali. Una configurazione corretta e fondamentale per ranking e UX.',
          ],
        },
        {
          number: '05',
          title: 'Structured Data e Rich Results',
          paragraphs: [
            'Schema markup aiuta Google a capire i contenuti e puo generare rich results. Implementiamo schema types rilevanti come Product, FAQ, HowTo, Review, Article e Organization.',
            'Structured data corretta aumenta CTR grazie ai SERP features. Validiamo il markup secondo Google guidelines e massimizziamo l eligibility.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Questi clienti',
        highlight: 'ci hanno scelto',
        suffix: '',
      },
      subtitle: 'Risultati concreti dal SEO tecnico',
      items: [
        {
          initials: 'DW',
          company: 'DigitalWorks',
          label: 'Technical SEO | Core Web Vitals',
          description: 'Overhaul tecnico completo con performance e ranking migliori',
          stats: [
            { value: '342%', label: 'piu traffico organico' },
            { value: '68%', label: 'load time piu veloce' },
            { value: '89%', label: 'Core Web Vitals pass' },
          ],
        },
        {
          initials: 'EH',
          company: 'EcoHome Solutions',
          label: 'Crawl Optimizazione | Indexazione',
          description: 'Crawl budget ottimizzato con 1000+ nuove pagine indicizzate',
          stats: [
            { value: '847%', label: 'piu pagine indicizzate' },
            { value: '4.7x', label: 'crawl efficiency migliore' },
            { value: '267%', label: 'keyword visibility growth' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Cosa dicono',
        highlight: 'i nostri clienti',
        suffix: '',
      },
      subtitle: 'Risultati che parlano da soli.',
      items: [
        {
          quote:
            'L audit tecnico di Niblah e stato incredibilmente approfondito. Hanno trovato issues che i nostri dev non avevano visto. Ranking aumentati dopo implementazione.',
          name: 'Pieter Klaassen',
        },
        {
          quote:
            'Core Web Vitals era il nostro tallone di Achille. Niblah lo ha risolto in modo sistematico. Ora siamo verdi su tutte le metriche e vediamo l impatto nel traffico.',
          name: 'Daan Mulder',
        },
        {
          quote:
            'Finalmente esperti SEO tecnici che parlano il linguaggio dei developer. Le istruzioni erano perfette e subito eseguibili.',
          name: 'Sarah Bakker',
        },
      ],
      ratingLabel: 'Abbiamo 4.9 su Google da 143 recensioni',
    },
    faq: {
      title: {
        prefix: 'Domande',
        highlight: 'frequenti',
        suffix: '',
      },
      items: [
        {
          question: 'Come so se il mio sito ha bisogno di miglioramenti tecnici?',
          answer:
            'Segnali: ranking in calo senza modifiche al contenuto, page speed lenta, punteggi rossi in PageSpeed Insights, poche pagine indicizzate rispetto al totale o crawl errors in Search Console. Un audit gratuito mostra subito lo stato della technical health.',
        },
        {
          question: 'Cosa e richiesto da parte mia?',
          answer:
            'Minimo accesso a Search Console e Google Analytics. Per l implementazione collaboriamo con il tuo team dev o CMS owner. Forniamo istruzioni dettagliate eseguibili. Non e richiesta conoscenza tecnica da parte tua.',
        },
        {
          question: 'Perche usate pochi tools?',
          answer:
            'Gli strumenti automatici danno diagnosi superficiali senza contesto. Generano liste lunghe ma spesso mancano la root cause. Noi usiamo tools per i dati, ma la nostra expertise e interpretazione e prioritizzazione.',
        },
        {
          question: 'Cosa porta l ottimizzazione SEO tecnica?',
          answer:
            'Benefici diretti: ranking migliori grazie a crawlabilita e indexazione, piu traffico grazie a load time e Core Web Vitals migliori, bounce rate piu basso e conversioni piu alte con UX migliore. Il SEO tecnico amplifica tutte le altre attivita.',
        },
        {
          question: 'Quanto velocemente vedo risultati?',
          answer:
            'I miglioramenti di performance sono immediati. L impatto sul ranking dipende dalla crawl frequency - per siti spesso crawled in giorni o settimane, per siti piu piccoli in alcune settimane. Monitoriamo Search Console per misurare e aggiustare.',
        },
        {
          question: 'Tutte le piattaforme possono essere ottimizzate?',
          answer:
            'Quasi tutte, ma il livello di controllo varia. Custom builds e piattaforme come WordPress, Shopify Plus e headless CMS offrono massima flessibilita. Squarespace o Wix hanno piu limiti. Analizziamo prima la piattaforma per aspettative realistiche.',
        },
      ],
    },
  },
};

export function getSEOTechnicalPageCopy(locale) {
  return getLocaleCopy(copy, locale);
}
