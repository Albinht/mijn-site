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
  slug: 'wat-is-seo-optimalisatie',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'What is SEO (search engine optimization)? Complete guide + workflow',
  content: `SEO (search engine optimization) is the work you do to earn qualified visits from organic search results. The goal is not rankings for their own sake, but predictable traffic that converts.

If you want the one-line definition: SEO aligns intent, content, technical foundations, and authority so search engines can confidently recommend your page.

## How search engines work (crawl -> render -> index -> rank)

Search engines do four things, in order:

1. Crawl: discover your URLs via links and sitemaps.
2. Render: load the page (often with JavaScript) to see what users see.
3. Index: store and understand the content (topics, entities, intent).
4. Rank: decide which pages best satisfy the query.

SEO breaks when one step fails:

- Crawl issues: broken internal links, blocked robots.txt, slow server
- Render issues: content only visible after JS, blocked resources
- Index issues: noindex, wrong canonicals, duplicates, thin pages
- Rank issues: wrong intent, weak content, weak authority, poor UX

## What SEO optimization includes (beyond keywords)

Modern SEO is a system, not a checklist:

- Market research: what your audience wants and how they search
- Information architecture: how pages relate (clusters and internal links)
- Content production: pages that answer intent with depth and proof
- Technical foundations: performance, indexation, rendering
- Authority building: earning references and brand signals
- Measurement: conversions and leading indicators

## The 3 pillars of SEO (what actually matters)

### 1) Content (intent, depth, usefulness)

Good SEO content is not keyword stuffing. It is:

- The right page type for the SERP (guide vs category vs landing vs comparison)
- A fast answer in the intro, then depth for serious visitors
- Clear structure (H2/H3) and scannability
- Evidence: examples, screenshots, data, steps, FAQs
- Freshness: updated processes, screenshots, and internal links

Rule: one primary intent per page. If one page tries to do three jobs, it usually ranks for none.

### 2) Technical SEO (indexation and experience)

Technical SEO is the foundation. Prioritize:

- Indexing control: robots.txt, noindex, canonical, sitemap
- URL consistency: HTTPS, www/non-www, trailing slash, redirect hygiene
- Internal links: click depth, orphan pages, breadcrumbs
- Performance: especially mobile and Core Web Vitals
- Rendering: does Google see the content without issues?
- Structured data: helps understanding and rich results

### 3) Authority (trust and defensibility)

Authority is why two similar pages do not rank the same.

What builds real authority:

- Relevant backlinks from real sites (quality > quantity)
- Mentions, reviews, and brand searches
- Content that gets referenced because it is the best resource

Avoid shortcuts. Low-quality links create a ceiling or a penalty risk.

## A practical SEO workflow (0-90 days)

### Days 0-7: measurement and baseline

- Connect Search Console and GA4
- Define 1-3 primary conversions
- Export top pages and top queries
- Note pages in positions 4-20 (quick wins list)

### Days 8-30: fix blockers and capture quick wins

- Fix P0 technical issues: indexation, 5xx, redirect chains, broken key pages
- Improve 5-10 pages already getting impressions:
  - better title/meta for CTR
  - stronger intro and missing sections
  - internal links from relevant pages
- Build a simple content map: topics -> one main page each

### Days 31-60: build topic clusters

- Pick 2-4 topic clusters
- Create one strong hub page per cluster
- Publish 3-8 supporting pages per cluster
- Add internal links both ways and from navigation where relevant

### Days 61-90: scale and make it defensible

- Refresh top pages with new proof and better UX
- Start authority work: digital PR, partnerships, link reclamation
- Add structured data where it fits
- Create a monthly cadence (publish, update, links, technical)

## How to pick keywords that make money

Volume is not a strategy. Use a simple filter:

- Intent: informational, commercial, or transactional?
- Business value: will this lead to the right conversion?
- SERP reality: ads/local/AI answers can reduce clicks
- Ability to win: can you beat the current top results?
- Content fit: can one page satisfy the intent fully?

For existing sites, start in Search Console: find queries where you already get impressions and upgrade those pages.

## On-page SEO checklist for one page

Before you publish, check:

- Title: clear topic + clear benefit, not just keywords
- H1: matches the query and page type
- Intro: answer fast, then promise depth
- Headings: cover sub-questions the SERP implies
- Internal links: to and from relevant pages
- Media: examples, screenshots, visuals where helpful
- CTA: next step for the visitor (quote, demo, contact, buy)
- Schema: where relevant and correct

## Common mistakes

- Doing keyword research without SERP checking
- Publishing random posts without clusters and internal links
- Creating multiple pages for the same intent (cannibalization)
- Fixing every technical warning instead of prioritizing P0/P1
- Tracking rankings but not conversions
- Never updating content that already ranks

## SEO in 2026: AI answers and richer SERPs

AI-driven answers and rich features reduce clicks for some queries. Your response is:

- Be clear early: short answer, then depth
- Add proof: experience, examples, data
- Structure content: headings, lists, FAQ where useful
- Build brand trust: mentions, reviews, citations

The fundamentals do not change: match intent, remove friction, earn trust.

## Conclusion

SEO optimization is not a trick. It is a repeatable process: measure, fix blockers, publish the best pages for real intent, connect them with internal links, and earn authority.

Want help turning your site into a prioritized roadmap? See /work-with-me.
`.trim(),
  translations: {
    nl: {
      title: 'Wat is SEO (zoekmachineoptimalisatie)? Complete gids en werkwijze',
      topic: 'SEO',
      metaTitle: 'Wat is SEO optimalisatie? | Complete gids en werkwijze',
      metaDescription: 'Uitgebreide SEO gids: hoe zoekmachines werken, de 3 pijlers, een 0-90 dagen workflow en een checklist om te starten.',
      content: `
SEO (zoekmachineoptimalisatie) is het werk waarmee je meer gekwalificeerde bezoekers uit organische zoekresultaten krijgt. Het doel is niet hoog staan om het hoog staan, maar voorspelbaar verkeer dat converteert.

In 1 zin: SEO koppelt intentie, content, techniek en autoriteit zodat zoekmachines jouw pagina durven tonen.

## Hoe zoekmachines werken (crawl -> render -> indexeren -> ranken)

Zoekmachines doen vier stappen:

1. Crawlen: URLs vinden via links en sitemaps.
2. Renderen: pagina laden (vaak met JavaScript).
3. Indexeren: begrijpen en opslaan.
4. Ranken: bepalen welke pagina het beste past.

SEO faalt als een stap stuk gaat:

- Crawl issues: kapotte interne links, robots.txt blokkades, trage server
- Render issues: content alleen zichtbaar na JS
- Index issues: noindex, verkeerde canonicals, duplicates
- Rank issues: verkeerde intent, zwakke content, weinig autoriteit

## De 3 pijlers van SEO

### 1) Content (intentie, diepte, nut)

- Het juiste paginatype voor de SERP
- Snel antwoord bovenaan, daarna diepte
- Duidelijke structuur (H2/H3)
- Bewijs: voorbeelden, screenshots, data, stappen, FAQ

Regel: 1 primaire intent per pagina.

### 2) Techniek (indexatie en ervaring)

- Indexatie controle: robots.txt, noindex, canonical, sitemap
- URL consistentie: HTTPS, redirects netjes
- Interne links: click depth, orphan pages, breadcrumbs
- Performance: mobiel en Core Web Vitals
- Rendering: ziet Google de content?

### 3) Autoriteit (vertrouwen)

- Relevante backlinks (kwaliteit > kwantiteit)
- Mentions, reviews, brand searches
- Content die anderen citeren

## Praktische workflow (0-90 dagen)

### Dagen 0-7

- Search Console + GA4 koppelen
- 1-3 conversies bepalen
- Top paginas en queries exporteren

### Dagen 8-30

- P0 blockers fixen
- 5-10 paginas met impressions verbeteren
- Topics mappen -> 1 hoofd pagina per topic

### Dagen 31-90

- Topic clusters bouwen (hub + supporting)
- Interne links beide kanten op
- Autoriteit opbouwen en winnaars updaten

## Keywords kiezen die geld opleveren

- Intent match
- Business value
- SERP realiteit (ads/lokaal/AI)
- Kans om te winnen
- 1 pagina kan intent volledig afdekken

## Veelgemaakte fouten

- Geen SERP check
- Losse blogs zonder clusters
- Kannibalisatie (meerdere paginas, zelfde intent)
- Alles fixen behalve P0/P1
- Rankings meten zonder conversies

## Conclusie

SEO is een herhaalbaar proces: meten, blockers fixen, beste paginas bouwen, verbinden, autoriteit verdienen.
`.trim(),
    },
    en: {
      title: 'What is SEO (search engine optimization)? Complete guide + workflow',
      topic: 'SEO',
      metaTitle: 'What is SEO optimization? | Complete guide and workflow',
      metaDescription: 'Complete SEO guide: how search engines work, the 3 pillars, a 0-90 day workflow, and a practical checklist.',
      content: `
SEO (search engine optimization) is the work you do to earn qualified visits from organic search results. The goal is not rankings for their own sake, but predictable traffic that converts.

If you want the one-line definition: SEO aligns intent, content, technical foundations, and authority so search engines can confidently recommend your page.

## How search engines work (crawl -> render -> index -> rank)

Search engines do four things, in order:

1. Crawl: discover your URLs via links and sitemaps.
2. Render: load the page (often with JavaScript) to see what users see.
3. Index: store and understand the content (topics, entities, intent).
4. Rank: decide which pages best satisfy the query.

SEO breaks when one step fails:

- Crawl issues: broken internal links, blocked robots.txt, slow server
- Render issues: content only visible after JS, blocked resources
- Index issues: noindex, wrong canonicals, duplicates, thin pages
- Rank issues: wrong intent, weak content, weak authority, poor UX

## The 3 pillars of SEO

### 1) Content (intent, depth, usefulness)

- Right page type for the SERP
- Fast answer up front, depth for serious readers
- Clear structure (H2/H3) and scannability
- Evidence: examples, screenshots, data, steps, FAQ

Rule: one primary intent per page.

### 2) Technical SEO (indexation and experience)

- Indexing control: robots.txt, noindex, canonical, sitemap
- URL consistency: HTTPS, www/non-www, trailing slash, redirect hygiene
- Internal links: click depth, orphan pages, breadcrumbs
- Performance: mobile and Core Web Vitals
- Rendering: Google can see the content

### 3) Authority (trust and defensibility)

- Relevant backlinks from real sites (quality > quantity)
- Mentions, reviews, and brand searches
- Content that gets referenced

## Practical workflow (0-90 days)

### Days 0-7

- Connect Search Console and GA4
- Define 1-3 conversions
- Export top pages and queries

### Days 8-30

- Fix P0 blockers
- Improve 5-10 pages with impressions
- Map topics -> one main page each

### Days 31-90

- Build topic clusters (hub + supporting pages)
- Add internal links both ways
- Start authority work and update winners

## How to pick keywords that make money

- Intent fit
- Business value
- SERP reality (ads/local/AI answers)
- Ability to win
- One page can satisfy the intent

## Common mistakes

- No SERP check
- Random posts without clusters
- Cannibalization (multiple pages, same intent)
- Fixing every warning instead of P0/P1
- Tracking rankings but not conversions

## Conclusion

SEO is a repeatable process: measure, fix blockers, publish the best pages, connect them, and earn authority.
`.trim(),
    },
    de: {
      title: 'Was ist SEO (Suchmaschinenoptimierung)? Kompletter Guide und Ablauf',
      topic: 'SEO',
      metaTitle: 'Was ist SEO? | Kompletter Guide',
      metaDescription: 'SEO Guide mit Tiefe: Suchmaschinen Ablauf, 3 Saeulen, 0-90 Tage Workflow und praktische Checks.',
      content: `
SEO (Suchmaschinenoptimierung) ist die Arbeit, mit der du qualifizierte Besucher aus organischen Suchergebnissen gewinnst. Ziel sind planbare Besucher und Conversions, nicht Rankings um jeden Preis.

Kurz: SEO verbindet Intent, Content, Technik und Autoritaet, damit Suchmaschinen deine Seite sicher empfehlen.

## Wie Suchmaschinen arbeiten (crawl -> render -> index -> rank)

- Crawlen: URLs ueber Links und Sitemaps finden
- Rendern: Seite laden (oft mit JavaScript)
- Indexieren: Inhalte verstehen und speichern
- Ranken: beste Ergebnisse auswaehlen

Probleme entstehen, wenn ein Schritt faellt: Crawl Fehler, Rendering Probleme, falsche Canonicals oder falscher Intent.

## Die 3 Saeulen

### Content

- Richtiger Seitentyp fuer die SERP
- Schnelle Antwort, dann Tiefe
- Klare Struktur und Beweise

### Technik

- robots/noindex/canonical/sitemap
- URL Konsistenz und Redirect Hygiene
- Interne Links und Performance
- Rendering: Google sieht die Inhalte

### Autoritaet

- Relevante Backlinks
- Mentions, Reviews, Brand Searches
- Content der zitiert wird

## Workflow (0-90 Tage)

- Tage 0-7: Messen, Baseline, Top Seiten exportieren
- Tage 8-30: P0 Fixes, Seiten mit Impressions verbessern
- Tage 31-90: Topic Cluster, interne Links, Autoritaet starten

## Keywords die sich lohnen

- Intent passt
- Business Value klar
- SERP nicht zu noisy
- Realistische Chance zu gewinnen

## Fazit

SEO ist ein Prozess: messen, Blocker fixen, beste Seiten bauen, verlinken, Autoritaet verdienen.
`.trim(),
    },
    sv: {
      title: 'Vad ar SEO (sokmotoroptimering)? Komplett guide och workflow',
      topic: 'SEO',
      metaTitle: 'Vad ar SEO? | Komplett guide',
      metaDescription: 'SEO guide med djup: hur sokmotorer fungerar, 3 pelare och en 0-90 dagars workflow.',
      content: `
SEO ar arbetet du gor for att fa kvalificerad trafik fran organiska resultat. Malet ar inte bara rankingar, utan trafik som konverterar.

Kort: SEO kopplar intent, content, teknik och auktoritet sa sokmotorer valjer din sida.

## Hur sokmotorer fungerar (crawl -> render -> index -> rank)

- Crawl: hitta URLs via lankar och sitemaps
- Render: ladda sidan (ofta med JavaScript)
- Index: forsta och lagra innehall
- Rank: valja basta svar

## Tre pelare

### Content

- Ratt sidtyp for SERP
- Snabbt svar + djup
- Struktur och bevis

### Teknik

- robots/noindex/canonical/sitemap
- URL konsistens och redirects
- Internlankar och performance
- Rendering: Google ser innehall

### Auktoritet

- Relevanta backlinks
- Mentions och reviews
- Innehall som citeras

## Workflow (0-90 dagar)

- 0-7: mata, baseline, top sidor
- 8-30: P0 fixes, forbedra sidor med impressions
- 31-90: topic clusters, interna lankar, auktoritet

## Keyword val

- Intent match
- Affarsvarde
- SERP verklighet
- Realistisk vinst

## Slutsats

SEO ar ett repetitivt system: mata, fixa, bygg, linka, bygg auktoritet.
`.trim(),
    },
    da: {
      title: 'Hvad er SEO (soegemaskineoptimering)? Komplet guide og workflow',
      topic: 'SEO',
      metaTitle: 'Hvad er SEO? | Komplet guide',
      metaDescription: 'SEO guide med dybde: hvordan sokmotorer virker, 3 soejler og en 0-90 dages workflow.',
      content: `
SEO er arbejdet du gor for at fa kvalificeret organisk trafik. Malet er ikke kun placeringer, men trafik der konverterer.

Kort: SEO samler intent, content, teknik og autoritet sa sokmotorer vaelger din side.

## Hvordan sokmotorer virker (crawl -> render -> index -> rank)

- Crawl: find URLs via links og sitemaps
- Render: load siden (ofte med JavaScript)
- Index: forsta og gem indhold
- Rank: vaelg de bedste svar

## Tre soejler

### Content

- Rigtig sidetype til SERP
- Hurtigt svar + dybde
- Struktur og bevis

### Teknik

- robots/noindex/canonical/sitemap
- URL konsistens og redirects
- Interne links og performance
- Rendering: Google ser indhold

### Autoritet

- Relevante backlinks
- Mentions og reviews
- Indhold der citeres

## Workflow (0-90 dage)

- 0-7: maaling, baseline, top sider
- 8-30: P0 fixes, forbedr sider med impressions
- 31-90: topic clusters, interne links, autoritet

## Keyword valg

- Intent match
- Business value
- SERP realitet
- Realistisk chance

## Konklusion

SEO er en proces: maal, fix, byg, link, opbyg autoritet.
`.trim(),
    },
    fr: {
      title: 'Qu est-ce que le SEO? Guide complet et workflow',
      topic: 'SEO',
      metaTitle: 'Qu est-ce que le SEO? | Guide complet',
      metaDescription: 'Guide SEO complet: fonctionnement des moteurs, 3 piliers et workflow 0-90 jours.',
      content: `
Le SEO est le travail qui permet d'obtenir du trafic qualifie depuis les resultats organiques. Le but n'est pas seulement les positions, mais un trafic qui convertit.

En bref: SEO aligne intent, contenu, technique et autorite pour que les moteurs choisissent ta page.

## Comment les moteurs fonctionnent (crawl -> render -> index -> rank)

- Crawl: trouver les URLs via liens et sitemaps
- Render: charger la page (souvent avec JavaScript)
- Index: comprendre et stocker le contenu
- Rank: choisir les meilleurs resultats

## 3 piliers

### Contenu

- Bon type de page pour la SERP
- Reponse rapide + profondeur
- Structure et preuves

### Technique

- robots/noindex/canonical/sitemap
- URLs coherentes et redirects propres
- Liens internes et performance
- Rendering: Google voit le contenu

### Autorite

- Backlinks pertinents
- Mentions et avis
- Contenu qui se fait citer

## Workflow (0-90 jours)

- 0-7: mesure, baseline, top pages
- 8-30: P0 fixes, ameliorer pages avec impressions
- 31-90: topic clusters, liens internes, autorite

## Choix des mots-cles

- Intent match
- Valeur business
- Realite SERP
- Chance realiste

## Conclusion

Le SEO est un systeme: mesurer, corriger, construire, relier, gagner l'autorite.
`.trim(),
    },
    it: {
      title: 'Che cos e la SEO? Guida completa e workflow',
      topic: 'SEO',
      metaTitle: 'Che cos e la SEO? | Guida completa',
      metaDescription: 'Guida SEO completa: come funzionano i motori, 3 pilastri e workflow 0-90 giorni.',
      content: `
La SEO e il lavoro che porta traffico qualificato dai risultati organici. L'obiettivo non e solo la posizione, ma traffico che converte.

In breve: SEO allinea intent, contenuti, tecnica e autorevolezza per far scegliere la tua pagina ai motori.

## Come funzionano i motori (crawl -> render -> index -> rank)

- Crawl: trovare URL via link e sitemap
- Render: caricare la pagina (spesso con JavaScript)
- Index: capire e salvare il contenuto
- Rank: scegliere i migliori risultati

## 3 pilastri

### Contenuti

- Tipo di pagina giusto per la SERP
- Risposta veloce + profondita
- Struttura e prove

### Tecnica

- robots/noindex/canonical/sitemap
- URL coerenti e redirect puliti
- Link interni e performance
- Rendering: Google vede il contenuto

### Autorevolezza

- Backlink rilevanti
- Mentions e review
- Contenuto che viene citato

## Workflow (0-90 giorni)

- 0-7: misurazioni, baseline, top pagine
- 8-30: P0 fixes, migliorare pagine con impressions
- 31-90: topic clusters, link interni, autorevolezza

## Scelta keyword

- Intent match
- Valore business
- Realta SERP
- Chance realistica

## Conclusione

La SEO e un processo: misurare, correggere, costruire, collegare, guadagnare autorevolezza.
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    console.log('Publishing wat-is-seo-optimalisatie article to database...')

    const result = await prisma.article.upsert({
      where: { slug: article.slug },
      update: {
        title: article.title,
        topic: article.topic,
        content: article.content,
        translations: article.translations,
        status: article.status,
        publishedAt: new Date(),
      },
      create: {
        title: article.title,
        slug: article.slug,
        content: article.content,
        topic: article.topic,
        status: article.status,
        translations: article.translations,
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
