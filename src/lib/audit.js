import prisma from '@/lib/prisma';
import { notifyActivityLog } from '@/lib/socket/server';

const AUDIT_ACTIONS = {
  // Authentication
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_FAILED: 'LOGIN_FAILED',
  SESSION_EXPIRED: 'SESSION_EXPIRED',
  
  // Content Management
  CREATE_PAGE: 'CREATE_PAGE',
  UPDATE_PAGE: 'UPDATE_PAGE',
  DELETE_PAGE: 'DELETE_PAGE',
  PUBLISH_PAGE: 'PUBLISH_PAGE',
  
  // Articles
  CREATE_ARTICLE: 'CREATE_ARTICLE',
  UPDATE_ARTICLE: 'UPDATE_ARTICLE',
  DELETE_ARTICLE: 'DELETE_ARTICLE',
  GENERATE_ARTICLE: 'GENERATE_ARTICLE',
  PUBLISH_ARTICLE: 'PUBLISH_ARTICLE',
  
  // Settings
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  RESET_SETTINGS: 'RESET_SETTINGS',
  
  // System
  SYSTEM_ERROR: 'SYSTEM_ERROR',
  BACKUP_CREATED: 'BACKUP_CREATED',
  CLEANUP_PERFORMED: 'CLEANUP_PERFORMED',
  
  // Analytics
  EXPORT_ANALYTICS: 'EXPORT_ANALYTICS',
  GENERATE_REPORT: 'GENERATE_REPORT'
};

class AuditLogger {
  constructor() {
    this.queue = [];
    this.flushInterval = null;
  }
  
  // Start batch processing
  startBatchProcessing(intervalMs = 5000) {
    this.flushInterval = setInterval(() => {
      this.flush();
    }, intervalMs);
  }
  
  // Stop batch processing
  stopBatchProcessing() {
    if (this.flushInterval) {
      clearInterval(this.flushInterval);
      this.flushInterval = null;
    }
    this.flush(); // Flush remaining logs
  }
  
  // Log an audit event
  async log(action, options = {}) {
    const {
      userId = null,
      entity = null,
      entityId = null,
      metadata = {},
      ipAddress = null,
      immediate = false
    } = options;
    
    const logEntry = {
      action,
      entity,
      entityId,
      userId,
      metadata,
      ipAddress,
      createdAt: new Date()
    };
    
    if (immediate) {
      // Save immediately for critical actions
      await this.save([logEntry]);
    } else {
      // Queue for batch processing
      this.queue.push(logEntry);
      
      // Auto-flush if queue is large
      if (this.queue.length >= 10) {
        await this.flush();
      }
    }
    
    // Emit real-time notification for important actions
    if (this.isImportantAction(action)) {
      notifyActivityLog(logEntry);
    }
    
    return logEntry;
  }
  
  // Flush queued logs to database
  async flush() {
    if (this.queue.length === 0) return;
    
    const logsToSave = [...this.queue];
    this.queue = [];
    
    try {
      await this.save(logsToSave);
    } catch (error) {
      console.error('Failed to flush audit logs:', error);
      // Re-queue failed logs
      this.queue.unshift(...logsToSave);
    }
  }
  
  // Save logs to database
  async save(logs) {
    try {
      await prisma.activityLog.createMany({
        data: logs
      });
    } catch (error) {
      console.error('Failed to save audit logs:', error);
      throw error;
    }
  }
  
  // Check if action is important for real-time notifications
  isImportantAction(action) {
    const importantActions = [
      AUDIT_ACTIONS.LOGIN,
      AUDIT_ACTIONS.LOGIN_FAILED,
      AUDIT_ACTIONS.CREATE_PAGE,
      AUDIT_ACTIONS.DELETE_PAGE,
      AUDIT_ACTIONS.CREATE_ARTICLE,
      AUDIT_ACTIONS.DELETE_ARTICLE,
      AUDIT_ACTIONS.UPDATE_SETTINGS,
      AUDIT_ACTIONS.SYSTEM_ERROR
    ];
    
    return importantActions.includes(action);
  }
  
  // Query audit logs
  async query(filters = {}) {
    const {
      userId,
      action,
      entity,
      entityId,
      startDate,
      endDate,
      limit = 100,
      offset = 0
    } = filters;
    
    const where = {};
    
    if (userId) where.userId = userId;
    if (action) where.action = action;
    if (entity) where.entity = entity;
    if (entityId) where.entityId = entityId;
    
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = startDate;
      if (endDate) where.createdAt.lte = endDate;
    }
    
    const logs = await prisma.activityLog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });
    
    return logs;
  }
  
  // Get user activity summary
  async getUserActivity(userId, days = 30) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const activities = await prisma.activityLog.groupBy({
      by: ['action'],
      where: {
        userId,
        createdAt: { gte: startDate }
      },
      _count: true
    });
    
    return activities.map(a => ({
      action: a.action,
      count: a._count
    }));
  }
  
  // Get system activity summary
  async getSystemActivity(days = 7) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const [totalLogs, uniqueUsers, topActions] = await Promise.all([
      // Total logs
      prisma.activityLog.count({
        where: {
          createdAt: { gte: startDate }
        }
      }),
      
      // Unique users
      prisma.activityLog.groupBy({
        by: ['userId'],
        where: {
          createdAt: { gte: startDate },
          userId: { not: null }
        },
        _count: true
      }),
      
      // Top actions
      prisma.activityLog.groupBy({
        by: ['action'],
        where: {
          createdAt: { gte: startDate }
        },
        _count: true,
        orderBy: {
          _count: {
            action: 'desc'
          }
        },
        take: 10
      })
    ]);
    
    return {
      totalLogs,
      uniqueUsers: uniqueUsers.length,
      topActions: topActions.map(a => ({
        action: a.action,
        count: a._count
      }))
    };
  }
}

// Create singleton instance
const auditLogger = new AuditLogger();

// Start batch processing
if (typeof window === 'undefined') {
  // Only in server environment
  auditLogger.startBatchProcessing();
}

// Export logger instance and actions
export { auditLogger, AUDIT_ACTIONS };

// Helper functions for common audit logging
export async function auditLogin(userId, ipAddress, success = true) {
  return auditLogger.log(
    success ? AUDIT_ACTIONS.LOGIN : AUDIT_ACTIONS.LOGIN_FAILED,
    {
      userId,
      ipAddress,
      entity: 'auth',
      immediate: true
    }
  );
}

export async function auditLogout(userId, ipAddress) {
  return auditLogger.log(AUDIT_ACTIONS.LOGOUT, {
    userId,
    ipAddress,
    entity: 'auth',
    immediate: true
  });
}

export async function auditContentChange(action, userId, entityType, entityId, metadata = {}) {
  return auditLogger.log(action, {
    userId,
    entity: entityType,
    entityId,
    metadata,
    immediate: false
  });
}

export async function auditSettingsChange(userId, changes) {
  return auditLogger.log(AUDIT_ACTIONS.UPDATE_SETTINGS, {
    userId,
    entity: 'settings',
    metadata: { changes },
    immediate: true
  });
}

export async function auditSystemEvent(action, metadata = {}) {
  return auditLogger.log(action, {
    entity: 'system',
    metadata,
    immediate: true
  });
}