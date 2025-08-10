import { Server } from 'socket.io';
import { verifyToken } from '@/lib/auth-db';

let io = null;

export function initSocketServer(httpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      credentials: true
    }
  });
  
  // Authentication middleware
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error('Authentication required'));
      }
      
      const payload = await verifyToken(token);
      if (!payload) {
        return next(new Error('Invalid token'));
      }
      
      socket.userId = payload.userId;
      next();
    } catch (error) {
      next(new Error('Authentication failed'));
    }
  });
  
  // Connection handler
  io.on('connection', (socket) => {
    console.log(`User ${socket.userId} connected`);
    
    // Join user to their personal room
    socket.join(`user:${socket.userId}`);
    
    // Join admin room if user is admin
    socket.join('admin:dashboard');
    
    // Handle real-time events
    socket.on('article:generate', async (data) => {
      // Notify about article generation progress
      socket.emit('article:status', {
        status: 'processing',
        message: 'Article generation started'
      });
    });
    
    socket.on('analytics:track', async (data) => {
      // Broadcast analytics update to admin dashboard
      io.to('admin:dashboard').emit('analytics:update', data);
    });
    
    socket.on('disconnect', () => {
      console.log(`User ${socket.userId} disconnected`);
    });
  });
  
  return io;
}

// Emit events to specific users or rooms
export function emitToUser(userId, event, data) {
  if (io) {
    io.to(`user:${userId}`).emit(event, data);
  }
}

export function emitToAdmins(event, data) {
  if (io) {
    io.to('admin:dashboard').emit(event, data);
  }
}

export function emitToAll(event, data) {
  if (io) {
    io.emit(event, data);
  }
}

// Real-time notification functions
export function notifyArticleGenerated(articleId, userId) {
  emitToUser(userId, 'article:generated', {
    articleId,
    message: 'Your article has been generated successfully!'
  });
  
  emitToAdmins('dashboard:update', {
    type: 'article',
    action: 'generated',
    articleId
  });
}

export function notifyActivityLog(activity) {
  emitToAdmins('activity:new', activity);
}

export function notifyAnalyticsUpdate(analytics) {
  emitToAdmins('analytics:realtime', analytics);
}

export function notifySystemAlert(alert) {
  emitToAdmins('system:alert', alert);
}

export { io };