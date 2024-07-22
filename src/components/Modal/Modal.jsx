import React, { useState, useEffect } from "react";
import "./modal.scss";
import { Navigate, Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({ show, handleClose, onProjectClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    hours = String(hours).padStart(2, "0");

    return `${hours}:${minutes} ${amPm}`;
  };

  return (
    <div className={`fullscreen-modal ${show ? "show" : ""}`}>
      <div className="fullscreen-modal-content">
        <div className="buttonclose">
          <button className="close-button" onClick={handleClose}>
            <FaWindowClose className="close-icon" />
          </button>
        </div>
        <div className="empty"></div>
        <div className="middiv">
          <div className="namediv">
            <h1 className="myname">mohammed uzair</h1>
            <p className="myrole">Software Developer</p>
          </div>
          <div className="linksdiv">
            <div onClick={onProjectClick} className="modal-link">
              <h1 className="button_test">WORK</h1>
            </div>
            <Link to="/about" onClick={handleClose} className="modal-link">
              <h1 className="button_test">ABOUT</h1>
            </Link>
            <Link to="/contact" onClick={handleClose} className="modal-link">
              <h1 className="button_test">CONTACT</h1>
            </Link>
          </div>
        </div>
        <div className="lowerdiv">
          <div className="timediv">
            <p>LOCAL TIME</p>
            <h1>{formatTime(currentTime)}</h1>
          </div>
          <div className="emailandlinks">
            <div className="emaildiv">
            <a href="mailto:iammd.uzair@gmail.com" className="email-link">
                <h1>iammd.uzair@gmail.com</h1>
              </a>            </div>
            <div className="socialdiv">
              <div className="linkedin">
                <a
                  className="linkedina"
                  href="https://www.linkedin.com/in/mohammed-uzair-f"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="twitter">
                <a
                  className="twittera"
                  href="https://x.com/iUzair_md"
                  target="_blank"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
