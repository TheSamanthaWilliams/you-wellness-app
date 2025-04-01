"use client";

import React from 'react';
import Link from 'next/link';

export default function InspirationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white py-4 px-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Daily Inspiration</h1>
          <Link href="/" className="text-blue-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Home
          </Link>
        </div>
      </header>

      <div className="p-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-6 text-white">
          <h2 className="text-xl font-bold mb-2">Quote of the Day</h2>
          <blockquote className="text-lg italic mb-2">
            "Wellness is the complete integration of body, mind, and spirit – the realization that everything we do, think, feel, and believe has an effect on our state of well-being."
          </blockquote>
          <p className="text-right text-sm">— Greg Anderson</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h2 className="text-lg font-medium mb-3">Today's Wellness Focus</h2>
          <div className="flex items-center bg-blue-50 p-3 rounded-lg mb-3">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Mindful Breathing</h3>
              <p className="text-sm text-gray-600">Take 10 deep breaths whenever you feel stressed today.</p>
            </div>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition duration-200">
            Mark as Completed
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col h-full">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Self-Care Tip</h3>
              <p className="text-sm text-gray-600 flex-grow">Schedule 15 minutes of "me time" today.</p>
              <button className="mt-2 text-green-500 text-sm font-medium">Learn More</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col h-full">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Sleep Reminder</h3>
              <p className="text-sm text-gray-600 flex-grow">Wind down 30 minutes before bed tonight.</p>
              <button className="mt-2 text-purple-500 text-sm font-medium">Set Reminder</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h2 className="text-lg font-medium mb-3">Weekly Challenge</h2>
          <div className="bg
