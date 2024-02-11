import { useState } from "react";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate= useNavigate();
  const handleClick=()=>{
    navigate("/job-list")
  }

  return (
    <section className="navigation2">
      <header className="navigation3">
        <div className="search-bar">
          <div className="menu-button">
            <div className="nav-link7">
              <div className="home3">Home</div>
            </div>


            <div className="nav-link10">
              <div className="home4">Dashboard</div>
            </div>
          </div>
          <div className="right-sidebar">
            <div className="spacer">
              <img
                className="phonecall-icon1"
                loading="eager"
                alt=""
                src="/phonecall.svg"
              />
              <div className="card">+91-89764-37846</div>
            </div>
            <div className="nav-link13">
              <img
                className="image-1-icon2"
                loading="eager"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="text20">
                <div className="english1">English</div>
                <img
                  className="fichevron-down-icon1"
                  alt=""
                  src="/fichevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="navigation4">
          <div className="error-message">
            <div className="logo2">
              <img
                className="briefcase-1-icon5"
                loading="eager"
                alt=""
                src="/briefcase-1.svg"
              />
              <h2 className="jobpilot2">JobHub</h2>
            </div>
            <div className="search1">
              <div className="header-frame">
                <div className="logo3">
                  <img
                    className="image-1-icon2"
                    alt=""
                    src="/image-1-1@2x.png"
                  />
                  <div className="india1">India</div>
                  <img
                    className="caretdown-icon1"
                    loading="eager"
                    alt=""
                    src="/caretdown.svg"
                  />
                </div>
                <div className="search-icon" />
                <div className="favorite-jobs-frame"
                onClick={handleClick}>
                  <img
                    className="fisearch-icon1"
                    loading="eager"
                    alt=""
                    src="/fisearch.svg"
                  />
                  <div className="job-tittle-keyword1">
                    Job title, keyword, company
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-sidebar">
            <img
              className="phonecall-icon1"
              loading="eager"
              alt=""
              src="/bellringing.svg"
            />
            <img
              className="button-child"
              loading="eager"
              alt=""
              src="/navigation@2x.png"
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navigation;
