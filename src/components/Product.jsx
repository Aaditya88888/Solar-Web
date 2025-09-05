import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Genset1 from "../Images/Genset.webp";
import Micro from "../Images/Micro.webp";
import SolarP from "../Images/SolarP.webp";
import LL1 from "../Images/LL1.webp";
import LA from "../Images/LA.webp";
import LL2 from "../Images/LL2.webp";
import LL3 from "../Images/LL3.webp";
import LL4 from "../Images/LL4.webp";
import LL5 from "../Images/LL5.webp";
import Ev from "../Images/Ev.webp";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

function Product() {
  const solarData = [
    {
      title: "SOLAR PANEL",
      description:
        "Our solar panels efficiently convert sunlight into electricity, ensuring long-lasting performance and reduced environmental impact for homes, businesses, and industries.",
      image: SolarP,
      to: "/Solar-pannel",
    },
    {
      title: "SOLAR PUMP",
      description:
        "Divy Power’s solar pumps offer an efficient, eco-friendly solution for water needs in remote and rural areas—ideal for irrigation, water supply, and livestock, with low maintenance and long-lasting performance.",
      image: LL5,
      to: "/Solar-Pump",
    },
    {
      title: "MICRO INVERTER",
      description:
        "Our compact, reliable micro inverters optimize solar performance by converting energy per panel, ensuring maximum output even with shading—ideal for homes and businesses seeking top solar returns.",
      image: Micro,
      to: "/Micro-Inverter",
    },
  ];

  const saftyData = [
    {
      title: "Earthing",
      description:
        "Divy Power provides high-quality earthing solutions to protect against shocks, fires, and equipment damage—ensuring safety for homes, businesses, and industrial setups.",
      image:
        "https://divyby.redspace.in/assets/images/updated-images/img%20earthing.png",
      to: "/Earthing",
    },
    {
      title: "Lightning Arrestor (LA)",
      description:
        "Our lightning arrestors provide strong protection by safely redirecting lightning strikes, ensuring your electrical systems and infrastructure stay secure from unpredictable hazards.",
      image: LA,
      to: "/LA",
    },
  ];

  const Genset = [
    {
      title: "Diesel/Petrol Genset",
      description:
        "Our diesel and petrol gensets provide reliable, high-performance power for homes, businesses, and remote sites—built for durability, efficiency, and dependable backup in any situation.",
      image: Genset1,
      to: "/Diesel/Petrol Genset",
    },
  ];

  const gasificationData = [
    { title: "Green Hydrogen", description: "Coming Soon", image: LL3 },
    {
      title: "CBG (Compressed Biogas)",
      description: "Coming Soon",
      image: LL1,
    },
    { title: "Bio Diesel", description: "Coming Soon", image: LL2 },
    { title: "EV Charging", description: "Coming Soon", image: Ev },
    { title: "Home Automation", description: "Coming Soon", image: LL4 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <div className="flex-1">
        <section className="py-20 text-center bg-gradient-to-br from-white to-gray-100 GetFontSol max-w-7xl mx-auto px-4 md:px-6">
          <motion.h1
            className="text-4xl font-bold text-black mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-green-800">Products</span>
          </motion.h1>

          {/* Solar Solutions */}
          <motion.section
            className="py-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl text-green-800 font-bold">
                Solar Solutions
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {solarData.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
                  variants={cardVariants}
                >
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-700">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <Link
                        to={item.to}
                        className="flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 transition"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Safety Solutions */}
          <motion.section
            className="bg-black py-10 rounded-sm text-white"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl text-green-700 font-bold">
                Safety Solutions
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
              {saftyData.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-black rounded-2xl overflow-hidden shadow-md flex flex-col"
                  variants={cardVariants}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover h-60 md:h-64"
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-700">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <Link
                        to={item.to}
                        className="flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 transition"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Genset Solutions */}
          <motion.section
            className="py-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl text-black font-bold">
                Genset Solutions
              </h2>
            </motion.div>

            <div className="grid gap-6 max-w-4xl mx-auto sm:grid-cols-1 md:grid-cols-1">
              {Genset.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
                  variants={cardVariants}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover h-64 md:h-72"
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-900">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <Link
                        to={item.to}
                        className="flex items-center justify-center gap-2 bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 transition"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Gasification Section */}
          <motion.section
            className="py-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-red-600">
                COMING SOON
              </h2>
              <h2 className="text-3xl md:text-4xl mt-6 text-green-800 font-bold">
                Gasification
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {gasificationData.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
                  variants={cardVariants}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover h-60 md:h-64"
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between text-center">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Product;
