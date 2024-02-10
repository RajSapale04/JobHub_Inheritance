import "./Job.css";

const Job = ({ mapPin }) => {
  return (
    <div className="job11">
      <div className="job1-inner" />
      <div className="job1-child1" />
      <div className="rectangle-shape2">
        <div className="salary-text1">
          <img
            className="microsoft-1-icon4"
            loading="eager"
            alt=""
            src="/microsoft-1@2x.png"
          />
          <div className="job-card-frame1">
            <div className="front-end-developer-group">
              <h3 className="front-end-developer4">Front End Developer</h3>
              <div className="type5">
                <div className="full-time5">Full-Time</div>
              </div>
            </div>
            <div className="frame-container1">
              <div className="view-all-button1">
                <img
                  className="mappin-icon4"
                  loading="eager"
                  alt=""
                  src={mapPin}
                />
                <div className="dhaka-bangladesh5">Dhaka, Bangladesh</div>
              </div>
              <div className="salary-20000-1">Salary: $20,000 - $25,000</div>
            </div>
          </div>
        </div>
        <div className="employer2">
          <div className="feb-2-20231">Feb 2, 2023 20:45</div>
        </div>
      </div>
      <div className="active-status1">
        <div className="active-group">
          <div className="active8">Active</div>
          <button className="view-button4">
            <div className="view-details1">View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
