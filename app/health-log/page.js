"use client";

import BottomNav from '../components/BottomNav';

export default function HealthLog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pb-20">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">YOU Wellness</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Health Log</h2>
        <p className="text-gray-600 mb-8">Coming soon - Your health tracking tools will appear here.</p>
        
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature Under Development</h3>
          <p className="text-gray-600">
            We're working on building comprehensive health tracking tools to help you monitor your wellness journey.
            Check back soon for updates!
          </p>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}
