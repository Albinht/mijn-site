const copy = {
    metadata: {
      title: 'Shopify Maatwerk | Custom Development & Apps op Maat | Niblah',
      description:
        'Shopify maatwerk door Niblah: unieke functionaliteiten, custom apps en design volledig op maat. 30+ jaar development ervaring voor jouw perfecte webshop.',
      keywords:
        'shopify maatwerk, shopify custom development, shopify app ontwikkeling, custom shopify theme, maatwerk webshop',
      openGraph: {
        title: 'Shopify Maatwerk | Custom Development | Niblah',
        description: 'Custom Shopify development voor unieke functionaliteiten en design op maat.',
        images: ['/niblah-headshot.webp'],
      },
    },
    hero: {
      badge: 'SHOPIFY MAATWERK DEVELOPMENT',
      title: 'Creëer een Shopify shop met functionaliteiten volledig op maat',
      description:
        "Standaard Shopify templates bieden veel, maar met maatwerk ga je verder. Niblah bouwt custom functionaliteiten, unieke designs en geavanceerde integraties die perfect aansluiten op jouw merkidentiteit en bedrijfsdoelen. Van productconfigurators tot complexe API-koppelingen - wij maken het mogelijk.",
      ctaText: 'Bespreek je maatwerk project',
      ctaLink: '/contact',
      note: '* 30+ jaar development expertise voor complete Shopify oplossingen',
      image: '/shopify-maatwerk.png',
      imageAlt: 'Shopify maatwerk development dashboard',
    },
    sections: {
      why: {
        title: {
          prefix: 'Waarom kiezen voor',
          highlight: 'maatwerk',
          suffix: '?',
        },
        paragraphs: [
          'Een standaard Shopify webshop biedt veel mogelijkheden, maar met maatwerk haal je pas het maximale uit je online winkel. Geen beperkingen meer door standaard templates of functies die net niet passen.',
          "Met Shopify maatwerk van Niblah creëer je een webshop die volledig aansluit op jouw unieke merkidentiteit, specifieke workflow en de wensen van je doelgroep. Van custom productpagina's tot geavanceerde ERP-integraties.",
          'Geen beperkingen, maar complete vrijheid om te groeien, optimaliseren en je te onderscheiden van de concurrentie.',
        ],
        buildHeading: 'Wat Niblah voor je bouwt:',
        buildItems: [
          'Custom Shopify themes volledig op maat',
          'Unieke productconfigurators en builders',
          'Geavanceerde API-integraties met externe systemen',
          'Gepersonaliseerde checkout flows',
          'Custom Shopify apps voor specifieke functionaliteiten',
          'Geavanceerde zoek- en filteropties',
        ],
      },
      benefits: {
        title: {
          prefix: 'Drie redenen waarom we',
          highlight: 'maatwerk',
          suffix: 'aanbevelen',
        },
        quote: '"Steeds meer ondernemers kiezen voor maatwerk Shopify - en dat is niet voor niets!"',
        cards: [
          {
            icon: '🎨',
            title: 'Uniek Design',
            description:
              'Geen standaard templates, maar een webshop die perfect aansluit bij de look & feel van jouw merk. Complete controle over elk design element.',
          },
          {
            icon: '⚙️',
            title: 'Custom Functionaliteiten',
            description:
              'Van productconfigurators tot speciale betalingsopties. Shopify volledig aangepast aan jouw specifieke bedrijfsprocessen en workflow.',
          },
          {
            icon: '📊',
            title: 'Optimale UX',
            description:
              'Stem de winkelervaring exact af op jouw klanten. Dit verhoogt gebruiksvriendelijkheid, conversie en klantloyaliteit significant.',
          },
        ],
      },
      features: {
        title: {
          prefix: 'Functionaliteiten die we',
          highlight: 'bouwen',
          suffix: '',
        },
        subtitle: 'Met Shopify maatwerk is bijna alles mogelijk. Enkele voorbeelden van wat we realiseren:',
        cards: [
          {
            icon: '🔧',
            title: 'Geavanceerde Productconfigurators',
            description:
              'Laat klanten producten samenstellen met live preview, dynamische prijsberekening en validatie van combinaties.',
          },
          {
            icon: '🔗',
            title: 'ERP & CRM Integraties',
            description:
              'Koppel Shopify met jouw bestaande systemen voor realtime voorraadsync, orderverwerking en klantdata.',
          },
          {
            icon: '🔍',
            title: 'Smart Search & Filters',
            description:
              'Gepersonaliseerde zoekfunctionaliteit met AI, geavanceerde filters en automatische suggesties voor betere product discovery.',
          },
          {
            icon: '💳',
            title: 'Custom Checkout Flows',
            description:
              'Aangepaste checkout met specifieke velden, validaties, multiple shipping options en custom betalingsmethoden.',
          },
          {
            icon: '👥',
            title: 'B2B Portals & Wholesale',
            description:
              'Speciale B2B functionaliteiten zoals volume pricing, approval workflows en dedicated customer accounts.',
          },
          {
            icon: '📱',
            title: 'Custom Shopify Apps',
            description:
              'Privé Shopify apps specifiek voor jouw unieke bedrijfsprocessen en automations die niet in de app store bestaan.',
          },
        ],
      },
      related: {
        title: {
          prefix: 'Meer Shopify',
          highlight: 'Services',
          suffix: '',
        },
        subtitle: 'Ontdek onze andere Shopify diensten voor complete e-commerce oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          {
            href: '/shopify/webshop-laten-maken',
            title: 'Shopify Webshop',
            description: 'Laat je volledige Shopify webshop bouwen',
          },
          {
            href: '/shopify/thema',
            title: 'Shopify Thema',
            description: "Snel en kostenefficiënt starten met thema's",
          },
          {
            href: '/shopify/marketing',
            title: 'Shopify Marketing',
            description: 'Groei je webshop met ads, SEO en email',
          },
          {
            href: '/shopify/migratie',
            title: 'Shopify Migratie',
            description: 'Verhuis naadloos naar Shopify',
          },
        ],
      },
    },
  };

export function getShopifyMaatwerkCopy() {
  return copy;
}
