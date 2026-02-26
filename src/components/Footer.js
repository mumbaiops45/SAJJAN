"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Manufacturing", path: "/manufacturing" },
    { name: "Industries", path: "/industries" },
    { name: "Why SAJJAN", path: "/why-sajjan" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const productLinks = [
    { name: "CAST BELTS AND SPARES", path: "/products" },
    { name: "HEAT TREATMENT FIXTURES", path: "/products" },
    { name: "PARTS FOR FOOD MACHINERIES", path: "/products" },
    { name: "ROLLERS AND RADIANT TUBES", path: "/products" },
    { name: "SEPARATORS AND DECANTERS", path: "/products" },
    { name: "GALVANIZING LINE SPARES", path: "/products" },
    { name: "PETROCHEMICAL INDUSTRY", path: "/products" },
    { name: "CEMENT INDUSTRY", path: "/products" },
  ];

  return (
    <footer className="bg-[#011945] text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Left Section - Logo + About */}
        <div>
          <Image
            src="/SAJJAN.jpg"   // 🔥 Put your logo path here
            alt="Company Logo"
            width={150}
            height={50}
            priority
          />
          <p className="text-sm leading-7 pt-5">

            SAJJAN is a pioneer in the production of heat-resistant tool steel and stainless steel castings, manufactures through centrifugal, static and investment casting processes.
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
                  className={`transition duration-300 ${pathname === link.path
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
                  className={`transition duration-300 ${pathname === product.path
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

          <ul className="space-y-4">
            <li className="flex justify-START align-center gap-2"><MapPin size={22} className="text-[var(--primary)] flex-shrink-0" /> INDIA | GERMANY | ITALY | SCANDINAVIA | FRANCE | USA | JAPAN</li>
            <li className="flex justify-START align-center gap-2"><Phone size={22} className="text-[var(--primary)] flex-shrink-0" /> +91 84471 17195</li>
            <li className="flex justify-START align-center gap-2"><Mail size={22} className="text-[var(--primary)] flex-shrink-0" /> info@example.com</li>
          </ul>
          {/* ===== SOCIAL MEDIA LINKS ===== */}
          <div className="mt-12 flex items-center justify-start gap-3">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white hover:text-white hover:bg-[var(--primary)] transition duration-300"
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white hover:text-white hover:bg-[var(--primary)] transition duration-300"
            >
              <Twitter size={22} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white hover:text-white hover:bg-[var(--primary)] transition duration-300"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white hover:text-white hover:bg-[var(--primary)] transition duration-300"
            >
              <Youtube size={22} />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-20 py-5 flex items-center justify-between text-sm text-gray-400">

          {/* Left Side */}
          <div>
            © {new Date().getFullYear()} LOGO. All Rights Reserved.
          </div>

          {/* Right Side */}
          <div>
            <Link
              href="/terms-and-conditions"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}