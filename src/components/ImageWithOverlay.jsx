import { motion } from "framer-motion";
import localImage from "../Images/Team.webp";
const ImageWithOverlay = () => {
  return (
    <div className="relative w-full h-[100vh] group ">
      {/* Motion Image */}
      <motion.img
        src={localImage}
        alt="banner"
        className="w-full h-full object-cover"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.h2
          className="text-white text-7xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
