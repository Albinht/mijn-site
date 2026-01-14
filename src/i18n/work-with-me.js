import { getLocaleCopy } from './utils';

const copy = {
  en: {
    metadata: {
      title: 'Work With Me | Digital Marketing Services & Pricing - Niblah',
      description: 'Ready to grow your business? Discover my digital marketing services, pricing packages, and book a consultation. SEO, Google Ads, and complete marketing solutions.',
      keywords: 'work with digital marketing expert, marketing services pricing, SEO consultant, Google Ads management, marketing consultation, hire marketing expert',
      openGraph: {
        title: 'Work With Me | Digital Marketing Services & Pricing',
        description: 'Ready to grow your business? Discover my digital marketing services, pricing packages, and book a consultation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Available for new projects',
      title: {
        prefix: "Let's",
        highlight: 'transform',
        suffix: 'your business together',
      },
      description:
        'Ready to dominate Google and scale profitably? I specialize in delivering measurable results through proven SEO, Google Ads, and conversion optimization strategies.',
      bullets: [
        {
          title: 'Proven Track Record',
          description: '100+ businesses scaled with measurable ROI',
        },
        {
          title: 'Data-Driven Approach',
          description: 'Transparent reporting and continuous optimization',
        },
        {
          title: 'Personal Partnership',
          description: 'Direct access and dedicated support',
        },
      ],
      cta: 'Work with me →',
    },
    images: {
      graphAlt: 'Marketing growth results',
      avatarAlt: 'Albin Hot',
    },
    services: {
      title: {
        prefix: 'How I',
        highlight: 'will',
        suffix: 'help your business',
      },
      subtitle: 'Choose the partnership level that fits your business needs',
      cards: [
        {
          title: 'SEO Services',
          price: '€995',
          priceSuffix: '/month',
          description: 'Get your website to #1 in Google with proven SEO strategies.',
          bullets: [
            'Complete SEO audit & strategy',
            'Technical optimization',
            'Content creation & optimization',
            'Monthly reporting',
          ],
        },
        {
          badge: 'Most Popular',
          title: 'Google Ads + SEO',
          price: '€2,500',
          priceSuffix: '/month',
          description: 'Complete digital marketing with SEO and profitable Google Ads.',
          bullets: [
            'Everything in SEO Services',
            'Google Ads management',
            'Landing page optimization',
            'Weekly performance reviews',
          ],
        },
        {
          title: 'Full Service',
          price: 'Custom',
          description: 'Complete digital marketing strategy for larger businesses.',
          bullets: [
            'SEO + Google Ads + CRO',
            'Email marketing setup',
            'Analytics & tracking',
            'Dedicated support',
          ],
        },
      ],
    },
    reviewSlider: {
      title: "The reviews don't lie",
      reviews: [
        {
          name: 'Watzalikken',
          rating: 5,
          text: 'This course gave me exactly what I needed — no fluff, no fake promises. Just real, actionable steps that helped me get results within weeks. Highly recommended.',
        },
        {
          name: 'Buurman & Buurman',
          rating: 5,
          text: 'I had issues understanding how to fix my site’s Core Web Vitals, but the course broke it all down in a super simple way. I finally feel in control of my SEO.',
        },
        {
          name: 'Rijschool Campus',
          rating: 5,
          text: 'After watching the first module, I had a call with Albin. One week later I published my first optimized page. Seven months later, I’m #1 for my main keyword.',
        },
        {
          name: 'Herbalife',
          rating: 5,
          text: 'Hands down the best SEO course I’ve taken. Clear videos, fast support, and actual strategies that work — not theory. I even got help on a Sunday.',
        },
        {
          name: 'ShoeSupply',
          rating: 5,
          text: 'Since applying what I learned in the course, our traffic and revenue have both grown massively. This is the SEO knowledge I wish I had years ago.',
        },
        {
          name: 'Plasticz',
          rating: 4.5,
          text: 'I’m really happy with the way this course was structured. Stefan lays out a clear roadmap and keeps it simple. It’s not just info — it’s action.',
        },
      ],
      moreReviews: [
        {
          name: 'TechStart',
          rating: 5,
          text: 'Amazing course! I went from page 2 to position #1 in 3 months. The SEO techniques are clear and actually work — even in a competitive niche.',
        },
        {
          name: 'WebWinkel Pro',
          rating: 5,
          text: 'This course tripled our online sales. Straightforward explanations, no filler content, and a system that delivers fast.',
        },
        {
          name: 'LocalBusiness',
          rating: 4.5,
          text: 'Thanks to the local SEO strategy in the course, we now get way more walk-in clients. Paid for itself in just two months.',
        },
        {
          name: 'E-commerce Expert',
          rating: 5,
          text: 'The technical SEO tips in this course were game-changing. Our site loads faster, ranks higher, and we’re getting more conversions.',
        },
        {
          name: 'Marketing Agency',
          rating: 5,
          text: 'We use this course to train our new team members. It’s clear, practical, and aligned with what actually works in 2025.',
        },
        {
          name: 'Online Shop',
          rating: 4.5,
          text: 'Our visibility improved, traffic grew, and we finally see consistent conversions. This isn’t just a course — it’s a blueprint.',
        },
      ],
    },
    cta: {
      title: {
        prefix: 'Ready to',
        highlight: 'scale',
        suffix: 'your business?',
      },
      description:
        "Book a free consultation and let's discuss how I can help you achieve your growth goals",
      iframeTitle: 'Schedule a consultation',
      urgentLabel: 'Urgent questions?',
      whatsappLabel: 'WhatsApp: +31 6 48728828',
    },
  },
  nl: {
    metadata: {
      title: 'Werk met mij | Digital marketing services & prijzen - Niblah',
      description:
        'Klaar om te groeien? Ontdek mijn digital marketing services, tarieven en plan een consult. SEO, Google Ads en complete marketingoplossingen.',
      keywords:
        'werk met marketing expert, marketing diensten tarieven, SEO consultant, Google Ads beheer, marketing consult, marketing expert inhuren',
      openGraph: {
        title: 'Werk met mij | Digital marketing services & prijzen',
        description:
          'Klaar om te groeien? Ontdek mijn digital marketing services, tarieven en plan een consult.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Beschikbaar voor nieuwe projecten',
      title: {
        prefix: 'Laten we samen je bedrijf',
        highlight: 'transformeren',
        suffix: '',
      },
      description:
        'Klaar om Google te domineren en winstgevend te schalen? Ik lever meetbare resultaten met bewezen SEO, Google Ads en conversie-optimalisatie strategieen.',
      bullets: [
        {
          title: 'Bewezen trackrecord',
          description: '100+ bedrijven opgeschaald met meetbare ROI',
        },
        {
          title: 'Data-gedreven aanpak',
          description: 'Transparante rapportages en continue optimalisatie',
        },
        {
          title: 'Persoonlijke samenwerking',
          description: 'Directe toegang en toegewijde support',
        },
      ],
      cta: 'Werk met mij →',
    },
    images: {
      graphAlt: 'Marketing groei resultaten',
      avatarAlt: 'Albin Hot',
    },
    services: {
      title: {
        prefix: 'Hoe ik je bedrijf',
        highlight: 'ga',
        suffix: 'helpen',
      },
      subtitle: 'Kies het samenwerkingsniveau dat past bij jouw business',
      cards: [
        {
          title: 'SEO Diensten',
          price: '€995',
          priceSuffix: '/maand',
          description: 'Breng je website naar #1 in Google met bewezen SEO-strategieen.',
          bullets: [
            'Complete SEO audit & strategie',
            'Technische optimalisatie',
            'Content creatie & optimalisatie',
            'Maandelijkse rapportage',
          ],
        },
        {
          badge: 'Meest gekozen',
          title: 'Google Ads + SEO',
          price: '€2,500',
          priceSuffix: '/maand',
          description: 'Complete digitale marketing met SEO en winstgevende Google Ads.',
          bullets: [
            'Alles uit SEO diensten',
            'Google Ads beheer',
            'Landingpagina optimalisatie',
            'Wekelijkse performance reviews',
          ],
        },
        {
          title: 'Full Service',
          price: 'Op maat',
          description: 'Complete digitale marketingstrategie voor grotere bedrijven.',
          bullets: [
            'SEO + Google Ads + CRO',
            'Email marketing setup',
            'Analytics & tracking',
            'Toegewijde support',
          ],
        },
      ],
    },
    reviewSlider: {
      title: 'De reviews liegen niet',
      reviews: [
        {
          name: 'Watzalikken',
          rating: 5,
          text: 'Deze cursus gaf me precies wat ik nodig had — geen fluff, geen loze beloftes. Gewoon echte, toepasbare stappen die me binnen weken resultaat gaven. Aanrader.',
        },
        {
          name: 'Buurman & Buurman',
          rating: 5,
          text: 'Ik had moeite met de Core Web Vitals van mijn site, maar de cursus legde het super simpel uit. Eindelijk voel ik me in controle over mijn SEO.',
        },
        {
          name: 'Rijschool Campus',
          rating: 5,
          text: 'Na de eerste module had ik een call met Albin. Een week later publiceerde ik mijn eerste geoptimaliseerde pagina. Zeven maanden later sta ik #1 op mijn hoofdzoekwoord.',
        },
        {
          name: 'Herbalife',
          rating: 5,
          text: 'Veruit de beste SEO-cursus die ik heb gevolgd. Heldere videos, snelle support en strategieen die echt werken — geen theorie. Ik kreeg zelfs op zondag hulp.',
        },
        {
          name: 'ShoeSupply',
          rating: 5,
          text: 'Sinds we toepassen wat ik in de cursus leerde, zijn verkeer en omzet enorm gegroeid. Dit is de SEO-kennis die ik jaren eerder had willen hebben.',
        },
        {
          name: 'Plasticz',
          rating: 4.5,
          text: 'Ik ben erg blij met de opbouw van deze cursus. Stefan geeft een duidelijke roadmap en houdt het simpel. Het is niet alleen info — het is actie.',
        },
      ],
      moreReviews: [
        {
          name: 'TechStart',
          rating: 5,
          text: 'Geweldige cursus! Ik ging van pagina 2 naar positie #1 in 3 maanden. De SEO-technieken zijn duidelijk en werken echt — zelfs in een concurrerende niche.',
        },
        {
          name: 'WebWinkel Pro',
          rating: 5,
          text: 'Deze cursus verdrievoudigde onze online sales. Duidelijke uitleg, geen vulling, en een systeem dat snel resultaat geeft.',
        },
        {
          name: 'LocalBusiness',
          rating: 4.5,
          text: 'Dankzij de lokale SEO-strategie uit de cursus krijgen we veel meer winkelbezoekers. Binnen twee maanden terugverdiend.',
        },
        {
          name: 'E-commerce Expert',
          rating: 5,
          text: 'De technische SEO-tips in deze cursus waren game-changing. Onze site laadt sneller, scoort hoger en we krijgen meer conversies.',
        },
        {
          name: 'Marketing Agency',
          rating: 5,
          text: 'We gebruiken deze cursus om nieuwe teamleden te trainen. Het is helder, praktisch en sluit aan bij wat in 2025 echt werkt.',
        },
        {
          name: 'Online Shop',
          rating: 4.5,
          text: 'Onze zichtbaarheid verbeterde, traffic groeide en we zien eindelijk consistente conversies. Dit is niet alleen een cursus — het is een blueprint.',
        },
      ],
    },
    cta: {
      title: {
        prefix: 'Klaar om je bedrijf te',
        highlight: 'schalen',
        suffix: '?',
      },
      description:
        'Plan een gratis consult en bespreek hoe ik je kan helpen je groeidoelen te behalen',
      iframeTitle: 'Plan een consult',
      urgentLabel: 'Vragen met spoed?',
      whatsappLabel: 'WhatsApp: +31 6 48728828',
    },
  },
  de: {
    metadata: {
      title: 'Arbeite mit mir | Digitale Marketing-Services & Preise - Niblah',
      description:
        'Bereit zu wachsen? Entdecke meine digitalen Marketing-Services, Preise und buche eine Beratung. SEO, Google Ads und komplette Marketinglosungen.',
      keywords:
        'arbeite mit marketing experte, marketing services preise, SEO berater, Google Ads management, marketing beratung, marketing experte beauftragen',
      openGraph: {
        title: 'Arbeite mit mir | Digitale Marketing-Services & Preise',
        description:
          'Bereit zu wachsen? Entdecke meine digitalen Marketing-Services, Preise und buche eine Beratung.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Verfuegbar fuer neue Projekte',
      title: {
        prefix: 'Lass uns dein Unternehmen gemeinsam',
        highlight: 'transformieren',
        suffix: '',
      },
      description:
        'Bereit, Google zu dominieren und profitabel zu skalieren? Ich liefere messbare Ergebnisse mit bewaehrten SEO-, Google-Ads- und Conversion-Optimierungsstrategien.',
      bullets: [
        {
          title: 'Bewaehrte Erfolgsbilanz',
          description: '100+ Unternehmen skaliert mit messbarem ROI',
        },
        {
          title: 'Datengetriebener Ansatz',
          description: 'Transparente Reports und kontinuierliche Optimierung',
        },
        {
          title: 'Persoenliche Partnerschaft',
          description: 'Direkter Zugang und dedizierter Support',
        },
      ],
      cta: 'Arbeite mit mir →',
    },
    images: {
      graphAlt: 'Marketing Wachstumsergebnisse',
      avatarAlt: 'Albin Hot',
    },
    services: {
      title: {
        prefix: 'Wie ich deinem Unternehmen',
        highlight: 'helfen',
        suffix: 'werde',
      },
      subtitle: 'Waehle die Partnerschaftsstufe, die zu deinem Unternehmen passt',
      cards: [
        {
          title: 'SEO Services',
          price: '€995',
          priceSuffix: '/Monat',
          description: 'Bringe deine Website mit bewaehrten SEO-Strategien auf Platz 1 bei Google.',
          bullets: [
            'Kompletter SEO-Audit & Strategie',
            'Technische Optimierung',
            'Content-Erstellung & Optimierung',
            'Monatliches Reporting',
          ],
        },
        {
          badge: 'Am beliebtesten',
          title: 'Google Ads + SEO',
          price: '€2,500',
          priceSuffix: '/Monat',
          description: 'Komplettes digitales Marketing mit SEO und profitablen Google Ads.',
          bullets: [
            'Alles aus den SEO Services',
            'Google Ads Management',
            'Landingpage-Optimierung',
            'Woechentliche Performance-Reviews',
          ],
        },
        {
          title: 'Full Service',
          price: 'Individuell',
          description: 'Komplette digitale Marketingstrategie fuer groessere Unternehmen.',
          bullets: [
            'SEO + Google Ads + CRO',
            'Email-Marketing Setup',
            'Analytics & Tracking',
            'Dedizierter Support',
          ],
        },
      ],
    },
    reviewSlider: {
      title: 'Die Bewertungen luegen nicht',
      reviews: [
        {
          name: 'Watzalikken',
          rating: 5,
          text: 'Dieser Kurs hat mir genau das gegeben, was ich brauchte — kein Gerede, keine leeren Versprechen. Nur echte, umsetzbare Schritte, die mir innerhalb weniger Wochen Ergebnisse gebracht haben. Klare Empfehlung.',
        },
        {
          name: 'Buurman & Buurman',
          rating: 5,
          text: 'Ich hatte Probleme zu verstehen, wie ich die Core Web Vitals meiner Seite fixen soll, aber der Kurs hat alles super einfach erklaert. Endlich habe ich meine SEO im Griff.',
        },
        {
          name: 'Rijschool Campus',
          rating: 5,
          text: 'Nach dem ersten Modul hatte ich einen Call mit Albin. Eine Woche spaeter habe ich meine erste optimierte Seite veroeffentlicht. Sieben Monate spaeter bin ich #1 fuer mein Haupt-Keyword.',
        },
        {
          name: 'Herbalife',
          rating: 5,
          text: 'Mit Abstand der beste SEO-Kurs, den ich gemacht habe. Klare Videos, schneller Support und Strategien, die wirklich funktionieren — keine Theorie. Ich habe sogar an einem Sonntag Hilfe bekommen.',
        },
        {
          name: 'ShoeSupply',
          rating: 5,
          text: 'Seit wir das anwenden, was ich im Kurs gelernt habe, sind Traffic und Umsatz enorm gewachsen. Dieses SEO-Wissen haette ich gern schon vor Jahren gehabt.',
        },
        {
          name: 'Plasticz',
          rating: 4.5,
          text: 'Ich bin echt happy mit dem Aufbau dieses Kurses. Stefan zeigt eine klare Roadmap und haelt es simpel. Das ist nicht nur Info — das ist Aktion.',
        },
      ],
      moreReviews: [
        {
          name: 'TechStart',
          rating: 5,
          text: 'Grossartiger Kurs! Ich bin von Seite 2 auf Position #1 in 3 Monaten gekommen. Die SEO-Techniken sind klar und funktionieren wirklich — sogar in einer umkaempften Nische.',
        },
        {
          name: 'WebWinkel Pro',
          rating: 5,
          text: 'Dieser Kurs hat unsere Online-Umsaetze verdreifacht. Klare Erklaerungen, kein Fuellstoff und ein System, das schnell liefert.',
        },
        {
          name: 'LocalBusiness',
          rating: 4.5,
          text: 'Dank der Local-SEO-Strategie aus dem Kurs bekommen wir jetzt viel mehr Laufkundschaft. Hat sich in nur zwei Monaten bezahlt gemacht.',
        },
        {
          name: 'E-commerce Expert',
          rating: 5,
          text: 'Die technischen SEO-Tipps in diesem Kurs waren ein echter Gamechanger. Unsere Seite laedt schneller, rankt hoeher und wir bekommen mehr Conversions.',
        },
        {
          name: 'Marketing Agency',
          rating: 5,
          text: 'Wir nutzen diesen Kurs, um neue Teammitglieder zu schulen. Er ist klar, praxisnah und entspricht dem, was 2025 wirklich funktioniert.',
        },
        {
          name: 'Online Shop',
          rating: 4.5,
          text: 'Unsere Sichtbarkeit hat sich verbessert, der Traffic ist gewachsen und wir sehen endlich konstante Conversions. Das ist nicht nur ein Kurs — das ist ein Blueprint.',
        },
      ],
    },
    cta: {
      title: {
        prefix: 'Bereit, dein Unternehmen zu',
        highlight: 'skalieren',
        suffix: '?',
      },
      description:
        'Buche ein kostenloses Beratungsgespraech und lass uns besprechen, wie ich dir helfen kann, deine Wachstumsziele zu erreichen',
      iframeTitle: 'Beratungstermin planen',
      urgentLabel: 'Dringende Fragen?',
      whatsappLabel: 'WhatsApp: +31 6 48728828',
    },
  },
  sv: {
    metadata: {
      title: 'Arbeta med mig | Digitala marknadsforingstjanster & priser - Niblah',
      description:
        'Redo att vaxa? Upptack mina digitala marknadsforingstjanster, priser och boka en konsultation. SEO, Google Ads och kompletta marknadsforingslosningar.',
      keywords:
        'arbeta med marknadsforingsexpert, marknadsforingstjanster priser, SEO konsult, Google Ads hantering, marknadsforingskonsultation, anlita marknadsforingsexpert',
      openGraph: {
        title: 'Arbeta med mig | Digitala marknadsforingstjanster & priser',
        description:
          'Redo att vaxa? Upptack mina digitala marknadsforingstjanster, priser och boka en konsultation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Tillganglig for nya projekt',
      title: {
        prefix: 'Lat oss tillsammans',
        highlight: 'transformera',
        suffix: 'ditt foretag',
      },
      description:
        'Redo att dominera Google och skala lonsamt? Jag levererar matbara resultat med beprovade strategier for SEO, Google Ads och konverteringsoptimering.',
      bullets: [
        {
          title: 'Bevisad historik',
          description: '100+ foretag skalade med matbar ROI',
        },
        {
          title: 'Datadrivet arbetssatt',
          description: 'Transparent rapportering och kontinuerlig optimering',
        },
        {
          title: 'Personligt partnerskap',
          description: 'Direkt tillgang och dedikerat stod',
        },
      ],
      cta: 'Arbeta med mig →',
    },
    images: {
      graphAlt: 'Marketing tillvaxtresultat',
      avatarAlt: 'Albin Hot',
    },
    services: {
      title: {
        prefix: 'Sa kommer jag att',
        highlight: 'hjalpa',
        suffix: 'ditt foretag',
      },
      subtitle: 'Valj samarbetsniva som passar ditt foretag',
      cards: [
        {
          title: 'SEO-tjanster',
          price: '€995',
          priceSuffix: '/manad',
          description: 'Fa din webbplats till #1 pa Google med beprovade SEO-strategier.',
          bullets: [
            'Komplett SEO-audit & strategi',
            'Teknisk optimering',
            'Innehallsproduktion & optimering',
            'Manadsrapportering',
          ],
        },
        {
          badge: 'Mest populart',
          title: 'Google Ads + SEO',
          price: '€2,500',
          priceSuffix: '/manad',
          description: 'Komplett digital marknadsforing med SEO och lonande Google Ads.',
          bullets: [
            'Allt i SEO-tjanster',
            'Google Ads-hantering',
            'Landningssidesoptimering',
            'Veckovisa resultatgenomgangar',
          ],
        },
        {
          title: 'Full Service',
          price: 'Skraddarsytt',
          description: 'Komplett digital marknadsforingsstrategi for storre foretag.',
          bullets: [
            'SEO + Google Ads + CRO',
            'E-postmarknadsforing setup',
            'Analytics & sparning',
            'Dedikerat stod',
          ],
        },
      ],
    },
    reviewSlider: {
      title: 'Recensionerna ljuger inte',
      reviews: [
        {
          name: 'Watzalikken',
          rating: 5,
          text: 'Den har kursen gav mig exakt det jag behovde — inget fluff, inga tomma loften. Bara riktiga, praktiska steg som gav resultat inom nagra veckor. Stark rekommendation.',
        },
        {
          name: 'Buurman & Buurman',
          rating: 5,
          text: 'Jag hade problem med att forsta hur jag skulle fixa mina Core Web Vitals, men kursen forklarade allt pa ett superenkelt satt. Nu har jag kontroll over min SEO.',
        },
        {
          name: 'Rijschool Campus',
          rating: 5,
          text: 'Efter forsta modulen hade jag ett samtal med Albin. En vecka senare publicerade jag min forsta optimerade sida. Sju manader senare ligger jag #1 pa mitt viktigaste sokord.',
        },
        {
          name: 'Herbalife',
          rating: 5,
          text: 'Overlagset den basta SEO-kursen jag gatt. Tydliga videor, snabb support och strategier som fungerar — inte teori. Jag fick till och med hjalp en sondag.',
        },
        {
          name: 'ShoeSupply',
          rating: 5,
          text: 'Sedan vi borjade anvanda det jag larde mig i kursen har bade trafik och omsattning okat kraftigt. Det har ar SEO-kunskapen jag onska jag haft for flera ar sedan.',
        },
        {
          name: 'Plasticz',
          rating: 4.5,
          text: 'Jag ar riktigt nojd med hur kursen ar upplagd. Stefan visar en tydlig roadmap och gor det enkelt. Det ar inte bara info — det ar action.',
        },
      ],
      moreReviews: [
        {
          name: 'TechStart',
          rating: 5,
          text: 'Fantastisk kurs! Jag gick fran sida 2 till position #1 pa 3 manader. SEO-teknikerna ar tydliga och fungerar verkligen — till och med i en konkurrensutsatt nisch.',
        },
        {
          name: 'WebWinkel Pro',
          rating: 5,
          text: 'Den har kursen tredubblade var onlineforsaljning. Raka forklaringar, inget filler, och ett system som levererar snabbt.',
        },
        {
          name: 'LocalBusiness',
          rating: 4.5,
          text: 'Tack vare den lokala SEO-strategin i kursen far vi nu langt fler drop-in kunder. Den betalade sig pa bara tva manader.',
        },
        {
          name: 'E-commerce Expert',
          rating: 5,
          text: 'De tekniska SEO-tipsen i kursen var en game changer. Var sida laddar snabbare, rankar hogre och vi far fler konverteringar.',
        },
        {
          name: 'Marketing Agency',
          rating: 5,
          text: 'Vi anvander kursen for att utbilda nya teammedlemmar. Den ar tydlig, praktisk och i linje med det som fungerar 2025.',
        },
        {
          name: 'Online Shop',
          rating: 4.5,
          text: 'Var synlighet forbattrades, trafiken okade och vi ser nu konsekventa konverteringar. Det har ar inte bara en kurs — det ar en blueprint.',
        },
      ],
    },
    cta: {
      title: {
        prefix: 'Redo att',
        highlight: 'skala',
        suffix: 'ditt foretag?',
      },
      description:
        'Boka en gratis konsultation sa pratar vi om hur jag kan hjalpa dig att na dina tillvaxtmal',
      iframeTitle: 'Boka konsultation',
      urgentLabel: 'Akuta fragor?',
      whatsappLabel: 'WhatsApp: +31 6 48728828',
    },
  },
  da: {
    metadata: {
      title: 'Arbejd med mig | Digitale marketingservices & priser - Niblah',
      description:
        'Klar til at vokse? Se mine digitale marketingservices, priser og book en konsultation. SEO, Google Ads og komplette marketinglosninger.',
      keywords:
        'arbejd med marketingekspert, marketingservices priser, SEO konsulent, Google Ads management, marketing konsultation, hyr marketingekspert',
      openGraph: {
        title: 'Arbejd med mig | Digitale marketingservices & priser',
        description:
          'Klar til at vokse? Se mine digitale marketingservices, priser og book en konsultation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Tilgaengelig for nye projekter',
      title: {
        prefix: 'Lad os sammen',
        highlight: 'transformere',
        suffix: 'din virksomhed',
      },
      description:
        'Klar til at dominere Google og skalere profitabelt? Jeg leverer malbare resultater med beviste strategier for SEO, Google Ads og konverteringsoptimering.',
      bullets: [
        {
          title: 'Dokumenteret historik',
          description: '100+ virksomheder skaleret med malbar ROI',
        },
        {
          title: 'Datadrevet tilgang',
          description: 'Gennemsigtig rapportering og loebende optimering',
        },
        {
          title: 'Personligt partnerskab',
          description: 'Direkte adgang og dedikeret support',
        },
      ],
      cta: 'Arbejd med mig →',
    },
    images: {
      graphAlt: 'Marketing vaekstresultater',
      avatarAlt: 'Albin Hot',
    },
    services: {
      title: {
        prefix: 'Saadan vil jeg',
        highlight: 'hjalpe',
        suffix: 'din virksomhed',
      },
      subtitle: 'Vaelg samarbejdsniveauet der passer til din virksomhed',
      cards: [
        {
          title: 'SEO-services',
          price: '€995',
          priceSuffix: '/maaned',
          description: 'Fa din hjemmeside til #1 pa Google med beviste SEO-strategier.',
          bullets: [
            'Komplet SEO-audit & strategi',
            'Teknisk optimering',
            'Content-skabelse & optimering',
            'Manedlig rapportering',
          ],
        },
        {
          badge: 'Mest populart',
          title: 'Google Ads + SEO',
          price: '€2,500',
          priceSuffix: '/maaned',
          description: 'Komplet digital marketing med SEO og profitable Google Ads.',
          bullets: [
            'Alt i SEO-services',
            'Google Ads management',
            'Landing page-optimering',
            'Ugentlige performance-reviews',
          ],
        },
        {
          title: 'Full Service',
          price: 'Skraddersyet',
          description: 'Komplet digital marketingstrategi for storre virksomheder.',
          bullets: [
            'SEO + Google Ads + CRO',
            'Email marketing setup',
            'Analytics & tracking',
            'Dedikeret support',
          ],
        },
      ],
    },
    reviewSlider: {
      title: 'Anmeldelserne lyver ikke',
      reviews: [
        {
          name: 'Watzalikken',
          rating: 5,
          text: 'Dette kursus gav mig praecis det, jeg havde brug for — ingen fluff, ingen tomme lofter. Bare konkrete, anvendelige skridt der gav resultater inden for uger. Kan varmt anbefales.',
        },
        {
          name: 'Buurman & Buurman',
          rating: 5,
          text: 'Jeg havde svaert ved at forsta hvordan jeg skulle fixe mine Core Web Vitals, men kurset forklarede det hele pa en super enkel made. Nu har jeg styr pa min SEO.',
        },
        {
          name: 'Rijschool Campus',
          rating: 5,
          text: 'Efter det forste modul havde jeg en samtale med Albin. En uge senere udgav jeg min forste optimerede side. Syv maneder senere ligger jeg #1 pa mit vigtigste sogeord.',
        },
        {
          name: 'Herbalife',
          rating: 5,
          text: 'Uden tvivl det bedste SEO-kursus jeg har taget. Klare videoer, hurtig support og strategier der virker — ikke teori. Jeg fik endda hjaelp en sondag.',
        },
        {
          name: 'ShoeSupply',
          rating: 5,
          text: 'Siden vi anvendte det jeg laerte i kurset, er bade trafik og omsaetning vokset markant. Det er den SEO-viden jeg ville oenske jeg havde haft for flere ar siden.',
        },
        {
          name: 'Plasticz',
          rating: 4.5,
          text: 'Jeg er virkelig glad for maaden kurset er bygget op pa. Stefan viser en klar roadmap og holder det simpelt. Det er ikke bare info — det er handling.',
        },
      ],
      moreReviews: [
        {
          name: 'TechStart',
          rating: 5,
          text: 'Fantastisk kursus! Jeg gik fra side 2 til position #1 pa 3 maneder. SEO-teknikkerne er tydelige og virker faktisk — selv i en konkurrencepraeget niche.',
        },
        {
          name: 'WebWinkel Pro',
          rating: 5,
          text: 'Dette kursus tredoblede vores online salg. Lige pa og haardt forklaringer, ingen fyld og et system der leverer hurtigt.',
        },
        {
          name: 'LocalBusiness',
          rating: 4.5,
          text: 'Takket vaere den lokale SEO-strategi i kurset far vi nu langt flere walk-in kunder. Det tjente sig hjem pa kun to maneder.',
        },
        {
          name: 'E-commerce Expert',
          rating: 5,
          text: 'De tekniske SEO-tips i kurset var en game changer. Vores side laeser hurtigere, ranker hojere, og vi far flere konverteringer.',
        },
        {
          name: 'Marketing Agency',
          rating: 5,
          text: 'Vi bruger kurset til at traene nye teammedlemmer. Det er klart, praktisk og i trit med det der virker i 2025.',
        },
        {
          name: 'Online Shop',
          rating: 4.5,
          text: 'Vores synlighed blev bedre, trafikken voksede, og vi ser endelig stabile konverteringer. Det er ikke bare et kursus — det er en blueprint.',
        },
      ],
    },
    cta: {
      title: {
        prefix: 'Klar til at',
        highlight: 'skalere',
        suffix: 'din virksomhed?',
      },
      description:
        'Book en gratis konsultation og lad os tale om hvordan jeg kan hjalpe dig med dine vaekstmal',
      iframeTitle: 'Book en konsultation',
      urgentLabel: 'Akutte sporgsmal?',
      whatsappLabel: 'WhatsApp: +31 6 48728828',
    },
  },
  fr: {
    metadata: {
      title: 'Travaillez avec moi | Services marketing digital & tarifs - Niblah',
      description:
        'Pret a developper votre business ? Decouvrez mes services de marketing digital, mes tarifs et reservez une consultation. SEO, Google Ads et solutions completes.',
      keywords:
        'travailler avec expert marketing, services marketing tarifs, consultant SEO, gestion Google Ads, consultation marketing, embaucher expert marketing',
      openGraph: {
        title: 'Travaillez avec moi | Services marketing digital & tarifs',
        description:
          'Pret a developper votre business ? Decouvrez mes services de marketing digital, mes tarifs et reservez une consultation.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Disponible pour de nouveaux projets',
      title: {
        prefix: 'Transformons ensemble votre',
        highlight: 'entreprise',
        suffix: '',
      },
      description:
        'Pret a dominer Google et a croitre de facon rentable ? Je livre des resultats mesurables grace a des strategies SEO, Google Ads et d\'optimisation de conversion.',
      bullets: [
        {
          title: 'Resultats prouves',
          description: '100+ entreprises faites evoluer avec un ROI mesurable',
        },
        {
          title: 'Approche orientee donnees',
          description: 'Reporting transparent et optimisation continue',
        },
        {
          title: 'Partenariat personnel',
          description: 'Acces direct et support dedie',
        },
      ],
      cta: 'Travailler avec moi →',
    },
    images: {
      graphAlt: 'Resultats de croissance marketing',
      avatarAlt: 'Albin Hot',
    },
    services: {
      title: {
        prefix: 'Comment je vais',
        highlight: 'aider',
        suffix: 'votre entreprise',
      },
      subtitle: 'Choisissez le niveau de partenariat qui correspond a vos besoins',
      cards: [
        {
          title: 'Services SEO',
          price: '€995',
          priceSuffix: '/mois',
          description: 'Placez votre site en #1 sur Google avec des strategies SEO eprouvees.',
          bullets: [
            'Audit SEO complet & strategie',
            'Optimisation technique',
            'Creation & optimisation de contenu',
            'Reporting mensuel',
          ],
        },
        {
          badge: 'Le plus populaire',
          title: 'Google Ads + SEO',
          price: '€2,500',
          priceSuffix: '/mois',
          description: 'Marketing digital complet avec SEO et Google Ads rentables.',
          bullets: [
            'Tout ce qui est dans les services SEO',
            'Gestion Google Ads',
            'Optimisation de landing pages',
            'Revue de performance hebdomadaire',
          ],
        },
        {
          title: 'Service complet',
          price: 'Sur mesure',
          description: 'Strategie de marketing digital complete pour les entreprises plus grandes.',
          bullets: [
            'SEO + Google Ads + CRO',
            'Mise en place email marketing',
            'Analytics & tracking',
            'Support dedie',
          ],
        },
      ],
    },
    reviewSlider: {
      title: 'Les avis ne mentent pas',
      reviews: [
        {
          name: 'Watzalikken',
          rating: 5,
          text: "Ce cours m'a donne exactement ce dont j'avais besoin — pas de blabla, pas de fausses promesses. Juste des etapes concretes qui m'ont donne des resultats en quelques semaines. Je recommande.",
        },
        {
          name: 'Buurman & Buurman',
          rating: 5,
          text: "J'avais du mal a comprendre comment corriger les Core Web Vitals de mon site, mais le cours a tout explique de maniere tres simple. Je me sens enfin maitre de mon SEO.",
        },
        {
          name: 'Rijschool Campus',
          rating: 5,
          text: "Apres le premier module, j'ai eu un appel avec Albin. Une semaine plus tard, j'ai publie ma premiere page optimisee. Sept mois plus tard, je suis #1 sur mon mot-cle principal.",
        },
        {
          name: 'Herbalife',
          rating: 5,
          text: "De loin le meilleur cours SEO que j'ai suivi. Des videos claires, un support rapide et des strategies qui marchent — pas de theorie. J'ai meme eu de l'aide un dimanche.",
        },
        {
          name: 'ShoeSupply',
          rating: 5,
          text: "Depuis que nous appliquons ce que j'ai appris, notre trafic et notre chiffre d'affaires ont enormement augmente. C'est la connaissance SEO que j'aurais voulu avoir il y a des annees.",
        },
        {
          name: 'Plasticz',
          rating: 4.5,
          text: "Je suis vraiment satisfait de la structure de ce cours. Stefan donne une feuille de route claire et garde les choses simples. Ce n'est pas seulement de l'info — c'est de l'action.",
        },
      ],
      moreReviews: [
        {
          name: 'TechStart',
          rating: 5,
          text: 'Cours incroyable ! Je suis passe de la page 2 a la position #1 en 3 mois. Les techniques SEO sont claires et fonctionnent vraiment — meme dans une niche concurrentielle.',
        },
        {
          name: 'WebWinkel Pro',
          rating: 5,
          text: 'Ce cours a triple nos ventes en ligne. Des explications directes, pas de remplissage, et un systeme qui livre vite.',
        },
        {
          name: 'LocalBusiness',
          rating: 4.5,
          text: 'Grace a la strategie de SEO local du cours, nous recevons beaucoup plus de clients en boutique. Rentabilise en deux mois.',
        },
        {
          name: 'E-commerce Expert',
          rating: 5,
          text: 'Les conseils techniques SEO dans ce cours ont change la donne. Notre site charge plus vite, se positionne mieux et nous obtenons plus de conversions.',
        },
        {
          name: 'Marketing Agency',
          rating: 5,
          text: 'Nous utilisons ce cours pour former nos nouveaux membres. C\'est clair, pratique et aligne sur ce qui fonctionne en 2025.',
        },
        {
          name: 'Online Shop',
          rating: 4.5,
          text: "Notre visibilite s'est amelioree, le trafic a augmente et nous voyons enfin des conversions stables. Ce n'est pas seulement un cours — c'est un blueprint.",
        },
      ],
    },
    cta: {
      title: {
        prefix: 'Pret a',
        highlight: 'faire grandir',
        suffix: 'votre entreprise ?',
      },
      description:
        "Reservez une consultation gratuite et discutons de la facon dont je peux vous aider a atteindre vos objectifs de croissance",
      iframeTitle: 'Reserver une consultation',
      urgentLabel: 'Questions urgentes ?',
      whatsappLabel: 'WhatsApp: +31 6 48728828',
    },
  },
  it: {
    metadata: {
      title: 'Lavora con me | Servizi di marketing digitale & prezzi - Niblah',
      description:
        'Pronto a crescere? Scopri i miei servizi di marketing digitale, i prezzi e prenota una consulenza. SEO, Google Ads e soluzioni complete.',
      keywords:
        'lavora con esperto marketing, servizi marketing prezzi, consulente SEO, gestione Google Ads, consulenza marketing, assumere esperto marketing',
      openGraph: {
        title: 'Lavora con me | Servizi di marketing digitale & prezzi',
        description:
          'Pronto a crescere? Scopri i miei servizi di marketing digitale, i prezzi e prenota una consulenza.',
        images: ['/avatar.png'],
      },
    },
    hero: {
      badge: 'Disponibile per nuovi progetti',
      title: {
        prefix: 'Trasformiamo insieme la tua',
        highlight: 'azienda',
        suffix: '',
      },
      description:
        'Pronto a dominare Google e scalare in modo profittevole? Offro risultati misurabili con strategie comprovate di SEO, Google Ads e ottimizzazione delle conversioni.',
      bullets: [
        {
          title: 'Risultati comprovati',
          description: '100+ aziende scalate con ROI misurabile',
        },
        {
          title: 'Approccio data-driven',
          description: 'Report trasparenti e ottimizzazione continua',
        },
        {
          title: 'Partnership personale',
          description: 'Accesso diretto e supporto dedicato',
        },
      ],
      cta: 'Lavora con me →',
    },
    images: {
      graphAlt: 'Risultati di crescita marketing',
      avatarAlt: 'Albin Hot',
    },
    services: {
      title: {
        prefix: 'Come ti',
        highlight: 'aiutero',
        suffix: 'con la tua azienda',
      },
      subtitle: 'Scegli il livello di partnership che si adatta alle tue esigenze',
      cards: [
        {
          title: 'Servizi SEO',
          price: '€995',
          priceSuffix: '/mese',
          description: 'Porta il tuo sito al #1 su Google con strategie SEO collaudate.',
          bullets: [
            'Audit SEO completo & strategia',
            'Ottimizzazione tecnica',
            'Creazione & ottimizzazione contenuti',
            'Report mensile',
          ],
        },
        {
          badge: 'Piu popolare',
          title: 'Google Ads + SEO',
          price: '€2,500',
          priceSuffix: '/mese',
          description: 'Marketing digitale completo con SEO e Google Ads profittevoli.',
          bullets: [
            'Tutto nei servizi SEO',
            'Gestione Google Ads',
            'Ottimizzazione landing page',
            'Revisioni settimanali delle performance',
          ],
        },
        {
          title: 'Servizio completo',
          price: 'Personalizzato',
          description: 'Strategia di marketing digitale completa per aziende piu grandi.',
          bullets: [
            'SEO + Google Ads + CRO',
            'Setup email marketing',
            'Analytics & tracking',
            'Supporto dedicato',
          ],
        },
      ],
    },
    reviewSlider: {
      title: 'Le recensioni non mentono',
      reviews: [
        {
          name: 'Watzalikken',
          rating: 5,
          text: 'Questo corso mi ha dato esattamente cio di cui avevo bisogno — niente fuffa, niente promesse vuote. Solo passi concreti che mi hanno portato risultati in poche settimane. Consigliatissimo.',
        },
        {
          name: 'Buurman & Buurman',
          rating: 5,
          text: 'Avevo difficolta a capire come sistemare i Core Web Vitals del mio sito, ma il corso ha spiegato tutto in modo super semplice. Finalmente ho il controllo della mia SEO.',
        },
        {
          name: 'Rijschool Campus',
          rating: 5,
          text: 'Dopo il primo modulo ho avuto una call con Albin. Una settimana dopo ho pubblicato la mia prima pagina ottimizzata. Sette mesi dopo sono #1 per la mia keyword principale.',
        },
        {
          name: 'Herbalife',
          rating: 5,
          text: 'Di gran lunga il miglior corso SEO che abbia seguito. Video chiari, supporto rapido e strategie che funzionano — non teoria. Ho ricevuto aiuto perfino di domenica.',
        },
        {
          name: 'ShoeSupply',
          rating: 5,
          text: 'Da quando applichiamo cio che ho imparato nel corso, traffico e fatturato sono cresciuti tantissimo. Questa e la conoscenza SEO che avrei voluto anni fa.',
        },
        {
          name: 'Plasticz',
          rating: 4.5,
          text: 'Sono davvero contento di come e strutturato questo corso. Stefan mostra una roadmap chiara e mantiene tutto semplice. Non e solo info — e azione.',
        },
      ],
      moreReviews: [
        {
          name: 'TechStart',
          rating: 5,
          text: 'Corso fantastico! Sono passato da pagina 2 alla posizione #1 in 3 mesi. Le tecniche SEO sono chiare e funzionano davvero — anche in una nicchia competitiva.',
        },
        {
          name: 'WebWinkel Pro',
          rating: 5,
          text: 'Questo corso ha triplicato le nostre vendite online. Spiegazioni dirette, niente riempitivi e un sistema che porta risultati velocemente.',
        },
        {
          name: 'LocalBusiness',
          rating: 4.5,
          text: 'Grazie alla strategia di SEO locale del corso, ora abbiamo molti piu clienti in negozio. Si e ripagato in soli due mesi.',
        },
        {
          name: 'E-commerce Expert',
          rating: 5,
          text: 'I consigli di SEO tecnica in questo corso sono stati un game changer. Il sito carica piu velocemente, si posiziona meglio e otteniamo piu conversioni.',
        },
        {
          name: 'Marketing Agency',
          rating: 5,
          text: 'Usiamo questo corso per formare i nuovi membri del team. E chiaro, pratico e in linea con cio che funziona nel 2025.',
        },
        {
          name: 'Online Shop',
          rating: 4.5,
          text: 'La nostra visibilita e migliorata, il traffico e cresciuto e finalmente vediamo conversioni costanti. Non e solo un corso — e un blueprint.',
        },
      ],
    },
    cta: {
      title: {
        prefix: 'Pronto a',
        highlight: 'scalare',
        suffix: 'la tua azienda?',
      },
      description:
        'Prenota una consulenza gratuita e parliamo di come posso aiutarti a raggiungere i tuoi obiettivi di crescita',
      iframeTitle: 'Prenota una consulenza',
      urgentLabel: 'Domande urgenti?',
      whatsappLabel: 'WhatsApp: +31 6 48728828',
    },
  },
};

export function getWorkWithMeCopy(locale) {
  return getLocaleCopy(copy, locale);
}
