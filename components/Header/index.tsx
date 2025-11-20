"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // event.target is EventTarget, narrow to Node
      const target = event.target as Node | null;
      if (dropdownRef.current && target && !dropdownRef.current.contains(target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const priceTrackers = [
    { name: "Amazon Price Tracker", href: "/amazon-price-tracker" },
    { name: "Flipkart Price Tracker", href: "/flipkart-price-tracker" },
    { name: "Myntra Price Tracker", href: "/myntra-price-tracker" },
    { name: "Ajio Price Tracker", href: "/ajio-price-tracker" },
    { name: "Croma Price Tracker", href: "/croma-price-tracker" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <span
              style={{
                background: "linear-gradient(to right, #3145a8, #2c3562)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent"
            >
              RealPrice Tracker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#2c3562] hover:text-[#3145a8] font-medium transition-colors duration-200"
            >
              Home
            </Link>
            
            {/* Desktop Dropdown */}
            <div
              className="relative "
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              ref={dropdownRef}
              // onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-[#2c3562] hover:text-[#3145a8] font-medium transition-colors duration-200 flex items-center cursor-pointer">
                Price Trackers
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 cursor-pointer ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {priceTrackers.map((tracker) => (
                    <Link
                      key={tracker.href}
                      href={tracker.href}
                      className="block px-4 py-2 text-[#2c3562] hover:bg-gray-50 hover:text-[#3145a8] transition-colors duration-200"
                    >
                      {tracker.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/all-products"
              className="text-[#2c3562] hover:text-[#3145a8] font-medium transition-colors duration-200"
            >
              All Products
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#2c3562]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-[#2c3562] hover:text-[#3145a8] font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="w-full text-left text-[#2c3562] hover:text-[#3145a8] font-medium transition-colors duration-200 flex items-center justify-between"
                >
                  Price Trackers
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isMobileDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {priceTrackers.map((tracker) => (
                      <Link
                        key={tracker.href}
                        href={tracker.href}
                        className="block text-[#2c3562] hover:text-[#3145a8] transition-colors duration-200 py-1"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileDropdownOpen(false);
                        }}
                      >
                        {tracker.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/all-products"
                className="text-[#2c3562] hover:text-[#3145a8] font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}