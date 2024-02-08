import { useState } from "react";
import Navigation from "../components/Navigation";
import StatusActionFrame from "../components/StatusActionFrame";
import CopyRight from "../components/CopyRight";
import { Link } from 'react-router-dom';

import "./UserProfile.css";

const UserProfile = () => {
  const [overviewTextValue, setOverviewTextValue] = useState("");
  const [appliedJobsTextValue, setAppliedJobsTextValue] = useState("");
  const [jobAlertsTextValue, setJobAlertsTextValue] = useState("");
  const [settingsTextValue, setSettingsTextValue] = useState("");
  return (
    <div className="user-profile">
      <Navigation />
      <section className="frame-parent">
        <div className="yourprofileeditingisnotcomplet-parent">
          <div className="yourprofileeditingisnotcomplet">
            <div className="edit-button">
              <div className="recently-applied-frame">
                <div className="recently-applied-frame-child" />
                <img className="stack-icon1" alt="" src="/stack.svg" />
                <input
                  className="overview1"
                  placeholder="Overview"
                  type="text"
                  value={overviewTextValue}
                  onChange={(event) => setOverviewTextValue(event.target.value)}
                />
              </div>
              <div className="recently-applied-frame1">
                <div className="recently-applied-frame-item" />
                <img
                  className="briefcase-1-icon1"
                  alt=""
                  src="/briefcase-1-1.svg"
                />
                <input
                  className="applied-jobs"
                  placeholder="Applied Jobs"
                  type="text"
                  value={appliedJobsTextValue}
                  onChange={(event) =>
                    setAppliedJobsTextValue(event.target.value)
                  }
                />
              </div>
              <div className="recently-applied-frame2">
                <div className="recently-applied-frame-item" />
                <img
                  className="stack-icon1"
                  loading="eager"
                  alt=""
                  src="/bookmarksimple.svg"
                />
                <h3 className="favorite-jobs">Favorite Jobs</h3>
              </div>
              <div className="recently-applied-frame3">
                <div className="recently-applied-frame-item" />
                <img className="stack-icon1" alt="" src="/bellringing-1.svg" />
                <input
                  className="job-alerts"
                  placeholder="Job Alerts"
                  type="text"
                  value={jobAlertsTextValue}
                  onChange={(event) =>
                    setJobAlertsTextValue(event.target.value)
                  }
                />
              </div>
              <div className="recently-applied-frame3">
                <div className="recently-applied-frame-item" />
                <img
                  className="setting-fill-icon1"
                  alt=""
                  src="/setting-fill@2x.png"
                />
                <input
                  className="settings1"
                  placeholder="Settings"
                  type="text"
                  value={settingsTextValue}
                  onChange={(event) => setSettingsTextValue(event.target.value)}
                />
              </div>
            </div>
          </div>
          <StatusActionFrame />
        </div>
        <div className="main-navigation">
          <div className="top-bar">
            <div className="top-bar-child" />
            <div className="logo-container" />
            <h3 className="log-out1">Log Out</h3>
          </div>
          <div className="log-out-button">
            <div className="job31">
              <div className="frame-child" />
              <div className="job3-item" />
              <div className="rectangle-shape">
                <div className="salary-text">
                  <img
                    className="microsoft-1-icon1"
                    alt=""
                    src="/microsoft-1@2x.png"
                  />
                  <div className="job-card-frame">
                    <div className="front-end-developer-parent">
                      <h3 className="front-end-developer1">
                        Front End Developer
                      </h3>
                      <div className="type1">
                        <div className="full-time1">Full-Time</div>
                      </div>
                    </div>
                    <div className="frame-group">
                      <div className="mappin-group">
                        <img
                          className="mappin-icon1"
                          alt=""
                          src="/mappin.svg"
                        />
                        <div className="dhaka-bangladesh1">
                          Dhaka, Bangladesh
                        </div>
                      </div>
                      <div className="salary-20000-">
                        Salary: $20,000 - $25,000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="employer">
                  <div className="feb-2-2023">Feb 2, 2023 20:45</div>
                </div>
              </div>
              <div className="active-status">
                <div className="active-parent">
                  <div className="active">Active</div>
                  <button className="view-button1">
                    <div className="view-details">View Details</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CopyRight
        twitter="/vector.svg"
        youtube1="/youtube-1.svg"
        instagram1="/instagram-1.svg"
        twitter1="/twitter-1.svg"
      />
    </div>
  );
};

export default UserProfile;
