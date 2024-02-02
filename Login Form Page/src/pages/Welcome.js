import Hero1 from "../components/Hero1";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <img className="background-icon2" alt="" src="/background.svg" />
      <div className="navbar2">
        <header className="navbar-inner" />
        <h2 className="jobhub3">JobHub</h2>
        <div className="already-registered-parent">
          <div className="already-registered3">Already Registered?</div>
          <button className="login-here-text">
            <Link to="/LoginPage">
              <div className="login-here2">Login Here</div>
            </Link>
          </button>
        </div>
      </div>
      <Hero1 />
    </div>
  );
};

export default Welcome;
