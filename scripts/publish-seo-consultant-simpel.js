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
        status: page.status,
        type: page.type,
      },
      create: {
        title: page.title,
        slug: page.slug,
        content: page.content,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
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
