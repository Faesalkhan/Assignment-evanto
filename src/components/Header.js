import React from "react";
import logo from "../img/motionarteffect-img2.png";

const Header = () => {
  return (
    <div className="navbar ">
      <div className="d-flex align-items-center ">
        <img src={logo} className="logo" />
        <h5 className="greentext">
          <span className="fw-bold text-white ">evanto</span> market
        </h5>
      </div>
      <button className="me-3 px-3 headerBtn rounded-3 ">Buy Now</button>
    </div>
  );
};
export default Header;
