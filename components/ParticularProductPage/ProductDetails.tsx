"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { Share2 } from "lucide-react";
import { ProductData } from "@/types/product";
import { buyNowProduct } from "@/utils/buyApi";

interface ProductDetailsProps {
  productData: ProductData;
  // storeComparison: StoreComparison[];
}

// Store name mapping
const storeInfo: { [key: number]: { label: string; favIcon: string; url: string } } = {
  1: {
    label: "Flipkart",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=flipkart.com",
    url: "https://www.flipkart.com",
  },
  2: {
    label: "Amazon",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=amazon.in",
    url: "https://www.amazon.in",
  },
  3: {
    label: "ShopClues",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=shopclues.com",
    url: "https://www.shopclues.com",
  },
  4: {
    label: "Snapdeal",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=snapdeal.com",
    url: "https://www.snapdeal.com",
  },
  5: {
    label: "JioMart",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=jiomart.com",
    url: "https://www.jiomart.com",
  },
  6: {
    label: "Tata CLiQ",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=tatacliq.com",
    url: "https://www.tatacliq.com",
  },
  7: {
    label: "Myntra",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=myntra.com",
    url: "https://www.myntra.com",
  },
  8: {
    label: "Nykaa",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=nykaa.com",
    url: "https://www.nykaa.com",
  },
  9: {
    label: "Ajio",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=ajio.com",
    url: "https://www.ajio.com",
  },
  10: {
    label: "Pepperfry",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=pepperfry.com",
    url: "https://www.pepperfry.com",
  },
  11: {
    label: "FirstCry",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=firstcry.com",
    url: "https://www.firstcry.com",
  },
  12: {
    label: "Nykaa Fashion",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=nykaafashion.com",
    url: "https://www.nykaafashion.com",
  },
  13: {
    label: "Croma",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=croma.com",
    url: "https://www.croma.com",
  },
  14: {
    label: "Reliance Digital",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=reliancedigital.in",
    url: "https://www.reliancedigital.in",
  },
  15: {
    label: "Meesho",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=meesho.com",
    url: "https://www.meesho.com",
  },
  16: {
    label: "Purplle",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=purplle.com",
    url: "https://www.purplle.com",
  },
  17: {
    label: "Shopsy",
    favIcon: "https://www.google.com/s2/favicons?sz=64&domain=shopsy.in",
    url: "https://www.shopsy.in",
  },
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ productData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  // const router = useRouter();
  const images: string[] = [
    productData.imgurl,
    productData.imgurl,
    productData.imgurl,
    productData.imgurl,
  ];

  const handlePrevImage = (): void => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (): void => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const discount: number = Math.round(
    ((productData.mrp - productData.price) / productData.mrp) * 100
  );

  const handleBuyNow = async (): Promise<void> => {
    // setIsLoading(true);
    try {
      // Call API to log the purchase
      const urlData = await buyNowProduct(
        productData.sid, 
        productData.pid,
        // productData.url // Pass product URL if available
      );
      
      // Redirect to the redirect page
      const redirectUrl = urlData.data.data;

      // console.log(urlData.data.data, "checking here")
      
      // router.push(redirectUrl);
      window.open(redirectUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error('Buy now failed:', error);
      alert('Failed to initiate purchase. Please try again.');
      // setIsLoading(false);
    }
    // Don't set isLoading to false here as we're navigating away
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-8">
        {/* Left: Images */}
        <div className="flex items-center justify-center gap-3 ">
          {/* Thumbnail Slider */}
          {/* <div className="flex flex-col gap-3 overflow-x-auto p-3 w-1/5 h-full border border-[#cdcdcd] rounded-lg">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`shrink-0 w-full h-20 rounded-lg overflow-hidden border-2 transition ${
                  currentImageIndex === idx ? 'border-[#3145a8]' : 'border-gray-200'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-contain bg-gray-50 p-1" />
              </button>
            ))}
          </div> */}

          <div className="relative bg-gray-50 rounded-xl h-full overflow-hidden border border-[#cdcdcd] w-4/5">
            <img
              src={images[currentImageIndex]}
              alt={productData.title}
              className="w-[70%] h-full object-contain p-4 mx-auto"
            />
            {/* <button 
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
            >
              <ChevronLeft className="w-5 h-5 text-[#3145a8]" />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
            >
              <ChevronRight className="w-5 h-5 text-[#3145a8]" />
            </button> */}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-gray-600">
                {storeInfo[productData.sid].label || "Store"}
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {productData.title}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < Math.floor(parseFloat(productData.rating))
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600">
                ({productData.rating_count.toLocaleString("en-IN")})
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-xl font-bold text-[#3145a8]">
                ₹{productData.price.toLocaleString("en-IN")}
              </span>
              <span className="text-lg text-gray-400 line-through">
                ₹{productData.mrp.toLocaleString("en-IN")}
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {discount}% off
              </span>
            </div>

            <div className="flex gap-3 mb-6">
              <button onClick={handleBuyNow} className="flex-1 bg-[#3145a8] hover:bg-[#2c3562] cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition">
                Buy Now
              </button>
              <a
                href="https://chromewebstore.google.com/detail/flipshope-price-tracker-a/adikhbfjdbjkhelbdnffogkobkekkkej?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-[#3145a8] font-semibold py-3 px-6 rounded-lg transition">
                  Set Alert via Extension
                </button>
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <button className="flex items-center gap-2 text-green-600 hover:text-green-700 transition text-xs sm:text-sm md:text-base">
                <Share2 className="w-5 h-5" />
                <span>Share on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
