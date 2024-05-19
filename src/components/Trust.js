import React from "react";
import app1 from "../img/motionarteffect-img1.png";
import app2 from "../img/motionarteffect-img2.png";
import app3 from "../img/motionarteffect-img3.png";
import ratings from "../img/motionarteffect-img4.png";

const Trust = () => {
  return (
    <div className="container-fluid py-4">
      <h4 className="text-white text-center mb-5">
        Trusted by thousands of users around the world
      </h4>
      <div className="row trust-row">
        <div className="col-sm-5 col-md-3 col-lg-3 d-flex align-items-center applogocolumn ">
          <img src={app2} className="applogos" />
          <div className="ratingdiv">
            <img src={ratings} className="ratinglogo" />
            <p className="text-white">4.5 Score, 9 Reviews</p>
          </div>
        </div>
        <div className="col-sm-5 col-md-3 col-lg-3 d-flex align-items-center applogocolumn">
          <img src={app1} className="applogos" />
          <div className="ratingdiv">
            <img src={ratings} className="ratinglogo" />
            <p className="text-white">4.5 Score, 9 Reviews</p>
          </div>
        </div>
        <div className="col-sm-5 col-md-3 col-lg-3 d-flex align-items-center applogocolumn">
          <img src={app3} className="applogos" />
          <div className="ratingdiv">
            <img src={ratings} className="ratinglogo" />
            <p className="text-white">4.5 Score, 9 Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trust;
