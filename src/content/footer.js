const copy = {
    about:
      'Niblah is een full service marketing bureau voor ondernemers die betere vindbaarheid, sterkere campagnes en meer aanvragen willen zonder lange lijnen.',
    cta: {
      eyebrow: 'Gratis strategiesessie',
      heading: 'Klaar om je marketing',
      headingAccent: 'scherper te zetten?',
      description:
        'Plan een gratis consult en ontdek welke combinatie van SEO, Google Ads, websites en automation voor jouw bedrijf de meeste groei kan opleveren.',
      primaryLabel: 'Plan gratis consult',
      secondaryLabel: 'Ontdek onze diensten',
    },
    videoTestimonials: {
      heading: 'Geliefd door ondernemers die vooruit willen',
      playCta: 'Bekijk review',
      lazyNote: 'Twee echte video reviews van klanten die onze persoonlijke aanpak en manier van werken hebben ervaren.',
      badgeNew: 'Klantreviews',
    },
    orbitItems: [
      {
        label: 'SEO',
        ariaLabel: 'Bekijk SEO diensten',
        href: '/services/seo',
        icon: 'seo',
      },
      {
        label: 'Google Ads',
        ariaLabel: 'Bekijk Google Ads diensten',
        href: '/services/sea',
        icon: 'ads',
      },
      {
        label: 'Marketing groei',
        ariaLabel: 'Bekijk alle marketingdiensten',
        href: '/services',
        icon: 'growth',
      },
      {
        label: 'Automation',
        ariaLabel: 'Bekijk marketing automation diensten',
        href: '/services/email-marketing',
        icon: 'email',
      },
      {
        label: 'Strategie',
        ariaLabel: 'Bekijk de marketingstrategie diensten',
        href: '/services',
        icon: 'strategy',
      },
      {
        label: 'Consult',
        ariaLabel: 'Plan een gratis consult',
        href: '/contact',
        icon: 'consult',
      },
      {
        label: 'YouTube',
        ariaLabel: 'Bekijk Niblah op YouTube',
        href: 'https://www.youtube.com/channel/UCvy37Ft-33KdCaYVCDHA35Q/',
        icon: 'youtube',
      },
      {
        label: 'WhatsApp',
        ariaLabel: 'Neem contact op via WhatsApp',
        href: 'https://wa.link/zhg1bl',
        icon: 'whatsapp',
      },
      {
        label: 'X',
        ariaLabel: 'Volg Niblah op X',
        href: 'https://x.com/Niblahistaken',
        icon: 'x',
      },
    ],
    socialLinks: [
      {
        label: 'YouTube',
        ariaLabel: 'Bekijk Niblah op YouTube',
        href: 'https://www.youtube.com/channel/UCvy37Ft-33KdCaYVCDHA35Q/',
        icon: 'youtube',
      },
      {
        label: 'X',
        ariaLabel: 'Volg Niblah op X',
        href: 'https://x.com/Niblahistaken',
        icon: 'x',
      },
      {
        label: 'WhatsApp',
        ariaLabel: 'Neem contact op via WhatsApp',
        href: 'https://wa.link/zhg1bl',
        icon: 'whatsapp',
      },
    ],
    columns: [
      {
        title: 'Diensten',
        links: [
          { label: 'SEO', href: '/services/seo' },
          { label: 'Google Ads', href: '/services/sea' },
          { label: 'Websites', href: '/services/web-development' },
          { label: 'Marketing automation', href: '/services/email-marketing' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'AI Marketing Audit', href: '/tools/ai-marketing-audit' },
          { label: 'SERP Simulator', href: '/tools/serp-simulator' },
          { label: 'ROAS Calculator', href: '/tools/break-even-roas-calculator' },
          { label: 'Alle tools', href: '/tools' },
        ],
      },
      {
        title: 'Locaties',
        links: [
          { label: 'Marketing Nederland', href: '/marketing' },
          { label: 'Marketing Barneveld', href: '/marketing/barneveld' },
          { label: 'Marketing Amsterdam', href: '/marketing/amsterdam' },
          { label: 'Marketing Utrecht', href: '/marketing/utrecht' },
        ],
      },
      {
        title: 'Bedrijf',
        links: [
          { label: 'Contact', href: '/contact' },
          { label: 'Resources', href: '/resources' },
          { label: 'YouTube', href: '/youtube' },
          { label: 'Blog', href: '/blog' },
        ],
      },
    ],
    contactPage: 'Contactpagina',
    privacy: 'Privacy',
    terms: 'Voorwaarden',
    rights: 'Alle rechten voorbehouden.',
  };

export function getFooterCopy() {
  return copy;
}
