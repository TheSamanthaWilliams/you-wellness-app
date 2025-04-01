"use client";

import React from 'react';
import { useState, useEffect } from 'react';

export default function TimeCapsulePage() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - in a real app, you'd fetch from an API
    const mockEntries = [
      {
        id: 3,
        date: 'March 10, 2025',
        title: 'Gratitude Journal Entry',
        description: 'Started my gratitude practice. Today I\'m grateful for family, health, and this journey.',
        image: null,
        category: 'spirit'
      }
    ];
    
    // Simulate API fetch
    setTimeout(() => {
      setEntries(mockEntries);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Your Gratitude Journal</h1>
      
      {entries.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">No entries yet. Start your gratitude practice today!</p>
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Create First Entry
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-1">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>
                    <p className="text-sm text-gray-500 mb-3">{entry.date}</p>
                  </div>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                    {entry.category}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{entry.description}</p>
                
                {entry.image && (
                  <img 
                    src={entry.image} 
                    alt="Journal entry" 
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                
                <div className="flex justify-end space-x-2 mt-4">
                  <button className="text-sm text-purple-600 hover:text-purple-800">Edit</button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">Archive</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="fixed bottom-8 right-8">
        <button className="bg-purple-600 hover:bg-purple-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
