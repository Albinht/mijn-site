import { NextResponse } from 'next/server';
import { verifyAuth, isDatabaseConfigured } from '@/lib/auth-utils';
import { verifyAuth } from '@/lib/auth-utils';

export async function GET(request) {
  try {
    // First try the new auth utils (works with simple auth)
    const user = await verifyAuth(request);
    
    if (user) {
      return NextResponse.json({
        valid: true,
        success: true,
        authenticated: true,
        user: {
          id: user.userId || user.id || 'hardcoded-user-id',
          username: user.username || 'Niblah',
          email: user.email || 'admin@admin.nl',
          role: user.role || 'ADMIN',
          isAdmin: user.isAdmin !== false
        }
      });
    }
    
    // If database is configured, try database session verification
    if (isDatabaseConfigured()) {
      const cookieHeader = request.headers.get('cookie');
      if (cookieHeader) {
        const cookies = Object.fromEntries(
          cookieHeader.split('; ').map(cookie => {
            const [key, ...values] = cookie.split('=');
            return [key, values.join('=')];
          })
        );
        
        const token = cookies['auth-token'];
        if (token) {
          try {
            const user = await verifyAuth(token);
            if (session) {
              return NextResponse.json({ 
                valid: true,
                success: true,
                authenticated: true,
                user: {
                  id: user.userId,
                  username: session.user.username,
                  email: session.user.email,
                  role: session.user.role
                }
              });
            }
          } catch (dbError) {
            console.error('Database session verification failed:', dbError);
          }
        }
      }
    }
    
    // Not authenticated
    return NextResponse.json({ 
      valid: false,
      success: false,
      authenticated: false,
      error: 'Not authenticated'
    }, { status: 401 });
    
  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json({ 
      valid: false,
      success: false,
      authenticated: false,
      error: 'Verification failed'
    }, { status: 500 });
  }
}