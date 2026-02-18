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

const nlContent = `
De meeste SEO teams denken nog steeds in 1 format: een blog. Maar Google rankt geen formats, Google rankt oplossingen voor intent.

Soms is de beste SEO pagina een gids van 2.500 woorden. Soms is het een categoriepagina, een tool, een FAQ, een case study of een video met transcript.

In dit artikel laat ik zien welke contenttypes ik inzet voor SEO, wanneer ik ze kies, en hoe ik ze aan elkaar knoop zodat je niet alleen verkeer pakt, maar ook conversies.

## Wat zijn "contenttypes" in SEO?

Met contenttypes bedoel ik de vorm waarin je informatie aanbiedt. Voor SEO zijn dit de meest gebruikte:

- dienstpagina's (B2B/B2C services)
- categoriepagina's en productpagina's (e-commerce)
- gidsen en blogs (informational)
- vergelijkingen en "alternatives" paginas (commercial)
- case studies en klantverhalen (proof)
- FAQ / kennisbank (long-tail + support)
- templates, checklists en tools (link waardig)
- video (YouTube + embed) en podcasts

Het doel is niet om alles te maken. Het doel is de juiste mix per markt en per fase in de funnel.

## Waarom verschillende contenttypes je sneller laten groeien

De SERP is voller dan ooit:

- advertenties en shopping duwen organische resultaten naar beneden
- AI Overviews pakken steeds vaker de eerste aandacht
- local packs nemen plek in bij lokale intent

Dat betekent: als jij alleen blogs publiceert, laat je veel "real estate" liggen.

Verdieping:

- AI zichtbaarheid: [Hoe je rankt in AI Overviews](/blog/hoe-richten-in-ai-overviews-data-gedreven-strategie)
- basis SEO: [Wat is SEO optimalisatie?](/blog/wat-is-seo-optimalisatie)
- roadmap: [Hoger in Google komen](/blog/hoog-in-google)

## De contenttype x intent matrix (mijn beslissysteem)

Als je 1 ding meeneemt: kies je contenttype op basis van intent en SERP.

| Intent | Wat de zoeker wil | Contenttypes die meestal winnen |
| --- | --- | --- |
| Informational | leren, begrijpen, stappen | gids/blog, FAQ, kennisbank, video + transcript |
| Commercial | vergelijken, shortlist maken | vergelijking, best-of, alternatieven, case study |
| Transactional | kopen, aanvragen, boeken | dienstpagina, categoriepagina, productpagina, landingspagina |
| Post-purchase | support, troubleshooting | kennisbank, handleiding, FAQ, video |

Praktisch: als de SERP vooral categoriepagina's toont en jij schrijft een blog, verlies je meestal. Andersom ook.

## De 10 contenttypes die ik het vaakst inzet (met inzet en SEO focus)

## 1) Dienstpagina's (high intent)

Wanneer: je verkoopt diensten en wilt leads.

Waar ik op focus:

- 1 pagina per primaire dienst + intent (geen kannibalisatie)
- duidelijke CTA's (boven de fold en in de flow)
- bewijs: cases, reviews, certificeringen, FAQ
- interne links naar relevante ondersteunende content

## 2) Category pages (webshops)

Wanneer: je productgroepen hebt met zoekvolume.

Waar ik op focus:

- crawlbare filters (en voorkomen van indexatie-ruis)
- korte, sterke introductie bovenaan (intent + context)
- uitgebreide content onderaan voor long-tail (maar alleen als het nuttig is)
- interne linking naar subcategorieen en gidsen

Technische borging:

- [Technische SEO analyse checklist](/blog/technische-seo-analyse-stappenplan-checklist)

## 3) Productpagina's

Wanneer: je op productniveau wilt winnen of generieke productvragen wilt vangen.

Waar ik op focus:

- unieke productinformatie (niet alleen leverancierstekst)
- FAQ per product (support + long-tail)
- UGC (reviews, Q&A, fotos)
- structured data waar relevant

## 4) Gidsen en blogs (thought leadership + topic ownership)

Wanneer: je vraag wil vangen, brand wil bouwen en clusters wil maken.

Waar ik op focus:

- hub pagina die het onderwerp volledig dekt
- supporting paginas die subvragen pakken
- snelle en duidelijke antwoorden vroeg in de tekst
- voorbeelden en afwegingen (geen generieke uitleg)

Workflow:

- [Ahrefs Keywords Explorer stappenplan](/blog/ahrefs-keywords-explorer-stappenplan)
- [Traffic potential versus volume](/blog/ahrefs-traffic-potential-vs-volume)

## 5) Vergelijkingen (X vs Y, best-of, alternatives)

Wanneer: er commerciele intent is en zoekers shortlist gedrag vertonen.

Waar ik op focus:

- duidelijke criteria (waarom is iets beter of slechter)
- transparantie (voor wie is dit wel/niet)
- update ritme (dit type pagina veroudert snel)
- interne links naar dienst/product pagina's waar passend

## 6) Case studies en klantverhalen

Wanneer: je vertrouwen nodig hebt om te converteren (B2B vooral).

Waar ik op focus:

- context: startpunt, probleem, constraints
- aanpak: wat is er gedaan en waarom
- resultaat: metrics en tijdlijn (zonder opgeblazen claims)
- learnings: wat zou je anders doen

Case studies trekken niet altijd veel volume, maar ze verhogen conversie op high intent pagina's enorm via interne links.

## 7) Tools, calculators en templates (link waardig)

Wanneer: je een "asset" wilt maken waar mensen naar linken en die terugkerend verkeer pakt.

Waar ik op focus:

- 1 tool per duidelijke use-case
- content eromheen: uitleg, voorbeelden, FAQ
- interne links vanuit relevante blogs naar de tool

Op de site kun je dit combineren met:

- /tools/topic-cluster-builder
- /tools/content-repurposing
- /tools/ai-content-expansion

## 8) FAQ en kennisbank

Wanneer: je veel supportvragen hebt of long-tail wil vangen.

Waar ik op focus:

- 1 vraag per pagina (of per sectie) met duidelijke koppen
- korte antwoorden, daarna verdieping
- interne links naar handleidingen, tools en dienstpagina's

## 9) Video (en vooral: transcript)

Wanneer: je uitleg beter werkt in demo of walkthrough.

Waar ik op focus:

- embed op de pagina + volledig transcript
- timestamps en duidelijke koppen (scanbaarheid)
- interne links naar verdieping

Video helpt ook met engagement, maar de indexeerbare waarde komt vaak uit de tekstlaag (transcript + context).

## 10) Lokale landingspagina's

Wanneer: lokale intent en meerdere steden/regio's.

Waar ik op focus:

- uniek per locatie (geen thin templating)
- bewijs lokaal (cases, fotos, regio specifieke info)
- interne links naar hoofddienst + relevante gidsen

## Hoe ik contenttypes aan elkaar knoop (interne links)

Het geheim is niet "meer pagina's". Het geheim is een structuur die logisch is voor mens en bot.

Mijn regels:

- 1 hub pagina linkt naar alle supporting paginas
- supporting paginas linken vroeg terug naar de hub
- high intent pagina's linken naar proof (case studies) en verdieping (gidsen)
- oudere sterke paginas linken naar nieuwe hubs (sneller momentum)

Wil je dit serieus aanpakken, bouw dan eerst je clusterplan:

- [Content gap analyse in Ahrefs](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Ahrefs Site Explorer workflows](/blog/ahrefs-site-explorer-simpel-stappenplan)

## Hoe ik prioriteer (wat maak je eerst)

Ik prioriteer op impact, niet op volume.

Eenvoudige formule:

Opportunity = (traffic potential x business value) / moeite

Traffic potential haal ik vaak uit Ahrefs, business value uit conversiedata en sales input, moeite uit wat het kost om te maken en te winnen.

## Meetplan per contenttype (zodat je niet op gevoel stuurt)

Mijn minimale meetset:

- Search Console: impressions, CTR, queries, posities 4-20
- GA4/CRM: conversies, leadkwaliteit, omzet (waar mogelijk)
- Ahrefs: trend en concurrentie, niet als waarheid

Let op: sommige contenttypes zijn "assists" (case studies, kennisbank) en converteren indirect.

## Veelgemaakte fouten

- alles als blog publiceren (ook transactional intent)
- meerdere pagina's maken voor dezelfde intent (kannibalisatie)
- geen update ritme op vergelijkingspaginas
- tools publiceren zonder context en interne links
- category pages laten indexeren met duizenden filtervarianten

## Praktische route (als je morgen wil beginnen)

1. Inventariseer je bestaande paginas per intent.
2. Check per belangrijk zoekwoord: welk contenttype wil de SERP?
3. Bouw 3 clusters met 1 hub + 3-8 supporting paginas.
4. Voeg 5-10 interne links toe vanuit bestaande sterke pagina's.
5. Publiceer, meet 30 dagen, en update de paginas die in positie 4-20 hangen.

## Conclusie

Verschillende contenttypes werken omdat ze verschillende intent bedienen.

Wie alleen blogs publiceert, mist kansen. Wie de juiste mix bouwt en intern goed linkt, wint niet alleen traffic, maar ook vertrouwen en conversie.

Wil je een sterke basis leggen, start hier:

- [Zoekmachine marketing](/blog/zoekmachine-marketing)
- [SEO vs SEA: verschillen en combineren](/blog/seo-vs-sea-verschil-en-combineren)
- [Content schrijven met AI (workflow)](/blog/content-schrijven-met-ai-workflow)
`.trim()

