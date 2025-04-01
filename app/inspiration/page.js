"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function InspirationPage() {
  const [activeCategory, setActiveCategory] = useState('mind');
  
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
          <h1 className="text-2xl font-serif text-green-600">YOU INSPIRATION</h1>
        </div>
      </header>
      
      {/* Category Tabs */}
      <div className="px-4 pt-4 pb-2 overflow-x-auto flex space-x-2">
        <button
          onClick={() => setActiveCategory('mind')}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeCategory === 'mind' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Mind
        </button>
        <button
          onClick={() => setActiveCategory('body')}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeCategory === 'body' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Body
        </button>
        <button
          onClick={() => setActiveCategory('soul')}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeCategory === 'soul' ? 'bg-purple-200 text-purple-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Soul
        </button>
        <button
          onClick={() => setActiveCategory('foryou')}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeCategory === 'foryou' ? 'bg-rose-200 text-rose-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          For you
        </button>
      </div>
      
      {/* Content Grid */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-40 bg-gray-200">
              <button className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="p-3">
              <h3 className="text-gray-800 font-medium text-sm truncate">Feel And Relax You Mind</h3>
              <div className="flex space-x-2 mt-2">
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-40 bg-gray-200">
              <button className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="p-3">
              <h3 className="text-gray-800 font-medium text-sm truncate">Feel And Relax You Mind</h3>
              <div className="flex space-x-2 mt-2">
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-40 bg-gray-200">
              <button className="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-70 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="p-3">
              <h3 className="text-gray-800 font-medium text-sm truncate">Feel And Relax You Mind</h3>
              <div className="flex space-x-2 mt-2">
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-40 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strok
<path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-700">Watch</span>
          </button>
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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-xs text-gray-500">Health Log</span>
        </Link>
        
        <Link href="/giving" className="flex flex-col items-center px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-xs text-gray-500">Giving</span>
        </Link>
        
        <Link href="/time-capsule" className="flex flex-col items-center px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs text-gray-500">Time Capsule</span>
        </Link>
      </nav>
      
      {/* Add padding at bottom to account for fixed nav */}
      <div className="h-16"></div>
    </div>
  );
}
