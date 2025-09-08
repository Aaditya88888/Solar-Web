import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reelsData = [
  {
    videoSrc:
      "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670320/Riddhi_Go_Solar_Save_Environment_nnr6c1.mp4",
    username: "Riddhi Agarwal",
    caption: "Topic: Go Solar, Save Environment",
  },
  {
    videoSrc:
      "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670320/Kaushlesh_Source_Of_Renewable_Energy_sfsmbt.mp4",
    username: "Kaushlesh Sharma",
    caption: "Topic: Source of Renewable Energy",
  },

  {
    videoSrc:
      "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670320/Founder_And_Friends_Save_Environment_With_Solar_p7vffm.mp4",
    username: "Divy Power Team",
    caption: "Topic: Founder and Friends Save Environment",
  },
  {
    videoSrc:
      "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670320/Shivam_Go_Solar_Save_Environment_kzafuo.mp4",
    username: "Shivam Singh",
    caption: "Topic: Go Solar, Save Environment",
  },
  {
    videoSrc:
      "https://res.cloudinary.com/dcvmuus25/video/upload/v1755670320/Ateesh_Breaking_The_Myth_fbazvn.mp4",
    username: "Ateesh Kumar",
    caption: "Topic: Breaking The Myth About Solar",
  },
];

const FiguringOut1 = () => {
  const scrollRef = useRef(null);
  const videoRefs = useRef([]); // Store all video refs

  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 250; // Reduced scroll step to match smaller reels
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== currentIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-12 relative mt-[100px] sm:mt-0 translate-y-[-100px] lg:-mt-[50px]">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center lg:text-[30px] xl:text-[30px] 2xl:text-[30px] text-2xl font-bold text-green-800 mb-8">
          Breaking the Myth, Switch to Solar
        </h2>

        {/* Desktop/Tablet Arrows */}
        <div className="hidden sm:block absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <button
            onClick={() => scrollBy("left")}
            className="bg-black text-white rounded-full shadow p-3 hover:bg-green-600 active:scale-95 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <button
            onClick={() => scrollBy("right")}
            className="bg-black text-white rounded-full shadow p-3 hover:bg-green-600 active:scale-95 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Video Row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scroll-smooth scrollbar-hide py-3"
        >
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 sm:w-56 bg-[#918f8f] shadow-md p-2 hover:shadow-lg transition-all"
            >
              <div className="relative  overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={reel.videoSrc}
                  className="w-full aspect-[9/16] object-cover  hover:scale-105 transition-transform duration-300"
                  controls
                  onPlay={() => handlePlay(index)}
                  playsInline
                />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-gray-700 font-semibold"></div>
              <p className="text-[10px] sm:text-xs text-gray-100">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Arrows */}
        <div className="flex sm:hidden justify-center gap-6 mt-4">
          <button
            onClick={() => scrollBy("left")}
            className="bg-black text-white rounded-full p-3 shadow hover:bg-green-600 transition active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="bg-black text-white rounded-full p-3 shadow hover:bg-green-600 transition active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiguringOut1;
