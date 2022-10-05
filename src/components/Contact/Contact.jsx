import React, { useState, useRef } from "react";
import AnimatedTitle from "../Animations/AnimatedTitle";
import Links from "./Links";
import Map from "./Map";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <AnimatedTitle name="Contact"/>
        <div className="info" data-aos="fade-right" data-aos-delay="100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          repudiandae facilis non?
        </div>
        <main>
          <Links />
          <Map/>
        </main>
      </div>
    </section>
  );
};

export default Contact;
