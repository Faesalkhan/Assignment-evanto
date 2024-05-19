import React from "react";
import cursor from "../img/motionarteffect-img5.png";

const Cursor = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-between">
        <div className="col-12 col-sm-12 col-md-7">
          <div className="d-flex flex-column ">
            <h2 className="text-white cursor-text">
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h2>
            <p className="desc-text">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse your website with visually stunning
              motion art elements.
            </p>
            <button className="text-white rounded-4 gradient-background purchase-from-evanto-btn">
              Purchase From Evanto
            </button>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 img-carrier-col">
          <img src={cursor} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
export default Cursor;
