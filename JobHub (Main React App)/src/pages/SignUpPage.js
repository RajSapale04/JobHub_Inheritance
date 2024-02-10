import Signup from "../components/signup";
import LeftSide8ColumnC from "../components/company/LeftSide8Column";
import "./SignUpPage.css";
import { useParams } from "react-router-dom";

const SignUpPage = () => {
  const {user}= useParams();


  return (
    <div className="sign-up-page">
      <main className="main-container">
        <Signup
          user={user}
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
