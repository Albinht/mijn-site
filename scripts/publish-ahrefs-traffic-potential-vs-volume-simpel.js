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
  slug: 'ahrefs-traffic-potential-vs-volume',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Traffic potential vs volume: choose keywords that get clicks (Ahrefs)',
  content: `
Search volume is a starting point, not a decision. In 2026, many SERPs answer the query directly (ads, shopping, local packs, AI answers). That means: volume can look great while clicks are low.

Ahrefs helps because it shows Clicks, Clicks per search, and Traffic Potential, so you can pick keywords that actually send traffic.

## Volume vs clicks: what is the real problem?

Volume = searches.
Clicks = actual clicks to results.

A SERP can "steal" clicks via:

- Ads
- Shopping blocks
- Local packs
- AI overview / answer boxes
- Featured snippets / knowledge panels
- People Also Ask
- Video carousels

When clicks are low, ranking #1 can still bring less traffic than you expect.

## The metrics I use (and what they mean)

In Ahrefs Keyword Explorer:

- Volume: searches/month (estimate)
- Clicks: estimated clicks from the SERP
- CPS (Clicks per search): clicks divided by searches (0-1)
- TP (Traffic Potential): estimated monthly organic traffic the #1 page can get from the broader topic (all keywords it ranks for)

Supporting signals:

- KD: difficulty signal (Ahrefs metric)
- CPC: commercial intent signal
- Parent topic: helps cluster keywords to one main page

Important: none of these are exact. Use them to compare and to avoid bad bets.

## My 7-step workflow to pick keywords with real traffic

### Step 0 - Lock the market and intent

- Choose country/language.
- Decide the page type: guide vs comparison vs product/category vs local service page.

If intent and page type are wrong, metrics do not save you.

### Step 1 - Check Volume vs Clicks

Compare:

- Clicks close to Volume => clicky SERP
- Clicks far below Volume => noisy SERP / instant answers

Shortcut: CPS

- CPS ~0.7-1.0 => most searches lead to clicks
- CPS ~0.2-0.4 => many searches do not click

### Step 2 - Look at Traffic Potential (TP)

TP tells you what the topic can do when you rank well, because top pages often rank for many long-tail variations.

How I interpret it:

- TP much higher than Volume => broad topic (great for guides)
- TP close to Volume => narrow intent (often model/product queries)

### Step 3 - Check the SERP reality

Open the SERP overview and check:

- Which page types rank (blog, category, product, tool)?
- Which SERP features appear?
- Are the top results stable brands?

If the SERP is dominated by shopping/local/AI answers, volume will overpromise.

### Step 4 - Inspect the top 3 pages

Open the top 3 URLs:

- Estimated traffic per page
- How many keywords drive it (distribution)
- Backlinks/referring domains (rough competition)
- Content depth and freshness

If the #1 page gets most traffic from many long-tail keywords, that is strong topic potential.

### Step 5 - Decide: create, update, or skip

Bucket each keyword/topic:

- Create: no page exists, intent fits, TP/clicks make sense
- Update: a page exists but underperforms (often positions 4-20)
- Skip: wrong intent, SERP too noisy, KD too high, low business value

### Step 6 - Build a small cluster, not a random list

For one topic:

- 1 hub page (main intent)
- 3-8 supporting pages (sub-questions)
- Internal links both ways

Avoid cannibalization: one primary intent per page.

### Step 7 - Measure and iterate

Use Search Console for truth:

- Impressions: are you being shown?
- Clicks: are you earning them?
- CTR: is the snippet working?

In Ahrefs:

- Track rankings and estimate trends
- Monitor competitors

## Two practical examples

### Example 1: high volume, low clicks

- Volume: high
- Clicks: low
- CPS: low

Likely: heavy SERP features or instant answer. Target it only if business value is huge and you can realistically win.

### Example 2: lower volume, high clicks

- Volume: medium
- Clicks: close to volume
- CPS: high

Often: clean SERP and clear intent. Great for early wins and reliable traffic.

## For new websites: safer keyword selection

If your site rarely ranks in the top 100:

- Prefer long-tail keywords with clear intent
- Lower KD
- Higher CPS (people actually click)
- SERPs without heavy ads/shopping

Then use internal links to build authority for bigger topics.

## Common mistakes

- Choosing by volume only
- Ignoring SERP features and intent
- Treating KD as a rule, not a signal
- Creating multiple pages for one intent (cannibalization)
- Not connecting keyword picks to conversions

## Mini scoring (optional)

If you need a simple decision score:

- Opportunity = (Clicks or TP) * business_value / difficulty

Keep business_value as High/Medium/Low. This forces you to pick keywords that matter.

## Checklist

- Market set (country/language/device)
- Intent and page type decided
- Volume, Clicks, CPS checked
- TP checked and top pages inspected
- SERP features reviewed
- Decision made (create/update/skip)
- Cluster and internal links planned
- Measurement plan (GSC + GA4)
`.trim(),
  translations: {
    en: {
      title: 'Traffic potential vs volume: choose keywords that get clicks (Ahrefs)',
      topic: 'SEO',
      metaTitle: 'Traffic potential vs volume | Ahrefs workflow',
      metaDescription: 'Stop choosing keywords by volume only. Use Clicks, CPS, and Traffic Potential in Ahrefs, validate intent in the SERP, and build keyword clusters that drive traffic.',
      content: `
Search volume is a starting point, not a decision. In 2026, many SERPs answer the query directly (ads, shopping, local packs, AI answers). That means: volume can look great while clicks are low.

Ahrefs helps because it shows Clicks, Clicks per search, and Traffic Potential, so you can pick keywords that actually send traffic.

## Volume vs clicks: what is the real problem?

Volume = searches.
Clicks = actual clicks to results.

A SERP can "steal" clicks via:

- Ads
- Shopping blocks
- Local packs
- AI overview / answer boxes
- Featured snippets / knowledge panels
- People Also Ask
- Video carousels

When clicks are low, ranking #1 can still bring less traffic than you expect.

## The metrics I use (and what they mean)

In Ahrefs Keyword Explorer:

- Volume: searches/month (estimate)
- Clicks: estimated clicks from the SERP
- CPS (Clicks per search): clicks divided by searches (0-1)
- TP (Traffic Potential): estimated monthly organic traffic the #1 page can get from the broader topic (all keywords it ranks for)

Supporting signals:

- KD: difficulty signal (Ahrefs metric)
- CPC: commercial intent signal
- Parent topic: helps cluster keywords to one main page

Important: none of these are exact. Use them to compare and to avoid bad bets.

## My 7-step workflow to pick keywords with real traffic

### Step 0 - Lock the market and intent

- Choose country/language.
- Decide the page type: guide vs comparison vs product/category vs local service page.

If intent and page type are wrong, metrics do not save you.

### Step 1 - Check Volume vs Clicks

Compare:

- Clicks close to Volume => clicky SERP
- Clicks far below Volume => noisy SERP / instant answers

Shortcut: CPS

- CPS ~0.7-1.0 => most searches lead to clicks
- CPS ~0.2-0.4 => many searches do not click

### Step 2 - Look at Traffic Potential (TP)

TP tells you what the topic can do when you rank well, because top pages often rank for many long-tail variations.

How I interpret it:

- TP much higher than Volume => broad topic (great for guides)
- TP close to Volume => narrow intent (often model/product queries)

### Step 3 - Check the SERP reality

Open the SERP overview and check:

- Which page types rank (blog, category, product, tool)?
- Which SERP features appear?
- Are the top results stable brands?

If the SERP is dominated by shopping/local/AI answers, volume will overpromise.

### Step 4 - Inspect the top 3 pages

Open the top 3 URLs:

- Estimated traffic per page
- How many keywords drive it (distribution)
- Backlinks/referring domains (rough competition)
- Content depth and freshness

If the #1 page gets most traffic from many long-tail keywords, that is strong topic potential.

### Step 5 - Decide: create, update, or skip

Bucket each keyword/topic:

- Create: no page exists, intent fits, TP/clicks make sense
- Update: a page exists but underperforms (often positions 4-20)
- Skip: wrong intent, SERP too noisy, KD too high, low business value

### Step 6 - Build a small cluster, not a random list

For one topic:

- 1 hub page (main intent)
- 3-8 supporting pages (sub-questions)
- Internal links both ways

Avoid cannibalization: one primary intent per page.

### Step 7 - Measure and iterate

Use Search Console for truth:

- Impressions: are you being shown?
- Clicks: are you earning them?
- CTR: is the snippet working?

In Ahrefs:

- Track rankings and estimate trends
- Monitor competitors

## Two practical examples

### Example 1: high volume, low clicks

- Volume: high
- Clicks: low
- CPS: low

Likely: heavy SERP features or instant answer. Target it only if business value is huge and you can realistically win.

### Example 2: lower volume, high clicks

- Volume: medium
- Clicks: close to volume
- CPS: high

Often: clean SERP and clear intent. Great for early wins and reliable traffic.

## For new websites: safer keyword selection

If your site rarely ranks in the top 100:

- Prefer long-tail keywords with clear intent
- Lower KD
- Higher CPS (people actually click)
- SERPs without heavy ads/shopping

Then use internal links to build authority for bigger topics.

## Common mistakes

- Choosing by volume only
- Ignoring SERP features and intent
- Treating KD as a rule, not a signal
- Creating multiple pages for one intent (cannibalization)
- Not connecting keyword picks to conversions

## Mini scoring (optional)

If you need a simple decision score:

- Opportunity = (Clicks or TP) * business_value / difficulty

Keep business_value as High/Medium/Low. This forces you to pick keywords that matter.

## Checklist

- Market set (country/language/device)
- Intent and page type decided
- Volume, Clicks, CPS checked
- TP checked and top pages inspected
- SERP features reviewed
- Decision made (create/update/skip)
- Cluster and internal links planned
- Measurement plan (GSC + GA4)
`.trim(),
    },
    nl: {
      title: 'Traffic potential vs volume: kies keywords die clicks krijgen (Ahrefs)',
      topic: 'SEO',
      metaTitle: 'Traffic potential vs volume | Ahrefs workflow',
      metaDescription: 'Kies keywords niet alleen op volume. Gebruik Clicks, CPS en Traffic Potential in Ahrefs, check de SERP intent en bouw clusters die echt traffic brengen.',
      content: `
Search volume is een startpunt, geen beslissing. In 2026 zitten veel SERPs vol met "noise" (ads, shopping, local packs, AI answers). Daardoor kan volume hoog zijn terwijl clicks laag zijn.

Ahrefs helpt omdat je naast volume ook Clicks, Clicks per search en Traffic Potential ziet. Daarmee kies je keywords die echt verkeer kunnen sturen.

## Volume vs clicks: wat is het echte probleem?

Volume = searches.
Clicks = echte clicks naar resultaten.

Een SERP kan clicks "stelen" via:

- Ads
- Shopping blokken
- Local packs
- AI overview / answer boxes
- Featured snippets / knowledge panels
- People Also Ask
- Video carousels

Als clicks laag zijn, kan een #1 positie nog steeds minder traffic opleveren dan je verwacht.

## Metrics die ik gebruik (en wat ze betekenen)

In Ahrefs Keyword Explorer:

- Volume: searches/maand (schatting)
- Clicks: geschatte clicks vanuit de SERP
- CPS (Clicks per search): clicks gedeeld door searches (0-1)
- TP (Traffic Potential): geschatte maandelijkse organische traffic die de #1 pagina kan pakken vanuit het bredere topic (alle keywords waar die pagina op rankt)

Supporting signalen:

- KD: difficulty signaal (Ahrefs metric)
- CPC: signaal voor commerciele intent
- Parent topic: helpt keywords clusteren naar 1 hoofdpagina

Belangrijk: niets is exact. Gebruik dit om te vergelijken en om slechte bets te vermijden.

## Mijn 7-stappen workflow om keywords met echte traffic te kiezen

### Stap 0 - Zet markt en intent vast

- Kies land/talen.
- Kies paginatype: gids vs vergelijking vs product/categorie vs lokale pagina.

Als intent en paginatype fout zijn, redden de metrics je niet.

### Stap 1 - Check Volume vs Clicks

Vergelijk:

- Clicks dichtbij Volume => clicky SERP
- Clicks ver onder Volume => noisy SERP / instant answers

Shortcut: CPS

- CPS ~0.7-1.0 => de meeste searches leiden tot clicks
- CPS ~0.2-0.4 => veel searches leiden niet tot clicks

### Stap 2 - Kijk naar Traffic Potential (TP)

TP laat zien wat het topic kan doen als je goed rankt, omdat top paginas vaak ranken op veel long-tail variaties.

Zo interpreteer ik het:

- TP veel hoger dan Volume => breed topic (ideaal voor gidsen)
- TP dicht bij Volume => smalle intent (vaak model/product queries)

### Stap 3 - SERP reality check

Open de SERP overview en check:

- Welke paginatypes ranken (blog, categorie, product, tool)?
- Welke SERP features staan er?
- Zijn de top resultaten stabiele merken?

Als de SERP wordt gedomineerd door shopping/local/AI answers, gaat volume je teleurstellen.

### Stap 4 - Inspecteer de top 3 paginas

Open de top 3 URLs:

- Geschatte traffic per pagina
- Hoeveel keywords dragen bij (distribution)
- Backlinks/referring domains (ruwe competitie)
- Content diepte en freshness

Als de #1 pagina traffic pakt uit veel long-tail keywords, is dat sterke topic potentie.

### Stap 5 - Beslis: create, update of skip

Zet elk keyword/topic in 1 bak:

- Create: geen pagina, intent past, TP/clicks logisch
- Update: pagina bestaat maar underperformt (vaak posities 4-20)
- Skip: verkeerde intent, SERP te noisy, KD te hoog, lage business value

### Stap 6 - Bouw een cluster (geen random lijst)

Voor 1 topic:

- 1 hub pagina (main intent)
- 3-8 supporting paginas (sub-vragen)
- Interne links beide kanten op

Voorkom kannibalisatie: 1 primaire intent per pagina.

### Stap 7 - Meet en itereren

Gebruik Search Console voor de waarheid:

- Impressions: word je getoond?
- Clicks: verdien je ze?
- CTR: werkt je snippet?

In Ahrefs:

- Track rankings en trends
- Monitor concurrenten

## Twee praktische voorbeelden

### Voorbeeld 1: hoog volume, lage clicks

- Volume: hoog
- Clicks: laag
- CPS: laag

Waarschijnlijk: veel SERP features of instant answer. Target alleen als business value heel hoog is en je realistisch kunt winnen.

### Voorbeeld 2: lager volume, hoge clicks

- Volume: middel
- Clicks: dichtbij volume
- CPS: hoog

Vaak: schone SERP en duidelijke intent. Ideaal voor snelle, betrouwbare groei.

## Voor nieuwe sites: veiliger keyword selectie

Als je zelden in de top 100 komt:

- Ga voor long-tail met duidelijke intent
- Lagere KD
- Hogere CPS (mensen klikken echt)
- SERPs zonder heavy ads/shopping

En bouw daarna interne links richting je grotere topics.

## Veelgemaakte fouten

- Alleen op volume kiezen
- SERP features en intent negeren
- KD als harde regel gebruiken
- Meerdere paginas voor 1 intent maken (kannibalisatie)
- Geen koppeling maken met conversies

## Mini score (optioneel)

Als je een simpele score wil:

- Opportunity = (Clicks of TP) * business_value / difficulty

Zet business_value op Hoog/Middel/Laag. Dat dwingt je om te kiezen voor keywords die echt wat opleveren.

## Checklist

- Markt gezet (land/taal/device)
- Intent en paginatype bepaald
- Volume, Clicks, CPS gecheckt
- TP gecheckt en top paginas bekeken
- SERP features bekeken
- Besluit gemaakt (create/update/skip)
- Cluster en interne links gepland
- Meting staat (GSC + GA4)
`.trim(),
    },
    de: {
      title: 'Traffic Potential vs Volume: bessere Keyword Wahl (Ahrefs)',
      topic: 'SEO',
      metaTitle: 'Traffic Potential vs Volume | Ahrefs',
      metaDescription: 'Warum Volume nicht reicht: nutze Clicks, CPS und Traffic Potential in Ahrefs fuer bessere Keywords.',
      content: `
Search Volume ist nur ein Startpunkt. Viele SERPs ziehen Klicks ab (Ads, Shopping, Local Pack, AI Answers). Deshalb brauchst du Clicks und Traffic Potential.

## Die wichtigsten Metriken in Ahrefs

- Volume: Suchen pro Monat
- Clicks: geschaetzte Klicks aus der SERP
- CPS: Clicks per search
- Traffic Potential: moeglicher Traffic fuer die #1 Seite

## Workflow fuer echte Chancen

1. Markt und Intent setzen (Land, Sprache, Seitentyp)
2. Volume vs Clicks vergleichen (CPS)
3. Traffic Potential pruefen
4. SERP ansehen (Features, Page Types, Brands)
5. Top 3 Seiten checken (Traffic, Links, Tiefe)
6. Entscheiden: create / update / skip

## Typische Fehler

- Nur nach Volume waehlen
- SERP Features ignorieren
- KD als harte Regel nehmen
- Mehrere Seiten fuer denselben Intent bauen

## Fazit

Traffic Potential + Clicks zeigen, welche Keywords wirklich Traffic bringen.
`.trim(),
    },
    sv: {
      title: 'Traffic Potential vs Volume: valj keywords som ger klick',
      topic: 'SEO',
      metaTitle: 'Traffic Potential vs Volume | Ahrefs',
      metaDescription: 'Varfor volume inte racker: anvand Clicks, CPS och Traffic Potential i Ahrefs.',
      content: `
Search volume ar bara start. Manga SERPs stjalar klick (ads, shopping, local, AI). Darfor ar Clicks och Traffic Potential viktigare.

## Viktiga metrics i Ahrefs

- Volume
- Clicks
- CPS (Clicks per search)
- Traffic Potential

## Workflow

1. Satt marknad och intent
2. Jamfor volume vs clicks (CPS)
3. Kolla Traffic Potential
4. Granska SERP features och page types
5. Kolla top 3 URLs
6. Skapa/uppdatera/skip

## Vanliga misstag

- Bara volume
- Ignorera SERP features
- KD som regel
- Flera sidor for samma intent

## Slutsats

Vardera keywords efter klick och potential, inte bara volume.
`.trim(),
    },
    da: {
      title: 'Traffic Potential vs Volume: vaelg keywords der giver klik',
      topic: 'SEO',
      metaTitle: 'Traffic Potential vs Volume | Ahrefs',
      metaDescription: 'Hvorfor volume ikke er nok: brug Clicks, CPS og Traffic Potential i Ahrefs.',
      content: `
Search volume er kun start. Mange SERPs stjaeler klik (ads, shopping, local, AI). Derfor er Clicks og Traffic Potential vigtigere.

## Vigtige metrics i Ahrefs

- Volume
- Clicks
- CPS (Clicks per search)
- Traffic Potential

## Workflow

1. Saet marked og intent
2. Sammenlign volume vs clicks (CPS)
3. Tjek Traffic Potential
4. Kig SERP features og page types
5. Tjek top 3 URLs
6. Create / update / skip

## Typiske fejl

- Valg kun efter volume
- Ignorere SERP features
- KD som regel
- Flere sider for samme intent

## Konklusion

Vaelg keywords ud fra klik og potentiale, ikke kun volume.
`.trim(),
    },
    fr: {
      title: 'Traffic Potential vs Volume: choisir des keywords qui cliquent',
      topic: 'SEO',
      metaTitle: 'Traffic Potential vs Volume | Ahrefs',
      metaDescription: 'Pourquoi le volume ne suffit pas: utilise Clicks, CPS et Traffic Potential dans Ahrefs.',
      content: `
Le volume est un point de depart. Beaucoup de SERP captent des clics (ads, shopping, local, AI). Il faut donc regarder Clicks et Traffic Potential.

## Metrics utiles dans Ahrefs

- Volume
- Clicks
- CPS (Clicks per search)
- Traffic Potential

## Workflow

1. Marche et intent
2. Comparer volume vs clicks (CPS)
3. Verifier Traffic Potential
4. Regarder SERP features et types de pages
5. Analyser top 3 URLs
6. Create / update / skip

## Erreurs courantes

- Choisir uniquement par volume
- Ignorer les SERP features
- KD comme regle fixe
- Plusieurs pages pour le meme intent

## Conclusion

Le traffic potentiel et les clics sont plus fiables que le volume seul.
`.trim(),
    },
    it: {
      title: 'Traffic Potential vs Volume: scegliere keyword che portano clic',
      topic: 'SEO',
      metaTitle: 'Traffic Potential vs Volume | Ahrefs',
      metaDescription: 'Perche il volume non basta: usa Clicks, CPS e Traffic Potential in Ahrefs.',
      content: `
Il volume e solo un punto di partenza. Molte SERP rubano clic (ads, shopping, local, AI). Per questo servono Clicks e Traffic Potential.

## Metriche chiave in Ahrefs

- Volume
- Clicks
- CPS (Clicks per search)
- Traffic Potential

## Workflow

1. Mercato e intent
2. Confronta volume vs clicks (CPS)
3. Controlla Traffic Potential
4. Guarda SERP features e page types
5. Analizza top 3 URLs
6. Create / update / skip

## Errori tipici

- Scegliere solo volume
- Ignorare SERP features
- KD come regola fissa
- Piu pagine per lo stesso intent

## Conclusione

Clicks e Traffic Potential indicano quali keyword portano traffico reale.
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    console.log('Publishing Ahrefs traffic potential article to database...')

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
