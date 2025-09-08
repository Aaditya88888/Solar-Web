import { motion } from "framer-motion";

// Import all images
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

// Put them into an array
const allImages = [
  W1,
  W2,
  W3,
  W4,
  W5,
  W6,
  W7,
  W8,
  W9,
  W10,
  W11,
  W12,
  W13,
  W14,
  W15,
  W16,
  W17,
  W18,
  W19,
  W20,
  W21,
  W22,
  W23,
  W24,
  W25,
  W26,
  W27,
  W28,
  W29,
  W30,
  W31,
  W32,
];

// Generate photo objects automatically
const photos = allImages.map((img, i) => ({
  src: img,
  alt: `Black and white photo number ${i + 1}`, // you can customize alt texts later
  width: 400,
  height: 300,
}));

export default function BlackWhiteGallery() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-2">
      <motion.div
        className="flex space-x-4 max-w-full overflow-x-auto no-scrollbar"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        drag="x"
        dragConstraints={{ left: -300, right: 0 }}
        dragElastic={0.2}
      >
        {photos.map(({ src, alt, width, height }, index) => (
          <motion.img
            key={index}
            src={src}
            alt={alt}
            className="flex-shrink-0 object-cover rounded-xl shadow-md"
            style={{ width: width + "px", height: height + "px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
