const SignUp =()=>{
    return(
        <div>
            <div className="header">
      <h1>Sign Up!</h1>
    </div>

    <div className="container">
      <form id="signupForm" onsubmit="return validateForm()">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email..."
          required
        />

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password..."
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <div id="message" class="message"></div>

      <div className="google-login">
        <p>Or sign up with Google:</p>
        <div className="g-signin2" data-onsuccess="onGoogleSignIn"></div>
      </div>

      <div className="back-to-login">
        <p>Already have an account? <a href="login.html">Back to Login</a></p>
      </div>
    </div>

        </div>
    )
};

export default SignUp;