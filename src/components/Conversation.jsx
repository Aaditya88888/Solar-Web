import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MessageBubble from "./MessageBubble";
import solarChachaImg from "../Images/chacha.png";
import roshniDidiImg from "../Images/didi.png";
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

// Bubble animation variants
const bubbleVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
  exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.2 } },
};

// Inline text infinite animation
const inlineTextVariants = {
  float: {
    y: [0, -5, 5, -3, 3, 0],
    rotate: [0, 2, -2, 1, -1, 0],
    scale: [1, 1.02, 0.98, 1.01, 0.99, 1],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 4,
      ease: "easeInOut",
    },
  },
};

// Typing bubble animation
const typingVariants = {
  animate: {
    opacity: [0.5, 1, 0.7, 1],
    y: [10, 0, 5, 0],
    transition: { repeat: Infinity, duration: 1 },
  },
};

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
          }, 2000); // Delay before restarting
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
    <div className="flex flex-col items-center p-6 mt-16">
      {/* Chat container */}
      <motion.div
        ref={scrollRef}
        className="wp w-full max-w-3xl bg-[#075e44] rounded-2xl p-4 space-y-3 overflow-y-auto shadow-xl max-h-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <MessageBubble
                sender={msg.sender}
                avatar={
                  msg.sender === "chacha" ? solarChachaImg : roshniDidiImg
                }
              >
                <motion.span
                  style={{ display: "inline-block" }}
                  variants={inlineTextVariants}
                  animate="float"
                >
                  {msg.text}
                </motion.span>
              </MessageBubble>
            </motion.div>
          ))}

          {isTyping && currentIndex < conversationData.length && (
            <motion.div variants={typingVariants} animate="animate">
              <MessageBubble
                sender={conversationData[currentIndex].sender}
                typing={true}
                avatar={
                  conversationData[currentIndex].sender === "chacha"
                    ? solarChachaImg
                    : roshniDidiImg
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Conversation;
