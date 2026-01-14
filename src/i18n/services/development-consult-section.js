import { getLocaleCopy } from '../utils'

const copy = {
  en: {
    badge: {
      primary: 'Try it free',
      secondary: {
        strong: 'Save 25%',
        long: 'vs big agencies',
        short: 'vs agencies',
      },
    },
    title: {
      prefix: 'Start your development project with a',
      highlight: 'free consult',
      suffix: '',
    },
    intro:
      'Discuss your project with our development experts. We analyze your needs, advise on the best technology, and create a clear plan.',
    benefits: [
      '30+ years of combined experience',
      'Realistic timeline & budget',
      'Tailored technical advice',
      'No obligations',
    ],
  },
  nl: {
    badge: {
      primary: 'Probeer het gratis',
      secondary: {
        strong: 'Bespaar 25%',
        long: 't.o.v. grote bureaus',
        short: 'vs bureaus',
      },
    },
    title: {
      prefix: 'Start je development project met een',
      highlight: 'gratis consult',
      suffix: '',
    },
    intro:
      'Bespreek je project met onze development experts. We analyseren je behoeften, adviseren over de beste technologie en maken een duidelijk stappenplan.',
    benefits: [
      '30+ jaar gecombineerde ervaring',
      'Realistische tijdlijn & budget',
      'Technisch advies op maat',
      'Geen verplichtingen',
    ],
  },
  de: {
    badge: {
      primary: 'Kostenlos testen',
      secondary: {
        strong: 'Spare 25%',
        long: 'vs grosse Agenturen',
        short: 'vs Agenturen',
      },
    },
    title: {
      prefix: 'Starte dein Development Projekt mit einem',
      highlight: 'kostenlosen Consult',
      suffix: '',
    },
    intro:
      'Besprich dein Projekt mit unseren Development Experten. Wir analysieren deine Anforderungen, beraten zur besten Technologie und erstellen einen klaren Plan.',
    benefits: [
      '30+ Jahre kombinierte Erfahrung',
      'Realistische Timeline & Budget',
      'Technische Beratung nach Mass',
      'Keine Verpflichtungen',
    ],
  },
  sv: {
    badge: {
      primary: 'Testa gratis',
      secondary: {
        strong: 'Spara 25%',
        long: 'mot stora byraer',
        short: 'mot byraer',
      },
    },
    title: {
      prefix: 'Starta ditt development projekt med en',
      highlight: 'gratis konsultation',
      suffix: '',
    },
    intro:
      'Diskutera ditt projekt med vara development experter. Vi analyserar dina behov, rekommenderar ratt teknik och tar fram en tydlig plan.',
    benefits: [
      '30+ ar samlad erfarenhet',
      'Realistisk tidslinje och budget',
      'Teknisk radgivning anpassad for dig',
      'Inga forpliktelser',
    ],
  },
  da: {
    badge: {
      primary: 'Proev det gratis',
      secondary: {
        strong: 'Spar 25%',
        long: 'vs store bureauer',
        short: 'vs bureauer',
      },
    },
    title: {
      prefix: 'Start dit development projekt med en',
      highlight: 'gratis konsultation',
      suffix: '',
    },
    intro:
      'Drift dit projekt med vores development eksperter. Vi analyserer dine behov, anbefaler den bedste teknologi og laver en klar plan.',
    benefits: [
      '30+ ars samlet erfaring',
      'Realistisk tidsplan og budget',
      'Teknisk radgivning skraddersyet',
      'Ingen forpligtelser',
    ],
  },
  fr: {
    badge: {
      primary: 'Essayez gratuitement',
      secondary: {
        strong: 'Economisez 25%',
        long: 'vs grandes agences',
        short: 'vs agences',
      },
    },
    title: {
      prefix: 'Demarrez votre projet de development avec une',
      highlight: 'consultation gratuite',
      suffix: '',
    },
    intro:
      'Discutez de votre projet avec nos experts development. Nous analysons vos besoins, conseillons la meilleure technologie et creons un plan clair.',
    benefits: [
      '30+ ans d experience combinee',
      'Planning et budget realistes',
      'Conseil technique sur mesure',
      'Aucun engagement',
    ],
  },
  it: {
    badge: {
      primary: 'Provalo gratis',
      secondary: {
        strong: 'Risparmia 25%',
        long: 'vs grandi agenzie',
        short: 'vs agenzie',
      },
    },
    title: {
      prefix: 'Avvia il tuo progetto di development con una',
      highlight: 'consulenza gratuita',
      suffix: '',
    },
    intro:
      'Parla del tuo progetto con i nostri esperti development. Analizziamo le tue esigenze, consigliamo la tecnologia migliore e creiamo un piano chiaro.',
    benefits: [
      '30+ anni di esperienza combinata',
      'Timeline e budget realistici',
      'Consulenza tecnica su misura',
      'Nessun vincolo',
    ],
  },
}

export function getDevelopmentConsultSectionCopy(locale) {
  return getLocaleCopy(copy, locale)
}
