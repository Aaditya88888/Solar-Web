import React from "react";



import DivyRedesign from "../Images/DivyRedesign.webp";

import "./Home.css";

// import { FaRobot } from "react-icons/fa";


import { useState } from "react";


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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is Solar Energy?",
      content:
        "Solar energy is the energy derived from the sun’s radiation. It is a clean, renewable source of energy that can be harnessed using solar panels to generate electricity or heat.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "How Do Solar Panels Work?",
      content:
        "Solar panels convert sunlight directly into electricity using photovoltaic cells. When sunlight hits these cells, it creates an electric current that can be used to power homes and businesses.",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Benefits of Solar Energy",
      content:
        "Solar energy reduces electricity bills, lowers carbon footprint, and requires minimal maintenance. It’s sustainable and helps in energy independence.",
      img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for children elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Button hover animation
  const buttonHover = {
    scale: 1.05,

    transition: { duration: 0.3 },
  };

  return (
    <div className="relative max-w-full mx-auto overflow-x-hidden">
      <ChatbotToggle />
      <div>
        <section className="About">
          <FullScreenVideo />
          <HomeStart2 />


        </section>
      </div>

      <section>
        <Conversation />
      </section>
      



      <section className="mt-6 md:mt-10 lg:mt-12 px-4 md:px-6">
        {/* <ChartCard /> */}
      </section>
      <section className="About mt-24">
        <SolarCostCalculator />

      </section>
      
      <section>
        <div className="text-center About1 py-10 md:py-12 mb-8 mt-8 md:mt-12">
          <button className="bg-[#E50C0C] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            <Link to="./contact">Adhik jaankari ke liye click krein</Link>
          </button>
        </div>

      </section>

      <section className="About">
        <SolarSolutions />
      </section>
      <section className="mt-16 md:mt-20 About1 px-4 md:px-6">
        <ContactForm />
      </section>

      <section className="About ">
        <PageOne />
      </section>
      <section className="About">
        <ChatUI1 />
      </section>
      <section className="bg-green-800 About mt-0">

        <SolarProduct />
      </section>

      <section className="mt-10 md:mt-12 animate-float px-4">
        <img src={DivyRedesign} className="w-full h-auto max-w-5xl mx-auto" />
      </section>
      <section className="mt-16 md:mt-20 About1 px-4 md:px-6">
        <FiguringOut1 />
      </section>
      <section className=" mt-16 About1">
      <ExactMatchPage1/>



      </section>
      <section className="mt-12 md:mt-16">
         <RatingWorks/>
      </section>

      <section className="bg-[#f8f7f0] About1 mt-12 md:mt-16">
        <SolarPortfolio />
        <HoverVideoCard1 />


        <section className="About1 mt-10 md:mt-16">
          <FaqSection />
        </section>



       
      
        <section className="About mt-12">
          <Footer />
        </section>
      </section>
    </div>
  );
}

export default Home;
