import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import img17 from "../Images/img17.jpg";

const ProjectDetails = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-20 bg-[#f8f7f0] GetFontSol">
      {/* Description */}
      <section className="fade-up text-center">
        <motion.h2
          className="text-3xl font-extrabold mb-4 text-green-700 inline-block"
          animate={{
            transform: [
              "translateY(0px) rotate(0deg) scale(1)",
              "translateY(-8px) rotate(-2deg) scale(1.05)",
              "translateY(0px) rotate(0deg) scale(0.95)",
              "translateY(6px) rotate(2deg) scale(1.05)",
              "translateY(0px) rotate(0deg) scale(1)",
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Our Projects & Milestones
        </motion.h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          At Divy Power, our mission is not just to install solar systems, but
          to create a lasting impact through sustainable energy solutions. We
          deliver innovation, efficiency, and green power across residential,
          commercial, and government projects.
        </p>
      </section>

      {/* Example Projects */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Residential Solar Installations",
            img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800",
          },
          {
            title: "Commercial Rooftops",
            img: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=800",
          },
          {
            title: "Government Partnerships",
            img: img17,
          },
        ].map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vehicula lorem nec nulla luctus, at facilisis turpis luctus.
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default ProjectDetails;
