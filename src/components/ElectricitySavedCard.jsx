import { FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";

const ElectricitySavedCard = () => {
  return (
    <motion.div
      className="bg-[#111827] rounded-2xl shadow-lg flex items-center justify-center p-4 font-['Inter'] w-full max-w-[460px] mx-auto
                 h-[350px] sm:h-[380px] md:h-[320px] lg:h-[320px] xl:h-[320px] 2xl:h-[320px]
                 transition-transform duration-300"
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
    >
      <div className="flex flex-col items-center justify-center p-4 sm:p-6 w-64 sm:w-72 md:w-72 lg:w-80">
        <h2 className="text-gray-100 font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-center">
          Electricity Saved
        </h2>

        {/* SVG Circle */}
        <div className="relative flex justify-center items-center mb-3 sm:mb-4 w-36 h-36 sm:w-40 sm:h-40">
          <svg
            className="w-full h-full"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background circle */}
            <circle cx="80" cy="80" r="70" stroke="#D9D9D9" strokeWidth="20" />
            {/* Red Arc - Electricity */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#EF4444"
              strokeWidth="20"
              strokeDasharray="87.96 439.82"
              strokeDashoffset="0"
              strokeLinecap="round"
              transform="rotate(-90 80 80)"
            />
            {/* Green Arc - Solar Energy */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#22C55E"
              strokeWidth="20"
              strokeDasharray="351.86 439.82"
              strokeDashoffset="-87.96"
              strokeLinecap="round"
              transform="rotate(-90 80 80)"
            />
          </svg>

          {/* Center Icon and Text */}
          <div className="absolute flex flex-col items-center -mt-2">
            <FaBolt className="text-white text-2xl sm:text-3xl mb-1" />
            <span className="text-white font-semibold text-2xl sm:text-3xl leading-none">
              75%
            </span>
            <span className="text-white text-xs sm:text-sm mt-1 text-center">
              Electricity
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-4 mb-2 text-center">
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm"
              style={{ backgroundColor: "#EF4444" }}
            ></div>
            <span className="text-white text-xs sm:text-sm">Electricity</span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm"
              style={{ backgroundColor: "#22C55E" }}
            ></div>
            <span className="text-white text-xs sm:text-sm">Solar Energy</span>
          </div>
        </div>

        <p className="text-white font-semibold text-sm sm:text-base text-center">
          75% <span className="font-normal">electricity saved</span>
        </p>
      </div>
    </motion.div>
  );
};

export default ElectricitySavedCard;
