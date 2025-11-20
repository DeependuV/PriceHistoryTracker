"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import ProductCard from "@/components/commmonComponents/ProductCard";

interface ProductData {
  _id: string;
  sid: number;
  pid: string;
  price: number;
  mrp: number;
  title: string;
  imgurl: string;
  brand?: string;
  rating?: number;
  rating_count?: number;
  stock: number;
  pt1id: string;
}

interface PriceDropsSectionProps {
  products?: any;
  loading?: boolean;
}

const PriceDropsSection: React.FC<PriceDropsSectionProps> = ({ 
  products = [], 
  loading = false 
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const pageTitles: Record<string, string> = {
    "/amazon-price-tracker": "Top Amazon Price Drops Right Now",
    "/flipkart-price-tracker": "Top Flipkart Price Drops Right Now",
    "/croma-price-tracker": "Top Croma Price Drops Right Now",
    "/myntra-price-tracker": "Top Myntra Price Drops Right Now",
    "/ajio-price-tracker": "Top Ajio Price Drops Right Now",
  };

  const pageDescriptions: Record<string, string> = {
    "/amazon-price-tracker": "Popular Amazon products with the latest price drops.",
    "/flipkart-price-tracker": "Popular Flipkart products with the latest price drops.",
    "/croma-price-tracker": "Popular Croma products with the latest price drops.",
    "/myntra-price-tracker": "Popular Myntra fashion deals with price drops.",
    "/ajio-price-tracker": "Popular Ajio fashion deals with price drops.",
  };

  // default fallback
  const title = pageTitles[pathname] || "Recent Price Drops";
  const description =
    pageDescriptions[pathname] ||
    "Check out the latest price reductions we've tracked for you";

  const handleTrackProduct = (pid: string) => {
    console.log("Tracking product:", pid);
    // Implement your tracking logic here
  };

  // console.log(products[0], "checking in normal components")

  return (
    <section className="w-full py-12 sm:py-20 px-4 bg-gray-50">
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
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
                style={{
                  borderColor: "#3145a8 transparent transparent transparent",
                }}
              ></div>
            </div>
          </div>
        ) : (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {products.length > 0 ? (
                products.map((product  :any) => (
                  <ProductCard
                    key={product._id}
                    title={product.title}
                    imgurl={product.imgurl}
                    price={product.price}
                    mrp={product.mrp}
                    brand={product.brand}
                    rating={product.rating}
                    rating_count={product.rating_count}
                    pid={product.pid}
                    onTrack={handleTrackProduct}
                    sid={product.sid}
                    pt1id={product.pt1id}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-xl text-gray-600">No products available</p>
                </div>
              )}
            </div>

            {/* Explore More Button */}
            {products.length > 0 && (
              <div className="flex justify-center items-center pt-10">
                <button
                  onClick={() => router.push("/all-products")}
                  className="w-full sm:w-auto px-8 py-4 bg-[#3145a8] text-white rounded-lg font-semibold text-lg hover:bg-[#2138ad] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Explore More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PriceDropsSection;