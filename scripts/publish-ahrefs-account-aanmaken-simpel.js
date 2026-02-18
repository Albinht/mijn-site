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
Een Ahrefs account aanmaken kost je een paar minuten. Een Ahrefs account goed inrichten bespaart je maanden in je SEO traject.

Dat is het verschil waar ik in de praktijk op stuur: niet alleen toegang tot de tool, maar een setup die direct laat zien waar je groei zit in content, techniek en autoriteit.

Gebruik dit artikel als complete onboarding gids. Daarna kun je Ahrefs inzetten als vast onderdeel van je SEO ritme.

## Waarom dit belangrijk is

Veel teams gebruiken Ahrefs als losse tool:

- af en toe een keyword opzoeken
- soms een concurrent checken
- eens per kwartaal een audit draaien

Dan krijg je wel data, maar weinig richting.

Met een goede setup gebruik je Ahrefs als beslissysteem:

- wat publiceer je eerst
- welke paginas update je als eerste
- waar verlies je verkeer of links
- welke kansen zijn realistisch in 90 dagen

## Stap 1: bepaal je doel voor je inlogt

Kies eerst je primaire use-case. Anders bouw je een account vol ruis.

Mogelijke doelen:

- content planning en keyword research
- concurrentieanalyse op topics en paginas
- linkbuilding kansen vinden en monitoren
- technische issues signaleren via Site Audit
- rankings monitoren met Rank Tracker

Interne verdieping:

- [Ahrefs Keywords Explorer stappenplan](/blog/ahrefs-keywords-explorer-stappenplan)
- [Content gap analyse in Ahrefs](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Ahrefs Site Explorer workflows](/blog/ahrefs-site-explorer-simpel-stappenplan)

## Stap 2: kies een plan op basis van gebruik, niet op basis van features

Plannen en limieten veranderen regelmatig. Werk daarom met deze selectievragen:

- hoeveel mensen hebben toegang nodig
- hoeveel projecten run je tegelijk
- hoeveel keywords wil je structureel tracken
- hoe vaak wil je crawlen en hoe groot zijn je sites

Praktische indeling:

- solo/freelancer: 1-2 projecten, 30-100 tracked keywords per project
- MKB marketingteam: meerdere projecten, maandelijkse crawls, rank tracking per dienst
- bureau/agency: teamtoegang, hogere crawl capaciteit, rapportages voor meerdere klanten

## Stap 3: account aanmaken in Ahrefs

De signup is simpel. Dit is de versie die ik aanhoud:

1. Maak een account aan en bevestig je e-mail.
2. Stel facturatie en betaalmethode in.
3. Zet direct 2FA aan voor veiligheid.
4. Voeg teamleden toe met de juiste rechten.
5. Controleer timezone, standaard land en taalinstellingen.

Waarom dit telt:

- verkeerde rechten veroorzaken fouten in projecten
- verkeerde marktinstellingen geven irrelevante datasets
- zonder 2FA loop je onnodig risico op account lockout

## Stap 4: richt je eerste project goed in

Hier maken de meeste teams fouten. Ze starten te breed of met de verkeerde scope.

Kies eerst je projectscope:

- domain: als je complete domeinprestaties wilt zien
- subdomain: als blog/shop los draait
- prefix/folder: als je 1 markt of sectie analyseert

Daarna pas je crawl en tracking aan op je doel.

Project checklist:

- juiste scope gekozen
- juiste markt (land + taal)
- sitemap toegevoegd
- irrelevante paden uitgesloten (staging, admin, filter-URLs)
- crawl frequentie ingesteld (wekelijks of maandelijks)

Technische verdieping:

- [Technische SEO analyse en checklist](/blog/technische-seo-analyse-stappenplan-checklist)

## Stap 5: je eerste 60 minuten in Ahrefs (actievolgorde)

Als je direct waarde wilt halen, gebruik dan deze volgorde:

1. Site Explorer: check traffic trend van laatste 12 maanden.
2. Top pages: noteer paginas met meeste organische waarde.
3. Organic keywords: filter op posities 4-20 (quick wins).
4. Backlinks: bekijk nieuwe en verloren referring domains.
5. Content Gap: vergelijk 2-3 echte concurrenten.
6. Rank Tracker: voeg alleen strategische keywords toe.

Output na 60 minuten:

- 10 quick wins
- 5 risicopunten
- 1 prioriteitenlijst voor de komende maand

## Stap 6: welke metrics je wel en niet centraal zet

Ahrefs geeft veel cijfers. Niet alles is een KPI.

Gebruik als kern:

- clicks en traffic trend
- keywordposities op business zoekwoorden
- verkeer per pagina en per intent
- referring domains met context
- Traffic Potential op topicniveau

Gebruik met nuance:

- DR en UR (handig als context, niet als einddoel)
- keyword volume (zonder intent zegt het weinig)

Verdieping:

- [Traffic Potential is belangrijker dan volume](/blog/ahrefs-traffic-potential-vs-volume)

## Stap 7: maak Ahrefs onderdeel van je vaste maandritme

Een goede setup zonder ritme levert alsnog weinig op.

