const copy = {
    metadata: {
      title: 'WordPress Maatwerk | Custom Development & Plugins op Maat | Niblah',
      description:
        'WordPress maatwerk door Niblah: unieke functionaliteiten, custom plugins en themes volledig op maat. 30+ jaar development ervaring voor jouw perfecte website.',
      keywords:
        'wordpress maatwerk, wordpress custom development, wordpress plugin ontwikkeling, custom wordpress theme, maatwerk website',
      openGraph: {
        title: 'WordPress Maatwerk | Custom Development | Niblah',
        description: 'Custom WordPress development voor unieke functionaliteiten en design op maat.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS MAATWERK DEVELOPMENT',
      title: 'Creëer een WordPress website met functionaliteiten volledig op maat',
      description:
        "Standaard WordPress themes en plugins bieden veel, maar met maatwerk ga je verder. Niblah bouwt custom functionaliteiten, unieke themes en geavanceerde integraties die perfect aansluiten op jouw merkidentiteit en bedrijfsdoelen. Van member portals tot complexe API-koppelingen - wij maken het mogelijk.",
      ctaText: 'Bespreek je maatwerk project',
      ctaLink: '/contact',
      note: '* 30+ jaar development expertise voor complete WordPress oplossingen',
      image: '/wordpress-maatwerk.png',
      imageAlt: 'WordPress maatwerk development dashboard',
    },
    sections: {
      why: {
        title: {
          prefix: 'Waarom kiezen voor',
          highlight: 'maatwerk',
          suffix: '?',
        },
        paragraphs: [
          'Een standaard WordPress website biedt veel mogelijkheden, maar met maatwerk haal je pas het maximale uit je online platform. Geen beperkingen meer door standaard themes of plugins die net niet passen.',
          'Met WordPress maatwerk van Niblah creëer je een website die volledig aansluit op jouw unieke merkidentiteit, specifieke workflow en de wensen van je doelgroep. Van custom post types tot geavanceerde CRM-integraties.',
          'Geen beperkingen, maar complete vrijheid om te groeien, optimaliseren en je te onderscheiden van de concurrentie.',
        ],
        buildHeading: 'Wat Niblah voor je bouwt:',
        buildItems: [
          'Custom WordPress themes volledig op maat',
          'Private plugins voor specifieke functionaliteiten',
          'Geavanceerde API-integraties met externe systemen',
          'Custom post types en taxonomies',
          'Member portals en protected content areas',
          'Geavanceerde zoek- en filteropties',
        ],
      },
      benefits: {
        title: {
          prefix: 'Drie redenen waarom we',
          highlight: 'maatwerk',
          suffix: 'aanbevelen',
        },
        quote: '"Steeds meer ondernemers kiezen voor maatwerk WordPress - en dat is niet voor niets!"',
        cards: [
          {
            icon: '🎨',
            title: 'Uniek Design',
            description:
              'Geen standaard themes, maar een website die perfect aansluit bij de look & feel van jouw merk. Complete controle over elk design element zonder theme beperkingen.',
          },
          {
            icon: '⚙️',
            title: 'Custom Functionaliteiten',
            description:
              'Van member portals tot custom dashboards. WordPress volledig aangepast aan jouw specifieke bedrijfsprocessen, workflow en gebruikersrollen.',
          },
          {
            icon: '📊',
            title: 'Optimale UX',
            description:
              'Stem de gebruikerservaring exact af op jouw bezoekers. Dit verhoogt gebruiksvriendelijkheid, engagement en conversie significant.',
          },
        ],
      },
      features: {
        title: {
          prefix: 'Functionaliteiten die we',
          highlight: 'bouwen',
          suffix: '',
        },
        subtitle: 'Met WordPress maatwerk is bijna alles mogelijk. Enkele voorbeelden van wat we realiseren:',
        cards: [
          {
            icon: '🔌',
            title: 'Custom WordPress Plugins',
            description:
              'Privé plugins specifiek voor jouw behoeften. Van simpele functionaliteit tot complexe business logic en workflows.',
          },
          {
            icon: '🔗',
            title: 'CRM & ERP Integraties',
            description:
              'Koppel WordPress met jouw bestaande systemen voor realtime data-sync, lead management en klantcommunicatie.',
          },
          {
            icon: '👥',
            title: 'Member Portals & Subscriptions',
            description:
              'Protected content areas, membership levels, subscription management en custom user dashboards voor community platforms.',
          },
          {
            icon: '📝',
            title: 'Custom Post Types & Taxonomies',
            description:
              'Maatwerk content structuren zoals portfolios, directories, job boards of event systems met geavanceerde filtering.',
          },
          {
            icon: '🛒',
            title: 'WooCommerce Maatwerk',
            description:
              'Custom checkout flows, product configurators, B2B functionaliteiten en geavanceerde shipping/payment integraties.',
          },
          {
            icon: '🎯',
            title: 'Custom Gutenberg Blocks',
            description:
              'Eigen content blocks voor de WordPress editor. Makkelijk content beheren zonder code kennis, maar met volledige flexibiliteit.',
          },
        ],
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
            href: '/wordpress/thema',
            title: 'WordPress Thema',
            description: "Snel en kostenefficiënt starten met thema's",
          },
          {
            href: '/wordpress/woocommerce',
            title: 'WooCommerce',
            description: 'Krachtige e-commerce met WordPress',
          },
          {
            href: '/wordpress/migratie',
            title: 'WordPress Migratie',
            description: 'Verhuis naadloos naar WordPress',
          },
        ],
      },
    },
  };

export function getWordPressMaatwerkCopy() {
  return copy;
}
