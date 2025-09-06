import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CompanySection = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [showVideo, setShowVideo] = useState(false);

  const contentMap = useMemo(
    () => ({
      mission: {
        text: "At Divy Power Pvt. Ltd., our mission is to make clean, renewable energy accessible to everyone...",
        img: "https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg",
        note: "We are driven by purpose — to energize every corner sustainably.",
      },
      vision: {
        text: "We envision a future where every home and business uses clean solar energy...",
        img: "https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg",
        note: "Our vision powers a cleaner tomorrow.",
      },
      why: {
        text: "At Divy Power Pvt. Ltd., we don’t just install solar systems — we build lasting energy partnerships...",
        img: "https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg",
        note: "We are trustworthy — we don’t disappear after installation.",
      },
    }),
    []
  );

  const tabLabels = {
    mission: "Our Mission",
    vision: "Our Vision",
    why: "Why Choose Us?",
  };

  const activeContent = contentMap[activeTab];

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      activeTab === tab
        ? "bg-green-700 text-white shadow"
        : "bg-white text-green-800 border border-green-600 hover:bg-green-100"
    }`;

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white relative">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-10">
        Our <span className="text-black">Company</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg"
            alt="Solar panels"
            className="rounded-2xl shadow-lg object-cover w-full max-h-[400px] sm:max-h-[480px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-6 text-center lg:text-left leading-snug">
            Save The Environment
            <br />
            Produce Your Own <br />
            <span className="text-green-700 About">Clean Energy</span> <br />
            Save The Environment
          </h3>

          {/* Tabs with subtle infinite animation */}
          <div className="flex About flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6">
            {Object.keys(tabLabels).map((key) => (
              <motion.button
                key={key}
                className={tabStyle(key)}
                onClick={() => setActiveTab(key)}
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tabLabels[key]}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p className="mb-6 About">{activeContent.text}</p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Play Button */}
                <motion.div
                  className="relative w-full sm:w-28 h-36 rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setShowVideo(true)}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1, 1.05],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 shadow-lg flex items-center justify-center hover:scale-105 transition">
                      <FaPlay className="text-white text-xl sm:text-2xl" />
                    </button>
                  </div>
                </motion.div>

                {/* Note */}
                <p className="About text-black text-sm sm:text-base">
                  {activeContent.note}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-3xl aspect-video">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-6 -right-6 text-white bg-red-600 w-10 h-10 flex items-center justify-center rounded-full z-50 shadow-lg hover:bg-red-700 transition"
              >
                <IoClose size={20} />
              </button>

              <iframe
                src="https://res.cloudinary.com/dlkwlywps/video/upload/v1755670732/Divy_Bbe_About_page_video_okuiui.mp4"
                allow="autoplay"
                title="Divy Power Video"
                className="w-full h-full rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CompanySection;
