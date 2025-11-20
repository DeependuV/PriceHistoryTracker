// components/FlipkartTracker/FAQSection.tsx
'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Extract store name from pathname -> flipkart-price-tracker → Flipkart
  const storeName = pathname
    ?.split("-")[0]
    ?.replace("/", "")
    ?.trim() || "Store";

  const formattedStore = storeName.charAt(0).toUpperCase() + storeName.slice(1);

  // SAME FAQs for all routes — only {formattedStore} changes
  const faqs: FAQItem[] = [
    {
      question: `What is the ${formattedStore} price tracker?`,
      answer: `${formattedStore} Price Tracker helps you monitor the prices of products you want to buy from ${formattedStore}.`
    },
    {
      question: `How does the ${formattedStore} price tracker help in shopping smartly?`,
      answer: `By analysing the price graph, spotting price fluctuations, and setting price drop alerts, the ${formattedStore} price tracker helps you shop smartly online.`
    },
    {
      question: `How to get notified when a ${formattedStore} product price drops?`,
      answer: `You can set a price drop alert on your desired ${formattedStore} product. You will be notified instantly when the price reduces.`
    },
    {
      question: `Why use RealPriceTracker for tracking ${formattedStore} product prices?`,
      answer: `You get accurate price history for the last 90 days and alerts to know the best time to buy on ${formattedStore}.`
    },
    {
      question: `Does RealPriceTracker apply ${formattedStore} coupons automatically?`,
      answer: `Yes, RealPriceTracker finds and applies the best available ${formattedStore} coupons automatically at checkout.`
    },
    {
      question: `Is using a third-party extension safe for my ${formattedStore} account?`,
      answer: `Yes, RealPriceTracker is 100% safe and secure for your ${formattedStore} account.`
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-[1444px] mx-auto">

        <div className="text-center space-y-4 mb-12">
          <h2 
            className="text-[26px] md:text-4xl font-bold"
            style={{
              background: "linear-gradient(to bottom right, #3145a8, #2c3562, #3145a8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-600">
            Everything you need to know about our {formattedStore} price tracker
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#2c3562] pr-8">
                  {faq.question}
                </span>
                <span 
                  className="text-2xl font-bold text-[#3145a8] shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}
                >
                  +
                </span>
              </button>
              
              <div 
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
