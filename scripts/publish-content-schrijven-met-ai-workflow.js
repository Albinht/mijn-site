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
AI kan content sneller maken. Maar zonder duidelijke werkwijze maakt AI vooral middelmatige tekst op schaal.

Daarom gebruik ik AI niet als schrijver, maar als versneller binnen een vaste redactionele workflow. In dit artikel laat ik precies zien hoe ik content met AI schrijf zonder in te leveren op kwaliteit, betrouwbaarheid en SEO-resultaat.

## Waarom de meeste AI-content niet presteert

AI-content faalt meestal op drie punten:

- intent mismatch: de pagina beantwoordt de zoekvraag niet scherp genoeg
- inhoud zonder expertise: veel woorden, weinig nieuwe inzichten
- onvoldoende redactie: feitelijke fouten, generieke structuur en zwakke positionering

Als je dit niet afvangt, krijg je wel output maar geen duurzame groei.

## Mijn rolverdeling: AI versus mens

Ik houd de strategische en redactionele keuzes altijd menselijk.

AI doet vooral:

- ideevorming op basis van semantische varianten
- eerste structuurvoorstellen en outline-opties
- alternatieven voor titels, intro's en invalshoeken
- versnellen van herformuleringen

Ik doe altijd:

- zoekintentie en businessdoel bepalen
- SERP-analyse en concurrentie-inschatting
- inhoudelijke keuzes en positionering
- eindredactie, factcheck en publicatiebesluit

Kort: AI geeft opties. Ik neem beslissingen.

## De workflow die ik gebruik (stap voor stap)

## Stap 1: briefing op businessniveau

Eerst bepaal ik:

- voor wie is deze pagina
- welk probleem lossen we op
- welke conversie telt (lead, aanvraag, aankoop)
- welke fase van de customer journey hoort hierbij

Zonder deze briefing is elke prompt ruis.

## Stap 2: intent en SERP realiteit

Daarna analyseer ik de zoekresultaten:

- welke paginatypes ranken (gids, category, landing page)
- welke invalshoeken werken
- welke SERP-features klikken wegtrekken

Relevante verdieping:

- [Hoger in Google komen](/blog/hoog-in-google)
- [Wat is SEO optimalisatie](/blog/wat-is-seo-optimalisatie)

## Stap 3: topic en keywordcluster opzetten

Ik werk vanuit een cluster in plaats van losse zoekwoorden:

- 1 hoofdonderwerp (hub)
- 3-8 ondersteunende deelonderwerpen
- duidelijke interne linkstructuur

Tools en workflows:

- [Ahrefs Keywords Explorer stappenplan](/blog/ahrefs-keywords-explorer-stappenplan)
- [Content gap analyse in Ahrefs](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Traffic potential versus volume](/blog/ahrefs-traffic-potential-vs-volume)

## Stap 4: AI-briefing en promptstack

Ik gebruik geen eenmalige superprompt, maar een promptstack:

1. context prompt: doelgroep, intent, tone, verboden claims
2. structuur prompt: outline met argumentlogica
3. verrijkingsprompt: voorbeelden, tegenargumenten, nuance
4. revisieprompt: compactheid, helderheid, consistentie

Dat geeft controle per fase en voorkomt wollige output.

## Stap 5: eerste concept genereren

AI maakt bij mij een ruwe versie die nog niet publiceerbaar is. Die versie gebruik ik om:

- gaten in de argumentatie te zien
- overlap met bestaande content te signaleren
- kansen voor extra diepgang te vinden

De draft is een werkdocument, geen eindproduct.

## Stap 6: menselijke herschrijving

Dit is de belangrijkste stap. Hier voeg ik toe wat AI standaard mist:

- praktijkervaring
- context uit echte projecten
- duidelijke standpunten en afwegingen
- concrete voorbeelden die echt zijn

Zonder deze laag krijg je inwisselbare content.

## Stap 7: kwaliteitscontrole (must-pass checklist)

Voor publicatie loopt elke pagina door vaste checks:

- klopt elke feitelijke claim
- beantwoordt de pagina de hoofdvraag in de eerste secties
- is de structuur logisch en scanbaar
- sluit tone of voice aan op merk en doelgroep
- is er interne linking naar relevante vervolgpagina's
- is de CTA duidelijk en passend bij intent

Technische checks:

- [Technische SEO analyse checklist](/blog/technische-seo-analyse-stappenplan-checklist)

## Stap 8: publicatie en feedbackloop

Na publicatie monitor ik:

- impressions en CTR in Search Console
- beweging van posities op hoofd- en ondersteunende zoekwoorden
- engagement en conversie in GA4/CRM

Pagina's in positie 4-20 krijgen prioriteit voor updates.

