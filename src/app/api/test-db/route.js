import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const results = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    database: {
      url_exists: !!process.env.DATABASE_URL,
      url_length: process.env.DATABASE_URL?.length || 0,
      url_starts_with: process.env.DATABASE_URL?.substring(0, 30) + '...',
      is_postgres: process.env.DATABASE_URL?.includes('postgres') || false,
      has_supabase: process.env.DATABASE_URL?.includes('supabase') || false,
      has_pooler: process.env.DATABASE_URL?.includes('pgbouncer') || false
    },
    prisma_test: {
      client_exists: false,
      can_connect: false,
      user_count: null,
      error: null
    }
  };

  // Test 1: Check if Prisma client exists
  try {
    results.prisma_test.client_exists = !!prisma;
  } catch (e) {
    results.prisma_test.error = `Prisma client error: ${e.message}`;
  }

  // Test 2: Try to connect and count users
  if (results.prisma_test.client_exists) {
    try {
      const userCount = await prisma.user.count();
      results.prisma_test.can_connect = true;
      results.prisma_test.user_count = userCount;
    } catch (e) {
      results.prisma_test.can_connect = false;
      results.prisma_test.error = `Database query error: ${e.message}`;
      
      // Try to get more specific error info
      if (e.code) results.prisma_test.error_code = e.code;
      if (e.meta) results.prisma_test.error_meta = e.meta;
    }
  }

  // Test 3: Try a simple query with $queryRaw
  try {
    const testQuery = await prisma.$queryRaw`SELECT 1 as test`;
    results.prisma_test.raw_query_works = true;
    results.prisma_test.raw_query_result = testQuery;
  } catch (e) {
    results.prisma_test.raw_query_works = false;
    results.prisma_test.raw_query_error = e.message;
  }

  // Test 4: Check all environment variables
  results.env_vars = {
    DATABASE_URL: !!process.env.DATABASE_URL,
    POSTGRES_PRISMA_URL: !!process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL_NON_POOLING: !!process.env.POSTGRES_URL_NON_POOLING,
    JWT_SECRET: !!process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV
  };

  return NextResponse.json(results, { 
    status: results.prisma_test.can_connect ? 200 : 500 
  });
}