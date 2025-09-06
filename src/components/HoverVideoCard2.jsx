import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Play / Pause icons
import { motion } from "framer-motion";

const reelsData = [
  {
    role: "Employees Are Our Partners",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670833/Our_Employees_Are_Our_Partner_easwe4.mp4",
  },
  {
    role: "25 Years into Energy",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670833/25_years_into_energry_xsxymp.mp4",
  },
  {
    role: "Company is a Group Company",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670830/Our_Company_Is_A_Group_Company_klspkt.mp4",
  },
  {
    role: "I Am A Worker Not Owner",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670831/I_Am_A_Worker_Not_A_Owner_rcslnv.mp4",
  },
  {
    role: "Mission & Vision",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670833/Mission_And_Vision_xcrjkt.mp4",
  },
  {
    role: "We Believe in Solution",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670833/We_Believe_In_Solution_Based_Approach_tinnqb.mp4",
  },
];

const HoverVideoCard2 = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        video.pause();
      }
    });

    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-green-800 mb-8">
          Our Founder Philosophy
        </h2>

        {/* Horizontal Carousel */}
        <div className="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide gap-4">
          {reelsData.map((reel, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 snap-start rounded-lg shadow-md bg-[#787878] p-2 cursor-pointer"
              style={{
                width: "100%",
                maxWidth: "170px",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <motion.video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={reel.reel}
                  className="w-full h-full object-cover"
                  playsInline
                  whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                  transition={{ duration: 0.3 }}
                />
                <button
                  onClick={() => handlePlayPause(index)}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#787878] text-white p-2 rounded-full hover:bg-[#555] transition"
                >
                  {playingIndex === index ? (
                    <FaPause size={12} />
                  ) : (
                    <FaPlay size={12} />
                  )}
                </button>
              </div>
              <p className="mt-2 text-[10px] sm:text-xs text-gray-100 text-center font-medium">
                {reel.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoverVideoCard2;
