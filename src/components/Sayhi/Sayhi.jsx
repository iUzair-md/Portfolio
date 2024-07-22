import React from "react";
import "./sayhi.scss";
import { useNavigate } from "react-router-dom";

const Sayhi = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/contact");
  };

  return (
    <div className="button-container">
      <button onClick={handleNavigateHome} className="custom-button">
        Say hi
      </button>
    </div>
  );
};

export default Sayhi;
