// app/time-capsule/page.js
"use client";

import React from 'react';
import { useState } from 'react';

export default function TimeCapsulePage() {
  // Define the gratitude entry properly as a JavaScript object
  const gratitudeEntry = {
    id: 3,
    date: 'March 10, 2025',
    title: 'Gratitude Journal Entry',
    description: 'Started my gratitude practice. Today I\'m grateful for family, health, and this journey.',
    image: null,
    category: 'spirit'
  };
  
  // Use the entry in your component
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{gratitudeEntry.title}</h1>
      <p className="text-gray-600 mb-2">{gratitudeEntry.date}</p>
      <p className="mb-4">{gratitudeEntry.description}</p>
      {gratitudeEntry.image && (
        <img 
          src={gratitudeEntry.image} 
          alt="Journal entry image" 
          className="w-full rounded-md mb-4"
        />
      )}
      <div className="text-sm text-gray-500">
        Category: {gratitudeEntry.category}
      </div>
    </div>
  );
}
