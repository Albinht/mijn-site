const copy = {
    metadata: {
      title: 'WordPress Marketing | SEO, SEA & Content Marketing | Niblah',
      description:
        'WordPress marketing door experts. SEO, Google Ads, content marketing en social media voor jouw website. Data-driven aanpak met focus op ROI.',
      keywords: 'wordpress marketing, wordpress seo, wordpress google ads, content marketing, wordpress social media',
      openGraph: {
        title: 'WordPress Marketing | Groei je website | Niblah',
        description: 'Complete marketing oplossingen voor WordPress websites. Van SEO tot content marketing.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS MARKETING',
      title: 'Marketing die jouw WordPress website laat groeien',
      description:
        'Een mooie WordPress website is slechts het begin. Marketing zorgt voor groei, bezoekers en leads. Niblah combineert 30+ jaar web ervaring met data-driven marketing. Van SEO en Google Ads tot content marketing en social media - wij zorgen dat jouw website niet alleen bezoekers trekt, maar ze ook omzet in loyale klanten.',
      ctaText: 'Bespreek je marketing strategie',
      ctaLink: '/contact',
      note: '* Data-driven aanpak met focus op ROI en meetbare resultaten',
      image: '/wordpress-marketing.png',
      imageAlt: 'WordPress marketing dashboard met statistieken',
    },
    sections: {
      intro: {
        title: { prefix: 'Marketing voor jouw', highlight: 'WordPress website', suffix: '' },
        paragraphs: [
          'Het hebben van een succesvolle WordPress website gaat verder dan alleen goed design en techniek. Je marketingstrategie bepaalt of je online groeit of stagneert.',
          'Van SEO voor organische vindbaarheid tot Google Ads campagnes die direct leads opleveren. Van content marketing die autoriteit opbouwt tot social media die je merk zichtbaar maakt.',
          'Niblah zorgt ervoor dat jouw website niet alleen bezoekers trekt, maar deze ook omzet in leads, klanten en terugkerende bezoekers. Goede marketing is de key tot online groei.',
        ],
        listHeading: 'Marketing kanalen die we inzetten:',
        listItems: [
          'SEO optimalisatie voor organische groei',
          'Google Ads (SEA) voor directe leads en conversies',
          'Content marketing en blogging strategie',
          'Social media marketing (LinkedIn, Facebook, Instagram)',
          'Email marketing en nieuwsbrief campagnes',
          'Conversion Rate Optimization (CRO)',
        ],
      },
      activities: {
        title: { prefix: 'Drie activiteiten die voor veel', highlight: 'WordPress websites', suffix: 'werken' },
        quote:
          '"Iedere website heeft unieke doelen waar je met verschillende marketing op kunt inspelen. We bespreken graag de kansen voor jouw website!"',
        cards: [
          {
            icon: '🔍',
            title: 'SEO Optimalisatie',
            description:
              'Hogere rankings in Google voor relevante zoektermen. Organisch verkeer van mensen die actief zoeken naar jouw diensten. Duurzame groei.',
          },
          {
            icon: '📝',
            title: 'Content Marketing',
            description:
              'Waardevolle content die autoriteit opbouwt en bezoekers bindt. Van blogs tot whitepapers - content die informeert, inspireert en converteert.',
          },
          {
            icon: '🎯',
            title: 'Google Ads (SEA)',
            description:
              'Direct zichtbaar bovenaan Google voor belangrijke zoektermen. Snelle resultaten, meetbare ROI en volledige controle over je budget.',
          },
        ],
      },
      channels: {
        title: { prefix: 'Marketingkanalen voor jouw', highlight: 'WordPress website', suffix: '' },
        subtitle:
          'Om het maximale uit je WordPress website te halen, combineren we verschillende kanalen voor optimale resultaten',
        cards: [
          {
            icon: '🔍',
            title: 'SEO Optimalisatie',
            description:
              'On-page en technical SEO voor hogere rankings. Keyword research, content optimalisatie en linkbuilding voor duurzame organische groei.',
          },
          {
            icon: '🎯',
            title: 'SEA (Google Ads)',
            description:
              'Search Ads, Display campagnes en remarketing voor directe zichtbaarheid en leads. Meet ROI en optimaliseer continu.',
          },
          {
            icon: '📝',
            title: 'Content Marketing',
            description:
              "Strategische content creatie met WordPress. Blogs, landingspagina's en resources die autoriteit opbouwen en traffic genereren.",
          },
          {
            icon: '📱',
            title: 'Social Media Marketing',
            description:
              'LinkedIn, Facebook en Instagram marketing. Van organische posts tot paid advertising voor merkbekendheid en engagement.',
          },
          {
            icon: '📧',
            title: 'Email Marketing',
            description:
              'Nieuwsbrieven, drip campagnes en automatiseringen. Bouw een mailinglist en nurture leads naar klanten.',
          },
          {
            icon: '📈',
            title: 'CRO & Analytics',
            description:
              'Conversion Rate Optimization, A/B testing en data-analyse voor continue verbetering en groei van je website.',
          },
        ],
      },
      partner: {
        title: { prefix: 'Kies voor Niblah als jouw', highlight: 'WordPress marketing partner', suffix: '' },
        paragraphs: [
          'Bij Niblah geloven we in een persoonlijke en strategische aanpak. Met 30+ jaar web ervaring ontwikkelen we data-driven marketingstrategieën die écht werken voor jouw WordPress website.',
          'Focus op data, creativiteit en resultaat. We zorgen dat je online zichtbaar bent én meer leads en klanten genereert. Van strategie tot uitvoering en optimalisatie.',
        ],
        buttonText: 'Bespreek je marketing strategie',
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
          { href: '/wordpress/woocommerce', title: 'WooCommerce Webshop', description: 'Krachtige e-commerce met WordPress' },
        ],
      },
    },
  };

export function getWordPressMarketingCopy() {
  return copy;
}
