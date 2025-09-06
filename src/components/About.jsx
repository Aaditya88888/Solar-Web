import ProcessSteps from "./ProcessSteps";
import FiguringOut from "./FiguringOut";
import SolarCards from "./SolarCards";
import Footer from "./Footer";
import CompanySection from "./CompanySection";
import ChatUI4 from "./ChatUI4";

import sunImage from "../Images/didi.webp";
import sunPhoto from "../Images/chacha.webp";
import img1 from "../Images/img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import ScrollStackingCards from "./ScrollStackingCards";
import "./ScrollStackingCards.css";
import HoverVideoCard2 from "./HoverVideoCard2";
import HoverVideoCard3 from "./HoverVideoCard3";
import "./Home.css";
import ImageWithOverlay from "./ImageWithOverlay";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

// ScrollStackingCards Data
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
  },
  {
    heading: "Powering Every Home from Rooftops to Rural Villages",
    subheading:
      "We deliver energy solutions for everyone high-rises to rural India",
    points: [
      "No terrain or challenge is too complex we deliver where it’s needed.",
      "Our systems are designed to endure Indian conditions: dust, heat, and rain.",
      "Be it a home, farm, or school our mission is to light it up, cleanly and reliably.",
      "We believe clean energy is a right, not a luxury.",
    ],
    img: img2,
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
    img: "https://storage.googleapis.com/a1aa/image/72f5a45b-2e30-45fc-b276-a06c6a12a64e.jpg",
  },
];

export default function About() {
  return (
    <div className="bg-white text-black flex flex-col items-center mt-12 About">
      {/* Hero Banner with Animation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="w-full"
      >
        <ImageWithOverlay />
      </motion.section>

      {/* Chat Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="mt-8 w-full"
      >
        <ChatUI4 />
      </motion.section>

      {/* Stacking Cards */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="-mt-[550px] 2xl:-mt-[700px] mb-24 w-full"
      >
        <ScrollStackingCards content={aboutUsContent} />
      </motion.div>

      {/* Company Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="-mt-[290px] w-full"
      >
        <CompanySection />
      </motion.section>

      {/* Hover Video Cards */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="w-full"
      >
        <HoverVideoCard2 />
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="w-full"
      >
        <ProcessSteps />
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="-mt-16 md:-mt-44 xl:-mt-64 2xl:-mt-96 lg:-mt-72 w-full"
      >
        <HoverVideoCard3 />
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="bg-white py-8 px-4 sm:px-6 lg:px-8 -mt-[10px] About w-full"
      >
        <div className="bg-[#fdf6ee] shadow-xl rounded-md p-6 md:p-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-center sm:text-left">
            <img
              src={sunPhoto}
              alt="Chacha"
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-red-700">
              Why Choose Us as Your Solar Partner?
            </h2>
            <img
              src={sunImage}
              alt="Didi"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="text-gray-800 leading-relaxed space-y-3">
            <p className="text-center sm:text-left">
              At <strong>Divy Power Pvt. Ltd.,</strong> we don't just install
              solar systems — we build{" "}
              <span className="text-green-600 font-semibold">
                lasting energy partnerships
              </span>
              .
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                Committed to quality, accountability, and long-term service.
              </li>
              <li>
                Post-installation support & real-time maintenance monitoring.
              </li>
              <li>
                Top-grade components & certified engineers ensure durability.
              </li>
              <li>
                MNRE-approved & UPNEDA-certified, Govt. of India recognition.
              </li>
              <li>
                Proven track record across villages, schools, and institutions.
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Extra Sections */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="mt-30 w-full"
      >
        <FiguringOut />
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="mt-16 w-full"
      >
        <SolarCards />
      </motion.section>

      {/* Footer */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="-mt-24 w-full"
      >
        <Footer />
      </motion.section>
    </div>
  );
}
