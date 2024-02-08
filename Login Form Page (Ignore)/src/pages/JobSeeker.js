import FrameheroSection from "../components/FrameheroSection";
import "./JobSeeker.css";
import { Link } from "react-router-dom";

const JobSeeker = () => {
  return (
    <div className="jobseeker">
      <img className="background-icon1" alt="" src="/background.svg" />
      <header className="navbar1">
        <div className="navbar-item" />
        <h2 className="jobhub2">JobHub</h2>
        <h2 className="jobhub1">JobHub</h2>

        <div className="job-hub-text">
          <div className="already-registered2">Already Registered?</div>
          <div className="already-registered1">Already Registered?</div>

          <button className="login-frame1">
            <Link to="/LoginPage">
              <div className="login-here1">Login Here</div>
            </Link>
            <div className="login-here1">Login Here</div>

          </button>
        </div>
      </header>
      <FrameheroSection />
    </div>
  );
};

export default JobSeeker;
