import React from 'react'

const about = () => {
  return (
    <div>about</div>
  )
}

export default about



// "use client";
// import React from "react";
// import { TimelineCard } from "@/components/example";

// export default function Features5() {
//   const timeline = [
//     {
//       year: "2024",
//       title: "Next-Gen Platform Launch",
//       description:
//         "Revolutionary features that transform how teams work together.",
//       image: "/images/demo1.jpg",
//     },
//     {
//       year: "2023",
//       title: "Global Expansion",
//       description:
//         "Reaching millions of users across 50+ countries worldwide.",
//       image: "/images/demo2.jpg",
//     },
//     {
//       year: "2022",
//       title: "Enterprise Ready",
//       description:
//         "Built for scale with enterprise-grade security and reliability.",
//       image: "/images/demo3.jpg",
//     },
//     {
//       year: "2021",
//       title: "The Beginning",
//       description:
//         "Started with a simple idea to make work more efficient.",
//       image: "/images/demo4.jpg",
//     },
//   ];

//   return (
//     <section className="py-20 w-full">
//       <div className="max-w-6xl mx-auto px-4 space-y-16">

//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-4">
//             Our Journey
//           </h2>
//           <p className="text-lg">
//             Building the future, one milestone at a time
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {timeline.map((item, index) => (
//             <TimelineCard
//               key={index}
//               index={index}
//               year={item.year}
//               title={item.title}
//               description={item.description}
//               image={item.image}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }