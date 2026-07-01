const copy = {
    metadata: {
      title: 'Shopify Thema | Snel & Kostenefficiënt Online | Niblah',
      description:
        'Start snel met een professioneel Shopify thema. Niblah richt je webshop compleet in met bewezen themes. Kosteneffectief en binnen 2-4 weken live.',
      keywords: 'shopify thema, shopify theme, shopify webshop snel, kosteneffectieve webshop, shopify template',
      openGraph: {
        title: 'Shopify Thema | Snel & Kostenefficiënt | Niblah',
        description: 'Start snel met een professioneel Shopify thema. Kosteneffectief en binnen 2-4 weken live.',
        images: ['/niblah-headshot.webp'],
      },
    },
    hero: {
      badge: 'SHOPIFY THEMA WEBSHOP',
      title: 'Lanceer nu jouw Shopify webshop met een professioneel thema',
      description:
        'Een Shopify webshop met een bewezen thema biedt de snelste en meest kosteneffectieve start. Shopify themes zijn ontworpen volgens e-commerce best practices en volledig geoptimaliseerd voor conversie. Binnen 2-4 weken heb je een professionele webshop die direct klaar is om te verkopen.',
      ctaText: 'Start met een thema webshop',
      ctaLink: '/contact',
      note: '* Snelle implementatie binnen 2-4 weken, zonder compromis op kwaliteit',
      image: '/shopify-theme.png',
      imageAlt: 'Shopify thema webshop voorbeelden',
    },
    sections: {
      intro: {
        title: { prefix: 'Waarom kiezen voor een', highlight: 'Shopify thema', suffix: '?' },
        paragraphs: [
          'Een Shopify webshop met een professioneel thema is de ideale keuze als je snel en kostenefficiënt online wilt starten. Shopify themes zijn gebouwd door ervaren designers en developers, compleet met alle functionaliteiten die je nodig hebt.',
          'Met een thema-gebaseerde webshop profiteer je van bewezen ontwerpen die al bij duizenden succesvolle webshops hun waarde hebben bewezen. Mobiel-geoptimaliseerd, SEO-vriendelijk en klaar voor groei.',
          'Niblah richt je thema webshop volledig in, zodat jij je kunt focussen op verkopen in plaats van technische details.',
        ],
        listHeading: 'Wat Niblah voor je regelt:',
        listItems: [
          'Thema selectie en aankoop op basis van jouw wensen',
          'Complete personalisatie naar jouw huisstijl',
          'Product upload en categorisatie',
          'Betaal- en verzendmethoden instellen',
          'SEO optimalisatie en Google Analytics setup',
          'Training zodat je zelf verder kunt',
        ],
      },
      benefits: {
        title: { prefix: 'De voordelen', highlight: 'op een rijtje', suffix: '' },
        quote: 'Het is niet voor niets dat veel ondernemers kiezen voor een Shopify thema',
        cards: [
          {
            icon: '⚡',
            title: 'Snelle implementatie',
            description:
              'Een Shopify thema webshop is binnen 2-4 weken live. Perfect voor ondernemers die snel online willen starten zonder maandenlange ontwikkeltijd.',
          },
          {
            icon: '💰',
            title: 'Kosteneffectief',
            description:
              'Profiteer van bewezen designs zonder de kosten van volledig maatwerk. Een betaalbare oplossing met alle essentiële functies om te verkopen.',
          },
          {
            icon: '🎨',
            title: 'Eenvoudig aanpassen',
            description:
              'Shopify themes bieden veel flexibiliteit. Pas kleuren, lettertypen, layouts en content eenvoudig aan naar jouw huisstijl en voorkeuren.',
          },
        ],
      },
      features: {
        title: { prefix: 'Wat je krijgt met een', highlight: 'Shopify thema', suffix: '' },
        items: [
          {
            icon: '📱',
            title: 'Mobiel geoptimaliseerd',
            description:
              'Alle Shopify themes zijn responsive en werken perfect op smartphones en tablets. Meer dan 70% van je bezoekers komt via mobiel.',
          },
          {
            icon: '🔍',
            title: 'SEO vriendelijk',
            description:
              'Gebouwd volgens SEO best practices met schone code, snelle laadtijden en goede structuur voor hogere rankings in Google.',
          },
          {
            icon: '🎯',
            title: 'Conversie geoptimaliseerd',
            description:
              "Themes zijn ontworpen om te converteren met duidelijke CTA's, vertrouwenssignalen en gestroomlijnde checkout processen.",
          },
          {
            icon: '🔧',
            title: 'Updates & support',
            description:
              'Regelmatige theme updates met nieuwe features, bugfixes en optimalisaties. Altijd up-to-date en veilig.',
          },
          {
            icon: '🚀',
            title: 'Schaalbaar & uitbreidbaar',
            description:
              'Start met een thema en breid later uit met custom functies. Perfect om klein te beginnen en mee te groeien.',
          },
          {
            icon: '✅',
            title: 'Bewezen & getest',
            description:
              'Populaire themes worden gebruikt door duizenden webshops wereldwijd. Alle kinderziektes zijn eruit, het werkt gewoon.',
          },
        ],
      },
      cta: {
        title: { prefix: 'Wij richten jouw Shopify thema shop', highlight: 'volledig in', suffix: '' },
        paragraphs: [
          'Bij Niblah nemen we de volledige inrichting van jouw Shopify thema webshop uit handen. Van thema selectie en personalisatie tot product upload en SEO optimalisatie - wij zorgen ervoor dat je webshop 100% klaar is om live te gaan.',
          'Met 30+ jaar e-commerce ervaring zorgen we voor een soepele start en optimale prestaties vanaf dag één. Jij focust op verkopen, wij regelen de rest.',
        ],
        buttonText: 'Bespreek jouw thema webshop',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Meer Shopify', highlight: 'services', suffix: '' },
        subtitle: 'Ontdek onze andere Shopify diensten voor complete e-commerce oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          { href: '/shopify/webshop-laten-maken', title: 'Shopify Webshop', description: 'Laat je volledige Shopify webshop bouwen' },
          { href: '/shopify/maatwerk', title: 'Shopify Maatwerk', description: 'Custom functionaliteiten en apps op maat' },
          { href: '/shopify/marketing', title: 'Shopify Marketing', description: 'Boost je conversies met geoptimaliseerde marketing' },
          { href: '/shopify/migratie', title: 'Shopify Migreren', description: 'Verhuis naadloos naar Shopify vanuit andere platforms' },
        ],
      },
    },
  };

export function getShopifyThemaCopy() {
  return copy;
}