Mijn minimale ritme:

- wekelijks: ranking shifts, lost links, nieuwe kansen
- maandelijks: content gaps, technische issues, pagina-updates
- per kwartaal: strategieherijking op basis van output en conversie

Koppel Ahrefs altijd aan:

- Google Search Console voor echte clicks/impressions
- GA4 of CRM data voor leadkwaliteit en omzetimpact

## Veelgemaakte fouten bij het aanmaken van een Ahrefs account

- je kiest het verkeerde land en trekt verkeerde conclusies
- je trackt honderden irrelevante keywords
- je kijkt alleen naar DR en niet naar pagina-impact
- je draait audits maar prioriteert issues niet
- je gebruikt Ahrefs los van Search Console en conversiedata

## Interne route na dit artikel

Wil je dit slim opbouwen? Werk in deze volgorde:

1. [Ahrefs account aanmaken](/blog/ahrefs-account-aanmaken-simpele-uitleg)
2. [Keywords Explorer stappenplan](/blog/ahrefs-keywords-explorer-stappenplan)
3. [Content gap analyse in Ahrefs](/blog/content-gap-analyse-ahrefs-stappenplan)
4. [Site Explorer workflows](/blog/ahrefs-site-explorer-simpel-stappenplan)
5. [Wat is SEO optimalisatie](/blog/wat-is-seo-optimalisatie)
6. [Hoger in Google komen](/blog/hoog-in-google)

## Conclusie

Een Ahrefs account aanmaken is het makkelijke deel.

Het echte resultaat komt uit:

- strakke scope
- juiste marktinstellingen
- een vaste workflow
- koppeling met je eigen businessdata

Zo maak je van Ahrefs geen dashboard, maar een groeimotor voor SEO.
`.trim()

const enContent = `
Creating an Ahrefs account takes minutes. Setting it up correctly saves months.

Use this setup sequence:

1. Define your use-case first (keywords, content, links, technical scans, tracking).
2. Choose a plan based on users, projects, crawl depth, and rank tracking needs.
3. Create the account, enable 2FA, and configure market defaults.
4. Build your first project with the right scope (domain, subdomain, or folder).
5. Run a 60-minute onboarding sprint in Site Explorer, Keywords, Backlinks, and Content Gap.

Internal workflows:

- [Keywords Explorer workflow](/blog/ahrefs-keywords-explorer-stappenplan)
- [Content Gap analysis](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Site Explorer workflow](/blog/ahrefs-site-explorer-simpel-stappenplan)
- [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume)

Do not treat DR as your main KPI. Focus on traffic trends, page-level impact, ranking movement, and conversion outcomes from Search Console + GA4.

If you need the technical layer around this setup, use:

- [Technical SEO checklist](/blog/technische-seo-analyse-stappenplan-checklist)

Conclusion: account creation is step zero. Real performance comes from a focused setup and a weekly operating rhythm.
`.trim()

const deContent = `
Ein Ahrefs Konto ist schnell erstellt. Die Wirkung kommt erst durch das richtige Setup.

Fuer den Start:

1. Ziel festlegen (Keywords, Content, Links, Technik, Tracking).
2. Plan nach Bedarf waehlen (Users, Projects, Crawl, Rank Tracker).
3. Konto anlegen, 2FA aktivieren, Markt korrekt setzen.
4. Erstes Projekt sauber aufsetzen (Domain, Subdomain oder Folder).
5. Erste 60 Minuten fuer Trends, Top Pages, Keywords, Backlinks und Gaps nutzen.

Interne Guides:

- [Keywords Explorer](/blog/ahrefs-keywords-explorer-stappenplan)
- [Content Gap Analyse](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Site Explorer](/blog/ahrefs-site-explorer-simpel-stappenplan)
- [Traffic Potential vs Volume](/blog/ahrefs-traffic-potential-vs-volume)

Wichtig: DR ist Kontext, kein Geschaeftsziel. Prioritaet haben Traffic, Rankings, Page Impact und Conversions.
`.trim()

const svContent = `
Att skapa ett Ahrefs-konto ar snabbt. Resultat kommer nar setupen ar ratt.

Starta sa har:

1. Valj mal (keywords, content, lankar, teknik, tracking).
2. Valj plan utifran users, projects, crawl och rank tracker.
3. Skapa konto, aktivera 2FA, satt ratt marknad.
4. Bygg forsta projektet med korrekt scope.
5. Gor en 60-minuters onboarding i Site Explorer, Keywords och Content Gap.

Las vidare:

- [Keywords Explorer](/blog/ahrefs-keywords-explorer-stappenplan)
- [Content Gap](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Site Explorer](/blog/ahrefs-site-explorer-simpel-stappenplan)
- [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume)

Fokusera pa trafik, rankings, page impact och affarsresultat, inte bara DR.
`.trim()

const daContent = `
Det tager fa minutter at oprette en Ahrefs konto. Effekten kommer fra den rigtige opsaetning.

Brug denne raekkefolge:

