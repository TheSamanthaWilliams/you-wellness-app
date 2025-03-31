"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BottomNav from '../components/BottomNav';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('youWellnessUser');
      if (userStr) {
        try {
          const userData = JSON.parse(userStr);
          if (userData.isLoggedIn) {
            setUser(userData);
          } else {
            router.push('/');
          }
        } catch (e) {
          router.push('/');
        }
      } else {
        router.push('/');
      }
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return null; // Will redirect to home
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">YOU Wellness</h1>
          <div className="flex items-center space-x-4">
            <Link href="/donate" className="text-green-600">Donate</Link>
            <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center">
              {user.name ? user.name.charAt(0) : "U"}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-green-600 mb-2">Your Wellness Dashboard</h2>
          <p className="text-gray-600">
            Track your progress across mind, body, and spirit to achieve holistic wellness.
          </p>
        </div>
        
        {/* Wellness Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Mind Metric */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mind</h3>
            
            <div className="relative w-40 h-40 my-4">
              <svg className="w-full h-full" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="12"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#8BD48E"
                  strokeWidth="12"
                  strokeDasharray="439.8"
                  strokeDashoffset="87.96"
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                />
              </svg>
              
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-4xl font-bold text-gray-800">80</span>
              </div>
            </div>
            
            <span className="text-lg font-medium text-green-500">
              Thriving
            </span>
          </div>

          {/* Body Metric */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Body</h3>
            
            <div className="relative w-40 h-40 my-4">
              <svg className="w-full h-full" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="12"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#F9C74F"
                  strokeWidth="12"
                  strokeDasharray="439.8"
                  strokeDashoffset="153.93"
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                />
              </svg>
              
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-4xl font-bold text-gray-800">65</span>
              </div>
            </div>
            
            <span className="text-lg font-medium text-yellow-500">
              Progressing
            </span>
          </div>

          {/* Spirit Metric */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Spirit</h3>
            
            <div className="relative w-40 h-40 my-4">
              <svg className="w-full h-full" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="12"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#90BEF8"
                  strokeWidth="12"
                  strokeDasharray="439.8"
                  strokeDashoffset="123.14"
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                />
              </svg>
              
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-4xl font-bold text-gray-800">72</span>
              </div>
            </div>
            
            <span className="text-lg font-medium text-blue-500">
              Balanced
            </span>
          </div>
        </div>
        
        <div className="text-center my-8">
          <p className="text-gray-600">Your dashboard is being built. Check back soon for more features!</p>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}
