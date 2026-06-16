import { getLocaleCopy } from '../utils'

const copy = {
  en: {
    metadata: {
      title: 'Website Build Services | Professional Business Websites | Niblah',
      description:
        'Have a professional business website built by Niblah. Custom design, WordPress when it fits, SEO foundations, and a site built to win trust and leads.',
      keywords:
        'website build services, business website, professional website, custom website, wordpress website, website development',
      openGraph: {
        title: 'Website Build Services | Niblah',
        description:
          'Professional business websites for companies that want more trust, better visibility, and more leads.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'BUSINESS WEBSITE DEVELOPMENT',
      title: 'Have a business website built that looks professional and drives leads',
      description:
        'Niblah builds business websites for companies that want a site they can trust for the next stage of growth. Clear messaging, strong design, solid SEO foundations, and WordPress when it is the smartest fit.',
      ctaText: 'Request a website proposal',
      ctaLink: '/contact',
      note: '* Usually WordPress for speed and flexibility, custom where it adds value',
      image: '/web dev services.png',
      imageAlt: 'Website development services overview',
    },
    reasons: [
      {
        icon: '🏢',
        title: 'Built for business credibility',
        description:
          'Your website should make your company look established, reliable, and worth contacting.',
      },
      {
        icon: '⚡',
        title: 'Built for speed and usability',
        description:
          'Fast load times, responsive layouts, and clean structure help users stay engaged and move faster.',
      },
      {
        icon: '📈',
        title: 'Built for visibility and leads',
        description:
          'From page structure to technical basics, the website is prepared to support SEO and conversions.',
      },
    ],
    sections: {
      deliverables: {
        title: { prefix: 'What you get when you have your', highlight: 'website built', suffix: 'by Niblah' },
        intro:
          'A new website should do more than look good. It should support sales, marketing, and day-to-day operations without becoming a maintenance burden.',
        items: [
          'A clear structure for your services, offer, and contact moments',
          'A design direction that fits your business and audience',
          'Responsive development for mobile, tablet, and desktop',
          'Technical SEO basics like clean headings, metadata, and crawlable pages',
          'Forms, tracking, and practical integrations where needed',
          'A manageable CMS setup so your team can keep the site updated',
        ],
      },
      wordpress: {
        title: { prefix: 'Why', highlight: 'WordPress', suffix: 'is often the right choice' },
        paragraphs: [
          'For many small and medium-sized businesses, WordPress is the most practical way to launch a professional website quickly without giving up flexibility.',
          'You get control over pages, content, and SEO, while still keeping room for integrations, custom features, and future growth.',
        ],
        bullets: [
          'Fast to launch compared to fully custom builds',
          'Easy to manage internally after launch',
          'Flexible enough for SEO, forms, content, and integrations',
          'Custom work is still possible where your process requires it',
        ],
      },
      pricing: {
        title: { prefix: 'What does it', highlight: 'cost', suffix: 'to have a website built?' },
        intro:
          'There is no serious fixed price for every company. The investment depends on what the website needs to do for your business.',
        factors: [
          'Number of pages and depth of content',
          'Need for custom design and conversion-focused copy',
          'Integrations with CRM, email tools, calendars, or external systems',
          'Custom functionality, portals, calculators, or automation',
          'Maintenance, support, and future optimization',
        ],
        closing:
          'The best route is usually a focused proposal based on your goals instead of a one-size-fits-all package.',
      },
      process: {
        title: { prefix: 'How the', highlight: 'process', suffix: 'works' },
        subtitle:
          'A good website project stays clear from the first conversation to launch and support.',
        steps: [
          { number: '1', title: 'Intake', description: 'We define your goals, audience, offer, and what the site should achieve.' },
          { number: '2', title: 'Structure', description: 'We map the key pages, messaging, and conversion paths before building.' },
          { number: '3', title: 'Design & Build', description: 'The website is designed and developed with speed, usability, and SEO in mind.' },
          { number: '4', title: 'Feedback & Launch', description: 'We refine the final details, test the essentials, and take the site live cleanly.' },
          { number: '5', title: 'Support', description: 'After launch we can help with updates, improvements, and growth-focused follow-up work.' },
        ],
      },
      faq: {
        title: { prefix: 'Frequently asked', highlight: 'questions', suffix: '' },
        items: [
          {
            question: 'How long does it take to have a website built?',
            answer:
              'That depends on scope. A compact business website can move fast, while sites with custom features, more pages, or complex content take longer.',
          },
          {
            question: 'Do you always build in WordPress?',
            answer:
              'No. WordPress is often the best choice for MKB websites, but the platform should fit the business case. Custom work is possible where needed.',
          },
          {
            question: 'Can you also maintain the website after launch?',
            answer:
              'Yes. Support, updates, and further optimization can be part of the follow-up so the site keeps improving after launch.',
          },
          {
            question: 'Can you help if we already have an outdated website?',
            answer:
              'Yes. Replacing or rebuilding an outdated website is a common starting point, especially when the current site no longer supports trust, lead generation, or SEO.',
          },
        ],
      },
      related: {
        title: { prefix: 'Related', highlight: 'services', suffix: '' },
        subtitle: 'Useful next steps if you need more than a standard company website',
        moreInfoLabel: 'Learn more ->',
        cards: [
          { href: '/wordpress/maatwerk', title: 'WordPress custom work', description: 'For integrations, advanced functionality, and process-specific requirements.' },
          { href: '/wordpress/thema', title: 'WordPress theme setup', description: 'A faster route when a strong theme-based website fits the job.' },
          { href: '/services/web-development', title: 'Web development', description: 'Broader development support for platforms, websites, and technical builds.' },
          { href: '/contact', title: 'Request a proposal', description: 'Tell us what kind of website you need and we will scope the best route.' },
        ],
      },
    },
  },
  nl: {
    metadata: {
      title: 'Website Laten Maken | Professionele Bedrijfswebsite | Niblah',
      description:
        'Laat een professionele bedrijfswebsite maken door Niblah. Op maat ontworpen, vaak in WordPress, met sterke SEO-basis en gericht op vertrouwen, aanvragen en groei.',
      keywords:
        'website laten maken, website laten bouwen, zakelijke website laten maken, professionele website laten maken, website op maat laten maken, wordpress website laten maken, kosten website laten maken, website laten maken en onderhouden',
      openGraph: {
        title: 'Website Laten Maken | Niblah',
        description:
          'Professionele zakelijke websites voor bedrijven die meer vertrouwen, zichtbaarheid en leads willen.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'ZAKELIJKE WEBSITE LATEN MAKEN',
      title: 'Laat een zakelijke website maken die professioneel oogt en aanvragen oplevert',
      description:
        'Niblah bouwt bedrijfswebsites voor mkb-bedrijven die online sterker willen staan. Heldere positionering, goed design, sterke SEO-basis en meestal WordPress als dat de slimste route is.',
      ctaText: 'Vraag een website voorstel aan',
      ctaLink: '/contact',
      note: '* Meestal WordPress voor snelheid en flexibiliteit, maatwerk waar het echt waarde toevoegt',
      image: '/web dev services.png',
      imageAlt: 'Overzicht van website development services',
    },
    reasons: [
      {
        icon: '🏢',
        title: 'Gebouwd voor vertrouwen',
        description:
          'Je website moet direct uitstralen dat je bedrijf professioneel, betrouwbaar en serieus genoeg is om contact op te nemen.',
      },
      {
        icon: '⚡',
        title: 'Gebouwd voor snelheid en gebruiksgemak',
        description:
          'Snelle laadtijden, een logische structuur en een sterke mobiele ervaring zorgen dat bezoekers niet afhaken.',
      },
      {
        icon: '📈',
        title: 'Gebouwd voor zichtbaarheid en leads',
        description:
          'Van paginastructuur tot technische basis: de website wordt opgezet om SEO en conversie te ondersteunen.',
      },
    ],
    sections: {
      deliverables: {
        title: { prefix: 'Wat je krijgt als je een', highlight: 'website laat maken', suffix: 'door Niblah' },
        intro:
          'Een nieuwe website moet meer doen dan er goed uitzien. Hij moet je verkoop, marketing en dagelijkse operatie ondersteunen zonder onnodig zwaar te worden.',
        items: [
          'Een heldere structuur voor je diensten, aanbod en contactmomenten',
          'Een ontwerpstijl die past bij je bedrijf en doelgroep',
          'Responsive development voor mobiel, tablet en desktop',
          'Technische SEO-basis zoals nette headings, metadata en crawlbare pagina’s',
          'Formulieren, tracking en praktische koppelingen waar nodig',
          'Een beheersbare CMS-opzet zodat je team de site zelf kan bijhouden',
        ],
      },
      wordpress: {
        title: { prefix: 'Waarom', highlight: 'WordPress', suffix: 'vaak de slimste keuze is' },
        paragraphs: [
          'Voor veel mkb-bedrijven is WordPress de meest praktische manier om snel een professionele website neer te zetten zonder flexibiliteit te verliezen.',
          'Je houdt controle over pagina’s, content en SEO, terwijl er nog steeds ruimte is voor koppelingen, maatwerk en verdere groei.',
        ],
        bullets: [
          'Sneller live dan volledig maatwerk development',
          'Na livegang eenvoudig intern te beheren',
          'Flexibel genoeg voor SEO, formulieren, content en koppelingen',
          'Maatwerk blijft mogelijk waar jouw proces daar om vraagt',
        ],
      },
      pricing: {
        title: { prefix: 'Wat', highlight: 'kost', suffix: 'een website laten maken?' },
        intro:
          'Er bestaat geen serieuze vaste prijs die voor elk bedrijf klopt. De investering hangt af van wat de website voor jouw bedrijf moet doen.',
        factors: [
          'Het aantal pagina’s en de diepte van de content',
          'De behoefte aan maatwerk design en conversiegerichte copy',
          'Koppelingen met CRM, e-mailtools, agenda’s of andere systemen',
          'Custom functionaliteiten, portals, calculators of automatiseringen',
          'Onderhoud, support en doorlopende optimalisatie',
        ],
        closing:
          'De beste route is meestal een scherpe offerte op basis van je doelstellingen in plaats van een standaard pakket dat half past.',
      },
      process: {
        title: { prefix: 'Hoe het', highlight: 'proces', suffix: 'verloopt' },
        subtitle:
          'Een goed websiteproject blijft duidelijk van het eerste gesprek tot livegang en support.',
        steps: [
          { number: '1', title: 'Intake', description: 'We bepalen je doelen, doelgroep, aanbod en wat de site concreet moet opleveren.' },
          { number: '2', title: 'Structuur', description: 'We zetten eerst de belangrijkste pagina’s, boodschap en conversiepaden goed neer.' },
          { number: '3', title: 'Design & Bouw', description: 'De website wordt ontworpen en ontwikkeld met focus op snelheid, gebruiksgemak en SEO.' },
          { number: '4', title: 'Feedback & Livegang', description: 'We scherpen de laatste details aan, testen de basis en zetten de site strak live.' },
          { number: '5', title: 'Support', description: 'Na livegang kunnen we helpen met updates, verbeteringen en groeigericht vervolgwerk.' },
        ],
      },
      faq: {
        title: { prefix: 'Veelgestelde', highlight: 'vragen', suffix: '' },
        items: [
          {
            question: 'Hoe lang duurt een website laten maken?',
            answer:
              'Dat hangt af van de scope. Een compacte zakelijke website kan relatief snel staan, terwijl websites met meer pagina’s, maatwerk of complexe content meer tijd vragen.',
          },
          {
            question: 'Bouwen jullie altijd in WordPress?',
            answer:
              'Nee. WordPress is voor veel mkb-websites de beste keuze, maar het platform moet passen bij de businesscase. Waar nodig is maatwerk ook mogelijk.',
          },
          {
            question: 'Kunnen jullie de website ook beheren na livegang?',
            answer:
              'Ja. Support, updates en verdere optimalisatie kunnen onderdeel worden van het vervolgtraject zodat de site na livegang blijft verbeteren.',
          },
          {
            question: 'Kunnen jullie ook helpen als we al een verouderde website hebben?',
            answer:
              'Ja. Een bestaande site vervangen of opnieuw opbouwen is een veelvoorkomend startpunt, vooral als de huidige website niet meer helpt bij vertrouwen, leads of SEO.',
          },
        ],
      },
      related: {
        title: { prefix: 'Gerelateerde', highlight: 'services', suffix: '' },
        subtitle: 'Handige vervolgstappen als je meer nodig hebt dan een standaard bedrijfswebsite',
        moreInfoLabel: 'Meer info ->',
        cards: [
          { href: '/website-laten-maken-barneveld', title: 'Website laten maken Barneveld', description: 'Lokale landingspagina voor bedrijven in Barneveld die een professionele website nodig hebben.' },
          { href: '/wordpress/maatwerk', title: 'WordPress maatwerk', description: 'Voor koppelingen, geavanceerde functionaliteit en processen die niet standaard zijn.' },
          { href: '/wordpress/thema', title: 'WordPress thema', description: 'Een snellere route wanneer een sterke theme-based website voldoende is.' },
          { href: '/services/web-development', title: 'Web development', description: 'Breder development support voor websites, platformen en technische trajecten.' },
          { href: '/contact', title: 'Website offerte aanvragen', description: 'Vertel wat voor website je nodig hebt en we bepalen de slimste route.' },
        ],
      },
    },
  },
}

export function getWebsiteLatenMakenCopy(locale) {
  return getLocaleCopy(copy, locale)
}
