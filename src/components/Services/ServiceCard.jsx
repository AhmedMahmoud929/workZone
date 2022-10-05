import React from "react";
// Imgs
import workspaceImg from "../../assets/imgs/workspace.png";
import coursesImg from "../../assets/imgs/courses.png";
import eventsImg from "../../assets/imgs/events.png";

const imgs = {
  workspace: workspaceImg,
  courses: coursesImg,
  events: eventsImg,
};

const ServiceCard = ({ title, image, section, delay }) => {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} className="service-card">
      <div className="title">
        {title.split(" ")[0]}
        <br />
        {title.split(" ")[1]}
      </div>

      <a href={"#" + section}>
        Learn more <span>+</span>
      </a>

      <img src={imgs[image]} alt="workspace" />
    </div>
  );
};

export default ServiceCard;
