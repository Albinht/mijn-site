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
  slug: 'ahrefs-account-aanmaken-simpele-uitleg',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Ahrefs account aanmaken (en goed instellen): complete gids',
  content: `
Ahrefs is een van de meest gebruikte SEO tools voor keyword research, concurrentieanalyse en linkbuilding. Een account aanmaken is zo gedaan, maar de echte winst zit in: de juiste instellingen, een slim project, en een workflow die je elke week herhaalt.

## 1) Voor je start: bepaal je doel

Ahrefs kan veel. Als je alles tegelijk probeert, verdwaal je. Kies eerst waarvoor je het gaat gebruiken:

- Keyword research: nieuwe topics en pagina ideeen vinden
- Content planning: clusters bouwen en prioriteiten kiezen
- Concurrentieanalyse: zien waar anderen groeien
- Linkbuilding: kansen vinden en verloren links spotten
- Technische SEO: quick scan met Site Audit (niet als vervanging van Search Console)

Je doel bepaalt welk abonnement en welke instellingen je nodig hebt.

## 2) Abonnement kiezen (zonder oude prijzen)

Ahrefs heeft meestal meerdere plannen (bijv. Lite/Standard/Advanced/Agency). Namen, limieten en prijzen kunnen veranderen, dus kijk altijd naar de actuele Ahrefs pricing pagina. Dit is hoe je kiest zonder te verdwalen:

### 4 vragen die het antwoord geven

- Met hoeveel mensen ga je inloggen? (users)
- Hoeveel websites/klanten wil je beheren? (projects)
- Hoe vaak/hoe diep wil je crawlen en hoe groot zijn je sites? (crawl credits)
- Hoeveel keywords wil je structureel tracken? (rank tracker limits)

### Praktische vuistregels

- Freelancer of kleine site: start klein, focus op 1 project en 30-100 tracked keywords.
- MKB of meerdere sites: je wil genoeg projects + crawl om maandelijks te auditen.
- Agency: team toegang, meerdere projecten, en genoeg crawl voor grotere sites.

Tip: kies liever een plan dat je echt gebruikt, dan een plan waar je "mogelijk later" iets aan hebt.

## 3) Ahrefs account aanmaken (stappen)

De signup zelf is meestal rechttoe rechtaan:

1. Ga naar Ahrefs en klik op starten (trial of direct plan).
2. Maak je login aan en bevestig je e-mail.
3. Vul bedrijfsgegevens in (voor facturatie).
4. Kies betaalmethode en rond af.
5. Log in en zet meteen 2 dingen goed:
- Land/taal instellingen (waar je wil ranken)
- Team access (als je met meerdere mensen werkt)

## 4) Zet je eerste project goed neer (dit scheelt uren)

Na signup wil je niet "random rapporten". Maak 1 goed project dat je de komende weken blijft gebruiken.

### Project checklist

- Target: domein vs subdomein vs folder (kies scope die bij je strategie past)
- Markt: kies het juiste land en taal (dit is de #1 fout)
- Crawl instellingen: start conservatief en breid uit als alles klopt

### Site Audit (waar ik op let)

Site Audit is handig als snelle technische scan. Gebruik het om issues te vinden en te prioriteren, niet om blind "alles wat rood is" te fixen.

Zet bij de eerste crawl dit goed:

- Crawl source: begin met sitemap + interne links
- Crawl limit: genoeg om je belangrijkste paginas te zien (niet meteen maximaal)
- Include/exclude: sluit staging, login, parameters of irrelevante folders uit
- Schedule: wekelijks voor sites met veel changes, anders maandelijks

## 5) Quick start: je eerste 30 minuten in Ahrefs

Als je maar 30 minuten hebt, doe dan dit:

1. Site Explorer: plak je domein en check trend (traffic/keywords) op 6-12 maanden.
2. Top pages: welke paginas dragen nu het meeste bij?
3. Organic keywords: filter op posities 4-20 voor quick wins.
4. Backlinks: check "new" en "lost" om risico en kansen te zien.
5. Schrijf een actielijst van 10 items (impact > effort).

## 6) Rank Tracker slim instellen (zonder overkill)

Rank tracking is pas nuttig als je het klein en relevant houdt.

- Start met 30-100 keywords (niet 1000)
- Groepeer per landingspagina of thema
- Kies device (mobile vs desktop) dat bij je doelgroep past
- Track 3-5 echte concurrenten (geen Wikipedia of marketplaces als dat niet je business is)

Meet niet alleen posities. Koppel dit altijd terug naar:

- Search Console clicks/impressions (realiteit)
- Conversies in GA4 (waarde)

## 7) Veelgemaakte fouten

- Verkeerd land gekozen: je ziet dan "perfecte" data die niet klopt.
- Alleen naar DR kijken: DR is een metric, geen KPI.
- Te veel keywords tracken: je verliest focus en betaalt voor ruis.
- Alles fixen wat de audit zegt: prioriteer indexatie, interne links, grote fouten.
- Volume boven intent: 10.000 searches zonder intent is niets waard.

## Mini checklist

- Doel gekozen (keyword research, linkbuilding, audit, content)
- Juiste land/talen ingesteld
- 1 project aangemaakt met logische scope
- Eerste crawl gedraaid + top issues genoteerd
- Rank Tracker gestart met korte, relevante lijst

## Conclusie

Een Ahrefs account aanmaken is makkelijk. Resultaat komt van een goed ingericht project en een vaste routine.

Wil je dat ik je Ahrefs setup doorloop en er meteen een actieplan van maak? Check /work-with-me.
`.trim(),
  translations: {
    en: {
      title: 'Create an Ahrefs account (and set it up right): complete guide',
      topic: 'SEO',
      metaTitle: 'Create an Ahrefs account | Setup and workflow',
      metaDescription: 'Create an Ahrefs account and set it up correctly: pick a plan, configure your first project, and use a weekly workflow for SEO.',
      content: `
Ahrefs is a widely used SEO tool for keyword research, competitor analysis, and link building. Creating an account is fast, but results come from: correct market settings, a clean first project, and a workflow you repeat every week.

## 1) Before you start: pick your goal

Ahrefs can do a lot. If you try everything at once, you lose focus. Pick your primary use case:

- Keyword research: new topics and page ideas
- Content planning: build clusters and priorities
- Competitor analysis: see what is driving growth
- Link building: find opportunities and track lost links
- Technical SEO: quick scan with Site Audit (not a replacement for Search Console)

## 2) Choose a plan (do not rely on old pricing)

Ahrefs has multiple plans (names, limits, and pricing can change). Choose based on your needs, not on a screenshot of old prices.

### The 4 questions that decide it

- How many people need access? (users)
- How many websites/clients will you manage? (projects)
- How large are your sites and how often will you crawl? (crawl credits)
- How many keywords will you track over time? (rank tracker limits)

### Rules of thumb

- Solo / small site: start small, focus on one project, track 30-100 keywords.
- Multiple sites: ensure you have enough projects and crawl for monthly audits.
- Agency: team access + many projects + enough crawl for larger sites.

## 3) Create your Ahrefs account (steps)

Signup is usually straightforward:

1. Go to Ahrefs and start a trial or plan.
2. Create your login and verify your email.
3. Add company details (billing).
4. Add payment method and finish.
5. After login, set two things immediately:
- Country/language settings (where you want to rank)
- Team access (if multiple people work in the account)

## 4) Build your first project (this saves hours)

Do not start with random reports. Create one strong project you will keep using.

### Project checklist

- Scope: domain vs subdomain vs folder
- Market: correct country and language (the #1 mistake)
- Crawl settings: start conservative and expand after validation

### Site Audit (how to set it up)

Site Audit is useful for a quick technical scan. Use it to find issues and prioritize, not to blindly fix every warning.

Good first crawl settings:

- Crawl source: start with sitemap + internal links
- Crawl limit: enough to cover key pages (do not max out by default)
- Include/exclude: skip staging, login areas, heavy parameters, irrelevant folders
- Schedule: weekly for fast-moving sites, otherwise monthly

## 5) Your first 30 minutes in Ahrefs (quick start)

If you only have 30 minutes:

1. Site Explorer: paste your domain and check the 6-12 month trend (traffic/keywords).
2. Top pages: identify what currently drives traffic.
3. Organic keywords: filter positions 4-20 for quick wins.
4. Backlinks: review "new" and "lost" for risk and opportunities.
5. Write a 10-item action list (impact > effort).

## 6) Set up Rank Tracker (without overkill)

Rank tracking works when you keep it small and relevant:

- Start with 30-100 keywords
- Group by landing page or topic
- Choose device (mobile vs desktop) that matches your audience
- Track 3-5 real competitors (not Wikipedia or marketplaces if irrelevant)

Always connect rankings to reality:

- Search Console clicks/impressions
- GA4 conversions

## 7) Common mistakes

- Wrong country: the data looks "great" but is useless.
- Treating DR as a KPI: DR is a metric, not a business outcome.
- Tracking too many keywords: you pay for noise.
- Fixing everything from the audit: prioritize indexation and high-impact issues.
- Picking keywords by volume only: intent matters more.

## Mini checklist

- Goal selected (keywords, links, audits, content)
- Correct market settings
- One project created with the right scope
- First crawl completed and key issues noted
- Rank Tracker started with a focused list

## Conclusion

Creating an Ahrefs account is easy. Performance comes from a clean setup and a consistent routine.

Want me to review your Ahrefs setup and turn it into an action plan? See /work-with-me.
`.trim(),
    },
    nl: {
      title: 'Ahrefs account aanmaken (en goed instellen): complete gids',
      topic: 'SEO',
      metaTitle: 'Ahrefs account aanmaken | Setup en workflow',
      metaDescription: 'Ahrefs account aanmaken en goed instellen: plan kiezen, eerste project configureren en een praktische routine voor SEO, content en linkbuilding.',
      content: `
Ahrefs is een van de meest gebruikte SEO tools voor keyword research, concurrentieanalyse en linkbuilding. Een account aanmaken is zo gedaan, maar de echte winst zit in: de juiste instellingen, een slim project, en een workflow die je elke week herhaalt.

## 1) Voor je start: bepaal je doel

Ahrefs kan veel. Als je alles tegelijk probeert, verdwaal je. Kies eerst waarvoor je het gaat gebruiken:

- Keyword research: nieuwe topics en pagina ideeen vinden
- Content planning: clusters bouwen en prioriteiten kiezen
- Concurrentieanalyse: zien waar anderen groeien
- Linkbuilding: kansen vinden en verloren links spotten
- Technische SEO: quick scan met Site Audit (niet als vervanging van Search Console)

Je doel bepaalt welk abonnement en welke instellingen je nodig hebt.

## 2) Abonnement kiezen (zonder oude prijzen)

Ahrefs heeft meestal meerdere plannen (bijv. Lite/Standard/Advanced/Agency). Namen, limieten en prijzen kunnen veranderen, dus kijk altijd naar de actuele Ahrefs pricing pagina. Dit is hoe je kiest zonder te verdwalen:

### 4 vragen die het antwoord geven

- Met hoeveel mensen ga je inloggen? (users)
- Hoeveel websites/klanten wil je beheren? (projects)
- Hoe vaak/hoe diep wil je crawlen en hoe groot zijn je sites? (crawl credits)
- Hoeveel keywords wil je structureel tracken? (rank tracker limits)

### Praktische vuistregels

- Freelancer of kleine site: start klein, focus op 1 project en 30-100 tracked keywords.
- MKB of meerdere sites: je wil genoeg projects + crawl om maandelijks te auditen.
- Agency: team toegang, meerdere projecten, en genoeg crawl voor grotere sites.

Tip: kies liever een plan dat je echt gebruikt, dan een plan waar je "mogelijk later" iets aan hebt.

## 3) Ahrefs account aanmaken (stappen)

De signup zelf is meestal rechttoe rechtaan:

1. Ga naar Ahrefs en klik op starten (trial of direct plan).
2. Maak je login aan en bevestig je e-mail.
3. Vul bedrijfsgegevens in (voor facturatie).
4. Kies betaalmethode en rond af.
5. Log in en zet meteen 2 dingen goed:
- Land/taal instellingen (waar je wil ranken)
- Team access (als je met meerdere mensen werkt)

## 4) Zet je eerste project goed neer (dit scheelt uren)

Na signup wil je niet "random rapporten". Maak 1 goed project dat je de komende weken blijft gebruiken.

### Project checklist

- Target: domein vs subdomein vs folder (kies scope die bij je strategie past)
- Markt: kies het juiste land en taal (dit is de #1 fout)
- Crawl instellingen: start conservatief en breid uit als alles klopt

### Site Audit (waar ik op let)

Site Audit is handig als snelle technische scan. Gebruik het om issues te vinden en te prioriteren, niet om blind "alles wat rood is" te fixen.

Zet bij de eerste crawl dit goed:

- Crawl source: begin met sitemap + interne links
- Crawl limit: genoeg om je belangrijkste paginas te zien (niet meteen maximaal)
- Include/exclude: sluit staging, login, parameters of irrelevante folders uit
- Schedule: wekelijks voor sites met veel changes, anders maandelijks

## 5) Quick start: je eerste 30 minuten in Ahrefs

Als je maar 30 minuten hebt, doe dan dit:

1. Site Explorer: plak je domein en check trend (traffic/keywords) op 6-12 maanden.
2. Top pages: welke paginas dragen nu het meeste bij?
3. Organic keywords: filter op posities 4-20 voor quick wins.
4. Backlinks: check "new" en "lost" om risico en kansen te zien.
5. Schrijf een actielijst van 10 items (impact > effort).

## 6) Rank Tracker slim instellen (zonder overkill)

Rank tracking is pas nuttig als je het klein en relevant houdt.

- Start met 30-100 keywords (niet 1000)
- Groepeer per landingspagina of thema
- Kies device (mobile vs desktop) dat bij je doelgroep past
- Track 3-5 echte concurrenten (geen Wikipedia of marketplaces als dat niet je business is)

Meet niet alleen posities. Koppel dit altijd terug naar:

- Search Console clicks/impressions (realiteit)
- Conversies in GA4 (waarde)

## 7) Veelgemaakte fouten

- Verkeerd land gekozen: je ziet dan "perfecte" data die niet klopt.
- Alleen naar DR kijken: DR is een metric, geen KPI.
- Te veel keywords tracken: je verliest focus en betaalt voor ruis.
- Alles fixen wat de audit zegt: prioriteer indexatie, interne links, grote fouten.
- Volume boven intent: 10.000 searches zonder intent is niets waard.

## Mini checklist

- Doel gekozen (keyword research, linkbuilding, audit, content)
- Juiste land/talen ingesteld
- 1 project aangemaakt met logische scope
- Eerste crawl gedraaid + top issues genoteerd
- Rank Tracker gestart met korte, relevante lijst

## Conclusie

Een Ahrefs account aanmaken is makkelijk. Resultaat komt van een goed ingericht project en een vaste routine.

Wil je dat ik je Ahrefs setup doorloop en er meteen een actieplan van maak? Check /work-with-me.
`.trim(),
    },
    de: {
      title: 'Ahrefs Konto erstellen und richtig einrichten: kompletter Guide',
      topic: 'SEO',
      metaTitle: 'Ahrefs Konto erstellen | Setup und Workflow',
      metaDescription: 'Ahrefs Konto erstellen und sauber einrichten: Plan waehlen, erstes Projekt konfigurieren und eine praktische SEO Routine starten.',
      content: `
Ahrefs ist ein SEO Tool fuer Keyword Research, Wettbewerbsanalyse und Linkbuilding. Ein Konto ist schnell erstellt, aber der Unterschied kommt vom Setup: richtige Markt-Einstellungen, ein sauberes Projekt und eine Routine, die du regelmaessig nutzt.

## 1) Ziel definieren

Waehle zuerst, wofuer du Ahrefs nutzen willst:

- Keywords und Content Ideen
- Content Planung (Cluster + Prioritaeten)
- Wettbewerbsanalyse
- Linkbuilding (Chancen + Lost Links)
- Technische Checks via Site Audit (kein Ersatz fuer Search Console)

## 2) Plan waehlen (ohne alte Preise)

Plaene, Limits und Preise koennen sich aendern. Entscheide ueber diese 4 Fragen:

- Wie viele Nutzer brauchen Zugriff?
- Wie viele Projekte/Websites?
- Wie oft und wie tief willst du crawlen? (crawl credits)
- Wie viele Keywords willst du tracken? (Rank Tracker)

## 3) Konto erstellen

Kurz:

1. Signup starten (Trial oder Plan)
2. E-Mail bestaetigen
3. Billing Daten + Zahlung
4. Nach Login: Land/Sprache und Team Zugriffe setzen

## 4) Erstes Projekt einrichten

- Scope: Domain vs Subdomain vs Folder
- Markt: Land/Sprache korrekt (Top Fehler)
- Site Audit: mit Sitemap + internen Links starten
- Excludes: staging, login, irrelevante Parameter

## 5) 30 Minuten Quick Start

1. Site Explorer: 6-12 Monate Trend
2. Top Pages: was bringt Traffic?
3. Organic Keywords: Filter Position 4-20
4. Backlinks: new/lost
5. 10-Punkte Action List schreiben

## 6) Rank Tracker ohne Overkill

- Starte mit 30-100 Keywords
- Gruppiere nach Landing Page oder Thema
- Track 3-5 echte Wettbewerber
- Verbinde mit Search Console + GA4 Conversions

## Fazit

Ahrefs Konto erstellen ist leicht. Wachstum kommt von sauberem Setup und Wiederholung.
`.trim(),
    },
    sv: {
      title: 'Skapa ett Ahrefs konto och stalla in det ratt: komplett guide',
      topic: 'SEO',
      metaTitle: 'Skapa Ahrefs konto | Setup och workflow',
      metaDescription: 'Skapa ett Ahrefs konto och stalla in det korrekt: valj plan, bygg ett forsta projekt och folj en praktisk SEO rutin.',
      content: `
Ahrefs ar ett SEO verktyg for keyword research, konkurrentanalys och linkbuilding. Ett konto ar snabbt att skapa, men effekten kommer fran setup: ratt marknad, ett bra projekt och en rutin du upprepar.

## 1) Valj ditt mal

- Keyword research och content ideer
- Content planering (clusters + prioritet)
- Konkurrentanalys
- Linkbuilding (new/lost links)
- Teknisk scan via Site Audit (inte ersattning for Search Console)

## 2) Valj plan baserat pa behov

Planer och priser kan andras. Valj utifran:

- Antal users
- Antal projects
- Crawl credits
- Rank Tracker limits

## 3) Skapa konto

Signup, verifiera e-post, billing och betalning. Efter login: stalla in land/marknad direkt (vanligaste misstaget).

## 4) Skapa forsta projektet

- Scope: domain vs subdomain vs folder
- Site Audit: starta med sitemap + interna lankar
- Exkludera staging, login och onodiga parametrar

## 5) 30 min quick start

1. Site Explorer trend (6-12 manader)
2. Top pages
3. Organic keywords: filter position 4-20
4. Backlinks: new/lost
5. Kort action list

## Slutsats

Ahrefs konto ar enkelt. Ratt setup och rutin gor skillnaden.
`.trim(),
    },
    da: {
      title: 'Opret en Ahrefs konto og saet den rigtigt op: komplet guide',
      topic: 'SEO',
      metaTitle: 'Opret Ahrefs konto | Setup og workflow',
      metaDescription: 'Opret en Ahrefs konto og saet den korrekt op: vaelg plan, opret et forste projekt og folg en praktisk SEO rutine.',
      content: `
Ahrefs er et SEO vaerktoj til keyword research, konkurrentanalyse og linkbuilding. En konto er hurtig at oprette, men resultater kommer fra setup: korrekt marked, et godt forste projekt og en rutine du gentager.

## 1) Vaelg dit maal

- Keyword research og content ideer
- Content plan (clusters + prioritet)
- Konkurrentanalyse
- Linkbuilding (new/lost links)
- Teknisk scan via Site Audit (ikke erstatning for Search Console)

## 2) Vaelg plan efter behov

Planer og priser kan aendre sig. Vaelg ud fra:

- Antal users
- Antal projects
- Crawl credits
- Rank Tracker limits

## 3) Opret konto

Signup, verifier e-mail, billing og betaling. Efter login: vaelg land/marked med det samme (stor fejl hvis forkert).

## 4) Saet forste projekt op

- Scope: domain vs subdomain vs folder
- Site Audit: start med sitemap + interne links
- Exkluder staging, login og tunge parametre

## 5) 30 min quick start

1. Site Explorer trend (6-12 maaneder)
2. Top pages
3. Organic keywords: filter position 4-20
4. Backlinks: new/lost
5. Kort action list

## Konklusion

Ahrefs konto er let. Godt setup og fast rutine giver effekt.
`.trim(),
    },
    fr: {
      title: 'Creer un compte Ahrefs et bien le configurer: guide complet',
      topic: 'SEO',
      metaTitle: 'Creer un compte Ahrefs | Setup et workflow',
      metaDescription: 'Creer un compte Ahrefs et le configurer correctement: choix du plan, premier projet et une routine SEO pratique.',
      content: `
Ahrefs est un outil SEO pour la recherche de mots-cles, l analyse de la concurrence et le linkbuilding. Creer un compte est rapide, mais le vrai gain vient du setup: bon marche (pays), bon projet, et une routine que vous repetez chaque semaine.

## 1) Choisir votre objectif

- Recherche de mots-cles et idees de contenu
- Plan de contenu (clusters + priorites)
- Analyse des concurrents
- Linkbuilding (new/lost links)
- Scan technique via Site Audit (pas un remplacement de Search Console)

## 2) Choisir le plan

Les plans et prix peuvent changer. Choisissez selon:

- Nombre d utilisateurs
- Nombre de projets
- Crawl credits
- Limites Rank Tracker

## 3) Creer le compte

Signup, verification e-mail, billing et paiement. Apres login: definir le bon pays/marche tout de suite (erreur #1 si faux).

## 4) Creer le premier projet

- Scope: domaine vs sous-domaine vs dossier
- Site Audit: commencer avec sitemap + liens internes
- Exclure staging, login et parametres inutiles

## 5) 30 min quick start

1. Site Explorer trend (6-12 mois)
2. Top pages
3. Organic keywords: filtrer positions 4-20
4. Backlinks: new/lost
5. Liste d actions courte

## Conclusion

Creer un compte Ahrefs est simple. Un bon setup et un workflow repetable font la difference.
`.trim(),
    },
    it: {
      title: 'Creare un account Ahrefs e configurarlo bene: guida completa',
      topic: 'SEO',
      metaTitle: 'Creare account Ahrefs | Setup e workflow',
      metaDescription: 'Creare un account Ahrefs e impostarlo correttamente: scelta del piano, primo progetto e una routine SEO pratica.',
      content: `
Ahrefs e uno strumento SEO per keyword research, analisi competitor e linkbuilding. Creare un account e veloce, ma il valore arriva dal setup: mercato giusto, primo progetto fatto bene e una routine che ripeti ogni settimana.

## 1) Definisci l obiettivo

- Keyword research e idee contenuto
- Piano contenuti (cluster + priorita)
- Analisi competitor
- Linkbuilding (new/lost links)
- Scan tecnico con Site Audit (non sostituisce Search Console)

## 2) Scegli il piano

Piani e prezzi possono cambiare. Scegli in base a:

- Numero utenti
- Numero progetti
- Crawl credits
- Limiti Rank Tracker

## 3) Crea l account

Signup, verifica e-mail, billing e pagamento. Dopo login: imposta subito paese/mercato (errore #1 se sbagli).

## 4) Crea il primo progetto

- Scope: dominio vs sottodominio vs cartella
- Site Audit: inizia con sitemap + link interni
- Escludi staging, login e parametri inutili

## 5) 30 min quick start

1. Site Explorer trend (6-12 mesi)
2. Top pages
3. Organic keywords: filtra posizioni 4-20
4. Backlinks: new/lost
5. Lista azioni corta

## Conclusione

Account facile. Setup pulito e workflow ripetibile fanno la differenza.
`.trim(),
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
