import React from "react";

const Cursor = ({ slideTo, activeSlide }) => {
  return (
    <div className="services-cursor">
      <div
        onClick={() => slideTo(1)}
        className={activeSlide === 1 ? "active" : ""}
      >
        {" "}
      </div>
      <div
        onClick={() => slideTo(2)}
        className={activeSlide === 2 ? "active" : ""}
      >
        {" "}
      </div>
    </div>
  );
};

export default Cursor;
