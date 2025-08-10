import { NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth-db';

export async function GET(request) {
  try {
    const cookieHeader = request.headers.get('cookie');
    
    if (!cookieHeader) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }
    
    const cookies = Object.fromEntries(
      cookieHeader.split('; ').map(cookie => cookie.split('='))
    );
    
    const token = cookies['auth-token'];
    
    if (!token) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }
    
    const session = await verifySession(token);
    
    if (!session) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }
    
    return NextResponse.json({ 
      valid: true,
      user: {
        id: session.user.id,
        username: session.user.username,
        email: session.user.email,
        role: session.user.role
      }
    }, { status: 200 });
  } catch (error) {
    console.error('Verify error:', error);
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}