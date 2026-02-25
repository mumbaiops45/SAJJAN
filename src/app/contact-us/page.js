"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* ===== PAGE MAIN HEADING ===== */}
      <h1 className="pt-20 pb-14 text-center">
        Contact <span className="text-[var(--primary)]">Us</span>
      </h1>

      <section className="px-4 md:px-10 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">

          {/* ===== SUB HEADING ===== */}
          <div className=" mb-16">
            <h2 className="relative inline-block pb-2
                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:w-full
                after:h-1
                after:rounded-full
                after:bg-gradient-to-r
                after:from-[var(--primary)]
                after:to-transparent text-[var(--primary)]">
              Let’s Connect
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl">
              We are always ready to assist you. Reach out to us through any of the
              following contact details and our team will respond promptly.
            </p>
          </div>

          {/* ===== CONTACT CARDS ===== */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* ADDRESS CARD */}
            <a
              href="https://www.google.com/maps?q=Your+Company+Address"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/10 rounded-2xl p-8 text-center hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <MapPin
                  size={40}
                  className="text-[var(--primary)] group-hover:scale-110 transition"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Our Location
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition">
                INDIA | GERMANY | ITALY | SCANDINAVIA | FRANCE | USA | JAPAN
              </p>
            </a>

            {/* PHONE CARD */}
            <a
              href="tel:+911234567890"
              className="group border border-white/10 rounded-2xl p-8 text-center hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <Phone
                  size={40}
                  className="text-[var(--primary)] group-hover:scale-110 transition"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Call Us
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition">
                +91 9256844444
              </p>
            </a>

            {/* EMAIL CARD */}
            <a
              href="mailto:info@sajjan.com"
              className="group border border-white/10 rounded-2xl p-8 text-center hover:border-[var(--primary)]/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <Mail
                  size={40}
                  className="text-[var(--primary)] group-hover:scale-110 transition"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Us
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition">
                info@sajjanprecision.com
              </p>
            </a>

          </div>

        </div>
      </section>
    </>
  );
}