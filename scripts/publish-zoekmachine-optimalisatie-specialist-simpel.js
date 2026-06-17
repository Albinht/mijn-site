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
