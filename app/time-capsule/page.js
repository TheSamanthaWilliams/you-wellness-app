"use client";

import React from 'react';
import BottomNav from '../components/BottomNav';

export default function TimeCapsule() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-green-600">Time Capsule</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Your Memories & Journals</h2>
        <p className="text-gray-600 mb-6">
          This is where you'll store memorable moments from your wellness journey.
        </p>
        
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Coming Soon</h3>
          <p className="text-gray-600">
            We're currently building this feature for you. Check back soon!
          </p>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}
