const fs = require('fs')
const path = require('path')

function isValidPostgresUrl(value) {
  return typeof value === 'string' && (value.startsWith('postgres://') || value.startsWith('postgresql://'))
}

function loadDatabaseUrl() {
  if (isValidPostgresUrl(process.env.DATABASE_URL)) return

  const candidates = ['.env.local', '.env']
  for (const filename of candidates) {
    const filePath = path.join(process.cwd(), filename)
    if (!fs.existsSync(filePath)) continue

    const env = fs.readFileSync(filePath, 'utf8')
    const match = env.match(/^\s*DATABASE_URL\s*=\s*"?([^"\n]+)"?\s*$/m)
    if (match) {
      process.env.DATABASE_URL = match[1]
      return
    }
  }

  if (process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL was found but is not a valid Postgres URL (expected postgres:// or postgresql://)')
  }

  throw new Error('DATABASE_URL not found in process.env, .env.local, or .env')
}

loadDatabaseUrl()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const article = {
  slug: 'zoekmachine-marketing',
  topic: 'Marketing',
  status: 'PUBLISHED',
  title: 'Zoekmachine marketing: wat het is en hoe je het inzet (SEO + SEA)',
  content: `
Zoekmachine marketing (SEM) is de combinatie van SEO en SEA. Het doel is simpel: zichtbaar zijn op het moment dat iemand actief zoekt, en die bezoeker omzetten in een klant.

SEM is pull marketing: je sluit aan op bestaande vraag. Dat maakt het meetbaar, schaalbaar en vaak goedkoper dan push kanalen.

## Wat is zoekmachine marketing?

Zoekmachine marketing bestaat uit:

- SEO: organische zichtbaarheid en duurzame groei
- SEA: betaalde advertenties voor directe zichtbaarheid

Samen werken ze beter dan los. SEA geeft snelheid en testdata, SEO bouwt blijvende posities.

## SEO vs SEA in de praktijk

De verschillen die er toe doen:

- Tijd: SEA is direct, SEO heeft opbouwtijd
- Kosten: SEA betaalt per klik, SEO investeert in content en techniek
- Controle: SEA is snel te sturen, SEO is trager maar stabieler
- Duurzaamheid: SEA stopt als je stopt met betalen, SEO blijft langer werken

## Wanneer kies je voor SEO, SEA of beide?

Kies vooral SEO als:

- Je wil stabiele groei op lange termijn
- Je budget beperkt is maar tijd en expertise wel aanwezig zijn
- Je wil merkautoriteit opbouwen

Kies vooral SEA als:

- Je snel leads of sales nodig hebt
- Je nieuwe producten of markten wil testen
- Je wil leren welke zoekwoorden echt converteren

Kies beide als:

- Je wil snelheid en stabiliteit tegelijk
- Je wil data uit SEA gebruiken om SEO te sturen
- Je wil meerdere posities op de SERP bezetten

## Hoe zet je zoekmachine marketing goed in? (stappen)

### Stap 1 - Meet alles goed

- Koppel Google Search Console en GA4
- Definieer 1-3 conversies die echt tellen
- Zet conversion tracking goed in Google Ads

### Stap 2 - Doe zoekwoordonderzoek op intent

- Informational: gidsen en how-to
- Commercial: vergelijken, reviews
- Transactional: prijs, demo, offerte

Zoekwoorden zonder intent zijn zelden winstgevend.

### Stap 3 - Bouw landings paginas die converteren

De kwaliteit van je landingspagina bepaalt je SEO positie en je SEA quality score.

Checklist:

- Matcht de pagina de intent?
- Duidelijke propositie en CTA
- Snelle laadtijd en mobiel goed
- Bewijs (cases, reviews, resultaten)

### Stap 4 - Gebruik SEA als testlab

- Test zoekwoorden en advertentieteksten
- Kijk naar CTR, CPC en conversie
- Schaal wat werkt, stop wat niet werkt

De winnaars worden je SEO prioriteiten.

### Stap 5 - Bouw SEO als duurzame motor

- 1 sterke pagina per topic
- Topic clusters met interne links
- Regelmatig updates van pagina's die al ranken
- Autoriteit opbouwen met relevante backlinks

### Stap 6 - Rapporteer op business impact

- Conversies en CPL/CPA
- Groei in organische zichtbaarheid
- Share of search vs concurrenten
- Content die levert vs content die niet levert

## Budget en KPI model (simpel)

Een praktisch model:

- Start SEA klein (test budget) en schaal op basis van conversie
- Investeer SEO maandelijks in content en techniek
- Meet op ROI, niet op traffic alleen

Als SEA winstgevend is, gebruik je de data om SEO te versnellen.

## Veelgemaakte fouten

- SEO doen zonder techniek op orde
- SEA draaien zonder conversietracking
- Alleen volume keywords kiezen
- Landings paginas niet optimaliseren
- Alles tegelijk doen zonder prioriteiten

## Conclusie

Zoekmachine marketing is geen keuze tussen SEO of SEA. Het is een combinatie van snelheid en duurzaamheid. Gebruik SEA om te testen en direct resultaat te krijgen, en bouw SEO om het resultaat te verankeren.

Wil je een concreet SEM plan voor jouw situatie? Check /work-with-me.
`.trim(),
  translations: {
    en: {
      title: 'Search engine marketing: what it is and how to use it (SEO + SEA)',
      topic: 'Marketing',
      metaTitle: 'Search engine marketing | SEO + SEA strategy',
      metaDescription: 'Search engine marketing explained: combine SEO and SEA, when to use each, and a practical workflow to grow traffic and conversions.',
      content: `
Search engine marketing (SEM) combines SEO and SEA. The goal is simple: be visible when people search, and convert that demand into revenue.

SEM is pull marketing. You meet existing demand, which makes it measurable and scalable.

## What is search engine marketing?

SEM includes:

- SEO: organic visibility and durable growth
- SEA: paid ads for immediate visibility

Together they work better than alone. SEA gives speed and test data, SEO builds lasting positions.

## SEO vs SEA in practice

The differences that matter:

- Time: SEA is immediate, SEO needs build time
- Cost: SEA pays per click, SEO invests in content and tech
- Control: SEA is fast to steer, SEO is slower but stable
- Durability: SEA stops when you stop paying

## When to choose SEO, SEA, or both

Choose SEO if:

- You want long term growth
- You can invest time and expertise
- You want brand authority

Choose SEA if:

- You need leads now
- You want to test new markets
- You need fast keyword validation

Choose both if:

- You want speed and durability
- You want SEA data to guide SEO
- You want multiple SERP positions

## How to run SEM well (steps)

### Step 1 - Measure correctly

- Connect Search Console and GA4
- Define 1-3 primary conversions
- Set up proper conversion tracking in ads

### Step 2 - Do intent-based keyword research

- Informational: guides and how-to
- Commercial: comparisons and reviews
- Transactional: pricing, demo, quote

### Step 3 - Build landing pages that convert

Landing page quality impacts SEO rankings and SEA quality score.

Checklist:

- Intent match
- Clear value prop and CTA
- Fast and mobile friendly
- Proof (cases, reviews, results)

### Step 4 - Use SEA as a test lab

- Test keywords and ad copy
- Track CTR, CPC, conversions
- Scale winners, cut losers

Winners become SEO priorities.

### Step 5 - Build SEO as the durable engine

- One strong page per topic
- Topic clusters with internal links
- Refresh pages that already rank
- Earn authority with relevant links

### Step 6 - Report on business impact

- Conversions and CPL/CPA
- Organic visibility growth
- Share of search vs competitors
- Content that drives results

## Budget and KPI model (simple)

- Start SEA small and scale by conversion
- Invest SEO monthly in content and tech
- Judge by ROI, not traffic alone

## Common mistakes

- SEO without technical basics
- SEA without conversion tracking
- Choosing only volume keywords
- Weak landing pages
- No prioritization

## Conclusion

SEM is not SEO vs SEA. It is speed plus durability. Use SEA to learn fast and SEO to lock in results.

Want a concrete SEM plan for your situation? See /work-with-me.
`.trim(),
    },
    nl: {
      title: 'Zoekmachine marketing: wat het is en hoe je het inzet (SEO + SEA)',
      topic: 'Marketing',
      metaTitle: 'Zoekmachine marketing | SEO + SEA strategie',
      metaDescription: 'Zoekmachine marketing uitgelegd: combineer SEO en SEA, wanneer je welke inzet en een praktische workflow voor groei.',
      content: `
Zoekmachine marketing (SEM) is de combinatie van SEO en SEA. Het doel is simpel: zichtbaar zijn op het moment dat iemand actief zoekt, en die bezoeker omzetten in een klant.

SEM is pull marketing: je sluit aan op bestaande vraag. Dat maakt het meetbaar, schaalbaar en vaak goedkoper dan push kanalen.

## Wat is zoekmachine marketing?

Zoekmachine marketing bestaat uit:

- SEO: organische zichtbaarheid en duurzame groei
- SEA: betaalde advertenties voor directe zichtbaarheid

Samen werken ze beter dan los. SEA geeft snelheid en testdata, SEO bouwt blijvende posities.

## SEO vs SEA in de praktijk

De verschillen die er toe doen:

- Tijd: SEA is direct, SEO heeft opbouwtijd
- Kosten: SEA betaalt per klik, SEO investeert in content en techniek
- Controle: SEA is snel te sturen, SEO is trager maar stabieler
- Duurzaamheid: SEA stopt als je stopt met betalen, SEO blijft langer werken

## Wanneer kies je voor SEO, SEA of beide?

Kies vooral SEO als:

- Je wil stabiele groei op lange termijn
- Je budget beperkt is maar tijd en expertise wel aanwezig zijn
- Je wil merkautoriteit opbouwen

Kies vooral SEA als:

- Je snel leads of sales nodig hebt
- Je nieuwe producten of markten wil testen
- Je wil leren welke zoekwoorden echt converteren

Kies beide als:

- Je wil snelheid en stabiliteit tegelijk
- Je wil data uit SEA gebruiken om SEO te sturen
- Je wil meerdere posities op de SERP bezetten

## Hoe zet je zoekmachine marketing goed in? (stappen)

### Stap 1 - Meet alles goed

- Koppel Google Search Console en GA4
- Definieer 1-3 conversies die echt tellen
- Zet conversion tracking goed in Google Ads

### Stap 2 - Doe zoekwoordonderzoek op intent

- Informational: gidsen en how-to
- Commercial: vergelijken, reviews
- Transactional: prijs, demo, offerte

Zoekwoorden zonder intent zijn zelden winstgevend.

### Stap 3 - Bouw landings paginas die converteren

De kwaliteit van je landingspagina bepaalt je SEO positie en je SEA quality score.

Checklist:

- Matcht de pagina de intent?
- Duidelijke propositie en CTA
- Snelle laadtijd en mobiel goed
- Bewijs (cases, reviews, resultaten)

### Stap 4 - Gebruik SEA als testlab

- Test zoekwoorden en advertentieteksten
- Kijk naar CTR, CPC en conversie
- Schaal wat werkt, stop wat niet werkt

De winnaars worden je SEO prioriteiten.

### Stap 5 - Bouw SEO als duurzame motor

- 1 sterke pagina per topic
- Topic clusters met interne links
- Regelmatig updates van pagina's die al ranken
- Autoriteit opbouwen met relevante backlinks

### Stap 6 - Rapporteer op business impact

- Conversies en CPL/CPA
- Groei in organische zichtbaarheid
- Share of search vs concurrenten
- Content die levert vs content die niet levert

## Budget en KPI model (simpel)

Een praktisch model:

- Start SEA klein (test budget) en schaal op basis van conversie
- Investeer SEO maandelijks in content en techniek
- Meet op ROI, niet op traffic alleen

Als SEA winstgevend is, gebruik je de data om SEO te versnellen.

## Veelgemaakte fouten

- SEO doen zonder techniek op orde
- SEA draaien zonder conversietracking
- Alleen volume keywords kiezen
- Landings paginas niet optimaliseren
- Alles tegelijk doen zonder prioriteiten

## Conclusie

Zoekmachine marketing is geen keuze tussen SEO of SEA. Het is een combinatie van snelheid en duurzaamheid. Gebruik SEA om te testen en direct resultaat te krijgen, en bouw SEO om het resultaat te verankeren.

Wil je een concreet SEM plan voor jouw situatie? Check /work-with-me.
`.trim(),
    },
    de: {
      title: 'Suchmaschinenmarketing: was es ist und wie man es nutzt (SEO + SEA)',
      topic: 'Marketing',
      metaTitle: 'Suchmaschinenmarketing | SEO + SEA Strategie',
      metaDescription: 'SEM kombiniert SEO und SEA. Wann was sinnvoll ist und wie du eine messbare Strategie aufbaust.',
      content: `
Suchmaschinenmarketing (SEM) kombiniert SEO und SEA. Ziel ist Sichtbarkeit genau dann, wenn jemand sucht, plus Conversion.

## SEO vs SEA

- SEO: organisch, langfristig
- SEA: bezahlte Ads, sofortig
- Zusammen: Speed + Stabilitaet

## Wann was nutzen

- SEO fuer nachhaltige Nachfrage
- SEA fuer schnellen Traffic und Tests
- Beides wenn du gleichzeitig skalieren willst

## Praxis Workflow

1. Messen (Search Console, GA4, Ads Tracking)
2. Keywords nach Intent
3. Starke Landing Pages bauen
4. SEA als Testlabor
5. SEO Cluster und interne Links
6. Reporting nach Business Impact

## Fazit

SEM ist kein Entweder/Oder. Nutze SEA fuer Tempo und SEO fuer dauerhafte Ergebnisse.
`.trim(),
    },
    sv: {
      title: 'Sokmotormarknadsforing: vad det ar och hur du anvander det',
      topic: 'Marketing',
      metaTitle: 'Sokmotormarknadsforing | SEO + SEA strategi',
      metaDescription: 'SEM kombinerar SEO och SEA. Nar du ska anvanda vad och en enkel workflow for resultat.',
      content: `
Sokmotormarknadsforing (SEM) kombinerar SEO och SEA. Malet ar synlighet vid sokning och konvertering.

## SEO vs SEA

- SEO: organiskt, langsiktigt
- SEA: betalt, direkt
- Tillsammans: fart och stabilitet

## Nar anvanda vad

- SEO for hallbar tillvaxt
- SEA for snabb trafik och tester
- Bada for att skala snabbare

## Workflow

1. Matning (GSC, GA4, ads tracking)
2. Keywords per intent
3. Bra landing pages
4. SEA som testlab
5. SEO clusters + interna lankar
6. Rapportera business impact

## Slutsats

SEM ar kombinationen av hastighet och uthallighet.
`.trim(),
    },
    da: {
      title: 'Soegemaskinemarkedsfoering: hvad det er og hvordan du bruger det',
      topic: 'Marketing',
      metaTitle: 'Soegemaskinemarkedsfoering | SEO + SEA strategi',
      metaDescription: 'SEM kombinerer SEO og SEA. Hvornar du skal bruge hvad og en praktisk workflow.',
      content: `
Soegemaskinemarkedsfoering (SEM) kombinerer SEO og SEA. Malet er synlighed ved sokning og konvertering.

## SEO vs SEA

- SEO: organisk, langsigtet
- SEA: betalt, hurtigt
- Sammen: fart og stabilitet

## Hvornar bruge hvad

- SEO for holdbar vaekst
- SEA for hurtig trafik og tests
- Begge for skalering

## Workflow

1. Maaling (GSC, GA4, ads tracking)
2. Keywords efter intent
3. Gode landing pages
4. SEA som testlab
5. SEO clusters + interne links
6. Rapportering pa business impact

## Konklusion

SEM er kombinationen af hastighed og utholdenhed.
`.trim(),
    },
    fr: {
      title: 'Search engine marketing: definition et mise en place (SEO + SEA)',
      topic: 'Marketing',
      metaTitle: 'Search engine marketing | Strategie SEO + SEA',
      metaDescription: 'SEM combine SEO et SEA. Quand utiliser quoi et comment mettre en place une strategie efficace.',
      content: `
Le SEM combine SEO et SEA pour etre visible quand les gens cherchent.

## SEO vs SEA

- SEO: organique, long terme
- SEA: ads payantes, immediat
- Ensemble: vitesse + stabilite

## Quand utiliser

- SEO pour la croissance durable
- SEA pour trafic rapide et tests
- Les deux pour scaler

## Workflow

1. Mesure (GSC, GA4, tracking)
2. Keywords par intent
3. Landing pages solides
4. SEA comme test
5. SEO clusters + liens internes
6. Reporting business

## Conclusion

SEM est un mix de vitesse et de durabilite.
`.trim(),
    },
    it: {
      title: 'Search engine marketing: cos e e come usarlo (SEO + SEA)',
      topic: 'Marketing',
      metaTitle: 'Search engine marketing | Strategia SEO + SEA',
      metaDescription: 'SEM unisce SEO e SEA. Quando usare cosa e come costruire una strategia efficace.',
      content: `
SEM combina SEO e SEA per essere visibile quando le persone cercano.

## SEO vs SEA

- SEO: organico, lungo termine
- SEA: ads a pagamento, immediato
- Insieme: velocita + stabilita

## Quando usare cosa

- SEO per crescita duratura
- SEA per traffico veloce e test
- Entrambi per scalare

## Workflow

1. Misura (GSC, GA4, tracking)
2. Keywords per intent
3. Landing pages solide
4. SEA come test
5. SEO clusters + link interni
6. Reporting business

## Conclusione

SEM e un mix di velocita e sostenibilita.
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    const payload = {
      ...article,
      publishedAt: new Date(),
    }

    const existingArticle = await prisma.article.findUnique({
      where: { slug: article.slug },
      select: { id: true },
    })

    if (existingArticle) {
      await prisma.article.update({
        where: { slug: article.slug },
        data: payload,
      })
    } else {
      await prisma.article.create({ data: payload })
    }

    console.log(`Published "${article.title}"`)
  } catch (error) {
    console.error('Failed to publish article:', error)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

publishArticle()
