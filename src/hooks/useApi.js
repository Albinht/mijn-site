'use client';

import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

// Helper function to determine setting category
function determineCategory(key) {
  const categories = {
    siteName: 'general',
    siteUrl: 'general',
    adminEmail: 'general',
    timezone: 'general',
    language: 'general',
    maintenanceMode: 'security',
    debugMode: 'security',
    maxLoginAttempts: 'security',
    sessionTimeout: 'security',
    emailNotifications: 'notifications',
    weeklyReports: 'notifications',
    securityAlerts: 'notifications',
    apiKey: 'api',
    webhookUrl: 'api',
    cacheEnabled: 'advanced',
    compressionEnabled: 'advanced'
  };
  return categories[key] || 'general';
}

// Default fetcher for SWR
const fetcher = async (url) => {
  const res = await fetch(url, {
    credentials: 'include' // Include cookies for authentication
  });
  
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  
  return res.json();
};

// POST/PUT/DELETE fetcher
const mutationFetcher = async (url, { arg }) => {
  const { method = 'POST', body, ...options } = arg;
  
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined,
    ...options
  });
  
  if (!res.ok) {
    const error = new Error('An error occurred while mutating the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  
  return res.json();
};

// Dashboard stats hook
export function useDashboardStats() {
  const { data, error, isLoading, mutate } = useSWR('/api/dashboard/stats', fetcher, {
    refreshInterval: 30000 // Refresh every 30 seconds
  });
  
  return {
    stats: data?.data,
    isLoading,
    isError: error,
    mutate
  };
}

// Articles hooks
export function useArticles(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = `/api/articles${queryString ? `?${queryString}` : ''}`;
  
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  
  return {
    articles: data?.data || [],
    meta: data?.meta,
    isLoading,
    isError: error,
    mutate
  };
}

export function useArticle(id) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `/api/articles/${id}` : null,
    fetcher
  );
  
  return {
    article: data?.data,
    isLoading,
    isError: error,
    mutate
  };
}

export function useGenerateArticle() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/articles/generate',
    mutationFetcher
  );
  
  return {
    generateArticle: (data) => {
      // Support both old format (string) and new format (object)
      const body = typeof data === 'string' 
        ? { topic: data }
        : data;
      return trigger({ body });
    },
    isGenerating: isMutating
  };
}

// Content/Pages hooks
export function useContent(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = `/api/content${queryString ? `?${queryString}` : ''}`;
  
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  
  return {
    pages: data?.data || [],
    meta: data?.meta,
    isLoading,
    isError: error,
    mutate
  };
}

export function usePage(id) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `/api/content/${id}` : null,
    fetcher
  );
  
  return {
    page: data?.data,
    isLoading,
    isError: error,
    mutate
  };
}

export function useCreateContent() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/content',
    mutationFetcher
  );
  
  return {
    createContent: (data) => trigger({ body: data }),
    isCreating: isMutating
  };
}

export function useUpdateContent(id) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/content/${id}`,
    mutationFetcher
  );
  
  return {
    updateContent: (data) => trigger({ method: 'PUT', body: data }),
    isUpdating: isMutating
  };
}

export function useDeleteContent(id) {
  const { trigger, isMutating } = useSWRMutation(
    `/api/content/${id}`,
    mutationFetcher
  );
  
  return {
    deleteContent: () => trigger({ method: 'DELETE' }),
    isDeleting: isMutating
  };
}

// Analytics hooks
export function useAnalyticsOverview(range = 'week') {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/analytics/overview?range=${range}`,
    fetcher,
    {
      refreshInterval: 60000 // Refresh every minute
    }
  );
  
  return {
    analytics: data?.data,
    isLoading,
    isError: error,
    mutate
  };
}

export function usePageAnalytics(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = `/api/analytics/pages${queryString ? `?${queryString}` : ''}`;
  
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  
  return {
    pageAnalytics: data?.data,
    isLoading,
    isError: error,
    mutate
  };
}

export function useTrafficSources(range = 'week') {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/analytics/sources?range=${range}`,
    fetcher,
    {
      refreshInterval: 60000
    }
  );
  
  return {
    sources: data?.data,
    isLoading,
    isError: error,
    mutate
  };
}

// Settings hooks
export function useSettings(category = null) {
  const url = category ? `/api/settings/${category}` : '/api/settings';
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  
  return {
    settings: data?.data?.settings || {},
    isLoading,
    isError: error,
    mutate
  };
}

export function useUpdateSettings() {
  const { trigger, isMutating } = useSWRMutation(
    '/api/settings',
    mutationFetcher
  );
  
  return {
    updateSettings: (settings) => {
      // Convert settings object to array format expected by API
      const settingsArray = Object.entries(settings).map(([key, value]) => ({
        key,
        value: value, // Keep original value type (will be stored as JSON)
        category: determineCategory(key)
      }));
      return trigger({ method: 'PUT', body: { settings: settingsArray } });
    },
    isUpdating: isMutating
  };
}

// Activity logs hooks
export function useRecentActivity(limit = 10) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/activity/recent?limit=${limit}`,
    fetcher,
    {
      refreshInterval: 10000 // Refresh every 10 seconds
    }
  );
  
  return {
    activities: data?.data || [],
    isLoading,
    isError: error,
    mutate
  };
}

export function useActivityLogs(params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const url = `/api/activity${queryString ? `?${queryString}` : ''}`;
  
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  
  return {
    activities: data?.data || [],
    meta: data?.meta,
    isLoading,
    isError: error,
    mutate
  };
}

// Track analytics
export function useTrackPageView() {
  const { trigger } = useSWRMutation(
    '/api/analytics/track',
    mutationFetcher
  );
  
  return {
    trackPageView: (pagePath) => trigger({ body: { pagePath } })
  };
}