const enContent = `
SEO is not "write more blogs". Google ranks solutions to intent, and different intents require different content types.

Use an intent-first model:

- informational: guides, FAQs, video + transcript
- commercial: comparisons, best-of, alternatives, case studies
- transactional: service pages, category pages, product pages
- post-purchase: knowledge base, troubleshooting, how-to

Then connect everything with internal links (hub + supporting pages) and measure using Search Console + GA4.

Related internal guides:

- [What SEO optimization is](/blog/wat-is-seo-optimalisatie)
- [How to rank higher in Google](/blog/hoog-in-google)
- [AI Overviews strategy](/blog/hoe-richten-in-ai-overviews-data-gedreven-strategie)
- [Keywords Explorer workflow](/blog/ahrefs-keywords-explorer-stappenplan)
`.trim()

const deContent = `
SEO ist nicht nur Blogposts schreiben. Google rankt Loesungen fuer Suchintention, und dafuer braucht man unterschiedliche Content Typen.

Kurzmodell:

- informational: Guides, FAQ, Video + Transcript
- commercial: Vergleiche, Best-of, Alternativen, Case Studies
- transactional: Service Pages, Category Pages, Product Pages
- post-purchase: Knowledge Base, How-to

Wichtig ist die interne Verlinkung (Hub + Supporting) und ein klares Messsystem.

Interne Links:

- /blog/wat-is-seo-optimalisatie
- /blog/hoog-in-google
- /blog/ahrefs-keywords-explorer-stappenplan
`.trim()

