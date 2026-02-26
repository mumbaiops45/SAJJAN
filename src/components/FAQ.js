"use client";

import { useState, useEffect, useRef } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible] = useState([]);
  const cardsRef = useRef([]);

  const faqs = [
    {
      q: "What products does SAJJAN manufacture?",
      a: "SAJJAN manufactures a wide range of heat treatment fixtures, centrifugal and static cast products, corrosion-resistant castings, furnace rolls, radiant tubes, recuperator assemblies, galvanizing line spares, pump and valve components, food machinery parts, petrochemical furnace spares, and cement industry components. Our portfolio covers both standard and fully customized solutions across multiple industries."
    },
    {
      q: "Which industries does SAJJAN serve?",
      a: "SAJJAN serves diverse industries including steel & galvanizing lines, cement, petrochemical, automotive, pumps & valves, food processing, power generation, railways, glass, paper & pulp, and general engineering. Our products are designed to withstand high temperatures, corrosive environments, and heavy industrial operating conditions."
    },
    {
      q: "Does SAJJAN provide customized design and development solutions?",
      a: "Yes. SAJJAN has a dedicated in-house design and engineering team specializing in custom fixture design, casting simulation, stress analysis, and reverse engineering. We develop solutions tailored to customer drawings and application requirements, ensuring improved productivity, longer component life, and reduced operational costs."
    },
    {
      q: "What quality standards and testing procedures does SAJJAN follow?",
      a: "SAJJAN follows stringent quality control measures at every stage of production. Testing procedures may include chemical analysis, tensile testing, hardness testing, liquid penetrant inspection, ultrasonic testing, X-ray testing, pressure testing, and dimensional inspection using CNC CMM and white light scanning systems. All products are manufactured in compliance with international standards such as ASTM and DIN where applicable."
    },
    {
      q: "What makes SAJJAN different from other casting manufacturers?",
      a: "SAJJAN stands out due to its two decades of industry experience, in-house pattern making facility, advanced CNC machining centers, casting flow simulation capabilities, stress analysis expertise, and quick turnaround times. We focus on delivering high-quality, long-lasting, cost-efficient solutions with strong after-sales support and minimal development costs for customers."
    }
  ];

  // Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="px-4 md:px-10 lg:px-30 pt-10 md:p-15 "
    >
        <div className="flex justify-center"> <h2 className="relative inline-block pb-4
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
        Your <strong className="text-[var(--primary)]">
          Frequently Asked Questions
        </strong>
      </h2></div>
     
      <div className="pt-14 relative z-10 max-w-4xl mx-auto text-white">

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isActive = activeIndex === i;
            const isVisible = visible[i];

            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`
                  bg-white/10 backdrop-blur-lg
                  border border-white/20
                  rounded-xl p-6
                  cursor-pointer
                  transition-all duration-700 ease-out
                  ${isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"}
                `}
                style={{ transitionDelay: `${i * 150}ms` }}
                onClick={() =>
                  setActiveIndex(isActive ? null : i)
                }
              >
                {/* QUESTION */}
                <div className="flex justify-between items-center">
                  <h5
                    className={`transition-colors duration-300
                      ${isActive ? "text-[var(--primary)]" : "text-white"}
                    `}
                  >
                    {faq.q}
                  </h5>

                  <span
                    className={`text-2xl text-[var(--primary)] transition-transform duration-300
                      ${isActive ? "rotate-45" : "rotate-0"}
                    `}
                  >
                    +
                  </span>
                </div>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                    ${isActive ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-gray-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}