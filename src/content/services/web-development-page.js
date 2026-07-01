const copy = {
    metadata: {
      title: 'Website Development & Design | Professionele Websites op Maat | Niblah',
      description:
        'Laat Niblah je website bouwen die converteert. Van design tot development, SEO geoptimaliseerd en responsive. Start vandaag nog je online succes.',
      keywords: 'website ontwikkeling, web development, website bouwen, webdesign, responsive websites, SEO websites',
      openGraph: {
        title: 'Website Development & Design | Niblah',
        description: 'Professionele websites die converteren. Van design tot development, volledig op maat.',
        images: ['/niblah-headshot.webp'],
      },
    },
    hero: {
      badge: 'DEVELOPMENT & WEBSITES',
      title: 'Websites die conversies genereren en je bedrijf laten groeien',
      description:
        'Onze websites zijn niet alleen mooi ontworpen, maar ook gebouwd om resultaten te leveren. Met moderne technologie, SEO optimalisatie en focus op gebruikerservaring bouwen we websites waar je klanten op afkomen.',
      ctaText: 'Start je project',
      ctaLink: '/contact',
      note: '* Gemiddeld zien onze klanten 40% meer conversies na lancering',
      image: '/development-hero.png',
      imageAlt: 'Professional website development dashboard',
    },
  };

export function getWebDevelopmentPageCopy() {
  return copy;
}
