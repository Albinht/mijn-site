import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

// JWT secret - must be same everywhere
const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production-niblah-2025'
);

/**
 * Verify JWT token
 */
export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return null;
  }
}

/**
 * Get token from request cookies
 */
export function getTokenFromRequest(request) {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) return null;
  
  const cookies = Object.fromEntries(
    cookieHeader.split('; ').map(cookie => {
      const [key, ...values] = cookie.split('=');
      return [key, values.join('=')];
    })
  );
  
  return cookies['auth-token'] || null;
}

/**
 * Verify authentication for API routes
 * Returns user payload if authenticated, null otherwise
 */
export async function verifyAuth(request) {
  try {
    const token = getTokenFromRequest(request);
    
    if (!token) {
      console.log('No auth token found in request');
      return null;
    }
    
    const payload = await verifyToken(token);
    
    if (!payload) {
      console.log('Token verification failed');
      return null;
    }
    
    // Check if token is expired (jose handles this, but double-check)
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      console.log('Token expired');
      return null;
    }
    
    return payload;
  } catch (error) {
    console.error('Auth verification error:', error);
    return null;
  }
}

/**
 * Require authentication for API routes
 * Use this as a wrapper for API handlers that need auth
 */
export async function requireAuth(handler) {
  return async function(request, context) {
    const user = await verifyAuth(request);
    
    if (!user) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Authentication required',
          code: 'UNAUTHORIZED'
        },
        { status: 401 }
      );
    }
    
    // Add user to request for use in handler
    request.user = user;
    
    // Call the actual handler
    return handler(request, context);
  };
}

/**
 * Check if database is configured (for fallback logic)
 */
export function isDatabaseConfigured() {
  const dbUrl = process.env.DATABASE_URL;
  return dbUrl && !dbUrl.includes('file:') && dbUrl.includes('postgres');
}