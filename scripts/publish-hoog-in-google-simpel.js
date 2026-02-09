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
  // User requested the Dutch keyword as the slug.
  slug: 'hoog-in-google',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Hoog in Google komen: simpel SEO stappenplan',
  content: `
## Wat betekent "hoog in Google"?

"Hoog in Google" betekent: jouw pagina staat zichtbaar op relevante zoekopdrachten, en levert bezoekers op die ook echt klant kunnen worden.

Niet elk keyword is even waardevol. Een #1 positie met nul conversies is geen succes.

## Hoe kom je hoog in Google? (de 3 pijlers)

SEO bestaat in de praktijk uit 3 onderdelen die elkaar versterken:

- Content: de beste pagina maken voor een zoekintentie
- Techniek: zorgen dat Google alles kan crawlen, begrijpen en snel laden
- Autoriteit: laten zien dat je een betrouwbare bron bent (o.a. via links en brand signalen)

Als 1 pijler ontbreekt, ga je bijna altijd plafonneren.

## Stap 0 - Meet eerst je basis

Zonder metingen weet je niet of je vooruitgaat.

- Koppel Google Search Console
- Koppel GA4 (en zet conversies goed)
- Maak een simpele nulmeting: top paginas, top queries, conversies

## Stap 1 - Fix indexatie en technische blokkades

Dit is prioriteit #1. Als Google je paginas niet kan indexeren, doet de rest weinig.

Check:

- HTTPS goed (geen mixed content)
- robots.txt blokkeert niets belangrijks
- geen noindex op belangrijke paginas
- sitemap.xml bestaat en is ingediend
- canonical tags kloppen (meestal self-referencing)
- 404/5xx errors oplossen en redirect chains voorkomen

## Stap 2 - Kies keywords op intent (niet alleen volume)

Vraag altijd: wat wil iemand echt doen?

- Informational: leren (blog, gids)
- Commercial: vergelijken (best, vs, reviews)
- Transactional: kopen / offerte (landingspagina)
- Navigational: merknaam

Tip: begin met keywords waar je iets beters kunt maken dan de top 3.

## Stap 3 - Maak 1 pagina per onderwerp (en maak hem beter)

Google wil de beste match voor de intent.

Checklist per pagina:

- Title en H1: duidelijk, met keyword, maar menselijk
- Intro: direct antwoord + wat je gaat oplossen
- Structuur: logische H2/H3, niet 1 grote lap tekst
- Bewijs: voorbeelden, cases, screenshots, data
- Media: visuals waar het helpt (geen vulling)
- CTA: wat is de volgende stap?

Geen trucjes. Gewoon de beste pagina maken.

## Stap 4 - Interne links: maak je site logisch

Interne links zijn gratis SEO.

- Link van je sterke paginas naar je belangrijke paginas
- Gebruik duidelijke ankerteksten
- Zorg dat belangrijke paginas binnen 2-3 klikken te bereiken zijn
- Werk met clusters: 1 hoofdpagina + ondersteunende paginas

## Stap 5 - Autoriteit: bouw vertrouwen (zonder spam)

Je hebt niet 1000 links nodig. Je hebt goede links nodig.

- Zorg dat je content echt het waard is om te linken
- Bouw relaties in je niche (partners, tools, communities)
- Doe geen spammy startpagina links

Merk + reputatie helpen ook: reviews, mentions en goede PR.

## Stap 6 - Update wat al rankt (sneller dan nieuw)

De snelste groei komt vaak uit paginas die al in de top 20 staan.

- Pak queries waar je op positie 4-20 staat
- Update de pagina: intent, extra secties, betere voorbeelden
- Verbeter interne links
- Maak je snippet beter (title/meta) voor hogere CTR

## Quick wins (binnen 14 dagen)

- Titles en meta descriptions uniek maken op je belangrijkste paginas
- 404 fouten fixen en redirect chains opruimen
- 5 interne links toevoegen naar je 3 belangrijkste pagina's
- 1 top pagina updaten die al verkeer krijgt
- PageSpeed: afbeeldingen comprimeren en onnodige scripts schrappen

## Valkuilen

- Alleen content publiceren zonder plan
- Alleen techniek fixen, maar geen sterke paginas maken
- Links kopen / spam bouwen
- Niet meten (geen Search Console/GA4)
- Alles tegelijk aanpassen en daarna niet weten wat werkte

## Mini checklist

### Basis

- Search Console actief
- GA4 actief + conversies

### Techniek

- indexatie ok (robots/noindex/sitemap/canonical)
- fouten ok (404/5xx/redirect chains)
- snelheid ok (mobile)

### Content

- 1 pagina per intent
- betere pagina dan top 3
- duidelijke structuur + bewijs

### Interne links

- clusters gebouwd
- belangrijke paginas binnen 2-3 klikken

### Autoriteit

- geen spam
- focus op kwaliteit + mentions

## Conclusie

Hoog in Google komen is geen truc. Het is: techniek op orde, de beste pagina maken, en vertrouwen bouwen.

Wil je dat ik meekijk naar jouw snelste groeikansen? Check dan /work-with-me.
`.trim(),
  translations: {
    en: {
      title: 'Rank higher in Google with SEO (simple steps)',
      topic: 'SEO',
      metaTitle: 'Rank higher in Google | Simple SEO steps',
      metaDescription: 'A simple SEO plan to rank higher in Google: fix indexation, match search intent, improve content, strengthen internal links, build authority, and measure results.',
      content: `
## What does "rank higher in Google" mean?

Ranking higher means your page shows up for the right searches and brings visitors who can actually convert.

A #1 ranking with zero conversions is not a win.

## How do you rank higher? (the 3 pillars)

In practice SEO has 3 parts:

- Content: create the best page for the search intent
- Technical: make sure Google can crawl, understand, and load your site fast
- Authority: prove you are a trusted source (links + brand signals)

If one pillar is missing, you will usually hit a ceiling.

## Step 0 - Measure the basics first

If you do not measure, you cannot improve.

- Connect Google Search Console
- Connect GA4 (and set conversions)
- Create a simple baseline: top pages, top queries, conversions

## Step 1 - Fix indexation and technical blockers

This is priority #1. If Google cannot index your pages, the rest matters less.

Check:

- HTTPS is correct (no mixed content)
- robots.txt does not block important pages
- no accidental noindex on key pages
- sitemap.xml exists and is submitted
- canonical tags are correct (often self-referencing)
- fix 404/5xx errors and remove redirect chains

## Step 2 - Pick keywords by intent (not volume only)

Always ask: what does the searcher want to do?

- Informational: learn (guide, blog)
- Commercial: compare (best, vs, reviews)
- Transactional: buy / request a quote (landing page)
- Navigational: brand query

Tip: start with keywords where you can realistically beat the top 3.

## Step 3 - Build 1 great page per topic

Google wants the best match for intent.

Per-page checklist:

- Title and H1: clear, includes keyword, still human
- Intro: answer fast + show what you will solve
- Structure: logical H2/H3, not one long wall of text
- Proof: examples, cases, screenshots, data
- Media: only when it helps
- CTA: next step

No tricks. Just build the best page.

## Step 4 - Internal links: make your site logical

Internal links are free SEO.

- Link from strong pages to important pages
- Use descriptive anchors
- Key pages should be reachable within 2-3 clicks
- Use clusters: 1 main page + supporting pages

## Step 5 - Authority: build trust (no spam)

You do not need 1000 links. You need good links.

- Create content worth linking to
- Build relationships in your niche
- Avoid spammy link networks

Brand and reputation also help: reviews, mentions, and PR.

## Step 6 - Update what already ranks

Fast wins often come from pages already in the top 20.

- Find queries where you rank positions 4-20
- Update the page: intent, missing sections, better examples
- Improve internal linking
- Improve your snippet (title/meta) to increase CTR

## Quick wins (within 14 days)

- Make titles and meta descriptions unique for key pages
- Fix 404 errors and remove redirect chains
- Add 5 internal links to your 3 most important pages
- Update 1 top page that already gets traffic
- Improve PageSpeed: compress images and remove unnecessary scripts

## Common mistakes

- Publishing content with no plan
- Only fixing tech but not creating strong pages
- Buying links / building spam
- Not measuring (no Search Console/GA4)
- Changing everything at once and not knowing what worked

## Mini checklist

### Basics

- Search Console connected
- GA4 connected + conversions

### Technical

- indexation ok (robots/noindex/sitemap/canonical)
- errors ok (404/5xx/redirect chains)
- speed ok (mobile)

### Content

- 1 page per intent
- better than top 3
- clear structure + proof

### Internal links

- clusters built
- key pages within 2-3 clicks

### Authority

- no spam
- focus on quality + mentions

## Conclusion

Ranking higher is not a trick. It is: technical basics, the best page for intent, and trust.

Want me to review your fastest SEO opportunities? See /work-with-me.
`.trim(),
    },
    nl: {
      title: 'Hoog in Google komen: simpel SEO stappenplan',
      topic: 'SEO',
      metaTitle: 'Hoog in Google komen | Simpel SEO stappenplan',
      metaDescription: 'Simpel stappenplan om hoog in Google te komen: techniek en indexatie fixen, intent kiezen, content verbeteren, interne links, autoriteit en meten.',
      content: `
## Wat betekent "hoog in Google"?

"Hoog in Google" betekent: jouw pagina staat zichtbaar op relevante zoekopdrachten, en levert bezoekers op die ook echt klant kunnen worden.

Niet elk keyword is even waardevol. Een #1 positie met nul conversies is geen succes.

## Hoe kom je hoog in Google? (de 3 pijlers)

SEO bestaat in de praktijk uit 3 onderdelen die elkaar versterken:

- Content: de beste pagina maken voor een zoekintentie
- Techniek: zorgen dat Google alles kan crawlen, begrijpen en snel laden
- Autoriteit: laten zien dat je een betrouwbare bron bent (o.a. via links en brand signalen)

Als 1 pijler ontbreekt, ga je bijna altijd plafonneren.

## Stap 0 - Meet eerst je basis

Zonder metingen weet je niet of je vooruitgaat.

- Koppel Google Search Console
- Koppel GA4 (en zet conversies goed)
- Maak een simpele nulmeting: top paginas, top queries, conversies

## Stap 1 - Fix indexatie en technische blokkades

Dit is prioriteit #1. Als Google je paginas niet kan indexeren, doet de rest weinig.

Check:

- HTTPS goed (geen mixed content)
- robots.txt blokkeert niets belangrijks
- geen noindex op belangrijke paginas
- sitemap.xml bestaat en is ingediend
- canonical tags kloppen (meestal self-referencing)
- 404/5xx errors oplossen en redirect chains voorkomen

## Stap 2 - Kies keywords op intent (niet alleen volume)

Vraag altijd: wat wil iemand echt doen?

- Informational: leren (blog, gids)
- Commercial: vergelijken (best, vs, reviews)
- Transactional: kopen / offerte (landingspagina)
- Navigational: merknaam

Tip: begin met keywords waar je iets beters kunt maken dan de top 3.

## Stap 3 - Maak 1 pagina per onderwerp (en maak hem beter)

Google wil de beste match voor de intent.

Checklist per pagina:

- Title en H1: duidelijk, met keyword, maar menselijk
- Intro: direct antwoord + wat je gaat oplossen
- Structuur: logische H2/H3, niet 1 grote lap tekst
- Bewijs: voorbeelden, cases, screenshots, data
- Media: visuals waar het helpt (geen vulling)
- CTA: wat is de volgende stap?

Geen trucjes. Gewoon de beste pagina maken.

## Stap 4 - Interne links: maak je site logisch

Interne links zijn gratis SEO.

- Link van je sterke paginas naar je belangrijke paginas
- Gebruik duidelijke ankerteksten
- Zorg dat belangrijke paginas binnen 2-3 klikken te bereiken zijn
- Werk met clusters: 1 hoofdpagina + ondersteunende paginas

## Stap 5 - Autoriteit: bouw vertrouwen (zonder spam)

Je hebt niet 1000 links nodig. Je hebt goede links nodig.

- Zorg dat je content echt het waard is om te linken
- Bouw relaties in je niche (partners, tools, communities)
- Doe geen spammy startpagina links

Merk + reputatie helpen ook: reviews, mentions en goede PR.

## Stap 6 - Update wat al rankt (sneller dan nieuw)

De snelste groei komt vaak uit paginas die al in de top 20 staan.

- Pak queries waar je op positie 4-20 staat
- Update de pagina: intent, extra secties, betere voorbeelden
- Verbeter interne links
- Maak je snippet beter (title/meta) voor hogere CTR

## Quick wins (binnen 14 dagen)

- Titles en meta descriptions uniek maken op je belangrijkste paginas
- 404 fouten fixen en redirect chains opruimen
- 5 interne links toevoegen naar je 3 belangrijkste pagina's
- 1 top pagina updaten die al verkeer krijgt
- PageSpeed: afbeeldingen comprimeren en onnodige scripts schrappen

## Valkuilen

- Alleen content publiceren zonder plan
- Alleen techniek fixen, maar geen sterke paginas maken
- Links kopen / spam bouwen
- Niet meten (geen Search Console/GA4)
- Alles tegelijk aanpassen en daarna niet weten wat werkte

## Mini checklist

### Basis

- Search Console actief
- GA4 actief + conversies

### Techniek

- indexatie ok (robots/noindex/sitemap/canonical)
- fouten ok (404/5xx/redirect chains)
- snelheid ok (mobile)

### Content

- 1 pagina per intent
- betere pagina dan top 3
- duidelijke structuur + bewijs

### Interne links

- clusters gebouwd
- belangrijke paginas binnen 2-3 klikken

### Autoriteit

- geen spam
- focus op kwaliteit + mentions

## Conclusie

Hoog in Google komen is geen truc. Het is: techniek op orde, de beste pagina maken, en vertrouwen bouwen.

Wil je dat ik meekijk naar jouw snelste groeikansen? Check dan /work-with-me.
`.trim(),
    },
    de: {
      title: 'Hoeher in Google ranken: einfacher SEO Plan',
      topic: 'SEO',
      metaTitle: 'Hoeher in Google ranken | Einfacher SEO Plan',
      metaDescription: 'Ein einfacher SEO Plan um hoeher in Google zu ranken: Indexierung fixen, Suchintention matchen, Content verbessern, interne Links, Autoritaet und messen.',
      content: `
## Was bedeutet "hoeher in Google"?

"Hoeher in Google" heisst: deine Seite erscheint bei relevanten Suchanfragen und bringt Besucher die auch konvertieren koennen.

Eine #1 Position ohne Conversions ist kein Erfolg.

## Wie rankst du hoeher? (3 Saeulen)

SEO besteht in der Praxis aus 3 Teilen:

- Content: die beste Seite fuer die Suchintention
- Technik: Google kann crawlen, verstehen und schnell laden
- Autoritaet: du bist eine vertrauenswuerdige Quelle (Links + Brand Signale)

Wenn eine Saeule fehlt, erreichst du oft schnell ein Plateau.

## Schritt 0 - Basics messen

Ohne Messung keine Verbesserung.

- Google Search Console verbinden
- GA4 verbinden (Conversions setzen)
- Baseline: Top Seiten, Top Queries, Conversions

## Schritt 1 - Indexierung und technische Blocker fixen

Prioritaet #1.

Check:

- HTTPS ok (kein mixed content)
- robots.txt blockiert nichts Wichtiges
- kein noindex auf wichtigen Seiten
- sitemap.xml existiert und ist eingereicht
- canonical Tags korrekt
- 404/5xx fixen und redirect chains entfernen

## Schritt 2 - Keywords nach Intent waehlen

Frage: was will der Nutzer?

- Informational: lernen
- Commercial: vergleichen
- Transactional: kaufen / anfragen
- Navigational: Brand

## Schritt 3 - 1 starke Seite pro Topic

- Title und H1 klar
- Intro: Antwort sofort
- Struktur: klare H2/H3
- Proof: Beispiele, Cases, Daten
- CTA: naechster Schritt

## Schritt 4 - Interne Links

- Von starken Seiten auf wichtige Seiten linken
- Gute Anchor Texte
- Wichtige Seiten in 2-3 Klicks
- Cluster: 1 Main + Supporting

## Schritt 5 - Autoritaet ohne Spam

- Content der Links verdient
- Beziehungen in der Nische
- Keine spammy Linknetzwerke

## Schritt 6 - Updaten was schon rankt

- Queries Position 4-20 finden
- Seite updaten + interne Links
- Snippet verbessern (title/meta)

## Quick wins

- Title/meta unique
- 404 + redirect chains fixen
- Interne Links setzen
- 1 Seite updaten die schon Traffic hat
- Bilder komprimieren und Scripts reduzieren

## Fazit

Hoeher ranken ist kein Trick: Technik, beste Seite fuer Intent, Vertrauen.

Wenn du willst, dass ich deine schnellsten Chancen finde: /work-with-me.
`.trim(),
    },
    sv: {
      title: 'Ranka hogre i Google: enkel SEO plan',
      topic: 'SEO',
      metaTitle: 'Ranka hogre i Google | Enkel SEO plan',
      metaDescription: 'En enkel SEO plan for att ranka hogre i Google: fixa indexering, matcha intent, forbattra content, interna lankar, auktoritet och mata.',
      content: `
## Vad betyder "ranka hogre i Google"?

Det betyder att din sida syns for relevanta sokningar och tar in besokare som kan konvertera.

En #1 position utan conversions ar inte en vinst.

## Hur rankar du hogre? (3 pelare)

- Content: basta sidan for intent
- Teknik: Google kan crawla, forsta och ladda snabbt
- Auktoritet: du ar en trusted source (links + brand signals)

## Steg 0 - Mata grunderna

- Koppla Search Console
- Koppla GA4 (satt conversions)
- Baseline: top pages, top queries, conversions

## Steg 1 - Fixa indexering

- HTTPS ok
- robots.txt blockerar inte viktigt
- inga noindex av misstag
- sitemap.xml inskickad
- canonicals ok
- fixa 404/5xx och redirect chains

## Steg 2 - Valj keywords pa intent

- informational
- commercial
- transactional
- navigational

## Steg 3 - Bygg 1 stark sida per topic

- title + H1 tydligt
- svara tidigt
- bra struktur
- proof och exempel
- tydlig CTA

## Steg 4 - Interna lankar

- lankar fran starka sidor
- tydliga anchors
- viktiga sidor inom 2-3 klick
- clusters

## Steg 5 - Auktoritet utan spam

- skapa content som fortjanar lankar
- bygg relationer
- undvik spam

## Steg 6 - Uppdatera det som redan rankar

- hitta position 4-20
- uppdatera + interna lankar
- battra snippet (title/meta)

## Slutsats

Teknik + bra content + forstroende.

Vill du att jag kollar dina snabbaste chanser? /work-with-me.
`.trim(),
    },
    da: {
      title: 'Rank hojere i Google: enkel SEO plan',
      topic: 'SEO',
      metaTitle: 'Rank hojere i Google | Enkel SEO plan',
      metaDescription: 'En enkel SEO plan til at ranke hojere i Google: fix indexering, match intent, forbedr content, interne links, autoritet og mal.',
      content: `
## Hvad betyder "rank hojere i Google"?

Det betyder at din side vises pa relevante sokninger og giver besogende der kan konvertere.

En #1 position uden conversions er ikke en sejr.

## Hvordan ranker du hojere? (3 sojler)

- Content: bedste side for intent
- Teknik: Google kan crawle, forsta og loade hurtigt
- Autoritet: du er en trusted source (links + brand signals)

## Trin 0 - Mal basen

- Kobl Search Console
- Kobl GA4 (satt conversions)
- Baseline: top pages, top queries, conversions

## Trin 1 - Fix indexering

- HTTPS ok
- robots.txt blokerer ikke vigtigt
- ingen noindex ved en fejl
- sitemap.xml indsendt
- canonicals ok
- fix 404/5xx og redirect chains

## Trin 2 - Vaelg keywords pa intent

- informational
- commercial
- transactional
- navigational

## Trin 3 - 1 staerk side per topic

- title + H1 tydeligt
- svar hurtigt
- god struktur
- proof og eksempler
- tydelig CTA

## Trin 4 - Interne links

- links fra staerke sider
- klare anchors
- vigtige sider inden for 2-3 klik
- clusters

## Trin 5 - Autoritet uden spam

- content der fortjener links
- relationer i nichen
- undga spam

## Trin 6 - Opdater det der allerede ranker

- find position 4-20
- opdater + interne links
- forbedr snippet (title/meta)

## Konklusion

Teknik + godt content + tillid.

Vil du have mig til at finde dine hurtigste muligheder? /work-with-me.
`.trim(),
    },
    fr: {
      title: 'Monter plus haut dans Google: plan SEO simple',
      topic: 'SEO',
      metaTitle: 'Monter plus haut dans Google | Plan SEO simple',
      metaDescription: 'Plan SEO simple pour monter dans Google: indexation, intent, content, liens internes, autorite et mesure.',
      content: `
## Que veut dire "monter dans Google"?

Cela veut dire: ta page apparait sur les bonnes requetes et amene des visiteurs qui peuvent convertir.

Une #1 position sans conversions n est pas une victoire.

## Comment monter? (3 piliers)

- Content: la meilleure page pour l intent
- Technique: Google peut crawler, comprendre et charger vite
- Autorite: tu es une source fiable (links + signaux de marque)

## Etape 0 - Mesurer la base

- Connecter Search Console
- Connecter GA4 (conversions)
- Baseline: top pages, top queries, conversions

## Etape 1 - Indexation

- HTTPS ok
- robots.txt ne bloque rien d important
- pas de noindex par erreur
- sitemap.xml soumise
- canonicals ok
- corriger 404/5xx et redirect chains

## Etape 2 - Choisir les keywords par intent

- informational
- commercial
- transactional
- navigational

## Etape 3 - 1 page forte par topic

- title + H1 clairs
- reponse rapide
- bonne structure
- preuves et exemples
- CTA clair

## Etape 4 - Liens internes

- liens depuis les pages fortes
- anchors clairs
- pages importantes en 2-3 clics
- clusters

## Etape 5 - Autorite sans spam

- content qui merite des liens
- relations
- eviter le spam

## Etape 6 - Updater ce qui ranke deja

- trouver position 4-20
- update + liens internes
- ameliorer snippet (title/meta)

## Conclusion

Technique + bon content + confiance.

Si tu veux, je peux trouver tes meilleures opportunites: /work-with-me.
`.trim(),
    },
    it: {
      title: 'Salire su Google: piano SEO semplice',
      topic: 'SEO',
      metaTitle: 'Salire su Google | Piano SEO semplice',
      metaDescription: 'Piano SEO semplice per salire su Google: indicizzazione, intent, content, link interni, autorita e misurazione.',
      content: `
## Cosa significa "salire su Google"?

Significa che la tua pagina appare per ricerche rilevanti e porta visitatori che possono convertire.

Una #1 posizione senza conversioni non e un successo.

## Come salire? (3 pilastri)

- Content: la pagina migliore per intent
- Tecnica: Google puo crawlarla, capire e caricare veloce
- Autorita: sei una fonte affidabile (links + segnali di brand)

## Step 0 - Misura la base

- Collega Search Console
- Collega GA4 (conversions)
- Baseline: top pages, top queries, conversions

## Step 1 - Indicizzazione

- HTTPS ok
- robots.txt non blocca nulla di importante
- niente noindex per errore
- sitemap.xml inviata
- canonicals ok
- correggi 404/5xx e redirect chains

## Step 2 - Scegli keywords per intent

- informational
- commercial
- transactional
- navigational

## Step 3 - 1 pagina forte per topic

- title + H1 chiari
- risposta veloce
- buona struttura
- prove ed esempi
- CTA chiara

## Step 4 - Link interni

- link dalle pagine forti
- anchor chiari
- pagine importanti in 2-3 click
- clusters

## Step 5 - Autorita senza spam

- content che merita link
- relazioni
- evita spam

## Step 6 - Aggiorna cio che gia ranka

- trova posizione 4-20
- update + link interni
- migliora snippet (title/meta)

## Conclusione

Tecnica + buon content + fiducia.

Se vuoi, posso trovare le opportunita piu veloci: /work-with-me.
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    console.log('Publishing hoog-in-google article to database...')

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
