import "./Hero1.css";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="hero2">
      <div className="hero-inner" />
      <img
        className="job-employment-png-image-1-icon"
        loading="eager"
        alt=""
        src="/jobemploymentpngimage-1@2x.png"
      />
      <div className="welcome-text">
        <h1 className="welcome1">Welcome!</h1>
        <div className="ready-for-the">Ready for the next step?</div>
      </div>
      <div className="empty-frame">
        <div className="empty-frame1">
          <Link to="/jobseeker">
            <div className="jobseeker1">Jobseeker</div>
          </Link>
        </div>
      </div>
      <div className="empty-frame2">
        <Link to="/employer">
          <div className="jobseeker1">Employer</div>
        </Link>
      </div>
    </div>
  );
};

export default Hero1;
