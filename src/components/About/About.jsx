import React from "react";
import Advantages from "./Advantages";
import SliderImgs from "./SliderImgs";
import { SliderState } from "../../contexts/sliderContext";
import AnimatedTitle from "../Animations/AnimatedTitle";

const Services = () => {
  return (
    <section id="about">
      <div className="container">
        <AnimatedTitle name="Why Us ?"/>
        <main>
          <Advantages />
          <SliderState>
            <SliderImgs />
          </SliderState>
        </main>
      </div>
    </section>
  );
};

export default Services;
