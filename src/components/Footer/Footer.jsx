import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left">
          <h1 data-aos="fade-right">Get in touch</h1>
          <p data-aos="fade-right" data-aos-delay="100">
            Lorem ipsum dolor sit amet elit. dolore vel? Sint et <br />a
            veritatis voluptatibus explicabo tempora
          </p>
          <a
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-offset="-50"
            href="#contact"
            className="btn"
          >
            Contact
          </a>
        </div>
        <div className="right">
          <h1 data-aos="fade-left" data-aos-delay="100">
            Links
          </h1>
          <div className="links">
            <a data-aos="fade-left" data-aos-delay="200" href="#home">
              Home
            </a>
            <a data-aos="fade-left" data-aos-delay="300" href="#about">
              About
            </a>
            <a data-aos="fade-left" data-aos-delay="400" href="#events">
              Events
            </a>
            <a
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-offset="-50"
              href="#courses"
            >
              Courses
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
