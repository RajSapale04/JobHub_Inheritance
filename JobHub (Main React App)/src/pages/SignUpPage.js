import LeftSide8Column from "../components/LeftSide8Column";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <main className="main-container">
        <LeftSide8Column
          welcomeBack="Welcome "
          signIn="Sign up"
          google="/google.svg"
          facebook="/facebook.svg"
          dontYouHaveAnAccount="Already have an account? "
          signUp="Login Here"
        />
        <div className="art">
          <img
            className="screenshot-2024-02-02-004906-1"
            alt=""
            src="/screenshot-20240202-004906-1@2x.png"
          />
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
