import { getLocaleCopy } from './utils';

const copy = {
  en: {
    success: {
      title: 'Thank you!',
      body: 'We received your request and will contact you within 24 hours. You will also receive a confirmation email.',
      reset: 'Submit another request',
    },
    header: {
      title: 'Free Consultation',
      subtitle: 'Start with professional marketing services',
    },
    sectionTitle: 'Your Details',
    fields: {
      name: 'Full name *',
      email: 'Email address *',
      phone: 'Phone number',
      service: 'What are you interested in? *',
      date: 'Preferred date *',
      time: 'Preferred time *',
    },
    placeholders: {
      name: 'Enter your name',
      email: 'you@email.com',
      phone: '555 123 4567',
    },
    serviceOptions: {
      placeholder: 'Select a service',
      options: [
        'Development & Websites',
        'SEO Services',
        'Google Ads (SEA)',
        'Marketing Automation',
        'Other / Not sure yet',
      ],
    },
    error: 'Something went wrong. Please try again.',
    submit: {
      idle: 'Schedule free consultation',
      loading: 'Sending...',
    },
    footnote: '*Free consultation includes a full strategy session. No credit card required.',
  },
  nl: {
    success: {
      title: 'Bedankt!',
      body: 'We hebben je aanvraag ontvangen en nemen binnen 24 uur contact met je op. Je ontvangt ook een bevestigingsmail.',
      reset: 'Nog een aanvraag indienen',
    },
    header: {
      title: 'Gratis Consult',
      subtitle: 'Start met professionele marketing services',
    },
    sectionTitle: 'Jouw Gegevens',
    fields: {
      name: 'Volledige Naam *',
      email: 'E-mailadres *',
      phone: 'Telefoonnummer',
      service: 'Waarin ben je geinteresseerd? *',
      date: 'Voorkeursdatum *',
      time: 'Voorkeurstijd *',
    },
    placeholders: {
      name: 'Voer je naam in',
      email: 'jouw@email.com',
      phone: '+31 6 12345678',
    },
    serviceOptions: {
      placeholder: 'Selecteer een service',
      options: [
        'Development & Websites',
        'SEO Services',
        'Google Ads (SEA)',
        'Marketing Automation',
        'Anders / Weet ik nog niet',
      ],
    },
    error: 'Er ging iets mis. Probeer het opnieuw.',
    submit: {
      idle: 'Plan Gratis Consult',
      loading: 'Versturen...',
    },
    footnote: '*Gratis consult inclusief volledige strategiesessie. Geen creditcard vereist.',
  },
  de: {
    success: {
      title: 'Vielen Dank!',
      body: 'Wir haben deine Anfrage erhalten und melden uns innerhalb von 24 Stunden. Du erhaeltst auch eine Bestaetigungsmail.',
      reset: 'Noch eine Anfrage senden',
    },
    header: {
      title: 'Kostenloses Beratungsgespraech',
      subtitle: 'Starte mit professionellen Marketing-Services',
    },
    sectionTitle: 'Deine Daten',
    fields: {
      name: 'Vollstaendiger Name *',
      email: 'E-Mail-Adresse *',
      phone: 'Telefonnummer',
      service: 'Wofuer interessierst du dich? *',
      date: 'Bevorzugtes Datum *',
      time: 'Bevorzugte Uhrzeit *',
    },
    placeholders: {
      name: 'Gib deinen Namen ein',
      email: 'deine@email.de',
      phone: '+49 170 1234567',
    },
    serviceOptions: {
      placeholder: 'Waehle einen Service',
      options: [
        'Entwicklung & Websites',
        'SEO Services',
        'Google Ads (SEA)',
        'Marketing Automation',
        'Andere / Noch nicht sicher',
      ],
    },
    error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    submit: {
      idle: 'Kostenloses Beratungsgespraech planen',
      loading: 'Senden...',
    },
    footnote: '*Kostenloses Beratungsgespraech inklusive kompletter Strategiesession. Keine Kreditkarte erforderlich.',
  },
  sv: {
    success: {
      title: 'Tack!',
      body: 'Vi har tagit emot din forfragan och kontaktar dig inom 24 timmar. Du far ocksa ett bekräftelsemail.',
      reset: 'Skicka en ny forfragan',
    },
    header: {
      title: 'Gratis konsultation',
      subtitle: 'Börja med professionella marknadsforingstjanster',
    },
    sectionTitle: 'Dina uppgifter',
    fields: {
      name: 'Fullstandigt namn *',
      email: 'E-postadress *',
      phone: 'Telefonnummer',
      service: 'Vad ar du intresserad av? *',
      date: 'Onskat datum *',
      time: 'Onskad tid *',
    },
    placeholders: {
      name: 'Ange ditt namn',
      email: 'din@email.se',
      phone: '070 123 45 67',
    },
    serviceOptions: {
      placeholder: 'Valj en tjanst',
      options: [
        'Utveckling & Webbplatser',
        'SEO-tjanster',
        'Google Ads (SEA)',
        'Marketing Automation',
        'Annat / Vet inte an',
      ],
    },
    error: 'Nagot gick fel. Forsok igen.',
    submit: {
      idle: 'Boka gratis konsultation',
      loading: 'Skickar...',
    },
    footnote: '*Gratis konsultation inklusive full strategi-session. Inget kreditkort kravs.',
  },
  da: {
    success: {
      title: 'Tak!',
      body: 'Vi har modtaget din anmodning og kontakter dig inden for 24 timer. Du modtager ogsa en bekraeftelsesmail.',
      reset: 'Send en ny anmodning',
    },
    header: {
      title: 'Gratis konsultation',
      subtitle: 'Start med professionelle marketingservices',
    },
    sectionTitle: 'Dine oplysninger',
    fields: {
      name: 'Fulde navn *',
      email: 'E-mailadresse *',
      phone: 'Telefonnummer',
      service: 'Hvad er du interesseret i? *',
      date: 'Foretrukken dato *',
      time: 'Foretrukken tid *',
    },
    placeholders: {
      name: 'Indtast dit navn',
      email: 'din@email.dk',
      phone: '20 12 34 56',
    },
    serviceOptions: {
      placeholder: 'Vaelg en service',
      options: [
        'Udvikling & Websites',
        'SEO-services',
        'Google Ads (SEA)',
        'Marketing Automation',
        'Andet / Ikke sikker endnu',
      ],
    },
    error: 'Noget gik galt. Proev igen.',
    submit: {
      idle: 'Planlaeg gratis konsultation',
      loading: 'Sender...',
    },
    footnote: '*Gratis konsultation inklusive fuld strategisession. Ingen kreditkort paakraevet.',
  },
  fr: {
    success: {
      title: 'Merci !',
      body: 'Nous avons recu votre demande et nous vous contacterons sous 24 heures. Vous recevrez aussi un email de confirmation.',
      reset: 'Envoyer une autre demande',
    },
    header: {
      title: 'Consultation gratuite',
      subtitle: 'Demarrez avec des services marketing professionnels',
    },
    sectionTitle: 'Vos informations',
    fields: {
      name: 'Nom complet *',
      email: 'Adresse email *',
      phone: 'Telephone',
      service: "Qu'est-ce qui vous interesse ? *",
      date: 'Date preferee *',
      time: 'Heure preferee *',
    },
    placeholders: {
      name: 'Entrez votre nom',
      email: 'vous@email.fr',
      phone: '06 12 34 56 78',
    },
    serviceOptions: {
      placeholder: 'Selectionnez un service',
      options: [
        'Developpement & Sites web',
        'Services SEO',
        'Google Ads (SEA)',
        'Marketing Automation',
        'Autre / Pas encore sur',
      ],
    },
    error: "Une erreur s'est produite. Reessayez.",
    submit: {
      idle: 'Planifier une consultation gratuite',
      loading: 'Envoi...',
    },
    footnote: '*Consultation gratuite incluant une session strategique complete. Aucune carte bancaire requise.',
  },
  it: {
    success: {
      title: 'Grazie!',
      body: "Abbiamo ricevuto la tua richiesta e ti contatteremo entro 24 ore. Riceverai anche un'email di conferma.",
      reset: "Invia un'altra richiesta",
    },
    header: {
      title: 'Consulenza gratuita',
      subtitle: 'Inizia con servizi di marketing professionali',
    },
    sectionTitle: 'I tuoi dati',
    fields: {
      name: 'Nome completo *',
      email: 'Indirizzo email *',
      phone: 'Numero di telefono',
      service: 'Cosa ti interessa? *',
      date: 'Data preferita *',
      time: 'Ora preferita *',
    },
    placeholders: {
      name: 'Inserisci il tuo nome',
      email: 'tuo@email.it',
      phone: '320 123 4567',
    },
    serviceOptions: {
      placeholder: 'Seleziona un servizio',
      options: [
        'Sviluppo & Siti web',
        'Servizi SEO',
        'Google Ads (SEA)',
        'Marketing Automation',
        'Altro / Non so ancora',
      ],
    },
    error: 'Qualcosa e andato storto. Riprova.',
    submit: {
      idle: 'Prenota consulenza gratuita',
      loading: 'Invio...',
    },
    footnote: '*Consulenza gratuita con sessione strategica completa. Nessuna carta di credito richiesta.',
  },
};

export function getLeadFormCopy(locale) {
  return getLocaleCopy(copy, locale);
}
