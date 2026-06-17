const copy = {
    title: {
      prefix: 'De SEO-werkzaamheden die je',
      highlight: 'uit handen kunt geven',
      suffix: '',
    },
    intro:
      'Ben je graag zeker van goede resultaten en overweeg je jouw SEO uit te besteden? Je bepaalt zelf welke werkzaamheden je uit handen geeft.',
    linkLabel: 'Meer info',
    services: [
      {
        title: 'On-page optimalisatie (Gratis)',
        description: 'Content, meta tags en technische structuur perfect geoptimaliseerd',
        link: '/blog/on-page-seo-complete-gids',
      },
      {
        title: 'Copywriting',
        description: 'SEO-geoptimaliseerde teksten die converteren en ranken',
        link: '/services/seo/copywriting',
      },
      {
        title: 'Contentmarketing',
        description: 'Strategische content die autoriteit bouwt en traffic genereert',
        link: '/services/seo/contentmarketing',
      },
      {
        title: 'Linkbuilding',
        description: 'Hoogwaardige backlinks van relevante en gezaghebbende websites',
        link: '/services/seo/linkbuilding',
      },
      {
        title: 'Conversieoptimalisatie',
        description: 'Meer bezoekers omzetten naar betalende klanten',
        link: '/services/cro',
      },
      {
        title: 'Technische SEO',
        description: 'Snelheid, crawlbaarheid en Core Web Vitals geoptimaliseerd',
        link: '/services/seo/technical-seo',
      },
    ],
  };

export function getSEOServicesSectionCopy() {
  return copy;
}
