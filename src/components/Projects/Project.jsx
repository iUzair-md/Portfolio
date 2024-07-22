import React from "react";
import "./project.scss";
import { FaCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Project = () => {
  return (
    <div className="project">
      <div className="cvanalysis">
        <div className="projectupper">
          <div className="projectleft">
            <div className="protitle">
              <FaCircle className="facircle" />
              <h1>CV ANALYSIS</h1>
            </div>
            <div className="shorttitle">
              <p>TESTING INDIVIDUAL'S SKILLS</p>
            </div>
          </div>
          <div className="projectright">
            <div className="description">
              <p>
                Leveraging Large AI/LLM's like GPT to outsource the technical
                round of the interview process.
              </p>
            </div>
            <div className="github">
              <p>Github</p>
              <FaArrowRightLong className="cvicon" />
            </div>
          </div>
        </div>
        <div className="projectlower">
          <div className="bigscreen">
            <div className="laptop"></div>
            <div className="mobile"></div>
          </div>
        </div>
      </div>
      <div className="hrdiv">
        <hr className="custom-hr" />
      </div>
      <div className="periodictable">
        <div className="projectupper">
          <div className="projectleft">
            <div className="protitle">
              <FaCircle className="facircle" />
              <h1>PT GAME</h1>
            </div>
            <div className="shorttitle">
              <p>PERIODIC TABLE GAME</p>
            </div>
          </div>
          <div className="projectright">
            <div className="description">
              <p>
                A react game where you have to select the right symbol of the
                periodic table elements.
              </p>
            </div>
            <div className="github">
              <div className="githubb">
                <a href="https://github.com/iUzair-md/periodic-table" target="_blank">Github</a>
                <FaArrowRightLong className="cvicon" />
              </div>
              <div className="play">
                <a href="https://periodic-table-game.vercel.app/" target="_blank" className="play">
                  Play
                </a>
                <FaArrowRightLong className="cvicon" />
              </div>
            </div>
          </div>
        </div>
        <div className="projectlower">
          <div className="bigscreen">
            <div className="laptop"></div>
            <img
              className="pencil"
              src="images/pencil3.png"
              width={"520px"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
