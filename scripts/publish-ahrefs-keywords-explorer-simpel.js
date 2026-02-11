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
  slug: 'ahrefs-keywords-explorer-stappenplan',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'Ahrefs Keywords Explorer: complete guide (research + planning)',
  content: `
Ahrefs Keywords Explorer helps you pick keywords that actually drive traffic. The key is not just volume, but intent, clicks, and traffic potential.

## What Keywords Explorer is for

Use it to:

- Discover relevant keyword ideas
- Estimate clicks and traffic potential
- Build topic clusters (hub + supporting pages)
- Prioritize by intent and business value

## Step 1 - Set the market correctly

- Country and language = your real revenue market
- Choose device if mobile matters

Wrong market settings = useless data.

## Step 2 - Start with a seed keyword

Enter a broad term, then look at:

- Matching terms
- Related terms
- Questions

Do not build a plan from one keyword. Build a cluster.

## Step 3 - Read the right metrics

Key metrics in Ahrefs:

- Volume: searches per month
- Clicks: estimated clicks from the SERP
- CPS: clicks per search
- KD: difficulty estimate
- CPC: commercial intent signal
- Traffic Potential: total organic traffic for #1 page

Traffic Potential is often more important than volume.

## Step 4 - Check intent and SERP reality

Open the SERP overview and ask:

- What page types rank (guide, category, product)?
- Are there ads, shopping, or AI answers?
- Are the top results strong brands?

If the SERP does not match your page type, skip or change approach.

## Step 5 - Build a small cluster

A practical cluster:

- 1 hub page for the main intent
- 3-8 supporting pages for sub topics
- Internal links both ways

Avoid cannibalization: one primary intent per page.

## Step 6 - Prioritize with a simple score

Use a lightweight score to decide what to build first:

- Opportunity = Traffic Potential x business value / difficulty

Keep business value as High / Medium / Low.

## Common mistakes

- Choosing by volume only
- Ignoring intent and SERP features
- Creating multiple pages for one intent
- Not linking pages into clusters

## Conclusion

Keywords Explorer is powerful when you use it as a planning tool, not just a keyword list. Focus on intent, clicks, and traffic potential, then build clusters with clear internal links.
`.trim(),
  translations: {
    en: {
      title: 'Ahrefs Keywords Explorer: complete guide (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Complete guide',
      metaDescription: 'Use Ahrefs Keywords Explorer to find keyword ideas, evaluate intent and clicks, and build topic clusters that drive traffic.',
      content: `
Ahrefs Keywords Explorer helps you pick keywords that actually drive traffic. The key is not just volume, but intent, clicks, and traffic potential.

## What Keywords Explorer is for

Use it to:

- Discover relevant keyword ideas
- Estimate clicks and traffic potential
- Build topic clusters (hub + supporting pages)
- Prioritize by intent and business value

## Step 1 - Set the market correctly

- Country and language = your real revenue market
- Choose device if mobile matters

## Step 2 - Start with a seed keyword

Enter a broad term, then explore:

- Matching terms
- Related terms
- Questions

## Step 3 - Read the right metrics

- Volume
- Clicks and CPS
- KD
- CPC
- Traffic Potential

## Step 4 - Check intent and SERP reality

If the SERP does not match your page type, skip or change approach.

## Step 5 - Build a small cluster

- 1 hub page
- 3-8 supporting pages
- Internal links both ways

## Step 6 - Prioritize

- Opportunity = Traffic Potential x business value / difficulty

## Conclusion

Focus on intent, clicks, and traffic potential to build clusters that rank and convert.
`.trim(),
    },
    nl: {
      title: 'Ahrefs Keywords Explorer: complete gids (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Complete gids',
      metaDescription: 'Gebruik Ahrefs Keywords Explorer om keyword ideeen te vinden, intent te checken en topic clusters te bouwen.',
      content: `
Ahrefs Keywords Explorer helpt je keywords te kiezen die echt traffic brengen. Het gaat niet alleen om volume, maar om intent, clicks en traffic potential.

## Waarvoor gebruik je Keywords Explorer?

- Keyword ideeen vinden
- Clicks en traffic potential inschatten
- Topic clusters bouwen (hub + supporting)
- Prioriteren op intent en business value

## Stap 1 - Zet de markt goed

- Land en taal = je echte markt
- Kies device als mobile belangrijk is

## Stap 2 - Start met een seed keyword

Kijk daarna naar:

- Matching terms
- Related terms
- Questions

## Stap 3 - Lees de juiste metrics

- Volume
- Clicks en CPS
- KD
- CPC
- Traffic Potential

## Stap 4 - Check intent en SERP

Als de SERP niet past bij jouw paginatype, skip of pas aan.

## Stap 5 - Bouw een cluster

- 1 hub pagina
- 3-8 supporting paginas
- Interne links beide kanten op

## Stap 6 - Prioriteer

- Opportunity = Traffic Potential x business value / difficulty

## Conclusie

Gebruik Keywords Explorer als planning tool: focus op intent, clicks en traffic potential en bouw clusters.
`.trim(),
    },
    de: {
      title: 'Ahrefs Keywords Explorer: kompletter Guide (Research + Planung)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Kompletter Guide',
      metaDescription: 'Keywords finden, Intent pruefen und Topic Cluster planen mit Ahrefs Keywords Explorer.',
      content: `
Ahrefs Keywords Explorer hilft dir Keywords zu finden, die wirklich Traffic bringen. Nicht nur Volume, sondern Intent, Clicks und Traffic Potential.

## Schritte

1. Markt setzen (Land/Sprache)
2. Seed Keyword eingeben
3. Metrics lesen: Volume, Clicks, CPS, KD, CPC, TP
4. SERP und Intent pruefen
5. Cluster bauen (Hub + Supporting)
6. Priorisieren

## Fazit

Nutze Keywords Explorer als Planungs Tool, nicht nur als Keyword Liste.
`.trim(),
    },
    sv: {
      title: 'Ahrefs Keywords Explorer: komplett guide (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Komplett guide',
      metaDescription: 'Hitta keywords, kolla intent och bygg topic clusters med Ahrefs Keywords Explorer.',
      content: `
Keywords Explorer hjalper dig valja keywords som ger trafik. Fokus pa intent, clicks och traffic potential.

## Kort workflow

1. Satt marknad
2. Seed keyword
3. Metrics: volume, clicks, CPS, KD, CPC, TP
4. SERP check
5. Bygg cluster

## Slutsats

Anvand verktyget for planering, inte bara listor.
`.trim(),
    },
    da: {
      title: 'Ahrefs Keywords Explorer: komplet guide (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Komplet guide',
      metaDescription: 'Find keywords, tjek intent og byg clusters med Ahrefs Keywords Explorer.',
      content: `
Keywords Explorer hjalper dig vaelge keywords som giver trafik. Fokus pa intent, clicks og traffic potential.

## Kort workflow

1. Saet marked
2. Seed keyword
3. Metrics: volume, clicks, CPS, KD, CPC, TP
4. SERP check
5. Byg cluster

## Konklusion

Brug vaerktojet til planlaegning, ikke kun lister.
`.trim(),
    },
    fr: {
      title: 'Ahrefs Keywords Explorer: guide complet (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Guide complet',
      metaDescription: 'Trouver des keywords, verifier l intent et construire des clusters avec Ahrefs Keywords Explorer.',
      content: `
Keywords Explorer aide a choisir des keywords qui apportent du trafic. Pas seulement le volume, mais l intent, les clicks et le traffic potential.

## Workflow court

1. Marche et langue
2. Seed keyword
3. Metrics: volume, clicks, CPS, KD, CPC, TP
4. SERP check
5. Construire un cluster

## Conclusion

Utilise l outil pour planifier, pas juste pour lister.
`.trim(),
    },
    it: {
      title: 'Ahrefs Keywords Explorer: guida completa (research + planning)',
      topic: 'SEO',
      metaTitle: 'Ahrefs Keywords Explorer | Guida completa',
      metaDescription: 'Trovare keyword, verificare intent e costruire cluster con Ahrefs Keywords Explorer.',
      content: `
Keywords Explorer aiuta a scegliere keyword che portano traffico. Non solo volume, ma intent, clicks e traffic potential.

## Workflow breve

1. Mercato e lingua
2. Seed keyword
3. Metrics: volume, clicks, CPS, KD, CPC, TP
4. SERP check
5. Costruire un cluster

## Conclusione

Usa lo strumento per pianificare, non solo per fare liste.
`.trim(),
    },
  },
}

async function publishArticle() {
  try {
    const payload = {
      ...article,
      publishedAt: new Date(),
    }

    const existingArticle = await prisma.article.findUnique({
      where: { slug: article.slug },
      select: { id: true },
    })

    if (existingArticle) {
      await prisma.article.update({
        where: { slug: article.slug },
        data: payload,
      })
    } else {
      await prisma.article.create({ data: payload })
    }

    console.log(`Published "${article.title}"`)
  } catch (error) {
    console.error('Failed to publish article:', error)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

publishArticle()
