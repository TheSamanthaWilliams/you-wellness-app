"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content with background image */}
      <div 
        className="flex-1 flex flex-col items-center justify-between bg-cover bg-center py-16 px-8"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('/images/beach.jpg')` 
        }}
      >
        {/* Top section with eye logo */}
        <div className="flex-1 flex flex-col items-center justify-center mb-8">
          <div className="w-32 h-32 mb-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-gray-200 stroke-current">
              <circle cx="50" cy="50" r="10" strokeWidth="2" fill="white" />
              <circle cx="50" cy="50" r="20" strokeWidth="2" fill="none" />
              <path d="M50,20 L50,5" strokeWidth="2" />
              <path d="M50,80 L50,95" strokeWidth="2" />
              <path d="M20,50 L5,50" strokeWidth="2" />
              <path d="M80,50 L95,50" strokeWidth="2" />
              <path d="M26,26 L15,15" strokeWidth="2" />
              <path d="M74,26 L85,15" strokeWidth="2" />
              <path d="M26,74 L15,85" strokeWidth="2" />
              <path d="M74,74 L85,85" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-100 tracking-wider mb-4 drop-shadow-md">YOU</h1>
            <h2 className="text-3xl font-thin text-gray-100 tracking-widest drop-shadow-md">WELLNESS</h2>
          </div>
        </div>
        
        {/* Bottom action button */}
        <div className="mt-auto">
          <Link 
            href="/onboarding" 
            className="block bg-green-200 text-gray-700 font-semibold py-4 px-12 rounded-full shadow-md hover:bg-green-300 transition duration-300 ease-in-out text-center"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </div>
  );
}
