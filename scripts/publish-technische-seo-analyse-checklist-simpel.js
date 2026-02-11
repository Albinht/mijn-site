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
  translations: {
    en: {
      title: 'Technical SEO audit: complete steps + checklist (with priorities)',
      topic: 'SEO',
      metaTitle: 'Technical SEO audit checklist | Prioritized steps',
      metaDescription: 'Run a prioritized technical SEO audit: indexing, redirects, crawl efficiency, internal links, Core Web Vitals, rendering/JS, and structured data.',
      content: `
A technical SEO audit is the health check that tells you whether search engines can reliably crawl, render, and index your site and whether users get a fast, stable experience.

The important part: the output should be a prioritized backlog, not a list of 200 warnings.

## What a good audit delivers

For each issue you want:

- Example URLs (proof)
- Priority (P0/P1/P2)
- Impact (traffic, conversion, risk)
- Owner (SEO, dev, content)
- Fix approach (what to change, where)
- Measurement (how you will confirm the win)

## Step 0 - Collect data (30-60 minutes)

Minimum:

- Google Search Console: Indexing, Sitemaps, Core Web Vitals, Enhancements, Manual actions, Security issues
- A crawler: Ahrefs Site Audit or similar
- GA4: top landing pages + conversions (so you do not break what makes money)

Optional for bigger sites: server logs (bot behavior and crawl budget).

## Step 1 - Indexation and canonical setup (P0)

If Google cannot index, nothing else matters.

Checklist:

- robots.txt does not block important sections
- no accidental noindex (meta robots or x-robots-tag)
- sitemap.xml exists, is current, and is submitted in Search Console
- canonicals are correct (often self-referencing) and do not point to 404
- HTTP->HTTPS is consistent and no mixed content
- www/non-www and trailing slash are consistent

## Step 2 - Status codes and redirects (P0/P1)

This is about accessibility and preserving link equity.

- 5xx: direct indexation risk, fix fast
- 404/410: fix or redirect (especially if internally linked or with backlinks)
- redirect chains/loops: collapse to one clean redirect
- 302 vs 301: use 301 when the move is permanent
- soft 404: page returns 200 but behaves like a not-found page

Start with pages that get traffic or conversions.

## Step 3 - Crawl efficiency and duplicates (P1)

Large sites leak crawl budget and relevance via:

- parameter URLs (filters/sorting) creating thousands of variants
- duplicate content from tags, pagination, templates, or session IDs
- poor canonical strategy across variants
- internal links sending Google to non-canonical URLs

Goal: reduce noise and push crawl to pages that matter.

## Step 4 - Architecture and internal linking (P1)

This is where many sites win quickly.

- important pages within 2-3 clicks
- no orphan pages (pages with no internal links)
- breadcrumbs for structure and UX
- descriptive anchors (not "click here")
- topic clusters: 1 hub page + supporting pages, linked both ways

## Step 5 - Performance and Core Web Vitals (P1/P2)

Speed is mostly a UX problem, but it also affects crawling and conversion.

Typical wins:

- images: right sizes, compression, lazy loading
- JavaScript: remove heavy third-party scripts, reduce blocking work
- CSS: remove unused CSS, optimize critical CSS
- caching: browser and server caching where possible

Test on mobile and validate improvements on template level (not one page).

## Step 6 - Rendering and JavaScript SEO (P1)

A site can look fine to users and still be weak for Google.

Check:

- is critical content visible without JavaScript?
- can Google render the page (URL Inspection in Search Console)?
- are internal links discoverable in rendered HTML?
- does structured data render correctly?

If rendering fails, content is effectively invisible for SEO.

## Step 7 - Structured data and snippet quality (P2)

Structured data is not a ranking hack. It helps understanding and eligibility for rich results.

- use only relevant schemas (Article/Product/FAQ where it fits)
- validate errors and warnings
- ensure unique title + meta description on important pages
- avoid mass duplicates caused by templates

## Step 8 - International SEO (only if relevant)

If you target multiple languages/countries:

- hreflang is correct and reciprocal
- canonicals are correct per locale
- clear site structure per language/country (optional: separate sitemaps)

## Simple priority model

- P0: indexation blockers, 5xx, large-scale canonical/noindex mistakes
- P1: redirect chains, duplicates at scale, internal link issues, CWV issues on templates, rendering problems
- P2: structured data improvements, minor meta issues, nice-to-haves

## Quick audit checklist

- Indexing: robots/noindex/sitemap/canonical
- Errors: 404/5xx/redirect chains
- Crawl efficiency: parameters and duplicates
- Structure: click depth, orphan pages, breadcrumbs
- Performance: mobile speed and heavy scripts
- Rendering: JS/content visible for Google
- Measurement: GSC + GA4 + conversions

## How often should you run it?

- Small site: every 6-12 months, and after big releases/redesigns
- Bigger site: quarterly light checks + yearly full audit

## Conclusion

Technical SEO is the foundation. Fix P0 blockers first, then structure and performance, then the details.
`.trim(),
    },
    nl: {
      title: 'Technische SEO-analyse: compleet stappenplan + checklist (met prioriteit)',
      topic: 'SEO',
      metaTitle: 'Technische SEO-analyse checklist | Stappenplan met prioriteit',
      metaDescription: 'Voer een technische SEO-analyse uit met prioriteit: indexatie, redirects, crawl efficiency, interne links, Core Web Vitals, rendering/JS en structured data.',
      content: `
Een technische SEO-analyse is de health check waarmee je bepaalt of Google je site goed kan crawlen, renderen en indexeren, en of bezoekers een snelle, stabiele ervaring krijgen.

Het belangrijkste: de output hoort een prioriteitenlijst te zijn, niet een lijst met 200 warnings.

## Wat levert een goede audit op?

Per issue wil je dit terugzien:

- Voorbeeld URLs (bewijs)
- Prioriteit (P0/P1/P2)
- Impact (traffic, conversie, risico)
- Owner (SEO, dev, content)
- Fix aanpak (wat pas je aan en waar)
- Meting (hoe check je dat het is opgelost?)

## Stap 0 - Verzamel data (30-60 min)

Minimaal:

- Google Search Console: Indexing, Sitemaps, Core Web Vitals, Enhancements, Manual actions, Security issues
- Een crawler: Ahrefs Site Audit of vergelijkbaar
- GA4: top landing pages + conversies (zodat je niet per ongeluk je omzet sloopt)

Optioneel bij grotere sites: server logs (bot gedrag en crawl budget).

## Stap 1 - Indexatie en canonical setup (P0)

Als Google niet kan indexeren, heeft de rest weinig zin.

Checklist:

- robots.txt blokkeert geen belangrijke secties
- geen onbedoelde noindex (meta robots of x-robots-tag)
- sitemap.xml bestaat, is up-to-date en is ingediend in Search Console
- canonicals kloppen (vaak self-referencing) en wijzen niet naar 404
- HTTP->HTTPS is consistent en geen mixed content
- www/non-www en trailing slash zijn consistent

## Stap 2 - Status codes en redirects (P0/P1)

Dit gaat om bereikbaarheid en het behouden van link equity.

- 5xx: direct indexatie risico, fix snel
- 404/410: fix of redirect (zeker met interne links of backlinks)
- redirect chains/loops: maak 1 schone redirect
- 302 vs 301: 301 voor permanent
- soft 404: pagina is 200 maar gedraagt zich als "not found"

Start met paginas die traffic of conversies hebben.

## Stap 3 - Crawl efficiency en duplicates (P1)

Grote sites lekken crawl budget en relevance door:

- parameter URLs (filters/sortering) met duizenden varianten
- duplicate content door tags, paginering, templates of sessie IDs
- slechte canonical strategie tussen varianten
- interne links die naar non-canonicals sturen

Doel: minder ruis, meer focus op paginas die ertoe doen.

## Stap 4 - Architectuur en interne links (P1)

Hier zit vaak de snelste winst.

- belangrijke paginas binnen 2-3 klikken
- geen orphan pages (paginas zonder interne links)
- breadcrumbs voor structuur en UX
- beschrijvende anchors (niet "klik hier")
- topic clusters: 1 hub pagina + supporting paginas, met links beide kanten op

## Stap 5 - Performance en Core Web Vitals (P1/P2)

Snelheid is vooral UX, maar het helpt ook crawl en conversie.

Waar ik meestal winst zie:

- afbeeldingen: juiste formaten, compressie, lazy loading
- JavaScript: minder third-party scripts, minder blocking werk
- CSS: unused CSS weg, critical CSS optimaliseren
- caching: browser en server caching waar mogelijk

Test mobiel en valideer op template niveau (niet 1 losse pagina).

## Stap 6 - Rendering en JavaScript SEO (P1)

Een site kan er goed uitzien voor mensen en toch zwak zijn voor Google.

Check:

- is belangrijke content zichtbaar zonder JavaScript?
- kan Google renderen (URL Inspection in Search Console)?
- zijn interne links vindbaar in de gerenderde HTML?
- rendert structured data correct?

Als rendering faalt, is content in de praktijk onzichtbaar voor SEO.

## Stap 7 - Structured data en snippet kwaliteit (P2)

Structured data is geen ranking truc. Het helpt begrip en rich results.

- gebruik alleen relevante schemas (Article/Product/FAQ waar het past)
- valideer errors en warnings
- unieke title + meta description op belangrijke paginas
- voorkom massale duplicates door templates

## Stap 8 - Internationale SEO (alleen als relevant)

Als je meerdere talen/landen target:

- hreflang klopt en is reciprocal
- canonicals kloppen per locale
- duidelijke structuur per taal/land (optioneel: aparte sitemaps)

## Prioriteiten model (simpel)

- P0: indexatie blockers, 5xx, grootschalige canonical/noindex fouten
- P1: redirect chains, duplicates op schaal, interne link issues, CWV issues op templates, rendering problemen
- P2: structured data optimalisaties, kleinere meta issues, nice-to-haves

## Quick checklist

- Indexatie: robots/noindex/sitemap/canonical
- Errors: 404/5xx/redirect chains
- Crawl efficiency: parameters en duplicates
- Structuur: click depth, orphan pages, breadcrumbs
- Performance: mobile speed en zware scripts
- Rendering: JS/content zichtbaar voor Google
- Meten: GSC + GA4 + conversies

## Hoe vaak doe je dit?

- Kleine site: elke 6-12 maanden, en na grote releases/redesigns
- Grotere site: elk kwartaal light checks + jaarlijks full audit

## Conclusie

Technische SEO is de basis. Fix eerst P0 blockers, daarna structuur en performance, en pas daarna de details.
`.trim(),
    },
    de: {
      title: 'Technische SEO Analyse: kompletter Audit + Checkliste (mit Prioritaet)',
      topic: 'SEO',
      metaTitle: 'Technische SEO Analyse Checkliste | Audit mit Prioritaet',
      metaDescription: 'Priorisierte technische SEO Analyse: Indexierung, Redirects, Crawl Efficiency, interne Links, Core Web Vitals, Rendering/JS und Structured Data.',
      content: `
Eine technische SEO Analyse ist der Health Check, mit dem du pruefst, ob Google deine Website sauber crawlen, rendern und indexieren kann und ob Nutzer eine schnelle, stabile Experience bekommen.

Wichtig: das Ergebnis sollte ein priorisiertes Backlog sein, nicht 200 Warnungen ohne Kontext.

## Was eine gute Analyse liefert

- Beispiel URLs (Beweis)
- Prioritaet (P0/P1/P2)
- Impact (Traffic, Conversion, Risiko)
- Owner (SEO, Dev, Content)
- Fix Ansatz und Messung

## Schritt 0 - Daten sammeln (30-60 min)

- Google Search Console: Indexing, Sitemaps, Core Web Vitals, Enhancements, Manual actions, Security issues
- Crawler: Ahrefs Site Audit oder aehnlich
- GA4: wichtigste Landing Pages + Conversions

Optional: Server Logs fuer Bot Verhalten und Crawl Budget.

## Schritt 1 - Indexierung und Canonicals (P0)

- robots.txt blockiert nichts Wichtiges
- kein noindex aus Versehen (meta robots / x-robots-tag)
- sitemap.xml aktuell und in Search Console eingereicht
- canonicals korrekt (oft self-referencing), keine 404 Targets
- HTTPS konsistent, kein mixed content
- www/non-www und trailing slash konsistent

## Schritt 2 - Status Codes und Redirects (P0/P1)

- 5xx sofort fixen (Indexierungsrisiko)
- 404/410 fix oder redirect (vor allem mit internen Links/Backlinks)
- redirect chains/loops auf eine saubere 301 reduzieren
- 302 nur wenn wirklich temporaer
- soft 404 erkennen (200, aber "not found" Inhalt)

## Schritt 3 - Crawl Efficiency und Duplicates (P1)

- Parameter URLs (Filter/Sort) begrenzen
- Duplicate Content durch Tags/Pagination/Templates reduzieren
- Canonical Strategie fuer Varianten pruefen
- Interne Links auf canonicals ausrichten

## Schritt 4 - Architektur und interne Links (P1)

- wichtige Seiten in 2-3 Klicks
- keine orphan pages
- breadcrumbs fuer Struktur
- klare Anchor Texte
- Topic Cluster: Hub + Supporting Pages, beidseitig verlinkt

## Schritt 5 - Performance und Core Web Vitals (P1/P2)

- Bilder: Groesse, Kompression, lazy loading
- JavaScript: third-party Skripte reduzieren, blocking Work minimieren
- CSS: unused CSS entfernen, critical CSS optimieren
- caching wo moeglich

## Schritt 6 - Rendering und JavaScript SEO (P1)

- wichtige Inhalte ohne JS sichtbar?
- URL Inspection (GSC) pruefen: Rendering ok?
- interne Links im gerenderten HTML vorhanden?
- structured data wird gerendert?

## Schritt 7 - Structured Data und Snippet Qualitaet (P2)

- nur passende Schemas nutzen (Article/Product/FAQ)
- Errors/Warnungen validieren
- unique Title + Meta pro wichtige Seite
- Template Duplicates vermeiden

## Schritt 8 - International SEO (nur wenn relevant)

- hreflang korrekt und reciprocal
- canonicals pro Locale korrekt
- klare Struktur pro Sprache/Land

## Prioritaetsmodell (simpel)

- P0: Indexierungsblocker, 5xx, grosse canonical/noindex Fehler
- P1: chains, duplicates at scale, interne Links, CWV/Rendering auf Templates
- P2: structured data Feinschliff, kleinere meta Themen

## Quick Checkliste

- Indexing: robots/noindex/sitemap/canonical
- Errors: 404/5xx/redirect chains
- Crawl: Parameter + Duplicates
- Struktur: click depth, orphan pages, breadcrumbs
- Speed: mobile performance, heavy scripts
- Rendering: JS/Content sichtbar
- Messung: GSC + GA4 + Conversions

## Wie oft?

- Kleine Sites: alle 6-12 Monate + nach Releases/Redesign
- Groessere Sites: quartalsweise light checks + jaehrlich full audit

## Fazit

Technische SEO ist die Basis. Fix P0 zuerst, dann Struktur und Performance, dann Details.
`.trim(),
    },
    sv: {
      title: 'Teknisk SEO-analys: komplett audit + checklista (med prioritet)',
      topic: 'SEO',
      metaTitle: 'Teknisk SEO-analys checklista | Audit med prioritet',
      metaDescription: 'Prioriterad teknisk SEO-analys: indexering, redirects, crawl efficiency, interna lankar, Core Web Vitals, rendering/JS och structured data.',
      content: `
En teknisk SEO-analys ar en health check som visar om Google kan crawla, rendera och indexera din sajt pa ett stabilt satt och om besokare far en snabb, bra upplevelse.

Det viktiga: resultatet ska bli en prioriterad backlog, inte 200 varningar utan action.

## Vad en bra audit levererar

- Exempel URLs (bevis)
- Prioritet (P0/P1/P2)
- Effekt (trafik, konvertering, risk)
- Owner (SEO, dev, content)
- Fix + hur du mater resultat

## Steg 0 - Samla data (30-60 min)

- Google Search Console: Indexing, Sitemaps, Core Web Vitals, Enhancements, Manual actions, Security issues
- Crawler: Ahrefs Site Audit eller liknande
- GA4: viktigaste landing pages + konverteringar

Optional: server logs for bot beteende och crawl budget.

## Steg 1 - Indexering och canonicals (P0)

- robots.txt blockerar inget viktigt
- inget noindex av misstag (meta robots / x-robots-tag)
- sitemap.xml ar aktuell och inskickad
- canonicals korrekta (ofta self-referencing), inte mot 404
- HTTPS konsekvent, ingen mixed content
- www/non-www och trailing slash konsekvent

## Steg 2 - Status codes och redirects (P0/P1)

- 5xx fix direkt (indexeringsrisk)
- 404/410 fixa eller redirect (sarskilt med interna lankar/backlinks)
- redirect chains/loops: gor en ren redirect
- 302 bara om det ar temporart
- soft 404: 200 men "not found" innehall

## Steg 3 - Crawl efficiency och duplicates (P1)

- parameter URLs (filter/sort) som skapar tusentals varianter
- duplicates via tags/paginering/templates
- canonical strategi for varianter
- interna lankar pekar mot canonical URLs

## Steg 4 - Struktur och interna lankar (P1)

- viktiga sidor inom 2-3 klick
- inga orphan pages
- breadcrumbs for struktur och UX
- tydliga anchors
- topic clusters: 1 hub + supporting pages, lankade i bada riktningar

## Steg 5 - Performance och Core Web Vitals (P1/P2)

- bilder: storlek, komprimering, lazy loading
- JavaScript: mindre third-party, mindre blocking
- CSS: ta bort unused CSS, optimera critical CSS
- caching dar det gar

## Steg 6 - Rendering och JavaScript SEO (P1)

- syns viktig content utan JS?
- URL Inspection i GSC: rendering ok?
- interna lankar synliga i renderad HTML?
- structured data renderas?

## Steg 7 - Structured data och snippet kvalitet (P2)

- anvand bara relevanta schemas (Article/Product/FAQ)
- validera errors och warnings
- unik title + meta description pa viktiga sidor
- undvik template duplicates

## Steg 8 - International SEO (om relevant)

- hreflang korrekt och reciprocal
- canonicals per locale korrekta
- tydlig struktur per sprak/land

## Prioritet (enkelt)

- P0: indexeringsblocker, 5xx, stora canonical/noindex fel
- P1: chains, duplicates i skala, interna lankar, CWV/rendering pa templates
- P2: structured data finjustering, mindre meta issues

## Snabb checklista

- Indexing: robots/noindex/sitemap/canonical
- Errors: 404/5xx/redirect chains
- Crawl: parameters + duplicates
- Struktur: click depth, orphan pages, breadcrumbs
- Speed: mobile performance, tunga scripts
- Rendering: JS/content synlig
- Matning: GSC + GA4 + konverteringar

## Hur ofta?

- Liten sajt: var 6-12 manad + efter releaser/redesign
- Stor sajt: kvartalsvis light checks + arlig full audit

## Slutsats

Teknisk SEO ar grunden. Fixa P0 forst, sen struktur och hastighet, sen detaljer.
`.trim(),
    },
    da: {
      title: 'Teknisk SEO-analyse: komplet audit + tjekliste (med prioritet)',
      topic: 'SEO',
      metaTitle: 'Teknisk SEO-analyse tjekliste | Audit med prioritet',
      metaDescription: 'Prioriteret teknisk SEO-analyse: indeksering, redirects, crawl efficiency, interne links, Core Web Vitals, rendering/JS og structured data.',
      content: `
En teknisk SEO-analyse er et health check der viser om Google kan crawle, rendere og indeksere dit site stabilt, og om brugere faar en hurtig, god oplevelse.

Det vigtige: resultatet skal vaere et prioriteret backlog, ikke 200 advarsler uden action.

## Hvad en god audit leverer

- Eksempel URLs (bevis)
- Prioritet (P0/P1/P2)
- Effekt (trafik, konvertering, risiko)
- Owner (SEO, dev, content)
- Fix + hvordan du maaler resultat

## Trin 0 - Saml data (30-60 min)

- Google Search Console: Indexing, Sitemaps, Core Web Vitals, Enhancements, Manual actions, Security issues
- Crawler: Ahrefs Site Audit eller lignende
- GA4: vigtigste landing pages + konverteringer

Optional: server logs for bot adfaerd og crawl budget.

## Trin 1 - Indeksering og canonicals (P0)

- robots.txt blokerer intet vigtigt
- ingen noindex ved en fejl (meta robots / x-robots-tag)
- sitemap.xml er aktuel og indsendt
- canonicals korrekte (ofte self-referencing), ikke mod 404
- HTTPS konsekvent, ingen mixed content
- www/non-www og trailing slash konsekvent

## Trin 2 - Status codes og redirects (P0/P1)

- 5xx fixes straks (indekseringsrisiko)
- 404/410 fix eller redirect (isaer med interne links/backlinks)
- redirect chains/loops: lav 1 ren redirect
- 302 kun hvis det er midlertidigt
- soft 404: 200 men "not found" indhold

## Trin 3 - Crawl efficiency og duplicates (P1)

- parameter URLs (filter/sort) der skaber mange varianter
- duplicates via tags/paginering/templates
- canonical strategi for varianter
- interne links peger mod canonical URLs

## Trin 4 - Struktur og interne links (P1)

- vigtige sider inden for 2-3 klik
- ingen orphan pages
- breadcrumbs for struktur og UX
- tydelige anchors
- topic clusters: 1 hub + supporting pages, linket begge veje

## Trin 5 - Performance og Core Web Vitals (P1/P2)

- billeder: stoerrelse, komprimering, lazy loading
- JavaScript: mindre third-party, mindre blocking
- CSS: fjern unused CSS, optimer critical CSS
- caching hvor det giver mening

## Trin 6 - Rendering og JavaScript SEO (P1)

- er vigtig content synlig uden JS?
- URL Inspection i GSC: rendering ok?
- interne links synlige i renderet HTML?
- structured data renderes?

## Trin 7 - Structured data og snippet kvalitet (P2)

- brug kun relevante schemas (Article/Product/FAQ)
- valider errors og warnings
- unik title + meta description paa vigtige sider
- undgaa template duplicates

## Trin 8 - International SEO (hvis relevant)

- hreflang korrekt og reciprocal
- canonicals pr locale korrekte
- tydelig struktur pr sprog/land

## Prioritet (simpelt)

- P0: indekseringsblokeringer, 5xx, store canonical/noindex fejl
- P1: chains, duplicates i skala, interne links, CWV/rendering paa templates
- P2: structured data finpudsning, mindre meta issues

## Hurtig tjekliste

- Indeksering: robots/noindex/sitemap/canonical
- Fejl: 404/5xx/redirect chains
- Crawl: parameters + duplicates
- Struktur: click depth, orphan pages, breadcrumbs
- Speed: mobile performance, tunge scripts
- Rendering: JS/content synlig
- Maaling: GSC + GA4 + konverteringer

## Hvor ofte?

- Lille site: hver 6-12 maaned + efter releases/redesign
- Stort site: kvartalsvis light checks + aarlig full audit

## Konklusion

Teknisk SEO er fundamentet. Fix P0 foerst, saa struktur og hastighed, saa detaljer.
`.trim(),
    },
    fr: {
      title: 'Audit SEO technique: guide complet + checklist (avec priorite)',
      topic: 'SEO',
      metaTitle: 'Audit SEO technique | Checklist priorisee',
      metaDescription: 'Audit SEO technique priorise: indexation, redirects, crawl efficiency, liens internes, Core Web Vitals, rendering/JS et structured data.',
      content: `
Un audit SEO technique est le health check qui montre si Google peut crawler, rendre (render) et indexer ton site de facon fiable, et si les utilisateurs ont une experience rapide et stable.

L'objectif: sortir avec un backlog priorise, pas une liste de 200 alertes sans contexte.

## Ce qu'un bon audit doit livrer

- Exemples d'URLs (preuve)
- Priorite (P0/P1/P2)
- Impact (trafic, conversion, risque)
- Owner (SEO, dev, content)
- Fix + comment mesurer le resultat

## Etape 0 - Collecter les donnees (30-60 min)

- Google Search Console: Indexing, Sitemaps, Core Web Vitals, Enhancements, Manual actions, Security issues
- Crawler: Ahrefs Site Audit ou equivalent
- GA4: top landing pages + conversions

Optionnel: logs serveur pour comprendre les bots et le crawl budget.

## Etape 1 - Indexation et canonicals (P0)

- robots.txt ne bloque rien d'important
- pas de noindex par erreur (meta robots / x-robots-tag)
- sitemap.xml a jour et soumise
- canonicals correctes (souvent self-referencing), pas vers 404
- HTTPS coherent, pas de mixed content
- www/non-www et trailing slash coherents

## Etape 2 - Status codes et redirects (P0/P1)

- 5xx: corriger vite (risque d'indexation)
- 404/410: corriger ou redirect (surtout si interne/backlinks)
- redirect chains/loops: reduire a un seul redirect propre
- 302 seulement si temporaire
- soft 404: 200 mais contenu "not found"

## Etape 3 - Crawl efficiency et duplicates (P1)

- parameter URLs (filtres/sort) qui creent des variantes
- duplicates via tags/pagination/templates
- strategie de canonical pour les variantes
- liens internes qui pointent sur les URLs canonicals

## Etape 4 - Architecture et liens internes (P1)

- pages importantes en 2-3 clics
- pas de pages orphelines (sans liens internes)
- breadcrumbs pour structure et UX
- ancres descriptives
- topic clusters: 1 page hub + pages support, liees dans les deux sens

## Etape 5 - Performance et Core Web Vitals (P1/P2)

- images: tailles, compression, lazy loading
- JavaScript: moins de third-party, moins de blocage
- CSS: enlever unused CSS, optimiser critical CSS
- caching quand possible

## Etape 6 - Rendering et JavaScript SEO (P1)

- contenu critique visible sans JS?
- URL Inspection (GSC): rendering ok?
- liens internes visibles dans le HTML rendu?
- structured data rendue correctement?

## Etape 7 - Structured data et qualite du snippet (P2)

- schemas pertinents seulement (Article/Product/FAQ)
- valider errors et warnings
- title + meta description uniques sur pages importantes
- eviter les duplicates via templates

## Etape 8 - International SEO (si pertinent)

- hreflang correct et reciprocal
- canonicals correctes par locale
- structure claire par langue/pays

## Modele de priorite (simple)

- P0: blocages d'indexation, 5xx, grosses erreurs canonical/noindex
- P1: chains, duplicates a grande echelle, liens internes, CWV/rendering sur templates
- P2: structured data finitions, petits sujets meta

## Checklist rapide

- Indexation: robots/noindex/sitemap/canonical
- Erreurs: 404/5xx/redirect chains
- Crawl: parameters + duplicates
- Structure: click depth, pages orphelines, breadcrumbs
- Speed: mobile performance, scripts lourds
- Rendering: JS/content visible
- Mesure: GSC + GA4 + conversions

## A quelle frequence?

- Petit site: tous les 6-12 mois + apres releases/redesign
- Grand site: checks trimestriels + audit complet annuel

## Conclusion

Le SEO technique est la base. Corrige P0 d'abord, puis structure et performance, puis les details.
`.trim(),
    },
    it: {
      title: 'Audit SEO tecnico: guida completa + checklist (con priorita)',
      topic: 'SEO',
      metaTitle: 'Audit SEO tecnico | Checklist con priorita',
      metaDescription: 'Audit SEO tecnico prioritizzato: indicizzazione, redirect, crawl efficiency, link interni, Core Web Vitals, rendering/JS e structured data.',
      content: `
Un audit SEO tecnico e il health check che mostra se Google puo crawlar(e), renderizzare e indicizzare il sito in modo affidabile, e se gli utenti hanno un'esperienza veloce e stabile.

L'obiettivo: uscire con un backlog prioritizzato, non con 200 warning senza contesto.

## Cosa deve produrre un buon audit

- URL di esempio (prova)
- Priorita (P0/P1/P2)
- Impatto (traffico, conversioni, rischio)
- Owner (SEO, dev, content)
- Fix + come misurare il risultato

## Step 0 - Raccogli i dati (30-60 min)

- Google Search Console: Indexing, Sitemaps, Core Web Vitals, Enhancements, Manual actions, Security issues
- Crawler: Ahrefs Site Audit o equivalente
- GA4: top landing pages + conversioni

Opzionale: server logs per capire bot e crawl budget.

## Step 1 - Indicizzazione e canonicals (P0)

- robots.txt non blocca parti importanti
- niente noindex per errore (meta robots / x-robots-tag)
- sitemap.xml aggiornata e inviata
- canonicals corrette (spesso self-referencing), non verso 404
- HTTPS coerente, niente mixed content
- www/non-www e trailing slash coerenti

## Step 2 - Status codes e redirect (P0/P1)

- 5xx: correggi subito (rischio indicizzazione)
- 404/410: correggi o redirect (soprattutto con link interni/backlink)
- redirect chains/loops: riduci a un solo redirect pulito
- 302 solo se temporaneo
- soft 404: 200 ma contenuto "not found"

## Step 3 - Crawl efficiency e duplicati (P1)

- parameter URLs (filtri/ordinamenti) che creano molte varianti
- duplicati via tag/paginazione/templates
- strategia canonical per le varianti
- link interni puntano alle URL canoniche

## Step 4 - Architettura e link interni (P1)

- pagine importanti entro 2-3 click
- niente orphan pages (pagine senza link interni)
- breadcrumbs per struttura e UX
- anchor text descrittive
- topic clusters: 1 hub + pagine di supporto, linkate in entrambe le direzioni

## Step 5 - Performance e Core Web Vitals (P1/P2)

- immagini: dimensioni, compressione, lazy loading
- JavaScript: meno third-party, meno blocchi
- CSS: rimuovi unused CSS, ottimizza critical CSS
- caching dove possibile

## Step 6 - Rendering e JavaScript SEO (P1)

- contenuto critico visibile senza JS?
- URL Inspection (GSC): rendering ok?
- link interni visibili nell'HTML renderizzato?
- structured data renderizzata correttamente?

## Step 7 - Structured data e qualita dello snippet (P2)

- usa solo schema pertinenti (Article/Product/FAQ)
- valida errori e warning
- title + meta description uniche sulle pagine importanti
- evita duplicati creati dai template

## Step 8 - International SEO (se rilevante)

- hreflang corretto e reciprocal
- canonicals corrette per locale
- struttura chiara per lingua/paese

## Modello di priorita (semplice)

- P0: blocchi di indicizzazione, 5xx, grossi errori canonical/noindex
- P1: chains, duplicati su larga scala, link interni, CWV/rendering sui template
- P2: finiture structured data, piccoli temi meta

## Checklist rapida

- Indicizzazione: robots/noindex/sitemap/canonical
- Errori: 404/5xx/redirect chains
- Crawl: parameters + duplicati
- Struttura: click depth, orphan pages, breadcrumbs
- Speed: mobile performance, script pesanti
- Rendering: JS/content visibile
- Misurazione: GSC + GA4 + conversioni

## Quanto spesso?

- Sito piccolo: ogni 6-12 mesi + dopo release/redesign
- Sito grande: check trimestrali + audit completo annuale

## Conclusione

La SEO tecnica e la base. Correggi prima P0, poi struttura e performance, poi i dettagli.
`.trim(),
    },
  },
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
