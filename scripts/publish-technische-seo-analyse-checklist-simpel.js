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
  slug: 'technische-seo-analyse-stappenplan-checklist',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Technische SEO-analyse: compleet stappenplan + checklist (met prioriteit)',
  content: `
Een technische SEO-analyse is de periodieke health check van je website. Je checkt of Google je site goed kan crawlen, renderen en indexeren, en of bezoekers een snelle, stabiele ervaring krijgen.

## Wat is een technische SEO-analyse?

Een technische SEO-analyse is het proces waarin je de technische gezondheid van je website beoordeelt. Het doel is tweeledig:

- Google moet je paginas kunnen crawlen, renderen en indexeren.
- Bezoekers moeten een snelle, duidelijke ervaring krijgen (wat ook conversie helpt).

Het belangrijkste om te snappen: een audit is pas waardevol als er een prioriteitenlijst uitkomt. Niet 200 issues, maar 10-30 acties die echt impact hebben.

## Wat is het resultaat van een goede audit?

Een technische SEO-audit levert idealiter op:

- Een lijst met issues (met voorbeeld URLs)
- Prioriteit (P0/P1/P2)
- Impact inschatting (traffic/conversie risico)
- Owner (wie pakt dit op: dev/content/seo)
- Plan om te meten (Search Console + GA4)

## Stap 0 - Verzamel data (30-60 min)

Gebruik minimaal:

- Google Search Console: Pages/Indexing, Sitemaps, Core Web Vitals, Enhancements, Manual actions, Security issues
- Een crawler: Ahrefs Site Audit of een vergelijkbare crawl tool
- GA4: top landing pages + conversies (zodat je weet welke paginas je niet "per ongeluk" sloopt)

Optioneel (voor grotere sites): server logs (voor crawl budget en bots).

## Stap 1 - Indexatie blockers (P0)

Als je hier problemen hebt, fix je dit eerst. Anders heeft de rest weinig zin.

Checklist:

- robots.txt blokkeert geen belangrijke secties
- Geen noindex op belangrijke paginas (meta robots of x-robots-tag)
- sitemap.xml bestaat, is up-to-date en staat in Search Console
- Canonicals kloppen (meestal self-referencing) en wijzen niet naar 404
- HTTP -> HTTPS is consistent (geen mixed content)
- www/non-www en trailing slash zijn consistent

## Stap 2 - Status codes en redirects (P0/P1)

Dit gaat over bereikbaarheid en link equity.

- 404/410: fix of redirect (zeker als er interne links of backlinks naartoe gaan)
- 5xx: server errors zijn een direct risico voor indexatie
- Redirect chains/loops: maak 1 schone redirect
- 302 vs 301: 301 voor permanent (tenzij echt tijdelijk)
- Soft 404s: pagina lijkt 200 maar is "not found" content

Praktisch: pak eerst errors op paginas met traffic of conversies.

## Stap 3 - Crawl efficiency en duplicate content (P1)

Veel sites verliezen crawl budget en relevance door parameter URLs, filters en duplicaten.

Check:

- Parameter URLs (filters/sortering) die duizenden varianten maken
- Duplicate content door tags, paginering, of copy/paste pagina templates
- Canonical strategie bij filters en paginering
- Interne links: sturen die Google naar de juiste (canonieke) paginas?

Doel: minder ruis, meer focus op paginas die ertoe doen.

## Stap 4 - Site structuur en interne links (P1)

Structuur is technische SEO en content tegelijk.

- Click depth: belangrijke paginas binnen 2-3 klikken
- Orphan pages: paginas zonder interne links
- Breadcrumbs: helpen UX en structuur
- Anchor teksten: beschrijvend en consistent
- Topic clusters: 1 hub pagina + supporting paginas

Interne links zijn vaak de snelste technische win met weinig development.

## Stap 5 - Performance en Core Web Vitals (P1/P2)

Snelheid is niet alleen SEO, maar vooral UX.

Waar ik meestal winst zie:

- Afbeeldingen: formaten, compressie, lazy loading
- JavaScript: minder third-party scripts, minder blocking scripts
- CSS: critical CSS, minify, unused CSS
- Caching: browser caching en server caching waar mogelijk

Gebruik PageSpeed Insights als richting en test op mobiel (mobile-first).

## Stap 6 - Rendering en JavaScript (P1)

Veel sites lijken "ok" voor mensen, maar Google ziet minder.

Check:

- Is belangrijke content zichtbaar zonder JS?
- Kan Google de pagina renderen (URL Inspection in Search Console)?
- Wordt structured data correct gerenderd?

Als rendering faalt, is content vaak onzichtbaar voor SEO.

## Stap 7 - Structured data en metadata (P2)

Structured data is geen ranking truc, maar helpt begrip en rich results.

Checklist:

- Structured data is relevant (Article/Product/FAQ waar het klopt)
- Valideer op fouten (Search Console / testing tools)
- Unieke title + meta description per belangrijke pagina
- Geen massale duplicates door templates

## Stap 8 - Internationale SEO (alleen als relevant)

Als je meerdere talen/landen target:

- hreflang correct (reciprocal en met juiste URLs)
- Canonicals per locale kloppen
- Sitemaps per taal/land (optioneel) en duidelijke structuur

## Prioriteit model (simpel)

- P0: indexatie blockers, 5xx, massale canonical/noindex fouten
- P1: redirect chains, duplicate content op schaal, interne link issues, CWV problemen op templates
- P2: structured data optimalisaties, kleinere meta issues, nice-to-haves

## Mini checklist (snel scannen)

- Indexatie: robots/noindex/sitemap/canonical
- Errors: 404/5xx/redirect chains
- Structuur: click depth, orphan pages, breadcrumbs
- Performance: mobile speed en zware scripts
- Rendering: JS/content zichtbaar voor Google
- Meten: GSC + GA4 + conversies

## Hoe vaak doe je dit?

- Kleine site: elke 6-12 maanden, en na grote releases/redesigns
- Grotere site: elk kwartaal (light audit) + jaarlijks full audit

## Conclusie

Technische SEO is de basis. Als Google je site niet goed kan crawlen of indexeren, laat je rankings en omzet liggen.

Pak eerst P0 blockers aan, daarna structuur en performance, en pas daarna de details.
`.trim(),
}

async function publishArticle() {
  try {
    console.log('Publishing technical SEO audit article to database...')

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
