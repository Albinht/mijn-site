import { getLocaleCopy } from '../utils'

const copy = {
  en: {
    metadata: {
      title: 'Paid Ads | Niblah',
      description: 'Scale your business with high-converting paid advertising campaigns across Google, Facebook, and other platforms.',
      openGraph: {
        title: 'Paid Ads | Niblah',
        description: 'Scale your business with high-converting paid advertising campaigns across Google, Facebook, and other platforms.',
        images: ['/avatar.png'],
      },
    },
    title: 'Paid Ads',
    intro: 'Scale your business with high-converting paid advertising campaigns across Google, Facebook, and other platforms.',
    features: [
      {
        title: 'Google Ads',
        description: 'Create profitable Google Ads campaigns that target high-intent keywords and drive qualified traffic.',
      },
      {
        title: 'Facebook & Instagram Ads',
        description: 'Leverage social media advertising to reach your ideal audience with compelling creative content.',
      },
      {
        title: 'Campaign Optimization',
        description: 'Continuously optimize ad performance to maximize ROI and reduce cost per acquisition.',
      },
      {
        title: 'Landing Page Design',
        description: 'Design high-converting landing pages that turn ad clicks into customers.',
      },
    ],
    cta: 'Launch Paid Campaigns',
  },
  nl: {
    metadata: {
      title: 'Betaalde advertenties | Niblah',
      description: 'Schaal je bedrijf met betaalde campagnes die converteren op Google, Facebook en andere platformen.',
      openGraph: {
        title: 'Betaalde advertenties | Niblah',
        description: 'Schaal je bedrijf met betaalde campagnes die converteren op Google, Facebook en andere platformen.',
        images: ['/avatar.png'],
      },
    },
    title: 'Betaalde advertenties',
    intro: 'Schaal je bedrijf met betaalde campagnes die converteren op Google, Facebook en andere platformen.',
    features: [
      {
        title: 'Google Ads',
        description: 'Maak rendabele Google Ads campagnes die high intent zoekwoorden targeten en kwalitatief verkeer opleveren.',
      },
      {
        title: 'Facebook & Instagram Ads',
        description: 'Gebruik social media advertising om je ideale doelgroep te bereiken met sterke creatives.',
      },
      {
        title: 'Campagne optimalisatie',
        description: 'Optimaliseer campagnes continu om ROI te maximaliseren en de kosten per acquisitie te verlagen.',
      },
      {
        title: 'Landingpagina design',
        description: 'Ontwerp landingspaginas die advertentiekliks omzetten in klanten.',
      },
    ],
    cta: 'Start betaalde campagnes',
  },
  de: {
    metadata: {
      title: 'Bezahlte Anzeigen | Niblah',
      description: 'Skaliere dein Geschaeft mit bezahlten Kampagnen, die auf Google, Facebook und anderen Plattformen konvertieren.',
      openGraph: {
        title: 'Bezahlte Anzeigen | Niblah',
        description: 'Skaliere dein Geschaeft mit bezahlten Kampagnen, die auf Google, Facebook und anderen Plattformen konvertieren.',
        images: ['/avatar.png'],
      },
    },
    title: 'Bezahlte Anzeigen',
    intro: 'Skaliere dein Geschaeft mit bezahlten Kampagnen, die auf Google, Facebook und anderen Plattformen konvertieren.',
    features: [
      {
        title: 'Google Ads',
        description: 'Erstelle profitable Google Ads Kampagnen, die high intent Keywords targeten und qualifizierten Traffic bringen.',
      },
      {
        title: 'Facebook & Instagram Ads',
        description: 'Nutze Social Media Advertising, um deine ideale Zielgruppe mit starken Creatives zu erreichen.',
      },
      {
        title: 'Kampagnen Optimierung',
        description: 'Optimiere die Anzeigenleistung kontinuierlich, um den ROI zu maximieren und die Kosten pro Akquisition zu senken.',
      },
      {
        title: 'Landingpage Design',
        description: 'Gestalte Landingpages, die Anzeigenklicks in Kunden verwandeln.',
      },
    ],
    cta: 'Starte bezahlte Kampagnen',
  },
  sv: {
    metadata: {
      title: 'Betalda annonser | Niblah',
      description: 'Skala ditt foretag med betalda kampanjer som konverterar pa Google, Facebook och andra plattformar.',
      openGraph: {
        title: 'Betalda annonser | Niblah',
        description: 'Skala ditt foretag med betalda kampanjer som konverterar pa Google, Facebook och andra plattformar.',
        images: ['/avatar.png'],
      },
    },
    title: 'Betalda annonser',
    intro: 'Skala ditt foretag med betalda kampanjer som konverterar pa Google, Facebook och andra plattformar.',
    features: [
      {
        title: 'Google Ads',
        description: 'Skapa lonsamma Google Ads kampanjer som riktar sig mot high intent sokord och driver kvalificerad trafik.',
      },
      {
        title: 'Facebook & Instagram Ads',
        description: 'Anvand social media annonsering for att na din idealiska malgrupp med starka creatives.',
      },
      {
        title: 'Kampanjoptimering',
        description: 'Optimera annonseringen kontinuerligt for att maximera ROI och minska kostnad per acquisition.',
      },
      {
        title: 'Landing page design',
        description: 'Designa landningssidor som omvandlar annonsklick till kunder.',
      },
    ],
    cta: 'Starta betalda kampanjer',
  },
  da: {
    metadata: {
      title: 'Betalte annoncer | Niblah',
      description: 'Skaler din virksomhed med betalte kampagner der konverterer pa Google, Facebook og andre platforme.',
      openGraph: {
        title: 'Betalte annoncer | Niblah',
        description: 'Skaler din virksomhed med betalte kampagner der konverterer pa Google, Facebook og andre platforme.',
        images: ['/avatar.png'],
      },
    },
    title: 'Betalte annoncer',
    intro: 'Skaler din virksomhed med betalte kampagner der konverterer pa Google, Facebook og andre platforme.',
    features: [
      {
        title: 'Google Ads',
        description: 'Skab profitable Google Ads kampagner der targeter high intent sogeord og driver kvalificeret trafik.',
      },
      {
        title: 'Facebook & Instagram Ads',
        description: 'Brug social media annoncering til at na din ideelle maalgruppe med staerke creatives.',
      },
      {
        title: 'Kampagneoptimering',
        description: 'Optimer annonceresultater loebende for at maksimere ROI og reducere omkostning pr. acquisition.',
      },
      {
        title: 'Landing page design',
        description: 'Design landingssider der omdanner annonceklik til kunder.',
      },
    ],
    cta: 'Start betalte kampagner',
  },
  fr: {
    metadata: {
      title: 'Publicites payantes | Niblah',
      description: 'Faites grandir votre entreprise avec des campagnes payantes qui convertissent sur Google, Facebook et d autres plateformes.',
      openGraph: {
        title: 'Publicites payantes | Niblah',
        description: 'Faites grandir votre entreprise avec des campagnes payantes qui convertissent sur Google, Facebook et d autres plateformes.',
        images: ['/avatar.png'],
      },
    },
    title: 'Publicites payantes',
    intro: 'Faites grandir votre entreprise avec des campagnes payantes qui convertissent sur Google, Facebook et d autres plateformes.',
    features: [
      {
        title: 'Google Ads',
        description: 'Creez des campagnes Google Ads rentables qui ciblent des mots cles a forte intention et apportent un trafic qualifie.',
      },
      {
        title: 'Facebook & Instagram Ads',
        description: 'Utilisez la publicite social media pour toucher votre audience ideale avec des creatives percutantes.',
      },
      {
        title: 'Optimisation de campagne',
        description: 'Optimisez en continu les performances pour maximiser le ROI et reduire le cout par acquisition.',
      },
      {
        title: 'Design de landing pages',
        description: 'Concevez des landing pages qui transforment les clics en clients.',
      },
    ],
    cta: 'Lancer des campagnes payantes',
  },
  it: {
    metadata: {
      title: 'Annunci a pagamento | Niblah',
      description: 'Scala il tuo business con campagne a pagamento che convertono su Google, Facebook e altre piattaforme.',
      openGraph: {
        title: 'Annunci a pagamento | Niblah',
        description: 'Scala il tuo business con campagne a pagamento che convertono su Google, Facebook e altre piattaforme.',
        images: ['/avatar.png'],
      },
    },
    title: 'Annunci a pagamento',
    intro: 'Scala il tuo business con campagne a pagamento che convertono su Google, Facebook e altre piattaforme.',
    features: [
      {
        title: 'Google Ads',
        description: 'Crea campagne Google Ads profittevoli che puntano a keyword ad alta intenzione e generano traffico qualificato.',
      },
      {
        title: 'Facebook & Instagram Ads',
        description: 'Sfrutta la pubblicita social per raggiungere il tuo pubblico ideale con creativita persuasive.',
      },
      {
        title: 'Ottimizzazione campagne',
        description: 'Ottimizza in modo continuo le performance per massimizzare il ROI e ridurre il costo per acquisizione.',
      },
      {
        title: 'Design landing page',
        description: 'Progetta landing page che trasformano i clic degli annunci in clienti.',
      },
    ],
    cta: 'Avvia campagne a pagamento',
  },
}

export function getPaidAdsCopy(locale) {
  return getLocaleCopy(copy, locale)
}
