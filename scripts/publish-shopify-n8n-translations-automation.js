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

const fence = '```'

const article = {
  slug: 'perfect-shopify-translations-n8n-automation',
  topic: 'Shopify',
  status: 'PUBLISHED',
  title: 'Perfect Translations for Your Shopify Store with N8N & Translate & Adapt',
  content: `
## Automate Shopify translations with N8N

If you've been looking for a way to automate translations in your Shopify store with a focus on specific SEO keywords, you're in the right place. This was one of my most requested videos, and since my first tutorial two months ago, the method has been completely updated with a much more efficient and better approach.

<iframe width="100%" height="512" src="https://www.youtube.com/embed/YLfdLKW9ID0" title="How to Automate Shopify Translate and Adapt with Good translations For SEO using N8N Fully Automatic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In this guide, I'll show you how to set up an automated translation workflow using N8N that will:

- Automatically translate all your products, collections, and pages
- Focus on specific SEO keywords for each target language
- Skip already-translated content (never pay for duplicate translations)
- Run on a schedule so your localized content stays fresh

## What you need before starting

- An n8n subscription
- A Shopify Admin API key (permanent)
- An OpenRouter account
- Your target SEO keywords per language

If you don’t know how to get a permanent Shopify Admin API key, check my other video on how to get one — it will make this process much easier.

## Step 1 — Set up triggers in n8n

I like to add two triggers to my workflow:

1. **Manual trigger** — for when you want to run it yourself on demand
2. **Schedule trigger** — runs once every 15 days to keep your localized content fresh

This ensures you always have up-to-date translations without manually triggering anything.

## Step 2 — Get the cursor (for stores with 250+ products)

The cursor helps handle pagination when you have more than 250 products. For this tutorial, I’ll show the setup for stores with fewer products, but if you have a larger catalog and need this done for you, feel free to reach out through Niblah.com.

## Step 3 — Fetch products with the Admin API key

Use an HTTP Request node to:

1. Get a fresh Admin API key through n8n every time the workflow runs
2. Fetch all your products via the Shopify Admin API

For smaller catalogs (under 250 products), pagination info isn’t relevant, but the workflow handles it automatically if needed.

## Step 4 — Check for existing translations

This is where the magic happens. The workflow will:

1. **Loop through each product** and check if translations already exist
2. **Skip items that are already translated** — you’ll never translate the same thing twice
3. **Only send untranslated content** to the AI

This prevents wasting money on duplicate translations and ensures you only target what’s missing.

The workflow checks:
- Existing translations status
- Translatable resources
- Digests (unique identifiers attached to specific translation fields like product title, description, etc.)

## Step 5 — Set up the AI agent

For each target language (Swedish in my example), configure an AI agent with:

- **Target language** (e.g., Swedish)
- **SEO keywords** you want to focus on
- **Translation style/examples** so the AI matches your brand voice
- **Sitemap references** so it understands your site structure

I use **Gemini 2.5 Pro** via OpenRouter because it gives the most consistent and high-quality translations at the lowest price point.

## Step 6 — Send translations back to Shopify

After the AI completes the translations, the workflow:

1. Structures the data into a GraphQL payload
2. Sends it back to Shopify via the Translate & Adapt API
3. Each translated field goes to the correct place using the digest system

## Step 7 — Enjoy your fully localized store

Once everything is set up, just run the workflow. You’ll instantly see:

- Products fully translated in your target language
- SEO keywords properly integrated
- Consistent, high-quality translations across all content

For example, switch between Dutch and Swedish in your store, and everything appears perfectly localized.

## Get the workflow or done-for-you setup

The n8n workflow is downloadable for free in the description if you’re comfortable setting it up yourself.

If you need help with the setup or want a done-for-you service where I handle everything for you, head over to **Niblah.com** — you can WhatsApp chat me directly from the bottom right corner.

## Key benefits of this automation

- **Never pay for duplicate translations** — the workflow checks what’s already done
- **SEO-focused** — target specific keywords per language
- **Set and forget** — runs on a schedule every 15 days
- **Scalable** — works for any catalog size
- **High quality** — Gemini 2.5 Pro delivers consistent, natural translations

Thanks for reading, and I wish you all the best with your translations. Wherever you are, have a wonderful day, evening, or night!
`.trim(),
}

async function publishArticle() {
  try {
    console.log('📝 Publishing Shopify N8N Translations article to database...')

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

    console.log('✅ Article published successfully!')
    console.log(`📍 URL: /blog/${result.slug}`)
    console.log(`📊 ID: ${result.id}`)
  } catch (error) {
    console.error('❌ Error publishing article:', error)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

publishArticle()
