export default function WhatWeOffer() {
  const features = [
    {
      id: 1,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#2c3562"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Price History Tracking",
      description:
        "Track the price fluctuations of your desired product with our price history tracking feature. ",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#2c3562"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      title: "Price Drop Alerts",
      description:
        "Get instantly notified after the prices of the products on your wishlist drop. ",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#2c3562"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ),
      title: "Auto Apply Coupons",
      description:
        "No more hassle! We search and apply the best coupons automatically to your favourite products. ",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#2c3562"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Price Comparison",
      description:
        "Compare the prices of the products from multiple stores in one place without switching apps.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2
            style={{
              background: "linear-gradient(to right, #3145a8, #2c3562)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-[26px] sm:text-4xl md:text-5xl font-bold leading-14  bg-clip-text text-transparent"
          >
            Smart Shopping Starts Here
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful Tools That Save You Money
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              style={{
                background:
                  "linear-gradient(to bottom right, #fafafa, #ffffff)", // gray-50 → white
              }}
              className="group p-8 rounded-2xl  border-gray-200 hover:border-[#3145a8] transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  style={{
                    background: "linear-gradient(to right, #3145a8, #2c3562)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="p-4 rounded-2xl  text-white group-hover:scale-110 transition-transform duration-300"
                >
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#2c3562]">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
