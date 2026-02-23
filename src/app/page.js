"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import WhyChooseUs from "@/components/WhyChoose";
import Infrastructure from "@/components/HomeInfrastructure";
import OurPartners from "@/components/OurPartners";
const timeline = [
  {
    year: "01",
    title: "CAST BELTS AND SPARES",
    description:
      "Manufacturing high-performance cast link belts and spares designed for durability, heat resistance, and reliable operation in demanding industrial environments.",
    features: [
      "CAST LINK BELTS"
    ],
    image: "/home/manufacturing.png"
  },
  {
    year: "02",
    title: "HEAT TREATMENT FIXTURES",
    description:
      "Comprehensive range of heat treatment fixtures engineered for strength, dimensional stability, and long service life in high-temperature furnace applications.",
    features: [
      "BASE GRIDS",
      "STACKABLE GRIDS",
      "CHARGING FIXTURES",
      "BASKETS",
      "MESHES",
      "FIXTURES FOR PIT FURNACE / GCF",
      "FURNACE FURNITURE / ACCESSORIES",
      "FURNACE RAIL AND ROLLERS",
      "PUSHER HEADS AND CHAIN GUIDE",
      "JOB PEDESTALS / FURNACE PIERS",
      "WALKING BEAMS SPARES",
      "SHAKER HEARTH PLATES"
    ],
    image: "/home/HEAT TREATMENT FIXTURES.png"
  },
  {
    year: "03",
    title: "PARTS FOR FOOD MACHINERIES",
    description:
      "Precision-cast components for food processing equipment ensuring hygiene standards, corrosion resistance, and consistent performance.",
    features: [
      "Mixing Blades",
      "PD Pump Parts"
    ],
    image: "/home/PARTS FOR FOOD MACHINERIES.png"
  },
  {
    year: "04",
    title: "ROLLERS AND RADIANT TUBES",
    description:
      "High-temperature resistant rollers and radiant tube assemblies designed for efficient heat transfer and reliable furnace operations.",
    features: [
      "FURNACE ROLLS",
      "RADIANT TUBE ASSEMBLIES",
      "RECUPERATOR TUBE ASSEMBLIES",
      "RIDER BARS"
    ],
    image: "/home/ROLLERS AND RADIANT TUBES.png"
  },
  {
    year: "05",
    title: "SEPARATORS AND DECANTERS",
    description:
      "Robust cast components for separator and decanter systems ensuring operational efficiency, durability, and resistance to harsh industrial conditions.",
    features: [
      "SEPARATORS"
    ],
    image: "/home/SEPARATORS AND DECANTERS.jpg"
  },
  {
    year: "06",
    title: "GALVANIZING LINE SPARES",
    description:
      "Specialized cast spares for galvanizing lines built to withstand corrosive environments and continuous high-temperature operations.",
    features: [
      "GALAVNIZING"
    ],
    image: "/home/SEPARATORS AND DECANTERS.jpg"
  },
  {
    year: "07",
    title: "PETROCHEMICAL INDUSTRY",
    description:
      "Precision-engineered castings and spares tailored for petrochemical industry applications requiring heat resistance and structural integrity.",
    features: [
      "SPARES FOR PETROCHEMICAL INDUSTRY"
    ],
    image: "/home/PETROCHEMICAL INDUSTRY.jpg"
  },
  {
    year: "08",
    title: "CEMENT INDUSTRY",
    description:
      "Durable industrial cast components developed for heavy-duty cement plant operations with high wear resistance and thermal stability.",
    features: [
      "SPARES FOR CEMENT INDUSTRY"
    ],
    image: "/home/CEMENT INDUSTRY.jpg"
  }
];
const industries = [
  {
    title: "STEEL INDUSTRY / GALVANIZING LINES",
    description:
      "SAJJAN manufactures centrifugal and static cast components for steel mills and furnaces in heat- and corrosion-resistant grades."
  },
  {
    title: "CEMENT INDUSTRY",
    description:
      "High-quality cast components designed for durability and reliable performance in large-scale cement production."
  },
  {
    title: "PUMPS / VALVES & IMPELLORS",
    description:
      "Precision stainless steel castings with advanced heat treatment and non-destructive testing."
  },
  {
    title: "FOOD TECHNOLOGY",
    description:
      "Ultra-clean stainless steel castings using advanced CAD, de-gassing technology, and CNC machining."
  },
  {
    title: "PETROCHEMICAL INDUSTRY",
    description:
      "High-performance castings engineered for demanding petrochemical environments."
  }
];



