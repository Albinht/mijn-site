import { getLocaleCopy } from './utils';

// Blog content for customer service software 2026
const copy = {
  en: {
    metadata: {
      title: 'The Best Customer Service Software in 2026: Complete Guide',
      description: 'Discover the top customer service software tools to enhance your support strategy and improve customer satisfaction.',
      keywords: 'customer service software, best support tools, Zendesk alternative, Samdesk, helpdesk software comparison',
      openGraph: {
        title: 'The Best Customer Service Software in 2026: Complete Guide',
        description: 'Discover the top customer service software tools to enhance your support strategy and improve customer satisfaction.',
        images: ['/customer-service-software-2026.jpg'],
      },
    },
  },
  nl: {
    metadata: {
      title: 'De beste klantenservice-software in 2026: Complete gids',
      description: 'Ontdek de beste klantenservice software tools om uw supportstrategie te verbeteren en klantentevredenheid te verhogen.',
      keywords: 'klantenservice software, beste support tools, Zendesk alternatief, Samdesk, helpdesk software vergelijking',
      openGraph: {
        title: 'De beste klantenservice-software in 2026: Complete gids',
        description: 'Ontdek de beste klantenservice software tools om uw supportstrategie te verbeteren en klantentevredenheid te verhogen.',
        images: ['/customer-service-software-2026.jpg'],
      },
    },
  },
  de: {
    metadata: {
      title: 'Die beste Kundenservice-Software 2026: Vollständiger Leitfaden',
      description: 'Entdecken Sie die besten Kundenservice-Software-Tools, um Ihre Support-Strategie zu verbessern und die Kundenzufriedenheit zu erhöhen.',
      keywords: 'Kundenservice software, beste Support-Tools, Zendesk Alternative, Samdesk, Helpdesk Software Vergleich',
      openGraph: {
        title: 'Die beste Kundenservice-Software 2026: Vollständiger Leitfaden',
        description: 'Entdecken Sie die besten Kundenservice-Software-Tools, um Ihre Support-Strategie zu verbessern und die Kundenzufriedenheit zu erhöhen.',
        images: ['/customer-service-software-2026.jpg'],
      },
    },
  },
  sv: {
    metadata: {
      title: 'Bästa kundservice mjukvara 2026: Komplett guide',
      description: 'Upptäck de bästa kundservice mjukvaru-verktyg för att förbättra din supportstrategi och öka kundnöjdhet.',
      keywords: 'kundservice mjukvara, bästa supportverktyg, Zendesk alternativ, Samdesk, helpdesk mjukvaru jämförelse',
      openGraph: {
        title: 'Bästa kundservice mjukvara 2026: Komplett guide',
        description: 'Upptäck de bästa kundservice mjukvaru-verktyg för att förbättra din supportstrategi och öka kundnöjdhet.',
        images: ['/customer-service-software-2026.jpg'],
      },
    },
  },
  da: {
    metadata: {
      title: 'Den bedste kundeservice-software i 2026: Komplet guide',
      description: 'Opdag de bedste kundeservice værktøjer til at forbedre din supportstrategi og øge kundetilfredsheden.',
      keywords: 'kundeservice software, bedste supportværktøjer, Zendesk alternativ, Samdesk, helpdesk software sammenligning',
      openGraph: {
        title: 'Den bedste kundeservice-software i 2026: Komplet guide',
        description: 'Opdag de bedste kundeservice værktøjer til at forbedre din supportstrategi og øge kundetilfredsheden.',
        images: ['/customer-service-2026.jpg'],
      },
    },
  },
  fr: {
    metadata: {
      title: 'Le meilleur logiciel de service client en 2026: Guide complet',
      description: 'Découvrez les meilleurs outils de service client pour améliorer votre stratégie de support et augmenter la satisfaction client.',
      keywords: 'logiciel de service client, meilleurs outils support, Zendesk alternative, Samdesk, comparaison logiciel support',
      openGraph: {
        title: 'Le meilleur logiciel de service client en 2026: Guide complet',
        description: 'Découvrez les meilleurs outils de service client pour améliorer votre stratégie de support et augmenter la satisfaction client.',
        images: ['/customer-service-software-2026.jpg'],
      },
    },
  },
  it: {
    metadata: {
      title: 'Il miglior software di assistenza clienti del 2026: Guida completa',
      description: 'Scopri i migliori strumenti di assistenza clienti per migliorare la tua strategia di supporto e aumentare la soddisfazione dei clienti.',
      keywords: 'software di assistenza clienti, migliori strumenti support, Zendesk alternativa, Samdesk, confronto software assistenza',
      openGraph: {
        title: 'Il miglior software di assistenza clienti del 2026: Guida completa',
        description: 'Scopri i migliori strumenti di assistenza clienti per migliorare la tua strategia di supporto e aumentare la soddisfazione dei clienti.',
        images: ['/customer-service-software-2026.jpg'],
      },
    },
  },
};

export function getBlogCopy(locale) {
  return copy[locale] || copy['en'];
}

export function customerServiceSoftware2026(locale) {
  return copy[locale]?.customerServiceSoftware2026 || {};
}