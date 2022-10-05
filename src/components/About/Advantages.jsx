import React from "react";
// Imgs
import correctIcon from "../../assets/imgs/accept.png";

const Advantages = () => {
  return (
    <div className="left">
      <p data-aos="fade-right" data-aos-delay="200">
        Lorem ipsum dolor sit,
        <br />
        consectetur adipisicing asd elasit.
        <br /> Iusto minus maiores autem.
      </p>
      <div className="advantages">
        <h1 data-aos="fade-right" data-aos-delay="200">
          <img src={correctIcon} alt="advantage icon" />
          Fully
          <span> Calmness</span>
        </h1>
        <h1 data-aos="fade-right" data-aos-delay="300">
          <img src={correctIcon} alt="advantage icon" />
          Unlimeted
          <span> Wifi</span>
        </h1>
        <h1 data-aos="fade-right" data-aos-delay="400">
          <img src={correctIcon} alt="advantage icon" />
          Working
          <span> Offices</span>
        </h1>
      </div>
    </div>
  );
};

export default Advantages;
