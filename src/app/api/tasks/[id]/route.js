import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';
import { z } from 'zod';

const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE']).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional(),
  category: z.string().optional(),
  assignee: z.string().optional(),
  dueDate: z.string().nullable().optional()
});

// PUT /api/tasks/:id - Update task
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    // Skip auth in development
    const user = await verifyAuth(request);
    if (process.env.NODE_ENV === 'production') {
      user = await verifyAuth(request);
      if (!user) {
        return NextResponse.json(
          formatError('Unauthorized', 401),
          { status: 401 }
        );
      }
    }
    
    const body = await request.json();
    const validatedData = updateTaskSchema.parse(body);
    
    // Get existing task to track changes
    const existingTask = await prisma.sEOTask.findUnique({
      where: { id },
      include: { client: { select: { companyName: true } } }
    });
    
    if (!existingTask) {
      return NextResponse.json(
        formatError('Task not found', 404),
        { status: 404 }
      );
    }
    
    // Update task
    const updatedTask = await prisma.sEOTask.update({
      where: { id },
      data: {
        ...validatedData,
        dueDate: validatedData.dueDate !== undefined 
          ? (validatedData.dueDate ? new Date(validatedData.dueDate) : null)
          : undefined,
        completedAt: validatedData.status === 'DONE' && existingTask.status !== 'DONE'
          ? new Date()
          : (validatedData.status !== 'DONE' ? null : undefined)
      }
    });
    
    // Log status change activity
    if (validatedData.status && validatedData.status !== existingTask.status) {
      await prisma.clientActivity.create({
        data: {
          clientId: existingTask.clientId,
          type: 'TASK_UPDATED',
          title: `Task status changed: ${existingTask.title}`,
          description: `${existingTask.status} → ${validatedData.status}`,
          metadata: { taskId: id, oldStatus: existingTask.status, newStatus: validatedData.status }
        }
      });
    }
    
    return NextResponse.json(formatResponse(updatedTask));
  } catch (error) {
    console.error('Error updating task:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid input data', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to update task'),
      { status: 500 }
    );
  }
}

// DELETE /api/tasks/:id - Delete task
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    // Skip auth in development
    const user = await verifyAuth(request);
    if (process.env.NODE_ENV === 'production') {
      user = await verifyAuth(request);
      if (!user) {
        return NextResponse.json(
          formatError('Unauthorized', 401),
          { status: 401 }
        );
      }
    }
    
    // Get task details before deletion
    const task = await prisma.sEOTask.findUnique({
      where: { id },
      select: { title: true, clientId: true }
    });
    
    if (!task) {
      return NextResponse.json(
        formatError('Task not found', 404),
        { status: 404 }
      );
    }
    
    // Delete task
    await prisma.sEOTask.delete({
      where: { id }
    });
    
    // Log activity
    await prisma.clientActivity.create({
      data: {
        clientId: task.clientId,
        type: 'TASK_DELETED',
        title: `Task deleted: ${task.title}`,
        metadata: { taskId: id }
      }
    });
    
    return NextResponse.json(formatResponse({ 
      message: 'Task deleted successfully' 
    }));
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json(
      formatError('Failed to delete task'),
      { status: 500 }
    );
  }
}