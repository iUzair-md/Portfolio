import React from "react";
import "./footer.scss";
import { Navigate, Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftfooter">
        <div className="footername">
          <h1>Mohammed Uzair</h1>
        </div>
        <div className="footerrole">
          <p>Software Developer</p>
        </div>
      </div>
      <div className="midfooter">
        <Link to="/about" className="footer-link">
          <h1 className="button_test">ABOUT</h1>
        </Link>
        <a className="footer-link-resume" href="">RESUME</a>
        <Link to="/contact" className="footer-link">
          <h1 className="button_test">CONTACT</h1>
        </Link>
      </div>
      <div className="rightfooter">
        <div className="footeremail">
          <a href="mailto:iammd.uzair@gmail.com">iammd.uzair@gmail.com</a>
        </div>
        <div className="footerlinks">
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
  );
};

export default Footer;
