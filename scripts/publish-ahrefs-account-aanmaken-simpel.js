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
  title: 'Ahrefs account aanmaken: simpele uitleg',
  content: `
## Ahrefs account aanmaken in 5 stappen

Wil je alle functies van Ahrefs gebruiken? Dan heb je een account nodig. Dit is de snelle, simpele versie.

1. Kies een abonnement: Lite, Standard, Advanced of Agency.
2. Ga naar Ahrefs en klik op starten.
3. Vul je naam, e-mail en bedrijfsgegevens in.
4. Voeg je betaalmethode toe.
5. Rond af en log direct in.

## Wat kun je doen in Ahrefs?

- Site Explorer: check backlinks en zoekwoorden van jezelf en concurrenten.
- Keywords Explorer: vind nieuwe keyword ideeen.
- Site Audit: scan je site op technische SEO-fouten.
- Rank Tracker: volg je posities in Google.
- Content Explorer: vind content ideeen op onderwerp.

## Welk abonnement past bij jou?

Volgens het oorspronkelijke overzicht:

- Lite: eerste 7 dagen $7, daarna $99 per maand.
- Standard: eerste 7 dagen $7, daarna $179 per maand.
- Advanced: $399 per maand.
- Agency: $999 per maand.

Extra gebruikers, projecten, tracked keywords en crawl credits verschillen per plan.

## Na het aanmaken van je account

Begin met 1 project:

1. Voeg je website toe.
2. Run Site Audit.
3. Stel Rank Tracker in voor je belangrijkste zoekwoorden.
4. Maak een korte lijst met verbeterpunten.

Dan heb je meteen een duidelijke start voor je SEO.

Prijzen en pakketten kunnen veranderen. Check altijd de actuele prijzen op de website van Ahrefs.
`.trim(),
  translations: {
    en: {
      title: 'Creating an Ahrefs account: simple guide',
      topic: 'SEO',
      metaTitle: 'Create an Ahrefs account | Simple guide',
      metaDescription: 'A simple step-by-step guide to create an Ahrefs account, choose a plan, and start with the core SEO tools.',
      content: `
## Create an Ahrefs account in 5 steps

Want to use all Ahrefs features? You need an account. Here is the simple version.

1. Pick a plan: Lite, Standard, Advanced, or Agency.
2. Go to Ahrefs and click to get started.
3. Fill in your name, email, and company details.
4. Add your payment method.
5. Finish signup and log in.

## What can you do in Ahrefs?

- Site Explorer: analyze backlinks and keyword rankings.
- Keywords Explorer: find keyword ideas.
- Site Audit: scan your site for technical SEO issues.
- Rank Tracker: track your Google positions.
- Content Explorer: find content ideas by topic.

## Which plan should you choose?

From the original overview:

- Lite: first 7 days for $7, then $99/month.
- Standard: first 7 days for $7, then $179/month.
- Advanced: $399/month.
- Agency: $999/month.

Users, projects, tracked keywords, and crawl credits depend on the plan.

## After creating your account

Start with one project:

1. Add your website.
2. Run Site Audit.
3. Set up Rank Tracker for your main keywords.
4. Make a short action list.

This gives you a clear SEO starting point.

Prices and plans can change, so always check current pricing on the Ahrefs website.
`.trim(),
    },
    nl: {
      title: 'Ahrefs account aanmaken: simpele uitleg',
      topic: 'SEO',
      metaTitle: 'Ahrefs account aanmaken | Simpele uitleg',
      metaDescription: 'In simpele stappen een Ahrefs account aanmaken, abonnement kiezen en direct starten met de belangrijkste SEO-tools.',
      content: `
## Ahrefs account aanmaken in 5 stappen

Wil je alle functies van Ahrefs gebruiken? Dan heb je een account nodig. Dit is de snelle, simpele versie.

1. Kies een abonnement: Lite, Standard, Advanced of Agency.
2. Ga naar Ahrefs en klik op starten.
3. Vul je naam, e-mail en bedrijfsgegevens in.
4. Voeg je betaalmethode toe.
5. Rond af en log direct in.

## Wat kun je doen in Ahrefs?

- Site Explorer: check backlinks en zoekwoorden van jezelf en concurrenten.
- Keywords Explorer: vind nieuwe keyword ideeen.
- Site Audit: scan je site op technische SEO-fouten.
- Rank Tracker: volg je posities in Google.
- Content Explorer: vind content ideeen op onderwerp.

## Welk abonnement past bij jou?

Volgens het oorspronkelijke overzicht:

- Lite: eerste 7 dagen $7, daarna $99 per maand.
- Standard: eerste 7 dagen $7, daarna $179 per maand.
- Advanced: $399 per maand.
- Agency: $999 per maand.

Extra gebruikers, projecten, tracked keywords en crawl credits verschillen per plan.

## Na het aanmaken van je account

Begin met 1 project:

1. Voeg je website toe.
2. Run Site Audit.
3. Stel Rank Tracker in voor je belangrijkste zoekwoorden.
4. Maak een korte lijst met verbeterpunten.

Dan heb je meteen een duidelijke start voor je SEO.

Prijzen en pakketten kunnen veranderen. Check altijd de actuele prijzen op de website van Ahrefs.
`.trim(),
    },
    de: {
      title: 'Ahrefs Konto erstellen: einfache Anleitung',
      topic: 'SEO',
      metaTitle: 'Ahrefs Konto erstellen | Einfache Anleitung',
      metaDescription: 'Einfache Schritt-fuer-Schritt Anleitung, um ein Ahrefs Konto zu erstellen, einen Plan zu waehlen und mit SEO zu starten.',
      content: `
## Ahrefs Konto in 5 Schritten erstellen

Wenn du alle Ahrefs Funktionen nutzen willst, brauchst du ein Konto. Hier ist die einfache Version.

1. Waehle einen Plan: Lite, Standard, Advanced oder Agency.
2. Gehe zu Ahrefs und klicke auf Start.
3. Trage Name, E-Mail und Firmendaten ein.
4. Fuege eine Zahlungsmethode hinzu.
5. Abschliessen und einloggen.

## Was kannst du mit Ahrefs machen?

- Site Explorer: Backlinks und Rankings analysieren.
- Keywords Explorer: neue Keyword Ideen finden.
- Site Audit: technische SEO Probleme finden.
- Rank Tracker: Google Positionen verfolgen.
- Content Explorer: Content Ideen nach Thema finden.

## Welcher Plan passt zu dir?

Laut urspruenglicher Uebersicht:

- Lite: erste 7 Tage fuer $7, danach $99/Monat.
- Standard: erste 7 Tage fuer $7, danach $179/Monat.
- Advanced: $399/Monat.
- Agency: $999/Monat.

Nutzer, Projekte, Keywords und Crawl Credits haengen vom Plan ab.

## Nach der Kontoerstellung

Starte mit einem Projekt:

1. Fuege deine Website hinzu.
2. Starte Site Audit.
3. Richte Rank Tracker fuer wichtige Keywords ein.
4. Erstelle eine kurze To-do Liste.

So hast du einen klaren SEO Start.

Preise und Pakete koennen sich aendern. Pruefe immer die aktuellen Preise auf der Ahrefs Website.
`.trim(),
    },
    sv: {
      title: 'Skapa ett Ahrefs-konto: enkel guide',
      topic: 'SEO',
      metaTitle: 'Skapa Ahrefs-konto | Enkel guide',
      metaDescription: 'En enkel steg-for-steg guide for att skapa ett Ahrefs-konto, valja plan och komma igang med SEO-verktygen.',
      content: `
## Skapa ett Ahrefs-konto i 5 steg

Vill du anvanda alla Ahrefs funktioner? Da behover du ett konto. Har ar den enkla versionen.

1. Valj plan: Lite, Standard, Advanced eller Agency.
2. Gaa till Ahrefs och klicka for att starta.
3. Fyll i namn, e-post och foretagsuppgifter.
4. Lagg till betalmetod.
5. Slutfor registreringen och logga in.

## Vad kan du gora i Ahrefs?

- Site Explorer: analysera backlinks och rankingar.
- Keywords Explorer: hitta nya nyckelordsideer.
- Site Audit: skanna sajten for tekniska SEO-problem.
- Rank Tracker: folj dina positioner i Google.
- Content Explorer: hitta content-ideer per amne.

## Vilken plan passar dig?

Enligt den ursprungliga oversikten:

- Lite: forsta 7 dagar for $7, sedan $99/manad.
- Standard: forsta 7 dagar for $7, sedan $179/manad.
- Advanced: $399/manad.
- Agency: $999/manad.

Antal anvandare, projekt, nyckelord och crawl credits beror pa plan.

## Efter att kontot ar klart

Borja med ett projekt:

1. Lagg till din webbplats.
2. Kor Site Audit.
3. Stall in Rank Tracker for viktigaste nyckelorden.
4. Skapa en kort atgardslista.

Da far du en tydlig SEO-start.

Priser och paket kan andras. Kontrollera alltid aktuella priser pa Ahrefs webbplats.
`.trim(),
    },
    da: {
      title: 'Opret en Ahrefs-konto: enkel guide',
      topic: 'SEO',
      metaTitle: 'Opret Ahrefs-konto | Enkel guide',
      metaDescription: 'En enkel trin-for-trin guide til at oprette en Ahrefs-konto, vaelge plan og komme i gang med SEO-vaerktojerne.',
      content: `
## Opret en Ahrefs-konto i 5 trin

Vil du bruge alle Ahrefs funktioner? Saa skal du have en konto. Her er den simple version.

1. Vaelg en plan: Lite, Standard, Advanced eller Agency.
2. Gaa til Ahrefs og klik for at starte.
3. Udfyld navn, e-mail og virksomhedsoplysninger.
4. Tilfoj betalingsmetode.
5. Afslut og log ind.

## Hvad kan du bruge Ahrefs til?

- Site Explorer: analyser backlinks og rankinger.
- Keywords Explorer: find nye keyword ideer.
- Site Audit: scan dit website for tekniske SEO-fejl.
- Rank Tracker: foelg dine placeringer i Google.
- Content Explorer: find content ideer per emne.

## Hvilken plan passer til dig?

Ifolge den oprindelige oversigt:

- Lite: forste 7 dage for $7, derefter $99/md.
- Standard: forste 7 dage for $7, derefter $179/md.
- Advanced: $399/md.
- Agency: $999/md.

Brugere, projekter, tracked keywords og crawl credits varierer per plan.

## Efter du har oprettet kontoen

Start med et projekt:

1. Tilfoj dit website.
2. Koer Site Audit.
3. Saet Rank Tracker op for dine vigtigste keywords.
4. Lav en kort handlingsliste.

Saa har du en klar SEO-start.

Priser og pakker kan aendre sig. Tjek altid aktuelle priser pa Ahrefs hjemmeside.
`.trim(),
    },
    fr: {
      title: 'Creer un compte Ahrefs: guide simple',
      topic: 'SEO',
      metaTitle: 'Creer un compte Ahrefs | Guide simple',
      metaDescription: 'Guide simple pour creer un compte Ahrefs, choisir une offre et demarrer rapidement avec les outils SEO.',
      content: `
## Creer un compte Ahrefs en 5 etapes

Vous voulez utiliser toutes les fonctions Ahrefs? Il vous faut un compte. Voici la version simple.

1. Choisissez une offre: Lite, Standard, Advanced ou Agency.
2. Allez sur Ahrefs et cliquez pour commencer.
3. Remplissez nom, e-mail et informations entreprise.
4. Ajoutez un moyen de paiement.
5. Terminez et connectez-vous.

## Que pouvez-vous faire avec Ahrefs?

- Site Explorer: analyser backlinks et positions.
- Keywords Explorer: trouver des idees de mots-cles.
- Site Audit: scanner le site pour les problemes SEO techniques.
- Rank Tracker: suivre vos positions Google.
- Content Explorer: trouver des idees de contenu par sujet.

## Quelle offre choisir?

D apres l apercu d origine:

- Lite: 7 premiers jours a $7, puis $99/mois.
- Standard: 7 premiers jours a $7, puis $179/mois.
- Advanced: $399/mois.
- Agency: $999/mois.

Le nombre d utilisateurs, projets, mots-cles suivis et crawl credits depend de l offre.

## Apres la creation du compte

Commencez avec un projet:

1. Ajoutez votre site.
2. Lancez Site Audit.
3. Configurez Rank Tracker sur vos mots-cles principaux.
4. Faites une courte liste d actions.

Vous avez ainsi un depart SEO clair.

Les prix et offres peuvent changer. Verifiez toujours les prix actuels sur le site Ahrefs.
`.trim(),
    },
    it: {
      title: 'Creare un account Ahrefs: guida semplice',
      topic: 'SEO',
      metaTitle: 'Creare account Ahrefs | Guida semplice',
      metaDescription: 'Guida semplice per creare un account Ahrefs, scegliere il piano giusto e iniziare subito con gli strumenti SEO principali.',
      content: `
## Crea un account Ahrefs in 5 passaggi

Vuoi usare tutte le funzioni di Ahrefs? Ti serve un account. Questa e la versione semplice.

1. Scegli un piano: Lite, Standard, Advanced o Agency.
2. Vai su Ahrefs e clicca per iniziare.
3. Inserisci nome, e-mail e dati aziendali.
4. Aggiungi il metodo di pagamento.
5. Completa la registrazione ed entra.

## Cosa puoi fare con Ahrefs?

- Site Explorer: analizzare backlink e posizionamenti.
- Keywords Explorer: trovare idee keyword.
- Site Audit: scansionare il sito per problemi SEO tecnici.
- Rank Tracker: monitorare le posizioni su Google.
- Content Explorer: trovare idee contenuto per argomento.

## Quale piano scegliere?

Secondo il riepilogo originale:

- Lite: primi 7 giorni a $7, poi $99/mese.
- Standard: primi 7 giorni a $7, poi $179/mese.
- Advanced: $399/mese.
- Agency: $999/mese.

Utenti, progetti, keyword tracciate e crawl credits cambiano in base al piano.

## Dopo la creazione dell account

Parti con un progetto:

1. Aggiungi il tuo sito.
2. Esegui Site Audit.
3. Imposta Rank Tracker per le keyword principali.
4. Crea una breve lista di azioni.

Cosi hai una partenza SEO chiara.

Prezzi e piani possono cambiare. Controlla sempre i prezzi aggiornati sul sito di Ahrefs.
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
