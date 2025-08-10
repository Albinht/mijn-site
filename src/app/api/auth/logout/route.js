import { NextResponse } from 'next/server';
import { deleteSession, logActivity } from '@/lib/auth-db';

export async function POST(request) {
  try {
    const cookieHeader = request.headers.get('cookie');
    
    if (cookieHeader) {
      const cookies = Object.fromEntries(
        cookieHeader.split('; ').map(cookie => cookie.split('='))
      );
      
      const token = cookies['auth-token'];
      
      if (token) {
        // Delete session from database
        await deleteSession(token);
        
        // Log logout activity
        const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
        await logActivity('LOGOUT', 'AUTH', null, null, null, clientIp);
      }
    }
    
    const response = NextResponse.json(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    );
    
    // Clear the auth token cookie
    response.cookies.set('auth-token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0, // Expire immediately
      path: '/'
    });
    
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}