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
  slug: 'perfect-shopify-translations-n8n-automation',
  topic: 'Shopify',
  status: 'PUBLISHED',
  title: 'Perfect Translations for Your Shopify Store with N8N & Translate & Adapt',
  content: `
## Automate Shopify translations with N8N

If you've been looking for a way to automate translations in your Shopify store with a focus on specific SEO keywords, you're in the right place. This was one of my most requested videos, and since my first tutorial two months ago, the method has been completely updated with a much more efficient and better approach.

<iframe width="100%" height="512" src="https://www.youtube.com/embed/YLfdLKW9ID0" title="How to Automate Shopify Translate and Adapt with Good translations For SEO using N8N Fully Automatic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In this guide, I'll show you how to set up an automated translation workflow using N8N that will:

- Automatically translate all your products, collections, and pages
- Focus on specific SEO keywords for each target language
- Skip already-translated content (never pay for duplicate translations)
- Run on a schedule so your localized content stays fresh

## What you need before starting

- An n8n subscription
- A Shopify Admin API key (permanent)
- An OpenRouter account
- Your target SEO keywords per language

If you don’t know how to get a permanent Shopify Admin API key, check my other video on how to get one — it will make this process much easier.

## Step 1 — Set up triggers in n8n

I like to add two triggers to my workflow:

1. **Manual trigger** — for when you want to run it yourself on demand
2. **Schedule trigger** — runs once every 15 days to keep your localized content fresh

This ensures you always have up-to-date translations without manually triggering anything.

## Step 2 — Get the cursor (for stores with 250+ products)

The cursor helps handle pagination when you have more than 250 products. For this tutorial, I’ll show the setup for stores with fewer products, but if you have a larger catalog and need this done for you, feel free to reach out through Niblah.com.

## Step 3 — Fetch products with the Admin API key

Use an HTTP Request node to:

1. Get a fresh Admin API key through n8n every time the workflow runs
2. Fetch all your products via the Shopify Admin API

For smaller catalogs (under 250 products), pagination info isn’t relevant, but the workflow handles it automatically if needed.

## Step 4 — Check for existing translations

This is where the magic happens. The workflow will:

1. **Loop through each product** and check if translations already exist
2. **Skip items that are already translated** — you’ll never translate the same thing twice
3. **Only send untranslated content** to the AI

This prevents wasting money on duplicate translations and ensures you only target what’s missing.

The workflow checks:
- Existing translations status
- Translatable resources
- Digests (unique identifiers attached to specific translation fields like product title, description, etc.)

## Step 5 — Set up the AI agent

For each target language (Swedish in my example), configure an AI agent with:

- **Target language** (e.g., Swedish)
- **SEO keywords** you want to focus on
- **Translation style/examples** so the AI matches your brand voice
- **Sitemap references** so it understands your site structure

I use **Gemini 2.5 Pro** via OpenRouter because it gives the most consistent and high-quality translations at the lowest price point.

## Step 6 — Send translations back to Shopify

After the AI completes the translations, the workflow:

1. Structures the data into a GraphQL payload
2. Sends it back to Shopify via the Translate & Adapt API
3. Each translated field goes to the correct place using the digest system

## Step 7 — Enjoy your fully localized store

Once everything is set up, just run the workflow. You’ll instantly see:

- Products fully translated in your target language
- SEO keywords properly integrated
- Consistent, high-quality translations across all content

For example, switch between Dutch and Swedish in your store, and everything appears perfectly localized.

## Get the workflow or done-for-you setup

The n8n workflow is downloadable for free in the description if you’re comfortable setting it up yourself.

If you need help with the setup or want a done-for-you service where I handle everything for you, head over to **Niblah.com** — you can WhatsApp chat me directly from the bottom right corner.

## Key benefits of this automation

- **Never pay for duplicate translations** — the workflow checks what’s already done
- **SEO-focused** — target specific keywords per language
- **Set and forget** — runs on a schedule every 15 days
- **Scalable** — works for any catalog size
- **High quality** — Gemini 2.5 Pro delivers consistent, natural translations

Thanks for reading, and I wish you all the best with your translations. Wherever you are, have a wonderful day, evening, or night!
`.trim(),
  translations: {
    nl: {
      title: 'Perfecte vertalingen voor je Shopify webshop met N8N & Translate & Adapt',
      topic: 'Shopify',
      metaTitle: 'Shopify vertalingen automatiseren met N8N',
      metaDescription: 'Leer hoe je met N8N automatisch producten, collecties en pagina\'s in je Shopify webshop vertaalt met focus op specifieke SEO-trefwoorden.',
      content: `
## Automatiseer Shopify vertalingen met N8N

Als je op zoek was naar een manier om vertalingen in je Shopify webshop te automatiseren met focus op specifieke SEO-trefwoorden, ben je hier aan het juiste adres. Dit was een van mijn meest gevraagde video\'s, en sinds mijn eerste tutorial twee maanden geleden is de methode volledig geüpdatet met een veel efficiëntere aanpak.

<iframe width="100%" height="512" src="https://www.youtube.com/embed/YLfdLKW9ID0" title="How to Automate Shopify Translate and Adapt with Good translations For SEO using N8N Fully Automatic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In deze gids laat ik zien hoe je een geautomatiseerde vertaalworkflow instelt met N8N die:

- Automatisch al je producten, collecties en pagina\'s vertaalt
- Focus op specifieke SEO-trefwoorden per doeltaal
- Al vertaalde content overslaat (betaal nooit voor dubbele vertalingen)
- Draait op een schema zodat je gelokaliseerde content altijd actueel blijft

## Wat je nodig hebt voordat je begint

- Een n8n abonnement
- Een Shopify Admin API key (permanent)
- Een OpenRouter account
- Je SEO-trefwoorden per taal

Als je niet weet hoe je een permanente Shopify Admin API key krijgt, bekijk dan mijn andere video over hoe je deze verkrijgt — dit maakt het proces veel makkelijker.

## Stap 1 — Triggers instellen in n8n

Ik voeg graag twee triggers toe aan mijn workflow:

1. **Handmatige trigger** — voor als je hem zelf op commando wilt draaien
2. **Schema trigger** — draait elke 15 dagen om je gelokaliseerde content fris te houden

Hierdoor heb je altijd up-to-date vertalingen zonder dat je iets handmatig hoeft te triggeren.

## Stap 2 — Haal de cursor op (voor winkels met 250+ producten)

De cursor helpt bij paginering als je meer dan 250 producten hebt. Voor deze tutorial laat ik de setup zien voor winkels met minder producten, maar als je een grotere catalogus hebt en hulp nodig hebt, neem dan gerust contact op via Niblah.com.

## Stap 3 — Haal producten op met de Admin API key

Gebruik een HTTP Request node om:

1. Elke keer dat de workflow draait een verse Admin API key te krijgen via n8n
2. Al je producten op te halen via de Shopify Admin API

Voor kleinere catalogi (onder 250 producten) is paginering niet relevant, maar de workflow handelt dit automatisch indien nodig.

## Stap 4 — Controleer bestaande vertalingen

Hier gebeurt de magie. De workflow:

1. **Loopt door elk product** en controleert of vertalingen al bestaan
2. **Slaat al vertaalde items over** — je vertaalt nooit tweemaal hetzelfde
3. **Stuurt alleen niet-vertaalde content** naar de AI

Dit voorkomt verspilling van geld aan dubbele vertalingen en zorgt ervoor dat je alleen target wat ontbreekt.

De workflow controleert:
- Status van bestaande vertalingen
- Vertaalbare bronnen
- Digests (unieke identificatoren gekoppeld aan specifieke vertaalvelden zoals producttitel, omschrijving, etc.)

## Stap 5 — Stel de AI agent in

Voor elke doeltaal (Zweeds in mijn voorbeeld), configureer je een AI agent met:

- **Doeltaal** (bijv. Zweeds)
- **SEO-trefwoorden** waarop je wilt focussen
- **Vertaalstijl/voorbeelden** zodat de AI je merkstem past
- **Sitemap referenties** zodat de AI je sitestructuur begrijpt

Ik gebruik **Gemini 2.5 Pro** via OpenRouter omdat dit de meest consistente en hoogwaardige vertalingen levert voor de laagste prijs.

## Stap 6 — Stuur vertalingen terug naar Shopify

Nadat de AI de vertalingen voltooit, doet de workflow:

1. De data structureren in een GraphQL payload
2. Terugsturen naar Shopify via de Translate & Adapt API
3. Elk vertaald veld gaat naar de juiste plek via het digest-systeem

## Stap 7 — Geniet van je volledig gelokaliseerde winkel

Als alles eenmaal staat, draai je gewoon de workflow. Je ziet direct:

- Producten volledig vertaald in je doeltaal
- SEO-trefwoorden correct verwerkt
- Consistente, hoogwaardige vertalingen over alle content

Wissel bijvoorbeeld tussen Nederlands en Zweeds in je winkel, en alles verschijnt perfect gelokaliseerd.

## Haal de workflow of laat het opzetten

De n8n workflow is gratis beschikbaar in de beschrijving als je hem zelf comfortabel kunt instellen.

Als je hulp nodig hebt bij de setup of een done-for-you dienst wilt waarbij ik alles voor je regel, ga dan naar **Niblah.com** — je kunt me rechtstreeks WhatsApp-chatten via de knop rechtsonder.

## Belangrijkste voordelen van deze automatisering

- **Betaal nooit voor dubbele vertalingen** — de workflow controleert wat al gedaan is
- **SEO-gericht** — target specifieke trefwoorden per taal
- **Instellen en vergeten** — draait op schema elke 15 dagen
- **Schaalbaar** — werkt voor elke catalogusgrootte
- **Hoge kwaliteit** — Gemini 2.5 Pro levert consistente, natuurlijke vertalingen

Bedankt voor het lezen, en ik wens je veel succes met je vertalingen. Waar je ook bent, een geweldige dag, avond of nacht!
`.trim(),
    },
    de: {
      title: 'Perfekte Übersetzungen für deinen Shopify Shop mit N8N & Translate & Adapt',
      topic: 'Shopify',
      metaTitle: 'Shopify-Übersetzungen automatisieren mit N8N',
      metaDescription: 'Lerne, wie du mit N8N automatisch Produkte, Kollektionen und Seiten in deinem Shopify Shop übersetzt mit Fokus auf spezifische SEO-Keywords.',
      content: `
## Shopify-Übersetzungen mit N8N automatisieren

Wenn du nach einer Möglichkeit gesucht hast, Übersetzungen in deinem Shopify Shop mit Fokus auf spezifische SEO-Keywords zu automatisieren, bist du hier richtig. Das war eines meiner meistgeforderten Videos, und seit meinem ersten Tutorial vor zwei Monaten wurde die Methode komplett aktualisiert und ist nun viel effizienter.

<iframe width="100%" height="512" src="https://www.youtube.com/embed/YLfdLKW9ID0" title="How to Automate Shopify Translate and Adapt with Good translations For SEO using N8N Fully Automatic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In dieser Anleitung zeige ich dir, wie du einen automatisierten Übersetzungs-Workflow mit N8N einrichtest, der:

- Automatisch alle deine Produkte, Kollektionen und Seiten übersetzt
- Fokus auf spezifische SEO-Keywords pro Zielsprache legt
- Bereits übersetzte Inhalte überspringt (du zahlst nie für doppelte Übersetzungen)
- Nach einem Zeitplan läuft, damit deine lokalisierten Inhalte immer frisch sind

## Was du brauchst, bevor du startest

- Ein n8n-Abonnement
- Einen permanenten Shopify Admin API-Key
- Ein OpenRouter-Konto
- Deine SEO-Keywords pro Sprache

Wenn du nicht weißt, wie du einen permanenten Shopify Admin API-Key erhältst, schau dir mein anderes Video dazu an — es macht diesen Prozess viel einfacher.

## Schritt 1 — Trigger in n8n einrichten

Ich füge meinem Workflow gerne zwei Trigger hinzu:

1. **Manueller Trigger** — wenn du ihn selbst auf Knopfdruck ausführen möchtest
2. **Zeitplan-Trigger** — läuft alle 15 Tage, damit deine lokalisierten Inhalte aktuell bleiben

So hast du immer aktuelle Übersetzungen, ohne manuell etwas auslösen zu müssen.

## Schritt 2 — Den Cursor abrufen (für Shops mit 250+ Produkten)

Der Cursor hilft bei der Paginierung, wenn du mehr als 250 Produkte hast. Für dieses Tutorial zeige ich das Setup für Shops mit weniger Produkten, aber wenn du einen größeren Katalog hast und Hilfe benötigst, kontaktiere mich gerne über Niblah.com.

## Schritt 3 — Produkte mit dem Admin API-Key abrufen

Verwende einen HTTP Request Node, um:

1. Jedes Mal, wenn der Workflow läuft, einen frischen Admin API-Key über n8n zu erhalten
2. Alle deine Produkte über die Shopify Admin API abzurufen

Für kleinere Kataloge (unter 250 Produkten) ist die Paginierungs-Information nicht relevant, aber der Workflow handled es automatisch, wenn nötig.

## Schritt 4 — Vorhandene Übersetzungen prüfen

Hier passiert die Magie. Der Workflow:

1. **Durchläuft jedes Produkt** und prüft, ob Übersetzungen bereits vorhanden sind
2. **Überspringt bereits übersetzte Elemente** — du übersetzt nie doppelt
3. **Sendet nur unübersetzte Inhalte** an die KI

Dies verhindert Geldverschwendung durch doppelte Übersetzungen und stellt sicher, dass du nur das übersetzt, was fehlt.

Der Workflow prüft:
- Status der vorhandenen Übersetzungen
- Übersetzbare Ressourcen
- Digests (eindeutige Bezeichner für spezifische Übersetzungsfelder wie Produkttitel, Beschreibung usw.)

## Schritt 5 — Den KI-Agenten einrichten

Für jede Zielsprache (Schwedisch in meinem Beispiel) konfigurierst du einen KI-Agenten mit:

- **Zielsprache** (z. B. Schwedisch)
- **SEO-Keywords**, auf die du fokussieren möchtest
- **Übersetzungsstil/Beispiele**, damit die KI deine Markenstimme trifft
- **Sitemap-Referenzen**, damit die KI deine Site-Struktur versteht

Ich verwende **Gemini 2.5 Pro** über OpenRouter, weil es die konsistentesten und hochwertigsten Übersetzungen zum niedrigsten Preis liefert.

## Schritt 6 — Übersetzungen zurück an Shopify senden

Nachdem die KI die Übersetzungen abgeschlossen hat, macht der Workflow:

1. Die Daten in einer GraphQL-Payload strukturieren
2. Zurück an Shopify über die Translate & Adapt API senden
3. Jedes übersetzte Feld geht an den richtigen Platz über das Digest-System

## Schritt 7 — Genieße deinen voll lokalisierten Shop

Sobald alles eingerichtet ist, führst du einfach den Workflow aus. Du siehst sofort:

- Produkte vollständig übersetzt in deiner Zielsprache
- SEO-Keywords ordnungsgemäß integriert
- Konsistente, hochwertige Übersetzungen über alle Inhalte

Wechsle beispielsweise zwischen Niederländisch und Schwedisch in deinem Shop, und alles erscheint perfekt lokalisiert.

## Den Workflow bekommen oder Done-for-You-Setup

Der n8n-Workflow ist in der Beschreibung kostenlos herunterladbar, wenn du ihn selbst einrichten möchtest.

Wenn du Hilfe beim Setup benötigst oder eine Done-for-You-Service möchtest, bei der ich alles für dich übernehme, gehe zu **Niblah.com** — du kannst mich unten rechts direkt per WhatsApp anschreiben.

## Hauptvorteile dieser Automatisierung

- **Nie für doppelte Übersetzungen zahlen** — der Workflow prüft, was bereits getan wurde
- **SEO-fokussiert** — spezifische Keywords pro Sprache
- **Einrichten und vergessen** — läuft nach Zeitplan alle 15 Tage
- **Skalierbar** — funktioniert für jede Kataloggröße
- **Hohe Qualität** — Gemini 2.5 Pro liefert konsistente, natürliche Übersetzungen

Danke fürs Lesen und ich wünsche dir viel Erfolg mit deinen Übersetzungen. Wo auch immer du bist, habe einen wunderbaren Tag, Abend oder eine gute Nacht!
`.trim(),
    },
    sv: {
      title: 'Perfekta översättningar för din Shopify-butik med N8N och Translate & Adapt',
      topic: 'Shopify',
      metaTitle: 'Shopify-översättningar automatisera med N8N',
      metaDescription: 'Lär dig hur du automatiskt översätter produkter, kollektioner och sidor i din Shopify-butik med N8N med fokus på specifika SEO-nyckelord.',
      content: `
## Automatisera Shopify-översättningar med N8N

Om du har letat efter ett sätt att automatisera översättningar i din Shopify-butik med fokus på specifika SEO-nyckelord är du på rätt plats. Detta var en av de mest efterfrågade videorna och sedan min första tutorial för två månader sedan har metoden uppdaterats helt med ett mycket effektivare tillvägagångssätt.

<iframe width="100%" height="512" src="https://www.youtube.com/embed/YLfdLKW9ID0" title="How to Automate Shopify Translate and Adapt with Good translations For SEO using N8N Fully Automatic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I den här guiden visar jag hur du ställer in ett automatiserat översättningsflöde med N8N som kommer att:

- Automatiskt översätta alla dina produkter, kollektioner och sidor
- Fokusera på specifika SEO-nyckelord för varje målspråk
- Hoppa över redan översattet innehåll (betala aldrig för dubbletter)
- Kör på ett schema så din lokaliserade content hålls färsk

## Vad du behöver innan du startar

- Ett n8n-abonnemang
- En permanent Shopify Admin API-nyckel
- Ett OpenRouter-konto
- Dina SEO-nyckelord per språk

Om du inte vet hur du får en permanent Shopify Admin API-nyckel, kolla min andra video om hur du får en — det gör processen mycket enklare.

## Steg 1 — Ställ in triggers i n8n

Jag gillar att lägga till två triggers i mitt flöde:

1. **Manuell trigger** — för när du vill köra själv på begäran
2. **Schema-trigger** — körs en gång var 15:e dag för att hålla din lokaliserade content färsk

Detta säkerställer att du alltid har uppdaterade översättningar utan att manuellt trigga något.

## Steg 2 — Hämta cursorn (för butiker med 250+ produkter)

Curson hjälper till med paginering när du har fler än 250 produkter. För denna tutorial visar jag setuppen för butiker med färre produkter, men om du har en större katalog och behöver detta gjort för dig, kontakta mig gärna via Niblah.com.

## Steg 3 — Hämta produkter med Admin API-nyckeln

Använd en HTTP Request-node för att:

1. Få en färsk Admin API-nyckel via n8n varje gång flödet körs
2. Hämta alla dina produkter via Shopify Admin API

För mindre kataloger (under 250 produkter) är pagineringsinfo inte relevant, men flödet hanterar det automatiskt vid behov.

## Steg 4 — Kontrollera befintliga översättningar

Här händer magin. Flödet kommer att:

1. **Loopa igenom varje produkt** och kontrollera om översättningar redan finns
2. **Hoppa över redan översatta objekt** — du översätter aldrig samma sak twice
3. **Skicka bara översatt content** till AI:n

Detta förhindrar att du slösar pengar på dubblettöversättningar och säkerställer att du bara riktar dig mot det saknas.

Flödet kontrollerar:
- Befintliga översättningars status
- Översättningsbara resurser
- Digests (unika identifierare kopplade till specifika översättningsfält som produktitel, beskrivning, etc.)

## Steg 5 — Ställ in AI-agenten

För varje målspråk (svenska i mitt exempel), konfigurera en AI-agent med:

- **Målspråk** (t.ex. svenska)
- **SEO-nyckelord** du vill fokusera på
- **Översättningsstil/exempel** så AI:n matchar din varumärkesröst
- **Sitemap-referenser** så den förstår din din struktur

Jag använder **Gemini 2.5 Pro** via OpenRouter för att det ger mest konsekventa och högkvalitativa översättningar till lägsta pris.

## Steg 6 — Skicka översättningar tillbaka till Shopify

Efter att AI:n slutfört översättningarna kommer flödet:

1. Strukturera datan i en GraphQL-payload
2. Skicka tillbaka till Shopify via Translate & Adapt API
3. Varje översatt fält går till rätt plats med digest-systemet

## Steg 7 — Njut av din fullt lokaliserade butik

När allt är inställt, kör bara flödet. Du kommer omedelbart se:

- Produkter helt översatta på ditt målspråk
- SEO-nyckelord korrekt integrerade
- Konsekventa, högkvalitativa översättningar över all content

Växla exempelvis mellan nederländska och svenska i din butik, och allt framträder perfekt lokaliserat.

## Hämta flödet eller done-for-you-setup

n8n-flödet är gratis att ladda ner i beskrivningen om du är bekväm med att ställa in det själv.

Om du behöver hjälp med setuppen eller vill ha en done-for-you-tjänst där jag sköter allt för dig, gå till **Niblah.com** — du kan WhatsApp-chatta mig direkt från nedre högra hörnet.

## Viktiga fördelar med denna automatisering

- **Betala aldrig för dubblettöversättningar** — flödet kontrollerar vad som redan är gjort
- **SEO-fokuserat** — rikta specifika nyckelord per språk
- **Sätt och glöm** — körs på schema var 15:e dag
- **Skalerbart** — fungerar för alla katalogstorlekar
- **Hög kvalitet** — Gemini 2.5 Pro levererar konsekventa, naturliga översättningar

Tack för att du läser, och jag önskar dig allt gott med dina översättningar. Var du än befinner dig, ha en underbar dag, kväll eller natt!
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    console.log('📝 Publishing Shopify N8N Translations article to database...')

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
