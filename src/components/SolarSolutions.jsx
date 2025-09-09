import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sol from "../Images/Sol.webp";

const solutionData = [
  {
    title: "Homeowner Solutions",
    content: `
Enjoy reliable, eco-friendly energy at home while cutting down your electricity bills and ensuring your family’s comfort.

• Save up to 80% on monthly electricity costs  
• Battery backup for uninterrupted power during outages  
• Free site survey and customized solar system design  
• Net metering support to earn credits from surplus energy  
• Guidance on government subsidies to reduce upfront costs
    `,
  },
  {
    title: "Business Owner Solutions",
    content: `
Empower your business with solar energy that lowers costs, boosts profits, and strengthens your green image.

• Reduce operational costs with long-term energy savings  
• Scalable systems tailored to your business size and needs  
• Show customers your commitment to a sustainable future  
• Stay productive with battery backup and uninterrupted power  
• Assistance with government incentives and easy financing options
    `,
  },
  {
    title: "Utility-Scale Owner Solutions",
    content: `
Harness the power of solar for large-scale energy production and long-term profitability.

• High-capacity solar farms for maximum energy generation  
• Advanced grid integration and net metering solutions  
• Smart monitoring systems for real-time performance tracking  
• Reduced carbon footprint with renewable, clean energy  
• Support with policy compliance, land use, and subsidy benefits
    `,
  },
  {
    title: "Smart String ESS Solutions",
    content: `
Maximize efficiency and reliability with next-generation Energy Storage Systems (ESS) that keep you powered, always.

• High-efficiency battery storage for consistent power supply  
• Optimized to reduce energy wastage and lower costs  
• Seamless integration with rooftop and utility-scale systems  
• Intelligent load management for peak and off-peak hours  
• Reliable and safe with advanced protection technology
    `,
  },
  {
    title: "Smart Micro-grid Solutions",
    content: `
Build self-sustaining communities and businesses with micro-grids that deliver energy independence and resilience.

• Localized power grids for homes, businesses, and communities  
• Energy independence from unpredictable power cuts  
• Integration with renewable sources like solar and wind  
• Efficient energy distribution with minimal transmission losses  
• Smart monitoring for stable, uninterrupted electricity supply
    `,
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

const SolarSolutions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <main className="bg-white text-black max-w-7xl mx-auto p-4 sm:p-6 md:p-10 -mt-16 -translate-y-[50px] lg:-mt-[150px]">
      {/* Top Section */}
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Image with hover animation */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.4 } }}
        >
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src={Sol}
              alt="Solar energy panel"
              className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2 w-full bg-[#f8f7f0] p-6 sm:p-8 md:p-10 rounded-lg shadow-md"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-bold text-[22px] sm:text-[24px] md:text-[26px] leading-[32px] sm:leading-[34px] md:leading-[36px] mb-2 text-[#E50C0C] text-center lg:text-left">
            We don't believe in just installing Solar
            <br />
            We Believe in Solving Problems
          </h1>

          <h2 className="text-green-700 font-semibold text-md sm:text-lg mb-3 text-center lg:text-left">
            We Engineer Smart Power Solutions.
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] text-gray-700 mb-6 font-medium text-center lg:text-left">
            At <strong>DIVY Power</strong>, we believe solar isn’t just a
            product — it’s your power freedom. From site assessment to
            installation and lifelong support, we handle it all.
          </p>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start flex-wrap gap-6 md:gap-12 mb-8">
            <div className="text-center lg:text-left">
              <p className="font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-green-700">
                7,220 KWh
              </p>
              <p className="text-[12px] sm:text-[12px] md:text-[12px] text-gray-600">
                Systems Installed
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-green-700">
                15,818,000 KG
              </p>
              <p className="text-[12px] sm:text-[12px] md:text-[12px] text-gray-600">
                CO₂ Saved / Year
              </p>
            </div>
          </div>

          {/* Dropdown List */}
          <div className="w-full space-y-2 sm:space-y-3">
            {solutionData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex justify-between items-center px-4 sm:px-5 py-3 text-[14px] sm:text-[15px] font-semibold text-green-700 hover:bg-[#f0fdf4] transition-all duration-300"
                >
                  <span>{item.title}</span>
                  <motion.i
                    className={`fas fa-chevron-${
                      openIndex === index ? "up" : "down"
                    } text-sm`}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.i>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="px-4 sm:px-5 pb-3 pt-2 text-[13px] sm:text-[14px] text-gray-800 whitespace-pre-line"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default SolarSolutions;
