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
  slug: 'wat-is-seo-optimalisatie',
  topic: 'SEO',
  status: 'PUBLISHED',
  title: 'What is SEO (search engine optimization)? Complete guide + workflow',
  content: `SEO (search engine optimization) is the work you do to earn qualified visits from organic search results. The goal is not rankings for their own sake, but predictable traffic that converts.

If you want the one-line definition: SEO aligns intent, content, technical foundations, and authority so search engines can confidently recommend your page.

## How search engines work (crawl -> render -> index -> rank)

Search engines do four things, in order:

1. Crawl: discover your URLs via links and sitemaps.
2. Render: load the page (often with JavaScript) to see what users see.
3. Index: store and understand the content (topics, entities, intent).
4. Rank: decide which pages best satisfy the query.

SEO breaks when one step fails:

- Crawl issues: broken internal links, blocked robots.txt, slow server
- Render issues: content only visible after JS, blocked resources
- Index issues: noindex, wrong canonicals, duplicates, thin pages
- Rank issues: wrong intent, weak content, weak authority, poor UX

## What SEO optimization includes (beyond keywords)

Modern SEO is a system, not a checklist:

- Market research: what your audience wants and how they search
- Information architecture: how pages relate (clusters and internal links)
- Content production: pages that answer intent with depth and proof
- Technical foundations: performance, indexation, rendering
- Authority building: earning references and brand signals
- Measurement: conversions and leading indicators

## The 3 pillars of SEO (what actually matters)

### 1) Content (intent, depth, usefulness)

Good SEO content is not keyword stuffing. It is:

- The right page type for the SERP (guide vs category vs landing vs comparison)
- A fast answer in the intro, then depth for serious visitors
- Clear structure (H2/H3) and scannability
- Evidence: examples, screenshots, data, steps, FAQs
- Freshness: updated processes, screenshots, and internal links

Rule: one primary intent per page. If one page tries to do three jobs, it usually ranks for none.

### 2) Technical SEO (indexation and experience)

Technical SEO is the foundation. Prioritize:

- Indexing control: robots.txt, noindex, canonical, sitemap
- URL consistency: HTTPS, www/non-www, trailing slash, redirect hygiene
- Internal links: click depth, orphan pages, breadcrumbs
- Performance: especially mobile and Core Web Vitals
- Rendering: does Google see the content without issues?
- Structured data: helps understanding and rich results

### 3) Authority (trust and defensibility)

Authority is why two similar pages do not rank the same.

What builds real authority:

- Relevant backlinks from real sites (quality > quantity)
- Mentions, reviews, and brand searches
- Content that gets referenced because it is the best resource

Avoid shortcuts. Low-quality links create a ceiling or a penalty risk.

## A practical SEO workflow (0-90 days)

### Days 0-7: measurement and baseline

- Connect Search Console and GA4
- Define 1-3 primary conversions
- Export top pages and top queries
- Note pages in positions 4-20 (quick wins list)

### Days 8-30: fix blockers and capture quick wins

- Fix P0 technical issues: indexation, 5xx, redirect chains, broken key pages
- Improve 5-10 pages already getting impressions:
  - better title/meta for CTR
  - stronger intro and missing sections
  - internal links from relevant pages
- Build a simple content map: topics -> one main page each

### Days 31-60: build topic clusters

- Pick 2-4 topic clusters
- Create one strong hub page per cluster
- Publish 3-8 supporting pages per cluster
- Add internal links both ways and from navigation where relevant

### Days 61-90: scale and make it defensible

- Refresh top pages with new proof and better UX
- Start authority work: digital PR, partnerships, link reclamation
- Add structured data where it fits
- Create a monthly cadence (publish, update, links, technical)

## How to pick keywords that make money

Volume is not a strategy. Use a simple filter:

- Intent: informational, commercial, or transactional?
- Business value: will this lead to the right conversion?
- SERP reality: ads/local/AI answers can reduce clicks
- Ability to win: can you beat the current top results?
- Content fit: can one page satisfy the intent fully?

For existing sites, start in Search Console: find queries where you already get impressions and upgrade those pages.

## On-page SEO checklist for one page

Before you publish, check:

- Title: clear topic + clear benefit, not just keywords
- H1: matches the query and page type
- Intro: answer fast, then promise depth
- Headings: cover sub-questions the SERP implies
- Internal links: to and from relevant pages
- Media: examples, screenshots, visuals where helpful
- CTA: next step for the visitor (quote, demo, contact, buy)
- Schema: where relevant and correct

## Common mistakes

- Doing keyword research without SERP checking
- Publishing random posts without clusters and internal links
- Creating multiple pages for the same intent (cannibalization)
- Fixing every technical warning instead of prioritizing P0/P1
- Tracking rankings but not conversions
- Never updating content that already ranks

## SEO in 2026: AI answers and richer SERPs

AI-driven answers and rich features reduce clicks for some queries. Your response is:

- Be clear early: short answer, then depth
- Add proof: experience, examples, data
- Structure content: headings, lists, FAQ where useful
- Build brand trust: mentions, reviews, citations

The fundamentals do not change: match intent, remove friction, earn trust.

## Conclusion

SEO optimization is not a trick. It is a repeatable process: measure, fix blockers, publish the best pages for real intent, connect them with internal links, and earn authority.

Want help turning your site into a prioritized roadmap? See /work-with-me.
`.trim(),
}

async function publishArticle() {
  try {
    console.log('Publishing wat-is-seo-optimalisatie article to database...')

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
