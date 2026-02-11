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
  slug: 'ahrefs-keywords-explorer-stappenplan',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Ahrefs Keywords Explorer: complete guide (research + planning)',
  content: `
Ahrefs Keywords Explorer is not a magic keyword list. It is a decision tool: what to build, what to skip, and what it will take to win.

If you only look at volume, you will over-invest in keywords that do not send clicks. Use intent, SERP reality, clicks, and Traffic Potential to build an SEO plan that actually performs.

This article connects to the other Ahrefs workflows on the site:

- Traffic Potential vs volume: [read it here](/blog/ahrefs-traffic-potential-vs-volume)
- Site Explorer workflows: [read it here](/blog/ahrefs-site-explorer-simpel-stappenplan)
- Content gap planning: [read it here](/blog/content-gap-analyse-ahrefs-stappenplan)

## What Keywords Explorer is good for (and what it is not)

Use it to:

- Find keyword and topic ideas
- Estimate clicks and Traffic Potential (not just volume)
- Understand intent and SERP composition
- Build topic clusters (hub + supporting pages)
- Prioritize by business value and difficulty

Do not use it as a replacement for:

- Search Console (truth for impressions, clicks, indexation)
- GA4 (truth for conversions and revenue)

Ahrefs is an external tool. Treat numbers as estimates. Trends and comparisons are the real value.

## Step 0 - Set the market correctly (do not skip)

Most keyword research mistakes are market mistakes.

- Country: pick where you want customers, not where you live
- Language: match your content language
- Device: if most leads come from mobile, check mobile trends too

If your market settings are wrong, everything that follows is wrong.

If you are new to Ahrefs, start with the basics first: [create an Ahrefs account](/blog/ahrefs-account-aanmaken-simpele-uitleg).

## Step 1 - Start from business and intent (not from keywords)

Before you open Ahrefs, write down:

- The 3-5 services/products you actually sell
- The conversion you want (demo, quote, call, purchase)
- The intent types you need: informational (learn), commercial (compare), transactional (buy)

If you need a bigger SEO foundation first, read: [what SEO optimization is](/blog/wat-is-seo-optimalisatie) and the broader roadmap: [hoog in Google komen](/blog/hoog-in-google).

## Step 2 - Build a seed list from real data

Better seeds create better output.

Good seed sources:

- Search Console queries (pages with impressions)
- Customer questions (sales calls, support tickets)
- Competitor categories and landing pages
- Your own internal site search (if you have it)

Rule: do not start with one seed keyword. Start with 5-20 seeds and expect to build clusters.

## Step 3 - Use the right reports inside Keywords Explorer

In Ahrefs you can expand a seed via:

- Matching terms: closest variants
- Related terms: semantic expansion
- Questions: great for supporting pages and FAQs

Your goal is not 200 keywords. Your goal is:

- 1 strong hub page per intent/topic
- 3-8 supporting pages that feed it

## Step 4 - Read the metrics like an SEO, not like a dashboard

Here is how I interpret the core metrics:

- Volume: searches per month (starting point, not a decision)
- Clicks: estimated clicks from the SERP
- CPS: clicks per search (how clicky the SERP is)
- KD: difficulty estimate (signal, not a rule)
- CPC: commercial intent signal (useful for prioritization)
- Traffic Potential (TP): estimated monthly organic traffic for the #1 page (topic-level)

Traffic Potential is often more useful than volume because top pages rank for many long-tail variations. If you want the full workflow: [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume).

Practical interpretation:

- High volume + low clicks: SERP noise, instant answers, heavy ads
- Lower volume + high clicks: often more reliable traffic
- TP much higher than volume: broad topic (good for guides)

## Step 5 - Validate intent with the SERP (this is where plans fail)

Open the SERP overview and answer:

- What page types rank? (guide, category, product, local page)
- What SERP features steal clicks? (ads, shopping, local pack, AI answers)
- Are top results stable brands?
- Are the results fresh and detailed?

If the SERP wants product pages and you plan a blog post, you will usually lose.

## Step 6 - Calibrate difficulty using Site Explorer

KD alone is not enough. Use Site Explorer to see what it actually takes.

Workflow:

1. In the SERP overview, open the top 3 ranking URLs.
2. For each, check in Site Explorer:
- Referring domains and link profile
- Estimated traffic distribution (one keyword vs many)
- Content depth and structure

If you are new to Site Explorer, use this guide: [Ahrefs Site Explorer workflows](/blog/ahrefs-site-explorer-simpel-stappenplan).

## Step 7 - Turn keywords into a cluster plan (not a random list)

A cluster is the unit that wins. One page rarely wins alone.

A practical cluster:

- 1 hub page for the primary intent
- 3-8 supporting pages for sub-questions and long-tail
- Internal links both ways

Avoid cannibalization: one primary intent per page.

If you want to find topics your competitors already win with, run a gap first: [content gap analyse in Ahrefs](/blog/content-gap-analyse-ahrefs-stappenplan).

## Step 8 - Plan internal links before you publish

Internal links are the cheapest SEO leverage.

Rules that work:

- Hub page links to all supporting pages (descriptive anchors)
- Supporting pages link back to the hub (early in the article)
- Supporting pages cross-link when it helps the reader
- Link from older, strong pages to the new hub (link velocity)

If you need a technical audit to ensure crawl and index are not blocked: [technical SEO audit checklist](/blog/technische-seo-analyse-stappenplan-checklist).

## Step 9 - Publish, measure, and iterate (the monthly loop)

Use Search Console as truth:

- Are you getting impressions?
- Is CTR reasonable? (snippet quality)
- Which queries show up unexpectedly? (expand content)

Fast wins often live in positions 4-20. Update those pages first.

## Filters I actually use (quick start)

I keep it simple:

- Exclude branded competitor terms
- Filter by intent words (price, best, vs, how)
- Start with lower KD for new sites
- Prefer higher CPS when SERPs are noisy

## Common mistakes

- Building a keyword list without a cluster plan
- Choosing by volume only
- Skipping SERP checks
- Creating multiple pages for the same intent
- Ignoring internal links
- Measuring rankings but not conversions

## Conclusion

Keywords Explorer is powerful when you use it as a planning workflow: market settings, intent, clicks, Traffic Potential, SERP validation, and clusters with internal links.

Want a practical SEO roadmap built from your market and your data? Start here: [wat is SEO optimalisatie](/blog/wat-is-seo-optimalisatie).
`.trim(),
  translations: {
    en: {
      title: 'Ahrefs Keywords Explorer: complete guide (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Complete guide',
      metaDescription: 'Complete Keywords Explorer workflow: market settings, intent, clicks, Traffic Potential, SERP checks, clustering, and internal linking.',
      content: `
Ahrefs Keywords Explorer is a decision tool: what to build, what to skip, and what it will take to win.

Key related workflows:

- [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume)
- [Site Explorer workflows](/blog/ahrefs-site-explorer-simpel-stappenplan)
- [Content gap planning](/blog/content-gap-analyse-ahrefs-stappenplan)

## Step 0 - Set the market correctly

- Country and language = your real market
- Check device if mobile matters

New to Ahrefs? Start with setup first: [create an Ahrefs account](/blog/ahrefs-account-aanmaken-simpele-uitleg).

## Step 1 - Start from business and intent

- Define the conversion (demo, quote, call, purchase)
- Pick intent types: learn, compare, buy

## Step 2 - Build a seed list from real data

- Search Console queries
- Customer questions
- Competitor pages

## Step 3 - Expand inside Keywords Explorer

Use:

- Matching terms
- Related terms
- Questions

## Step 4 - Read metrics that matter

- Volume is a starting point
- Clicks + CPS show whether the SERP sends traffic
- Traffic Potential (TP) is topic-level opportunity

More detail: [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume).

## Step 5 - Validate intent via SERP overview

- Page types that rank
- SERP features (ads, shopping, local, AI)
- Stable brands

## Step 6 - Calibrate difficulty with Site Explorer

Do not trust KD alone. Inspect the top 3 pages:

- Referring domains
- Content depth and structure
- Keyword distribution

Guide: [Site Explorer workflows](/blog/ahrefs-site-explorer-simpel-stappenplan).

## Step 7 - Build clusters

- 1 hub page
- 3-8 supporting pages
- Internal links both ways

Avoid cannibalization: one primary intent per page.

## Step 8 - Plan internal links before you publish

- Hub -> supporting pages
- Supporting pages -> hub
- Link from older strong pages -> new hub

## Step 9 - Publish and iterate

Use Search Console to measure impressions, CTR, and pages in positions 4-20.

## Conclusion

Use Keywords Explorer as a workflow: market, intent, clicks, TP, SERP checks, clusters, and internal linking.
`.trim(),
    },
    nl: {
      title: 'Ahrefs Keywords Explorer: complete gids (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Complete gids',
      metaDescription: 'Complete Keywords Explorer workflow: marktinstellingen, intent, clicks, Traffic Potential, SERP checks, clustering en interne links.',
      content: `
Ahrefs Keywords Explorer is geen magische keywordlijst. Het is een beslis tool: wat bouw je, wat skip je, en wat kost het om te winnen.

Als je alleen naar volume kijkt, investeer je snel in keywords die geen clicks sturen. Gebruik intent, SERP realiteit, clicks en Traffic Potential om een SEO plan te maken dat echt presteert.

Handige interne links naar gerelateerde workflows:

- Traffic Potential vs volume: [lees het hier](/blog/ahrefs-traffic-potential-vs-volume)
- Site Explorer workflows: [lees het hier](/blog/ahrefs-site-explorer-simpel-stappenplan)
- Content gap planning: [lees het hier](/blog/content-gap-analyse-ahrefs-stappenplan)

## Waarvoor is Keywords Explorer nuttig (en waarvoor niet)

Gebruik het om:

- Keyword en topic ideeen te vinden
- Clicks en Traffic Potential te schatten (niet alleen volume)
- Intent en SERP opbouw te begrijpen
- Topic clusters te bouwen (hub + supporting)
- Prioriteiten te kiezen op business value en difficulty

Niet als vervanging van:

- Search Console (waarheid voor impressions, clicks, indexatie)
- GA4 (waarheid voor conversies en omzet)

Ahrefs is een externe tool. Zie cijfers als schattingen. Trends en vergelijkingen zijn de echte waarde.

## Stap 0 - Zet je markt goed (niet overslaan)

De meeste keyword research fouten zijn markt fouten.

- Land: kies waar je klanten zitten
- Taal: match je content taal
- Device: als mobile belangrijk is, check mobile ook

Als dit fout staat, is de rest waardeloos.

Ben je nieuw in Ahrefs? Start dan eerst met de basis: [Ahrefs account aanmaken](/blog/ahrefs-account-aanmaken-simpele-uitleg).

## Stap 1 - Start vanuit business en intent (niet vanuit keywords)

Voor je Ahrefs opent, noteer:

- Je 3-5 echte diensten/producten
- Welke conversie telt (demo, offerte, call, aankoop)
- Welke intent types je nodig hebt: informational (leren), commercial (vergelijken), transactional (kopen)

Als je eerst de basis wil snappen: [wat is SEO optimalisatie](/blog/wat-is-seo-optimalisatie) en het roadmap artikel: [hoog in Google komen](/blog/hoog-in-google).

## Stap 2 - Bouw een seed lijst uit echte data

Betere seeds geven betere output.

Goede seed bronnen:

- Search Console queries (paginas met impressions)
- Vragen van klanten (sales calls, support)
- Concurrent categorieen en landings
- Interne site search (als je die hebt)

Regel: begin niet met 1 seed keyword. Begin met 5-20 seeds en verwacht clusters.

## Stap 3 - Gebruik de juiste reports in Keywords Explorer

Je breidt een seed uit via:

- Matching terms: dichtstbijzijnde varianten
- Related terms: semantische uitbreiding
- Questions: ideaal voor supporting paginas en FAQ

Je doel is niet 200 keywords. Je doel is:

- 1 sterke hub pagina per intent/topic
- 3-8 supporting paginas die de hub voeden

## Stap 4 - Lees de metrics als SEO specialist

Zo interpreteer ik de core metrics:

- Volume: startpunt, geen besluit
- Clicks: geschatte clicks vanuit de SERP
- CPS: clicks per search (hoe clicky is de SERP)
- KD: difficulty (signaal, geen regel)
- CPC: signaal voor commerciele intent
- Traffic Potential (TP): geschatte maandelijkse traffic voor de #1 pagina (topic niveau)

Traffic Potential is vaak nuttiger dan volume omdat top paginas ranken op veel long-tail varianten. Volledige uitleg: [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume).

Praktische interpretatie:

- Hoog volume + lage clicks: SERP noise, instant answers, zware ads
- Lager volume + hoge clicks: vaak betrouwbaarder traffic
- TP veel hoger dan volume: breed topic (goed voor gidsen)

## Stap 5 - Valideer intent met de SERP (hier gaat het vaak mis)

Open de SERP overview en check:

- Welke paginatypes ranken? (gids, categorie, product, lokaal)
- Welke SERP features stelen clicks? (ads, shopping, local pack, AI)
- Zijn de top resultaten sterke brands?
- Is de content recent en diep?

Als de SERP product paginas wil en jij schrijft een blog, verlies je meestal.

## Stap 6 - Kalibreer difficulty met Site Explorer

KD alleen is niet genoeg. Gebruik Site Explorer om te zien wat het echt kost.

Workflow:

1. Open in SERP overview de top 3 URLs.
2. Check per URL in Site Explorer:
- Referring domains en linkprofiel
- Traffic verdeling (1 keyword vs veel)
- Content diepte en structuur

Site Explorer gids: [Ahrefs Site Explorer workflows](/blog/ahrefs-site-explorer-simpel-stappenplan).

## Stap 7 - Zet keywords om naar een cluster plan

Een cluster is de unit die wint. 1 pagina wint zelden alleen.

Een praktische cluster:

- 1 hub pagina voor de primaire intent
- 3-8 supporting paginas voor subvragen en long-tail
- Interne links beide kanten op

Vermijd kannibalisatie: 1 primaire intent per pagina.

Wil je topics vinden waar concurrenten al winnen? Run eerst een gap: [content gap analyse in Ahrefs](/blog/content-gap-analyse-ahrefs-stappenplan).

## Stap 8 - Plan interne links voordat je publiceert

Interne links zijn de goedkoopste SEO hefboom.

Regels die werken:

- Hub pagina linkt naar alle supporting paginas (beschrijvende anchors)
- Supporting paginas linken terug naar de hub (vroeg in het artikel)
- Supporting paginas cross linken als het de lezer helpt
- Link van oudere, sterke paginas naar de nieuwe hub (link velocity)

Zorg ook dat crawl/indexatie technisch goed staat: [technische SEO audit checklist](/blog/technische-seo-analyse-stappenplan-checklist).

## Stap 9 - Publiceer, meet en verbeter (maandelijkse loop)

Gebruik Search Console als waarheid:

- Krijg je impressions?
- Is CTR logisch? (snippet kwaliteit)
- Welke queries komen onverwacht binnen? (content uitbreiden)

Snelle winst zit vaak in posities 4-20. Update die paginas eerst.

## Filters die ik echt gebruik (quick start)

- Exclude branded concurrent termen
- Filter op intent woorden (prijs, beste, vs, hoe)
- Start met lagere KD bij nieuwe sites
- Kies liever hogere CPS als SERPs noisy zijn

## Veelgemaakte fouten

- Keyword lijst maken zonder cluster plan
- Alleen kiezen op volume
- SERP check overslaan
- Meerdere paginas voor dezelfde intent
- Interne links negeren
- Rankings meten zonder conversies

## Conclusie

Keywords Explorer werkt het best als workflow: markt, intent, clicks, Traffic Potential, SERP validatie, en clusters met interne links.

Wil je een praktische SEO roadmap op basis van jouw markt en data? Start hier: [wat is SEO optimalisatie](/blog/wat-is-seo-optimalisatie).
`.trim(),
    },
    de: {
      title: 'Ahrefs Keywords Explorer: kompletter Guide (Research + Planung)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Kompletter Guide',
      metaDescription: 'Kompletter Workflow: Markt, Intent, Clicks, Traffic Potential, SERP Check, Cluster und interne Links.',
      content: `
Ahrefs Keywords Explorer ist ein Decision Tool: was bauen, was skippen, und was es kostet zu gewinnen.

Interne Links:

- [Traffic Potential vs Volume](/blog/ahrefs-traffic-potential-vs-volume)
- [Site Explorer Workflows](/blog/ahrefs-site-explorer-simpel-stappenplan)
- [Content Gap Analyse](/blog/content-gap-analyse-ahrefs-stappenplan)

## Kurz Workflow

1. Markt setzen (Land/Sprache/Device)
2. Seeds aus echten Daten (Search Console, Kundenfragen)
3. Reports: Matching, Related, Questions
4. Metrics: Clicks, CPS, TP (nicht nur Volume)
5. SERP Check: Intent und Page Types
6. Difficulty kalibrieren in Site Explorer
7. Cluster bauen (Hub + Supporting) + interne Links planen

## Fazit

Nutze Keywords Explorer als Workflow, nicht als Liste.
`.trim(),
    },
    sv: {
      title: 'Ahrefs Keywords Explorer: komplett guide (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Komplett guide',
      metaDescription: 'Komplett workflow: marknad, intent, clicks, traffic potential, SERP check, clusters och interna lankar.',
      content: `
Keywords Explorer ar ett decision tool: vad du ska bygga, vad du ska skippa, och vad som kravs for att vinna.

Interne links:

- /blog/ahrefs-traffic-potential-vs-volume
- /blog/ahrefs-site-explorer-simpel-stappenplan
- /blog/content-gap-analyse-ahrefs-stappenplan

## Kort workflow

1. Satt marknad (land/sprak/device)
2. Seeds fran data (Search Console, kundfragor)
3. Matching/Related/Questions
4. Clicks, CPS, Traffic Potential
5. SERP check (intent + page types)
6. Bygg cluster och planera interna lankar

## Slutsats

Anvand Keywords Explorer for planering och prioritering.
`.trim(),
    },
    da: {
      title: 'Ahrefs Keywords Explorer: komplet guide (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Komplet guide',
      metaDescription: 'Komplet workflow: marked, intent, clicks, traffic potential, SERP check, clusters og interne links.',
      content: `
Keywords Explorer er et decision tool: hvad du skal bygge, hvad du skal skippe, og hvad der kraeves for at vinde.

Interne links:

- /blog/ahrefs-traffic-potential-vs-volume
- /blog/ahrefs-site-explorer-simpel-stappenplan
- /blog/content-gap-analyse-ahrefs-stappenplan

## Kort workflow

1. Saet marked (land/sprog/device)
2. Seeds fra data (Search Console, kundesporgsmal)
3. Matching/Related/Questions
4. Clicks, CPS, Traffic Potential
5. SERP check (intent + page types)
6. Byg clusters og plan interne links

## Konklusion

Brug Keywords Explorer til planlaegning og prioritering.
`.trim(),
    },
    fr: {
      title: 'Ahrefs Keywords Explorer: guide complet (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Guide complet',
      metaDescription: 'Workflow complet: marche, intent, clicks, traffic potential, SERP check, clusters et liens internes.',
      content: `
Keywords Explorer est un decision tool: quoi construire, quoi ignorer, et ce qu il faut pour gagner.

Liens internes:

- /blog/ahrefs-traffic-potential-vs-volume
- /blog/ahrefs-site-explorer-simpel-stappenplan
- /blog/content-gap-analyse-ahrefs-stappenplan

## Workflow court

1. Marche (pays/langue/device)
2. Seeds via data (Search Console, questions clients)
3. Matching/Related/Questions
4. Clicks, CPS, Traffic Potential
5. SERP check (intent + types de pages)
6. Clusters + liens internes

## Conclusion

Utilise Keywords Explorer comme workflow, pas comme liste.
`.trim(),
    },
    it: {
      title: 'Ahrefs Keywords Explorer: guida completa (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Guida completa',
      metaDescription: 'Workflow completo: mercato, intent, clicks, traffic potential, SERP check, cluster e link interni.',
      content: `
Keywords Explorer e un decision tool: cosa costruire, cosa skippare e cosa serve per vincere.

Link interni:

- /blog/ahrefs-traffic-potential-vs-volume
- /blog/ahrefs-site-explorer-simpel-stappenplan
- /blog/content-gap-analyse-ahrefs-stappenplan

## Workflow breve

1. Mercato (paese/lingua/device)
2. Seeds da data (Search Console, domande clienti)
3. Matching/Related/Questions
4. Clicks, CPS, Traffic Potential
5. SERP check (intent + page types)
6. Cluster + link interni

## Conclusione

Usa Keywords Explorer come workflow, non solo come lista.
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
