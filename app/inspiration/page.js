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
              <h3 className="text-gray-800 font-medium text-sm truncate">Feel And Relax You Mi...</h3>
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
              <h3 className="text-gray-800 font-medium text-sm truncate">Feel And Relax You Mi...</h3>
              <div className="flex space-x-2 mt-2">
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10
