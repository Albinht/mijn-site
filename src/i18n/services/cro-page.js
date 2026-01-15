import { getLocaleCopy } from '../utils'

const copy = {
  en: {
    metadata: {
      title: 'Outsource CRO | More Revenue Without More Traffic | Niblah',
      description:
        'Outsource CRO to specialists focused on real growth. Data-driven optimization that improves conversion rate, AOV and customer lifetime value.',
      keywords:
        'cro, conversion rate optimization, outsource cro, conversion optimization, ecommerce cro',
      openGraph: {
        title: 'Outsource CRO | Niblah',
        description:
          'Systematic CRO that improves conversion rate, AOV and customer lifetime value.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'More revenue without more ad spend',
      title: 'Outsource conversion optimization (CRO)',
      description:
        'Paying for traffic but too few visitors convert? CRO is more than A/B testing. At Niblah we optimize your full funnel: from first click to repeat purchase. We focus on bottlenecks with real business impact, not minor button‑color experiments.',
      ctaText: 'Schedule a free intro',
      ctaLink: '/contact',
      note: '* Conversion rate often doubles within 6 months with strategic CRO',
      image: '/development-hero.png',
      imageAlt: 'CRO dashboard showing conversion improvements',
    },
    why: {
      title: {
        prefix: 'Why',
        highlight: 'outsourcing CRO',
        suffix: 'multiplies your ROI',
      },
      paragraphs: [
        'You invest thousands every month in traffic: Google Ads, paid social, SEO. But what if your conversion rate is 1.8% while benchmarks in your industry are 3.5%? You’re leaving 50%+ potential revenue on the table. Every visitor who leaves without converting is wasted ad spend.',
        'CRO is the most ROI‑positive marketing discipline. Why? Because you improve the traffic you already pay for. A 30% lift in conversion rate means 30% more revenue with zero extra traffic costs. The economics are simple: every percentage point improvement flows directly to the bottom line.',
      ],
      lead: 'Professional CRO delivers three transformative benefits:',
      benefits: [
        'Data‑driven prioritization: instead of random A/B tests, we systematically identify your biggest conversion leaks. We spend effort on high‑impact bottlenecks, not minor tweaks with marginal lifts.',
        'Full‑funnel optimization: the customer journey doesn’t stop at checkout. We optimize the full funnel: awareness → consideration → purchase → retention → advocacy. Higher customer lifetime value means a higher acceptable CAC.',
        'Statistical rigor: DIY testing often leads to false positives from small samples and premature conclusions. We run statistically significant tests with a proper methodology that produces reliable insights.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Why',
        highlight: 'Niblah',
        suffix: 'for CRO?',
      },
      subtitle:
        'We don’t treat CRO as a standalone tool, but as a strategic growth lever across your full marketing ecosystem.',
      cards: [
        {
          title: 'Business‑first, not test‑first',
          description:
            'Other agencies focus on test velocity: “we run 20 tests per month!” We focus on business impact. Better three tests that generate a 15% revenue lift than twenty tests with 0.5% lifts. We prioritize expected value, not activity metrics.',
        },
        {
          title: 'Full‑funnel V6 optimization',
          description:
            'We optimize six growth drivers: traffic quality, conversion rate, average order value (AOV), retention, referrals and earnings (LTV). Small improvements across all six compound into exponential revenue growth.',
        },
        {
          title: 'Integrated marketing expertise',
          description:
            'CRO doesn’t work in isolation. Our CRO specialists work closely with SEO, SEA and content teams. If conversion rate goes up while traffic quality drops, the net effect can be negative. We optimize the whole system, not siloed channels.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Outsourcing CRO to Niblah:',
        highlight: 'now vs later',
        suffix: '',
      },
      nowTitle: 'Now',
      laterTitle: 'Later',
      nowItems: [
        'You pay for traffic but conversion rates are below industry benchmarks. Every drop‑off is wasted budget.',
        'You know your website can convert better, but you don’t know where to start. Which page should you optimize first for maximum impact?',
        'Analytics shows visitors drop off in checkout, but you don’t know the root cause. Which friction point drives abandonment?',
        'You want to invest in CRO, but lack time/expertise for proper test design, statistical analysis and implementation coordination.',
        'You want a partner who ties CRO to business KPIs, not vanity metrics.',
      ],
      laterItems: [
        'Every quarter you know exactly which funnel stages to optimize for maximum revenue impact. Crystal‑clear priorities.',
        'Your website improves systematically in the areas that matter for your business model — not random “improvements”.',
        'Your CRO tests are always tied to concrete business goals with forecasted ROI. Every test has defined success metrics.',
        'You generate more revenue from the same traffic through smart optimizations. Higher conversions + higher AOV = exponential revenue growth.',
        'You finally understand why visitors do or don’t convert: data‑backed insights into customer psychology and friction points.',
      ],
    },
    expertise: {
      title: {
        prefix: 'Our',
        highlight: 'CRO expertise',
        suffix: '',
      },
      subtitle:
        'We combine quantitative data, qualitative user research and rigorous testing for reliable optimization.',
      items: [
        {
          title: 'Data analytics & funnel mapping',
          paragraphs: [
            'We start with a deep analytics audit: Google Analytics 4 event tracking, enhanced ecommerce data, custom funnel analysis. We identify exactly where users drop off and quantify the revenue impact per bottleneck.',
            'Heatmaps (Hotjar/Microsoft Clarity) show where users click, scroll and get frustrated. Session recordings reveal usability issues you’ll never see in aggregate data. Combined with cohort analysis, we get the complete picture.',
          ],
        },
        {
          title: 'Qualitative user research',
          paragraphs: [
            'Data shows what happens, but not why. User interviews, surveys and usability tests uncover the psychology behind conversion decisions. What anxieties prevent purchases? What information is missing at critical decision points?',
            'We run exit‑intent surveys to understand abandonment reasons, analyze customer support tickets for recurring objections, and do competitor UX analysis to identify best practices we can adopt.',
          ],
        },
        {
          title: 'Rigorous A/B testing',
          paragraphs: [
            'We run statistically significant tests with proper methodology: minimum sample sizes calculated upfront, duration based on traffic patterns, segmentation analysis to detect heterogeneous effects.',
            'Tools: VWO, Convert, or server‑side testing frameworks. We don’t only track conversion rate, but also secondary metrics: AOV, repeat purchase rate, customer satisfaction scores. A winning test must lift multiple KPIs.',
          ],
        },
      ],
    },
    approach: {
      title: {
        prefix: 'Our',
        highlight: 'strategic CRO approach',
        suffix: '',
      },
      subtitle:
        'From bottleneck discovery to implementing winning tests — we systematically optimize your full funnel.',
      steps: [
        {
          number: '01',
          title: 'Bottleneck discovery & prioritization',
          paragraphs: [
            'We start with a comprehensive conversion audit: analysis of your full funnel from first touch to repeat purchase. Where is revenue leaking? We identify the 3–5 biggest bottlenecks and quantify their revenue impact. A 5% improvement on a high‑traffic page is worth more than a 50% improvement on a low‑traffic page.',
            'We use the ICE framework (Impact × Confidence × Ease) to prioritize which optimizations to tackle first. That keeps us focused on quick wins with measurable business impact — not pet projects or minor tweaks.',
          ],
        },
        {
          number: '02',
          title: 'Hypothesis development & research',
          paragraphs: [
            'For each bottleneck, we create evidence‑based hypotheses: “We believe that [changing X] will cause [Y effect] because [research insight Z].” Hypotheses are grounded in user research, heatmap analysis, session recordings, customer feedback and conversion psychology.',
            'We also benchmark competitors and industry best practices. If your checkout has 5 steps while competitors run 2 steps with higher conversion, that’s a strong signal that simplification can create value.',
          ],
        },
        {
          number: '03',
          title: 'Test design & implementation',
          paragraphs: [
            'We design tests with statistical rigor: define primary and secondary metrics, calculate required sample size for 95% confidence, determine test duration based on traffic patterns. We keep tests clean: no overlapping tests on the same pages, proper randomization, QA across devices/browsers.',
            'Implementation ranges from simple copy changes (via the testing tool) to complex redesigns (involving your dev team). We coordinate with your tech team and ensure a smooth rollout without breaking the site.',
          ],
        },
        {
          number: '04',
          title: 'Data analysis & insight extraction',
          paragraphs: [
            'When a test reaches statistical significance, we do a deep‑dive analysis. We look at segmented results: does the variant perform better on mobile vs desktop? For new vs returning visitors? Paid vs organic traffic? Often there are nuances hidden by aggregate results.',
            'We also analyze secondary effects: a higher conversion rate but lower AOV can make the net impact negative. We always look at total revenue impact, not conversion rate in isolation.',
          ],
        },
        {
          number: '05',
          title: 'Rollout & continuous optimization',
          paragraphs: [
            'Winning variants are rolled out to 100% of traffic. We monitor post‑rollout to validate that the lift persists (no novelty effect). Learnings are documented in a central knowledge base that informs future test ideation.',
            'CRO is never “done”: every quarter we revisit the funnel to find new bottlenecks. After checkout is optimized, focus might shift to product pages or landing pages. Continuous improvement mindset.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Concrete',
        highlight: 'CRO results',
        suffix: '',
      },
      subtitle: 'How strategic conversion optimization transforms revenue',
      cases: [
        {
          badge: 'FW',
          name: 'FashionWorld',
          label: 'Ecommerce CRO | 8 months',
          headline:
            'Complete checkout optimization + product page redesign doubled conversion rate',
          metrics: [
            { value: '112%', label: 'conversion rate lift' },
            { value: '€47K', label: 'extra monthly revenue' },
            { value: '23%', label: 'higher AOV' },
          ],
        },
        {
          badge: 'TL',
          name: 'TechLease B2B',
          label: 'Lead gen CRO | 6 months',
          headline:
            'Form optimization and lead qualification improvements dramatically increased SQL conversion',
          metrics: [
            { value: '87%', label: 'more leads' },
            { value: '142%', label: 'higher SQL rate' },
            { value: '-38%', label: 'cost per SQL' },
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
      subtitle: 'About our CRO results',
      items: [
        {
          quote:
            '“Since Niblah started CRO, our conversion rate is up 45%. They really understand what works and test everything thoroughly. Highly recommended!”',
          name: 'Sanne Janssen',
        },
        {
          quote:
            '“Finally an agency that is truly data‑driven. Every test has a clear business rationale. We’re now getting much more out of the same traffic budget!”',
          name: 'Laura Vermeulen',
        },
        {
          quote:
            '“Their full‑funnel approach is brilliant. They don’t just optimize checkout, but the entire customer journey. Retention improved significantly too!”',
          name: 'Mark de Boer',
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
          question: 'What is conversion optimization (CRO)?',
          answer:
            'Conversion optimization (CRO) is the systematic process of increasing the percentage of website visitors that take a desired action — purchase, lead form submission, sign‑up, etc. It uses data analysis, user research and controlled experimentation (A/B tests) to remove friction and improve persuasion.',
        },
        {
          question: 'Why invest in CRO instead of buying more traffic?',
          answer:
            'CRO is cost‑efficient: every percentage point improvement adds revenue without extra traffic costs. If you have 10K visitors/month with 2% conversion = 200 conversions. Increase to 3% = 300 conversions with zero extra ad spend. Higher conversion rates also lower CAC, strengthening your competitive moat.',
        },
        {
          question: 'What does a CRO specialist do?',
          answer:
            'A CRO specialist analyzes your funnel to identify bottlenecks, runs qualitative and quantitative research to find root causes, develops evidence‑based hypotheses, designs and runs A/B tests with statistical rigor, analyzes results to extract insights, and implements winning variations. It’s a mix of data science, psychology and UX expertise.',
        },
        {
          question: 'How quickly will I see CRO results?',
          answer:
            'Quick wins can be visible within 4–8 weeks (for example: form optimization, adding trust signals). But substantial improvements typically take 3–6 months because you need multiple iterations: test → learn → refine → test again. Traffic volume also impacts speed — higher traffic reaches statistical significance faster.',
        },
        {
          question: 'Why outsource CRO instead of building an in‑house team?',
          answer:
            'An in‑house CRO program requires significant investment: a senior CRO manager, designer, developer, plus tools (Hotjar, VWO, analytics platforms). Total cost often exceeds €150K/year. Outsourcing gives immediate access to a complete team with a proven track record, without hiring risk or overhead. Plus: an external perspective reveals blind spots internal teams miss.',
        },
        {
          question: 'What conversion lifts can I expect?',
          answer:
            'It varies widely based on your baseline. Sites that have never done CRO can see 50–100%+ lifts in the first year. Already‑optimized sites often see 10–30% yearly improvements. A solid CRO program typically delivers 15–25% annual conversion rate improvement. The focus should be absolute revenue impact, not just percentage lifts.',
        },
      ],
    },
  },
  nl: {
    metadata: {
      title: 'Conversieoptimalisatie (CRO) | Meer Omzet Zonder Extra Traffic | Niblah',
      description:
        'CRO uitbesteden aan specialisten die focus leggen op bedrijfsbrede groei. Data-gedreven optimalisaties die conversies, orderwaarde en customer lifetime value verhogen.',
      keywords:
        'cro, conversieoptimalisatie, conversie verhogen, cro uitbesteden, conversion rate optimization',
      openGraph: {
        title: 'Conversieoptimalisatie (CRO) | Niblah',
        description:
          'Data-gedreven CRO die conversies, orderwaarde en customer lifetime value verhoogt.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Meer omzet zonder extra advertentiebudget',
      title: 'Conversieoptimalisatie uitbesteden',
      description:
        'Je betaalt voor traffic maar te weinig bezoekers converteren? Conversieoptimalisatie gaat verder dan A/B-testen. Bij Niblah optimaliseren we systematisch je complete funnel: van eerste klik tot repeat purchase. We focussen op de bottlenecks die échte business impact hebben, niet op incrementele button color tests.',
      ctaText: 'Plan gratis kennismaking',
      ctaLink: '/contact',
      note: '* Gemiddeld verdubbelt conversieratio binnen 6 maanden bij strategische CRO',
      image: '/development-hero.png',
      imageAlt: 'CRO dashboard met conversieverbeteringen',
    },
    why: {
      title: {
        prefix: 'Waarom',
        highlight: 'conversieoptimalisatie uitbesteden',
        suffix: 'je ROI verveelvoudigt',
      },
      paragraphs: [
        "Je investeert maandelijks duizenden euro's in traffic: Google Ads, social advertising, SEO efforts. Maar wat als je conversierate 1.8% is terwijl benchmarks in jouw industrie 3.5% zijn? Dan laat je structureel 50%+ potentiële omzet liggen. Elke bezoeker die je website verlaat zonder te converteren, is verspild advertentiebudget.",
        'Conversieoptimalisatie is de meest ROI-positieve marketing discipline. Waarom? Omdat je verbeteringen implementeert op traffic die je al betaalt. Een 30% lift in conversieratio betekent 30% meer omzet zonder één euro extra traffic kosten. De economics zijn simpel: elke procentpunt conversie-verbetering flows direct naar bottom line.',
      ],
      lead: 'Professionele CRO levert drie transformative voordelen:',
      benefits: [
        "Data-driven prioritization: In plaats van random A/B tests, identificeren we systematisch je grootste conversion leaks. We focussen effort op high-impact bottlenecks, niet op minor tweaks met marginale lifts.",
        'Full-funnel optimization: Consumer journey stopt niet bij checkout. We optimaliseren hele funnel: awareness → consideration → purchase → retention → advocacy. Higher customer lifetime value betekent higher acceptable CAC.',
        'Statistical rigor: DIY testing leidt vaak tot false positives door insufficient sample sizes of premature conclusions. Wij runnen statistically significant tests met proper methodology die reliable insights leveren.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Waarom',
        highlight: 'Niblah',
        suffix: 'voor conversieoptimalisatie?',
      },
      subtitle:
        'Wij zien CRO niet als losstaande tool, maar als strategisch growth lever binnen je complete marketing ecosystem.',
      cards: [
        {
          title: 'Business-first, niet test-first',
          description:
            'Andere bureaus focussen op test velocity: "we runnen 20 tests per maand!" Wij focussen op business impact. Liever 3 tests die 15% revenue lift genereren, dan 20 tests met 0.5% lifts. We prioriteren op expected value, niet op activity metrics.',
        },
        {
          title: 'Full-funnel V6 optimization',
          description:
            'We optimaliseren zes growth drivers: Verkeer (traffic quality), Verkooppercentage (conversion rate), Verkoopwaarde (AOV), Vasthouden (retention), Via-Via (referrals) en Verdiensten (LTV). Small improvements across alle zes = exponential revenue growth.',
        },
        {
          title: 'Integrated marketing expertise',
          description:
            "CRO werkt niet in isolatie. Onze CRO specialists werken nauw samen met SEO, SEA en content teams. Als we conversion rate verhogen maar traffic quality daalt, is net effect negatief. We optimaliseren het complete system, niet silo's.",
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'CRO uitbesteden aan Niblah:',
        highlight: 'nu versus straks',
        suffix: '',
      },
      nowTitle: 'Nu',
      laterTitle: 'Straks',
      nowItems: [
        'Je betaalt voor verkeer maar conversiepercentages blijven achter bij industry benchmarks. Elke bezoeker die afhaakt is verspild budget.',
        'Je weet dat je website beter kan converteren, maar weet niet waar te beginnen. Welke pagina optimaliseer je eerst voor maximale impact?',
        'Je ziet in analytics dat bezoekers afhaken in checkout, maar begrijpt niet de root cause. Welk friction point veroorzaakt abandonment?',
        'Je wilt investeren in CRO maar mist tijd/expertise voor proper test design, statistical analysis en implementation coordination.',
        "Je zoekt partner die CRO strategisch inzet gekoppeld aan business KPI's, niet als doel op zich met vanity metrics.",
      ],
      laterItems: [
        'Elk kwartaal weet je precies welke funnel stages geoptimaliseerd moeten worden voor maximale revenue impact. Crystal clear priorities.',
        'Je website wordt systematisch beter op punten die belangrijk zijn voor jouw business model, niet random improvements.',
        'Je CRO tests zijn altijd gekoppeld aan concrete business goals met forecasted ROI. Elke test heeft defined success metrics.',
        'Je haalt meer omzet uit hetzelfde verkeer door slimme optimalisaties. Higher conversions + higher AOV = exponential revenue growth.',
        'Je hebt eindelijk grip op waarom bezoekers wel of niet converteren. Data-backed insights into customer psychology and friction points.',
      ],
    },
    expertise: {
      title: {
        prefix: 'Onze',
        highlight: 'CRO-expertise',
        suffix: '',
      },
      subtitle:
        'We combineren kwantitatieve data, kwalitatief gebruikersonderzoek en rigorous testing voor reliable optimization.',
      items: [
        {
          title: 'Data Analytics & Funnel Mapping',
          paragraphs: [
            'We starten met diepgaande analytics audit: Google Analytics 4 event tracking, enhanced ecommerce data, custom funnel analysis. We identificeren exact waar users drop off en kwantificeren de revenue impact per bottleneck.',
            'Heatmaps (Hotjar/Microsoft Clarity) tonen ons waar users klikken, scrollen en frustreren. Session recordings onthullen usability issues die je nooit ziet in aggregate data. Gecombineerd met cohort analysis krijgen we complete picture.',
          ],
        },
        {
          title: 'Kwalitatief Gebruikersonderzoek',
          paragraphs: [
            'Data toont wat er gebeurt, maar niet waarom. User interviews, surveys en usability tests onthullen de psychologie achter conversie-beslissingen. Wat zijn de anxieties die purchase verhinderen? Welke informatie mist op critical decision points?',
            'We voeren exit-intent surveys uit om abandonment redenen te begrijpen, analyseren customer support tickets voor recurring objections, en doen competitor UX analysis om best practices te identificeren die we kunnen adopteren.',
          ],
        },
        {
          title: 'Rigorous A/B Testing',
          paragraphs: [
            'We runnen statistically significant tests met proper methodology: minimum sample sizes calculated upfront, test duration based on traffic patterns, segmentation analysis om heterogeneous effects te detecteren.',
            "Tools: VWO, Convert, Google Optimize (RIP), of server-side testing frameworks. We testen niet alleen conversion rate, maar ook secondary metrics: AOV, repeat purchase rate, customer satisfaction scores. Winning test moet lift multiple KPI's.",
          ],
        },
      ],
    },
    approach: {
      title: {
        prefix: 'Onze',
        highlight: 'strategische CRO aanpak',
        suffix: '',
      },
      subtitle:
        'Van bottleneck discovery tot winning test implementation - zo optimaliseren we systematisch je complete funnel.',
      steps: [
        {
          number: '01',
          title: 'Bottleneck Discovery & Prioritization',
          paragraphs: [
            'We beginnen met comprehensive conversion audit: analyse van je complete funnel van first touch tot repeat purchase. Waar lekt revenue? We identificeren de 3-5 biggest conversion bottlenecks en kwantificeren hun revenue impact. Een 5% improvement op een high-traffic page levert meer op dan 50% improvement op low-traffic page.',
            'We gebruiken ICE framework (Impact × Confidence × Ease) om te prioriteren welke optimalisaties we eerst tackelen. Dit zorgt dat we focussen op quick wins met measurable business impact, niet op pet projects of minor tweaks.',
          ],
        },
        {
          number: '02',
          title: 'Hypothesis Development & Research',
          paragraphs: [
            'Voor elk bottleneck ontwikkelen we evidence-based hypotheses. "We believe that [changing X] will cause [Y effect] because [research insight Z]." Hypotheses zijn gefundeerd in: user research data, heatmap analysis, session recordings, customer feedback en conversion psychology principles.',
            'We benchmarken ook tegen competitors en industry best practices. Als jouw checkout 5 steps heeft terwijl competitors 2 steps runnen met higher conversion, is dat strong signal dat simplification value kan leveren.',
          ],
        },
        {
          number: '03',
          title: 'Test Design & Implementation',
          paragraphs: [
            'We designen tests met statistical rigor: define primary and secondary metrics, calculate required sample size voor 95% confidence, determine test duration based on traffic patterns. We zorgen dat tests clean runnen: geen overlapping tests op same pages, proper randomization, QA testing op alle devices/browsers.',
            'Implementation kan variëren van simple copy changes (via testing tool) tot complex redesigns (development team involvement). We coordinate met je tech team en zorgen voor smooth rollout zonder site breakage.',
          ],
        },
        {
          number: '04',
          title: 'Data Analysis & Insight Extraction',
          paragraphs: [
            'Als test statistical significance bereikt, doen we deep-dive analysis. We kijken naar segmented results: werkt de variant beter voor mobile vs desktop? Voor nieuwe vs returning visitors? Voor traffic van paid vs organic? Often zijn er nuances die aggregate results verbergen.',
            'We analyseren ook secondary effects: improved conversion rate maar lower AOV? Dat kan net effect negatief maken. We kijken altijd naar total revenue impact, niet alleen conversion rate in isolation.',
          ],
        },
        {
          number: '05',
          title: 'Rollout & Continuous Optimization',
          paragraphs: [
            'Winning variants worden volledig uitgerold naar 100% traffic. We monitoren post-rollout om te valideren dat lift persistent is (geen novelty effect). Learnings worden gedocumenteerd in centralized knowledge base die toekomstige test ideation informeert.',
            'CRO is never "done" - elk kwartaal revisit we de funnel om nieuwe bottlenecks te identificeren. Als we checkout geoptimaliseerd hebben, verschuift focus misschien naar product pages of landing page optimization. Continuous improvement mindset.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Concrete',
        highlight: 'CRO resultaten',
        suffix: '',
      },
      subtitle: 'Hoe strategische conversieoptimalisatie revenue transformeert',
      cases: [
        {
          badge: 'FW',
          name: 'FashionWorld',
          label: 'E-commerce CRO | 8 maanden',
          headline:
            'Complete checkout optimization + product page redesign verdubbelde conversieratio',
          metrics: [
            { value: '112%', label: 'conversion rate lift' },
            { value: '€47K', label: 'extra monthly revenue' },
            { value: '23%', label: 'higher AOV' },
          ],
        },
        {
          badge: 'TL',
          name: 'TechLease B2B',
          label: 'Lead Gen CRO | 6 maanden',
          headline:
            'Form optimization en lead qualification verbetering verhoogde SQL conversie drastisch',
          metrics: [
            { value: '87%', label: 'meer leads' },
            { value: '142%', label: 'higher SQL rate' },
            { value: '-38%', label: 'cost per SQL' },
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
      subtitle: 'Over onze CRO resultaten',
      items: [
        {
          quote:
            '"Sinds Niblah CRO doet, is onze conversieratio met 45% gestegen. Ze begrijpen echt wat werkt en testen alles grondig. Absolute aanrader!"',
          name: 'Sanne Janssen',
        },
        {
          quote:
            '"Eindelijk een bureau dat data-driven werkt. Elke test heeft duidelijke business rationale. We halen nu veel meer uit hetzelfde traffic budget!"',
          name: 'Laura Vermeulen',
        },
        {
          quote:
            '"Hun full-funnel aanpak werkt briljant. Ze optimaliseren niet alleen checkout, maar hele customer journey. Retention steeg ook significant!"',
          name: 'Mark de Boer',
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
          question: 'Wat is conversieoptimalisatie precies?',
          answer:
            'Conversieoptimalisatie (CRO) is het systematische proces van het verhogen van het percentage website bezoekers dat een gewenste actie uitvoert - purchase, lead form submission, signup, etc. Dit gebeurt door data analysis, user research en controlled experimentation (A/B tests) om friction points te elimineren en persuasion te verbeteren.',
        },
        {
          question:
            'Waarom zou ik investeren in CRO als ik ook meer traffic kan kopen?',
          answer:
            'CRO is cost-efficient: elke procentpunt conversie improvement levert revenue zonder extra traffic kosten. Als je 10K bezoekers per maand hebt met 2% conversie = 200 conversies. Verhoog naar 3% = 300 conversies met zero extra ad spend. Daarnaast: higher conversion rates verlagen je CAC, wat je competitive moat vergroot.',
        },
        {
          question: 'Wat doet een CRO-specialist precies?',
          answer:
            'Een CRO specialist analyseert je funnel om conversion bottlenecks te identificeren, voert kwalitatief en kwantitatief onderzoek uit om root causes te begrijpen, ontwikkelt evidence-based hypotheses, designed en runt A/B tests met statistical rigor, analyseert resultaten om insights te extracten, en implementeert winning variations. Het is mix van data science, psychology en UX expertise.',
        },
        {
          question: 'Hoe snel zie ik resultaten van conversieoptimalisatie?',
          answer:
            'Quick wins kunnen binnen 4-8 weken zichtbaar zijn (denk: form optimization, trust signals toevoegen). Maar substantiële improvements nemen typisch 3-6 maanden omdat je multiple iterations nodig hebt: test → learn → refine → test again. Traffic volume bepaalt ook velocity - higher traffic = sneller statistical significance = sneller learnings.',
        },
        {
          question:
            'Waarom CRO uitbesteden vs in-house CRO team bouwen?',
          answer:
            'In-house CRO vereist significant investment: senior CRO manager (€70-100K), designer, developer, plus tools (Hotjar, VWO, analytics platforms). Total cost: €150K+ per jaar. Outsourcen geeft je immediate access tot complete team met proven track record, zonder hiring risk of overhead. Plus: external perspective ziet blinde spots die internal teams missen.',
        },
        {
          question:
            'Wat zijn typische conversie lifts die ik kan verwachten?',
          answer:
            'Dit varieert wildly based on baseline state. Sites die nooit CRO gedaan hebben kunnen 50-100%+ lifts zien in first year. Already-optimized sites zien 10-30% yearly improvements. Industry benchmark: good CRO programs leveren 15-25% annual conversion rate improvement. Maar focus moet zijn op absolute revenue impact, niet relative percentage lifts.',
        },
      ],
    },
  },
  de: {
    metadata: {
      title: 'CRO auslagern | Mehr Umsatz ohne mehr Traffic | Niblah',
      description:
        'CRO auslagern an Spezialisten mit Fokus auf Wachstum. Datengetriebene Optimierung für höhere Conversion Rate, AOV und Customer Lifetime Value.',
      keywords:
        'cro, conversion rate optimization, cro auslagern, conversion optimierung, ecommerce cro',
      openGraph: {
        title: 'CRO auslagern | Niblah',
        description:
          'Systematisches CRO für bessere Conversion Rate, AOV und Customer Lifetime Value.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Mehr Umsatz ohne mehr Werbebudget',
      title: 'Conversion Optimierung (CRO) auslagern',
      description:
        'Du bezahlst für Traffic, aber zu wenige Besucher konvertieren? CRO ist mehr als A/B‑Tests. Bei Niblah optimieren wir systematisch deinen kompletten Funnel: vom ersten Klick bis zum Wiederkauf. Wir fokussieren uns auf Bottlenecks mit echtem Business‑Impact — nicht auf kleine Button‑Farb‑Tests.',
      ctaText: 'Kostenloses Kennenlernen planen',
      ctaLink: '/contact',
      note: '* Mit strategischem CRO verdoppelt sich die Conversion Rate oft innerhalb von 6 Monaten',
      image: '/development-hero.png',
      imageAlt: 'CRO Dashboard mit Conversion‑Verbesserungen',
    },
    why: {
      title: {
        prefix: 'Warum',
        highlight: 'CRO auslagern',
        suffix: 'deinen ROI vervielfacht',
      },
      paragraphs: [
        'Du investierst monatlich tausende Euro in Traffic: Google Ads, Paid Social, SEO. Aber was, wenn deine Conversion Rate 1,8% beträgt, während Benchmarks in deiner Branche bei 3,5% liegen? Dann lässt du strukturell 50%+ potenziellen Umsatz liegen. Jeder Besucher, der ohne Conversion abspringt, ist verschwendetes Werbebudget.',
        'CRO ist eine der ROI‑positivsten Marketing‑Disziplinen. Warum? Weil du Optimierungen auf Traffic implementierst, den du ohnehin bezahlst. Ein 30% Lift in der Conversion Rate bedeutet 30% mehr Umsatz ohne einen Euro mehr Traffic‑Kosten. Die Economics sind simpel: jeder Prozentpunkt fließt direkt in die Bottom Line.',
      ],
      lead: 'Professionelles CRO liefert drei transformative Vorteile:',
      benefits: [
        'Data‑driven Priorisierung: statt zufälliger A/B‑Tests identifizieren wir systematisch deine größten Conversion Leaks. Wir investieren Effort in High‑Impact‑Bottlenecks statt in kleine Tweaks mit marginalem Lift.',
        'Full‑Funnel‑Optimierung: die Customer Journey endet nicht am Checkout. Wir optimieren den ganzen Funnel: Awareness → Consideration → Purchase → Retention → Advocacy. Höherer Customer Lifetime Value bedeutet höheren akzeptablen CAC.',
        'Statistische Rigorosität: DIY‑Testing führt oft zu False Positives durch zu kleine Samples oder voreilige Schlüsse. Wir testen statistisch signifikant mit sauberer Methodik für verlässliche Insights.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Warum',
        highlight: 'Niblah',
        suffix: 'für CRO?',
      },
      subtitle:
        'Wir sehen CRO nicht als isoliertes Tool, sondern als strategischen Growth Lever in deinem gesamten Marketing‑Ökosystem.',
      cards: [
        {
          title: 'Business‑first, nicht test‑first',
          description:
            'Andere Agenturen fokussieren Test‑Velocity: „20 Tests pro Monat!“ Wir fokussieren Business‑Impact. Lieber 3 Tests mit 15% Revenue‑Lift als 20 Tests mit 0,5% Lift. Wir priorisieren Expected Value, nicht Activity‑Metrics.',
        },
        {
          title: 'Full‑funnel V6 Optimization',
          description:
            'Wir optimieren sechs Growth Driver: Traffic‑Qualität, Conversion Rate, AOV, Retention, Referrals und Earnings (LTV). Kleine Verbesserungen in allen sechs sorgen für exponentielles Umsatz‑Wachstum.',
        },
        {
          title: 'Integrierte Marketing‑Expertise',
          description:
            'CRO funktioniert nicht in Isolation. Unsere CRO‑Spezialisten arbeiten eng mit SEO, SEA und Content‑Teams. Steigt die Conversion Rate, aber sinkt die Traffic‑Qualität, kann der Nettoeffekt negativ sein. Wir optimieren das komplette System, nicht Silos.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'CRO auslagern an Niblah:',
        highlight: 'jetzt vs später',
        suffix: '',
      },
      nowTitle: 'Jetzt',
      laterTitle: 'Später',
      nowItems: [
        'Du bezahlst für Traffic, aber die Conversion Rates liegen unter Benchmarks. Jeder Absprung ist verschwendetes Budget.',
        'Du weißt, dass deine Website besser konvertieren kann, aber du weißt nicht, wo du anfangen sollst. Welche Seite bringt zuerst den größten Impact?',
        'Analytics zeigt Drop‑offs im Checkout, aber die Root Cause ist unklar. Welcher Friction Point verursacht Abandonment?',
        'Du willst in CRO investieren, aber dir fehlen Zeit/Expertise für sauberes Test‑Design, statistische Analyse und Umsetzung.',
        'Du suchst einen Partner, der CRO strategisch an Business‑KPIs koppelt — statt Vanity‑Metrics.',
      ],
      laterItems: [
        'Jedes Quartal weißt du genau, welche Funnel‑Stages du für maximalen Revenue‑Impact optimieren musst. Crystal‑clear Priorities.',
        'Deine Website wird systematisch besser an den Punkten, die für dein Business‑Modell wichtig sind — nicht durch random Improvements.',
        'Deine CRO‑Tests sind immer an konkrete Business Goals mit forecasted ROI gekoppelt. Jeder Test hat definierte Success Metrics.',
        'Du holst mehr Umsatz aus dem gleichen Traffic durch smarte Optimierungen. Higher Conversions + higher AOV = exponentielles Wachstum.',
        'Du verstehst endlich, warum Besucher konvertieren oder nicht: data‑backed Insights zu Psychologie und Friction Points.',
      ],
    },
    expertise: {
      title: {
        prefix: 'Unsere',
        highlight: 'CRO‑Expertise',
        suffix: '',
      },
      subtitle:
        'Wir kombinieren quantitative Daten, qualitative Forschung und rigoroses Testing für zuverlässige Optimierung.',
      items: [
        {
          title: 'Data Analytics & Funnel Mapping',
          paragraphs: [
            'Wir starten mit einem tiefen Analytics‑Audit: GA4 Event Tracking, Enhanced Ecommerce Daten, Custom Funnel Analysis. Wir identifizieren genau, wo Users drop‑off und quantifizieren den Revenue‑Impact pro Bottleneck.',
            'Heatmaps (Hotjar/Microsoft Clarity) zeigen Klicks, Scrolls und Frustration. Session Recordings enthüllen Usability‑Issues, die du in Aggregate Data nie siehst. Kombiniert mit Cohort Analysis erhalten wir ein komplettes Bild.',
          ],
        },
        {
          title: 'Qualitative Nutzerforschung',
          paragraphs: [
            'Daten zeigen, was passiert — aber nicht warum. Interviews, Surveys und Usability Tests erklären die Psychologie hinter Conversion‑Entscheidungen. Welche Ängste verhindern den Kauf? Welche Infos fehlen an kritischen Decision Points?',
            'Wir nutzen Exit‑Intent Surveys, analysieren Support‑Tickets auf wiederkehrende Einwände und machen Competitor‑UX‑Analysen, um Best Practices zu identifizieren.',
          ],
        },
        {
          title: 'Rigorose A/B‑Tests',
          paragraphs: [
            'Wir testen statistisch signifikant mit sauberer Methodik: Mindest‑Sample‑Sizes upfront, Testdauer nach Traffic‑Patterns, Segment‑Analysen für heterogene Effekte.',
            'Tools: VWO, Convert oder server‑seitige Testing Frameworks. Wir messen nicht nur Conversion Rate, sondern auch Secondary Metrics: AOV, Repeat Purchase Rate, Satisfaction Scores. Ein Winning Test muss mehrere KPIs liften.',
          ],
        },
      ],
    },
    approach: {
      title: {
        prefix: 'Unser',
        highlight: 'strategischer CRO‑Ansatz',
        suffix: '',
      },
      subtitle:
        'Von Bottleneck Discovery bis zur Implementierung winning Tests — so optimieren wir systematisch deinen Funnel.',
      steps: [
        {
          number: '01',
          title: 'Bottleneck Discovery & Prioritization',
          paragraphs: [
            'Wir starten mit einem umfassenden Conversion‑Audit: Analyse des kompletten Funnels von First Touch bis Repeat Purchase. Wo leakt Revenue? Wir identifizieren die 3–5 größten Bottlenecks und quantifizieren den Impact. 5% Improvement auf einer High‑Traffic‑Page ist mehr wert als 50% auf einer Low‑Traffic‑Page.',
            'Wir nutzen das ICE‑Framework (Impact × Confidence × Ease) zur Priorisierung. So fokussieren wir Quick Wins mit messbarem Business‑Impact statt Pet Projects oder minor Tweaks.',
          ],
        },
        {
          number: '02',
          title: 'Hypothesis Development & Research',
          paragraphs: [
            'Für jeden Bottleneck entwickeln wir evidence‑based Hypothesen: „We believe that [changing X] will cause [Y effect] because [research insight Z].“ Basis sind User Research, Heatmaps, Session Recordings, Feedback und Conversion Psychology.',
            'Wir benchmarken auch Competitors und Industry Best Practices. Hat dein Checkout 5 Steps, während Competitors 2 Steps mit höherer Conversion fahren, ist das ein starkes Signal für Simplification Value.',
          ],
        },
        {
          number: '03',
          title: 'Test Design & Implementation',
          paragraphs: [
            'Wir designen Tests mit statistischer Rigorosität: Primary/Secondary Metrics definieren, Sample Size für 95% Confidence, Testdauer nach Traffic‑Patterns. Wir vermeiden Overlaps, sorgen für Randomization und QA auf allen Devices/Browsers.',
            'Die Umsetzung reicht von Copy‑Changes (via Testing Tool) bis zu komplexen Redesigns (mit Dev‑Team). Wir koordinieren die Implementierung und sorgen für einen smooth Rollout ohne Breakage.',
          ],
        },
        {
          number: '04',
          title: 'Data Analysis & Insight Extraction',
          paragraphs: [
            'Wenn ein Test Signifikanz erreicht, machen wir eine Deep‑Dive‑Analyse. Segmentiert nach Mobile vs Desktop, New vs Returning, Paid vs Organic. Oft verstecken sich Nuancen hinter Aggregate Results.',
            'Wir prüfen Secondary Effects: höhere Conversion Rate bei niedrigerem AOV kann den Nettoeffekt negativ machen. Wir schauen immer auf Total Revenue Impact, nicht nur auf Conversion Rate.',
          ],
        },
        {
          number: '05',
          title: 'Rollout & Continuous Optimization',
          paragraphs: [
            'Winning Variants werden auf 100% Traffic ausgerollt. Wir monitoren post‑Rollout, ob der Lift stabil bleibt (kein Novelty Effect). Learnings dokumentieren wir zentral für zukünftige Test‑Ideation.',
            'CRO ist nie „fertig“: jedes Quartal revisiten wir den Funnel und identifizieren neue Bottlenecks. Nach Checkout‑Optimierung kann der Fokus auf Product Pages oder Landing Pages wechseln. Continuous Improvement Mindset.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Konkrete',
        highlight: 'CRO‑Ergebnisse',
        suffix: '',
      },
      subtitle: 'Wie strategisches CRO Umsatz transformiert',
      cases: [
        {
          badge: 'FW',
          name: 'FashionWorld',
          label: 'Ecommerce CRO | 8 Monate',
          headline:
            'Checkout‑Optimierung + Product Page Redesign verdoppelten die Conversion Rate',
          metrics: [
            { value: '112%', label: 'Conversion Rate Lift' },
            { value: '€47K', label: 'zusätzlicher Monatsumsatz' },
            { value: '23%', label: 'höherer AOV' },
          ],
        },
        {
          badge: 'TL',
          name: 'TechLease B2B',
          label: 'Lead Gen CRO | 6 Monate',
          headline:
            'Form‑Optimierung und Lead‑Qualifizierung steigerten SQL‑Conversion drastisch',
          metrics: [
            { value: '87%', label: 'mehr Leads' },
            { value: '142%', label: 'höhere SQL‑Rate' },
            { value: '-38%', label: 'Cost per SQL' },
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
      subtitle: 'Über unsere CRO Ergebnisse',
      items: [
        {
          quote:
            '„Seit Niblah CRO macht, ist unsere Conversion Rate um 45% gestiegen. Sie verstehen wirklich, was funktioniert, und testen alles gründlich. Absolute Empfehlung!“',
          name: 'Sanne Janssen',
        },
        {
          quote:
            '„Endlich eine Agentur, die wirklich data‑driven arbeitet. Jeder Test hat eine klare Business‑Rationale. Wir holen jetzt viel mehr aus dem gleichen Traffic‑Budget!“',
          name: 'Laura Vermeulen',
        },
        {
          quote:
            '„Ihr Full‑Funnel‑Ansatz ist brillant. Sie optimieren nicht nur den Checkout, sondern die gesamte Customer Journey. Auch die Retention ist deutlich gestiegen!“',
          name: 'Mark de Boer',
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
          question: 'Was ist Conversion Optimierung (CRO)?',
          answer:
            'CRO ist der systematische Prozess, den Anteil der Website‑Besucher zu erhöhen, die eine gewünschte Aktion ausführen (Kauf, Lead‑Formular, Sign‑up usw.). Dazu nutzt man Datenanalyse, Nutzerforschung und kontrollierte Experimente (A/B‑Tests), um Friction zu reduzieren und Überzeugung zu verbessern.',
        },
        {
          question:
            'Warum in CRO investieren, wenn ich auch mehr Traffic kaufen kann?',
          answer:
            'CRO ist kosteneffizient: jeder Prozentpunkt mehr Conversion bringt Umsatz ohne zusätzliche Traffic‑Kosten. 10K Besucher/Monat mit 2% Conversion = 200 Conversions. Steigerung auf 3% = 300 Conversions ohne mehr Ad Spend. Zudem senkt eine höhere Conversion Rate den CAC und stärkt deine Competitive Moat.',
        },
        {
          question: 'Was macht ein CRO‑Spezialist?',
          answer:
            'Ein CRO‑Spezialist analysiert den Funnel, identifiziert Bottlenecks, führt qualitative und quantitative Forschung durch, entwickelt evidenzbasierte Hypothesen, designt und führt A/B‑Tests mit statistischer Rigorosität durch, analysiert Ergebnisse und implementiert winning Variations. Eine Mischung aus Data Science, Psychologie und UX.',
        },
        {
          question: 'Wie schnell sehe ich CRO Ergebnisse?',
          answer:
            'Quick Wins können nach 4–8 Wochen sichtbar sein (z.B. Form‑Optimierung, Trust Signals). Substantielle Improvements dauern meist 3–6 Monate, weil mehrere Iterationen nötig sind: testen → lernen → verfeinern → erneut testen. Mehr Traffic = schneller Signifikanz = schneller Learnings.',
        },
        {
          question:
            'Warum CRO auslagern statt ein In‑house Team aufzubauen?',
          answer:
            'Ein In‑house CRO‑Team ist teuer: Senior CRO Manager, Designer, Developer plus Tools (Hotjar, VWO, Analytics). Gesamt oft 150K€+ pro Jahr. Outsourcing gibt dir sofort ein komplettes Team mit Track Record ohne Hiring‑Risiko und Overhead. Außerdem sieht eine externe Perspektive Blind Spots, die intern oft übersehen werden.',
        },
        {
          question: 'Welche Conversion Lifts kann ich erwarten?',
          answer:
            'Das variiert stark je nach Ausgangslage. Websites ohne CRO‑Historie sehen oft 50–100%+ im ersten Jahr. Bereits optimierte Sites erreichen häufig 10–30% pro Jahr. Gute CRO‑Programme liefern typischerweise 15–25% jährliche Verbesserung der Conversion Rate. Fokus sollte auf absolutem Revenue‑Impact liegen.',
        },
      ],
    },
  },
  fr: {
    metadata: {
      title: 'Externaliser le CRO | Plus de revenus sans plus de trafic | Niblah',
      description:
        "Externalisez le CRO à des spécialistes orientés croissance. Optimisation data‑driven pour améliorer le taux de conversion, l'AOV et la valeur vie client.",
      keywords:
        'cro, optimisation du taux de conversion, externaliser cro, optimisation conversion, cro ecommerce',
      openGraph: {
        title: 'Externaliser le CRO | Niblah',
        description:
          "CRO systématique pour améliorer conversions, AOV et valeur vie client.",
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: "Plus de revenus sans plus de budget pub",
      title: 'Externaliser le CRO (optimisation conversion)',
      description:
        'Vous payez pour du trafic mais trop peu de visiteurs convertissent ? Le CRO va bien au‑delà des A/B tests. Chez Niblah, nous optimisons votre funnel de bout en bout : du premier clic au réachat. Nous ciblons les goulots d’étranglement à fort impact business — pas des micro‑tests de couleur de bouton.',
      ctaText: 'Planifier un échange gratuit',
      ctaLink: '/contact',
      note: '* Avec un CRO stratégique, le taux de conversion double souvent en 6 mois',
      image: '/development-hero.png',
      imageAlt: 'Tableau de bord CRO montrant des gains de conversion',
    },
    why: {
      title: {
        prefix: 'Pourquoi',
        highlight: 'externaliser le CRO',
        suffix: 'multiplie votre ROI',
      },
      paragraphs: [
        'Vous investissez chaque mois des milliers d’euros en trafic : Google Ads, social ads, SEO. Mais si votre taux de conversion est à 1,8% alors que les benchmarks de votre secteur sont à 3,5% ? Vous laissez 50%+ de revenus potentiels sur la table. Chaque visiteur qui quitte sans convertir, c’est du budget gaspillé.',
        'Le CRO est l’une des disciplines marketing les plus ROI‑positives. Pourquoi ? Parce que vous optimisez un trafic que vous payez déjà. +30% de taux de conversion = +30% de revenus sans coût trafic supplémentaire. L’économie est simple : chaque point de conversion améliore directement la marge.',
      ],
      lead: 'Un CRO professionnel apporte trois bénéfices majeurs :',
      benefits: [
        'Priorisation data‑driven : au lieu de tests aléatoires, nous identifions systématiquement vos plus grosses fuites de conversion. Focus sur les goulots à fort impact, pas sur des tweaks marginaux.',
        'Optimisation full‑funnel : le parcours client ne s’arrête pas au checkout. Nous optimisons tout le funnel : awareness → considération → achat → rétention → recommandation. Un meilleur LTV permet un CAC acceptable plus élevé.',
        'Rigueur statistique : le DIY conduit souvent à des faux positifs (échantillons trop petits, conclusions hâtives). Nous menons des tests statistiquement significatifs avec une méthodologie fiable.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Pourquoi',
        highlight: 'Niblah',
        suffix: 'pour le CRO ?',
      },
      subtitle:
        'Nous ne voyons pas le CRO comme un outil isolé, mais comme un levier de croissance au sein de votre écosystème marketing.',
      cards: [
        {
          title: 'Business‑first, pas test‑first',
          description:
            'D’autres agences misent sur la vitesse de tests (“20 tests/mois !”). Nous misons sur l’impact business. Mieux vaut 3 tests à +15% de revenus que 20 tests à +0,5%. Priorité à la valeur attendue, pas aux métriques d’activité.',
        },
        {
          title: 'Optimisation V6 full‑funnel',
          description:
            'Nous optimisons 6 leviers : qualité du trafic, taux de conversion, panier moyen (AOV), rétention, recommandations et LTV. De petites améliorations sur les 6 composent une croissance exponentielle.',
        },
        {
          title: 'Expertise marketing intégrée',
          description:
            'Le CRO ne vit pas en silo. Nos spécialistes CRO travaillent avec les équipes SEO, SEA et contenu. Si le taux de conversion augmente mais que la qualité du trafic baisse, l’effet net peut être négatif. Nous optimisons le système global.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Externaliser le CRO à Niblah :',
        highlight: 'maintenant vs après',
        suffix: '',
      },
      nowTitle: 'Maintenant',
      laterTitle: 'Après',
      nowItems: [
        'Vous payez du trafic mais vos conversions restent sous les benchmarks. Chaque abandon = budget perdu.',
        'Vous savez que votre site peut mieux convertir mais vous ne savez pas par où commencer. Quelle page optimiser en premier ?',
        'Les analytics montrent des abandons au checkout mais la cause est floue. Quel point de friction bloque ?',
        'Vous voulez investir en CRO mais manquez de temps/compétences pour le design de test, l’analyse statistique et la mise en œuvre.',
        'Vous cherchez un partenaire qui relie le CRO à des KPI business — pas à des vanity metrics.',
      ],
      laterItems: [
        'Chaque trimestre, vous savez quelles étapes du funnel optimiser pour maximiser le revenu. Priorités claires.',
        'Votre site s’améliore de façon systématique sur ce qui compte pour votre modèle économique — pas au hasard.',
        'Vos tests CRO sont toujours liés à des objectifs business avec ROI estimé. Chaque test a des métriques de succès définies.',
        'Vous générez plus de revenus avec le même trafic grâce à des optimisations intelligentes. Conversions + AOV = croissance exponentielle.',
        'Vous comprenez enfin pourquoi les visiteurs convertissent (ou non) : insights data‑driven sur la psychologie et les frictions.',
      ],
    },
    expertise: {
      title: {
        prefix: 'Notre',
        highlight: 'expertise CRO',
        suffix: '',
      },
      subtitle:
        'Nous combinons data quantitative, recherche qualitative et tests rigoureux pour une optimisation fiable.',
      items: [
        {
          title: 'Data analytics & funnel mapping',
          paragraphs: [
            'Nous commençons par un audit analytics : GA4 event tracking, enhanced ecommerce, analyse de funnel. Nous identifions où les utilisateurs abandonnent et quantifions l’impact revenu par goulot.',
            'Heatmaps (Hotjar/Microsoft Clarity) et session recordings révèlent des problèmes UX invisibles dans les données agrégées. Avec l’analyse de cohortes, on obtient une vue complète.',
          ],
        },
        {
          title: 'Recherche utilisateur qualitative',
          paragraphs: [
            'La data montre le “quoi”, pas le “pourquoi”. Interviews, surveys et tests d’utilisabilité dévoilent la psychologie derrière la décision. Quelles craintes empêchent l’achat ? Quelles infos manquent aux moments clés ?',
            'Nous utilisons des exit‑intent surveys, analysons les tickets support pour les objections récurrentes, et faisons une analyse UX concurrentielle pour adopter les meilleures pratiques.',
          ],
        },
        {
          title: 'A/B testing rigoureux',
          paragraphs: [
            'Tests statistiquement significatifs avec une méthodologie solide : taille d’échantillon calculée, durée selon le trafic, analyse par segments pour détecter des effets hétérogènes.',
            'Outils : VWO, Convert ou frameworks server‑side. Nous suivons la conversion mais aussi les métriques secondaires : AOV, réachat, satisfaction. Un test gagnant doit améliorer plusieurs KPI.',
          ],
        },
      ],
    },
    approach: {
      title: {
        prefix: 'Notre',
        highlight: 'approche CRO stratégique',
        suffix: '',
      },
      subtitle:
        'De la découverte des goulots à l’implémentation des tests gagnants — nous optimisons votre funnel de façon systématique.',
      steps: [
        {
          number: '01',
          title: 'Découverte & priorisation des goulots',
          paragraphs: [
            'Audit de conversion complet : du first touch au réachat. Où le revenu fuit‑il ? Nous identifions les 3–5 principaux goulots et quantifions leur impact. +5% sur une page à fort trafic vaut plus que +50% sur une page à faible trafic.',
            'Nous utilisons le framework ICE (Impact × Confidence × Ease) pour prioriser les optimisations. Objectif : quick wins mesurables, pas des “pet projects”.',
          ],
        },
        {
          number: '02',
          title: 'Hypothèses & recherche',
          paragraphs: [
            'Pour chaque goulot, nous formulons des hypothèses basées sur des preuves : “We believe that [X] will cause [Y] because [Z].” Elles s’appuient sur la recherche utilisateur, heatmaps, recordings, feedback et la psychologie de conversion.',
            'Nous benchmarkons aussi les concurrents. Un checkout en 5 étapes quand les concurrents convertissent mieux en 2 étapes est un signal fort : simplifier crée de la valeur.',
          ],
        },
        {
          number: '03',
          title: 'Design & implémentation des tests',
          paragraphs: [
            'Rigueur statistique : définition des métriques, calcul de la taille d’échantillon (95% de confiance), durée de test selon le trafic. Tests “propres” : pas de tests qui se chevauchent, randomisation, QA sur appareils/navigateurs.',
            'L’implémentation va de changements de copy simples à des redesigns complexes. Nous coordonnons avec votre équipe tech pour un déploiement fluide.',
          ],
        },
        {
          number: '04',
          title: 'Analyse & extraction d’insights',
          paragraphs: [
            'Quand un test est significatif, on fait un deep‑dive : mobile vs desktop, nouveaux vs récurrents, paid vs organic. Les agrégats cachent souvent des nuances.',
            'On vérifie aussi les effets secondaires : mieux convertir mais avec un AOV plus faible peut réduire le revenu total. On regarde toujours l’impact revenu global.',
          ],
        },
        {
          number: '05',
          title: 'Déploiement & optimisation continue',
          paragraphs: [
            'Les variantes gagnantes sont déployées à 100%. Nous monitorons pour vérifier que le gain persiste (pas d’effet nouveauté). Les learnings sont documentés dans une base de connaissance.',
            'Le CRO n’est jamais “terminé”. Chaque trimestre, nous réévaluons le funnel pour trouver de nouveaux goulots. Après le checkout, focus sur pages produit ou landing pages. Culture d’amélioration continue.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Résultats',
        highlight: 'CRO concrets',
        suffix: '',
      },
      subtitle: 'Comment le CRO stratégique transforme le revenu',
      cases: [
        {
          badge: 'FW',
          name: 'FashionWorld',
          label: 'CRO e‑commerce | 8 mois',
          headline:
            'Optimisation du checkout + redesign des pages produit : taux de conversion doublé',
          metrics: [
            { value: '112%', label: 'lift taux de conversion' },
            { value: '€47K', label: 'revenu mensuel supplémentaire' },
            { value: '23%', label: 'AOV plus élevé' },
          ],
        },
        {
          badge: 'TL',
          name: 'TechLease B2B',
          label: 'CRO lead gen | 6 mois',
          headline:
            'Optimisation des formulaires et qualification : hausse forte des SQL',
          metrics: [
            { value: '87%', label: 'plus de leads' },
            { value: '142%', label: 'taux SQL plus élevé' },
            { value: '-38%', label: 'coût par SQL' },
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
      subtitle: 'À propos de nos résultats CRO',
      items: [
        {
          quote:
            '« Depuis que Niblah gère le CRO, notre taux de conversion a augmenté de 45%. Ils comprennent vraiment ce qui marche et testent tout en profondeur. Je recommande ! »',
          name: 'Sanne Janssen',
        },
        {
          quote:
            '« Enfin une agence vraiment data‑driven. Chaque test a une logique business claire. On tire beaucoup plus du même budget trafic ! »',
          name: 'Laura Vermeulen',
        },
        {
          quote:
            '« Leur approche full‑funnel est brillante. Ils n’optimisent pas seulement le checkout, mais tout le parcours client. La rétention a aussi fortement augmenté ! »',
          name: 'Mark de Boer',
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
          question: "Qu'est‑ce que le CRO ?",
          answer:
            'Le CRO est le processus systématique visant à augmenter la part de visiteurs qui effectuent une action souhaitée (achat, formulaire, inscription, etc.). Il combine analyse de données, recherche utilisateur et expérimentations contrôlées (A/B tests) pour réduire les frictions et améliorer la persuasion.',
        },
        {
          question: 'Pourquoi investir en CRO plutôt que d’acheter plus de trafic ?',
          answer:
            'Le CRO est très rentable : chaque point de conversion ajoute du revenu sans coûts trafic supplémentaires. 10K visiteurs/mois à 2% = 200 conversions. Passer à 3% = 300 conversions sans dépenses pub en plus. En plus, un meilleur taux de conversion baisse le CAC.',
        },
        {
          question: 'Que fait un spécialiste CRO ?',
          answer:
            'Il analyse le funnel, identifie les goulots, mène des recherches qualitatives/quantitatives, formule des hypothèses, conçoit et exécute des A/B tests, analyse les résultats et déploie les variantes gagnantes. C’est un mix data, psychologie et UX.',
        },
        {
          question: 'Quand verrai‑je des résultats ?',
          answer:
            'Des quick wins peuvent apparaître en 4–8 semaines (ex : optimisation de formulaires, ajout de signaux de confiance). Les gains significatifs prennent souvent 3–6 mois car il faut plusieurs itérations. Plus de trafic = significativité plus rapide.',
        },
        {
          question: 'Pourquoi externaliser plutôt que créer une équipe interne ?',
          answer:
            'Une équipe interne coûte cher (manager CRO, designer, développeur + outils). Le total dépasse souvent 150K€/an. L’externalisation donne accès immédiatement à une équipe complète avec un track record, sans risque de recrutement. Et un regard externe voit des angles morts.',
        },
        {
          question: 'Quels lifts puis‑je attendre ?',
          answer:
            'Cela dépend fortement de votre point de départ. Un site sans CRO peut gagner 50–100%+ la première année. Un site déjà optimisé gagne plutôt 10–30%/an. Un bon programme CRO vise souvent 15–25% d’amélioration annuelle. Le vrai focus : l’impact revenu.',
        },
      ],
    },
  },
  it: {
    metadata: {
      title: 'Outsource CRO | Più fatturato senza più traffico | Niblah',
      description:
        'Outsource CRO a specialisti orientati alla crescita. Ottimizzazione data‑driven per aumentare conversion rate, AOV e customer lifetime value.',
      keywords:
        'cro, conversion rate optimization, outsource cro, ottimizzazione conversione, cro ecommerce',
      openGraph: {
        title: 'Outsource CRO | Niblah',
        description:
          'CRO sistematico per migliorare conversioni, AOV e customer lifetime value.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Più fatturato senza più budget pubblicitario',
      title: 'Outsource CRO (ottimizzazione conversioni)',
      description:
        'Paghi per il traffico ma troppi pochi visitatori convertono? Il CRO è più dei test A/B. In Niblah ottimizziamo l’intero funnel: dal primo clic al riacquisto. Ci concentriamo sui colli di bottiglia con vero impatto business, non su micro test del colore dei bottoni.',
      ctaText: 'Prenota una call gratuita',
      ctaLink: '/contact',
      note: '* Con un CRO strategico il conversion rate spesso raddoppia in 6 mesi',
      image: '/development-hero.png',
      imageAlt: 'Dashboard CRO con miglioramenti di conversione',
    },
    why: {
      title: {
        prefix: 'Perché',
        highlight: 'outsourciare il CRO',
        suffix: 'moltiplica il ROI',
      },
      paragraphs: [
        'Investi migliaia di euro al mese in traffico: Google Ads, social advertising, SEO. Ma se il tuo conversion rate è 1,8% mentre i benchmark del settore sono 3,5%? Stai lasciando sul tavolo 50%+ di fatturato potenziale. Ogni visitatore che se ne va senza convertire è budget sprecato.',
        'Il CRO è tra le discipline marketing più ROI‑positive. Perché? Perché migliori traffico che paghi già. Un +30% di conversion rate significa +30% di fatturato senza costi di traffico extra. Ogni punto percentuale va direttamente al bottom line.',
      ],
      lead: 'Un CRO professionale porta tre vantaggi trasformativi:',
      benefits: [
        'Prioritizzazione data‑driven: invece di test random, identifichiamo sistematicamente le maggiori perdite di conversione. Focus su colli di bottiglia ad alto impatto, non su tweak marginali.',
        'Ottimizzazione full‑funnel: il journey non finisce al checkout. Ottimizziamo tutto il funnel: awareness → consideration → purchase → retention → advocacy. Un LTV più alto consente un CAC più elevato.',
        'Rigore statistico: il DIY testing porta spesso a falsi positivi per campioni piccoli e conclusioni premature. Noi eseguiamo test statisticamente significativi con metodologia corretta e insight affidabili.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Perché',
        highlight: 'Niblah',
        suffix: 'per il CRO?',
      },
      subtitle:
        'Non vediamo il CRO come un tool isolato, ma come un growth lever strategico nel tuo ecosistema marketing.',
      cards: [
        {
          title: 'Business‑first, non test‑first',
          description:
            'Altre agenzie puntano sulla “test velocity”. Noi puntiamo sull’impatto business. Meglio 3 test che generano +15% revenue che 20 test da +0,5%. Prioritizziamo expected value, non metriche di attività.',
        },
        {
          title: 'Full‑funnel V6 optimization',
          description:
            'Ottimizziamo sei driver: qualità del traffico, conversion rate, AOV, retention, referral e LTV. Piccoli miglioramenti su tutti e sei si sommano in crescita esponenziale.',
        },
        {
          title: 'Expertise marketing integrata',
          description:
            'Il CRO non funziona in isolamento. I nostri specialisti CRO lavorano con SEO, SEA e content. Se aumenti conversion rate ma cala la qualità del traffico, l’effetto netto può essere negativo. Ottimizziamo l’intero sistema, non i silos.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Outsource CRO con Niblah:',
        highlight: 'ora vs dopo',
        suffix: '',
      },
      nowTitle: 'Ora',
      laterTitle: 'Dopo',
      nowItems: [
        'Paghi per il traffico ma il conversion rate è sotto i benchmark. Ogni abbandono è budget sprecato.',
        'Sai che il sito può convertire meglio, ma non sai da dove iniziare. Quale pagina ottimizzare per primo?',
        'Vedi drop‑off in checkout ma non conosci la root cause. Quale friction point causa abandonment?',
        'Vuoi investire in CRO ma mancano tempo/competenze per test design, analisi statistica e implementazione.',
        'Cerchi un partner che colleghi CRO a KPI business, non a vanity metrics.',
      ],
      laterItems: [
        'Ogni trimestre sai quali stage del funnel ottimizzare per massimo impatto revenue. Priorità chiarissime.',
        'Il sito migliora sistematicamente nelle aree che contano per il tuo modello business, non con ottimizzazioni random.',
        'I test CRO sono legati a obiettivi business con ROI stimato. Ogni test ha success metrics definite.',
        'Ottieni più fatturato con lo stesso traffico grazie a ottimizzazioni smart. Higher conversions + higher AOV = crescita esponenziale.',
        'Capisci finalmente perché gli utenti convertono o no: insight data‑backed su psicologia e frizioni.',
      ],
    },
    expertise: {
      title: {
        prefix: 'La nostra',
        highlight: 'competenza CRO',
        suffix: '',
      },
      subtitle:
        'Combiniamo data quantitativa, ricerca qualitativa e test rigorosi per ottimizzazioni affidabili.',
      items: [
        {
          title: 'Data analytics & funnel mapping',
          paragraphs: [
            'Partiamo con un audit analytics approfondito: GA4 event tracking, enhanced ecommerce, funnel analysis. Identifichiamo dove gli utenti abbandonano e quantifichiamo l’impatto revenue per bottleneck.',
            'Heatmap (Hotjar/Microsoft Clarity) e session recording mostrano problemi UX invisibili nei dati aggregati. Con la cohort analysis otteniamo un quadro completo.',
          ],
        },
        {
          title: 'Ricerca utente qualitativa',
          paragraphs: [
            'I dati dicono cosa succede, non perché. Interviste, survey e usability test rivelano la psicologia dietro le decisioni. Quali ansie bloccano l’acquisto? Quali informazioni mancano nei momenti critici?',
            'Usiamo exit‑intent survey per capire l’abbandono, analizziamo ticket support per obiezioni ricorrenti e facciamo competitor UX analysis per adottare best practice.',
          ],
        },
        {
          title: 'A/B testing rigoroso',
          paragraphs: [
            'Test statisticamente significativi con metodologia corretta: sample size calcolata upfront, durata basata sul traffico, segment analysis per effetti eterogenei.',
            'Tool: VWO, Convert o framework server‑side. Misuriamo non solo conversion rate ma anche metriche secondarie: AOV, riacquisto, soddisfazione. Un test vincente deve migliorare più KPI.',
          ],
        },
      ],
    },
    approach: {
      title: {
        prefix: 'Il nostro',
        highlight: 'approccio CRO strategico',
        suffix: '',
      },
      subtitle:
        'Dalla discovery dei bottleneck all’implementazione dei test vincenti: ottimizziamo il funnel in modo sistematico.',
      steps: [
        {
          number: '01',
          title: 'Bottleneck discovery & prioritization',
          paragraphs: [
            'Audit conversion completo: dal first touch al repeat purchase. Dove “perde” fatturato il funnel? Identifichiamo 3–5 bottleneck principali e quantifichiamo l’impatto. Un +5% su una pagina ad alto traffico vale più di +50% su una pagina a basso traffico.',
            'Usiamo il framework ICE (Impact × Confidence × Ease) per prioritizzare. Focus su quick win misurabili, non su pet project.',
          ],
        },
        {
          number: '02',
          title: 'Hypothesis development & research',
          paragraphs: [
            'Per ogni bottleneck creiamo ipotesi evidence‑based. Basate su user research, heatmap, session recording, feedback e conversion psychology.',
            'Benchmark anche sui competitor: se il tuo checkout ha 5 step e i competitor convertono meglio con 2, è un segnale forte che la semplificazione crea valore.',
          ],
        },
        {
          number: '03',
          title: 'Test design & implementation',
          paragraphs: [
            'Rigorosità statistica: definizione metriche, sample size per 95% confidence, durata del test. Nessun overlap, randomizzazione corretta e QA su device/browser.',
            'Implementazione da copy change a redesign complessi. Coordiniamo con il tuo team tech per un rollout fluido senza breakage.',
          ],
        },
        {
          number: '04',
          title: 'Data analysis & insight extraction',
          paragraphs: [
            'Deep‑dive quando il test è significativo: segmenti mobile vs desktop, nuovi vs returning, paid vs organic. Gli aggregati nascondono spesso insight.',
            'Controlliamo effetti secondari: conversion rate più alto ma AOV più basso può ridurre il revenue totale. Guardiamo sempre l’impatto revenue complessivo.',
          ],
        },
        {
          number: '05',
          title: 'Rollout & continuous optimization',
          paragraphs: [
            'Le varianti vincenti vengono roll‑out al 100% del traffico. Monitoriamo post‑rollout per verificare che il lift sia stabile. Documentiamo i learnings in una knowledge base centrale.',
            'Il CRO non è mai “finito”: ogni trimestre si rivaluta il funnel e si cercano nuovi bottleneck. Dopo il checkout, focus su product page o landing page. Mentalità di continuous improvement.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Risultati',
        highlight: 'CRO concreti',
        suffix: '',
      },
      subtitle: 'Come il CRO strategico trasforma il fatturato',
      cases: [
        {
          badge: 'FW',
          name: 'FashionWorld',
          label: 'CRO ecommerce | 8 mesi',
          headline:
            'Ottimizzazione checkout + redesign product page: conversion rate raddoppiato',
          metrics: [
            { value: '112%', label: 'lift conversion rate' },
            { value: '€47K', label: 'revenue mensile extra' },
            { value: '23%', label: 'AOV più alto' },
          ],
        },
        {
          badge: 'TL',
          name: 'TechLease B2B',
          label: 'CRO lead gen | 6 mesi',
          headline:
            'Ottimizzazione form e lead qualification: aumento drastico degli SQL',
          metrics: [
            { value: '87%', label: 'più lead' },
            { value: '142%', label: 'SQL rate più alta' },
            { value: '-38%', label: 'cost per SQL' },
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
      subtitle: 'Sui nostri risultati CRO',
      items: [
        {
          quote:
            '“Da quando Niblah si occupa del CRO, il nostro conversion rate è salito del 45%. Capiscono davvero cosa funziona e testano tutto a fondo. Consigliatissimi!”',
          name: 'Sanne Janssen',
        },
        {
          quote:
            '“Finalmente un’agenzia davvero data‑driven. Ogni test ha una logica business chiara. Ora otteniamo molto di più dallo stesso budget traffico!”',
          name: 'Laura Vermeulen',
        },
        {
          quote:
            '“Il loro approccio full‑funnel è brillante. Non ottimizzano solo il checkout, ma tutto il customer journey. Anche la retention è aumentata molto!”',
          name: 'Mark de Boer',
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
          question: "Cos'è il CRO?",
          answer:
            'Il CRO è il processo sistematico di aumentare la percentuale di visitatori che compiono un’azione desiderata (acquisto, form, signup, ecc.). Si basa su data analysis, user research e sperimentazione controllata (A/B test) per ridurre frizioni e aumentare la persuasione.',
        },
        {
          question: 'Perché investire in CRO invece di comprare più traffico?',
          answer:
            'Il CRO è cost‑efficient: ogni punto percentuale di conversione aggiunge revenue senza costi di traffico extra. 10K visitatori/mese al 2% = 200 conversioni. Al 3% = 300 conversioni senza extra ad spend. Inoltre riduce il CAC.',
        },
        {
          question: 'Cosa fa uno specialista CRO?',
          answer:
            'Analizza il funnel, identifica bottleneck, svolge ricerca qualitativa e quantitativa, sviluppa ipotesi, disegna ed esegue A/B test con rigore statistico, analizza i risultati e implementa le varianti vincenti. Un mix di data, psicologia e UX.',
        },
        {
          question: 'Quando vedrò risultati?',
          answer:
            'Quick win in 4–8 settimane (es: form optimization, trust signals). Miglioramenti sostanziali richiedono spesso 3–6 mesi per via delle iterazioni. Più traffico = significatività più rapida.',
        },
        {
          question: 'Perché outsourciare invece di un team interno?',
          answer:
            'Un team interno richiede investimenti alti (CRO manager, designer, developer + tool). Spesso >150K€/anno. L’outsourcing dà accesso immediato a un team completo con track record, senza hiring risk e overhead. E una prospettiva esterna vede blind spot.',
        },
        {
          question: 'Che lift posso aspettarmi?',
          answer:
            'Dipende dalla baseline. Siti senza CRO possono vedere 50–100%+ nel primo anno. Siti già ottimizzati: 10–30% annuo. Un buon programma CRO punta spesso a 15–25% annuo. Focus: impatto revenue assoluto.',
        },
      ],
    },
  },
  sv: {
    metadata: {
      title: 'Outsourca CRO | Mer intäkter utan mer trafik | Niblah',
      description:
        'Outsourca CRO till specialister med fokus på tillväxt. Datadriven optimering som förbättrar konvertering, AOV och kundlivstidsvärde.',
      keywords:
        'cro, konverteringsoptimering, outsourca cro, conversion rate optimization, ecommerce cro',
      openGraph: {
        title: 'Outsourca CRO | Niblah',
        description:
          'Systematisk CRO som förbättrar konvertering, AOV och kundlivstidsvärde.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Mer intäkter utan mer annonsbudget',
      title: 'Outsourca konverteringsoptimering (CRO)',
      description:
        'Du betalar för trafik men för få besökare konverterar? CRO är mer än A/B‑tester. På Niblah optimerar vi hela din funnel: från första klick till återköp. Vi fokuserar på flaskhalsar med verklig affärseffekt — inte små knappfärgtester.',
      ctaText: 'Boka ett gratis intro',
      ctaLink: '/contact',
      note: '* Med strategisk CRO fördubblas ofta konverteringen inom 6 månader',
      image: '/development-hero.png',
      imageAlt: 'CRO‑dashboard som visar konverteringsförbättringar',
    },
    why: {
      title: {
        prefix: 'Varför',
        highlight: 'outsourcad CRO',
        suffix: 'multiplicerar din ROI',
      },
      paragraphs: [
        'Du investerar tusentals kronor varje månad i trafik: Google Ads, sociala annonser, SEO. Men om din konverteringsgrad är 1,8% medan branschbenchmarks ligger på 3,5%? Då tappar du 50%+ potentiell intäkt. Varje besökare som lämnar utan att konvertera är bortkastad annonsbudget.',
        'CRO är en av de mest ROI‑positiva marknadsföringsdisciplinerna. Varför? För att du förbättrar trafik du redan betalar för. En 30% ökning i konvertering ger 30% mer intäkt utan extra trafikkostnader. Varje procentenhet går direkt till resultatet.',
      ],
      lead: 'Professionell CRO ger tre stora fördelar:',
      benefits: [
        'Datadriven prioritering: istället för slumpmässiga tester hittar vi systematiskt dina största konverteringsläckor. Fokus på flaskhalsar med hög effekt, inte små tweaks.',
        'Full‑funnel‑optimering: kundresan slutar inte i checkout. Vi optimerar hela funneln: awareness → consideration → purchase → retention → advocacy. Högre LTV betyder högre acceptabel CAC.',
        'Statistisk rigor: DIY‑tester ger ofta falska positiva resultat p.g.a. små urval och för tidiga slutsatser. Vi kör statistiskt signifikanta tester med korrekt metodik.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Varför',
        highlight: 'Niblah',
        suffix: 'för CRO?',
      },
      subtitle:
        'Vi ser inte CRO som ett isolerat verktyg, utan som en strategisk tillväxtspak i hela ditt marketing‑ekosystem.',
      cards: [
        {
          title: 'Business‑first, inte test‑first',
          description:
            'Andra byråer fokuserar på testhastighet. Vi fokuserar på affärseffekt. Hellre 3 tester som ger 15% intäktslyft än 20 tester med 0,5%. Vi prioriterar förväntat värde, inte aktivitetsmått.',
        },
        {
          title: 'Full‑funnel V6‑optimering',
          description:
            'Vi optimerar sex tillväxtdrivare: trafikkvalitet, konvertering, AOV, retention, referrals och LTV. Små förbättringar i alla sex ger exponentiell tillväxt.',
        },
        {
          title: 'Integrerad marketing‑expertis',
          description:
            'CRO fungerar inte i isolation. Våra CRO‑specialister jobbar tätt med SEO, SEA och content. Om konvertering ökar men trafikkvalitet faller kan nettoeffekten bli negativ. Vi optimerar hela systemet.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Outsourca CRO till Niblah:',
        highlight: 'nu vs sen',
        suffix: '',
      },
      nowTitle: 'Nu',
      laterTitle: 'Sen',
      nowItems: [
        'Du betalar för trafik men konverteringen ligger under benchmark. Varje avhopp är bortkastad budget.',
        'Du vet att sajten kan konvertera bättre men vet inte var du ska börja. Vilken sida ger mest effekt först?',
        'Du ser avhopp i checkout men orsaken är oklar. Vilken friktion stoppar köp?',
        'Du vill investera i CRO men saknar tid/kompetens för testdesign, statistisk analys och implementation.',
        'Du vill ha en partner som kopplar CRO till affärs‑KPI:er, inte vanity metrics.',
      ],
      laterItems: [
        'Varje kvartal vet du exakt vilka delar av funneln som ska optimeras för maximal intäktseffekt.',
        'Sajten förbättras systematiskt i det som betyder mest för din affär, inte slumpmässigt.',
        'CRO‑tester är alltid kopplade till konkreta affärsmål med prognostiserad ROI och tydliga success metrics.',
        'Du får mer intäkt från samma trafik med smarta optimeringar. Högre konvertering + högre AOV = exponentiell tillväxt.',
        'Du får grepp om varför besökare konverterar eller inte: data‑backed insikter om psykologi och friktionspunkter.',
      ],
    },
    expertise: {
      title: {
        prefix: 'Vår',
        highlight: 'CRO‑expertis',
        suffix: '',
      },
      subtitle:
        'Vi kombinerar kvantitativ data, kvalitativ research och rigorösa tester för pålitlig optimering.',
      items: [
        {
          title: 'Data analytics & funnel mapping',
          paragraphs: [
            'Vi startar med en djup analytics‑audit: GA4 event tracking, enhanced ecommerce och funnel analysis. Vi hittar exakt var användare faller av och kvantifierar intäktseffekt per flaskhals.',
            'Heatmaps (Hotjar/Microsoft Clarity) och session recordings avslöjar UX‑problem som inte syns i aggregerad data. Med cohort analysis får vi helhetsbilden.',
          ],
        },
        {
          title: 'Kvalitativ användarresearch',
          paragraphs: [
            'Data visar vad som händer, inte varför. Intervjuer, enkäter och usability tests avslöjar psykologin bakom besluten. Vilka farhågor stoppar köp? Vilken info saknas vid kritiska beslut?',
            'Vi kör exit‑intent‑enkäter, analyserar supportärenden för återkommande invändningar och gör competitor UX analysis för att hitta best practices.',
          ],
        },
        {
          title: 'Rigorösa A/B‑tester',
          paragraphs: [
            'Statistiskt signifikanta tester med korrekt metodik: sample size i förväg, testduration baserad på trafikmönster, segmentanalys för heterogena effekter.',
            'Verktyg: VWO, Convert eller server‑side frameworks. Vi mäter inte bara konvertering utan även sekundära KPI:er som AOV, återköp och kundnöjdhet.',
          ],
        },
      ],
    },
    approach: {
      title: {
        prefix: 'Vår',
        highlight: 'strategiska CRO‑metod',
        suffix: '',
      },
      subtitle:
        'Från bottleneck discovery till implementation av vinnande tester — vi optimerar din funnel systematiskt.',
      steps: [
        {
          number: '01',
          title: 'Bottleneck discovery & prioritering',
          paragraphs: [
            'Vi börjar med en omfattande konverteringsaudit: från first touch till repeat purchase. Var läcker intäkt? Vi identifierar de 3–5 största flaskhalsarna och kvantifierar effekten.',
            'Vi använder ICE‑ramverket (Impact × Confidence × Ease) för att prioritera. Fokus på quick wins med mätbar affärseffekt.',
          ],
        },
        {
          number: '02',
          title: 'Hypoteser & research',
          paragraphs: [
            'För varje flaskhals bygger vi evidence‑based hypoteser baserat på research, heatmaps, recordings, feedback och conversion psychology.',
            'Vi benchmarkar konkurrenter. Om din checkout har 5 steg medan konkurrenter konverterar bättre med 2 är förenkling ett starkt värdesignal.',
          ],
        },
        {
          number: '03',
          title: 'Testdesign & implementation',
          paragraphs: [
            'Statistisk rigor: definiera metrics, beräkna sample size (95% confidence), bestäm testduration. Undvik överlapp, korrekt randomisering och QA på devices/browsers.',
            'Implementation från copy changes till redesigns. Vi koordinerar med ditt tech‑team för en smidig rollout.',
          ],
        },
        {
          number: '04',
          title: 'Analys & insikter',
          paragraphs: [
            'När testet når signifikans gör vi deep‑dive: mobile vs desktop, nya vs återkommande, paid vs organic. Segment kan dölja viktiga insikter.',
            'Vi analyserar secondary effects. Högre konvertering men lägre AOV kan ge negativ nettoeffekt. Vi ser alltid till total intäktspåverkan.',
          ],
        },
        {
          number: '05',
          title: 'Rollout & kontinuerlig optimering',
          paragraphs: [
            'Vinnande varianter rullas ut till 100%. Vi följer upp för att säkerställa att lyftet håller. Lärdomar dokumenteras i en central knowledge base.',
            'CRO blir aldrig “klart”. Varje kvartal hittar vi nya flaskhalsar. Fokus kan flytta från checkout till produkt- eller landningssidor.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Konkreta',
        highlight: 'CRO‑resultat',
        suffix: '',
      },
      subtitle: 'Hur strategisk CRO förändrar intäkter',
      cases: [
        {
          badge: 'FW',
          name: 'FashionWorld',
          label: 'E‑commerce CRO | 8 månader',
          headline:
            'Checkout‑optimering + redesign av produktsidor fördubblade konverteringen',
          metrics: [
            { value: '112%', label: 'lyft i konvertering' },
            { value: '€47K', label: 'extra månadsintäkt' },
            { value: '23%', label: 'högre AOV' },
          ],
        },
        {
          badge: 'TL',
          name: 'TechLease B2B',
          label: 'Lead gen CRO | 6 månader',
          headline:
            'Formoptimering och lead‑kvalificering ökade SQL‑konvertering kraftigt',
          metrics: [
            { value: '87%', label: 'fler leads' },
            { value: '142%', label: 'högre SQL‑rate' },
            { value: '-38%', label: 'cost per SQL' },
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
      subtitle: 'Om våra CRO‑resultat',
      items: [
        {
          quote:
            '“Sedan Niblah tog över CRO har vår konvertering ökat med 45%. De förstår verkligen vad som fungerar och testar allt noggrant. Rekommenderas starkt!”',
          name: 'Sanne Janssen',
        },
        {
          quote:
            '“Äntligen en byrå som är genuint data‑driven. Varje test har tydlig affärslogik. Vi får mycket mer ut av samma trafikbudget!”',
          name: 'Laura Vermeulen',
        },
        {
          quote:
            '“Deras full‑funnel‑approach är briljant. De optimerar inte bara checkout utan hela kundresan. Även retention ökade tydligt!”',
          name: 'Mark de Boer',
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
          question: 'Vad är CRO?',
          answer:
            'CRO är processen att systematiskt öka andelen besökare som gör en önskad handling (köp, formulär, signup). Det görs via dataanalys, användarresearch och kontrollerade experiment (A/B‑tester) för att minska friktion och förbättra övertygelse.',
        },
        {
          question: 'Varför investera i CRO istället för mer trafik?',
          answer:
            'CRO är kostnadseffektivt: varje procentenhet mer konvertering ger mer intäkt utan extra trafikkostnader. 10K besökare/månad vid 2% = 200 konverteringar. 3% = 300 utan extra ad spend. Dessutom sänker det CAC.',
        },
        {
          question: 'Vad gör en CRO‑specialist?',
          answer:
            'Analyserar funneln, hittar flaskhalsar, gör kvalitativ och kvantitativ research, bygger hypoteser, kör A/B‑tester med statistisk rigor, analyserar resultat och implementerar vinnande varianter. En mix av data, psykologi och UX.',
        },
        {
          question: 'Hur snabbt ser jag resultat?',
          answer:
            'Quick wins kan synas inom 4–8 veckor. Större förbättringar tar ofta 3–6 månader eftersom flera iterationer krävs. Trafikvolym påverkar hastigheten.',
        },
        {
          question: 'Varför outsourca istället för ett in‑house team?',
          answer:
            'Ett in‑house CRO‑team kräver stora kostnader (CRO‑manager, designer, developer + verktyg). Ofta 150K€+ per år. Outsourcing ger direkt tillgång till ett komplett team med track record och extern perspektiv.',
        },
        {
          question: 'Vilka lyft kan jag förvänta mig?',
          answer:
            'Det beror på baseline. Utan CRO kan man se 50–100%+ första året. Redan optimerade sajter: 10–30%/år. En bra CRO‑process ger ofta 15–25% förbättring per år. Fokus bör vara på intäktspåverkan.',
        },
      ],
    },
  },
  da: {
    metadata: {
      title: 'Outsource CRO | Mere omsætning uden mere trafik | Niblah',
      description:
        'Outsource CRO til specialister med fokus på vækst. Datadrevet optimering der forbedrer konvertering, AOV og customer lifetime value.',
      keywords:
        'cro, konverteringsoptimering, outsource cro, conversion rate optimization, ecommerce cro',
      openGraph: {
        title: 'Outsource CRO | Niblah',
        description:
          'Systematisk CRO der forbedrer konvertering, AOV og customer lifetime value.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Mere omsætning uden mere annoncebudget',
      title: 'Outsource konverteringsoptimering (CRO)',
      description:
        'Du betaler for trafik, men for få besøgende konverterer? CRO er mere end A/B‑tests. Hos Niblah optimerer vi hele din funnel: fra første klik til gentagne køb. Vi fokuserer på bottlenecks med reel business impact — ikke små knapfarve‑tests.',
      ctaText: 'Book et gratis intro',
      ctaLink: '/contact',
      note: '* Med strategisk CRO fordobles konverteringsraten ofte inden for 6 måneder',
      image: '/development-hero.png',
      imageAlt: 'CRO dashboard der viser konverteringsforbedringer',
    },
    why: {
      title: {
        prefix: 'Hvorfor',
        highlight: 'outsource CRO',
        suffix: 'multiplicerer din ROI',
      },
      paragraphs: [
        'Du investerer tusindvis af kroner hver måned i trafik: Google Ads, social ads, SEO. Men hvis din konverteringsrate er 1,8% mens benchmarks er 3,5%? Så mister du 50%+ potentiel omsætning. Hver besøgende der forlader uden at konvertere, er spildt annoncebudget.',
        'CRO er en af de mest ROI‑positive marketingdiscipliner. Fordi du forbedrer trafik du allerede betaler for. Et 30% lift i konverteringsrate betyder 30% mere omsætning uden ekstra trafikomkostninger. Hver procentpoint går direkte på bundlinjen.',
      ],
      lead: 'Professionel CRO giver tre store fordele:',
      benefits: [
        'Datadrevet prioritering: i stedet for tilfældige A/B tests identificerer vi systematisk dine største conversion leaks. Fokus på high‑impact bottlenecks, ikke små tweaks.',
        'Full‑funnel optimering: kunderejsen stopper ikke ved checkout. Vi optimerer hele funnel: awareness → consideration → purchase → retention → advocacy. Højere LTV betyder højere acceptabel CAC.',
        'Statistisk rigor: DIY testing giver ofte falske positive resultater pga. små samples og forhastede konklusioner. Vi kører statistisk signifikante tests med korrekt metodik.',
      ],
    },
    whyNiblah: {
      title: {
        prefix: 'Hvorfor',
        highlight: 'Niblah',
        suffix: 'til CRO?',
      },
      subtitle:
        'Vi ser ikke CRO som et isoleret tool, men som en strategisk growth lever i dit marketing‑økosystem.',
      cards: [
        {
          title: 'Business‑first, ikke test‑first',
          description:
            'Andre bureauer fokuserer på test velocity. Vi fokuserer på business impact. Hellere 3 tests med 15% revenue lift end 20 tests med 0,5%. Vi prioriterer expected value, ikke aktivitetsmetrics.',
        },
        {
          title: 'Full‑funnel V6 optimization',
          description:
            'Vi optimerer seks drivers: trafikkvalitet, konverteringsrate, AOV, retention, referrals og LTV. Små forbedringer på alle seks giver eksponentiel vækst.',
        },
        {
          title: 'Integreret marketing‑expertise',
          description:
            'CRO virker ikke i isolation. Vores CRO specialister arbejder tæt med SEO, SEA og content. Stiger konvertering men falder trafikkvalitet, kan nettoeffekten være negativ. Vi optimerer hele systemet.',
        },
      ],
    },
    nowVsLater: {
      title: {
        prefix: 'Outsource CRO til Niblah:',
        highlight: 'nu vs senere',
        suffix: '',
      },
      nowTitle: 'Nu',
      laterTitle: 'Senere',
      nowItems: [
        'Du betaler for trafik men konvertering ligger under benchmarks. Hvert frafald er spildt budget.',
        'Du ved at websitet kan konvertere bedre, men ved ikke hvor du skal starte. Hvilken side giver størst impact først?',
        'Analytics viser frafald i checkout, men årsagen er uklar. Hvilket friction point skaber abandonment?',
        'Du vil investere i CRO men mangler tid/kompetencer til test design, statistisk analyse og implementering.',
        'Du søger en partner der kobler CRO til business KPI’er, ikke vanity metrics.',
      ],
      laterItems: [
        'Hvert kvartal ved du præcis hvilke funnel‑stages der skal optimeres for maksimal omsætningseffekt.',
        'Dit website bliver systematisk bedre på de områder der betyder noget for din forretning.',
        'CRO tests er altid koblet til konkrete mål med forecasted ROI og klare success metrics.',
        'Du får mere omsætning ud af samme trafik med smarte optimeringer. Higher conversions + higher AOV = eksponentiel vækst.',
        'Du forstår endelig hvorfor besøgende konverterer eller ikke: data‑backed indsigt i psykologi og friction points.',
      ],
    },
    expertise: {
      title: {
        prefix: 'Vores',
        highlight: 'CRO‑expertise',
        suffix: '',
      },
      subtitle:
        'Vi kombinerer kvantitativ data, kvalitativ research og rigorøs testing for pålidelig optimering.',
      items: [
        {
          title: 'Data analytics & funnel mapping',
          paragraphs: [
            'Vi starter med et dybdegående analytics audit: GA4 event tracking, enhanced ecommerce og funnel analysis. Vi finder hvor users drop off og kvantificerer revenue impact per bottleneck.',
            'Heatmaps (Hotjar/Microsoft Clarity) og session recordings afslører usability issues. Med cohort analysis får vi det fulde billede.',
          ],
        },
        {
          title: 'Kvalitativ brugerresearch',
          paragraphs: [
            'Data viser hvad der sker, men ikke hvorfor. Interviews, surveys og usability tests afslører psykologien bag konverteringsbeslutninger.',
            'Vi bruger exit‑intent surveys, analyserer support tickets og laver competitor UX analysis for at identificere best practices.',
          ],
        },
        {
          title: 'Rigorøse A/B tests',
          paragraphs: [
            'Statistisk signifikante tests med korrekt metodik: sample sizes upfront, test duration efter trafikmønstre og segment analysis.',
            'Tools: VWO, Convert eller server‑side frameworks. Vi måler både conversion og secondary metrics som AOV, genkøb og kundetilfredshed.',
          ],
        },
      ],
    },
    approach: {
      title: {
        prefix: 'Vores',
        highlight: 'strategiske CRO‑tilgang',
        suffix: '',
      },
      subtitle:
        'Fra bottleneck discovery til implementering af winning tests — vi optimerer funnel systematisk.',
      steps: [
        {
          number: '01',
          title: 'Bottleneck discovery & prioritering',
          paragraphs: [
            'Vi starter med et omfattende conversion audit: fra first touch til repeat purchase. Hvor lækker revenue? Vi identificerer 3–5 største bottlenecks og kvantificerer effekten.',
            'Vi bruger ICE‑framework (Impact × Confidence × Ease) til prioritering. Fokus på quick wins med målbar impact.',
          ],
        },
        {
          number: '02',
          title: 'Hypothesis development & research',
          paragraphs: [
            'Vi udvikler evidence‑based hypoteser baseret på research, heatmaps, recordings, feedback og conversion psychology.',
            'Vi benchmarker også konkurrenter. Har du 5 checkout steps mens konkurrenter konverterer bedre med 2, er simplification et stærkt signal.',
          ],
        },
        {
          number: '03',
          title: 'Test design & implementering',
          paragraphs: [
            'Statistisk rigor: metrics, sample size, test duration. Ingen overlap, korrekt randomisering og QA på devices/browsers.',
            'Implementering fra copy changes til redesigns. Vi koordinerer med dit team for smooth rollout.',
          ],
        },
        {
          number: '04',
          title: 'Data analysis & insight extraction',
          paragraphs: [
            'Deep‑dive ved signifikans: mobile vs desktop, new vs returning, paid vs organic. Segmenter afslører ofte vigtige nuancer.',
            'Vi analyserer secondary effects. Højere conversion men lavere AOV kan give negativ nettoeffekt. Fokus på total revenue impact.',
          ],
        },
        {
          number: '05',
          title: 'Rollout & continuous optimization',
          paragraphs: [
            'Winning variants rulles ud til 100%. Vi monitorerer for at sikre at lift holder. Learnings dokumenteres centralt.',
            'CRO bliver aldrig “færdigt”. Hvert kvartal finder vi nye bottlenecks og justerer fokus.',
          ],
        },
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Konkrete',
        highlight: 'CRO resultater',
        suffix: '',
      },
      subtitle: 'Hvordan strategisk CRO transformer omsætning',
      cases: [
        {
          badge: 'FW',
          name: 'FashionWorld',
          label: 'E‑commerce CRO | 8 måneder',
          headline:
            'Checkout‑optimering + product page redesign fordoblede konvertering',
          metrics: [
            { value: '112%', label: 'lift i conversion rate' },
            { value: '€47K', label: 'ekstra månedlig omsætning' },
            { value: '23%', label: 'højere AOV' },
          ],
        },
        {
          badge: 'TL',
          name: 'TechLease B2B',
          label: 'Lead gen CRO | 6 måneder',
          headline:
            'Formoptimering og lead qualification øgede SQL‑conversion markant',
          metrics: [
            { value: '87%', label: 'flere leads' },
            { value: '142%', label: 'højere SQL rate' },
            { value: '-38%', label: 'cost per SQL' },
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
      subtitle: 'Om vores CRO resultater',
      items: [
        {
          quote:
            '“Siden Niblah tog CRO, er vores konvertering steget med 45%. De forstår virkelig hvad der virker og tester alt grundigt. Kan klart anbefales!”',
          name: 'Sanne Janssen',
        },
        {
          quote:
            '“Endelig et bureau der arbejder data‑drevet. Hver test har klar business rationale. Vi får meget mere ud af samme trafikbudget!”',
          name: 'Laura Vermeulen',
        },
        {
          quote:
            '“Deres full‑funnel tilgang er genial. De optimerer ikke kun checkout men hele customer journey. Retention steg også markant!”',
          name: 'Mark de Boer',
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
          question: 'Hvad er CRO?',
          answer:
            'CRO er den systematiske proces med at øge andelen af besøgende der udfører en ønsket handling (køb, lead‑form, signup). Det gøres via dataanalyse, brugerresearch og kontrollerede eksperimenter (A/B tests) for at reducere friktion og forbedre persuasion.',
        },
        {
          question: 'Hvorfor investere i CRO i stedet for mere trafik?',
          answer:
            'CRO er cost‑efficient: hver procentpoint i conversion giver mere omsætning uden ekstra trafik‑omkostninger. 10K besøgende/måned ved 2% = 200 conversions. 3% = 300 uden ekstra ad spend. Derudover sænker det CAC.',
        },
        {
          question: 'Hvad laver en CRO specialist?',
          answer:
            'Analyserer funnel, identificerer bottlenecks, laver kvalitativ og kvantitativ research, udvikler hypoteser, kører A/B tests med statistisk rigor, analyserer resultater og implementerer winning variations.',
        },
        {
          question: 'Hvornår ser jeg resultater?',
          answer:
            'Quick wins kan ses på 4–8 uger, men større forbedringer tager ofte 3–6 måneder pga. iterationer og behov for signifikans. Mere trafik = hurtigere learnings.',
        },
        {
          question: 'Hvorfor outsource i stedet for et in‑house team?',
          answer:
            'Et in‑house CRO setup kræver store investeringer i team og tools. Outsourcing giver hurtig adgang til et komplet team med track record og ekstern perspektiv uden hiring risk og overhead.',
        },
        {
          question: 'Hvilke lifts kan jeg forvente?',
          answer:
            'Det varierer efter baseline. Uden CRO kan man se 50–100%+ første år. Allerede optimerede sites: 10–30% årligt. Et godt CRO program leverer typisk 15–25% årlig forbedring. Fokus bør være revenue impact.',
        },
      ],
    },
  },
}

export function getCROPageCopy(locale) {
  return getLocaleCopy(copy, locale)
}

