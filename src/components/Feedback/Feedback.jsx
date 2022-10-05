import React, { useState, useRef } from "react";
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SlideCardFeedBack from "./SlideCardFeedBack";
// Data => courses json
import feedbacksData from "../../assets/jsons/feedbacks.json";
import AnimatedTitle from "../Animations/AnimatedTitle";

const Feedback = () => {
  return (
    <section id="feedbacks">
      <div className="container">
        <AnimatedTitle name="Feedbacks" />
        <p className="info" data-aos="fade-right" data-aos-delay="100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nostrum.
        </p>

        {/* Slide goas here */}
      </div>
      <div className="swiper-container">
        <Swiper
          data-aos="fade-up"
          data-aos-delay="100"
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            550: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {feedbacksData &&
            feedbacksData.map((ele, index) => (
              <SwiperSlide key={ele.id}>
                <SlideCardFeedBack
                  name={ele.name}
                  job={ele.job}
                  feedback={ele.feedback}
                  img={ele.img}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
