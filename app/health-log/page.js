"use client";

import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import { Plus, TrendingUp, Calendar, Clock, Activity, Heart } from 'lucide-react';

export default function HealthLog() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data for health metrics
  const healthMetrics = [
    { 
      name: 'Heart Rate', 
      value: '68', 
      unit: 'bpm', 
      change: '-2', 
      status: 'good',
      icon: <Heart className="text-red-500" />
    },
    { 
      name: 'Sleep', 
      value: '7.5', 
      unit: 'hours', 
      change: '+0.5', 
      status: 'good',
      icon: <Clock className="text-blue-500" />
    },
    { 
      name: 'Steps', 
      value: '8,745', 
      unit: 'steps', 
      change: '+1,205', 
      status: 'good',
      icon: <Activity className="text-green-500" />
    },
    { 
      name: 'Meditation', 
      value: '15', 
      unit: 'min', 
      change: '0', 
      status: 'neutral',
      icon: <Clock className="text-purple-500" />
    }
  ];
  
  // Recent activities
  const recentActivities = [
    { 
      id: 1, 
      type: 'Walk', 
      date: 'Today, 8:30 AM', 
      duration: '30 minutes', 
      metrics: '2.3 miles'
    },
    { 
      id: 2, 
      type: 'Yoga', 
      date: 'Today, 6:00 AM', 
      duration: '45 minutes', 
      metrics: 'Flexibility focus'
    },
    { 
      id: 3, 
      type: 'Meditation', 
      date: 'Yesterday, 9:00 PM', 
      duration: '15 minutes', 
      metrics: 'Stress reduction'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-green-600">Health Log</h1>
          
          {/* Tab navigation */}
          <div className="flex border-b border-gray-200 mt-4">
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'overview' 
                  ? 'border-b-2 border-green-600 text-green-600' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'activities' 
                  ? 'border-b-2 border-green-600 text-green-600' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('activities')}
            >
              Activities
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'trends' 
                  ? 'border-b-2 border-green-600 text-green-600' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('trends')}
            >
              Trends
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {activeTab === 'overview' && (
          <>
            {/* Today's summary */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Today's Summary</h2>
                <div className="text-sm text-gray-500">March 30, 2025</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <div className="mr-2 w-5 h-5">
                          {metric.icon}
                        </div>
                        <span className="text-sm text-gray-700">{metric.name}</span>
                      </div>
                      <div className={`text-xs px-1.5 py-0.5 rounded ${
                        metric.status === 'good' ? 'bg-green-100 text-green-700' :
                        metric.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {metric.change.startsWith('+') ? `↑ ${metric.change}` : 
                         metric.change.startsWith('-') ? `↓ ${metric.change}` : 
                         `- ${metric.change}`}
                      </div>
                    </div>
                    <div className="font-semibold text-xl text-gray-800">
                      {metric.value} <span className="text-sm font-normal text-gray-500">{metric.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent activities */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
                <button className="text-sm text-green-600">See All</button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <div className="bg-gray-100 rounded-full p-3 mr-3">
                      <Activity className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{activity.type}</div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">{activity.duration}</div>
                      <div className="text-xs text-gray-500">{activity.metrics}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Add activity button */}
            <button className="w-full py-3 text-green-600 font-medium flex items-center justify-center bg-white rounded-xl shadow-sm">
              <Plus className="h-4 w-4 mr-2" /> Log New Activity
            </button>
          </>
        )}
        
        {activeTab === 'activities' && (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">Activity Calendar</h3>
            <p className="text-gray-500 max-w-xs mx-auto mb-6">
              Track and view your activities over time. Coming soon in the next update!
            </p>
          </div>
        )}
        
        {activeTab === 'trends' && (
          <div className="text-center py-12">
            <TrendingUp className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-800 mb-2">Health Trends</h3>
            <p className="text-gray-500 max-w-xs mx-auto mb-6">
              View your health trends and progress over time. Coming soon in the next update!
            </p>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
}
