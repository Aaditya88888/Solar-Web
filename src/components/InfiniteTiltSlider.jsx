import React from "react";
import { motion } from "framer-motion";

// Import all 32 images
import W1 from "../Images/W1.webp";
import W2 from "../Images/W2.webp";
import W3 from "../Images/W3.webp";
import W4 from "../Images/W4.webp";
import W5 from "../Images/W5.webp";
import W6 from "../Images/W6.webp";
import W7 from "../Images/W7.webp";
import W8 from "../Images/W8.webp";
import W9 from "../Images/W9.webp";
import W10 from "../Images/W10.webp";
import W11 from "../Images/W11.webp";
import W12 from "../Images/W12.webp";
import W13 from "../Images/W13.webp";
import W14 from "../Images/W14.webp";
import W15 from "../Images/W15.webp";
import W16 from "../Images/W16.webp";
import W17 from "../Images/W17.webp";
import W18 from "../Images/W18.webp";
import W19 from "../Images/W19.webp";
import W20 from "../Images/W20.webp";
import W21 from "../Images/W21.webp";
import W22 from "../Images/W22.webp";
import W23 from "../Images/W23.webp";
import W24 from "../Images/W24.webp";
import W25 from "../Images/W25.webp";
import W26 from "../Images/W26.webp";
import W27 from "../Images/W27.webp";
import W28 from "../Images/W28.webp";
import W29 from "../Images/W29.webp";
import W30 from "../Images/W30.webp";
import W31 from "../Images/W31.webp";
import W32 from "../Images/W32.webp";

// All images
const images = [
  W1, W2, W3, W4, W5, W6, W7, W8,
  W9, W10, W11, W12, W13, W14, W15, W16,
  W17, W18, W19, W20, W21, W22, W23, W24,
  W25, W26, W27, W28, W29, W30, W31, W32,
];

// Split images into 3 sets
const col1Images = images.slice(0, 11);
const col2Images = images.slice(11, 22);
const col3Images = images.slice(22, 32);

// Single column with infinite scroll
const Column = ({ images, direction = "down", speed = 20 }) => {
  return (
    <motion.div
      className="flex flex-col gap-3"
      animate={{
        y: direction === "down" ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: speed,
      }}
    >
      {[...images, ...images].map((src, i) => (
        <div
          key={i}
          className="
            w-[140px] h-[80px]        /* mobile */
            sm:w-[160px] sm:h-[90px]  /* small screens */
            md:w-[200px] md:h-[100px] /* tablets */
            lg:w-[220px] lg:h-[110px] /* desktops */
            bg-gray-800 rounded-lg overflow-hidden shadow-md
          "
          style={{
            transform: "rotateX(8deg) rotateY(-8deg) skewX(-4deg)",
          }}
        >
          <img
            src={src}
            alt={`Image ${i + 1}`}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default function InfiniteTiltSlider() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white px-4">
      {/* Responsive Box */}
      <div className="bg-neutral-900 rounded-xl shadow-xl p-4 overflow-hidden border border-gray-700 
                      w-full max-w-[820px] h-[70vh] sm:h-[650px]">
        {/* Grid: 2 cols on mobile → 3 cols on large */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
          <Column images={col1Images} direction="down" speed={150} />
          <Column images={col2Images} direction="up" speed={150} />
          <Column images={col3Images} direction="down" speed={150} />
        </div>
      </div>
    </div>
  );
}
