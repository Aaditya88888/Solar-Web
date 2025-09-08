import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes Divy Power different from other solar companies?",
    answer:
      "We are an authorized partner of Tata Power Solar with over a decade of experience...",
  },
  {
    question: "Do you provide complete solar project solutions?",
    answer:
      "Yes, from conceptual planning and feasibility studies to installation...!",
  },
  {
    question: "Sarkari subsidy kaise milti hai?",
    answer:
      "Online apply karna hota hai ya approved vendor ke through kaam karwana hota hai. Hum help kar denge usme bhi, tu tension na le.",
  },
  {
    question: "Can I get a customized solar solution for my home or business?",
    answer: "Absolutely! We assess your energy needs, location, and budget...",
  },
  {
    question: "What is included in your AMC (Annual Maintenance Contract)?",
    answer: "Our AMC covers regular maintenance, system health checks...",
  },
  {
    question: "How safe are your solar systems?",
    answer:
      "Safety is our top priority. We include certified earthing systems...",
  },
  {
    question: "What is the lifespan of a solar panel system?",
    answer:
      "With proper maintenance, our high-quality solar panels can last 25 years or more...",
  },
  {
    question: "Do you provide gensets along with solar systems?",
    answer: "Yes, we offer both gas and diesel/petrol gensets...",
  },
  {
    question: "How long does it take to install a solar system?",
    answer:
      "Installation time depends on system size, but most residential projects...",
  },
  {
    question: "Do solar systems work during cloudy weather or at night?",
    answer: "Yes, though performance may reduce in cloudy conditions...!",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggleFaqs = () => {
    setVisibleCount(visibleCount >= faqs.length ? 3 : visibleCount + 3);
    setOpenIndex(null); // Close any open FAQ
  };

  return (
    <section
      ref={ref}
      className="bg-[#E50C0C] py-20 px-4 sm:px-8 lg:px-32 font-sans About -mt-[500px]"
    >
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-2xl font-bold text-white tracking-wide">OUR FAQ</h4>
        <h2 className="text-4xl font-bold text-yellow-300 mb-4">
          Chacha Ki Free Solar Salah
        </h2>
        <p className="text-gray-300 text-lg">
          Jo bhi confusion ho, Chacha sab samjhayenge!
        </p>
      </motion.div>

      {/* FAQ List */}
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-[#f0f4f7] rounded-xl shadow-md hover:shadow-xl transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <button
              className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <motion.span
                className="text-gray-800 font-semibold text-base sm:text-lg"
                whileTap={{ scale: 0.95 }}
              >
                {faq.question}
              </motion.span>
              <span className="text-gray-800">
                {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 500 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-800 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* See More / Less */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleToggleFaqs}
          className="bg-yellow-300 text-green-900 font-semibold py-2 px-6 rounded-lg shadow hover:bg-yellow-400 transition duration-300"
        >
          {visibleCount >= faqs.length ? "See Less" : "See More"}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default FaqSection;
