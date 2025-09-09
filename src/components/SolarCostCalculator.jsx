import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ElectricitySavedCard = lazy(() => import("./ElectricitySavedCard"));

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SolarCostCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ bill: "" });
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://solar-6.onrender.com/api/submit",
        { bill: formData.bill }
      );
      setResults(response.data);
      setShowResults(true);
      toast.success("Calculation successful!");
      setFormData({ bill: "" });
    } catch (error) {
      toast.error("Please provide valid Electricity Bill");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setShowResults(false);
    setResults(null);
  };

  return (
    <motion.div
      className="bg-[#F8F7F0] GetFontSol px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 -translate-y-[50px] sm:translate-y-0 lg:mt-[80px] move-down-200 move-down-300 move-down-350 move-down-500 move-down-600 "
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-6 sm:mb-8" variants={cardVariants}>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E50C0C] leading-snug max-w-3xl sm:max-w-5xl mx-auto">
          Aaj hi Solar Lagwao, environment bachao <br />
          aur agle 5 saal me 3 lakh se jyada apne electricity bills par bhi
          Bachao
        </h1>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {/* Info Card */}
        <motion.section
          className="bg-[#111827] rounded-xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col transition shadow-md flex-1 min-h-[320px] sm:min-h-[300px]"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
          }}
        >
          <h2 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
            Power Your Home With Solar
          </h2>
          <p className="text-white text-xs sm:text-sm leading-relaxed mb-3">
            Discover how affordable solar can be. Enter your details below to
            get your personalized cost estimate and start saving!
          </p>
          <ul className="list-disc list-inside text-white text-xs sm:text-sm space-y-1 mb-4 sm:mb-5">
            <li>Reduce your carbon footprint</li>
            <li>Lock in energy savings</li>
            <li>Maximize your roof potential</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-auto">
            <div className="flex items-center space-x-2">
              <i className="fas fa-solar-panel text-white text-lg sm:text-xl"></i>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">
                  2500+
                </p>
                <p className="text-white text-xs sm:text-sm">
                  Systems Installed
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-leaf text-white text-lg sm:text-xl"></i>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">
                  45%
                </p>
                <p className="text-white text-xs sm:text-sm">Avg. Savings</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Calculator Card */}
        <motion.section
          className="bg-red-200 rounded-xl px-4 sm:px-6 py-4 sm:py-5 flex flex-col transition shadow-md flex-1 min-h-[320px] sm:min-h-[300px]"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
          }}
        >
          {!showResults ? (
            <>
              <p className="text-red-700 text-xs sm:text-sm uppercase tracking-widest mb-1 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                <span className="text-sm sm:text-base">
                  Solar Cost Calculator
                </span>
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-red-900 mb-3 sm:mb-4">
                Monthly Electricity Bill
              </h3>
              <form
                className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700 flex-1 flex flex-col justify-between"
                onSubmit={handleSubmit}
              >
                <div>
                  <div className="flex items-center border border-red-300 rounded-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white hover:shadow-md transition">
                    <i className="fas fa-bolt text-red-600 mr-2 sm:mr-3"></i>
                    <input
                      name="bill"
                      type="text"
                      value={formData.bill}
                      onChange={handleChange}
                      placeholder="Enter Your Electricity Bill (₹)"
                      className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent text-xs sm:text-sm"
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.03 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  className={`w-full ${
                    loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-500"
                  } text-white font-bold rounded-full py-2 sm:py-2.5 mt-2 sm:mt-3 transition text-xs sm:text-sm`}
                >
                  {loading ? "Calculating..." : "Calculate Cost"}
                </motion.button>
              </form>
            </>
          ) : (
            <>
              <h3 className="text-base sm:text-lg font-semibold text-red-900 mb-3 sm:mb-4">
                Estimated Results
              </h3>
              <ul className="text-xs sm:text-sm text-gray-700 space-y-1.5 sm:space-y-2">
                <li>
                  <strong>Monthly Saving:</strong> ₹{results.monthly_saving}
                </li>
                <li>
                  <strong>Net Cost:</strong> ₹{results.net_cost}
                </li>
                <li>
                  <strong>ROI:</strong> {results.roi}%
                </li>
                <li>
                  <strong>Roof Area:</strong> {results.roof_area} sq. ft.
                </li>
                <li>
                  <strong>System Size:</strong> {results.system_size} kW
                </li>
                <li>
                  <strong>Total Cost:</strong> ₹{results.total_cost}
                </li>
              </ul>
              <button
                onClick={handleCancel}
                className="w-full mt-2 sm:mt-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-full py-2 sm:py-2.5 text-xs sm:text-sm transition"
              >
                Reset
              </button>
            </>
          )}
        </motion.section>

        {/* Saved Impact Card */}
        <motion.section
          className="rounded-xl flex items-center justify-center transition shadow-md flex-1 min-h-[320px] sm:min-h-[300px]"
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
            <Suspense fallback={<div></div>}>
              <ElectricitySavedCard />
            </Suspense>
          </div>
        </motion.section>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
};

export default SolarCostCalculator;
