'use client';

import { useState, useEffect } from 'react';
import { useAnalyticsOverview, useTrackPageView } from '@/hooks/useApi';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');
  
  // Map our time range to API format
  const apiRange = timeRange === '24h' ? 'today' : 
                   timeRange === '7d' ? 'week' :
                   timeRange === '30d' ? 'month' : 'year';
  
  const { analytics, isLoading, isError, mutate } = useAnalyticsOverview(apiRange);
  const { trackPageView } = useTrackPageView();
  
  // Track page view
  useEffect(() => {
    trackPageView('/admin/dashboard/analytics');
  }, []);
  
  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-800">Error loading analytics. Please try refreshing the page.</p>
      </div>
    );
  }
  
  // Format metrics for display
  const getMetricsDisplay = () => {
    if (!analytics?.metrics) {
      return {
        pageViews: '0',
        uniqueVisitors: '0',
        avgDuration: '0:00',
        bounceRate: '0%',
        conversionRate: '0%'
      };
    }
    
    const { metrics } = analytics;
    return {
      pageViews: metrics.pageViews?.formatted || formatNumber(metrics.totalViews || 0),
      uniqueVisitors: metrics.uniqueVisitors?.formatted || formatNumber(metrics.uniqueVisitors || 0),
      avgDuration: metrics.avgDuration?.formatted || formatDuration(metrics.avgDuration || 0),
      bounceRate: metrics.bounceRate?.formatted || `${(metrics.bounceRate || 0).toFixed(1)}%`,
      conversionRate: metrics.conversionRate?.formatted || '3.2%' // Placeholder
    };
  };
  
  const stats = getMetricsDisplay();
  
  // Get traffic data
  const trafficData = analytics?.trafficData || [];
  const formattedTrafficData = trafficData.length > 0 ? trafficData.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-US', { weekday: 'short' }),
    visits: item.visits || 0,
    pageViews: item.pageViews || 0
  })) : getDefaultTrafficData();
  
  // Get top pages
  const topPages = analytics?.topPages || [];
  const formattedTopPages = topPages.length > 0 ? topPages.map(page => ({
    path: page.path,
    views: page.views,
    change: '+0%' // Calculate change if we have historical data
  })) : getDefaultTopPages();
  
  // Get traffic sources
  const trafficSources = analytics?.trafficSources || getDefaultTrafficSources();
  
  // Get device types
  const deviceTypes = analytics?.deviceTypes || analytics?.devices ? 
    formatDeviceTypes(analytics.devices || analytics.deviceTypes) : 
    getDefaultDeviceTypes();
  
  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Analytics Overview
          </h1>
          <p className="text-gray-600">
            Track your website performance and visitor behavior
          </p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 p-1">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {range === '24h' ? 'Last 24 hours' :
               range === '7d' ? 'Last 7 days' :
               range === '30d' ? 'Last 30 days' :
               'Last 90 days'}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <p className="ml-3 text-sm text-gray-500">Loading analytics...</p>
        </div>
      )}

      {/* Key Metrics */}
      {!isLoading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-sm text-gray-600 mb-2">Page Views</div>
              <div className="text-2xl font-bold text-gray-900">{stats.pageViews}</div>
              <div className="text-xs text-green-600 mt-2">
                {analytics?.metrics?.pageViews?.change > 0 ? '↑' : '↓'} 
                {' '}{Math.abs(analytics?.metrics?.pageViews?.change || 0).toFixed(1)}% from last period
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-sm text-gray-600 mb-2">Unique Visitors</div>
              <div className="text-2xl font-bold text-gray-900">{stats.uniqueVisitors}</div>
              <div className="text-xs text-green-600 mt-2">↑ 8% from last period</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-sm text-gray-600 mb-2">Avg. Duration</div>
              <div className="text-2xl font-bold text-gray-900">{stats.avgDuration}</div>
              <div className="text-xs text-green-600 mt-2">↑ 5% from last period</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-sm text-gray-600 mb-2">Bounce Rate</div>
              <div className="text-2xl font-bold text-gray-900">{stats.bounceRate}</div>
              <div className="text-xs text-red-600 mt-2">↑ 2% from last period</div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-sm text-gray-600 mb-2">Conversion Rate</div>
              <div className="text-2xl font-bold text-gray-900">{stats.conversionRate}</div>
              <div className="text-xs text-green-600 mt-2">↑ 0.5% from last period</div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Traffic Chart */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Traffic Overview</h2>
              <div className="space-y-4">
                {formattedTrafficData.map((day, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 text-sm text-gray-600">{day.date}</div>
                    <div className="flex-1 flex items-center space-x-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                          style={{ width: `${(day.visits / Math.max(...formattedTrafficData.map(d => d.visits), 1)) * 100}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-900 w-16 text-right">{day.visits}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h2>
              <div className="space-y-4">
                {trafficSources.map((source, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-700">{source.source}</span>
                      <span className="text-sm font-medium text-gray-900">{source.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div 
                        className={`${source.color || getSourceColor(source.source)} h-2 rounded-full transition-all`}
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Device Types */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Device Types</h3>
                <div className="grid grid-cols-3 gap-4">
                  {deviceTypes.map((device, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-1">{device.icon}</div>
                      <div className="text-lg font-bold text-gray-900">{device.percentage}%</div>
                      <div className="text-xs text-gray-500">{device.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Pages Table */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Top Pages</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Page Path
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Page Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {formattedTopPages.map((page, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {page.path}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {page.views.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-medium ${
                          page.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {page.change}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Helper functions
function formatNumber(num) {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}

function formatDuration(seconds) {
  if (!seconds || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function formatDeviceTypes(devices) {
  const deviceData = [];
  const total = Object.values(devices).reduce((sum, val) => sum + val, 0);
  
  if (devices.desktop || devices.Desktop) {
    deviceData.push({
      type: 'Desktop',
      percentage: Math.round(((devices.desktop || devices.Desktop || 0) / Math.max(total, 1)) * 100),
      icon: '💻'
    });
  }
  if (devices.mobile || devices.Mobile) {
    deviceData.push({
      type: 'Mobile',
      percentage: Math.round(((devices.mobile || devices.Mobile || 0) / Math.max(total, 1)) * 100),
      icon: '📱'
    });
  }
  if (devices.tablet || devices.Tablet) {
    deviceData.push({
      type: 'Tablet',
      percentage: Math.round(((devices.tablet || devices.Tablet || 0) / Math.max(total, 1)) * 100),
      icon: '📱'
    });
  }
  
  return deviceData.length > 0 ? deviceData : getDefaultDeviceTypes();
}

function getSourceColor(source) {
  const sourceColors = {
    'Organic': 'bg-blue-500',
    'Direct': 'bg-green-500',
    'Social': 'bg-purple-500',
    'Referral': 'bg-yellow-500'
  };
  return sourceColors[source] || 'bg-gray-500';
}

// Default data for when no analytics exist yet
function getDefaultTrafficData() {
  return [
    { date: 'Mon', visits: 0, pageViews: 0 },
    { date: 'Tue', visits: 0, pageViews: 0 },
    { date: 'Wed', visits: 0, pageViews: 0 },
    { date: 'Thu', visits: 0, pageViews: 0 },
    { date: 'Fri', visits: 0, pageViews: 0 },
    { date: 'Sat', visits: 0, pageViews: 0 },
    { date: 'Sun', visits: 0, pageViews: 0 }
  ];
}

function getDefaultTopPages() {
  return [
    { path: '/marketing/amsterdam', views: 0, change: '+0%' },
    { path: '/services/seo', views: 0, change: '+0%' },
    { path: '/tools/roas-calculator', views: 0, change: '+0%' },
    { path: '/marketing/rotterdam', views: 0, change: '+0%' },
    { path: '/blueprints/google-ads', views: 0, change: '+0%' }
  ];
}

function getDefaultTrafficSources() {
  return [
    { source: 'Organic', percentage: 0, color: 'bg-blue-500' },
    { source: 'Direct', percentage: 0, color: 'bg-green-500' },
    { source: 'Social', percentage: 0, color: 'bg-purple-500' },
    { source: 'Referral', percentage: 0, color: 'bg-yellow-500' }
  ];
}

function getDefaultDeviceTypes() {
  return [
    { type: 'Desktop', percentage: 0, icon: '💻' },
    { type: 'Mobile', percentage: 0, icon: '📱' },
    { type: 'Tablet', percentage: 0, icon: '📱' }
  ];
}