import "./Hero2.css";

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
          <div className="jobseeker1">Jobseeker</div>
        </div>
      </div>
      <div className="employer-container">
        <div className="jobseeker1">Employer</div>
      </div>
    </div>
  );
};

export default Hero2;