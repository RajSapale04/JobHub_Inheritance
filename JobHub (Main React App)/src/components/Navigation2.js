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
        <div className="navbar-links">
          <div className="nav-link21">
            <div className="home11">Home</div>
          </div>
          <div className="nav-link22">
            <input
              className="home12"
              placeholder="Find Job"
              type="text"
              value={homeText1Value}
              onChange={(event) => setHomeText1Value(event.target.value)}
            />
          </div>
          <input
            className="nav-link23"
            placeholder="Find Employers"
            type="text"
            value={navLinkValue}
            onChange={(event) => setNavLinkValue(event.target.value)}
          />
          <div className="nav-link21">
            <div className="home13">Dashboard</div>
          </div>
          <input
            className="nav-link25"
            placeholder="Job Alerts"
            type="text"
            value={navLink1Value}
            onChange={(event) => setNavLink1Value(event.target.value)}
          />
          <input
            className="nav-link26"
            placeholder="Customer Supports"
            type="text"
            value={navLink2Value}
            onChange={(event) => setNavLink2Value(event.target.value)}
          />
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
