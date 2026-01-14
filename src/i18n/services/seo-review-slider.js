import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    summary: {
      leading: 'We get a',
      rating: '4.9',
      middle: 'on Google from',
      count: '143 reviews',
    },
    reviews: [
      {
        name: 'Pieter Janssen',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'After 4 months of SEO with Niblah we finally reached the top 3 for our most important keywords. Traffic grew by 186%!',
      },
      {
        name: 'Linda Bakker',
        company: 'Marketing Director',
        rating: 5,
        text: 'The transparency and strategic approach from Niblah really make the difference. Finally an SEO partner that delivers results.',
      },
      {
        name: 'Mark de Vries',
        company: 'Founder TechStart',
        rating: 5,
        text: 'From page 3 to position 1 in 6 months. The technical optimizations and content strategy were our game changer.',
      },
      {
        name: 'Sarah Peters',
        company: 'CEO Fashion Online',
        rating: 5,
        text: 'Organic traffic grew from 5K to 42K visitors per month. Niblahs SEO expertise speaks for itself!',
      },
      {
        name: 'Tom Verhoeven',
        company: 'Restaurant Owner',
        rating: 5,
        text: 'Local SEO put our restaurant on the map. New reservations from Google every day. Fantastic!',
      },
      {
        name: 'Eva van Dam',
        company: 'B2B Services',
        rating: 5,
        text: 'Niblahs link building strategy is next level. Our domain authority grew a lot and we rank for more and more keywords.',
      },
    ],
    moreReviews: [
      {
        name: 'Joris Hendriks',
        company: 'Webshop Owner',
        rating: 5,
        text: 'Content optimization improved our conversion rate by 127%. Not only more traffic, but better traffic.',
      },
      {
        name: 'Melissa de Groot',
        company: 'Marketing Manager',
        rating: 5,
        text: 'The monthly reports are super clear. You see exactly what your investment delivers. Niblah really thinks along.',
      },
      {
        name: 'David Mulder',
        company: 'SaaS Founder',
        rating: 5,
        text: 'From 0 to 15K organic visitors in a year. The SEO strategy is perfectly aligned with our product and audience.',
      },
      {
        name: 'Sophie Koning',
        company: 'E-learning Platform',
        rating: 5,
        text: 'Technical SEO audit and fixes doubled our site speed. Rankings have only gone up since then.',
      },
      {
        name: 'Lars van Leeuwen',
        company: 'Law Office',
        rating: 5,
        text: 'Local SEO package gave our office much more visibility. We are now number 1 in our area!',
      },
      {
        name: 'Anna Smit',
        company: 'Online Marketer',
        rating: 5,
        text: 'Finally an SEO partner that looks not only at rankings but at real business growth. Great collaboration!',
      },
    ],
  },
  nl: {
    summary: {
      leading: 'Wij krijgen een',
      rating: '4.9',
      middle: 'op Google uit',
      count: '143 beoordelingen',
    },
    reviews: [
      {
        name: 'Pieter Janssen',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Na 4 maanden SEO met Niblah staan we eindelijk in de top 3 voor onze belangrijkste zoekwoorden. Traffic is met 186% gestegen!',
      },
      {
        name: 'Linda Bakker',
        company: 'Marketing Director',
        rating: 5,
        text: 'De transparantie en strategische aanpak van Niblah maken echt het verschil. Eindelijk een SEO-partner die resultaat levert.',
      },
      {
        name: 'Mark de Vries',
        company: 'Founder TechStart',
        rating: 5,
        text: 'Van pagina 3 naar positie 1 in 6 maanden. De technische optimalisaties en content strategie zijn onze game-changer geweest.',
      },
      {
        name: 'Sarah Peters',
        company: 'CEO Fashion Online',
        rating: 5,
        text: 'Organisch verkeer gestegen van 5K naar 42K bezoekers per maand. Niblahs SEO expertise spreekt voor zich!',
      },
      {
        name: 'Tom Verhoeven',
        company: 'Restaurant Eigenaar',
        rating: 5,
        text: 'Local SEO heeft ons restaurant op de kaart gezet. Dagelijks nieuwe reserveringen via Google. Fantastisch!',
      },
      {
        name: 'Eva van Dam',
        company: 'B2B Services',
        rating: 5,
        text: 'De linkbuilding strategie van Niblah is next level. Onze domain authority is enorm gegroeid en we ranken voor steeds meer keywords.',
      },
    ],
    moreReviews: [
      {
        name: 'Joris Hendriks',
        company: 'Webshop Eigenaar',
        rating: 5,
        text: 'Content optimalisatie heeft onze conversieratio met 127% verbeterd. Niet alleen meer traffic, maar ook betere traffic.',
      },
      {
        name: 'Melissa de Groot',
        company: 'Marketing Manager',
        rating: 5,
        text: 'De maandelijkse rapportages zijn super duidelijk. Je ziet precies wat je investering oplevert. Niblah denkt echt mee!',
      },
      {
        name: 'David Mulder',
        company: 'SaaS Founder',
        rating: 5,
        text: 'Van 0 naar 15K organische bezoekers in een jaar. De SEO strategie is perfect afgestemd op ons product en doelgroep.',
      },
      {
        name: 'Sophie Koning',
        company: 'E-learning Platform',
        rating: 5,
        text: 'Technical SEO audit en fixes hebben onze site speed verdubbeld. Rankings zijn sindsdien alleen maar omhoog gegaan.',
      },
      {
        name: 'Lars van Leeuwen',
        company: 'Advocatenkantoor',
        rating: 5,
        text: 'Local SEO pakket heeft ons kantoor veel meer zichtbaarheid gegeven. We staan nu nummer 1 in ons gebied!',
      },
      {
        name: 'Anna Smit',
        company: 'Online Marketeer',
        rating: 5,
        text: 'Eindelijk een SEO-partner die niet alleen kijkt naar rankings maar naar daadwerkelijke business groei. Top samenwerking!',
      },
    ],
  },
  de: {
    summary: {
      leading: 'Wir bekommen eine',
      rating: '4.9',
      middle: 'auf Google aus',
      count: '143 Bewertungen',
    },
    reviews: [
      {
        name: 'Pieter Janssen',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Nach 4 Monaten SEO mit Niblah sind wir endlich in den Top 3 fuer unsere wichtigsten Keywords. Traffic ist um 186% gestiegen!',
      },
      {
        name: 'Linda Bakker',
        company: 'Marketing Director',
        rating: 5,
        text: 'Die Transparenz und der strategische Ansatz von Niblah machen wirklich den Unterschied. Endlich ein SEO-Partner, der Ergebnisse liefert.',
      },
      {
        name: 'Mark de Vries',
        company: 'Founder TechStart',
        rating: 5,
        text: 'Von Seite 3 auf Position 1 in 6 Monaten. Die technischen Optimierungen und die Content-Strategie waren unser Game Changer.',
      },
      {
        name: 'Sarah Peters',
        company: 'CEO Fashion Online',
        rating: 5,
        text: 'Organischer Traffic stieg von 5K auf 42K Besucher pro Monat. Niblahs SEO-Expertise spricht fuer sich!',
      },
      {
        name: 'Tom Verhoeven',
        company: 'Restaurant Besitzer',
        rating: 5,
        text: 'Local SEO hat unser Restaurant auf die Karte gesetzt. Taeglich neue Reservierungen ueber Google. Fantastisch!',
      },
      {
        name: 'Eva van Dam',
        company: 'B2B Services',
        rating: 5,
        text: 'Die Linkbuilding-Strategie von Niblah ist next level. Unsere Domain Authority ist stark gewachsen und wir ranken fuer immer mehr Keywords.',
      },
    ],
    moreReviews: [
      {
        name: 'Joris Hendriks',
        company: 'Webshop Besitzer',
        rating: 5,
        text: 'Content-Optimierung hat unsere Conversion Rate um 127% verbessert. Nicht nur mehr Traffic, sondern besserer Traffic.',
      },
      {
        name: 'Melissa de Groot',
        company: 'Marketing Manager',
        rating: 5,
        text: 'Die monatlichen Reports sind super klar. Man sieht genau, was die Investition bringt. Niblah denkt wirklich mit.',
      },
      {
        name: 'David Mulder',
        company: 'SaaS Founder',
        rating: 5,
        text: 'Von 0 auf 15K organische Besucher in einem Jahr. Die SEO-Strategie passt perfekt zu unserem Produkt und unserer Zielgruppe.',
      },
      {
        name: 'Sophie Koning',
        company: 'E-learning Plattform',
        rating: 5,
        text: 'Technical SEO Audit und Fixes haben unsere Site Speed verdoppelt. Rankings sind seitdem nur gestiegen.',
      },
      {
        name: 'Lars van Leeuwen',
        company: 'Anwaltskanzlei',
        rating: 5,
        text: 'Das Local SEO Paket hat unserer Kanzlei viel mehr Sichtbarkeit gegeben. Wir stehen jetzt Nummer 1 in unserer Region!',
      },
      {
        name: 'Anna Smit',
        company: 'Online Marketer',
        rating: 5,
        text: 'Endlich ein SEO-Partner, der nicht nur auf Rankings schaut, sondern auf echtes Business-Wachstum. Tolle Zusammenarbeit!',
      },
    ],
  },
  sv: {
    summary: {
      leading: 'Vi far en',
      rating: '4.9',
      middle: 'pa Google av',
      count: '143 recensioner',
    },
    reviews: [
      {
        name: 'Pieter Janssen',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Efter 4 manader SEO med Niblah ar vi antligen i topp 3 for vara viktigaste sokord. Trafiken har okat med 186%!',
      },
      {
        name: 'Linda Bakker',
        company: 'Marketing Director',
        rating: 5,
        text: 'Transparensen och det strategiska angreppssattet hos Niblah gor verkligen skillnad. Antligen en SEO-partner som levererar resultat.',
      },
      {
        name: 'Mark de Vries',
        company: 'Founder TechStart',
        rating: 5,
        text: 'Fran sida 3 till position 1 pa 6 manader. De tekniska optimeringarna och contentstrategin var var game changer.',
      },
      {
        name: 'Sarah Peters',
        company: 'CEO Fashion Online',
        rating: 5,
        text: 'Organisk trafik okade fran 5K till 42K besokare per manad. Niblahs SEO-expertis talar for sig sjalv!',
      },
      {
        name: 'Tom Verhoeven',
        company: 'Restaurangagare',
        rating: 5,
        text: 'Local SEO satte var restaurang pa kartan. Nya bokningar via Google varje dag. Fantastiskt!',
      },
      {
        name: 'Eva van Dam',
        company: 'B2B Services',
        rating: 5,
        text: 'Niblahs linkbuildingstrategi ar next level. Var domain authority har vuxit rejalt och vi rankar for allt fler sokord.',
      },
    ],
    moreReviews: [
      {
        name: 'Joris Hendriks',
        company: 'Webshopagare',
        rating: 5,
        text: 'Contentoptimering okade var konverteringsgrad med 127%. Inte bara mer trafik, utan battre trafik.',
      },
      {
        name: 'Melissa de Groot',
        company: 'Marketing Manager',
        rating: 5,
        text: 'De manadliga rapporterna ar supertydliga. Du ser exakt vad investeringen ger. Niblah tanker verkligen med.',
      },
      {
        name: 'David Mulder',
        company: 'SaaS Founder',
        rating: 5,
        text: 'Fran 0 till 15K organiska besokare pa ett ar. SEO-strategin ar perfekt anpassad till vart produkt och malgrupp.',
      },
      {
        name: 'Sophie Koning',
        company: 'E-learning Plattform',
        rating: 5,
        text: 'Technical SEO audit och fixes dubblerade var site speed. Rankings har bara gatt upp sedan dess.',
      },
      {
        name: 'Lars van Leeuwen',
        company: 'Advokatbyra',
        rating: 5,
        text: 'Local SEO paket gav var byra mycket mer synlighet. Vi ligger nu etta i vart omrade!',
      },
      {
        name: 'Anna Smit',
        company: 'Online Marketer',
        rating: 5,
        text: 'Antligen en SEO-partner som inte bara tittar pa rankings utan pa verklig affars tillvaxt. Grymt samarbete!',
      },
    ],
  },
  da: {
    summary: {
      leading: 'Vi far en',
      rating: '4.9',
      middle: 'pa Google ud af',
      count: '143 anmeldelser',
    },
    reviews: [
      {
        name: 'Pieter Janssen',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Efter 4 maaneder med SEO hos Niblah ligger vi endelig i top 3 for vores vigtigste soegeord. Trafikken er steget med 186%!',
      },
      {
        name: 'Linda Bakker',
        company: 'Marketing Director',
        rating: 5,
        text: 'Transparensen og den strategiske tilgang hos Niblah gor virkelig forskellen. Endelig en SEO-partner der leverer resultater.',
      },
      {
        name: 'Mark de Vries',
        company: 'Founder TechStart',
        rating: 5,
        text: 'Fra side 3 til position 1 pa 6 maaneder. De tekniske optimeringer og contentstrategien blev vores game changer.',
      },
      {
        name: 'Sarah Peters',
        company: 'CEO Fashion Online',
        rating: 5,
        text: 'Organisk trafik steg fra 5K til 42K besoegere per maaned. Niblahs SEO-ekspertise taler for sig selv!',
      },
      {
        name: 'Tom Verhoeven',
        company: 'Restaurantejer',
        rating: 5,
        text: 'Local SEO satte vores restaurant pa kortet. Daglige nye reservationer via Google. Fantastisk!',
      },
      {
        name: 'Eva van Dam',
        company: 'B2B Services',
        rating: 5,
        text: 'Niblahs linkbuilding strategi er next level. Vores domain authority er vokset markant og vi ranker for flere og flere soegeord.',
      },
    ],
    moreReviews: [
      {
        name: 'Joris Hendriks',
        company: 'Webshop ejer',
        rating: 5,
        text: 'Content optimering forbedrede vores konverteringsrate med 127%. Ikke kun mere trafik, men bedre trafik.',
      },
      {
        name: 'Melissa de Groot',
        company: 'Marketing Manager',
        rating: 5,
        text: 'De manedlige rapporter er super klare. Du ser praecist hvad investeringen giver. Niblah taenker virkelig med.',
      },
      {
        name: 'David Mulder',
        company: 'SaaS Founder',
        rating: 5,
        text: 'Fra 0 til 15K organiske besoegere pa et ar. SEO strategien er perfekt tilpasset vores produkt og maalgruppe.',
      },
      {
        name: 'Sophie Koning',
        company: 'E-learning Platform',
        rating: 5,
        text: 'Technical SEO audit og fixes fordoblede vores site speed. Rankings er kun steget siden da.',
      },
      {
        name: 'Lars van Leeuwen',
        company: 'Advokatkontor',
        rating: 5,
        text: 'Local SEO pakke gav vores kontor meget mere synlighed. Vi ligger nu nummer 1 i vores omrade!',
      },
      {
        name: 'Anna Smit',
        company: 'Online Marketer',
        rating: 5,
        text: 'Endelig en SEO-partner der ikke kun ser pa rankings men pa reel forretningsvaekst. Fantastisk samarbejde!',
      },
    ],
  },
  fr: {
    summary: {
      leading: 'Nous avons',
      rating: '4.9',
      middle: 'sur Google avec',
      count: '143 avis',
    },
    reviews: [
      {
        name: 'Pieter Janssen',
        company: 'Manager E-commerce',
        rating: 5,
        text: 'Apres 4 mois de SEO avec Niblah, nous sommes enfin dans le top 3 pour nos mots-cles les plus importants. Le trafic a augmente de 186%!',
      },
      {
        name: 'Linda Bakker',
        company: 'Directrice Marketing',
        rating: 5,
        text: 'La transparence et l approche strategique de Niblah font vraiment la difference. Enfin un partenaire SEO qui livre des resultats.',
      },
      {
        name: 'Mark de Vries',
        company: 'Founder TechStart',
        rating: 5,
        text: 'De la page 3 a la position 1 en 6 mois. Les optimisations techniques et la strategie de contenu ont tout change.',
      },
      {
        name: 'Sarah Peters',
        company: 'CEO Fashion Online',
        rating: 5,
        text: 'Le trafic organique est passe de 5K a 42K visiteurs par mois. L expertise SEO de Niblah parle d elle-meme!',
      },
      {
        name: 'Tom Verhoeven',
        company: 'Proprietaire de restaurant',
        rating: 5,
        text: 'Le SEO local a mis notre restaurant sur la carte. Nouvelles reservations via Google chaque jour. Fantastique!',
      },
      {
        name: 'Eva van Dam',
        company: 'B2B Services',
        rating: 5,
        text: 'La strategie de linkbuilding de Niblah est next level. Notre autorite de domaine a beaucoup augmente et nous rankons sur de plus en plus de mots-cles.',
      },
    ],
    moreReviews: [
      {
        name: 'Joris Hendriks',
        company: 'Proprietaire de webshop',
        rating: 5,
        text: 'L optimisation de contenu a ameliore notre taux de conversion de 127%. Pas seulement plus de trafic, mais un meilleur trafic.',
      },
      {
        name: 'Melissa de Groot',
        company: 'Manager Marketing',
        rating: 5,
        text: 'Les rapports mensuels sont tres clairs. Vous voyez exactement ce que votre investissement rapporte. Niblah pense vraiment avec vous.',
      },
      {
        name: 'David Mulder',
        company: 'SaaS Founder',
        rating: 5,
        text: 'De 0 a 15K visiteurs organiques en un an. La strategie SEO est parfaitement alignee sur notre produit et notre audience.',
      },
      {
        name: 'Sophie Koning',
        company: 'Plateforme E-learning',
        rating: 5,
        text: 'Audit SEO technique et corrections ont double la vitesse du site. Les rankings ont seulement augmente depuis.',
      },
      {
        name: 'Lars van Leeuwen',
        company: 'Cabinet d avocats',
        rating: 5,
        text: 'Le pack SEO local a donne beaucoup plus de visibilite a notre cabinet. Nous sommes maintenant numero 1 dans notre zone!',
      },
      {
        name: 'Anna Smit',
        company: 'Marketeuse en ligne',
        rating: 5,
        text: 'Enfin un partenaire SEO qui ne regarde pas seulement les rankings mais la croissance business. Super collaboration!',
      },
    ],
  },
  it: {
    summary: {
      leading: 'Abbiamo un',
      rating: '4.9',
      middle: 'su Google da',
      count: '143 recensioni',
    },
    reviews: [
      {
        name: 'Pieter Janssen',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Dopo 4 mesi di SEO con Niblah siamo finalmente nella top 3 per le nostre keyword piu importanti. Il traffico e aumentato del 186%!',
      },
      {
        name: 'Linda Bakker',
        company: 'Marketing Director',
        rating: 5,
        text: 'La trasparenza e l approccio strategico di Niblah fanno davvero la differenza. Finalmente un partner SEO che porta risultati.',
      },
      {
        name: 'Mark de Vries',
        company: 'Founder TechStart',
        rating: 5,
        text: 'Da pagina 3 a posizione 1 in 6 mesi. Le ottimizzazioni tecniche e la strategia di contenuti sono state il nostro game changer.',
      },
      {
        name: 'Sarah Peters',
        company: 'CEO Fashion Online',
        rating: 5,
        text: 'Il traffico organico e passato da 5K a 42K visitatori al mese. L expertise SEO di Niblah parla da sola!',
      },
      {
        name: 'Tom Verhoeven',
        company: 'Proprietario di ristorante',
        rating: 5,
        text: 'La SEO locale ha messo il nostro ristorante sulla mappa. Nuove prenotazioni via Google ogni giorno. Fantastico!',
      },
      {
        name: 'Eva van Dam',
        company: 'B2B Services',
        rating: 5,
        text: 'La strategia di link building di Niblah e next level. La nostra domain authority e cresciuta molto e posizioniamo per sempre piu keyword.',
      },
    ],
    moreReviews: [
      {
        name: 'Joris Hendriks',
        company: 'Proprietario di webshop',
        rating: 5,
        text: 'L ottimizzazione dei contenuti ha migliorato il nostro tasso di conversione del 127%. Non solo piu traffico, ma traffico migliore.',
      },
      {
        name: 'Melissa de Groot',
        company: 'Marketing Manager',
        rating: 5,
        text: 'I report mensili sono super chiari. Vedi esattamente cosa rende il tuo investimento. Niblah pensa davvero insieme a te.',
      },
      {
        name: 'David Mulder',
        company: 'SaaS Founder',
        rating: 5,
        text: 'Da 0 a 15K visitatori organici in un anno. La strategia SEO e perfettamente allineata al nostro prodotto e al nostro target.',
      },
      {
        name: 'Sophie Koning',
        company: 'Piattaforma E-learning',
        rating: 5,
        text: 'Audit SEO tecnico e fix hanno raddoppiato la velocita del sito. I rankings sono solo migliorati da allora.',
      },
      {
        name: 'Lars van Leeuwen',
        company: 'Studio legale',
        rating: 5,
        text: 'Il pacchetto SEO locale ha dato molta piu visibilita al nostro studio. Ora siamo numero 1 nella nostra zona!',
      },
      {
        name: 'Anna Smit',
        company: 'Online Marketer',
        rating: 5,
        text: 'Finalmente un partner SEO che non guarda solo ai rankings ma alla crescita reale del business. Ottima collaborazione!',
      },
    ],
  },
};

export function getSEOReviewSliderCopy(locale) {
  return getLocaleCopy(copy, locale);
}
