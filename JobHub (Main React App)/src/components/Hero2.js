import "./Hero2.css";
import { Link } from "react-router-dom";
const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="hero-inner" />
      <img
        className="job-employment-png-image-1-icon"
        loading="eager"
        alt=""
        src="/jobemploymentpngimage-1@2x.png"
      />
      <div className="welcome-parent">
        <h2 className="welcome1">Welcome!</h2>
        <div className="ready-for-the">Ready for the next step?</div>
      </div>
      <div className="employer-title">
        <div className="jobseeker-label">
          <Link to={'/user/login'}>

          <div className="jobseeker1">Jobseeker</div>
          </Link>
        </div>
      </div>
      <div className="employer-container">
        <Link to={'/company/login'}>

        <div className="jobseeker1">Employer</div>
        </Link>
      </div>
    </div>
  );
};

export default Hero2;
