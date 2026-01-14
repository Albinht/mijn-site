import { getLocaleCopy } from '../utils';

const copy = {
  en: {
    metadata: {
      title: 'Outsource Remarketing | Convert Returning Visitors | Niblah',
      description:
        'Outsource remarketing to specialists? Reach visitors again with personalized ads that convert and lift ROI.',
      keywords: 'outsource remarketing, retargeting, remarketing ads, display retargeting, paid ads',
      openGraph: {
        title: 'Outsource Remarketing | Niblah',
        description: 'Remarketing campaigns that bring visitors back and convert.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: '70% higher conversion chance',
      title: 'Outsource remarketing',
      description:
        'When a consumer is exposed to remarketing, the chance to convert is 70% higher. Remarketing is personalized advertising that pulls website visitors back into the sales funnel. At Niblah we deploy remarketing that is not pushy, but effective.',
      ctaText: 'Schedule a free intro',
      ctaLink: '/contact',
      note: '* Average 2-3x higher conversion rate with remarketing',
      image: '/development-hero.png',
      imageAlt: 'Remarketing dashboard with campaign results',
    },
    expectations: {
      title: {
        prefix: 'What can you expect when',
        highlight: 'outsourcing remarketing',
        suffix: '?',
      },
      subtitle: 'You follow visitors. But do they convert?',
      cards: [
        {
          title: 'More profit from your ads',
          description:
            'Remarketing is the way to achieve a higher return on investment (ROI) with your ads. Reach visitors who already showed interest at lower cost.',
        },
        {
          title: 'Brand awareness',
          description:
            'With well aligned ads you make sure website visitors do not forget you quickly. Stay top of mind with your audience.',
        },
        {
          title: 'No hassle',
          description:
            'Niblah specialists handle remarketing campaigns while you focus on what you do best. Win win.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'What is',
        highlight: 'remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Remarketing (also called retargeting) is a form of targeted advertising that brings your company, products or services back to people who already showed interest.',
        'A user who visited your website likely has interest in what you offer. With a remarketing campaign you bring that back to them through ads.',
      ],
      callout: {
        title: 'Why remarketing?',
        paragraphs: [
          'Only a fraction of people convert on their first visit. There can be many reasons: they might be comparing stores, dinner burned, or the power went out.',
          'The result is the same: the buying process is interrupted. Your job is to kick start it again, so the customer returns to your website. That is exactly what remarketing does.',
        ],
      },
      lead:
        'Remarketing is a strong marketing technique to pull potential customers back into the sales funnel and lift your conversion rate.',
      closing:
        'Ads are targeted and personalized (but not too much, otherwise people feel uncomfortable) and therefore trigger users more than a regular ad. The user is activated faster. It can be the extra push to get someone over the line.',
    },
    practice: {
      title: {
        prefix: 'Remarketing',
        highlight: 'in practice',
        suffix: '',
      },
      subtitle: 'A practical example to make it concrete',
      scenarios: [
        {
          number: '1',
          title: 'The first visit',
          description:
            'You can barely see your garden path and decide it is time for a lawn mower. You search for "lawn mower" and land in a webshop. After some browsing you know which model you want. Then the dog wants a walk. You close your browser and stop your search.',
        },
        {
          number: '2',
          title: 'An extra push',
          description:
            'Two days later the long grass annoys you again. You search for "buy lawn mower" and the first thing you see is an ad from the site you visited last time. The ad shows the exact mower you liked. A bell rings. You click and 2 minutes later you check out.',
        },
        {
          number: '3',
          title: 'Forgot you needed a lawn mower?',
          description:
            'If you do not think about the grass again, you might see a banner ad on another site. The company shows a remarketing ad with your favorite mower. You are reminded you were shopping. Chances are you return and buy the mower.',
        },
      ],
      note:
        'Because you already visited the website, the company knew you were interested and in which model. Remarketing gives the perfect push to buy.',
    },
    howWorks: {
      title: {
        prefix: 'How does',
        highlight: 'remarketing',
        suffix: 'work?',
      },
      intro: 'Remarketing works like this:',
      steps: [
        {
          title: 'Step 1',
          description: 'Someone visits your website but leaves before converting',
        },
        {
          title: 'Step 2',
          description: 'You show targeted ads to that person on different platforms',
        },
        {
          title: 'Step 3',
          description: 'In the ideal case that person still buys from you',
        },
      ],
    },
    tags: {
      title: 'What are remarketing tags?',
      paragraphs: [
        'But how do your website and the ad platform remember who visited your website? With remarketing tags (also called remarketing pixels).',
        'A remarketing tag is a script you place on every page of your website. With this script, data about your visitors is stored anonymously in a remarketing list. Think of information such as:',
      ],
      bullets: [
        'Which products did someone view?',
        'Where did they come from?',
        'How long did they stay on your website?',
      ],
      closing:
        'With this information you can later target previous visitors with an ad. You can use segmentation to make ads as effective as possible.',
    },
    dynamic: {
      title: {
        prefix: 'What is',
        highlight: 'dynamic remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Dynamic remarketing goes one step further than regular remarketing. With dynamic remarketing you show the exact products a potential customer already viewed.',
        'With dynamic remarketing you follow exactly what visitors do and which pages they view. By using this information you can show very specific ads to these potential customers. You align the ad to the situation of an interested consumer.',
      ],
      example: {
        title: 'Example: Online clothing store',
        paragraphs: [
          'Do you run an online clothing store? Imagine someone only looked at sportswear, or searched for a specific brand. In that situation you show dynamic remarketing ads with sportswear or that brand.',
          'This triggers a previous visitor to return to your site and purchase this time. Much more effective than general ads.',
        ],
      },
    },
    channels: {
      title: {
        prefix: 'Remarketing',
        highlight: 'channels',
        suffix: '',
      },
      subtitle: 'There are different channels where you can show remarketing ads',
      items: [
        {
          title: 'Google Display Network (GDN)',
          description:
            'The GDN is an ad network of more than 2 million websites and hundreds of thousands of apps. Gmail and YouTube are also part of the GDN. You can set up remarketing campaigns via your Google Ads account.',
        },
        {
          title: 'RLSA (Search Ads)',
          description:
            'RLSA stands for Remarketing Lists for Search Ads. These remarketing ads appear in the same place as normal search ads, but only for people who already visited your website.',
        },
        {
          title: 'Facebook & Instagram',
          description:
            'With the Facebook Pixel on your website you can use remarketing to reach visitors via Facebook and Instagram. Perfect for a social media advertising strategy.',
        },
        {
          title: 'LinkedIn',
          description:
            'The LinkedIn Insight Tag enables remarketing ads on LinkedIn. Ideal if you are in a business market or want to run B2B ads.',
        },
        {
          title: 'YouTube',
          description:
            'Via Google Ads you can also show remarketing video ads on YouTube. Reach website visitors while they watch videos.',
        },
      ],
      scrollHint: 'Scroll for more',
    },
    tips: {
      title: {
        prefix: 'Practical',
        highlight: 'tips',
        suffix: 'for strong remarketing',
      },
      subtitle: 'Remarketing does not have to be annoying. Do it right like this:',
      items: [
        {
          title: 'Set a frequency cap',
          description:
            'Make sure someone sees a remarketing ad only a limited number of times per day or week. A new pair of pants can be an impulse purchase, but buying a car takes longer. Match frequency to your product and decision phase.',
        },
        {
          title: 'Exclude converters',
          description:
            'Exclude people who already converted from your remarketing campaigns. Nobody wants to keep seeing ads for products they already bought. Also important: do not keep remarketing for too long.',
        },
        {
          title: 'Not too personalized',
          description:
            'Too personalized is not good. Find the right balance between pleasant personalization and the feeling that someone just happens to see the right ad. If someone only showed interest in sneakers of brand X, also show sweaters of brand X or sneakers of brand Y.',
        },
        {
          title: 'Test and optimize',
          description:
            'Test different ad variants, budgets and targeting options. Monitor results and optimize continuously. What works for one product does not always work for another.',
        },
      ],
    },
    niblah: {
      title: {
        prefix: 'Outsource remarketing to',
        highlight: 'Niblah',
        suffix: '',
      },
      paragraphs: [
        'Want to start with remarketing but do not know where to begin? At Niblah we help you. As an online marketing agency we increase your conversion rate and revenue through effective remarketing that is not pushy.',
        'We also help with other parts of your online marketing. We have SEO specialists, SEA experts and CRO specialists in house and know social media marketing as well.',
      ],
      cards: [
        {
          title: 'Strategic remarketing',
          description:
            'We deploy remarketing strategically as part of your complete SEA strategy. Not as a standalone channel, but integrated with your other campaigns.',
        },
        {
          title: 'Data driven approach',
          description:
            'We continuously monitor which remarketing segments perform best and optimize based on concrete data and conversions.',
        },
        {
          title: 'Creative variation',
          description:
            'We test different ad variants and messages to see what works best for your audience and product.',
        },
        {
          title: 'ROI focus',
          description:
            'We focus on conversions and ROI, not on clicks. Remarketing should be profitable, not just bring visitors back.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Frequently asked',
        highlight: 'questions',
        suffix: '',
      },
      items: [
        {
          question: 'What is remarketing?',
          answer:
            'With remarketing you show targeted ads that bring your company, product or service back to someone who already showed interest. By reaching visitors again with relevant ads, you increase the chance of conversion significantly.',
        },
        {
          question: 'Why start with remarketing?',
          answer:
            'Remarketing increases conversion rate by pulling people who dropped out of the buying process back into the sales funnel. When someone sees remarketing ads, the chance of conversion is 70% higher. That makes remarketing one of the most effective forms of online advertising.',
        },
        {
          question: 'How does remarketing work?',
          answer:
            'Remarketing works by reaching people who already visited your website. This happens via a remarketing tag (also called a pixel) placed on your site. Visitors are placed in segments based on their behavior. You then show them a targeted message or offer aligned with their earlier interest.',
        },
        {
          question: 'What is dynamic remarketing?',
          answer:
            'Dynamic remarketing goes one step further than regular remarketing. With regular remarketing you bring your company or products back to attention, but with dynamic remarketing you highlight the specific products or services someone already showed interest in. This leads to more relevant ads and higher conversion rates.',
        },
        {
          question: 'On which channels can you use remarketing?',
          answer:
            'You can use remarketing on different channels. The Google Display Network (GDN) includes 2 million websites, 650,000 apps, Gmail and YouTube. You can also use RLSA remarketing in search ads, plus social media like Facebook, Instagram and LinkedIn. Each channel has its own remarketing tag you place on your site.',
        },
        {
          question: 'Is remarketing the same as retargeting?',
          answer:
            'Yes. Today the terms are used interchangeably. In the past retargeting referred to ads and remarketing to email, but since Google uses remarketing for retargeting ads, they now mean the same thing: reaching website visitors again with ads.',
        },
      ],
    },
  },
  nl: {
    metadata: {
      title: 'Remarketing uitbesteden | Niblah',
      description:
        'Remarketing uitbesteden aan specialisten? 70% hogere conversiekans door bezoekers opnieuw te bereiken. Gepersonaliseerde advertenties die converteren.',
      keywords: 'remarketing uitbesteden, retargeting, remarketing advertenties, remarketing bureau, sea',
      openGraph: {
        title: 'Remarketing uitbesteden | Niblah',
        description: 'Gepersonaliseerde remarketing die converteert.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: '70% hogere conversiekans',
      title: 'Remarketing uitbesteden',
      description:
        'Wordt een consument geconfronteerd met remarketing? Dan is de kans 70% groter dat hij tot conversie overgaat. Remarketing is een manier van gepersonaliseerd adverteren die websitebezoekers terug de sales funnel in trekt. Bij Niblah zetten we slimme remarketing in die niet opdringerig is, maar wel effectief.',
      ctaText: 'Plan gratis kennismaking',
      ctaLink: '/contact',
      note: '* Gemiddeld 2-3x hogere conversieratio met remarketing',
      image: '/development-hero.png',
      imageAlt: 'Remarketing dashboard met campagneresultaten',
    },
    expectations: {
      title: {
        prefix: 'Wat kun je verwachten bij',
        highlight: 'Remarketing uitbesteden',
        suffix: '?',
      },
      subtitle: 'Je volgt bezoekers. Maar converteren ze ook?',
      cards: [
        {
          title: 'Meer winst uit je advertenties',
          description:
            'Remarketing is de manier om een hogere return on investment (ROI) te realiseren met je advertenties. Bereik bezoekers die al interesse toonden tegen lagere kosten.',
        },
        {
          title: 'Naamsbekendheid',
          description:
            'Met goed afgestemde advertenties zorg je ervoor dat je websitebezoekers jou niet zo snel zullen vergeten. Top of mind blijven bij je doelgroep.',
        },
        {
          title: 'Geen omkijken naar',
          description:
            'De specialisten van Niblah regelen de remarketing campagnes voor jou, terwijl jij doet waar jij goed in bent. Win win situatie.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Wat is',
        highlight: 'remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Remarketing (ook wel retargeting genoemd) is een manier van gericht adverteren waarmee je je bedrijf, producten of diensten nogmaals onder de aandacht brengt van mensen die er al interesse in hebben getoond.',
        'Een gebruiker die jouw website heeft bezocht, heeft hoogstwaarschijnlijk interesse in wat jij aanbiedt. Met een remarketing campagne breng je dat nogmaals bij hem onder de aandacht in de vorm van advertenties.',
      ],
      callout: {
        title: 'Waarom remarketing?',
        paragraphs: [
          'Slechts een fractie van de mensen gaat bij het eerste bezoek aan een website al over tot conversie. Dat kan aan een heleboel dingen liggen: misschien zijn ze nog aan het vergelijken tussen verschillende webshops, brandde het eten aan of sloeg er een stop door.',
          'Het resultaat is hetzelfde: het aankoopproces wordt onderbroken. Aan jou de taak om er weer een kickstart aan te geven, zodat de klant terugkeert naar jouw website. En dat doe je met remarketing.',
        ],
      },
      lead:
        'Remarketing is een perfecte marketingtechniek om die potentiele klanten terug de sales funnel in te trekken en je conversieratio op te krikken.',
      closing:
        'De advertenties zijn doelgericht en gepersonaliseerd (maar niet te, anders worden consumenten er ongemakkelijk van) en triggeren de gebruiker daarom meer dan een reguliere advertentie. De consument wordt door zulke specifieke advertenties sneller geactiveerd. Het kan net dat beetje extra zijn om iemand over de streep te trekken.',
    },
    practice: {
      title: {
        prefix: 'Remarketing',
        highlight: 'in de praktijk',
        suffix: '',
      },
      subtitle: 'Een praktijkvoorbeeld om het concreet te maken',
      scenarios: [
        {
          number: '1',
          title: 'Het eerste bezoek',
          description:
            'Je ziet je door gras overgroeide tuinpad amper meer en besluit dat het tijd is voor een grasmaaier. Je googelt op "grasmaaier" en komt terecht op een webwinkel. Na wat rondklikken weet je welk type je wilt. Dan staat de hond je verwachtingsvol aan te kijken voor een wandeling. Je sluit je browser af en staakt je zoekactie.',
        },
        {
          number: '2',
          title: 'Een extra duwtje in de rug',
          description:
            'Twee dagen later erger je je weer aan het lange gras. Je googelt weer op "grasmaaier kopen" en het eerste wat je ziet, is een advertentie van de website waar je vorige keer op terechtkwam. De advertentie prijst precies de grasmaaier aan die jij op het oog had. Dat doet een belletje rinkelen. Je klikt op de advertentie en 2 minuten later reken je af.',
        },
        {
          number: '3',
          title: 'Was je vergeten dat je een grasmaaier nodig had?',
          description:
            'Als je twee dagen later niet opnieuw aan het gras denkt, zie je misschien een banner advertentie op een andere website. Het bedrijf vertoont daar een remarketing advertentie met jouw favoriete grasmaaier. Zo word je eraan herinnerd dat je bezig was met een aankoop. De kans is groot dat je opnieuw naar de website navigeert en daar je grasmaaier aanschaft.',
        },
      ],
      note:
        'Omdat je de website al bezocht had, wist het bedrijf dat je geinteresseerd bent en in welk specifiek model. Met remarketing krijg je het perfecte duwtje in de rug om toch te kopen.',
    },
    howWorks: {
      title: {
        prefix: 'Hoe werkt',
        highlight: 'remarketing',
        suffix: '?',
      },
      intro: 'Remarketing werkt als volgt:',
      steps: [
        {
          title: 'Stap 1',
          description:
            'Iemand bezoekt jouw website, maar gaat weg voordat hij tot conversie overgaat',
        },
        {
          title: 'Stap 2',
          description:
            'Jij stuurt gericht advertenties naar die persoon op verschillende platforms',
        },
        {
          title: 'Stap 3',
          description: 'In het ideale geval doet die persoon toch nog een aankoop bij jou',
        },
      ],
    },
    tags: {
      title: 'Wat zijn remarketing tags?',
      paragraphs: [
        'Maar hoe onthouden je website en het advertentieplatform wie er op jouw website is langsgekomen? Met remarketing tags (ook wel remarketing pixels genoemd).',
        'Een remarketing tag is een scriptje dat je op elke pagina van je website plaatst. Met dit scriptje worden de gegevens van je websitebezoekers geanonimiseerd opgeslagen in een remarketinglijst. Denk aan informatie zoals:',
      ],
      bullets: [
        'Welke producten heeft iemand bekeken?',
        'Waar kwam hij vandaan?',
        'Hoe lang hebben ze op jouw website rondgehangen?',
      ],
      closing:
        'Met deze informatie kun je je vroegere bezoekers later nog eens gericht benaderen met een advertentie. Je kunt met segmentatie aan de slag om de advertenties zo effectief mogelijk te maken.',
    },
    dynamic: {
      title: {
        prefix: 'Wat is',
        highlight: 'dynamische remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Dynamische remarketing gaat nog een stapje verder dan reguliere remarketing. Met dynamische remarketing toon je namelijk exact die producten waar een potentiele klant al interesse in heeft getoond.',
        'Met dynamische remarketing volg je precies wat bezoekers van je website doen en welke paginas ze bekijken. Door deze informatie slim in te zetten, kun je heel specifieke advertenties laten zien aan deze potentiele klanten. Je stemt de advertentie precies af op de situatie van een geinteresseerde consument.',
      ],
      example: {
        title: 'Voorbeeld: Online kledingzaak',
        paragraphs: [
          'Run je bijvoorbeeld een online kledingzaak? Stel dat iemand enkel naar sportkleding heeft gekeken, of alleen naar een bepaald merk heeft gezocht. In zo een situatie toon je met dynamische remarketing advertenties waarin sportkleding of dat bepaalde merk prominent aanwezig is.',
          'Zo trigger je een eerdere websitebezoeker om terug te keren naar jouw website en dit keer wel tot aankoop over te gaan. Veel effectiever dan algemene advertenties.',
        ],
      },
    },
    channels: {
      title: {
        prefix: 'Remarketing',
        highlight: 'kanalen',
        suffix: '',
      },
      subtitle: 'Er zijn verschillende kanalen waarop je remarketing advertenties kunt vertonen',
      items: [
        {
          title: 'Google Display Network (GDN)',
          description:
            'Het GDN is een advertentienetwerk van meer dan 2 miljoen websites en honderdduizenden apps. Ook Gmail en YouTube zijn onderdeel van het GDN. Via je Google Ads account kun je remarketingcampagnes opzetten.',
        },
        {
          title: 'RLSA (Search Ads)',
          description:
            'RLSA staat voor Remarketing Lists for Search Ads. Deze remarketing advertenties verschijnen op dezelfde plek als normale zoekmachine advertenties, maar alleen voor mensen die je website al bezochten.',
        },
        {
          title: 'Facebook & Instagram',
          description:
            'Met de Facebook Pixel op je website kun je remarketing inzetten om websitebezoekers te benaderen via Facebook en Instagram. Perfect voor social media advertising strategie.',
        },
        {
          title: 'LinkedIn',
          description:
            'De Insight Tag van LinkedIn geeft je de mogelijkheid om remarketingadvertenties op LinkedIn te laten zien. Ideaal als je in de zakelijke branche werkt of B2B advertenties wilt inzetten.',
        },
        {
          title: 'YouTube',
          description:
            'Via Google Ads kun je ook remarketing video advertenties tonen op YouTube. Bereik je websitebezoekers met visuele content terwijl ze videos kijken.',
        },
      ],
      scrollHint: 'Scroll voor meer',
    },
    tips: {
      title: {
        prefix: 'Praktische',
        highlight: 'tips',
        suffix: 'voor sterke remarketing',
      },
      subtitle: 'Remarketing hoeft niet irritant te zijn. Zo doe je het goed:',
      items: [
        {
          title: 'Stel een frequency cap in',
          description:
            'Zorg dat iemand maar een maximaal aantal keer per dag of per week een remarketing advertentie ziet. Een nieuwe broek kan een impulsaankoop zijn, maar een auto kopen duurt langer. Stem de frequency af op je product en de beslissingsfase.',
        },
        {
          title: 'Sluit converters uit',
          description:
            'Sluit mensen die al een conversie hebben gedaan uit van je remarketing campagnes. Niemand wil advertenties blijven zien voor producten die ze al gekocht hebben. Ook belangrijk: ga niet te lang door met remarketing advertenties.',
        },
        {
          title: 'Niet te gepersonaliseerd',
          description:
            'Te gepersonaliseerd is niet goed. Vind de juiste balans tussen prettige personalisatie en het gevoel dat iemand per ongeluk de juiste advertentie ziet. Heeft iemand alleen interesse getoond in sneakers van merk X? Toon dan ook truien van merk X of sneakers van merk Y.',
        },
        {
          title: 'Test en optimaliseer',
          description:
            'Test verschillende advertentievarianten, budgetten en targeting opties. Monitor de resultaten en optimaliseer continu. Wat werkt voor het ene product werkt niet altijd voor het andere.',
        },
      ],
    },
    niblah: {
      title: {
        prefix: 'Remarketing uitbesteden aan',
        highlight: 'Niblah',
        suffix: '',
      },
      paragraphs: [
        'Wil je aan de slag met remarketing, maar weet je niet waar je moet beginnen? Bij Niblah helpen we je graag. Als online marketing bureau verhogen we je conversieratio en omzet door middel van effectieve remarketing die niet opdringerig is.',
        'Daarnaast helpen we je ook met andere facetten van je online marketing. We hebben SEO specialisten, SEA experts en CRO specialisten in huis en weten ook het fijne van social media marketing.',
      ],
      cards: [
        {
          title: 'Strategische remarketing',
          description:
            'We zetten remarketing strategisch in als onderdeel van je complete SEA strategie. Niet als losstaand kanaal, maar geintegreerd met je andere campagnes.',
        },
        {
          title: 'Data gedreven aanpak',
          description:
            'We monitoren continu welke remarketing segmenten het beste presteren en optimaliseren op basis van concrete data en conversies.',
        },
        {
          title: 'Creatieve variatie',
          description:
            'We testen verschillende advertentievarianten en boodschappen om te zien wat het beste werkt voor jouw doelgroep en product.',
        },
        {
          title: 'ROI focus',
          description:
            'We focussen op conversies en ROI, niet op clicks. Remarketing moet winstgevend zijn, niet alleen bezoekers terugbrengen.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Veelgestelde',
        highlight: 'vragen',
        suffix: '',
      },
      items: [
        {
          question: 'Wat is remarketing?',
          answer:
            'Met remarketing vertoon je gerichte advertenties waarmee je jouw bedrijf, product of dienst nogmaals onder de aandacht brengt bij iemand die er al interesse in getoond heeft. Door websitebezoekers opnieuw te bereiken met relevante advertenties, vergroot je de kans op conversie aanzienlijk.',
        },
        {
          question: 'Waarom zou je beginnen met remarketing?',
          answer:
            'Met remarketing verhoog je de conversieratio van je online business door mensen die uit het aankoopproces zijn gestapt, terug de sales funnel in te trekken. Als iemand met remarketingadvertenties geconfronteerd wordt, is de kans 70% hoger dat hij converteert. Dit maakt remarketing een van de meest effectieve vormen van online adverteren.',
        },
        {
          question: 'Hoe werkt remarketing?',
          answer:
            'Remarketing werkt door het opnieuw benaderen van mensen die reeds je website bezochten. Dit gebeurt via een remarketing tag (ook wel pixel genoemd) die je op je website plaatst. Bezoekers worden in speciale segmenten bij elkaar gebracht op basis van hun gedrag. Vervolgens kun je die mensen opnieuw benaderen met een gerichte boodschap of aanbieding die aansluit bij hun eerdere interesse.',
        },
        {
          question: 'Wat is dynamische remarketing?',
          answer:
            'Dynamische remarketing gaat nog een stapje verder dan reguliere remarketing. Bij reguliere remarketing breng je alleen je bedrijf, merk of producten opnieuw onder de aandacht, maar bij dynamische remarketing vestig je opnieuw de aandacht op specifiek die producten of diensten waarin een consument al interesse heeft getoond. Dit zorgt voor veel relevantere en effectievere advertenties met hogere conversiepercentages.',
        },
        {
          question: 'Op welke kanalen kun je remarketing inzetten?',
          answer:
            'Remarketing kun je op verschillende kanalen inzetten. Het Google Display Network (GDN) bestaat uit 2 miljoen websites, 650000 apps, Gmail en YouTube. Ook kun je via Google Ads RLSA remarketing inzetten voor zoekmachine advertenties. Daarnaast kun je remarketing uitvoeren via social media zoals Facebook, Instagram en LinkedIn. Elk kanaal heeft zijn eigen remarketing tag die je op je website moet plaatsen.',
        },
        {
          question: 'Is remarketing hetzelfde als retargeting?',
          answer:
            'Ja, tegenwoordig worden deze twee termen door elkaar gebruikt. Vroeger ging retargeting vooral over gerichte advertenties en remarketing over emailmarketing, maar sinds Google ook het woord remarketing gebruikt voor retargeting advertenties via Google Ads, betekenen de twee termen in principe hetzelfde. Beide verwijzen naar het opnieuw bereiken van websitebezoekers met advertenties.',
        },
      ],
    },
  },
  de: {
    metadata: {
      title: 'Remarketing auslagern | Mehr Conversions mit Retargeting | Niblah',
      description:
        'Remarketing an Spezialisten auslagern? 70% hoehere Conversion Chance durch erneute Ansprache. Personalisierte Anzeigen die konvertieren.',
      keywords: 'remarketing auslagern, retargeting, remarketing anzeigen, display retargeting, sea',
      openGraph: {
        title: 'Remarketing auslagern | Niblah',
        description: 'Personalisierte Remarketing Kampagnen die konvertieren.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: '70% hoehere Conversion Chance',
      title: 'Remarketing auslagern',
      description:
        'Wenn ein Nutzer mit Remarketing in Kontakt kommt, ist die Chance 70% hoeher dass er konvertiert. Remarketing ist personalisierte Werbung die Website Besucher zurueck in den Sales Funnel zieht. Bei Niblah setzen wir Remarketing ein das nicht aufdringlich ist, aber effektiv.',
      ctaText: 'Kostenloses Kennenlernen',
      ctaLink: '/contact',
      note: '* Im Schnitt 2-3x hoehere Conversion Rate mit Remarketing',
      image: '/development-hero.png',
      imageAlt: 'Remarketing Dashboard mit Kampagnenergebnissen',
    },
    expectations: {
      title: {
        prefix: 'Was kannst du erwarten wenn du',
        highlight: 'Remarketing auslagerst',
        suffix: '?',
      },
      subtitle: 'Du verfolgst Besucher. Aber konvertieren sie auch?',
      cards: [
        {
          title: 'Mehr Gewinn aus deinen Anzeigen',
          description:
            'Remarketing ist der Weg zu hoeherem ROI mit deinen Anzeigen. Erreiche Besucher die bereits Interesse gezeigt haben zu geringeren Kosten.',
        },
        {
          title: 'Markenbekanntheit',
          description:
            'Mit gut abgestimmten Anzeigen sorgst du dafuer, dass Besucher dich nicht schnell vergessen. Bleib Top of Mind bei deiner Zielgruppe.',
        },
        {
          title: 'Kein Aufwand',
          description:
            'Die Spezialisten von Niblah kuemmern sich um Remarketing Kampagnen, waehrend du dich auf dein Kerngeschaeft konzentrierst. Win win.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Was ist',
        highlight: 'Remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Remarketing (auch Retargeting genannt) ist eine Form gezielter Werbung, mit der du dein Unternehmen, Produkte oder Services erneut Personen zeigst die bereits Interesse hatten.',
        'Ein Nutzer der deine Website besucht hat, hat wahrscheinlich Interesse an deinem Angebot. Mit einer Remarketing Kampagne bringst du es per Anzeigen erneut ins Blickfeld.',
      ],
      callout: {
        title: 'Warum Remarketing?',
        paragraphs: [
          'Nur ein kleiner Teil der Besucher konvertiert beim ersten Besuch. Gruende gibt es viele: sie vergleichen Shops, das Essen brannte an oder der Strom fiel aus.',
          'Das Ergebnis ist gleich: der Kaufprozess wird unterbrochen. Deine Aufgabe ist es ihn neu zu starten, damit der Kunde zurueckkommt. Genau das macht Remarketing.',
        ],
      },
      lead:
        'Remarketing ist eine starke Marketing Technik um potenzielle Kunden zurueck in den Sales Funnel zu holen und deine Conversion Rate zu steigern.',
      closing:
        'Die Anzeigen sind zielgerichtet und personalisiert (aber nicht zu stark, sonst fuehlen sich Nutzer unwohl) und triggern deshalb staerker als eine normale Anzeige. Nutzer werden schneller aktiviert. Es kann der letzte Schubs sein.',
    },
    practice: {
      title: {
        prefix: 'Remarketing',
        highlight: 'in der Praxis',
        suffix: '',
      },
      subtitle: 'Ein Praxisbeispiel das es greifbar macht',
      scenarios: [
        {
          number: '1',
          title: 'Der erste Besuch',
          description:
            'Du siehst deinen zugewachsenen Gartenweg kaum noch und entscheidest dich fuer einen Rasenmaeher. Du suchst nach "Rasenmaeher" und landest in einem Webshop. Nach etwas Stoebern weisst du welches Modell du willst. Dann will der Hund raus. Du schliesst den Browser und brichst die Suche ab.',
        },
        {
          number: '2',
          title: 'Ein extra Schubs',
          description:
            'Zwei Tage spaeter nervt dich das hohe Gras wieder. Du suchst nach "Rasenmaeher kaufen" und das erste was du siehst ist eine Anzeige vom Shop vom letzten Mal. Die Anzeige zeigt genau den Rasenmaeher den du wolltest. Ein Aha Moment. Du klickst und 2 Minuten spaeter ist der Kauf abgeschlossen.',
        },
        {
          number: '3',
          title: 'Vergessen dass du einen Rasenmaeher brauchst?',
          description:
            'Wenn du zwei Tage spaeter nicht mehr ans Gras denkst, siehst du vielleicht eine Banner Anzeige auf einer anderen Website. Das Unternehmen zeigt eine Remarketing Anzeige mit deinem favorisierten Rasenmaeher. Du wirst erinnert dass du kaufen wolltest. Die Chance ist gross dass du zurueckkehrst und kaufst.',
        },
      ],
      note:
        'Weil du die Website bereits besucht hast, weiss das Unternehmen dass du interessiert bist und welches Modell es ist. Remarketing gibt den perfekten Schubs zum Kauf.',
    },
    howWorks: {
      title: {
        prefix: 'Wie funktioniert',
        highlight: 'Remarketing',
        suffix: '?',
      },
      intro: 'Remarketing funktioniert so:',
      steps: [
        {
          title: 'Schritt 1',
          description: 'Jemand besucht deine Website, geht aber bevor er konvertiert',
        },
        {
          title: 'Schritt 2',
          description: 'Du zeigst dieser Person gezielte Anzeigen auf verschiedenen Plattformen',
        },
        {
          title: 'Schritt 3',
          description: 'Im Idealfall kauft die Person doch noch bei dir',
        },
      ],
    },
    tags: {
      title: 'Was sind Remarketing Tags?',
      paragraphs: [
        'Aber wie merken sich Website und Ad Plattform wer auf deiner Website war? Mit Remarketing Tags (auch Remarketing Pixel genannt).',
        'Ein Remarketing Tag ist ein Skript das du auf jeder Seite einbaust. Damit werden Daten der Besucher anonym in einer Remarketing Liste gespeichert. Zum Beispiel:',
      ],
      bullets: [
        'Welche Produkte hat jemand angesehen?',
        'Woher kam die Person?',
        'Wie lange blieb sie auf deiner Website?',
      ],
      closing:
        'Mit diesen Informationen kannst du fruehere Besucher spaeter gezielt mit Anzeigen ansprechen. Mit Segmentierung machst du Anzeigen so effektiv wie moeglich.',
    },
    dynamic: {
      title: {
        prefix: 'Was ist',
        highlight: 'dynamisches Remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Dynamisches Remarketing geht einen Schritt weiter als klassisches Remarketing. Du zeigst genau die Produkte die ein potenzieller Kunde bereits angeschaut hat.',
        'Du verfolgst genau was Besucher tun und welche Seiten sie ansehen. Mit diesen Daten kannst du sehr spezifische Anzeigen ausspielen. Die Anzeige ist exakt auf die Situation des Interessenten abgestimmt.',
      ],
      example: {
        title: 'Beispiel: Online Mode Shop',
        paragraphs: [
          'Du betreibst einen Online Mode Shop? Angenommen jemand schaut nur Sportkleidung an oder sucht nach einer bestimmten Marke. Dann zeigst du dynamische Anzeigen mit genau dieser Sportkleidung oder Marke.',
          'So bringst du fruehere Besucher zurueck auf die Website und sie kaufen dieses Mal. Deutlich effektiver als allgemeine Anzeigen.',
        ],
      },
    },
    channels: {
      title: {
        prefix: 'Remarketing',
        highlight: 'Kanaele',
        suffix: '',
      },
      subtitle: 'Es gibt verschiedene Kanaele fuer Remarketing Anzeigen',
      items: [
        {
          title: 'Google Display Network (GDN)',
          description:
            'Das GDN ist ein Anzeigen Netzwerk mit mehr als 2 Millionen Websites und hunderten Tausend Apps. Gmail und YouTube gehoeren dazu. Remarketing Kampagnen laufen ueber dein Google Ads Konto.',
        },
        {
          title: 'RLSA (Search Ads)',
          description:
            'RLSA steht fuer Remarketing Lists for Search Ads. Diese Anzeigen erscheinen wie normale Suchanzeigen, aber nur fuer Personen die deine Website bereits besucht haben.',
        },
        {
          title: 'Facebook & Instagram',
          description:
            'Mit dem Facebook Pixel kannst du Besucher ueber Facebook und Instagram erneut ansprechen. Perfekt fuer Social Media Advertising.',
        },
        {
          title: 'LinkedIn',
          description:
            'Der LinkedIn Insight Tag ermoeglicht Remarketing Anzeigen auf LinkedIn. Ideal fuer B2B oder Business Zielgruppen.',
        },
        {
          title: 'YouTube',
          description:
            'Ueber Google Ads kannst du auch Remarketing Video Anzeigen auf YouTube schalten. Erreiche Besucher mit visuellen Inhalten.',
        },
      ],
      scrollHint: 'Mehr anzeigen',
    },
    tips: {
      title: {
        prefix: 'Praktische',
        highlight: 'Tipps',
        suffix: 'fuer starkes Remarketing',
      },
      subtitle: 'Remarketing muss nicht nerven. So machst du es richtig:',
      items: [
        {
          title: 'Frequency Cap setzen',
          description:
            'Sorge dafuer dass jemand eine Remarketing Anzeige nur begrenzt oft pro Tag oder Woche sieht. Eine neue Hose kann ein Impulskauf sein, ein Auto braucht laenger. Passe die Frequenz an Produkt und Phase an.',
        },
        {
          title: 'Converter ausschliessen',
          description:
            'Schliesse Personen aus die bereits konvertiert haben. Niemand will Anzeigen fuer Produkte sehen die bereits gekauft wurden. Wichtig: Remarketing nicht zu lange laufen lassen.',
        },
        {
          title: 'Nicht zu personalisiert',
          description:
            'Zu personalisiert ist nicht gut. Finde die Balance zwischen angenehmer Personalisierung und dem Gefuehl dass jemand zufaellig die richtige Anzeige sieht. Interessierte sich jemand nur fuer Sneakers von Marke X, zeige auch Hoodies von Marke X oder Sneakers von Marke Y.',
        },
        {
          title: 'Testen und optimieren',
          description:
            'Teste verschiedene Anzeigenvarianten, Budgets und Targeting Optionen. Beobachte die Ergebnisse und optimiere kontinuierlich. Was fuer ein Produkt funktioniert, funktioniert nicht immer fuer ein anderes.',
        },
      ],
    },
    niblah: {
      title: {
        prefix: 'Remarketing auslagern an',
        highlight: 'Niblah',
        suffix: '',
      },
      paragraphs: [
        'Du willst mit Remarketing starten, weisst aber nicht wie? Bei Niblah helfen wir dir gern. Als Online Marketing Agentur steigern wir Conversion Rate und Umsatz durch effektives Remarketing das nicht aufdringlich ist.',
        'Wir helfen auch in anderen Bereichen des Online Marketings. Wir haben SEO Spezialisten, SEA Experten und CRO Spezialisten und kennen uns auch mit Social Media Marketing aus.',
      ],
      cards: [
        {
          title: 'Strategisches Remarketing',
          description:
            'Wir setzen Remarketing strategisch als Teil deiner gesamten SEA Strategie ein. Nicht als eigenes Tool, sondern integriert in deine anderen Kampagnen.',
        },
        {
          title: 'Data driven Ansatz',
          description:
            'Wir monitoren kontinuierlich welche Remarketing Segmente am besten performen und optimieren datenbasiert auf Conversions.',
        },
        {
          title: 'Kreative Variation',
          description:
            'Wir testen verschiedene Anzeigenvarianten und Botschaften um herauszufinden was fuer deine Zielgruppe am besten funktioniert.',
        },
        {
          title: 'ROI Fokus',
          description:
            'Wir fokussieren auf Conversions und ROI, nicht auf Klicks. Remarketing muss profitabel sein, nicht nur Besucher zurueckbringen.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Haeufig gestellte',
        highlight: 'Fragen',
        suffix: '',
      },
      items: [
        {
          question: 'Was ist Remarketing?',
          answer:
            'Mit Remarketing zeigst du gezielte Anzeigen um dein Unternehmen, Produkt oder Service erneut Personen zu zeigen die schon Interesse hatten. Indem du Besucher erneut ansprichst, erhoehst du die Conversion Chance deutlich.',
        },
        {
          question: 'Warum mit Remarketing starten?',
          answer:
            'Remarketing erhoeht die Conversion Rate indem es Personen die den Kaufprozess abgebrochen haben, zurueck in den Sales Funnel holt. Wenn jemand Remarketing Anzeigen sieht, ist die Conversion Chance 70% hoeher. Das macht Remarketing zu einer der effektivsten Online Werbeformen.',
        },
        {
          question: 'Wie funktioniert Remarketing?',
          answer:
            'Remarketing funktioniert durch erneute Ansprache von Personen die deine Website besucht haben. Das passiert ueber einen Remarketing Tag (Pixel) den du einbaust. Besucher werden nach Verhalten segmentiert und erhalten dann gezielte Botschaften oder Angebote basierend auf ihrem Interesse.',
        },
        {
          question: 'Was ist dynamisches Remarketing?',
          answer:
            'Dynamisches Remarketing geht einen Schritt weiter als normales Remarketing. Beim normalen Remarketing erinnerst du an Marke oder Produkt, bei dynamischem Remarketing zeigst du genau die Produkte die jemand angesehen hat. Das sorgt fuer relevantere Anzeigen und hoehere Conversion Rates.',
        },
        {
          question: 'Auf welchen Kanaelen kann ich Remarketing nutzen?',
          answer:
            'Remarketing ist auf verschiedenen Kanaelen moeglich. Das Google Display Network (GDN) umfasst 2 Millionen Websites, 650000 Apps, Gmail und YouTube. Du kannst RLSA in der Suche nutzen und auch Social Media wie Facebook, Instagram und LinkedIn. Jeder Kanal hat sein eigenes Remarketing Tag.',
        },
        {
          question: 'Ist Remarketing das gleiche wie Retargeting?',
          answer:
            'Ja, heute werden die Begriffe meist gleich verwendet. Frueher meinte Retargeting eher Ads und Remarketing eher Email, aber seit Google den Begriff Remarketing fuer Retargeting Ads nutzt, bedeuten sie praktisch das Gleiche: Besucher erneut mit Anzeigen erreichen.',
        },
      ],
    },
  },
  sv: {
    metadata: {
      title: 'Outsourca remarketing | Hogre konvertering | Niblah',
      description:
        'Outsourca remarketing till specialister? 70% hogre konverteringschans genom att na besokare igen. Personliga annonser som konverterar.',
      keywords: 'outsourca remarketing, retargeting, remarketing annonser, display retargeting, sea',
      openGraph: {
        title: 'Outsourca remarketing | Niblah',
        description: 'Personlig remarketing som konverterar.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: '70% hogre konverteringschans',
      title: 'Outsourca remarketing',
      description:
        'Nar en konsument exponeras for remarketing ar chansen 70% hogre att den konverterar. Remarketing ar personlig annonsering som drar webbplatsbesokare tillbaka in i sales funnel. Hos Niblah gor vi remarketing som inte ar paangande, men effektiv.',
      ctaText: 'Boka gratis intro',
      ctaLink: '/contact',
      note: '* I snitt 2-3x hogre konverteringsgrad med remarketing',
      image: '/development-hero.png',
      imageAlt: 'Remarketing dashboard med kampanjresultat',
    },
    expectations: {
      title: {
        prefix: 'Vad kan du forvanta dig nar du',
        highlight: 'outsourcar remarketing',
        suffix: '?',
      },
      subtitle: 'Du foljer besokare. Men konverterar de?',
      cards: [
        {
          title: 'Mer vinst fran dina annonser',
          description:
            'Remarketing ar sattet att fa hogre ROI pa dina annonser. Na besokare som redan visat intresse till lagre kostnad.',
        },
        {
          title: 'Varumarkeskannedom',
          description:
            'Med bra annonser gor du att besokare inte glommer dig snabbt. Var top of mind for din malgrupp.',
        },
        {
          title: 'Ingen huvudverk',
          description:
            'Niblahs specialister hanterar remarketing kampanjer medan du fokuserar pa det du gor bast. Win win.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Vad ar',
        highlight: 'remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Remarketing (kallas aven retargeting) ar riktad annonsering som tar ditt foretag, dina produkter eller tjanster tillbaka till personer som redan visat intresse.',
        'En besokare som varit pa din webbplats har troligen intresse for det du erbjuder. Med en remarketing kampanj paminner du dem via annonser.',
      ],
      callout: {
        title: 'Varfor remarketing?',
        paragraphs: [
          'Bara en liten andel konverterar vid forsta besoket. Orsaker kan vara att de jamfor butiker, maten brann fast eller strommen gick.',
          'Resultatet ar detsamma: koprocessen bryts. Din uppgift ar att ge den en ny start sa att kunden kommer tillbaka. Det ar precis vad remarketing gor.',
        ],
      },
      lead:
        'Remarketing ar en stark marketing teknik for att dra potentiella kunder tillbaka in i sales funnel och oka konverteringsgraden.',
      closing:
        'Annonserna ar riktade och personliga (men inte for mycket, annars kanner sig folk obekvama) och triggar darfor mer an vanliga annonser. Besokaren aktiveras snabbare. Det kan vara den extra knuffen.',
    },
    practice: {
      title: {
        prefix: 'Remarketing',
        highlight: 'i praktiken',
        suffix: '',
      },
      subtitle: 'Ett exempel som gor det konkret',
      scenarios: [
        {
          number: '1',
          title: 'Forsta besoket',
          description:
            'Du ser knappt din igenvuxna tradgardsgang och bestammer dig for en grasklippare. Du soker efter "grasklippare" och hamnar i en webbutik. Efter lite letande vet du vilket modell du vill ha. Sedan vill hunden ga ut. Du stanger webblasaren och avbryter sokningen.',
        },
        {
          number: '2',
          title: 'En extra knuff',
          description:
            'Tva dagar senare irriterar det langa grasset dig igen. Du soker efter "kopa grasklippare" och det forsta du ser ar en annons fran butiken du besokte forra gangen. Annonsen visar exakt modellen du gillade. Det ringer en klocka. Du klickar och 2 minuter senare ar kopet klart.',
        },
        {
          number: '3',
          title: 'Glomde du att du behovde en grasklippare?',
          description:
            'Om du inte tanker pa grasset igen, kan du se en banner pa en annan webbplats. Foretaget visar en remarketing annons med din favoritmodell. Du blir pamind om kopet. Chansen ar stor att du atervander och koper.',
        },
      ],
      note:
        'Eftersom du redan besokt webbplatsen visste foretaget att du var intresserad och av vilket modell. Remarketing ger den perfekta knuffen till kop.',
    },
    howWorks: {
      title: {
        prefix: 'Hur fungerar',
        highlight: 'remarketing',
        suffix: '?',
      },
      intro: 'Remarketing fungerar sa har:',
      steps: [
        {
          title: 'Steg 1',
          description: 'Nagon besoker din webbplats men lamnar innan konvertering',
        },
        {
          title: 'Steg 2',
          description: 'Du visar riktade annonser till personen pa olika plattformar',
        },
        {
          title: 'Steg 3',
          description: 'I idealfallet koper personen fortfarande av dig',
        },
      ],
    },
    tags: {
      title: 'Vad ar remarketing taggar?',
      paragraphs: [
        'Men hur minns webbplatsen och annonsplattformen vem som varit pa din webbplats? Med remarketing taggar (kallas aven remarketing pixels).',
        'En remarketing tagg ar ett script du placerar pa varje sida. Med detta sparas besokardata anonymt i en remarketing lista. Till exempel:',
      ],
      bullets: [
        'Vilka produkter tittade personen pa?',
        'Var kom personen ifran?',
        'Hur lange stannade de pa din webbplats?',
      ],
      closing:
        'Med denna information kan du senare rikta annonser till tidigare besokare. Du kan segmentera for att gora annonserna mer effektiva.',
    },
    dynamic: {
      title: {
        prefix: 'Vad ar',
        highlight: 'dynamisk remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Dynamisk remarketing gar ett steg langre an vanlig remarketing. Med dynamisk remarketing visar du exakt de produkter en potentiell kund redan tittat pa.',
        'Du foljer exakt vad besokare gor och vilka sidor de tittar pa. Med denna information kan du visa mycket specifika annonser till intresserade kunder. Annonsen matchar situationen.',
      ],
      example: {
        title: 'Exempel: Online kladbutik',
        paragraphs: [
          'Driver du en online kladbutik? Om nagon bara tittade pa sportklader eller sokte pa ett visst marke, kan du visa dynamiska annonser med sportklader eller det marke.',
          'Det triggar en tidigare besokare att komma tillbaka och kopa. Mycket effektivare an generella annonser.',
        ],
      },
    },
    channels: {
      title: {
        prefix: 'Remarketing',
        highlight: 'kanaler',
        suffix: '',
      },
      subtitle: 'Det finns flera kanaler dar du kan visa remarketing annonser',
      items: [
        {
          title: 'Google Display Network (GDN)',
          description:
            'GDN ar ett annonsnatverk med over 2 miljoner webbplatser och hundratusentals appar. Gmail och YouTube ingar. Du satter upp remarketing kampanjer via Google Ads.',
        },
        {
          title: 'RLSA (Search Ads)',
          description:
            'RLSA star for Remarketing Lists for Search Ads. Dessa annonser visas som vanliga sokannonser men endast for personer som redan besokt din webbplats.',
        },
        {
          title: 'Facebook & Instagram',
          description:
            'Med Facebook Pixel kan du rikta remarketing till besokare via Facebook och Instagram. Perfekt for social media annonsering.',
        },
        {
          title: 'LinkedIn',
          description:
            'LinkedIn Insight Tag gor det mojligt att visa remarketing annonser pa LinkedIn. Ideal for B2B eller business segment.',
        },
        {
          title: 'YouTube',
          description:
            'Via Google Ads kan du visa remarketing video annonser pa YouTube. Na besokare med visuellt innehall.',
        },
      ],
      scrollHint: 'Scrolla for mer',
    },
    tips: {
      title: {
        prefix: 'Praktiska',
        highlight: 'tips',
        suffix: 'for stark remarketing',
      },
      subtitle: 'Remarketing maste inte vara irriterande. Gor sa har:',
      items: [
        {
          title: 'Satt en frequency cap',
          description:
            'Se till att nagon bara ser en remarketing annons ett visst antal ganger per dag eller vecka. En ny byxa kan vara impulskop, men bilkop tar langre tid. Anpassa frekvensen efter produkt och beslutsfas.',
        },
        {
          title: 'Exkludera konverterare',
          description:
            'Exkludera personer som redan konverterat fran remarketing kampanjer. Ingen vill se annonser for produkter de redan koppt. Viktigt: fortsatt inte remarketing for lange.',
        },
        {
          title: 'Inte for personligt',
          description:
            'For personligt ar inte bra. Hitta balansen mellan personlig och obekvam. Om nagon bara visade intresse for sneakers av marke X, visa ocksa trojor av marke X eller sneakers av marke Y.',
        },
        {
          title: 'Testa och optimera',
          description:
            'Testa olika annonsvarianter, budgetar och targeting alternativ. Folj resultaten och optimera kontinuerligt. Det som fungerar for en produkt fungerar inte alltid for en annan.',
        },
      ],
    },
    niblah: {
      title: {
        prefix: 'Outsourca remarketing till',
        highlight: 'Niblah',
        suffix: '',
      },
      paragraphs: [
        'Vill du komma igang med remarketing men vet inte var du ska borja? Hos Niblah hjalper vi dig. Som online marketing byra okar vi konverteringsgrad och omsattning med effektiv remarketing som inte ar paangande.',
        'Vi hjalper ocksa med andra delar av din online marketing. Vi har SEO specialister, SEA experter och CRO specialister och kan social media marketing.',
      ],
      cards: [
        {
          title: 'Strategisk remarketing',
          description:
            'Vi anvander remarketing strategiskt som del av din kompletta SEA strategi. Inte som separat kanal, utan integrerat med dina andra kampanjer.',
        },
        {
          title: 'Data driven metod',
          description:
            'Vi overvakar kontinuerligt vilka remarketing segment som presterar bast och optimerar baserat pa data och konverteringar.',
        },
        {
          title: 'Kreativ variation',
          description:
            'Vi testar olika annonsvarianter och budskap for att se vad som fungerar bast for din malgrupp och produkt.',
        },
        {
          title: 'ROI fokus',
          description:
            'Vi fokuserar pa konverteringar och ROI, inte klick. Remarketing maste vara lonssam, inte bara ta tillbaka besokare.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Vanliga',
        highlight: 'fragor',
        suffix: '',
      },
      items: [
        {
          question: 'Vad ar remarketing?',
          answer:
            'Med remarketing visar du riktade annonser som tar ditt foretag, produkt eller tjanst tillbaka till personer som redan visat intresse. Genom att na besokare igen okar du konverteringschansen.',
        },
        {
          question: 'Varfor borja med remarketing?',
          answer:
            'Remarketing okar konverteringsgraden genom att dra tillbaka personer som lamnat kopprocessen. Nar nagon ser remarketing annonser ar chansen att konvertera 70% hogre. Det gor remarketing till en av de mest effektiva formerna av online annonsering.',
        },
        {
          question: 'Hur fungerar remarketing?',
          answer:
            'Remarketing fungerar genom att na personer som redan besokt din webbplats. Det sker via en remarketing tagg (pixel) som placeras pa webbplatsen. Besokare samlas i segment baserat pa beteende och far sedan riktade budskap eller erbjudanden.',
        },
        {
          question: 'Vad ar dynamisk remarketing?',
          answer:
            'Dynamisk remarketing gar ett steg langre an vanlig remarketing. Med vanlig remarketing visar du marke och produkter igen, men med dynamisk remarketing visar du exakt de produkter personen visat intresse for. Det ger mer relevanta annonser och hogre konverteringsgrad.',
        },
        {
          question: 'Vilka kanaler kan anvandas for remarketing?',
          answer:
            'Remarketing kan anvandas pa flera kanaler. Google Display Network (GDN) omfattar 2 miljoner webbplatser, 650000 appar, Gmail och YouTube. Du kan anvanda RLSA i sokannonser och social media som Facebook, Instagram och LinkedIn. Varje kanal har sin egen remarketing tagg.',
        },
        {
          question: 'Ar remarketing samma som retargeting?',
          answer:
            'Ja, idag anvands termerna pa samma satt. Tidigare betydde retargeting ads och remarketing email, men eftersom Google anvander remarketing for retargeting ads betyder de i praktiken samma sak: att na webbplatsbesokare igen med annonser.',
        },
      ],
    },
  },
  da: {
    metadata: {
      title: 'Outsource remarketing | Hojere konvertering | Niblah',
      description:
        'Outsource remarketing til specialister? 70% hoejere konverteringschance ved at na besoegende igen. Personlige annoncer der konverterer.',
      keywords: 'outsource remarketing, retargeting, remarketing annoncer, display retargeting, sea',
      openGraph: {
        title: 'Outsource remarketing | Niblah',
        description: 'Personlig remarketing der konverterer.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: '70% hoejere konverteringschance',
      title: 'Outsource remarketing',
      description:
        'Nar en forbruger ser remarketing, er chancen 70% hoejere for at konvertere. Remarketing er personlig annoncering der traekker websitebesoegende tilbage i sales funnel. Hos Niblah bruger vi remarketing som ikke er paatraengende, men effektiv.',
      ctaText: 'Planlaeg gratis intro',
      ctaLink: '/contact',
      note: '* I gennemsnit 2-3x hoejere konverteringsrate med remarketing',
      image: '/development-hero.png',
      imageAlt: 'Remarketing dashboard med kampagneresultater',
    },
    expectations: {
      title: {
        prefix: 'Hvad kan du forvente nar du',
        highlight: 'outsourcer remarketing',
        suffix: '?',
      },
      subtitle: 'Du foelger besoegende. Men konverterer de?',
      cards: [
        {
          title: 'Mere profit fra dine annoncer',
          description:
            'Remarketing er vejen til hoejere ROI pa dine annoncer. Na besoegende der allerede har vist interesse til lavere omkostning.',
        },
        {
          title: 'Brand awareness',
          description:
            'Med gode annoncer sikrer du at besoegende ikke glemmer dig hurtigt. Bliv top of mind hos din maalgruppe.',
        },
        {
          title: 'Ingen besvaer',
          description:
            'Niblahs specialister haandterer remarketing kampagner mens du fokuserer paa det du gor bedst. Win win.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Hvad er',
        highlight: 'remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Remarketing (ogsa kaldet retargeting) er maalrettet annoncering hvor du viser dit firma, produkter eller services igen til personer der allerede har vist interesse.',
        'En bruger der har besoegt din hjemmeside har sandsynligvis interesse i det du tilbyder. Med en remarketing kampagne minder du dem via annoncer.',
      ],
      callout: {
        title: 'Hvorfor remarketing?',
        paragraphs: [
          'Kun en lille del konverterer ved foerste besoeg. Der kan vaere mange arsager: de sammenligner webshops, maden braendte pa eller strommen gik.',
          'Resultatet er det samme: koebsprocessen bliver afbrudt. Din opgave er at kickstarte den igen sa kunden vender tilbage. Det er praecis hvad remarketing gor.',
        ],
      },
      lead:
        'Remarketing er en staerk marketing teknik til at traekke potentielle kunder tilbage i sales funnel og oege konverteringsraten.',
      closing:
        'Annoncerne er maalrettede og personlige (men ikke for meget, ellers foeles det ubehageligt) og trigger derfor brugere mere end normale annoncer. Brugeren aktiveres hurtigere. Det kan vaere den ekstra skub.',
    },
    practice: {
      title: {
        prefix: 'Remarketing',
        highlight: 'i praksis',
        suffix: '',
      },
      subtitle: 'Et eksempel der gor det konkret',
      scenarios: [
        {
          number: '1',
          title: 'Foerste besoeg',
          description:
            'Du ser knap din groede havesti og beslutter dig for en graesklipper. Du soeger efter "graesklipper" og ender i en webshop. Efter lidt kig ved du hvilket model du vil have. Saa vil hunden ud. Du lukker browseren og stopper din soegning.',
        },
        {
          number: '2',
          title: 'Et ekstra skub',
          description:
            'To dage senere irriterer det lange graes dig igen. Du soeger efter "kobe graesklipper" og det foerste du ser er en annonce fra webshoppen du besogte sidst. Annoncen viser netop den graesklipper du havde kig pa. Det ringer en klokke. Du klikker og 2 minutter senere er koebet afsluttet.',
        },
        {
          number: '3',
          title: 'Glemte du at du havde brug for en graesklipper?',
          description:
            'Hvis du to dage senere ikke taenker pa graesset igen, ser du maaske en bannerannonce pa en anden side. Virksomheden viser en remarketing annonce med din favorit graesklipper. Du bliver mindet om koebet. Chancen er stor for at du vender tilbage og koebet.',
        },
      ],
      note:
        'Fordi du allerede havde besoegt hjemmesiden, vidste virksomheden at du var interesseret og hvilket model. Remarketing giver det perfekte skub til koeb.',
    },
    howWorks: {
      title: {
        prefix: 'Hvordan fungerer',
        highlight: 'remarketing',
        suffix: '?',
      },
      intro: 'Remarketing fungerer saadan:',
      steps: [
        {
          title: 'Trin 1',
          description: 'En person besoeger din hjemmeside men gaer uden at konvertere',
        },
        {
          title: 'Trin 2',
          description: 'Du viser maalrettede annoncer til personen pa forskellige platforme',
        },
        {
          title: 'Trin 3',
          description: 'I bedste fald koeber personen alligevel hos dig',
        },
      ],
    },
    tags: {
      title: 'Hvad er remarketing tags?',
      paragraphs: [
        'Men hvordan husker din hjemmeside og annonceplatform hvem der har vaeret pa din side? Med remarketing tags (ogsa kaldet remarketing pixels).',
        'En remarketing tag er et script du placerer pa hver side. Det gemmer besoegdata anonymt i en remarketing liste. For eksempel:',
      ],
      bullets: [
        'Hvilke produkter har nogen set?',
        'Hvor kom de fra?',
        'Hvor lang tid blev de pa din hjemmeside?',
      ],
      closing:
        'Med disse data kan du senere maalsaette tidligere besoegende med en annonce. Du kan segmentere for at gore annoncerne sa effektive som muligt.',
    },
    dynamic: {
      title: {
        prefix: 'Hvad er',
        highlight: 'dynamisk remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Dynamisk remarketing gaar et skridt videre end almindelig remarketing. Du viser praecis de produkter en potentiel kunde allerede har set.',
        'Du foelger praecist hvad besoegende gor og hvilke sider de ser. Med denne information kan du vise meget specifikke annoncer til interesserede kunder. Annoncen matcher deres situation.',
      ],
      example: {
        title: 'Eksempel: Online tojbutik',
        paragraphs: [
          'Driver du en online tojbutik? Hvis nogen kun har kigget pa sportstoj eller et bestemt maerke, kan du vise dynamiske annoncer med sportstoj eller det maerke.',
          'Det trigger en tidligere besoegende til at vende tilbage og koebe. Meget mere effektivt end generelle annoncer.',
        ],
      },
    },
    channels: {
      title: {
        prefix: 'Remarketing',
        highlight: 'kanaler',
        suffix: '',
      },
      subtitle: 'Der findes flere kanaler hvor du kan vise remarketing annoncer',
      items: [
        {
          title: 'Google Display Network (GDN)',
          description:
            'GDN er et annoncenetvaerk med over 2 millioner websites og hundredtusindvis af apps. Gmail og YouTube er ogsaa med. Remarketing kampagner opsaettes via Google Ads.',
        },
        {
          title: 'RLSA (Search Ads)',
          description:
            'RLSA star for Remarketing Lists for Search Ads. Disse annoncer vises som normale soegeannoncer, men kun for personer der allerede har besoegt din hjemmeside.',
        },
        {
          title: 'Facebook & Instagram',
          description:
            'Med Facebook Pixel kan du na websitebesoegende via Facebook og Instagram. Perfekt til social media annoncering.',
        },
        {
          title: 'LinkedIn',
          description:
            'LinkedIn Insight Tag giver mulighed for remarketing annoncer pa LinkedIn. Ideelt til B2B eller business segmenter.',
        },
        {
          title: 'YouTube',
          description:
            'Via Google Ads kan du vise remarketing video annoncer pa YouTube. Na besoegende med visuelt indhold.',
        },
      ],
      scrollHint: 'Scroll for mere',
    },
    tips: {
      title: {
        prefix: 'Praktiske',
        highlight: 'tips',
        suffix: 'for staerk remarketing',
      },
      subtitle: 'Remarketing behoever ikke vaere irriterende. Gor det saadan:',
      items: [
        {
          title: 'Saet en frequency cap',
          description:
            'Sorg for at nogen kun ser en remarketing annonce et maksimum antal gange per dag eller uge. En ny buks kan vaere impulskob, men et bilkob tager laengere tid. Tilpas frekvensen til produkt og beslutsfase.',
        },
        {
          title: 'Udeluk convertere',
          description:
            'Udeluk personer der allerede har konverteret fra dine remarketing kampagner. Ingen vil se annoncer for produkter de allerede har koebt. Vigtigt: kor ikke remarketing for laenge.',
        },
        {
          title: 'Ikke for personlig',
          description:
            'For personlig er ikke godt. Find balancen mellem god personalisering og foelelsen af at se den rigtige annonce tilfaeldigt. Hvis nogen kun viste interesse for sneakers fra maerke X, vis ogsaa trojer fra maerke X eller sneakers fra maerke Y.',
        },
        {
          title: 'Test og optimer',
          description:
            'Test forskellige annoncevarianter, budgetter og targeting muligheder. Overvaag resultater og optimer kontinuerligt. Det der virker for et produkt, virker ikke altid for et andet.',
        },
      ],
    },
    niblah: {
      title: {
        prefix: 'Outsource remarketing til',
        highlight: 'Niblah',
        suffix: '',
      },
      paragraphs: [
        'Vil du i gang med remarketing men ved ikke hvor du skal starte? Hos Niblah hjaelper vi dig. Som online marketing bureau oger vi konverteringsrate og omsaetning med effektiv remarketing der ikke er paatraengende.',
        'Vi hjaelper ogsaa med andre dele af online marketing. Vi har SEO specialister, SEA eksperter og CRO specialister og kan social media marketing.',
      ],
      cards: [
        {
          title: 'Strategisk remarketing',
          description:
            'Vi bruger remarketing strategisk som del af din samlede SEA strategi. Ikke som separat kanal, men integreret med dine andre kampagner.',
        },
        {
          title: 'Data drevet tilgang',
          description:
            'Vi overvager kontinuerligt hvilke remarketing segmenter der performer bedst og optimerer baseret pa data og konverteringer.',
        },
        {
          title: 'Kreativ variation',
          description:
            'Vi tester forskellige annoncevarianter og budskaber for at se hvad der fungerer bedst for din maalgruppe og produkt.',
        },
        {
          title: 'ROI fokus',
          description:
            'Vi fokuserer pa konverteringer og ROI, ikke klik. Remarketing skal vaere profitabelt, ikke kun bringe besoegende tilbage.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Ofte stillede',
        highlight: 'sporgsmal',
        suffix: '',
      },
      items: [
        {
          question: 'Hvad er remarketing?',
          answer:
            'Med remarketing viser du maalrettede annoncer der bringer dit firma, produkt eller service tilbage til personer der allerede har vist interesse. Ved at na besoegende igen oger du konverteringschancen markant.',
        },
        {
          question: 'Hvorfor starte med remarketing?',
          answer:
            'Remarketing oger konverteringsraten ved at traekke personer der faldt ud af koebsprocessen tilbage i sales funnel. Nar nogen ser remarketing annoncer er chancen for konvertering 70% hoejere. Det gor remarketing til en af de mest effektive former for online annoncering.',
        },
        {
          question: 'Hvordan fungerer remarketing?',
          answer:
            'Remarketing fungerer ved at na personer der allerede har besoegt din hjemmeside. Det sker via en remarketing tag (pixel) som placeres pa siden. Besoegende samles i segmenter baseret pa adfaerd, og du viser dem derefter en relevant besked eller tilbud.',
        },
        {
          question: 'Hvad er dynamisk remarketing?',
          answer:
            'Dynamisk remarketing gaar et skridt videre end almindelig remarketing. Med almindelig remarketing viser du brand og produkter igen, men med dynamisk remarketing viser du praecis de produkter personen allerede har vist interesse for. Det giver mere relevante annoncer og hoejere konverteringsrate.',
        },
        {
          question: 'Hvilke kanaler kan bruges til remarketing?',
          answer:
            'Remarketing kan bruges pa flere kanaler. Google Display Network (GDN) omfatter 2 millioner websites, 650000 apps, Gmail og YouTube. Du kan bruge RLSA i soegeannoncer og social media som Facebook, Instagram og LinkedIn. Hver kanal har sin egen remarketing tag.',
        },
        {
          question: 'Er remarketing det samme som retargeting?',
          answer:
            'Ja, i dag bruges begreberne ofte ens. Tidligere betod retargeting ads og remarketing email, men siden Google bruger remarketing for retargeting ads, betyder de i praksis det samme: at na websitebesoegende igen med annoncer.',
        },
      ],
    },
  },
  fr: {
    metadata: {
      title: 'Externaliser remarketing | Plus de conversions | Niblah',
      description:
        'Externalisez remarketing a des specialistes? 70% plus de chance de conversion en atteignant a nouveau les visiteurs. Annonces personnalisees qui convertissent.',
      keywords: 'externaliser remarketing, retargeting, annonces remarketing, display retargeting, sea',
      openGraph: {
        title: 'Externaliser remarketing | Niblah',
        description: 'Remarketing personnalise qui convertit.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: '70% plus de chance de conversion',
      title: 'Externaliser remarketing',
      description:
        'Quand un consommateur est expose au remarketing, la chance de conversion est 70% plus elevee. Le remarketing est une publicite personnalisee qui ramene les visiteurs dans le sales funnel. Chez Niblah nous faisons du remarketing efficace sans etre intrusif.',
      ctaText: 'Planifier un appel gratuit',
      ctaLink: '/contact',
      note: '* En moyenne 2-3x plus de conversions avec remarketing',
      image: '/development-hero.png',
      imageAlt: 'Dashboard remarketing avec resultats de campagne',
    },
    expectations: {
      title: {
        prefix: 'Que pouvez vous attendre quand vous',
        highlight: 'externalisez remarketing',
        suffix: '?',
      },
      subtitle: 'Vous suivez les visiteurs. Mais convertissent ils?',
      cards: [
        {
          title: 'Plus de profit sur vos annonces',
          description:
            'Le remarketing est le moyen d obtenir un ROI plus eleve. Touchez des visiteurs qui ont deja montre un interet a moindre cout.',
        },
        {
          title: 'Notoriete de marque',
          description:
            'Avec des annonces bien alignees, les visiteurs ne vous oublient pas vite. Restez top of mind.',
        },
        {
          title: 'Zero tracas',
          description:
            'Les specialistes Niblah gerent vos campagnes remarketing pendant que vous faites ce que vous faites le mieux. Win win.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Qu est ce que',
        highlight: 'remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Le remarketing (aussi appele retargeting) est une publicite ciblee qui ramene votre entreprise, vos produits ou services vers des personnes deja interessees.',
        'Un utilisateur qui a visite votre site a probablement un interet pour votre offre. Avec une campagne remarketing vous le rappelez via des annonces.',
      ],
      callout: {
        title: 'Pourquoi le remarketing?',
        paragraphs: [
          'Seule une petite fraction convertit a la premiere visite. Il y a beaucoup de raisons: ils comparent des boutiques, le repas a brule ou il y a eu une panne.',
          'Le resultat est le meme: le processus d achat est interrompu. Votre role est de le relancer pour que le client revienne. C est exactement ce que fait le remarketing.',
        ],
      },
      lead:
        'Le remarketing est une technique marketing forte pour ramener des clients potentiels dans le sales funnel et augmenter le taux de conversion.',
      closing:
        'Les annonces sont ciblees et personnalisees (mais pas trop sinon les gens se sentent mal a l aise) et declenchent plus d action qu une annonce classique. Le visiteur est active plus vite. Cela peut etre le petit coup de pouce.',
    },
    practice: {
      title: {
        prefix: 'Remarketing',
        highlight: 'en pratique',
        suffix: '',
      },
      subtitle: 'Un exemple concret',
      scenarios: [
        {
          number: '1',
          title: 'La premiere visite',
          description:
            'Vous voyez a peine votre chemin de jardin envahi et decidez qu il est temps d acheter une tondeuse. Vous cherchez "tondeuse" et arrivez sur une boutique en ligne. Apres quelques clics vous savez quel modele vous voulez. Puis le chien veut sortir. Vous fermez le navigateur et arretez la recherche.',
        },
        {
          number: '2',
          title: 'Un petit coup de pouce',
          description:
            'Deux jours plus tard l herbe vous agace encore. Vous cherchez "acheter tondeuse" et la premiere chose que vous voyez est une annonce du site visite. L annonce montre exactement la tondeuse que vous aimiez. Cela vous rappelle. Vous cliquez et 2 minutes plus tard vous payez.',
        },
        {
          number: '3',
          title: 'Vous avez oublie que vous aviez besoin d une tondeuse?',
          description:
            'Si vous ne pensez plus a l herbe, vous verrez peut etre une bannere sur un autre site. L entreprise affiche une annonce remarketing avec votre tondeuse favorite. Vous etes rappele a l achat. Il est probable que vous reveniez acheter.',
        },
      ],
      note:
        'Parce que vous aviez deja visite le site, l entreprise savait que vous etiez interesse et quel modele. Le remarketing donne le coup de pouce parfait pour acheter.',
    },
    howWorks: {
      title: {
        prefix: 'Comment fonctionne',
        highlight: 'remarketing',
        suffix: '?',
      },
      intro: 'Le remarketing fonctionne ainsi:',
      steps: [
        {
          title: 'Etape 1',
          description: 'Quelqu un visite votre site mais part avant de convertir',
        },
        {
          title: 'Etape 2',
          description: 'Vous montrez des annonces ciblees a cette personne sur plusieurs plateformes',
        },
        {
          title: 'Etape 3',
          description: 'Idealement la personne achete quand meme',
        },
      ],
    },
    tags: {
      title: 'Que sont les tags de remarketing?',
      paragraphs: [
        'Mais comment votre site et la plateforme publicitaire se souviennent de qui a visite le site? Avec des tags remarketing (aussi appeles pixels).',
        'Un tag remarketing est un script place sur chaque page. Il enregistre de maniere anonyme les donnees des visiteurs dans une liste remarketing. Par exemple:',
      ],
      bullets: [
        'Quels produits ont ete consultes?',
        'D ou vient la personne?',
        'Combien de temps est elle restee sur le site?',
      ],
      closing:
        'Avec ces informations vous pouvez cibler les visiteurs plus tard avec une annonce. La segmentation rend les annonces plus efficaces.',
    },
    dynamic: {
      title: {
        prefix: 'Qu est ce que',
        highlight: 'remarketing dynamique',
        suffix: '?',
      },
      paragraphs: [
        'Le remarketing dynamique va plus loin que le remarketing classique. Vous montrez exactement les produits qu un client potentiel a deja vus.',
        'Vous suivez ce que les visiteurs font et les pages qu ils consultent. Avec ces donnees vous pouvez afficher des annonces tres specifiques. L annonce correspond a la situation de l interesse.',
      ],
      example: {
        title: 'Exemple: Boutique de vetements en ligne',
        paragraphs: [
          'Vous avez une boutique de vetements en ligne? Si quelqu un n a regarde que des vetements de sport ou une marque specifique, vous pouvez montrer des annonces dynamiques avec ces produits.',
          'Cela incite un ancien visiteur a revenir et acheter. Beaucoup plus efficace que des annonces generiques.',
        ],
      },
    },
    channels: {
      title: {
        prefix: 'Canaux de',
        highlight: 'remarketing',
        suffix: '',
      },
      subtitle: 'Il existe plusieurs canaux pour diffuser des annonces remarketing',
      items: [
        {
          title: 'Google Display Network (GDN)',
          description:
            'Le GDN est un reseau de plus de 2 millions de sites et des centaines de milliers d apps. Gmail et YouTube en font partie. Vous lancez des campagnes remarketing via Google Ads.',
        },
        {
          title: 'RLSA (Search Ads)',
          description:
            'RLSA signifie Remarketing Lists for Search Ads. Ces annonces apparaissent comme des annonces de recherche normales mais seulement pour les personnes ayant deja visite votre site.',
        },
        {
          title: 'Facebook & Instagram',
          description:
            'Avec le Facebook Pixel vous pouvez cibler les visiteurs via Facebook et Instagram. Parfait pour la publicite social media.',
        },
        {
          title: 'LinkedIn',
          description:
            'Le LinkedIn Insight Tag permet des annonces remarketing sur LinkedIn. Ideal pour le B2B.',
        },
        {
          title: 'YouTube',
          description:
            'Via Google Ads vous pouvez aussi diffuser des annonces video remarketing sur YouTube. Atteignez les visiteurs avec du contenu visuel.',
        },
      ],
      scrollHint: 'Scroll pour plus',
    },
    tips: {
      title: {
        prefix: 'Conseils',
        highlight: 'pratiques',
        suffix: 'pour un remarketing fort',
      },
      subtitle: 'Le remarketing ne doit pas etre agacant. Faites le bien:',
      items: [
        {
          title: 'Mettre une frequency cap',
          description:
            'Assurez vous qu une personne ne voit l annonce que quelques fois par jour ou semaine. Un pantalon peut etre un achat impulsif, une voiture prend plus de temps. Adaptez la frequence au produit.',
        },
        {
          title: 'Exclure les convertis',
          description:
            'Excluez les personnes qui ont deja converti. Personne ne veut voir des annonces pour un produit deja achete. Important: ne pas prolonger le remarketing trop longtemps.',
        },
        {
          title: 'Pas trop personalise',
          description:
            'Trop personnalise n est pas bon. Trouvez la bonne balance. Si quelqu un a montre de l interet pour des sneakers de marque X, montrez aussi des pulls de marque X ou des sneakers de marque Y.',
        },
        {
          title: 'Tester et optimiser',
          description:
            'Testez differentes variantes d annonces, budgets et options de ciblage. Suivez les resultats et optimisez en continu. Ce qui marche pour un produit ne marche pas toujours pour un autre.',
        },
      ],
    },
    niblah: {
      title: {
        prefix: 'Externaliser remarketing chez',
        highlight: 'Niblah',
        suffix: '',
      },
      paragraphs: [
        'Vous voulez demarrer le remarketing mais ne savez pas par ou commencer? Chez Niblah nous aidons. En tant qu agence marketing en ligne nous augmentons le taux de conversion et le chiffre d affaires avec un remarketing efficace et non intrusif.',
        'Nous aidons aussi sur d autres domaines du marketing en ligne. Nous avons des specialistes SEO, SEA et CRO et connaissons aussi le social media marketing.',
      ],
      cards: [
        {
          title: 'Remarketing strategique',
          description:
            'Nous deployons le remarketing comme partie de votre strategie SEA globale. Pas comme canal isole, mais integre avec vos autres campagnes.',
        },
        {
          title: 'Approche data driven',
          description:
            'Nous surveillons en continu quels segments remarketing performent le mieux et optimisons avec des donnees reelles.',
        },
        {
          title: 'Variation creative',
          description:
            'Nous testons differentes variantes et messages pour voir ce qui fonctionne le mieux pour votre audience et produit.',
        },
        {
          title: 'Focus ROI',
          description:
            'Nous nous concentrons sur conversions et ROI, pas sur les clics. Le remarketing doit etre rentable.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Questions',
        highlight: 'frequentes',
        suffix: '',
      },
      items: [
        {
          question: 'Qu est ce que le remarketing?',
          answer:
            'Avec le remarketing vous montrez des annonces ciblees qui ramennent votre entreprise, produit ou service a quelqu un qui a deja montre de l interet. En touchant les visiteurs a nouveau, vous augmentez la chance de conversion.',
        },
        {
          question: 'Pourquoi commencer avec le remarketing?',
          answer:
            'Le remarketing augmente le taux de conversion en ramenant les personnes qui ont quitte le processus d achat. Quand quelqu un voit des annonces remarketing, la chance de conversion est 70% plus elevee. C est une des formes les plus efficaces de publicite en ligne.',
        },
        {
          question: 'Comment fonctionne le remarketing?',
          answer:
            'Le remarketing fonctionne en atteignant des personnes qui ont deja visite votre site. Cela se fait via un tag remarketing (pixel) place sur le site. Les visiteurs sont groupes en segments selon leur comportement et recoivent des messages adaptes.',
        },
        {
          question: 'Qu est ce que le remarketing dynamique?',
          answer:
            'Le remarketing dynamique va plus loin que le remarketing classique. Avec le remarketing classique vous rappelez la marque, mais avec le dynamique vous montrez exactement les produits vus. Cela rend les annonces plus pertinentes et augmente les conversions.',
        },
        {
          question: 'Sur quels canaux utiliser le remarketing?',
          answer:
            'Le remarketing peut etre utilise sur plusieurs canaux. Google Display Network (GDN) couvre 2 millions de sites, 650000 apps, Gmail et YouTube. Vous pouvez aussi utiliser RLSA en recherche et les reseaux sociaux comme Facebook, Instagram et LinkedIn. Chaque canal a son propre tag.',
        },
        {
          question: 'Le remarketing est il le meme que le retargeting?',
          answer:
            'Oui, aujourd hui les termes sont utilises de maniere interchangeable. Avant, retargeting etait plutot les annonces et remarketing les emails, mais Google utilise remarketing pour les annonces retargeting. Les deux signifient atteindre les visiteurs a nouveau avec des annonces.',
        },
      ],
    },
  },
  it: {
    metadata: {
      title: 'Outsourcing remarketing | Piu conversioni | Niblah',
      description:
        'Outsourcing remarketing a specialisti? 70% di probabilita in piu di conversione raggiungendo i visitatori di nuovo. Annunci personalizzati che convertono.',
      keywords: 'outsourcing remarketing, retargeting, annunci remarketing, display retargeting, sea',
      openGraph: {
        title: 'Outsourcing remarketing | Niblah',
        description: 'Remarketing personalizzato che converte.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: '70% di probabilita in piu di conversione',
      title: 'Outsourcing remarketing',
      description:
        'Quando un consumatore viene esposto al remarketing, la probabilita di conversione e 70% piu alta. Il remarketing e pubblicita personalizzata che riporta i visitatori nel sales funnel. Con Niblah usiamo remarketing efficace senza essere invadenti.',
      ctaText: 'Prenota una intro gratuita',
      ctaLink: '/contact',
      note: '* In media 2-3x piu conversioni con remarketing',
      image: '/development-hero.png',
      imageAlt: 'Dashboard remarketing con risultati campagna',
    },
    expectations: {
      title: {
        prefix: 'Cosa puoi aspettarti quando',
        highlight: 'esternalizzi remarketing',
        suffix: '?',
      },
      subtitle: 'Segui i visitatori. Ma convertono?',
      cards: [
        {
          title: 'Piu profitto dalle tue ads',
          description:
            'Il remarketing e il modo per ottenere un ROI piu alto dalle tue ads. Raggiungi visitatori che hanno gia mostrato interesse a costi piu bassi.',
        },
        {
          title: 'Brand awareness',
          description:
            'Con annunci ben allineati fai in modo che i visitatori non ti dimentichino. Resta top of mind per il tuo pubblico.',
        },
        {
          title: 'Zero pensieri',
          description:
            'Gli specialisti Niblah gestiscono le campagne remarketing mentre tu fai cio che sai fare meglio. Win win.',
        },
      ],
    },
    whatIs: {
      title: {
        prefix: 'Che cos e',
        highlight: 'remarketing',
        suffix: '?',
      },
      paragraphs: [
        'Remarketing (detto anche retargeting) e pubblicita mirata che riporta la tua azienda, prodotti o servizi a persone che hanno gia mostrato interesse.',
        'Un utente che ha visitato il tuo sito ha probabilmente interesse per la tua offerta. Con una campagna remarketing glielo ricordi tramite annunci.',
      ],
      callout: {
        title: 'Perche remarketing?',
        paragraphs: [
          'Solo una piccola parte converte alla prima visita. Le ragioni possono essere molte: confronto tra negozi, la cena bruciata o un blackout.',
          'Il risultato e lo stesso: il processo di acquisto viene interrotto. Il tuo compito e riavviarlo affinche il cliente torni. Questo e esattamente il remarketing.',
        ],
      },
      lead:
        'Il remarketing e una tecnica di marketing forte per riportare potenziali clienti nel sales funnel e aumentare il tasso di conversione.',
      closing:
        'Gli annunci sono mirati e personalizzati (ma non troppo, altrimenti le persone si sentono a disagio) e quindi stimolano piu di un annuncio normale. L utente viene attivato piu rapidamente. Puo essere la spinta finale.',
    },
    practice: {
      title: {
        prefix: 'Remarketing',
        highlight: 'in pratica',
        suffix: '',
      },
      subtitle: 'Un esempio concreto',
      scenarios: [
        {
          number: '1',
          title: 'La prima visita',
          description:
            'Vedi a malapena il vialetto del giardino e decidi che e tempo di un tagliaerba. Cerchi "tagliaerba" e atterri su un ecommerce. Dopo un po di navigazione sai quale modello vuoi. Poi il cane vuole uscire. Chiudi il browser e interrompi la ricerca.',
        },
        {
          number: '2',
          title: 'Una spinta in piu',
          description:
            'Due giorni dopo l erba lunga ti infastidisce di nuovo. Cerchi "comprare tagliaerba" e la prima cosa che vedi e un annuncio del sito visitato. L annuncio mostra esattamente il modello che ti piaceva. Ti ricorda. Clicchi e 2 minuti dopo concludi l acquisto.',
        },
        {
          number: '3',
          title: 'Hai dimenticato che ti serviva un tagliaerba?',
          description:
            'Se non pensi piu all erba, potresti vedere un banner su un altro sito. L azienda mostra un annuncio remarketing con il tuo tagliaerba preferito. Ti ricordi che stavi acquistando. E probabile che tu torni e acquisti.',
        },
      ],
      note:
        'Poiche avevi gia visitato il sito, l azienda sapeva che eri interessato e quale modello. Il remarketing da la spinta perfetta per comprare.',
    },
    howWorks: {
      title: {
        prefix: 'Come funziona',
        highlight: 'remarketing',
        suffix: '?',
      },
      intro: 'Il remarketing funziona cosi:',
      steps: [
        {
          title: 'Step 1',
          description: 'Qualcuno visita il sito ma se ne va prima di convertire',
        },
        {
          title: 'Step 2',
          description: 'Mostri annunci mirati a quella persona su diverse piattaforme',
        },
        {
          title: 'Step 3',
          description: 'Nel migliore dei casi la persona compra comunque',
        },
      ],
    },
    tags: {
      title: 'Cosa sono i tag di remarketing?',
      paragraphs: [
        'Ma come fanno sito e piattaforma ads a ricordare chi ha visitato il sito? Con i tag di remarketing (detti anche pixel).',
        'Un tag di remarketing e uno script che inserisci su ogni pagina. Memorizza dati dei visitatori in modo anonimo in una lista remarketing. Ad esempio:',
      ],
      bullets: [
        'Quali prodotti ha guardato la persona?',
        'Da dove e arrivata?',
        'Quanto tempo ha passato sul sito?',
      ],
      closing:
        'Con queste informazioni puoi successivamente targetizzare i visitatori con un annuncio. La segmentazione rende gli annunci piu efficaci.',
    },
    dynamic: {
      title: {
        prefix: 'Che cos e',
        highlight: 'remarketing dinamico',
        suffix: '?',
      },
      paragraphs: [
        'Il remarketing dinamico va oltre il remarketing normale. Mostri esattamente i prodotti che un potenziale cliente ha gia visto.',
        'Segui esattamente cosa fanno i visitatori e quali pagine vedono. Con queste info puoi mostrare annunci molto specifici. L annuncio e allineato alla situazione dell interessato.',
      ],
      example: {
        title: 'Esempio: Negozio di abbigliamento online',
        paragraphs: [
          'Hai un negozio online di abbigliamento? Se qualcuno ha guardato solo abbigliamento sportivo o un marchio specifico, puoi mostrare annunci dinamici con quei prodotti.',
          'Questo spinge un visitatore precedente a tornare e acquistare. Molto piu efficace di annunci generici.',
        ],
      },
    },
    channels: {
      title: {
        prefix: 'Canali di',
        highlight: 'remarketing',
        suffix: '',
      },
      subtitle: 'Ci sono diversi canali dove puoi mostrare annunci remarketing',
      items: [
        {
          title: 'Google Display Network (GDN)',
          description:
            'Il GDN e una rete di oltre 2 milioni di siti e centinaia di migliaia di app. Gmail e YouTube ne fanno parte. Puoi impostare campagne remarketing tramite Google Ads.',
        },
        {
          title: 'RLSA (Search Ads)',
          description:
            'RLSA significa Remarketing Lists for Search Ads. Questi annunci appaiono come normali annunci di ricerca, ma solo per persone che hanno gia visitato il tuo sito.',
        },
        {
          title: 'Facebook & Instagram',
          description:
            'Con il Facebook Pixel puoi raggiungere i visitatori via Facebook e Instagram. Perfetto per social media advertising.',
        },
        {
          title: 'LinkedIn',
          description:
            'Il LinkedIn Insight Tag permette annunci remarketing su LinkedIn. Ideale per B2B o pubblico business.',
        },
        {
          title: 'YouTube',
          description:
            'Con Google Ads puoi mostrare annunci video remarketing su YouTube. Raggiungi i visitatori con contenuti visivi.',
        },
      ],
      scrollHint: 'Scorri per altro',
    },
    tips: {
      title: {
        prefix: 'Consigli',
        highlight: 'pratici',
        suffix: 'per un remarketing forte',
      },
      subtitle: 'Il remarketing non deve essere fastidioso. Ecco come:',
      items: [
        {
          title: 'Imposta un frequency cap',
          description:
            'Assicurati che una persona veda l annuncio solo un numero limitato di volte al giorno o alla settimana. Un paio di pantaloni puo essere un acquisto d impulso, un auto richiede piu tempo. Adatta la frequenza al prodotto e fase decisionale.',
        },
        {
          title: 'Escludi chi ha convertito',
          description:
            'Escludi persone che hanno gia convertito dalle campagne remarketing. Nessuno vuole vedere annunci di prodotti gia comprati. Importante: non prolungare troppo il remarketing.',
        },
        {
          title: 'Non troppo personalizzato',
          description:
            'Troppo personalizzato non va bene. Trova il giusto equilibrio. Se qualcuno ha mostrato interesse solo per sneakers del brand X, mostra anche felpe del brand X o sneakers del brand Y.',
        },
        {
          title: 'Testa e ottimizza',
          description:
            'Testa varianti di annunci, budget e opzioni di targeting. Monitora i risultati e ottimizza continuamente. Quello che funziona per un prodotto non funziona sempre per un altro.',
        },
      ],
    },
    niblah: {
      title: {
        prefix: 'Outsourcing remarketing a',
        highlight: 'Niblah',
        suffix: '',
      },
      paragraphs: [
        'Vuoi iniziare con il remarketing ma non sai da dove partire? Con Niblah ti aiutiamo. Come agenzia di marketing online aumentiamo conversioni e fatturato con remarketing efficace e non invadente.',
        'Aiutiamo anche con altre parti del marketing online. Abbiamo specialisti SEO, esperti SEA e specialisti CRO e conosciamo anche il social media marketing.',
      ],
      cards: [
        {
          title: 'Remarketing strategico',
          description:
            'Usiamo il remarketing in modo strategico come parte della tua strategia SEA completa. Non come canale isolato, ma integrato con le altre campagne.',
        },
        {
          title: 'Approccio data driven',
          description:
            'Monitoriamo costantemente quali segmenti remarketing performano meglio e ottimizziamo sulla base dei dati e delle conversioni.',
        },
        {
          title: 'Variazione creativa',
          description:
            'Testiamo diverse varianti di annunci e messaggi per capire cosa funziona meglio per il tuo pubblico e prodotto.',
        },
        {
          title: 'Focus ROI',
          description:
            'Ci concentriamo su conversioni e ROI, non su click. Il remarketing deve essere profittevole, non solo riportare visitatori.',
        },
      ],
    },
    faq: {
      title: {
        prefix: 'Domande',
        highlight: 'frequenti',
        suffix: '',
      },
      items: [
        {
          question: 'Che cos e il remarketing?',
          answer:
            'Con il remarketing mostri annunci mirati che riportano la tua azienda, prodotto o servizio a persone che hanno gia mostrato interesse. Raggiungendo i visitatori di nuovo aumenti la probabilita di conversione.',
        },
        {
          question: 'Perche iniziare con il remarketing?',
          answer:
            'Il remarketing aumenta il tasso di conversione riportando persone che hanno abbandonato il processo di acquisto nel sales funnel. Quando qualcuno vede annunci remarketing, la probabilita di conversione e 70% piu alta. Questo rende il remarketing una delle forme piu efficaci di advertising online.',
        },
        {
          question: 'Come funziona il remarketing?',
          answer:
            'Il remarketing funziona raggiungendo persone che hanno gia visitato il tuo sito. Avviene tramite un tag remarketing (pixel) installato sul sito. I visitatori vengono segmentati in base al comportamento e ricevono messaggi o offerte mirate.',
        },
        {
          question: 'Che cos e il remarketing dinamico?',
          answer:
            'Il remarketing dinamico va oltre il remarketing normale. Con il remarketing normale richiami brand o prodotti, con il dinamico mostri esattamente i prodotti visti. Questo rende gli annunci piu rilevanti e aumenta le conversioni.',
        },
        {
          question: 'Su quali canali usare il remarketing?',
          answer:
            'Il remarketing puo essere usato su diversi canali. Google Display Network (GDN) include 2 milioni di siti, 650000 app, Gmail e YouTube. Puoi usare RLSA nella ricerca e social media come Facebook, Instagram e LinkedIn. Ogni canale ha il proprio tag.',
        },
        {
          question: 'Remarketing e retargeting sono la stessa cosa?',
          answer:
            'Si, oggi i termini si usano in modo simile. In passato retargeting indicava ads e remarketing email, ma da quando Google usa remarketing per le ads di retargeting, in pratica significano lo stesso: raggiungere di nuovo i visitatori con annunci.',
        },
      ],
    },
  },
};

export function getSEARemarketingPageCopy(locale) {
  return getLocaleCopy(copy, locale);
}
