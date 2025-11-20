// components/AmazonTracker/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-[1444px] mx-auto">
        <div className="text-center space-y-6">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl  font-bold leading-tight"
            style={{
              background: "linear-gradient(to bottom right, #3145a8, #2c3562, #3145a8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Ultimate Myntra Price Tracker tool
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Never miss Myntra deal, check full pricing data using our powerful Myntra price tracker tool
          </p>
          
          <div className="pt-8">
            <button 
              className="px-10 py-4 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(to right, #3145a8, #2c3562)",
              }}
            >
              Start Tracking Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;