"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Products", path: "/products" },
        { name: "Manufacturing", path: "/manufacturing" },
        { name: "Industries", path: "/industries" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact-us" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-[#011945] text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Image
                    src="/SAJJAN.jpg"   // 🔥 Put your logo path here
                    alt="Company Logo"
                    width={150}
                    height={50}
                    priority
                />

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`transition duration-300 ${pathname === link.path
                                    ? "text-[color:var(--primary)]"
                                    : "text-gray-300 hover:text-[color:var(--primary)]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Get a Quote */}
                    <Link
                        href="/contact-us"
                        className="primary-btn"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden px-6 pb-4 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block transition duration-300 ${pathname === link.path
                                    ? "text-[color:var(--primary)]"
                                    : "text-gray-300 hover:text-[color:var(--primary)]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="contact-us"
                        onClick={() => setIsOpen(false)}
                        className="block font-medium transition duration-300 text-gray-300 hover:text-[color:var(--primary)]"
                    >
                        Get a Quote
                    </Link>
                </div>
            )}
        </nav>
    );
}