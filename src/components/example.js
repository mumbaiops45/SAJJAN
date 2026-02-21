"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

export function TimelineCard({
  year,
  title,
  description,
  image,
  index,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
          }, index * 400);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        transform
        ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6"}
        bg-white/10 backdrop-blur-md
        rounded-2xl shadow-xl overflow-hidden
      `}
    >
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm opacity-80">
          <FaCalendarAlt />
          <span>{year}</span>
        </div>

        <p className="text-sm opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
}