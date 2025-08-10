import { NextResponse } from 'next/server';
import { 
  verifyCredentials, 
  createSession, 
  recordLoginAttempt,
  getRecentFailedAttempts,
  logActivity
} from '@/lib/auth-db';
import { tokenManager } from '@/lib/security/tokens';

const MAX_ATTEMPTS = 3;
const BLOCK_DURATION_MINUTES = 15;

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  return ip;
}

function getUserAgent(request) {
  return request.headers.get('user-agent') || 'unknown';
}

export async function POST(request) {
  try {
    const clientIp = getClientIp(request);
    const userAgent = getUserAgent(request);
    
    // Check recent failed attempts
    const recentFailedAttempts = await getRecentFailedAttempts(clientIp, BLOCK_DURATION_MINUTES);
    
    if (recentFailedAttempts.length >= MAX_ATTEMPTS) {
      const minutesRemaining = Math.ceil(
        (BLOCK_DURATION_MINUTES * 60000 - (Date.now() - new Date(recentFailedAttempts[0].attemptedAt))) / 60000
      );
      
      return NextResponse.json(
        { 
          error: `Too many failed attempts. Please try again in ${minutesRemaining} minutes.`,
          blockedMinutes: minutesRemaining
        },
        { status: 429 }
      );
    }
    
    const body = await request.json();
    const { username, password } = body;
    
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }
    
    // Verify credentials against database
    const user = await verifyCredentials(username, password);
    
    if (!user) {
      // Record failed attempt
      await recordLoginAttempt(clientIp, username, false);
      
      const remainingAttempts = MAX_ATTEMPTS - recentFailedAttempts.length - 1;
      
      await logActivity('LOGIN_FAILED', 'AUTH', null, null, { username }, clientIp);
      
      return NextResponse.json(
        { 
          error: 'Invalid credentials',
          remainingAttempts: Math.max(0, remainingAttempts),
          isBlocked: remainingAttempts <= 0
        },
        { status: 401 }
      );
    }
    
    // Record successful attempt
    await recordLoginAttempt(clientIp, username, true);
    
    // Create session
    const sessionToken = await createSession(user.id, clientIp, userAgent);
    
    // Generate token pair (access + refresh tokens)
    const { accessToken, refreshToken, accessTokenExpiry, refreshTokenExpiry } = 
      await tokenManager.generateTokenPair(user.id, sessionToken);
    
    // Log successful login
    await logActivity('LOGIN_SUCCESS', 'AUTH', user.id, user.id, { username }, clientIp);
    
    const response = NextResponse.json(
      { 
        success: true,
        message: 'Login successful',
        redirect: '/admin/dashboard',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        },
        accessToken,
        refreshToken,
        accessTokenExpiry,
        refreshTokenExpiry
      },
      { status: 200 }
    );
    
    // Set access token cookie (15 minutes)
    response.cookies.set('auth-token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 900, // 15 minutes
      path: '/'
    });
    
    // Set refresh token cookie (7 days)
    response.cookies.set('refresh-token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 604800, // 7 days
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