import { NextRequest } from 'next/server';
import { POST as loginHandler } from '@/app/api/auth/login/route';
import { POST as logoutHandler } from '@/app/api/auth/logout/route';
import { GET as verifyHandler } from '@/app/api/auth/verify/route';
import { POST as refreshHandler } from '@/app/api/auth/refresh/route';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// Mock Prisma
jest.mock('@/lib/prisma', () => ({
  __esModule: true,
  default: {
    user: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    session: {
      create: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
    loginAttempt: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
    activityLog: {
      create: jest.fn(),
    },
    refreshToken: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      updateMany: jest.fn(),
    },
  },
}));

// Mock Redis cache
jest.mock('@/lib/cache/redis', () => ({
  cache: {
    set: jest.fn(),
    get: jest.fn(),
    del: jest.fn(),
    checkRateLimit: jest.fn().mockResolvedValue({
      allowed: true,
      limit: 100,
      remaining: 99,
      resetIn: 60,
    }),
  },
}));

describe('Authentication API Integration Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/auth/login', () => {
    it('should successfully login with valid credentials', async () => {
      const mockUser = {
        id: 'user-123',
        username: 'Niblah',
        email: 'admin@example.com',
        passwordHash: await bcrypt.hash('Jukovic91!', 10),
        role: 'ADMIN',
      };

      prisma.user.findUnique.mockResolvedValue(mockUser);
      prisma.loginAttempt.findMany.mockResolvedValue([]);
      prisma.loginAttempt.create.mockResolvedValue({});
      prisma.session.create.mockResolvedValue({
        id: 'session-123',
        token: 'jwt-token',
      });
      prisma.refreshToken.create.mockResolvedValue({
        id: 'refresh-123',
        token: 'refresh-token',
      });
      prisma.activityLog.create.mockResolvedValue({});

      const request = new NextRequest('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': '192.168.1.1',
          'user-agent': 'Mozilla/5.0',
        },
        body: JSON.stringify({
          username: 'Niblah',
          password: 'Jukovic91!',
        }),
      });

      const response = await loginHandler(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('Login successful');
      expect(data.redirect).toBe('/admin/dashboard');
      expect(data.user).toMatchObject({
        id: 'user-123',
        username: 'Niblah',
        email: 'admin@example.com',
        role: 'ADMIN',
      });
    });

    it('should fail with invalid credentials', async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      prisma.loginAttempt.findMany.mockResolvedValue([]);
      prisma.loginAttempt.create.mockResolvedValue({});
      prisma.activityLog.create.mockResolvedValue({});

      const request = new NextRequest('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': '192.168.1.1',
        },
        body: JSON.stringify({
          username: 'invaliduser',
          password: 'wrongpassword',
        }),
      });

      const response = await loginHandler(request);
      const data = await response.json();

      expect(response.status).toBe(401);
      expect(data.error).toBe('Invalid credentials');
      expect(data.remainingAttempts).toBeGreaterThanOrEqual(0);
    });

    it('should block after too many failed attempts', async () => {
      const failedAttempts = [
        { attemptedAt: new Date(Date.now() - 60000) },
        { attemptedAt: new Date(Date.now() - 120000) },
        { attemptedAt: new Date(Date.now() - 180000) },
      ];

      prisma.loginAttempt.findMany.mockResolvedValue(failedAttempts);

      const request = new NextRequest('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-forwarded-for': '192.168.1.1',
        },
        body: JSON.stringify({
          username: 'testuser',
          password: 'password',
        }),
      });

      const response = await loginHandler(request);
      const data = await response.json();

      expect(response.status).toBe(429);
      expect(data.error).toContain('Too many failed attempts');
      expect(data.blockedMinutes).toBeGreaterThan(0);
    });

    it('should return 400 for missing credentials', async () => {
      const request = new NextRequest('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const response = await loginHandler(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Username and password are required');
    });
  });

  describe('POST /api/auth/logout', () => {
    it('should successfully logout', async () => {
      prisma.session.delete.mockResolvedValue({});
      prisma.activityLog.create.mockResolvedValue({});

      const request = new NextRequest('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Cookie': 'auth-token=valid-token',
        },
      });

      const response = await logoutHandler(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('Logged out successfully');
    });
  });

  describe('GET /api/auth/verify', () => {
    it('should verify valid session', async () => {
      const mockSession = {
        id: 'session-123',
        userId: 'user-123',
        expiresAt: new Date(Date.now() + 3600000),
        user: {
          id: 'user-123',
          username: 'testuser',
          email: 'test@example.com',
          role: 'ADMIN',
        },
      };

      prisma.session.findUnique.mockResolvedValue(mockSession);

      const request = new NextRequest('http://localhost:3000/api/auth/verify', {
        method: 'GET',
        headers: {
          'Cookie': 'auth-token=valid-token',
        },
      });

      const response = await verifyHandler(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.authenticated).toBe(true);
      expect(data.user).toMatchObject({
        id: 'user-123',
        username: 'testuser',
        email: 'test@example.com',
        role: 'ADMIN',
      });
    });

    it('should return unauthenticated for missing token', async () => {
      const request = new NextRequest('http://localhost:3000/api/auth/verify', {
        method: 'GET',
      });

      const response = await verifyHandler(request);
      const data = await response.json();

      expect(response.status).toBe(401);
      expect(data.authenticated).toBe(false);
    });
  });

  describe('POST /api/auth/refresh', () => {
    it('should refresh access token with valid refresh token', async () => {
      const mockRefreshToken = {
        id: 'refresh-123',
        userId: 'user-123',
        sessionId: 'session-123',
        token: 'refresh-token',
        revoked: false,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      };

      prisma.refreshToken.findUnique.mockResolvedValue(mockRefreshToken);
      prisma.refreshToken.update.mockResolvedValue({
        ...mockRefreshToken,
        lastUsed: new Date(),
      });
      prisma.activityLog.create.mockResolvedValue({});

      const request = new NextRequest('http://localhost:3000/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: 'valid-refresh-token',
        }),
      });

      const response = await refreshHandler(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.accessToken).toBeTruthy();
      expect(data.expiresIn).toBe(900);
    });

    it('should fail with invalid refresh token', async () => {
      prisma.refreshToken.findUnique.mockResolvedValue(null);

      const request = new NextRequest('http://localhost:3000/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: 'invalid-refresh-token',
        }),
      });

      const response = await refreshHandler(request);
      const data = await response.json();

      expect(response.status).toBe(401);
      expect(data.error).toBeTruthy();
    });

    it('should fail with revoked refresh token', async () => {
      const mockRefreshToken = {
        id: 'refresh-123',
        userId: 'user-123',
        sessionId: 'session-123',
        token: 'refresh-token',
        revoked: true,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      };

      prisma.refreshToken.findUnique.mockResolvedValue(mockRefreshToken);

      const request = new NextRequest('http://localhost:3000/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: 'revoked-refresh-token',
        }),
      });

      const response = await refreshHandler(request);
      const data = await response.json();

      expect(response.status).toBe(401);
      expect(data.error).toBeTruthy();
    });

    it('should return 400 for missing refresh token', async () => {
      const request = new NextRequest('http://localhost:3000/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const response = await refreshHandler(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Refresh token required');
    });
  });
});