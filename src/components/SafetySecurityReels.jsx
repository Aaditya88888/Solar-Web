import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const safetyVideos = [
  {
    name: "Lal Singh - Safety & Security",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671269/Lal_Singh_Safety_And_Security_At_Divy_dqe8mr.mp4",
  },
  {
    name: "Lal Singh - Team Safety",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671269/Lal_Singh_Safety_And_Security_At_Divy_dqe8mr.mp4",
  },
  {
    name: "Kaushlesh Singh - Precautions",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671270/Kaushlesh_Singh_Safety_Precautions_At_Divy_dyhkar.mp4",
  },
  {
    name: "Kaushlesh - Employee Safety",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671270/Kaushlesh_Employee_Safety_At_Divy_kagr69.mp4",
  },
  {
    name: "Rajeev Arora - Safety & Benefits",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671269/Rajeev_Arora_Safety_And_Benefit_At_Divy_fi6p6g.mp4",
  },
  {
    name: "Asha - Employee Safety",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671270/Asha_Employee_Safety_vigazb.mp4",
  },
  {
    name: "Riddhi - Team Safety",
    video:
      "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671269/Riddhi_Team_Safety_f12krk.mp4",
  },
];

const SafetySecurityReels = () => {
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
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Safety and Security at DIVY
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-center gap-4">
          {safetyVideos.map((item, index) => (
            <div
              key={index}
              className="bg-[#787878] shadow-md p-2 rounded-lg hover:shadow-lg transition-all w-full sm:w-full md:w-[125px] flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  className="w-full aspect-[9/16] object-cover"
                  playsInline
                />
                <button
                  onClick={() => handlePlayPause(index)}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#787878] text-white p-2 rounded-full hover:bg-[#787878] transition"
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

export default SafetySecurityReels;
