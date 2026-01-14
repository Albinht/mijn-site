import { getLocaleCopy } from '../utils'

const copy = {
  en: {
    metadata: {
      title: 'Website Development & Design | Custom Websites | Niblah',
      description:
        'Niblah builds websites that convert. From design to development, SEO optimized and responsive. Start your online success today.',
      keywords: 'website development, web design, custom website, responsive website, SEO website',
      openGraph: {
        title: 'Website Development & Design | Niblah',
        description:
          'Niblah builds websites that convert. From design to development, SEO optimized and responsive.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'DEVELOPMENT & WEBSITES',
      title: 'Websites that drive conversions and grow your business',
      description:
        'Our websites are not only beautifully designed, they are built to deliver results. With modern technology, SEO optimization, and a focus on user experience we build sites customers love.',
      ctaText: 'Start your project',
      ctaLink: '/contact',
      note: '* Clients see 40% more conversions on average after launch',
      image: '/development-hero.png',
      imageAlt: 'Professional website development dashboard',
    },
  },
  nl: {
    metadata: {
      title: 'Website Development & Design | Professionele Websites op Maat | Niblah',
      description:
        'Laat Niblah je website bouwen die converteert. Van design tot development, SEO geoptimaliseerd en responsive. Start vandaag nog je online succes.',
      keywords: 'website ontwikkeling, web development, website bouwen, webdesign, responsive websites, SEO websites',
      openGraph: {
        title: 'Website Development & Design | Niblah',
        description: 'Professionele websites die converteren. Van design tot development, volledig op maat.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'DEVELOPMENT & WEBSITES',
      title: 'Websites die conversies genereren en je bedrijf laten groeien',
      description:
        'Onze websites zijn niet alleen mooi ontworpen, maar ook gebouwd om resultaten te leveren. Met moderne technologie, SEO optimalisatie en focus op gebruikerservaring bouwen we websites waar je klanten op afkomen.',
      ctaText: 'Start je project',
      ctaLink: '/contact',
      note: '* Gemiddeld zien onze klanten 40% meer conversies na lancering',
      image: '/development-hero.png',
      imageAlt: 'Professional website development dashboard',
    },
  },
  de: {
    metadata: {
      title: 'Website Entwicklung & Design | Professionelle Websites nach Mass | Niblah',
      description:
        'Niblah baut Websites die konvertieren. Von Design bis Development, SEO optimiert und responsive. Starte heute deinen Online Erfolg.',
      keywords: 'website entwicklung, web design, custom website, responsive website, SEO website',
      openGraph: {
        title: 'Website Entwicklung & Design | Niblah',
        description: 'Websites die konvertieren. Von Design bis Development, SEO optimiert und responsive.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'DEVELOPMENT & WEBSITES',
      title: 'Websites die Conversions bringen und dein Business wachsen lassen',
      description:
        'Unsere Websites sind nicht nur schoen gestaltet, sondern auf Ergebnisse gebaut. Mit moderner Technologie, SEO Optimierung und Fokus auf User Experience bauen wir Websites die Kunden lieben.',
      ctaText: 'Starte dein Projekt',
      ctaLink: '/contact',
      note: '* Kunden sehen im Schnitt 40% mehr Conversions nach dem Launch',
      image: '/development-hero.png',
      imageAlt: 'Professional website development dashboard',
    },
  },
  sv: {
    metadata: {
      title: 'Webbutveckling & Design | Professionella Webbplatser | Niblah',
      description:
        'Niblah bygger webbplatser som konverterar. Fran design till utveckling, SEO optimerad och responsiv. Starta din online framgang idag.',
      keywords: 'webbutveckling, web design, webbplats, responsiv webbplats, SEO webbplats',
      openGraph: {
        title: 'Webbutveckling & Design | Niblah',
        description: 'Webbplatser som konverterar. Fran design till utveckling, SEO optimerad och responsiv.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'UTVECKLING & WEBBPLATSER',
      title: 'Webbplatser som driver konverteringar och far ditt foretag att vaxa',
      description:
        'Vara webbplatser ar inte bara snygga, de ar byggda for resultat. Med modern teknik, SEO optimering och fokus pa anvandarupplevelse bygger vi webbplatser som kunder gillar.',
      ctaText: 'Starta ditt projekt',
      ctaLink: '/contact',
      note: '* Kunder ser i snitt 40% fler konverteringar efter lansering',
      image: '/development-hero.png',
      imageAlt: 'Professional website development dashboard',
    },
  },
  da: {
    metadata: {
      title: 'Webudvikling & Design | Professionelle Websites | Niblah',
      description:
        'Niblah bygger websites der konverterer. Fra design til development, SEO optimeret og responsiv. Start din online succes i dag.',
      keywords: 'webudvikling, web design, website, responsiv website, SEO website',
      openGraph: {
        title: 'Webudvikling & Design | Niblah',
        description: 'Websites der konverterer. Fra design til development, SEO optimeret og responsiv.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'UDVIKLING & WEBSITES',
      title: 'Websites der skaber konverteringer og far din virksomhed til at vaekse',
      description:
        'Vores websites er ikke kun flotte, de er bygget til resultater. Med moderne teknologi, SEO optimering og fokus pa brugeroplevelse bygger vi websites som kunder elsker.',
      ctaText: 'Start dit projekt',
      ctaLink: '/contact',
      note: '* Kunder ser i gennemsnit 40% flere konverteringer efter lancering',
      image: '/development-hero.png',
      imageAlt: 'Professional website development dashboard',
    },
  },
  fr: {
    metadata: {
      title: 'Developpement web & design | Sites sur mesure | Niblah',
      description:
        'Niblah cree des sites qui convertissent. Du design au developpement, SEO optimise et responsive. Demarrez votre succes en ligne aujourd hui.',
      keywords: 'developpement web, web design, site sur mesure, site responsive, SEO site',
      openGraph: {
        title: 'Developpement web & design | Niblah',
        description: 'Des sites qui convertissent. Du design au developpement, SEO optimise et responsive.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'DEVELOPPEMENT & SITES WEB',
      title: 'Des sites qui convertissent et font grandir votre entreprise',
      description:
        'Nos sites ne sont pas seulement beaux, ils sont concus pour des resultats. Avec une technologie moderne, un SEO optimise et un focus sur l experience utilisateur, nous construisons des sites que vos clients aiment.',
      ctaText: 'Demarrer votre projet',
      ctaLink: '/contact',
      note: '* Nos clients voient en moyenne 40% de conversions en plus apres le lancement',
      image: '/development-hero.png',
      imageAlt: 'Professional website development dashboard',
    },
  },
  it: {
    metadata: {
      title: 'Sviluppo web & design | Siti su misura | Niblah',
      description:
        'Niblah realizza siti che convertono. Dal design allo sviluppo, SEO ottimizzata e responsive. Inizia oggi il tuo successo online.',
      keywords: 'sviluppo web, web design, sito su misura, sito responsive, SEO sito',
      openGraph: {
        title: 'Sviluppo web & design | Niblah',
        description: 'Siti che convertono. Dal design allo sviluppo, SEO ottimizzata e responsive.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'SVILUPPO & SITI WEB',
      title: 'Siti che generano conversioni e fanno crescere il tuo business',
      description:
        'I nostri siti non sono solo belli, sono progettati per risultati. Con tecnologia moderna, SEO ottimizzata e focus sulla user experience costruiamo siti che i clienti apprezzano.',
      ctaText: 'Avvia il tuo progetto',
      ctaLink: '/contact',
      note: '* I clienti vedono in media il 40% di conversioni in piu dopo il lancio',
      image: '/development-hero.png',
      imageAlt: 'Professional website development dashboard',
    },
  },
}

export function getWebDevelopmentPageCopy(locale) {
  return getLocaleCopy(copy, locale)
}
