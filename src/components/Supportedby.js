import React from "react";
import browsers from "../img/motionarteffect-img8.png";
const Suppertedby = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center text-center ">
        <div className="col-12 p-5 rounded-5 my-3 img-back d-flex flex-column align-items-center">
          <h4 className="text-white">Supported by All Popular Browsers</h4>
          <p className="desc-text text-center">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
          <img src={browsers} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
export default Suppertedby;
