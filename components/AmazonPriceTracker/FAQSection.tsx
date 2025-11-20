// components/AmazonTracker/FAQSection.tsx
'use client';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is the Amazon price tracker?",
      answer: "Amazon Price Tracker is a smart tool that monitors the price fluctuations of your desired product on Amazon. You can keep track of when the price is going up and when it is going down, so that you can get an honest picture of the prices of the product you want to buy."
    },
    {
      question: "How does the Amazon price tracker help in shopping smartly?",
      answer: "An Amazon price tracker helps you shop smartly by using tools that let you track the prices of products you want to buy from Amazon. In addition, the price drop alert tool sends you a notification the moment the price of your desired product drops on Amazon. You can save alot of money and time after using these smart tools."
    },
    {
      question: "How to get notified when amazon product price drop?",
      answer: "To be notified when the Amazon product price drops, you need to set a price drop alert in your browser extension, allowing you to learn about the accurate time to buy the product you want."
    },
    {
      question: "Why use realpricetracker for tracking amazon product price?",
      answer: "You should use a real price tracker to track the prices of the products available on Amazon. The real price tracker helps you track the price fluctuations of the product over the last 90 days. This tracker is a smart way of shopping online. "
    },
    {
      question: "Is using a third-party extension safe for my Amazon account?",
      answer: "Yes, using a third-party extension is completly safe for your Amazon account. In fact, the extension will help you shop in a better way and let you save money while shopping online."
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
            Everything you need to know about our Amazon price tracker
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