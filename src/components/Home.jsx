<<<<<<< HEAD
import React from "react";


=======
import React, { useEffect } from "react";
import { Suspense, lazy, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6

import DivyRedesign from "../Images/DivyRedesign.png";
import DivyRedesign from "../Images/DivyRedesign.webp";

import "./Home.css";

<<<<<<< HEAD
// import { FaRobot } from "react-icons/fa";


import { useState } from "react";


=======
const Dashboard = lazy(() => import("./Dashboard"));
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6
import SolarProduct from "./SolarProduct";
import SolarCostCalculator from "./SolarCostCalculator";
import FaqSection from "./FaqSection";
import SolarPortfolio from "./SolarPortfolio";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ChatbotToggle from "./ChatbotToggle";
import SolarSolutions from "./SolarSolutions";
import ChatUI1 from "./ChatUI1";
import PageOne from "./PageOne";
import { Link } from "react-router-dom";
import Conversation from "./Conversation";
import HomeStart2 from "./HomeStart2";
import HoverVideoCard1 from "./HoverVideoCard1";
import FiguringOut1 from "./FiguringOut1";
import ExactMatchPage1 from "./ExactMatchPage1";
import FullScreenVideo from "./FullScreenVideo";
import RatingWorks from "./RatingWorks";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
<<<<<<< HEAD
    <div className="relative max-w-full mx-auto overflow-x-hidden">
=======
    <div className="relative max-w-full mx-auto">
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6
      <ChatbotToggle />

      {/* Hero Section with video */}
      <motion.section
        className="About"
        data-aos="fade-up"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FullScreenVideo />
        <HomeStart2 />
      </motion.section>

      {/* Conversation Section */}
      <motion.section data-aos="fade-right">
        <Conversation />
<<<<<<< HEAD
      </section>
      



      <section className="mt-6 md:mt-10 lg:mt-12 px-4 md:px-6">
        {/* <ChartCard /> */}
      </section>
      <section className="About mt-24">
=======
      </motion.section>

      {/* Calculator Section */}
      <motion.section className="About mt-24" data-aos="zoom-in-up">
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6
        <SolarCostCalculator />
      </motion.section>

<<<<<<< HEAD
      </section>
      
      <section>
        <div className="text-center About1 py-10 md:py-12 mb-8 mt-8 md:mt-12">
          <button className="bg-[#E50C0C] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
=======
      {/* Button Section */}
      <motion.section className="h-72" data-aos="flip-left">
        <div className="text-center About1 py-6 mb-10 mt-[600px] lg:-mt-48">
          <button className="bg-[#E50C0C] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:scale-110">
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6
            <Link to="./contact">Adhik jaankari ke liye click krein</Link>
          </button>
        </div>
      </motion.section>

      {/* Solutions */}
      <motion.section className="About" data-aos="fade-left">
        <SolarSolutions />
<<<<<<< HEAD
      </section>
      <section className="mt-16 md:mt-20 About1 px-4 md:px-6">
=======
      </motion.section>

      {/* Contact Form */}
      <motion.section className="mt-20 About1" data-aos="zoom-in">
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6
        <ContactForm />
      </motion.section>

      {/* PageOne */}
      <motion.section className="About" data-aos="fade-up">
        <PageOne />
      </motion.section>

      {/* Chat Section */}
      <motion.section className="About" data-aos="fade-down">
        <ChatUI1 />
<<<<<<< HEAD
      </section>
      <section className="bg-green-800 About mt-0">
=======
      </motion.section>
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6

      {/* Product */}
      <motion.section className="bg-green-800 About" data-aos="zoom-in-up">
        <SolarProduct />
      </motion.section>

<<<<<<< HEAD
      <section className="mt-10 md:mt-12 animate-float px-4">
        <img src={DivyRedesign} className="w-full h-auto max-w-5xl mx-auto" />
      </section>
      <section className="mt-16 md:mt-20 About1 px-4 md:px-6">
=======
      {/* Image Floating Animation */}
      <motion.section
        className="mt-10"
        data-aos="fade-up"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <img src={DivyRedesign} alt="design" />
      </motion.section>

      {/* Other sections with animations */}
      <motion.section className="mt-36 About1" data-aos="fade-right">
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6
        <FiguringOut1 />
      </motion.section>

      <motion.section className="mt-16 About1" data-aos="fade-left">
        <ExactMatchPage1 />
      </motion.section>

      <motion.section className="-mt-96" data-aos="zoom-in">
        <RatingWorks />
      </motion.section>

<<<<<<< HEAD
      </section>
      <section className="mt-12 md:mt-16">
         <RatingWorks/>
      </section>

      <section className="bg-[#f8f7f0] About1 mt-12 md:mt-16">
        <SolarPortfolio />
        <HoverVideoCard1 />


        <section className="About1 mt-10 md:mt-16">
=======
      {/* Portfolio + Footer */}
      <motion.section className="bg-[#f8f7f0] About1 mt-96" data-aos="fade-up">
        <SolarPortfolio />
        <HoverVideoCard1 />

        <motion.section className="About1 mt-20" data-aos="fade-right">
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6
          <FaqSection />
        </motion.section>

<<<<<<< HEAD


       
      
        <section className="About mt-12">
=======
        <motion.section className="About -mt-11" data-aos="fade-left">
>>>>>>> 7bd202b16eb3dfd02c0ec212dcd57762ad6970a6
          <Footer />
        </motion.section>
      </motion.section>
    </div>
  );
}

export default Home;
