import React from "react";
// Icons
import { FaPhoneAlt } from "react-icons/fa";
// Imgs
import logoImg from "../../assets/imgs/logo.png";
import homeModelImg from "../../assets/imgs/homeModel.png";
// Write Effect
import Writer from "../Writer/Writer";

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <nav>
          <img src={logoImg} alt="WorkZone Logo" />
          <a href=" https://wa.me/201553920327" target="_blank">
            <FaPhoneAlt className="icon" />
          </a>
        </nav>
        <header>
          <div className="left">
            <h1 data-aos="fade-right">
              Looking For
              <br />
              <Writer /> ..?
            </h1>
            <p data-aos="fade-right" data-aos-delay="200">
              You in the right place
            </p>
            <a
              data-aos="fade-right"
              data-aos-delay="400"
              className="btn"
              href="#services"
            >
              Get Started
            </a>
          </div>
        </header>
      </div>
      <div data-aos="fade-up" data-aos-offset="-500" data-aos-duration="600">
        <img src={homeModelImg} alt="Student Img" className="student-img" />
        <div className="shape"></div>
      </div>
    </section>
  );
};

export default Home;
