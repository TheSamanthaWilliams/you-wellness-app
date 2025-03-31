"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, User, Mail, Lock } from 'lucide-react';

export default function SignUp() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    wellnessGoals: {
      mind: false,
      body: false,
      spirit: false
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        wellnessGoals: {
          ...prev.wellnessGoals,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  }

  function validateStep1() {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function validateStep2() {
    const newErrors = {};
    
    if (!formData.wellnessGoals.mind && !formData.wellnessGoals.body && !formData.wellnessGoals.spirit) {
      newErrors.wellnessGoals = 'Please select at least one wellness goal';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNextStep() {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (step === 2 && validateStep2()) {
      setIsSubmitting(true);
      
      try {
        // In a real app, you would make an API call to create the user account
        // For demo purposes, we'll simulate a successful signup after a delay
        setTimeout(() => {
          // Store user data in localStorage for demo purposes
          localStorage.setItem('youWellnessUser', JSON.stringify({
            name: formData.name,
            email: formData.email,
            wellnessGoals: formData.wellnessGoals,
            isLoggedIn: true
          }));
          
          // Redirect to dashboard
          router.push('/dashboard');
        }, 1500);
      } catch (error) {
        console.error('Signup error:', error);
        setErrors({ submit: 'An error occurred during signup. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-600">YOU Wellness</h1>
          <p className="mt-2 text-gray-600">Begin your journey to holistic wellbeing</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
          {/* Step indicators */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${step >= 1 ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300 text-gray-500'}`}>
                1
              </div>
              <div className={`h-1 w-12 ${step >= 2 ? 'bg-green-600' : 'bg-gray-300'}`}></div>
              <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${step >= 2 ? 'bg-green-600 border-green-600 text-white' : 'border-gray-300 text-gray-500'}`}>
                2
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Create Your Account</h2>
                
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
