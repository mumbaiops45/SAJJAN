"use client";
import React from 'react'
import { Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';

const mainCard = {
    image: "/WhySajajn/Infrastructure.png", // replace with your image path
    description:
        "With the use of latest technology and state-of-the-art infrastructure, SAJJAN is equipped to supply the best quality castings at the most competitive price. The company has a full-fledged manufacturing unit at Ludhiana equipped with the best machinery to facilitate manufacturing of our range of casting components with premium quality. Our manufacturing unit is spread over a wide area of 13 Acres and has substantial production capacity. We also have an in-house design unit with CAD/ CAM facility that assists us to manufacture our casting components. This enables customers to avail both designing and manufacturing under one roof.",
};

const properties = [
    { id: 1, title: "Latest and perhaps the best Co ordinate Measuring machine from Mitutoyo, Japan." },
    { id: 2, title: "Pattern manufacturing by CNC machines for manufacturing patterns." },
    { id: 3, title: "Medium Frequency Induction furnaces size from 300 kg to 1500 kg." },
    { id: 4, title: "Top of the range emission spectrometers." },
    { id: 5, title: "Conventional and CNC Plasma cutting." },
    { id: 6, title: "Facility for a short time high-temperature tests and magnetic permeability test." },
];

const Sajjan = () => {
    return (
        <>
            <h1 className="pt-20 pb-10 text-center text-4xl font-bold">
                Why <span className="text-[var(--primary)]">SAJJAN</span>
            </h1>
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-400">
                    The name SAJJAN is synonymous to quality castings in the market. Some of the factors that have consistently fuelled our growth and have made us the most preferred business partners are:
                </p>
            </div>
            <section className="Premium quality py-16 px-6 lg:px-15">

                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-[var(--primary)] to-[var(--secondary)]"></div>

                <div className="max-w-7xl mx-auto">

                    {/* ===== HEADING ===== */}
                    <div className="mb-14">
                        <h2
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
                            Premium
                            <span className="text-[var(--primary)]"> quality</span>
                        </h2>
                    </div>

                    {/* ===== CONTENT SECTION ===== */}
                    <div className="grid md:grid-cols-5 gap-12 items-center">

                        {/* LEFT ICON */}
                        <div className="md:col-span-1 flex justify-center md:justify-start">
                            <Award size={120} strokeWidth={1.5} />
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="md:col-span-4 leading-relaxed space-y-4">
                            <p>
                                Product which is available in a single inclusive competitive price worldwide.
                                Manufactured with superior materials and strict quality control to ensure durability and consistent performance.
                            </p>

                            <p>
                                Designed to meet international standards, delivering reliability and value across global markets.
                            </p>
                        </div>

                    </div>

                </div>

            </section>
            <section className="Specialised Team relative
  bg-gradient-to-br 
  from-[var(--primary)]/50 
  via-[var(--secondary)]/10 
  to-[var(--primary)]/50 overflow-hidden  py-16 px-6 lg:px-15">

                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-[var(--primary)] to-[var(--secondary)]"></div>

                <div className="max-w-7xl mx-auto">

                    {/* ===== HEADING ===== */}
                    <div className="mb-14">
                        <h2
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
                            Specialised
                            <span className="text-[var(--primary)]"> Team</span>
                        </h2>
                    </div>
                    <section className="w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="py-5 px-6 text-center bg-[var(--primery)]"
                        >
                            <p className="pb-5 max-w-4xl mx-auto">
                                Our products are manufactured with precision engineering and strict quality
                                standards to ensure durability, performance, and global reliability across
                                industries.
                            </p>
                        </motion.div>
                        {/* Image Grid */}
                        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                            {[
                                { src: "/WhySajajn/Technocrats.jpg", caption: "Technocrats" },
                                { src: "/WhySajajn/Engineers.jpg", caption: "Engineers" },
                                { src: "/WhySajajn/Quality controllers.jpg", caption: "Quality controllers" },
                                { src: "/WhySajajn/R&D experts.jpg", caption: "R&D experts" },
                                { src: "/WhySajajn/Technical staff.jpg", caption: "Technical staff" },
                                { src: "/WhySajajn/Sales & marketing executives.png", caption: "Sales & marketing executives" },
                                { src: "/WhySajajn/Skilled workers.jpg", caption: "Skilled workers" },
                                { src: "/WhySajajn/Specialised team.jpg", caption: "Specialised team" },
                            ].map((item, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                                    className="overflow-hidden rounded-xl text-center"
                                >

                                    {/* Image with White Border */}
                                    <Image
                                        src={item.src}
                                        alt={item.caption}
                                        width={800}
                                        height={500}
                                        className="w-full h-64 object-cover border-4 border-white rounded-xl rounded-b-none hover:border-0 transition-all duration-[.4s] hover:scale-102"
                                    />

                                    {/* Caption Below Each Image */}
                                    <p className="py-2 bg-[var(--primary)]">
                                        {item.caption}
                                    </p>

                                </motion.div>

                            ))}

                        </div>




                    </section>

                </div>

            </section>
            <section className="Infrastructure quality py-16 px-6 lg:px-15">

                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-[var(--primary)] to-[var(--secondary)]"></div>

                <div className="max-w-7xl mx-auto">

                    {/* ===== HEADING ===== */}
                    <div className="mb-14">
                        <h2
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
                            World-Class
                            <span className="text-[var(--primary)]"> Infrastructure</span>
                        </h2>
                    </div>

                    <div className="relative py-24 flex flex-col lg:flex-row justify-center items-center">

                        {/* ===== Scattered Properties ===== */}
                        {properties.map((item, index) => {
                            const positions = [
                                "lg:absolute lg:top-0 lg:left-7",
                                "lg:absolute lg:top-10 lg:right-0",
                                "lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-left-9",
                                "lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-9",
                                "lg:absolute lg:bottom-10 lg:-left-5",
                                "lg:absolute lg:bottom-0 lg:right-10",
                            ];

                            return (
                                <div
                                    key={item.id}
                                    className={`${positions[index]} 
        w-full lg:w-70 
        mb-6 lg:mb-0 
        text-center p-6 rounded-2xl 
        bg-white/10 backdrop-blur-md 
        relative
        after:content-[''] 
        after:absolute 
        after:top-0 
        after:left-0
        after:right-0
        after:h-2
        after:rounded-t-2xl
        after:bg-gradient-to-r 
        after:from-[var(--primary)]
        after:to-[var(--secondary)]`}
                                >
                                    <h4>{item.title}</h4>
                                </div>
                            );
                        })}

                        {/* ===== Center Card ===== */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-6 mt-10 lg:mt-0">

                            <div className="relative w-full h-64 lg:h-80">
                                <Image
                                    src={mainCard.image}
                                    alt="Infrastructure"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>

                            <p className="mt-6 text-lg leading-relaxed max-w-3xl">
                                {mainCard.description}
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            <section className="Quality relative 
  bg-gradient-to-br 
  from-[var(--primary)]/50 
  via-[var(--secondary)]/5
  to-[var(--secondary)]/20 overflow-hidden py-16 px-6 lg:px-15">
                <div className="max-w-7xl mx-auto">

                    {/* ===== HEADING ===== */}
                    <div className="mb-14">
                        <h2
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
                            Quality
                            <span className="text-[var(--primary)]"> Assurance</span>
                        </h2>
                    </div>

                    {/* ===== CONTENT SECTION ===== */}
                    <div className="grid md:grid-cols-5 gap-12 items-center">

                        {/* LEFT ICON */}
                        <div className="md:col-span-1 translate-x-12 flex justify-center md:justify-start">
                            < ShieldCheck size={120} strokeWidth={1.5} />
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="md:col-span-4 leading-relaxed space-y-4">
                            <p>
                                Quality comes foremost at SAJJAN. The variety of castings manufactured at our company is in accordance with ASTM, DIN and IS Standards. Our Quality Assurance systems are ISO 9001:2008 Compliant. Quality control procedures, which include NDT Testing, UT, RT, PT, PMI and MPI, are done by qualified personnel with sound experience in the respective field. The company is equipped to perform the following tests:
                            </p>


                        </div>

                    </div>
                    <div className="w-full py-10">
                        {/* Bullet Points */}
                        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                            <ul className="list-disc pl-6 space-y-3 text-gray-200 text-sm md:text-base">
                                <li>Inward raw material analysis by Handheld portable Spectrometer</li>
                                <li>Chemical Analysis by Lab model Spectrometer imported from Germany for all the heats.</li>
                                <li>Dimensional Inspection by Digital Vernier Callipers, Height Gauges, Slip Gauges and CMM from Mitutoyo Japan.</li>
                                <li>Standards room with complete range of Slip Gauges, Bore gauges, Height Gauges, Dial Callipers from Mitutoyo for measurements upto 500mm with least count as low as 1 micron.</li>
                                <li>Roughness Test, Mitutoyo.</li>
                                <li>Radiography Testing.</li>
                                <li>Mechanical Testing, UTS, YS.</li>
                                <li>Ultrasonic Testing.</li>
                            </ul>

                            <ul className="list-disc pl-6 space-y-3 text-gray-200 text-sm md:text-base">
                                <li>Liquid Penetrant Testing.</li>
                                <li>Magnetic Particle Inspection.</li>
                                <li>Metallography Inverted Microscope for Micro Structure with image analyse.</li>
                                <li>Short time High Temperature Tension Test Facility.</li>
                                <li>Magnetic Permeability Test Facility.</li>
                                <li>Radiant Tube Assemblies with bellows</li>
                                <li>Cast Bends with bewelled ends</li>
                                <li>Charge and discharge rollers</li>
                                <li>Flue gas dampers</li>
                            </ul>

                        </div>

                    </div>
                </div>

            </section>
            {/* Research and Strategy*/}
            <motion.section
                className=" w-full py-10 lg:p-15 px-4
              flex flex-col lg:flex-row-reverse  gap-12"

                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 4,
                    ease: [0.25, 0.8, 0.25, 1],
                }}
            >

                {/* LEFT CONTENT */}
                <div className=" flex flex-col justify-start w-full lg:w-3/5 space-y-6">


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
                        <span className="text-[var(--primary)]">Research </span> and <span className="text-[var(--primary)]">Strategy </span>
                    </h2>

                    <p>
                        At SAJJAN, we believe that we can only grow when we develop our technology and product knowledge. Considering this, we invest considerable time and money to learn about the latest process technology, information management, and infrastructure development. These three components are closely connected and each is critical to ensure success. We have a dedicated R&D team that is focused to garner the latest technological know-how and processes that can be incorporated in the company. We keep upgrading our machinery and software to enable us to keep pace with our global counterparts.
                    </p>

                    <p>
                        Some of our technical approaches include use of 3D printing for manageable models and wax patterns, simulations among others.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-2/5">
                    <div className="relative w-full h-[400px] lg:h-[450px] rounded-xl overflow-hidden">
                        <Image
                            src="/WhySajajn/Research and Strategy.png"
                            alt="industrial-heat-resistant-steel-castings-manufacturer"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

            </motion.section>
        </>
    )
}

export default Sajjan


