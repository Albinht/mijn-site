const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const env = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
const match = env.match(/DATABASE_URL="?([^"\n]+)"?/);
if (!match) {
  throw new Error('DATABASE_URL not found in .env.local');
}
process.env.DATABASE_URL = match[1];

const prisma = new PrismaClient();

async function main() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: 'asc' },
    select: {
      id: true,
      slug: true,
      title: true,
      topic: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      translations: true,
    },
  });

  const output = {
    exportedAt: new Date().toISOString(),
    count: articles.length,
    articles,
  };

  const outPath = path.join(process.cwd(), 'scripts', 'i18n', 'articles.nl.json');
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`Exported ${articles.length} articles -> ${outPath}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
