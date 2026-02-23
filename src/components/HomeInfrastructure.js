"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { Cog, DraftingCompass, Factory, Drill, ArrowRight } from "lucide-react";

export default function Infrastructure() {
    const data = [
        {
            icon: Cog,
            title: "Engineering",
            desc: "Engineering at SAJJAN is driven by precise alloy selection, optimized design, and advanced casting flow simulation to ensure accuracy and reliability.",
        },
        {
            icon: DraftingCompass,
            title: "Prototyping and pattern shop",
            desc: "SAJJAN creates prototype castings from 3D designs using application-specific alloys for quick pre-production evaluation",
        },
        {
            icon: Factory,
            title: "Manufacturing",
            desc: "SAJJAN’s manufacturing integrates advanced casting technology, precision engineering, and strict quality control to ensure consistent and reliable performance.",
        },
        {
            icon: Drill,
            title: "Machining",
            desc: "SAJJAN offers advanced in-house machining and finishing services, delivering precision components using conventional and CNC machining centers.",
        },
    ];

    return (
        <section className="relative py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
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
after:to-transparent">
                        Our <span className="text-[var(--primary)]">Infrastructure</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Our infrastructure is built to support innovation, efficiency,
                        and long-term industrial excellence.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.4 }}
                                className="group relative overflow-hidden p-8 rounded-2xl border border-[var(--primary)]/20 bg-white/5 backdrop-blur-md"
                            >
                                {/* Rhombus Shape */}
                                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[var(--primary)]/20 rotate-45 transition-all duration-700 group-hover:-bottom-10 group-hover:-right-10"></div>

                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--primary)] text-white mb-6">
                                    <Icon size={22} />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* Read More */}
                                <Link className="cursor-pointer" href="/manufacturing" >
                                    <button className="flex items-center gap-2">
                                        Read More
                                        <ArrowRight size={18} />
                                    </button>
                                </Link>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}