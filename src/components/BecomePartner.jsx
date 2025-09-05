import React from "react";
import { motion } from "framer-motion";

// Variants for infinite float animation
const floatVariants = {
  float: {
    y: [0, -10, 5, 0, 10, 0],
    x: [0, 5, -5, 0, 5, -5],
    rotate: [0, 2, -2, 1, -1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Scroll fade-in/slide-in variants
const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const BecomePartner = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-inter text-gray-800">
      {/* Title */}
      <motion.h1
        className="text-2xl md:text-3xl font-semibold mb-4"
        variants={floatVariants}
        animate="float"
      >
        Work With Us, Become a{" "}
        <span className="font-bold">DIVY Solar Partner</span>
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        className="text-base leading-relaxed text-justify mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollVariants}
      >
        Join hands with <strong>DIVY Solar</strong>, one of India’s leading
        solar energy solution providers, and be a part of the clean energy
        revolution. We are actively expanding our dealer and partner network
        across India and are looking for passionate, driven, and growth-oriented
        individuals or businesses to collaborate with us.
      </motion.p>

      {/* Why Partner */}
      <motion.h2
        className="text-xl font-semibold text-brandBlue mb-3"
        variants={floatVariants}
        animate="float"
      >
        Why Partner with DIVY Solar?
      </motion.h2>
      <motion.ul
        className="list-disc list-inside space-y-2 text-base leading-relaxed mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollVariants}
      >
        <li>
          <strong>Trusted Brand:</strong> Recognized for quality, innovation,
          and customer satisfaction.
        </li>
        <li>
          <strong>High-Quality Products:</strong> MNRE-approved, efficient, and
          durable solar panels and systems.
        </li>
        <li>
          <strong>Marketing & Technical Support:</strong> Complete training,
          marketing material, and on-ground support to help you succeed.
        </li>
        <li>
          <strong>Attractive Margins:</strong> Competitive pricing and strong
          profit potential.
        </li>
        <li>
          <strong>Fast-Growing Industry:</strong> Be a part of India’s booming
          solar sector with massive future potential.
        </li>
      </motion.ul>

      {/* Who Can Join */}
      <motion.h2
        className="text-xl font-semibold text-brandBlue mb-3"
        variants={floatVariants}
        animate="float"
      >
        Who Can Join?
      </motion.h2>
      <motion.ul
        className="list-disc list-inside space-y-2 text-base leading-relaxed mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollVariants}
      >
        <li>Solar product dealers or distributors</li>
        <li>Electrical contractors and engineers</li>
        <li>Entrepreneurs and startups interested in renewable energy</li>
        <li>Real estate and infrastructure professionals</li>
        <li>NGOs or institutions promoting sustainable energy</li>
      </motion.ul>

      {/* What We Offer */}
      <motion.h2
        className="text-xl font-semibold text-brandBlue mb-3"
        variants={floatVariants}
        animate="float"
      >
        What We Offer
      </motion.h2>
      <motion.ul
        className="list-disc list-inside space-y-2 text-base leading-relaxed mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollVariants}
      >
        <li>Product supply and logistics support</li>
        <li>Installation and technical guidance</li>
        <li>Sales training and business consultation</li>
        <li>Assistance with government schemes and subsidies</li>
        <li>Lead generation and local promotion support</li>
      </motion.ul>

      {/* Call to Action */}
      <motion.p
        className="text-base font-bold mt-6"
        variants={floatVariants}
        animate="float"
      >
        Ready to Partner with Us?{" "}
        <span className="text-brandBlue underline cursor-pointer font-bold">
          Click the Link Below
        </span>
      </motion.p>
    </div>
  );
};

export default BecomePartner;
