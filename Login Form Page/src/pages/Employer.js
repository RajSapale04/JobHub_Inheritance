import TimeGrowthFrame from "../components/TimeGrowthFrame";
import "./Employer.css";
import { Link } from "react-router-dom";


const Employer = () => {
  return (
    <div className="employer">
      <img className="background-icon" alt="" src="/background.svg" />
      <header className="navbar">
        <b className="jobhub">JobHub</b>
        <div className="already-registered">Already Registered?</div>
        <div className="navbar-child" />
        <h2 className="jobhub1">JobHub</h2>
        <div className="registration-form-frame">
          <div className="already-registered1">Already Registered?</div>
          <button className="login-frame">
            <Link to="/LoginPage">
              <div className="login-here">Login Here</div>
            </Link>
          </button>
        </div>
      </header>
      <TimeGrowthFrame />
    </div>
  );
};

export default Employer;
