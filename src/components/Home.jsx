import React, { useState } from "react";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import DivyRedesign from "../Images/DivyRedesign.png";
import "./Home.css";

const Dashboard = lazy(() => import("./Dashboard"));
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
import Conversation from "./Conversation";
import HomeStart2 from "./HomeStart2";
import HoverVideoCard1 from "./HoverVideoCard1";
import FiguringOut1 from "./FiguringOut1";
import ExactMatchPage1 from "./ExactMatchPage1";
import FullScreenVideo from "./FullScreenVideo";
import RatingWorks from "./RatingWorks";

// Simple client data for demonstration
const clientsData = [
  { name: "Client A", logo: "/path/to/logo1.png" },
  { name: "Client B", logo: "/path/to/logo2.png" },
  { name: "Client C", logo: "/path/to/logo3.png" },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-full mx-auto">
      <ChatbotToggle />

      {/* Hero Section */}
      <section className="About">
        <FullScreenVideo />
        <HomeStart2 />
      </section>

      {/* Conversation Section */}
      <section>
        <Conversation />
      </section>

      <Suspense fallback={<div></div>} />

      {/* Calculator Section */}
      <section className="About mt-24">
        <SolarCostCalculator />
      </section>

      {/* CTA Button */}
      <section className="h-72">
        <div className="text-center About1 py-6 mb-10 mt-[600px] lg:-mt-48 xl:-mt-28 2xl:-mt-24 md:-mt-56">
          <button className="bg-[#E50C0C] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
            <Link to="./contact">Adhik jaankari ke liye click krein</Link>
          </button>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section className="About">
        <SolarSolutions />
      </section>

      {/* Contact Form */}
      <section className="mt-20 About1">
        <ContactForm />
      </section>

      {/* PageOne & ChatUI */}
      <section className="About">
        <PageOne />
      </section>
      <section className="About">
        <ChatUI1 />
      </section>

      {/* Products Section - Single card each */}
      <section className="bg-green-800 py-16 px-4 lg:px-16">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Our Products
        </h2>
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer w-full transition-transform duration-300 hover:scale-105">
            <SolarProduct />
          </div>
        </div>
      </section>

      {/* Floating Image */}
      <section className="mt-10 animate-float">
        <img src={DivyRedesign} alt="Design" />
      </section>

      {/* Other Sections */}
      <section className="mt-36 About1">
        <FiguringOut1 />
      </section>
      <section className="mt-16 About1">
        <ExactMatchPage1 />
      </section>
      <section className="-mt-96">
        <RatingWorks />
      </section>

      {/* Portfolio Section - Single card each */}
      <section className="bg-[#f8f7f0] About1 mt-40 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-[300px]">
        {/* Footer */}
        <section className="About -mt-11">
          <Footer />
        </section>
      </section>

      {/* Clients Section */}
    </div>
  );
}

export default Home;
