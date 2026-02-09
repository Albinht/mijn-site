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
  slug: 'ahrefs-traffic-potential-vs-volume',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Traffic potential beats search volume (Ahrefs guide)',
  content: `
## Why volume is not enough

Search volume tells you how often a keyword is searched. But it does not tell you how many people actually click.

Many SERPs steal clicks:

- Ads above organic results
- Shopping blocks
- Local packs
- "People also ask" boxes
- Featured snippets / knowledge panels
- Big brands that will always sit on top

So two keywords can have the same volume, but very different traffic.

## The 4 metrics that matter (in plain English)

In Ahrefs Keyword Explorer, I look at these first:

- Volume: searches per month
- Clicks: estimated clicks from the SERP (not searches)
- Clicks per search (CPS): clicks divided by searches
- Traffic potential (TP): how much traffic the #1 page can get from the topic (not only the main keyword)

Supporting metrics:

- KD: how hard it is to rank
- CPC: commercial value signal

## Quick example

Keyword A:

- Volume: 10000
- Clicks: 2500
- CPS: 0.25

Keyword B:

- Volume: 3000
- Clicks: 2700
- CPS: 0.90

Keyword B can be the better choice, even with lower volume, because people actually click.

## How to find traffic potential in Ahrefs (step-by-step)

### Step 1 - Open Keyword Explorer

- Enter your keyword.
- Set the right country and language.

Always match your real market. Otherwise the numbers are useless.

### Step 2 - Compare Volume vs Clicks

- If Clicks are close to Volume: good, the SERP sends clicks.
- If Clicks are far below Volume: the SERP is noisy or answers the query without clicks.

Use CPS as your shortcut:

- CPS near 1.0: most searches lead to clicks
- CPS near 0.2: most searches do not

### Step 3 - Check Traffic Potential (TP)

Traffic potential is the part most people ignore.

Ahrefs estimates how much organic traffic the top ranking page gets from all keywords it ranks for.

That matters because a strong page usually ranks for many variations, not just one keyword.

Rule of thumb:

- If TP is much higher than Volume, you are looking at a broader topic.
- If TP is close to Volume, the keyword is more "single intent".

### Step 4 - Do a SERP reality check

Open the SERP overview and look at the top results:

- What page type ranks: blog, category, product, comparison?
- Which SERP features show up: ads, local pack, shopping, PAA?
- Are the top 3 results the same domains every time?

If the SERP is dominated by ads or big platforms, volume will overpromise.

### Step 5 - Click into the top pages

Open 1-3 top ranking URLs and check:

- Estimated organic traffic per page
- Top keywords that drive traffic
- How fresh and useful the content is

If the top page gets traffic from many keywords, that is real topic-level potential.

### Step 6 - Decide: create, update, or skip

I put each keyword into one bucket:

- Create: we do not have a page, and intent fits
- Update: we have a page but it is weak or outdated
- Skip for now: too hard, too noisy, or low business value

## For new websites: how to pick safer keywords

If your site rarely ranks in the top 100 yet, go for safer wins:

- Long-tail keywords with clear intent
- Lower KD
- High CPS (people actually click)
- SERPs that are not dominated by ads or mega brands

Then build internal links from these pages into your bigger topics.

## Mini checklist

- Correct country and language
- Volume checked
- Clicks and CPS checked
- Traffic potential checked
- SERP features reviewed
- Top pages inspected
- Keyword labeled: create / update / skip
`.trim(),
  translations: {
    en: {
      title: 'Traffic potential beats search volume (Ahrefs guide)',
      topic: 'SEO',
      metaTitle: 'Traffic potential vs volume | Ahrefs guide',
      metaDescription: 'Stop choosing keywords by volume only. Use Clicks, Clicks per search, and Traffic Potential in Ahrefs to find keywords that can actually bring traffic.',
      content: `
## Why volume is not enough

Search volume tells you how often a keyword is searched. But it does not tell you how many people actually click.

Many SERPs steal clicks:

- Ads above organic results
- Shopping blocks
- Local packs
- "People also ask" boxes
- Featured snippets / knowledge panels
- Big brands that will always sit on top

So two keywords can have the same volume, but very different traffic.

## The 4 metrics that matter (in plain English)

In Ahrefs Keyword Explorer, I look at these first:

- Volume: searches per month
- Clicks: estimated clicks from the SERP (not searches)
- Clicks per search (CPS): clicks divided by searches
- Traffic potential (TP): how much traffic the #1 page can get from the topic (not only the main keyword)

Supporting metrics:

- KD: how hard it is to rank
- CPC: commercial value signal

## Quick example

Keyword A:

- Volume: 10000
- Clicks: 2500
- CPS: 0.25

Keyword B:

- Volume: 3000
- Clicks: 2700
- CPS: 0.90

Keyword B can be the better choice, even with lower volume, because people actually click.

## How to find traffic potential in Ahrefs (step-by-step)

### Step 1 - Open Keyword Explorer

- Enter your keyword.
- Set the right country and language.

Always match your real market. Otherwise the numbers are useless.

### Step 2 - Compare Volume vs Clicks

- If Clicks are close to Volume: good, the SERP sends clicks.
- If Clicks are far below Volume: the SERP is noisy or answers the query without clicks.

Use CPS as your shortcut:

- CPS near 1.0: most searches lead to clicks
- CPS near 0.2: most searches do not

### Step 3 - Check Traffic Potential (TP)

Traffic potential is the part most people ignore.

Ahrefs estimates how much organic traffic the top ranking page gets from all keywords it ranks for.

That matters because a strong page usually ranks for many variations, not just one keyword.

Rule of thumb:

- If TP is much higher than Volume, you are looking at a broader topic.
- If TP is close to Volume, the keyword is more "single intent".

### Step 4 - Do a SERP reality check

Open the SERP overview and look at the top results:

- What page type ranks: blog, category, product, comparison?
- Which SERP features show up: ads, local pack, shopping, PAA?
- Are the top 3 results the same domains every time?

If the SERP is dominated by ads or big platforms, volume will overpromise.

### Step 5 - Click into the top pages

Open 1-3 top ranking URLs and check:

- Estimated organic traffic per page
- Top keywords that drive traffic
- How fresh and useful the content is

If the top page gets traffic from many keywords, that is real topic-level potential.

### Step 6 - Decide: create, update, or skip

I put each keyword into one bucket:

- Create: we do not have a page, and intent fits
- Update: we have a page but it is weak or outdated
- Skip for now: too hard, too noisy, or low business value

## For new websites: how to pick safer keywords

If your site rarely ranks in the top 100 yet, go for safer wins:

- Long-tail keywords with clear intent
- Lower KD
- High CPS (people actually click)
- SERPs that are not dominated by ads or mega brands

Then build internal links from these pages into your bigger topics.

## Mini checklist

- Correct country and language
- Volume checked
- Clicks and CPS checked
- Traffic potential checked
- SERP features reviewed
- Top pages inspected
- Keyword labeled: create / update / skip
`.trim(),
    },
    nl: {
      title: 'Traffic potential is belangrijker dan volume (Ahrefs)',
      topic: 'SEO',
      metaTitle: 'Traffic potential vs volume | Ahrefs',
      metaDescription: 'Kies keywords niet alleen op volume. Gebruik Clicks, Clicks per search en Traffic Potential in Ahrefs om keywords te vinden die echt traffic kunnen brengen.',
      content: `
## Waarom volume niet genoeg is

Search volume vertelt hoe vaak een keyword wordt gezocht. Maar niet hoeveel mensen doorklikken.

Veel SERPs "stelen" clicks:

- Ads boven de organische resultaten
- Shopping blokken
- Local pack
- "People also ask"
- Featured snippets / knowledge panels
- Grote merken die bijna altijd bovenaan staan

Dus twee keywords kunnen hetzelfde volume hebben, maar totaal andere traffic.

## De 4 metrics die ik altijd check

In Ahrefs Keyword Explorer kijk ik eerst naar:

- Volume: searches per maand
- Clicks: geschatte clicks vanuit de SERP (niet searches)
- Clicks per search (CPS): clicks gedeeld door searches
- Traffic potential (TP): hoeveel traffic de #1 pagina kan pakken vanuit het topic (niet alleen 1 keyword)

Extra metrics:

- KD: hoe moeilijk ranken is
- CPC: signaal voor commerciele waarde

## Snel voorbeeld

Keyword A:

- Volume: 10000
- Clicks: 2500
- CPS: 0.25

Keyword B:

- Volume: 3000
- Clicks: 2700
- CPS: 0.90

Keyword B kan beter zijn, zelfs met lager volume, omdat mensen echt klikken.

## Zo vind je traffic potential in Ahrefs (stappenplan)

### Stap 1 - Open Keyword Explorer

- Vul je keyword in.
- Kies het juiste land en taal.

Match altijd je echte markt. Anders zijn de cijfers waardeloos.

### Stap 2 - Vergelijk Volume met Clicks

- Als Clicks dichtbij Volume zitten: top, de SERP geeft clicks.
- Als Clicks ver onder Volume zitten: de SERP is noisy of Google geeft het antwoord zonder click.

Gebruik CPS als shortcut:

- CPS rond 1.0: bijna elke search leidt tot een click
- CPS rond 0.2: de meeste searches leiden niet tot een click

### Stap 3 - Check Traffic Potential (TP)

Traffic potential is wat de meeste mensen negeren.

Ahrefs schat hoeveel organische traffic de top pagina krijgt vanuit alle keywords waar die pagina op rankt.

Dat is belangrijk, omdat een goede pagina vaak rankt op veel variaties (niet maar 1 keyword).

Vuistregel:

- Als TP veel hoger is dan Volume, gaat het om een breder topic.
- Als TP ongeveer gelijk is aan Volume, is het keyword meer "single intent".

### Stap 4 - SERP reality check

Open de SERP overview en kijk naar de top resultaten:

- Welk type pagina rankt: blog, categorie, product, vergelijking?
- Welke SERP features zie je: ads, local pack, shopping, PAA?
- Staan dezelfde domeinen altijd in de top 3?

Als de SERP wordt gedomineerd door ads of grote platforms, dan overbelooft volume.

### Stap 5 - Klik door naar de top paginas

Open 1-3 top URLs en check:

- Geschatte organische traffic per pagina
- Top keywords die traffic brengen
- Hoe goed en hoe up-to-date de content is

Als de top pagina traffic krijgt uit veel keywords, dan is dat echte topic-potentie.

### Stap 6 - Beslis: maken, updaten of skippen

Ik zet elk keyword in een bakje:

- Maken: we hebben nog geen pagina en intent past
- Updaten: we hebben een pagina, maar hij is zwak of verouderd
- Skippen: te moeilijk, te noisy, of te weinig business value

## Voor nieuwe websites: kies veiligere keywords

Als je site zelden in de top 100 staat, ga voor veiligere wins:

- Long-tail keywords met duidelijke intent
- Lagere KD
- Hoge CPS (mensen klikken echt)
- SERPs die niet vol staan met ads of mega merken

Bouw daarna interne links van deze paginas naar je grotere topics.

## Mini checklist

- Land en taal goed
- Volume gecheckt
- Clicks en CPS gecheckt
- Traffic potential gecheckt
- SERP features bekeken
- Top paginas gecheckt
- Keyword gelabeld: maken / updaten / skippen
`.trim(),
    },
    de: {
      title: 'Traffic Potential ist wichtiger als Volume (Ahrefs)',
      topic: 'SEO',
      metaTitle: 'Traffic Potential vs Volume | Ahrefs',
      metaDescription: 'Keywords nicht nur nach Volume waehlen. Nutze Clicks, Clicks per search und Traffic Potential in Ahrefs, um Keywords zu finden die wirklich Traffic bringen koennen.',
      content: `
## Warum Volume nicht reicht

Search Volume sagt wie oft ein Keyword gesucht wird. Aber nicht wie viele Leute klicken.

Viele SERPs "stehlen" Clicks:

- Ads ueber den organischen Ergebnissen
- Shopping Bloecke
- Local Pack
- "People also ask"
- Featured Snippets / Knowledge Panels
- Grosse Brands die fast immer oben stehen

Zwei Keywords koennen also das gleiche Volume haben, aber sehr unterschiedlichen Traffic.

## Die 4 Metrics die ich immer checke

In Ahrefs Keyword Explorer schaue ich zuerst auf:

- Volume: Searches pro Monat
- Clicks: geschaetzte Clicks aus der SERP (nicht Searches)
- Clicks per search (CPS): Clicks geteilt durch Searches
- Traffic potential (TP): wie viel Traffic die #1 Seite aus dem Topic holen kann (nicht nur 1 Keyword)

Extra Metrics:

- KD: wie schwer es ist zu ranken
- CPC: Signal fuer kommerziellen Wert

## Kurzes Beispiel

Keyword A:

- Volume: 10000
- Clicks: 2500
- CPS: 0.25

Keyword B:

- Volume: 3000
- Clicks: 2700
- CPS: 0.90

Keyword B kann besser sein, auch mit weniger Volume, weil Leute wirklich klicken.

## So findest du Traffic Potential in Ahrefs (Schritte)

### Schritt 1 - Keyword Explorer oeffnen

- Keyword eingeben.
- Land und Sprache richtig setzen.

Immer den echten Markt treffen. Sonst sind die Zahlen wertlos.

### Schritt 2 - Volume vs Clicks vergleichen

- Wenn Clicks nahe an Volume sind: gut, die SERP sendet Clicks.
- Wenn Clicks deutlich unter Volume sind: die SERP ist noisy oder beantwortet ohne Click.

CPS als Shortcut:

- CPS nahe 1.0: die meisten Searches fuehren zu Clicks
- CPS nahe 0.2: die meisten Searches fuehren nicht zu Clicks

### Schritt 3 - Traffic Potential (TP) checken

Traffic Potential ignorieren viele.

Ahrefs schaetzt, wie viel organischen Traffic die Top Seite aus allen Keywords bekommt, fuer die sie rankt.

Wichtig, weil eine starke Seite oft fuer viele Varianten rankt.

Faustregel:

- Wenn TP viel hoeher als Volume ist, ist es ein breites Topic.
- Wenn TP nahe an Volume ist, ist es eher "single intent".

### Schritt 4 - SERP Reality Check

SERP Overview oeffnen und Top Ergebnisse anschauen:

- Welcher Seitentyp rankt: Blog, Kategorie, Produkt, Vergleich?
- Welche Features sieht man: Ads, Local Pack, Shopping, PAA?
- Sind die gleichen Domains immer in den Top 3?

Wenn Ads oder grosse Plattformen dominieren, ueberverspricht Volume.

### Schritt 5 - In die Top Seiten klicken

1-3 Top URLs oeffnen und checken:

- Geschaetzter organischer Traffic pro Seite
- Top Keywords die Traffic bringen
- Wie aktuell und wie gut der Content ist

Wenn die Top Seite Traffic aus vielen Keywords bekommt, ist das echtes Topic Potential.

### Schritt 6 - Entscheiden: erstellen, updaten oder skip

Ich packe jedes Keyword in einen Bucket:

- Erstellen: wir haben keine Seite und Intent passt
- Updaten: Seite existiert aber ist schwach oder alt
- Skip: zu schwer, zu noisy, oder zu wenig Business Value

## Fuer neue Websites: sicherere Keywords waehlen

Wenn deine Site selten in den Top 100 ist, nimm sichere Wins:

- Long-tail Keywords mit klarem Intent
- Niedrigere KD
- Hohe CPS (Leute klicken)
- SERPs ohne starke Ads oder Mega Brands

Dann interne Links von diesen Seiten zu groesseren Topics bauen.

## Mini Checkliste

- Land und Sprache korrekt
- Volume gecheckt
- Clicks und CPS gecheckt
- Traffic Potential gecheckt
- SERP Features gecheckt
- Top Seiten geprueft
- Keyword gelabelt: erstellen / updaten / skip
`.trim(),
    },
    sv: {
      title: 'Traffic potential ar viktigare an volume (Ahrefs)',
      topic: 'SEO',
      metaTitle: 'Traffic potential vs volume | Ahrefs',
      metaDescription: 'Valj inte keywords bara pa volume. Anvand Clicks, Clicks per search och Traffic Potential i Ahrefs for att hitta keywords som faktiskt kan ge trafik.',
      content: `
## Varfor volume inte racker

Search volume visar hur ofta ett keyword sokas. Men inte hur manga som klickar.

Manga SERPs "stjaler" klick:

- Ads over organiska resultat
- Shopping block
- Local pack
- "People also ask"
- Featured snippets / knowledge panels
- Stora brands som ofta ligger hogst

Sa tva keywords kan ha samma volume men helt olika trafik.

## 4 metrics jag alltid kollar

I Ahrefs Keyword Explorer kollar jag forst:

- Volume: searches per manad
- Clicks: estimerade klick fran SERP (inte searches)
- Clicks per search (CPS): clicks delat med searches
- Traffic potential (TP): hur mycket trafik #1 sidan kan fa fran topic (inte bara huvudkeyword)

Extra:

- KD: hur svart det ar att ranka
- CPC: signal for kommersiellt varde

## Snabbt exempel

Keyword A:

- Volume: 10000
- Clicks: 2500
- CPS: 0.25

Keyword B:

- Volume: 3000
- Clicks: 2700
- CPS: 0.90

Keyword B kan vara battre, trots lagre volume, for att folk faktiskt klickar.

## Sa hittar du traffic potential i Ahrefs (steg)

### Steg 1 - Oppna Keyword Explorer

- Skriv in keyword.
- Satt ratt land och sprak.

Matcha alltid din riktiga marknad. Annars ar siffrorna meningslosa.

### Steg 2 - Jamfor Volume med Clicks

- Om Clicks ar nara Volume: bra, SERP skickar klick.
- Om Clicks ar langt under Volume: SERP ar noisy eller svarar utan klick.

CPS som genvag:

- CPS nara 1.0: de flesta searches leder till klick
- CPS nara 0.2: de flesta searches leder inte till klick

### Steg 3 - Kolla Traffic Potential (TP)

Traffic potential ar det manga missar.

Ahrefs estimerar hur mycket organisk trafik top sidan far fran alla keywords den rankar for.

Det ar viktigt eftersom en stark sida ofta rankar for manga varianter.

Tumregel:

- Om TP ar mycket hogre an Volume, ar det ett bredare topic.
- Om TP ar nara Volume, ar det mer "single intent".

### Steg 4 - SERP reality check

Oppna SERP overview och kolla top resultat:

- Vilken sidtyp rankar: blog, kategori, produkt, jamforelse?
- Vilka features syns: ads, local pack, shopping, PAA?
- Ar samma domains alltid i top 3?

Om SERP domineras av ads eller stora plattformar, overlover volume.

### Steg 5 - Klicka in i top sidor

Oppna 1-3 top URLs och kolla:

- Estimerad organisk trafik per sida
- Top keywords som driver trafik
- Hur frascht och bra innehall ar

Om top sidan far trafik fran manga keywords, ar det riktig topic potential.

### Steg 6 - Bestam: skapa, uppdatera eller skippa

Jag lagger varje keyword i en bucket:

- Skapa: vi har ingen sida och intent passar
- Uppdatera: vi har en sida men den ar svag eller gammal
- Skippa: for svart, for noisy eller lag business value

## For nya sajter: valj sakerare keywords

Om du sallan rankar i top 100, satsa pa sakerare wins:

- Long-tail keywords med tydlig intent
- Lagre KD
- Hog CPS (folk klickar)
- SERPs utan massor av ads eller mega brands

Bygg sen interna lankar fran dessa sidor till storre topics.

## Mini checklista

- Ratt land och sprak
- Volume kollad
- Clicks och CPS kollad
- Traffic potential kollad
- SERP features kollad
- Top sidor kollade
- Keyword label: skapa / uppdatera / skippa
`.trim(),
    },
    da: {
      title: 'Traffic potential er vigtigere end volume (Ahrefs)',
      topic: 'SEO',
      metaTitle: 'Traffic potential vs volume | Ahrefs',
      metaDescription: 'Vaelg ikke keywords kun pa volume. Brug Clicks, Clicks per search og Traffic Potential i Ahrefs for at finde keywords der faktisk kan give trafik.',
      content: `
## Hvorfor volume ikke er nok

Search volume viser hvor ofte et keyword bliver sogt. Men ikke hvor mange der klikker.

Mange SERPs "stjaeler" klik:

- Ads over organiske resultater
- Shopping blokke
- Local pack
- "People also ask"
- Featured snippets / knowledge panels
- Store brands der ofte ligger i toppen

Saa to keywords kan have samme volume men helt forskellig trafik.

## 4 metrics jeg altid tjekker

I Ahrefs Keyword Explorer tjekker jeg foerst:

- Volume: searches per maaned
- Clicks: estimerede klik fra SERP (ikke searches)
- Clicks per search (CPS): clicks delt med searches
- Traffic potential (TP): hvor meget trafik #1 siden kan faa fra topic (ikke kun hovedkeyword)

Ekstra:

- KD: hvor svaert det er at ranke
- CPC: signal for kommerciel vaerdi

## Hurtigt eksempel

Keyword A:

- Volume: 10000
- Clicks: 2500
- CPS: 0.25

Keyword B:

- Volume: 3000
- Clicks: 2700
- CPS: 0.90

Keyword B kan vaere bedre, selv med lavere volume, fordi folk faktisk klikker.

## Saadan finder du traffic potential i Ahrefs (trin)

### Trin 1 - Aabn Keyword Explorer

- Indtast keyword.
- Vaelg det rigtige land og sprog.

Match altid dit rigtige marked. Ellers er tallene ligegyldige.

### Trin 2 - Sammenlign Volume med Clicks

- Hvis Clicks er taet pa Volume: godt, SERP giver klik.
- Hvis Clicks er langt under Volume: SERP er noisy eller svarer uden klik.

CPS som genvej:

- CPS naer 1.0: de fleste searches bliver til klik
- CPS naer 0.2: de fleste searches bliver ikke til klik

### Trin 3 - Tjek Traffic Potential (TP)

Traffic potential er det mange overser.

Ahrefs estimerer hvor meget organisk trafik top siden faar fra alle keywords den ranker for.

Det er vigtigt fordi en staerk side ofte ranker for mange varianter.

Tommelfingerregel:

- Hvis TP er meget hoejere end Volume, er det et bredere topic.
- Hvis TP er naer Volume, er det mere "single intent".

### Trin 4 - SERP reality check

Aabn SERP overview og kig pa top resultater:

- Hvilken side type ranker: blog, kategori, produkt, sammenligning?
- Hvilke features er der: ads, local pack, shopping, PAA?
- Er de samme domains altid i top 3?

Hvis SERP domineres af ads eller store platforme, saa lover volume for meget.

### Trin 5 - Klik ind pa top sider

Aabn 1-3 top URLs og tjek:

- Estimeret organisk trafik per side
- Top keywords der giver trafik
- Hvor frisk og hvor god content er

Hvis top siden faar trafik fra mange keywords, er det rigtig topic potential.

### Trin 6 - Beslut: lav, opdater eller skip

Jeg putter hvert keyword i en bucket:

- Lav: vi har ingen side og intent passer
- Opdater: vi har en side men den er svag eller gammel
- Skip: for svaert, for noisy eller lav business value

## For nye websites: vaelg mere sikre keywords

Hvis du sjaeldent ranker i top 100, saa ga efter sikre wins:

- Long-tail keywords med klar intent
- Lavere KD
- Hoj CPS (folk klikker)
- SERPs uden mange ads eller mega brands

Byg derefter interne links fra disse sider til dine storre topics.

## Mini tjekliste

- Rigtigt land og sprog
- Volume tjekket
- Clicks og CPS tjekket
- Traffic potential tjekket
- SERP features tjekket
- Top sider tjekket
- Keyword label: lav / opdater / skip
`.trim(),
    },
    fr: {
      title: 'Traffic potential est plus important que le volume (Ahrefs)',
      topic: 'SEO',
      metaTitle: 'Traffic potential vs volume | Ahrefs',
      metaDescription: 'Ne choisis pas tes keywords seulement par volume. Utilise Clicks, Clicks per search et Traffic Potential dans Ahrefs pour trouver des keywords qui peuvent vraiment apporter du trafic.',
      content: `
## Pourquoi le volume ne suffit pas

Le search volume montre combien de fois un keyword est cherche. Mais pas combien de gens cliquent.

Beaucoup de SERPs "volent" des clics:

- Ads au dessus des resultats organiques
- Blocs shopping
- Local pack
- "People also ask"
- Featured snippets / knowledge panels
- Grosses marques qui sont souvent en haut

Donc deux keywords peuvent avoir le meme volume, mais un trafic tres different.

## Les 4 metrics que je check toujours

Dans Ahrefs Keyword Explorer, je regarde d abord:

- Volume: searches par mois
- Clicks: clics estimes depuis la SERP (pas les searches)
- Clicks per search (CPS): clicks divise par searches
- Traffic potential (TP): combien de trafic la page #1 peut obtenir depuis le topic (pas seulement le keyword principal)

En plus:

- KD: difficulte pour ranker
- CPC: signal de valeur commerciale

## Exemple rapide

Keyword A:

- Volume: 10000
- Clicks: 2500
- CPS: 0.25

Keyword B:

- Volume: 3000
- Clicks: 2700
- CPS: 0.90

Keyword B peut etre meilleur, meme avec moins de volume, parce que les gens cliquent vraiment.

## Comment trouver le traffic potential dans Ahrefs (etapes)

### Etape 1 - Ouvre Keyword Explorer

- Entre ton keyword.
- Choisis le bon pays et la bonne langue.

Toujours matcher ton vrai marche. Sinon les chiffres ne servent a rien.

### Etape 2 - Compare Volume et Clicks

- Si Clicks est proche de Volume: bien, la SERP envoie des clics.
- Si Clicks est tres bas vs Volume: SERP noisy ou reponse sans clic.

CPS comme raccourci:

- CPS proche de 1.0: la plupart des searches deviennent des clics
- CPS proche de 0.2: la plupart des searches ne deviennent pas des clics

### Etape 3 - Check Traffic Potential (TP)

Traffic potential est ce que beaucoup ignorent.

Ahrefs estime combien de trafic organique la page top recoit depuis tous les keywords ou elle ranke.

Important parce qu une bonne page ranke souvent sur beaucoup de variantes.

Regle simple:

- Si TP est beaucoup plus haut que Volume, c est un topic plus large.
- Si TP est proche de Volume, c est plus "single intent".

### Etape 4 - SERP reality check

Ouvre la SERP overview et regarde les top resultats:

- Quel type de page ranke: blog, categorie, produit, comparaison?
- Quelles features: ads, local pack, shopping, PAA?
- Les memes domains sont toujours top 3?

Si la SERP est dominee par ads ou grosses plateformes, volume promet trop.

### Etape 5 - Clique dans les top pages

Ouvre 1-3 top URLs et check:

- Trafic organique estime par page
- Top keywords qui apportent du trafic
- Fraicheur et qualite du contenu

Si la page top recoit du trafic depuis beaucoup de keywords, c est du vrai topic potential.

### Etape 6 - Decide: creer, update, ou skip

Je mets chaque keyword dans un bucket:

- Creer: pas de page et intent ok
- Update: page existe mais faible ou ancienne
- Skip: trop dur, trop noisy, ou faible business value

## Pour les nouveaux sites: choisir des keywords plus safe

Si ton site ne ranke presque jamais top 100, vise des wins plus safe:

- Long-tail avec intent clair
- KD plus bas
- CPS eleve (les gens cliquent)
- SERPs pas dominees par ads ou mega brands

Puis construis des internal links vers tes plus gros topics.

## Mini checklist

- Bon pays et langue
- Volume check
- Clicks et CPS check
- Traffic potential check
- SERP features check
- Top pages check
- Keyword label: creer / update / skip
`.trim(),
    },
    it: {
      title: 'Traffic potential conta piu del volume (Ahrefs)',
      topic: 'SEO',
      metaTitle: 'Traffic potential vs volume | Ahrefs',
      metaDescription: 'Non scegliere keywords solo per volume. Usa Clicks, Clicks per search e Traffic Potential in Ahrefs per trovare keywords che possono portare davvero traffico.',
      content: `
## Perche il volume non basta

Il search volume mostra quante volte un keyword viene cercato. Ma non quante persone cliccano.

Molte SERPs "rubano" click:

- Ads sopra i risultati organici
- Blocchi shopping
- Local pack
- "People also ask"
- Featured snippets / knowledge panels
- Grandi brand che stanno spesso in alto

Quindi due keywords possono avere lo stesso volume, ma traffico molto diverso.

## Le 4 metrics che controllo sempre

In Ahrefs Keyword Explorer guardo prima:

- Volume: searches al mese
- Clicks: click stimati dalla SERP (non searches)
- Clicks per search (CPS): clicks diviso per searches
- Traffic potential (TP): quanta traffic la pagina #1 puo ottenere dal topic (non solo il keyword principale)

In piu:

- KD: difficolta di ranking
- CPC: segnale di valore commerciale

## Esempio veloce

Keyword A:

- Volume: 10000
- Clicks: 2500
- CPS: 0.25

Keyword B:

- Volume: 3000
- Clicks: 2700
- CPS: 0.90

Keyword B puo essere migliore, anche con meno volume, perche le persone cliccano davvero.

## Come trovare il traffic potential in Ahrefs (passi)

### Step 1 - Apri Keyword Explorer

- Inserisci il keyword.
- Scegli paese e lingua giusti.

Deve matchare il tuo mercato reale. Altrimenti i numeri non valgono.

### Step 2 - Confronta Volume e Clicks

- Se Clicks e vicino a Volume: bene, la SERP manda click.
- Se Clicks e molto sotto Volume: SERP noisy o risposta senza click.

CPS come scorciatoia:

- CPS vicino a 1.0: la maggior parte delle searches diventa click
- CPS vicino a 0.2: la maggior parte delle searches non diventa click

### Step 3 - Controlla Traffic Potential (TP)

Traffic potential e la parte che molti ignorano.

Ahrefs stima quanto traffico organico la pagina top riceve da tutti i keywords per cui ranka.

Importante perche una pagina forte ranka spesso per molte varianti.

Regola semplice:

- Se TP e molto piu alto di Volume, e un topic piu ampio.
- Se TP e vicino a Volume, e piu "single intent".

### Step 4 - SERP reality check

Apri la SERP overview e guarda i top risultati:

- Che tipo di pagina ranka: blog, categoria, prodotto, confronto?
- Quali features: ads, local pack, shopping, PAA?
- Gli stessi domains sono sempre top 3?

Se la SERP e dominata da ads o grandi piattaforme, il volume promette troppo.

### Step 5 - Apri le top pages

Apri 1-3 top URLs e controlla:

- Traffico organico stimato per pagina
- Top keywords che portano traffico
- Quanto e fresca e utile la content

Se la pagina top riceve traffico da molti keywords, e vero topic potential.

### Step 6 - Decidi: crea, aggiorna, o skip

Metto ogni keyword in un bucket:

- Crea: non abbiamo una pagina e intent ok
- Aggiorna: pagina esiste ma debole o vecchia
- Skip: troppo difficile, troppo noisy, o basso business value

## Per siti nuovi: scegli keywords piu sicure

Se il sito non ranka quasi mai top 100, punta a wins piu sicure:

- Long-tail con intent chiaro
- KD piu basso
- CPS alto (le persone cliccano)
- SERPs non dominate da ads o mega brands

Poi costruisci internal links verso i topic piu grandi.

## Mini checklist

- Paese e lingua corretti
- Volume check
- Clicks e CPS check
- Traffic potential check
- SERP features check
- Top pages check
- Keyword label: crea / aggiorna / skip
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    console.log('Publishing Ahrefs traffic potential article to database...')

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
