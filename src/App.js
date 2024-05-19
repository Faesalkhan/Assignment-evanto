import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import MousePointer from "./components/MousePointer";

const App = () => {
  return (
    <div>
      <MousePointer />
      <Header />
      <Body />
    </div>
  );
};
export default App;
