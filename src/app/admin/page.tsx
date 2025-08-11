'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [adminInfo, setAdminInfo] = useState<{ success: boolean; admins?: Array<{ email: string; role: string; createdAt: string }> } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/users');
        if (response.ok) {
          const data = await response.json();
          setAdminInfo(data);
        } else if (response.status === 401) {
          // Redirect to login if not authenticated
          router.replace('/admin/login');
          return;
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.replace('/admin/login');
        return;
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.replace('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Admin Dashboard
              </h1>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Welcome to Anantya 2025 Admin
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  You are now logged in as an administrator. You can manage registrations and view system information.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
                  Fast Authentication
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  Your login is now powered by MongoDB for faster authentication and better security.
                </p>
                {adminInfo?.admins && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                    Total admin users: {adminInfo.admins.length}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Actions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/api/registrations"
                className="block p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                  View Registrations
                </h3>
                <p className="text-indigo-700 dark:text-indigo-300 text-sm">
                  Check all event registrations
                </p>
              </Link>
              
              <Link
                href="/api/admin/users"
                className="block p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
                  Manage Admins
                </h3>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  Add or remove admin users
                </p>
              </Link>
              
              <Link
                href="/"
                className="block p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-2">
                  View Website
                </h3>
                <p className="text-orange-700 dark:text-orange-300 text-sm">
                  Go back to main website
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
