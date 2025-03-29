export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-6xl font-light text-you-green mb-2">
          YOU
        </h1>
        <h2 className="text-2xl font-light tracking-widest text-you-green mb-8">
          WELLNESS
        </h2>
        
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
