import Hero1 from "../components/Hero1";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <img className="background-icon2" alt="" src="/background.svg" />
      <div className="navbar2">
        <h2 className="jobhub2">JobHub</h2>
        <div className="already-registered-parent">
          <div className="already-registered2">Already Registered?</div>
          <button className="login-here-text">
            <div className="login-here2">Login Here</div>
          </button>
        </div>
      </div>
      <Hero1 />
    </div>
  );
};

export default Welcome;
