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
  slug: 'shopify-admin-api-key-2026-n8n',
  topic: 'Shopify',
  status: 'PUBLISHED',
  title: 'How to Get the Shopify Admin API Key in 2026 (Client Credentials) for n8n',
  content: `
## Shopify changed the “API key” flow

If you used the old “custom app development” option inside Shopify settings, you’ve probably noticed the flow has changed. In 2026, Shopify pushes app creation through the Shopify Dev Dashboard.

You still end up with the same three things you need for automation:
- \`client_id\`
- \`client_secret\`
- a short-lived Admin API \`access_token\`

This guide shows the exact steps to get that token and use it in n8n.

## What you need before you start

- Admin access to the Shopify store
- The Admin API scopes you need (products, orders, customers, etc.)
- Postman (or curl) to make one POST request
- A secure place to store the secret (n8n credentials / environment variables)

## Step 1 — Create an app in the Shopify Dev Dashboard

1. Open your Shopify store admin.
2. Click the **Dev dashboard** link (top right).
3. Click **Create an app** and give it a name (for example: “n8n automation”).

## Step 2 — Choose the Admin API scopes

In the app settings, add only the scopes you need. Examples for common n8n automations:

- Read products: \`read_products\`
- Create/update products: \`write_products\`
- Read orders: \`read_orders\`
- Fulfill orders: \`write_fulfillments\`

## Step 3 — Release and install the app

- Click **Release**.
- Install the app on your store.

After installation you’ll see a **Client ID** and **Client secret** in the app settings.

## Step 4 — Copy your \`{shop}.myshopify.com\` domain

In Shopify go to **Settings → Domains** and copy your \`{shop}.myshopify.com\` domain.

You’ll use that in the token request URL.

## Step 5 — Request the Admin API access token

### Option A: Postman

1. Create a new request and set the method to **POST**.
2. URL:
\`https://{shop}.myshopify.com/admin/oauth/access_token\`
3. Body → **x-www-form-urlencoded**:
- \`grant_type\` = \`client_credentials\`
- \`client_id\` = your Client ID
- \`client_secret\` = your Client secret
4. Click **Send**.

You’ll get a JSON response with \`access_token\`, \`scope\`, and \`expires_in\` (usually \`86400\` seconds = 24 hours).

### Option B: curl

${fence}bash
curl -X POST "https://{shop}.myshopify.com/admin/oauth/access_token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  --data "grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
${fence}

## Step 6 — Use the token in n8n

### Shopify node

If you use the Shopify node in n8n, paste the \`access_token\` into the credential field and set the shop domain.

### HTTP Request node (quick test)

Make any Admin API request and add this header:
- \`X-Shopify-Access-Token: <access_token>\`

A simple test endpoint that returns your granted scopes:

${fence}bash
curl -X GET "https://{shop}.myshopify.com/admin/oauth/access_scopes.json" \\
  -H "X-Shopify-Access-Token: YOUR_ACCESS_TOKEN"
${fence}

## Token expiry (important)

This token is short-lived. When \`expires_in\` is \`86400\`, it expires after 24 hours.

- If you see 401/403 errors the next day, generate a new token the same way.
- For automation, consider an n8n workflow that refreshes the token on a schedule and stores it in a credential/environment variable.

## Troubleshooting

- **401 “invalid_client”**: wrong \`client_id\` or \`client_secret\`
- **404**: wrong \`{shop}.myshopify.com\` domain
- **405**: request method is not POST on the token endpoint
- **403 “access denied”**: missing scopes or app not installed

## Security notes

- Treat \`client_secret\` like a password.
- Never commit tokens or secrets to Git.
- Keep scopes minimal and rotate credentials if exposed.
`.trim(),
}

async function publishArticle() {
  try {
    console.log('📝 Publishing Shopify Admin API (n8n) article to database...')

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
