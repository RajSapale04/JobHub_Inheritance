import Job from "./Job";
import "./StatusActionFrame.css";

const StatusActionFrame = ({firstName,lastName,jobs,currentCity}
) => {
  return (
    <div className="status-action-frame5">
      <div className="search-button">
        <div className="intro1">
          <div className="search-bar1" />
          <h1 className="hello-abdulqadir-amin">Hello, {firstName} {lastName}</h1>
          <div className="here-is-your2">
            Here is your daily activities and job alerts
          </div>
        </div>
        <div className="dashboard2">
          <div className="box31">
            <div className="box3-item" />
            <div className="applied-jobs1">
              <p className="p5">{jobs.length}</p>
              <p className="applied-jobs2">Applied Jobs</p>
            </div>
            <button className="frame-button">
              <div className="favorite-jobs-child" />
              <img
                className="briefcase-1-icon6"
                alt=""
                src="/briefcase-1-2.svg"
              />
            </button>
          </div>
          {/* <div className="box21">
            <div className="box2-item" />
            <div className="favorite-jobs2">
              <p className="p5">234</p>
              <p className="applied-jobs2">Favorite Jobs</p>
            </div>
            <div className="rectangle-container">
              <div className="favorite-jobs-child" />
              <img
                className="bookmarksimple-icon4"
                alt=""
                src="/bookmarksimple-1.svg"
              />
            </div>
          </div> */}
          <div className="box11">
            <div className="box1-item" />
            <div className="job-alerts1">
              <p className="p5">574</p>
              <p className="applied-jobs2">Job Alerts</p>
            </div>
            <button className="frame-button">
              <div className="favorite-jobs-child" />
              <img
                className="bookmarksimple-icon4"
                alt=""
                src="/bellringing-2.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="edit-profile2">
          <div className="edit-profile-item" />
          <div className="your-profile">
            <img
              className="ellipse-shape-icon"
              alt=""
              src="/ellipse-18-1@2x.png"
            />
            <div className="your-profile-editing-container1">
              <p className="your-profile-editing1">
                Your profile editing is not completed.
              </p>
              <p className="complete-your-profile1">
                Complete your profile and build your custom resume.
              </p>
            </div>
          </div>
          <button className="edit-button3">
            <div className="edit-button-inner" />
            <div className="edit-profile3">{`Edit Profile `}</div>
          </button>
        </div>
      </div>
      <div className="job">
        <div className="job-container">
          <h3 className="recently-applied">Recently Applied</h3>
          <div className="text-content">
            <h3 className="view-all2">{`View All `}</h3>
            <img
              className="fiarrow-right-icon17"
              loading="eager"
              alt=""
              src="/fiarrowright.svg"
            />
          </div>
        </div>
        <div className="frame-parent3">
          <div className="frame-parent-child" />
          <div className="job4">Job</div>
          <div className="view-job-details">
            <div className="status-text">
              <div className="date-applied">Date Applied</div>
            </div>
            <div className="status2">Status</div>
            <div className="action1">Action</div>
          </div>
        </div>
      </div>
      <Job mapPin="/mappin.svg" />
      <Job mapPin="/mappin.svg" />
    </div>
  );
};

export default StatusActionFrame;
