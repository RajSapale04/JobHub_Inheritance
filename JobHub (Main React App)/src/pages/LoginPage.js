import Login from "../components/login";
import "./LoginPage.css";
import { useParams } from "react-router-dom";

const LoginPage = () => {
  const {user}= useParams();
  return (
    <div className="login-page">
      <main className="main-container1">
        <Login
          user={user}
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
