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
      question: "What does a realpricetracker do?",
      answer:
        "A realpricetracker tracks the last six months' price history of all your desired products from various stores, like Amazon, Myntra, Flipkart, Ajio, etc."
    },
    {
      question: "How can Realpricetracker help me save money?",
      answer:
        "With the help of our Realpricetracker, you can check the price fluctuations of the products you want and make decisions about when is the right time to buy them."
    },
    {
      question: "Is the Realpricetracker free to use?",
      answer:
        "Yes, our Realpricetracker extension is completely free to use."
    },
    {
      question: "How to add a price alert?",
      answer:
        "You can add a price alert using the following steps:\n\n" +
        "• First, install our browser extension and log in to your account\n" +
        "• Open your desired store to shop (Amazon, Myntra, Flipkart, Ajio)\n" +
        "• Click on the product you want to buy\n" +
        "• Tap on our icon located on the right side of the screen\n" +
        "• Click on the “Add Alert” button\n" +
        "• All set! You will receive a notification the moment the price of that product drops."
    },
    {
      question: "Can the Realpricetracker apply the best coupons automatically?",
      answer:
        "Yes, our Realpricetracker extension can automatically apply the best coupons to your favourite product."
    },
    {
      question: "What does the price comparison feature do?",
      answer:
        "Our price comparison feature compares the prices of your desired product from multiple stores in one place, so you don’t have to jump from one app to another."
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
              background:
                "linear-gradient(to bottom right, #3145a8, #2c3562, #3145a8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our price tracker
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
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 whitespace-pre-line"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
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
