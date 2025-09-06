import { useEffect, useRef, useState } from "react";
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
                  <li className="About text-[16px]" key={idx}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollStackingCards;
