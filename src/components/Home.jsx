import { useState, Suspense, lazy, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DivyRedesign from "../Images/DivyRedesign.webp";
import "./Home.css";

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

// ✅ LazyLoadSection component
function LazyLoadSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : null}</div>;
}

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative max-w-full mx-auto overflow-x-hidden pb-0">
      {/* ChatbotToggle stays here */}
      <Suspense fallback={<div></div>}>
        <ChatbotToggle />
      </Suspense>

      {/* Page Content */}
      <div className="home-content">
        {/* Hero Section (load immediately for fast first paint) */}
        <Suspense fallback={<div></div>}>
          <section className="About">
            <FullScreenVideo />
            <HomeStart2 />
          </section>
        </Suspense>

        {/* Conversation Section (still important, load immediately) */}
        <Suspense fallback={<div></div>}>
          <section className="px-4 sm:px-6 lg:px-12">
            <Conversation />
          </section>
        </Suspense>

        <Suspense fallback={<div></div>} />

        {/* Solar Cost Calculator Section (lazy-loaded) */}
        <LazyLoadSection>
          <Suspense fallback={<div></div>}>
            <section
              className="mt-24 px-4 sm:px-6 lg:px-12 relative"
              style={{ transform: "translateY(-450px)" }}
            >
              <SolarCostCalculator />

              {/* Button Below the Calculator */}
              <div className="flex justify-center mt-10">
                <Link to="./contact">
                  <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    Adhik jaankari ke liye click krein
                  </button>
                </Link>
              </div>
            </section>
          </Suspense>
        </LazyLoadSection>

        {/* Solar Solutions Section (lazy-loaded) */}
        <LazyLoadSection>
          <Suspense fallback={<div></div>}>
            <section
              className="About px-4 sm:px-6 lg:px-12"
              style={{ transform: "translateY(-250px)" }}
            >
              <SolarSolutions />
            </section>
          </Suspense>
        </LazyLoadSection>

        {/* Contact Form (lazy-loaded) */}
        <LazyLoadSection>
          <Suspense fallback={<div></div>}>
            <section className="mt-20 About1 ">
              <ContactForm />
            </section>
          </Suspense>
        </LazyLoadSection>

        {/* PageOne & ChatUI (lazy-loaded) */}
        <LazyLoadSection>
          <Suspense fallback={<div></div>}>
            <section className="About">
              <PageOne />
            </section>
            <section className="About px-4 sm:px-6 lg:px-12">
              <ChatUI1 />
            </section>
          </Suspense>
        </LazyLoadSection>

        {/* Products Section (lazy-loaded) */}
        <LazyLoadSection>
          <Suspense fallback={<div></div>}>
            <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-16">
              <div className="flex flex-col gap-8 max-w-5xl mx-auto">
                <SolarProduct />
              </div>
            </section>
          </Suspense>
        </LazyLoadSection>

        {/* Floating Image (still small, no need lazy) */}
        <section className="mt-10 animate-float">
          <img src={DivyRedesign} alt="Design" />
        </section>

        {/* Other Sections (lazy-loaded) */}
        <LazyLoadSection>
          <Suspense fallback={<div></div>}>
            <section className="mt-20 sm:mt-28 md:mt-36 px-4 sm:px-6 lg:px-12">
              <FiguringOut1 />
            </section>
            <section className="mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-12">
              <ExactMatchPage1 />
            </section>
            <div className="relative z-10">
              <div className="h-24 sm:h-32 md:h-40 lg:h-48"></div>
              <section className="px-4 sm:px-6 lg:px-12 -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48">
                <RatingWorks />
              </section>
            </div>
          </Suspense>
        </LazyLoadSection>
      </div>

      <LazyLoadSection>
        <section
          style={{ transform: "translateY(-300px)" }}
          className="bg-[#f8f7f0] relative z-0"
        >
          <Suspense fallback={<div></div>}>
            <HoverVideoCard1 />
            <section className="About1 mt-15">
              {" "}
              {/* Reduced margin-top from mt-20/2xl:mt-60 to mt-8 */}
              <FaqSection />
            </section>
          </Suspense>
        </section>
      </LazyLoadSection>

      {/* Footer */}
      <LazyLoadSection>
        <Suspense fallback={<div></div>}>
          <section className="About -mt-[340px]">
            {" "}
            <Footer />
          </section>
        </Suspense>
      </LazyLoadSection>
    </div>
  );
}

export default Home;
