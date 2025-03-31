"use client";

import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import { Book } from 'lucide-react';

export default function TimeCapsule() {
  const [activeTab, setActiveTab] = useState('memories');
  
  // Fixed memories array with proper syntax
  const memories = [
    {
      id: 1,
      date: "March 28, 2025",
      title: "First Meditation Milestone",
      description: "Completed 7 consecutive days of morning meditation! Feeling more centered and focused.",
      image: null,
      category: "mind"
    },
    {
      id: 2,
      date: "March 15, 2025",
      title: "Morning Run by the Lake",
      description: "Beautiful sunrise during my morning run. Made it 5 miles without stopping!",
      image: null,
      category: "body"
    },
    {
      id: 3,
      date: "March 10, 2025",
      title: "Gratitude Journal Entry",
      description: "Started my gratitude practice. Today I am grateful for family, health, and this journey.",
      image: null,
      category: "spirit"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-green-600">Time Capsule</h1>
          
          <div className="flex border-b border-gray-200 mt-4">
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'memories' 
                  ? 'border-b-2 border-green-600 text-green-600' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('memories')}
            >
              Memories
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'journals' 
                  ? 'border-b-2 border-green-600 text-green-600' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('journals')}
            >
              Journals
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {activeTab === 'memories' && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Memories</h2>
            
            <div className="space-y-4">
              {memories.map((memory) => (
                <div key={memory.id} className="bg-white rounded-xl shadow-sm p-4">
                  <div className="text-xs text-gray-500 mb-1">{memory.date}</div>
                  <h3 className="font-medium text-gray-800 mb-1">{memory.title}</h3>
                  <p className="text-sm text-gray-600">{memory.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'journals' && (
          <div className="text-center py-12">
            <Book className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">Journal Coming Soon</h3>
            <p className="text-gray-500 max-w-xs mx-auto">
              We are still building this feature. Check back soon!
            </p>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
}
