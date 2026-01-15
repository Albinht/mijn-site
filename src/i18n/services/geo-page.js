import { getLocaleCopy } from '../utils'

const copy = {
  en: {
    metadata: {
      title: 'Outsource GEO | Be Visible in ChatGPT & Perplexity | Niblah',
      description:
        'Outsource GEO to become discoverable in AI search engines like ChatGPT and Perplexity. Pioneer in Generative Engine Optimization with proven results.',
      keywords:
        'geo, generative engine optimization, ai seo, seo for ai, chatgpt seo, perplexity seo',
      openGraph: {
        title: 'Outsource GEO | Niblah',
        description:
          'Become visible in AI search engines with Generative Engine Optimization (GEO).',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Lead the AI search revolution',
      title: 'Outsource GEO (SEO for AI)',
      description:
        'Want consistent visibility in AI search engines like ChatGPT, Perplexity and Google AI Overviews? Generative Engine Optimization (GEO) is the new frontier in search visibility. While others are still experimenting, we already have months of data on what works. Get cited, referenced and recommended by AI — or lose market share to competitors who do.',
      ctaText: 'Schedule a free intro',
      ctaLink: '/contact',
      note: '* 67% of search queries will be AI‑powered within 3 years',
      image: '/development-hero.png',
      imageAlt: 'GEO dashboard for AI search optimization',
    },
    why: {
      title: {
        prefix: 'Why',
        highlight: 'GEO matters now',
        suffix: 'for your online visibility',
      },
      paragraphs: [
        'The way people search for information is changing fundamentally. ChatGPT reached 100M users in two months. Perplexity is growing 400% year‑over‑year. Google is rolling out AI Overviews that answer questions without clicks. The shift is massive — and irreversible.',
        'Here’s the problem: if your brand, product or expertise is not cited by these AI systems, you effectively don’t exist for a growing part of your audience. Traditional SEO optimized for clicks. GEO (Generative Engine Optimization) optimizes for citations, references and recommendations in AI‑generated answers.',
      ],
      lead: 'GEO is not “future talk” — it’s relevant now because:',
      reasons: [
        'Early mover advantage: AI training data is being shaped right now. Brands building authority and citations today end up in training sets of future model updates. Waiting creates a gap that is hard to close.',
        'Zero‑click search dominance: Google AI Overviews and ChatGPT answers take traffic away from traditional organic results. If you are not in the AI response, you lose visibility even with top SEO rankings.',
        'Competitive displacement: Competitors implementing GEO now become preferred citations. AIs have “memory”: once a source is established as authoritative, displacement gets exponentially harder.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Why',
        highlight: 'Niblah',
        suffix: 'for GEO?',
      },
      subtitle:
        'We pioneer GEO with real data — not theories from whitepapers.',
      cards: [
        {
          title: 'Data‑driven experimentation',
          description:
            'We continuously test content formats, structured data implementations and citation patterns. We measure what drives higher citation rates in ChatGPT, Perplexity and Google AI Overviews. Real data beats speculation.',
        },
        {
          title: 'Integrated SEO + GEO strategy',
          description:
            'GEO is not a replacement for SEO — it’s an evolution. We optimize for traditional search engines and AI systems at the same time. One content strategy, dual optimization, no trade‑offs.',
        },
        {
          title: 'Future‑proof authority building',
          description:
            'We focus on fundamental authority signals that persist through model updates: E‑E‑A‑T compliance, topical depth and citation‑worthy expertise. No hacks that break after the next AI update — sustainable optimization.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Outsourcing GEO to Niblah:',
        highlight: 'now vs later',
        suffix: '',
      },
      nowTitle: 'Now',
      laterTitle: 'Later',
      nowItems: [
        'You see AI influencing search behavior more and more, but you don’t know what to do to keep visibility in this new paradigm.',
        'Competitors are already cited in ChatGPT and Perplexity answers while your brand is never mentioned. You’re losing mindshare.',
        'Traditional SEO feels less effective: traffic drops while rankings stay stable. Zero‑click search is eating your clicks.',
        'You invest in content but see no presence in AI‑generated answers. It’s unclear whether AI systems even crawl it.',
        'You want structure in the chaos: every week new AI announcements, but no clear action plan for your business.',
      ],
      laterItems: [
        'Your brand is consistently included in AI answers as a primary source, authoritative reference, or recommended solution for your expertise area.',
        'AI systems recognize your website as a credible source. Verified expert signals lead to higher citation frequency across queries.',
        'Your team understands the evolving search landscape and has a clear framework to maintain visibility in an AI‑powered future.',
        'You benefit from cutting‑edge experiments without costly trial‑and‑error. Access to proven tactics that already demonstrate ROI.',
        'You lead the AI search revolution with a competitive moat — early authority signals compound over time into a defensible position.',
      ],
    },
    pillars: {
      title: {
        prefix: 'The 5 pillars of',
        highlight: 'effective GEO optimization',
        suffix: '',
      },
      subtitle:
        'Our GEO strategy is built on these five critical optimization areas.',
      items: [
        {
          number: '01',
          title: 'AI‑optimized content structuring',
          paragraphs: [
            'AI systems understand content differently than traditional crawlers. We structure content for machine comprehension: clear topic hierarchies, explicit entity relationships and definitions for key concepts. Each page has unambiguous context — who you are, what your expertise is, and why you are authoritative.',
            'We remove ambiguity that confuses AI: vague pronouns, implied context and jargon without definitions. Content is written in natural language patterns aligned with how models reason and synthesize information — increasing citation likelihood dramatically.',
          ],
        },
        {
          number: '02',
          title: 'Topical authority & entity association',
          paragraphs: [
            'AI systems classify sources by topical expertise. We build explicit associations between your brand and specific topics through comprehensive coverage, consistent messaging and entity disambiguation. When AI sees your domain, it should immediately recognize: “this is the authority on [topic X].”',
            'We implement knowledge graph optimization: structured data that clarifies who you are, what you do and why you are qualified. Schema markup for Organization, Person, Product and Article — mapped to maximize entity recognition.',
          ],
        },
        {
          number: '03',
          title: 'Citation‑worthy expertise demonstration',
          paragraphs: [
            'AI cites sources that demonstrate real expertise. We create content that is citation‑worthy: original research, proprietary data, unique frameworks and expert analysis. Not generic “best practices” content that exists everywhere, but unique insights only you can provide.',
            'E‑E‑A‑T is critical: Experience, Expertise, Authoritativeness and Trustworthiness. We build author profiles, showcase credentials, implement fact‑checking, and maintain accuracy signals that AI systems trust.',
          ],
        },
        {
          number: '04',
          title: 'Multi‑platform source diversification',
          paragraphs: [
            'AI systems aggregate information from many sources. We ensure your expertise is visible across multiple platforms AI crawls: owned content (website/blog), earned media (press mentions, guest articles), social proof (LinkedIn, X) and third‑party validation (reviews, ratings, awards).',
            'Cross‑platform consistency is crucial. AI validates information by corroboration across sources. If your LinkedIn says something different than your website, trust drops. We maintain unified messaging across touchpoints AI can access.',
          ],
        },
        {
          number: '05',
          title: 'Continuous monitoring & adaptation',
          paragraphs: [
            'GEO evolves faster than traditional SEO. Models update, new systems launch and citation patterns shift. We continuously monitor: which content earns citations, in which contexts you are mentioned, and which competitors win AI mindshare.',
            'We track brand mentions in ChatGPT, Perplexity, Google AI Overviews and emerging AI search platforms. Every mention is analyzed for context, sentiment and competitors. This data drives iteration: double down on what works, pivot away from ineffective approaches.',
          ],
        },
      ],
    },
    steps: {
      title: {
        prefix: 'In 5 steps to',
        highlight: 'visibility in AI search engines',
        suffix: '',
      },
      subtitle: 'Our systematic GEO implementation roadmap',
      items: [
        {
          number: '1',
          title: 'Kick‑off & baseline audit',
          description:
            'Audit your SEO foundation and current AI visibility. Where are you (not) cited today and why?',
        },
        {
          number: '2',
          title: 'Strategy & roadmap',
          description:
            'Define priority topics, content gaps and optimization opportunities with the highest citation potential.',
        },
        {
          number: '3',
          title: 'Optimization & content',
          description:
            'Implement GEO best practices: content restructuring, schema markup and authority building.',
        },
        {
          number: '4',
          title: 'Monitoring & reporting',
          description:
            'Track brand mentions in AI systems, citation frequency and competitive positioning.',
        },
        {
          number: '5',
          title: 'Iteration & scaling',
          description:
            'Continuous optimization based on performance data. Expand into new topics and platforms.',
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Early',
        highlight: 'GEO success stories',
        suffix: '',
      },
      subtitle: 'Concrete results from Generative Engine Optimization',
      cases: [
        {
          badge: 'TS',
          name: 'TechSolutions B2B',
          label: 'GEO implementation | 4 months',
          headline:
            'From zero AI visibility to consistent citations in ChatGPT and Perplexity for core topics',
          metrics: [
            { value: '47', label: 'brand mentions per week' },
            { value: '8/10', label: 'priority topics covered' },
            { value: '312%', label: 'AI referral traffic' },
          ],
        },
        {
          badge: 'HC',
          name: 'HealthCare Innovators',
          label: 'Medical GEO | 6 months',
          headline:
            'Authority building in a medical niche with E‑E‑A‑T focus earned trusted source status',
          metrics: [
            { value: '1st', label: 'position citations (67%)' },
            { value: '94%', label: 'citation accuracy' },
            { value: '5.2x', label: 'vs competitor mentions' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'What',
        highlight: 'our clients',
        suffix: 'say',
      },
      subtitle: 'About our GEO expertise',
      items: [
        {
          quote:
            '“Niblah helped us become the first source cited in our niche by AI. We now see regular citations and referral traffic from ChatGPT.”',
          name: 'Emma de Vries',
        },
        {
          quote:
            '“GEO was new territory for us, but Niblah’s framework made it clear. Now we’re consistently recommended in Perplexity answers.”',
          name: 'Tom Bakker',
        },
        {
          quote:
            '“The AI revolution felt overwhelming. Niblah’s data‑driven GEO approach gives us confidence we’re doing the right things for future visibility.”',
          name: 'Robert Visser',
        },
      ],
      ratingText: 'We score 4.9 on Google from 143 reviews',
    },
    faq: {
      title: {
        prefix: 'Frequently asked',
        highlight: 'questions',
        suffix: '',
      },
      items: [
        {
          question: 'What is GEO?',
          answer:
            'GEO (Generative Engine Optimization) — also called “SEO for AI” — is the process of optimizing for visibility in AI‑powered search systems like ChatGPT, Perplexity, Google AI Overviews and Claude. The goal is to be cited, referenced or recommended in AI‑generated responses for questions in your expertise area.',
        },
        {
          question: 'What is the difference between SEO and GEO?',
          answer:
            'Traditional SEO optimizes for clicks: users see your result and click through. GEO optimizes for citations: you want AI systems to use your content as a source in their answers. SEO focuses on keywords and backlinks; GEO focuses on topics, entity recognition and E‑E‑A‑T signals. They are complementary — you need both.',
        },
        {
          question: 'Why is GEO important already if AI search is still relatively small?',
          answer:
            'Early mover advantage is enormous. AI training data is being shaped right now — brands building authority today end up in future training sets. Waiting means competitors establish themselves as preferred citations, which becomes exponentially harder to displace later. AI search adoption is growing 400%+ YoY — “small” becomes “dominant” quickly.',
        },
        {
          question: 'How do you measure GEO results?',
          answer:
            'We track citation frequency (how often you are mentioned), citation context (queries/topics), citation position (primary source vs secondary mention), citation accuracy, competitive share (vs competitors mentioned) and AI referral traffic (clicks from AI platforms to your site).',
        },
        {
          question: 'Does GEO hurt my traditional SEO?',
          answer:
            'No. GEO best practices (clear content structure, E‑E‑A‑T signals, topical authority, entity clarity) are also beneficial for traditional SEO. They are complementary — not contradictory. A good GEO implementation often improves traditional rankings because fundamental quality signals overlap.',
        },
        {
          question: 'What does outsourcing GEO cost?',
          answer:
            'Pricing depends on scope: number of priority topics, required content volume, technical implementation complexity and monitoring needs. It’s typically comparable to premium SEO services, with a focus on future‑proofing. We provide a custom proposal based on your situation and goals.',
        },
      ],
    },
  },
  nl: {
    metadata: {
      title: 'GEO - SEO voor AI | Zichtbaar in ChatGPT & Perplexity | Niblah',
      description:
        'GEO uitbesteden: word vindbaar in AI-zoekmachines zoals ChatGPT en Perplexity. Pionier in Generative Engine Optimization met proven results.',
      keywords:
        'geo, generative engine optimization, seo voor ai, ai seo, chatgpt seo, perplexity',
      openGraph: {
        title: 'GEO - SEO voor AI | Niblah',
        description:
          'Word vindbaar in AI-zoekmachines met Generative Engine Optimization (GEO).',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Vooroplopen in de AI-zoekmachine revolutie',
      title: 'GEO uitbesteden (SEO voor AI)',
      description:
        'Wil je consistent zichtbaar zijn in AI-zoekmachines zoals ChatGPT, Perplexity en Google AI Overview? Generative Engine Optimization (GEO) is de nieuwe frontier in search visibility. Terwijl anderen nog experimenteren, hebben wij al maanden data over wat werkt. Word geciteerd, referenced en aanbevolen door AI - of verlies marktaandeel aan concurrenten die dat wel doen.',
      ctaText: 'Plan gratis kennismaking',
      ctaLink: '/contact',
      note: '* 67% van search queries zal binnen 3 jaar AI-powered zijn',
      image: '/development-hero.png',
      imageAlt: 'GEO dashboard voor AI-zoekoptimalisatie',
    },
    why: {
      title: {
        prefix: 'Waarom',
        highlight: 'GEO nu cruciaal is',
        suffix: 'voor je online zichtbaarheid',
      },
      paragraphs: [
        'De manier waarop mensen informatie zoeken, verandert fundamenteel. ChatGPT heeft 100M gebruikers in 2 maanden bereikt. Perplexity groeit 400% year-over-year. Google integreert AI Overviews die direct antwoorden geven zonder klikken. De shift is massief - en onomkeerbaar.',
        'Hier is het probleem: als je merk, product of expertise niet geciteerd wordt door deze AI systemen, besta je effectief niet voor een growing segment van je doelgroep. Traditional SEO optimaliseerde voor klikken. GEO (Generative Engine Optimization) optimaliseert voor citations, references en recommendations in AI-generated responses.',
      ],
      lead: 'GEO is geen toekomstmuziek - het is nu relevant omdat:',
      reasons: [
        'Early mover advantage: AI training data wordt now gevormd. Brands die nu authority en citations opbouwen, zitten in de training sets van toekomstige model updates. Wachten betekent achterstand die moeilijk in te halen is.',
        'Zero-click search dominance: Google AI Overviews en ChatGPT antwoorden nemen traffic weg van traditional organic results. Als je niet in de AI response zit, verlies je visibility zelfs met perfecte traditional SEO rankings.',
        'Competitive displacement: Concurrenten die nu GEO implementeren, worden preferred citations. AI’s hebben "memory" - once a source is established as authoritative, displacement is exponentially harder.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Waarom',
        highlight: 'Niblah',
        suffix: 'voor GEO?',
      },
      subtitle:
        'Wij pionieren in GEO met real data, niet theorieën uit whitepapers.',
      cards: [
        {
          title: 'Data-driven experimentation',
          description:
            'We runnen continue tests met diverse content types, structured data implementations en citation formats. We meten exact welke approaches leiden tot higher citation rates in ChatGPT, Perplexity en Google AI Overview. Real data trumps speculation.',
        },
        {
          title: 'Integrated SEO+GEO strategie',
          description:
            'GEO is geen replacement voor SEO - het is evolution. Onze strategieën optimaliseren simultaan voor traditional search engines én AI systems. Je wint visibility in both worlds zonder trade-offs. One content strategy, dual optimization.',
        },
        {
          title: 'Future-proof authority building',
          description:
            'We focussen op fundamental authority signals die persistent zijn across model updates: E-E-A-T compliance, topical depth, citation-worthy expertise. Geen hacks die broken zijn na next AI update, maar sustainable optimization.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'GEO uitbesteden aan Niblah:',
        highlight: 'nu versus straks',
        suffix: '',
      },
      nowTitle: 'Nu',
      laterTitle: 'Straks',
      nowItems: [
        'Je merkt dat AI steeds vaker zoekgedrag beïnvloedt, maar je weet niet wat je moet doen om visibility te behouden in deze new paradigm.',
        'Concurrenten worden al geciteerd in ChatGPT en Perplexity responses, terwijl jouw merk nergens mentioned wordt. Je verliest mindshare.',
        'Traditional SEO voelt steeds minder effectief - traffic daalt terwijl je rankings stable blijven. Zero-click search eat jouw clicks.',
        'Je investeert in content maar ziet geen presence in AI-generated answers. Unclear of het überhaupt crawled wordt door AI systems.',
        'Je zoekt structure in de chaos - elke week nieuwe AI announcements, maar geen clear action plan voor jouw business.',
      ],
      laterItems: [
        'Je merk wordt consistent genoemd in AI-antwoorden als primary source, authoritative reference of recommended solution voor je expertise area.',
        'Je website wordt recognized door AI’s als credible source - verified expert status leidt tot higher citation frequency across queries.',
        'Je team begrijpt het evolving search landscape en heeft clear framework voor maintaining visibility in AI-powered future.',
        'Je profiteert van cutting-edge experiments zonder costly trial-and-error. Access tot proven tactics die already demonstrate ROI.',
        'Je loopt vooraan in de AI search revolution met competitive moat - early authority signals compound over time, creating defensible position.',
      ],
    },
    pillars: {
      title: {
        prefix: 'De 5 pijlers van',
        highlight: 'effectieve GEO-optimalisatie',
        suffix: '',
      },
      subtitle:
        'Onze GEO strategie is gefundeerd op deze vijf critical optimization areas.',
      items: [
        {
          number: '01',
          title: 'AI-Optimized Content Structuring',
          paragraphs: [
            "AI’s verstaan content anders dan traditional search crawlers. We structuren content voor machine comprehension: clear topic hierarchies, explicit entity relationships, definitional clarity voor key concepts. Elke page heeft unambiguous context - wie je bent, wat je expertise is, waarom je authoritative bent.",
            "We elimineren ambiguity die AI’s confuses: vague pronouns, implied context, jargon zonder definition. Content is written in natural language patterns die align met hoe AI’s reason en synthesize information. Dit verhoogt citation likelihood dramatisch.",
          ],
        },
        {
          number: '02',
          title: 'Topical Authority & Entity Association',
          paragraphs: [
            "AI’s classify sources by topical expertise. We bouwen explicit associations tussen jouw brand en specific topics through comprehensive content coverage, consistent messaging, en entity disambiguation. Als AI’s jouw domain zien, moeten ze immediately recognize: \"this is THE authority on [topic X].\"",
            'We implementeren Knowledge Graph optimization: structured data die exact clarifies wie je bent, wat je doet, en waarom je qualified bent. Schema markup voor Organization, Person, Product, Article - alles mapped om entity recognition te maximaliseren.',
          ],
        },
        {
          number: '03',
          title: 'Citation-Worthy Expertise Demonstration',
          paragraphs: [
            'AI’s citeren bronnen die demonstrable expertise tonen. We creëren content die citation-worthy is: original research, proprietary data, unique frameworks, expert analysis. Niet generic "best practices" content die exists everywhere, maar unique insights die only jij kunt leveren.',
            'E-E-A-T optimization is critical: Experience (first-hand expertise), Expertise (credentials), Authoritativeness (recognition), Trustworthiness (accuracy). We build author profiles, showcase credentials, implement fact-checking, en maintain content accuracy die AI trust signals.',
          ],
        },
        {
          number: '04',
          title: 'Multi-Platform Source Diversification',
          paragraphs: [
            'AI’s aggregeren data from diverse sources. We zorgen dat jouw expertise visible is across multiple platforms die AI’s crawlen: owned content (website/blog), earned media (press mentions, guest articles), social proof (LinkedIn, Twitter), en third-party validation (reviews, ratings, awards).',
            'Cross-platform consistency is crucial. AI’s validate information by finding corroboration across sources. Als je LinkedIn zegt iets anders dan je website, daalt trust. We maintain unified messaging across all touchpoints die AI’s access.',
          ],
        },
        {
          number: '05',
          title: 'Continuous Monitoring & Adaptation',
          paragraphs: [
            'GEO is evolving faster dan traditional SEO. AI models update constantly, new systems launch, citation patterns shift. We monitoren continuous: welke content krijgt citations? In welke contexts wordt je mentioned? Welke competitors winnen AI mindshare?',
            'We tracken brand mentions in ChatGPT, Perplexity, Google AI Overview en emerging AI search platforms. Elke mention wordt geanalyseerd: context, sentiment, competitors mentioned. Deze data informs strategy iteration - we double down op wat werkt, pivot away van ineffective approaches.',
          ],
        },
      ],
    },
    steps: {
      title: {
        prefix: 'In 5 stappen',
        highlight: 'vindbaar in AI-zoekmachines',
        suffix: '',
      },
      subtitle: 'Onze systematische GEO implementation roadmap',
      items: [
        {
          number: '1',
          title: 'Kick-off & Baseline Audit',
          description:
            'Check van je SEO foundation en current AI visibility. Waar word je nu (niet) geciteerd en waarom?',
        },
        {
          number: '2',
          title: 'Strategie & Roadmap',
          description:
            'Bepalen van priority topics, content gaps, en optimization opportunities die hoogste citation potential hebben.',
        },
        {
          number: '3',
          title: 'Optimalisatie & Content',
          description:
            'Implementatie van GEO best practices: content restructuring, schema markup, authority building.',
        },
        {
          number: '4',
          title: 'Monitoring & Reporting',
          description:
            'Tracking van brand mentions in AI systems, citation frequency, en competitive positioning.',
        },
        {
          number: '5',
          title: 'Iteratie & Scaling',
          description:
            'Continuous optimization based on performance data. Expand naar nieuwe topics en platforms.',
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Early',
        highlight: 'GEO success stories',
        suffix: '',
      },
      subtitle: 'Concrete resultaten van Generative Engine Optimization',
      cases: [
        {
          badge: 'TS',
          name: 'TechSolutions B2B',
          label: 'GEO Implementation | 4 maanden',
          headline:
            'Van zero AI visibility naar consistent citations in ChatGPT en Perplexity voor core topics',
          metrics: [
            { value: '47', label: 'brand mentions per week' },
            { value: '8/10', label: 'priority topics covered' },
            { value: '312%', label: 'AI referral traffic' },
          ],
        },
        {
          badge: 'HC',
          name: 'HealthCare Innovators',
          label: 'Medical GEO | 6 maanden',
          headline:
            'Authority building in medical niche met E-E-A-T focus leverde trusted source status',
          metrics: [
            { value: '1st', label: 'position citations (67%)' },
            { value: '94%', label: 'citation accuracy' },
            { value: '5.2x', label: 'vs competitor mentions' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Dit zeggen',
        highlight: 'onze klanten',
        suffix: '',
      },
      subtitle: 'Over onze GEO expertise',
      items: [
        {
          quote:
            '"Niblah heeft ons geholpen om als eerste in onze niche genoemd te worden door AI. We zien nu regelmatige citations en referral traffic van ChatGPT!"',
          name: 'Emma de Vries',
        },
        {
          quote:
            '"GEO was nieuw territory voor ons, maar Niblah’s framework maakte het clear. Nu worden we consistent aanbevolen in Perplexity responses."',
          name: 'Tom Bakker',
        },
        {
          quote:
            '"De AI revolution voelde overweldigend. Niblah’s data-driven GEO aanpak geeft ons confidence dat we de right things doen voor future visibility!"',
          name: 'Robert Visser',
        },
      ],
      ratingText: 'Wij krijgen een 4.9 op Google uit 143 beoordelingen',
    },
    faq: {
      title: {
        prefix: 'Veelgestelde',
        highlight: 'vragen',
        suffix: '',
      },
      items: [
        {
          question: 'Wat is GEO precies?',
          answer:
            'GEO (Generative Engine Optimization) - ook wel SEO voor AI of AI-SEO genoemd - is het proces van optimaliseren voor visibility in AI-powered search systems zoals ChatGPT, Perplexity, Google AI Overview en Claude. Het doel: geciteerd, referenced of aanbevolen worden in AI-generated responses wanneer users vragen stellen in jouw expertise area.',
        },
        {
          question: 'Wat is het verschil tussen SEO en GEO?',
          answer:
            'Traditional SEO optimaliseert voor clicks: je wilt dat users jouw link in search results zien en aanklikken. GEO optimaliseert voor citations: je wilt dat AI’s jouw content gebruiken als bron in hun generated responses. SEO focust op keywords en backlinks; GEO focust op topics, entity recognition, en E-E-A-T signals. Both are complementary - je hebt beide nodig.',
        },
        {
          question:
            'Waarom is GEO nu al belangrijk als AI search nog relatief klein is?',
          answer:
            'Early mover advantage is enormous in GEO. AI training data wordt gevormd right now - brands die nu authority opbouwen, komen in future training sets. Wachten betekent: concurrenten establish themselves as preferred citations, wat exponentially harder is om te displacen later. Plus: AI search adoption groeit 400%+ YoY - "small" wordt snel "dominant."',
        },
        {
          question: 'Hoe meet je GEO resultaten?',
          answer:
            'We tracken: citation frequency (hoe vaak wordt je merk mentioned in AI responses), citation context (in welke queries en topics), citation position (primaire source vs secondary mention), citation accuracy (correct information), competitive share (vs competitors mentioned), en AI referral traffic (clicks from AI platforms naar je site).',
        },
        {
          question: 'Schaadt GEO optimization mijn traditional SEO?',
          answer:
            'Nee - GEO best practices (clear content structure, E-E-A-T signals, topical authority, entity clarity) zijn ook beneficial voor traditional SEO. Ze zijn complementary, niet contradictory. Goede GEO implementation verbetert vaak ook traditional rankings omdat fundamental quality signals overlap. Je optimaliseert voor both simultaneously.',
        },
        {
          question: 'Wat zijn de kosten van GEO uitbesteden?',
          answer:
            'GEO pricing varieert based on scope: aantal priority topics, content volume needed, technical implementation complexity, en monitoring requirements. Typisch zie je investment comparable met premium SEO services, maar met focus op future-proofing. We doen graag custom prijsvoorstel based on jouw specific situation en goals.',
        },
      ],
    },
  },
  de: {
    metadata: {
      title: 'GEO auslagern | Sichtbar in ChatGPT & Perplexity | Niblah',
      description:
        'GEO auslagern, um in KI‑Suchsystemen wie ChatGPT und Perplexity gefunden zu werden. Pionier in Generative Engine Optimization mit nachweisbaren Ergebnissen.',
      keywords:
        'geo, generative engine optimization, ai seo, seo für ai, chatgpt seo, perplexity',
      openGraph: {
        title: 'GEO auslagern | Niblah',
        description:
          'Sichtbarkeit in KI‑Suchsystemen durch Generative Engine Optimization (GEO).',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Vorne mit dabei in der KI‑Suchrevolution',
      title: 'GEO auslagern (SEO für KI)',
      description:
        'Willst du konstant sichtbar sein in KI‑Suchsystemen wie ChatGPT, Perplexity und Google AI Overviews? Generative Engine Optimization (GEO) ist die neue Frontier der Search Visibility. Während andere noch experimentieren, haben wir bereits Monate an Daten, was wirklich funktioniert. Werde zitiert, referenziert und empfohlen — oder verliere Marktanteile an Wettbewerber.',
      ctaText: 'Kostenloses Kennenlernen planen',
      ctaLink: '/contact',
      note: '* 67% aller Suchanfragen werden innerhalb von 3 Jahren KI‑gestützt sein',
      image: '/development-hero.png',
      imageAlt: 'GEO Dashboard für KI‑Suchoptimierung',
    },
    why: {
      title: {
        prefix: 'Warum',
        highlight: 'GEO jetzt entscheidend ist',
        suffix: 'für deine Sichtbarkeit',
      },
      paragraphs: [
        'Die Art, wie Menschen Informationen suchen, verändert sich fundamental. ChatGPT hat 100M Nutzer in 2 Monaten erreicht. Perplexity wächst 400% YoY. Google integriert AI Overviews, die direkt Antworten liefern — ohne Klicks. Der Shift ist massiv und nicht umkehrbar.',
        'Das Problem: Wenn deine Marke, dein Produkt oder deine Expertise nicht von KI‑Systemen zitiert wird, existierst du für einen wachsenden Teil deiner Zielgruppe praktisch nicht. SEO optimierte für Klicks. GEO optimiert für Zitate, References und Empfehlungen in KI‑Antworten.',
      ],
      lead: 'GEO ist keine Zukunftsmusik — es ist jetzt relevant, weil:',
      reasons: [
        'Early‑Mover‑Vorteil: Trainingsdaten werden gerade geformt. Marken, die jetzt Authority und Citations aufbauen, landen in zukünftigen Trainingssets. Warten bedeutet Rückstand.',
        'Zero‑Click‑Dominanz: AI Overviews und ChatGPT‑Antworten nehmen Traffic von organischen Ergebnissen. Ohne Präsenz in KI‑Antworten verlierst du Sichtbarkeit trotz guter Rankings.',
        'Competitive Displacement: Wettbewerber, die GEO implementieren, werden bevorzugte Quellen. KI hat „Memory“ — etablierte Quellen zu verdrängen wird exponentiell schwerer.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Warum',
        highlight: 'Niblah',
        suffix: 'für GEO?',
      },
      subtitle: 'Wir pionieren GEO mit echten Daten — nicht mit Whitepaper‑Theorie.',
      cards: [
        {
          title: 'Data‑driven Experimente',
          description:
            'Wir testen laufend Content‑Formate, Structured Data und Citation‑Patterns. Wir messen, was zu höheren Citation‑Rates in ChatGPT, Perplexity und Google AI Overviews führt.',
        },
        {
          title: 'Integrierte SEO + GEO Strategie',
          description:
            'GEO ersetzt SEO nicht — es ist Evolution. Wir optimieren simultan für klassische Suchmaschinen und KI‑Systeme. Eine Content‑Strategie, duale Optimierung.',
        },
        {
          title: 'Future‑proof Authority Building',
          description:
            'Wir fokussieren auf fundamentale Authority‑Signale: E‑E‑A‑T, Topical Depth, citation‑würdige Expertise. Keine Hacks, sondern nachhaltige Optimierung.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'GEO auslagern an Niblah:',
        highlight: 'jetzt vs später',
        suffix: '',
      },
      nowTitle: 'Jetzt',
      laterTitle: 'Später',
      nowItems: [
        'Du merkst, dass KI das Suchverhalten beeinflusst, weißt aber nicht, was du tun musst, um Sichtbarkeit zu halten.',
        'Wettbewerber werden in ChatGPT/Perplexity zitiert, deine Marke wird nicht erwähnt. Du verlierst Mindshare.',
        'SEO fühlt sich weniger effektiv an: Traffic sinkt, Rankings bleiben stabil. Zero‑Click nimmt dir Klicks weg.',
        'Du investierst in Content, aber siehst keine Präsenz in KI‑Antworten. Unklar, ob KI ihn überhaupt crawlt.',
        'Du suchst Struktur im Chaos: jede Woche neue AI‑Announcements, aber kein klarer Action Plan.',
      ],
      laterItems: [
        'Deine Marke wird konsistent in KI‑Antworten genannt — als Primary Source oder empfohlene Lösung.',
        'KI erkennt deine Website als credible Source. Verified‑Expert‑Signale erhöhen Citation‑Frequency.',
        'Dein Team versteht das neue Search‑Landscape und hat ein Framework für AI‑Visibility.',
        'Du profitierst von Experiments ohne teures Trial‑and‑Error — mit bewährten Taktiken.',
        'Du baust einen defensible Moat: frühe Authority‑Signale compounden über Zeit.',
      ],
    },
    pillars: {
      title: {
        prefix: 'Die 5 Säulen für',
        highlight: 'effektive GEO‑Optimierung',
        suffix: '',
      },
      subtitle:
        'Unsere GEO‑Strategie basiert auf fünf kritischen Optimierungsbereichen.',
      items: [
        {
          number: '01',
          title: 'AI‑optimierte Content‑Struktur',
          paragraphs: [
            'KI versteht Content anders als klassische Crawler. Wir strukturieren für Machine Comprehension: klare Hierarchien, explizite Entity‑Beziehungen, Definitionen. Jede Seite hat eindeutigen Kontext: wer du bist, wofür du stehst, warum du authoritative bist.',
            'Wir entfernen Ambiguität: vage Pronomen, impliziten Kontext, Jargon ohne Definition. Natural Language Patterns, die zu Reasoning/Synthesis passen, erhöhen Citation‑Likelihood.',
          ],
        },
        {
          number: '02',
          title: 'Topical Authority & Entity Association',
          paragraphs: [
            'KI klassifiziert Quellen nach thematischer Expertise. Wir bauen explizite Assoziationen zwischen Brand und Topics durch Coverage, konsistente Messaging und Entity Disambiguation.',
            'Knowledge‑Graph‑Optimierung via Structured Data: Organization, Person, Product, Article — gemappt für maximale Entity Recognition.',
          ],
        },
        {
          number: '03',
          title: 'Citation‑würdige Expertise',
          paragraphs: [
            'KI zitiert Quellen mit nachweisbarer Expertise. Wir erstellen citation‑würdigen Content: original Research, proprietary Data, Frameworks, Expert Analysis.',
            'E‑E‑A‑T ist kritisch. Author Profiles, Credentials, Fact‑Checking und Accuracy‑Signale schaffen Vertrauen für KI‑Systeme.',
          ],
        },
        {
          number: '04',
          title: 'Multi‑Platform Diversifikation',
          paragraphs: [
            'KI aggregiert aus vielen Quellen. Wir sorgen für Sichtbarkeit über mehrere Plattformen: Website/Blog, Earned Media, Social Proof, Third‑Party Validation.',
            'Konsistenz ist entscheidend. KI validiert durch Corroboration. Widersprüche senken Trust — wir halten Messaging über Touchpoints konsistent.',
          ],
        },
        {
          number: '05',
          title: 'Kontinuierliches Monitoring & Adaptation',
          paragraphs: [
            'GEO entwickelt sich schneller als SEO. Modelle updaten, neue Systeme launchen, Patterns ändern sich. Wir monitoren: welche Inhalte Citations bekommen und in welchen Kontexten du erwähnt wirst.',
            'Wir tracken Mentions in ChatGPT, Perplexity, Google AI Overviews und neuen Plattformen. Jede Mention wird analysiert — Daten steuern Iteration und Fokus.',
          ],
        },
      ],
    },
    steps: {
      title: {
        prefix: 'In 5 Schritten zu',
        highlight: 'Sichtbarkeit in KI‑Suche',
        suffix: '',
      },
      subtitle: 'Unsere systematische GEO‑Roadmap',
      items: [
        {
          number: '1',
          title: 'Kick‑off & Baseline Audit',
          description:
            'SEO‑Foundation und aktuelle AI‑Visibility prüfen. Wo wirst du heute (nicht) zitiert und warum?',
        },
        {
          number: '2',
          title: 'Strategie & Roadmap',
          description:
            'Priority Topics, Content Gaps und Opportunities mit höchstem Citation‑Potential definieren.',
        },
        {
          number: '3',
          title: 'Optimierung & Content',
          description:
            'GEO Best Practices umsetzen: Struktur, Schema Markup, Authority Building.',
        },
        {
          number: '4',
          title: 'Monitoring & Reporting',
          description:
            'Brand Mentions, Citation Frequency und Competitive Positioning tracken.',
        },
        {
          number: '5',
          title: 'Iteration & Scaling',
          description:
            'Kontinuierlich optimieren und auf neue Topics/Plattformen ausweiten.',
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Early',
        highlight: 'GEO Success Stories',
        suffix: '',
      },
      subtitle: 'Konkrete Ergebnisse aus Generative Engine Optimization',
      cases: [
        {
          badge: 'TS',
          name: 'TechSolutions B2B',
          label: 'GEO Implementation | 4 Monate',
          headline:
            'Von null AI‑Visibility zu regelmäßigen Citations für Core Topics',
          metrics: [
            { value: '47', label: 'Brand Mentions pro Woche' },
            { value: '8/10', label: 'Priority Topics abgedeckt' },
            { value: '312%', label: 'AI Referral Traffic' },
          ],
        },
        {
          badge: 'HC',
          name: 'HealthCare Innovators',
          label: 'Medical GEO | 6 Monate',
          headline:
            'Authority Building im Medical‑Niche führte zu Trusted‑Source‑Status',
          metrics: [
            { value: '1st', label: 'Position Citations (67%)' },
            { value: '94%', label: 'Citation Accuracy' },
            { value: '5.2x', label: 'vs Competitor Mentions' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Was',
        highlight: 'unsere Kunden',
        suffix: 'sagen',
      },
      subtitle: 'Über unsere GEO Expertise',
      items: [
        {
          quote:
            '„Niblah hat uns geholfen, als erste Quelle in unserer Nische von KI genannt zu werden. Wir sehen regelmäßige Citations und Referral Traffic aus ChatGPT.“',
          name: 'Emma de Vries',
        },
        {
          quote:
            '„GEO war Neuland, aber das Framework von Niblah machte es klar. Jetzt werden wir in Perplexity Antworten konstant empfohlen.“',
          name: 'Tom Bakker',
        },
        {
          quote:
            '„Die KI‑Revolution fühlte sich überwältigend an. Der data‑driven Ansatz von Niblah gibt uns Confidence für Future Visibility.“',
          name: 'Robert Visser',
        },
      ],
      ratingText: 'Wir haben 4,9 Sterne bei Google aus 143 Bewertungen',
    },
    faq: {
      title: {
        prefix: 'Häufig gestellte',
        highlight: 'Fragen',
        suffix: '',
      },
      items: [
        {
          question: 'Was ist GEO?',
          answer:
            'GEO (Generative Engine Optimization) — auch „SEO für KI“ — ist die Optimierung für Sichtbarkeit in KI‑Suchsystemen wie ChatGPT, Perplexity, Google AI Overviews und Claude. Ziel: als Quelle zitiert oder empfohlen werden.',
        },
        {
          question: 'Was ist der Unterschied zwischen SEO und GEO?',
          answer:
            'SEO optimiert für Klicks. GEO optimiert für Citations: KI soll deine Inhalte als Quelle nutzen. SEO fokussiert Keywords/Backlinks; GEO fokussiert Topics, Entity Recognition und E‑E‑A‑T. Beides ergänzt sich.',
        },
        {
          question: 'Warum ist GEO schon jetzt wichtig?',
          answer:
            'Early‑Mover‑Vorteil: Trainingsdaten werden gerade geformt. Marken, die jetzt Authority aufbauen, landen in zukünftigen Trainingssets. Wettbewerber etablieren sich als bevorzugte Quellen — später zu verdrängen ist deutlich schwerer.',
        },
        {
          question: 'Wie misst man GEO Ergebnisse?',
          answer:
            'Wir tracken Citation Frequency, Context, Position, Accuracy, Competitive Share und AI Referral Traffic.',
        },
        {
          question: 'Schadet GEO meinem SEO?',
          answer:
            'Nein. GEO Best Practices (Struktur, E‑E‑A‑T, Topical Authority) helfen auch SEO. Gute GEO‑Implementierung verbessert oft klassische Rankings.',
        },
        {
          question: 'Was kostet GEO Outsourcing?',
          answer:
            'Hängt vom Scope ab: Priority Topics, Content‑Volumen, technische Implementierung, Monitoring. Oft vergleichbar mit Premium‑SEO, mit Fokus auf Future‑Proofing. Wir machen ein individuelles Angebot.',
        },
      ],
    },
  },
  fr: {
    metadata: {
      title: 'Externaliser le GEO | Visible dans ChatGPT & Perplexity | Niblah',
      description:
        'Externalisez le GEO pour devenir visible dans les moteurs de recherche IA comme ChatGPT et Perplexity. Pionnier en Generative Engine Optimization avec des résultats concrets.',
      keywords:
        'geo, generative engine optimization, seo pour ia, ai seo, chatgpt, perplexity',
      openGraph: {
        title: 'Externaliser le GEO | Niblah',
        description:
          'Devenez visible dans les moteurs IA grâce au GEO (Generative Engine Optimization).',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Prendre de l’avance dans la révolution de la recherche IA',
      title: 'Externaliser le GEO (SEO pour IA)',
      description:
        'Vous voulez être visible dans des moteurs IA comme ChatGPT, Perplexity et Google AI Overviews ? Le GEO est la nouvelle frontière de la visibilité. Pendant que d’autres expérimentent, nous avons déjà des mois de données sur ce qui fonctionne. Soyez cité, référencé et recommandé par l’IA — sinon vos concurrents prendront l’avantage.',
      ctaText: 'Planifier un échange gratuit',
      ctaLink: '/contact',
      note: '* 67% des requêtes seront alimentées par l’IA d’ici 3 ans',
      image: '/development-hero.png',
      imageAlt: 'Dashboard GEO pour la recherche IA',
    },
    why: {
      title: {
        prefix: 'Pourquoi',
        highlight: 'le GEO est crucial maintenant',
        suffix: 'pour votre visibilité',
      },
      paragraphs: [
        'La recherche change profondément. ChatGPT a atteint 100M d’utilisateurs en 2 mois. Perplexity croît de 400% YoY. Google déploie des AI Overviews qui répondent sans clic. Le changement est massif — et irréversible.',
        'Le problème : si votre marque, produit ou expertise n’est pas cité par ces systèmes, vous n’existez pas pour une part croissante de votre audience. Le SEO optimisait pour les clics. Le GEO optimise pour les citations, références et recommandations dans les réponses IA.',
      ],
      lead: 'Le GEO est pertinent dès maintenant car :',
      reasons: [
        'Avantage early mover : les données d’entraînement se construisent maintenant. Les marques qui bâtissent leur autorité aujourd’hui entrent dans les futurs training sets.',
        'Domination du zero‑click : AI Overviews et réponses ChatGPT retirent du trafic aux résultats organiques. Sans présence dans la réponse IA, vous perdez de la visibilité.',
        'Déplacement concurrentiel : les concurrents deviennent des sources “préférées”. Une fois une source établie, la déloger devient très difficile.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Pourquoi',
        highlight: 'Niblah',
        suffix: 'pour le GEO ?',
      },
      subtitle:
        'Nous pionniérons le GEO avec des données réelles — pas des théories.',
      cards: [
        {
          title: 'Expérimentation data‑driven',
          description:
            'Tests continus de formats, structured data et patterns de citation. On mesure ce qui augmente les citations dans ChatGPT, Perplexity et Google AI Overviews.',
        },
        {
          title: 'Stratégie SEO + GEO intégrée',
          description:
            'Le GEO ne remplace pas le SEO — il l’étend. Une stratégie de contenu, double optimisation, sans trade‑off.',
        },
        {
          title: 'Autorité pérenne',
          description:
            'Focus sur les signaux fondamentaux : E‑E‑A‑T, profondeur thématique, expertise citée. Pas de hacks, mais une optimisation durable.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Externaliser le GEO à Niblah :',
        highlight: 'maintenant vs après',
        suffix: '',
      },
      nowTitle: 'Maintenant',
      laterTitle: 'Après',
      nowItems: [
        'Vous voyez l’IA influencer la recherche, mais vous ne savez pas comment conserver votre visibilité.',
        'Vos concurrents sont cités dans ChatGPT/Perplexity, pas vous. Vous perdez du mindshare.',
        'Le SEO semble moins efficace : le trafic baisse malgré des rankings stables. Le zero‑click “mange” vos clics.',
        'Vous publiez du contenu mais n’apparaissez pas dans les réponses IA. On ne sait même pas si l’IA le crawl.',
        'Vous cherchez un plan clair au milieu des annonces IA constantes.',
      ],
      laterItems: [
        'Votre marque est citée régulièrement comme source ou solution recommandée.',
        'Votre site est reconnu comme source crédible, avec une fréquence de citations plus élevée.',
        'Votre équipe a un framework clair pour rester visible dans un futur AI‑powered.',
        'Vous profitez d’expériences avancées sans trial‑and‑error coûteux.',
        'Vous créez un moat : les signaux d’autorité précoces se cumulent dans le temps.',
      ],
    },
    pillars: {
      title: {
        prefix: 'Les 5 piliers d’une',
        highlight: 'optimisation GEO efficace',
        suffix: '',
      },
      subtitle:
        'Notre stratégie GEO repose sur cinq zones d’optimisation critiques.',
      items: [
        {
          number: '01',
          title: 'Structuration de contenu pour l’IA',
          paragraphs: [
            'L’IA comprend le contenu autrement que les crawlers classiques. Nous structurons pour la compréhension machine : hiérarchies claires, relations d’entités explicites, définitions. Chaque page a un contexte sans ambiguïté.',
            'Nous éliminons l’ambiguïté : pronoms vagues, contexte implicite, jargon non défini. Un langage naturel aligné avec le “reasoning” des modèles augmente fortement la probabilité de citation.',
          ],
        },
        {
          number: '02',
          title: 'Autorité thématique & entités',
          paragraphs: [
            'Les systèmes classent les sources par expertise. Nous créons une association claire entre votre marque et des sujets via une couverture complète, un messaging cohérent et la désambiguïsation.',
            'Optimisation knowledge graph via structured data (Organization, Person, Product, Article) pour maximiser la reconnaissance d’entités.',
          ],
        },
        {
          number: '03',
          title: 'Expertise “citation‑worthy”',
          paragraphs: [
            'L’IA cite des sources qui démontrent une expertise. Nous créons du contenu citables : recherche originale, données propriétaires, frameworks uniques, analyses expertes.',
            'E‑E‑A‑T est crucial : profils auteurs, crédentials, fact‑checking et signaux d’exactitude renforcent la confiance.',
          ],
        },
        {
          number: '04',
          title: 'Diversification multi‑plateformes',
          paragraphs: [
            'L’IA agrège depuis de nombreuses sources. Nous rendons votre expertise visible sur plusieurs plateformes : site/blog, earned media, social proof, avis et validations tierces.',
            'La cohérence cross‑platform est clé. L’IA valide par corroboration. Contradictions = baisse de confiance.',
          ],
        },
        {
          number: '05',
          title: 'Monitoring continu & adaptation',
          paragraphs: [
            'Le GEO évolue vite. Modèles, systèmes et patterns de citation changent. Nous monitorons ce qui est cité, les contextes et la concurrence.',
            'Nous analysons chaque mention (contexte, sentiment, concurrents) pour itérer : renforcer ce qui marche, abandonner le reste.',
          ],
        },
      ],
    },
    steps: {
      title: {
        prefix: 'En 5 étapes :',
        highlight: 'visible dans les moteurs IA',
        suffix: '',
      },
      subtitle: 'Notre roadmap GEO',
      items: [
        {
          number: '1',
          title: 'Kick‑off & audit',
          description:
            'Audit SEO + visibilité IA actuelle. Où êtes‑vous cité aujourd’hui et pourquoi ?',
        },
        {
          number: '2',
          title: 'Stratégie & roadmap',
          description:
            'Définir les topics prioritaires, les content gaps et les opportunités à fort potentiel de citation.',
        },
        {
          number: '3',
          title: 'Optimisation & contenu',
          description:
            'Structuration, schema markup, construction d’autorité.',
        },
        {
          number: '4',
          title: 'Monitoring & reporting',
          description:
            'Suivi des mentions, fréquence de citation et positionnement concurrentiel.',
        },
        {
          number: '5',
          title: 'Itération & scaling',
          description:
            'Optimisation continue et expansion vers de nouveaux sujets et plateformes.',
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Early',
        highlight: 'success stories GEO',
        suffix: '',
      },
      subtitle: 'Résultats concrets du GEO',
      cases: [
        {
          badge: 'TS',
          name: 'TechSolutions B2B',
          label: 'Implémentation GEO | 4 mois',
          headline:
            'De zéro visibilité IA à des citations régulières sur des sujets clés',
          metrics: [
            { value: '47', label: 'mentions de marque / semaine' },
            { value: '8/10', label: 'topics prioritaires couverts' },
            { value: '312%', label: 'trafic referral IA' },
          ],
        },
        {
          badge: 'HC',
          name: 'HealthCare Innovators',
          label: 'GEO médical | 6 mois',
          headline:
            'Focus E‑E‑A‑T : statut de source de confiance dans une niche médicale',
          metrics: [
            { value: '1st', label: 'citations en 1ère position (67%)' },
            { value: '94%', label: 'précision des citations' },
            { value: '5.2x', label: 'vs mentions concurrents' },
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
      subtitle: 'Sur notre expertise GEO',
      items: [
        {
          quote:
            '« Niblah nous a aidés à devenir la première source citée dans notre niche. Nous voyons désormais des citations régulières et du referral traffic depuis ChatGPT. »',
          name: 'Emma de Vries',
        },
        {
          quote:
            '« Le GEO était nouveau pour nous, mais le framework de Niblah a tout clarifié. Nous sommes maintenant recommandés dans Perplexity. »',
          name: 'Tom Bakker',
        },
        {
          quote:
            '« La révolution IA semblait écrasante. L’approche data‑driven de Niblah nous donne confiance pour la visibilité future. »',
          name: 'Robert Visser',
        },
      ],
      ratingText: 'Note Google : 4,9/5 sur 143 avis',
    },
    faq: {
      title: {
        prefix: 'Questions',
        highlight: 'fréquentes',
        suffix: '',
      },
      items: [
        {
          question: 'Qu’est‑ce que le GEO ?',
          answer:
            'Le GEO (Generative Engine Optimization) — “SEO pour IA” — consiste à optimiser votre visibilité dans des systèmes IA comme ChatGPT, Perplexity, Google AI Overviews et Claude, afin d’être cité ou recommandé.',
        },
        {
          question: 'Différence entre SEO et GEO ?',
          answer:
            'Le SEO optimise pour les clics. Le GEO optimise pour les citations. SEO = keywords/backlinks, GEO = topics, entités, signaux E‑E‑A‑T. Les deux sont complémentaires.',
        },
        {
          question: 'Pourquoi le GEO est important dès maintenant ?',
          answer:
            'L’avantage early mover est énorme. Les données d’entraînement se construisent maintenant. Attendre, c’est laisser les concurrents devenir des sources “préférées”.',
        },
        {
          question: 'Comment mesurer le GEO ?',
          answer:
            'Fréquence de citation, contexte, position, précision, part concurrentielle et AI referral traffic.',
        },
        {
          question: 'Le GEO nuit‑il au SEO ?',
          answer:
            'Non. Les best practices GEO (structure, E‑E‑A‑T, autorité, entités) aident aussi le SEO.',
        },
        {
          question: 'Quel coût pour externaliser le GEO ?',
          answer:
            'Cela dépend du scope (topics, volume de contenu, technique, monitoring). Souvent comparable à du SEO premium, avec un focus future‑proofing. Proposition sur mesure.',
        },
      ],
    },
  },
  it: {
    metadata: {
      title: 'Outsource GEO | Visibile su ChatGPT & Perplexity | Niblah',
      description:
        'Outsource GEO per diventare visibile nei motori di ricerca IA come ChatGPT e Perplexity. Pionieri della Generative Engine Optimization con risultati concreti.',
      keywords:
        'geo, generative engine optimization, seo per ai, ai seo, chatgpt, perplexity',
      openGraph: {
        title: 'Outsource GEO | Niblah',
        description:
          'Visibilità nei motori IA con la Generative Engine Optimization (GEO).',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Essere in testa alla rivoluzione della ricerca IA',
      title: 'Outsource GEO (SEO per AI)',
      description:
        'Vuoi essere visibile in modo costante su motori IA come ChatGPT, Perplexity e Google AI Overviews? Il GEO è la nuova frontiera della visibilità. Mentre altri sperimentano, noi abbiamo già mesi di dati su cosa funziona. Fatti citare e consigliare dall’IA — oppure lascia spazio ai competitor.',
      ctaText: 'Prenota una call gratuita',
      ctaLink: '/contact',
      note: '* Il 67% delle query sarà AI‑powered entro 3 anni',
      image: '/development-hero.png',
      imageAlt: 'Dashboard GEO per ottimizzazione su ricerca IA',
    },
    why: {
      title: {
        prefix: 'Perché',
        highlight: 'il GEO è cruciale ora',
        suffix: 'per la tua visibilità',
      },
      paragraphs: [
        'Il modo in cui le persone cercano informazioni sta cambiando. ChatGPT ha raggiunto 100M utenti in 2 mesi. Perplexity cresce del 400% YoY. Google introduce AI Overviews che rispondono senza click. Il cambiamento è enorme — e irreversibile.',
        'Il problema: se il tuo brand o la tua expertise non viene citata da questi sistemi, per una parte crescente del pubblico non esisti. La SEO ottimizzava per i click. Il GEO ottimizza per citazioni, riferimenti e raccomandazioni nelle risposte generate.',
      ],
      lead: 'Il GEO è rilevante già adesso perché:',
      reasons: [
        'Early mover advantage: i dati di training si formano ora. I brand che costruiscono autorità oggi entrano nei training set futuri.',
        'Dominanza zero‑click: AI Overviews e risposte ChatGPT sottraggono traffico agli organici. Se non sei nella risposta, perdi visibilità.',
        'Displacement competitivo: i competitor diventano fonti preferite. Una volta stabilita una fonte autorevole, sostituirla è molto più difficile.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Perché',
        highlight: 'Niblah',
        suffix: 'per il GEO?',
      },
      subtitle: 'Pionieri del GEO con dati reali, non teoria.',
      cards: [
        {
          title: 'Sperimentazione data‑driven',
          description:
            'Test continui su formati, structured data e pattern di citazione. Misuriamo cosa aumenta le citazioni su ChatGPT, Perplexity e Google AI Overviews.',
        },
        {
          title: 'Strategia SEO + GEO integrata',
          description:
            'Il GEO non sostituisce la SEO: la evolve. Una strategia di contenuto, doppia ottimizzazione, senza trade‑off.',
        },
        {
          title: 'Autorità future‑proof',
          description:
            'Focus su segnali fondamentali: E‑E‑A‑T, profondità tematica, expertise citabile. Niente hack: ottimizzazione sostenibile.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Outsource GEO con Niblah:',
        highlight: 'ora vs dopo',
        suffix: '',
      },
      nowTitle: 'Ora',
      laterTitle: 'Dopo',
      nowItems: [
        'Vedi l’IA influenzare la ricerca ma non sai cosa fare per mantenere visibilità.',
        'I competitor sono già citati in ChatGPT/Perplexity mentre il tuo brand non è mai menzionato.',
        'La SEO sembra meno efficace: traffico in calo con ranking stabili. Il zero‑click “mangia” i click.',
        'Investi in contenuti ma non appari nelle risposte IA. Non è chiaro se l’IA li crawla.',
        'Cerchi un piano chiaro nel caos delle novità IA continue.',
      ],
      laterItems: [
        'Il tuo brand viene citato regolarmente come fonte o soluzione raccomandata.',
        'Il tuo sito è riconosciuto come fonte credibile, con maggiore frequenza di citazioni.',
        'Il team ha un framework chiaro per rimanere visibile in un futuro AI‑powered.',
        'Benefici di esperimenti avanzati senza trial‑and‑error costoso.',
        'Crei un vantaggio difendibile: i segnali di autorità precoci si sommano nel tempo.',
      ],
    },
    pillars: {
      title: {
        prefix: 'I 5 pilastri di una',
        highlight: 'GEO efficace',
        suffix: '',
      },
      subtitle:
        'La nostra strategia GEO si basa su cinque aree critiche.',
      items: [
        {
          number: '01',
          title: 'Strutturazione contenuti per l’IA',
          paragraphs: [
            'I sistemi IA comprendono i contenuti in modo diverso dai crawler tradizionali. Strutturiamo per comprensione machine: gerarchie chiare, relazioni tra entità, definizioni.',
            'Eliminiamo ambiguità: pronomi vaghi, contesto implicito, jargon non definito. Linguaggio naturale allineato al reasoning dei modelli aumenta la probabilità di citazione.',
          ],
        },
        {
          number: '02',
          title: 'Topical authority & entità',
          paragraphs: [
            'L’IA classifica le fonti per expertise tematica. Costruiamo associazioni chiare tra brand e topic con copertura completa e messaging coerente.',
            'Knowledge graph optimization con structured data (Organization, Person, Product, Article) per massimizzare il riconoscimento delle entità.',
          ],
        },
        {
          number: '03',
          title: 'Expertise “citation‑worthy”',
          paragraphs: [
            'L’IA cita fonti che dimostrano competenza. Creiamo contenuti citabili: ricerca originale, dati proprietari, framework unici, analisi esperta.',
            'E‑E‑A‑T è fondamentale: profili autore, credenziali, fact‑checking e segnali di accuratezza aumentano la fiducia.',
          ],
        },
        {
          number: '04',
          title: 'Diversificazione multi‑piattaforma',
          paragraphs: [
            'L’IA aggrega info da molte fonti. Rendiamo visibile l’expertise su più piattaforme: sito/blog, earned media, social proof, recensioni.',
            'La coerenza cross‑platform è cruciale. Contraddizioni riducono trust. Manteniamo messaging uniforme.',
          ],
        },
        {
          number: '05',
          title: 'Monitoring continuo & adattamento',
          paragraphs: [
            'Il GEO evolve rapidamente. Monitoriamo cosa viene citato, in quali contesti e quali competitor vincono mindshare.',
            'Tracciamo mention su ChatGPT, Perplexity, Google AI Overviews e nuove piattaforme. Analizziamo ogni mention per iterare la strategia.',
          ],
        },
      ],
    },
    steps: {
      title: {
        prefix: 'In 5 step:',
        highlight: 'visibile nei motori IA',
        suffix: '',
      },
      subtitle: 'Roadmap GEO sistematica',
      items: [
        {
          number: '1',
          title: 'Kick‑off & audit',
          description:
            'Audit SEO e visibilità IA. Dove sei citato oggi e perché?',
        },
        {
          number: '2',
          title: 'Strategia & roadmap',
          description:
            'Definire topic prioritari, gap contenuti e opportunità a maggior potenziale di citazione.',
        },
        {
          number: '3',
          title: 'Ottimizzazione & contenuti',
          description:
            'Strutturazione, schema markup e costruzione di autorità.',
        },
        {
          number: '4',
          title: 'Monitoring & reporting',
          description:
            'Tracking delle mention, frequenza citazioni e posizionamento competitivo.',
        },
        {
          number: '5',
          title: 'Iterazione & scaling',
          description:
            'Ottimizzazione continua ed espansione su nuovi topic e piattaforme.',
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Early',
        highlight: 'GEO success stories',
        suffix: '',
      },
      subtitle: 'Risultati concreti di GEO',
      cases: [
        {
          badge: 'TS',
          name: 'TechSolutions B2B',
          label: 'Implementazione GEO | 4 mesi',
          headline:
            'Da zero visibilità IA a citazioni costanti su topic core',
          metrics: [
            { value: '47', label: 'brand mentions a settimana' },
            { value: '8/10', label: 'topic prioritari coperti' },
            { value: '312%', label: 'AI referral traffic' },
          ],
        },
        {
          badge: 'HC',
          name: 'HealthCare Innovators',
          label: 'GEO medicale | 6 mesi',
          headline:
            'Focus E‑E‑A‑T: status di fonte affidabile in una nicchia medicale',
          metrics: [
            { value: '1st', label: 'citazioni in 1ª posizione (67%)' },
            { value: '94%', label: 'accuratezza citazioni' },
            { value: '5.2x', label: 'vs competitor mentions' },
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
      subtitle: 'Sulla nostra expertise GEO',
      items: [
        {
          quote:
            '“Niblah ci ha aiutati a diventare la prima fonte citata nella nostra nicchia. Ora vediamo citazioni regolari e referral traffic da ChatGPT.”',
          name: 'Emma de Vries',
        },
        {
          quote:
            '“Il GEO era nuovo per noi, ma il framework di Niblah ha reso tutto chiaro. Ora siamo consigliati in Perplexity.”',
          name: 'Tom Bakker',
        },
        {
          quote:
            '“La rivoluzione IA sembrava travolgente. L’approccio data‑driven di Niblah ci dà fiducia per la visibilità futura.”',
          name: 'Robert Visser',
        },
      ],
      ratingText: 'Valutazione Google: 4,9/5 su 143 recensioni',
    },
    faq: {
      title: {
        prefix: 'Domande',
        highlight: 'frequenti',
        suffix: '',
      },
      items: [
        {
          question: 'Cos’è il GEO?',
          answer:
            'Il GEO (Generative Engine Optimization) — “SEO per IA” — è l’ottimizzazione per la visibilità in sistemi IA come ChatGPT, Perplexity, Google AI Overviews e Claude, con l’obiettivo di essere citati o raccomandati.',
        },
        {
          question: 'Differenza tra SEO e GEO?',
          answer:
            'La SEO ottimizza per i click. Il GEO ottimizza per le citazioni. SEO = keyword/backlink, GEO = topic, entità, segnali E‑E‑A‑T. Sono complementari.',
        },
        {
          question: 'Perché il GEO è importante già ora?',
          answer:
            'L’early mover advantage è enorme: i training set si formano adesso. Aspettare significa lasciare ai competitor lo status di fonti “preferenziali”.',
        },
        {
          question: 'Come si misurano i risultati GEO?',
          answer:
            'Frequenza citazioni, contesto, posizione, accuratezza, share vs competitor e AI referral traffic.',
        },
        {
          question: 'Il GEO danneggia la SEO tradizionale?',
          answer:
            'No. Le best practice GEO (struttura, E‑E‑A‑T, autorità, entità) aiutano anche la SEO.',
        },
        {
          question: 'Quanto costa outsourciare il GEO?',
          answer:
            'Dipende dallo scope (topic, volume contenuti, implementazione tecnica, monitoring). Spesso comparabile a SEO premium, con focus future‑proofing. Offerta su misura.',
        },
      ],
    },
  },
  sv: {
    metadata: {
      title: 'Outsourca GEO | Synlig i ChatGPT & Perplexity | Niblah',
      description:
        'Outsourca GEO för att bli synlig i AI‑sök som ChatGPT och Perplexity. Pionjär inom Generative Engine Optimization med bevisade resultat.',
      keywords:
        'geo, generative engine optimization, ai seo, seo för ai, chatgpt, perplexity',
      openGraph: {
        title: 'Outsourca GEO | Niblah',
        description:
          'Synlighet i AI‑sök med Generative Engine Optimization (GEO).',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Ligga steget före i AI‑sökrevolutionen',
      title: 'Outsourca GEO (SEO för AI)',
      description:
        'Vill du synas konsekvent i AI‑sök som ChatGPT, Perplexity och Google AI Overviews? GEO är den nya fronten för synlighet. Medan andra experimenterar har vi redan data på vad som fungerar. Bli citerad och rekommenderad — eller tappa marknadsandelar.',
      ctaText: 'Boka ett gratis intro',
      ctaLink: '/contact',
      note: '* 67% av sökningar blir AI‑drivna inom 3 år',
      image: '/development-hero.png',
      imageAlt: 'GEO‑dashboard för AI‑sökoptimering',
    },
    why: {
      title: {
        prefix: 'Varför',
        highlight: 'GEO är kritiskt nu',
        suffix: 'för synlighet',
      },
      paragraphs: [
        'Sökbeteendet förändras snabbt. ChatGPT nådde 100M användare på 2 månader. Perplexity växer 400% YoY. Google lanserar AI Overviews som svarar utan klick. Skiftet är massivt — och oåterkalleligt.',
        'Problemet: om ditt varumärke inte citeras av dessa system, “finns du inte” för en växande del av målgruppen. SEO optimerade för klick. GEO optimerar för citat och rekommendationer i AI‑svar.',
      ],
      lead: 'GEO är relevant redan nu eftersom:',
      reasons: [
        'Early mover advantage: träningsdata formas nu. Bygg auktoritet idag och hamna i framtida training sets.',
        'Zero‑click: AI‑svar tar trafik från organiska resultat. Utan synlighet i svaret tappar du räckvidd.',
        'Konkurrensförskjutning: konkurrenter blir “preferred citations”. Att ersätta etablerade källor blir mycket svårt.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Varför',
        highlight: 'Niblah',
        suffix: 'för GEO?',
      },
      subtitle: 'Vi driver GEO med verklig data, inte teorier.',
      cards: [
        {
          title: 'Data‑driven experimentation',
          description:
            'Vi testar format, structured data och citation patterns och mäter vad som driver citat i ChatGPT, Perplexity och Google AI Overviews.',
        },
        {
          title: 'Integrerad SEO + GEO',
          description:
            'GEO ersätter inte SEO — det utvecklar SEO. En content‑strategi, dubbel optimering.',
        },
        {
          title: 'Future‑proof authority',
          description:
            'Fokus på fundamentala signals: E‑E‑A‑T, topical depth och citation‑worthy expertise. Hållbart, inga hacks.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Outsourca GEO till Niblah:',
        highlight: 'nu vs sen',
        suffix: '',
      },
      nowTitle: 'Nu',
      laterTitle: 'Sen',
      nowItems: [
        'AI påverkar sök, men du vet inte hur du ska behålla synlighet.',
        'Konkurrenter citeras i ChatGPT/Perplexity, du nämns aldrig.',
        'SEO känns svagare: trafik sjunker trots stabila rankings.',
        'Du skapar content men syns inte i AI‑svar. Oklart om AI ens crawl:ar.',
        'Du vill ha ett tydligt action plan i ett snabbt föränderligt AI‑landskap.',
      ],
      laterItems: [
        'Ditt varumärke citeras regelbundet som källa eller rekommenderad lösning.',
        'Din sajt känns igen som trovärdig källa, med högre citation frequency.',
        'Teamet har ett framework för att behålla synlighet i AI‑framtiden.',
        'Du får fördel av experiment utan dyr trial‑and‑error.',
        'Du bygger ett defensible moat: tidiga authority‑signaler compundar över tid.',
      ],
    },
    pillars: {
      title: {
        prefix: 'De 5 pelarna för',
        highlight: 'effektiv GEO‑optimering',
        suffix: '',
      },
      subtitle: 'Vår GEO‑strategi bygger på fem kritiska områden.',
      items: [
        {
          number: '01',
          title: 'AI‑optimerad content‑struktur',
          paragraphs: [
            'Vi strukturerar innehåll för maskinell förståelse: tydliga hierarkier, entitetsrelationer och definitioner.',
            'Vi tar bort tvetydighet och skriver i naturliga mönster som ökar sannolikheten att bli citerad.',
          ],
        },
        {
          number: '02',
          title: 'Topical authority & entiteter',
          paragraphs: [
            'Bygg tydliga associationer mellan varumärke och topics genom djup coverage och konsistent messaging.',
            'Knowledge graph optimization via structured data för maximal entity recognition.',
          ],
        },
        {
          number: '03',
          title: 'Citation‑worthy expertise',
          paragraphs: [
            'Skapa unikt innehåll: research, proprietär data, frameworks och expertanalys.',
            'E‑E‑A‑T: author profiles, credentials och fact‑checking stärker förtroende.',
          ],
        },
        {
          number: '04',
          title: 'Multi‑platform sources',
          paragraphs: [
            'Synlighet på flera plattformar: webb, earned media, social proof och tredje parts validering.',
            'Konsistens mellan källor är avgörande för trust.',
          ],
        },
        {
          number: '05',
          title: 'Kontinuerlig monitoring',
          paragraphs: [
            'Modeller och citation patterns ändras. Vi följer vad som citeras och i vilka kontexter.',
            'Vi analyserar mentions och itererar strategi baserat på data.',
          ],
        },
      ],
    },
    steps: {
      title: {
        prefix: 'På 5 steg:',
        highlight: 'synlig i AI‑sök',
        suffix: '',
      },
      subtitle: 'Vår GEO‑roadmap',
      items: [
        {
          number: '1',
          title: 'Kick‑off & audit',
          description: 'Audit av SEO‑grund och AI‑synlighet.',
        },
        {
          number: '2',
          title: 'Strategi',
          description: 'Prioritera topics, content gaps och opportunities.',
        },
        {
          number: '3',
          title: 'Optimering',
          description: 'Struktur, schema markup och authority building.',
        },
        {
          number: '4',
          title: 'Monitoring',
          description: 'Tracking av mentions, citat och konkurrens.',
        },
        {
          number: '5',
          title: 'Iteration',
          description: 'Optimera kontinuerligt och skala upp.',
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Early',
        highlight: 'GEO success stories',
        suffix: '',
      },
      subtitle: 'Konkreta GEO‑resultat',
      cases: [
        {
          badge: 'TS',
          name: 'TechSolutions B2B',
          label: 'GEO | 4 månader',
          headline: 'Från noll till regelbundna citat på core topics',
          metrics: [
            { value: '47', label: 'mentions/vecka' },
            { value: '8/10', label: 'topics täckta' },
            { value: '312%', label: 'AI referral traffic' },
          ],
        },
        {
          badge: 'HC',
          name: 'HealthCare Innovators',
          label: 'Medical GEO | 6 månader',
          headline: 'Trusted source status med E‑E‑A‑T fokus',
          metrics: [
            { value: '1st', label: 'position citations (67%)' },
            { value: '94%', label: 'accuracy' },
            { value: '5.2x', label: 'vs competitors' },
          ],
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Det här säger',
        highlight: 'våra kunder',
        suffix: '',
      },
      subtitle: 'Om vår GEO‑expertis',
      items: [
        {
          quote:
            '“Niblah hjälpte oss bli första källan i vår nisch. Nu ser vi citat och referral traffic från ChatGPT.”',
          name: 'Emma de Vries',
        },
        {
          quote:
            '“GEO var nytt för oss, men Niblah gjorde det tydligt. Nu rekommenderas vi i Perplexity.”',
          name: 'Tom Bakker',
        },
        {
          quote:
            '“AI‑revolutionen kändes överväldigande. Niblahs data‑driven approach ger oss trygghet.”',
          name: 'Robert Visser',
        },
      ],
      ratingText: 'Betyg på Google: 4,9 av 5 (143 recensioner)',
    },
    faq: {
      title: {
        prefix: 'Vanliga',
        highlight: 'frågor',
        suffix: '',
      },
      items: [
        {
          question: 'Vad är GEO?',
          answer:
            'GEO är optimering för synlighet i AI‑sök som ChatGPT, Perplexity och Google AI Overviews, med målet att bli citerad eller rekommenderad.',
        },
        {
          question: 'Skillnad mellan SEO och GEO?',
          answer:
            'SEO optimerar för klick. GEO optimerar för citat. SEO = keywords/backlinks, GEO = topics, entiteter och E‑E‑A‑T.',
        },
        {
          question: 'Varför är GEO viktigt redan nu?',
          answer:
            'Early mover advantage är stort. Träningsdata formas nu, och preferred citations är svåra att ersätta senare.',
        },
        {
          question: 'Hur mäter man GEO?',
          answer:
            'Citation frequency, context, position, accuracy, competitive share och AI referral traffic.',
        },
        {
          question: 'Skadar GEO SEO?',
          answer:
            'Nej. GEO best practices hjälper ofta även traditionell SEO.',
        },
        {
          question: 'Vad kostar GEO?',
          answer:
            'Beror på scope: topics, contentvolym, teknik och monitoring. Vi ger en skräddarsydd offert.',
        },
      ],
    },
  },
  da: {
    metadata: {
      title: 'Outsource GEO | Synlig i ChatGPT & Perplexity | Niblah',
      description:
        'Outsource GEO for at blive synlig i AI‑søg som ChatGPT og Perplexity. Pioner i Generative Engine Optimization med konkrete resultater.',
      keywords:
        'geo, generative engine optimization, ai seo, seo for ai, chatgpt, perplexity',
      openGraph: {
        title: 'Outsource GEO | Niblah',
        description:
          'Synlighed i AI‑søgesystemer med Generative Engine Optimization (GEO).',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Vær foran i AI‑søgerevolutionen',
      title: 'Outsource GEO (SEO for AI)',
      description:
        'Vil du være synlig i AI‑søg som ChatGPT, Perplexity og Google AI Overviews? GEO er den nye frontier. Mens andre eksperimenterer, har vi data på hvad der virker. Bliv citeret og anbefalet — eller tab markedsandele.',
      ctaText: 'Book et gratis intro',
      ctaLink: '/contact',
      note: '* 67% af søgninger bliver AI‑drevne inden for 3 år',
      image: '/development-hero.png',
      imageAlt: 'GEO dashboard til AI‑søgoptimering',
    },
    why: {
      title: {
        prefix: 'Hvorfor',
        highlight: 'GEO er vigtigt nu',
        suffix: 'for synlighed',
      },
      paragraphs: [
        'Søgning ændrer sig fundamentalt. AI Overviews og ChatGPT giver svar uden klik. Skiftet er massivt og irreversibelt.',
        'Hvis din ekspertise ikke citeres af AI‑systemer, “findes du ikke” for en voksende del af målgruppen. GEO optimerer for citations og anbefalinger i AI‑svar.',
      ],
      lead: 'GEO er relevant allerede nu fordi:',
      reasons: [
        'Early mover advantage: træningsdata formes nu. Byg autoritet i dag og bliv en foretrukken kilde.',
        'Zero‑click: uden synlighed i AI‑svar mister du trafik og visibility.',
        'Competitive displacement: når kilder er etableret, er de svære at fortrænge.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Hvorfor',
        highlight: 'Niblah',
        suffix: 'til GEO?',
      },
      subtitle: 'GEO baseret på data — ikke teori.',
      cards: [
        {
          title: 'Data‑drevne eksperimenter',
          description:
            'Vi tester formater, structured data og citation patterns og måler hvad der øger citations.',
        },
        {
          title: 'Integreret SEO + GEO',
          description:
            'GEO erstatter ikke SEO. En strategi, dobbelt optimering.',
        },
        {
          title: 'Future‑proof authority',
          description:
            'Fokus på E‑E‑A‑T, topical depth og citation‑worthy expertise.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Outsource GEO til Niblah:',
        highlight: 'nu vs senere',
        suffix: '',
      },
      nowTitle: 'Nu',
      laterTitle: 'Senere',
      nowItems: [
        'Du ser AI påvirke søgning, men mangler en plan.',
        'Konkurrenter bliver citeret, du bliver ikke nævnt.',
        'SEO giver færre klik pga. zero‑click.',
        'Du laver content men ses ikke i AI‑svar.',
        'Du har brug for struktur i et hurtigt ændrende landskab.',
      ],
      laterItems: [
        'Dit brand citeres regelmæssigt som kilde eller løsning.',
        'Dit site anerkendes som troværdig kilde med højere citations.',
        'Teamet har et framework for AI‑visibility.',
        'Du undgår dyr trial‑and‑error og bruger proven tactics.',
        'Du bygger et defensible moat med tidlige authority‑signaler.',
      ],
    },
    pillars: {
      title: {
        prefix: 'De 5 søjler i',
        highlight: 'effektiv GEO',
        suffix: '',
      },
      subtitle: 'Strategi baseret på fem kritiske områder.',
      items: [
        {
          number: '01',
          title: 'AI‑optimeret content‑struktur',
          paragraphs: [
            'Strukturér content for machine comprehension med klare hierarkier og entiteter.',
            'Fjern tvetydighed og skriv naturligt for at øge citation likelihood.',
          ],
        },
        {
          number: '02',
          title: 'Topical authority & entities',
          paragraphs: [
            'Skab klare associationer mellem brand og topics.',
            'Structured data for entity recognition.',
          ],
        },
        {
          number: '03',
          title: 'Citation‑worthy expertise',
          paragraphs: [
            'Skab unikt indhold der er værd at citere.',
            'E‑E‑A‑T og accuracy‑signaler øger trust.',
          ],
        },
        {
          number: '04',
          title: 'Multi‑platform sources',
          paragraphs: [
            'Synlighed på flere platforme AI crawlers bruger.',
            'Konsistens på tværs af kilder er afgørende.',
          ],
        },
        {
          number: '05',
          title: 'Kontinuerlig monitoring',
          paragraphs: [
            'Citations ændrer sig — vi monitorerer løbende.',
            'Analyser af mentions driver iteration af strategien.',
          ],
        },
      ],
    },
    steps: {
      title: {
        prefix: 'På 5 trin:',
        highlight: 'synlig i AI‑søg',
        suffix: '',
      },
      subtitle: 'Vores GEO‑roadmap',
      items: [
        { number: '1', title: 'Kick‑off & audit', description: 'Baseline audit.' },
        { number: '2', title: 'Strategi', description: 'Prioriter topics.' },
        { number: '3', title: 'Optimering', description: 'Struktur og schema.' },
        { number: '4', title: 'Monitoring', description: 'Track mentions.' },
        { number: '5', title: 'Iteration', description: 'Optimer og skalér.' },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Early',
        highlight: 'GEO success stories',
        suffix: '',
      },
      subtitle: 'Konkrete GEO resultater',
      cases: [
        {
          badge: 'TS',
          name: 'TechSolutions B2B',
          label: 'GEO | 4 måneder',
          headline: 'Fra nul til citations på core topics',
          metrics: [
            { value: '47', label: 'mentions/uge' },
            { value: '8/10', label: 'topics dækket' },
            { value: '312%', label: 'AI referral traffic' },
          ],
        },
        {
          badge: 'HC',
          name: 'HealthCare Innovators',
          label: 'Medical GEO | 6 måneder',
          headline: 'Trusted source status med E‑E‑A‑T',
          metrics: [
            { value: '1st', label: 'position citations (67%)' },
            { value: '94%', label: 'accuracy' },
            { value: '5.2x', label: 'vs competitors' },
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
      subtitle: 'Om vores GEO‑expertise',
      items: [
        {
          quote:
            '“Niblah hjalp os med at blive citeret som første kilde i vores niche. Vi ser nu citations og referral traffic fra ChatGPT.”',
          name: 'Emma de Vries',
        },
        {
          quote:
            '“GEO var nyt for os, men Niblah gjorde det klart. Nu anbefales vi i Perplexity.”',
          name: 'Tom Bakker',
        },
        {
          quote:
            '“AI‑revolutionen var overvældende. Niblahs data‑drevne tilgang giver os tryghed.”',
          name: 'Robert Visser',
        },
      ],
      ratingText: 'Google rating: 4,9/5 baseret på 143 anmeldelser',
    },
    faq: {
      title: {
        prefix: 'Ofte stillede',
        highlight: 'spørgsmål',
        suffix: '',
      },
      items: [
        {
          question: 'Hvad er GEO?',
          answer:
            'GEO er optimering for synlighed i AI‑søgesystemer, så du bliver citeret eller anbefalet.',
        },
        {
          question: 'Forskel på SEO og GEO?',
          answer:
            'SEO = klik. GEO = citations. De supplerer hinanden.',
        },
        {
          question: 'Hvorfor vigtigt nu?',
          answer:
            'Early mover advantage. Preferred citations er svære at erstatte senere.',
        },
        {
          question: 'Hvordan måles?',
          answer:
            'Citation frequency, context, position, accuracy, share og AI referral traffic.',
        },
        {
          question: 'Skader GEO SEO?',
          answer:
            'Nej. GEO best practices hjælper ofte SEO.',
        },
        {
          question: 'Hvad koster GEO?',
          answer:
            'Afhænger af scope. Vi laver et custom tilbud.',
        },
      ],
    },
  },
}

export function getGEOPageCopy(locale) {
  return getLocaleCopy(copy, locale)
}

