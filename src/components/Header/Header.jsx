import React, { useState, useRef } from "react";
import { LuMountain } from "react-icons/lu";
import { FaGripLines } from "react-icons/fa";
import "./header.scss";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";

const Header = () => {
  const scrollToProjectRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const [scrollToProject, setScrollToProject] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleProjectLinkClick = () => {
    handleCloseModal();
    if (location.pathname === "/") {
      const projectSection = document.querySelector(".divprojects");
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollToProject", true);
      navigate("/");
    }
  };
  return (
    <div className="header">
    <div className="icon" onClick={handleNavigateHome}>
      <LuMountain className="luMountain" />
    </div>
    <div className="modalicon">
      <FaGripLines className="faGripLines" onClick={handleShowModal} />
      <Modal show={showModal} handleClose={handleCloseModal}   onProjectClick={handleProjectLinkClick}/>
    </div>
  </div>
  );
};

export default Header;
