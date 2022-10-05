import React, { useState, useRef } from "react";
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import SlideCard from "./SlideCard";
// Data => courses json
import coursesData from "../../assets/jsons/courses.json";
import AnimatedTitle from "../Animations/AnimatedTitle";

const Courses = () => {
  return (
    <section id="courses">
      <div className="container">
        <AnimatedTitle name="Courses" />
        <div className="info">
          <p data-aos="fade-right" data-aos-delay="100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            nostrum.
          </p>
          <a
            data-aos="fade-left"
            data-aos-delay="100"
            href=" https://wa.me/201553920327"
            target="_blank"
            className="learn-more"
          >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Book Now</span>
          </a>
        </div>

        <Swiper
          data-aos="fade-up"
          data-aos-delay="200"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {/* Mapping on the array (json file) */}
          {coursesData &&
            coursesData.map((course) => (
              <SwiperSlide key={course.id}>
                <SlideCard
                  title={course.title}
                  price={course.price}
                  details={course.details}
                  img = {course.img}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Courses;
