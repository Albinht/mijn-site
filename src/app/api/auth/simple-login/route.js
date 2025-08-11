import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

// Get JWT secret
const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production-niblah-2025'
);

// Hardcoded credentials for production without database
const HARDCODED_USER = {
  username: 'Niblah',
  // This is the hash for 'Jukovic91!' - verified working
  passwordHash: '$2b$10$YbEeErjuBsbO/Tl4qfhPk.pURuAJF1XUCIHwc.Q3RG1GRK7fPNJj.',
  email: 'admin@admin.nl',
  id: 'hardcoded-user-id'
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
    
    // Create a proper JWT token
    const token = await new SignJWT({ 
      userId: HARDCODED_USER.id,
      username: HARDCODED_USER.username,
      email: HARDCODED_USER.email,
      isAdmin: true,
      loginTime: Date.now()
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secret);
    
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