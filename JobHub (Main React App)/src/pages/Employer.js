import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "./Employer.css";

const Employer = () => {
  return (
    <div className="employer1">
      <div className="first-name-frame">
        <img className="background-icon" alt="" src="/background.svg" />
       <div className="sticky"> <header className="navbar">
          <b className="jobhub">JobHub</b>
          <div className="already-registered">Already Registered?</div>
          <div className="navbar-child" />
          <Link className="job-link" to="/">
          <h3 className="jobhub1">JobHub</h3></Link>
          <div className="job-hub-frame">
            <div className="already-registered1">Already Registered?</div>
            <Link className="job-link" to="/:user/login">
            <button className="login-here-text">
              
              <div className="login-here">Login Here</div>
            </button></Link>
            
          </div>
        </header>
        </div>
        <div className="hero-section">
          <Hero />
        </div>
      </div>
    </div>
  );
};
export default Employer;
