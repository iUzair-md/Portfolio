import React, { useState, useEffect, useRef } from "react";
import "./first.scss";

const First = () => {
  const [rotation, setRotation] = useState(45);
  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate rotation
      let newRotation =
        45 - (-containerRect.top / (containerRect.height - windowHeight)) * 45;
      newRotation = Math.max(0, newRotation);
      setRotation(newRotation);

      // Calculate position
      if (containerRect.bottom < windowHeight) {
        const newPosition = windowHeight - containerRect.bottom;
        setPosition(
          Math.min(-newPosition, containerRect.height - textRect.height)
        );
      } else {
        setPosition(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="firstdiv" ref={containerRef}>
      {/* <h1 className="myname" style={{textAlign:'center'}}>Mohammed Uzair</h1> */}
      <div className="firsttrial">
      <h1
          ref={textRef}
          style={{
            transform: `rotate(${rotation}deg) translateY(${position}px)`,
          }}
        >
          <span > Aim high.</span>
          <br />
          <span > Build fast.</span>
        </h1>
      </div>
    </div>
  );
};

export default First;
