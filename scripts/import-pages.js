import prisma from '../src/lib/prisma.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of marketing pages to import
const MARKETING_PAGES = [
  { city: 'amsterdam', title: 'Marketing Bureau Amsterdam' },
  { city: 'rotterdam', title: 'Marketing Bureau Rotterdam' },
  { city: 'utrecht', title: 'Marketing Bureau Utrecht' },
  { city: 'den-haag', title: 'Marketing Bureau Den Haag' },
  { city: 'eindhoven', title: 'Marketing Bureau Eindhoven' },
  { city: 'tilburg', title: 'Marketing Bureau Tilburg' },
  { city: 'groningen', title: 'Marketing Bureau Groningen' },
  { city: 'almere', title: 'Marketing Bureau Almere' },
  { city: 'breda', title: 'Marketing Bureau Breda' },
  { city: 'nijmegen', title: 'Marketing Bureau Nijmegen' },
  { city: 'apeldoorn', title: 'Marketing Bureau Apeldoorn' },
  { city: 'arnhem', title: 'Marketing Bureau Arnhem' },
  { city: 'amersfoort', title: 'Marketing Bureau Amersfoort' },
  { city: 'zaanstad', title: 'Marketing Bureau Zaanstad' },
  { city: 'haarlem', title: 'Marketing Bureau Haarlem' },
  { city: 'den-bosch', title: 'Marketing Bureau Den Bosch' },
  { city: 'dordrecht', title: 'Marketing Bureau Dordrecht' },
  { city: 'leiden', title: 'Marketing Bureau Leiden' },
  { city: 'zoetermeer', title: 'Marketing Bureau Zoetermeer' },
  { city: 'maastricht', title: 'Marketing Bureau Maastricht' },
  { city: 'ede', title: 'Marketing Bureau Ede' },
  { city: 'barneveld', title: 'Marketing Bureau Barneveld' },
  { city: 'putten', title: 'Marketing Bureau Putten' },
  { city: 'nijkerk', title: 'Marketing Bureau Nijkerk' },
  { city: 'leusden', title: 'Marketing Bureau Leusden' },
  { city: 'woudenberg', title: 'Marketing Bureau Woudenberg' },
  { city: 'scherpenzeel', title: 'Marketing Bureau Scherpenzeel' },
  { city: 'bunnik', title: 'Marketing Bureau Bunnik' },
  { city: 'lopik', title: 'Marketing Bureau Lopik' },
  { city: 'montfoort', title: 'Marketing Bureau Montfoort' },
  { city: 'oudewater', title: 'Marketing Bureau Oudewater' },
  { city: 'renswoude', title: 'Marketing Bureau Renswoude' },
  { city: 'laren', title: 'Marketing Bureau Laren' },
  { city: 'blaricum', title: 'Marketing Bureau Blaricum' },
  { city: 'eemnes', title: 'Marketing Bureau Eemnes' },
  { city: 'landsmeer', title: 'Marketing Bureau Landsmeer' },
  { city: 'oostzaan', title: 'Marketing Bureau Oostzaan' },
  { city: 'uitgeest', title: 'Marketing Bureau Uitgeest' },
  { city: 'ouder-amstel', title: 'Marketing Bureau Ouder-Amstel' },
  { city: 'zoeterwoude', title: 'Marketing Bureau Zoeterwoude' },
  { city: 'beek', title: 'Marketing Bureau Beek' },
  { city: 'vaals', title: 'Marketing Bureau Vaals' },
  { city: 'harlingen', title: 'Marketing Bureau Harlingen' },
  { city: 'hilvarenbeek', title: 'Marketing Bureau Hilvarenbeek' },
  { city: 'westervoort', title: 'Marketing Bureau Westervoort' },
  { city: 'gulpen-wittem', title: 'Marketing Bureau Gulpen-Wittem' },
  { city: 'london', title: 'Marketing Bureau London' }
];

