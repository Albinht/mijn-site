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
  title: 'Technische SEO-analyse: simpel stappenplan + checklist',
  content: `
## Wat is een technische SEO-analyse?

Een technische SEO-analyse is een check van de techniek van je website.

Het doel is simpel:

- Google moet je paginas kunnen crawlen en indexeren.
- Bezoekers moeten een snelle, fijne website krijgen.

## Wat check je? (3 blokken)

Je kunt alles groeperen in drie delen:

- Website infrastructuur (HTTPS, sitemap, robots.txt)
- Crawling en indexering (interne links, duplicate content, 404 paginas)
- On-page techniek (snelheid, structured data, meta tags)

## Technische SEO-analyse: simpel stappenplan

### Stap 1 - Mag Google je paginas indexeren?

Check dit als eerste, want als dit fout staat, helpt de rest bijna niet.

- Staat je site op HTTPS en zonder "mixed content"?
- Blokkeert robots.txt geen belangrijke paginas?
- Staan er geen onbedoelde noindex tags op belangrijke paginas?
- Is er een sitemap.xml en staat die in Google Search Console?
- Kloppen je canonical tags (meestal: self-referencing)?

### Stap 2 - Vind fouten (404/5xx) en slechte redirects

- Check Google Search Console op crawl errors.
- Los 404 paginas op (redirect of herstel de pagina).
- Vermijd redirect chains (A -> B -> C). Maak er 1 redirect van.
- Gebruik 301 voor permanente redirects.

### Stap 3 - Check interne links en site structuur

- Kun je belangrijke paginas binnen 2-3 klikken bereiken?
- Zijn er geen "wees paginas" (orphan pages) zonder interne links?
- Gebruik duidelijke ankerteksten.
- Gebruik breadcrumbs als je site groter is.

### Stap 4 - Snelheid en mobiel

- Test met PageSpeed Insights (mobile is meestal de bottleneck).
- Comprimeer afbeeldingen en gebruik moderne formaten waar kan.
- Laad pas zware onderdelen als ze in beeld komen (lazy loading).
- Minimaliseer onnodige scripts.

### Stap 5 - On-page basics (meta + structured data)

- Unieke title tag en meta description per pagina.
- Geen dubbele titles op belangrijke paginas.
- Structured data waar het logisch is (Article/FAQ/Product).

### Stap 6 - Meten en monitoren

- Is GA4 actief?
- Is Google Search Console gekoppeld?
- Check elke maand even op nieuwe errors.

## Mini checklist (snel scannen)

### Indexering

- HTTPS werkt goed
- robots.txt blokkeert niets belangrijks
- sitemap.xml bestaat en staat in Search Console
- geen onbedoelde noindex
- canonicals kloppen

### Fouten en redirects

- 404/5xx errors oplossen
- geen redirect chains
- 301 voor permanente redirects

### Structuur

- belangrijke paginas binnen 2-3 klikken
- geen orphan pages
- interne links met duidelijke ankertekst

### Performance

- afbeeldingen verkleinen en comprimeren
- scripts opschonen
- mobile performance verbeteren

### Meten

- GA4 gecheckt
- Search Console gecheckt

## Hoe vaak doe je dit?

Doe een technische SEO-analyse elke 3 tot 12 maanden. En altijd na grote releases of een redesign.

## Conclusie

Technische SEO is de basis. Als Google je site niet goed kan lezen (of als je site traag is), laat je rankings en omzet liggen.

Pak eerst indexering en fouten aan. Daarna snelheid en structuur. Dan pas de details.
`.trim(),
  translations: {
    en: {
      title: 'Technical SEO audit: simple steps + checklist',
      topic: 'SEO',
      metaTitle: 'Technical SEO audit | Simple steps + checklist',
      metaDescription: 'A simple technical SEO audit you can run in a few hours: indexing checks, errors, internal links, speed, structured data, and a quick checklist.',
      content: `
## What is a technical SEO audit?

A technical SEO audit is a check of your website's technical setup.

The goal is simple:

- Google can crawl and index your pages.
- Visitors get a fast, smooth experience.

## What do you check? (3 blocks)

You can group the work into three parts:

- Site infrastructure (HTTPS, sitemap, robots.txt)
- Crawling and indexing (internal links, duplicate content, 404 pages)
- On-page tech (speed, structured data, meta tags)

## Technical SEO audit: simple step-by-step

### Step 1 - Can Google index your pages?

Start here. If this is wrong, the rest will not help much.

- Is your site on HTTPS, without mixed content?
- Does robots.txt block important pages?
- Are there accidental noindex tags on key pages?
- Do you have a sitemap.xml and is it submitted in Search Console?
- Are canonical tags correct (usually self-referencing)?

### Step 2 - Find errors (404/5xx) and bad redirects

- Check Google Search Console for crawl errors.
- Fix 404 pages (redirect or restore the page).
- Avoid redirect chains (A -> B -> C). Make it one redirect.
- Use 301 for permanent redirects.

### Step 3 - Check internal links and site structure

- Can you reach important pages within 2-3 clicks?
- No orphan pages (pages without internal links).
- Use clear anchor text.
- Use breadcrumbs if the site is large.

### Step 4 - Speed and mobile

- Test with PageSpeed Insights (mobile is often the bottleneck).
- Compress images and use modern formats where possible.
- Load heavy parts only when needed (lazy loading).
- Remove unnecessary scripts.

### Step 5 - On-page basics (meta + structured data)

- Unique title tag and meta description per page.
- No duplicate titles on key pages.
- Add structured data where it makes sense (Article/FAQ/Product).

### Step 6 - Measure and monitor

- Is GA4 active?
- Is Search Console connected?
- Check monthly for new errors.

## Mini checklist (quick scan)

### Indexing

- HTTPS works
- robots.txt does not block important pages
- sitemap.xml exists and is in Search Console
- no accidental noindex
- canonicals are correct

### Errors and redirects

- fix 404/5xx errors
- no redirect chains
- 301 for permanent redirects

### Structure

- important pages within 2-3 clicks
- no orphan pages
- clear internal link anchors

### Performance

- compress images
- remove unused scripts
- improve mobile performance

### Measurement

- GA4 checked
- Search Console checked

## How often should you do this?

Run a technical SEO audit every 3 to 12 months. And always after big releases or a redesign.

## Conclusion

Technical SEO is the foundation. Fix indexing and errors first. Then speed and structure. Then the details.
`.trim(),
    },
    nl: {
      title: 'Technische SEO-analyse: simpel stappenplan + checklist',
      topic: 'SEO',
      metaTitle: 'Technische SEO-analyse | Simpel stappenplan + checklist',
      metaDescription: 'Een simpele technische SEO-analyse in duidelijke stappen: indexering, fouten, interne links, snelheid, structured data en een mini checklist.',
      content: `
## Wat is een technische SEO-analyse?

Een technische SEO-analyse is een check van de techniek van je website.

Het doel is simpel:

- Google moet je paginas kunnen crawlen en indexeren.
- Bezoekers moeten een snelle, fijne website krijgen.

## Wat check je? (3 blokken)

Je kunt alles groeperen in drie delen:

- Website infrastructuur (HTTPS, sitemap, robots.txt)
- Crawling en indexering (interne links, duplicate content, 404 paginas)
- On-page techniek (snelheid, structured data, meta tags)

## Technische SEO-analyse: simpel stappenplan

### Stap 1 - Mag Google je paginas indexeren?

Check dit als eerste, want als dit fout staat, helpt de rest bijna niet.

- Staat je site op HTTPS en zonder "mixed content"?
- Blokkeert robots.txt geen belangrijke paginas?
- Staan er geen onbedoelde noindex tags op belangrijke paginas?
- Is er een sitemap.xml en staat die in Google Search Console?
- Kloppen je canonical tags (meestal: self-referencing)?

### Stap 2 - Vind fouten (404/5xx) en slechte redirects

- Check Google Search Console op crawl errors.
- Los 404 paginas op (redirect of herstel de pagina).
- Vermijd redirect chains (A -> B -> C). Maak er 1 redirect van.
- Gebruik 301 voor permanente redirects.

### Stap 3 - Check interne links en site structuur

- Kun je belangrijke paginas binnen 2-3 klikken bereiken?
- Zijn er geen "wees paginas" (orphan pages) zonder interne links?
- Gebruik duidelijke ankerteksten.
- Gebruik breadcrumbs als je site groter is.

### Stap 4 - Snelheid en mobiel

- Test met PageSpeed Insights (mobile is meestal de bottleneck).
- Comprimeer afbeeldingen en gebruik moderne formaten waar kan.
- Laad pas zware onderdelen als ze in beeld komen (lazy loading).
- Minimaliseer onnodige scripts.

### Stap 5 - On-page basics (meta + structured data)

- Unieke title tag en meta description per pagina.
- Geen dubbele titles op belangrijke paginas.
- Structured data waar het logisch is (Article/FAQ/Product).

### Stap 6 - Meten en monitoren

- Is GA4 actief?
- Is Google Search Console gekoppeld?
- Check elke maand even op nieuwe errors.

## Mini checklist (snel scannen)

### Indexering

- HTTPS werkt goed
- robots.txt blokkeert niets belangrijks
- sitemap.xml bestaat en staat in Search Console
- geen onbedoelde noindex
- canonicals kloppen

### Fouten en redirects

- 404/5xx errors oplossen
- geen redirect chains
- 301 voor permanente redirects

### Structuur

- belangrijke paginas binnen 2-3 klikken
- geen orphan pages
- interne links met duidelijke ankertekst

### Performance

- afbeeldingen verkleinen en comprimeren
- scripts opschonen
- mobile performance verbeteren

### Meten

- GA4 gecheckt
- Search Console gecheckt

## Hoe vaak doe je dit?

Doe een technische SEO-analyse elke 3 tot 12 maanden. En altijd na grote releases of een redesign.

## Conclusie

Technische SEO is de basis. Pak eerst indexering en fouten aan. Daarna snelheid en structuur. Dan pas de details.
`.trim(),
    },
    de: {
      title: 'Technische SEO Analyse: einfache Schritte + Checkliste',
      topic: 'SEO',
      metaTitle: 'Technische SEO Analyse | Schritte + Checkliste',
      metaDescription: 'Einfache technische SEO Analyse: Indexierung, Fehler, interne Links, Speed, Structured Data und eine kurze Checkliste.',
      content: `
## Was ist eine technische SEO Analyse?

Eine technische SEO Analyse ist ein Check der technischen Basis deiner Website.

Das Ziel ist simpel:

- Google kann deine Seiten crawlen und indexieren.
- Nutzer bekommen eine schnelle, saubere Experience.

## Was pruefst du? (3 Bloecke)

Du kannst alles in drei Teile gruppieren:

- Infrastruktur (HTTPS, sitemap, robots.txt)
- Crawling und Indexierung (interne Links, duplicate content, 404 Seiten)
- On-page Technik (Speed, structured data, meta tags)

## Technische SEO Analyse: einfache Schritte

### Schritt 1 - Darf Google deine Seiten indexieren?

Starte hier. Wenn das falsch ist, bringt der Rest wenig.

- Laeuft die Seite auf HTTPS, ohne mixed content?
- Blockiert robots.txt wichtige Seiten?
- Gibt es aus Versehen noindex auf wichtigen Seiten?
- Gibt es eine sitemap.xml und ist sie in Search Console eingereicht?
- Sind Canonical Tags korrekt (meist self-referencing)?

### Schritt 2 - Fehler (404/5xx) und schlechte Redirects

- Checke Search Console auf Crawl Errors.
- Fixe 404 Seiten (redirect oder Seite wiederherstellen).
- Vermeide redirect chains (A -> B -> C). Mach einen Redirect.
- Nutze 301 fuer permanente Redirects.

### Schritt 3 - Interne Links und Struktur

- Wichtige Seiten in 2-3 Klicks erreichbar?
- Keine orphan pages (Seiten ohne interne Links).
- Klare Anchor Texte.
- Breadcrumbs, wenn die Seite groesser ist.

### Schritt 4 - Speed und Mobile

- Teste mit PageSpeed Insights (mobile ist oft der Engpass).
- Bilder komprimieren und moderne Formate nutzen.
- Heavy content nur laden wenn noetig (lazy loading).
- Unnoetige Skripte entfernen.

### Schritt 5 - On-page Basics (Meta + Structured Data)

- Unique Title und Meta Description pro Seite.
- Keine doppelten Titles auf wichtigen Seiten.
- Structured Data wo es passt (Article/FAQ/Product).

### Schritt 6 - Messen und monitoren

- GA4 aktiv?
- Search Console verbunden?
- Monatlich kurz auf neue Errors checken.

## Mini Checkliste

### Indexierung

- HTTPS ok
- robots.txt blockiert nichts Wichtiges
- sitemap.xml existiert und ist eingereicht
- kein versehentliches noindex
- canonicals korrekt

### Fehler und Redirects

- 404/5xx fixen
- keine redirect chains
- 301 fuer permanente Redirects

### Struktur

- wichtige Seiten in 2-3 Klicks
- keine orphan pages
- klare interne Links

### Performance

- Bilder komprimieren
- Skripte aufraeumen
- mobile Performance verbessern

### Tracking

- GA4 gecheckt
- Search Console gecheckt

## Wie oft?

Alle 3 bis 12 Monate. Und immer nach grossen Releases oder einem Redesign.

## Fazit

Technische SEO ist die Basis. Fix Indexierung und Fehler zuerst. Dann Speed und Struktur. Dann Details.
`.trim(),
    },
    sv: {
      title: 'Teknisk SEO-analys: enkla steg + checklista',
      topic: 'SEO',
      metaTitle: 'Teknisk SEO-analys | Steg + checklista',
      metaDescription: 'En enkel teknisk SEO-analys: indexering, fel, interna lankar, hastighet, structured data och en snabb checklista.',
      content: `
## Vad ar en teknisk SEO-analys?

En teknisk SEO-analys ar en snabb check av webbplatsens teknik.

Maalet ar enkelt:

- Google kan crawla och indexera dina sidor.
- Besokare far en snabb och bra upplevelse.

## Vad ska du kolla? (3 delar)

- Infrastruktur (HTTPS, sitemap, robots.txt)
- Crawling och indexering (interna lankar, duplicate content, 404 sidor)
- On-page tech (hastighet, structured data, meta tags)

## Teknisk SEO-analys: enkla steg

### Steg 1 - Kan Google indexera dina sidor?

Borja har. Om detta ar fel, hjalper resten mindre.

- HTTPS utan mixed content?
- Blockerar robots.txt viktiga sidor?
- Finns det noindex av misstag pa viktiga sidor?
- Finns sitemap.xml och ar den inskickad i Search Console?
- Ar canonical tags korrekta (oftast self-referencing)?

### Steg 2 - Hitta fel (404/5xx) och daliga redirects

- Kolla Search Console for crawl errors.
- Fixa 404 sidor (redirect eller aterstall sidan).
- Undvik redirect chains (A -> B -> C).
- Anvand 301 for permanenta redirects.

### Steg 3 - Interna lankar och struktur

- Viktiga sidor inom 2-3 klick?
- Inga orphan pages (sidor utan interna lankar).
- Tydlig anchor text.
- Breadcrumbs om sajten ar stor.

### Steg 4 - Hastighet och mobile

- Testa med PageSpeed Insights (mobile ar ofta flaskhals).
- Komprimera bilder och anvand moderna format.
- Lazy loading for tunga delar.
- Ta bort onodiga script.

### Steg 5 - On-page basics (meta + structured data)

- Unik title och meta description per sida.
- Inga dubbla titles pa viktiga sidor.
- Structured data dar det passar (Article/FAQ/Product).

### Steg 6 - Mata och folj upp

- GA4 aktiv?
- Search Console kopplad?
- Kolla manadsvis efter nya fel.

## Snabb checklista

### Indexering

- HTTPS ok
- robots.txt blockerar inget viktigt
- sitemap.xml finns och ar inskickad
- inget noindex av misstag
- canonicals ok

### Fel och redirects

- fixa 404/5xx
- inga redirect chains
- 301 for permanenta redirects

### Struktur

- viktiga sidor inom 2-3 klick
- inga orphan pages
- tydliga interna lankar

### Performance

- komprimera bilder
- stada script
- battra mobile performance

### Matning

- GA4 checkad
- Search Console checkad

## Hur ofta?

Var 3 till 12 manad. Och alltid efter stora releaser eller redesign.

## Slutsats

Teknisk SEO ar grunden. Fixa indexering och fel forst. Sen hastighet och struktur. Sen detaljer.
`.trim(),
    },
    da: {
      title: 'Teknisk SEO-analyse: enkle trin + tjekliste',
      topic: 'SEO',
      metaTitle: 'Teknisk SEO-analyse | Trin + tjekliste',
      metaDescription: 'En enkel teknisk SEO-analyse: indeksering, fejl, interne links, hastighed, structured data og en hurtig tjekliste.',
      content: `
## Hvad er en teknisk SEO-analyse?

En teknisk SEO-analyse er et check af dit websites teknik.

Maalet er simpelt:

- Google kan crawle og indeksere dine sider.
- Brugere faar en hurtig og god oplevelse.

## Hvad skal du tjekke? (3 blokke)

- Infrastruktur (HTTPS, sitemap, robots.txt)
- Crawling og indeksering (interne links, duplicate content, 404 sider)
- On-page tech (hastighed, structured data, meta tags)

## Teknisk SEO-analyse: enkle trin

### Trin 1 - Kan Google indeksere dine sider?

Start her. Hvis dette er forkert, giver resten mindre effekt.

- HTTPS uden mixed content?
- Blokerer robots.txt vigtige sider?
- Er der noindex ved en fejl paa vigtige sider?
- Findes sitemap.xml og er den indsendt i Search Console?
- Er canonical tags korrekte (ofte self-referencing)?

### Trin 2 - Find fejl (404/5xx) og daarlige redirects

- Tjek Search Console for crawl errors.
- Fix 404 sider (redirect eller genskab siden).
- Undgaa redirect chains (A -> B -> C).
- Brug 301 til permanente redirects.

### Trin 3 - Interne links og struktur

- Vigtige sider inden for 2-3 klik?
- Ingen orphan pages (sider uden interne links).
- Tydelige ankertekster.
- Breadcrumbs hvis sitet er stort.

### Trin 4 - Hastighed og mobile

- Test med PageSpeed Insights (mobile er ofte flaskehalsen).
- Komprimer billeder og brug moderne formater.
- Lazy loading til tunge elementer.
- Fjern unodige scripts.

### Trin 5 - On-page basics (meta + structured data)

- Unik title og meta description pr side.
- Ingen duplikerede titles paa vigtige sider.
- Structured data hvor det giver mening (Article/FAQ/Product).

### Trin 6 - Maal og foelg op

- GA4 aktiv?
- Search Console koblet paa?
- Tjek maanedligt for nye fejl.

## Hurtig tjekliste

### Indeksering

- HTTPS ok
- robots.txt blokerer ikke noget vigtigt
- sitemap.xml findes og er indsendt
- ingen noindex ved en fejl
- canonicals ok

### Fejl og redirects

- fix 404/5xx
- ingen redirect chains
- 301 til permanente redirects

### Struktur

- vigtige sider inden for 2-3 klik
- ingen orphan pages
- tydelige interne links

### Performance

- komprimer billeder
- ryd op i scripts
- forbedr mobile performance

### Maaling

- GA4 tjekket
- Search Console tjekket

## Hvor ofte?

Hver 3 til 12 maaned. Og altid efter store releases eller redesign.

## Konklusion

Teknisk SEO er fundamentet. Fix indeksering og fejl foerst. Saa hastighed og struktur. Saa detaljer.
`.trim(),
    },
    fr: {
      title: 'Audit SEO technique: etapes simples + checklist',
      topic: 'SEO',
      metaTitle: 'Audit SEO technique | Etapes + checklist',
      metaDescription: 'Un audit SEO technique simple: indexation, erreurs, liens internes, vitesse, structured data et une checklist rapide.',
      content: `
## Qu est-ce qu un audit SEO technique?

Un audit SEO technique est un check de la partie technique de ton site.

Le but est simple:

- Google peut crawler et indexer tes pages.
- Les visiteurs ont une experience rapide et fluide.

## Quoi verifier? (3 blocs)

- Infrastructure (HTTPS, sitemap, robots.txt)
- Crawling et indexation (liens internes, duplicate content, pages 404)
- Tech on-page (vitesse, structured data, meta tags)

## Audit SEO technique: etapes simples

### Etape 1 - Google peut indexer tes pages?

Commence ici. Si c est faux, le reste aide moins.

- HTTPS sans mixed content?
- robots.txt bloque des pages importantes?
- noindex par erreur sur des pages importantes?
- sitemap.xml existe et est soumise dans Search Console?
- canonical tags corrects (souvent self-referencing)?

### Etape 2 - Erreurs (404/5xx) et mauvais redirects

- Regarde Search Console pour les crawl errors.
- Corrige les pages 404 (redirect ou restauration).
- Evite les redirect chains (A -> B -> C).
- Utilise 301 pour les redirects permanents.

### Etape 3 - Liens internes et structure

- Pages importantes en 2-3 clics?
- Pas de orphan pages (sans liens internes).
- Ancrages clairs.
- Breadcrumbs si le site est grand.

### Etape 4 - Vitesse et mobile

- Teste avec PageSpeed Insights (mobile est souvent le probleme).
- Compresse les images et utilise des formats modernes.
- Lazy loading pour les elements lourds.
- Supprime les scripts inutiles.

### Etape 5 - On-page basics (meta + structured data)

- Title et meta description uniques par page.
- Pas de titles dupliques sur les pages importantes.
- Structured data quand c est logique (Article/FAQ/Product).

### Etape 6 - Mesure et suivi

- GA4 actif?
- Search Console connectee?
- Check chaque mois pour de nouvelles erreurs.

## Checklist rapide

### Indexation

- HTTPS ok
- robots.txt ne bloque rien d important
- sitemap.xml existe et est soumise
- pas de noindex par erreur
- canonicals ok

### Erreurs et redirects

- corriger 404/5xx
- pas de redirect chains
- 301 pour redirects permanents

### Structure

- pages importantes en 2-3 clics
- pas de orphan pages
- liens internes clairs

### Performance

- compresser les images
- nettoyer les scripts
- ameliorer la performance mobile

### Mesure

- GA4 check
- Search Console check

## A quelle frequence?

Tous les 3 a 12 mois. Et apres de grosses releases ou un redesign.

## Conclusion

Le SEO technique est la base. Corrige l indexation et les erreurs d abord. Ensuite vitesse et structure. Ensuite les details.
`.trim(),
    },
    it: {
      title: 'Audit SEO tecnico: passi semplici + checklist',
      topic: 'SEO',
      metaTitle: 'Audit SEO tecnico | Passi + checklist',
      metaDescription: 'Un audit SEO tecnico semplice: indicizzazione, errori, link interni, velocita, structured data e una checklist rapida.',
      content: `
## Cos e un audit SEO tecnico?

Un audit SEO tecnico e un check della parte tecnica del sito.

L obiettivo e semplice:

- Google puo crawlarla e indicizzare le pagine.
- I visitatori hanno un esperienza veloce e pulita.

## Cosa controllare? (3 blocchi)

- Infrastruttura (HTTPS, sitemap, robots.txt)
- Crawling e indicizzazione (link interni, duplicate content, pagine 404)
- Tech on-page (velocita, structured data, meta tag)

## Audit SEO tecnico: passi semplici

### Passo 1 - Google puo indicizzare le pagine?

Inizia qui. Se questo e sbagliato, il resto aiuta meno.

- HTTPS senza mixed content?
- robots.txt blocca pagine importanti?
- noindex per errore su pagine importanti?
- sitemap.xml esiste ed e inviata in Search Console?
- canonical tag corretti (di solito self-referencing)?

### Passo 2 - Errori (404/5xx) e redirect sbagliati

- Controlla Search Console per i crawl errors.
- Risolvi le pagine 404 (redirect o ripristina la pagina).
- Evita redirect chains (A -> B -> C).
- Usa 301 per redirect permanenti.

### Passo 3 - Link interni e struttura

- Pagine importanti entro 2-3 click?
- Niente orphan pages (pagine senza link interni).
- Anchor text chiari.
- Breadcrumbs se il sito e grande.

### Passo 4 - Velocita e mobile

- Test con PageSpeed Insights (mobile e spesso il collo di bottiglia).
- Comprimi immagini e usa formati moderni.
- Lazy loading per elementi pesanti.
- Rimuovi script inutili.

### Passo 5 - On-page basics (meta + structured data)

- Title e meta description unici per pagina.
- Niente title duplicati sulle pagine importanti.
- Structured data quando ha senso (Article/FAQ/Product).

### Passo 6 - Misura e monitoraggio

- GA4 attivo?
- Search Console collegata?
- Check ogni mese per nuovi errori.

## Checklist veloce

### Indicizzazione

- HTTPS ok
- robots.txt non blocca nulla di importante
- sitemap.xml esiste ed e inviata
- niente noindex per errore
- canonicals ok

### Errori e redirect

- risolvere 404/5xx
- niente redirect chains
- 301 per redirect permanenti

### Struttura

- pagine importanti entro 2-3 click
- niente orphan pages
- link interni chiari

### Performance

- comprimere immagini
- pulire script
- migliorare performance mobile

### Misura

- GA4 check
- Search Console check

## Ogni quanto?

Ogni 3 a 12 mesi. E sempre dopo grandi release o redesign.

## Conclusione

Il SEO tecnico e la base. Sistema indicizzazione ed errori prima. Poi velocita e struttura. Poi i dettagli.
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
