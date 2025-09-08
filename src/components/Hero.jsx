import React, { lazy, Suspense, useState, useEffect } from "react";
import img1 from "../Images/Img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import im1 from "../Images/im1.webp";
import sunImage from "../Images/didi.webp";
import sunPhoto from "../Images/chacha.webp";
import "./Home.css";
import ImageWithOverlay from "./ImageWithOverlay";

// Lazy imports
const ScrollStackingCards = lazy(() => import("./ScrollStackingCards"));
const HoverVideoCard2 = lazy(() => import("./HoverVideoCard2"));
const HoverVideoCard3 = lazy(() => import("./HoverVideoCard3"));
const ProcessSteps = lazy(() => import("./ProcessSteps"));
const SolarCards = lazy(() => import("./SolarCards"));
const ChatUI4 = lazy(() => import("./ChatUI4"));
const CompanySection = lazy(() => import("./CompanySection"));
const FiguringOut = lazy(() => import("./FiguringOut"));
const Footer = lazy(() => import("./Footer"));

// Sequential loader wrapper
const SequentialLoader = ({ children, index, delay = 600 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), index * delay);
    return () => clearTimeout(timer);
  }, [index, delay]);

  if (!show) return <div className="text-center py-10">Loading...</div>;

  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <div className="animate-fadeIn">{children}</div>
    </Suspense>
  );
};

// About content
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
    img: img1,
    alt: "New solar installation image",
  },
  {
    heading: "Powering Every Home from Rooftops to Rural Villages",
    subheading:
      "We deliver energy solutions for everyone, high-rises to rural India",
    points: [
      "No terrain or challenge is too complex we deliver where it’s needed.",
      "Our systems are designed to endure Indian conditions: dust, heat, and rain.",
      "Be it a home, farm, or school our mission is to light it up, cleanly and reliably.",
      "We believe clean energy is a right, not a luxury.",
    ],
    img: img2,
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
    img: img3,
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
    img: im1,
    alt: "Government officials and solar technicians inspecting installation",
  },
];

export default function About() {
  return (
    <div className="bg-white text-black flex flex-col items-center mt-0 About">
      {/* Banner */}
      <ImageWithOverlay />

      {/* Sequential Sections */}
      <SequentialLoader index={0}>
        <ChatUI4 />
      </SequentialLoader>

      <SequentialLoader index={1}>
        <ScrollStackingCards content={aboutUsContent} />
      </SequentialLoader>

      <SequentialLoader index={2}>
        <CompanySection />
      </SequentialLoader>

      <SequentialLoader index={3}>
        <HoverVideoCard2 />
      </SequentialLoader>

      <SequentialLoader index={4}>
        <ProcessSteps />
      </SequentialLoader>

      <SequentialLoader index={5}>
        <HoverVideoCard3 />
      </SequentialLoader>

      {/* Why Choose Us */}
      <SequentialLoader index={6}>
        <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 -mt-[10px] About w-full">
          <div className="bg-[#fdf6ee] shadow-xl rounded-none p-5 sm:p-8 md:p-12 w-full">
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <img
                  src={sunPhoto}
                  alt="Chacha"
                  className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain"
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 leading-snug">
                  Why Choose Us <br className="sm:hidden" /> as Your Solar
                  Partner?
                </h2>
                <img
                  src={sunImage}
                  alt="Didi"
                  className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain"
                />
              </div>
            </div>

            <div className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 text-left">
              <p>
                At <strong>Divy Power Pvt. Ltd.,</strong> we don't just install
                solar systems — we build{" "}
                <span className="text-green-600 font-semibold">
                  lasting energy partnerships
                </span>
                .
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>
                    Committed to quality, accountability, and long-term service.
                  </strong>
                </li>
                <li>
                  <strong>Post-installation support:</strong> Real-time
                  maintenance and monitoring.
                </li>
                <li>
                  <strong>
                    Top-grade components, certified engineers & govt-approved
                    materials
                  </strong>
                </li>
                <li>
                  <strong>MNRE-approved & UPNEDA-certified;</strong> officially
                  recognized by Govt. of India.
                </li>
                <li>
                  <strong>Proven track record</strong> across villages, schools,
                  societies, and institutions.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </SequentialLoader>

      <SequentialLoader index={7}>
        <FiguringOut />
      </SequentialLoader>

      <SequentialLoader index={8}>
        <SolarCards />
      </SequentialLoader>

      <SequentialLoader index={9}>
        <Footer />
      </SequentialLoader>
    </div>
  );
}