## Hoe ik AI-content op schaal inzet zonder kwaliteitsverlies

Bij grotere websites gebruik ik AI vooral voor consistentie en snelheid in voorbereiding, niet voor blind publiceren.

Werkwijze op schaal:

- vaste templates per paginatype
- gedeelde promptbibliotheek per intenttype
- redactionele richtlijnen per merk
- reviewmomenten met een mens als eindverantwoordelijke

Zo groeit output, terwijl kwaliteit beheersbaar blijft.

## Veelgemaakte fouten bij content schrijven met AI

- publiceren zonder SERP-check
- volume kiezen boven intent
- alles laten sturen door 1 prompt
- te laat redigeren
- geen interne links en geen clusterlogica
- geen meetplan na publicatie

## Praktische interne route

Als je dit proces goed wilt opbouwen, volg dan deze route:

1. [Ahrefs account aanmaken](/blog/ahrefs-account-aanmaken-simpele-uitleg)
2. [Keywords Explorer workflow](/blog/ahrefs-keywords-explorer-stappenplan)
3. [Site Explorer workflow](/blog/ahrefs-site-explorer-simpel-stappenplan)
4. [Content gap analyse](/blog/content-gap-analyse-ahrefs-stappenplan)
5. [Zoekmachine marketing](/blog/zoekmachine-marketing)

## Conclusie

AI maakt mij sneller. Niet slimmer.

De kwaliteit van content komt nog steeds uit strategie, redactie en vakinhoudelijke keuzes. Gebruik AI daarom als productie-assistent binnen een streng proces, niet als vervanging van de redacteur.

Dan krijg je het beste van beide werelden: meer output en betere content.
`.trim()

const enContent = `
AI can speed up content production, but without a clear editorial process it mostly produces average text at scale.

My workflow:

1. Start with business intent and conversion goals.
2. Validate search intent via SERP analysis.
3. Build a cluster plan (hub + supporting pages).
4. Use a prompt stack instead of one big prompt.
5. Generate a rough draft with AI.
6. Rewrite with human expertise and positioning.
7. Run quality gates (facts, intent fit, structure, links, CTA).
8. Measure and iterate using Search Console and GA4.

Related internal guides:

- [Ahrefs account setup](/blog/ahrefs-account-aanmaken-simpele-uitleg)
- [Keywords Explorer workflow](/blog/ahrefs-keywords-explorer-stappenplan)
- [Content gap analysis](/blog/content-gap-analyse-ahrefs-stappenplan)
- [Technical SEO checklist](/blog/technische-seo-analyse-stappenplan-checklist)

Conclusion: AI is a production assistant. Strategy and quality control remain human work.
`.trim()

const deContent = `
AI beschleunigt Content. Ohne Prozess skaliert aber nur Mittelmass.

Mein Ablauf:

1. Business Ziel und Suchintention definieren.
2. SERP pruefen und Seitentyp bestaetigen.
3. Themencluster planen.
4. Prompt Stack statt Einmal Prompt nutzen.
5. Rohentwurf mit AI erzeugen.
6. Menschlich umschreiben und schaerfen.
7. Qualitaetschecks vor Verteilung.
8. Mit Search Console und GA4 nachsteuern.

Interne Links:

- /blog/ahrefs-account-aanmaken-simpele-uitleg
- /blog/ahrefs-keywords-explorer-stappenplan
- /blog/content-gap-analyse-ahrefs-stappenplan
- /blog/technische-seo-analyse-stappenplan-checklist

Fazit: AI hilft bei Output. Qualitaet bleibt redaktionelle Arbeit.
`.trim()

const svContent = `
AI kan oka takten i produktionen, men utan process far du mest medioker text i stor skala.

Min modell:

1. Satt affarsmal och intent.
2. Kontrollera SERP och sidtyp.
3. Bygg topic cluster.
4. Anvand prompt stack.
5. Skapa draft med AI.
6. Skriv om med mansklig expertis.
7. Kor kvalitetskontroller.
8. Mata och iterera.

Internt:

- /blog/ahrefs-account-aanmaken-simpele-uitleg
- /blog/ahrefs-keywords-explorer-stappenplan
- /blog/content-gap-analyse-ahrefs-stappenplan
- /blog/technische-seo-analyse-stappenplan-checklist
`.trim()

const daContent = `
AI kan o ge hastighed i content produktion, men uden proces skalerer du mest middelmaadig tekst.

Min tilgang:

1. Definer forretningsmaal og intent.
2. Bekraeft sideformat via SERP.
3. Planlaeg topic cluster.
4. Brug prompt stack.
5. Lav et raadt udkast med AI.
6. Omskriv med menneskelig ekspertise.
7. Koer kvalitetscheck.
8. Maal og optimer.

