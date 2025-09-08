import React, { useEffect, useState } from "react";
import outdoor from "../Images/outdoor.webp";
import solarLight from "../Images/solarLight.webp";
import sustainable from "../Images/sustainable.webp";
import solarRooftop from "../Images/solarRooftop.webp";
import { Link } from "react-router-dom";

const reelsData = [
  {
    id: 1,
    title: "Solar Rooftop Systems",
    desc: "High-efficiency rooftop PV solutions for homes and businesses.",
    img: solarRooftop,
  },
  {
    id: 2,
    title: "Sustainable Building",
    desc: "Eco-friendly materials and solar panels for a greener future.",
    img: sustainable,
  },
  {
    id: 3,
    title: "Ground Mount/Utility Scale Service",
    desc: "large-scale installations set up on open land to generate significant amounts of renewable energy.",
    img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Outdoor Living Spaces",
    desc: "Create relaxing patios and gardens that extend your living area.",
    img: outdoor,
  },
  {
    id: 5,
    title: "Commercial Solar Solutions",
    desc: "Reduce energy costs with reliable and scalable commercial solar.",
    img: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Solar Street Lighting",
    desc: "All-in-one solar street lights for roads, campuses, and societies.",
    img: solarLight,
  },
];

// Utility to shuffle array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ReelsSection = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    setReels(shuffleArray(reelsData));
  }, []);

  return (
    <section className="bg-[#f8f7f0] py-14 px-4 GetFontSol">
      <div className="max-w-7xl mx-auto bg-[#0f2244] rounded-[40px] overflow-hidden relative shadow-lg">
        {/* Background overlay */}
        <img
          src="https://storage.googleapis.com/a1aa/image/f3495049-9e31-4d2e-4b33-9ff40415d344.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left Text */}
          <div className="text-white max-w-md space-y-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight GetFontSol">
              Discover Inspiring <br />
              Solar Innovations
            </h1>
            <p className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">
              <Link to="/about">
                {" "}
                More About Us <i className="fas fa-arrow-right" />
              </Link>
            </p>
          </div>

          {/* Right Reels Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reels.map(({ id, title, desc, img }) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition transform hover:scale-[1.03]"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-[200px] sm:h-[180px] lg:h-[150px] object-cover"
                />
                <div className="p-5 text-center flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{desc}</p>
                  </div>
                  <Link to="/contact" className="bg-[#f59e0b] text-black font-semibold rounded-full px-5 py-2 inline-flex items-center justify-center gap-2 hover:bg-yellow-500 transition">
                    <span>Get Quote</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
