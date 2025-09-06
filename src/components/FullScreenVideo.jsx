import SL from "../Images/F.webm";
import SL1 from "../Images/SL.webp";

const FullScreenVideo = ({ mode = "cover" }) => {
  return (
    <div className="w-full h-[260px] sm:h-[360px] md:h-screen lg:h-screen xl:h-screen 2xl:h-screen relative overflow-hidden bg-black">
      <video
        className={`absolute top-0 left-0 w-full h-full 
          ${mode === "cover" ? "object-cover" : "object-contain"} 
          md:object-cover`}
        src={SL}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster={SL1}
      />
      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
    </div>
  );
};

export default FullScreenVideo;
