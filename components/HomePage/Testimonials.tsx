"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  // role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sujla Motors",
    // role: "Fashion Enthusiast",
    content:
      "Flipshope extension is a gud app. Pls try this application and u will enjoy big savings and simple price monitoring. Highly recommend!",
    rating: 5,
    avatar: "SM",
  },
  {
    id: 2,
    name: "Shubham Roy",
    // role: "Tech Professional",
    content:
      "The Price Graph Feature is really amazing ! It gives me the expert data I need to avoid fake sales and buy at the lowest price. Seriously a powerful and trustworthy price tracker.",
    rating: 5,
    avatar: "SR",
  },
  {
    id: 3,
    name: "Tarun Sharma",
    // role: "Smart Shopper",
    content:
      "Best price tracker extension, seriously. It helped me save monies by providing such amazin' deals and great coupons. Big thanks to Flipshope team.",
    rating: 5,
    avatar: "TS",
  },
  {
    id: 4,
    name: "Shubham Kumar",
    // role: "Budget-Conscious Dad",
    content:
      "Must say, wonderful shopping extension. I totaly luv the accurate price tracking feature. It gives me confidence I am always getting the lowest price online. Five stars!",
    rating: 5,
    avatar: "SK",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    // role: "Online Shopping Expert",
    content:
      "The Auto Buy feature is a life saver! I was able to snag that hard-to-get item during the flash sale with no hassel. Its great experience. Get this extension now!",
    rating: 5,
    avatar: "SR",
  },
  {
    id: 6,
    name: "Arjun Singh",
    // role: "Gadget Lover",
    content:
      "Flipshope's price alerts are soo reliable. My targeted price drop was notified instantly. This price tracker gives me so much peace of mind and saves me cash, yay!",
    rating: 5,
    avatar: "AS",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[26px] sm:text-4xl md:text-5xl font-bold text-[#2c3562]">
            What People Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied users who are saving money every day
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  style={{
                    background: "linear-gradient(to right, #3145a8, #2c3562)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#2c3562]">
                    {testimonial.name}
                  </p>
                  {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div
                style={{
                  background: "linear-gradient(to right, #3145a8, #2c3562)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="w-12 h-12 rounded-full  flex items-center justify-center text-white font-semibold"
              >
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <p className="font-semibold text-[#2c3562]">
                  {testimonials[currentIndex].name}
                </p>
                {/* <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].role}
                </p> */}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-[#3145a8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[#3145a8] w-8"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-[#3145a8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
