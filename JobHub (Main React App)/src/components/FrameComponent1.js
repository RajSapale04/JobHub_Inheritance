import { useState } from "react";
import "./FrameComponent1.css";
import { useNavigate } from "react-router-dom";

const FrameComponent1 = () => {
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/post-job")
  }

  const [navLinkValue, setNavLinkValue] = useState("");
  const [navLink1Value, setNavLink1Value] = useState("");
  const [navLink2Value, setNavLink2Value] = useState("");
  const [navLink3Value, setNavLink3Value] = useState("");
  return (
    <section className="container-frame">
      <header className="navigation">
        <div className="navigation-bar">
          <div className="link-frame">
            <div className="nav-link">
              <div className="home1">Home</div>
            </div>


            <div className="nav-link3">
              <div className="home2">Dashboard</div>
            </div>


          </div>
          <div className="logo-and-nav">
            <div className="profile-pic">
              <img
                className="phonecall-icon"
                loading="eager"
                alt=""
                src="/phonecall.svg"
              />
              <div className="submit-btn">+91-89764-37846</div>
            </div>
            <div className="nav-link6">
              <img
                className="image-1-icon"
                loading="eager"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="recent-jobs-list">
                <div className="english">English</div>
                <img
                  className="fichevron-down-icon"
                  alt=""
                  src="/fichevrondown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="navigation1">
          <div className="log-out-btn">
            <div className="profile-pic">
              <img
                className="briefcase-1-icon3"
                loading="eager"
                alt=""
                src="/briefcase-1.svg"
              />
              <h2 className="jobpilot1">JobHub</h2>
            </div>
            <div className="search">
              <div className="frame-container">
                <div className="image-1-parent">
                  <img
                    className="image-1-icon"
                    alt=""
                    src="/image-1-1@2x.png"
                  />
                  <div className="india">India</div>
                  <img className="caretdown-icon" alt="" src="/caretdown.svg" />
                </div>
                <div className="line-div" />
                <div className="fisearch-parent">
                  <img className="fisearch-icon" alt="" src="/fisearch.svg" />
                  <div className="job-tittle-keyword">
                    Job title, keyword, company
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-and-nav">
            <img
              className="phonecall-icon"
              loading="eager"
              alt=""
              src="/bellringing.svg"
            />
            <img className="navigation-icon" alt="" src="/navigation@2x.png" />
          </div>
        </div>
      </header>
      <img
        className="logo-1-icon"
        loading="eager"
        alt=""
        src="/logo-1@2x.png"
      />
      <button className="edit-button1" onClick={handleClick}>
        <div className="edit-button-child" />
        <div className="post-a-job3">Post A Job</div>
      </button>
    </section>
  );
};

export default FrameComponent1;
