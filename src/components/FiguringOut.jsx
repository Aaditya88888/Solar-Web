import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const teamMembers = [
  {
    name: "Architect",
    role: "Architect",
    image:
      "https://storage.googleapis.com/a1aa/image/249ae767-68b3-4bcd-1521-265ee80c5d7b.jpg",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671071/Architecture_Interviews_Cosmopolitan_Development_2_rtymwf.mp4",
  },
  {
    name: "Architect",
    role: "Architect",
    image:
      "https://storage.googleapis.com/a1aa/image/ba2e056b-5797-4eaa-d680-7a78a84778c0.jpg",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671071/Architecture_Interviews_Evolving_Tech_Using_Solar_1_p5jne5.mp4",
  },
  {
    name: "Entrepreneur",
    role: "Entrepreneur",
    image:
      "https://storage.googleapis.com/a1aa/image/d8ee8bcd-44eb-4126-73ad-adb857ac13a5.jpg",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671071/Founder_And_Friends_Divy_And_Founder_y7hena.mp4",
  },
  {
    name: "Head of Architect",
    role: "Solar Specialist",
    image:
      "https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg",
    reel: "https://res.cloudinary.com/dlkwlywps/video/upload/v1755671071/Architecture_Interviews_Challenges_Among_Industries_1_kqfiap.mp4",
  },
];

const FiguringOut = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    // Pause all other videos
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
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-[100%] mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-green-800">
          Figuring out with DIVY with Architects
        </h2>

        {/* Mobile: Grid 3 cols | Desktop: One centered row */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-center gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#787878] shadow-md p-2 rounded-lg hover:shadow-lg transition-all w-full sm:w-full md:w-[180px] flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={member.reel}
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
              <p className="mt-2 text-[9px] sm:text-xs text-gray-100 text-center font-medium">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiguringOut;
