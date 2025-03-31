"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Heart, TrendingUp, Plus, Award, User, Activity, Brain, Sun } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Check if user is logged in
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('youWellnessUser');
      if (userStr) {
        try {
          const userData = JSON.parse(userStr);
          if (userData.isLoggedIn) {
            setUser(userData);
          } else {
            router.push('/');
          }
        } catch (e) {
          router.push('/');
        }
      } else {
        router.push('/');
      }
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return null; // Will redirect to home
  }

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      category: 'mind',
      name: 'Meditation',
      duration: '15 min',
      timestamp: 'Today, 9:00 AM',
      icon: <Brain className="w-5 h-5 text-green-500" />
    },
    {
      id: 2,
      category: 'body',
      name: 'Morning Walk',
      duration: '30 min',
      timestamp: 'Today, 7:30 AM',
      icon: <Activity className="w-5 h-5 text-yellow-500" />
    },
    {
      id: 3,
      category: 'spirit',
      name: 'Gratitude Journal',
      duration: '10 min',
      timestamp: 'Yesterday, 10:00 PM',
      icon: <Sun className="w-5 h-5 text-blue-500" />
    }
  ];
  
  // Goals
  const goals = [
    {
      id: 1,
      category: 'mind',
      name: 'Meditate daily',
      target: 21,
      progress: 14,
      unit: 'days',
      percentage: 67
    },
    {
      id: 2,
      category: 'body',
      name: 'Exercise 3x weekly',
      target: 12,
      progress: 7,
      unit: 'sessions',
      percentage: 58
    },
    {
      id: 3,
      category: 'spirit',
      name: 'Read for growth',
      target: 30,
      progress: 18,
      unit: 'minutes/day',
      percentage: 60
    }
  ];
  
  // Wellness scores
  const wellnessScores = {
    mind: { value: 80, status: 'Thriving', color: '#8BD48E' },
    body: { value: 65, status: 'Progressing', color: '#F9C74F' },
    spirit: { value: 72, status: 'Balanced', color: '#90BEF8' }
  };
  
  // Insights
  const insights = [
    {
      id: 1,
      title: 'Consistent Meditation',
      description: 'You've been meditating regularly. Great job maintaining this healthy habit!',
      category: 'mind'
    },
    {
      id: 2,
      title: 'Boost Your Movement',
      description: 'Try to increase your physical activity this week to reach your goals.',
      category: 'body'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">YOU Wellness</h1>
          <div className="flex items-center space-x-3">
            <Link
              href="/donate"
              className="p-2 rounded-full text-green-600 hover:bg-green-50"
            >
              <Heart className="h-5 w-5" />
            </Link>
            <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center">
              {user.name ? user.name.charAt(0) : <User className="h-5 w-5" />}
            </div>
          </div>
        </div>
        
        {/* Tab navigation */}
        <div className="container mx-auto px-4">
          <div className="flex border-b border-gray-200">
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
                activeTab === 'goals' 
                  ? 'border-b-2 border-green-600 text-green-600' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('goals')}
            >
              Goals
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'insights' 
                  ? 'border-b-2 border-green-600 text-green-600' 
                  : 'text-
