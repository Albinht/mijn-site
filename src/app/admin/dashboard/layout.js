'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import SwrProvider from '@/components/providers/SwrProvider';
import { AuthProvider, useAuth } from '@/components/providers/AuthProvider';

function DashboardContent({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth();

  // Remove the redirect loop - middleware handles this
  // The middleware.js already protects these routes

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
      setIsLoggingOut(false);
    }
  };

  // Don't block rendering - the middleware handles auth
  // This prevents the infinite loop

  const navItems = [
    { href: '/admin/dashboard', label: 'Overview', icon: '📊' },
    { href: '/admin/dashboard/articles', label: 'Articles', icon: '📝' },
    { href: '/admin/dashboard/content', label: 'Content', icon: '📄' },
    { href: '/admin/dashboard/clients', label: 'Clients', icon: '👥' },
    { href: '/admin/dashboard/analytics', label: 'Analytics', icon: '📈' },
    { href: '/admin/dashboard/settings', label: 'Settings', icon: '⚙️' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menu Overlay - Show on all screen sizes when menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Always collapsible with hamburger menu */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo/Brand with Mobile Close Button */}
          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  ADMIN PANEL
                </h1>
                <p className="text-xs text-gray-500 mt-1 font-mono">
                  NIBLAH SYSTEM
                </p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between px-3">
              <div>
                <p className="text-sm font-medium text-gray-900">{user?.username || 'Niblah'}</p>
                <p className="text-xs text-gray-500">{user?.role || 'Administrator'}</p>
              </div>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="p-2 text-sm text-gray-500 hover:text-gray-900 transition-colors disabled:opacity-50"
                title="Logout"
              >
                {isLoggingOut ? '...' : '→'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - No margin since sidebar is always collapsible */}
      <div className="">
        {/* Top Bar with Mobile Menu Button */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 mr-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {navItems.find(item => pathname.startsWith(item.href))?.label || 'Dashboard'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                <span className="hidden sm:inline">Online</span>
                <span className="sm:hidden">ON</span>
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <SwrProvider>
            {children}
          </SwrProvider>
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <DashboardContent>{children}</DashboardContent>
    </AuthProvider>
  );
}