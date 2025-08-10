import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifySession } from '@/lib/auth-db';
import { z } from 'zod';

// Validation schemas
const createClientSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  contactName: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  industry: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'ONBOARDING', 'COMPLETED']).default('ONBOARDING'),
  contractValue: z.number().optional(),
  notes: z.string().optional()
});

const querySchema = z.object({
  search: z.string().optional(),
  status: z.string().optional(),
  limit: z.string().optional().transform(val => val ? Number(val) : 20),
  offset: z.string().optional().transform(val => val ? Number(val) : 0)
});

// GET /api/clients - List all clients
export async function GET(request) {
  try {
    // Parse query params
    const { searchParams } = new URL(request.url);
    const query = querySchema.parse(Object.fromEntries(searchParams));
    
    // Build where clause
    const where = {};
    
    if (query.search) {
      where.OR = [
        { companyName: { contains: query.search } },
        { contactName: { contains: query.search } },
        { email: { contains: query.search } }
      ];
    }
    
    if (query.status && query.status !== 'all') {
      where.status = query.status;
    }
    
    // Fetch clients with related data
    const [clients, total] = await Promise.all([
      prisma.client.findMany({
        where,
        include: {
          tasks: {
            where: { status: { not: 'DONE' } },
            take: 5,
            orderBy: { priority: 'desc' }
          },
          checklists: {
            select: { progress: true }
          },
          activities: {
            take: 1,
            orderBy: { createdAt: 'desc' }
          },
          _count: {
            select: {
              tasks: true,
              checklists: true
            }
          }
        },
        take: query.limit,
        skip: query.offset,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.client.count({ where })
    ]);
    
    // Calculate overall progress for each client
    const clientsWithProgress = clients.map(client => {
      const totalProgress = client.checklists.reduce((sum, checklist) => sum + checklist.progress, 0);
      const avgProgress = client.checklists.length > 0 ? totalProgress / client.checklists.length : 0;
      
      return {
        ...client,
        overallProgress: Math.round(avgProgress),
        lastActivity: client.activities[0]?.createdAt || client.createdAt
      };
    });
    
    return NextResponse.json(formatResponse({
      clients: clientsWithProgress,
      total,
      limit: query.limit,
      offset: query.offset
    }));
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json(
      formatError('Failed to fetch clients'),
      { status: 500 }
    );
  }
}

// POST /api/clients - Create new client
export async function POST(request) {
  try {
    // Skip auth in development
    let session = { userId: 'dev-user' };
    if (process.env.NODE_ENV === 'production') {
      session = await verifySession(request);
      if (!session) {
        return NextResponse.json(
          formatError('Unauthorized', 401),
          { status: 401 }
        );
      }
    }
    
    const body = await request.json();
    const validatedData = createClientSchema.parse(body);
    
    // Create client with initial SEO checklist
    const client = await prisma.client.create({
      data: {
        ...validatedData,
        checklists: {
          create: {
            name: 'SEO Onboarding Checklist',
            items: JSON.stringify([
              { id: '1', task: 'Initial SEO Audit', completed: false },
              { id: '2', task: 'Keyword Research', completed: false },
              { id: '3', task: 'Competitor Analysis', completed: false },
              { id: '4', task: 'Technical SEO Setup', completed: false },
              { id: '5', task: 'Content Strategy Planning', completed: false },
              { id: '6', task: 'Google Analytics Setup', completed: false },
              { id: '7', task: 'Google Search Console Setup', completed: false },
              { id: '8', task: 'Local SEO Optimization', completed: false }
            ]),
            progress: 0
          }
        },
        activities: {
          create: {
            type: 'CLIENT_CREATED',
            title: 'Client onboarded',
            description: `${validatedData.companyName} has been added to the system`
          }
        }
      },
      include: {
        checklists: true,
        tasks: true,
        activities: { take: 5, orderBy: { createdAt: 'desc' } }
      }
    });
    
    return NextResponse.json(formatResponse(client));
  } catch (error) {
    console.error('Error creating client:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid input data', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to create client'),
      { status: 500 }
    );
  }
}