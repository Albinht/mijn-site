'use client';

import { useDashboardStats, useRecentActivity } from '@/hooks/useApi';

export default function DashboardPage() {
  const { stats, isLoading: statsLoading, isError: statsError } = useDashboardStats();
  const { activities, isLoading: activitiesLoading, isError: activitiesError } = useRecentActivity(5);

  if (statsLoading || activitiesLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-sm text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (statsError || activitiesError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-800">Error loading dashboard data. Please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          title="Total Articles"
          value={stats?.content?.articles?.total || 0}
          subtitle={`${stats?.content?.articles?.published || 0} published`}
          icon="📝"
          trend={stats?.content?.articles?.thisWeek || 0}
        />
        <StatCard
          title="Total Pages"
          value={stats?.content?.pages?.total || 0}
          subtitle={`${stats?.content?.pages?.published || 0} published`}
          icon="📄"
          trend={stats?.content?.pages?.thisWeek || 0}
        />
        <StatCard
          title="Total Views"
          value={stats?.analytics?.totalViews || 0}
          subtitle={`${stats?.analytics?.todayViews || 0} today`}
          icon="👁️"
        />
        <StatCard
          title="Active Users"
          value={stats?.users?.active || 0}
          subtitle={`of ${stats?.users?.total || 0} total`}
          icon="👥"
        />
      </div>

      {/* Content Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {activities && activities.length > 0 ? (
              activities.map((activity) => (
                <div key={activity.id} className="px-4 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-100">
                        <span className="text-xs">
                          {getActivityIcon(activity.action)}
                        </span>
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatRelativeTime(activity.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 sm:px-6 py-6 sm:py-8 text-center text-sm text-gray-500">
                No recent activity
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-4 sm:p-6 space-y-3">
            <QuickActionButton
              href="/admin/dashboard/articles"
              icon="📝"
              label="Create Article"
              description="Generate new content"
            />
            <QuickActionButton
              href="/admin/dashboard/content"
              icon="📄"
              label="Manage Pages"
              description="Edit site content"
            />
            <QuickActionButton
              href="/admin/dashboard/analytics"
              icon="📊"
              label="View Analytics"
              description="Check site performance"
            />
            <QuickActionButton
              href="/admin/dashboard/settings"
              icon="⚙️"
              label="Settings"
              description="Configure system"
            />
          </div>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">Performance Overview</h3>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <p className="text-sm text-gray-500">Daily Average Views</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {stats?.analytics?.averageDaily || 0}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Content This Week</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {(stats?.content?.articles?.thisWeek || 0) + (stats?.content?.pages?.thisWeek || 0)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Content</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {(stats?.content?.articles?.total || 0) + (stats?.content?.pages?.total || 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon, trend }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-xs sm:text-sm text-gray-500">{title}</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 sm:mt-2">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{subtitle}</p>
          {trend !== undefined && trend > 0 && (
            <p className="text-xs text-green-600 mt-1 sm:mt-2">+{trend} this week</p>
          )}
        </div>
        <div className="text-2xl sm:text-3xl ml-3">{icon}</div>
      </div>
    </div>
  );
}

function QuickActionButton({ href, icon, label, description }) {
  return (
    <a
      href={href}
      className="flex items-center p-3 sm:p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
    >
      <span className="text-xl sm:text-2xl mr-3">{icon}</span>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </a>
  );
}

function getActivityIcon(action) {
  const icons = {
    'LOGIN': '🔐',
    'LOGIN_SUCCESS': '✅',
    'LOGOUT': '🚪',
    'CREATE_PAGE': '📄',
    'UPDATE_PAGE': '✏️',
    'DELETE_PAGE': '🗑️',
    'CREATE_ARTICLE': '📝',
    'GENERATE_ARTICLE': '🤖',
    'UPDATE_ARTICLE': '✏️',
    'DELETE_ARTICLE': '🗑️',
    'UPDATE_SETTINGS': '⚙️'
  };
  return icons[action] || '📌';
}

function formatRelativeTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  if (seconds < 60) return 'Just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
  
  return date.toLocaleDateString();
}