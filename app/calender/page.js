"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function CalendarPage() {
  const [activeDay, setActiveDay] = useState('today');
  const daysInMonth = 30;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-4 px-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Calendar</h1>
          <Link href="/" className="text-blue-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </Link>
        </div>
      </header>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <button className="text-gray-600 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <h2 className="text-lg font-medium text-gray-800">April 2025</h2>
            <button className="text-gray-600 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            <div className="text-sm font-medium text-gray-500">Sun</div>
            <div className="text-sm font-medium text-gray-500">Mon</div>
            <div className="text-sm font-medium text-gray-500">Tue</div>
            <div className="text-sm font-medium text-gray-500">Wed</div>
            <div className="text-sm font-medium text-gray-500">Thu</div>
            <div className="text-sm font-medium text-gray-500">Fri</div>
            <div className="text-sm font-medium text-gray-500">Sat</div>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: daysInMonth }, (_, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(`day-${i + 1}`)}
                className={`h-12 rounded-lg flex items-center justify-center ${
                  activeDay === `day-${i + 1}` 
                    ? 'bg-blue-500 text-white' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <h3 className="font-medium text-lg mb-3">Activities for {activeDay === 'today' ? 'Today' : `April ${activeDay.replace('day-', '')}`}</h3>
          
          {activeDay === 'today' || activeDay === 'day-1' ? (
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <p className="text-sm text-gray-500">8:00 AM</p>
                <p className="font-medium">Morning Meditation</p>
              </div>
              <div className="border-l-4 border-green-500 pl-3 py-2">
                <p className="text-sm text-gray-500">12:30 PM</p>
                <p className="font-medium">Lunch Break Walk</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-3 py-2">
                <p className="text-sm text-gray-500">6:00 PM</p>
                <p className="font-medium">Evening Yoga</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">No activities scheduled for this day</p>
          )}
          
          <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition duration-200">
            Add New Activity
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-around">
        <Link href="/" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/health-log" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <span className="text-xs mt-1">Log</span>
        </Link>
        <Link href="/calendar" className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs mt-1 text-blue-500">Calendar</span>
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
