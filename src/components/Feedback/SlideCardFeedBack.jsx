import React from "react";

function SlideCardFeedBack({ name, job, feedback, img }) {
  return (
    <>
      <div className="profile-img fx-center">
        {img && <img src={img} alt="profile" />}
      </div>
      <div className="feedback-p" >
        {feedback}
      </div>
      <div
        className="person-details"

      >
        <div className="name">{name}</div>
        <div className="job">{job}</div>
      </div>
    </>
  );
}

export default SlideCardFeedBack;
