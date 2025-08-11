import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';
import { z } from 'zod';

const updateChecklistSchema = z.object({
  name: z.string().optional(),
  items: z.array(z.object({
    id: z.string(),
    task: z.string(),
    completed: z.boolean()
  })).optional(),
  progress: z.number().min(0).max(100).optional()
});

// PUT /api/checklists/:id - Update checklist
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
    const validatedData = updateChecklistSchema.parse(body);
    
    // Get existing checklist
    const checklist = await prisma.clientChecklist.findUnique({
      where: { id },
      include: { client: { select: { companyName: true } } }
    });
    
    if (!checklist) {
      return NextResponse.json(
        formatError('Checklist not found', 404),
        { status: 404 }
      );
    }
    
    // Update checklist
    const updateData = {};
    if (validatedData.name !== undefined) updateData.name = validatedData.name;
    if (validatedData.items !== undefined) updateData.items = JSON.stringify(validatedData.items);
    if (validatedData.progress !== undefined) updateData.progress = validatedData.progress;
    
    const updatedChecklist = await prisma.clientChecklist.update({
      where: { id },
      data: updateData
    });
    
    // Log activity if progress changed significantly
    if (validatedData.progress && Math.abs(validatedData.progress - checklist.progress) > 10) {
      await prisma.clientActivity.create({
        data: {
          clientId: checklist.clientId,
          type: 'CHECKLIST_UPDATED',
          title: `Checklist progress: ${checklist.name}`,
          description: `Progress updated from ${Math.round(checklist.progress)}% to ${Math.round(validatedData.progress)}%`,
          metadata: { checklistId: id }
        }
      });
    }
    
    return NextResponse.json(formatResponse({
      ...updatedChecklist,
      items: JSON.parse(updatedChecklist.items)
    }));
  } catch (error) {
    console.error('Error updating checklist:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid input data', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to update checklist'),
      { status: 500 }
    );
  }
}