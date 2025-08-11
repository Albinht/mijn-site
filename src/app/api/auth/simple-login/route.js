import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// Hardcoded credentials for production without database
const HARDCODED_USER = {
  username: 'Niblah',
  // This is the hash for 'Jukovic91!'
  passwordHash: '$2a$10$Z6X7.qKmKlFJKpOhZ7kWaOGzFXh9CpPVhxRvZxcmHYj3S2PMXK5Oi',
  email: 'admin@admin.nl'
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;
    
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }
    
    // Check username
    if (username !== HARDCODED_USER.username) {
      return NextResponse.json(
        { error: 'Invalid credentials', remainingAttempts: 2 },
        { status: 401 }
      );
    }
    
    // Verify password
    const passwordMatch = await bcrypt.compare(password, HARDCODED_USER.passwordHash);
    
    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Invalid credentials', remainingAttempts: 2 },
        { status: 401 }
      );
    }
    
    // Create a simple token (not secure, just for testing)
    const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
    
    const response = NextResponse.json(
      { 
        success: true,
        message: 'Login successful',
        redirect: '/admin/dashboard',
        user: {
          id: 'hardcoded-user-id',
          username: HARDCODED_USER.username,
          email: HARDCODED_USER.email,
          role: 'ADMIN'
        }
      },
      { status: 200 }
    );
    
    // Set a simple auth cookie
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400, // 24 hours
      path: '/'
    });
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}