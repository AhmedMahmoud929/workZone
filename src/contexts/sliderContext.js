import React, { useState } from "react";
// Imgs
import slide1 from "../assets/imgs/slide1.jpg";
import slide2 from "../assets/imgs/slide2.jpg";
import slide3 from "../assets/imgs/slide3.jpg";
import slide4 from "../assets/imgs/slide4.jpg";
const imgs = {
  slide1: slide1,
  slide2: slide2,
  slide3: slide3,
  slide4: slide4,
};

const sliderContext = React.createContext();

const SliderState = (props) => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <sliderContext.Provider
      value={{ imgs, activeSlide, setActiveSlide }}
    >
      {props.children}
    </sliderContext.Provider>
  );
};

export { SliderState, sliderContext };
