"use client";

export default function HeroSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom right, #3145a8, #2c3562, #3145a8)",
      }}
      className=" text-white"
    >
      <div className="max-w-[1444px] flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 ">
        <div className="max-w-4xl mx-auto text-left space-y-8 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The ultimate price tracking tool for online shoppers
          </h1>

          <div className="flex justify-center items-center pt-4">
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
        {/* <Image src={'/assets/images/priceTracker2.png'} alt="price-drop-image" height={600} width={400}/> */}
      </div>
    </section>
  );
}
