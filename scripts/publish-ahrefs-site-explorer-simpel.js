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
  slug: 'ahrefs-site-explorer-simpel-stappenplan',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'How to use Ahrefs Site Explorer: complete guide (workflows + reporting)',
  content: `
Ahrefs Site Explorer is the fastest way to understand a website's SEO "shape": traffic trend, keyword footprint, and link profile. I use it as a diagnostic dashboard before I decide what to do next (content, internal links, or authority).

This guide focuses on how to read the data and turn it into actions, not just what the buttons do.

## What Site Explorer is good for (and what it is not)

Use Site Explorer for:

- Fast competitive benchmarking (who is stronger and why)
- Finding quick wins (keywords close to page 1)
- Understanding link growth/decline (new vs lost referring domains)
- Finding your best pages and weakest sections

Do not use it as a replacement for:

- Google Search Console (truth for impressions/clicks/indexing)
- GA4 (truth for conversions and revenue)

Ahrefs is an external tool. Treat numbers as estimates. Trends and comparisons are where it shines.

## Step 0 - Pick the right target (scope matters)

Choose the scope first, otherwise you will draw the wrong conclusion:

- Domain: overall view of the whole site (strategy level)
- Subdomain: isolate a blog/shop/help center
- Prefix (folder): one section like /blog/ or /collections/
- Exact URL: one page

Rule of thumb:

- Strategy and competitor benchmarking: Domain
- Improving a section: Prefix
- Fixing one page: Exact URL

## Step 1 - Set the right market (country + device + timeframe)

Most mistakes come from wrong market settings.

- Country: match your revenue market (not where you personally are)
- Device: if mobile matters, review mobile trends too
- Timeframe: use 6-12 months to see direction

If the graph is noisy, switch to weekly or monthly smoothing.

## Step 2 - Read the overview like an analyst (not like a scoreboard)

### DR and UR (Ahrefs metrics)

- DR (Domain Rating): backlink strength at domain level
- UR (URL Rating): link strength for one page (backlinks + internal links)

Use DR/UR to compare within the same niche, not as a KPI.

### Referring domains > backlinks

- Backlinks = total links
- Referring domains = unique sites linking to you

In most cases, 10 strong referring domains beat 1,000 low quality backlinks.

What I check:

- New vs lost referring domains (trend)
- Sudden spikes (possible spam or PR event)
- Anchor text distribution (brand heavy vs exact match)

### Organic keywords and traffic (estimates)

- Organic keywords: count of keywords in top 100
- Traffic: estimated visits based on rankings and CTR models

Traffic will not match GA4. Use it to compare:

- You vs competitors
- This month vs last month
- Sections of the same site (prefix)

### Traffic value and paid search (competitor signal)

Traffic value and paid keywords are directional signals:

- What topics competitors are willing to spend money on
- Which pages they are pushing

## Step 3 - Turn "Organic keywords" into a quick win list

This is where Site Explorer becomes a to-do list.

Workflow:

1. Open Organic keywords.
2. Filter by position 4-10 (page 1 is close).
3. Sort by traffic or volume.
4. Check the ranking URL and the intent.
5. Improve the page.

What usually moves positions 4-10:

- Better title/meta for higher CTR
- Stronger intro: answer fast, then add depth
- Fill missing sections (FAQ, examples, comparisons)
- Add internal links from relevant pages
- Improve topical coverage (not keyword stuffing)

Pro tip: validate in Search Console before you invest. If a keyword has impressions but low clicks, snippet work can be a fast win.

## Step 4 - Use Top pages to find what already works

Top pages answers: which URLs drive the site.

Use it to:

- Identify winning formats (guides, tools, comparisons)
- Decide which pages deserve updates first
- Spot fragile traffic (pages dependent on one keyword only)

Action:

- Pick your top 10 pages and refresh them quarterly.
- For pages with traffic but outdated content, update screenshots, steps, and examples.

## Step 5 - Competitors: clean the list before you analyze

Organic competitors is based on keyword overlap, not on business overlap.

Do this:

- Keep competitors with the same product and audience.
- Remove big platforms (Wikipedia, marketplaces) if they are not direct competitors.

Then use the cleaned list to:

- Run a content gap analysis (topic ideas)
- Benchmark link growth (are they gaining referring domains faster?)
- Compare top pages (what content types win in your niche)

## Step 6 - Link workflows that actually help SEO

Site Explorer is great for link diagnostics and linkbuilding planning.

### New vs lost links

- New links: what is working (PR, partnerships, content)
- Lost links: what to reclaim (broken pages, removed mentions)

### Protect link magnets (Best by links)

If a page has many referring domains:

- Keep the URL stable
- If you must change it, use a clean 301 redirect
- Update internal links to the canonical URL

### Find easy link reclamation

Look for:

- Broken backlinks (links pointing to 404 pages)
- Old URLs that should redirect
- Mentions without links (manual outreach)

## Step 7 - Pages with low or zero traffic (prune carefully)

Ahrefs can highlight pages with little estimated traffic. Use this as a signal, not a verdict.

Per page decide:

- Update (best if intent still exists)
- Merge into a stronger page (avoid cannibalization)
- Redirect (if obsolete)
- Noindex (if it must exist but should not rank)

Always check Search Console and conversions before you delete anything.

## Step 8 - Simple monthly reporting template

If you report to a client or team, keep it consistent.

I include:

- Organic trend (Search Console clicks + impressions)
- Top 5 pages that moved (up/down)
- Quick wins done (positions 4-10)
- Link trend: new vs lost referring domains
- Next 5 actions (with owner and deadline)

## My 15-minute Site Explorer checklist

- Scope correct (domain/prefix/url)
- Country and timeframe correct
- Traffic trend and keyword trend checked
- Positions 4-10 exported as quick wins
- Top pages reviewed (what to update first)
- Competitors cleaned (real competitors only)
- New/lost referring domains reviewed
- One short action list written (10 items max)
`.trim(),
}

async function publishArticle() {
  try {
    console.log('Publishing Ahrefs Site Explorer article to database...')

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
