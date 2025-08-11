import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');
  
  // Create admin user
  const passwordHash = await bcrypt.hash('Jukovic91!', 10);
  
  const adminUser = await prisma.user.upsert({
    where: { username: 'Niblah' },
    update: {},
    create: {
      username: 'Niblah',
      email: 'admin@niblah.com',
      passwordHash,
      role: 'ADMIN'
    }
  });
  
  console.log('✅ Created admin user:', adminUser.username);
  
  // Create sample articles
  const articles = [
    {
      title: 'SEO Best Practices 2024',
      topic: 'Search Engine Optimization trends and techniques',
      slug: 'seo-best-practices-2024',
      content: 'Comprehensive guide on modern SEO techniques...',
      status: 'PUBLISHED',
      views: 1250,
      publishedAt: new Date('2024-01-10')
    },
    {
      title: 'Content Marketing Strategies',
      topic: 'Effective content marketing for businesses',
      slug: 'content-marketing-strategies',
      content: 'How to build a successful content marketing strategy...',
      status: 'PUBLISHED',
      views: 890,
      publishedAt: new Date('2024-01-09')
    },
    {
      title: 'Social Media Automation',
      topic: 'Automating social media marketing',
      slug: 'social-media-automation',
      content: 'Tools and techniques for social media automation...',
      status: 'DRAFT',
      views: 0
    }
  ];
  
  for (const article of articles) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {},
      create: {
        ...article,
        authorId: adminUser.id
      }
    });
  }
  
  console.log('✅ Created sample articles');
  
  // Create sample pages
  const pages = [
    {
      title: 'Marketing Amsterdam',
      slug: 'marketing-amsterdam',
      content: 'Digital marketing services in Amsterdam...',
      metaDescription: 'Professional digital marketing services in Amsterdam',
      status: 'PUBLISHED',
      type: 'MARKETING',
      views: 3421
    },
    {
      title: 'Marketing Rotterdam',
      slug: 'marketing-rotterdam',
      content: 'Digital marketing services in Rotterdam...',
      metaDescription: 'Professional digital marketing services in Rotterdam',
      status: 'PUBLISHED',
      type: 'MARKETING',
      views: 2890
    },
    {
      title: 'ROAS Calculator',
      slug: 'roas-calculator',
      content: 'Calculate your Return on Ad Spend...',
      metaDescription: 'Free ROAS calculator tool',
      status: 'PUBLISHED',
      type: 'TOOL',
      views: 5102
    },
    {
      title: 'Google Ads Blueprint',
      slug: 'google-ads-blueprint',
      content: 'Complete guide to Google Ads...',
      metaDescription: 'Google Ads blueprint and best practices',
      status: 'PUBLISHED',
      type: 'BLUEPRINT',
      views: 4321
    }
  ];
  
  for (const page of pages) {
    await prisma.page.upsert({
      where: { slug: page.slug },
      update: {},
      create: {
        ...page,
        authorId: adminUser.id
      }
    });
  }
  
  console.log('✅ Created sample pages');
  
  // Create sample settings
  const settings = [
    {
      key: 'site_name',
      value: { name: 'Niblah' },
      category: 'general'
    },
    {
      key: 'site_url',
      value: { url: 'https://niblah.com' },
      category: 'general'
    },
    {
      key: 'admin_email',
      value: { email: 'admin@niblah.com' },
      category: 'general'
    },
    {
      key: 'max_login_attempts',
      value: { attempts: 3 },
      category: 'security'
    },
    {
      key: 'session_timeout',
      value: { hours: 24 },
      category: 'security'
    },
    {
      key: 'email_notifications',
      value: { enabled: true },
      category: 'notifications'
    },
    {
      key: 'webhook_url',
      value: { url: 'https://n8n-n8n.42giwj.easypanel.host/webhook-test/2f67b999-ee19-471a-9911-054d76177650' },
      category: 'api'
    }
  ];
  
  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: {},
      create: {
        ...setting,
        updatedBy: adminUser.id
      }
    });
  }
  
  console.log('✅ Created sample settings');
  
  // Create sample analytics data
  const analyticsData = [];
  const pages_paths = ['/marketing/amsterdam', '/marketing/rotterdam', '/tools/roas-calculator', '/blueprints/google-ads'];
  const devices = ['Desktop', 'Mobile', 'Tablet'];
  const referrers = ['google.com', 'facebook.com', 'direct', 'linkedin.com'];
  
  for (let i = 0; i < 50; i++) {
    analyticsData.push({
      pagePath: pages_paths[Math.floor(Math.random() * pages_paths.length)],
      visitorId: `visitor_${Math.floor(Math.random() * 1000)}`,
      sessionId: `session_${Math.floor(Math.random() * 500)}`,
      referrer: referrers[Math.floor(Math.random() * referrers.length)],
      deviceType: devices[Math.floor(Math.random() * devices.length)],
      country: 'Netherlands',
      city: ['Amsterdam', 'Rotterdam', 'Utrecht', 'The Hague'][Math.floor(Math.random() * 4)],
      duration: Math.floor(Math.random() * 600) + 30,
      timestamp: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000))
    });
  }
  
  await prisma.analytics.createMany({
    data: analyticsData
  });
  
  console.log('✅ Created sample analytics data');
  
  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });