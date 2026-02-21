"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Manufacturing", path: "/manufacturing" },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const productLinks = [
    { name: "Industrial Valves", path: "/products/industrial-valves" },
    { name: "Pipe Fittings", path: "/products/pipe-fittings" },
    { name: "Pressure Vessels", path: "/products/pressure-vessels" },
    { name: "Heat Exchangers", path: "/products/heat-exchangers" },
    { name: "Custom Components", path: "/products/custom-components" },
  ];

  return (
    <footer className="bg-[#011945] text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Left Section - Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">LOGO</h2>
          <p className="text-sm leading-7">
            We deliver end-to-end industrial manufacturing solutions with
            precision engineering, advanced technology, and long-term
            reliability for global industries.
          </p>
        </div>

        {/* Quick Links (ALL MENU OPTIONS) */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`transition duration-300 ${
                    pathname === link.path
                      ? "text-[color:var(--primary)]"
                      : "hover:text-[color:var(--primary)]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Products Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Our Products
          </h3>
          <ul className="space-y-3">
            {productLinks.map((product) => (
              <li key={product.name}>
                <Link
                  href={product.path}
                  className={`transition duration-300 ${
                    pathname === product.path
                      ? "text-[color:var(--primary)]"
                      : "hover:text-[color:var(--primary)]"
                  }`}
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">
            Contact Information
          </h3>

          <ul className="space-y-4 text-sm">
            <li>📍 Bengaluru, Karnataka 560038</li>
            <li>📞 +91 84471 17195</li>
            <li>✉️ info@example.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} LOGO. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
}