import { getLocaleCopy } from '../utils'

const copy = {
  en: {
    metadata: {
      title: 'Email Marketing | Niblah',
      description: 'Build and nurture your email list with campaigns that convert subscribers into loyal customers.',
      openGraph: {
        title: 'Email Marketing | Niblah',
        description: 'Build and nurture your email list with campaigns that convert subscribers into loyal customers.',
        images: ['/avatar.png'],
      },
    },
    title: 'Email Marketing',
    intro: 'Build and nurture your email list with campaigns that convert subscribers into loyal customers.',
    features: [
      {
        title: 'List Building',
        description: 'Create irresistible lead magnets and opt-in forms that grow your email list rapidly.',
      },
      {
        title: 'Email Sequences',
        description: 'Design automated email sequences that nurture leads and drive consistent sales.',
      },
      {
        title: 'Segmentation',
        description: 'Segment your audience for personalized messaging that increases engagement and conversions.',
      },
      {
        title: 'Analytics & Optimization',
        description: 'Track performance and optimize your campaigns for maximum ROI and engagement.',
      },
    ],
    cta: 'Start Email Marketing',
  },
  nl: {
    metadata: {
      title: 'Email marketing | Niblah',
      description: 'Bouw en onderhoud je emaillijst met campagnes die abonnees omzetten in loyale klanten.',
      openGraph: {
        title: 'Email marketing | Niblah',
        description: 'Bouw en onderhoud je emaillijst met campagnes die abonnees omzetten in loyale klanten.',
        images: ['/avatar.png'],
      },
    },
    title: 'Email marketing',
    intro: 'Bouw en onderhoud je emaillijst met campagnes die abonnees omzetten in loyale klanten.',
    features: [
      {
        title: 'Lijstopbouw',
        description: 'Maak onweerstaanbare lead magnets en opt-in formulieren die je emaillijst snel laten groeien.',
      },
      {
        title: 'Emailreeksen',
        description: 'Ontwerp geautomatiseerde emailreeksen die leads opwarmen en consistente omzet opleveren.',
      },
      {
        title: 'Segmentatie',
        description: 'Segmenteer je doelgroep voor persoonlijke berichten die engagement en conversies verhogen.',
      },
      {
        title: 'Analyse en optimalisatie',
        description: 'Volg resultaten en optimaliseer je campagnes voor maximale ROI en engagement.',
      },
    ],
    cta: 'Start met email marketing',
  },
  de: {
    metadata: {
      title: 'E-Mail Marketing | Niblah',
      description: 'Baue und pflege deine E-Mail Liste mit Kampagnen, die Abonnenten in loyale Kunden verwandeln.',
      openGraph: {
        title: 'E-Mail Marketing | Niblah',
        description: 'Baue und pflege deine E-Mail Liste mit Kampagnen, die Abonnenten in loyale Kunden verwandeln.',
        images: ['/avatar.png'],
      },
    },
    title: 'E-Mail Marketing',
    intro: 'Baue und pflege deine E-Mail Liste mit Kampagnen, die Abonnenten in loyale Kunden verwandeln.',
    features: [
      {
        title: 'Listenaufbau',
        description: 'Erstelle unwiderstehliche Lead Magneten und Opt-in Formulare, die deine E-Mail Liste schnell wachsen lassen.',
      },
      {
        title: 'E-Mail Sequenzen',
        description: 'Plane automatisierte E-Mail Sequenzen, die Leads aufwaermen und konstanten Umsatz bringen.',
      },
      {
        title: 'Segmentierung',
        description: 'Segmentiere deine Zielgruppe fuer personalisierte Botschaften, die Engagement und Conversions steigern.',
      },
      {
        title: 'Analyse & Optimierung',
        description: 'Verfolge die Performance und optimiere Kampagnen fuer maximalen ROI und Engagement.',
      },
    ],
    cta: 'Starte E-Mail Marketing',
  },
  sv: {
    metadata: {
      title: 'E-postmarknadsforing | Niblah',
      description: 'Bygg och underhalla din e-postlista med kampanjer som omvandlar prenumeranter till lojala kunder.',
      openGraph: {
        title: 'E-postmarknadsforing | Niblah',
        description: 'Bygg och underhalla din e-postlista med kampanjer som omvandlar prenumeranter till lojala kunder.',
        images: ['/avatar.png'],
      },
    },
    title: 'E-postmarknadsforing',
    intro: 'Bygg och underhalla din e-postlista med kampanjer som omvandlar prenumeranter till lojala kunder.',
    features: [
      {
        title: 'Listbyggnad',
        description: 'Skapa oemotstandliga lead magnets och opt-in formular som far din e-postlista att vaexa snabbt.',
      },
      {
        title: 'E-postsekvenser',
        description: 'Designa automatiserade e-postsekvenser som vardar leads och driver jamn forsaljning.',
      },
      {
        title: 'Segmentering',
        description: 'Segmentera din publik for personliga budskap som okar engagemang och konverteringar.',
      },
      {
        title: 'Analys & Optimering',
        description: 'Folj upp resultat och optimera kampanjer for maximal ROI och engagemang.',
      },
    ],
    cta: 'Starta e-postmarknadsforing',
  },
  da: {
    metadata: {
      title: 'E-mail marketing | Niblah',
      description: 'Byg og plej din email liste med kampagner der konverterer abonnenter til loyale kunder.',
      openGraph: {
        title: 'E-mail marketing | Niblah',
        description: 'Byg og plej din email liste med kampagner der konverterer abonnenter til loyale kunder.',
        images: ['/avatar.png'],
      },
    },
    title: 'E-mail marketing',
    intro: 'Byg og plej din email liste med kampagner der konverterer abonnenter til loyale kunder.',
    features: [
      {
        title: 'Listeopbygning',
        description: 'Skab uimodstaaelige lead magnets og opt-in formularer der faar din email liste til at vokse hurtigt.',
      },
      {
        title: 'Email sekvenser',
        description: 'Design automatiserede email sekvenser der plejer leads og skaber stabilt salg.',
      },
      {
        title: 'Segmentering',
        description: 'Segmenter din maalgruppe for personlige budskaber der oger engagement og konverteringer.',
      },
      {
        title: 'Analyse & optimering',
        description: 'Folj resultater og optimer kampagner for maksimal ROI og engagement.',
      },
    ],
    cta: 'Start email marketing',
  },
  fr: {
    metadata: {
      title: 'Marketing Email | Niblah',
      description: 'Construisez et entretenez votre liste email avec des campagnes qui transforment les abonnes en clients fideles.',
      openGraph: {
        title: 'Marketing Email | Niblah',
        description: 'Construisez et entretenez votre liste email avec des campagnes qui transforment les abonnes en clients fideles.',
        images: ['/avatar.png'],
      },
    },
    title: 'Marketing Email',
    intro: 'Construisez et entretenez votre liste email avec des campagnes qui transforment les abonnes en clients fideles.',
    features: [
      {
        title: 'Construction de liste',
        description: 'Creez des lead magnets irresistibles et des formulaires d inscription qui font croitre rapidement votre liste email.',
      },
      {
        title: 'Sequences email',
        description: 'Concevez des sequences email automatisees qui nurturent les leads et generent des ventes regulieres.',
      },
      {
        title: 'Segmentation',
        description: 'Segmentez votre audience pour des messages personnalises qui augmentent l engagement et les conversions.',
      },
      {
        title: 'Analyse et optimisation',
        description: 'Suivez les performances et optimisez vos campagnes pour un ROI maximal et plus d engagement.',
      },
    ],
    cta: 'Demarrer le marketing email',
  },
  it: {
    metadata: {
      title: 'Email Marketing | Niblah',
      description: 'Costruisci e coltiva la tua lista email con campagne che trasformano gli iscritti in clienti fedeli.',
      openGraph: {
        title: 'Email Marketing | Niblah',
        description: 'Costruisci e coltiva la tua lista email con campagne che trasformano gli iscritti in clienti fedeli.',
        images: ['/avatar.png'],
      },
    },
    title: 'Email Marketing',
    intro: 'Costruisci e coltiva la tua lista email con campagne che trasformano gli iscritti in clienti fedeli.',
    features: [
      {
        title: 'Crescita lista',
        description: 'Crea lead magnet irresistibili e moduli di iscrizione che fanno crescere rapidamente la tua lista email.',
      },
      {
        title: 'Sequenze email',
        description: 'Progetta sequenze email automatizzate che nutrono i lead e generano vendite costanti.',
      },
      {
        title: 'Segmentazione',
        description: 'Segmenta il tuo pubblico per messaggi personalizzati che aumentano engagement e conversioni.',
      },
      {
        title: 'Analisi e ottimizzazione',
        description: 'Monitora le performance e ottimizza le campagne per massimizzare il ROI e l engagement.',
      },
    ],
    cta: 'Avvia Email Marketing',
  },
}

export function getEmailMarketingCopy(locale) {
  return getLocaleCopy(copy, locale)
}
