import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'Outsource Content Marketing | More Traffic & Authority | Niblah',
      description:
        'Outsource content marketing to experts who create strategic content. Build online authority, generate traffic, and increase conversions with valuable content that really works.',
      keywords: 'outsource content marketing, content strategy, seo content, thought leadership, content creation',
      openGraph: {
        title: 'Outsource Content Marketing | Niblah',
        description: 'Strategic content that builds authority and drives growth.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Strategic content that builds authority and drives traffic',
      title: 'Outsource content marketing',
      description:
        'Want to build online authority and attract more visitors consistently? By outsourcing content marketing to specialists you invest in strategic content that reaches your audience, convinces them, and moves them to action. The result: more visitors, higher conversions, and measurable growth.',
      ctaText: 'Schedule a free intro',
      ctaLink: '/contact',
      note: '* 87% of companies see unused opportunities in their content strategy',
      image: '/development-hero.png',
      imageAlt: 'Content marketing dashboard',
    },
    process: {
      title: 'Our approach to <highlight>content marketing</highlight>',
      subtitle:
        'How do we create strategic content that really delivers results? Our proven five-step process:',
      steps: [
        {
          number: '01',
          title: 'Strategic content analysis',
          description:
            'We start by mapping your business goals and audience. Which content does your target need at each stage of the customer journey? We analyze competitors, identify content gaps, and decide which formats deliver the best ROI for your situation.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Brand positioning and tone of voice',
          description:
            'Your brand identity is the base for every piece of content. Together we define how you communicate: formal or accessible, informative or inspiring. This tone of voice combined with your value proposition keeps content recognizable and resonant.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Content creation and production',
          description:
            'Now the real work starts. Our content creators produce copy, visuals, and multimedia aligned with your strategy. Each piece is optimized for SEO, tuned to the right buyer persona, and includes clear calls to action that drive conversion.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Review and iteration',
          description:
            'Your input is critical. We present concepts for approval and process feedback efficiently. Short feedback loops ensure the content matches expectations and brand guidelines.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publication and performance tracking',
          description:
            'Content goes live on a strategic publishing schedule. We monitor metrics: traffic, engagement, conversions, and ROI. These insights help us optimize the strategy and make future content even stronger.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Why',
        highlight: 'outsourcing content marketing',
        suffix: 'is the smart choice',
      },
      paragraphs: [
        'Anyone can create content - write a blog, post on social, or produce a video. But strategic content that truly drives business growth requires expertise, time, and a thoughtful approach that most companies cannot build internally.',
        'Effective content marketing combines multiple disciplines: SEO knowledge for visibility, copywriting for persuasion, design for visual impact, and data analysis for optimization. Content must also match every phase of the customer journey and stay consistent with brand identity.',
      ],
      lead: 'Organizations that outsource content marketing to professionals realize clear benefits:',
      bullets: [
        'Strategic content that builds online authority and positions your brand as a thought leader',
        'Consistent content production without internal resource pressure, delivered on schedule',
        'Measurable results: more organic traffic, higher engagement, and stronger conversion rates',
      ],
    },
    niblah: {
      title: {
        prefix: 'Why',
        highlight: 'outsourcing content marketing',
        suffix: 'to Niblah?',
      },
      subtitle:
        'At Niblah you do not get standard content production, but strategic content that truly supports your business goals.',
      cards: [
        {
          title: 'Data driven content strategy',
          description:
            'We base content decisions on data, not assumptions. Keyword research, competitor analysis, and audience insights create content that is found and converts. Every piece has a measurable goal and supports your KPIs.',
        },
        {
          title: 'Multidisciplinary content team',
          description:
            'Our content creators collaborate with SEO specialists, designers, and strategists. This holistic approach ensures content is not only attractive but also technically optimized, strategically relevant, and visually strong.',
        },
        {
          title: 'Full funnel content approach',
          description:
            'We create content for every stage of the customer journey: awareness content to reach new prospects, consideration content to build trust, and decision content that drives conversion. This integrated approach maximizes the value of every piece.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'What is',
        highlight: 'content marketing',
        suffix: 'exactly?',
      },
      paragraphs: [
        'Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant content to attract and retain a specific audience. The difference from traditional marketing? You do not sell directly, you first build authority and trust.',
        'Effective content marketing requires deep understanding of your audience: which challenges they face, what information they seek, and how your products or services solve their problems. By consistently sharing valuable content, you position your brand as an expert and build a loyal community.',
        'At Niblah we develop holistic content strategies across every touchpoint: from SEO optimized blog articles and whitepapers to engaging social media content and educational videos. Each format is used where it creates the most impact in the customer journey.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'These clients',
        highlight: 'went before you',
        suffix: '',
      },
      subtitle: 'Concrete results from organizations that outsource content marketing',
      items: [
        {
          initials: 'GC',
          company: 'GreenConnect',
          label: 'Content Marketing | SEO | Social',
          description:
            'Structural content production turned the blog into a lead generation machine',
          stats: [
            { value: '287%', label: 'more organic traffic' },
            { value: '5.2x', label: 'more downloads' },
            { value: '194%', label: 'lead growth' },
          ],
        },
        {
          initials: 'IP',
          company: 'InnovatePro',
          label: 'Content Strategy | Thought Leadership',
          description:
            'Strategic thought leadership content built sector authority',
          stats: [
            { value: '156%', label: 'higher engagement' },
            { value: '3.7x', label: 'more backlinks' },
            { value: '218%', label: 'brand awareness growth' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Outsource content marketing:',
        highlight: 'this is what you gain',
        suffix: '',
      },
      intro:
        'Why do organizations choose to outsource content marketing to professionals? The return on investment speaks for itself:',
      items: [
        {
          title: 'Superior online visibility and durable traffic.',
          description:
            'Strategic SEO optimized content attracts thousands of new visitors each month who search for your solutions. This organic traffic keeps growing without extra ad spend.',
        },
        {
          title: 'Thought leadership and brand authority.',
          description:
            'Content that addresses your audience challenges positions you as an industry expert. Prospects trust your expertise and choose you over competitors.',
        },
        {
          title: 'Higher conversions from educated prospects.',
          description:
            'Content marketing educates your audience before they contact you. They understand the problem better and see your solution as the logical choice, leading to shorter sales cycles and higher conversion rates.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'This is what',
        highlight: 'our clients say',
        suffix: '',
      },
      subtitle: 'Long term partnerships based on trust and measurable results.',
      items: [
        {
          quote:
            'Our blog was transformed from a dusty archive into a lead generation machine. Niblah content attracts exactly the right prospects and converts consistently.',
          name: 'Emma de Vries',
        },
        {
          quote:
            'Finally a partner that thinks strategically and executes. Outsourcing content marketing to Niblah was our best marketing decision this year.',
          name: 'Thomas Hendriks',
        },
        {
          quote:
            'The strategic content from Niblah positioned us as a thought leader. We see direct impact on inbound leads.',
          name: 'Jasper Visser',
        },
      ],
      ratingLabel: 'We score 4.9 on Google from 143 reviews',
    },
    contentTypes: {
      title: {
        prefix: 'Outsource content marketing:',
        highlight: 'the content we create',
        suffix: '',
      },
      subtitle:
        'From strategic SEO content to engaging multimedia: we cover every format your marketing strategy needs.',
      items: [
        {
          title: 'SEO content & blogs',
          description:
            'Blog articles and pillar pages that generate organic traffic and build authority. Our SEO specialists identify high value keywords and content creators produce deep articles that Google and your audience value. Each blog is designed to improve rankings and convert visitors into leads.',
        },
        {
          title: 'Website content',
          description:
            'Homepage, about, service, and product pages that communicate your brand identity and drive conversion. We write clear, persuasive website copy that translates your unique value proposition and guides visitors to desired actions. Every page is optimized for user experience and SEO.',
        },
        {
          title: 'Video & multimedia content',
          description:
            'Explainer videos, tutorials, and social content that maximize engagement. Video content generates 1200% more shares than text and images combined. We produce professional videos with scripts that resonate, visuals that hold attention, and calls to action that convert, optimized for each platform.',
        },
        {
          title: 'Email marketing content',
          description:
            'Newsletters, nurture sequences, and promotional emails that get opened and convert. Email marketing delivers an average 40x ROI per euro invested. Our copywriters create compelling subject lines, engaging body copy, and clear CTAs that turn subscribers into customers through smart automation flows.',
        },
        {
          title: 'Whitepapers & ebooks',
          description:
            'In depth gated content for lead generation and thought leadership. Whitepapers position you as an industry expert and are one of the most effective formats for B2B lead generation. We develop research backed documents with professional design that convince prospects to share their details and enter your sales funnel.',
        },
        {
          title: 'Social media content',
          description:
            'Platform specific content that boosts engagement and community growth. From LinkedIn thought leadership posts to Instagram carousels and video content, we create social content that matches each platform algorithm and user behavior. Includes caption copy, hashtag strategy, and community management guidelines for maximum reach.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Frequently asked',
        highlight: 'questions',
        suffix: '',
      },
      items: [
        {
          question: 'What are the benefits of outsourcing content marketing?',
          answer:
            'Outsourcing content marketing gives you access to specialized expertise without building internal resources. Professionals deliver consistent, high quality content that is strategically aligned with your business goals. You save time, achieve better SEO results, and benefit from proven content frameworks that drive conversion.',
        },
        {
          question: 'How much does it cost to outsource content marketing?',
          answer:
            'Costs vary based on content volume, complexity, and desired formats. A strategic blog costs differently than video production or whitepaper development. We offer transparent project pricing and retainer models for ongoing production. Plan a free intro and we will provide a custom proposal based on your needs.',
        },
        {
          question: 'How do I measure the success of outsourced content?',
          answer:
            'We track concrete KPIs: organic traffic growth, keyword rankings, engagement metrics (time on page, bounce rate), social shares, lead generation, and conversion rates. Monthly reports show exactly which pieces perform best. We use these insights to optimize the strategy for maximum ROI.',
        },
        {
          question: 'What does a content marketing agency do exactly?',
          answer:
            'A content marketing agency develops holistic content strategies based on your business goals and audience insights. We use a data driven approach: keyword research, competitor analysis, and customer journey mapping guide all decisions. Then we produce multiple formats, optimize for SEO, and distribute through relevant channels.',
        },
        {
          question: 'Why outsource content marketing to Niblah?',
          answer:
            'At Niblah you work with a multidisciplinary team where content creators collaborate closely with SEO experts, designers, and data analysts. This integrated approach ensures content is not only attractive but also technically sound, strategically relevant, and data optimized. We deliver content that measurably drives your business growth.',
        },
        {
          question: 'How much content do I need for results?',
          answer:
            'Content marketing is a long term investment. At a minimum, most companies benefit from 2 to 4 strategic blog posts per month combined with website optimization and social content. For faster results we recommend 8 to 12 pieces per month across multiple formats. We always tailor volume to your budget and growth goals.',
        },
      ],
    },
  },
  nl: {
    metadata: {
      title: 'Content Marketing Uitbesteden | Meer Traffic & Autoriteit | Niblah',
      description:
        'Content marketing uitbesteden aan experts die strategische content creeren. Bouw online autoriteit, genereer traffic en vergroot je conversies met waardevolle content die echt werkt.',
      keywords: 'content marketing uitbesteden, content strategie, seo content, thought leadership, content creatie',
      openGraph: {
        title: 'Content Marketing Uitbesteden | Niblah',
        description: 'Strategische content die autoriteit bouwt en groei versnelt.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Strategische content die autoriteit bouwt en traffic genereert',
      title: 'Content marketing uitbesteden',
      description:
        'Wil je online autoriteit opbouwen en structureel meer bezoekers trekken? Door content marketing uit te besteden aan specialisten investeer je in strategische content die jouw doelgroep bereikt, overtuigt en tot actie aanzet. Het resultaat: meer websitebezoekers, hogere conversies en meetbare groei.',
      ctaText: 'Plan gratis kennismaking',
      ctaLink: '/contact',
      note: '* 87% van bedrijven ziet onbenutte kansen in hun contentstrategie',
      image: '/development-hero.png',
      imageAlt: 'Content marketing dashboard',
    },
    process: {
      title: 'De werkwijze voor <highlight>content marketing</highlight>',
      subtitle:
        'Hoe creeren we strategische content die echt resultaat oplevert? Ons bewezen proces in vijf stappen:',
      steps: [
        {
          number: '01',
          title: 'Strategische contentanalyse',
          description:
            'We starten met het in kaart brengen van jouw business doelstellingen en doelgroep. Welke content heeft jouw target nodig in verschillende fases van hun klantreis? We analyseren concurrentie, identificeren content gaps en bepalen welke contentformaten de beste ROI opleveren voor jouw specifieke situatie.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Merkpositionering en tone of voice',
          description:
            'Jouw merkidentiteit vormt de basis voor alle content. We definieren samen hoe je communiceert: formeel of toegankelijk, informatief of inspirerend. Deze tone of voice, gecombineerd met jouw unieke waardepropositie, zorgt ervoor dat alle content herkenbaar is en resoneert met je ideale klant.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Content creatie en productie',
          description:
            'Nu begint het echte werk. Onze content creators produceren teksten, visuals en multimedia die perfect aansluiten bij jouw strategie. Elke contentpiece is geoptimaliseerd voor SEO, afgestemd op de juiste buyer persona en voorzien van duidelijke call to actions die conversie stimuleren.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Review en iteratie',
          description:
            'Jouw input is cruciaal. We presenteren concepten voor goedkeuring en verwerken feedback efficient. Door korte feedback loops garanderen we dat de content perfect aansluit bij jouw verwachtingen en merkrichtlijnen.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publicatie en performance tracking',
          description:
            'Content gaat live volgens een strategische publicatieplanning. We monitoren performance metrics: traffic, engagement, conversies en ROI. Deze data inzichten gebruiken we om de contentstrategie continu te optimaliseren en toekomstige content nog effectiever te maken.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Waarom',
        highlight: 'content marketing uitbesteden',
        suffix: 'de slimme keuze is',
      },
      paragraphs: [
        'Content creeren kan iedereen - een blog schrijven, een social post maken of een video produceren. Maar strategische content die daadwerkelijk bijdraagt aan business groei? Dat vereist expertise, tijd en een doordachte aanpak die de meeste bedrijven intern niet kunnen realiseren.',
        'Effectieve content marketing combineert meerdere disciplines: SEO kennis voor vindbaarheid, copywriting voor overtuigingskracht, design voor visuele impact en data analyse voor optimalisatie. Daarnaast moet je content perfect aansluiten bij elke fase van de customer journey en consistent zijn met je merkidentiteit.',
      ],
      lead: 'Organisaties die hun content marketing uitbesteden aan professionals realiseren concrete voordelen:',
      bullets: [
        'Strategische content die online autoriteit opbouwt en jouw merk positioneert als thought leader in je sector',
        'Consistente content productie zonder interne resource druk - professionele creators leveren kwaliteit op schema',
        'Meetbare resultaten: meer organisch traffic, hogere engagement en verbeterde conversieratios door geoptimaliseerde content',
      ],
    },
    niblah: {
      title: {
        prefix: 'Waarom',
        highlight: 'content marketing uitbesteden',
        suffix: 'aan Niblah?',
      },
      subtitle:
        'Bij Niblah krijg je geen standaard contentproductie, maar strategische content die echt bijdraagt aan je business doelstellingen.',
      cards: [
        {
          title: 'Data gedreven content strategie',
          description:
            'We baseren content beslissingen op harde data, niet op aannames. Door grondig keyword research, concurrent analyse en doelgroep insights te combineren, creeren we content die echt gevonden wordt en converteert. Elk contentpiece heeft een meetbaar doel en draagt bij aan je KPIs.',
        },
        {
          title: 'Multidisciplinair content team',
          description:
            'Onze content creators werken nauw samen met SEO specialisten, designers en strategen. Deze holistische aanpak garandeert dat content niet alleen mooi is, maar ook technisch geoptimaliseerd, strategisch relevant en visueel aantrekkelijk. Alle expertise onder een dak voor maximale content effectiviteit.',
        },
        {
          title: 'Full funnel content aanpak',
          description:
            'We creeren content voor elke fase van de customer journey: awareness content om nieuwe prospects te bereiken, consideration content om vertrouwen op te bouwen en decision content die conversie stimuleert. Deze geintegreerde aanpak maximaliseert de waarde van elk contentpiece.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Wat is',
        highlight: 'content marketing',
        suffix: 'precies?',
      },
      paragraphs: [
        'Content marketing is een strategische marketingaanpak gericht op het creeren en distribueren van waardevolle, relevante content om een specifieke doelgroep aan te trekken en te behouden. Het verschil met traditionele marketing? Je verkoopt niet direct, maar bouwt eerst autoriteit en vertrouwen op.',
        'Effectieve content marketing vereist begrip van jouw doelgroep op diepgaand niveau: welke uitdagingen hebben ze, welke informatie zoeken ze en hoe kunnen jouw producten of diensten hun problemen oplossen? Door consistent waardevolle content te delen, positioneer je jouw merk als expert en bouw je een loyale community op.',
        'Bij Niblah ontwikkelen we holistische content strategieen die alle touchpoints dekken: van SEO geoptimaliseerde blog artikelen en whitepapers tot engaging social media content en educational videos. Elke contentvorm wordt ingezet waar deze het meeste impact heeft in de customer journey.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Deze klanten',
        highlight: 'gingen je voor',
        suffix: '',
      },
      subtitle: 'Concrete resultaten van organisaties die hun content marketing uitbesteden',
      items: [
        {
          initials: 'GC',
          company: 'GreenConnect',
          label: 'Content Marketing | SEO | Social',
          description:
            'Structurele content productie transformeerde blog naar leadgeneratie machine',
          stats: [
            { value: '287%', label: 'meer organisch traffic' },
            { value: '5.2x', label: 'meer downloads' },
            { value: '194%', label: 'groei in leads' },
          ],
        },
        {
          initials: 'IP',
          company: 'InnovatePro',
          label: 'Content Strategie | Thought Leadership',
          description:
            'Strategische thought leadership content bouwde sector autoriteit op',
          stats: [
            { value: '156%', label: 'hogere engagement' },
            { value: '3.7x', label: 'meer backlinks' },
            { value: '218%', label: 'brand awareness groei' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Content marketing uitbesteden:',
        highlight: 'dit is wat het je oplevert',
        suffix: '',
      },
      intro:
        'Waarom kiezen organisaties ervoor om content marketing uit te besteden aan professionals? De return on investment spreekt voor zich:',
      items: [
        {
          title: 'Superieure online vindbaarheid en duurzaam traffic.',
          description:
            'Strategische content die SEO geoptimaliseerd is trekt maandelijks duizenden nieuwe bezoekers die actief zoeken naar jouw oplossingen. Dit organische traffic blijft groeien zonder extra advertentiebudget.',
        },
        {
          title: 'Opgebouwde thought leadership en merkautoriteit.',
          description:
            'Content die diepgaand ingaat op challenges van jouw doelgroep positioneert je als industry expert. Prospects vertrouwen je expertise en kiezen eerder voor jouw oplossing boven concurrenten.',
        },
        {
          title: 'Verhoogde conversies door educated prospects.',
          description:
            'Content marketing educeert je doelgroep al voordat ze contact opnemen. Ze begrijpen hun probleem beter en zien jouw oplossing als de logische keuze, resulterend in kortere sales cycles en hogere conversieratios.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Dit is wat',
        highlight: 'onze klanten zeggen',
        suffix: '',
      },
      subtitle: 'Langdurige partnerships gebaseerd op vertrouwen en meetbaar resultaat.',
      items: [
        {
          quote:
            'Onze blog is getransformeerd van stoffig archief naar leadgeneratie machine. De content van Niblah trekt exact de juiste prospects en converteert consistent.',
          name: 'Emma de Vries',
        },
        {
          quote:
            'Eindelijk een partner die strategisch denkt en uitvoert. Content marketing uitbesteden aan Niblah was onze beste marketing beslissing dit jaar.',
          name: 'Thomas Hendriks',
        },
        {
          quote:
            'De strategische content die Niblah produceert heeft ons gepositioneerd als thought leader. We zien direct impact op inbound leads.',
          name: 'Jasper Visser',
        },
      ],
      ratingLabel: 'Wij krijgen een 4.9 op Google uit 143 beoordelingen',
    },
    contentTypes: {
      title: {
        prefix: 'Content marketing uitbesteden:',
        highlight: 'deze content creeren we',
        suffix: '',
      },
      subtitle:
        'Van strategische SEO content tot engaging multimedia: we dekken alle contentformaten die jouw marketing strategie nodig heeft.',
      items: [
        {
          title: 'SEO content en blogs',
          description:
            'Blog artikelen en pillar pages die organisch traffic genereren en autoriteit opbouwen. Onze SEO specialisten identificeren high value keywords en content creators produceren diepgaande artikelen die zowel Google als je doelgroep waarderen. Elke blog is strategisch ontworpen om rankings te verbeteren en bezoekers te converteren naar leads.',
        },
        {
          title: 'Website content',
          description:
            'Homepage, about, service en product paginas die je merkidentiteit communiceren en conversie stimuleren. We schrijven heldere, overtuigende website copy die jouw unique value proposition perfect vertaalt en bezoekers door een logische flow leidt naar gewenste acties. Elke pagina is geoptimaliseerd voor zowel gebruikservaring als SEO.',
        },
        {
          title: 'Video en multimedia content',
          description:
            'Explainer videos, tutorials en social media content die engagement maximaliseren. Video content genereert 1200% meer shares dan tekst en afbeeldingen gecombineerd. We produceren professionele videos met scripts die resoneren, visuals die boeien en calls to action die converteren, geoptimaliseerd voor elk platform.',
        },
        {
          title: 'Email marketing content',
          description:
            'Newsletters, nurture sequences en promotional emails die openen en conversie genereren. Email marketing levert gemiddeld 40x ROI per geinvesteerde euro. Onze copywriters creeren compelling subject lines, engaging body copy en duidelijke CTAs die subscribers transformeren naar betalende klanten door strategische automation flows.',
        },
        {
          title: 'Whitepapers en ebooks',
          description:
            'Diepgaande gated content voor leadgeneratie en thought leadership. Whitepapers positioneren je als industry expert en zijn het meest effectieve format voor B2B leadgeneratie. We ontwikkelen research backed documenten met professioneel design die prospects overtuigen hun contactgegevens te delen en je sales funnel te betreden.',
        },
        {
          title: 'Social media content',
          description:
            'Platform specifieke content die engagement en community growth stimuleert. Van LinkedIn thought leadership posts tot Instagram carousels en video content, we creeren sociale content die past bij elk platform algoritme en user behavior. Inclusief caption copy, hashtag strategie en community management richtlijnen voor maximale reach.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Veelgestelde',
        highlight: 'vragen',
        suffix: '',
      },
      items: [
        {
          question: 'Wat zijn de voordelen van content marketing uitbesteden?',
          answer:
            'Door content marketing uit te besteden krijg je toegang tot gespecialiseerde expertise zonder interne resources op te bouwen. Professionals leveren consistente, hoogwaardige content die strategisch is afgestemd op je business doelen. Je bespaart tijd, realiseert betere SEO resultaten en profiteert van bewezen content frameworks die conversie stimuleren.',
        },
        {
          question: 'Wat kost het om content marketing uit te besteden?',
          answer:
            'Kosten varieren afhankelijk van content volume, complexiteit en gewenste formaten. Een strategische blog kost anders dan video productie of whitepaper development. We bieden transparante projectprijzen en retainer modellen voor doorlopende content productie. Plan een vrijblijvend gesprek en we maken een custom offerte gebaseerd op jouw specifieke content behoeften.',
        },
        {
          question: 'Hoe meet ik het succes van de uitbestede content?',
          answer:
            'We tracken concrete KPIs: organisch traffic growth, keyword rankings, engagement metrics (time on page, bounce rate), social shares, lead generation en conversion rates. Maandelijkse rapportages tonen exact welke content pieces de beste performance leveren. Deze data inzichten gebruiken we om de strategie continu te optimaliseren voor maximale ROI.',
        },
        {
          question: 'Wat doet een content marketing bureau precies?',
          answer:
            'Een content marketing bureau ontwikkelt holistische content strategieen gebaseerd op jouw business doelen en doelgroep insights. We hanteren een data driven aanpak: keyword research, competitor analyse en customer journey mapping informeren alle content beslissingen. Vervolgens produceren we diverse content formaten, optimaliseren voor SEO en distribueren via relevante kanalen.',
        },
        {
          question: 'Waarom content marketing uitbesteden aan Niblah?',
          answer:
            'Bij Niblah werk je met een multidisciplinair team waar content creators nauw samenwerken met SEO experts, designers en data analisten. Deze geintegreerde aanpak garandeert dat content niet alleen mooi is, maar ook technisch perfect, strategisch relevant en data geoptimaliseerd. We leveren content die meetbaar bijdraagt aan je business groei.',
        },
        {
          question: 'Hoeveel content heb ik nodig voor resultaat?',
          answer:
            'Content marketing is een long term investment. Minimaal hebben bedrijven baat bij 2 tot 4 strategische blog posts per maand, gecombineerd met website optimalisatie en social content. Voor snellere resultaten adviseren we een intensievere content productie van 8 tot 12 pieces per maand over diverse formaten. We stemmen volume altijd af op je budget en groeidoelstellingen.',
        },
      ],
    },
  },
  de: {
    metadata: {
      title: 'Content Marketing auslagern | Mehr Traffic & Autoritaet | Niblah',
      description:
        'Content Marketing an Experten auslagern, die strategischen Content erstellen. Baue Online Autoritaet auf, generiere Traffic und steigere Conversions mit Content der wirklich wirkt.',
      keywords: 'content marketing auslagern, content strategie, seo content, thought leadership, content produktion',
      openGraph: {
        title: 'Content Marketing auslagern | Niblah',
        description: 'Strategischer Content fuer mehr Autoritaet und Wachstum.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Strategischer Content der Autoritaet aufbaut und Traffic generiert',
      title: 'Content Marketing auslagern',
      description:
        'Willst du Online Autoritaet aufbauen und konstant mehr Besucher gewinnen? Wenn du Content Marketing auslagerst, investierst du in strategischen Content der Zielgruppen erreicht, ueberzeugt und zu Aktion bewegt. Ergebnis: mehr Besucher, hoehere Conversions und messbares Wachstum.',
      ctaText: 'Kostenloses Kennenlernen',
      ctaLink: '/contact',
      note: '* 87% der Unternehmen sehen ungenutzte Chancen in ihrer Content Strategie',
      image: '/development-hero.png',
      imageAlt: 'Content marketing dashboard',
    },
    process: {
      title: 'Unser Vorgehen fuer <highlight>Content Marketing</highlight>',
      subtitle:
        'Wie erstellen wir strategischen Content der wirklich Ergebnisse bringt? Unser bewaehrter Prozess in fuenf Schritten:',
      steps: [
        {
          number: '01',
          title: 'Strategische Content Analyse',
          description:
            'Wir starten mit der Analyse deiner Ziele und Zielgruppe. Welche Inhalte braucht deine Zielgruppe in den einzelnen Phasen der Customer Journey? Wir analysieren Wettbewerb, finden Content Gaps und bestimmen die Formate mit der besten ROI.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Markenpositionierung und Tone of Voice',
          description:
            'Deine Markenidentitaet bildet die Basis fuer jeden Inhalt. Gemeinsam definieren wir wie du kommunizierst: formal oder nahbar, informativ oder inspirierend. Diese Tone of Voice und dein Wertversprechen sorgen fuer Wiedererkennung und Resonanz.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Content Erstellung und Produktion',
          description:
            'Jetzt beginnt die Umsetzung. Unsere Content Creator produzieren Texte, Visuals und Multimedia die zur Strategie passen. Jeder Content ist fuer SEO optimiert, auf die Buyer Persona abgestimmt und mit klaren CTAs versehen.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Review und Iteration',
          description:
            'Dein Feedback ist entscheidend. Wir praesentieren Konzepte, verarbeiten Rueckmeldungen effizient und stellen sicher, dass Inhalte zu Erwartungen und Markenrichtlinien passen.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publikation und Performance Tracking',
          description:
            'Content geht nach einem klaren Publishing Plan live. Wir messen Traffic, Engagement, Conversions und ROI und optimieren die Strategie laufend.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Warum',
        highlight: 'Content Marketing auslagern',
        suffix: 'die smarte Wahl ist',
      },
      paragraphs: [
        'Content erstellen kann jeder - einen Blog schreiben, einen Social Post erstellen oder ein Video produzieren. Aber strategischer Content der Business Wachstum bringt, erfordert Expertise, Zeit und eine klare Strategie, die viele Unternehmen intern nicht abbilden koennen.',
        'Effektives Content Marketing verbindet mehrere Disziplinen: SEO Wissen fuer Sichtbarkeit, Copywriting fuer Ueberzeugung, Design fuer visuelle Wirkung und Datenanalyse fuer Optimierung. Inhalte muessen ausserdem jede Phase der Customer Journey abdecken und zur Marke passen.',
      ],
      lead: 'Unternehmen die Content Marketing auslagern erzielen klare Vorteile:',
      bullets: [
        'Strategischer Content der Online Autoritaet aufbaut und deine Marke als Thought Leader positioniert',
        'Konstante Content Produktion ohne internen Ressourcendruck, geliefert nach Plan',
        'Messbare Ergebnisse: mehr organischer Traffic, hoeheres Engagement und bessere Conversion Rates',
      ],
    },
    niblah: {
      title: {
        prefix: 'Warum',
        highlight: 'Content Marketing auslagern',
        suffix: 'an Niblah?',
      },
      subtitle:
        'Bei Niblah bekommst du keine Standardproduktion, sondern strategischen Content der deine Ziele unterstuetzt.',
      cards: [
        {
          title: 'Datengetriebene Content Strategie',
          description:
            'Wir treffen Content Entscheidungen auf Basis von Daten. Keyword Research, Wettbewerbsanalyse und Zielgruppen Insights sorgen fuer Inhalte die gefunden werden und konvertieren. Jeder Content hat ein klares Ziel und stuetzt deine KPIs.',
        },
        {
          title: 'Multidisziplinaeres Content Team',
          description:
            'Unsere Content Creator arbeiten mit SEO Spezialisten, Designern und Strategen zusammen. So entstehen Inhalte die schoen, technisch optimiert und strategisch relevant sind.',
        },
        {
          title: 'Full Funnel Content Ansatz',
          description:
            'Wir erstellen Inhalte fuer jede Phase der Customer Journey: Awareness, Consideration und Decision. Diese integrierte Herangehensweise maximiert den Wert jedes Content Stuecks.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Was ist',
        highlight: 'Content Marketing',
        suffix: 'genau?',
      },
      paragraphs: [
        'Content Marketing ist eine strategische Marketingmethode die darauf abzielt wertvolle und relevante Inhalte zu erstellen und zu distribuieren, um eine Zielgruppe anzuziehen und zu binden. Du verkaufst nicht direkt, sondern baust Vertrauen und Autoritaet auf.',
        'Effektives Content Marketing erfordert tiefes Verstaendnis der Zielgruppe: welche Probleme sie haben, welche Informationen sie suchen und wie deine Leistungen helfen. Kontinuierlicher Mehrwert positioniert deine Marke als Experte und baut Community auf.',
        'Bei Niblah entwickeln wir holistische Content Strategien ueber alle Touchpoints: von SEO optimierten Blogartikeln und Whitepapers bis zu Social Media Content und Educational Videos. Jedes Format wird dort eingesetzt wo es am meisten Wirkung hat.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Diese Kunden',
        highlight: 'gingen voran',
        suffix: '',
      },
      subtitle: 'Konkrete Ergebnisse von Unternehmen die Content Marketing auslagern',
      items: [
        {
          initials: 'GC',
          company: 'GreenConnect',
          label: 'Content Marketing | SEO | Social',
          description:
            'Strukturierten Content Produktion machte den Blog zur Leadmaschine',
          stats: [
            { value: '287%', label: 'mehr organischer Traffic' },
            { value: '5.2x', label: 'mehr Downloads' },
            { value: '194%', label: 'Lead Wachstum' },
          ],
        },
        {
          initials: 'IP',
          company: 'InnovatePro',
          label: 'Content Strategie | Thought Leadership',
          description:
            'Strategischer Thought Leadership Content baute Branchenautoritaet auf',
          stats: [
            { value: '156%', label: 'hoeheres Engagement' },
            { value: '3.7x', label: 'mehr Backlinks' },
            { value: '218%', label: 'Brand Awareness Wachstum' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Content Marketing auslagern:',
        highlight: 'das bringt es dir',
        suffix: '',
      },
      intro:
        'Warum investieren Unternehmen in professionelles Content Marketing? Der ROI spricht fuer sich:',
      items: [
        {
          title: 'Bessere Sichtbarkeit und nachhaltiger Traffic.',
          description:
            'Strategischer SEO Content bringt monatlich neue Besucher die aktiv nach deinen Loesungen suchen. Dieser organische Traffic waechst ohne zusaetzliches Werbebudget.',
        },
        {
          title: 'Thought Leadership und Markenautoritaet.',
          description:
            'Content der die Herausforderungen der Zielgruppe loest positioniert dich als Branchenexperte. Prospects vertrauen dir und entscheiden sich eher fuer deine Loesung.',
        },
        {
          title: 'Hoehere Conversions durch informierte Prospects.',
          description:
            'Content Marketing bildet deine Zielgruppe vor dem Kontakt. Sie verstehen das Problem besser und sehen deine Loesung als logisch, was Sales Cycles verkuerzt und Conversions erhoeht.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Das sagen',
        highlight: 'unsere Kunden',
        suffix: '',
      },
      subtitle: 'Langfristige Partnerschaften basierend auf Vertrauen und messbaren Ergebnissen.',
      items: [
        {
          quote:
            'Unser Blog wurde von einem staubigen Archiv zu einer Leadmaschine. Der Content von Niblah zieht die richtigen Prospects an und konvertiert konstant.',
          name: 'Emma de Vries',
        },
        {
          quote:
            'Endlich ein Partner der strategisch denkt und liefert. Content Marketing auslagern an Niblah war unsere beste Marketing Entscheidung dieses Jahr.',
          name: 'Thomas Hendriks',
        },
        {
          quote:
            'Der strategische Content von Niblah hat uns als Thought Leader positioniert. Wir sehen direkten Impact auf Inbound Leads.',
          name: 'Jasper Visser',
        },
      ],
      ratingLabel: 'Wir erhalten 4.9 auf Google aus 143 Bewertungen',
    },
    contentTypes: {
      title: {
        prefix: 'Content Marketing auslagern:',
        highlight: 'diese Inhalte liefern wir',
        suffix: '',
      },
      subtitle:
        'Von strategischem SEO Content bis zu Multimedia: wir decken alle Formate ab die deine Marketing Strategie braucht.',
      items: [
        {
          title: 'SEO Content und Blogs',
          description:
            'Blogartikel und Pillar Pages die organischen Traffic erzeugen und Autoritaet aufbauen. Unsere SEO Spezialisten finden relevante Keywords und Content Creator schreiben tiefgehende Artikel die Google und Zielgruppen schaetzen. Jeder Blog verbessert Rankings und konvertiert Besucher zu Leads.',
        },
        {
          title: 'Website Content',
          description:
            'Homepage, About, Service und Produktseiten die Markenidentitaet kommunizieren und Conversions steigern. Wir schreiben klare Copy die dein Value Proposition uebersetzt und Besucher zu Aktionen fuehrt. Jede Seite ist fuer UX und SEO optimiert.',
        },
        {
          title: 'Video und Multimedia Content',
          description:
            'Explainer Videos, Tutorials und Social Content die Engagement maximieren. Video erzeugt 1200% mehr Shares als Text und Bilder zusammen. Wir produzieren professionelle Videos mit Script, starken Visuals und CTAs, optimiert fuer jede Plattform.',
        },
        {
          title: 'Email Marketing Content',
          description:
            'Newsletter, Nurture Sequences und Promotions die geoeffnet werden und konvertieren. Email Marketing liefert im Schnitt 40x ROI pro investiertem Euro. Wir schreiben starke Betreffzeilen, Body Copy und klare CTAs fuer Automation Flows.',
        },
        {
          title: 'Whitepapers und Ebooks',
          description:
            'Gated Content fuer Leadgenerierung und Thought Leadership. Whitepapers positionieren dich als Experte und sind im B2B sehr effektiv. Wir erstellen research basierte Dokumente mit Design die Prospects zur Kontaktfreigabe bewegen.',
        },
        {
          title: 'Social Media Content',
          description:
            'Plattform spezifischer Content der Engagement und Community Growth steigert. Von LinkedIn Thought Leadership bis Instagram Carousels: wir erstellen Inhalte die zu Algorithmus und Nutzerverhalten passen. Inklusive Captions, Hashtags und Community Guidelines.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Haeufige',
        highlight: 'Fragen',
        suffix: '',
      },
      items: [
        {
          question: 'Welche Vorteile hat das Auslagern von Content Marketing?',
          answer:
            'Durch Outsourcing erhaeltst du Zugang zu spezialisierter Expertise ohne interne Ressourcen aufzubauen. Profis liefern konsistenten Content der auf deine Ziele einzahlt. Du sparst Zeit, erzielst bessere SEO Ergebnisse und nutzt bewaehrte Frameworks fuer Conversion.',
        },
        {
          question: 'Was kostet es Content Marketing auszulagern?',
          answer:
            'Die Kosten haengen von Umfang, Komplexitaet und Formaten ab. Ein strategischer Blog kostet anders als Video Produktion oder Whitepaper. Wir bieten transparente Projektpreise und Retainer fuer laufende Produktion. In einem kostenlosen Intro erstellen wir ein Angebot.',
        },
        {
          question: 'Wie messe ich den Erfolg ausgelagerten Contents?',
          answer:
            'Wir tracken KPIs wie organischen Traffic, Keyword Rankings, Engagement (Time on Page, Bounce Rate), Social Shares, Leads und Conversions. Monatliche Reports zeigen welche Inhalte am besten performen. Damit optimieren wir die Strategie fuer maximale ROI.',
        },
        {
          question: 'Was macht eine Content Marketing Agentur genau?',
          answer:
            'Eine Content Marketing Agentur entwickelt holistische Strategien basierend auf Zielen und Zielgruppen Insights. Keyword Research, Wettbewerbsanalyse und Customer Journey Mapping steuern alle Entscheidungen. Danach produzieren wir Inhalte, optimieren fuer SEO und distribuieren ueber passende Kanaele.',
        },
        {
          question: 'Warum Content Marketing an Niblah auslagern?',
          answer:
            'Bei Niblah arbeitest du mit einem multidisziplinaeren Team. Content Creator arbeiten eng mit SEO Experten, Designern und Data Analysts. So entstehen Inhalte die schoen, technisch sauber und strategisch relevant sind. Wir liefern messbare Business Ergebnisse.',
        },
        {
          question: 'Wie viel Content brauche ich fuer Ergebnisse?',
          answer:
            'Content Marketing ist ein langfristiges Investment. Minimum sind 2 bis 4 strategische Blogposts pro Monat plus Website Optimierung und Social Content. Fuer schnellere Ergebnisse empfehlen wir 8 bis 12 Pieces pro Monat ueber verschiedene Formate. Wir passen das Volumen an Budget und Ziele an.',
        },
      ],
    },
  },
  sv: {
    metadata: {
      title: 'Outsourca content marketing | Mer trafik och auktoritet | Niblah',
      description:
        'Outsourca content marketing till experter som skapar strategisk content. Bygg online auktoritet, generera trafik och oka konverteringar med content som fungerar.',
      keywords: 'outsourca content marketing, content strategi, seo content, thought leadership, content produktion',
      openGraph: {
        title: 'Outsourca content marketing | Niblah',
        description: 'Strategisk content som bygger auktoritet och driver tillvaxt.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Strategisk content som bygger auktoritet och driver trafik',
      title: 'Outsourca content marketing',
      description:
        'Vill du bygga online auktoritet och fa fler besokare over tid? Genom att outsourca content marketing investerar du i strategisk content som nar din malgrupp, overtygar och driver action. Resultat: fler besokare, hogre konvertering och matbar tillvaxt.',
      ctaText: 'Boka gratis intro',
      ctaLink: '/contact',
      note: '* 87% av foretag ser outnyttjade mojligheter i sin content strategi',
      image: '/development-hero.png',
      imageAlt: 'Content marketing dashboard',
    },
    process: {
      title: 'Vart arbetssatt for <highlight>content marketing</highlight>',
      subtitle:
        'Hur skapar vi strategisk content som ger resultat? Vart beprovade femstegsflode:',
      steps: [
        {
          number: '01',
          title: 'Strategisk content analys',
          description:
            'Vi kartlagger affarsmal och malgrupp. Vilken content behovs i varje fas av kundresan? Vi analyserar konkurrenter, hittar content gaps och valjer format med bast ROI.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Varumarkespositionering och tone of voice',
          description:
            'Varumarket ar grunden for all content. Vi definierar hur ni kommunicerar: formellt eller tillgangligt, informativt eller inspirerande. Tone of voice och ert vardeerbjudande skapar igenkanning och resonans.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Content skapande och produktion',
          description:
            'Nu borjar arbetet. Vara content creators producerar texter, visuals och multimedia som passar strategin. Varje contentpiece ar SEO optimerad, anpassad till buyer persona och har tydliga CTAs som driver konvertering.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Review och iteration',
          description:
            'Din input ar viktig. Vi presenterar koncept, tar feedback och justerar snabbt. Korta feedback loops sakerstaller att content matchar forvantningar och brandguidelines.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publicering och performance tracking',
          description:
            'Content publiceras enligt plan. Vi matar trafik, engagemang, konverteringar och ROI. Dessa insikter anvands for att optimera strategin over tid.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Varfor',
        highlight: 'outsourca content marketing',
        suffix: 'ar smart',
      },
      paragraphs: [
        'Alla kan skapa content - skriva en blogg, posta i sociala medier eller producera video. Men strategisk content som driver affarstlillvaxt kraver expertis, tid och en genomtankt plan som manga foretag saknar internt.',
        'Effektiv content marketing kombinerar flera discipliner: SEO kunskap for synlighet, copywriting for persuasion, design for visuell effekt och data analys for optimering. Content maste ocksa passa varje fas i kundresan och vara konsekvent med varumarket.',
      ],
      lead: 'Foretag som outsourcar content marketing ser tydliga fordelar:',
      bullets: [
        'Strategisk content som bygger online auktoritet och positionerar varumarket som thought leader',
        'Kontinuerlig content produktion utan intern resursstress, levererad enligt plan',
        'Matbara resultat: mer organisk trafik, hogre engagemang och battre konverteringsgrad',
      ],
    },
    niblah: {
      title: {
        prefix: 'Varfor',
        highlight: 'outsourca content marketing',
        suffix: 'till Niblah?',
      },
      subtitle:
        'Hos Niblah far du inte standardproduktion, utan strategisk content som driver dina affarsmal.',
      cards: [
        {
          title: 'Datadriven content strategi',
          description:
            'Vi tar beslut baserat pa data. Keyword research, konkurrentanalys och malgruppsinsikter skapar content som hittas och konverterar. Varje piece har ett tydligt mal och stottar dina KPIs.',
        },
        {
          title: 'Multidisciplinart content team',
          description:
            'Vara content creators arbetar med SEO specialister, designers och strateger. Denna holistiska approach ger content som ar attraktivt, tekniskt optimerat och strategiskt relevant.',
        },
        {
          title: 'Full funnel content upplagg',
          description:
            'Vi skapar content for varje steg i kundresan: awareness, consideration och decision. Det maximerar vardet av varje contentpiece.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Vad ar',
        highlight: 'content marketing',
        suffix: 'egentligen?',
      },
      paragraphs: [
        'Content marketing ar en strategisk metod for att skapa och distribuera vardefull content for att attrahera och behalla en specifik malgrupp. Istallet for att salja direkt bygger du forst auktoritet och forstroende.',
        'Effektiv content marketing kraver djup forstaelse for malgruppen: deras utmaningar, information de sokar och hur dina tjanster losar problemen. Genom att dela vardefull content regelbundet positionerar du varumarket som expert och bygger community.',
        'Hos Niblah utvecklar vi holistiska content strategier for alla touchpoints: fran SEO optimerade bloggartiklar och whitepapers till social content och educational videos. Varje format anvands dar det ger mest effekt i kundresan.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Dessa kunder',
        highlight: 'gick fore',
        suffix: '',
      },
      subtitle: 'Konkreta resultat fran foretag som outsourcar content marketing',
      items: [
        {
          initials: 'GC',
          company: 'GreenConnect',
          label: 'Content Marketing | SEO | Social',
          description:
            'Strukturerad content produktion gjorde bloggen till en leadmaskin',
          stats: [
            { value: '287%', label: 'mer organisk trafik' },
            { value: '5.2x', label: 'fler nedladdningar' },
            { value: '194%', label: 'okad lead tillvaxt' },
          ],
        },
        {
          initials: 'IP',
          company: 'InnovatePro',
          label: 'Content Strategi | Thought Leadership',
          description:
            'Strategisk thought leadership content byggde sektorauktoritet',
          stats: [
            { value: '156%', label: 'hogre engagemang' },
            { value: '3.7x', label: 'fler backlinks' },
            { value: '218%', label: 'okad brand awareness' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Outsourca content marketing:',
        highlight: 'detta far du',
        suffix: '',
      },
      intro:
        'Varfor valjer foretag att outsourca content marketing till proffs? ROI visar tydligt:',
      items: [
        {
          title: 'Battre synlighet och hallbar trafik.',
          description:
            'Strategisk SEO content lockar nya besokare som aktivt sokar efter dina losningar. Den organiska trafiken fortsatter vaxa utan extra annonsbudget.',
        },
        {
          title: 'Thought leadership och varumarkesauktoritet.',
          description:
            'Content som adresserar malgruppens utmaningar positionerar dig som expert. Prospects litar pa din kunskap och valjer dig fore konkurrenter.',
        },
        {
          title: 'Hogre konverteringar fran utbildade prospects.',
          description:
            'Content marketing utbildar malgruppen innan kontakt. De forstar problemet och ser din losning som logisk, vilket ger kortare sales cycles och hogre konvertering.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Detta sager',
        highlight: 'vara kunder',
        suffix: '',
      },
      subtitle: 'Langsiktiga partnerskap byggda pa forstroende och matbara resultat.',
      items: [
        {
          quote:
            'Var blogg gick fran dammigt arkiv till leadmaskin. Niblahs content lockar exakt ratt prospects och konverterar konsekvent.',
          name: 'Emma de Vries',
        },
        {
          quote:
            'Antligen en partner som tanker strategiskt och levererar. Outsourcing av content marketing till Niblah var vart basta beslut i ar.',
          name: 'Thomas Hendriks',
        },
        {
          quote:
            'Den strategiska contenten fran Niblah positionerade oss som thought leader. Vi ser direkt effekt pa inbound leads.',
          name: 'Jasper Visser',
        },
      ],
      ratingLabel: 'Vi far 4.9 pa Google av 143 omdomen',
    },
    contentTypes: {
      title: {
        prefix: 'Outsourca content marketing:',
        highlight: 'detta skapar vi',
        suffix: '',
      },
      subtitle:
        'Fran strategisk SEO content till multimedia: vi levererar alla format din marketing strategi behover.',
      items: [
        {
          title: 'SEO content och bloggar',
          description:
            'Bloggartiklar och pillar pages som genererar organisk trafik och bygger auktoritet. Vara SEO specialister hittar high value keywords och content creators skriver djupgaende artiklar som Google och malgruppen gillar. Varje blog ar designad for ranking och leads.',
        },
        {
          title: 'Website content',
          description:
            'Homepage, about, service och produkt sidor som kommunicerar varumarket och driver konvertering. Vi skriver tydlig copy som oversatter value proposition och leder besokare till onskade actions. Varje sida optimeras for UX och SEO.',
        },
        {
          title: 'Video och multimedia content',
          description:
            'Explainer videos, tutorials och social content som maximerar engagemang. Video ger 1200% fler shares an text och bilder. Vi producerar professionella videos med script, starka visuals och CTAs, optimerade for varje plattform.',
        },
        {
          title: 'Email marketing content',
          description:
            'Newsletters, nurture sequences och promotional emails som oppnas och konverterar. Email marketing ger i snitt 40x ROI per investerad euro. Vara copywriters skriver subject lines, body copy och CTAs som driver automation flows.',
        },
        {
          title: 'Whitepapers och ebooks',
          description:
            'Gated content for leadgenerering och thought leadership. Whitepapers positionerar dig som expert och ar ett av de mest effektiva formaten for B2B. Vi utvecklar research baserade dokument med design som far prospects att dela kontaktuppgifter.',
        },
        {
          title: 'Social media content',
          description:
            'Plattform specifik content som bygger engagemang och community. Fran LinkedIn thought leadership till Instagram carousels och video: vi skapar content som matchar algoritm och beteende. Inkluderar captions, hashtags och guidelines for community management.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Vanliga',
        highlight: 'fragor',
        suffix: '',
      },
      items: [
        {
          question: 'Vilka fordelar ger outsourcing av content marketing?',
          answer:
            'Outsourcing ger tillgang till specialistkompetens utan att bygga interna resurser. Proffs levererar konsekvent content som ar strategiskt kopplat till mal. Du sparar tid, far battre SEO resultat och utnyttjar beprovade frameworks som driver konvertering.',
        },
        {
          question: 'Vad kostar det att outsourca content marketing?',
          answer:
            'Kostnader beror pa volym, komplexitet och format. En strategisk blog kostar annorlunda an video produktion eller whitepaper. Vi erbjuder transparenta projektpriser och retainer modeller for lopande produktion. Boka ett gratis intro for offert.',
        },
        {
          question: 'Hur mater jag framgangen av outsourcat content?',
          answer:
            'Vi foljer KPIs som organisk trafik, keyword rankings, engagemang (time on page, bounce rate), social shares, leadgenerering och konverteringsgrad. Manadsrapporter visar vilka pieces som presterar bast. Vi optimerar strategin baserat pa data.',
        },
        {
          question: 'Vad gor en content marketing byra?',
          answer:
            'En content marketing byra bygger holistiska strategier baserade pa mal och audience insights. Keyword research, competitor analys och customer journey mapping styr besluten. Sedan producerar vi content, optimerar for SEO och distribuerar i relevanta kanaler.',
        },
        {
          question: 'Varfor outsourca content marketing till Niblah?',
          answer:
            'Hos Niblah arbetar content creators med SEO experter, designers och data analysts. Det ger content som ar snyggt, tekniskt korrekt och strategiskt relevant. Vi levererar content som ger matbara affarsresultat.',
        },
        {
          question: 'Hur mycket content behovs for resultat?',
          answer:
            'Content marketing ar en long term investering. Minimum ar 2 till 4 strategiska blog posts per manad plus website optimering och social content. For snabbare resultat rekommenderar vi 8 till 12 pieces per manad i flera format. Volymen anpassas till budget och mal.',
        },
      ],
    },
  },
  da: {
    metadata: {
      title: 'Outsource content marketing | Mere trafik og autoritet | Niblah',
      description:
        'Outsource content marketing til eksperter der skaber strategisk content. Byg online autoritet, generer trafik og oeg konverteringer med content der virker.',
      keywords: 'outsource content marketing, content strategi, seo content, thought leadership, content produktion',
      openGraph: {
        title: 'Outsource content marketing | Niblah',
        description: 'Strategisk content der bygger autoritet og vaekst.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Strategisk content der bygger autoritet og skaber trafik',
      title: 'Outsource content marketing',
      description:
        'Vil du bygge online autoritet og faa flere besoegende over tid? Ved at outsource content marketing investerer du i strategisk content der naar din maalgruppe, overbeviser og skaber handling. Resultat: flere besoegende, hoejere konvertering og maelbar vaekst.',
      ctaText: 'Planlaeg gratis intro',
      ctaLink: '/contact',
      note: '* 87% af virksomheder ser uudnyttede muligheder i deres content strategi',
      image: '/development-hero.png',
      imageAlt: 'Content marketing dashboard',
    },
    process: {
      title: 'Vores tilgang til <highlight>content marketing</highlight>',
      subtitle:
        'Hvordan skaber vi strategisk content der giver resultater? Vores femtrins proces:',
      steps: [
        {
          number: '01',
          title: 'Strategisk content analyse',
          description:
            'Vi kortlaegger maal og maalgruppe. Hvilken content behovs i hver fase af kunderejsen? Vi analyserer konkurrenter, finder content gaps og vaelger formater med bedst ROI.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Brand positionering og tone of voice',
          description:
            'Brandet er fundamentet for alt content. Vi definerer hvordan I kommunikerer: formelt eller tilgaengeligt, informativt eller inspirerende. Tone of voice og vaerdiforslag skaber genkendelse og resonans.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Content skabelse og produktion',
          description:
            'Nu starter produktionen. Vores content creators laver tekster, visuals og multimedia der matcher strategien. Hvert contentpiece er SEO optimeret, tilpasset buyer persona og har klare CTAs der driver konvertering.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Review og iteration',
          description:
            'Din feedback er vigtig. Vi praesenterer koncepter, behandler input effektivt og sikrer at content matcher forventninger og brand guidelines.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publicering og performance tracking',
          description:
            'Content publiceres efter plan. Vi maaler trafik, engagement, konverteringer og ROI og optimerer strategien loebende.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Hvorfor',
        highlight: 'outsource content marketing',
        suffix: 'er smart',
      },
      paragraphs: [
        'Alle kan lave content - skrive en blog, poste pa sociale medier eller lave video. Men strategisk content der driver vaekst kraever ekspertise, tid og en gennemtankt plan som mange virksomheder ikke har internt.',
        'Effektiv content marketing kombinerer flere discipliner: SEO viden for synlighed, copywriting for overbevisning, design for visuel effekt og data analyse for optimering. Content skal matche hver fase i kunderejsen og vaere konsistent med brandet.',
      ],
      lead: 'Virksomheder der outsourcer content marketing opnaar klare fordele:',
      bullets: [
        'Strategisk content der bygger online autoritet og positionerer brandet som thought leader',
        'Kontinuerlig content produktion uden intern ressourcestress, leveret efter plan',
        'Maelbare resultater: mere organisk trafik, hoejere engagement og bedre konverteringsrate',
      ],
    },
    niblah: {
      title: {
        prefix: 'Hvorfor',
        highlight: 'outsource content marketing',
        suffix: 'til Niblah?',
      },
      subtitle:
        'Hos Niblah far du ikke standardproduktion, men strategisk content der skaber forretningsresultater.',
      cards: [
        {
          title: 'Data drevet content strategi',
          description:
            'Vi baserer beslutninger pa data, ikke antagelser. Keyword research, konkurrent analyse og maalgruppe indsigt skaber content der findes og konverterer. Hvert piece har et tydeligt mal og stotter dine KPIs.',
        },
        {
          title: 'Multidisciplinaert content team',
          description:
            'Vores content creators arbejder sammen med SEO specialister, designere og strateger. Det giver content der er flot, teknisk optimeret og strategisk relevant.',
        },
        {
          title: 'Full funnel content tilgang',
          description:
            'Vi skaber content til alle faser i kunderejsen: awareness, consideration og decision. Det maksimerer vaerdien af hvert contentpiece.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Hvad er',
        highlight: 'content marketing',
        suffix: 'egentlig?',
      },
      paragraphs: [
        'Content marketing er en strategisk metode til at skabe og distribuere vaerdifuld content for at tiltraekke og fastholde en bestemt maalgruppe. Du saelger ikke direkte, men bygger autoritet og tillid.',
        'Effektiv content marketing kraever dyb forstaelse for maalgruppen: udfordringer, information de soger og hvordan dine ydelser loser problemer. Ved at dele vaerdifuld content regelmaessigt positionerer du brandet som ekspert og bygger community.',
        'Hos Niblah udvikler vi holistiske content strategier pa tvaers af touchpoints: fra SEO optimerede blog artikler og whitepapers til social content og educational videos. Hvert format bruges der hvor det giver mest effekt.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Disse kunder',
        highlight: 'gik forrest',
        suffix: '',
      },
      subtitle: 'Konkrete resultater fra virksomheder der outsourcer content marketing',
      items: [
        {
          initials: 'GC',
          company: 'GreenConnect',
          label: 'Content Marketing | SEO | Social',
          description:
            'Struktureret content produktion gjorde bloggen til en leadmaskine',
          stats: [
            { value: '287%', label: 'mere organisk trafik' },
            { value: '5.2x', label: 'flere downloads' },
            { value: '194%', label: 'lead vaekst' },
          ],
        },
        {
          initials: 'IP',
          company: 'InnovatePro',
          label: 'Content Strategi | Thought Leadership',
          description:
            'Strategisk thought leadership content byggede sektor autoritet',
          stats: [
            { value: '156%', label: 'hoejere engagement' },
            { value: '3.7x', label: 'flere backlinks' },
            { value: '218%', label: 'brand awareness vaekst' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Outsource content marketing:',
        highlight: 'det giver dig',
        suffix: '',
      },
      intro:
        'Hvorfor investerer virksomheder i professionel content marketing? ROI taler for sig selv:',
      items: [
        {
          title: 'Bedre synlighed og vedvarende trafik.',
          description:
            'Strategisk SEO content tiltraekker nye besoegende der aktivt leder efter dine losninger. Den organiske trafik vokser uden ekstra annoncebudget.',
        },
        {
          title: 'Thought leadership og brand autoritet.',
          description:
            'Content der adresserer maalgruppens udfordringer positionerer dig som ekspert. Prospects stoler pa dig og vaelger dig frem for konkurrenter.',
        },
        {
          title: 'Hojere konverteringer fra educerede prospects.',
          description:
            'Content marketing uddanner maalgruppen for kontakt. De forstar problemet bedre og ser din losning som logisk, hvilket giver kortere sales cycles og hoejere konvertering.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Det siger',
        highlight: 'vores kunder',
        suffix: '',
      },
      subtitle: 'Langsigtede partnerskaber baseret pa tillid og maelbare resultater.',
      items: [
        {
          quote:
            'Vores blog gik fra stodet arkiv til leadmaskine. Niblahs content tiltraekker de rigtige prospects og konverterer stabilt.',
          name: 'Emma de Vries',
        },
        {
          quote:
            'Endelig en partner der taenker strategisk og leverer. Outsource content marketing til Niblah var vores bedste marketing beslutning i ar.',
          name: 'Thomas Hendriks',
        },
        {
          quote:
            'Den strategiske content fra Niblah positionerede os som thought leader. Vi ser direkte effekt pa inbound leads.',
          name: 'Jasper Visser',
        },
      ],
      ratingLabel: 'Vi far 4.9 pa Google ud fra 143 anmeldelser',
    },
    contentTypes: {
      title: {
        prefix: 'Outsource content marketing:',
        highlight: 'denne content laver vi',
        suffix: '',
      },
      subtitle:
        'Fra strategisk SEO content til multimedia: vi daekker alle formater din marketing strategi behover.',
      items: [
        {
          title: 'SEO content og blogs',
          description:
            'Blog artikler og pillar pages der genererer organisk trafik og bygger autoritet. Vores SEO specialister finder high value keywords og content creators skriver dybdegaende artikler som Google og maalgruppen vaerdsaetter. Hver blog er designet til ranking og leads.',
        },
        {
          title: 'Website content',
          description:
            'Homepage, about, service og produkt sider der kommunikerer brandet og driver konvertering. Vi skriver klar copy der oversaetter value proposition og guider besoegende til handling. Hver side optimeres for UX og SEO.',
        },
        {
          title: 'Video og multimedia content',
          description:
            'Explainer videos, tutorials og social content der maksimerer engagement. Video giver 1200% flere shares end tekst og billeder. Vi producerer professionelle videos med scripts, visuals og CTAs, optimeret til hver platform.',
        },
        {
          title: 'Email marketing content',
          description:
            'Newsletters, nurture sequences og promotional emails der bliver abnet og konverterer. Email marketing giver i snit 40x ROI per investeret euro. Vores copywriters skriver subject lines, body copy og klare CTAs til automation flows.',
        },
        {
          title: 'Whitepapers og ebooks',
          description:
            'Gated content til leadgenerering og thought leadership. Whitepapers positionerer dig som ekspert og er et effektivt B2B format. Vi udvikler research baserede dokumenter med design der far prospects til at dele kontaktoplysninger.',
        },
        {
          title: 'Social media content',
          description:
            'Platform specifik content der bygger engagement og community. Fra LinkedIn thought leadership til Instagram carousels og video: vi skaber content der matcher algoritmer og brugeradfaerd. Inkluderer captions, hashtags og guidelines for community management.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Ofte stillede',
        highlight: 'sporgsmal',
        suffix: '',
      },
      items: [
        {
          question: 'Hvad er fordelene ved at outsource content marketing?',
          answer:
            'Outsourcing giver adgang til specialiseret ekspertise uden at bygge interne ressourcer. Professionelle leverer konsistent content der er strategisk knyttet til dine mal. Du sparer tid, far bedre SEO resultater og bruger beprovade frameworks der skaber konvertering.',
        },
        {
          question: 'Hvad koster det at outsource content marketing?',
          answer:
            'Priser afhaenger af volumen, kompleksitet og formater. En strategisk blog koster anderledes end video produktion eller whitepaper development. Vi tilbyder transparente projektpriser og retainer modeller for lobende produktion. Book en gratis intro for en offert.',
        },
        {
          question: 'Hvordan maler jeg succes med outsourced content?',
          answer:
            'Vi tracker KPIs som organisk trafik, keyword rankings, engagement (time on page, bounce rate), social shares, leadgenerering og konverteringer. Manedlige rapporter viser hvilke pieces der performer bedst. Vi optimerer strategien baseret pa data.',
        },
        {
          question: 'Hvad laver et content marketing bureau?',
          answer:
            'Et content marketing bureau bygger holistiske strategier baseret pa mal og maalgruppe insights. Keyword research, competitor analyse og customer journey mapping styrer beslutninger. Derefter producerer vi content, optimerer for SEO og distribuerer i relevante kanaler.',
        },
        {
          question: 'Hvorfor outsource content marketing til Niblah?',
          answer:
            'Hos Niblah arbejder content creators med SEO eksperter, designere og data analysts. Det giver content der er flot, teknisk korrekt og strategisk relevant. Vi leverer content der giver maelbar vaekst.',
        },
        {
          question: 'Hvor meget content skal jeg bruge for resultater?',
          answer:
            'Content marketing er en long term investering. Minimum er 2 til 4 strategiske blog posts per maned plus website optimering og social content. For hurtigere resultater anbefaler vi 8 til 12 pieces per maned i flere formater. Volumen tilpasses budget og mal.',
        },
      ],
    },
  },
  fr: {
    metadata: {
      title: 'Externaliser le content marketing | Plus de trafic et autorite | Niblah',
      description:
        'Externalisez le content marketing a des experts qui creent du contenu strategique. Construisez une autorite en ligne, generez du trafic et augmentez les conversions avec un contenu qui fonctionne.',
      keywords: 'externaliser content marketing, strategie de contenu, seo content, thought leadership, production de contenu',
      openGraph: {
        title: 'Externaliser le content marketing | Niblah',
        description: 'Contenu strategique pour plus d autorite et de croissance.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Contenu strategique qui construit l autorite et genere du trafic',
      title: 'Externaliser le content marketing',
      description:
        'Vous voulez construire une autorite en ligne et attirer plus de visiteurs dans la duree? En externalisant le content marketing, vous investissez dans un contenu strategique qui atteint votre audience, convainc et pousse a l action. Resultat: plus de visiteurs, plus de conversions et une croissance mesurable.',
      ctaText: 'Planifier un appel gratuit',
      ctaLink: '/contact',
      note: '* 87% des entreprises voient des opportunites non exploitees dans leur strategie de contenu',
      image: '/development-hero.png',
      imageAlt: 'Content marketing dashboard',
    },
    process: {
      title: 'Notre methode pour le <highlight>content marketing</highlight>',
      subtitle:
        'Comment creons nous du contenu strategique qui apporte des resultats? Notre processus en cinq etapes:',
      steps: [
        {
          number: '01',
          title: 'Analyse strategique du contenu',
          description:
            'Nous cartographions vos objectifs et votre audience. Quel contenu est necessaire a chaque phase du parcours client? Nous analysons la concurrence, identifions les content gaps et choisissons les formats avec le meilleur ROI.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Positionnement de marque et tone of voice',
          description:
            'Votre marque est la base de tout contenu. Nous definissons comment vous communiquez: formel ou accessible, informatif ou inspirant. Cette tone of voice et votre proposition de valeur rendent le contenu reconnaissable et pertinent.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Creation et production de contenu',
          description:
            'Nous passons a l execution. Nos content creators produisent textes, visuels et multimedia alignes sur la strategie. Chaque piece est SEO optimisee, adaptee a la buyer persona et contient des CTAs clairs qui convertissent.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Review et iteration',
          description:
            'Votre feedback est essentiel. Nous presentons les concepts, integrons les retours rapidement et assurons l alignement avec vos attentes et guidelines de marque.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publication et performance tracking',
          description:
            'Le contenu est publie selon un planning strategique. Nous mesurons trafic, engagement, conversions et ROI et optimisons en continu.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Pourquoi',
        highlight: 'externaliser le content marketing',
        suffix: 'est intelligent',
      },
      paragraphs: [
        'Tout le monde peut creer du contenu - ecrire un blog, poster sur les reseaux sociaux ou produire une video. Mais un contenu strategique qui cree de la croissance demande expertise, temps et une methode que peu d entreprises peuvent construire en interne.',
        'Le content marketing efficace combine plusieurs disciplines: SEO pour la visibilite, copywriting pour la persuasion, design pour l impact visuel et data pour l optimisation. Le contenu doit aussi suivre chaque phase du parcours client et rester coherent avec la marque.',
      ],
      lead: 'Les entreprises qui externalisent le content marketing obtiennent des avantages concrets:',
      bullets: [
        'Du contenu strategique qui construit l autorite et positionne la marque comme thought leader',
        'Une production reguliere sans pression interne, livree selon un planning',
        'Des resultats mesurables: plus de trafic organique, plus d engagement et de meilleures conversions',
      ],
    },
    niblah: {
      title: {
        prefix: 'Pourquoi',
        highlight: 'externaliser le content marketing',
        suffix: 'chez Niblah?',
      },
      subtitle:
        'Chez Niblah vous obtenez un contenu strategique qui sert vos objectifs business, pas une production standard.',
      cards: [
        {
          title: 'Strategie de contenu basee sur les data',
          description:
            'Nous prenons des decisions basees sur les data. Keyword research, analyse concurrentielle et insights audience creent du contenu qui se trouve et convertit. Chaque piece a un objectif mesurable et soutient vos KPIs.',
        },
        {
          title: 'Equipe content multidisciplinaire',
          description:
            'Nos content creators collaborent avec des specialistes SEO, designers et strateges. Cette approche holistique garantit un contenu attractif, optimise et pertinent.',
        },
        {
          title: 'Approche full funnel',
          description:
            'Nous creons du contenu pour chaque phase: awareness, consideration et decision. Cette approche integree maximise la valeur de chaque piece.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Qu est ce que',
        highlight: 'le content marketing',
        suffix: 'exactement?',
      },
      paragraphs: [
        'Le content marketing est une approche strategique qui consiste a creer et distribuer du contenu utile et pertinent pour attirer et fideliser une audience. Vous ne vendez pas directement, vous construisez d abord l autorite et la confiance.',
        'Un content marketing efficace demande une bonne comprehension de l audience: ses challenges, ses questions et la maniere dont vos services resoudent ses problemes. Le contenu de valeur positionne la marque comme experte et construit une communaute.',
        'Chez Niblah nous developpons des strategies holistiques sur tous les touchpoints: articles SEO, whitepapers, contenu social et videos educatives. Chaque format est utilise la ou il a le plus d impact.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Ces clients',
        highlight: 'nous ont fait confiance',
        suffix: '',
      },
      subtitle: 'Resultats concrets de la content marketing externalisee',
      items: [
        {
          initials: 'GC',
          company: 'GreenConnect',
          label: 'Content Marketing | SEO | Social',
          description:
            'La production structuree a transforme le blog en machine a leads',
          stats: [
            { value: '287%', label: 'plus de trafic organique' },
            { value: '5.2x', label: 'plus de downloads' },
            { value: '194%', label: 'croissance des leads' },
          ],
        },
        {
          initials: 'IP',
          company: 'InnovatePro',
          label: 'Content Strategie | Thought Leadership',
          description:
            'Le contenu thought leadership a construit une autorite de secteur',
          stats: [
            { value: '156%', label: 'engagement plus eleve' },
            { value: '3.7x', label: 'plus de backlinks' },
            { value: '218%', label: 'croissance de la brand awareness' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Externaliser le content marketing:',
        highlight: 'voila ce que vous gagnez',
        suffix: '',
      },
      intro:
        'Pourquoi investir dans le content marketing pro? Le ROI parle de lui meme:',
      items: [
        {
          title: 'Meilleure visibilite et trafic durable.',
          description:
            'Le contenu SEO strategique attire de nouveaux visiteurs qui cherchent vos solutions. Le trafic organique grandit sans budget publicitaire supplementaire.',
        },
        {
          title: 'Thought leadership et autorite de marque.',
          description:
            'Le contenu qui repond aux challenges de votre audience vous positionne comme expert. Les prospects vous font confiance et vous choisissent.',
        },
        {
          title: 'Conversions plus elevees avec des prospects eduques.',
          description:
            'Le content marketing eduque l audience avant le contact. Elle comprend mieux le probleme et voit votre solution comme logique, ce qui reduit le cycle de vente et augmente les conversions.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Ce que disent',
        highlight: 'nos clients',
        suffix: '',
      },
      subtitle: 'Partenariats long terme bases sur la confiance et des resultats mesurables.',
      items: [
        {
          quote:
            'Notre blog est passe d un archive poussiereux a une machine a leads. Le contenu de Niblah attire les bons prospects et convertit regulierement.',
          name: 'Emma de Vries',
        },
        {
          quote:
            'Enfin un partenaire qui pense strategie et execute. Externaliser le content marketing a Niblah a ete notre meilleure decision marketing cette annee.',
          name: 'Thomas Hendriks',
        },
        {
          quote:
            'Le contenu strategique de Niblah nous a positionnes comme thought leader. Nous voyons un impact direct sur les inbound leads.',
          name: 'Jasper Visser',
        },
      ],
      ratingLabel: 'Nous avons 4.9 sur Google avec 143 avis',
    },
    contentTypes: {
      title: {
        prefix: 'Externaliser le content marketing:',
        highlight: 'les contenus que nous creons',
        suffix: '',
      },
      subtitle:
        'Du contenu SEO strategique au multimedia: nous couvrons tous les formats necessaires a votre strategie.',
      items: [
        {
          title: 'Contenu SEO et blogs',
          description:
            'Articles et pillar pages qui generent du trafic organique et construisent l autorite. Nos specialistes SEO identifient les keywords et nos content creators produisent des articles utiles pour Google et l audience. Chaque blog est concu pour le ranking et les leads.',
        },
        {
          title: 'Contenu de site web',
          description:
            'Homepage, about, service et product pages qui communiquent l identite de marque et augmentent la conversion. Nous ecrivons une copy claire qui traduit la value proposition et guide les visiteurs vers l action. Chaque page est optimisee pour l UX et le SEO.',
        },
        {
          title: 'Video et multimedia',
          description:
            'Explainer videos, tutorials et social content qui maximisent l engagement. La video genere 1200% plus de shares que le texte et les images. Nous produisons des videos pro avec scripts, visuals et CTAs optimises par plateforme.',
        },
        {
          title: 'Email marketing content',
          description:
            'Newsletters, nurture sequences et emails promo qui s ouvrent et convertissent. L email marketing genere en moyenne 40x ROI par euro investi. Nos copywriters creent des subject lines, body copy et CTAs pour les automation flows.',
        },
        {
          title: 'Whitepapers et ebooks',
          description:
            'Contenu gated pour la leadgen et la thought leadership. Les whitepapers positionnent votre marque comme expert et sont tres efficaces en B2B. Nous developpons des documents research backed avec design qui incitent a partager les coordonnees.',
        },
        {
          title: 'Social media content',
          description:
            'Contenu specifique par plateforme pour booster l engagement et la communaute. De LinkedIn thought leadership a Instagram carousels et video: nous creons du contenu adapte aux algorithmes et au comportement utilisateur. Inclut captions, hashtags et guidelines de community management.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Questions',
        highlight: 'frequentes',
        suffix: '',
      },
      items: [
        {
          question: 'Quels sont les avantages d externaliser le content marketing?',
          answer:
            'L externalisation donne acces a une expertise specialisee sans construire des ressources internes. Les pros livrent un contenu coherent et aligne sur vos objectifs. Vous gagnez du temps, obtenez de meilleurs resultats SEO et profitez de frameworks qui convertissent.',
        },
        {
          question: 'Quel est le cout pour externaliser le content marketing?',
          answer:
            'Le cout depend du volume, de la complexite et des formats. Un blog strategique ne coute pas comme une video ou un whitepaper. Nous proposons des prix transparents et des retainers pour la production continue. Planifiez un appel gratuit pour une offre.',
        },
        {
          question: 'Comment mesurer le succes du contenu externalise?',
          answer:
            'Nous suivons des KPIs comme trafic organique, keyword rankings, engagement (time on page, bounce rate), social shares, leadgen et conversions. Des rapports mensuels montrent les meilleures performances. Nous optimisons ensuite la strategie pour maximiser le ROI.',
        },
        {
          question: 'Que fait une agence de content marketing?',
          answer:
            'Une agence de content marketing construit une strategie holistique basee sur vos objectifs et audience insights. Keyword research, competitor analyse et customer journey mapping guident les decisions. Ensuite nous produisons, optimisons pour le SEO et distribuons via les bons canaux.',
        },
        {
          question: 'Pourquoi externaliser le content marketing a Niblah?',
          answer:
            'Chez Niblah, les content creators travaillent avec des experts SEO, designers et data analysts. Cela donne un contenu beau, techniquement solide et strategiquement pertinent. Nous livrons un impact business mesurable.',
        },
        {
          question: 'Quelle quantite de contenu faut il pour des resultats?',
          answer:
            'Le content marketing est un investissement long terme. Minimum 2 a 4 blog posts strategiques par mois plus optimisation du site et social content. Pour des resultats plus rapides, nous recommandons 8 a 12 pieces par mois. Le volume est ajuste a votre budget et objectifs.',
        },
      ],
    },
  },
  it: {
    metadata: {
      title: 'Outsourcing content marketing | Piu traffico e autorita | Niblah',
      description:
        'Outsourcing content marketing a esperti che creano contenuti strategici. Costruisci autorita online, genera traffico e aumenta le conversioni con contenuti che funzionano.',
      keywords: 'outsourcing content marketing, strategia contenuti, seo content, thought leadership, produzione contenuti',
      openGraph: {
        title: 'Outsourcing content marketing | Niblah',
        description: 'Contenuti strategici per autorita e crescita.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Contenuti strategici che costruiscono autorita e generano traffico',
      title: 'Outsourcing content marketing',
      description:
        'Vuoi costruire autorita online e attirare piu visitatori con continuita? Con l outsourcing del content marketing investi in contenuti strategici che raggiungono la tua audience, convincono e spingono all azione. Risultato: piu visitatori, conversioni piu alte e crescita misurabile.',
      ctaText: 'Prenota una intro gratuita',
      ctaLink: '/contact',
      note: '* Il 87% delle aziende vede opportunita non sfruttate nella strategia di content',
      image: '/development-hero.png',
      imageAlt: 'Content marketing dashboard',
    },
    process: {
      title: 'Il nostro approccio al <highlight>content marketing</highlight>',
      subtitle:
        'Come creiamo contenuti strategici che portano risultati? Il nostro processo in cinque passi:',
      steps: [
        {
          number: '01',
          title: 'Analisi strategica dei contenuti',
          description:
            'Mappiamo obiettivi e audience. Quale contenuto serve in ogni fase del customer journey? Analizziamo i competitor, individuiamo i content gaps e scegliamo i formati con il miglior ROI.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Posizionamento del brand e tone of voice',
          description:
            'L identita di brand e la base di ogni contenuto. Definiamo come comunicare: formale o accessibile, informativo o ispirazionale. La tone of voice e la value proposition rendono i contenuti riconoscibili e rilevanti.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Creazione e produzione dei contenuti',
          description:
            'Qui inizia la produzione. I nostri content creators realizzano testi, visuals e multimedia allineati alla strategia. Ogni contenuto e ottimizzato SEO, tarato sulla buyer persona e con CTAs chiari che spingono alla conversione.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Review e iterazione',
          description:
            'Il tuo feedback e fondamentale. Presentiamo i concept, integriamo input rapidamente e assicuriamo l allineamento con aspettative e brand guidelines.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Pubblicazione e performance tracking',
          description:
            'I contenuti vengono pubblicati secondo un piano strategico. Monitoriamo traffico, engagement, conversioni e ROI e ottimizziamo continuamente.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Perche',
        highlight: 'outsourcing content marketing',
        suffix: 'e una scelta smart',
      },
      paragraphs: [
        'Tutti possono creare contenuti - scrivere un blog, postare sui social o produrre video. Ma contenuti strategici che generano crescita richiedono competenze, tempo e un approccio strutturato che molte aziende non possono costruire internamente.',
        'Un content marketing efficace combina discipline diverse: SEO per la visibilita, copywriting per la persuasione, design per l impatto visivo e data analysis per l ottimizzazione. Il contenuto deve coprire ogni fase del customer journey ed essere coerente con il brand.',
      ],
      lead: 'Le aziende che fanno outsourcing del content marketing ottengono vantaggi concreti:',
      bullets: [
        'Contenuti strategici che costruiscono autorita online e posizionano il brand come thought leader',
        'Produzione costante senza pressione interna, con qualita e tempi garantiti',
        'Risultati misurabili: piu traffico organico, engagement piu alto e migliori conversioni',
      ],
    },
    niblah: {
      title: {
        prefix: 'Perche',
        highlight: 'outsourcing content marketing',
        suffix: 'con Niblah?',
      },
      subtitle:
        'Con Niblah ottieni contenuti strategici che supportano gli obiettivi di business, non produzione standard.',
      cards: [
        {
          title: 'Strategia di contenuti data driven',
          description:
            'Prendiamo decisioni basate sui dati. Keyword research, analisi competitor e audience insights creano contenuti che si trovano e convertono. Ogni piece ha un obiettivo misurabile e supporta i tuoi KPIs.',
        },
        {
          title: 'Team contenuti multidisciplinare',
          description:
            'I nostri content creators collaborano con specialisti SEO, designer e strateghi. Questo approccio assicura contenuti belli, ottimizzati e rilevanti.',
        },
        {
          title: 'Approccio full funnel',
          description:
            'Creiamo contenuti per ogni fase: awareness, consideration e decision. Questo massimizza il valore di ogni contenuto.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Cos e',
        highlight: 'il content marketing',
        suffix: 'esattamente?',
      },
      paragraphs: [
        'Il content marketing e un approccio strategico che crea e distribuisce contenuti utili per attrarre e mantenere una audience specifica. Non vendi subito, ma costruisci autorita e fiducia.',
        'Un content marketing efficace richiede comprensione profonda della tua audience: le sfide, le domande e come i tuoi servizi risolvono i problemi. Con contenuti di valore costanti, posizioni il brand come esperto e costruisci comunita.',
        'In Niblah sviluppiamo strategie olistiche su tutti i touchpoint: da blog SEO e whitepapers a contenuti social e video educativi. Ogni formato viene usato dove genera maggiore impatto.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Questi clienti',
        highlight: 'ci hanno scelto',
        suffix: '',
      },
      subtitle: 'Risultati concreti da aziende che fanno outsourcing content marketing',
      items: [
        {
          initials: 'GC',
          company: 'GreenConnect',
          label: 'Content Marketing | SEO | Social',
          description:
            'Produzione strutturata che ha trasformato il blog in una lead machine',
          stats: [
            { value: '287%', label: 'piu traffico organico' },
            { value: '5.2x', label: 'piu download' },
            { value: '194%', label: 'crescita lead' },
          ],
        },
        {
          initials: 'IP',
          company: 'InnovatePro',
          label: 'Content Strategia | Thought Leadership',
          description:
            'Contenuti thought leadership che hanno costruito autorita di settore',
          stats: [
            { value: '156%', label: 'engagement piu alto' },
            { value: '3.7x', label: 'piu backlinks' },
            { value: '218%', label: 'crescita brand awareness' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Outsourcing content marketing:',
        highlight: 'ecco cosa ottieni',
        suffix: '',
      },
      intro:
        'Perche investire in content marketing professionale? Il ROI parla chiaro:',
      items: [
        {
          title: 'Migliore visibilita e traffico duraturo.',
          description:
            'Contenuti SEO strategici portano nuovi visitatori che cercano attivamente le tue soluzioni. Il traffico organico cresce senza budget ads extra.',
        },
        {
          title: 'Thought leadership e autorita di brand.',
          description:
            'Contenuti che rispondono alle sfide dell audience ti posizionano come esperto. I prospect si fidano e scelgono te.',
        },
        {
          title: 'Conversioni piu alte da prospect educati.',
          description:
            'Il content marketing educa l audience prima del contatto. Capiscono meglio il problema e vedono la tua soluzione come logica, riducendo il ciclo di vendita e aumentando le conversioni.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Cosa dicono',
        highlight: 'i nostri clienti',
        suffix: '',
      },
      subtitle: 'Partnership di lungo periodo basate su fiducia e risultati misurabili.',
      items: [
        {
          quote:
            'Il nostro blog e passato da archivio polveroso a lead machine. I contenuti di Niblah attirano i prospect giusti e convertono costantemente.',
          name: 'Emma de Vries',
        },
        {
          quote:
            'Finalmente un partner che pensa strategicamente e consegna. Outsourcing content marketing a Niblah e stata la nostra migliore decisione quest anno.',
          name: 'Thomas Hendriks',
        },
        {
          quote:
            'I contenuti strategici di Niblah ci hanno posizionato come thought leader. Vediamo un impatto diretto sugli inbound leads.',
          name: 'Jasper Visser',
        },
      ],
      ratingLabel: 'Abbiamo 4.9 su Google da 143 recensioni',
    },
    contentTypes: {
      title: {
        prefix: 'Outsourcing content marketing:',
        highlight: 'i contenuti che creiamo',
        suffix: '',
      },
      subtitle:
        'Dai contenuti SEO strategici al multimedia: copriamo tutti i formati necessari alla tua strategia.',
      items: [
        {
          title: 'Contenuti SEO e blog',
          description:
            'Articoli e pillar pages che generano traffico organico e costruiscono autorita. I nostri specialisti SEO identificano keyword ad alto valore e i content creators producono articoli approfonditi apprezzati da Google e audience. Ogni blog migliora ranking e conversione.',
        },
        {
          title: 'Contenuti per il sito web',
          description:
            'Homepage, about, service e product pages che comunicano il brand e spingono alla conversione. Scriviamo copy chiara che traduce la value proposition e guida i visitatori alle azioni desiderate. Ogni pagina e ottimizzata per UX e SEO.',
        },
        {
          title: 'Video e multimedia',
          description:
            'Explainer videos, tutorial e social content che massimizzano l engagement. Il video genera il 1200% di condivisioni in piu rispetto a testo e immagini. Produciamo video professionali con script, visuals e CTAs ottimizzati per piattaforma.',
        },
        {
          title: 'Email marketing content',
          description:
            'Newsletter, nurture sequences e promotional emails che si aprono e convertono. Email marketing genera in media 40x ROI per euro investito. I nostri copywriters creano subject lines, body copy e CTAs per automation flows efficaci.',
        },
        {
          title: 'Whitepapers e ebooks',
          description:
            'Contenuti gated per lead generation e thought leadership. I whitepapers posizionano il brand come esperto e sono formati efficaci in B2B. Sviluppiamo documenti research backed con design che convincono a lasciare i contatti.',
        },
        {
          title: 'Social media content',
          description:
            'Contenuti specifici per piattaforma che aumentano engagement e community. Da LinkedIn thought leadership a Instagram carousels e video: creiamo contenuti che rispettano algoritmo e comportamento utente. Include captions, hashtag e linee guida per community management.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Domande',
        highlight: 'frequenti',
        suffix: '',
      },
      items: [
        {
          question: 'Quali vantaggi offre l outsourcing del content marketing?',
          answer:
            'L outsourcing ti da accesso a competenze specialistiche senza costruire risorse interne. I professionisti producono contenuti consistenti e allineati ai tuoi obiettivi. Risparmi tempo, migliori i risultati SEO e sfrutti framework collaudati.',
        },
        {
          question: 'Quanto costa fare outsourcing del content marketing?',
          answer:
            'Il costo dipende da volume, complessita e formati. Un blog strategico ha un costo diverso rispetto a video o whitepaper. Offriamo prezzi trasparenti e retainer per produzione continua. Prenota una intro gratuita per un preventivo.',
        },
        {
          question: 'Come misuro il successo dei contenuti esternalizzati?',
          answer:
            'Monitoriamo KPIs come traffico organico, keyword rankings, engagement (time on page, bounce rate), social shares, lead generation e conversioni. Report mensili mostrano le performance migliori. Ottimizziamo la strategia con questi dati.',
        },
        {
          question: 'Cosa fa un agenzia di content marketing?',
          answer:
            'Un agenzia di content marketing sviluppa strategie olistiche basate su obiettivi e audience insights. Keyword research, competitor analysis e customer journey mapping guidano le decisioni. Poi produciamo contenuti, ottimizziamo per SEO e distribuiamo sui canali giusti.',
        },
        {
          question: 'Perche scegliere Niblah per il content marketing?',
          answer:
            'In Niblah i content creators lavorano con specialisti SEO, designer e data analysts. Questo garantisce contenuti belli, tecnicamente solidi e strategicamente rilevanti. Forniamo risultati misurabili per il tuo business.',
        },
        {
          question: 'Quanto contenuto serve per vedere risultati?',
          answer:
            'Il content marketing e un investimento long term. Minimo 2-4 blog posts strategici al mese piu ottimizzazione sito e social content. Per risultati piu rapidi suggeriamo 8-12 pieces al mese su diversi formati. Il volume si adatta a budget e obiettivi.',
        },
      ],
    },
  },
};

export function getSEOContentMarketingPageCopy(locale) {
  return getLocaleCopy(copy, locale);
}
