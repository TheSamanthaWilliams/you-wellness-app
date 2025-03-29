export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-6xl font-light tracking-wider text-you-green mb-4">
          YOU
        </h1>
        <h2 className="text-2xl font-light tracking-widest text-you-green mb-8">
          W E L L N E S S
        </h2>
        
        <div className="w-24 h-24 bg-you-green/20 rounded-full mx-auto flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-you-green/40 rounded-full"></div>
        </div>
        
        <p className="text-gray-600 mb-8">
          Your journey to mind, body, and spirit wellness
        </p>
        
        <button className="bg-you-green text-white px-8 py-3 rounded-full">
          Get Started
        </button>
      </div>
    </main>
  );
}
