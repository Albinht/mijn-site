import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    title: {
      prefix: 'Start with a',
      highlight: 'free growth scan',
      suffix: '',
    },
    intro:
      'Being visible is nice. But what does it deliver? Our growth scan gives you insight into the factors that influence the effectiveness of SEO.',
    callout: {
      title: 'What can you expect?',
      items: [
        'Analysis of tech, content, authority and conversion',
        'Insight into the factors that influence effectiveness',
        'Hand crafted by an SEO specialist',
        'Focus on results, not just rankings',
      ],
    },
    benefitsTitle: 'What can I expect?',
    benefits: [
      {
        title: 'Measurable results',
        description: 'You receive a detailed monthly report that shows exactly what your investment delivers.',
      },
      {
        title: 'Flexible collaboration',
        description: 'Collaboration that makes everyone happy. You are not locked in.',
      },
      {
        title: 'Strategic partner',
        description: 'SEO is more than pushing the right buttons. We also think along with your strategy.',
      },
    ],
  },
  nl: {
    title: {
      prefix: 'Start met een',
      highlight: 'gratis groeiscan',
      suffix: '',
    },
    intro:
      'Goed vindbaar is mooi. Maar wat levert het op? Onze groeiscan geeft je inzicht in de factoren die de effectiviteit van SEO beinvloeden.',
    callout: {
      title: 'Wat kan je verwachten?',
      items: [
        'Analyse van techniek, content, autoriteit en conversie',
        'Inzicht in de factoren die effectiviteit beinvloeden',
        'Handgemaakt door een SEO-specialist',
        'Focus op resultaat, niet alleen rankings',
      ],
    },
    benefitsTitle: 'Wat kan ik verwachten?',
    benefits: [
      {
        title: 'Meetbaar resultaat',
        description: 'Je ontvangt iedere maand een uitgebreide rapportage waarin je precies ziet wat jouw investering oplevert.',
      },
      {
        title: 'Lekker flexibel',
        description: 'Samenwerking waar iedereen blij van wordt. Je zit nergens aan vast.',
      },
      {
        title: 'Strategisch partner',
        description: 'SEO is voor ons meer dan op de juiste knoppen klikken. We denken ook graag mee over jouw strategie.',
      },
    ],
  },
  de: {
    title: {
      prefix: 'Starte mit einem',
      highlight: 'kostenlosen Wachstumscheck',
      suffix: '',
    },
    intro:
      'Gut sichtbar zu sein ist schoen. Aber was bringt es? Unser Wachstumscheck gibt dir Einblick in die Faktoren, die die Effektivitaet von SEO beeinflussen.',
    callout: {
      title: 'Was kannst du erwarten?',
      items: [
        'Analyse von Technik, Content, Autoritaet und Conversion',
        'Einblick in die Faktoren, die die Effektivitaet beeinflussen',
        'Handgemacht von einem SEO-Spezialisten',
        'Fokus auf Ergebnisse, nicht nur Rankings',
      ],
    },
    benefitsTitle: 'Was kann ich erwarten?',
    benefits: [
      {
        title: 'Messbare Ergebnisse',
        description: 'Du erhaelst jeden Monat einen detaillierten Report, der genau zeigt, was deine Investition bringt.',
      },
      {
        title: 'Flexibel',
        description: 'Zusammenarbeit, die alle gluecklich macht. Du bist an nichts gebunden.',
      },
      {
        title: 'Strategischer Partner',
        description: 'SEO ist fuer uns mehr als die richtigen Knoepfe zu druecken. Wir denken auch bei deiner Strategie mit.',
      },
    ],
  },
  sv: {
    title: {
      prefix: 'Borda med en',
      highlight: 'gratis tillvaxtscan',
      suffix: '',
    },
    intro:
      'Att synas ar bra. Men vad ger det? Var tillvaxtscan ger dig insikt i faktorerna som paverkar effektiviteten av SEO.',
    callout: {
      title: 'Vad kan du forvanta dig?',
      items: [
        'Analys av teknik, content, auktoritet och konvertering',
        'Insikt i faktorerna som paverkar effektivitet',
        'Handgjort av en SEO-specialist',
        'Fokus pa resultat, inte bara rankings',
      ],
    },
    benefitsTitle: 'Vad kan jag forvanta mig?',
    benefits: [
      {
        title: 'Matbara resultat',
        description: 'Du far varje manad en detaljerad rapport som visar exakt vad din investering ger.',
      },
      {
        title: 'Flexibelt samarbete',
        description: 'Samarbete som alla ar glada for. Du ar inte lasst.',
      },
      {
        title: 'Strategisk partner',
        description: 'SEO handlar om mer an att trycka pa ratt knappar. Vi tanker ocksa med kring din strategi.',
      },
    ],
  },
  da: {
    title: {
      prefix: 'Start med en',
      highlight: 'gratis vaekstscan',
      suffix: '',
    },
    intro:
      'At vaere synlig er godt. Men hvad giver det? Vores vaekstscan giver indsigt i faktorerne der paavirker SEO effektivitet.',
    callout: {
      title: 'Hvad kan du forvente?',
      items: [
        'Analyse af teknik, content, autoritet og konvertering',
        'Indsigt i de faktorer der paavirker effektivitet',
        'Handlavet af en SEO-specialist',
        'Fokus pa resultat, ikke kun rankings',
      ],
    },
    benefitsTitle: 'Hvad kan jeg forvente?',
    benefits: [
      {
        title: 'Maalbare resultater',
        description: 'Du modtager hver maned en detaljeret rapport der viser praecist hvad din investering giver.',
      },
      {
        title: 'Fleksibelt samarbejde',
        description: 'Samarbejde der gor alle glade. Du er ikke bundet.',
      },
      {
        title: 'Strategisk partner',
        description: 'SEO er mere end at trykke pa de rigtige knapper. Vi taenker ogsa med pa din strategi.',
      },
    ],
  },
  fr: {
    title: {
      prefix: 'Commencez avec un',
      highlight: 'scan de croissance gratuit',
      suffix: '',
    },
    intro:
      'Etre visible est bien. Mais que rapporte cela? Notre scan de croissance vous donne un apercu des facteurs qui influencent l efficacite du SEO.',
    callout: {
      title: 'Que pouvez-vous attendre?',
      items: [
        'Analyse de la technique, du contenu, de l autorite et de la conversion',
        'Apercu des facteurs qui influencent l efficacite',
        'Fait a la main par un specialiste SEO',
        'Focus sur les resultats, pas seulement les rankings',
      ],
    },
    benefitsTitle: 'A quoi puis-je m attendre?',
    benefits: [
      {
        title: 'Resultats mesurables',
        description: 'Vous recevez chaque mois un rapport detaille qui montre exactement ce que votre investissement rapporte.',
      },
      {
        title: 'Collaboration flexible',
        description: 'Une collaboration qui rend tout le monde heureux. Vous n etes pas engage.',
      },
      {
        title: 'Partenaire strategique',
        description: 'Le SEO est plus que cliquer sur les bons boutons. Nous pensons aussi a votre strategie.',
      },
    ],
  },
  it: {
    title: {
      prefix: 'Inizia con una',
      highlight: 'growth scan gratuita',
      suffix: '',
    },
    intro:
      'Essere visibili e bello. Ma cosa porta? La nostra growth scan ti da insight sui fattori che influenzano l efficacia della SEO.',
    callout: {
      title: 'Cosa puoi aspettarti?',
      items: [
        'Analisi di tecnica, contenuti, autorita e conversione',
        'Insight sui fattori che influenzano l efficacia',
        'Fatto a mano da uno specialista SEO',
        'Focus sui risultati, non solo rankings',
      ],
    },
    benefitsTitle: 'Cosa posso aspettarmi?',
    benefits: [
      {
        title: 'Risultati misurabili',
        description: 'Ricevi ogni mese un report dettagliato che mostra esattamente cosa rende il tuo investimento.',
      },
      {
        title: 'Collaborazione flessibile',
        description: 'Collaborazione che rende tutti felici. Non sei vincolato.',
      },
      {
        title: 'Partner strategico',
        description: 'La SEO e piu che premere i tasti giusti. Pensiamo anche alla tua strategia.',
      },
    ],
  },
};

export function getSEOConsultSectionCopy(locale) {
  return getLocaleCopy(copy, locale);
}
