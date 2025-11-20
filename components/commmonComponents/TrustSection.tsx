// components/AmazonTracker/TrustSection.tsx
import React from 'react';

const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      title: "10+ year experience",
      description: "Over a decade of expertise in price tracking technology",
      icon: "⏰"
    },
    {
      title: "₹100 Million+ saved",
      description: "Helping millions of users save on their purchases",
      icon: "💰"
    }
  ];

  return (
    <section 
      className="w-full py-20 px-4"
      style={{
        background: "linear-gradient(to bottom right, #3145a8, #2c3562, #3145a8)",
      }}
    >
      <div className="max-w-[1444px] mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[26px] md:text-4xl font-bold text-white">
            Why we Are the Most Trusted Amazon Price Tracker
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{point.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {point.title}
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;