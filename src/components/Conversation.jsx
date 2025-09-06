import { useEffect, useState, useRef } from "react";
import MessageBubble from "./MessageBubble";
import solarChachaImg from "../Images/chacha.webp";
import roshniDidiImg from "../Images/didi.webp";
import "./Home.css";
import "./Home.css";

const conversationData = [
  { sender: "roshni", text: "Mera bijli ka bill iss baar bhi ₹3500 aa gaya" },
  {
    sender: "chacha",
    text: "Beti, is desh mein har family agle 5 saal mein ₹3 lakh se zyada sirf bijli mein gawa degi. Aur milta kya hai? Power cut aur mehenga bijli.",
  },
  { sender: "roshni", text: "Toh phir hum karein kya? Bijli toh chahiye na." },
  {
    sender: "chacha",
    text: "Isiliye toh keh raha hoon. Chhat pe jo suraj chamak raha hai, woh muft hai. Solar laga lo. Apni bijli khud banao. Har din jo paisa jaa raha hai, woh bachao.",
  },
];

const Conversation = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);

      const typingTimeout = setTimeout(() => {
        setIsTyping(false);

        // Add message to display
        setMessages((prev) => [...prev, conversationData[currentIndex]]);
        // Move to next message
        if (currentIndex < conversationData.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          // Restart animation after last message
          setTimeout(() => {
            setMessages([]);
            setCurrentIndex(0);
          }, 2000);
        }
      }, 1800);

      return () => clearTimeout(typingTimeout);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <div
        ref={scrollRef}
        className="wp w-full max-w-[95%] sm:max-w-xl md:max-w-2xl 
                   bg-[#075e44] rounded-2xl px-4 py-4 sm:px-6 sm:py-6 
                   space-y-4 shadow-lg 
                   overflow-y-auto"
        style={{ minHeight: "200px", maxHeight: "70vh" }} // grows only downwards
      >
        {messages.map((msg, i) => (
          <MessageBubble
            key={i}
            sender={msg.sender}
            text={msg.text}
            avatar={msg.sender === "chacha" ? solarChachaImg : roshniDidiImg}
          />
        ))}
        {isTyping && currentIndex < conversationData.length && (
          <MessageBubble
            sender={conversationData[currentIndex].sender}
            typing={true}
            avatar={
              conversationData[currentIndex].sender === "chacha"
                ? solarChachaImg
                : roshniDidiImg
            }
          />
        )}
      </div>
    </div>
  );
};

export default Conversation;
