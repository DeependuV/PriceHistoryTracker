"use client";
import { useRouter } from "next/navigation";

export default function TopStores() {
  const stores = [
    {
      id: 1,
      name: "Amazon",
      logo: "🛒",
      color: "from-orange-400 to-yellow-500",
    },
    {
      id: 2,
      name: "Flipkart",
      logo: "🛍️",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      name: "Myntra",
      logo: "👔",
      color: "from-pink-400 to-red-500",
    },
    {
      id: 4,
      name: "Ajio",
      logo: "👗",
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 5,
      name: "Snapdeal",
      logo: "🏪",
      color: "from-red-400 to-orange-500",
    },
    {
      id: 6,
      name: "Nykaa",
      logo: "💄",
      color: "from-pink-500 to-purple-600",
    },
    {
      id: 7,
      name: "Croma",
      logo: "📱",
      color: "from-green-400 to-teal-500",
    },
    {
      id: 8,
      name: "Tata CLiQ",
      logo: "🏬",
      color: "from-indigo-400 to-blue-500",
    },
    {
      id: 9,
      name: "Meesho",
      logo: "🛒",
      color: "from-violet-400 to-purple-500",
    },
    {
      id: 10,
      name: "FirstCry",
      logo: "👶",
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 11,
      name: "Pepperfry",
      logo: "🪑",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 12,
      name: "Shoppers Stop",
      logo: "👜",
      color: "from-blue-500 to-indigo-600",
    },
  ];
  const router = useRouter();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2
            style={{
              background: "linear-gradient(to right, #3145a8, #2c3562)",
            }}
            className="text-[26px] sm:text-4xl md:text-5xl font-bold bg-clip-text text-white py-2"
          >
            Where Can You Use Price Tracker
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track prices across all your favorite online stores
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {stores.map((store) => (
            <div
              key={store.id}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-transparent overflow-hidden"
            >
              <div
                style={{
                  background: `linear-gradient(to bottom right, ${store.color})`,
                }}
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative flex flex-col items-center justify-center space-y-3">
                <div className="text-4xl md:text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  {store.logo}
                </div>
                <p className="text-sm md:text-base font-semibold text-[#2c3562] text-center">
                  {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            And many more stores are being added regularly!
          </p>
          <button
            onClick={() => router.push('/all-products')}
            style={{
              background: "linear-gradient(to right, #3145a8, #2c3562)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="px-8 py-4 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
