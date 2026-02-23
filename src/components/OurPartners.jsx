"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurPartners() {
    const partners = [
        "/home/mahindra.png",
        "/home/essar.png",
        "/home/KSB.png",
        "/home/siemens.png",
        "/home/ZF.png",
        "/home/sail.png",
    ];

    // Duplicate logos for seamless infinite loop
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="relative bg-white pt-15">
            <div className=" flex flex-col max-w-7xl mx-auto ">
                <div className="pb-10">
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
                            <span className="text-[var(--secondary)]">Our </span>
                            <span className="text-[var(--primary)]">Partners </span>
                            <span className="text-[var(--secondary)]">and </span>
                            <span className="text-[var(--primary)]">Global Presence</span>
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Trusted by leading industrial and global brands.
                        </p>
                    </div>

                    {/* Carousel Wrapper */}
                    <div className="relative w-full overflow-hidden">

                        {/* Sliding Track */}
                        <motion.div
                            className="flex gap-16 items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                ease: "linear",
                                duration: 25,
                                repeat: Infinity,
                            }}
                        >
                            {duplicatedPartners.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center min-w-[150px]"
                                >
                                    <Image
                                        src={logo}
                                        alt="Partner Logo"
                                        width={130}
                                        height={80}
                                        className="object-contain transition duration-300"
                                    />
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>
                <div>
                    <Image
                        src="/home/global.png"
                        alt="Mahindra Logo"
                        width={200}
                        height={100}
                        className="w-full h-auto object-contain"
                    />
                </div>

            </div>
        </section>
    );
}