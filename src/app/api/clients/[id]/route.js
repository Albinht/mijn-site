import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';
import { z } from 'zod';

const updateClientSchema = z.object({
  companyName: z.string().min(1).optional(),
  contactName: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  industry: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'ONBOARDING', 'COMPLETED']).optional(),
  contractValue: z.number().optional(),
  endDate: z.string().optional(),
  notes: z.string().optional()
});

// GET /api/clients/:id - Get single client with all details
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    
    const client = await prisma.client.findUnique({
      where: { id },
      include: {
        tasks: {
          orderBy: [
            { status: 'asc' },
            { priority: 'desc' },
            { createdAt: 'desc' }
          ]
        },
        checklists: {
          orderBy: { createdAt: 'desc' }
        },
        activities: {
          orderBy: { createdAt: 'desc' },
          take: 20
        }
      }
    });
    
    if (!client) {
      return NextResponse.json(
        formatError('Client not found', 404),
        { status: 404 }
      );
    }
    
    // Parse checklist items from JSON
    const clientWithParsedChecklists = {
      ...client,
      checklists: client.checklists.map(checklist => ({
        ...checklist,
        items: JSON.parse(checklist.items)
      }))
    };
    
    return NextResponse.json(formatResponse(clientWithParsedChecklists));
  } catch (error) {
    console.error('Error fetching client:', error);
    return NextResponse.json(
      formatError('Failed to fetch client'),
      { status: 500 }
    );
  }
}

// PUT /api/clients/:id - Update client
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const validatedData = updateClientSchema.parse(body);
    
    // Update client
    const updatedClient = await prisma.client.update({
      where: { id },
      data: {
        ...validatedData,
        endDate: validatedData.endDate ? new Date(validatedData.endDate) : undefined
      },
      include: {
        tasks: true,
        checklists: true,
        activities: { take: 5, orderBy: { createdAt: 'desc' } }
      }
    });
    
    // Log activity
    await prisma.clientActivity.create({
      data: {
        clientId: id,
        type: 'CLIENT_UPDATED',
        title: 'Client information updated',
        metadata: validatedData
      }
    });
    
    return NextResponse.json(formatResponse(updatedClient));
  } catch (error) {
    console.error('Error updating client:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid input data', 400),
        { status: 400 }
      );
    }
    if (error.code === 'P2025') {
      return NextResponse.json(
        formatError('Client not found', 404),
        { status: 404 }
      );
    }
    return NextResponse.json(
      formatError('Failed to update client'),
      { status: 500 }
    );
  }
}

// DELETE /api/clients/:id - Delete client
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    // Check if client exists
    const client = await prisma.client.findUnique({
      where: { id },
      select: { companyName: true }
    });
    
    if (!client) {
      return NextResponse.json(
        formatError('Client not found', 404),
        { status: 404 }
      );
    }
    
    // Delete client (cascades to related records)
    await prisma.client.delete({
      where: { id }
    });
    
    return NextResponse.json(formatResponse({ 
      message: `Client ${client.companyName} deleted successfully` 
    }));
  } catch (error) {
    console.error('Error deleting client:', error);
    return NextResponse.json(
      formatError('Failed to delete client'),
      { status: 500 }
    );
  }
}