// Additional smaller towns
const SMALL_TOWNS = [
  'aalst', 'aalten', 'aam', 'achter-drempt', 'achterhoek', 'achterveld', 
  'acquoy', 'aerdenburg', 'aerdt', 'afferden', 'alem', 'almen', 'alphen',
  'altforst', 'alverna', 'ammerzoden', 'ampsen', 'andelst', 'angeren', 
  'angerlo', 'aperloo', 'appel', 'appeltern', 'appen', 'armhoede', 'asch',
  'asperen', 'assel', 'avest', 'azewijn', 'barneveld', 'beets', 'bennekom',
  'de-glind', 'ede', 'essen', 'garderen', 'harselaar', 'harskamp', 'hobrede',
  'hooglanderveen', 'hoevelaken', 'kootwijk', 'kootwijkerbroek', 'kwadijk',
  'leusden', 'lunteren', 'middelie', 'middenbeemster', 'nijkerk', 'oosthuizen',
  'otterlo', 'oudendijk', 'putten', 'schardam', 'stroe', 'terschuur', 'voorthuizen',
  'warder', 'westbeemster', 'zuidoostbeemster', 'zwaag', 'zwartebroek'
];

async function importPages() {
  console.log('Starting page import...');
  let created = 0;
  let skipped = 0;
  let errors = 0;

  try {
    // Import main city marketing pages
    for (const page of MARKETING_PAGES) {
      try {
        // Check if page already exists
        const existing = await prisma.page.findUnique({
          where: { slug: `marketing-${page.city}` }
        });

        if (existing) {
          console.log(`⏭️  Skipped: ${page.title} (already exists)`);
          skipped++;
          continue;
        }

        // Create the page
        await prisma.page.create({
          data: {
            title: page.title,
            slug: `marketing-${page.city}`,
            type: 'MARKETING',
            status: 'PUBLISHED',
            metaTitle: `${page.title} - Lokale SEO & Online Marketing`,
            metaDescription: `Zoek je een marketing bureau in ${page.city.replace('-', ' ')}? Wij helpen bedrijven groeien met SEO, Google Ads en social media marketing. Neem contact op voor een gratis adviesgesprek.`,
            content: `
              <h2>Professioneel Marketing Bureau in ${page.city.replace('-', ' ')}</h2>
              <p>Wij zijn het lokale marketing bureau dat bedrijven in ${page.city.replace('-', ' ')} helpt groeien met effectieve online marketing strategieën.</p>
              
              <h3>Onze Services</h3>
              <ul>
                <li>Search Engine Optimization (SEO)</li>
                <li>Google Ads Management</li>
                <li>Social Media Marketing</li>
                <li>Content Marketing</li>
                <li>Website Ontwikkeling</li>
                <li>Email Marketing</li>
              </ul>
              
              <h3>Waarom Kiezen voor Ons Marketing Bureau?</h3>
              <p>Met jarenlange ervaring in de regio ${page.city.replace('-', ' ')} begrijpen wij de lokale markt en kunnen wij gerichte campagnes opzetten die resultaat opleveren.</p>
            `,
            views: Math.floor(Math.random() * 500)
          }
        });
        
        console.log(`✅ Created: ${page.title}`);
        created++;
      } catch (error) {
        console.error(`❌ Error creating ${page.title}:`, error.message);
        errors++;
      }
    }

    // Import small town pages with simpler structure
    for (const town of SMALL_TOWNS) {
      try {
        const slug = `marketing/${town}`;
        const title = `Marketing ${town.charAt(0).toUpperCase() + town.slice(1).replace('-', ' ')}`;
        
        // Check if exists
        const existing = await prisma.page.findUnique({
          where: { slug }
        });

        if (existing) {
          console.log(`⏭️  Skipped: ${title} (already exists)`);
          skipped++;
          continue;
        }

        await prisma.page.create({
          data: {
            title,
            slug,
            type: 'MARKETING',
            status: 'PUBLISHED',
            metaTitle: `${title} - Online Marketing Services`,
            metaDescription: `Marketing diensten in ${town.replace('-', ' ')}. SEO, Google Ads en social media marketing voor lokale bedrijven.`,
            content: `<h2>${title}</h2><p>Professionele marketing diensten voor bedrijven in ${town.replace('-', ' ')} en omgeving.</p>`,
            views: Math.floor(Math.random() * 200)
          }
        });
        
        console.log(`✅ Created: ${title}`);
        created++;
      } catch (error) {
        console.error(`❌ Error creating page for ${town}:`, error.message);
        errors++;
      }
    }

    // Import service pages
    const servicePages = [
      {
        title: 'SEO Services',
        slug: 'services/seo',
        type: 'SERVICE',
        content: '<h2>Professional SEO Services</h2><p>Boost your online visibility with our comprehensive SEO strategies.</p>'
      },
      {
        title: 'Google Ads Management',
        slug: 'services/google-ads',
        type: 'SERVICE',
        content: '<h2>Google Ads Management</h2><p>Maximize your ROI with expertly managed Google Ads campaigns.</p>'
      },
      {
        title: 'Social Media Marketing',
        slug: 'services/social-media',
        type: 'SERVICE',
        content: '<h2>Social Media Marketing</h2><p>Engage your audience and grow your brand on social media platforms.</p>'
      },
      {
        title: 'Content Marketing',
        slug: 'services/content-marketing',
        type: 'SERVICE',
        content: '<h2>Content Marketing Services</h2><p>Create compelling content that drives engagement and conversions.</p>'
      }
    ];

    for (const page of servicePages) {
      try {
        const existing = await prisma.page.findUnique({
          where: { slug: page.slug }
        });

        if (existing) {
          console.log(`⏭️  Skipped: ${page.title} (already exists)`);
          skipped++;
          continue;
        }

        await prisma.page.create({
          data: {
            ...page,
            status: 'PUBLISHED',
            metaTitle: `${page.title} - Niblah`,
            metaDescription: `Professional ${page.title.toLowerCase()} to help your business grow online.`,
            views: Math.floor(Math.random() * 1000)
          }
        });
        
        console.log(`✅ Created: ${page.title}`);
        created++;
      } catch (error) {
        console.error(`❌ Error creating ${page.title}:`, error.message);
        errors++;
      }
    }

    // Import tool pages
    const toolPages = [
      {
        title: 'ROAS Calculator',
        slug: 'tools/roas-calculator',
        type: 'TOOL',
        content: '<h2>ROAS Calculator</h2><p>Calculate your Return on Ad Spend to measure campaign effectiveness.</p>'
      },
      {
        title: 'CPA Calculator',
        slug: 'tools/cpa-calculator',
        type: 'TOOL',
        content: '<h2>CPA Calculator</h2><p>Calculate your Cost Per Acquisition for better budget planning.</p>'
      },
      {
        title: 'Invoice Generator',
        slug: 'tools/invoice-generator',
        type: 'TOOL',
        content: '<h2>Invoice Generator</h2><p>Create professional invoices for your business quickly and easily.</p>'
      }
    ];

    for (const page of toolPages) {
      try {
        const existing = await prisma.page.findUnique({
          where: { slug: page.slug }
        });

        if (existing) {
          console.log(`⏭️  Skipped: ${page.title} (already exists)`);
          skipped++;
          continue;
        }

        await prisma.page.create({
          data: {
            ...page,
            status: 'PUBLISHED',
            metaTitle: `${page.title} - Free Marketing Tool`,
            metaDescription: `Free ${page.title} for marketers and business owners.`,
            views: Math.floor(Math.random() * 2000)
          }
        });
        
        console.log(`✅ Created: ${page.title}`);
        created++;
      } catch (error) {
        console.error(`❌ Error creating ${page.title}:`, error.message);
        errors++;
      }
    }

    console.log('\n📊 Import Summary:');
    console.log(`✅ Created: ${created} pages`);
    console.log(`⏭️  Skipped: ${skipped} pages (already existed)`);
    console.log(`❌ Errors: ${errors}`);
    console.log('\n✨ Import completed!');

  } catch (error) {
    console.error('Fatal error during import:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import
importPages().catch(console.error);