export default function Home() {
  return (
    <>
      <section className={`relative w-full h-screen overflow-hidden ${styles.hero}`}>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 max-w-5xl mx-auto">
          <h1 className="mb-6">
            Forging Strength. Shaping the Future.
          </h1>

          <p className="mb-8 max-w-2xl">
            Delivering high-quality steel solutions engineered for durability,
            precision, and performance across modern industries.
          </p>

          <a href="/contact-us" className="primary-btn">
            Get Started
          </a>
        </div>

        {/* Desktop Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/home/hero.mp4" type="video/mp4" />
        </video>

      </section>
      <section className="w-full py-6 lg:p-15 px-4
  flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-3/5 space-y-6">

          <h2 className="relative inline-block pb-4
      after:content-['']
after:absolute
after:left-0
after:bottom-0
after:w-full
after:h-1
after:rounded-full
after:bg-gradient-to-r
after:from-[var(--primary)]
after:to-transparent">

            <span className="text-[var(--primary)]">
              SAJJAN
            </span>{" "}
            A Pioneer in <strong>Heat-Resistant & Precision Castings</strong> Since 1935

          </h2>

          <p>
            Sajjan Castings Limited is a pioneer in
            <strong> heat-resistant tool steel and stainless steel castings</strong>,
            manufactured through <strong>centrifugal, static and investment casting processes</strong>.
            Established in 1935, the Sajjan Group has grown into a globally trusted manufacturer
            serving customers in <strong>23 countries</strong>.
          </p>

          <p>
            With <strong>state-of-the-art facilities</strong>, strong
            <strong> in-house design capabilities</strong> and a skilled workforce,
            we produce precision castings including
            <strong> radiant tubes, walking beams, furnaces</strong> and
            specialized industrial components. Our products meet
            <strong> ASTM, DIN and ARE standards</strong> and are backed by
            <strong> ISO 9001:2015, ISO 14001:2015 and OHSAS 18001:2007 certifications</strong>.
          </p>

          <p>
            Driven by decades of expertise and a commitment to quality,
            <strong> Sajjan Castings</strong> remains one of the most reputed names
            in precision castings worldwide.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link href="/about" className="primary-btn">
              About Us
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-2/5">
          <img
            src="/home/industrial-heat-resistant-steel-castings-manufacturer.png"
            alt="industrial-heat-resistant-steel-castings-manufacturer"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

      </section>
      <section className="py-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="relative inline-block pb-4
      after:content-['']
after:absolute
after:left-0
after:bottom-0
after:w-full
after:h-1
after:rounded-full
after:bg-gradient-to-r
after:from-[var(--primary)]
after:to-transparent mb-4">
              Our <span className="text-[var(--primary)]">Products</span>
            </h2>
            <p className=" text-gray-300 max-w-3xl mx-auto">
              SAJJAN is a pioneer in manufacturing heat-resistant tool steel and stainless steel castings through centrifugal, static, and investment casting processes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
              >
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"
                    }`}
                >
                  <div className="group [perspective:1000px] ">
                    <div className="relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                      {/* FRONT */}
                      <div className="relative 
  after:content-[''] 
  after:absolute 
  after:top-0 
  after:left-0
  after:right-0
  after:h-3
  after:rounded-t-2xl
  after:bg-gradient-to-r 
  after:from-[var(--primary)]
  after:to-[var(--secondary)]
  backface-visibility:hidden]">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <div
                            className={`inline-block px-3 py-1 rounded-full  mb-4 ${item.color}`}
                          >
                            {item.year}
                          </div>

                          <h3 className=" mb-3">
                            {item.title}
                          </h3>

                          <p className="text-gray-200 mb-4">
                            {item.description}
                          </p>

                          <div className="space-y-2">
                            {item.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className={`flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"
                                  }`}
                              >
                                <span className="text-sm text-gray-400">
                                  • {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* BACK */}
                      {/* BACK */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <Image
                          src={item.image || "/images/sample.jpg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                    </div>
                  </div>

                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-black border-4 border-[var(--primary)] rounded-full z-10"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              And this is just the beginning...
            </p>
            <Link
              href="/products"
              className="primary-btn px-8 py-3 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Our Product
            </Link>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Infrastructure />
      <section className="industry"
      >
        <div className="flex justify-center"><h2
          className="relative inline-block pb-4
      after:content-['']
after:absolute
after:left-0
after:bottom-0
after:w-full
after:h-1
after:rounded-full
after:bg-gradient-to-r
after:from-[var(--primary)]
after:to-transparent"
        >
          <span className="text-[var(--primary)]">Industries </span>We Serve
        </h2></div>


        {industries.map((item, index) => (
          <section
            key={index}
            className="flex flex-col md:flex-row items-center justify-start gap-6 px-4 md:px-10 lg:px-20 py-10 my-15 md:my-0 relative"
          >
            {/* heading */}
            <div
              className="
        w-full md:w-5/12 pt-5 pb-15 px-6 md:py-20 md:px-20
        bg-white/20 backdrop-blur-lg
        border border-[var(--primary)]
        rounded-xl shadow-lg
        transition duration-300
        flex items-start md:items-center justify-center"
            >
              <h3
                className=" relative inline-block pb-4
      after:content-['']
after:absolute
after:left-0
after:bottom-0
after:w-full
after:h-1
after:rounded-full
after:bg-gradient-to-r
after:from-[var(--primary)]
after:to-transparent"
              >
                {item.title}
              </h3>
            </div>
            {/* slide para */}

            <div
              className="
        md:w-1/2 w-[80vw] 
    md:absolute md:left-85 lg:left-120 absolute top-35 md:top-auto 
    bg-[var(--secondary)]/70 backdrop-blur-lg
    border border-white/35
    rounded-xl p-6 md:p-8 shadow-lg
    hover:border-[var(--secondary)]
    transition duration-300 hover:translate-y-1
    animate-slideInRight40
    flex flex-col items-end justify-center"
            >
              <p>{item.description}</p>
              <Link href="/industries">
                <button className="flex  items-center gap-2 secondary-btn">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </Link>


            </div>

          </section>
        ))}
      </section>
      <OurPartners/>
      {/* ================= CTA SECTION ================= */}
      <section className="CTA relative py-24 bg-gradient-to-br from-[var(--secondary)]/40 via-black/10 to-[var(--primary)]/30 ">

        {/* Glow Effect */}
       

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            Ready to Power Your Project with
            <span className="text-[var(--primary)]"> SAJJAN?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Partner with SAJJAN for high-performance stainless steel and alloy steel
            casting solutions engineered for durability, efficiency, and industrial excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            <Link className="" href="/quote">
              <button className="flex justify-between items-center gap-2 primary-btn">
                Request a Quote
                <ArrowRight size={18} />
              </button>
            </Link>

            <Link href="/industries">
              <button className="flex justify-between items-center gap-2 secondary-btn">
                Explore Industries
              </button>
            </Link>

          </div>
        </div>
      </section>
      


    </>


  );
}