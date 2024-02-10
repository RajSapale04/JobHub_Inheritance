import { useState } from "react";
import "./LeftSide8Column.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { Redirect } from "react-router-dom";


const Login = ({

  user
}) => {

  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {login,error,isloading}= useLogin()

    const handleSubmit = async (e)=>{
    e.preventDefault()
    await login(email, password , user)
    


  }



  return (
    <div className="left-side-8-column">
      <div className="frame-parent4">
        <div className="welcome-back-parent">
          <h1 className="welcome-back-container">
            <span className="welcome-back">Welcome back {user}</span>
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

          <button type="submit" className="main-button">
            <div className="sign-in">Login</div>
          </button>
          {error && <div>{error}</div> }
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
            <span>Don't you have an account?</span>
            <Link to={`/${user}/signup`}>


            <span className="sign-up">Sign Up</span>
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

export default Login;
