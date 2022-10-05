import React, { useContext } from "react";
import { sliderContext } from "../../contexts/sliderContext";

const Slide = ({ imgIndex }) => {
  const { imgs, activeSlide, setActiveSlide } = useContext(sliderContext);

  return (
    <div
      className={`slide ${activeSlide === imgIndex ? "active" : ""}`}
      onClick={() => setActiveSlide(imgIndex)}
    >
      <img src={imgs["slide" + imgIndex]} alt="workspace slide" />
    </div>
  );
};

export default Slide;
