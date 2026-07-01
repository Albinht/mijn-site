const copy = {
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
        images: ['/niblah-headshot.webp'],
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
  };

export function getWorkWithMeCopy() {
  return copy;
}
