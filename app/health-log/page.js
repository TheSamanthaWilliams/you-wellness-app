"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function HealthLogPage() {
  const [activeDay, setActiveDay] = useState('today');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-4 px-4 border-b border-gray-200">
        <div className="flex items-center">
          <Link href="/dashboard" className="mr-4">
            <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </Link>
          <h1 className="text-2xl font-serif text-green-600">HEALTH LOG</h1>
        </div>
      </header>
      
      <div className="px-4 py-6">
        {/* Reflection Section */}
        <div className="mb-6">
          <h2 className="text-green-400 text-lg font-light mb-4">REFLECTION</h2>
          
          <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
            <img 
              src="/images/water-reflection.jpg" 
              alt="Person relaxing in water" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Day Selector */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-4">
            <button
              onClick={() => setActiveDay('today')}
              className={`flex-1 py-2 px-4 rounded-full text-sm ${
                activeDay === 'today' ? 'bg-rose-200 text-gray-800' : 'text-gray-500'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setActiveDay('monday')}
              className={`flex-1 py-2 px-4 rounded-full text-sm ${
                activeDay === 'monday' ? 'bg-rose-200 text-gray-800' : 'text-gray-500'
              }`}
            >
              Monday
            </button>
          </div>
        </div>
        
        {/* Energy Message */}
        <div className="mb-6">
          <h2 className="text-green-400 text-lg font-light mb-2">ENERGY MESSAGE</h2>
          <p className="text-gray-600">
            Strong mental well-being supports a fulfilling life. Embrace moments that nurture your inner peace.
          </p>
        </div>
        
        {/* Log Your Symptoms */}
        <div className="mb-6">
          <h2 className="text-green-400 text-lg font-light mb-4">LOG YOUR SYMPTOMS</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Mind Section */}
            <div className="bg-green-100 rounded-lg p-4">
              <h3 className="text-white text-lg font-medium mb-2">MIND</h3>
              <p className="text-white text-sm mb-4">
                Focuses on mental clarity, emotional health, and self-growth through affirmations.
              </p>
              <button className="bg-white text-gray-600 rounded-full px-4 py-1 text-sm">
                Add
              </button>
            </div>
            
            {/* Body Section */}
            <div className="bg-green-100 rounded-lg p-4">
              <h3 className="text-white text-lg font-medium mb-2">BODY</h3>
              <p className="text-white text-sm mb-4">
                Emphasizes physical wellness through exercise routines, nutrition tips, and daily check-ins.
              </p>
              <button className="bg-white text-gray-600 rounded-full px-4 py-1 text-sm">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
        <Link href="/you" className="flex flex-col items-center px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs text-gray-500">YOU</span>
        </Link>
        
        <Link href="/feed" className="flex flex-col items-center px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs text-gray-500">Feed</span>
        </Link>
        
        <Link href="/health-log" className="flex flex-col items-center px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-xs text-green-500">Health Log</span>
        </Link>
        
        <Link href="/giving" className="flex flex-col items-center px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs text-gray-500">Giving</span>
        </Link>
        
        <Link href="/time-capsule" className="flex flex-col items-center px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2
