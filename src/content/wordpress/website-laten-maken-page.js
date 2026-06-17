const copy = {
    metadata: {
      title: 'WordPress Website Laten Maken | Professionele WordPress Development | Niblah',
      description:
        'Laat Niblah je WordPress website bouwen. Maatwerk oplossingen, SEO-geoptimaliseerd en schaalbaar. WordPress experts met 30+ jaar ervaring en bewezen resultaten.',
      keywords: 'wordpress website laten maken, wordpress ontwikkelaar, wordpress developer, website bouwen, wordpress expert, maatwerk wordpress',
      openGraph: {
        title: 'WordPress Website Laten Maken | Niblah',
        description: 'Professionele WordPress websites die converteren. Van design tot development, volledig op maat.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'WORDPRESS WEBSITE ONTWIKKELING',
      title: 'Laat je WordPress website bouwen door experts die resultaat leveren',
      description:
        'Als WordPress specialist bouwt Niblah websites die niet alleen mooi zijn, maar ook presteren. Van concept tot lancering, wij zorgen voor een professionele website die meegroeit met jouw ambities. Snelle laadtijden, SEO-geoptimaliseerd en een gebruikerservaring die bezoekers bindt.',
      ctaText: 'Start je WordPress project',
      ctaLink: '/contact',
      note: '* 30+ jaar development ervaring gebundeld in één team',
      image: '/wordpress-hero.png',
      imageAlt: 'WordPress website development dashboard',
    },
    sections: {
      why: {
        title: { prefix: 'Waarom kiezen voor', highlight: 'WordPress', suffix: '?' },
        subtitle: 'WordPress is het meest gebruikte CMS ter wereld - en dat is niet voor niets',
        cards: [
          {
            icon: '🔓',
            title: 'Open Source & Flexibel',
            description:
              'Complete vrijheid en controle over je website. Geen vendor lock-in, geen beperkingen. WordPress past zich aan jouw wensen aan, niet andersom.',
          },
          {
            icon: '🔍',
            title: 'SEO Vriendelijk',
            description:
              'WordPress is gebouwd met SEO in gedachten. Schone code, snelle performance en volledige controle over meta tags zorgen voor betere rankings in Google.',
          },
          {
            icon: '📈',
            title: 'Schaalbaar & Uitbreidbaar',
            description:
              'Start klein en groei groot. Van blog tot enterprise website, WordPress schaalt mee. Met WooCommerce zelfs volledig webshop mogelijk.',
          },
        ],
      },
      power: {
        title: { prefix: 'De kracht van WordPress én', highlight: 'Niblah', suffix: '' },
        paragraphs: [
          'WordPress is wereldwijd het meest gebruikte CMS. Het biedt een solide basis: flexibel, gebruiksvriendelijk en vol mogelijkheden die je online aanwezigheid naar een hoger niveau tillen.',
          'Maar een goed CMS alleen is niet genoeg. Hier komt Niblah in beeld.',
          'Als WordPress specialist combineren wij de kracht van WordPress met 30+ jaar development ervaring. We bouwen geen standaard websites, maar digitale platforms die perfect aansluiten op jouw unieke visie en doelstellingen.',
          'Met Niblah krijg je een technisch sterke website én een partner die meedenkt over jouw groei. Zo haal je het maximale uit WordPress.',
        ],
        bullets: [
          'Maatwerk ontwikkeling op basis van jouw behoeften',
          'SEO-optimalisatie vanaf dag 1',
          'Koppelingen met marketing tools en CRM systemen',
          'Doorlopende support en optimalisatie',
        ],
      },
      benefits: {
        title: { prefix: 'Voordelen voor jou als', highlight: 'website eigenaar', suffix: '' },
        items: [
          'Beheer je content zelf met de intuïtieve WordPress editor - geen technische kennis vereist',
          '60.000+ plugins beschikbaar - voeg functionaliteiten toe zonder custom development',
          'Volledig responsive en mobiel-geoptimaliseerd - je website werkt perfect op alle devices',
          'Ingebouwde SEO tools en optimalisatie - hogere rankings in Google vanaf de start',
          'WooCommerce integratie mogelijk - transformeer je website naar volledig webshop',
          'Regelmatige updates en patches - je website blijft veilig en up-to-date',
          'Multi-user rollen en permissies - meerdere mensen kunnen veilig samenwerken',
          'Wereldwijde community support - altijd hulp beschikbaar van miljoenen gebruikers',
        ],
      },
      related: {
        title: { prefix: 'Meer WordPress', highlight: 'Services', suffix: '' },
        subtitle: 'Ontdek onze andere WordPress diensten voor complete website oplossingen',
        moreInfoLabel: 'Meer info →',
        cards: [
          { href: '/wordpress/maatwerk', title: 'WordPress Maatwerk', description: 'Custom plugins en functionaliteiten op maat' },
          { href: '/wordpress/thema', title: 'WordPress Thema', description: "Snel en kostenefficiënt starten met thema's" },
          { href: '/wordpress/woocommerce', title: 'WooCommerce Webshop', description: 'Krachtige e-commerce met WordPress' },
          { href: '/wordpress/migratie', title: 'WordPress Migratie', description: 'Verhuis naadloos naar WordPress' },
        ],
      },
    },
  };

export function getWordPressWebsiteLatenMakenCopy() {
  return copy;
}
