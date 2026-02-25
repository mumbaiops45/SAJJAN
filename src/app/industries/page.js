"use client";

import Image from "next/image";
const industriesServed = [
  {
    image: "/industries/STEEL INDUSTRY.png",
    title: "STEEL INDUSTRY / GALVANIZING LINES",
    description:
      "SAJJAN produces a wide variety of parts and assemblies made by Centrifugal and Static Casting Process which are used in the steel and stainless steel mills and also furnace manufacturers. Products such as Radiant Tubes, Continuous annealing line Rolls, Galvanizing Line Rolls, Sink Rolls, Stabilizer Rolls, Sink roll Arms, Canalloy Bushes, Bushes in alloy, Hardening Furnace Rolls, Skid Rider bars, Walking Beams, Discharge rollers, and Furnace Roll Ends are regularly produced in Heat Resistant and Corrosion Resistant grades such as 1.4849, 2.4849,1.4848 etc.",
    products: [
      "Stabilizer Rolls",
      "Canalloy Bushes",
      "Sink Rolls",
      "Cobalt Alloy Sleeves",
      "Sink Roll Arms",
      "Air Injection Tubes",
      "Feed Tubes",
      "Coal Throw Pipes",
      "Thermowells",
      "Swirlers",
      "Radiant Tubes",
      "Centrifugal cast tube with high wall thickness",
      "Hardening Furnace rolls for plates",
      "Radiant Tube Assemblies with bellows",
      "Cast Bends with bewelled ends",
      "Charge and discharge rollers",
      "Flue gas dampers"
    ]
  },
  {
    image: "/industries/CEMENT INDUSTRY.png",
    title: "CEMENT INDUSTRY",
    description:
      "SAJJAN is a major contributor in catering to the requirements of the Cement Industry. Cement industry demands quality products to ensure durability in huge productions without any risk of breakdowns. Our manufactured products fulfil their stringent requirements. All the products manufactured at SAJJAN go through strict quality checks at all stages before being supplied to customers. Once these are erected and put into function, there is no risk of breakdowns.",
    products: [
      "Cooler Grate Plates",
      "Drag Chain Links",
      "Kiln Outlets Sector",
      "Immersion Tubes for Pre Heater",
      "Dipping Tube Assemblies"
    ]
  },
  {
    image: "/industries/PUMPS.png",
    title: "PUMPS / VALVES & IMPELLORS",
    description:
      "SAJJAN manufactures several grades of stainless steel for pump and valve parts including CF3M, CF3, CF8M, 316L 2507, 2205, CD4MCuN, CW12MW, CN7M, 17-4PH, Hastelloys. The cast pumps and valves serve an array of industries including oil and gas, desalination, chemical, nuclear and waste. Our in-house heat-treat and water-quench facilities are essential when dealing with the more sophisticated grades of stainless steel involved in pump and valve application. Non-destructive testing on these parts can include chemistry, tensile, hardness, elongation, liquid penetrant inspection, x-ray, and ultrasonic testing.",
    products: [
      "Bowl",
      "Suction Guide for Feed Pump",
      "Diffusers",
      "Pumps",
      "Impellers",
      "Seat Rings",
      "Control Cages",
      "Ring Joint Gaskets"
    ]
  },
  {
    image: "/industries/FOOD TECHNOLOGY.png",
    title: "FOOD TECHNOLOGY",
    description:
      "SAJJAN uses advanced CAD licence for assembly checks of the parts manufactured while designing phase. We specialize in Ultraclean stainless steel castings for food industry. The parts are manufactured with high-quality clean metal ingots using latest de-gassing technology for producing ultra-clean castings. These parts are duly pickled and passivated before and after machining. The parts are machined to the print dimensions using world class CNC and VMC machining centres. Most of the parts are in ready to fit condition. Some of the alloys used for manufacturing the parts are SS304L, SS316L, CF16F, CF3M, 17-4ph, 2205, 2507, CD4MCuN, CA6NM, and Duplex stainless steel.",
    products: [
      "Mixing Blades",
      "Mincer Machine Body",
      "Lobe type Pumps",
      "PD Pump Cover",
      "Mixing Impellors",
      "Positive Displacement Pumps"
    ]
  },
  {
    image: "/industries/PETROCHEMICAL INDUSTRY.png",
    title: "PETROCHEMICAL INDUSTRY",
    description:
      "We intimately understand petrochemical environments and ensure that our castings will provide years of trouble-free service under the most demanding conditions. Typical products include manifold assemblies, tube sheets, radiant tube trees, furnace coils, bulkhead tees, valves, flow control devices, and pumps. Alloy choices include any alloy castable at atmospheric conditions. Secondary operations are also available to further expand the mechanical properties of petrochemical castings, including heat treating, surface finishing, plating & painting, and metallurgical testing.",
    products: [
      "Tube Support",
      "Tube Sheet",
      "Tube Hangers",
      "Tube",
      "Sheet Holders",
      "Radiant Tubes",
      "Tube Sheet Brackets",
      "Cast Tube Supports",
      "Petrochemical Elbows."
    ]
  },
  {
    image: "/industries/Heat Treatment Fixtures.png",
    title: "Heat Treatment Fixtures",
    description:
      "Sajjan have been designing Heat Treatment Fixtures for many machined and forged components for more than 2 decades. We have a vast expertise in design and manufacture of fixtures that leads to better productivity, and minimal distortion of components. With heat treatment, the reduced per ton cost in most application can be upto 20-30% with modification in designing and sound methoding techniques. We have very a huge satisfied clientele of Heat Treatment products who have saved as high as 40% of their annual expenditure on Heat Treatment Fixtures.",
    products: [
      "Charge Basket and Carriers",
      "Annealing Baskets",
      "Rails and Rollers",
      "Furnace Piers",
      "Charge carrier for Pit furnace",
      "Cross Beams / Loading bars / Pillars and Bridging arms",
      "Cast Conveyor Belt",
      "Walking beam furnace Spares",
      "Skid riders and rider bars",
      "Shaker hearth furnace plates"
    ]
  }
];

