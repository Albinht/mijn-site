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
const fence = '```'

const article = {
  slug: 'content-gap-analyse-ahrefs-stappenplan',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Content gap analyse in Ahrefs: complete stappenplan (met template)',
  content: `
Een content gap analyse in Ahrefs laat zien op welke keywords jouw concurrenten wel ranken, terwijl jouw site daar (nog) niet zichtbaar is. Het is een snelle manier om je content roadmap te vullen met onderwerpen die al bewezen werken in jouw markt.

Belangrijk: "gap" betekent niet automatisch dat je een nieuwe blog moet schrijven. Soms is de beste actie: een bestaande pagina upgraden, interne links aanpassen, of besluiten dat een keyword niet bij je business past.

## Wat is een content gap analyse (en wat niet)?

In de praktijk zie ik 3 soorten gaps:

- Keyword gap: concurrenten ranken op een specifiek keyword, jij niet.
- Topic gap: concurrenten hebben een cluster rondom een onderwerp, jij mist (delen van) die cluster.
- SERP gap: concurrenten matchen de intent beter, jij hebt wel content maar het verkeerde type pagina.

Een goede analyse combineert alle drie.

## Wanneer is dit het meest nuttig?

- Je site heeft al wat basisautoriteit (je komt soms in de top 100).
- Je wil sneller prioriteren dan "brainstormen op gevoel".
- Je wil content maken met duidelijke business value (leads/omzet), niet alleen verkeer.

Als je bijna nooit in de top 100 staat, dan is de volgorde meestal: techniek + interne links + 3-5 sterke paginas, en daarna pas schaal je met gaps.

## Stap 0 - Zet je scope en markt goed (2 minuten)

- Scope: analyseer je hele domein, of alleen een folder zoals /blog/?
- Markt: kies land + taal die je echt target.
- Doel: wil je blog intent (informational) of ook commercial/transactional keywords?

Schrijf 1 zin op: "Deze gap analyse gebruiken we om X soort paginas te plannen voor Y markt."

## Stap 1 - Kies echte concurrenten (geen ruis)

In Ahrefs: Site Explorer -> Organic competitors.

Gebruik dit als start, maar check daarna handmatig:

- Sluiten ze aan bij jouw product/dienst?
- Is de overlap niet alleen omdat het een groot info platform is?
- Krijgen ze verkeer op keywords die ook kunnen converteren voor jou?

Praktisch: neem 3-5 directe concurrenten. Voeg eventueel 1-2 content publishers toe voor ideeen, maar houd die apart.

## Stap 2 - Run de Content Gap tool in Ahrefs

In Ahrefs: Site Explorer -> Content gap.

- "Show keywords that the below targets rank for": je concurrenten
- "But the following target doesn't rank for": jouw domein

Start instellingen die vaak goed werken:

- Intersections: 2+ (minimaal 2 concurrenten ranken)
- Competitor position: top 10 (of top 20 als je meer volume wil)
- Jouw site: niet in top 100 (of niet in top 50 als je strenger wil zijn)

Tip: draai 2 versies:

- Versie A: top 10 + intersections 2+ (quick wins)
- Versie B: top 20 + intersections 3+ (strategische onderwerpen)

## Stap 3 - Maak de lijst bruikbaar met filters

De ruwe lijst is altijd te groot. Filter op:

- Intersections: 2+ of 3+ (minder branded ruis)
- Volume: kies een bandbreedte die past bij je niche (bijv. 50-5000)
- KD: stel een realistische grens (bijv. <= 20 voor jonge sites, <= 40 voor sterke sites)
- Clicks/traffic potential: voorkom keywords met veel "noise" in de SERP
- Exclude: competitor merken, "login", "jobs", "gratis" (als je paid bent), etc.

Kijk niet alleen naar volume. Een keyword met volume 100 kan meer omzet opleveren dan volume 2000 met lage intent.

## Stap 4 - Check intent en SERP features (10 keywords = 10 minuten)

Open de SERP in Ahrefs (of Google) voor 10 kandidaten en check:

- Wat rankt: blog, categorie, product, tool, lokale pagina?
- SERP noise: ads, shopping, local pack, AI overview, videos, PAA
- Hoe sterk is de content: dun artikel of echt goed uitgewerkt?

Als de top 10 compleet andere intent heeft dan wat jij kan/wil maken: skip of maak een ander type pagina.

## Stap 5 - New vs optimize (voorkom kannibalisatie)

Voor elk keyword cluster:

- Hebben we al een pagina die deze intent kan pakken?
  - Ja: optimize (structuur, snippet, intent match, interne links)
  - Nee: new page

Regel: 1 primaire intent per pagina. Niet 3 paginas die hetzelfde proberen te ranken.

## Stap 6 - Zet het om naar een contentplan (met template)

Maak 1 simpele sheet met kolommen:

- keyword / cluster
- intent (learn/compare/buy)
- page type (blog, landing, categorie, vergelijking)
- bestaande URL (als die er is)
- nieuwe URL slug (voor planning)
- KD, volume, clicks (indicatief)
- business value (hoog/middel/laag)
- effort (laag/middel/hoog)
- prioriteit (P1/P2/P3)
- interne links nodig (van welke paginas)
- 1-2 competitor URLs om te benchmarken

Template:

${fence}text
keyword_cluster | intent | page_type | current_url | new_slug | kd | volume | clicks | business_value | effort | priority | internal_links_from | competitor_urls
${fence}

## Stap 7 - Publiceer in batches en meet

- Werk in batches per cluster (1 hub + 3-8 supporting paginas)
- Zet interne links meteen goed (support <-> hub)
- Meet in Search Console: impressions -> clicks -> posities
- Geef het 4-12 weken (langer bij nieuwe sites)

Focus op posities 4-20: daar zit vaak de snelste groei.

## Veelgemaakte fouten

- Verkeerde concurrenten (marktplaatsen, Wikipedia, nieuws) meenemen
- Alles selecteren op volume, zonder intent of business value
- Geen SERP check doen
- Nieuw schrijven terwijl je al een pagina hebt die je had kunnen upgraden
- Geen interne links plannen
- Te vroeg op hoge KD keywords mikken

## Mini checklist

- Markt (land/taal) klopt
- 3-5 echte concurrenten gekozen
- Content Gap gedraaid met intersections 2+
- Branded en ruis gefilterd
- 10 SERPs handmatig gecheckt op intent
- New vs optimize per cluster beslist
- Sheet gevuld met prioriteit + effort
- Content batches gepland + interne links meegenomen
- Meting staat (GSC + GA4)
`.trim(),
}

async function publishArticle() {
  try {
    console.log('Publishing Ahrefs content gap article to database...')

    const result = await prisma.article.upsert({
      where: { slug: article.slug },
      update: {
        title: article.title,
        topic: article.topic,
        content: article.content,
        status: article.status,
        publishedAt: new Date(),
      },
      create: {
        title: article.title,
        slug: article.slug,
        content: article.content,
        topic: article.topic,
        status: article.status,
        source: 'manual',
        publishedAt: new Date(),
      },
    })

    console.log('Article published successfully!')
    console.log(`URL: /blog/${result.slug}`)
    console.log(`ID: ${result.id}`)
  } catch (error) {
    console.error('Error publishing article:', error)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

publishArticle()
