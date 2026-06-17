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

const fence = '```'

const article = {
  slug: 'hoe-richten-in-ai-overviews-data-gedreven-strategie',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Hoe je rankt in AI Overviews: Wat echt werkt (gebaseerd op data, niet gissingen)',
  content: `
## AI Overviews domineren het zoeklandschap

Het zoeklandschap verandert razendsnel. AI Overviews verschijnen nu bij ruim 20% van alle zoekopdrachten, en voor vraag-gebaseerde queries loopt dit op tot bijna 60%.

Voor veel marketeers voelt dit als een bedreiging. Onderzoek van Ahrefs toont aan dat AI Overviews kunnen leiden tot een click-through rate daling van 34,5%, terwijl Seer Interactive zelfs dalingen van 61% rapporteert.

Maar hier is de realiteit: AI Overviews zijn niet meer weg te denken uit het zoeklandschap. De keuze is niet óf we ermee aan de slag gaan, maar hoe we ons aanpassen.

Vandaag de dag gaat SERP-zichtbaarheid meer over **brand awareness** en minder over pure traffic.

Als je niet rankt in een AI Overview, word je simpelweg niet gezien. Punt.

## Wat betekent "ranken" in AI Overviews?

Wanneer je pagina geciteerd wordt binnen het AI-search antwoord—meestal bovenaan de SERPs—weer je effectief aan het "ranken" in een AI Overview.

De top geciteerde URL is direct zichtbaar voor zoekers op desktop zonder enige interactie. De top drie URL's worden zichtbaar als gebruikers op "Meer weergeven" klikken, en alle geciteerde bronnen worden zichtbaar als iemand specifiek de volledige lijst uitklapt.

Belangrijk om te begrijpen: deze "rankings" zijn niet definitief. Google's AI-samenvattingen zijn niet-deterministisch, wat betekent dat ze bij elke vernieuwing veranderen—en daarmee ook de URL's die ze citeren.

Hier is wat we weten over ranken in AI Overviews, gebaseerd op data.

## 1. Focus op informatieve, vraag-gebaseerde queries

Uit een analyse van 146 miljoen SERPs blijkt dat AI Overviews triggeren op 21% van alle keywords—maar bepaalde query-types triggeren ze veel vaker.

AI Overviews verschijnen in:
- 57,9% van alle vraag-queries
- 46,4% van queries met 7+ woorden
- 59,8% van "waarom" vragen (reason queries)
- 57,4% van ja/nee vragen (bool queries)
- 47,3% van definitie-queries

Daarnaast is 99,9% van alle AI Overview keywords puur informatief van aard.

**Waarom is dit belangrijk?** Omdat het begrijpen welke queries AI Overviews triggeren je helpt bepalen welke content types en topics je moet targeten.

Als je focus topics bijvoorbeeld allemaal informatief zijn, krijg je meer AI Overview concurrentie—maar heb je ook meer kansen om geciteerd te worden.

**Praktisch advies:**
- Gebruik tools zoals Ahrefs Keywords Explorer om vraag-gebaseerde keywords in jouw industrie te vinden
- Filter op queries met 7+ woorden en informatieve intentie
- Check welke al AI Overviews triggeren
- Hoe meer je deze informatieve, vraag-gebaseerde topics bezit, hoe meer "real estate" je claimt in AI Overviews

## 2. Zorg dat je rankt in traditionele SERPs

Als je niet zichtbaar bent in traditionele zoekresultaten, is de kans klein dat je in AI Overviews verschijnt.

Uit een analyse van 1,9 miljoen AI Overview citaties bleek dat 76% ook rankt in de top 10, met een mediane positie van 2 voor de meest geciteerde URL's.

Dit logisch gezien hoe AI systemen werken. Ze gebruiken Retrieval Augmented Generation (RAG), waarbij ze putten uit zoekmachine indexes om hun trainingsdata aan te vullen.

Als Google je content niet oppikt in traditionele zoekresultaten, doen AI Overviews dat waarschijnlijk ook niet.

**Praktisch advies:**
- Check waar je target pages ranken voor relevante keywords
- Als je buiten de top 10 zit, focus dan eerst op het verbeteren van die rankings
- Monitor je target pages om te zien of je zoekoptimalisaties een effect hebben op je AI Overview zichtbaarheid

## 3. Focus op zoekintentie, niet op content lengte

AI Overviews geven niet om hoe lang je blog is—ze geven erom hoe goed je content de query beantwoordt.

Onderzoek toont een near-zero correlatie (~0,04) tussen woordenaantal en AI citaties.

Je hoofddoel moet zijn om de query van de gebruiker direct en vroeg te beantwoorden—het verbergen van de kern ("burying the lede") vertraagt alleen het semantische begrip van Large Language Models (LLM's).

**Een belangrijk inzicht:** Meer content is niet altijd beter. Uit onderzoek van Dan Petrovic blijkt dat "grounding" (het SERP content dat Google gebruikt als bronmateriaal voor AI Overviews) plateau't rond 540 woorden. Pagina's boven 2000 woorden zien afnemende returns.

Zijn conclusie: *"Density beats length. Focus on being the most relevant source for a query, not the longest."*

**Praktisch advies:**
- Target geen specifiek woordaantal
- Voeg niet zomaar meer content toe om je kansen te vergroten
- Laat het topic en de intentie bepalen hoeveel content je schrijft
- Gebruik tools zoals AlsoAsked of AnswerThePublic om vragen achter short-tail keywords te vinden
- Begrijp wat gebruikers willen weten wanneer ze een query zoeken

## 4. Optimaliseer voor fan-out queries om topics te bezitten

Onderzoek suggereert dat je je ranking in AI Overviews kunt verbeteren door vaker te verschijnen in "fan-out query" SERPs.

Wat is een fan-out query? Volgens Google's officiële documentatie voert het systeem bij elke zoekopdracht waarbij AI wordt getriggerd een "Query fan-out" uit, waarbij één query wordt opgesplitst in meerdere gerelateerde sub-queries.

Dit stelt Gemini—the model achter AI Overviews—in staat om verschillende facetten van een topic te verkennen en passages van meerdere sites te halen om een antwoord te construeren.

**Het cruciale inzicht:** Pagina's die ranken across deze fan-out queries zijn 161% waarschijnlijker om geciteerd te worden in de uiteindelijke AI Overview dan pagina's die alleen ranken voor de primaire zoekterm.

De Spearman correlatie tussen ranken voor fan-out queries en geciteerd worden in een AI Overview is 0,77—zeer sterk dus.

**Conclusie:** Ranken in AI Overviews gaat over het bouwen van diepe topical authority. Focus niet te veel op individuele keywords of geïsoleerde citaten. Schrijf content die meerdere aspecten van je target topic dekt.

**Praktisch advies:**
- Optimaliseer direct voor fan-out queries
- Gebruik tools om Google's fan-out queries te extraheren
- Map fan-out queries aan je bestaande content om topic gaps te vinden
- Bouw autoriteit across zoveel mogelijk gerelateerde queries
- Creëer content clusters rondom gerelateerde thema's, niet alleen single keywords

## 5. Bouw positieve brand mentions across meerdere properties

AI Overviews geven de voorkeur aan merken met wijdverspreide erkenning across artikelen, video's en forums op het web.

Dit is waar "surround sound SEO" toe doet—het maximaliseren van je "real estate" op hoge-intent zoekresultaat pagina's (SERPs).

Hoe meer properties die jouw brand noemen, hoe meer kans je hebt om genoemd of geciteerd te worden in een AI Overview.

Uit eigen onderzoek blijkt dat **brand mentions de nummer één correlerende factor** zijn met AI Overview zichtbaarheid.

**Hoe bouw je proactief off-site brand mentions?**

**Outreach voor mentions in "best lists"**
Google AI Overviews geven duidelijk de voorkeur aan "best" posts, waarbij bijna 50% van alle AIO citaties in deze categorie valt.

Maar wees selectief wanneer je outreach doet voor zichtbaarheid op deze lijsten. Bied waar possible schrijvers een demo of kortlopende trial (volledig gedocumenteerd) aan zodat ze een eerlijke review kunnen geven.

In plaats van het pitchen van je brand voor bestaande artikelen, target authoritatieve sites in jouw niche die nog geen "best X producten" artikel hebben geschreven.

**Partner met YouTube creators voor product features**
YouTube mentions tonen de sterkste correlatie met AI Overview zichtbaarheid. Dit logisch aangezien YouTube het nummer één geciteerde domein is in AI Overviews.

**Hoe bouw je partnerships op YouTube:**
- Zoek naar kanalen die tutorials, vergelijkingen of educatieve content produceren waar je product natuurlijk in past
- Pitch een specifiek video idee dat hun audience dient—niet alleen een verzoek om een review
- Bied early access aan features, exclusieve data, of een grondige demo

Belangrijk: vind YouTubers die al verschijnen in AI Overviews. Als ze jouw brand al noemen—is dat nog beter!

## 6. Laat je noemen op authoritatieve, sterk gelinkte pagina's

Uit een analyse van de top 50 websites genoemd across 76,7 miljoen AI Overviews bleek een sterke correlatie (0,70) tussen genoemd worden op sterk gelinkte pagina's en AI Overview zichtbaarheid.

Pagina's die andere websites de moeite van het linken waard vinden dragen meer gewicht—wanneer je brand verschijnt op deze authoritatieve bronnen, zijn AI Overviews significant waarschijnlijker om je te noemen.

De sleutel is het verdienen van mentions op pagina's die al sterke backlinkprofielen hebben, niet zomaar eender welke mention.

**Praktisch advies:**
- Gebruik "Link intersect" tools om high-authority pagina's in jouw industrie te vinden die competitors noemen maar jou niet
- Pitch guest contributions, bied expert quotes aan, of creëer resources die andere sites graag zullen noemen op hun top pages

## 7. Optimaliseer je content met structured data

Er is wijdverspreid geloof dat structured data je kan helpen vaker te verschijnen in AI search. Het is echter nog onduidelijk in hoeverre schema wordt herkend door Google's AI model, Gemini.

LLMs converteren woorden tijdens training naar numerieke representaties, waardoor de schema markup binnen content essentieel gerandomiseerd wordt.

Daarnaast kunnen veel AI crawlers geen schema data benaderen als het client-side rendered is (bijvoorbeeld via Javascript)—zelfs hoewel veel sites op deze setup vertrouwen.

Maar structured data wordt nog steeds gezegd om een indirecte impact te hebben op AI zoek zichtbaarheid.

Tijdens de Google Search Central Live conferentie bevestigde Senior Search Analyst John Mueller expliciet dat structured data cruciaal is voor AI search.

Dit komt doordat AI zichtbaarheid hingeert op zoek zichtbaarheid, vanwege het RAG proces (retrieval augmented generation).

Anders dan AI crawlers, wordt structured data veel beter afgehandeld door Google's search engine bots. Het is ook cruciaal voor zoek zichtbaarheid, aangezien het bijdraagt aan de knowledge graphs waar zoekmachines op gebouwd zijn.

Met andere woorden: structured data betekent dat je waarschijnlijker wordt opgenomen in de SERPs, wat je vervolgens in de selectie pool brengt voor AI Overviews tijdens RAG.

Hoewel we geen definitief bewijs hebben dat schema markup helpt ranken in AI Overviews, hebben zowel Google als Microsoft bevestigd dat structured data helpt AI systemen content correct interpreteren.

**Praktisch advies:**
- Implementeer relevante schema types zoals Article, HowTo, en FAQPage
- Dit is een laag-risque manier om de machine leesbaarheid van je content voor AI systemen potentieel te verbeteren
- Gebruik tools zoals de Schema Validator of Google's Rich Results Test om je bestaande schema markup te checken
- Doe een volledige schema audit van je content via site audit tools

## Conclusie

AI Overviews gaan niet meer weg, en de regels voor ranken worden nog geschreven.

Elke strategie die we behandeld hebben—van het bouwen van topical authority tot beter matchen van searcher intentie—is gebaseerd op analyse van miljoenen AI responses, vertrouwde third-party research, en directe guidance van Google, niet speculatie.

Begin met topic-level optimalisatie en echte brand mentions, en breng dan de technische verbeteringen in fasen aan.

**Wil je hulp bij het optimaliseren voor AI Overviews?**

Bij Niblah helpen we bedrijven met:
- AI Overview strategie en implementatie
- Content optimalisatie voor fan-out queries
- Brand mention campagnes en outreach
- Technical SEO en structured data audits

[Neem contact op](/work-with-me) om te bespreken hoe we jou kunnen helpen ranken in de AI-toekomst van zoek.
`.trim(),
}

async function publishArticle() {
  try {
    console.log('📝 Publishing AI Overviews ranking guide to database...')

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

    console.log('✅ Article published successfully!')
    console.log(`📍 URL: /blog/${result.slug}`)
    console.log(`📊 ID: ${result.id}`)
  } catch (error) {
    console.error('❌ Error publishing article:', error)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

publishArticle()