const svContent = `
SEO handlar inte bara om bloggar. Olika intent kraver olika contenttyper.

Snabbt:

- informational: guider, FAQ, video + transcript
- commercial: jamforelser, best-of, alternatives, case studies
- transactional: service pages, category pages, product pages
- post-purchase: knowledge base

Knyt ihop allt med interna lankar (hub + supporting) och mata i Search Console + GA4.
`.trim()

const daContent = `
SEO er ikke kun blogindlaeg. Forskellig intent kraever forskellige contenttyper.

Kort:

- informational: guides, FAQ, video + transcript
- commercial: sammenligninger, best-of, alternativer, cases
- transactional: service pages, category pages, product pages
- post-purchase: knowledge base

Bind det sammen med interne links (hub + supporting) og maal i Search Console + GA4.
`.trim()

const frContent = `
Le SEO n est pas seulement ecrire des articles. Google classe des reponses a une intention, et chaque intention prefere un type de contenu.

Modele simple:

- informational: guides, FAQ, video + transcript
- commercial: comparatifs, best-of, alternatives, cas clients
- transactionnel: pages service, categorie, produit
- post-achat: base de connaissances

Reliez tout avec des liens internes et mesurez avec Search Console + GA4.
`.trim()

const itContent = `
SEO non significa solo scrivere blog. Google posiziona risposte per intent, e ogni intent richiede tipi di contenuto diversi.

Schema:

- informational: guide, FAQ, video + transcript
- commercial: confronti, best-of, alternative, case study
- transactional: pagine servizio, categorie, prodotti
- post-purchase: knowledge base

Collega tutto con internal linking e misura con Search Console + GA4.
`.trim()

