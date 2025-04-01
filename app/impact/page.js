"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState('all');
  
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
          <h1 className="text-2xl font-serif text-green-600">YOUR IMPACT</h1>
        </div>
      </header>
      
      {/* Category Tabs */}
      <div className="px-4 pt-4 pb-2 overflow-x-auto flex space-x-2">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === 'all' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('animals')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === 'animals' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Animals
        </button>
        <button
          onClick={() => setActiveTab('earth')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === 'earth' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Earth
        </button>
        <button
          onClick={() => setActiveTab('foods')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === 'foods' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Foods
        </button>
        <button
          onClick={() => setActiveTab('human')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === 'human' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Human
        </button>
      </div>
      
      {/* Main Content */}
      <div className="px-4 py-4">
        {/* Hero Image */}
        <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
          <img 
            src="/images/window-sunset.jpg" 
            alt="Window view at sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-white bg-opacity-90">
            <h2 className="text-green-600 text-sm font-medium">FOSTER KINDNESS BY SUPPORTING HOLISTIC INITIATIVES FOR EARTH, ANIMALS, AND PEOPLE.</h2>
            <p className="text-gray-700 text-xs mt-1">Support Earth, animals, and people through small, impactful daily actions.</p>
          </div>
        </div>
        
        {/* Impact Cards */}
        <div className="space-y-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/images/meditation-space.jpg" 
              alt="Peaceful meditation space" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-green-600 text-sm font-medium">DISCOVER WELLNESS PRACTICES THAT SUPPORT YOUR HEALTH AND GIVE BACK TO THE PLANET.</h3>
              <p className="text-gray-700 text-xs mt-1">Explore wellness spaces that align with your health goals and values.</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/images/healthy-food.jpg" 
              alt="Healthy and sustainable food" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-green-600 text-sm font-medium">NOURISH YOURSELF WITH SEASONAL, WHOLESOME FOODS THAT HONOR EARTH'S RESOURCES.</h3>
              <p className="text-gray-700 text-xs mt-1">Elevate your well-being with mindful habits that nourish body and soul.</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/images/nature-bath.jpg" 
              alt="Bathtub with nature view" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-green-600 text-sm font-medium">ACHIEVE MENTAL CLARITY AND PURPOSE THROUGH SELF-CARE AND HOLISTIC GIVING.</h3>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-4 flex justify-center">
          <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-700 font-medium">
            READ MORE INFORMATION
          </button>
        </div>
        
        {/* Footer Text */}
        <div className="mt-6 mb-16">
          <p className="text-center text-green-600 font-light px-8">
            Renew yourself while contributing to Earth and animal wellness through mindful choices.
          </p>
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
    </div>
  );
}
