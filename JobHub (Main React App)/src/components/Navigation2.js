import { useState } from "react";
import Navigation3 from "./Navigation3";
import "./Navigation2.css";

const Navigation2 = () => {
  const [homeText1Value, setHomeText1Value] = useState("");
  const [navLinkValue, setNavLinkValue] = useState("");
  const [navLink1Value, setNavLink1Value] = useState("");
  const [navLink2Value, setNavLink2Value] = useState("");
  return (
    <header className="navigation7">
      <div className="search-box">
      <div className="menu-button">
            <div className="nav-link7">
              <div className="home3">Home</div>
            </div>
            <div className="nav-link10">
              <div className="home3">Find Jobs</div>
            </div>
            <div className="nav-link7">
              <div className="home3">Find Employers</div>
            </div>
            <div className="nav-link7">
              <div className="home4">Dashboard</div>
            </div>
            <div className="nav-link7">
              <div className="home3">Job Alerts</div>
            </div>
            <div className="nav-link7">
              <div className="home3">Customer Support</div>
            </div>
        
        </div>
        <div className="employers-logo1">
          <div className="info-block">
            <img className="phonecall-icon3" alt="" src="/phonecall.svg" />
            <div className="bookmark-simple">+91-89764-37846</div>
          </div>
          <div className="nav-link27">
            <img className="image-1-icon6" alt="" src="/image-1@2x.png" />
            <div className="english-parent">
              <div className="english3">English</div>
              <img
                className="fichevron-down-icon3"
                alt=""
                src="/fichevrondown.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Navigation3
        briefcase1="/briefcase-1.svg"
        image1="/image-1-1@2x.png"
        caretDown="/caretdown.svg"
        fisearch="/fisearch.svg"
        bellRinging="/bellringing.svg"
        ellipse18="/navigation@2x.png"
      />
    </header>
  );
};

export default Navigation2;
