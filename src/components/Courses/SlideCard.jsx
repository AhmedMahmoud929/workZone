import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { useState } from "react";

const SlideCard = ({ title, price, details, img }) => {
  const [infoPage, setInfoPage] = useState(false);

  return (
    <div className="slide-card">
      <div className={`details-screen ${infoPage ? "active" : ""}`}>
        <div className="title sm back">{title}</div>
        <button className="back" onClick={() => setInfoPage(false)}>
          <IoIosArrowBack />
          Less Details
        </button>
        <ul>
          {details.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
      <div className={`main-screen ${infoPage ? "active" : ""}`}>
        <div className="thumb">{img && <img src={img} alt="course" />}</div>
        <div className="info-course">
          <div className="title">{title}</div>
          <button onClick={() => setInfoPage(true)}>
            More Details
            <IoIosArrowForward />
          </button>
        </div>
        <div>
          <div className="price">
            <span>{price}</span>
            <span>ج.م</span>
          </div>
          <div className="icon fx-center">
            <a href=" https://wa.me/201553920327" target="_blank">
              <FaHeadphonesAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
