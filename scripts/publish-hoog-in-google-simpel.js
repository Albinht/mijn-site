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
  // User requested the Dutch keyword as the slug.
  slug: 'hoog-in-google',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Hoog in Google komen: complete SEO roadmap (stappenplan)',
  content: `
Hoog in Google komen betekent: je wordt zichtbaar op zoekopdrachten die passen bij je aanbod, en je pagina levert niet alleen verkeer maar ook acties (leads, aanvragen of aankopen).

Een #1 positie op een keyword dat niet converteert is geen succes. SEO gaat dus altijd over: intent + waarde + uitvoering.

## Hoe Google bepaalt wie hoog komt (simpel uitgelegd)

Google doet grofweg 3 dingen:

- Crawlen: je pagina vinden
- Indexeren: je pagina begrijpen en opslaan
- Ranken: de beste resultaten kiezen voor een zoekopdracht

Als je faalt op 1 van deze stappen, ga je niet structureel stijgen.

### Crawlen (gevonden worden)

Je helpt Google met:

- Interne links (logische navigatie)
- Sitemap.xml
- Robots.txt die niets belangrijks blokkeert
- Snelle pagina's (crawl budget)

### Indexeren (begrepen worden)

Je voorkomt indexatie problemen met:

- Goede status codes (geen 404/5xx)
- Logische canonicals (meestal self-referencing)
- Geen per ongeluk noindex
- Duplicate content oplossen (of bundelen)

### Ranken (gekozen worden)

Hier draait het om:

- Intent match (het juiste type pagina)
- Content kwaliteit en volledigheid
- Gebruikerservaring (snel, mobiel, duidelijk)
- Autoriteit en vertrouwen (links, mentions, brand)

## De 3 pijlers van hoog in Google staan

SEO bestaat in de praktijk uit 3 onderdelen die elkaar versterken:

- Content: de beste pagina maken voor een zoekintentie
- Techniek: zorgen dat Google alles kan crawlen, begrijpen en snel laden
- Autoriteit: laten zien dat je een betrouwbare bron bent (links + brand signalen)

Als 1 pijler ontbreekt, ga je bijna altijd plafonneren.

## Stap 0 - Meet eerst je basis

Zonder metingen weet je niet of je vooruitgaat.

- Koppel Google Search Console (impressions, clicks, indexatie)
- Koppel GA4 (conversies en kwaliteit)
- Maak een nulmeting: top paginas, top queries, top conversies

Tip: definieer 1-3 conversies die echt tellen (formulier, call, aankoop).

## Stap 1 - Fix indexatie en technische blokkades (prioriteit #1)

Als Google je paginas niet kan indexeren, doet de rest weinig.

Checklist:

- HTTPS goed (geen mixed content)
- Robots.txt blokkeert niets belangrijks
- Geen noindex op belangrijke paginas
- sitemap.xml bestaat en is ingediend
- Canonical tags kloppen
- 404/5xx errors oplossen en redirect chains voorkomen
- Snelheid op mobiel is acceptabel (Core Web Vitals als richting)

## Stap 2 - Kies keywords op intent (niet alleen volume)

Vraag altijd: wat wil iemand echt doen?

- Informational: leren (blog, gids)
- Commercial: vergelijken (best, vs, reviews)
- Transactional: kopen / offerte (landing)
- Navigational: merknaam

Kies keywords die passen bij je business value. Volume zonder intent is ruis.

## Stap 3 - Bouw topic clusters (niet losse paginas)

Google beloont sites die een onderwerp volledig dekken.

Praktisch:

- Kies 1 hoofdtopic (hub pagina)
- Voeg 3-8 ondersteunende paginas toe (subvragen)
- Link alles logisch aan elkaar (support <-> hub)

Dit bouwt topical authority en maakt interne links meteen nuttig.

## Stap 4 - Maak 1 pagina per intent (en maak hem beter dan top 3)

Checklist per pagina:

- Title + H1: duidelijk, met keyword, maar menselijk
- Intro: snel antwoord + wat je gaat oplossen
- Structuur: logische H2/H3, scanbaar
- Bewijs: voorbeelden, stappen, cases, screenshots
- FAQ: beantwoord vragen die je in de SERP ziet
- CTA: wat is de volgende stap?

Geen trucjes. Gewoon de beste pagina maken.

## Stap 5 - Interne links: maak je site logisch

Interne links zijn gratis SEO, maar alleen als ze logisch zijn.

- Link van sterke paginas naar je belangrijkste paginas
- Gebruik duidelijke ankerteksten (niet "klik hier")
- Belangrijke paginas binnen 2-3 klikken bereikbaar
- Gebruik breadcrumbs waar het past (UX + structuur)

## Stap 6 - Snippet en CTR verbeteren (vaak snelle winst)

Als je al impressions hebt, kan CTR optimalisatie snel werken.

- Title: voordeel + onderwerp + specificiteit
- Meta description: maak de belofte concreet
- Structured data waar relevant (FAQ, product, review) als het klopt

Kijk in Search Console welke paginas veel impressions maar lage CTR hebben.

## Stap 7 - Autoriteit: bouw vertrouwen (zonder spam)

Je hebt niet 1000 links nodig. Je hebt goede links nodig.

Wat wel werkt:

- Linkable assets (tools, research, templates)
- Partnerships en relevante communities
- PR en mentions (brand)
- Reclaim: broken backlinks terughalen

Wat niet werkt (op termijn):

- Spammy startpagina links
- Link farms en goedkope bulk links

## Stap 8 - Update wat al rankt (sneller dan nieuw)

De snelste groei komt vaak uit paginas die al in de top 20 staan.

- Pak queries waar je op positie 4-20 staat
- Update: intent, extra secties, betere voorbeelden
- Verbeter interne links
- Verbeter snippet (title/meta) voor hogere CTR

## Quick wins (binnen 14 dagen)

- Titles en meta descriptions uniek maken op je belangrijkste paginas
- 404 fouten fixen en redirect chains opruimen
- 5 interne links toevoegen naar je 3 belangrijkste pagina's
- 1 top pagina updaten die al impressions krijgt
- Afbeeldingen comprimeren en zware scripts schrappen

## 30 dagen plan (realistisch)

- Week 1: meten + indexatie fixes (robots/noindex/sitemap/404)
- Week 2: 1 quick win pagina updaten (positie 4-20) + interne links
- Week 3: 1 hub pagina maken of verbeteren + 2 supporting paginas
- Week 4: authority actie (reclaim/broken backlinks) + rapportage

## Valkuilen

- Alleen content publiceren zonder plan (geen clusters)
- Alleen techniek fixen, maar geen sterke paginas maken
- Links kopen / spam bouwen
- Niet meten (geen Search Console/GA4)
- Alles tegelijk aanpassen en daarna niet weten wat werkte

## Mini checklist

- Meting staat (GSC + GA4 + conversies)
- Indexatie ok (robots/noindex/sitemap/canonical)
- Fouten ok (404/5xx/redirect chains)
- Content per intent + clusters
- Interne links logisch (2-3 klikken)
- Snippet verbeterd waar CTR laag is
- Autoriteit plan zonder spam

## Conclusie

Hoog in Google komen is geen truc. Het is: techniek op orde, de beste pagina voor de intent, en vertrouwen bouwen.

Wil je dat ik meekijk naar jouw snelste groeikansen? Check /work-with-me.
`.trim(),
}

async function publishArticle() {
  try {
    console.log('Publishing hoog-in-google article to database...')

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
