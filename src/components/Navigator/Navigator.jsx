import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { RiHeadphoneFill } from "react-icons/ri";
import { FaBook, FaGraduationCap, FaCalendarPlus } from "react-icons/fa";

const Navigator = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  function linksScroll(query) {
    if (query.matches) {
      // If media query matches
      window.onscroll = () => {
        const scroll = Math.trunc(window.scrollY);
        // Home => 0 : 350
        if (scroll >= 0 && scroll <= 400) setActiveIndex(1);
        // About => 600 : 1250
        else if (scroll >= 600 && scroll <= 1250) setActiveIndex(2);
        // Courses => 1350 : 1950
        else if (scroll >= 1350 && scroll <= 1950) setActiveIndex(3);
        // Events => 1950 : 1850
        else if (scroll >= 1850 && scroll <= 2650) setActiveIndex(4);
        // Contacts => 3200 : 3700
        else if (scroll >= 3200 && scroll <= 3800) setActiveIndex(5);
        else setActiveIndex(null);
      };
    }
  }
  let query = window.matchMedia("(min-width: 1100px)");
  linksScroll(query); // Call listener function at run time
  query.addListener(linksScroll); // Attach listener function on state changes

  return (
    <div className="navigator">
      <a
        href="#home"
        className={`a-lg + ${activeIndex === 1 ? "active" : ""}`}
        onClick={() => setActiveIndex(1)}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={activeIndex === 2 ? "active" : ""}
        onClick={() => setActiveIndex(2)}
      >
        <FaBook />
      </a>
      <a
        href="#courses"
        className={`a-lg + ${activeIndex === 3 ? "active" : ""}`}
        onClick={() => setActiveIndex(3)}
      >
        <FaGraduationCap />
      </a>
      <a
        href="#events"
        className={activeIndex === 4 ? "active" : ""}
        onClick={() => setActiveIndex(4)}
      >
        <FaCalendarPlus />
      </a>
      <a
        href="#contact"
        className={`a-lg + ${activeIndex === 5 ? "active" : ""}`}
        onClick={() => setActiveIndex(5)}
      >
        <RiHeadphoneFill />
      </a>
    </div>
  );
};

export default Navigator;
