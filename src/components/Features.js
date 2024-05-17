import React from "react";
import light from "../img/motionarteffect-img9.png";
import responsive from "../img/motionarteffect-img6.png";
import userfriendly from "../img/motionarteffect-img7.png";

const Features = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center text-center ">
        <div className="col-sm-12 col-md-7 d-flex flex-column align-align-items-center ">
          <h2 className="text-white features-text">
            An All-Round Plugin With Powerful Features
          </h2>
          <p className="desc-text">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
      </div>
      <div className="row justify-content-between ">
        <div className="col-sm-10 col-md-4 my-2">
          <div className="p-3 img-back d-flex flex-column">
            <img src={light} className="featurs-img" />
            <h4 className="text-white">Light Weight</h4>
            <p className="desc-text">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
        </div>
        <div className="col-sm-10 col-md-4 my-2">
          <div className="p-3 img-back d-flex flex-column">
            <img src={responsive} className="featurs-img" />
            <h4 className="text-white">100% Responsive</h4>
            <p className="desc-text">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
        </div>
        <div className="col-sm-10 col-md-4 my-2">
          <div className="p-3 img-back d-flex flex-column">
            <img src={userfriendly} className="featurs-img" />
            <h4 className="text-white">User Friendly Interface</h4>
            <p className="desc-text">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
