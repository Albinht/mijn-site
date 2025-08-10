import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import prisma from './prisma';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
);

export async function createUser(username, email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  
  return prisma.user.create({
    data: {
      username,
      email,
      passwordHash,
      role: 'ADMIN'
    }
  });
}

export async function verifyCredentials(username, password) {
  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });
    
    if (!user) {
      return null;
    }
    
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    
    if (!passwordMatch) {
      return null;
    }
    
    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    });
    
    return user;
  } catch (error) {
    console.error('Error verifying credentials:', error);
    return null;
  }
}

export async function createSession(userId, ipAddress = null, userAgent = null) {
  const token = await createToken({ 
    userId,
    isAdmin: true,
    loginTime: Date.now()
  });
  
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24); // 24 hours from now
  
  await prisma.session.create({
    data: {
      token,
      userId,
      expiresAt,
      ipAddress,
      userAgent
    }
  });
  
  return token;
}

export async function verifySession(tokenOrRequest) {
  try {
    // Check if it's a request object or a token string
    let token;
    if (typeof tokenOrRequest === 'string') {
      token = tokenOrRequest;
    } else {
      // It's a request object, extract token from cookies
      token = getTokenFromCookies(tokenOrRequest);
    }
    
    if (!token) {
      return null;
    }
    
    // First verify the JWT
    const payload = await verifyToken(token);
    if (!payload) {
      return null;
    }
    
    // Then check if session exists in database
    const session = await prisma.session.findUnique({
      where: { token },
      include: { user: true }
    });
    
    if (!session) {
      return null;
    }
    
    // Check if session is expired
    if (new Date() > session.expiresAt) {
      await prisma.session.delete({
        where: { id: session.id }
      });
      return null;
    }
    
    return session;
  } catch (error) {
    console.error('Error verifying session:', error);
    return null;
  }
}

export async function deleteSession(token) {
  try {
    await prisma.session.delete({
      where: { token }
    });
    return true;
  } catch (error) {
    console.error('Error deleting session:', error);
    return false;
  }
}

export async function createToken(payload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret);
  
  return token;
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export function getTokenFromCookies(request) {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) return null;
  
  const cookies = Object.fromEntries(
    cookieHeader.split('; ').map(cookie => cookie.split('='))
  );
  
  return cookies['auth-token'] || null;
}

// Login attempt tracking
export async function recordLoginAttempt(ipAddress, username, success) {
  try {
    await prisma.loginAttempt.create({
      data: {
        ipAddress,
        username,
        success
      }
    });
  } catch (error) {
    console.error('Error recording login attempt:', error);
  }
}

export async function getRecentFailedAttempts(ipAddress, minutes = 15) {
  const since = new Date();
  since.setMinutes(since.getMinutes() - minutes);
  
  try {
    const attempts = await prisma.loginAttempt.findMany({
      where: {
        ipAddress,
        success: false,
        attemptedAt: {
          gte: since
        }
      },
      orderBy: {
        attemptedAt: 'desc'
      }
    });
    
    return attempts;
  } catch (error) {
    console.error('Error getting failed attempts:', error);
    return [];
  }
}

// Activity logging
export async function logActivity(action, entity, entityId = null, userId = null, metadata = null, ipAddress = null) {
  try {
    await prisma.activityLog.create({
      data: {
        action,
        entity,
        entityId,
        userId,
        metadata,
        ipAddress
      }
    });
  } catch (error) {
    console.error('Error logging activity:', error);
  }
}