import Input from "./Input";
import "./FRAMEWelcomeBack.css";
import { Link } from "react-router-dom";


const FRAMEWelcomeBack = () => {
  return (
    <div className="f-r-a-m-e-welcome-back">
      <div className="welcome-back-parent">
        <h1 className="welcome-back-container">
          <span className="welcome-back">{`Welcome Back `}</span>
          <span> 👋</span>
        </h1>
        <div className="today-is-a-container">
          <span>
            <p className="today-is-a">{`Today is a new day. It's your day. You shape it. `}</p>
            <p className="today-is-a">Sign in to start growing your career.</p>
          </span>
        </div>
      </div>
      <form className="input-password">
        <Input label="Email" placeholderPlaceholder="Example@email.com" />
        <Input
          label="Password"
          placeholderPlaceholder="at least 8 characters"
        />
        <div className="forgot-password">Forgot Password?</div>
        <button className="main-button">
          
          <div className="sign-in">Sign in</div>
        </button>
      </form>
      <div className="frame-or-sign-in">
        <div className="or-line-frame">
          <div className="or-line-frame-child" />
          <div className="or">Or</div>
          <div className="or-line-frame-child" />
        </div>
        <button className="social-button">
          <img className="google-icon" alt="" src="/google.svg" />
          <img className="facebook-icon" alt="" src="/facebook.svg" />
          <div className="sign-in-with">Sign in with Google</div>
        </button>
      </div>
      <div className="dont-you-have-container">
        <span className="dont-you-have-container1">
          <span>{`Don't you have an account? `}</span>
          <Link to="/">
          <span className="sign-up">Sign up</span></Link>
        </span>
      </div>
    </div>
  );
};

export default FRAMEWelcomeBack;
