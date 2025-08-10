'use client';

import { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';

let socket = null;

export function useSocket() {
  const [connected, setConnected] = useState(false);
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    // Get auth token from cookies
    const getAuthToken = () => {
      const cookies = document.cookie.split('; ');
      const authCookie = cookies.find(c => c.startsWith('auth-token='));
      return authCookie ? authCookie.split('=')[1] : null;
    };
    
    const token = getAuthToken();
    if (!token) return;
    
    // Initialize socket connection
    socket = io(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000', {
      auth: { token },
      transports: ['websocket', 'polling']
    });
    
    socket.on('connect', () => {
      console.log('Socket connected');
      setConnected(true);
    });
    
    socket.on('disconnect', () => {
      console.log('Socket disconnected');
      setConnected(false);
    });
    
    // Listen for notifications
    socket.on('notification', (notification) => {
      setNotifications(prev => [...prev, notification]);
    });
    
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);
  
  const emit = useCallback((event, data) => {
    if (socket && connected) {
      socket.emit(event, data);
    }
  }, [connected]);
  
  const on = useCallback((event, handler) => {
    if (socket) {
      socket.on(event, handler);
    }
  }, []);
  
  const off = useCallback((event, handler) => {
    if (socket) {
      socket.off(event, handler);
    }
  }, []);
  
  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);
  
  return {
    connected,
    notifications,
    emit,
    on,
    off,
    clearNotifications
  };
}

// Hook for real-time dashboard updates
export function useDashboardSocket() {
  const { on, off } = useSocket();
  const [updates, setUpdates] = useState([]);
  
  useEffect(() => {
    const handleDashboardUpdate = (data) => {
      setUpdates(prev => [...prev, data]);
    };
    
    const handleActivityUpdate = (activity) => {
      setUpdates(prev => [...prev, {
        type: 'activity',
        data: activity
      }]);
    };
    
    const handleAnalyticsUpdate = (analytics) => {
      setUpdates(prev => [...prev, {
        type: 'analytics',
        data: analytics
      }]);
    };
    
    on('dashboard:update', handleDashboardUpdate);
    on('activity:new', handleActivityUpdate);
    on('analytics:realtime', handleAnalyticsUpdate);
    
    return () => {
      off('dashboard:update', handleDashboardUpdate);
      off('activity:new', handleActivityUpdate);
      off('analytics:realtime', handleAnalyticsUpdate);
    };
  }, [on, off]);
  
  return { updates };
}

// Hook for article generation status
export function useArticleSocket() {
  const { on, off } = useSocket();
  const [articleStatus, setArticleStatus] = useState({});
  
  useEffect(() => {
    const handleArticleStatus = (data) => {
      setArticleStatus(prev => ({
        ...prev,
        [data.articleId]: data
      }));
    };
    
    const handleArticleGenerated = (data) => {
      setArticleStatus(prev => ({
        ...prev,
        [data.articleId]: {
          status: 'completed',
          message: data.message
        }
      }));
    };
    
    on('article:status', handleArticleStatus);
    on('article:generated', handleArticleGenerated);
    
    return () => {
      off('article:status', handleArticleStatus);
      off('article:generated', handleArticleGenerated);
    };
  }, [on, off]);
  
  return { articleStatus };
}

// Hook for system alerts
export function useSystemAlerts() {
  const { on, off } = useSocket();
  const [alerts, setAlerts] = useState([]);
  
  useEffect(() => {
    const handleSystemAlert = (alert) => {
      setAlerts(prev => [...prev, {
        ...alert,
        id: Date.now(),
        timestamp: new Date()
      }]);
    };
    
    on('system:alert', handleSystemAlert);
    
    return () => {
      off('system:alert', handleSystemAlert);
    };
  }, [on, off]);
  
  const dismissAlert = useCallback((alertId) => {
    setAlerts(prev => prev.filter(a => a.id !== alertId));
  }, []);
  
  return { alerts, dismissAlert };
}