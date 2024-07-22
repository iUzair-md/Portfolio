import { useState, useRef, useEffect } from "react";
import "./home.scss";
import Combined from "../Combined/Combined";
import Project from "../Projects/Project";
import Spin from "../Spin/Spin";

const Home = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    const scrollToProject = sessionStorage.getItem("scrollToProject");
    if (scrollToProject) {
      sessionStorage.removeItem("scrollToProject");
      if (projectRef.current) {
        projectRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div>
      <Spin />
      <div className="divprojects" ref={projectRef}>
        <Project />
      </div>{" "}
      <Combined />
    </div>
  );
};

export default Home;
