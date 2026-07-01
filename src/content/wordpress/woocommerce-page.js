const copy = {
    metadata: {
      title: 'WooCommerce Webshop | E-commerce met WordPress | Niblah',
      description:
        'Laat je WooCommerce webshop bouwen of optimaliseren door Niblah. Custom checkout, performance, SEO en integraties—door WordPress experts.',
      keywords: 'woocommerce webshop, woocommerce development, wordpress webshop, woocommerce bureau, woocommerce expert',
      openGraph: {
        title: 'WooCommerce Webshop | Niblah',
        description: 'WooCommerce development voor schaalbare WordPress e-commerce.',
        images: ['/niblah-headshot.webp'],
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
  };

export function getWordPressWooCommerceCopy() {
  return copy;
}
