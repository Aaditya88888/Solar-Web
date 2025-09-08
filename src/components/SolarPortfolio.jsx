import { motion, AnimatePresence } from "framer-motion";
import { categories, projects, iconMap } from "./ProjectData";
import { useState } from "react";

const SVGAccent = () => (
  <svg
    className="absolute top-2 right-2 w-16 h-16 text-gray-100 opacity-20 "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6v6l4 2"
    />
  </svg>
);

const SolarPortfolio = () => {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const handleFilterChange = (cat) => {
    setActive(cat);
    setVisibleCount(3); // reset to 3 on new filter
  };

  return (
    <section
      className="pb-8 px-4 py-10 bg-gradient-to-br from-white to-gray-100 shadow-lg GetFontSol md:px-12 lg:px-20 xl:px-32 2xl:px-52 
  mt-[100px] translate-y-[-500px]"
    >
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition duration-300 
            ${
              active === cat
                ? "bg-green-800 text-white"
                : "bg-gray-100 hover:bg-blue-100 text-gray-700"
            }`}
          >
            <span className="text-sm font-medium">{cat}</span>
          </button>
        ))}
      </div>
      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 py-10">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-md border bg-white p-6 hover:shadow-xl"
            >
              <SVGAccent />
              {/* Image wrapper for zoom effect */}
              <div className="rounded-xl mb-4 w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-blue-500">{iconMap[project.category]}</div>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              {project.kwp !== "N/A" && (
                <p className="text-sm text-gray-500"></p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* See More Button */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="px-6 py-2 rounded-full bg-green-800 text-white hover:bg-green-700 transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default SolarPortfolio;
