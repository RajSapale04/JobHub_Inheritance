import FrameheroSection from "../components/FrameheroSection";
import "./JobSeeker.css";

const JobSeeker = () => {
  return (
    <div className="jobseeker">
      <img className="background-icon1" alt="" src="/background.svg" />
      <header className="navbar1">
        <h2 className="jobhub1">JobHub</h2>
        <div className="job-hub-text">
          <div className="already-registered1">Already Registered?</div>
          <button className="login-frame1">
            <div className="login-here1">Login Here</div>
          </button>
        </div>
      </header>
      <FrameheroSection />
    </div>
  );
};

export default JobSeeker;
