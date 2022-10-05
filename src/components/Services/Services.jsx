import React, { useState, useRef } from "react";
import Cursor from "./Cursor";
import ServiceCard from "./ServiceCard";
// Animation
import AnimatedTitle from "../Animations/AnimatedTitle";

const Services = () => {
  const slides = useRef();
  const [activeSlide, setActiveSlide] = useState(1);
  const slideTo = (n = 0) => {
    if (n === 1) {
      slides.current.scroll(0, 0);
      setActiveSlide(1);
    } else if (n === 2) {
      slides.current.scroll(700, 0);
      setActiveSlide(2);
    }
  };
  return (
    <section id="services">
      <div className="container">
        <AnimatedTitle name="Services" />
        <div className="cards" ref={slides}>
          <ServiceCard
            title="Quite Places"
            section="about"
            image="workspace"
            delay={100}
          />
          <ServiceCard
            title="Live Courses"
            section="courses"
            image="courses"
            delay={300}
          />
          <ServiceCard
            title="Events Places"
            section="events"
            image="events"
            delay={500}
          />
        </div>
        <Cursor slideTo={slideTo} activeSlide={activeSlide} />
      </div>
    </section>
  );
};

export default Services;
