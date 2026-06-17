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
Ahrefs Keywords Explorer is not a magic keyword list. It is a decision tool: what to build, what to skip, and what it will take to win.

If you only look at volume, you will over-invest in keywords that do not send clicks. Use intent, SERP reality, clicks, and Traffic Potential to build an SEO plan that actually performs.

This article connects to the other Ahrefs workflows on the site:

- Traffic Potential vs volume: [read it here](/blog/ahrefs-traffic-potential-vs-volume)
- Site Explorer workflows: [read it here](/blog/ahrefs-site-explorer-simpel-stappenplan)
- Content gap planning: [read it here](/blog/content-gap-analyse-ahrefs-stappenplan)

## What Keywords Explorer is good for (and what it is not)

Use it to:

- Find keyword and topic ideas
- Estimate clicks and Traffic Potential (not just volume)
- Understand intent and SERP composition
- Build topic clusters (hub + supporting pages)
- Prioritize by business value and difficulty

Do not use it as a replacement for:

- Search Console (truth for impressions, clicks, indexation)
- GA4 (truth for conversions and revenue)

Ahrefs is an external tool. Treat numbers as estimates. Trends and comparisons are the real value.

## The tool stack I use (and why)

Keywords Explorer becomes stronger when you combine it with first-party data and conversion data.

I typically combine:

- Google Search Console: truth for impressions, clicks, indexation and pages that already have demand
- GA4: truth for conversions, lead quality and revenue
- Ahrefs Keywords Explorer: keyword ideas, clicks, Traffic Potential, SERP snapshots and competitor discovery
- Google Keyword Planner (optional): extra CPC context when you want paid intent confirmation

If you only use one tool, you will miss something.

## Step 0 - Set the market correctly (do not skip)

Most keyword research mistakes are market mistakes.

- Country: pick where you want customers, not where you live
- Language: match your content language
- Device: if most leads come from mobile, check mobile trends too

If your market settings are wrong, everything that follows is wrong.

If you are new to Ahrefs, start with the basics first: [create an Ahrefs account](/blog/ahrefs-account-aanmaken-simpele-uitleg).

## Step 1 - Start from business and intent (not from keywords)

Before you open Ahrefs, write down:

- The 3-5 services/products you actually sell
- The conversion you want (demo, quote, call, purchase)
- The intent types you need: informational (learn), commercial (compare), transactional (buy)

If you need a bigger SEO foundation first, read: [what SEO optimization is](/blog/wat-is-seo-optimalisatie) and the broader roadmap: [hoog in Google komen](/blog/hoog-in-google).

## Step 2 - Build a seed list from real data

Better seeds create better output.

Good seed sources:

- Search Console queries (pages with impressions)
- Customer questions (sales calls, support tickets)
- Competitor categories and landing pages
- Your own internal site search (if you have it)

Rule: do not start with one seed keyword. Start with 5-20 seeds and expect to build clusters.

## Step 3 - Use the right reports inside Keywords Explorer

In Ahrefs you can expand a seed via:

- Matching terms: closest variants
- Related terms: semantic expansion
- Questions: great for supporting pages and FAQs

Your goal is not 200 keywords. Your goal is:

- 1 strong hub page per intent/topic
- 3-8 supporting pages that feed it

## Step 4 - Read the metrics like an SEO, not like a dashboard

Here is how I interpret the core metrics:

- Volume: searches per month (starting point, not a decision)
- Clicks: estimated clicks from the SERP
- CPS: clicks per search (how clicky the SERP is)
- KD: difficulty estimate (signal, not a rule)
- CPC: commercial intent signal (useful for prioritization)
- Traffic Potential (TP): estimated monthly organic traffic for the #1 page (topic-level)

Traffic Potential is often more useful than volume because top pages rank for many long-tail variations. If you want the full workflow: [Traffic Potential vs volume](/blog/ahrefs-traffic-potential-vs-volume).

Practical interpretation:

- High volume + low clicks: SERP noise, instant answers, heavy ads
- Lower volume + high clicks: often more reliable traffic
- TP much higher than volume: broad topic (good for guides)

## Step 5 - Validate intent with the SERP (this is where plans fail)

Open the SERP overview and answer:

- What page types rank? (guide, category, product, local page)
- What SERP features steal clicks? (ads, shopping, local pack, AI answers)
- Are top results stable brands?
- Are the results fresh and detailed?

If the SERP wants product pages and you plan a blog post, you will usually lose.

## Step 6 - Calibrate difficulty using Site Explorer

KD alone is not enough. Use Site Explorer to see what it actually takes.

Workflow:

1. In the SERP overview, open the top 3 ranking URLs.
2. For each, check in Site Explorer:
- Referring domains and link profile
- Estimated traffic distribution (one keyword vs many)
- Content depth and structure

If you are new to Site Explorer, use this guide: [Ahrefs Site Explorer workflows](/blog/ahrefs-site-explorer-simpel-stappenplan).

## Step 7 - Turn keywords into a cluster plan (not a random list)

A cluster is the unit that wins. One page rarely wins alone.

A practical cluster:

- 1 hub page for the primary intent
- 3-8 supporting pages for sub-questions and long-tail
- Internal links both ways

Avoid cannibalization: one primary intent per page.

Simple planning template (sheet columns):

- cluster name
- primary keyword
- intent (learn/compare/buy)
- page type (guide/comparison/category/service)
- parent topic
- Clicks, CPS, Traffic Potential, KD, CPC (indicative)
- existing URL (if any)
- new slug (if needed)
- supporting pages (3-8)
- internal links from (older strong pages)
- priority (P1/P2/P3)

If you want to find topics your competitors already win with, run a gap first: [content gap analyse in Ahrefs](/blog/content-gap-analyse-ahrefs-stappenplan).

## Step 8 - Plan internal links before you publish

Internal links are the cheapest SEO leverage.

Rules that work:

- Hub page links to all supporting pages (descriptive anchors)
- Supporting pages link back to the hub (early in the article)
- Supporting pages cross-link when it helps the reader
- Link from older, strong pages to the new hub (link velocity)

If you need a technical audit to ensure crawl and index are not blocked: [technical SEO audit checklist](/blog/technische-seo-analyse-stappenplan-checklist).

## Step 9 - Publish, measure, and iterate (the monthly loop)

Use Search Console as truth:

- Are you getting impressions?
- Is CTR reasonable? (snippet quality)
- Which queries show up unexpectedly? (expand content)

Fast wins often live in positions 4-20. Update those pages first.

## Filters I actually use (quick start)

I keep it simple:

- Exclude branded competitor terms
- Filter by intent words (price, best, vs, how)
- Start with lower KD for new sites
- Prefer higher CPS when SERPs are noisy

## Common mistakes

- Building a keyword list without a cluster plan
- Choosing by volume only
- Skipping SERP checks
- Creating multiple pages for the same intent
- Ignoring internal links
- Measuring rankings but not conversions

## Conclusion

Keywords Explorer is powerful when you use it as a planning workflow: market settings, intent, clicks, Traffic Potential, SERP validation, and clusters with internal links.

Want a practical SEO roadmap built from your market and your data? Start here: [wat is SEO optimalisatie](/blog/wat-is-seo-optimalisatie).
`.trim(),
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
