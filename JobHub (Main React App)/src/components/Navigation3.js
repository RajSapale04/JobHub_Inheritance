import "./Navigation3.css";

const Navigation3 = ({
  briefcase1,
  image1,
  caretDown,
  fisearch,
  bellRinging,
  ellipse18,
}) => {
  return (
    <div className="navigation6">
      <div className="quick-link2">
        <div className="logo5">
          <img
            className="briefcase-1-icon8"
            loading="eager"
            alt=""
            src={briefcase1}
          />
          <h2 className="jobpilot4">JobHub</h2>
        </div>
        <div className="search2">
          <div className="parent-container">
            <div className="salary-label">
              <img className="image-1-icon5" alt="" src={image1} />
              <div className="india2">India</div>
              <img className="caretdown-icon2" alt="" src={caretDown} />
            </div>
            <div className="map-pin-icon" />
            <div className="fisearch-group">
              <img
                className="fisearch-icon2"
                loading="eager"
                alt=""
                src={fisearch}
              />
              <div className="job-tittle-keyword2">
                Job title, keyword, company
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button3">
        <img className="bellringing-icon6" alt="" src={bellRinging} />
        <img className="button-item" loading="eager" alt="" src={ellipse18} />
      </div>
    </div>
  );
};

export default Navigation3;
