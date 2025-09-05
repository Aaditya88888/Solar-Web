import React from "react";
import { useState } from "react";

import DivyRedesign from "../Images/DivyRedesign.webp";

import "./Home.css";

// import { FaRobot } from "react-icons/fa";
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

  return (
    <div className="relative max-w-full mx-auto overflow-x-hidden">
      <ChatbotToggle />
      <section className="About">
        <FullScreenVideo />
        <HomeStart2 />
      </section>

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
