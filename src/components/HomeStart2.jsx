import React from "react";
import img1 from "../Images/Img1.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function HomeStart2() {
  return (
    <div>
      <section>
        {/* About Section */}
        <section className="m-10">
          <motion.div
            className="About max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-stretch relative mt-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.div
              className="relative flex flex-col justify-center h-full"
              variants={fadeLeft}
            >
              {/* Main Image */}
              <div className="w-full rounded-xl overflow-hidden shadow-lg h-full">
                <img
                  src="https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg"
                  alt="Solar Field"
                  className="rounded-xl object-cover w-full h-full min-h-[400px]"
                />
              </div>

              {/* Overlay Image for All Screens */}
              <div className="absolute bottom-[-40px] left-[20px] md:left-[60px] w-[80%] border-4 border-white rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://pikwizard.com/pw/medium/699a0ae210de0ebeb9b745be863f842d.jpg"
                  alt="Solar Roof Work"
                  className="rounded-xl object-cover w-full h-[180px] md:h-[250px]"
                />
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              className="text-gray-800 flex flex-col justify-center h-full px-2 sm:px-0"
              variants={fadeRight}
            >
              <motion.h3
                className="text-xl font-semibold text-green-800 tracking-wider uppercase mb-2"
                variants={fadeUp}
              >
                About Us
              </motion.h3>
              <motion.h2
                className="text-xl About1 sm:text-2xl lg:text-4xl font-bold leading-tight mb-4"
                variants={fadeUp}
              >
                We Don’t Just Sell Solar. <br className="hidden sm:block" />
                We Engineer Smart Power Solutions.
              </motion.h2>
              <motion.p
                className="text-base leading-relaxed mb-4"
                variants={fadeUp}
              >
                At <strong>DIVY Power</strong>, we believe solar isn’t just a
                product, it’s your power freedom...
              </motion.p>
              <motion.p
                className="text-base leading-relaxed mb-4"
                variants={fadeUp}
              >
                We’ve been lighting lives responsibly for over a decade as an
                authorized partner of <strong>Tata Power Solar</strong>...
              </motion.p>
              <motion.p className="text-base leading-relaxed" variants={fadeUp}>
                With us, you don’t just go solar — you go{" "}
                <strong>safe, smart, and sustainable</strong>.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="flex  gap-x-20 gap-y-6 mt-5 max-w-[420px]"
                variants={fadeUp}
              >
                <div>
                  <p className="font-bold text-[24px] text-red-600">25+</p>
                  <p className="text-[12px] text-gray-600">Years Experience</p>
                </div>
                <div>
                  <p className="font-bold text-[24px] text-red-600">10000+</p>
                  <p className="text-[12px] text-gray-600">
                    Products Delivered
                  </p>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E50C0C] text-white mt-10 font-semibold rounded-full py-3 px-8 w-full max-w-[190px] transition"
              >
                <Link to={"/about"}>Know More</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Bottom Section with Cartoon */}
        <motion.section
          className="mt-[70px] animate-float"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#E50C0C] flex justify-center items-center h-[370px] p-4">
            <div className="max-w-5xl  w-full text-center ">
              <motion.img
                src={img1}
                alt="Cartoon sun characters"
                className="mx-auto -mt-24 mb-6 max-w-full h-auto "
                width="400"
                height="300"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 60, delay: 0.4 }}
              />
              <motion.h1
                className="text-white font-semibold About text-xl sm:text-2xl md:text-3xl leading-tight -mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Still Paying for Electricity?
                <br />
                Let Solar Chacha & Roshni Didi explain why switch to solar
              </motion.h1>
            </div>
          </div>
        </motion.section>
      </section>
    </div>
  );
}

export default HomeStart2;
