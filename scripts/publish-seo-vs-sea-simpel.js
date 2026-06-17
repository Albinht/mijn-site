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
  slug: 'seo-vs-sea-verschil-en-combineren',
  topic: 'Marketing',
  status: 'PUBLISHED',
  title: 'SEO vs SEA: differences, costs, and how to combine them',
  content: `
## SEO vs SEA in one sentence

SEO = earn organic demand over time.
SEA = buy visibility now with ads (usually Google Ads).
SEM = the combination of SEO + SEA.

## How they show up in Google (why this matters)

SEA shows as ads labeled "Sponsored" at the top (and sometimes the bottom) of the SERP.
SEO shows as the organic listings below.

Both can be surrounded by SERP features: local packs, shopping blocks, AI answers, "People Also Ask", video carousels, and knowledge panels.

That is why "ranking #1" is not always the same as "getting most clicks".

## What SEO is (and what it is not)

SEO (Search Engine Optimization) is improving your site so search engines can crawl it, understand it, and trust it enough to rank it for the right searches.

The 3 pillars:

- Technical SEO: indexation, speed, internal structure
- Content: pages that match intent and answer questions better than competitors
- Authority: trust signals (links, mentions, brand)

SEO is not:

- a one-time checklist
- a guarantee of a specific ranking on a specific date

The upside: results can compound. The downside: it takes time.

## What SEA is (and how it actually works)

SEA (Search Engine Advertising) is paying for ads in search engines. In practice:

- Google Ads (Search, Shopping)
- Microsoft Ads

You usually pay per click (CPC), or you optimize toward conversions (CPA/ROAS).

What controls outcomes:

- keyword targeting (how broad or narrow you go)
- ad quality and relevance (CTR and messaging)
- landing page experience (speed, clarity, trust)
- tracking quality (if you measure wrong, you optimize wrong)
- budget and bids

The upside: you can start today and get clicks today. The downside: once you stop paying, the traffic stops.

## The real differences (practical, not theoretical)

### 1) Time to results

- SEA: fast feedback (days)
- SEO: slower feedback (weeks to months)

### 2) Cost model

- SEA: cost per click or per conversion; traffic stops when you stop paying
- SEO: cost in content, development, and authority; traffic can compound

### 3) Control

- SEA: high control (budgets, targeting, ads on/off)
- SEO: less direct control (you influence, Google decides)

### 4) Risk profile

- SEA: lower algorithm risk, higher budget dependency
- SEO: higher algorithm/competition risk, lower marginal cost per click over time

### 5) Measurement and testing

- SEA: best channel for fast testing (keywords, landing pages, messaging)
- SEO: best channel for compounding and defensibility

## When SEO is the better move

SEO is usually the better move when:

- customers research before buying (B2B, services, expensive products)
- you want sustainable demand and lower CPL over time
- you can invest in content and site quality
- you want to build a moat against competitors

Strong SEO page types:

- guides and tutorials (learn intent)
- comparison pages (commercial intent)
- category pages (ecommerce)
- local service pages (local intent)

## When SEA is the better move

SEA is usually the better move when:

- you need leads now (launch, seasonal push)
- you have a clear offer and conversion tracking
- you want strict control over volume
- you want to test keywords fast before building SEO around them

Strong SEA targets:

- high intent queries (price, quote, demo, buy)
- brand protection (your brand name)
- remarketing and sequential intent

## The best strategy is usually both (how they reinforce each other)

SEA is speed. SEO is durability. Here are the practical synergies:

### 1) Use SEA to validate SEO targets

Before you spend months on SEO:

- run a small SEA test on 10-30 keywords
- measure conversion rate and CPA
- keep only the winners for deeper SEO investment

### 2) Use ad copy to improve organic CTR

Ads force you to write clear benefits. Reuse winning angles for:

- title tags
- meta descriptions
- page headings

### 3) Use SEO to improve landing pages (and often reduce CPC)

Better landing pages help both channels:

- clearer content, faster pages, stronger trust
- higher conversion rate
- lower CPA (and often lower CPC)

### 4) Own more SERP real estate

Ad + organic listing can increase total CTR and helps defend against competitors bidding on your brand.

### 5) Retarget SEO visitors with SEA

SEO brings researchers. SEA can bring them back when they are ready to convert.

### 6) Cover the full funnel

SEO is great for awareness and education.
SEA is great for high intent and demand capture.

## A practical budget and KPI framework

You do not need a perfect model. You need a simple one.

### Step 1: define your primary goal

- leads (calls/forms)
- sales (ecommerce)

### Step 2: calculate a rough breakeven CPA

Example:

- gross margin per sale: $300
- target marketing percent of margin: 30%
- breakeven CPA: about $90

If SEA cannot hit breakeven, you either:

- improve the landing page and offer
- target different keywords
- use SEO to lower acquisition cost over time

### Step 3: choose what you optimize for

- SEA: CPA / ROAS
- SEO: conversions and revenue from organic, not just rankings

## A 90-day combined playbook

### Days 1-14: foundation

- fix tracking: GA4 + conversion events + Search Console
- separate brand vs non-brand in SEA
- build or improve 1-2 landing pages (fast, clear, trust, CTA)
- fix indexation blockers (sitemap, robots, canonicals)

### Days 15-30: test and quick wins

- SEA tests on 10-30 keywords
- add negatives (remove irrelevant searches)
- SEO quick wins: update pages ranking positions 4-20, improve internal linking

### Days 31-60: scale what works

- scale SEA winners (budgets, ads, landing page iterations)
- build SEO clusters around proven topics
- publish supporting pages and link them to the hub

### Days 61-90: build defensibility

- strengthen authority: links and brand signals
- refresh top pages and improve E-E-A-T signals
- create a repeatable monthly cadence

## Common mistakes

- running SEA without conversion tracking
- sending paid clicks to weak landing pages
- mixing brand and non-brand and losing clarity
- choosing SEO keywords by volume only (ignore intent)
- publishing content without internal links or a cluster plan
- expecting SEO to be instant

## FAQ

### Should a new website start with SEO or SEA?

If you need leads now: start with SEA, but build SEO in parallel.
If you can wait: start with SEO basics and run small SEA tests.

### Can I do only SEO?

Yes, but expect a slower start. It works best when you publish consistently and your site is technically solid.

### Can I do only SEA?

Yes, but it is a rent model. The moment you stop paying, the traffic stops. Most businesses eventually want SEO to reduce dependency.

### Does running ads help SEO?

Not directly as a ranking factor. But ads can help you learn which keywords convert, which landing pages perform, and what messaging works.
`.trim(),
}

async function publishArticle() {
  try {
    console.log('Publishing SEO vs SEA article to database...')

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
