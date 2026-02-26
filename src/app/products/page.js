"use client";
import React, { useState } from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight,ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const productCategories = [
  {
    title: "CAST BELTS AND SPARES",
    description:
      "Manufacturing high-performance cast link belts and spares designed for durability, heat resistance, and reliable operation in demanding industrial environments.",
    products: [
      {
        name: "CAST LINK BELTS",
        description:
          "Cast Link belts are often used for Fastener industry and Hand tool industry as well besides Automobile industry. These are often designed for heat treatment capacity starting from 300 kg upto 1500 kg an hour, These are available in standard designs and supplied in ready to fit conditions along with Centrifugal Cast Drive Rolls and deflection rollers.",
        image: "/product/CAST LINK BELTS.jpg",
      },
    ],
  },

  {
    title: "HEAT TREATMENT FIXTURES",
    description:
      "Comprehensive range of heat treatment fixtures engineered for strength, dimensional stability, and long service life in high-temperature furnace applications.",
    products: [
      {
        name: "BASE GRIDS",
        description:
          "Base Grids are used in all kind of furnaces. Mostly the charge material is either located on sub Assembly Fixtures of directly to the Grid. These Base Grids or Charge Grids are made up of Heat Resistant steel and can withstand a temperature upto 1200 Degree C, These products are used in Hardening Furnaces, Annealing furnaces, Carburising Furnaces Etc",
        image: "/product/BASE GRIDS.jpg",
      },
      {
        name: "STACKABLE GRIDS",
        description:
          "These type of Grids are used for Bulk production with easy loading unloading and carrying feature. The purpose is to give each component its space for uniform and high quality heat treatment. Sajjan has got a team of 8 people in Design which gives customised solution and work in detail with the requirement of its customers.",
        image: "/product/STACKABLE GRIDS.jpg",
      },
      {
        name: "CHARGING FIXTURES",
        description:
          "Charging Fixtures are a complete set of fixtures required for heat treatment of components in Vacuum furnace, Sealed Quench Furnace or Continuous Gas carburising Furnace. These fixtures include Base Grids, Top Grids, Intermediate Grids, Pillars, Bridging Arms, cross beams, Loading Rods, spacers and locking links. These are often available in ready condition that means many times the customer has to make zero investment on Tooling, Modelling or development. Please ask for the Standard sizes to our sales team..",
        image: "/product/CHARGING FIXTURES.jpg",
      },
      {
        name: "BASKETS",
        description:
          "We make High Quality Baskets for Heat Treatment Industry, These are often available in standard sizes which helps our to save time and money on development and lead time. These last for a long period and trouble free, For inside of the basket there are many possibilities such as wire meshes / Perforated sheets or cast segments which ensure sufficient circulations of Air and Liquids.",
        image: "/product/BASKETS.jpg",
      },
      {
        name: "MESHES",
        description:
          "These are used either for layers or for preventing the small components getting out of the basket. These are often available in ready condition and can be supplied in short notice in Heat resistant materials. We can also supply perforated sheets and cast segments for this application.",
        image: "/product/MESHES.jpg",
      },
      {
        name: "FIXTURES FOR PIT FURNACE / GCF",
        description:
          "Our Company Specialize in Fixtures for Pit Type Furnace / GCF. These comes in standard design options and customised designs too, Our design office has got good experience in designing fixtures to suit customer requirements. There are various sizes available from 600 MM diameter to 2200 MM Diameter with charge carrying capacity upto 12000 Kg in one batch. Our customer includes jobbing heat treaters and industry leaders as well.",
        image: "/product/FIXTURES FOR PIT FURNACE.jpg",
      },
      {
        name: "FURNACE FURNITURE / ACCESSORIES",
        description:
          "These include spares such as Lifting Beams, Impellors, Brick Supports, Rails, Rollers, Skid rail, Chain Guides, Piers etc. We can offer quick and customised solution and can offer good savings.",
        image: "/product/FURNACE FURNITURE.jpg",
      },
      {
        name: "FURNACE RAIL AND ROLLERS",
        description:
          "Roller Rail and Rollers are the life line of Hardening and Tempering Furnace, It is very important that these are manufactured using best technique to ensure the perfect alignment and maximum life. Since these are grouted inside the furnace it is very important to have only the best quality. These are mostly made in Heat Resistant Alloys with working temperature from 700 degree C to 1150 Degree C.",
        image: "/product/FURNACE RAIL AND ROLLERS.jpg",
      },
      {
        name: "PUSHER HEADS AND CHAIN GUIDE",
        description:
          "We manufacture Chain guide and Pusher Head Assemblies for many furnace manufacturers. These are often available in standard sizes. All the manufacturing from Development to machining is done in house by our qualified and experienced engineering team.",
        image: "/product/PUSHER HEADS AND CHAIN GUIDE.jpg",
      },
      {
        name: "JOB PEDESTALS / FURNACE PIERS",
        description:
          "We specialize in manufacturing of high quality Furnace Job Pedestals and Piers for Job resting in furnaces. These piers are helpful in increasing the life of refractory life. These type of parts normally last very long and trouble free.",
        image: "/product/JOB PEDESTALS.jpg",
      },
      {
        name: "WALKING BEAMS SPARES",
        description:
          "Sajjan has experience of 2 decades in manufacturing spares such as Walking Beam, Fixed Beam, Water cooled Rollers, Charge and Discharge rolls for Walking Beam Furnace. Our experience makes us deliver best quality components at reasonable prices with faster and shorter lead times. We know very well the critical application and have expertise in manufacturing these parts.",
        image: "/product/WALKING BEAMS SPARES.jpg",
      },
      {
        name: "SHAKER HEARTH PLATES",
        description:
          "We make shaker Hearth Plates for size width 8 inches to 18 inches and length upto 122 inches. There ar made in Heat Resistant Cast grades like HK, HT and HU. These undergo continuous operations and are supplied in ready sizes. That means most of the furnace manufacturer use Sajjan Moulds for quick delivery to their customers and the benefit to the customer us Zero Development charge and fast turn around for the deliveries. Please ask for the standard sizes and our engineering would be happy to give you proposal.",
        image: "/product/SHAKER HEARTH PLATES.jpg",
      },
    ],
  },

  {
    title: "PARTS FOR FOOD MACHINERIES",
    description:
      "Precision-cast components for food processing equipment ensuring hygiene standards, corrosion resistance, and consistent performance.",
    products: [
      {
        name: "Mixing Blades/PD Pump Parts",
        description:
          `SAJJAN has more than 2 decades of experience in making mixing blades, Gear Cases, Gear Case Base, PD Pump parts, Rotors, Impellers used for food processing machinery to carry viscous and non-viscous material. We have more than 200 different types of parts in line which are supplied in ready to fit conditions using ultra-modern vertical and Horizontal machining centres equipped with CNC Coordinate Measuring machines and White light scanner for reverse engineering.\n\nSAJJAN makes critical parts for food machinery. These parts are manufactured as per ASTM/DIN Standards as per OEMs drawings. We undertake reverse engineering, Casting simulation and manufacturing using latest Horizontal & Vertical machining Centres from DMG Mori and MAZAK. We are able to achieve the toughest tolerances to exceed the industry standards. We have more than 15 years’ experience in the same field manufacturing parts for Pumps, Filling machine, PD Pumps, Control Valves, Dough Mixer and Mixing blades for food industry`,
        image: "/product/Mixing Blades.jpg",
      },
    ],
  },

  {
    title: "ROLLERS AND RADIANT TUBES",
    description:
      "High-temperature resistant rollers and radiant tube assemblies designed for efficient heat transfer and reliable furnace operations.",
    products: [
      {
        name: "FURNACE ROLLS",
        description:
          "Sajjan produces high quality furnace rolls for Cast Conveyor Belt furnaces, Reheating furnaces, Tube mills, Plate Reheating furnaces etc. These are often available in wide variety of standard sizes and grades to choose. We offer shorter lead times, Excellent Quality with zero customer complaint and competitive prices which will make us your one stop solution for all your requirements.",
        image: "/product/FURNACE ROLLS a.jpg",
      },
      {
        name: "RADIANT TUBE ASSEMBLIES",
        description:
          "Sajjan Manufactures high quality Radiant Heater tubes for all types of Furnaces. These are available in types such as W type radiant Tubes, U type radiant tubes etc. Most of the time these go for stringent testing such as pressure testing, Dye Penetrant test, Ultrasonic and X-ray testing procedures. Our Welders are qualified and follow established PQR and WPS.",
        image: "/product/RADIANT TUBE ASSEMBLIES.jpg",
      },
      {
        name: "RECUPERATOR TUBE ASSEMBLIES",
        description:
          "AT SAJJAN, We specialise in manufacturing of Cast Recuperator Assemblies, At the moment We are manufacturing these Assemblies for many Furnace manufacturers for their requirement across the world. These Recuperators are required to qualify very stringent testing conditions. We can offer solution for low and medium volume requirements as well. In case the sizes are un standard or require custom designs, we would be happy to develop these on your designs with IPR protection.",
        image: "/product/RECUPERATOR TUBE ASSEMBLIES.jpg",
      },
      {
        name: "RIDER BARS",
        description:
          "We make Rider Bars and skid buttons for critical applications, Most of the parts are made in High Cobalt grades to ensure long life under tough operating conditions. These alloys have excellent mechanical properties at elevated temperature. Sajjan is the prime source for Rider bars and Skid riders for many Steel Plants across world.",
        image: "/product/RIDER BARS.jpg",
      },
    ],
  },

  {
    title: "SEPARATORS AND DECANTERS",
    description:
      "Robust cast components for separator and decanter systems ensuring operational efficiency, durability, and resistance to harsh industrial conditions.",
    products: [
      {
        name: "SEPARATORS",
        description:
          "SAJJAN has got expertise in world class quality manufacturing Cylinders, Cones, Hubs and Bowl Shells meant for separators and decanter Centrifuge. Some of our customers include world’s biggest names in the field of separators. We can make tubes upto 1000 mm outer dia and max weight of 1200 kg single piece.",
        image: "/product/GALAVNIZING.jpg",
      },
    ],
  },

  {
    title: "GALVANIZING LINE SPARES",
    description:
      "Specialized cast spares for galvanizing lines built to withstand corrosive environments and continuous high-temperature operations.",
    products: [
      {
        name: "GALAVNIZING",
        description:
          "SAJJAN produces wide variety of parts and assemblies made by Centrifugal and Static Casting Process which are used in the Steel and Stainless Steel Mills and also Furnace Manufacturers. Products such as Radiant Tubes, Continuous annealing line Rolls, Galvanizing Line Rolls, Sink Rolls, Stabilizer Rolls, Sink roll Arms, Canalloy Bushes, Bushes in Cobalt alloy, Hardening Furnace Rolls, Skid Rider bars, Walking Beams , Discharge rollers and Furnace Roll Ends are regularly produced in Heat Resistant and Corrosion Resistant grades such as 1.4849, 2.4849,1.4848 etc.\nStabliser Rolls\nCanalloy Bushes\nSink Rolls\nCobalt Alloy Sleeves\nSink Roll Arms\nAir Injection Tubes\nFeed Tubes\nThermowells\nSwirlers\nRadiant Tubes\nCentrifugal cast tube with high wall thicknessHardening Furnace rolls for plates\nRadiant Tube Assemblies with bellows\nCast Bends with bewelled ends\nCharge and discharge rollers\nFlue gas dampers",
        image: "/product/GALAVNIZING.jpg",
      },
    ],
  },

  {
    title: "PETROCHEMICAL INDUSTRY",
    description:
      "Precision-engineered castings and spares tailored for petrochemical industry applications requiring heat resistance and structural integrity.",
    products: [
      {
        name: "SPARES FOR PETROCHEMICAL INDUSTRY",
        description:
          "We make critical spares for Petrochemical Industry Furnace in Heat Resistant Cast grades for various customers. These parts include Tube Supports, Tube Sheets, Cast Bends, Centrifugal Cast Tubes, Tube Hangers and spares.",
        image: "/product/SPARES FOR PETROCHEMICAL INDUSTRY.jpg",
      },
    ],
  },

  {
    title: "CEMENT INDUSTRY",
    description:
      "Durable industrial cast components developed for heavy-duty cement plant operations with high wear resistance and thermal stability.",
    products: [
      {
        name: "SPARES FOR CEMENT INDUSTRY",
        description:
          "Sajjan has a vast experience in catering to the requirements of Cement Industry. As we all know that cement industry requires best quality products with long life to ensure trouble free huge productions without breakdowns. Our manufactured products fall best under there stringent requirements. We make sure that the products manufactured by us qualify stringent quality check at all stage before supplying to customer. Once these are erected and put in functioning these are never down during peak productions.\nDrag Chain Links\nCooler Grate Plates\nKiln Outlets Sector\nImmersion Tubes for Pre Heater\nDipping Tube Assemblies",
        image: "/product/SPARES FOR CEMENT INDUSTRY.jpg",
      },
    ],
  },
];

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // for scroll horizontal of catagorys
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <h1 className="pt-20 pb-10 text-center text-4xl font-bold">
        Our <span className="text-[var(--primary)]">Products</span>
      </h1>
      <section className="relative py-10 px-6 lg:px-20 ">

        {/* Top Decoration Line */}
        <div className="max-w-6xl mx-auto">



          {/* Description Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 lg:p-12 mb-20 border border-[var(--primary)]/20">

            <p className="text-gray-600 leading-relaxed mb-6">
              The product portfolio of SAJJAN can be widely divided into three categories: heat treatment fixtures, Spun Cast/ Centrifugal Cast Products and Corrosion Resistant Castings
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The range of products include fixtures, trays, grids and cast baskets to meet a number of furnace application and processes such as hardening, tempering, iso thermal annealing, carburising, nitriding and vacuum heat treatment. Backed by an experienced designing team, we are competent to make fixtures that are light weight. We use of the latest stress analysis software and can simulate the total load analysis. At SAJJAN, we design fixtures in accordance to the material properties and by calculating the strength of the material according to stress analysis. Our fixtures are long lasting and have several advantages:
            </p>
            
              <div className="">
                <p className="text-lg leading-relaxed max-w-4xl">
                  The product portfolio of
                  <span className="text-[var(--primary)] font-semibold"> SAJJAN </span>
                  can be widely divided into three categories:
                  <span className="font-semibold"> Heat Treatment Fixtures</span>,
                  <span className="font-semibold"> Spun Cast / Centrifugal Cast Products</span> and
                  <span className="font-semibold"> Corrosion Resistant Castings</span>.
                </p>
              </div>
            
          </div>

          {/* Advantages */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Left Advantages */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-500 border-t-4 border-[var(--primary)]">
              <ul className="space-y-4 text-gray-700">
                <li>• Light Weight Fixtures</li>
                <li>• Better Yield i.e. Fixture to weight ratio</li>
                <li>• Better Load calculations to give longer life</li>
                <li>• Expertise in Custom design fixtures</li>
                <li>• Lower Fixture Distortions</li>
              </ul>
            </div>

            {/* Right Advantages */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-500 border-t-4 border-[var(--primary)]">
              <ul className="space-y-4 text-gray-700">
                <li>• Easy loading and unloading</li>
                <li>• Zero Modelling cost in many cases</li>
                <li>• One Price</li>
                <li>• Quick and Shorter Delivery Times</li>
                <li>• Efficient Sales and after sales team</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      <section className="py-10 px-6 lg:px-15">

        {/* Category Tabs */}
        <div className="relative mt-12">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--primary)] text-white p-2 rounded-full shadow-lg hover:bg-[var(--secondary)] transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-12"
          >
            {productCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-semibold transition duration-300
          ${activeIndex === index
                    ? "bg-[var(--primary)] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-[var(--secondary)] hover:text-white"
                  }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--primary)] text-white p-2 rounded-full shadow-lg hover:bg-[var(--secondary)] transition"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Category Description */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-400">
            {productCategories[activeIndex].description}
          </p>
        </div>


        {/* Product Grid */}
        <div
          className={`mt-12 transition-all duration-500
    ${productCategories[activeIndex].products.length === 1
              ? "flex justify-center"
              : productCategories[activeIndex].products.length === 2
                ? "grid grid-cols-1 sm:grid-cols-2 gap-8"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            }
  `}
        >
          {productCategories[activeIndex].products.map((product, i) => (
            <div
              key={i}
              className={`bg-white shadow-xl rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-500
        ${productCategories[activeIndex].products.length === 1
                  ? "w-full sm:w-3/4 lg:w-1/2"
                  : ""
                }
      `}
            >
              <div className="relative w-full h-70">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-fill rounded-t-2xl"
                />
              </div>

              <div className="p-6">
                <div className="relative inline-block pb-2
      after:content-['']
after:absolute
after:left-0
after:bottom-0
after:w-full
after:h-1
after:rounded-full
after:bg-gradient-to-r
after:from-[var(--primary)]
after:to-transparent"><h3 className="text-xl font-semibold text-[var(--primary)]">
                  {product.name}
                </h3></div>
                
                <p className="text-gray-600  pt-2 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>
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
};

export default Product;