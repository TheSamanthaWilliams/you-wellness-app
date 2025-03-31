"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">YOU Wellness</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-green-600">Settings</button>
            <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center">
              {user.name.charAt(0)}
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
        
        {/* Recent Activities and Goals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="text-sm text-gray-500">Today, 9:00 AM</p>
                <p className="font-medium">Meditation</p>
                <p className="text-gray-600">15 minutes</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <p className="text-sm text-gray-500">Today, 7:30 AM</p>
                <p className="font-medium">Morning Walk</p>
                <p className="text-gray-600">30 minutes</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <p className="text-sm text-gray-500">Yesterday, 10:00 PM</p>
                <p className="font-medium">Gratitude Journal</p>
                <p className="text-gray-600">10 minutes</p>
              </div>
            </div>
            <button className="mt-4 text-green-600 hover:text-green-800 font-medium">
              + Add Activity
            </button>
          </div>
          
          {/* Goals */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Your Goals</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Meditate daily</span>
                  <span className="text-sm text-gray-500">14/21 days</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Exercise 3x weekly</span>
                  <span className="text-sm text-gray-500">7/12 sessions</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '58%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Read for growth</span>
                  <span className="text-sm text-gray-500">18/30 minutes daily</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            <button className="mt-4 text-green-600 hover:text-green-800 font-medium">
              + Add Goal
            </button>
          </div>
        </div>
        
        {/* Upcoming Features Teaser */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Coming Soon</h3>
          <p className="text-gray-600">
            Weekly insights, personalized recommendations, and community features.
          </p>
          <p className="text-gray-600 mt-2">
            We're working hard to bring you these exciting features!
          </p>
        </div>
      </main>
      
      <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 YOU Wellness. Your journey to holistic wellness.</p>
        </div>
      </footer>
    </div>
  );
}
