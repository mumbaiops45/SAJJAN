"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Scale ,HeartHandshake, Sprout } from "lucide-react";
import OurPartners from "@/components/OurPartners";
import FAQSection from "@/components/FAQ";
const certifications = [
  {
    title: "ISO 9001:2015",
    description: `SAJJAN is accredited as an ISO 9001:2015 certified organization. This certification implies that SAJJAN has met strict guidelines with regard to product design processes, manufacturing procedures, distribution systems, and customer service methods for all products and services that SAJJAN provides.`
  },
  {
    title: "ISO 14001",
    description: `SAJJAN has gained ISO 14001:2015 certification for environmental management.`
  },
  {
    title: "OHSAS 18001",
    description: `SAJJAN has implemented the OHSAS 18001 system and the organization is working towards a structured and streamlined procedure to maintain health and safety standards.`
  },
  {
    title: "ISO 45001: 2018",
    description: `SAJJAN has upgraded to the ISO 45001: 2018 certification, world’s first integrated international standard for occupational health and safety. This is a new industry standard, the framework of which has been coordinated and developed by a committee of occupational health and safety experts from around the world. SAJJAN reinstated its health, safety and environmental committee and took a collaborative approach in reviewing all aspects of the company to ensure that the company is providing a safe and secure working environment.`
  }
];

