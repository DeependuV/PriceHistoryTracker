export default function WhyRealPrice() {
  const stats = [
    {
      id: 1,
      number: "10+",
      label: "Years of Experience",
      description: "Over a decade of helping shoppers save money",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      number: "3M+",
      label: "Installs",
      description: "Trusted by millions of smart shoppers worldwide",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      id: 3,
      number: "80K+",
      label: "Active Users",
      description: "Join thousands shopping smartly with us",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 4,
      number: "4.8/5",
      label: "Average Rating",
      description: "Highly rated by our satisfied users",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      id: 5,
      number: "₹100M+",
      label: "Total Savings",
      description: "Amount saved till now by using real price tracker",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom right, #2c3562, #3145a8, #2c3562)",
      }}
      className=" text-white py-16 md:py-24"
    >
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-[26px] sm:text-4xl font-bold">
            Why Realpricetracker?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Numbers that speak for our commitment to helping you save
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center space-y-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
            >
              <div className="flex justify-center text-white/90">
                {stat.icon}
              </div>

              <div className="space-y-2">
                <p className="text-3xl lg:text-4xl font-bold">{stat.number}</p>
                <p className="text-lg font-semibold text-gray-100">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://chromewebstore.google.com/detail/flipshope-price-tracker-a/adikhbfjdbjkhelbdnffogkobkekkkej?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#3145a8] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
              Install to Shop Smartly
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}