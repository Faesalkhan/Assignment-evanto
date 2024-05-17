import React from "react";
import section from "../img/motionarteffect-img11.png";
import page from "../img/motionarteffect-img10.png";
const Applyon = () => {
  return (
    <div className="container my-5">
      <div className="row text-white">
        <div className="col">
          <h2 className="applyon-text text-center">
            Apply On Any Section Or Enable For Whole Page
          </h2>
        </div>
      </div>
      <div className="row justify-content-evenly ">
        <div className="col-sm-12 col-md-5 mb-5 rounded-4 img-back">
          <h4 className="text-white">Apply on Section</h4>
          <p className="desc-text">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </p>
          <img src={section} className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-5 mt-5 img-back rounded-4">
          <h4 className="text-white">Apply on Page</h4>
          <p className="desc-text">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img src={page} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
export default Applyon;
