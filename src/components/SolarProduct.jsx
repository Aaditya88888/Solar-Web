import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { GiSolarPower, GiLightningSpanner, GiGasPump } from "react-icons/gi";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Solar Solutions",
    icon: <GiSolarPower className="text-white text-3xl" />,
    features: ["Solar Panel", "Solar Pump", "Micro Inverter"],
  },
  {
    title: "Safety Solution",
    icon: <GiLightningSpanner className="text-white text-3xl" />,
    features: ["Earthing", "Lightning Arrester (LA)"],
  },
  {
    title: "Genset Solutions",
    icon: <GiGasPump className="text-white text-3xl" />,
    features: ["Diesel/Petrol Genset"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const SolarProducts = () => {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 About1 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 -mt-10">
          <p className="text-gray-100 text-base sm:text-lg font-bold uppercase tracking-widest">
            Our Product
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-100">
            Harness The Power Of The Sun With Solar Energy!
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-[#fdf6ee] p-6 sm:p-8 rounded-2xl shadow-md sm:shadow-lg md:shadow-2xl border border-white/20 transform transition duration-300 hover:scale-105 hover:shadow-3xl hover:-translate-y-2 cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-5"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                {product.icon}
              </motion.div>

              <motion.h3
                className="text-lg sm:text-xl font-semibold mb-4 text-black transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {product.title}
              </motion.h3>

              <ul className="space-y-2 text-sm mb-6">
                {product.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center text-black transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <FaCheckCircle className="text-green-800 mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <Link
                to={"/LA"}
                className="mt-2 text-sm text-black font-semibold underline decoration-2 underline-offset-2 transition-colors duration-300 hover:text-green-700"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarProducts;
