import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'WordPress Expert Agency | 30+ Years of Experience | Niblah',
      description:
        'Niblah is a WordPress expert agency with 30+ years of experience. From small websites to enterprise solutions. WooCommerce, custom development and strategic advice.',
      keywords: 'wordpress expert, wordpress agency, wordpress specialist, woocommerce expert, wordpress development agency',
      openGraph: {
        title: 'WordPress Expert Agency | Niblah',
        description: 'Proven WordPress expertise from small websites to enterprise solutions.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS EXPERT AGENCY',
      title: 'Proven WordPress expertise for your online success',
      description:
        'Niblah is a WordPress expert agency with 30+ years of experience building websites that perform. From small business sites to complex enterprise platforms and WooCommerce stores. We cover custom development, performance, SEO and strategic advice—future-proof from day one.',
      ctaText: 'Work with WordPress experts',
      ctaLink: '/contact',
      note: '* 30+ years of WordPress & WooCommerce development',
      image: '/wordpress-expert.png',
      imageAlt: 'WordPress expert development',
    },
    sections: {
      expert: {
        title: { prefix: 'Why choose a', highlight: 'WordPress expert agency', suffix: '?' },
        paragraphs: [
          'WordPress powers 43%+ of websites worldwide—but not every WordPress developer is equal. True expertise goes beyond installing themes and plugins.',
          'At Niblah we have 30+ years of experience: custom themes, advanced WooCommerce integrations, performance optimization and security best practices.',
          'The difference? Deep technical knowledge, strategic insight and proven results—so your website is not only beautiful, but also fast, secure and scalable.',
        ],
        listHeading: 'Our WordPress expertise:',
        listItems: [
          'Custom theme and plugin development',
          'WooCommerce e-commerce solutions',
          'Performance optimization and caching',
          'Security hardening and malware prevention',
          'Technical SEO optimization',
          'API integrations and headless WordPress',
        ],
      },
      benefits: {
        title: { prefix: 'Why choose', highlight: 'Niblah as WordPress expert', suffix: '?' },
        subtitle: '30+ years of experience makes the difference between “a website” and a strong online presence.',
        cards: [
          {
            icon: '🎓',
            title: 'Deep expertise',
            description:
              'We know WordPress inside out: database optimization, custom post types, Gutenberg blocks, REST APIs—no challenge is too complex.',
          },
          {
            icon: '⚡',
            title: 'Performance focus',
            description:
              'Speed is crucial. We optimize caching, database queries, images and code efficiency for strong Core Web Vitals.',
          },
          {
            icon: '🔒',
            title: 'Security first',
            description:
              'We implement best practices: hardening, updates, monitoring and proactive malware prevention to keep your site safe.',
          },
          {
            icon: '🛒',
            title: 'WooCommerce experts',
            description:
              'From simple stores to complex B2B platforms with custom functionality and API integrations.',
          },
          {
            icon: '🔧',
            title: 'Custom development',
            description: 'Custom plugins, themes and features tailored to your needs—no compromises.',
          },
          {
            icon: '📈',
            title: 'SEO optimized',
            description:
              'Technical SEO is built-in: clean code, fast load times, schema markup and crawlable structure for better rankings.',
          },
        ],
      },
      services: {
        title: { prefix: 'Our', highlight: 'WordPress services', suffix: '' },
        subtitle: 'From strategy and build to maintenance and growth—we cover the full spectrum.',
        cards: [
          {
            icon: '🎨',
            title: 'Custom theme development',
            description: 'Tailor-made themes that match your brand. Responsive, fast and future-proof.',
          },
          {
            icon: '🔌',
            title: 'Plugin development',
            description: 'Custom plugins—from small utilities to complex business logic.',
          },
          {
            icon: '🛒',
            title: 'WooCommerce development',
            description: 'Custom checkout, payment gateways, shipping methods and product types.',
          },
          {
            icon: '⚡',
            title: 'Performance optimization',
            description: 'Detailed optimization for blazing fast performance and Core Web Vitals.',
          },
          {
            icon: '🔧',
            title: 'Maintenance & support',
            description: 'Proactive maintenance, updates, backups and monitoring—keep your site secure and up to date.',
          },
          {
            icon: '🔗',
            title: 'API integrations',
            description: 'Connect WordPress to CRM/ERP/marketing tools with REST APIs and webhooks.',
          },
          {
            icon: '🚀',
            title: 'Headless WordPress',
            description: 'WordPress as CMS with Next.js/React/Vue frontends for maximum performance.',
          },
          {
            icon: '📱',
            title: 'Multisite networks',
            description: 'WordPress Multisite for multiple sites in one installation—ideal for franchises and enterprises.',
          },
          {
            icon: '🔍',
            title: 'SEO & analytics',
            description: 'Complete SEO setup, tracking implementation and data analysis—from technical SEO to content strategy.',
          },
        ],
      },
      process: {
        title: { prefix: 'How we work together on your', highlight: 'WordPress success', suffix: '' },
        subtitle: 'Transparent approach from strategy to launch and continuous optimization.',
        steps: [
          {
            number: '1',
            title: 'Strategy & analysis',
            description:
              'We start with a deep analysis of your goals, audience and competition. What do you want to achieve and how will we get there?',
          },
          {
            number: '2',
            title: 'Design & development',
            description:
              'Custom theme and functionality built with best practices. Clean code, performance optimized and future-proof.',
          },
          {
            number: '3',
            title: 'Testing & launch',
            description:
              'Extensive testing across devices and browsers. Performance checks, security review and SEO verification for a smooth launch.',
          },
          {
            number: '4',
            title: 'Growth & optimization',
            description:
              'Continuous monitoring, updates and improvements. Data-driven optimizations and proactive maintenance for sustainable success.',
          },
        ],
      },
      cta: {
        title: { prefix: 'Ready to work with', highlight: 'WordPress experts', suffix: '?' },
        paragraphs: [
          'With 30+ years of WordPress development experience we know how to level up your website. From small business sites to complex enterprise platforms—we have done it.',
          'Let’s discuss what WordPress can do for your business and how we can strengthen your online presence.',
        ],
        buttonText: 'Start your WordPress project',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'More WordPress', highlight: 'services', suffix: '' },
        subtitle: 'Explore our other WordPress services for complete website solutions',
        moreInfoLabel: 'Learn more →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress website', description: 'Have your complete WordPress website built' },
          { href: '/wordpress/maatwerk', title: 'WordPress custom work', description: 'Custom plugins and tailored functionality' },
          { href: '/wordpress/thema', title: 'WordPress theme', description: 'Launch fast with a proven theme' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'Powerful e-commerce on WordPress' },
        ],
      },
    },
  },
  nl: {
    metadata: {
      title: 'WordPress Expert Agency | 30+ Jaar Ervaring | Niblah',
      description:
        'Niblah is WordPress expert agency met 30+ jaar ervaring. Van kleine websites tot enterprise oplossingen. WooCommerce, maatwerk en strategisch advies voor je online succes.',
      keywords: 'wordpress expert, wordpress agency, wordpress specialist, woocommerce expert, wordpress development agency',
      openGraph: {
        title: 'WordPress Expert Agency | Niblah',
        description: 'WordPress expertise met 30+ jaar ervaring voor kleine websites tot enterprise oplossingen.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS EXPERT AGENCY',
      title: 'Bewezen WordPress expertise voor jouw online succes',
      description:
        'Niblah is WordPress expert agency met 30+ jaar ervaring in het bouwen van websites die écht presteren. Van kleine bedrijfswebsites tot complexe enterprise oplossingen en WooCommerce webshops. Onze expertise omvat custom development, performance optimalisatie, SEO en strategisch advies. Wij bouwen niet zomaar een website - we creëren een toekomstbestendige online aanwezigheid.',
      ctaText: 'Werk met WordPress experts',
      ctaLink: '/contact',
      note: '* 30+ jaar ervaring met WordPress en WooCommerce development',
      image: '/wordpress-expert.png',
      imageAlt: 'WordPress expert development',
    },
    sections: {
      expert: {
        title: { prefix: 'Waarom kiezen voor een', highlight: 'WordPress Expert Agency', suffix: '?' },
        paragraphs: [
          'WordPress powers meer dan 43% van alle websites wereldwijd, maar dat betekent niet dat elke WordPress developer gelijk is. Echte WordPress expertise gaat verder dan het installeren van themes en plugins.',
          'Bij Niblah hebben we 30+ jaar ervaring met WordPress development, van kleine bedrijfswebsites tot complexe enterprise platforms. We begrijpen WordPress van binnen en buiten: van custom theme development tot geavanceerde WooCommerce integraties, van performance optimalisatie tot security best practices.',
          'Het verschil? Diepgaande technische kennis, strategisch inzicht en bewezen resultaten die zorgen dat jouw website niet alleen mooi is, maar ook optimaal functioneert en groeit met je bedrijf.',
        ],
        listHeading: 'Onze WordPress expertise:',
        listItems: [
          'Custom theme en plugin development',
          'WooCommerce e-commerce oplossingen',
          'Performance optimalisatie en caching',
          'Security hardening en malware preventie',
          'SEO technische optimalisatie',
          'API integraties en headless WordPress',
        ],
      },
      benefits: {
        title: { prefix: 'Waarom kiezen voor', highlight: 'Niblah als WordPress expert', suffix: '?' },
        subtitle: '30+ jaar ervaring maakt het verschil tussen een gewone website en een succesvolle online aanwezigheid',
        cards: [
          {
            icon: '🎓',
            title: 'Diepgaande Kennis',
            description:
              'We kennen WordPress van binnenuit. Van database optimalisatie tot custom post types, van Gutenberg blocks tot REST API - geen uitdaging is te complex.',
          },
          {
            icon: '⚡',
            title: 'Performance Focus',
            description:
              'Snelle websites zijn cruciaal. We optimaliseren tot in detail: caching, database queries, image optimization en code efficiency voor maximale snelheid.',
          },
          {
            icon: '🔒',
            title: 'Security First',
            description:
              'WordPress security is essentieel. We implementeren best practices: hardening, regular updates, monitoring en proactive malware preventie.',
          },
          {
            icon: '🛒',
            title: 'WooCommerce Experts',
            description:
              'Specialist in WooCommerce webshops. Van simpele shops tot complexe B2B platforms met custom functionaliteit en API koppelingen.',
          },
          {
            icon: '🔧',
            title: 'Maatwerk Development',
            description:
              'Custom plugins, themes en functionaliteiten die perfect aansluiten op jouw behoeften. Geen compromissen, gewoon maatwerk dat werkt.',
          },
          {
            icon: '📈',
            title: 'SEO Geoptimaliseerd',
            description:
              'Technische SEO is ingebouwd. Clean code, snelle laadtijden, proper schema markup en crawlbare structuur voor hogere Google rankings.',
          },
        ],
      },
      services: {
        title: { prefix: 'Onze', highlight: 'WordPress diensten', suffix: '' },
        subtitle: 'Van strategie tot ontwikkeling, onderhoud en groei - wij dekken het volledige spectrum',
        cards: [
          {
            icon: '🎨',
            title: 'Custom Theme Development',
            description:
              'Maatwerk WordPress themes die perfect aansluiten op je huisstijl en functionele eisen. Responsive, snel en toekomstbestendig.',
          },
          {
            icon: '🔌',
            title: 'Plugin Development',
            description:
              'Custom plugins voor specifieke functionaliteit. Van simple utilities tot complexe business logic geïntegreerd in WordPress.',
          },
          {
            icon: '🛒',
            title: 'WooCommerce Development',
            description:
              'Complete e-commerce oplossingen met WooCommerce. Custom checkout, payment gateways, shipping methods en product types.',
          },
          {
            icon: '⚡',
            title: 'Performance Optimalisatie',
            description:
              'Snelheid is cruciaal. We optimaliseren je WordPress site tot in detail voor blazing fast performance en Core Web Vitals.',
          },
          {
            icon: '🔧',
            title: 'Maintenance & Support',
            description:
              'Proactief onderhoud, updates, backups en 24/7 monitoring. Jouw website blijft veilig, snel en up-to-date.',
          },
          {
            icon: '🔗',
            title: 'API Integraties',
            description:
              "Koppel WordPress aan externe systemen: CRM, ERP, marketing tools. Custom REST API's en webhooks voor automatisering.",
          },
          {
            icon: '🚀',
            title: 'Headless WordPress',
            description:
              'WordPress als CMS met modern frontend frameworks. Next.js, React of Vue.js voor ultimate performance en flexibility.',
          },
          {
            icon: '📱',
            title: 'Multisite Netwerken',
            description:
              'WordPress Multisite voor meerdere websites vanuit één installatie. Perfect voor franchises, universiteiten en enterprises.',
          },
          {
            icon: '🔍',
            title: 'SEO & Analytics',
            description:
              'Complete SEO setup, tracking implementation en data analysis. Van technische SEO tot content strategie.',
          },
        ],
      },
      process: {
        title: { prefix: 'Zo werken we samen aan jouw', highlight: 'WordPress succes', suffix: '' },
        subtitle: 'Transparante aanpak van strategie tot live gang en doorlopende optimalisatie',
        steps: [
          {
            number: '1',
            title: 'Strategie & Analyse',
            description:
              'We starten met een diepgaande analyse van je doelen, doelgroep en concurrentie. Wat wil je bereiken en hoe gaan we dat realiseren?',
          },
          {
            number: '2',
            title: 'Design & Development',
            description:
              'Custom theme en functionaliteit ontwikkeling volgens best practices. Clean code, performance optimized en toekomstbestendig.',
          },
          {
            number: '3',
            title: 'Testing & Launch',
            description:
              'Uitgebreide testing op alle devices en browsers. Performance checks, security audit en SEO verificatie voor de perfecte launch.',
          },
          {
            number: '4',
            title: 'Groei & Optimalisatie',
            description:
              'Continue monitoring, updates en optimalisaties. Data-driven verbeteringen en proactief onderhoud voor duurzaam succes.',
          },
        ],
      },
      cta: {
        title: { prefix: 'Klaar om te werken met', highlight: 'WordPress experts', suffix: '?' },
        paragraphs: [
          'Met 30+ jaar ervaring in WordPress development weten we precies hoe we jouw website naar een hoger niveau tillen. Van kleine bedrijfswebsites tot complexe enterprise platforms - we hebben het allemaal gedaan.',
          'Laten we samen bespreken wat WordPress voor jouw bedrijf kan betekenen en hoe we jouw online aanwezigheid kunnen versterken.',
        ],
        buttonText: 'Start je WordPress project',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Meer WordPress', highlight: 'Services', suffix: '' },
        subtitle: 'Ontdek onze andere WordPress diensten voor complete website oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress Website', description: 'Laat je volledige WordPress website bouwen' },
          { href: '/wordpress/maatwerk', title: 'WordPress Maatwerk', description: 'Custom plugins en functionaliteiten op maat' },
          { href: '/wordpress/thema', title: 'WordPress Thema', description: "Snel en kostenefficiënt starten met thema's" },
          { href: '/wordpress/woocommerce', title: 'WooCommerce Webshop', description: 'Krachtige e-commerce met WordPress' },
        ],
      },
    },
  },
  de: {
    metadata: {
      title: 'WordPress Expertenagentur | 30+ Jahre Erfahrung | Niblah',
      description:
        'Niblah ist eine WordPress-Expertenagentur mit 30+ Jahren Erfahrung. Von kleinen Websites bis Enterprise. WooCommerce, Custom Development und Beratung.',
      keywords: 'wordpress experte, wordpress agentur, wordpress spezialist, woocommerce experte, wordpress entwicklungsagentur',
      openGraph: {
        title: 'WordPress Expertenagentur | Niblah',
        description: 'WordPress Expertise für kleine Websites bis Enterprise Lösungen.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS EXPERTENAGENTUR',
      title: 'Bewährte WordPress Expertise für deinen Online-Erfolg',
      description:
        'Niblah baut WordPress-Lösungen, die performen: von Unternehmensseiten bis komplexe Plattformen und WooCommerce Shops. Custom Development, Performance, SEO und Strategie – zukunftssicher von Tag eins.',
      ctaText: 'Mit WordPress Experten arbeiten',
      ctaLink: '/contact',
      note: '* 30+ Jahre WordPress & WooCommerce Development',
      image: '/wordpress-expert.png',
      imageAlt: 'WordPress Expertenentwicklung',
    },
    sections: {
      expert: {
        title: { prefix: 'Warum eine', highlight: 'WordPress Expertenagentur', suffix: '?' },
        paragraphs: [
          'WordPress betreibt 43%+ aller Websites. Aber echte Expertise ist mehr als Themes/Plugins zu installieren.',
          'Wir haben 30+ Jahre Erfahrung: Custom Themes, WooCommerce Integrationen, Performance und Security Best Practices.',
          'Der Unterschied: tiefes technisches Know-how, strategischer Blick und Ergebnisse – schnell, sicher und skalierbar.',
        ],
        listHeading: 'Unsere Expertise:',
        listItems: [
          'Custom Theme- und Plugin-Entwicklung',
          'WooCommerce E-Commerce Lösungen',
          'Performance-Optimierung & Caching',
          'Security Hardening & Malware Prevention',
          'Technisches SEO',
          'API Integrationen & Headless WordPress',
        ],
      },
      benefits: {
        title: { prefix: 'Warum', highlight: 'Niblah als WordPress Experte', suffix: '?' },
        subtitle: '30+ Jahre Erfahrung machen den Unterschied.',
        cards: [
          { icon: '🎓', title: 'Tiefes Know-how', description: 'Von Datenbank bis Gutenberg/REST API – wir lösen komplexe Aufgaben.' },
          { icon: '⚡', title: 'Performance Fokus', description: 'Caching, Queries, Bilder und Code für starke Core Web Vitals.' },
          { icon: '🔒', title: 'Security First', description: 'Hardening, Updates, Monitoring und proaktive Prävention.' },
          { icon: '🛒', title: 'WooCommerce Experten', description: 'Von einfachen Shops bis komplexe B2B Plattformen.' },
          { icon: '🔧', title: 'Custom Development', description: 'Maßgeschneiderte Plugins, Themes und Funktionen.' },
          { icon: '📈', title: 'SEO optimiert', description: 'Clean Code, schnelle Ladezeiten und strukturierte Daten für Rankings.' },
        ],
      },
      services: {
        title: { prefix: 'Unsere', highlight: 'WordPress Services', suffix: '' },
        subtitle: 'Von Strategie bis Wachstum – wir decken alles ab.',
        cards: [
          { icon: '🎨', title: 'Custom Theme Development', description: 'Maßgeschneiderte Themes: responsive, schnell, langlebig.' },
          { icon: '🔌', title: 'Plugin Development', description: 'Individuelle Plugins – von klein bis komplex.' },
          { icon: '🛒', title: 'WooCommerce Development', description: 'Checkout, Payments, Shipping und Produktlogik nach Maß.' },
          { icon: '⚡', title: 'Performance', description: 'Optimierung für Geschwindigkeit und Core Web Vitals.' },
          { icon: '🔧', title: 'Wartung & Support', description: 'Updates, Backups, Monitoring – sicher und stabil.' },
          { icon: '🔗', title: 'API Integrationen', description: 'CRM/ERP/Tools via REST APIs und Webhooks verbinden.' },
          { icon: '🚀', title: 'Headless WordPress', description: 'WordPress als CMS mit Next.js/React/Vue Frontend.' },
          { icon: '📱', title: 'Multisite', description: 'Mehrere Websites in einer Installation – ideal für Enterprise.' },
          { icon: '🔍', title: 'SEO & Analytics', description: 'SEO Setup, Tracking und Analyse von Technik bis Content.' },
        ],
      },
      process: {
        title: { prefix: 'So erreichen wir deinen', highlight: 'WordPress Erfolg', suffix: '' },
        subtitle: 'Transparent von Strategie bis Optimierung.',
        steps: [
          { number: '1', title: 'Strategie & Analyse', description: 'Ziele, Zielgruppe und Wettbewerb analysieren.' },
          { number: '2', title: 'Design & Development', description: 'Clean Code, Performance und Best Practices.' },
          { number: '3', title: 'Testing & Launch', description: 'Device/Browser Tests, Security und SEO Checks.' },
          { number: '4', title: 'Wachstum & Optimierung', description: 'Monitoring, Updates und datengetriebene Verbesserungen.' },
        ],
      },
      cta: {
        title: { prefix: 'Bereit für', highlight: 'WordPress Experten', suffix: '?' },
        paragraphs: [
          'Mit 30+ Jahren Erfahrung bringen wir deine Website aufs nächste Level – von KMU bis Enterprise.',
          'Lass uns besprechen, was WordPress für dein Business leisten kann.',
        ],
        buttonText: 'WordPress Projekt starten',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Mehr WordPress', highlight: 'Services', suffix: '' },
        subtitle: 'Weitere WordPress-Services für eine komplette Lösung',
        moreInfoLabel: 'Mehr erfahren →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress Website', description: 'Komplette WordPress-Website erstellen lassen' },
          { href: '/wordpress/maatwerk', title: 'WordPress Maßanfertigung', description: 'Individuelle Plugins und Funktionen' },
          { href: '/wordpress/thema', title: 'WordPress Theme', description: 'Schnell starten mit einem bewährten Theme' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-Commerce mit WordPress' },
        ],
      },
    },
  },
  sv: {
    metadata: {
      title: 'WordPress-expertbyrå | 30+ års erfarenhet | Niblah',
      description:
        'Niblah är en WordPress-expertbyrå med 30+ års erfarenhet. Från små webbplatser till enterprise. WooCommerce, skräddarsytt och strategi.',
      keywords: 'wordpress expert, wordpress byrå, wordpress specialist, woocommerce, wordpress utveckling',
      openGraph: {
        title: 'WordPress-expertbyrå | Niblah',
        description: 'Bevisad WordPress-expertis från små webbplatser till enterprise.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS-EXPERTBYRÅ',
      title: 'Bevisad WordPress-expertis för din framgång online',
      description:
        'Niblah bygger WordPress-lösningar som presterar. Från företagswebbplatser till komplexa plattformar och WooCommerce-butiker. Custom development, prestanda, SEO och strategi.',
      ctaText: 'Jobba med WordPress-experter',
      ctaLink: '/contact',
      note: '* 30+ års WordPress & WooCommerce-utveckling',
      image: '/wordpress-expert.png',
      imageAlt: 'WordPress expertutveckling',
    },
    sections: {
      expert: {
        title: { prefix: 'Varför välja en', highlight: 'WordPress-expertbyrå', suffix: '?' },
        paragraphs: [
          'WordPress driver 43%+ av alla webbplatser – men äkta expertis är mer än teman och plugins.',
          'Vi har 30+ års erfarenhet av custom themes, WooCommerce, prestanda och säkerhet.',
          'Skillnaden: djup teknisk kunskap och strategi som ger snabba, säkra och skalbara webbplatser.',
        ],
        listHeading: 'Vår expertis:',
        listItems: [
          'Custom theme- och pluginutveckling',
          'WooCommerce e-handel',
          'Prestandaoptimering och caching',
          'Säkerhet och malware-prevention',
          'Teknisk SEO',
          'API-integrationer och headless WordPress',
        ],
      },
      benefits: {
        title: { prefix: 'Varför välja', highlight: 'Niblah som WordPress-expert', suffix: '?' },
        subtitle: '30+ års erfarenhet gör skillnad.',
        cards: [
          { icon: '🎓', title: 'Djup kunskap', description: 'Från databas till Gutenberg/REST API – vi löser komplexa problem.' },
          { icon: '⚡', title: 'Prestandafokus', description: 'Caching, queries, bilder och kod för starka Core Web Vitals.' },
          { icon: '🔒', title: 'Säkerhet', description: 'Hardening, uppdateringar, monitorering och proaktiv prevention.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Från enkla butiker till komplexa B2B-plattformar.' },
          { icon: '🔧', title: 'Skräddarsytt', description: 'Plugins, teman och funktioner exakt för dina behov.' },
          { icon: '📈', title: 'SEO', description: 'Clean code, snabb laddning och struktur för bättre ranking.' },
        ],
      },
      services: {
        title: { prefix: 'Våra', highlight: 'WordPress-tjänster', suffix: '' },
        subtitle: 'Från strategi till drift och tillväxt.',
        cards: [
          { icon: '🎨', title: 'Custom themes', description: 'Skräddarsydda teman: responsiva, snabba och hållbara.' },
          { icon: '🔌', title: 'Plugins', description: 'Skräddarsydda plugins – små till komplexa.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Checkout, betalning, frakt och produktlogik.' },
          { icon: '⚡', title: 'Prestanda', description: 'Optimering för hastighet och Core Web Vitals.' },
          { icon: '🔧', title: 'Underhåll', description: 'Uppdateringar, backups och monitorering.' },
          { icon: '🔗', title: 'API', description: 'Integrationer med CRM/ERP/verktyg via API/webhooks.' },
          { icon: '🚀', title: 'Headless', description: 'WordPress som CMS med Next.js/React/Vue.' },
          { icon: '📱', title: 'Multisite', description: 'Flera webbplatser i en installation.' },
          { icon: '🔍', title: 'SEO & analytics', description: 'SEO, tracking och analys från teknik till innehåll.' },
        ],
      },
      process: {
        title: { prefix: 'Så bygger vi din', highlight: 'WordPress-framgång', suffix: '' },
        subtitle: 'Transparent från strategi till optimering.',
        steps: [
          { number: '1', title: 'Strategi', description: 'Mål, målgrupp och konkurrensanalys.' },
          { number: '2', title: 'Utveckling', description: 'Best practices, clean code och prestanda.' },
          { number: '3', title: 'Test & lansering', description: 'Tester, säkerhet och SEO-kontroll.' },
          { number: '4', title: 'Tillväxt', description: 'Monitorering och kontinuerliga förbättringar.' },
        ],
      },
      cta: {
        title: { prefix: 'Redo att jobba med', highlight: 'WordPress-experter', suffix: '?' },
        paragraphs: [
          'Med 30+ års erfarenhet tar vi din webbplats till nästa nivå – från små företag till enterprise.',
          'Låt oss prata om hur vi stärker din närvaro online.',
        ],
        buttonText: 'Starta ditt WordPress-projekt',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Fler WordPress', highlight: 'tjänster', suffix: '' },
        subtitle: 'Utforska våra andra WordPress-tjänster',
        moreInfoLabel: 'Läs mer →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress-webbplats', description: 'Låt oss bygga din WordPress-webbplats' },
          { href: '/wordpress/maatwerk', title: 'WordPress special', description: 'Skräddarsydda plugins och funktioner' },
          { href: '/wordpress/thema', title: 'WordPress-tema', description: 'Snabb start med ett beprövat tema' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-handel på WordPress' },
        ],
      },
    },
  },
  da: {
    metadata: {
      title: 'WordPress ekspertbureau | 30+ års erfaring | Niblah',
      description:
        'Niblah er et WordPress ekspertbureau med 30+ års erfaring. Fra små websites til enterprise. WooCommerce, custom development og rådgivning.',
      keywords: 'wordpress ekspert, wordpress bureau, wordpress specialist, woocommerce, wordpress udvikling',
      openGraph: {
        title: 'WordPress ekspertbureau | Niblah',
        description: 'Bevist WordPress-ekspertise fra små websites til enterprise.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS EKSPERTBUREAU',
      title: 'Bevist WordPress-ekspertise til din online succes',
      description:
        'Niblah bygger WordPress-løsninger der performer. Fra websites til komplekse platforme og WooCommerce shops. Custom development, performance, SEO og strategi.',
      ctaText: 'Arbejd med WordPress-eksperter',
      ctaLink: '/contact',
      note: '* 30+ års WordPress & WooCommerce development',
      image: '/wordpress-expert.png',
      imageAlt: 'WordPress ekspertudvikling',
    },
    sections: {
      expert: {
        title: { prefix: 'Hvorfor vælge et', highlight: 'WordPress ekspertbureau', suffix: '?' },
        paragraphs: [
          'WordPress driver 43%+ af alle websites – men ægte ekspertise er mere end temaer og plugins.',
          'Vi har 30+ års erfaring med custom themes, WooCommerce, performance og sikkerhed.',
          'Forskellen: dyb teknisk viden og strategi – hurtige, sikre og skalerbare websites.',
        ],
        listHeading: 'Vores ekspertise:',
        listItems: [
          'Custom theme- og pluginudvikling',
          'WooCommerce e-handel',
          'Performanceoptimering og caching',
          'Sikkerhed og malware-prevention',
          'Teknisk SEO',
          'API-integrationer og headless WordPress',
        ],
      },
      benefits: {
        title: { prefix: 'Hvorfor vælge', highlight: 'Niblah som WordPress ekspert', suffix: '?' },
        subtitle: '30+ års erfaring gør forskellen.',
        cards: [
          { icon: '🎓', title: 'Dyb viden', description: 'Fra database til Gutenberg/REST API – vi løser komplekse opgaver.' },
          { icon: '⚡', title: 'Performance', description: 'Caching, queries, billeder og kode for stærke Core Web Vitals.' },
          { icon: '🔒', title: 'Sikkerhed', description: 'Hardening, updates, monitoring og proaktiv prevention.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Fra simple shops til komplekse B2B platforme.' },
          { icon: '🔧', title: 'Custom', description: 'Plugins, themes og funktioner præcis til dine behov.' },
          { icon: '📈', title: 'SEO', description: 'Clean code, hurtige loadtider og struktur for bedre rankings.' },
        ],
      },
      services: {
        title: { prefix: 'Vores', highlight: 'WordPress services', suffix: '' },
        subtitle: 'Fra strategi til drift og vækst.',
        cards: [
          { icon: '🎨', title: 'Custom themes', description: 'Skræddersyede themes: responsive, hurtige og holdbare.' },
          { icon: '🔌', title: 'Plugins', description: 'Skræddersyede plugins – små til komplekse.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Checkout, betaling, fragt og produktlogik.' },
          { icon: '⚡', title: 'Performance', description: 'Optimering for hastighed og Core Web Vitals.' },
          { icon: '🔧', title: 'Vedligehold', description: 'Updates, backups og monitoring.' },
          { icon: '🔗', title: 'API', description: 'Integrationer via REST APIs og webhooks.' },
          { icon: '🚀', title: 'Headless', description: 'WordPress som CMS med Next.js/React/Vue.' },
          { icon: '📱', title: 'Multisite', description: 'Flere websites i én installation.' },
          { icon: '🔍', title: 'SEO & analytics', description: 'SEO, tracking og analyse fra teknik til content.' },
        ],
      },
      process: {
        title: { prefix: 'Så skaber vi din', highlight: 'WordPress succes', suffix: '' },
        subtitle: 'Transparent fra strategi til optimering.',
        steps: [
          { number: '1', title: 'Strategi', description: 'Mål, målgruppe og konkurrenceanalyse.' },
          { number: '2', title: 'Udvikling', description: 'Best practices, clean code og performance.' },
          { number: '3', title: 'Test & launch', description: 'Tests, sikkerhed og SEO-checks.' },
          { number: '4', title: 'Vækst', description: 'Monitoring og løbende forbedringer.' },
        ],
      },
      cta: {
        title: { prefix: 'Klar til at arbejde med', highlight: 'WordPress eksperter', suffix: '?' },
        paragraphs: [
          'Med 30+ års erfaring løfter vi dit website – fra små virksomheder til enterprise.',
          'Lad os tale om, hvordan vi styrker din online tilstedeværelse.',
        ],
        buttonText: 'Start dit WordPress projekt',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Flere WordPress', highlight: 'services', suffix: '' },
        subtitle: 'Udforsk vores andre WordPress-services',
        moreInfoLabel: 'Læs mere →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress-website', description: 'Få bygget din WordPress-website' },
          { href: '/wordpress/maatwerk', title: 'WordPress special', description: 'Skræddersyede plugins og funktioner' },
          { href: '/wordpress/thema', title: 'WordPress tema', description: 'Hurtig start med et gennemprøvet tema' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-handel med WordPress' },
        ],
      },
    },
  },
  fr: {
    metadata: {
      title: 'Agence experte WordPress | 30+ ans d’expérience | Niblah',
      description:
        'Niblah est une agence experte WordPress avec 30+ ans d’expérience. Du petit site à l’enterprise. WooCommerce, sur-mesure et stratégie.',
      keywords: 'expert wordpress, agence wordpress, spécialiste wordpress, woocommerce, développement wordpress',
      openGraph: {
        title: 'Agence experte WordPress | Niblah',
        description: 'Expertise WordPress prouvée du petit site à l’enterprise.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'AGENCE EXPERTE WORDPRESS',
      title: 'Une expertise WordPress prouvée pour votre succès en ligne',
      description:
        'Niblah construit des solutions WordPress qui performent. Sites vitrine, plateformes complexes et boutiques WooCommerce. Développement sur-mesure, performance, SEO et stratégie.',
      ctaText: 'Travailler avec des experts',
      ctaLink: '/contact',
      note: '* 30+ ans de développement WordPress & WooCommerce',
      image: '/wordpress-expert.png',
      imageAlt: 'Développement WordPress expert',
    },
    sections: {
      expert: {
        title: { prefix: 'Pourquoi choisir une', highlight: 'agence experte WordPress', suffix: '?' },
        paragraphs: [
          'WordPress propulse 43%+ des sites, mais l’expertise va bien au-delà des thèmes et plugins.',
          '30+ ans d’expérience : thèmes sur-mesure, WooCommerce, performance et sécurité.',
          'La différence : technique, stratégie et résultats – rapide, sécurisé et scalable.',
        ],
        listHeading: 'Notre expertise :',
        listItems: [
          'Thèmes et plugins sur-mesure',
          'Solutions e-commerce WooCommerce',
          'Optimisation performance et cache',
          'Sécurité et prévention malware',
          'SEO technique',
          'Intégrations API et headless WordPress',
        ],
      },
      benefits: {
        title: { prefix: 'Pourquoi choisir', highlight: 'Niblah', suffix: 'comme expert WordPress ?' },
        subtitle: '30+ ans d’expérience font la différence.',
        cards: [
          { icon: '🎓', title: 'Expertise', description: 'Base de données, Gutenberg, REST API – nous gérons le complexe.' },
          { icon: '⚡', title: 'Performance', description: 'Cache, requêtes, images et code pour de très bons Web Vitals.' },
          { icon: '🔒', title: 'Sécurité', description: 'Hardening, mises à jour, monitoring et prévention.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Des boutiques simples aux plateformes B2B complexes.' },
          { icon: '🔧', title: 'Sur-mesure', description: 'Plugins, thèmes et fonctionnalités adaptés à vos besoins.' },
          { icon: '📈', title: 'SEO', description: 'Code propre, vitesse et structure pour mieux ranker.' },
        ],
      },
      services: {
        title: { prefix: 'Nos', highlight: 'services WordPress', suffix: '' },
        subtitle: 'De la stratégie à la maintenance et la croissance.',
        cards: [
          { icon: '🎨', title: 'Thèmes sur-mesure', description: 'Design et performance alignés sur votre marque.' },
          { icon: '🔌', title: 'Plugins', description: 'Plugins sur-mesure du simple au complexe.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Checkout, paiements, livraison, produits.' },
          { icon: '⚡', title: 'Performance', description: 'Optimisation vitesse et Core Web Vitals.' },
          { icon: '🔧', title: 'Maintenance', description: 'Updates, backups et monitoring.' },
          { icon: '🔗', title: 'Intégrations API', description: 'CRM/ERP/outils via API et webhooks.' },
          { icon: '🚀', title: 'Headless', description: 'WordPress CMS + Next.js/React/Vue.' },
          { icon: '📱', title: 'Multisite', description: 'Plusieurs sites dans une seule installation.' },
          { icon: '🔍', title: 'SEO & analytics', description: 'SEO, tracking et analyse.' },
        ],
      },
      process: {
        title: { prefix: 'Voici comment nous construisons votre', highlight: 'succès WordPress', suffix: '' },
        subtitle: 'Transparent de la stratégie à l’optimisation.',
        steps: [
          { number: '1', title: 'Stratégie', description: 'Objectifs, audience et concurrence.' },
          { number: '2', title: 'Développement', description: 'Bonnes pratiques, code propre et performance.' },
          { number: '3', title: 'Tests & lancement', description: 'Tests, sécurité et vérification SEO.' },
          { number: '4', title: 'Croissance', description: 'Monitoring et optimisations continues.' },
        ],
      },
      cta: {
        title: { prefix: 'Prêt à travailler avec des', highlight: 'experts WordPress', suffix: '?' },
        paragraphs: [
          'Avec 30+ ans d’expérience, nous élevons votre site – du PME à l’enterprise.',
          'Discutons de votre projet et de votre présence en ligne.',
        ],
        buttonText: 'Démarrer votre projet',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Plus de services', highlight: 'WordPress', suffix: '' },
        subtitle: 'Découvrez nos autres services WordPress',
        moreInfoLabel: 'En savoir plus →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'Site WordPress', description: 'Faites créer votre site WordPress' },
          { href: '/wordpress/maatwerk', title: 'Sur-mesure', description: 'Plugins et fonctionnalités sur mesure' },
          { href: '/wordpress/thema', title: 'Thème WordPress', description: 'Démarrez vite avec un thème éprouvé' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-commerce avec WordPress' },
        ],
      },
    },
  },
  it: {
    metadata: {
      title: 'Agenzia WordPress esperta | 30+ anni di esperienza | Niblah',
      description:
        'Niblah è un’agenzia WordPress esperta con 30+ anni di esperienza. Da siti piccoli a soluzioni enterprise. WooCommerce, sviluppo su misura e strategia.',
      keywords: 'wordpress esperti, agenzia wordpress, wordpress specialist, woocommerce, sviluppo wordpress',
      openGraph: {
        title: 'Agenzia WordPress esperta | Niblah',
        description: 'Competenza WordPress comprovata: dal piccolo sito all’enterprise.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'AGENZIA WORDPRESS ESPERTA',
      title: 'Competenza WordPress comprovata per il tuo successo online',
      description:
        'Niblah costruisce soluzioni WordPress che performano. Siti aziendali, piattaforme complesse e store WooCommerce. Sviluppo su misura, performance, SEO e strategia.',
      ctaText: 'Lavora con esperti WordPress',
      ctaLink: '/contact',
      note: '* 30+ anni di sviluppo WordPress & WooCommerce',
      image: '/wordpress-expert.png',
      imageAlt: 'Sviluppo WordPress esperto',
    },
    sections: {
      expert: {
        title: { prefix: 'Perché scegliere un', highlight: 'partner WordPress esperto', suffix: '?' },
        paragraphs: [
          'WordPress alimenta 43%+ dei siti, ma la vera competenza va oltre temi e plugin.',
          '30+ anni di esperienza: temi custom, WooCommerce, performance e sicurezza.',
          'La differenza: tecnica, strategia e risultati – veloce, sicuro e scalabile.',
        ],
        listHeading: 'La nostra competenza:',
        listItems: [
          'Sviluppo temi e plugin su misura',
          'Soluzioni e-commerce WooCommerce',
          'Ottimizzazione performance e cache',
          'Sicurezza e prevenzione malware',
          'SEO tecnico',
          'Integrazioni API e headless WordPress',
        ],
      },
      benefits: {
        title: { prefix: 'Perché scegliere', highlight: 'Niblah', suffix: 'come esperti WordPress?' },
        subtitle: '30+ anni di esperienza fanno la differenza.',
        cards: [
          { icon: '🎓', title: 'Competenza profonda', description: 'Database, Gutenberg, REST API – gestiamo progetti complessi.' },
          { icon: '⚡', title: 'Performance', description: 'Cache, query, immagini e codice per ottimi Web Vitals.' },
          { icon: '🔒', title: 'Sicurezza', description: 'Hardening, aggiornamenti, monitoraggio e prevenzione.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Da store semplici a piattaforme B2B complesse.' },
          { icon: '🔧', title: 'Su misura', description: 'Plugin, temi e funzionalità personalizzate.' },
          { icon: '📈', title: 'SEO', description: 'Codice pulito, velocità e struttura per ranking migliori.' },
        ],
      },
      services: {
        title: { prefix: 'I nostri', highlight: 'servizi WordPress', suffix: '' },
        subtitle: 'Dalla strategia alla manutenzione e crescita.',
        cards: [
          { icon: '🎨', title: 'Temi su misura', description: 'Temi personalizzati: responsive, veloci e duraturi.' },
          { icon: '🔌', title: 'Plugin', description: 'Plugin su misura dal semplice al complesso.' },
          { icon: '🛒', title: 'WooCommerce', description: 'Checkout, pagamenti, spedizioni e prodotti.' },
          { icon: '⚡', title: 'Performance', description: 'Ottimizzazione velocità e Core Web Vitals.' },
          { icon: '🔧', title: 'Manutenzione', description: 'Aggiornamenti, backup e monitoraggio.' },
          { icon: '🔗', title: 'API', description: 'Integrazioni con CRM/ERP/strumenti via API e webhooks.' },
          { icon: '🚀', title: 'Headless', description: 'WordPress CMS + Next.js/React/Vue.' },
          { icon: '📱', title: 'Multisite', description: 'Più siti in una sola installazione.' },
          { icon: '🔍', title: 'SEO & analytics', description: 'SEO, tracking e analisi.' },
        ],
      },
      process: {
        title: { prefix: 'Come lavoriamo per il tuo', highlight: 'successo WordPress', suffix: '' },
        subtitle: 'Trasparente dalla strategia all’ottimizzazione.',
        steps: [
          { number: '1', title: 'Strategia', description: 'Obiettivi, pubblico e concorrenza.' },
          { number: '2', title: 'Sviluppo', description: 'Best practice, codice pulito e performance.' },
          { number: '3', title: 'Test & lancio', description: 'Test, sicurezza e verifica SEO.' },
          { number: '4', title: 'Crescita', description: 'Monitoraggio e miglioramenti continui.' },
        ],
      },
      cta: {
        title: { prefix: 'Pronto a lavorare con', highlight: 'esperti WordPress', suffix: '?' },
        paragraphs: [
          'Con 30+ anni di esperienza, portiamo il tuo sito al livello successivo – dal piccolo business all’enterprise.',
          'Parliamo del tuo progetto e di come rafforzare la tua presenza online.',
        ],
        buttonText: 'Avvia il tuo progetto',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Altri servizi', highlight: 'WordPress', suffix: '' },
        subtitle: 'Scopri gli altri servizi WordPress',
        moreInfoLabel: 'Scopri di più →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'Sito WordPress', description: 'Fai realizzare il tuo sito WordPress' },
          { href: '/wordpress/maatwerk', title: 'Sviluppo su misura', description: 'Plugin e funzionalità personalizzate' },
          { href: '/wordpress/thema', title: 'Tema WordPress', description: 'Parti velocemente con un tema collaudato' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'E-commerce con WordPress' },
        ],
      },
    },
  },
};

export function getWordPressPartnerCopy(locale) {
  return getLocaleCopy(copy, locale);
}

