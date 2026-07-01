const copy = {
    metadata: {
      title: 'Shopify Migratie | Verhuis je Webshop Naadloos | Niblah',
      description:
        'Migreer je webshop naar Shopify zonder stress. Niblah zorgt voor veilige data-overzet, SEO behoud en minimale downtime. 30+ jaar migratie-ervaring.',
      keywords: 'shopify migratie, webshop verhuizen, migreren naar shopify, woocommerce naar shopify, magento naar shopify',
      openGraph: {
        title: 'Shopify Migratie | Naadloos Verhuizen | Niblah',
        description: 'Professionele Shopify migratie met SEO behoud en minimale downtime.',
        images: ['/niblah-headshot.webp'],
      },
    },
    hero: {
      badge: 'SHOPIFY MIGRATIE',
      title: 'Verhuis je webshop naadloos naar Shopify',
      description:
        'Overstappen naar Shopify maar zorgen over downtime, dataverlies of SEO impact? Niblah heeft 30+ jaar ervaring met webshop migraties. We zorgen voor een soepele overstap van WooCommerce, Magento, Lightspeed of elk ander platform naar Shopify. Zonder stress, met behoud van alle data en SEO-waarde.',
      ctaText: 'Bespreek je migratie',
      ctaLink: '/contact',
      note: '* Minimale downtime en volledige SEO behoud gegarandeerd',
      image: '/shopify-migration.png',
      imageAlt: 'Shopify migratie proces visualisatie',
    },
    sections: {
      intro: {
        title: { prefix: 'Waarom overstappen naar', highlight: 'Shopify', suffix: '?' },
        paragraphs: [
          'Shopify is wereldwijd het meest gebruikte e-commerce platform voor een reden. Het combineert gebruiksvriendelijkheid met krachtige functionaliteiten en schaalbaarheid die andere platforms niet kunnen evenaren.',
          'Van trage WooCommerce installaties naar razendsnelle Shopify stores. Van complexe Magento setups naar intuïtief Shopify beheer. Van verouderde custom platforms naar modern e-commerce met alle tools die je nodig hebt.',
          'Niblah zorgt dat de overgang soepel verloopt, zonder dataverlies, met minimale downtime en volledig behoud van je SEO-rankings.',
        ],
        listHeading: 'Wat Niblah voor je migreert:',
        listItems: [
          'Alle producten met varianten, foto’s en specificaties',
          'Klantgegevens en orderhistorie',
          "Content pagina's en blogs",
          'SEO data en URL redirects',
          'Categorieën en product structuur',
          'Betalings- en verzendmethoden',
        ],
      },
      benefits: {
        title: { prefix: 'Drie redenen om te', highlight: 'verhuizen', suffix: '' },
        quote: '"Shopify is wereldleider in e-commerce en biedt veel voordelen die andere platforms niet hebben"',
        cards: [
          {
            icon: '⚡',
            title: 'Gebruiksvriendelijkheid',
            description:
              "Geen technische kennis nodig om producten toe te voegen, bestellingen te beheren of je webshop aan te passen. Iedereen kan ermee werken.",
          },
          {
            icon: '📈',
            title: 'Schaalbaarheid',
            description:
              'Shopify groeit mee met je bedrijf. Van 10 tot 100.000 producten, van 10 tot 10.000 bezoekers per dag - Shopify blijft stabiel presteren.',
          },
          {
            icon: '🔌',
            title: 'Uitgebreide integraties',
            description:
              'Duizenden apps en integraties beschikbaar. Van marketing tools tot boekhouding en verzending - alles eenvoudig te koppelen.',
          },
        ],
      },
      process: {
        title: { prefix: 'Niblah migreert jouw webshop', highlight: 'professioneel', suffix: '' },
        subtitle: 'Het migreren naar Shopify is een belangrijke stap. Niblah maakt dit proces soepel en efficiënt',
        cards: [
          {
            icon: '🔒',
            title: 'Veilige data overzet',
            description:
              'Alle producten, klantgegevens, bestellingen en content worden veilig gemigreerd. Niets gaat verloren, alles komt over zoals het hoort.',
          },
          {
            icon: '⏱️',
            title: 'Minimale downtime',
            description:
              'We plannen de migratie strategisch zodat je webshop zo min mogelijk offline is. Vaak zelfs in een nacht gedaan.',
          },
          {
            icon: '🔍',
            title: 'SEO behoud',
            description:
              'URL redirects, meta data overzet en technische SEO setup. Je rankings blijven behouden, geen verlies van organisch verkeer.',
          },
          {
            icon: '✅',
            title: 'Testing & QA',
            description:
              'Uitgebreid testen voor live gang. Alle functionaliteiten, checkout, betalingen en integraties worden grondig gecontroleerd.',
          },
          {
            icon: '🎓',
            title: 'Training & support',
            description:
              'Na migratie krijg je een training zodat je met Shopify kunt werken. Plus doorlopende support voor vragen en optimalisaties.',
          },
          {
            icon: '🚀',
            title: 'Performance verbetering',
            description:
              'Vaak is je nieuwe Shopify shop sneller dan je oude webshop. Betere conversie en hogere rankings door optimale performance.',
          },
        ],
      },
      cta: {
        title: { prefix: 'Laat ons jouw webshop', highlight: 'migreren', suffix: 'naar Shopify' },
        paragraphs: [
          'Bij Niblah hebben we 30+ jaar ervaring met webshop migraties. Van analyse en planning tot uitvoering en nazorg - wij zorgen voor een soepele overstap naar Shopify.',
          'Jij focust op je business, wij regelen de techniek. Minimale downtime, volledige data-overzet en behoud van SEO-waarde gegarandeerd.',
        ],
        buttonText: 'Bespreek je migratie',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Meer Shopify', highlight: 'services', suffix: '' },
        subtitle: 'Ontdek onze andere Shopify diensten voor complete e-commerce oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          { href: '/shopify/webshop-laten-maken', title: 'Shopify Webshop', description: 'Laat je volledige Shopify webshop bouwen' },
          { href: '/shopify/maatwerk', title: 'Shopify Maatwerk', description: 'Custom functionaliteiten en apps op maat' },
          { href: '/shopify/thema', title: 'Shopify Thema', description: "Snel en kostenefficiënt starten met thema's" },
          { href: '/shopify/marketing', title: 'Shopify Marketing', description: 'Boost je conversies met geoptimaliseerde marketing' },
        ],
      },
    },
  };

export function getShopifyMigratieCopy() {
  return copy;
}