Interne links:

- /blog/ahrefs-account-aanmaken-simpele-uitleg
- /blog/ahrefs-keywords-explorer-stappenplan
- /blog/content-gap-analyse-ahrefs-stappenplan
- /blog/technische-seo-analyse-stappenplan-checklist
`.trim()

const frContent = `
L AI accelere la production de contenu, mais sans processus elle produit surtout du contenu moyen a grande echelle.

Ma methode:

1. Definir objectif business et intention.
2. Valider le format via la SERP.
3. Construire un cluster de sujets.
4. Utiliser une pile de prompts.
5. Generer un brouillon avec AI.
6. Reecrire avec expertise humaine.
7. Appliquer des controles qualite.
8. Mesurer et iterer.

Guides internes:

- /blog/ahrefs-account-aanmaken-simpele-uitleg
- /blog/ahrefs-keywords-explorer-stappenplan
- /blog/content-gap-analyse-ahrefs-stappenplan
- /blog/technische-seo-analyse-stappenplan-checklist
`.trim()

const itContent = `
AI accelera la produzione di contenuti, ma senza processo scala solo testo medio.

Il mio flusso:

1. Definire obiettivo business e intent.
2. Validare formato pagina in SERP.
3. Costruire cluster tematico.
4. Usare una prompt stack.
5. Generare bozza con AI.
6. Riscrivere con competenza umana.
7. Passare i quality check.
8. Misurare e iterare.

Link interni:

- /blog/ahrefs-account-aanmaken-simpele-uitleg
- /blog/ahrefs-keywords-explorer-stappenplan
- /blog/content-gap-analyse-ahrefs-stappenplan
- /blog/technische-seo-analyse-stappenplan-checklist
`.trim()

const article = {
  slug: 'content-schrijven-met-ai-workflow',
  topic: 'Content',
  status: 'PUBLISHED',
  title: 'Content schrijven met AI: mijn workflow voor kwaliteit op schaal',
  content: nlContent,
  translations: {
    en: {
      title: 'Writing content with AI: my quality-first workflow',
      topic: 'Content',
      metaTitle: 'Writing content with AI | Quality-first workflow',
      metaDescription: 'How to write content with AI without losing quality: intent, prompt stack, editorial checks, internal linking, and iteration.',
      content: enContent,
    },
    nl: {
      title: 'Content schrijven met AI: mijn workflow voor kwaliteit op schaal',
      topic: 'Content',
      metaTitle: 'Content schrijven met AI | Workflow voor kwaliteit',
      metaDescription: 'Leer hoe je AI inzet voor content zonder kwaliteitsverlies: intent, promptstack, redactiechecks, interne links en iteratie.',
      content: nlContent,
    },
    de: {
      title: 'Content mit AI schreiben: mein Qualitaetsworkflow',
      topic: 'Content',
      metaTitle: 'Content mit AI schreiben | Qualitaetsworkflow',
      metaDescription: 'So nutzt du AI fuer Content ohne Qualitaetsverlust: Intent, Prompt Stack, Redaktion und laufende Optimierung.',
      content: deContent,
    },
    sv: {
      title: 'Skriva content med AI: min kvalitetsworkflow',
      topic: 'Content',
      metaTitle: 'Skriva content med AI | Kvalitetsworkflow',
      metaDescription: 'Sa skriver du content med AI utan att tappa kvalitet: intent, prompt stack, redaktionell kontroll och uppfoljning.',
      content: svContent,
    },
    da: {
      title: 'Skriv content med AI: min kvalitetsworkflow',
      topic: 'Content',
      metaTitle: 'Skriv content med AI | Kvalitetsworkflow',
      metaDescription: 'Saadan bruger du AI til content uden kvalitetstab: intent, prompt stack, redaktionel kontrol og iterativ optimering.',
      content: daContent,
    },
    fr: {
      title: 'Ecrire du contenu avec AI: mon workflow qualite',
      topic: 'Content',
      metaTitle: 'Ecrire du contenu avec AI | Workflow qualite',
      metaDescription: 'Comment ecrire avec AI sans perdre en qualite: intention, prompts, controle editorial et optimisation continue.',
      content: frContent,
    },
    it: {
      title: 'Scrivere contenuti con AI: il mio workflow qualita',
      topic: 'Content',
      metaTitle: 'Scrivere contenuti con AI | Workflow qualita',
      metaDescription: 'Come usare AI per i contenuti senza perdere qualita: intent, prompt stack, revisione editoriale e iterazione.',
      content: itContent,
    },
  },
}

async function publishArticle() {
  try {
    console.log('Publishing AI content workflow article to database...')

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
