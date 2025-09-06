import React from "react";
import { Link } from "react-router-dom";
import Blog1 from "../Images/Blog1.webp";
import Blog2 from "../Images/Blog2.webp";

const cardData = [
  {
    image: Blog1,
    date: "March 25, 2025",
    tag: "Solar Solution",
    title:
      "Title: Powering the Future: Unlocking the Potential of Solar Energy for Your Business",
    name: "SolarArticle",
    path: "/Blog1",
  },
  {
    image: Blog2,
    date: "Nov 27, 2024",
    tag: "Solar Solution",
    title: "Embracing Solar Energy: A Path to Sustainable Profitability",
    name: "SustainableProfitability",
    path: "/Blog2",
  },
];

const SolarCards = () => {
  return (
    <div className="bg-white min-h-screen px-4  GetFontSol">
      <div className="max-w-screen-2xl mx-auto text-center mb-12 px-2">
        <h2 className="text-green-800 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
          Quality Handyman Solution
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 GetFontSol">
          Inside Story Of Our Company
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 xl:gap-10">
        {cardData.map((card, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover rounded-t-xl"
            />
            <div className="p-4 sm:p-5 md:p-6">
              <div className="flex justify-between flex-wrap text-xs sm:text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1 mb-1 sm:mb-0">
                  <i className="fas fa-calendar-alt text-green-800" />
                  <span>{card.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="fas fa-tag text-green-800" />
                  <span>{card.tag}</span>
                </div>
              </div>
              <h3 className="text-sm sm:text-base text-gray-800 uppercase tracking-wide leading-snug mb-4 font-semibold">
                {card.title}
              </h3>
              <div
                href="#"
                className="inline-block border border-green-800 text-green-800 px-5 py-2 text-xs sm:text-sm rounded hover:bg-green-50 transition"
              >
                <Link key={card.name} to={card.path}>
                  Read Details <i className="fas fa-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SolarCards;
