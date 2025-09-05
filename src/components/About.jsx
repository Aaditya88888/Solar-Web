import React from "react";
import { motion } from "framer-motion";
import ProcessSteps from "./ProcessSteps";
import ExpertTeam from "./ExpertTeam";
import FiguringOut from "./FiguringOut";
import SolarCards from "./SolarCards";
import ContactCards from "./ContactCards";
import Footer from "./Footer";
import CompanySection from "./CompanySection";
import ChatUI4 from "./ChatUI4";

import sunImage from "../Images/didi.png";
import sunPhoto from "../Images/chacha.png";
import ScrollStackingCards from "./ScrollStackingCards"; // <-- Imported here
import "./ScrollStackingCards.css"; // <-- Include CSS
import HoverVideoCard2 from "./HoverVideoCard2";
import HoverVideoCard3 from "./HoverVideoCard3";
import "./Home.css"; // Ensure this CSS file is imported for styles
import HoverVideoCard from "./HoverVideoCard";
import ImageWithOverlay from "./ImageWithOverlay";
import rajbeer_vasundra_4kw_res from "../Images/rajbeer_vasundra_4kw_res.jpg";
import KW_sangwan_res from "../Images/10_KW_sangwan_res.jpg";
import years_25 from "../Images/years_25.png";
import IMG_3609 from "../Images/IMG_3609.jpg";

const aboutUsContent = [
  {
    heading: "Not Just Selling Solar We are a Partner in Your Journey",
    subheading:
      "At Divy Power Pvt. Ltd., we don’t just sell solar panels. We listen, understand, and build solutions.",
    points: [
      "Every home, business, or factory has a unique energy we begin by understanding yours",
      "Our approach is not sales-driven, it’s solution-focused.",
      "We help you avoid costly mistakes caused by all solar kits.",
      "We design systems that fit your life, not force you to adapt to them.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg",
    alt: "Team discussing solar design solution on paper with panels in background",
  },
  {
    heading: "What If You Delay Solar? The Hidden Cost of Waiting",
    subheading:
      "We believe in honesty – waiting to switch to solar can cost more than you think.",
    points: [
      "Every electricity bill is money lost that could’ve been saved.",
      "Electricity prices are rising, and power cuts are more frequent.",
      "Delaying solar means losing not just money, but energy independence.",
      "Going solar isn’t just smart, it’s urgent and we help you act now.",
    ],
    img: rajbeer_vasundra_4kw_res,
    alt: "Clock with electric cables symbolizing urgency",
  },
  {
    heading: "Powering Every Home from Rooftops to Rural Villages",
    subheading:
      "We deliver energy solutions for everyon high-rises to rural India",
    points: [
      "No terrain or challenge is too complex we deliver where it’s needed.",
      "Our systems are designed to endure Indian conditions: dust, heat, and rain.",
      "Be it a home, farm, or school our mission is to light it up, cleanly and reliably.",
      "We believe clean energy is a right, not a luxury.",
    ],
    img: KW_sangwan_res,
    alt: "Solar panels on rooftops and rural homes",
  },
  {
    heading: "A Legacy You Can Rely On",
    subheading:
      "With over 25 years in the energy sector, trust is not claimed – it’s earned.",
    points: [
      "We’ve grown with the solar industry and bring decades of expertise.",
      "Our systems are known for longevity and reliability.",
      "We focus on doing what’s right, not just what sells.",
      "Our client relationships last because we deliver consistent results.",
    ],
    img: years_25,
    alt: "Old and new solar projects representing legacy and evolution",
  },
  {
    heading: "Creating Real Change Through Government Collaborations",
    subheading:
      "We don’t just talk about impact – we create it, in partnership with the Government.",
    points: [
      "As a UPNEDA-approved vendor, we drive solar adoption at scale.",
      "We power not just homes, but hospitals, schools, and public infrastructure.",
      "We empower communities to control their energy future.",
      "We act on our mission to build a better, solar-powered India.",
    ],
    img: IMG_3609,
    alt: "Government officials and solar technicians inspecting installation",
  },
];

export default function About() {
  return (
    <div className="bg-white h-screen text-black px-6 md:px-12 lg:px-20 xl:px-32 py-12 flex flex-col items-center  mt-12 About">
      {/* Banner Image */}

      <ImageWithOverlay />

      <section className="mt-8">
        <ChatUI4 />
      </section>

      {/* Scroll Stacking Cards */}
      <div className="-mt-[550px] 2xl:-mt-[700px] mb-24">
        <ScrollStackingCards content={aboutUsContent} />
      </div>

      <section className="-mt-[290px]">
        <CompanySection />
      </section>

      <section className="">
        <HoverVideoCard2 />
      </section>
      <section>
        <ProcessSteps />
      </section>
      <section className="  -mt-16 md:-mt-44 xl:-mt-64 2xl:-mt-96 lg:-mt-72">
        <HoverVideoCard3 />
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 -mt-[10px] About w-full">
        <div className="bg-[#fdf6ee] shadow-xl overflow-x-hidden rounded-none p-5 sm:p-8 md:p-12 w-full ">
          {/* Heading with icons - responsive layout */}
          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <img
                src={sunPhoto}
                alt="Chacha"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 leading-snug">
                Why Choose Us <br className="sm:hidden" />
                as Your Solar Partner?
              </h2>
              <img
                src={sunImage}
                alt="Didi"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed space-y-4">
            <p className="text-center sm:text-left">
              At <strong>Divy Power Pvt. Ltd.,</strong> we don't just install
              solar systems — we build{" "}
              <span className="text-green-600 font-semibold">
                lasting energy partnerships
              </span>
              .
            </p>

            <ul className="list-disc list-inside space-y-3 pl-4">
              <li>
                <strong>
                  Committed to quality, accountability, and long-term service.
                </strong>
              </li>
              <li>
                <strong>Post-installation support:</strong> Real-time
                maintenance and performance monitoring throughout the system's
                lifecycle.
              </li>
              <li>
                <strong>
                  Top-grade components, certified engineers &
                  government-approved materials
                </strong>{" "}
                ensure maximum durability and safety.
              </li>
              <li>
                <strong>MNRE-approved & UPNEDA-certified;</strong> officially
                recognized by the government of India.
              </li>
              <li>
                <strong>Proven track record</strong> with solar projects across
                villages, schools, societies, and institutions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className=" mt-30 ">
        <FiguringOut />
      </section>

      <section className=" mt-16">
        <SolarCards />
      </section>

      <section className=" -mt-24 min-w-full lg:min-w-[1300px]  md:min-w-[1300px] xl:min-w-[1450px] 2xl:min-w-[1600px] ">
        <Footer />
      </section>
    </div>
  );
}
