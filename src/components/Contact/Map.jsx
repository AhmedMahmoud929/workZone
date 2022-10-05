/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Map = () => {
  return (
    <div className="right" data-aos="flip-left" data-aos-delay="100" data-aos-duration="700">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.5635826394923!2d30.5100546!3d30.363350599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458bfaf78479e15%3A0xca1719d1e29d0622!2sWork%20Zone!5e0!3m2!1sar!2seg!4v1663164993721!5m2!1sar!2seg"
        width="600"
        height="420"
        style={{ border: 0,borderRadius:"20px"}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
