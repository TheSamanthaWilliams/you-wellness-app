import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-you-cream p-6">
      <h1 className="text-3xl font-medium text-you-green mb-2">
        Your Wellness Dashboard
      </h1>
      <p className="text-gray-600 mb-8">
        Track your progress across mind, body, and spirit to achieve holistic wellness.
      </p>
      
      {/* Reference design image (you can remove this later) */}
      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2">Design reference:</p>
        <Image 
          src="/images/Page-3-Dashboard.png" 
          alt="Dashboard design" 
          width={300} 
          height={200}
          className="border border-gray-200 rounded"
        />
      </div>
      
      {/* Wellness gauges */}
      <div className="space-y-4">
        {/* Mind section */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-bold text-center mb-3">Mind</h2>
          <div className="flex justify-center">
            <div className="relative w-32 h-32 rounded-full bg-gray-200">
              <div className="absolute inset-2 rounded-full bg-you-green flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">80</div>
                  <div className="text-sm text-white">Thriving</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar sections for Body and Spirit */}
      </div>
    </div>
  );
}
