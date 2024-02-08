import Hero2 from "../components/Hero2";
import { Link } from 'react-router-dom';

import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="background-group">
        <img className="background-icon2" alt="" src="/background.svg" />
        <header className="navbar2">
          <b className="jobhub5">JobHub</b>
          <div className="already-registered4">Already Registered?</div>
          <div className="navbar-inner" />
          <h3 className="jobhub6">JobHub</h3>
          <div className="main-frame1">
            <div className="already-registered5">Already Registered?</div>
            <button className="login-button">
              <Link to="/login-page">
              <div className="login-here2">Login Here</div></Link>
            </button>
          </div>
        </header>
        <Hero2 />
      </div>
    </div>
  );
};

export default Welcome;
