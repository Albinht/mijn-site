import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'WordPress Developer Agency | 30+ Years of Expertise | Niblah',
      description:
        'Professional WordPress developers for custom themes, plugins, and complex web applications. From small tweaks to enterprise projects. 30+ years of development experience.',
      keywords:
        'wordpress developer, wordpress agency, wordpress development, custom wordpress development, wordpress plugin development, wordpress theme development',
      openGraph: {
        title: 'WordPress Developer Agency | Niblah',
        description: 'Expert WordPress developers for custom solutions and complex projects.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS DEVELOPERS',
      title: 'Expert WordPress developers for your project',
      description:
        'Niblah delivers professional WordPress development for projects of any size. Our developers bring 30+ years of WordPress experience—from custom theme development to complex API integrations. Whether you need a custom plugin, a complete website, or technical support: we ship clean code, fast delivery, and future-proof solutions.',
      ctaText: 'Discuss your project',
      ctaLink: '/contact',
      note: '* Fast start with experienced WordPress developers',
      image: '/wordpress-developers.png',
      imageAlt: 'WordPress development team',
    },
    sections: {
      why: {
        title: {
          prefix: 'WordPress developers with',
          highlight: 'proven expertise',
          suffix: '',
        },
        paragraphs: [
          'Since WordPress was introduced, our developers have built experience across every part of this popular CMS. From PHP and JavaScript to MySQL optimization—our knowledge is deep and up to date.',
          'We specialize in custom WordPress solutions that go beyond off-the-shelf themes and plugins: custom post types, Advanced Custom Fields, REST API integrations, WooCommerce extensions, and complex web applications.',
          'Niblah provides WordPress developers who don’t just code—they think along about architecture, performance, security, and scalability.',
        ],
        buildHeading: 'Why choose Niblah developers:',
        buildItems: [
          '30+ years of WordPress development experience',
          'Clean, well-documented, and maintainable code',
          'Experience with all major page builders',
          'WordPress best practices and coding standards',
          'Fast communication and transparent progress',
          'Flexible availability: from a few hours to full-time',
        ],
      },
      services: {
        title: {
          prefix: 'WordPress development',
          highlight: 'services',
          suffix: '',
        },
        subtitle: 'From small changes to full custom applications—our WordPress developers can handle it.',
        cards: [
          {
            icon: '🎨',
            title: 'Custom theme development',
            description:
              'Custom WordPress themes from scratch or adapting an existing theme to your design and functional requirements.',
          },
          {
            icon: '🔌',
            title: 'Plugin development',
            description:
              'Custom WordPress plugins tailored to your workflow—from simple utilities to complex business functionality.',
          },
          {
            icon: '🏗️',
            title: 'Page builder expertise',
            description:
              'Experience with Elementor, WPBakery, Divi, and Gutenberg. Custom widgets, modules, and builder extensions.',
          },
          {
            icon: '🔗',
            title: 'API integrations',
            description:
              'Integrations with external systems via REST APIs or custom endpoints: CRM, ERP, marketing tools, and payment gateways.',
          },
          {
            icon: '🛒',
            title: 'WooCommerce development',
            description:
              'Custom WooCommerce functionality: checkout flows, product types, payment methods, and backend extensions.',
          },
          {
            icon: '⚡',
            title: 'Performance optimization',
            description:
              'Optimize database queries, implement caching, lazy loading, and minification for faster WordPress sites.',
          },
          {
            icon: '🔒',
            title: 'Security hardening',
            description:
              'Implement WordPress security best practices, vulnerability scanning, and proactive monitoring to prevent malware.',
          },
          {
            icon: '☁️',
            title: 'Hosting & maintenance',
            description: 'Managed hosting setup, automated backups, updates, and 24/7 monitoring for worry-free maintenance.',
          },
          {
            icon: '🚀',
            title: 'Headless WordPress',
            description:
              'Use WordPress as a headless CMS with Next.js, React, or Vue frontends. REST API and GraphQL implementations.',
          },
        ],
      },
      process: {
        title: {
          prefix: 'Hire a WordPress developer',
          highlight: 'in 4 steps',
          suffix: '',
        },
        subtitle: 'From intake to delivery—this is how the collaboration with Niblah works.',
        steps: [
          {
            number: '1',
            title: 'Discovery call',
            description:
              'We discuss your project in detail: what needs to be built, which features are required, the timeline, and your budget.',
            bullets: ['Define project scope', 'Technical requirements', 'Planning and budget'],
          },
          {
            number: '2',
            title: 'Developer matching',
            description:
              'We match the best developer(s) to your project based on expertise, experience, and availability—usually within 2–3 business days.',
            bullets: ['Right technical skills', 'Relevant experience', 'Availability check'],
          },
          {
            number: '3',
            title: 'Development',
            description:
              'Your developer starts building. Regular updates, transparent communication, and iterative delivery keep you fully in the loop.',
            bullets: ['Agile development process', 'Weekly progress updates', 'Code reviews and testing'],
          },
          {
            number: '4',
            title: 'Delivery & support',
            description:
              'After delivery we stay available for questions, fixes, and further development. Documentation, training, and optional maintenance are included.',
            bullets: ['Complete documentation', 'Training if needed', 'Aftercare and support'],
          },
        ],
      },
      cms: {
        title: {
          prefix: 'Why WordPress is',
          highlight: 'the best CMS',
          suffix: '',
        },
        paragraphs: [
          'WordPress powers more than 43% of all websites worldwide and is the most popular content management system. That popularity is well earned.',
          'Its biggest advantage is the combination of ease of use and technical flexibility. The intuitive backend makes content management simple, while the underlying architecture is endlessly extensible for developers.',
          'WordPress runs on PHP, MySQL, JavaScript, and CSS—proven technologies that are stable, secure, and well documented. That makes it easy to find developers and build complex functionality.',
        ],
        benefitsHeading: 'Benefits of WordPress:',
        benefits: [
          {
            title: 'User-friendly',
            description: 'Easily update content yourself without technical knowledge',
          },
          {
            title: 'SEO-friendly',
            description: 'Built-in SEO features and plugins like Yoast SEO',
          },
          {
            title: 'Flexible',
            description: 'Thousands of plugins and themes, plus custom development options',
          },
          {
            title: 'Huge community',
            description: 'Massive ecosystem with active developers and continuous improvements',
          },
          {
            title: 'Cost-effective',
            description: 'Open-source software with no license fees',
          },
        ],
      },
      flexibility: {
        title: {
          prefix: 'Flexible engagement of',
          highlight: 'WordPress developers',
          suffix: '',
        },
        paragraph:
          'Whether you need one developer for a few hours per week or a dedicated team for a large project—we offer flexibility that fits your needs and budget.',
        options: [
          {
            icon: '⏱️',
            title: 'Hourly',
            description: 'Pay only for the hours worked. Perfect for small changes and maintenance.',
            note: 'From a few hours per week',
          },
          {
            icon: '📅',
            title: 'Part-time',
            description: 'A developer for 2–3 days per week on a fixed basis. Ideal for ongoing development.',
            note: '16–24 hours per week guaranteed',
          },
          {
            icon: '👨‍💻',
            title: 'Full-time',
            description: 'Dedicated developer(s) full-time on your project. Maximum focus and fastest delivery.',
            note: '40 hours per week, fully dedicated',
          },
        ],
        buttonText: 'Discuss your project',
        buttonLink: '/contact',
      },
      related: {
        title: {
          prefix: 'More WordPress',
          highlight: 'services',
          suffix: '',
        },
        subtitle: 'Explore our other WordPress services for complete website solutions',
        moreInfoLabel: 'Learn more →',
        cards: [
          {
            href: '/wordpress/website-laten-maken',
            title: 'WordPress website',
            description: 'Have your complete WordPress website built',
          },
          {
            href: '/wordpress/maatwerk',
            title: 'WordPress custom work',
            description: 'Custom plugins and tailored functionality',
          },
          {
            href: '/wordpress/partner',
            title: 'WordPress expert agency',
            description: '30+ years of experience with WordPress projects',
          },
          {
            href: '/wordpress/woocommerce',
            title: 'WooCommerce',
            description: 'Powerful e-commerce on WordPress',
          },
        ],
      },
    },
  },
  nl: {
    metadata: {
      title: 'WordPress Developer Agency | 30+ Jaar Expertise | Niblah',
      description:
        'Professional WordPress developers voor custom themes, plugins en complexe web applicaties. Van kleine aanpassingen tot enterprise projecten. 30+ jaar development ervaring.',
      keywords: 'wordpress developer, wordpress programmeur, wordpress ontwikkelaar, custom wordpress development, wordpress agency',
      openGraph: {
        title: 'WordPress Developer Agency | Niblah',
        description: 'Expert WordPress developers voor maatwerk oplossingen en complexe projecten.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS DEVELOPERS',
      title: 'Expert WordPress developers voor jouw project',
      description:
        'Niblah biedt professionele WordPress development services voor projecten van elke omvang. Onze developers hebben 30+ jaar ervaring met WordPress, van custom theme development tot complexe API integraties. Of je nu een maatwerk plugin nodig hebt, een complete website of technische ondersteuning - wij leveren clean code, snelle delivery en toekomstbestendige oplossingen.',
      ctaText: 'Bespreek je project',
      ctaLink: '/contact',
      note: '* Snelle start met ervaren WordPress developers',
      image: '/wordpress-developers.png',
      imageAlt: 'WordPress development team',
    },
    sections: {
      why: {
        title: {
          prefix: 'WordPress ontwikkelaars met',
          highlight: 'bewezen expertise',
          suffix: '',
        },
        paragraphs: [
          'Sinds de introductie van WordPress hebben onze developers ervaring opgebouwd met elk aspect van dit populaire CMS. Van PHP en JavaScript tot MySQL database optimalisatie - onze kennis is diepgaand en actueel.',
          'We specialiseren ons in maatwerk WordPress oplossingen die verder gaan dan standaard themes en plugins. Custom post types, advanced custom fields, REST API integraties, WooCommerce extensies en complexe web applicaties - geen uitdaging is te groot.',
          'Niblah levert WordPress developers die niet alleen coderen, maar ook meedenken over architectuur, performance, security en schaalbaarheid van je project.',
        ],
        buildHeading: 'Waarom kiezen voor Niblah developers:',
        buildItems: [
          '30+ jaar ervaring met WordPress development',
          'Clean, goed gedocumenteerde en onderhoudbare code',
          'Ervaring met alle populaire page builders',
          'WordPress best practices en coding standards',
          'Snelle communicatie en transparante voortgang',
          'Flexibele inzet: van enkele uren tot full-time',
        ],
      },
      services: {
        title: {
          prefix: 'WordPress development',
          highlight: 'diensten',
          suffix: '',
        },
        subtitle: 'Van kleine aanpassingen tot complete custom applicaties - onze WordPress developers kunnen het',
        cards: [
          {
            icon: '🎨',
            title: 'Custom Theme Development',
            description:
              'Maatwerk WordPress themes vanaf scratch of aanpassing van bestaande themes naar jouw specifieke design en functionaliteit eisen.',
          },
          {
            icon: '🔌',
            title: 'Plugin Development',
            description:
              'Custom WordPress plugins die perfect aansluiten op jouw workflow. Van simple utilities tot complexe business functionaliteit.',
          },
          {
            icon: '🏗️',
            title: 'Page Builder Expertise',
            description:
              'Ervaring met Elementor, WPBakery, Divi en Gutenberg. Custom widgets, modules en page builder extensies.',
          },
          {
            icon: '🔗',
            title: 'API Koppelingen',
            description:
              'Integraties met externe systemen via REST API of custom endpoints. CRM, ERP, marketing tools en payment gateways.',
          },
          {
            icon: '🛒',
            title: 'WooCommerce Development',
            description:
              'Custom WooCommerce functionaliteit: checkout flows, product types, payment methods en backend extensions.',
          },
          {
            icon: '⚡',
            title: 'Performance Optimalisatie',
            description:
              'Database queries optimaliseren, caching implementeren, lazy loading en code minification voor snellere websites.',
          },
          {
            icon: '🔒',
            title: 'Security Hardening',
            description:
              'WordPress security best practices implementeren, vulnerability scanning en proactieve monitoring tegen malware.',
          },
          {
            icon: '☁️',
            title: 'Hosting & Maintenance',
            description:
              'Managed WordPress hosting setup, automated backups, updates en 24/7 monitoring voor zorgeloos onderhoud.',
          },
          {
            icon: '🚀',
            title: 'Headless WordPress',
            description:
              'WordPress als headless CMS met Next.js, React of Vue.js frontends. REST API en GraphQL implementaties.',
          },
        ],
      },
      process: {
        title: {
          prefix: 'WordPress developer inzetten',
          highlight: 'in 4 stappen',
          suffix: '',
        },
        subtitle: 'Van intake tot oplevering - zo verloopt de samenwerking met Niblah',
        steps: [
          {
            number: '1',
            title: 'Intake Gesprek',
            description:
              'We bespreken je project in detail: wat moet er gebouwd worden, welke functionaliteiten zijn nodig, wat is de timeline en wat is je budget?',
            bullets: ['Projectscope bepalen', 'Technische requirements', 'Planning en budget'],
          },
          {
            number: '2',
            title: 'Developer Matching',
            description:
              'We selecteren de beste developer(s) voor jouw project op basis van expertise, ervaring en beschikbaarheid. Snelle match binnen 2-3 werkdagen.',
            bullets: ['Juiste technische skills', 'Passende ervaring', 'Beschikbaarheid checken'],
          },
          {
            number: '3',
            title: 'Development',
            description:
              'De developer gaat aan de slag met je project. Regelmatige updates, transparante communicatie en iteratieve delivery zorgen dat je altijd op de hoogte bent.',
            bullets: ['Agile development process', 'Wekelijkse voortgang updates', 'Code reviews en testing'],
          },
          {
            number: '4',
            title: 'Oplevering & Support',
            description:
              'Na oplevering blijven we beschikbaar voor vragen, bugs en verdere ontwikkelingen. Documentatie, training en optionele maintenance contracten.',
            bullets: ['Complete documentatie', 'Training indien gewenst', 'Nazorg en support'],
          },
        ],
      },
      cms: {
        title: {
          prefix: 'Waarom WordPress',
          highlight: 'het beste CMS is',
          suffix: '',
        },
        paragraphs: [
          'WordPress powers meer dan 43% van alle websites wereldwijd en is het populairste Content Management System met ruim 60% marktaandeel binnen CMS platforms. Deze populariteit is niet zonder reden.',
          'Het grootste voordeel van WordPress is de combinatie van gebruiksvriendelijkheid en technische flexibiliteit. De intuïtieve backend maakt het eenvoudig om content te beheren, terwijl de onderliggende architectuur oneindig uitbreidbaar is voor developers.',
          'WordPress draait op PHP, MySQL, JavaScript en CSS - proven technologies die stabiel, veilig en goed gedocumenteerd zijn. Dit maakt het eenvoudig om developers te vinden en complexe functionaliteiten te bouwen.',
        ],
        benefitsHeading: 'Voordelen van WordPress:',
        benefits: [
          {
            title: 'Gebruiksvriendelijk',
            description: 'Zelf eenvoudig content updaten zonder technische kennis',
          },
          {
            title: 'SEO Vriendelijk',
            description: 'Ingebouwde SEO features en plugins zoals Yoast SEO',
          },
          {
            title: 'Flexibel',
            description: 'Duizenden plugins, themes en maatwerk mogelijkheden',
          },
          {
            title: 'Enorme Community',
            description: 'Actieve developer community en continue verbeteringen',
          },
          {
            title: 'Kosteneffectief',
            description: 'Open source software zonder licentiekosten',
          },
        ],
      },
      flexibility: {
        title: {
          prefix: 'Flexibele inzet van',
          highlight: 'WordPress developers',
          suffix: '',
        },
        paragraph:
          'Of je nu een enkele developer nodig hebt voor een paar uur per week, of een volledig dedicated team voor een groot project - we bieden flexibiliteit die past bij jouw behoeften en budget.',
        options: [
          {
            icon: '⏱️',
            title: 'Uren Basis',
            description: 'Betaal alleen voor de uren die gewerkt worden. Perfect voor kleine aanpassingen en onderhoud.',
            note: 'Vanaf enkele uren per week',
          },
          {
            icon: '📅',
            title: 'Part-time',
            description: 'Developer voor 2-3 dagen per week op vaste basis. Ideaal voor doorlopende ontwikkeling.',
            note: '16-24 uur per week gegarandeerd',
          },
          {
            icon: '👨‍💻',
            title: 'Full-time',
            description: 'Dedicated developer(s) full-time op je project. Maximum focus en snelste delivery.',
            note: '40 uur per week, volledig dedicated',
          },
        ],
        buttonText: 'Bespreek jouw project',
        buttonLink: '/contact',
      },
      related: {
        title: {
          prefix: 'Meer WordPress',
          highlight: 'Services',
          suffix: '',
        },
        subtitle: 'Ontdek onze andere WordPress diensten voor complete website oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          {
            href: '/wordpress/website-laten-maken',
            title: 'WordPress Website',
            description: 'Laat je volledige WordPress website bouwen',
          },
          {
            href: '/wordpress/maatwerk',
            title: 'WordPress Maatwerk',
            description: 'Custom plugins en functionaliteiten op maat',
          },
          {
            href: '/wordpress/partner',
            title: 'WordPress Expert Agency',
            description: '30+ jaar ervaring met WordPress projecten',
          },
          {
            href: '/wordpress/woocommerce',
            title: 'WooCommerce',
            description: 'Krachtige e-commerce met WordPress',
          },
        ],
      },
    },
  },
  de: {
    metadata: {
      title: 'WordPress Entwickler-Agentur | 30+ Jahre Expertise | Niblah',
      description:
        'Professionelle WordPress Entwickler für Custom Themes, Plugins und komplexe Webanwendungen. Von kleinen Anpassungen bis zu Enterprise-Projekten. 30+ Jahre Entwicklungserfahrung.',
      keywords:
        'wordpress entwickler, wordpress agentur, wordpress development, custom wordpress, wordpress plugin entwicklung, wordpress theme entwicklung',
      openGraph: {
        title: 'WordPress Entwickler-Agentur | Niblah',
        description: 'Erfahrene WordPress Entwickler für maßgeschneiderte Lösungen und komplexe Projekte.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS ENTWICKLER',
      title: 'Erfahrene WordPress Entwickler für dein Projekt',
      description:
        'Niblah liefert professionelle WordPress Development Services für Projekte jeder Größe. Unsere Entwickler bringen 30+ Jahre WordPress Erfahrung mit – von Custom Themes bis zu komplexen API-Integrationen. Ob Plugin, komplette Website oder technischer Support: Wir liefern sauberen Code, schnelle Umsetzung und zukunftssichere Lösungen.',
      ctaText: 'Projekt besprechen',
      ctaLink: '/contact',
      note: '* Schneller Start mit erfahrenen WordPress Entwicklern',
      image: '/wordpress-developers.png',
      imageAlt: 'WordPress Development Team',
    },
    sections: {
      why: {
        title: {
          prefix: 'WordPress Entwickler mit',
          highlight: 'bewiesener Expertise',
          suffix: '',
        },
        paragraphs: [
          'Seit der Einführung von WordPress haben unsere Entwickler Erfahrung in allen Bereichen dieses beliebten CMS gesammelt. Von PHP und JavaScript bis zur MySQL-Optimierung – unser Know-how ist tief und aktuell.',
          'Wir sind spezialisiert auf maßgeschneiderte WordPress Lösungen, die über Standard-Themes und Plugins hinausgehen: Custom Post Types, Advanced Custom Fields, REST API Integrationen, WooCommerce Extensions und komplexe Webanwendungen.',
          'Niblah stellt WordPress Entwickler, die nicht nur programmieren, sondern auch bei Architektur, Performance, Security und Skalierung mitdenken.',
        ],
        buildHeading: 'Warum Niblah Entwickler wählen:',
        buildItems: [
          '30+ Jahre WordPress Development Erfahrung',
          'Sauberer, gut dokumentierter und wartbarer Code',
          'Erfahrung mit allen gängigen Page Buildern',
          'WordPress Best Practices und Coding Standards',
          'Schnelle Kommunikation und transparente Fortschritte',
          'Flexible Verfügbarkeit: von wenigen Stunden bis Full-time',
        ],
      },
      services: {
        title: {
          prefix: 'WordPress Development',
          highlight: 'Services',
          suffix: '',
        },
        subtitle:
          'Von kleinen Anpassungen bis zu kompletten Custom Anwendungen – unsere WordPress Entwickler können das.',
        cards: [
          {
            icon: '🎨',
            title: 'Custom Theme Development',
            description:
              'Maßgeschneiderte WordPress Themes von Grund auf oder Anpassung bestehender Themes an Design und Anforderungen.',
          },
          {
            icon: '🔌',
            title: 'Plugin Development',
            description:
              'Custom WordPress Plugins passend zu deinem Workflow – von kleinen Tools bis zu komplexer Business-Logik.',
          },
          {
            icon: '🏗️',
            title: 'Page Builder Expertise',
            description:
              'Erfahrung mit Elementor, WPBakery, Divi und Gutenberg. Custom Widgets, Module und Builder-Erweiterungen.',
          },
          {
            icon: '🔗',
            title: 'API Integrationen',
            description:
              'Integrationen mit externen Systemen über REST APIs oder Custom Endpoints: CRM, ERP, Marketing Tools und Payment Gateways.',
          },
          {
            icon: '🛒',
            title: 'WooCommerce Development',
            description:
              'Custom WooCommerce Funktionen: Checkout Flows, Produkttypen, Payment Methods und Backend Extensions.',
          },
          {
            icon: '⚡',
            title: 'Performance Optimierung',
            description:
              'Optimierung von DB Queries, Caching, Lazy Loading und Minifizierung für schnellere WordPress Websites.',
          },
          {
            icon: '🔒',
            title: 'Security Hardening',
            description:
              'Umsetzung von Security Best Practices, Vulnerability Scans und proaktives Monitoring gegen Malware.',
          },
          {
            icon: '☁️',
            title: 'Hosting & Maintenance',
            description:
              'Managed Hosting Setup, automatische Backups, Updates und 24/7 Monitoring für sorgenfreien Betrieb.',
          },
          {
            icon: '🚀',
            title: 'Headless WordPress',
            description:
              'WordPress als Headless CMS mit Next.js, React oder Vue Frontends. REST API und GraphQL Implementierungen.',
          },
        ],
      },
      process: {
        title: {
          prefix: 'WordPress Entwickler einsetzen',
          highlight: 'in 4 Schritten',
          suffix: '',
        },
        subtitle: 'Von der Aufnahme bis zur Lieferung – so läuft die Zusammenarbeit mit Niblah ab.',
        steps: [
          {
            number: '1',
            title: 'Intake',
            description:
              'Wir besprechen dein Projekt im Detail: Was soll gebaut werden, welche Features werden benötigt, Timeline und Budget.',
            bullets: ['Scope definieren', 'Technische Anforderungen', 'Planung und Budget'],
          },
          {
            number: '2',
            title: 'Developer Matching',
            description:
              'Wir matchen die passenden Entwickler auf Basis von Skills, Erfahrung und Verfügbarkeit – meist innerhalb von 2–3 Werktagen.',
            bullets: ['Passende Skills', 'Relevante Erfahrung', 'Verfügbarkeit prüfen'],
          },
          {
            number: '3',
            title: 'Development',
            description:
              'Der Entwickler startet. Regelmäßige Updates, transparente Kommunikation und iterative Delivery halten dich immer auf dem Laufenden.',
            bullets: ['Agiler Prozess', 'Wöchentliche Updates', 'Code Reviews und Testing'],
          },
          {
            number: '4',
            title: 'Lieferung & Support',
            description:
              'Nach der Lieferung bleiben wir verfügbar für Fragen, Fixes und Weiterentwicklung. Dokumentation, Training und optionales Maintenance sind möglich.',
            bullets: ['Dokumentation', 'Training bei Bedarf', 'Support & Nachbetreuung'],
          },
        ],
      },
      cms: {
        title: {
          prefix: 'Warum WordPress',
          highlight: 'das beste CMS ist',
          suffix: '',
        },
        paragraphs: [
          'WordPress betreibt über 43% aller Websites weltweit und ist das beliebteste Content Management System. Das ist kein Zufall.',
          'Der größte Vorteil ist die Kombination aus Benutzerfreundlichkeit und technischer Flexibilität. Das Backend ist intuitiv, während die Architektur für Entwickler nahezu unbegrenzt erweiterbar ist.',
          'WordPress basiert auf PHP, MySQL, JavaScript und CSS – bewährte Technologien, die stabil, sicher und gut dokumentiert sind.',
        ],
        benefitsHeading: 'Vorteile von WordPress:',
        benefits: [
          { title: 'Benutzerfreundlich', description: 'Content einfach selbst pflegen – ohne technisches Wissen' },
          { title: 'SEO-freundlich', description: 'SEO Features und Plugins wie Yoast SEO' },
          { title: 'Flexibel', description: 'Großes Plugin/Theme-Ökosystem und Custom Möglichkeiten' },
          { title: 'Riesige Community', description: 'Aktive Entwickler-Community und ständige Verbesserungen' },
          { title: 'Kosteneffektiv', description: 'Open Source ohne Lizenzkosten' },
        ],
      },
      flexibility: {
        title: {
          prefix: 'Flexible Zusammenarbeit mit',
          highlight: 'WordPress Entwicklern',
          suffix: '',
        },
        paragraph:
          'Ob ein Entwickler für ein paar Stunden pro Woche oder ein dediziertes Team für ein großes Projekt – wir bieten ein Modell, das zu Bedarf und Budget passt.',
        options: [
          {
            icon: '⏱️',
            title: 'Stundenbasis',
            description: 'Du zahlst nur die tatsächlich geleisteten Stunden. Ideal für kleine Änderungen und Wartung.',
            note: 'Ab wenigen Stunden pro Woche',
          },
          {
            icon: '📅',
            title: 'Teilzeit',
            description: '2–3 Tage pro Woche auf fester Basis. Ideal für kontinuierliche Entwicklung.',
            note: '16–24 Stunden pro Woche garantiert',
          },
          {
            icon: '👨‍💻',
            title: 'Vollzeit',
            description: 'Dedizierte Entwickler full-time auf deinem Projekt. Maximaler Fokus und schnellste Delivery.',
            note: '40 Stunden pro Woche, fully dedicated',
          },
        ],
        buttonText: 'Projekt besprechen',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Mehr WordPress', highlight: 'Services', suffix: '' },
        subtitle: 'Entdecke weitere WordPress Services für komplette Website-Lösungen',
        moreInfoLabel: 'Mehr erfahren →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress Website', description: 'Komplette Website erstellen lassen' },
          { href: '/wordpress/maatwerk', title: 'WordPress Custom', description: 'Plugins und Funktionen nach Maß' },
          { href: '/wordpress/partner', title: 'WordPress Agentur', description: '30+ Jahre Erfahrung mit WordPress Projekten' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-Commerce mit WordPress' },
        ],
      },
    },
  },
  sv: {
    metadata: {
      title: 'WordPress-utvecklare | 30+ års erfarenhet | Niblah',
      description:
        'Professionella WordPress-utvecklare för custom themes, plugins och komplexa webbapplikationer. Från små ändringar till enterprise-projekt. 30+ års utvecklingserfarenhet.',
      keywords:
        'wordpress utvecklare, wordpress byrå, wordpress development, custom wordpress, wordpress plugin utveckling, wordpress tema utveckling',
      openGraph: {
        title: 'WordPress-utvecklare | Niblah',
        description: 'Erfarna WordPress-utvecklare för skräddarsydda lösningar och komplexa projekt.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS-UTVECKLARE',
      title: 'Erfarna WordPress-utvecklare för ditt projekt',
      description:
        'Niblah levererar professionell WordPress-utveckling för projekt i alla storlekar. Våra utvecklare har 30+ års WordPress-erfarenhet – från custom themes till komplexa API-integrationer. Oavsett om du behöver ett plugin, en hel webbplats eller teknisk support får du ren kod, snabb leverans och framtidssäkra lösningar.',
      ctaText: 'Prata om ditt projekt',
      ctaLink: '/contact',
      note: '* Snabb start med erfarna WordPress-utvecklare',
      image: '/wordpress-developers.png',
      imageAlt: 'WordPress-utvecklingsteam',
    },
    sections: {
      why: {
        title: { prefix: 'WordPress-utvecklare med', highlight: 'bevisad expertis', suffix: '' },
        paragraphs: [
          'Sedan WordPress lanserades har våra utvecklare byggt erfarenhet inom alla delar av detta populära CMS. Från PHP och JavaScript till MySQL-optimering – vår kunskap är djup och aktuell.',
          'Vi är specialiserade på skräddarsydda WordPress-lösningar som går längre än standardthemes och plugins: custom post types, Advanced Custom Fields, REST API-integrationer, WooCommerce-tillägg och komplexa webbapplikationer.',
          'Niblah levererar utvecklare som inte bara kodar – de tänker också på arkitektur, prestanda, säkerhet och skalbarhet.',
        ],
        buildHeading: 'Varför välja Niblah:',
        buildItems: [
          '30+ års erfarenhet av WordPress-utveckling',
          'Ren, väl dokumenterad och underhållbar kod',
          'Erfarenhet av alla stora page builders',
          'WordPress best practices och kodstandarder',
          'Snabb kommunikation och tydlig status',
          'Flexibelt upplägg: från timmar till heltid',
        ],
      },
      services: {
        title: { prefix: 'WordPress development', highlight: 'tjänster', suffix: '' },
        subtitle: 'Från små ändringar till helt egna applikationer – vi kan hjälpa.',
        cards: [
          { icon: '🎨', title: 'Custom theme development', description: 'Skräddarsydda teman från grunden eller anpassning av befintliga teman.' },
          { icon: '🔌', title: 'Plugin development', description: 'Custom plugins som passar din workflow – från små verktyg till komplex logik.' },
          { icon: '🏗️', title: 'Page builder-expertis', description: 'Elementor, WPBakery, Divi och Gutenberg. Widgets, moduler och tillägg.' },
          { icon: '🔗', title: 'API-integrationer', description: 'Integrationer via REST API eller egna endpoints: CRM, ERP, marketing och betalningar.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Checkout-flöden, produkttyper, betalmetoder och backend-tillägg.' },
          { icon: '⚡', title: 'Prestandaoptimering', description: 'Caching, lazy loading, minifiering och DB-optimering för snabbare sajter.' },
          { icon: '🔒', title: 'Säkerhet', description: 'Best practices, scanning och proaktiv övervakning för att minska risker.' },
          { icon: '☁️', title: 'Hosting & underhåll', description: 'Managed hosting, backups, uppdateringar och övervakning.' },
          { icon: '🚀', title: 'Headless WordPress', description: 'WordPress som headless CMS med Next.js/React/Vue samt REST/GraphQL.' },
        ],
      },
      process: {
        title: { prefix: 'Anlita en WordPress-utvecklare', highlight: 'i 4 steg', suffix: '' },
        subtitle: 'Från första möte till leverans – så jobbar vi.',
        steps: [
          { number: '1', title: 'Intake', description: 'Vi går igenom scope, krav, tidslinje och budget.', bullets: ['Definiera scope', 'Tekniska krav', 'Plan och budget'] },
          { number: '2', title: 'Matchning', description: 'Vi matchar rätt utvecklare baserat på kompetens och tillgänglighet.', bullets: ['Rätt skills', 'Relevant erfarenhet', 'Tillgänglighet'] },
          { number: '3', title: 'Utveckling', description: 'Regelbundna uppdateringar och iterativ leverans håller dig uppdaterad.', bullets: ['Agilt arbetssätt', 'Veckovisa updates', 'Code reviews & test'] },
          { number: '4', title: 'Leverans & support', description: 'Efter leverans finns vi kvar för frågor, fixes och vidareutveckling.', bullets: ['Dokumentation', 'Träning vid behov', 'Support'] },
        ],
      },
      cms: {
        title: { prefix: 'Varför WordPress är', highlight: 'det bästa CMS:et', suffix: '' },
        paragraphs: [
          'WordPress driver över 43% av alla webbplatser och är det mest använda CMS:et i världen.',
          'Styrkan är kombinationen av enkel administration och teknisk flexibilitet – lätt att hantera, men nästan oändligt att bygga ut.',
          'WordPress bygger på beprövade tekniker som PHP, MySQL, JavaScript och CSS.',
        ],
        benefitsHeading: 'Fördelar med WordPress:',
        benefits: [
          { title: 'Enkelt', description: 'Uppdatera innehåll utan teknisk kunskap' },
          { title: 'SEO-vänligt', description: 'Bra grund och plugins som Yoast SEO' },
          { title: 'Flexibelt', description: 'Stort ekosystem och custom möjligheter' },
          { title: 'Stor community', description: 'Aktiva utvecklare och ständig utveckling' },
          { title: 'Kostnadseffektivt', description: 'Open source utan licensavgifter' },
        ],
      },
      flexibility: {
        title: { prefix: 'Flexibelt upplägg för', highlight: 'WordPress-utvecklare', suffix: '' },
        paragraph: 'Oavsett om du behöver några timmar i veckan eller heltid – vi anpassar upplägget efter behov och budget.',
        options: [
          { icon: '⏱️', title: 'Timpris', description: 'Betala endast för arbetade timmar. Perfekt för små ändringar.', note: 'Från några timmar/vecka' },
          { icon: '📅', title: 'Deltid', description: '2–3 dagar per vecka på fast basis.', note: '16–24 timmar/vecka' },
          { icon: '👨‍💻', title: 'Heltid', description: 'Dedikerade utvecklare full-time med max fokus.', note: '40 timmar/vecka' },
        ],
        buttonText: 'Prata om ditt projekt',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Mer WordPress', highlight: 'tjänster', suffix: '' },
        subtitle: 'Upptäck fler WordPress-tjänster för helhetslösningar',
        moreInfoLabel: 'Läs mer →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress-webbplats', description: 'Få en komplett WordPress-sajt byggd' },
          { href: '/wordpress/maatwerk', title: 'Custom WordPress', description: 'Plugins och funktioner på beställning' },
          { href: '/wordpress/partner', title: 'WordPress-byrå', description: '30+ års erfarenhet av WordPress-projekt' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-handel på WordPress' },
        ],
      },
    },
  },
  da: {
    metadata: {
      title: 'WordPress udviklere | 30+ års erfaring | Niblah',
      description:
        'Professionelle WordPress udviklere til custom themes, plugins og komplekse webapps. Fra små ændringer til enterprise projekter. 30+ års udviklingserfaring.',
      keywords:
        'wordpress udvikler, wordpress bureau, wordpress development, custom wordpress, wordpress plugin, wordpress theme udvikling',
      openGraph: {
        title: 'WordPress udviklere | Niblah',
        description: 'Erfarne WordPress udviklere til skræddersyede løsninger og komplekse projekter.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS UDVIKLERE',
      title: 'Erfarne WordPress udviklere til dit projekt',
      description:
        'Niblah leverer professionel WordPress udvikling til projekter i alle størrelser. Vores udviklere har 30+ års erfaring – fra custom themes til komplekse API-integrationer. Uanset om du skal bruge et plugin, en komplet hjemmeside eller support: du får clean code, hurtig levering og fremtidssikre løsninger.',
      ctaText: 'Tal om dit projekt',
      ctaLink: '/contact',
      note: '* Hurtig start med erfarne WordPress udviklere',
      image: '/wordpress-developers.png',
      imageAlt: 'WordPress udviklingsteam',
    },
    sections: {
      why: {
        title: { prefix: 'WordPress udviklere med', highlight: 'dokumenteret ekspertise', suffix: '' },
        paragraphs: [
          'Siden WordPress blev introduceret, har vores udviklere opbygget erfaring med alle dele af CMS’et. Fra PHP og JavaScript til MySQL-optimering – vores viden er dyb og opdateret.',
          'Vi specialiserer os i skræddersyede WordPress løsninger, der rækker ud over standard themes og plugins: custom post types, ACF, REST API-integrationer, WooCommerce extensions og komplekse webapps.',
          'Niblah leverer udviklere, der ikke kun koder – de tænker også arkitektur, performance, sikkerhed og skalering ind.',
        ],
        buildHeading: 'Hvorfor vælge Niblah:',
        buildItems: [
          '30+ års erfaring med WordPress udvikling',
          'Clean, veldokumenteret og vedligeholdbar kode',
          'Erfaring med alle populære page builders',
          'WordPress best practices og kodestandarder',
          'Hurtig kommunikation og transparent fremdrift',
          'Fleksibel indsats: fra få timer til fuldtid',
        ],
      },
      services: {
        title: { prefix: 'WordPress development', highlight: 'ydelser', suffix: '' },
        subtitle: 'Fra små ændringer til fulde custom apps – vores WordPress udviklere kan hjælpe.',
        cards: [
          { icon: '🎨', title: 'Custom theme development', description: 'Skræddersyede themes fra bunden eller tilpasning af eksisterende.' },
          { icon: '🔌', title: 'Plugin development', description: 'Custom plugins der matcher din workflow – fra små tools til kompleks logik.' },
          { icon: '🏗️', title: 'Page builder ekspertise', description: 'Elementor, WPBakery, Divi og Gutenberg. Widgets, moduler og udvidelser.' },
          { icon: '🔗', title: 'API integrationer', description: 'Integrationer via REST API eller egne endpoints: CRM, ERP, marketing og betaling.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Checkout flows, produkttyper, betalingsmetoder og backend extensions.' },
          { icon: '⚡', title: 'Performance optimering', description: 'Caching, lazy loading, minificering og DB-optimering for hurtigere sites.' },
          { icon: '🔒', title: 'Sikkerhed', description: 'Best practices, scanning og proaktiv overvågning mod malware.' },
          { icon: '☁️', title: 'Hosting & vedligehold', description: 'Managed hosting, backups, updates og overvågning.' },
          { icon: '🚀', title: 'Headless WordPress', description: 'WordPress som headless CMS med Next.js/React/Vue samt REST/GraphQL.' },
        ],
      },
      process: {
        title: { prefix: 'Sæt en WordPress udvikler på', highlight: 'i 4 trin', suffix: '' },
        subtitle: 'Fra intake til levering – sådan arbejder vi.',
        steps: [
          { number: '1', title: 'Intake', description: 'Vi afklarer scope, krav, timeline og budget.', bullets: ['Afgrænse scope', 'Tekniske krav', 'Plan og budget'] },
          { number: '2', title: 'Match', description: 'Vi matcher den rette udvikler baseret på skills og tilgængelighed.', bullets: ['Rette kompetencer', 'Relevant erfaring', 'Tilgængelighed'] },
          { number: '3', title: 'Udvikling', description: 'Løbende status og iterativ levering giver fuld transparens.', bullets: ['Agil proces', 'Ugentlige updates', 'Code reviews & test'] },
          { number: '4', title: 'Levering & support', description: 'Efter levering hjælper vi med spørgsmål, fixes og videreudvikling.', bullets: ['Dokumentation', 'Træning ved behov', 'Support'] },
        ],
      },
      cms: {
        title: { prefix: 'Hvorfor WordPress er', highlight: 'det bedste CMS', suffix: '' },
        paragraphs: [
          'WordPress driver over 43% af alle websites og er verdens mest udbredte CMS.',
          'Fordelen er kombinationen af brugervenlighed og teknisk fleksibilitet – nemt at redigere, men kan udbygges uendeligt.',
          'WordPress bygger på gennemtestede teknologier som PHP, MySQL, JavaScript og CSS.',
        ],
        benefitsHeading: 'Fordele ved WordPress:',
        benefits: [
          { title: 'Brugervenligt', description: 'Opdater indhold uden teknisk viden' },
          { title: 'SEO-venligt', description: 'Godt fundament og plugins som Yoast SEO' },
          { title: 'Fleksibelt', description: 'Stort økosystem og custom muligheder' },
          { title: 'Stor community', description: 'Aktive udviklere og kontinuerlig udvikling' },
          { title: 'Omkostningseffektivt', description: 'Open source uden licensomkostninger' },
        ],
      },
      flexibility: {
        title: { prefix: 'Fleksibelt setup med', highlight: 'WordPress udviklere', suffix: '' },
        paragraph: 'Uanset om du har brug for få timer om ugen eller fuldtid – vi tilpasser setup efter behov og budget.',
        options: [
          { icon: '⏱️', title: 'Timebasis', description: 'Betal kun for arbejdstimer. Perfekt til små ændringer.', note: 'Fra få timer/uge' },
          { icon: '📅', title: 'Deltid', description: '2–3 dage om ugen på fast basis.', note: '16–24 timer/uge' },
          { icon: '👨‍💻', title: 'Fuldtid', description: 'Dedikerede udviklere full-time med maksimal fokus.', note: '40 timer/uge' },
        ],
        buttonText: 'Tal om dit projekt',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Flere WordPress', highlight: 'ydelser', suffix: '' },
        subtitle: 'Se flere WordPress ydelser til komplette website-løsninger',
        moreInfoLabel: 'Læs mere →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress website', description: 'Få en komplet WordPress-side bygget' },
          { href: '/wordpress/maatwerk', title: 'Custom WordPress', description: 'Plugins og funktioner på bestilling' },
          { href: '/wordpress/partner', title: 'WordPress bureau', description: '30+ års erfaring med WordPress projekter' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-handel med WordPress' },
        ],
      },
    },
  },
  fr: {
    metadata: {
      title: 'Développeur WordPress | 30+ ans d’expérience | Niblah',
      description:
        'Développeurs WordPress professionnels pour thèmes sur-mesure, plugins et applications web complexes. Des petites modifications aux projets enterprise. 30+ ans d’expérience.',
      keywords:
        'développeur wordpress, agence wordpress, wordpress development, wordpress sur mesure, plugin wordpress, thème wordpress',
      openGraph: {
        title: 'Développeur WordPress | Niblah',
        description: 'Des développeurs WordPress expérimentés pour des solutions sur mesure et des projets complexes.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'DÉVELOPPEURS WORDPRESS',
      title: 'Des développeurs WordPress experts pour votre projet',
      description:
        'Niblah propose des services de développement WordPress pour des projets de toute taille. 30+ ans d’expérience : thèmes sur mesure, plugins et intégrations API complexes. Besoin d’un plugin, d’un site complet ou de support technique ? Nous livrons du code propre, rapidement, et durablement.',
      ctaText: 'Parler de votre projet',
      ctaLink: '/contact',
      note: '* Démarrage rapide avec des développeurs expérimentés',
      image: '/wordpress-developers.png',
      imageAlt: 'Équipe de développement WordPress',
    },
    sections: {
      why: {
        title: { prefix: 'Des développeurs WordPress avec une', highlight: 'expertise prouvée', suffix: '' },
        paragraphs: [
          'Depuis l’arrivée de WordPress, nos développeurs ont acquis une expérience sur toutes les facettes du CMS. PHP, JavaScript, optimisation MySQL : notre expertise est profonde et à jour.',
          'Nous sommes spécialisés dans le sur-mesure : custom post types, Advanced Custom Fields, intégrations REST API, extensions WooCommerce et applications web complexes.',
          'Avec Niblah, vous obtenez des développeurs qui ne se contentent pas de coder : ils pensent aussi architecture, performance, sécurité et scalabilité.',
        ],
        buildHeading: 'Pourquoi choisir Niblah :',
        buildItems: [
          '30+ ans d’expérience WordPress',
          'Code propre, documenté et maintenable',
          'Expérience avec les principaux page builders',
          'Bonnes pratiques et standards WordPress',
          'Communication rapide et suivi transparent',
          'Flexibilité : de quelques heures à temps plein',
        ],
      },
      services: {
        title: { prefix: 'Services de développement', highlight: 'WordPress', suffix: '' },
        subtitle: 'Des petites modifications aux applications sur mesure : nos développeurs peuvent le faire.',
        cards: [
          { icon: '🎨', title: 'Thèmes sur mesure', description: 'Thèmes WordPress from scratch ou adaptation d’un thème existant.' },
          { icon: '🔌', title: 'Développement de plugins', description: 'Plugins sur mesure adaptés à votre workflow.' },
          { icon: '🏗️', title: 'Page builders', description: 'Elementor, WPBakery, Divi, Gutenberg : widgets et modules sur mesure.' },
          { icon: '🔗', title: 'Intégrations API', description: 'CRM, ERP, outils marketing et paiements via REST API / endpoints custom.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Checkout, types de produits, paiements et extensions back-office.' },
          { icon: '⚡', title: 'Performance', description: 'Optimisation DB, cache, lazy loading, minification pour accélérer votre site.' },
          { icon: '🔒', title: 'Sécurité', description: 'Hardening, scans et monitoring proactif contre les malwares.' },
          { icon: '☁️', title: 'Hébergement & maintenance', description: 'Hébergement managé, backups, mises à jour et monitoring.' },
          { icon: '🚀', title: 'Headless WordPress', description: 'WordPress headless avec Next.js/React/Vue, REST API et GraphQL.' },
        ],
      },
      process: {
        title: { prefix: 'Travailler avec un développeur WordPress', highlight: 'en 4 étapes', suffix: '' },
        subtitle: 'De l’intake à la livraison : voici notre manière de travailler.',
        steps: [
          { number: '1', title: 'Intake', description: 'On clarifie scope, besoins, délais et budget.', bullets: ['Définir le scope', 'Exigences techniques', 'Planning et budget'] },
          { number: '2', title: 'Matching', description: 'On choisit le bon profil selon les compétences et la disponibilité.', bullets: ['Compétences', 'Expérience', 'Disponibilité'] },
          { number: '3', title: 'Développement', description: 'Updates régulières, communication claire et livraison itérative.', bullets: ['Process agile', 'Updates hebdo', 'Code review & tests'] },
          { number: '4', title: 'Livraison & support', description: 'Après livraison, support, documentation et maintenance optionnelle.', bullets: ['Documentation', 'Formation si besoin', 'Support'] },
        ],
      },
      cms: {
        title: { prefix: 'Pourquoi WordPress est', highlight: 'le meilleur CMS', suffix: '' },
        paragraphs: [
          'WordPress propulse plus de 43% des sites web et reste le CMS le plus populaire au monde.',
          'Son point fort : simplicité d’utilisation et flexibilité technique. Facile à gérer, mais extensible à l’infini pour les développeurs.',
          'WordPress repose sur des technologies éprouvées (PHP, MySQL, JavaScript, CSS), stables et bien documentées.',
        ],
        benefitsHeading: 'Avantages de WordPress :',
        benefits: [
          { title: 'Simple', description: 'Mettre à jour le contenu sans connaissances techniques' },
          { title: 'SEO-friendly', description: 'Bon socle et plugins comme Yoast SEO' },
          { title: 'Flexible', description: 'Écosystème énorme et possibilités sur mesure' },
          { title: 'Grande communauté', description: 'Développeurs actifs et amélioration continue' },
          { title: 'Économique', description: 'Open source sans licences' },
        ],
      },
      flexibility: {
        title: { prefix: 'Un modèle flexible pour des', highlight: 'développeurs WordPress', suffix: '' },
        paragraph: 'Quelques heures par semaine ou à temps plein : nous adaptons l’engagement à vos besoins et à votre budget.',
        options: [
          { icon: '⏱️', title: 'À l’heure', description: 'Payez uniquement les heures travaillées. Idéal pour petites modifications.', note: 'Dès quelques heures/semaine' },
          { icon: '📅', title: 'Temps partiel', description: '2–3 jours par semaine sur base fixe.', note: '16–24h/semaine' },
          { icon: '👨‍💻', title: 'Temps plein', description: 'Développeur(s) dédié(s) à 100% avec focus maximal.', note: '40h/semaine' },
        ],
        buttonText: 'Parler de votre projet',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Plus de services', highlight: 'WordPress', suffix: '' },
        subtitle: 'Découvrez nos autres services WordPress pour une solution complète',
        moreInfoLabel: 'En savoir plus →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'Site WordPress', description: 'Faire créer un site WordPress complet' },
          { href: '/wordpress/maatwerk', title: 'WordPress sur mesure', description: 'Plugins et fonctionnalités sur mesure' },
          { href: '/wordpress/partner', title: 'Agence WordPress', description: '30+ ans d’expérience sur WordPress' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-commerce avec WordPress' },
        ],
      },
    },
  },
  it: {
    metadata: {
      title: 'Sviluppatori WordPress | 30+ anni di esperienza | Niblah',
      description:
        'Sviluppatori WordPress professionisti per temi custom, plugin e web app complesse. Da piccole modifiche a progetti enterprise. 30+ anni di esperienza.',
      keywords:
        'sviluppatore wordpress, agenzia wordpress, wordpress development, wordpress su misura, plugin wordpress, tema wordpress',
      openGraph: {
        title: 'Sviluppatori WordPress | Niblah',
        description: 'Sviluppatori WordPress esperti per soluzioni su misura e progetti complessi.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'SVILUPPATORI WORDPRESS',
      title: 'Sviluppatori WordPress esperti per il tuo progetto',
      description:
        'Niblah offre sviluppo WordPress professionale per progetti di qualsiasi dimensione. 30+ anni di esperienza: temi custom, plugin e integrazioni API complesse. Che ti serva un plugin, un sito completo o supporto tecnico, consegniamo codice pulito, velocemente, e soluzioni future-proof.',
      ctaText: 'Parliamo del tuo progetto',
      ctaLink: '/contact',
      note: '* Partenza rapida con sviluppatori WordPress esperti',
      image: '/wordpress-developers.png',
      imageAlt: 'Team di sviluppo WordPress',
    },
    sections: {
      why: {
        title: { prefix: 'Sviluppatori WordPress con', highlight: 'competenza comprovata', suffix: '' },
        paragraphs: [
          'Dall’introduzione di WordPress, i nostri sviluppatori hanno maturato esperienza su ogni aspetto del CMS. Da PHP e JavaScript all’ottimizzazione MySQL: competenza profonda e aggiornata.',
          'Siamo specializzati in soluzioni su misura oltre temi e plugin standard: custom post types, Advanced Custom Fields, integrazioni REST API, estensioni WooCommerce e web app complesse.',
          'Con Niblah hai sviluppatori che non si limitano a scrivere codice: pensano ad architettura, performance, sicurezza e scalabilità.',
        ],
        buildHeading: 'Perché scegliere Niblah:',
        buildItems: [
          '30+ anni di esperienza in WordPress',
          'Codice pulito, documentato e manutenibile',
          'Esperienza con i principali page builder',
          'Best practice e standard WordPress',
          'Comunicazione rapida e stato trasparente',
          'Flessibilità: da poche ore a full-time',
        ],
      },
      services: {
        title: { prefix: 'Servizi di sviluppo', highlight: 'WordPress', suffix: '' },
        subtitle: 'Dalle piccole modifiche alle applicazioni custom: possiamo aiutarti.',
        cards: [
          { icon: '🎨', title: 'Theme su misura', description: 'Temi WordPress da zero o adattamento di temi esistenti a design e requisiti.' },
          { icon: '🔌', title: 'Sviluppo plugin', description: 'Plugin su misura per il tuo workflow, da utility a logiche complesse.' },
          { icon: '🏗️', title: 'Page builder', description: 'Elementor, WPBakery, Divi, Gutenberg: widget, moduli ed estensioni.' },
          { icon: '🔗', title: 'Integrazioni API', description: 'CRM, ERP, marketing e pagamenti via REST API o endpoint custom.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Checkout, tipi prodotto, metodi pagamento ed estensioni backend.' },
          { icon: '⚡', title: 'Performance', description: 'Ottimizzazione DB, caching, lazy loading e minificazione per siti più veloci.' },
          { icon: '🔒', title: 'Sicurezza', description: 'Hardening, scansioni e monitoraggio proattivo contro malware.' },
          { icon: '☁️', title: 'Hosting & maintenance', description: 'Hosting gestito, backup, aggiornamenti e monitoraggio 24/7.' },
          { icon: '🚀', title: 'Headless WordPress', description: 'WordPress headless con Next.js/React/Vue e REST/GraphQL.' },
        ],
      },
      process: {
        title: { prefix: 'Ingaggiare uno sviluppatore WordPress', highlight: 'in 4 step', suffix: '' },
        subtitle: 'Dall’intake alla consegna: ecco come lavoriamo.',
        steps: [
          { number: '1', title: 'Intake', description: 'Definiamo scope, requisiti, tempistiche e budget.', bullets: ['Definire scope', 'Requisiti tecnici', 'Piano e budget'] },
          { number: '2', title: 'Matching', description: 'Selezioniamo il profilo giusto in base a competenze e disponibilità.', bullets: ['Skill giuste', 'Esperienza', 'Disponibilità'] },
          { number: '3', title: 'Sviluppo', description: 'Update regolari e delivery iterativa per massima trasparenza.', bullets: ['Processo agile', 'Update settimanali', 'Code review & test'] },
          { number: '4', title: 'Consegna & supporto', description: 'Dopo la consegna, supporto, documentazione e maintenance opzionale.', bullets: ['Documentazione', 'Training se serve', 'Supporto'] },
        ],
      },
      cms: {
        title: { prefix: 'Perché WordPress è', highlight: 'il miglior CMS', suffix: '' },
        paragraphs: [
          'WordPress alimenta oltre il 43% dei siti web ed è il CMS più utilizzato al mondo.',
          'Il suo punto forte è la combinazione di semplicità d’uso e flessibilità tecnica: facile da gestire, ma estendibile quasi all’infinito.',
          'WordPress si basa su tecnologie collaudate (PHP, MySQL, JavaScript, CSS) stabili e ben documentate.',
        ],
        benefitsHeading: 'Vantaggi di WordPress:',
        benefits: [
          { title: 'Facile', description: 'Aggiorna i contenuti senza competenze tecniche' },
          { title: 'SEO-friendly', description: 'Ottima base e plugin come Yoast SEO' },
          { title: 'Flessibile', description: 'Ecosistema enorme e possibilità custom' },
          { title: 'Grande community', description: 'Sviluppatori attivi e miglioramenti continui' },
          { title: 'Conveniente', description: 'Open source senza costi di licenza' },
        ],
      },
      flexibility: {
        title: { prefix: 'Modello flessibile per', highlight: 'sviluppatori WordPress', suffix: '' },
        paragraph: 'Che ti servano poche ore a settimana o full-time, adattiamo l’ingaggio a esigenze e budget.',
        options: [
          { icon: '⏱️', title: 'A ore', description: 'Paghi solo le ore lavorate. Perfetto per piccole modifiche.', note: 'Da poche ore/settimana' },
          { icon: '📅', title: 'Part-time', description: '2–3 giorni a settimana su base fissa.', note: '16–24 ore/settimana' },
          { icon: '👨‍💻', title: 'Full-time', description: 'Sviluppatore/i dedicati full-time con massimo focus.', note: '40 ore/settimana' },
        ],
        buttonText: 'Parliamo del tuo progetto',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Altri servizi', highlight: 'WordPress', suffix: '' },
        subtitle: 'Scopri gli altri servizi WordPress per una soluzione completa',
        moreInfoLabel: 'Scopri di più →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'Sito WordPress', description: 'Realizza un sito WordPress completo' },
          { href: '/wordpress/maatwerk', title: 'WordPress su misura', description: 'Plugin e funzionalità su misura' },
          { href: '/wordpress/partner', title: 'Agenzia WordPress', description: '30+ anni di esperienza su WordPress' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-commerce con WordPress' },
        ],
      },
    },
  },
};

export function getWordPressDeveloperCopy(locale) {
  return getLocaleCopy(copy, locale);
}

