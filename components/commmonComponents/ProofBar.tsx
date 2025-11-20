"use client";
import React from "react";
import { usePathname } from "next/navigation";

const ProofBar: React.FC = () => {
  const pathname = usePathname();

  // Get the last part of the URL: "amazon-price-tracker"
  const slug = pathname?.split("/").pop() ?? "";

  // Extract store name before "-price-tracker"
  const storeSlug = slug.replace("-price-tracker", "");

  // Capitalize first letter
  const storeName = storeSlug
    ? storeSlug.charAt(0).toUpperCase() + storeSlug.slice(1)
    : "Amazon";

  const stats = [
    {
      value:
        storeName === "Amazon"
          ? "300M+"
          : storeName === "Flipkart"
          ? "150M+"
          : "90M+",
      label: `${storeName} product prices being tracked`,
    },
    { value: "3M+", label: "Trusted by users" },
    { value: "4.8/5", label: "Strong rating" },
  ];

  return (
    <section
      className="w-full py-12 px-4"
      style={{
        background:
          "linear-gradient(to bottom right, #3145a8, #2c3562, #3145a8)",
      }}
    >
      <div className="max-w-[1444px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </h3>
              <p className="text-lg text-gray-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofBar;
