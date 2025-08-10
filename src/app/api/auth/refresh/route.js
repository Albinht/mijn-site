import { NextResponse } from 'next/server';
import { tokenManager } from '@/lib/security/tokens';
import { auditLogger } from '@/lib/audit';

export async function POST(request) {
  try {
    const body = await request.json();
    const { refreshToken } = body;
    
    if (!refreshToken) {
      return NextResponse.json(
        { error: 'Refresh token required' },
        { status: 400 }
      );
    }
    
    // Refresh the access token
    const result = await tokenManager.refreshAccessToken(refreshToken);
    
    // Log token refresh
    await auditLogger.log({
      action: 'TOKEN_REFRESH',
      entity: 'AUTH',
      entityId: result.sessionId,
      userId: result.userId,
      metadata: {
        sessionId: result.sessionId
      }
    });
    
    const response = NextResponse.json({
      success: true,
      accessToken: result.accessToken,
      expiresIn: 900 // 15 minutes
    });
    
    // Set new access token cookie
    response.cookies.set('auth-token', result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 900 // 15 minutes
    });
    
    return response;
  } catch (error) {
    console.error('Token refresh error:', error);
    
    return NextResponse.json(
      { error: error.message || 'Token refresh failed' },
      { status: 401 }
    );
  }
}

// Rotate refresh token (more secure)
export async function PUT(request) {
  try {
    const body = await request.json();
    const { refreshToken } = body;
    
    if (!refreshToken) {
      return NextResponse.json(
        { error: 'Refresh token required' },
        { status: 400 }
      );
    }
    
    // Rotate the refresh token
    const result = await tokenManager.rotateRefreshToken(refreshToken);
    
    // Log token rotation
    await auditLogger.log({
      action: 'TOKEN_ROTATE',
      entity: 'AUTH',
      entityId: result.sessionId,
      userId: result.userId,
      metadata: {
        sessionId: result.sessionId
      }
    });
    
    const response = NextResponse.json({
      success: true,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      accessTokenExpiry: result.accessTokenExpiry,
      refreshTokenExpiry: result.refreshTokenExpiry
    });
    
    // Set new access token cookie
    response.cookies.set('auth-token', result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 900 // 15 minutes
    });
    
    // Set new refresh token cookie
    response.cookies.set('refresh-token', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 604800 // 7 days
    });
    
    return response;
  } catch (error) {
    console.error('Token rotation error:', error);
    
    return NextResponse.json(
      { error: error.message || 'Token rotation failed' },
      { status: 401 }
    );
  }
}