1. Definer maalet (keywords, content, links, teknik, tracking).
2. Vaelg plan efter users, projects, crawl og rank tracker behov.
3. Opret konto, aktiver 2FA og vaelg korrekt marked.
4. Opsaet forste projekt med korrekt scope.
5. Lav en 60-minutters onboarding med Site Explorer, Keywords og Content Gap.

Relevante guides:

- [Keywords Explorer](/blog/ahrefs-keywords-explorer-stappenplan)
- [Content Gap analyse](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Site Explorer workflow](/blog/ahrefs-site-explorer-simpel-stappenplan)
- [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume)

Prioriter trafik, sideeffekt og konvertering frem for vanity metrics.
`.trim()

const frContent = `
Creer un compte Ahrefs est rapide. Le vrai resultat vient d une configuration solide.

Sequence recommandee:

1. Definir l objectif (keywords, contenu, liens, technique, suivi).
2. Choisir le plan selon users, projets, crawl et Rank Tracker.
3. Creer le compte, activer 2FA, configurer le bon marche.
4. Lancer le premier projet avec le bon scope.
5. Faire un sprint de 60 minutes: trends, top pages, keywords, backlinks, gaps.

Guides internes:

- [Keywords Explorer](/blog/ahrefs-keywords-explorer-stappenplan)
- [Content Gap](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Site Explorer](/blog/ahrefs-site-explorer-simpel-stappenplan)
- [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume)

Ne pilotez pas uniquement avec DR. Suivez trafic, positions, impact par page et conversion.
`.trim()

const itContent = `
Creare un account Ahrefs e veloce. I risultati arrivano con una configurazione corretta.

Passi consigliati:

1. Definisci l obiettivo (keyword, contenuti, link, tecnica, tracking).
2. Scegli il piano in base a utenti, progetti, crawl e rank tracker.
3. Crea l account, attiva 2FA, imposta mercato e lingua corretti.
4. Configura il primo progetto con lo scope giusto.
5. Esegui uno sprint da 60 minuti su trend, top pages, keyword, backlink e gap.

Approfondimenti interni:

- [Keywords Explorer](/blog/ahrefs-keywords-explorer-stappenplan)
- [Content Gap](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Site Explorer](/blog/ahrefs-site-explorer-simpel-stappenplan)
- [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume)

Non usare solo DR come KPI. Conta di piu la crescita di traffico, ranking e conversioni.
`.trim()

const article = {
  slug: 'ahrefs-account-aanmaken-simpele-uitleg',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Ahrefs account aanmaken: complete setup gids voor SEO groei',
  content: nlContent,
  translations: {
    en: {
      title: 'Creating an Ahrefs account: complete setup guide',
      topic: 'SEO',
      metaTitle: 'Creating an Ahrefs account | Complete setup guide',
      metaDescription: 'Create an Ahrefs account and set it up correctly: plan selection, first project setup, and a workflow that drives SEO growth.',
      content: enContent,
    },
    nl: {
      title: 'Ahrefs account aanmaken: complete setup gids voor SEO groei',
      topic: 'SEO',
      metaTitle: 'Ahrefs account aanmaken | Complete setup gids',
      metaDescription: 'Ahrefs account aanmaken en direct goed instellen: plan kiezen, eerste project opzetten, metrics prioriteren en je SEO workflow opbouwen.',
      content: nlContent,
    },
    de: {
      title: 'Ahrefs Konto erstellen: kompletter Setup Guide',
      topic: 'SEO',
      metaTitle: 'Ahrefs Konto erstellen | Setup Guide',
      metaDescription: 'Ahrefs Konto erstellen und richtig einrichten: Plan waehlen, erstes Projekt setzen und ein SEO Workflow mit Fokus auf Wirkung.',
      content: deContent,
    },
    sv: {
      title: 'Skapa ett Ahrefs konto: komplett setup guide',
      topic: 'SEO',
      metaTitle: 'Skapa Ahrefs konto | Setup guide',
      metaDescription: 'Skapa ett Ahrefs konto och konfigurera det ratt: planval, forsta projekt och ett praktiskt SEO workflow.',
      content: svContent,
    },
    da: {
      title: 'Opret en Ahrefs konto: komplet setup guide',
      topic: 'SEO',
      metaTitle: 'Opret Ahrefs konto | Setup guide',
      metaDescription: 'Opret en Ahrefs konto og saet den rigtigt op: planvalg, forste projekt og et praktisk SEO workflow.',
      content: daContent,
    },
    fr: {
      title: 'Creer un compte Ahrefs: guide setup complet',
      topic: 'SEO',
      metaTitle: 'Creer un compte Ahrefs | Guide setup',
      metaDescription: 'Creer un compte Ahrefs et bien le configurer: choix du plan, premier projet et workflow SEO oriente performance.',
      content: frContent,
    },
    it: {
      title: 'Creare un account Ahrefs: guida setup completa',
      topic: 'SEO',
      metaTitle: 'Creare account Ahrefs | Guida setup',
      metaDescription: 'Creare un account Ahrefs e configurarlo bene: scelta piano, primo progetto e workflow SEO orientato ai risultati.',
      content: itContent,
    },
  },
}

async function publishArticle() {
  try {
    console.log('Publishing Ahrefs account article to database...')

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
