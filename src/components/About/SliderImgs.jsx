import React, { useContext } from "react";
import { sliderContext } from "../../contexts/sliderContext";
import Slide from "./Slide";

const SliderImgs = () => {
  const { imgs, activeSlide } = useContext(sliderContext);
  return (
    <div data-aos="fade-up" data-aos-delay="200" className="slider-imgs right">
      <div className="main-slide">
        <img src={imgs["slide" + activeSlide]} alt="workspace" />
      </div>
      <div className="slides">
        <Slide imgIndex={1} />
        <Slide imgIndex={2} />
        <Slide imgIndex={3} />
        <Slide imgIndex={4} />
      </div>
    </div>
  );
};

export default SliderImgs;
