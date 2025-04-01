"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function HealthLogPage() {
  const [activeTab, setActiveTab] = useState('today');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-4 px-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Health Log</h1>
          <Link href="/" className="text-blue-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Home
          </Link>
        </div>
      </header>

      <div className="px-4 py-6">
        <div className="flex mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('today')}
            className={`pb-2 px-4 ${
              activeTab === 'today'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'text-gray-500'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`pb-2 px-4 ${
              activeTab === 'history'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'text-gray-500'
            }`}
          >
            History
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`pb-2 px-4 ${
              activeTab === 'stats'
                ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                : 'text-gray-500'
            }`}
          >
            Stats
          </button>
        </div>

        {activeTab === 'today' && (
          <div>
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h2 className="text-lg font-medium mb-3">How are you feeling today?</h2>
              <div className="flex justify-between mb-6">
                <button className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Great</span>
                </button>
                <button className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-3 6a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Good</span>
                </button>
                <button className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-3 6a5 5 0 01-4-2 1 1 0 112 0 3 3 0 004 0 1 1 0 112 0 5 5 0 01-4 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Okay</span>
                </button>
                <button className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-4.293 5.707a1 1 0 101.414-1.414 3 3 0 00-4.242 0 1 1 0 001.414 1.414 1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Bad</span>
                </button>
              </div>
              <textarea 
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add some notes about your day..."
                rows="3"
              ></textarea>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <h2 className="text-lg font-medium mb-3">Track Your Wellness</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Water Intake</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <button key={n} className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 mx-1 hover:bg-blue-200">
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Exercise</span>
                  <button className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-sm font-medium">
                    + Add
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Sleep</span>
                  <button className="bg-purple-100 text-purple-600 py-1 px-3 rounded-full text-sm font-medium">
                    + Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-medium mb-3">Your Health History</h2>
            <div className="space-y-3">
              <div className="border-b border-gray-100 pb-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">March 31, 2025</span>
                  <span className="text-green-500 font-medium">Great</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">Completed 30-minute workout and drank 8 glasses of water.</p>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">March 30, 2025</span>
                  <span className="text-blue-500 font-medium">Good</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">Felt well-rested after 8 hours of sleep.</p>
              </div>
              <div className="border-b border-gray-100 pb-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">March 29, 2025</span>
                  <span className="text-yellow-500 font-medium">Okay</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">Busy day at work, only managed to drink 5 glasses of water.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-medium mb-3">Wellness Statistics</h2>
            <p className="text-gray-500 text-center py-4">Your wellness data will be visualized here.</p>
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Weekly and monthly trends will appear here</p>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-around">
        <Link href="/" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/health-log" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <span className="text-xs mt-1 text-blue-500">Log</span>
        </Link>
        <Link href="/calendar" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs mt-1">Calendar</span>
        </Link>
        <Link href="/inspiration" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-xs mt-1">Inspire</span>
        </Link>
      </div>
    </div>
  );
}
