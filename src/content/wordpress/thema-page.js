const copy = {
    metadata: {
      title: 'WordPress Thema | Snel & Kostenefficiënt Online | Niblah',
      description:
        'Start snel met een professioneel WordPress thema. Niblah richt je website compleet in met bewezen themes. Kosteneffectief en binnen 1-3 weken live.',
      keywords: 'wordpress thema, wordpress theme, wordpress website snel, kosteneffectieve website, wordpress template',
      openGraph: {
        title: 'WordPress Thema | Snel & Kostenefficiënt | Niblah',
        description: 'Start snel met een professioneel WordPress thema. Kosteneffectief en binnen 1-3 weken live.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS THEMA WEBSITE',
      title: 'Lanceer nu jouw WordPress website met een professioneel thema',
      description:
        'Een WordPress website met een bewezen thema biedt de snelste en meest kosteneffectieve start. WordPress themes zijn ontworpen volgens web best practices en volledig geoptimaliseerd voor performance en SEO. Binnen 1-3 weken heb je een professionele website die direct online kan.',
      ctaText: 'Start met een thema website',
      ctaLink: '/contact',
      note: '* Snelle implementatie binnen 1-3 weken, zonder compromis op kwaliteit',
      image: '/wordpress-theme.png',
      imageAlt: 'WordPress thema website voorbeelden',
    },
    sections: {
      why: {
        title: { prefix: 'Waarom kiezen voor een', highlight: 'WordPress thema', suffix: '?' },
        paragraphs: [
          'Een WordPress website met een professioneel thema is de ideale keuze als je snel en kostenefficiënt online wilt. WordPress themes zijn gebouwd door ervaren designers en developers, compleet met alle functionaliteiten die je nodig hebt.',
          'Met een thema-gebaseerde website profiteer je van bewezen ontwerpen die al bij duizenden succesvolle websites hun waarde hebben bewezen. Mobiel-geoptimaliseerd, SEO-vriendelijk en klaar voor groei.',
          'Niblah richt je thema website volledig in, zodat jij je kunt focussen op je content en doelstellingen in plaats van technische details.',
        ],
        listHeading: 'Wat Niblah voor je regelt:',
        listItems: [
          'Thema selectie en aankoop op basis van jouw wensen',
          'Complete personalisatie naar jouw huisstijl',
          'Content migratie en pagina opbouw',
          'Plugin installatie en configuratie',
          'SEO basis en performance setup',
          'Training zodat je zelf verder kunt',
        ],
      },
      benefits: {
        title: { prefix: 'De voordelen', highlight: 'op een rijtje', suffix: '' },
        quote: 'Het is niet voor niets dat veel ondernemers kiezen voor een WordPress thema',
        cards: [
          {
            icon: '⚡',
            title: 'Snelle Implementatie',
            description:
              'Een WordPress thema website is binnen 1-3 weken live. Perfect voor ondernemers die snel online willen zonder maandenlange ontwikkeltijd.',
          },
          {
            icon: '💰',
            title: 'Kosteneffectief',
            description:
              'Profiteer van bewezen designs zonder de kosten van volledig maatwerk. Een betaalbare oplossing met alle essentiële functies.',
          },
          {
            icon: '🎨',
            title: 'Eenvoudig Aanpassen',
            description:
              'WordPress themes bieden enorme flexibiliteit. Pas kleuren, lettertypen, layouts en content eenvoudig aan via de WordPress customizer.',
          },
        ],
      },
      features: {
        title: { prefix: 'Wat je krijgt met een', highlight: 'WordPress thema', suffix: '' },
        cards: [
          {
            icon: '📱',
            title: 'Mobiel Geoptimaliseerd',
            description:
              'Alle moderne WordPress themes zijn responsive en werken perfect op smartphones en tablets. Mobile-first design standaard.',
          },
          {
            icon: '🔍',
            title: 'SEO Vriendelijk',
            description:
              'Gebouwd volgens SEO best practices met schone code, snelle laadtijden en semantic HTML voor hogere rankings in Google.',
          },
          {
            icon: '🎯',
            title: 'Page Builder Integratie',
            description:
              'Themes werken met populaire page builders zoals Elementor en Gutenberg. Drag & drop functionaliteit voor makkelijk aanpassen.',
          },
          {
            icon: '🔧',
            title: 'Updates & Support',
            description:
              'Regelmatige theme updates met nieuwe features, bugfixes en compatibility updates. Altijd up-to-date en veilig.',
          },
          {
            icon: '🚀',
            title: 'Plugin Compatibility',
            description:
              'Themes zijn getest met populaire plugins zoals WooCommerce, Contact Form 7, Yoast SEO en meer. Alles werkt out-of-the-box.',
          },
          {
            icon: '✅',
            title: 'Bewezen & Getest',
            description:
              'Populaire themes worden gebruikt door duizenden websites wereldwijd. Alle kinderziektes zijn eruit, het werkt gewoon.',
          },
        ],
      },
      setup: {
        title: { prefix: 'Wij richten jouw WordPress thema', highlight: 'volledig in', suffix: '' },
        paragraphs: [
          'Bij Niblah nemen we de volledige inrichting van jouw WordPress thema website uit handen. Van thema selectie en personalisatie tot content setup en SEO optimalisatie - wij zorgen ervoor dat je website 100% klaar is om live te gaan.',
          'Met 30+ jaar web development ervaring zorgen we voor een soepele start en optimale prestaties vanaf dag één. Jij focust op je business, wij regelen de rest.',
        ],
        buttonText: 'Bespreek jouw thema website',
        buttonLink: '/contact',
      },
      related: {
        title: { prefix: 'Meer WordPress', highlight: 'Services', suffix: '' },
        subtitle: 'Ontdek onze andere WordPress diensten voor complete website oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          { href: '/wordpress/website-laten-maken', title: 'WordPress Website', description: 'Laat je volledige WordPress website bouwen' },
          { href: '/wordpress/maatwerk', title: 'WordPress Maatwerk', description: 'Custom plugins en functionaliteiten op maat' },
          { href: '/wordpress/woocommerce', title: 'WooCommerce', description: 'Krachtige e-commerce met WordPress' },
          { href: '/wordpress/migratie', title: 'WordPress Migratie', description: 'Verhuis naadloos naar WordPress' },
        ],
      },
    },
  };

export function getWordPressThemaCopy() {
  return copy;
}
