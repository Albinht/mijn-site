import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'WordPress Integrations | Realworks, HRoffice & CRM | Niblah',
      description:
        'WordPress integrations to automate your business processes. Realworks, HRoffice, CRM and ERP connections tailored to your workflow. 30+ years of experience.',
      keywords:
        'wordpress integrations, realworks integration, hroffice integration, wordpress crm, wordpress api integration, wordpress connectors',
      openGraph: {
        title: 'WordPress Integrations | Automate Your Workflow | Niblah',
        description: 'Custom WordPress integrations with Realworks, HRoffice and many other systems.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS INTEGRATIONS',
      title: 'Connect WordPress to your business systems',
      description:
        'WordPress integrations such as Realworks and HRoffice help you automate your website and streamline operations. Niblah builds custom solutions that connect your WordPress site to external tools seamlessly—saving time, reducing manual tasks, and improving customer experience.',
      ctaText: 'Discuss your integration',
      ctaLink: '/contact',
      note: '* Custom API integrations for any system',
      image: '/wordpress-integrations.png',
      imageAlt: 'WordPress integrations visualization',
    },
    sections: {
      intro: {
        title: { prefix: 'What are', highlight: 'WordPress integrations', suffix: '?' },
        paragraphs: [
          'A WordPress integration is a technical connection between your website and other business systems. It allows different tools to communicate automatically—so your processes become faster and more reliable.',
          'Think of it as a digital bridge that continuously shares information between systems. This is especially valuable for organizations that process a lot of data every day and want to reduce manual work.',
          'With the right integrations you save time and lower the risk of errors—so you can focus on growth and customer satisfaction.',
        ],
        benefitsHeading: 'Benefits of WordPress integrations:',
        benefits: [
          'Automatic data synchronization',
          'No more double entry',
          'Fewer errors and inconsistencies',
          'Real-time data exchange',
          'Save hours of manual work every week',
          'Scalable for future growth',
        ],
      },
      systems: {
        title: { prefix: 'Which systems can you', highlight: 'connect', suffix: ' to WordPress?' },
        subtitle:
          'A WordPress website can be connected to many business systems to automate processes and work more efficiently.',
        cards: [
          {
            icon: '👥',
            title: 'CRM systems',
            paragraphs: [
              'CRM systems like Realworks and HubSpot help manage customer data and provide insights into relationships.',
              'Customer details, appointments and interactions sync automatically—reducing manual input and mistakes.',
            ],
          },
          {
            icon: '💼',
            title: 'HR systems',
            paragraphs: [
              'HR tools like HRoffice help you manage vacancies and applications efficiently.',
              'Job listings remain centrally managed and are published to your website automatically—no duplicate work.',
            ],
          },
          {
            icon: '⚙️',
            title: 'ERP systems',
            paragraphs: [
              'Connect WordPress to your ERP for integrated inventory management, purchasing and financial workflows.',
              'Real-time stock updates, automated order processing and full financial sync for WooCommerce.',
            ],
          },
          {
            icon: '💰',
            title: 'Accounting',
            paragraphs: [
              'Sync with Exact Online, Twinfield or Yuki for seamless bookkeeping.',
              'Invoices, orders and customer data flow automatically into your accounting package.',
            ],
          },
          {
            icon: '📧',
            title: 'Email marketing',
            paragraphs: [
              'Connect Mailchimp, ActiveCampaign or Klaviyo for automated email campaigns.',
              'Leads and customers are added to the right segments and lists automatically.',
            ],
          },
          {
            icon: '🔧',
            title: 'Custom APIs',
            paragraphs: [
              'We build integrations with any system that offers an API—from niche software to enterprise platforms.',
              'Custom solutions that match your exact workflow and business processes.',
            ],
          },
        ],
      },
      popular: {
        title: { prefix: 'Popular', highlight: 'WordPress integrations', suffix: '' },
        subtitle: 'These integrations are commonly requested and proven effective for many businesses.',
        cards: [
          {
            icon: '🏠',
            title: 'Realworks integration',
            description:
              'A Realworks integration keeps your appointments, projects and property listings in sync—ideal for real estate agencies and brokers.',
            bullets: [
              'Automatic property feed synchronization',
              'Real-time availability and price updates',
              'Central management of appointments and viewings',
              'Photos, floor plans and documents synced automatically',
            ],
            ctaText: 'Request Realworks integration',
            ctaLink: '/contact',
          },
          {
            icon: '💼',
            title: 'HRoffice integration',
            description:
              'With an HRoffice vacancy integration, HR processes become standardized—perfect for recruitment and staffing teams.',
            bullets: [
              'Automatic vacancy publishing on your website',
              'Applications directly into HRoffice',
              'Central management of vacancy data',
              'No more duplicate entry of job texts',
            ],
            ctaText: 'Request HRoffice integration',
            ctaLink: '/contact',
          },
        ],
      },
      efficiency: {
        title: { prefix: 'Efficiency and growth with', highlight: 'WordPress integrations', suffix: '' },
        paragraphs: [
          'By connecting these systems to your WordPress website, you automate key workflows and free up time to grow your business.',
          'We build custom integrations that fit your workflow and provide a reliable, future-proof connection.',
        ],
        buttonText: 'Optimize your workflow',
        buttonLink: '/contact',
      },
      custom: {
        title: { prefix: 'Custom integrations for your', highlight: 'business needs', suffix: '' },
        subtitle:
          'Every company is different. That’s why we deliver custom WordPress integrations tailored to your business requirements.',
        cards: [
          {
            icon: '🔧',
            title: 'Custom solutions',
            description:
              'Whether you need a simple connection or a complex integration, we deliver a secure solution that fits your systems.',
          },
          {
            icon: '🚀',
            title: 'Future-proof',
            description:
              'We build scalable integrations and modules that grow with your business and stay maintainable over time.',
          },
          {
            icon: '💡',
            title: 'Expert advice',
            description:
              'Our experts help you choose the right approach and deliver an integration that takes your website to the next level.',
          },
        ],
        question: 'Do you have specific requirements or want to know which integration fits your business best?',
        linkText: 'Contact us for an advice call',
        linkLink: '/contact',
      },
      related: {
        title: { prefix: 'More WordPress', highlight: 'services', suffix: '' },
        subtitle: 'Explore our other WordPress services for complete website solutions',
        moreInfoLabel: 'Learn more →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress website', description: 'Have your complete WordPress website built' },
          { href: '/wordpress/maatwerk', title: 'WordPress custom work', description: 'Custom plugins and tailored functionality' },
          { href: '/wordpress/thema', title: 'WordPress theme', description: 'Launch quickly and cost-efficiently with themes' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'Powerful e-commerce on WordPress' },
        ],
      },
    },
  },
  nl: {
    metadata: {
      title: 'WordPress Koppelingen | Realworks, HRoffice & CRM | Niblah',
      description:
        'WordPress koppelingen voor automatisering van je bedrijfsprocessen. Realworks, HRoffice, CRM en ERP integraties op maat. 30+ jaar ervaring.',
      keywords:
        'wordpress koppelingen, realworks koppeling, hroffice koppeling, wordpress crm, wordpress integraties, api koppelingen',
      openGraph: {
        title: 'WordPress Koppelingen | Automatiseer je Workflow | Niblah',
        description: 'Maatwerk WordPress koppelingen met Realworks, HRoffice en meer systemen.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS KOPPELINGEN',
      title: 'Koppel WordPress aan je bedrijfssystemen',
      description:
        'WordPress koppelingen, zoals Realworks en HRoffice, helpen je website te automatiseren en bedrijfsprocessen te stroomlijnen. Bij Niblah ontwikkelen we maatwerkoplossingen die jouw WordPress website naadloos verbinden met externe systemen. Bespaar tijd, verminder handmatige taken en focus op groei en klanttevredenheid.',
      ctaText: 'Bespreek je koppeling',
      ctaLink: '/contact',
      note: '* Maatwerk API koppelingen voor elk systeem',
      image: '/wordpress-integrations.png',
      imageAlt: 'WordPress koppelingen visualisatie',
    },
    sections: {
      intro: {
        title: { prefix: 'Wat zijn', highlight: 'WordPress koppelingen', suffix: '?' },
        paragraphs: [
          "Een WordPress koppeling is een technische verbinding tussen je website en andere bedrijfssystemen. Deze koppeling zorgt ervoor dat verschillende programma's automatisch met elkaar communiceren. Hierdoor kun je je bedrijfsprocessen efficiënter inrichten en bespaar je veel tijd.",
          'De koppeling werkt als een digitale brug die constant informatie deelt tussen systemen. Dit is vooral waardevol voor bedrijven die dagelijks veel gegevens verwerken en hun processen willen optimaliseren.',
          'Dankzij deze integraties bespaar je tijd en verminder je handmatige taken. Hierdoor kun je je richten op groei en klanttevredenheid, terwijl je de efficiëntie van je onderneming verbetert.',
        ],
        benefitsHeading: 'Voordelen van WordPress koppelingen:',
        benefits: [
          'Automatische synchronisatie van data',
          'Geen dubbele invoer meer nodig',
          'Minder kans op fouten en inconsistenties',
          'Real-time data uitwisseling',
          'Bespaar uren aan handmatig werk per week',
          'Schaalbaar voor toekomstige groei',
        ],
      },
      systems: {
        title: { prefix: 'Welke systemen kun je', highlight: 'koppelen', suffix: ' aan WordPress?' },
        subtitle:
          'Een WordPress website kan worden gekoppeld aan verschillende bedrijfssystemen om processen te automatiseren en efficiënter te werken',
        cards: [
          {
            icon: '👥',
            title: 'CRM-systemen',
            paragraphs: [
              'CRM-systemen zoals Realworks en HubSpot helpen bij het beheren van klantgegevens en bieden inzicht in klantrelaties.',
              'Klantgegevens, afspraken en interacties worden automatisch gesynchroniseerd. Dit vermindert handmatige invoer en verkleint de kans op fouten.',
            ],
          },
          {
            icon: '💼',
            title: 'HR-systemen',
            paragraphs: [
              'Een goed HR-systeem, zoals HRoffice, is essentieel voor het efficiënt beheren van vacatures en sollicitaties.',
              'Vacaturegegevens blijven centraal beheerd en worden automatisch naar je website gestuurd. Zo voorkom je inconsistenties en dubbele invoer.',
            ],
          },
          {
            icon: '⚙️',
            title: 'ERP-systemen',
            paragraphs: [
              'Koppel WordPress aan je ERP voor geïntegreerd voorraadbeheer, inkoop en financiële processen.',
              'Real-time voorraad updates, automatische orderverwerking en complete financiële integratie voor WooCommerce.',
            ],
          },
          {
            icon: '💰',
            title: 'Boekhoudsystemen',
            paragraphs: [
              'Automatische sync met Exact Online, Twinfield of Yuki voor naadloze financiële administratie.',
              'Facturen, orders en klantgegevens worden automatisch gesynchroniseerd met je boekhoudpakket.',
            ],
          },
          {
            icon: '📧',
            title: 'Email Marketing',
            paragraphs: [
              'Koppel Mailchimp, ActiveCampaign of Klaviyo voor geautomatiseerde email campagnes.',
              'Leads en klanten worden automatisch toegevoegd aan mailinglijsten met juiste segmentatie.',
            ],
          },
          {
            icon: '🔧',
            title: "Custom API's",
            paragraphs: [
              'Wij bouwen koppelingen met elk systeem dat een API heeft, van niche software tot enterprise platforms.',
              'Maatwerk oplossingen die perfect aansluiten op jouw specifieke workflow en bedrijfsprocessen.',
            ],
          },
        ],
      },
      popular: {
        title: { prefix: 'Populaire', highlight: 'WordPress koppelingen', suffix: '' },
        subtitle: 'Deze koppelingen zijn veel gevraagd en bewezen effectief voor bedrijven',
        cards: [
          {
            icon: '🏠',
            title: 'Realworks Koppeling',
            description:
              'Met een Realworks koppeling houd je gemakkelijk overzicht in onder andere je klantafspraken, lopende projecten en je huidige woningaanbod. Perfect voor makelaars en vastgoedbedrijven.',
            bullets: [
              'Automatische synchronisatie van woningaanbod',
              'Real-time updates van beschikbaarheid en prijzen',
              'Klantafspraken en bezichtigingen centraal beheerd',
              "Foto's, plattegronden en documenten automatisch",
            ],
            ctaText: 'Vraag Realworks koppeling aan',
            ctaLink: '/contact',
          },
          {
            icon: '💼',
            title: 'HRoffice Koppeling',
            description:
              'Met de vacature koppeling tussen HRoffice en jouw WordPress website worden verschillende HR processen gestandaardiseerd. Ideaal voor recruitment en werving & selectie.',
            bullets: [
              'Automatische vacature publicatie op je website',
              'Sollicitaties direct in HRoffice systeem',
              'Centraal beheer van vacaturegegevens',
              'Geen dubbele invoer van vacatureteksten meer',
            ],
            ctaText: 'Vraag HRoffice koppeling aan',
            ctaLink: '/contact',
          },
        ],
      },
      efficiency: {
        title: { prefix: 'Efficiëntie en groei met', highlight: 'WordPress integraties', suffix: '' },
        paragraphs: [
          'Door deze systemen aan je WordPress website te koppelen, automatiseer je belangrijke bedrijfsprocessen en houd je meer tijd over voor de groei van je bedrijf.',
          'Wij ontwikkelen op maat gemaakte koppelingen die naadloos aansluiten op jouw workflow en zorgen voor een betrouwbare en toekomstbestendige integratie.',
        ],
        buttonText: 'Optimaliseer je workflow',
        buttonLink: '/contact',
      },
      custom: {
        title: { prefix: 'Maatwerk voor jouw', highlight: 'bedrijfsbehoeften', suffix: '' },
        subtitle:
          'Bij Niblah begrijpen we dat ieder bedrijf uniek is. Daarom bieden we maatwerk WordPress koppelingen die zijn afgestemd op de behoeften van jouw bedrijf',
        cards: [
          {
            icon: '🔧',
            title: 'Maatwerk Oplossingen',
            description:
              'Of je een eenvoudige koppeling zoekt of een complexe integratie, wij bieden een betrouwbare en veilige oplossing die perfect aansluit op jouw systemen.',
          },
          {
            icon: '🚀',
            title: 'Toekomstbestendig',
            description:
              'Met maatwerk koppelingen en modules van WordPress ontwikkelen we een naadloze verbinding die schaalbaar is en meegroeit met je bedrijf.',
          },
          {
            icon: '💡',
            title: 'Expert Advies',
            description:
              'Ons team van experts staat klaar om je te adviseren en een oplossing te realiseren die jouw website naar een hoger niveau tilt.',
          },
        ],
        question: 'Heb je specifieke wensen of wil je weten welke koppeling het beste bij jouw bedrijf past?',
        linkText: 'Neem contact op voor een adviesgesprek',
        linkLink: '/contact',
      },
      related: {
        title: { prefix: 'Meer WordPress', highlight: 'Services', suffix: '' },
        subtitle: 'Ontdek onze andere WordPress diensten voor complete website oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress Website', description: 'Laat je volledige WordPress website bouwen' },
          { href: '/wordpress/maatwerk', title: 'WordPress Maatwerk', description: 'Custom plugins en functionaliteiten op maat' },
          { href: '/wordpress/thema', title: 'WordPress Thema', description: "Snel en kostenefficiënt starten met thema's" },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'Krachtige e-commerce met WordPress' },
        ],
      },
    },
  },
  de: {
    metadata: {
      title: 'WordPress Integrationen | Realworks, HRoffice & CRM | Niblah',
      description:
        'WordPress Integrationen zur Automatisierung deiner Prozesse. Realworks, HRoffice, CRM und ERP Anbindungen nach Maß. 30+ Jahre Erfahrung.',
      keywords:
        'wordpress integrationen, realworks integration, hroffice integration, wordpress crm, wordpress api, wordpress schnittstellen',
      openGraph: {
        title: 'WordPress Integrationen | Workflow automatisieren | Niblah',
        description: 'Maßgeschneiderte WordPress Integrationen mit Realworks, HRoffice und vielen weiteren Systemen.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS INTEGRATIONEN',
      title: 'Verbinde WordPress mit deinen Business-Systemen',
      description:
        'WordPress Integrationen wie Realworks und HRoffice helfen dir, Prozesse zu automatisieren und Workflows zu optimieren. Niblah entwickelt maßgeschneiderte Lösungen, die deine WordPress Website nahtlos mit externen Systemen verbinden.',
      ctaText: 'Integration besprechen',
      ctaLink: '/contact',
      note: '* Individuelle API Integrationen für jedes System',
      image: '/wordpress-integrations.png',
      imageAlt: 'WordPress Integrationen Visualisierung',
    },
    sections: {
      intro: {
        title: { prefix: 'Was sind', highlight: 'WordPress Integrationen', suffix: '?' },
        paragraphs: [
          'Eine WordPress Integration ist eine technische Verbindung zwischen deiner Website und anderen Business-Systemen. Tools kommunizieren automatisch miteinander – das spart Zeit und reduziert Fehler.',
          'Die Integration funktioniert wie eine digitale Brücke, die kontinuierlich Daten austauscht – besonders wertvoll bei vielen täglichen Datenprozessen.',
          'Mit den richtigen Integrationen sinkt der manuelle Aufwand deutlich und du kannst dich stärker auf Wachstum und Kundenzufriedenheit fokussieren.',
        ],
        benefitsHeading: 'Vorteile von WordPress Integrationen:',
        benefits: [
          'Automatische Datensynchronisation',
          'Keine doppelte Eingabe mehr',
          'Weniger Fehler und Inkonsistenzen',
          'Echtzeit-Datenaustausch',
          'Spare jede Woche Stunden manueller Arbeit',
          'Skalierbar für zukünftiges Wachstum',
        ],
      },
      systems: {
        title: { prefix: 'Welche Systeme kannst du', highlight: 'verbinden', suffix: ' mit WordPress?' },
        subtitle: 'WordPress lässt sich mit vielen Business-Systemen verbinden – für Automatisierung und Effizienz.',
        cards: [
          {
            icon: '👥',
            title: 'CRM-Systeme',
            paragraphs: [
              'CRMs wie Realworks oder HubSpot helfen beim Management von Kundendaten und Beziehungen.',
              'Kundendaten, Termine und Interaktionen werden automatisch synchronisiert – weniger Aufwand, weniger Fehler.',
            ],
          },
          {
            icon: '💼',
            title: 'HR-Systeme',
            paragraphs: [
              'HR Tools wie HRoffice unterstützen beim effizienten Management von Stellenanzeigen und Bewerbungen.',
              'Vakanzen bleiben zentral gepflegt und werden automatisch auf deiner Website veröffentlicht.',
            ],
          },
          {
            icon: '⚙️',
            title: 'ERP-Systeme',
            paragraphs: [
              'Verbinde WordPress mit deinem ERP für Lager, Einkauf und Finanzprozesse.',
              'Echtzeit-Bestände, automatische Order-Verarbeitung und Finanz-Sync für WooCommerce.',
            ],
          },
          {
            icon: '💰',
            title: 'Buchhaltung',
            paragraphs: [
              'Sync mit Exact Online, Twinfield oder Yuki für eine nahtlose Buchhaltung.',
              'Rechnungen, Bestellungen und Kundendaten fließen automatisch ins Buchhaltungssystem.',
            ],
          },
          {
            icon: '📧',
            title: 'E-Mail Marketing',
            paragraphs: [
              'Mailchimp, ActiveCampaign oder Klaviyo anbinden – für automatisierte Kampagnen.',
              'Leads und Kunden werden automatisch segmentiert und in Listen eingetragen.',
            ],
          },
          {
            icon: '🔧',
            title: 'Custom APIs',
            paragraphs: [
              'Wir bauen Integrationen zu jedem System mit API – von Nischen-Software bis Enterprise-Plattformen.',
              'Maßgeschneiderte Lösungen passend zu deinem Workflow.',
            ],
          },
        ],
      },
      popular: {
        title: { prefix: 'Beliebte', highlight: 'WordPress Integrationen', suffix: '' },
        subtitle: 'Diese Integrationen sind besonders gefragt und haben sich in der Praxis bewährt.',
        cards: [
          {
            icon: '🏠',
            title: 'Realworks Integration',
            description:
              'Mit einer Realworks Integration behältst du Termine, Projekte und Immobilienangebote im Überblick – ideal für Makler und Immobilienunternehmen.',
            bullets: [
              'Automatische Synchronisation des Immobilienangebots',
              'Echtzeit-Updates für Verfügbarkeit und Preise',
              'Termine und Besichtigungen zentral verwalten',
              'Fotos, Grundrisse und Dokumente automatisch',
            ],
            ctaText: 'Realworks Integration anfragen',
            ctaLink: '/contact',
          },
          {
            icon: '💼',
            title: 'HRoffice Integration',
            description:
              'Mit der HRoffice Stellenanzeigen-Integration werden HR Prozesse standardisiert – perfekt für Recruiting.',
            bullets: [
              'Automatische Veröffentlichung von Stellenanzeigen',
              'Bewerbungen direkt im HRoffice System',
              'Zentrale Verwaltung von Stellenanzeigen-Daten',
              'Keine doppelte Pflege der Texte mehr',
            ],
            ctaText: 'HRoffice Integration anfragen',
            ctaLink: '/contact',
          },
        ],
      },
      efficiency: {
        title: { prefix: 'Effizienz und Wachstum mit', highlight: 'WordPress Integrationen', suffix: '' },
        paragraphs: [
          'Durch die Anbindung automatisierst du wichtige Prozesse und gewinnst Zeit für Wachstum.',
          'Wir entwickeln Integrationen, die zu deinem Workflow passen – zuverlässig und zukunftssicher.',
        ],
        buttonText: 'Workflow optimieren',
        buttonLink: '/contact',
      },
      custom: {
        title: { prefix: 'Custom Lösungen für deine', highlight: 'Business-Anforderungen', suffix: '' },
        subtitle:
          'Jedes Unternehmen ist anders. Deshalb liefern wir WordPress Integrationen, die exakt zu deinen Anforderungen passen.',
        cards: [
          { icon: '🔧', title: 'Maßgeschneiderte Lösung', description: 'Von einfacher Anbindung bis komplexer Integration – sicher und passend zu deinen Systemen.' },
          { icon: '🚀', title: 'Zukunftssicher', description: 'Skalierbare Integrationen, die mit deinem Unternehmen mitwachsen.' },
          { icon: '💡', title: 'Expertenberatung', description: 'Wir beraten dich und setzen eine Lösung um, die dein Setup spürbar verbessert.' },
        ],
        question: 'Hast du spezielle Wünsche oder willst du wissen, welche Integration am besten passt?',
        linkText: 'Kontaktiere uns für ein Beratungsgespräch',
        linkLink: '/contact',
      },
      related: {
        title: { prefix: 'Mehr WordPress', highlight: 'Services', suffix: '' },
        subtitle: 'Entdecke weitere WordPress Services für komplette Website-Lösungen',
        moreInfoLabel: 'Mehr erfahren →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress Website', description: 'Komplette Website erstellen lassen' },
          { href: '/wordpress/maatwerk', title: 'WordPress Custom', description: 'Plugins und Funktionen nach Maß' },
          { href: '/wordpress/thema', title: 'WordPress Theme', description: 'Schnell und kosteneffizient mit Themes starten' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-Commerce mit WordPress' },
        ],
      },
    },
  },
  sv: {
    metadata: {
      title: 'WordPress-integrationer | Realworks, HRoffice & CRM | Niblah',
      description:
        'WordPress-integrationer för att automatisera dina processer. Realworks, HRoffice, CRM och ERP-kopplingar anpassade efter din workflow. 30+ års erfarenhet.',
      keywords:
        'wordpress integrationer, realworks integration, hroffice integration, wordpress crm, wordpress api, wordpress koppling',
      openGraph: {
        title: 'WordPress-integrationer | Automatisera workflow | Niblah',
        description: 'Skräddarsydda WordPress-integrationer med Realworks, HRoffice och fler system.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS-INTEGRATIONER',
      title: 'Koppla WordPress till dina affärssystem',
      description:
        'WordPress-integrationer som Realworks och HRoffice hjälper dig automatisera webbplatsen och effektivisera processer. Niblah bygger lösningar som kopplar din WordPress-sajt till externa system – så du sparar tid och minskar manuellt arbete.',
      ctaText: 'Prata om din integration',
      ctaLink: '/contact',
      note: '* Custom API-kopplingar för alla system',
      image: '/wordpress-integrations.png',
      imageAlt: 'Visualisering av WordPress-integrationer',
    },
    sections: {
      intro: {
        title: { prefix: 'Vad är', highlight: 'WordPress-integrationer', suffix: '?' },
        paragraphs: [
          'En WordPress-integration är en teknisk koppling mellan din webbplats och andra system. Verktyg kan kommunicera automatiskt – vilket sparar tid och minskar fel.',
          'Tänk på det som en digital bro som kontinuerligt delar data mellan system. Extra värdefullt när mycket information hanteras dagligen.',
          'Med rätt integrationer minskar du manuellt arbete och kan fokusera mer på tillväxt och kundnöjdhet.',
        ],
        benefitsHeading: 'Fördelar:',
        benefits: [
          'Automatisk datasynk',
          'Ingen dubbelregistrering',
          'Färre fel och inkonsekvenser',
          'Data i realtid',
          'Spara timmar av manuellt arbete',
          'Skalbart för framtida tillväxt',
        ],
      },
      systems: {
        title: { prefix: 'Vilka system kan du', highlight: 'koppla', suffix: ' till WordPress?' },
        subtitle: 'WordPress kan kopplas till många affärssystem för att automatisera och effektivisera.',
        cards: [
          { icon: '👥', title: 'CRM', paragraphs: ['CRM som Realworks och HubSpot hjälper dig hantera kunddata.', 'Data, möten och interaktioner synkas automatiskt – mindre manuellt arbete.'] },
          { icon: '💼', title: 'HR', paragraphs: ['HR-verktyg som HRoffice effektiviserar rekrytering.', 'Vakanser hanteras centralt och publiceras automatiskt på webben.'] },
          { icon: '⚙️', title: 'ERP', paragraphs: ['Koppla till ERP för lager, inköp och ekonomi.', 'Realtidslager, orderflöden och ekonomisynk för WooCommerce.'] },
          { icon: '💰', title: 'Bokföring', paragraphs: ['Sync med Exact Online, Twinfield eller Yuki.', 'Fakturor och order synkas automatiskt till bokföringen.'] },
          { icon: '📧', title: 'Email marketing', paragraphs: ['Koppla Mailchimp, ActiveCampaign eller Klaviyo.', 'Leads och kunder segmenteras och läggs till automatiskt.'] },
          { icon: '🔧', title: 'Custom API', paragraphs: ['Vi bygger kopplingar till alla system med API.', 'Skräddarsytt efter din workflow och processer.'] },
        ],
      },
      popular: {
        title: { prefix: 'Populära', highlight: 'WordPress-integrationer', suffix: '' },
        subtitle: 'Vanliga kopplingar som ger tydlig effekt i praktiken.',
        cards: [
          {
            icon: '🏠',
            title: 'Realworks',
            description: 'Håll möten, projekt och objektlistor synkade – perfekt för mäklare.',
            bullets: ['Automatisk objektsynk', 'Realtidspriser och status', 'Central hantering av visningar', 'Bilder och dokument synkas'],
            ctaText: 'Beställ Realworks-koppling',
            ctaLink: '/contact',
          },
          {
            icon: '💼',
            title: 'HRoffice',
            description: 'Standardisera HR-flöden med en vacancy-koppling – idealiskt för rekrytering.',
            bullets: ['Automatisk publicering', 'Ansökningar in i HRoffice', 'Central datakälla', 'Ingen dubbelinmatning'],
            ctaText: 'Beställ HRoffice-koppling',
            ctaLink: '/contact',
          },
        ],
      },
      efficiency: {
        title: { prefix: 'Effektivitet och tillväxt med', highlight: 'integrationer', suffix: '' },
        paragraphs: [
          'När systemen kopplas ihop automatiserar du viktiga processer och frigör tid för tillväxt.',
          'Vi bygger stabila och framtidssäkra integrationer som passar din workflow.',
        ],
        buttonText: 'Optimera din workflow',
        buttonLink: '/contact',
      },
      custom: {
        title: { prefix: 'Skräddarsytt för dina', highlight: 'behov', suffix: '' },
        subtitle: 'Varje bolag är unikt. Därför levererar vi integrationer anpassade efter just din verksamhet.',
        cards: [
          { icon: '🔧', title: 'Skräddarsydd lösning', description: 'Från enkla kopplingar till komplexa integrationer – säkert och stabilt.' },
          { icon: '🚀', title: 'Framtidssäkert', description: 'Skalbara lösningar som växer med företaget.' },
          { icon: '💡', title: 'Rådgivning', description: 'Vi hjälper dig välja rätt och levererar en lösning som höjer nivån.' },
        ],
        question: 'Har du specifika krav eller vill du veta vilken koppling som passar bäst?',
        linkText: 'Kontakta oss för rådgivning',
        linkLink: '/contact',
      },
      related: {
        title: { prefix: 'Mer WordPress', highlight: 'tjänster', suffix: '' },
        subtitle: 'Upptäck fler WordPress-tjänster för helhetslösningar',
        moreInfoLabel: 'Läs mer →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress-webbplats', description: 'Få en komplett WordPress-sajt byggd' },
          { href: '/wordpress/maatwerk', title: 'Custom WordPress', description: 'Plugins och funktioner på beställning' },
          { href: '/wordpress/thema', title: 'WordPress-tema', description: 'Kom igång snabbt och kostnadseffektivt med teman' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-handel på WordPress' },
        ],
      },
    },
  },
  da: {
    metadata: {
      title: 'WordPress integrationer | Realworks, HRoffice & CRM | Niblah',
      description:
        'WordPress integrationer til at automatisere processer. Realworks, HRoffice, CRM og ERP-koblinger skræddersyet til din workflow. 30+ års erfaring.',
      keywords:
        'wordpress integrationer, realworks integration, hroffice integration, wordpress crm, wordpress api, wordpress kobling',
      openGraph: {
        title: 'WordPress integrationer | Automatisér workflow | Niblah',
        description: 'Skræddersyede WordPress integrationer med Realworks, HRoffice og flere systemer.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS INTEGRATIONER',
      title: 'Kobl WordPress til dine forretningssystemer',
      description:
        'WordPress integrationer som Realworks og HRoffice hjælper dig med at automatisere website og processer. Niblah bygger løsninger der forbinder din WordPress side med eksterne systemer – så du sparer tid og reducerer manuelt arbejde.',
      ctaText: 'Tal om din integration',
      ctaLink: '/contact',
      note: '* Custom API-koblinger til alle systemer',
      image: '/wordpress-integrations.png',
      imageAlt: 'WordPress integration visualisering',
    },
    sections: {
      intro: {
        title: { prefix: 'Hvad er', highlight: 'WordPress integrationer', suffix: '?' },
        paragraphs: [
          'En WordPress integration er en teknisk forbindelse mellem dit website og andre systemer. Værktøjer kan kommunikere automatisk – det sparer tid og minimerer fejl.',
          'Tænk på det som en digital bro der løbende deler data mellem systemer – særligt værdifuldt når der håndteres meget data dagligt.',
          'Med de rigtige integrationer reducerer du manuelle opgaver og kan fokusere på vækst og kundetilfredshed.',
        ],
        benefitsHeading: 'Fordele:',
        benefits: [
          'Automatisk data-synk',
          'Ingen dobbelt indtastning',
          'Færre fejl og uoverensstemmelser',
          'Data i realtid',
          'Spar timer af manuelt arbejde',
          'Skalerbart til fremtidig vækst',
        ],
      },
      systems: {
        title: { prefix: 'Hvilke systemer kan du', highlight: 'koble', suffix: ' til WordPress?' },
        subtitle: 'WordPress kan kobles til mange forretningssystemer for at automatisere og effektivisere.',
        cards: [
          { icon: '👥', title: 'CRM', paragraphs: ['CRM som Realworks og HubSpot hjælper med kundedata.', 'Data, aftaler og interaktioner synkes automatisk – mindre manuelt arbejde.'] },
          { icon: '💼', title: 'HR', paragraphs: ['HR-værktøjer som HRoffice effektiviserer rekruttering.', 'Stillinger håndteres centralt og publiceres automatisk på sitet.'] },
          { icon: '⚙️', title: 'ERP', paragraphs: ['Kobl til ERP for lager, indkøb og økonomi.', 'Realtime lager, ordreflow og økonomi-sync til WooCommerce.'] },
          { icon: '💰', title: 'Bogføring', paragraphs: ['Sync med Exact Online, Twinfield eller Yuki.', 'Fakturaer og ordrer synkes automatisk.'] },
          { icon: '📧', title: 'Email marketing', paragraphs: ['Kobl Mailchimp, ActiveCampaign eller Klaviyo.', 'Leads og kunder segmenteres automatisk.'] },
          { icon: '🔧', title: 'Custom API', paragraphs: ['Vi bygger koblinger til alle systemer med API.', 'Skræddersyet til din workflow og processer.'] },
        ],
      },
      popular: {
        title: { prefix: 'Populære', highlight: 'WordPress integrationer', suffix: '' },
        subtitle: 'Ofte efterspurgte koblinger som virker i praksis.',
        cards: [
          { icon: '🏠', title: 'Realworks', description: 'Synk aftaler, projekter og boligudbud – ideelt for ejendomsmæglere.', bullets: ['Automatisk synk af udbud', 'Realtime priser og status', 'Central håndtering af aftaler', 'Billeder og dokumenter synkes'], ctaText: 'Anmod om Realworks-kobling', ctaLink: '/contact' },
          { icon: '💼', title: 'HRoffice', description: 'Standardisér HR-processer med vacancy-kobling – perfekt til rekruttering.', bullets: ['Automatisk publicering', 'Ansøgninger i HRoffice', 'Central datakilde', 'Ingen dobbelt indtastning'], ctaText: 'Anmod om HRoffice-kobling', ctaLink: '/contact' },
        ],
      },
      efficiency: {
        title: { prefix: 'Effektivitet og vækst med', highlight: 'integrationer', suffix: '' },
        paragraphs: [
          'Når systemerne kobles sammen, automatiserer du vigtige processer og frigør tid til vækst.',
          'Vi bygger stabile og fremtidssikre integrationer der passer til din workflow.',
        ],
        buttonText: 'Optimér din workflow',
        buttonLink: '/contact',
      },
      custom: {
        title: { prefix: 'Skræddersyet til dine', highlight: 'behov', suffix: '' },
        subtitle: 'Alle virksomheder er forskellige. Derfor leverer vi integrationer, der matcher dine krav.',
        cards: [
          { icon: '🔧', title: 'Skræddersyet løsning', description: 'Fra simple koblinger til komplekse integrationer – sikkert og stabilt.' },
          { icon: '🚀', title: 'Fremtidssikret', description: 'Skalerbare løsninger der vokser med virksomheden.' },
          { icon: '💡', title: 'Rådgivning', description: 'Vi hjælper dig vælge rigtigt og leverer en løsning der løfter dit setup.' },
        ],
        question: 'Har du specifikke ønsker, eller vil du vide hvilken kobling der passer bedst?',
        linkText: 'Kontakt os for rådgivning',
        linkLink: '/contact',
      },
      related: {
        title: { prefix: 'Flere WordPress', highlight: 'ydelser', suffix: '' },
        subtitle: 'Se flere WordPress ydelser til komplette website-løsninger',
        moreInfoLabel: 'Læs mere →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress website', description: 'Få en komplet WordPress-side bygget' },
          { href: '/wordpress/maatwerk', title: 'Custom WordPress', description: 'Plugins og funktioner på bestilling' },
          { href: '/wordpress/thema', title: 'WordPress tema', description: 'Kom hurtigt og billigt i gang med temaer' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-handel med WordPress' },
        ],
      },
    },
  },
  fr: {
    metadata: {
      title: 'Intégrations WordPress | Realworks, HRoffice & CRM | Niblah',
      description:
        'Intégrations WordPress pour automatiser vos processus. Connexions Realworks, HRoffice, CRM et ERP sur mesure. 30+ ans d’expérience.',
      keywords:
        'intégrations wordpress, realworks, hroffice, wordpress crm, wordpress api, connecteurs wordpress',
      openGraph: {
        title: 'Intégrations WordPress | Automatiser votre workflow | Niblah',
        description: 'Intégrations WordPress sur mesure avec Realworks, HRoffice et bien plus.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'INTÉGRATIONS WORDPRESS',
      title: 'Connectez WordPress à vos systèmes',
      description:
        'Des intégrations comme Realworks et HRoffice automatisent votre site et vos processus. Niblah développe des solutions qui connectent WordPress à vos outils externes pour gagner du temps et réduire les tâches manuelles.',
      ctaText: 'Parler de votre intégration',
      ctaLink: '/contact',
      note: '* Connexions API sur mesure pour tous les systèmes',
      image: '/wordpress-integrations.png',
      imageAlt: 'Visualisation des intégrations WordPress',
    },
    sections: {
      intro: {
        title: { prefix: 'Que sont les', highlight: 'intégrations WordPress', suffix: ' ?' },
        paragraphs: [
          'Une intégration WordPress est une connexion technique entre votre site et d’autres systèmes. Les outils communiquent automatiquement, ce qui accélère les processus et réduit les erreurs.',
          'C’est comme un pont digital qui échange des données en continu – très utile lorsque vous manipulez beaucoup d’informations au quotidien.',
          'Avec les bonnes intégrations, vous réduisez le travail manuel et pouvez vous concentrer sur la croissance et la satisfaction client.',
        ],
        benefitsHeading: 'Avantages :',
        benefits: [
          'Synchronisation automatique des données',
          'Plus de double saisie',
          'Moins d’erreurs et d’incohérences',
          'Échanges en temps réel',
          'Gagnez des heures de travail manuel',
          'Scalable pour la croissance',
        ],
      },
      systems: {
        title: { prefix: 'Quels systèmes pouvez-vous', highlight: 'connecter', suffix: ' à WordPress ?' },
        subtitle: 'WordPress peut se connecter à de nombreux systèmes pour automatiser et gagner en efficacité.',
        cards: [
          { icon: '👥', title: 'CRM', paragraphs: ['Des CRM comme Realworks et HubSpot gèrent les données clients.', 'Données, rendez-vous et interactions se synchronisent automatiquement.'] },
          { icon: '💼', title: 'RH', paragraphs: ['Des outils RH comme HRoffice optimisent le recrutement.', 'Les offres restent centralisées et sont publiées automatiquement.'] },
          { icon: '⚙️', title: 'ERP', paragraphs: ['Connexion ERP pour stock, achats et finance.', 'Stock en temps réel, traitement de commandes et sync WooCommerce.'] },
          { icon: '💰', title: 'Comptabilité', paragraphs: ['Sync avec Exact Online, Twinfield ou Yuki.', 'Factures et commandes synchronisées automatiquement.'] },
          { icon: '📧', title: 'Email marketing', paragraphs: ['Connectez Mailchimp, ActiveCampaign ou Klaviyo.', 'Leads et clients sont segmentés automatiquement.'] },
          { icon: '🔧', title: 'API custom', paragraphs: ['Nous connectons tout système disposant d’une API.', 'Sur mesure selon vos processus.'] },
        ],
      },
      popular: {
        title: { prefix: 'Intégrations', highlight: 'WordPress populaires', suffix: '' },
        subtitle: 'Des connexions fréquemment demandées et efficaces.',
        cards: [
          { icon: '🏠', title: 'Realworks', description: 'Synchronisez rendez-vous, projets et annonces – idéal pour l’immobilier.', bullets: ['Sync automatique des annonces', 'Mises à jour en temps réel', 'Gestion centralisée des visites', 'Photos et documents synchronisés'], ctaText: 'Demander Realworks', ctaLink: '/contact' },
          { icon: '💼', title: 'HRoffice', description: 'Standardisez les process RH avec la publication d’offres – parfait pour le recrutement.', bullets: ['Publication automatique', 'Candidatures dans HRoffice', 'Données centralisées', 'Plus de double saisie'], ctaText: 'Demander HRoffice', ctaLink: '/contact' },
        ],
      },
      efficiency: {
        title: { prefix: 'Efficacité et croissance avec des', highlight: 'intégrations', suffix: '' },
        paragraphs: [
          'En connectant vos systèmes, vous automatisez des process importants et libérez du temps pour la croissance.',
          'Nous construisons des intégrations fiables et pérennes adaptées à votre workflow.',
        ],
        buttonText: 'Optimiser votre workflow',
        buttonLink: '/contact',
      },
      custom: {
        title: { prefix: 'Sur mesure pour vos', highlight: 'besoins', suffix: '' },
        subtitle: 'Chaque entreprise est unique. Nous livrons donc des intégrations adaptées à vos exigences.',
        cards: [
          { icon: '🔧', title: 'Solutions sur mesure', description: 'De la connexion simple à l’intégration complexe – sécurisé et robuste.' },
          { icon: '🚀', title: 'Pérenne', description: 'Des intégrations scalables qui évoluent avec votre entreprise.' },
          { icon: '💡', title: 'Conseil expert', description: 'Nous vous conseillons et livrons une solution qui améliore votre site.' },
        ],
        question: 'Vous avez des besoins spécifiques ou vous voulez savoir quelle intégration vous convient ?',
        linkText: 'Contactez-nous pour un appel conseil',
        linkLink: '/contact',
      },
      related: {
        title: { prefix: 'Plus de services', highlight: 'WordPress', suffix: '' },
        subtitle: 'Découvrez nos autres services WordPress pour une solution complète',
        moreInfoLabel: 'En savoir plus →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'Site WordPress', description: 'Faire créer un site WordPress complet' },
          { href: '/wordpress/maatwerk', title: 'WordPress sur mesure', description: 'Plugins et fonctionnalités sur mesure' },
          { href: '/wordpress/thema', title: 'Thème WordPress', description: 'Démarrer vite et à moindre coût avec un thème' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-commerce avec WordPress' },
        ],
      },
    },
  },
  it: {
    metadata: {
      title: 'Integrazioni WordPress | Realworks, HRoffice & CRM | Niblah',
      description:
        'Integrazioni WordPress per automatizzare i processi. Collegamenti Realworks, HRoffice, CRM ed ERP su misura. 30+ anni di esperienza.',
      keywords:
        'integrazioni wordpress, realworks, hroffice, wordpress crm, wordpress api, connettori wordpress',
      openGraph: {
        title: 'Integrazioni WordPress | Automatizza il workflow | Niblah',
        description: 'Integrazioni WordPress su misura con Realworks, HRoffice e molti altri sistemi.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'INTEGRAZIONI WORDPRESS',
      title: 'Collega WordPress ai tuoi sistemi',
      description:
        'Integrazioni come Realworks e HRoffice automatizzano il sito e i processi. Niblah sviluppa soluzioni che collegano WordPress agli strumenti esterni per risparmiare tempo e ridurre le attività manuali.',
      ctaText: 'Parliamo della tua integrazione',
      ctaLink: '/contact',
      note: '* Integrazioni API su misura per ogni sistema',
      image: '/wordpress-integrations.png',
      imageAlt: 'Visualizzazione integrazioni WordPress',
    },
    sections: {
      intro: {
        title: { prefix: 'Cosa sono le', highlight: 'integrazioni WordPress', suffix: '?' },
        paragraphs: [
          'Un’integrazione WordPress è un collegamento tecnico tra il tuo sito e altri sistemi. Gli strumenti comunicano automaticamente, rendendo i processi più veloci e riducendo gli errori.',
          'È come un ponte digitale che scambia dati in modo continuo—molto utile quando gestisci molte informazioni ogni giorno.',
          'Con le integrazioni giuste riduci il lavoro manuale e puoi concentrarti su crescita e soddisfazione del cliente.',
        ],
        benefitsHeading: 'Vantaggi:',
        benefits: [
          'Sincronizzazione automatica dei dati',
          'Niente più doppio inserimento',
          'Meno errori e incongruenze',
          'Dati in tempo reale',
          'Risparmia ore di lavoro manuale',
          'Scalabile per la crescita',
        ],
      },
      systems: {
        title: { prefix: 'Quali sistemi puoi', highlight: 'collegare', suffix: ' a WordPress?' },
        subtitle: 'WordPress può collegarsi a molti sistemi per automatizzare ed essere più efficienti.',
        cards: [
          { icon: '👥', title: 'CRM', paragraphs: ['CRM come Realworks e HubSpot gestiscono i dati clienti.', 'Dati, appuntamenti e interazioni si sincronizzano automaticamente.'] },
          { icon: '💼', title: 'HR', paragraphs: ['Strumenti HR come HRoffice migliorano il recruiting.', 'Le offerte restano centralizzate e vengono pubblicate automaticamente.'] },
          { icon: '⚙️', title: 'ERP', paragraphs: ['Collega l’ERP per magazzino, acquisti e finanza.', 'Stock in tempo reale, ordini e sync WooCommerce.'] },
          { icon: '💰', title: 'Contabilità', paragraphs: ['Sync con Exact Online, Twinfield o Yuki.', 'Fatture e ordini sincronizzati automaticamente.'] },
          { icon: '📧', title: 'Email marketing', paragraphs: ['Collega Mailchimp, ActiveCampaign o Klaviyo.', 'Lead e clienti vengono segmentati automaticamente.'] },
          { icon: '🔧', title: 'API custom', paragraphs: ['Connettiamo qualsiasi sistema con API.', 'Soluzioni su misura per workflow e processi.'] },
        ],
      },
      popular: {
        title: { prefix: 'Integrazioni', highlight: 'WordPress popolari', suffix: '' },
        subtitle: 'Collegamenti richiesti spesso e molto efficaci.',
        cards: [
          { icon: '🏠', title: 'Realworks', description: 'Sincronizza appuntamenti, progetti e annunci – ideale per real estate.', bullets: ['Sync automatico annunci', 'Aggiornamenti in tempo reale', 'Gestione centralizzata visite', 'Foto e documenti sincronizzati'], ctaText: 'Richiedi Realworks', ctaLink: '/contact' },
          { icon: '💼', title: 'HRoffice', description: 'Standardizza i processi HR con la pubblicazione vacancy – perfetto per recruiting.', bullets: ['Pubblicazione automatica', 'Candidature in HRoffice', 'Dati centralizzati', 'Niente doppio inserimento'], ctaText: 'Richiedi HRoffice', ctaLink: '/contact' },
        ],
      },
      efficiency: {
        title: { prefix: 'Efficienza e crescita con', highlight: 'integrazioni', suffix: '' },
        paragraphs: [
          'Collegando i sistemi automatizzi processi importanti e liberi tempo per la crescita.',
          'Realizziamo integrazioni affidabili e future-proof, allineate al tuo workflow.',
        ],
        buttonText: 'Ottimizza il workflow',
        buttonLink: '/contact',
      },
      custom: {
        title: { prefix: 'Su misura per le tue', highlight: 'esigenze', suffix: '' },
        subtitle: 'Ogni azienda è unica. Per questo realizziamo integrazioni adatte ai tuoi requisiti.',
        cards: [
          { icon: '🔧', title: 'Soluzioni custom', description: 'Da collegamenti semplici a integrazioni complesse – sicuro e robusto.' },
          { icon: '🚀', title: 'Future-proof', description: 'Integrazioni scalabili che crescono con l’azienda.' },
          { icon: '💡', title: 'Consulenza', description: 'Ti aiutiamo a scegliere la soluzione giusta e la realizziamo.' },
        ],
        question: 'Hai esigenze specifiche o vuoi capire quale integrazione fa per te?',
        linkText: 'Contattaci per una consulenza',
        linkLink: '/contact',
      },
      related: {
        title: { prefix: 'Altri servizi', highlight: 'WordPress', suffix: '' },
        subtitle: 'Scopri gli altri servizi WordPress per una soluzione completa',
        moreInfoLabel: 'Scopri di più →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'Sito WordPress', description: 'Realizza un sito WordPress completo' },
          { href: '/wordpress/maatwerk', title: 'WordPress su misura', description: 'Plugin e funzionalità su misura' },
          { href: '/wordpress/thema', title: 'Tema WordPress', description: 'Parti velocemente e con costi ridotti con un tema' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-commerce con WordPress' },
        ],
      },
    },
  },
};

export function getWordPressKoppelingenCopy(locale) {
  return getLocaleCopy(copy, locale);
}
