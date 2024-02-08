import LeftSide8Column from "../components/LeftSide8Column";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <main className="main-container1">
        <LeftSide8Column
          welcomeBack="Welcome Back "
          signIn="Sign in"
          google="/google.svg"
          facebook="/facebook.svg"
          dontYouHaveAnAccount="Don't you have an account? "
          signUp="Sign up"
        />
        <div className="art1">
          <img
            className="screenshot-2024-02-02-004906-11"
            alt=""
            src="/screenshot-20240202-004906-1@2x.png"
          />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
