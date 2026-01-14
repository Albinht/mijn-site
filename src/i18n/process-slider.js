import { getLocaleCopy } from './utils';

const copy = {
  en: {
    labels: {
      previous: 'Previous',
      next: 'Next',
      nextStep: 'Next step',
    },
  },
  nl: {
    labels: {
      previous: 'Vorige',
      next: 'Volgende',
      nextStep: 'Volgende stap',
    },
  },
  de: {
    labels: {
      previous: 'Zurueck',
      next: 'Weiter',
      nextStep: 'Naechster Schritt',
    },
  },
  sv: {
    labels: {
      previous: 'Forra',
      next: 'Nasta',
      nextStep: 'Nasta steg',
    },
  },
  da: {
    labels: {
      previous: 'Forrige',
      next: 'Naeste',
      nextStep: 'Naeste trin',
    },
  },
  fr: {
    labels: {
      previous: 'Precedent',
      next: 'Suivant',
      nextStep: 'Etape suivante',
    },
  },
  it: {
    labels: {
      previous: 'Precedente',
      next: 'Successivo',
      nextStep: 'Passo successivo',
    },
  },
};

export function getProcessSliderCopy(locale) {
  return getLocaleCopy(copy, locale);
}
