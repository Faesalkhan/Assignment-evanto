import React from "react";
import MotionArtlogo from "../img/MotionArtEffect-logo.png";
const Attract = () => {
  return (
    <div>
      <div className="row py-3 ">
        <div className="col d-flex justify-content-between ">
          <img src={MotionArtlogo} alt="image-logo" />
          <button className="rounded-3 purchase-btn px-4 py-3">
            Purchase Now
          </button>
        </div>
      </div>
      <div className="row justify-content-evenly  py-5">
        <div className="col-10 col-sm-10 col-md-2 ">
          <p className="gradient-text fs-4">
            Transform <span className="text-nowrap">Your Website</span>
          </p>
          <p className="text-white fs-4">With Motion Art Effect</p>
        </div>
        <div className="col-10 col-sm-10 col-md-7">
          <h2 className="text-white body-text">
            Attract Your Visitors Attention With Colorful{" "}
            <span className="gradient-text">Motion Art Effect</span>
          </h2>
          <p className="desc-text">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Attract;
