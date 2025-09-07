import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("./Footer"));
const CareerForm = lazy(() => import("./CareerForm"));
const WorkCultureReels = lazy(() => import("./WorkCultureReels"));
const SafetySecurityReels = lazy(() => import("./SafetySecurityReels"));
const ImageSlider = lazy(() => import("./ImageSlider"));
const CareersAtDivySolar = lazy(() => import("./CareersAtDivySolar"));

// LazyLoad wrapper
const LazyLoadSection = ({ children, fallback }) => (
  <Suspense fallback={<div className="text-center py-10">{fallback}</div>}>
    {children}
  </Suspense>
);

// Hero text animation
const heroTextVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  float: {
    y: [0, -8, 5, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// Card animation for benefits
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: {
    scale: 1.05,
    rotateX: 5,
    rotateY: -5,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  pulse: {
    scale: [1, 1.02, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const Career = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 About">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="text-center mb-12"
      >
        <motion.h1
          variants={heroTextVariants}
          animate={["visible", "float"]}
          className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4"
        >
          Join Our Team
        </motion.h1>
        <motion.p
          variants={heroTextVariants}
          animate={["visible", "float"]}
          className="max-w-xl mx-auto text-xl text-gray-600"
        >
          We're building the future with talented people like you. Explore our
          open positions below.
        </motion.p>
      </motion.div>

      <section>
        <LazyLoadSection fallback="Loading Careers...">
          <CareersAtDivySolar />
        </LazyLoadSection>
      </section>

      <section className="-mt-8">
        <LazyLoadSection fallback="Loading Form...">
          <CareerForm />
        </LazyLoadSection>
      </section>

      {/* Internal Team Button */}
      <section className="flex justify-center mt-8">
        <a href="https://so365.in/smartapp_ess">
          <motion.button
            whileHover={{
              scale: 1.05,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.6 },
            }}
            className="w-[200px] lg:w-[300px] xl:w-[400px] 2xl:w-[500px] text-center bg-gray-900 text-white hover:shadow-xl font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
          >
            <span className="text-xl">Click Here to Access Sampark</span> <br />{" "}
            For Internal Team only
          </motion.button>
        </a>
      </section>

      {/* Benefits Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:p-12">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                }}
                className="text-3xl font-extrabold text-white sm:text-4xl"
              >
                Why Join Us?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.2 },
                }}
                className="mt-3 max-w-md mx-auto text-lg text-purple-100"
              >
                We offer competitive benefits and a culture you'll love.
              </motion.p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Competitive Salary",
                  description:
                    "We offer competitive compensation packages including bonuses and stock options.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Flexible Work",
                  description:
                    "Work remotely or from our modern offices with flexible hours.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Learning Budget",
                  description:
                    "Annual stipend for conferences, courses, and books to further your growth.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  ),
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={["hover", "pulse"]}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">
                        {benefit.name}
                      </h3>
                      <p className="mt-1 text-purple-100">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reels Sections */}
      <section className="-mt-12">
        <LazyLoadSection fallback="Loading Work Culture...">
          <WorkCultureReels />
        </LazyLoadSection>
      </section>

      <section>
        <LazyLoadSection fallback="Loading Safety & Security...">
          <SafetySecurityReels />
        </LazyLoadSection>
      </section>

      <section>
        <LazyLoadSection fallback="Loading Gallery...">
          <ImageSlider />
        </LazyLoadSection>
      </section>

      <section className="mt-[130px]">
        <LazyLoadSection fallback="Loading Footer...">
          <Footer />
        </LazyLoadSection>
      </section>
    </div>
  );
};

export default Career;
