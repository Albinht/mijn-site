const copy = {
    metadata: {
      title: 'Shopify Marketing | SEA, Social Ads & Email | Niblah',
      description:
        'Shopify marketing door experts. Google Ads, Social Advertising, Email marketing en SEO voor jouw webshop. 30+ jaar ervaring voor maximale groei.',
      keywords: 'shopify marketing, shopify google ads, shopify social ads, shopify email marketing, shopify seo',
      openGraph: {
        title: 'Shopify Marketing | Groei je webshop | Niblah',
        description: 'Complete marketing oplossingen voor Shopify webshops. Van Google Ads tot email marketing.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'SHOPIFY MARKETING',
      title: 'Marketing die jouw Shopify webshop laat groeien',
      description:
        'Een mooie Shopify webshop is slechts het begin. Marketing zorgt voor groei, bezoekers en omzet. Niblah combineert 30+ jaar e-commerce ervaring met data-driven marketing. Van Google Ads en Social Advertising tot SEO en Email Marketing - wij zorgen dat jouw webshop niet alleen bezoekers trekt, maar ze ook omzet in loyale klanten.',
      ctaText: 'Bespreek je marketing strategie',
      ctaLink: '/contact',
      note: '* Data-driven aanpak met focus op ROI en meetbare resultaten',
      image: '/shopify-marketing.png',
      imageAlt: 'Shopify marketing dashboard met statistieken',
    },
    sections: {
      intro: {
        title: { prefix: 'Marketing voor jouw', highlight: 'Shopify webshop', suffix: '' },
        paragraphs: [
          'Het runnen van een succesvolle Shopify webshop gaat verder dan alleen goed design en techniek. Je marketingstrategie bepaalt of je webshop groeit of stagneert.',
          'Van gerichte Google Ads campagnes die direct conversie opleveren, tot Social Media advertising die je merk zichtbaar maakt. Van SEO voor organische groei tot email marketing die klanten terugbrengt.',
          'Niblah zorgt ervoor dat jouw webshop niet alleen bezoekers trekt, maar deze ook omzet in betalende en terugkerende klanten. Goede marketing is de key tot groei.',
        ],
        listHeading: 'Marketing kanalen die we inzetten:',
        listItems: [
          'Google Ads (SEA) voor directe conversies',
          'Social Advertising op Facebook, Instagram & TikTok',
          'Email marketing met Klaviyo automatisering',
          'SEO optimalisatie voor organische groei',
          'Marketplace integraties (Bol.com, Amazon)',
          'Conversion Rate Optimization (CRO)',
        ],
      },
	      activities: {
	        title: { prefix: 'Drie activiteiten die voor veel', highlight: 'Shopify shops', suffix: 'werken' },
	        quote:
	          '“Iedere webshop heeft unieke USP’s waar je met verschillende marketing op kunt inspelen. We bespreken graag de kansen voor jouw webshop!”',
	        cards: [
	          {
            icon: '🎯',
            title: 'Google Ads (SEA)',
            description:
              'Direct zichtbaar bovenaan Google voor belangrijke zoektermen. Snelle resultaten, meetbare ROI en volledige controle over je budget.',
          },
          {
            icon: '📱',
            title: 'Social Advertising',
            description:
              'Facebook, Instagram en TikTok ads voor meer bereik en verkopen. Van prospecting tot retargeting met creatieve tests.',
          },
          {
            icon: '📧',
            title: 'Email Marketing',
            description:
              'Klaviyo flows en segmentatie voor meer omzet en hogere LTV. Automatiseringen zoals abandoned cart en winback.',
          },
        ],
      },
      channels: {
        title: { prefix: 'Marketingkanalen voor jouw', highlight: 'Shopify webshop', suffix: '' },
        subtitle: 'Om het maximale uit je Shopify shop te halen, combineren we kanalen voor optimale resultaten.',
        cards: [
          {
            icon: '🎯',
            title: 'SEA (Google Ads)',
            description:
              'Search, Shopping, Performance Max en remarketing. Meet ROAS en optimaliseer continu.',
          },
          {
            icon: '📱',
            title: 'Social Advertising',
            description:
              'Meta, TikTok en LinkedIn ads. Van awareness tot conversie met creatieve iteraties.',
          },
          {
            icon: '📧',
            title: 'Email & Automatisering',
            description:
              'Klaviyo flows en segmentatie om meer te converteren en repeat purchases te verhogen.',
          },
          {
            icon: '🔍',
            title: 'SEO',
            description:
              'Technical SEO, collectie optimalisatie en content strategie voor duurzame organische traffic.',
          },
          {
            icon: '🛒',
            title: 'Marketplaces',
            description:
              'Breid uit naar marketplaces zoals Bol.com en Amazon met slimme integraties en feeds.',
          },
          {
            icon: '📈',
            title: 'CRO & Analytics',
            description:
              'Conversion Rate Optimization, A/B testing en data-analyse voor continue verbetering en groei.',
          },
        ],
      },
      partner: {
        title: { prefix: 'Kies voor Niblah als jouw', highlight: 'Shopify marketing partner', suffix: '' },
        paragraphs: [
          'Bij Niblah geloven we in een persoonlijke en strategische aanpak. Met 30+ jaar e-commerce ervaring ontwikkelen we data-driven marketing die écht werkt.',
          'Van strategie tot uitvoering en optimalisatie: zodat jouw webshop zichtbaar wordt én meer omzet genereert.',
        ],
        buttonText: 'Bespreek je marketing strategie',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Meer Shopify', highlight: 'Services', suffix: '' },
        subtitle: 'Ontdek onze andere Shopify diensten voor complete webshop oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          { href: '/shopify/webshop-laten-maken', title: 'Shopify Webshop', description: 'Laat je volledige Shopify webshop bouwen' },
          { href: '/shopify/maatwerk', title: 'Shopify Maatwerk', description: 'Custom themes en functionaliteiten op maat' },
          { href: '/shopify/thema', title: 'Shopify Thema', description: 'Snel starten met een bewezen theme setup' },
          { href: '/shopify/migratie', title: 'Shopify Migratie', description: 'Verhuis naar Shopify zonder downtime' },
        ],
      },
    },
  };

export function getShopifyMarketingCopy() {
  return copy;
}
