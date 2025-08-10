import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { articleQuerySchema } from '@/lib/validations';
import { formatResponse, formatError } from '@/lib/utils';


// GET /api/articles - List all articles
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams);
    
    // Validate query parameters
    const validatedQuery = articleQuerySchema.parse(params);
    const { page, limit, status, search, sortBy, sortOrder } = validatedQuery;
    
    // Build filter conditions
    const where = {};
    if (status) where.status = status;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { topic: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } }
      ];
    }
    
    // Get total count
    const total = await prisma.article.count({ where });
    
    // Get paginated articles
    const skip = (page - 1) * limit;
    const articles = await prisma.article.findMany({
      where,
      skip,
      take: limit,
      orderBy: { [sortBy]: sortOrder },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });
    
    const totalPages = Math.ceil(total / limit);
    
    return NextResponse.json(formatResponse(articles, {
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore: page < totalPages
      }
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    if (error.name === 'ZodError') {
      return NextResponse.json(
        formatError('Invalid query parameters', 400),
        { status: 400 }
      );
    }
    return NextResponse.json(
      formatError('Failed to fetch articles'),
      { status: 500 }
    );
  }
}