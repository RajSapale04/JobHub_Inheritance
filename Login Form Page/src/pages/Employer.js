import TimeGrowthFrame from "../components/TimeGrowthFrame";
import "./Employer.css";

const Employer = () => {
  return (
    <div className="employer">
      <img className="background-icon" alt="" src="/background.svg" />
      <header className="navbar">
        <h2 className="jobhub">JobHub</h2>
        <div className="registration-form-frame">
          <div className="already-registered">Already Registered?</div>
          <button className="login-frame">
            <div className="login-here">Login Here</div>
          </button>
        </div>
      </header>
      <TimeGrowthFrame />
    </div>
  );
};

export default Employer;