const article = {
  slug: 'contenttypes-voor-seo',
  topic: 'Content',
  status: 'PUBLISHED',
  title: 'Contenttypes voor SEO: welke werken wanneer (en hoe je ze laat converteren)',
  content: nlContent,
  translations: {
    en: {
      title: 'Content types for SEO: what to use and when',
      topic: 'Content',
      metaTitle: 'Content types for SEO | What to use when',
      metaDescription: 'An intent-first guide to SEO content types: pages, guides, comparisons, case studies, tools, video, and how to connect them with internal links.',
      content: enContent,
    },
    nl: {
      title: 'Contenttypes voor SEO: welke werken wanneer (en hoe je ze laat converteren)',
      topic: 'Content',
      metaTitle: 'Contenttypes voor SEO | Welke werken wanneer',
      metaDescription: 'Welke contenttypes werken het best voor SEO? Leer hoe je per intent het juiste format kiest en alles aan elkaar knoopt met interne links.',
      content: nlContent,
    },
    de: {
      title: 'Content Typen fuer SEO: was funktioniert wann',
      topic: 'Content',
      metaTitle: 'Content Typen fuer SEO | Intent Modell',
      metaDescription: 'Intent-first Guide: Welche Content Typen fuer SEO funktionieren und wie interne Verlinkung den Unterschied macht.',
      content: deContent,
    },
    sv: {
      title: 'Contenttyper for SEO: vad fungerar nar',
      topic: 'Content',
      metaTitle: 'Contenttyper for SEO | Intent guide',
      metaDescription: 'Intent-first guide till contenttyper for SEO: guider, pages, jamforelser, cases, tools och intern lankning.',
      content: svContent,
    },
    da: {
      title: 'Contenttyper til SEO: hvad virker hvornar',
      topic: 'Content',
      metaTitle: 'Contenttyper til SEO | Intent guide',
      metaDescription: 'Intent-first guide til contenttyper for SEO: guides, pages, sammenligninger, cases, tools og intern linking.',
      content: daContent,
    },
    fr: {
      title: 'Types de contenu pour le SEO: quoi utiliser et quand',
      topic: 'Content',
      metaTitle: 'Types de contenu SEO | Guide intent',
      metaDescription: 'Guide intent-first sur les types de contenu SEO: pages, guides, comparatifs, cas clients, outils, video et liens internes.',
      content: frContent,
    },
    it: {
      title: 'Tipi di contenuto per SEO: cosa usare e quando',
      topic: 'Content',
      metaTitle: 'Tipi di contenuto SEO | Guida intent',
      metaDescription: 'Guida intent-first ai tipi di contenuto SEO: pagine, guide, confronti, case study, tool, video e internal linking.',
      content: itContent,
    },
  },
}

async function publishArticle() {
  try {
    console.log('Publishing content types article to database...')

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

