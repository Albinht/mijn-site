const copy = {
    heading: 'Klaar om te starten?',
    subheading: 'Vul het formulier in en we nemen zo snel mogelijk contact met je op',
    fields: {
      firstName: 'Voornaam *',
      lastName: 'Achternaam *',
      email: 'E-mail *',
      phone: 'Telefoonnummer',
      phoneHint: '(aangeraden)',
      company: 'Bedrijfsnaam *',
      message: 'Opmerkingen *',
    },
    placeholders: {
      firstName: 'Je voornaam',
      lastName: 'Je achternaam',
      email: 'je@email.nl',
      phone: '06 12345678',
      company: 'Naam van je bedrijf',
      message: 'Vertel ons waar we je mee kunnen helpen...',
    },
    success: '✓ Bedankt! We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.',
    error: 'Er ging iets mis. Probeer het opnieuw of bel ons direct op +31 6 48728828',
    submit: {
      idle: 'Verstuur bericht',
      loading: 'Verzenden...',
    },
    whatsapp: {
      strong: 'Ontvang direct een reactie,',
      rest: 'stuur een berichtje via WhatsApp',
    },
  };

export function getContactFormCopy() {
  return copy;
}
