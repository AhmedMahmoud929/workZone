import React from "react";
// Imgs
import eventsModel from "../../assets/imgs/eventsModel.png";
import shadowImg from "../../assets/imgs/shadowImg.png";
import AnimatedTitle from "../Animations/AnimatedTitle";

const Events = () => {
  return (
    <section id="events">
      <div className="container title">
        <AnimatedTitle name="Events" />
      </div>
      <div className="container main">
        <div className="left">
          <h1 data-aos="fade-right">
            You want a place for your <span>event</span> ?
          </h1>
          <p data-aos="fade-right" data-aos-delay="150">Feel free to communicate with us</p>
          <a data-aos="fade-right" data-aos-delay="200" className="btn" href="#contact">
            Get Started
          </a>
        </div>
        <div className="right" data-aos="fade-left" data-aos-delay="50">
          <img src={eventsModel} alt="model" />
          <img src={shadowImg} alt="shadow" />
        </div>
      </div>
    </section>
  );
};

export default Events;
