import Hero1 from "../components/Hero1";
import "./JobSeeker.css";

const JobSeeker = () => {
  return (
    <div className="jobseeker">
      <div className="background-parent">
        <img className="background-icon1" alt="" src="/background.svg" />
        <header className="navbar1">
          <b className="jobhub3">JobHub</b>
          <div className="already-registered2">Already Registered?</div>
          <div className="navbar-item" />
          <h2 className="jobhub4">JobHub</h2>
          <div className="inner-frame">
            <div className="already-registered3">Already Registered?</div>
            <button className="login-frame">
              <div className="login-here1">Login Here</div>
            </button>
          </div>
        </header>
        <div className="hero-section1">
          <Hero1 />
        </div>
      </div>
    </div>
  );
};

export default JobSeeker;
