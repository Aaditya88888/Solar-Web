import { useState } from "react";
import { motion } from "framer-motion";
import ElectricitySavedCard from "./ElectricitySavedCard";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [formData, setFormData] = useState({
    bill: "",
  });
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
      const msg = error.response?.data?.error || error.message;
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
      className="bg-[#F8F7F0] GetFontSol px-4 md:px-10 lg:px-16 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-8 " variants={cardVariants}>
        <h1 className="text-xl sm:text-2xl md:text-xl font-bold text-[#E50C0C] leading-snug max-w-5xl mx-auto">
          Aaj hi Solar Lagwao, environment bachao <br />
          aur agle 5 saal me 3 lakh se jyada apne electricity bills par bhi
          Bachao
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {/* Info Card - Blue Theme */}
        <motion.section
          className="bg-[#111827] rounded-xl px-6 py-5 h-full flex flex-col hover:shadow-xl transition"
          variants={cardVariants}
        >
          <h2 className="text-xl font-semibold text-white mb-3">
            Power Your Home With Solar
          </h2>
          <p className="text-white text-sm leading-relaxed mb-3">
            Discover how affordable solar can be. Enter your details below to
            get your personalized cost estimate and start saving!
          </p>
          <ul className="list-disc list-inside text-white text-sm space-y-1.5 mb-5">
            <li>Reduce your carbon footprint</li>
            <li>Lock in energy savings</li>
            <li>Maximize your roof potential</li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-auto">
            <div className="flex items-center space-x-3">
              <i className="fas fa-solar-panel text-white text-xl"></i>
              <div>
                <p className="text-white font-semibold text-base">2500+</p>
                <p className="text-white text-xs">Systems Installed</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-leaf text-white text-xl"></i>
              <div>
                <p className="text-white font-semibold text-base">45%</p>
                <p className="text-white text-xs">Avg. Savings</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Calculator or Results - Red Theme */}
        <motion.section
          className="bg-red-200 rounded-xl px-6 py-5 h-full flex flex-col hover:shadow-xl transition "
          variants={cardVariants}
        >
          {!showResults ? (
            <>
              <p className="text-red-700 text-xs uppercase tracking-widest mb-1 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                <span className="text-lg">Solar Cost Calculator</span>
              </p>
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                Monthly Electricity Bill
              </h3>
              <form
                className="space-y-3 text-sm text-gray-700 flex-1 flex flex-col justify-between"
                onSubmit={handleSubmit}
              >
                <div>
                  <div className="flex items-center border border-red-300 rounded-full px-4 py-2 bg-white hover:shadow-md transition">
                    <i className="fas fa-bolt text-red-600 mr-3"></i>
                    <input
                      name="bill"
                      type="text"
                      value={formData.bill}
                      onChange={handleChange}
                      placeholder="Enter Your Electricity Bill Value (₹)"
                      className="w-full outline-none text-gray-700 placeholder-gray-500 bg-transparent text-sm"
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
                  } text-white font-bold rounded-full py-2.5 mt-3 transition text-sm`}
                >
                  {loading ? "Calculating..." : "Calculate Cost"}
                </motion.button>
              </form>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-red-900 mb-4">
                Estimated Results
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
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
                className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-full py-2 text-sm transition"
              >
                Reset
              </button>
            </>
          )}
        </motion.section>

        {/* Saved Impact - Blue Theme */}
        <motion.section
          className="rounded-xl flex justify-center items-center h-full transition"
          variants={cardVariants}
        >
          <div className="h-full w-full flex">
            <ElectricitySavedCard />
          </div>
        </motion.section>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
};

export default SolarCostCalculator;
