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
  translations: {
    en: {
      title: 'Ahrefs content gap analysis: complete step-by-step (with template)',
      topic: 'SEO',
      metaTitle: 'Ahrefs content gap analysis | Full workflow',
      metaDescription: 'Run a content gap analysis in Ahrefs to find keyword and topic gaps, filter noise, validate intent, and turn results into a prioritized content plan.',
      content: `
An Ahrefs content gap analysis shows which keywords your competitors rank for while your site does not (yet). It is one of the fastest ways to turn "we need content ideas" into a prioritized roadmap.

Important: a "gap" does not automatically mean "write a new blog post". Sometimes the best move is to upgrade an existing page, fix internal links, or decide a keyword is not relevant to your business.

## What is a content gap analysis (and what it is not)?

In practice there are 3 gaps:

- Keyword gap: competitors rank for a keyword, you do not.
- Topic gap: competitors cover a topic cluster, you only cover part of it (or none).
- SERP gap: competitors match intent better; you might have content, but the wrong page type.

A strong analysis combines all three.

## When is this most useful?

- Your site has some baseline authority (you sometimes show up in the top 100).
- You want to prioritize faster than brainstorming.
- You want business value (leads/revenue), not just traffic.

If you almost never rank in the top 100, the usual order is: technical basics + internal links + a few strong pages, then scale with gap work.

## Step 0 - Set scope and market (2 minutes)

- Scope: full domain, or a folder like /blog/?
- Market: choose the country + language you actually target.
- Goal: informational only, or also commercial/transactional keywords?

Write one sentence: "We use this gap analysis to plan X page types for Y market."

## Step 1 - Pick real competitors (avoid noise)

In Ahrefs: Site Explorer -> Organic competitors.

Use it as a starting point, then manual check:

- Do they sell the same thing?
- Are they not just a giant info site?
- Do they get traffic from keywords that could convert for you?

Practical: pick 3-5 direct competitors. Optionally add 1-2 publishers separately for inspiration.

## Step 2 - Run the Content Gap tool

In Ahrefs: Site Explorer -> Content gap.

- "Show keywords that the below targets rank for": competitors
- "But the following target doesn't rank for": your domain

Good starting settings:

- Intersections: 2+ (at least 2 competitors rank)
- Competitor position: top 10 (or top 20 for broader discovery)
- Your site: not in top 100 (or not in top 50 if stricter)

Tip: run two versions:

- Version A: top 10 + intersections 2+ (quick wins)
- Version B: top 20 + intersections 3+ (strategic topics)

## Step 3 - Filter the list into something usable

The raw list is always too big. Filter by:

- Intersections: 2+ or 3+ (reduces brand noise)
- Volume: pick a range that fits your niche (example 50-5000)
- KD: set a realistic cap (example <= 20 for new sites, <= 40 for strong sites)
- Clicks/traffic potential: avoid keywords with lots of "SERP noise"
- Exclude: competitor brands, "login", "jobs", "free" (if you are paid), etc.

Do not look at volume only. A keyword with volume 100 can outperform volume 2000 if intent is stronger.

## Step 4 - Validate intent and SERP features (10 keywords = 10 minutes)

Open the SERP for 10 candidates (in Ahrefs or Google) and check:

- What ranks: blog, category, product, tool, local page?
- SERP noise: ads, shopping, local pack, AI overview, videos, PAA
- Content strength: thin pages or truly strong content?

If the top 10 has a completely different intent than what you can/want to create: skip, or build a different page type.

## Step 5 - New vs optimize (avoid cannibalization)

For each cluster:

- Do you already have a page that can win this intent?
  - Yes: optimize (structure, snippet, intent match, internal links)
  - No: create a new page

Rule: one primary intent per page. Do not create 3 pages trying to rank for the same thing.

## Step 6 - Turn results into a content plan (template)

Build one simple sheet with:

- keyword / cluster
- intent (learn/compare/buy)
- page type (blog, landing, category, comparison)
- current URL (if it exists)
- planned new slug (for planning)
- KD, volume, clicks (indicative)
- business value (high/medium/low)
- effort (low/medium/high)
- priority (P1/P2/P3)
- internal links needed (from which pages)
- 1-2 competitor URLs to benchmark

Template:

${fence}text
keyword_cluster | intent | page_type | current_url | new_slug | kd | volume | clicks | business_value | effort | priority | internal_links_from | competitor_urls
${fence}

## Step 7 - Publish in batches and measure

- Work per cluster (1 hub + 3-8 supporting pages)
- Add internal links immediately (support <-> hub)
- Measure in Search Console: impressions -> clicks -> positions
- Give it 4-12 weeks (longer for new sites)

Focus on positions 4-20: that is often the fastest growth.

## Common mistakes

- Picking the wrong competitors (marketplaces, Wikipedia, news)
- Selecting by volume only and ignoring intent/business value
- Skipping SERP checks
- Writing new pages while an existing page could be upgraded
- Not planning internal links
- Targeting high KD too early

## Mini checklist

- Market (country/language) is correct
- Picked 3-5 real competitors
- Ran Content Gap with intersections 2+
- Filtered brand terms and noise
- Manually checked 10 SERPs for intent
- Decided new vs optimize per cluster
- Filled a sheet with priority + effort
- Planned content batches + internal links
- Measurement is set (GSC + GA4)
`.trim(),
    },
    nl: {
      title: 'Content gap analyse in Ahrefs: complete stappenplan (met template)',
      topic: 'SEO',
      metaTitle: 'Content gap analyse in Ahrefs | Compleet stappenplan',
      metaDescription: 'Complete gids voor content gap analyse in Ahrefs: concurrenten kiezen, filters instellen, intent valideren en omzetten naar een contentplan (met template).',
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
    },
    de: {
      title: 'Ahrefs Content Gap Analyse: kompletter Workflow (mit Template)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Content Gap Analyse | Kompletter Workflow',
      metaDescription: 'Kompletter Ahrefs Content Gap Workflow: Keyword und Topic Gaps finden, SERP Intent pruefen, Noise filtern und in einen Content Plan umsetzen.',
      content: `
Eine Content Gap Analyse in Ahrefs zeigt Keywords, fuer die Wettbewerber ranken, du aber (noch) nicht sichtbar bist. Das ist ein schneller Weg, um aus "wir brauchen Content Ideen" eine priorisierte Roadmap zu machen.

Wichtig: Eine "Gap" bedeutet nicht automatisch "neuen Blog schreiben". Oft ist es besser, eine bestehende Seite zu upgraden, interne Links zu setzen, oder ein Keyword bewusst zu skippen.

## Was ist eine Content Gap Analyse?

In der Praxis gibt es 3 Luecken:

- Keyword Gap: Wettbewerber ranken fuer ein Keyword, du nicht.
- Topic Gap: Wettbewerber haben ein Topic Cluster, du deckst nur einen Teil ab.
- SERP Gap: Wettbewerber matchen die Intent besser (anderer Seitentyp).

## Wann bringt es am meisten?

- Du rankst manchmal in den Top 100.
- Du willst nach Business Value priorisieren, nicht nur nach Volume.

Wenn du fast nie Top 100 erreichst: erst Technik + interne Links + 3-5 starke Seiten, dann skalieren.

## Schritt 0 - Scope und Markt setzen

- Scope: ganze Domain oder nur ein Folder wie /blog/?
- Markt: Land + Sprache, die du wirklich targetest.

## Schritt 1 - Echte Wettbewerber waehlen

In Ahrefs: Site Explorer -> Organic competitors.

Check manuell:

- Bieten sie das Gleiche an?
- Sind es keine "Mega Info Sites" ohne Kauf-Intent?
- Ranken sie fuer Keywords, die fuer dich konvertieren koennen?

## Schritt 2 - Content Gap Tool nutzen

In Ahrefs: Site Explorer -> Content gap.

- Targets: 3-5 Wettbewerber
- "Doesn't rank": deine Domain

Gute Startwerte:

- Intersections: 2+ oder 3+
- Competitor Position: Top 10 (Quick Wins) oder Top 20 (breiter)
- Du: nicht in Top 100 (oder Top 50 wenn strenger)

## Schritt 3 - Filtern (damit es brauchbar wird)

- Intersections: 2+ / 3+
- Volume Range passend zur Nische
- KD Cap realistisch (z.B. <= 20 neu, <= 40 stark)
- Clicks/Traffic Potential: SERP Noise vermeiden
- Exclude: Brand Terms, login, jobs, etc.

## Schritt 4 - Intent und SERP Features pruefen

Oeffne 10 Keywords und pruefe:

- Seitentyp (Blog, Kategorie, Produkt, Tool)
- SERP Noise: Ads, Shopping, Local Pack, AI Overview, Videos
- Content Tiefe: duenn vs stark

## Schritt 5 - New vs Optimize

- Gibt es schon eine passende Seite? Dann optimieren.
- Sonst: neue Seite planen.

Regel: eine Haupt-Intent pro Seite (Cannibalization vermeiden).

## Schritt 6 - Content Plan (Template)

Baue eine einfache Liste mit:

- Cluster, Intent, Page Type, current URL, planned slug
- KD, Volume, Clicks (indikativ)
- Business Value, Effort, Priority
- interne Links + 1-2 Competitor URLs

## Hauefige Fehler

- Falsche Wettbewerber (Marktplatz, Wikipedia, News)
- Nur Volume, ohne Intent/Business Value
- Keine SERP Checks
- Neue Seiten statt Upgrade von bestehenden
- Keine interne Links geplant

## Mini Checkliste

- Markt korrekt
- 3-5 echte Wettbewerber
- Gap Run mit intersections 2+
- Intent via SERP geprueft
- New vs Optimize entschieden
- Content Plan + interne Links geplant
`.trim(),
    },
    sv: {
      title: 'Ahrefs content gap-analys: komplett workflow (med template)',
      topic: 'SEO',
      metaTitle: 'Ahrefs content gap-analys | Komplett workflow',
      metaDescription: 'Komplett content gap-workflow i Ahrefs: hitta keyword och topic gaps, filtrera noise, validera intent och bygg en prioriterad plan.',
      content: `
En content gap-analys i Ahrefs visar vilka keywords konkurrenter rankar for, medan din site inte ar synlig (annu). Det ar ett snabbt satt att ga fran "vi behover ideer" till en prioriterad roadmap.

Viktigt: en "gap" betyder inte automatiskt "skriv en ny blog". Ibland ar basta draget att uppgradera en befintlig sida, fixa interna lankar eller skippa keywordet.

## Tre typer av gaps

- Keyword gap: de rankar for ett keyword, du gor inte.
- Topic gap: de har ett helt cluster, du saknar delar.
- SERP gap: de matchar intent battre (annan page type).

## Steg 0 - Satt scope och marknad

- Scope: hela domanen eller en folder som /blog/?
- Marknad: ratt land + sprak.

## Steg 1 - Valj riktiga konkurrenter

I Ahrefs: Site Explorer -> Organic competitors. Dubbelkolla manuellt (undvik Wikipedia/marketplaces om irrelevant).

## Steg 2 - Kor Content Gap

Bra start:

- Intersections: 2+ eller 3+
- Konkurrenter i top 10 (quick wins) eller top 20 (bredare)
- Du: inte i top 100 (eller top 50 om strikt)

## Steg 3 - Filtrera noise

- Volume range som passar din nisch
- KD cap realistiskt
- Klick/traffic potential for att undvika SERP noise
- Exclude: brand terms, login, jobs, osv

## Steg 4 - Validera intent (10 keywords)

Kolla:

- Vad rankar: blog, kategori, produkt, tool?
- SERP features: ads, shopping, local pack, AI overview, video
- Content kvalitet: tunn vs stark

## Steg 5 - New vs optimize

- Finns en sida som kan vinna intent? Optimera.
- Annars: planera ny sida.

## Steg 6 - Bygg en content plan

Skapa en sheet med: cluster, intent, page type, url/slug, KD/volume/klick, business value, effort, priority, interna lankar, competitor URLs.

## Mini checklista

- Marknad korrekt
- 3-5 konkurrenter
- Intersections 2+ kordat
- Intent checkad i SERP
- New vs optimize beslutat
- Plan + interna lankar klara
`.trim(),
    },
    da: {
      title: 'Ahrefs content gap analyse: komplet workflow (med template)',
      topic: 'SEO',
      metaTitle: 'Ahrefs content gap analyse | Komplet workflow',
      metaDescription: 'Komplet content gap-workflow i Ahrefs: find keyword og topic gaps, filtrer noise, tjek intent og byg en prioriteret plan.',
      content: `
En content gap analyse i Ahrefs viser hvilke keywords konkurrenter ranker for, mens dit site ikke er synligt (endnu). Det er en hurtig vej fra "vi mangler ideer" til en prioriteret roadmap.

Vigtigt: en "gap" betyder ikke automatisk at du skal skrive en ny blog. Ofte er bedste move at opdatere en eksisterende side, fixe interne links eller skippe keywordet.

## Tre typer gaps

- Keyword gap: de ranker for et keyword, du gor ikke.
- Topic gap: de har et helt cluster, du mangler dele.
- SERP gap: de matcher intent bedre (anden side type).

## Trin 0 - Saet scope og marked

- Scope: hele domanet eller en folder som /blog/?
- Marked: korrekt land + sprog.

## Trin 1 - Vaelg rigtige konkurrenter

I Ahrefs: Site Explorer -> Organic competitors. Dobbelttjek manuelt (undgaa Wikipedia/marketplaces hvis irrelevant).

## Trin 2 - Koer Content Gap

God start:

- Intersections: 2+ eller 3+
- Konkurrenter i top 10 (quick wins) eller top 20 (bredere)
- Dig: ikke i top 100 (eller top 50 hvis streng)

## Trin 3 - Filtrer noise

- Volume range der passer til nichen
- KD cap realistisk
- Clicks/traffic potential for at undgaa SERP noise
- Exclude: brand terms, login, jobs, osv

## Trin 4 - Tjek intent (10 keywords)

Kig:

- Hvad ranker: blog, kategori, produkt, tool?
- SERP features: ads, shopping, local pack, AI overview, video
- Content kvalitet: tynd vs staerk

## Trin 5 - New vs optimize

- Findes der en side som kan vinde intent? Optimere.
- Ellers: planlaeg ny side.

## Trin 6 - Byg en content plan

Lav en sheet med: cluster, intent, page type, url/slug, KD/volume/clicks, business value, effort, priority, interne links, competitor URLs.

## Mini tjekliste

- Marked korrekt
- 3-5 konkurrenter
- Intersections 2+ koret
- Intent tjekket i SERP
- New vs optimize besluttet
- Plan + interne links klar
`.trim(),
    },
    fr: {
      title: 'Analyse content gap Ahrefs: workflow complet (avec template)',
      topic: 'SEO',
      metaTitle: 'Analyse content gap Ahrefs | Workflow complet',
      metaDescription: 'Workflow complet dans Ahrefs: identifier keyword et topic gaps, filtrer le noise, verifier l intent SERP et creer un plan de contenu priorise.',
      content: `
Une analyse content gap dans Ahrefs montre les keywords pour lesquels les concurrents rankent, alors que ton site n est pas visible (encore). C est un moyen rapide de passer de "on cherche des idees" a une roadmap priorisee.

Important: une "gap" ne veut pas dire automatiquement "ecrire un nouvel article". Parfois il vaut mieux optimiser une page existante, corriger les liens internes, ou ignorer un keyword.

## 3 types de gaps

- Keyword gap: ils rankent sur un keyword, pas toi.
- Topic gap: ils ont un cluster complet, tu n as qu une partie.
- SERP gap: ils matchent mieux l intent (autre type de page).

## Etape 0 - Scope et marche

- Scope: domaine complet ou un dossier comme /blog/?
- Marche: pays + langue cibles.

## Etape 1 - Choisir de vrais concurrents

Ahrefs: Site Explorer -> Organic competitors, puis verification manuelle (eviter Wikipedia/marketplaces si ce n est pas pertinent).

## Etape 2 - Lancer Content Gap

Bon point de depart:

- Intersections: 2+ ou 3+
- Concurrents: top 10 (quick wins) ou top 20 (plus large)
- Toi: pas top 100 (ou pas top 50 si strict)

## Etape 3 - Filtrer le bruit

- Volume range adapte
- KD cap realiste
- Clicks/traffic potential pour eviter le SERP noise
- Exclude: brand terms, login, jobs, etc.

## Etape 4 - Verifier l intent SERP

Sur 10 keywords, verifier:

- Type de page (blog, categorie, produit, tool)
- SERP features: ads, shopping, local pack, AI overview, video
- Qualite du contenu: mince vs solide

## Etape 5 - New vs optimize

- Page existante qui peut gagner l intent? Optimiser.
- Sinon: planifier une nouvelle page.

## Etape 6 - Creer un plan de contenu

Sheet avec: cluster, intent, type de page, url/slug, KD/volume/clicks, business value, effort, priorite, liens internes, competitor URLs.

## Mini checklist

- Marche correct
- 3-5 concurrents
- Intersections 2+ lance
- Intent verifie dans la SERP
- New vs optimize decide
- Plan + liens internes prets
`.trim(),
    },
    it: {
      title: 'Ahrefs content gap analysis: workflow completo (con template)',
      topic: 'SEO',
      metaTitle: 'Ahrefs content gap analysis | Workflow completo',
      metaDescription: 'Workflow completo in Ahrefs: trovare keyword e topic gap, filtrare il noise, verificare intent SERP e creare un piano contenuti prioritizzato.',
      content: `
## Cos e una content gap analysis?

Una content gap analysis in Ahrefs mostra per quali keywords i competitor rankano mentre il tuo sito non e (ancora) visibile. E un modo veloce per trasformare "ci servono idee" in una roadmap prioritaria.

Importante: un "gap" non significa per forza "scrivi un nuovo blog". Spesso la mossa migliore e ottimizzare una pagina esistente, sistemare i link interni, o scartare la keyword.

## 3 tipi di gap

- Keyword gap: loro rankano per una keyword, tu no.
- Topic gap: loro coprono un cluster completo, tu solo una parte.
- SERP gap: loro matchano meglio l intent (tipo pagina diverso).

## Step 0 - Scope e mercato

- Scope: dominio completo o folder come /blog/?
- Mercato: paese + lingua target.

## Step 1 - Scegli competitor reali

Ahrefs: Site Explorer -> Organic competitors, poi check manuale (evita Wikipedia/marketplaces se non sono rilevanti).

## Step 2 - Usa Content Gap

Buon punto di partenza:

- Intersections: 2+ o 3+
- Competitor: top 10 (quick wins) o top 20 (piu ampio)
- Tu: non in top 100 (o non in top 50 se strict)

## Step 3 - Filtra noise

- Volume range adatto
- KD cap realistico
- Clicks/traffic potential per evitare SERP noise
- Exclude: brand terms, login, jobs, ecc.

## Step 4 - Verifica intent SERP

Su 10 keyword controlla:

- Tipo pagina (blog, categoria, prodotto, tool)
- SERP features: ads, shopping, local pack, AI overview, video
- Qualita contenuto: sottile vs forte

## Step 5 - New vs optimize

- Pagina esistente che puo vincere l intent? Ottimizza.
- Altrimenti: pianifica una nuova pagina.

## Step 6 - Piano contenuti

Sheet con: cluster, intent, page type, url/slug, KD/volume/clicks, business value, effort, priority, link interni, competitor URLs.

## Mini checklist

- Mercato corretto
- 3-5 competitor
- Intersections 2+ lanciato
- Intent verificato in SERP
- New vs optimize deciso
- Piano + link interni pronti
`.trim(),
    },
  },
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
