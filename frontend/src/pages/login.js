import '../styles/login.css'

const Login=()=>{
    return(
        <div>
            <div className="header">
      <h1>Welcome!</h1>
    </div>

    <div className="container">
      <form id="loginForm">
        <label for="loginEmail">Email:</label>
        <input
          type="email"
          id="loginEmail"
          placeholder="Enter your email..."
          required
        />

        <label for="loginPassword">Password:</label>
        <input
          type="password"
          id="loginPassword"
          placeholder="Enter your password..."
          required
        />

        <button type="submit">Login</button>
      </form>

      <div id="loginMessage" className="message"></div>

      <div className="google-login">
        <p>Or log in with Google:</p>
        <div class="g-signin2" data-onsuccess="onGoogleSignIn"></div>
      </div>

      <div className="signup-link">
        <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
      </div>
    </div>

            
        </div>
    )

};

export default Login;