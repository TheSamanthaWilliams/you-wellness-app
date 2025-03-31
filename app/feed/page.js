"use client";

import React from 'react';
import BottomNav from '../components/BottomNav';
import { ChevronRight, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

export default function Feed() {
  const feedItems = [
    {
      id: 1,
      author: 'Jane Cooper',
      authorImage: '/api/placeholder/40/40',
      authorRole: 'Wellness Coach',
      timeAgo: '2h ago',
      content: 'Just finished my morning meditation and feeling centered! Who else starts their day with mindfulness?',
      likes: 24,
      comments: 5,
      shares: 2,
      category: 'mind'
    },
    {
      id: 2,
      author: 'Marcus Kim',
      authorImage: '/api/placeholder/40/40',
      authorRole: 'Fitness Enthusiast',
      timeAgo: '4h ago',
      content: 'Hit a new personal record on my 5k run today! Remember: progress, not perfection. 🏃‍♂️',
      likes: 42,
      comments: 8,
      shares: 3,
      category: 'body'
    },
    {
      id: 3,
      author: 'Wellness Daily',
      authorImage: '/api/placeholder/40/40',
      authorRole: 'Health Publication',
      timeAgo: '6h ago',
      content: 'New study shows that spending just 20 minutes in nature can significantly reduce stress hormones. Try to get outside today! 🌿',
      likes: 76,
      comments: 12,
      shares: 15,
      category: 'spirit'
    }
  ];

  const categories = [
    { name: 'All', active: true },
    { name: 'Mind', active: false },
    { name: 'Body', active: false },
    { name: 'Spirit', active: false },
    { name: 'Community', active: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-green-600">Feed</h1>
          
          {/* Category tabs */}
          <div className="flex overflow-x-auto mt-4 pb-2 -mx-4 px-4 space-x-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  category.active 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Create post card */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-500">
              Share what's on your mind...
            </div>
          </div>
        </div>
        
        {/* Feed items */}
        <div className="space-y-6">
          {feedItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h3 className="font-medium">{item.author}</h3>
                  <p className="text-xs text-gray-500">{item.authorRole} • {item.timeAgo}</p>
                </div>
              </div>
              
              <p className="text-gray-800 mb-4">{item.content}</p>
              
              <div className="flex justify-between border-t border-gray-100 pt-3 text-gray-500 text-sm">
                <button className="flex items-center">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  <span>{item.likes}</span>
                </button>
                <button className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{item.comments}</span>
                </button>
                <button className="flex items-center">
                  <Share2 className="w-4 h-4 mr-1" />
                  <span>{item.shares}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* See more button */}
        <div className="mt-6 text-center">
          <button className="text-green-600 font-medium flex items-center justify-center mx-auto">
            See more posts <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}
