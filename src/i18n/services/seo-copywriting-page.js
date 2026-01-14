import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'Outsource Copywriting | Professional SEO Texts | Niblah',
      description:
        'Outsource copywriting to experienced specialists. Increase conversions with SEO optimized web copy that convinces and sells. More visitors and revenue.',
      keywords: 'outsource copywriting, seo copywriting, conversion copy, web copywriter',
      openGraph: {
        title: 'Outsource Copywriting | Niblah',
        description:
          'Professional copywriting that boosts rankings and conversions.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Professional copy that convinces and sells',
      title: 'Outsource copywriting',
      description:
        'Want to rank higher in Google and turn visitors into conversions? That only happens with professional copy. Outsource your copywriting and gain more visitors, higher conversions, and measurable revenue growth.',
      ctaText: 'Schedule a free intro',
      ctaLink: '/contact',
      note: '* 90% of companies leave growth opportunities on the table with their copy',
      image: '/development-hero.png',
      imageAlt: 'Professional copywriting services dashboard',
    },
    process: {
      title: 'The <highlight>copywriter</highlight> process',
      subtitle:
        'How do we write copy? A copywriter writes to sell. But the writing is only the output. This is how our copywriters work:',
      steps: [
        {
          number: '01',
          title: 'Introduction and strategic briefing',
          description:
            'We start with a deep intake to clarify project goals. Whether you need copy for a single project or monthly content, we translate your ambitions into a content strategy that drives growth.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Brand and audience analysis',
          description:
            'We define the writing style, ideal customers, and buying triggers. We analyze your market and audience to create copy that resonates. No clear tone of voice yet? We help you build one.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Concept and first draft',
          description:
            'Now the real writing starts. We research the topic and craft persuasive copy optimized for SEO and conversion. You receive a professional first draft for review.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Revision based on your input',
          description:
            'Your feedback matters. We refine the copy based on your input and make sure it matches your expectations and goals.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publication and ongoing collaboration',
          description:
            'After approval, the copy goes live. For ongoing projects, we set up a workflow that delivers new content each month so your site keeps growing.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Why',
        highlight: 'outsourcing copywriting',
        suffix: 'is smart for your business',
      },
      paragraphs: [
        'How many hours do you spend writing texts that deliver little? Writing text is one thing, but copy that converts is a true specialty. As an entrepreneur you want results: more visitors, higher conversions, and tangible revenue growth.',
        'Professional copywriting combines marketing strategy, consumer psychology, and SEO. A good copywriter understands your audience, identifies pain points, and writes copy that persuades at the right moment. Strategic keywords make you visible in Google.',
      ],
      lead: 'Companies that outsource copywriting to professionals see concrete benefits:',
      bullets: [
        'Copy that converts: experienced copywriters know the psychological triggers that drive action',
        'Content that resonates with your audience: deep research creates copy that matches real needs and questions',
        'Focus on core activities while professionals handle your content',
      ],
    },
    niblah: {
      title: {
        prefix: 'Why',
        highlight: 'outsourcing copywriting',
        suffix: 'to Niblah?',
      },
      subtitle:
        'At Niblah you get more than pretty words. Our copywriters think strategically and focus on real results.',
      cards: [
        {
          title: 'Result driven approach',
          description:
            'Everything we do is about measurable outcomes. Our copywriters write with one goal: achieve your conversion goals. Every word is written to move visitors to action and drive revenue.',
        },
        {
          title: 'Audience expertise',
          description:
            'We start with deep audience research. What motivates your ideal customer? Which objections exist? That insight turns into copy that resonates, builds trust, and generates leads.',
        },
        {
          title: 'Integrated marketing approach',
          description:
            'Our copywriters do not work in a silo. They collaborate with SEO, SEA, and CRO specialists to deliver copy optimized for both search and conversion.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'What is',
        highlight: 'copywriting',
        suffix: 'exactly?',
      },
      paragraphs: [
        'Copywriting is the craft of creating persuasive commercial text with one goal: conversion. The difference with standard content? A copywriter writes strategically, based on marketing principles and buyer psychology.',
        'Effective copy requires deep understanding of your ideal customer: what problems they have, which solution they seek, and what objections must be removed. That combination creates more visitors, higher conversions, and revenue growth.',
        'Our copywriting specialists cover many disciplines: SEO optimized content for better rankings, persuasive landing pages, email campaigns, job ads, and whitepapers. Each text has one goal: achieve your business objectives.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'These clients',
        highlight: 'went before you',
        suffix: '',
      },
      subtitle: 'Real results from companies outsourcing copywriting',
      items: [
        {
          initials: 'VN',
          company: 'VitaNova Health',
          label: 'Copywriting | SEO',
          description: 'Full website copy rewritten with conversion focus',
          stats: [
            { value: '215%', label: 'more organic traffic' },
            { value: '3.8x', label: 'higher conversion rate' },
            { value: '142%', label: 'more inquiries' },
          ],
        },
        {
          initials: 'BT',
          company: 'BeautyTrend',
          label: 'Copywriting | Content | Social',
          description: 'Monthly content production for blog and social media',
          stats: [
            { value: '87%', label: 'higher engagement' },
            { value: '4.2x', label: 'more lead generation' },
            { value: '168%', label: 'ROI on content' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Outsource copywriting:',
        highlight: 'this is what you gain',
        suffix: '',
      },
      intro:
        'Why do successful companies invest in professional copywriting? Simple: copy that converts directly impacts the bottom line. These are the concrete benefits our clients experience:',
      items: [
        {
          title: 'Measurable conversion impact.',
          description:
            'Professional copywriters combine psychological triggers with SEO expertise, resulting in copy that ranks higher and convinces visitors to act.',
        },
        {
          title: 'Strategic audience targeting.',
          description:
            'Deep research into needs and buying behavior creates copy that resonates with ideal customers, increasing engagement and stronger relationships.',
        },
        {
          title: 'More capacity for growth.',
          description:
            'By outsourcing copy you focus on core activities where your expertise adds the most value, while content professionals handle persuasive text.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'This is what',
        highlight: 'our clients say',
        suffix: '',
      },
      subtitle: 'The value of the relationship matters more than the transaction.',
      items: [
        {
          quote:
            'The texts Niblah writes finally convert. Their copywriter understands exactly what our audience wants to hear. Result: more inquiries and higher revenue!',
          name: 'Sophie Janssen',
        },
        {
          quote:
            'Outsourcing copywriting was the best decision for our business. The professional web copy improved rankings and conversions. Great collaboration!',
          name: 'Marco van der Berg',
        },
        {
          quote:
            'Finally copy that does not just sound good, but sells. The copywriter from Niblah transformed our entire website. Highly recommended!',
          name: 'Lisa Vermeulen',
        },
      ],
      ratingLabel: 'We score 4.9 on Google from 143 reviews',
    },
    contentTypes: {
      title: {
        prefix: 'What a copywriter does at Niblah:',
        highlight: 'the texts we write for you',
        suffix: '',
      },
      subtitle:
        'From SEO texts to job ads: our copywriters deliver all text types you need for online success.',
      items: [
        {
          title: 'SEO texts',
          description:
            'SEO optimized content is essential for organic growth. Whether you need blogs, product descriptions, or landing pages, we create text that appeals to Google and your audience. Strategic keyword research plus persuasive copy creates texts that rank and convert.',
        },
        {
          title: 'Persuasive web copy',
          description:
            'Traffic is step one, conversion is the goal. We write web copy that drives action: homepage copy, about pages, and service pages built for trust and conversion. The result is higher engagement and more revenue.',
        },
        {
          title: 'Job postings',
          description:
            'Attracting top talent starts with strong job ads. We write vacancies that inform and inspire, strengthen your employer brand, and attract qualified applicants.',
        },
        {
          title: 'Email copy',
          description:
            'Email remains one of the most effective conversion channels. We write emails that get opened, clicked, and convert. From automated flows to newsletters and launches, every email is optimized for impact.',
        },
        {
          title: 'Whitepapers',
          description:
            'Quality leads require valuable content. Whitepapers show expertise and collect contact details. We develop research backed documents that position you as a thought leader and convert readers into qualified leads.',
        },
        {
          title: 'Ad copy (SEA and social ads)',
          description:
            'Paid campaigns need copy that converts. We write ad copy for Google Ads, Facebook, Instagram, and LinkedIn that drives clicks and conversions. We refine continuously for maximum ROI.',
        },
      ],
    },
    seoWriting: {
      title: {
        prefix: 'How are good',
        highlight: 'SEO texts written?',
        suffix: '',
      },
      intro:
        'SEO content requires a unique approach where technical optimization and persuasive copy meet. Tone of voice and audience insight stay crucial, while strategic keyword integration plays a central role. Our process for SEO optimized texts:',
      steps: [
        {
          number: '1',
          text: 'Content strategy analysis: our SEO specialist identifies which content strengthens your organic positions, aligned with your SEO roadmap.',
        },
        {
          number: '2',
          text: 'Deep keyword research: we find terms with strong volume, realistic competition, and high intent for your niche.',
        },
        {
          number: '3',
          text: 'Strategic copywriting: keywords are integrated naturally into persuasive copy optimized for algorithms and readability.',
        },
        {
          number: '4',
          text: 'Review and refinement: your feedback ensures the copy matches brand identity and business objectives.',
        },
        {
          number: '5',
          text: 'Publication and tracking: after approval the content goes live and we monitor performance for continuous optimization.',
        },
      ],
      cta: {
        label: 'Request a growth scan',
        link: '/contact',
      },
    },
    faq: {
      title: {
        prefix: 'Frequently asked',
        highlight: 'questions',
        suffix: '',
      },
      items: [
        {
          question: 'Are you a copywriting agency?',
          answer:
            'We are a full service marketing agency with copywriting as a core specialty. Our team includes copywriters, SEO experts, ad specialists, and CRO consultants. That mix lets us build content strategies where every element supports business impact.',
        },
        {
          question: 'What are your copywriter rates?',
          answer:
            'Rates depend on scope, complexity, and collaboration length. One off projects differ from ongoing retainers. In a free intro we analyze your needs and provide a transparent proposal.',
        },
        {
          question: 'What does outsourcing copywriting deliver?',
          answer:
            'Professional copy creates direct business results: better organic visibility, more qualified traffic, higher conversion rates, and revenue growth. It also frees up time to invest in strategic development.',
        },
        {
          question: 'Why should I outsource copywriting?',
          answer:
            'Great copywriters understand psychology, persuasion techniques, and how to structure messaging for different audiences. They also know technical SEO and algorithm requirements. Building this expertise takes years. Outsourcing gives instant access.',
        },
        {
          question: 'Why outsource copywriting to Niblah?',
          answer:
            'Your copywriter works closely with SEO strategists, ad experts, and data analysts. That integrated approach delivers content that is part of a holistic marketing strategy, not isolated text. The result is stronger business outcomes.',
        },
        {
          question: 'Can I just use ChatGPT to write my copy?',
          answer:
            'AI tools can help with drafts, but they miss strategic business insight, nuanced audience psychology, and authentic brand voice. Our copywriters use AI where useful, but add strategic thinking, creative differentiation, and conversion focused structure.',
        },
      ],
    },
  },
  nl: {
    metadata: {
      title: 'Copywriting Uitbesteden | Professionele SEO teksten | Niblah',
      description:
        'Copywriting uitbesteden aan ervaren specialisten. Verhoog je conversie met SEO geoptimaliseerde webteksten die overtuigen en verkopen. Meer websitebezoekers en omzet.',
      keywords: 'copywriting uitbesteden, seo copywriting, webteksten, conversie copy',
      openGraph: {
        title: 'Copywriting Uitbesteden | Niblah',
        description: 'Professionele copy die rankings en conversies verhoogt.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Professionele copy die overtuigt en verkoopt',
      title: 'Copywriting uitbesteden',
      description:
        'Wil jij hoger ranken in Google en bezoekers verleiden tot conversie? Dat lukt alleen met professionele copy. Besteed je copywriting uit en profiteer van meer websitebezoekers, hogere conversies en meetbare omzetgroei.',
      ctaText: 'Plan gratis kennismaking',
      ctaLink: '/contact',
      note: '* 90% van bedrijven laat groeikansen liggen met hun teksten',
      image: '/development-hero.png',
      imageAlt: 'Professional copywriting services dashboard',
    },
    process: {
      title: 'De werkwijze van een <highlight>copywriter</highlight>',
      subtitle:
        'Hoe schrijven wij teksten? Een copywriter schrijft met als doel iets te verkopen. Maar dat schrijfwerk is slechts de output. Zo gaan onze copywriters te werk:',
      steps: [
        {
          number: '01',
          title: 'Kennismaking en strategische briefing',
          description:
            'We starten met een grondige intake om jouw projectdoelen helder te krijgen. Of je nu copywriting uitbesteden wilt voor een specifiek project of structureel elke maand teksten laat schrijven door een copywriter - we luisteren naar je ambities en vertalen deze naar een concrete contentstrategie die conversie en groei stimuleert.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Analyse van merkidentiteit en doelgroep',
          description:
            'Onze copywriter duikt diep in jouw merkwereld: welke schrijfstijl past bij je merk, wie zijn je ideale klanten en wat drijft hen? We analyseren je branche, concurrentie en doelgroep om teksten te creeren die precies resoneren. Nog geen duidelijke tone of voice? We helpen je deze te ontwikkelen op basis van jouw unieke waarden.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Conceptfase en eerste draft',
          description:
            'Nu begint het echte schrijfwerk. Onze copywriter verdiept zich in je onderwerp, bestudeert je doelgroep en craft wervende teksten die conversie stimuleren. Elke zin is geschreven met focus op zowel SEO optimalisatie als overtuigingskracht. Je ontvangt een professionele eerste versie ter beoordeling.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Revisie op basis van jouw input',
          description:
            'Jouw feedback is waardevol. We verwerken al je opmerkingen en wensen in een tweede ronde, waarbij de copywriter de teksten verfijnt en optimaliseert. Zo garanderen we dat het eindresultaat perfect aansluit bij jouw verwachtingen en doelstellingen.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publicatie en doorlopende samenwerking',
          description:
            'Bij goedkeuring kunnen de teksten live. Voor structurele copywritingprojecten bouwen we een efficiente workflow op, waarbij we vanaf stap 3 maandelijks nieuwe content leveren. Zo groeit je website consistent met hoogwaardige teksten die ranken en converteren.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Waarom',
        highlight: 'copywriting uitbesteden',
        suffix: 'slim is voor jouw bedrijf',
      },
      paragraphs: [
        'Hoeveel uren besteed jij aan het schrijven van teksten die uiteindelijk weinig opleveren? Teksten schrijven is een ding, maar copy creeren die daadwerkelijk conversie genereert is een specialisme. Als ondernemer wil je resultaat: meer websitebezoekers, hogere conversies en tastbare omzetgroei.',
        'Professionele copywriting combineert marketingstrategie, consumentenpsychologie en SEO expertise. Een goede copywriter analyseert je doelgroep grondig, identificeert hun pijnpunten en schrijft teksten die overtuigen op het juiste moment. Daarnaast zorgt strategische inzet van zoekwoorden ervoor dat je vindbaar bent in Google.',
      ],
      lead: 'Bedrijven die hun copywriting uitbesteden aan professionals zien concrete voordelen:',
      bullets: [
        'Teksten die converteren: ervaren copywriters kennen de psychologische triggers die websitebezoekers tot actie aanzetten',
        'Content die resoneert met je doelgroep: door diepgaand onderzoek ontstaan teksten die echt aansluiten bij behoeftes en vragen',
        'Focus op je kernactiviteiten terwijl professionals jouw content verzorgen',
      ],
    },
    niblah: {
      title: {
        prefix: 'Waarom',
        highlight: 'copywriting uitbesteden',
        suffix: 'aan Niblah?',
      },
      subtitle:
        'Bij Niblah krijg je meer dan alleen mooie teksten. Onze copywriters denken strategisch mee en focussen op wat echt telt: resultaat.',
      cards: [
        {
          title: 'Resultaatgerichte aanpak',
          description:
            'Bij ons draait alles om meetbare resultaten. Onze copywriters schrijven met een doel voor ogen: jouw conversiedoelstellingen behalen. Elk woord is geschreven om websitebezoekers tot actie te bewegen en omzet te genereren.',
        },
        {
          title: 'Doelgroep expertise',
          description:
            'We starten elk project met grondig doelgroeponderzoek. Wat beweegt jouw ideale klant? Welke vragen hebben ze? Door deze inzichten te vertalen naar overtuigende copy ontstaan teksten die resoneren en vertrouwen opbouwen.',
        },
        {
          title: 'Geintegreerde marketingaanpak',
          description:
            'Onze copywriters werken niet geisoleerd. Ze maken deel uit van een multidisciplinair team met SEO, SEA en CRO expertise. Zo ontstaan teksten die geoptimaliseerd zijn voor zoekmachines en conversie.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Wat is',
        highlight: 'copywriting',
        suffix: 'precies?',
      },
      paragraphs: [
        'Copywriting is het vakgebied dat zich richt op het creeren van overtuigende, commerciele teksten met als ultiem doel conversie te genereren. Het verschil met standaard contentcreatie? Een copywriter schrijft strategisch, met inzicht in marketingprincipes en consumentengedrag.',
        'Effectieve copy vereist diepgaand begrip van je ideale klant: wat zijn hun uitdagingen, welke oplossing zoeken ze en welke bezwaren moeten worden overwonnen? Door deze kennis te combineren met overtuigingstechnieken ontstaan teksten die leiden tot meer bezoekers, hogere conversies en omzetgroei.',
        'Onze copywriting specialisten beheersen diverse disciplines: van SEO geoptimaliseerde content die zorgt voor betere organische rankings, tot wervende landingspaginas, e mailcampagnes, vacatureteksten en whitepapers. Elke tekstsoort heeft een doel: jouw bedrijfsdoelstellingen realiseren.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Deze klanten',
        highlight: 'gingen je voor',
        suffix: '',
      },
      subtitle: 'Echte resultaten van bedrijven die hun copywriting uitbesteden',
      items: [
        {
          initials: 'VN',
          company: 'VitaNova Health',
          label: 'Copywriting | SEO',
          description: 'Complete website content herschreven met focus op conversie',
          stats: [
            { value: '215%', label: 'meer organisch verkeer' },
            { value: '3.8x', label: 'hogere conversieratio' },
            { value: '142%', label: 'meer aanvragen' },
          ],
        },
        {
          initials: 'BT',
          company: 'BeautyTrend',
          label: 'Copywriting | Content | Social',
          description: 'Maandelijkse content productie voor blog en social media',
          stats: [
            { value: '87%', label: 'hogere engagement' },
            { value: '4.2x', label: 'meer leadgeneratie' },
            { value: '168%', label: 'ROI op content' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Copywriting uitbesteden:',
        highlight: 'dit is wat het je oplevert',
        suffix: '',
      },
      intro:
        'Waarom investeren succesvolle bedrijven in professionele copywriting? Simpel: omdat teksten die converteren een directe impact hebben op je bottom line. Dit zijn de concrete voordelen die onze klanten ervaren:',
      items: [
        {
          title: 'Meetbare conversie impact.',
          description:
            'Professionele copywriters combineren psychologische triggers met SEO expertise, resulterend in teksten die hoger ranken en bezoekers overtuigen tot actie.',
        },
        {
          title: 'Strategische doelgroep targeting.',
          description:
            'Door diepgaand onderzoek naar behoeften, pijnpunten en koopgedrag ontstaat copy die precies resoneert met je ideale klant en leidt tot hogere betrokkenheid.',
        },
        {
          title: 'Vrijgemaakte capaciteit voor groei.',
          description:
            'Door copywriting uit te besteden focus jij op strategische zaken terwijl content professionals zorgen voor overtuigende teksten.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Dit is wat',
        highlight: 'onze klanten zeggen',
        suffix: '',
      },
      subtitle: 'De waarde van de relatie zegt ons zo veel meer dan de waarde van de transactie.',
      items: [
        {
          quote:
            'De teksten die Niblah voor ons schrijft zorgen eindelijk voor conversie. Hun copywriter begrijpt precies wat onze doelgroep wil horen. Resultaat: meer aanvragen en hogere omzet.',
          name: 'Sophie Janssen',
        },
        {
          quote:
            'Copywriting uitbesteden was de beste beslissing voor ons bedrijf. De professionele webteksten zorgen voor betere rankings en hogere conversies. Top samenwerking.',
          name: 'Marco van der Berg',
        },
        {
          quote:
            'Eindelijk teksten die niet alleen mooi klinken, maar ook echt verkopen. De copywriter van Niblah heeft onze hele website getransformeerd. Aanrader.',
          name: 'Lisa Vermeulen',
        },
      ],
      ratingLabel: 'Wij krijgen een 4.9 op Google uit 143 beoordelingen',
    },
    contentTypes: {
      title: {
        prefix: 'Wat doet een copywriter bij Niblah:',
        highlight: 'de teksten die je laat schrijven',
        suffix: '',
      },
      subtitle:
        'Van SEO teksten tot vacatureteksten: onze copywriters leveren alle soorten teksten die je nodig hebt voor online succes.',
      items: [
        {
          title: 'SEO teksten',
          description:
            'SEO geoptimaliseerde content is essentieel voor organische groei. Of je nu blogartikelen, productbeschrijvingen of landingspaginas nodig hebt, onze copywriters creeren teksten die zowel Google als je doelgroep aanspreken. Strategisch zoekwoordonderzoek gecombineerd met overtuigende copy zorgt voor hogere rankings en conversies.',
        },
        {
          title: 'Wervende webteksten',
          description:
            'Traffic genereren is stap een, conversie realiseren is waar het om draait. Onze copywriters creeren webteksten die bezoekers verleiden tot actie. Van homepage copy tot servicepaginas, elke tekst is geschreven met conversie als prioriteit.',
        },
        {
          title: 'Vacatureteksten',
          description:
            'Top talent aantrekken begint bij overtuigende vacatureteksten. We schrijven vacatures die informeren en inspireren, je employer brand versterken en gekwalificeerde kandidaten aantrekken.',
        },
        {
          title: 'E mailteksten',
          description:
            'E mailmarketing blijft een van de meest effectieve kanalen voor conversie. We schrijven e mails die openen, klikken en converteren. Van flows tot nieuwsbrieven, elke mail is geoptimaliseerd voor impact.',
        },
        {
          title: 'Whitepapers',
          description:
            'Kwalitatieve leads genereren vereist waardevol content. Whitepapers tonen expertise en verzamelen contactgegevens. We ontwikkelen research backed documenten die prospects overtuigen en converteren naar gekwalificeerde leads.',
        },
        {
          title: 'Advertentieteksten (SEA en social ads)',
          description:
            'Betaalde campagnes verdienen copy die converteert. We schrijven advertentieteksten voor Google Ads, Facebook, Instagram en LinkedIn die klikken en conversies opleveren. We verfijnen continu voor maximale ROI.',
        },
      ],
    },
    seoWriting: {
      title: {
        prefix: 'Hoe worden goede',
        highlight: 'SEO teksten geschreven?',
        suffix: '',
      },
      intro:
        'SEO content vereist een unieke aanpak waarbij technische optimalisatie en overtuigende copy samenkomen. Waar tone of voice en doelgroepkennis fundamenteel blijven, speelt strategische zoekwoordintegratie een cruciale rol. Ons proces voor SEO geoptimaliseerde teksten:',
      steps: [
        {
          number: '1',
          text: 'Content strategieanalyse: onze SEO specialist identificeert welke content jouw organische posities versterkt, afgestemd op je SEO roadmap.',
        },
        {
          number: '2',
          text: 'Diepgaand keyword research: we ontdekken zoektermen met optimaal zoekvolume, haalbare concurrentie en sterke intentie.',
        },
        {
          number: '3',
          text: 'Strategisch copywriting: zoekwoorden worden natuurlijk verwerkt in overtuigende teksten, geoptimaliseerd voor algoritmes en leesbaarheid.',
        },
        {
          number: '4',
          text: 'Review en refinement: jouw feedback wordt verwerkt om de content perfect af te stemmen op merkidentiteit en business doelen.',
        },
        {
          number: '5',
          text: 'Publicatie en tracking: na goedkeuring gaat de content live en monitoren we performance voor continue optimalisatie.',
        },
      ],
      cta: {
        label: 'Vraag een groeiscan aan',
        link: '/contact',
      },
    },
    faq: {
      title: {
        prefix: 'Veelgestelde',
        highlight: 'vragen',
        suffix: '',
      },
      items: [
        {
          question: 'Zijn jullie een copywriting bureau?',
          answer:
            'Wij zijn een full service marketing bureau met copywriting als kernspecialisatie. Ons team bestaat uit copywriters, SEO experts, advertentiespecialisten en CRO consultants. Deze aanpak stelt ons in staat complete contentstrategien te ontwikkelen met maximale business impact.',
        },
        {
          question: 'Wat is het tarief van jullie copywriters?',
          answer:
            'Onze tarieven varieren afhankelijk van projectomvang, tekstcomplexiteit en samenwerkingsduur. Eenmalige projecten hebben een andere prijs dan doorlopende trajecten. In een kennismakingsgesprek analyseren we jouw behoeften en geven we een transparante offerte.',
        },
        {
          question: 'Wat levert copywriting uitbesteden op?',
          answer:
            'Investeren in professionele copy genereert directe business resultaten: verbeterde organische zichtbaarheid, meer gekwalificeerd verkeer, hogere conversieratios en omzetgroei. Daarnaast win je tijd die je kunt investeren in strategische ontwikkeling.',
        },
        {
          question: 'Waarom zou ik copywriting uitbesteden?',
          answer:
            'Effectieve copywriters beheersen strategische communicatie, consumentenpsychologie en persuasie technieken. Ze kennen technische SEO optimalisatie en algoritme requirements. Deze kennis ontwikkelen kost jaren. Door uit te besteden krijg je direct toegang tot expertise.',
        },
        {
          question: 'Waarom copywriting uitbesteden aan de copywriters van Niblah?',
          answer:
            'Onze kracht ligt in geintegreerde samenwerking: je werkt met een copywriter die direct toegang heeft tot SEO strategen, advertentie experts en data analisten. Zo ontstaat content die onderdeel is van een holistische marketingstrategie met sterkere resultaten.',
        },
        {
          question: 'Kan ik mijn teksten ook laten schrijven door ChatGPT?',
          answer:
            'AI tools zoals ChatGPT kunnen ondersteunen, maar missen strategisch business inzicht, doelgroep psychografie en merkidentiteit. Onze copywriters gebruiken AI waar nuttig, maar voegen strategisch denken, creatieve differentiatie en conversie structuur toe die machines nog niet leveren.',
        },
      ],
    },
  },
  de: {
    metadata: {
      title: 'Copywriting auslagern | Professionelle SEO Texte | Niblah',
      description:
        'Copywriting auslagern an erfahrene Spezialisten. Mehr Conversions mit SEO optimierten Texten die ueberzeugen und verkaufen. Mehr Besucher und Umsatz.',
      keywords: 'copywriting auslagern, seo copywriting, webtexte, conversion copy',
      openGraph: {
        title: 'Copywriting auslagern | Niblah',
        description: 'Professionelle Texte fuer bessere Rankings und Conversions.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Professionelle Copy die ueberzeugt und verkauft',
      title: 'Copywriting auslagern',
      description:
        'Willst du hoeher in Google ranken und Besucher in Conversions verwandeln? Das gelingt nur mit professioneller Copy. Lagere dein Copywriting aus und erziele mehr Besucher, hoehere Conversions und messbares Wachstum.',
      ctaText: 'Kostenloses Kennenlernen',
      ctaLink: '/contact',
      note: '* 90% der Unternehmen lassen Wachstumschancen mit ihren Texten liegen',
      image: '/development-hero.png',
      imageAlt: 'Professional copywriting services dashboard',
    },
    process: {
      title: 'Die Arbeitsweise eines <highlight>Copywriters</highlight>',
      subtitle:
        'Wie schreiben wir Texte? Ein Copywriter schreibt mit dem Ziel zu verkaufen. Aber das Schreiben ist nur der Output. So arbeiten wir:',
      steps: [
        {
          number: '01',
          title: 'Kennenlernen und strategisches Briefing',
          description:
            'Wir starten mit einem tiefen Intake um Ziele zu klaeren. Ob einzelnes Projekt oder laufende Zusammenarbeit, wir uebersetzen Ambitionen in eine Contentstrategie die Wachstum bringt.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Marke und Zielgruppe analysieren',
          description:
            'Wir definieren Schreibstil, ideale Kunden und Kaufmotive. Wir analysieren Markt und Zielgruppe um Texte zu erstellen die wirklich resonieren. Keine klare Tone of Voice? Wir helfen sie aufzubauen.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Konzept und erste Version',
          description:
            'Jetzt beginnt das Schreiben. Wir recherchieren Thema und Zielgruppe und erstellen ueberzeugende Texte mit SEO Fokus. Du erhaeltst eine professionelle erste Version zur Freigabe.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Revision nach Feedback',
          description:
            'Dein Feedback ist wichtig. Wir verfeinern die Texte bis sie exakt zu Erwartungen und Zielen passen.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Veroeffentlichung und Zusammenarbeit',
          description:
            'Nach Freigabe gehen die Texte live. Fuer laufende Projekte liefern wir monatlich neue Inhalte, damit deine Website konstant waechst.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Warum',
        highlight: 'Copywriting auslagern',
        suffix: 'sinnvoll ist',
      },
      paragraphs: [
        'Wie viele Stunden schreibst du Texte die wenig bringen? Texte schreiben ist das eine, Copy die konvertiert ist eine Spezialitaet. Als Unternehmer willst du Ergebnisse: mehr Besucher, hoehere Conversions und Wachstum.',
        'Professionelles Copywriting verbindet Marketingstrategie, Psychologie und SEO. Ein guter Copywriter analysiert Zielgruppen, erkennt Pain Points und schreibt ueberzeugende Texte im richtigen Moment. Strategische Keywords sorgen fuer Sichtbarkeit.',
      ],
      lead: 'Unternehmen die Copywriting auslagern profitieren konkret:',
      bullets: [
        'Texte die konvertieren: erfahrene Copywriter nutzen psychologische Trigger',
        'Content der resoniert: durch tiefes Research entstehen Texte die echte Fragen treffen',
        'Fokus auf Kernaufgaben waehrend Profis den Content liefern',
      ],
    },
    niblah: {
      title: {
        prefix: 'Warum',
        highlight: 'Copywriting auslagern',
        suffix: 'an Niblah?',
      },
      subtitle:
        'Bei Niblah bekommst du mehr als schoene Worte. Unsere Copywriter denken strategisch und fokussieren auf Resultate.',
      cards: [
        {
          title: 'Ergebnisorientierter Ansatz',
          description:
            'Alles zielt auf messbare Ergebnisse. Unsere Copywriter schreiben mit dem Ziel Conversion Ziele zu erreichen. Jedes Wort soll Wirkung erzeugen.',
        },
        {
          title: 'Zielgruppen Expertise',
          description:
            'Wir starten mit tiefem Research. Was bewegt die Zielgruppe? Welche Fragen haben sie? Daraus entsteht Copy die Vertrauen aufbaut und Leads generiert.',
        },
        {
          title: 'Integrierter Marketingansatz',
          description:
            'Unsere Copywriter arbeiten im Team mit SEO, SEA und CRO Spezialisten. So entstehen Texte die fuer Suche und Conversion optimiert sind.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Was ist',
        highlight: 'Copywriting',
        suffix: 'genau?',
      },
      paragraphs: [
        'Copywriting ist das Handwerk ueberzeugende kommerzielle Texte zu erstellen mit einem Ziel: Conversion. Der Unterschied zu normalem Content? Ein Copywriter schreibt strategisch und psychologisch fundiert.',
        'Effektive Copy braucht tiefes Verstaendnis fuer Kunden: ihre Probleme, ihre Loesungen, ihre Einwaende. Daraus entstehen Texte die mehr Besucher, bessere Conversions und Umsatz bringen.',
        'Unsere Copywriter liefern vieles: SEO Texte, Landingpages, E Mails, Jobanzeigen und Whitepaper. Jede Textart dient deinen Zielen.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Diese Kunden',
        highlight: 'gingen voran',
        suffix: '',
      },
      subtitle: 'Konkrete Ergebnisse von Unternehmen die Copywriting auslagern',
      items: [
        {
          initials: 'VN',
          company: 'VitaNova Health',
          label: 'Copywriting | SEO',
          description: 'Komplette Website Inhalte mit Conversion Fokus neu geschrieben',
          stats: [
            { value: '215%', label: 'mehr organischer Traffic' },
            { value: '3.8x', label: 'hoeherer Conversion Rate' },
            { value: '142%', label: 'mehr Anfragen' },
          ],
        },
        {
          initials: 'BT',
          company: 'BeautyTrend',
          label: 'Copywriting | Content | Social',
          description: 'Monatliche Content Produktion fuer Blog und Social Media',
          stats: [
            { value: '87%', label: 'hoeheres Engagement' },
            { value: '4.2x', label: 'mehr Leadgenerierung' },
            { value: '168%', label: 'ROI auf Content' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Copywriting auslagern:',
        highlight: 'das bringt es dir',
        suffix: '',
      },
      intro:
        'Warum investieren erfolgreiche Unternehmen in professionelle Copy? Weil Texte direkt den Umsatz beeinflussen. Konkrete Vorteile:',
      items: [
        {
          title: 'Messbarer Conversion Effekt.',
          description:
            'Copywriter kombinieren Psychologie und SEO, sodass Texte besser ranken und Besucher zu Handlungen bewegen.',
        },
        {
          title: 'Strategisches Zielgruppen Targeting.',
          description:
            'Durch Research entsteht Copy die exakt zur Zielgruppe passt und hoehere Beteiligung erzeugt.',
        },
        {
          title: 'Mehr Kapazitaet fuer Wachstum.',
          description:
            'Du fokussierst auf Strategie waehrend Profis die Texte liefern.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Das sagen',
        highlight: 'unsere Kunden',
        suffix: '',
      },
      subtitle: 'Der Wert der Beziehung zaehlt mehr als der Wert der Transaktion.',
      items: [
        {
          quote:
            'Die Texte von Niblah konvertieren endlich. Der Copywriter versteht genau was unsere Zielgruppe hoeren will. Ergebnis: mehr Anfragen und Umsatz.',
          name: 'Sophie Janssen',
        },
        {
          quote:
            'Copywriting auslagern war die beste Entscheidung. Die Webtexte bringen bessere Rankings und mehr Conversions. Top Zusammenarbeit.',
          name: 'Marco van der Berg',
        },
        {
          quote:
            'Endlich Texte die nicht nur gut klingen, sondern verkaufen. Der Copywriter hat unsere Website komplett transformiert.',
          name: 'Lisa Vermeulen',
        },
      ],
      ratingLabel: 'Wir haben 4.9 auf Google aus 143 Bewertungen',
    },
    contentTypes: {
      title: {
        prefix: 'Was macht ein Copywriter bei Niblah:',
        highlight: 'Texte die wir schreiben',
        suffix: '',
      },
      subtitle:
        'Von SEO Texten bis Jobanzeigen: unsere Copywriter liefern alle Textarten fuer deinen Online Erfolg.',
      items: [
        {
          title: 'SEO Texte',
          description:
            'SEO Content ist zentral fuer organisches Wachstum. Wir schreiben Blogs, Produktbeschreibungen und Landingpages die Google und Zielgruppen ansprechen und zu Conversions fuehren.',
        },
        {
          title: 'Verkaufsstarke Webtexte',
          description:
            'Traffic ist Schritt eins, Conversion ist das Ziel. Wir schreiben Webtexte die Besucher zu Aktion bewegen.',
        },
        {
          title: 'Jobanzeigen',
          description:
            'Gute Bewerber starten mit guten Anzeigen. Wir schreiben Jobs die informieren, inspirieren und qualifizierte Kandidaten anziehen.',
        },
        {
          title: 'E Mail Texte',
          description:
            'E Mail ist einer der staerksten Kanale fuer Conversion. Wir schreiben Mails die geoeffnet, geklickt und konvertiert werden.',
        },
        {
          title: 'Whitepaper',
          description:
            'Leads brauchen wertvollen Content. Whitepaper zeigen Expertise und sammeln Kontaktdaten. Wir entwickeln Research basierte Dokumente die zu qualifizierten Leads werden.',
        },
        {
          title: 'Anzeigentexte (SEA und Social Ads)',
          description:
            'Paid Kampagnen brauchen Copy die konvertiert. Wir schreiben Ads fuer Google, Facebook, Instagram und LinkedIn und optimieren laufend fuer ROI.',
        },
      ],
    },
    seoWriting: {
      title: {
        prefix: 'Wie werden gute',
        highlight: 'SEO Texte geschrieben?',
        suffix: '',
      },
      intro:
        'SEO Content vereint technische Optimierung und ueberzeugende Copy. Tone of Voice und Zielgruppenkenntnis bleiben wichtig, strategische Keywords sind entscheidend. Unser Prozess:',
      steps: [
        {
          number: '1',
          text: 'Content Strategieanalyse: wir identifizieren Content der organische Positionen staerkt, abgestimmt auf die SEO Roadmap.',
        },
        {
          number: '2',
          text: 'Keyword Research: wir finden Suchbegriffe mit Volumen, realistischer Konkurrenz und hoher Intent.',
        },
        {
          number: '3',
          text: 'Strategisches Copywriting: Keywords werden natuerlich integriert, optimiert fuer Algorithmus und Lesbarkeit.',
        },
        {
          number: '4',
          text: 'Review und Feinschliff: dein Feedback stellt sicher dass Brand und Ziele passen.',
        },
        {
          number: '5',
          text: 'Publish und Tracking: nach Freigabe geht der Content live und wir optimieren kontinuierlich.',
        },
      ],
      cta: {
        label: 'Kostenlosen Wachstumscheck anfragen',
        link: '/contact',
      },
    },
    faq: {
      title: {
        prefix: 'Haeufige',
        highlight: 'Fragen',
        suffix: '',
      },
      items: [
        {
          question: 'Seid ihr eine Copywriting Agentur?',
          answer:
            'Wir sind eine Full Service Marketing Agentur mit Copywriting als Kern. Unser Team besteht aus Copywritern, SEO Experten, Ads Spezialisten und CRO Beratern. Dadurch liefern wir ganzheitliche Contentstrategien.',
        },
        {
          question: 'Wie hoch sind eure Copywriter Preise?',
          answer:
            'Preise haengen von Umfang, Komplexitaet und Laufzeit ab. Einmalige Projekte haben eine andere Struktur als laufende Retainer. Wir analysieren deinen Bedarf und senden ein transparentes Angebot.',
        },
        {
          question: 'Was bringt Copywriting Auslagerung?',
          answer:
            'Professionelle Copy bringt direkte Ergebnisse: bessere Sichtbarkeit, mehr qualifizierten Traffic, hoehere Conversions und Umsatzwachstum. Zudem sparst du Zeit.',
        },
        {
          question: 'Warum Copywriting auslagern?',
          answer:
            'Gute Copywriter kennen Psychologie, Persuasion und SEO. Dieses Know how aufzubauen dauert Jahre. Durch Auslagerung hast du sofort Zugang zu Expertise.',
        },
        {
          question: 'Warum Copywriting an Niblah auslagern?',
          answer:
            'Dein Copywriter arbeitet mit SEO Strategen, Ads Experten und Data Analysten zusammen. Das liefert integrierte Inhalte statt isolierter Texte und staerkere Ergebnisse.',
        },
        {
          question: 'Kann ich Texte auch mit ChatGPT schreiben?',
          answer:
            'AI kann helfen, aber fehlt strategisches Business Verstaendnis, Zielgruppenpsychologie und Markenstimme. Unsere Copywriter nutzen AI sinnvoll, liefern aber die entscheidende strategische Ebene.',
        },
      ],
    },
  },
  sv: {
    metadata: {
      title: 'Outsourca copywriting | Professionella SEO texter | Niblah',
      description:
        'Outsourca copywriting till specialister. Okad konvertering med SEO optimerade texter som overtygar och saljer.',
      keywords: 'outsourca copywriting, seo copywriting, webtexter, conversion copy',
      openGraph: {
        title: 'Outsourca copywriting | Niblah',
        description: 'Professionella texter som ger rankings och konverteringar.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Professionell copy som overtygar och saljer',
      title: 'Outsourca copywriting',
      description:
        'Vill du ranka hogre i Google och fa fler konverteringar? Det kraver professionell copy. Outsourca copywriting och fa fler besokare, hogre konvertering och matbar tillvaxt.',
      ctaText: 'Boka gratis intro',
      ctaLink: '/contact',
      note: '* 90% av foretag missar tillvaxtchanser med sina texter',
      image: '/development-hero.png',
      imageAlt: 'Professional copywriting services dashboard',
    },
    process: {
      title: '<highlight>Copywriter</highlight> processen',
      subtitle:
        'Hur skriver vi texter? En copywriter skriver for att salja. Men skrivandet ar bara output. Sa arbetar vi:',
      steps: [
        {
          number: '01',
          title: 'Introduktion och briefing',
          description:
            'Vi startar med en grundlig genomgang av mal och behov. Oavsett projekt eller lopande arbete skapar vi en strategi som driver tillvaxt.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Varumarke och malgrupp',
          description:
            'Vi definierar skrivstil, ideal kunder och drivkrafter. Vi analyserar marknad och malgrupp for texter som verkligen matchar.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Koncept och forsta version',
          description:
            'Nu borjar skrivandet. Vi researchar och skriver copy optimerad for SEO och konvertering. Du far en professionell forstaversion.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Revidering efter feedback',
          description:
            'Vi tar in din feedback och finjusterar tills texten matchar dina mal.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publicering och samarbete',
          description:
            'Efter godkannande publiceras texterna. For lopande arbete levererar vi nya texter varje manad.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Varfor',
        highlight: 'outsourca copywriting',
        suffix: 'ar smart for ditt foretag',
      },
      paragraphs: [
        'Hur manga timmar lagger du pa texter som inte ger resultat? Att skriva text ar en sak, copy som konverterar ar en specialitet. Du vill ha fler besokare, hogre konvertering och okad omsattning.',
        'Professionell copywriting kombinerar marketing, psykologi och SEO. En bra copywriter forstar malgruppen, identifierar pain points och skriver overtygande texter. Strategiska sokord gor dig synlig.',
      ],
      lead: 'Foretag som outsourcar copywriting ser konkreta fordelar:',
      bullets: [
        'Texter som konverterar: erfarna copywriters kan psykologiska triggers',
        'Content som resonerar: research ger texter som matchar behov och fragor',
        'Fokus pa karnverksamheten medan proffs hanterar content',
      ],
    },
    niblah: {
      title: {
        prefix: 'Varfor',
        highlight: 'outsourca copywriting',
        suffix: 'till Niblah?',
      },
      subtitle:
        'Hos Niblah far du mer an fina ord. Vara copywriters tanker strategiskt och fokuserar pa resultat.',
      cards: [
        {
          title: 'Resultatdriven metod',
          description:
            'Allt vi gor handlar om matbara resultat. Varje ord ar skrivet for att driva action och okad omsattning.',
        },
        {
          title: 'Malgruppsexpertis',
          description:
            'Vi startar med djup research. Insikten blir copy som resonerar och bygger forstroende.',
        },
        {
          title: 'Integrerad marketing',
          description:
            'Copywriters arbetar ihop med SEO, SEA och CRO specialister for texter som rankar och konverterar.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Vad ar',
        highlight: 'copywriting',
        suffix: 'egentligen?',
      },
      paragraphs: [
        'Copywriting ar hantverket att skriva overtygande kommersiella texter med ett mal: konvertering. Skillnaden mot vanlig content? Copywriter skriver strategiskt.',
        'Effektiv copy kraver forstaelse for kunden: problem, behov, invandningar. Det ger fler besokare, hogre konvertering och tillvaxt.',
        'Vara copywriters levererar SEO texter, landningssidor, e mail, jobbannonser och whitepapers. Varje text stottar affarsmal.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Dessa kunder',
        highlight: 'gick fore',
        suffix: '',
      },
      subtitle: 'Resultat fraan foretag som outsourcar copywriting',
      items: [
        {
          initials: 'VN',
          company: 'VitaNova Health',
          label: 'Copywriting | SEO',
          description: 'Hela webben omskriven med fokus pa konvertering',
          stats: [
            { value: '215%', label: 'mer organisk trafik' },
            { value: '3.8x', label: 'hogre konvertering' },
            { value: '142%', label: 'fler forfragningar' },
          ],
        },
        {
          initials: 'BT',
          company: 'BeautyTrend',
          label: 'Copywriting | Content | Social',
          description: 'Manadlig contentproduktion for blogg och social',
          stats: [
            { value: '87%', label: 'hogre engagement' },
            { value: '4.2x', label: 'mer leadgenerering' },
            { value: '168%', label: 'ROI pa content' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Outsourca copywriting:',
        highlight: 'detta far du',
        suffix: '',
      },
      intro:
        'Varfor investerar framgangsrika foretag i professionell copy? For att texter som konverterar direkt paaverkar resultat. Fordelar:',
      items: [
        {
          title: 'Matbar konverteringseffekt.',
          description:
            'Copywriters kombinerar psykologi och SEO sa texter rankar och overtygar besokare.',
        },
        {
          title: 'Strategisk malgruppstargeting.',
          description:
            'Research ger copy som matchar malgruppens behov och okar engagemang.',
        },
        {
          title: 'Mer kapacitet for tillvaxt.',
          description:
            'Du fokuserar pa strategi medan proffs levererar overtygande texter.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Detta sager',
        highlight: 'vara kunder',
        suffix: '',
      },
      subtitle: 'Vardet av relationen betyder mer an transaktionen.',
      items: [
        {
          quote:
            'Texterna fran Niblah konverterar. Copywritern forstar vad var malgrupp vill hora. Resultat: fler forfragningar och hogre omsattning.',
          name: 'Sophie Janssen',
        },
        {
          quote:
            'Outsourca copywriting var vart basta beslut. Webtexterna gav battre ranking och fler konverteringar.',
          name: 'Marco van der Berg',
        },
        {
          quote:
            'Antligen texter som saljer. Copywritern transformerade hela var webbplats.',
          name: 'Lisa Vermeulen',
        },
      ],
      ratingLabel: 'Vi far 4.9 pa Google av 143 omdomen',
    },
    contentTypes: {
      title: {
        prefix: 'Vad gor en copywriter pa Niblah:',
        highlight: 'texter vi skriver',
        suffix: '',
      },
      subtitle:
        'Fran SEO texter till jobbannonser: vi levererar alla texttyper du behover.',
      items: [
        {
          title: 'SEO texter',
          description:
            'SEO optimerad content ar nyckeln till organisk tillvaxt. Vi skriver texter som rankar och konverterar.',
        },
        {
          title: 'Overtygande webtexter',
          description:
            'Vi skriver webtexter som driver action, fran homepage till service sidor.',
        },
        {
          title: 'Jobbannonser',
          description:
            'Vi skriver annonser som attraherar ratt kandidater och bygger employer brand.',
        },
        {
          title: 'E mail texter',
          description:
            'Vi skriver e mail som oppnas och konverterar, fran floden till nyhetsbrev.',
        },
        {
          title: 'Whitepapers',
          description:
            'Whitepapers visar expertis och genererar leads. Vi utvecklar researchbaserade dokument.',
        },
        {
          title: 'Annonstexter (SEA och social ads)',
          description:
            'Vi skriver ad copy for Google, Facebook, Instagram och LinkedIn som ger klick och konverteringar.',
        },
      ],
    },
    seoWriting: {
      title: {
        prefix: 'Hur skrivs bra',
        highlight: 'SEO texter?',
        suffix: '',
      },
      intro:
        'SEO content kraver teknik och copy tillsammans. Strategiska sokord ar viktiga. Vart process:',
      steps: [
        {
          number: '1',
          text: 'Content analys: vi ser vilken content som starker organiska positioner.',
        },
        {
          number: '2',
          text: 'Keyword research: vi hittar termer med bra volym och intent.',
        },
        {
          number: '3',
          text: 'Strategisk copywriting: naturlig integration av sokord for rankning och lasbarhet.',
        },
        {
          number: '4',
          text: 'Review och justering: feedback sakerstaller brand och mal.',
        },
        {
          number: '5',
          text: 'Publicering och tracking: vi foljer performance och optimerar.',
        },
      ],
      cta: {
        label: 'Be om en tillvaxtscan',
        link: '/contact',
      },
    },
    faq: {
      title: {
        prefix: 'Vanliga',
        highlight: 'fragor',
        suffix: '',
      },
      items: [
        {
          question: 'Ar ni en copywriting byra?',
          answer:
            'Vi ar en fullservice marketing byra med copywriting som karna. Teamet bestar av copywriters, SEO experter, ads specialister och CRO konsulter.',
        },
        {
          question: 'Vad kostar era copywriters?',
          answer:
            'Priserna beror pa omfattning och komplexitet. Vi tar fram en transparent offert efter genomgang.',
        },
        {
          question: 'Vad ger outsourcing av copywriting?',
          answer:
            'Professionell copy ger battre synlighet, mer kvalificerad trafik och hoegre konvertering.',
        },
        {
          question: 'Varfor outsourca copywriting?',
          answer:
            'Bra copywriting kraver expertis inom psykologi, persuasion och SEO. Outsourcing ger direkt tilgang.',
        },
        {
          question: 'Varfor outsourca till Niblah?',
          answer:
            'Din copywriter samarbetar med SEO, ads och data for en holistisk strategi.',
        },
        {
          question: 'Kan jag bara anvanda ChatGPT?',
          answer:
            'AI kan hjalpa men saknar strategi, malgruppspsykologi och brand voice. Vara copywriters levererar den nivan.',
        },
      ],
    },
  },
  da: {
    metadata: {
      title: 'Outsource copywriting | Professionelle SEO tekster | Niblah',
      description:
        'Outsource copywriting til specialister. Oeg konvertering med SEO optimerede tekster der overbeviser og saelger.',
      keywords: 'outsource copywriting, seo copywriting, webtekster, conversion copy',
      openGraph: {
        title: 'Outsource copywriting | Niblah',
        description: 'Professionelle tekster der giver rankings og konverteringer.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Professionel copy der overbeviser og saelger',
      title: 'Outsource copywriting',
      description:
        'Vil du ranke hoejere i Google og faa flere konverteringer? Det kraever professionel copy. Outsource copywriting og faa flere besoegende, hoejere konvertering og maelbar vaekst.',
      ctaText: 'Planlaeg gratis intro',
      ctaLink: '/contact',
      note: '* 90% af virksomheder misser vaekstchancer med deres tekster',
      image: '/development-hero.png',
      imageAlt: 'Professional copywriting services dashboard',
    },
    process: {
      title: '<highlight>Copywriterens</highlight> proces',
      subtitle:
        'Hvordan skriver vi tekster? En copywriter skriver for at saelge. Men skrivningen er kun output. Saadan arbejder vi:',
      steps: [
        {
          number: '01',
          title: 'Indledende briefing',
          description:
            'Vi starter med en grundig gennemgang af maal og behov. Uanset projekt eller loebende samarbejde skaber vi en strategi der skaber vaekst.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Brand og maalgruppe',
          description:
            'Vi definerer tone of voice, ideelle kunder og drivkrafter. Vi analyserer marked og maalgruppe for tekster der rammer rigtigt.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Koncept og foerste version',
          description:
            'Nu starter skrivearbejdet. Vi research er tema og malgruppe og skaber copy optimeret til SEO og konvertering.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Revision efter feedback',
          description:
            'Din feedback er vigtig. Vi finjusterer indtil teksten matcher dine maal.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publicering og samarbejde',
          description:
            'Efter godkendelse publiceres teksterne. Ved loebende samarbejde leverer vi nyt content hver maaned.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Hvorfor',
        highlight: 'outsource copywriting',
        suffix: 'er smart for din virksomhed',
      },
      paragraphs: [
        'Hvor mange timer bruger du pa tekster der ikke giver resultat? At skrive tekst er en ting, copy der konverterer er en specialitet. Du vil have flere besoegende, hoejere konvertering og vaekst.',
        'Professionel copywriting kombinerer marketing, psykologi og SEO. En god copywriter forstar maalgruppen, finder pain points og skriver overbevisende tekster. Strategiske soegeord sikrer synlighed.',
      ],
      lead: 'Virksomheder der outsourcer copywriting oplever konkrete fordele:',
      bullets: [
        'Tekster der konverterer: erfarne copywriters kan psykologiske triggers',
        'Content der resonerer: research giver tekster som matcher behov',
        'Fokus pa kerneopgaver mens proffer leverer content',
      ],
    },
    niblah: {
      title: {
        prefix: 'Hvorfor',
        highlight: 'outsource copywriting',
        suffix: 'til Niblah?',
      },
      subtitle:
        'Hos Niblah far du mere end fine ord. Vores copywriters taenker strategisk og fokuserer pa resultater.',
      cards: [
        {
          title: 'Resultatorienteret tilgang',
          description:
            'Alt handler om maelbare resultater. Hvert ord er skrevet for at drive handling og omsaetning.',
        },
        {
          title: 'Maalgruppe ekspertise',
          description:
            'Vi starter med dyb research. Indsigt bliver til copy der bygger tillid og leads.',
        },
        {
          title: 'Integreret marketing',
          description:
            'Copywriters arbejder sammen med SEO, SEA og CRO specialister for tekster der ranker og konverterer.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Hvad er',
        highlight: 'copywriting',
        suffix: 'egentlig?',
      },
      paragraphs: [
        'Copywriting er haandvaerket at skrive overbevisende kommercielle tekster med et mal: konvertering. Forskellen fra almindelig content? Copywriting er strategisk.',
        'Effektiv copy kraever forstaelse for kunden: problemer, behov og indvendinger. Det giver flere besoegende og bedre konvertering.',
        'Vores copywriters leverer SEO tekster, landingssider, e mail, jobannoncer og whitepapers. Alt for dine forretningsmaal.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Disse kunder',
        highlight: 'gik forrest',
        suffix: '',
      },
      subtitle: 'Resultater fra virksomheder der outsourcer copywriting',
      items: [
        {
          initials: 'VN',
          company: 'VitaNova Health',
          label: 'Copywriting | SEO',
          description: 'Hele website omskrevet med fokus pa konvertering',
          stats: [
            { value: '215%', label: 'mere organisk trafik' },
            { value: '3.8x', label: 'hoejere konvertering' },
            { value: '142%', label: 'flere henvendelser' },
          ],
        },
        {
          initials: 'BT',
          company: 'BeautyTrend',
          label: 'Copywriting | Content | Social',
          description: 'Maanedlig content produktion til blog og social',
          stats: [
            { value: '87%', label: 'hoejere engagement' },
            { value: '4.2x', label: 'mere leadgenerering' },
            { value: '168%', label: 'ROI pa content' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Outsource copywriting:',
        highlight: 'det her far du',
        suffix: '',
      },
      intro:
        'Hvorfor investerer succesfulde virksomheder i professionel copy? Fordi tekster der konverterer direkte paavirker bundlinjen. Fordele:',
      items: [
        {
          title: 'Maelbar konverteringseffekt.',
          description:
            'Copywriters kombinerer psykologi og SEO sa tekster ranker og overbeviser.',
        },
        {
          title: 'Strategisk maalgruppe targeting.',
          description:
            'Research skaber copy der matcher maalgruppen og oeger engagement.',
        },
        {
          title: 'Mere kapacitet til vaekst.',
          description:
            'Du fokuserer pa strategi mens proffer leverer teksterne.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Det siger',
        highlight: 'vores kunder',
        suffix: '',
      },
      subtitle: 'Relationens vaerdi betyder mere end transaktionen.',
      items: [
        {
          quote:
            'Niblahs tekster konverterer. Copywriteren forstar hvad vores maalgruppe vil hoere. Resultat: flere henvendelser og hoejere omsaetning.',
          name: 'Sophie Janssen',
        },
        {
          quote:
            'Outsource copywriting var vores bedste beslutning. Webteksterne gav bedre rankings og konverteringer.',
          name: 'Marco van der Berg',
        },
        {
          quote:
            'Endelig tekster der saelger. Copywriteren transformerede hele vores website.',
          name: 'Lisa Vermeulen',
        },
      ],
      ratingLabel: 'Vi far 4.9 pa Google ud fra 143 anmeldelser',
    },
    contentTypes: {
      title: {
        prefix: 'Hvad gor en copywriter hos Niblah:',
        highlight: 'tekster vi skriver',
        suffix: '',
      },
      subtitle:
        'Fra SEO tekster til jobannoncer: vi leverer alle teksttyper du behover.',
      items: [
        {
          title: 'SEO tekster',
          description:
            'SEO optimeret content er noglen til organisk vaekst. Vi skriver tekster der ranker og konverterer.',
        },
        {
          title: 'Overbevisende webtekster',
          description:
            'Vi skriver webtekster der driver handling, fra homepage til service sider.',
        },
        {
          title: 'Jobannoncer',
          description:
            'Vi skriver annoncer der tiltraekker de rigtige kandidater.',
        },
        {
          title: 'E mail tekster',
          description:
            'Vi skriver e mails der bliver aabnet og konverterer.',
        },
        {
          title: 'Whitepapers',
          description:
            'Whitepapers viser ekspertise og genererer leads. Vi udvikler research baserede dokumenter.',
        },
        {
          title: 'Annoncetekster (SEA og social ads)',
          description:
            'Vi skriver ad copy til Google, Facebook, Instagram og LinkedIn som giver klik og konverteringer.',
        },
      ],
    },
    seoWriting: {
      title: {
        prefix: 'Hvordan skrives gode',
        highlight: 'SEO tekster?',
        suffix: '',
      },
      intro:
        'SEO content kraever teknik og copy sammen. Strategiske soegeord er vigtige. Vores proces:',
      steps: [
        {
          number: '1',
          text: 'Content analyse: vi ser hvilken content der styrker organiske positioner.',
        },
        {
          number: '2',
          text: 'Keyword research: vi finder termer med volumen og intent.',
        },
        {
          number: '3',
          text: 'Strategisk copywriting: naturlig integration af soegeord.',
        },
        {
          number: '4',
          text: 'Review og justering: feedback sikrer brand og maal.',
        },
        {
          number: '5',
          text: 'Publicering og tracking: vi maaler performance og optimerer.',
        },
      ],
      cta: {
        label: 'Anmod om en vaekstscan',
        link: '/contact',
      },
    },
    faq: {
      title: {
        prefix: 'Ofte stillede',
        highlight: 'sporgsmal',
        suffix: '',
      },
      items: [
        {
          question: 'Er I et copywriting bureau?',
          answer:
            'Vi er et full service marketing bureau med copywriting som kerne. Teamet inkluderer copywriters, SEO eksperter, ads specialister og CRO konsulenter.',
        },
        {
          question: 'Hvad koster jeres copywriters?',
          answer:
            'Priser afhaenger af omfang og kompleksitet. Vi giver en transparent pris efter analyse.',
        },
        {
          question: 'Hvad giver outsourcing af copywriting?',
          answer:
            'Professionel copy giver bedre synlighed, mere kvalificeret trafik og hoejere konvertering.',
        },
        {
          question: 'Hvorfor outsource copywriting?',
          answer:
            'God copywriting kraever ekspertise i psykologi, persuasion og SEO. Outsourcing giver adgang nu.',
        },
        {
          question: 'Hvorfor outsource til Niblah?',
          answer:
            'Din copywriter samarbejder med SEO, ads og data for en holistisk strategi.',
        },
        {
          question: 'Kan jeg bare bruge ChatGPT?',
          answer:
            'AI kan hjaelpe, men mangler strategi, maalgruppeforstaelse og brand voice. Vores copywriters leverer den ekstra laeg.',
        },
      ],
    },
  },
  fr: {
    metadata: {
      title: 'Externaliser la copywriting | Textes SEO pro | Niblah',
      description:
        'Externalisez la copywriting a des specialistes. Augmentez la conversion avec des textes SEO optimises qui convainquent et vendent.',
      keywords: 'externaliser copywriting, seo copywriting, textes web, conversion copy',
      openGraph: {
        title: 'Externaliser la copywriting | Niblah',
        description: 'Textes pro pour rankings et conversions.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Copy pro qui convainc et vend',
      title: 'Externaliser la copywriting',
      description:
        'Vous voulez mieux ranker sur Google et convertir plus? Cela demande une copy professionnelle. Externalisez votre copywriting et obtenez plus de visiteurs, plus de conversions et une croissance mesurable.',
      ctaText: 'Planifier un appel gratuit',
      ctaLink: '/contact',
      note: '* 90% des entreprises laissent des opportunites de croissance avec leurs textes',
      image: '/development-hero.png',
      imageAlt: 'Professional copywriting services dashboard',
    },
    process: {
      title: 'Le process du <highlight>copywriter</highlight>',
      subtitle:
        'Comment ecrivons nous? Un copywriter ecrit pour vendre. Mais l ecriture est seulement l output. Voici notre processus:',
      steps: [
        {
          number: '01',
          title: 'Introduction et briefing',
          description:
            'Nous commencons par une analyse des objectifs. Projet unique ou collaboration continue, nous traduisons vos ambitions en strategie de contenu.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Marque et audience',
          description:
            'Nous definissons style, clients ideaux et motivations. Nous analysons votre marche pour creer des textes qui resonent.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Concept et premiere version',
          description:
            'Nous recherchons le sujet et ecrivons une copy optimisee SEO et conversion. Vous recevez une premiere version pro.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Revision selon feedback',
          description:
            'Nous integrons votre feedback et affinons jusqu a ce que tout soit aligne.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Publication et collaboration',
          description:
            'Une fois approuve, le contenu est publie. Pour les projets recurents, nous livrons chaque mois.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Pourquoi',
        highlight: 'externaliser la copywriting',
        suffix: 'est intelligent',
      },
      paragraphs: [
        'Combien d heures passez vous a ecrire des textes qui rapportent peu? Ecrire est une chose, convertir en est une autre. Vous voulez plus de visiteurs et de conversions.',
        'La copy pro combine strategie marketing, psychologie et SEO. Un bon copywriter comprend votre audience et ecrit des textes persuasifs. Les mots cles strategiques assurent la visibilite.',
      ],
      lead: 'Les entreprises qui externalisent la copywriting obtiennent:',
      bullets: [
        'Des textes qui convertissent grace a des triggers psychologiques',
        'Du contenu qui resonne avec la cible grace a la recherche',
        'Un focus sur le coeur de metier pendant que les pros ecrivent',
      ],
    },
    niblah: {
      title: {
        prefix: 'Pourquoi',
        highlight: 'externaliser la copywriting',
        suffix: 'chez Niblah?',
      },
      subtitle:
        'Chez Niblah vous obtenez plus que des jolis mots. Nos copywriters pensent strategie et resultats.',
      cards: [
        {
          title: 'Approche orientee resultats',
          description:
            'Chaque mot est ecrit pour atteindre vos objectifs de conversion et generer du revenu.',
        },
        {
          title: 'Expertise audience',
          description:
            'Nous demarrons par une recherche profonde pour creer des textes qui construisent la confiance.',
        },
        {
          title: 'Approche marketing integree',
          description:
            'Copywriters, SEO, SEA et CRO travaillent ensemble pour des textes qui rankent et convertissent.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Qu est ce que',
        highlight: 'la copywriting',
        suffix: 'exactement?',
      },
      paragraphs: [
        'La copywriting est l art d ecrire des textes commerciaux persuasifs avec un objectif: convertir. La difference avec du contenu classique? C est strategique.',
        'Une bonne copy demande de comprendre la cible: besoins, objections, motivations. Cela augmente trafic et conversions.',
        'Nos copywriters livrent SEO, landing pages, emails, annonces et whitepapers pour vos objectifs business.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Ces clients',
        highlight: 'nous ont fait confiance',
        suffix: '',
      },
      subtitle: 'Resultats concrets de la copywriting externalisee',
      items: [
        {
          initials: 'VN',
          company: 'VitaNova Health',
          label: 'Copywriting | SEO',
          description: 'Contenu du site entier refait avec focus conversion',
          stats: [
            { value: '215%', label: 'plus de trafic organique' },
            { value: '3.8x', label: 'taux de conversion plus eleve' },
            { value: '142%', label: 'plus de demandes' },
          ],
        },
        {
          initials: 'BT',
          company: 'BeautyTrend',
          label: 'Copywriting | Content | Social',
          description: 'Production mensuelle de contenu blog et social',
          stats: [
            { value: '87%', label: 'engagement plus eleve' },
            { value: '4.2x', label: 'plus de leads' },
            { value: '168%', label: 'ROI sur le contenu' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Externaliser la copywriting:',
        highlight: 'voila ce que vous gagnez',
        suffix: '',
      },
      intro:
        'Pourquoi investir dans la copy pro? Parce que les textes qui convertissent impactent le chiffre. Avantages:',
      items: [
        {
          title: 'Impact conversion mesurable.',
          description:
            'Copywriters combinent psychologie et SEO pour des textes qui rankent et convainquent.',
        },
        {
          title: 'Ciblage strategique.',
          description:
            'La recherche permet une copy qui parle vraiment a la cible.',
        },
        {
          title: 'Plus de capacite pour grandir.',
          description:
            'Vous focussez sur la strategie pendant que les pros ecrivent.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Ce que disent',
        highlight: 'nos clients',
        suffix: '',
      },
      subtitle: 'La valeur de la relation compte plus que la transaction.',
      items: [
        {
          quote:
            'Les textes de Niblah convertissent. Leur copywriter comprend notre audience. Resultat: plus de demandes et plus de revenu.',
          name: 'Sophie Janssen',
        },
        {
          quote:
            'Externaliser la copywriting etait notre meilleure decision. Textes pro, meilleurs rankings et conversions.',
          name: 'Marco van der Berg',
        },
        {
          quote:
            'Enfin des textes qui vendent. Le copywriter a transforme tout notre site.',
          name: 'Lisa Vermeulen',
        },
      ],
      ratingLabel: 'Nous avons 4.9 sur Google avec 143 avis',
    },
    contentTypes: {
      title: {
        prefix: 'Que fait un copywriter chez Niblah:',
        highlight: 'les textes que nous ecrivons',
        suffix: '',
      },
      subtitle:
        'Des textes SEO aux annonces d emploi: nous couvrons tous les formats.',
      items: [
        {
          title: 'Textes SEO',
          description:
            'Content SEO pour croissance organique. Nous ecrivons des textes qui rankent et convertissent.',
        },
        {
          title: 'Textes web persuasifs',
          description:
            'Nous ecrivons des pages qui transforment les visiteurs en actions.',
        },
        {
          title: 'Annonces d emploi',
          description:
            'Nous ecrivons des annonces qui attirent les bons candidats.',
        },
        {
          title: 'Textes email',
          description:
            'Emails qui s ouvrent, se cliquent et convertissent.',
        },
        {
          title: 'Whitepapers',
          description:
            'Whitepapers qui montrent votre expertise et generent des leads.',
        },
        {
          title: 'Textes publicitaires (SEA et social)',
          description:
            'Copy pour Google, Facebook, Instagram et LinkedIn qui genere clics et conversions.',
        },
      ],
    },
    seoWriting: {
      title: {
        prefix: 'Comment ecrire de bons',
        highlight: 'textes SEO?',
        suffix: '',
      },
      intro:
        'Le contenu SEO combine technique et copy. Les mots cles strategiques sont essentiels. Notre process:',
      steps: [
        {
          number: '1',
          text: 'Analyse de contenu: identifier ce qui renforce les positions organiques.',
        },
        {
          number: '2',
          text: 'Keyword research: trouver des termes avec volume et intention.',
        },
        {
          number: '3',
          text: 'Copywriting strategique: integrer les mots cles naturellement.',
        },
        {
          number: '4',
          text: 'Review et ajustements: aligner avec la marque.',
        },
        {
          number: '5',
          text: 'Publication et tracking: suivre la performance et optimiser.',
        },
      ],
      cta: {
        label: 'Demander un scan de croissance',
        link: '/contact',
      },
    },
    faq: {
      title: {
        prefix: 'Questions',
        highlight: 'frequentes',
        suffix: '',
      },
      items: [
        {
          question: 'Etes vous une agence de copywriting?',
          answer:
            'Nous sommes une agence marketing full service avec copywriting comme specialite. L equipe inclut copywriters, SEO, ads et CRO.',
        },
        {
          question: 'Quel est le tarif des copywriters?',
          answer:
            'Le tarif depend du scope et de la complexite. Nous proposons un devis transparent apres analyse.',
        },
        {
          question: 'Que rapporte l outsourcing copywriting?',
          answer:
            'Des resultats directs: meilleure visibilite, trafic qualifie et conversions plus hautes.',
        },
        {
          question: 'Pourquoi externaliser la copywriting?',
          answer:
            'La copy demande expertise en psychologie, persuasion et SEO. L externalisation donne acces immediat.',
        },
        {
          question: 'Pourquoi Niblah?',
          answer:
            'Votre copywriter collabore avec SEO, ads et data pour une strategie holistique.',
        },
        {
          question: 'Puis je utiliser ChatGPT?',
          answer:
            'AI aide, mais manque de strategie et de brand voice. Nos copywriters ajoutent cette couche essentielle.',
        },
      ],
    },
  },
  it: {
    metadata: {
      title: 'Outsourcing copywriting | Testi SEO professionali | Niblah',
      description:
        'Outsourcing copywriting a specialisti. Aumenta conversioni con testi SEO ottimizzati che convincono e vendono.',
      keywords: 'outsourcing copywriting, seo copywriting, testi web, conversion copy',
      openGraph: {
        title: 'Outsourcing copywriting | Niblah',
        description: 'Testi professionali per ranking e conversioni.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Copy professionale che convince e vende',
      title: 'Outsourcing copywriting',
      description:
        'Vuoi posizionarti meglio su Google e aumentare le conversioni? Serve copy professionale. Outsourcing copywriting significa piu visitatori, piu conversioni e crescita misurabile.',
      ctaText: 'Prenota una intro gratuita',
      ctaLink: '/contact',
      note: '* Il 90% delle aziende perde opportunita con i testi',
      image: '/development-hero.png',
      imageAlt: 'Professional copywriting services dashboard',
    },
    process: {
      title: 'Il processo del <highlight>copywriter</highlight>',
      subtitle:
        'Come scriviamo? Un copywriter scrive per vendere. Ma la scrittura e solo output. Ecco il processo:',
      steps: [
        {
          number: '01',
          title: 'Intro e briefing',
          description:
            'Partiamo con un intake per chiarire obiettivi. Progetto singolo o collaborazione continua, creiamo una strategia che genera crescita.',
          showNext: true,
        },
        {
          number: '02',
          title: 'Brand e audience',
          description:
            'Definiamo stile, clienti ideali e motivazioni. Analizziamo il mercato per testi che risuonano.',
          showNext: true,
        },
        {
          number: '03',
          title: 'Concept e prima bozza',
          description:
            'Ricerchiamo e scriviamo copy ottimizzata per SEO e conversione. Ricevi una prima versione professionale.',
          showNext: true,
        },
        {
          number: '04',
          title: 'Revisione con feedback',
          description:
            'Integriamo il feedback e rifiniamo fino a rispettare obiettivi e aspettative.',
          showNext: true,
        },
        {
          number: '05',
          title: 'Pubblicazione e collaborazione',
          description:
            'Dopo approvazione pubblichiamo. Per progetti continuativi, consegniamo nuovi testi ogni mese.',
          showNext: false,
        },
      ],
    },
    why: {
      title: {
        prefix: 'Perche',
        highlight: 'outsourcing copywriting',
        suffix: 'e smart per il business',
      },
      paragraphs: [
        'Quante ore passi a scrivere testi che non danno risultati? Scrivere e una cosa, copy che converte e una specialita. Vuoi piu visitatori e conversioni.',
        'La copy professionale combina strategia, psicologia e SEO. Un copywriter capisce la tua audience e scrive testi persuasivi. Keyword strategiche ti rendono visibile.',
      ],
      lead: 'Le aziende che fanno outsourcing copywriting ottengono:',
      bullets: [
        'Testi che convertono grazie a trigger psicologici',
        'Contenuti che risuonano con la target audience',
        'Focus sul core mentre i professionisti gestiscono i testi',
      ],
    },
    niblah: {
      title: {
        prefix: 'Perche',
        highlight: 'outsourcing copywriting',
        suffix: 'con Niblah?',
      },
      subtitle:
        'Con Niblah hai piu di semplici parole. I nostri copywriter pensano strategicamente e puntano ai risultati.',
      cards: [
        {
          title: 'Approccio orientato ai risultati',
          description:
            'Ogni parola e scritta per raggiungere obiettivi di conversione e generare revenue.',
        },
        {
          title: 'Expertise di audience',
          description:
            'Partiamo da una ricerca profonda per creare testi che costruiscono fiducia.',
        },
        {
          title: 'Approccio marketing integrato',
          description:
            'Copywriter, SEO, SEA e CRO lavorano insieme per testi che rankano e convertono.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Cos e',
        highlight: 'la copywriting',
        suffix: 'esattamente?',
      },
      paragraphs: [
        'La copywriting e l arte di scrivere testi commerciali persuasivi con un obiettivo: conversione. La differenza rispetto al contenuto standard? E strategica.',
        'Una copy efficace richiede comprensione dei clienti: bisogni, obiezioni, motivazioni. Questo porta piu traffico e conversioni.',
        'I nostri copywriter producono SEO, landing page, email, annunci e whitepaper per i tuoi obiettivi.',
      ],
    },
    caseStudies: {
      title: {
        prefix: 'Questi clienti',
        highlight: 'ci hanno scelto',
        suffix: '',
      },
      subtitle: 'Risultati concreti da aziende che fanno outsourcing copywriting',
      items: [
        {
          initials: 'VN',
          company: 'VitaNova Health',
          label: 'Copywriting | SEO',
          description: 'Contenuti del sito riscritti con focus conversione',
          stats: [
            { value: '215%', label: 'piu traffico organico' },
            { value: '3.8x', label: 'tasso conversione piu alto' },
            { value: '142%', label: 'piu richieste' },
          ],
        },
        {
          initials: 'BT',
          company: 'BeautyTrend',
          label: 'Copywriting | Content | Social',
          description: 'Produzione mensile di contenuti per blog e social',
          stats: [
            { value: '87%', label: 'engagement piu alto' },
            { value: '4.2x', label: 'piu lead' },
            { value: '168%', label: 'ROI sui contenuti' },
          ],
        },
      ],
    },
    benefits: {
      title: {
        prefix: 'Outsourcing copywriting:',
        highlight: 'ecco cosa ottieni',
        suffix: '',
      },
      intro:
        'Perche investire nella copy professionale? Perche testi che convertono impattano il fatturato. Vantaggi:',
      items: [
        {
          title: 'Impatto conversione misurabile.',
          description:
            'Copywriter combinano psicologia e SEO per testi che rankano e convincono.',
        },
        {
          title: 'Targeting strategico.',
          description:
            'La ricerca crea testi che parlano davvero al target.',
        },
        {
          title: 'Piu capacita per crescere.',
          description:
            'Tu ti concentri sulla strategia mentre i professionisti scrivono.',
        },
      ],
    },
    testimonials: {
      title: {
        prefix: 'Cosa dicono',
        highlight: 'i nostri clienti',
        suffix: '',
      },
      subtitle: 'Il valore della relazione conta piu della transazione.',
      items: [
        {
          quote:
            'I testi di Niblah convertono. Il copywriter capisce la nostra audience. Risultato: piu richieste e piu fatturato.',
          name: 'Sophie Janssen',
        },
        {
          quote:
            'Outsourcing copywriting e stata la decisione migliore. Testi pro, migliori ranking e conversioni.',
          name: 'Marco van der Berg',
        },
        {
          quote:
            'Finalmente testi che vendono. Il copywriter ha trasformato il nostro sito.',
          name: 'Lisa Vermeulen',
        },
      ],
      ratingLabel: 'Abbiamo 4.9 su Google da 143 recensioni',
    },
    contentTypes: {
      title: {
        prefix: 'Cosa fa un copywriter da Niblah:',
        highlight: 'i testi che scriviamo',
        suffix: '',
      },
      subtitle:
        'Dai testi SEO agli annunci di lavoro: copriamo tutti i formati.',
      items: [
        {
          title: 'Testi SEO',
          description:
            'Content SEO per crescita organica. Scriviamo testi che rankano e convertono.',
        },
        {
          title: 'Testi web persuasivi',
          description:
            'Scriviamo pagine che guidano all azione, dalla homepage alle pagine servizi.',
        },
        {
          title: 'Annunci di lavoro',
          description:
            'Scriviamo annunci che attraggono i candidati giusti.',
        },
        {
          title: 'Testi email',
          description:
            'Email che vengono aperte, cliccate e convertono.',
        },
        {
          title: 'Whitepaper',
          description:
            'Whitepaper che mostrano expertise e generano lead.',
        },
        {
          title: 'Testi pubblicitari (SEA e social)',
          description:
            'Copy per Google, Facebook, Instagram e LinkedIn che genera clic e conversioni.',
        },
      ],
    },
    seoWriting: {
      title: {
        prefix: 'Come scrivere',
        highlight: 'testi SEO efficaci?',
        suffix: '',
      },
      intro:
        'SEO content unisce tecnica e copy. Le keyword strategiche sono fondamentali. Il nostro processo:',
      steps: [
        {
          number: '1',
          text: 'Analisi contenuti: identifichiamo cosa rafforza le posizioni organiche.',
        },
        {
          number: '2',
          text: 'Keyword research: troviamo termini con volume e intent.',
        },
        {
          number: '3',
          text: 'Copywriting strategico: integrazione naturale delle keyword.',
        },
        {
          number: '4',
          text: 'Review e ajuste: feedback per allineamento brand e obiettivi.',
        },
        {
          number: '5',
          text: 'Pubblicazione e tracking: monitoriamo performance e ottimizziamo.',
        },
      ],
      cta: {
        label: 'Richiedi una growth scan',
        link: '/contact',
      },
    },
    faq: {
      title: {
        prefix: 'Domande',
        highlight: 'frequenti',
        suffix: '',
      },
      items: [
        {
          question: 'Siete un agenzia di copywriting?',
          answer:
            'Siamo una agenzia marketing full service con copywriting come core. Team con copywriter, SEO, ads e CRO.',
        },
        {
          question: 'Quali sono i costi dei copywriter?',
          answer:
            'I costi dipendono da scope e complessita. Forniamo un preventivo trasparente dopo analisi.',
        },
        {
          question: 'Cosa porta outsourcing copywriting?',
          answer:
            'Maggiore visibilita, traffico qualificato e conversioni piu alte.',
        },
        {
          question: 'Perche fare outsourcing copywriting?',
          answer:
            'Servono competenze di psicologia, persuasione e SEO. Outsourcing da accesso immediato.',
        },
        {
          question: 'Perche Niblah?',
          answer:
            'Il copywriter collabora con SEO, ads e data per una strategia integrata.',
        },
        {
          question: 'Posso usare solo ChatGPT?',
          answer:
            'AI aiuta ma manca di strategia e brand voice. I nostri copywriter aggiungono il livello decisivo.',
        },
      ],
    },
  },
};

export function getSEOCopywritingPageCopy(locale) {
  return getLocaleCopy(copy, locale);
}
