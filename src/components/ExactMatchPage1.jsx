import React from "react";

import L1 from "../Images/P1.webp";
import L2 from "../Images/P2.webp";
import L3 from "../Images/P3.webp";
import L4 from "../Images/P4.webp";
import L5 from "../Images/P5.webp";
import L6 from "../Images/P6.webp";
import L7 from "../Images/P7.webp";
import L8 from "../Images/P8.webp";

const logos = [L1, L2, L3, L4, L5, L6, L7, L8];

export default function ExactMatchPage1() {
  return (
    <div className="min-h-screen About1 -mt-24">
      {/* Heading */}
      <h2 className="lg:text-[30px] xl:text-[30px] 2xl:text-[30px] text-2xl font-bold text-center pt-10 text-green-800 mb-10">
        Our Clients
      </h2>

      {/* Animated Logos */}
      <div className="overflow-hidden py-10 sm:py-16 -mt-16">
        <div
          className="flex space-x-10 px-4 sm:px-8 animate-scroll"
          style={{
            animation: "scroll 20s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...logos, ...logos].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Logo ${idx}`}
              className="h-[100px] w-[120px] object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
