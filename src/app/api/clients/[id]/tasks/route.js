import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { formatResponse, formatError } from '@/lib/utils';
import { verifySession } from '@/lib/auth-db';
import { z } from 'zod';

const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE']).default('TODO'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
  category: z.string().optional(),
  assignee: z.string().optional(),
  dueDate: z.string().optional()
});

// GET /api/clients/:id/tasks - Get all tasks for a client
export async function GET(request, { params }) {
  try {
    const { id: clientId } = await params;
    
    const tasks = await prisma.sEOTask.findMany({
      where: { clientId },
      orderBy: [
        { status: 'asc' },
        { priority: 'desc' },
        { dueDate: 'asc' },
        { createdAt: 'desc' }
      ]
    });
    
    // Group tasks by status for kanban view
    const tasksByStatus = {
      TODO: [],
      IN_PROGRESS: [],
      REVIEW: [],
      DONE: []
    };
    
    tasks.forEach(task => {
      tasksByStatus[task.status].push(task);
    });
    
    return NextResponse.json(formatResponse({
      tasks,
      tasksByStatus,
      total: tasks.length
    }));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json(
      formatError('Failed to fetch tasks'),
      { status: 500 }
    );
  }
}

// POST /api/clients/:id/tasks - Create new task
export async function POST(request, { params }) {
  try {
    const { id: clientId } = await params;
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
    const validatedData = createTaskSchema.parse(body);
    
    // Check if client exists
    const client = await prisma.client.findUnique({
      where: { id: clientId },
      select: { companyName: true }
    });
    
    if (!client) {
      return NextResponse.json(
        formatError('Client not found', 404),
        { status: 404 }
      );
    }
    
    // Create task
    const task = await prisma.sEOTask.create({
      data: {
        clientId,
        ...validatedData,
        dueDate: validatedData.dueDate ? new Date(validatedData.dueDate) : null
      }
    });
    
    // Log activity
    await prisma.clientActivity.create({
      data: {
        clientId,
        type: 'TASK_CREATED',
        title: `New task: ${task.title}`,
        description: `Priority: ${task.priority}, Status: ${task.status}`,
        metadata: { taskId: task.id }
      }
    });
    
    return NextResponse.json(formatResponse(task));
  } catch (error) {
    console.error('Error creating task:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid input data', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to create task'),
      { status: 500 }
    );
  }
}