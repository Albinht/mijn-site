import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';

// Predefined SEO templates
const DEFAULT_TEMPLATES = [
  {
    name: 'Technical SEO Audit',
    description: 'Complete technical SEO checklist for website optimization',
    category: 'Technical',
    items: [
      { id: '1', task: 'Check robots.txt file', completed: false },
      { id: '2', task: 'Verify XML sitemap', completed: false },
      { id: '3', task: 'Test site speed (Core Web Vitals)', completed: false },
      { id: '4', task: 'Check mobile responsiveness', completed: false },
      { id: '5', task: 'Audit URL structure', completed: false },
      { id: '6', task: 'Fix broken links (404 errors)', completed: false },
      { id: '7', task: 'Implement schema markup', completed: false },
      { id: '8', task: 'Check HTTPS/SSL certificate', completed: false },
      { id: '9', task: 'Optimize crawl budget', completed: false },
      { id: '10', task: 'Set up canonical URLs', completed: false }
    ]
  },
  {
    name: 'On-Page SEO Optimization',
    description: 'Essential on-page SEO elements checklist',
    category: 'On-Page',
    items: [
      { id: '1', task: 'Optimize title tags', completed: false },
      { id: '2', task: 'Write meta descriptions', completed: false },
      { id: '3', task: 'Structure H1-H6 headings', completed: false },
      { id: '4', task: 'Optimize images (alt text, compression)', completed: false },
      { id: '5', task: 'Internal linking strategy', completed: false },
      { id: '6', task: 'Keyword optimization in content', completed: false },
      { id: '7', task: 'Create SEO-friendly URLs', completed: false },
      { id: '8', task: 'Add breadcrumb navigation', completed: false }
    ]
  },
  {
    name: 'Local SEO Setup',
    description: 'Local SEO optimization for businesses',
    category: 'Local',
    items: [
      { id: '1', task: 'Create/claim Google My Business listing', completed: false },
      { id: '2', task: 'Optimize GMB profile', completed: false },
      { id: '3', task: 'Build local citations', completed: false },
      { id: '4', task: 'Get customer reviews', completed: false },
      { id: '5', task: 'Add local schema markup', completed: false },
      { id: '6', task: 'Create location pages', completed: false },
      { id: '7', task: 'Optimize for "near me" searches', completed: false },
      { id: '8', task: 'Submit to local directories', completed: false }
    ]
  },
  {
    name: 'Content Marketing Strategy',
    description: 'Content creation and optimization checklist',
    category: 'Content',
    items: [
      { id: '1', task: 'Keyword research', completed: false },
      { id: '2', task: 'Create content calendar', completed: false },
      { id: '3', task: 'Write pillar content', completed: false },
      { id: '4', task: 'Create topic clusters', completed: false },
      { id: '5', task: 'Optimize existing content', completed: false },
      { id: '6', task: 'Add FAQ sections', completed: false },
      { id: '7', task: 'Create how-to guides', completed: false },
      { id: '8', task: 'Develop link-worthy resources', completed: false }
    ]
  },
  {
    name: 'Link Building Campaign',
    description: 'Strategic link building checklist',
    category: 'Off-Page',
    items: [
      { id: '1', task: 'Competitor backlink analysis', completed: false },
      { id: '2', task: 'Create linkable assets', completed: false },
      { id: '3', task: 'Guest posting outreach', completed: false },
      { id: '4', task: 'Broken link building', completed: false },
      { id: '5', task: 'HARO (Help a Reporter Out) submissions', completed: false },
      { id: '6', task: 'Build resource page links', completed: false },
      { id: '7', task: 'Create infographics for sharing', completed: false },
      { id: '8', task: 'Monitor brand mentions', completed: false }
    ]
  },
  {
    name: 'E-commerce SEO',
    description: 'SEO checklist for online stores',
    category: 'E-commerce',
    items: [
      { id: '1', task: 'Optimize product pages', completed: false },
      { id: '2', task: 'Create unique product descriptions', completed: false },
      { id: '3', task: 'Implement product schema', completed: false },
      { id: '4', task: 'Optimize category pages', completed: false },
      { id: '5', task: 'Set up faceted navigation', completed: false },
      { id: '6', task: 'Optimize site search', completed: false },
      { id: '7', task: 'Create product reviews system', completed: false },
      { id: '8', task: 'Implement breadcrumbs', completed: false }
    ]
  }
];

// GET /api/seo-templates - Get all templates or initialize them
export async function GET(request) {
  try {
    // Check if templates exist
    const templates = await prisma.sEOTemplate.findMany({
      orderBy: { category: 'asc' }
    });
    
    // If no templates exist, create default ones
    if (templates.length === 0) {
      const createdTemplates = await Promise.all(
        DEFAULT_TEMPLATES.map(template => 
          prisma.sEOTemplate.create({
            data: {
              name: template.name,
              description: template.description,
              category: template.category,
              items: JSON.stringify(template.items)
            }
          })
        )
      );
      
      return NextResponse.json(formatResponse({
        templates: createdTemplates.map(t => ({
          ...t,
          items: JSON.parse(t.items)
        })),
        message: 'Default templates created'
      }));
    }
    
    // Return existing templates with parsed items
    const templatesWithParsedItems = templates.map(template => ({
      ...template,
      items: JSON.parse(template.items)
    }));
    
    return NextResponse.json(formatResponse({
      templates: templatesWithParsedItems
    }));
  } catch (error) {
    console.error('Error fetching templates:', error);
    return NextResponse.json(
      formatError('Failed to fetch templates'),
      { status: 500 }
    );
  }
}

// POST /api/seo-templates/:clientId/apply - Apply template to client
export async function POST(request) {
  try {
    const body = await request.json();
    const { clientId, templateId } = body;
    
    if (!clientId || !templateId) {
      return NextResponse.json(
        formatError('Client ID and Template ID are required', 400),
        { status: 400 }
      );
    }
    
    // Get template
    const template = await prisma.sEOTemplate.findUnique({
      where: { id: templateId }
    });
    
    if (!template) {
      return NextResponse.json(
        formatError('Template not found', 404),
        { status: 404 }
      );
    }
    
    // Create checklist for client from template
    const checklist = await prisma.clientChecklist.create({
      data: {
        clientId,
        templateId,
        name: template.name,
        items: template.items,
        progress: 0
      }
    });
    
    // Log activity
    await prisma.clientActivity.create({
      data: {
        clientId,
        type: 'TEMPLATE_APPLIED',
        title: `Applied template: ${template.name}`,
        description: `${template.category} checklist added`,
        metadata: { templateId, checklistId: checklist.id }
      }
    });
    
    return NextResponse.json(formatResponse({
      checklist: {
        ...checklist,
        items: JSON.parse(checklist.items)
      },
      message: 'Template applied successfully'
    }));
  } catch (error) {
    console.error('Error applying template:', error);
    return NextResponse.json(
      formatError('Failed to apply template'),
      { status: 500 }
    );
  }
}