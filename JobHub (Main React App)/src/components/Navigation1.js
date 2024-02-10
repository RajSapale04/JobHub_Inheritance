import Navigation3 from "./Navigation3";
import "./Navigation1.css";

const Navigation1 = () => {
  return (
    <header className="navigation5">
      <div className="map-trifold-card">
        <div className="line-divider">
          <div className="nav-link14">
            <div className="home5">Home</div>
          </div>
          <div className="nav-link15">
            <div className="home6">Find Job</div>
          </div>
          <div className="nav-link16">
            <div className="home7">Find Employers</div>
          </div>
          <div className="nav-link14">
            <div className="home8">Dashboard</div>
          </div>
          <div className="nav-link14">
            <div className="home9">Job Alerts</div>
          </div>
          <div className="nav-link16">
            <div className="home10">Customer Supports</div>
          </div>
        </div>
        <div className="text-job-location">
          <div className="frame-contact-details">
            <img
              className="phonecall-icon2"
              loading="eager"
              alt=""
              src="/phonecall.svg"
            />
            <div className="frame-footer-links">+91-89764-37846</div>
          </div>
          <div className="nav-link20">
            <img className="image-1-icon4" alt="" src="/image-1@2x.png" />
            <div className="link-browse-jobs">
              <div className="english2">English</div>
              <img
                className="fichevron-down-icon2"
                alt=""
                src="/fichevrondown.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Navigation3
        briefcase1="/briefcase-1.svg"
        image1="/image-1-1@2x.png"
        caretDown="/caretdown.svg"
        fisearch="/fisearch.svg"
        bellRinging="/bellringing.svg"
        ellipse18="/navigation@2x.png"
      />
    </header>
  );
};

export default Navigation1;