const About = () => {
  return (
    <>
      <h1 className=" pt-20 text-center">
        <span className="text-[var(--primary)]">About</span>  us
      </h1>
      {/* about intro */}
      <motion.section
        className="w-full py-10 lg:p-15 px-4
  flex flex-col lg:flex-row items-center gap-12"

        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 4,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >

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
            <span className="text-[var(--primary)]">SAJJAN</span> – Engineering Excellence in Heat-Resistant & Precision Castings Since 1935
          </h2>

          <p>
            <strong>SAJJAN</strong> is a pioneer in the production of
            <strong> heat-resistant tool steel and stainless steel castings</strong>,
            manufactured through <strong>centrifugal, static, and investment casting processes</strong>.
            With a diversified product portfolio that includes
            <strong>radiant tubes, walking beams, furnaces, and specialized accessories</strong>,
            the company serves industries requiring reliability under extreme operating conditions.
          </p>

          <p>
            Established in <strong>1935</strong>, the SAJJAN Group began with a modest foundation and has grown into a
            <strong>450+ employee strong organization</strong> with a global footprint spanning
            <strong>23 countries</strong> and supported by <strong>channel partners in 7 countries</strong>.
            Decades of consistent growth reflect the company’s commitment to quality, innovation, and customer trust.
          </p>

          <p>
            Backed by a <strong>state-of-the-art manufacturing plant</strong> and a highly experienced team,
            SAJJAN is dedicated to delivering the <strong>highest standards of quality and service</strong> worldwide.
            The company is accredited with
            <strong>ISO 9001:2015, ISO 14001:2015, and OHSAS 18001:2007 certifications</strong>,
            reinforcing its focus on structured systems and operational excellence.
          </p>

          <p>
            With a strong <strong>in-house designing capability</strong>, SAJJAN ensures
            <strong>faster design development, reduced pattern-making time, and efficient production cycles</strong>.
            All castings are manufactured in accordance with
            <strong>ASTM, DIN, and ARE standards</strong>, ensuring international compliance.
          </p>

          <p>
            The core strength of SAJJAN lies in its <strong>skilled workforce</strong>.
            The group places strong emphasis on <strong>employee training and capability development</strong>,
            enabling teams to deliver <strong>quick, informed, and reliable solutions</strong> to customers worldwide.
          </p>

          <div className="pt-2">
            <Link href="/contact-us" className="primary-btn">
              Contact Us
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-2/5">
          <div className="relative w-full h-[400px] lg:h-[450px] rounded-xl overflow-hidden">
            <Image
              src="/about/bout-intro.jpg"
              alt="industrial-heat-resistant-steel-castings-manufacturer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </motion.section>
      {/* vision */}
      <section className="vision relative bg-gradient-to-l from-[var(--secondary)] to-[var(--primary)]/50 py-24 px-6 lg:px-15">

        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-[var(--primary)] to-[var(--secondary)]"></div>
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
            Our <span className="text-[var(--primary)]">Foundation </span>of<span className="text-[var(--primary)]"> Excellence</span>
          </h2>
          <p className=" text-gray-300 max-w-3xl mx-auto">
          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:-translate-y-2 hover:bg-white/90 transition duration-500">

              <div className="flex items-center mb-4">
                <span className="text-5xl font-bold text-[var(--primary)]/20 mr-4">
                  01
                </span>
                <h3 className="text-2xl font-semibold text-[var(--primary)]">
                  Vision
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                To be a global market leader in the production of quality castings
                at affordable pricing.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:-translate-y-2 hover:bg-white/90 transition duration-500">

              <div className="flex items-center mb-4">
                <span className="text-5xl font-bold text-[var(--primary)]/20 mr-4">
                  02
                </span>
                <h3 className="text-2xl font-semibold text-[var(--primary)]">
                  Mission
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                To become the most preferred brand for customers across Europe,
                USA and other target countries.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:-translate-y-2 hover:bg-white/90 transition duration-500">

              <div className="flex items-center mb-4">
                <span className="text-5xl font-bold text-[var(--primary)]/20 mr-4">
                  03
                </span>
                <h3 className="text-2xl font-semibold text-[var(--primary)]">
                  Value
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Customer Delight, Quality, On time service, Innovation,
                Safety, Environmental Sustainability.
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* chairman massage */}
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
            <span className="text-[var(--primary)]">Chairman's </span> Message
          </h2>

          <p>
            Dear Team, It gives me immense pleasure to inform you that our company is on a steady path of growth and success. We have made substantial progress in the previous year and are optimistic that the growth curve will be improving even more in this financial year. We have not just increased our turnover but have upgraded ourselves in terms of infrastructure and software. Our mission is consistent and we are highly focused on manufacturing quality castings.
          </p>

          <p>
            Our experience over the years has taught us a very important lesson that we want to share today. Every organization undoubtedly wants to make profit. Most people think that profit is determined solely by volume and market share, made possible through expansion and new products. However, we at SAJJAN believe that it is only customers who make a company bigger and more successful. Delighting customers earns us their trust and in return, it helps to generate more business.
          </p>

          <p>
            As I conclude I would also like to reiterate our responsibility towards the environment and urge you to adopt a proactive approach towards sustainability and conservation of the environment.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-2/5">
          <div className="relative w-full h-[400px] lg:h-[450px] rounded-xl overflow-hidden">
            <Image
              src="/about/Chairman's.jpg"
              alt="industrial-heat-resistant-steel-castings-manufacturer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </motion.section>
      {/* sertification */}
      <motion.section
        className="Certified relative py-20
        bg-gradient-to-br 
        from-[var(--primary)]/50 
        via-[var(--secondary)]/10 
        to-[var(--primary)]/50 overflow-hidden"

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 3, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >

        <div className="max-w-6xl mx-auto px-6 relative z-10">

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
              We
              <span className="text-[var(--primary)]"> are Certified</span>
            </h2>
            <p className=" text-gray-300 max-w-3xl mx-auto">
              SAJJAN is a pioneer in manufacturing heat-resistant tool steel and stainless steel castings through centrifugal, static, and investment casting processes.
            </p>
          </div>

          {/* Certification Blocks */}
          <div className="grid grid-cols-1 gap-8 mt-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl 
            border-l-4 border-[var(--primary)] shadow-md"

                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Flex container */}
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full 
                bg-[var(--primary)]/10 
                flex items-center justify-center">
                    <ShieldCheck
                      size={26}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[var(--primary)] font-semibold mb-2">
                      {cert.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-700">
                      {cert.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>
      
      <OurPartners />
      <section className="Quality relative 
        bg-gradient-to-br 
        from-[var(--primary)]/50 
        via-[var(--secondary)]/5
        to-[var(--secondary)]/20 overflow-hidden py-16 px-6 lg:px-15">
        <div className="max-w-7xl mx-auto">

          {/* ===== HEADING ===== */}
          <div className="mb-10">
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
              Corporate 
              <span className="text-[var(--primary)]"> Social Responsibility</span>
            </h2>
          </div>

          {/* ===== CONTENT SECTION ===== */}
          <div className="grid md:grid-cols-5 gap-12 items-center">

            {/* LEFT ICON */}
            <div className="md:col-span-1 translate-x-12 flex justify-center md:justify-start">
              < HeartHandshake size={120} strokeWidth={1.5} />
            </div>

            {/* RIGHT TEXT */}
            <div className="md:col-span-4 leading-relaxed space-y-4">
              <p>
               We at SAJJAN are deeply committed to contributing to the betterment of the society. As a part of this endeavour, we are supporting the cause of imparting education for the underprivileged children. Our focus is to provide young people opportunities to realize their potential and bring about a positive a change through education. For the mission; we have taken the responsibility to educate 30 children from the economically backward section. This program is an ongoing process marked by newer names in the list every year.
              </p>

              <p>
              Some of the events conducted under Corporate Social Responsibility by SAJJAN are listed below:
              </p>


            </div>

          </div>
          <div className="w-full py-10">
            {/* Bullet Points */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

              <ul className="list-disc pl-6 space-y-3 text-gray-200 text-sm md:text-base">
                <li>Children’s Camp organized at a village school where 440 school children were donated shoes from Liberty Footwear</li>
                <li>SAJJAN collaborates with the NGO Ashirwad in the field of developmental disability mainly in cerebral palsy treatment of children.</li>
                <li>SAJJAN lightened the village road stretch of 1 kilometre with electricity connection, street lights, and electricity poles. This is to help people around the village to feel secure at night.</li>
                <li>SAJJAN regularly coordinates with police patrols to ensure the safety of its employees and village residents.</li>
                <li>SAJJAN extended its support for tree plantation drive in the factory and the village to increase green cover.</li>
                <li>SAJJAN also planted 500 plants to increase green country</li>
                <li>SAJJAN celebrated Independence Day with village school children.</li>
                <li>SAJJAN also organises Inter Company Cricket matches.</li>
              </ul>

              <Image
      src="/WhySajajn/Environmental Concern.jpg"
      alt="Sample Image"
      width={800}
      height={500}
      className="rounded-xl object-cover"
    />

            </div>

          </div>
        </div>
        <div className="mb-5">
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
              
              <span className="text-[var(--primary)]">Environmental </span> Concern
            </h2>
          </div>
        <div className="grid md:grid-cols-5 gap-12 items-center">

            {/* LEFT ICON */}
            <div className="md:col-span-4 leading-relaxed space-y-4">
              <p>
               We are one of the few companies with a proactive approach towards sustainability and conservation of the environment. All our processes conform to international standards in accordance to environmental laws. In keeping with environmental conservation, we have our own process of segregation and waste management, comprising of primary, secondary and tertiary treatments. All liquid and solid wastes are disposed off in an environmentally and legally acceptable manner. We believe in maintaining a clean and green surrounding to make the world a better place to live in.
              </p>


            </div>
            <div className="md:col-span-1 translate-x-12 flex justify-center md:justify-start">
              <  Sprout size={120} strokeWidth={1.5} />
            </div>

            {/* RIGHT TEXT */}
            

          </div>

      </section>
      <section className="code_of_cunduct relative bg-gradient-to-l from-[var(--secondary)] to-[var(--primary)]/50 py-24 px-6 lg:px-15">

        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-[var(--primary)] to-[var(--secondary)]"></div>

        <div className="max-w-7xl mx-auto">

          {/* ===== HEADING ===== */}
          <div className="mb-8">
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
              <span className="text-[var(--primary)]">Code </span>
              of
              <span className="text-[var(--primary)]"> Conduct</span>
            </h2>
          </div>

          {/* ===== CONTENT SECTION ===== */}
          <div className="grid md:grid-cols-5 gap-12 items-center">

            {/* LEFT ICON */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <Scale size={120} strokeWidth={1.5} />
            </div>

            {/* RIGHT TEXT */}
            <div className="md:col-span-4 leading-relaxed space-y-4">
              <p>
                Sajjan Precision adheres to a strict ‘ Code of Conduct ’ to ensure that fair practices are implemented in the company and utmost care is taken to create an inclusive, non-discriminatory and safe work environment for all.
              </p>

              <p>
                The variety of areas covered in the COC prefaces the code with its guiding principles and then explains how it approaches internal activities such as Health & Safety, working hours et al and external activities like adhering to the Government regulations such as minimum wage, labour laws etc.
              </p>
            </div>

          </div>

        </div>

      </section>
        <FAQSection />

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

  )
}

export default About


