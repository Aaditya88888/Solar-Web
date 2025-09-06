import React from "react";
import T1 from "../Images/T1.webp";
import T2 from "../Images/T2.webp";
import T3 from "../Images/T3.webp";
import T4 from "../Images/T4.webp";
import T5 from "../Images/T5.webp";
import T6 from "../Images/T6.webp";
import T7 from "../Images/T7.webp";
import T8 from "../Images/T8.webp";
import T9 from "../Images/T9.webp";
import T10 from "../Images/T10.webp";
import T11 from "../Images/T11.webp";
import T12 from "../Images/T12.webp";
import T13 from "../Images/T13.webp";
import T14 from "../Images/T14.webp";
import T15 from "../Images/T15.webp";
import T16 from "../Images/T16.webp";
import T17 from "../Images/T17.webp";
import T18 from "../Images/T18.webp";

const solarImages = [
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
];

const MasonryGallery = () => {
  return (
    <section className="bg-[#f8f7f0] py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
          Solar Gallery
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {solarImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Solar Panel ${index}`}
              className="mb-4 w-full rounded-2xl border-4 border-white object-cover break-inside-avoid shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;
