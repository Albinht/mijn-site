import { PrismaClient } from '@prisma/client';

// Use production database
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || "postgres://postgres.nldfmlhrxzijgpuuaffq:9M6rTs8BMECX1zyj@aws-0-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require"
    }
  }
});

async function populateDatabase() {
  console.log('=================================');
  console.log('POPULATING DATABASE WITH CONTENT');
  console.log('=================================\n');
  
  try {
    // Get the admin user
    const adminUser = await prisma.user.findUnique({
      where: { username: 'Niblah' }
    });
    
    if (!adminUser) {
      console.error('Admin user not found! Please run setup-production-user.js first.');
      return;
    }
    
    console.log('Found admin user:', adminUser.username);
    
    // Create some articles
    console.log('\n1. Creating articles...');
    const articles = await Promise.all([
      prisma.article.create({
        data: {
          title: 'Welcome to Your Marketing Dashboard',
          topic: 'Introduction',
          content: 'This is your new marketing dashboard where you can manage all your content, clients, and analytics.',
          slug: 'welcome-dashboard',
          status: 'PUBLISHED',
          authorId: adminUser.id,
          views: 150,
          publishedAt: new Date()
        }
      }),
      prisma.article.create({
        data: {
          title: 'SEO Best Practices for 2025',
          topic: 'SEO',
          content: 'Learn the latest SEO strategies and techniques to rank higher in search results.',
          slug: 'seo-best-practices-2025',
          status: 'PUBLISHED',
          authorId: adminUser.id,
          views: 320,
          publishedAt: new Date()
        }
      }),
      prisma.article.create({
        data: {
          title: 'Google Ads Campaign Setup Guide',
          topic: 'Google Ads',
          content: 'Step-by-step guide to setting up successful Google Ads campaigns.',
          slug: 'google-ads-setup',
          status: 'DRAFT',
          authorId: adminUser.id,
          views: 0
        }
      })
    ]);
    console.log(`   ✓ Created ${articles.length} articles`);
    
    // Create some pages
    console.log('\n2. Creating pages...');
    const pages = await Promise.all([
      prisma.page.create({
        data: {
          title: 'Marketing Services Amsterdam',
          slug: 'marketing-amsterdam',
          content: 'Professional digital marketing services in Amsterdam.',
          metaTitle: 'Marketing Amsterdam | Digital Marketing Services',
          metaDescription: 'Top digital marketing agency in Amsterdam',
          status: 'PUBLISHED',
          type: 'MARKETING',
          authorId: adminUser.id,
          views: 500
        }
      }),
      prisma.page.create({
        data: {
          title: 'SEO Services',
          slug: 'seo-services',
          content: 'Professional SEO services to boost your online visibility.',
          status: 'PUBLISHED',
          type: 'SERVICE',
          authorId: adminUser.id,
          views: 280
        }
      })
    ]);
    console.log(`   ✓ Created ${pages.length} pages`);
    
    // Create some clients
    console.log('\n3. Creating clients...');
    const clients = await Promise.all([
      prisma.client.create({
        data: {
          companyName: 'TechStart Amsterdam',
          contactName: 'Jan de Vries',
          email: 'jan@techstart.nl',
          phone: '+31 6 12345678',
          website: 'https://techstart.nl',
          industry: 'Technology',
          status: 'ACTIVE',
          contractValue: 5000
        }
      }),
      prisma.client.create({
        data: {
          companyName: 'Fashion Boutique Rotterdam',
          contactName: 'Maria van der Berg',
          email: 'maria@fashionboutique.nl',
          phone: '+31 6 98765432',
          website: 'https://fashionboutique.nl',
          industry: 'Retail',
          status: 'ACTIVE',
          contractValue: 3500
        }
      }),
      prisma.client.create({
        data: {
          companyName: 'Startup Hub Utrecht',
          contactName: 'Peter Bakker',
          email: 'peter@startuphub.nl',
          industry: 'Business Services',
          status: 'ONBOARDING',
          contractValue: 2500
        }
      })
    ]);
    console.log(`   ✓ Created ${clients.length} clients`);
    
    // Create some SEO tasks
    console.log('\n4. Creating SEO tasks...');
    const tasks = await Promise.all([
      prisma.sEOTask.create({
        data: {
          clientId: clients[0].id,
          title: 'Keyword Research',
          description: 'Conduct comprehensive keyword research for main service pages',
          status: 'IN_PROGRESS',
          priority: 'HIGH',
          category: 'SEO'
        }
      }),
      prisma.sEOTask.create({
        data: {
          clientId: clients[0].id,
          title: 'Technical SEO Audit',
          description: 'Complete technical SEO audit of the website',
          status: 'TODO',
          priority: 'MEDIUM',
          category: 'SEO'
        }
      }),
      prisma.sEOTask.create({
        data: {
          clientId: clients[1].id,
          title: 'Content Strategy',
          description: 'Develop Q1 content strategy',
          status: 'TODO',
          priority: 'HIGH',
          category: 'Content'
        }
      })
    ]);
    console.log(`   ✓ Created ${tasks.length} SEO tasks`);
    
    // Create activity logs
    console.log('\n5. Creating activity logs...');
    const activities = await Promise.all([
      prisma.activityLog.create({
        data: {
          action: 'CLIENT_CREATED',
          entity: 'CLIENT',
          entityId: clients[0].id,
          userId: adminUser.id,
          metadata: { clientName: clients[0].companyName }
        }
      }),
      prisma.activityLog.create({
        data: {
          action: 'ARTICLE_PUBLISHED',
          entity: 'ARTICLE',
          entityId: articles[0].id,
          userId: adminUser.id,
          metadata: { title: articles[0].title }
        }
      }),
      prisma.activityLog.create({
        data: {
          action: 'TASK_CREATED',
          entity: 'TASK',
          entityId: tasks[0].id,
          userId: adminUser.id,
          metadata: { taskTitle: tasks[0].title }
        }
      })
    ]);
    console.log(`   ✓ Created ${activities.length} activity logs`);
    
    // Get summary
    const [
      totalArticles,
      totalPages,
      totalClients,
      totalTasks
    ] = await Promise.all([
      prisma.article.count(),
      prisma.page.count(),
      prisma.client.count(),
      prisma.sEOTask.count()
    ]);
    
    console.log('\n=================================');
    console.log('✅ DATABASE POPULATED SUCCESSFULLY!');
    console.log('=================================');
    console.log('\nDatabase now contains:');
    console.log(`- ${totalArticles} articles`);
    console.log(`- ${totalPages} pages`);
    console.log(`- ${totalClients} clients`);
    console.log(`- ${totalTasks} SEO tasks`);
    console.log('\nYour dashboard should now show real data!');
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

populateDatabase().catch((error) => {
  console.error('Failed to populate database:', error);
  process.exit(1);
});