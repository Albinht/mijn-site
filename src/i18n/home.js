import { getLocaleCopy } from './utils';

const copy = {
  en: {
    metadata: {
      title: 'Outsource online marketing? 30+ years of experience in one family | Niblah',
      description:
        'Boutique marketing agency with personal service. Direct contact with your specialist, no long wait times. Full-service: SEO, Google Ads, websites & marketing automation. Save 25% vs large agencies.',
      keywords:
        'outsource online marketing, marketing agency, SEO specialist, Google Ads specialist, website development, marketing automation, boutique marketing agency, personal service',
      openGraph: {
        title: 'Outsource online marketing? 30+ years of experience in one family | Niblah',
        description:
          'Boutique marketing agency with personal service. Direct contact with your specialist. Full-service: SEO, Google Ads, websites & marketing automation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      titleLine1: 'Outsource online marketing?',
      titleLine2: '30+ years of experience combined in one family',
      subtitle:
        'Want to work with a small team that gets things done with focus? Click the button below and see if your business qualifies!',
      cta: 'Start your project',
    },
    featureColumns: [
      {
        title: 'Development & Websites',
        description:
          'Shopify & WordPress development, custom themes, platform migrations, integrations, and app development for your online success.',
        button: 'View development services',
        imageAlt: 'Website Development',
      },
      {
        title: 'SEO Services',
        description:
          'Technical SEO, link building, content optimization, local SEO, and complete SEO audits for higher rankings and more traffic.',
        button: 'View SEO services',
        imageAlt: 'SEO Services',
      },
      {
        title: 'Google Ads (SEA)',
        description:
          'Search campaigns, Shopping Ads, display advertising, remarketing, and campaign optimization for maximum ROI and conversions.',
        button: 'View SEA services',
        imageAlt: 'Google Ads (SEA)',
      },
      {
        title: 'Marketing Automation',
        description:
          'Email marketing with Klaviyo, marketing automations, CRM integrations, analytics and reporting for smart customer communication.',
        button: 'View automation services',
        imageAlt: 'Marketing Automation',
      },
    ],
    stats: {
      heading: 'Discover why we are the best choice',
      description:
        'The marketing agency that delivers more traffic, higher conversions, and measurable results for your online success.',
      items: [
        { value: 'Up to 300% more', label: 'organic traffic for our clients' },
        { value: '30+ years of experience', label: 'combined in one family' },
        { value: '100+ companies', label: 'helped with online growth' },
        { value: 'Personal approach', label: 'small team, big results' },
      ],
    },
    services: {
      heading: 'Our marketing services for your online success',
      cards: [
        {
          title: 'Is your website ready for more conversions?',
          description:
            'A modern, fast website is the foundation of online success. We build Shopify and WordPress websites that convert and scale with your growth.',
          linkLabel: 'View development',
          imageAlt: 'Website Development',
        },
        {
          title: 'Want to rank higher in Google?',
          description:
            'With our SEO services you reach higher rankings, more organic traffic, and new customers. Technical SEO, link building and content optimization.',
          linkLabel: 'Explore SEO services',
          imageAlt: 'SEO Services',
        },
        {
          title: 'Instant results with Google Ads',
          description:
            'Reach your audience at the right moment. We optimize campaigns for maximum ROI and conversions with Search, Shopping, and Display Ads.',
          linkLabel: 'View SEA services',
          imageAlt: 'Google Ads',
        },
        {
          title: 'Automate your marketing and grow',
          description:
            'Send personalized campaigns via email with Klaviyo. Increase revenue and customer loyalty with smart marketing automations.',
          linkLabel: 'View automation',
          imageAlt: 'Marketing Automation',
        },
      ],
    },
    consult: {
      title: 'Book a free consultation and see what we can do for you',
      description:
        'One of our specialists is happy to help you reach your online goals. We take the time to discuss your situation and define concrete steps.',
      linkLabel: 'Schedule your free consultation',
      imageAlt: 'Free SEO Consultation',
    },
    leadSection: {
      pills: {
        primary: 'Try it for free',
        secondaryBold: 'Save 25%',
        secondaryRest: 'vs big agencies',
        secondaryShort: 'vs agencies',
      },
      title: {
        prefix: 'Get to know our',
        highlight: 'marketing services',
        suffix: 'for free',
      },
      description:
        'Find out why clients are firing their marketing agencies and choosing a boutique agency that can deliver full-service with a direct point of contact. Know who you are working with.',
      featuresLeft: [
        'Direct contact with your specialist',
        '30+ years of experience in one team',
        'Full-service under one roof',
      ],
      featuresRight: [
        'No long waiting times',
        'Transparent reporting',
        'Personal approach',
      ],
      ctaLabel: 'Discover our services',
    },
  },
  nl: {
    metadata: {
      title: 'Online marketing uitbesteden? 30+ jaar aan ervaring in een familie! | Niblah',
      description:
        'Boutique marketing bureau met persoonlijke service. Direct contact met je specialist, geen lange wachttijden. Allround service: SEO, Google Ads, websites & marketing automation. Bespaar 25% t.o.v. grote bureaus.',
      keywords:
        'online marketing uitbesteden, marketing bureau, SEO specialist, Google Ads specialist, website ontwikkeling, marketing automation, boutique marketing bureau, persoonlijke service',
      openGraph: {
        title: 'Online marketing uitbesteden? 30+ jaar ervaring in een familie | Niblah',
        description:
          'Boutique marketing bureau met persoonlijke service. Direct contact met je specialist. Allround service: SEO, Google Ads, websites & marketing automation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      titleLine1: 'Online marketing uitbesteden?',
      titleLine2: '30+ jaar aan ervaring gebundeld in een familie',
      subtitle:
        'Wil je samenwerken met een klein team dat doelgericht aan de slag gaat om jouw wensen te realiseren? Klik dan op de knop hieronder en kijk of je bedrijf in aanmerking komt!',
      cta: 'Start uw project',
    },
    featureColumns: [
      {
        title: 'Development & Websites',
        description:
          "Shopify & WordPress development, custom thema's, platform migraties, integraties en app ontwikkeling voor uw online succes.",
        button: 'Bekijk development services',
        imageAlt: 'Website Development',
      },
      {
        title: 'SEO Services',
        description:
          'Technische SEO, linkbuilding, content optimalisatie, local SEO en complete SEO audits voor hogere rankings en meer traffic.',
        button: 'Bekijk SEO services',
        imageAlt: 'SEO Services',
      },
      {
        title: 'Google Ads (SEA)',
        description:
          'Search campagnes, Shopping Ads, Display advertising, remarketing en campagne optimalisatie voor maximale ROI en conversies.',
        button: 'Bekijk SEA services',
        imageAlt: 'Google Ads (SEA)',
      },
      {
        title: 'Marketing Automation',
        description:
          'Email marketing met Klaviyo, marketing automations, CRM integraties, analytics en rapportage voor slimme klantcommunicatie.',
        button: 'Bekijk automation services',
        imageAlt: 'Marketing Automation',
      },
    ],
    stats: {
      heading: 'Ontdek waarom we de beste keuze zijn',
      description:
        'Het marketing bureau dat meer traffic, hogere conversies en meetbare resultaten levert voor jouw online succes.',
      items: [
        { value: 'Tot 300% meer', label: 'organisch verkeer bij onze klanten' },
        { value: '30+ jaar ervaring', label: 'gebundeld in een familie' },
        { value: '100+ bedrijven', label: 'geholpen met online groei' },
        { value: 'Persoonlijke aanpak', label: 'klein team, grote resultaten' },
      ],
    },
    services: {
      heading: 'Onze marketing services voor jouw online succes',
      cards: [
        {
          title: 'Is jouw website klaar voor meer conversies?',
          description:
            'Een moderne, snelle website is de basis van online succes. Wij bouwen Shopify en WordPress websites die converteren en schalen met jouw groei.',
          linkLabel: 'Bekijk development',
          imageAlt: 'Website Development',
        },
        {
          title: 'Wil je hoger ranken in Google?',
          description:
            'Met onze SEO diensten bereik je hogere rankings, meer organisch verkeer en nieuwe klanten. Technische SEO, linkbuilding en content optimalisatie.',
          linkLabel: 'Ontdek SEO services',
          imageAlt: 'SEO Services',
        },
        {
          title: 'Directe resultaten met Google Ads',
          description:
            'Bereik je doelgroep op het juiste moment. Wij optimaliseren campagnes voor maximale ROI en conversies met Search, Shopping en Display Ads.',
          linkLabel: 'Bekijk SEA services',
          imageAlt: 'Google Ads',
        },
        {
          title: 'Automatiseer je marketing en groei',
          description:
            'Verstuur gepersonaliseerde campagnes via email met Klaviyo. Verhoog je omzet en klantloyaliteit met slimme marketing automations.',
          linkLabel: 'Bekijk automation',
          imageAlt: 'Marketing Automation',
        },
      ],
    },
    consult: {
      title: 'Boek een gratis consult en bekijk wat wij voor jou kunnen betekenen',
      description:
        'Een van onze specialisten helpt je graag verder om jouw online doelen te bereiken. We nemen de tijd om jouw situatie te bespreken en concrete stappen te bepalen.',
      linkLabel: 'Plan je gratis consult',
      imageAlt: 'Gratis SEO Consult',
    },
    leadSection: {
      pills: {
        primary: 'Probeer het gratis',
        secondaryBold: 'Bespaar 25%',
        secondaryRest: 't.o.v. grote bureaus',
        secondaryShort: 'vs bureaus',
      },
      title: {
        prefix: 'Maak gratis kennis met onze',
        highlight: 'marketingdiensten',
        suffix: '',
      },
      description:
        'Kom erachter waarom klanten massaal hun marketingbureaus ontslaan en kiezen voor een boutique bureau dat in staat is allround service te bieden met een direct contactpersoon. Weet met wie je te maken hebt.',
      featuresLeft: [
        'Direct contact met je specialist',
        '30+ jaar ervaring in een team',
        'Allround service onder een dak',
      ],
      featuresRight: [
        'Geen lange wachttijden',
        'Transparante rapportages',
        'Persoonlijke aanpak',
      ],
      ctaLabel: 'Ontdek onze diensten',
    },
  },
  de: {
    metadata: {
      title: 'Online-Marketing auslagern? 30+ Jahre Erfahrung in einer Familie | Niblah',
      description:
        'Boutique-Marketingagentur mit persoenlichem Service. Direkter Kontakt zu deinem Spezialisten, keine langen Wartezeiten. Full-Service: SEO, Google Ads, Websites & Marketing Automation. Spare 25% gegenueber grossen Agenturen.',
      keywords:
        'online marketing auslagern, marketing agentur, SEO spezialist, Google Ads spezialist, website entwicklung, marketing automation, boutique marketingagentur, persoenlicher service',
      openGraph: {
        title: 'Online-Marketing auslagern? 30+ Jahre Erfahrung in einer Familie | Niblah',
        description:
          'Boutique-Marketingagentur mit persoenlichem Service. Direkter Kontakt zu deinem Spezialisten. Full-Service: SEO, Google Ads, Websites & Marketing Automation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      titleLine1: 'Online-Marketing auslagern?',
      titleLine2: '30+ Jahre Erfahrung gebuendelt in einer Familie',
      subtitle:
        'Moechtest du mit einem kleinen Team zusammenarbeiten, das zielgerichtet deine Wuensche umsetzt? Klick auf den Button unten und sieh, ob dein Unternehmen in Frage kommt!',
      cta: 'Starte dein Projekt',
    },
    featureColumns: [
      {
        title: 'Entwicklung & Websites',
        description:
          'Shopify- & WordPress-Entwicklung, Custom Themes, Plattform-Migrationen, Integrationen und App-Entwicklung fuer deinen Online-Erfolg.',
        button: 'Entwicklung ansehen',
        imageAlt: 'Website Entwicklung',
      },
      {
        title: 'SEO Services',
        description:
          'Technisches SEO, Linkbuilding, Content-Optimierung, Local SEO und komplette SEO-Audits fuer bessere Rankings und mehr Traffic.',
        button: 'SEO Services ansehen',
        imageAlt: 'SEO Services',
      },
      {
        title: 'Google Ads (SEA)',
        description:
          'Search-Kampagnen, Shopping Ads, Display-Werbung, Remarketing und Kampagnen-Optimierung fuer maximale ROI und Conversions.',
        button: 'SEA Services ansehen',
        imageAlt: 'Google Ads (SEA)',
      },
      {
        title: 'Marketing Automation',
        description:
          'Email-Marketing mit Klaviyo, Marketing-Automationen, CRM-Integrationen, Analytics und Reporting fuer smarte Kundenkommunikation.',
        button: 'Automation ansehen',
        imageAlt: 'Marketing Automation',
      },
    ],
    stats: {
      heading: 'Entdecke, warum wir die beste Wahl sind',
      description:
        'Die Marketingagentur, die mehr Traffic, hoehere Conversions und messbare Ergebnisse fuer deinen Online-Erfolg liefert.',
      items: [
        { value: 'Bis zu 300% mehr', label: 'organischer Traffic bei unseren Kunden' },
        { value: '30+ Jahre Erfahrung', label: 'gebuendelt in einer Familie' },
        { value: '100+ Unternehmen', label: 'bei Online-Wachstum geholfen' },
        { value: 'Persoenlicher Ansatz', label: 'kleines Team, grosse Ergebnisse' },
      ],
    },
    services: {
      heading: 'Unsere Marketing-Services fuer deinen Online-Erfolg',
      cards: [
        {
          title: 'Ist deine Website bereit fuer mehr Conversions?',
          description:
            'Eine moderne, schnelle Website ist die Basis fuer Online-Erfolg. Wir bauen Shopify- und WordPress-Websites, die konvertieren und mit deinem Wachstum skalieren.',
          linkLabel: 'Entwicklung ansehen',
          imageAlt: 'Website Entwicklung',
        },
        {
          title: 'Willst du in Google hoeher ranken?',
          description:
            'Mit unseren SEO-Services erreichst du bessere Rankings, mehr organischen Traffic und neue Kunden. Technisches SEO, Linkbuilding und Content-Optimierung.',
          linkLabel: 'SEO Services entdecken',
          imageAlt: 'SEO Services',
        },
        {
          title: 'Direkte Ergebnisse mit Google Ads',
          description:
            'Erreiche deine Zielgruppe zum richtigen Zeitpunkt. Wir optimieren Kampagnen fuer maximale ROI und Conversions mit Search, Shopping und Display Ads.',
          linkLabel: 'SEA Services ansehen',
          imageAlt: 'Google Ads',
        },
        {
          title: 'Automatisiere dein Marketing und wachse',
          description:
            'Sende personalisierte Kampagnen per Email mit Klaviyo. Steigere Umsatz und Kundenbindung mit smarten Marketing-Automationen.',
          linkLabel: 'Automation ansehen',
          imageAlt: 'Marketing Automation',
        },
      ],
    },
    consult: {
      title: 'Buche ein kostenloses Beratungsgespraech und sieh, was wir fuer dich tun koennen',
      description:
        'Einer unserer Spezialisten hilft dir gern, deine Online-Ziele zu erreichen. Wir nehmen uns Zeit, deine Situation zu besprechen und konkrete Schritte festzulegen.',
      linkLabel: 'Kostenloses Gespraech planen',
      imageAlt: 'Kostenloses SEO Beratungsgespraech',
    },
    leadSection: {
      pills: {
        primary: 'Kostenlos testen',
        secondaryBold: 'Spare 25%',
        secondaryRest: 'gegenueber grossen Agenturen',
        secondaryShort: 'vs Agenturen',
      },
      title: {
        prefix: 'Lerne unsere',
        highlight: 'Marketing-Services',
        suffix: 'kostenlos kennen',
      },
      description:
        'Finde heraus, warum Kunden ihre Marketingagenturen kuendigen und sich fuer eine Boutique-Agentur entscheiden, die Full-Service mit direktem Ansprechpartner bietet. Wisse, mit wem du arbeitest.',
      featuresLeft: [
        'Direkter Kontakt mit deinem Spezialisten',
        '30+ Jahre Erfahrung in einem Team',
        'Full-Service unter einem Dach',
      ],
      featuresRight: [
        'Keine langen Wartezeiten',
        'Transparente Reportings',
        'Persoenlicher Ansatz',
      ],
      ctaLabel: 'Unsere Services entdecken',
    },
  },
  sv: {
    metadata: {
      title: 'Outsourca online marketing? 30+ ars erfarenhet i en familj | Niblah',
      description:
        'Boutique marknadsforingsbyra med personlig service. Direkt kontakt med din specialist, inga lange vantetider. Fullservice: SEO, Google Ads, webbplatser & marketing automation. Spara 25% jamfort med stora byraer.',
      keywords:
        'outsourca online marketing, marknadsforingsbyra, SEO specialist, Google Ads specialist, webbutveckling, marketing automation, boutique byra, personlig service',
      openGraph: {
        title: 'Outsourca online marketing? 30+ ars erfarenhet i en familj | Niblah',
        description:
          'Boutique marknadsforingsbyra med personlig service. Direkt kontakt med din specialist. Fullservice: SEO, Google Ads, webbplatser & marketing automation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      titleLine1: 'Outsourca online marketing?',
      titleLine2: '30+ ars erfarenhet samlad i en familj',
      subtitle:
        'Vill du samarbeta med ett litet team som fokuserat arbetar for att uppfylla dina onskemal? Klicka pa knappen nedan och se om ditt foretag kvalificerar sig!',
      cta: 'Starta ditt projekt',
    },
    featureColumns: [
      {
        title: 'Utveckling & Webbplatser',
        description:
          'Shopify- och WordPress-utveckling, egna teman, plattformsflyttar, integrationer och apputveckling for din onlineframgang.',
        button: 'Se utvecklingstjanster',
        imageAlt: 'Webbplatsutveckling',
      },
      {
        title: 'SEO-tjanster',
        description:
          'Teknisk SEO, lankbygge, innehallsoptimering, lokal SEO och fullstandiga SEO-audits for battre rankingar och mer trafik.',
        button: 'Se SEO-tjanster',
        imageAlt: 'SEO-tjanster',
      },
      {
        title: 'Google Ads (SEA)',
        description:
          'Search-kampanjer, Shopping Ads, displayannonsering, remarketing och kampanjoptimering for maximal ROI och konverteringar.',
        button: 'Se SEA-tjanster',
        imageAlt: 'Google Ads (SEA)',
      },
      {
        title: 'Marknadsforingsautomatisering',
        description:
          'Emailmarknadsforing med Klaviyo, marketing automations, CRM-integrationer, analytics och rapportering for smart kundkommunikation.',
        button: 'Se automationstjanster',
        imageAlt: 'Marknadsforingsautomatisering',
      },
    ],
    stats: {
      heading: 'Upptack varfor vi ar det basta valet',
      description:
        'Marknadsforingsbyran som levererar mer trafik, hogre konverteringar och matbara resultat for din onlineframgang.',
      items: [
        { value: 'Upp till 300% mer', label: 'organisk trafik hos vara kunder' },
        { value: '30+ ars erfarenhet', label: 'samlad i en familj' },
        { value: '100+ foretag', label: 'hjalpta med online tillvaxt' },
        { value: 'Personligt angreppssatt', label: 'litet team, stora resultat' },
      ],
    },
    services: {
      heading: 'Vara marknadsforingstjanster for din onlineframgang',
      cards: [
        {
          title: 'Ar din webbplats redo for fler konverteringar?',
          description:
            'En modern, snabb webbplats ar grunden for onlineframgang. Vi bygger Shopify- och WordPress-webbplatser som konverterar och skalar med din tillvaxt.',
          linkLabel: 'Se utveckling',
          imageAlt: 'Webbplatsutveckling',
        },
        {
          title: 'Vill du ranka hogre pa Google?',
          description:
            'Med vara SEO-tjanster far du battre rankingar, mer organisk trafik och nya kunder. Teknisk SEO, lankbygge och innehallsoptimering.',
          linkLabel: 'Upptack SEO-tjanster',
          imageAlt: 'SEO-tjanster',
        },
        {
          title: 'Direkta resultat med Google Ads',
          description:
            'Na din malgrupp vid ratt tillfalle. Vi optimerar kampanjer for maximal ROI och konverteringar med Search, Shopping och Display Ads.',
          linkLabel: 'Se SEA-tjanster',
          imageAlt: 'Google Ads',
        },
        {
          title: 'Automatisera din marknadsforing och vax',
          description:
            'Skicka personliga kampanjer via email med Klaviyo. Oka omsattning och kundlojalitet med smarta marketing automations.',
          linkLabel: 'Se automation',
          imageAlt: 'Marknadsforingsautomatisering',
        },
      ],
    },
    consult: {
      title: 'Boka en gratis konsultation och se vad vi kan gora for dig',
      description:
        'En av vara specialister hjalper dig garna att na dina onlinemal. Vi tar tid att diskutera din situation och bestamma konkreta steg.',
      linkLabel: 'Boka gratis konsultation',
      imageAlt: 'Gratis SEO konsultation',
    },
    leadSection: {
      pills: {
        primary: 'Prova gratis',
        secondaryBold: 'Spara 25%',
        secondaryRest: 'jamfort med stora byraer',
        secondaryShort: 'vs byraer',
      },
      title: {
        prefix: 'Lar kanna vara',
        highlight: 'marknadsforingstjanster',
        suffix: 'gratis',
      },
      description:
        'Ta reda pa varfor kunder sager upp sina marknadsforingsbyraer och valjer en boutique-byra som kan leverera fullservice med en direkt kontaktperson. Vet vem du arbetar med.',
      featuresLeft: [
        'Direkt kontakt med din specialist',
        '30+ ars erfarenhet i ett team',
        'Fullservice under ett tak',
      ],
      featuresRight: [
        'Inga lange vantetider',
        'Transparent rapportering',
        'Personligt bemotande',
      ],
      ctaLabel: 'Upptack vara tjanster',
    },
  },
  da: {
    metadata: {
      title: 'Outsource online marketing? 30+ ars erfaring i en familie | Niblah',
      description:
        'Boutique marketingbureau med personlig service. Direkte kontakt med din specialist, ingen lange ventetider. Full-service: SEO, Google Ads, websites & marketing automation. Spar 25% i forhold til store bureauer.',
      keywords:
        'outsource online marketing, marketingbureau, SEO specialist, Google Ads specialist, webudvikling, marketing automation, boutique bureau, personlig service',
      openGraph: {
        title: 'Outsource online marketing? 30+ ars erfaring i en familie | Niblah',
        description:
          'Boutique marketingbureau med personlig service. Direkte kontakt med din specialist. Full-service: SEO, Google Ads, websites & marketing automation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      titleLine1: 'Outsource online marketing?',
      titleLine2: '30+ ars erfaring samlet i en familie',
      subtitle:
        'Vil du samarbejde med et lille team der fokuseret arbejder pa at opfylde dine behov? Klik pa knappen nedenfor og se om din virksomhed er i betragtning!',
      cta: 'Start dit projekt',
    },
    featureColumns: [
      {
        title: 'Udvikling & Websites',
        description:
          'Shopify- og WordPress-udvikling, custom temaer, platformsmigrationer, integrationer og app-udvikling for din online succes.',
        button: 'Se udvikling',
        imageAlt: 'Website udvikling',
      },
      {
        title: 'SEO-services',
        description:
          'Teknisk SEO, linkbuilding, content-optimering, lokal SEO og komplette SEO-audits for bedre rankings og mere trafik.',
        button: 'Se SEO services',
        imageAlt: 'SEO-services',
      },
      {
        title: 'Google Ads (SEA)',
        description:
          'Search-kampagner, Shopping Ads, displayannoncering, remarketing og kampagneoptimering for maksimal ROI og konverteringer.',
        button: 'Se SEA services',
        imageAlt: 'Google Ads (SEA)',
      },
      {
        title: 'Marketing Automation',
        description:
          'Email marketing med Klaviyo, marketing automations, CRM integrationer, analytics og rapportering for smart kundekommunikation.',
        button: 'Se automation services',
        imageAlt: 'Marketing Automation',
      },
    ],
    stats: {
      heading: 'Opdag hvorfor vi er det bedste valg',
      description:
        'Marketingbureauet der leverer mere trafik, hojere konverteringer og malbare resultater for din online succes.',
      items: [
        { value: 'Op til 300% mere', label: 'organisk trafik hos vores kunder' },
        { value: '30+ ars erfaring', label: 'samlet i en familie' },
        { value: '100+ virksomheder', label: 'hjalpet med online vaekst' },
        { value: 'Personlig tilgang', label: 'lille team, store resultater' },
      ],
    },
    services: {
      heading: 'Vores marketingservices til din online succes',
      cards: [
        {
          title: 'Er din hjemmeside klar til flere konverteringer?',
          description:
            'En moderne, hurtig hjemmeside er fundamentet for online succes. Vi bygger Shopify- og WordPress-hjemmesider der konverterer og skalerer med din vaekst.',
          linkLabel: 'Se udvikling',
          imageAlt: 'Website udvikling',
        },
        {
          title: 'Vil du ranke hojere pa Google?',
          description:
            'Med vores SEO-services far du bedre rankings, mere organisk trafik og nye kunder. Teknisk SEO, linkbuilding og content-optimering.',
          linkLabel: 'Udforsk SEO services',
          imageAlt: 'SEO-services',
        },
        {
          title: 'Direkte resultater med Google Ads',
          description:
            'Na din maalgruppe pa det rette tidspunkt. Vi optimerer kampagner for maksimal ROI og konverteringer med Search, Shopping og Display Ads.',
          linkLabel: 'Se SEA services',
          imageAlt: 'Google Ads',
        },
        {
          title: 'Automatiser din marketing og voks',
          description:
            'Send personlige kampagner via email med Klaviyo. Oge omsaetning og kundeloyalitet med smarte marketing automations.',
          linkLabel: 'Se automation',
          imageAlt: 'Marketing Automation',
        },
      ],
    },
    consult: {
      title: 'Book en gratis konsultation og se hvad vi kan gore for dig',
      description:
        'En af vores specialister hjelper dig gerne med at na dine online mal. Vi tager os tid til at drofte din situation og fastsaette konkrete skridt.',
      linkLabel: 'Book din gratis konsultation',
      imageAlt: 'Gratis SEO konsultation',
    },
    leadSection: {
      pills: {
        primary: 'Proev gratis',
        secondaryBold: 'Spar 25%',
        secondaryRest: 'ifht. store bureauer',
        secondaryShort: 'vs bureauer',
      },
      title: {
        prefix: 'Fa gratis indblik i vores',
        highlight: 'marketingservices',
        suffix: '',
      },
      description:
        'Find ud af hvorfor kunder opsiger deres marketingbureauer og vaelger et boutique-bureau der kan levere full-service med en direkte kontaktperson. Ved hvem du arbejder med.',
      featuresLeft: [
        'Direkte kontakt med din specialist',
        '30+ ars erfaring i et team',
        'Full-service under et tag',
      ],
      featuresRight: [
        'Ingen lange ventetider',
        'Gennemsigtige rapporter',
        'Personlig tilgang',
      ],
      ctaLabel: 'Se vores services',
    },
  },
  fr: {
    metadata: {
      title: 'Externaliser le marketing en ligne ? 30+ ans d\'experience en famille | Niblah',
      description:
        'Agence marketing boutique avec service personnalise. Contact direct avec votre specialiste, pas d\'attente. Service complet : SEO, Google Ads, sites web et marketing automation. Economisez 25% par rapport aux grandes agences.',
      keywords:
        'externaliser marketing en ligne, agence marketing, specialiste SEO, specialiste Google Ads, developpement web, marketing automation, agence boutique, service personnalise',
      openGraph: {
        title: 'Externaliser le marketing en ligne ? 30+ ans d\'experience en famille | Niblah',
        description:
          'Agence marketing boutique avec service personnalise. Contact direct avec votre specialiste. Service complet : SEO, Google Ads, sites web et marketing automation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      titleLine1: 'Externaliser le marketing en ligne ?',
      titleLine2: '30+ ans d\'experience reunis dans une famille',
      subtitle:
        'Vous voulez travailler avec une petite equipe qui se met au travail pour realiser vos objectifs ? Cliquez sur le bouton ci-dessous et voyez si votre entreprise est eligible !',
      cta: 'Lancez votre projet',
    },
    featureColumns: [
      {
        title: 'Developpement & Sites web',
        description:
          'Developpement Shopify & WordPress, themes sur mesure, migrations de plateforme, integrations et developpement d\'apps pour votre succes en ligne.',
        button: 'Voir les services dev',
        imageAlt: 'Developpement site web',
      },
      {
        title: 'Services SEO',
        description:
          'SEO technique, netlinking, optimisation de contenu, SEO local et audits complets pour de meilleurs classements et plus de trafic.',
        button: 'Voir les services SEO',
        imageAlt: 'Services SEO',
      },
      {
        title: 'Google Ads (SEA)',
        description:
          'Campagnes Search, Shopping Ads, display, remarketing et optimisation pour un ROI et des conversions maximales.',
        button: 'Voir les services SEA',
        imageAlt: 'Google Ads (SEA)',
      },
      {
        title: 'Marketing Automation',
        description:
          'Email marketing avec Klaviyo, marketing automation, integrations CRM, analytics et reporting pour une communication client intelligente.',
        button: 'Voir les services automation',
        imageAlt: 'Marketing Automation',
      },
    ],
    stats: {
      heading: 'Decouvrez pourquoi nous sommes le meilleur choix',
      description:
        'L\'agence marketing qui apporte plus de trafic, de meilleures conversions et des resultats mesurables pour votre succes en ligne.',
      items: [
        { value: 'Jusqu\'a 300% de plus', label: 'de trafic organique pour nos clients' },
        { value: '30+ ans d\'experience', label: 'reunis dans une famille' },
        { value: '100+ entreprises', label: 'aidees pour leur croissance en ligne' },
        { value: 'Approche personnelle', label: 'petite equipe, grands resultats' },
      ],
    },
    services: {
      heading: 'Nos services marketing pour votre succes en ligne',
      cards: [
        {
          title: 'Votre site est-il pret pour plus de conversions ?',
          description:
            'Un site moderne et rapide est la base du succes en ligne. Nous construisons des sites Shopify et WordPress qui convertissent et evoluent avec votre croissance.',
          linkLabel: 'Voir le dev',
          imageAlt: 'Developpement site web',
        },
        {
          title: 'Vous voulez mieux vous positionner sur Google ?',
          description:
            'Avec nos services SEO, vous obtenez de meilleurs classements, plus de trafic organique et de nouveaux clients. SEO technique, netlinking et optimisation de contenu.',
          linkLabel: 'Decouvrir les services SEO',
          imageAlt: 'Services SEO',
        },
        {
          title: 'Des resultats immediats avec Google Ads',
          description:
            'Atteignez votre audience au bon moment. Nous optimisons les campagnes pour un ROI maximal avec Search, Shopping et Display Ads.',
          linkLabel: 'Voir les services SEA',
          imageAlt: 'Google Ads',
        },
        {
          title: 'Automatisez votre marketing et grandissez',
          description:
            'Envoyez des campagnes personnalisees par email avec Klaviyo. Augmentez votre chiffre d\'affaires et la fidelite client avec une automation intelligente.',
          linkLabel: 'Voir l\'automation',
          imageAlt: 'Marketing Automation',
        },
      ],
    },
    consult: {
      title: 'Reservez une consultation gratuite et voyez ce que nous pouvons faire pour vous',
      description:
        'Un de nos specialistes est la pour vous aider a atteindre vos objectifs en ligne. Nous prenons le temps d\'analyser votre situation et de definir des etapes concretes.',
      linkLabel: 'Planifier votre consultation gratuite',
      imageAlt: 'Consultation SEO gratuite',
    },
    leadSection: {
      pills: {
        primary: 'Essayez gratuitement',
        secondaryBold: 'Economisez 25%',
        secondaryRest: 'par rapport aux grandes agences',
        secondaryShort: 'vs agences',
      },
      title: {
        prefix: 'Decouvrez gratuitement nos',
        highlight: 'services marketing',
        suffix: '',
      },
      description:
        'Decouvrez pourquoi les clients quittent leurs agences marketing et choisissent une agence boutique capable d\'offrir un service complet avec un contact direct. Sachez avec qui vous travaillez.',
      featuresLeft: [
        'Contact direct avec votre specialiste',
        '30+ ans d\'experience dans une equipe',
        'Service complet sous un meme toit',
      ],
      featuresRight: [
        'Pas de longues attentes',
        'Reporting transparent',
        'Approche personnelle',
      ],
      ctaLabel: 'Decouvrir nos services',
    },
  },
  it: {
    metadata: {
      title: 'Esternalizzare il marketing online? 30+ anni di esperienza in famiglia | Niblah',
      description:
        'Agenzia di marketing boutique con servizio personale. Contatto diretto con il tuo specialista, niente lunghe attese. Full service: SEO, Google Ads, siti web e marketing automation. Risparmia il 25% rispetto alle grandi agenzie.',
      keywords:
        'esternalizzare marketing online, agenzia marketing, specialista SEO, specialista Google Ads, sviluppo sito web, marketing automation, agenzia boutique, servizio personale',
      openGraph: {
        title: 'Esternalizzare il marketing online? 30+ anni di esperienza in famiglia | Niblah',
        description:
          'Agenzia di marketing boutique con servizio personale. Contatto diretto con il tuo specialista. Full service: SEO, Google Ads, siti web e marketing automation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      titleLine1: 'Esternalizzare il marketing online?',
      titleLine2: '30+ anni di esperienza riuniti in una famiglia',
      subtitle:
        'Vuoi collaborare con un piccolo team che lavora in modo mirato per realizzare i tuoi obiettivi? Clicca sul pulsante qui sotto e verifica se la tua azienda e idonea!',
      cta: 'Avvia il tuo progetto',
    },
    featureColumns: [
      {
        title: 'Sviluppo & Siti web',
        description:
          'Sviluppo Shopify & WordPress, temi personalizzati, migrazioni di piattaforma, integrazioni e sviluppo app per il tuo successo online.',
        button: 'Vedi servizi sviluppo',
        imageAlt: 'Sviluppo sito web',
      },
      {
        title: 'Servizi SEO',
        description:
          'SEO tecnico, link building, ottimizzazione contenuti, SEO locale e audit completi per migliori ranking e piu traffico.',
        button: 'Vedi servizi SEO',
        imageAlt: 'Servizi SEO',
      },
      {
        title: 'Google Ads (SEA)',
        description:
          'Campagne Search, Shopping Ads, display, remarketing e ottimizzazione campagne per ROI e conversioni massime.',
        button: 'Vedi servizi SEA',
        imageAlt: 'Google Ads (SEA)',
      },
      {
        title: 'Marketing Automation',
        description:
          'Email marketing con Klaviyo, marketing automation, integrazioni CRM, analytics e report per una comunicazione cliente intelligente.',
        button: 'Vedi servizi automation',
        imageAlt: 'Marketing Automation',
      },
    ],
    stats: {
      heading: 'Scopri perche siamo la scelta migliore',
      description:
        "L'agenzia marketing che offre piu traffico, conversioni piu alte e risultati misurabili per il tuo successo online.",
      items: [
        { value: 'Fino al 300% in piu', label: 'di traffico organico per i nostri clienti' },
        { value: '30+ anni di esperienza', label: 'riuniti in una famiglia' },
        { value: '100+ aziende', label: 'aiutate a crescere online' },
        { value: 'Approccio personale', label: 'piccolo team, grandi risultati' },
      ],
    },
    services: {
      heading: 'I nostri servizi marketing per il tuo successo online',
      cards: [
        {
          title: 'Il tuo sito e pronto per piu conversioni?',
          description:
            'Un sito moderno e veloce e la base del successo online. Costruiamo siti Shopify e WordPress che convertono e scalano con la tua crescita.',
          linkLabel: 'Vedi sviluppo',
          imageAlt: 'Sviluppo sito web',
        },
        {
          title: 'Vuoi posizionarti piu in alto su Google?',
          description:
            'Con i nostri servizi SEO ottieni ranking migliori, piu traffico organico e nuovi clienti. SEO tecnico, link building e ottimizzazione contenuti.',
          linkLabel: 'Scopri servizi SEO',
          imageAlt: 'Servizi SEO',
        },
        {
          title: 'Risultati immediati con Google Ads',
          description:
            'Raggiungi il tuo pubblico al momento giusto. Ottimizziamo campagne per ROI e conversioni massime con Search, Shopping e Display Ads.',
          linkLabel: 'Vedi servizi SEA',
          imageAlt: 'Google Ads',
        },
        {
          title: 'Automatizza il marketing e cresci',
          description:
            'Invia campagne personalizzate via email con Klaviyo. Aumenta fatturato e fidelizzazione con marketing automation intelligente.',
          linkLabel: 'Vedi automation',
          imageAlt: 'Marketing Automation',
        },
      ],
    },
    consult: {
      title: 'Prenota una consulenza gratuita e scopri cosa possiamo fare per te',
      description:
        'Un nostro specialista e felice di aiutarti a raggiungere i tuoi obiettivi online. Ci prendiamo il tempo per discutere la tua situazione e definire passi concreti.',
      linkLabel: 'Prenota la tua consulenza gratuita',
      imageAlt: 'Consulenza SEO gratuita',
    },
    leadSection: {
      pills: {
        primary: 'Prova gratis',
        secondaryBold: 'Risparmia 25%',
        secondaryRest: 'rispetto alle grandi agenzie',
        secondaryShort: 'vs agenzie',
      },
      title: {
        prefix: 'Conosci gratis i nostri',
        highlight: 'servizi marketing',
        suffix: '',
      },
      description:
        "Scopri perche i clienti licenziano le loro agenzie marketing e scelgono un'agenzia boutique capace di offrire un servizio completo con un referente diretto. Sai con chi stai lavorando.",
      featuresLeft: [
        'Contatto diretto con il tuo specialista',
        '30+ anni di esperienza in un team',
        'Full service sotto lo stesso tetto',
      ],
      featuresRight: [
        'Nessuna lunga attesa',
        'Report trasparenti',
        'Approccio personale',
      ],
      ctaLabel: 'Scopri i nostri servizi',
    },
  },
};

export function getHomeCopy(locale) {
  return getLocaleCopy(copy, locale);
}
