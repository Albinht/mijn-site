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
  title: 'How to use Ahrefs Site Explorer (simple guide)',
  content: `
## What is Ahrefs Site Explorer?

Site Explorer is Ahrefs' "dashboard" for a website. You paste a domain or a URL and you instantly see:

- Estimated organic traffic and keyword growth
- Backlinks and referring domains
- Top pages and competitors

I use it as a first scan. Then I click through to the detailed reports.

## Step 0 - Choose the right target (domain vs URL)

Before you look at numbers, pick the right scope:

- Domain: overall view of the full site
- Subdomain: only a blog, shop, or help center
- Prefix: one folder like /blog/ or /collections/
- Exact URL: one page only

If you want strategy decisions, start with Domain. If you want to improve one section, use Prefix.

## Step 1 - Set country and timeframe

- Pick the country that matches your market.
- Set a timeframe that shows the trend (not just 7 days).
- If the graph is noisy, switch to weekly or monthly.

You want direction: up, down, flat, or volatile.

## Step 2 - Read the overview (what the metrics mean)

The overview is useful, but most numbers are estimates. Use them to compare and to spot trends.

### DR and UR

- DR (Domain Rating): strength of the domain's backlink profile (Ahrefs metric)
- UR (URL Rating): strength of a specific page (links + internal links)

Do not treat DR as a KPI. Use it to compare sites in the same niche.

### Links and referring domains

- Backlinks are the total links.
- Referring domains are the number of unique websites linking to you.

Referring domains usually matters more than raw backlink count.

### Organic keywords and traffic

- Organic keywords: how many keywords rank in the top 100.
- Traffic: Ahrefs' estimate of organic visits.

Traffic is not the same as GA4 or Search Console. Use it for direction, not for exact reporting.

### Paid search (competitor signal)

If Ahrefs shows paid keywords and paid traffic, treat it as a hint:

- Which topics competitors are willing to spend money on
- Which pages they push with ads

## Step 3 - Find quick wins with positions

Go to the Organic keywords / positions view and look at the buckets:

- Positions 1-3: protect and improve CTR
- Positions 4-10: quick wins (on-page + internal links)
- Positions 11-20: medium term targets
- Positions 21-50: long term targets
- Positions 51+: future opportunities

A simple workflow:

- Filter positions 4-10
- Sort by volume
- Open the ranking URL and improve: title, intro, headings, intent match, internal links

## Step 4 - Check links without getting lost

Use Referring domains and Backlinks to answer 3 questions:

- Are we gaining or losing domains?
- Which pages attract links (and why)?
- Do we have obvious spam or sitewide links?

Quick actions:

- Look at "New" vs "Lost" referring domains
- Check "Best by links" to see link magnets
- If a page has many links, protect it (keep the URL stable)

## Step 5 - Use Top pages and competitors

### Top pages

Top pages shows which URLs drive most estimated traffic.

Use it to:

- Find what already works (format, topics, angle)
- Spot pages that should be updated first
- Identify patterns you can repeat

### Organic competitors

Ahrefs lists sites with keyword overlap.

- Pick real competitors (same product, same audience)
- Ignore platforms like Wikipedia if they are not your competitor

From there, a content gap analysis is the next step:

- Find keywords competitors rank for that you do not
- Turn them into topic clusters

## Step 6 - Find pages with (almost) zero traffic

Ahrefs can show many pages with little or no estimated traffic.

Do not delete blindly. Decide per page:

- Update (best option if intent still exists)
- Merge into a stronger page
- Redirect if the page is obsolete
- Noindex if it must stay but should not rank

## My 10-minute Site Explorer checklist

- Target scope set (domain / prefix / URL)
- Country set
- Organic traffic trend checked
- Referring domains trend checked
- Positions 4-10 list exported
- Top pages reviewed
- Biggest link pages identified
- Competitors list cleaned (real competitors only)
- A short action list written (10 items max)
`.trim(),
  translations: {
    en: {
      title: 'How to use Ahrefs Site Explorer (simple guide)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Simple guide',
      metaDescription: 'A simple Ahrefs Site Explorer guide: pick the right scope, read DR/UR, use positions to find quick wins, check links, and build a short action list.',
      content: `
## What is Ahrefs Site Explorer?

Site Explorer is Ahrefs' "dashboard" for a website. You paste a domain or a URL and you instantly see:

- Estimated organic traffic and keyword growth
- Backlinks and referring domains
- Top pages and competitors

I use it as a first scan. Then I click through to the detailed reports.

## Step 0 - Choose the right target (domain vs URL)

Before you look at numbers, pick the right scope:

- Domain: overall view of the full site
- Subdomain: only a blog, shop, or help center
- Prefix: one folder like /blog/ or /collections/
- Exact URL: one page only

If you want strategy decisions, start with Domain. If you want to improve one section, use Prefix.

## Step 1 - Set country and timeframe

- Pick the country that matches your market.
- Set a timeframe that shows the trend (not just 7 days).
- If the graph is noisy, switch to weekly or monthly.

You want direction: up, down, flat, or volatile.

## Step 2 - Read the overview (what the metrics mean)

The overview is useful, but most numbers are estimates. Use them to compare and to spot trends.

### DR and UR

- DR (Domain Rating): strength of the domain's backlink profile (Ahrefs metric)
- UR (URL Rating): strength of a specific page (links + internal links)

Do not treat DR as a KPI. Use it to compare sites in the same niche.

### Links and referring domains

- Backlinks are the total links.
- Referring domains are the number of unique websites linking to you.

Referring domains usually matters more than raw backlink count.

### Organic keywords and traffic

- Organic keywords: how many keywords rank in the top 100.
- Traffic: Ahrefs' estimate of organic visits.

Traffic is not the same as GA4 or Search Console. Use it for direction, not for exact reporting.

### Paid search (competitor signal)

If Ahrefs shows paid keywords and paid traffic, treat it as a hint:

- Which topics competitors are willing to spend money on
- Which pages they push with ads

## Step 3 - Find quick wins with positions

Go to the Organic keywords / positions view and look at the buckets:

- Positions 1-3: protect and improve CTR
- Positions 4-10: quick wins (on-page + internal links)
- Positions 11-20: medium term targets
- Positions 21-50: long term targets
- Positions 51+: future opportunities

A simple workflow:

- Filter positions 4-10
- Sort by volume
- Open the ranking URL and improve: title, intro, headings, intent match, internal links

## Step 4 - Check links without getting lost

Use Referring domains and Backlinks to answer 3 questions:

- Are we gaining or losing domains?
- Which pages attract links (and why)?
- Do we have obvious spam or sitewide links?

Quick actions:

- Look at "New" vs "Lost" referring domains
- Check "Best by links" to see link magnets
- If a page has many links, protect it (keep the URL stable)

## Step 5 - Use Top pages and competitors

### Top pages

Top pages shows which URLs drive most estimated traffic.

Use it to:

- Find what already works (format, topics, angle)
- Spot pages that should be updated first
- Identify patterns you can repeat

### Organic competitors

Ahrefs lists sites with keyword overlap.

- Pick real competitors (same product, same audience)
- Ignore platforms like Wikipedia if they are not your competitor

From there, a content gap analysis is the next step:

- Find keywords competitors rank for that you do not
- Turn them into topic clusters

## Step 6 - Find pages with (almost) zero traffic

Ahrefs can show many pages with little or no estimated traffic.

Do not delete blindly. Decide per page:

- Update (best option if intent still exists)
- Merge into a stronger page
- Redirect if the page is obsolete
- Noindex if it must stay but should not rank

## My 10-minute Site Explorer checklist

- Target scope set (domain / prefix / URL)
- Country set
- Organic traffic trend checked
- Referring domains trend checked
- Positions 4-10 list exported
- Top pages reviewed
- Biggest link pages identified
- Competitors list cleaned (real competitors only)
- A short action list written (10 items max)
`.trim(),
    },
    nl: {
      title: 'Ahrefs Site Explorer gebruiken: simpele uitleg',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer gebruiken | Simpele uitleg',
      metaDescription: 'Zo gebruik je Ahrefs Site Explorer: juiste scope kiezen, DR/UR snappen, quick wins vinden via posities, links beoordelen en een actieplan maken.',
      content: `
## Wat is Ahrefs Site Explorer?

Site Explorer is de "dashboard" van Ahrefs voor een website. Je plakt een domein of URL en je ziet direct:

- Geschatte organische traffic en keyword groei
- Backlinks en referring domains
- Top paginas en concurrenten

Ik gebruik dit als eerste scan. Daarna klik ik door naar de detail reports.

## Stap 0 - Kies de juiste scope (domein vs URL)

Voordat je naar cijfers kijkt, kies je de juiste scope:

- Domain: totaalbeeld van de hele site
- Subdomain: alleen blog, shop of help center
- Prefix: 1 map zoals /blog/ of /collections/
- Exact URL: 1 pagina

Wil je strategische keuzes maken? Start met Domain. Wil je 1 onderdeel verbeteren? Gebruik Prefix.

## Stap 1 - Zet land en periode goed

- Kies het land dat past bij jouw markt.
- Kies een periode die trend laat zien (niet alleen 7 dagen).
- Is de grafiek te onrustig? Zet hem op weekly of monthly.

Je zoekt richting: stijgend, dalend, vlak of onstabiel.

## Stap 2 - Lees het overzicht (wat betekent wat?)

Het overzicht is handig, maar veel cijfers zijn schattingen. Gebruik het om te vergelijken en om trends te zien.

### DR en UR

- DR (Domain Rating): sterkte van het backlinkprofiel van het domein (Ahrefs metric)
- UR (URL Rating): sterkte van een specifieke pagina (links + interne links)

Zie DR niet als KPI. Gebruik het om sites binnen dezelfde niche te vergelijken.

### Links en referring domains

- Backlinks = totaal aantal links.
- Referring domains = aantal unieke websites dat naar je linkt.

Referring domains is vaak belangrijker dan alleen heel veel links.

### Organische keywords en traffic

- Organic keywords: hoeveel keywords in de top 100.
- Traffic: Ahrefs schatting van organische bezoekers.

Dit is niet hetzelfde als GA4 of Search Console. Gebruik het voor richting, niet voor exacte rapportages.

### Paid search (signaal bij concurrenten)

Als Ahrefs paid keywords en paid traffic laat zien, zie het als hint:

- Op welke onderwerpen concurrenten geld zetten
- Welke paginas ze pushen met ads

## Stap 3 - Vind quick wins via posities

Ga naar Organic keywords / positions en kijk naar de buckets:

- Positie 1-3: verdedigen en CTR verbeteren
- Positie 4-10: quick wins (on-page + interne links)
- Positie 11-20: mid term targets
- Positie 21-50: long term targets
- Positie 51+: future opportunities

Simpel proces:

- Filter op posities 4-10
- Sorteer op volume
- Open de ranking URL en verbeter: title, intro, headings, intent match, interne links

## Stap 4 - Check links zonder te verdrinken

Gebruik Referring domains en Backlinks om 3 vragen te beantwoorden:

- Krijgen we meer of minder domeinen?
- Welke paginas trekken links (en waarom)?
- Zien we duidelijke spam of sitewide links?

Snelle acties:

- Check "New" vs "Lost" referring domains
- Check "Best by links" voor link magnets
- Heeft een pagina veel links? Bescherm die URL (niet zomaar wijzigen)

## Stap 5 - Gebruik Top pages en concurrenten

### Top pages

Top pages laat zien welke URLs de meeste geschatte traffic pakken.

Gebruik dit om:

- Te zien wat al werkt (format, topics, angle)
- Te bepalen welke paginas je eerst moet updaten
- Patronen te vinden die je kunt herhalen

### Organic competitors

Ahrefs toont sites met keyword overlap.

- Kies echte concurrenten (zelfde product, zelfde doelgroep)
- Negeer platforms zoals Wikipedia als dat geen concurrent is

Vanaf hier is content gap vaak de volgende stap:

- Keywords vinden waar concurrenten wel op ranken en jij niet
- Omzetten naar topic clusters

## Stap 6 - Paginas met (bijna) 0 traffic

Ahrefs kan veel paginas tonen met weinig of geen geschatte traffic.

Niet blind verwijderen. Kies per pagina:

- Updaten (beste optie als intent nog bestaat)
- Mergen in een sterkere pagina
- Redirect als de pagina verouderd is
- Noindex als hij moet blijven maar niet hoeft te ranken

## 10-minuten checklist

- Scope gezet (domain / prefix / URL)
- Land gezet
- Trend organische traffic gecheckt
- Trend referring domains gecheckt
- Posities 4-10 lijst gepakt
- Top pages bekeken
- Belangrijkste link paginas gevonden
- Concurrenten lijst opgeschoond (alleen echte)
- Korte actielijst gemaakt (max 10)
`.trim(),
    },
    de: {
      title: 'Ahrefs Site Explorer nutzen: einfache Anleitung',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer nutzen | Einfache Anleitung',
      metaDescription: 'So nutzt du Ahrefs Site Explorer: richtiger Scope, DR/UR verstehen, Quick Wins uber Positionen finden, Links checken und eine kurze To-do Liste bauen.',
      content: `
## Was ist Ahrefs Site Explorer?

Site Explorer ist das "Dashboard" von Ahrefs fuer eine Website. Du fuegst eine Domain oder URL ein und siehst sofort:

- Geschaetzten organischen Traffic und Keyword Wachstum
- Backlinks und Referring Domains
- Top Seiten und Wettbewerber

Ich nutze es als ersten Scan. Danach gehe ich in die Detail-Reports.

## Schritt 0 - Richtigen Scope waehlen (Domain vs URL)

Bevor du Zahlen interpretierst, waehle den richtigen Scope:

- Domain: Gesamtbild der ganzen Site
- Subdomain: nur Blog, Shop oder Help Center
- Prefix: ein Ordner wie /blog/ oder /collections/
- Exact URL: eine einzelne Seite

Fuer Strategie: Domain. Fuer ein bestimmtes Teilgebiet: Prefix.

## Schritt 1 - Land und Zeitraum setzen

- Waehle das Land fuer deinen Markt.
- Nimm einen Zeitraum der Trends zeigt (nicht nur 7 Tage).
- Wenn der Graph zu "bumpy" ist, stell auf weekly oder monthly.

Du suchst Richtung: rauf, runter, flach oder volatil.

## Schritt 2 - Overview lesen (was bedeutet was?)

Das Overview ist hilfreich, aber viele Werte sind Schaetzungen. Nutze es fuer Vergleich und Trends.

### DR und UR

- DR (Domain Rating): Staerke des Backlink Profils der Domain (Ahrefs Metric)
- UR (URL Rating): Staerke einer Seite (Links + interne Links)

DR ist kein KPI. Nutze es nur zum Vergleich in der gleichen Nische.

### Links und Referring Domains

- Backlinks = alle Links.
- Referring Domains = Anzahl einzigartiger Websites die verlinken.

Referring Domains ist oft wichtiger als pure Link Anzahl.

### Organic Keywords und Traffic

- Organic keywords: wie viele Keywords in den Top 100.
- Traffic: Ahrefs Schaetzung.

Nicht gleich GA4 oder Search Console. Gut fuer Richtung, nicht fuer exakte Reports.

### Paid search (Wettbewerber Signal)

Wenn Ahrefs paid keywords und paid traffic zeigt, ist das ein Hinweis:

- Welche Topics Wettbewerber aktiv kaufen
- Welche Seiten sie mit Ads pushen

## Schritt 3 - Quick Wins uber Positionen finden

Im Organic keywords / positions View:

- Position 1-3: schuetzen und CTR verbessern
- Position 4-10: Quick Wins (on-page + interne Links)
- Position 11-20: mid term Targets
- Position 21-50: long term
- Position 51+: future opportunities

Workflow:

- Filter 4-10
- Sortiere nach Volume
- Ranking URL oeffnen und verbessern: title, intro, headings, intent, interne Links

## Schritt 4 - Links checken ohne dich zu verlieren

Mit Referring Domains und Backlinks beantwortest du 3 Fragen:

- Gewinnen oder verlieren wir Domains?
- Welche Seiten ziehen Links (und warum)?
- Gibt es offensichtlichen Spam oder sitewide Links?

Quick actions:

- "New" vs "Lost" Referring Domains
- "Best by links" fuer Link Magneten
- Seiten mit vielen Links schuetzen (URL nicht staendig aendern)

## Schritt 5 - Top pages und Wettbewerber nutzen

### Top pages

Top pages zeigt welche URLs den meisten geschaetzten Traffic bringen.

Nutze das um:

- Zu sehen was funktioniert (Format, Themen, Angle)
- Upgrades zu priorisieren
- Muster zu finden die du wiederholen kannst

### Organic competitors

Ahrefs zeigt Sites mit Keyword Overlap.

- Echte Wettbewerber waehlen (gleiches Produkt, gleiche Zielgruppe)
- Plattformen wie Wikipedia ignorieren wenn es kein Wettbewerber ist

Danach ist oft Content Gap der naechste Schritt:

- Keywords finden wo Wettbewerber ranken und du nicht
- In Topic Cluster umsetzen

## Schritt 6 - Seiten mit (fast) 0 Traffic

Ahrefs zeigt oft viele Seiten mit wenig oder keinem geschaetzten Traffic.

Nicht blind loeschen. Pro Seite entscheiden:

- Updaten
- In eine staerkere Seite mergen
- Redirect wenn obsolet
- Noindex wenn sie bleiben muss aber nicht ranken soll

## 10-Minuten Checkliste

- Scope gesetzt (domain / prefix / URL)
- Land gesetzt
- Organic Traffic Trend gecheckt
- Referring Domains Trend gecheckt
- Positionen 4-10 Liste exportiert
- Top pages geprueft
- Wichtigste Link Seiten identifiziert
- Wettbewerber Liste bereinigt
- Kurze To-do Liste geschrieben (max 10)
`.trim(),
    },
    sv: {
      title: 'Sa anvander du Ahrefs Site Explorer: enkel guide',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Enkel guide',
      metaDescription: 'En enkel guide till Ahrefs Site Explorer: valj scope, forsta DR/UR, hitta quick wins via positioner, kolla lankar och bygg en kort action list.',
      content: `
## Vad ar Ahrefs Site Explorer?

Site Explorer ar Ahrefs "dashboard" for en webbplats. Klistra in en domain eller URL och du ser direkt:

- Skattad organisk traffic och keyword growth
- Backlinks och referring domains
- Top pages och konkurrenter

Jag anvander det som en forsta scan. Sen klickar jag vidare till detaljrapporter.

## Steg 0 - Valj ratt scope (domain vs URL)

Innan du kollar siffror, valj ratt scope:

- Domain: helhetsbild av hela sajten
- Subdomain: bara blog, shop eller help center
- Prefix: en mapp som /blog/ eller /collections/
- Exact URL: en sida

For strategi: Domain. For en sektion: Prefix.

## Steg 1 - Satt land och period

- Valj land som matchar din marknad.
- Valj en period som visar trend (inte bara 7 dagar).
- Om grafen ar stokig, byt till weekly eller monthly.

Du vill se riktning: upp, ner, platt eller volatilt.

## Steg 2 - Las overview (vad betyder siffrorna?)

Overview ar nyttigt men manga siffror ar estimates. Anvand for jamforelse och trend.

### DR och UR

- DR (Domain Rating): styrka i domainens backlink profile (Ahrefs metric)
- UR (URL Rating): styrka for en specifik sida (links + interna links)

DR ar inte en KPI. Anvand for jamforelse i samma nisch.

### Links och referring domains

- Backlinks ar total links.
- Referring domains ar antal unika sajter som lankar.

Referring domains betyder ofta mer an bara manga links.

### Organic keywords och traffic

- Organic keywords: hur manga keywords i top 100.
- Traffic: Ahrefs estimate.

Inte samma som GA4 eller Search Console. Bra for riktning, inte exakta rapporter.

### Paid search (konkurrent signal)

Om Ahrefs visar paid keywords och paid traffic, se det som en hint:

- Vilka topics konkurrenter betalar for
- Vilka sidor de pushar med ads

## Steg 3 - Hitta quick wins med positioner

I Organic keywords / positions:

- Position 1-3: skydda och forbattra CTR
- Position 4-10: quick wins (on-page + interna links)
- Position 11-20: mid term
- Position 21-50: long term
- Position 51+: future opportunities

Workflow:

- Filtrera 4-10
- Sortera pa volume
- Oppna ranking URL och forbattra: title, intro, headings, intent, interna links

## Steg 4 - Kolla lankar utan att drunkna

Med Referring domains och Backlinks svarar du pa 3 fragor:

- Vinner eller tappar vi domains?
- Vilka sidor far lankar (och varfor)?
- Finns tydlig spam eller sitewide links?

Snabba actions:

- Kolla "New" vs "Lost" referring domains
- Kolla "Best by links" for link magnets
- Sidor med manga links: skydda URL (anda inte i onodan)

## Steg 5 - Anvand Top pages och konkurrenter

### Top pages

Top pages visar vilka URLs som driver mest skattad traffic.

Anvand for att:

- Se vad som funkar (format, topics, angle)
- Prioritera vilka sidor som ska uppdateras
- Hitta monster du kan upprepa

### Organic competitors

Ahrefs listar sajter med keyword overlap.

- Valj riktiga konkurrenter (samma produkt, samma audience)
- Ignorera Wikipedia om det inte ar en konkurrent

Sen ar content gap ofta nasta steg:

- Hitta keywords dar konkurrenter rankar och du inte
- Bygg topic clusters

## Steg 6 - Sidor med (nastan) 0 traffic

Ahrefs kan visa manga sidor med lite eller ingen skattad traffic.

Radera inte blint. Bestam per sida:

- Uppdatera
- Slag ihop med en starkare sida
- Redirect om den ar obsolet
- Noindex om den maste finnas men inte ska ranka

## 10-minuters checklista

- Scope satt (domain / prefix / URL)
- Land satt
- Organic traffic trend kollad
- Referring domains trend kollad
- Position 4-10 lista exporterad
- Top pages granskade
- Storsta link sidor hittade
- Konkurrentlista rensad
- Kort action list skriven (max 10)
`.trim(),
    },
    da: {
      title: 'Sa bruger du Ahrefs Site Explorer: enkel guide',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Enkel guide',
      metaDescription: 'En enkel guide til Ahrefs Site Explorer: vaelg scope, forstaa DR/UR, find quick wins via positioner, tjek links og lav en kort action list.',
      content: `
## Hvad er Ahrefs Site Explorer?

Site Explorer er Ahrefs "dashboard" for et website. Indsaet et domane eller en URL og du ser straks:

- Estimeret organisk traffic og keyword growth
- Backlinks og referring domains
- Top pages og konkurrenter

Jeg bruger det som et foerste scan. Derefter klikker jeg videre til detail reports.

## Trin 0 - Vaelg det rigtige scope (domane vs URL)

Inden du kigger pa tal, vaelg scope:

- Domain: overblik over hele sitet
- Subdomain: kun blog, shop eller help center
- Prefix: en mappe som /blog/ eller /collections/
- Exact URL: en side

Til strategi: Domain. Til en sektion: Prefix.

## Trin 1 - Saet land og periode

- Vaelg land der matcher dit marked.
- Vaelg en periode der viser trend (ikke kun 7 dage).
- Hvis grafen er ujavn, skift til weekly eller monthly.

Du vil se retning: op, ned, fladt eller volatilt.

## Trin 2 - Laes overview (hvad betyder metrics?)

Overview er nyttigt men mange tal er estimates. Brug til sammenligning og trend.

### DR og UR

- DR (Domain Rating): styrke i domenets backlink profile (Ahrefs metric)
- UR (URL Rating): styrke for en side (links + interne links)

DR er ikke en KPI. Brug til sammenligning i samme niche.

### Links og referring domains

- Backlinks er total links.
- Referring domains er antal unikke websites der linker.

Referring domains betyder ofte mere end bare mange links.

### Organic keywords og traffic

- Organic keywords: hvor mange keywords i top 100.
- Traffic: Ahrefs estimate.

Det er ikke det samme som GA4 eller Search Console. God til retning, ikke eksakt rapport.

### Paid search (konkurrent signal)

Hvis Ahrefs viser paid keywords og paid traffic, se det som en hint:

- Hvilke topics konkurrenter betaler for
- Hvilke sider de pusher med ads

## Trin 3 - Find quick wins med positioner

I Organic keywords / positions:

- Position 1-3: beskyt og forbedr CTR
- Position 4-10: quick wins (on-page + interne links)
- Position 11-20: mid term
- Position 21-50: long term
- Position 51+: future opportunities

Workflow:

- Filtrer 4-10
- Sorter efter volume
- Aabn ranking URL og forbedr: title, intro, headings, intent, interne links

## Trin 4 - Tjek links uden at drukne

Med Referring domains og Backlinks svarer du pa 3 sporgsmal:

- Faar vi flere eller faerre domains?
- Hvilke sider faar links (og hvorfor)?
- Er der tydelig spam eller sitewide links?

Hurtige actions:

- Tjek "New" vs "Lost" referring domains
- Tjek "Best by links" for link magnets
- Sider med mange links: beskyt URL (aendr ikke unodigt)

## Trin 5 - Brug Top pages og konkurrenter

### Top pages

Top pages viser hvilke URLs der driver mest estimeret traffic.

Brug det til:

- Se hvad der virker (format, topics, angle)
- Prioritere opdateringer
- Finde monster du kan gentage

### Organic competitors

Ahrefs lister sites med keyword overlap.

- Vaelg rigtige konkurrenter (samme produkt, samme audience)
- Ignorer Wikipedia hvis det ikke er en konkurrent

Sa er content gap ofte naeste skridt:

- Find keywords hvor konkurrenter ranker og du ikke
- Byg topic clusters

## Trin 6 - Sider med (naesten) 0 traffic

Ahrefs kan vise mange sider med lidt eller ingen estimeret traffic.

Slet ikke blindt. Beslut per side:

- Opdater
- Merge ind i en staerkere side
- Redirect hvis siden er obsolet
- Noindex hvis den skal blive men ikke ranke

## 10-minutters checkliste

- Scope sat (domain / prefix / URL)
- Land sat
- Organic traffic trend tjekket
- Referring domains trend tjekket
- Position 4-10 liste eksporteret
- Top pages gennemgaaet
- Storste link sider fundet
- Konkurrentliste renset
- Kort action list skrevet (max 10)
`.trim(),
    },
    fr: {
      title: 'Comment utiliser Ahrefs Site Explorer: guide simple',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Guide simple',
      metaDescription: 'Guide simple Ahrefs Site Explorer: choisir le bon scope, comprendre DR/UR, trouver des quick wins via positions, verifier les liens et creer une short action list.',
      content: `
## Qu est-ce que Ahrefs Site Explorer?

Site Explorer est le "dashboard" Ahrefs pour un site. Tu colles un domaine ou une URL et tu vois tout de suite:

- Traffic organique estime et croissance keywords
- Backlinks et referring domains
- Top pages et concurrents

Je l utilise comme premier scan. Ensuite je vais dans les rapports detailles.

## Etape 0 - Choisir le bon scope (domaine vs URL)

Avant de lire les chiffres, choisis le bon scope:

- Domain: vue globale du site
- Subdomain: seulement blog, shop ou help center
- Prefix: un dossier comme /blog/ ou /collections/
- Exact URL: une page

Pour la strategie: Domain. Pour une section: Prefix.

## Etape 1 - Choisir pays et periode

- Choisis le pays de ton marche.
- Prends une periode qui montre la tendance (pas seulement 7 jours).
- Si le graphe est trop bruyant, passe en weekly ou monthly.

Tu veux la direction: up, down, flat ou volatile.

## Etape 2 - Lire l overview (que veulent dire les metrics?)

L overview est utile mais beaucoup de chiffres sont des estimations. Utilise pour comparer et voir les tendances.

### DR et UR

- DR (Domain Rating): force du backlink profile du domaine (Ahrefs metric)
- UR (URL Rating): force d une page (links + internal links)

Ne traite pas DR comme KPI. Utilise pour comparer dans la meme niche.

### Links et referring domains

- Backlinks = total links.
- Referring domains = nombre de sites uniques qui linkent.

Referring domains compte souvent plus que le volume brut de links.

### Organic keywords et traffic

- Organic keywords: combien de keywords en top 100.
- Traffic: estimation Ahrefs.

Ce n est pas GA4 ou Search Console. Bien pour direction, pas pour reporting exact.

### Paid search (signal concurrent)

Si Ahrefs montre paid keywords et paid traffic, vois ca comme une hint:

- Quels topics les concurrents achetent
- Quelles pages ils poussent avec des ads

## Etape 3 - Trouver des quick wins via positions

Dans Organic keywords / positions:

- Positions 1-3: proteger et ameliorer CTR
- Positions 4-10: quick wins (on-page + internal links)
- Positions 11-20: mid term
- Positions 21-50: long term
- Positions 51+: future opportunities

Workflow:

- Filtre 4-10
- Trie par volume
- Ouvre la page et ameliore: title, intro, headings, intent, internal links

## Etape 4 - Verifier les liens sans se perdre

Avec Referring domains et Backlinks, reponds a 3 questions:

- On gagne ou on perd des domains?
- Quelles pages attirent des links (et pourquoi)?
- Spam evident ou sitewide links?

Actions rapides:

- "New" vs "Lost" referring domains
- "Best by links" pour trouver les link magnets
- Page avec beaucoup de links: proteger l URL

## Etape 5 - Utiliser Top pages et concurrents

### Top pages

Top pages montre les URLs qui apportent le plus de traffic estime.

Utilise pour:

- Voir ce qui marche (format, topics, angle)
- Prioriser les updates
- Repliquer des patterns

### Organic competitors

Ahrefs liste des sites avec keyword overlap.

- Choisis de vrais concurrents (meme produit, meme audience)
- Ignore Wikipedia si ce n est pas un concurrent

Ensuite, content gap est souvent la prochaine etape:

- Trouver des keywords ou les concurrents rankent et toi non
- Construire des topic clusters

## Etape 6 - Pages avec (presque) 0 traffic

Ahrefs peut montrer beaucoup de pages avec peu ou pas de traffic estime.

Ne supprime pas a l aveugle. Decide page par page:

- Update
- Merge dans une page plus forte
- Redirect si obsolete
- Noindex si elle doit rester mais ne pas ranker

## Checklist 10 minutes

- Scope ok (domain / prefix / URL)
- Pays ok
- Trend organic traffic verifie
- Trend referring domains verifie
- Liste positions 4-10 exportee
- Top pages verifiees
- Pages les plus linkees identifiees
- Liste concurrents nettoyee
- Short action list ecrite (max 10)
`.trim(),
    },
    it: {
      title: 'Come usare Ahrefs Site Explorer: guida semplice',
      topic: 'SEO',
      metaTitle: 'Ahrefs Site Explorer | Guida semplice',
      metaDescription: 'Guida semplice ad Ahrefs Site Explorer: scegliere scope, capire DR/UR, trovare quick wins con le posizioni, controllare link e creare una short action list.',
      content: `
## Cos e Ahrefs Site Explorer?

Site Explorer e il "dashboard" di Ahrefs per un sito. Incolli un dominio o una URL e vedi subito:

- Traffico organico stimato e crescita keywords
- Backlinks e referring domains
- Top pages e competitor

Lo uso come prima scan. Poi entro nei report di dettaglio.

## Step 0 - Scegli lo scope giusto (dominio vs URL)

Prima di guardare i numeri, scegli lo scope:

- Domain: vista globale del sito
- Subdomain: solo blog, shop o help center
- Prefix: una cartella come /blog/ o /collections/
- Exact URL: una pagina

Per strategia: Domain. Per una sezione: Prefix.

## Step 1 - Imposta paese e periodo

- Scegli il paese del tuo mercato.
- Scegli un periodo che mostra trend (non solo 7 giorni).
- Se il grafico e troppo "bumpy", passa a weekly o monthly.

Cerchi direzione: su, giu, piatto o volatile.

## Step 2 - Leggi l overview (cosa significano i metrics?)

L overview e utile ma molti numeri sono stime. Usala per confronto e trend.

### DR e UR

- DR (Domain Rating): forza del backlink profile del dominio (Ahrefs metric)
- UR (URL Rating): forza di una pagina (links + internal links)

Non usare DR come KPI. Usalo per confrontare siti nella stessa nicchia.

### Links e referring domains

- Backlinks = total links.
- Referring domains = numero di siti unici che linkano.

Referring domains conta spesso piu del numero totale di links.

### Organic keywords e traffic

- Organic keywords: quante keywords in top 100.
- Traffic: stima Ahrefs.

Non e GA4 o Search Console. Buono per direzione, non per report esatti.

### Paid search (segnale competitor)

Se Ahrefs mostra paid keywords e paid traffic, consideralo una hint:

- Su quali topics i competitor spendono
- Quali pagine spingono con ads

## Step 3 - Trova quick wins con le posizioni

In Organic keywords / positions:

- Posizioni 1-3: proteggi e migliora CTR
- Posizioni 4-10: quick wins (on-page + internal links)
- Posizioni 11-20: mid term
- Posizioni 21-50: long term
- Posizioni 51+: future opportunities

Workflow:

- Filtra 4-10
- Ordina per volume
- Apri la pagina e migliora: title, intro, headings, intent, internal links

## Step 4 - Controlla i link senza perderti

Con Referring domains e Backlinks rispondi a 3 domande:

- Stiamo guadagnando o perdendo domains?
- Quali pagine attirano links (e perche)?
- C e spam evidente o sitewide links?

Azioni rapide:

- "New" vs "Lost" referring domains
- "Best by links" per vedere link magnets
- Pagine con molti links: proteggi la URL

## Step 5 - Usa Top pages e competitor

### Top pages

Top pages mostra le URLs con piu traffic stimato.

Usalo per:

- Capire cosa funziona (format, topics, angle)
- Prioritizzare gli update
- Trovare pattern da ripetere

### Organic competitors

Ahrefs lista siti con keyword overlap.

- Scegli competitor reali (stesso prodotto, stessa audience)
- Ignora Wikipedia se non e un competitor

Poi content gap e spesso il prossimo step:

- Trova keywords dove i competitor rankano e tu no
- Crea topic clusters

## Step 6 - Pagine con (quasi) 0 traffic

Ahrefs puo mostrare molte pagine con poco o nessun traffic stimato.

Non cancellare a caso. Decidi pagina per pagina:

- Update
- Merge in una pagina piu forte
- Redirect se obsoleta
- Noindex se deve restare ma non deve rankare

## Checklist 10 minuti

- Scope ok (domain / prefix / URL)
- Paese ok
- Trend organic traffic controllato
- Trend referring domains controllato
- Lista posizioni 4-10 esportata
- Top pages controllate
- Pagine piu linkate identificate
- Lista competitor pulita
- Short action list scritta (max 10)
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
