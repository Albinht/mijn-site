const copy = {
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
  };

export function getLeadFormCopy() {
  return copy;
}
