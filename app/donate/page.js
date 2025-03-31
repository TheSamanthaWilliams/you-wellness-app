"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Heart, ArrowLeft, Globe, Users, PawPrint } from 'lucide-react';

export default function DonatePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [donationAmount, setDonationAmount] = useState('10');
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const categories = [
    {
      id: 'animals',
      name: 'Animals',
      icon: <PawPrint className="h-8 w-8 text-orange-500" />,
      description: 'Support animal welfare, conservation, and rescue efforts worldwide.',
      placeholder: 'Your donation helps protect endangered species, support animal shelters, and promote ethical treatment of animals.',
      charities: [
        { id: 'charity1', name: 'Animal Welfare Fund', description: 'Helping animals in need around the world.' },
        { id: 'charity2', name: 'Wildlife Conservation Initiative', description: 'Protecting endangered species and their habitats.' },
        { id: 'charity3', name: 'Pet Rescue Network', description: 'Finding homes for abandoned and stray animals.' }
      ]
    },
    {
      id: 'earth',
      name: 'Earth',
      icon: <Globe className="h-8 w-8 text-green-500" />,
      description: 'Contribute to environmental conservation, climate action, and sustainability efforts.',
      placeholder: 'Your donation supports reforestation projects, ocean cleanup initiatives, and sustainable development programs.',
      charities: [
        { id: 'charity4', name: 'Climate Action Alliance', description: 'Fighting climate change through policy and education.' },
        { id: 'charity5', name: 'Ocean Conservation Fund', description: 'Protecting marine ecosystems and reducing pollution.' },
        { id: 'charity6', name: 'Reforestation Project', description: 'Planting trees and restoring damaged forests worldwide.' }
      ]
    },
    {
      id: 'people',
      name: 'People',
      icon: <Users className="h-8 w-8 text-blue-500" />,
      description: 'Help humanitarian causes, education initiatives, and health programs for communities in need.',
      placeholder: 'Your donation provides access to education, healthcare, and basic necessities for vulnerable populations.',
      charities: [
        { id: 'charity7', name: 'Global Education Fund', description: 'Providing education opportunities in underserved regions.' },
        { id: 'charity8', name: 'Healthcare Access Initiative', description: 'Ensuring medical care for vulnerable communities.' },
        { id: 'charity9', name: 'Hunger Relief Program', description: 'Fighting food insecurity around the world.' }
      ]
    }
  ];

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowThankYou(true);
      
      // Record the donation in user data
      try {
        const userStr = localStorage.getItem('youWellnessUser');
        if (userStr) {
          const userData = JSON.parse(userStr);
          
          // Add donation to user history
          const updatedUserData = {
            ...userData,
            donations: userData.donations || [],
          };
          
          updatedUserData.donations.push({
            category: selectedCategory,
            amount: donationAmount === 'custom' ? customAmount : donationAmount,
            date: new Date().toISOString()
          });
          
          localStorage.setItem('youWellnessUser', JSON.stringify(updatedUserData));
        }
      } catch (error) {
        console.error('Error saving donation:', error);
      }
      
      // Return to dashboard after 3 seconds
      setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
    }, 2000);
  };

  const getSelectedCategory = () => {
    return categories.find(cat => cat.id === selectedCategory);
  };

  const formatAmount = (amount) => {
    return `$${amount}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">YOU Wellness</h1>
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-green-600 flex items-center">
              <ArrowLeft className="h-5 w-5 mr-1" /> Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {showThankYou ? (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Donation!</h2>
            <p className="text-gray-600 mb-6">
              Your contribution will make a meaningful impact. We're redirecting you to your dashboard.
            </p>
            <div className="animate-pulse text-green-600">Redirecting...</div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Make a Difference</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Support causes that align with your values. Your donation contributes to a healthier planet, 
                compassionate treatment of animals, and improved lives for people in need.
              </p>
            </div>

            {!selectedCategory ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {categories.map((category) => (
                  <div 
                    key={category.id} 
                    className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    <div className="flex justify-center mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-center text-sm">{category.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-6">
                <button 
                  className="text-gray-600 hover:text-green-600 flex items-center mb-6"
                  onClick={() => setSelectedCategory(null)}
                >
                  <ArrowLeft className="h-5 w-5 mr-1" /> Back to categories
                </button>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    {getSelectedCategory().icon}
                    <h3 className="text-2xl font-bold text-gray-800 ml-3">{getSelectedCategory().name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{getSelectedCategory().placeholder}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Select a Charity (Placeholders)</h4>
                  <div className="space-y-3">
                    {getSelectedCategory().charities.map((charity) => (
                      <div 
                        key={charity.id} 
                        className="border border-gray-200 rounded-lg p-4 hover:border-green-500 cursor-pointer"
                      >
                        <h5 className="font-medium text-gray-800">{charity.name}</h5>
                        <p className="text-sm text-gray-600">{charity.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Choose Donation Amount</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {['5', '10', '25', '50'].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-2 px-4 rounded-md ${
                            donationAmount === amount 
                              ? 'bg-green-600 text-white' 
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                          onClick={() => handleAmountSelect(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="customAmount"
                        name="donationAmount"
                        checked={donationAmount === 'custom'}
                        onChange={() => setDonationAmount('custom')}
                        className="mr-2"
                      />
                      <label htmlFor="customAmount" className="mr-3">Custom amount:</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">$</span>
                        <input
                          type="number"
                          min="1"
                          step="1"
                          value={customAmount}
                          onChange={handleCustomAmount}
                          className="pl-7 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing || (donationAmount === 'custom' && !customAmount)}
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : `Donate ${formatAmount(donationAmount === 'custom' ? customAmount : donationAmount)}`}
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
