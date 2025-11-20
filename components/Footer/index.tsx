import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to bottom right, #2c3562, #3145a8)",
      }}
      className=" text-white"
    >
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">RealPrice Tracker</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Your smart shopping companion. Track prices, get alerts, and save
              money on every purchase.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-products"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Price Trackers */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Price Trackers</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/amazon-price-tracker"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  Amazon Price Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/flipkart-price-tracker"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  Flipkart Price Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/myntra-price-tracker"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  Myntra Price Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/ajio-price-tracker"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  Ajio Price Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/croma-price-tracker"
                  className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
                >
                  Croma Price Tracker
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} RealPrice Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}