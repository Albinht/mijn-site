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

const page = {
  slug: 'zoekmachine-optimalisatie-specialist',
  type: 'SERVICE',
  status: 'PUBLISHED',
  title: 'Zoekmachine optimalisatie specialist',
  metaTitle: 'Zoekmachine optimalisatie specialist | Structureel hoger in Google',
  metaDescription: 'Zoekmachine optimalisatie specialist nodig? Wij verbeteren techniek, content en autoriteit zodat je structureel hoger in Google komt. Transparant, zonder vast contract.',
  content: `
<h2>Zoekmachine optimalisatie specialist voor MKB</h2>
<p>Wil je meer aanvragen via Google, zonder afhankelijk te zijn van advertenties? Als <strong>zoekmachine optimalisatie specialist</strong> help ik MKB-bedrijven om structureel hoger te ranken met een simpele aanpak: techniek op orde, sterke paginas, en autoriteit opbouwen.</p>

<h2>Wat doet een zoekmachine optimalisatie specialist?</h2>
<p>SEO bestaat uit drie pijlers die elkaar versterken:</p>
<ul>
  <li><strong>Techniek</strong>: indexatie, snelheid, structuur, interne links</li>
  <li><strong>Content</strong>: paginas die precies de zoekintentie beantwoorden</li>
  <li><strong>Autoriteit</strong>: vertrouwen via links, mentions en reputatie</li>
</ul>
<p>Als een van deze pijlers ontbreekt, ga je meestal plafonneren. Daarom werken we altijd in deze volgorde: eerst techniek, dan content, dan autoriteit.</p>

<h2>Waar je mij op kunt afrekenen</h2>
<ul>
  <li><strong>Transparant</strong>: je ziet wat we doen en waarom</li>
  <li><strong>Duurzaam</strong>: geen trucjes die later pijn doen</li>
  <li><strong>Geen vast contract</strong>: je blijft omdat het werkt, niet omdat het moet</li>
  <li><strong>Focus op conversies</strong>: traffic is leuk, resultaat is beter</li>
</ul>

<h2>Hoe we samenwerken (simpel stappenplan)</h2>
<ol>
  <li><strong>Nulmeting</strong>: Search Console + GA4, top paginas, kansen en bottlenecks</li>
  <li><strong>Quick wins</strong>: fouten fixen, interne links, titles/snippets verbeteren</li>
  <li><strong>Contentplan</strong>: topics, clusters en prioriteiten op basis van intent</li>
  <li><strong>Uitvoering</strong>: content verbeteren of maken, techniek finetunen</li>
  <li><strong>Autoriteit</strong>: kwaliteit boven kwantiteit (geen spam)</li>
  <li><strong>Rapportage</strong>: maandelijks overzicht + concrete acties voor de volgende maand</li>
</ol>

<h2>Veelgestelde vragen</h2>
<h3>Hoe snel zie ik resultaat?</h3>
<p>Quick wins zie je vaak binnen 2 tot 6 weken. Grote keywords kosten meestal maanden. We focussen daarom eerst op pagina's die al dichtbij staan (posities 4-20).</p>

<h3>Wat kost SEO?</h3>
<p>Dat hangt af van je concurrentie en de staat van je site. Je kunt klein starten en opschalen zodra je ziet wat werkt.</p>

<h3>Doen jullie ook technische SEO?</h3>
<p>Ja. Techniek is de basis: indexatie, snelheid, structuur en interne links hebben vaak direct impact op groei.</p>

<h2>Klaar om te starten?</h2>
<p>Plan een gesprek in en ik laat je in 30 minuten zien waar jouw snelste groeikansen zitten.</p>
<p><a href="/work-with-me">Ga naar samenwerken</a></p>
`.trim(),
  translations: {
    en: {
      title: 'Search engine optimization specialist',
      metaTitle: 'SEO specialist | Rank higher in Google',
      metaDescription: 'Looking for an SEO specialist? We improve technical SEO, content, and authority so you can rank higher in Google. Transparent and flexible.',
      content: `
<h2>SEO specialist for small businesses</h2>
<p>Want more leads from Google without relying on ads? As an <strong>SEO specialist</strong> I help businesses rank higher with a simple approach: technical basics, strong pages, and authority.</p>

<h2>What does an SEO specialist do?</h2>
<p>SEO has three pillars:</p>
<ul>
  <li><strong>Technical</strong>: indexation, speed, structure, internal links</li>
  <li><strong>Content</strong>: pages that match search intent</li>
  <li><strong>Authority</strong>: trust via links, mentions, reputation</li>
</ul>
<p>If one pillar is missing, growth usually plateaus. That is why we work in this order: technical, content, then authority.</p>

<h2>What you can expect</h2>
<ul>
  <li><strong>Transparent</strong>: clear actions and clear reasons</li>
  <li><strong>Sustainable</strong>: no tricks that backfire later</li>
  <li><strong>No long contracts</strong>: you stay because it works</li>
  <li><strong>Conversion focus</strong>: traffic is nice, results are better</li>
</ul>

<h2>How we work (simple plan)</h2>
<ol>
  <li><strong>Baseline</strong>: Search Console + GA4, top pages, opportunities and blockers</li>
  <li><strong>Quick wins</strong>: fix issues, add internal links, improve titles/snippets</li>
  <li><strong>Content plan</strong>: topics, clusters, priorities based on intent</li>
  <li><strong>Execution</strong>: improve or create pages, refine technical SEO</li>
  <li><strong>Authority</strong>: quality over quantity (no spam)</li>
  <li><strong>Reporting</strong>: monthly progress + next actions</li>
</ol>

<h2>FAQ</h2>
<h3>How fast will I see results?</h3>
<p>Quick wins often show in 2 to 6 weeks. Bigger keywords take longer. We start with pages already close (positions 4-20).</p>

<h3>How much does SEO cost?</h3>
<p>It depends on competition and your current baseline. You can start small and scale what works.</p>

<h3>Do you handle technical SEO?</h3>
<p>Yes. Technical SEO is the foundation: indexation, speed, structure, and internal links often move the needle fast.</p>

<h2>Ready to start?</h2>
<p>Book a call and I will show your fastest growth opportunities in 30 minutes.</p>
<p><a href="/work-with-me">Work with me</a></p>
`.trim(),
    },
    nl: {
      title: 'Zoekmachine optimalisatie specialist',
      metaTitle: 'Zoekmachine optimalisatie specialist | Structureel hoger in Google',
      metaDescription: 'Zoekmachine optimalisatie specialist nodig? Wij verbeteren techniek, content en autoriteit zodat je structureel hoger in Google komt. Transparant, zonder vast contract.',
      content: `
<h2>Zoekmachine optimalisatie specialist voor MKB</h2>
<p>Wil je meer aanvragen via Google, zonder afhankelijk te zijn van advertenties? Als <strong>zoekmachine optimalisatie specialist</strong> help ik MKB-bedrijven om structureel hoger te ranken met een simpele aanpak: techniek op orde, sterke paginas, en autoriteit opbouwen.</p>

<h2>Wat doet een zoekmachine optimalisatie specialist?</h2>
<p>SEO bestaat uit drie pijlers die elkaar versterken:</p>
<ul>
  <li><strong>Techniek</strong>: indexatie, snelheid, structuur, interne links</li>
  <li><strong>Content</strong>: paginas die precies de zoekintentie beantwoorden</li>
  <li><strong>Autoriteit</strong>: vertrouwen via links, mentions en reputatie</li>
</ul>
<p>Als een van deze pijlers ontbreekt, ga je meestal plafonneren. Daarom werken we altijd in deze volgorde: eerst techniek, dan content, dan autoriteit.</p>

<h2>Waar je mij op kunt afrekenen</h2>
<ul>
  <li><strong>Transparant</strong>: je ziet wat we doen en waarom</li>
  <li><strong>Duurzaam</strong>: geen trucjes die later pijn doen</li>
  <li><strong>Geen vast contract</strong>: je blijft omdat het werkt, niet omdat het moet</li>
  <li><strong>Focus op conversies</strong>: traffic is leuk, resultaat is beter</li>
</ul>

<h2>Hoe we samenwerken (simpel stappenplan)</h2>
<ol>
  <li><strong>Nulmeting</strong>: Search Console + GA4, top paginas, kansen en bottlenecks</li>
  <li><strong>Quick wins</strong>: fouten fixen, interne links, titles/snippets verbeteren</li>
  <li><strong>Contentplan</strong>: topics, clusters en prioriteiten op basis van intent</li>
  <li><strong>Uitvoering</strong>: content verbeteren of maken, techniek finetunen</li>
  <li><strong>Autoriteit</strong>: kwaliteit boven kwantiteit (geen spam)</li>
  <li><strong>Rapportage</strong>: maandelijks overzicht + concrete acties voor de volgende maand</li>
</ol>

<h2>Veelgestelde vragen</h2>
<h3>Hoe snel zie ik resultaat?</h3>
<p>Quick wins zie je vaak binnen 2 tot 6 weken. Grote keywords kosten meestal maanden. We focussen daarom eerst op pagina's die al dichtbij staan (posities 4-20).</p>

<h3>Wat kost SEO?</h3>
<p>Dat hangt af van je concurrentie en de staat van je site. Je kunt klein starten en opschalen zodra je ziet wat werkt.</p>

<h3>Doen jullie ook technische SEO?</h3>
<p>Ja. Techniek is de basis: indexatie, snelheid, structuur en interne links hebben vaak direct impact op groei.</p>

<h2>Klaar om te starten?</h2>
<p>Plan een gesprek in en ik laat je in 30 minuten zien waar jouw snelste groeikansen zitten.</p>
<p><a href="/work-with-me">Ga naar samenwerken</a></p>
`.trim(),
    },
    de: {
      title: 'Suchmaschinenoptimierung Spezialist',
      metaTitle: 'SEO Spezialist | Hoeher in Google ranken',
      metaDescription: 'SEO Spezialist gesucht? Wir verbessern Technik, Content und Autoritaet, damit du langfristig hoeher in Google rankst. Transparent und flexibel.',
      content: `
<h2>SEO Spezialist fuer KMU</h2>
<p>Mehr Leads aus Google ohne Abhaengigkeit von Ads? Als <strong>SEO Spezialist</strong> helfe ich Unternehmen hoeher zu ranken mit einem einfachen System: Technik, starke Seiten, Autoritaet.</p>

<h2>Was macht ein SEO Spezialist?</h2>
<p>SEO hat drei Saeulen:</p>
<ul>
  <li><strong>Technik</strong>: Indexierung, Speed, Struktur, interne Links</li>
  <li><strong>Content</strong>: Seiten die Intent treffen</li>
  <li><strong>Autoritaet</strong>: Vertrauen durch Links, Mentions, Reputation</li>
</ul>
<p>Wenn eine Saeule fehlt, stagniert Wachstum oft. Darum arbeiten wir: Technik, Content, dann Autoritaet.</p>

<h2>Was du erwarten kannst</h2>
<ul>
  <li><strong>Transparent</strong>: klare Schritte und klare Gruende</li>
  <li><strong>Nachhaltig</strong>: keine Tricks</li>
  <li><strong>Kein langer Vertrag</strong>: du bleibst weil es wirkt</li>
  <li><strong>Conversion Fokus</strong>: nicht nur Traffic</li>
</ul>

<h2>So arbeiten wir (Plan)</h2>
<ol>
  <li><strong>Baseline</strong>: Search Console + GA4, Top Seiten, Chancen und Blocker</li>
  <li><strong>Quick wins</strong>: Issues fixen, interne Links, Titles/Snippets</li>
  <li><strong>Content Plan</strong>: Topics und Cluster nach Intent</li>
  <li><strong>Umsetzung</strong>: Seiten verbessern oder erstellen</li>
  <li><strong>Autoritaet</strong>: Qualitaet vor Quantitaet</li>
  <li><strong>Reporting</strong>: monatlich + naechste Aktionen</li>
</ol>

<h2>FAQ</h2>
<h3>Wie schnell sehe ich Ergebnisse?</h3>
<p>Quick wins oft in 2 bis 6 Wochen. Grosse Keywords brauchen laenger. Wir starten mit Seiten die schon nah dran sind (Position 4-20).</p>

<h3>Was kostet SEO?</h3>
<p>Haengt von Wettbewerb und Ausgangslage ab. Du kannst klein starten und skalieren.</p>

<h2>Starten?</h2>
<p><a href="/work-with-me">Zusammenarbeiten</a></p>
`.trim(),
    },
    sv: {
      title: 'SEO specialist',
      metaTitle: 'SEO specialist | Ranka hogre i Google',
      metaDescription: 'Behov av en SEO specialist? Vi forbattrar teknik, content och auktoritet sa att du rankar hogre i Google. Transparent och flexibelt.',
      content: `
<h2>SEO specialist for foretag</h2>
<p>Vill du fa fler leads fran Google utan att vara beroende av ads? Som <strong>SEO specialist</strong> hjalper jag foretag att ranka hogre med ett enkelt upplagg: teknik, starka sidor och auktoritet.</p>

<h2>Vad gor en SEO specialist?</h2>
<ul>
  <li><strong>Teknik</strong>: indexering, hastighet, struktur, interna lankar</li>
  <li><strong>Content</strong>: sidor som matchar intent</li>
  <li><strong>Auktoritet</strong>: links, mentions, rykte</li>
</ul>

<h2>Sa jobbar vi</h2>
<ol>
  <li><strong>Baseline</strong>: Search Console + GA4, top pages och blockeringar</li>
  <li><strong>Quick wins</strong>: fixa fel, interna lankar, titles/snippets</li>
  <li><strong>Content plan</strong>: topics och clusters</li>
  <li><strong>Execution</strong>: skapa eller forbattra sidor</li>
</ol>

<p><a href="/work-with-me">Jobba med mig</a></p>
`.trim(),
    },
    da: {
      title: 'SEO specialist',
      metaTitle: 'SEO specialist | Rank hojere i Google',
      metaDescription: 'Leder du efter en SEO specialist? Vi forbedrer teknik, content og autoritet sa du kan ranke hojere i Google. Transparent og fleksibelt.',
      content: `
<h2>SEO specialist for virksomheder</h2>
<p>Vil du have flere leads fra Google uden at vaere afhagig af ads? Som <strong>SEO specialist</strong> hjalper jeg virksomheder med at ranke hojere med en enkel plan: teknik, staerke sider og autoritet.</p>

<h2>Hvad laver en SEO specialist?</h2>
<ul>
  <li><strong>Teknik</strong>: indeksering, hastighed, struktur, interne links</li>
  <li><strong>Content</strong>: sider der matcher intent</li>
  <li><strong>Autoritet</strong>: links, mentions, omdomme</li>
</ul>

<h2>Sa arbejder vi</h2>
<ol>
  <li><strong>Baseline</strong>: Search Console + GA4</li>
  <li><strong>Quick wins</strong>: fejl, interne links, titles</li>
  <li><strong>Content plan</strong>: topics og clusters</li>
  <li><strong>Execution</strong>: bygge og forbedre sider</li>
</ol>

<p><a href="/work-with-me">Arbejd med mig</a></p>
`.trim(),
    },
    fr: {
      title: 'Specialiste SEO',
      metaTitle: 'Specialiste SEO | Monter dans Google',
      metaDescription: 'Besoin d un specialiste SEO? Nous ameliorons technique, content et autorite pour monter dans Google. Transparent et flexible.',
      content: `
<h2>Specialiste SEO pour entreprises</h2>
<p>Tu veux plus de leads depuis Google sans dependre des ads? En tant que <strong>specialiste SEO</strong> j aide les entreprises a monter avec une methode simple: technique, bonnes pages, autorite.</p>

<h2>Que fait un specialiste SEO?</h2>
<ul>
  <li><strong>Technique</strong>: indexation, vitesse, structure, liens internes</li>
  <li><strong>Content</strong>: pages qui matchent l intent</li>
  <li><strong>Autorite</strong>: liens, mentions, reputation</li>
</ul>

<h2>Comment on travaille</h2>
<ol>
  <li><strong>Baseline</strong>: Search Console + GA4</li>
  <li><strong>Quick wins</strong>: corriger, liens internes, titles</li>
  <li><strong>Plan content</strong>: topics et clusters</li>
</ol>

<p><a href="/work-with-me">Travailler avec moi</a></p>
`.trim(),
    },
    it: {
      title: 'Specialista SEO',
      metaTitle: 'Specialista SEO | Salire su Google',
      metaDescription: 'Cerchi uno specialista SEO? Miglioriamo tecnica, content e autorita per salire su Google. Trasparente e flessibile.',
      content: `
<h2>Specialista SEO per aziende</h2>
<p>Vuoi piu lead da Google senza dipendere dagli ads? Come <strong>specialista SEO</strong> aiuto le aziende a crescere con un piano semplice: tecnica, pagine forti, autorita.</p>

<h2>Cosa fa uno specialista SEO?</h2>
<ul>
  <li><strong>Tecnica</strong>: indicizzazione, velocita, struttura, link interni</li>
  <li><strong>Content</strong>: pagine che matchano l intent</li>
  <li><strong>Autorita</strong>: link, mentions, reputazione</li>
</ul>

<h2>Come lavoriamo</h2>
<ol>
  <li><strong>Baseline</strong>: Search Console + GA4</li>
  <li><strong>Quick wins</strong>: fix, link interni, titles</li>
  <li><strong>Content plan</strong>: topics e clusters</li>
</ol>

<p><a href="/work-with-me">Lavora con me</a></p>
`.trim(),
    },
  },
}

async function publishPage() {
  try {
    console.log('Publishing SEO specialist landing page to database...')

    const result = await prisma.page.upsert({
      where: { slug: page.slug },
      update: {
        title: page.title,
        content: page.content,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        translations: page.translations,
        status: page.status,
        type: page.type,
      },
      create: {
        title: page.title,
        slug: page.slug,
        content: page.content,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        translations: page.translations,
        status: page.status,
        type: page.type,
        views: 0,
      },
    })

    console.log('Page published successfully!')
    console.log(`URL: /${result.slug}`)
    console.log(`ID: ${result.id}`)
  } catch (error) {
    console.error('Error publishing page:', error)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

publishPage()
