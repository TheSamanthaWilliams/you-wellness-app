"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function TimeCapsulePage() {
  const [activeTab, setActiveTab] = useState('journal');
  const [expandedQuestion, setExpandedQuestion] = useState('what-remember');
  
  // Sample entry data
  const journalEntry = {
    id: 3,
    date: 'March 10, 2025',
    title: 'Gratitude Journal Entry',
    description: 'Started my gratitude practice. Today I\'m grateful for family, health, and this journey.',
    image: null,
    category: 'spirit'
  };
  
  // Sample video data
  const videoEntry = {
    id: 1,
    date: 'May 23, 2025',
    location: 'Redwood',
    videoUrl: '#'
  };
  
  // Sample questions
  const questions = [
    { id: 'what-changes', text: 'What Changes Do You Want Most?', isExpanded: false },
    { id: 'what-remember', text: 'What Is One Thing You Want To Remember About Today?', isExpanded: true, 
      answer: 'I want to prioritize my health and well-being by establishing a consistent exercise routine.',
      hasVideo: true },
    { id: 'top-goal', text: 'What\'s Your Top Goal For This Week?', isExpanded: false },
    { id: 'align-values', text: 'How Does This Goal Align With Your Values?', isExpanded: false }
  ];
  
  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

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
          <h1 className="text-2xl font-serif text-green-600">TIME CAPSULE</h1>
        </div>
      </header>
      
      <div className="px-4 py-6">
        <p className="text-gray-600 mb-6">Make memories with video of yourself</p>
        
        {/* Tab Navigation */}
        <div className="flex rounded-full bg-gray-100 mb-6">
          <button 
            className={`flex-1 py-3 px-4 rounded-full ${activeTab === 'video' ? 'bg-rose-200 text-gray-800' : 'text-gray-500'}`}
            onClick={() => setActiveTab('video')}
          >
            Video Entry
          </button>
          <button 
            className={`flex-1 py-3 px-4 rounded-full ${activeTab === 'journal' ? 'bg-gray-200 text-gray-800' : 'text-gray-500'}`}
            onClick={() => setActiveTab('journal')}
          >
            Journal Entry
          </button>
        </div>
        
        {/* Video Box */}
        <div className="bg-green-200 rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h2 className="text-white text-lg font-medium mb-2">TIME CAPSULE VIDEO</h2>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{videoEntry.location} on {videoEntry.date}</span>
              </div>
            </div>
            <div className="flex">
              <button className="bg-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="bg-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
            </div>
          </div>
          <button className="bg-white text-gray-800 rounded-lg px-4 py-2 mt-4 text-sm">
            See Videos
          </button>
        </div>
        
        {/* Questions Section */}
        <div className="mb-6">
          <h2 className="text-green-400 text-lg mb-4">QUESTION FOR YOU</h2>
          
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{question.text}</h3>
                  <button 
                    onClick={() => toggleQuestion(question.id)}
                    className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center"
                  >
                    <span className="text-gray-500">
                      {expandedQuestion === question.id ? '−' : '+'}
                    </span>
                  </button>
                </div>
                
                {expandedQuestion === question.id && (
                  <div className="mt-4">
                    {question.hasVideo && (
                      <div className="mb-4 relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '160px' }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {question.answer && (
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-gray-700">{question.answer}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs text-green-500">Time Capsule</span>
        </Link>
      </nav>
      
      {/* Add padding at bottom to account for fixed nav */}
      <div className="h-16"></div>
    </div>
  );
}
