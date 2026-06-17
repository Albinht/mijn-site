const copy = {
    metadata: {
      title: 'Online marketing uitbesteden? 30+ jaar aan ervaring in een familie! | Niblah',
      description:
        'Boutique marketing bureau met persoonlijke service. Direct contact met je specialist, geen lange wachttijden. Allround service: SEO, Google Ads, websites & marketing automation. Bespaar 25% t.o.v. grote bureaus.',
      keywords:
        'online marketing uitbesteden, marketing bureau, SEO specialist, Google Ads specialist, website ontwikkeling, marketing automation, boutique marketing bureau, persoonlijke service',
      openGraph: {
        title: 'Online marketing uitbesteden? 30+ jaar ervaring in een familie | Niblah',
        description:
          'Boutique marketing bureau met persoonlijke service. Direct contact met je specialist. Allround service: SEO, Google Ads, websites & marketing automation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      titleLine1: 'Online marketing uitbesteden?',
      titleLine2: '30+ jaar aan ervaring gebundeld in een familie',
      subtitle:
        'Wil je samenwerken met een klein team dat doelgericht aan de slag gaat om jouw wensen te realiseren? Klik dan op de knop hieronder en kijk of je bedrijf in aanmerking komt!',
      cta: 'Start uw project',
    },
    featureColumns: [
      {
        title: 'Development & Websites',
        description:
          "Shopify & WordPress development, custom thema's, platform migraties, integraties en app ontwikkeling voor uw online succes.",
        button: 'Bekijk development services',
        imageAlt: 'Website Development',
      },
      {
        title: 'SEO Services',
        description:
          'Technische SEO, linkbuilding, content optimalisatie, local SEO en complete SEO audits voor hogere rankings en meer traffic.',
        button: 'Bekijk SEO services',
        imageAlt: 'SEO Services',
      },
      {
        title: 'Google Ads (SEA)',
        description:
          'Search campagnes, Shopping Ads, Display advertising, remarketing en campagne optimalisatie voor maximale ROI en conversies.',
        button: 'Bekijk SEA services',
        imageAlt: 'Google Ads (SEA)',
      },
      {
        title: 'Marketing Automation',
        description:
          'Email marketing met Klaviyo, marketing automations, CRM integraties, analytics en rapportage voor slimme klantcommunicatie.',
        button: 'Bekijk automation services',
        imageAlt: 'Marketing Automation',
      },
    ],
    stats: {
      heading: 'Ontdek waarom we de beste keuze zijn',
      description:
        'Het marketing bureau dat meer traffic, hogere conversies en meetbare resultaten levert voor jouw online succes.',
      items: [
        { value: 'Tot 300% meer', label: 'organisch verkeer bij onze klanten' },
        { value: '30+ jaar ervaring', label: 'gebundeld in een familie' },
        { value: '100+ bedrijven', label: 'geholpen met online groei' },
        { value: 'Persoonlijke aanpak', label: 'klein team, grote resultaten' },
      ],
    },
    services: {
      heading: 'Onze marketing services voor jouw online succes',
      cards: [
        {
          title: 'Is jouw website klaar voor meer conversies?',
          description:
            'Een moderne, snelle website is de basis van online succes. Wij bouwen Shopify en WordPress websites die converteren en schalen met jouw groei.',
          linkLabel: 'Bekijk development',
          imageAlt: 'Website Development',
        },
        {
          title: 'Wil je hoger ranken in Google?',
          description:
            'Met onze SEO diensten bereik je hogere rankings, meer organisch verkeer en nieuwe klanten. Technische SEO, linkbuilding en content optimalisatie.',
          linkLabel: 'Ontdek SEO services',
          imageAlt: 'SEO Services',
        },
        {
          title: 'Directe resultaten met Google Ads',
          description:
            'Bereik je doelgroep op het juiste moment. Wij optimaliseren campagnes voor maximale ROI en conversies met Search, Shopping en Display Ads.',
          linkLabel: 'Bekijk SEA services',
          imageAlt: 'Google Ads',
        },
        {
          title: 'Automatiseer je marketing en groei',
          description:
            'Verstuur gepersonaliseerde campagnes via email met Klaviyo. Verhoog je omzet en klantloyaliteit met slimme marketing automations.',
          linkLabel: 'Bekijk automation',
          imageAlt: 'Marketing Automation',
        },
      ],
    },
    consult: {
      title: 'Boek een gratis consult en bekijk wat wij voor jou kunnen betekenen',
      description:
        'Een van onze specialisten helpt je graag verder om jouw online doelen te bereiken. We nemen de tijd om jouw situatie te bespreken en concrete stappen te bepalen.',
      linkLabel: 'Plan je gratis consult',
      imageAlt: 'Gratis SEO Consult',
    },
    leadSection: {
      pills: {
        primary: 'Probeer het gratis',
        secondaryBold: 'Bespaar 25%',
        secondaryRest: 't.o.v. grote bureaus',
        secondaryShort: 'vs bureaus',
      },
      title: {
        prefix: 'Maak gratis kennis met onze',
        highlight: 'marketingdiensten',
        suffix: '',
      },
      description:
        'Kom erachter waarom klanten massaal hun marketingbureaus ontslaan en kiezen voor een boutique bureau dat in staat is allround service te bieden met een direct contactpersoon. Weet met wie je te maken hebt.',
      featuresLeft: [
        'Direct contact met je specialist',
        '30+ jaar ervaring in een team',
        'Allround service onder een dak',
      ],
      featuresRight: [
        'Geen lange wachttijden',
        'Transparante rapportages',
        'Persoonlijke aanpak',
      ],
      ctaLabel: 'Ontdek onze diensten',
    },
  };

export function getHomeCopy() {
  return copy;
}
