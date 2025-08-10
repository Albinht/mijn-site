import {
  verifyCredentials,
  createSession,
  verifySession,
  recordLoginAttempt,
  getRecentFailedAttempts,
  logActivity,
} from '@/lib/auth-db';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';

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
      deleteMany: jest.fn(),
    },
    loginAttempt: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
    activityLog: {
      create: jest.fn(),
    },
  },
}));

// Mock bcrypt
jest.mock('bcryptjs', () => ({
  compare: jest.fn(),
}));

describe('Authentication Database Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('verifyCredentials', () => {
    it('should verify valid credentials', async () => {
      const mockUser = {
        id: 'user-123',
        username: 'testuser',
        passwordHash: 'hashed-password',
        email: 'test@example.com',
        role: 'ADMIN',
      };

      prisma.user.findUnique.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);

      const result = await verifyCredentials('testuser', 'password123');

      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { username: 'testuser' },
      });
      expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashed-password');
      expect(result).toEqual(mockUser);
    });

    it('should return null for invalid username', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      const result = await verifyCredentials('invaliduser', 'password123');

      expect(result).toBeNull();
      expect(bcrypt.compare).not.toHaveBeenCalled();
    });

    it('should return null for invalid password', async () => {
      const mockUser = {
        id: 'user-123',
        username: 'testuser',
        passwordHash: 'hashed-password',
      };

      prisma.user.findUnique.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(false);

      const result = await verifyCredentials('testuser', 'wrongpassword');

      expect(result).toBeNull();
    });

    it('should update lastLogin on successful verification', async () => {
      const mockUser = {
        id: 'user-123',
        username: 'testuser',
        passwordHash: 'hashed-password',
      };

      prisma.user.findUnique.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      prisma.user.update.mockResolvedValue({ ...mockUser, lastLogin: new Date() });

      await verifyCredentials('testuser', 'password123');

      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: 'user-123' },
        data: { lastLogin: expect.any(Date) },
      });
    });
  });

  describe('createSession', () => {
    it('should create a new session', async () => {
      const mockSession = {
        id: 'session-123',
        token: 'jwt-token',
        userId: 'user-123',
        expiresAt: new Date(Date.now() + 86400000),
      };

      prisma.session.create.mockResolvedValue(mockSession);

      const result = await createSession('user-123', '192.168.1.1', 'Mozilla/5.0');

      expect(prisma.session.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          userId: 'user-123',
          ipAddress: '192.168.1.1',
          userAgent: 'Mozilla/5.0',
          expiresAt: expect.any(Date),
        }),
      });

      expect(result).toBeTruthy();
    });

    it('should handle session creation failure', async () => {
      prisma.session.create.mockRejectedValue(new Error('Database error'));

      await expect(
        createSession('user-123', '192.168.1.1', 'Mozilla/5.0')
      ).rejects.toThrow('Database error');
    });
  });

  describe('verifySession', () => {
    it('should verify a valid session', async () => {
      const mockSession = {
        id: 'session-123',
        token: 'jwt-token',
        userId: 'user-123',
        expiresAt: new Date(Date.now() + 3600000),
        user: {
          id: 'user-123',
          username: 'testuser',
          email: 'test@example.com',
          role: 'ADMIN',
        },
      };

      // Mock JWT verification
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const token = await new SignJWT({ userId: 'user-123', sessionId: 'session-123' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secret);

      prisma.session.findUnique.mockResolvedValue(mockSession);

      const result = await verifySession(token);

      expect(result).toEqual(mockSession.user);
    });

    it('should return null for expired session', async () => {
      const mockSession = {
        id: 'session-123',
        token: 'jwt-token',
        userId: 'user-123',
        expiresAt: new Date(Date.now() - 3600000), // Expired
      };

      prisma.session.findUnique.mockResolvedValue(mockSession);

      const result = await verifySession('jwt-token');

      expect(result).toBeNull();
    });

    it('should return null for invalid token', async () => {
      const result = await verifySession('invalid-token');

      expect(result).toBeNull();
    });
  });

  describe('recordLoginAttempt', () => {
    it('should record a successful login attempt', async () => {
      const mockAttempt = {
        id: 'attempt-123',
        ipAddress: '192.168.1.1',
        username: 'testuser',
        success: true,
        attemptedAt: new Date(),
      };

      prisma.loginAttempt.create.mockResolvedValue(mockAttempt);

      await recordLoginAttempt('192.168.1.1', 'testuser', true);

      expect(prisma.loginAttempt.create).toHaveBeenCalledWith({
        data: {
          ipAddress: '192.168.1.1',
          username: 'testuser',
          success: true,
        },
      });
    });

    it('should record a failed login attempt', async () => {
      const mockAttempt = {
        id: 'attempt-123',
        ipAddress: '192.168.1.1',
        username: 'testuser',
        success: false,
        attemptedAt: new Date(),
      };

      prisma.loginAttempt.create.mockResolvedValue(mockAttempt);

      await recordLoginAttempt('192.168.1.1', 'testuser', false);

      expect(prisma.loginAttempt.create).toHaveBeenCalledWith({
        data: {
          ipAddress: '192.168.1.1',
          username: 'testuser',
          success: false,
        },
      });
    });
  });

  describe('getRecentFailedAttempts', () => {
    it('should return recent failed attempts', async () => {
      const mockAttempts = [
        {
          id: 'attempt-1',
          ipAddress: '192.168.1.1',
          success: false,
          attemptedAt: new Date(Date.now() - 60000),
        },
        {
          id: 'attempt-2',
          ipAddress: '192.168.1.1',
          success: false,
          attemptedAt: new Date(Date.now() - 120000),
        },
      ];

      prisma.loginAttempt.findMany.mockResolvedValue(mockAttempts);

      const result = await getRecentFailedAttempts('192.168.1.1', 15);

      expect(prisma.loginAttempt.findMany).toHaveBeenCalledWith({
        where: {
          ipAddress: '192.168.1.1',
          success: false,
          attemptedAt: {
            gte: expect.any(Date),
          },
        },
        orderBy: {
          attemptedAt: 'desc',
        },
      });

      expect(result).toEqual(mockAttempts);
    });

    it('should return empty array when no failed attempts', async () => {
      prisma.loginAttempt.findMany.mockResolvedValue([]);

      const result = await getRecentFailedAttempts('192.168.1.1', 15);

      expect(result).toEqual([]);
    });
  });

  describe('logActivity', () => {
    it('should log an activity', async () => {
      const mockLog = {
        id: 'log-123',
        action: 'LOGIN_SUCCESS',
        entity: 'AUTH',
        entityId: 'user-123',
        userId: 'user-123',
        metadata: { username: 'testuser' },
        ipAddress: '192.168.1.1',
        createdAt: new Date(),
      };

      prisma.activityLog.create.mockResolvedValue(mockLog);

      await logActivity(
        'LOGIN_SUCCESS',
        'AUTH',
        'user-123',
        'user-123',
        { username: 'testuser' },
        '192.168.1.1'
      );

      expect(prisma.activityLog.create).toHaveBeenCalledWith({
        data: {
          action: 'LOGIN_SUCCESS',
          entity: 'AUTH',
          entityId: 'user-123',
          userId: 'user-123',
          metadata: { username: 'testuser' },
          ipAddress: '192.168.1.1',
        },
      });
    });

    it('should handle optional parameters', async () => {
      await logActivity('LOGOUT', 'AUTH');

      expect(prisma.activityLog.create).toHaveBeenCalledWith({
        data: {
          action: 'LOGOUT',
          entity: 'AUTH',
          entityId: null,
          userId: null,
          metadata: null,
          ipAddress: null,
        },
      });
    });
  });
});