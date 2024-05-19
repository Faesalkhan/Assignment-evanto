import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row py-3 align-items-center justify-content-between gradient-background footerrow">
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex footercolumn ">
          <button className="border-0 text-white bg-transparent ">
            Documentation
          </button>
          <button className="border-0 text-white bg-transparent">
            Support
          </button>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 ">
          <p className="text-white copyright-text m-0">
            © 2023 Copywrite. All rights reserved by QodeMatrix
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
