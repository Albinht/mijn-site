import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'WooCommerce Webshop | E-commerce on WordPress | Niblah',
      description:
        'Build or improve your WooCommerce webshop with Niblah. Custom checkout, performance, SEO and integrations—built by WordPress experts.',
      keywords: 'woocommerce webshop, woocommerce development, wordpress ecommerce, woocommerce agency, woocommerce expert',
      openGraph: {
        title: 'WooCommerce Webshop | Niblah',
        description: 'WooCommerce development for scalable WordPress e-commerce.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WOOCOMMERCE WEBSHOP',
      title: 'Powerful e-commerce with WooCommerce',
      description:
        'WooCommerce turns WordPress into a flexible webshop platform. Niblah builds WooCommerce stores that are fast, SEO-friendly and conversion-focused—from custom product flows to complex B2B features.',
      ctaText: 'Discuss your WooCommerce project',
      ctaLink: '/contact',
      note: '* Built by WordPress & WooCommerce specialists',
      image: '/wordpress-hero.png',
      imageAlt: 'WooCommerce webshop example',
    },
    sections: {
      why: {
        title: { prefix: 'Why choose', highlight: 'WooCommerce', suffix: '?' },
        paragraphs: [
          'WooCommerce is the most popular e-commerce plugin for WordPress. You get the flexibility of WordPress combined with powerful webshop features.',
          'Perfect if you want ownership, customization options and an ecosystem of plugins—without being locked into a single vendor.',
        ],
        listHeading: 'What you get with WooCommerce:',
        listItems: [
          'Full control over checkout, payments and shipping',
          'Custom product types and advanced pricing rules',
          'Integrations with ERP/CRM, marketplaces and marketing tools',
          'Scalable SEO foundations and content capabilities',
          'Flexible B2C and B2B setups',
        ],
      },
      features: {
        title: { prefix: 'WooCommerce', highlight: 'features we build', suffix: '' },
        cards: [
          { icon: '🛒', title: 'Custom checkout', description: 'Reduce friction and increase conversions with tailored checkout flows.' },
          { icon: '💳', title: 'Payments & shipping', description: 'Payment gateways, shipping methods, taxes and rules that match your business.' },
          { icon: '🔗', title: 'Integrations', description: 'Connect WooCommerce to external systems via APIs and webhooks.' },
          { icon: '⚡', title: 'Performance', description: 'Optimize Core Web Vitals and speed for better UX and SEO.' },
          { icon: '🔒', title: 'Security', description: 'Hardening, monitoring and safe updates to keep your store protected.' },
          { icon: '📈', title: 'SEO & tracking', description: 'Technical SEO setup and analytics for data-driven growth.' },
        ],
      },
      setup: {
        title: { prefix: 'We make your WooCommerce store', highlight: 'ready to sell', suffix: '' },
        paragraphs: [
          'From theme setup to product import and integrations—Niblah takes care of the technical work so you can focus on sales.',
          'You get a clean setup, clear documentation and a roadmap for improvements.',
        ],
        buttonText: 'Start WooCommerce',
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
          { href: '/wordpress/migratie', title: 'WordPress migration', description: 'Move to WordPress seamlessly' },
        ],
      },
    },
  },
  nl: {
    metadata: {
      title: 'WooCommerce Webshop | E-commerce met WordPress | Niblah',
      description:
        'Laat je WooCommerce webshop bouwen of optimaliseren door Niblah. Custom checkout, performance, SEO en integraties—door WordPress experts.',
      keywords: 'woocommerce webshop, woocommerce development, wordpress webshop, woocommerce bureau, woocommerce expert',
      openGraph: {
        title: 'WooCommerce Webshop | Niblah',
        description: 'WooCommerce development voor schaalbare WordPress e-commerce.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WOOCOMMERCE WEBSHOP',
      title: 'Krachtige e-commerce met WooCommerce',
      description:
        'WooCommerce verandert WordPress in een flexibel webshop platform. Niblah bouwt WooCommerce webshops die snel, SEO-vriendelijk en conversiegericht zijn—van maatwerk checkout flows tot complexe B2B functionaliteit.',
      ctaText: 'Bespreek je WooCommerce project',
      ctaLink: '/contact',
      note: '* Gebouwd door WordPress & WooCommerce specialisten',
      image: '/wordpress-hero.png',
      imageAlt: 'WooCommerce webshop voorbeeld',
    },
    sections: {
      why: {
        title: { prefix: 'Waarom kiezen voor', highlight: 'WooCommerce', suffix: '?' },
        paragraphs: [
          'WooCommerce is de populairste e-commerce plugin voor WordPress. Je krijgt de flexibiliteit van WordPress met krachtige webshop mogelijkheden.',
          'Ideaal als je eigenaarschap wilt, veel maatwerk nodig hebt en wilt profiteren van een groot plugin-ecosysteem—zonder vendor lock-in.',
        ],
        listHeading: 'Wat je krijgt met WooCommerce:',
        listItems: [
          'Volledige controle over checkout, betalingen en verzending',
          'Custom product types en geavanceerde prijsregels',
          'Integraties met ERP/CRM, marketplaces en marketing tools',
          'Sterke SEO basis en content mogelijkheden',
          'Flexibele B2C en B2B setups',
        ],
      },
      features: {
        title: { prefix: 'WooCommerce', highlight: 'features die wij bouwen', suffix: '' },
        cards: [
          { icon: '🛒', title: 'Custom checkout', description: 'Minder frictie en hogere conversie met maatwerk checkout flows.' },
          { icon: '💳', title: 'Betalingen & verzending', description: 'Payment gateways, verzendmethodes, btw en regels passend bij je business.' },
          { icon: '🔗', title: 'Integraties', description: 'Koppel WooCommerce met externe systemen via API’s en webhooks.' },
          { icon: '⚡', title: 'Performance', description: 'Optimaliseer Core Web Vitals en laadsnelheid voor betere UX en SEO.' },
          { icon: '🔒', title: 'Security', description: 'Hardening, monitoring en veilige updates om je shop te beschermen.' },
          { icon: '📈', title: 'SEO & tracking', description: 'Technische SEO setup en analytics voor data-driven groei.' },
        ],
      },
      setup: {
        title: { prefix: 'Wij maken je WooCommerce webshop', highlight: 'klaar om te verkopen', suffix: '' },
        paragraphs: [
          'Van theme setup tot product import en integraties—Niblah regelt de techniek zodat jij je kunt focussen op sales.',
          'Je krijgt een clean setup, duidelijke documentatie en een roadmap voor verdere verbeteringen.',
        ],
        buttonText: 'Start met WooCommerce',
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
          { href: '/wordpress/migratie', title: 'WordPress Migratie', description: 'Verhuis naadloos naar WordPress' },
        ],
      },
    },
  },
  de: {
    metadata: {
      title: 'WooCommerce Shop | E-Commerce mit WordPress | Niblah',
      description:
        'WooCommerce Shop erstellen oder optimieren mit Niblah. Custom Checkout, Performance, SEO und Integrationen von WordPress Experten.',
      keywords: 'woocommerce shop, woocommerce entwicklung, wordpress ecommerce, woocommerce agentur, woocommerce experte',
      openGraph: {
        title: 'WooCommerce Shop | Niblah',
        description: 'WooCommerce Entwicklung für skalierbares WordPress E-Commerce.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WOOCOMMERCE SHOP',
      title: 'E-Commerce mit WooCommerce – flexibel und skalierbar',
      description:
        'WooCommerce macht WordPress zum Shop-System. Niblah baut schnelle, SEO-freundliche und conversion-starke WooCommerce Shops – inkl. Custom Checkout und B2B Features.',
      ctaText: 'WooCommerce Projekt besprechen',
      ctaLink: '/contact',
      note: '* Von WordPress & WooCommerce Spezialisten',
      image: '/wordpress-hero.png',
      imageAlt: 'WooCommerce Shop Beispiel',
    },
    sections: {
      why: {
        title: { prefix: 'Warum', highlight: 'WooCommerce', suffix: '?' },
        paragraphs: [
          'WooCommerce ist das beliebteste E-Commerce Plugin für WordPress. Du bekommst maximale Flexibilität und viele Erweiterungsmöglichkeiten.',
          'Ideal, wenn du Ownership willst und Customization brauchst – ohne Vendor Lock-in.',
        ],
        listHeading: 'Das bekommst du:',
        listItems: [
          'Volle Kontrolle über Checkout, Payments und Versand',
          'Custom Produkttypen und Preisregeln',
          'Integrationen via API/Webhooks',
          'Starke SEO Basis und Content Möglichkeiten',
          'B2C und B2B Setups',
        ],
      },
      features: {
        title: { prefix: 'WooCommerce', highlight: 'Features', suffix: '' },
        cards: [
          { icon: '🛒', title: 'Custom Checkout', description: 'Weniger Reibung, mehr Conversions durch optimierte Flows.' },
          { icon: '💳', title: 'Payments & Versand', description: 'Gateways, Versandarten, Steuern und Regeln passend zu deinem Business.' },
          { icon: '🔗', title: 'Integrationen', description: 'Anbindung an ERP/CRM und Tools.' },
          { icon: '⚡', title: 'Performance', description: 'Core Web Vitals und Speed Optimierung.' },
          { icon: '🔒', title: 'Security', description: 'Hardening, Monitoring und sichere Updates.' },
          { icon: '📈', title: 'SEO & Tracking', description: 'Technisches SEO und Analytics Setup.' },
        ],
      },
      setup: {
        title: { prefix: 'Wir machen deinen WooCommerce Shop', highlight: 'verkaufsbereit', suffix: '' },
        paragraphs: [
          'Von Theme Setup bis Import und Integrationen – wir übernehmen die Technik.',
          'Du erhältst eine saubere Basis, Dokumentation und einen Optimierungsplan.',
        ],
        buttonText: 'WooCommerce starten',
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
          { href: '/wordpress/migratie', title: 'WordPress Migration', description: 'Nahtlos zu WordPress wechseln' },
        ],
      },
    },
  },
  sv: {
    metadata: {
      title: 'WooCommerce-butik | E-handel på WordPress | Niblah',
      description:
        'Bygg eller förbättra din WooCommerce-butik med Niblah. Checkout, prestanda, SEO och integrationer.',
      keywords: 'woocommerce butik, woocommerce utveckling, wordpress e-handel, woocommerce byrå',
      openGraph: {
        title: 'WooCommerce-butik | Niblah',
        description: 'WooCommerce-utveckling för skalbar WordPress e-handel.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WOOCOMMERCE-BUTIK',
      title: 'Kraftfull e-handel med WooCommerce',
      description:
        'WooCommerce gör WordPress till en flexibel e-handelsplattform. Niblah bygger snabba, SEO-vänliga och konverteringsfokuserade butiker.',
      ctaText: 'Diskutera ditt WooCommerce-projekt',
      ctaLink: '/contact',
      note: '* Byggt av WordPress & WooCommerce-specialister',
      image: '/wordpress-hero.png',
      imageAlt: 'WooCommerce butiksexempel',
    },
    sections: {
      why: {
        title: { prefix: 'Varför', highlight: 'WooCommerce', suffix: '?' },
        paragraphs: ['WooCommerce är den mest populära e-handelslösningen för WordPress.', 'Perfekt när du vill ha kontroll och flexibilitet.'],
        listHeading: 'Det här får du:',
        listItems: ['Kontroll över checkout, betalningar och frakt', 'Anpassade produkter och prisregler', 'Integrationer via API/webhooks', 'Stark SEO-bas och content', 'B2C och B2B upplägg'],
      },
      features: {
        title: { prefix: 'WooCommerce', highlight: 'funktioner', suffix: '' },
        cards: [
          { icon: '🛒', title: 'Custom checkout', description: 'Mindre friktion och fler köp.' },
          { icon: '💳', title: 'Betalning & frakt', description: 'Gateways, fraktmetoder och regler.' },
          { icon: '🔗', title: 'Integrationer', description: 'Koppla till externa system.' },
          { icon: '⚡', title: 'Prestanda', description: 'Core Web Vitals och hastighet.' },
          { icon: '🔒', title: 'Säkerhet', description: 'Hardening och säkra uppdateringar.' },
          { icon: '📈', title: 'SEO & tracking', description: 'Teknisk SEO och analytics.' },
        ],
      },
      setup: {
        title: { prefix: 'Vi gör din WooCommerce-butik', highlight: 'redo att sälja', suffix: '' },
        paragraphs: ['Vi tar hand om tekniken från setup till integrationer.', 'Du får en stabil grund och en plan för förbättringar.'],
        buttonText: 'Starta WooCommerce',
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
          { href: '/wordpress/migratie', title: 'WordPress-migrering', description: 'Flytta till WordPress smidigt' },
        ],
      },
    },
  },
  da: {
    metadata: {
      title: 'WooCommerce webshop | E-handel på WordPress | Niblah',
      description:
        'Byg eller optimér din WooCommerce webshop med Niblah. Checkout, performance, SEO og integrationer.',
      keywords: 'woocommerce webshop, woocommerce udvikling, wordpress ecommerce, woocommerce bureau',
      openGraph: {
        title: 'WooCommerce webshop | Niblah',
        description: 'WooCommerce udvikling til skalerbar WordPress e-handel.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WOOCOMMERCE WEBSHOP',
      title: 'Kraftfuld e-handel med WooCommerce',
      description:
        'WooCommerce gør WordPress til en fleksibel webshop platform. Niblah bygger hurtige, SEO-venlige og konverteringsfokuserede shops.',
      ctaText: 'Tal om dit WooCommerce projekt',
      ctaLink: '/contact',
      note: '* Bygget af WordPress & WooCommerce specialister',
      image: '/wordpress-hero.png',
      imageAlt: 'WooCommerce webshop eksempel',
    },
    sections: {
      why: {
        title: { prefix: 'Hvorfor', highlight: 'WooCommerce', suffix: '?' },
        paragraphs: ['WooCommerce er den mest populære e-handelsløsning til WordPress.', 'Perfekt når du vil have kontrol og fleksibilitet.'],
        listHeading: 'Det får du:',
        listItems: ['Kontrol over checkout, betaling og fragt', 'Custom produkter og prisregler', 'Integrationer via API/webhooks', 'Stærk SEO base og content', 'B2C og B2B setups'],
      },
      features: {
        title: { prefix: 'WooCommerce', highlight: 'features', suffix: '' },
        cards: [
          { icon: '🛒', title: 'Custom checkout', description: 'Mindre friktion og flere køb.' },
          { icon: '💳', title: 'Betaling & fragt', description: 'Gateways, fragtmetoder og regler.' },
          { icon: '🔗', title: 'Integrationer', description: 'Kobl til eksterne systemer.' },
          { icon: '⚡', title: 'Performance', description: 'Core Web Vitals og hastighed.' },
          { icon: '🔒', title: 'Sikkerhed', description: 'Hardening og sikre updates.' },
          { icon: '📈', title: 'SEO & tracking', description: 'Teknisk SEO og analytics.' },
        ],
      },
      setup: {
        title: { prefix: 'Vi gør din WooCommerce webshop', highlight: 'klar til salg', suffix: '' },
        paragraphs: ['Vi tager os af teknikken fra setup til integrationer.', 'Du får en stabil base og plan for forbedringer.'],
        buttonText: 'Start WooCommerce',
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
          { href: '/wordpress/migratie', title: 'WordPress migrering', description: 'Flyt til WordPress uden stress' },
        ],
      },
    },
  },
  fr: {
    metadata: {
      title: 'Boutique WooCommerce | E-commerce sur WordPress | Niblah',
      description:
        'Créez ou optimisez votre boutique WooCommerce avec Niblah. Checkout sur mesure, performance, SEO et intégrations.',
      keywords: 'woocommerce boutique, woocommerce développement, wordpress ecommerce, agence woocommerce',
      openGraph: {
        title: 'Boutique WooCommerce | Niblah',
        description: 'Développement WooCommerce pour un e-commerce WordPress scalable.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'BOUTIQUE WOOCOMMERCE',
      title: 'E-commerce puissant avec WooCommerce',
      description:
        'WooCommerce transforme WordPress en plateforme e-commerce flexible. Niblah construit des boutiques rapides, SEO-friendly et orientées conversion.',
      ctaText: 'Parlons de votre projet WooCommerce',
      ctaLink: '/contact',
      note: '* Par des spécialistes WordPress & WooCommerce',
      image: '/wordpress-hero.png',
      imageAlt: 'Exemple boutique WooCommerce',
    },
    sections: {
      why: {
        title: { prefix: 'Pourquoi', highlight: 'WooCommerce', suffix: '?' },
        paragraphs: ['WooCommerce est la solution e-commerce la plus populaire pour WordPress.', 'Idéal si vous voulez contrôle et flexibilité.'],
        listHeading: 'Vous obtenez :',
        listItems: ['Contrôle du checkout, paiements et livraison', 'Produits et règles de prix sur mesure', 'Intégrations via API/webhooks', 'Base SEO solide', 'B2C et B2B'],
      },
      features: {
        title: { prefix: 'Fonctionnalités', highlight: 'WooCommerce', suffix: '' },
        cards: [
          { icon: '🛒', title: 'Checkout sur mesure', description: 'Moins de friction, plus de conversions.' },
          { icon: '💳', title: 'Paiements & livraison', description: 'Gateways, méthodes de livraison, règles.' },
          { icon: '🔗', title: 'Intégrations', description: 'Connexion à des systèmes externes.' },
          { icon: '⚡', title: 'Performance', description: 'Core Web Vitals et vitesse.' },
          { icon: '🔒', title: 'Sécurité', description: 'Hardening et mises à jour sûres.' },
          { icon: '📈', title: 'SEO & tracking', description: 'SEO technique et analytics.' },
        ],
      },
      setup: {
        title: { prefix: 'Nous rendons votre boutique WooCommerce', highlight: 'prête à vendre', suffix: '' },
        paragraphs: ['De la configuration aux intégrations, nous gérons la technique.', 'Base propre, documentation et plan d’amélioration.'],
        buttonText: 'Démarrer WooCommerce',
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
          { href: '/wordpress/migratie', title: 'Migration WordPress', description: 'Migrez vers WordPress facilement' },
        ],
      },
    },
  },
  it: {
    metadata: {
      title: 'Shop WooCommerce | E-commerce su WordPress | Niblah',
      description:
        'Crea o ottimizza il tuo shop WooCommerce con Niblah. Checkout su misura, performance, SEO e integrazioni.',
      keywords: 'woocommerce shop, sviluppo woocommerce, wordpress ecommerce, agenzia woocommerce',
      openGraph: {
        title: 'Shop WooCommerce | Niblah',
        description: 'Sviluppo WooCommerce per e-commerce WordPress scalabile.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'SHOP WOOCOMMERCE',
      title: 'E-commerce potente con WooCommerce',
      description:
        'WooCommerce trasforma WordPress in una piattaforma e-commerce flessibile. Niblah costruisce shop veloci, SEO-friendly e orientati alla conversione.',
      ctaText: 'Parliamo del tuo progetto WooCommerce',
      ctaLink: '/contact',
      note: '* Da specialisti WordPress & WooCommerce',
      image: '/wordpress-hero.png',
      imageAlt: 'Esempio shop WooCommerce',
    },
    sections: {
      why: {
        title: { prefix: 'Perché', highlight: 'WooCommerce', suffix: '?' },
        paragraphs: ['WooCommerce è la soluzione e-commerce più popolare per WordPress.', 'Ideale se vuoi controllo e flessibilità.'],
        listHeading: 'Ottieni:',
        listItems: ['Controllo su checkout, pagamenti e spedizioni', 'Prodotti e regole prezzi su misura', 'Integrazioni via API/webhook', 'Base SEO solida', 'Setup B2C e B2B'],
      },
      features: {
        title: { prefix: 'Funzionalità', highlight: 'WooCommerce', suffix: '' },
        cards: [
          { icon: '🛒', title: 'Checkout su misura', description: 'Meno frizione, più conversioni.' },
          { icon: '💳', title: 'Pagamenti & spedizioni', description: 'Gateway, metodi e regole.' },
          { icon: '🔗', title: 'Integrazioni', description: 'Collega sistemi esterni.' },
          { icon: '⚡', title: 'Performance', description: 'Core Web Vitals e velocità.' },
          { icon: '🔒', title: 'Sicurezza', description: 'Hardening e aggiornamenti sicuri.' },
          { icon: '📈', title: 'SEO & tracking', description: 'SEO tecnico e analytics.' },
        ],
      },
      setup: {
        title: { prefix: 'Rendiamo il tuo shop WooCommerce', highlight: 'pronto a vendere', suffix: '' },
        paragraphs: ['Dalla configurazione alle integrazioni, gestiamo la parte tecnica.', 'Base pulita, documentazione e piano di miglioramento.'],
        buttonText: 'Inizia con WooCommerce',
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
          { href: '/wordpress/migratie', title: 'Migrazione WordPress', description: 'Migra a WordPress facilmente' },
        ],
      },
    },
  },
};

export function getWordPressWooCommerceCopy(locale) {
  return getLocaleCopy(copy, locale);
}

