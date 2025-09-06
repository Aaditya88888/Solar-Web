import { useState, Suspense, lazy } from "react";
import { Link, Outlet } from "react-router-dom"; // Import Outlet
import DivyRedesign from "../Images/DivyRedesign.webp";
import "./Home.css";

// Lazy load all components
const Dashboard = lazy(() => import("./Dashboard"));
const SolarProduct = lazy(() => import("./SolarProduct"));
const SolarCostCalculator = lazy(() => import("./SolarCostCalculator"));
const FaqSection = lazy(() => import("./FaqSection"));
const SolarPortfolio = lazy(() => import("./SolarPortfolio"));
const ContactForm = lazy(() => import("./ContactForm"));
const Footer = lazy(() => import("./Footer"));
const ChatbotToggle = lazy(() => import("./ChatbotToggle"));
const SolarSolutions = lazy(() => import("./SolarSolutions"));
const ChatUI1 = lazy(() => import("./ChatUI1"));
const PageOne = lazy(() => import("./PageOne"));
const Conversation = lazy(() => import("./Conversation"));
const HomeStart2 = lazy(() => import("./HomeStart2"));
const HoverVideoCard1 = lazy(() => import("./HoverVideoCard1"));
const FiguringOut1 = lazy(() => import("./FiguringOut1"));
const ExactMatchPage1 = lazy(() => import("./ExactMatchPage1"));
const FullScreenVideo = lazy(() => import("./FullScreenVideo"));
const RatingWorks = lazy(() => import("./RatingWorks"));

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
      {/* ChatbotToggle stays here */}
      <Suspense fallback={<div></div>}>
        <ChatbotToggle />
      </Suspense>

      {/* Page Content */}
      <div className="home-content">
        {/* Hero Section */}
        <Suspense fallback={<div></div>}>
          <section className="About">
            <FullScreenVideo />
            <HomeStart2 />
          </section>
        </Suspense>

        {/* Conversation Section */}
        <Suspense fallback={<div></div>}>
          <section>
            <Conversation />
          </section>
        </Suspense>

        <Suspense fallback={<div></div>} />

        {/* Calculator Section */}
        <Suspense fallback={<div></div>}>
          <section className="About mt-24">
            <SolarCostCalculator />
          </section>
        </Suspense>

        {/* CTA Button */}
        <section className="h-72">
          <div className="text-center About1 py-6 mb-10 mt-[600px] lg:-mt-48 xl:-mt-28 2xl:-mt-24 md:-mt-56">
            <button className="bg-[#E50C0C] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105">
              <Link to="./contact">Adhik jaankari ke liye click krein</Link>
            </button>
          </div>
        </section>

        {/* Solar Solutions Section */}
        <Suspense fallback={<div></div>}>
          <section className="About">
            <SolarSolutions />
          </section>
        </Suspense>

        {/* Contact Form */}
        <Suspense fallback={<div></div>}>
          <section className="mt-20 About1">
            <ContactForm />
          </section>
        </Suspense>

        {/* PageOne & ChatUI */}
        <Suspense fallback={<div></div>}>
          <section className="About">
            <PageOne />
          </section>
          <section className="About">
            <ChatUI1 />
          </section>
        </Suspense>

        {/* Products Section */}
        <Suspense fallback={<div></div>}>
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
        </Suspense>

        {/* Floating Image */}
        <section className="mt-10 animate-float">
          <img src={DivyRedesign} alt="Design" />
        </section>

        {/* Other Sections */}
        <Suspense fallback={<div></div>}>
          <section className="mt-36 About1">
            <FiguringOut1 />
          </section>
          <section className="mt-16 About1">
            <ExactMatchPage1 />
          </section>
          <section className="-mt-96">
            <RatingWorks />
          </section>
        </Suspense>
      </div>

      {/* Footer stays at the bottom */}
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>

      {/* React Router Outlet for nested routes */}
      <Outlet />
    </div>
  );
}

export default Home;
