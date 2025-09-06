import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const reelsData = [
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670986/Asha_Growth_At_Divy_rm8u7t.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670987/Kaushlesh_Growth_At_Divy_l4rdbm.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670987/Rishika_Growth_At_Divy_xog75t.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670987/Riddhi_Growth_At_Divy_mfjyez.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670987/Kaushlesh_Singh_Growth_At_Divyy_emjd0y.mp4",
  },
  {
    role: "Solar Specialist",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755670988/Shruti_Growth_At_Divy_tfpcmy.mp4",
  },
];

const HoverVideoCard3 = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        video.pause();
      }
    });

    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 w-full mt-24">
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-green-800 mb-8">
          Growth At Divy
        </h2>

        {/* Horizontal Carousel */}
        <div className="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide gap-4 py-2">
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start rounded-lg shadow-md bg-[#787878] p-2 hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{
                width: "100%", // mobile: full width
                maxWidth: "250px", // desktop: multiple cards fit
              }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[9/16]">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={reel.reel}
                  className="w-full h-full object-cover"
                  playsInline
                />
                <button
                  onClick={() => handlePlayPause(index)}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#787878] text-white p-2 rounded-full hover:bg-[#555] transition"
                >
                  {playingIndex === index ? (
                    <FaPause size={12} />
                  ) : (
                    <FaPlay size={12} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoverVideoCard3;
