const copy = {
    shopify: {
      iconAlt: 'Shopify',
      title: { prefix: 'Shopify', highlight: 'Development' },
      intro: 'Van webshop tot maatwerk apps - alles voor jouw Shopify succes',
      services: [
        { title: 'Shopify webshop laten maken', href: '/shopify/webshop-laten-maken' },
        { title: 'Shopify maatwerk', href: '/shopify/maatwerk' },
        { title: 'Shopify thema', href: '/shopify/thema' },
        { title: 'Shopify marketing', href: '/shopify/marketing' },
        { title: 'Shopify migreren', href: '/shopify/migratie' },
        { title: 'Shopify koppelingen', href: '/services/shopify-koppelingen' },
        { title: 'Shopify partner', href: '/services/shopify-partner' },
        { title: 'Shopify developer', href: '/services/shopify-developer' },
      ],
    },
    wordpress: {
      iconAlt: 'WordPress',
      title: { prefix: 'WordPress', highlight: 'Development' },
      intro: 'Van website tot custom plugins - complete WordPress oplossingen',
      services: [
        { title: 'WordPress website laten maken', href: '/website-laten-maken' },
        { title: 'WordPress maatwerk', href: '/wordpress/maatwerk' },
        { title: 'WordPress thema', href: '/wordpress/thema' },
        { title: 'WordPress marketing', href: '/wordpress/marketing' },
        { title: 'WordPress migreren', href: '/wordpress/migratie' },
        { title: 'WordPress koppelingen', href: '/wordpress/koppelingen' },
        { title: 'WordPress partner', href: '/wordpress/partner' },
        { title: 'WordPress developer', href: '/wordpress/developer' },
      ],
    },
  };

export function getPlatformServicesSectionCopy() {
  return copy;
}
