import React from "react";
import "./combined.scss";
import Hola from "../Hola/Hola";
import Sayhi from "../Sayhi/Sayhi";

const Combined = () => {
  return (
    <div className="combined">
      <div className="overlap-work">
        <Hola />
        <Sayhi />
      </div>
    </div>
  );
};

export default Combined;
