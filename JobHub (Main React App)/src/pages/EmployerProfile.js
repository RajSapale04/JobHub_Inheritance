import { useState } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import CopyRight from "../components/CopyRight";
import "./EmployerProfile.css";

const EmployerProfile = () => {
  const [overviewTextValue, setOverviewTextValue] = useState("");
  const [myJobsTextValue, setMyJobsTextValue] = useState("");
  const [plansBillingValue, setPlansBillingValue] = useState("");
  const [settingsTextValue, setSettingsTextValue] = useState("");
  return (
    <div className="employer-profile">
      <FrameComponent1 />
      <section className="edit-profile-frame-parent">
        <div className="edit-profile-frame">
          <div className="recently-posted-jobs">
            <div className="view-all">
              <div className="status-action-frame">
                <div className="status-action-frame-child" />
                <img className="stack-icon" alt="" src="/stack.svg" />
                <input
                  className="overview"
                  placeholder="Overview"
                  type="text"
                  value={overviewTextValue}
                  onChange={(event) => setOverviewTextValue(event.target.value)}
                />
              </div>
              <div className="status-action-frame1">
                <div className="status-action-frame-item" />
                <img
                  className="briefcase-1-icon"
                  alt=""
                  src="/briefcase-1-1.svg"
                />
                <input
                  className="my-jobs"
                  placeholder="My Jobs"
                  type="text"
                  value={myJobsTextValue}
                  onChange={(event) => setMyJobsTextValue(event.target.value)}
                />
              </div>
              <div className="status-action-frame2">
                <div className="status-action-frame-item" />
                <img
                  className="stack-icon"
                  loading="eager"
                  alt=""
                  src="/bookmarksimple.svg"
                />
                <h3 className="saves-candidates">Saves Candidates</h3>
              </div>
              <div className="status-action-frame3">
                <div className="status-action-frame-item" />
                <img className="stack-icon" alt="" src="/bellringing-1.svg" />
                <input
                  className="plans-billing"
                  placeholder={`Plans & Billing`}
                  type="text"
                  value={plansBillingValue}
                  onChange={(event) => setPlansBillingValue(event.target.value)}
                />
              </div>
              <div className="status-action-frame4">
                <div className="status-action-frame-child1" />
                <div className="status-action-frame-child2" />
                <img
                  className="setting-fill-icon"
                  alt=""
                  src="/setting-fill@2x.png"
                />
                <input
                  className="settings"
                  placeholder="Settings"
                  type="text"
                  value={settingsTextValue}
                  onChange={(event) => setSettingsTextValue(event.target.value)}
                />
              </div>
            </div>
          </div>
          <FrameComponent />
        </div>
        <div className="logout-button">
          <div className="div">
            <div className="child" />
            <div className="profile-pic-rectangle" />
            <h3 className="log-out">Log Out</h3>
          </div>
          <div className="job3-wrapper">
            <div className="job3">
              <div className="microsoft-logo" />
              <div className="job-card">
                <img
                  className="microsoft-1-icon"
                  alt=""
                  src="/microsoft-1@2x.png"
                />
                <div className="front-end-developer-label">
                  <div className="location-dot">
                    <h3 className="front-end-developer">Front End Developer</h3>
                    <div className="type">
                      <div className="full-time">Full-Time</div>
                    </div>
                  </div>
                  <div className="dhaka-text">
                    <div className="mappin-parent">
                      <img className="mappin-icon" alt="" src="/mappin.svg" />
                      <div className="dhaka-bangladesh">Dhaka, Bangladesh</div>
                    </div>
                    <div className="expired">Expired</div>
                  </div>
                </div>
              </div>
              <div className="job3-child" />
              <div className="applicant-list">
                <div className="applicants">12 Applicants</div>
              </div>
              <div className="job3-inner">
                <div className="expire-parent">
                  <div className="expire">Expire</div>
                  <button className="view-button">
                    <div className="view-applications">View Applications</div>
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

export default EmployerProfile;
