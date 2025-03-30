// pages/dashboard.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    const userStr = localStorage.getItem('youWellnessUser');
    if (userStr) {
      const userData = JSON.parse(userStr);
      if (userData.isLoggedIn) {
        setUser(userData);
      } else {
        router.push('/');
      }
    } else {
      router.push('/');
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return null; // Will redirect to home
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Head>
        <title>YOU Wellness | Dashboard</title>
        <meta name="description" content="Track your holistic wellness journey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-600 mb-2">Your Wellness Dashboard</h1>
          <p className="text-gray-600">
            Track your progress across mind, body, and spirit to achieve holistic wellness.
          </p>
        </div>
        
        {/* Mind Metric */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Mind</h3>
            
            <div className="relative w-40 h-40 my-4">
              {/* Progress Circle */}
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
              
              {/* Value text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-4xl font-bold text-gray-800">80</span>
              </div>
            </div>
            
            <span className="text-lg font-medium text-green-500">
              Thriving
            </span>
          </div>
        </div>
        
        {/* Placeholder message */}
        <div className="text-center text-gray-600 mt-12">
          <p>Your dashboard is currently under development.</p>
          <p className="mt-2">Check back soon for more wellness features!</p>
        </div>
      </main>
    </div>
  );
}
