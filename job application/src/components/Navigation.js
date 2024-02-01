import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => {
  const [navLinkValue, setNavLinkValue] = useState("");
  const [navLink1Value, setNavLink1Value] = useState("");
  const [navLink2Value, setNavLink2Value] = useState("");
  const [navLink3Value, setNavLink3Value] = useState("");
  return (
    <header className="navigation">
      <div className="navigation1">
        <div className="main-content">
          <div className="nav-link">
            <div className="home">Home</div>
          </div>
          <input
            className="nav-link1"
            placeholder="Find Job"
            type="text"
            value={navLinkValue}
            onChange={(event) => setNavLinkValue(event.target.value)}
          />
          <input
            className="nav-link2"
            placeholder="Find Employers"
            type="text"
            value={navLink1Value}
            onChange={(event) => setNavLink1Value(event.target.value)}
          />
          <div className="nav-link">
            <div className="home">Dashboard</div>
          </div>
          <input
            className="nav-link4"
            placeholder="Job Alerts"
            type="text"
            value={navLink2Value}
            onChange={(event) => setNavLink2Value(event.target.value)}
          />
          <input
            className="nav-link5"
            placeholder="Customer Supports"
            type="text"
            value={navLink3Value}
            onChange={(event) => setNavLink3Value(event.target.value)}
          />
        </div>
        <div className="page-title">
          <div className="subheadline">
            <img className="phonecall-icon" alt="" src="/phonecall.svg" />
            <div className="body-copy">+91-99763-72678</div>
          </div>
          <div className="job-details">
            <img className="image-1-icon" alt="" src="/image-1@2x.png" />
            <Form.Select className="map-pin-formselect" />
          </div>
        </div>
      </div>
      <div className="navigation2">
        <div className="phone-number-section">
          <div className="logo">
            <img
              className="briefcase-1-icon"
              loading="eager"
              alt=""
              src="/briefcase-1.svg"
            />
            <h2 className="jobpilot">JobHub</h2>
          </div>
          <div className="search">
            <div className="employer-info">
              <div className="job-details">
                <img className="image-1-icon" alt="" src="/image-1-1@2x.png" />
                <div className="india">India</div>
                <img className="caretdown-icon" alt="" src="/caretdown.svg" />
              </div>
              <div className="pagination-bar" />
              <div className="footer-section">
                <img
                  className="fisearch-icon"
                  loading="eager"
                  alt=""
                  src="/fisearch.svg"
                />
                <div className="job-tittle-keyword">
                  Job title, keyword, company
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <img className="phonecall-icon" alt="" src="/bellringing.svg" />
          <img
            className="social-media-icons"
            loading="eager"
            alt=""
            src="/ellipse-18@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
