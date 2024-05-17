import React from "react";
import Attract from "./Attract";
import Trust from "./Trust";
import Cursor from "./Cursor";
import Applyon from "./Applyon";
import Suppertedby from "./Supportedby";
import Features from "./Features";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="container-fluid">
      <Attract />
      <Trust />
      <Cursor />
      <Applyon />
      <Suppertedby />
      <Features />
      <Footer />
    </div>
  );
};
export default Body;
