"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-gray-50 to-gray-100 text-center">
      {/* Top eye logo */}
      <div className="flex-1 flex flex-col items-center justify-center pt-20 pb-10">
        <div className="w-24 h-24 mb-12">
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
      </div>
      
      {/* Middle text */}
      <div className="mb-24">
        <h1 className="text-5xl font-bold text-gray-200 tracking-wider mb-2 drop-shadow-md">YOU</h1>
        <h2 className="text-3xl font-light text-gray-200 tracking-widest drop-shadow-md">WELLNESS</h2>
      </div>
      
      {/* Beach image and button */}
      <div className="w-full relative">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-blue-100 to-transparent"></div>
        <img 
          src="/images/beach.jpg" 
          alt="Peaceful beach" 
          className="w-full h-64 object-cover object-bottom"
        />
        <div className="absolute inset-x-0 bottom-0 pb-16 flex justify-center">
          <Link 
            href="/onboarding" 
            className="bg-green-200 text-gray-700 font-semibold py-4 px-8 rounded-full shadow-md hover:bg-green-300 transition duration-300 ease-in-out"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </div>
  );
}
