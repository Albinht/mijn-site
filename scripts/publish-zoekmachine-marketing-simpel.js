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
