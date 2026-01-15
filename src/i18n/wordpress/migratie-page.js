import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'WordPress Migration | Move Your Website Seamlessly | Niblah',
      description:
        'Migrate to or from WordPress without stress. Niblah handles safe data transfer, SEO preservation and 100% uptime. 30+ years of migration experience.',
      keywords:
        'wordpress migration, migrate website, migrate to wordpress, shopify to wordpress, woocommerce migration, magento to wordpress',
      openGraph: {
        title: 'WordPress Migration | Seamless Move | Niblah',
        description: 'Professional WordPress migrations with SEO preservation and 100% uptime.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS MIGRATION',
      title: 'Move your website seamlessly to or from WordPress',
      description:
        'Moving to WordPress—or from WordPress to Shopify? Worried about downtime, data loss or SEO impact? Niblah has 30+ years of experience with website and webshop migrations. We ensure a smooth transition from Shopify, Magento, WooCommerce or any other platform—without stress, with data and SEO value preserved.',
      ctaText: 'Discuss your migration',
      ctaLink: '/contact',
      note: '* 100% uptime and SEO preservation',
      image: '/wordpress-migration.png',
      imageAlt: 'WordPress migration process visualization',
    },
    sections: {
      data: {
        title: { prefix: 'We migrate', highlight: 'all your data', suffix: 'safely' },
        paragraphs: [
          'Migrating a website or webshop is not just “installing a new platform”. A professional migration means securely transferring every valuable dataset.',
          'Whether you migrate from Shopify to WooCommerce for more control, from Magento to WordPress for ease of use, or from WordPress to Shopify for stronger e-commerce—Niblah has the experience and tooling to make it smooth.',
          'We keep your business running: no data loss, 100% uptime, and SEO rankings protected.',
        ],
        listHeading: 'What we migrate for you:',
        listItems: [
          'All products with images and descriptions',
          'Customer data and order history (optional)',
          'Content pages, blog posts and media',
          'SEO data with URL redirects (301)',
          'Categories and taxonomy structure',
          'Sales data and analytics export',
        ],
      },
      routes: {
        title: { prefix: 'Our', highlight: 'migration specializations', suffix: '' },
        subtitle: 'We built a migration tool that works smoothly at an attractive rate.',
        cards: [
          {
            icon: '🛒',
            title: 'Shopify → WooCommerce',
            description: 'From Shopify to WordPress for more ownership and control.',
          },
          {
            icon: '💼',
            title: 'WooCommerce → Shopify',
            description: 'From WordPress to Shopify for stronger hosting and e-commerce tooling.',
          },
          {
            icon: '⚙️',
            title: 'Magento → WordPress',
            description: 'From complex Magento to user-friendly WordPress/WooCommerce.',
          },
          {
            icon: '🔧',
            title: 'Magento → Shopify',
            description: 'From Magento to Shopify for simpler management and maintenance.',
          },
          {
            icon: '📦',
            title: 'osCommerce → WordPress',
            description: 'Upgrade from legacy osCommerce to modern WordPress/WooCommerce.',
          },
          {
            icon: '🌐',
            title: 'Custom platform → WordPress',
            description: 'From custom/legacy platforms to flexible WordPress.',
          },
        ],
        ctaNote: 'We migrate your important data so you can get back online quickly and smoothly.',
        ctaText: 'See all migration options',
        ctaLink: '/contact',
      },
      steps: {
        title: { prefix: 'Store migration in', highlight: 'three steps', suffix: '' },
        subtitle: 'A professional migration requires careful planning and execution.',
        cards: [
          {
            number: '1',
            title: 'Preparation',
            description:
              'We inventory all data in your website/webshop, map the current URL structure and create full backups so nothing valuable is lost.',
            bullets: ['Data inventory', 'URL mapping & redirect plan', 'Full backups'],
          },
          {
            number: '2',
            title: 'Execution',
            description:
              'We migrate the data and implement a new URL structure if needed. We set up correct 301 redirects so everything remains findable.',
            bullets: ['Data migration with our tools', '301 redirects implemented', 'Testing on staging'],
          },
          {
            number: '3',
            title: 'Aftercare',
            description:
              'After go-live we monitor closely: redirects, SEO signals, and functionality. We support you with any questions or issues.',
            bullets: ['SEO monitoring & verification', 'Functional testing', 'Post-migration support'],
          },
        ],
      },
      guarantees: {
        title: { prefix: 'Our', highlight: 'migration guarantees', suffix: '' },
        subtitle: 'We take migrations seriously and provide clear guarantees.',
        cards: [
          {
            icon: '✅',
            title: '100% uptime',
            description:
              'Your website stays online during the migration. No lost traffic or sales—the visitor does not notice the transition.',
          },
          {
            icon: '🔒',
            title: 'GDPR compliant',
            description:
              'Your data is confidential. We follow GDPR guidelines and can sign a processing agreement. Data is used only for the migration.',
          },
          {
            icon: '🔍',
            title: 'SEO preserved',
            description:
              'We implement 301 redirects correctly so rankings remain intact. Metadata, alt-tags and technical SEO are migrated as well.',
          },
          {
            icon: '💾',
            title: 'No data loss',
            description:
              'We migrate products, customers, content and media completely. We create backups first and verify after migration that everything is correct.',
          },
        ],
      },
      pricing: {
        title: { prefix: 'Hand the work', highlight: 'over', suffix: '' },
        intro: [
          'The average website contains a large database: orders, customers, products, images, descriptions and categories. Migrating that data is a big job—and mistakes happen easily.',
          'That is why it is smart to outsource to experts with experience. Niblah helps with 30+ years of migration experience.',
        ],
        boxTitle: 'What does a migration cost?',
        boxSubtitle:
          'Pricing depends on how much data your site contains. Get a clear quote based on your specific needs.',
        factors: [
          {
            title: 'From platform',
            description: 'Shopify, Magento, WooCommerce, osCommerce, custom platforms',
          },
          {
            title: 'To platform',
            description: 'WordPress, WooCommerce, Shopify or another platform',
          },
          {
            title: 'Products',
            description: 'Number of products, variants and categories determines complexity',
          },
          {
            title: 'Customers & orders',
            description: 'Optional: include customer data and order history',
          },
        ],
        buttonText: 'Request a quote',
        buttonLink: '/contact',
        note: 'Feel free to contact us if you have any questions.',
      },
      related: {
        title: { prefix: 'More WordPress', highlight: 'services', suffix: '' },
        subtitle: 'Explore our other WordPress services for complete website solutions',
        moreInfoLabel: 'Learn more →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress website', description: 'Have your complete WordPress website built' },
          { href: '/wordpress/maatwerk', title: 'WordPress custom work', description: 'Custom plugins and tailored functionality' },
          { href: '/wordpress/thema', title: 'WordPress theme', description: 'Launch fast with a proven theme' },
          { href: '/wordpress/marketing', title: 'WordPress marketing', description: 'SEO, content marketing and Google Ads' },
        ],
      },
    },
  },
  nl: {
    metadata: {
      title: 'WordPress Migratie | Verhuis je Website Naadloos | Niblah',
      description:
        'Migreer naar of van WordPress zonder stress. Niblah zorgt voor veilige data-overzet, SEO behoud en 100% uptime. 30+ jaar migratie-ervaring.',
      keywords: 'wordpress migratie, website verhuizen, migreren naar wordpress, shopify naar wordpress, woocommerce migratie, magento naar wordpress',
      openGraph: {
        title: 'WordPress Migratie | Naadloos Verhuizen | Niblah',
        description: 'Professionele WordPress migratie met SEO behoud en 100% uptime.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS MIGRATIE',
      title: 'Verhuis je website naadloos naar of van WordPress',
      description:
        'Overstappen naar WordPress of juist van WordPress naar Shopify? Zorgen over downtime, dataverlies of SEO impact? Niblah heeft 30+ jaar ervaring met website en webshop migraties. We zorgen voor een soepele overstap van Shopify, Magento, WooCommerce of elk ander platform. Zonder stress, met behoud van alle data en SEO-waarde.',
      ctaText: 'Bespreek je migratie',
      ctaLink: '/contact',
      note: '* 100% uptime en volledige SEO behoud gegarandeerd',
      image: '/wordpress-migration.png',
      imageAlt: 'WordPress migratie proces visualisatie',
    },
    sections: {
      data: {
        title: { prefix: 'Wij zorgen voor snelle overgang van', highlight: 'al je data', suffix: '' },
        paragraphs: [
          'Het overzetten van een website of webshop is niet slechts een kwestie van installeren met een ander platform. Een professionele migratie betekent het veilig overplaatsen van alle waardevolle gegevens.',
          'Of je nu van Shopify naar WooCommerce migreert voor meer controle, van Magento naar WordPress voor gebruiksvriendelijkheid, of juist van WordPress naar Shopify voor betere e-commerce functionaliteit - Niblah heeft de ervaring en tools om dit soepel te laten verlopen.',
          'Niblah zorgt dat de overgang professioneel verloopt, zonder dataverlies, met 100% uptime en volledig behoud van je SEO-rankings.',
        ],
        listHeading: 'Wat Niblah voor je migreert:',
        listItems: [
          'Alle producten met afbeeldingen en beschrijvingen',
          'Klantgegevens en bestelhistorie (optioneel)',
          "Content pagina's, blogs en media",
          'SEO data met URL redirects (301)',
          'Categorieën en taxonomie structuur',
          'Verkoopgegevens en analytics export',
        ],
      },
      routes: {
        title: { prefix: 'Onze', highlight: 'migratie specialisaties', suffix: '' },
        subtitle: 'We hebben een migratie tool ontwikkeld die op een soepele manier werkt tegen een aantrekkelijk tarief',
        cards: [
          {
            icon: '🛒',
            title: 'Shopify → WooCommerce',
            description: 'Van Shopify naar WordPress voor meer controle en eigenaarschap over je webshop',
          },
          {
            icon: '💼',
            title: 'WooCommerce → Shopify',
            description: 'Van WordPress naar Shopify voor betere e-commerce functionaliteit en hosting',
          },
          {
            icon: '⚙️',
            title: 'Magento → WordPress',
            description: 'Van complex Magento naar gebruiksvriendelijk WordPress/WooCommerce',
          },
          {
            icon: '🔧',
            title: 'Magento → Shopify',
            description: 'Van Magento naar Shopify voor eenvoudiger beheer en onderhoud',
          },
          {
            icon: '📦',
            title: 'osCommerce → WordPress',
            description: 'Upgrade van verouderd osCommerce naar modern WordPress/WooCommerce',
          },
          {
            icon: '🌐',
            title: 'Custom Platform → WordPress',
            description: 'Van custom of verouderde platforms naar flexibel WordPress',
          },
        ],
        ctaNote: 'We zetten al je belangrijke gegevens over zodat jij snel en moeiteloos weer online bent',
        ctaText: 'Bekijk alle migratie mogelijkheden',
        ctaLink: '/contact',
      },
      steps: {
        title: { prefix: 'Webshop migratie in', highlight: 'drie stappen', suffix: '' },
        subtitle: 'Een professionele migratie vereist zorgvuldige planning en uitvoering',
        cards: [
          {
            number: '1',
            title: 'Voorbereiding',
            description:
              'We brengen eerst in kaart welke data er allemaal aanwezig is in je website of webshop. De huidige URL-structuur slaan we op en we maken natuurlijk back-ups, zodat er geen waardevolle informatie verloren gaat.',
            bullets: ['Data inventarisatie', 'URL-mapping en redirects plannen', 'Complete back-ups maken'],
          },
          {
            number: '2',
            title: 'Uitvoering',
            description:
              "Niblah migreert alle data van jouw website en implementeert een eventuele nieuwe URL-structuur. We zorgen voor correcte redirects van de oude URL's zodat alles in je website perfect vindbaar blijft.",
            bullets: ['Data migratie met onze tools', '301 redirects implementeren', 'Testing op staging omgeving'],
          },
          {
            number: '3',
            title: 'Nazorg',
            description:
              'Na de live gang monitoren we je website nauwkeurig. We controleren of alle redirects werken, SEO intact is gebleven en alles functioneert zoals verwacht. Support bij eventuele vragen of issues.',
            bullets: ['SEO monitoring en verificatie', 'Functionele testing', 'Post-migratie support'],
          },
        ],
      },
      guarantees: {
        title: { prefix: 'Onze', highlight: 'migratie garanties', suffix: '' },
        subtitle: 'Bij Niblah nemen we migraties serieus en geven duidelijke garanties',
        cards: [
          {
            icon: '✅',
            title: '100% Uptime',
            description:
              'Je wilt natuurlijk niet dat jouw website tijdens de migratie offline gaat. Niblah zorgt ervoor dat de migratie soepel verloopt en garandeert daarbij 100% uptime. De bezoeker merkt niets van de migratie.',
          },
          {
            icon: '🔒',
            title: 'AVG-Richtlijnen',
            description:
              'De data van jouw website is vertrouwelijk. We werken volgens AVG-richtlijnen en kunnen een verwerkingsovereenkomst sluiten. Data wordt alleen gebruikt voor de migratie.',
          },
          {
            icon: '🔍',
            title: 'SEO Behoud',
            description:
              'We implementeren alle URL redirects (301) correct zodat je SEO rankings intact blijven. Meta data, alt-tags en technische SEO worden overgezet.',
          },
          {
            icon: '💾',
            title: 'Geen Dataverlies',
            description:
              'Alle data wordt volledig gemigreerd - van producten en klanten tot content en media. We maken back-ups vooraf en verifiëren na de migratie dat alles correct is overgezet.',
          },
        ],
      },
      pricing: {
        title: { prefix: 'Geef het werk', highlight: 'uit handen', suffix: '' },
        intro: [
          'Een gemiddelde website heeft een enorme database aan data. Denk aan ordergegevens, klantgegevens, producten met afbeeldingen en beschrijvingen en de categorieën van je webshop. Het migreren van die data is een enorme klus, waarbij een foutje snel is gemaakt.',
          'Het is daarom verstandig om deze klus uit te besteden aan experts, die ervaring hebben met het overzetten van data. Niblah helpt je graag bij jouw website migratie met 30+ jaar ervaring.',
        ],
        boxTitle: 'Wat kost een migratie?',
        boxSubtitle:
          'De kosten van migratie zijn afhankelijk van het aantal data dat je in jouw website hebt. Krijg een duidelijke offerte op basis van jouw specifieke behoefte.',
        factors: [
          { title: 'Van platform', description: 'Shopify, Magento, WooCommerce, osCommerce, custom platforms' },
          { title: 'Naar platform', description: 'WordPress, WooCommerce, Shopify of ander platform' },
          { title: 'Producten', description: 'Aantal producten, varianten en categorieën bepaalt complexiteit' },
          { title: 'Klanten & Orders', description: 'Optioneel: klantgegevens en orderhistorie meenemen' },
        ],
        buttonText: 'Vraag offerte aan',
        buttonLink: '/contact',
        note: 'Aarzel ook zeker niet om contact met ons op te nemen mocht je ergens vragen over hebben',
      },
      related: {
        title: { prefix: 'Meer WordPress', highlight: 'Services', suffix: '' },
        subtitle: 'Ontdek onze andere WordPress diensten voor complete website oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress Website', description: 'Laat je volledige WordPress website bouwen' },
          { href: '/wordpress/maatwerk', title: 'WordPress Maatwerk', description: 'Custom plugins en functionaliteiten op maat' },
          { href: '/wordpress/thema', title: 'WordPress Thema', description: "Snel en kostenefficiënt starten met thema's" },
          { href: '/wordpress/marketing', title: 'WordPress Marketing', description: 'SEO, content marketing en Google Ads' },
        ],
      },
    },
  },
  de: {
    metadata: {
      title: 'WordPress Migration | Website nahtlos umziehen | Niblah',
      description:
        'Migration zu oder von WordPress ohne Stress. Niblah übernimmt sicheren Datentransfer, SEO-Erhalt und 100% Uptime. 30+ Jahre Erfahrung.',
      keywords:
        'wordpress migration, website umzug, zu wordpress migrieren, shopify zu wordpress, woocommerce migration, magento zu wordpress',
      openGraph: {
        title: 'WordPress Migration | Nahtlos umziehen | Niblah',
        description: 'Professionelle Migrationen mit SEO-Erhalt und 100% Uptime.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS MIGRATION',
      title: 'Deine Website nahtlos zu oder von WordPress migrieren',
      description:
        'Wechsel zu WordPress oder von WordPress zu Shopify? Sorgen wegen Downtime, Datenverlust oder SEO? Niblah sorgt für einen reibungslosen Umzug von Shopify, Magento, WooCommerce oder anderen Plattformen – mit Daten- und SEO-Erhalt.',
      ctaText: 'Migration besprechen',
      ctaLink: '/contact',
      note: '* 100% Uptime & SEO-Erhalt',
      image: '/wordpress-migration.png',
      imageAlt: 'Visualisierung des WordPress Migrationsprozesses',
    },
    sections: {
      data: {
        title: { prefix: 'Schneller Umzug deiner', highlight: 'gesamten Daten', suffix: '' },
        paragraphs: [
          'Eine Migration ist mehr als ein Plattformwechsel. Professionell bedeutet: alle wertvollen Daten sicher übertragen.',
          'Ob Shopify → WooCommerce für mehr Kontrolle, Magento → WordPress für bessere Bedienbarkeit oder WordPress → Shopify für E-Commerce – wir haben Erfahrung und Tools.',
          'Ohne Datenverlust, mit 100% Uptime und geschützt­en SEO-Rankings.',
        ],
        listHeading: 'Was wir migrieren:',
        listItems: [
          'Produkte inkl. Bilder und Beschreibungen',
          'Kundendaten und Bestellhistorie (optional)',
          'Seiten, Blogposts und Medien',
          'SEO-Daten inkl. 301-Weiterleitungen',
          'Kategorien und Taxonomie',
          'Sales- und Analytics-Export',
        ],
      },
      routes: {
        title: { prefix: 'Unsere', highlight: 'Migrations-Spezialisierungen', suffix: '' },
        subtitle: 'Wir haben ein Migrationstool entwickelt, das zuverlässig und kosteneffizient arbeitet.',
        cards: [
          { icon: '🛒', title: 'Shopify → WooCommerce', description: 'Mehr Ownership und Kontrolle über deinen Shop.' },
          { icon: '💼', title: 'WooCommerce → Shopify', description: 'Bessere Hosting- und E-Commerce-Tools.' },
          { icon: '⚙️', title: 'Magento → WordPress', description: 'Von komplex zu benutzerfreundlich.' },
          { icon: '🔧', title: 'Magento → Shopify', description: 'Einfacheres Management und Wartung.' },
          { icon: '📦', title: 'osCommerce → WordPress', description: 'Upgrade von Legacy zu modernem WordPress/WooCommerce.' },
          { icon: '🌐', title: 'Custom → WordPress', description: 'Von Custom/Legacy zu flexiblem WordPress.' },
        ],
        ctaNote: 'Wir übertragen alle wichtigen Daten, damit du schnell wieder online bist.',
        ctaText: 'Alle Migrationsoptionen ansehen',
        ctaLink: '/contact',
      },
      steps: {
        title: { prefix: 'Shop-Migration in', highlight: 'drei Schritten', suffix: '' },
        subtitle: 'Sorgfältige Planung und Umsetzung sind entscheidend.',
        cards: [
          {
            number: '1',
            title: 'Vorbereitung',
            description: 'Inventur der Daten, URL-Mapping und vollständige Backups, damit nichts verloren geht.',
            bullets: ['Dateninventur', 'URL-Mapping & Redirect-Plan', 'Vollständige Backups'],
          },
          {
            number: '2',
            title: 'Umsetzung',
            description: 'Migration der Daten und Implementierung der Redirects, damit alles weiterhin auffindbar ist.',
            bullets: ['Migration mit Tools', '301-Redirects', 'Tests in Staging'],
          },
          {
            number: '3',
            title: 'Nachbetreuung',
            description: 'Monitoring nach Livegang: Redirects, SEO-Signale und Funktion. Support inklusive.',
            bullets: ['SEO-Monitoring', 'Funktionstests', 'Post-Migration Support'],
          },
        ],
      },
      guarantees: {
        title: { prefix: 'Unsere', highlight: 'Migrationsgarantien', suffix: '' },
        subtitle: 'Klare Garantien – weil Migrationen kritisch sind.',
        cards: [
          { icon: '✅', title: '100% Uptime', description: 'Deine Website bleibt online – keine verlorenen Sales oder Besucher.' },
          { icon: '🔒', title: 'DSGVO-konform', description: 'Vertrauliche Daten, saubere Prozesse und optional AVV.' },
          { icon: '🔍', title: 'SEO bleibt erhalten', description: '301-Redirects und SEO-Daten werden korrekt übertragen.' },
          { icon: '💾', title: 'Kein Datenverlust', description: 'Backups, vollständige Migration und Verifikation nach dem Umzug.' },
        ],
      },
      pricing: {
        title: { prefix: 'Gib die Arbeit', highlight: 'ab', suffix: '' },
        intro: [
          'Eine Website enthält viele Daten: Bestellungen, Kunden, Produkte, Bilder und Kategorien. Migration ist komplex.',
          'Daher lohnt sich ein erfahrener Partner. Niblah bringt 30+ Jahre Erfahrung mit.',
        ],
        boxTitle: 'Was kostet eine Migration?',
        boxSubtitle: 'Der Preis hängt vom Datenumfang ab. Du erhältst ein klares Angebot passend zu deinem Projekt.',
        factors: [
          { title: 'Von Plattform', description: 'Shopify, Magento, WooCommerce, osCommerce, Custom' },
          { title: 'Zu Plattform', description: 'WordPress, WooCommerce, Shopify oder andere' },
          { title: 'Produkte', description: 'Anzahl Produkte/Varianten/Kategorien beeinflusst Komplexität' },
          { title: 'Kunden & Bestellungen', description: 'Optional: Historie mitnehmen' },
        ],
        buttonText: 'Angebot anfragen',
        buttonLink: '/contact',
        note: 'Melde dich gerne, wenn du Fragen hast.',
      },
      related: {
        title: { prefix: 'Mehr WordPress', highlight: 'Services', suffix: '' },
        subtitle: 'Weitere WordPress-Services für eine komplette Lösung',
        moreInfoLabel: 'Mehr erfahren →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress Website', description: 'Komplette WordPress-Website erstellen lassen' },
          { href: '/wordpress/maatwerk', title: 'WordPress Maßanfertigung', description: 'Individuelle Plugins und Funktionen' },
          { href: '/wordpress/thema', title: 'WordPress Theme', description: 'Schnell starten mit einem bewährten Theme' },
          { href: '/wordpress/marketing', title: 'WordPress Marketing', description: 'SEO, Content Marketing und Google Ads' },
        ],
      },
    },
  },
  sv: {
    metadata: {
      title: 'WordPress-migrering | Flytta din webbplats smidigt | Niblah',
      description:
        'Migrera till eller från WordPress utan stress. Niblah hanterar säker dataflytt, SEO-bevarande och 100% uptime. 30+ års erfarenhet.',
      keywords: 'wordpress migrering, flytta webbplats, shopify till wordpress, woocommerce migrering, magento till wordpress',
      openGraph: {
        title: 'WordPress-migrering | Smidig flytt | Niblah',
        description: 'Professionell migrering med SEO-bevarande och 100% uptime.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS-MIGRERING',
      title: 'Flytta din webbplats smidigt till eller från WordPress',
      description:
        'Byta till WordPress – eller från WordPress till Shopify? Oro för downtime, dataförlust eller SEO? Vi säkerställer en smidig migrering med bevarad data och SEO.',
      ctaText: 'Diskutera din migrering',
      ctaLink: '/contact',
      note: '* 100% uptime och bevarad SEO',
      image: '/wordpress-migration.png',
      imageAlt: 'Visualisering av WordPress-migrering',
    },
    sections: {
      data: {
        title: { prefix: 'Vi flyttar', highlight: 'all din data', suffix: 'säkert' },
        paragraphs: [
          'En migrering handlar inte bara om att byta plattform. Det är en säker flytt av all värdefull data.',
          'Oavsett om du migrerar Shopify → WooCommerce, Magento → WordPress eller WordPress → Shopify har vi processen och verktygen.',
          'Ingen dataförlust, 100% uptime och skyddad SEO.',
        ],
        listHeading: 'Det vi migrerar:',
        listItems: [
          'Produkter med bilder och beskrivningar',
          'Kunder och orderhistorik (valfritt)',
          'Sidor, bloggar och media',
          'SEO-data med 301-omdirigeringar',
          'Kategorier och taxonomi',
          'Försäljnings- och analytics-export',
        ],
      },
      routes: {
        title: { prefix: 'Våra', highlight: 'migreringsspecialiseringar', suffix: '' },
        subtitle: 'Vi har utvecklat ett migreringsverktyg som fungerar smidigt till ett bra pris.',
        cards: [
          { icon: '🛒', title: 'Shopify → WooCommerce', description: 'Mer kontroll och ägandeskap över din shop.' },
          { icon: '💼', title: 'WooCommerce → Shopify', description: 'Bättre hosting och e-handelsverktyg.' },
          { icon: '⚙️', title: 'Magento → WordPress', description: 'Från komplext till användarvänligt.' },
          { icon: '🔧', title: 'Magento → Shopify', description: 'Enklare drift och underhåll.' },
          { icon: '📦', title: 'osCommerce → WordPress', description: 'Uppgradera från legacy till modern WordPress.' },
          { icon: '🌐', title: 'Custom → WordPress', description: 'Från custom/legacy till flexibelt WordPress.' },
        ],
        ctaNote: 'Vi flyttar din viktiga data så att du snabbt kan vara online igen.',
        ctaText: 'Se alla alternativ',
        ctaLink: '/contact',
      },
      steps: {
        title: { prefix: 'Shop-migrering i', highlight: 'tre steg', suffix: '' },
        subtitle: 'Noggrann planering och genomförande krävs.',
        cards: [
          { number: '1', title: 'Förberedelse', description: 'Inventera data, planera URL:er och skapa backups.', bullets: ['Datainventering', 'URL-mapping & redirects', 'Full backups'] },
          { number: '2', title: 'Genomförande', description: 'Migrera data och implementera 301-omdirigeringar.', bullets: ['Datamigrering', '301-redirects', 'Staging-test'] },
          { number: '3', title: 'Efterarbete', description: 'Övervaka SEO och funktion efter lansering.', bullets: ['SEO-monitorering', 'Funktionstest', 'Support'] },
        ],
      },
      guarantees: {
        title: { prefix: 'Våra', highlight: 'garantier', suffix: '' },
        subtitle: 'Tydliga garantier för en trygg migrering.',
        cards: [
          { icon: '✅', title: '100% uptime', description: 'Webbplatsen är online under migreringen.' },
          { icon: '🔒', title: 'GDPR', description: 'Vi hanterar data säkert och enligt riktlinjer.' },
          { icon: '🔍', title: 'SEO bevaras', description: 'Rätt 301-omdirigeringar och SEO-data flyttas.' },
          { icon: '💾', title: 'Ingen dataförlust', description: 'Backups och verifiering efter migrering.' },
        ],
      },
      pricing: {
        title: { prefix: 'Låt oss', highlight: 'ta hand om det', suffix: '' },
        intro: [
          'En webbplats innehåller mycket data. Migrering är komplext och fel kan bli dyra.',
          'Därför är det smart att anlita experter. Niblah har 30+ års erfarenhet.',
        ],
        boxTitle: 'Vad kostar en migrering?',
        boxSubtitle: 'Pris beror på datamängd och komplexitet. Du får en tydlig offert.',
        factors: [
          { title: 'Från plattform', description: 'Shopify, Magento, WooCommerce, osCommerce, custom' },
          { title: 'Till plattform', description: 'WordPress, WooCommerce, Shopify eller annat' },
          { title: 'Produkter', description: 'Antal produkter/varianter/kategorier' },
          { title: 'Kunder & ordrar', description: 'Valfritt: ta med historik' },
        ],
        buttonText: 'Begär offert',
        buttonLink: '/contact',
        note: 'Hör av dig om du har frågor.',
      },
      related: {
        title: { prefix: 'Fler WordPress', highlight: 'tjänster', suffix: '' },
        subtitle: 'Utforska våra andra WordPress-tjänster',
        moreInfoLabel: 'Läs mer →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress-webbplats', description: 'Låt oss bygga din WordPress-webbplats' },
          { href: '/wordpress/maatwerk', title: 'WordPress special', description: 'Skräddarsydda plugins och funktioner' },
          { href: '/wordpress/thema', title: 'WordPress-tema', description: 'Snabb start med ett beprövat tema' },
          { href: '/wordpress/marketing', title: 'WordPress-marknadsföring', description: 'SEO, content och Google Ads' },
        ],
      },
    },
  },
  da: {
    metadata: {
      title: 'WordPress migrering | Flyt din hjemmeside nemt | Niblah',
      description:
        'Migrér til eller fra WordPress uden stress. Niblah håndterer sikker dataflytning, SEO-bevaring og 100% oppetid. 30+ års erfaring.',
      keywords: 'wordpress migrering, flyt hjemmeside, shopify til wordpress, woocommerce migrering, magento til wordpress',
      openGraph: {
        title: 'WordPress migrering | Smidig flytning | Niblah',
        description: 'Professionel migrering med SEO-bevaring og 100% oppetid.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS MIGRERING',
      title: 'Flyt din hjemmeside problemfrit til eller fra WordPress',
      description:
        'Skifte til WordPress – eller fra WordPress til Shopify? Vi sikrer en smidig migrering med bevaret data og SEO.',
      ctaText: 'Tal om din migrering',
      ctaLink: '/contact',
      note: '* 100% oppetid og SEO-bevaring',
      image: '/wordpress-migration.png',
      imageAlt: 'Visualisering af WordPress migrering',
    },
    sections: {
      data: {
        title: { prefix: 'Vi flytter', highlight: 'al din data', suffix: 'sikkert' },
        paragraphs: [
          'Migrering er mere end at skifte platform. Det er sikker flytning af alle vigtige data.',
          'Uanset om du migrerer Shopify → WooCommerce, Magento → WordPress eller WordPress → Shopify, har vi processen og værktøjerne.',
          'Ingen datatab, 100% oppetid og beskyttet SEO.',
        ],
        listHeading: 'Det vi migrerer:',
        listItems: [
          'Produkter med billeder og beskrivelser',
          'Kunder og ordre-historik (valgfrit)',
          'Sider, blog og medier',
          'SEO-data med 301-redirects',
          'Kategorier og taxonomi',
          'Salg og analytics-export',
        ],
      },
      routes: {
        title: { prefix: 'Vores', highlight: 'migreringsspecialer', suffix: '' },
        subtitle: 'Vi har bygget et migreringsværktøj, der fungerer smidigt til en attraktiv pris.',
        cards: [
          { icon: '🛒', title: 'Shopify → WooCommerce', description: 'Mere kontrol og ejerskab over shoppen.' },
          { icon: '💼', title: 'WooCommerce → Shopify', description: 'Bedre hosting og e-commerce værktøjer.' },
          { icon: '⚙️', title: 'Magento → WordPress', description: 'Fra komplekst til brugervenligt.' },
          { icon: '🔧', title: 'Magento → Shopify', description: 'Nemmere drift og vedligehold.' },
          { icon: '📦', title: 'osCommerce → WordPress', description: 'Opgrader fra legacy til moderne WordPress.' },
          { icon: '🌐', title: 'Custom → WordPress', description: 'Fra custom/legacy til fleksibelt WordPress.' },
        ],
        ctaNote: 'Vi flytter din vigtige data, så du hurtigt kan være online igen.',
        ctaText: 'Se alle muligheder',
        ctaLink: '/contact',
      },
      steps: {
        title: { prefix: 'Shop-migrering i', highlight: 'tre trin', suffix: '' },
        subtitle: 'Professionel migrering kræver planlægning og eksekvering.',
        cards: [
          { number: '1', title: 'Forberedelse', description: 'Kortlæg data, planlæg URL’er og lav backups.', bullets: ['Data-overblik', 'URL-mapping & redirects', 'Backups'] },
          { number: '2', title: 'Udførelse', description: 'Migrér data og implementér 301-redirects.', bullets: ['Datamigrering', '301-redirects', 'Staging test'] },
          { number: '3', title: 'Efterarbejde', description: 'Monitorér SEO og funktion efter lancering.', bullets: ['SEO monitorering', 'Funktionstest', 'Support'] },
        ],
      },
      guarantees: {
        title: { prefix: 'Vores', highlight: 'garantier', suffix: '' },
        subtitle: 'Tydelige garantier for en tryg migrering.',
        cards: [
          { icon: '✅', title: '100% oppetid', description: 'Hjemmesiden er online under migreringen.' },
          { icon: '🔒', title: 'GDPR', description: 'Sikker håndtering af data og klare processer.' },
          { icon: '🔍', title: 'SEO bevares', description: 'Korrekte 301-redirects og SEO-data flyttes.' },
          { icon: '💾', title: 'Ingen datatab', description: 'Backups og verifikation efter migrering.' },
        ],
      },
      pricing: {
        title: { prefix: 'Lad os', highlight: 'tage os af det', suffix: '' },
        intro: [
          'En hjemmeside indeholder meget data. Migrering er kompleks og fejl kan blive dyre.',
          'Derfor giver det mening at outsource til eksperter. Niblah har 30+ års erfaring.',
        ],
        boxTitle: 'Hvad koster en migrering?',
        boxSubtitle: 'Pris afhænger af datamængde og kompleksitet. Du får et tydeligt tilbud.',
        factors: [
          { title: 'Fra platform', description: 'Shopify, Magento, WooCommerce, osCommerce, custom' },
          { title: 'Til platform', description: 'WordPress, WooCommerce, Shopify eller andet' },
          { title: 'Produkter', description: 'Antal produkter/varianter/kategorier' },
          { title: 'Kunder & ordrer', description: 'Valgfrit: medtag historik' },
        ],
        buttonText: 'Få et tilbud',
        buttonLink: '/contact',
        note: 'Kontakt os endelig, hvis du har spørgsmål.',
      },
      related: {
        title: { prefix: 'Flere WordPress', highlight: 'services', suffix: '' },
        subtitle: 'Udforsk vores andre WordPress-services',
        moreInfoLabel: 'Læs mere →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress-hjemmeside', description: 'Få bygget din WordPress-hjemmeside' },
          { href: '/wordpress/maatwerk', title: 'WordPress special', description: 'Skræddersyede plugins og funktioner' },
          { href: '/wordpress/thema', title: 'WordPress tema', description: 'Hurtig start med et gennemprøvet tema' },
          { href: '/wordpress/marketing', title: 'WordPress marketing', description: 'SEO, content og Google Ads' },
        ],
      },
    },
  },
  fr: {
    metadata: {
      title: 'Migration WordPress | Déplacez votre site sans stress | Niblah',
      description:
        'Migrez vers ou depuis WordPress sans stress. Transfert de données sécurisé, SEO préservé et 100% uptime. 30+ ans d’expérience.',
      keywords: 'migration wordpress, migrer site web, shopify vers wordpress, migration woocommerce, magento vers wordpress',
      openGraph: {
        title: 'Migration WordPress | Déplacement fluide | Niblah',
        description: 'Migrations professionnelles avec SEO préservé et 100% uptime.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'MIGRATION WORDPRESS',
      title: 'Déplacez votre site vers ou depuis WordPress en toute sérénité',
      description:
        'Passer à WordPress ou à Shopify ? Inquiétudes sur la disponibilité, les données ou le SEO ? Nous assurons une migration fluide avec données et SEO préservés.',
      ctaText: 'Parlons de votre migration',
      ctaLink: '/contact',
      note: '* 100% uptime et SEO préservé',
      image: '/wordpress-migration.png',
      imageAlt: 'Processus de migration WordPress',
    },
    sections: {
      data: {
        title: { prefix: 'Nous migrons', highlight: 'toutes vos données', suffix: 'en sécurité' },
        paragraphs: [
          'Une migration ne consiste pas seulement à changer de plateforme. Il s’agit de transférer toutes les données importantes en toute sécurité.',
          'Shopify → WooCommerce, Magento → WordPress ou WordPress → Shopify : nous avons l’expérience et les outils.',
          'Sans perte de données, avec 100% uptime et un SEO protégé.',
        ],
        listHeading: 'Ce que nous migrons :',
        listItems: [
          'Produits avec images et descriptions',
          'Clients et historique de commandes (optionnel)',
          'Pages, articles et médias',
          'Données SEO avec redirections 301',
          'Catégories et taxonomie',
          'Export ventes et analytics',
        ],
      },
      routes: {
        title: { prefix: 'Nos', highlight: 'spécialisations de migration', suffix: '' },
        subtitle: 'Nous avons développé un outil de migration efficace à un tarif attractif.',
        cards: [
          { icon: '🛒', title: 'Shopify → WooCommerce', description: 'Plus de contrôle et de propriété.' },
          { icon: '💼', title: 'WooCommerce → Shopify', description: 'Meilleure infra et outils e-commerce.' },
          { icon: '⚙️', title: 'Magento → WordPress', description: 'De complexe à simple.' },
          { icon: '🔧', title: 'Magento → Shopify', description: 'Gestion et maintenance simplifiées.' },
          { icon: '📦', title: 'osCommerce → WordPress', description: 'Mise à niveau vers un WordPress moderne.' },
          { icon: '🌐', title: 'Custom → WordPress', description: 'De legacy/custom vers WordPress flexible.' },
        ],
        ctaNote: 'Nous transférons vos données importantes pour que vous soyez rapidement en ligne.',
        ctaText: 'Voir toutes les options',
        ctaLink: '/contact',
      },
      steps: {
        title: { prefix: 'Migration e-commerce en', highlight: 'trois étapes', suffix: '' },
        subtitle: 'Planification et exécution soignées sont essentielles.',
        cards: [
          { number: '1', title: 'Préparation', description: 'Inventaire, mapping des URLs et backups.', bullets: ['Inventaire des données', 'Plan de redirections', 'Backups complets'] },
          { number: '2', title: 'Exécution', description: 'Migration et redirections 301.', bullets: ['Migration des données', 'Redirections 301', 'Tests sur staging'] },
          { number: '3', title: 'Suivi', description: 'Monitoring SEO et support post-migration.', bullets: ['Monitoring SEO', 'Tests fonctionnels', 'Support'] },
        ],
      },
      guarantees: {
        title: { prefix: 'Nos', highlight: 'garanties', suffix: '' },
        subtitle: 'Des garanties claires pour une migration sereine.',
        cards: [
          { icon: '✅', title: '100% uptime', description: 'Votre site reste en ligne pendant la migration.' },
          { icon: '🔒', title: 'RGPD', description: 'Traitement des données en toute sécurité.' },
          { icon: '🔍', title: 'SEO préservé', description: 'Redirections 301 et données SEO migrées correctement.' },
          { icon: '💾', title: 'Aucune perte', description: 'Backups et vérification après migration.' },
        ],
      },
      pricing: {
        title: { prefix: 'Confiez-nous', highlight: 'le travail', suffix: '' },
        intro: [
          'Un site contient beaucoup de données. La migration est complexe et les erreurs peuvent coûter cher.',
          'Faites appel à des experts : Niblah a 30+ ans d’expérience.',
        ],
        boxTitle: 'Combien coûte une migration ?',
        boxSubtitle: 'Le coût dépend du volume de données. Vous recevez un devis clair.',
        factors: [
          { title: 'Plateforme source', description: 'Shopify, Magento, WooCommerce, osCommerce, custom' },
          { title: 'Plateforme cible', description: 'WordPress, WooCommerce, Shopify ou autre' },
          { title: 'Produits', description: 'Nombre de produits/variantes/catégories' },
          { title: 'Clients & commandes', description: 'Optionnel : inclure l’historique' },
        ],
        buttonText: 'Demander un devis',
        buttonLink: '/contact',
        note: 'Contactez-nous si vous avez des questions.',
      },
      related: {
        title: { prefix: 'Plus de services', highlight: 'WordPress', suffix: '' },
        subtitle: 'Découvrez nos autres services WordPress',
        moreInfoLabel: 'En savoir plus →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'Site WordPress', description: 'Faites créer votre site WordPress' },
          { href: '/wordpress/maatwerk', title: 'Sur-mesure', description: 'Plugins et fonctionnalités sur mesure' },
          { href: '/wordpress/thema', title: 'Thème WordPress', description: 'Démarrez vite avec un thème éprouvé' },
          { href: '/wordpress/marketing', title: 'Marketing WordPress', description: 'SEO, contenu et Google Ads' },
        ],
      },
    },
  },
  it: {
    metadata: {
      title: 'Migrazione WordPress | Sposta il sito senza stress | Niblah',
      description:
        'Migra verso o da WordPress senza stress. Trasferimento dati sicuro, SEO preservato e 100% uptime. 30+ anni di esperienza.',
      keywords: 'migrazione wordpress, migrare sito, shopify a wordpress, migrazione woocommerce, magento a wordpress',
      openGraph: {
        title: 'Migrazione WordPress | Passaggio fluido | Niblah',
        description: 'Migrazioni professionali con SEO preservato e 100% uptime.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'MIGRAZIONE WORDPRESS',
      title: 'Sposta il tuo sito verso o da WordPress in modo fluido',
      description:
        'Passare a WordPress o a Shopify? Timori su downtime, dati o SEO? Garantiamo una migrazione fluida con dati e SEO preservati.',
      ctaText: 'Parliamo della migrazione',
      ctaLink: '/contact',
      note: '* 100% uptime e SEO preservato',
      image: '/wordpress-migration.png',
      imageAlt: 'Processo di migrazione WordPress',
    },
    sections: {
      data: {
        title: { prefix: 'Migriamo', highlight: 'tutti i tuoi dati', suffix: 'in sicurezza' },
        paragraphs: [
          'Una migrazione non è solo cambiare piattaforma: è trasferire tutti i dati importanti in modo sicuro.',
          'Shopify → WooCommerce, Magento → WordPress o WordPress → Shopify: abbiamo esperienza e strumenti.',
          'Niente perdita di dati, 100% uptime e SEO protetto.',
        ],
        listHeading: 'Cosa migriamo:',
        listItems: [
          'Prodotti con immagini e descrizioni',
          'Clienti e storico ordini (opzionale)',
          'Pagine, blog e media',
          'Dati SEO con redirect 301',
          'Categorie e tassonomie',
          'Export vendite e analytics',
        ],
      },
      routes: {
        title: { prefix: 'Le nostre', highlight: 'specializzazioni', suffix: 'di migrazione' },
        subtitle: 'Abbiamo creato uno strumento di migrazione efficace a un prezzo competitivo.',
        cards: [
          { icon: '🛒', title: 'Shopify → WooCommerce', description: 'Più controllo e proprietà del negozio.' },
          { icon: '💼', title: 'WooCommerce → Shopify', description: 'Hosting e strumenti e-commerce migliori.' },
          { icon: '⚙️', title: 'Magento → WordPress', description: 'Da complesso a più semplice.' },
          { icon: '🔧', title: 'Magento → Shopify', description: 'Gestione e manutenzione più facili.' },
          { icon: '📦', title: 'osCommerce → WordPress', description: 'Upgrade da legacy a WordPress moderno.' },
          { icon: '🌐', title: 'Custom → WordPress', description: 'Da custom/legacy a WordPress flessibile.' },
        ],
        ctaNote: 'Trasferiamo i dati importanti così torni online rapidamente.',
        ctaText: 'Vedi tutte le opzioni',
        ctaLink: '/contact',
      },
      steps: {
        title: { prefix: 'Migrazione shop in', highlight: 'tre step', suffix: '' },
        subtitle: 'Serve pianificazione e un’esecuzione precisa.',
        cards: [
          { number: '1', title: 'Preparazione', description: 'Inventario dati, mapping URL e backup.', bullets: ['Inventario', 'Piano redirect', 'Backup completi'] },
          { number: '2', title: 'Esecuzione', description: 'Migrazione e redirect 301.', bullets: ['Migrazione dati', 'Redirect 301', 'Test su staging'] },
          { number: '3', title: 'Assistenza', description: 'Monitoraggio SEO e supporto post-migrazione.', bullets: ['Monitoraggio SEO', 'Test funzionali', 'Supporto'] },
        ],
      },
      guarantees: {
        title: { prefix: 'Le nostre', highlight: 'garanzie', suffix: '' },
        subtitle: 'Garanzie chiare per una migrazione tranquilla.',
        cards: [
          { icon: '✅', title: '100% uptime', description: 'Il sito resta online durante la migrazione.' },
          { icon: '🔒', title: 'GDPR', description: 'Gestione sicura dei dati e processi chiari.' },
          { icon: '🔍', title: 'SEO preservato', description: 'Redirect 301 e dati SEO trasferiti correttamente.' },
          { icon: '💾', title: 'Nessuna perdita', description: 'Backup e verifica dopo la migrazione.' },
        ],
      },
      pricing: {
        title: { prefix: 'Affida a noi', highlight: 'il lavoro', suffix: '' },
        intro: [
          'Un sito contiene molti dati. La migrazione è complessa e gli errori possono essere costosi.',
          'Per questo conviene affidarsi a esperti. Niblah ha 30+ anni di esperienza.',
        ],
        boxTitle: 'Quanto costa una migrazione?',
        boxSubtitle: 'Il costo dipende dal volume di dati. Ricevi un preventivo chiaro.',
        factors: [
          { title: 'Piattaforma di partenza', description: 'Shopify, Magento, WooCommerce, osCommerce, custom' },
          { title: 'Piattaforma di arrivo', description: 'WordPress, WooCommerce, Shopify o altro' },
          { title: 'Prodotti', description: 'Numero di prodotti/varianti/categorie' },
          { title: 'Clienti & ordini', description: 'Opzionale: includere lo storico' },
        ],
        buttonText: 'Richiedi preventivo',
        buttonLink: '/contact',
        note: 'Contattaci se hai domande.',
      },
      related: {
        title: { prefix: 'Altri servizi', highlight: 'WordPress', suffix: '' },
        subtitle: 'Scopri gli altri servizi WordPress',
        moreInfoLabel: 'Scopri di più →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'Sito WordPress', description: 'Fai realizzare il tuo sito WordPress' },
          { href: '/wordpress/maatwerk', title: 'Sviluppo su misura', description: 'Plugin e funzionalità personalizzate' },
          { href: '/wordpress/thema', title: 'Tema WordPress', description: 'Parti velocemente con un tema collaudato' },
          { href: '/wordpress/marketing', title: 'Marketing WordPress', description: 'SEO, contenuti e Google Ads' },
        ],
      },
    },
  },
};

export function getWordPressMigratieCopy(locale) {
  return getLocaleCopy(copy, locale);
}

