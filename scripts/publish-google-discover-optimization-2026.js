const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

const slug = 'google-discover-optimization-2026'

function loadArticleContent() {
  const filePath = path.join(__dirname, '..', 'content', 'blog', 'google-discover-optimization-2026.md')
  return fs.readFileSync(filePath, 'utf8')
}

async function publishArticle() {
  const content = loadArticleContent()

  const payload = {
    title: 'Google Discover optimization in 2026 (practical playbook)',
    topic: 'SEO',
    content,
    status: 'PUBLISHED',
    publishedAt: new Date('2026-02-12'),
    translations: {
      en: {
        metaTitle: 'Google Discover optimization in 2026 (practical playbook)',
        metaDescription:
          'A practical 2026 guide to Google Discover: topical authority, headlines & thumbnails, E‑E‑A‑T trust signals, technical eligibility, and a repeatable monitoring checklist.',
      },
    },
  }

  const article = await prisma.article.upsert({
    where: { slug },
    update: payload,
    create: { ...payload, slug },
  })

  console.log('✅ Article published/updated successfully')
  console.log(`📍 URL: /blog/${article.slug}`)
  console.log(`🆔 ID: ${article.id}`)
}

publishArticle()
  .catch((error) => {
    console.error('❌ Error publishing article:', error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
