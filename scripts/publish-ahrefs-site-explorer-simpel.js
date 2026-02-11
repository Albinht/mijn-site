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
  slug: 'ahrefs-site-explorer-simpel-stappenplan',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'How to use Ahrefs Site Explorer: complete guide (workflows + reporting)',
  content: `
Ahrefs Site Explorer is the fastest way to understand a website's SEO "shape": traffic trend, keyword footprint, and link profile. I use it as a diagnostic dashboard before I decide what to do next (content, internal links, or authority).

This guide focuses on how to read the data and turn it into actions, not just what the buttons do.

## What Site Explorer is good for (and what it is not)

Use Site Explorer for:

- Fast competitive benchmarking (who is stronger and why)
- Finding quick wins (keywords close to page 1)
- Understanding link growth/decline (new vs lost referring domains)
- Finding your best pages and weakest sections

Do not use it as a replacement for:

- Google Search Console (truth for impressions/clicks/indexing)
- GA4 (truth for conversions and revenue)

Ahrefs is an external tool. Treat numbers as estimates. Trends and comparisons are where it shines.

## Step 0 - Pick the right target (scope matters)

Choose the scope first, otherwise you will draw the wrong conclusion:

- Domain: overall view of the whole site (strategy level)
- Subdomain: isolate a blog/shop/help center
- Prefix (folder): one section like /blog/ or /collections/
- Exact URL: one page

Rule of thumb:

- Strategy and competitor benchmarking: Domain
- Improving a section: Prefix
- Fixing one page: Exact URL

## Step 1 - Set the right market (country + device + timeframe)

Most mistakes come from wrong market settings.

- Country: match your revenue market (not where you personally are)
- Device: if mobile matters, review mobile trends too
- Timeframe: use 6-12 months to see direction

If the graph is noisy, switch to weekly or monthly smoothing.

## Step 2 - Read the overview like an analyst (not like a scoreboard)

### DR and UR (Ahrefs metrics)

- DR (Domain Rating): backlink strength at domain level
- UR (URL Rating): link strength for one page (backlinks + internal links)

Use DR/UR to compare within the same niche, not as a KPI.

### Referring domains > backlinks

- Backlinks = total links
- Referring domains = unique sites linking to you

In most cases, 10 strong referring domains beat 1,000 low quality backlinks.

What I check:

- New vs lost referring domains (trend)
- Sudden spikes (possible spam or PR event)
- Anchor text distribution (brand heavy vs exact match)

### Organic keywords and traffic (estimates)

- Organic keywords: count of keywords in top 100
- Traffic: estimated visits based on rankings and CTR models

Traffic will not match GA4. Use it to compare:

- You vs competitors
- This month vs last month
- Sections of the same site (prefix)

### Traffic value and paid search (competitor signal)

Traffic value and paid keywords are directional signals:

- What topics competitors are willing to spend money on
- Which pages they are pushing

## Step 3 - Turn "Organic keywords" into a quick win list

This is where Site Explorer becomes a to-do list.

Workflow:

1. Open Organic keywords.
2. Filter by position 4-10 (page 1 is close).
3. Sort by traffic or volume.
4. Check the ranking URL and the intent.
5. Improve the page.

What usually moves positions 4-10:

- Better title/meta for higher CTR
- Stronger intro: answer fast, then add depth
- Fill missing sections (FAQ, examples, comparisons)
- Add internal links from relevant pages
- Improve topical coverage (not keyword stuffing)

Pro tip: validate in Search Console before you invest. If a keyword has impressions but low clicks, snippet work can be a fast win.

## Step 4 - Use Top pages to find what already works

Top pages answers: which URLs drive the site.

Use it to:

- Identify winning formats (guides, tools, comparisons)
- Decide which pages deserve updates first
- Spot fragile traffic (pages dependent on one keyword only)

Action:

- Pick your top 10 pages and refresh them quarterly.
- For pages with traffic but outdated content, update screenshots, steps, and examples.

## Step 5 - Competitors: clean the list before you analyze

Organic competitors is based on keyword overlap, not on business overlap.

Do this:

- Keep competitors with the same product and audience.
- Remove big platforms (Wikipedia, marketplaces) if they are not direct competitors.

Then use the cleaned list to:

- Run a content gap analysis (topic ideas)
- Benchmark link growth (are they gaining referring domains faster?)
- Compare top pages (what content types win in your niche)

## Step 6 - Link workflows that actually help SEO

Site Explorer is great for link diagnostics and linkbuilding planning.

### New vs lost links

- New links: what is working (PR, partnerships, content)
- Lost links: what to reclaim (broken pages, removed mentions)

### Protect link magnets (Best by links)

If a page has many referring domains:

- Keep the URL stable
- If you must change it, use a clean 301 redirect
- Update internal links to the canonical URL

### Find easy link reclamation

Look for:

- Broken backlinks (links pointing to 404 pages)
- Old URLs that should redirect
- Mentions without links (manual outreach)

## Step 7 - Pages with low or zero traffic (prune carefully)

Ahrefs can highlight pages with little estimated traffic. Use this as a signal, not a verdict.

Per page decide:

- Update (best if intent still exists)
- Merge into a stronger page (avoid cannibalization)
- Redirect (if obsolete)
- Noindex (if it must exist but should not rank)

Always check Search Console and conversions before you delete anything.

## Step 8 - Simple monthly reporting template

If you report to a client or team, keep it consistent.

I include:

- Organic trend (Search Console clicks + impressions)
- Top 5 pages that moved (up/down)
- Quick wins done (positions 4-10)
- Link trend: new vs lost referring domains
- Next 5 actions (with owner and deadline)

## My 15-minute Site Explorer checklist

- Scope correct (domain/prefix/url)
- Country and timeframe correct
- Traffic trend and keyword trend checked
- Positions 4-10 exported as quick wins
- Top pages reviewed (what to update first)
- Competitors cleaned (real competitors only)
- New/lost referring domains reviewed
- One short action list written (10 items max)
`.trim(),
  translations: {
    en: {
      title: 'How to use Ahrefs Site Explorer: complete guide (workflows + reporting)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Complete guide',
      metaDescription: 'Complete Ahrefs Site Explorer guide: scope selection, trend reading, quick wins from positions 4-10, link workflows, pruning signals, and reporting.',
      content: `
Ahrefs Site Explorer is the fastest way to understand a website's SEO "shape": traffic trend, keyword footprint, and link profile. I use it as a diagnostic dashboard before I decide what to do next (content, internal links, or authority).

This guide focuses on how to read the data and turn it into actions, not just what the buttons do.

## What Site Explorer is good for (and what it is not)

Use Site Explorer for:

- Fast competitive benchmarking (who is stronger and why)
- Finding quick wins (keywords close to page 1)
- Understanding link growth/decline (new vs lost referring domains)
- Finding your best pages and weakest sections

Do not use it as a replacement for:

- Google Search Console (truth for impressions/clicks/indexing)
- GA4 (truth for conversions and revenue)

Ahrefs is an external tool. Treat numbers as estimates. Trends and comparisons are where it shines.

## Step 0 - Pick the right target (scope matters)

Choose the scope first, otherwise you will draw the wrong conclusion:

- Domain: overall view of the whole site (strategy level)
- Subdomain: isolate a blog/shop/help center
- Prefix (folder): one section like /blog/ or /collections/
- Exact URL: one page

Rule of thumb:

- Strategy and competitor benchmarking: Domain
- Improving a section: Prefix
- Fixing one page: Exact URL

## Step 1 - Set the right market (country + device + timeframe)

Most mistakes come from wrong market settings.

- Country: match your revenue market (not where you personally are)
- Device: if mobile matters, review mobile trends too
- Timeframe: use 6-12 months to see direction

If the graph is noisy, switch to weekly or monthly smoothing.

## Step 2 - Read the overview like an analyst (not like a scoreboard)

### DR and UR (Ahrefs metrics)

- DR (Domain Rating): backlink strength at domain level
- UR (URL Rating): link strength for one page (backlinks + internal links)

Use DR/UR to compare within the same niche, not as a KPI.

### Referring domains > backlinks

- Backlinks = total links
- Referring domains = unique sites linking to you

In most cases, 10 strong referring domains beat 1,000 low quality backlinks.

What I check:

- New vs lost referring domains (trend)
- Sudden spikes (possible spam or PR event)
- Anchor text distribution (brand heavy vs exact match)

### Organic keywords and traffic (estimates)

- Organic keywords: count of keywords in top 100
- Traffic: estimated visits based on rankings and CTR models

Traffic will not match GA4. Use it to compare:

- You vs competitors
- This month vs last month
- Sections of the same site (prefix)

### Traffic value and paid search (competitor signal)

Traffic value and paid keywords are directional signals:

- What topics competitors are willing to spend money on
- Which pages they are pushing

## Step 3 - Turn "Organic keywords" into a quick win list

This is where Site Explorer becomes a to-do list.

Workflow:

1. Open Organic keywords.
2. Filter by position 4-10 (page 1 is close).
3. Sort by traffic or volume.
4. Check the ranking URL and the intent.
5. Improve the page.

What usually moves positions 4-10:

- Better title/meta for higher CTR
- Stronger intro: answer fast, then add depth
- Fill missing sections (FAQ, examples, comparisons)
- Add internal links from relevant pages
- Improve topical coverage (not keyword stuffing)

Pro tip: validate in Search Console before you invest. If a keyword has impressions but low clicks, snippet work can be a fast win.

## Step 4 - Use Top pages to find what already works

Top pages answers: which URLs drive the site.

Use it to:

- Identify winning formats (guides, tools, comparisons)
- Decide which pages deserve updates first
- Spot fragile traffic (pages dependent on one keyword only)

Action:

- Pick your top 10 pages and refresh them quarterly.
- For pages with traffic but outdated content, update screenshots, steps, and examples.

## Step 5 - Competitors: clean the list before you analyze

Organic competitors is based on keyword overlap, not on business overlap.

Do this:

- Keep competitors with the same product and audience.
- Remove big platforms (Wikipedia, marketplaces) if they are not direct competitors.

Then use the cleaned list to:

- Run a content gap analysis (topic ideas)
- Benchmark link growth (are they gaining referring domains faster?)
- Compare top pages (what content types win in your niche)

## Step 6 - Link workflows that actually help SEO

Site Explorer is great for link diagnostics and linkbuilding planning.

### New vs lost links

- New links: what is working (PR, partnerships, content)
- Lost links: what to reclaim (broken pages, removed mentions)

### Protect link magnets (Best by links)

If a page has many referring domains:

- Keep the URL stable
- If you must change it, use a clean 301 redirect
- Update internal links to the canonical URL

### Find easy link reclamation

Look for:

- Broken backlinks (links pointing to 404 pages)
- Old URLs that should redirect
- Mentions without links (manual outreach)

## Step 7 - Pages with low or zero traffic (prune carefully)

Ahrefs can highlight pages with little estimated traffic. Use this as a signal, not a verdict.

Per page decide:

- Update (best if intent still exists)
- Merge into a stronger page (avoid cannibalization)
- Redirect (if obsolete)
- Noindex (if it must exist but should not rank)

Always check Search Console and conversions before you delete anything.

## Step 8 - Simple monthly reporting template

If you report to a client or team, keep it consistent.

I include:

- Organic trend (Search Console clicks + impressions)
- Top 5 pages that moved (up/down)
- Quick wins done (positions 4-10)
- Link trend: new vs lost referring domains
- Next 5 actions (with owner and deadline)

## My 15-minute Site Explorer checklist

- Scope correct (domain/prefix/url)
- Country and timeframe correct
- Traffic trend and keyword trend checked
- Positions 4-10 exported as quick wins
- Top pages reviewed (what to update first)
- Competitors cleaned (real competitors only)
- New/lost referring domains reviewed
- One short action list written (10 items max)
`.trim(),
    },
    nl: {
      title: 'Ahrefs Site Explorer gebruiken: complete gids (workflows + rapportage)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer gebruiken | Complete gids',
      metaDescription: 'Complete Ahrefs Site Explorer gids: scope kiezen, trends lezen, quick wins (posities 4-10), link workflows, pruning signalen en rapportage.',
      content: `
Ahrefs Site Explorer is de snelste manier om de SEO "shape" van een website te snappen: trend in organische zichtbaarheid, keyword footprint en linkprofiel. Ik gebruik het als diagnose-dashboard voordat ik keuzes maak (content, interne links of autoriteit).

Deze gids gaat niet over knopjes, maar over interpretatie en acties.

## Waar Site Explorer goed voor is (en waar niet)

Gebruik Site Explorer voor:

- Snelle benchmark vs concurrenten (wie is sterker en waarom)
- Quick wins vinden (keywords dicht bij pagina 1)
- Link groei/krimp zien (new vs lost referring domains)
- Beste paginas en zwakke secties herkennen

Niet als vervanging voor:

- Google Search Console (waarheid voor impressions/clicks/indexatie)
- GA4 (waarheid voor conversies en omzet)

Ahrefs is een externe tool. Zie cijfers als schattingen. Trends en vergelijkingen zijn het sterkst.

## Stap 0 - Kies de juiste target (scope is alles)

Kies eerst je scope, anders trek je de verkeerde conclusie:

- Domain: totaalbeeld (strategisch)
- Subdomain: blog/shop/help center apart
- Prefix (folder): 1 sectie zoals /blog/ of /collections/
- Exact URL: 1 pagina

Vuistregel:

- Strategie en benchmark: Domain
- 1 onderdeel verbeteren: Prefix
- 1 pagina fixen: Exact URL

## Stap 1 - Zet je markt goed (land + device + periode)

De grootste fouten komen door verkeerde instellingen.

- Land: kies je omzetmarkt (niet waar jij zit)
- Device: kijk ook naar mobile als dat belangrijk is
- Periode: pak 6-12 maanden voor richting

Is de grafiek te "bumpy"? Zet smoothing op weekly of monthly.

## Stap 2 - Lees het overzicht als analist (niet als scoreboard)

### DR en UR (Ahrefs metrics)

- DR (Domain Rating): backlink strength op domein niveau
- UR (URL Rating): link strength voor 1 pagina (backlinks + interne links)

Gebruik DR/UR om sites in dezelfde niche te vergelijken, niet als KPI.

### Referring domains > backlinks

- Backlinks = totaal links
- Referring domains = unieke websites die linken

In veel niches zijn 10 goede referring domains meer waard dan 1000 slechte links.

Wat ik check:

- New vs lost referring domains (trend)
- Spikes (spam of PR)
- Anchor text verdeling (brand vs exact match)

### Organic keywords en traffic (schattingen)

- Organic keywords: aantal keywords in top 100
- Traffic: schatting op basis van rankings + CTR modellen

Traffic matcht niet met GA4. Gebruik het om te vergelijken:

- Jij vs concurrenten
- deze maand vs vorige maand
- secties (prefix)

### Traffic value en paid search (concurrent signaal)

Paid data is richtinggevend:

- Waar concurrenten geld op zetten
- Welke paginas ze pushen

## Stap 3 - Maak van Organic keywords een quick win lijst

Hier wordt Site Explorer een to-do lijst.

Workflow:

1. Open Organic keywords.
2. Filter positie 4-10 (pagina 1 is dichtbij).
3. Sorteer op traffic of volume.
4. Check ranking URL + intent.
5. Verbeter de pagina.

Wat meestal posities 4-10 laat bewegen:

- Betere title/meta (hogere CTR)
- Sterkere intro: snel antwoord, daarna diepte
- Missende secties toevoegen (FAQ, voorbeelden, vergelijkingen)
- Interne links toevoegen van relevante paginas
- Topic coverage verbeteren (geen keyword stuffing)

Pro tip: valideer in Search Console. Als je impressions hebt maar weinig clicks, is snippet werk vaak snel resultaat.

## Stap 4 - Gebruik Top pages om te zien wat al werkt

Top pages laat zien welke URLs de site dragen.

Gebruik dit om:

- Winnaarsformats te herkennen (gidsen, tools, vergelijkingen)
- Update prioriteit te bepalen
- Fragiel verkeer te spotten (pagina hangt aan 1 keyword)

Actie:

- Update je top 10 paginas elk kwartaal.
- Update verouderde content (screenshots, stappen, voorbeelden).

## Stap 5 - Concurrenten: opschonen voordat je analyseert

Organic competitors gaat op keyword overlap, niet business overlap.

Doe dit:

- Houd concurrenten met hetzelfde product en doelgroep.
- Gooi grote platforms (Wikipedia/marketplaces) eruit als ze geen directe concurrent zijn.

Gebruik de opgeschoonde lijst voor:

- Content gap analyse (topic ideeen)
- Link groei benchmark (wie wint referring domains sneller?)
- Top pages vergelijken (welke content types winnen)

## Stap 6 - Link workflows die echt helpen

### New vs lost links

- New: wat werkt (PR, partnerships, content)
- Lost: wat kun je reclaimen (broken pages, verwijderde mentions)

### Bescherm link magnets (Best by links)

Heeft een pagina veel referring domains?

- Houd URL stabiel
- Moet je wijzigen: 301 redirect
- Update interne links naar canonical

### Link reclamation

Zoek naar:

- Broken backlinks (links naar 404)
- Oude URLs die moeten redirecten
- Mentions zonder link (handmatig outreach)

## Stap 7 - Paginas met weinig of nul traffic (prune voorzichtig)

Ahrefs kan paginas tonen met weinig geschatte traffic. Zie dit als signaal, niet als oordeel.

Per pagina:

- Update
- Merge (voorkom kannibalisatie)
- Redirect (obsoleet)
- Noindex (moet bestaan maar niet ranken)

Check altijd Search Console en conversies voor je iets verwijdert.

## Stap 8 - Simpel maandrapport template

Ik rapporteer:

- Organische trend (Search Console clicks + impressions)
- Top 5 paginas die bewogen (up/down)
- Quick wins die zijn uitgevoerd (posities 4-10)
- Link trend: new vs lost referring domains
- Volgende 5 acties (owner + deadline)

## 15-minuten checklist

- Scope klopt (domain/prefix/url)
- Land + periode klopt
- Traffic trend + keyword trend bekeken
- Posities 4-10 lijst als quick wins
- Top pages bekeken (wat eerst updaten)
- Concurrenten opgeschoond (alleen echte)
- New/lost referring domains bekeken
- Korte actielijst gemaakt (max 10)
`.trim(),
    },
    de: {
      title: 'Ahrefs Site Explorer nutzen: kompletter Guide (Workflows + Reporting)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Kompletter Guide',
      metaDescription: 'Kompletter Site Explorer Guide: Scope, Markt, Metriken, Quick Wins, Link Workflows und Reporting.',
      content: `
Ahrefs Site Explorer ist das schnellste Tool um die SEO Form einer Website zu verstehen: Traffic Trend, Keyword Footprint und Linkprofil. Ich nutze es als Dashboard fuer Diagnose und Priorisierung.

## Wofuer Site Explorer gut ist (und wofuer nicht)

Gut fuer:

- Benchmark gegen echte Wettbewerber
- Quick Wins (Position 4-10)
- Link Wachstum (new vs lost Referring Domains)
- Beste Seiten und schwache Bereiche

Nicht als Ersatz fuer Search Console oder GA4. Ahrefs liefert Schaetzungen, Trends sind das Wichtige.

## Schritt 0 - Scope richtig setzen

- Domain: Gesamtstrategie
- Subdomain: Blog/Shop separat
- Prefix: ein Ordner wie /blog/
- Exact URL: eine Seite

## Schritt 1 - Markt und Zeitraum

- Land und Sprache auf deinen Zielmarkt setzen
- 6-12 Monate fuer Trend
- Weekly/Monthly smoothing bei noisy Graphen

## Schritt 2 - Overview lesen wie ein Analyst

- DR/UR: nur zum Vergleich in der Nische
- Referring Domains > Backlinks
- Organic Keywords und Traffic sind Schaetzungen
- Paid keywords zeigen wo Wettbewerber Budget investieren

## Schritt 3 - Quick Wins finden

Workflow:

1. Organic keywords oeffnen
2. Filter Position 4-10
3. Sortieren nach Traffic oder Volume
4. Seite optimieren: Titel, Intro, fehlende Abschnitte, interne Links

## Schritt 4 - Top Pages und Wettbewerber nutzen

- Top pages zeigen welche Formate funktionieren
- Organic competitors nur echte Wettbewerber lassen
- Danach Content Gap und Link Trends

## Schritt 5 - Link Workflows

- New vs Lost Referring Domains pruefen
- Best by links schuetzen (URL stabil, 301 sauber)
- Broken backlinks finden und reclaimen

## 15 Minuten Checkliste

- Scope und Markt korrekt
- Trends geprueft
- Position 4-10 exportiert
- Top pages priorisiert
- Wettbewerber bereinigt
- New/Lost Links gecheckt
`.trim(),
    },
    sv: {
      title: 'Ahrefs Site Explorer: komplett guide (workflows + rapportering)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Komplett guide',
      metaDescription: 'Komplett Site Explorer guide: scope, marknad, quick wins, link workflows och rapportering.',
      content: `
Ahrefs Site Explorer ger snabb oversikt over en sajts SEO form: traffic trend, keyword footprint och lankar. Jag anvander det som dashboard for diagnos och prioritering.

## Bra for (och inte)

Bra for:

- Benchmark mot riktiga konkurrenter
- Quick wins (position 4-10)
- Link trend (new vs lost referring domains)
- Batta sidor och svaga delar

Inte ersattning for Search Console eller GA4. Ahrefs ar estimat, trender ar det viktiga.

## Steg 0 - Ratt scope

- Domain: strategi
- Subdomain: blog/shop separat
- Prefix: /blog/
- Exact URL: en sida

## Steg 1 - Marknad och tid

- Land och sprak for din marknad
- 6-12 manader for trend
- Weekly/Monthly smoothing vid brus

## Steg 2 - Overview som analyst

- DR/UR for jamforelse, inte KPI
- Referring domains > backlinks
- Organic keywords/traffic ar estimat
- Paid keywords visar var konkurrenter spenderar

## Steg 3 - Quick wins

1. Organic keywords
2. Filter position 4-10
3. Sortera efter traffic/volume
4. Forbattra sidan (titel, intro, missing sections, interna lankar)

## Steg 4 - Top pages och konkurrenter

- Se vilka format som fungerar
- Rensa konkurrentlistan
- Anvand for content gap och link trend

## Steg 5 - Link workflows

- New vs lost domains
- Best by links skydda
- Broken backlinks och reclaim

## 15 min checklista

- Scope/market korrekt
- Trend kollad
- 4-10 lista export
- Top pages prioriterade
- Konkurrenter rensade
`.trim(),
    },
    da: {
      title: 'Ahrefs Site Explorer: komplet guide (workflows + rapportering)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Komplet guide',
      metaDescription: 'Komplet Site Explorer guide: scope, marked, quick wins, link workflows og rapportering.',
      content: `
Ahrefs Site Explorer giver hurtigt overblik over en websides SEO form: traffic trend, keyword footprint og linkprofil. Jeg bruger det som dashboard til diagnose og prioritering.

## Godt til (og ikke)

Godt til:

- Benchmark mod rigtige konkurrenter
- Quick wins (position 4-10)
- Link trend (new vs lost referring domains)
- Top sider og svage omrader

Ikke erstatning for Search Console eller GA4. Ahrefs er estimater, trends er det vigtige.

## Trin 0 - Rigtigt scope

- Domain: strategi
- Subdomain: blog/shop separat
- Prefix: /blog/
- Exact URL: en side

## Trin 1 - Marked og tid

- Land og sprog for dit marked
- 6-12 maaneder for trend
- Weekly/Monthly smoothing ved noise

## Trin 2 - Overview som analytiker

- DR/UR til sammenligning, ikke KPI
- Referring domains > backlinks
- Organic keywords/traffic er estimater
- Paid keywords viser hvor konkurrenter investerer

## Trin 3 - Quick wins

1. Organic keywords
2. Filter position 4-10
3. Sorter efter traffic/volume
4. Forbedr siden (titel, intro, missing sections, interne links)

## Trin 4 - Top pages og konkurrenter

- Se hvilke formater der virker
- Rens konkurrentliste
- Brug til content gap og link trend

## Trin 5 - Link workflows

- New vs lost domains
- Best by links beskyttes
- Broken backlinks og reclaim

## 15 min tjekliste

- Scope/market korrekt
- Trend tjekket
- 4-10 liste eksport
- Top pages prioriteret
- Konkurrenter renset
`.trim(),
    },
    fr: {
      title: 'Ahrefs Site Explorer: guide complet (workflows + reporting)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Guide complet',
      metaDescription: 'Guide complet Site Explorer: scope, marche, quick wins, link workflows et reporting.',
      content: `
Ahrefs Site Explorer donne une vue rapide de la forme SEO d un site: tendance trafic, keywords et liens. Je l utilise comme dashboard pour diagnostic et priorites.

## Utile pour (et pas)

Utile pour:

- Benchmark avec vrais concurrents
- Quick wins (positions 4-10)
- Tendance liens (new vs lost referring domains)
- Top pages et zones faibles

Pas un remplacement de Search Console ou GA4. Ahrefs donne des estimations, les trends comptent.

## Etape 0 - Choisir le scope

- Domain: strategie globale
- Subdomain: blog/shop separe
- Prefix: /blog/
- Exact URL: une page

## Etape 1 - Marche et periode

- Pays et langue du marche
- 6-12 mois pour la tendance
- Weekly/Monthly smoothing si bruit

## Etape 2 - Lire le overview

- DR/UR pour comparaison, pas KPI
- Referring domains > backlinks
- Organic keywords/traffic = estimations
- Paid keywords = ou les concurrents investissent

## Etape 3 - Quick wins

1. Organic keywords
2. Filtre position 4-10
3. Trier par traffic/volume
4. Ameliorer la page (titre, intro, sections manquantes, liens internes)

## Etape 4 - Top pages et concurrents

- Identifier les formats qui marchent
- Nettoyer la liste concurrents
- Utiliser pour content gap et link trend

## Etape 5 - Link workflows

- New vs lost domains
- Best by links a proteger
- Broken backlinks a recuperer

## Checkliste 15 minutes

- Scope et marche corrects
- Trend verifie
- Liste 4-10 exportee
- Top pages priorisees
- Concurrents nettoyes
`.trim(),
    },
    it: {
      title: 'Ahrefs Site Explorer: guida completa (workflows + reporting)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Guida completa',
      metaDescription: 'Guida completa Site Explorer: scope, mercato, quick wins, link workflows e reporting.',
      content: `
Ahrefs Site Explorer offre una vista rapida della forma SEO di un sito: trend traffico, keyword footprint e link profile. Lo uso come dashboard per diagnosi e priorita.

## Utile per (e non)

Utile per:

- Benchmark con concorrenti reali
- Quick wins (posizioni 4-10)
- Trend link (new vs lost referring domains)
- Top pages e aree deboli

Non sostituisce Search Console o GA4. Ahrefs sono stime, i trend contano.

## Step 0 - Scegli lo scope

- Domain: strategia globale
- Subdomain: blog/shop separato
- Prefix: /blog/
- Exact URL: una pagina

## Step 1 - Mercato e periodo

- Paese e lingua del mercato
- 6-12 mesi per trend
- Weekly/Monthly smoothing se grafico rumoroso

## Step 2 - Leggere overview

- DR/UR per confronto, non KPI
- Referring domains > backlinks
- Organic keywords/traffic sono stime
- Paid keywords indicano dove i competitor spendono

## Step 3 - Quick wins

1. Organic keywords
2. Filtro posizione 4-10
3. Ordina per traffic/volume
4. Migliora la pagina (titolo, intro, sezioni mancanti, link interni)

## Step 4 - Top pages e competitor

- Vedi quali formati funzionano
- Pulisci lista competitor
- Usa per content gap e link trend

## Step 5 - Link workflows

- New vs lost domains
- Best by links da proteggere
- Broken backlinks da recuperare

## Check 15 minuti

- Scope e mercato corretti
- Trend controllato
- Lista 4-10 esportata
- Top pages prioritarie
- Competitor puliti
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    console.log('Publishing Ahrefs Site Explorer article to database...')

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
