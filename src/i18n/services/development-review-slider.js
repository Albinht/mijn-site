import { getLocaleCopy } from '../utils'

const copy = {
  en: {
    reviews: [
      {
        name: 'Mark van der Berg',
        company: 'CEO FashionHub',
        rating: 5,
        text: 'Niblah built our Shopify store from A to Z. The results are phenomenal - 185% more conversions in the first year!',
      },
      {
        name: 'Sarah Jansen',
        company: 'Founder BioBoutique',
        rating: 5,
        text: 'Niblahs expertise in custom development is unmatched. They think along, bring creative solutions, and always deliver on time.',
      },
      {
        name: 'Lisa Bakker',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'From concept to launch in 6 weeks. Niblah translated our vision into a converting website. Highly recommended!',
      },
      {
        name: 'Thomas de Vries',
        company: 'Tech Startup',
        rating: 5,
        text: 'The custom app integrations Niblah built completely transformed our workflow. Perfect work!',
      },
      {
        name: 'Emma Verhoeven',
        company: 'Fashion Retailer',
        rating: 5,
        text: 'Conversion rate from 1.8% to 5.2% after Niblahs website optimization. Their focus on UX really makes the difference.',
      },
      {
        name: 'Jan Willem Peters',
        company: 'B2B Wholesale',
        rating: 5,
        text: 'The WordPress website Niblah built performs perfectly. Fast, secure, and easy to manage. Top service!',
      },
    ],
    moreReviews: [
      {
        name: 'Rachel de Groot',
        company: 'Beauty Brand',
        rating: 5,
        text: 'Our new Shopify store runs like a charm. Niblah optimized everything for speed and conversions.',
      },
      {
        name: 'Tom Hendricks',
        company: 'Sports Equipment',
        rating: 5,
        text: 'The migration from Magento to Shopify was seamless. Niblah moved all data perfectly and the new shop performs much better.',
      },
      {
        name: 'Sophie van Dam',
        company: 'Home Decor Shop',
        rating: 5,
        text: 'Custom WordPress theme that fits our brand perfectly. The checkout flow is optimized so abandonment dropped by 40%.',
      },
      {
        name: 'Alex Koning',
        company: 'Electronics Store',
        rating: 5,
        text: 'From 10K to 150K monthly revenue in 8 months. Niblahs development expertise and growth strategy transformed our business.',
      },
      {
        name: 'Maria van Leeuwen',
        company: 'Jewelry Business',
        rating: 5,
        text: 'The custom Shopify apps Niblah built for our personalization options are great. Customers love them!',
      },
      {
        name: 'Chris Mulder',
        company: 'Food & Beverage',
        rating: 5,
        text: 'WordPress site with WooCommerce integration works perfectly. Niblah connected everything seamlessly. Inventory management is now easy.',
      },
    ],
  },
  nl: {
    reviews: [
      {
        name: 'Mark van der Berg',
        company: 'CEO FashionHub',
        rating: 5,
        text: 'Niblah heeft onze Shopify webshop van A tot Z gebouwd. De resultaten zijn fenomenaal - 185% meer conversie in het eerste jaar!',
      },
      {
        name: 'Sarah Jansen',
        company: 'Founder BioBoutique',
        rating: 5,
        text: 'De expertise van Niblah in custom development is ongeevenaard. Ze denken mee, komen met creatieve oplossingen en leveren altijd op tijd.',
      },
      {
        name: 'Lisa Bakker',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Van concept tot lancering in 6 weken. Niblah heeft onze visie perfect vertaald naar een converterende website. Absolute aanrader!',
      },
      {
        name: 'Thomas de Vries',
        company: 'Tech Startup',
        rating: 5,
        text: 'De custom app integraties die Niblah heeft gebouwd hebben onze workflow volledig getransformeerd. Perfect werk!',
      },
      {
        name: 'Emma Verhoeven',
        company: 'Fashion Retailer',
        rating: 5,
        text: 'Conversieratio van 1.8% naar 5.2% na de website optimalisatie door Niblah. Hun focus op UX maakt echt het verschil.',
      },
      {
        name: 'Jan Willem Peters',
        company: 'B2B Wholesale',
        rating: 5,
        text: 'De WordPress website die Niblah heeft gebouwd presteert perfect. Snel, veilig en makkelijk te beheren. Topservice!',
      },
    ],
    moreReviews: [
      {
        name: 'Rachel de Groot',
        company: 'Beauty Brand',
        rating: 5,
        text: 'Onze nieuwe Shopify store draait als een zonnetje. Niblah heeft alles perfect geoptimaliseerd voor snelheid en conversie.',
      },
      {
        name: 'Tom Hendricks',
        company: 'Sports Equipment',
        rating: 5,
        text: 'De migratie van Magento naar Shopify was naadloos. Niblah heeft alle data perfect overgezet en de nieuwe shop presteert veel beter.',
      },
      {
        name: 'Sophie van Dam',
        company: 'Home Decor Shop',
        rating: 5,
        text: 'Custom WordPress theme die perfect aansluit bij ons merk. De checkout flow is zo geoptimaliseerd dat abandonment met 40% is gedaald.',
      },
      {
        name: 'Alex Koning',
        company: 'Electronics Store',
        rating: 5,
        text: 'Van 10K naar 150K maandomzet in 8 maanden. Niblahs development expertise en groeistrategie hebben onze business getransformeerd.',
      },
      {
        name: 'Maria van Leeuwen',
        company: 'Jewelry Business',
        rating: 5,
        text: 'De custom Shopify apps die Niblah heeft gebouwd voor onze personalisatie opties zijn geweldig. Klanten zijn enthousiast!',
      },
      {
        name: 'Chris Mulder',
        company: 'Food & Beverage',
        rating: 5,
        text: 'WordPress website met WooCommerce integratie werkt perfect. Niblah heeft alles naadloos gekoppeld. Inventory management is nu een makkie.',
      },
    ],
  },
  de: {
    reviews: [
      {
        name: 'Mark van der Berg',
        company: 'CEO FashionHub',
        rating: 5,
        text: 'Niblah hat unseren Shopify Shop von A bis Z gebaut. Die Ergebnisse sind phaenomenal - 185% mehr Conversions im ersten Jahr!',
      },
      {
        name: 'Sarah Jansen',
        company: 'Founder BioBoutique',
        rating: 5,
        text: 'Die Expertise von Niblah im Custom Development ist ungeschlagen. Sie denken mit, liefern kreative Loesungen und sind immer puenktlich.',
      },
      {
        name: 'Lisa Bakker',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Von Konzept bis Launch in 6 Wochen. Niblah hat unsere Vision perfekt in eine konvertierende Website uebersetzt. Absolute Empfehlung!',
      },
      {
        name: 'Thomas de Vries',
        company: 'Tech Startup',
        rating: 5,
        text: 'Die Custom App Integrationen von Niblah haben unseren Workflow komplett transformiert. Perfekte Arbeit!',
      },
      {
        name: 'Emma Verhoeven',
        company: 'Fashion Retailer',
        rating: 5,
        text: 'Conversion Rate von 1.8% auf 5.2% nach der Website Optimierung durch Niblah. Ihr Fokus auf UX macht wirklich den Unterschied.',
      },
      {
        name: 'Jan Willem Peters',
        company: 'B2B Wholesale',
        rating: 5,
        text: 'Die WordPress Website von Niblah performt perfekt. Schnell, sicher und einfach zu verwalten. Top Service!',
      },
    ],
    moreReviews: [
      {
        name: 'Rachel de Groot',
        company: 'Beauty Brand',
        rating: 5,
        text: 'Unser neuer Shopify Store laeuft wie geschmiert. Niblah hat alles perfekt auf Geschwindigkeit und Conversions optimiert.',
      },
      {
        name: 'Tom Hendricks',
        company: 'Sports Equipment',
        rating: 5,
        text: 'Die Migration von Magento zu Shopify war nahtlos. Niblah hat alle Daten sauber migriert und der neue Shop performt viel besser.',
      },
      {
        name: 'Sophie van Dam',
        company: 'Home Decor Shop',
        rating: 5,
        text: 'Custom WordPress Theme, das perfekt zu unserer Marke passt. Der Checkout Flow ist so optimiert, dass Abbrueche um 40% gesunken sind.',
      },
      {
        name: 'Alex Koning',
        company: 'Electronics Store',
        rating: 5,
        text: 'Von 10K auf 150K Monatsumsatz in 8 Monaten. Niblahs Development Expertise und Wachstumsstrategie haben unser Business transformiert.',
      },
      {
        name: 'Maria van Leeuwen',
        company: 'Jewelry Business',
        rating: 5,
        text: 'Die Custom Shopify Apps fuer unsere Personalisierungsoptionen sind grossartig. Kunden sind begeistert!',
      },
      {
        name: 'Chris Mulder',
        company: 'Food & Beverage',
        rating: 5,
        text: 'WordPress Website mit WooCommerce Integration laeuft perfekt. Niblah hat alles nahtlos verbunden. Inventory Management ist jetzt einfach.',
      },
    ],
  },
  sv: {
    reviews: [
      {
        name: 'Mark van der Berg',
        company: 'CEO FashionHub',
        rating: 5,
        text: 'Niblah byggde var Shopify butik fran A till O. Resultaten ar fantastiska - 185% fler konverteringar under forsta aret!',
      },
      {
        name: 'Sarah Jansen',
        company: 'Founder BioBoutique',
        rating: 5,
        text: 'Niblahs expertis inom custom development ar oslagbar. De tanker med, kommer med kreativa losningar och levererar alltid i tid.',
      },
      {
        name: 'Lisa Bakker',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Fran koncept till lansering pa 6 veckor. Niblah oversatte var vision till en konverterande webbplats. Stark rekommendation!',
      },
      {
        name: 'Thomas de Vries',
        company: 'Tech Startup',
        rating: 5,
        text: 'De custom app integrationer Niblah byggde forandrade vart workflow helt. Perfekt arbete!',
      },
      {
        name: 'Emma Verhoeven',
        company: 'Fashion Retailer',
        rating: 5,
        text: 'Konverteringsgrad fran 1.8% till 5.2% efter Niblahs webbplatsoptimering. Deras fokus pa UX gor verkligen skillnad.',
      },
      {
        name: 'Jan Willem Peters',
        company: 'B2B Wholesale',
        rating: 5,
        text: 'WordPress webbplatsen Niblah byggde presterar perfekt. Snabb, saker och enkel att hantera. Top service!',
      },
    ],
    moreReviews: [
      {
        name: 'Rachel de Groot',
        company: 'Beauty Brand',
        rating: 5,
        text: 'Vart nya Shopify store snurrar som en drom. Niblah optimerade allt for hastighet och konvertering.',
      },
      {
        name: 'Tom Hendricks',
        company: 'Sports Equipment',
        rating: 5,
        text: 'Migreringen fran Magento till Shopify var som klocka. Niblah flyttade all data perfekt och den nya butiken presterar mycket battre.',
      },
      {
        name: 'Sophie van Dam',
        company: 'Home Decor Shop',
        rating: 5,
        text: 'Custom WordPress tema som passar vart varumarke perfekt. Checkout flodet ar optimerat sa att avhopp minskade med 40%.',
      },
      {
        name: 'Alex Koning',
        company: 'Electronics Store',
        rating: 5,
        text: 'Fran 10K till 150K manadsomsattning pa 8 manader. Niblahs development expertis och tillvaxtstrategi transformerade vart foretag.',
      },
      {
        name: 'Maria van Leeuwen',
        company: 'Jewelry Business',
        rating: 5,
        text: 'De custom Shopify appar Niblah byggde for vara personaliseringsval ar grymma. Kunderna ar nojda!',
      },
      {
        name: 'Chris Mulder',
        company: 'Food & Beverage',
        rating: 5,
        text: 'WordPress webbplats med WooCommerce integration fungerar perfekt. Niblah kopplade allt somlost. Lagerhantering ar nu enkelt.',
      },
    ],
  },
  da: {
    reviews: [
      {
        name: 'Mark van der Berg',
        company: 'CEO FashionHub',
        rating: 5,
        text: 'Niblah byggede vores Shopify webshop fra A til Z. Resultaterne er fantastiske - 185% flere konverteringer i det forste ar!',
      },
      {
        name: 'Sarah Jansen',
        company: 'Founder BioBoutique',
        rating: 5,
        text: 'Niblahs ekspertise inden for custom development er uden sidestykke. De taenker med, kommer med kreative losninger og leverer altid til tiden.',
      },
      {
        name: 'Lisa Bakker',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Fra koncept til lancering pa 6 uger. Niblah oversatte vores vision til en konverterende website. Klar anbefaling!',
      },
      {
        name: 'Thomas de Vries',
        company: 'Tech Startup',
        rating: 5,
        text: 'De custom app integrationer Niblah byggede har forvandlet vores workflow. Perfekt arbejde!',
      },
      {
        name: 'Emma Verhoeven',
        company: 'Fashion Retailer',
        rating: 5,
        text: 'Konverteringsrate fra 1.8% til 5.2% efter Niblahs website optimering. Deres fokus pa UX gor virkelig forskellen.',
      },
      {
        name: 'Jan Willem Peters',
        company: 'B2B Wholesale',
        rating: 5,
        text: 'WordPress website som Niblah byggede performer perfekt. Hurtig, sikker og nem at administrere. Top service!',
      },
    ],
    moreReviews: [
      {
        name: 'Rachel de Groot',
        company: 'Beauty Brand',
        rating: 5,
        text: 'Vores nye Shopify shop korer som en droem. Niblah optimerede alt for hastighed og konvertering.',
      },
      {
        name: 'Tom Hendricks',
        company: 'Sports Equipment',
        rating: 5,
        text: 'Migreringen fra Magento til Shopify var problemfri. Niblah flyttede alle data perfekt, og den nye shop performer meget bedre.',
      },
      {
        name: 'Sophie van Dam',
        company: 'Home Decor Shop',
        rating: 5,
        text: 'Custom WordPress tema der passer perfekt til vores brand. Checkout flowet er optimeret sa frafald faldt med 40%.',
      },
      {
        name: 'Alex Koning',
        company: 'Electronics Store',
        rating: 5,
        text: 'Fra 10K til 150K i manedsomsatning pa 8 maneder. Niblahs development ekspertise og vaekststrategi transformerede vores forretning.',
      },
      {
        name: 'Maria van Leeuwen',
        company: 'Jewelry Business',
        rating: 5,
        text: 'De custom Shopify apps Niblah byggede til vores personaliseringsmuligheder er fantastiske. Kunderne er begejstrede!',
      },
      {
        name: 'Chris Mulder',
        company: 'Food & Beverage',
        rating: 5,
        text: 'WordPress website med WooCommerce integration virker perfekt. Niblah har koblet alt problemfrit. Lagerstyring er nu nemt.',
      },
    ],
  },
  fr: {
    reviews: [
      {
        name: 'Mark van der Berg',
        company: 'CEO FashionHub',
        rating: 5,
        text: 'Niblah a construit notre boutique Shopify de A a Z. Les resultats sont phenomenaux - 185% de conversions en plus la premiere annee!',
      },
      {
        name: 'Sarah Jansen',
        company: 'Founder BioBoutique',
        rating: 5,
        text: 'L expertise de Niblah en custom development est inegalee. Ils reflechissent avec nous, proposent des solutions creatives et livrent toujours a temps.',
      },
      {
        name: 'Lisa Bakker',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Du concept au lancement en 6 semaines. Niblah a traduit notre vision en un site qui convertit. Recommande!',
      },
      {
        name: 'Thomas de Vries',
        company: 'Tech Startup',
        rating: 5,
        text: 'Les integrations d apps sur mesure creees par Niblah ont completement transforme notre workflow. Travail parfait!',
      },
      {
        name: 'Emma Verhoeven',
        company: 'Fashion Retailer',
        rating: 5,
        text: 'Taux de conversion de 1.8% a 5.2% apres l optimisation du site par Niblah. Leur focus sur l UX fait vraiment la difference.',
      },
      {
        name: 'Jan Willem Peters',
        company: 'B2B Wholesale',
        rating: 5,
        text: 'Le site WordPress construit par Niblah performe parfaitement. Rapide, securise et facile a gerer. Top service!',
      },
    ],
    moreReviews: [
      {
        name: 'Rachel de Groot',
        company: 'Beauty Brand',
        rating: 5,
        text: 'Notre nouvelle boutique Shopify tourne comme une horloge. Niblah a tout optimise pour la vitesse et la conversion.',
      },
      {
        name: 'Tom Hendricks',
        company: 'Sports Equipment',
        rating: 5,
        text: 'La migration de Magento vers Shopify a ete fluide. Niblah a transfere toutes les donnees parfaitement et la nouvelle boutique performe bien mieux.',
      },
      {
        name: 'Sophie van Dam',
        company: 'Home Decor Shop',
        rating: 5,
        text: 'Theme WordPress sur mesure qui colle parfaitement a notre marque. Le checkout est optimise et l abandon a baisse de 40%.',
      },
      {
        name: 'Alex Koning',
        company: 'Electronics Store',
        rating: 5,
        text: 'De 10K a 150K de chiffre d affaires mensuel en 8 mois. L expertise de Niblah en development et leur strategie de croissance ont transforme notre business.',
      },
      {
        name: 'Maria van Leeuwen',
        company: 'Jewelry Business',
        rating: 5,
        text: 'Les apps Shopify sur mesure creees pour nos options de personnalisation sont excellentes. Les clients adorent!',
      },
      {
        name: 'Chris Mulder',
        company: 'Food & Beverage',
        rating: 5,
        text: 'Site WordPress avec integration WooCommerce, tout fonctionne parfaitement. Niblah a tout connecte sans probleme. La gestion de stock est maintenant simple.',
      },
    ],
  },
  it: {
    reviews: [
      {
        name: 'Mark van der Berg',
        company: 'CEO FashionHub',
        rating: 5,
        text: 'Niblah ha costruito il nostro negozio Shopify da A a Z. I risultati sono fenomenali - 185% di conversioni in piu nel primo anno!',
      },
      {
        name: 'Sarah Jansen',
        company: 'Founder BioBoutique',
        rating: 5,
        text: 'La competenza di Niblah nel custom development e senza pari. Pensano con noi, propongono soluzioni creative e consegnano sempre in tempo.',
      },
      {
        name: 'Lisa Bakker',
        company: 'E-commerce Manager',
        rating: 5,
        text: 'Dal concept al lancio in 6 settimane. Niblah ha tradotto la nostra visione in un sito che converte. Consigliatissimo!',
      },
      {
        name: 'Thomas de Vries',
        company: 'Tech Startup',
        rating: 5,
        text: 'Le integrazioni di app su misura create da Niblah hanno trasformato il nostro workflow. Lavoro perfetto!',
      },
      {
        name: 'Emma Verhoeven',
        company: 'Fashion Retailer',
        rating: 5,
        text: 'Tasso di conversione da 1.8% a 5.2% dopo l ottimizzazione del sito da parte di Niblah. Il loro focus su UX fa davvero la differenza.',
      },
      {
        name: 'Jan Willem Peters',
        company: 'B2B Wholesale',
        rating: 5,
        text: 'Il sito WordPress creato da Niblah performa perfettamente. Veloce, sicuro e facile da gestire. Servizio top!',
      },
    ],
    moreReviews: [
      {
        name: 'Rachel de Groot',
        company: 'Beauty Brand',
        rating: 5,
        text: 'Il nostro nuovo store Shopify gira alla grande. Niblah ha ottimizzato tutto per velocita e conversioni.',
      },
      {
        name: 'Tom Hendricks',
        company: 'Sports Equipment',
        rating: 5,
        text: 'La migrazione da Magento a Shopify e stata impeccabile. Niblah ha trasferito tutti i dati e il nuovo shop performa molto meglio.',
      },
      {
        name: 'Sophie van Dam',
        company: 'Home Decor Shop',
        rating: 5,
        text: 'Tema WordPress su misura che rispecchia perfettamente il nostro brand. Il checkout e ottimizzato e l abbandono e sceso del 40%.',
      },
      {
        name: 'Alex Koning',
        company: 'Electronics Store',
        rating: 5,
        text: 'Da 10K a 150K di fatturato mensile in 8 mesi. L expertise di Niblah nello sviluppo e la strategia di crescita hanno trasformato il nostro business.',
      },
      {
        name: 'Maria van Leeuwen',
        company: 'Jewelry Business',
        rating: 5,
        text: 'Le app Shopify su misura create per le opzioni di personalizzazione sono fantastiche. I clienti le adorano!',
      },
      {
        name: 'Chris Mulder',
        company: 'Food & Beverage',
        rating: 5,
        text: 'Sito WordPress con integrazione WooCommerce funziona perfettamente. Niblah ha collegato tutto in modo fluido. La gestione magazzino ora e semplice.',
      },
    ],
  },
}

export function getDevelopmentReviewSliderCopy(locale) {
  return getLocaleCopy(copy, locale)
}
