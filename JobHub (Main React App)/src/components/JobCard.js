import { useState } from "react";
import "./JobCard.css";
import { Link } from "react-router-dom";

const JobCard = () => {
  const [jobTitleKeywordValue, setJobTitleKeywordValue] = useState("");
  const [yourLocationTextValue, setYourLocationTextValue] = useState("");
  return (
    <section className="job-card1">
      <div className="company-logo">
        <div className="navbar3">
          <header className="rectangle-header" />
          <Link className="job-link1" to="/">
            <h1 className="jobhub7">JobHub</h1>
          </Link>
          <div className="salary-info">
            <div className="features-wrapper">
              <div className="features">Features</div>
            </div>
            <div className="pricing-wrapper">
              <div className="pricing2">Pricing</div>
            </div>
            <div className="faq-wrapper">
              <div className="faq">FAQ</div>
            </div>
            <div className="about-wrapper">
              <div className="about2">About</div>
            </div>
            <button className="login-wrapper">
              <Link to="/welcome">
                <div className="login">Login</div>
              </Link>
            </button>
          </div>
        </div>
        <div className="c-v-resume">
          <div className="position-search">
            <div className="footer3">
              <div className="contact-info">
                <div className="quick-links1">
                  <h1 className="get-your-dream-container">
                    <span className="get-your-dream-container1">
                      <p className="get-your-dream">Get Your Dream</p>
                      <p className="get-your-dream">
                        <span>{`Job Through `}</span>
                        <span className="jobhub8">JobHub</span>
                      </p>
                    </span>
                  </h1>
                  <div className="the-internet-is-container">
                    <span>
                      <p className="get-your-dream">{`The internet is a job seeker's most crucial tool to success today. From `}</p>
                      <p className="get-your-dream">
                        connecting with potential employers online to
                        researching job hunting best
                      </p>
                      <p className="get-your-dream">
                        practices, it's a goldmine of opportunity.
                      </p>
                    </span>
                  </div>
                </div>
                <form className="search3">
                  <div className="input-field2">
                    <img
                      className="fimap-pin-icon"
                      alt=""
                      src="/fisearch.svg"
                    />
                    <input
                      className="job-title-keyword"
                      placeholder="Job title, Keyword..."
                      type="text"
                      value={jobTitleKeywordValue}
                      onChange={(event) =>
                        setJobTitleKeywordValue(event.target.value)
                      }
                    />
                  </div>
                  <div className="search-child" />
                  <div className="input-field3">
                    <img
                      className="fimap-pin-icon"
                      alt=""
                      src="/fimappin.svg"
                    />
                    <input
                      className="your-location"
                      placeholder="Your Location"
                      type="text"
                      value={yourLocationTextValue}
                      onChange={(event) =>
                        setYourLocationTextValue(event.target.value)
                      }
                    />
                  </div>
                  <button className="button6">
                    <div className="find-job">Find Job</div>
                  </button>
                </form>
              </div>
            </div>
            <img
              className="pngtreeonline-recruitment-con"
              loading="eager"
              alt=""
              src="/pngtreeonline-recruitment-concept-with-a-7537121-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCard;
