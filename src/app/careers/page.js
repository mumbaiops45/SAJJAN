"use client";

import Image from "next/image";

export default function CareersPage() {
  return (
    <>
      <h1 className="pt-20 pb-10 text-center">
        Join Our
        <span className="text-[var(--primary)]"> Team</span>
      </h1>

      <section>
        <div className="min-h-[60vh] px-4 md:px-10 lg:px-24 py-10">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* TEXT SECTION */}
            <div className="flex flex-col items-start md:w-1/2">
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
                after:to-transparent">
                <span className="text-[var(--primary)]">
                  Join Us
                </span>
              </h2>

              <div className="space-y-4 pt-4 text-gray-300 leading-relaxed">
               <p>
  SAJJAN is a strong believer in teamwork. A strong team can empower the organization to gain an edge in the industry. Our focus is consistently on nurturing our workforce through various employee training and engagement to keep them updated to the latest technology and more to keep the motivation alive. The company takes care of both personal and professional growth of each employee, to ensure a happy and healthy workforce.
</p>

<p>
  SAJJAN is a fast expanding organization and we are looking for like-minded people to join our team for a long-term association. If you are motivated and would like to be a part of an innovative and professional team, we would be happy to welcome you to SAJJAN.
</p>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="md:w-1/2 w-full">
              <div className="relative group">
                <Image
                  src="/Careers/join us.png"
                  alt="Careers"
                  width={600}
                  height={400}
                  className="w-full object-cover rounded-2xl shadow-2xl transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/20"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}