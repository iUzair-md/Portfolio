import React, { useState, useEffect } from "react";
import "./about.scss";
import Combined from "../Combined/Combined";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // Scroll to the top on component mount
  }, []);
  return (
    <div className="about">
      <div className="background">
        <h1>Software Developer</h1>
        <div className="mediv"></div>
      </div>
      <div className="paragraphs">
        <p>
          "<span style={{ fontWeight: "bold" }}>Hello</span>, iam{" "}
          <span style={{ fontWeight: "bold" }}>Mohammed Uzair</span>, and I
          recently graduated in June 2024 with a Bachelor of Computer
          Applications (BCA) degree from St Joseph's College, Mysore. During my
          time in the BCA program, I gained a strong foundation in various
          programming languages, software development, and problem solving.
        </p>
        <p>
          One of my key strengths is my problem-solving ability. For example, in
          my final year project, I developed a web app that Leverages AI/LLM
          like chatGPT to outsource the technical round of the interview
          process, which required me to address several technical challenges,
          from optimizing database queries, working with openAI API's to
          ensuring a user-friendly interface. This experience taught me the
          importance of logical thinking and innovative problem-solving in
          software development.
        </p>
        <p>
          My stack is Java, Spring Boot, React, and a bit of PHP and Python. I
          am passionate about continuous learning and keeping up with the latest
          advancements in technology. I am excited to start my career in the IT
          industry and contribute to meaningful projects that solve real-world
          problems.
        </p>
      </div>
    </div>
  );
};

export default About;
