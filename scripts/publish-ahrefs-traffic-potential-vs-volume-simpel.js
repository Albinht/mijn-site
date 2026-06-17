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
  title: 'Traffic potential vs volume: choose keywords that get clicks (Ahrefs)',
  content: `
Search volume is a starting point, not a decision. In 2026, many SERPs answer the query directly (ads, shopping, local packs, AI answers). That means: volume can look great while clicks are low.

Ahrefs helps because it shows Clicks, Clicks per search, and Traffic Potential, so you can pick keywords that actually send traffic.

## Volume vs clicks: what is the real problem?

Volume = searches.
Clicks = actual clicks to results.

A SERP can "steal" clicks via:

- Ads
- Shopping blocks
- Local packs
- AI overview / answer boxes
- Featured snippets / knowledge panels
- People Also Ask
- Video carousels

When clicks are low, ranking #1 can still bring less traffic than you expect.

## The metrics I use (and what they mean)

In Ahrefs Keyword Explorer:

- Volume: searches/month (estimate)
- Clicks: estimated clicks from the SERP
- CPS (Clicks per search): clicks divided by searches (0-1)
- TP (Traffic Potential): estimated monthly organic traffic the #1 page can get from the broader topic (all keywords it ranks for)

Supporting signals:

- KD: difficulty signal (Ahrefs metric)
- CPC: commercial intent signal
- Parent topic: helps cluster keywords to one main page

Important: none of these are exact. Use them to compare and to avoid bad bets.

## My 7-step workflow to pick keywords with real traffic

### Step 0 - Lock the market and intent

- Choose country/language.
- Decide the page type: guide vs comparison vs product/category vs local service page.

If intent and page type are wrong, metrics do not save you.

### Step 1 - Check Volume vs Clicks

Compare:

- Clicks close to Volume => clicky SERP
- Clicks far below Volume => noisy SERP / instant answers

Shortcut: CPS

- CPS ~0.7-1.0 => most searches lead to clicks
- CPS ~0.2-0.4 => many searches do not click

### Step 2 - Look at Traffic Potential (TP)

TP tells you what the topic can do when you rank well, because top pages often rank for many long-tail variations.

How I interpret it:

- TP much higher than Volume => broad topic (great for guides)
- TP close to Volume => narrow intent (often model/product queries)

### Step 3 - Check the SERP reality

Open the SERP overview and check:

- Which page types rank (blog, category, product, tool)?
- Which SERP features appear?
- Are the top results stable brands?

If the SERP is dominated by shopping/local/AI answers, volume will overpromise.

### Step 4 - Inspect the top 3 pages

Open the top 3 URLs:

- Estimated traffic per page
- How many keywords drive it (distribution)
- Backlinks/referring domains (rough competition)
- Content depth and freshness

If the #1 page gets most traffic from many long-tail keywords, that is strong topic potential.

### Step 5 - Decide: create, update, or skip

Bucket each keyword/topic:

- Create: no page exists, intent fits, TP/clicks make sense
- Update: a page exists but underperforms (often positions 4-20)
- Skip: wrong intent, SERP too noisy, KD too high, low business value

### Step 6 - Build a small cluster, not a random list

For one topic:

- 1 hub page (main intent)
- 3-8 supporting pages (sub-questions)
- Internal links both ways

Avoid cannibalization: one primary intent per page.

### Step 7 - Measure and iterate

Use Search Console for truth:

- Impressions: are you being shown?
- Clicks: are you earning them?
- CTR: is the snippet working?

In Ahrefs:

- Track rankings and estimate trends
- Monitor competitors

## Two practical examples

### Example 1: high volume, low clicks

- Volume: high
- Clicks: low
- CPS: low

Likely: heavy SERP features or instant answer. Target it only if business value is huge and you can realistically win.

### Example 2: lower volume, high clicks

- Volume: medium
- Clicks: close to volume
- CPS: high

Often: clean SERP and clear intent. Great for early wins and reliable traffic.

## For new websites: safer keyword selection

If your site rarely ranks in the top 100:

- Prefer long-tail keywords with clear intent
- Lower KD
- Higher CPS (people actually click)
- SERPs without heavy ads/shopping

Then use internal links to build authority for bigger topics.

## Common mistakes

- Choosing by volume only
- Ignoring SERP features and intent
- Treating KD as a rule, not a signal
- Creating multiple pages for one intent (cannibalization)
- Not connecting keyword picks to conversions

## Mini scoring (optional)

If you need a simple decision score:

- Opportunity = (Clicks or TP) * business_value / difficulty

Keep business_value as High/Medium/Low. This forces you to pick keywords that matter.

## Checklist

- Market set (country/language/device)
- Intent and page type decided
- Volume, Clicks, CPS checked
- TP checked and top pages inspected
- SERP features reviewed
- Decision made (create/update/skip)
- Cluster and internal links planned
- Measurement plan (GSC + GA4)
`.trim(),
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
