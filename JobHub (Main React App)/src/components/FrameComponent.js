import "./FrameComponent.css";

const FrameComponent = ({companyName}) => {
  return (
    <div className="type2">
      <div className="map-pin-instance">
        <div className="intro">
          <div className="applicants-number" />
          <h1 className="hello-amazon">Hello, {companyName}</h1>
          <div className="here-is-your1">
            Here is your daily activities and job alerts
          </div>
        </div>
        <div className="dashboard1">
          <div className="box3">
            <div className="box3-child" />
            <div className="open-jobs">
              <p className="p2">15</p>
              <p className="open-jobs1">Open Jobs</p>
            </div>
            <button className="alerts-box">
              <div className="alerts-box-child" />
              <img
                className="briefcase-1-icon4"
                alt=""
                src="/briefcase-1-2.svg"
              />
            </button>
          </div>
          <div className="box2">
            <div className="box2-child" />
            <div className="saved-candidates3">
              <p className="p2">196</p>
              <p className="open-jobs1">Saved Candidates</p>
            </div>
            <div className="rectangle-parent">
              <div className="alerts-box-child" />
              <img
                className="bookmarksimple-icon3"
                alt=""
                src="/bookmarksimple-1.svg"
              />
            </div>
          </div>
          <div className="box1">
            <div className="box1-child" />
            <div className="alerts">
              <p className="p2">574</p>
              <p className="open-jobs1">Alerts</p>
            </div>
            <button className="alerts-box">
              <div className="alerts-box-child" />
              <img
                className="bookmarksimple-icon3"
                alt=""
                src="/bellringing-2.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="logo-rectangle">
        <div className="edit-profile">
          <div className="edit-profile-child" />
          <div className="your-profile-text">
            <img className="logo-1-icon1" alt="" src="/logo-1-1@2x.png" />
            <div className="your-profile-editing-container">
              <p className="your-profile-editing">
                Your profile editing is not completed.
              </p>
              <p className="complete-your-profile">
                Complete your profile and build your custom resume.
              </p>
            </div>
          </div>
          <button className="edit-button2">
            <div className="edit-button-item" />
            <div className="edit-profile1">{`Edit Profile `}</div>
          </button>
        </div>
      </div>
      <div className="applicants-text">
        <div className="expired-text">
          <h3 className="recently-posted-jobs1">Recently Posted Jobs</h3>
          <div className="jobs-text">
            <h3 className="view-all1">{`View All `}</h3>
            <img
              className="fiarrow-right-icon16"
              loading="eager"
              alt=""
              src="/fiarrowright.svg"
            />
          </div>
        </div>
        <div className="log-out-rectangle">
          <div className="log-out-rectangle-child" />
          <div className="jobs1">Jobs</div>
          <div className="expire-text">
            <div className="action-frame">
              <div className="applicants1">Applicants</div>
            </div>
            <div className="status1">Status</div>
            <div className="action">Action</div>
          </div>
        </div>
      </div>
      <div className="job1">
        <div className="job1-child" />
        <div className="microsoft-1-parent">
          <img
            className="microsoft-1-icon2"
            loading="eager"
            alt=""
            src="/microsoft-1@2x.png"
          />
          <div className="location-dot-parent">
            <div className="location-dot1">
              <h3 className="front-end-developer2">Front End Developer</h3>
              <div className="type3">
                <div className="full-time3">Full-Time</div>
              </div>
            </div>
            <div className="job-details-frame">
              <div className="mappin-container">
                <img
                  className="mappin-icon2"
                  loading="eager"
                  alt=""
                  src="/mappin.svg"
                />
                <div className="dhaka-bangladesh3">Dhaka, Bangladesh</div>
              </div>
              <div className="days-remaining">12 Days Remaining</div>
            </div>
          </div>
        </div>
        <div className="job1-item" />
        <div className="view-all-button">
          <div className="applicants2">36 Applicants</div>
        </div>
        <div className="applicants-text1">
          <div className="expired-job-frame">
            <div className="active6">Active</div>
            <button className="view-button2">
              <div className="view-applications1">View Applications</div>
            </button>
          </div>
        </div>
      </div>
      <div className="job2">
        <div className="job1-child" />
        <div className="microsoft-1-group">
          <img className="microsoft-1-icon2" alt="" src="/microsoft-1@2x.png" />
          <div className="location-dot-group">
            <div className="location-dot1">
              <h3 className="front-end-developer2">Front End Developer</h3>
              <div className="type3">
                <div className="full-time3">Full-Time</div>
              </div>
            </div>
            <div className="job-details-frame">
              <div className="mappin-container">
                <img className="mappin-icon2" alt="" src="/mappin.svg" />
                <div className="dhaka-bangladesh3">Dhaka, Bangladesh</div>
              </div>
              <div className="days-remaining1">4 Days Remaining</div>
            </div>
          </div>
        </div>
        <div className="job1-item" />
        <div className="applicants-wrapper">
          <div className="applicants2">42 Applicants</div>
        </div>
        <div className="frame-parent2">
          <div className="active-wrapper">
            <div className="active7">Active</div>
          </div>
          <button className="view-button2">
            <div className="view-applications1">View Applications</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
