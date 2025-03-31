"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BottomNav from '../components/BottomNav';

export default function WellnessQuestionnaire() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    sleepHours: 7,
    stressLevel: 5,
    exerciseFrequency: 3,
    meditationFrequency: 2,
    nutrition: 6,
    energyLevel: 5,
    socialConnection: 7,
    purposeRating: 6
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    {
      id: 'sleepHours',
      question: 'How many hours of sleep do you typically get each night?',
      min: 3,
      max: 12,
      step: 0.5,
      minLabel: 'Less than 4 hours',
      maxLabel: '12+ hours',
      category: 'body'
    },
    {
      id: 'stressLevel',
      question: 'How would you rate your current stress level?',
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Very low',
      maxLabel: 'Very high',
      category: 'mind'
    },
    {
      id: 'exerciseFrequency',
      question: 'How many days per week do you engage in physical activity?',
      min: 0,
      max: 7,
      step: 1,
      minLabel: 'Never',
      maxLabel: 'Daily',
      category: 'body'
    },
    {
      id: 'meditationFrequency',
      question: 'How often do you practice mindfulness or meditation?',
      min: 0,
      max: 7,
      step: 1,
      minLabel: 'Never',
      maxLabel: 'Daily',
      category: 'mind'
    },
    {
      id: 'nutrition',
      question: 'How would you rate your overall nutrition?',
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Poor',
      maxLabel: 'Excellent',
      category: 'body'
    },
    {
      id: 'energyLevel',
      question: 'How would you rate your overall energy level?',
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Very low',
      maxLabel: 'Very high',
      category: 'body'
    },
    {
      id: 'socialConnection',
      question: 'How satisfied are you with your social connections?',
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Not satisfied',
      maxLabel: 'Very satisfied',
      category: 'spirit'
    },
    {
      id: 'purposeRating',
      question: 'How strongly do you feel a sense of purpose in your life?',
      min: 1,
      max: 10,
      step: 1,
      minLabel: 'Not at all',
      maxLabel: 'Very strongly',
      category: 'spirit'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitQuestionnaire();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuestionnaire = () => {
    setIsSubmitting(true);
    
    // Calculate initial scores based on answers
    const calculateScore = (category) => {
      const categoryQuestions = questions.filter(q => q.category === category);
      const categoryAnswers = categoryQuestions.map(q => {
        const value = answers[q.id];
        const normalizedValue = ((value - q.min) / (q.max - q.min)) * 100;
        return normalizedValue;
      });
      
      // Average the normalized values
      return Math.round(
        categoryAnswers.reduce((sum, val) => sum + val, 0) / categoryAnswers.length
      );
    };
    
    const mindScore = calculateScore('mind');
    const bodyScore = calculateScore('body');
    const spiritScore = calculateScore('spirit');
    
    // Get existing user data from localStorage
    const userStr = localStorage.getItem('youWellnessUser');
    if (userStr) {
      const userData = JSON.parse(userStr);
      
      // Update with wellness scores
      const updatedUserData = {
        ...userData,
        wellnessScores: {
          mind: mindScore,
          body: bodyScore,
          spirit: spiritScore
        },
        // Add initial activities and goals based on questionnaire
        activities: [
          {
            id: 1,
            category: 'mind',
            name: 'Meditation',
            duration: '15 min',
            timestamp: new Date().toISOString()
          },
          {
            id: 2,
            category: 'body',
            name: 'Morning Walk',
            duration: '30 min',
            timestamp: new Date().toISOString()
          },
          {
            id: 3,
            category: 'spirit',
            name: 'Gratitude Journal',
            duration: '10 min',
            timestamp: new Date(Date.now() - 86400000).toISOString() // yesterday
          }
        ],
        goals: [
          {
            id: 1,
            category: 'mind',
            name: 'Meditate daily',
            target: 21,
            progress: 14,
            unit: 'days'
          },
          {
            id: 2,
            category: 'body',
            name: 'Exercise 3x weekly',
            target: 12,
            progress: 7,
            unit: 'sessions'
          },
          {
            id: 3,
            category: 'spirit',
            name: 'Read for growth',
            target: 30,
            progress: 18,
            unit: 'minutes/day'
          }
        ]
      };
      
      // Save updated data
      localStorage.setItem('youWellnessUser', JSON.stringify(updatedUserData));
    }
    
    // Redirect to dashboard after a short delay
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pb-20">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">YOU Wellness</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
              <div 
                className="bg-green-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
                style={{ width: `${progress}%` }}>
              </div>
            </div>
            
            <div className="text-right text-sm text-gray-500 mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">{currentQ.question}</h2>
              
              <div className="mt-6">
                <input
                  type="range"
                  id={currentQ.id}
                  name={currentQ.id}
                  min={currentQ.min}
                  max={currentQ.max}
                  step={currentQ.step}
                  value={answers[currentQ.id]}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>{currentQ.minLabel}</span>
                  <span className="font-medium text-gray-800">{answers[currentQ.id]}</span>
                  <span>{currentQ.maxLabel}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-40"
              >
                Previous
              </button>
              
              <button
                type="button"
                onClick={nextQuestion}
                disabled={isSubmitting}
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                {currentQuestion === questions.length - 1 ? (isSubmitting ? 'Loading...' : 'Finish') : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
}
