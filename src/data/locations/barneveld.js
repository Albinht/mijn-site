import graphImage from '../../assets/graph.png'
import avatarImage from '../../assets/niblah-headshot.webp'
import masterSeoImage from '../../assets/Master_seo fundamentals.png'
import keywordResearchImage from '../../assets/Keyword_research.png'
import contentRanksImage from '../../assets/content that ranks.png'

export const barneveldData = {
  location: {
    name: 'Barneveld',
    slug: 'barneveld',
    population: '60.000+',
    region: 'Gelderse Vallei',
  },

  seo: {
    title: 'Marketing bureau Barneveld | SEO, Google Ads en websites - Niblah',
    description: 'Zoek je een marketing bureau in Barneveld? Niblah helpt met SEO, Google Ads, websites en automation voor meer aanvragen. Plan een gratis consult.',
    canonical: 'https://www.niblah.com/marketing/barneveld',
    keywords: 'marketing bureau Barneveld, online marketing Barneveld, SEO Barneveld, Google Ads Barneveld, website laten maken Barneveld',
  },

  hero: {
    title: 'Marketing bureau Barneveld',
    titleHighlight: 'online groei',
    subtitle: 'Voor ondernemers die meer aanvragen willen uit Barneveld en de Gelderse Vallei.',
    description: 'Niblah helpt bedrijven in Barneveld met SEO, Google Ads, websites en marketing automation. Geen losse marketingacties, maar een groeisysteem waarin vindbaarheid, campagnes en opvolging samen werken.',
    highlights: [
      'Lokale SEO voor Barneveld, Harselaar, Voorthuizen en Kootwijkerbroek',
      'Google Ads campagnes gericht op aanvragen, omzet en marge',
      'Websites met duidelijke pagina\'s, tracking en conversiepunten',
      'Marketing automation voor snellere opvolging van nieuwe leads',
      'Direct contact met een specialist die strategie en uitvoering koppelt',
    ],
    ctaPrimary: {
      text: 'Plan gratis consult',
      action: 'scroll-contact',
    },
    ctaSecondary: {
      text: 'Bekijk diensten',
      href: '/services',
    },
    extraInfo: 'Marketing bureau voor Barneveld, de A1/A30-corridor en omliggende kernen',
    phoneNumber: '+31 6 48728828',
    heroImage: graphImage,
    avatarImage: avatarImage,
  },

  features: {
    title: 'Online marketing Barneveld met een duidelijk systeem',
    subtitle: 'De meeste bedrijven hebben geen behoefte aan nog een los kanaal, maar aan een aanpak waarin verkeer, website en opvolging elkaar versterken.',
    items: [
      {
        badge: 'Vindbaarheid',
        title: 'Lokale SEO voor Barneveld',
        description: 'We bouwen pagina\'s rond zoekintentie, techniek en lokale relevantie, zodat mensen uit Barneveld jouw aanbod sneller vinden en vertrouwen.',
        visualTitle: 'SEO basis',
        visualSubtitle: 'Structureel verkeer',
        image: masterSeoImage,
      },
      {
        badge: 'Campagnes',
        title: 'Google Ads voor directe vraag',
        description: 'We richten campagnes op zoekers die nu een oplossing zoeken in Barneveld of de regio, met tracking op aanvragen in plaats van losse klikken.',
        visualTitle: 'SEA campagnes',
        visualSubtitle: 'Vraag van nu',
        image: keywordResearchImage,
      },
      {
        badge: 'Conversie',
        title: 'Websites die aanvragen opleveren',
        description: 'We verbeteren of bouwen pagina\'s die bezoekers helpen kiezen, contact opnemen en terugkomen in een meetbare opvolgflow.',
        visualTitle: 'Website flow',
        visualSubtitle: 'Meer leads',
        image: contentRanksImage,
      },
    ],
  },

  localProof: {
    title: 'Wat we zien bij marketing in Barneveld',
    intro: 'Barneveld is lokaal genoeg voor gerichte zoekopdrachten, maar regionaal genoeg om concurrentie te voelen vanuit Ede, Nijkerk en Amersfoort. Daardoor werkt online marketing hier het best als SEO, advertenties en websiteconversie tegelijk worden bekeken.',
    observations: [
      {
        title: 'Zoekers vergelijken lokaal en regionaal',
        description: 'Iemand zoekt niet alleen op een dienst in Barneveld, maar vergelijkt ook aanbieders in omliggende plaatsen. Alleen een plaatsnaam op de homepage is dan te dun.',
        action: 'We bouwen servicepagina\'s die lokale relevantie combineren met duidelijke argumenten om contact op te nemen.',
      },
      {
        title: 'Harselaar en de A1/A30 vragen om B2B-focus',
        description: 'Voor bedrijven rond Harselaar draait vindbaarheid vaak om zakelijke aanvragen, levertijden, capaciteit en betrouwbaarheid, niet alleen om zichtbaarheid.',
        action: 'We koppelen SEO en Google Ads aan conversies die commercieel waardevol zijn.',
      },
      {
        title: 'Veel leads vallen weg na het eerste contactmoment',
        description: 'Nieuwe aanvragen leveren pas groei op als opvolging snel en duidelijk gebeurt. Dat geldt voor lokale diensten, webshops en B2B-bedrijven.',
        action: 'We richten tracking, formulieren en automation zo in dat je weet welke kanalen echte gesprekken opleveren.',
      },
    ],
    callout: 'Deze pagina is daarom geen algemene SEO-tekst met alleen de plaatsnaam Barneveld erin. De insteek is: welke combinatie van vindbaarheid, campagnes, website en opvolging geeft een bedrijf in deze regio de meeste kans op aanvragen?',
  },

  services: {
    title: 'Full service marketing bureau in <span class="bg-[#F7D8FA] px-2 rounded italic">Barneveld</span>',
    subtitle: 'Een compacte dienstenmix voor bedrijven die niet alleen meer verkeer willen, maar betere aanvragen.',
    backgroundColor: 'bg-gray-50',
    items: [
      {
        title: 'SEO in Barneveld',
        description: 'SEO voor bedrijven die structureel gevonden willen worden op diensten, lokale zoekvragen en informatieve vragen van klanten.',
        features: [
          'Lokale zoekintentie en SERP-analyse',
          'Techniek, content en interne links',
          'Servicepagina\'s met duidelijke conversie',
          'Maandelijkse optimalisatie op kansen',
        ],
        cta: { text: 'Bekijk SEO', href: '/services/seo' },
      },
      {
        title: 'Google Ads in Barneveld',
        description: 'Campagnes voor mensen die nu zoeken naar jouw aanbod, met sturing op aanvragen en commerciële kwaliteit.',
        features: [
          'Search campagnes per dienst of regio',
          'Conversiemeting op formulieren en calls',
          'Negatieve zoekwoorden en budgetcontrole',
          'Rapportage op leads, niet alleen klikken',
        ],
        featured: true,
        cta: { text: 'Bekijk SEA', href: '/services/sea' },
      },
      {
        title: 'Websites en automation',
        description: 'Snelle websites en opvolgflows die bezoekers helpen kiezen en je team helpen sneller reageren.',
        features: [
          'WordPress, Shopify of maatwerk pagina\'s',
          'Heldere formulieren en contactmomenten',
          'Tracking voor kanaal en leadkwaliteit',
          'E-mail en CRM opvolging waar nuttig',
        ],
        cta: { text: 'Bekijk websites', href: '/services/web-development' },
      },
    ],
  },

  method: {
    title: 'Zo bouwen we groei op voor Barneveld',
    description: 'We starten niet met losse taken, maar met de vraag waar de meeste commerciële winst zit: beter gevonden worden, beter converteren of sneller opvolgen.',
    steps: [
      {
        title: 'Nulmeting',
        description: 'We bekijken je huidige website, zoekwoorden, campagnes, tracking en belangrijkste concurrenten.',
      },
      {
        title: 'Lokale kansen',
        description: 'We bepalen welke zoekvragen in Barneveld en omgeving waardevol genoeg zijn om pagina\'s of campagnes voor te maken.',
      },
      {
        title: 'Basis op orde',
        description: 'We verbeteren techniek, tracking, contactpunten en paginaopbouw voordat extra verkeer wordt ingekocht.',
      },
      {
        title: 'Uitvoering',
        description: 'SEO-content, Google Ads, websiteblokken en automation worden op elkaar afgestemd.',
      },
      {
        title: 'Bijsturen',
        description: 'We kijken naar aanvragen, kwaliteit en kosten per lead, zodat marketing steeds scherper wordt.',
      },
    ],
  },

  comparison: {
    title: 'Geen bureau dat alleen taken afvinkt',
    body: 'Veel marketing bureaus leveren een rapport, campagne of website op als los project. Niblah kijkt liever naar het systeem erachter: welke zoekvragen leveren aanvragen op, welke pagina\'s overtuigen, welke campagnes vullen de pijplijn en hoe snel worden leads opgevolgd?',
    points: [
      {
        title: 'Strategie en uitvoering blijven bij elkaar',
        description: 'De persoon die de kansen ziet, kijkt ook mee naar de uitvoering. Daardoor blijven SEO, Google Ads en websitekeuzes praktisch.',
      },
      {
        title: 'Lokale pagina\'s krijgen eigen inhoud',
        description: 'Geen gekopieerde plaatsnaamteksten, maar lokale argumenten, zoekintentie en relevante omliggende plaatsen.',
      },
      {
        title: 'Marketing wordt gekoppeld aan verkoop',
        description: 'Meer verkeer is niet genoeg. We kijken naar contactaanvragen, belmomenten, opvolging en de kwaliteit van leads.',
      },
    ],
  },

  faq: {
    title: 'Vragen over marketing bureau Barneveld',
    items: [
      {
        question: 'Wat doet een marketing bureau in Barneveld?',
        answer: 'Een marketing bureau in Barneveld helpt bedrijven beter zichtbaar worden, meer relevante bezoekers aantrekken en meer aanvragen uit die bezoekers halen. Bij Niblah combineren we SEO, Google Ads, websites en marketing automation zodat kanalen elkaar versterken.',
      },
      {
        question: 'Is lokale SEO belangrijk voor bedrijven in Barneveld?',
        answer: 'Ja, vooral wanneer klanten zoeken op een dienst plus plaats of regio. Lokale SEO helpt je zichtbaar worden voor zoekopdrachten rond Barneveld, Harselaar, Voorthuizen, Kootwijkerbroek en omliggende plaatsen. De pagina moet wel echte lokale waarde hebben, niet alleen een plaatsnaam.',
      },
      {
        question: 'Werkt Google Ads voor lokale bedrijven in Barneveld?',
        answer: 'Google Ads kan goed werken wanneer de campagnes strak zijn ingericht op zoekintentie, regio en conversies. We sturen niet op zoveel mogelijk klikken, maar op aanvragen die passen bij je aanbod en marge.',
      },
      {
        question: 'Kan Niblah ook mijn bestaande website verbeteren?',
        answer: 'Ja. Vaak is een volledig nieuwe website niet de eerste stap. We kijken eerst naar snelheid, paginaopbouw, tracking, formulieren, call-to-actions en content. Daarna bepalen we of verbeteren genoeg is of dat nieuwbouw slimmer is.',
      },
      {
        question: 'Hoe snel zie ik resultaat van online marketing in Barneveld?',
        answer: 'Google Ads kan vaak sneller data en aanvragen opleveren. SEO bouwt meestal over meerdere maanden op, omdat techniek, content en autoriteit tijd nodig hebben. De beste aanpak hangt af van je huidige website, concurrentie en budget.',
      },
      {
        question: 'Wat kost online marketing in Barneveld?',
        answer: 'Dat hangt af van de combinatie van diensten. Een lokale SEO-aanpak, Google Ads beheer of websiteproject vraagt elk om een andere investering. In een gratis consult bekijken we eerst waar de grootste kans zit, zodat je geen pakket koopt dat niet past.',
      },
    ],
  },

  internalLinks: {
    title: 'Meer Niblah pagina\'s voor je vergelijking',
    groups: [
      {
        title: 'Diensten',
        links: [
          { label: 'SEO services', href: '/services/seo' },
          { label: 'Google Ads services', href: '/services/sea' },
          { label: 'Website development', href: '/services/web-development' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'AI Marketing Audit', href: '/tools/ai-marketing-audit' },
          { label: 'SERP Simulator', href: '/tools/serp-simulator' },
          { label: 'ROAS Calculator', href: '/tools/break-even-roas-calculator' },
        ],
      },
      {
        title: 'In de buurt',
        links: [
          { label: 'Marketing Ede', href: '/marketing/ede' },
          { label: 'Marketing Nijkerk', href: '/marketing/nijkerk' },
          { label: 'Marketing Veenendaal', href: '/marketing/veenendaal' },
        ],
      },
    ],
  },

  cta: {
    title: 'Ontdek welke marketingmix past bij jouw bedrijf in Barneveld',
    description: 'Plan een gratis consult. We kijken naar je huidige vindbaarheid, website, campagnes en opvolging, en bepalen welke stap de meeste impact kan maken.',
    primaryCTA: {
      text: 'Plan gratis consult',
      action: 'scroll-contact',
    },
    secondaryCTA: {
      text: 'Bekijk alle diensten',
      href: '/services',
    },
    backgroundColor: 'bg-[#D9EDFF]',
    highlights: [
      'Analyse van je huidige online vindbaarheid',
      'Concrete kansen voor SEO, Google Ads en websiteconversie',
      'Advies zonder verplicht pakket of lange wachttijd',
    ],
  },

  contact: {
    title: 'Gratis kennismaken met Niblah als <span class="bg-[#F7D8FA] px-2 rounded italic">marketing bureau Barneveld</span>?',
    description: 'Vertel waar je nu staat. Dan kijken we welke combinatie van SEO, Google Ads, website en automation logisch is voor jouw bedrijf.',
    phone: '+31 6 48728828',
    whatsapp: 'https://wa.me/31648728828',
  },

  areaInfo: {
    districts: ['Centrum', 'Norschoten', 'Veller', 'De Burgt', 'Eilanden', 'Oldenbarneveld', 'Kallenbroek'],
    villages: ['Voorthuizen', 'Kootwijkerbroek', 'Garderen', 'Stroe', 'Kootwijk', 'De Glind', 'Terschuur', 'Zwartebroek'],
    region: ['Ede', 'Nijkerk', 'Putten', 'Scherpenzeel', 'Lunteren', 'Otterlo', 'Harskamp'],
  },
}

export default barneveldData