export default function IndustryPage() {
  return (
    <>
      <h1 className="pt-20 pb-10 text-center">
        <span className="text-[var(--primary)]">Industries </span>We Serve
      </h1>
      <p className="text-gray-400 text-center px-15">SAJJAN serve a host of industries. With our in-house designing unit and state-of-the-art manufacturing plant, our products undergo stringent quality checks and are recognized in the market for its superior quality and variety. Some of the industries that we serve are petrochemical, automobile, pumps, valves, steel, railway, paper and pulp, glass, cement, power generation, and general engineering.</p>
      <div className="w-full">

        {industriesServed.map((industry, index) => {

          const isImageLeft = index % 2 === 0;

          return (
            <section key={index} className="py-10 px-15 w-full">
              <div className="max-w-7xl mx-auto">

                {/* ===== SECTION MAIN HEADING ===== */}
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
                    style={{ color: "var(--primary)" }}
                  >
                    {industry.title}
                  </h2>
                </div>

                {/* ===== MAIN GRID ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                  {/* ===== IMAGE CARD LEFT ===== */}
                  {isImageLeft && (
                    <div className="lg:col-span-6">
                      <IndustryCard industry={industry} />
                    </div>
                  )}

                  {/* ===== PRODUCTS SIDE ===== */}
                  <div className="lg:col-span-6">

                    {/* PRODUCTS HEADING */}
                    <div className="mb-6">
                      <h3
                        className="text-lg md:text-xl font-semibold"
                        style={{ color: "white" }}
                      >
                        Products in this category include
                      </h3>
                    </div>

                    {/* PRODUCTS GRID */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                      {industry.products.map((product, i) => (
                        <div
                          key={i}
                          className="
            backdrop-blur-md
            bg-white/5
            border border-white/10
            border-t-4
            rounded-xl
            p-5
            text-center
            shadow-md
            hover:shadow-xl
            hover:scale-[1.02]
            transition
            flex justify-center items-baseline-center
          "
                          style={{ borderTopColor: "var(--primery)" }}
                        >
                          <p className="text-gray-200 text-sm md:text-base font-medium">
                            {product}
                          </p>
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* ===== IMAGE CARD RIGHT ===== */}
                  {!isImageLeft && (
                    <div className="lg:col-span-6">
                      <IndustryCard industry={industry} />
                    </div>
                  )}

                </div>

              </div>
            </section>
          );
        })}

      </div>
    </>

  );
}


/* ===== INDUSTRY MAIN CARD COMPONENT ===== */

function IndustryCard({ industry }) {
  return (
    <div
      className="
        backdrop-blur-lg
        bg-white/10
        border border-white/20
        rounded-2xl
        overflow-hidden
        shadow-2xl
        text-center
        h-full
      "
    >
      <div className="relative w-full h-60 md:h-90">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          className="object-fill"
        />
      </div>

      <div className="p-6">
        {/* <h2
          className="text-xl md:text-2xl font-bold mb-4"
          style={{ color: "var(--primary)" }}
        >
          {industry.title}
        </h2> */}

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          {industry.description}
        </p>
      </div>
    </div>
  );
}