import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const videoData = [
  {
    name: "Vivek",
    video:
      "https://res.cloudinary.com/du6297ykk/video/upload/v1755671356/Vivek_Our_Culture_nezpet.mp4",
  },
  {
    name: "Rajeev Arora - Teamwork",
    video:
      "https://res.cloudinary.com/du6297ykk/video/upload/v1755671357/Asha_Team_Work_Culture_rxg7cm.mp4",
  },
  {
    name: "Lal Singh",
    video:
      "https://res.cloudinary.com/du6297ykk/video/upload/v1755671356/Lal_Singh_Our_Culture_Is_Our_Legacy_ahn4yl.mp4",
  },
  {
    name: "Shivam",
    video:
      "https://res.cloudinary.com/du6297ykk/video/upload/v1755671356/Shivam_Work_Culture_qradts.mp4",
  },
  {
    name: "Riddhi",
    video:
      "https://res.cloudinary.com/du6297ykk/video/upload/v1755671356/Riddhi_Work_Culture_l20fes.mp4",
  },
  {
    name: "Rajeev Arora - Legacy",
    video:
      "https://res.cloudinary.com/du6297ykk/video/upload/v1755671355/Rajeev_Arora_Our_Culture_Is_Our_Legacy_cupx9i.mp4",
  },
  {
    name: "Asha",
    video:
      "https://res.cloudinary.com/du6297ykk/video/upload/v1755671357/Asha_Team_Work_Culture_rxg7cm.mp4",
  },
  {
    name: "Kaushlesh Singh",
    video:
      "https://res.cloudinary.com/du6297ykk/video/upload/v1755671356/Kaushlesh_Singh_Our_Culture_Is_Our_Legacy_fequaj.mp4",
  },
  {
    name: "Bhawna",
    video:
      "https://res.cloudinary.com/du6297ykk/video/upload/v1755671357/Bhawna_Our_Culture_enhezj.mp4",
  },
];

const WorkCultureReels = () => {
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
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 w-full mt-11">
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Work Culture at DIVY
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-center gap-4">
          {videoData.map((item, index) => (
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

export default WorkCultureReels;
