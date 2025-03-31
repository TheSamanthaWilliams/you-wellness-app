"use client";

import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import { Camera, Upload, Book, Plus, ChevronRight } from 'lucide-react';

export default function TimeCapsule() {
  const [activeTab, setActiveTab] = useState('memories');
  
  const memories = [
    {
      id: 1,
      date: 'March 28, 2025',
      title: 'First Meditation Milestone',
      description: 'Completed 7 consecutive days of morning meditation! Feeling more centered and focused.',
      image: '/api/placeholder/120/80',
      category: 'mind'
    },
    {
      id: 2,
      date: 'March 15, 2025',
      title: 'Morning Run by the Lake',
      description: 'Beautiful sunrise during my morning run. Made it 5 miles without stopping!',
      image: '/api/placeholder/120/80',
      category: 'body'
    },
    {
      id: 3,
      date: 'March 10, 2025',
      title: 'Gratitude Journal Entry',
      description: 'Started my gratitude practice. Today I'm grateful for family, health, and this journey.',
      image: null,
      category: 'spirit'
    }
  ];
  
  const journals = [
    {
      id: 1,
      date: 'March 29, 2025',
      title: 'Reflections on Progress',
      preview: 'Today I took some time to reflect on how far I've come in my wellness journey...'
    },
    {
      id: 2,
      date: 'March 20, 2025',
      title: 'Overcoming Challenges',
      preview: 'I faced a setback this week when I couldn't maintain my meditation streak but...'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-green-600">Time Capsule</h1>
          
          {/* Tab navigation */}
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
        {/* Action buttons */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
            <div className="bg-green-100 p-2 rounded-full mb-2">
              <Camera className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-xs text-gray-700">Capture</span>
          </button>
          
          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
            <div className="bg-green-100 p-2 rounded-full mb-2">
              <Upload className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-xs text-gray-700">Upload</span>
          </button>
          
          <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center">
            <div className="bg-green-100 p-2 rounded-full mb-2">
              <Book className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-xs text-gray-700">Journal</span>
          </button>
        </div>
        
        {activeTab === 'memories' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Your Memories</h2>
              <button className="text-sm text-green-600 flex items-center">
                Filter <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
            
            <div className="space-y-4">
              {memories.map((memory) => (
                <div key={memory.id} className="bg-white rounded-xl shadow-sm p-4 flex">
                  {memory.image ? (
                    <div className="w-20 h-20 bg-gray-200 rounded-lg mr-4 flex-shrink-0"></div>
                  ) : (
                    <div className="w-20 h-20 bg-gray-100 rounded-lg mr-4 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-400 text-xs">No image</span>
                    </div>
                  )}
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{memory.date}</div>
                    <h3 className="font-medium text-gray-800 mb-1">{memory.title}</h3>
                    <p className="text-sm text-gray-600">{memory.description}</p>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-3 text-green-600 font-medium flex items-center justify-center bg-white rounded-xl shadow-sm">
                <Plus className="h-4 w-4 mr-2" /> Add New Memory
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'journals' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Your Journals</h2>
            </div>
            
            <div className="space-y-4">
              {journals.map((journal) => (
                <div key={journal.id} className="bg-white rounded-xl shadow-sm p-4">
                  <div className="text-xs text-gray-500 mb-1">{journal.date}</div>
                  <h3 className="font-medium text-gray-800 mb-2">{journal.title}</h3>
                  <p className="text-sm text-gray-600">{journal.preview}...</p>
                  <button className="text-green-600 text-sm mt-2">Read more</button>
                </div>
              ))}
              
              <button className="w-full py-3 text-green-600 font-medium flex items-center justify-center bg-white rounded-xl shadow-sm">
                <Plus className="h-4 w-4 mr-2" /> Create New Journal
              </button>
            </div>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
}
