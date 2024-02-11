import { useState } from "react";
import "./LeftSide8Column.css";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = ({
  user
}) => {

  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {signup, error, isLoading} = useSignup()
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    await signup(email, password , user)

  }


  return (
    <div className="left-side-8-column">
      <div className="frame-parent4">
        <div className="welcome-back-parent">
          <h1 className="welcome-back-container">
            <span className="welcome-back">welcome {user}</span>
            <span> 👋</span>
          </h1>
          <div className="today-is-a-container">
            <span>
              <p className="today-is-a">{`Today is a new day. It's your day. You shape it. `}</p>
              <p className="today-is-a">
                Sign up to start growing your career.
              </p>
            </span>
          </div>
        </div>
        <form className="input-parent" onSubmit={handleSubmit}>
          <div className="input">
            <div className="label20">Email</div>
            <div className="input1">
              <div className="input2" />
              <input
                className="placeholder"
                placeholder="Example@email.com"
                type="email"
                value={email}
                onChange={(event) =>
                  setemail(event.target.value)
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
                type="password"
                value={password}
                onChange={(event) =>
                  setpassword(event.target.value)
                }
              />
            </div>
          </div>

          <button type="submit" disabled={isLoading}   className="main-button">
            <div className="sign-in">sign up</div>
          </button>
          {error && <div>{error}</div>}
        </form>
        {/* <div className="login-frame1">
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
        </div> */}
        <div className="dont-you-have-container">
          <span className="dont-you-have-container1">
            <span>Already have an account?</span>
            <Link to={`/${user}/login`}>

            <span className="sign-up">Login</span>
            </Link>
          </span>
        </div>
      </div>
      <div className="copyright-text">
        <div className="all-rights-reserved">© 2023 ALL RIGHTS RESERVED</div>
      </div>
    </div>
  );
};

export default Signup;
