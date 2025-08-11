import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { createContentSchema, contentQuerySchema } from '@/lib/validations';
import { generateSlug, formatResponse, formatError } from '@/lib/utils';
import { verifyAuth } from '@/lib/auth-utils';


// GET /api/content - List all content with filtering and pagination
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams);
    
    // Validate query parameters
    const validatedQuery = contentQuerySchema.parse(params);
    const { page, limit, type, status, search, sortBy, sortOrder } = validatedQuery;
    
    // Build filter conditions
    const where = {};
    if (type) where.type = type;
    if (status) where.status = status;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
        { metaDescription: { contains: search, mode: 'insensitive' } }
      ];
    }
    
    // Get total count
    const total = await prisma.page.count({ where });
    
    // Get paginated content
    const skip = (page - 1) * limit;
    const pages = await prisma.page.findMany({
      where,
      skip,
      take: limit,
      orderBy: { [sortBy]: sortOrder },
      select: {
        id: true,
        title: true,
        slug: true,
        type: true,
        status: true,
        views: true,
        metaDescription: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    const totalPages = Math.ceil(total / limit);
    
    return NextResponse.json(formatResponse(pages, {
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore: page < totalPages
      }
    }));
  } catch (error) {
    console.error('Error fetching content:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid query parameters', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to fetch content'),
      { status: 500 }
    );
  }
}

// POST /api/content - Create new content
export async function POST(request) {
  try {
    // Verify authentication
    const user = await verifyAuth(request);
    if (!user) {
      return NextResponse.json(
        formatError('Unauthorized', 401),
        { status: 401 }
      );
    }
    
    const body = await request.json();
    
    // Validate input
    const validatedData = createContentSchema.parse(body);
    
    // Generate slug if not provided
    const slug = validatedData.slug || generateSlug(validatedData.title);
    
    // Check if slug already exists
    const existingPage = await prisma.page.findUnique({
      where: { slug }
    });
    
    if (existingPage) {
      return NextResponse.json(
        formatError('A page with this slug already exists', 409),
        { status: 409 }
      );
    }
    
    // Create new page
    const pageData = {
      title: validatedData.title,
      slug,
      content: validatedData.content || '',
      metaTitle: validatedData.metaTitle || validatedData.title,
      metaDescription: validatedData.metaDescription || '',
      type: validatedData.type.toUpperCase(), // Ensure uppercase
      status: validatedData.status || 'DRAFT',
      views: 0
    };
    
    // Only add authorId if we have a real user ID (not hardcoded)
    if (user.userId && user.userId !== 'hardcoded-user-id') {
      // Check if user exists in database
      const userExists = await prisma.user.findUnique({
        where: { id: user.userId }
      });
      
      if (userExists) {
        pageData.authorId = user.userId;
      }
    }
    
    const page = await prisma.page.create({
      data: pageData
    });
    
    // Log activity (only if we have a valid user in database)
    if (user.userId && user.userId !== 'hardcoded-user-id') {
      try {
        await prisma.activityLog.create({
          data: {
            userId: user.userId,
            action: 'CREATE_PAGE',
            entity: 'page',
            entityId: page.id,
            metadata: { title: page.title, type: page.type },
            ipAddress: request.headers.get('x-forwarded-for') || 'unknown'
          }
        });
      } catch (logError) {
        // Don't fail the request if activity logging fails
        console.error('Failed to log activity:', logError);
      }
    }
    
    return NextResponse.json(formatResponse(page), { status: 201 });
  } catch (error) {
    console.error('Error creating content:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid input data: ' + error.errors.map(e => e.message).join(', '), 400),
        { status: 400 }
      );
    }
    
    // Prisma specific errors
    if (error.code === 'P2002') {
      return NextResponse.json(
        formatError('A page with this slug already exists', 409),
        { status: 409 }
      );
    }
    
    if (error.code === 'P2003') {
      return NextResponse.json(
        formatError('Invalid foreign key reference', 400),
        { status: 400 }
      );
    }
    
    // Return more detailed error in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Failed to create content: ${error.message}` 
      : 'Failed to create content';
    
    return NextResponse.json(
      formatError(errorMessage),
      { status: 500 }
    );
  }
}