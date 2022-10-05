import React from "react";

const AnimatedTitle = ({ name }) => {
  return (
    <div data-aos="fade-right" className="main-title">
      {name}
    </div>
  );
};

export default AnimatedTitle;
