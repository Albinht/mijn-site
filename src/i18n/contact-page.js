import { getLocaleCopy } from './utils';

const copy = {
  en: {
    metadata: {
      title: 'Contact - Niblah',
      description: 'Contact Niblah for all your questions about Shopify development, ecommerce builds, marketing, and automation.',
    },
    heading: 'Contact',
    labels: {
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
    },
    whatsappButton: 'Direct contact via WhatsApp',
    alternateHeading: 'Or get in touch directly',
    whatsappCardTitle: 'WhatsApp',
    whatsappCardText: 'Send a message for a quick response',
  },
  nl: {
    metadata: {
      title: 'Contact - Niblah',
      description: 'Neem contact op met Niblah voor al uw vragen over Shopify development, webshop bouwen, marketing en automatisering.',
    },
    heading: 'Contact',
    labels: {
      address: 'Adres',
      phone: 'Telefoon',
      email: 'Email',
    },
    whatsappButton: 'Direct contact via WhatsApp',
    alternateHeading: 'Of neem direct contact op',
    whatsappCardTitle: 'WhatsApp',
    whatsappCardText: 'Stuur direct een bericht voor een snelle reactie',
  },
  de: {
    metadata: {
      title: 'Kontakt - Niblah',
      description: 'Kontaktieren Sie Niblah bei allen Fragen zu Shopify-Entwicklung, Webshop-Bau, Marketing und Automatisierung.',
    },
    heading: 'Kontakt',
    labels: {
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
    },
    whatsappButton: 'Direkter Kontakt via WhatsApp',
    alternateHeading: 'Oder nehmen Sie direkt Kontakt auf',
    whatsappCardTitle: 'WhatsApp',
    whatsappCardText: 'Senden Sie eine Nachricht fur eine schnelle Antwort',
  },
  sv: {
    metadata: {
      title: 'Kontakt - Niblah',
      description: 'Kontakta Niblah for alla fragor om Shopify-utveckling, webbutiker, marknadsforing och automatisering.',
    },
    heading: 'Kontakt',
    labels: {
      address: 'Adress',
      phone: 'Telefon',
      email: 'E-post',
    },
    whatsappButton: 'Direkt kontakt via WhatsApp',
    alternateHeading: 'Eller kontakta oss direkt',
    whatsappCardTitle: 'WhatsApp',
    whatsappCardText: 'Skicka ett meddelande for ett snabbt svar',
  },
  da: {
    metadata: {
      title: 'Kontakt - Niblah',
      description: 'Kontakt Niblah for alle sporgsmal om Shopify-udvikling, webshop-opbygning, marketing og automatisering.',
    },
    heading: 'Kontakt',
    labels: {
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-mail',
    },
    whatsappButton: 'Direkte kontakt via WhatsApp',
    alternateHeading: 'Eller kontakt os direkte',
    whatsappCardTitle: 'WhatsApp',
    whatsappCardText: 'Send en besked for et hurtigt svar',
  },
  fr: {
    metadata: {
      title: 'Contact - Niblah',
      description: "Contactez Niblah pour toutes vos questions sur le developpement Shopify, la creation de boutique en ligne, le marketing et l'automatisation.",
    },
    heading: 'Contact',
    labels: {
      address: 'Adresse',
      phone: 'Telephone',
      email: 'Email',
    },
    whatsappButton: 'Contact direct via WhatsApp',
    alternateHeading: 'Ou contactez-nous directement',
    whatsappCardTitle: 'WhatsApp',
    whatsappCardText: 'Envoyez un message pour une reponse rapide',
  },
  it: {
    metadata: {
      title: 'Contatto - Niblah',
      description: 'Contatta Niblah per tutte le domande su sviluppo Shopify, creazione di e-commerce, marketing e automazione.',
    },
    heading: 'Contatto',
    labels: {
      address: 'Indirizzo',
      phone: 'Telefono',
      email: 'Email',
    },
    whatsappButton: 'Contatto diretto via WhatsApp',
    alternateHeading: 'Oppure contattaci direttamente',
    whatsappCardTitle: 'WhatsApp',
    whatsappCardText: 'Invia un messaggio per una risposta rapida',
  },
};

export function getContactPageCopy(locale) {
  return getLocaleCopy(copy, locale);
}
