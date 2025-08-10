import { SignJWT, jwtVerify } from 'jose';
import crypto from 'crypto';
import prisma from '@/lib/prisma';
import { cache } from '@/lib/cache/redis';

const ACCESS_TOKEN_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);
const REFRESH_TOKEN_SECRET = new TextEncoder().encode(
  process.env.REFRESH_SECRET || 'your-refresh-secret-change-in-production'
);

const ACCESS_TOKEN_EXPIRY = '15m'; // 15 minutes
const REFRESH_TOKEN_EXPIRY = '7d'; // 7 days

class TokenManager {
  // Generate access token
  async generateAccessToken(userId, sessionId) {
    const token = await new SignJWT({ 
      userId, 
      sessionId,
      type: 'access' 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(ACCESS_TOKEN_EXPIRY)
      .sign(ACCESS_TOKEN_SECRET);
    
    // Cache token for quick validation
    await cache.set(
      `access_token:${sessionId}`,
      { userId, valid: true },
      900 // 15 minutes
    );
    
    return token;
  }
  
  // Generate refresh token
  async generateRefreshToken(userId, sessionId) {
    const tokenId = crypto.randomBytes(16).toString('hex');
    
    const token = await new SignJWT({ 
      userId, 
      sessionId,
      tokenId,
      type: 'refresh' 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime(REFRESH_TOKEN_EXPIRY)
      .sign(REFRESH_TOKEN_SECRET);
    
    // Store refresh token in database
    await prisma.refreshToken.create({
      data: {
        id: tokenId,
        userId,
        sessionId,
        token,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
    });
    
    return token;
  }
  
  // Verify access token
  async verifyAccessToken(token) {
    try {
      const { payload } = await jwtVerify(token, ACCESS_TOKEN_SECRET);
      
      // Check cache for revocation
      const cached = await cache.get(`access_token:${payload.sessionId}`);
      if (cached && !cached.valid) {
        throw new Error('Token revoked');
      }
      
      return payload;
    } catch (error) {
      return null;
    }
  }
  
  // Verify refresh token
  async verifyRefreshToken(token) {
    try {
      const { payload } = await jwtVerify(token, REFRESH_TOKEN_SECRET);
      
      // Check if token exists in database
      const storedToken = await prisma.refreshToken.findUnique({
        where: { id: payload.tokenId }
      });
      
      if (!storedToken || storedToken.revoked) {
        throw new Error('Invalid refresh token');
      }
      
      if (new Date() > storedToken.expiresAt) {
        throw new Error('Refresh token expired');
      }
      
      return payload;
    } catch (error) {
      return null;
    }
  }
  
  // Refresh access token
  async refreshAccessToken(refreshToken) {
    const payload = await this.verifyRefreshToken(refreshToken);
    if (!payload) {
      throw new Error('Invalid refresh token');
    }
    
    // Generate new access token
    const newAccessToken = await this.generateAccessToken(
      payload.userId,
      payload.sessionId
    );
    
    // Update last used timestamp
    await prisma.refreshToken.update({
      where: { id: payload.tokenId },
      data: { lastUsed: new Date() }
    });
    
    return {
      accessToken: newAccessToken,
      userId: payload.userId,
      sessionId: payload.sessionId
    };
  }
  
  // Revoke tokens
  async revokeSession(sessionId) {
    // Revoke access token in cache
    await cache.set(
      `access_token:${sessionId}`,
      { valid: false },
      900
    );
    
    // Revoke refresh tokens in database
    await prisma.refreshToken.updateMany({
      where: { sessionId },
      data: { revoked: true }
    });
  }
  
  // Revoke all user tokens
  async revokeUserTokens(userId) {
    // Get all user sessions
    const sessions = await prisma.session.findMany({
      where: { userId },
      select: { id: true }
    });
    
    // Revoke all sessions
    for (const session of sessions) {
      await this.revokeSession(session.id);
    }
    
    // Mark all refresh tokens as revoked
    await prisma.refreshToken.updateMany({
      where: { userId },
      data: { revoked: true }
    });
  }
  
  // Clean expired tokens
  async cleanExpiredTokens() {
    const deleted = await prisma.refreshToken.deleteMany({
      where: {
        OR: [
          { expiresAt: { lt: new Date() } },
          { revoked: true, lastUsed: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } }
        ]
      }
    });
    
    return deleted.count;
  }
  
  // Generate token pair
  async generateTokenPair(userId, sessionId) {
    const [accessToken, refreshToken] = await Promise.all([
      this.generateAccessToken(userId, sessionId),
      this.generateRefreshToken(userId, sessionId)
    ]);
    
    return {
      accessToken,
      refreshToken,
      accessTokenExpiry: new Date(Date.now() + 15 * 60 * 1000),
      refreshTokenExpiry: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    };
  }
  
  // Rotate refresh token
  async rotateRefreshToken(oldRefreshToken) {
    const payload = await this.verifyRefreshToken(oldRefreshToken);
    if (!payload) {
      throw new Error('Invalid refresh token');
    }
    
    // Revoke old token
    await prisma.refreshToken.update({
      where: { id: payload.tokenId },
      data: { revoked: true }
    });
    
    // Generate new token pair
    return await this.generateTokenPair(payload.userId, payload.sessionId);
  }
}

// Create singleton instance
const tokenManager = new TokenManager();

export { tokenManager };

// Middleware for token validation
export function authMiddleware(options = {}) {
  const { requireRefresh = false } = options;
  
  return async (req, res, next) => {
    try {
      // Extract token from header or cookie
      const authHeader = req.headers.get('authorization');
      const token = authHeader?.startsWith('Bearer ') 
        ? authHeader.substring(7)
        : req.cookies?.['auth-token'];
      
      if (!token) {
        return res.status(401).json({ error: 'No token provided' });
      }
      
      // Verify token
      const payload = requireRefresh
        ? await tokenManager.verifyRefreshToken(token)
        : await tokenManager.verifyAccessToken(token);
      
      if (!payload) {
        return res.status(401).json({ error: 'Invalid token' });
      }
      
      // Attach user info to request
      req.user = {
        id: payload.userId,
        sessionId: payload.sessionId
      };
      
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
  };
}

// API endpoint helper for token refresh
export async function handleTokenRefresh(request) {
  try {
    const body = await request.json();
    const { refreshToken } = body;
    
    if (!refreshToken) {
      return { error: 'Refresh token required', status: 400 };
    }
    
    const result = await tokenManager.refreshAccessToken(refreshToken);
    return { 
      success: true, 
      data: result,
      status: 200 
    };
  } catch (error) {
    return { 
      error: error.message || 'Token refresh failed',
      status: 401 
    };
  }
}