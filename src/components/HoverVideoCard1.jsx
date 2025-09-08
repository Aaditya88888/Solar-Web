import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Ateesh Kumar",
    role: "TATA Solar Partner",
    image: "https://storage.googleapis.com/a1aa/image/ateesh-profile.jpg",
    reel: "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670542/Ateesh_Tata_Authorised_Solar_Partner_h9y61t.mp4",
  },
  {
    name: "Shivam Singh",
    role: "Solar Consultant",
    image: "https://storage.googleapis.com/a1aa/image/shivam-profile.jpg",
    reel: "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670542/Shivam_Choose_Divy_As_Your_Solar_Partner_vfzumc.mp4",
  },
  {
    name: "Kaushlesh Sharma",
    role: "Solar Analyst",
    image: "https://storage.googleapis.com/a1aa/image/kaushlesh-profile.jpg",
    reel: "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670542/Kaushlesh_We_And_Our_Competitors_nevpj5.mp4",
  },
  {
    name: "Asha Gupta",
    role: "Warranty Expert",
    image: "https://storage.googleapis.com/a1aa/image/asha-profile.jpg",
    reel: "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670542/Asha_Divy_Power_Sop_s_m4suai.mp4",
  },
  {
    name: "Rajeev Arora",
    role: "Quality Head",
    image: "https://storage.googleapis.com/a1aa/image/rajeev-profile.jpg",
    reel: "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670542/Rajeev_Arora_Our_Quality_Is_Our_Legacy_trrams.mp4",
  },
];

const HoverVideoCard1 = () => {
  const scrollRef = useRef(null);
  const videoRefs = useRef([]); // keep refs of all videos

  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 250; // smaller step for smaller cards
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((v, i) => {
      if (i !== currentIndex && v && !v.paused) v.pause();
    });
  };

  return (
    <div className="bg-white py-10 px-3 sm:px-6 lg:px-8 translate-y-[-500px]">
      <div className="max-w-7xl mx-auto relative mt-20">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[30px] text-green-800 mb-8 sm:mb-10 About1 px-2">
          Choose DIVY as your Solar Partner
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scrollBy("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 sm:p-3 rounded-full shadow-md z-20 hover:bg-green-700"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={() => scrollBy("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 sm:p-3 rounded-full shadow-md z-20 hover:bg-green-700"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth whitespace-nowrap px-1 sm:px-2 scrollbar-hide py-2"
          style={{ scrollBehavior: "smooth" }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 sm:w-48 md:w-56 lg:w-60 bg-[#918f8f] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-2"
            >
              <div className="overflow-hidden rounded-lg">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={member.reel}
                  className="w-full aspect-[9/16] object-cover hover:scale-105 transition-transform duration-300"
                  controls
                  onPlay={() => handlePlay(index)}
                  playsInline
                />
              </div>
              <div className="text-left mt-2 px-1 pb-1">
                <p className="text-sm sm:text-base font-semibold text-gray-100 truncate">
                  {member.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-100 truncate">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverVideoCard1;
