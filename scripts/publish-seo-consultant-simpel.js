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
  slug: 'seo-consultant',
  type: 'SERVICE',
  status: 'PUBLISHED',
  title: 'SEO-consultant',
  metaTitle: 'SEO-consultant | Strategie, audits en uitvoering',
  metaDescription: 'SEO-consultant nodig? Krijg een helder plan, quick wins en maandelijkse groei via techniek, content en autoriteit. Transparant, zonder vast contract.',
  content: `
<h2>SEO-consultant voor bedrijven die structureel willen groeien</h2>
<p>Zoek je een <strong>SEO-consultant</strong> die niet alleen praat, maar ook scherpe keuzes maakt? Ik help je met een duidelijk plan, prioriteiten en uitvoering. Geen losse tips, maar een aanpak die elke maand vooruitgaat.</p>

<h2>Wat doet een SEO-consultant?</h2>
<p>Een SEO-consultant helpt je om hoger te scoren in Google en meer conversies uit organisch verkeer te halen. Dat doe je met drie pijlers:</p>
<ul>
  <li><strong>Techniek</strong>: indexatie, snelheid, structuur, interne links</li>
  <li><strong>Content</strong>: paginas die precies de zoekintentie matchen</li>
  <li><strong>Autoriteit</strong>: vertrouwen via links, mentions en reputatie</li>
</ul>
<p>Als 1 pijler achterblijft, plafonneert de groei. Daarom werken we altijd in de juiste volgorde: techniek, content, autoriteit.</p>

<h2>Waar ik je mee help</h2>
<ul>
  <li><strong>SEO-audit</strong>: wat houdt je tegen en wat is de snelste winst?</li>
  <li><strong>Keyword + intent research</strong>: waar zit omzet en waar zit ruis?</li>
  <li><strong>Contentstrategie</strong>: clusters, briefings en pagina prioriteiten</li>
  <li><strong>Technische SEO</strong>: indexatie, redirects, canonicals, Core Web Vitals</li>
  <li><strong>Interne link structuur</strong>: van losse paginas naar een logisch systeem</li>
  <li><strong>Authority plan</strong>: kwaliteit boven kwantiteit (geen spam)</li>
  <li><strong>Rapportage</strong>: helder, maandelijk, met concrete acties</li>
</ul>

<h2>Hoe we samenwerken</h2>
<p>Je kunt kiezen uit 2 vormen:</p>
<ul>
  <li><strong>Consultancy</strong>: jij (of je team) implementeert, ik stuur op prioriteit en kwaliteit.</li>
  <li><strong>Consultancy + uitvoering</strong>: ik help ook met implementatie (content, technische tickets, QA).</li>
</ul>
<p>Geen vast contract. Je blijft omdat het werkt.</p>

<h2>Stappenplan (simpel en effectief)</h2>
<ol>
  <li><strong>Intake</strong>: doelen, doelgroep, aanbod en huidige cijfers.</li>
  <li><strong>Nulmeting</strong>: Search Console + GA4, top paginas, kansen en blockers.</li>
  <li><strong>Roadmap</strong>: prioriteiten per maand (impact vs effort).</li>
  <li><strong>Quick wins</strong>: posities 4-20, interne links, snippets, technische fixes.</li>
  <li><strong>Content batches</strong>: bouwen rond topics die echt converteren.</li>
  <li><strong>Authority</strong>: relevantie en kwaliteit, geen shortcuts.</li>
  <li><strong>Maandrapport</strong>: wat werkte, wat niet, en wat nu.</li>
</ol>

<h2>Wat je krijgt (concreet)</h2>
<ul>
  <li>Een korte backlog met de top 10 acties</li>
  <li>Een duidelijke content roadmap (topics + pagina types)</li>
  <li>Meetbare groei op rankings, clicks en conversies</li>
  <li>Heldere communicatie (geen SEO-jargon als dat niet nodig is)</li>
</ul>

<h2>FAQ</h2>
<h3>Hoe snel zie ik resultaat?</h3>
<p>Quick wins kunnen binnen 2 tot 6 weken zichtbaar zijn. Grotere keywords kosten vaak maanden. Daarom starten we met pagina's die al dichtbij staan.</p>

<h3>Moet ik ook aan linkbuilding doen?</h3>
<p>Niet altijd meteen. We fixen eerst techniek en content. Daarna kijken we wat je mist qua autoriteit om door te pakken.</p>

<h3>Doen jullie ook SEA?</h3>
<p>SEA kan handig zijn om keywords snel te testen. Maar het fundament is SEO: dat blijft doorwerken.</p>

<h2>Klaar om te starten?</h2>
<p>Plan een call en ik laat je in 30 minuten zien waar jouw snelste groeikansen zitten.</p>
<p><a href="/work-with-me">Ga naar samenwerken</a></p>
`.trim(),
  translations: {
    en: {
      title: 'SEO consultant',
      metaTitle: 'SEO consultant | Strategy, audits and execution',
      metaDescription: 'Need an SEO consultant? Get a clear plan, quick wins, and steady growth via technical SEO, content, and authority. Transparent and flexible.',
      content: `
<h2>SEO consultant for companies that want steady growth</h2>
<p>Looking for an <strong>SEO consultant</strong> who turns SEO into a clear plan and real progress? I help you pick priorities, execute the right work, and improve month over month.</p>

<h2>What does an SEO consultant do?</h2>
<p>SEO is built on three pillars:</p>
<ul>
  <li><strong>Technical</strong>: indexation, speed, structure, internal links</li>
  <li><strong>Content</strong>: pages that match intent</li>
  <li><strong>Authority</strong>: trust via links, mentions, reputation</li>
</ul>
<p>If one pillar lags behind, growth plateaus. That is why we work in order: technical, content, authority.</p>

<h2>What I can help with</h2>
<ul>
  <li><strong>SEO audit</strong>: blockers, quick wins, priorities</li>
  <li><strong>Keyword + intent research</strong>: what drives revenue vs noise</li>
  <li><strong>Content strategy</strong>: clusters, briefs, page priorities</li>
  <li><strong>Technical SEO</strong>: indexation, redirects, canonicals, Core Web Vitals</li>
  <li><strong>Internal linking</strong>: from random pages to a system</li>
  <li><strong>Authority plan</strong>: quality over quantity (no spam)</li>
  <li><strong>Reporting</strong>: simple, monthly, action-based</li>
</ul>

<h2>How we work together</h2>
<ul>
  <li><strong>Consulting</strong>: your team implements, I steer priorities and quality.</li>
  <li><strong>Consulting + execution</strong>: I also help implement (content, technical tickets, QA).</li>
</ul>
<p>No long contract. You stay because it works.</p>

<h2>Simple step-by-step plan</h2>
<ol>
  <li><strong>Intake</strong>: goals, audience, offer, baseline metrics.</li>
  <li><strong>Baseline</strong>: Search Console + GA4, top pages, opportunities, blockers.</li>
  <li><strong>Roadmap</strong>: monthly priorities (impact vs effort).</li>
  <li><strong>Quick wins</strong>: positions 4-20, internal links, snippets, technical fixes.</li>
  <li><strong>Content batches</strong>: build around topics that convert.</li>
  <li><strong>Authority</strong>: relevant and safe, no shortcuts.</li>
  <li><strong>Monthly report</strong>: what worked and next actions.</li>
</ol>

<h2>FAQ</h2>
<h3>How fast will I see results?</h3>
<p>Quick wins can show in 2 to 6 weeks. Bigger keywords often take months. We start with pages that are already close.</p>

<h2>Ready to start?</h2>
<p><a href="/work-with-me">Work with me</a></p>
`.trim(),
    },
    nl: {
      title: 'SEO-consultant',
      metaTitle: 'SEO-consultant | Strategie, audits en uitvoering',
      metaDescription: 'SEO-consultant nodig? Krijg een helder plan, quick wins en maandelijkse groei via techniek, content en autoriteit. Transparant, zonder vast contract.',
      content: `
<h2>SEO-consultant voor bedrijven die structureel willen groeien</h2>
<p>Zoek je een <strong>SEO-consultant</strong> die niet alleen praat, maar ook scherpe keuzes maakt? Ik help je met een duidelijk plan, prioriteiten en uitvoering. Geen losse tips, maar een aanpak die elke maand vooruitgaat.</p>

<h2>Wat doet een SEO-consultant?</h2>
<p>Een SEO-consultant helpt je om hoger te scoren in Google en meer conversies uit organisch verkeer te halen. Dat doe je met drie pijlers:</p>
<ul>
  <li><strong>Techniek</strong>: indexatie, snelheid, structuur, interne links</li>
  <li><strong>Content</strong>: paginas die precies de zoekintentie matchen</li>
  <li><strong>Autoriteit</strong>: vertrouwen via links, mentions en reputatie</li>
</ul>
<p>Als 1 pijler achterblijft, plafonneert de groei. Daarom werken we altijd in de juiste volgorde: techniek, content, autoriteit.</p>

<h2>Waar ik je mee help</h2>
<ul>
  <li><strong>SEO-audit</strong>: wat houdt je tegen en wat is de snelste winst?</li>
  <li><strong>Keyword + intent research</strong>: waar zit omzet en waar zit ruis?</li>
  <li><strong>Contentstrategie</strong>: clusters, briefings en pagina prioriteiten</li>
  <li><strong>Technische SEO</strong>: indexatie, redirects, canonicals, Core Web Vitals</li>
  <li><strong>Interne link structuur</strong>: van losse paginas naar een logisch systeem</li>
  <li><strong>Authority plan</strong>: kwaliteit boven kwantiteit (geen spam)</li>
  <li><strong>Rapportage</strong>: helder, maandelijk, met concrete acties</li>
</ul>

<h2>Hoe we samenwerken</h2>
<p>Je kunt kiezen uit 2 vormen:</p>
<ul>
  <li><strong>Consultancy</strong>: jij (of je team) implementeert, ik stuur op prioriteit en kwaliteit.</li>
  <li><strong>Consultancy + uitvoering</strong>: ik help ook met implementatie (content, technische tickets, QA).</li>
</ul>
<p>Geen vast contract. Je blijft omdat het werkt.</p>

<h2>Stappenplan (simpel en effectief)</h2>
<ol>
  <li><strong>Intake</strong>: doelen, doelgroep, aanbod en huidige cijfers.</li>
  <li><strong>Nulmeting</strong>: Search Console + GA4, top paginas, kansen en blockers.</li>
  <li><strong>Roadmap</strong>: prioriteiten per maand (impact vs effort).</li>
  <li><strong>Quick wins</strong>: posities 4-20, interne links, snippets, technische fixes.</li>
  <li><strong>Content batches</strong>: bouwen rond topics die echt converteren.</li>
  <li><strong>Authority</strong>: relevant en veilig, geen shortcuts.</li>
  <li><strong>Maandrapport</strong>: wat werkte, wat niet, en wat nu.</li>
</ol>

<h2>Klaar om te starten?</h2>
<p><a href="/work-with-me">Ga naar samenwerken</a></p>
`.trim(),
    },
    de: {
      title: 'SEO Berater',
      metaTitle: 'SEO Berater | Strategie, Audit und Umsetzung',
      metaDescription: 'SEO Berater gesucht? Klarer Plan, Quick Wins und stetiges Wachstum uber Technik, Content und Autoritaet. Transparent und flexibel.',
      content: `
<h2>SEO Berater fuer Unternehmen die wachsen wollen</h2>
<p>Du suchst einen <strong>SEO Berater</strong> der klare Prioritaeten setzt und Ergebnisse liefert? Ich helfe mit Plan, Roadmap und Umsetzung.</p>

<h2>Was macht ein SEO Berater?</h2>
<ul>
  <li><strong>Technik</strong>: Indexierung, Speed, Struktur, interne Links</li>
  <li><strong>Content</strong>: Seiten die Intent treffen</li>
  <li><strong>Autoritaet</strong>: Vertrauen durch Links und Mentions</li>
</ul>

<h2>So arbeiten wir</h2>
<ol>
  <li>Baseline (Search Console + GA4)</li>
  <li>Roadmap (impact vs effort)</li>
  <li>Quick wins (Position 4-20)</li>
  <li>Content Batches</li>
  <li>Autoritaet ohne Spam</li>
</ol>

<p><a href="/work-with-me">Zusammenarbeiten</a></p>
`.trim(),
    },
    sv: {
      title: 'SEO konsult',
      metaTitle: 'SEO konsult | Strategi, audit och execution',
      metaDescription: 'Behov av en SEO konsult? Klar plan, quick wins och stabil tillvaxt via teknik, content och auktoritet. Transparent och flexibelt.',
      content: `
<h2>SEO konsult for foretag som vill vaxa</h2>
<p>Som <strong>SEO konsult</strong> hjalper jag dig med prioriteringar, roadmap och execution. Fokus: resultat, inte fluff.</p>

<ul>
  <li><strong>Teknik</strong>: indexering, hastighet, struktur</li>
  <li><strong>Content</strong>: sidor som matchar intent</li>
  <li><strong>Auktoritet</strong>: links och mentions</li>
</ul>

<p><a href="/work-with-me">Jobba med mig</a></p>
`.trim(),
    },
    da: {
      title: 'SEO konsulent',
      metaTitle: 'SEO konsulent | Strategi, audit og execution',
      metaDescription: 'Har du brug for en SEO konsulent? Klar plan, quick wins og stabil vaekst via teknik, content og autoritet. Transparent og fleksibelt.',
      content: `
<h2>SEO konsulent for virksomheder der vil vaekste</h2>
<p>Som <strong>SEO konsulent</strong> hjalper jeg med prioriteringer, roadmap og execution. Fokus: resultater.</p>

<ul>
  <li><strong>Teknik</strong>: indeksering, hastighed, struktur</li>
  <li><strong>Content</strong>: sider der matcher intent</li>
  <li><strong>Autoritet</strong>: links og mentions</li>
</ul>

<p><a href="/work-with-me">Arbejd med mig</a></p>
`.trim(),
    },
    fr: {
      title: 'Consultant SEO',
      metaTitle: 'Consultant SEO | Strategie, audit et execution',
      metaDescription: 'Besoin d un consultant SEO? Plan clair, quick wins et croissance stable via technique, content et autorite. Transparent et flexible.',
      content: `
<h2>Consultant SEO pour croissance durable</h2>
<p>En tant que <strong>consultant SEO</strong>, je t aide avec priorites, roadmap et execution. Objectif: plus de conversions, pas juste du trafic.</p>

<ul>
  <li><strong>Technique</strong>: indexation, vitesse, structure</li>
  <li><strong>Content</strong>: pages qui matchent l intent</li>
  <li><strong>Autorite</strong>: liens et mentions</li>
</ul>

<p><a href="/work-with-me">Travailler avec moi</a></p>
`.trim(),
    },
    it: {
      title: 'Consulente SEO',
      metaTitle: 'Consulente SEO | Strategia, audit ed execution',
      metaDescription: 'Cerchi un consulente SEO? Piano chiaro, quick wins e crescita stabile con tecnica, content e autorita. Trasparente e flessibile.',
      content: `
<h2>Consulente SEO per crescita stabile</h2>
<p>Come <strong>consulente SEO</strong> ti aiuto con priorita, roadmap ed execution. Focus: risultati e conversioni.</p>

<ul>
  <li><strong>Tecnica</strong>: indicizzazione, velocita, struttura</li>
  <li><strong>Content</strong>: pagine che matchano intent</li>
  <li><strong>Autorita</strong>: link e mentions</li>
</ul>

<p><a href="/work-with-me">Lavora con me</a></p>
`.trim(),
    },
  },
}

async function publishPage() {
  try {
    console.log('Publishing SEO consultant landing page to database...')

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
