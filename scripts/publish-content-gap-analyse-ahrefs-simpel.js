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
  slug: 'content-gap-analyse-ahrefs-stappenplan',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Content gap analyse in Ahrefs: simpel stappenplan',
  content: `
## Wat is een content gap analyse?

Een content gap analyse laat zien op welke keywords jouw concurrenten ranken, terwijl jouw site daar (nog) niet voor zichtbaar is.

Je gebruikt dit om snel te zien:

- Welke onderwerpen je mist
- Welke pagina's je moet maken of verbeteren
- Welke keywords waarschijnlijk sneller resultaat geven

## Voor je start (1 minuut)

- Kies 3 tot 5 echte concurrenten (geen Wikipedia, vacaturesites of marketplaces als dat niet je business is).
- Gebruik dezelfde markt in Ahrefs (land / taal) als waar jij op mikt.

## Stap 1 - Vind de juiste concurrenten

In Ahrefs: Site Explorer -> Organic competitors.

- Pak concurrenten die hetzelfde verkopen en dezelfde doelgroep hebben.
- Dubbelcheck handmatig: overlappende keywords betekent niet automatisch dat het een echte concurrent is.

## Stap 2 - Open de Content Gap tool

In Ahrefs: Site Explorer -> Content gap.

Vul in:

- "Show keywords that the below targets rank for": je concurrenten
- "But the following target doesn't rank for": jouw domein

Start-instellingen die vaak goed werken:

- Intersections: minimaal 2 concurrenten
- Positie: concurrenten in top 10
- Jij: niet in top 100 (of niet in top 50 als je strenger wil zijn)

## Stap 3 - Filter de lijst (zo maak je hem bruikbaar)

De ruwe lijst is vaak te groot. Filter hem slimmer:

- Intersections: 2+
- Volume: bijvoorbeeld 50 tot 5000
- KD: bijvoorbeeld max 20-30 (afhankelijk van je autoriteit)
- Exclude: concurrent-merken, "login", "pricing" (als dat niet past), etc.

Tip: open 5 tot 10 keywords en check de SERP. Dan zie je direct het zoekintentie type.

## Stap 4 - Kies je winners (new vs optimize)

Stel per keyword cluster deze vragen:

- Hebben we al een pagina die hierbij past? Dan optimaliseren.
- Past de zoekintentie bij een blog, categorie, productpagina of vergelijking?
- Wat doet de concurrent goed, en hoe kunnen wij beter zijn?

Focus op quick wins:

- Lagere KD
- Duidelijke intent
- Hoge business value
- Concurrenten ranken met dunne of verouderde content

## Stap 5 - Maak er een contentplan van

Werk in batches:

- Groepeer keywords per onderwerp (topic cluster)
- Maak 1 hoofdartikel + ondersteunende artikelen
- Voeg interne links toe (van support -> hoofdartikel, en andersom)
- Zet de belangrijkste keywords in Rank Tracker en meet na 4-8 weken

## Veelgemaakte fouten

- Verkeerde concurrenten kiezen
- Alleen op volume sturen (maar intent negeren)
- Branded keywords niet wegfilteren
- Verwachten te ranken terwijl je site nergens in de top 100 komt

Als je (bijna) nooit in de top 100 staat, fix dan eerst je basis: techniek, interne links, en een paar sterke pagina's.

## Mini checklist

- 3-5 echte concurrenten gekozen
- Content Gap met intersections 2+ gedraaid
- Branded termen weggefilterd
- Volume en KD filter gezet
- Intent gecheckt in SERP
- New vs optimize besloten
- Topic clusters gemaakt
- Rank Tracker aangezet
`.trim(),
  translations: {
    en: {
      title: 'Ahrefs content gap analysis: simple step-by-step',
      topic: 'SEO',
      metaTitle: 'Ahrefs content gap analysis | Simple guide',
      metaDescription: 'Run a content gap analysis in Ahrefs to find keywords your competitors rank for but you do not. Includes filters, prioritization, and a quick checklist.',
      content: `
## What is a content gap analysis?

A content gap analysis shows which keywords your competitors rank for, while your site is not visible yet.

Use it to quickly find:

- Topics you are missing
- Pages to create or improve
- Keywords that are likely easier wins

## Before you start (1 minute)

- Pick 3 to 5 real competitors (not Wikipedia, job boards, or marketplaces if those are not your business).
- Use the same market in Ahrefs (country / language) that you target.

## Step 1 - Find the right competitors

In Ahrefs: Site Explorer -> Organic competitors.

- Choose sites that sell the same thing and target the same audience.
- Double-check manually: keyword overlap does not always mean a real competitor.

## Step 2 - Open the Content Gap tool

In Ahrefs: Site Explorer -> Content gap.

Fill in:

- "Show keywords that the below targets rank for": your competitors
- "But the following target doesn't rank for": your domain

Good starting settings:

- Intersections: at least 2 competitors
- Position: competitors in the top 10
- You: not in the top 100 (or top 50 if you want to be stricter)

## Step 3 - Filter the list (make it usable)

The raw list is usually too big. Filter it down:

- Intersections: 2+
- Volume: for example 50 to 5000
- KD: for example max 20-30 (depends on your authority)
- Exclude: competitor brands, "login", "pricing" (if it does not fit), etc.

Tip: open 5 to 10 keywords and check the SERP. You will see the search intent fast.

## Step 4 - Pick winners (new vs optimize)

For each keyword cluster, ask:

- Do we already have a relevant page? Then optimize.
- What page type matches the intent: blog, category, product, comparison?
- What does the competitor do well, and how can we do better?

Focus on quick wins:

- Lower KD
- Clear intent
- High business value
- Competitors rank with thin or outdated content

## Step 5 - Turn it into a content plan

Work in batches:

- Group keywords by topic (topic clusters)
- Create 1 main page + supporting pages
- Add internal links (support -> main, and back)
- Track core keywords in Rank Tracker and review after 4-8 weeks

## Common mistakes

- Choosing the wrong competitors
- Chasing volume but ignoring intent
- Not filtering branded keywords
- Expecting to rank when your site does not reach the top 100

If you are almost never in the top 100, fix the basics first: technical SEO, internal links, and a few strong pages.

## Mini checklist

- Picked 3-5 real competitors
- Ran Content Gap with intersections 2+
- Filtered branded terms
- Set volume and KD filters
- Checked intent in the SERP
- Decided new vs optimize
- Built topic clusters
- Enabled Rank Tracker
`.trim(),
    },
    nl: {
      title: 'Content gap analyse in Ahrefs: simpel stappenplan',
      topic: 'SEO',
      metaTitle: 'Content gap analyse in Ahrefs | Simpel stappenplan',
      metaDescription: 'Zo doe je een content gap analyse in Ahrefs: concurrenten kiezen, Content Gap draaien, slim filteren en omzetten naar een contentplan.',
      content: `
## Wat is een content gap analyse?

Een content gap analyse laat zien op welke keywords jouw concurrenten ranken, terwijl jouw site daar (nog) niet voor zichtbaar is.

Je gebruikt dit om snel te zien:

- Welke onderwerpen je mist
- Welke pagina's je moet maken of verbeteren
- Welke keywords waarschijnlijk sneller resultaat geven

## Voor je start (1 minuut)

- Kies 3 tot 5 echte concurrenten (geen Wikipedia, vacaturesites of marketplaces als dat niet je business is).
- Gebruik dezelfde markt in Ahrefs (land / taal) als waar jij op mikt.

## Stap 1 - Vind de juiste concurrenten

In Ahrefs: Site Explorer -> Organic competitors.

- Pak concurrenten die hetzelfde verkopen en dezelfde doelgroep hebben.
- Dubbelcheck handmatig: overlappende keywords betekent niet automatisch dat het een echte concurrent is.

## Stap 2 - Open de Content Gap tool

In Ahrefs: Site Explorer -> Content gap.

Vul in:

- "Show keywords that the below targets rank for": je concurrenten
- "But the following target doesn't rank for": jouw domein

Start-instellingen die vaak goed werken:

- Intersections: minimaal 2 concurrenten
- Positie: concurrenten in top 10
- Jij: niet in top 100 (of niet in top 50 als je strenger wil zijn)

## Stap 3 - Filter de lijst (zo maak je hem bruikbaar)

De ruwe lijst is vaak te groot. Filter hem slimmer:

- Intersections: 2+
- Volume: bijvoorbeeld 50 tot 5000
- KD: bijvoorbeeld max 20-30 (afhankelijk van je autoriteit)
- Exclude: concurrent-merken, "login", "pricing" (als dat niet past), etc.

Tip: open 5 tot 10 keywords en check de SERP. Dan zie je direct het zoekintentie type.

## Stap 4 - Kies je winners (new vs optimize)

Stel per keyword cluster deze vragen:

- Hebben we al een pagina die hierbij past? Dan optimaliseren.
- Past de zoekintentie bij een blog, categorie, productpagina of vergelijking?
- Wat doet de concurrent goed, en hoe kunnen wij beter zijn?

Focus op quick wins:

- Lagere KD
- Duidelijke intent
- Hoge business value
- Concurrenten ranken met dunne of verouderde content

## Stap 5 - Maak er een contentplan van

Werk in batches:

- Groepeer keywords per onderwerp (topic cluster)
- Maak 1 hoofdartikel + ondersteunende artikelen
- Voeg interne links toe (van support -> hoofdartikel, en andersom)
- Zet de belangrijkste keywords in Rank Tracker en meet na 4-8 weken

## Veelgemaakte fouten

- Verkeerde concurrenten kiezen
- Alleen op volume sturen (maar intent negeren)
- Branded keywords niet wegfilteren
- Verwachten te ranken terwijl je site nergens in de top 100 komt

Als je (bijna) nooit in de top 100 staat, fix dan eerst je basis: techniek, interne links, en een paar sterke pagina's.

## Mini checklist

- 3-5 echte concurrenten gekozen
- Content Gap met intersections 2+ gedraaid
- Branded termen weggefilterd
- Volume en KD filter gezet
- Intent gecheckt in SERP
- New vs optimize besloten
- Topic clusters gemaakt
- Rank Tracker aangezet
`.trim(),
    },
    de: {
      title: 'Ahrefs Content Gap Analyse: einfacher Ablauf',
      topic: 'SEO',
      metaTitle: 'Ahrefs Content Gap Analyse | Einfacher Ablauf',
      metaDescription: 'So machst du eine Content Gap Analyse in Ahrefs: Wettbewerber finden, Content Gap nutzen, sinnvoll filtern und in einen Content Plan umsetzen.',
      content: `
## Was ist eine Content Gap Analyse?

Eine Content Gap Analyse zeigt Keywords, fuer die deine Wettbewerber ranken, du aber (noch) nicht sichtbar bist.

Damit findest du schnell:

- Themen die dir fehlen
- Seiten die du erstellen oder verbessern solltest
- Keywords die oft schneller funktionieren

## Bevor du startest (1 Minute)

- Waehle 3 bis 5 echte Wettbewerber (nicht Wikipedia, Job Boards oder Marktplatz-Seiten, wenn das nicht dein Business ist).
- Nutze in Ahrefs den gleichen Markt (Land / Sprache) den du targetest.

## Schritt 1 - Die richtigen Wettbewerber finden

In Ahrefs: Site Explorer -> Organic competitors.

- Nimm Sites die das Gleiche verkaufen und die gleiche Zielgruppe haben.
- Manuell pruefen: Keyword Overlap heisst nicht automatisch echter Wettbewerber.

## Schritt 2 - Content Gap Tool oeffnen

In Ahrefs: Site Explorer -> Content gap.

Eintragen:

- "Show keywords that the below targets rank for": deine Wettbewerber
- "But the following target doesn't rank for": deine Domain

Gute Start-Einstellungen:

- Intersections: mindestens 2 Wettbewerber
- Position: Wettbewerber in den Top 10
- Du: nicht in den Top 100 (oder Top 50 wenn du strenger sein willst)

## Schritt 3 - Liste filtern (damit es brauchbar wird)

Die Roh-Liste ist oft riesig. Filter sie:

- Intersections: 2+
- Volume: z.B. 50 bis 5000
- KD: z.B. max 20-30 (abhaengig von deiner Autoritaet)
- Exclude: Brand Terms, "login", "pricing" (wenn unpassend), etc.

Tipp: oeffne 5 bis 10 Keywords und schau dir die SERP an. Dann siehst du die Intent schnell.

## Schritt 4 - Gewinner waehlen (new vs optimize)

Pro Keyword Cluster:

- Haben wir schon eine passende Seite? Dann optimieren.
- Welche Seitentyp passt zur Intent: Blog, Kategorie, Produkt, Vergleich?
- Was macht der Wettbewerber gut, und wie koennen wir besser sein?

Fokus auf Quick Wins:

- Niedrigere KD
- Klarer Intent
- Hoher Business Value
- Wettbewerber ranken mit duennem oder veraltetem Content

## Schritt 5 - In einen Content Plan umsetzen

In Batches arbeiten:

- Keywords nach Thema gruppieren (Topic Cluster)
- 1 Hauptseite + Supporting Pages bauen
- Interne Links setzen (support -> main, und zurueck)
- Keywords in Rank Tracker tracken und nach 4-8 Wochen pruefen

## Hauefige Fehler

- Falsche Wettbewerber
- Nur Volume, aber Intent ignorieren
- Brand Keywords nicht rausfiltern
- Ranking erwarten wenn man nie Top 100 erreicht

Wenn du fast nie in den Top 100 bist, fix erst die Basics: Technik, interne Links, und ein paar starke Seiten.

## Mini Checkliste

- 3-5 echte Wettbewerber gewaehlt
- Content Gap mit intersections 2+ gestartet
- Brand Terms gefiltert
- Volume und KD gesetzt
- Intent in der SERP gecheckt
- New vs optimize entschieden
- Topic Cluster gebaut
- Rank Tracker aktiviert
`.trim(),
    },
    sv: {
      title: 'Ahrefs content gap-analys: enkel steg for steg',
      topic: 'SEO',
      metaTitle: 'Ahrefs content gap-analys | Enkel guide',
      metaDescription: 'Sa gor du en content gap-analys i Ahrefs: valj konkurrenter, kor Content Gap, filtrera smart och gor en content plan.',
      content: `
## Vad ar en content gap-analys?

En content gap-analys visar vilka keywords dina konkurrenter rankar for, medan din site inte ar synlig (annu).

Du anvander det for att hitta:

- Amnen du missar
- Sidor du ska skapa eller forbattra
- Keywords som ofta ar enklare vinster

## Innan du borjar (1 minut)

- Valj 3 till 5 riktiga konkurrenter (inte Wikipedia, jobb-sajter eller marketplaces om det inte ar din business).
- Anvand samma marknad i Ahrefs (land / sprak) som du siktar pa.

## Steg 1 - Hitta ratt konkurrenter

I Ahrefs: Site Explorer -> Organic competitors.

- Valj sajter som saljer samma sak och riktar sig till samma malgrupp.
- Dubbelkolla manuellt: overlapp betyder inte alltid riktig konkurrent.

## Steg 2 - Oppna Content Gap verktyget

I Ahrefs: Site Explorer -> Content gap.

Fyll i:

- "Show keywords that the below targets rank for": dina konkurrenter
- "But the following target doesn't rank for": din doman

Bra start-installningar:

- Intersections: minst 2 konkurrenter
- Position: konkurrenter i top 10
- Du: inte i top 100 (eller top 50 om du vill vara stramare)

## Steg 3 - Filtrera listan (gor den anvandbar)

Raa-listan ar ofta for stor. Filtrera:

- Intersections: 2+
- Volume: t.ex. 50 till 5000
- KD: t.ex. max 20-30 (beror pa din auktoritet)
- Exclude: varumarken, "login", "pricing" (om det inte passar), etc.

Tips: oppna 5 till 10 keywords och kolla SERP. Da ser du intent direkt.

## Steg 4 - Valj winners (new vs optimize)

For varje keyword cluster:

- Har vi redan en relevant sida? Da optimerar vi.
- Vilken sidtyp matchar intent: blog, kategori, produkt, jamforelse?
- Vad gor konkurrenten bra, och hur kan vi gora battre?

Fokusera pa quick wins:

- Lagre KD
- Tydlig intent
- Hog business value
- Konkurrenter rankar med tunn eller gammal content

## Steg 5 - Gor en content plan

Jobba i batches:

- Gruppera keywords per amne (topic clusters)
- Skapa 1 huvud-sida + supporting sidor
- Lagg interna lankar (support -> main, och tillbaka)
- Tracka viktiga keywords i Rank Tracker och kolla efter 4-8 veckor

## Vanliga misstag

- Fel konkurrenter
- Bara volume, men ignorera intent
- Inte filtrera branded keywords
- Forvanta ranking nar man aldrig ar i top 100

Om du nastan aldrig ar i top 100, fixa grunderna forst: teknik, interna lankar och nagra starka sidor.

## Mini checklista

- Valde 3-5 riktiga konkurrenter
- Korde Content Gap med intersections 2+
- Filtrerade branded termer
- Satte volume och KD filter
- Kollade intent i SERP
- Bestamde new vs optimize
- Byggde topic clusters
- Slog pa Rank Tracker
`.trim(),
    },
    da: {
      title: 'Ahrefs content gap analyse: enkel trin for trin',
      topic: 'SEO',
      metaTitle: 'Ahrefs content gap analyse | Enkel guide',
      metaDescription: 'Sa laver du en content gap analyse i Ahrefs: vaelg konkurrenter, koer Content Gap, filtrer smart og lav en content plan.',
      content: `
## Hvad er en content gap analyse?

En content gap analyse viser hvilke keywords dine konkurrenter ranker for, mens dit site ikke er synligt (endnu).

Du bruger den til hurtigt at finde:

- Emner du mangler
- Sider du skal lave eller forbedre
- Keywords der ofte er hurtigere wins

## Inden du starter (1 minut)

- Vaelg 3 til 5 rigtige konkurrenter (ikke Wikipedia, job sites eller marketplaces hvis det ikke er din business).
- Brug samme marked i Ahrefs (land / sprog) som du gaar efter.

## Trin 1 - Find de rigtige konkurrenter

I Ahrefs: Site Explorer -> Organic competitors.

- Vaelg sites der saelger det samme og rammer samme maalgruppe.
- Dobbelttjek manuelt: overlap betyder ikke altid en rigtig konkurrent.

## Trin 2 - Aaben Content Gap tool

I Ahrefs: Site Explorer -> Content gap.

Udfyld:

- "Show keywords that the below targets rank for": dine konkurrenter
- "But the following target doesn't rank for": dit domane

Gode start-indstillinger:

- Intersections: mindst 2 konkurrenter
- Position: konkurrenter i top 10
- Dig: ikke i top 100 (eller top 50 hvis du vil vaere mere streng)

## Trin 3 - Filtrer listen (gor den brugbar)

Raa-listen er ofte for stor. Filtrer:

- Intersections: 2+
- Volume: fx 50 til 5000
- KD: fx max 20-30 (afhaenger af din autoritet)
- Exclude: brand terms, "login", "pricing" (hvis det ikke passer), osv.

Tip: aaben 5 til 10 keywords og tjek SERP. Saa ser du intent hurtigt.

## Trin 4 - Vaelg winners (new vs optimize)

For hvert keyword cluster:

- Har vi allerede en relevant side? Saa optimer.
- Hvilken side type matcher intent: blog, kategori, produkt, sammenligning?
- Hvad gor konkurrenten godt, og hvordan kan vi gore det bedre?

Fokus pa quick wins:

- Lavere KD
- Tydelig intent
- Hoj business value
- Konkurrenter ranker med tynd eller foraldet content

## Trin 5 - Lav en content plan

Arbejd i batches:

- Grupper keywords per emne (topic clusters)
- Lav 1 hovedside + supporting sider
- Lavg interne links (support -> main, og tilbage)
- Track vigtige keywords i Rank Tracker og tjek efter 4-8 uger

## Typiske fejl

- Forkerte konkurrenter
- Kun volume, men ignorere intent
- Ikke filtrere branded keywords
- Forvente ranking naar man aldrig er i top 100

Hvis du naesten aldrig er i top 100, fix basen forst: teknik, interne links og et par staerke sider.

## Mini tjekliste

- Vaelg 3-5 rigtige konkurrenter
- Koer Content Gap med intersections 2+
- Filtrer branded termer
- Saet volume og KD filter
- Tjek intent i SERP
- Beslut new vs optimize
- Byg topic clusters
- Start Rank Tracker
`.trim(),
    },
    fr: {
      title: 'Analyse content gap Ahrefs: guide simple',
      topic: 'SEO',
      metaTitle: 'Analyse content gap Ahrefs | Guide simple',
      metaDescription: 'Fais une analyse content gap dans Ahrefs: choisir les concurrents, lancer Content Gap, filtrer intelligemment et transformer en plan de contenu.',
      content: `
## Qu est-ce qu une analyse content gap?

Une analyse content gap montre les keywords ou tes concurrents rankent, alors que ton site n est pas (encore) visible.

Tu l utilises pour trouver vite:

- Les sujets qui te manquent
- Les pages a creer ou a ameliorer
- Les keywords souvent plus faciles a gagner

## Avant de commencer (1 minute)

- Choisis 3 a 5 vrais concurrents (pas Wikipedia, sites emploi ou marketplaces si ce n est pas ton business).
- Utilise le meme marche dans Ahrefs (pays / langue) que tu cibles.

## Etape 1 - Trouver les bons concurrents

Dans Ahrefs: Site Explorer -> Organic competitors.

- Choisis des sites qui vendent la meme chose et visent la meme audience.
- Verifie a la main: overlap keywords ne veut pas toujours dire vrai concurrent.

## Etape 2 - Ouvrir l outil Content Gap

Dans Ahrefs: Site Explorer -> Content gap.

Renseigne:

- "Show keywords that the below targets rank for": tes concurrents
- "But the following target doesn't rank for": ton domaine

Bons reglages de depart:

- Intersections: au moins 2 concurrents
- Position: concurrents dans le top 10
- Toi: pas dans le top 100 (ou top 50 si tu veux etre plus strict)

## Etape 3 - Filtrer la liste (pour la rendre utile)

La liste brute est souvent enorme. Filtre:

- Intersections: 2+
- Volume: par exemple 50 a 5000
- KD: par exemple max 20-30 (selon ton autorite)
- Exclude: marques concurrentes, "login", "pricing" (si ca ne colle pas), etc.

Astuce: ouvre 5 a 10 keywords et regarde la SERP. Tu vois l intent rapidement.

## Etape 4 - Choisir les winners (new vs optimize)

Pour chaque cluster:

- On a deja une page pertinente? Alors on optimise.
- Quel type de page colle a l intent: blog, categorie, produit, comparaison?
- Que fait le concurrent, et comment faire mieux?

Focus quick wins:

- KD plus bas
- Intent clair
- Forte valeur business
- Concurrents rankent avec du contenu mince ou date

## Etape 5 - Faire un plan de contenu

Travaille en batches:

- Grouper les keywords par sujet (topic clusters)
- Creer 1 page principale + pages support
- Ajouter des liens internes (support -> main, et retour)
- Suivre les keywords dans Rank Tracker et verifier apres 4-8 semaines

## Erreurs courantes

- Mauvais concurrents
- Chasser le volume mais ignorer l intent
- Ne pas filtrer les branded keywords
- Esperer ranker quand tu n es jamais dans le top 100

Si tu es presque jamais top 100, corrige d abord les bases: technique, liens internes et quelques pages fortes.

## Mini checklist

- Choisi 3-5 vrais concurrents
- Lance Content Gap avec intersections 2+
- Filtre les termes branded
- Fixe volume et KD
- Verifie l intent dans la SERP
- Decide new vs optimize
- Cree des topic clusters
- Active Rank Tracker
`.trim(),
    },
    it: {
      title: 'Ahrefs content gap analysis: guida semplice',
      topic: 'SEO',
      metaTitle: 'Ahrefs content gap analysis | Guida semplice',
      metaDescription: 'Come fare una content gap analysis in Ahrefs: scegliere competitor, usare Content Gap, filtrare bene e trasformare in un piano contenuti.',
      content: `
## Cos e una content gap analysis?

Una content gap analysis mostra per quali keywords i competitor rankano, mentre il tuo sito non e (ancora) visibile.

Ti serve per trovare velocemente:

- Temi che ti mancano
- Pagine da creare o migliorare
- Keywords che spesso sono piu facili da vincere

## Prima di iniziare (1 minuto)

- Scegli 3 a 5 competitor reali (non Wikipedia, job board o marketplace se non e il tuo business).
- Usa lo stesso mercato in Ahrefs (paese / lingua) che stai targettando.

## Step 1 - Trova i competitor giusti

In Ahrefs: Site Explorer -> Organic competitors.

- Scegli siti che vendono la stessa cosa e puntano allo stesso pubblico.
- Controlla a mano: overlap non significa sempre vero competitor.

## Step 2 - Apri lo strumento Content Gap

In Ahrefs: Site Explorer -> Content gap.

Inserisci:

- "Show keywords that the below targets rank for": i competitor
- "But the following target doesn't rank for": il tuo dominio

Buone impostazioni iniziali:

- Intersections: almeno 2 competitor
- Posizione: competitor nella top 10
- Tu: non in top 100 (o top 50 se vuoi essere piu severo)

## Step 3 - Filtra la lista (per renderla utile)

La lista grezza e spesso enorme. Filtra:

- Intersections: 2+
- Volume: per esempio 50 a 5000
- KD: per esempio max 20-30 (dipende dalla tua autorita)
- Exclude: brand competitor, "login", "pricing" (se non e rilevante), ecc.

Tip: apri 5 a 10 keywords e guarda la SERP. Capisci subito l intent.

## Step 4 - Scegli i winners (new vs optimize)

Per ogni cluster:

- Abbiamo gia una pagina adatta? Allora ottimizza.
- Quale tipo di pagina matcha l intent: blog, categoria, prodotto, confronto?
- Cosa fa bene il competitor e come possiamo fare meglio?

Focus sui quick wins:

- KD piu basso
- Intent chiaro
- Alta business value
- Competitor rankano con contenuti sottili o vecchi

## Step 5 - Trasformalo in un piano contenuti

Lavora a batch:

- Raggruppa keywords per tema (topic clusters)
- Crea 1 pagina principale + pagine di supporto
- Aggiungi internal link (support -> main, e ritorno)
- Traccia le keyword in Rank Tracker e controlla dopo 4-8 settimane

## Errori comuni

- Scegliere competitor sbagliati
- Inseguire volume ma ignorare intent
- Non filtrare branded keywords
- Aspettarsi ranking quando non si entra mai nella top 100

Se sei quasi mai in top 100, sistema prima le basi: tecnica, internal link e alcune pagine forti.

## Mini checklist

- Scelti 3-5 competitor reali
- Lanciato Content Gap con intersections 2+
- Filtrati i termini branded
- Impostati volume e KD
- Controllato intent nella SERP
- Deciso new vs optimize
- Creati topic clusters
- Attivato Rank Tracker
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    console.log('Publishing Ahrefs content gap article to database...')

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
