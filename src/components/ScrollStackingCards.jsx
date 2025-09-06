import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./ScrollStackingCards.css";

const ScrollStackingCards = ({ content }) => {
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY + 150;
          let currentIndex = -1;

          cardsRef.current.forEach((card, idx) => {
            const cardTop = card.offsetTop;
            if (scrollTop >= cardTop) currentIndex = idx;
          });

          setActiveIndex(currentIndex);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="cards-container mt-20">
      {content.map((card, i) => {
        const isActive = i === activeIndex;
        const isInactive = i < activeIndex;

        return (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`card ${i % 2 !== 0 ? "reverse" : ""} ${
              isActive ? "active" : ""
            } ${isInactive ? "inactive" : ""}`}
          >
            <div className="image-container">
              <img src={card.img} alt={card.alt} loading="lazy" />
            </div>
            <div className="text-content">
              <h3 className="About">{card.heading}</h3>
              <h4 className="About text-[14px]">{card.subheading}</h4>
              <ul>
                {card.points.map((point, idx) => (
                  <AnimatedPoint key={idx} text={point} index={idx} />
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// AnimatedPoint Component
const AnimatedPoint = ({ text, index }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: false });
  const isDesktop = window.innerWidth >= 1024; // Only desktop animation

  useEffect(() => {
    if (isDesktop) {
      if (inView) {
        controls.start({
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.5,
            delay: index * 0.15, // stagger effect
          },
        });
      } else {
        controls.start({ x: -50, opacity: 0 });
      }
    } else {
      // Mobile fallback
      controls.start({ x: 0, opacity: 1 });
    }
  }, [inView, controls, index, isDesktop]);

  return (
    <motion.li
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={controls}
      whileHover={
        isDesktop
          ? {
              scale: 1.1,
              color: ["#ff4d4d", "#ffa64d", "#4dff88"],
              transition: { duration: 1, repeat: Infinity },
            }
          : {}
      }
      className="About text-[16px] transition-all cursor-pointer"
    >
      {text}
    </motion.li>
  );
};

export default ScrollStackingCards;
