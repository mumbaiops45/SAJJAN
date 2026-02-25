"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Users,
    Microscope,
    ShieldCheck,
    Factory,
    Cog,
    Globe,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
    const features = [
        {
            icon: Users,
            title: "Specialised Team",
            desc: "Advanced infrastructure and skilled professionals delivering premium casting solutions.",
            image: "/home/Specialised Team.png",
        },
        {
            icon: Microscope,
            title: "Research & Strategy",
            desc: "Continuous investment in technology, R&D, and process innovation.",
            image: "/home/Research And Strategy.jpg",
        },
        {
            icon: ShieldCheck,
            title: "Quality Assurance",
            desc: "Strict inspection systems ensuring reliable high-performance components.",
            image: "/home/Quality Assurance.jpg",
        },
        {
            icon: Factory,
            title: "Advanced Infrastructure",
            desc: "Modern manufacturing facility equipped with state-of-the-art machinery.",
            image: "/home/Infrastructure.jpg",
        },
        {
            icon: Cog,
            title: "Process Expertise",
            desc: "Centrifugal, static & investment casting expertise for demanding industries.",
            image: "/home/Process Expertise.png",
        },
        {
            icon: Globe,
            title: "Trusted Industry Partner",
            desc: "Delivering durable casting solutions trusted across industrial sectors.",
            image: "/home/Trusted Industry Partner.png",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative bg-gradient-to-l from-[var(--secondary)] to-[var(--primary)]/80 py-20 px-15">

            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-[var(--primary)] to-[var(--secondary)]"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

                {/* LEFT SIDE */}
                <div>

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
after:to-transparent mb-6">
                        Why Choose <span className="text-[var(--primary)]">SAJJAN</span>
                    </h2>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Engineering precision, advanced infrastructure, and continuous innovation
                        drive our commitment to deliver high-performance casting solutions.
                    </p>

                    {/* Dynamic Image */}
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500">
                        <Image
                            src={features[activeIndex].image}
                            alt={features[activeIndex].title}
                            fill
                            className={`transition-all duration-500 ${features[activeIndex].image === "/home/Trusted Industry Partner.png"
                                    ? "object-contain rounded-full"
                                    : "object-cover"
                                }`}
                        />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <motion.div
                    className="space-y-4"
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                initial={{
                                    x: index % 2 === 0 ? -80 : 80,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 
        ${isActive
                                        ? "bg-white/10 border-[var(--primary)]"
                                        : "bg-white/5 border-white/10 hover:border-[var(--primary)]"
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
                                        <Icon size={20} className="text-white flex-shrink-0" />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}