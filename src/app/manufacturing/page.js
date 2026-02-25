"use client";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    { name: "Engineering", href: "#Engineering" },
    { name: "Prototyping and pattern shop", href: "#Prototyping-nd-pattern-shop" },
    { name: "Manufacturing", href: "#Manufacturing" },
    { name: "Machining", href: "#Machining" },
  ];

  return (
    <div>
      <div className="px-4 md:px-10 lg:px-30 pt-10 md:pt-15 pb-10 relative overflow-hidden

  "
      >
        <div className="relative z-10 max-w-7xl mx-auto text-white">

          {/* Heading */}
          <h1 className="text-center mb-16">
            Advanced <span className="text-[var(--primary)]">Manufacturing </span>& <span className="text-[var(--primary)]">Engineering</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT CONTENT */}
            <div className="lg:order-2">
              <h3 className="text-center text-4xl font-bold mb-6">
                Our Operations
              </h3>
              <div className="grid grid-cols-1 gap-6 text-center  ">
                {services.map((service, i) => (
                  <a
                    key={i}
                    href={service.href}
                    className="
        bg-white/10 backdrop-blur-lg
        border border-white/20
        px-8 py-6 rounded-xl
        hover:border-[var(--primery)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        block
      "
                  >
                    <p className="text-lg font-medium">
                      {service.name}
                    </p>
                  </a>
                ))}
              </div>




            </div>

            {/* RIGHT text */}
            <div className="lg:order-1 my-auto md:mt-13">
              <p className="text-gray-300 leading-[2.5] max-w-md mb-8">
                Reya AV is a leading audio-visual system integration company based in Bangalore, established in 2017 by Mr. Akash Gupta, who brings over 20 years of experience in the audio and events industry. Originating from Auto Entertainment Inc. (2005), the company has grown into a trusted partner for hospitality and commercial AV solutions.

                We specialize in LED Wall Solutions, Audio Design & Installation, Acoustic Design, Visual Integration, Lighting Design, and Annual Maintenance Contracts (AMC) — delivering reliable, high-quality systems that enhance ambience, performance, and customer experience across pubs, restaurants, gyms, corporate spaces, and event venues.

                At Reya AV, we focus on innovation, quality, and seamless integration to create immersive audio-visual environments.
              </p>
            </div>

          </div>

        </div>
      </div>
      <div id="Engineering" className="min-h-[60vh] intro px-4 md:px-10 lg:px-30 pt-10 md:py-10 relative overflow-hidden
 
before:content-[''] 
before:absolute 
before:inset-0 
before:bg-[url('/manufacturing/engineering.png')] 
before:bg-cover 
before:bg-center 
before:bg-no-repeat


flex 
items-center 
justify-center
 scroll-fade"
      >
        <div className="flex flex-col md:flex-row items-center  relative z-1">

          {/* TEXT SECTION */}
          <div className="flex flex-col items-start  md:w-1/2">

            <h2
              className="relative inline-block pb-2
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
              <span className="text-[var(--primary)]">
                Engineering
              </span>
            </h2>

            <p className="text-gray-700 pt-2">
              The approach to manufacturing products at <strong>SAJJAN</strong> — whether it is a
              <strong>cost-saving casting for an existing part</strong>, a component that
              <strong>faces specification challenges</strong>, or a
              <strong>first-time developed part</strong> — always begins
              <strong>from the ground up</strong>.

              The primary focus of our manufacturing process is
              <strong>selecting the right alloy</strong> and ensuring
              <strong>correct design optimization</strong>.

              SAJJAN utilizes
              <strong>casting flow simulation methods</strong> to thoroughly analyze and refine the
              <strong>casting process</strong>.
            </p>

          </div>
        </div>
      </div>
      <div id="Prototyping-nd-pattern-shop" className="min-h-[60vh] intro px-4 md:px-10 lg:px-30 pt-10 md:py-10 relative overflow-hidden
 
before:content-[''] 
before:absolute 
before:inset-0 
before:bg-[url('/manufacturing/prototype.jpg')] 
before:bg-cover 
before:bg-center 
before:bg-no-repeat


flex 
items-center 
justify-center
 scroll-fade"
      >
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative z-1">

          {/* TEXT SECTION */}
          <div className="flex flex-col items-start gap-5 md:w-1/2">

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
after:to-transparent"
            >
              <span className="text-[var(--primary)]">

                Prototyping and pattern shop
              </span>
            </h2>

            <p className="text-gray-200">
              <strong>SAJJAN</strong> produces <strong>prototype castings</strong> using
              <strong>patterns developed directly from 3D design data</strong>,
              manufactured with the <strong>appropriate alloy</strong> to meet
              <strong>client application and testing requirements</strong>.

              The <strong>short production lead time</strong> for prototypes enables customers to
              <strong>evaluate revised or newly developed components</strong> before
              <strong>full-scale casting production</strong> begins.

              SAJJAN is equipped with an <strong>in-house pattern-making facility</strong>,
              where patterns are <strong>systematically maintained</strong> with
              <strong>unique identification</strong> and stored in
              <strong>fire-resistant storage areas</strong> to ensure safety and longevity.
            </p>

          </div>

        </div>
      </div>
      <div id="Machining" className="min-h-[60vh] intro px-4 md:px-10 lg:px-30 pt-10 md:py-10 relative overflow-hidden
 
before:content-[''] 
before:absolute 
before:inset-0 
before:bg-[url('/manufacturing/machine.jpg')] 
before:bg-cover 
before:bg-center 
before:bg-no-repeat


flex 
items-center 
justify-center
 scroll-fade"
      >
        <div className="flex flex-col md:flex-row items-center  relative z-1">

          {/* TEXT SECTION */}
          <div className="flex flex-col items-start  md:w-1/2">

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
after:to-transparent"
            >
              <span className="text-[var(--primary)]">
                Machining
              </span>
            </h2>

            <p className="text-gray-700 pt-2">
              <strong>SAJJAN</strong> offers extensive <strong>in-house machining</strong> and
              <strong>finishing services</strong>. Castings are machined according to
              <strong>customer specifications</strong> using both
              <strong>conventional machines</strong> and advanced
              <strong>CNC vertical and horizontal machining centres</strong>.
            </p>

            <p className="text-gray-700 pt-2">
              We are equipped with the following <strong>machinery for part manufacturing and development</strong>:
            </p>

            <ul className="text-gray-700 pt-2">
              <li><strong>Vertical Machining Centres</strong></li>
              <li><strong>Horizontal Machining Centres</strong></li>
              <li><strong>CNC Turning Centres</strong></li>
              <li><strong>Vertical Turning Lathe (VTL) up to 1m diameter</strong></li>
              <li><strong>Surface Grinder</strong></li>
              <li><strong>Conventional Machining Lathes up to 700 mm OD & 4 m length</strong></li>
              <li><strong>Vertical Plano Miller</strong></li>
            </ul>

          </div>

        </div>
      </div>
      <div id="Manufacturing" className="min-h-[60vh] intro px-4 md:px-10 lg:px-30 pt-10 md:py-10 relative overflow-hidden
 
before:content-[''] 
before:absolute 
before:inset-0

before:bg-cover 
before:bg-center 
before:bg-no-repeat


flex 
items-center
justify-center
 scroll-fade"
      >
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative z-10">

          {/* TEXT SECTION */}
          <div className="flex flex-col items-start gap-5 md:w-3/5">

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
after:to-transparent"
            >
              <span className="text-[var(--primary)]">
                Manufacturing
              </span>
            </h2>

            <p className="text-gray-200">
              Our <strong>manufacturing process</strong> is built on
              <strong>precision</strong>, <strong>efficiency</strong>, and <strong>quality</strong>.

              From <strong>material selection</strong> to
              <strong>final inspection</strong>, every stage is carefully controlled to ensure
              <strong>consistent performance</strong> and <strong>reliability</strong>.

              We combine <strong>advanced technology</strong> with
              <strong>skilled expertise</strong> to deliver
              <strong>high-quality cast components</strong> that meet
              <strong>exact client specifications</strong>.
            </p>

          </div>

          {/* IMAGE SECTION */}
          <div className="md:w-2/5">
  <div className="grid grid-cols-2 gap-4">
    
    <div className="aspect-square relative overflow-hidden border-l-3 border-b-3 border-[var(--primary)] rounded-md">
      <Image
        src="/manufacturing/Manufacturing1.png"
        alt="Image 1"
        fill
        className="object-cover"
      />
    </div>

    <div className="aspect-square relative overflow-hidden  border-l-3 border-b-3 border-[var(--primary)] rounded-md">
      <Image
        src="/manufacturing/Manufacturing2.png"
        alt="Image 2"
        fill
        className="object-cover"
      />
    </div>

    <div className="aspect-square relative overflow-hidden border-l-3 border-b-3 border-[var(--primary)] rounded-md">
      <Image
        src="/manufacturing/Manufacturing3.png"
        alt="Image 3"
        fill
        className="object-cover"
      />
    </div>

    <div className="aspect-square relative overflow-hidden border-l-3 border-b-3 border-[var(--primary)] rounded-md">
      <Image
        src="/manufacturing/Manufacturing4.png"
        alt="Image 4"
        fill
        className="object-cover"
      />
    </div>

  </div>
</div>

        </div>
      </div>

    </div>


  );
}
