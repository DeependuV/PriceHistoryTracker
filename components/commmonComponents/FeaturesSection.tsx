"use client";
import React from "react";
import { usePathname } from "next/navigation";

const FeaturesSection: React.FC = () => {
  const pathname = usePathname();

  // Extract store name from URL
  const storeSlug = pathname?.split("/").pop()?.replace("-price-tracker", "") || "Amazon";

  // Capitalize first letter
  const storeName = storeSlug.charAt(0).toUpperCase() + storeSlug.slice(1);

  const features = [
    {
      title: "Price tracking",
      description: `Monitor price history and trends to make informed buying decisions`,
      icon: "📈",
    },
    {
      title: "Instant price drop alert",
      description: `Get notified immediately when your tracked products drop in price`,
      icon: "🔔",
    },
    {
      title: "Price comparison",
      description: `Compare prices across different sellers and time periods`,
      icon: "📊",
    },
    {
      title: "Auto apply coupon",
      description: `Automatically find and apply the best available coupons at checkout`,
      icon: "🎟️",
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-[1444px] mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2
            className="text-[26px] md:text-4xl font-bold"
            style={{
              background:
                "linear-gradient(to bottom right, #3145a8, #2c3562, #3145a8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get the Edge: Realpricetracker Features for {storeName} price tracking
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-linear-to-br from-white to-gray-50 border border-gray-100"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{
                  background: "linear-gradient(to right, #3145a8, #2c3562)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
