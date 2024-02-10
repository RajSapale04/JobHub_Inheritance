import { useState } from "react";
// import "./LeftSide8Column.css";



const LeftSide8Column = ({
  welcomeBack,
  signIn,
  google,
  facebook,
  dontYouHaveAnAccount,
  signUp,
}) => {

  
  const [placeholderTextValue, setPlaceholderTextValue] = useState("");
  const [placeholderText1Value, setPlaceholderText1Value] = useState("");
  return (
    <div className="left-side-8-column">
      <div className="frame-parent4">
        <div className="welcome-back-parent">
          <h1 className="welcome-back-container">
            <span className="welcome-back">{welcomeBack}</span>
            <span> 👋</span>
          </h1>
          <div className="today-is-a-container">
            <span>
              <p className="today-is-a">{`Today is a new day. It's your day. You shape it. `}</p>
              <p className="today-is-a">
                Sign in to start growing your career.
              </p>
            </span>
          </div>
        </div>
        <form className="input-parent">
          <div className="input">
            <div className="label20">Email</div>
            <div className="input1">
              <div className="input2" />
              <input
                className="placeholder"
                placeholder="Example@email.com"
                type="text"
                value={placeholderTextValue}
                onChange={(event) =>
                  setPlaceholderTextValue(event.target.value)
                }
              />
            </div>
          </div>
          <div className="input">
            <div className="label21">Password</div>
            <div className="input1">
              <div className="input2" />
              <input
                className="placeholder1"
                placeholder="at least 8 characters"
                type="text"
                value={placeholderText1Value}
                onChange={(event) =>
                  setPlaceholderText1Value(event.target.value)
                }
              />
            </div>
          </div>
          <div className="forgot-password">Forgot Password?</div>
          <button className="main-button">
            <div className="sign-in">{signIn}</div>
          </button>
        </form>
        <div className="login-frame1">
          <div className="or-line">
            <div className="sign-up-call" />
            <div className="or">Or</div>
            <div className="sign-up-call" />
          </div>
          <button className="social-button5">
            <img className="google-icon" alt="" src={google} />
            <img className="facebook-icon" alt="" src={facebook} />
            <div className="sign-in-with">Sign in with Google</div>
          </button>
        </div>
        <div className="dont-you-have-container">
          <span className="dont-you-have-container1">
            <span>{dontYouHaveAnAccount}</span>
            <span className="sign-up">{signUp}</span>
          </span>
        </div>
      </div>
      <div className="copyright-text">
        <div className="all-rights-reserved">© 2023 ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
};

export default LeftSide8Column;
