import React from "react";
// Icons
import {
  FaHeadphonesAlt,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Links = () => {
  return (
    <div className="left">
      <div className="row">
        <a
          data-aos="zoom-in"
          data-aos-delay="50"
          href="tel:+201553920327"
          target="blank"
          className="fx-center"
        >
          <FaHeadphonesAlt />
        </a>
        <a
          data-aos="zoom-in"
          data-aos-delay="100"
          href="mailto: alrba2003@gmail.com"
          className="fx-center"
        >
          {" "}
          <MdAlternateEmail />
        </a>
      </div>
      <div className="row">
        <a
          data-aos="zoom-in"
          data-aos-delay="200"
          href="https://www.facebook.com/WorkZoneOfficial"
          target="blank"
          className="fx-center"
        >
          <FaFacebookF />
        </a>
        <a
          data-aos="zoom-in"
          data-aos-delay="300"
          href=" https://wa.me/201553920327"
          target="_blank"
          className="fx-center"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="row">
        <a
          data-aos="zoom-in"
          data-aos-delay="400"
          href="https://www.facebook.com/WorkZoneOfficial"
          target="blank"
          className="fx-center"
        >
          <FaInstagram />
        </a>
        <a
          data-aos="zoom-in"
          data-aos-delay="500"
          href="https://www.facebook.com/WorkZoneOfficial"
          target="blank"
          className="fx-center"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Links;
