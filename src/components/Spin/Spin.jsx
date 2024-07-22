import React from "react";
import "./spin.scss";
import First from "../Spinners/First";
import Second from "../Spinners/Second";
import Third from "../Spinners/Third";
import Fourth from "../Spinners/Fourth";



const Spin = () => {
  return (
    <div className="spin">
      <div className="overlap-container">
        <First/>
        <Second/>
        <Third/>
        <Fourth/>
      </div>
    </div>
  );
};

export default Spin;
